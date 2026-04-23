export type AccentName = "plain" | "blue" | "rust" | "yellow";
export type ChipAccent = Exclude<AccentName, "plain">;

export type PortfolioPage = "home" | "case-study" | "about";

export type ValueMetric = {
  value: string;
  label: string;
};

export type WorkItem = {
  id: string;
  index: string;
  title: string;
  type: string;
  typeAccent?: "subtle" | "rust";
  summary: string;
  highlight?: boolean;
  metrics: ValueMetric[];
};

export type DecisionRow = {
  option: string;
  decision: string;
  rationale: string;
};

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${encodeURI(path)}`;

export const homePageData = {
  hero: {
    portraitUrl: publicAsset("assets/home-hero-portrait.webp"),
    nameLines: ["Emilio", "Arboleya"],
    intro:
      "Hello! I design experiences and systems for complex products and lead teams that build them.",
    detailSegments: [
      { text: "I'm passionate for technology", muted: true },
      { text: ", accessibility and data visualization", muted: true },
      { text: " enthusiast, and avid reader.", muted: true },
    ],
    latestWork: {
      title: "Latest work at Oracle Health",
      description:
        "Designing a streamlined flow to manage infusions for acute care nurses.",
    },
    satisfaction: {
      title: "User satisfaction",
      kpi: "3.2 → 6.3",
      description:
        "Measured in a likert scale 0-7 with +20 participants after redesigning and automating the flow",
    },
    aboutCard: {
      title: "About",
      description:
        "I'm a Principal UX designer with 9+ years of experience across B2B SaaS and enterprise products in healthcare, financial, education, and security industries, where usability affects safety, compliance, and daily operations.",
    },
  },
  selectedWorkLabel: "Selected work",
  workItems: [
    {
      id: "infusion-management",
      index: "01",
      title: "Infusion Management",
      type: "Oracle Health EHR",
      typeAccent: "subtle" as const,
      summary:
        "Giving acute care nurses one place to review, adjust, administer, and document all infusion activity, supported by smart suggestions.",
      highlight: true,
      metrics: [
        { value: "6.3/7", label: "User Satisfaction" },
        { value: "-45%", label: "Completion time" },
        { value: "35%", label: "Faster implementation with AI" },
      ],
    },
    {
      id: "smart-medication-reconciliation",
      index: "02",
      title: "Smart Medication Reconciliation",
      type: "Coming soon | Oracle Health EHR",
      typeAccent: "rust" as const,
      summary:
      "Automating the manual process of Medication Reconciliation for physicians introducing AI Agents",
      metrics: [
        { value: "-52%", label: "Reduced time to complete tasks" },
        { value: "100%", label: "Tasks automated with AI" },
      ],
    },
    {
      id: "security-access-dashboard",
      index: "03",
      title: "Security Access Dashboard",
      type: "Coming soon | Brivo",
      typeAccent: "rust" as const,
      summary:
        "Redefining the experience for monitoring security events on large facilities by introducing natural-language processing technologies.",
      metrics: [
        { value: "5.9/7", label: "User Satisfaction" },
        { value: "94%", label: "task completion rate" },
      ],
    },
  ] satisfies WorkItem[],
  about: {
    label: "About",
    paragraphs: [
      "I'm a Principal UX designer with 9+ years of experience across B2B SaaS and enterprise products in healthcare, financial, education, and security industries, where usability affects safety, compliance, and daily operations.",
      "I design experiences and systems for complex products and lead teams to build them. Focused on making enterprise software clear, scalable, and consistent.",
    ],
    values: [
      { label: "Function over form", accent: "blue" as const },
      { label: "Simplicity", accent: "rust" as const },
      { label: "Scalability", accent: "yellow" as const },
      { label: "Precision", accent: "blue" as const },
      { label: "Clarity", accent: "rust" as const },
      { label: "Accessibility", accent: "yellow" as const },
    ],
  },
  footer: {
    left: "EMILIO ARBOLEYA 2026",
    right: "earboleyav@gmail.com | linkedin.com/in/emilio-ux/",
  },
};

export const aboutPageData = {
  label: "About me",
  name: "Emilio Arboleya",
  intro:
    "I design systems for complex products and lead teams to build them. I'm a Principal UX Designer focused on making enterprise software clear, scalable, and consistent.",
  supporting:
    "I have 9+ years of experience across B2B SaaS and enterprise products in healthcare, financial, education, and security industries, where usability affects safety, compliance, and daily operations.",
  meta: [
    { label: "Mexico City", accent: "blue" as const },
    { label: "Spanish + English", accent: "rust" as const },
    { label: "Design systems + product strategy", accent: "yellow" as const },
  ],
  expertise: [
    { label: "Product design", accent: "blue" as const },
    { label: "Research strategy", accent: "rust" as const },
    { label: "Design systems", accent: "yellow" as const },
    { label: "Systems thinking", accent: "blue" as const },
    { label: "Information architecture", accent: "rust" as const },
    { label: "Usability testing", accent: "yellow" as const },
    { label: "Data visualization", accent: "blue" as const },
    { label: "AI-enabled prototyping", accent: "rust" as const },
  ],
  education: [
    "C2 Proficient English Certificate — EF Set, 2021",
    "Interaction Design Specialization — UC San Diego, 2020",
    "Graphic Design degree — Universidad de Ecatepec, 2015–2018",
  ],
  timeline: [
    {
      role: "Principal UX Designer",
      company: "Oracle Health",
      period: "Mar 2025 — Apr 2026",
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
      company: "Wolters Kluwer | Globant",
      period: "Sep 2024 — Mar 2025",
      summary:
        "Led end-to-end UX strategy for DocuCare, aligning product design with clinical workflows and business objectives for nursing education products.",
      highlights: [
        "Conducted 10+ user research sessions to capture needs and establish a quantitative KPI baseline.",
        "Improved task completion efficiency by 43% after redesigning key product experiences.",
        "Scaled design systems and UX standards to increase consistency and speed up delivery.",
      ],
    },
    {
      role: "UX Design Lead",
      company: "Brivo | Globant",
      period: "Jan 2022 — Sep 2024",
      summary:
        "Led UX for data-driven access control and security products, partnering with product and engineering on roadmap, metrics, and team execution.",
      highlights: [
        "Led a team of designers, reviewing work and coordinating design execution across the account.",
        "Ran research activities and stakeholder workshops to shape priorities and validate direction.",
        "Maintained the design system and accessibility standards for security-focused product experiences.",
      ],
    },
    {
      role: "Senior UX Designer",
      company: "Luminus Life Plus | Globant",
      period: "Sep 2021 — Jan 2022",
      summary:
        "Designed tailored learning experiences for students and teachers in the Middle East.",
      highlights: [
        "Created wireframes and low-fidelity concepts to explore and validate solutions early.",
        "Supported research activities and stakeholder workshops to align user and business needs.",
        "Collaborated on mockups, handoff, and reusable design system components.",
      ],
    },
    {
      role: "UX Designer",
      company: "Fiserv | Globant",
      period: "Mar 2021 — Sep 2021",
      summary:
        "Worked on big-data and trend-analysis experiences for financial institutions.",
      highlights: [
        "Helped simplify complex financial analysis workflows into clearer product experiences.",
      ],
    },
  ],
};

export const caseStudyData = {
  hero: {
    titleLines: ["Infusion", "Management"],
    summary:
      "Giving acute care nurses one place to review, adjust, administer, and document all infusion activity, supported by smart suggestions and integrated directly into Oracle's EHR.",
    fullscreen: true,
    imageUrl: publicAsset("assets/case study cover.webp"),
    imageAlt: "Infusion management overview interface",
  },
  metrics: [
    {
      title: "User satisfaction",
      kpi: "3.2 → 6.3",
      description: "Likert scale 0–7",
      tint: "plain" as const,
    },
    {
      title: "Task completion time",
      kpi: "-45%",
      description: "Complex tasks, prototype vs. legacy baseline",
      tint: "blue" as const,
    },
    {
      title: "Streamlined hand-off",
      kpi: "35%",
      description: "Faster implementation with AI",
      tint: "rust" as const,
    },
  ],
  executiveSummary: [
    {
      title: "The problem",
      description:
        "Hospitals switching to Oracle's EHR had no path forward without a dedicated infusion management tool. Without it, Oracle risked losing clinical clients to competitors.",
      tint: "rust" as const,
    },
    {
      title: "My role",
      description:
        "Sole designer through planning and design. I co-led research, owned the stimuli and prototype, and led two designers through handoff.",
      tint: "plain" as const,
    },
    {
      title: "Core decision",
      description:
        "Treat auto-calculation as the primary design principle so the system computes rates, volumes, waste, and remaining doses from device inputs.",
      tint: "plain" as const,
    },
    {
      title: "Outcome",
      description:
        "User satisfaction nearly doubled from 3.2 to 6.3. Task completion dropped 45% on complex tasks and simple tasks were fully automated.",
      tint: "plain" as const,
    },
  ],
  strategic: {
    intro:
      "Oracle's EHR had no native infusion management capability. Hospitals and infusion centers managing IV therapies were patching the gap with legacy, standalone tools that could not sync with the EHR.",
    fullscreen: true,
    imageUrl: publicAsset("assets/Case study picture.webp"),
    imageAlt: "Annotated side panel comparison and modular drawer examples",
    chips: [
      { label: "cross-team collaboration", accent: "blue" as const },
      { label: "iteration", accent: "rust" as const },
      { label: "research", accent: "yellow" as const },
    ],
    constraints: [
      "Timeline was the primary constraint: MVP delivery with two-week iteration cycles.",
      "Smart pump connectivity already existed, so the bottleneck was organizational velocity rather than technical capability.",
      "Clinical accuracy was non-negotiable because ambiguity in dosage, rate, or timing carries patient safety implications.",
    ],
    conclusion:
      "Failure would have meant losing a meaningful segment of clinical clients to competitors that already had infusion management solved.",
    emphasis:
      "The feature was a retention requirement, not a roadmap ambition.",
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
    fullscreen: true,
    imageUrl: publicAsset("assets/Case study picture 2.webp"),
    imageAlt: "Clinical dashboard with infusion side panel and patient context",
    chips: [
      { label: "UX strategy", accent: "yellow" as const },
      { label: "ideation", accent: "yellow" as const },
    ],
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
        "A compact widget for overview context, with full-page access preserved for detailed actions",
      rationale:
        "The widget supported situational awareness without pulling nurses out of surrounding clinical context.",
    },
  ] satisfies DecisionRow[],
  systems: {
    fullscreen: true,
    imageUrl: publicAsset("assets/Case study picture 3.webp"),
    imageAlt: "Infusion list item anatomy and modular pattern documentation",
    chips: [
      { label: "Design hand-off", accent: "blue" as const },
      { label: "Documentation", accent: "blue" as const },
      { label: "Design systems", accent: "blue" as const },
    ],
    solved: [
      "Future infusion UI needed to feel consistent without teams reverse-engineering hidden decisions.",
      "Engineering could not absorb custom component work during the MVP timeline.",
      "Documentation had to be written for future teams, not only for the current project.",
    ],
    composites: [
      "There were no infusion-related components in Oracle's design system before this project. Rather than specify new components under a tight timeline, the system was built from modular patterns using existing, approved elements.",
      "Status and priority ordering: a triage convention defining clinical urgency as a system rule.",
      "Semantic state layer: color and iconography rules applied consistently across widget, panel, and list views.",
    ],
    handoff: [
      "Led two designers through documenting each modular component, its constituent parts, and its governing rules.",
      "Contributed the work to the broader design system as a new infusion module.",
      "Established a reusable AI-assisted prototyping workflow using Figma Make, guidelines, variables, and component usage rules.",
    ],
  },
  outcomes: {
    lead:
      "Here's a sneak peak of the coded demo that allowed for complex interactions and calculations:",
    videoUrl: publicAsset("assets/outcomes-video.mp4"),
    videoAlt: "Infusion management coded demo walkthrough",
    metrics: [
    {
      title: "User satisfaction",
      kpi: "3.2 → 6.3",
      description: "Likert scale 0–7",
      tint: "plain" as const,
    },
    {
      title: "Task completion time",
      kpi: "-45%",
      description: "Complex tasks, prototype vs. legacy baseline",
      tint: "blue" as const,
    },
    {
      title: "Streamlined hand-off",
      kpi: "35%",
      description: "Faster implementation with AI",
      tint: "rust" as const,
    },
    ],
  },
  outcomeNote:
    "These results were measured in research conditions using a high-fidelity coded demo, not the shipped product. Post-launch measurement was not instrumented at launch, leaving a meaningful gap between prototype performance and live clinical data.",
};

export const resumeUrl = publicAsset("emilio-arboleya-resume-2026.pdf");
