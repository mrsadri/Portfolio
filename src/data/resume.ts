type ResumeAction = {
  downloadLabel: string;
  updatedAt: string;
};

type ExperienceLink = {
  label: string;
  href: string;
};

type Experience = {
  title: string;
  company: string;
  date: string;
  location: string;
  achievements: readonly string[];
  links?: readonly ExperienceLink[];
};

type SkillCategory = {
  title: string;
  items: readonly string[];
};

type EducationEntry = {
  degree: string;
  institution: string;
  date: string;
  details?: readonly string[];
};

type CertificateEntry = {
  title: string;
  date: string;
  details: string;
};

export const resumeSummary: string =
  "Data-driven Product Designer with 6+ years of experience improving experiences for 40M+ users. Impact-oriented with hands-on experience in two semi-unicorn tech companies (Divar, IR-MCI), designing for both B2B and B2C products across embedded, centralized, and single-threaded team structures.";

export const resumeActions: ResumeAction = {
  downloadLabel: "Download Resume (PDF)",
  updatedAt: "January 2025",
};

export const professionalExperience = [
  {
    title: "Senior Product Designer",
    company: "Persol | B2B/B2C marketplace, early-stage growth",
    date: "October 2024 – August 2025",
    location: "Hybrid, Full-time | 11 months",
    achievements: [
      "Redesigned the sign-up flow through data-driven funnel analysis, eliminating major friction points and achieving an 80% increase in lead generation within 3 months.",
      "Developed a scalable design kit from scratch, standardizing UI patterns and improving design-to-development handoff efficiency across the team.",
    ],
  },
  {
    title: "Senior User Experience Designer",
    company: "Divar | Top regional classifieds platform | 50M+ users",
    date: "April 2022 – September 2024",
    location: "Hybrid, Full-time | 2 years 6 months",
    achievements: [
      "Designed and launched a Secure Call System with the Trust & Safety team, achieving a 60% reduction in harassment incidents and strengthening user trust.",
      "Improved search experience by introducing the Nearby Cities feature, reducing bounce rate by 25%.",
      "Optimized post-ad submission flow, streamlining form fields and lowering redundant chat conversations by 12%.",
      "Implemented a new ticketing workflow, improving customer-support efficiency and reducing user wait times by 20%.",
    ],
    links: [
      {
        label: "Secure Call Case Study",
        href: "/case-studies/divar-secure-call",
      },
    ],
  },
  {
    title: "Product Designer",
    company:
      "IR MCI - Setare Aval | Fintech services + USSD + Mobile service | Nationwide scale",
    date: "June 2019 – March 2022",
    location: "On-site, Full-time | 2 years 10 months",
    achievements: [
      "Built Morph, a scalable design system ensuring visual consistency, used by 8,300+ designers.",
      "Gamified the referral-sharing experience, turning 60,000+ subscribers into daily active users and boosting retention.",
      "Increased bill-payment share from 6% to 47% of total payment through in-depth interviews.",
    ],
  },
] satisfies ReadonlyArray<Experience>;

export const volunteerExperience = [
  {
    title: "Design Mentor",
    company: "Rahnema College | Professional bootcamps + Internship programs",
    date: "June 2022 – Present",
    location: "Seasonal",
    achievements: [
      "Mentored over 200 aspiring designers, many of whom have successfully launched their professional careers in top tech companies.",
      "Introduced gamified learning techniques to boost engagement and retention, enhancing both student outcomes and instructor collaboration.",
      "Bridged academia and industry, equipping students with real-world design processes, usability testing methods, and Figma-based workflows.",
    ],
  },
] satisfies ReadonlyArray<Experience>;

export const skillCategories = [
  {
    title: "Research & Strategy",
    items: [
      "Usability Testing & Interview",
      "Market & Competitive Analysis",
      "Roadmapping & OKR Alignment",
      "Insight Gathering: Clarity, GA, HotJar",
    ],
  },
  {
    title: "Design",
    items: [
      "Design Systems & UI Kits",
      "User Interface Design (UI)",
      "Wireframing & Prototyping",
      "Interaction & Micro-interactions",
    ],
  },
  {
    title: "Technical Tools & Data Analytics",
    items: [
      "Figma, Framer, Claude, Cursor, NotebookLM",
      "Business Metrics & Funnel Analytics (CRO)",
      "Data Preprocessing & Statistical Analysis",
      "BI Tools and Dashboards",
    ],
  },
] satisfies ReadonlyArray<SkillCategory>;

export const resumeEducation = [
  {
    degree: "BSc. in Project Management Engineering",
    institution: "Payame Noor University",
    date: "September 2015 – August 2018",
    details: [
      "Teaching Assistant, appointed by Dr. E. Rajabi, Head of the Science Committee.",
      "Member of the Civil Engineering and Project Management scientific society.",
    ],
  },
] satisfies ReadonlyArray<EducationEntry>;

export const resumeCertificates = [
  {
    title: "Data Analysis BootCamp",
    date: "July 2025",
    details:
      "170h • Rahnema College — Data Preprocessing, Business Metrics, BI Tools, Introductory Python, Storytelling with Data, Statistical Inference, A/B Testing.",
  },
  {
    title: "IELTS (Academic)",
    date: "May 2022",
    details:
      "Overall Score 7.0 • International Development Program (IDP).",
  },
  {
    title: "Conducting Usability Testing",
    date: "July 2021",
    details: "The Interaction Design Foundation.",
  },
  {
    title: "UI/UX Design BootCamp",
    date: "July 2019",
    details: "150h • Rahnema College.",
  },
  {
    title: "Product Design and Advanced UX Design",
    date: "May 2019",
    details:
      "98h • Sharif University of Technology + University of Tehran.",
  },
] satisfies ReadonlyArray<CertificateEntry>;

