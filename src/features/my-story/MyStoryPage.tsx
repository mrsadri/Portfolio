import { Seo } from "@shared/seo";
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
  team,
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

      <HeroSection hero={storyHero} />
      <PhotoGallerySection items={gallery} />
      <PhilosophySection philosophyText={philosophyText} emojiList={emojiList} />
      <ReadingJourneySection journey={readingJourney} books={books} />
      <TeamSection team={team} />
      <OutsideDesignSection items={outsideDesignItems} />
    </>
  );
};

export default MyStoryPage;


