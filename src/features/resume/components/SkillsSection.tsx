import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import Grid from "@mui/system/Grid";
import ResumeCard from "./ResumeCard";
import ResumeSectionWrapper from "./ResumeSectionWrapper";
import SectionHeader from "./SectionHeader";
import type { SkillCategory } from "../types";

type SkillsSectionProps = {
  categories: ReadonlyArray<SkillCategory>;
};

const SkillsSection = ({ categories }: SkillsSectionProps) => (
  <ResumeSectionWrapper>
        <SectionHeader icon={<MilitaryTechOutlinedIcon color="primary" sx={{ fontSize: "1.75rem" }} />} title="Skills" />
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.title}>
          <ResumeCard
            title={category.title}
            skills={category.skills}
            useCardContent={true}
          />
            </Grid>
          ))}
        </Grid>
  </ResumeSectionWrapper>
);

export default SkillsSection;


