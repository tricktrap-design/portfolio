import { infusionsStudyData } from "../content/case-studies";
import { CaseStudyPage } from "./CaseStudyPage";

export function InfusionsStudyPage({ onBack }: { onBack: () => void }) {
  return <CaseStudyPage data={infusionsStudyData} onBack={onBack} />;
}
