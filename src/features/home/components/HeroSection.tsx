import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Avatar, Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import type { HeroContent } from "../types";
import { GhostButton, Pill, PrimaryButton } from "../../../shared/ui";
import certifiedBadgeSrc from "../../../../images/badges/certified-badge.png";

type HeroSectionProps = {
  hero: HeroContent;
};

const HeroSection = ({ hero }: HeroSectionProps) => {
  const theme = useTheme();
  const handlePrimaryCtaClick = useCallback(() => {
    const targetId = hero.ctaPrimary.scrollToId ?? hero.ctaPrimary.to;
    if (!targetId || typeof document === "undefined") {
      return;
    }

    if (targetId.startsWith("/")) {
      return;
    }

    const sanitizedId = targetId.startsWith("#") ? targetId.slice(1) : targetId;
    const element = document.getElementById(sanitizedId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hero.ctaPrimary.scrollToId, hero.ctaPrimary.to]);

  return (
    <Box
      component="section"
      sx={(theme) => ({
        py: { xs: 6, md: 9 },
        background:
          theme.palette.mode === "light"
            ? "radial-gradient(circle at 20% 15%, rgba(145, 167, 255, 0.12), transparent 58%), radial-gradient(circle at 80% 20%, rgba(34, 84, 255, 0.1), transparent 52%)"
            : "radial-gradient(circle at 18% 15%, rgba(73, 109, 193, 0.18), transparent 60%), radial-gradient(circle at 78% 18%, rgba(48, 86, 176, 0.18), transparent 55%)",
      })}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 3.5 }}
          sx={{
            alignItems: { xs: "center", md: "stretch" },
            px: { xs: 0, md: 2 },
          }}
        >
          <Stack
            spacing={2.5}
            sx={{
              flexBasis: { md: "30%" },
              maxWidth: { md: "30%" },
              flexShrink: 0,
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 260, sm: 300, md: 320 },
              }}
            >
              <Avatar
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                variant="rounded"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: (theme) => theme.tokens.radius.lg,
                  border: (theme) => `1px solid ${theme.tokens.colors.border}`,
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 18px 40px rgba(17, 36, 83, 0.18)"
                      : "0 20px 50px rgba(0, 0, 0, 0.55)",
                }}
              />
              <Box
                component="img"
                src={certifiedBadgeSrc}
                alt="Certified badge"
                loading="lazy"
                sx={{
                  position: "absolute",
                  top: { xs: -18, md: -24 },
                  left: { xs: -18, md: -24 },
                  width: { xs: 120, md: 150 },
                  height: "auto",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              />
            </Box>
          </Stack>
          <Stack
            spacing={{ xs: 2.25, md: 2.75 }}
            sx={{
              flexBasis: { md: "70%" },
              maxWidth: { md: "70%" },
              flexGrow: 1,
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Stack spacing={{ xs: 1.4, md: 1.8 }} sx={{ width: "100%" }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 1.5 }}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Pill
                  label={hero.greeting}
                  size="small"
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "rgba(31, 111, 235, 0.12)"
                        : "rgba(98, 132, 218, 0.22)",
                    color:
                      theme.palette.mode === "light"
                        ? theme.palette.brand.secondary
                        : "rgba(221, 230, 255, 0.92)",
                    fontWeight: 600,
                    letterSpacing: 0.3,
                  }}
                />
              </Stack>
              <Typography
                variant="display"
                sx={{
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {hero.name}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  letterSpacing: { xs: "0.01em", md: "0.005em" },
                  maxWidth: { md: "78%" },
                }}
              >
                {hero.title}
              </Typography>
            </Stack>

            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "1.05rem", md: "1.12rem" },
                lineHeight: { xs: 1.65, md: 1.7 },
              }}
            >
              {hero.subtitle}
            </Typography>

            <Stack
              spacing={{ xs: 1.4, sm: 1.8 }}
              direction={{ xs: "column", sm: "row" }}
              sx={{ pt: { xs: 0.5, md: 0.75 } }}
            >
              <PrimaryButton
                endIcon={<ArrowForwardRoundedIcon />}
                size="large"
                sx={{ minWidth: { sm: 220 } }}
                onClick={handlePrimaryCtaClick}
              >
                {hero.ctaPrimary.label}
              </PrimaryButton>
              <GhostButton
                component={RouterLink}
                to={hero.ctaSecondary.to}
                size="large"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  borderWidth: 1.5,
                }}
              >
                {hero.ctaSecondary.label}
              </GhostButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;


