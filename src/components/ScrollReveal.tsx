import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type RefCallback,
  type ReactNode,
} from "react";

type RevealVariant = "fade" | "rise";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  disabled?: boolean;
  rootMargin?: string;
  staggerIndex?: number;
  style?: CSSProperties;
  threshold?: number;
  variant?: RevealVariant;
} & HTMLAttributes<HTMLDivElement>;

const STAGGER_STEP_MS = 70;

function joinClasses(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type UseScrollRevealOptions = Pick<
  ScrollRevealProps,
  "className" | "delay" | "disabled" | "rootMargin" | "staggerIndex" | "style" | "threshold" | "variant"
>;

export function useScrollReveal({
  className,
  delay = 0,
  disabled = false,
  rootMargin = "0px 0px -12% 0px",
  staggerIndex = 0,
  style,
  threshold = 0.12,
  variant = "rise",
}: UseScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    if (isVisible || typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [disabled, isVisible, rootMargin, threshold]);

  const resolvedStyle = {
    ...style,
    "--reveal-delay": `${delay + staggerIndex * STAGGER_STEP_MS}ms`,
  } as CSSProperties;

  return {
    ref: ref as unknown as RefCallback<HTMLElement>,
    className: joinClasses(
      "scroll-reveal",
      variant === "fade" && "scroll-reveal--fade",
      (disabled || isVisible) && "is-visible",
      className,
    ),
    style: resolvedStyle,
  };
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  disabled = false,
  rootMargin = "0px 0px -12% 0px",
  staggerIndex = 0,
  style,
  threshold = 0.12,
  variant = "rise",
  ...props
}: ScrollRevealProps) {
  const reveal = useScrollReveal({
    className,
    delay,
    disabled,
    rootMargin,
    staggerIndex,
    style,
    threshold,
    variant,
  });

  return (
    <div
      {...props}
      ref={reveal.ref}
      className={reveal.className}
      style={reveal.style}
    >
      {children}
    </div>
  );
}
