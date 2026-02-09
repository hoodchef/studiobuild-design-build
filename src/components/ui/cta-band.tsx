import Link from "next/link";

type CtaBandProps = {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaBand({ title, body, primary, secondary }: CtaBandProps) {
  return (
    <section className="section-shell border-b border-[var(--line)] bg-[var(--surface-strong)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="panel w-full rounded-2xl p-8 md:flex md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Start With Clarity</p>
          <h2 className="headline-pop mt-2 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] font-medium leading-7 text-[var(--ink-soft)]">
            {body}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <Link
            href={primary.href}
            data-track-event="cta_click"
            data-track-label={primary.label}
            data-track-location={title}
            className="rounded-full border border-[var(--accent)] bg-[color:color-mix(in_srgb,var(--accent)_18%,transparent)] px-6 py-3 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink)] transition hover:bg-[color:color-mix(in_srgb,var(--accent)_30%,transparent)]"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              data-track-event="cta_click"
              data-track-label={secondary.label}
              data-track-location={title}
              className="rounded-full border border-[var(--line-strong)] px-6 py-3 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink)] transition hover:bg-[var(--surface-elevated)]"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
        </div>
      </div>
    </section>
  );
}
