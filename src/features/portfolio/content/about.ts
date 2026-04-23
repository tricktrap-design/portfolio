const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${encodeURI(path)}`;

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

export const resumeUrl = publicAsset("emilio-arboleya-resume-2026.pdf");

