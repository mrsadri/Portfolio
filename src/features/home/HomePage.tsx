import { Seo } from "../../shared/seo";
import CaseStudiesSection from "./components/CaseStudiesSection";
import CaseStudyRecapDialog from "./components/CaseStudyRecapDialog";
import ContactSection from "./components/ContactSection";
import ExperiencesSection from "./components/ExperiencesSection";
import HeroSection from "./components/HeroSection";
import MetricsSection from "./components/MetricsSection";
import {
  caseStudies,
  experiences,
  hero,
  metrics,
  socialLinks,
} from "./data/content";
import useCaseStudyRecap from "./hooks/useCaseStudyRecap";
import { homePageMetadata } from "./seo";

const HomePage = () => {
  const { activeCaseStudy, closeRecap, openRecap } = useCaseStudyRecap(caseStudies);

  return (
    <>
      <Seo {...homePageMetadata} />

      <HeroSection hero={hero} />
      <MetricsSection metrics={metrics} />
      <CaseStudiesSection caseStudies={caseStudies} onOpenRecap={openRecap} />
      <ExperiencesSection experiences={experiences} />
      <ContactSection socialLinks={socialLinks} />

      <CaseStudyRecapDialog caseStudy={activeCaseStudy} onClose={closeRecap} />
    </>
  );
};

export default HomePage;


