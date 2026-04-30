# Workforce Development & Economic Mobility - Analysis Summary

## Round 1 Analysis (Baseline)

### Objective
Build an initial end-to-end prototype for:
- job automation risk prediction, and
- youth career matching by neighborhood context.

### Methods
- **Model 1 (Job Risk):** Supervised learning with `RandomForestClassifier` on a curated set of 25 occupations.
- **Model 2 (Career Matching):** KMeans clustering on tract-level context features (`pov20`, `mob_up`, `inc20`, `opp_gap`) plus weighted career scoring.

### Key Outputs
- Job-level automation risk probability and risk label (`High`, `Moderate`, `Low`) for 25 occupations.
- Four neighborhood opportunity groups:
  - Very Disadvantaged
  - Disadvantaged
  - Moderate Opportunity
  - Higher Opportunity
- Top career recommendations by youth group.

### Round 1 Known Limitations
- Small occupation sample (25 jobs) limits scalability.
- Missing mobility values in tract data required stronger imputation strategy.
- No holdout-state validation for geographic generalization.
- College affordability integration remained limited in this round.

---

## Round 2 Analysis (Production-Oriented)

### Objective
Scale and improve interpretability so the system is practical for real deployment and instructor evaluation.

### Methods
- **Tract Pipeline:**
  - Loaded `tract_master_enriched`.
  - Audited missingness.
  - Applied `KNNImputer` to fill missing mobility and related numeric fields.
  - Clustered neighborhoods with KMeans (`k=4`) using core opportunity features.
- **Occupation Pipeline:**
  - Loaded full O*NET occupation tables (`occupation_data`, `task_statements`, `job_zones`).
  - Engineered task composition features from task text.
  - Built full `job_df` by joining occupations + task features + job zones.
- **Model 1 (Updated):**
  - Replaced small supervised baseline with interpretable rule-based risk scoring.
  - Output: `risk_score` (0-4) and `risk_label`.
- **Model 2 (Updated):**
  - Career matching on Round 2 occupations using safety/access scoring with group-specific weights.

### Round 2 Key Improvements
- Full-scale occupation coverage (no longer limited to 25 jobs).
- Transparent risk logic (interpretable scoring instead of black-box-only output).
- Missing mobility addressed through explicit imputation workflow.
- Cleaner grouping of neighborhoods for context-aware recommendations.

### Round 2 Limitation
- Education outcome features are currently tract/state aggregated, not school-level recommendation outputs.

---

## Final Result

The final project is a **data-driven decision-support platform** that:
- integrates neighborhood, education, and career data,
- segments communities into opportunity profiles,
- scores careers using transparent logic,
- and translates raw public data into actionable guidance.

In short, the project moves from raw datasets to practical decision support for underserved students and families, while maintaining interpretability and clear documentation of current limitations.
