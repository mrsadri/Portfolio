import type { PageMetadata, StructuredData } from "@shared/seo";
import getSiteUrl from "@shared/utils/site";
import { divarOverview } from "./data/divarContent";
import { setareOverview } from "./data/setareAvalContent";
import { setareYekOverview } from "./data/setareYekContent";

const siteUrl = getSiteUrl();

const divarStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: divarOverview.title,
  description:
    divarOverview.subtitle ??
    "Privacy-first calling experience that reduced harassment incidents by 60% for 2.1M Divar users.",
  author: {
    "@type": "Person",
    name: "Masih Sadri",
    url: siteUrl,
  },
  url: `${siteUrl}/case-studies/divar-secure-call`,
  image: divarOverview.heroImage.src,
  keyword: ["Trust & Safety", "Harassment Reduction", "Marketplace"],
} as const;

export const divarCaseStudyMetadata: PageMetadata = {
  title: "Divar Secure Call Case Study — Reducing Harassment by 60%",
  description:
    divarOverview.subtitle ??
    "Privacy-first calling experience that reduced harassment incidents by 60% for 2.1M Divar users.",
  canonicalPath: "/case-studies/divar-secure-call",
  openGraph: {
    type: "article",
    image: {
      url: divarOverview.heroImage.src,
      alt: divarOverview.heroImage.alt,
      width: divarOverview.heroImage.width ?? 1200,
      height: divarOverview.heroImage.height ?? 630,
    },
  },
  structuredData: divarStructuredData,
};

const setareStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: setareOverview.title,
  description:
    "Lifecycle redesign that doubled retained revenue and turned referral cohorts into daily active users.",
  author: {
    "@type": "Person",
    name: "Masih Sadri",
    url: siteUrl,
  },
  url: `${siteUrl}/case-studies/setare-aval-engagement`,
  image: setareOverview.heroImage.src,
  keyword: ["Retention", "Lifecycle", "Growth Design"],
} as const;

export const setareCaseStudyMetadata: PageMetadata = {
  title: "Setare Aval Engagement Case Study — Doubling Retained Revenue",
  description:
    "How we re-architected Setare Aval's lifecycle to double retained revenue and convert referral cohorts into daily active users.",
  canonicalPath: "/case-studies/setare-aval-engagement",
  openGraph: {
    type: "article",
    image: {
      url: setareOverview.heroImage.src,
      alt: setareOverview.heroImage.alt,
      width: setareOverview.heroImage.width ?? 1200,
      height: setareOverview.heroImage.height ?? 630,
    },
  },
  structuredData: setareStructuredData,
};

const setareYekStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: setareYekOverview.title,
  description:
    setareYekOverview.subtitle ??
    "Redesigned bill payment experience that increased adoption from 4% to 47% by solving trust, transparency, and recurring workflow challenges.",
  author: {
    "@type": "Person",
    name: "Masih Sadri",
    url: siteUrl,
  },
  url: `${siteUrl}/case-studies/setare-yek-bill-payment`,
  image: setareYekOverview.heroImage.src,
  keyword: ["Product Design", "Growth", "Fintech", "User Experience", "Setare Aval", "SetareYek"],
} as const;

export const setareYekCaseStudyMetadata: PageMetadata = {
  title: "SetareYek Bill Payment Case Study — From 4% to 47% Adoption at Setare Aval",
  description:
    setareYekOverview.subtitle ??
    "Redesigned SetareYek's bill payment experience at Setare Aval to increase adoption from 4% to 47% by solving trust, transparency, and recurring workflow challenges.",
  canonicalPath: "/case-studies/setare-yek-bill-payment",
  openGraph: {
    type: "article",
    image: {
      url: setareYekOverview.heroImage.src,
      alt: setareYekOverview.heroImage.alt,
      width: setareYekOverview.heroImage.width ?? 1200,
      height: setareYekOverview.heroImage.height ?? 630,
    },
  },
  structuredData: setareYekStructuredData,
};


