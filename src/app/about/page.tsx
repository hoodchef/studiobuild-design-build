import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About StudioBuild",
  description:
    "Learn how StudioBuild's Red Seal Certified team delivers structured, high-standard construction across the Lower Mainland with over 35 years of service experience.",
  path: "/about",
  keywords: [
    "red seal certified contractor Lower Mainland",
    "experienced construction team Vancouver",
    "reliable renovation contractor North Vancouver",
    "design build team West Vancouver",
  ],
});

const aboutKeywords = [
  "red seal certified contractor Lower Mainland",
  "experienced construction team Vancouver",
  "reliable renovation contractor North Vancouver",
  "design build team West Vancouver",
];

const teamStandards = [
  "Red Seal Certified build leadership",
  "35+ years serving the Lower Mainland",
  "In-house design and pre-construction planning",
  "Strict site cleanliness and organization",
  "Documented communication and approvals",
  "Quality checkpoints at each milestone",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Built by a Red Seal Certified Team"
        subtitle="StudioBuild delivers structured, design-led construction with a team that has served the Lower Mainland for over 35 years."
      />

      <section className="section-shell border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <article className="panel rounded-2xl p-7 md:p-8">
            <p className="eyebrow">Who We Are</p>
            <h2 className="headline-pop mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
              A focused construction team built for high-standard residential work.
            </h2>
            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--ink-soft)]">
              StudioBuild exists to give Lower Mainland homeowners a better build experience: clear planning, reliable execution, and accountable follow-through. We take on fewer projects so every
              build receives direct team attention and disciplined quality control.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {teamStandards.map((item) => (
                <span key={item} className="metric-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <ContentSection title="How We Work">
        <p>
          StudioBuild is built around one standard: do the work properly the
          first time.
        </p>
        <p>
          Design and construction are managed as one coordinated system. We test
          buildability early, align scope with budget, and resolve risk before
          construction starts, reducing avoidable surprises during active work.
        </p>
        <p>
          Site standards are strict. Communication is structured. Changes are
          documented and approved clearly. Organization, cleanliness, and
          accountability are treated as core quality requirements on every
          project.
        </p>
      </ContentSection>

      <ContentSection title="Where We Work">
        <p>
          StudioBuild is trusted across Vancouver, North Vancouver, West
          Vancouver, Burnaby, Coquitlam, Port Moody, Surrey, Richmond, and
          Langley for custom decks and outdoor spaces, interior renovations,
          custom homes, integrated design + build, and project management with
          permitting.
        </p>
        <p>
          The team is the right fit for clients who care about long-term value,
          craftsmanship, and a process that stays professional from first
          meeting through final handover.
        </p>
      </ContentSection>

      <CtaBand
        title="If you value quality and predictability, let&apos;s talk."
        body="Start with a focused consultation. Our team will review project fit, pre-construction requirements, and your best next step."
        primary={{ label: "Meet the Team", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <KeywordList keywords={aboutKeywords} />
    </>
  );
}
