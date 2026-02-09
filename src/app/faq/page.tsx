import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { faqItems } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Clear answers on scope, permits, budgets, updates, and project fit for Lower Mainland construction clients.",
  path: "/faq",
  keywords: [
    "contractor FAQ Vancouver",
    "permit questions Lower Mainland",
    "renovation pricing BC",
  ],
});

const keywords = [
  "contractor FAQ Vancouver",
  "permit questions Lower Mainland",
  "renovation pricing BC",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHero
        kicker="FAQ"
        title="Clear Answers Before You Build"
        subtitle="Direct responses to common questions about scope, timing, permits, communication, and budget management."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <article key={item.q} className="panel rounded-2xl p-7 md:p-8">
                <p className="eyebrow">Question 0{index + 1}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                  {item.q}
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need an answer specific to your project?"
        body="Share your project details and we will respond with clear next steps for scope, timeline, and permit requirements."
        primary={{ label: "Ask a Question", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
