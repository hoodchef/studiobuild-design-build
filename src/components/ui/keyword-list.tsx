type KeywordListProps = {
  keywords: string[];
};

export function KeywordList({ keywords }: KeywordListProps) {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          Local SEO Keywords
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--ink-soft)]"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
