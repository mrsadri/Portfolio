import Seo from "../../shared/components/Seo";
import getSiteUrl from "../../shared/utils/site";
import CertificatesSection from "./components/CertificatesSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import VolunteerSection from "./components/VolunteerSection";
import {
  professionalExperience,
  resumeActions,
  resumeCertificates,
  resumeEducation,
  resumeSummary,
  skillCategories,
  volunteerExperience,
} from "./data/content";

const ResumePage = () => {
  const siteUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Masih Sadri — Resume",
    description: resumeSummary.description,
    url: `${siteUrl}/resume`,
    about: {
      "@type": "Person",
      name: resumeSummary.title,
      jobTitle: resumeSummary.subtitle,
      email: "sdarimasih@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "IR",
      },
    },
  } as const;

  return (
    <>
      <Seo
        title="Masih Sadri — Senior Product Designer Resume"
        description="Review Masih Sadri’s senior product designer resume covering trust & safety, growth, design systems, and leadership experience."
        canonicalPath="/resume"
        openGraph={{ type: "article" }}
        structuredData={structuredData}
      />

      <HeaderSection summary={resumeSummary} actions={resumeActions} />
      <ExperienceSection items={professionalExperience} />
      <VolunteerSection items={volunteerExperience} />
      <SkillsSection categories={skillCategories} />
      <EducationSection items={resumeEducation} />
      <CertificatesSection certificates={resumeCertificates} />
    </>
  );
};

export default ResumePage;


