// File: src/routes/case-studies/CaseStudySetarePage.tsx
// Purpose: Presents the Setare Aval engagement case study covering strategy, insights, and outcomes.
import Grid from "@mui/system/Grid";
import { Box, Button, Card, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import Seo from "../../components/Seo";
import CaseStudySectionCard from "../../components/case-studies/SectionCard";
import { caseStudyEntries, setareOverview, setareSections } from "../../data/caseStudies";

const CaseStudySetarePage = () => {
  const theme = useTheme();
  const [activeSectionId, setActiveSectionId] = useState(setareSections[0]?.id ?? "");

  const siteUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
    "https://mrsadri.github.io/Portfolio";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: setareOverview.title,
    description:
      setareOverview.subtitle ??
      "Retention and growth strategy that doubled retained revenue at Setare Aval.",
    author: {
      "@type": "Person",
      name: "Masih Sadri",
      url: siteUrl,
    },
    url: `${siteUrl}/case-studies/setare-aval-engagement`,
    image: setareOverview.heroImage,
    keyword: ["Retention Strategy", "Lifecycle Marketing", "Growth Design"],
  } as const;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && setareSections.some((section) => section.id === hash)) {
      setActiveSectionId(hash);
    }
  }, [setareSections]);

  useEffect(() => {
    const sectionElements = setareSections
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
  }, [setareSections]);

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

  const otherCaseStudies = caseStudyEntries.filter(
    (entry) => entry.id !== "setare-aval-engagement",
  );

  return (
    <>
      <Seo
        title="Setare Aval Engagement Case Study — Doubling Retained Revenue"
        description={
          setareOverview.subtitle ??
          "Re-architected lifecycle journeys for Setare Aval to double retained revenue and energise loyal users."
        }
        canonicalPath="/case-studies/setare-aval-engagement"
        openGraph={{
          type: "article",
          image: {
            url: setareOverview.heroImage,
            alt: "Setare Aval customer engagement session",
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
                  ? "linear-gradient(140deg, rgba(34,84,255,0.06), rgba(145,167,255,0.14))"
                  : "linear-gradient(140deg, rgba(12,18,32,0.85), rgba(28,48,90,0.68))",
              filter: "blur(48px)",
              zIndex: -1,
            }}
          />

          <Box
            sx={{
              borderRadius: theme.tokens.radius.lg,
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(250, 252, 255, 0.9)"
                  : "rgba(12, 18, 32, 0.9)",
              border: `1px solid ${
                theme.palette.mode === "light"
                  ? "rgba(34,84,255,0.14)"
                  : "rgba(98,132,218,0.32)"
              }`,
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 26px 52px rgba(34, 84, 255, 0.12)"
                  : "0 26px 52px rgba(0, 0, 0, 0.45)",
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 4 },
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              <Stack spacing={{ xs: 1.5, md: 2 }}>
                <Typography variant="eyebrow" color="brand.secondary">
                  Case study · Retention & Growth
                </Typography>
                <Typography variant="hero">{setareOverview.title}</Typography>
                {setareOverview.subtitle && (
                  <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {setareOverview.subtitle}
                  </Typography>
                )}
              </Stack>

              <Divider />

              <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 4 }}>
                <Stack spacing={2} flex={{ md: 1 }}>
                  <Typography variant="overline" color="text.secondary">
                    Project details
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {setareOverview.meta.map((item) => (
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

                {setareOverview.stats && (
                  <Stack spacing={2} flex={{ md: 1 }}>
                    <Typography variant="overline" color="text.secondary">
                      Growth outcomes
                    </Typography>
                    <Grid container spacing={2}>
                      {setareOverview.stats.map((stat) => (
                        <Grid
                          size={{ xs: 12, sm: setareOverview.stats!.length > 1 ? 6 : 12 }}
                          key={stat.label}
                        >
                          <Card
                            elevation={0}
                            sx={{
                              borderRadius: theme.tokens.radius.card,
                              px: { xs: 2.5, md: 3 },
                              py: { xs: 2, md: 2.5 },
                              border: `1px solid ${theme.tokens.colors.border}`,
                              backgroundColor:
                                theme.palette.mode === "light"
                                  ? "rgba(249,251,255,0.92)"
                                  : "rgba(14, 22, 38, 0.85)",
                            }}
                          >
                            <Stack spacing={0.5}>
                              <Typography variant="h4">{stat.value}</Typography>
                              <Typography variant="subtitle2" color="text.secondary">
                                {stat.label}
                              </Typography>
                              {stat.description && (
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ lineHeight: 1.55 }}
                                >
                                  {stat.description}
                                </Typography>
                              )}
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
                spacing={1}
                component="nav"
                aria-label="Case study sections"
                sx={{
                  position: { md: "sticky" },
                  top: { md: 140 },
                  borderRadius: "20px",
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
                {setareSections.map((section) => (
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
                {setareSections.map((section) => (
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
              ? "linear-gradient(135deg, rgba(243,247,255,0.82), rgba(226,236,255,0.94))"
              : "linear-gradient(135deg, rgba(12,18,30,0.9), rgba(19,28,44,0.92))",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 4, md: 6 }}>
            <Stack spacing={1.5} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="eyebrow" color="brand.secondary">
                Continue the journey
              </Typography>
              <Typography variant="h2">See more ways I design for growth</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: 720, mx: { xs: "auto", md: 0 }, lineHeight: 1.65 }}
              >
                Explore additional product challenges or learn more about how I collaborate. Choose
                another case study, read my story, or drop me a line.
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

export default CaseStudySetarePage;
