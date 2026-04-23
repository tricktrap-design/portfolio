import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

import type {
  AccentName,
  ChipAccent,
  DecisionRow,
  WorkItem,
} from "../../content/portfolioContent";
import { liftHoverClasses } from "../../styles/interactionClasses";
import { colorTokens, fontStacks, typeTokens } from "../../styles/designTokens";

function joinClasses(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const chipSurfaces: Record<ChipAccent, string> = {
  blue: colorTokens.tint.blue,
  rust: colorTokens.tint.rust,
  yellow: colorTokens.tint.yellow,
};

const accentFills: Record<ChipAccent, string> = {
  blue: colorTokens.accent.blue,
  rust: colorTokens.accent.rust,
  yellow: colorTokens.accent.yellow,
};

const cardSurfaces: Record<AccentName, string> = {
  plain: colorTokens.tint.plain,
  blue: colorTokens.tint.blue,
  rust: colorTokens.tint.rust,
  yellow: colorTokens.tint.yellow,
};

const subtleLabelStyle: CSSProperties = {
  ...typeTokens.label.s,
  color: colorTokens.text.subtle,
};

const bodySmallStyle: CSSProperties = {
  ...typeTokens.body.s,
  color: colorTokens.text.primary,
};

export function GridOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-100">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right, ${colorTokens.border.subtle} 1px, transparent 1px), linear-gradient(to bottom, ${colorTokens.border.subtle} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.8), rgba(0,0,0,.25))",
        }}
      />
      <div
        className="absolute inset-y-0 left-[8.333%] border-l"
        style={{ borderColor: colorTokens.border.default }}
      />
      <div
        className="absolute inset-y-0 left-1/2 border-l"
        style={{ borderColor: colorTokens.border.default }}
      />
      <div
        className="absolute inset-y-0 right-[8.333%] border-l"
        style={{ borderColor: colorTokens.border.default }}
      />
    </div>
  );
}

export function SectionLabel({
  children,
  color = "rust",
  className,
}: {
  children: ReactNode;
  color?: ChipAccent;
  className?: string;
}) {
  return (
    <div className={joinClasses("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="inline-block h-[14px] w-[14px] shrink-0 rounded-full"
        style={{ background: accentFills[color] }}
      />
      <span
        style={{
          ...typeTokens.label.m,
          color: colorTokens.text.primary,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export type PortfolioButtonVariant = "default" | "secondary" | "ghost";

type PortfolioButtonBaseProps = {
  className?: string;
  disabled?: boolean;
  href?: string;
  leadingIcon?: LucideIcon;
  onClick?: () => void;
  trailingIcon?: LucideIcon;
  variant?: PortfolioButtonVariant;
};

type PortfolioButtonProps =
  | (PortfolioButtonBaseProps & {
      label?: string;
      showText?: true;
    })
  | (PortfolioButtonBaseProps & {
      label: string;
      showText: false;
    });

export function PortfolioButton({
  className,
  disabled = false,
  href,
  label,
  leadingIcon,
  onClick,
  showText = true,
  trailingIcon,
  variant = "default",
}: PortfolioButtonProps) {
  const isGhost = variant === "ghost";
  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0
      ? label
      : "Open case study";
  const classes = joinClasses(
    "inline-flex w-fit max-w-full items-center gap-[10px] whitespace-normal text-left",
    !disabled && liftHoverClasses,
    isGhost ? "p-2" : "border px-4 py-3 sm:py-4",
    disabled && "cursor-not-allowed opacity-60",
    className
  );

  const style: CSSProperties = {
    ...typeTokens.button.m,
    background:
      variant === "default"
        ? colorTokens.accent.yellow
        : variant === "secondary"
          ? colorTokens.background.subtle
          : "transparent",
    borderColor: isGhost ? "transparent" : colorTokens.border.default,
    color: colorTokens.text.primary,
    textDecoration: "none",
  };

  const content = (
    <>
      {LeadingIcon ? (
        <span className="inline-flex shrink-0 items-center justify-center">
          <LeadingIcon
            aria-hidden="true"
            className="h-4 w-4"
            strokeWidth={1.75}
          />
        </span>
      ) : null}
      {showText ? <span>{resolvedLabel}</span> : null}
      {TrailingIcon ? (
        <span className="inline-flex shrink-0 items-center justify-center">
          <TrailingIcon
            aria-hidden="true"
            className="h-4 w-4"
            strokeWidth={1.75}
          />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        aria-disabled={disabled}
        aria-label={!showText ? resolvedLabel : undefined}
        className={classes}
        href={href}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-label={!showText ? resolvedLabel : undefined}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type="button"
    >
      {content}
    </button>
  );
}

export function ValueChip({
  accent = "blue",
  className,
  text,
}: {
  accent?: ChipAccent;
  className?: string;
  text: string;
}) {
  return (
    <div
      className={joinClasses(
        "inline-flex max-w-full items-center gap-2 border px-[14px] py-[10px]",
        className
      )}
      style={{
        ...typeTokens.label.s,
        borderColor: colorTokens.border.default,
        background: chipSurfaces[accent],
        color: colorTokens.text.primary,
      }}
    >
      <span
        aria-hidden
        className="h-3 w-3 shrink-0 rounded-full border"
        style={{ borderColor: colorTokens.text.primary, borderWidth: "1.5px" }}
      />
      <span>{text}</span>
    </div>
  );
}

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
        className
      )}
      style={{
        borderColor: colorTokens.border.default,
        background: cardSurfaces[tint],
      }}
    >
      <p style={subtleLabelStyle}>{title}</p>
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
      <p style={subtleLabelStyle}>{title}</p>
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

export function ProcessCard({
  className,
  index,
  text,
}: {
  className?: string;
  index: string;
  text: string;
}) {
  return (
    <article
      className={joinClasses(
        "flex flex-col gap-4 border bg-transparent p-5 md:flex-row md:items-start md:gap-6",
        className
      )}
      style={{
        borderColor: colorTokens.border.default,
        background: colorTokens.background.base,
      }}
    >
      <p className="shrink-0 md:w-[72px]" style={subtleLabelStyle}>
        {index}
      </p>
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
      <p style={subtleLabelStyle}>{item.index}</p>
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
            ...subtleLabelStyle,
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
          trailingIcon={ArrowUpRight}
          variant="ghost"
        />
      </div>
    </>
  );

  const classes = joinClasses(
    "grid gap-6 border px-4 py-[18px] sm:px-5 md:grid-cols-[56px_minmax(0,0.95fr)_minmax(0,1.45fr)_40px] md:items-start",
    interactive ? joinClasses("w-full text-left", liftHoverClasses) : "",
    className
  );

  const style: CSSProperties = {
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

function TableHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="border px-4 py-[14px]"
      style={{
        ...subtleLabelStyle,
        borderColor: colorTokens.border.default,
        background: colorTokens.background.base,
      }}
    >
      {children}
    </div>
  );
}

function TableCell({
  children,
  emphasis = false,
  mobileLabel,
}: {
  children: ReactNode;
  emphasis?: boolean;
  mobileLabel: string;
}) {
  return (
    <div
      className="border p-4"
      style={{
        borderColor: colorTokens.border.default,
        background: emphasis ? colorTokens.tint.yellow : colorTokens.background.base,
      }}
    >
      <p className="mb-3 md:hidden" style={subtleLabelStyle}>
        {mobileLabel}
      </p>
      <p
        style={
          emphasis
            ? {
                ...typeTokens.body.m,
                color: colorTokens.text.primary,
              }
            : bodySmallStyle
        }
      >
        {children}
      </p>
    </div>
  );
}

export function DecisionTable({
  className,
  rows,
}: {
  className?: string;
  rows: DecisionRow[];
}) {
  return (
    <div className={joinClasses("space-y-2", className)}>
      <div className="hidden md:grid md:grid-cols-[0.5fr_1fr_1.5fr]">
        <TableHeader>Option considered</TableHeader>
        <TableHeader>Decisions made</TableHeader>
        <TableHeader>Outcomes</TableHeader>
      </div>
      <div className="space-y-2">
        {rows.map((row) => (
          <div
            key={row.option}
            className="grid gap-0 md:grid-cols-[0.5fr_1fr_1.5fr]"
          >
            <TableCell mobileLabel="Option considered">{row.option}</TableCell>
            <TableCell emphasis mobileLabel="Decision made">
              {row.decision}
            </TableCell>
            <TableCell mobileLabel="Outcomes">{row.rationale}</TableCell>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArtPanel({ note }: { note: string }) {
  return (
    <div
      className="relative min-h-[320px] border"
      style={{
        borderColor: colorTokens.border.default,
        background: colorTokens.background.base,
      }}
    >
      <div
        className="absolute left-[8%] top-[10%] h-[28%] w-[52%] border-2"
        style={{ borderColor: colorTokens.text.primary }}
      />
      <div
        className="absolute right-[8%] top-[18%] h-[44%] w-[30%]"
        style={{ background: colorTokens.accent.blue }}
      />
      <div
        className="absolute bottom-[16%] left-[18%] h-[110px] w-[110px] rounded-full border-[10px]"
        style={{ borderColor: colorTokens.accent.rust }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] h-[2px] w-[42%] -rotate-[28deg]"
        style={{ background: colorTokens.text.primary }}
      />
      <div className="absolute bottom-4 right-4" style={subtleLabelStyle}>
        {note}
      </div>
    </div>
  );
}

export function ImagePlaceholder({
  accent = "blue",
  className,
  note,
}: {
  accent?: ChipAccent;
  className?: string;
  note: string;
}) {
  return (
    <div
      className={joinClasses("relative border", className)}
      style={{
        borderColor: colorTokens.border.default,
        background:
          "linear-gradient(135deg, rgba(27,115,189,.12), #e8e6e3 42%, rgba(200,76,42,.08))",
      }}
    >
      <div
        className="absolute left-[9%] top-[12%] h-[26%] w-[42%] border-2"
        style={{ borderColor: colorTokens.text.primary }}
      />
      <div
        className="absolute right-[6%] top-[14%] h-[32%] w-[32%]"
        style={{ background: accentFills[accent] }}
      />
      <div
        className="absolute bottom-8 left-7 h-[104px] w-[104px] rounded-full border-[10px]"
        style={{ borderColor: colorTokens.accent.rust }}
      />
      <div className="absolute left-5 top-4" style={subtleLabelStyle}>
        Image placeholder
      </div>
      <div className="absolute bottom-4 right-5" style={subtleLabelStyle}>
        {note}
      </div>
    </div>
  );
}

export function PortfolioFooter({
  left = "EMILIO ARBOLEYA 2026",
  maxWidthClass = "max-w-[1540px]",
  right = "UX PRODUCT DESIGN LEAD",
}: {
  left?: string;
  maxWidthClass?: string;
  right?: string;
}) {
  return (
    <footer
      className="border-t"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div
        className={joinClasses(
          "mx-auto flex flex-col gap-3 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10",
          maxWidthClass
        )}
      >
        <span
          style={{
            ...typeTokens.label.s,
            color: colorTokens.text.secondary,
          }}
        >
          {left}
        </span>
        <span
          style={{
            ...typeTokens.label.s,
            color: colorTokens.text.secondary,
          }}
        >
          {right}
        </span>
      </div>
    </footer>
  );
}
