export type ResumeAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type ResumeSummary = {
  title: string;
  subtitle: string;
  description: string;
};

export type ThematicHighlight = {
  theme: string;
  text: string;
};

export type TimelineItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: readonly (string | ThematicHighlight)[];
  location?: string;
  jobType?: string;
};

export type SkillCategory = {
  title: string;
  skills: readonly string[];
};

export type EducationItem = {
  institution: string;
  program: string;
  period: string;
  description?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  description?: string;
};

export type VolunteerExperience = {
  organization: string;
  role: string;
  period: string;
  description: string;
  jobType?: string;
};



