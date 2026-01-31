import type { ImageResource, LinkResource } from "../../types/content";

export type CaseStudySection = {
  id: string;
  title: string;
  shortTitle?: string; // Shorter title for outline navigation
  eyebrow?: string;
  summary?: string;
  body?: readonly string[];
  bullets?: readonly string[];
  highlights?: readonly string[];
  quotes?: readonly {
    author: string;
    role: string;
    text: string;
  }[];
  metrics?: readonly {
    label: string;
    value: string;
    description?: string;
  }[];
  image?: ImageResource; // Single image (for backward compatibility)
  images?: readonly ImageResource[]; // Multiple images for complex sections
};

export type CaseStudyOverview = {
  title: string;
  subtitle?: string;
  description?: string;
  meta: readonly {
    label: string;
    value: string;
  }[];
  stats?: readonly {
    value: string;
    label: string;
    description?: string;
  }[];
  heroImage: ImageResource;
};

export type CaseStudyEntry = {
  id: string;
  title: string;
  excerpt: string;
  focus: string;
  path: string;
  cta?: LinkResource;
};


