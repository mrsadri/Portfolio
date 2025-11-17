import { Box, Container, Stack, Typography, useTheme, IconButton } from "@mui/material";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useScrollAnimation } from "@shared/utils/useScrollAnimation";
import { getSectionStyles, SECTION_PADDING } from "@shared/utils/sectionBackgrounds";
import type { TeamMemory } from "../types";

type TeamSectionProps = {
  memories: ReadonlyArray<TeamMemory>;
};

const TeamSection = ({ memories }: TeamSectionProps) => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMemory = memories[activeIndex];

  if (!activeMemory) {
    return null;
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % memories.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-advance disabled by default - uncomment to enable
  // import { useEffect } from "react"; // Add this import if enabling auto-advance
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % memories.length);
  //   }, 8000); // Change slide every 8 seconds
  //   return () => clearInterval(interval);
  // }, [memories.length]);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: SECTION_PADDING.large,
        ...getSectionStyles("medium", theme),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Container disableGutters maxWidth={false}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1.15fr 0.85fr" },
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 360, sm: 420, md: 520 },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: { xs: 360, sm: 420, md: 520 },
              }}
            >
              {memories.map((memory, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: index === activeIndex ? 1 : 0,
                    transform: `translateX(${index === activeIndex ? 0 : index < activeIndex ? -20 : 20}px)`,
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    pointerEvents: index === activeIndex ? "auto" : "none",
                  }}
                >
                  <Box
                    component="img"
                    src={memory.image.src}
                    alt={memory.image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      position: "absolute",
                      bottom: { xs: 16, md: 24 },
                      left: { xs: 16, md: 32 },
                      px: 2,
                      py: 0.75,
                      borderRadius: theme.tokens.radius.pill,
                      backdropFilter: "blur(16px)",
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "rgba(255, 255, 255, 0.95)"
                          : "rgba(14, 22, 38, 0.95)",
                      color:
                        theme.palette.mode === "light"
                          ? "rgba(0, 0, 0, 0.87)"
                          : "rgba(255, 255, 255, 0.92)",
                      fontWeight: 500,
                      boxShadow:
                        theme.palette.mode === "light"
                          ? "0 2px 8px rgba(0, 0, 0, 0.1)"
                          : "0 2px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {memory.caption}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 5, md: 8 },
              position: "relative",
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 520 }}>
              <Typography variant="eyebrow" color="brand.secondary">
                Memories
              </Typography>
              <Typography variant="h2">{activeMemory.title}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {activeMemory.description}
              </Typography>
              {activeMemory.quote && (
                <Box
                  sx={{
                    borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                    pl: 3,
                    py: 1,
                  }}
                >
                  <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    &ldquo;{activeMemory.quote}&rdquo;
                  </Typography>
                </Box>
              )}
            </Stack>

            {/* Vertical Scroll Indicator */}
            <Box
              sx={{
                position: "absolute",
                right: { xs: 8, sm: 16, md: 24 },
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 0.5, md: 1 },
                zIndex: 10,
              }}
            >
              <IconButton
                onClick={handlePrevious}
                disabled={activeIndex === 0}
                size="small"
                sx={{
                  color: activeIndex === 0 ? "text.disabled" : "text.secondary",
                  opacity: activeIndex === 0 ? 0.3 : 1,
                  transition: "opacity 0.2s ease",
                  "&:hover": {
                    opacity: activeIndex === 0 ? 0.3 : 0.8,
                  },
                  "&.Mui-disabled": {
                    opacity: 0.2,
                  },
                }}
                aria-label="Previous memory"
              >
                <KeyboardArrowUpIcon fontSize="small" />
              </IconButton>

              <Stack spacing={{ xs: 0.75, md: 1 }} sx={{ alignItems: "center", py: { xs: 0.5, md: 1 } }}>
                {memories.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => handleDotClick(index)}
                    sx={{
                      width: { xs: 6, md: 8 },
                      height: { xs: 6, md: 8 },
                      borderRadius: "50%",
                      backgroundColor:
                        index === activeIndex
                          ? theme.palette.mode === "light"
                            ? "rgba(0, 0, 0, 0.87)"
                            : "rgba(255, 255, 255, 0.92)"
                          : theme.palette.mode === "light"
                            ? "rgba(0, 0, 0, 0.26)"
                            : "rgba(255, 255, 255, 0.3)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.3)",
                        backgroundColor:
                          index === activeIndex
                            ? theme.palette.mode === "light"
                              ? "rgba(0, 0, 0, 0.87)"
                              : "rgba(255, 255, 255, 0.92)"
                            : theme.palette.mode === "light"
                              ? "rgba(0, 0, 0, 0.4)"
                              : "rgba(255, 255, 255, 0.5)",
                      },
                    }}
                    aria-label={`Go to memory ${index + 1}`}
                  />
                ))}
              </Stack>

              <IconButton
                onClick={handleNext}
                disabled={activeIndex === memories.length - 1}
                size="small"
                sx={{
                  color: activeIndex === memories.length - 1 ? "text.disabled" : "text.secondary",
                  opacity: activeIndex === memories.length - 1 ? 0.3 : 1,
                  transition: "opacity 0.2s ease",
                  "&:hover": {
                    opacity: activeIndex === memories.length - 1 ? 0.3 : 0.8,
                  },
                  "&.Mui-disabled": {
                    opacity: 0.2,
                  },
                }}
                aria-label="Next memory"
              >
                <KeyboardArrowDownIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
