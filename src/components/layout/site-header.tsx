import Link from "next/link";

import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_82%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 leading-tight">
          <span className="grid h-10 w-10 place-content-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface-elevated)] font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--accent-soft)]">
            SB
          </span>
          <span>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
              StudioBuild
            </p>
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              Design + Build
            </p>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 rounded-full border border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface-elevated)_76%,transparent)] px-6 py-2 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-track-event="nav_click"
              data-track-label={item.label}
              data-track-location="header_nav"
              className="font-[family-name:var(--font-body)] text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          data-track-event="cta_click"
          data-track-label="header_consultation"
          data-track-location="header"
          className="rounded-full border border-[var(--accent)] bg-[color:color-mix(in_srgb,var(--accent)_12%,transparent)] px-4 py-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.16em] text-[var(--ink)] transition hover:bg-[color:color-mix(in_srgb,var(--accent)_20%,transparent)]"
        >
          Free 15-Min Consultation
        </Link>
      </div>
      <div className="mx-auto w-full max-w-6xl border-t border-[var(--line)] px-6 py-3 md:hidden">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-[family-name:var(--font-label)] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Browse Pages
          </p>
          <p className="mobile-scroll-cue">
            Swipe
            <span className="mobile-scroll-cue-arrow">→</span>
          </p>
        </div>
        <div className="relative">
          <span className="mobile-scroll-fade mobile-scroll-fade-left" />
          <nav className="mobile-scroll-nav pb-1 pl-1 pr-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-track-event="nav_click"
                data-track-label={item.label}
                data-track-location="header_nav_mobile"
                className="mobile-scroll-item shrink-0 rounded-full border border-[var(--line-strong)] bg-[color:color-mix(in_srgb,var(--surface-elevated)_80%,transparent)] px-3.5 py-2 font-[family-name:var(--font-label)] text-[0.64rem] uppercase tracking-[0.15em] text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="mobile-scroll-fade mobile-scroll-fade-right" />
        </div>
      </div>
    </header>
  );
}
