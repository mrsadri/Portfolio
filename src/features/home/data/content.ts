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
  Testimonial,
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

// Profile images
import mahdiAhmadizadehImage from "../../../../images/testimonials/mahdi-ahmadizadeh.jpeg";
import nahidKImage from "../../../../images/testimonials/nahid-k.jpeg";
import shadiZareiImage from "../../../../images/testimonials/shadi-zarei.jpeg";
import sadeqBImage from "../../../../images/testimonials/sadeq-b.jpeg";
import saeedAbolghasemiImage from "../../../../images/testimonials/saeed-abolghasemi.jpg";
import hosseinMahmoudvandImage from "../../../../images/testimonials/hossein-mahmoudvand.jpeg";
import shayanMehranpourImage from "../../../../images/testimonials/shayan-mehranpour.jpeg";

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      "Masih Sadri has been an incredible mentor throughout my learning journey. He consistently shared his vast knowledge and useful resources, always encouraging me to practice and grow.",
    author: {
      name: "Mahdi Ahmadizadeh",
      position: "Design System Manager",
      company: "Snapp! Market",
      relationship: "Mentee",
      image: createImageResource(import.meta.url, mahdiAhmadizadehImage, "Mahdi Ahmadizadeh"),
    },
  },
  {
    quote:
      "Masih is an incredibly talented person, a very mature and seasoned professional, and a great mentor to have. He has a warm and engaging style, and the quality of his design work and illustrations is exceptional.",
    author: {
      name: "Nahid K.",
      position: "Product Manager",
      company: "Service Management | ITSM",
      relationship: "Colleague",
      image: createImageResource(import.meta.url, nahidKImage, "Nahid K."),
    },
  },
  {
    quote:
      "His problem-solving, interaction skills and eye for details are remarkable. I have always been impressed by his severe motivation and deep knowledge in user experience.",
    author: {
      name: "Shadi Zarei",
      position: "Researcher & UX/UI Designer",
      company: "PhD Candidate",
      relationship: "Classmate",
      image: createImageResource(import.meta.url, shadiZareiImage, "Shadi Zarei"),
    },
  },
  {
    quote:
      "He has a curious mind and considers personal development. In addition to what is taught in the classroom, he always refers to more resources to solve problems in the best possible way.",
    author: {
      name: "Sadeq .B",
      position: "Senior iOS Engineer",
      relationship: "Classmate",
      image: createImageResource(import.meta.url, sadeqBImage, "Sadeq .B"),
    },
  },
  {
    quote:
      "Masih is one of my privileged students who is determined to improve his knowledge and skills. His commitment and punctuality in delivering assignments are commendable.",
    author: {
      name: "Ali Azade",
      position: "Software Engineer",
      company: "UserTesting",
      relationship: "Former Teacher",
      // image: createImageResource(import.meta.url, aliAzadeImage, "Ali Azade"),
    },
  },
  {
    quote:
      "It was my fortune to start my professional journey with a sympathetic person who has remarkable skills in empathizing with colleagues. He also knows how to prioritize tasks based on individuals' interests and assigns them to the team members.",
    author: {
      name: "Saeed Abolghasemi",
      position: "Principal Product Designer",
      company: "Systems Thinker",
      relationship: "Direct Report",
      image: createImageResource(import.meta.url, saeedAbolghasemiImage, "Saeed Abolghasemi"),
    },
  },
  {
    quote:
      "When it comes to consistent, top-quality design, It is enough to handover confusions and raw data to Masih. While working together in the product team at Setare aval company, Masih's specialties were instrumental in problem definition, finding proper solutions, and designing flows.",
    author: {
      name: "Hossein Mahmoudvand",
      position: "Product Design Lead",
      company: "SnappPay",
      relationship: "Former Manager",
      image: createImageResource(import.meta.url, hosseinMahmoudvandImage, "Hossein Mahmoudvand"),
    },
  },
  {
    quote:
      "MohammadReza is a very talented and professional UX specialist who made a great addition to our great company. MohammadReza began contributing on day one by porting our existing product.",
    author: {
      name: "Shayan Mehranpour",
      position: "Senior Software Engineer",
      company: "Flix",
      relationship: "Team Member",
      image: createImageResource(import.meta.url, shayanMehranpourImage, "Shayan Mehranpour"),
    },
  },
];


