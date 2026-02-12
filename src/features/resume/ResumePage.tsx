import { Seo } from "@shared/seo";
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
import { resumePageMetadata } from "./seo";

const ResumePage = () => {
  return (
    <>
      <Seo {...resumePageMetadata} />

      <HeaderSection summary={resumeSummary} actions={resumeActions} />
      <ExperienceSection items={professionalExperience} />
      <SkillsSection categories={skillCategories} />
      <CertificatesSection certificates={resumeCertificates} />
      <VolunteerSection items={volunteerExperience} />
      <EducationSection items={resumeEducation} />
    </>
  );
};

export default ResumePage;


