import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildBreadcrumbSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Interior Renovation Contractor Vancouver | Home Renovations",
  description:
    "Interior renovation contractor in Vancouver and the Lower Mainland for kitchens, bathrooms, and full-home remodels with clear scope and staged sequencing.",
  path: "/services/renovations",
  keywords: [
    "interior renovation contractor Vancouver",
    "home renovation Vancouver",
    "kitchen renovation Vancouver",
    "bathroom renovation contractor",
    "full interior renovation Burnaby",
    "renovation company Lower Mainland",
  ],
});

const keywords = [
  "interior renovation contractor Vancouver",
  "full interior renovation Burnaby",
  "interior renovation company Coquitlam",
  "design-led interior renovation Lower Mainland",
];

const serviceSchema = buildServiceSchema({
  name: "Interior Renovation Contractor Vancouver & Lower Mainland",
  description:
    "Interior renovation services including kitchens, structural reconfiguration, and full-home interiors with disciplined planning and quality control.",
  path: "/services/renovations",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Interior Renovations", path: "/services/renovations" },
]);

export default function RenovationsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
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
