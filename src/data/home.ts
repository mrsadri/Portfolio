import heroPortraitImg from "../../images/masih-sadri-profile.webp";
import morphDesignSystemImg from "../../images/morph-design-system.webp";
import rahnemaStudentsImg from "../../images/rahnema-students.webp";

type HeroContent = {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  credentials: readonly string[];
  ctaPrimary: {
    label: string;
    to: string;
  };
  ctaSecondary: {
    label: string;
    to: string;
  };
  availability: {
    label: string;
    to: string;
  };
  portrait: {
    src: string;
    alt: string;
  };
};

type MetricSummary = {
  value: string;
  title: string;
  description: string;
};

type CaseStudyRecap = {
  headline: string;
  bullets: readonly string[];
};

type CaseStudySummary = {
  id: "divar" | "setare-aval";
  number: string;
  tag: string;
  title: string;
  platform: string;
  platformDetail?: string;
  stat?: string;
  tags: readonly string[];
  to: string;
  recap: CaseStudyRecap;
};

type ExperienceSummary = {
  title: string;
  description: string;
  tags: readonly string[];
  image: {
    src: string;
    alt: string;
  };
  link?: {
    label: string;
    href: string;
  };
};

type SocialLink = {
  label: string;
  href: string;
};

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
    label: "Open to senior product designer roles →",
    to: "/contact",
  },
  portrait: {
    src: heroPortraitImg,
    alt: "Masih Sadri - Product Designer",
  },
};

export const metrics = [
  {
    value: "60% ↓",
    title: "Harassment incidents",
    description:
      "Designed Divar’s secure call system with Trust & Safety teams, protecting 2.1M weekly users.",
  },
  {
    value: "8.3K+",
    title: "Design system adoptions",
    description:
      "Built Morph, an open design system powering teams on Figma and shaping product handoffs.",
  },
  {
    value: "200+",
    title: "Designers mentored",
    description:
      "Lead project-based programs at Rahnema College, helping emerging designers launch careers.",
  },
  {
    value: "2-week",
    title: "Experiment cadence",
    description:
      "Partner with data & product to ship AI-augmented flows and iterate with measurable outcomes.",
  },
] satisfies ReadonlyArray<MetricSummary>;

export const caseStudies = [
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
      headline:
        "How cross-functional guardrails helped Divar reduce harassment incidents by 60%",
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
      headline:
        "How we re-architected Setare Aval's onboarding to double retained revenue",
      bullets: [
        "Mapped a new lifecycle model tied to data-backed experimentation.",
        "Refined activation flows to spotlight value props within first session.",
        "Co-created a learning agenda to measure loyalty program traction.",
      ],
    },
  },
] satisfies ReadonlyArray<CaseStudySummary>;

export const experiences = [
  {
    title: "Design Instructor at Rahnema College",
    description: "Training 200+ students through 6 courses since 2022",
    tags: ["education", "mentorship", "curriculum design"],
    image: {
      src: rahnemaStudentsImg,
      alt: "Students at Rahnema College",
    },
  },
  {
    title: "Morph Design System",
    description:
      "Built from scratch, used over 7400 times in the Figma Community",
    tags: ["open source", "design system", "community impact"],
    image: {
      src: morphDesignSystemImg,
      alt: "Morph Design System - Figma Community",
    },
    link: {
      label: "View on Figma Community →",
      href: "https://www.figma.com/community/file/1069259333467083182",
    },
  },
] satisfies ReadonlyArray<ExperienceSummary>;

export const socialLinks = [
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
] satisfies ReadonlyArray<SocialLink>;

