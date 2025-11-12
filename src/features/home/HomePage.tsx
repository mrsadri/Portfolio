import { Seo } from "../../shared/seo";
import CaseStudiesSection from "./components/CaseStudiesSection";
import CaseStudyRecapDialog from "./components/CaseStudyRecapDialog";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import MetricsSection from "./components/MetricsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyHireMeSection from "./components/WhyHireMeSection";
import {
  caseStudies,
  hero,
  metrics,
  testimonials,
  whyHireMe,
} from "./data/content";
import useCaseStudyRecap from "./hooks/useCaseStudyRecap";
import { homePageMetadata } from "./seo";

const HomePage = () => {
  const { activeCaseStudy, closeRecap, openRecap } = useCaseStudyRecap(caseStudies);

  return (
    <>
      <Seo {...homePageMetadata} />

      <HeroSection hero={hero} />
      <WhyHireMeSection content={whyHireMe} />
      <MetricsSection metrics={metrics} />
      <CaseStudiesSection caseStudies={caseStudies} onOpenRecap={openRecap} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />

      <CaseStudyRecapDialog caseStudy={activeCaseStudy} onClose={closeRecap} />
    </>
  );
};

export default HomePage;


