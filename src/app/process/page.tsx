import { CtaBand } from "@/components/ui/cta-band";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { processSteps } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Our Process",
  description:
    "A clear five-stage construction process that removes uncertainty and keeps quality, communication, timeline, and budget under control.",
  path: "/process",
  keywords: [
    "construction process Lower Mainland",
    "transparent renovation process Vancouver",
    "organized job site contractor BC",
  ],
});

const keywords = [
  "construction process Lower Mainland",
  "transparent renovation process Vancouver",
  "organized job site contractor BC",
];

const executionStandards = [
  {
    title: "How uncertainty is removed",
    body: "Scope boundaries, milestone decisions, and responsibilities are documented before site work begins. Risk items are resolved in planning, not mid-build.",
  },
  {
    title: "Site organization standards",
    body: "Daily cleanup resets, controlled material zones, and protected access routes keep active homes clean, safe, and workable.",
  },
  {
    title: "Communication standards",
    body: "Clients receive scheduled updates, milestone reviews, and decision logs tied to current work packages.",
  },
  {
    title: "Budget and timeline control",
    body: "Progress is tracked against a baseline schedule and cost structure. Variations are surfaced early, priced clearly, and approved before related work proceeds.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Our Process"
        title="A Clear Process From First Meeting to Final Handover"
        subtitle="StudioBuild uses a structured five-stage system to remove uncertainty and deliver consistent results."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <div className="mb-8">
            <p className="eyebrow">Five Stage Workflow</p>
            <h2 className="headline-pop mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              Predictable delivery built on planning discipline and execution controls.
            </h2>
          </div>
          <ol className="space-y-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="panel rounded-2xl p-7 md:p-8">
                <p className="eyebrow">Stage 0{index + 1}</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-4xl text-[15px] leading-8 text-[var(--ink-soft)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:py-16">
          {executionStandards.map((item) => (
            <article key={item.title} className="panel rounded-2xl p-7 md:p-8">
              <p className="eyebrow">Execution Standard</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Start with Discovery"
        body="Book a focused 15-minute consultation and we will map your next step with realistic timing, budget context, and permit considerations."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "See Completed Projects", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
