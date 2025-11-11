import type { PageMetadata, StructuredData } from "../../shared/seo";
import getSiteUrl from "../../shared/utils/site";
import { resumeSummary } from "./data/content";

const siteUrl = getSiteUrl();

export const resumeStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Masih Sadri — Resume",
  description: resumeSummary.description,
  url: `${siteUrl}/resume`,
  about: {
    "@type": "Person",
    name: resumeSummary.title,
    jobTitle: resumeSummary.subtitle,
    email: "sdarimasih@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
  },
} as const;

export const resumePageMetadata: PageMetadata = {
  title: "Masih Sadri — Senior Product Designer Resume",
  description:
    "Review Masih Sadri’s senior product designer resume covering trust & safety, growth, design systems, and leadership experience.",
  canonicalPath: "/resume",
  openGraph: {
    type: "article",
  },
  structuredData: resumeStructuredData,
};


