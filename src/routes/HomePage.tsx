// File: src/routes/HomePage.tsx
// Purpose: Renders the landing experience including hero, metrics, case studies, experiences, and contact call-to-action.
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Grid from "@mui/system/Grid";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Seo from "../components/Seo";
import {
  caseStudies,
  experiences,
  hero,
  metrics,
  socialLinks,
} from "../data/home";
import CaseCard from "../components/ui/CaseCard";
import GhostButton from "../components/ui/GhostButton";
import ImpactStatCard from "../components/ui/ImpactStatCard";
import Pill from "../components/ui/Pill";
import PrimaryButton from "../components/ui/PrimaryButton";
import certifiedBadge from "../images/certified-badge.png";

type CaseStudyId = (typeof caseStudies)[number]["id"];

const HomePage = () => {
  const theme = useTheme();
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<CaseStudyId | null>(null);

  const siteUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
    "https://mrsadri.github.io/Portfolio";

  const primaryHeroMetric = metrics[0];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Masih Sadri — Senior Product Designer",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: hero.name,
      jobTitle: "Senior Product Designer",
      description: hero.subtitle,
      url: siteUrl,
      image: hero.portrait.src,
      sameAs: socialLinks.map((link) => link.href),
    },
  ] as const;

  const selectedCaseStudyData = useMemo(
    () => caseStudies.find((item) => item.id === selectedCaseStudy) ?? null,
    [selectedCaseStudy],
  );

  return (
    <>
      <Seo
        title="Masih Sadri — Senior Product Designer crafting trustworthy experiences"
        description="Portfolio of Masih Sadri, an impact-oriented senior product designer protecting millions of users through trust & safety, growth, and design systems."
        canonicalPath="/"
        openGraph={{
          type: "website",
          image: {
            url: hero.portrait.src,
            alt: hero.portrait.alt,
          },
        }}
        structuredData={structuredData}
      />
      <Box
        component="section"
        sx={(theme) => ({
          py: { xs: 6, md: 9 },
          background:
            theme.palette.mode === "light"
              ? "radial-gradient(circle at 20% 15%, rgba(145, 167, 255, 0.12), transparent 58%), radial-gradient(circle at 80% 20%, rgba(34, 84, 255, 0.1), transparent 52%)"
              : "radial-gradient(circle at 18% 15%, rgba(73, 109, 193, 0.18), transparent 60%), radial-gradient(circle at 78% 18%, rgba(48, 86, 176, 0.18), transparent 55%)",
        })}
      >
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 3.5 }}
            sx={{
              alignItems: { xs: "center", md: "stretch" },
              px: { xs: 0, md: 2 },
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                flexBasis: { md: "30%" },
                maxWidth: { md: "30%" },
                flexShrink: 0,
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 260, sm: 300, md: 320 },
                }}
              >
                <Avatar
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  variant="rounded"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: (theme) => theme.tokens.radius.lg,
                    border: `1px solid ${theme.tokens.colors.border}`,
                    boxShadow:
                      theme.palette.mode === "light"
                        ? "0 18px 40px rgba(17, 36, 83, 0.18)"
                        : "0 20px 50px rgba(0, 0, 0, 0.55)",
                  }}
                />
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    position: "absolute",
                    bottom: -24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    alignItems: "center",
                    background:
                      theme.palette.mode === "light"
                        ? "rgba(17, 36, 83, 0.86)"
                        : "rgba(5, 12, 24, 0.88)",
                    color: "common.white",
                    borderRadius: 999,
                    px: 2.25,
                    py: 0.75,
                    boxShadow: "0 12px 24px rgba(12, 28, 75, 0.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.success.main,
                      animation: "availabilityPulse 1.6s ease-in-out infinite",
                      "@keyframes availabilityPulse": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0.2 },
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, letterSpacing: 0.4, whiteSpace: "nowrap" }}
                  >
                    Available for senior roles
                  </Typography>
                </Stack>
                <Box
                  component="img"
                  src={certifiedBadge}
                  alt="Certified badge"
                  sx={{
                    position: "absolute",
                    top: { xs: -18, md: -26 },
                    left: { xs: -18, md: -26 },
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </Box>
            </Stack>
            <Stack
              spacing={{ xs: 2.25, md: 2.75 }}
              sx={{
                flexBasis: { md: "70%" },
                maxWidth: { md: "70%" },
                flexGrow: 1,
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Stack spacing={{ xs: 1.4, md: 1.8 }} sx={{ width: "100%" }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 1.5 }}
                  alignItems={{ xs: "center", sm: "flex-start" }}
                >
                  <Pill
                    label={hero.greeting}
                    size="small"
                    sx={{
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "rgba(31, 111, 235, 0.12)"
                          : "rgba(98, 132, 218, 0.22)",
                      color:
                        theme.palette.mode === "light"
                          ? theme.palette.brand.secondary
                          : "rgba(221, 230, 255, 0.92)",
                      fontWeight: 600,
                      letterSpacing: 0.3,
                    }}
                  />
                </Stack>
                <Typography
                  variant="display"
                  sx={{
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {hero.name}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    letterSpacing: { xs: "0.01em", md: "0.005em" },
                    maxWidth: { md: "78%" },
                  }}
                >
                  {hero.title}
                </Typography>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1.05rem", md: "1.12rem" },
                  lineHeight: { xs: 1.65, md: 1.7 },
                }}
              >
                {hero.subtitle}
              </Typography>
              <Stack spacing={1.1}>
                {hero.credentials.map((line) => (
                  <Typography
                    key={line}
                    variant="body1"
                    sx={{ color: theme.palette.text.primary, lineHeight: 1.65 }}
                  >
                    {line}
                  </Typography>
                ))}
              </Stack>
              <Stack
                spacing={{ xs: 1.4, sm: 1.8 }}
                direction={{ xs: "column", sm: "row" }}
                sx={{ pt: { xs: 0.5, md: 0.75 } }}
              >
                <PrimaryButton
                  component={RouterLink}
                  to={hero.ctaPrimary.to}
                  endIcon={<ArrowForwardRoundedIcon />}
                  size="large"
                  sx={{ minWidth: { sm: 220 } }}
                >
                  {hero.ctaPrimary.label}
                </PrimaryButton>
                <GhostButton
                  component={RouterLink}
                  to={hero.ctaSecondary.to}
                  size="large"
                  sx={{
                    borderRadius: 999,
                    px: 3,
                    borderWidth: 1.5,
                  }}
                >
                  {hero.ctaSecondary.label}
                </GhostButton>
              </Stack>
              <GhostButton
                component={RouterLink}
                to={hero.availability.to}
                variant="text"
                color="secondary"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  alignSelf: { xs: "flex-start" },
                  fontWeight: 600,
                  mt: { xs: 0.5, md: 0.75 },
                }}
              >
                {hero.availability.label}
              </GhostButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, pt: { md: 6 } }}>
        <Container>
          <Grid container spacing={{ xs: 3, md: 3.5 }}>
            {metrics.map(({ value, title, description }) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
                <ImpactStatCard value={value} label={title} description={description} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        id="case-studies"
        component="section"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.paper" }}
      >
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography variant="h2">Case studies</Typography>
            <Typography variant="h6" color="text.secondary">
              Examples of the impact I have made
            </Typography>
          </Stack>
          <Grid container spacing={4}>
            {caseStudies.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                <CaseCard
                  caseStudy={item}
                  active={item.id === "divar"}
                  onOpenRecap={() => setSelectedCaseStudy(item.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography variant="h2">Other Exciting Experience</Typography>
            <Typography variant="h6" color="text.secondary">
              Alongside my professional journey
            </Typography>
          </Stack>
          <Grid container spacing={4}>
            {experiences.map((experience) => (
              <Grid size={{ xs: 12, md: 6 }} key={experience.title}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    component="img"
                    src={experience.image.src}
                    alt={experience.image.alt}
                    sx={{
                      width: "100%",
                      height: 240,
                      objectFit: "cover",
                      borderTopLeftRadius: (theme) => theme.shape.borderRadius,
                      borderTopRightRadius: (theme) => theme.shape.borderRadius,
                    }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h5">{experience.title}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {experience.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {experience.tags.map((tag) => (
                          <Pill
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor:
                                theme.palette.mode === "light"
                                  ? "rgba(31, 111, 235, 0.12)"
                                  : "rgba(98, 132, 218, 0.22)",
                              color:
                                theme.palette.mode === "light"
                                  ? theme.palette.brand.secondary
                                  : "rgba(221, 230, 255, 0.92)",
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                  {experience.link && (
                    <CardActions sx={{ pt: 0, pb: 3, px: 3 }}>
                      <Button
                        component="a"
                        href={experience.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowForwardRoundedIcon />}
                      >
                        {experience.link.label}
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={(theme) => ({
          py: { xs: 6, md: 8 },
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, rgba(34,84,255,0.05), transparent 70%)"
              : "linear-gradient(135deg, rgba(48,86,176,0.18), rgba(4,7,15,0))",
        })}
      >
        <Container maxWidth="md">
          <Card
            component="footer"
            elevation={0}
            sx={(theme) => ({
              borderRadius: theme.tokens.radius.surface,
              border: `1px solid ${theme.tokens.colors.border}`,
              background: theme.palette.surface.base,
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <CardContent
              sx={{
                px: { xs: 5, md: 5 },
                pt: { xs: 5, md: 5 },
                pb: { xs: 3.5, md: 3.5 },
                "&:last-child": { pb: { xs: 3.5, md: 3.5 } },
              }}
            >
              <Stack spacing={0.75}>
                <Typography variant="h3" component="h2">
                  Let’s connect
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Share your challenge or say hello—happy to explore product design collaborations.
                </Typography>
              </Stack>
              <Divider sx={{ mt: 3 }} />
            </CardContent>
            <CardActions
              sx={{
                px: { xs: 5, md: 5 },
                pb: { xs: 5, md: 5 },
                pt: 0,
                flexDirection: "column",
                alignItems: "stretch",
                gap: 1,
              }}
            >
              <Button component="a" href="mailto:sdarimasih@gmail.com" variant="contained" size="large">
                sdarimasih@gmail.com
              </Button>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                {socialLinks.map(({ label, href }) => (
                  <Button
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    fullWidth
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </CardActions>
          </Card>
        </Container>
      </Box>

      <Dialog
        open={Boolean(selectedCaseStudyData)}
        onClose={() => setSelectedCaseStudy(null)}
        aria-labelledby="case-study-recap-title"
      >
        {selectedCaseStudyData && (
          <>
            <DialogTitle id="case-study-recap-title">
              {selectedCaseStudyData.recap.headline}
            </DialogTitle>
            <DialogContent>
              <Stack component="ul" spacing={1.5} sx={{ pl: 2 }}>
                {selectedCaseStudyData.recap.bullets.map((bullet) => (
                  <Typography
                    component="li"
                    key={bullet}
                    variant="body1"
                    color="text.secondary"
                  >
                    {bullet}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={2} mt={3}>
                <Button
                  component={RouterLink}
                  to={selectedCaseStudyData.to}
                  variant="contained"
                  fullWidth
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  Deep dive
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  Close
                </Button>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default HomePage;

