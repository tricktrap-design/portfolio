import { useEffect, useState, type CSSProperties } from "react";

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
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "22px",
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
  onNavigate,
}: {
  currentPage: PortfolioPage;
  onNavigate: (page: PortfolioPage) => void;
}) {
  const activeHome = currentPage === "home" || currentPage === "case-study";

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-[6px]"
      style={{
        borderColor: colorTokens.border.default,
        background: colorTokens.background.header,
      }}
    >
      <div className="mx-auto flex h-[88px] w-full max-w-[1512px] items-center justify-between gap-4 px-10 py-5">
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
              fontFamily: fontStacks.figtree,
              fontSize: "26px",
              fontWeight: 700,
              lineHeight: "40px",
              color: colorTokens.text.primary,
            }}
          >
            Emilio Arboleya
          </div>
        </button>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-2">
          <PortfolioButton
            label="Work"
            onClick={() => onNavigate("home")}
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
  return (
    <section
      className="relative border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-5 py-8 md:px-8 lg:px-10 lg:py-[44px] xl:h-[712px]">
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

        <div className="grid h-full gap-8 xl:grid-cols-[912px_480px] xl:gap-10">
          <div className="flex h-full flex-col gap-10">
            <div
              style={{
                ...typeTokens.display.xl,
                color: colorTokens.text.primary,
              }}
            >
              {homePageData.hero.nameLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>

            <div
              className="max-w-[478px]"
              style={{
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

            <div className="mt-auto grid w-full gap-4 md:grid-cols-[1fr_0.75fr]" style={{zIndex:"9"}}>
              <HeroInfoCard
                description={homePageData.hero.latestWork.description}
                title={homePageData.hero.latestWork.title}
              />
              <MetricCard
                className="row-span-2"
                description={homePageData.hero.satisfaction.description}
                kpi={homePageData.hero.satisfaction.kpi}
                tint="plain"
                title={homePageData.hero.satisfaction.title}
              />
              <PortfolioButton
                className="self-start"
                label="open case study"
                onClick={onOpenCaseStudy}
                trailingIcon="↗"
              />
            </div>
          </div>

          <div className="grid h-full gap-4 xl:grid-rows-[1fr_auto]">
            <div
              className="relative min-h-[360px] border xl:min-h-0"
              style={{ borderColor: colorTokens.border.default }}
            >
              <img
                alt="Portrait of Emilio Arboleya"
                className="absolute inset-0 h-full w-full object-cover"
                src={homePageData.hero.portraitUrl}
              />
              <div
                className="absolute left-[-13px] top-[-27px] h-[99px] w-[273px] border"
                style={{ borderColor: "rgba(15,17,21,0.6)" }}
              />
              <div
                className="absolute bottom-[72px] right-[-19px] top-[202px] w-[59px]"
                style={{ background: "rgba(27,115,189,0.8)" }}
              />
            </div>

            <HeroAboutCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkIndex({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  return (
    <section
      className="border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-8 px-5 py-10 md:px-8 lg:px-10 lg:py-12 xl:flex-row xl:gap-12">
        <div className="shrink-0 xl:w-[280px]">
          <SectionLabel color="blue">{homePageData.selectedWorkLabel}</SectionLabel>
        </div>

        <div className="min-w-0 flex-1 space-y-6">
          {homePageData.workItems.map((item, index) => (
            <CaseStudyItem
              key={item.id}
              item={item}
              onClick={index === 0 ? onOpenCaseStudy : undefined}
            />
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
            <div className="shrink-0 xl:w-[280px]">
              <SectionLabel color="rust">{homePageData.about.label}</SectionLabel>
            </div>

            <div className="max-w-[980px] space-y-8">
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
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {homePageData.about.values.map((item) => (
              <ValueChip
                key={item.label}
                accent={item.accent}
                text={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({
  onOpenCaseStudy,
}: {
  onOpenCaseStudy: () => void;
}) {
  return (
    <main>
      <Hero onOpenCaseStudy={onOpenCaseStudy} />
      <WorkIndex onOpenCaseStudy={onOpenCaseStudy} />
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
  return (
    <main className="border-b" style={{ borderColor: colorTokens.border.default }}>
      <section>
        <div className="mx-auto grid max-w-[1540px] gap-12 px-5 py-10 md:px-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:px-10 lg:py-12">
          <div className="space-y-8 lg:sticky lg:top-[108px] lg:self-start">
            <SectionLabel color="blue">{aboutPageData.label}</SectionLabel>

            <h1
              style={{
                ...typeTokens.display.l,
                color: colorTokens.text.primary,
                fontSize: "clamp(4rem, 10vw, 7.4rem)",
                lineHeight: "0.9",
              }}
            >
              {aboutPageData.name}
            </h1>

            <p
              style={{
                ...typeTokens.body.l,
                color: colorTokens.text.primary,
              }}
            >
              {aboutPageData.intro}
            </p>

            <p
              style={{
                ...typeTokens.body.s,
                color: colorTokens.text.secondary,
              }}
            >
              {aboutPageData.supporting}
            </p>

            <div className="flex flex-wrap gap-3">
              {aboutPageData.meta.map((item) => (
                <ValueChip
                  key={item.label}
                  accent={item.accent}
                  text={item.label}
                />
              ))}
            </div>

            <PortfolioButton
              href={resumeUrl}
              label="Download CV"
              trailingIcon="↗"
              variant="secondary"
            />

            <div
              className="space-y-8 border-t pt-8"
              style={{ borderColor: colorTokens.border.subtle }}
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
            {aboutPageData.timeline.map((item) => (
              <TimelineEntry key={`${item.company}-${item.period}`} {...item} />
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
  return (
    <div
      className={className}
      style={{
        borderColor: colorTokens.border.default,
      }}
    >
      {type === "video" ? (
        <video
          aria-label={alt}
          autoPlay
          className={mediaClassName}
          loop
          muted
          playsInline
          preload="metadata"
          src={src}
        />
      ) : (
        <img alt={alt} className={mediaClassName} src={src} />
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
  return (
    <main>
      <section
        className="relative border-b"
        style={{ borderColor: colorTokens.border.default }}
      >
        <div className="mx-auto w-full max-w-[1512px] px-5 py-8 md:px-8 lg:px-10 lg:py-10">
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

          <PortfolioButton
            label="back"
            leadingIcon="←"
            onClick={onBack}
            trailingIcon={undefined}
            variant="ghost"
          />

          <div className="mt-4 xl:h-[539px]">
            <div className="grid h-full gap-8 xl:grid-cols-[1fr_744px] xl:gap-0">
              <div className="relative">
                <div
                  className="hidden xl:block"
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

              <CaseStudyMediaFrame
                alt={caseStudyData.hero.imageAlt}
                className="relative h-[360px] border xl:mt-[34px] xl:h-[505px] xl:w-[744px]"
                mediaClassName="h-full w-full object-cover"
                src={caseStudyData.hero.imageUrl}
              />
            </div>
          </div>

          <div className="grid items-start gap-4 pt-6 xl:grid-cols-[447px_506px_447px]" style={{position:"relative", zIndex:"9"}}>
            {caseStudyData.metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10">
          <SectionLabel color="rust">Executive Summary</SectionLabel>
          <div className="mt-7 grid items-start gap-4 xl:grid-cols-[381.82px_minmax(0,1fr)_minmax(0,1fr)]">
            <MetricCard
              className="xl:row-span-2"
              {...caseStudyData.executiveSummary[0]}
            />
            <MetricCard {...caseStudyData.executiveSummary[1]} />
            <MetricCard {...caseStudyData.executiveSummary[2]} />
            <MetricCard {...caseStudyData.executiveSummary[3]} />
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10">
          <SectionLabel color="blue">Strategic Context</SectionLabel>
          <div className="mt-7 grid gap-10 xl:grid-cols-[836px_556px]">
            <div className="space-y-6">
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
            </div>

            <div className="space-y-4">
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
                {caseStudyData.strategic.chips.map((chip) => (
                  <ValueChip
                    key={chip.label}
                    accent={chip.accent}
                    text={chip.label}
                  />
                ))}
              </div>

              <BulletCard
                items={caseStudyData.strategic.whyItMattered}
                size="s"
                title="Why it mattered"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10">
          <SectionLabel color="yellow">My Role &amp; Scope</SectionLabel>
          <div className="mt-7 grid gap-10 xl:grid-cols-[835px_557px]">
            <BulletCard items={caseStudyData.role.owned} size="m" title="What I owned" />
            <BulletCard
              items={caseStudyData.role.contributed}
              size="m"
              title="What I contributed to"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-12 md:px-8 lg:px-10">
          <SectionLabel color="rust">Problem Definition</SectionLabel>
          <div className="mt-7 grid gap-4 xl:grid-cols-[708px_708px]">
            <div className="space-y-4">
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
                {caseStudyData.problemDefinition.uncertain.map((item) => (
                  <ProblemQuestionRow key={item} text={item} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
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
                {caseStudyData.problemDefinition.chips.map((chip) => (
                  <ValueChip
                    key={chip.label}
                    accent={chip.accent}
                    text={chip.label}
                  />
                ))}
              </div>

              <BulletCard
                items={caseStudyData.problemDefinition.known}
                size="s"
                title="What we knew"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10">
          <SectionLabel color="blue">Key Design Decisions</SectionLabel>
          <DecisionTable className="mt-7" rows={caseStudyData.decisions} />
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10">
          <SectionLabel color="yellow">Systems Thinking</SectionLabel>
          <div className="mt-7 grid gap-4 xl:grid-cols-[708px_708px]">
            <div className="space-y-8">
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
                {caseStudyData.systems.chips.map((chip) => (
                  <ValueChip
                    key={chip.label}
                    accent={chip.accent}
                    text={chip.label}
                  />
                ))}
              </div>

              <BulletCard
                items={caseStudyData.systems.solved}
                size="s"
                title="What the system had to solve"
                variant="secondary"
              />
            </div>

            <div className="space-y-4">
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
            </div>
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: colorTokens.border.default }}>
        <div className="mx-auto w-full max-w-[1512px] px-5 py-10 md:px-8 lg:px-10">
          <SectionLabel color="rust">Outcomes</SectionLabel>

          <p
            className="mt-8"
            style={{
              ...typeTokens.body.m,
              color: colorTokens.text.secondary,
            }}
          >
            {caseStudyData.outcomeNote}
          </p>

          <div className="mt-8 grid items-start gap-4 xl:grid-cols-[447px_506px_447px]">
            {caseStudyData.outcomes.metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>

          <p
            className="mt-8"
            style={{
              ...typeTokens.body.l,
              color: colorTokens.text.secondary,
            }}
          >
            {caseStudyData.outcomes.lead}
          </p>

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
        </div>
      </section>
    </main>
  );
}

export default function BauhausPortfolioPrototype() {
  const [page, setPage] = useState<PortfolioPage>(getPageFromLocation);

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

  return (
    <div
      className="min-h-screen"
      style={{
        background: colorTokens.background.base,
        color: colorTokens.text.primary,
        fontFamily: fontStacks.inter,
      }}
    >
      <Header currentPage={page} onNavigate={setPage} />

      {page === "home" ? (
        <HomePage
          onOpenCaseStudy={() => setPage("case-study")}
        />
      ) : page === "about" ? (
        <AboutPage />
      ) : (
        <CaseStudyPage onBack={() => setPage("home")} />
      )}

      <PortfolioFooter
        left={page === "home" ? homePageData.footer.left : undefined}
        maxWidthClass={page === "about" ? "max-w-[1540px]" : "max-w-[1512px]"}
        right={page === "home" ? homePageData.footer.right : undefined}
      />
    </div>
  );
}
