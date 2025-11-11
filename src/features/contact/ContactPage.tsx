import Seo from "../../shared/components/Seo";
import getSiteUrl from "../../shared/utils/site";
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

const ContactPage = () => {
  const siteUrl = getSiteUrl();

  const structuredData = {
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

  return (
    <>
      <Seo
        title="Contact Masih Sadri — Collaborations, mentorship, and speaking"
        description="Book mentorship sessions, request collaborations, or reach Masih Sadri directly for senior product design work."
        canonicalPath="/contact"
        openGraph={{
          type: "website",
        }}
        structuredData={structuredData}
      />

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


