import { MoveLeft } from "lucide-react";

import { useScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { caseStudyData } from "../../content/caseStudy";
import { CaseStudyMediaFrame } from "../../shared/CaseStudyMediaFrame";
import { MetricCard, PortfolioButton } from "../../ui";

export function CaseStudyHero({ onBack }: { onBack: () => void }) {
  const heroCopyReveal = useScrollReveal({ delay: 20 });
  const heroMediaReveal = useScrollReveal({ delay: 60 });
  const heroMetricsReveal = useScrollReveal({ delay: 110 });

  return (
    <section
      className="relative overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-8 sm:px-5 md:px-8 lg:px-10 lg:py-10">
        <div
          className="absolute inset-y-0 left-[120px] hidden border-l 2xl:block"
          style={{ borderColor: colorTokens.border.default }}
        />
        <div
          className="absolute inset-y-0 left-[892px] hidden border-l 2xl:block"
          style={{ borderColor: colorTokens.border.default }}
        />
        <div
          className="absolute inset-y-0 right-[120px] hidden border-l 2xl:block"
          style={{ borderColor: colorTokens.border.default }}
        />

        <PortfolioButton
          label="back"
          leadingIcon={MoveLeft}
          onClick={onBack}
          variant="ghost"
        />

        <div className="mt-4 2xl:h-[539px]">
          <div className="grid h-full gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] 2xl:grid-cols-[1fr_744px] 2xl:gap-0">
            <div
              ref={heroCopyReveal.ref}
              className={`${heroCopyReveal.className} relative`}
              style={heroCopyReveal.style}
            >
              <div
                className="2xl:block"
                style={{
                  position: "absolute",
                  left: "453px",
                  top: "65px",
                  width: "469px",
                  height: "86px",
                  background: "rgba(242,201,76,0.8)",
                  zIndex: "1",
                }}
              />
              <div
                className="relative max-w-[1000px] space-y-10 xl:pt-0"
                style={{ zIndex: "9" }}
              >
                <h1
                  style={{
                    ...typeTokens.display.l,
                    color: colorTokens.text.primary,
                  }}
                >
                  {caseStudyData.hero.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <p
                  className="max-w-[560px]"
                  style={{
                    ...typeTokens.body.l,
                    color: colorTokens.text.secondary,
                  }}
                >
                  {caseStudyData.hero.summary}
                </p>
              </div>
            </div>

            <div
              ref={heroMediaReveal.ref}
              className={heroMediaReveal.className}
              style={heroMediaReveal.style}
            >
              <CaseStudyMediaFrame
                alt={caseStudyData.hero.imageAlt}
                className="relative h-[360px] border xl:h-[420px] 2xl:mt-[34px] 2xl:h-[505px] 2xl:w-[744px]"
                fullscreen={caseStudyData.hero.fullscreen}
                mediaClassName="h-full w-full object-cover"
                src={caseStudyData.hero.imageUrl}
              />
            </div>
          </div>
        </div>

        <div
          ref={heroMetricsReveal.ref}
          className={`${heroMetricsReveal.className} grid items-start gap-4 pt-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[447px_506px_447px]`}
          style={{ ...heroMetricsReveal.style, position: "relative", zIndex: "99" }}
        >
          {caseStudyData.metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

