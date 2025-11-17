import type { ImageResource, LinkResource } from "../../types/content";

export type StoryHero = {
  title: string;
  subtitle: string;
  description: string;
};

export type GalleryItem = {
  image: ImageResource;
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
  cover: ImageResource;
  title: string;
  author: string;
  label: string;
  summary: string;
  takeaways: readonly string[];
  highlight?: string;
};

export type TeamSnapshot = {
  image: ImageResource;
  caption: string;
  title: string;
  description: string;
  quote?: string;
};

export type TeamMemory = TeamSnapshot;

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
  cta?: LinkResource;
};


