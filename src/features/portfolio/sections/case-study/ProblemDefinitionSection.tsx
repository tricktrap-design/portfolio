import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { caseStudyData } from "../../content/caseStudy";
import { CaseStudyMediaFrame } from "../../shared/CaseStudyMediaFrame";
import { ProblemQuestionRow } from "../../shared/ProblemQuestionRow";
import { BulletCard, SectionLabel, ValueChip } from "../../ui";

function subtleLabelStyle() {
  return {
    ...typeTokens.label.s,
    color: colorTokens.text.subtle,
  };
}

export function ProblemDefinitionSection() {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-12 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="rust">Problem Definition</SectionLabel>
        </ScrollReveal>
        <div className="mt-7 grid gap-4 xl:grid-cols-2 2xl:grid-cols-[708px_708px]">
          <ScrollReveal className="space-y-4">
            <BulletCard
              items={caseStudyData.problemDefinition.known}
              size="m"
              title="What we knew"
            />

            <div className="py-2" style={subtleLabelStyle()}>
              What was uncertain
            </div>

            <div className="space-y-2">
              {caseStudyData.problemDefinition.uncertain.map((item, index) => (
                <ScrollReveal
                  key={item}
                  delay={40}
                  staggerIndex={index}
                  variant="fade"
                >
                  <ProblemQuestionRow text={item} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={40}>
            <CaseStudyMediaFrame
              alt={caseStudyData.problemDefinition.imageAlt}
              className="relative h-[380px] border"
              fullscreen={caseStudyData.problemDefinition.fullscreen}
              mediaClassName="h-full w-full object-cover"
              overlays={[
                {
                  className: "absolute left-[-27.5px] top-[13.5px] h-[44px] w-[92px]",
                  style: { background: "rgba(200,76,42,0.8)" },
                },
                {
                  className:
                    "absolute bottom-[-32.5px] left-[376.5px] right-[-20.5px] h-[54px]",
                  style: { background: "rgba(27,115,189,0.8)" },
                },
              ]}
              src={caseStudyData.problemDefinition.imageUrl}
            />
            <div className="flex flex-wrap gap-2">
              {caseStudyData.problemDefinition.chips.map((chip, index) => (
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
              items={caseStudyData.problemDefinition.known}
              size="s"
              title="What we knew"
              variant="secondary"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

