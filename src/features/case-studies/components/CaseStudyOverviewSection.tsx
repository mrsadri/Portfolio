import Grid from "@mui/system/Grid";
import {
  Box,
  Card,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
  type SxProps,
  type Theme,
} from "@mui/material";
import type { CaseStudyOverview } from "../types";
import { mergeSx } from "@shared/utils/sx";

type CaseStudyOverviewSectionProps = {
  eyebrow: string;
  overview: CaseStudyOverview;
  subtitleFallback?: string;
  metaTitle?: string;
  statsTitle?: string;
  statsVariant?: "gradient" | "outlined";
  heroBackdropSx?: SxProps<Theme>;
  heroSurfaceSx?: SxProps<Theme>;
  statsCardSx?: SxProps<Theme>;
};

const defaultHeroBackdropSx: SxProps<Theme> = (theme) => ({
  position: "absolute",
  inset: 0,
  borderRadius: { xs: 24, md: 32 },
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.18))"
      : "linear-gradient(140deg, rgba(16,28,56,0.88), rgba(36,64,120,0.72))",
  filter: "blur(48px)",
  zIndex: -1,
});

const defaultHeroSurfaceSx: SxProps<Theme> = (theme) => ({
  borderRadius: theme.tokens.radius.lg,
  backgroundColor:
    theme.palette.mode === "light" ? "rgba(249, 251, 255, 0.88)" : "rgba(13, 20, 36, 0.88)",
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
});

const defaultStatsCardSx: SxProps<Theme> = (theme) => ({
  borderRadius: theme.tokens.radius.card,
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.12))"
      : "linear-gradient(140deg, rgba(16,28,56,0.8), rgba(36,64,120,0.6))",
  px: { xs: 2.5, md: 3 },
  py: { xs: 2, md: 2.5 },
  border: "none",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const outlinedStatsCardSx: SxProps<Theme> = (theme) => ({
  borderRadius: theme.tokens.radius.card,
  px: { xs: 2.5, md: 3 },
  py: { xs: 2, md: 2.5 },
  border: `1px solid ${theme.tokens.colors.border}`,
  backgroundColor:
    theme.palette.mode === "light" ? "rgba(249,251,255,0.92)" : "rgba(14, 22, 38, 0.85)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const CaseStudyOverviewSection = ({
  eyebrow,
  overview,
  subtitleFallback,
  metaTitle = "Project details",
  statsTitle,
  statsVariant = "gradient",
  heroBackdropSx,
  heroSurfaceSx,
  statsCardSx,
}: CaseStudyOverviewSectionProps) => {
  const theme = useTheme();
  const stats = overview.stats;
  const resolvedStatsCardSx =
    statsVariant === "gradient" ? defaultStatsCardSx : outlinedStatsCardSx;

  return (
    <Box component="section" sx={{ py: 3 }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={mergeSx(defaultHeroBackdropSx, heroBackdropSx)} />

        <Box sx={mergeSx(defaultHeroSurfaceSx, heroSurfaceSx)}>
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Stack spacing={{ xs: 1.5, md: 2 }}>
              <Typography variant="eyebrow" color="brand.secondary">
                {eyebrow}
              </Typography>
              <Typography variant="hero">{overview.title}</Typography>
              {(overview.subtitle ?? subtitleFallback) && (
                <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {overview.subtitle ?? subtitleFallback}
                </Typography>
              )}
            </Stack>

            <Divider />

            <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 4 }}>
              <Stack spacing={2} flex={{ md: 1 }}>
                <Typography variant="overline" color="text.secondary">
                  {metaTitle}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {overview.meta.map((item) => (
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

              {stats && (
                <Stack spacing={2} flex={{ md: 1 }}>
                  {statsTitle && (
                    <Typography variant="overline" color="text.secondary">
                      {statsTitle}
                    </Typography>
                  )}
                  <Grid container spacing={2}>
                    {stats.map((stat) => (
                      <Grid
                        size={
                          stats.length >= 3
                            ? { xs: 12, sm: 4 }
                            : stats.length === 2
                              ? { xs: 12, sm: 6 }
                              : { xs: 12, sm: 12 }
                        }
                        key={stat.label}
                        sx={{ display: "flex" }}
                      >
                        <Card elevation={0} sx={mergeSx(resolvedStatsCardSx, statsCardSx)}>
                          <Stack spacing={0.5} sx={{ flex: 1 }}>
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
  );
};

export default CaseStudyOverviewSection;


