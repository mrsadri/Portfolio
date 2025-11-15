import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { Stack } from "@mui/material";
import SectionHeader from "@shared/components/SectionHeader";
import ResumeCard from "./ResumeCard";
import ResumeSectionWrapper from "./ResumeSectionWrapper";
import type { VolunteerExperience } from "../types";

type VolunteerSectionProps = {
  items: ReadonlyArray<VolunteerExperience>;
};

const VolunteerSection = ({ items }: VolunteerSectionProps) => (
  <ResumeSectionWrapper backgroundColor="paper">
        <SectionHeader
          variant="compact"
          icon={<VolunteerActivismOutlinedIcon color="secondary" sx={{ fontSize: "1.75rem" }} />}
          title="Volunteer Activity"
        />
        <Stack spacing={3}>
          {items.map((item) => (
        <ResumeCard
          key={`${item.organization}-${item.role}`}
          title={item.role}
          subtitle={item.organization}
          period={item.period}
          description={item.description}
        />
          ))}
        </Stack>
  </ResumeSectionWrapper>
);

export default VolunteerSection;


