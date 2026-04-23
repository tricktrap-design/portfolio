import { colorTokens, fontStacks } from "../../styles/designTokens";
import { homePageData } from "./content/home";
import { usePortfolioNavigation } from "./navigation/usePortfolioNavigation";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { InfusionsStudyPage } from "./pages/InfusionsStudyPage";
import { Header } from "./shared/Header";
import { PortfolioFooter } from "./shared/PortfolioFooter";

export default function PortfolioApp() {
  const { navigate, navigateToSelectedWork, page, selectedWorkRef } =
    usePortfolioNavigation();

  return (
    <div
      className="min-h-screen"
      style={{
        background: colorTokens.background.base,
        color: colorTokens.text.primary,
        fontFamily: fontStacks.inter,
      }}
    >
      <Header
        currentPage={page}
        onNavigate={navigate}
        onNavigateToSelectedWork={navigateToSelectedWork}
      />

      {page === "home" ? (
        <HomePage
          onOpenCaseStudy={() => navigate("infusions-study")}
          selectedWorkRef={selectedWorkRef}
        />
      ) : page === "about" ? (
        <AboutPage />
      ) : (
        <InfusionsStudyPage onBack={() => navigate("home")} />
      )}

      <PortfolioFooter
        left={page === "home" ? homePageData.footer.left : undefined}
        maxWidthClass={page === "about" ? "max-w-[1540px]" : "max-w-[1512px]"}
        right={page === "home" ? homePageData.footer.right : undefined}
      />
    </div>
  );
}
