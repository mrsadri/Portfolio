import { Box, Container, Stack, Typography } from "@mui/material";
import type { ContactHero } from "../types";

type HeroSectionProps = {
  hero: ContactHero;
};

const HeroSection = ({ hero }: HeroSectionProps) => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      background: "linear-gradient(135deg, rgba(31,111,235,0.12), rgba(90,200,250,0.16))",
    }}
  >
    <Container>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Typography variant="h2">{hero.title}</Typography>
        <Typography variant="h4" color="text.secondary">
          {hero.subtitle}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 720 }}>
          {hero.description}
        </Typography>
      </Stack>
    </Container>
  </Box>
);

export default HeroSection;


