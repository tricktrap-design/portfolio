import type { LucideIcon } from "lucide-react";

import { liftHoverClasses } from "../../../styles/interactionClasses";
import { colorTokens, typeTokens } from "../../../styles/designTokens";
import { joinClasses } from "../shared/joinClasses";

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
    className,
  );

  const style = {
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
