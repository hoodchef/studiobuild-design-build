import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts } from "@/lib/blog-data";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Construction Blog | Vancouver Renovation + Build Guides",
  description:
    "StudioBuild blog with Vancouver and Lower Mainland guides on custom deck costs, renovation permits in BC, and design-build planning.",
  path: "/blog",
  keywords: [
    "custom deck cost Vancouver",
    "renovation permit process BC",
    "design build vs traditional contractor",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "StudioBuild Blog",
  url: absoluteUrl("/blog"),
  inLanguage: "en-CA",
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  })),
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StudioBuild SEO Resources",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />
      <JsonLd data={blogListSchema} />

      <PageHero
        kicker="Blog"
        title="Planning Guides for Vancouver and Lower Mainland Projects"
        subtitle="Straight answers on scope, permits, budgeting, and delivery decisions for custom builds and interior renovations."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="panel rounded-2xl p-6 md:p-7">
                <p className="eyebrow">Article 0{index + 1}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                  {post.title}
                </h2>
                <p className="mt-3 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.13em] text-[var(--ink-muted)]">
                  {post.readTime}
                </p>
                <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent-soft)]"
                >
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need project-specific guidance?"
        body="Book a 15-minute consultation and get a practical next-step plan for your property and scope."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
