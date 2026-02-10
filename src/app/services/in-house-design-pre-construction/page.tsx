import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Pre-Construction Planning & Design Services Vancouver",
  description:
    "Feasibility, scope planning & pre-construction coordination to de-risk your build before site work starts. In-house design services for Vancouver & Lower Mainland.",
  path: "/services/in-house-design-pre-construction",
  keywords: [
    "pre construction planning Vancouver",
    "in house design build Vancouver",
    "residential design services BC",
    "construction feasibility planning",
    "scope planning contractor",
  ],
});

const keywords = [
  "pre construction planning Vancouver",
  "in house design build Lower Mainland",
  "residential feasibility planning BC",
  "construction scope planning North Vancouver",
];

export default function InHouseDesignPreConstructionPage() {
  return (
    <>
      <PageHero
        kicker="Services / In-House Design & Pre-Construction"
        title="In-House Design and Pre-Construction Planning"
        subtitle="Clarity before construction starts: feasibility, scope, budget alignment, and execution-ready planning."
      />

      <ContentSection title="What This Covers">
        <p>
          We guide early-stage project planning through in-house design
          direction, space planning, buildability review, permit pathway
          alignment, preliminary material strategy, and staged budget logic.
        </p>
      </ContentSection>

      <ContentSection title="Why It Matters">
        <p>
          Most schedule and budget issues are created before site work starts.
          This service resolves key decisions early so custom builds and
          interior renovations move into construction with fewer unknowns.
        </p>
      </ContentSection>

      <ContentSection title="Deliverable">
        <p>
          You receive a clear scope framework, decision sequence, permit
          readiness direction, and a pre-construction plan that can move
          directly into build delivery.
        </p>
      </ContentSection>

      <CtaBand
        title="Start with planning that protects your build."
        body="Book a consultation and we will map the right pre-construction path for your project."
        primary={{ label: "Start Pre-Construction", href: "/contact" }}
        secondary={{ label: "View Our Process", href: "/process" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
