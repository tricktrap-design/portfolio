# Incremental `use_figma` Scripts: About Page

Prepared for:
- File key: `XpCvoZwIGbPcBYbtjFtJRs`
- Target page node: `0:1`
- Figma URL: `https://www.figma.com/design/XpCvoZwIGbPcBYbtjFtJRs/Portfolio?node-id=0-1`

Current file state verified on 2026-04-15:
- `Portfolio / Home`
- `Portfolio / Case Study`
- `Portfolio / Infusion Management`
- No dedicated About screen yet

Source of truth:
- `src/components/BauhausPortfolioPrototype.tsx`
- Current Figma visual language already established in `Portfolio / Home`

Notes:
- These scripts are written for incremental `use_figma` execution.
- Replace placeholder IDs from earlier returns into later scripts.
- After each write, run a screenshot on the returned top-level frame or section.
- This recreates the full About page from the website, not the homepage About strip.

## 1. Inspect the page and confirm placement

```js
const page =
  figma.root.children.find((p) => p.id === "0:1") ||
  figma.root.children.find((p) => p.name === "Version 1") ||
  figma.root.children[0];
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

const rightmost = children.reduce((max, node) => Math.max(max, node.x + node.width), 0);

return {
  pageId: page.id,
  childCount: children.length,
  rightmost,
  children,
};
```

## 2. Create the About screen wrapper

```js
function hex(hexValue) {
  const v = hexValue.replace("#", "");
  return {
    r: parseInt(v.slice(0, 2), 16) / 255,
    g: parseInt(v.slice(2, 4), 16) / 255,
    b: parseInt(v.slice(4, 6), 16) / 255,
  };
}

const page =
  figma.root.children.find((p) => p.id === "0:1") ||
  figma.root.children.find((p) => p.name === "Version 1") ||
  figma.root.children[0];
await figma.setCurrentPageAsync(page);

let maxX = 0;
for (const child of page.children) {
  maxX = Math.max(maxX, child.x + child.width);
}

const about = figma.createFrame();
about.name = "Portfolio / About";
about.layoutMode = "VERTICAL";
about.primaryAxisSizingMode = "AUTO";
about.counterAxisSizingMode = "FIXED";
about.resize(1512, 100);
about.itemSpacing = 0;
about.fills = [{ type: "SOLID", color: hex("#E8E6E3") }];
about.x = maxX + 240;
about.y = 0;

page.appendChild(about);

return {
  createdNodeIds: [about.id],
  mutatedNodeIds: [page.id],
  aboutFrameId: about.id,
};
```

## 3. Build header, left rail, shell, and footer

```js
function hex(hexValue) {
  const v = hexValue.replace("#", "");
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
  node.fills = [
    {
      type: "SOLID",
      color: options.color || hex("#0F1115"),
      opacity: options.opacity ?? 1,
    },
  ];
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

function pill(label, font, active) {
  const frame = figma.createFrame();
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingLeft = 16;
  frame.paddingRight = 16;
  frame.paddingTop = 10;
  frame.paddingBottom = 10;
  frame.itemSpacing = 8;
  frame.cornerRadius = 999;
  frame.strokes = [
    {
      type: "SOLID",
      color: hex("#0F1115"),
      opacity: active ? 1 : 0.16,
    },
  ];
  frame.fills = [
    {
      type: "SOLID",
      color: active ? hex("#0F1115") : hex("#E8E6E3"),
      opacity: 1,
    },
  ];
  const text = makeText(label, font, 12, {
    uppercase: true,
    letterSpacing: 2.2,
    color: active ? hex("#E8E6E3") : hex("#0F1115"),
  });
  frame.appendChild(text);
  return { frame, text };
}

function tag(label, font, background) {
  const frame = figma.createFrame();
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingLeft = 12;
  frame.paddingRight = 12;
  frame.paddingTop = 10;
  frame.paddingBottom = 10;
  frame.itemSpacing = 8;
  frame.strokes = [rgba("#0F1115", 0.16)];
  frame.fills = [background];

  const dot = figma.createEllipse();
  dot.resize(12, 12);
  dot.fills = [rgba("#0F1115", 0.85)];

  const text = makeText(label, font, 11, {
    uppercase: true,
    letterSpacing: 2.2,
  });

  frame.appendChild(dot);
  frame.appendChild(text);
  return { frame, dot, text };
}

const page =
  figma.root.children.find((p) => p.id === "0:1") ||
  figma.root.children.find((p) => p.name === "Version 1") ||
  figma.root.children[0];
await figma.setCurrentPageAsync(page);

const about = page.findOne((n) => n.id === "ABOUT_FRAME_ID");
const font = await loadSans();

const createdNodeIds = [];
const mutatedNodeIds = [about.id];

const header = figma.createFrame();
header.name = "Header";
header.layoutMode = "HORIZONTAL";
header.primaryAxisSizingMode = "FIXED";
header.counterAxisSizingMode = "AUTO";
header.resize(1512, 88);
header.paddingLeft = 40;
header.paddingRight = 40;
header.paddingTop = 24;
header.paddingBottom = 20;
header.itemSpacing = 24;
header.primaryAxisAlignItems = "SPACE_BETWEEN";
header.strokes = [rgba("#0F1115", 0.16)];
header.strokeTopWeight = 0;
header.strokeLeftWeight = 0;
header.strokeRightWeight = 0;
header.strokeBottomWeight = 1;
header.fills = [rgba("#E8E6E3", 0.84)];
about.appendChild(header);
createdNodeIds.push(header.id);

const brand = figma.createFrame();
brand.layoutMode = "VERTICAL";
brand.primaryAxisSizingMode = "AUTO";
brand.counterAxisSizingMode = "AUTO";
brand.itemSpacing = 4;
brand.fills = [];
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
nav.layoutMode = "HORIZONTAL";
nav.primaryAxisSizingMode = "AUTO";
nav.counterAxisSizingMode = "AUTO";
nav.itemSpacing = 8;
nav.fills = [];
header.appendChild(nav);
createdNodeIds.push(nav.id);

[
  ["Index", false],
  ["Case study", false],
  ["About", true],
].forEach(([label, active]) => {
  const result = pill(label, font, active);
  nav.appendChild(result.frame);
  createdNodeIds.push(result.frame.id, result.text.id);
});

const main = figma.createFrame();
main.name = "About Main";
main.layoutMode = "HORIZONTAL";
main.primaryAxisSizingMode = "FIXED";
main.counterAxisSizingMode = "AUTO";
main.resize(1512, 100);
main.paddingLeft = 40;
main.paddingRight = 40;
main.paddingTop = 48;
main.paddingBottom = 56;
main.itemSpacing = 64;
main.fills = [];
about.appendChild(main);
createdNodeIds.push(main.id);

const left = figma.createFrame();
left.name = "About Left Rail";
left.layoutMode = "VERTICAL";
left.primaryAxisSizingMode = "AUTO";
left.counterAxisSizingMode = "FIXED";
left.resize(520, 100);
left.itemSpacing = 24;
left.fills = [];
main.appendChild(left);
createdNodeIds.push(left.id);

const labelRow = figma.createFrame();
labelRow.layoutMode = "HORIZONTAL";
labelRow.primaryAxisSizingMode = "AUTO";
labelRow.counterAxisSizingMode = "AUTO";
labelRow.itemSpacing = 10;
labelRow.fills = [];
left.appendChild(labelRow);
createdNodeIds.push(labelRow.id);

const labelMark = makeText("−", font, 14, { opacity: 0.75 });
const labelText = makeText("About me", font, 11, {
  uppercase: true,
  letterSpacing: 2.4,
  opacity: 0.58,
});
labelRow.appendChild(labelMark);
labelRow.appendChild(labelText);
createdNodeIds.push(labelMark.id, labelText.id);

const name = makeText("Emilio Arboleya", font, 112, {
  uppercase: true,
  letterSpacing: -5.5,
  lineHeight: 100,
});
name.resize(520, name.height);
left.appendChild(name);
createdNodeIds.push(name.id);

const intro = makeText(
  "I design systems for complex products and lead teams to build them. I'm a Principal UX Designer focused on making enterprise software clear, scalable, and consistent.",
  font,
  32,
  { lineHeight: 43, opacity: 0.74 }
);
intro.resize(460, intro.height);
left.appendChild(intro);
createdNodeIds.push(intro.id);

const supporting = makeText(
  "I have 9+ years of experience across B2B SaaS and enterprise products in healthcare, financial, education, and security industries, where usability affects safety, compliance, and daily operations.",
  font,
  18,
  { lineHeight: 32, opacity: 0.66 }
);
supporting.resize(500, supporting.height);
left.appendChild(supporting);
createdNodeIds.push(supporting.id);

const metaWrap = figma.createFrame();
metaWrap.name = "Meta";
metaWrap.layoutMode = "HORIZONTAL";
metaWrap.layoutWrap = "WRAP";
metaWrap.primaryAxisSizingMode = "FIXED";
metaWrap.counterAxisSizingMode = "AUTO";
metaWrap.resize(520, 100);
metaWrap.itemSpacing = 12;
metaWrap.counterAxisSpacing = 12;
metaWrap.fills = [];
left.appendChild(metaWrap);
createdNodeIds.push(metaWrap.id);

[
  "Mexico City",
  "Spanish + English",
  "Design systems + product strategy",
].forEach((item) => {
  const frame = figma.createFrame();
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingLeft = 12;
  frame.paddingRight = 12;
  frame.paddingTop = 10;
  frame.paddingBottom = 10;
  frame.itemSpacing = 8;
  frame.strokes = [rgba("#0F1115", 0.16)];
  frame.fills = [];
  const text = makeText(item, font, 11, {
    uppercase: true,
    letterSpacing: 2.2,
  });
  frame.appendChild(text);
  metaWrap.appendChild(frame);
  createdNodeIds.push(frame.id, text.id);
});

const cv = figma.createFrame();
cv.name = "Download CV";
cv.layoutMode = "HORIZONTAL";
cv.primaryAxisSizingMode = "AUTO";
cv.counterAxisSizingMode = "AUTO";
cv.itemSpacing = 10;
cv.fills = [];
left.appendChild(cv);
createdNodeIds.push(cv.id);

const cvText = makeText("Download CV", font, 20, {});
const cvArrow = makeText("↗", font, 18, {});
cv.appendChild(cvText);
cv.appendChild(cvArrow);
createdNodeIds.push(cvText.id, cvArrow.id);

const lower = figma.createFrame();
lower.name = "Expertise + Education";
lower.layoutMode = "VERTICAL";
lower.primaryAxisSizingMode = "AUTO";
lower.counterAxisSizingMode = "FIXED";
lower.resize(520, 100);
lower.paddingTop = 32;
lower.itemSpacing = 28;
lower.strokes = [rgba("#0F1115", 0.08)];
lower.strokeTopWeight = 1;
lower.strokeLeftWeight = 0;
lower.strokeRightWeight = 0;
lower.strokeBottomWeight = 0;
lower.fills = [];
left.appendChild(lower);
createdNodeIds.push(lower.id);

const expertiseBlock = figma.createFrame();
expertiseBlock.layoutMode = "VERTICAL";
expertiseBlock.primaryAxisSizingMode = "AUTO";
expertiseBlock.counterAxisSizingMode = "FIXED";
expertiseBlock.resize(520, 100);
expertiseBlock.itemSpacing = 16;
expertiseBlock.fills = [];
lower.appendChild(expertiseBlock);
createdNodeIds.push(expertiseBlock.id);

const expertiseLabel = makeText("Expertise", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.48,
});
expertiseBlock.appendChild(expertiseLabel);
createdNodeIds.push(expertiseLabel.id);

const expertiseWrap = figma.createFrame();
expertiseWrap.layoutMode = "HORIZONTAL";
expertiseWrap.layoutWrap = "WRAP";
expertiseWrap.primaryAxisSizingMode = "FIXED";
expertiseWrap.counterAxisSizingMode = "AUTO";
expertiseWrap.resize(520, 100);
expertiseWrap.itemSpacing = 10;
expertiseWrap.counterAxisSpacing = 10;
expertiseWrap.fills = [];
expertiseBlock.appendChild(expertiseWrap);
createdNodeIds.push(expertiseWrap.id);

const tints = [
  rgba("#1B73BD", 0.08),
  rgba("#C84C2A", 0.08),
  rgba("#F2C94C", 0.18),
];

[
  "Product design",
  "Research strategy",
  "Design systems",
  "Systems thinking",
  "Information architecture",
  "Usability testing",
  "Data visualization",
  "AI-enabled prototyping",
].forEach((item, idx) => {
  const result = tag(item, font, tints[idx % 3]);
  expertiseWrap.appendChild(result.frame);
  createdNodeIds.push(result.frame.id, result.dot.id, result.text.id);
});

const educationBlock = figma.createFrame();
educationBlock.layoutMode = "VERTICAL";
educationBlock.primaryAxisSizingMode = "AUTO";
educationBlock.counterAxisSizingMode = "FIXED";
educationBlock.resize(520, 100);
educationBlock.itemSpacing = 16;
educationBlock.fills = [];
lower.appendChild(educationBlock);
createdNodeIds.push(educationBlock.id);

const educationLabel = makeText("Education", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.48,
});
educationBlock.appendChild(educationLabel);
createdNodeIds.push(educationLabel.id);

[
  "C2 Proficient English Certificate — EF Set, 2021",
  "Interaction Design Specialization — UC San Diego, 2020",
  "Graphic Design degree — Universidad de Ecatepec, 2015–2018",
].forEach((item) => {
  const text = makeText(item, font, 16, {
    lineHeight: 28,
    opacity: 0.68,
  });
  text.resize(520, text.height);
  educationBlock.appendChild(text);
  createdNodeIds.push(text.id);
});

const right = figma.createFrame();
right.name = "About Timeline";
right.layoutMode = "VERTICAL";
right.primaryAxisSizingMode = "AUTO";
right.counterAxisSizingMode = "FIXED";
right.resize(848, 100);
right.itemSpacing = 0;
right.fills = [];
main.appendChild(right);
createdNodeIds.push(right.id);

const footer = figma.createFrame();
footer.name = "Footer";
footer.layoutMode = "HORIZONTAL";
footer.primaryAxisSizingMode = "FIXED";
footer.counterAxisSizingMode = "AUTO";
footer.resize(1512, 56);
footer.paddingLeft = 40;
footer.paddingRight = 40;
footer.paddingTop = 20;
footer.paddingBottom = 20;
footer.primaryAxisAlignItems = "SPACE_BETWEEN";
footer.itemSpacing = 24;
footer.strokes = [rgba("#0F1115", 0.16)];
footer.strokeTopWeight = 1;
footer.strokeLeftWeight = 0;
footer.strokeRightWeight = 0;
footer.strokeBottomWeight = 0;
footer.fills = [];
about.appendChild(footer);
createdNodeIds.push(footer.id);

const footerLeft = figma.createFrame();
footerLeft.layoutMode = "HORIZONTAL";
footerLeft.primaryAxisSizingMode = "AUTO";
footerLeft.counterAxisSizingMode = "AUTO";
footerLeft.itemSpacing = 8;
footerLeft.fills = [];
footer.appendChild(footerLeft);
createdNodeIds.push(footerLeft.id);

const footerIcon = makeText("▦", font, 12, { opacity: 0.5 });
const footerA = makeText("Poster logic translated to web", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.5,
});
const footerB = makeText("Built as a homepage + case study starter system", font, 11, {
  uppercase: true,
  letterSpacing: 2.2,
  opacity: 0.5,
});
footerLeft.appendChild(footerIcon);
footerLeft.appendChild(footerA);
footer.appendChild(footerB);
createdNodeIds.push(footerIcon.id, footerA.id, footerB.id);

return {
  createdNodeIds,
  mutatedNodeIds,
  timelineContainerId: right.id,
};
```

## 4. Add the timeline entries

```js
function hex(hexValue) {
  const v = hexValue.replace("#", "");
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
  node.fills = [
    {
      type: "SOLID",
      color: options.color || hex("#0F1115"),
      opacity: options.opacity ?? 1,
    },
  ];
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

function bullet(font, textValue) {
  const row = figma.createFrame();
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "FIXED";
  row.counterAxisSizingMode = "AUTO";
  row.resize(412, 10);
  row.itemSpacing = 12;
  row.fills = [];

  const plus = makeText("+", font, 18, { opacity: 0.42 });
  const text = makeText(textValue, font, 16, {
    lineHeight: 28,
    opacity: 0.72,
  });
  text.resize(388, text.height);

  row.appendChild(plus);
  row.appendChild(text);
  return { row, plus, text };
}

function timelineEntry(font, item, isFirst) {
  const entry = figma.createFrame();
  entry.name = item.role;
  entry.layoutMode = "VERTICAL";
  entry.primaryAxisSizingMode = "AUTO";
  entry.counterAxisSizingMode = "FIXED";
  entry.resize(848, 100);
  entry.paddingTop = isFirst ? 0 : 32;
  entry.paddingBottom = 32;
  entry.itemSpacing = 24;
  entry.fills = [];
  entry.strokes = [rgba("#0F1115", 0.08)];
  entry.strokeTopWeight = isFirst ? 0 : 1;
  entry.strokeLeftWeight = 0;
  entry.strokeRightWeight = 0;
  entry.strokeBottomWeight = 0;

  const head = figma.createFrame();
  head.layoutMode = "HORIZONTAL";
  head.primaryAxisSizingMode = "FIXED";
  head.counterAxisSizingMode = "AUTO";
  head.resize(848, 10);
  head.primaryAxisAlignItems = "SPACE_BETWEEN";
  head.itemSpacing = 24;
  head.fills = [];

  const left = figma.createFrame();
  left.layoutMode = "VERTICAL";
  left.primaryAxisSizingMode = "AUTO";
  left.counterAxisSizingMode = "AUTO";
  left.itemSpacing = 8;
  left.fills = [];

  const role = makeText(item.role, font, 32, {
    letterSpacing: -1.5,
    lineHeight: 36,
  });
  const company = makeText(item.company, font, 26, {
    lineHeight: 32,
    opacity: 0.58,
  });
  left.appendChild(role);
  left.appendChild(company);

  const period = makeText(item.period, font, 21, {
    lineHeight: 28,
    opacity: 0.48,
    alignHorizontal: "RIGHT",
  });
  period.resize(132, period.height);

  head.appendChild(left);
  head.appendChild(period);

  const summary = makeText(item.summary, font, 26, {
    lineHeight: 38,
    opacity: 0.74,
  });
  summary.resize(848, summary.height);

  const columns = figma.createFrame();
  columns.layoutMode = "HORIZONTAL";
  columns.primaryAxisSizingMode = "FIXED";
  columns.counterAxisSizingMode = "AUTO";
  columns.resize(848, 10);
  columns.itemSpacing = 24;
  columns.fills = [];

  const leftCol = figma.createFrame();
  leftCol.layoutMode = "VERTICAL";
  leftCol.primaryAxisSizingMode = "AUTO";
  leftCol.counterAxisSizingMode = "FIXED";
  leftCol.resize(412, 10);
  leftCol.itemSpacing = 12;
  leftCol.fills = [];

  const rightCol = figma.createFrame();
  rightCol.layoutMode = "VERTICAL";
  rightCol.primaryAxisSizingMode = "AUTO";
  rightCol.counterAxisSizingMode = "FIXED";
  rightCol.resize(412, 10);
  rightCol.itemSpacing = 12;
  rightCol.fills = [];

  const split = Math.ceil(item.highlights.length / 2);
  item.highlights.slice(0, split).forEach((textValue) => {
    const row = bullet(font, textValue);
    leftCol.appendChild(row.row);
  });
  item.highlights.slice(split).forEach((textValue) => {
    const row = bullet(font, textValue);
    rightCol.appendChild(row.row);
  });

  columns.appendChild(leftCol);
  columns.appendChild(rightCol);

  entry.appendChild(head);
  entry.appendChild(summary);
  entry.appendChild(columns);

  return entry;
}

const page =
  figma.root.children.find((p) => p.id === "0:1") ||
  figma.root.children.find((p) => p.name === "Version 1") ||
  figma.root.children[0];
await figma.setCurrentPageAsync(page);

const timeline = page.findOne((n) => n.id === "TIMELINE_CONTAINER_ID");
const font = await loadSans();

const items = [
  {
    role: "Principal UX Designer",
    company: "Oracle Health",
    period: "2025 — Present",
    summary:
      "Product design leader for medication workflows inside an enterprise EHR, supporting physicians and nurses in complex critical-care settings.",
    highlights: [
      "Accelerated product delivery by roughly two quarters by establishing structured handoff workflows with engineering and product.",
      "Expanded the design system with 20+ custom components to keep design and implementation aligned.",
      "Defined and prioritized the product roadmap with Product to shift delivery from reactive to proactive.",
      "Increased user satisfaction by 63% in clinician research and validation sessions.",
    ],
  },
  {
    role: "UX Design Lead",
    company: "Globant",
    period: "2020 — 2025",
    summary:
      "Led end-to-end UX strategy across healthcare, security, education, and financial products for clients including Wolters Kluwer, Brivo, Luminus Life Plus, and Fiserv.",
    highlights: [
      "Improved task completion efficiency by 43% after redesigning key healthcare product experiences.",
      "Planned roadmaps, metrics, and research with product and development teams across multiple accounts.",
      "Led designers, stakeholder workshops, and design system maintenance with accessibility standards.",
    ],
  },
];

const createdNodeIds = [];
const mutatedNodeIds = [timeline.id];

items.forEach((item, idx) => {
  const entry = timelineEntry(font, item, idx === 0);
  timeline.appendChild(entry);
  createdNodeIds.push(entry.id);
  entry.findAll(() => true).forEach((node) => createdNodeIds.push(node.id));
});

return {
  createdNodeIds,
  mutatedNodeIds,
};
```

## 5. Validate the screen

Run a screenshot on the About frame returned in step 2. The result should read as:
- same paper/ink/blue/rust/yellow system as `Portfolio / Home`
- active `About` nav pill
- left rail with large name, intro, supporting copy, meta, CV link, expertise, and education
- right rail with two timeline entries and soft dividers
- footer lockup matching the rest of the file
