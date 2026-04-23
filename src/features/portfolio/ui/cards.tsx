import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import type { AccentName } from "../content/types";
import { colorTokens, fontStacks, typeTokens } from "../../../styles/designTokens";
import { joinClasses } from "../shared/joinClasses";
import { PortfolioButton } from "./actions";

const cardSurfaces: Record<AccentName, string> = {
  plain: colorTokens.tint.plain,
  blue: colorTokens.tint.blue,
  rust: colorTokens.tint.rust,
  yellow: colorTokens.tint.yellow,
};

const subtleLabelTextStyle: CSSProperties = {
  ...typeTokens.label.s,
  color: colorTokens.text.subtle,
};

export function MetricCard({
  className,
  ctaLabel,
  description,
  kpi,
  onCtaClick,
  tint = "plain",
  title,
}: {
  className?: string;
  ctaLabel?: string;
  description: string;
  kpi?: string;
  onCtaClick?: () => void;
  tint?: AccentName;
  title: string;
}) {
  return (
    <article
      className={joinClasses(
        "flex h-full min-w-0 flex-col gap-2 border p-4 sm:p-5",
        className,
      )}
      style={{
        borderColor: colorTokens.border.default,
        background: cardSurfaces[tint],
      }}
    >
      <p style={subtleLabelTextStyle}>{title}</p>
      <div className="flex flex-col gap-1">
        {kpi ? (
          <p
            style={{
              ...typeTokens.body.xl,
              fontWeight: 700,
              color: colorTokens.text.primary,
            }}
          >
            {kpi}
          </p>
        ) : null}
        <p
          style={{
            ...typeTokens.body.s,
            color: colorTokens.text.primary,
          }}
        >
          {description}
        </p>
      </div>
      {ctaLabel ? (
        <PortfolioButton
          className="self-start"
          label={ctaLabel}
          onClick={onCtaClick}
          trailingIcon={ArrowUpRight}
          variant="ghost"
        />
      ) : null}
    </article>
  );
}

export function BulletCard({
  className,
  items,
  size = "m",
  title,
  variant = "default",
}: {
  className?: string;
  items: string[];
  size?: "m" | "s";
  title: string;
  variant?: "default" | "secondary";
}) {
  const bodyStyle =
    size === "m"
      ? {
          ...typeTokens.body.m,
          color: colorTokens.text.primary,
        }
      : {
          ...typeTokens.body.s,
          color: colorTokens.text.primary,
        };

  return (
    <article
      className={joinClasses("flex flex-col gap-4 border p-4 sm:p-5", className)}
      style={{
        borderColor:
          variant === "secondary"
            ? colorTokens.border.subtle
            : colorTokens.border.default,
        background:
          variant === "secondary"
            ? colorTokens.background.base
            : colorTokens.background.subtle,
      }}
    >
      <p style={subtleLabelTextStyle}>{title}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <span
              aria-hidden
              style={{
                fontFamily: fontStacks.inter,
                fontSize: size === "m" ? "18px" : "16px",
                lineHeight: size === "m" ? "32px" : "26px",
                color: colorTokens.text.primary,
              }}
            >
              •
            </span>
            <p style={bodyStyle}>{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function OutcomeCard({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <article
      className={joinClasses("flex items-start gap-3 border p-4 sm:p-5", className)}
      style={{
        borderColor: colorTokens.border.default,
        background: colorTokens.background.base,
      }}
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
          ...typeTokens.body.m,
          color: colorTokens.text.primary,
        }}
      >
        {text}
      </p>
    </article>
  );
}

