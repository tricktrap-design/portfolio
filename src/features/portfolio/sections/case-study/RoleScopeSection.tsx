import { ScrollReveal } from "../../../../components/ScrollReveal";
import { colorTokens } from "../../../../styles/designTokens";
import type { CaseStudyRoleData } from "../../content/types";
import { BulletCard, SectionLabel } from "../../ui";

export function RoleScopeSection({ role }: { role: CaseStudyRoleData }) {
  return (
    <section
      className="overflow-x-clip border-b"
      style={{ borderColor: colorTokens.border.default }}
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
        <ScrollReveal variant="fade">
          <SectionLabel color="yellow">My Role &amp; Scope</SectionLabel>
        </ScrollReveal>
        <div className="mt-7 grid gap-10 xl:grid-cols-2 2xl:grid-cols-[835px_557px]">
          <ScrollReveal>
            <BulletCard items={role.owned} size="m" title="What I owned" />
          </ScrollReveal>
          <ScrollReveal delay={40}>
            <BulletCard
              items={role.contributed}
              size="m"
              title="What I contributed to"
              variant="secondary"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
