import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { PageHero } from "@/components/ui/page-hero";
import { portfolioCaseStudies } from "@/lib/portfolio-data";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio Case Studies | Vancouver Custom Homes + Renovations",
  description:
    "Explore Vancouver and Lower Mainland case studies with location, service type, before-after context, scope, timeline, and craftsmanship details.",
  path: "/portfolio",
  keywords: [
    "vancouver renovation case study",
    "custom home case study lower mainland",
    "custom deck portfolio vancouver",
  ],
});

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StudioBuild Portfolio Case Studies",
  itemListElement: portfolioCaseStudies.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/portfolio/${project.slug}`),
  })),
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
]);

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        kicker="Portfolio"
        title="Detailed Case Studies Across the Lower Mainland"
        subtitle="Each project page includes location, service type, scope, timeline, before-after context, and craftsmanship decisions."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Case Study Standard</p>
            <h2 className="headline-pop mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              Real project documentation, not generic gallery captions.
            </h2>
            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--ink-soft)]">
              StudioBuild case studies focus on what matters in the field: site constraints, design rationale, material performance, sequencing decisions, and final execution quality.
            </p>
          </article>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {portfolioCaseStudies.map((project, index) => (
              <article key={project.slug} className="panel rounded-2xl p-6 md:p-7">
                <p className="eyebrow">Case Study 0{index + 1}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                  {project.title}
                </h2>
                <p className="mt-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.13em] text-[var(--ink-muted)]">
                  {project.location} | {project.serviceType}
                </p>
                <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {project.summary}
                </p>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">
                  Timeline: {project.timeline}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-6 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent-soft)]"
                >
                  View Full Case Study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="How We Document Craftsmanship">
        <p>
          We describe build quality with specific language: reveal consistency,
          substrate prep, transition alignment, moisture detailing, and tolerance
          control. This gives homeowners a better view of execution standards.
        </p>
        <p>
          Every case study includes objective detail on timeline performance,
          material logic, and decisions made during design and construction.
        </p>
      </ContentSection>

      <CtaBand
        title="Want your project run with this level of control?"
        body="Start with a consultation and we will map your scope, risk points, and best build path."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
