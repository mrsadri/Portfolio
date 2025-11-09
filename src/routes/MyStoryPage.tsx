// File: src/routes/MyStoryPage.tsx
// Purpose: Builds the “My Story” route showcasing personal narrative, gallery, books, education, and testimonials.
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import {
  books,
  certificates,
  education,
  emojiList,
  gallery,
  philosophyText,
  readingJourney,
  references,
  storyHero,
  team,
} from "../data/myStory";

const MyStoryPage = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(135deg, rgba(31,111,235,0.08), rgba(90,200,250,0.12))",
        }}
      >
        <Container>
          <Stack spacing={3} textAlign="center" alignItems="center">
            <Typography variant="h2">{storyHero.title}</Typography>
            <Typography variant="h4" color="text.secondary">
              {storyHero.subtitle}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 720 }}
            >
              {storyHero.description}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={3}>
            {gallery.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.caption}>
                <Card>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.alt}
                    sx={{
                      width: "100%",
                      height: 280,
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography variant="subtitle1">{item.caption}</Typography>
                      {item.subcaption && (
                        <Typography variant="body2" color="text.secondary">
                          {item.subcaption}
                        </Typography>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "background.paper",
        }}
      >
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3" sx={{ maxWidth: 800 }}>
              {philosophyText}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              If I were to describe myself using emojis, it would look like this:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
              {emojiList.map((emoji) => (
                <Typography
                  key={emoji}
                  component="span"
                  sx={{ fontSize: 32, lineHeight: 1 }}
                >
                  {emoji}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
            >
              <Box sx={{ maxWidth: 720 }}>
                <Typography variant="h2">
                  {readingJourney.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {readingJourney.subtitle}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "brand.muted",
                  borderRadius: 16,
                  px: 3,
                  py: 2,
                }}
              >
                <Typography variant="caption" color="brand.primary">
                  {readingJourney.currentlyReading.label}
                </Typography>
                <Typography variant="subtitle1">
                  {readingJourney.currentlyReading.title}
                </Typography>
              </Box>
            </Stack>
            <Grid container spacing={3}>
              {books.map((book) => (
                <Grid size={{ xs: 12, md: 6 }} key={book.title}>
                  <Card sx={{ height: "100%" }}>
                    <Grid container>
                      <Grid size={{ xs: 12, sm: 5 }}>
                        <Box
                          component="img"
                          src={book.cover}
                          alt={`Cover of ${book.title}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopLeftRadius: 16,
                            borderBottomLeftRadius: { sm: 16 },
                            borderTopRightRadius: { xs: 16, sm: 0 },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 7 }}>
                        <CardContent
                          sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 2 }}
                        >
                          <Stack spacing={1}>
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
                          <Stack component="ul" spacing={1} sx={{ pl: 2, mb: 0 }}>
                            {book.takeaways.map((takeaway) => (
                              <Typography
                                component="li"
                                key={takeaway}
                                variant="body2"
                                color="text.secondary"
                              >
                                {takeaway}
                              </Typography>
                            ))}
                          </Stack>
                          {book.highlight && (
                            <Chip
                              label={book.highlight}
                              color="secondary"
                              sx={{ alignSelf: "flex-start" }}
                            />
                          )}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "background.paper",
        }}
      >
        <Container>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={team.image}
                alt={team.alt}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0 18px 40px rgba(24, 45, 35, 0.18)",
                }}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1.5, display: "block" }}
              >
                {team.caption}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Typography variant="h2">{team.title}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {team.description}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <SchoolRoundedIcon color="primary" />
              <Typography variant="h2">Education</Typography>
            </Stack>
            <Grid container spacing={3}>
              {education.map((item) => (
                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Chip label={item.badge} color="primary" />
                          <Typography variant="caption" color="text.secondary">
                            {item.date}
                          </Typography>
                        </Stack>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {item.institution}
                        </Typography>
                        {item.details && (
                          <Stack component="ul" spacing={1} sx={{ pl: 2, mb: 0 }}>
                            {item.details.map((detail) => (
                              <Typography
                                component="li"
                                key={detail}
                                variant="body2"
                                color="text.secondary"
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "background.paper",
        }}
      >
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <EmojiEventsRoundedIcon color="secondary" />
              <Typography variant="h2">Certificates & Training</Typography>
            </Stack>
            <Grid container spacing={3}>
              {certificates.map((certificate) => (
                <Grid size={{ xs: 12, md: 4 }} key={certificate.title}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Chip label={certificate.badge} />
                          <Typography variant="caption" color="text.secondary">
                            {certificate.date}
                          </Typography>
                        </Stack>
                        <Typography variant="h6">{certificate.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {certificate.institution}
                        </Typography>
                        {certificate.hours && (
                          <Typography variant="body2" color="text.secondary">
                            {certificate.hours}
                          </Typography>
                        )}
                        {certificate.score && (
                          <Typography variant="body2" color="text.secondary">
                            {certificate.score}
                          </Typography>
                        )}
                        {certificate.topics && (
                          <Typography variant="body2" color="text.secondary">
                            {certificate.topics}
                          </Typography>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <VolunteerActivismRoundedIcon color="secondary" />
              <Typography variant="h2">References</Typography>
            </Stack>
            <Grid container spacing={3}>
              {references.map((reference) => (
                <Grid size={{ xs: 12, md: 4 }} key={reference.name}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <Stack spacing={0.5}>
                        <Typography variant="h6">{reference.name}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {reference.role}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {reference.date}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {reference.text}
                      </Typography>
                      <Chip
                        component="a"
                        href={reference.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        label="LinkedIn"
                        clickable
                        sx={{ alignSelf: "flex-start" }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MyStoryPage;

