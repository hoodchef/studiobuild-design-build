import Link from "next/link";

import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_86%,transparent)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="leading-tight">
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
            StudioBuild
          </p>
          <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
            Design + Build
          </p>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
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
          className="rounded-full border border-[var(--line-strong)] px-4 py-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.16em] text-[var(--ink)] transition hover:bg-[var(--surface-strong)]"
        >
          Free 15-Min Consultation
        </Link>
      </div>
    </header>
  );
}
