import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { serviceLinks } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "In-house design + build services for custom decks, interior renovations, custom homes, and project management with permits.",
  path: "/services",
  keywords: [
    "construction services Lower Mainland",
    "in house design build Vancouver",
    "design build services Vancouver",
    "interior renovation and custom home contractor BC",
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

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <PageHero
        kicker="Services"
        title="Design-Led Construction Services"
        subtitle="In-house design + build support for homeowners and property owners who want clarity, quality, and control from first planning conversation to final handover."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceLinks.map((service) => (
              <article
                key={service.href}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7"
              >
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--ink)]">
                  {service.label}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent)]"
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
          Not sure where to begin? Start with a 15-minute call. We will assess
          your scope, timeline, and budget range, then recommend the right path.
        </p>
        <p>
          Projects move best when early decisions are organized. We can guide
          you through pre-construction requirements so design, permitting, and
          construction stay aligned.
        </p>
      </ContentSection>

      <CtaBand
        title="Need help choosing the right service path?"
        body="We can scope your project and guide you to the service model that fits best."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={serviceKeywords} />
    </>
  );
}
