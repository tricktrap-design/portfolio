import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import type { CaseStudyProblemDefinitionData } from "../../content/types";
import { CaseStudyMediaFrame } from "../../shared/media";
import { BulletCard, QuestionCard, SectionLabel, ValueChip } from "../../ui";

function subtleLabelStyle() {
  return {
    ...typeTokens.label.s,
    color: colorTokens.text.subtle,
  };
}

export function ProblemDefinitionSection({
  problemDefinition,
}: {
  problemDefinition: CaseStudyProblemDefinitionData;
}) {
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
            <BulletCard items={problemDefinition.known} size="m" title="What we knew" />

            <div className="py-2" style={subtleLabelStyle()}>
              What was uncertain
            </div>

            <div className="space-y-2">
              {problemDefinition.uncertain.map((item, index) => (
                <ScrollReveal
                  key={item}
                  delay={40}
                  staggerIndex={index}
                  variant="fade"
                >
                  <QuestionCard text={item} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={40}>
            <CaseStudyMediaFrame
              alt={problemDefinition.media.alt}
              className="relative h-[380px] border"
              fullscreen={problemDefinition.media.fullscreen}
              mediaClassName="h-full w-full object-cover"
              overlays={problemDefinition.media.overlays}
              src={problemDefinition.media.src}
            />
            <div className="flex flex-wrap gap-2">
              {problemDefinition.chips.map((chip, index) => (
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
              items={problemDefinition.known}
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
