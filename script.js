const metaItems = [
  ["Approach", "Function over form"],
  ["Mode", "Systems thinking"],
  ["Style", "Poster-driven layout"],
  ["Constraint", "Readable first"],
];

const workItems = [
  {
    id: "infusion-management",
    index: "01",
    year: "2025",
    title: "Infusion management",
    type: "Clinical / EHR",
    summary:
      "A unified acute-care workflow for reviewing, adjusting, administering, and documenting infusions inside Oracle's EHR.",
  },
  {
    id: "outside-sources",
    index: "02",
    year: "2025",
    title: "Outside sources",
    type: "Clinical data model",
    summary:
      "A scalable UX model for external data across chart components and clinical review surfaces.",
  },
  {
    id: "specimen",
    index: "03",
    year: "2024",
    title: "Specimen collection",
    type: "Workflow design",
    summary:
      "Reduced ambiguity in collection, routing, and documentation through clearer task sequencing.",
  },
];

const values = [
  ["Function over form", "blue"],
  ["Simplicity", "rust"],
  ["Scalability", "yellow"],
  ["Precision", "blue"],
  ["Clarity", "rust"],
  ["Accessibility", "yellow"],
];

const caseStudyData = {
  title: "Infusion Management",
  label: "UX case study / clinical / EHR",
  hook:
    "Giving acute care nurses one place to review, adjust, administer, and document all infusion activity, connected to smart pump devices and integrated directly into Oracle's EHR.",
  chips: [
    { label: "Oracle Health", accent: "blue" },
    { label: "Lead UX Designer", accent: "rust" },
    { label: "Acute Care / Clinical Workflow", accent: "yellow" },
    { label: "MVP + bi-weekly iterations", accent: "blue" },
    { label: "Web Application / EHR Plugin", accent: "rust" },
    { label: "Lean / product, engineering, design co-located", accent: "yellow" },
  ],
  heroMetrics: [
    {
      label: "User satisfaction",
      value: "3.2 -> 6.3",
      detail: "Likert scale 0-7, same cohort",
      accent: "plain",
    },
    {
      label: "Task completion time",
      value: "-45%",
      detail: "Complex tasks, prototype vs. legacy baseline",
      accent: "blue",
    },
    {
      label: "Simple task automation",
      value: "100%",
      detail: "Previously manual steps fully eliminated",
      accent: "rust",
    },
  ],
  executiveSummary: [
    {
      label: "The problem",
      text: "Hospitals switching to Oracle's EHR had no path forward without a dedicated infusion management tool. Without it, Oracle risked losing clinical clients to competitors.",
      accent: "plain",
    },
    {
      label: "My role",
      text: "Sole designer through planning and design. I co-led research, owned the stimuli and prototype, and led two designers through handoff.",
      accent: "blue",
    },
    {
      label: "Core decision",
      text: "Treat auto-calculation as the primary design principle so the system computes rates, volumes, waste, and remaining doses from device inputs.",
      accent: "rust",
    },
    {
      label: "Outcome",
      text: "User satisfaction nearly doubled from 3.2 to 6.3. Task completion dropped 45% on complex tasks and simple tasks were fully automated.",
      accent: "plain",
    },
  ],
  strategic: {
    intro:
      "Oracle's EHR had no native infusion management capability. Hospitals and infusion centers managing IV therapies were patching the gap with legacy, standalone tools that could not sync with the EHR.",
    body:
      "Every infusion event required parallel documentation across disconnected systems. This was a product gap with direct retention consequences, not a minor workflow issue. Competing platforms had a working alternative. Oracle did not.",
    constraints: [
      "Timeline was the primary constraint: MVP delivery with two-week iteration cycles.",
      "Smart pump connectivity already existed, so the bottleneck was organizational velocity rather than technical capability.",
      "Clinical accuracy was non-negotiable because ambiguity in dosage, rate, or timing carries patient safety implications.",
    ],
    conclusion:
      "Failure would have meant losing a meaningful segment of clinical clients to competitors that already had infusion management solved. The feature was a retention requirement, not a roadmap ambition.",
    whyItMattered: [
      "Retention risk for hospitals evaluating or onboarding Oracle Health.",
      "No equivalent native capability inside the EHR.",
      "Disconnected systems doubled documentation overhead.",
    ],
  },
  role: {
    owned: [
      "End-to-end design process from problem framing through handoff and design system documentation.",
      "All visual stimuli for research, including every screen, state, and interaction used in clinical testing.",
      "The prototyping approach: a coded demo via Figma Make instead of a standard Figma prototype.",
      "The design roadmap aligned to engineering deadlines and product priorities.",
    ],
    contributed: [
      "Co-led research methodology with a clinical researcher.",
      "Defined what needed to be tested visually while the researcher owned clinical framing and participant access.",
      "Proposed two incremental scope expansions that product and engineering approved without timeline impact.",
    ],
  },
  problemDefinition: {
    known: [
      "Nurses were documenting infusion events manually across separate flows disconnected from device data.",
      "Competing tools had only digitized the manual process rather than rethinking it.",
      "The technical capability to pull data from smart pumps already existed.",
    ],
    uncertain: [
      "How nurses prioritize across 10 to 12 simultaneous infusions.",
      "What belongs in an at-a-glance monitoring view versus a dedicated action workflow.",
      "Where the heaviest burden came from: steps, context switching, or calculation overhead.",
    ],
    method: [
      "Bi-weekly sessions with clinicians specialized in nursing workflows.",
      "Visual stimuli were necessary because interviews alone only surfaced current behaviors.",
      "A coded demo via Figma Make provided the state fidelity needed to test real decision points.",
    ],
    changedDirection: [
      "Nurses needed to know what required attention next, not scan every infusion equally.",
      "With 10 to 12 active infusions, a flat list became cognitive burden rather than support.",
      "The organizing principle shifted from display to triage, making the next best action obvious.",
    ],
  },
  decisions: [
    {
      option:
        "Nurses perform multiple infusion actions across separate documentation flows",
      decision:
        "A single consolidated panel for all infusion-related actions",
      rationale:
        "One panel eliminated context switching and reduced cognitive load regardless of how many infusions were active.",
    },
    {
      option:
        "Nurses calculate rates, volumes, waste, and remaining doses manually",
      decision:
        "Auto-calculate all values from device inputs and nurse-entered data",
      rationale:
        "This shifted calculation responsibility to the system, turning the nurse into a reviewer and removing a class of manual errors.",
    },
    {
      option:
        "All infusion detail presented in a full-page view versus an overview surface",
      decision:
        "A compact widget for overview context, with full-page access preserved",
      rationale:
        "The widget supported situational awareness without pulling nurses out of surrounding clinical context.",
    },
  ],
  revisit: [
    "The widget was the right MVP trade-off, but it surfaced status more than decision support.",
    "Next I would explore whether priority-flagged infusions could surface actionable controls directly in the widget for the highest-urgency cases.",
  ],
  systems: {
    intro:
      "There were no infusion-related components in Oracle's design system before this project. Rather than specify new engineered components under an MVP timeline, the system was built from composite patterns using existing, approved elements.",
    solved: [
      "Future infusion UI needed to feel consistent without teams reverse-engineering hidden decisions.",
      "Engineering could not absorb custom component work during the MVP timeline.",
      "Documentation had to be written for future teams, not only for the current project.",
    ],
    composites: [
      "Infusion list item: a composite of a list item, line progression chart, and information density element.",
      "Status and priority ordering: a triage convention defining clinical urgency as a system rule.",
      "Semantic state layer: color and iconography rules applied consistently across widget, panel, and list views.",
    ],
    handoff: [
      "Led two designers through documenting each composite component, its constituent parts, and its governing rules.",
      "Contributed the work to the broader design system as a new infusion module.",
      "Established a reusable AI-assisted prototyping workflow using Figma Make, guidelines, variables, and component usage rules.",
    ],
  },
  outcomes: [
    {
      label: "User satisfaction",
      value: "3.2 -> 6.3",
      detail: "Likert scale 0-7, same cohort",
      accent: "plain",
    },
    {
      label: "Task completion time",
      value: "-45%",
      detail: "Complex tasks, prototype vs. legacy baseline",
      accent: "blue",
    },
    {
      label: "Simple task automation",
      value: "100%",
      detail: "Previously manual steps fully eliminated",
      accent: "rust",
    },
  ],
  outcomeNote:
    "These results were measured in research conditions using a high-fidelity coded demo, not the shipped product. Post-launch measurement was not instrumented at launch, leaving a meaningful gap between prototype performance and live clinical data.",
  measureNext: [
    "Time-to-action on priority infusions in live clinical settings.",
    "Documentation error rate before and after launch as a patient safety proxy.",
    "Widget interaction rate versus full-panel access to validate whether overview behavior matched intent.",
  ],
  doDifferently: [
    {
      title: "Generative research earlier",
      points: [
        "Run at least one generative research session before the first design milestone.",
        "Earlier observation would have reduced rework on layout assumptions and the triage model.",
      ],
    },
    {
      title: "Measure launch outcomes from day one",
      points: [
        "Define post-launch measurement criteria at the start instead of after research.",
        "Without a production baseline, it is harder to tie design decisions to clinical outcomes and future investment.",
      ],
    },
    {
      title: "Formalize scope expansion",
      points: [
        "Structure how incremental scope additions are surfaced and evaluated during roadmap planning.",
        "The two additions were successful, but they relied too heavily on timing and advocacy.",
      ],
    },
  ],
};

function createMetricCard({ label, value, detail = "", accent = "plain" }) {
  return `
    <article class="metric-card ${accent}">
      <p class="metric-label">${label}</p>
      <div>
        <p class="metric-value">${value}</p>
        ${detail ? `<p class="metric-detail">${detail}</p>` : ""}
      </div>
    </article>
  `;
}

function createBulletItems(items) {
  return items
    .map(
      (item) => `
        <div class="bullet-item">
          <span class="bullet-mark" aria-hidden="true">&bull;</span>
          <p>${item}</p>
        </div>
      `
    )
    .join("");
}

function createBulletCard(title, items) {
  return `
    <article class="bullet-card">
      <p class="eyebrow">${title}</p>
      <div class="bullet-list">${createBulletItems(items)}</div>
    </article>
  `;
}

function renderMeta() {
  const target = document.querySelector("#meta-grid");
  target.innerHTML = metaItems
    .map(
      ([label, value]) => `
        <article class="meta-card">
          <p class="eyebrow">${label}</p>
          <p class="meta-value">${value}</p>
        </article>
      `
    )
    .join("");
}

function renderWork() {
  const target = document.querySelector("#work-list");
  target.innerHTML = workItems
    .map(
      (item, index) => `
        <a class="work-card ${index === 0 ? "is-featured" : ""}" href="#case-study">
          <p class="work-meta">${item.index}</p>
          <div>
            <h3 class="work-title">${item.title}</h3>
            <p class="work-meta">${item.type}</p>
          </div>
          <p class="work-summary">${item.summary}</p>
          <span class="work-arrow" aria-hidden="true">/</span>
        </a>
      `
    )
    .join("");
}

function renderValues() {
  const target = document.querySelector("#values-list");
  target.innerHTML = values
    .map(
      ([label, accent]) => `<span class="token ${accent}">${label}</span>`
    )
    .join("");
}

function renderCaseStudy() {
  document.querySelector("#case-label").textContent = caseStudyData.label;
  document.querySelector("#case-title").innerHTML = "Infusion<br />Management";
  document.querySelector("#case-hook").textContent = caseStudyData.hook;

  document.querySelector("#case-chips").innerHTML = caseStudyData.chips
    .map(
      (chip) => `<span class="case-chip ${chip.accent}">${chip.label}</span>`
    )
    .join("");

  document.querySelector("#hero-metrics").innerHTML = caseStudyData.heroMetrics
    .map(createMetricCard)
    .join("");

  document.querySelector("#executive-summary").innerHTML = caseStudyData.executiveSummary
    .map((item) =>
      createMetricCard({
        label: item.label,
        value: item.text,
        accent: item.accent,
      })
    )
    .join("");

  document.querySelector("#strategic-intro").textContent = caseStudyData.strategic.intro;
  document.querySelector("#strategic-body").textContent = caseStudyData.strategic.body;
  document.querySelector("#strategic-conclusion").textContent = caseStudyData.strategic.conclusion;
  document.querySelector("#strategic-constraints").innerHTML = createBulletItems(
    caseStudyData.strategic.constraints
  );
  document.querySelector("#strategic-why").innerHTML = createBulletItems(
    caseStudyData.strategic.whyItMattered
  );

  document.querySelector("#role-cards").innerHTML = [
    createBulletCard("What I owned", caseStudyData.role.owned),
    createBulletCard("What I contributed to", caseStudyData.role.contributed),
  ].join("");

  document.querySelector("#problem-grid").innerHTML = `
    <div class="text-stack">
      ${createBulletCard("What we knew", caseStudyData.problemDefinition.known)}
      ${createBulletCard("What was uncertain", caseStudyData.problemDefinition.uncertain)}
    </div>
    <div class="text-stack">
      <div class="image-card image-blue">
        <p class="image-label">Image placeholder</p>
        <p class="image-note">coded prototype / realistic data</p>
      </div>
      ${createBulletCard("Method and rationale", caseStudyData.problemDefinition.method)}
      ${createBulletCard(
        "What changed direction",
        caseStudyData.problemDefinition.changedDirection
      )}
    </div>
  `;

  document.querySelector("#decision-table").innerHTML = `
    <div class="decision-head">
      <div class="decision-cell">Option considered</div>
      <div class="decision-cell">Decision made</div>
      <div class="decision-cell">Rationale</div>
    </div>
    ${caseStudyData.decisions
      .map(
        (item) => `
          <div class="decision-row">
            <article class="decision-cell">
              <p class="eyebrow mobile-only">Option considered</p>
              <p class="work-summary">${item.option}</p>
            </article>
            <article class="decision-cell highlight">
              <p class="eyebrow mobile-only">Decision made</p>
              <p class="work-summary">${item.decision}</p>
            </article>
            <article class="decision-cell">
              <p class="eyebrow mobile-only">Rationale</p>
              <p class="work-summary">${item.rationale}</p>
            </article>
          </div>
        `
      )
      .join("")}
  `;

  document.querySelector("#revisit-list").innerHTML = createBulletItems(caseStudyData.revisit);

  document.querySelector("#systems-grid").innerHTML = `
    <div class="text-stack">
      <div class="image-card image-yellow">
        <p class="image-label">Image placeholder</p>
        <p class="image-note">list pattern / triage ordering</p>
      </div>
      <p class="support-paragraph">${caseStudyData.systems.intro}</p>
      ${createBulletCard("What the system had to solve", caseStudyData.systems.solved)}
    </div>
    <div class="text-stack">
      ${createBulletCard(
        "Composite components and conventions defined",
        caseStudyData.systems.composites
      )}
      ${createBulletCard("Documentation and handoff", caseStudyData.systems.handoff)}
    </div>
  `;

  document.querySelector("#outcomes-grid").innerHTML = caseStudyData.outcomes
    .map(createMetricCard)
    .join("");
  document.querySelector("#outcome-note").textContent = caseStudyData.outcomeNote;
  document.querySelector("#measure-next").innerHTML = createBulletItems(caseStudyData.measureNext);

  document.querySelector("#different-grid").innerHTML = caseStudyData.doDifferently
    .map((item) => createBulletCard(item.title, item.points))
    .join("");
}

function setPage(page) {
  const homePage = document.querySelector('#home-page');
  const caseStudyPage = document.querySelector('#case-study-page');
  const normalizedPage = page === 'case-study' ? 'case-study' : 'home';

  homePage.hidden = normalizedPage !== 'home';
  caseStudyPage.hidden = normalizedPage !== 'case-study';

  document.querySelectorAll('[data-route]').forEach((link) => {
    const isActive = link.dataset.route === normalizedPage;
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.title =
    normalizedPage === 'case-study'
      ? 'Infusion Management | Emilio'
      : 'Emilio | UX Product Design';

  window.scrollTo(0, 0);
}

function syncRoute() {
  const hash = window.location.hash.replace('#', '');
  setPage(hash || 'home');
}

function setupReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((item) => observer.observe(item));
}

function init() {
  renderMeta();
  renderWork();
  renderValues();
  renderCaseStudy();
  setupReveal();
  syncRoute();
  window.addEventListener('hashchange', syncRoute);
}

document.addEventListener('DOMContentLoaded', init);
