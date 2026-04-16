# Incremental `use_figma` Scripts

These scripts are prepared for the target file:
- File key: `XpCvoZwIGbPcBYbtjFtJRs`
- Page: `Page 1`

Notes:
- Replace placeholder IDs from earlier returns into later scripts.
- After each write, run a screenshot on the returned top-level section or screen node.
- All colors are in Figma's 0-1 format.

## 1. Inspect `Page 1`

```js
const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);

const children = page.children.map((node) => ({
  id: node.id,
  name: node.name,
  type: node.type,
  x: node.x,
  y: node.y,
  width: node.width,
  height: node.height,
}));

return {
  pageId: page.id,
  childCount: children.length,
  children,
};
```

## 2. Create wrappers

```js
function hex(hex) {
  const v = hex.replace("#", "");
  return {
    r: parseInt(v.slice(0, 2), 16) / 255,
    g: parseInt(v.slice(2, 4), 16) / 255,
    b: parseInt(v.slice(4, 6), 16) / 255,
  };
}

const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);

let maxX = 0;
for (const child of page.children) {
  maxX = Math.max(maxX, child.x + child.width);
}

const paper = hex("#E8E6E3");

function makeScreen(name, x) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.resize(1440, 100);
  frame.fills = [{ type: "SOLID", color: paper }];
  frame.itemSpacing = 0;
  frame.x = x;
  frame.y = 120;
  page.appendChild(frame);
  return frame;
}

const homepage = makeScreen("Homepage", maxX + 160);
const caseStudy = makeScreen("Case Study - Medications", maxX + 1760);

return {
  createdNodeIds: [homepage.id, caseStudy.id],
  mutatedNodeIds: [page.id],
  screens: {
    homepageId: homepage.id,
    caseStudyId: caseStudy.id,
  },
};
```

## 3. Homepage: header + hero

```js
function hex(hex) {
  const v = hex.replace("#", "");
  return {
    r: parseInt(v.slice(0, 2), 16) / 255,
    g: parseInt(v.slice(2, 4), 16) / 255,
    b: parseInt(v.slice(4, 6), 16) / 255,
  };
}

function rgba(hexValue, alpha) {
  return {
    type: "SOLID",
    color: hex(hexValue),
    opacity: alpha,
  };
}

async function loadSans() {
  const candidates = [
    { family: "Helvetica Neue", style: "Regular" },
    { family: "Inter", style: "Regular" },
    { family: "Arial", style: "Regular" },
    { family: "Helvetica Neue", style: "Medium" },
    { family: "Inter", style: "Medium" },
    { family: "Arial", style: "Bold" },
  ];
  const fonts = await figma.listAvailableFontsAsync();
  const pick = (family, style) =>
    fonts.find((f) => f.fontName.family === family && f.fontName.style === style);
  const regular =
    candidates.map((c) => pick(c.family, c.style)).find(Boolean)?.fontName ||
    fonts[0].fontName;
  await figma.loadFontAsync(regular);
  return regular;
}

function makeText(text, font, size, options = {}) {
  const node = figma.createText();
  node.fontName = font;
  node.characters = text;
  node.fontSize = size;
  node.fills = [{ type: "SOLID", color: options.color || hex("#0F1115"), opacity: options.opacity ?? 1 }];
  if (options.uppercase) node.textCase = "UPPER";
  if (options.letterSpacing !== undefined) {
    node.letterSpacing = { unit: "PIXELS", value: options.letterSpacing };
  }
  if (options.lineHeight !== undefined) {
    node.lineHeight = { unit: "PIXELS", value: options.lineHeight };
  }
  if (options.alignHorizontal) node.textAlignHorizontal = options.alignHorizontal;
  return node;
}

const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);
const home = page.findOne((n) => n.id === "HOMEPAGE_ID");
const font = await loadSans();

const createdNodeIds = [];
const mutatedNodeIds = [home.id];

const ink = hex("#0F1115");
const paper = hex("#E8E6E3");
const blue = hex("#1B73BD");
const rust = hex("#C84C2A");
const yellow = hex("#F2C94C");

const header = figma.createFrame();
header.name = "Header";
header.layoutMode = "HORIZONTAL";
header.primaryAxisSizingMode = "FIXED";
header.counterAxisSizingMode = "AUTO";
header.resize(1440, 84);
header.paddingLeft = 40;
header.paddingRight = 40;
header.paddingTop = 20;
header.paddingBottom = 16;
header.itemSpacing = 24;
header.primaryAxisAlignItems = "SPACE_BETWEEN";
header.strokes = [rgba("#0F1115", 0.16)];
header.strokeTopWeight = 0;
header.strokeLeftWeight = 0;
header.strokeRightWeight = 0;
header.strokeBottomWeight = 1;
header.fills = [rgba("#E8E6E3", 0.84)];
home.appendChild(header);
createdNodeIds.push(header.id);

const brand = figma.createFrame();
brand.name = "Brand";
brand.layoutMode = "VERTICAL";
brand.primaryAxisSizingMode = "AUTO";
brand.counterAxisSizingMode = "AUTO";
brand.fills = [];
brand.itemSpacing = 4;
header.appendChild(brand);
createdNodeIds.push(brand.id);

const eyebrow = makeText("Emilio / UX Product Design", font, 10, {
  uppercase: true,
  letterSpacing: 2.8,
  opacity: 0.55,
});
const subtitle = makeText("Structured, scalable interfaces.", font, 14, {});
brand.appendChild(eyebrow);
brand.appendChild(subtitle);
createdNodeIds.push(eyebrow.id, subtitle.id);

const nav = figma.createFrame();
nav.name = "Nav";
nav.layoutMode = "HORIZONTAL";
nav.primaryAxisSizingMode = "AUTO";
nav.counterAxisSizingMode = "AUTO";
nav.fills = [];
nav.itemSpacing = 8;
header.appendChild(nav);
createdNodeIds.push(nav.id);

function pill(label, active) {
  const p = figma.createFrame();
  p.name = label;
  p.layoutMode = "HORIZONTAL";
  p.primaryAxisSizingMode = "AUTO";
  p.counterAxisSizingMode = "AUTO";
  p.paddingLeft = 16;
  p.paddingRight = 16;
  p.paddingTop = 10;
  p.paddingBottom = 10;
  p.cornerRadius = 999;
  p.strokes = [{ type: "SOLID", color: active ? ink : ink, opacity: active ? 1 : 0.16 }];
  p.strokeWeight = 1;
  p.fills = [{ type: "SOLID", color: active ? ink : paper }];
  const t = makeText(label, font, 12, {
    uppercase: true,
    letterSpacing: 2.2,
    color: active ? paper : ink,
  });
  p.appendChild(t);
  createdNodeIds.push(p.id, t.id);
  return p;
}

nav.appendChild(pill("Index", true));
nav.appendChild(pill("Case study", false));

const hero = figma.createFrame();
hero.name = "Hero";
hero.layoutMode = "HORIZONTAL";
hero.primaryAxisSizingMode = "FIXED";
hero.counterAxisSizingMode = "AUTO";
hero.resize(1440, 980);
hero.paddingLeft = 40;
hero.paddingRight = 40;
hero.paddingTop = 40;
hero.paddingBottom = 48;
hero.itemSpacing = 32;
hero.strokes = [rgba("#0F1115", 0.16)];
hero.strokeTopWeight = 0;
hero.strokeLeftWeight = 0;
hero.strokeRightWeight = 0;
hero.strokeBottomWeight = 1;
hero.fills = [{ type: "SOLID", color: paper }];
home.appendChild(hero);
createdNodeIds.push(hero.id);

const left = figma.createFrame();
left.name = "Hero Left";
left.layoutMode = "VERTICAL";
left.primaryAxisSizingMode = "AUTO";
left.counterAxisSizingMode = "AUTO";
left.fills = [];
left.itemSpacing = 24;
left.resize(900, 820);
hero.appendChild(left);
createdNodeIds.push(left.id);

const labelRow = figma.createFrame();
labelRow.name = "Section Label";
labelRow.layoutMode = "HORIZONTAL";
labelRow.primaryAxisSizingMode = "AUTO";
labelRow.counterAxisSizingMode = "AUTO";
labelRow.fills = [];
labelRow.itemSpacing = 8;
left.appendChild(labelRow);
createdNodeIds.push(labelRow.id);

const dot = figma.createEllipse();
dot.name = "Accent Dot";
dot.resize(10, 10);
dot.fills = [{ type: "SOLID", color: rust }];
labelRow.appendChild(dot);
createdNodeIds.push(dot.id);

const label = makeText("Poster system / homepage", font, 11, {
  uppercase: true,
  letterSpacing: 2.6,
});
labelRow.appendChild(label);
createdNodeIds.push(label.id);

const display = makeText("Design\nas\nsystem", font, 160, {
  uppercase: true,
  letterSpacing: -8,
  lineHeight: 134,
});
left.appendChild(display);
createdNodeIds.push(display.id);

const bottomRow = figma.createFrame();
bottomRow.name = "Hero Summary Row";
bottomRow.layoutMode = "HORIZONTAL";
bottomRow.primaryAxisSizingMode = "AUTO";
bottomRow.counterAxisSizingMode = "AUTO";
bottomRow.fills = [];
bottomRow.itemSpacing = 32;
left.appendChild(bottomRow);
createdNodeIds.push(bottomRow.id);

const summary = makeText(
  "Principal UX designer focused on complex product systems, enterprise workflows, and interfaces where clarity matters more than noise.",
  font,
  20,
  { lineHeight: 32, opacity: 0.78 }
);
summary.resize(520, summary.height);
bottomRow.appendChild(summary);
createdNodeIds.push(summary.id);

const cta = figma.createFrame();
cta.name = "CTA";
cta.layoutMode = "HORIZONTAL";
cta.primaryAxisSizingMode = "AUTO";
cta.counterAxisSizingMode = "AUTO";
cta.paddingLeft = 16;
cta.paddingRight = 16;
cta.paddingTop = 14;
cta.paddingBottom = 14;
cta.itemSpacing = 8;
cta.strokes = [{ type: "SOLID", color: ink }];
cta.fills = [{ type: "SOLID", color: yellow }];
bottomRow.appendChild(cta);
createdNodeIds.push(cta.id);

const ctaText = makeText("Open case study", font, 12, {
  uppercase: true,
  letterSpacing: 2.2,
});
cta.appendChild(ctaText);
createdNodeIds.push(ctaText.id);

const right = figma.createFrame();
right.name = "Hero Right Rail";
right.layoutMode = "VERTICAL";
right.primaryAxisSizingMode = "AUTO";
right.counterAxisSizingMode = "FIXED";
right.resize(428, 820);
right.fills = [];
right.itemSpacing = 16;
hero.appendChild(right);
createdNodeIds.push(right.id);

const positioning = figma.createFrame();
positioning.name = "Positioning";
positioning.layoutMode = "VERTICAL";
positioning.primaryAxisSizingMode = "AUTO";
positioning.counterAxisSizingMode = "FIXED";
positioning.resize(428, 120);
positioning.paddingLeft = 16;
positioning.paddingRight = 16;
positioning.paddingTop = 16;
positioning.paddingBottom = 16;
positioning.itemSpacing = 16;
positioning.strokes = [rgba("#0F1115", 0.16)];
positioning.fills = [];
right.appendChild(positioning);
createdNodeIds.push(positioning.id);

const posLabel = makeText("Positioning", font, 10, {
  uppercase: true,
  letterSpacing: 2.6,
  opacity: 0.55,
});
const posBody = makeText(
  "Bauhaus-inspired portfolio system translated into a scalable web structure: strict grid, controlled breakouts, minimal color, exact hierarchy.",
  font,
  14,
  { lineHeight: 24, opacity: 0.72 }
);
posBody.resize(396, posBody.height);
positioning.appendChild(posLabel);
positioning.appendChild(posBody);
createdNodeIds.push(posLabel.id, posBody.id);

const poster = figma.createFrame();
poster.name = "Poster Block";
poster.resize(428, 360);
poster.strokes = [rgba("#0F1115", 0.16)];
poster.fills = [{ type: "SOLID", color: paper }];
poster.clipsContent = true;
right.appendChild(poster);
createdNodeIds.push(poster.id);

const outline = figma.createRectangle();
outline.resize(220, 100);
outline.x = 36;
outline.y = 36;
outline.fills = [];
outline.strokes = [{ type: "SOLID", color: ink }];
outline.strokeWeight = 2;
poster.appendChild(outline);

const blueRect = figma.createRectangle();
blueRect.resize(120, 160);
blueRect.x = 272;
blueRect.y = 70;
blueRect.fills = [{ type: "SOLID", color: blue }];
poster.appendChild(blueRect);

const ring = figma.createEllipse();
ring.resize(110, 110);
ring.x = 78;
ring.y = 208;
ring.fills = [];
ring.strokes = [{ type: "SOLID", color: rust }];
ring.strokeWeight = 10;
poster.appendChild(ring);

const slash = figma.createLine();
slash.resize(160, 0);
slash.x = 234;
slash.y = 286;
slash.rotation = -28;
slash.strokes = [{ type: "SOLID", color: ink }];
slash.strokeWeight = 2;
poster.appendChild(slash);

const caption = makeText("Grid / balance / asymmetry", font, 11, {
  uppercase: true,
  letterSpacing: 2.4,
  opacity: 0.65,
});
caption.x = 212;
caption.y = 306;
poster.appendChild(caption);
createdNodeIds.push(outline.id, blueRect.id, ring.id, slash.id, caption.id);

const miniGrid = figma.createFrame();
miniGrid.name = "Mini Cards";
miniGrid.layoutMode = "VERTICAL";
miniGrid.primaryAxisSizingMode = "AUTO";
miniGrid.counterAxisSizingMode = "FIXED";
miniGrid.resize(428, 244);
miniGrid.itemSpacing = 12;
miniGrid.fills = [];
right.appendChild(miniGrid);
createdNodeIds.push(miniGrid.id);

const row1 = figma.createFrame();
row1.layoutMode = "HORIZONTAL";
row1.primaryAxisSizingMode = "AUTO";
row1.counterAxisSizingMode = "AUTO";
row1.itemSpacing = 12;
row1.fills = [];
miniGrid.appendChild(row1);
createdNodeIds.push(row1.id);

const row2 = figma.createFrame();
row2.layoutMode = "HORIZONTAL";
row2.primaryAxisSizingMode = "AUTO";
row2.counterAxisSizingMode = "AUTO";
row2.itemSpacing = 12;
row2.fills = [];
miniGrid.appendChild(row2);
createdNodeIds.push(row2.id);

function miniCard(labelText, valueText) {
  const card = figma.createFrame();
  card.layoutMode = "VERTICAL";
  card.primaryAxisSizingMode = "AUTO";
  card.counterAxisSizingMode = "FIXED";
  card.resize(208, 116);
  card.paddingLeft = 16;
  card.paddingRight = 16;
  card.paddingTop = 16;
  card.paddingBottom = 16;
  card.itemSpacing = 12;
  card.strokes = [rgba("#0F1115", 0.16)];
  card.fills = [];
  const a = makeText(labelText, font, 10, {
    uppercase: true,
    letterSpacing: 2.2,
    opacity: 0.45,
  });
  const b = makeText(valueText, font, 16, { lineHeight: 22 });
  b.resize(176, b.height);
  card.appendChild(a);
  card.appendChild(b);
  createdNodeIds.push(card.id, a.id, b.id);
  return card;
}

row1.appendChild(miniCard("Approach", "Function over form"));
row1.appendChild(miniCard("Mode", "Systems thinking"));
row2.appendChild(miniCard("Style", "Poster-driven layout"));
row2.appendChild(miniCard("Constraint", "Readable first"));

return { createdNodeIds, mutatedNodeIds };
```

## 4. Homepage: selected work + about + footer

```js
// Use the same helper functions from step 3: hex, rgba, loadSans, makeText.
const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);
const home = page.findOne((n) => n.id === "HOMEPAGE_ID");
const font = await loadSans();

const createdNodeIds = [];
const mutatedNodeIds = [home.id];

const work = figma.createFrame();
work.name = "Selected Work";
work.layoutMode = "VERTICAL";
work.primaryAxisSizingMode = "AUTO";
work.counterAxisSizingMode = "FIXED";
work.resize(1440, 700);
work.paddingLeft = 40;
work.paddingRight = 40;
work.paddingTop = 40;
work.paddingBottom = 48;
work.itemSpacing = 40;
work.strokes = [rgba("#0F1115", 0.16)];
work.strokeTopWeight = 0;
work.strokeLeftWeight = 0;
work.strokeRightWeight = 0;
work.strokeBottomWeight = 1;
work.fills = [];
home.appendChild(work);
createdNodeIds.push(work.id);

const intro = figma.createFrame();
intro.layoutMode = "HORIZONTAL";
intro.primaryAxisSizingMode = "AUTO";
intro.counterAxisSizingMode = "AUTO";
intro.itemSpacing = 24;
intro.fills = [];
work.appendChild(intro);
createdNodeIds.push(intro.id);

const leftLabel = makeText("Selected work", font, 11, {
  uppercase: true,
  letterSpacing: 2.6,
});
const headline = makeText("An index,\nnot a feed.", font, 86, {
  uppercase: true,
  letterSpacing: -4,
  lineHeight: 78,
});
intro.appendChild(leftLabel);
intro.appendChild(headline);
createdNodeIds.push(leftLabel.id, headline.id);

const rows = [
  ["01", "Medications", "Enterprise EHR", "Structured medication workflows for clinicians across complex charting states.", 0.14],
  ["02", "Outside sources", "Clinical data model", "A scalable UX model for external data across chart components and clinical review surfaces.", 0],
  ["03", "Specimen collection", "Workflow design", "Reduced ambiguity in collection, routing, and documentation through clearer task sequencing.", 0],
];

for (const [index, title, type, summary, yellowOpacity] of rows) {
  const row = figma.createFrame();
  row.name = `${index} ${title}`;
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "FIXED";
  row.counterAxisSizingMode = "AUTO";
  row.resize(1360, 132);
  row.paddingLeft = 16;
  row.paddingRight = 16;
  row.paddingTop = 16;
  row.paddingBottom = 16;
  row.itemSpacing = 24;
  row.strokes = [rgba("#0F1115", 0.16)];
  row.fills = yellowOpacity ? [rgba("#F2C94C", yellowOpacity)] : [];
  work.appendChild(row);
  createdNodeIds.push(row.id);

  const a = makeText(index, font, 11, { uppercase: true, letterSpacing: 2.4, opacity: 0.55 });
  a.resize(96, a.height);
  const bWrap = figma.createFrame();
  bWrap.layoutMode = "VERTICAL";
  bWrap.primaryAxisSizingMode = "AUTO";
  bWrap.counterAxisSizingMode = "AUTO";
  bWrap.fills = [];
  bWrap.itemSpacing = 4;
  const b1 = makeText(title, font, 44, { uppercase: true, letterSpacing: -1.5, lineHeight: 44 });
  const b2 = makeText(type, font, 11, { uppercase: true, letterSpacing: 2.2, opacity: 0.52 });
  bWrap.appendChild(b1);
  bWrap.appendChild(b2);
  const c = makeText(summary, font, 16, { lineHeight: 26, opacity: 0.72 });
  c.resize(520, c.height);
  const d = makeText("↗", font, 24, {});
  row.appendChild(a);
  row.appendChild(bWrap);
  row.appendChild(c);
  row.appendChild(d);
  createdNodeIds.push(a.id, bWrap.id, b1.id, b2.id, c.id, d.id);
}

const about = figma.createFrame();
about.name = "About";
about.layoutMode = "VERTICAL";
about.primaryAxisSizingMode = "AUTO";
about.counterAxisSizingMode = "FIXED";
about.resize(1440, 360);
about.paddingLeft = 40;
about.paddingRight = 40;
about.paddingTop = 40;
about.paddingBottom = 48;
about.itemSpacing = 24;
about.strokes = [rgba("#0F1115", 0.16)];
about.strokeTopWeight = 0;
about.strokeLeftWeight = 0;
about.strokeRightWeight = 0;
about.strokeBottomWeight = 1;
about.fills = [];
home.appendChild(about);
createdNodeIds.push(about.id);

const aboutLabel = makeText("About", font, 11, { uppercase: true, letterSpacing: 2.6 });
const aboutBody = makeText(
  "I design structured interfaces for complex products. My work centers on workflow clarity, reusable systems, and decisions that scale beyond a single screen.",
  font,
  36,
  { lineHeight: 48 }
);
aboutBody.resize(980, aboutBody.height);
about.appendChild(aboutLabel);
about.appendChild(aboutBody);
createdNodeIds.push(aboutLabel.id, aboutBody.id);

const tags = figma.createFrame();
tags.name = "About Tags";
tags.layoutMode = "HORIZONTAL";
tags.layoutWrap = "WRAP";
tags.primaryAxisSizingMode = "FIXED";
tags.counterAxisSizingMode = "AUTO";
tags.resize(1360, 80);
tags.itemSpacing = 12;
tags.counterAxisSpacing = 12;
tags.fills = [];
about.appendChild(tags);
createdNodeIds.push(tags.id);

const tagNames = [
  "Function over form",
  "Simplicity",
  "Scalability",
  "Precision",
  "Clarity",
  "Accessibility",
];
const tints = [
  rgba("#1B73BD", 0.08),
  rgba("#C84C2A", 0.08),
  rgba("#F2C94C", 0.18),
];

tagNames.forEach((name, idx) => {
  const tag = figma.createFrame();
  tag.layoutMode = "HORIZONTAL";
  tag.primaryAxisSizingMode = "AUTO";
  tag.counterAxisSizingMode = "AUTO";
  tag.paddingLeft = 12;
  tag.paddingRight = 12;
  tag.paddingTop = 10;
  tag.paddingBottom = 10;
  tag.itemSpacing = 8;
  tag.strokes = [rgba("#0F1115", 0.16)];
  tag.fills = [tints[idx % 3]];
  const text = makeText(name, font, 11, { uppercase: true, letterSpacing: 2.2 });
  tag.appendChild(text);
  tags.appendChild(tag);
  createdNodeIds.push(tag.id, text.id);
});

const footer = figma.createFrame();
footer.name = "Footer";
footer.layoutMode = "HORIZONTAL";
footer.primaryAxisSizingMode = "FIXED";
footer.counterAxisSizingMode = "AUTO";
footer.resize(1440, 76);
footer.paddingLeft = 40;
footer.paddingRight = 40;
footer.paddingTop = 20;
footer.paddingBottom = 20;
footer.itemSpacing = 24;
footer.primaryAxisAlignItems = "SPACE_BETWEEN";
footer.strokes = [rgba("#0F1115", 0.16)];
footer.strokeTopWeight = 1;
footer.strokeLeftWeight = 0;
footer.strokeRightWeight = 0;
footer.strokeBottomWeight = 0;
footer.fills = [];
home.appendChild(footer);
createdNodeIds.push(footer.id);

const f1 = makeText("Poster logic translated to web", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.5,
});
const f2 = makeText("Built as a homepage + case study starter system", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.5,
});
footer.appendChild(f1);
footer.appendChild(f2);
createdNodeIds.push(f1.id, f2.id);

return { createdNodeIds, mutatedNodeIds };
```

## 5. Case study: hero + metrics

```js
// Reuse helper functions from step 3.
const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);
const caseStudy = page.findOne((n) => n.id === "CASE_STUDY_ID");
const font = await loadSans();

const createdNodeIds = [];
const mutatedNodeIds = [caseStudy.id];

const hero = figma.createFrame();
hero.name = "Case Hero";
hero.layoutMode = "VERTICAL";
hero.primaryAxisSizingMode = "AUTO";
hero.counterAxisSizingMode = "FIXED";
hero.resize(1440, 760);
hero.paddingLeft = 40;
hero.paddingRight = 40;
hero.paddingTop = 32;
hero.paddingBottom = 40;
hero.itemSpacing = 32;
hero.strokes = [rgba("#0F1115", 0.16)];
hero.strokeTopWeight = 0;
hero.strokeLeftWeight = 0;
hero.strokeRightWeight = 0;
hero.strokeBottomWeight = 1;
hero.fills = [];
caseStudy.appendChild(hero);
createdNodeIds.push(hero.id);

const back = figma.createFrame();
back.name = "Back Button";
back.layoutMode = "HORIZONTAL";
back.primaryAxisSizingMode = "AUTO";
back.counterAxisSizingMode = "AUTO";
back.paddingLeft = 16;
back.paddingRight = 16;
back.paddingTop = 14;
back.paddingBottom = 14;
back.itemSpacing = 8;
back.strokes = [rgba("#0F1115", 0.16)];
back.fills = [];
const backText = makeText("Back to index", font, 12, { uppercase: true, letterSpacing: 2.2 });
back.appendChild(backText);
hero.appendChild(back);
createdNodeIds.push(back.id, backText.id);

const row = figma.createFrame();
row.layoutMode = "HORIZONTAL";
row.primaryAxisSizingMode = "AUTO";
row.counterAxisSizingMode = "AUTO";
row.itemSpacing = 32;
row.fills = [];
hero.appendChild(row);
createdNodeIds.push(row.id);

const left = figma.createFrame();
left.layoutMode = "VERTICAL";
left.primaryAxisSizingMode = "AUTO";
left.counterAxisSizingMode = "AUTO";
left.fills = [];
left.itemSpacing = 24;
row.appendChild(left);
createdNodeIds.push(left.id);

const label = makeText("Case study / enterprise EHR / 2025", font, 11, {
  uppercase: true,
  letterSpacing: 2.6,
});
const title = makeText("Medications", font, 132, {
  uppercase: true,
  letterSpacing: -8,
  lineHeight: 110,
});
const hook = makeText(
  "Designing safer, more scalable medication workflows for clinicians working inside high-pressure environments.",
  font,
  28,
  { lineHeight: 40, opacity: 0.78 }
);
hook.resize(720, hook.height);
left.appendChild(label);
left.appendChild(title);
left.appendChild(hook);
createdNodeIds.push(label.id, title.id, hook.id);

const metrics = figma.createFrame();
metrics.name = "Metrics";
metrics.layoutMode = "VERTICAL";
metrics.primaryAxisSizingMode = "AUTO";
metrics.counterAxisSizingMode = "FIXED";
metrics.resize(360, 420);
metrics.fills = [];
metrics.itemSpacing = 12;
row.appendChild(metrics);
createdNodeIds.push(metrics.id);

[
  ["Focus", "Medication safety", 0],
  ["Users", "Physicians / nurses", 1],
  ["Role", "Principal UX Designer", 2],
  ["Lens", "Systems + workflow clarity", 0],
].forEach(([a, b, tint]) => {
  const card = figma.createFrame();
  card.layoutMode = "HORIZONTAL";
  card.primaryAxisSizingMode = "FIXED";
  card.counterAxisSizingMode = "AUTO";
  card.resize(360, 84);
  card.paddingLeft = 16;
  card.paddingRight = 16;
  card.paddingTop = 16;
  card.paddingBottom = 16;
  card.itemSpacing = 16;
  card.strokes = [rgba("#0F1115", 0.16)];
  card.fills = tint === 1 ? [rgba("#1B73BD", 0.08)] : tint === 2 ? [rgba("#C84C2A", 0.08)] : [];
  const l = makeText(a, font, 10, { uppercase: true, letterSpacing: 2.2, opacity: 0.45 });
  l.resize(92, l.height);
  const v = makeText(b, font, 14, { lineHeight: 24 });
  card.appendChild(l);
  card.appendChild(v);
  metrics.appendChild(card);
  createdNodeIds.push(card.id, l.id, v.id);
});

return { createdNodeIds, mutatedNodeIds };
```

## 6. Case study: problem + process

```js
// Reuse helper functions from step 3.
const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);
const caseStudy = page.findOne((n) => n.id === "CASE_STUDY_ID");
const font = await loadSans();

const createdNodeIds = [];
const mutatedNodeIds = [caseStudy.id];

function labeledTextSection(name, labelText, bodyText) {
  const section = figma.createFrame();
  section.name = name;
  section.layoutMode = "HORIZONTAL";
  section.primaryAxisSizingMode = "FIXED";
  section.counterAxisSizingMode = "AUTO";
  section.resize(1440, 240);
  section.paddingLeft = 40;
  section.paddingRight = 40;
  section.paddingTop = 40;
  section.paddingBottom = 40;
  section.itemSpacing = 32;
  section.strokes = [rgba("#0F1115", 0.16)];
  section.strokeTopWeight = 0;
  section.strokeLeftWeight = 0;
  section.strokeRightWeight = 0;
  section.strokeBottomWeight = 1;
  section.fills = [];
  const label = makeText(labelText, font, 11, { uppercase: true, letterSpacing: 2.6 });
  label.resize(240, label.height);
  const body = makeText(bodyText, font, 36, { lineHeight: 46 });
  body.resize(920, body.height);
  section.appendChild(label);
  section.appendChild(body);
  createdNodeIds.push(section.id, label.id, body.id);
  return section;
}

caseStudy.appendChild(
  labeledTextSection(
    "Problem",
    "Problem",
    "Medication-related workflows were fragmented across states, surfaces, and edge cases. The product needed clearer structure, stronger consistency, and a model that could scale without increasing cognitive load."
  )
);

const process = figma.createFrame();
process.name = "Process";
process.layoutMode = "HORIZONTAL";
process.primaryAxisSizingMode = "FIXED";
process.counterAxisSizingMode = "AUTO";
process.resize(1440, 500);
process.paddingLeft = 40;
process.paddingRight = 40;
process.paddingTop = 40;
process.paddingBottom = 40;
process.itemSpacing = 32;
process.strokes = [rgba("#0F1115", 0.16)];
process.strokeTopWeight = 0;
process.strokeLeftWeight = 0;
process.strokeRightWeight = 0;
process.strokeBottomWeight = 1;
process.fills = [];
caseStudy.appendChild(process);
createdNodeIds.push(process.id);

const label = makeText("Process", font, 11, { uppercase: true, letterSpacing: 2.6 });
label.resize(240, label.height);
process.appendChild(label);
createdNodeIds.push(label.id);

const list = figma.createFrame();
list.layoutMode = "VERTICAL";
list.primaryAxisSizingMode = "AUTO";
list.counterAxisSizingMode = "FIXED";
list.resize(1088, 400);
list.itemSpacing = 16;
list.fills = [];
process.appendChild(list);
createdNodeIds.push(list.id);

[
  "Mapped the full medication workflow and identified repeated structural patterns instead of solving screen by screen.",
  "Defined reusable interaction rules for states, metadata, hierarchy, and interruptions.",
  "Worked with product and engineering to tighten handoff quality and reduce ambiguity during implementation.",
].forEach((text, idx) => {
  const row = figma.createFrame();
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "FIXED";
  row.counterAxisSizingMode = "AUTO";
  row.resize(1088, 110);
  row.paddingLeft = 20;
  row.paddingRight = 20;
  row.paddingTop = 20;
  row.paddingBottom = 20;
  row.itemSpacing = 24;
  row.strokes = [rgba("#0F1115", 0.16)];
  row.fills = [];
  const num = makeText(`0${idx + 1}`, font, 11, { uppercase: true, letterSpacing: 2.4, opacity: 0.48 });
  num.resize(72, num.height);
  const body = makeText(text, font, 18, { lineHeight: 30, opacity: 0.78 });
  body.resize(880, body.height);
  row.appendChild(num);
  row.appendChild(body);
  list.appendChild(row);
  createdNodeIds.push(row.id, num.id, body.id);
});

return { createdNodeIds, mutatedNodeIds };
```

## 7. Case study: layout proof + outcome + footer

```js
// Reuse helper functions from step 3.
const page = figma.root.children.find((p) => p.name === "Page 1");
await figma.setCurrentPageAsync(page);
const caseStudy = page.findOne((n) => n.id === "CASE_STUDY_ID");
const font = await loadSans();

const createdNodeIds = [];
const mutatedNodeIds = [caseStudy.id];

const proof = figma.createFrame();
proof.name = "Layout Proof";
proof.layoutMode = "HORIZONTAL";
proof.primaryAxisSizingMode = "FIXED";
proof.counterAxisSizingMode = "AUTO";
proof.resize(1440, 720);
proof.paddingLeft = 40;
proof.paddingRight = 40;
proof.paddingTop = 40;
proof.paddingBottom = 40;
proof.itemSpacing = 32;
proof.strokes = [rgba("#0F1115", 0.16)];
proof.strokeTopWeight = 0;
proof.strokeLeftWeight = 0;
proof.strokeRightWeight = 0;
proof.strokeBottomWeight = 1;
proof.fills = [];
caseStudy.appendChild(proof);
createdNodeIds.push(proof.id);

const proofLabel = makeText("Layout proof", font, 11, { uppercase: true, letterSpacing: 2.6 });
proofLabel.resize(240, proofLabel.height);
proof.appendChild(proofLabel);
createdNodeIds.push(proofLabel.id);

const proofContent = figma.createFrame();
proofContent.layoutMode = "HORIZONTAL";
proofContent.primaryAxisSizingMode = "AUTO";
proofContent.counterAxisSizingMode = "AUTO";
proofContent.itemSpacing = 16;
proofContent.fills = [];
proof.appendChild(proofContent);
createdNodeIds.push(proofContent.id);

const concept = figma.createFrame();
concept.name = "Annotated concept frame";
concept.resize(680, 520);
concept.strokes = [rgba("#0F1115", 0.16)];
concept.fills = [{ type: "SOLID", color: hex("#E8E6E3") }];
concept.clipsContent = true;
proofContent.appendChild(concept);
createdNodeIds.push(concept.id);

const conceptLabel = makeText("Annotated concept frame", font, 10, {
  uppercase: true,
  letterSpacing: 2.6,
  opacity: 0.5,
});
conceptLabel.x = 24;
conceptLabel.y = 24;
concept.appendChild(conceptLabel);

const conceptTitle = makeText("Clear\nsystems", font, 96, {
  uppercase: true,
  letterSpacing: -4,
  lineHeight: 86,
});
conceptTitle.x = 24;
conceptTitle.y = 72;
concept.appendChild(conceptTitle);

const ring = figma.createEllipse();
ring.resize(132, 132);
ring.x = 42;
ring.y = 346;
ring.fills = [];
ring.strokes = [{ type: "SOLID", color: hex("#C84C2A") }];
ring.strokeWeight = 12;
concept.appendChild(ring);

const outline = figma.createRectangle();
outline.resize(244, 220);
outline.x = 410;
outline.y = 86;
outline.fills = [];
outline.strokes = [{ type: "SOLID", color: hex("#0F1115") }];
outline.strokeWeight = 2;
concept.appendChild(outline);

const note = makeText("Type as structure", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.55,
});
note.x = 468;
note.y = 436;
concept.appendChild(note);
createdNodeIds.push(conceptLabel.id, conceptTitle.id, ring.id, outline.id, note.id);

const side = figma.createFrame();
side.layoutMode = "VERTICAL";
side.primaryAxisSizingMode = "AUTO";
side.counterAxisSizingMode = "FIXED";
side.resize(392, 520);
side.itemSpacing = 16;
side.fills = [];
proofContent.appendChild(side);
createdNodeIds.push(side.id);

[
  ["Key moves", [
    "Overscaled typography as the primary compositional object.",
    "Asymmetric blocks anchored by a strict invisible grid.",
    "Accent colors limited to hierarchy and orientation."
  ]],
  ["Guardrails", [
    "Readable line lengths and stable DOM order.",
    "Visible focus states and reduced-motion-safe transitions.",
    "Every expressive move must still support scanning."
  ]]
].forEach(([title, items]) => {
  const card = figma.createFrame();
  card.layoutMode = "VERTICAL";
  card.primaryAxisSizingMode = "AUTO";
  card.counterAxisSizingMode = "FIXED";
  card.resize(392, 252);
  card.paddingLeft = 20;
  card.paddingRight = 20;
  card.paddingTop = 20;
  card.paddingBottom = 20;
  card.itemSpacing = 16;
  card.strokes = [rgba("#0F1115", 0.16)];
  card.fills = [];
  const t = makeText(title, font, 10, { uppercase: true, letterSpacing: 2.2, opacity: 0.45 });
  card.appendChild(t);
  createdNodeIds.push(card.id, t.id);
  items.forEach((item) => {
    const line = makeText(item, font, 14, { lineHeight: 24, opacity: 0.76 });
    line.resize(352, line.height);
    card.appendChild(line);
    createdNodeIds.push(line.id);
  });
  side.appendChild(card);
});

const outcome = figma.createFrame();
outcome.name = "Outcome";
outcome.layoutMode = "HORIZONTAL";
outcome.primaryAxisSizingMode = "FIXED";
outcome.counterAxisSizingMode = "AUTO";
outcome.resize(1440, 320);
outcome.paddingLeft = 40;
outcome.paddingRight = 40;
outcome.paddingTop = 40;
outcome.paddingBottom = 40;
outcome.itemSpacing = 32;
outcome.fills = [];
caseStudy.appendChild(outcome);
createdNodeIds.push(outcome.id);

const oLabel = makeText("Outcome", font, 11, { uppercase: true, letterSpacing: 2.6 });
oLabel.resize(240, oLabel.height);
outcome.appendChild(oLabel);
createdNodeIds.push(oLabel.id);

const oList = figma.createFrame();
oList.layoutMode = "VERTICAL";
oList.primaryAxisSizingMode = "AUTO";
oList.counterAxisSizingMode = "FIXED";
oList.resize(1088, 240);
oList.itemSpacing = 16;
oList.fills = [];
outcome.appendChild(oList);
createdNodeIds.push(oList.id);

[
  "More consistent interaction patterns across related flows.",
  "Stronger system thinking in the UI model and component usage.",
  "Better alignment between design intent and engineering delivery.",
].forEach((item) => {
  const row = figma.createFrame();
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "FIXED";
  row.counterAxisSizingMode = "AUTO";
  row.resize(1088, 72);
  row.paddingLeft = 16;
  row.paddingRight = 16;
  row.paddingTop = 16;
  row.paddingBottom = 16;
  row.itemSpacing = 12;
  row.strokes = [rgba("#0F1115", 0.16)];
  row.fills = [];
  const dash = makeText("-", font, 18, {});
  const text = makeText(item, font, 16, { lineHeight: 28, opacity: 0.78 });
  row.appendChild(dash);
  row.appendChild(text);
  oList.appendChild(row);
  createdNodeIds.push(row.id, dash.id, text.id);
});

const footer = figma.createFrame();
footer.name = "Footer";
footer.layoutMode = "HORIZONTAL";
footer.primaryAxisSizingMode = "FIXED";
footer.counterAxisSizingMode = "AUTO";
footer.resize(1440, 76);
footer.paddingLeft = 40;
footer.paddingRight = 40;
footer.paddingTop = 20;
footer.paddingBottom = 20;
footer.primaryAxisAlignItems = "SPACE_BETWEEN";
footer.strokes = [rgba("#0F1115", 0.16)];
footer.strokeTopWeight = 1;
footer.strokeLeftWeight = 0;
footer.strokeRightWeight = 0;
footer.strokeBottomWeight = 0;
footer.fills = [];
caseStudy.appendChild(footer);
createdNodeIds.push(footer.id);

const f1 = makeText("Poster logic translated to web", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.5,
});
const f2 = makeText("Built as a homepage + case study starter system", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.5,
});
footer.appendChild(f1);
footer.appendChild(f2);
createdNodeIds.push(f1.id, f2.id);

return { createdNodeIds, mutatedNodeIds };
```

## Screenshot checkpoints

After each write step, capture:
- `Homepage` after step 3
- `Homepage` after step 4
- `Case Study - Medications` after step 5
- `Case Study - Medications` after step 6
- `Case Study - Medications` after step 7
