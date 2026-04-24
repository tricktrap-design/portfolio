import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens } from "../../../../styles/designTokens";
import type { DecisionRow } from "../../content/types";
import { DecisionTable, SectionLabel } from "../../ui";

export function KeyDesignDecisionsSection({
  decisions,
}: {
  decisions: DecisionRow[];
}) {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="blue">Key Design Decisions</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={20}>
          <DecisionTable className="mt-7" rows={decisions} />
        </ScrollReveal>
      </div>
    </section>
  );
}
