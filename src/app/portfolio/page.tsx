import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { absoluteUrl, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Project Portfolio | Vancouver Custom Homes & Renovations",
  description:
    "View StudioBuild project portfolio across Vancouver and the Lower Mainland, including custom decks, interior renovations, and custom homes.",
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
      "A weather-resilient outdoor platform with integrated lighting, concealed fastening, and rain-routing details engineered for coastal exposure.",
    details: ["Western red cedar and powder-coated steel", "Integrated drainage and low-voltage lighting", "Consistent reveal lines and flush thresholds"],
  },
  {
    category: "Interior Renovations",
    city: "Burnaby",
    title: "Main-Floor Structural Reconfiguration",
    summary:
      "A full interior transformation with structural beam coordination, simplified circulation, and finish transitions designed for clean sightlines.",
    details: ["Structural opening package with engineering coordination", "Custom millwork alignment across kitchen and living zones", "Phased sequencing for controlled homeowner disruption"],
  },
  {
    category: "Custom Homes",
    city: "North Vancouver",
    title: "Slope-Lot Custom Home Delivery",
    summary:
      "A ground-up custom home delivered with tight envelope detailing, moisture strategy, and interior finish control from framing through final fit-off.",
    details: ["Envelope detailing for wet coastal conditions", "Milestone quality checks at each trade transition", "Precision fit and finish package throughout"],
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
        title="Selected Work Across the Lower Mainland"
        subtitle="Real projects, detailed execution notes, and outcomes tied to planning and craftsmanship."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Project Documentation Standard</p>
            <h2 className="headline-pop mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              Each case study is built around decisions, details, and measurable build quality.
            </h2>
            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--ink-soft)]">
              StudioBuild portfolio entries focus on constraints, sequencing, materials, and finish controls. We document what mattered on site and why key decisions were made.
            </p>
          </article>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className="panel rounded-2xl p-6 md:p-7">
                <p className="eyebrow">
                  Case Study 0{index + 1} | {project.city}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                  {project.title}
                </h2>
                <p className="mt-2 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.13em] text-[var(--ink-muted)]">
                  {project.category}
                </p>
                <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {project.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--ink-soft)]">
                  {project.details.map((item) => (
                    <li key={item} className="border-l border-[var(--line-strong)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Case Study Structure">
        <p>
          Each project page follows one consistent structure: brief, site
          constraints, design decisions, construction sequence, material
          specification, quality controls, and outcome summary.
        </p>
        <p>
          Craft language focuses on concrete execution: reveal consistency,
          moisture detailing, transition management, tolerance control, and
          finish durability under Lower Mainland climate conditions.
        </p>
      </ContentSection>

      <CtaBand
        title="Want this level of detail control on your project?"
        body="Start with a consultation and we will define your best path, from pre-construction planning to completed build."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
