import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import Grid from "@mui/system/Grid";
import SectionHeader from "@shared/components/SectionHeader";
import ResumeCard from "./ResumeCard";
import ResumeSectionWrapper from "./ResumeSectionWrapper";
import type { SkillCategory } from "../types";

type SkillsSectionProps = {
  categories: ReadonlyArray<SkillCategory>;
};

const SkillsSection = ({ categories }: SkillsSectionProps) => (
  <ResumeSectionWrapper>
        <SectionHeader variant="compact" icon={<MilitaryTechOutlinedIcon color="primary" sx={{ fontSize: "1.75rem" }} />} title="Skills" />
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid size={{ xs: 12 }} key={category.title}>
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


