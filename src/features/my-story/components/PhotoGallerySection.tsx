import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useScrollAnimation } from "@shared/utils/useScrollAnimation";
import { getSectionStyles, SECTION_PADDING } from "@shared/utils/sectionBackgrounds";
import type { GalleryItem } from "../types";

type PhotoGallerySectionProps = {
  items: ReadonlyArray<GalleryItem>;
};

// Layout configuration constants
// MUI spacing unit = 8px, so gap: 2 = 16px, gap: 3 = 24px, gap: 4 = 32px
const GALLERY_CONFIG = {
  gap: {
    xs: 2, // 16px
    sm: 3, // 24px
    md: 4, // 32px
  },
  columns: {
    xs: 1, // Single column with horizontal scroll
    sm: 3, // 3 columns
    md: 5, // 5 columns
  },
  mobileItemWidth: "200px", // Fixed width for horizontal scroll on mobile
} as const;

/**
 * Calculates the width of gallery items based on number of columns and gap size.
 * Formula: (100% - (numberOfGaps * gapSizeInPx)) / numberOfColumns
 * 
 * @param columns - Number of columns to display
 * @param gapUnits - Gap size in MUI spacing units (1 unit = 8px)
 * @returns CSS calc() string for item width
 */
const calculateItemWidth = (columns: number, gapUnits: number): string => {
  const gapPx = gapUnits * 8; // Convert MUI spacing units to pixels
  const numberOfGaps = columns - 1; // Number of gaps between columns
  const totalGapPx = numberOfGaps * gapPx;
  return `calc((100% - ${totalGapPx}px) / ${columns})`;
};

const PhotoGallerySection = ({ items }: PhotoGallerySectionProps) => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: SECTION_PADDING.standard,
        ...getSectionStyles("paper", theme, { includeBorder: false }),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
    <Container>
      <Stack spacing={{ xs: 1.5, md: 1.5 }} sx={{ maxWidth: 720 }}>
        <Typography variant="eyebrow" color="brand.secondary">
          Photo Strip
        </Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" } }}>
          My Life in Frames
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ fontSize: { xs: "0.9375rem", md: "1rem" } }}
        >
          A glimpse into the textures, people, and scenes that shape how I approach product
          design—unfiltered, a little imperfect, and very alive.
        </Typography>
      </Stack>
    </Container>
    <Container disableGutters maxWidth={false} sx={{ mt: { xs: 3, md: 6 } }}>
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          overflowX: { xs: "auto", md: "visible" },
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          WebkitOverflowScrolling: "touch",
          // Visual indicator for horizontal scroll on mobile
          "&::after": {
            content: { xs: '""', md: "none" },
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 30,
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9))"
                : "linear-gradient(to right, transparent, rgba(18, 18, 18, 0.9))",
            pointerEvents: "none",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "nowrap", md: "wrap" },
            gap: GALLERY_CONFIG.gap,
            overflowX: { xs: "auto", md: "visible" },
            scrollSnapType: { xs: "x mandatory", md: "none" },
            scrollBehavior: { xs: "smooth", md: "auto" },
            scrollbarWidth: { xs: "none", md: "auto" },
            msOverflowStyle: { xs: "none", md: "auto" },
            "&::-webkit-scrollbar": {
              display: { xs: "none", md: "auto" },
            },
            WebkitOverflowScrolling: "touch",
          }}
        >
          {items.map((item) => {
            // Calculate item widths based on configuration
            const itemWidth = {
              xs: GALLERY_CONFIG.mobileItemWidth,
              sm: calculateItemWidth(GALLERY_CONFIG.columns.sm, GALLERY_CONFIG.gap.sm),
              md: calculateItemWidth(GALLERY_CONFIG.columns.md, GALLERY_CONFIG.gap.md),
            };

            return (
              <Box
                key={`${item.caption}-${item.image.src}`}
                sx={{
                  borderRadius: (theme) => theme.tokens.radius.surface,
                  overflow: "hidden",
                  flexShrink: 0,
                  width: itemWidth,
                  flexBasis: itemWidth,
                  maxWidth: { xs: GALLERY_CONFIG.mobileItemWidth, sm: "none", md: "none" },
                  scrollSnapAlign: { xs: "start", md: "none" },
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: { xs: "none", md: "scale(1.02)" },
                    boxShadow: (theme) =>
                      theme.palette.mode === "light"
                        ? "0 8px 24px rgba(0, 0, 0, 0.12)"
                        : "0 8px 24px rgba(0, 0, 0, 0.4)",
                    "& .gallery-caption": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
              <Box
                component="img"
                src={item.image.src}
                alt={item.image.alt}
                loading="lazy"
                sx={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  height: { xs: "auto", md: "auto" },
                }}
              />
              <Box
                className="gallery-caption"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  px: 2,
                  py: 1.5,
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)"
                      : "linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)",
                  opacity: 0,
                  transform: "translateY(8px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: { xs: "0.75rem", md: "0.8125rem" },
                    display: "block",
                  }}
                >
                  {item.caption}
                </Typography>
                {item.subcaption && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: { xs: "0.6875rem", md: "0.75rem" },
                      display: "block",
                      mt: 0.25,
                    }}
                  >
                    {item.subcaption}
                  </Typography>
                )}
              </Box>
            </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  </Box>
  );
};

export default PhotoGallerySection;


