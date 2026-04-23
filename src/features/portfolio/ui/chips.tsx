import type { CSSProperties, ReactNode } from "react";

import type { ChipAccent } from "../content/types";
import { colorTokens, typeTokens } from "../../../styles/designTokens";
import { joinClasses } from "../shared/joinClasses";

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

const valueChipTextStyle: CSSProperties = {
  ...typeTokens.label.s,
  color: colorTokens.text.primary,
};

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
        className,
      )}
      style={{
        ...valueChipTextStyle,
        borderColor: colorTokens.border.default,
        background: chipSurfaces[accent],
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

