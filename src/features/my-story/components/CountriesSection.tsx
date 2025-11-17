import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useScrollAnimation } from "@shared/utils/useScrollAnimation";
import { getSectionStyles, SECTION_PADDING } from "@shared/utils/sectionBackgrounds";
import SectionHeader from "@shared/components/SectionHeader";
import { createImageResource } from "@shared/utils/assets";
import austriaAsset from "../../../../images/countries/austria.webp";
import denmarkAsset from "../../../../images/countries/denmark.webp";
import finlandAsset from "../../../../images/countries/finland.webp";
import germanyAsset from "../../../../images/countries/germany.webp";
import irelandAsset from "../../../../images/countries/ireland.webp";
import netherlandsAsset from "../../../../images/countries/netherlands.webp";
import norwayAsset from "../../../../images/countries/norway.webp";
import scotlandAsset from "../../../../images/countries/scotland.webp";
import spainAsset from "../../../../images/countries/spain.webp";
import swedenAsset from "../../../../images/countries/sweden.webp";
import unitedKingdomAsset from "../../../../images/countries/united-kingdom.webp";

const countries = [
  { name: "Netherlands", image: netherlandsAsset },
  { name: "Ireland", image: irelandAsset },
  { name: "Germany", image: germanyAsset },
  { name: "Sweden", image: swedenAsset },
  { name: "Denmark", image: denmarkAsset },
  { name: "Finland", image: finlandAsset },
  { name: "Spain", image: spainAsset },
  { name: "Austria", image: austriaAsset },
  { name: "Norway", image: norwayAsset },
  { name: "Scotland", image: scotlandAsset },
  { name: "United Kingdom", image: unitedKingdomAsset },
];

const CountriesSection = () => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const countryImages = countries.map((country) => ({
    ...country,
    image: createImageResource(import.meta.url, country.image, `${country.name} flag symbol`),
  }));

  // Duplicate the array for seamless infinite scroll
  const duplicatedCountries = [...countryImages, ...countryImages];

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: SECTION_PADDING.standard,
        overflow: "hidden",
        ...getSectionStyles("subtle", theme),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Container>
        <Stack spacing={5}>
          <SectionHeader
            eyebrow="Travel Dreams"
            title="Countries I Want to See"
            subtitle="A visual journey through the European destinations that inspire my wanderlust and curiosity."
            align="left"
          />
        </Stack>
      </Container>
      <Box
        sx={{
          mt: { xs: 3, md: 4 },
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Gradient overlays for fade effect */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 60, md: 120 },
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                : "linear-gradient(to right, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: 60, md: 120 },
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                : "linear-gradient(to left, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling container */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 4 },
            py: 2,
            animation: "scroll 40s linear infinite",
            willChange: "transform",
            "@keyframes scroll": {
              "0%": {
                transform: "translateX(0)",
              },
              "100%": {
                transform: "translateX(-50%)",
              },
            },
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {duplicatedCountries.map((country, index) => (
            <Box
              key={`${country.name}-${index}`}
              sx={{
                flexShrink: 0,
                width: { xs: 120, sm: 140, md: 160 },
                height: { xs: 120, sm: 140, md: 160 },
                borderRadius: 2,
                overflow: "visible",
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 4px 12px rgba(0, 0, 0, 0.1)"
                      : "0 4px 12px rgba(0, 0, 0, 0.3)",
                  "& [data-country-name]": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={country.image.src}
                alt={country.image.alt}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "calc(100% - 24px)",
                  objectFit: "contain",
                  borderRadius: 1,
                }}
              />
              <Typography
                data-country-name
                variant="caption"
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  opacity: 0,
                  transform: "translateY(4px)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  color: "text.secondary",
                }}
              >
                {country.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CountriesSection;
