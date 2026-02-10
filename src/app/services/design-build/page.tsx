import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildBreadcrumbSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Design Build Contractor Vancouver | In-House Design + Build",
  description:
    "One team from concept to completion. In-house design-build services for custom homes & renovations in Vancouver. Reduce handoffs, save time & money.",
  path: "/services/design-build",
  keywords: [
    "design build contractor Vancouver",
    "design build firm Vancouver",
    "in house design build",
    "integrated design and construction BC",
    "design build company Lower Mainland",
  ],
});

const keywords = [
  "design build firm Vancouver",
  "integrated design and construction BC",
  "design build contractor Lower Mainland",
];

const serviceSchema = buildServiceSchema({
  name: "Design Build Contractor Vancouver & Lower Mainland",
  description:
    "Integrated design and construction services with one accountable team from concept through handover.",
  path: "/services/design-build",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Design + Build", path: "/services/design-build" },
]);

export default function DesignBuildPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        kicker="Services / Design + Build"
        title="One Team for Design and Construction"
        subtitle="Better alignment, fewer handoffs, and clearer accountability from concept to completion."
      />

      <ContentSection title="Problem We Solve">
        <p>
          When design and construction teams are disconnected, projects lose time
          and budget control. Our integrated model keeps scope and execution tied
          together from day one.
        </p>
      </ContentSection>

      <ContentSection title="How It Works">
        <p>
          We coordinate concept development, cost alignment, technical decisions,
          permitting, and build planning in one workflow. That keeps drawings,
          decisions, and site execution synchronized.
        </p>
      </ContentSection>

      <ContentSection title="Client Benefit">
        <p>
          You get one point of responsibility, fewer coordination gaps, faster
          issue resolution, and a smoother experience from planning through
          handover.
        </p>
      </ContentSection>

      <CtaBand
        title="Reduce project friction with one accountable team."
        body="Book a project call and we will map the right design + build path for your goals."
        primary={{ label: "Start Design + Build", href: "/contact" }}
        secondary={{ label: "View Integrated Projects", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
