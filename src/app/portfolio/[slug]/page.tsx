import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import {
  getPortfolioCaseStudyBySlug,
  portfolioCaseStudies,
} from "@/lib/portfolio-data";
import {
  SITE_NAME,
  absoluteUrl,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "@/lib/seo";

type Params = {
  slug: string;
};

type PortfolioCaseStudyPageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return portfolioCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PortfolioCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getPortfolioCaseStudyBySlug(slug);

  if (!study) {
    return {};
  }

  return buildPageMetadata({
    title: `${study.location} ${study.serviceType} Case Study`,
    description: `${study.location} ${study.serviceType} case study by StudioBuild with scope, timeline, materials, and before-after details for Lower Mainland homeowners.`,
    path: `/portfolio/${study.slug}`,
    type: "article",
    keywords: [
      `${study.location.toLowerCase()} ${study.serviceType.toLowerCase()}`,
      "Lower Mainland construction case study",
      "StudioBuild portfolio",
    ],
  });
}

export default async function PortfolioCaseStudyPage({
  params,
}: PortfolioCaseStudyPageProps) {
  const { slug } = await params;
  const study = getPortfolioCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: study.title, path: `/portfolio/${study.slug}` },
  ]);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    mainEntityOfPage: absoluteUrl(`/portfolio/${study.slug}`),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    about: {
      "@type": "Service",
      name: study.serviceType,
      areaServed: study.location,
    },
    articleSection: [study.category, study.location, "Case Study"],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={caseStudySchema} />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-10">
            <p className="eyebrow">Portfolio Case Study</p>
            <h1 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-3 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.13em] text-[var(--ink-muted)]">
              {study.location} | {study.serviceType} | {study.timeline}
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--ink-soft)]">
              {study.summary}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <section className="panel rounded-2xl p-6">
                <p className="eyebrow">Before</p>
                <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.before}
                </p>
              </section>
              <section className="panel rounded-2xl p-6">
                <p className="eyebrow">After</p>
                <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.after}
                </p>
              </section>
            </div>

            <div className="mt-8 space-y-8">
              <section>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--ink)]">
                  Scope and Timeline
                </h2>
                <ul className="mt-4 space-y-2 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.scope.map((item) => (
                    <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--ink)]">
                  Materials Used
                </h2>
                <ul className="mt-4 space-y-2 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.materials.map((item) => (
                    <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--ink)]">
                  Key Design Decisions
                </h2>
                <ul className="mt-4 space-y-2 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.designDecisions.map((item) => (
                    <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--ink)]">
                  Craftsmanship Focus
                </h2>
                <ul className="mt-4 space-y-2 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.craftsmanshipDetails.map((item) => (
                    <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {study.outcome}
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>

      <CtaBand
        title="Want similar execution quality on your project?"
        body="Book a consultation and we will map your best scope, timeline, and delivery path."
        primary={{ label: "Start My Project", href: "/contact" }}
        secondary={{ label: "View More Case Studies", href: "/portfolio" }}
      />
    </>
  );
}
