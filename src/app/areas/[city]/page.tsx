import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { areaData } from "@/lib/area-data";
import { buildPageMetadata } from "@/lib/seo";

type Params = {
  city: string;
};

export function generateStaticParams() {
  return areaData.map((area) => ({ city: area.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const area = areaData.find((item) => item.slug === params.city);

  if (!area) {
    return {};
  }

  return buildPageMetadata({
    title: `${area.city} Contractor`,
    description: `StudioBuild provides design-led construction services in ${area.city}, British Columbia.`,
    path: `/areas/${area.slug}`,
    keywords: [
      `${area.city} contractor`,
      `${area.city} renovation contractor`,
      `${area.city} design build company`,
    ],
  });
}

export default function AreaPage({ params }: { params: Params }) {
  const area = areaData.find((item) => item.slug === params.city);

  if (!area) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker="Service Area"
        title={`${area.city} Construction Services`}
        subtitle={`StudioBuild delivers custom decks, renovations, custom homes, and design + build projects in ${area.city}.`}
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-3 md:py-16">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              Local project context
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{area.intro}</p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              Permit approach
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{area.permits}</p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              Typical scope
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{area.focus}</p>
          </article>
        </div>
      </section>

      <CtaBand
        title={`Start your ${area.city} project with a clear process.`}
        body="Book a consultation and we will map your next step with realistic timing and budget guidance."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Process", href: "/process" }}
      />
    </>
  );
}
