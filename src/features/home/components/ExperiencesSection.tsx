import Grid from "@mui/system/Grid";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { ExperienceSummary } from "../types";
import Pill from "../../../shared/components/ui/Pill";

type ExperiencesSectionProps = {
  experiences: ReadonlyArray<ExperienceSummary>;
};

const ExperiencesSection = ({ experiences }: ExperiencesSectionProps) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
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
                  loading="lazy"
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
  );
};

export default ExperiencesSection;


