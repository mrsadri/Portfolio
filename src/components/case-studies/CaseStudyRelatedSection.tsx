import Grid from "@mui/system/Grid";
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { CaseStudyEntry } from "../../data/caseStudies";
import { mergeSx } from "../../utils/sx";

type CaseStudyRelatedSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  studies: readonly CaseStudyEntry[];
  primaryCta: {
    to: string;
    label: string;
    variant?: "contained" | "outlined";
  };
  secondaryCta?: {
    to: string;
    label: string;
    variant?: "contained" | "outlined";
  };
  sectionSx?: SxProps<Theme>;
};

const defaultSectionSx: SxProps<Theme> = (theme) => ({
  py: { xs: 10, md: 14 },
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(135deg, rgba(241,245,255,0.8), rgba(224,233,255,0.94))"
      : "linear-gradient(135deg, rgba(13,20,33,0.9), rgba(21,31,52,0.92))",
});

const CaseStudyRelatedSection = ({
  eyebrow,
  title,
  description,
  studies,
  primaryCta,
  secondaryCta,
  sectionSx,
}: CaseStudyRelatedSectionProps) => (
  <Box component="section" sx={mergeSx(defaultSectionSx, sectionSx)}>
    <Container maxWidth="lg">
      <Stack spacing={{ xs: 4, md: 6 }}>
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="eyebrow" color="brand.secondary">
            {eyebrow}
          </Typography>
          <Typography variant="h2">{title}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 720, mx: { xs: "auto", md: 0 }, lineHeight: 1.65 }}
          >
            {description}
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {studies.map((study) => (
            <Grid size={{ xs: 12, md: 6 }} key={study.id}>
              <Card
                component={RouterLink}
                to={study.path}
                sx={(theme) => ({
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(2),
                  textDecoration: "none",
                  borderRadius: theme.tokens.radius.card,
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 2.5, md: 3 },
                  transition: `${theme.tokens.transition.hover}, transform 160ms ease`,
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
          <Button component={RouterLink} to={primaryCta.to} variant={primaryCta.variant ?? "contained"} size="large">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button component={RouterLink} to={secondaryCta.to} variant={secondaryCta.variant ?? "outlined"} size="large">
              {secondaryCta.label}
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default CaseStudyRelatedSection;

