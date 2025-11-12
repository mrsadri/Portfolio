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
  WhyHireMeContent,
} from "../types";

export const hero: HeroContent = {
  greeting: "Hello 👋🏼, I am",
  name: "Masih Sadri",
  title: "an impact-oriented Senior Product Designer",
  subtitle:
    "Former iOS developer turned designer, building data-driven experiences that drive user retention and business growth for 40+ million users across B2B and B2C products",
  ctaPrimary: {
    label: "View case study",
    scrollToId: "case-studies",
  },
  ctaSecondary: {
    label: "To be in touch",
    scrollToId: "contact",
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
    label: "GitHub",
    href: "https://github.com/mrsadri",
  },
];

export const whyHireMe: WhyHireMeContent = {
  whatIBring: {
    title: "What I Bring",
    differentiators: [
      {
        title: "AI-Familiar & Technical",
        description:
          "Built this portfolio from scratch with modern tools. Former iOS developer with deep understanding of technical constraints and implementation details.",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Completed a 170-hour data analyst course. I use data to validate design decisions and measure impact, not just intuition.",
      },
      {
        title: "User Retention Expertise at Scale",
        description:
          "Proven track record of improving user retention and engagement for 40+ million unique users. Co-led cross-functional initiatives that drive long-term user value and business growth.",
      },
      {
        title: "Teaching & Mentorship Leadership",
        description:
          "3rd year teaching at college, mentored 200+ students. This translates to strong communication skills, curriculum design, and the ability to elevate team capabilities.",
      },
      {
        title: "Cross-Product Experience",
        description:
          "Experience across both B2C and B2B products, with a background in project management. I understand business strategy and can navigate complex stakeholder landscapes.",
      },
      {
        title: "Adaptable to Any Team Structure",
        description:
          "Experienced in generalized teams, embedded product teams, and solo design roles across B2B and B2C products. I adapt my workflow to fit any organizational model.",
      },
    ],
  },
  whatImLookingFor: {
    title: "What I'm Looking For",
    description:
      "I'm seeking senior product design roles where I can leverage my data-driven approach and technical background to drive measurable business impact. I thrive in cross-functional environments where design, engineering, and business strategy intersect, and I'm passionate about creating solutions that deliver tangible results.",
    action: {
      label: "View My Resume",
      href: "/resume",
    },
  },
  quickStats: [
    {
      value: "40M+",
      label: "Unique Users",
    },
    {
      value: "200+",
      label: "Students Mentored",
    },
    {
      value: "3 Years",
      label: "Teaching Experience",
    },
    {
      value: "B2C & B2B",
      label: "Product Experience",
    },
  ],
};


