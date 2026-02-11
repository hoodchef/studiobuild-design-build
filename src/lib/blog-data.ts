export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  focusKeyword: string;
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
  cta: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-deck-cost-vancouver",
    title: "How Much Does a Custom Deck Cost in Vancouver?",
    description:
      "Custom deck cost guide for Vancouver and the Lower Mainland with real budget ranges, material factors, permit impacts, and planning tips.",
    excerpt:
      "Realistic budget ranges for custom decks in Vancouver, and what actually drives price beyond square footage.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    readTime: "6 min read",
    focusKeyword: "custom deck cost Vancouver",
    intro:
      "Deck budgets in Vancouver vary widely because site conditions, structure, and detailing matter as much as size. A realistic planning range for most custom deck projects in the Lower Mainland starts around CAD 90 to 160 per square foot for straightforward builds, and can run higher for complex layouts, steel framing, glass railings, or integrated lighting and drainage.",
    sections: [
      {
        heading: "What Drives Deck Pricing in Vancouver",
        body: [
          "Material choice has a direct effect on both upfront cost and long-term maintenance. Pressure-treated lumber can reduce initial cost, while cedar and premium composites raise initial investment but often improve durability and appearance.",
          "Structure and engineering requirements are often the largest hidden cost factor. Elevated decks, slope lots, and roof-deck scenarios may require deeper footings, steel, and additional engineering coordination.",
          "Site access and logistics also matter in Lower Mainland neighborhoods. Limited access, staging constraints, and wet-season sequencing can increase labor time and schedule complexity.",
        ],
      },
      {
        heading: "Typical Budget Bands",
        body: [
          "Entry custom deck projects in Vancouver typically begin around CAD 30,000 to 55,000 for smaller footprints with straightforward detailing.",
          "Mid-range projects often land between CAD 55,000 and 110,000 when clients include privacy walls, built-in seating, lighting, and premium finishes.",
          "Larger or architecturally complex deck builds can exceed CAD 110,000 where scope includes multiple levels, glass rail systems, integrated drainage, and custom fabrication.",
        ],
      },
      {
        heading: "How to Budget More Accurately",
        body: [
          "Start with intended use, not just dimensions. Entertaining, hot tub loading, year-round use, and lighting strategy all affect structure and cost.",
          "Confirm municipal requirements early. Permit pathways and inspection timing can alter both timeline and pre-construction cost.",
          "Request line-item scope with clear allowances. That prevents low initial numbers from becoming expensive change orders later.",
        ],
      },
    ],
    takeaways: [
      "Plan for total system cost, not only decking boards.",
      "Engineering and site access can shift pricing quickly.",
      "Detailed scope documentation protects your budget.",
    ],
    cta: "If you want a reliable deck budget for your property, start with a scope call and site-specific feasibility review.",
  },
  {
    slug: "renovation-permit-process-bc",
    title: "Renovation Permit Process in BC: What Homeowners Need to Know",
    description:
      "Step-by-step renovation permit process for BC homeowners, including Vancouver-area timelines, documents, inspections, and common delays.",
    excerpt:
      "A practical permit roadmap for interior renovations and structural work across BC municipalities.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    readTime: "7 min read",
    focusKeyword: "renovation permit process BC",
    intro:
      "Permit requirements in BC vary by municipality, but the core process is consistent: confirm scope, prepare documents, submit complete packages, and align inspections with construction milestones. Most costly delays happen when permit planning starts too late or documentation is incomplete.",
    sections: [
      {
        heading: "When a Permit Is Usually Required",
        body: [
          "Structural changes, plumbing relocations, electrical upgrades, and envelope work typically require permits. Kitchen and bathroom work can still trigger permits if systems are being modified.",
          "Cosmetic updates like paint or non-structural finish replacement often do not require permits, but homeowners should verify before work begins.",
        ],
      },
      {
        heading: "Permit Workflow for Lower Mainland Projects",
        body: [
          "Step 1 is scope definition and code review. Confirm whether your project requires architectural drawings, engineering, or energy compliance documents.",
          "Step 2 is complete submission. Municipal reviewers move faster when drawings, forms, and supporting documentation are coordinated from day one.",
          "Step 3 is review response management. Timelines improve when questions from plan reviewers are answered quickly and clearly.",
          "Step 4 is construction with scheduled inspections. Work should be sequenced around inspection windows to avoid idle time and rework.",
        ],
      },
      {
        heading: "Common Permit Mistakes to Avoid",
        body: [
          "Starting demolition before permit clarity can create compliance risk and timeline disruption.",
          "Assuming one municipality operates like another often causes avoidable resubmissions.",
          "Treating permit approval as separate from budget planning leads to unrealistic schedules.",
        ],
      },
    ],
    takeaways: [
      "Permit planning belongs in pre-construction, not after design is complete.",
      "Complete first submissions reduce timeline loss.",
      "Inspection-aware scheduling keeps renovation flow stable.",
    ],
    cta: "Need a permit-readiness review before your renovation? Book a 15-minute consultation with StudioBuild.",
  },
  {
    slug: "design-build-vs-traditional-contractor",
    title: "Design-Build vs Traditional Contractor: Which Model Works Better?",
    description:
      "Compare design-build and traditional contractor models for Vancouver custom homes and renovations, including cost control and schedule risk.",
    excerpt:
      "A clear comparison of delivery models so homeowners can choose the right structure before project kickoff.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    readTime: "6 min read",
    focusKeyword: "design-build vs traditional contractor",
    intro:
      "The delivery model you choose affects budget reliability, schedule performance, and decision speed. In a traditional setup, design and construction are often managed by separate parties. In a design-build setup, one team handles planning and execution together.",
    sections: [
      {
        heading: "How the Two Models Differ",
        body: [
          "Traditional model: design is completed first, then construction is bid and awarded. This can work well, but handoff gaps may appear when site realities differ from drawing assumptions.",
          "Design-build model: design, budgeting, and constructability are managed as one workflow. That usually improves alignment and reduces coordination lag.",
        ],
      },
      {
        heading: "What Homeowners Feel During the Project",
        body: [
          "Traditional projects can involve more stakeholder coordination, with homeowners relaying information between design and build teams.",
          "Design-build projects typically give homeowners one accountable point of contact, with fewer communication loops.",
        ],
      },
      {
        heading: "Which One Is Better for Vancouver Renovations and Custom Homes",
        body: [
          "If your project is complex, site-constrained, or schedule-sensitive, design-build often reduces risk by resolving decisions earlier.",
          "If your drawings are already complete and fixed, a traditional contractor path may still be appropriate for straightforward execution.",
          "The key is not trend preference. The key is choosing the structure that fits scope complexity, timeline expectations, and your decision bandwidth.",
        ],
      },
    ],
    takeaways: [
      "Model choice affects risk, not just convenience.",
      "Integrated planning generally improves schedule and budget control.",
      "Complex projects benefit from one accountable delivery team.",
    ],
    cta: "StudioBuild can review your scope and recommend the right delivery model before design work advances too far.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
