import type { Metadata } from "next";

import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "About StudioBuild",
  description:
    "Learn how founder Caleb Stapelmann leads StudioBuild with precision, structure, and accountability across the Lower Mainland.",
  keywords: [
    "about StudioBuild Lower Mainland",
    "Caleb Stapelmann builder",
    "founder-led construction Vancouver",
    "reliable contractor West Vancouver",
  ],
};

const aboutKeywords = [
  "about StudioBuild Lower Mainland",
  "Caleb Stapelmann builder",
  "founder-led construction Vancouver",
  "reliable contractor West Vancouver",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Built on Structure, Precision, and Accountability"
        subtitle="StudioBuild was founded by Caleb Stapelmann to deliver a better way to build: clear planning, clean execution, and direct ownership from start to finish."
      />

      <ContentSection title="Homepage Story">
        <p>
          StudioBuild Design + Build was founded by Caleb Stapelmann to offer a
          better construction experience for Lower Mainland homeowners. Caleb
          built the company around a simple standard: do the work properly the
          first time, and stand behind every decision. With roots in German
          craftsmanship values, StudioBuild is known for precision, structure,
          and reliability on every project, from custom decks and major
          renovations to full custom homes. Clients work with a team that plans
          carefully, communicates clearly, and keeps sites clean and organized.
          We take on fewer projects so each one gets the attention it deserves.
          The result is high-quality work, predictable execution, and a build
          process that feels calm, transparent, and professionally managed from
          first meeting to final handover.
        </p>
      </ContentSection>

      <ContentSection title="Founder Story">
        <p>
          StudioBuild Design + Build was created to solve a common problem in
          residential construction: too much uncertainty, not enough
          accountability.
        </p>
        <p>
          Founder Caleb Stapelmann built StudioBuild around a standard that is
          straightforward but often missing in the market. Plan thoroughly.
          Communicate clearly. Build properly. Finish strong. The goal is not to
          take on the highest number of projects. The goal is to deliver a
          smaller number of projects at a higher standard, with direct
          leadership and consistent execution.
        </p>
        <p>
          Caleb&apos;s background and German roots shaped the way StudioBuild
          operates. Precision matters. Structure matters. Reliability matters.
          Those values are not branding language only. They are built into
          day-to-day process, from first site visit through design, budgeting,
          permitting, construction, and handover.
        </p>
        <p>
          At StudioBuild, design and construction are treated as one connected
          system. Buildability is discussed early. Material choices are tested
          against budget and long-term performance. Scope is clarified before
          build starts. Risks are identified and addressed in planning instead of
          discovered mid-project. This approach helps clients avoid the chaos
          that often comes from fragmented teams and unclear expectations.
        </p>
        <p>
          Caleb remains hands-on throughout each project. Clients are not passed
          from a sales rep to a disconnected production team. Decisions are made
          with full context, and responsibility stays clear. If an issue arises,
          StudioBuild addresses it directly, quickly, and transparently.
        </p>
        <p>
          StudioBuild is trusted across Vancouver, North Vancouver, West
          Vancouver, Burnaby, Coquitlam, Port Moody, Surrey, Richmond, and
          Langley for custom decks and outdoor spaces, renovations, full custom
          homes, design + build services, and project management with permitting
          support. The team is known for organized sites, professional conduct,
          and respect for the home environment.
        </p>
        <p>
          Communication is structured. Clients receive clear updates, milestone
          reviews, and direct explanations of options and tradeoffs. Budget and
          timeline discussions are handled early and honestly. If a change is
          needed, it is documented and managed with clarity so clients can make
          decisions with confidence.
        </p>
        <p>
          StudioBuild exists for homeowners and property owners who care about
          quality, predictability, and professionalism. If that is your
          standard, this is the right team to build with.
        </p>
      </ContentSection>

      <CtaBand
        title="If you value quality and predictability, let&apos;s talk."
        body="Start with a focused consultation. We will review project fit, pre-construction requirements, and your best next step."
        primary={{ label: "Meet With Caleb", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <KeywordList keywords={aboutKeywords} />
    </>
  );
}
