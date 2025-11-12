export type ContactHero = {
  title: string;
  subtitle: string;
  description: string;
};

export type ContactMethod = {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  href: string;
};

export type MentorshipOffer = {
  title: string;
  duration: string;
  description: string;
  href: string;
  featured?: boolean;
  note?: string;
  ctaLabel?: string;
};

export type HelpTopic = {
  title: string;
  description: string;
};

export type ResponseTime = {
  title: string;
  paragraphs: readonly string[];
};


