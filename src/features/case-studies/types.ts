export type CaseStudySection = {
  id: string;
  title: string;
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
  image?: {
    src: string;
    alt: string;
  };
};

export type CaseStudyOverview = {
  title: string;
  subtitle?: string;
  meta: readonly {
    label: string;
    value: string;
  }[];
  stats?: readonly {
    value: string;
    label: string;
    description?: string;
  }[];
  heroImage: string;
};

export type CaseStudyEntry = {
  id: string;
  title: string;
  excerpt: string;
  focus: string;
  path: string;
};


