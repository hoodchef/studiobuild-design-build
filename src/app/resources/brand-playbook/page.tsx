import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "Brand Playbook",
  description: "Internal StudioBuild brand strategy and messaging reference.",
  path: "/resources/brand-playbook",
  noindex: true,
});

const taglines = [
  "Built With Precision. Led With Care.",
  "Design First. Build Properly.",
  "Fewer Projects. Better Builds.",
  "Structured Planning. Exceptional Results.",
  "Craftsmanship You Can Measure.",
  "Calm Process. Exacting Build.",
  "Built Right the First Time.",
  "Clear Plans. Clean Sites. Strong Results.",
  "Design-Led Construction, Properly Managed.",
  "Reliable Build, Refined Finish.",
];

export default function BrandPlaybookPage() {
  return (
    <>
      <PageHero
        kicker="Internal Resource"
        title="StudioBuild Brand Playbook"
        subtitle="Positioning, values, voice, and visual identity directions used in this website build."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 py-12 text-[15px] leading-8 text-[var(--ink-soft)] md:py-16">
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Positioning</h2>
            <p>
              StudioBuild Design + Build is a Lower Mainland construction partner
              for homeowners and property owners who want design-led spaces built
              with precision, clean execution, and direct accountability from
              start to finish.
            </p>
          </article>

          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Brand Values</h2>
            <ul className="list-disc pl-6">
              <li>Precision in planning and execution</li>
              <li>Reliability in schedule, budget, and follow-through</li>
              <li>Clear communication at every stage</li>
              <li>Respect for homes, neighbours, and sites</li>
              <li>Craftsmanship over volume</li>
              <li>Structured process with transparent decisions</li>
              <li>Pride in doing it properly the first time</li>
            </ul>
          </article>

          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Tone of Voice</h2>
            <p>
              Communicate in clear and specific language. Lead with process,
              scope, and outcomes. Avoid hype, cliches, and fake luxury claims.
            </p>
          </article>

          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Taglines</h2>
            <ul className="list-disc pl-6">
              {taglines.map((tagline) => (
                <li key={tagline}>{tagline}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Visual Directions</h2>
            <p>
              Modern Minimal: #F5F5F2, #D9D8D2, #2C2F33, #111315, #8C7A63 with
              Manrope + IBM Plex Sans. Warm Craft: #F1ECE4, #D8CBB8, #9C7B5A,
              #5F4A3A, #2F3438 with DM Serif Display + Work Sans. Premium
              Architectural: #FAFAF8, #C9CED3, #7B858F, #1E2328, #A48A6A with
              Plus Jakarta Sans + Source Sans 3.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
