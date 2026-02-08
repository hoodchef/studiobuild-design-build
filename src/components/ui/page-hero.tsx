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
          <p className="font-[family-name:var(--font-label)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[1.04] font-extrabold tracking-tight text-[var(--ink)] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[var(--ink-soft)] md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
