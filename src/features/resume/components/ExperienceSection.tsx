import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Stack } from "@mui/material";
import SectionHeader from "@shared/components/SectionHeader";
import ResumeCard from "./ResumeCard";
import ResumeSectionWrapper from "./ResumeSectionWrapper";
import type { TimelineItem } from "../types";

type ExperienceSectionProps = {
  title?: string;
  icon?: React.ReactNode;
  items: ReadonlyArray<TimelineItem>;
};

const ExperienceSection = ({
  title = "Professional Experience",
  icon = <WorkHistoryOutlinedIcon color="primary" sx={{ fontSize: "1.75rem" }} />,
  items,
}: ExperienceSectionProps) => (
  <ResumeSectionWrapper>
    <SectionHeader variant="compact" icon={icon} title={title} />
        <Stack spacing={3}>
          {items.map((item) => (
        <ResumeCard
          key={`${item.company}-${item.role}`}
          title={item.role}
          subtitle={item.company}
          period={item.period}
          jobType={item.jobType}
          description={item.description}
          highlights={item.highlights}
        />
                  ))}
                </Stack>
  </ResumeSectionWrapper>
);

export default ExperienceSection;


