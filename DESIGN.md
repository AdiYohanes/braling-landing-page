---
name: Braling Inti Logam
description: A precise, premium industrial system for technical B2B fabrication services.
colors:
  braling-blue: "#0c5488"
  braling-blue-dark: "#073e68"
  braling-blue-deep: "#062f52"
  braling-blue-soft: "#eaf3f8"
  clean-white: "#ffffff"
  precision-purple: "#880c54"
  precision-purple-dark: "#6f0844"
  technical-ink: "#10253d"
  technical-muted: "#52677d"
  structural-line: "#c9d7e1"
  error-red: "#b42318"
typography:
  display:
    fontFamily: "Bebas Neue, Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 4.3vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 3.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope Variable, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.18vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope Variable, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.2
rounded:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(5rem, 8vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.precision-purple}"
    textColor: "{colors.clean-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.25rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.precision-purple-dark}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.sm}"
  input:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.technical-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
    height: "3.5rem"
  portfolio-card:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.technical-ink}"
    rounded: "{rounded.lg}"
---

# Design System: Braling Inti Logam

## Overview

**Creative North Star: "The Precision Workshop"**

The system translates a clean fabrication floor into a digital interface: technically credible, highly legible, and confident without becoming loud. It preserves Braling's blue-white-purple identity while using industrial photography, disciplined grids, and compact technical facts to help engineers, estimators, and procurement teams decide quickly.

The visual language is premium but practical. White space separates decisions, blue establishes authority, and purple appears selectively where action or status deserves attention. Spatial motion belongs only to the hero and portfolio; every other interaction responds through color, border, opacity, or depth.

**Key Characteristics:**

- Technical hierarchy before decoration.
- Strong condensed headlines paired with readable Manrope body copy.
- Sharp-soft geometry with 8–16px radii.
- Structural shadows used selectively, never as ambient clutter.
- Accessible focus, error, disabled, and busy states.

## Colors

Rich Braling blue carries the industrial identity, clean white creates working space, and Precision Purple remains a scarce conversion accent.

### Primary

- **Braling Rich Blue:** Primary fields, technical bands, and trust-building surfaces.
- **Workshop Deep Blue:** High-contrast sections, overlays, and footer surfaces.

### Secondary

- **Precision Purple:** Primary CTAs, status chips, focus emphasis, and small icon accents.

### Neutral

- **Clean White:** Canvas, form, card, and inverse text surface.
- **Technical Ink:** Main text and headings on light surfaces.
- **Blueprint Mist:** Quiet section separation and table guidance.
- **Structural Line:** Borders, dividers, and field boundaries.

**The 60-30-10 Rule.** Let blue dominate, white provide breathing room, and purple remain rare enough to signal action immediately.

## Typography

**Display Font:** Bebas Neue with Barlow Condensed and Arial Narrow fallbacks

**Headline Font:** Barlow Condensed with Arial Narrow fallback

**Body Font:** Manrope Variable with Segoe UI fallback

**Character:** Condensed display faces communicate industrial confidence and conserve horizontal space. Manrope keeps technical descriptions, forms, and tables calm and highly readable.

### Hierarchy

- **Display:** Hero claim only; uppercase, compressed line height, and short line lengths.
- **Headline:** Section titles and major proof points.
- **Title:** Service, process, FAQ, and card titles.
- **Body:** Explanations and technical guidance; keep reading lines near 65 characters where practical.
- **Label:** Navigation, buttons, fields, chips, and table headers; use weight before excessive size.

**The Two-Voice Rule.** Condensed type speaks for authority; Manrope explains the evidence.

## Layout

Use a centered container capped at 1352px with fluid side gutters. Desktop sections use deliberate two-column splits, while proof grids use two or four columns. Section rhythm is spacious and fluid; internal component rhythm follows the 4px-based spacing scale.

Below 900px, layouts collapse to one column, navigation becomes a disclosure menu, and content order favors imagery followed by the decision copy. At narrow mobile widths, capacity tables scroll horizontally with an explicit hint, portfolio cards stack, forms become one column, and the WhatsApp CTA remains reachable.

## Elevation & Depth

The system is flat by default and layered where hierarchy needs reinforcement. Borders and tonal surfaces provide most separation; soft blue-black shadows lift portfolio cards, feature imagery, the quote form, and sticky navigation.

### Shadow Vocabulary

- **Low:** Quiet header and button elevation.
- **Medium:** Resting cards, figures, and forms.
- **High:** Hovered portfolio imagery and active form grouping.

**The Structural Shadow Rule.** Use elevation to clarify stacking or interaction, never to decorate empty space.

## Shapes

Controls use compact 8px corners, grouped navigation uses 12px corners, and cards or major figures use 16px corners. Pills are reserved for metadata badges. Dashed borders indicate file upload; solid borders indicate standard fields and navigation.

## Components

### Buttons

- **Shape:** Compact confident rectangle with 8px corners and a 56px minimum height.
- **Primary:** Purple fill, white text, and strong label weight.
- **Hover / Focus:** Darker accent or shadow feedback; the focus system uses a high-contrast purple outer ring.
- **Disabled / Busy:** Reduced opacity, no spatial motion, and the appropriate cursor.

### Chips

- **Style:** Small pill, uppercase label, and purple accent surface or fill.
- **Use:** Mock-data disclosure and portfolio categorization only.

### Cards / Containers

- **Corner Style:** 16px for portfolio, figure, table, and form containers.
- **Background:** White on blue or neutral sections; deep blue for technical galleries.
- **Shadow Strategy:** Medium at rest and high only for portfolio hover.

### Inputs / Fields

- **Style:** White field, 8px radius, strong blue-gray border, and 56px minimum height.
- **Focus:** Blue border with a visible halo; file upload transfers focus visibility to its label.
- **Error / Disabled:** Red structural border for errors; quiet neutral surface and reduced contrast for disabled fields.

### Navigation

Desktop navigation is a bordered horizontal group with color-and-underline feedback. Mobile navigation opens as a full-width stacked panel without spatial entrance motion. Every interactive target maintains a minimum 44px touch area.

### Capacity Matrix

Technical data lives in a horizontally scrollable table with a blue header, clear row dividers, and restrained row-hover feedback. Never hide the mock-data status.

## Do's and Don'ts

### Do:

- **Do** lead with material, tolerance, file-format, and process evidence.
- **Do** use purple for decisions, status, and focus—not broad background coverage.
- **Do** keep state feedback non-spatial outside hero and portfolio.
- **Do** preserve visible keyboard focus and 44px minimum interaction targets.

### Don't:

- **Don't** turn the site into a generic gradient-heavy startup landing page.
- **Don't** invent certifications, customers, production metrics, or machine capability.
- **Don't** add competing display fonts, arbitrary radii, or decorative shadow styles.
- **Don't** use decorative entrance animation across every section.
