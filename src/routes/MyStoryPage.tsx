// File: src/routes/MyStoryPage.tsx
// Purpose: Reimagines the My Story route with unified design tokens, consistent surfaces, and clear hierarchy across personal narrative, gallery, and credentials.
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  MobileStepper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { CardProps } from "@mui/material/Card";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import Seo from "../components/Seo";
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
import Pill from "../components/ui/Pill";
import GhostButton from "../components/ui/GhostButton";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "center" | "left";
};

const SectionHeader = ({ eyebrow, title, subtitle, icon, align = "center" }: SectionHeaderProps) => (
  <Stack
    spacing={1.5}
    alignItems={align === "center" ? "center" : "flex-start"}
    textAlign={align}
  >
    {(icon || eyebrow) && (
      <Stack direction="row" spacing={1} alignItems="center">
        {icon}
        {eyebrow && (
          <Typography variant="tag" color="brand.secondary">
            {eyebrow}
          </Typography>
        )}
      </Stack>
    )}
    <Typography variant="h2">{title}</Typography>
    {subtitle && (
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ maxWidth: align === "center" ? 720 : 640, lineHeight: 1.6 }}
      >
        {subtitle}
      </Typography>
    )}
  </Stack>
);

const SurfaceCard = ({ sx, children, ...props }: CardProps) => (
  <Card
    elevation={0}
    variant="outlined"
    sx={{
      borderRadius: (theme) => theme.tokens.radius.surface,
      boxShadow: "none",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Card>
);

const LifeInFramesSlider = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const slidesPerView = isMdUp ? 3 : isSmUp ? 2 : 1;

  const maxIndex = useMemo(
    () => Math.max(0, gallery.length - slidesPerView),
    [slidesPerView],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handleStep = (direction: -1 | 1) => {
    setActiveIndex((prev) => Math.min(maxIndex, Math.max(0, prev + direction)));
  };

  const slideWidthPercent = 100 / slidesPerView;

  return (
    <Box position="relative">
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: (theme) => theme.tokens.radius.xl,
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 360ms ease",
            transform: `translateX(-${activeIndex * slideWidthPercent}%)`,
            width: `${(gallery.length * 100) / slidesPerView}%`,
          }}
        >
          {gallery.map((item) => (
            <SurfaceCard
              key={item.caption}
              sx={{
                flex: `0 0 ${slideWidthPercent}%`,
                mx: { xs: 0.75, md: 1.25 },
                overflow: "hidden",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.alt}
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: 300, md: 320 },
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h5">{item.caption}</Typography>
                  {item.subcaption && (
                    <Typography variant="body2" color="text.secondary">
                      {item.subcaption}
                    </Typography>
                  )}
                </Stack>
              </CardContent>
            </SurfaceCard>
          ))}
        </Box>
      </Box>

      <IconButton
        aria-label="Previous photo"
        onClick={() => handleStep(-1)}
        disabled={activeIndex === 0}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 6, sm: 12 },
          transform: "translateY(-50%)",
          backgroundColor: "background.paper",
          boxShadow: activeIndex === 0 ? "none" : theme.tokens.shadow.level1,
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <ArrowBackIosNewRoundedIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="Next photo"
        onClick={() => handleStep(1)}
        disabled={activeIndex === maxIndex}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 6, sm: 12 },
          transform: "translateY(-50%)",
          backgroundColor: "background.paper",
          boxShadow: activeIndex === maxIndex ? "none" : theme.tokens.shadow.level1,
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <ArrowForwardIosRoundedIcon fontSize="small" />
      </IconButton>

      <MobileStepper
        variant="dots"
        steps={maxIndex + 1}
        position="static"
        activeStep={activeIndex}
        sx={{
          background: "transparent",
          justifyContent: "center",
          mt: 3,
          "& .MuiMobileStepper-dot": {
            width: 8,
            height: 8,
          },
        }}
        nextButton={
          <IconButton
            size="small"
            onClick={() => handleStep(1)}
            disabled={activeIndex === maxIndex}
            aria-label="Next slide"
          >
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={() => handleStep(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
          >
            <ArrowBackIosNewRoundedIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

const MyStoryPage = () => {
  const theme = useTheme();
  const siteUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
    "https://mrsadri.github.io/Portfolio";
  const heroImage = gallery[0]?.image;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Masih Sadri — My Story",
    description: storyHero.description,
    url: `${siteUrl}/my-story`,
    image: heroImage,
    primaryTopic: {
      "@type": "Person",
      name: "Masih Sadri",
      jobTitle: "Senior Product Designer",
      sameAs: [
        "https://www.linkedin.com/in/msadri/",
        "https://www.figma.com/@masih",
        "https://masih.framer.website/",
      ],
    },
  } as const;

  return (
    <>
      <Seo
        title="My Story — Masih Sadri’s path as a product designer"
        description="Learn how Masih Sadri blends mentorship, experimentation, and craft to design human experiences—from classroom to product launches."
        canonicalPath="/my-story"
        openGraph={{
          type: "profile",
          image: heroImage
            ? { url: heroImage, alt: "Masih Sadri documenting personal journey" }
            : undefined,
        }}
        structuredData={structuredData}
      />
      <Box
        component="header"
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor:
            theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.6)" : "rgba(8, 14, 26, 0.85)",
        }}
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
            <Typography variant="tag" color="brand.secondary" sx={{ textAlign: "left" }}>
              My story
            </Typography>
            <Typography variant="display">{storyHero.title}</Typography>
            <Typography variant="hero" color="text.secondary">
              {storyHero.subtitle}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              {storyHero.description}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          pt: { xs: 2, md: 4 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container>
          <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
            <Typography variant="eyebrow" color="brand.secondary">
              Photo Strip
            </Typography>
            <Typography variant="h3">Layers of the everyday</Typography>
            <Typography variant="body1" color="text.secondary">
              A glimpse into the textures, people, and scenes that shape how I approach product
              design—unfiltered, a little imperfect, and very alive.
            </Typography>
          </Stack>
        </Container>
        <Container disableGutters maxWidth={false} sx={{ mt: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Box
              sx={{
                columnCount: { xs: 2, sm: 3, md: 5 },
                columnGap: { xs: 1.5, md: 2.5 },
              }}
            >
              {gallery.map((item) => (
                <Box
                  key={`${item.caption}-${item.image}`}
                  sx={{
                    breakInside: "avoid",
                    mb: { xs: 1.5, md: 2.5 },
                    borderRadius: (theme) => theme.tokens.radius.surface,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.alt}
                    sx={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

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

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Stack spacing={5}>
            <SectionHeader
              eyebrow="Reading Journey"
              title={readingJourney.title}
              subtitle={readingJourney.subtitle}
              align="left"
            />
            <Grid container spacing={3} alignItems="stretch">
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={3}>
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
                          src={book.cover}
                          alt={`Cover of ${book.title}`}
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
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

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

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Stack spacing={5}>
            <SectionHeader
              eyebrow="Education"
              title="Academic Foundations"
              icon={<SchoolRoundedIcon color="primary" />}
              align="left"
            />
            <Grid container spacing={3}>
              {education.map((item) => (
                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                  <SurfaceCard sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Pill label={item.badge} size="small" />
                          <Typography variant="caption" color="text.secondary">
                            {item.date}
                          </Typography>
                        </Stack>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {item.institution}
                        </Typography>
                        {item.details && (
                          <Stack component="ul" spacing={0.75} sx={{ pl: 2, mb: 0 }}>
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
                  </SurfaceCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container>
          <Stack spacing={5}>
            <SectionHeader
              eyebrow="Continuous Learning"
              title="Certificates & Training"
              icon={<EmojiEventsRoundedIcon color="secondary" />}
              align="left"
            />
            <Grid container spacing={3}>
              {certificates.map((certificate) => (
                <Grid size={{ xs: 12, md: 4 }} key={certificate.title}>
                  <SurfaceCard sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Pill label={certificate.badge} size="small" />
                          <Typography variant="caption" color="text.secondary">
                            {certificate.date}
                          </Typography>
                        </Stack>
                        <Typography variant="h5">{certificate.title}</Typography>
                        {certificate.institution && (
                          <Typography variant="subtitle1" color="text.secondary">
                            {certificate.institution}
                          </Typography>
                        )}
                        {[certificate.hours, certificate.score, certificate.topics]
                          .filter(Boolean)
                          .map((detail) => (
                            <Typography key={detail} variant="body2" color="text.secondary">
                              {detail}
                            </Typography>
                          ))}
                      </Stack>
                    </CardContent>
                  </SurfaceCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Stack spacing={5}>
            <SectionHeader
              eyebrow="References"
              title="What My Partners Say"
              icon={<VolunteerActivismRoundedIcon color="secondary" />}
              align="left"
            />
            <Grid container spacing={3}>
              {references.map((reference) => (
                <Grid size={{ xs: 12, md: 4 }} key={reference.name}>
                  <SurfaceCard sx={{ height: "100%" }}>
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}
                    >
                      <Stack spacing={0.5}>
                        <Typography variant="h5">{reference.name}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {reference.role}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {reference.date}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {reference.text}
                      </Typography>
                      <GhostButton
                        component="a"
                        href={reference.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{
                          mt: "auto",
                          alignSelf: "flex-start",
                          borderColor:
                            theme.palette.mode === "light"
                              ? "rgba(17, 76, 170, 0.22)"
                              : "rgba(122, 162, 255, 0.35)",
                          color:
                            theme.palette.mode === "light"
                              ? theme.palette.brand.secondary
                              : "rgba(221, 230, 255, 0.92)",
                          "&:hover": {
                            borderColor:
                              theme.palette.mode === "light"
                                ? "rgba(17, 76, 170, 0.42)"
                                : "rgba(122, 162, 255, 0.55)",
                            backgroundColor:
                              theme.palette.mode === "light"
                                ? "rgba(31, 111, 235, 0.08)"
                                : "rgba(122, 162, 255, 0.16)",
                          },
                        }}
                      >
                        View on LinkedIn
                      </GhostButton>
                    </CardContent>
                  </SurfaceCard>
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


