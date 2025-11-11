import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import type { TeamSnapshot } from "../types";

type TeamSectionProps = {
  team: TeamSnapshot;
};

const TeamSection = ({ team }: TeamSectionProps) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: `1px solid ${theme.palette.divider}`,
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
              src={team.image}
              alt={team.alt}
            loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                position: "absolute",
                bottom: { xs: 16, md: 24 },
                left: { xs: 16, md: 32 },
                px: 2,
                py: 0.75,
                borderRadius: theme.tokens.radius.pill,
                backdropFilter: "blur(12px)",
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(255, 255, 255, 0.82)"
                    : "rgba(14, 22, 38, 0.72)",
              }}
            >
              {team.caption}
            </Typography>
          </Box>
          <Box
            sx={{
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 5, md: 0 },
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 520 }}>
              <Typography variant="eyebrow" color="brand.secondary">
                Collaborators
              </Typography>
              <Typography variant="h2">{team.title}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {team.description}
              </Typography>
              <Box
                sx={{
                  borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                  pl: 3,
                  py: 1,
                }}
              >
                <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
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


