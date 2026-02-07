type PageHeroProps = {
  kicker?: string;
  title: string;
  subtitle: string;
};

export function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-[var(--line)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        {kicker ? (
          <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--ink)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
