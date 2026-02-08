import { CtaBand } from "@/components/ui/cta-band";
import { ContentSection } from "@/components/ui/content-section";
import { KeywordList } from "@/components/ui/keyword-list";
import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom Decks",
  description:
    "Custom decks and outdoor spaces designed and built for Lower Mainland weather, durability, and clean detailing.",
  path: "/services/custom-decks",
  keywords: [
    "custom deck builder Vancouver",
    "composite deck contractor North Vancouver",
    "outdoor living construction Burnaby",
    "covered patio builder Lower Mainland",
  ],
});

const keywords = [
  "custom deck builder Vancouver",
  "composite deck contractor North Vancouver",
  "outdoor living construction Burnaby",
  "covered patio builder Lower Mainland",
];

export default function CustomDecksPage() {
  return (
    <>
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
