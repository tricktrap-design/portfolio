import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { homePageData } from "../../content/home";
import { SectionLabel, ValueChip } from "../../ui";

export function AboutStrip() {
  return (
    <section
      className="border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-6">
          <div className="flex flex-col gap-6 xl:flex-row">
            <ScrollReveal className="shrink-0 xl:w-[280px]" variant="fade">
              <SectionLabel color="rust">{homePageData.about.label}</SectionLabel>
            </ScrollReveal>

            <ScrollReveal className="max-w-[980px] space-y-8" delay={40}>
              {homePageData.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    ...typeTokens.body.l,
                    color: colorTokens.text.primary,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
          </div>

          <div className="flex flex-wrap gap-3">
            {homePageData.about.values.map((item, index) => (
              <ScrollReveal key={item.label} staggerIndex={index} variant="fade">
                <ValueChip accent={item.accent} text={item.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

