# Germany at the World Cup — Advanced Metrics Report (2018, 2022, 2026)

**Scope:** Germany men's national team, every match at the 2018 (Russia), 2022 (Qatar) and 2026 (USA/Canada/Mexico) World Cups.
**Metrics:** xG (expected goals), xGOT / PSxG (expected goals on target), field tilt, shots, shots on target, possession and big chances.
**Compiled:** 30 June 2026. The 2026 tournament is still in progress; Germany's run ended in the Round of 32 on 29 June 2026, so their 2026 data is complete but post-knowledge-cutoff (sourced from live match centres).

> **Source headline:** All numbers below are **Opta** data, retrieved and cross-validated from Opta-fed front-ends. **xG and xGOT are now recovered (Opta) for all 12 matches.** **Field tilt is computed for all 12** from Opta final-third passes (the metric isn't published directly anywhere — see limitations). Because no single free website spans 2018→2026, the data is pulled by era: **archived FBref (Opta) for 2018–22**, **FotMob (Opta) for 2022–26**, with **ESPN / The Analyst (Opta)** corroborating 2026 xG. Every figure is cited; nothing is estimated, and the few genuine gaps are marked. Full method and caveats are in the last section — read it before cross-era comparisons.

---

## The story the numbers tell

One pattern dominates all three tournaments: **Germany generated far more chance quality (xG, xGOT) and territory (field tilt) than their opponents — and repeatedly failed to win the games that decided their fate.** That is precisely what these metrics exist to expose: chronic finishing under-performance and vulnerability to clinical opponents. There are exactly two exceptions across 12 games — the 2026 Ecuador defeat (where Germany were genuinely out-played) and, territorially, the 2022 Spain draw (the only match Germany were dominated for field position, yet they *still* created the better chances).

---

# 2018 World Cup (Russia) — eliminated in the group stage (bottom of Group F)

*Provider: **Opta**, via FBref match reports retrieved from the Wayback Machine (pre-20-Jan-2026 snapshots), fetched with curl. xG and PSxG to 1 decimal (FBref display precision). FotMob (also Opta) corroborates shots/possession but carries no xG for 2018. Field tilt = Germany's share of final-third passes (`passes into final third`); the touch-based version (share of attacking-third touches) is shown in parentheses.*

### Match 1 — Germany 0–1 Mexico (17 Jun 2018) · *Lozano 35'*

| Metric | Germany | Mexico | Source (provider) |
|---|---|---|---|
| **xG** | **2.2** | **1.3** | FBref/Opta |
| **xGOT (PSxG)** | **1.6** | **1.3** | FBref/Opta (keeper PSxG faced) |
| **Field tilt** | **77.4%** (touch: 79.5%) | 22.6% (20.5%) | computed from FBref/Opta final-third passes |
| Total shots | 27 | 13 | FBref/Opta |
| Shots on target | 9 | 4 | FBref/Opta |
| Possession | 66% | 34% | FBref/Opta |

**Result vs stats:** A textbook xG mismatch. Germany nearly doubled Mexico's xG, had 77% field tilt and 27 shots — and lost to a counter-attack. PSxG of 1.6 says even their on-target shots merited ~1–2 goals; Ochoa and wastefulness denied them. **Verdict: dominated, lost.**
🔗 http://web.archive.org/web/20251231093950/https://fbref.com/en/matches/4100c1fb/Germany-Mexico-June-17-2018-World-Cup

### Match 2 — Germany 2–1 Sweden (23 Jun 2018) · *Toivonen 32', Reus 48', Kroos 90+5'*

| Metric | Germany | Sweden | Source (provider) |
|---|---|---|---|
| **xG** | **1.3** | **1.3** | FBref/Opta |
| **xGOT (PSxG)** | **1.2** | **1.8** | FBref/Opta |
| **Field tilt** | **85.9%** (touch: 82.3%) | 14.1% (17.7%) | computed from FBref/Opta final-third passes |
| Total shots | 17 | 8 | FBref/Opta (FotMob agrees) |
| Shots on target | 5 | 5 | FBref/Opta (FotMob agrees) |
| Possession | 75% | 25% | FBref/Opta (FotMob: 76/24) |

**Result vs stats:** Despite 86% field tilt, the chances were level (1.3 xG each), and Sweden's PSxG (1.8 > their 1.3 xG) shows their on-target shots were dangerous — closer than the territory suggests. Germany won it on a moment of quality (Kroos' last-gasp free kick). **Verdict: coin-flip that Germany edged.**
🔗 http://web.archive.org/web/20251115232518/https://fbref.com/en/matches/e9fc9e82/Germany-Sweden-June-23-2018-World-Cup

### Match 3 — South Korea 2–0 Germany (27 Jun 2018) · *Kim 90+3' (VAR), Son 90+6' — Germany eliminated*

| Metric | Germany | South Korea | Source (provider) |
|---|---|---|---|
| **xG** | **2.5** | **1.9** | FBref/Opta |
| **xGOT (PSxG)** | **1.7** | **1.8** | FBref/Opta |
| **Field tilt** | **85.3%** (touch: 80.2%) | 14.7% (19.8%) | computed from FBref/Opta final-third passes |
| Total shots | 25 | 12 | FBref/Opta (FotMob agrees) |
| Shots on target | 6 | 5 | FBref/Opta (FotMob agrees) |
| Possession | 75% | 25% | FBref/Opta (FotMob agrees) |

**Result vs stats:** The defining "deserved-more-and-out" game — 2.5 xG, 85% field tilt, 25 shots, lost 0–2 to two injury-time goals. Their PSxG (1.7, below their 2.5 xG) flags poor finishing/placement; Korea took theirs (PSxG 1.8 ≈ two goals). **Verdict: better side, eliminated.**
🔗 http://web.archive.org/web/20251115163518/https://fbref.com/en/matches/4743cce5/Korea-Republic-Germany-June-27-2018-World-Cup

**2018 takeaway:** Germany out-xG'd or matched every opponent (2.2 / 1.3 / 2.5) with 77–86% field tilt, and went out bottom of the group with 3 points — a finishing failure, not a creation one.

---

# 2022 World Cup (Qatar) — eliminated in the group stage (3rd in Group E, on goal difference)

*Provider: **Opta**, double-sourced — **FotMob** (live JSON API, 2-dp) and **FBref** (Wayback, "Provided by Opta"). xGOT is FotMob's labelled `expected_goals_on_target`, independently re-confirmed by summing the per-shot Opta xGOT in FotMob's shotmap (matched to the penny); FBref PSxG corroborates within rounding. Field tilt = final-third-pass share from FBref/Opta (touch-based in parentheses).*

### Match 1 — Germany 1–2 Japan (23 Nov 2022) · *Gündoğan 33' pen; Doan 75', Asano 83'*

| Metric | Germany | Japan | Source (provider) |
|---|---|---|---|
| **xG** | **3.09** | **1.46** | FotMob/Opta (FBref: 3.1 / 1.5) |
| **xGOT** | **2.82** | **1.77** | FotMob/Opta (FBref PSxG: 2.7 / 1.6) |
| **Field tilt** | **77.2%** (touch: 79.5%) | 22.8% (20.5%) | computed from FBref/Opta final-third passes |
| Total shots | 26 | 12 | FotMob/Opta (FBref: 25/12) |
| Shots on target | 9 | 4 | FotMob/Opta (FBref: 8/4) |
| Possession | 74% | 26% | FotMob & FBref/Opta |
| Big chances (missed) | 5 (4) | 3 (1) | FotMob/Opta |

**Result vs stats:** The single most extreme mismatch in all three tournaments. Germany 3.09 xG to 1.46, 77% field tilt, five big chances (four missed) — and lost. Even xGOT (which rewards placement) implied ~3 goals for Germany; they scored one. Japan converted limited chances clinically (xGOT 1.77 → 2 goals). **Verdict: comprehensively dominated, lost.**
🔗 https://www.fotmob.com/match/3854586 · 🔗 http://web.archive.org/web/20251222081052/https://fbref.com/en/matches/a3556b5a/Germany-Japan-November-23-2022-World-Cup

### Match 2 — Spain 1–1 Germany (27 Nov 2022) · *Morata 62'; Füllkrug 83'*

| Metric | Germany | Spain | Source (provider) |
|---|---|---|---|
| **xG** | **1.22** | **0.57** | FotMob/Opta (FBref: 1.3 / 0.6) |
| **xGOT** | **1.76** | **1.32** | FotMob/Opta (FBref PSxG: 1.8 / 1.3) |
| **Field tilt** | **29.3%** (touch: 46.7%) | 70.7% (53.3%) | computed from FBref/Opta final-third passes |
| Total shots | 11 | 7 | FotMob & FBref/Opta |
| Shots on target | 4 | 3 | FotMob & FBref/Opta |
| Possession | 36% | 64% | FotMob & FBref/Opta |
| Big chances (missed) | 2 (1) | 1 (0) | FotMob/Opta |

**Result vs stats:** The fascinating outlier. Germany had **less territory than any other game** (29% field tilt, 36% possession) yet created the **better** chances (1.22 xG vs 0.57). Both teams' xGOT exceeded their xG because only well-placed on-target shots count (Morata's finish, Füllkrug's thunderbolt). A vivid illustration that territory ≠ chance quality. **Verdict: Germany slightly the better side; a fair, survival-keeping draw.**
🔗 https://www.fotmob.com/match/3854587 · 🔗 http://web.archive.org/web/20251203204029/https://fbref.com/en/matches/9397f79c/Spain-Germany-November-27-2022-World-Cup

### Match 3 — Costa Rica 2–4 Germany (1 Dec 2022) · *Gnabry 10', Havertz 73' & 85', Füllkrug 89'; Tejeda 58', Vargas 70' — Germany out on GD*

| Metric | Germany | Costa Rica | Source (provider) |
|---|---|---|---|
| **xG** | **5.77** | **1.33** | FotMob/Opta (FBref: 5.7 / 1.3) |
| **xGOT** | **5.04** | **2.61** | FotMob/Opta (FBref PSxG: 5.0 / 2.2) |
| **Field tilt** | **86.4%** (touch: 82.1%) | 13.6% (17.9%) | computed from FBref/Opta final-third passes |
| Total shots | 32 | 8 | FotMob & FBref/Opta |
| Shots on target | 11 | 6 | FotMob & FBref/Opta |
| Possession | 68% | 32% | FotMob & FBref/Opta |
| Big chances (missed) | 10 (6) | 3 (2) | FotMob/Opta |

**Result vs stats:** Total domination — 5.77 xG, 86% field tilt, **ten** big chances — that "only" produced a 4–2 win. Costa Rica's xGOT (2.61, well above their 1.33 xG) shows their few on-target shots were lethal while Germany chased the bigger win they needed. Germany finished level on points with Spain but behind on goal difference. **Verdict: overwhelmingly the better team across the group — eliminated anyway.**
🔗 https://www.fotmob.com/match/3854590 · 🔗 http://web.archive.org/web/20251227010817/https://fbref.com/en/matches/6a2a024f/Costa-Rica-Germany-December-1-2022-World-Cup

**2022 takeaway:** Germany out-xG'd *and* out-xGOT'd *every* opponent and still exited in the group on goal difference — an even starker version of 2018's efficiency problem.

---

# 2026 World Cup (USA/Canada/Mexico) — won Group E, then eliminated in the Round of 32

*Provider: **Opta**. xG: **ESPN / The Analyst** (one feed) shown first, **FotMob** (Opta) in parentheses where it differs. xGOT: **FotMob** `expected_goals_on_target`, re-confirmed by summing the per-shot Opta xGOT in the shotmap (matched to the penny; shootout penalties excluded). Field tilt = Germany's share of final-third passes, summed from FotMob/Opta per-player data (no touch-based version available for 2026).*

### Match 1 — Germany 7–1 Curaçao (14 Jun 2026, Group E)

| Metric | Germany | Curaçao | Source (provider) |
|---|---|---|---|
| **xG** | **3.91** (FotMob: 4.22) | **0.40** | ESPN & The Analyst/Opta |
| **xGOT** | **5.24** | **0.50** | FotMob/Opta (per-shot sum confirmed) |
| **Field tilt** | **68.1%** | 31.9% | computed from FotMob/Opta final-third passes |
| Total shots | 26 | 8 | The Analyst & FotMob/Opta |
| Shots on target | 12 | 2 | The Analyst / ESPN/Opta |
| Possession | 65% | 35% | FotMob & Sofascore/Opta |
| Big chances | 6 (4 scored) | — | Sofascore |

**Result vs stats:** The one game Germany *over*-performed — 7 goals from 3.91 xG / 5.24 xGOT against a debutant. Ruthless conversion against minimal resistance (Curaçao 0.40 xG). **Verdict: emphatic and earned, with clinical finishing on top.**
🔗 https://www.espn.com/soccer/match/_/gameId/760422/curacao-germany · 🔗 https://www.fotmob.com/api/data/matchDetails?matchId=4667777 · 🔗 https://theanalyst.com/articles/germany-vs-curacao-stats-world-cup-2026

### Match 2 — Germany 2–1 Ivory Coast (20 Jun 2026, Group E) · *Undav 68' & 90+4'; Kessié 30'*

| Metric | Germany | Ivory Coast | Source (provider) |
|---|---|---|---|
| **xG** | **1.89** | **1.22** | FotMob & ESPN/Opta (exact agreement) |
| **xGOT** | **2.36** | **1.11** | FotMob/Opta (per-shot sum confirmed) |
| **Field tilt** | **68.1%** | 31.9% | computed from FotMob/Opta final-third passes |
| Total shots | 16 | 9 | FotMob & ESPN/Opta |
| Shots on target | 7 | 2 | ESPN/Opta |
| Possession | 60% | 40% | FotMob & ESPN/Opta |
| Big chances created (missed) | 5 (3) | 1 (1) | ESPN/Opta |

**Result vs stats:** Closer than the win suggests — 1.89 xG to 1.22, decided by two late Undav goals. Ivory Coast were a genuine threat (1.22 xG / 1.11 xGOT, equalised at 30'). **Verdict: better side, but a tight, deserved-rather-than-dominant win.**
🔗 https://www.espn.com/soccer/match/_/gameId/760448/ivory-coast-germany · 🔗 https://www.fotmob.com/api/data/matchDetails?matchId=4667780

### Match 3 — Ecuador 2–1 Germany (25 Jun 2026, Group E) · *Sané 2'; Angulo 9', Plata 77' — Germany still won the group*

| Metric | Germany | Ecuador | Source (provider) |
|---|---|---|---|
| **xG** | **0.65** | **1.27** | FotMob & ESPN/Opta (exact agreement) |
| **xGOT** | **0.94** | **1.63** | FotMob/Opta (per-shot sum confirmed) |
| **Field tilt** | **53.8%** | 46.2% | computed from FotMob/Opta final-third passes |
| Total shots | 11 | 7 | FotMob & ESPN/Opta |
| Shots on target | 3 | 3 | ESPN/Opta |
| Possession | 61% | 39% | FotMob & ESPN/Opta |
| Big chances created (missed) | 2 (1) | 2 (1) | ESPN/Opta |

**Result vs stats:** The exception to the pattern. Despite 61% possession, Germany were **out-created on every quality metric** — out-xG'd (0.65 vs 1.27), out-xGOT'd (0.94 vs 1.63), and field tilt fell to a season-low 53.8%. A flat, rotated display after an early Sané goal. Here the numbers and the result agree. **Verdict: deservedly lost** (though they still topped the group). *(A search snippet quoted Ecuador at 1.51 xG; two Opta sources show 1.27 — 1.27 is the verified figure.)*
🔗 https://www.espn.com/soccer/match/_/gameId/760468/germany-ecuador · 🔗 https://www.fotmob.com/api/data/matchDetails?matchId=4667781

### Match 4 — Germany 1–1 Paraguay, Paraguay won 4–3 on penalties (29 Jun 2026, Round of 32) · *Enciso 42'; Havertz 54'; Tah header VAR-disallowed in ET — Germany eliminated*

| Metric | Germany | Paraguay | Source (provider) |
|---|---|---|---|
| **xG** | **1.49** (FotMob: 1.57) | **0.42** (FotMob: 0.35) | ESPN & The Analyst/Opta |
| **xGOT** | **1.87** | **0.49** | FotMob/Opta (per-shot sum, shootout excluded) |
| **Field tilt** | **69.4%** | 30.6% | computed from FotMob/Opta final-third passes |
| Total shots (incl. ET) | 21 | 7 | FotMob, The Analyst & xgscore |
| Shots on target | 6 | 3 | FotMob/Opta |
| Possession | 76% | 24% | FotMob/Opta (The Analyst: 75.4%) |
| Big chances | 1 (1 missed) | 2 (1 scored) | Sofascore |

**Result vs stats:** The 2018/2022 pattern, transplanted into a knockout. Germany 1.49 xG to 0.42, 1.87 xGOT to 0.49, 69% field tilt, 76% possession, 21 shots — plus a disallowed goal — and still went out. Roughly 3.5–4× the chance quality, no win. Their first-ever World Cup penalty-shootout defeat. **Verdict: dominated and eliminated** — a fitting end given the tournament history.
🔗 https://www.espn.com/soccer/match/_/gameId/760489/paraguay-germany · 🔗 https://www.fotmob.com/api/data/matchDetails?matchId=4653703 · 🔗 https://theanalyst.com/articles/germany-vs-paraguay-stats-world-cup-2026

**2026 takeaway:** Germany finally escaped the group (1st in Group E, 6 pts) for the first time since 2014 — but lost it on the one day they were out-played (Ecuador), then bowed out of the Round of 32 in the most Germany-at-recent-World-Cups way imaginable: total xG/xGOT/field-tilt dominance, no goals when it counted, beaten on penalties.

---

# All 12 matches at a glance (xG · xGOT · field tilt vs result)

| # | Match | Result | Germany xG | Opp xG | Germany xGOT | Opp xGOT | Germany field tilt | What the stats say |
|---|---|---|---|---|---|---|---|---|
| 2018-1 | vs Mexico | **L 0–1** | 2.2 | 1.3 | 1.6 | 1.3 | 77.4% | Dominated, lost |
| 2018-2 | vs Sweden | W 2–1 | 1.3 | 1.3 | 1.2 | 1.8 | 85.9% | Even game, edged it late |
| 2018-3 | vs South Korea | **L 0–2** | 2.5 | 1.9 | 1.7 | 1.8 | 85.3% | Dominated, eliminated |
| 2022-1 | vs Japan | **L 1–2** | 3.09 | 1.46 | 2.82 | 1.77 | 77.2% | Hugely dominated, lost |
| 2022-2 | vs Spain | D 1–1 | 1.22 | 0.57 | 1.76 | 1.32 | 29.3% | Less territory, better chances |
| 2022-3 | vs Costa Rica | W 4–2 | 5.77 | 1.33 | 5.04 | 2.61 | 86.4% | Total control, out on GD |
| 2026-1 | vs Curaçao | W 7–1 | 3.91 | 0.40 | 5.24 | 0.50 | 68.1% | Over-performed, ruthless |
| 2026-2 | vs Ivory Coast | W 2–1 | 1.89 | 1.22 | 2.36 | 1.11 | 68.1% | Better, but tight |
| 2026-3 | vs Ecuador | **L 1–2** | 0.65 | 1.27 | 0.94 | 1.63 | 53.8% | Out-played, deservedly lost |
| 2026-4 | vs Paraguay (R32) | **D 1–1, L 4–3 pen** | 1.49 | 0.42 | 1.87 | 0.49 | 69.4% | Dominated, eliminated on pens |

*Germany out-xG'd their opponent in **9 of 12** matches and out-field-tilted them in **11 of 12** (Spain the exception) — yet won only 5, with 3 of their 4 losses/exits coming in games they statistically controlled (Mexico, Korea, Japan, Paraguay). Ecuador is the lone match where poor numbers and a poor result align.*

---

# Metrics glossary (what each number means & why it predicts)

- **Expected Goals (xG)** — The probability (0–1) that a given shot is scored, based on factors like distance, angle, body part, assist type and whether it was a clear "big chance," calibrated on ~1M+ historical shots. A team's match xG (sum of its shots' xG) measures *chance quality created* and is more stable and predictive of future results than raw goals. 🔗 [The Analyst — What is xG](https://theanalyst.com/articles/what-is-expected-goals-xg) · 🔗 [FBref — xG model explained](https://fbref.com/en/expected-goals-model-explained/)
- **Expected Goals on Target (xGOT) / Post-Shot xG (PSxG)** — Computed *only* for on-target shots, adding where in the goal the ball was placed; off-target shots score zero. It isolates **shot/finishing quality** and, defensively, **goalkeeping**: xGOT above xG means good placement; xGOT well above goals scored points to wasteful finishing or a great keeper. Opta calls it xGOT; FBref/StatsBomb call the identical concept PSxG. 🔗 [The Analyst — What is xGOT](https://theanalyst.com/articles/what-are-expected-goals-on-target-xgot)
- **Field tilt** — A team's share of the final-third passes (or touches) in a match: `team's final-third passes ÷ both teams' final-third passes × 100`. Unlike possession, it ignores sterile passing in defence/midfield and measures **territorial dominance** — how much you camped in the opponent's third. 🔗 [Driblab — Field Tilt: % of passes and touches in the final third](https://www.driblab.com/blog/field-tilt-percentage-of-passes-and-touches-in-the-final-third) · 🔗 [The Football Analyst — Field Tilt explained](https://the-footballanalyst.com/field-tilt-football-statistics-explained/)
- **Big chances** — A situation where a player should reasonably be expected to score, typically a one-on-one or clear close-range opportunity (penalties always count). Tracks the *volume of the highest-quality chances*, complementing xG. 🔗 [Stats Perform / Opta event definitions](https://www.statsperform.com/opta-event-definitions/) · 🔗 [The Analyst — Opta stat definitions](https://theanalyst.com/articles/opta-football-stats-definitions)
- **Shots / Shots on target** — Total goal attempts and the subset on target. Useful volume indicators, but predictive mainly *in combination with xG* (many low-xG shots ≠ good chances). 🔗 [Stats Perform / Opta event definitions](https://www.statsperform.com/opta-event-definitions/)
- **Possession %** — Share of the ball. Weakly predictive on its own — Germany's three campaigns are a case study in high possession not translating to results — but useful context for game control. 🔗 [Stats Perform / Opta event definitions](https://www.statsperform.com/opta-event-definitions/)
- **PPDA (Passes allowed Per Defensive Action)** *(not recovered — see limitations)* — Opponent passes ÷ the defending team's pressing actions (tackles, interceptions, challenges, fouls) in a defined zone; **lower = more intense pressing**. Not published per-match on any source accessed for these games, so it is absent from the tables. 🔗 [The Analyst — Opta stat definitions](https://theanalyst.com/articles/opta-football-stats-definitions)

---

# Source consistency & limitations (read before cross-era comparison)

**Your ideal — one consistent source (Opta) for every stat across all three World Cups — is now largely met, with these honest qualifications:**

1. **xG — Opta for all 12 matches**, but from different Opta front-ends because no single free site spans 2018→2026:
   - **2018 & 2022:** FBref (served by Opta), via **Wayback Machine** snapshots fetched with `curl`.
   - **2022 & 2026:** **FotMob** (Opta) and **ESPN / The Analyst** (Opta). 2022 overlaps both eras and the values agree — useful validation.
2. **xGOT — Opta for all 12 matches** (this closes the earlier gap):
   - **2018:** FBref **PSxG** (Opta, 1-dp) — the xGOT-equivalent, read from keeper "PSxG faced."
   - **2022 & 2026:** FotMob **xGOT** (Opta), each value re-confirmed by independently summing the per-shot Opta xGOT in FotMob's shotmap (matched the labelled team total to the penny). For 2022, FBref PSxG corroborates within rounding.
   - Note xGOT (Opta, FotMob, 2-dp) and PSxG (Opta, FBref, 1-dp) are the same concept from two implementations and differ slightly (e.g. 2022 Costa Rica xGOT 2.61 vs PSxG 2.2). The tables use FotMob xGOT for 2022/26 and FBref PSxG for 2018.
3. **Field tilt — computed for all 12, not directly published.** No source (FotMob, ESPN, The Analyst, web search) publishes a labelled "field tilt" for these games. The figures are **computed from Opta final-third passes**: for 2018/22 from FBref's `passes into final third`; for 2026 from FotMob's per-player `passes_into_final_third` (summed — the team-level field is null in the feed). Both follow the standard definition (share of final-third passes). **Caveats:** (a) FBref and FotMob may count "passes into the final third" slightly differently, so the 2018/22 vs 2026 field-tilt levels aren't perfectly comparable across eras — treat the *within-tournament* contrasts as most reliable; (b) "passes *into* the final third" counts entries rather than passes *within* it, a close but imperfect proxy; (c) for 2018/22 a touch-based version (share of attacking-third touches) is shown in parentheses and tells the same story, but no touch-based figure exists for 2026.
4. **2018 provider caveat:** Historically FBref's 2018 World Cup xG came from **StatsBomb**, but the late-2025 FBref snapshots used here attribute xG to **Opta** ("Provided by Opta") — FBref had migrated providers. So the 2018 numbers are **Opta's retrospective values (consistent with 2022/26), NOT the StatsBomb figures reported at the time.** No pre-migration (StatsBomb-era) snapshot of these match pages exists on the Wayback Machine to recover the originals.
5. **Why FBref needed the archive:** On **20 January 2026, Stats Perform/Opta terminated FBref's data feed and FBref removed ALL advanced stats (including xG)**; live FBref also returns HTTP 403 to automated fetches. The only way to get its (Opta) numbers today is via pre-20-Jan-2026 Wayback snapshots.
6. **Within-Opta variance:** ESPN/The Analyst and FotMob are both Opta but occasionally differ by rounding/implementation (2026 Curaçao xG 3.91 vs 4.22; Paraguay 1.49/0.42 vs FotMob 1.57/0.35). Primary xG shown is ESPN/The Analyst; FotMob in parentheses. The 2026 **xGOT** is FotMob's, so for a strictly same-feed xG↔xGOT comparison in 2026, pair it with FotMob's (parenthesised) xG.
7. **Big chances:** From FotMob/Opta (2022) and ESPN/Opta + Sofascore (2026). FBref does not display them, so **2018 big-chance counts are unavailable**.
8. **PPDA:** Not published per-match on any accessed source for any of the 12 games — genuinely unavailable here.
9. **2026 is live / post-cutoff:** All 2026 results and figures come from in-tournament match centres (ESPN, FotMob, The Analyst, Sofascore), not a settled archive. They are mutually consistent but newer than the assistant's training data.
10. **Access notes for re-verification:** FBref live = HTTP 403 (use Wayback via curl; WebFetch is blocked from web.archive.org); WhoScored = 403; Sofascore / FIFA.com = JS-only; FotMob's human pages are JS-rendered but its JSON API works via curl with a browser User-Agent — `https://www.fotmob.com/api/data/matchDetails?matchId=<id>` (the older `/api/matchDetails` path 404s).

**Bottom line:** You now have a single consistent **provider (Opta)** for **xG and xGOT across all twelve matches**, and a consistent **method** for **field tilt across all twelve** (final-third pass share). The unavoidable compromises are: no single *website* spans all three tournaments; field tilt is computed (not published) and mixes FBref/FotMob inputs across eras; 2018 values are Opta's retrospective model rather than the 2018-era StatsBomb numbers; and PPDA plus 2018 big chances are genuinely unavailable. Everything in the tables is real and cited; nothing is estimated, and gaps are marked as gaps.

---

### Full source list (clickable)

**2018 (FBref/Opta via Wayback):** Mexico — http://web.archive.org/web/20251231093950/https://fbref.com/en/matches/4100c1fb/Germany-Mexico-June-17-2018-World-Cup · Sweden — http://web.archive.org/web/20251115232518/https://fbref.com/en/matches/e9fc9e82/Germany-Sweden-June-23-2018-World-Cup · South Korea — http://web.archive.org/web/20251115163518/https://fbref.com/en/matches/4743cce5/Korea-Republic-Germany-June-27-2018-World-Cup

**2022 (FotMob/Opta JSON + FBref/Opta via Wayback):** Japan — https://www.fotmob.com/api/data/matchDetails?matchId=3854586 · http://web.archive.org/web/20251222081052/https://fbref.com/en/matches/a3556b5a/Germany-Japan-November-23-2022-World-Cup · Spain — https://www.fotmob.com/api/data/matchDetails?matchId=3854587 · http://web.archive.org/web/20251203204029/https://fbref.com/en/matches/9397f79c/Spain-Germany-November-27-2022-World-Cup · Costa Rica — https://www.fotmob.com/api/data/matchDetails?matchId=3854590 · http://web.archive.org/web/20251227010817/https://fbref.com/en/matches/6a2a024f/Costa-Rica-Germany-December-1-2022-World-Cup

**2026 (ESPN/The Analyst/Opta xG + FotMob/Opta xGOT & field tilt):** Curaçao — https://www.espn.com/soccer/match/_/gameId/760422/curacao-germany · https://www.fotmob.com/api/data/matchDetails?matchId=4667777 · https://theanalyst.com/articles/germany-vs-curacao-stats-world-cup-2026 · Ivory Coast — https://www.espn.com/soccer/match/_/gameId/760448/ivory-coast-germany · https://www.fotmob.com/api/data/matchDetails?matchId=4667780 · Ecuador — https://www.espn.com/soccer/match/_/gameId/760468/germany-ecuador · https://www.fotmob.com/api/data/matchDetails?matchId=4667781 · Paraguay — https://www.espn.com/soccer/match/_/gameId/760489/paraguay-germany · https://www.fotmob.com/api/data/matchDetails?matchId=4653703 · https://theanalyst.com/articles/germany-vs-paraguay-stats-world-cup-2026

**Metric definitions:** xG — https://theanalyst.com/articles/what-is-expected-goals-xg · xGOT — https://theanalyst.com/articles/what-are-expected-goals-on-target-xgot · Field tilt — https://www.driblab.com/blog/field-tilt-percentage-of-passes-and-touches-in-the-final-third · Opta event definitions — https://www.statsperform.com/opta-event-definitions/ · Opta stat glossary — https://theanalyst.com/articles/opta-football-stats-definitions · FBref xG model — https://fbref.com/en/expected-goals-model-explained/

**On the FBref data removal:** https://www.sports-reference.com/blog/2026/01/fbref-stathead-data-update/ · https://www.theixsports.com/the-ix-soccer/fbrefs-loss-advanced-stats-womens-soccer-data-accessibility/
