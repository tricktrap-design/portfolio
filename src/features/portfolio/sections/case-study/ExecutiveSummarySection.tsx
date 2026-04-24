import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens } from "../../../../styles/designTokens";
import type { MetricCardData } from "../../content/types";
import { MetricCard, SectionLabel } from "../../ui";

export function ExecutiveSummarySection({
  summaryCards,
}: {
  summaryCards: MetricCardData[];
}) {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="rust">Executive Summary</SectionLabel>
        </ScrollReveal>
        <div className="mt-7 grid items-start gap-4 xl:grid-cols-2 2xl:grid-cols-[381.82px_minmax(0,1fr)_minmax(0,1fr)]">
          {summaryCards.map((metric, index) => (
            <ScrollReveal
              key={metric.title}
              className={
                index === 0
                  ? "h-full 2xl:row-span-2"
                  : index === 3
                    ? "2xl:col-span-2"
                    : "h-full"
              }
              staggerIndex={index}
            >
              <MetricCard
                className={
                  index === 0
                    ? "h-full 2xl:row-span-2"
                    : index === 3
                      ? "2xl:col-span-2"
                      : "h-full"
                }
                {...metric}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
