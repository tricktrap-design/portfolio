import type { CaseStudyPageData } from "../types";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${encodeURI(path)}`;

export const medsrecStudyData = {
  hero: {
    titleLines: ["Smart Medication", "Reconciliation"],
    summary:
      "Automating medication reconciliation for physicians with AI agents in a meaningful way. The work focused on reducing manual review across care transitions without removing clinical ownership.",
    media: {
      alt: "Medication reconciliation overview interface",
      fullscreen: true,
      src: publicAsset("assets/Medsrec cover.webp"),
    },
  },
  metrics: [
    {
      title: "Design system",
      kpi: "90% reuse",
      description: "of existing components, accelerating hand-off",
      tint: "plain" as const,
    },
    {
      title: "Task completion",
      kpi: "-38%",
      description: "Reduction in reconciliation time",
      tint: "blue" as const,
    },
    {
      title: "Confidence",
      kpi: "+90%",
      description: "Increased physician confidence in AI",
      tint: "rust" as const,
    },
  ],
  executiveSummary: [
    {
      title: "The problem",
      description:
        "Medication reconciliation in EHRs was fully manual, forcing physicians to review, compare, and reconcile medication lists across care transitions by hand.",
      tint: "rust" as const,
    },
    {
      title: "My role",
      description:
        "Design lead with additional designer in my team for handoff while owning stakeholder sessions, and design direction end to end.",
      tint: "plain" as const,
    },
    {
      title: "Core decision",
      description:
        "We wanted to introduce AI in a meaningful way. That meant seeing AI as a clinical partner to make decisions with full patient's context.",
      tint: "plain" as const,
    },
    {
      title: "Outcome",
      description:
        "Physicians arrived to a pre-reconciled list requiring review, not manual input, while full override and undo preserved clinical ownership.",
      tint: "plain" as const,
    },
  ],
  strategic: {
    intro:
      "Medication reconciliation is one of the most error-prone processes in acute care. Across care transitions, physicians manually compare medication lists, decide what to continue, stop, or adjust, and document each decision.",
    media: {
      alt: "Medication reconciliation workflow and supporting modules",
      fullscreen: true,
      overlays: [
        {
          bordered: true,
          className: "absolute left-[-13px] top-[-27px] h-[99px] w-[273px]",
        },
        {
          className: "absolute bottom-[72px] right-[-19px] top-[202px] w-[59px]",
          style: { background: "rgba(27,115,189,0.8)" },
        },
      ],
      src: publicAsset("assets/Medsrec picture 1.webp"),
    },
    chips: [
      { label: "trust", accent: "blue" as const },
      { label: "ownership", accent: "rust" as const },
      { label: "speed", accent: "yellow" as const },
    ],
    constraints: [
      "Clinical trust was the central constraint: every AI decision had to be explainable and attributable to a source.",
      "Clinical ownership could not be compromised; the AI had to reduce work without replacing judgment.",
      "The timeline demanded speed without sacrificing clinical validity, so weekly cross-functional sessions kept product, engineering, and clinical leads aligned.",
    ],
    conclusion:
      "For Oracle, this was a competitive opportunity. No EHR competitor had introduced meaningful automation to this workflow.",
    emphasis:
      "A strong AI-assisted tool could differentiate the platform in active sales cycles.",
    whyItMattered: [
      "An AI layer that added friction instead of eliminating it.",
      "A system physicians ignored because they could not trust its reasoning.",
      "A workflow that moved faster at the expense of clinical validity.",
    ],
  },
  role: {
    owned: [
      "Weekly cross-functional sessions, with agendas and notes that kept product, clinical, and engineering leads aligned.",
      "Research and clinician focus groups, including what to test and when to test it.",
      "Design direction end to end across layout, AI behavior, and transparency conventions.",
      "Handoff review and quality for future teams, not just the current sprint.",
    ],
    contributed: [
      "Scope definition: deciding what the AI would handle automatically versus what required physician input.",
      "Clinical framing: shaping the language, attribution model, and override conventions with clinical SMEs so the system felt trustworthy.",
    ],
  },
  problemDefinition: {
    media: {
      alt: "Medication reconciliation interface with review context",
      fullscreen: true,
      overlays: [
        {
          className: "absolute left-[-27.5px] top-[13.5px] h-[44px] w-[92px]",
          style: { background: "rgba(200,76,42,0.8)" },
        },
        {
          className:
            "absolute bottom-[-32.5px] left-[376.5px] right-[-20.5px] h-[54px]",
          style: { background: "rgba(27,115,189,0.8)" },
        },
      ],
      src: publicAsset("assets/Medsrec picture 2.webp"),
    },
    chips: [
      { label: "cross-team collaboration", accent: "yellow" as const },
      { label: "focus groups", accent: "yellow" as const },
    ],
    known: [
      "The manual reconciliation problem was already clear. What was uncertain was how much automation physicians would accept, and under what conditions. The real risk was building AI that physicians would distrust and work around.",
    ],
    uncertain: [
      "How much of the reconciliation process could be automated before physicians felt the system was overreaching.",
      "What level of source attribution was enough for a physician to trust an AI decision without rechecking it from scratch.",
      "Whether a proactive first pass would feel helpful or presumptuous when the physician opened the view.",
    ],
  },
  decisions: [
    {
      option: "Single list with reconciliation status per medication",
      decision:
        "Two-column layout separating medications to stop from medications to continue",
      rationale:
        "Matched the physician's mental model and validated clearly in focus groups.",
    },
    {
      option: "AI acts when the physician opens the reconciliation view",
      decision:
        "AI completes a first pass proactively before the physician arrives",
      rationale:
        "Shifted the work from building the list to reviewing it.",
    },
    {
      option: "AI decisions presented without attribution",
      decision: "Every AI action documented with its clinical source",
      rationale:
        "Attribution was the condition for trust in a clinical workflow.",
    },
  ],
  systems: {
    media: {
      alt: "Medication reconciliation patterns and system documentation",
      fullscreen: true,
      overlays: [
        {
          className: "absolute left-[94.5px] right-[276.5px] top-[-27.5px] h-[58px]",
          style: { background: "rgba(200,76,42,0.8)" },
        },
        {
          className: "absolute bottom-[16.5px] right-[-22.5px] h-[182px] w-[58px]",
          style: { background: "rgba(242,201,76,0.7)" },
        },
        {
          bordered: true,
          className:
            "absolute bottom-[-26.5px] left-[-14.5px] right-[396.5px] h-[76px]",
        },
      ],
      src: publicAsset("assets/Medsrec picture 3.webp"),
    },
    chips: [
      { label: "90% reuse", accent: "blue" as const },
      { label: "AI conventions", accent: "blue" as const },
      { label: "handoff", accent: "blue" as const },
    ],
    solved: [
      "Document the two-column reconciliation layout as a reusable pattern, not a one-off screen.",
      "Define AI attribution, suggestions, override, and undo as conventions, not just visual treatments.",
      "Write handoff documentation for the next team, not only the current sprint.",
    ],
    composites: [
      "Two-column reconciliation layout: a new pattern built from existing responsive list items.",
      "AI attribution convention: a standard for how AI-generated actions are labeled, sourced, and distinguished from physician-entered content.",
      "Override and undo model: interaction rules for how physicians exit, reverse, or modify AI decisions.",
    ],
    handoff: [
      "I led one designer through handoff documentation, reviewing her work against the design direction and ensuring every new pattern was written for future teams. The two-column layout and AI attribution conventions were contributed back as reusable standards.",
    ],
  },
  outcomes: {
    note:
      "Outcomes were qualitative, validated in focus group sessions with practicing physicians rather than in production.",
    lead:
      "Here's a sneak peak of the semi-automated flow with the agent handling most of the time and the physician reviewing:",
    media: {
      alt: "Medication reconciliation semi-automated flow walkthrough",
      overlays: [
        {
          bordered: true,
          className: "absolute left-[-13px] top-[-27px] h-[99px] w-[273px]",
        },
        {
          className: "absolute bottom-[72px] right-[-19px] top-[202px] w-[59px]",
          style: { background: "rgba(27,115,189,0.8)" },
        },
      ],
      src: publicAsset("assets/medsrec video.mp4"),
      type: "video" as const,
    },
    metrics: [
      {
        title: "Proactive first pass",
        kpi: "01",
        description:
          "Physicians arrive to a pre-reconciled list. The AI has already made an initial determination before manual review begins.",
        tint: "plain" as const,
      },
      {
        title: "Near-zero interaction time",
        kpi: "02",
        description:
          "For routine cases where the AI first pass is accurate, the physician reviews and signs rather than building the reconciliation from scratch.",
        tint: "blue" as const,
      },
      {
        title: "Full clinical ownership",
        kpi: "03",
        description:
          "Override and undo remain available at every step, with physician input requested only when AI confidence is insufficient.",
        tint: "rust" as const,
      },
    ],
  },
} satisfies CaseStudyPageData;
