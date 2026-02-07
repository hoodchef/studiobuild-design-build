import { PageHero } from "@/components/ui/page-hero";
import { socialHighlights } from "@/lib/site-data";

const bioOptions = [
  "Design-led builder in the Lower Mainland. Decks, renovations, custom homes. Clean sites. Clear process.",
  "StudioBuild Design + Build. Founder-led by Caleb Stapelmann. Fewer projects, higher standard.",
  "Custom decks, renovations, homes. Planned properly. Built precisely. Serving Greater Vancouver.",
  "Construction without chaos. Structured planning, quality execution, direct accountability.",
  "Lower Mainland design + build partner. Transparent process from concept to handover.",
];

const plan = [
  "Reel: Site setup standards walkthrough.",
  "Carousel: 5 pre-construction mistakes to avoid in Vancouver.",
  "Stories: Poll on deck material preferences.",
  "Reel: Before/after deck transformation.",
  "Carousel: How we scope renovation budgets.",
  "Stories: Q&A box on permits.",
  "Reel: Detail shot sequence, framing to finish.",
  "Carousel: Timeline map for a typical renovation.",
  "Stories: Team day-in-the-life clips.",
  "Reel: Clean site reset end-of-day routine.",
  "Carousel: Material comparison for wet climate decking.",
  "Stories: Client testimonial quote card.",
  "Reel: One design decision that improved flow.",
  "Carousel: What change order clarity looks like.",
  "Stories: Progress update from active project.",
  "Reel: Joinery detail closeup with explanation.",
  "Carousel: Budget priorities for custom homes.",
  "Stories: Permit process myth vs fact.",
  "Reel: Exterior envelope detail explained simply.",
  "Carousel: 7 questions to ask any contractor.",
  "Stories: This-or-that finish choices.",
  "Reel: Renovation sequencing explained on site plan.",
  "Carousel: How we protect occupied homes during renovation.",
  "Stories: Quick founder check-in from Caleb.",
  "Reel: Cabinet and trim alignment detail.",
  "Carousel: Municipality differences in permit timing.",
  "Stories: FAQ response clips.",
  "Reel: Portfolio project tour, completed space.",
  "Carousel: Client journey from consultation to handover.",
  "Stories: Month recap and consultation CTA.",
];

export default function SocialPlanPage() {
  return (
    <>
      <PageHero
        kicker="Internal Resource"
        title="30-Day Social Presence Plan"
        subtitle="Content plan focused on craftsmanship, process transparency, education, and trust-building."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Bio Options</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-[var(--ink-soft)]">
              {bioOptions.map((bio) => (
                <li key={bio}>{bio}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Highlights</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{socialHighlights.join(" | ")}</p>
          </article>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">30-Day Calendar</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {plan.map((item, index) => (
              <li key={item} className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 text-sm leading-7 text-[var(--ink-soft)]">
                Day {index + 1}: {item}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
