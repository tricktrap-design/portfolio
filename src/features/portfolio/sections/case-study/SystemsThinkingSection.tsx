import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens } from "../../../../styles/designTokens";
import type { CaseStudySystemsData } from "../../content/types";
import { CaseStudyMediaFrame } from "../../shared/media";
import { BulletCard, SectionLabel, ValueChip } from "../../ui";

export function SystemsThinkingSection({
  systems,
}: {
  systems: CaseStudySystemsData;
}) {
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
              alt={systems.media.alt}
              className="relative h-[380px] border"
              fullscreen={systems.media.fullscreen}
              mediaClassName="h-full w-full object-cover"
              overlays={systems.media.overlays}
              src={systems.media.src}
            />
            <div className="flex flex-wrap gap-2">
              {systems.chips.map((chip, index) => (
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
              items={systems.solved}
              size="s"
              title="What the system had to solve"
              variant="secondary"
            />
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={40}>
            <BulletCard
              items={systems.handoff}
              size="m"
              title="Documentation and handoff"
            />
            <BulletCard
              items={systems.composites}
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
