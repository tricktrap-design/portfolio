# Component Map

Figma file:
- `https://www.figma.com/design/XpCvoZwIGbPcBYbtjFtJRs/Portfolio`

Primary implementation files:
- [src/components/portfolio/PortfolioComponents.tsx](/Users/trickbook-air/Documents/Portfolio v1/src/components/portfolio/PortfolioComponents.tsx)
- [src/components/BauhausPortfolioPrototype.tsx](/Users/trickbook-air/Documents/Portfolio v1/src/components/BauhausPortfolioPrototype.tsx)
- [src/content/portfolioContent.ts](/Users/trickbook-air/Documents/Portfolio v1/src/content/portfolioContent.ts)
- [src/styles/designTokens.ts](/Users/trickbook-air/Documents/Portfolio v1/src/styles/designTokens.ts)

## Figma to code mapping

| Component | Figma node | Local component | Main usages |
| --- | --- | --- | --- |
| Button | `37:1268` | `PortfolioButton` | Header nav, hero CTA, about CTA, back button |
| Value chip | `10:38` | `ValueChip` | About values, about meta chips, case-study chips |
| Metric card | `10:51` | `MetricCard` | Case-study hero metrics, executive summary, outcomes |
| Section Label | `37:1164` | `SectionLabel` | Homepage, about page, case-study section headings |
| Table | `53:2466` | `DecisionTable` | Case-study "Key Design Decisions" section |
| Case study item | `10:68` | `CaseStudyItem` | Homepage selected work list |
| Footer | `10:94` | `PortfolioFooter` | Global site footer |
| Bullet card | `90:5752` | `BulletCard` | Strategic context, role, systems, education, what I'd do differently |
| Outcome card | `10:88` | `OutcomeCard` | Timeline highlights, revisit notes, outcome highlights |
| Process card | `10:72` | `ProcessCard` | Case-study process section |

## Editing guidance

- Change `PortfolioComponents.tsx` when the Figma component structure, spacing, or visual styling changes.
- Change `portfolioContent.ts` when the component stays the same but labels, metrics, list items, or copy should change.
- Change `BauhausPortfolioPrototype.tsx` when a component needs to be inserted into a new section or replaced across a page.
- Change `designTokens.ts` only when the update should become a shared token across multiple components.

## Current page composition

- Homepage:
  `SectionLabel`, `PortfolioButton`, `CaseStudyItem`, `ValueChip`, `PortfolioFooter`
- About page:
  `SectionLabel`, `ValueChip`, `PortfolioButton`, `BulletCard`, `OutcomeCard`, `PortfolioFooter`
- Case study page:
  `SectionLabel`, `PortfolioButton`, `ValueChip`, `MetricCard`, `ProcessCard`, `BulletCard`, `DecisionTable`, `OutcomeCard`, `PortfolioFooter`
