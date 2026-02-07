export type ServiceArea = {
  slug: string;
  city: string;
  intro: string;
  permits: string;
  focus: string;
};

export const areaData: ServiceArea[] = [
  {
    slug: "vancouver",
    city: "Vancouver",
    intro:
      "StudioBuild supports homeowners throughout Vancouver with design-led renovations, custom decks, and custom homes delivered through a disciplined process.",
    permits:
      "We map permit requirements early and coordinate municipal submission timing to reduce avoidable delay.",
    focus:
      "Popular scope includes full-home renovations, laneway-adjacent outdoor upgrades, and custom-home pre-construction planning.",
  },
  {
    slug: "north-vancouver",
    city: "North Vancouver",
    intro:
      "North Vancouver projects often involve slope conditions, weather exposure, and tight site logistics. StudioBuild plans these constraints early.",
    permits:
      "Permit strategy accounts for local zoning and hillside requirements before detailed sequencing begins.",
    focus:
      "We frequently deliver custom decks, major renovations, and custom homes with durable envelope and exterior detailing.",
  },
  {
    slug: "west-vancouver",
    city: "West Vancouver",
    intro:
      "StudioBuild delivers design-forward projects in West Vancouver with strong quality control and direct leadership.",
    permits:
      "We coordinate permit and consultant workflows to protect timelines on technically complex properties.",
    focus:
      "Common projects include premium renovations, architectural outdoor spaces, and full custom home builds.",
  },
  {
    slug: "burnaby",
    city: "Burnaby",
    intro:
      "Burnaby homeowners work with StudioBuild for renovations and custom outdoor projects requiring clear planning and clean execution.",
    permits:
      "Municipal permit coordination is built into early project planning to avoid schedule disruption.",
    focus:
      "Typical scope includes structural renovations, phased occupancy projects, and performance-focused deck construction.",
  },
  {
    slug: "coquitlam",
    city: "Coquitlam",
    intro:
      "StudioBuild supports Coquitlam clients with design + build services that connect planning, permits, and construction under one accountable team.",
    permits:
      "Permit pathways are reviewed early to align documentation requirements and budget expectations.",
    focus:
      "Popular work includes renovations, custom homes, and integrated project management for complex residential upgrades.",
  },
  {
    slug: "port-moody",
    city: "Port Moody",
    intro:
      "Port Moody projects are delivered through StudioBuild's structured process with clean sites and consistent communication.",
    permits:
      "We coordinate permit documentation and schedule milestones with municipality requirements in view.",
    focus:
      "Frequent scopes include modern renovations, exterior upgrades, and custom deck/outdoor living projects.",
  },
  {
    slug: "surrey",
    city: "Surrey",
    intro:
      "Surrey homeowners and property owners hire StudioBuild for organized, high-standard construction execution.",
    permits:
      "We manage permit coordination and project controls to maintain clarity through each stage.",
    focus:
      "Projects include full-home renovations, custom homes, and permit-led project management mandates.",
  },
  {
    slug: "richmond",
    city: "Richmond",
    intro:
      "StudioBuild provides Richmond clients with precision planning and quality-led build execution across residential project types.",
    permits:
      "Permit planning is integrated into pre-construction so timelines stay realistic and proactive.",
    focus:
      "Scope includes renovations, custom outdoor living, and design + build delivery for comprehensive projects.",
  },
  {
    slug: "langley",
    city: "Langley",
    intro:
      "In Langley, StudioBuild delivers custom residential projects with direct accountability and disciplined process management.",
    permits:
      "We align approval requirements, budget checkpoints, and construction sequencing from the beginning.",
    focus:
      "Typical work includes renovations, custom homes, and large-scale deck and exterior living spaces.",
  },
];
