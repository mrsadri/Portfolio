import { Seo } from "../../shared/seo";
import AsyncPreferenceCard from "./components/AsyncPreferenceCard";
import ContactMethodsSection from "./components/ContactMethodsSection";
import HelpTopicsSection from "./components/HelpTopicsSection";
import HeroSection from "./components/HeroSection";
import MentorshipSection from "./components/MentorshipSection";
import ResponseTimeSection from "./components/ResponseTimeSection";
import {
  contactHero,
  contactMethods,
  helpTopics,
  mentorshipOffers,
  responseTime,
} from "./data/content";
import { contactPageMetadata } from "./seo";

const ContactPage = () => {
  return (
    <>
      <Seo {...contactPageMetadata} />

      <HeroSection hero={contactHero} />
      <ContactMethodsSection methods={contactMethods} />
      <MentorshipSection offers={mentorshipOffers} />
      <HelpTopicsSection topics={helpTopics} />
      <ResponseTimeSection responseTime={responseTime} />
      <AsyncPreferenceCard />
    </>
  );
};

export default ContactPage;


