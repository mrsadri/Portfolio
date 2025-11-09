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
            "radial-gradient(circle at 20% 20%, rgba(90, 200, 250, 0.18), transparent 55%), radial-gradient(circle at 80% 10%, rgba(31, 111, 235, 0.14), transparent 52%)",
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
                      "linear-gradient(180deg, rgba(31,111,235,0.24) 0%, rgba(241,246,255,0) 100%)",
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
                    borderRadius: "28px",
                    boxShadow:
                      "0 24px 48px rgba(31, 111, 235, 0.18), 0 6px 18px rgba(20, 63, 141, 0.2)",
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
                        "linear-gradient(150deg, rgba(90,200,250,0.18) 0%, rgba(241,246,255,1) 100%)",
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

      <Box
        id="case-studies"
        component="section"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.paper" }}
      >
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
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background:
                      item.id === "divar"
                        ? "linear-gradient(135deg, rgba(17, 76, 170, 0.78), rgba(60, 151, 255, 0.72))"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(227, 241, 255, 0.88))",
                    border:
                      item.id === "divar"
                        ? "1px solid rgba(255, 255, 255, 0.28)"
                        : "1px solid rgba(17, 76, 170, 0.08)",
                    color: item.id === "divar" ? "primary.contrastText" : "inherit",
                    boxShadow:
                      item.id === "divar"
                        ? "0 24px 50px rgba(17, 76, 170, 0.24)"
                        : "0 12px 32px rgba(15, 82, 186, 0.08)",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, pb: 3 }}>
                    <Stack spacing={2.5}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.18em",
                            color: item.id === "divar" ? "brand.accent" : "brand.secondary",
                          }}
                        >
                          Case {item.number}
                        </Typography>
                        <Chip
                          label={item.tag}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            letterSpacing: 0.4,
                            color:
                              item.id === "divar" ? "rgba(255, 255, 255, 0.9)" : "brand.secondary",
                            backgroundColor:
                              item.id === "divar"
                                ? "rgba(255, 255, 255, 0.18)"
                                : "rgba(227, 241, 255, 0.8)",
                            borderColor:
                              item.id === "divar" ? "rgba(255, 255, 255, 0.4)" : "transparent",
                            borderWidth: item.id === "divar" ? 1 : 0,
                            borderStyle: "solid",
                          }}
                        />
                      </Stack>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1.32,
                          color: item.id === "divar" ? "rgba(255, 255, 255, 0.95)" : "text.primary",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 500,
                          color:
                            item.id === "divar"
                              ? "rgba(255, 255, 255, 0.85)"
                              : "text.secondary",
                        }}
                      >
                        {item.platform}
                        {item.platformDetail && (
                          <Box
                            component="span"
                            sx={{
                              display: "inline-block",
                              ml: 0.75,
                              color:
                                item.id === "divar"
                                  ? "rgba(255, 255, 255, 0.72)"
                                  : "text.secondary",
                              fontWeight: 400,
                            }}
                          >
                            ({item.platformDetail})
                          </Box>
                        )}
                      </Typography>
                      {item.stat && (
                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              item.id === "divar"
                                ? "rgba(255, 255, 255, 0.88)"
                                : "text.secondary",
                          }}
                        >
                          {item.stat}
                        </Typography>
                      )}
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {item.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor:
                                item.id === "divar"
                                  ? "rgba(255, 255, 255, 0.16)"
                                  : "rgba(31, 111, 235, 0.12)",
                              color:
                                item.id === "divar"
                                  ? "rgba(255, 255, 255, 0.9)"
                                  : "brand.secondary",
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
                      color="primary"
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
                          borderColor: "rgba(255,255,255,0.45)",
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
                      borderTopLeftRadius: (theme) => theme.shape.borderRadius,
                      borderTopRightRadius: (theme) => theme.shape.borderRadius,
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
          background: "linear-gradient(135deg, rgba(31,111,235,0.08), transparent)",
        }}
      >
        <Container>
          <Card
            sx={{
              p: { xs: 4, md: 6 },
              background:
                "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))",
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

