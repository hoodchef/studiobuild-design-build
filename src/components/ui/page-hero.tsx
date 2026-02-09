type PageHeroProps = {
  kicker?: string;
  title: string;
  subtitle: string;
};

export function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  return (
    <section className="hero-grid section-shell relative overflow-hidden border-b border-[var(--line)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-18 md:py-26">
        {kicker ? (
          <p className="eyebrow">
            {kicker}
          </p>
        ) : null}
        <h1 className="headline-pop mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[1.02] font-extrabold tracking-tight text-[var(--ink)] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[var(--ink-soft)] md:text-[1.35rem]">
          {subtitle}
        </p>
        <div className="soft-divider mt-10 max-w-4xl" />
      </div>
    </section>
  );
}
