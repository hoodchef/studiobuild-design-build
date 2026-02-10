import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { areaData } from "@/lib/area-data";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

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
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
    keywords: [
      `custom home builder ${area.city}`,
      `renovation contractor ${area.city}`,
      `design build ${area.city}`,
      `home renovation ${area.city}`,
      `custom deck builder ${area.city}`,
      `interior renovation ${area.city}`,
    ],
  });
}

function buildLocalBusinessSchema(area: (typeof areaData)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "StudioBuild Design + Build",
    description: area.metaDescription,
    url: absoluteUrl(`/areas/${area.slug}`),
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "State",
        name: "British Columbia",
      },
    },
    serviceType: [
      "Custom Home Building",
      "Interior Renovations",
      "Custom Decks",
      "Design + Build",
    ],
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { city } = await params;
  const area = areaData.find((item) => item.slug === city);

  if (!area) {
    notFound();
  }

  const localBusinessSchema = buildLocalBusinessSchema(area);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/areas" },
    { name: area.city, path: `/areas/${area.slug}` },
  ]);

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Service Area"
        title={area.heroTitle}
        subtitle={area.heroSubtitle}
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <p className="eyebrow">{area.city} Neighbourhoods We Serve</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {area.neighbourhoods.map((hood) => (
              <span key={hood} className="metric-chip">
                {hood}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="panel rounded-2xl p-6 md:p-7">
              <p className="eyebrow">Custom Home Building</p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {area.customHomes}
              </p>
            </article>
            <article className="panel rounded-2xl p-6 md:p-7">
              <p className="eyebrow">Interior Renovations</p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {area.renovations}
              </p>
            </article>
            <article className="panel rounded-2xl p-6 md:p-7">
              <p className="eyebrow">Custom Decks & Outdoor Living</p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {area.decks}
              </p>
            </article>
            <article className="panel rounded-2xl p-6 md:p-7">
              <p className="eyebrow">Permits & Approvals</p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {area.permits}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Why {area.city} Homeowners Choose StudioBuild</p>
              <ul className="mt-6 space-y-3">
                {area.whyChoose.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 text-sm leading-7 text-[var(--ink-soft)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <article className="panel rounded-2xl p-6 md:p-7">
              <p className="eyebrow">Typical Project Scope</p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {area.focus}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {area.intro}
              </p>
            </article>
          </div>
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
