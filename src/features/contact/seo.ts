import type { PageMetadata, StructuredData } from "@shared/seo";
import getSiteUrl from "@shared/utils/site";
import { contactHero, contactMethods, mentorshipOffers } from "./data/content";

const siteUrl = getSiteUrl();

const contactStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Masih Sadri",
  description: contactHero.description,
  url: `${siteUrl}/contact`,
  mainEntity: contactMethods.map((method) => ({
    "@type": "ContactPoint",
    contactType: method.title,
    url: method.href,
    description: method.description,
  })),
  offers: mentorshipOffers.map((offer) => ({
    "@type": "Offer",
    name: offer.title,
    description: offer.description,
    url: offer.href,
    duration: offer.duration,
  })),
} as const;

export const contactPageMetadata: PageMetadata = {
  title: "Contact Masih Sadri — Collaborations, mentorship, and speaking",
  description:
    "Book mentorship sessions, request collaborations, or reach Masih Sadri directly for senior product design work.",
  canonicalPath: "/contact",
  openGraph: {
    type: "website",
  },
  structuredData: contactStructuredData,
};


