import { medsrecStudyData } from "../content/case-studies";
import { CaseStudyPage } from "./CaseStudyPage";

export function MedsRecStudyPage({ onBack }: { onBack: () => void }) {
  return <CaseStudyPage data={medsrecStudyData} onBack={onBack} />;
}
