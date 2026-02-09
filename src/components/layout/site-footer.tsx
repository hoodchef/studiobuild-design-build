import Link from "next/link";

import { serviceAreas, serviceLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="section-shell border-t border-[var(--line)] bg-[var(--surface-strong)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="panel rounded-2xl p-6">
          <p className="eyebrow">StudioBuild</p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--ink)]">
            Design + Build
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
            Red Seal Certified in-house design + build team serving the Lower Mainland for over 35 years with custom decks, interior renovations, custom homes, and integrated project delivery.
          </p>
        </div>
        <div className="panel rounded-2xl p-6">
          <p className="eyebrow">
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
        <div className="panel rounded-2xl p-6">
          <p className="eyebrow">
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
