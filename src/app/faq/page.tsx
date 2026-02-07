import type { Metadata } from "next";

import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Clear answers on scope, permits, budgets, updates, and project fit for Lower Mainland construction clients.",
  keywords: [
    "contractor FAQ Vancouver",
    "permit questions Lower Mainland",
    "renovation pricing BC",
  ],
};

const keywords = [
  "contractor FAQ Vancouver",
  "permit questions Lower Mainland",
  "renovation pricing BC",
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Clear Answers Before You Build"
        subtitle="Direct responses to common questions about scope, timing, permits, communication, and budget management."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <div className="space-y-5">
            {faqItems.map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7"
              >
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                  {item.q}
                </h2>
                <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need an answer specific to your project?"
        body="Share your project details and we will respond with clear next steps."
        primary={{ label: "Ask a Question", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
