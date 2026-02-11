import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { citationTargets, serviceAreas } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Contact StudioBuild | Free Consultation Vancouver",
  description:
    "Book a free 15-minute consultation for custom homes, interior renovations, decks, and design-build projects in Vancouver and the Lower Mainland.",
  path: "/contact",
  keywords: [
    "contact contractor Vancouver",
    "book renovation consultation Lower Mainland",
    "design build consultation BC",
  ],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "StudioBuild Contact",
  url: absoluteUrl("/contact"),
  about: {
    "@type": "LocalBusiness",
    name: "StudioBuild Design + Build",
    telephone: "+1-778-903-7744",
    email: "hello@studiobuild.ca",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "StudioBuild Design + Build",
  url: absoluteUrl("/contact"),
  telephone: "+1-778-903-7744",
  email: "hello@studiobuild.ca",
  areaServed: serviceAreas,
  serviceType: [
    "Custom Decks",
    "Interior Renovations",
    "Custom Homes",
    "Design + Build",
    "Project Management and Permitting",
  ],
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const consultationIncludes = [
  "Project-fit assessment based on scope and budget range",
  "Early permit and municipal context check",
  "Recommended delivery path and next-step sequence",
  "Clear answer on whether StudioBuild is the right fit",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Contact"
        title="Start With a Focused 15-Minute Consultation"
        subtitle="Tell us about your project and we will outline clear next steps with no guesswork."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_1.1fr] md:py-16">
          <div className="space-y-6">
            <article className="panel rounded-2xl p-7 md:p-8">
              <p className="eyebrow">Free 15-Minute Consultation</p>
              <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)]">
                Bring your scope, timeline, and budget context.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                We will quickly assess fit, highlight key planning risks, and map the right path for your custom build or interior renovation.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--ink-soft)]">
                {consultationIncludes.map((item) => (
                  <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="panel rounded-2xl p-7 md:p-8">
              <p className="eyebrow">Reach Us</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                Email: <strong className="text-[var(--ink)]">hello@studiobuild.ca</strong>
              </p>
              <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
                Phone: <strong className="text-[var(--ink)]">778-903-7744</strong>
              </p>
              <p className="mt-4 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink-muted)]">
                Serving {serviceAreas.join(" | ")}
              </p>
            </article>

            <article className="panel rounded-2xl p-7 md:p-8">
              <p className="eyebrow">Local Citations</p>
              <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                Find StudioBuild on trusted local platforms
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-soft)]">
                {citationTargets.map((citation) => (
                  <li key={citation.name} className="border-l border-[var(--line-strong)] pl-3">
                    <Link href={citation.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ink)] hover:text-[var(--accent-soft)]">
                      {citation.name}
                    </Link>
                    <p>{citation.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}
