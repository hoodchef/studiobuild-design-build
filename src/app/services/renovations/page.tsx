import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Interior Renovations",
  description:
    "Interior renovations delivered with structured planning, clean sites, and high-quality execution across the Lower Mainland.",
  path: "/services/renovations",
  keywords: [
    "interior renovation contractor Vancouver",
    "full interior renovation Burnaby",
    "interior renovation company Coquitlam",
    "design-led interior renovation Lower Mainland",
  ],
});

const keywords = [
  "interior renovation contractor Vancouver",
  "full interior renovation Burnaby",
  "interior renovation company Coquitlam",
  "design-led interior renovation Lower Mainland",
];

export default function RenovationsPage() {
  return (
    <>
      <PageHero
        kicker="Services / Interior Renovations"
        title="Interior Renovations With Clear Scope and Clean Execution"
        subtitle="Interior renovations managed with planning discipline, reliable communication, and craftsmanship."
      />

      <ContentSection title="Interior Renovation Scope">
        <p>
          We deliver kitchen renovations, main-floor reconfigurations, interior
          transformations, and structural upgrades with a focus on
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
        title="Plan your interior renovation with confidence and control."
        body="Book a consultation to review your goals, constraints, and ideal project timeline."
        primary={{ label: "Plan My Interior Renovation", href: "/contact" }}
        secondary={{ label: "See Interior Renovation Projects", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
