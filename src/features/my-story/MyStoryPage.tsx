import Seo from "../../shared/components/Seo";
import getSiteUrl from "../../shared/utils/site";
import CertificatesSection from "./components/CertificatesSection";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import ReadingJourneySection from "./components/ReadingJourneySection";
import ReferencesSection from "./components/ReferencesSection";
import TeamSection from "./components/TeamSection";
import {
  books,
  certificates,
  education,
  emojiList,
  gallery,
  philosophyText,
  readingJourney,
  references,
  storyHero,
  team,
} from "./data/content";

const MyStoryPage = () => {
  const siteUrl = getSiteUrl();
  const heroImage = gallery[0]?.image;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Masih Sadri — My Story",
    description: storyHero.description,
    url: `${siteUrl}/my-story`,
    image: heroImage,
    primaryTopic: {
      "@type": "Person",
      name: "Masih Sadri",
      jobTitle: "Senior Product Designer",
      sameAs: [
        "https://www.linkedin.com/in/msadri/",
        "https://www.figma.com/@masih",
        "https://masih.framer.website/",
      ],
    },
  } as const;

  return (
    <>
      <Seo
        title="My Story — Masih Sadri’s path as a product designer"
        description="Learn how Masih Sadri blends mentorship, experimentation, and craft to design human experiences—from classroom to product launches."
        canonicalPath="/my-story"
        openGraph={{
          type: "profile",
          image: heroImage
            ? { url: heroImage, alt: "Masih Sadri documenting personal journey" }
            : undefined,
        }}
        structuredData={structuredData}
      />

      <HeroSection hero={storyHero} />
      <PhotoGallerySection items={gallery} />
      <PhilosophySection philosophyText={philosophyText} emojiList={emojiList} />
      <ReadingJourneySection journey={readingJourney} books={books} />
      <TeamSection team={team} />
      <EducationSection items={education} />
      <CertificatesSection certificates={certificates} />
      <ReferencesSection references={references} />
    </>
  );
};

export default MyStoryPage;


