# Braling B2B Technical Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the approved Option A concept into a responsive technical B2B landing page, push it through a feature branch and pull request, merge it to `main`, and verify the resulting Vercel production deployment.

**Architecture:** Keep the existing single-page React/Vite application and visual system. Move replaceable mock business data into a focused content module, render new technical sections from those arrays, and preserve the existing WhatsApp-only quotation flow without adding a backend. New portfolio photography is generated as project-owned WebP assets.

**Tech Stack:** React 19, Vite 6, Phosphor Icons, CSS Grid/Flexbox, Node test runner, Vercel CLI, GitHub CLI.

---

## File Map

- Create `src/content.js`: mock capacity, portfolio, process, and technical-stat data.
- Modify `src/App.jsx`: technical hero, capacity matrix, gallery, four-step workflow, extended quotation form, and mobile sticky CTA.
- Modify `src/styles.css`: responsive technical components, table behavior, gallery, form fields, and sticky CTA.
- Create `tests/content-contract.test.mjs`: data-shape and mock-value contract tests.
- Modify `package.json`: add `test:content` and include it in validation.
- Create `public/assets/portfolio-edge-quality.webp`: generated close-up edge-quality image.
- Create `public/assets/portfolio-industrial-components.webp`: generated industrial components image.
- Create `public/assets/portfolio-automotive.webp`: generated automotive fabrication image.
- Create `public/assets/portfolio-signage.webp`: generated metal signage/facade image.
- Modify `design-qa.md`: record source, implementation screenshots, responsive checks, and final result.

### Task 1: Add Mock Technical Content Contract

**Files:**
- Create: `tests/content-contract.test.mjs`
- Create: `src/content.js`
- Modify: `package.json`

- [ ] **Step 1: Write the failing content contract test**

Create a Node test that imports `capacityRows`, `portfolioItems`, `processSteps`, and `technicalStats`, then asserts:

```js
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
    assert.ok(item.category && item.process && item.material && item.alt);
  }
});

test("defines four workflow steps ending in quality control", () => {
  assert.equal(processSteps.length, 4);
  assert.equal(processSteps.at(-1).title, "Quality Control & Pengiriman");
});

test("defines four concise technical stats", () => {
  assert.equal(technicalStats.length, 4);
});
```

- [ ] **Step 2: Run the test and verify failure**

Run: `node --test tests/content-contract.test.mjs`

Expected: FAIL because `src/content.js` does not exist.

- [ ] **Step 3: Create the mock content module**

Export four arrays with the approved content:

```js
export const capacityRows = [
  { material: "Mild Steel", thickness: "0.8–20 mm", tolerance: "±0.1 mm", useCase: "Bracket, base plate, machine frame" },
  { material: "Stainless Steel", thickness: "0.8–12 mm", tolerance: "±0.1 mm", useCase: "Food equipment, enclosure, interior" },
  { material: "Aluminium", thickness: "1–10 mm", tolerance: "±0.15 mm", useCase: "Cover, panel, lightweight component" },
  { material: "Brass", thickness: "1–6 mm", tolerance: "±0.15 mm", useCase: "Signage, decorative detail, nameplate" },
];

export const technicalStats = [
  { value: "1500 × 3000 mm", label: "Area kerja mock" },
  { value: "±0.1 mm", label: "Toleransi mock" },
  { value: "4 Material", label: "Material utama" },
  { value: "100% QC", label: "Sebelum pengiriman" },
];

export const processSteps = [
  { number: "01", title: "Kirim File & Spesifikasi", description: "Kirim DXF, DWG, PDF, STEP, JPG, atau PNG beserta material dan jumlah." },
  { number: "02", title: "Kalkulasi & Penawaran", description: "Kami review material, nesting, kuantitas, dan target pengerjaan." },
  { number: "03", title: "Laser Cutting & Fabrikasi", description: "Proses cutting, bending, welding, atau finishing mengikuti drawing." },
  { number: "04", title: "Quality Control & Pengiriman", description: "Dimensi diperiksa, produk dikemas aman, lalu dikirim." },
];

export const portfolioItems = [
  { category: "Edge Quality", title: "Tepi Potong Bersih", process: "Fiber laser", material: "Mild Steel • 12 mm", image: "/assets/portfolio-edge-quality.webp", alt: "Close-up tepi plat baja hasil laser cutting yang bersih dan minim geram" },
  { category: "Industrial", title: "Komponen Mesin", process: "Cutting + bending", material: "Stainless • 3 mm", image: "/assets/portfolio-industrial-components.webp", alt: "Komponen mesin industri hasil laser cutting dan bending presisi" },
  { category: "Automotive", title: "Bracket Custom", process: "Cutting + forming", material: "Mild Steel • 5 mm", image: "/assets/portfolio-automotive.webp", alt: "Bracket otomotif custom dari baja dengan lubang dan tekukan presisi" },
  { category: "Signage", title: "Panel & Fasad", process: "Cutting pattern", material: "Aluminium • 2 mm", image: "/assets/portfolio-signage.webp", alt: "Panel fasad aluminium dengan pola laser cutting geometris" },
];
```

Add `"test:content": "node --test tests/content-contract.test.mjs"` to `scripts` in `package.json`.

- [ ] **Step 4: Run the content test and verify pass**

Run: `npm run test:content`

Expected: 4 tests pass, 0 fail.

- [ ] **Step 5: Commit the content contract**

```bash
git add src/content.js tests/content-contract.test.mjs package.json package-lock.json
git commit -m "Add mock technical content contract"
```

### Task 2: Generate Portfolio Proof Assets

**Files:**
- Create: `public/assets/portfolio-edge-quality.webp`
- Create: `public/assets/portfolio-industrial-components.webp`
- Create: `public/assets/portfolio-automotive.webp`
- Create: `public/assets/portfolio-signage.webp`

- [ ] **Step 1: Generate four project-owned images**

Use the built-in image generator once per asset. Use 3:2 landscape framing, photorealistic industrial photography, neutral steel tones, clean directional workshop lighting, no people, no text, no logos, and no watermark.

Prompts:

1. `Extreme close-up of a thick mild-steel plate edge immediately after precision fiber-laser cutting, smooth straight edge, minimal burr, subtle machining texture, dark industrial inspection table.`
2. `Organized set of stainless-steel machine brackets and enclosure parts made by laser cutting and press-brake bending, measured on a clean industrial inspection bench.`
3. `Custom automotive mounting bracket made from mild steel, precision holes and bends, isolated on a dark workshop surface, premium engineering product photography.`
4. `Architectural aluminium facade panel with precise geometric laser-cut pattern, modern commercial building detail, close enough to show clean cut edges.`

- [ ] **Step 2: Inspect and accept each generated asset**

Verify subject accuracy, clean edge detail, plausible fabrication, consistent lighting, no accidental text/branding, and a composition that crops cleanly to 3:2.

- [ ] **Step 3: Convert accepted images to WebP**

Use an image formatter to produce approximately 1600 × 1067 WebP assets at sensible web quality. Verify all four final files open successfully.

- [ ] **Step 4: Commit the assets**

```bash
git add public/assets/portfolio-*.webp
git commit -m "Add industrial portfolio proof assets"
```

### Task 3: Implement the Conversion-First Technical Sections

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Import the mock content and required icons**

Import the four arrays from `./content.js`. Reuse existing Phosphor icons and add only icons needed for upload, material stats, QC, and the sticky WhatsApp action.

- [ ] **Step 2: Upgrade the hero**

Change the heading to `Laser Cutting & Fabrikasi Logam Presisi hingga 20 mm`, mention the four materials, add three technical chips, link the primary CTA to `#kontak`, and link the secondary CTA to `#kapasitas`.

- [ ] **Step 3: Replace the generic trust strip**

Render `technicalStats` as four measurable values under the services rail. Each item uses a visible value and short label rather than an unverified general claim.

- [ ] **Step 4: Add the capacity matrix**

Create `CapacityMatrix()` with `id="kapasitas"`, a `Data Mock untuk Presentasi` badge, a semantic `<table>`, `<caption>`, column headings, and four rows mapped from `capacityRows`. Include the approved material-grade and drawing-review caveat.

- [ ] **Step 5: Add the portfolio gallery**

Create `PortfolioGallery()` with `id="portofolio"`, four `<article>` cards mapped from `portfolioItems`, lazy-loaded images, category labels, process/material metadata, and descriptive alt text.

- [ ] **Step 6: Expand the workflow to four steps**

Render `processSteps` and ensure the final item is `Quality Control & Pengiriman`.

- [ ] **Step 7: Extend the quote form**

Add required `material`, `thickness`, and `quantity` controls; extend file accept guidance to DXF, DWG, PDF, STEP, JPG, and PNG; include the selected filename in the prepared WhatsApp message; and show an accessible reminder that the visitor must attach the file manually.

- [ ] **Step 8: Add mobile sticky WhatsApp CTA**

Render `MobileWhatsappCta()` after `<main>`. Use the existing prefilled WhatsApp URL, icon library, and accessible label.

- [ ] **Step 9: Order the page**

Use: Hero → Services → Technical Strip → Capacity Matrix → Portfolio → About/Capability → Four-Step Workflow → FAQ → Quote Form → Footer.

- [ ] **Step 10: Run tests and build**

Run: `npm run test:content && npm run test:sites && npm run build`

Expected: all content tests and 4 hosting tests pass; Vite production build exits 0.

- [ ] **Step 11: Commit the React implementation**

```bash
git add src/App.jsx
git commit -m "Build technical B2B conversion sections"
```

### Task 4: Style Responsive Technical UI

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Style hero chips and measurable stats**

Use existing CSS tokens, square/lightly rounded shapes, blue/white surfaces, and purple only for active conversion elements.

- [ ] **Step 2: Style the capacity matrix**

Provide clear header contrast, alternating rows, a scroll container on narrow screens, visible focus where applicable, and no full-page overflow at 320 px.

- [ ] **Step 3: Style the portfolio grid**

Use a two-column desktop grid and one-column mobile grid. Keep images at 3:2 with `object-fit: cover`, restrained hover movement, and overlay-free readable metadata.

- [ ] **Step 4: Style the four-step workflow**

Use four equal desktop columns, two columns at tablet widths, and one column on mobile.

- [ ] **Step 5: Style form additions and sticky CTA**

Keep labels visible, fields at least 44 px high, and add bottom page padding matching the sticky CTA on screens up to 620 px. The sticky action must use safe-area inset padding and a minimum 48 px target.

- [ ] **Step 6: Preserve accessibility modes**

Extend existing reduced-motion and forced-colors rules to new cards, images, table, and sticky CTA.

- [ ] **Step 7: Run tests and build**

Run: `npm run test:content && npm run test:sites && npm run build`

Expected: all tests pass and build exits 0.

- [ ] **Step 8: Commit responsive styling**

```bash
git add src/styles.css
git commit -m "Polish responsive technical presentation"
```

### Task 5: Browser QA and Accessibility Verification

**Files:**
- Modify: `design-qa.md`
- Create: `screenshots/b2b-presentation-desktop.png`
- Create: `screenshots/b2b-presentation-mobile.png`

- [ ] **Step 1: Start or reuse the local Vite server**

Run: `npm run dev -- --host 0.0.0.0`

Expected: local preview is reachable.

- [ ] **Step 2: Verify desktop**

At 1440 × 900, verify hero proposition, CTA anchors, capacity table, four portfolio images, workflow, quote form, one `h1`, no console errors, and no horizontal overflow.

- [ ] **Step 3: Verify mobile**

At 390 × 844, verify menu open/close and Escape dismissal, capacity table internal scroll, sticky WhatsApp CTA visibility, full form access, unobscured footer, and no horizontal page overflow.

- [ ] **Step 4: Verify form errors and WhatsApp summary**

Submit empty form and confirm focus moves to the first invalid field. Fill required fields, select a drawing, and verify the prepared message contains material, thickness, quantity, and filename while reminding the user to attach the drawing.

- [ ] **Step 5: Verify accessibility modes**

Confirm visible focus, reduced-motion rendering, semantic table headers, alt text, and acceptable text contrast.

- [ ] **Step 6: Save screenshots and update QA report**

Record exact viewport sizes, browser state, findings, fixes, build/test results, and `Final result: passed` only after all P0–P2 issues are resolved.

- [ ] **Step 7: Run final verification**

Run: `npm run test:content && npm run test:sites && npm run build && git diff --check`

Expected: all tests pass, build exits 0, and diff check is clean.

- [ ] **Step 8: Commit QA evidence**

```bash
git add design-qa.md screenshots/b2b-presentation-*.png
git commit -m "Verify Braling B2B presentation"
```

### Task 6: Push, Merge, and Deploy Production

**Files:** none beyond Git/Vercel metadata already ignored.

- [ ] **Step 1: Verify GitHub identity and branch state**

Run:

```bash
gh auth status
gh api user --jq '.login'
git status -sb
git log --oneline main..HEAD
```

Expected: active account `AdiYohanes`, clean branch `codex/b2b-presentation-upgrade`, and only reviewed feature commits ahead of `main`.

- [ ] **Step 2: Push the feature branch**

Run: `git push -u origin codex/b2b-presentation-upgrade`

- [ ] **Step 3: Open a pull request**

Create a ready-for-review PR targeting `main` with a body describing technical content, generated assets, form behavior, responsive/accessibility work, and exact verification results.

- [ ] **Step 4: Merge the pull request**

After confirming the PR diff and checks, merge it into `main` and delete the remote feature branch.

- [ ] **Step 5: Synchronize local main**

Run:

```bash
git switch main
git pull --ff-only origin main
git status -sb
```

Expected: local `main` clean and synchronized with `origin/main`.

- [ ] **Step 6: Verify Vercel Git deployment**

Use Vercel CLI to list/inspect the production deployment created from the merged `main` commit. If Git deployment is delayed, run `vercel --prod --yes` from the linked project.

- [ ] **Step 7: Verify public production**

Open `https://braling-landing-page.vercel.app`, confirm HTTP 200, inspect the new hero and sections in the in-app browser, and check the deployed commit/status with Vercel.

- [ ] **Step 8: Report deployment result**

Report production URL, READY status, merged commit, framework, build/test totals, and any monitoring gap.
