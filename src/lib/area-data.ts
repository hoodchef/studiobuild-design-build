export type ServiceArea = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  neighbourhoods: string[];
  intro: string;
  customHomes: string;
  renovations: string;
  decks: string;
  permits: string;
  whyChoose: string[];
  focus: string;
};

export const areaData: ServiceArea[] = [
  {
    slug: "vancouver",
    city: "Vancouver",
    metaTitle: "Custom Home Builder & Renovations in Vancouver",
    metaDescription:
      "Vancouver custom home builder and renovation contractor for design-build projects, interior renovations, decks, and project management across the city.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Vancouver",
    heroSubtitle:
      "StudioBuild delivers custom homes, interior renovations, and design-build projects throughout Vancouver. Our Red Seal certified team has served Vancouver homeowners for over 35 years.",
    neighbourhoods: [
      "Kitsilano",
      "Point Grey",
      "Dunbar",
      "Kerrisdale",
      "Shaughnessy",
      "South Granville",
      "Arbutus Ridge",
      "Mount Pleasant",
      "Commercial Drive",
      "Hastings-Sunrise",
      "Renfrew-Collingwood",
      "Killarney",
      "Victoria-Fraserview",
      "Fairview",
      "Cambie Corridor",
    ],
    intro:
      "StudioBuild supports homeowners throughout Vancouver with design-led renovations, custom decks, and custom homes delivered through a disciplined process. We work across Vancouver's diverse residential areas, understanding the unique building conditions and architectural character of each neighbourhood.",
    customHomes:
      "Building a custom home in Vancouver requires navigating the city's complex zoning regulations, heritage considerations, and lot-specific challenges. Whether you're building on a standard 33-foot lot in Dunbar or developing a larger property in Shaughnessy, StudioBuild provides end-to-end project coordination including site analysis, in-house design, City of Vancouver permit strategy, pre-construction planning, and full construction management.",
    renovations:
      "Vancouver's housing stock ranges from 1920s Craftsman homes to modern glass-and-steel construction. Our renovation experience spans full home renovations, kitchen and bathroom upgrades, basement developments with legal suite conversions, and heritage home updates that maintain period character while upgrading systems.",
    decks:
      "Vancouver's mild climate makes outdoor living spaces a valuable addition. We design and build cedar and composite decking, covered outdoor kitchens, multi-level deck systems, privacy screens, and hot tub and fire pit integration.",
    permits:
      "Navigating Vancouver's permit process requires experience with Development Permit applications, Building Permit submissions, heritage alteration permits, laneway house regulations, secondary suite requirements, and BC Energy Step Code compliance. StudioBuild handles all permit coordination.",
    whyChoose: [
      "Red Seal Certified trades on every project",
      "In-house design from concept through construction",
      "35+ years experience in Vancouver",
      "Clean, controlled sites in residential areas",
      "Direct communication with decision-makers",
    ],
    focus:
      "Popular scope includes full-home renovations, laneway-adjacent outdoor upgrades, and custom-home pre-construction planning.",
  },
  {
    slug: "north-vancouver",
    city: "North Vancouver",
    metaTitle: "Custom Home Builder & Contractor in North Vancouver",
    metaDescription:
      "North Vancouver custom home builder and renovation contractor for hillside builds, interior renovations, decks, and design-build project delivery.",
    heroTitle: "Custom Home Builder & Renovation Contractor in North Vancouver",
    heroSubtitle:
      "StudioBuild serves North Vancouver homeowners with custom homes, major renovations, and design-build projects tailored to the North Shore's unique terrain.",
    neighbourhoods: [
      "Lower Lonsdale",
      "Central Lonsdale",
      "Upper Lonsdale",
      "Lynn Valley",
      "Deep Cove",
      "Seymour",
      "Edgemont",
      "Capilano",
      "Norgate",
      "Blueridge",
      "Indian River",
      "Moodyville",
      "Tempe",
    ],
    intro:
      "North Vancouver projects often involve slope conditions, weather exposure, and tight site logistics. StudioBuild plans these constraints early. Our Red Seal certified team understands hillside construction, mountain drainage, and the premium standards North Vancouver properties demand.",
    customHomes:
      "North Vancouver's topography creates opportunities for dramatic mountain-view homes—but also engineering and construction challenges that require specialized experience. We manage steep lot access, retaining walls, drainage systems, view corridor optimization, foundation design for sloped terrain, and seismic requirements.",
    renovations:
      "North Vancouver's housing stock includes everything from 1950s ranchers to 1980s split-levels to modern custom builds. Our renovation expertise includes full home renovations, kitchen and bathroom upgrades, basement developments, and exterior updates for North Shore weather conditions.",
    decks:
      "North Vancouver's outdoor lifestyle demands deck and patio spaces that perform year-round. We build multi-level decks on sloped properties, covered outdoor living rooms, hot tub decks with proper drainage, and cedar and composite systems rated for coastal conditions.",
    permits:
      "The City of North Vancouver and District of North Vancouver have different permit processes. StudioBuild navigates District vs. City requirements, hillside development permits, tree protection, streamside protection regulations, and coach house requirements.",
    whyChoose: [
      "Hillside construction expertise on sloped North Shore lots",
      "Red Seal Certified journeyman carpenters",
      "In-house architects and builders working as one team",
      "Mountain climate building knowledge",
      "Completed projects throughout the North Shore",
    ],
    focus:
      "We frequently deliver custom decks, major renovations, and custom homes with durable envelope and exterior detailing.",
  },
  {
    slug: "west-vancouver",
    city: "West Vancouver",
    metaTitle: "Luxury Custom Home Builder in West Vancouver",
    metaDescription:
      "West Vancouver custom home builder for premium renovations, custom homes, and design-build project management with Red Seal certified execution.",
    heroTitle: "Luxury Custom Home Builder in West Vancouver",
    heroSubtitle:
      "StudioBuild delivers luxury custom homes, high-end renovations, and design-build projects in West Vancouver with premium craftsmanship and attention to detail.",
    neighbourhoods: [
      "Ambleside",
      "Dundarave",
      "British Properties",
      "Chartwell",
      "Caulfeild",
      "Horseshoe Bay",
      "Eagle Harbour",
      "Altamont",
      "Westmount",
      "Whitby Estates",
      "Cypress Park",
    ],
    intro:
      "StudioBuild delivers design-forward projects in West Vancouver with strong quality control and direct leadership. We specialize in the premium craftsmanship that West Vancouver properties demand.",
    customHomes:
      "West Vancouver sets the standard for luxury residential construction. From contemporary waterfront estates in Caulfeild to traditional homes in the British Properties, we deliver architectural concrete and steel frame construction, high-performance envelopes, imported finishes, smart home integration, and indoor-outdoor living transitions.",
    renovations:
      "Many West Vancouver homeowners own properties with excellent locations but dated interiors. Our renovation expertise includes whole-home luxury transformations, professional-grade kitchens, spa bathrooms, outdoor living upgrades, and smart home retrofits.",
    decks:
      "West Vancouver properties demand premium outdoor spaces. We build covered entertainment areas, outdoor kitchens, pool houses, and weather-resistant decking designed for oceanfront conditions.",
    permits:
      "West Vancouver's District has specific requirements for high-value properties including Development Permit requirements, Design Panel review, tree protection and replacement, and environmental assessments for sensitive areas.",
    whyChoose: [
      "Luxury construction track record in West Vancouver",
      "Red Seal Certified craftsmen for premium finishes",
      "Discreet, professional service",
      "In-house design for cohesive vision",
      "Clean site management in premium neighbourhoods",
    ],
    focus:
      "Common projects include premium renovations, architectural outdoor spaces, and full custom home builds.",
  },
  {
    slug: "burnaby",
    city: "Burnaby",
    metaTitle: "Custom Home Builder & Renovations in Burnaby BC",
    metaDescription:
      "Burnaby custom home builder and renovation contractor for design-build projects, interior renovations, decks, and permit-led project management.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Burnaby",
    heroSubtitle:
      "StudioBuild serves Burnaby homeowners with custom homes, interior renovations, and design-build projects with 35+ years of experience.",
    neighbourhoods: [
      "Burnaby Heights",
      "Capitol Hill",
      "Brentwood",
      "Metrotown",
      "Deer Lake",
      "Edmonds",
      "Highgate",
      "Burnaby Mountain",
      "SFU Area",
      "Willingdon Heights",
      "Maywood",
      "Cariboo",
    ],
    intro:
      "Burnaby homeowners work with StudioBuild for renovations and custom outdoor projects requiring clear planning and clean execution. From ground-up builds in Burnaby Heights to major renovations near Brentwood, our Red Seal certified team delivers disciplined project management.",
    customHomes:
      "Burnaby offers diverse building opportunities from view lots near Burnaby Mountain to established neighbourhoods like Capitol Hill. We handle infill development, custom builds on larger properties, laneway and coach house construction, and multi-generational home design.",
    renovations:
      "Burnaby's residential mix spans post-war ranchers, 1970s splits, 1990s custom builds, and recent infill construction. Our renovation expertise covers full home renovations, kitchen and bathroom updates, basement developments, and second-storey additions.",
    decks:
      "Burnaby's residential lots often have excellent potential for outdoor living. We build cedar and composite decking, multi-level systems for sloped yards, covered outdoor areas, privacy screens, and outdoor kitchens.",
    permits:
      "City of Burnaby permits require attention to zoning compliance, setbacks, tree management, energy efficiency standards, and development permit triggers. StudioBuild manages all coordination.",
    whyChoose: [
      "Red Seal Certified professionals",
      "35+ years Lower Mainland experience",
      "In-house design to completion",
      "Clear communication with project leadership",
      "Quality execution with consistent results",
    ],
    focus:
      "Typical scope includes structural renovations, phased occupancy projects, and performance-focused deck construction.",
  },
  {
    slug: "coquitlam",
    city: "Coquitlam",
    metaTitle: "Custom Home Builder & Renovations in Coquitlam",
    metaDescription:
      "Coquitlam custom home builder and renovation contractor delivering design-build projects, interior renovations, and custom decks with project control.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Coquitlam",
    heroSubtitle:
      "StudioBuild delivers custom homes, renovations, and design-build projects throughout Coquitlam with disciplined execution and quality craftsmanship.",
    neighbourhoods: [
      "Burke Mountain",
      "Westwood Plateau",
      "Coquitlam Centre",
      "Maillardville",
      "Austin Heights",
      "Ranch Park",
      "Harbour Chines",
      "Eagle Ridge",
      "Chineside",
      "Central Coquitlam",
    ],
    intro:
      "StudioBuild supports Coquitlam clients with design + build services that connect planning, permits, and construction under one accountable team. From new construction on Burke Mountain to major renovations in established neighbourhoods, we deliver quality results.",
    customHomes:
      "Coquitlam's newer developments offer opportunities for custom builds with mountain views and larger lots. We specialize in contemporary mountain-view homes, West Coast modern architecture, multi-level designs for sloped terrain, and high-efficiency building systems.",
    renovations:
      "Coquitlam's established neighbourhoods contain homes from the 1960s through 1990s that benefit from strategic renovation. We deliver full home renovations, kitchen and bathroom updates, basement developments, and exterior updates.",
    decks:
      "Coquitlam's mountain backdrop makes outdoor living spaces valuable. We build multi-level decks for view properties, covered outdoor living rooms, cedar and composite systems, and hot tub and fire pit integration.",
    permits:
      "City of Coquitlam permit requirements include development permit applications, building permits, tree protection, and secondary suite regulations. We handle all coordination.",
    whyChoose: [
      "Experience with Burke Mountain and Westwood Plateau construction",
      "Red Seal Certified trades",
      "In-house design and build coordination",
      "Mountain view home expertise",
      "Clear communication throughout",
    ],
    focus:
      "Popular work includes renovations, custom homes, and integrated project management for complex residential upgrades.",
  },
  {
    slug: "port-moody",
    city: "Port Moody",
    metaTitle: "Custom Home Builder & Renovations in Port Moody",
    metaDescription:
      "Port Moody custom home builder and renovation contractor delivering design-build projects, interior renovations, and custom decks across the Tri-Cities.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Port Moody",
    heroSubtitle:
      "StudioBuild serves Port Moody homeowners with custom builds, renovations, and design-build projects tailored to the Tri-Cities' building environment.",
    neighbourhoods: [
      "Heritage Mountain",
      "Heritage Woods",
      "Glenayre",
      "Ioco",
      "Inlet Centre",
      "College Park",
      "Moody Centre",
      "April Road",
    ],
    intro:
      "Port Moody projects are delivered through StudioBuild's structured process with clean sites and consistent communication. From hillside lots on Heritage Mountain to waterfront-adjacent properties near Inlet Centre, we understand local building conditions.",
    customHomes:
      "Heritage Mountain and Heritage Woods offer some of Port Moody's most desirable custom home opportunities. We specialize in mountain-view contemporary designs, West Coast modern architecture, sloped lot construction, and high-performance building envelopes.",
    renovations:
      "Port Moody's housing stock includes older homes in Glenayre and Moody Centre alongside newer construction on Heritage Mountain. We deliver full home renovations, kitchen and bathroom upgrades, basement developments, and additions.",
    decks:
      "Port Moody's natural setting makes outdoor spaces essential. We build custom decks for mountain-view properties, covered outdoor living areas, multi-level deck systems, and integration with natural landscaping.",
    permits:
      "City of Port Moody requirements include development and building permits, environmental considerations for sensitive areas, tree protection, and secondary suite regulations.",
    whyChoose: [
      "Heritage Mountain construction expertise",
      "Red Seal Certified craftsmen",
      "Tri-Cities building knowledge",
      "In-house design coordination",
      "Quality-focused execution",
    ],
    focus:
      "Frequent scopes include modern renovations, exterior upgrades, and custom deck/outdoor living projects.",
  },
  {
    slug: "surrey",
    city: "Surrey",
    metaTitle: "Custom Home Builder & Renovations in Surrey BC",
    metaDescription:
      "Surrey custom home builder and renovation contractor for design-build delivery, interior renovations, custom decks, and project management support.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Surrey",
    heroSubtitle:
      "StudioBuild delivers custom homes, major renovations, and design-build projects across Surrey—from estate properties in South Surrey to established homes in Fleetwood and Cloverdale.",
    neighbourhoods: [
      "South Surrey",
      "White Rock",
      "Morgan Creek",
      "Grandview Heights",
      "Cloverdale",
      "Clayton",
      "Fleetwood",
      "Fraser Heights",
      "Panorama Ridge",
      "Sullivan",
    ],
    intro:
      "Surrey homeowners and property owners hire StudioBuild for organized, high-standard construction execution. Our Red Seal certified team brings disciplined project management to every build.",
    customHomes:
      "South Surrey's larger lots and proximity to the ocean attract homeowners seeking custom builds with space and views. We deliver estate-style custom homes, contemporary oceanview designs, West Coast architecture, and multi-generational floor plans.",
    renovations:
      "Surrey's diverse housing stock spans decades of construction. We renovate full homes, kitchens, bathrooms, basements with legal suites, and exteriors including siding, roofing, and curb appeal improvements.",
    decks:
      "Surrey's climate allows for year-round outdoor living with proper design. We build large-scale deck systems for estate properties, covered outdoor entertainment areas, multi-level decks, and pool and hot tub integration.",
    permits:
      "City of Surrey permit coordination includes building and development permits, secondary suite regulations, tree protection, and lot coverage calculations.",
    whyChoose: [
      "South Surrey and White Rock experience",
      "Red Seal Certified trades",
      "Estate property expertise",
      "In-house design and build",
      "Disciplined project management",
    ],
    focus:
      "Projects include full-home renovations, custom homes, and permit-led project management mandates.",
  },
  {
    slug: "richmond",
    city: "Richmond",
    metaTitle: "Custom Home Builder & Renovations in Richmond BC",
    metaDescription:
      "Richmond custom home builder and renovation contractor for design-build projects, interior renovations, custom decks, and disciplined site execution.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Richmond",
    heroSubtitle:
      "StudioBuild serves Richmond homeowners with custom builds, renovations, and design-build projects with attention to Richmond's unique building conditions.",
    neighbourhoods: [
      "Steveston",
      "Broadmoor",
      "Terra Nova",
      "Richmond Centre",
      "Seafair",
      "Thompson",
      "Blundell",
      "East Richmond",
      "Hamilton",
      "Burkeville",
    ],
    intro:
      "StudioBuild provides Richmond clients with precision planning and quality-led build execution. We understand Richmond's unique building conditions—from waterfront considerations in Steveston to established neighbourhoods in Broadmoor and Terra Nova.",
    customHomes:
      "Richmond offers opportunities ranging from waterfront custom builds to infill development. We deliver contemporary custom homes, waterfront-adjacent construction, multi-generational designs, and modern farmhouse style with high-efficiency building systems. We manage flood construction level requirements, foundation design for delta conditions, and ALR considerations.",
    renovations:
      "Richmond's housing stock includes everything from 1960s ranchers to recent luxury construction. Our renovation expertise covers full home renovations, kitchen and bathroom updates, second-storey additions, and smart home upgrades.",
    decks:
      "Richmond's mild climate supports outdoor living. We build custom deck construction, covered outdoor dining areas, multi-level systems, pool and hot tub decks, and privacy screening for urban lots.",
    permits:
      "Richmond permit planning includes flood construction level compliance, foundation requirements, ALR considerations for some areas, and City of Richmond specific bylaws.",
    whyChoose: [
      "Richmond building condition expertise",
      "Red Seal Certified professionals",
      "Steveston and waterfront experience",
      "In-house design coordination",
      "Quality-focused execution",
    ],
    focus:
      "Scope includes renovations, custom outdoor living, and design + build delivery for comprehensive projects.",
  },
  {
    slug: "langley",
    city: "Langley",
    metaTitle: "Custom Home Builder & Renovations in Langley BC",
    metaDescription:
      "Langley custom home builder and renovation contractor for design-build projects, interior renovations, custom decks, and reliable project management.",
    heroTitle: "Custom Home Builder & Renovation Contractor in Langley",
    heroSubtitle:
      "StudioBuild delivers custom homes, renovations, and design-build projects in Langley with quality craftsmanship and disciplined project management.",
    neighbourhoods: [
      "Willoughby",
      "Walnut Grove",
      "Fort Langley",
      "Murrayville",
      "Brookswood-Fernridge",
      "Aldergrove",
      "Salmon River",
      "Willowbrook",
      "Langley City Centre",
      "Nicomekl",
      "Simonds",
    ],
    intro:
      "In Langley, StudioBuild delivers custom residential projects with direct accountability and disciplined process management. From new construction in Willoughby to character home renovations in Fort Langley, we provide quality craftsmanship.",
    customHomes:
      "Langley offers excellent opportunities for custom home construction, from suburban lots in Willoughby to larger rural properties. We deliver contemporary custom homes, modern farmhouse designs, West Coast architecture, estate properties with acreage, and multi-generational floor plans. We navigate Township vs. City permit processes, ALR regulations, and septic vs. municipal service considerations.",
    renovations:
      "Langley's mix of suburban and rural properties includes homes from various eras. We deliver full home renovations, kitchen and bathroom updates, basement developments, and barn and shop conversions for acreage properties.",
    decks:
      "Langley properties often have excellent outdoor living potential. We build large deck systems for suburban lots, covered outdoor entertainment areas, multi-level designs, pool and hot tub integration, and acreage property outdoor spaces.",
    permits:
      "Township of Langley and City of Langley have different processes. We manage building permits, development permits, ALR considerations, tree protection, and secondary suite regulations.",
    whyChoose: [
      "Willoughby and Fort Langley experience",
      "Red Seal Certified trades",
      "Acreage and rural property expertise",
      "In-house design and build",
      "Township and City permit knowledge",
    ],
    focus:
      "Typical work includes renovations, custom homes, and large-scale deck and exterior living spaces.",
  },
];
