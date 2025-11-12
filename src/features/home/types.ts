import type { ImageResource, LinkResource } from "../../types/content";

export type HeroContent = {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    to?: string;
    scrollToId?: string;
  };
  ctaSecondary: {
    label: string;
    to: string;
  };
  portrait: ImageResource;
};

export type MetricSummary = {
  value: string;
  title: string;
  description: string;
};

export type CaseStudyRecap = {
  headline: string;
  bullets: readonly string[];
};

export type CaseStudySummary = {
  id: "divar" | "setare-aval";
  number: string;
  tag: string;
  title: string;
  platform: string;
  platformDetail?: string;
  stat?: string;
  tags: readonly string[];
  to: string;
  recap: CaseStudyRecap;
};

export type CaseStudyId = CaseStudySummary["id"];

export type ExperienceSummary = {
  title: string;
  description: string;
  tags: readonly string[];
  image: ImageResource;
  link?: LinkResource;
};

export type SocialLink = {
  label: string;
  href: string;
};


