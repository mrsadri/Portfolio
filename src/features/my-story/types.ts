export type StoryHero = {
  title: string;
  subtitle: string;
  description: string;
};

export type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
  subcaption?: string;
};

export type ReadingJourney = {
  title: string;
  subtitle: string;
  currentlyReading: {
    label: string;
    title: string;
  };
};

export type Book = {
  cover: string;
  title: string;
  author: string;
  label: string;
  summary: string;
  takeaways: readonly string[];
  highlight?: string;
};

export type TeamSnapshot = {
  image: string;
  alt: string;
  caption: string;
  title: string;
  description: string;
};

export type EducationItem = {
  badge: string;
  date: string;
  title: string;
  institution: string;
  details?: readonly string[];
};

export type CertificateItem = {
  badge: string;
  date: string;
  title: string;
  institution?: string;
  hours?: string;
  topics?: string;
  score?: string;
};

export type ReferenceItem = {
  name: string;
  role: string;
  date: string;
  text: string;
  linkedin: string;
};


