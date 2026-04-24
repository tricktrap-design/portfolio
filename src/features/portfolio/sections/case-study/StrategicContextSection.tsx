import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import type { CaseStudyStrategicData } from "../../content/types";
import { CaseStudyMediaFrame } from "../../shared/media";
import { BulletCard, SectionLabel, ValueChip } from "../../ui";

export function StrategicContextSection({
  strategic,
}: {
  strategic: CaseStudyStrategicData;
}) {
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
              {strategic.intro}
            </p>

            <BulletCard items={strategic.constraints} size="m" title="Defining constraints" />

            <p
              style={{
                ...typeTokens.body.s,
                color: colorTokens.text.secondary,
              }}
            >
              <span>{strategic.conclusion} </span>
              <span
                style={{
                  color: colorTokens.text.primary,
                  fontWeight: 700,
                }}
              >
                {strategic.emphasis}
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={40}>
            <CaseStudyMediaFrame
              alt={strategic.media.alt}
              className="relative h-[396px] border"
              fullscreen={strategic.media.fullscreen}
              mediaClassName="h-full w-full object-cover"
              overlays={strategic.media.overlays}
              src={strategic.media.src}
            />
            <div className="flex flex-wrap gap-2">
              {strategic.chips.map((chip, index) => (
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
              items={strategic.whyItMattered}
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
