import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Pill } from "@shared/ui";
import { useScrollAnimation } from "@shared/utils/useScrollAnimation";
import { getSectionStyles, SECTION_PADDING } from "@shared/utils/sectionBackgrounds";
import SectionHeader from "@shared/components/SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { Book, ReadingJourney } from "../types";

type ReadingJourneySectionProps = {
  journey: ReadingJourney;
  books: ReadonlyArray<Book>;
};

const ReadingJourneySection = ({ journey, books }: ReadingJourneySectionProps) => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: SECTION_PADDING.standard,
        ...getSectionStyles("paper", theme),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Container>
        <Stack spacing={5}>
          <SectionHeader
            eyebrow="Reading Journey"
            title={journey.title}
            subtitle={journey.subtitle}
            align="left"
          />
          <Grid container spacing={3} alignItems="stretch">
            {books.map((book) => (
              <Grid size={{ xs: 12, md: 6 }} key={book.title}>
                <SurfaceCard
                  sx={{
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <Box
                    component="img"
                    src={book.cover.src}
                    alt={book.cover.alt}
                    loading="lazy"
                    sx={{
                      width: { xs: 120, md: 160 },
                      height: { xs: "auto", md: "100%" },
                      aspectRatio: "2/3",
                      objectFit: "cover",
                      borderTopLeftRadius: theme.tokens.radius.surface,
                      borderBottomLeftRadius: theme.tokens.radius.surface,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2.5,
                      flexGrow: 1,
                      pt: 2.5,
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {book.label}
                      </Typography>
                      <Typography variant="h5" sx={{ lineHeight: 1.3 }}>
                        {book.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                        {book.author}
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                        pt: 2,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {book.summary}
                      </Typography>
                    </Box>
                    <Stack component="ul" spacing={1} sx={{ pl: 2.5, mb: 0 }}>
                      {book.takeaways.map((takeaway) => (
                        <Typography
                          component="li"
                          key={takeaway}
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6 }}
                        >
                          {takeaway}
                        </Typography>
                      ))}
                    </Stack>
                    {book.highlight && (
                      <Pill
                        label={book.highlight}
                        size="small"
                        sx={{
                          alignSelf: "flex-start",
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
                    )}
                  </CardContent>
                </SurfaceCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ReadingJourneySection;


