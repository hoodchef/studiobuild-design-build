import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { serviceLinks } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Custom Home Building & Renovation Services | Vancouver",
  description:
    "Design-build services for custom homes, interior renovations, custom decks & project management. Red Seal certified. Serving Vancouver, North Vancouver, Burnaby & Lower Mainland.",
  path: "/services",
  keywords: [
    "construction services Vancouver",
    "custom home builder Vancouver",
    "renovation contractor Vancouver",
    "design build services Vancouver",
    "custom deck builder Lower Mainland",
  ],
});

const serviceKeywords = [
  "construction services Lower Mainland",
  "in house design build Vancouver",
  "design build services Vancouver",
  "interior renovation and custom home contractor BC",
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StudioBuild Service Categories",
  itemListElement: serviceLinks.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.label,
    url: absoluteUrl(service.href),
  })),
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Services"
        title="Design-Led Construction Services"
        subtitle="In-house design + build support for homeowners and property owners who want clarity, quality, and control from first planning conversation to final handover."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="mb-8 grid gap-6 md:grid-cols-[1.3fr_1fr]">
            <article className="panel rounded-2xl p-7 md:p-8">
              <p className="eyebrow">Service Model</p>
              <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
                Specialized scope, one disciplined standard of execution.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                Every StudioBuild service is structured around predictable planning, clean build sequencing, and accountable communication. Whether you need a custom deck or full custom home delivery,
                quality control is built into each phase.
              </p>
            </article>
            <article className="panel rounded-2xl p-7 md:p-8">
              <p className="eyebrow">Best Fit Clients</p>
              <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
                Homeowners and property owners who value direct oversight, fewer unknowns, and high-finish results.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                We take on fewer projects to protect quality, pace, and decision clarity.
              </p>
            </article>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceLinks.map((service, index) => (
              <article key={service.href} className="panel rounded-2xl p-7">
                <p className="eyebrow">Service 0{index + 1}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--ink)]">
                  {service.label}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent-soft)]"
                >
                  View Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="How to Start">
        <p>
          Start with a 15-minute consultation. We will assess your scope,
          timeline, municipality, and budget range, then recommend the right
          service path.
        </p>
        <p>
          Early decisions drive project outcomes. We guide pre-construction so
          design intent, permit requirements, and build sequencing stay aligned.
        </p>
      </ContentSection>

      <CtaBand
        title="Need help choosing the right service path?"
        body="We can scope your project and guide you to the delivery model that fits your goals, property conditions, and timeline."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={serviceKeywords} />
    </>
  );
}
