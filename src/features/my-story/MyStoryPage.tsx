import { Seo } from "../../shared/seo";
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
import { MyStoryPageMetadata } from "./seo";

const MyStoryPage = () => {
  return (
    <>
      <Seo {...MyStoryPageMetadata} />

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


