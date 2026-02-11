import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildBreadcrumbSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Construction Project Management & Permit Services Vancouver",
  description:
    "Project management and permit coordination in Vancouver and the Lower Mainland for schedule control, trade alignment, municipal approvals, and reporting.",
  path: "/services/project-management-permits",
  keywords: [
    "construction project management Vancouver",
    "building permit help Vancouver",
    "permit coordination Lower Mainland",
    "residential project manager BC",
    "construction permit services",
  ],
});

const keywords = [
  "permit management Vancouver",
  "construction project manager Lower Mainland",
  "residential permit help Burnaby",
  "building permit coordination Surrey",
];

const serviceSchema = buildServiceSchema({
  name: "Project Management and Permit Coordination Vancouver",
  description:
    "Construction project management and municipal permit support across Vancouver and the Lower Mainland.",
  path: "/services/project-management-permits",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  {
    name: "Project Management & Permits",
    path: "/services/project-management-permits",
  },
]);

export default function ProjectManagementPermitsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Services / Project Management & Permits"
        title="Project Management and Permit Support"
        subtitle="Structured coordination that keeps your project moving with fewer avoidable delays."
      />

      <ContentSection title="Management Scope">
        <p>
          We coordinate trade schedules, procurement timing, budget checkpoints,
          documentation control, and quality oversight to keep project delivery
          organized.
        </p>
      </ContentSection>

      <ContentSection title="Permit Clarity">
        <p>
          Permit pathways are identified early and submission requirements are
          coordinated by municipality so approval timelines are managed with
          realistic expectations.
        </p>
      </ContentSection>

      <ContentSection title="Oversight and Reporting">
        <p>
          We monitor schedule and quality continuously and provide consistent
          progress reporting with action items tied to milestones.
        </p>
      </ContentSection>

      <CtaBand
        title="Strong management protects timeline and budget."
        body="Tell us your scope and municipality and we will outline the right permit and PM approach."
        primary={{ label: "Get PM + Permit Support", href: "/contact" }}
        secondary={{ label: "Discuss Project", href: "/contact" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
