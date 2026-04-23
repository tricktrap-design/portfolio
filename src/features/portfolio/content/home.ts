import type { WorkItem } from "./types";

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

