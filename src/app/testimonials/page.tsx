import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Client Reviews | Vancouver & Lower Mainland",
  description:
    "Read StudioBuild client reviews from Vancouver and Lower Mainland projects focused on communication, clean sites, and quality-first execution.",
  path: "/testimonials",
  keywords: [
    "StudioBuild reviews",
    "trusted contractor Lower Mainland",
    "renovation testimonials Vancouver",
  ],
});

const keywords = [
  "StudioBuild reviews",
  "trusted contractor Lower Mainland",
  "renovation testimonials Vancouver",
];

const testimonialSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "StudioBuild Client Testimonials",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: testimonials.map((testimonial, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "StudioBuild Design + Build",
          url: absoluteUrl("/"),
        },
        reviewBody: testimonial.quote,
        author: {
          "@type": "Person",
          name: testimonial.author,
        },
      },
    })),
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Testimonials", path: "/testimonials" },
]);

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={testimonialSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Testimonials"
        title="What Clients Say About Working With StudioBuild"
        subtitle="Feedback centered on clarity, organization, and disciplined execution."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <blockquote key={testimonial.author} className="panel rounded-2xl p-7 md:p-8">
                <p className="eyebrow">Client Review 0{index + 1}</p>
                <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-5 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--ink)]">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See how this process can work for your project."
        body="Book a consultation and we will walk through scope, budget range, and timeline fit with clear next steps."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
