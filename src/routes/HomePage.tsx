import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Grid from "@mui/system/Grid";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  caseStudies,
  experiences,
  hero,
  metrics,
  socialLinks,
} from "../data/home";

type CaseStudyId = (typeof caseStudies)[number]["id"];

const HomePage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<CaseStudyId | null>(null);

  const selectedCaseStudyData = useMemo(
    () => caseStudies.find((item) => item.id === selectedCaseStudy) ?? null,
    [selectedCaseStudy],
  );

  return (
    <>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "radial-gradient(circle at 20% 20%, rgba(64, 145, 108, 0.12), transparent 55%), radial-gradient(circle at 80% 10%, rgba(25, 135, 84, 0.12), transparent 50%)",
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 6, md: 10 }}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Typography variant="subtitle1" color="secondary.main">
                  {hero.greeting}
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: 52, md: 64 } }}>
                  {hero.name}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  {hero.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {hero.subtitle}
                </Typography>
                <Stack spacing={0.5}>
                  {hero.credentials.map((line) => (
                    <Typography key={line} variant="body1" color="text.primary">
                      {line}
                    </Typography>
                  ))}
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={RouterLink}
                    to={hero.ctaPrimary.to}
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon />}
                    size="large"
                  >
                    {hero.ctaPrimary.label}
                  </Button>
                  <Button
                    component={RouterLink}
                    to={hero.ctaSecondary.to}
                    variant="outlined"
                    size="large"
                  >
                    {hero.ctaSecondary.label}
                  </Button>
                </Stack>
                <Button
                  component={RouterLink}
                  to={hero.availability.to}
                  color="secondary"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{ alignSelf: "flex-start" }}
                >
                  {hero.availability.label}
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: { xs: 16, md: 24 },
                    background:
                      "linear-gradient(180deg, rgba(64,145,108,0.2) 0%, rgba(246,247,249,0) 100%)",
                    borderRadius: "50%",
                    filter: "blur(45px)",
                  }}
                />
                <Avatar
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  variant="rounded"
                  sx={{
                    width: { xs: 280, md: 380 },
                    height: { xs: 280, md: 380 },
                    borderRadius: "32px",
                    boxShadow: "0 18px 40px rgba(24, 45, 35, 0.18)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Grid container spacing={3}>
            {metrics.map(({ value, title, description }) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(135deg, rgba(25,135,84,0.08) 0%, rgba(246,247,249,1) 100%)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="p"
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      {value}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.paper" }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography variant="h2">Case studies</Typography>
            <Typography variant="h6" color="text.secondary">
              Examples of the impact I have made
            </Typography>
          </Stack>
          <Grid container spacing={4}>
            {caseStudies.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                <Card
                  sx={{
                    borderRadius: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background:
                      item.id === "divar"
                        ? "linear-gradient(135deg, rgba(27,67,50,0.85), rgba(64,145,108,0.92))"
                        : undefined,
                    color: item.id === "divar" ? "primary.contrastText" : "inherit",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Chip
                          label={item.tag}
                          color={item.id === "divar" ? "default" : "success"}
                          sx={{
                            color: item.id === "divar" ? "inherit" : "brand.primary",
                            backgroundColor:
                              item.id === "divar" ? "rgba(255,255,255,0.16)" : "brand.muted",
                          }}
                        />
                        <Typography variant="subtitle2">{item.number}</Typography>
                      </Stack>
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography variant="subtitle1">
                        {item.platform}
                        {item.platformDetail && (
                          <Typography component="span" color="text.secondary" ml={1}>
                            ({item.platformDetail})
                          </Typography>
                        )}
                      </Typography>
                      {item.stat && (
                        <Typography variant="body1">{item.stat}</Typography>
                      )}
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {item.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            sx={{
                              backgroundColor:
                                item.id === "divar"
                                  ? "rgba(255,255,255,0.18)"
                                  : "rgba(64,145,108,0.12)",
                              color: item.id === "divar" ? "inherit" : "brand.primary",
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
                    <Button
                      component={RouterLink}
                      to={item.to}
                      variant={item.id === "divar" ? "contained" : "outlined"}
                      color={item.id === "divar" ? "secondary" : "primary"}
                      fullWidth
                      endIcon={<ArrowForwardRoundedIcon />}
                    >
                      Explore
                    </Button>
                    <Button
                      fullWidth
                      color="inherit"
                      endIcon={<PlayCircleOutlineRoundedIcon />}
                      onClick={() => setSelectedCaseStudy(item.id)}
                      sx={{
                        ...(item.id === "divar" && {
                          color: "inherit",
                          borderColor: "rgba(255,255,255,0.4)",
                        }),
                      }}
                    >
                      Recap
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography variant="h2">Other Exciting Experience</Typography>
            <Typography variant="h6" color="text.secondary">
              Alongside my professional journey
            </Typography>
          </Stack>
          <Grid container spacing={4}>
            {experiences.map((experience) => (
              <Grid size={{ xs: 12, md: 6 }} key={experience.title}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    component="img"
                    src={experience.image.src}
                    alt={experience.image.alt}
                    sx={{
                      width: "100%",
                      height: 240,
                      objectFit: "cover",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h5">{experience.title}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {experience.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {experience.tags.map((tag) => (
                          <Chip key={tag} label={tag} />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                  {experience.link && (
                    <CardActions sx={{ pt: 0, pb: 3, px: 3 }}>
                      <Button
                        component="a"
                        href={experience.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowForwardRoundedIcon />}
                      >
                        {experience.link.label}
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: "linear-gradient(135deg, rgba(27,67,50,0.08), transparent)",
        }}
      >
        <Container>
          <Card
            sx={{
              borderRadius: 5,
              p: { xs: 4, md: 6 },
              background:
                "linear-gradient(135deg, rgba(27,67,50,0.9), rgba(64,145,108,0.85))",
              color: "primary.contrastText",
            }}
          >
            <Stack spacing={2} alignItems={{ xs: "flex-start", md: "center" }} textAlign={{ xs: "left", md: "center" }}>
              <Typography variant="h3">Let's Connect</Typography>
              <Typography variant="h6" sx={{ maxWidth: 600 }}>
                Feel free to get in touch
              </Typography>
              <Button
                component="a"
                href="mailto:sdarimasih@gmail.com"
                variant="contained"
                color="secondary"
                size="large"
              >
                sdarimasih@gmail.com
              </Button>
              <Stack direction="row" spacing={2}>
                {socialLinks.map(({ label, href }) => (
                  <Button
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    color="inherit"
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Card>
        </Container>
      </Box>

      <Dialog
        open={Boolean(selectedCaseStudyData)}
        onClose={() => setSelectedCaseStudy(null)}
        aria-labelledby="case-study-recap-title"
      >
        {selectedCaseStudyData && (
          <>
            <DialogTitle id="case-study-recap-title">
              {selectedCaseStudyData.recap.headline}
            </DialogTitle>
            <DialogContent>
              <Stack component="ul" spacing={1.5} sx={{ pl: 2 }}>
                {selectedCaseStudyData.recap.bullets.map((bullet) => (
                  <Typography
                    component="li"
                    key={bullet}
                    variant="body1"
                    color="text.secondary"
                  >
                    {bullet}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={2} mt={3}>
                <Button
                  component={RouterLink}
                  to={selectedCaseStudyData.to}
                  variant="contained"
                  fullWidth
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  Deep dive
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  Close
                </Button>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default HomePage;

