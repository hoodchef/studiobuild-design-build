import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { areaData } from "@/lib/area-data";

export const metadata = buildPageMetadata({
  title: "Service Areas | Vancouver, North Shore, Burnaby & More",
  description:
    "StudioBuild serves Vancouver, North Vancouver, West Vancouver, Burnaby, Coquitlam, Port Moody, Surrey, Richmond, and Langley.",
  path: "/areas",
  keywords: [
    "service area contractor Lower Mainland",
    "Vancouver design build contractor",
    "North Vancouver renovation contractor",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/areas" },
]);

const areaListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StudioBuild Service Areas",
  itemListElement: areaData.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: area.city,
    url: absoluteUrl(`/areas/${area.slug}`),
  })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={areaListSchema} />
      <PageHero
        kicker="Service Areas"
        title="Lower Mainland Coverage"
        subtitle="StudioBuild serves projects throughout the Lower Mainland with consistent standards for planning, communication, and execution."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Municipality Coverage</p>
            <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              Local permit context, one consistent build standard.
            </h2>
            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--ink-soft)]">
              We tailor planning to each municipality while keeping quality, communication, and site standards constant across all projects.
            </p>
          </article>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {areaData.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="panel rounded-2xl p-6 transition hover:border-[var(--line-strong)]"
              >
                <p className="eyebrow">Service Area</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--ink)]">
                  {area.city}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{area.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning a project in your municipality?"
        body="Book a consultation and we will map scope, permit considerations, and next steps based on your area."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
