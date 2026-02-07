import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { processSteps, serviceAreas, serviceLinks, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Build With Clarity. Finish With Confidence.",
  description:
    "StudioBuild delivers design-led construction across the Lower Mainland with clean execution, disciplined planning, and direct accountability.",
  keywords: [
    "design build contractor Lower Mainland",
    "custom home builder Vancouver",
    "renovation contractor North Vancouver",
    "custom deck builder Burnaby",
    "project management permits Surrey",
  ],
};

const homeKeywords = [
  "design build contractor Lower Mainland",
  "custom home builder Vancouver",
  "renovation contractor North Vancouver",
  "custom deck builder Burnaby",
  "project management permits Surrey",
];

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="StudioBuild Design + Build"
        title="Build With Clarity. Finish With Confidence."
        subtitle="StudioBuild delivers design-led construction across the Lower Mainland with disciplined planning, clean execution, and direct accountability from first meeting to final handover."
      />

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
              and realistic scheduling tied to local requirements.
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
        title="Planning a project this year?"
        body="Book a focused 15-minute consultation. We will review scope, budget range, and timeline fit, then recommend your next step."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={homeKeywords} />
    </>
  );
}
