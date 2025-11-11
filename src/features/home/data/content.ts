import heroPortraitAsset from "../../../../images/masih-sadri-profile.webp";
import morphDesignSystemAsset from "../../../../images/morph-design-system.webp";
import rahnemaStudentsAsset from "../../../../images/rahnema-students.webp";
import { createImageResource } from "../../../shared/utils/assets";
import type {
  CaseStudySummary,
  ExperienceSummary,
  HeroContent,
  MetricSummary,
  SocialLink,
} from "../types";

export const hero: HeroContent = {
  greeting: "Hello 👋🏼, I am",
  name: "Masih Sadri",
  title: "an impact-oriented Product Designer",
  subtitle:
    "with 6+ years of experience, enhancing experiences for 40 million active users",
  credentials: [
    "Certified in UX Design by the University of Tehran and Sharif University",
    "Mentored 200+ students as a design instructor over the past 3 years.",
  ],
  ctaPrimary: {
    label: "View case studies",
    to: "/case-studies/divar-secure-call",
  },
  ctaSecondary: {
    label: "View resume",
    to: "/resume",
  },
  availability: {
    label: "Open to senior product designer roles",
    to: "/contact",
  },
  portrait: createImageResource(import.meta.url, heroPortraitAsset, "Masih Sadri - Product Designer", {
    width: 1200,
    height: 1200,
  }),
};

export const metrics: ReadonlyArray<MetricSummary> = [
  {
    value: "60%",
    title: "Reduction in harassment incidents",
    description:
      "Co-led Divar’s secure call system with Trust & Safety to safeguard 2.1M weekly callers.",
  },
  {
    value: "8.3K+",
    title: "Product teams using Morph",
    description:
      "Built an open design system that powers Figma handoffs and accelerates high-quality releases.",
  },
  {
    value: "200+",
    title: "Designers mentored",
    description:
      "Designed project-based programs at Rahnema College to help emerging designers launch careers.",
  },
  {
    value: "80%",
    title: "Lift in qualified leads",
    description:
      "Redesigned Persol’s sign-up funnel end-to-end, removing friction and boosting lead generation in 3 months.",
  },
];

export const caseStudies: ReadonlyArray<CaseStudySummary> = [
  {
    id: "divar",
    number: "01",
    tag: "Improving User Safety",
    title: "The Story of Reducing Harassment by 60%",
    platform: "on Divar",
    platformDetail: "Classified Ads Platform",
    stat: "A feature used by 2.1 million users per week",
    tags: ["real project", "trust & safety", "impact at scale"],
    to: "/case-studies/divar-secure-call",
    recap: {
      headline: "How cross-functional guardrails helped Divar reduce harassment incidents by 60%",
      bullets: [
        "Co-led a task force bridging Trust & Safety, Legal, and Engineering.",
        "Shipped dynamic voice-masking with abuse detection for 2.1M weekly callers.",
        "Stood up playbooks for moderation ops to monitor repeat offenders.",
      ],
    },
  },
  {
    id: "setare-aval",
    number: "02",
    tag: "Boosting User Engagement",
    title: "Turning One-Time Visitors into Lifelong Customers",
    platform: "at Setare Aval Co.",
    platformDetail: "Retention strategy",
    tags: ["real project", "retention strategy", "cross-functional leadership"],
    to: "/case-studies/setare-aval-engagement",
    recap: {
      headline: "How we re-architected Setare Aval's onboarding to double retained revenue",
      bullets: [
        "Mapped a new lifecycle model tied to data-backed experimentation.",
        "Refined activation flows to spotlight value props within first session.",
        "Co-created a learning agenda to measure loyalty program traction.",
      ],
    },
  },
];

export const experiences: ReadonlyArray<ExperienceSummary> = [
  {
    title: "Design Instructor at Rahnema College",
    description: "Training 200+ students through 6 courses since 2022",
    tags: ["education", "mentorship", "curriculum design"],
    image: createImageResource(import.meta.url, rahnemaStudentsAsset, "Students at Rahnema College"),
  },
  {
    title: "Morph Design System",
    description: "Built from scratch, used over 7400 times in the Figma Community",
    tags: ["open source", "design system", "community impact"],
    image: createImageResource(
      import.meta.url,
      morphDesignSystemAsset,
      "Morph Design System - Figma Community",
    ),
    link: {
      label: "View on Figma Community",
      href: "https://www.figma.com/community/file/1069259333467083182",
    },
  },
];

export const socialLinks: ReadonlyArray<SocialLink> = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/msadri/",
  },
  {
    label: "Figma",
    href: "https://www.figma.com/@masih",
  },
  {
    label: "Portfolio",
    href: "https://masih.framer.website/",
  },
];


