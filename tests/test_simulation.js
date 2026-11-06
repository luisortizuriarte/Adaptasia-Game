/**
 * Adaptasia Headless Simulation Test Suite
 * Extracts the JavaScript module from adaptasia.html and runs headless tests.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log('Running Adaptasia Headless Simulation Tests...\n');

// 1. Read adaptasia.html and extract script content
const htmlPath = path.resolve(__dirname, '..', 'adaptasia.html');
assert.ok(fs.existsSync(htmlPath), 'adaptasia.html must exist');
const html = fs.readFileSync(htmlPath, 'utf8');

const match = html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(match && match[1], 'Failed to extract <script> content from adaptasia.html');
const scriptCode = match[1];

// 2. Set up sandbox without browser DOM globals
const sandbox = {
  module: { exports: {} },
  exports: {},
  console: console,
  Math: Math,
  performance: { now: () => Date.now() },
  localStorage: {
    store: {},
    getItem(k) { return this.store[k] || null; },
    setItem(k, v) { this.store[k] = String(v); },
  },
  location: { search: '' },
  document: undefined,
  window: undefined,
};

vm.createContext(sandbox);
vm.runInContext(scriptCode, sandbox);

const engine = sandbox.module.exports;
assert.ok(engine, 'Engine module must be exported');
assert.ok(engine.CONFIG, 'CONFIG must be present');
assert.ok(typeof engine.newState === 'function', 'newState must be a function');
console.log('✔ Successfully loaded game engine from adaptasia.html');

// 3. Test initial state generation
const state = engine.newState(12345);
assert.strictEqual(state.seed, 12345, 'Seed should match');
assert.strictEqual(state.year, 1, 'Starting year must be 1');
assert.strictEqual(state.budget, engine.CONFIG.startBudget, 'Starting budget must match CONFIG');
assert.strictEqual(state.tiles.length, engine.CONFIG.COLS * engine.CONFIG.ROWS, 'Tile count must be COLS * ROWS');
assert.strictEqual(state.over, false, 'Game should not be over initially');
console.log('✔ Initial state initialized correctly (Budget: $' + state.budget + ', Tiles: ' + state.tiles.length + ')');

// 4. Test map classification
let countRiver = 0, countSea = 0, countFlood = 0, countHill = 0, countLand = 0;
for (const t of state.tiles) {
  if (t.t === 'river') countRiver++;
  else if (t.t === 'sea') countSea++;
  else if (t.t === 'flood') countFlood++;
  else if (t.t === 'hill') countHill++;
  else countLand++;
}
assert.ok(countRiver > 0, 'Map must generate river tiles');
assert.ok(countSea > 0, 'Map must generate sea tiles');
console.log(`✔ Procedural terrain generated: ${countRiver} river, ${countSea} sea, ${countFlood} floodplain, ${countHill} hill, ${countLand} land`);

// 5. Test building placement logic
// Find a buildable land tile
let buildIdx = -1;
for (let i = 0; i < state.tiles.length; i++) {
  if (state.tiles[i].t === 'land') {
    buildIdx = i;
    break;
  }
}
assert.ok(buildIdx !== -1, 'Must find a buildable land tile');
const bx = buildIdx % engine.CONFIG.COLS;
const by = Math.floor(buildIdx / engine.CONFIG.COLS);

// Can place road?
const roadCheck = engine.canPlace(state, 'road', bx, by);
assert.ok(roadCheck.ok, 'Should be able to place road on empty land');
const initialBudget = state.budget;
const placedRoad = engine.place(state, 'road', bx, by);
assert.ok(placedRoad.ok, 'Road placement must succeed');
assert.strictEqual(state.tiles[buildIdx].b, 'road', 'Tile building must be road');
assert.strictEqual(state.budget, initialBudget - engine.CONFIG.items.road.cost, 'Budget must decrease by road cost');
console.log('✔ Infrastructure placement verified (placed road, budget updated)');

// Cannot build on occupied tile without demolishing
const conflictCheck = engine.canPlace(state, 'res', bx, by);
assert.strictEqual(conflictCheck.ok, false, 'Should not allow building on occupied tile');
console.log('✔ Collision prevention verified');

// Demolish
const demResult = engine.place(state, 'demolish', bx, by);
assert.ok(demResult.ok, 'Demolition must succeed');
assert.strictEqual(state.tiles[buildIdx].b, null, 'Tile must be cleared after demolish');
console.log('✔ Demolition verified');

// 6. Test full yearly cycle progression
const yearRep = engine.endYear(state);
assert.ok(yearRep, 'endYear must return a yearly report');
assert.strictEqual(state.year, 2, 'State year must advance to 2');
assert.strictEqual(state.hist.length, 1, 'History must record year 1');
console.log(`✔ Year progression verified: Year ${yearRep.year} ended, taxes: $${yearRep.taxes}, upkeep: $${yearRep.upkeep}`);

// 7. Test lesson generation
const postLessons = engine.lessons(state);
assert.ok(Array.isArray(postLessons), 'Lessons must return an array');
assert.ok(postLessons.length > 0 && postLessons.length <= 3, 'Lessons must return 1 to 3 items');
console.log('✔ Post-game educational lessons verified:');
postLessons.forEach((l, i) => console.log(`   ${i + 1}. ${l}`));

console.log('\nAll Headless Simulation Tests Passed Successfully! 🎮\n');
