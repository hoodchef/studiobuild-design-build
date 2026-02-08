import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio",
  description:
    "Selected StudioBuild projects across the Lower Mainland, including custom decks, interior renovations, and custom homes.",
  path: "/portfolio",
  keywords: [
    "renovation portfolio Vancouver",
    "custom deck projects North Vancouver",
    "custom home projects Lower Mainland",
  ],
});

const keywords = [
  "renovation portfolio Vancouver",
  "custom deck projects North Vancouver",
  "custom home projects Lower Mainland",
];

const featuredProjects = [
  {
    category: "Custom Decks & Outdoor Living",
    city: "West Vancouver",
    title: "Hillside Cedar + Steel Outdoor Platform",
    summary:
      "A weather-resilient outdoor platform with integrated lighting, rain routing details, and a concealed fastener layout for a clean sightline.",
  },
  {
    category: "Major Renovations",
    city: "Burnaby",
    title: "Main-Floor Structural Reconfiguration",
    summary:
      "Open-plan renovation with beam strategy coordination, flush transition detailing, and phased scheduling for minimal homeowner disruption.",
  },
  {
    category: "Custom Homes",
    city: "North Vancouver",
    title: "Slope-Lot Custom Home Delivery",
    summary:
      "Full custom home with envelope detailing tuned for coastal exposure, disciplined sequencing, and high-precision interior finish alignment.",
  },
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StudioBuild Portfolio Projects",
  itemListElement: featuredProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    description: project.summary,
    url: absoluteUrl("/portfolio"),
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <PageHero
        kicker="Portfolio"
        title="Selected Work Across the Lower Mainland"
        subtitle="Real projects, documented details, and measurable outcomes."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <p className="max-w-3xl text-[15px] leading-8 text-[var(--ink-soft)]">
            Explore custom decks, renovations, and homes completed with
            StudioBuild&apos;s process. Each case study documents client goals,
            site constraints, material systems, design decisions, and final
            outcomes.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6"
              >
                <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                  {project.category} | {project.city}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                  {project.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Project Description Standard">
        <p>
          Each portfolio entry follows a fixed structure: client brief,
          constraints, design decisions, build execution details, materials,
          and measured outcome.
        </p>
        <p>
          Craft language focuses on measurable execution, including reveal
          consistency, moisture control strategy, transition handling,
          tolerance control, and finish durability in coastal exposure.
        </p>
      </ContentSection>

      <CtaBand
        title="Want a project with this level of detail control?"
        body="Start with a consultation and we will define your best path forward."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
