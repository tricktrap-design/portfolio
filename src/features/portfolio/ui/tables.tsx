import type { CSSProperties, ReactNode } from "react";

import type { DecisionRow } from "../content/types";
import { colorTokens, typeTokens } from "../../../styles/designTokens";
import { joinClasses } from "../shared/joinClasses";

const subtleLabelTextStyle: CSSProperties = {
  ...typeTokens.label.s,
  color: colorTokens.text.subtle,
};

const bodySmallStyle: CSSProperties = {
  ...typeTokens.body.s,
  color: colorTokens.text.primary,
};

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <div
      className="border px-4 py-[14px]"
      style={{
        ...subtleLabelTextStyle,
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
      <p className="mb-3 md:hidden" style={subtleLabelTextStyle}>
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

