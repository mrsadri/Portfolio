// File: src/routes/case-studies/CaseStudyDivarPage.tsx
// Purpose: Details the Divar secure call case study with structured sections, metrics, and narrative.
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  divarOverview,
  divarSections,
  type CaseStudySection,
} from "../../data/caseStudies";

const SectionCard = ({ section }: { section: CaseStudySection }) => (
  <Card id={section.id} sx={{ p: { xs: 3, md: 5 } }}>
    <Stack spacing={3}>
      <Typography variant="h4">{section.title}</Typography>
      {section.description && (
        <Typography variant="body1" color="text.secondary">
          {section.description}
        </Typography>
      )}
      {section.metrics && (
        <Grid container spacing={3}>
          {section.metrics.map((metric) => (
            <Grid size={{ xs: 12, md: 4 }} key={metric.label}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  p: 3,
                  background:
                    "linear-gradient(135deg, rgba(31,111,235,0.08), rgba(90,200,250,0.12))",
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="overline" color="secondary">
                    {metric.label}
                  </Typography>
                  <Typography variant="h4">{metric.value}</Typography>
                  {metric.description && (
                    <Typography variant="body2" color="text.secondary">
                      {metric.description}
                    </Typography>
                  )}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {section.points && (
        <Stack component="ul" spacing={1.5} sx={{ pl: 2, mb: 0 }}>
          {section.points.map((point) => (
            <Typography
              component="li"
              key={point}
              variant="body1"
              color="text.secondary"
            >
              {point}
            </Typography>
          ))}
        </Stack>
      )}
      {section.highlights && (
        <Stack spacing={1.5}>
          {section.highlights.map((highlight) => (
            <Chip
              key={highlight}
              label={highlight}
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            />
          ))}
        </Stack>
      )}
      {section.quote && (
        <Card
          sx={{
            background:
              "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))",
            color: "primary.contrastText",
            p: { xs: 3, md: 4 },
          }}
        >
          <Stack spacing={2}>
            <FormatQuoteRoundedIcon fontSize="large" />
            <Typography variant="h6">{section.quote.text}</Typography>
            <Typography variant="body2">
              {section.quote.author} — {section.quote.role}
            </Typography>
          </Stack>
        </Card>
      )}
      {section.image && (
        <Box
          component="img"
          src={section.image.src}
          alt={section.image.alt}
          sx={{
            width: "100%",
            borderRadius: 16,
            boxShadow:
              "0 24px 48px rgba(31, 111, 235, 0.16), 0 8px 22px rgba(12, 53, 148, 0.12)",
          }}
        />
      )}
    </Stack>
  </Card>
);

const CaseStudyDivarPage = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            "linear-gradient(135deg, rgba(31,111,235,0.12), rgba(90,200,250,0.16))",
        }}
      >
        <Container>
          <Stack spacing={4}>
            <Button
              component={RouterLink}
              to="/"
              startIcon={<ArrowBackRoundedIcon />}
              variant="text"
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            >
              Back to home
            </Button>
            <Grid
              container
              spacing={6}
              sx={{ alignItems: "center" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Typography variant="overline" color="secondary">
                    Case Study — Trust & Safety
                  </Typography>
                  <Typography variant="h2">{divarOverview.title}</Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    {divarOverview.meta.map((item) => (
                      <Card key={item.label} sx={{ p: 2.5, minWidth: 160 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ textTransform: "uppercase" }}
                        >
                          {item.label}
                        </Typography>
                        <Typography variant="subtitle1">{item.value}</Typography>
                      </Card>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={divarOverview.heroImage}
                  alt="Divar secure call listings"
                  sx={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow:
                      "0 24px 48px rgba(31, 111, 235, 0.16), 0 8px 22px rgba(12, 53, 148, 0.12)",
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            {divarSections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CaseStudyDivarPage;

