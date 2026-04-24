import { colorTokens, typeTokens } from "../../../../styles/designTokens";
import { OutcomeCard } from "../../ui";

export function TimelineEntry({
  company,
  highlights,
  period,
  role,
  summary,
}: {
  company: string;
  highlights: string[];
  period: string;
  role: string;
  summary: string;
}) {
  return (
    <article
      className="border-t py-8 first:border-t-0 first:pt-0"
      style={{ borderColor: colorTokens.border.subtle }}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_150px] lg:gap-8">
        <div>
          <h2
            style={{
              ...typeTokens.heading.l,
              color: colorTokens.text.primary,
            }}
          >
            {role}
          </h2>
          <p
            className="mt-2"
            style={{
              ...typeTokens.body.m,
              color: colorTokens.text.subtle,
            }}
          >
            {company}
          </p>
        </div>
        <div
          className="text-left lg:text-right"
          style={{
            ...typeTokens.body.xs,
            color: colorTokens.text.subtle,
          }}
        >
          {period}
        </div>
      </div>

      <p
        className="mt-6"
        style={{
          ...typeTokens.body.m,
          color: colorTokens.text.secondary,
        }}
      >
        {summary}
      </p>

      <div className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <OutcomeCard key={highlight} text={highlight} />
        ))}
      </div>
    </article>
  );
}

