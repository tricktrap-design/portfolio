import { ArrowUpRight, MoveLeft } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";

import {
  aboutPageData,
  caseStudyData,
  homePageData,
  resumeUrl,
  type PortfolioPage,
} from "../content/portfolioContent";
import { colorTokens, fontStacks, typeTokens } from "../styles/designTokens";
import {
  BulletCard,
  CaseStudyItem,
  DecisionTable,
  MetricCard,
  OutcomeCard,
  PortfolioButton,
  PortfolioFooter,
  SectionLabel,
  ValueChip,
} from "./portfolio/PortfolioComponents";
import { ScrollReveal, useScrollReveal } from "./ScrollReveal";

function getPageFromLocation(): PortfolioPage {
  if (typeof window === "undefined") return "home";

  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get("page");
  if (pageParam === "about" || pageParam === "case-study") {
    return pageParam;
  }

  const hash = window.location.hash.replace("#", "");
  if (hash === "about" || hash === "case-study") return hash;

  return "home";
}

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

function Header({
  currentPage,
  onNavigateToSelectedWork,
  onNavigate,
}: {
  currentPage: PortfolioPage;
  onNavigate: (page: PortfolioPage) => void;
  onNavigateToSelectedWork: () => void;
}) {
  const activeHome = currentPage === "home" || currentPage === "case-study";

  return (
    <header
      data-portfolio-header="true"
      className="sticky top-0 z-40 border-b backdrop-blur-[6px]"
      style={{
        borderColor: colorTokens.border.default,
        background: colorTokens.background.header,
      }}
    >
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1512px] flex-wrap items-start justify-between gap-x-4 gap-y-3 px-4 py-4 sm:min-h-[88px] sm:items-center sm:px-5 sm:py-5 md:px-8 lg:px-10">
        <button
          aria-label="Go to homepage"
          className="text-left"
          onClick={() => onNavigate("home")}
          type="button"
        >
          <div
            style={{
              ...typeTokens.label.xs,
              color: colorTokens.text.subtle,
              letterSpacing: "2.5px",
            }}
          >
            UX PRODUCT DESIGN LEAD
          </div>
          <div
            style={{
              ...typeTokens.header.title,
              color: colorTokens.text.primary,
            }}
          >
            Emilio Arboleya
          </div>
        </button>

        <nav
          aria-label="Primary"
          className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end"
        >
          <PortfolioButton
            label="Work"
            onClick={onNavigateToSelectedWork}
            variant={activeHome ? "default" : "secondary"}
          />
          <PortfolioButton
            label="About"
            onClick={() => onNavigate("about")}
            variant={currentPage === "about" ? "default" : "secondary"}
          />
        </nav>
      </div>
    </header>
  );
}

function Hero({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
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
              style={{ ...portraitReveal.style, borderColor: colorTokens.border.default }}
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

function WorkIndex({
  onOpenCaseStudy,
  sectionRef,
}: {
  onOpenCaseStudy: () => void;
  sectionRef: RefObject<HTMLElement>;
}) {
  return (
    <section
      ref={sectionRef}
      className="border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-8 px-5 py-10 md:px-8 lg:px-10 lg:py-12 xl:flex-row xl:gap-12">
        <ScrollReveal className="shrink-0 xl:w-[280px]" variant="fade">
          <SectionLabel color="blue">{homePageData.selectedWorkLabel}</SectionLabel>
        </ScrollReveal>

        <div className="min-w-0 flex-1 space-y-6">
          {homePageData.workItems.map((item, index) => (
            <ScrollReveal key={item.id} staggerIndex={index}>
              <CaseStudyItem
                item={item}
                onClick={index === 0 ? onOpenCaseStudy : undefined}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutStrip() {
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

function HomePage({
  onOpenCaseStudy,
  selectedWorkRef,
}: {
  onOpenCaseStudy: () => void;
  selectedWorkRef: RefObject<HTMLElement>;
}) {
  return (
    <main>
      <Hero onOpenCaseStudy={onOpenCaseStudy} />
      <WorkIndex
        onOpenCaseStudy={onOpenCaseStudy}
        sectionRef={selectedWorkRef}
      />
      <AboutStrip />
    </main>
  );
}

function TimelineEntry({
  company,
  highlights,
  period,
  role,
  summary,
}: {
  company: string;
  highlights: string[];
  period: string;
  role: string;
  summary: string;
}) {
  return (
    <article
      className="border-t py-8 first:border-t-0 first:pt-0"
      style={{ borderColor: colorTokens.border.subtle }}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_132px] lg:gap-8">
        <div>
          <h2
            style={{
              ...typeTokens.heading.l,
              color: colorTokens.text.primary,
            }}
          >
            {role}
          </h2>
          <p
            className="mt-2"
            style={{
              ...typeTokens.body.m,
              color: colorTokens.text.subtle,
            }}
          >
            {company}
          </p>
        </div>
        <div
          className="text-left lg:text-right"
          style={{
            ...typeTokens.body.xs,
            color: colorTokens.text.subtle,
          }}
        >
          {period}
        </div>
      </div>

      <p
        className="mt-6"
        style={{
          ...typeTokens.body.m,
          color: colorTokens.text.secondary,
        }}
      >
        {summary}
      </p>

      <div className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <OutcomeCard key={highlight} text={highlight} />
        ))}
      </div>
    </article>
  );
}

function AboutPage() {
  const labelReveal = useScrollReveal({ variant: "fade" });
  const nameReveal = useScrollReveal({ delay: 20 });
  const introReveal = useScrollReveal({ delay: 40, variant: "fade" });
  const supportingReveal = useScrollReveal({ delay: 60, variant: "fade" });
  const ctaReveal = useScrollReveal({ delay: 90, variant: "fade" });
  const detailsReveal = useScrollReveal({ delay: 120 });

  return (
    <main className="border-b" style={{ borderColor: colorTokens.border.default }}>
      <section>
        <div className="mx-auto grid max-w-[1540px] gap-12 px-5 py-10 md:px-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:px-10 lg:py-12">
          <div className="space-y-8 lg:sticky lg:top-[108px] lg:self-start">
            <div ref={labelReveal.ref} className={labelReveal.className} style={labelReveal.style}>
              <SectionLabel color="blue">{aboutPageData.label}</SectionLabel>
            </div>

            <div ref={nameReveal.ref} className={nameReveal.className} style={nameReveal.style}>
              <h1
                style={{
                  ...typeTokens.heading.xl,
                  color: colorTokens.text.primary,
                }}
              >
                {aboutPageData.name}
              </h1>
            </div>

            <div ref={introReveal.ref} className={introReveal.className} style={introReveal.style}>
              <p
                style={{
                  ...typeTokens.body.l,
                  color: colorTokens.text.primary,
                }}
              >
                {aboutPageData.intro}
              </p>
            </div>

            <div
              ref={supportingReveal.ref}
              className={supportingReveal.className}
              style={supportingReveal.style}
            >
              <p
                style={{
                  ...typeTokens.body.s,
                  color: colorTokens.text.secondary,
                }}
              >
                {aboutPageData.supporting}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {aboutPageData.meta.map((item) => (
                <ValueChip
                  key={item.label}
                  accent={item.accent}
                  text={item.label}
                />
              ))}
            </div>

            <div ref={ctaReveal.ref} className={ctaReveal.className} style={ctaReveal.style}>
              <PortfolioButton
                href={resumeUrl}
                label="Download CV"
                trailingIcon={ArrowUpRight}
                variant="secondary"
              />
            </div>

            <div
              ref={detailsReveal.ref}
              className={`${detailsReveal.className} space-y-8 border-t pt-8`}
              style={{ ...detailsReveal.style, borderColor: colorTokens.border.subtle }}
            >
              <div>
                <p style={subtleLabelStyle()}>Expertise</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {aboutPageData.expertise.map((item) => (
                    <ValueChip
                      key={item.label}
                      accent={item.accent}
                      text={item.label}
                    />
                  ))}
                </div>
              </div>

              <BulletCard
                items={aboutPageData.education}
                size="s"
                title="Education"
                variant="secondary"
              />
            </div>
          </div>

          <div className="min-w-0">
            {aboutPageData.timeline.map((item, index) => (
              <ScrollReveal
                key={`${item.company}-${item.period}`}
                staggerIndex={index}
              >
                <TimelineEntry {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStudyMediaFrame({
  alt,
  className,
  mediaClassName,
  src,
  type = "image",
  overlays = [],
}: {
  alt: string;
  className?: string;
  mediaClassName?: string;
  src: string;
  type?: "image" | "video";
  overlays?: Array<{
    bordered?: boolean;
    className?: string;
    style?: CSSProperties;
  }>;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(type !== "video");

  useEffect(() => {
    if (type !== "video" || shouldLoadVideo) {
      return;
    }

    const frame = frameRef.current;
    if (!frame || typeof IntersectionObserver === "undefined") {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(frame);

    return () => observer.disconnect();
  }, [shouldLoadVideo, type]);

  return (
    <div
      ref={frameRef}
      className={["min-h-[320px] overflow-hidden", className].filter(Boolean).join(" ")}
      style={{
        borderColor: colorTokens.border.default,
      }}
    >
      {type === "video" ? (
        <video
          aria-label={alt}
          autoPlay
          className={["block h-full w-full", mediaClassName].filter(Boolean).join(" ")}
          loop
          muted
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
          src={shouldLoadVideo ? src : undefined}
        />
      ) : (
        <img
          alt={alt}
          className={["block h-full w-full", mediaClassName].filter(Boolean).join(" ")}
          decoding="async"
          loading="lazy"
          src={src}
        />
      )}
      {overlays.map((overlay, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={`${src}-${index}`}
          className={overlay.className}
          style={{
            ...(overlay.bordered
              ? {
                  border: "1px solid rgba(15,17,21,0.6)",
                }
              : null),
            ...overlay.style,
          }}
        />
      ))}
    </div>
  );
}

function ProblemQuestionRow({ text }: { text: string }) {
  return (
    <article
      className="flex items-center gap-3 border p-4"
      style={{ borderColor: colorTokens.border.default }}
    >
      <span
        aria-hidden
        style={{
          ...typeTokens.label.m,
          color: colorTokens.text.subtle,
        }}
      >
        +
      </span>
      <p
        style={{
          ...typeTokens.body.s,
          color: colorTokens.text.primary,
        }}
      >
        {text}
      </p>
    </article>
  );
}

function CaseStudyPage({ onBack }: { onBack: () => void }) {
  const heroCopyReveal = useScrollReveal({ delay: 20 });
  const heroMediaReveal = useScrollReveal({ delay: 60 });
  const heroMetricsReveal = useScrollReveal({ delay: 110 });

  return (
    <main className="overflow-x-clip">
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
            trailingIcon={undefined}
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
                <div className="relative max-w-[1000px] space-y-10 xl:pt-0"
                    style={{
                        zIndex: "9",
                      }}>
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

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
          <ScrollReveal variant="fade">
            <SectionLabel color="rust">Executive Summary</SectionLabel>
          </ScrollReveal>
          <div className="mt-7 grid items-start gap-4 xl:grid-cols-2 2xl:grid-cols-[381.82px_minmax(0,1fr)_minmax(0,1fr)]">
            {caseStudyData.executiveSummary.map((metric, index) => (
              <ScrollReveal
                key={metric.title}
                className={
                  index === 0
                    ? "h-full 2xl:row-span-2"
                    : index === 3
                      ? "2xl:col-span-2"
                      : "h-full"
                }
                staggerIndex={index}
              >
                <MetricCard
                  className={
                    index === 0
                      ? "h-full 2xl:row-span-2"
                      : index === 3
                        ? "2xl:col-span-2"
                        : "h-full"
                  }
                  {...metric}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
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

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
          <ScrollReveal variant="fade">
            <SectionLabel color="yellow">My Role &amp; Scope</SectionLabel>
          </ScrollReveal>
          <div className="mt-7 grid gap-10 xl:grid-cols-2 2xl:grid-cols-[835px_557px]">
            <ScrollReveal>
              <BulletCard items={caseStudyData.role.owned} size="m" title="What I owned" />
            </ScrollReveal>
            <ScrollReveal delay={40}>
              <BulletCard
                items={caseStudyData.role.contributed}
                size="m"
                title="What I contributed to"
                variant="secondary"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
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

              <div
                className="py-2"
                style={{
                  ...typeTokens.label.s,
                  color: colorTokens.text.subtle,
                }}
              >
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
                mediaClassName="h-full w-full object-cover"
                overlays={[
                  {
                    className: "absolute left-[-27.5px] top-[13.5px] h-[44px] w-[92px]",
                    style: { background: "rgba(200,76,42,0.8)" },
                  },
                  {
                    className: "absolute bottom-[-32.5px] left-[376.5px] right-[-20.5px] h-[54px]",
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

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
          <ScrollReveal variant="fade">
            <SectionLabel color="blue">Key Design Decisions</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={20}>
            <DecisionTable className="mt-7" rows={caseStudyData.decisions} />
          </ScrollReveal>
        </div>
      </section>

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
          <ScrollReveal variant="fade">
            <SectionLabel color="yellow">Systems Thinking</SectionLabel>
          </ScrollReveal>
          <div className="mt-7 grid gap-4 xl:grid-cols-2 2xl:grid-cols-[708px_708px]">
            <ScrollReveal className="space-y-8">
              <CaseStudyMediaFrame
                alt={caseStudyData.systems.imageAlt}
                className="relative h-[380px] border"
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
                    className: "absolute bottom-[-26.5px] left-[-14.5px] right-[396.5px] h-[76px]",
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

      <section className="overflow-x-clip border-b" style={{ borderColor: colorTokens.border.default }}>
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
    </main>
  );
}

export default function BauhausPortfolioPrototype() {
  const [page, setPage] = useState<PortfolioPage>(getPageFromLocation);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<
    "selected-work" | null
  >(null);
  const selectedWorkRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromLocation());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (page === "home") {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page);
    }

    const nextSearch = searchParams.toString();
    const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (currentUrl !== nextUrl) {
      window.history.replaceState(null, "", nextUrl);
    }

    window.scrollTo({ top: 0 });
  }, [page]);

  useEffect(() => {
    if (page !== "home" || pendingScrollTarget !== "selected-work") return;

    const frame = window.requestAnimationFrame(() => {
      const selectedWorkSection = selectedWorkRef.current;
      if (!selectedWorkSection) return;

      const header = document.querySelector('[data-portfolio-header="true"]');
      const headerOffset =
        header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
      const sectionTop =
        selectedWorkSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(sectionTop - headerOffset - 16, 0),
        behavior: "smooth",
      });
      setPendingScrollTarget(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [page, pendingScrollTarget]);

  const handleNavigate = (nextPage: PortfolioPage) => {
    setPendingScrollTarget(null);
    setPage(nextPage);
  };

  const handleNavigateToSelectedWork = () => {
    setPendingScrollTarget("selected-work");
    setPage("home");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: colorTokens.background.base,
        color: colorTokens.text.primary,
        fontFamily: fontStacks.inter,
      }}
    >
      <Header
        currentPage={page}
        onNavigate={handleNavigate}
        onNavigateToSelectedWork={handleNavigateToSelectedWork}
      />

      {page === "home" ? (
        <HomePage
          onOpenCaseStudy={() => handleNavigate("case-study")}
          selectedWorkRef={selectedWorkRef}
        />
      ) : page === "about" ? (
        <AboutPage />
      ) : (
        <CaseStudyPage onBack={() => handleNavigate("home")} />
      )}

      <PortfolioFooter
        left={page === "home" ? homePageData.footer.left : undefined}
        maxWidthClass={page === "about" ? "max-w-[1540px]" : "max-w-[1512px]"}
        right={page === "home" ? homePageData.footer.right : undefined}
      />
    </div>
  );
}
