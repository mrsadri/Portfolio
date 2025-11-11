import Grid from "@mui/system/Grid";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

type PhilosophySectionProps = {
  philosophyText: string;
  emojiList: readonly string[];
};

const PhilosophySection = ({ philosophyText, emojiList }: PhilosophySectionProps) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: "transparent",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <Typography
                variant="h3"
                sx={{
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                {philosophyText}
              </Typography>
              <Box
                sx={{
                  borderLeft: `3px solid ${theme.tokens.colors.primary}`,
                  pl: 2,
                  py: 1,
                }}
              >
                <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  I am driven by experiences—designing them, learning from them, and living them
                  deeply.
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                My friends often describe me as someone with layers—curiosity keeps me exploring
                new crafts, communities, and challenges. It’s how I stay grounded and inspired.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              spacing={3.5}
              sx={{
                borderRadius: "48px",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 },
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(244, 247, 251, 0.7)"
                    : "rgba(14, 22, 38, 0.7)",
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="body1" color="text.secondary">
                  These small rituals shape the way I design and collaborate:
                </Typography>
                <Typography variant="h6">
                  From music and ceramics to plants, cooking, and collaborative games—I’m most
                  alive when I’m building with others.
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={{ xs: 2, md: 3 }}
                flexWrap="wrap"
                useFlexGap
                justifyContent={{ xs: "flex-start", md: "space-between" }}
              >
                {emojiList.map((emoji) => (
                  <Typography
                    key={emoji}
                    component="span"
                    sx={{
                      fontSize: { xs: 56, sm: 64 },
                      lineHeight: 1,
                      flexBasis: { xs: "auto", md: "30%" },
                      textAlign: "center",
                    }}
                  >
                    {emoji}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PhilosophySection;


