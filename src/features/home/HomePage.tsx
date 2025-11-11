import { useMemo, useState } from "react";
import Seo from "../../shared/components/Seo";
import getSiteUrl from "../../shared/utils/site";
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
import type { CaseStudyId } from "./types";

const HomePage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyId | null>(null);

  const siteUrl = getSiteUrl();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Masih Sadri — Senior Product Designer",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: hero.name,
      jobTitle: "Senior Product Designer",
      description: hero.subtitle,
      url: siteUrl,
      image: hero.portrait.src,
      sameAs: socialLinks.map((link) => link.href),
    },
  ] as const;

  const selectedCaseStudyData = useMemo(
    () => caseStudies.find((item) => item.id === selectedCaseStudy) ?? null,
    [selectedCaseStudy],
  );

  return (
    <>
      <Seo
        title="Masih Sadri — Senior Product Designer crafting trustworthy experiences"
        description="Portfolio of Masih Sadri, an impact-oriented senior product designer protecting millions of users through trust & safety, growth, and design systems."
        canonicalPath="/"
        openGraph={{
          type: "website",
          image: {
            url: hero.portrait.src,
            alt: hero.portrait.alt,
          },
        }}
        structuredData={structuredData}
      />

      <HeroSection hero={hero} />
      <MetricsSection metrics={metrics} />
      <CaseStudiesSection caseStudies={caseStudies} onOpenRecap={setSelectedCaseStudy} />
      <ExperiencesSection experiences={experiences} />
      <ContactSection socialLinks={socialLinks} />

      <CaseStudyRecapDialog
        caseStudy={selectedCaseStudyData}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </>
  );
};

export default HomePage;


