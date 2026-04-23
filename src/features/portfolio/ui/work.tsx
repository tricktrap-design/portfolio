import type { CSSProperties } from "react";

import type { WorkItem } from "../content/types";
import { liftHoverClasses } from "../../../styles/interactionClasses";
import { colorTokens, typeTokens } from "../../../styles/designTokens";
import { joinClasses } from "../shared/joinClasses";
import { PortfolioButton } from "./actions";

const subtleLabelTextStyle: CSSProperties = {
  ...typeTokens.label.s,
  color: colorTokens.text.subtle,
};

const bodySmallStyle: CSSProperties = {
  ...typeTokens.body.s,
  color: colorTokens.text.primary,
};

function WorkMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p
        style={{
          ...typeTokens.heading.l,
          color: colorTokens.text.primary,
          textTransform: "uppercase",
        }}
      >
        {value}
      </p>
      <p
        style={{
          ...typeTokens.body.xs,
          color: colorTokens.text.subtle,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export function CaseStudyItem({
  className,
  item,
  onClick,
}: {
  className?: string;
  item: WorkItem;
  onClick?: () => void;
}) {
  const interactive = typeof onClick === "function";
  const content = (
    <>
      <p style={subtleLabelTextStyle}>{item.index}</p>
      <div className="min-w-0 flex flex-col gap-[6px] uppercase md:max-w-[480px]">
        <h3
          style={{
            ...typeTokens.heading.l,
            color: colorTokens.text.primary,
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            ...subtleLabelTextStyle,
            color:
              item.typeAccent === "rust"
                ? colorTokens.accent.rust
                : colorTokens.text.subtle,
          }}
        >
          {item.type}
        </p>
      </div>
      <div className="flex min-w-px flex-col gap-[18px]">
        <p style={bodySmallStyle}>{item.summary}</p>
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {item.metrics.map((metric) => (
            <WorkMetric key={`${item.id}-${metric.label}`} {...metric} />
          ))}
        </div>
      </div>
      <div className="md:justify-self-end">
        <PortfolioButton
          label={`Open ${item.title} case study`}
          showText={false}
          variant="ghost"
        />
      </div>
    </>
  );

  const classes = joinClasses(
    "grid gap-6 border px-4 py-[18px] sm:px-5 md:grid-cols-[56px_minmax(0,0.95fr)_minmax(0,1.45fr)_40px] md:items-start",
    interactive ? joinClasses("w-full text-left", liftHoverClasses) : "",
    className,
  );

  const style = {
    borderColor: item.highlight
      ? colorTokens.border.default
      : colorTokens.border.subtle,
    background: item.highlight
      ? colorTokens.tint.blue
      : colorTokens.background.subtle,
  };

  if (interactive) {
    return (
      <button className={classes} onClick={onClick} style={style} type="button">
        {content}
      </button>
    );
  }

  return (
    <article className={classes} style={style}>
      {content}
    </article>
  );
}

