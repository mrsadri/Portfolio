import setareAvalInterviewAsset from "../../../../images/setare-aval-interview-session.avif";
import { createImageResource } from "@shared/utils/assets";
import type { CaseStudyOverview, CaseStudySection } from "../types";

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
  heroImage: createImageResource(
    import.meta.url,
    setareAvalInterviewAsset,
    "Setare Aval customer engagement interview session",
    { width: 1200, height: 630 },
  ),
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

