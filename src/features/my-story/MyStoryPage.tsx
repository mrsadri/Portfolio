import { Seo } from "@shared/seo";
import ContactSection from "@features/home/components/ContactSection";
import CountriesSection from "./components/CountriesSection";
import HeroSection from "./components/HeroSection";
import OutsideDesignSection from "./components/OutsideDesignSection";
import PhilosophySection from "./components/PhilosophySection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import ReadingJourneySection from "./components/ReadingJourneySection";
import TeamSection from "./components/TeamSection";
import {
  books,
  certificates,
  education,
  emojiList,
  gallery,
  philosophyText,
  readingJourney,
  storyHero,
  teamMemories,
} from "./data/content";
import { MyStoryPageMetadata } from "./seo";

const MyStoryPage = () => {
  // Filtered items: first education item, first and second certificate items
  const outsideDesignItems = [
    education[0],
    certificates[0],
    certificates[1],
  ].filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <>
      <Seo {...MyStoryPageMetadata} />

      {/* Act I: The Call to Adventure */}
      <HeroSection hero={storyHero} />
      <PhotoGallerySection items={gallery} />

      {/* Act II: The Journey - Foundation → Growth → Transformation → Current State */}
      <PhilosophySection philosophyText={philosophyText} emojiList={emojiList} />
      <TeamSection memories={teamMemories} />
      <ReadingJourneySection journey={readingJourney} books={books} />
      <OutsideDesignSection items={outsideDesignItems} />
      
      {/* Act III: The Return - Future → Call to Action */}
      <CountriesSection />
      <ContactSection />
    </>
  );
};

export default MyStoryPage;


