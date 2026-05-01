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
    const suffix = el.dataset.suffix || "";
    const decimals = Number(el.dataset.decimals || 0);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 900, 1);
      const v = target * p;
      el.textContent = decimals ? `${v.toFixed(decimals)}${suffix}` : `${Math.round(v).toLocaleString()}${suffix}`;
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
  if (ok) {
    el.classList.add("ok");
    el.innerHTML = `<span class="status-dot"></span><span>AI connection ready</span>`;
  } else {
    el.classList.add("err");
    el.innerHTML = `<span class="status-dot"></span><span>AI connection issue (configure proxy/key)</span>`;
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
    details.innerHTML = `
      <h3>${st.name} Key Data</h3>
      <p>━━━━━━━━━━━━━━━━━━━━</p>
      <p>🏷️ Opportunity group: ${group}</p>
      <p>📍 Tract count: ${Number(st.tracts).toLocaleString()}</p>
      <p>📈 Avg mobility score: ${Number(st.mobility).toFixed(2)}</p>
      <p>💸 Avg poverty rate: ${pct(st.poverty)}</p>
      <p>💰 Avg income: ${money(st.income)}</p>
      <p>⚖️ Avg opportunity gap: ${Number(st.opp_gap).toFixed(2)}</p>
      <p>🔴 Disadvantaged share: ${pct(st.disadvantaged_share)}</p>
    `;
    document.querySelectorAll(".state-path").forEach((el) => el.classList.remove("active"));
    const path = document.querySelector(`[data-abbr="${abbr}"]`);
    if (path) path.classList.add("active");
  };

  const entries = Object.entries(STATE_DATA).map(([abbr, v]) => ({ abbr, ...v })).sort((a, b) => b.mobility - a.mobility);
  tableBody.innerHTML = entries.map((s) => `<tr><td>${s.name}</td><td>${s.abbr}</td><td>${Number(s.mobility).toFixed(2)}</td><td>${pct(s.poverty)}</td></tr>`).join("");
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
  const ordered = [...rows].sort((a, b) => Number(a.mob_up) - Number(b.mob_up));
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

function initEducationPage() {
  const tabs = document.querySelectorAll("[data-group]");
  const cards = document.getElementById("eduCards");
  if (!tabs.length || !cards) return;

  let activeGroup = "Very Disadvantaged";
  const chartSummary = document.getElementById("eduChartSummary");

  let chart;
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
    const mobility = pickNumber(d.mob_up, fallback?.mobility);

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

    if (chartSummary) {
      const selected = chartRows[activeIdx] || {};
      const summaryPubNet = pickNumber(selected.sc_np_pub_mean, fallback?.pub);
      const summaryEarn10 = pickNumber(selected.sc_earn10_mean, fallback?.earn10);
      const ratio = summaryPubNet > 0 ? (summaryEarn10 / summaryPubNet) : 0;
      chartSummary.textContent = `Why this highlight matters: ${activeGroup} is the group we are focusing on for decision-making. In this group, average public net price is ${money(summaryPubNet)} while average 10-year earnings are ${money(summaryEarn10)} (${ratio.toFixed(1)}x higher). The purple bar marks this priority group so the audience can quickly see the cost-to-outcome gap.`;
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
    title: j.title || j.occupation || j.job_title || "",
    risk_label: j.risk_label || "Low Risk",
    risk_score: j.risk_score || "0",
    job_zone: j.job_zone || ""
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
      riskResults.innerHTML = starters.slice(0, 3).map((j) => `<div class="card"><h3>${j.title}</h3><span class="badge-risk ${riskClass(j.risk_label)}">${j.risk_label}</span><p class="muted">Risk score: ${j.risk_score}</p></div>`).join("");
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
      riskResults.innerHTML = low.map((j) => `<div class="card"><h3>${j.title}</h3><span class="badge-risk ${riskClass(j.risk_label)}">${j.risk_label}</span><p class="muted">Risk score: ${j.risk_score}</p></div>`).join("");
      return;
    }
    jobList.innerHTML = filtered.slice(0, 10).map((j) => `<button class="pill">${j.title}</button>`).join("");
    riskResults.innerHTML = filtered.slice(0, 5).map((j) => `<div class="card"><h3>${j.title}</h3><span class="badge-risk ${riskClass(j.risk_label)}">${j.risk_label}</span><p class="muted">Risk score: ${j.risk_score}</p></div>`).join("");
    [...jobList.querySelectorAll(".pill")].forEach((pill, idx) => pill.addEventListener("click", () => {
      const j = filtered[idx];
      riskResults.innerHTML = `<div class="card"><h3>${j.title}</h3><span class="badge-risk ${riskClass(j.risk_label)}">${j.risk_label}</span><p class="muted">Risk score: ${j.risk_score}</p></div>`;
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
        return `
        <div class="card">
          <h3>${r.title}</h3>
          <p><span class="badge-risk ${riskClass(r.risk_label)}">${r.risk_label}</span></p>
          <p class="muted">Job Zone: ${r.job_zone}</p>
          <p class="muted">Match Score: ${pctScore}%</p>
          <div class="progress"><span style="width:${pctScore}%"></span></div>
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
    roiContext.innerHTML = `
      <div class="card fade-in">
        <h3>Education ROI (Return on Investment) Context</h3>
        <p>Average Education Cost: ${money(d.sc_cost_mean || d.cost)}</p>
        <p>Average Earnings After 10 Years: ${money(d.sc_earn10_mean || d.earn10)}</p>
        <p>Public Net Price: ${money(d.sc_np_pub_mean || d.pub)} | Private Net Price: ${money(d.sc_np_priv_mean || d.priv)}</p>
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
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
