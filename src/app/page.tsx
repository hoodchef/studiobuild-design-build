import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { processSteps, serviceAreas, serviceLinks, testimonials } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "StudioBuild | Custom Home Builder & Renovations | Vancouver & Lower Mainland",
  absoluteTitle: "StudioBuild | Custom Home Builder & Renovations | Vancouver & Lower Mainland",
  description:
    "StudioBuild's Red Seal Certified team delivers in-house design + custom builds across the Lower Mainland, with over 35 years of service experience.",
  path: "/",
  keywords: [
    "design build contractor Lower Mainland",
    "in house design build Vancouver",
    "custom home builder Vancouver",
    "interior renovation contractor North Vancouver",
    "custom deck builder Burnaby",
    "project management permits Surrey",
  ],
});

const homeKeywords = [
  "design build contractor Lower Mainland",
  "in house design build Vancouver",
  "custom home builder Vancouver",
  "interior renovation contractor North Vancouver",
  "custom deck builder Burnaby",
  "project management permits Surrey",
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StudioBuild Services",
  itemListElement: serviceLinks.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.label,
    url: absoluteUrl(service.href),
  })),
};

const qualityMetrics = [
  "35+ years serving the Lower Mainland",
  "Red Seal Certified delivery",
  "In-house design + pre-construction",
  "Clean, controlled job sites",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceListSchema} />
      <PageHero
        kicker="StudioBuild Design + Build"
        title="In-House Design. Custom Builds. Built Right."
        subtitle="Our Red Seal Certified team has served the Lower Mainland for over 35 years, delivering in-house design, custom builds, and interior renovations with disciplined execution."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-[1.25fr_1fr] md:py-16">
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">In-House Design + Build</p>
            <h2 className="headline-pop mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              One accountable team from first concept review to final handover.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[var(--ink-soft)]">
              Design, feasibility, permitting strategy, budget logic, and build sequencing are managed as one system. That keeps decisions aligned and reduces expensive handoffs,
              avoidable revisions, and schedule drift.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {qualityMetrics.map((item) => (
                <span key={item} className="metric-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Custom Builds + Interiors</p>
            <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
              Purpose-built homes, interior renovations, and outdoor living done to exacting standards.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              We take on fewer projects and run each one with direct leadership, structured communication, and strict quality control. Clients choose StudioBuild when they want fewer surprises and
              stronger finish consistency.
            </p>
            <Link
              href="/process"
              className="mt-7 inline-block rounded-full border border-[var(--line-strong)] px-5 py-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink)] transition hover:bg-[var(--surface-elevated)]"
            >
              See Our Process
            </Link>
          </article>
        </div>
      </section>

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Core Services</p>
              <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
                Scope-specific services for high-standard residential projects
              </h2>
            </div>
            <Link
              href="/services"
              className="rounded-full border border-[var(--line)] px-5 py-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink-soft)] transition hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
            >
              View All Services
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceLinks.map((service, index) => (
              <article
                key={service.href}
                className={`panel fade-up rounded-2xl p-6 ${index > 0 ? `delay-${Math.min(index, 3)}` : ""}`}
              >
                <p className="eyebrow">Service 0{index + 1}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--ink)]">
                  {service.label}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent-soft)]"
                >
                  Explore Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Process Confidence</p>
            <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)]">
              Structured delivery at every stage
            </h2>
            <ul className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--ink-soft)]">
              {processSteps.map((step, index) => (
                <li key={step.title} className="border-l border-[var(--line-strong)] pl-4">
                  <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent-soft)]">
                    Stage 0{index + 1} | {step.title}
                  </p>
                  <p className="mt-1">{step.body}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Why Clients Choose StudioBuild</p>
            <h2 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)]">
              Calm communication, clean sites, and measurable craftsmanship.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              Every project runs with documented decisions, milestone-based updates, and daily site standards. We resolve risk early and keep work organized, so quality stays high while timeline and
              budget remain controlled.
            </p>
            <div className="soft-divider mt-7" />
            <p className="mt-6 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink-muted)]">
              Serving {serviceAreas.join(" | ")}
            </p>
            <Link
              href="/areas"
              className="mt-5 inline-block rounded-full border border-[var(--line-strong)] px-4 py-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
            >
              Explore Service Areas
            </Link>
          </article>
        </div>
      </section>

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-3 md:py-16">
          {testimonials.map((testimonial, index) => (
            <blockquote key={testimonial.author} className="panel rounded-2xl p-6">
              <p className="eyebrow">Client Feedback 0{index + 1}</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--ink)]">
                {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBand
        title="Planning a custom build or interior renovation this year?"
        body="Book a focused 15-minute consultation. We will review scope, budget range, and timeline, then map the right in-house design + build path for your site conditions and goals."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={homeKeywords} />
    </>
  );
}
