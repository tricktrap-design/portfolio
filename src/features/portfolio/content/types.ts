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

