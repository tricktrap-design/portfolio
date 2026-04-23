import { useEffect, useRef, useState, type CSSProperties } from "react";

import { liftHoverClasses } from "../../../styles/interactionClasses";
import { colorTokens } from "../../../styles/designTokens";
import { joinClasses } from "./joinClasses";
import { FullscreenImageDialog } from "./FullscreenImageDialog";

const MEDIA_FRAME_NO_FULLSCREEN_CLASS = "media-frame--no-fullscreen";

type MediaFrameOverlay = {
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function CaseStudyMediaFrame({
  alt,
  className,
  fullscreen,
  mediaClassName,
  overlays = [],
  src,
  type = "image",
}: {
  alt: string;
  className?: string;
  fullscreen?: boolean;
  mediaClassName?: string;
  overlays?: MediaFrameOverlay[];
  src: string;
  type?: "image" | "video";
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(type !== "video");
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const classDisablesFullscreen = className
    ?.split(/\s+/)
    .includes(MEDIA_FRAME_NO_FULLSCREEN_CLASS);
  const isFullscreenEnabled =
    type === "image" && (fullscreen ?? !classDisablesFullscreen);

  useEffect(() => {
    if (type !== "video" || shouldLoadVideo) {
      return;
    }

    const frame = frameRef.current;
    if (!frame || typeof IntersectionObserver === "undefined") {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(frame);

    return () => observer.disconnect();
  }, [shouldLoadVideo, type]);

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);

    if (typeof window === "undefined") {
      triggerRef.current?.focus();
      return;
    }

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  return (
    <div
      ref={frameRef}
      className={joinClasses("min-h-[320px]", className)}
      style={{ borderColor: colorTokens.border.default }}
    >
      {type === "video" ? (
        <video
          aria-label={alt}
          autoPlay
          className={joinClasses("block h-full w-full", mediaClassName)}
          loop
          muted
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
          src={shouldLoadVideo ? src : undefined}
        />
      ) : isFullscreenEnabled ? (
        <button
          ref={triggerRef}
          aria-label={`Open ${alt} fullscreen`}
          className={joinClasses(
            "block h-full w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left",
            liftHoverClasses,
          )}
          onClick={() => setIsFullscreenOpen(true)}
          type="button"
        >
          <img
            alt={alt}
            className={joinClasses("block h-full w-full", mediaClassName)}
            decoding="async"
            loading="lazy"
            src={src}
          />
        </button>
      ) : (
        <img
          alt={alt}
          className={joinClasses("block h-full w-full", mediaClassName)}
          decoding="async"
          loading="lazy"
          src={src}
        />
      )}
      {overlays.map((overlay, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={`${src}-${index}`}
          className={joinClasses("pointer-events-none", overlay.className)}
          style={{
            ...(overlay.bordered
              ? {
                  border: "1px solid rgba(15,17,21,0.6)",
                }
              : null),
            ...overlay.style,
          }}
        />
      ))}
      {isFullscreenOpen ? (
        <FullscreenImageDialog alt={alt} onClose={closeFullscreen} src={src} />
      ) : null}
    </div>
  );
}

