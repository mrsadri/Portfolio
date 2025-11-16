import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Avatar, Box, Card, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "../types";

type TestimonialsSectionProps = {
  testimonials: ReadonlyArray<Testimonial>;
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]);

  const currentTestimonial = testimonials[currentIndex];

  if (!currentTestimonial) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background:
          theme.palette.mode === "light"
            ? "radial-gradient(circle at 50% 50%, rgba(145, 167, 255, 0.06), transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(73, 109, 193, 0.1), transparent 70%)",
      }}
    >
      <Container>
        <Stack spacing={4} alignItems="center">
          <Stack spacing={1.5} alignItems="center" textAlign="center">
            <Typography variant="h2">What People Say</Typography>
            <Typography variant="h6" color="text.secondary">
              Recommendations from colleagues and mentees
            </Typography>
          </Stack>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", md: "85%", lg: "1200px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Left Arrow */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                left: { xs: -12, md: -24 },
                zIndex: 2,
                backgroundColor: theme.palette.background.paper,
                border: (theme) => `1px solid ${theme.tokens.colors.border}`,
                boxShadow: (theme) =>
                  theme.palette.mode === "light"
                    ? "0 4px 12px rgba(17, 36, 83, 0.1)"
                    : "0 4px 12px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  backgroundColor: theme.palette.background.paper,
                  transform: "scale(1.05)",
                },
                minWidth: 44,
                minHeight: 44,
                width: { xs: 44, md: 48 },
                height: { xs: 44, md: 48 },
                transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:focus-visible": {
                  outline: `3px solid ${theme.palette.mode === "light" ? "rgba(34, 84, 255, 0.4)" : "rgba(145, 167, 255, 0.5)"}`,
                  outlineOffset: 2,
                },
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeftRoundedIcon fontSize="medium" />
            </IconButton>

            {/* Testimonial Card */}
            <Card
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "80%" },
                px: { xs: 4, md: 8, lg: 10 },
                py: { xs: 5, md: 6, lg: 8 },
                borderRadius: (theme) => theme.tokens.radius.lg,
                border: (theme) => `1px solid ${theme.tokens.colors.border}`,
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(18, 18, 18, 0.8)",
                boxShadow: (theme) =>
                  theme.palette.mode === "light"
                    ? "0 8px 32px rgba(17, 36, 83, 0.12)"
                    : "0 8px 32px rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Stack spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
                {/* Quote Text */}
                <Typography
                  variant="h4"
                  component="blockquote"
                  sx={{
                    fontFamily: '"Georgia", "Times New Roman", serif',
                    fontSize: { xs: "1.5rem", md: "1.75rem", lg: "2rem" },
                    lineHeight: { xs: 1.7, md: 1.75 },
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    fontStyle: "italic",
                    position: "relative",
                    pl: { xs: 3, md: 4 },
                    "&::before": {
                      content: '"\\201C"',
                      position: "absolute",
                      left: 0,
                      top: { xs: "-0.2em", md: "-0.3em" },
                      fontSize: { xs: "3rem", md: "4rem" },
                      lineHeight: 1,
                      color: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.2)" : "rgba(98, 132, 218, 0.3)",
                      fontFamily: '"Georgia", serif',
                    },
                  }}
                >
                  {currentTestimonial.quote}
                </Typography>

                {/* Author Section */}
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    width: "100%",
                    pt: 1,
                  }}
                >
                  <Avatar
                    src={currentTestimonial.author.image?.src}
                    alt={currentTestimonial.author.image?.alt || `${currentTestimonial.author.name} avatar`}
                    sx={{
                      width: { xs: 56, md: 64 },
                      height: { xs: 56, md: 64 },
                      border: (theme) => `2px solid ${theme.tokens.colors.border}`,
                    }}
                  >
                    {currentTestimonial.author.name.charAt(0)}
                  </Avatar>
                  <Stack spacing={0.5} sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.9375rem", md: "1rem" },
                        textTransform: "none",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {currentTestimonial.author.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8125rem", md: "0.875rem" },
                        lineHeight: 1.4,
                      }}
                    >
                      {currentTestimonial.author.position}
                      {currentTestimonial.author.company && ` • ${currentTestimonial.author.company}`}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: "0.75rem", md: "0.8125rem" },
                        color: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.7)" : "rgba(98, 132, 218, 0.7)",
                        fontWeight: 500,
                        mt: 0.25,
                      }}
                    >
                      {currentTestimonial.author.relationship}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>

            {/* Right Arrow */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: { xs: -12, md: -24 },
                zIndex: 2,
                backgroundColor: theme.palette.background.paper,
                border: (theme) => `1px solid ${theme.tokens.colors.border}`,
                boxShadow: (theme) =>
                  theme.palette.mode === "light"
                    ? "0 4px 12px rgba(17, 36, 83, 0.1)"
                    : "0 4px 12px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  backgroundColor: theme.palette.background.paper,
                  transform: "scale(1.05)",
                },
                minWidth: 44,
                minHeight: 44,
                width: { xs: 44, md: 48 },
                height: { xs: 44, md: 48 },
                transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:focus-visible": {
                  outline: `3px solid ${theme.palette.mode === "light" ? "rgba(34, 84, 255, 0.4)" : "rgba(145, 167, 255, 0.5)"}`,
                  outlineOffset: 2,
                },
              }}
              aria-label="Next testimonial"
            >
              <ChevronRightRoundedIcon fontSize="medium" />
            </IconButton>
          </Box>

          {/* Carousel Indicators */}
          <Stack direction="row" spacing={1.5} justifyContent="center" alignItems="center">
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: { xs: 12, md: 10 },
                  height: { xs: 12, md: 10 },
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentIndex
                      ? theme.palette.brand.secondary
                      : theme.palette.mode === "light"
                        ? "rgba(31, 111, 235, 0.2)"
                        : "rgba(98, 132, 218, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  minWidth: 12,
                  minHeight: 12,
                  "&:hover": {
                    backgroundColor:
                      index === currentIndex
                        ? theme.palette.brand.secondary
                        : theme.palette.mode === "light"
                          ? "rgba(31, 111, 235, 0.4)"
                          : "rgba(98, 132, 218, 0.5)",
                    transform: "scale(1.2)",
                  },
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;

