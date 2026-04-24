import type { CSSProperties } from "react";

export type AccentName = "plain" | "blue" | "rust" | "yellow";

export type ChipAccent = Exclude<AccentName, "plain">;

export type PortfolioPage = "home" | "infusions-study" | "about";

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

export type AccentChip = {
  label: string;
  accent: ChipAccent;
};

export type MetricCardData = {
  title: string;
  description: string;
  kpi?: string;
  tint?: AccentName;
};

export type MediaFrameOverlay = {
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
};

export type MediaFrameData = {
  alt: string;
  src: string;
  fullscreen?: boolean;
  overlays?: MediaFrameOverlay[];
  type?: "image" | "video";
};

export type CaseStudyHeroData = {
  titleLines: string[];
  summary: string;
  media: MediaFrameData;
};

export type CaseStudyStrategicData = {
  intro: string;
  media: MediaFrameData;
  chips: AccentChip[];
  constraints: string[];
  conclusion: string;
  emphasis: string;
  whyItMattered: string[];
};

export type CaseStudyRoleData = {
  owned: string[];
  contributed: string[];
};

export type CaseStudyProblemDefinitionData = {
  media: MediaFrameData;
  chips: AccentChip[];
  known: string[];
  uncertain: string[];
};

export type CaseStudySystemsData = {
  media: MediaFrameData;
  chips: AccentChip[];
  solved: string[];
  composites: string[];
  handoff: string[];
};

export type CaseStudyOutcomesData = {
  note: string;
  lead: string;
  media: MediaFrameData;
  metrics: MetricCardData[];
};

export type CaseStudyPageData = {
  hero: CaseStudyHeroData;
  metrics: MetricCardData[];
  executiveSummary: MetricCardData[];
  strategic: CaseStudyStrategicData;
  role: CaseStudyRoleData;
  problemDefinition: CaseStudyProblemDefinitionData;
  decisions: DecisionRow[];
  systems: CaseStudySystemsData;
  outcomes: CaseStudyOutcomesData;
};
