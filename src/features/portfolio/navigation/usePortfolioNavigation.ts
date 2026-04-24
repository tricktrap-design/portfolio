import { useEffect, useRef, useState, type RefObject } from "react";

import type { PortfolioPage } from "../content/types";
import { getPageFromLocation, normalizePathname, pagePaths } from "./routes";

type PendingScrollTarget = "selected-work" | null;

type UsePortfolioNavigationResult = {
  page: PortfolioPage;
  selectedWorkRef: RefObject<HTMLElement>;
  navigate: (page: PortfolioPage) => void;
  navigateToSelectedWork: () => void;
};

export function usePortfolioNavigation(): UsePortfolioNavigationResult {
  const [page, setPage] = useState<PortfolioPage>(getPageFromLocation);
  const [pendingScrollTarget, setPendingScrollTarget] =
    useState<PendingScrollTarget>(null);
  const selectedWorkRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handlePopState = () => {
      setPendingScrollTarget(null);
      setPage(getPageFromLocation());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const currentPath = normalizePathname(window.location.pathname);
    const nextPath = pagePaths[page];
    const searchParams = new URLSearchParams(window.location.search);
    const hasLegacyPageParam = searchParams.has("page");
    const legacyHashPage = window.location.hash.replace("#", "");
    const hasLegacyHashRoute =
      legacyHashPage === "about" ||
      legacyHashPage === "infusions-study" ||
      legacyHashPage === "medsrec-study";

    if (currentPath !== nextPath || hasLegacyPageParam || hasLegacyHashRoute) {
      window.history.replaceState(null, "", nextPath);
    }

    window.scrollTo({ top: 0 });
  }, [page]);

  useEffect(() => {
    if (page !== "home" || pendingScrollTarget !== "selected-work") return;

    const frame = window.requestAnimationFrame(() => {
      const selectedWorkSection = selectedWorkRef.current;
      if (!selectedWorkSection) return;

      const header = document.querySelector('[data-portfolio-header="true"]');
      const headerOffset =
        header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
      const sectionTop =
        selectedWorkSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(sectionTop - headerOffset - 16, 0),
        behavior: "smooth",
      });
      setPendingScrollTarget(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [page, pendingScrollTarget]);

  const navigate = (nextPage: PortfolioPage) => {
    setPendingScrollTarget(null);
    const nextPath = pagePaths[nextPage];
    if (normalizePathname(window.location.pathname) !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
    setPage(nextPage);
  };

  const navigateToSelectedWork = () => {
    if (page !== "home") {
      window.history.pushState(null, "", pagePaths.home);
    }
    setPendingScrollTarget("selected-work");
    setPage("home");
  };

  return {
    page,
    selectedWorkRef,
    navigate,
    navigateToSelectedWork,
  };
}
