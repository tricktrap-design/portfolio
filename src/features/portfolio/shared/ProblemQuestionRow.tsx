import { colorTokens, typeTokens } from "../../../styles/designTokens";

export function ProblemQuestionRow({ text }: { text: string }) {
  return (
    <article
      className="flex items-center gap-3 border p-4"
      style={{ borderColor: colorTokens.border.default }}
    >
      <span
        aria-hidden
        style={{
          ...typeTokens.label.m,
          color: colorTokens.text.subtle,
        }}
      >
        +
      </span>
      <p
        style={{
          ...typeTokens.body.s,
          color: colorTokens.text.primary,
        }}
      >
        {text}
      </p>
    </article>
  );
}

