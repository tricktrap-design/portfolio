---
name: portfolio-figma-components
description: Implement or update the portfolio's reusable UI components from the Figma file `XpCvoZwIGbPcBYbtjFtJRs` and wire them into the live Vite/React site. Use when Codex is asked to rebuild, tweak, restyle, or add any mapped portfolio component such as Button, Value Chip, Metric Card, Section Label, Table, Case Study Item, Footer, Bullet Card, Outcome Card, or Process Card, or when updating portfolio pages to consume those components consistently.
---

# Portfolio Figma Components

## Quick Start

1. Open [`references/component-map.md`](references/component-map.md) and locate the requested component name.
2. Fetch the mapped Figma node with `get_design_context`; use `get_screenshot` as a follow-up if layout or spacing feels ambiguous.
3. Update the reusable primitive first in [src/components/portfolio/PortfolioComponents.tsx](/Users/trickbook-air/Documents/Portfolio v1/src/components/portfolio/PortfolioComponents.tsx).
4. Update editable copy or data in [src/content/portfolioContent.ts](/Users/trickbook-air/Documents/Portfolio v1/src/content/portfolioContent.ts) when the change is content-driven rather than structural.
5. Update page composition in [src/components/BauhausPortfolioPrototype.tsx](/Users/trickbook-air/Documents/Portfolio v1/src/components/BauhausPortfolioPrototype.tsx) only when the component needs to be inserted, replaced, or reused in new places.
6. Adjust shared typography or surface tokens in [src/styles/designTokens.ts](/Users/trickbook-air/Documents/Portfolio v1/src/styles/designTokens.ts) only when the change should affect multiple components.
7. Run `npm run build` before finishing.

## Repo Rules

- Treat the live site as the Vite/React app rooted at [src/main.tsx](/Users/trickbook-air/Documents/Portfolio v1/src/main.tsx). Do not default to the old root-level `styles.css` or `script.js` files unless the user explicitly asks for the legacy static version.
- Prefer changing one primitive and reusing it across the site rather than creating page-specific one-off markup.
- Keep portfolio copy editable by storing lists, labels, metrics, and section content in `portfolioContent.ts` instead of hardcoding text in components.
- Keep button, label, and body typography aligned with `designTokens.ts`; do not scatter duplicate font sizes and letter-spacing values unless the Figma component truly introduces a new token.
- When a request targets a mapped component, update every current usage that should inherit the new design, not just one screen.

## Component Workflow

### Primitive components

Use this order for most component requests:

1. Update the primitive in `PortfolioComponents.tsx`.
2. Verify the primitive still supports every current variant used by the site.
3. Check `BauhausPortfolioPrototype.tsx` for each usage listed in the component map and update props if needed.

### Content-driven components

If the request is mostly text, labels, chips, metrics, or list items:

1. Update `portfolioContent.ts`.
2. Keep the primitive untouched unless the structure changed in Figma.

### New portfolio section or page work

If the request adds a new section that should use existing components:

1. Compose it in `BauhausPortfolioPrototype.tsx`.
2. Reuse the mapped primitives first.
3. Only add a new primitive if the Figma design cannot be represented by the existing set.

## Validation

- Run `npm run build`.
- Sanity-check that the changed component still matches the mapped variants from `component-map.md`.
- Mention whether the change touched primitives, content, or page composition so the next editor knows where future changes belong.
