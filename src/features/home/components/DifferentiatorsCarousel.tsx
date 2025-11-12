import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

type Differentiator = {
  title: string;
  description: string;
};

type DifferentiatorsCarouselProps = {
  items: ReadonlyArray<Differentiator>;
};

const DifferentiatorsCarousel = ({ items }: DifferentiatorsCarouselProps) => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (!scrollContainerRef.current) return;

      const cardWidth = scrollContainerRef.current.querySelector("div")?.clientWidth ?? 320;
      const scrollAmount = cardWidth + 24; // card width + gap

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Check scrollability after a short delay
      setTimeout(checkScrollability, 300);
    },
    [checkScrollability],
  );

  const handleScroll = useCallback(() => {
    checkScrollability();
  }, [checkScrollability]);

  useEffect(() => {
    checkScrollability();
    // Also check on window resize
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [checkScrollability]);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Navigation Buttons */}
      {canScrollLeft && (
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: { xs: -12, md: -16 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: theme.palette.background.paper,
            border: (theme) => `1px solid ${theme.tokens.colors.border}`,
            boxShadow: (theme) =>
              theme.palette.mode === "light"
                ? "0 4px 12px rgba(17, 36, 83, 0.1)"
                : "0 4px 12px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
          }}
          aria-label="Scroll left"
        >
          <ArrowBackIosRoundedIcon fontSize="small" />
        </IconButton>
      )}

      {canScrollRight && (
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: { xs: -12, md: -16 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: theme.palette.background.paper,
            border: (theme) => `1px solid ${theme.tokens.colors.border}`,
            boxShadow: (theme) =>
              theme.palette.mode === "light"
                ? "0 4px 12px rgba(17, 36, 83, 0.1)"
                : "0 4px 12px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
          }}
          aria-label="Scroll right"
        >
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </IconButton>
      )}

      {/* Scrollable Container */}
      <Box
        ref={scrollContainerRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          "&::-webkit-scrollbar": {
            display: "none", // Chrome/Safari
          },
          px: { xs: 1, md: 2 },
          py: 1,
          // Hide scrollbar but allow scrolling
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: { xs: 260, sm: 300, md: 340 },
              scrollSnapAlign: "start",
            }}
          >
            <Card
              sx={{
                height: "100%",
                minHeight: { xs: 200, md: 220 },
                border: (theme) => `1px solid ${theme.tokens.colors.border}`,
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(18, 18, 18, 0.6)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 8px 24px rgba(17, 36, 83, 0.12)"
                      : "0 8px 24px rgba(0, 0, 0, 0.4)",
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 2.5 }, height: "100%", display: "flex", flexDirection: "column" }}>
                <Stack spacing={1.5} sx={{ height: "100%" }}>
                  <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: "1rem", md: "1.125rem" } }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.6} sx={{ flexGrow: 1, fontSize: { xs: "0.875rem", md: "0.9375rem" } }}>
                    {item.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DifferentiatorsCarousel;

