# Figma Build Spec: Portfolio

Target file:
- `https://www.figma.com/design/XpCvoZwIGbPcBYbtjFtJRs/Portfolio?node-id=0-1&p=f&t=EPwogRvmTmAMltY8-0`

Target page:
- `Page 1` (`0:1`)

Goal:
- Rebuild the React portfolio as editable Figma frames, not screenshots.
- Create two screens:
  - `Homepage`
  - `Case Study - Medications`

## Source of truth

Derived from:
- `src/components/BauhausPortfolioPrototype.tsx`
- `src/styles/app.css`

## Visual Language

Palette:
- Paper: `#E8E6E3`
- Ink: `#0F1115`
- Blue: `#1B73BD`
- Rust: `#C84C2A`
- Yellow: `#F2C94C`
- Line: `rgba(15,17,21,0.16)`
- Soft line: `rgba(15,17,21,0.08)`

Typography:
- Use a neutral grotesk/sans available in Figma.
- Preferred fallback order:
  - `Helvetica Neue`
  - `Inter`
  - `Arial`
- Keep:
  - oversized uppercase display type
  - tight tracking on large headlines
  - small uppercase section labels with wide tracking

Layout principles:
- strict poster grid
- asymmetry anchored to a visible structure
- minimal palette
- large fields of paper background
- thin rules and bordered modules

## Screen 1: Homepage

Top-level frame:
- Name: `Homepage`
- Width: `1440`
- Background: paper
- Layout: vertical

Sections in order:
1. `Header`
2. `Hero`
3. `Selected Work`
4. `About`
5. `Footer`

### Header

Behavior in code:
- Sticky top bar with bottom border and translucent paper fill

Figma translation:
- Height about `80`
- Horizontal auto-layout
- Left block:
  - Eyebrow: `Emilio / UX Product Design`
  - Subtitle: `Structured, scalable interfaces.`
- Right block:
  - Pills:
    - `Index` active
    - `Case study` inactive

### Hero

Composition:
- Large left display area
- Right rail with positioning note, abstract geometry panel, and 4 mini cards
- Grid overlay behind content

Key copy:
- Section label: `Poster system / homepage`
- Hero display:
  - `Design`
  - `as`
  - `system`
- Paragraph:
  - `Principal UX designer focused on complex product systems, enterprise workflows, and interfaces where clarity matters more than noise.`
- CTA:
  - `Open case study`

Right rail:
- Card `Positioning`
- Abstract poster block with:
  - outline rectangle
  - blue rectangle
  - rust ring
  - diagonal ink line
  - caption `Grid / balance / asymmetry`
- Four small cards:
  - `Approach / Function over form`
  - `Mode / Systems thinking`
  - `Style / Poster-driven layout`
  - `Constraint / Readable first`

### Selected Work

Intro:
- Section label: `Selected work`
- Headline:
  - `An index,`
  - `not a feed.`

Rows:
1. `01 / Medications / Enterprise EHR / Structured medication workflows for clinicians across complex charting states.`
2. `02 / Outside sources / Clinical data model / A scalable UX model for external data across chart components and clinical review surfaces.`
3. `03 / Specimen collection / Workflow design / Reduced ambiguity in collection, routing, and documentation through clearer task sequencing.`

Row treatment:
- thin border
- first row gets light yellow tint
- arrow indicator on right

### About

Section label:
- `About`

Paragraph:
- `I design structured interfaces for complex products. My work centers on workflow clarity, reusable systems, and decisions that scale beyond a single screen.`

Pills:
- `Function over form`
- `Simplicity`
- `Scalability`
- `Precision`
- `Clarity`
- `Accessibility`

Alternate pill tints:
- blue tint
- rust tint
- yellow tint

### Footer

Left:
- icon substitute as 3x3 grid mark or small square grid
- `Poster logic translated to web`

Right:
- `Built as a homepage + case study starter system`

## Screen 2: Case Study - Medications

Top-level frame:
- Name: `Case Study - Medications`
- Width: `1440`
- Background: paper
- Layout: vertical

Sections in order:
1. `Case Hero`
2. `Problem`
3. `Process`
4. `Layout Proof`
5. `Outcome`
6. `Footer`

### Case Hero

Top row:
- back button: `Back to index`

Main content:
- Label: `Case study / enterprise EHR / 2025`
- Huge title: `Medications`
- Hook:
  - `Designing safer, more scalable medication workflows for clinicians working inside high-pressure environments.`

Metrics rail:
- `Focus / Medication safety`
- `Users / Physicians / nurses`
- `Role / Principal UX Designer`
- `Lens / Systems + workflow clarity`

Tinting:
- `Users` light blue
- `Role` light rust

### Problem

Label:
- `Problem`

Copy:
- `Medication-related workflows were fragmented across states, surfaces, and edge cases. The product needed clearer structure, stronger consistency, and a model that could scale without increasing cognitive load.`

### Process

Label:
- `Process`

Steps:
1. `Mapped the full medication workflow and identified repeated structural patterns instead of solving screen by screen.`
2. `Defined reusable interaction rules for states, metadata, hierarchy, and interruptions.`
3. `Worked with product and engineering to tighten handoff quality and reduce ambiguity during implementation.`

### Layout Proof

Label:
- `Layout proof`

Left proof panel:
- title: `Annotated concept frame`
- display:
  - `Clear`
  - `systems`
- rust ring
- outlined rectangle on right
- small note: `Type as structure`

Right two cards:
- `Key moves`
  - `Overscaled typography as the primary compositional object.`
  - `Asymmetric blocks anchored by a strict invisible grid.`
  - `Accent colors limited to hierarchy and orientation.`
- `Guardrails`
  - `Readable line lengths and stable DOM order.`
  - `Visible focus states and reduced-motion-safe transitions.`
  - `Every expressive move must still support scanning.`

### Outcome

Label:
- `Outcome`

Rows:
- `More consistent interaction patterns across related flows.`
- `Stronger system thinking in the UI model and component usage.`
- `Better alignment between design intent and engineering delivery.`

## Build Order

1. Inspect `Page 1`
2. Create `Homepage` wrapper
3. Add header + hero
4. Validate screenshot
5. Add selected work + about + footer
6. Validate screenshot
7. Create `Case Study - Medications` wrapper
8. Add hero + metrics
9. Validate screenshot
10. Add problem + process
11. Add layout proof + outcome + footer
12. Validate screenshot

## Validation Checklist

After each major write:
- return all created and mutated node IDs
- confirm section names
- verify no clipped text
- verify no accidental fills/strokes on wrapper
- verify layout breathes and preserves asymmetry
- verify palette stays limited to paper, ink, blue, rust, yellow
