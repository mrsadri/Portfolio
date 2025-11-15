import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Seo } from "@shared/seo";
import { smoothScrollToElement } from "@utils/smoothScroll";
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
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }

    window.requestAnimationFrame(() => {
      smoothScrollToElement(element, { duration: 900, offset: 16 });
    });
  }, [location.hash]);

  return (
    <>
      <Seo {...contactPageMetadata} />

      <HeroSection hero={contactHero} />
      <HelpTopicsSection topics={helpTopics} />
      <MentorshipSection offers={mentorshipOffers} />
      <ContactMethodsSection methods={contactMethods} />
      <ResponseTimeSection responseTime={responseTime} />
    </>
  );
};

export default ContactPage;


