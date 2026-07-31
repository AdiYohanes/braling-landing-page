# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Braling Inti Logam Design Decisions

- Source of truth: `C:\Users\USER\.codex\generated_images\019fb75f-4d3b-7882-b214-ea66d0cf3c81\call_K1FYtWJu6LsT3zxgqTFES6NW.png` (selected ideation option 1).
- Visual ratio: approximately 60% rich blue `#0c5488`, 30% white `#ffffff`, and 10% royal purple `#880c54`; purple is reserved for conversion actions and small accents.
- Primary outcome: WhatsApp consultations and quote requests for laser cutting CNC, bending, shearing, custom fabrication, and automotive metal parts.
- Preserve a precision-engineering tone, strong left-aligned hero hierarchy, authentic workshop imagery, visible trust strip, keyboard accessibility, and mobile-first responsiveness.
- Do not add CV content, gift cards, account login, fake certifications, fake client logos, or invented performance metrics.
