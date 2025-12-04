import type {
  Certification,
  EducationItem,
  ResumeAction,
  ResumeSummary,
  SkillCategory,
  TimelineItem,
  VolunteerExperience,
} from "../types";

export const resumeSummary: ResumeSummary = {
  title: "Masih Sadri",
  subtitle: "Senior Product Designer",
  description:
    "Data-driven Product Designer with 6+ years of experience improving experiences for 40M+ users. Impact-oriented with hands-on experience in two semi-unicorn tech companies (Divar, IR-MCI), designing for both B2B and B2C products across embedded, centralized, and single-threaded team structures.",
};

export const resumeActions: ResumeAction = {
  label: "Download Resume (PDF)",
  href: "/Masih-Sadri-Resume.pdf",
};

export const professionalExperience: ReadonlyArray<TimelineItem> = [
  {
    company: "BimeBazar | B2B/B2C insurance marketplace & digital distribution platform | Nationwide scale",
    role: "Staff Product Designer",
    jobType: "· Remote, Full-time",
    period: "August 2025 – Present | 5 months",
    description: "",
    highlights: [],
  },
  {
    company: "Persol | B2B/B2C marketplace, early-stage growth",
    role: "Senior Product Designer",
    jobType: "· Hybrid, Full-time",
    period: "October 2024 – August 2025 | 11 months",
    description:
      "Lead designer guiding product vision and delivering high-impact experiments across the funnel.",
    highlights: [
      "Redesigned the sign-up flow through data-driven funnel analysis, eliminating major friction points and achieving an 80% increase in lead generation within 3 months.",
      "Developed a scalable design kit from scratch, standardizing UI patterns and improving design-to-development handoff efficiency across the team.",
    ],
  },
  {
    company: "Divar | Top regional classifieds platform | 50M+ users",
    role: "Senior User Experience Designer",
    jobType: "· Hybrid, Full-time",
    period: "April 2022 – September 2024 | 2 years 6 months",
    description: "Trusted partner across Trust & Safety, Growth, and Core Experience initiatives.",
    highlights: [
      "Designed and launched a Secure Call System with the Trust & Safety team, achieving a 60% reduction in harassment incidents and strengthening user trust.",
      "Improved search experience by introducing the Nearby Cities feature, reducing bounce rate by 25%.",
      "Optimized post-ad submission flow, streamlining form fields and lowering redundant chat conversations by 12%.",
      "Implemented a new ticketing workflow, improving customer-support efficiency and reducing user wait times by 20%.",
    ],
  },
  {
    company: "IR MCI - Setare Aval | Fintech services + USSD + Mobile service | Nationwide scale",
    role: "Product Designer",
    jobType: "· On-site, Full-time",
    period: "June 2019 – March 2022 | 2 years 10 months",
    description:
      "Shaped cross-functional feature development and design systems for nationwide financial products.",
    highlights: [
      "Built Morph, a scalable design system ensuring visual consistency, used by 8,300+ designers.",
      "Gamified the referral-sharing experience, turning 60,000+ subscribers into daily active users and boosting retention.",
      "Increased bill-payment share from 6% to 47% of total payment through in-depth interviews.",
    ],
  },
];

export const volunteerExperience: ReadonlyArray<VolunteerExperience> = [
  {
    organization: "Rahnema College | Professional bootcamps + Internship programs",
    role: "Design Mentor",
    jobType: "· Seasonal",
    period: "June 2022 – Present | 8 semesters",
    description:
      "Mentored over 200 aspiring designers, introduced gamified learning techniques, and bridged academia with industry practices.",
  },
];

export const skillCategories: ReadonlyArray<SkillCategory> = [
  {
    title: "Research & Strategy",
    skills: [
      "Usability Testing & Interview",
      "Market & Competitive Analysis",
      "Roadmapping & OKR Alignment",
      "Insight Gathering: Clarity, GA, HotJar",
    ],
  },
  {
    title: "Design",
    skills: [
      "Design Systems & UI Kits",
      "User Interface Design (UI)",
      "Wireframing & Prototyping",
      "Interaction & Micro-interactions",
    ],
  },
  {
    title: "Technical Tools & Data Analytics",
    skills: [
      "Figma, Framer, Claude, Cursor, NotebookLM",
      "Business Metrics & Funnel Analytics (CRO)",
      "Data Preprocessing & Statistical Analysis",
      "BI Tools and Dashboards",
    ],
  },
];

export const resumeEducation: ReadonlyArray<EducationItem> = [
  {
    institution: "Payame Noor University",
    program: "BSc. in Project Management Engineering",
    period: "September 2015 – August 2018",
    description:
      "Teaching Assistant, appointed by Dr. E. Rajabi, Head of the Science Committee. Member of the Civil Engineering and Project Management scientific society.",
  },
];

export const resumeCertificates: ReadonlyArray<Certification> = [
  {
    name: "Data Analysis BootCamp",
    issuer: "Rahnema College",
    year: "July 2025",
    description:
      "170h • Data Preprocessing, Business Metrics, BI Tools, Introductory Python, Storytelling with Data, Statistical Inference, A/B Testing.",
  },
  {
    name: "IELTS (Academic)",
    issuer: "International Development Program (IDP)",
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
    issuer: "Sharif University of Technology + University of Tehran",
    year: "May 2019",
    description: "98h dual-institution training.",
  },
];


