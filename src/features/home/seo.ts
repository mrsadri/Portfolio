import type { PageMetadata, StructuredData } from "../../shared/seo";
import getSiteUrl from "../../shared/utils/site";
import { hero, socialLinks } from "./data/content";

const siteUrl = getSiteUrl();

const homeStructuredData: StructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Masih Sadri — Senior Product Designer",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: hero.name,
    jobTitle: "Senior Product Designer",
    description: hero.subtitle,
    url: siteUrl,
    image: hero.portrait.src,
    sameAs: socialLinks.map((link) => link.href),
  },
] as const;

export const homePageMetadata: PageMetadata = {
  title: "Masih Sadri — Senior Product Designer crafting trustworthy experiences",
  description:
    "Portfolio of Masih Sadri, an impact-oriented senior product designer protecting millions of users through trust & safety, growth, and design systems.",
  canonicalPath: "/",
  openGraph: {
    type: "website",
    image: {
      url: `${siteUrl}/images/hero-section-og.png`,
      alt: `${hero.name} — ${hero.title}`,
      width: 1200,
      height: 560,
      type: "image/png",
    },
  },
  structuredData: homeStructuredData,
};


