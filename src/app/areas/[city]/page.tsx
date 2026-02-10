import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { areaData } from "@/lib/area-data";
import { buildPageMetadata } from "@/lib/seo";

type Params = {
  city: string;
};

type AreaPageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return areaData.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { city } = await params;
  const area = areaData.find((item) => item.slug === city);

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

export default async function AreaPage({ params }: AreaPageProps) {
  const { city } = await params;
  const area = areaData.find((item) => item.slug === city);

  if (!area) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker="Service Area"
        title={`${area.city} Construction Services`}
        subtitle={`StudioBuild delivers custom decks, interior renovations, custom homes, and design + build projects in ${area.city}.`}
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-3 md:py-16">
          <article className="panel rounded-2xl p-6 md:p-7">
            <p className="eyebrow">Local Project Context</p>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{area.intro}</p>
          </article>
          <article className="panel rounded-2xl p-6 md:p-7">
            <p className="eyebrow">Permit Approach</p>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{area.permits}</p>
          </article>
          <article className="panel rounded-2xl p-6 md:p-7">
            <p className="eyebrow">Typical Scope</p>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{area.focus}</p>
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
