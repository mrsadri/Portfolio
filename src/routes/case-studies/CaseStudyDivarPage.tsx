// File: src/routes/case-studies/CaseStudyDivarPage.tsx
// Purpose: Details the Divar secure call case study with structured sections, metrics, and narrative.
import Grid from "@mui/system/Grid";
import { Box, Container, Stack } from "@mui/material";
import Seo from "../../components/Seo";
import CaseStudySectionCard from "../../components/case-studies/SectionCard";
import CaseStudyOutlineNav from "../../components/case-studies/CaseStudyOutlineNav";
import CaseStudyOverviewSection from "../../components/case-studies/CaseStudyOverviewSection";
import CaseStudyRelatedSection from "../../components/case-studies/CaseStudyRelatedSection";
import useCaseStudyNavigation from "../../components/case-studies/useCaseStudyNavigation";
import { caseStudyEntries, divarOverview, divarSections } from "../../data/caseStudies";
import getSiteUrl from "../../utils/site";

const CaseStudyDivarPage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation(divarSections);
  const siteUrl = getSiteUrl();

  const caseStudyDescription =
    divarOverview.subtitle ??
    "Privacy-first calling experience that reduced harassment incidents by 60% for 2.1M Divar users.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: divarOverview.title,
    description: caseStudyDescription,
    author: {
      "@type": "Person",
      name: "Masih Sadri",
      url: siteUrl,
    },
    url: `${siteUrl}/case-studies/divar-secure-call`,
    image: divarOverview.heroImage,
    keyword: ["Trust & Safety", "Harassment Reduction", "Marketplace"],
  } as const;

  const otherCaseStudies = caseStudyEntries.filter((entry) => entry.id !== "divar-secure-call");

  return (
    <>
      <Seo
        title="Divar Secure Call Case Study — Reducing Harassment by 60%"
        description={caseStudyDescription}
        canonicalPath="/case-studies/divar-secure-call"
        openGraph={{
          type: "article",
          image: {
            url: divarOverview.heroImage,
            alt: "Divar secure call listings interface",
          },
        }}
        structuredData={structuredData}
      />
      <CaseStudyOverviewSection
        eyebrow="Trust & Safety · Case Study"
        overview={divarOverview}
        subtitleFallback={caseStudyDescription}
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
