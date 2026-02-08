import { JsonLd } from "@/components/seo/json-ld";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { serviceAreas } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Book a free 15-minute consultation with StudioBuild and submit your project details for custom builds, interior renovations, and design + build guidance.",
  path: "/contact",
  keywords: [
    "contact contractor Vancouver",
    "book renovation consultation Lower Mainland",
    "design build consultation BC",
  ],
});

const keywords = [
  "contact contractor Vancouver",
  "book renovation consultation Lower Mainland",
  "design build consultation BC",
];

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

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
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
              planning mistakes in the Lower Mainland for interior renovations
              and custom builds.
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
