import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback } from "react";
import type { ResumeAction, ResumeSummary } from "../types";

type HeaderSectionProps = {
  summary: ResumeSummary;
  actions: ResumeAction;
};

const HeaderSection = ({ summary, actions }: HeaderSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDownload = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${summary.title} - ${summary.subtitle}`,
          text: summary.description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log("Share cancelled or failed:", error);
      }
    } else {
      // Fallback: copy URL to clipboard
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    }
  }, [summary]);

  const chipStyles = {
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    "&:hover": {
      backgroundColor: "action.hover",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
    },
    ...(isMobile && {
      width: "100%",
      justifyContent: "flex-start",
      maxWidth: "100%",
    }),
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, rgba(31,111,235,0.1), rgba(90,200,250,0.14))",
      }}
    >
      <Container>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="overline" color="secondary">
            {summary.subtitle}
          </Typography>
          <Typography variant="h2">{summary.title}</Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "600px" },
              gap: { xs: 1.5, sm: 1.5 },
            }}
          >
            <Chip
              icon={<LinkedInIcon sx={{ fontSize: "1.125rem" }} />}
              label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/msadri/"
              target="_blank"
              clickable
              sx={{
                ...chipStyles,
                minHeight: 44,
                "& .MuiChip-label": {
                  paddingLeft: 1,
                  paddingRight: 1.5,
                },
              }}
            />
            <Chip
              icon={<LanguageRoundedIcon sx={{ fontSize: "1.125rem" }} />}
              label="Portfolio"
              component="a"
              href="https://masihsadri.com"
              target="_blank"
              clickable
              sx={{
                ...chipStyles,
                minHeight: 44,
                "& .MuiChip-label": {
                  paddingLeft: 1,
                  paddingRight: 1.5,
                },
              }}
            />
            <Chip
              icon={<EmailRoundedIcon sx={{ fontSize: "1.125rem" }} />}
              label="sadrimasih@gmail.com"
              component="a"
              href="mailto:sadrimasih@gmail.com"
              clickable
              sx={{
                ...chipStyles,
                minHeight: 44,
                "& .MuiChip-label": {
                  paddingLeft: 1,
                  paddingRight: 1.5,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
            <Chip
              icon={<LocationOnRoundedIcon sx={{ fontSize: "1.125rem" }} />}
              label="Tehran, Iran • Willing to relocate"
              sx={{
                ...chipStyles,
                minHeight: 44,
                "&:hover": undefined,
                "& .MuiChip-label": {
                  paddingLeft: 1,
                  paddingRight: 1.5,
                },
              }}
            />
          </Stack>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            {(() => {
              const text = summary.description;
              const importantPhrases = [
                "6+ years",
                "40M+ users",
                "two semi-unicorn tech companies",
                "B2B and B2C",
                "embedded, centralized, and single-threaded",
              ];
              
              const parts: Array<{ text: string; bold: boolean }> = [];
              let lastIndex = 0;
              
              // Find all matches and their positions
              const matches: Array<{ start: number; end: number; text: string }> = [];
              importantPhrases.forEach((phrase) => {
                const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
                let match;
                while ((match = regex.exec(text)) !== null) {
                  matches.push({
                    start: match.index,
                    end: match.index + match[0].length,
                    text: match[0],
                  });
                }
              });
              
              // Sort matches by position
              matches.sort((a, b) => a.start - b.start);
              
              // Build parts array
              matches.forEach((match) => {
                if (match.start > lastIndex) {
                  parts.push({ text: text.slice(lastIndex, match.start), bold: false });
                }
                parts.push({ text: match.text, bold: true });
                lastIndex = match.end;
              });
              
              if (lastIndex < text.length) {
                parts.push({ text: text.slice(lastIndex), bold: false });
              }
              
              return parts.length > 0 ? (
                <>
                  {parts.map((part, index) =>
                    part.bold ? (
                      <Box component="span" key={index} sx={{ fontWeight: 700 }}>
                        {part.text}
                      </Box>
                    ) : (
                      <span key={index}>{part.text}</span>
                    )
                  )}
                </>
              ) : (
                text
              );
            })()}
          </Typography>
          {isMobile ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ShareRoundedIcon />}
              onClick={handleShare}
              fullWidth
              sx={{ maxWidth: { xs: "100%", sm: "400px" } }}
            >
              Share Resume
            </Button>
          ) : (
            <Button
              component="a"
              href={actions.href}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<DownloadRoundedIcon />}
              onClick={handleDownload}
            >
              {actions.label}
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderSection;


