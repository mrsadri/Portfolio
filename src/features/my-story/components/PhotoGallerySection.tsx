import { Box, Container, Stack, Typography } from "@mui/material";
import type { GalleryItem } from "../types";

type PhotoGallerySectionProps = {
  items: ReadonlyArray<GalleryItem>;
};

const PhotoGallerySection = ({ items }: PhotoGallerySectionProps) => (
  <Box
    component="section"
    sx={{
      pt: { xs: 4, md: 4 },
      pb: { xs: 6, md: 12 },
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
            columnCount: { xs: 2, sm: 3, md: 5 },
            columnGap: { xs: 1.5, md: 2.5 },
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "row", md: "unset" },
            gap: { xs: 1.5, md: 0 },
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
          {items.map((item) => (
            <Box
              key={`${item.caption}-${item.image.src}`}
              sx={{
                breakInside: { md: "avoid" },
                mb: { xs: 0, md: 2.5 },
                borderRadius: (theme) => theme.tokens.radius.surface,
                overflow: "hidden",
                flexShrink: { xs: 0, md: "unset" },
                width: { xs: "200px", md: "auto" },
                scrollSnapAlign: { xs: "start", md: "none" },
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
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default PhotoGallerySection;


