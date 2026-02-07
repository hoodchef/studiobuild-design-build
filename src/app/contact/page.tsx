import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute consultation with StudioBuild and submit your project details for fit, scope, and next-step guidance.",
  keywords: [
    "contact contractor Vancouver",
    "book renovation consultation Lower Mainland",
    "design build consultation BC",
  ],
};

const keywords = [
  "contact contractor Vancouver",
  "book renovation consultation Lower Mainland",
  "design build consultation BC",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start With a Focused 15-Minute Consultation"
        subtitle="Tell us about your project and we will outline clear next steps."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_1.1fr] md:py-16">
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              Free 15-minute consultation
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              Book a free 15-minute consultation to discuss scope, budget range,
              and timeline. We will tell you clearly whether your project is a
              fit, what the next step should be, and how to avoid common
              planning mistakes in the Lower Mainland.
            </p>
            <p className="mt-6 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              Serving {serviceAreas.join(" | ")}
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--ink-soft)]">
              Prefer email? Reach us at <strong>hello@studiobuild.ca</strong>.
            </p>
          </article>
          <InquiryForm />
        </div>
      </section>

      <KeywordList keywords={keywords} />
    </>
  );
}
