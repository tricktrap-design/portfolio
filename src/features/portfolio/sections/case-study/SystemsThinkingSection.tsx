import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens } from "../../../../styles/designTokens";
import { caseStudyData } from "../../content/caseStudy";
import { CaseStudyMediaFrame } from "../../shared/CaseStudyMediaFrame";
import { BulletCard, SectionLabel, ValueChip } from "../../ui";

export function SystemsThinkingSection() {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="yellow">Systems Thinking</SectionLabel>
        </ScrollReveal>
        <div className="mt-7 grid gap-4 xl:grid-cols-2 2xl:grid-cols-[708px_708px]">
          <ScrollReveal className="space-y-8">
            <CaseStudyMediaFrame
              alt={caseStudyData.systems.imageAlt}
              className="relative h-[380px] border"
              fullscreen={caseStudyData.systems.fullscreen}
              mediaClassName="h-full w-full object-cover"
              overlays={[
                {
                  className: "absolute left-[94.5px] right-[276.5px] top-[-27.5px] h-[58px]",
                  style: { background: "rgba(200,76,42,0.8)" },
                },
                {
                  className: "absolute bottom-[16.5px] right-[-22.5px] h-[182px] w-[58px]",
                  style: { background: "rgba(242,201,76,0.7)" },
                },
                {
                  bordered: true,
                  className:
                    "absolute bottom-[-26.5px] left-[-14.5px] right-[396.5px] h-[76px]",
                },
              ]}
              src={caseStudyData.systems.imageUrl}
            />
            <div className="flex flex-wrap gap-2">
              {caseStudyData.systems.chips.map((chip, index) => (
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
              items={caseStudyData.systems.solved}
              size="s"
              title="What the system had to solve"
              variant="secondary"
            />
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={40}>
            <BulletCard
              items={caseStudyData.systems.handoff}
              size="m"
              title="Documentation and handoff"
            />
            <BulletCard
              items={caseStudyData.systems.composites}
              size="s"
              title="Components and conventions defined"
              variant="secondary"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

