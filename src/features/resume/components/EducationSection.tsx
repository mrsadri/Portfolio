import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { Stack } from "@mui/material";
import SectionHeader from "@shared/components/SectionHeader";
import ResumeCard from "./ResumeCard";
import ResumeSectionWrapper from "./ResumeSectionWrapper";
import type { EducationItem } from "../types";

type EducationSectionProps = {
  items: ReadonlyArray<EducationItem>;
};

const EducationSection = ({ items }: EducationSectionProps) => (
  <ResumeSectionWrapper backgroundColor="paper">
        <SectionHeader variant="compact" icon={<HistoryEduOutlinedIcon color="secondary" sx={{ fontSize: "1.75rem" }} />} title="Education" />
        <Stack spacing={3}>
          {items.map((item) => (
        <ResumeCard
          key={`${item.institution}-${item.program}`}
          title={item.program}
          subtitle={item.institution}
          period={item.period}
          description={item.description}
        />
          ))}
        </Stack>
  </ResumeSectionWrapper>
);

export default EducationSection;


