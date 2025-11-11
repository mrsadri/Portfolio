import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Pill } from "../../../shared/ui";
import SectionHeader from "./SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { Book, ReadingJourney } from "../types";

type ReadingJourneySectionProps = {
  journey: ReadingJourney;
  books: ReadonlyArray<Book>;
};

const ReadingJourneySection = ({ journey, books }: ReadingJourneySectionProps) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
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
                      width: 160,
                      objectFit: "cover",
                      borderTopLeftRadius: theme.tokens.radius.surface,
                      borderBottomLeftRadius: theme.tokens.radius.surface,
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      flexGrow: 1,
                    }}
                  >
                    <Stack spacing={0.75}>
                      <Typography variant="caption" color="text.secondary">
                        {book.label}
                      </Typography>
                      <Typography variant="h5">{book.title}</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {book.author}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {book.summary}
                    </Typography>
                    <Stack component="ul" spacing={0.75} sx={{ pl: 2, mb: 0 }}>
                      {book.takeaways.map((takeaway) => (
                        <Typography component="li" key={takeaway} variant="body2" color="text.secondary">
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


