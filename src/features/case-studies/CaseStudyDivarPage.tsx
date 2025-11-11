import Grid from "@mui/system/Grid";
import { Box, Container, Stack } from "@mui/material";
import { Seo } from "../../shared/seo";
import CaseStudySectionCard from "./components/SectionCard";
import CaseStudyOutlineNav from "./components/CaseStudyOutlineNav";
import CaseStudyOverviewSection from "./components/CaseStudyOverviewSection";
import CaseStudyRelatedSection from "./components/CaseStudyRelatedSection";
import useCaseStudyNavigation from "./hooks/useCaseStudyNavigation";
import useRelatedCaseStudies from "./hooks/useRelatedCaseStudies";
import {
  caseStudyEntries,
  divarOverview,
  divarSections,
} from "./data/content";
import { divarCaseStudyMetadata } from "./seo";

const CaseStudyDivarPage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation(divarSections);

  const otherCaseStudies = useRelatedCaseStudies(caseStudyEntries, "divar-secure-call");

  return (
    <>
      <Seo {...divarCaseStudyMetadata} />
      <CaseStudyOverviewSection
        eyebrow="Trust & Safety · Case Study"
        overview={divarOverview}
        subtitleFallback={divarCaseStudyMetadata.description}
        statsTitle="Impact snapshot"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }}>
            <Grid size={{ xs: 12, md: 3 }}>
              <CaseStudyOutlineNav
                sections={divarSections}
                activeSectionId={activeSectionId}
                onNavigate={handleOutlineClick}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <Stack spacing={{ xs: 3, md: 4 }}>
                {divarSections.map((section) => (
                  <CaseStudySectionCard key={section.id} section={section} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CaseStudyRelatedSection
        eyebrow="Keep exploring"
        title="More ways I design for trust"
        description="Dive into other collaborations or get to know the person behind the work. Pick another case study, peek inside my story, or reach out directly."
        studies={otherCaseStudies}
        primaryCta={{ to: "/my-story", label: "Visit My Story", variant: "contained" }}
        secondaryCta={{ to: "/contact", label: "Start a conversation", variant: "outlined" }}
      />
    </>
  );
};

export default CaseStudyDivarPage;


