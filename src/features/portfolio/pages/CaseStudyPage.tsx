import type { CaseStudyPageData } from "../content/types";
import { CaseStudyHero } from "../sections/case-study/CaseStudyHero";
import { ExecutiveSummarySection } from "../sections/case-study/ExecutiveSummarySection";
import { KeyDesignDecisionsSection } from "../sections/case-study/KeyDesignDecisionsSection";
import { OutcomesSection } from "../sections/case-study/OutcomesSection";
import { ProblemDefinitionSection } from "../sections/case-study/ProblemDefinitionSection";
import { RoleScopeSection } from "../sections/case-study/RoleScopeSection";
import { StrategicContextSection } from "../sections/case-study/StrategicContextSection";
import { SystemsThinkingSection } from "../sections/case-study/SystemsThinkingSection";

export function CaseStudyPage({
  data,
  onBack,
}: {
  data: CaseStudyPageData;
  onBack: () => void;
}) {
  return (
    <main className="overflow-x-clip">
      <CaseStudyHero hero={data.hero} metrics={data.metrics} onBack={onBack} />
      <ExecutiveSummarySection summaryCards={data.executiveSummary} />
      <StrategicContextSection strategic={data.strategic} />
      <RoleScopeSection role={data.role} />
      <ProblemDefinitionSection problemDefinition={data.problemDefinition} />
      <KeyDesignDecisionsSection decisions={data.decisions} />
      <SystemsThinkingSection systems={data.systems} />
      <OutcomesSection outcomes={data.outcomes} />
    </main>
  );
}

