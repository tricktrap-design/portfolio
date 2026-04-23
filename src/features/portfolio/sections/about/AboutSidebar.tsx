import { ArrowUpRight } from "lucide-react";

import { useScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { aboutPageData, resumeUrl } from "../../content/about";
import { BulletCard, PortfolioButton, SectionLabel, ValueChip } from "../../ui";

function subtleLabelStyle() {
  return {
    ...typeTokens.label.s,
    color: colorTokens.text.subtle,
  };
}

export function AboutSidebar() {
  const labelReveal = useScrollReveal({ variant: "fade" });
  const nameReveal = useScrollReveal({ delay: 20 });
  const introReveal = useScrollReveal({ delay: 40, variant: "fade" });
  const supportingReveal = useScrollReveal({ delay: 60, variant: "fade" });
  const ctaReveal = useScrollReveal({ delay: 90, variant: "fade" });
  const detailsReveal = useScrollReveal({ delay: 120 });

  return (
    <div className="space-y-8 lg:sticky lg:top-[108px] lg:self-start">
      <div
        ref={labelReveal.ref}
        className={labelReveal.className}
        style={labelReveal.style}
      >
        <SectionLabel color="blue">{aboutPageData.label}</SectionLabel>
      </div>

      <div
        ref={nameReveal.ref}
        className={nameReveal.className}
        style={nameReveal.style}
      >
        <h1
          style={{
            ...typeTokens.heading.xl,
            color: colorTokens.text.primary,
          }}
        >
          {aboutPageData.name}
        </h1>
      </div>

      <div
        ref={introReveal.ref}
        className={introReveal.className}
        style={introReveal.style}
      >
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
          <ValueChip key={item.label} accent={item.accent} text={item.label} />
        ))}
      </div>

      <div
        ref={ctaReveal.ref}
        className={ctaReveal.className}
        style={ctaReveal.style}
      >
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
              <ValueChip key={item.label} accent={item.accent} text={item.label} />
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
  );
}

