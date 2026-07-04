// Validates data/world-cup-funnel.json against the funnel's structural invariants.
// Usage: node scripts/validate.mjs [path-to-json]
// Exit code 0 = valid, 1 = one or more invariants broken.

export const EXPECTED_TIER_TEAMS = { r32: 32, r12: 12, r16: 16, qf: 8, sf: 4, final: 2, winner: 1 };

export function validate(data) {
  const errors = [];
  const bad = (cond, msg) => { if (!cond) errors.push(msg); };
  const CK = data.confederationOrder;

  bad(Array.isArray(CK) && CK.length === 6, 'confederationOrder must list 6 confederations');
  bad(data.confederations.length === 6, 'expected 6 confederations');
  bad(
    JSON.stringify(data.confederations.map(c => c.key)) === JSON.stringify(CK),
    'confederations[].key must match confederationOrder exactly'
  );

  const len = (m, c) => (m && m[c] ? m[c].length : 0);
  const sumArr = m => CK.reduce((n, c) => n + len(m, c), 0);
  const sumNum = m => CK.reduce((n, c) => n + m[c], 0);
  const isPending = (e, t) => e.pendingFrom && e.order.indexOf(t) >= e.order.indexOf(e.pendingFrom);
  const isPartial = (e, t) => (e.partialTiers || []).includes(t);

  for (const e of data.editions) {
    const q = e.knockout.qualified;
    const size = e.fieldSize;

    // 1. qualified field sums to the field size
    bad(sumArr(q) === size, `${e.year}: qualified sum ${sumArr(q)} != fieldSize ${size}`);

    // 2. direct berths integer; play-off gain per confederation is 0 or 1; they reconcile to the field
    let poTotal = 0;
    for (const c of CK) {
      bad(Number.isInteger(e.directBerths[c]), `${e.year}: directBerths.${c} not an integer`);
      const gain = len(q, c) - e.directBerths[c];
      bad(gain >= 0 && gain <= 1, `${e.year}: ${c} play-off gain ${gain} outside {0,1}`);
      poTotal += Math.max(0, gain);
    }
    bad(sumNum(e.directBerths) + poTotal === size,
      `${e.year}: directBerths(${sumNum(e.directBerths)}) + play-offs(${poTotal}) != ${size}`);

    // 3. each played knockout tier holds the expected number of teams
    //    — except a "partial" (in-progress) tier, which holds 1..exp-1 so far
    for (const t of Object.keys(e.knockout)) {
      if (t === 'qualified' || isPending(e, t)) continue;
      const exp = EXPECTED_TIER_TEAMS[t];
      if (exp == null) continue;
      const got = sumArr(e.knockout[t]);
      if (isPartial(e, t)) bad(got > 0 && got < exp, `${e.year}: partial ${t} sum ${got} not in 1..${exp - 1}`);
      else bad(got === exp, `${e.year}: ${t} sum ${got} != ${exp}`);
    }

    // 3b. partial tiers must have data and sit before pendingFrom (i.e. actually be played)
    for (const t of (e.partialTiers || [])) {
      bad(e.knockout[t], `${e.year}: partialTiers lists ${t} but it has no knockout data`);
      bad(!isPending(e, t), `${e.year}: partial tier ${t} is at/after pendingFrom ${e.pendingFrom}`);
    }

    // 4. monotonic containment: every team in a round appeared in the previous played round
    const seq = e.order.filter(t =>
      e.knockout[t] && !isPending(e, t) && !['members', 'direct', 'playoffs'].includes(t));
    for (let i = 1; i < seq.length; i++) {
      const prev = e.knockout[seq[i - 1]], cur = e.knockout[seq[i]];
      for (const c of CK) for (const nat of (cur[c] || []))
        bad((prev[c] || []).includes(nat), `${e.year}: ${seq[i]} ${c} "${nat}" not present in ${seq[i - 1]}`);
    }

    // 5. champion consistency
    if (e.champion) {
      bad(len(e.knockout.winner, e.championConfed) === 1 &&
          e.knockout.winner[e.championConfed][0] === e.champion,
          `${e.year}: champion ${e.champion}/${e.championConfed} not consistent with winner tier`);
    }

    // 6. play-off winners equal the confederations that gained a +1
    const winners = (e.playoffs || []).map(p => p.winner).sort();
    const plusOne = CK.filter(c => len(q, c) - e.directBerths[c] === 1).sort();
    bad(JSON.stringify(winners) === JSON.stringify(plusOne),
      `${e.year}: play-off winners [${winners}] != +1 confederations [${plusOne}]`);
    for (const p of (e.playoffs || [])) {
      const confs = p.entrants.map(x => x.confed);
      bad(confs.includes(p.winner), `${e.year}: play-off winner ${p.winner} is not among its entrants`);
      bad(new Set(confs).size === confs.length, `${e.year}: a play-off lists a confederation twice`);
    }

    // 7. order sanity
    bad(e.order.indexOf('members') === 0, `${e.year}: order should start with 'members'`);
  }
  return errors;
}

// ---- CLI ----
if (import.meta.url === `file://${process.argv[1]}`) {
  const fs = await import('fs');
  const url = new URL(process.argv[2]
    ? `file://${process.argv[2].startsWith('/') ? '' : process.cwd() + '/'}${process.argv[2]}`
    : new URL('../data/world-cup-funnel.json', import.meta.url));
  const data = JSON.parse(fs.readFileSync(url, 'utf8'));
  const errors = validate(data);
  if (errors.length) {
    console.error(`❌ ${errors.length} validation error(s):`);
    for (const e of errors) console.error('  - ' + e);
    process.exit(1);
  }
  console.log(`✅ data valid: ${data.editions.length} editions, all structural invariants hold`);
}
