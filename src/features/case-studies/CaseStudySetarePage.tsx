import Grid from "@mui/system/Grid";
import { Box, Container, Stack } from "@mui/material";
import { Seo } from "@shared/seo";
import CaseStudySectionCard from "./components/SectionCard";
import CaseStudyOutlineNav from "./components/CaseStudyOutlineNav";
import CaseStudyOverviewSection from "./components/CaseStudyOverviewSection";
import CaseStudyRelatedSection from "./components/CaseStudyRelatedSection";
import useCaseStudyNavigation from "./hooks/useCaseStudyNavigation";
import useRelatedCaseStudies from "./hooks/useRelatedCaseStudies";
import {
  caseStudyEntries,
  setareOverview,
  setareSections,
} from "./data/content";
import { setareCaseStudyMetadata } from "./seo";

const CaseStudySetarePage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation(setareSections);

  const otherCaseStudies = useRelatedCaseStudies(caseStudyEntries, "setare-aval-engagement");

  return (
    <>
      <Seo {...setareCaseStudyMetadata} />
      <CaseStudyOverviewSection
        eyebrow="Case study · Retention & Growth"
        overview={setareOverview}
        statsTitle="Growth outcomes"
        statsVariant="outlined"
        heroBackdropSx={(theme) => ({
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(140deg, rgba(34,84,255,0.06), rgba(145,167,255,0.14))"
              : "linear-gradient(140deg, rgba(12,18,32,0.85), rgba(28,48,90,0.68))",
        })}
        heroSurfaceSx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(250, 252, 255, 0.9)"
              : "rgba(12, 18, 32, 0.9)",
          border: `1px solid ${
            theme.palette.mode === "light"
              ? "rgba(34,84,255,0.14)"
              : "rgba(98,132,218,0.32)"
          }`,
        })}
      />

      <Box component="section" sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }}>
            <Grid size={{ xs: 12, md: 3 }}>
              <CaseStudyOutlineNav
                sections={setareSections}
                activeSectionId={activeSectionId}
                onNavigate={handleOutlineClick}
                containerSx={{ borderRadius: "20px" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <Stack spacing={{ xs: 3, md: 4 }}>
                {setareSections.map((section) => (
                  <CaseStudySectionCard key={section.id} section={section} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CaseStudyRelatedSection
        eyebrow="Continue the journey"
        title="See more ways I design for growth"
        description="Explore additional product challenges or learn more about how I collaborate. Choose another case study, read my story, or drop me a line."
        studies={otherCaseStudies}
        primaryCta={{ to: "/my-story", label: "Visit My Story", variant: "contained" }}
        secondaryCta={{ to: "/contact", label: "Start a conversation", variant: "outlined" }}
        sectionSx={(theme) => ({
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, rgba(243,247,255,0.82), rgba(226,236,255,0.94))"
              : "linear-gradient(135deg, rgba(12,18,30,0.9), rgba(19,28,44,0.92))",
        })}
      />
    </>
  );
};

export default CaseStudySetarePage;


