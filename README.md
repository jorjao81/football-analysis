# Football Analysis

Data-driven football analyses, published as self-contained interactive HTML reports.

## 🏆 World Cup Confederation Funnel — 1982–2026

Every FIFA World Cup from the first 24-team edition (1982) through the live 2026
tournament, traced as a **confederation funnel**:

> FIFA members → direct berths → inter-confederation play-offs → qualified field → Round of 32 → … → champion

…colour-coded by the six confederations (UEFA, CONMEBOL, CONCACAF, CAF, AFC, OFC),
with every phase **aligned by the number of teams remaining** so 2026's Round of 32
lines up against the 32-team fields of 1998–2022.

- **Report:** [`world-cup-confederation-funnel.html`](world-cup-confederation-funnel.html) — open in any browser (fully self-contained; no network needed)
- **Data:** [`data/world-cup-funnel.json`](data/world-cup-funnel.json) — the machine-readable source of truth

Highlights: an interactive per-edition funnel (full-width bars, play-off wins shown as
a `+1`), a cross-year comparator (every edition side-by-side at one phase), the nation
list at every stage, and the inter-confederation play-off brackets (who had a chance, who won).

### Regenerate the report from the data

The HTML is **generated from the JSON** — edit the data, rebuild, and the report updates.

```bash
node scripts/validate.mjs   # check every structural invariant
node scripts/build.mjs      # regenerate world-cup-confederation-funnel.html
# or, with npm:
npm run validate
npm run build
```

`build` runs `validate` first and **aborts if any invariant fails**, so a broken edit
can never produce a bad report. No dependencies — plain Node ≥ 18.

### How it's wired

| Path | Role |
|------|------|
| `data/world-cup-funnel.json` | Canonical data (the only file you edit to change the numbers) |
| `src/template.html` | HTML/CSS/JS shell with `/*__DATA__*/` and `/*__CONF_COLORS__*/` injection markers |
| `scripts/validate.mjs` | Structural-invariant checks (also importable) |
| `scripts/build.mjs` | Validates, injects data + palette, writes the report |
| `world-cup-confederation-funnel.html` | Generated output (committed for convenience) |

### Data dictionary (`data/world-cup-funnel.json`)

Top level: `confederationOrder`, `tierDefinitions`, `confederations[]`, `editions[]`,
plus `methodology[]` and `sources[]`.

Each **edition** object:

| Field | Meaning |
|-------|---------|
| `year`, `host`, `hostConfed`, `fieldSize` | Basics (24 / 32 / 48 teams) |
| `champion`, `championConfed` | Winner (null for the in-progress 2026) |
| `live`, `pendingFrom`, `membersExact` | 2026 flags: live; tiers at/after `pendingFrom` are not-yet-played; membership is exact |
| `order[]` | Phase order (`members → direct → playoffs → qualified → …`; `playoffs` is inserted by the renderer) |
| `fifaMembers{confed:int}` | FIFA member associations by confederation (**approximate** for past editions) |
| `directBerths{confed:int}` | Guaranteed slots (incl. hosts and, through 2002, holders) |
| `playoffs[]` | Inter-confederation play-offs: `{ entrants:[{confed,team}], winner }` — one contested place each |
| `qualificationNotes{summary,tags}` | Human-readable qualification/play-off notes |
| `knockout{tier:{confed:[teams]}}` | Nations by confederation at each played tier (`qualified`, `r32`, `r16`, `qf`, `sf`, `final`, `winner`; `r12` for 1982) |

**The core identity (enforced by `validate.mjs`):**
`directBerths[c] + (1 if c won a play-off) == qualified count for c`, and the sums
reconcile to `fieldSize`. So a confederation's qualified total is always its guaranteed
berths plus any play-off `+1`. Knockout tiers halve cleanly (16 → 8 → 4 → 2 → 1) and
each round is a strict subset of the previous one.

### Caveats

- Teams are credited to the confederation they **qualified through** in that cycle —
  e.g. **Australia = OFC for 2006** (it qualified via Oceania before its 1 Jan 2006 move
  to the AFC), **AFC from 2010**.
- **FIFA-membership figures for past editions are approximate** reconstructions from
  confederation admission dates (≈150 members in 1982 → ~200 by 2000 → 211 since 2016).
  Only the 2026 breakdown (UEFA 55, CAF 54, AFC 46, CONCACAF 35, CONMEBOL 10, OFC 11 = 211)
  is exact. Everything from **direct berths downward is exact and cross-verified**.
- **2026 is in progress**: the Round of 32 is complete and the **Round-of-16 field is set** (16 teams; as of 4 July 2026). The Round-of-16 matches begin 4 July, so `qf` onward is still pending.

## 🇩🇪 Germany — World Cup Advanced Metrics (2018 / 2022 / 2026)

A separate match-by-match advanced-metrics report for Germany across three World Cups.

- [`germany-world-cup-advanced-metrics-2018-2022-2026.html`](germany-world-cup-advanced-metrics-2018-2022-2026.html) · [`.md`](germany-world-cup-advanced-metrics-2018-2022-2026.md)
- [`germany-wc-xg-summary.html`](germany-wc-xg-summary.html)

## Sources

Compiled from public references — primarily Wikipedia's per-edition tournament,
qualification and knockout-stage pages, the *List of FIFA member associations*, FIFA.com,
and (for the live 2026 results) ESPN / BBC Sport / CBS Sport, cross-checked. Full list in
`data/world-cup-funnel.json` → `sources`.

## License

Code is released under the MIT License (see `LICENSE`). Underlying facts are from public
sources and are not covered by copyright.
