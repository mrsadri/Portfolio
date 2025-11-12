import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import type {
  ContactHero,
  ContactMethod,
  HelpTopic,
  MentorshipOffer,
  ResponseTime,
} from "../types";

export const contactHero: ContactHero = {
  title: "Let's Work Together",
  subtitle: "Building meaningful connections through design",
  description:
    "I'm always open to discussing new projects, creative ideas, mentorship opportunities, or collaborations. Whether you're looking for design guidance, want to explore a product idea, or simply want to connect, I'd love to hear from you.",
};

export const contactMethods: ReadonlyArray<ContactMethod> = [
  {
    icon: EmailRoundedIcon,
    title: "Email",
    description: "For general inquiries, collaboration opportunities, or just to say hello",
    actionLabel: "sadrimasih@gmail.com",
    href: "mailto:sadrimasih@gmail.com",
  },
  {
    icon: TelegramIcon,
    title: "Telegram",
    description: "Reach out for a quick chat or to share ideas asynchronously",
    actionLabel: "Message on Telegram",
    href: "https://t.me/masihsadri",
  },
  {
    icon: LinkedInIcon,
    title: "LinkedIn",
    description: "Connect with me professionally and see my latest updates",
    actionLabel: "View Profile",
    href: "https://www.linkedin.com/in/msadri/",
  },
  {
    icon: GitHubIcon,
    title: "GitHub",
    description: "Explore my code, experiments, and open-source contributions",
    actionLabel: "Visit GitHub",
    href: "https://github.com/mrsadri",
  },
];

export const mentorshipOffers: ReadonlyArray<MentorshipOffer> = [
  {
    title: "Exclusive Talk (Free)",
    duration: "20 min",
    description: "We can discuss our career paths and work experiences together.",
    note: "To confirm your session, please donate $1 to a charity of your choice.",
    href: "https://zeeg.me/masihs/letstalk",
    ctaLabel: "Choose a time",
  },
  {
    title: "Design Mentorship with Masih",
    duration: "75 min",
    description:
      "Ready to take your design skills to the next level? Weekly mentorship sessions are a proven way to learn a new skill and accelerate your growth in UX/UI design.",
    href: "https://zeeg.me/masihs/mentorship",
    ctaLabel: "Set an appointment",
  },
];

export const helpTopics: ReadonlyArray<HelpTopic> = [
  {
    title: "Design Mentorship",
    description:
      "One-on-one guidance for designers at any stage of their career. Portfolio reviews, skill development, and career advice.",
  },
  {
    title: "Portfolio Reviews",
    description:
      "Get feedback on your case studies, design process, and presentation. Make your portfolio stand out.",
  },
  {
    title: "Project Collaboration",
    description:
      "Interested in working together on a product or design system? Let's discuss opportunities.",
  },
  {
    title: "Speaking & Workshops",
    description:
      "Available for design talks, workshops, or panel discussions about UX design, user safety, and product design.",
  },
];

export const responseTime: ResponseTime = {
  title: "Response Time",
  paragraphs: [
    "I typically respond to emails within 24-48 hours. For mentorship inquiries, please allow a bit more time as I review each request carefully.",
    "If you haven't heard back after 3 days, feel free to send a gentle follow-up.",
  ],
};


