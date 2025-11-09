type StoryHero = {
  title: string;
  subtitle: string;
  description: string;
};

type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
  subcaption?: string;
};

type ReadingJourney = {
  title: string;
  subtitle: string;
  currentlyReading: {
    label: string;
    title: string;
  };
};

type Book = {
  cover: string;
  title: string;
  author: string;
  label: string;
  summary: string;
  takeaways: readonly string[];
  highlight?: string;
};

type TeamSnapshot = {
  image: string;
  alt: string;
  caption: string;
  title: string;
  description: string;
};

type EducationItem = {
  badge: string;
  date: string;
  title: string;
  institution: string;
  details?: readonly string[];
};

type CertificateItem = {
  badge: string;
  date: string;
  title: string;
  institution?: string;
  hours?: string;
  topics?: string;
  score?: string;
};

type ReferenceItem = {
  name: string;
  role: string;
  date: string;
  text: string;
  linkedin: string;
};

export const storyHero: StoryHero = {
  title: "I am Masih",
  subtitle: "A Creator of Meaningful Experiences",
  description:
    "Outside of design, I enjoy exploring challenges and learning through experiences like mountaineering, wood carving, and teaching. These pursuits have taught me patience, resilience, and empathy, which I bring into my work to craft meaningful and thoughtful designs.",
};

export const gallery = [
  {
    image: new URL("../../images/masih-child-photo.png", import.meta.url).href,
    alt: "Masih as a child in his dad's jacket",
    caption: "Me as a Child in My Dad's Jacket",
  },
  {
    image: new URL("../../images/masih-mountaineer.png", import.meta.url).href,
    alt: "Masih as a mountaineer",
    caption: "Me as a Mountaineer",
  },
  {
    image: new URL("../../images/masih-coffee-artist.png", import.meta.url).href,
    alt: "Masih's latte art",
    caption: "My art on a Latte",
    subcaption: "Latte Art by me :)",
  },
  {
    image: new URL("../../images/masih-ux-designer.png", import.meta.url).href,
    alt: "Masih as a UX Designer",
    caption: "Me as a UX Designer",
  },
  {
    image: new URL("../../images/masih-wood-carver.png", import.meta.url).href,
    alt: "Masih as a wood carver",
    caption: "Me as a Wood Carver",
  },
] satisfies ReadonlyArray<GalleryItem>;

export const philosophyText =
  "I design experiences that not only solve problems but create value for both businesses and users. I enjoy digging deep into challenges, analyzing them thoroughly, and coming up with solutions that truly make a difference.";

export const emojiList: readonly string[] = [
  "☕️",
  "🪃",
  "🧗🏽",
  "🖌️",
  "📲",
  "👨🏽‍🎨",
  "💡",
  "🎨",
  "📚",
];

export const readingJourney: ReadingJourney = {
  title: "Design Books Guiding My Craft",
  subtitle:
    "Inspired by the living bookshelves shared by peers like Kyle Johnston, Sawyer Hollenshead, Jason Zook, and Amy McLay Paterson, I keep a curated record of the ideas that shape my practice.",
  currentlyReading: {
    label: "Currently reading",
    title: "AI and UX: Why Artificial Intelligence Needs User Experience",
  },
};

export const books = [
  {
    cover: new URL(
      "../../images/books/design-of-everyday-things.svg",
      import.meta.url,
    ).href,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    label: "Read in 2018 · Revisited 2024",
    summary:
      "Norman’s framework for affordances and feedback helped me build resilience against bias when testing safety-critical flows, especially when we redesigned voice masking for Divar.",
    takeaways: [
      "Reinforced my habit of prototyping error states first.",
      "Influenced my heuristics checklist for accessibility reviews.",
      "Taught me to narrate “user goals” in every design critique.",
    ],
  },
  {
    cover: new URL("../../images/books/sprint.svg", import.meta.url).href,
    title: "Sprint",
    author: "Jake Knapp & the GV Design Team",
    label: "Read in 2020",
    summary:
      "Borrowing the sprint rhythm helped me coach product squads toward decision clarity. We prototyped and launched a loyalty program at Setare Aval using a 4-day variation of this playbook.",
    takeaways: [
      "Adopted lightning talks to align stakeholders fast.",
      "Made “How might we” synthesis a staple in my workshops.",
      "Improved remote facilitation using structured voting rituals.",
    ],
  },
  {
    cover: new URL(
      "../../images/books/creative-confidence.svg",
      import.meta.url,
    ).href,
    title: "Creative Confidence",
    author: "Tom & David Kelley",
    label: "Read in 2021",
    summary:
      "This book reframed how I mentor new designers—shifting critiques from solution judgment to capability building and psychological safety.",
    takeaways: [
      "Introduced “confidence mapping” in my mentorship sessions.",
      "Drove me to design project-based curricula at Rahnema College.",
      "Encouraged storytelling rituals to celebrate incremental wins.",
    ],
  },
  {
    cover: new URL("../../images/masih-ux-designer.png", import.meta.url).href,
    title: "AI and UX: Why Artificial Intelligence Needs User Experience",
    author: "Pamela Pavliscak",
    label: "In progress · Q4 2025",
    summary:
      "I’m exploring how human-centered methods evolve when models make probabilistic decisions—informing the guardrails I craft for AI-augmented solutions.",
    takeaways: [
      "Building an ethical checklist for AI experiments.",
      "Pairing qualitative interviews with model metrics.",
      "Documenting prompt design patterns for my team.",
    ],
    highlight: "Now Reading",
  },
] satisfies ReadonlyArray<Book>;

export const team: TeamSnapshot = {
  image: new URL("../../images/divar-team.jpg", import.meta.url).href,
  alt: "Masih Sadri with the Divar product team",
  caption:
    "Divar Product Experience Team — collaborating across research, product design, and engineering.",
  title: "My Divar Product Team",
  description:
    "These are the talented colleagues I'm proud to collaborate with at Divar. Together, our 32-person product organization blends design, research, product, and engineering to ship experiences that protect and empower millions of users.",
};

export const education = [
  {
    badge: "Degree",
    date: "2015 – 2018",
    title: "BSc in Project Management Engineering",
    institution: "Payame Noor University",
    details: [
      "Teaching Assistant, appointed by Dr. E. Rajabi, Head of the Science Committee",
      "Active Member of the Civil Engineering and Project Management Scientific Society",
    ],
  },
  {
    badge: "Associate",
    date: "2014",
    title: "Associate in Mechanical Engineering",
    institution: "Bu-Ali Sina University",
  },
  {
    badge: "Diploma",
    date: "2009",
    title: "Diploma in Mathematics and Physics",
    institution:
      "National Organization for Development of Exceptional Talents (Sampad)",
  },
] satisfies ReadonlyArray<EducationItem>;

export const certificates = [
  {
    badge: "Certificate",
    date: "July 2025",
    title: "Data Analysis BootCamp",
    institution: "Rahnema College",
    hours: "170h",
    topics:
      "Data Preprocessing, Business Metrics, BI Tools, Introductory Python, Storytelling with Data, Statistical Inference, A/B Testing",
  },
  {
    badge: "Language",
    date: "May 2022",
    title: "IELTS (Academic)",
    institution: "International Development Program (IDP)",
    score: "Overall Score: 7.0",
  },
  {
    badge: "Certificate",
    date: "July 2021",
    title: "Conducting Usability Testing",
    institution: "The Interaction Design Foundation",
  },
  {
    badge: "Certificate",
    date: "September 2021",
    title: "Complete Figma Megacourse",
    institution: "Online Course - Udemy",
    hours: "42h",
  },
  {
    badge: "BootCamp",
    date: "July 2019",
    title: "UI/UX Design BootCamp",
    institution: "Rahnema College",
    hours: "150h",
  },
  {
    badge: "Certificate",
    date: "May 2019",
    title: "Product and Advanced UX Design",
    institution: "Sharif University of Technology & University of Tehran",
    hours: "98h",
  },
  {
    badge: "Certificate",
    date: "2014",
    title: "Catia Certificate – Professional 3D Modeling",
    institution: "Iran Catia Community",
    score: "Grade: 100 out of 100",
  },
] satisfies ReadonlyArray<CertificateItem>;

export const references = [
  {
    name: "Saeed Abolghasemi",
    role: "Product Design Lead at SnappFood",
    date: "July 30, 2021 • Reported directly to Masih",
    text: "I had the privilege of working closely with Masih for a year. Starting my professional journey with him was truly fortunate; he's not only empathetic towards colleagues but also adept at prioritizing tasks based on individual strengths and assigning them accordingly. Masih places significant emphasis on personal growth, offering practical resources tailored to team members' competencies. Working alongside him was both enjoyable and enriching.",
    linkedin: "https://www.linkedin.com/in/saeed-abolghasemi/",
  },
  {
    name: "Ali Azadeh",
    role: "Software Engineer at UserTesting",
    date: "July 31, 2021 • Masih's teacher",
    text: "Masih is one of my privileged students who is determined to improve his knowledge and skills. His commitment and punctuality in delivering assignments are commendable. In my opinion, his interest in learning has been one of the key reasons for his success.",
    linkedin: "https://www.linkedin.com/in/ali-azadeh/",
  },
  {
    name: "Saba Mirzaie",
    role: "Product Designer at SnappBox",
    date: "July 28, 2021 • Reported directly to Masih",
    text: "Masih is a caring mentor who thoughtfully pairs feedback with actionable guidance. His efforts to build our collaborative rituals helped me step into more strategic conversations with confidence.",
    linkedin: "https://www.linkedin.com/in/sabamirzaie/",
  },
] satisfies ReadonlyArray<ReferenceItem>;

