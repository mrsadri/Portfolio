import type { CaseStudySection } from "../types";
import { memo } from "react";
import { Box, Card, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Pill } from "@shared/ui";

const CaseStudySectionCardComponent = ({ section }: { section: CaseStudySection }) => {
  const theme = useTheme();

  return (
    <Stack
      component="section"
      id={section.id}
      spacing={{ xs: 2.5, md: 3 }}
      sx={{ maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } }}
    >
      <Stack spacing={{ xs: 1.5, md: 1 }}>
        {section.eyebrow && (
          <Typography variant="eyebrow" color="brand.secondary">
            {section.eyebrow}
          </Typography>
        )}
        <Typography variant="h3">{section.title}</Typography>
        {section.summary && (
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              lineHeight: { xs: 1.7, md: 1.65 },
              mb: { xs: 1, md: 0 },
            }}
          >
            {section.summary}
          </Typography>
        )}
        {section.body?.map((paragraph, index) => (
          <Typography
            key={paragraph.slice(0, 32)}
            variant="body1"
            color="text.secondary"
            sx={{ 
              lineHeight: { xs: 1.7, md: 1.65 },
              mb: index < section.body!.length - 1 ? { xs: 2, md: 1.5 } : 0,
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>

      {section.bullets && (
        <Stack component="ul" spacing={1.5} sx={{ pl: 2, mb: 0 }}>
          {section.bullets.map((point) => (
            <Typography 
              component="li" 
              key={point} 
              variant="body1" 
              color="text.secondary"
              sx={{ lineHeight: { xs: 1.7, md: 1.65 } }}
            >
              {point}
            </Typography>
          ))}
        </Stack>
      )}

      {section.highlights && (
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {section.highlights.map((highlight) => (
            <Pill
              key={highlight}
              label={highlight}
              size="small"
              sx={{
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(34,84,255,0.08)"
                    : "rgba(98,132,218,0.16)",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.brand.secondary
                    : "rgba(221, 230, 255, 0.92)",
              }}
            />
          ))}
        </Stack>
      )}

      {section.metrics && (
        <Grid container spacing={2}>
          {section.metrics.map((metric) => (
            <Grid size={{ xs: 12, sm: section.metrics!.length > 1 ? 6 : 12 }} key={metric.label}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: "18px",
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 2, md: 2.5 },
                  border: `1px solid ${theme.tokens.colors.border}`,
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgba(249,251,255,0.9)"
                      : "rgba(14, 22, 38, 0.85)",
                }}
              >
                <Stack spacing={0.5}>
                  <Typography variant="h4">{metric.value}</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {metric.label}
                  </Typography>
                  {metric.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {metric.description}
                    </Typography>
                  )}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {section.quotes && section.quotes.length > 0 && (
        <Stack spacing={2}>
          {section.quotes.map((quote) => (
            <Box
              key={`${quote.author}-${quote.text.slice(0, 24)}`}
              sx={{
              borderRadius: "18px",
                px: { xs: 2.5, md: 3 },
                py: { xs: 2, md: 2.5 },
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "rgba(34,84,255,0.06)"
                    : "rgba(34,84,255,0.16)",
              }}
            >
              <Stack spacing={1}>
                <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.7 }}>
                  “{quote.text}”
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {quote.author} — {quote.role}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      )}

      {section.image && (
        <Box
          component="img"
          src={section.image.src}
          alt={section.image.alt}
          loading="lazy"
          sx={{
            width: "100%",
            borderRadius: (theme) => theme.tokens.radius.lg,
            boxShadow:
              theme.palette.mode === "light"
                ? "0 18px 28px rgba(34,84,255,0.18)"
                : "0 24px 40px rgba(0,0,0,0.45)",
          }}
        />
      )}

      <Divider sx={{ mt: { xs: 3, md: 4 } }} />
    </Stack>
  );
};

const CaseStudySectionCard = memo(
  CaseStudySectionCardComponent,
  (prev, next) => prev.section === next.section,
);

export default CaseStudySectionCard;


