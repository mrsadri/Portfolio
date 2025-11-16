import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useScrollAnimation } from "@shared/utils/useScrollAnimation";
import { getSectionStyles, SECTION_PADDING } from "@shared/utils/sectionBackgrounds";
import type { TeamSnapshot } from "../types";

type TeamSectionProps = {
  team: TeamSnapshot;
};

const TeamSection = ({ team }: TeamSectionProps) => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: SECTION_PADDING.large,
        ...getSectionStyles("medium", theme),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Container disableGutters maxWidth={false}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1.15fr 0.85fr" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 360, sm: 420, md: 520 },
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={team.image.src}
              alt={team.image.alt}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                bottom: { xs: 16, md: 24 },
                left: { xs: 16, md: 32 },
                px: 2,
                py: 0.75,
                borderRadius: theme.tokens.radius.pill,
                backdropFilter: "blur(16px)",
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(255, 255, 255, 0.95)"
                    : "rgba(14, 22, 38, 0.95)",
                color:
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.87)"
                    : "rgba(255, 255, 255, 0.92)",
                fontWeight: 500,
                boxShadow:
                  theme.palette.mode === "light"
                    ? "0 2px 8px rgba(0, 0, 0, 0.1)"
                    : "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              {team.caption}
            </Typography>
          </Box>
          <Box
            sx={{
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 5, md: 8 },
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 520 }}>
              <Typography variant="eyebrow" color="brand.secondary">
                Collaborators
              </Typography>
              <Typography variant="h2">{team.title}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {team.description}
              </Typography>
              <Box
                sx={{
                  borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                  pl: 3,
                  py: 1,
                }}
              >
                <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  “Designing with people I trust keeps the work humble, ambitious, and joyful.”
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;


