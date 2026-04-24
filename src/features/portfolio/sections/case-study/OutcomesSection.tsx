import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import type { CaseStudyOutcomesData } from "../../content/types";
import { CaseStudyMediaFrame } from "../../shared/media";
import { MetricCard, SectionLabel } from "../../ui";

export function OutcomesSection({
  outcomes,
}: {
  outcomes: CaseStudyOutcomesData;
}) {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="rust">Outcomes</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={20} variant="fade">
          <p
            className="mt-8"
            style={{
              ...typeTokens.body.m,
              color: colorTokens.text.secondary,
            }}
          >
            {outcomes.note}
          </p>
        </ScrollReveal>

        <div className="mt-8 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[447px_506px_447px]">
          {outcomes.metrics.map((metric, index) => (
            <ScrollReveal key={metric.title} staggerIndex={index}>
              <MetricCard {...metric} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={30} variant="fade">
          <p
            className="mt-8"
            style={{
              ...typeTokens.body.l,
              color: colorTokens.text.secondary,
            }}
          >
            {outcomes.lead}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <CaseStudyMediaFrame
            alt={outcomes.media.alt}
            className="relative mt-8 h-[922px] border"
            mediaClassName="h-full w-full object-cover"
            overlays={outcomes.media.overlays}
            src={outcomes.media.src}
            type={outcomes.media.type}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
