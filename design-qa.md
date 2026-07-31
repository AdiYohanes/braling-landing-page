# Design QA — Braling Inti Logam Option 1

## Visual source of truth

- Selected concept: Option 1, industrial split hero.
- Source: `screenshots/design-option-1-source.png` (original: `C:\Users\USER\.codex\generated_images\019fb75f-4d3b-7882-b214-ea66d0cf3c81\exec-69176880-6ff9-4933-9e73-a83780dbfb48.png`).
- Source and implementation: 1487 × 1058 px, device scale factor 1; no normalization required.
- Compared state: desktop homepage at top, menu closed, form untouched, entrance animations settled.
- Implementation: `screenshots/implementation-option1-final.png`.
- Full comparison: `screenshots/comparison-option1-final.png`.
- Focused hero comparison: `screenshots/comparison-option1-hero-final.png`.
- Mobile implementation: `screenshots/implementation-option1-mobile.png` at 390 × 844 CSS px.

## Comparison history

### Pass 1

- P1: photo split extended too far right and the Barlow headline was too short.
- Fix: corrected the grid/photo split and installed Bebas Neue to match the condensed industrial display type.

### Pass 2

- P1: the enlarged headline wrapped to four lines and expanded the hero.
- Fix: tuned the headline to 113 px at the reference viewport, restored the intended three lines, and adjusted reveal timing so the trust rail is visible in the first viewport.

### Pass 3

- Typography, spacing, blue/white/purple tokens, image treatment, copy hierarchy, services rail, and trust rail visibly align with the selected concept.
- No remaining P0, P1, or P2 discrepancies.
- P3 accepted: the top diagonal differs by about 18 px and exact source font/photo rendering cannot be identical to a generated reference.

## Functional and accessibility checks

- Desktop and 390 px mobile layouts have no horizontal overflow.
- Exactly one `h1`; semantic landmarks and heading hierarchy remain intact.
- Mobile menu opens, closes, and dismisses with Escape while updating `aria-expanded`.
- Navigation, anchors, WhatsApp quote flow, keyboard focus styles, image alt text, and inline form validation remain functional.
- Motion is restrained and disabled by `prefers-reduced-motion: reduce`.

## Build verification

- `npm run build`: passed.
- `npm run test:sites`: passed, 4/4 tests.
- Production JavaScript: 83.49 kB gzip.
- Production CSS: 9.09 kB gzip.

Final result: passed
