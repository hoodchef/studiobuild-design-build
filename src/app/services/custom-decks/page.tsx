import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom Deck Builder Vancouver | Outdoor Living",
  description:
    "Custom deck design & construction for Vancouver's climate. Cedar, composite & covered decks built by Red Seal carpenters. Serving Vancouver, North Vancouver & Lower Mainland.",
  path: "/services/custom-decks",
  keywords: [
    "custom deck builder Vancouver",
    "deck contractor Vancouver",
    "composite deck builder North Vancouver",
    "cedar deck contractor Burnaby",
    "outdoor living construction",
    "covered patio builder Lower Mainland",
  ],
});

const keywords = [
  "custom deck builder Vancouver",
  "composite deck contractor North Vancouver",
  "outdoor living construction Burnaby",
  "covered patio builder Lower Mainland",
];

const serviceSchema = buildServiceSchema({
  name: "Custom Deck Builder Vancouver & Lower Mainland",
  description:
    "Design and construction for custom decks, covered patios, stairs, and outdoor living spaces built for Lower Mainland conditions.",
  path: "/services/custom-decks",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Custom Decks", path: "/services/custom-decks" },
]);

const relatedAreaSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Custom Deck Service Areas",
  itemListElement: [
    "Vancouver",
    "North Vancouver",
    "West Vancouver",
    "Burnaby",
    "Coquitlam",
    "Port Moody",
    "Surrey",
    "Richmond",
    "Langley",
  ].map((city, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: city,
    url: absoluteUrl(`/areas/${city.toLowerCase().replace(/\s+/g, "-")}`),
  })),
};

export default function CustomDecksPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={relatedAreaSchema} />
      <PageHero
        kicker="Services / Custom Decks"
        title="Custom Decks and Outdoor Spaces Built to Last"
        subtitle="Thoughtful design, durable materials, and precise execution for Lower Mainland conditions."
      />

      <ContentSection title="What We Build">
        <p>
          We build custom decks, covered patio areas, integrated stairs,
          exterior kitchens, and complete outdoor living zones that are
          functional in wet coastal weather and visually consistent with the
          home.
        </p>
      </ContentSection>

      <ContentSection title="What&apos;s Included">
        <p>
          Every project includes site assessment, concept options, material
          recommendations, permit guidance when required, and full construction
          delivery.
        </p>
      </ContentSection>

      <ContentSection title="Detail Standards">
        <p>
          Framing, drainage, fastener selection, and trim transitions are
          planned before installation. We focus on long-term performance,
          consistent reveals, and clean edge conditions.
        </p>
      </ContentSection>

      <CtaBand
        title="Get an outdoor space that feels intentional, not improvised."
        body="Share your scope and we will outline options, budget range, and the right next step."
        primary={{ label: "Start a Deck Project", href: "/contact" }}
        secondary={{ label: "View Deck Portfolio", href: "/portfolio" }}
      />

      <KeywordList keywords={keywords} />
    </>
  );
}
