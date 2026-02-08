import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { processSteps, serviceAreas, serviceLinks, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "In-House Design. Custom Builds. Built Right.",
  description:
    "StudioBuild delivers in-house design + custom builds across the Lower Mainland with disciplined planning, interior renovations, and direct accountability.",
  keywords: [
    "design build contractor Lower Mainland",
    "in house design build Vancouver",
    "custom home builder Vancouver",
    "interior renovation contractor North Vancouver",
    "custom deck builder Burnaby",
    "project management permits Surrey",
  ],
};

const homeKeywords = [
  "design build contractor Lower Mainland",
  "in house design build Vancouver",
  "custom home builder Vancouver",
  "interior renovation contractor North Vancouver",
  "custom deck builder Burnaby",
  "project management permits Surrey",
];

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="StudioBuild Design + Build"
        title="In-House Design. Custom Builds. Built Right."
        subtitle="We design and build in-house for clients across the Lower Mainland, with clear planning, interior renovation expertise, and precision execution from first concept to final handover."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:py-14">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              In-House Design
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              One team shaping design decisions before they become site issues.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              Our in-house design + build workflow keeps concept, detailing,
              budget, and buildability aligned from day one, so projects move
              with fewer handoffs and fewer surprises.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Custom Builds
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              Purpose-built homes, interiors, and outdoor spaces.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              We specialize in custom homes, interior renovations, and custom
              deck projects for clients who want direct accountability and a
              higher finish standard.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceLinks.map((service, index) => (
              <article
                key={service.href}
                className={`fade-up rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 ${index > 0 ? `delay-${Math.min(index, 3)}` : ""}`}
              >
                <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                  Service
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                  {service.label}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent)]"
                >
                  Explore Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Founder-Led Delivery
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              Direct accountability from Caleb Stapelmann
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              StudioBuild was founded by Caleb Stapelmann to deliver a better
              construction experience. Projects are managed with hands-on
              leadership, clear decision pathways, and the discipline to do the
              work properly the first time.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Process Confidence
            </p>
            <ul className="mt-4 space-y-4 text-[15px] leading-7 text-[var(--ink-soft)]">
              {processSteps.map((step) => (
                <li key={step.title}>
                  <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink)]">
                    {step.title}
                  </p>
                  <p className="mt-1">{step.body}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:py-16">
          <article>
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Service Area
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              Serving homeowners across the Lower Mainland
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              We work in {serviceAreas.join(", ")}. We keep project standards
              consistent regardless of municipality, with early permit planning
              and realistic scheduling tied to local requirements for custom
              builds and interior renovations.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Client Feedback
            </p>
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                &ldquo;{testimonial.quote}&rdquo;
                <footer className="mt-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--ink)]">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </article>
        </div>
      </section>

      <CtaBand
        title="Planning a custom build or interior renovation this year?"
        body="Book a focused 15-minute consultation. We will review your scope, budget range, and timeline, then map the right in-house design + build path."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={homeKeywords} />
    </>
  );
}
