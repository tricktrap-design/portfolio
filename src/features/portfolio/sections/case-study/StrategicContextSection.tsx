import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { caseStudyData } from "../../content/caseStudy";
import { CaseStudyMediaFrame } from "../../shared/CaseStudyMediaFrame";
import { BulletCard, SectionLabel, ValueChip } from "../../ui";

export function StrategicContextSection() {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="blue">Strategic Context</SectionLabel>
        </ScrollReveal>
        <div className="mt-7 grid gap-10 xl:grid-cols-2 2xl:grid-cols-[836px_556px]">
          <ScrollReveal className="space-y-6">
            <p
              style={{
                ...typeTokens.body.xl,
                color: colorTokens.text.primary,
              }}
            >
              {caseStudyData.strategic.intro}
            </p>

            <BulletCard
              items={caseStudyData.strategic.constraints}
              size="m"
              title="Defining constraints"
            />

            <p
              style={{
                ...typeTokens.body.s,
                color: colorTokens.text.secondary,
              }}
            >
              <span>{caseStudyData.strategic.conclusion} </span>
              <span
                style={{
                  color: colorTokens.text.primary,
                  fontWeight: 700,
                }}
              >
                {caseStudyData.strategic.emphasis}
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={40}>
            <CaseStudyMediaFrame
              alt={caseStudyData.strategic.imageAlt}
              className="relative h-[396px] border"
              fullscreen={caseStudyData.strategic.fullscreen}
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
              src={caseStudyData.strategic.imageUrl}
            />
            <div className="flex flex-wrap gap-2">
              {caseStudyData.strategic.chips.map((chip, index) => (
                <ScrollReveal
                  key={chip.label}
                  delay={20}
                  staggerIndex={index}
                  variant="fade"
                >
                  <ValueChip accent={chip.accent} text={chip.label} />
                </ScrollReveal>
              ))}
            </div>

            <BulletCard
              items={caseStudyData.strategic.whyItMattered}
              size="s"
              title="Why it mattered"
              variant="secondary"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

