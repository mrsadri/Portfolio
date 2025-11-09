// File: src/routes/ContactPage.tsx
// Purpose: Presents contact options, mentorship offerings, and help topics for reaching out to Masih.
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import {
  contactHero,
  contactMethods,
  helpTopics,
  mentorshipOffers,
  responseTime,
} from "../data/contact";

const ContactPage = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(135deg, rgba(31,111,235,0.12), rgba(90,200,250,0.16))",
        }}
      >
        <Container>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2">{contactHero.title}</Typography>
            <Typography variant="h4" color="text.secondary">
              {contactHero.subtitle}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 720 }}
            >
              {contactHero.description}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={3}>
            {contactMethods.map((method) => (
              <Grid size={{ xs: 12, md: 4 }} key={method.title}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Stack spacing={2} alignItems="flex-start">
                      <Typography
                        variant="h3"
                        component="span"
                        sx={{ lineHeight: 1 }}
                      >
                        {method.icon}
                      </Typography>
                      <Typography variant="h5">{method.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {method.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button
                      component="a"
                      href={method.href}
                      target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                      }
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      {method.actionLabel}
                    </Button>
                  </CardActions>
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
          <Stack spacing={3} alignItems="center" textAlign="center" mb={4}>
            <Typography variant="h2">Mentorship & Sessions</Typography>
            <Typography variant="h6" color="text.secondary">
              Looking for a mentor or someone to chat with?
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {mentorshipOffers.map((offer) => (
              <Grid size={{ xs: 12, md: 6 }} key={offer.title}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          offer.featured
                            ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))"
                            : undefined,
                        color: offer.featured ? "primary.contrastText" : undefined,
                      }}
                    >
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="h5">{offer.title}</Typography>
                          <Chip
                            icon={<ScheduleRoundedIcon />}
                            label={offer.duration}
                            color={offer.featured ? "default" : "primary"}
                            sx={{
                              ...(offer.featured && {
                                backgroundColor: "rgba(255,255,255,0.18)",
                                color: "inherit",
                              }),
                            }}
                          />
                      </Stack>
                      <Typography variant="body1" color={offer.featured ? "inherit" : "text.secondary"}>
                        {offer.description}
                      </Typography>
                      {offer.note && (
                        <Typography variant="body2" color={offer.featured ? "inherit" : "text.secondary"}>
                          {offer.note}
                        </Typography>
                      )}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button
                      component="a"
                      href={offer.href}
                      variant="contained"
                      color={offer.featured ? "secondary" : "primary"}
                      fullWidth
                    >
                      Schedule via Email
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={3} mb={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <VolunteerActivismRoundedIcon color="secondary" />
              <Typography variant="h2">What I Can Help With</Typography>
            </Stack>
            <Grid container spacing={3}>
              {helpTopics.map((topic) => (
                <Grid size={{ xs: 12, md: 6 }} key={topic.title}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={1.5}>
                        <Typography variant="h5">{topic.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {topic.description}
                        </Typography>
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
          <Card sx={{ p: { xs: 4, md: 5 } }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <AlternateEmailRoundedIcon color="primary" />
                <Typography variant="h4">{responseTime.title}</Typography>
              </Stack>
              {responseTime.paragraphs.map((paragraph) => (
                <Typography key={paragraph} variant="body1" color="text.secondary">
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Card>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Card
            sx={{
              p: { xs: 4, md: 5 },
              background:
                "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))",
              color: "primary.contrastText",
            }}
          >
            <Stack spacing={2} alignItems="flex-start">
              <Stack direction="row" spacing={1} alignItems="center">
                <Diversity3RoundedIcon />
                <Typography variant="h5">
                  Prefer async communication?
                </Typography>
              </Stack>
              <Typography variant="body1">
                Send me an email with your context, and I’ll tailor the conversation so our call is focused and impactful.
              </Typography>
              <Button
                component="a"
                href="mailto:sdarimasih@gmail.com"
                variant="contained"
                color="secondary"
              >
                Email Masih
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;

