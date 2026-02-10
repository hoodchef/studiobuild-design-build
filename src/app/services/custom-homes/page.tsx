import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildBreadcrumbSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom Home Builder Vancouver | Ground-Up Homes",
  description:
    "Build your custom home in Vancouver with Red Seal certified craftsmen. In-house design, permit coordination & disciplined project management. Serving the Lower Mainland.",
  path: "/services/custom-homes",
  keywords: [
    "custom home builder Vancouver",
    "custom home builder North Vancouver",
    "luxury custom home West Vancouver",
    "design build custom homes",
    "new home construction Lower Mainland",
    "custom home contractor BC",
  ],
});

const keywords = [
  "custom home builder Vancouver",
  "luxury custom home North Vancouver",
  "design build custom homes West Vancouver",
  "new home construction Lower Mainland",
];

const serviceSchema = buildServiceSchema({
  name: "Custom Home Builder Vancouver & Lower Mainland",
  description:
    "Ground-up custom home construction with integrated design-build planning, permit coordination, and precision-focused site execution.",
  path: "/services/custom-homes",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Custom Homes", path: "/services/custom-homes" },
]);

export default function CustomHomesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Services / Custom Homes"
        title="Custom Homes, Properly Planned and Built"
        subtitle="Red Seal Certified delivery for homeowners who want quality without chaos."
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
