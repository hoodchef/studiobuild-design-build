import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import {
  SITE_NAME,
  absoluteUrl,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "@/lib/seo";

type Params = {
  slug: string;
};

type BlogPostPageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [post.focusKeyword, "Lower Mainland contractor blog", "Vancouver construction planning"],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    about: [
      "Custom home building",
      "Interior renovations",
      "Design-build delivery",
      "Lower Mainland construction planning",
    ],
    keywords: [post.focusKeyword, "Vancouver", "Lower Mainland"],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-10">
            <p className="eyebrow">StudioBuild Blog</p>
            <h1 className="headline-pop mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {post.readTime} | Updated {post.updatedAt}
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--ink-soft)]">
              {post.intro}
            </p>

            <div className="mt-8 space-y-8">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] leading-8 text-[var(--ink-soft)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="soft-divider mt-8" />

            <section className="mt-8">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                Key Takeaways
              </h2>
              <ul className="mt-4 space-y-2 text-[15px] leading-8 text-[var(--ink-soft)]">
                {post.takeaways.map((item) => (
                  <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] leading-8 text-[var(--ink-soft)]">
                {post.cta}
              </p>
            </section>
          </article>
        </div>
      </section>

      <CtaBand
        title="Planning a project in Vancouver or the Lower Mainland?"
        body="Get a practical plan for scope, budget range, and timeline before work starts."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Read More Articles", href: "/blog" }}
      />
    </>
  );
}
