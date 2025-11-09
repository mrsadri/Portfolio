// File: src/data/caseStudies.ts
// Purpose: Provides structured content for the Divar and Setare Aval case study pages including overviews and section details.
export type CaseStudySection = {
  id: string;
  title: string;
  description?: string;
  points?: string[];
  highlights?: string[];
  quote?: {
    author: string;
    role: string;
    text: string;
  };
  metrics?: {
    label: string;
    value: string;
    description?: string;
  }[];
  image?: {
    src: string;
    alt: string;
  };
};

export const divarOverview = {
  title:
    "Solving Harassment at Scale: How I Protected 2.1M Users on Iran's Largest Marketplace",
  meta: [
    { label: "Role", value: "Senior UX Designer" },
    { label: "Timeline", value: "May – June 2023" },
    { label: "Impact", value: "~60% reduction in harassment reports" },
  ],
  heroImage: new URL(
    "../../../images/divar-secure-call-listing.png",
    import.meta.url,
  ).href,
};

export const divarSections: CaseStudySection[] = [
  {
    id: "platform",
    title: "Divar at a Glance",
    description:
      "Divar is Iran's leading classifieds marketplace serving more than 53 million active users. At this scale, trust and safety are existential to the business.",
    metrics: [
      {
        label: "Active Users",
        value: "53M+",
        description: "Weekly buyers and sellers across the country",
      },
      {
        label: "Daily Ad Views",
        value: "200M+",
        description: "~6 billion views every month",
      },
      {
        label: "Market Position",
        value: "#1",
        description: "Largest classifieds platform in Iran",
      },
    ],
    highlights: [
      "Clothing categories were experiencing a spike in harassment reports.",
      "User confidence was dropping fast—teams feared a category-level shutdown.",
    ],
  },
  {
    id: "crisis",
    title: "The Crisis",
    description:
      "Victims were mainly women posting clothing listings. Harassers scraped phone numbers, resurfaced them in Telegram groups, and kept calling even after ads were removed.",
    points: [
      "User safety risk threatened Divar's brand trust at national scale.",
      "Existing mitigations simply escalated to manual moderation teams.",
      "Business risk: an entire revenue category was becoming unsafe to use.",
    ],
  },
  {
    id: "investigation",
    title: "Finding the Real Problem",
    description:
      "I ran investigative interviews to understand both harassment tactics and user workarounds. Two key answers unlocked the strategy.",
    points: [
      "Harassers mined recently published ads, then shared numbers in private channels.",
      "Frustrated users rotated SIM cards or stopped listing entirely—churn disguised as silence.",
      "Existing masking solutions broke legitimate buyer-seller coordination.",
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    description:
      "We reframed the mandate from 'reduce reports' to 'reduce exposure.' That meant shipping protective defaults, not reactive tooling.",
    points: [
      "Partnered with Trust & Safety, Legal, Data, and Customer Support to evaluate edge cases.",
      "Defined abuse personas and success metrics that balanced protection with liquidity.",
      "Set up real-time dashboards for post-launch monitoring with moderation teams.",
    ],
  },
  {
    id: "solution",
    title: "What We Shipped",
    description:
      "A multi-layered, privacy-first calling experience that scales to 2.1M weekly users.",
    points: [
      "One-time voice relay with ephemeral phone numbers to block data scraping.",
      "Adaptive controls to limit repeat offenders, coupled with moderation escalation.",
      "Progressive disclosure that keeps trusted buyers unblocked while guarding vulnerable sellers.",
    ],
    metrics: [
      {
        label: "Harassment Reports",
        value: "▼ 60%",
        description: "Within 8 weeks of launch",
      },
      {
        label: "Ad Deletions",
        value: "▼ 25%",
        description: "Fewer users leaving the platform due to abuse",
      },
      {
        label: "Support Tickets",
        value: "▼ 18%",
        description: "Freed moderation time for proactive monitoring",
      },
    ],
  },
  {
    id: "team",
    title: "Team & My Role",
    description:
      "As the design lead embedded with Trust & Safety, I stewarded discovery, prototyping, and stakeholder alignment end to end.",
    points: [
      "Facilitated co-design workshops with Legal and Customer Support to align on edge cases.",
      "Co-created risk assessment framework that informed incremental rollout.",
      "Partnered with engineering to stress-test abuse scenarios before launch.",
    ],
    quote: {
      author: "Trust & Safety Lead",
      role: "Divar",
      text: "Masih translated a hard mandate into one of our most trusted flows. The team finally had a repeatable playbook for tackling abuse without blocking legitimate users.",
    },
  },
];

export const setareOverview = {
  title:
    "Turning One-Time Visitors into Lifelong Customers at Setare Aval",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "Feb 2021 – Jan 2022" },
    { label: "Impact", value: "Doubled retained revenue in 6 months" },
  ],
  heroImage: new URL(
    "../../../images/setare-aval-interview-session.avif",
    import.meta.url,
  ).href,
};

export const setareSections: CaseStudySection[] = [
  {
    id: "context",
    title: "Context",
    description:
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
    points: [
      "Activation flow treated every segment identically, ignoring usage intent.",
      "Referral loops existed but were unrewarding—users churned after first benefit.",
      "Teams shipped in silos; no shared experiment cadence or success metrics.",
    ],
  },
  {
    id: "insights",
    title: "What We Learned",
    description:
      "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
    points: [
      "Users wanted tangible milestones—without them, the product felt transactional.",
      "High-intent cohorts responded to educational nudges more than promotions.",
      "Internal teams lacked visibility into experiment outcomes, slowing iteration.",
    ],
  },
  {
    id: "solution",
    title: "Experience Re-Architecture",
    points: [
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
    description:
      "I operated as the end-to-end product designer, bridging product, marketing, customer success, and engineering.",
    points: [
      "Ran weekly co-creation rituals to align stakeholders on experiment priorities.",
      "Established design system foundations adopted by teams beyond growth.",
      "Set up analytics dashboards that paired qualitative notes with funnel KPIs.",
    ],
    quote: {
      author: "Head of Growth",
      role: "Setare Aval",
      text: "Masih helped us shift from one-off campaigns to a product mindset. The lifecycle model and experiment cadence still guide how we build today.",
    },
  },
];

