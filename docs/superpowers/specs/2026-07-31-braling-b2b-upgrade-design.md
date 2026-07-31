# Braling B2B Technical Conversion Upgrade

Date: 2026-07-31
Status: Approved visual direction — Option A, Conversion-first Technical

## Purpose

Upgrade the existing Braling Inti Logam landing page for a client presentation without replacing its established blue, white, and purple visual identity. The revised page should answer an engineer or procurement officer's first technical questions quickly while keeping the quotation path understandable for business owners and contractors.

This is a presentation prototype. All capacity values and new portfolio images are mock content. The current public Vercel deployment must remain unchanged until the client approves the prototype.

## Success Criteria

- A visitor can identify supported materials, maximum mock thickness, and the quotation action within five seconds.
- Technical buyers can scan a clear material and capacity matrix without downloading a document.
- The drawing submission path is obvious on desktop and mobile.
- Portfolio imagery demonstrates edge quality and relevant industry applications.
- The complete process is shown as four steps ending in quality control and delivery.
- Mobile visitors always have access to a clear WhatsApp quotation action.

## Selected Direction

Option A: Conversion-first Technical.

The existing industrial split hero remains the visual anchor. Technical proof is introduced earlier in the page through specification chips, a capability summary, and a scannable matrix. Photography supports the claims instead of dominating the page. Purple remains reserved for quotation actions.

## Page Structure

### 1. Header

Keep the existing logo, navigation style, and `Minta Penawaran` action. Add `Kapasitas` and `Portofolio` anchor links. Preserve the responsive menu and keyboard behavior.

### 2. Hero

Use this primary message:

> Laser Cutting & Fabrikasi Logam Presisi hingga 20 mm

Supporting copy:

> Menerima mild steel, stainless steel, aluminium, dan kuningan untuk prototipe, komponen custom, serta produksi partai.

Add three concise technical chips:

- Area kerja 1500 × 3000 mm
- Toleransi hingga ±0.1 mm
- Satuan hingga produksi partai

Primary CTA: `Upload Drawing & Minta Estimasi` links to the quotation form.
Secondary CTA: `Lihat Kapasitas Mesin` links to the capacity matrix.

### 3. Technical Confidence Strip

Replace generic trust claims with four concrete mock indicators:

- 1500 × 3000 mm area kerja
- ±0.1 mm toleransi mock
- 4 jenis material utama
- QC sebelum pengiriman

### 4. Material & Capacity Matrix

Present a responsive table with sticky first-column behavior when useful on narrow screens.

| Material | Mock thickness | Mock tolerance | Typical use |
| --- | --- | --- | --- |
| Mild Steel | 0.8–20 mm | ±0.1 mm | Bracket, base plate, machine frame |
| Stainless Steel | 0.8–12 mm | ±0.1 mm | Food equipment, enclosure, interior |
| Aluminium | 1–10 mm | ±0.15 mm | Cover, panel, lightweight component |
| Brass | 1–6 mm | ±0.15 mm | Signage, decorative detail, nameplate |

Show a visible `Data Mock untuk Presentasi` badge and a short note explaining that final capability depends on material grade, geometry, and drawing review.

### 5. Portfolio Proof

Use a four-card gallery with original or AI-generated images:

1. Close-up edge quality — clean laser-cut plate edge with minimal burr.
2. Industrial components — brackets, plates, and machine parts.
3. Automotive fabrication — custom mounts or protective components.
4. Signage and facade — precise decorative metalwork.

Each card includes industry category, process used, mock material, and mock thickness. Images must be photorealistic, contain no brand marks or text, and visually fit their crop without stretching.

### 6. Four-Step Workflow

1. `Kirim File & Spesifikasi` — DXF, DWG, PDF, STEP, JPG, or PNG.
2. `Kalkulasi & Penawaran` — material, nesting, quantity, and lead-time review.
3. `Laser Cutting & Fabrikasi` — cutting, bending, welding, or finishing as required.
4. `Quality Control & Pengiriman` — dimensional inspection, packing, and delivery.

### 7. Drawing Submission Form

Retain the current WhatsApp-based flow and extend accepted file guidance to `.dxf`, `.dwg`, `.pdf`, `.step`, `.jpg`, and `.png`.

Required fields:

- Name
- WhatsApp number
- Service
- Material
- Thickness
- Quantity

Optional fields:

- Project details
- Drawing file selection

The prototype does not upload files to a server. It includes the selected filename in the prepared WhatsApp message and tells the visitor to attach the file manually in WhatsApp. Validation remains inline, keyboard-accessible, and announced through the existing accessible state handling.

### 8. Mobile Sticky WhatsApp CTA

Add a fixed bottom action on screens up to 620 px wide:

`Minta Estimasi via WhatsApp`

Use the purple accent, a WhatsApp icon from the existing icon library, a minimum 48 px target, safe-area padding, and a prefilled message. Ensure the sticky control does not cover form actions or footer content by adding matching bottom spacing to the page.

## Visual System

- Preserve the existing 60–30–10 palette: rich blue `#0c5488`, white `#ffffff`, royal purple `#880c54`.
- Retain Bebas Neue for high-impact display headings and Manrope/Barlow Condensed for supporting copy.
- Use square or lightly rounded technical cards, strong grid alignment, restrained shadows, and existing reveal motion.
- New sections should feel engineered and precise rather than decorative or overly futuristic.

## Component Boundaries

Add or update these focused React sections:

- `Hero` — revised technical proposition and chips.
- `TechnicalStrip` — four measurable mock indicators.
- `CapacityMatrix` — responsive technical table and mock-data disclosure.
- `PortfolioGallery` — four categorized image cards.
- `ProcessSection` — four-step workflow.
- `QuoteForm` — extended technical fields and file guidance.
- `MobileWhatsappCta` — mobile-only fixed conversion action.

Keep mock content in named arrays near the top of `App.jsx` so values and portfolio metadata can be replaced easily after client approval. No backend, database, new route, or UI library is required.

## Error Handling

- Do not prepare a WhatsApp message until required fields are valid.
- Move focus to the first invalid field after submission.
- Display a clear note when a file is selected that it must still be attached manually in WhatsApp.
- If JavaScript is unavailable, direct WhatsApp and phone links remain usable.

## Responsive and Accessibility Requirements

- Preserve one `h1` and a logical heading hierarchy.
- Maintain visible keyboard focus, semantic table headings, descriptive image alt text, and skip navigation.
- Capacity data must remain readable at 320 px without horizontal page overflow; an internally scrollable table is acceptable.
- All text contrast remains at least WCAG AA for normal text.
- Respect `prefers-reduced-motion` and forced-colors behavior.
- The sticky mobile CTA must not trap focus or obscure content.

## Image Plan

Reuse existing production images where they fit. Generate missing close-up and category-specific photography with the built-in image generator. Store final assets in `public/assets/` as optimized WebP files. Do not use unlicensed web imagery in the presentation prototype.

## Verification

- Run the production build and existing hosting tests.
- Verify the desktop hero, capacity matrix, portfolio, four-step process, form, and footer in the in-app browser.
- Verify mobile at 390 × 844, including sticky CTA visibility, menu behavior, form access, and absence of horizontal overflow.
- Test keyboard navigation, Escape menu dismissal, inline form errors, and reduced-motion behavior.
- Compare the updated first viewport against the existing design to ensure the redesign remains an evolution rather than a replacement.

## Non-Goals

- No production deployment or Vercel update during this phase.
- No real file storage or backend upload.
- No client claim that the mock capacity values are verified machine specifications.
- No replacement of the established logo, palette, or overall brand direction.
