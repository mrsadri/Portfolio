import { Box, Container, Stack, Typography } from "@mui/material";
import type { StoryHero } from "../types";

type HeroSectionProps = {
  hero: StoryHero;
};

const HeroSection = ({ hero }: HeroSectionProps) => (
  <Box
    component="header"
    sx={(theme) => ({
      py: { xs: 10, md: 14 },
      backgroundColor:
        theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.6)" : "rgba(8, 14, 26, 0.85)",
    })}
  >
    <Container>
      <Stack
        spacing={{ xs: 3, md: 4 }}
        sx={{
          maxWidth: 840,
          mx: "auto",
          textAlign: { xs: "left", md: "center" },
        }}
      >
        <Typography variant="display">{hero.title}</Typography>
        <Typography variant="hero" color="text.secondary">
          {hero.subtitle}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {hero.description}
        </Typography>
      </Stack>
    </Container>
  </Box>
);

export default HeroSection;


