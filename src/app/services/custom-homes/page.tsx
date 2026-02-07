import type { Metadata } from "next";

import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Custom Homes",
  description:
    "Custom homes built with disciplined pre-construction, direct oversight, and precision-focused execution.",
  keywords: [
    "custom home builder Vancouver",
    "luxury custom home North Vancouver",
    "design build custom homes West Vancouver",
    "new home construction Lower Mainland",
  ],
};

const keywords = [
  "custom home builder Vancouver",
  "luxury custom home North Vancouver",
  "design build custom homes West Vancouver",
  "new home construction Lower Mainland",
];

export default function CustomHomesPage() {
  return (
    <>
      <PageHero
        kicker="Services / Custom Homes"
        title="Custom Homes, Properly Planned and Built"
        subtitle="Founder-led delivery for homeowners who want quality without chaos."
      />

      <ContentSection title="Build Scope">
        <p>
          We coordinate custom homes from early concept through occupancy,
          including design integration, engineering coordination, permit support,
          procurement strategy, and full-site construction management.
        </p>
      </ContentSection>

      <ContentSection title="Pre-Construction Discipline">
        <p>
          We front-load planning to align design intent, budget constraints,
          municipality requirements, and build sequencing. This protects both
          schedule and quality.
        </p>
      </ContentSection>

      <ContentSection title="Craft Standards">
        <p>
          Envelope details, interior transitions, finish tolerances, and system
          coordination are managed with the same level of care as visible
          finishes.
        </p>
      </ContentSection>

      <CtaBand
        title="Build a custom home with structured execution."
        body="Let&apos;s review your site, goals, and timeline requirements to define the best project path."
        primary={{ label: "Discuss a Custom Home", href: "/contact" }}
        secondary={{ label: "View Home Projects", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
