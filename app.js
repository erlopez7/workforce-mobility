let GROUP_DATA = {
  "Very Disadvantaged": { cost: 28490, earn10: 41451, pub: 9985, priv: 20279, mobility: 0.34 },
  Disadvantaged: { cost: 29890, earn10: 43544, pub: 10167, priv: 21745, mobility: 0.41 },
  "Moderate Opportunity": { cost: 30911, earn10: 44503, pub: 10830, priv: 21627, mobility: 0.41 },
  "Higher Opportunity": { cost: 31653, earn10: 46505, pub: 10776, priv: 22525, mobility: 0.51 }
};

let STATE_DATA = {
  AL: { name: "Alabama", mobility: 0.32, poverty: 0.19, income: 54943, opp_gap: 0.14, tracts: 1181, disadvantaged_share: 0.42 },
  AK: { name: "Alaska", mobility: 0.43, poverty: 0.11, income: 77640, opp_gap: 0.08, tracts: 167, disadvantaged_share: 0.05 },
  AZ: { name: "Arizona", mobility: 0.35, poverty: 0.16, income: 62055, opp_gap: 0.12, tracts: 1526, disadvantaged_share: 0.28 },
  AR: { name: "Arkansas", mobility: 0.31, poverty: 0.17, income: 52123, opp_gap: 0.13, tracts: 686, disadvantaged_share: 0.38 },
  CA: { name: "California", mobility: 0.40, poverty: 0.15, income: 78672, opp_gap: 0.11, tracts: 8057, disadvantaged_share: 0.22 },
  CO: { name: "Colorado", mobility: 0.44, poverty: 0.10, income: 77127, opp_gap: 0.08, tracts: 1249, disadvantaged_share: 0.10 },
  CT: { name: "Connecticut", mobility: 0.45, poverty: 0.11, income: 79855, opp_gap: 0.09, tracts: 833, disadvantaged_share: 0.12 },
  DE: { name: "Delaware", mobility: 0.42, poverty: 0.12, income: 70176, opp_gap: 0.09, tracts: 218, disadvantaged_share: 0.14 },
  FL: { name: "Florida", mobility: 0.36, poverty: 0.14, income: 59227, opp_gap: 0.11, tracts: 4171, disadvantaged_share: 0.24 },
  GA: { name: "Georgia", mobility: 0.33, poverty: 0.16, income: 61980, opp_gap: 0.13, tracts: 1969, disadvantaged_share: 0.33 },
  HI: { name: "Hawaii", mobility: 0.46, poverty: 0.10, income: 83102, opp_gap: 0.07, tracts: 351, disadvantaged_share: 0.04 },
  ID: { name: "Idaho", mobility: 0.43, poverty: 0.12, income: 60999, opp_gap: 0.08, tracts: 298, disadvantaged_share: 0.08 },
  IL: { name: "Illinois", mobility: 0.41, poverty: 0.13, income: 69187, opp_gap: 0.10, tracts: 3123, disadvantaged_share: 0.18 },
  IN: { name: "Indiana", mobility: 0.40, poverty: 0.13, income: 60555, opp_gap: 0.09, tracts: 1511, disadvantaged_share: 0.16 },
  IA: { name: "Iowa", mobility: 0.46, poverty: 0.11, income: 65429, opp_gap: 0.07, tracts: 825, disadvantaged_share: 0.07 },
  KS: { name: "Kansas", mobility: 0.43, poverty: 0.12, income: 63286, opp_gap: 0.08, tracts: 782, disadvantaged_share: 0.10 },
  KY: { name: "Kentucky", mobility: 0.34, poverty: 0.18, income: 54527, opp_gap: 0.13, tracts: 1115, disadvantaged_share: 0.34 },
  LA: { name: "Louisiana", mobility: 0.30, poverty: 0.20, income: 53571, opp_gap: 0.15, tracts: 1148, disadvantaged_share: 0.45 },
  ME: { name: "Maine", mobility: 0.45, poverty: 0.12, income: 62906, opp_gap: 0.08, tracts: 358, disadvantaged_share: 0.09 },
  MD: { name: "Maryland", mobility: 0.43, poverty: 0.10, income: 87063, opp_gap: 0.08, tracts: 1406, disadvantaged_share: 0.11 },
  MA: { name: "Massachusetts", mobility: 0.47, poverty: 0.11, income: 81215, opp_gap: 0.08, tracts: 1478, disadvantaged_share: 0.10 },
  MI: { name: "Michigan", mobility: 0.39, poverty: 0.15, income: 61294, opp_gap: 0.11, tracts: 2813, disadvantaged_share: 0.22 },
  MN: { name: "Minnesota", mobility: 0.47, poverty: 0.10, income: 77720, opp_gap: 0.07, tracts: 1339, disadvantaged_share: 0.07 },
  MS: { name: "Mississippi", mobility: 0.29, poverty: 0.21, income: 48716, opp_gap: 0.16, tracts: 664, disadvantaged_share: 0.50 },
  MO: { name: "Missouri", mobility: 0.38, poverty: 0.14, income: 61043, opp_gap: 0.10, tracts: 1467, disadvantaged_share: 0.20 },
  MT: { name: "Montana", mobility: 0.46, poverty: 0.13, income: 68595, opp_gap: 0.07, tracts: 270, disadvantaged_share: 0.00 },
  NE: { name: "Nebraska", mobility: 0.45, poverty: 0.11, income: 66886, opp_gap: 0.07, tracts: 532, disadvantaged_share: 0.08 },
  NV: { name: "Nevada", mobility: 0.37, poverty: 0.14, income: 62043, opp_gap: 0.11, tracts: 736, disadvantaged_share: 0.20 },
  NH: { name: "New Hampshire", mobility: 0.48, poverty: 0.08, income: 78696, opp_gap: 0.06, tracts: 295, disadvantaged_share: 0.04 },
  NJ: { name: "New Jersey", mobility: 0.44, poverty: 0.11, income: 85751, opp_gap: 0.08, tracts: 2010, disadvantaged_share: 0.12 },
  NM: { name: "New Mexico", mobility: 0.32, poverty: 0.20, income: 53992, opp_gap: 0.14, tracts: 499, disadvantaged_share: 0.40 },
  NY: { name: "New York", mobility: 0.41, poverty: 0.14, income: 72108, opp_gap: 0.10, tracts: 4831, disadvantaged_share: 0.20 },
  NC: { name: "North Carolina", mobility: 0.35, poverty: 0.16, income: 60516, opp_gap: 0.12, tracts: 2195, disadvantaged_share: 0.28 },
  ND: { name: "North Dakota", mobility: 0.47, poverty: 0.10, income: 68882, opp_gap: 0.07, tracts: 205, disadvantaged_share: 0.04 },
  OH: { name: "Ohio", mobility: 0.39, poverty: 0.14, income: 61938, opp_gap: 0.10, tracts: 2942, disadvantaged_share: 0.20 },
  OK: { name: "Oklahoma", mobility: 0.34, poverty: 0.17, income: 57715, opp_gap: 0.12, tracts: 836, disadvantaged_share: 0.30 },
  OR: { name: "Oregon", mobility: 0.41, poverty: 0.13, income: 68422, opp_gap: 0.09, tracts: 828, disadvantaged_share: 0.12 },
  PA: { name: "Pennsylvania", mobility: 0.41, poverty: 0.13, income: 67587, opp_gap: 0.10, tracts: 3218, disadvantaged_share: 0.17 },
  RI: { name: "Rhode Island", mobility: 0.44, poverty: 0.13, income: 70305, opp_gap: 0.09, tracts: 244, disadvantaged_share: 0.13 },
  SC: { name: "South Carolina", mobility: 0.33, poverty: 0.17, income: 57725, opp_gap: 0.13, tracts: 1002, disadvantaged_share: 0.32 },
  SD: { name: "South Dakota", mobility: 0.45, poverty: 0.13, income: 63921, opp_gap: 0.08, tracts: 206, disadvantaged_share: 0.07 },
  TN: { name: "Tennessee", mobility: 0.34, poverty: 0.17, income: 59228, opp_gap: 0.12, tracts: 1475, disadvantaged_share: 0.30 },
  TX: { name: "Texas", mobility: 0.35, poverty: 0.15, income: 64034, opp_gap: 0.12, tracts: 5228, disadvantaged_share: 0.27 },
  UT: { name: "Utah", mobility: 0.45, poverty: 0.10, income: 74197, opp_gap: 0.07, tracts: 588, disadvantaged_share: 0.06 },
  VT: { name: "Vermont", mobility: 0.47, poverty: 0.11, income: 67674, opp_gap: 0.07, tracts: 184, disadvantaged_share: 0.05 },
  VA: { name: "Virginia", mobility: 0.42, poverty: 0.11, income: 80963, opp_gap: 0.08, tracts: 1907, disadvantaged_share: 0.12 },
  WA: { name: "Washington", mobility: 0.44, poverty: 0.11, income: 82400, opp_gap: 0.08, tracts: 1458, disadvantaged_share: 0.09 },
  WV: { name: "West Virginia", mobility: 0.30, poverty: 0.19, income: 51615, opp_gap: 0.14, tracts: 484, disadvantaged_share: 0.42 },
  WI: { name: "Wisconsin", mobility: 0.45, poverty: 0.11, income: 67080, opp_gap: 0.08, tracts: 1376, disadvantaged_share: 0.09 },
  WY: { name: "Wyoming", mobility: 0.44, poverty: 0.11, income: 74722, opp_gap: 0.08, tracts: 131, disadvantaged_share: 0.00 },
  DC: { name: "Washington D.C.", mobility: 0.38, poverty: 0.16, income: 88311, opp_gap: 0.12, tracts: 206, disadvantaged_share: 0.28 }
};

function buildSystemPrompt() {
  const groupLines = Object.entries(GROUP_DATA).map(([name, d]) => (
    `  - ${name}: poverty ${(Number(d.poverty_rate ?? d.poverty) * 100).toFixed(0)}%, mobility ${Number(d.mobility_score ?? d.mobility).toFixed(2)}, income ${money(d.median_income ?? d.income)}, avg cost ${money(d.sc_cost_mean ?? d.cost)}, 10yr earnings ${money(d.sc_earn10_mean ?? d.earn10)}, public net price ${money(d.sc_np_pub_mean ?? d.pub)}`
  )).join("\n");

  return `You are the WorkForce career advisor. Use ONLY the project data provided below. Do not use outside facts, outside rankings, or specific school names.

Allowed project data:
- Opportunity groups:
${groupLines}
- Job risk examples:
  - Low Risk: Registered Nurses, Nurse Practitioners, Web Developers, Software Developers, Cybersecurity Analysts, GIS Technicians, Physical Therapists, Social Workers, Teachers, Health Information Technologists, Computer User Support Specialists
  - Moderate Risk: Administrative Assistants, Customer Service Reps, Landscapers, Retail Sales Workers
  - High Risk: Data Entry Clerks, Cashiers, Telemarketers, Bank Tellers, File Clerks, Bookkeeping Clerks, Truck Drivers, Pharmacy Aides
- Platform facts:
  - Public college net price ($9,985-$10,830) vs private ($20,279-$22,525)
- Community college + transfer is highest ROI (Return on Investment) for many low-income students
  - Certificate programs in healthcare, IT, and trades can be strong short pathways
  - AI reduced hiring of workers age 22-25 in high-exposure jobs by 14%
  - Resources: FAFSA, American Job Centers, Google Career Certificates, Year Up, Per Scholas, Apprenticeship.gov

Response rules (very important):
1) Keep answers short and easy to scan (max ~180 words).
2) Use this exact structure with line breaks and bullets:
   Opportunity Group:
   - <one line>

   Best 3 Paths:
   - 1) <job> — <risk> — <education path> — <short why>
   - 2) <job> — <risk> — <education path> — <short why>
   - 3) <job> — <risk> — <education path> — <short why>

   Low-Cost Education Options:
   - <option 1>
   - <option 2>

   Next Steps This Week:
   - <step 1>
   - <step 2>
   - <step 3>

   Encouragement:
   - <one short sentence>
3) Plain language only. No long paragraphs. No jargon.
4) Never suggest specific colleges or exact salary guarantees.
5) If user location is unclear, say what extra info is needed in one short line.
6) ZIP mapping rule (must follow when ZIP is provided):
   - If ZIP starts with 9 -> Disadvantaged
   - If ZIP starts with 1 or 2 -> Moderate Opportunity
   - If ZIP starts with 3 or 4 -> Very Disadvantaged
   - Otherwise -> Moderate Opportunity
   Never override this ZIP rule with assumptions.`;
}

function getSystemPrompt() {
  return buildSystemPrompt();
}

let CHAT_REC_CONTEXT_CACHE = null;

function extractZipFromHistory(conversationHistory) {
  for (let i = conversationHistory.length - 1; i >= 0; i -= 1) {
    const msg = conversationHistory[i];
    if (msg?.role !== "user") continue;
    const m = String(msg.content || "").match(/\b\d{5}\b/);
    if (m) return m[0];
  }
  return "";
}

function inferInterestsFromText(text) {
  const t = String(text || "").toLowerCase();
  const tags = new Set();
  if (/(nurs|health|medical|patient|therapy|psych)/.test(t)) tags.add("Healthcare");
  if (/(web|computer|software|tech|cyber|it\b|data)/.test(t)) tags.add("Technology");
  if (/(trade|electric|plumb|hvac|construction|mechanic|landscap)/.test(t)) tags.add("Trades");
  if (/(teach|education|school|tutor|childcare|kids)/.test(t)) tags.add("Education");
  if (/(business|manager|admin|office|operations|marketing|hr\b)/.test(t)) tags.add("Business");
  if (/(design|art|creative|music|dance|choreograph)/.test(t)) tags.add("Creative");
  if (/(social|community|counsel|case worker)/.test(t)) tags.add("Social Services");
  if (/(science|lab|research|biology|chemistry)/.test(t)) tags.add("Science");
  return tags;
}

function inferInterestsFromTitle(title) {
  const t = String(title || "").toLowerCase();
  const tags = new Set();
  if (/(nurs|health|medical|patient|hearing aid|dietetic|psychiatric|therap)/.test(t)) tags.add("Healthcare");
  if (/(web|computer|technolog|software|hydroelectric|geographic information)/.test(t)) tags.add("Technology");
  if (/(landscap|helpers, labor|material mover|electric|plumb|hvac|construction)/.test(t)) tags.add("Trades");
  if (/(tutor|teacher|enrichment|nann|speech-language|choreograph)/.test(t)) tags.add("Education");
  if (/(supervisor|manager|operator|administrative|marketing|human resources)/.test(t)) tags.add("Business");
  if (/(choreograph|creative|design|artist)/.test(t)) tags.add("Creative");
  if (/(science|lab|research)/.test(t)) tags.add("Science");
  if (/(social|community|counsel|case worker)/.test(t)) tags.add("Social Services");
  if (!tags.size) tags.add("Business");
  return tags;
}

function buildChatContextLine(recommendationsByGroup, conversationHistory) {
  const zip = extractZipFromHistory(conversationHistory);
  const group = zip ? zipToGroup(zip) : "";
  const base = recommendationsByGroup[group] || recommendationsByGroup["Moderate Opportunity"] || [];
  const lastUser = [...conversationHistory].reverse().find((m) => m.role === "user");
  const interestHints = inferInterestsFromText(lastUser?.content || "");
  const filtered = interestHints.size
    ? base.filter((r) => {
      const tags = inferInterestsFromTitle(r.title);
      return [...interestHints].some((x) => tags.has(x));
    })
    : base;
  const pool = filtered.length ? filtered : base;
  const roles = pool
    .slice()
    .sort((a, b) => Number(b.match_score) - Number(a.match_score))
    .slice(0, 8)
    .map((r) => `${r.title} (${r.risk_label})`);
  if (!roles.length) return "";
  const zipLine = zip ? `ZIP ${zip} maps to ${group}.` : "No ZIP provided yet; ask for ZIP if needed.";
  const interestLine = interestHints.size ? `Interest hints: ${[...interestHints].join(", ")}.` : "No clear interest hints yet.";
  return `\n\nLive Recommendation Context:\n- ${zipLine}\n- ${interestLine}\n- Prioritize these role options first: ${roles.join("; ")}.`;
}

async function getChatSystemPrompt(conversationHistory) {
  const basePrompt = getSystemPrompt();
  try {
    if (!CHAT_REC_CONTEXT_CACHE) {
      const out = await loadCareerRecommendationsByGroup();
      CHAT_REC_CONTEXT_CACHE = out.map || {};
    }
    const contextLine = buildChatContextLine(CHAT_REC_CONTEXT_CACHE, conversationHistory);
    return `${basePrompt}${contextLine}`;
  } catch {
    return basePrompt;
  }
}

function parseCSVLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else {
        inQ = !inQ;
      }
      continue;
    }
    if (ch === "," && !inQ) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

function parseCSV(text) {
  const rows = text.trim().split(/\r?\n/);
  if (!rows.length) return [];
  const headers = parseCSVLine(rows[0]);
  return rows.slice(1).map((r) => {
    const vals = parseCSVLine(r);
    const obj = {};
    headers.forEach((h, i) => { obj[h] = vals[i] ?? ""; });
    return obj;
  });
}

async function loadCSV(path) {
  const url = path.startsWith("http") ? path : new URL(path, document.baseURI).href;
  const r = await fetch(url);
  if (!r.ok) throw new Error(path);
  return parseCSV(await r.text());
}

async function loadCSVFirst(paths) {
  const errors = [];
  for (const p of paths) {
    try {
      const rows = await loadCSV(p);
      if (rows.length) return rows;
    } catch (e) {
      errors.push(`${p}: ${e.message}`);
    }
  }
  return [];
}

const REC_GROUP_KEYS = ["Very Disadvantaged", "Disadvantaged", "Moderate Opportunity", "Higher Opportunity"];

function normalizeRecRow(r) {
  return {
    title: String(r.title || r.occupation || "").trim(),
    onetsoc_code: String(r.onetsoc_code || r.onetsoc || "").trim(),
    risk_score: r.risk_score ?? "",
    risk_label: r.risk_label || "Low Risk",
    job_zone: r.job_zone ?? "",
    match_score: r.match_score ?? "0"
  };
}

function hashString32(s) {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) {
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function mulb() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function isBuiltinDemoRecList(list) {
  if (!list || list.length !== 3) return false;
  const want = new Set(["Registered Nurses", "Web Developers", "Computer User Support Specialists"]);
  const got = new Set(list.map((r) => r.title));
  return got.size === 3 && [...got].every((t) => want.has(t));
}

function needsSyntheticRecommendations(recMap, sourceNote) {
  if (String(sourceNote).includes("built-in demo")) return true;
  const sample = recMap.Disadvantaged || recMap["Moderate Opportunity"] || [];
  return isBuiltinDemoRecList(sample);
}

function syntheticRecsFromJobs(jobs, groupKey) {
  const pool = (jobs || []).filter((j) => j.title);
  if (!pool.length) return [];
  const prefersLow = pool.filter((j) => String(j.risk_label).toLowerCase().includes("low"));
  const base = prefersLow.length >= 15 ? prefersLow : pool;
  const rng = mulberry32(hashString32(groupKey) || 1);
  const copy = [...base];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  const seen = new Set();
  const picked = [];
  for (let i = 0; i < copy.length && picked.length < 40; i += 1) {
    const t = copy[i].title;
    if (seen.has(t)) continue;
    seen.add(t);
    picked.push(copy[i]);
  }
  return picked.map((j, idx) => ({
    title: j.title,
    onetsoc_code: j.onetsoc_code || "",
    risk_score: j.risk_score ?? "",
    risk_label: j.risk_label || "Low Risk",
    job_zone: j.job_zone ?? "",
    match_score: String(Math.max(0.55, 0.9 - idx * 0.01))
  }));
}

async function loadCareerRecommendationsByGroup() {
  const recFiles = {
    "Very Disadvantaged": "career_recommendations_Very_Disadvantaged.csv",
    Disadvantaged: "career_recommendations_Disadvantaged.csv",
    "Moderate Opportunity": "career_recommendations_Moderate_Opportunity.csv",
    "Higher Opportunity": "career_recommendations_Higher_Opportunity.csv"
  };
  const out = {};
  await Promise.all(Object.entries(recFiles).map(async ([group, file]) => {
    const rows = await loadCSVFirst([`data/${file}`, file]);
    out[group] = rows.map(normalizeRecRow).filter((x) => x.title);
  }));

  let sourceNote = "per-group CSV files (data/ or repo root)";
  if (!out["Very Disadvantaged"]?.length) {
    const raw = await loadCSVFirst(["data/career_recommendations_by_group.csv", "career_recommendations_by_group.csv"]);
    const map = { "Very Disadvantaged": [], Disadvantaged: [], "Moderate Opportunity": [], "Higher Opportunity": [] };
    raw.forEach((r) => {
      const g = r.youth_group;
      if (!map[g]) return;
      const row = normalizeRecRow(r);
      if (row.title) map[g].push(row);
    });
    if (map["Very Disadvantaged"].length) {
      Object.assign(out, map);
      sourceNote = "career_recommendations_by_group.csv (bundled)";
    }
  }

  if (!out["Very Disadvantaged"]?.length) {
    sourceNote = "built-in demo list — add recommendation CSVs under data/ on GitHub";
    const fb = [
      { title: "Registered Nurses", risk_label: "Low Risk", job_zone: "3", match_score: "0.89" },
      { title: "Web Developers", risk_label: "Low Risk", job_zone: "3", match_score: "0.84" },
      { title: "Computer User Support Specialists", risk_label: "Low Risk", job_zone: "3", match_score: "0.84" }
    ];
    REC_GROUP_KEYS.forEach((k) => { out[k] = [...fb]; });
  }

  return { map: out, sourceNote };
}

function toNum(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

async function hydrateDataFromCSVs() {
  const opportunityRows = await loadCSVFirst(["data/opportunity_groups.csv", "opportunity_groups.csv"]);
  if (opportunityRows.length) {
    const nextGroups = {};
    opportunityRows.forEach((r) => {
      const key = r.group;
      if (!key) return;
      nextGroups[key] = {
        poverty_rate: toNum(r.poverty_rate),
        mobility_score: toNum(r.mobility_score),
        median_income: toNum(r.median_income),
        sc_cost_mean: toNum(r.sc_cost_mean),
        sc_earn10_mean: toNum(r.sc_earn10_mean),
        sc_np_pub_mean: toNum(r.sc_np_pub_mean),
        sc_np_priv_mean: toNum(r.sc_np_priv_mean),
        // Keep legacy aliases for existing render paths.
        poverty: toNum(r.poverty_rate),
        mobility: toNum(r.mobility_score),
        income: toNum(r.median_income),
        cost: toNum(r.sc_cost_mean),
        earn10: toNum(r.sc_earn10_mean),
        pub: toNum(r.sc_np_pub_mean),
        priv: toNum(r.sc_np_priv_mean)
      };
    });
    if (Object.keys(nextGroups).length) GROUP_DATA = nextGroups;
  }

  const stateMobRows = await loadCSVFirst(["data/state_mobility.csv", "state_mobility.csv"]);
  const stateGeoRows = await loadCSVFirst(["data/geo_context_state_summary.csv", "geo_context_state_summary.csv"]);
  if (stateMobRows.length || stateGeoRows.length) {
    const nextStates = {};
    stateMobRows.forEach((r) => {
      if (!r.abbr) return;
      nextStates[r.abbr] = {
        name: r.state || r.abbr,
        mobility: toNum(r.mobility_score),
        poverty: toNum(r.poverty_rate),
        income: 0,
        opp_gap: 0,
        tracts: toNum(r.tract_count),
        disadvantaged_share: 0
      };
    });
    stateGeoRows.forEach((r) => {
      if (!r.state_abbr) return;
      const existing = nextStates[r.state_abbr] || { name: r.state_abbr };
      nextStates[r.state_abbr] = {
        ...existing,
        mobility: toNum(r.avg_mob_up, existing.mobility || 0),
        poverty: toNum(r.avg_pov20, existing.poverty || 0),
        income: toNum(r.avg_inc20, existing.income || 0),
        opp_gap: toNum(r.avg_opp_gap, existing.opp_gap || 0),
        tracts: toNum(r.tract_count, existing.tracts || 0),
        disadvantaged_share: toNum(r.disadv_tract_share, existing.disadvantaged_share || 0)
      };
    });
    if (Object.keys(nextStates).length) STATE_DATA = nextStates;
  }
}

function money(v) { return `$${Math.round(Number(v)).toLocaleString()}`; }
function pct(v) { return `${(Number(v) * 100).toFixed(0)}%`; }

/** Same-origin page href when the active page lives under /data/ vs repo root. */
function appPageHref(filename) {
  const p = window.location.pathname || "";
  return /\/data\//.test(p) ? filename : `data/${filename}`;
}

function jobZoneTrainingPhrase(z) {
  const n = Number(z);
  if (!Number.isFinite(n)) return "See Job Zone on the card — it summarizes usual preparation depth (O*NET Job Zones).";
  if (n <= 1) return "Job Zone 1: often brief on-the-job training.";
  if (n <= 2) return "Job Zone 2: usually high school plus some training or experience.";
  if (n === 3) return "Job Zone 3: often associate-level training, apprenticeship, or certificate path.";
  if (n === 4) return "Job Zone 4: typically bachelor’s-level preparation.";
  return "Job Zone 5: often extensive preparation or graduate training.";
}

function recRecommendationWhyHtml(groupName, r) {
  const g = escapeHtmlText(groupName);
  const m = Number(r.match_score);
  let tier = "a contextual match";
  if (Number.isFinite(m)) {
    if (m >= 0.885) tier = "a very strong contextual match in this export";
    else if (m >= 0.82) tier = "a strong match for this group’s ranked list";
    else tier = "a supported pick from this group’s ranked list";
  }
  return `<p class="muted rec-why"><strong>Why it’s recommended:</strong> Model 2 ranks occupations for the <strong>${g}</strong> neighborhood profile (accessibility + Model 1 risk + match). This row shows ${tier}—a planning idea, not a hiring guarantee.</p>`;
}

function recNextStepLinksHtml() {
  const r = appPageHref("resources.html");
  const e = appPageHref("education.html");
  const c = appPageHref("chatbot.html");
  return `<p class="muted rec-next" style="margin-top:.5rem;"><strong>Next steps:</strong> <a href="https://studentaid.gov/apply-for-aid/fafsa" target="_blank" rel="noopener">FAFSA</a> · <a href="${r}">Resources</a> · <a href="${e}">Education Explorer (ROI)</a> · <a href="${c}">AI Advisor</a> for a personalized plan.</p>`;
}
function mobilityColor(v) {
  if (v >= 0.45) return "#22c55e";
  if (v >= 0.4) return "#3b82f6";
  if (v >= 0.35) return "#8b5cf6";
  return "#dc2626";
}

function mobilityGroup(v) {
  if (v >= 0.45) return "Higher Opportunity";
  if (v >= 0.4) return "Moderate Opportunity";
  if (v >= 0.35) return "Disadvantaged";
  return "Very Disadvantaged";
}
function riskClass(label) {
  if (String(label).includes("Low")) return "risk-low";
  if (String(label).includes("Moderate")) return "risk-moderate";
  return "risk-high";
}


function initNav() {
  const btn = document.getElementById("menuBtn");
  const links = document.getElementById("navLinks");
  if (btn && links) btn.addEventListener("click", () => links.classList.toggle("open"));
}

function initReveal() {
  const items = document.querySelectorAll(".section, .card");
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: 0.15 });
  items.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

function initCounters() {
  document.querySelectorAll("[data-counter]").forEach((el) => {
    const target = Number(el.dataset.counter);
    if (!Number.isFinite(target)) return;
    const suffix = el.dataset.suffix || "";
    const decimals = Number(el.dataset.decimals || 0);
    const duration = 400;
    const fmt = (v) => (decimals ? `${v.toFixed(decimals)}${suffix}` : `${Math.round(v).toLocaleString()}${suffix}`);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const v = target * p;
      el.textContent = fmt(v);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

const API_BASE_URL = window.WORKFORCE_API_BASE || "";
const ALLOW_INSECURE_BROWSER_KEYS = true;
const GEMINI_DIRECT_KEY = window.WORKFORCE_GEMINI_KEY || "YOUR_GEMINI_KEY_HERE";
const GROQ_DIRECT_KEY = window.WORKFORCE_GROQ_KEY || "YOUR_GROQ_KEY_HERE";
const DEFAULT_JOBS = [
  { title: "Registered Nurses", risk_score: "0", risk_label: "Low Risk", job_zone: "3" },
  { title: "Web Developers", risk_score: "1", risk_label: "Low Risk", job_zone: "3" },
  { title: "Cybersecurity Analysts", risk_score: "1", risk_label: "Low Risk", job_zone: "3" },
  { title: "Computer User Support Specialists", risk_score: "1", risk_label: "Low Risk", job_zone: "3" },
  { title: "Health Information Technologists and Medical Registrars", risk_score: "1", risk_label: "Low Risk", job_zone: "3" },
  { title: "Administrative Assistants", risk_score: "2", risk_label: "Moderate Risk", job_zone: "2" },
  { title: "Customer Service Representatives", risk_score: "2", risk_label: "Moderate Risk", job_zone: "2" },
  { title: "Data Entry Clerks", risk_score: "4", risk_label: "High Risk", job_zone: "1" },
  { title: "General and Operations Managers", risk_score: "2", risk_label: "Moderate Risk", job_zone: "4" },
  { title: "Marketing Managers", risk_score: "1", risk_label: "Low Risk", job_zone: "4" },
  { title: "Human Resources Managers", risk_score: "1", risk_label: "Low Risk", job_zone: "4" }
];

async function askGeminiWithModel(conversationHistory, modelName, systemPrompt) {
  const GEMINI_API_KEY = GEMINI_DIRECT_KEY;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: conversationHistory.map((msg) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }]
        })),
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { maxOutputTokens: 1000, temperature: 0.7, thinkingConfig: { thinkingBudget: 0 } }
      })
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || `${modelName} failed`);
  }
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

async function askGroq(conversationHistory, systemPrompt) {
  const GROQ_API_KEY = GROQ_DIRECT_KEY;
  if (!GROQ_API_KEY || GROQ_API_KEY === "GROQ_API_KEY_PLACEHOLDER") {
    throw new Error("Groq key not configured.");
  }
  const models = ["llama-3.1-8b-instant", "llama3-70b-8192"];
  const errors = [];
  for (const model of models) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        max_tokens: 1000,
        messages: [
          { role: "system", content: systemPrompt },
          ...conversationHistory.map((m) => ({ role: m.role, content: m.content }))
        ]
      })
    });
    const data = await response.json();
    if (response.ok && data?.choices?.[0]?.message?.content) {
      return data.choices[0].message.content;
    }
    errors.push(`${model}: ${data?.error?.message || "failed"}`);
  }
  throw new Error(errors.join(" | "));
}

async function askWithFallbacks(conversationHistory) {
  const chatSystemPrompt = await getChatSystemPrompt(conversationHistory);
  if (API_BASE_URL) {
    const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversationHistory, systemPrompt: chatSystemPrompt })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data?.error || "Proxy request failed.");
    return data?.reply || "";
  }

  if (!ALLOW_INSECURE_BROWSER_KEYS) {
    throw new Error("Secure API proxy is not configured. Set window.WORKFORCE_API_BASE.");
  }

  const errors = [];
  try {
    const text = await askGeminiWithModel(conversationHistory, "gemini-2.5-flash", chatSystemPrompt);
    if (text) return text;
  } catch (e) {
    errors.push(`Gemini 2.5: ${e.message}`);
  }
  try {
    const text = await askGeminiWithModel(conversationHistory, "gemini-2.0-flash-lite", chatSystemPrompt);
    if (text) return text;
  } catch (e) {
    errors.push(`Gemini Lite: ${e.message}`);
  }
  try {
    const text = await askGroq(conversationHistory, chatSystemPrompt);
    if (text) return text;
  } catch (e) {
    errors.push(`Groq: ${e.message}`);
  }
  throw new Error(errors.join(" | "));
}

async function testGeminiConnection() {
  try {
    const pingReply = await askWithFallbacks([{ role: "user", content: "Reply with: OK" }]);
    return { ok: Boolean(String(pingReply || "").trim()) };
  } catch {
    return { ok: false };
  }
}

function setApiStatus(el, ok) {
  if (!el) return;
  el.classList.remove("ok", "err");
  const ready = "AI Advisor ready — enter your ZIP code, education level, budget, career interests, and concerns to begin.";
  if (ok) {
    el.classList.add("ok");
    el.innerHTML = `<span class="status-dot"></span><span>${ready} <em style="opacity:.88;font-style:normal;font-size:.92em;">Live AI is connected.</em></span>`;
  } else {
    el.classList.add("err");
    el.innerHTML = `<span class="status-dot"></span><span>${ready} <em style="opacity:.88;font-style:normal;font-size:.92em;">Demo tip: configure API keys for full replies — use the sample prompts to walk through the flow.</em></span>`;
  }
}

function attachChatBehavior({ input, sendBtn, log, suggestionSelector, helperToggle, statusEl }) {
  const history = [];
  const addMsg = (text, user = false) => {
    const el = document.createElement("div");
    el.className = `msg ${user ? "user" : "bot"}`;
    el.textContent = text;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
  };
  const showTyping = () => {
    const bubble = document.createElement("div");
    bubble.className = "msg bot";
    bubble.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
    bubble.dataset.typing = "true";
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
  };
  const hideTyping = () => {
    const t = log.querySelector('[data-typing="true"]');
    if (t) t.remove();
  };
  const send = async () => {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    addMsg(text, true);
    history.push({ role: "user", content: text });
    if (helperToggle) helperToggle.classList.add("hide");
    showTyping();
    try {
      const reply = await askWithFallbacks(history);
      hideTyping();
      addMsg(reply, false);
      history.push({ role: "assistant", content: reply });
    } catch (err) {
      hideTyping();
      addMsg(`Connection error: ${err?.message || "Unknown error"}`, false);
    }
  };
  if (statusEl) {
    statusEl.classList.remove("ok", "err");
    statusEl.innerHTML = `<span class="status-dot"></span><span>AI Advisor ready — enter your ZIP code, education level, budget, career interests, and concerns to begin.</span>`;
  }
  testGeminiConnection().then((res) => setApiStatus(statusEl, res.ok));
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", (e) => e.key === "Enter" && send());
  if (suggestionSelector) {
    document.querySelectorAll(suggestionSelector).forEach((b) => b.addEventListener("click", () => {
      input.value = b.dataset.prompt;
      send();
    }));
  }
}

function initChatbotPage() {
  const sendBtn = document.getElementById("sendBtn");
  if (!sendBtn) return;
  attachChatBehavior({
    input: document.getElementById("chatInput"),
    sendBtn,
    log: document.getElementById("chatLog"),
    suggestionSelector: "[data-prompt]",
    helperToggle: document.getElementById("chatHelper"),
    statusEl: document.getElementById("chatApiStatus")
  });
}

function initHomeWidget() {
  const btn = document.getElementById("floatingChatBtn");
  if (!btn) return;
  const widget = document.getElementById("chatWidget");
  const close = document.getElementById("closeWidget");
  btn.addEventListener("click", () => widget.classList.toggle("hide"));
  close.addEventListener("click", () => widget.classList.add("hide"));
  attachChatBehavior({
    input: document.getElementById("widgetInput"),
    sendBtn: document.getElementById("widgetSend"),
    log: document.getElementById("widgetLog"),
    suggestionSelector: null,
    helperToggle: null,
    statusEl: document.getElementById("widgetApiStatus")
  });
}

async function initMapPage() {
  const mapSvg = document.getElementById("usMap");
  if (!mapSvg) return;
  const details = document.getElementById("stateDetails");
  const search = document.getElementById("stateSearch");
  const tableBody = document.getElementById("stateRows");
  const mapWrap = document.getElementById("mapWrap");
  const tableWrap = document.getElementById("tableWrap");
  const toggle = document.getElementById("viewToggle");

  const setDetails = (abbr) => {
    const st = STATE_DATA[abbr];
    if (!st) return;
    const group = mobilityGroup(Number(st.mobility));
    const groupColor = mobilityColor(Number(st.mobility));
    const mb = appPageHref("careers.html");
    const ed = appPageHref("education.html");
    const ds = appPageHref("data-story.html");
    details.innerHTML = `
      <h3>${st.name} — plain-language readout</h3>
      <p class="muted" style="margin:0 0 .6rem;">These are <strong>state averages</strong> built from neighborhood (tract) data — useful context, not a verdict on any one person.</p>
      <p>🏷️ <strong>Typical opportunity band:</strong> <span style="display:inline-block;padding:2px 8px;border-radius:999px;background:${groupColor};color:#fff;font-weight:700;">${group}</span> (from average upward mobility in this state)</p>
      <p>📍 <strong>Neighborhoods in this view:</strong> ${Number(st.tracts).toLocaleString()} census tracts</p>
      <p>📈 <strong>Upward mobility (index):</strong> ${Number(st.mobility).toFixed(2)} on a 0–1 scale — higher means stronger typical connections between growing up here and better adult outcomes in our summary data.</p>
      <p>💸 <strong>Poverty rate:</strong> ${pct(st.poverty)} of people in these tracts below the poverty line on average — a stress indicator for budgets and support needs.</p>
      <p>💰 <strong>Median income:</strong> ${money(st.income)} — typical tract-level middle income in the merge we use.</p>
      <p>⚖️ <strong>Opportunity gap:</strong> ${Number(st.opp_gap).toFixed(2)} — summarizes how wide outcomes can be between higher- and lower-opportunity areas in this bundle (larger often means steeper inequality of place).</p>
      <p>🔴 <strong>Disadvantaged tract share:</strong> ${pct(st.disadvantaged_share)} — share of tracts labeled disadvantaged or very disadvantaged in this rollup.</p>
      <p class="muted" style="margin:.75rem 0 0;"><strong>What to do next:</strong> Compare careers for this context → <a href="${mb}">Career Paths</a> · See education costs vs earnings by opportunity group → <a href="${ed}">Education Explorer</a> · Read how we cluster neighborhoods → <a href="${ds}#model-youth-cluster">Data Story</a>.</p>
    `;
    document.querySelectorAll(".state-path").forEach((el) => el.classList.remove("active"));
    const path = document.querySelector(`[data-abbr="${abbr}"]`);
    if (path) path.classList.add("active");
  };

  const entries = Object.entries(STATE_DATA).map(([abbr, v]) => ({ abbr, ...v })).sort((a, b) => b.mobility - a.mobility);
  tableBody.innerHTML = entries.map((s) => {
    const group = mobilityGroup(Number(s.mobility));
    return `<tr><td>${s.name}</td><td>${s.abbr}</td><td>${group}</td><td>${Number(s.mobility).toFixed(2)}</td><td>${pct(s.poverty)}</td></tr>`;
  }).join("");
  const legend = document.querySelector(".map-legend");
  if (legend) {
    legend.innerHTML = `
      <span><span class="legend-dot" style="background:#22c55e;"></span>Higher Opportunity (0.45+)</span>
      <span><span class="legend-dot" style="background:#3b82f6;"></span>Moderate Opportunity (0.40-0.44)</span>
      <span><span class="legend-dot" style="background:#8b5cf6;"></span>Disadvantaged (0.35-0.39)</span>
      <span><span class="legend-dot" style="background:#dc2626;"></span>Very Disadvantaged (&lt;0.35)</span>
    `;
  }

  toggle.addEventListener("click", () => {
    mapWrap.classList.toggle("hide");
    tableWrap.classList.toggle("hide");
    toggle.textContent = mapWrap.classList.contains("hide") ? "Show Map View" : "Show Table View";
  });

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    const match = entries.find((s) => s.abbr.toLowerCase() === q || s.name.toLowerCase().includes(q));
    if (match) setDetails(match.abbr);
  });

  const us = await fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then((r) => r.json());
  const geo = topojson.feature(us, us.objects.states);
  const nameById = new Map(us.objects.states.geometries.map((g) => [String(g.id).padStart(2, "0"), g.properties.name]));
  const abbrByName = Object.fromEntries(Object.entries(STATE_DATA).map(([abbr, val]) => [val.name, abbr]));
  const projection = d3.geoAlbersUsa().fitSize([960, 580], geo);
  const path = d3.geoPath(projection);
  const svg = d3.select(mapSvg).attr("viewBox", "0 0 960 580");

  svg.selectAll("path")
    .data(geo.features)
    .join("path")
    .attr("class", "state-path")
    .attr("d", path)
    .attr("data-abbr", (d) => abbrByName[nameById.get(String(d.id).padStart(2, "0"))] || "")
    .attr("fill", (d) => {
      const abbr = abbrByName[nameById.get(String(d.id).padStart(2, "0"))];
      return abbr && STATE_DATA[abbr] ? mobilityColor(STATE_DATA[abbr].mobility) : "#263246";
    })
    .on("click", (_, d) => {
      const abbr = abbrByName[nameById.get(String(d.id).padStart(2, "0"))];
      if (abbr) setDetails(abbr);
    });

  const qsMap = new URLSearchParams(window.location.search);
  const highlight = (qsMap.get("highlight") || "").toUpperCase();
  if (highlight && STATE_DATA[highlight]) setDetails(highlight);
  else setDetails("CA");
}

function zipToGroup(zip) {
  const digits = String(zip || "").replace(/\D/g, "");
  const first = digits[0] || String(zip || "").trim()[0];
  if (first === "9") return "Disadvantaged";
  if (first === "1" || first === "2") return "Moderate Opportunity";
  if (first === "3" || first === "4") return "Very Disadvantaged";
  return "Moderate Opportunity";
}

function normalizeYouthSummaryRows(rows) {
  if (!rows.length) return [];
  if (rows[0].youth_group) return rows;
  const ordered = [...rows].sort((a, b) => {
    const va = Number(a.mob_up);
    const vb = Number(b.mob_up);
    const fa = Number.isFinite(va);
    const fb = Number.isFinite(vb);
    if (fa && fb) return va - vb;
    if (fa && !fb) return -1;
    if (!fa && fb) return 1;
    return 0;
  });
  const labels = ["Very Disadvantaged", "Disadvantaged", "Moderate Opportunity", "Higher Opportunity"];
  return ordered.map((row, idx) => ({ ...row, youth_group: labels[idx] || `Group ${idx + 1}` }));
}

function pickNumber(primary, fallback) {
  const p = Number(primary);
  if (Number.isFinite(p) && p > 0) return p;
  const f = Number(fallback);
  if (Number.isFinite(f)) return f;
  return 0;
}

/** Upward mobility is a unitless rate in [0,1]; allow 0 and treat only non-finite as missing. */
function pickMobility(primary, fallback) {
  const p = Number(primary);
  if (Number.isFinite(p)) return p;
  const f = Number(fallback);
  return Number.isFinite(f) ? f : 0;
}

/** Mirrors data/tract_key_fields_missingness.csv when fetch fails (e.g. file:// or wrong path). */
const TRACT_MISSINGNESS_FALLBACK = [
  { field: "mob_up", field_label: "Upward mobility (mob_up)", stage: "before_knn", null_pct: "15.87", tract_count: "73202" },
  { field: "mob_up", field_label: "Upward mobility (mob_up)", stage: "after_knn", null_pct: "0", tract_count: "73202" },
  { field: "pov20", field_label: "Poverty rate (pov20)", stage: "before_knn", null_pct: "1.42", tract_count: "73202" },
  { field: "pov20", field_label: "Poverty rate (pov20)", stage: "after_knn", null_pct: "0", tract_count: "73202" },
  { field: "inc20", field_label: "Median income (inc20)", stage: "before_knn", null_pct: "2.08", tract_count: "73202" },
  { field: "inc20", field_label: "Median income (inc20)", stage: "after_knn", null_pct: "0", tract_count: "73202" },
  { field: "opp_gap", field_label: "Opportunity gap (opp_gap)", stage: "before_knn", null_pct: "3.65", tract_count: "73202" },
  { field: "opp_gap", field_label: "Opportunity gap (opp_gap)", stage: "after_knn", null_pct: "0", tract_count: "73202" }
];

function tractMissingnessCsvPaths() {
  const root = (document.documentElement.getAttribute("data-data-root") || "").replace(/\/$/, "");
  const name = "tract_key_fields_missingness.csv";
  const paths = [];
  if (root) paths.push(`${root}/data/${name}`);
  paths.push(`data/${name}`, name);
  return paths;
}

async function initDataStoryImputationChart() {
  const canvas = document.getElementById("tractMissingnessChart");
  const captionEl = document.getElementById("tractMissingnessCaption");
  if (!captionEl && !canvas) return;

  let rows = await loadCSVFirst(tractMissingnessCsvPaths());
  const usedFallback = !rows.length;
  if (usedFallback) rows = TRACT_MISSINGNESS_FALLBACK;

  const order = [];
  const seen = new Set();
  rows.forEach((r) => {
    const key = r.field_label || r.field;
    if (key && !seen.has(key)) {
      seen.add(key);
      order.push(key);
    }
  });

  const byLabel = new Map();
  rows.forEach((r) => {
    const label = r.field_label || r.field;
    if (!byLabel.has(label)) byLabel.set(label, { before: 0, after: 0 });
    const rec = byLabel.get(label);
    const pct = Number(r.null_pct);
    const v = Number.isFinite(pct) ? pct : 0;
    if (r.stage === "before_knn") rec.before = v;
    if (r.stage === "after_knn") rec.after = v;
  });

  const beforeData = order.map((l) => byLabel.get(l).before);
  const afterData = order.map((l) => byLabel.get(l).after);
  const hi = Math.max(1, ...beforeData, ...afterData);

  if (captionEl) {
    const n = rows[0]?.tract_count || "";
    const fetchNote = usedFallback
      ? " <strong>Note:</strong> Showing bundled figures (CSV fetch failed — use a local server like <code>python -m http.server</code> to load <code>data/tract_key_fields_missingness.csv</code> live)."
      : "";
    const knnPlain = "Some neighborhoods were missing upward mobility and related fields. Instead of dropping those tracts, we used k-nearest neighbors (KNN) to fill gaps using values from similar tracts. That kept the full 73,202-tract grid usable for clustering and prevented the model from breaking on nulls. Filled values are estimates—transparently labeled in our pipeline—not new ground-truth surveys.";
    const intro = n
      ? `${knnPlain} <strong>Detail:</strong> Tract modeling frame N=${Number(n).toLocaleString()}. Red bars show missing share before imputation; after KNN the modeling columns used here have 0% missing in this export (see table).${fetchNote}`
      : `${knnPlain} Red bars: missing share before imputation. After KNN, values appear in the table.${fetchNote}`;
    const tableRows = order
      .map((label, i) => {
        const b = beforeData[i].toFixed(2);
        const a = afterData[i].toFixed(2);
        return `<tr><td>${label}</td><td>${b}%</td><td class="after-cell">${a}%</td></tr>`;
      })
      .join("");
    captionEl.innerHTML = `
      <p class="muted" style="margin:0 0 .75rem;">${intro}</p>
      <div style="overflow-x:auto;" class="missingness-table-wrap">
        <table class="missingness-table">
          <thead>
            <tr>
              <th scope="col">Tract field</th>
              <th scope="col">Before KNN (raw merge)</th>
              <th scope="col">After KNN (modeling frame)</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    `;
  }

  if (!canvas || typeof Chart === "undefined") {
    if (captionEl && typeof Chart === "undefined") {
      const warn = document.createElement("p");
      warn.className = "muted";
      warn.style.marginTop = ".75rem";
      warn.textContent = "Chart library did not load. The table above still shows before/after missingness.";
      captionEl.appendChild(warn);
    }
    return;
  }

  const ctx = canvas.getContext("2d");
  if (canvas._tractMissingnessChart) {
    canvas._tractMissingnessChart.destroy();
  }
  try {
    canvas._tractMissingnessChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: order,
      datasets: [
        {
          label: "Before KNN (raw merge)",
          data: beforeData,
          backgroundColor: "rgba(248, 113, 113, 0.8)",
          borderColor: "rgba(248, 113, 113, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#e5e7eb" }
        },
        title: {
          display: true,
          text: "Before KNN — percent of tracts with missing values",
          color: "#f9fafb",
          font: { size: 15, weight: "600" }
        },
        tooltip: {
          callbacks: {
            label(c) {
              return `${c.dataset.label}: ${c.parsed.y.toFixed(2)}%`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: hi * 1.12,
          ticks: {
            color: "#9ca3af",
            callback: (v) => `${v}%`
          },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
          title: {
            display: true,
            text: "Missing (%)",
            color: "#cbd5e1",
            font: { size: 12, weight: "600" }
          }
        },
        x: {
          ticks: { color: "#9ca3af", maxRotation: 28, minRotation: 0 },
          grid: { display: false },
          title: {
            display: true,
            text: "Tract field",
            color: "#cbd5e1",
            font: { size: 12, weight: "600" }
          }
        }
      }
    }
    });
  } catch (e) {
    console.error("tract missingness chart", e);
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "Could not draw chart; see table above.";
    captionEl?.appendChild(p);
  }
}

const YOUTH_GROUP_ORDER = ["Very Disadvantaged", "Disadvantaged", "Moderate Opportunity", "Higher Opportunity"];

const CLUSTER_PROFILE_FEATURES = [
  { key: "pov20", label: "Poverty (pov20)", format: "rate" },
  { key: "mob_up", label: "Upward mobility (mob_up)", format: "rate" },
  { key: "inc20", label: "Median income (inc20)", format: "money" },
  { key: "opp_gap", label: "Opportunity gap (opp_gap)", format: "rate" }
];

const CLUSTER_PROFILE_FALLBACK = [
  { youth_group: "Disadvantaged", pov20: "0.10036765948981917", mob_up: "0.412231942717917", inc20: "83573.9284868977", opp_gap: "0.12873829247675503" },
  { youth_group: "Higher Opportunity", pov20: "0.05041693302080513", mob_up: "0.512564116769657", inc20: "140800.83116698635", opp_gap: "0.06076391789189566" },
  { youth_group: "Moderate Opportunity", pov20: "0.1277797397062185", mob_up: "0.41161641677448696", inc20: "71366.47968642975", opp_gap: "0.03900309764822313" },
  { youth_group: "Very Disadvantaged", pov20: "0.3321536045233258", mob_up: "0.3402339249253945", inc20: "40772.19189571228", opp_gap: "0.06013499293230748" }
];

function clusterProfileCsvPaths() {
  const root = (document.documentElement.getAttribute("data-data-root") || "").replace(/\/$/, "");
  const name = "model2_cluster_profiles_mean.csv";
  const paths = [];
  if (root) paths.push(`${root}/data/${name}`);
  paths.push(`data/${name}`, name);
  return paths;
}

function formatClusterProfileCell(feat, raw) {
  const v = Number(raw);
  if (!Number.isFinite(v)) return "—";
  if (feat.format === "money") return `$${Math.round(v).toLocaleString()}`;
  return `${(v * 100).toFixed(1)}%`;
}


const OCC_RISK_DIST_FALLBACK = [
  { metric: "risk_label_count", category: "Low Risk", value: "446" },
  { metric: "risk_label_count", category: "Moderate Risk", value: "314" },
  { metric: "risk_label_count", category: "High Risk", value: "256" }
];

/** Multi-line hover copy for the risk distribution chart (plain language for younger readers). */
const OCC_RISK_DIST_TOOLTIP_LINES = {
  Low: [
    "Context: WorkForce looked at 1,016 real job types and sorted them by how much of the work looks easy to hand off to software, AI, or tighter routines.",
    "What “Low” means here: these jobs usually need more human judgment, creativity, people skills, or serious training. The tasks are less like “the same steps every day on a screen.”",
    "So what should I do with that? If you are picking a direction for college, trade school, or training, Low-risk jobs are often a smarter long-run bet—still hard work, but the role itself tends to age better as tech changes.",
    "Important: this is not saying you are “smarter” if you pick these jobs. It is just a map of the work, not a grade on you."
  ],
  Moderate: [
    "Context: This bar counts jobs in the middle band. The model mixed together how routine the work is, how much thinking and people skills it needs, and how much training it usually takes.",
    "What “Moderate” means here: some parts of the job could get faster or smaller because of tech, while other parts still need a person in the loop. Think “mixed bag,” not “safe” or “doomed.”",
    "So what should I do with that? These paths can still be worth it—especially if you keep learning on the side, pick up a certificate, or plan a next-step job you can slide into later.",
    "Remember: many adults build a career by starting in one lane and moving sideways. Moderate is a signal to have a backup skill, not to panic."
  ],
  High: [
    "Context: WorkForce flags jobs where the tasks look more repeatable or easier to automate or streamline—like heavy screen work, tight scripts, or simple routines—based on public job-task data.",
    "What “High” means here: it is easier for employers to use tools, software, or new processes to do big chunks of the work. That can mean more competition for entry spots or flatter pay over time—not always, but often enough to notice.",
    "So what should I do with that? It does not mean “never do this.” Lots of people use these jobs as a first paycheck. It does mean: go in with a plan—save for the next class, ask about tuition help, and look for a “next job” that sits in Low or Moderate if you want more stability.",
    "Again: you are not “less than” if you start here. The label is about the job’s task pattern, not your future if you keep leveling up."
  ]
};

function occupationRiskDistCsvPaths() {
  const root = (document.documentElement.getAttribute("data-data-root") || "").replace(/\/$/, "");
  const name = "occupation_risk_distribution.csv";
  const paths = [];
  if (root) paths.push(`${root}/data/${name}`);
  paths.push(`data/${name}`, name);
  return paths;
}

function careerRecByGroupCsvPaths() {
  const root = (document.documentElement.getAttribute("data-data-root") || "").replace(/\/$/, "");
  const name = "career_recommendations_by_group.csv";
  const paths = [];
  if (root) paths.push(`${root}/data/${name}`);
  paths.push(`data/${name}`, name);
  return paths;
}

function riskLabelShort(cat) {
  const s = String(cat || "");
  if (s.includes("Low")) return "Low";
  if (s.includes("Moderate")) return "Moderate";
  if (s.includes("High")) return "High";
  return s.replace(/\s*Risk\s*/i, "").trim() || s;
}

function truncateTitle(s, max = 48) {
  const t = String(s || "").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

function escapeHtmlAttr(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlText(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function parseTaskShare01(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return NaN;
  return Math.min(1, Math.max(0, n));
}

function normalizeOccTitle(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function findJobProfileForRec(jobs, rec) {
  if (!jobs || !rec) return null;
  const code = String(rec.onetsoc_code || rec.onetsoc || "").trim();
  if (code) {
    const byCode = jobs.find((j) => String(j.onetsoc_code || "").trim() === code);
    if (byCode) return byCode;
  }
  const target = normalizeOccTitle(rec.title || rec.occupation);
  if (!target) return null;
  const exact = jobs.find((j) => normalizeOccTitle(j.title) === target);
  if (exact) return exact;
  return jobs.find((j) => {
    const t = String(j.title || "").toLowerCase();
    return t === target || t.includes(target) || target.includes(t);
  }) || null;
}

function riskLabelBucketForTier(lab) {
  const s = String(lab);
  if (s.includes("Moderate")) return "moderate";
  if (s.includes("High")) return "high";
  if (s.includes("Low")) return "low";
  return "other";
}

function riskTransparencyHtml(job) {
  const label = String(job?.risk_label || "").trim() || "Low Risk";
  const zone = String(job?.job_zone ?? "").trim();
  const rs = job?.risk_score !== undefined && job?.risk_score !== null && job?.risk_score !== ""
    ? String(job.risk_score)
    : "";
  const R = parseTaskShare01(job?.routine_cognitive_tasks);
  const M = parseTaskShare01(job?.manual_tasks);
  const S = parseTaskShare01(job?.social_tasks);
  const N = parseTaskShare01(job?.nonroutine_cognitive_tasks);
  const hasTasks = [R, M, S, N].every((x) => Number.isFinite(x));

  const zPhrase = zone
    ? ` Typical preparation depth is summarized as <strong>Job Zone ${escapeHtmlText(zone)}</strong>, which the model blends with task style—not a judgment about people.`
    : " Job Zone (training depth) is part of the score when we have it.";

  if (!hasTasks) {
    const escLabel = escapeHtmlText(label);
    const scoreBit = rs ? ` The numeric output is <strong>${escapeHtmlText(rs)}</strong> (higher means more automation-style exposure in our blend).` : "";
    return `<p class="risk-transparency muted"><strong>Why this label:</strong>${scoreBit} <strong>${escLabel}</strong> is the band.${zPhrase} Line-by-line routine / judgment / social / hands-on text loads with <code>data/job_df_full_occupations.csv</code> (serve the site over HTTP, e.g. <code>python3 -m http.server</code>).</p>`;
  }

  let core;
  if (R > N + 0.03) {
    core = "Routine, structured cognitive tasks outweigh open-ended judgment in the O*NET-style task weights we use for this occupation.";
    const extras = [];
    if (S >= 0.12) extras.push("people-facing or coordination work is a meaningful slice");
    if (M >= 0.12) extras.push("hands-on or physical tasks matter too");
    if (extras.length) {
      const a = extras[0];
      const cap = a.charAt(0).toUpperCase() + a.slice(1);
      core += ` ${cap}${extras[1] ? `, and ${extras[1]}` : ""}.`;
    } else {
      core += " Interpersonal and physical-task shares are relatively small in this weighted snapshot.";
    }
  } else if (N > R + 0.03) {
    core = "Open-ended judgment, planning, or novel problems carry more weight than highly repetitive desk-only routines in our task-style inputs.";
    if (S >= 0.12) core += " There is also a meaningful interpersonal or social-task component.";
    if (M >= 0.12) core += " Hands-on or physical tasks show up in the mix too.";
  } else {
    core = "Routine and non-routine cognitive work are both material in the blend we import; social, hands-on, and training signals tip the score.";
  }

  const bucket = riskLabelBucketForTier(label);
  const escLabel2 = escapeHtmlText(label);
  let bandSentence;
  if (bucket === "high") {
    bandSentence = `Together with training signals, that pattern maps to <strong>${escLabel2}</strong>—higher modeled exposure to automation-style substitution or augmentation than many roles with more protective judgment, variability, or physical context. It is not a verdict on any individual worker.`;
  } else if (bucket === "moderate") {
    bandSentence = `That combination lands in <strong>${escLabel2}</strong>: more routine or screen-heavy concentration than many low-risk rows, but not the most repetitive-heavy profiles in our export.`;
  } else {
    bandSentence = `That combination lands in <strong>${escLabel2}</strong> in this model—lower modeled automation-style exposure than more routine-dominant occupations on average, not a guarantee about the future.`;
  }

  return `<p class="risk-transparency muted"><strong>Why this label:</strong> ${core}${zPhrase} ${bandSentence}</p>`;
}

function formatCareerRiskResultCard(j) {
  const title = escapeHtmlText(j.title);
  const lab = escapeHtmlText(String(j.risk_label || ""));
  const rs = escapeHtmlText(String(j.risk_score ?? ""));
  return `<div class="card"><h3>${title}</h3><span class="badge-risk ${riskClass(j.risk_label)}">${lab}</span><p class="muted">Risk score: ${rs}</p>${riskTransparencyHtml(j)}</div>`;
}

async function initOccupationRiskDistChart() {
  const canvas = document.getElementById("occupationRiskDistChart");
  const captionEl = document.getElementById("occupationRiskDistCaption");
  const debugPre = document.getElementById("occupationRiskDistDebugPre");
  if (!canvas && !captionEl && !debugPre) return;

  const paths = occupationRiskDistCsvPaths();
  let rows = await loadCSVFirst(paths);
  const usedFallback = !rows.length;
  if (usedFallback) rows = OCC_RISK_DIST_FALLBACK;

  const wanted = rows.filter((r) => String(r.metric || "").includes("risk_label_count"));
  const order = ["Low", "Moderate", "High"];
  const byShort = new Map();
  wanted.forEach((r) => {
    const sh = riskLabelShort(r.category);
    const v = Number(r.value);
    if (Number.isFinite(v)) byShort.set(sh, v);
  });
  const labels = order.filter((k) => byShort.has(k));
  const values = labels.map((k) => byShort.get(k));
  const total = values.reduce((a, b) => a + b, 0);

  if (!labels.length) {
    if (captionEl) {
      captionEl.innerHTML = `<p class="muted" style="margin:0;">No <code>risk_label_count</code> rows found after loading CSV. Check <code>data/occupation_risk_distribution.csv</code> format.</p>`;
    }
    if (debugPre) {
      debugPre.textContent = JSON.stringify({ csvPathsTried: paths, usedFallback, error: "no_label_rows" }, null, 2);
    }
    return;
  }

  if (captionEl) {
    const note = usedFallback
      ? " <strong>Note:</strong> Bundled fallback counts (CSV fetch failed — use <code>python -m http.server</code> from the repo root to load <code>data/occupation_risk_distribution.csv</code> live)."
      : ` Sourced from <code>data/occupation_risk_distribution.csv</code> (metric <code>risk_label_count</code>).`;
    captionEl.innerHTML = `<p class="muted" style="margin:0;">Total occupations scored: <strong>${total.toLocaleString()}</strong>. Use the three bands to <strong>compare career ideas</strong> and balance quick entry against longer-run task resilience—not to judge individual fit.${note}</p>`;
  }

  if (debugPre) {
    debugPre.textContent = JSON.stringify({
      csvPathsTried: paths,
      usedFallback,
      rawRowCount: rows.length,
      labelRowsUsed: wanted.length,
      labels,
      counts: Object.fromEntries(labels.map((k, i) => [k, values[i]])),
      total
    }, null, 2);
  }

  if (!canvas || typeof Chart === "undefined") {
    if (captionEl && typeof Chart === "undefined") {
      const p = document.createElement("p");
      p.className = "muted";
      p.style.marginTop = ".75rem";
      p.textContent = "Chart.js did not load; see debug panel for counts.";
      captionEl.appendChild(p);
    }
    return;
  }

  const colors = labels.map((lab) => {
    if (lab === "Low") return { bg: "rgba(16, 185, 129, 0.75)", border: "rgba(16, 185, 129, 1)" };
    if (lab === "Moderate") return { bg: "rgba(245, 158, 11, 0.78)", border: "rgba(245, 158, 11, 1)" };
    return { bg: "rgba(239, 68, 68, 0.78)", border: "rgba(239, 68, 68, 1)" };
  });

  const ctx = canvas.getContext("2d");
  if (canvas._occupationRiskDistChart) canvas._occupationRiskDistChart.destroy();
  try {
    canvas._occupationRiskDistChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Occupations (count)",
          data: values,
          backgroundColor: colors.map((c) => c.bg),
          borderColor: colors.map((c) => c.border),
          borderWidth: 1,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "How 1,016 occupations split on automation-style risk (planning lens)",
            color: "#f9fafb",
            font: { size: 14, weight: "600" }
          },
          tooltip: {
            maxWidth: 340,
            padding: 12,
            boxPadding: 6,
            titleFont: { size: 13, weight: "600" },
            bodyFont: { size: 12 },
            callbacks: {
              title(items) {
                const lab = items[0]?.label || "This band";
                return `${lab} automation-style risk — the fuller picture`;
              },
              label(c) {
                const n = c.parsed.y;
                const pct = total > 0 ? ((n / total) * 100).toFixed(1) : "0.0";
                return `This bar: ${n.toLocaleString()} job types (${pct}% of all 1,016 scored jobs)`;
              },
              afterBody(items) {
                const lab = items[0]?.label;
                const lines = OCC_RISK_DIST_TOOLTIP_LINES[lab];
                return lines ? [...lines] : [];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: Math.max(...values, 1) * 1.12,
            ticks: { color: "#9ca3af" },
            grid: { color: "rgba(148, 163, 184, 0.2)" },
            title: {
              display: true,
              text: "How many jobs fall in each band",
              color: "#cbd5e1",
              font: { size: 12, weight: "600" }
            }
          },
          x: {
            ticks: { color: "#9ca3af" },
            grid: { display: false },
            title: {
              display: true,
              text: "Automation-style risk band",
              color: "#cbd5e1",
              font: { size: 12, weight: "600" }
            }
          }
        }
      }
    });
  } catch (e) {
    console.error("occupation risk dist chart", e);
    captionEl?.appendChild(Object.assign(document.createElement("p"), {
      className: "muted",
      textContent: "Could not draw risk distribution chart."
    }));
  }
}

const CAREER_MATCH_GROUP_COLORS = [
  { bg: "rgba(239, 68, 68, 0.82)", border: "rgba(239, 68, 68, 1)" },
  { bg: "rgba(245, 158, 11, 0.82)", border: "rgba(245, 158, 11, 1)" },
  { bg: "rgba(6, 182, 212, 0.82)", border: "rgba(6, 182, 212, 1)" },
  { bg: "rgba(16, 185, 129, 0.82)", border: "rgba(16, 185, 129, 1)" }
];

function rankSpreadStd(title, groups, byGroupDetail) {
  const ranks = groups.map((g) => byGroupDetail.get(g).get(title)?.rank).filter((x) => Number.isFinite(x));
  if (ranks.length < 2) return 0;
  const mean = ranks.reduce((a, b) => a + b, 0) / ranks.length;
  const varSum = ranks.reduce((a, x) => a + (x - mean) ** 2, 0) / ranks.length;
  return Math.sqrt(varSum);
}

function rankMinMaxSpan(title, groups, byGroupDetail) {
  const ranks = groups.map((g) => byGroupDetail.get(g).get(title)?.rank).filter((x) => Number.isFinite(x));
  if (ranks.length < 2) return 0;
  return Math.max(...ranks) - Math.min(...ranks);
}

/** Heat cell style: rank 1 = strongest priority (cool/teal), 15 = lower on list (deeper violet). */
function contextRankHeatStyle(rank) {
  if (!Number.isFinite(rank)) return { background: "#151d32", color: "#64748b" };
  const t = (rank - 1) / 14;
  const h = 172 + t * 92;
  const s = 58 + t * 14;
  const l = 26 + (1 - t) * 24;
  const lightText = l > 48;
  return {
    background: `hsl(${h} ${s}% ${l}%)`,
    color: lightText ? "#0a0f1e" : "#f4f8ff"
  };
}

async function initCareerMatchHeatmap() {
  const mount = document.getElementById("careerMatchHeatmapMount");
  const captionEl = document.getElementById("careerMatchHeatmapCaption");
  const debugPre = document.getElementById("careerMatchHeatmapDebugPre");
  if (!mount && !captionEl && !debugPre) return;

  const paths = careerRecByGroupCsvPaths();
  const raw = await loadCSVFirst(paths);
  const groups = [...YOUTH_GROUP_ORDER];

  if (!raw.length) {
    if (mount) {
      mount.innerHTML = `<p class="muted">No recommendation rows loaded. Add <code>data/career_recommendations_by_group.csv</code> or serve the site over HTTP so fetch succeeds.</p>`;
    }
    if (captionEl) captionEl.innerHTML = "";
    if (debugPre) {
      debugPre.textContent = JSON.stringify({ csvPathsTried: paths, error: "empty_or_fetch_failed" }, null, 2);
    }
    return;
  }

  const byGroupDetail = new Map();
  groups.forEach((g) => byGroupDetail.set(g, new Map()));
  raw.forEach((r) => {
    const g = String(r.youth_group || "").trim();
    const title = String(r.occupation || r.title || "").trim();
    const rk = Number(r.rank);
    const sc = Number(r.match_score);
    if (!g || !title || !byGroupDetail.has(g)) return;
    if (!Number.isFinite(rk) || !Number.isFinite(sc)) return;
    byGroupDetail.get(g).set(title, { rank: rk, match: sc });
  });

  const titleSet = new Set();
  byGroupDetail.forEach((m) => m.forEach((_, t) => titleSet.add(t)));
  const titles = [...titleSet];

  titles.sort((a, b) => {
    const d = rankSpreadStd(b, groups, byGroupDetail) - rankSpreadStd(a, groups, byGroupDetail);
    if (Math.abs(d) > 1e-9) return d;
    return String(a).localeCompare(String(b));
  });

  const flatMatches = [];
  titles.forEach((t) => {
    groups.forEach((g) => {
      const cell = byGroupDetail.get(g).get(t);
      if (cell) flatMatches.push(cell.match);
    });
  });
  const uniqueMatches = [...new Set(flatMatches.map((x) => Math.round(x * 10000) / 10000))].sort((a, b) => a - b);

  const rootAttr = (document.documentElement.getAttribute("data-data-root") || "").replace(/\/$/, "");
  const careersHref = rootAttr ? `${rootAttr}/careers.html` : "careers.html";
  const allOccHref = rootAttr ? `${rootAttr}/all-occupations.html` : "all-occupations.html";
  const tiersHref = rootAttr ? `${rootAttr}/opportunity-tiers.html` : "opportunity-tiers.html";

  const divergent = titles.filter((t) => rankMinMaxSpan(t, groups, byGroupDetail) >= 1);
  const strongDivergent = titles.filter((t) => rankMinMaxSpan(t, groups, byGroupDetail) >= 4);

  const sample = titles.slice(0, 8).map((t) => ({
    occupation: t,
    byGroup: Object.fromEntries(
      groups.map((g) => {
        const c = byGroupDetail.get(g).get(t);
        return [g, c ? { rank: c.rank, match: c.match } : null];
      })
    )
  }));

  if (captionEl) {
    captionEl.innerHTML = `<p class="muted" style="margin:0;"><strong>Story in the numbers:</strong> If every neighborhood deserved the same ordering, each row would be one solid color band. In this file, <strong>${divergent.length}</strong> of <strong>${titles.length}</strong> occupations move at least one rank between groups, and <strong>${strongDivergent.length}</strong> swing by four ranks or more—that is what we mean by <strong>not identical</strong>: same job universe, different <em>lineup</em> because Model 2 is group-conditioned. <code>match_score</code> only has <strong>${uniqueMatches.length}</strong> tight tiers (${uniqueMatches.map((x) => x.toFixed(3)).join(", ")}), so the heatmap highlights <strong>rank</strong>, not fake precision. Explore: <a href="${tiersHref}">Opportunity tiers</a> · <a href="${allOccHref}">All occupations</a> · <a href="${careersHref}">Career Paths</a>.</p>`;
  }

  if (debugPre) {
    debugPre.textContent = JSON.stringify({
      csvPathsTried: paths,
      rowCount: raw.length,
      uniqueShortlistTitles: titles.length,
      occupationsWithRankSpreadGte1: divergent.length,
      occupationsWithRankSpreadGte4: strongDivergent.length,
      distinctMatchScoreTiers: uniqueMatches,
      vizChoice: "context_rank_heatmap_only",
      sampleRows: sample
    }, null, 2);
  }

  if (!mount) return;

  const thead = `<thead><tr><th class="row-head" scope="col">Occupation</th>${groups.map((g) => `<th scope="col">${escapeHtmlText(g)}<br /><span class="muted" style="font-weight:500;font-size:.78rem;">list rank</span></th>`).join("")}</tr></thead>`;

  const tbody = titles.map((t) => {
    const cells = groups.map((g) => {
      const c = byGroupDetail.get(g).get(t);
      if (!c) {
        return `<td class="context-rank-cell na" title="Not in this group’s top-15 export">—</td>`;
      }
      const st = contextRankHeatStyle(c.rank);
      const tip = escapeHtmlAttr(`${g}: rank ${c.rank} of 15 · match_score ${c.match.toFixed(4)}`);
      return `<td class="context-rank-cell" style="background:${st.background};color:${st.color}" title="${tip}"><span class="context-rank-num">#${c.rank}</span></td>`;
    }).join("");
    return `<tr><th class="row-head" scope="row" title="${escapeHtmlAttr(t)}">${escapeHtmlText(truncateTitle(t, 52))}</th>${cells}</tr>`;
  }).join("");

  mount.innerHTML = `
    <div class="context-rank-viz-head">
      <h3 class="model2-subhead" style="margin:0 0 .35rem;">How the lineup shifts when neighborhood context changes</h3>
      <p class="muted" style="margin:0 0 .65rem;font-size:.9rem;">Each <strong>row</strong> is one occupation; each <strong>column</strong> is how that job ranks in <em>that</em> opportunity group’s bundled top-fifteen. They are <strong>not identical</strong> because Model 2 re-sorts the same candidates per group—tract context changes which paths surface first (and some cells are blank when a job does not make that group’s cut). <strong>Darker teal</strong> = closer to #1 for that column; <strong>lighter violet</strong> = lower on that list. Read left-to-right across a row to see the reordering story.</p>
      <div class="context-rank-legend" aria-hidden="true">
        <span class="muted" style="font-size:.82rem;">Stronger match / higher list priority</span>
        <span class="context-rank-legend-bar"></span>
        <span class="muted" style="font-size:.82rem;">Weaker on this group’s list</span>
      </div>
    </div>
    <div class="heatmap-scroll">
      <table class="heatmap-table context-rank-matrix">${thead}<tbody>${tbody}</tbody></table>
    </div>
  `;
}


async function initYouthClusterProfileChart() {
  const canvas = document.getElementById("youthClusterProfileChart");
  const cap = document.getElementById("youthClusterProfileCaption");
  const tableWrap = document.getElementById("youthClusterProfileTableWrap");
  if (!canvas && !cap && !tableWrap) return;

  let rows = await loadCSVFirst(clusterProfileCsvPaths());
  const usedFallback = !rows.length;
  if (usedFallback) rows = CLUSTER_PROFILE_FALLBACK;

  const byGroup = new Map();
  rows.forEach((r) => {
    const g = String(r.youth_group || "").trim();
    if (g) byGroup.set(g, r);
  });

  const rowLabels = CLUSTER_PROFILE_FEATURES.map((f) => {
    if (f.key === "pov20") return "Poverty rate";
    if (f.key === "mob_up") return "Upward mobility";
    if (f.key === "inc20") return "Median income";
    return "Opportunity gap";
  });

  const palette = [
    { border: "rgba(239, 68, 68, 0.95)", fill: "rgba(239, 68, 68, 0.55)" },
    { border: "rgba(245, 158, 11, 0.95)", fill: "rgba(245, 158, 11, 0.52)" },
    { border: "rgba(6, 182, 212, 0.95)", fill: "rgba(6, 182, 212, 0.5)" },
    { border: "rgba(16, 185, 129, 0.95)", fill: "rgba(16, 185, 129, 0.5)" }
  ];

  const barDatasets = YOUTH_GROUP_ORDER.map((gName, gi) => {
    const row = byGroup.get(gName);
    if (!row) return null;
    const data = CLUSTER_PROFILE_FEATURES.map((feat) => {
      const vals = YOUTH_GROUP_ORDER.map((g2) => Number(byGroup.get(g2)?.[feat.key]));
      const finite = vals.filter((x) => Number.isFinite(x));
      const min = Math.min(...finite);
      const max = Math.max(...finite);
      const span = max - min || 1;
      const v = Number(row[feat.key]);
      return ((v - min) / span) * 100;
    });
    const p = palette[gi % palette.length];
    return {
      label: gName,
      data,
      backgroundColor: p.fill,
      borderColor: p.border,
      borderWidth: 1
    };
  }).filter(Boolean);

  if (tableWrap) {
    const headerCells = CLUSTER_PROFILE_FEATURES.map((_, i) => `<th scope="col">${rowLabels[i]}</th>`).join("");
    const bodyRows = YOUTH_GROUP_ORDER.map((gName) => {
      const r = byGroup.get(gName);
      if (!r) return "";
      const cells = CLUSTER_PROFILE_FEATURES.map((feat) => `<td>${formatClusterProfileCell(feat, r[feat.key])}</td>`).join("");
      return `<tr><th scope="row">${gName}</th>${cells}</tr>`;
    }).join("");
    tableWrap.innerHTML = `<table class="missingness-table youth-cluster-table"><thead><tr><th scope="col">Opportunity group</th>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
  }

  if (cap) {
    const fetchNote = usedFallback
      ? " <strong>Note:</strong> Bundled averages (live CSV did not load — use a local server for <code>data/model2_cluster_profiles_mean.csv</code>)."
      : "";
    cap.innerHTML = `Use the <strong>table</strong> for real averages. The horizontal bars use the same 0–100 “within this row only” scores so you can see which group is highest on each measure without reading a radar.${fetchNote}`;
  }

  if (!canvas || typeof Chart === "undefined") {
    if (canvas && cap && typeof Chart === "undefined") {
      cap.insertAdjacentHTML("beforeend", "<p class=\"muted\" style=\"margin-top:.5rem\">Chart library did not load; the table above is complete.</p>");
    }
    return;
  }

  const ctx = canvas.getContext("2d");
  if (canvas._youthClusterChart) canvas._youthClusterChart.destroy();
  try {
    canvas._youthClusterChart = new Chart(ctx, {
      type: "bar",
      data: { labels: rowLabels, datasets: barDatasets },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#e5e7eb", boxWidth: 12, padding: 10, usePointStyle: true }
          },
          title: {
            display: true,
            text: "Relative position per row (0 = lowest group on that measure, 100 = highest)",
            color: "#e5e7eb",
            font: { size: 13, weight: "600" }
          },
          tooltip: {
            callbacks: {
              label(ctx) {
                const g = ctx.dataset.label;
                const feat = CLUSTER_PROFILE_FEATURES[ctx.dataIndex];
                const raw = Number(byGroup.get(g)?.[feat.key]);
                const scaled = typeof ctx.raw === "number" ? ctx.raw : 0;
                let s;
                if (feat.format === "money") s = `$${Math.round(raw).toLocaleString()}`;
                else s = Number.isFinite(raw) ? `${(raw * 100).toFixed(1)}%` : "—";
                return `${g}: ${s} (score ${Number(scaled).toFixed(0)})`;
              }
            }
          }
        },
        scales: {
          x: {
            min: 0,
            max: 100,
            grid: { color: "rgba(148, 163, 184, 0.12)" },
            ticks: { color: "#9ca3af" },
            title: {
              display: true,
              text: "0 = lowest of the four groups on that row, 100 = highest",
              color: "#94a3b8",
              font: { size: 11 }
            }
          },
          y: {
            ticks: { color: "#cbd5e1", font: { size: 12 } },
            grid: { display: false }
          }
        }
      }
    });
  } catch (e) {
    console.error("youth cluster profile chart", e);
    if (cap) {
      const p = document.createElement("p");
      p.className = "muted";
      p.style.marginTop = ".5rem";
      p.textContent = "Could not draw comparison chart; see table above.";
      cap.appendChild(p);
    }
  }
}

function initEducationPage() {
  const tabs = document.querySelectorAll("[data-group]");
  const cards = document.getElementById("eduCards");
  if (!tabs.length || !cards) return;

  let activeGroup = "Very Disadvantaged";
  const chartSummary = document.getElementById("eduChartSummary");

  let chart;
  let compareChart;
  const renderCards = async () => {
    const rowsRaw = await loadCSVFirst(["data/youth_group_summary.csv", "youth_group_summary.csv"]);
    const rows = normalizeYouthSummaryRows(rowsRaw);
    const row = rows.find((r) => r.youth_group === activeGroup);
    const fallback = GROUP_DATA[activeGroup];
    const d = row || fallback;
    if (!d) {
      cards.innerHTML = `<div class="card"><p class="muted">Education data is currently unavailable.</p></div>`;
      return;
    }
    const avgCost = pickNumber(d.sc_cost_mean, fallback?.cost);
    const earn10 = pickNumber(d.sc_earn10_mean, fallback?.earn10);
    const pubNet = pickNumber(d.sc_np_pub_mean, fallback?.pub);
    const privNet = pickNumber(d.sc_np_priv_mean, fallback?.priv);
    const mobility = pickMobility(d.mob_up, fallback?.mobility);

    cards.innerHTML = `
      <div class="card">
        <h3>Average Education Cost</h3>
        <p>${money(avgCost)}</p>
        <details class="metric-help">
          <summary>How we know this</summary>
          <p>Source: youth_group_summary.csv field <code>sc_cost_mean</code>, grouped by opportunity tier. This is average total education cost for the selected group.</p>
        </details>
      </div>
      <div class="card">
        <h3>Average Earnings After 10 Years</h3>
        <p>${money(earn10)}</p>
        <details class="metric-help">
          <summary>How we know this</summary>
          <p>Source: youth_group_summary.csv field <code>sc_earn10_mean</code>. This shows average earnings at year 10 for the selected group.</p>
        </details>
      </div>
      <div class="card">
        <h3>Average Public Net Price</h3>
        <p>${money(pubNet)}</p>
        <details class="metric-help">
          <summary>How we know this</summary>
          <p>Net price means average out-of-pocket cost after aid. This uses group-level platform values (<code>GROUP_DATA.pub</code>) because the summary CSV does not include <code>sc_np_pub_mean</code>.</p>
        </details>
      </div>
      <div class="card">
        <h3>Average Private Net Price</h3>
        <p>${money(privNet)}</p>
        <details class="metric-help">
          <summary>How we know this</summary>
          <p>Net price means average out-of-pocket cost after aid. This uses group-level platform values (<code>GROUP_DATA.priv</code>) because the summary CSV does not include <code>sc_np_priv_mean</code>.</p>
        </details>
      </div>
      <div class="card">
        <h3>Mobility Score</h3>
        <p>${mobility.toFixed(2)}</p>
        <details class="metric-help">
          <summary>How we know this</summary>
          <p>Source: youth_group_summary.csv field <code>mob_up</code>. Higher values indicate stronger upward mobility outcomes for youth in this group.</p>
        </details>
      </div>
    `;

    const groupsInOrder = ["Very Disadvantaged", "Disadvantaged", "Moderate Opportunity", "Higher Opportunity"];
    const chartRows = groupsInOrder.map((group) => {
      const r = rows.find((x) => x.youth_group === group) || {};
      const g = GROUP_DATA[group] || {};
      return {
        youth_group: group,
        sc_np_pub_mean: pickNumber(r.sc_np_pub_mean, g.pub),
        sc_np_priv_mean: pickNumber(r.sc_np_priv_mean, g.priv),
        sc_cost_mean: pickNumber(r.sc_cost_mean, g.cost),
        sc_earn10_mean: pickNumber(r.sc_earn10_mean, g.earn10)
      };
    });
    const activeIdx = Math.max(0, groupsInOrder.indexOf(activeGroup));
    const netPriceBarColors = chartRows.map((_, idx) => (idx === activeIdx ? "#dbeafe" : "#f8fafc"));
    const earningsBarColors = chartRows.map((_, idx) => (idx === activeIdx ? "#8b5cf6" : "#f1f5f9"));
    const ctx = document.getElementById("roiChart");
    if (ctx && window.Chart) {
      if (chart) chart.destroy();
      chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartRows.map((r) => r.youth_group),
          datasets: [
            {
              label: "Public Net Price",
              data: chartRows.map((r) => Number(r.sc_np_pub_mean || 0)),
              backgroundColor: netPriceBarColors,
              borderColor: "#e2e8f0",
              borderWidth: 1,
              borderRadius: 6
            },
            {
              label: "10-Year Earnings",
              data: chartRows.map((r) => Number(r.sc_earn10_mean || 0)),
              backgroundColor: earningsBarColors,
              borderColor: "#e2e8f0",
              borderWidth: 1,
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { labels: { color: "#f9fafb" } },
            title: {
              display: true,
              text: "Public Net Price vs 10-Year Earnings by Opportunity Group",
              color: "#f9fafb",
              font: { size: 18, weight: "700" },
              padding: { bottom: 12 }
            }
          },
          scales: {
            y: {
              ticks: { color: "#9ca3af" },
              title: { display: true, text: "US Dollars (Average)", color: "#cbd5e1", font: { size: 13, weight: "600" } }
            },
            x: {
              ticks: { color: "#9ca3af" },
              title: { display: true, text: "Opportunity Group", color: "#cbd5e1", font: { size: 13, weight: "600" } }
            }
          }
        }
      });
    }

    const ctx2 = document.getElementById("eduCompareChart");
    if (ctx2 && window.Chart) {
      if (compareChart) compareChart.destroy();
      compareChart = new Chart(ctx2.getContext("2d"), {
        type: "bar",
        data: {
          labels: chartRows.map((r) => r.youth_group),
          datasets: [
            {
              label: "Avg public net price",
              data: chartRows.map((r) => Number(r.sc_np_pub_mean || 0)),
              backgroundColor: "rgba(59, 130, 246, 0.75)",
              borderRadius: 4
            },
            {
              label: "Avg private net price",
              data: chartRows.map((r) => Number(r.sc_np_priv_mean || 0)),
              backgroundColor: "rgba(236, 72, 153, 0.72)",
              borderRadius: 4
            },
            {
              label: "Avg 10-year earnings",
              data: chartRows.map((r) => Number(r.sc_earn10_mean || 0)),
              backgroundColor: "rgba(16, 185, 129, 0.75)",
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { labels: { color: "#f9fafb" } },
            title: {
              display: true,
              text: "Public vs private net price and earnings — all opportunity groups",
              color: "#f9fafb",
              font: { size: 16, weight: "700" }
            },
            tooltip: {
              callbacks: {
                label(c) {
                  return `${c.dataset.label}: ${money(c.parsed.y)}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: "#9ca3af", callback: (v) => `$${Math.round(v / 1000)}k` },
              title: { display: true, text: "Dollars (averages)", color: "#cbd5e1" }
            },
            x: {
              ticks: { color: "#9ca3af", maxRotation: 22 },
              title: { display: true, text: "Opportunity group", color: "#cbd5e1" }
            }
          }
        }
      });
    }

    if (chartSummary) {
      const selected = chartRows[activeIdx] || {};
      const summaryPubNet = pickNumber(selected.sc_np_pub_mean, fallback?.pub);
      const summaryEarn10 = pickNumber(selected.sc_earn10_mean, fallback?.earn10);
      const summaryPriv = pickNumber(selected.sc_np_priv_mean, fallback?.priv);
      const ratio = summaryPubNet > 0 ? (summaryEarn10 / summaryPubNet) : 0;
      const pubRoiLabel = ratio >= 1 ? `${ratio.toFixed(1)}× (earnings vs public net price)` : "—";
      chartSummary.textContent = `ROI (Return on Investment) here means “how much might typical long-run earnings compare to what school costs out of pocket?” For ${activeGroup}, average public net price is ${money(summaryPubNet)}, private net price about ${money(summaryPriv)}, and average 10-year earnings about ${money(summaryEarn10)} — roughly ${pubRoiLabel}. Bars for the selected group are highlighted.`;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      tab.classList.add("active");
      activeGroup = tab.dataset.group;
      renderCards();
    });
  });

  renderCards();
}

async function initCareersPage() {
  const jobSearch = document.getElementById("jobSearch");
  if (!jobSearch) return;
  const jobList = document.getElementById("jobList");
  const riskResults = document.getElementById("riskResults");
  const form = document.getElementById("pathForm");
  const zipInput = document.getElementById("zipInput");
  const recCards = document.getElementById("recCards");
  const roiContext = document.getElementById("roiContext");
  const pathFeedback = document.getElementById("pathFeedback");
  const pathRecMeta = document.getElementById("pathRecMeta");
  const mapStateEl = document.getElementById("mapStateContext");
  const jobsStatus = document.getElementById("jobsStatus");
  const commonJobsList = document.getElementById("commonJobsList");
  const qsCareers = new URLSearchParams(window.location.search);
  const urlStateAbbr = (qsCareers.get("state") || "").toUpperCase();

  const { map: recommendationsByGroup, sourceNote: recSourceNoteInitial } = await loadCareerRecommendationsByGroup();
  let recSourceNote = recSourceNoteInitial;

  if (mapStateEl) {
    mapStateEl.classList.add("hide");
    mapStateEl.innerHTML = "";
  }

  const youthSummaryRows = normalizeYouthSummaryRows(await loadCSVFirst(["data/youth_group_summary.csv", "youth_group_summary.csv"]));
  let jobsRaw = [];
  let jobsLoadedFrom = "";
  jobsRaw = await loadCSVFirst(["data/job_df_full_occupations.csv", "job_df_full_occupations.csv"]);
  if (jobsRaw.length) {
    jobsLoadedFrom = "full";
  } else {
    jobsRaw = await loadCSVFirst(["data/occupation_risk_round2.csv", "occupation_risk_round2.csv"]);
    if (jobsRaw.length) jobsLoadedFrom = "round2";
  }
  if (!jobsRaw.length) {
    jobsRaw = await loadCSVFirst(["data/jobs.csv", "jobs.csv"]);
    if (jobsRaw.length) jobsLoadedFrom = "basic";
  }
  if (!jobsRaw.length) {
    jobsRaw = DEFAULT_JOBS;
    jobsLoadedFrom = "fallback";
  }
  const jobs = (jobsRaw.length ? jobsRaw : DEFAULT_JOBS).map((j) => ({
    onetsoc_code: String(j.onetsoc_code || j.onetsoc || "").trim(),
    title: j.title || j.occupation || j.job_title || "",
    risk_label: j.risk_label || "Low Risk",
    risk_score: j.risk_score || "0",
    job_zone: j.job_zone || "",
    routine_cognitive_tasks: j.routine_cognitive_tasks,
    manual_tasks: j.manual_tasks,
    social_tasks: j.social_tasks,
    nonroutine_cognitive_tasks: j.nonroutine_cognitive_tasks
  })).filter((j) => j.title);

  if (needsSyntheticRecommendations(recommendationsByGroup, recSourceNote) && jobs.length >= 10) {
    REC_GROUP_KEYS.forEach((k) => {
      recommendationsByGroup[k] = syntheticRecsFromJobs(jobs, k);
    });
    recSourceNote = "ranked from loaded occupations (ZIP shifts which five appear)";
  }

  if (jobsStatus) {
    if (jobsLoadedFrom === "full" || jobsLoadedFrom === "round2") {
      jobsStatus.textContent = `Loaded ${jobs.length.toLocaleString()} occupations.`;
    } else if (jobsLoadedFrom === "fallback") {
      jobsStatus.textContent = "Loaded limited fallback job list. If you opened via file://, run a local server to load all 1,000+ occupations.";
    } else {
      jobsStatus.textContent = `Loaded ${jobs.length.toLocaleString()} occupations from backup file.`;
    }
  }

  const commonTitles = [
    "Registered Nurses", "Web Developers", "Cybersecurity Analysts",
    "Software Developers", "Health Information Technologists and Medical Registrars",
    "Administrative Assistants", "Customer Service Representatives",
    "General and Operations Managers", "Marketing Managers", "Human Resources Managers",
    "Data Entry Clerks", "Cashiers"
  ];
  if (commonJobsList) {
    commonJobsList.innerHTML = commonTitles.map((t) => `<button type="button" class="pill">${t}</button>`).join("");
    [...commonJobsList.querySelectorAll(".pill")].forEach((btn) => {
      btn.addEventListener("click", () => {
        jobSearch.value = btn.textContent || "";
        renderJobList(jobSearch.value);
      });
    });
  }

  const interestButtons = [...document.querySelectorAll(".interest-pill")];
  const selectedInterests = new Set();
  let lastPathContext = { group: "", zip: "", state: urlStateAbbr };
  interestButtons.forEach((btn) => btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const v = btn.dataset.interest;
    if (selectedInterests.has(v)) selectedInterests.delete(v); else selectedInterests.add(v);
    if (lastPathContext.group && lastPathContext.zip) {
      renderRecs(lastPathContext.group, lastPathContext.zip, lastPathContext.state);
    }
  }));

  const inferInterests = (title) => {
    const t = String(title).toLowerCase();
    const tags = [];
    if (t.includes("nurs") || t.includes("health") || t.includes("medical") || t.includes("patient rep")
      || t.includes("hearing aid") || t.includes("dietetic") || t.includes("psychiatric") || t.includes("therap")) {
      tags.push("Healthcare");
    }
    if (t.includes("web") || t.includes("computer") || t.includes("geographic information")
      || t.includes("technolog") || t.includes("software") || t.includes("hydroelectric")) {
      tags.push("Technology");
    }
    if (t.includes("landscap") || t.includes("helpers, labor") || t.includes("material-mov")) {
      tags.push("Trades");
    }
    if (t.includes("tutor") || t.includes("teacher") || t.includes("enrichment") || t.includes("nann")
      || t.includes("speech-language") || t.includes("choreograph")) {
      tags.push("Education");
    }
    if (t.includes("supervisor") || t.includes("manager") || t.includes("operator")) {
      tags.push("Business");
    }
    if (t.includes("choreograph") || t.includes("creative")) {
      tags.push("Creative");
    }
    if (t.includes("science") || t.includes("lab ") || t.includes("research")) {
      tags.push("Science");
    }
    if (t.includes("social") || t.includes("community")) {
      tags.push("Social Services");
    }
    if (!tags.length) tags.push("Business");
    return tags;
  };

  const renderJobList = (query) => {
    const q = query.trim().toLowerCase();
    if (!jobs.length) {
      jobList.innerHTML = `<p class="muted">Job data failed to load. Please refresh the page.</p>`;
      riskResults.innerHTML = "";
      return;
    }
    if (!q) {
      const starters = jobs.slice(0, 8);
      jobList.innerHTML = starters.map((j) => `<button class="pill">${j.title}</button>`).join("");
      riskResults.innerHTML = starters.slice(0, 3).map((j) => formatCareerRiskResultCard(j)).join("");
      return;
    }
    const filtered = jobs.filter((j) => {
      const title = String(j.title).toLowerCase();
      if (title.includes(q)) return true;
      const tokens = q.split(/\s+/).filter(Boolean);
      return tokens.every((t) => title.includes(t));
    });
    if (!filtered.length && q) {
      const low = jobs.filter((j) => String(j.risk_label).includes("Low")).slice(0, 3);
      jobList.innerHTML = `<p class="muted">No exact match — here are similar careers:</p>`;
      riskResults.innerHTML = low.map((j) => formatCareerRiskResultCard(j)).join("");
      return;
    }
    jobList.innerHTML = filtered.slice(0, 10).map((j) => `<button class="pill">${j.title}</button>`).join("");
    riskResults.innerHTML = filtered.slice(0, 5).map((j) => formatCareerRiskResultCard(j)).join("");
    [...jobList.querySelectorAll(".pill")].forEach((pill, idx) => pill.addEventListener("click", () => {
      const j = filtered[idx];
      riskResults.innerHTML = formatCareerRiskResultCard(j);
    }));
  };
  renderJobList("");
  jobSearch.addEventListener("input", () => renderJobList(jobSearch.value));

  const renderRecs = (group, zipForWindow = "", stateForWindow = "") => {
    const base = recommendationsByGroup[group] || [];
    const list = selectedInterests.size
      ? base.filter((r) => inferInterests(r.title).some((i) => selectedInterests.has(i)))
      : base;
    const filteredEmpty = selectedInterests.size > 0 && base.length > 0 && !list.length;
    const pool = filteredEmpty ? [] : (list.length ? list : base);
    const sorted = [...pool].sort((a, b) => (
      Number(b.match_score) - Number(a.match_score) || String(a.title).localeCompare(String(b.title))
    ));
    let start = 0;
    if (sorted.length > 5 && (zipForWindow || stateForWindow)) {
      let h = 0;
      const seed = `${zipForWindow}|${stateForWindow}`;
      for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
      start = h % (sorted.length - 5);
    }
    const chosen = pool.length ? sorted.slice(start, start + 5) : [];
    recCards.className = "section grid-3 fade-in";
    recCards.innerHTML = filteredEmpty
      ? `<div class="card" style="grid-column:1/-1"><p><strong>No matches for selected interests.</strong></p><p class="muted">Clear some interest pills or try a different ZIP, then click <strong>Find My Path</strong> again.</p></div>`
      : chosen.map((r) => {
        const pctScore = Math.round(Number(r.match_score) * 100);
        const profile = findJobProfileForRec(jobs, r);
        const jobForExplain = profile
          ? {
            ...profile,
            risk_label: r.risk_label || profile.risk_label,
            risk_score: r.risk_score !== undefined && r.risk_score !== "" ? r.risk_score : profile.risk_score,
            job_zone: r.job_zone !== undefined && r.job_zone !== "" ? r.job_zone : profile.job_zone
          }
          : {
            title: r.title,
            risk_label: r.risk_label,
            risk_score: r.risk_score,
            job_zone: r.job_zone
          };
        return `
        <div class="card">
          <h3>${escapeHtmlText(r.title)}</h3>
          <p class="muted"><strong>Your opportunity group:</strong> ${escapeHtmlText(group)}</p>
          <p><span class="badge-risk ${riskClass(r.risk_label)}">${escapeHtmlText(String(r.risk_label || ""))}</span></p>
          <p class="muted"><strong>Typical training:</strong> ${escapeHtmlText(jobZoneTrainingPhrase(r.job_zone))}</p>
          <p class="muted">Match score (Model 2): ${pctScore}%</p>
          <div class="progress"><span style="width:${pctScore}%"></span></div>
          ${recRecommendationWhyHtml(group, r)}
          ${riskTransparencyHtml(jobForExplain)}
          ${recNextStepLinksHtml()}
        </div>
      `;
      }).join("");

    if (pathRecMeta) {
      pathRecMeta.classList.remove("hide");
      const fileHint = recSourceNote.includes("bundled")
        ? "<code>career_recommendations_by_group.csv</code>"
        : `<code>career_recommendations_${String(group).replace(/\s+/g, "_")}.csv</code>`;
      pathRecMeta.innerHTML = filteredEmpty
        ? `<span class="muted">Data source: ${recSourceNote}.</span>`
        : `These picks come from your group’s ranked list (<strong>${base.length}</strong> roles in the dataset). Source: ${recSourceNote}. File: ${fileHint}. The job search above uses <strong>${jobs.length.toLocaleString()}</strong> risk-scored occupations.`;
    }

    const row = youthSummaryRows.find((x) => x.youth_group === group);
    const d = row || GROUP_DATA[group] || GROUP_DATA["Moderate Opportunity"];
    const grpLabel = escapeHtmlText(group);
    roiContext.innerHTML = `
      <div class="card fade-in">
        <h3>Your neighborhood context: ${grpLabel}</h3>
        <p class="muted">Recommendations above are ranked for this opportunity group (tract-scale context — not a personal label).</p>
        <p>Average education cost (group): ${money(d.sc_cost_mean || d.cost)}</p>
        <p>Average earnings after 10 years: ${money(d.sc_earn10_mean || d.earn10)}</p>
        <p>Public net price: ${money(d.sc_np_pub_mean || d.pub)} | Private net price: ${money(d.sc_np_priv_mean || d.priv)}</p>
        <p class="muted" style="margin-top:.65rem;"><strong>Next:</strong> <a href="${appPageHref("education.html")}">Education Explorer</a> for ROI visuals · <a href="${appPageHref("resources.html")}">Resources</a> for aid and programs.</p>
      </div>
    `;
  };

  const submitPath = (e) => {
    e.preventDefault();
    const raw = zipInput.value.trim();
    const digits = raw.replace(/\D/g, "");
    if (digits.length < 5) {
      if (pathFeedback) {
        pathFeedback.textContent = "Please enter a 5-digit US ZIP code (numbers only, e.g. 60619).";
        pathFeedback.classList.remove("hide");
      }
      zipInput.focus();
      return;
    }
    const zip = digits.slice(0, 5);
    zipInput.value = zip;
    const chosen = zipToGroup(zip);
    lastPathContext = { group: chosen, zip, state: urlStateAbbr };
    renderRecs(chosen, zip, urlStateAbbr);
    if (pathFeedback) {
      pathFeedback.innerHTML = `<strong>Paths updated.</strong> ZIP <strong>${zip}</strong> → opportunity group <strong>${chosen}</strong> (ZIP-prefix rule). Scroll down to see recommendations.`;
      pathFeedback.classList.remove("hide");
    }
    requestAnimationFrame(() => {
      recCards?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  if (form) {
    form.addEventListener("submit", submitPath);
  }

  if (recCards) {
    recCards.innerHTML = `<div class="card" style="grid-column:1/-1"><p class="muted">Enter a ZIP code and click <strong>Find My Path</strong> to load recommendations for that opportunity group.</p></div>`;
  }
  if (pathRecMeta) pathRecMeta.classList.add("hide");
}

const TIER_REC_FILES = {
  "Very Disadvantaged": "career_recommendations_Very_Disadvantaged.csv",
  Disadvantaged: "career_recommendations_Disadvantaged.csv",
  "Moderate Opportunity": "career_recommendations_Moderate_Opportunity.csv",
  "Higher Opportunity": "career_recommendations_Higher_Opportunity.csv"
};

const TIER_PROFILE_FEATURES = [
  { key: "pov20", label: "Poverty (tract avg)", format: "pct" },
  { key: "mob_up", label: "Upward mobility", format: "decimal" },
  { key: "inc20", label: "Median income (tract)", format: "money" },
  { key: "opp_gap", label: "Opportunity gap", format: "decimal" }
];

function buildTierProfileBarsHTML(groupName, profByGroup, allGroups) {
  const row = profByGroup.get(groupName);
  if (!row) return "";
  const rowsHtml = TIER_PROFILE_FEATURES.map((feat) => {
    const vals = allGroups.map((g) => Number(profByGroup.get(g)?.[feat.key])).filter((x) => Number.isFinite(x));
    if (!vals.length) return "";
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const span = max - min || 1;
    const v = Number(row[feat.key]);
    if (!Number.isFinite(v)) return "";
    const w = ((v - min) / span) * 100;
    let display;
    if (feat.format === "money") display = money(v);
    else if (feat.format === "pct") display = `${(v * 100).toFixed(1)}%`;
    else display = v.toFixed(3);
    return `<div class="tier-prof-row"><span>${feat.label}</span><div class="tier-prof-track"><span style="width:${w.toFixed(1)}%"></span></div><span class="tier-prof-val">${display}</span></div>`;
  }).filter(Boolean).join("");
  if (!rowsHtml) return "";
  return `<div class="tier-prof-block"><h4>Tract features (cluster means) — where this tier sits vs the other three</h4><p class="muted" style="margin:0 0 .5rem;font-size:.82rem;">Bars show relative position only (lowest group → 0%, highest → 100%) for each row. Source: <code>model2_cluster_profiles_mean.csv</code>.</p>${rowsHtml}</div>`;
}

async function loadTierRecommendationRows(groupName) {
  const file = TIER_REC_FILES[groupName];
  let rows = await loadCSVFirst([`data/${file}`, file]);
  if (!rows.length) {
    const raw = await loadCSVFirst(careerRecByGroupCsvPaths());
    rows = raw.filter((r) => String(r.youth_group || "").trim() === groupName);
  }
  return rows
    .map((r, i) => ({
      rank: Number(r.rank) || i + 1,
      title: String(r.title || r.occupation || "").trim(),
      onetsoc_code: String(r.onetsoc_code || "").trim(),
      job_zone: r.job_zone ?? "",
      risk_score: r.risk_score ?? "",
      risk_label: String(r.risk_label || "").trim(),
      match_score: Number(r.match_score) || 0
    }))
    .filter((r) => r.title);
}

function tierOpportunityNarrative(groupName, oppRow, recs) {
  const pr = Number(oppRow?.poverty_rate);
  const mob = Number(oppRow?.mobility_score);
  const inc = Number(oppRow?.median_income);
  const n = recs.length;
  const lowN = recs.filter((r) => riskLabelBucketForTier(r.risk_label) === "low").length;
  const zones = recs.map((r) => Number(r.job_zone)).filter(Number.isFinite);
  const avgZ = zones.length ? zones.reduce((a, b) => a + b, 0) / zones.length : 0;
  const pStr = Number.isFinite(pr) ? `${(pr * 100).toFixed(0)}%` : "—";
  const mobStr = Number.isFinite(mob) ? mob.toFixed(2) : "—";
  const incStr = Number.isFinite(inc) ? money(inc) : "—";
  return `<p class="muted" style="margin:0 0 .65rem;"><strong>Neighborhood context (${groupName}):</strong> Typical tracts in this cluster average about <strong>${pStr}</strong> poverty, upward mobility index <strong>${mobStr}</strong>, and median income near <strong>${incStr}</strong> in our platform summary (<code>opportunity_groups.csv</code>). That describes <em>place</em>, not a person and not a job title.</p><p class="muted" style="margin:0;"><strong>Why these occupations appear here:</strong> Model 2 ranks roles for each tier using accessibility, Model 1 risk, and match weights. In this export, <strong>${lowN}</strong> of <strong>${n}</strong> listed picks are Low automation-risk (Model 1); average job zone ≈ <strong>${avgZ.toFixed(1)}</strong>. Compare tiers below—ordering and mix change even when many jobs repeat across lists.</p>`;
}

async function initOpportunityTiersPage() {
  const mount = document.getElementById("opportunityTiersMount");
  if (!mount) return;

  const groups = [...YOUTH_GROUP_ORDER];
  const oppRows = await loadCSVFirst(["data/opportunity_groups.csv", "opportunity_groups.csv"]);
  const oppByGroup = new Map();
  oppRows.forEach((r) => {
    const g = String(r.group || "").trim();
    if (g) oppByGroup.set(g, r);
  });

  let profRows = await loadCSVFirst(clusterProfileCsvPaths());
  if (!profRows.length) profRows = CLUSTER_PROFILE_FALLBACK;
  const profByGroup = new Map();
  profRows.forEach((r) => {
    const g = String(r.youth_group || "").trim();
    if (g) profByGroup.set(g, r);
  });

  const byGroupRecs = {};
  await Promise.all(groups.map(async (g) => {
    byGroupRecs[g] = await loadTierRecommendationRows(g);
  }));

  const jumps = groups.map((g) => {
    const slug = g.toLowerCase().replace(/\s+/g, "-");
    return `<a href="#tier-${slug}">${g}</a>`;
  }).join("");

  const statusEl = document.getElementById("opportunityTiersStatus");
  if (statusEl) {
    const totalRec = groups.reduce((s, g) => s + (byGroupRecs[g]?.length || 0), 0);
    statusEl.textContent = totalRec
      ? `Loaded ${totalRec} recommendation rows across ${groups.length} tiers (serve over HTTP if counts are zero).`
      : "No recommendation CSVs loaded — use a local server from the repo root.";
  }

  const sections = groups.map((g, gi) => {
    const slug = g.toLowerCase().replace(/\s+/g, "-");
    const opp = oppByGroup.get(g) || {};
    const recs = byGroupRecs[g] || [];
    const earn = pickNumber(opp.sc_earn10_mean, 0);
    const cost = pickNumber(opp.sc_cost_mean, 0);
    const pub = pickNumber(opp.sc_np_pub_mean, 0);
    const profHtml = buildTierProfileBarsHTML(g, profByGroup, groups);
    const nar = tierOpportunityNarrative(g, opp, recs);

    const tableRows = recs.map((r) => {
      const cls = riskClass(r.risk_label);
      const lab = cls
        ? `<span class="badge-risk ${cls}">${escapeHtmlText(r.risk_label)}</span>`
        : escapeHtmlText(r.risk_label);
      return `<tr>
        <td>${r.rank}</td>
        <td>${escapeHtmlText(r.title)}</td>
        <td><code>${escapeHtmlText(r.onetsoc_code) || "—"}</code></td>
        <td>${escapeHtmlText(String(r.job_zone))}</td>
        <td>${escapeHtmlText(String(r.risk_score))}</td>
        <td>${lab}</td>
        <td>${Number.isFinite(r.match_score) ? r.match_score.toFixed(4) : "—"}</td>
      </tr>`;
    }).join("");

    return `
    <section class="section card tier-section" id="tier-${slug}">
      <h2 class="chart-title">${escapeHtmlText(g)}</h2>
      ${nar}
      <div class="tier-context-grid">
        <div><strong>Poverty (tract)</strong>${Number.isFinite(Number(opp.poverty_rate)) ? `${(Number(opp.poverty_rate) * 100).toFixed(0)}% avg` : "—"}</div>
        <div><strong>Mobility index</strong>${Number.isFinite(Number(opp.mobility_score)) ? Number(opp.mobility_score).toFixed(2) : "—"}</div>
        <div><strong>Median income</strong>${Number.isFinite(Number(opp.median_income)) ? money(opp.median_income) : "—"}</div>
        <div><strong>Avg education cost</strong>${cost ? money(cost) : "—"}</div>
        <div><strong>Avg 10-yr earnings</strong>${earn ? money(earn) : "—"}</div>
        <div><strong>Public net price</strong>${pub ? money(pub) : "—"}</div>
      </div>
      ${profHtml}
      <div class="tier-charts-grid">
        <div class="tier-chart-panel">
          <h4>Risk label mix in this tier’s picks</h4>
          <canvas id="tierRiskLabelChart_${gi}" aria-label="Bar chart of low moderate high counts"></canvas>
        </div>
        <div class="tier-chart-panel">
          <h4>Model 1 risk score (0–4) in this tier’s picks</h4>
          <canvas id="tierRiskScoreChart_${gi}" aria-label="Bar chart of risk score counts"></canvas>
        </div>
      </div>
      <h3 style="margin:1rem 0 .5rem;font-size:1rem;">Occupations in this tier’s ranked list</h3>
      <p class="muted" style="margin:0 0 .5rem;font-size:.88rem;">These are the jobs Model 2 returns for this neighborhood context in the bundled CSVs—not “all jobs that belong to this tier.”</p>
      <div class="tier-occ-table-wrap">
        <table class="tier-occ-table">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Title</th>
              <th scope="col">O*NET</th>
              <th scope="col">Zone</th>
              <th scope="col">Risk score</th>
              <th scope="col">Risk label</th>
              <th scope="col">Match</th>
            </tr>
          </thead>
          <tbody>${tableRows || `<tr><td colspan="7" class="muted">No rows loaded.</td></tr>`}</tbody>
        </table>
      </div>
    </section>`;
  }).join("");

  mount.innerHTML = `<nav class="tier-jump" aria-label="Jump to tier">${jumps}</nav>${sections}`;

  if (typeof Chart === "undefined") return;

  groups.forEach((g, gi) => {
    const recs = byGroupRecs[g] || [];
    let low = 0;
    let mod = 0;
    let hi = 0;
    recs.forEach((r) => {
      const b = riskLabelBucketForTier(r.risk_label);
      if (b === "low") low += 1;
      else if (b === "moderate") mod += 1;
      else if (b === "high") hi += 1;
    });
    const c0 = document.getElementById(`tierRiskLabelChart_${gi}`);
    if (c0 && recs.length) {
      c0._tierCh?.destroy?.();
      c0._tierCh = new Chart(c0.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Low", "Moderate", "High"],
          datasets: [{
            label: "Picks in tier",
            data: [low, mod, hi],
            backgroundColor: [
              "rgba(16, 185, 129, 0.75)",
              "rgba(245, 158, 11, 0.78)",
              "rgba(239, 68, 68, 0.78)"
            ],
            borderColor: [
              "rgba(16, 185, 129, 1)",
              "rgba(245, 158, 11, 1)",
              "rgba(239, 68, 68, 1)"
            ],
            borderWidth: 1,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label(c) {
                  return `${c.parsed.y} occupation(s)`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1, color: "#9ca3af" },
              grid: { color: "rgba(148, 163, 184, 0.15)" }
            },
            x: {
              ticks: { color: "#9ca3af" },
              grid: { display: false }
            }
          }
        }
      });
    }

    const scoreCounts = [0, 0, 0, 0, 0];
    recs.forEach((r) => {
      const s = Number(r.risk_score);
      if (Number.isFinite(s) && s >= 0 && s <= 4) scoreCounts[s] += 1;
    });
    const c1 = document.getElementById(`tierRiskScoreChart_${gi}`);
    if (c1 && recs.length) {
      c1._tierCh2?.destroy?.();
      c1._tierCh2 = new Chart(c1.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["0", "1", "2", "3", "4"],
          datasets: [{
            label: "Count",
            data: scoreCounts,
            backgroundColor: "rgba(6, 182, 212, 0.65)",
            borderColor: "rgba(6, 182, 212, 1)",
            borderWidth: 1,
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label(c) {
                  return `${c.parsed.y} pick(s) at score ${c.label}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1, color: "#9ca3af" },
              grid: { color: "rgba(148, 163, 184, 0.15)" }
            },
            x: {
              title: {
                display: true,
                text: "Model 1 risk score",
                color: "#94a3b8",
                font: { size: 11 }
              },
              ticks: { color: "#9ca3af" },
              grid: { display: false }
            }
          }
        }
      });
    }
  });
}

async function initAllOccupationsDirectoryPage() {
  const mount = document.getElementById("allOccupationsMount");
  const statusEl = document.getElementById("allOccStatus");
  if (!mount) return;

  const searchEl = document.getElementById("allOccSearch");
  const riskEl = document.getElementById("allOccRiskFilter");
  const tbody = document.getElementById("allOccTbody");

  const rowsRaw = await loadCSVFirst([
    "data/job_df_full_occupations.csv",
    "job_df_full_occupations.csv",
    "data/occupation_risk_round2.csv",
    "occupation_risk_round2.csv",
    "data/jobs.csv",
    "jobs.csv"
  ]);

  const normalized = rowsRaw
    .map((r) => ({
      code: String(r.onetsoc_code || "").trim(),
      title: String(r.title || r.occupation || r.job_title || "").trim(),
      zone: r.job_zone ?? "",
      score: r.risk_score ?? "",
      label: String(r.risk_label || "").trim() || "—"
    }))
    .filter((r) => r.title);

  if (statusEl) {
    if (!normalized.length) {
      statusEl.textContent = "Could not load occupation list. Serve the site over HTTP (e.g. python3 -m http.server) so data/job_df_full_occupations.csv can load.";
      if (tbody) tbody.innerHTML = "";
      return;
    }
    statusEl.textContent = `Showing ${normalized.length.toLocaleString()} occupations (Model 1 risk labels). Search and filter below.`;
  }

  function riskMatches(label, filterVal) {
    if (!filterVal) return true;
    const L = String(label).toLowerCase();
    if (filterVal === "low") return L.includes("low");
    if (filterVal === "moderate") return L.includes("moderate");
    if (filterVal === "high") return L.includes("high");
    return true;
  }

  function render() {
    const q = (searchEl?.value || "").trim().toLowerCase();
    const rf = riskEl?.value || "";
    let list = normalized.filter((r) => riskMatches(r.label, rf));
    if (q) {
      list = list.filter((r) => {
        const t = r.title.toLowerCase();
        const c = r.code.toLowerCase();
        return t.includes(q) || c.includes(q) || q.split(/\s+/).every((w) => t.includes(w));
      });
    }
    if (!tbody) return;
    tbody.innerHTML = list.map((r) => {
      const cls = riskClass(r.label);
      const labCell = cls
        ? `<span class="badge-risk ${cls}">${escapeHtmlText(r.label)}</span>`
        : escapeHtmlText(r.label);
      return `<tr>
        <td><code>${escapeHtmlText(r.code) || "—"}</code></td>
        <td>${escapeHtmlText(r.title)}</td>
        <td>${escapeHtmlText(String(r.zone))}</td>
        <td>${escapeHtmlText(String(r.score))}</td>
        <td>${labCell}</td>
      </tr>`;
    }).join("");
    const countFoot = document.getElementById("allOccCountFoot");
    if (countFoot) {
      countFoot.textContent = `${list.length.toLocaleString()} row${list.length === 1 ? "" : "s"} match your filters (of ${normalized.length.toLocaleString()} total).`;
    }
  }

  searchEl?.addEventListener("input", render);
  riskEl?.addEventListener("change", render);
  render();
}

async function init() {
  await hydrateDataFromCSVs();
  initNav();
  initReveal();
  initCounters();
  initChatbotPage();
  initHomeWidget();
  initMapPage();
  initEducationPage();
  await initCareersPage();
  await initAllOccupationsDirectoryPage();
  await initOpportunityTiersPage();
  try {
    await initDataStoryImputationChart();
    await initYouthClusterProfileChart();
    await initOccupationRiskDistChart();
    await initCareerMatchHeatmap();
  } catch (err) {
    console.error("Data Story charts:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});