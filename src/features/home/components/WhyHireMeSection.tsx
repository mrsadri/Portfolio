import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DifferentiatorsCarousel from "./DifferentiatorsCarousel";
import { PrimaryButton } from "@shared/ui";
import type { WhyHireMeContent } from "../types";

type WhyHireMeSectionProps = {
  content: WhyHireMeContent;
};

const WhyHireMeSection = ({ content }: WhyHireMeSectionProps) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 10 } }}>
      <Container>
        <Stack spacing={6}>
          {/* What I Bring Section */}
          <Stack spacing={3}>
            <Stack spacing={1.5} alignItems="center" textAlign="center">
              <Typography variant="h2" fontWeight={700}>
                {content.whatIBring.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" fontWeight={400}>
                Key differentiators that set me apart
              </Typography>
            </Stack>
            <Box sx={{ position: "relative" }}>
              <DifferentiatorsCarousel items={content.whatIBring.differentiators} />
            </Box>
          </Stack>

          {/* Quick Stats Section */}
          <Box
            sx={{
              py: 4,
              px: { xs: 2, md: 4 },
              borderRadius: (theme) => theme.tokens.radius.lg,
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(135deg, rgba(31, 111, 235, 0.08) 0%, rgba(145, 167, 255, 0.08) 100%)"
                  : "linear-gradient(135deg, rgba(48, 86, 176, 0.15) 0%, rgba(73, 109, 193, 0.15) 100%)",
              border: (theme) => `1px solid ${theme.tokens.colors.border}`,
            }}
          >
            <Grid container spacing={3}>
              {content.quickStats.map((stat, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <Stack spacing={0.5} alignItems="center" textAlign="center">
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      sx={{
                        color:
                          theme.palette.mode === "light"
                            ? theme.palette.brand.secondary
                            : "rgba(221, 230, 255, 0.95)",
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      {stat.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* What I'm Looking For Section */}
          <Box
            sx={{
              py: 4,
              px: { xs: 3, md: 5 },
              borderRadius: (theme) => theme.tokens.radius.lg,
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(31, 111, 235, 0.06)"
                  : "rgba(48, 86, 176, 0.12)",
              border: (theme) => `1px solid ${theme.tokens.colors.border}`,
            }}
          >
            <Stack spacing={3}>
              <Stack spacing={2}>
                <Typography variant="h4" fontWeight={600}>
                  {content.whatImLookingFor.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  {content.whatImLookingFor.description}
                </Typography>
              </Stack>
              {content.whatImLookingFor.action && (
                <Box>
                  <PrimaryButton
                    component={RouterLink}
                    to={content.whatImLookingFor.action.href}
                    endIcon={<ArrowForwardRoundedIcon />}
                    size="large"
                    sx={{
                      minWidth: { xs: "100%", sm: 220 },
                    }}
                  >
                    {content.whatImLookingFor.action.label}
                  </PrimaryButton>
                </Box>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhyHireMeSection;

