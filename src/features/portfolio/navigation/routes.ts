import type { PortfolioPage } from "../content/types";

export const pagePaths: Record<PortfolioPage, string> = {
  home: "/",
  about: "/about",
  "infusions-study": "/infusions-study",
};

const redirectStorageKey = "portfolio:redirect-url";

export function normalizePathname(pathname: string) {
  const trimmedPath = pathname.replace(/\/+$/, "");
  return trimmedPath || "/";
}

export function getPageFromPathname(pathname: string): PortfolioPage | null {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === pagePaths.home) return "home";
  if (normalizedPath === pagePaths.about) return "about";
  if (normalizedPath === pagePaths["infusions-study"]) return "infusions-study";

  return null;
}

export function restoreRedirectedUrl() {
  if (typeof window === "undefined") return;

  const redirectedUrl = window.sessionStorage.getItem(redirectStorageKey);
  if (!redirectedUrl) return;

  window.sessionStorage.removeItem(redirectStorageKey);

  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (currentUrl !== redirectedUrl) {
    window.history.replaceState(null, "", redirectedUrl);
  }
}

export function getPageFromLocation(): PortfolioPage {
  if (typeof window === "undefined") return "home";

  restoreRedirectedUrl();

  const pathPage = getPageFromPathname(window.location.pathname);
  if (pathPage) return pathPage;

  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get("page");
  if (pageParam === "about" || pageParam === "infusions-study") {
    return pageParam;
  }

  const hash = window.location.hash.replace("#", "");
  if (hash === "about" || hash === "infusions-study") return hash;

  return "home";
}

