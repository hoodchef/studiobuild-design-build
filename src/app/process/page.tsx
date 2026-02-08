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

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Our Process"
        title="A Clear Process From First Meeting to Final Handover"
        subtitle="StudioBuild uses a structured five-stage system to remove uncertainty and deliver consistent results."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <ol className="space-y-5">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6"
              >
                <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                  Stage {index + 1}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                  {step.title}
                </h2>
                <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:py-16">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              How uncertainty is removed
            </h3>
            <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
              Scope, responsibilities, and milestone decisions are defined early.
              Risk items are addressed in planning, not discovered in the middle
              of construction.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              Site standards
            </h3>
            <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
              We run daily housekeeping resets, controlled material staging, and
              protected circulation paths to maintain clean, organized sites.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              Communication standards
            </h3>
            <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
              Clients receive scheduled updates, milestone reviews, and direct
              responses tied to active decisions.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-7">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              Budget and timeline respect
            </h3>
            <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
              Schedule and cost are tracked against baseline milestones.
              Variations are surfaced early, priced clearly, and approved before
              related work begins.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Start with Discovery"
        body="Book a focused 15-minute consultation and we will map your next step with clarity."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "See Completed Projects", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
