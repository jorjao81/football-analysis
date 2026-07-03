// Regenerates world-cup-confederation-funnel.html from data + template.
// Validates the data first and aborts the build if any invariant is broken.
// Usage: node scripts/build.mjs

import fs from 'fs';
import { validate } from './validate.mjs';

const dataUrl = new URL('../data/world-cup-funnel.json', import.meta.url);
const tplUrl = new URL('../src/template.html', import.meta.url);
const outUrl = new URL('../world-cup-confederation-funnel.html', import.meta.url);

const data = JSON.parse(fs.readFileSync(dataUrl, 'utf8'));

const errors = validate(data);
if (errors.length) {
  console.error(`❌ build aborted — data invalid (${errors.length} error(s)):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}

// confederation colours (single source of truth: data/world-cup-funnel.json)
const colorLine = mode => data.confederations.map(c => `${c.cssVar}:${c.color[mode]}`).join(';');
const colorCss = [
  `:root{${colorLine('light')}}`,
  `@media (prefers-color-scheme:dark){:root{${colorLine('dark')}}}`,
  `:root[data-theme="light"]{${colorLine('light')}}`,
  `:root[data-theme="dark"]{${colorLine('dark')}}`
].join('\n');

let html = fs.readFileSync(tplUrl, 'utf8');
if (!html.includes('/*__DATA__*/null')) { console.error('❌ template missing /*__DATA__*/null marker'); process.exit(1); }
if (!html.includes('/*__CONF_COLORS__*/')) { console.error('❌ template missing /*__CONF_COLORS__*/ marker'); process.exit(1); }

html = html.replace('/*__CONF_COLORS__*/', colorCss);
html = html.replace('/*__DATA__*/null', JSON.stringify(data));

fs.writeFileSync(outUrl, html);
console.log(`✅ built world-cup-confederation-funnel.html (${html.length.toLocaleString()} bytes) from ${data.editions.length} editions`);
