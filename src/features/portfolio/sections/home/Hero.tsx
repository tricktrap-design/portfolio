import { ArrowUpRight } from "lucide-react";
import { useScrollReveal, ScrollReveal } from "../../../../components/ScrollReveal";
import { homePageData } from "../../content/home";
import { MetricCard, PortfolioButton } from "../../ui";
import { colorTokens, fontStacks, typeTokens } from "../../../../styles/designTokens";

function subtleLabelStyle(opacity = 1) {
  return {
    ...typeTokens.label.s,
    color: colorTokens.text.subtle,
    opacity,
  };
}

function HeroAboutCard() {
  return (
    <article
      className="border bg-[#f1efec] p-5"
      style={{ borderColor: colorTokens.border.default }}
    >
      <p style={subtleLabelStyle()}>{homePageData.hero.aboutCard.title}</p>
      <p
        className="mt-2"
        style={{
          ...typeTokens.body.m,
          color: colorTokens.text.primary,
        }}
      >
        {homePageData.hero.aboutCard.description}
      </p>
    </article>
  );
}

function HeroInfoCard({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <article
      className="border bg-[#f1efec] p-4"
      style={{ borderColor: colorTokens.border.default }}
    >
      <p style={subtleLabelStyle()}>{title}</p>
      <p
        className="mt-2"
        style={{
          fontFamily: fontStacks.inter,
          fontSize: "clamp(0.95rem, 1.15vw, 1rem)",
          fontWeight: 400,
          lineHeight: "1.6",
          color: colorTokens.text.primary,
        }}
      >
        {description}
      </p>
    </article>
  );
}

export function Hero({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  const nameReveal = useScrollReveal();
  const introReveal = useScrollReveal({ variant: "fade" });
  const portraitReveal = useScrollReveal({ delay: 70 });

  return (
    <section
      className="relative border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-6 sm:px-5 sm:py-8 md:px-8 lg:px-10 lg:py-[44px] xl:min-h-[712px]">
        <div
          className="absolute inset-y-0 left-[120px] hidden border-l xl:block"
          style={{ borderColor: colorTokens.border.default }}
        />
        <div
          className="absolute inset-y-0 left-[892px] hidden border-l xl:block"
          style={{ borderColor: colorTokens.border.default }}
        />
        <div
          className="absolute inset-y-0 right-[120px] hidden border-l xl:block"
          style={{ borderColor: colorTokens.border.default }}
        />

        <div className="grid h-full gap-8 xl:grid-cols-[minmax(0,1.9fr)_minmax(320px,480px)] xl:gap-10">
          <div className="flex h-full flex-col gap-10">
            <div
              ref={nameReveal.ref}
              className={`${nameReveal.className} max-w-[8ch]`}
              style={{
                ...nameReveal.style,
                ...typeTokens.display.xl,
                color: colorTokens.text.primary,
              }}
            >
              {homePageData.hero.nameLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>

            <div
              ref={introReveal.ref}
              className={`${introReveal.className} max-w-[34rem]`}
              style={{
                ...introReveal.style,
                ...typeTokens.body.m,
                color: colorTokens.text.primary,
              }}
            >
              <p className="m-0">{homePageData.hero.intro}</p>
              <p className="m-0 mt-1" style={{ color: "rgba(15,17,21,0.6)" }}>
                {homePageData.hero.detailSegments.map((segment) => (
                  <span
                    key={segment.text}
                    style={{
                      color: segment.muted
                        ? "rgba(15,17,21,0.6)"
                        : colorTokens.text.primary,
                    }}
                  >
                    {segment.text}
                  </span>
                ))}
              </p>
            </div>

            <ScrollReveal
              className="mt-auto grid w-full items-start gap-4 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.75fr)]"
              delay={40}
              style={{ zIndex: "9" }}
            >
              <HeroInfoCard
                description={homePageData.hero.latestWork.description}
                title={homePageData.hero.latestWork.title}
              />
              <MetricCard
                className="md:row-span-2"
                description={homePageData.hero.satisfaction.description}
                kpi={homePageData.hero.satisfaction.kpi}
                tint="plain"
                title={homePageData.hero.satisfaction.title}
              />
              <div>
                <PortfolioButton
                  className="w-full justify-center self-start sm:w-fit sm:justify-start"
                  label="open case study"
                  onClick={onOpenCaseStudy}
                  trailingIcon={ArrowUpRight}
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid h-full gap-4 xl:grid-rows-[minmax(0,1fr)_auto]">
            <div
              ref={portraitReveal.ref}
              className={`${portraitReveal.className} relative min-h-[280px] border sm:min-h-[360px]`}
              style={{
                ...portraitReveal.style,
                borderColor: colorTokens.border.default,
              }}
            >
              <img
                alt="Portrait of Emilio Arboleya"
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
                fetchPriority="high"
                loading="eager"
                src={homePageData.hero.portraitUrl}
              />
              <div
                className="absolute left-[-13px] top-[-27px] hidden h-[99px] w-[273px] border lg:block"
                style={{ borderColor: "rgba(15,17,21,0.6)" }}
              />
              <div
                className="absolute bottom-[72px] right-[-19px] top-[202px] hidden w-[59px] lg:block"
                style={{ background: "rgba(27,115,189,0.8)" }}
              />
            </div>

            <ScrollReveal delay={110}>
              <HeroAboutCard />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

