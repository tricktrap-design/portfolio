import { ScrollReveal } from "../../../components/ScrollReveal";
import { colorTokens } from "../../../styles/designTokens";
import { aboutPageData } from "../content/about";
import { AboutSidebar } from "../sections/about/AboutSidebar";
import { TimelineEntry } from "../sections/about/TimelineEntry";

export function AboutPage() {
  return (
    <main className="border-b" style={{ borderColor: colorTokens.border.default }}>
      <section>
        <div className="mx-auto grid max-w-[1540px] gap-12 px-5 py-10 md:px-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:px-10 lg:py-12">
          <AboutSidebar />

          <div className="min-w-0">
            {aboutPageData.timeline.map((item, index) => (
              <ScrollReveal
                key={`${item.company}-${item.period}`}
                staggerIndex={index}
              >
                <TimelineEntry {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
