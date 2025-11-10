// File: src/routes/case-studies/CaseStudyDivarPage.tsx
// Purpose: Details the Divar secure call case study with structured sections, metrics, and narrative.
import Grid from "@mui/system/Grid";
import { Box, Button, Card, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import Seo from "../../components/Seo";
import CaseStudySectionCard from "../../components/case-studies/SectionCard";
import { caseStudyEntries, divarOverview, divarSections } from "../../data/caseStudies";

const CaseStudyDivarPage = () => {
  const theme = useTheme();
  const [activeSectionId, setActiveSectionId] = useState(divarSections[0]?.id ?? "");

  const siteUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
    "https://mrsadri.github.io/Portfolio";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: divarOverview.title,
    description: divarOverview.subtitle,
    author: {
      "@type": "Person",
      name: "Masih Sadri",
      url: siteUrl,
    },
    url: `${siteUrl}/case-studies/divar-secure-call`,
    image: divarOverview.heroImage,
    keyword: ["Trust & Safety", "Harassment Reduction", "Marketplace"],
  } as const;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && divarSections.some((section) => section.id === hash)) {
      setActiveSectionId(hash);
    }
  }, [divarSections]);

  useEffect(() => {
    const sectionElements = divarSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const firstVisible = visibleEntries[0];
        if (firstVisible) {
          setActiveSectionId(firstVisible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45%" },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [divarSections]);

  const handleOutlineClick = (event: ReactMouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSectionId(targetId);
      const newUrl = `${window.location.pathname}${window.location.search}#${targetId}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

  const otherCaseStudies = caseStudyEntries.filter((entry) => entry.id !== "divar-secure-call");

  return (
    <>
      <Seo
        title="Divar Secure Call Case Study — Reducing Harassment by 60%"
        description={divarOverview.subtitle}
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
      <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: { xs: 24, md: 32 },
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.18))"
                  : "linear-gradient(140deg, rgba(16,28,56,0.88), rgba(36,64,120,0.72))",
              filter: "blur(48px)",
              zIndex: -1,
            }}
          />

          <Box
            sx={{
              borderRadius: theme.tokens.radius.lg,
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(249, 251, 255, 0.88)"
                  : "rgba(13, 20, 36, 0.88)",
              border: `1px solid ${
                theme.palette.mode === "light"
                  ? "rgba(34,84,255,0.16)"
                  : "rgba(98,132,218,0.32)"
              }`,
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 26px 52px rgba(34, 84, 255, 0.14)"
                  : "0 26px 52px rgba(0, 0, 0, 0.45)",
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 4 },
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              <Stack spacing={{ xs: 1.5, md: 2 }}>
                <Typography variant="eyebrow" color="brand.secondary">
                  Trust & Safety · Case Study
                </Typography>
                <Typography variant="hero">{divarOverview.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {divarOverview.subtitle}
                </Typography>
              </Stack>

              <Divider />

              <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 4 }}>
                <Stack spacing={2} flex={{ md: 1 }}>
                  <Typography variant="overline" color="text.secondary">
                    Project details
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {divarOverview.meta.map((item) => (
                      <Card
                        key={item.label}
                        variant="outlined"
                        sx={{
                          borderRadius: theme.tokens.radius.surface,
                          boxShadow: "none",
                          px: { xs: 2, md: 2.5 },
                          py: { xs: 1.25, md: 1.5 },
                          minWidth: 160,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {item.label}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, mt: 0.5 }}>
                          {item.value}
                        </Typography>
                      </Card>
                    ))}
                  </Stack>
                </Stack>

                {divarOverview.stats && (
                  <Stack spacing={2} flex={{ md: 1 }}>
                    <Typography variant="overline" color="text.secondary">
                      Impact snapshot
                    </Typography>
                    <Grid container spacing={2}>
                      {divarOverview.stats.map((stat) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
                          <Card
                            elevation={0}
                            sx={{
                              borderRadius: theme.tokens.radius.card,
                              background:
                                theme.palette.mode === "light"
                                  ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.12))"
                                  : "linear-gradient(140deg, rgba(16,28,56,0.8), rgba(36,64,120,0.6))",
                              px: { xs: 2.5, md: 3 },
                              py: { xs: 2, md: 2.5 },
                              border: "none",
                            }}
                          >
                            <Stack spacing={0.5}>
                              <Typography variant="h4">{stat.value}</Typography>
                              <Typography variant="subtitle2" color="text.secondary">
                                {stat.label}
                              </Typography>
                            </Stack>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack
                component="nav"
                aria-label="Case study sections"
                spacing={1}
                sx={{
                  position: { md: "sticky" },
                  top: { md: 140 },
                  borderRadius: theme.tokens.radius.surface,
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgba(34,84,255,0.04)"
                      : "rgba(34,84,255,0.14)",
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 2, md: 2.5 },
                  border: `1px solid ${
                    theme.palette.mode === "light"
                      ? "rgba(34,84,255,0.18)"
                      : "rgba(98,132,218,0.32)"
                  }`,
                }}
              >
                <Typography variant="overline" color="text.secondary">
                  Outline
                </Typography>
                <Divider />
                {divarSections.map((section) => (
                  <Button
                    key={section.id}
                    component="a"
                    href={`#${section.id}`}
                    variant="text"
                    size="small"
                    onClick={(event) => handleOutlineClick(event, section.id)}
                    aria-current={activeSectionId === section.id ? "true" : undefined}
                    sx={(muiTheme) => {
                      const isActive = activeSectionId === section.id;
                      return {
                        justifyContent: "flex-start",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive
                          ? muiTheme.palette.mode === "light"
                            ? muiTheme.palette.primary.main
                            : muiTheme.palette.brand.secondary
                          : muiTheme.palette.mode === "light"
                            ? muiTheme.palette.brand.secondary
                            : "rgba(221, 230, 255, 0.92)",
                        backgroundColor: isActive
                          ? muiTheme.palette.mode === "light"
                            ? "rgba(34,84,255,0.12)"
                            : "rgba(98,132,218,0.28)"
                          : "transparent",
                        borderRadius: muiTheme.tokens.radius.surface,
                        px: 1.5,
                        py: 1,
                        transition: muiTheme.tokens.transition.hover,
                        "&:hover": {
                          backgroundColor:
                            muiTheme.palette.mode === "light"
                              ? "rgba(34,84,255,0.16)"
                              : "rgba(98,132,218,0.24)",
                        },
                      };
                    }}
                  >
                    {section.title}
                  </Button>
                ))}
              </Stack>
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

      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, rgba(241,245,255,0.8), rgba(224,233,255,0.94))"
              : "linear-gradient(135deg, rgba(13,20,33,0.9), rgba(21,31,52,0.92))",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 4, md: 6 }}>
            <Stack spacing={1.5} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="eyebrow" color="brand.secondary">
                Keep exploring
              </Typography>
              <Typography variant="h2">More ways I design for trust</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: 720, mx: { xs: "auto", md: 0 }, lineHeight: 1.65 }}
              >
                Dive into other collaborations or get to know the person behind the work. Pick
                another case study, peek inside my story, or reach out directly.
              </Typography>
            </Stack>

            <Grid container spacing={{ xs: 3, md: 4 }}>
              {otherCaseStudies.map((study) => (
                <Grid size={{ xs: 12, md: 6 }} key={study.id}>
                  <Card
                    component={RouterLink}
                    to={study.path}
                    sx={(muiTheme) => ({
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: muiTheme.spacing(2),
                      textDecoration: "none",
                      borderRadius: muiTheme.tokens.radius.card,
                      px: { xs: 2.5, md: 3 },
                      py: { xs: 2.5, md: 3 },
                      transition: `${muiTheme.tokens.transition.hover}, transform 160ms ease`,
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    })}
                  >
                    <Stack spacing={1}>
                      <Typography variant="tag" color="brand.secondary">
                        {study.focus}
                      </Typography>
                      <Typography variant="h4">{study.title}</Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {study.excerpt}
                    </Typography>
                    <Typography variant="button" color="primary">
                      Read the case study →
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              justifyContent="center"
            >
              <Button component={RouterLink} to="/my-story" variant="contained" size="large">
                Visit My Story
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" size="large">
                Start a conversation
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CaseStudyDivarPage;
