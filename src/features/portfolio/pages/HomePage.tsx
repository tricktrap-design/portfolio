import type { RefObject } from "react";

import { AboutStrip } from "../sections/home/AboutStrip";
import { Hero } from "../sections/home/Hero";
import { WorkIndex } from "../sections/home/WorkIndex";

export function HomePage({
  onOpenCaseStudy,
  selectedWorkRef,
}: {
  onOpenCaseStudy: () => void;
  selectedWorkRef: RefObject<HTMLElement>;
}) {
  return (
    <main>
      <Hero onOpenCaseStudy={onOpenCaseStudy} />
      <WorkIndex
        onOpenCaseStudy={onOpenCaseStudy}
        sectionRef={selectedWorkRef}
      />
      <AboutStrip />
    </main>
  );
}

