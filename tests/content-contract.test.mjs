import test from "node:test";
import assert from "node:assert/strict";
import {
  capacityRows,
  portfolioItems,
  processSteps,
  technicalStats,
} from "../src/content.js";

test("provides four complete material capacity rows", () => {
  assert.equal(capacityRows.length, 4);

  for (const row of capacityRows) {
    assert.ok(row.material);
    assert.ok(row.thickness);
    assert.ok(row.tolerance);
    assert.ok(row.useCase);
  }
});

test("provides four categorized portfolio items with local WebP assets", () => {
  assert.equal(portfolioItems.length, 4);

  for (const item of portfolioItems) {
    assert.match(item.image, /^\/assets\/.+\.webp$/);
    assert.ok(item.category);
    assert.ok(item.process);
    assert.ok(item.material);
    assert.ok(item.alt);
  }
});

test("defines four workflow steps ending in quality control", () => {
  assert.equal(processSteps.length, 4);
  assert.equal(processSteps.at(-1).title, "Quality Control & Pengiriman");
});

test("defines four concise technical stats", () => {
  assert.equal(technicalStats.length, 4);
});
