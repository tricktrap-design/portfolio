import { colorTokens, typeTokens } from "../../../styles/designTokens";
import { joinClasses } from "./joinClasses";

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
          maxWidthClass,
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
