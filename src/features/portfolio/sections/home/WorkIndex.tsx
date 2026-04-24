import type { RefObject } from "react";

import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens } from "../../../../styles/designTokens";
import { homePageData } from "../../content/home";
import type { PortfolioPage } from "../../content/types";
import { CaseStudyItem, SectionLabel } from "../../ui";

export function WorkIndex({
  onOpenCaseStudy,
  sectionRef,
}: {
  onOpenCaseStudy: (page: PortfolioPage) => void;
  sectionRef: RefObject<HTMLElement>;
}) {
  const caseStudyPageByItemId: Partial<Record<string, PortfolioPage>> = {
    "infusion-management": "infusions-study",
    "smart-medication-reconciliation": "medsrec-study",
  };

  return (
    <section
      ref={sectionRef}
      className="border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-8 px-5 py-10 md:px-8 lg:px-10 lg:py-12 xl:flex-row xl:gap-12">
        <ScrollReveal className="shrink-0 xl:w-[280px]" variant="fade">
          <SectionLabel color="blue">{homePageData.selectedWorkLabel}</SectionLabel>
        </ScrollReveal>

        <div className="min-w-0 flex-1 space-y-6">
          {homePageData.workItems.map((item, index) => (
            <ScrollReveal key={item.id} staggerIndex={index}>
              <CaseStudyItem
                item={item}
                onClick={
                  caseStudyPageByItemId[item.id]
                    ? () => onOpenCaseStudy(caseStudyPageByItemId[item.id]!)
                    : undefined
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
