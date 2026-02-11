export type PortfolioCaseStudy = {
  slug: string;
  title: string;
  category: string;
  location: string;
  serviceType: string;
  summary: string;
  timeline: string;
  before: string;
  after: string;
  scope: string[];
  materials: string[];
  designDecisions: string[];
  craftsmanshipDetails: string[];
  outcome: string;
};

export const portfolioCaseStudies: PortfolioCaseStudy[] = [
  {
    slug: "west-vancouver-hillside-cedar-steel-deck",
    title: "West Vancouver Hillside Cedar + Steel Outdoor Platform",
    category: "Custom Decks & Outdoor Living",
    location: "West Vancouver",
    serviceType: "Custom Deck Construction",
    summary:
      "A stepped hillside deck platform built for drainage control, evening use, and clean indoor-outdoor transition lines.",
    timeline: "9 weeks from site prep to final walkthrough",
    before:
      "The existing yard had poor grade transitions, limited usable gathering space, and no integrated drainage strategy for wet-season performance.",
    after:
      "The finished build delivered a multi-zone outdoor platform with concealed fastening, durable edge detailing, and integrated low-voltage lighting.",
    scope: [
      "Demolition and grade correction",
      "New structural framing and footing system",
      "Integrated drainage and lighting plan",
      "Custom stair geometry and railing package",
    ],
    materials: [
      "Western red cedar decking",
      "Powder-coated steel railing components",
      "Weather-rated low-voltage lighting fixtures",
      "Moisture-tolerant substructure detailing",
    ],
    designDecisions: [
      "Board orientation was aligned to sightlines from interior glazing for a longer visual run.",
      "Step heights and tread depth were tuned for comfort and nighttime visibility.",
      "Drainage paths were hidden without compromising access for maintenance.",
    ],
    craftsmanshipDetails: [
      "Consistent reveal spacing at edge boards and stair noses",
      "Flush transitions at threshold and landing connections",
      "Precision alignment between railing posts and framing layout",
    ],
    outcome:
      "The project converted an underused slope into a year-round outdoor living area with stronger safety, durability, and visual cohesion.",
  },
  {
    slug: "burnaby-main-floor-structural-renovation",
    title: "Burnaby Main-Floor Structural Renovation",
    category: "Interior Renovations",
    location: "Burnaby",
    serviceType: "Interior Renovation",
    summary:
      "A full main-floor reconfiguration with structural beam integration, layout simplification, and coordinated finish transitions.",
    timeline: "14 weeks including engineering coordination and inspections",
    before:
      "The original layout had compartmentalized rooms, poor circulation, and inconsistent finish lines between key living zones.",
    after:
      "The renovation opened core sightlines, improved movement flow, and delivered a unified interior finish package with cleaner transitions.",
    scope: [
      "Selective demolition and temporary support setup",
      "Structural beam installation with engineer sign-off",
      "Kitchen and living-zone millwork integration",
      "Lighting, electrical, and finish re-sequencing",
    ],
    materials: [
      "Custom painted and stained millwork",
      "Durable quartz surfacing",
      "Wide-plank engineered wood flooring",
      "Moisture-resistant wall and cabinet systems",
    ],
    designDecisions: [
      "Cabinet and appliance lines were aligned to reduce visual clutter.",
      "Lighting was zoned by task and circulation instead of fixture count.",
      "Transition details were standardized to maintain consistent tolerance and finish quality.",
    ],
    craftsmanshipDetails: [
      "Tight millwork reveals at panel and appliance interfaces",
      "Consistent floor leveling across reworked structural zones",
      "Clean substrate preparation ahead of finish installation",
    ],
    outcome:
      "The home gained a more functional layout and stronger day-to-day usability without sacrificing durability or clean detailing.",
  },
  {
    slug: "north-vancouver-slope-lot-custom-home",
    title: "North Vancouver Slope-Lot Custom Home",
    category: "Custom Homes",
    location: "North Vancouver",
    serviceType: "Custom Home Build",
    summary:
      "A ground-up custom home delivered with envelope-first planning, phased trade sequencing, and precision interior fit-off.",
    timeline: "16 months from pre-construction to handover",
    before:
      "The site presented slope access constraints, runoff management risk, and sequencing complexity between structural and envelope trades.",
    after:
      "The finished home delivered durable coastal detailing, consistent interior finish quality, and a disciplined turnover process.",
    scope: [
      "Pre-construction planning with municipal coordination",
      "Foundation, framing, and envelope package",
      "Interior systems, millwork, and finish execution",
      "Quality checks at each milestone and handover documentation",
    ],
    materials: [
      "High-performance cladding and moisture-control assembly",
      "Engineered structural framing package",
      "Custom interior millwork and metal detailing",
      "Premium flooring and stone finish systems",
    ],
    designDecisions: [
      "Envelope performance targets were prioritized before interior selections.",
      "Mechanical and lighting coordination was resolved during framing stage.",
      "Finish specifications were selected for durability in high-use zones.",
    ],
    craftsmanshipDetails: [
      "Tight envelope sequencing around penetrations and transitions",
      "Consistent trim alignment across window and door packages",
      "Measured tolerance control at stair, millwork, and flooring interfaces",
    ],
    outcome:
      "The project closed with predictable handover, reduced post-completion deficiencies, and high finish consistency throughout the home.",
  },
];

export function getPortfolioCaseStudyBySlug(slug: string) {
  return portfolioCaseStudies.find((study) => study.slug === slug);
}
