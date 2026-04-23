import { CaseStudyHero } from "../sections/case-study/CaseStudyHero";
import { ExecutiveSummarySection } from "../sections/case-study/ExecutiveSummarySection";
import { KeyDesignDecisionsSection } from "../sections/case-study/KeyDesignDecisionsSection";
import { OutcomesSection } from "../sections/case-study/OutcomesSection";
import { ProblemDefinitionSection } from "../sections/case-study/ProblemDefinitionSection";
import { RoleScopeSection } from "../sections/case-study/RoleScopeSection";
import { StrategicContextSection } from "../sections/case-study/StrategicContextSection";
import { SystemsThinkingSection } from "../sections/case-study/SystemsThinkingSection";

export function InfusionsStudyPage({ onBack }: { onBack: () => void }) {
  return (
    <main className="overflow-x-clip">
      <CaseStudyHero onBack={onBack} />
      <ExecutiveSummarySection />
      <StrategicContextSection />
      <RoleScopeSection />
      <ProblemDefinitionSection />
      <KeyDesignDecisionsSection />
      <SystemsThinkingSection />
      <OutcomesSection />
    </main>
  );
}

