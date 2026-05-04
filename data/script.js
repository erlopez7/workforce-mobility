async function fetchText(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return res.text();
}

async function fetchJson(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return res.json();
}

async function tryFetchText(path) {
  try {
    return await fetchText(path);
  } catch {
    return null;
  }
}

function parseCSV(csv) {
  const text = csv.trim();
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const headers = splitCSVLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = splitCSVLine(line);
    const row = {};
    headers.forEach((h, i) => {
      row[h] = values[i] ?? "";
    });
    return row;
  });
}

function getColumnCount(rows) {
  if (!rows || !rows.length) return 0;
  return Object.keys(rows[0] || {}).length;
}

function splitCSVLine(line) {
  const out = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(current.trim());
      current = "";
      continue;
    }
    current += ch;
  }
  out.push(current.trim());
  return out;
}

function renderRound1Metrics(metrics) {
  return metrics;
}

function renderRound2RiskSummary(rows) {
  const box = document.getElementById("round2-risk-summary");
  if (!box) return;
  const counts = rows.reduce((acc, row) => {
    const label = row.risk_label || "Unknown";
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  const total = rows.length;
  box.innerHTML = `
    <strong>Round 2 Coverage</strong><br />
    Occupations evaluated: ${total}<br />
    High Risk: ${counts["High Risk"] || 0}<br />
    Moderate Risk: ${counts["Moderate Risk"] || 0}<br />
    Low Risk: ${counts["Low Risk"] || 0}
  `;
}

function renderRound2RiskSummaryFromDistribution(distRows) {
  const box = document.getElementById("round2-risk-summary");
  if (!box) return;
  const labelRows = distRows.filter((r) => r.metric_type === "risk_label");
  const scoreRows = distRows.filter((r) => r.metric_type === "risk_score");
  const counts = {};
  labelRows.forEach((r) => {
    counts[r.metric_value] = Number(r.count || 0);
  });
  const total = labelRows.reduce((sum, r) => sum + Number(r.count || 0), 0);
  const scoreSummary = scoreRows
    .sort((a, b) => Number(a.metric_value) - Number(b.metric_value))
    .map((r) => `${r.metric_value}: ${r.count}`)
    .join(", ");
  box.innerHTML = `
    <strong>Round 2 Coverage</strong><br />
    Occupations evaluated: ${total}<br />
    High Risk: ${counts["High Risk"] || 0}<br />
    Moderate Risk: ${counts["Moderate Risk"] || 0}<br />
    Low Risk: ${counts["Low Risk"] || 0}<br />
    Risk score distribution: ${scoreSummary || "N/A"}
  `;
}

function renderRiskRules(rules) {
  const el = document.getElementById("risk-rules");
  if (!el) return;
  if (!rules) {
    el.innerHTML = "Risk rules file not found.";
    return;
  }
  const logic = (rules.risk_score_logic || []).map((r) => `<li>${r}</li>`).join("");
  const labels = rules.risk_label_logic || {};
  el.innerHTML = `
    <strong>Score logic</strong>
    <ul>${logic}</ul>
    <strong>Label mapping</strong><br />
    High Risk: ${labels["High Risk"] || "N/A"}<br />
    Moderate Risk: ${labels["Moderate Risk"] || "N/A"}<br />
    Low Risk: ${labels["Low Risk"] || "N/A"}
  `;
}

function renderMatchingWeights(weights) {
  const el = document.getElementById("matching-weights");
  if (!el) return;
  if (!weights) {
    el.innerHTML = "Matching weights file not found.";
    return;
  }
  const r2 = weights.round2_matching_engine || {};
  const low = r2.very_disadvantaged_and_disadvantaged || {};
  const high = r2.moderate_and_higher_opportunity || {};
  el.innerHTML = `
    <strong>Very Disadvantaged / Disadvantaged</strong><br />
    Safety: ${low.safety ?? "N/A"} | Access: ${low.access ?? "N/A"}<br /><br />
    <strong>Moderate / Higher Opportunity</strong><br />
    Safety: ${high.safety ?? "N/A"} | Access: ${high.access ?? "N/A"}
  `;
}

function renderDataInventory(manifest) {
  const host = document.getElementById("data-inventory");
  if (!host) return;
  if (!manifest || !Array.isArray(manifest.exported)) {
    host.innerHTML = "<p>Manifest not found.</p>";
    return;
  }
  const rows = manifest.exported
    .map((x) => {
      const rows = x.rows != null ? x.rows.toLocaleString() : "-";
      const cols = x.cols != null ? x.cols.toString() : "-";
      return `<tr><td>${x.file}</td><td>${rows}</td><td>${cols}</td></tr>`;
    })
    .join("");

  host.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>File</th>
          <th>Rows</th>
          <th>Columns</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderDataCredibility(inventoryRows, claimsJson) {
  const host = document.getElementById("data-credibility");
  const claimsHost = document.getElementById("data-claims");
  if (!host) return;

  const invMap = {};
  inventoryRows.forEach((r) => {
    invMap[r.table_name] = Number(r.row_count || 0);
  });

  const tracts = invMap.tract_master || invMap.tract_master_enriched || 0;
  const occupations = invMap.occupation_data || 0;
  const tasks = invMap.task_statements || 0;

  host.innerHTML = `
    <strong>Project scale evidence</strong><br />
    Neighborhood-level records: ${tracts ? tracts.toLocaleString() : "Data not available"}<br />
    Occupation records: ${occupations ? occupations.toLocaleString() : "Data not available"}<br />
    Task statement records: ${tasks ? tasks.toLocaleString() : "Data not available"}<br />
    Multi-source integration: neighborhood + education + occupation datasets.
  `;

  if (!claimsHost) return;
  const claims = Array.isArray(claimsJson?.claims) ? claimsJson.claims : [];
  if (!claims.length) {
    claimsHost.textContent = "Data claims: Data not available.";
    return;
  }
  claimsHost.innerHTML = claims
    .slice(0, 3)
    .map((c) => `${c.id}: ${c.description}`)
    .join("<br />");
}

function renderRound2Pipeline(availability) {
  const host = document.getElementById("round2-pipeline");
  if (!host) return;

  const steps = [
    {
      step: "1. DuckDB Ingestion",
      notebookAction: "Connect to clean local copy of team DuckDB and inspect key tables.",
      evidence: "occupation_data, task_statements, job_zones, tract_master_enriched",
      status: availability.inventory ? "Available" : "Data not available"
    },
    {
      step: "2. Tract Data Loading",
      notebookAction: "Load tract_master_enriched and identify mobility/income/opportunity columns.",
      evidence: "geo_context_tracts.csv",
      status: availability.tracts ? "Available" : "Data not available"
    },
    {
      step: "3. Data Quality + Imputation",
      notebookAction: "Audit nulls and apply KNN imputation for missing mobility values.",
      evidence: "null_audit_summary.csv",
      status: availability.nullAudit ? "Available" : "Data not available"
    },
    {
      step: "4. Neighborhood Segmentation",
      notebookAction: "Standardize features and cluster into 4 youth opportunity groups (KMeans).",
      evidence: "model2_cluster_profiles_mean.csv or derived from geo_context_tracts.csv",
      status: availability.clusters ? "Available" : "Data not available"
    },
    {
      step: "5. Full Occupation Risk Scoring",
      notebookAction: "Build task features, merge job zone data, compute rule-based risk score and labels.",
      evidence: "occupation_risk_round2.csv + occupation_risk_distribution.csv + model_rules_round2.csv",
      status: availability.occupationRisk ? "Available" : "Data not available"
    },
    {
      step: "6. Career Matching Engine",
      notebookAction: "Score careers by safety/access with group-specific weights and rank top pathways.",
      evidence: "career_recommendations_by_group.csv + matching_weights_round2.csv",
      status: availability.recommendations ? "Available" : "Data not available"
    },
    {
      step: "7. Education Outcome Explorer",
      notebookAction: "Use tract-level education and labor indicators for group-level ROI context.",
      evidence: "geo_context_tracts.csv and state/group summaries",
      status: availability.tracts ? "Available" : "Data not available"
    },
    {
      step: "8. Final Presentation Outputs",
      notebookAction: "Generate youth-group summaries, top risk occupations, and recommendation tables.",
      evidence: "table_coverage_report.csv + round1_vs_round2_instructor_notes.json",
      status: availability.coverage ? "Available" : "Data not available"
    }
  ];

  host.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Notebook Step</th>
          <th>What the Analysis Does</th>
          <th>Website Evidence Table</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${steps
          .map(
            (s) => `
          <tr>
            <td>${s.step}</td>
            <td>${s.notebookAction}</td>
            <td><code>${s.evidence}</code></td>
            <td>${s.status}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderRoundProgress(manifest, notes) {
  const host = document.getElementById("round-progress");
  if (!host) return;
  const exported = Array.isArray(manifest?.exported)
    ? manifest.exported
    : Object.entries(manifest?.files || {}).map(([file, meta]) => ({
        file,
        rows: meta?.rows
      }));
  const r2Occ =
    exported.find((x) => x.file === "occupation_risk_round2.csv" || x.file === "model1_round2_occupations.csv")?.rows || 0;
  const r2Tracts =
    exported.find((x) => x.file === "geo_context_tracts.csv" || x.file === "model2_tracts_export.csv")?.rows || 0;
  const round1Text = notes?.round1?.model1 || "Round 1 baseline established supervised approach.";
  const round2Text = notes?.round2?.model1 || "Round 2 scaled to interpretable rule-based scoring.";

  host.innerHTML = `
    <div class="progress-card">
      <h3>Round 1: Baseline Prototype</h3>
      <ul>
        <li>Small supervised model proved initial concept.</li>
        <li>Early clustering and matching validated personalization logic.</li>
        <li>Known gaps: limited scale and incomplete tract handling.</li>
      </ul>
      <p><strong>Evidence:</strong> ${round1Text}</p>
    </div>
    <div class="progress-card">
      <h3>Round 2: Scalable Platform</h3>
      <ul>
        <li>Full occupation pipeline with interpretable risk rules.</li>
        <li>KNN-imputed tract data and stable youth segmentation.</li>
        <li>Production-oriented recommendations by opportunity group.</li>
      </ul>
      <p><strong>Evidence:</strong> ${round2Text}</p>
      <p><strong>Scale shown here:</strong> ${r2Occ.toLocaleString()} occupations, ${r2Tracts.toLocaleString()} tract rows in the web export.</p>
    </div>
  `;
}

function renderMapSummary(tracts, stateSummaryRows = []) {
  const host = document.getElementById("map-summary");
  const barHost = document.getElementById("state-bars");
  const mapHost = document.getElementById("state-map");
  const detailHost = document.getElementById("state-map-detail");
  const legendHost = document.getElementById("state-map-legend");
  if (!host || !barHost) return;
  const entries = stateSummaryRows.length
    ? stateSummaryRows
        .map((r) => [r.state_abbr || "NA", Number(r.tract_count || 0)])
        .sort((a, b) => b[1] - a[1])
    : Object.entries(
        tracts.reduce((acc, row) => {
          const s = row.state_abbr || "NA";
          acc[s] = (acc[s] || 0) + 1;
          return acc;
        }, {})
      ).sort((a, b) => b[1] - a[1]);
  const top = entries.slice(0, 8);
  const max = top.length ? top[0][1] : 1;
  host.innerHTML = `
    <strong>Geographic coverage summary</strong><br />
    States represented: ${entries.length}<br />
    Top states shown below by tract count.
  `;

  if (mapHost) {
    const countsByState = Object.fromEntries(entries);
    const summaryByState = {};
    stateSummaryRows.forEach((r) => {
      const abbr = (r.state_abbr || "").trim();
      if (!abbr) return;
      summaryByState[abbr] = {
        tract_count: Number(r.tract_count || 0),
        avg_pov20: Number(r.avg_pov20 || 0),
        avg_mob_up: Number(r.avg_mob_up || 0),
        avg_inc20: Number(r.avg_inc20 || 0),
        avg_opp_gap: Number(r.avg_opp_gap || 0),
        disadv_tract_share: Number(r.disadv_tract_share || 0)
      };
    });
    const maxState = entries.length ? Math.max(...entries.map((x) => x[1])) : 1;
    const minState = entries.length ? Math.min(...entries.map((x) => x[1])) : 0;
    const scale = (val) => {
      if (!Number.isFinite(val)) return 0;
      if (maxState === minState) return 0.6;
      return (val - minState) / (maxState - minState);
    };
    const colorFor = (val) => {
      const t = scale(val);
      const light = 92 - t * 40;
      return `hsl(200, 85%, ${light}%)`;
    };
    if (legendHost) {
      const minTxt = minState.toLocaleString();
      const maxTxt = maxState.toLocaleString();
      legendHost.innerHTML = `
        <div class="map-legend">
          <span>Lower tract count</span>
          <span class="map-legend-bar"></span>
          <span>Higher tract count</span>
          <span>(${minTxt} to ${maxTxt})</span>
        </div>
      `;
    }
    const plotRows = stateSummaryRows
      .map((r) => ({
        state: String(r.state_abbr || "").trim(),
        tract_count: Number(r.tract_count || 0),
        avg_pov20: Number(r.avg_pov20 || 0),
        avg_mob_up: Number(r.avg_mob_up || 0),
        avg_inc20: Number(r.avg_inc20 || 0),
        avg_opp_gap: Number(r.avg_opp_gap || 0),
        disadv_tract_share: Number(r.disadv_tract_share || 0)
      }))
      .filter((r) => /^[A-Z]{2}$/.test(r.state) && r.state !== "PR");

    let popup = null;
    let tooltip = null;
    const updateDetail = (abbr) => {
      const val = countsByState[abbr];
      if (!detailHost) return;
      if (!Number.isFinite(val)) {
        detailHost.textContent = `${abbr}: Data not available in current export.`;
        return;
      }
      detailHost.textContent = `${abbr}: ${val.toLocaleString()} tracts in current export.`;
    };
    const removePopup = () => {
      if (popup && popup.parentNode) popup.parentNode.removeChild(popup);
      popup = null;
    };
    const removeTooltip = () => {
      if (tooltip && tooltip.parentNode) tooltip.parentNode.removeChild(tooltip);
      tooltip = null;
    };
    const openTooltip = (tile, abbr) => {
      removeTooltip();
      const val = countsByState[abbr];
      tooltip = document.createElement("div");
      tooltip.className = "state-tooltip";
      tooltip.textContent = Number.isFinite(val) ? `${abbr}: ${val.toLocaleString()} tracts` : `${abbr}: no data`;
      mapHost.appendChild(tooltip);
      const mapRect = mapHost.getBoundingClientRect();
      const tileRect = tile.getBoundingClientRect();
      tooltip.style.left = `${tileRect.left - mapRect.left + tileRect.width / 2}px`;
      tooltip.style.top = `${tileRect.top - mapRect.top}px`;
    };
    const openPopup = (tile, abbr) => {
      removePopup();
      const stats = summaryByState[abbr];
      popup = document.createElement("div");
      popup.className = "state-popup";
      if (!stats) {
        popup.innerHTML = `
          <h4>${abbr}</h4>
          <div>Data not available in current export.</div>
        `;
      } else {
        popup.innerHTML = `
          <h4>${abbr} Key Data</h4>
          <div><strong>Tract count:</strong> ${stats.tract_count.toLocaleString()}</div>
          <div><strong>Avg mobility:</strong> ${stats.avg_mob_up.toFixed(3)}</div>
          <div><strong>Avg poverty:</strong> ${formatPctFromUnit(stats.avg_pov20)}</div>
          <div><strong>Avg income:</strong> ${formatMoney(stats.avg_inc20)}</div>
          <div><strong>Avg opportunity gap:</strong> ${stats.avg_opp_gap.toFixed(3)}</div>
          <div><strong>Disadvantaged share:</strong> ${formatPctFromUnit(stats.disadv_tract_share)}</div>
        `;
      }
      mapHost.appendChild(popup);
      const mapRect = mapHost.getBoundingClientRect();
      const tileRect = tile.getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();
      let left = tileRect.left - mapRect.left + tileRect.width + 8;
      let topPos = tileRect.top - mapRect.top - 6;
      if (left + popupRect.width > mapRect.width) {
        left = tileRect.left - mapRect.left - popupRect.width - 8;
      }
      if (left < 0) left = 4;
      if (topPos + popupRect.height > mapRect.height) {
        topPos = Math.max(4, mapRect.height - popupRect.height - 4);
      }
      if (topPos < 0) topPos = 4;
      popup.style.left = `${left}px`;
      popup.style.top = `${topPos}px`;
    };
    if (window.Plotly && plotRows.length) {
      const trace = {
        type: "choropleth",
        locationmode: "USA-states",
        locations: plotRows.map((r) => r.state),
        z: plotRows.map((r) => r.tract_count),
        text: plotRows.map((r) => r.state),
        customdata: plotRows.map((r) => [
          r.tract_count,
          r.avg_mob_up,
          r.avg_pov20,
          r.avg_inc20,
          r.avg_opp_gap,
          r.disadv_tract_share
        ]),
        colorscale: "Blues",
        marker: { line: { color: "#334155", width: 0.8 } },
        hovertemplate:
          "<b>%{location}</b><br>" +
          "Tract count: %{customdata[0]:,}<br>" +
          "Avg mobility: %{customdata[1]:.3f}<br>" +
          "Avg poverty: %{customdata[2]:.1%}<br>" +
          "Avg income: $%{customdata[3]:,.0f}<br>" +
          "Avg opportunity gap: %{customdata[4]:.3f}<br>" +
          "Disadvantaged share: %{customdata[5]:.1%}<extra></extra>",
        colorbar: { title: "Tract count", thickness: 12 }
      };
      const layout = {
        margin: { t: 8, r: 8, b: 8, l: 8 },
        geo: {
          scope: "usa",
          projection: { type: "albers usa" },
          showland: true,
          landcolor: "#f8fafc",
          showlakes: true,
          lakecolor: "#eaf4ff",
          bgcolor: "rgba(0,0,0,0)"
        },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)"
      };
      window.Plotly.newPlot(mapHost, [trace], layout, {
        displayModeBar: false,
        responsive: true
      });
      mapHost.on("plotly_click", (ev) => {
        const point = ev?.points?.[0];
        if (!point) return;
        const abbr = point.location;
        updateDetail(abbr);
        removeTooltip();
        const pseudoTile = {
          getBoundingClientRect: () => {
            const rect = mapHost.getBoundingClientRect();
            return {
              left: rect.left + rect.width * 0.5,
              top: rect.top + rect.height * 0.35,
              width: 0,
              height: 0
            };
          }
        };
        openPopup(pseudoTile, abbr);
      });
      if (mapHost._outsideClickHandler) {
        document.removeEventListener("click", mapHost._outsideClickHandler);
      }
      mapHost._outsideClickHandler = (e) => {
        if (!mapHost.contains(e.target)) {
          removePopup();
          removeTooltip();
        }
      };
      document.addEventListener("click", mapHost._outsideClickHandler);
    }
  }

  barHost.innerHTML = top
    .map(
      ([state, count]) => `
      <div class="bar-row">
        <div>${state}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%"></div></div>
        <div>${count}</div>
      </div>
    `
    )
    .join("");
}

function renderDashboardMetrics(tracts, clusters, dashboardRows = []) {
  const host = document.getElementById("dashboard-metrics");
  if (!host) return;
  if (dashboardRows.length) {
    const nums = (col) =>
      dashboardRows.map((r) => Number(r[col])).filter((v) => Number.isFinite(v) && v !== 0);
    const mean = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null);

    const mob = mean(nums("avg_mob_up"));
    const inc = mean(nums("avg_inc20"));
    const pov = mean(nums("avg_pov20"));
    const earnings10 = mean(nums("avg_sc_earn10_mean"));
    const cost = mean(nums("avg_sc_cost_mean"));

    const sortedByMob = [...dashboardRows].sort((a, b) => Number(a.avg_mob_up) - Number(b.avg_mob_up));
    const low = sortedByMob[0];
    const high = sortedByMob[sortedByMob.length - 1];
    const gap = low && high ? Number(high.avg_mob_up) - Number(low.avg_mob_up) : null;

    const cards = [
      { label: "Average upward mobility", value: mob != null ? mob.toFixed(3) : "Data not available" },
      { label: "Average household income", value: inc != null ? formatMoney(inc) : "Data not available" },
      { label: "Average poverty rate", value: pov != null ? formatPctFromUnit(pov) : "Data not available" },
      { label: "Mobility gap (high-low group)", value: gap != null ? gap.toFixed(3) : "Data not available" },
      { label: "Avg earnings (10-year)", value: earnings10 != null ? formatMoney(earnings10) : "Data not available" },
      { label: "Avg education cost", value: cost != null ? formatMoney(cost) : "Data not available" }
    ];

    host.innerHTML = cards
      .map(
        (c) => `
      <div class="stat-card">
        <div class="stat-label">${c.label}</div>
        <div class="stat-value">${c.value}</div>
      </div>
    `
      )
      .join("");
    return;
  }

  const mean = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);

  const mobility = tracts.map((r) => Number(r.mob_up)).filter((v) => Number.isFinite(v));
  const income = tracts.map((r) => Number(r.inc20)).filter((v) => Number.isFinite(v));
  const poverty = tracts.map((r) => Number(r.pov20)).filter((v) => Number.isFinite(v));

  const sortedByMob = [...clusters].sort((a, b) => Number(a.mob_up) - Number(b.mob_up));
  const low = sortedByMob[0];
  const high = sortedByMob[sortedByMob.length - 1];
  const gap = low && high ? Number(high.mob_up) - Number(low.mob_up) : 0;

  const cards = [
    { label: "Average upward mobility", value: mean(mobility).toFixed(3) },
    { label: "Average household income", value: formatMoney(mean(income)) },
    { label: "Average poverty rate", value: formatPctFromUnit(mean(poverty)) },
    { label: "Mobility gap (high-low group)", value: gap.toFixed(3) }
  ];

  host.innerHTML = cards
    .map(
      (c) => `
      <div class="stat-card">
        <div class="stat-label">${c.label}</div>
        <div class="stat-value">${c.value}</div>
      </div>
    `
    )
    .join("");
}

function formatPctFromUnit(value, digits = 1) {
  return `${(Number(value) * 100).toFixed(digits)}%`;
}

function formatMoney(value) {
  return `$${Math.round(Number(value)).toLocaleString()}`;
}

function renderEvidenceCards({ manifest, tracts, recs }) {
  const host = document.getElementById("evidence-cards");
  if (!host) return;
  const exported = Array.isArray(manifest?.exported)
    ? manifest.exported
    : Object.entries(manifest?.files || {}).map(([file, meta]) => ({
        file,
        rows: meta?.rows
      }));
  const tractRows =
    exported.find((x) => x.file === "geo_context_tracts.csv" || x.file === "model2_tracts_export.csv")?.rows ??
    tracts.length;
  const occRows =
    exported.find((x) => x.file === "occupation_risk_round2.csv" || x.file === "model1_round2_occupations.csv")?.rows ??
    null;
  const youthGroups = new Set((tracts || []).map((r) => r.youth_group).filter(Boolean));
  const recCount = recs.length;
  const disadvCount = (tracts || []).filter((r) => Number(r.flag_disadv) === 1).length;
  const disadvShare = tractRows ? (disadvCount / tractRows) * 100 : 0;

  const cards = [
    { label: "Neighborhood rows in web export", value: tractRows.toLocaleString() },
    { label: "Occupations in Round 2 risk export", value: occRows ? occRows.toLocaleString() : "Not exported" },
    { label: "Youth opportunity groups identified", value: youthGroups.size.toString() },
    { label: "Career recommendations in demo table", value: recCount.toString() },
    { label: "Disadvantaged tract share (export)", value: `${disadvShare.toFixed(1)}%` }
  ];

  host.innerHTML = cards
    .map(
      (c) => `
      <div class="stat-card">
        <div class="stat-label">${c.label}</div>
        <div class="stat-value">${c.value}</div>
      </div>
    `
    )
    .join("");

  const hero = document.getElementById("hero-kpis");
  if (hero) {
    const recDemo = recCount;
    hero.innerHTML = `
      <h3>At a Glance</h3>
      <div class="kpi-row"><span>Neighborhood rows</span><strong>${tractRows.toLocaleString()}</strong></div>
      <div class="kpi-row"><span>Occupations evaluated</span><strong>${occRows ? occRows.toLocaleString() : "Data not available"}</strong></div>
      <div class="kpi-row"><span>Opportunity groups</span><strong>${youthGroups.size}</strong></div>
      <div class="kpi-row"><span>Demo recommendations</span><strong>${recDemo}</strong></div>
    `;
  }
}

function renderDataEvidence(tracts, clusterRows) {
  const el = document.getElementById("data-evidence");
  if (!el) return;
  const uniqueStates = new Set(tracts.map((r) => r.state_abbr).filter(Boolean)).size;
  const uniqueCities = new Set(tracts.map((r) => r.city).filter(Boolean)).size;

  const groups = [...clusterRows].sort((a, b) => Number(a.mob_up) - Number(b.mob_up));
  if (!groups.length) {
    el.innerHTML = `
      <strong>Data quality and pattern evidence</strong><br />
      Tracts in export: ${tracts.length.toLocaleString()} across ${uniqueStates} states and ${uniqueCities} cities.<br />
      Cluster profile file is empty.
    `;
    return;
  }
  const low = groups[0];
  const high = groups[groups.length - 1];
  const mobGap = Number(high.mob_up) - Number(low.mob_up);
  const incomeGap = Number(high.inc20) - Number(low.inc20);

  el.innerHTML = `
    <strong>Data quality and pattern evidence</strong><br />
    Tracts in export: ${tracts.length.toLocaleString()} across ${uniqueStates} states and ${uniqueCities} cities.<br />
    Mobility gap across youth groups: ${mobGap.toFixed(3)} (from ${low.youth_group} to ${high.youth_group}).<br />
    Income gap across youth groups: ${formatMoney(incomeGap)}.
  `;
}

function renderClusterTable(rows) {
  const tbody = document.querySelector("#cluster-table tbody");
  if (!tbody) return;
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="5">Cluster profile table not available in current export.</td></tr>`;
    return;
  }
  tbody.innerHTML = rows
    .map((r) => `
      <tr>
        <td>${r.youth_group}</td>
        <td>${formatPctFromUnit(r.pov20)}</td>
        <td>${Number(r.mob_up).toFixed(3)}</td>
        <td>${formatMoney(r.inc20)}</td>
        <td>${Number(r.opp_gap).toFixed(3)}</td>
      </tr>
    `)
    .join("");
}

function renderContextCategoryGuide(rows) {
  const host = document.getElementById("context-category-guide");
  if (!host) return;
  if (!rows.length) {
    host.innerHTML = `<div class="card compact">Data not available.</div>`;
    return;
  }
  const mean = (vals) => (vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0);
  const global = {
    pov: mean(rows.map((r) => Number(r.pov20 || 0))),
    mob: mean(rows.map((r) => Number(r.mob_up || 0))),
    inc: mean(rows.map((r) => Number(r.inc20 || 0))),
    gap: mean(rows.map((r) => Number(r.opp_gap || 0)))
  };
  const level = (value, avg, positiveHigh = true) => {
    const v = Number(value || 0);
    const delta = avg === 0 ? 0 : (v - avg) / Math.abs(avg);
    if (positiveHigh) {
      if (delta > 0.12) return "High";
      if (delta < -0.12) return "Low";
      return "Moderate";
    }
    if (delta > 0.12) return "Higher concern";
    if (delta < -0.12) return "Lower concern";
    return "Moderate concern";
  };

  const ordered = [...rows].sort((a, b) => Number(a.mob_up || 0) - Number(b.mob_up || 0));
  host.innerHTML = ordered
    .map((r) => {
      const povertyLevel = level(r.pov20, global.pov, false);
      const mobilityLevel = level(r.mob_up, global.mob, true);
      const incomeLevel = level(r.inc20, global.inc, true);
      const gapLevel = level(r.opp_gap, global.gap, false);
      return `
        <article class="card compact definition-card">
          <h3>${r.youth_group}</h3>
          <p><strong>Poverty:</strong> ${povertyLevel} (${formatPctFromUnit(r.pov20)})</p>
          <p><strong>Mobility:</strong> ${mobilityLevel} (${Number(r.mob_up || 0).toFixed(3)})</p>
          <p><strong>Income:</strong> ${incomeLevel} (${formatMoney(r.inc20 || 0)})</p>
          <p><strong>Opportunity Gap:</strong> ${gapLevel} (${Number(r.opp_gap || 0).toFixed(3)})</p>
        </article>
      `;
    })
    .join("");
}

function renderRecommendationCards(rows, group) {
  const host = document.getElementById("recs-cards");
  if (!host) return;
  if (!rows.length) {
    host.innerHTML = `<div class="card compact">Data not available.</div>`;
    return;
  }
  const filtered = rows
    .filter((r) => r.youth_group === group)
    .sort((a, b) => Number(a.rank) - Number(b.rank))
    .slice(0, 5);
  host.innerHTML = filtered
    .map(
      (r) => `
    <article class="card compact">
      <h3>${r.occupation}</h3>
      <p><strong>Match score:</strong> ${Number(r.match_score).toFixed(3)}</p>
      <p><strong>Risk:</strong> ${r.risk_label || "Data not available"}</p>
      <p><strong>Median wage:</strong> ${Number.isFinite(Number(r.median_wage)) ? formatMoney(r.median_wage) : "Data not available"}</p>
      <p><strong>Growth:</strong> ${r.employment_growth_pct !== "" ? `${r.employment_growth_pct}%` : "Data not available"}</p>
      <p><strong>Why it may fit:</strong> balances accessibility and long-term mobility potential for this group.</p>
    </article>
  `
    )
    .join("");
}

function renderOccupationExplorer(rows) {
  const riskSelect = document.getElementById("risk-filter");
  const zoneSelect = document.getElementById("jobzone-filter");
  const search = document.getElementById("occupation-search");
  const tbody = document.querySelector("#occupation-table tbody");
  if (!riskSelect || !zoneSelect || !search || !tbody) return;

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="6">Occupation table not available in current export.</td></tr>`;
    return;
  }
  const riskValues = [...new Set(rows.map((r) => r.risk_label).filter(Boolean))].sort();
  const zoneValues = [...new Set(rows.map((r) => r.job_zone).filter(Boolean))].sort(
    (a, b) => Number(a) - Number(b)
  );
  riskSelect.innerHTML = `<option value="">All</option>` + riskValues.map((v) => `<option>${v}</option>`).join("");
  zoneSelect.innerHTML = `<option value="">All</option>` + zoneValues.map((v) => `<option>${v}</option>`).join("");

  const showMoreBtn = document.getElementById("show-more-btn");
  let visibleRows = 15;

  function refresh() {
    const rf = riskSelect.value;
    const zf = zoneSelect.value;
    const q = search.value.toLowerCase().trim();
    const filtered = rows
      .filter((r) => (rf ? r.risk_label === rf : true))
      .filter((r) => (zf ? String(r.job_zone) === zf : true))
      .filter((r) => (q ? String(r.title || "").toLowerCase().includes(q) : true))
      .slice(0, visibleRows);
    tbody.innerHTML = filtered
      .map(
        (r) => `
      <tr>
        <td>${r.title || ""}</td>
        <td>${r.risk_label || ""}</td>
        <td>${r.risk_score || ""}</td>
        <td>${r.job_zone || ""}</td>
        <td>${Number(r.routine_cognitive_tasks || 0).toFixed(2)}</td>
        <td>${Number(r.social_tasks || 0).toFixed(2)}</td>
      </tr>
    `
      )
      .join("");
    if (showMoreBtn) {
      showMoreBtn.style.display = filtered.length >= visibleRows ? "inline-block" : "none";
    }
  }

  riskSelect.addEventListener("change", refresh);
  zoneSelect.addEventListener("change", refresh);
  search.addEventListener("input", refresh);
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleRows += 15;
      refresh();
    });
  }
  refresh();
}

function deriveClusterRowsFromTracts(tractRows) {
  const groups = {};
  tractRows.forEach((r) => {
    const g = r.youth_group;
    if (!g) return;
    if (!groups[g]) {
      groups[g] = { youth_group: g, n: 0, pov20: 0, mob_up: 0, inc20: 0, opp_gap: 0 };
    }
    groups[g].n += 1;
    groups[g].pov20 += Number(r.pov20 || 0);
    groups[g].mob_up += Number(r.mob_up || 0);
    groups[g].inc20 += Number(r.inc20 || 0);
    groups[g].opp_gap += Number(r.opp_gap || 0);
  });
  return Object.values(groups).map((g) => ({
    youth_group: g.youth_group,
    pov20: g.n ? g.pov20 / g.n : 0,
    mob_up: g.n ? g.mob_up / g.n : 0,
    inc20: g.n ? g.inc20 / g.n : 0,
    opp_gap: g.n ? g.opp_gap / g.n : 0
  }));
}

function renderResources(resourcesRows, coverageRows) {
  const statusEl = document.getElementById("resources-status");
  const cardHost = document.getElementById("resource-cards");
  if (!statusEl || !cardHost) return;
  const coverage = coverageRows.find((r) => r.table_name === "resource_directory.csv");
  if (!resourcesRows.length) {
    const status = coverage?.status || "available";
    const rowCount = Number(coverage?.rows || 0);
    statusEl.innerHTML = `
      <strong>Resource data status:</strong> ${status} (${rowCount} records).<br />
      Dataset is present but currently has no resource entries. Data not available for directory records.
    `;
    return;
  }
  statusEl.innerHTML = `
    <strong>Resource data status:</strong> Loaded ${resourcesRows.length} resource records.
    ${coverage ? `<br />Coverage flag: ${coverage.status}` : ""}
  `;
  cardHost.innerHTML = resourcesRows
    .slice(0, 8)
    .map(
      (r) => `
      <article class="card compact">
        <h3>${r.resource_name}</h3>
        <p><span class="source-badge">${r.resource_type || "Data not available"}</span></p>
        <p><strong>Target:</strong> ${r.target_group || "Data not available"}</p>
        <p><strong>Region:</strong> ${r.state_abbr || "National"}</p>
        <p>${r.description || "Data not available"}</p>
        <a class="btn btn-secondary" href="${r.url || '#'}" target="_blank" rel="noreferrer">Use Resource</a>
      </article>
    `
    )
    .join("");
}

function renderFairness(notes) {
  const host = document.getElementById("fairness");
  if (!host) return;
  const round1Issues = notes?.round1?.known_issues || [];
  const round2Limits = notes?.round2?.limitations || [];
  const merged = [...round1Issues, ...round2Limits];
  host.innerHTML = `
    <p>
      The platform is designed for support, not restriction. Recommendations are presented with transparent rules
      and known limitations so users and advisors can interpret outputs responsibly.
    </p>
    <ul>
      ${merged.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderChatbotPreview(kbRows, coverageRows) {
  const el = document.getElementById("chatbot-preview");
  if (!el) return;
  const coverage = coverageRows.find((r) => r.table_name === "chatbot_knowledge_base.csv");
  if (!kbRows.length) {
    const status = coverage?.status || "available";
    const rowCount = Number(coverage?.rows || 0);
    el.innerHTML = `
      <strong>Planned user flow</strong><br />
      Users describe their location, education background, financial constraints, and career interests.
      The assistant then returns opportunity group context, recommended occupations, and relevant support resources.
      <br /><br />
      <em>Status:</em> ${status} (${rowCount} records). Knowledge base table exists but is currently empty.
    `;
    return;
  }
  el.innerHTML = `
    <strong>Planned user flow</strong><br />
    Users describe their location, education background, financial constraints, and career interests.
    The assistant then returns opportunity group context, recommended occupations, and relevant support resources.
    <br /><br />
    <em>Status:</em> Knowledge base loaded with ${kbRows.length} rows.
  `;
}

function renderNotes(notes) {
  const el = document.getElementById("notes");
  if (!el) return;
  const r2 = notes.round2 || {};
  el.innerHTML = `
    <p><strong>Round 2:</strong> ${r2.model1 || ""} ${r2.model2 || ""}</p>
    <p><strong>Round 2 Limitation:</strong> ${(r2.limitations || [])[0] || "N/A"}</p>
  `;
}

function renderPipelineCards() {
  const host = document.getElementById("round2-pipeline-cards");
  if (!host) return;
  const steps = [
    ["Data Integration", "Combines neighborhood, education, labor, and occupation data into one system."],
    ["Cleaning / Imputation", "Audits missing values and imputes key mobility fields so outputs remain usable."],
    ["Neighborhood Clustering", "Groups tracts into four opportunity profiles to capture starting context."],
    ["Occupation Risk Scoring", "Uses interpretable rules to classify occupation risk exposure."],
    ["Career Matching", "Ranks pathways using safety and accessibility weights by youth group."],
    ["Resources Layer", "Connects users to support options after insight and comparison."]
  ];
  host.innerHTML = steps
    .map(
      ([title, desc]) => `
      <article class="card compact">
        <h3>${title}</h3>
        <p>${desc}</p>
      </article>
    `
    )
    .join("");
}

function renderTabEvidence({ coverageRows, tracts, jobs, recs, inventoryRows }) {
  const byName = Object.fromEntries((coverageRows || []).map((r) => [r.table_name, r]));
  const rowOf = (name, fallback = 0) => Number(byName[name]?.rows || fallback || 0).toLocaleString();

  const mappings = [
    {
      id: "problem-evidence",
      html: `
        <strong>Evidence used on this tab</strong><br />
        <code>geo_context_tracts.csv</code>: ${rowOf("geo_context_tracts.csv", tracts.length)} rows<br />
        <code>geo_context_state_summary.csv</code>: ${rowOf("geo_context_state_summary.csv")} rows
      `
    },
    {
      id: "solution-evidence",
      html: `
        <strong>Evidence used on this tab</strong><br />
        <code>null_audit_summary.csv</code>: ${rowOf("null_audit_summary.csv")} rows<br />
        <code>model2_cluster_profiles_mean.csv</code>: ${rowOf("model2_cluster_profiles_mean.csv")} rows<br />
        <code>occupation_risk_round2.csv</code>: ${rowOf("occupation_risk_round2.csv", jobs.length)} rows
      `
    },
    {
      id: "dashboard-evidence",
      html: `
        <strong>Evidence used on this tab</strong><br />
        <code>dashboard_group_metrics.csv</code>: ${rowOf("dashboard_group_metrics.csv")} rows<br />
        <code>geo_context_tracts.csv</code>: ${rowOf("geo_context_tracts.csv", tracts.length)} rows<br />
        <code>null_audit_summary.csv</code>: ${rowOf("null_audit_summary.csv")} rows
      `
    },
    {
      id: "careers-evidence",
      html: `
        <strong>Evidence used on this tab</strong><br />
        <code>occupation_risk_round2.csv</code>: ${rowOf("occupation_risk_round2.csv", jobs.length)} rows<br />
        <code>career_recommendations_by_group.csv</code>: ${rowOf("career_recommendations_by_group.csv", recs.length)} rows<br />
        <code>matching_weights_round2.csv</code>: ${rowOf("matching_weights_round2.csv")} rows
      `
    },
    {
      id: "resources-evidence",
      html: `
        <strong>Evidence used on this tab</strong><br />
        <code>resource_directory.csv</code>: ${rowOf("resource_directory.csv")} rows<br />
        <code>chatbot_knowledge_base.csv</code>: ${rowOf("chatbot_knowledge_base.csv")} rows<br />
        <code>round1_vs_round2_instructor_notes.json</code>: ${rowOf("round1_vs_round2_instructor_notes.json", 1)} record
      `
    },
    {
      id: "technical-evidence",
      html: `
        <strong>Evidence used on this tab</strong><br />
        <code>table_coverage_report.csv</code>: ${Number((coverageRows || []).length).toLocaleString()} rows<br />
        <code>duckdb_table_inventory.csv</code>: ${rowOf("duckdb_table_inventory.csv", inventoryRows.length)} rows<br />
        <code>data_claims.json</code>: ${rowOf("data_claims.json", 1)} record
      `
    }
  ];

  mappings.forEach((m) => {
    const el = document.getElementById(m.id);
    if (el) el.innerHTML = m.html;
  });
}

function renderRound2Pillars({ jobs, tracts, recs, clusters }) {
  const host = document.getElementById("round2-pillars");
  if (!host) return;
  const uniqueGroups = new Set((clusters || []).map((r) => r.youth_group).filter(Boolean)).size;
  const cards = [
    {
      title: "Full Job Risk Model",
      text: "Uses the complete O*NET occupation export with interpretable risk scoring so users can search any job.",
      metric: `${(jobs || []).length.toLocaleString()} occupations loaded`
    },
    {
      title: "Imputed Mobility Data",
      text: "KNN-imputation is part of the pipeline to prevent breakdowns when neighborhood mobility fields are incomplete.",
      metric: "Imputation step included in Round 2 pipeline"
    },
    {
      title: "Youth Opportunity Groupings",
      text: "Neighborhoods are segmented using poverty, mobility, income, and opportunity-gap context.",
      metric: `${uniqueGroups || "Data not available"} youth groups shown`
    },
    {
      title: "Personalized Career Recommendations",
      text: "Recommendations are ranked by safety and accessibility with group-specific weighting logic.",
      metric: `${(recs || []).length.toLocaleString()} recommendation rows loaded`
    },
    {
      title: "Education Outcome Explorer",
      text: "College Scorecard and labor indicators are used at tract/group level to show education ROI context.",
      metric: `${(tracts || []).length.toLocaleString()} neighborhood rows in ROI context`
    }
  ];
  host.innerHTML = cards
    .map(
      (c) => `
      <article class="card compact">
        <h3>${c.title}</h3>
        <p>${c.text}</p>
        <p class="small-note"><strong>Evidence:</strong> ${c.metric}</p>
      </article>
    `
    )
    .join("");
}

function renderImputationStatus(nullAuditRows, tracts) {
  const host = document.getElementById("imputation-status");
  if (!host) return;
  const tractCount = (tracts || []).length;
  const estimatedFilledFrom16Pct = Math.round(tractCount * 0.16);
  const mobilityAudit = (nullAuditRows || []).find((r) => String(r.column_name || "").toLowerCase() === "mob_up");
  if (mobilityAudit) {
    host.innerHTML = `
      <strong>Mobility imputation evidence</strong><br />
      Column: <code>mob_up</code><br />
      Nulls before imputation: ${Number(mobilityAudit.null_count || 0).toLocaleString()} (${Number(
        mobilityAudit.null_pct || 0
      ).toFixed(2)}%)<br />
      Round 2 applies KNN imputation to prevent missing mobility values from breaking recommendations.
      <br /><br />
      <strong>Round 2 context note:</strong> Earlier pipeline audits indicated roughly 16% missing mobility before imputation.
      On the current tract export (${tractCount.toLocaleString()} rows), that corresponds to about ${estimatedFilledFrom16Pct.toLocaleString()}
      values that would need KNN filling in the pre-imputation stage.
    `;
    return;
  }
  host.innerHTML = `
    <strong>Mobility imputation evidence</strong><br />
    KNN imputation is implemented in the Round 2 pipeline to handle missing mobility values.<br />
    Current tract export includes ${tractCount.toLocaleString()} rows in post-processing form.<br />
    Pre-imputation <code>mob_up</code> null audit is not available in this web export.
    <br /><br />
    <strong>Round 2 context note:</strong> Earlier pipeline audits indicated roughly 16% missing mobility before imputation.
    On ${tractCount.toLocaleString()} tracts, that is approximately ${estimatedFilledFrom16Pct.toLocaleString()} values filled by KNN.
  `;
}

function renderEducationExplorer(dashboardRows, clusterRows) {
  const select = document.getElementById("education-group-filter");
  const host = document.getElementById("education-outcomes");
  if (!select || !host) return;
  const rows = dashboardRows && dashboardRows.length ? dashboardRows : clusterRows;
  if (!rows || !rows.length) {
    host.innerHTML = `<div class="card compact">Data not available.</div>`;
    return;
  }
  const groups = [...new Set(rows.map((r) => r.youth_group).filter(Boolean))];
  select.innerHTML = groups.map((g) => `<option value="${g}">${g}</option>`).join("");
  function render(group) {
    const row = rows.find((r) => r.youth_group === group) || {};
    const cost = row.avg_sc_cost_mean ?? row.sc_cost_mean;
    const earn10 = row.avg_sc_earn10_mean ?? row.sc_earn10_mean;
    const earn6 = row.avg_sc_earn6_mean ?? row.sc_earn6_mean;
    const empchg = row.avg_oes_emp_chg ?? row.oes_emp_chg;
    const awchg = row.avg_oes_aw_chg ?? row.oes_aw_chg;
    const cards = [
      { label: "Avg education cost", value: Number.isFinite(Number(cost)) && Number(cost) !== 0 ? formatMoney(cost) : "Data not available" },
      { label: "Avg earnings (6-year)", value: Number.isFinite(Number(earn6)) && Number(earn6) !== 0 ? formatMoney(earn6) : "Data not available" },
      { label: "Avg earnings (10-year)", value: Number.isFinite(Number(earn10)) && Number(earn10) !== 0 ? formatMoney(earn10) : "Data not available" },
      { label: "Employment change context", value: Number.isFinite(Number(empchg)) && Number(empchg) !== 0 ? Number(empchg).toLocaleString() : "Data not available" },
      { label: "Average wage change context", value: Number.isFinite(Number(awchg)) && Number(awchg) !== 0 ? Number(awchg).toLocaleString() : "Data not available" }
    ];
    host.innerHTML = cards
      .map(
        (c) => `
        <div class="stat-card">
          <div class="stat-label">${c.label}</div>
          <div class="stat-value">${c.value}</div>
        </div>
      `
      )
      .join("");
  }
  render(groups[0]);
  select.addEventListener("change", (e) => render(e.target.value));
}

function renderJobRiskLookup(rows) {
  const input = document.getElementById("job-risk-search");
  const host = document.getElementById("job-risk-result");
  if (!input || !host) return;
  if (!rows.length) {
    host.innerHTML = `<div class="card compact">Data not available.</div>`;
    return;
  }
  function runLookup() {
    const q = String(input.value || "").trim().toLowerCase();
    if (!q) {
      host.innerHTML = `<div class="card compact">Type any occupation title to see risk score and label.</div>`;
      return;
    }
    const matches = rows
      .filter((r) => String(r.title || "").toLowerCase().includes(q))
      .sort((a, b) => Number(b.risk_score || 0) - Number(a.risk_score || 0))
      .slice(0, 8);
    if (!matches.length) {
      host.innerHTML = `<div class="card compact">No occupation match found in the current export.</div>`;
      return;
    }
    host.innerHTML = `
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Occupation</th><th>Risk Label</th><th>Risk Score</th><th>Job Zone</th></tr>
          </thead>
          <tbody>
            ${matches
              .map(
                (r) => `
              <tr>
                <td>${r.title || ""}</td>
                <td>${r.risk_label || ""}</td>
                <td>${r.risk_score || ""}</td>
                <td>${r.job_zone || ""}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  input.addEventListener("input", runLookup);
  runLookup();
}

async function init() {
  try {
    const [
      round2JobsCsv,
      clusterCsv,
      tractsCsv,
      notesJson,
      stateSummaryCsv,
      riskDistCsv,
      nullAuditCsv,
      tableCoverageCsv,
      resourcesCsv,
      chatbotKbCsv,
      modelRulesCsv,
      matchingWeightsCsv,
      recsByGroupCsv,
      duckdbInventoryCsv,
      dataClaimsJson,
      dashboardMetricsCsv
    ] = await Promise.all([
      tryFetchText("data/occupation_risk_round2.csv").then((x) => x || tryFetchText("data/occupation_features_extended.csv")),
      tryFetchText("data/model2_cluster_profiles_mean.csv"),
      tryFetchText("data/model2_tracts_export.csv").then((x) => x || tryFetchText("data/geo_context_tracts.csv")),
      (async () => {
        try {
          return await fetchJson("data/round1_vs_round2_instructor_notes.json");
        } catch {
          return { round2: { model1: "", model2: "", limitations: [] } };
        }
      })(),
      tryFetchText("data/geo_context_state_summary.csv"),
      tryFetchText("data/occupation_risk_distribution.csv"),
      tryFetchText("data/null_audit_summary.csv"),
      tryFetchText("data/table_coverage_report.csv"),
      tryFetchText("data/resource_directory.csv"),
      tryFetchText("data/chatbot_knowledge_base.csv"),
      tryFetchText("data/model_rules_round2.csv"),
      tryFetchText("data/matching_weights_round2.csv"),
      tryFetchText("data/career_recommendations_by_group.csv"),
      tryFetchText("data/duckdb_table_inventory.csv"),
      (async () => {
        try {
          return await fetchJson("data/data_claims.json");
        } catch {
          return null;
        }
      })(),
      tryFetchText("data/dashboard_group_metrics.csv")
    ]);

    const round2Jobs = round2JobsCsv ? parseCSV(round2JobsCsv) : [];
    const tractRows = tractsCsv ? parseCSV(tractsCsv) : [];
    const clusterRows = clusterCsv ? parseCSV(clusterCsv) : deriveClusterRowsFromTracts(tractRows);
    const recRows = recsByGroupCsv ? parseCSV(recsByGroupCsv) : [];
    const stateSummaryRows = stateSummaryCsv ? parseCSV(stateSummaryCsv) : [];
    const riskDistRows = riskDistCsv ? parseCSV(riskDistCsv) : [];
    const nullAuditRows = nullAuditCsv ? parseCSV(nullAuditCsv) : [];
    const coverageRows = tableCoverageCsv ? parseCSV(tableCoverageCsv) : [];
    const resourcesRows = resourcesCsv ? parseCSV(resourcesCsv).filter((r) => Object.values(r).join("").trim()) : [];
    const kbRows = chatbotKbCsv ? parseCSV(chatbotKbCsv).filter((r) => Object.values(r).join("").trim()) : [];
    const modelRulesRows = modelRulesCsv ? parseCSV(modelRulesCsv) : [];
    const matchingWeightsRows = matchingWeightsCsv ? parseCSV(matchingWeightsCsv) : [];
    const inventoryRows = duckdbInventoryCsv ? parseCSV(duckdbInventoryCsv) : [];
    const dashboardRows = dashboardMetricsCsv ? parseCSV(dashboardMetricsCsv) : [];
    const colsByFile = {
      "occupation_risk_round2.csv": getColumnCount(round2Jobs),
      "occupation_risk_distribution.csv": getColumnCount(riskDistRows),
      "career_recommendations_by_group.csv": getColumnCount(recRows),
      "geo_context_tracts.csv": getColumnCount(tractRows),
      "geo_context_state_summary.csv": getColumnCount(stateSummaryRows),
      "dashboard_group_metrics.csv": getColumnCount(dashboardRows),
      "model2_cluster_profiles_mean.csv": getColumnCount(clusterRows),
      "model_rules_round2.csv": getColumnCount(modelRulesRows),
      "matching_weights_round2.csv": getColumnCount(matchingWeightsRows),
      "resource_directory.csv": resourcesCsv ? getColumnCount(parseCSV(resourcesCsv)) : 0,
      "chatbot_knowledge_base.csv": chatbotKbCsv ? getColumnCount(parseCSV(chatbotKbCsv)) : 0,
      "duckdb_table_inventory.csv": getColumnCount(inventoryRows),
      "null_audit_summary.csv": getColumnCount(nullAuditRows)
    };
    const coverageManifest = coverageRows.length
      ? {
          exported: coverageRows.map((r) => ({
            file: r.table_name,
            rows: Number(r.rows || 0),
            cols: colsByFile[r.table_name] != null ? colsByFile[r.table_name] : "-"
          }))
        }
      : { exported: [] };
    const availability = {
      inventory: inventoryRows.length > 0,
      tracts: tractRows.length > 0,
      nullAudit: (coverageRows.find((r) => r.table_name === "null_audit_summary.csv")?.status || "").length > 0,
      clusters: clusterRows.length > 0,
      occupationRisk: round2Jobs.length > 0,
      recommendations: recRows.length > 0,
      coverage: coverageRows.length > 0
    };

    renderEvidenceCards({
      manifest: coverageManifest,
      tracts: tractRows,
      recs: recRows
    });
    renderTabEvidence({
      coverageRows,
      tracts: tractRows,
      jobs: round2Jobs,
      recs: recRows,
      inventoryRows
    });
    renderRound2Pillars({ jobs: round2Jobs, tracts: tractRows, recs: recRows, clusters: clusterRows });
    renderPipelineCards();
    renderRoundProgress(coverageManifest, notesJson);
    renderDataCredibility(inventoryRows, dataClaimsJson);
    renderRound2Pipeline(availability);
    renderDataEvidence(tractRows, clusterRows);
    renderMapSummary(tractRows, stateSummaryRows);
    renderDashboardMetrics(tractRows, clusterRows, dashboardRows);
    renderImputationStatus(nullAuditRows, tractRows);
    renderEducationExplorer(dashboardRows, clusterRows);
    renderRiskRules(
      modelRulesRows.length
        ? {
            risk_score_logic: modelRulesRows.map((r) => `${r.rule_id}: ${r.condition_expression} (+${r.points_added})`),
            risk_label_logic: {
              "High Risk": "risk_score >= 3",
              "Moderate Risk": "risk_score >= 2 and < 3",
              "Low Risk": "risk_score < 2"
            }
          }
        : null
    );
    renderMatchingWeights(
      matchingWeightsRows.length
        ? {
            round2_matching_engine: {
              very_disadvantaged_and_disadvantaged: {
                safety: matchingWeightsRows.find((r) => r.segment_name === "very_disadvantaged_and_disadvantaged")
                  ?.safety_weight,
                access: matchingWeightsRows.find((r) => r.segment_name === "very_disadvantaged_and_disadvantaged")
                  ?.access_weight
              },
              moderate_and_higher_opportunity: {
                safety: matchingWeightsRows.find((r) => r.segment_name === "moderate_and_higher_opportunity")
                  ?.safety_weight,
                access: matchingWeightsRows.find((r) => r.segment_name === "moderate_and_higher_opportunity")
                  ?.access_weight
              }
            }
          }
        : null
    );
    renderDataInventory(coverageManifest);
    if (riskDistRows.length) {
      renderRound2RiskSummaryFromDistribution(riskDistRows);
    } else if (round2Jobs.length) {
      renderRound2RiskSummary(round2Jobs);
    } else {
      document.getElementById("round2-risk-summary").innerHTML = `
        <strong>Round 2 Coverage</strong><br />
        Data not available.
      `;
    }
    renderClusterTable(clusterRows);
    renderContextCategoryGuide(clusterRows);
    renderOccupationExplorer(round2Jobs);
    renderJobRiskLookup(round2Jobs);
    renderResources(resourcesRows, coverageRows);
    renderFairness(notesJson);
    renderChatbotPreview(kbRows, coverageRows);
    renderNotes(notesJson);

    const groups = [...new Set(recRows.map((r) => r.youth_group))];
    const groupSelect = document.getElementById("group-filter");
    if (groupSelect) {
      groupSelect.innerHTML = groups.map((g) => `<option value="${g}">${g}</option>`).join("");
      if (groups.length) {
        renderRecommendationCards(recRows, groups[0]);
      } else {
        renderRecommendationCards([], "");
      }
      groupSelect.addEventListener("change", (e) => {
        renderRecommendationCards(recRows, e.target.value);
      });
    }

  } catch (err) {
    console.error(err);
    document.body.innerHTML = `<p style="padding:20px;">Error loading data files. Make sure the <code>data/</code> folder and export files exist.</p>`;
  }
}

init();
