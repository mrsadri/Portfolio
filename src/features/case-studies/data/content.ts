import divarSecureCallListingAsset from "../../../../images/divar-secure-call-listing.png";
import setareAvalInterviewAsset from "../../../../images/setare-aval-interview-session.avif";
import type { CaseStudyEntry, CaseStudyOverview, CaseStudySection } from "../types";

const resolveAsset = (asset: string) => new URL(asset, import.meta.url).href;

export const divarOverview: CaseStudyOverview = {
  title:
    "Solving Harassment at Scale: How I Protected 2.1M Users on Iran's Largest Marketplace",
  subtitle:
    "We reduced harassment incidents by 60% inside Divar’s clothing category by building a privacy-first calling experience that now protects 2.1M weekly users.",
  meta: [
    { label: "Role", value: "Senior UX Designer · Trust & Safety" },
    { label: "Timeline", value: "May – June 2023" },
    { label: "Team", value: "Design, Trust & Safety, Legal, Engineering, Support" },
  ],
  stats: [
    { value: "▼60%", label: "Harassment reports" },
    { value: "2.1M", label: "Weekly callers safeguarded" },
    { value: "▼18%", label: "Safety ticket volume" },
  ],
  heroImage: resolveAsset(divarSecureCallListingAsset),
};

export const divarSections: CaseStudySection[] = [
  {
    id: "context",
    title: "Context",
    summary:
      "Divar is Iran’s largest classifieds marketplace with 53M+ weekly users. Trust and safety incidents can collapse entire revenue categories if left unchecked.",
    metrics: [
      { label: "Marketplace scale", value: "53M+", description: "Weekly buyers & sellers" },
      { label: "Voice dependence", value: "2.1M", description: "Calls placed every week" },
      { label: "Ad consumption", value: "6B+", description: "Monthly ad views" },
    ],
    highlights: [
      "Clothing listings—mostly women-led—were hit hardest by abuse.",
      "Manual moderation couldn’t keep up; liquidity and trust were in free fall.",
    ],
  },
  {
    id: "crisis",
    title: "The Crisis",
    summary:
      "Customer care centres were flooded with harassment reports. Sellers deleted listings or churned entirely, fearing repeat incidents.",
    bullets: [
      "Harassers scraped phone numbers from ads and circulated them in private Telegram groups.",
      "Even after victims deleted listings, the calls continued because numbers were already exposed.",
      "Without intervention, Divar risked losing a category that anchored daily engagement.",
    ],
    quotes: [
      {
        author: "Layla, 32",
        role: "Professional artist selling bespoke clothing",
        text: "It was infuriating. I took down my Divar ad hoping to stop the calls, but they kept coming. Someone told me my number was in a Telegram group.",
      },
    ],
  },
  {
    id: "investigation",
    title: "Finding the Real Problem",
    summary:
      "I interviewed harassed sellers and analysed behavioural data to understand how exposure scaled. The breakthrough came from connecting qualitative stories to quantitative signals.",
    body: [
      "Patterns emerged quickly: harassers saved posted numbers, cross-referenced them on WhatsApp and Instagram, and only then began the abuse. Experienced sellers had already stopped sharing numbers and relied on in-app chat—new sellers were the ones left exposed.",
      "Sara’s mention of a caller referencing her eye color confirmed our hypothesis: social media breadcrumbs made harassment personal and frightening.",
      "Data analysis backed the qualitative work. Users whose phone numbers were linked to public social profiles reported harassment dramatically more often. Those who stuck to in-app chat rarely did.",
    ],
    quotes: [
      {
        author: "Sara, 26",
        role: "Fashion retail worker",
        text: "One caller knew my eye color. They clearly found my Instagram through the phone number on Divar.",
      },
      {
        author: "Zahra, 28",
        role: "Freelance graphic designer",
        text: "I stopped listing my phone number. It felt unprofessional, but it was the only way to avoid harassment.",
      },
    ],
    highlights: [
      "Public phone numbers were the root cause of exposure, not the number of reports.",
      "Experienced sellers had already adapted by using in-app chat; new sellers needed protective defaults.",
    ],
  },
  {
    id: "strategy",
    title: "The Solution Journey",
    summary:
      "We reframed success from “reduce reports” to “reduce exposure.” With Trust & Safety, Legal, Support, and Data, we evaluated every path and stress-tested edge cases before committing.",
    bullets: [
      "Educating users about harasser tactics would erode trust and discourage listings.",
      "Full VoIP was cost-prohibitive, fragile across device types, and inaccessible to 47% of legacy Android users.",
      "Voice relay with intermediary numbers protected sellers without changing purchase behaviour—this became the north star.",
    ],
  },
  {
    id: "testing",
    title: "Testing & Learning from Failure",
    summary:
      "A 3-day pilot in the clothing category resulted in a 56% call failure rate. Instead of reverting, we treated every failure as a design requirement.",
    bullets: [
      "User behaviour: sellers blocked unfamiliar numbers; buyers redialled from call logs; repeat conversations broke mapping windows.",
      "Technical load: call volume spiked beyond forecasts and number pools were exhausted.",
      "Business risk: longer calls inflated telecom costs and anonymised numbers attracted opportunistic scammers.",
    ],
  },
  {
    id: "refinement",
    title: "The Refined Solution",
    summary:
      "We translated every pilot insight into product and platform improvements before scaling nationwide.",
    bullets: [
      "Bidirectional mapping let sellers reconnect without exposing real numbers.",
      "Extended mapping windows from 20 seconds to 15 minutes reduced dropped calls.",
      "Voice prompts (“This is a secure call from Divar…”) set expectations and deterred scammers.",
      "A pool of 100 intermediary numbers assigned per buyer-seller pair prevented reuse and blocking.",
      "Secure call history, chat integration, and ad management logs kept legitimate relationships intact.",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    body: [
      "After rollout, harassment reports dropped dramatically and sellers felt safe enough to keep listings live. Moderation teams recovered hours each week that were previously spent on reactive tickets.",
    ],
    metrics: [
      {
        label: "Harassment reports",
        value: "▼ 60%",
        description: "Within 8 weeks of launch",
      },
      {
        label: "Ad deletions",
        value: "▼ 25%",
        description: "Fewer sellers leaving the platform",
      },
      {
        label: "Support tickets",
        value: "▼ 18%",
        description: "More time for proactive monitoring",
      },
    ],
  },
  {
    id: "learnings",
    title: "Key Learnings",
    bullets: [
      "The obvious problem is rarely the real one—exposure, not reports, was the root.",
      "Users were already designing workarounds; observing them revealed the right defaults.",
      "Failure is signal. The 56% pilot failure generated a backlog of actionable requirements.",
      "Pair qualitative insight with real-time monitoring to keep abuse vectors in check.",
    ],
  },
  {
    id: "reflection",
    title: "Reflection",
    body: [
      "This project reinforced my belief that solving hard problems starts with understanding behaviour. By blending research, data, and rapid iteration, we built a safety layer that still protects millions of people each week. The harassment problem may never disappear entirely, but Divar is significantly safer for the users who need it most.",
    ],
  },
];

export const setareOverview: CaseStudyOverview = {
  title:
    "Turning One-Time Visitors into Lifelong Customers at Setare Aval",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "Feb 2021 – Jan 2022" },
    { label: "Impact", value: "Doubled retained revenue in 6 months" },
  ],
  stats: [
    {
      value: "2×",
      label: "Retained revenue",
      description: "Achieved within the first 6 months of rollout",
    },
    {
      value: "+60K",
      label: "Daily active users",
      description: "Referral cohort converted to high-intent DAUs",
    },
  ],
  heroImage: resolveAsset(setareAvalInterviewAsset),
};

export const setareSections: CaseStudySection[] = [
  {
    id: "context",
    title: "Context",
    summary:
      "Setare Aval is the digital arm of Iran's largest telecom. We powered fintech services, USSD experiences, and mobile value-added services nation-wide. Growth had plateaued—our funnel leaked after the first purchase.",
    metrics: [
      {
        label: "User Base",
        value: "60K+",
        description: "Daily subscribers across nationwide services",
      },
      {
        label: "Retention Goal",
        value: "x2",
        description: "Double 90-day retained revenue",
      },
    ],
  },
  {
    id: "challenge",
    title: "Challenge",
    bullets: [
      "Activation flow treated every segment identically, ignoring usage intent.",
      "Referral loops existed but were unrewarding—users churned after first benefit.",
      "Teams shipped in silos; no shared experiment cadence or success metrics.",
    ],
  },
  {
    id: "insights",
    title: "What We Learned",
    summary:
      "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
    bullets: [
      "Users wanted tangible milestones—without them, the product felt transactional.",
      "High-intent cohorts responded to educational nudges more than promotions.",
      "Internal teams lacked visibility into experiment outcomes, slowing iteration.",
    ],
  },
  {
    id: "solution",
    title: "Experience Re-Architecture",
    bullets: [
      "Introduced lifecycle messaging tailored to intent (explorers, earners, loyalists).",
      "Shipped a gamified referral journey that celebrated progress and unlocked tiered rewards.",
      "Stood up a cross-functional growth guild with a 2-week experiment cadence.",
    ],
    metrics: [
      {
        label: "Retained Revenue",
        value: "2×",
        description: "Within 6 months of staged rollout",
      },
      {
        label: "Daily Active Users",
        value: "+60K",
        description: "Referral program participants became daily actives",
      },
    ],
  },
  {
    id: "role",
    title: "My Role",
    summary:
      "I operated as the end-to-end product designer, bridging product, marketing, customer success, and engineering.",
    bullets: [
      "Ran weekly co-creation rituals to align stakeholders on experiment priorities.",
      "Established design system foundations adopted by teams beyond growth.",
      "Set up analytics dashboards that paired qualitative notes with funnel KPIs.",
    ],
    quotes: [
      {
        author: "Head of Growth",
        role: "Setare Aval",
        text: "Masih helped us shift from one-off campaigns to a product mindset. The lifecycle model and experiment cadence still guide how we build today.",
      },
    ],
  },
];

export const caseStudyEntries: ReadonlyArray<CaseStudyEntry> = [
  {
    id: "divar-secure-call",
    title: "Divar Secure Call",
    excerpt:
      "Reduced harassment by 60% for 2.1M weekly callers through a privacy-first calling layer inside Iran’s largest marketplace.",
    focus: "Trust & Safety",
    path: "/case-studies/divar-secure-call",
  },
  {
    id: "setare-aval-engagement",
    title: "Setare Aval Engagement",
    excerpt:
      "Re-architected lifecycle journeys that doubled retained revenue and converted referral cohorts into 60K+ daily active users.",
    focus: "Retention & Growth",
    path: "/case-studies/setare-aval-engagement",
  },
];


