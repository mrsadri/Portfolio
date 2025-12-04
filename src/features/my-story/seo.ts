import type { PageMetadata, StructuredData } from "@shared/seo";
import getSiteUrl from "@shared/utils/site";
import { gallery, storyHero } from "./data/content";

const siteUrl = getSiteUrl();
const heroImage = gallery[0]?.image;

const MyStoryStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Masih Sadri — My Story",
  description: storyHero.description,
  url: `${siteUrl}/my-story`,
  image: heroImage?.src,
  primaryTopic: {
    "@type": "Person",
    name: "Masih Sadri",
    jobTitle: "Product Designer",
    sameAs: [
      "https://www.linkedin.com/in/msadri/",
      "https://www.figma.com/@masih",
      "https://masih.framer.website/",
    ],
  },
} as const;

export const MyStoryPageMetadata: PageMetadata = {
  title: "My Story — Masih Sadri's path as a product designer",
  description:
    "Learn how Masih Sadri blends mentorship, experimentation, and craft to design human experiences—from classroom to product launches.",
  canonicalPath: "/my-story",
  openGraph: {
    type: "profile",
    image: heroImage
      ? {
          url: heroImage.src,
          alt: heroImage.alt,
          width: heroImage.width ?? 1200,
          height: heroImage.height ?? 630,
        }
      : undefined,
  },
  structuredData: MyStoryStructuredData,
};


