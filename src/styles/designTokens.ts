import type { CSSProperties } from "react";

export const fontStacks = {
  inter: '"Inter", "Helvetica Neue", "Avenir Next", "Segoe UI", sans-serif',
  figtree: '"Figtree", "Helvetica Neue", "Avenir Next", "Segoe UI", sans-serif',
} as const;

export const colorTokens = {
  text: {
    primary: "#0F1115",
    secondary: "rgba(15,17,21,0.78)",
    subtle: "rgba(15,17,21,0.60)",
    muted: "rgba(15,17,21,0.45)",
    faint: "rgba(15,17,21,0.50)",
    inverse: "#E8E6E3",
  },
  background: {
    base: "#E8E6E3",
    subtle: "#F1EFEC",
    header: "rgba(237,235,231,0.84)",
  },
  border: {
    default: "rgba(15,17,21,0.16)",
    subtle: "rgba(15,17,21,0.08)",
  },
  accent: {
    plain: "#0F1115",
    blue: "#1B73BD",
    rust: "#C84C2A",
    yellow: "#F2C94C",
  },
  tint: {
    plain: "#EDEBE7",
    blue: "#E0E5E8",
    rust: "#EFE5E0",
    yellow: "#F1EAD9",
    yellowStrong: "rgba(242,201,76,0.18)",
  },
  overlay: {
    selection: "rgba(27,115,189,0.2)",
    shadow: "0 14px 32px rgba(15,17,21,0.06)",
  },
} as const;

type TextToken = CSSProperties;

export const typeTokens = {
  display: {
    xl: {
      fontFamily: fontStacks.inter,
      fontSize: "clamp(4.5rem, 17vw, 9.375rem)",
      fontWeight: 600,
      letterSpacing: "clamp(-0.55rem, -0.8vw, -0.18rem)",
      lineHeight: "0.84",
      textTransform: "uppercase",
    } satisfies TextToken,
    l: {
      fontFamily: fontStacks.inter,
      fontSize: "clamp(3.25rem, 12vw, 7.375rem)",
      fontWeight: 600,
      letterSpacing: "clamp(-0.5rem, -0.72vw, -0.14rem)",
      lineHeight: "0.9",
      textTransform: "uppercase",
    } satisfies TextToken,
  },
  heading: {
    xl: {
      fontFamily: fontStacks.inter,
      fontSize: "clamp(2.75rem, 7vw, 4.625rem)",
      fontWeight: 600,
      letterSpacing: "clamp(-0.2rem, -0.35vw, -0.08rem)",
      lineHeight: "0.92",
      textTransform: "uppercase",
    } satisfies TextToken,
    l: {
      fontFamily: fontStacks.inter,
      fontSize: "clamp(2rem, 5vw, 2.625rem)",
      fontWeight: 600,
      letterSpacing: "clamp(-0.12rem, -0.18vw, -0.05rem)",
      lineHeight: "0.98",
      textTransform: "uppercase",
    } satisfies TextToken,
  },
  body: {
    xl: {
      fontFamily: fontStacks.inter,
      fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)",
      fontWeight: 400,
      lineHeight: "1.4",
    } satisfies TextToken,
    l: {
      fontFamily: fontStacks.figtree,
      fontSize: "clamp(1.0625rem, 1.55vw, 1.375rem)",
      fontWeight: 400,
      lineHeight: "1.55",
    } satisfies TextToken,
    m: {
      fontFamily: fontStacks.figtree,
      fontSize: "clamp(0.98rem, 1.1vw, 1.125rem)",
      fontWeight: 400,
      lineHeight: "1.6",
    } satisfies TextToken,
    s: {
      fontFamily: fontStacks.figtree,
      fontSize: "clamp(0.92rem, 0.95vw, 0.98rem)",
      fontWeight: 400,
      lineHeight: "1.6",
    } satisfies TextToken,
    xs: {
      fontFamily: fontStacks.figtree,
      fontSize: "clamp(0.84rem, 0.85vw, 0.9rem)",
      fontWeight: 400,
      lineHeight: "1.45",
    } satisfies TextToken,
  },
  label: {
    m: {
      fontFamily: fontStacks.inter,
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "3px",
      lineHeight: "14px",
      textTransform: "uppercase",
    } satisfies TextToken,
    s: {
      fontFamily: fontStacks.inter,
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "2.5px",
      lineHeight: "14px",
      textTransform: "uppercase",
    } satisfies TextToken,
    xs: {
      fontFamily: fontStacks.inter,
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "2.6px",
      lineHeight: "12px",
      textTransform: "uppercase",
    } satisfies TextToken,
  },
  button: {
    m: {
      fontFamily: fontStacks.figtree,
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "2px",
      lineHeight: "14px",
      textTransform: "uppercase",
    } satisfies TextToken,
  },
  header: {
    title: {
      fontFamily: fontStacks.figtree,
      fontSize: "clamp(1.125rem, 2.4vw, 1.625rem)",
      fontWeight: 700,
      lineHeight: "1.2",
    } satisfies TextToken,
  },
} as const;
