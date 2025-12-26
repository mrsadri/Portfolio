import type { CaseStudySection } from "../types";
import { memo } from "react";
import { Box, Card, Divider, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/system/Grid";

const CaseStudySectionCardComponent = ({ section }: { section: CaseStudySection }) => {
  const theme = useTheme();

  // Special rendering for investigation section to match HTML order
  if (section.id === "investigation") {
    return (
      <Stack
        component="section"
        id={section.id}
        spacing={{ xs: 2.5, md: 3 }}
        sx={{ maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } }}
      >
        {/* Title */}
        <Typography 
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: "32px",
            letterSpacing: 0,
          }}
        >
          {section.title}
        </Typography>

        {/* Summary */}
        {section.summary && (
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              fontSize: "1rem",
              lineHeight: "28px",
              fontWeight: 400,
            }}
          >
            {section.summary}
          </Typography>
        )}

        {/* Thinking Process Image */}
        {section.image && (
          <Box
            component="img"
            src={section.image.src}
            alt={section.image.alt}
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 18px 28px rgba(34,84,255,0.18)"
                  : "0 24px 40px rgba(0,0,0,0.45)",
            }}
          />
        )}

        {/* First User Quote (Sara) */}
        {section.quotes && section.quotes[0] && (
          <>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: "28px",
                fontWeight: 700, // Bold for labels
                mt: 2,
              }}
            >
              User Quote:
            </Typography>
            <Box
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
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: "28px",
                    fontWeight: 400,
                  }}
                >
                  "{section.quotes[0].text}"
                </Typography>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{
                    fontSize: "0.75rem",
                    lineHeight: "20px",
                    fontWeight: 400,
                  }}
                >
                  {section.quotes[0].author} — {section.quotes[0].role}
                </Typography>
              </Stack>
            </Box>
          </>
        )}

        {/* First Assumption & Validation */}
        {section.highlights && (
          <Stack spacing={1} sx={{ mt: 2 }}>
            {section.highlights.slice(0, 12).map((highlight, index) => {
              const isLabel = highlight.endsWith(":");
              const isAnalysisTitle = highlight.startsWith("Analysis");
              return (
                <Typography
                  key={index}
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "28px",
                    fontWeight: (isLabel || isAnalysisTitle) ? 700 : 400, // Bold for labels and analysis titles
                    mb: isLabel && index < 11 ? 0.5 : 0,
                  }}
                >
                  {highlight}
                </Typography>
              );
            })}
          </Stack>
        )}

        {/* Graph 1 */}
        {section.images && section.images[0] && (
          <Box
            component="img"
            src={section.images[0].src}
            alt={section.images[0].alt}
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 18px 28px rgba(34,84,255,0.18)"
                  : "0 24px 40px rgba(0,0,0,0.45)",
            }}
          />
        )}

        {/* Key Findings */}
        {section.body && section.body.slice(0, 3).map((paragraph, index) => {
          const isLabel = paragraph.endsWith(":");
          const isSectionTitle = paragraph === "Quantitative Results" || paragraph === "Qualitative Results";
          return (
            <Typography
              key={index}
              variant={isSectionTitle ? "h4" : "body1"}
              color="text.secondary"
              sx={{ 
                fontSize: isSectionTitle ? "1.5rem" : "1rem",
                lineHeight: isSectionTitle ? "32px" : "28px",
                fontWeight: (isLabel || isSectionTitle) ? 700 : 400, // Bold for labels and section titles
                mb: index < 2 ? (isLabel ? 0.5 : 1.5) : 0,
              }}
            >
              {paragraph}
            </Typography>
          );
        })}

        {/* Second User Quote (Zahra) */}
        {section.quotes && section.quotes[1] && (
          <>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: "28px",
                fontWeight: 700, // Bold for labels
                mt: 2,
              }}
            >
              User Quote:
            </Typography>
            <Box
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
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: "28px",
                    fontWeight: 400,
                  }}
                >
                  "{section.quotes[1].text}"
                </Typography>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{
                    fontSize: "0.75rem",
                    lineHeight: "20px",
                    fontWeight: 400,
                  }}
                >
                  {section.quotes[1].author} — {section.quotes[1].role}
                </Typography>
              </Stack>
            </Box>
          </>
        )}

        {/* Second Assumption & Validation - Part 1 (before Graph 2) */}
        {section.highlights && (
          <Stack spacing={1} sx={{ mt: 2 }}>
            {section.highlights.slice(12, 19).map((highlight, index) => {
              const isLabel = highlight.endsWith(":");
              const isAnalysisTitle = highlight.startsWith("Analysis");
              const actualIndex = index + 12;
              return (
                <Typography
                  key={actualIndex}
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "28px",
                    fontWeight: (isLabel || isAnalysisTitle) ? 700 : 400, // Bold for labels and analysis titles
                    mb: isLabel && actualIndex < 18 ? 0.5 : 0,
                  }}
                >
                  {highlight}
                </Typography>
              );
            })}
          </Stack>
        )}

        {/* Graph 2 */}
        {section.images && section.images[1] && (
          <Box
            component="img"
            src={section.images[1].src}
            alt={section.images[1].alt}
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 18px 28px rgba(34,84,255,0.18)"
                  : "0 24px 40px rgba(0,0,0,0.45)",
            }}
          />
        )}

        {/* Query label and Code Sample 1 */}
        {section.highlights && section.highlights[19] === "Query:" && (
          <>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: "28px",
                fontWeight: 700, // Bold for labels
                mt: 2,
              }}
            >
              Query:
            </Typography>
            {section.images && section.images[2] && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={section.images[2].src}
                  alt={section.images[2].alt}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    maxWidth: "408px",
                    borderRadius: "12px",
                    boxShadow:
                      theme.palette.mode === "light"
                        ? "0 18px 28px rgba(34,84,255,0.18)"
                        : "0 24px 40px rgba(0,0,0,0.45)",
                  }}
                />
              </Box>
            )}
            {section.highlights[20] && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: "14.5px",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {section.highlights[20]}
              </Typography>
            )}
          </>
        )}

        {/* Second Assumption & Validation - Part 2 (Analysis 2 and after) */}
        {section.highlights && (
          <Stack spacing={1} sx={{ mt: 2 }}>
            {section.highlights.slice(21, 26).map((highlight, index) => {
              const isLabel = highlight.endsWith(":");
              const isAnalysisTitle = highlight.startsWith("Analysis");
              const actualIndex = index + 21;
              // Skip "Query:" and "Note:" as they're handled separately with images
              if (highlight === "Query:" || highlight.startsWith("Note:")) {
                return null;
              }
              return (
                <Typography
                  key={actualIndex}
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "28px",
                    fontWeight: (isLabel || isAnalysisTitle) ? 700 : 400, // Bold for labels and analysis titles
                    mb: isLabel && actualIndex < 25 ? 0.5 : 0,
                  }}
                >
                  {highlight}
                </Typography>
              );
            })}
          </Stack>
        )}

        {/* Graph 3 */}
        {section.images && section.images[3] && (
          <Box
            component="img"
            src={section.images[3].src}
            alt={section.images[3].alt}
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 18px 28px rgba(34,84,255,0.18)"
                  : "0 24px 40px rgba(0,0,0,0.45)",
            }}
          />
        )}

        {/* Query label and Code Sample 2 */}
        {section.highlights && section.highlights[25] === "Query:" && (
          <>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: "28px",
                fontWeight: 700, // Bold for labels
                mt: 2,
              }}
            >
              Query:
            </Typography>
            {section.images && section.images[4] && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={section.images[4].src}
                  alt={section.images[4].alt}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    maxWidth: "408px",
                    borderRadius: "12px",
                    boxShadow:
                      theme.palette.mode === "light"
                        ? "0 18px 28px rgba(34,84,255,0.18)"
                        : "0 24px 40px rgba(0,0,0,0.45)",
                  }}
                />
              </Box>
            )}
            {section.highlights[26] && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: "14.5px",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {section.highlights[26]}
              </Typography>
            )}
          </>
        )}

        {/* Key Findings label */}
        {section.highlights && section.highlights[27] === "Key Findings:" && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
              lineHeight: "28px",
              fontWeight: 700,
              mt: 2,
            }}
          >
            Key Findings:
          </Typography>
        )}

        {/* Final Findings */}
        {section.body && section.body.slice(3).map((paragraph, index) => {
          const isLabel = paragraph.endsWith(":");
          const isSectionTitle = paragraph === "Quantitative Results" || paragraph === "Qualitative Results";
          // Check if this is the special bold paragraph (index 1 in slice(3), which is index 4 overall)
          const isBoldParagraph = paragraph === "In addition to quotes from interview and validating them by data, now we now the story of this issue.";
          const actualIndex = index + 3;
          return (
            <Typography
              key={actualIndex}
              variant={isSectionTitle ? "h4" : "body1"}
              color="text.secondary"
              sx={{ 
                fontSize: isSectionTitle ? "1.5rem" : isBoldParagraph ? "1.25rem" : "1rem", // 20px for bold paragraph
                lineHeight: isSectionTitle ? "32px" : "28px",
                fontWeight: (isLabel || isSectionTitle || isBoldParagraph) ? 700 : 400, // Bold for labels, section titles, and this specific paragraph
                mb: actualIndex < section.body!.length - 1 ? (isLabel ? 0.5 : 1.5) : 0,
              }}
            >
              {paragraph}
            </Typography>
          );
        })}

        <Divider sx={{ mt: { xs: 3, md: 4 } }} />
      </Stack>
    );
  }

  // Special rendering for impact section - metrics before body
  if (section.id === "impact") {
    return (
      <Stack
        component="section"
        id={section.id}
        spacing={{ xs: 2.5, md: 3 }}
        sx={{ maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } }}
      >
        <Stack spacing={{ xs: 1.5, md: 1.5 }}>
          <Typography 
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              lineHeight: "32px",
              letterSpacing: 0,
            }}
          >
            {section.title}
          </Typography>
          {section.summary && (
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                fontSize: "1rem",
                lineHeight: "28px",
                fontWeight: 400,
              }}
            >
              {section.summary}
            </Typography>
          )}
        </Stack>

        {/* Metrics come before body */}
        {section.metrics && (
          <Grid container spacing={2}>
            {section.metrics.map((metric) => (
              <Grid size={{ xs: 12 }} key={metric.label}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "18px", // 18px from Figma (Impact section)
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 2, md: 2.5 },
                    border: theme.palette.mode === "light" 
                      ? "1px solid rgba(11, 34, 74, 0.12)" // Figma shows opacity 0.12
                      : `1px solid ${theme.tokens.colors.border}`,
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "#f9fbff" // #f9fbff from Figma (Impact section)
                        : "rgba(14, 22, 38, 0.85)",
                  }}
                >
                  <Stack spacing={0.5}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 700, 
                        fontSize: "1.25rem", 
                        lineHeight: "28px",
                        color: theme.palette.mode === "light" ? "#0b1c33" : undefined,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 700, 
                        fontSize: "0.875rem", 
                        lineHeight: "22px",
                        color: theme.palette.mode === "light" ? "#0b1c33" : undefined,
                      }}
                    >
                      {metric.label}
                    </Typography>
                    {metric.description && (
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          lineHeight: 1.6,
                          fontSize: "0.875rem",
                        }}
                      >
                        {metric.description}
                      </Typography>
                    )}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Body comes after metrics */}
        {section.body && (
          <Stack spacing={1.5}>
            {section.body.map((paragraph, index) => {
              const isLabel = paragraph.endsWith(":");
              const isSectionTitle = paragraph === "Quantitative Results" || paragraph === "Qualitative Results";
              return (
                <Typography
                  key={paragraph.slice(0, 32)}
                  variant={isSectionTitle ? "h4" : "body1"}
                  color="text.secondary"
                  sx={{ 
                    fontSize: isSectionTitle ? "1.5rem" : "1rem",
                    lineHeight: isSectionTitle ? "32px" : "28px",
                    fontWeight: (isLabel || isSectionTitle) ? 700 : 400,
                    mb: index < section.body!.length - 1 ? (isLabel ? 0.5 : 1.5) : 0,
                  }}
                >
                  {paragraph}
                </Typography>
              );
            })}
          </Stack>
        )}

        <Divider sx={{ mt: { xs: 3, md: 4 } }} />
      </Stack>
    );
  }

  // Special rendering for platform section
  if (section.id === "platform") {
    return (
      <Stack
        component="section"
        id={section.id}
        spacing={{ xs: 2.5, md: 3 }}
        sx={{ maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } }}
      >
        <Stack spacing={{ xs: 1.5, md: 1.5 }}>
          <Typography 
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              lineHeight: "32px",
              letterSpacing: 0,
            }}
          >
            {section.title}
          </Typography>
          {section.summary && (
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                fontSize: "1rem",
                lineHeight: "28px",
                fontWeight: 400,
              }}
            >
              {section.summary}
            </Typography>
          )}
        </Stack>

        {/* Image comes before metrics */}
        {section.image && (
          <Box
            component="img"
            src={section.image.src}
            alt={section.image.alt}
            loading="lazy"
            sx={{
              width: "100%",
              maxWidth: "542px",
              mx: "auto",
              display: "block",
              borderRadius: "12px",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 18px 28px rgba(34,84,255,0.18)"
                  : "0 24px 40px rgba(0,0,0,0.45)",
            }}
          />
        )}

        {/* Metrics */}
        {section.metrics && (
          <Grid container spacing={2}>
            {section.metrics.map((metric) => (
              <Grid size={{ xs: 12, sm: 4 }} key={metric.label}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "16px",
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 2, md: 2.5 },
                    border: theme.palette.mode === "light" 
                      ? "1px solid #dce1e9" 
                      : `1px solid ${theme.tokens.colors.border}`,
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "#e5eeff"
                        : "rgba(14, 22, 38, 0.85)",
                  }}
                >
                  <Stack spacing={0.5}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 700, 
                        fontSize: "1.25rem", 
                        lineHeight: "28px",
                        color: theme.palette.mode === "light" ? "#0b1c33" : undefined,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 700, 
                        fontSize: "0.875rem", 
                        lineHeight: "22px",
                        color: theme.palette.mode === "light" ? "#0b1c33" : undefined,
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Body comes after metrics */}
        {section.body && (
          <Stack spacing={1.5}>
            {section.body.map((paragraph) => (
              <Typography
                key={paragraph.slice(0, 32)}
                variant="body1"
                color="text.secondary"
                sx={{ 
                  fontSize: "1rem",
                  lineHeight: "28px",
                  fontWeight: 400,
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        )}

        <Divider sx={{ mt: { xs: 3, md: 4 } }} />
      </Stack>
    );
  }

  // Standard rendering for other sections
  return (
    <Stack
      component="section"
      id={section.id}
      spacing={{ xs: 2.5, md: 3 }}
      sx={{ maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } }}
    >
      <Stack spacing={{ xs: 1.5, md: 1.5 }}>
        {section.eyebrow && (
          <Typography variant="eyebrow" color="brand.secondary">
            {section.eyebrow}
          </Typography>
        )}
        <Typography 
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem", // 24px from Figma
            lineHeight: "32px", // Exact line height from Figma
            letterSpacing: 0,
          }}
        >
          {section.title}
        </Typography>
        {section.summary && (
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              fontSize: "1rem", // 16px from Figma
              lineHeight: "28px", // Exact line height from Figma
              fontWeight: 400,
              mb: { xs: 1, md: 0 },
            }}
          >
            {section.summary}
          </Typography>
        )}
        {section.body?.map((paragraph, index) => {
          // Check if paragraph is a label (ends with colon) or section title
          const isLabel = paragraph.endsWith(":");
          const isSectionTitle = paragraph === "Quantitative Results" || paragraph === "Qualitative Results";
          return (
            <Typography
              key={paragraph.slice(0, 32)}
              variant={isSectionTitle ? "h4" : "body1"}
              color="text.secondary"
              sx={{ 
                fontSize: isSectionTitle ? "1.5rem" : "1rem", // Larger for section titles
                lineHeight: isSectionTitle ? "32px" : "28px", // Exact line height from Figma
                fontWeight: (isLabel || isSectionTitle) ? 700 : 400, // Bold for labels and section titles
                mb: index < section.body!.length - 1 ? (isLabel ? { xs: 0.5, md: 0.5 } : { xs: 1.5, md: 1.5 }) : 0,
              }}
            >
              {paragraph}
            </Typography>
          );
        })}
      </Stack>

      {section.bullets && (
        section.bullets.length === 3 && section.id === "solution-journey" ? (
          // 3-column grid layout for solution section
          <Grid container spacing={2}>
            {section.bullets.map((point) => (
              <Grid size={{ xs: 12, md: 4 }} key={point.slice(0, 50)}>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: "1rem", // 16px from Figma
                    lineHeight: "26px", // Figma uses 26px line height for solutions
                    fontWeight: 400,
                    whiteSpace: "pre-line",
                  }}
                >
                  {point}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ) : (
          // Regular bullet list for other sections
          <Stack component="ul" spacing={1.5} sx={{ pl: 2, mb: 0 }}>
            {section.bullets.map((point) => (
              <Typography 
                component="li" 
                key={point} 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  fontSize: "1rem", // 16px from Figma
                  lineHeight: "28px", // Exact line height from Figma
                  fontWeight: 400,
                }}
              >
                {point}
              </Typography>
            ))}
          </Stack>
        )
      )}

      {section.highlights && (
        <Stack spacing={1}>
          {section.highlights.map((highlight, index) => {
            // Check if this is a label (ends with colon) or a section title
            const isLabel = highlight.endsWith(":");
            const isSectionTitle = 
              highlight === "Root Cause Analysis" ||
              highlight === "2nd stakeholders interview" ||
              highlight === "Refined Solutions" ||
              highlight.startsWith("User interface") ||
              highlight.startsWith("Analysis") ||
              highlight === "Bidirectional Mapping" ||
              highlight === "Extended Mapping Time" ||
              highlight === "Voice Message Introduction" ||
              highlight === "System Architecture Improvement" ||
              highlight === "Number Pool Solution";
            return (
              <Typography
                key={index}
                variant={isSectionTitle ? "h4" : "body1"}
                color="text.secondary"
                sx={{
                  fontSize: isSectionTitle ? "1.5rem" : "1rem", // Larger for section titles
                  lineHeight: isSectionTitle ? "32px" : "28px",
                  fontWeight: (isLabel || isSectionTitle) ? 700 : 400, // Bold for labels and section titles
                  mb: isLabel && index < section.highlights!.length - 1 ? 0.5 : 0,
                }}
              >
                {highlight}
              </Typography>
            );
          })}
        </Stack>
      )}

      {section.metrics && (
        <Grid container spacing={2}>
          {section.metrics.map((metric) => (
            <Grid 
              size={{ 
                xs: 12, 
                sm: section.id === "impact" 
                  ? 12 // Full width for impact section
                  : section.metrics!.length === 3 
                    ? 4 
                    : section.metrics!.length > 1 
                      ? 6 
                      : 12 
              }} 
              key={metric.label}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: "16px", // 16px from Figma
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 2, md: 2.5 },
                  border: theme.palette.mode === "light" 
                    ? "1px solid #dce1e9" 
                    : `1px solid ${theme.tokens.colors.border}`,
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#e5eeff" // Light blue from Figma
                      : "rgba(14, 22, 38, 0.85)",
                }}
              >
                <Stack spacing={0.5}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: "1.25rem", 
                      lineHeight: "28px",
                      color: theme.palette.mode === "light" ? "#0b1c33" : undefined,
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: "0.875rem", 
                      lineHeight: "22px",
                      color: theme.palette.mode === "light" ? "#0b1c33" : undefined,
                    }}
                  >
                    {metric.label}
                  </Typography>
                  {metric.description && (
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        lineHeight: 1.6,
                        fontSize: "0.875rem",
                      }}
                    >
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
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: "italic",
                    fontSize: "1rem", // 16px from Figma
                    lineHeight: "28px",
                    fontWeight: 400,
                  }}
                >
                  "{quote.text}"
                </Typography>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{
                    fontSize: "0.75rem", // 12px from Figma
                    lineHeight: "20px",
                    fontWeight: 400,
                  }}
                >
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
            maxWidth: section.id === "platform" ? "542px" : "100%",
            mx: section.id === "platform" ? "auto" : 0,
            display: section.id === "platform" ? "block" : "block",
            borderRadius: "12px", // 12px from Figma
            boxShadow:
              theme.palette.mode === "light"
                ? "0 18px 28px rgba(34,84,255,0.18)"
                : "0 24px 40px rgba(0,0,0,0.45)",
          }}
        />
      )}

      {section.images && section.images.length > 0 && (
        <Stack spacing={{ xs: 3, md: 4 }}>
          {section.images.length === 2 && 
           section.images[0]?.height === section.images[1]?.height ? (
            // Display side by side if two images with same height (e.g., interview images)
            <Grid container spacing={2}>
              {section.images.map((img, index) => (
                <Grid size={{ xs: 12, md: index === 0 ? 7 : 5 }} key={index}>
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      borderRadius: "12px", // 12px from Figma
                      boxShadow:
                        theme.palette.mode === "light"
                          ? "0 18px 28px rgba(34,84,255,0.18)"
                          : "0 24px 40px rgba(0,0,0,0.45)",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            // Display vertically stacked for other images
            section.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img.src}
                alt={img.alt}
                loading="lazy"
                sx={{
                  width: "100%",
                  borderRadius: "12px", // 12px from Figma
                  boxShadow:
                    theme.palette.mode === "light"
                      ? "0 18px 28px rgba(34,84,255,0.18)"
                      : "0 24px 40px rgba(0,0,0,0.45)",
                }}
              />
            ))
          )}
        </Stack>
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


