import type { CSSProperties } from "react";

export const fontStacks = {
  inter: '"Inter", "Helvetica Neue", "Avenir Next", "Segoe UI", sans-serif',
  figtree: '"Figtree", "Helvetica Neue", "Avenir Next", "Segoe UI", sans-serif',
} as const;

export const colorTokens = {
  text: {
    primary: "#0F1115",
    secondary: "rgba(15,17,21,0.78)",
    subtle: "rgba(15,17,21,0.55)",
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
      fontSize: "150px",
      fontWeight: 600,
      letterSpacing: "-9px",
      lineHeight: "126px",
      textTransform: "uppercase",
    } satisfies TextToken,
    l: {
      fontFamily: fontStacks.inter,
      fontSize: "118px",
      fontWeight: 600,
      letterSpacing: "-8.26px",
      lineHeight: "108px",
      textTransform: "uppercase",
    } satisfies TextToken,
  },
  heading: {
    xl: {
      fontFamily: fontStacks.inter,
      fontSize: "74px",
      fontWeight: 600,
      letterSpacing: "-3.7px",
      lineHeight: "68px",
      textTransform: "uppercase",
    } satisfies TextToken,
    l: {
      fontFamily: fontStacks.inter,
      fontSize: "42px",
      fontWeight: 600,
      letterSpacing: "-1.68px",
      lineHeight: "42px",
      textTransform: "uppercase",
    } satisfies TextToken,
  },
  body: {
    xl: {
      fontFamily: fontStacks.inter,
      fontSize: "34px",
      fontWeight: 400,
      lineHeight: "46px",
    } satisfies TextToken,
    l: {
      fontFamily: fontStacks.figtree,
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: "40px",
    } satisfies TextToken,
    m: {
      fontFamily: fontStacks.figtree,
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "32px",
    } satisfies TextToken,
    s: {
      fontFamily: fontStacks.figtree,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "26px",
    } satisfies TextToken,
    xs: {
      fontFamily: fontStacks.figtree,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
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
      fontSize: "26px",
      fontWeight: 700,
      lineHeight: "40px",
    } satisfies TextToken,
  },
} as const;
