import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { caseStudyData } from "../../content/caseStudy";
import { CaseStudyMediaFrame } from "../../shared/CaseStudyMediaFrame";
import { MetricCard, SectionLabel } from "../../ui";

export function OutcomesSection() {
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
            {caseStudyData.outcomeNote}
          </p>
        </ScrollReveal>

        <div className="mt-8 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[447px_506px_447px]">
          {caseStudyData.outcomes.metrics.map((metric, index) => (
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
            {caseStudyData.outcomes.lead}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <CaseStudyMediaFrame
            alt={caseStudyData.outcomes.videoAlt}
            className="relative mt-8 h-[922px] border"
            mediaClassName="h-full w-full object-cover"
            overlays={[
              {
                bordered: true,
                className: "absolute left-[-13px] top-[-27px] h-[99px] w-[273px]",
              },
              {
                className: "absolute bottom-[72px] right-[-19px] top-[202px] w-[59px]",
                style: { background: "rgba(27,115,189,0.8)" },
              },
            ]}
            src={caseStudyData.outcomes.videoUrl}
            type="video"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

