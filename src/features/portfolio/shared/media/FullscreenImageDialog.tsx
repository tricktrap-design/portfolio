import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function getFocusableElements(container: HTMLElement) {
  const focusableSelectors = [
    'a[href]:not([tabindex="-1"])',
    'button:not([disabled]):not([tabindex="-1"])',
    'input:not([disabled]):not([tabindex="-1"])',
    'select:not([disabled]):not([tabindex="-1"])',
    'textarea:not([disabled]):not([tabindex="-1"])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter(
    (element) =>
      !element.hasAttribute("disabled") &&
      element.getAttribute("aria-hidden") !== "true",
  );
}

export function FullscreenImageDialog({
  alt,
  onClose,
  src,
}: {
  alt: string;
  onClose: () => void;
  src: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      const focusableElements = getFocusableElements(dialog);

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstElement || !dialog.contains(activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      aria-label={`Fullscreen view for ${alt}`}
      aria-modal="true"
      className="dialog-dissolve fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(15,17,21,0.88)] p-4 sm:p-6"
      onClick={onClose}
      ref={dialogRef}
      role="dialog"
      tabIndex={-1}
    >
      <button
        ref={closeButtonRef}
        aria-label="Close fullscreen image"
        className="absolute right-2 top-2 z-10 inline-flex h-11 w-11 items-center justify-center border bg-[rgba(232,230,227,0.08)] text-[#E8E6E3] backdrop-blur-sm transition-colors hover:bg-[rgba(232,230,227,0.14)] focus-visible:outline-offset-2 sm:right-3 sm:top-3"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        style={{ borderColor: "rgba(232,230,227,0.24)" }}
        type="button"
      >
        <X aria-hidden size={18} strokeWidth={2.2} />
      </button>

      <div
        className="dialog-dissolve__content relative flex max-h-full w-full max-w-[1200px] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          alt={alt}
          className="block max-h-[calc(100vh-2rem)] max-w-full object-contain shadow-[0_22px_50px_rgba(0,0,0,0.28)] sm:max-h-[calc(100vh-3rem)]"
          decoding="async"
          src={src}
        />
      </div>
    </div>,
    document.body,
  );
}

