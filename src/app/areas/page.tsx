import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { areaData } from "@/lib/area-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "StudioBuild serves homeowners and property owners across the Lower Mainland of British Columbia.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        kicker="Service Areas"
        title="Lower Mainland Coverage"
        subtitle="StudioBuild serves projects throughout the Lower Mainland with consistent standards for planning, communication, and execution."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-12 md:grid-cols-3 md:py-16">
          {areaData.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 transition hover:border-[var(--line-strong)]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                {area.city}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{area.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Planning a project in your municipality?"
        body="Book a consultation and we will map scope, permit considerations, and next steps."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
