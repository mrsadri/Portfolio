import type {
  Certification,
  EducationItem,
  ResumeAction,
  ResumeSummary,
  SkillCategory,
  ThematicHighlight,
  TimelineItem,
  VolunteerExperience,
} from "../types";

export const resumeSummary: ResumeSummary = {
  title: "Masih Sadri",
  subtitle: "Product Designer",
  description:
    "Impact-oriented Product Designer with 6+ years of experience scaling products for 40M+ users. Specialized in leveraging Data Analytics and AI tools (Claude, Cursor) to accelerate design-to-development workflows. Proven track record in market-leading platforms, delivering a 1.8x lift in lead generation at Persol and a 60% reduction in safety incidents at Divar. Expert in building open-source design systems with 8,600+ global users.",
};

export const resumeActions: ResumeAction = {
  label: "Download Resume (PDF)",
  href: "/Masih-Sadri-Resume.pdf",
};

export const professionalExperience: ReadonlyArray<TimelineItem> = [
  {
    company: "BimeBazar | B2B/B2C insurance marketplace & digital distribution platform | Nationwide scale",
    role: "Senior Product Designer (B2B)",
    jobType: "· Remote, Full-time",
    period: "Aug 2025 – Present",
    description: "",
    highlights: [
      {
        theme: "Core Product Growth",
        text: "Boosted insurance renewal rates by 34% through the strategic redesign of the Renewal Reminder feature and the main dashboard's Due Date module.",
      },
      {
        theme: "Campaign Impact",
        text: "Designed a gamified Wheel of Fortune feature from scratch, contributing to a 28% increase in sales during the peak campaign period.",
      },
      {
        theme: "AI-Driven Efficiency",
        text: "Leveraged AI (Claude/Cursor) to build and deploy the company's digital Brand Book and documentation on GitHub, reducing a projected multi-month project to just a few days.",
      },
    ] as ThematicHighlight[],
  },
  {
    company: "Persol | B2B/B2C marketplace, early-stage growth",
    role: "Senior Product Designer",
    jobType: "· Hybrid, Full-time",
    period: "Oct 2024 – Aug 2025",
    description: "",
    highlights: [
      {
        theme: "Funnel Optimization",
        text: "Achieved a 1.8x lift in lead generation within 3 months by identifying and eliminating friction points in the sign-up flow through data analysis.",
      },
      {
        theme: "System Design",
        text: "Developed a scalable design kit from scratch, standardizing UI patterns and significantly improving handoff efficiency for the engineering team.",
      },
    ] as ThematicHighlight[],
  },
  {
    company: "Divar | Top regional classifieds platform | 50M+ users",
    role: "Senior User Experience Designer",
    jobType: "· Hybrid, Full-time",
    period: "Apr 2022 – Sep 2024",
    description: "",
    highlights: [
      {
        theme: "Trust & Safety",
        text: "Co-designed the Secure Call System, resulting in a 60% reduction in harassment incidents and a substantial increase in user trust metrics.",
      },
      {
        theme: "Search Experience",
        text: "Reduced bounce rate by 25% by introducing the Nearby Cities search feature.",
      },
      {
        theme: "Chat Squad",
        text: "Streamlined the post-ad submission flow, lowering redundant customer support chat volume by 12%.",
      },
    ] as ThematicHighlight[],
  },
  {
    company: "IR-MCI - Setare Aval | Fintech services + USSD + Mobile service | Nationwide scale",
    role: "Product Designer",
    jobType: "· On-site, Full-time",
    period: "Jun 2019 – Mar 2022",
    description: "",
    highlights: [
      {
        theme: "Market Share",
        text: "Scaled bill-payment share from 6% to 47% of total payments through in-depth user research and interface simplification.",
      },
      {
        theme: "Global Impact",
        text: "Architected Morph Design System, an open-source project adopted by 8,600+ users on Figma Community to date.",
      },
      {
        theme: "Gamification",
        text: "Boosted retention by turning 60,000+ subscribers into daily active users via a gamified referral system.",
      },
    ] as ThematicHighlight[],
  },
];

export const volunteerExperience: ReadonlyArray<VolunteerExperience> = [
  {
    organization: "Rahnema College",
    role: "Design Mentor",
    jobType: "· Seasonal",
    period: "2022 – Present",
    description:
      "Top Course Instructor (Awarded for two terms). Mentored 200+ aspiring designers, using gamified learning techniques to bridge the gap between academia and industry.",
  },
];

export const skillCategories: ReadonlyArray<SkillCategory> = [
  {
    title: "Strategy",
    skills: ["Conversion Rate Optimization (CRO)", "User Research", "A/B Testing", "OKR Alignment"],
  },
  {
    title: "Technical",
    skills: ["AI-Assisted Development (Claude, Cursor)", "Google Apps Script", "Basic Python", "CSS/HTML"],
  },
  {
    title: "Data & Analysis",
    skills: ["Microsoft Clarity (Advanced)", "Google Analytics", "Funnel Analysis", "Hotjar"],
  },
  {
    title: "Design",
    skills: ["Figma", "Framer", "Design Systems", "Prototyping", "Interaction Design"],
  },
];

export const resumeEducation: ReadonlyArray<EducationItem> = [
  {
    institution: "Payame Noor University",
    program: "BSc. in Project Management Engineering",
    period: "2015 – 2018",
    description: undefined,
  },
];

export const resumeCertificates: ReadonlyArray<Certification> = [
  {
    name: "Data Analysis BootCamp",
    issuer: "Rahnema College",
    year: "July 2025",
    description:
      "170h • Data Preprocessing, Business Metrics, BI Tools, Introductory Python, A/B Testing.",
  },
  {
    name: "IELTS (Academic)",
    issuer: "IDP",
    year: "May 2022",
    description: "Overall Score 7.0.",
  },
  {
    name: "Conducting Usability Testing",
    issuer: "Interaction Design Foundation",
    year: "July 2021",
  },
  {
    name: "UI/UX Design BootCamp",
    issuer: "Rahnema College",
    year: "July 2019",
    description: "150h intensive bootcamp.",
  },
  {
    name: "Product Design and Advanced UX Design",
    issuer: "Sharif University + University of Tehran",
    year: "May 2019",
    description: "98h dual-institution training.",
  },
];
