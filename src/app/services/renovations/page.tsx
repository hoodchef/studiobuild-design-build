import type { Metadata } from "next";

import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Renovations",
  description:
    "Major home renovations delivered with structured planning, clean sites, and high-quality execution across the Lower Mainland.",
  keywords: [
    "home renovation contractor Vancouver",
    "full home renovation Burnaby",
    "renovation company Coquitlam",
    "design-led renovation Lower Mainland",
  ],
};

const keywords = [
  "home renovation contractor Vancouver",
  "full home renovation Burnaby",
  "renovation company Coquitlam",
  "design-led renovation Lower Mainland",
];

export default function RenovationsPage() {
  return (
    <>
      <PageHero
        kicker="Services / Renovations"
        title="Renovations With Clear Scope and Clean Execution"
        subtitle="Major renovations managed with planning discipline, reliable communication, and craftsmanship."
      />

      <ContentSection title="Renovation Scope">
        <p>
          We deliver kitchen renovations, main-floor reconfigurations,
          whole-home renovations, and structural upgrades with a focus on
          sequencing and quality control.
        </p>
      </ContentSection>

      <ContentSection title="Planning First">
        <p>
          Before build starts, we define scope boundaries, milestone decisions,
          schedule logic, and budget controls so work moves efficiently.
        </p>
      </ContentSection>

      <ContentSection title="During Construction">
        <p>
          Sites remain organized and communication remains active. Any change is
          documented and approved before it affects budget or schedule.
        </p>
      </ContentSection>

      <CtaBand
        title="Renovate with confidence and control."
        body="Book a consultation to review your goals, constraints, and ideal project timeline."
        primary={{ label: "Plan My Renovation", href: "/contact" }}
        secondary={{ label: "See Renovation Projects", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
