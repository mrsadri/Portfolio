import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import type { MouseEventHandler } from "react";
import { Link as RouterLink } from "react-router-dom";
import { GhostButton, Pill, PrimaryButton } from "@shared/ui";
import type { CaseStudySummary } from "../types";

type CaseStudyCardProps = {
  caseStudy: CaseStudySummary;
  active?: boolean;
  onOpenRecap?: MouseEventHandler<HTMLButtonElement>;
};

const CaseStudyCard = ({ caseStudy, active = false, onOpenRecap }: CaseStudyCardProps) => {
  const theme = useTheme();
  const { palette, tokens } = theme;
  const isDark = palette.mode === "dark";
  const isLocked = caseStudy.isLocked ?? false;
  const isInProgress = caseStudy.isInProgress ?? false;

  const activeBackground = isDark
    ? "linear-gradient(135deg, rgba(20, 45, 110, 0.98), rgba(58, 118, 226, 0.88))"
    : "linear-gradient(135deg, rgba(17, 76, 170, 0.88), rgba(60, 151, 255, 0.82))";

  const inactiveBackground = isDark
    ? "linear-gradient(140deg, rgba(20, 28, 52, 0.82), rgba(12, 18, 36, 0.88))"
    : "linear-gradient(135deg, rgba(248, 251, 255, 0.94), rgba(232, 242, 255, 0.88))";

  const lockedBackground = isDark
    ? "linear-gradient(140deg, rgba(20, 28, 52, 0.65), rgba(12, 18, 36, 0.7))"
    : "linear-gradient(135deg, rgba(248, 251, 255, 0.75), rgba(232, 242, 255, 0.7))";

  const headingColor = active
    ? "rgba(255, 255, 255, 0.96)"
    : isLocked
      ? isDark
        ? "rgba(180, 190, 220, 0.7)"
        : "rgba(100, 120, 150, 0.7)"
      : isDark
        ? "rgba(226, 234, 255, 0.95)"
        : palette.text.primary;

  const bodyColor = active
    ? "rgba(255, 255, 255, 0.85)"
    : isLocked
      ? isDark
        ? "rgba(160, 175, 210, 0.6)"
        : "rgba(120, 140, 170, 0.6)"
      : isDark
        ? "rgba(210, 220, 255, 0.82)"
        : palette.text.secondary;

  const borderColor = active
    ? "rgba(255, 255, 255, 0.42)"
    : isLocked
      ? isDark
        ? "rgba(122, 162, 255, 0.18)"
        : "rgba(17, 76, 170, 0.08)"
      : isDark
        ? "rgba(122, 162, 255, 0.28)"
        : "rgba(17, 76, 170, 0.12)";

  return (
    <Card
      component="article"
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: active ? activeBackground : isLocked ? lockedBackground : inactiveBackground,
        border: `1px solid ${borderColor}`,
        color: active ? palette.common.white : palette.text.primary,
        boxShadow: active 
          ? tokens.shadow.level3 
          : isLocked 
            ? tokens.shadow.level1 
            : tokens.shadow.level2,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isLocked ? 0.75 : 1,
        position: "relative",
        cursor: isLocked ? "default" : "pointer",
        "&:hover": {
          transform: isLocked ? "none" : "translateY(-6px)",
          boxShadow: isLocked 
            ? tokens.shadow.level1 
            : active 
              ? tokens.shadow.level3 
              : tokens.shadow.level3,
          borderColor: isLocked 
            ? borderColor 
            : active 
              ? "rgba(255, 255, 255, 0.5)"
              : isDark
                ? "rgba(122, 162, 255, 0.35)"
                : "rgba(17, 76, 170, 0.18)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, pb: 3 }}>
        <Stack spacing={2.5}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="eyebrow"
                sx={{
                  color: active
                    ? "rgba(255, 255, 255, 0.78)"
                    : isLocked
                      ? isDark
                        ? "rgba(150, 165, 200, 0.7)"
                        : "rgba(120, 140, 170, 0.7)"
                      : isDark
                        ? "rgba(189, 204, 255, 0.82)"
                        : palette.brand.secondary,
                }}
              >
                Case {caseStudy.number}
              </Typography>
              {isLocked && (
                <LockRoundedIcon
                  sx={{
                    fontSize: "0.875rem",
                    color: isDark ? "rgba(150, 165, 200, 0.7)" : "rgba(120, 140, 170, 0.7)",
                  }}
                />
              )}
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              {isInProgress && (
                <Pill
                  label="In Progress"
                  sx={{
                    backgroundColor: isDark
                      ? "rgba(255, 193, 7, 0.2)"
                      : "rgba(255, 193, 7, 0.15)",
                    color: isDark ? "rgba(255, 224, 130, 0.95)" : "rgba(184, 134, 11, 0.95)",
                    border: `1px solid ${
                      isDark ? "rgba(255, 193, 7, 0.3)" : "rgba(255, 193, 7, 0.25)"
                    }`,
                    fontSize: "0.7rem",
                  }}
                  size="small"
                />
              )}
              <Pill
                label={caseStudy.tag}
                sx={{
                  backgroundColor: active
                    ? "rgba(255, 255, 255, 0.2)"
                    : isDark
                      ? "rgba(98, 132, 218, 0.24)"
                      : "rgba(227, 241, 255, 0.85)",
                  color: active
                    ? "rgba(255, 255, 255, 0.92)"
                    : isLocked
                      ? isDark
                        ? "rgba(180, 195, 220, 0.8)"
                        : "rgba(120, 140, 170, 0.8)"
                      : isDark
                        ? "rgba(214, 224, 255, 0.92)"
                        : palette.brand.secondary,
                  border: active ? "1px solid rgba(255, 255, 255, 0.3)" : undefined,
                }}
                size="small"
              />
            </Stack>
          </Stack>

          <Typography variant="h3" component="h3" sx={{ color: headingColor }}>
            {caseStudy.title}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 500,
              color: bodyColor,
            }}
          >
            {caseStudy.platform}
            {caseStudy.platformDetail && (
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  ml: 0.75,
                  color: bodyColor,
                  fontWeight: 400,
                  opacity: 0.9,
                }}
              >
                ({caseStudy.platformDetail})
              </Box>
            )}
          </Typography>

          {caseStudy.stat && (
            <Typography variant="body2" sx={{ color: bodyColor }}>
              {caseStudy.stat}
            </Typography>
          )}

          {caseStudy.readingTimeMinutes && (
            <Typography
              variant="body2"
              sx={{
                color: bodyColor,
                fontSize: "0.8125rem",
                opacity: 0.85,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: bodyColor,
                  opacity: 0.6,
                }}
              />
              {caseStudy.readingTimeMinutes} min read
            </Typography>
          )}

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {caseStudy.tags.map((tag) => {
              const isNDA = tag.toLowerCase() === "nda";
              return (
                <Pill
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: isNDA
                      ? active
                        ? "rgba(255, 87, 34, 0.25)"
                        : isDark
                          ? "rgba(255, 87, 34, 0.2)"
                          : "rgba(255, 87, 34, 0.12)"
                      : active
                        ? "rgba(255, 255, 255, 0.18)"
                        : isDark
                          ? "rgba(98, 132, 218, 0.22)"
                          : "rgba(31, 111, 235, 0.12)",
                    color: isNDA
                      ? active
                        ? "rgba(255, 183, 154, 0.95)"
                        : isDark
                          ? "rgba(255, 183, 154, 0.95)"
                          : "rgba(191, 54, 12, 0.95)"
                      : active
                        ? "rgba(255, 255, 255, 0.9)"
                        : isDark
                          ? "rgba(221, 230, 255, 0.92)"
                          : palette.brand.secondary,
                    border: isNDA
                      ? `1px solid ${
                          active
                            ? "rgba(255, 87, 34, 0.4)"
                            : isDark
                              ? "rgba(255, 87, 34, 0.3)"
                              : "rgba(255, 87, 34, 0.25)"
                        }`
                      : undefined,
                    fontWeight: isNDA ? 600 : undefined,
                  }}
                />
              );
            })}
          </Stack>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1, "& .MuiButton-root:focus-visible": { outline: `2px solid ${isDark ? "rgba(145, 167, 255, 0.5)" : "rgba(34, 84, 255, 0.4)"}`, outlineOffset: 2 } }}>
        {isLocked ? (
          <>
            <GhostButton
              disabled
              fullWidth
              endIcon={<LockRoundedIcon />}
              sx={{
                opacity: 0.6,
                cursor: "not-allowed",
                color: isDark ? "rgba(150, 165, 200, 0.6)" : "rgba(120, 140, 170, 0.6)",
                borderColor: isDark ? "rgba(122, 162, 255, 0.15)" : "rgba(17, 76, 170, 0.1)",
              }}
            >
              Locked
            </GhostButton>
            <GhostButton
              fullWidth
              color="primary"
              onClick={onOpenRecap}
              endIcon={<PlayCircleOutlineRoundedIcon />}
              title="View quick summary of key highlights"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(122, 162, 255, 0.14)",
                },
              }}
            >
              Quick Summary
            </GhostButton>
          </>
        ) : active ? (
          <>
            <PrimaryButton
              component={RouterLink}
              to={caseStudy.to}
              fullWidth
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Explore
            </PrimaryButton>
            <GhostButton
              fullWidth
              color="inherit"
              onClick={onOpenRecap}
              endIcon={<PlayCircleOutlineRoundedIcon />}
              title="View quick summary of key highlights"
              sx={{
                color: "rgba(255, 255, 255, 0.92)",
                borderColor: "rgba(255, 255, 255, 0.45)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                },
              }}
            >
              Quick Summary
            </GhostButton>
          </>
        ) : (
          <>
            <GhostButton
              component={RouterLink}
              to={caseStudy.to}
              fullWidth
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Explore
            </GhostButton>
            <GhostButton
              fullWidth
              color="primary"
              onClick={onOpenRecap}
              endIcon={<PlayCircleOutlineRoundedIcon />}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(122, 162, 255, 0.14)",
                },
              }}
            >
              Quick Summary
            </GhostButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CaseStudyCard;


