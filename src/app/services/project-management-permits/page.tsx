import type { Metadata } from "next";

import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Project Management & Permits",
  description:
    "Structured construction project management and permit coordination across Lower Mainland municipalities.",
  keywords: [
    "permit management Vancouver",
    "construction project manager Lower Mainland",
    "residential permit help Burnaby",
    "building permit coordination Surrey",
  ],
};

const keywords = [
  "permit management Vancouver",
  "construction project manager Lower Mainland",
  "residential permit help Burnaby",
  "building permit coordination Surrey",
];

export default function ProjectManagementPermitsPage() {
  return (
    <>
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
