// Pretend Admin, HR and the shared package will become separate projects.
// Rules:
//   1. Admin code must not import HR code, and HR code must not import Admin code.
//   2. Code in src/shared must not import anything from outside src/shared
//      (npm packages are fine).
// Run: npm run check:boundaries

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve, dirname, sep } from 'node:path';

const SRC = resolve('src');

function zoneOf(absPath) {
  const rel = relative(SRC, absPath).split(sep).join('/');
  if (rel === 'shared' || rel.startsWith('shared/')) return 'shared';
  if (/(^|\/)admin(\/|$)/.test(rel)) return 'admin';
  if (/(^|\/)hr(\/|$)/.test(rel)) return 'hr';
  return 'app';
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const importPattern = /(?:from\s+|import\(\s*)['"]([^'"]+)['"]/g;
const violations = [];

for (const file of walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f))) {
  const from = zoneOf(file);
  const code = readFileSync(file, 'utf8');
  for (const match of code.matchAll(importPattern)) {
    const spec = match[1];
    if (!spec.startsWith('.')) continue; // npm package, ignore
    const to = zoneOf(resolve(dirname(file), spec));
    const bad =
      (from === 'admin' && to === 'hr') ||
      (from === 'hr' && to === 'admin') ||
      (from === 'shared' && to !== 'shared');
    if (bad) {
      violations.push(`${relative(process.cwd(), file)}: "${spec}" (${from} -> ${to})`);
    }
  }
}

if (violations.length > 0) {
  console.error('Boundary violations found:\n');
  violations.forEach((v) => console.error('  ' + v));
  process.exit(1);
}
console.log('Boundaries OK');
