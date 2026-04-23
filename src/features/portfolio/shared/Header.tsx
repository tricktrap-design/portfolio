import type { PortfolioPage } from "../content/types";
import { colorTokens, typeTokens } from "../../../styles/designTokens";
import { PortfolioButton } from "../ui";

export function Header({
  currentPage,
  onNavigate,
  onNavigateToSelectedWork,
}: {
  currentPage: PortfolioPage;
  onNavigate: (page: PortfolioPage) => void;
  onNavigateToSelectedWork: () => void;
}) {
  const activeHome = currentPage === "home" || currentPage === "infusions-study";

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

