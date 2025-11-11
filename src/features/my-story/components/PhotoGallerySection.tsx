import { Box, Container, Stack, Typography } from "@mui/material";
import type { GalleryItem } from "../types";

type PhotoGallerySectionProps = {
  items: ReadonlyArray<GalleryItem>;
};

const PhotoGallerySection = ({ items }: PhotoGallerySectionProps) => (
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
      <Box sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Box
          sx={{
            columnCount: { xs: 2, sm: 3, md: 5 },
            columnGap: { xs: 1.5, md: 2.5 },
          }}
        >
          {items.map((item) => (
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
                  loading="lazy"
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
);

export default PhotoGallerySection;


