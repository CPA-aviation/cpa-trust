export interface FloodReliefPillar {
  id: string;
  number: string;
  title: string;
  clauseRef: string;
  summary: string;
  highlights: readonly string[];
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

export interface FloodReliefUpdateItem {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export const FLOOD_RELIEF_CAMPAIGN = {
  slug: "/flood-relief",
  eyebrow: "Primary Relief Campaign",
  badge: "Emergency Preparedness & Flood Relief · Clause 4(g)",
  title: "Flood Relief & Emergency Support",
  heroLead:
    "Guided by Clause 4(g) (Disaster Relief), Clause 4(e) (Relief of the Poor & Distressed), and Clause 4(d) (Medical Relief & Public Health) of our registered Trust Deed, Santosh Arora Trust is mobilising structured flood relief — prioritising safe boat evacuation, dry-ground ration distribution, clean drinking water, and dignified community support.",
  video: {
    src: "/videos/flood.mp4",
    poster: "/images/flood-relief/rescue-boats.jpg",
    title: "Flood Relief & Emergency Response — Santosh Arora Trust",
    caption:
      "Flood relief mobilisation: supporting affected families with coordinated rescue, essential rations, and clean drinking water.",
  },
  mission: {
    heading: "Rapid, dignified relief when families need it most.",
    paragraphs: [
      "Monsoon flooding displaces families within hours, cutting off safe drinking water, dry food supplies, and basic medical access. Under our registered Trust Deed, Santosh Arora Trust is committed to responding openly and without distinction of caste, creed, religion, or background.",
      "Every stage of our flood relief approach is organised around safety and dignity: trained rescue teams using boats for evacuation to higher ground, volunteers packing sealed essentials cleanly indoors, and orderly ration and water distribution held exclusively on dry, raised relief centres.",
    ],
  },
  pillars: [
    {
      id: "rescue-operations",
      number: "01",
      title: "Rescue & Boat Evacuation",
      clauseRef: "Clause 4(g) · Disaster Relief",
      summary:
        "Coordinating safe boat evacuation for stranded families, elderly residents, and children — moving people from waterlogged areas to safe, elevated shelter.",
      highlights: [
        "Dedicated rescue boats with life jackets for safe evacuation",
        "Priority assistance for children, women, elderly, and persons with disabilities",
        "Safe transfer to dry, raised ground and temporary community shelters",
      ],
      imageSrc: "/images/flood-relief/rescue-boats.jpg",
      imageAlt:
        "Rescue workers and volunteers in life jackets safely evacuating an Indian family aboard a rescue boat across floodwaters toward dry raised land",
      caption:
        "Boat rescue and evacuation moving families safely toward dry, raised ground.",
    },
    {
      id: "ration-distribution",
      number: "02",
      title: "Dry-Ground Ration & Drinking Water Distribution",
      clauseRef: "Clause 4(e) · Relief of the Poor & Distressed",
      summary:
        "Distributing essential dry ration kits and sealed clean drinking water exclusively at organised relief centres on dry, raised ground — ensuring safety, hygiene, and dignity.",
      highlights: [
        "Distribution conducted on dry, elevated ground and covered relief camps",
        "Essential staples including rice, flour, lentils, oil, and basic supplies",
        "Sealed safe drinking water bottles to prevent waterborne illness",
      ],
      imageSrc: "/images/flood-relief/ration-distribution.jpg",
      imageAlt:
        "Humanitarian volunteers under a clean canopy tent on completely dry, elevated paved ground respectfully handing dry ration kits and sealed drinking water to families in an orderly queue",
      caption:
        "Orderly dry ration and clean drinking water distribution on dry, raised ground.",
    },
    {
      id: "volunteer-packing",
      number: "03",
      title: "Volunteer Kit Packing & Relief Coordination",
      clauseRef: "Clause 4(d) & 4(g) · Health & Relief Logistics",
      summary:
        "Community volunteers assembling standardised food, hygiene, and drinking water kits in clean staging centres so relief reaches families quickly and transparently.",
      highlights: [
        "Hygienic indoor assembly of family ration and essential care kits",
        "Quality checks on sealed food staples and bottled drinking water",
        "Coordinated dispatch to local relief centres and community volunteers",
      ],
      imageSrc: "/images/flood-relief/kit-packing.jpg",
      imageAlt:
        "Indian community volunteers inside a bright, clean staging hall packing sealed dry food bags, hygiene essentials, and bottled drinking water into neat relief boxes",
      caption:
        "Volunteers packing dry food, drinking water, and essential kits in a clean staging hall.",
    },
  ] satisfies readonly FloodReliefPillar[],
  kitContents: [
    "Sealed dry food staples (rice, wheat flour, lentils, cooking essentials)",
    "Clean, sealed drinking water bottles and hydration essentials",
    "Basic hygiene and sanitation items for displaced families",
    "First-aid and essential medical relief coordination under Clause 4(d)",
  ] as const,
  updates: [
    {
      id: "campaign-readiness",
      tag: "Transparency Policy",
      title: "Verified Reporting Only — No Unverified Figures",
      description:
        "Santosh Arora Trust does not publish estimated or placeholder beneficiary counts, village tallies, or financial totals. Field updates and audited relief summaries will be published here strictly as verified operations are completed.",
    },
    {
      id: "volunteer-coordination",
      tag: "Volunteer & Partner Desk",
      title: "Volunteer & Supply Coordination Open",
      description:
        "Individuals, community groups, and local partners who wish to volunteer for kit packing, dry-ground distribution, or relief logistics can reach the Trust directly through our official contact page, email, or phone.",
    },
    {
      id: "governance-oversight",
      tag: "Trust Deed Oversight",
      title: "Accountable Under Registered Trust Governance",
      description:
        "All relief activities operate strictly under our registered Trust Deed (Reg. No. 2026/22/IV/1415, NGO DARPAN ID DL/2026/1252835) with annual audited accounts under Clauses 10, 11, and 13.",
    },
  ] satisfies readonly FloodReliefUpdateItem[],
  supportNote:
    "No online payment gateway or QR code is active on this website at this time. To support the Flood Relief campaign, coordinate in-kind essential supplies, or volunteer with our team, please connect directly with the Trust through our official enquiry form, email, or phone.",
} as const;
