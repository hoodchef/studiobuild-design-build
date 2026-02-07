import type { Metadata } from "next";

import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client feedback focused on communication, clean sites, and quality-first project delivery.",
  keywords: [
    "StudioBuild reviews",
    "trusted contractor Lower Mainland",
    "renovation testimonials Vancouver",
  ],
};

const keywords = [
  "StudioBuild reviews",
  "trusted contractor Lower Mainland",
  "renovation testimonials Vancouver",
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        kicker="Testimonials"
        title="What Clients Say About Working With StudioBuild"
        subtitle="Feedback focused on communication, quality, and disciplined execution."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={testimonial.author}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7"
              >
                <p className="text-lg leading-8 text-[var(--ink-soft)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink)]">
                  {testimonial.author} | Testimonial {index + 1}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See how this process can work for your project."
        body="Book a consultation and we will walk through scope, budget range, and timeline fit."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
