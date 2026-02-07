import Link from "next/link";

import { serviceAreas, serviceLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-strong)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
            StudioBuild Design + Build
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
            Founder-led construction company serving the Lower Mainland with
            custom decks, renovations, custom homes, and integrated design +
            build delivery.
          </p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink)]">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="transition hover:text-[var(--ink)]">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink)]">
            Service Area
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
            {serviceAreas.join(" | ")}
          </p>
          <p className="mt-5 text-sm text-[var(--ink-soft)]">hello@studiobuild.ca</p>
        </div>
      </div>
    </footer>
  );
}
