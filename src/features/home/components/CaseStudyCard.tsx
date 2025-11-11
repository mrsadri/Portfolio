import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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
import { GhostButton, Pill, PrimaryButton } from "../../../shared/ui";
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

  const activeBackground = isDark
    ? "linear-gradient(135deg, rgba(20, 45, 110, 0.98), rgba(58, 118, 226, 0.88))"
    : "linear-gradient(135deg, rgba(17, 76, 170, 0.88), rgba(60, 151, 255, 0.82))";

  const inactiveBackground = isDark
    ? "linear-gradient(140deg, rgba(20, 28, 52, 0.82), rgba(12, 18, 36, 0.88))"
    : "linear-gradient(135deg, rgba(248, 251, 255, 0.94), rgba(232, 242, 255, 0.88))";

  const headingColor = active
    ? "rgba(255, 255, 255, 0.96)"
    : isDark
      ? "rgba(226, 234, 255, 0.95)"
      : palette.text.primary;

  const bodyColor = active
    ? "rgba(255, 255, 255, 0.85)"
    : isDark
      ? "rgba(210, 220, 255, 0.82)"
      : palette.text.secondary;

  const borderColor = active
    ? "rgba(255, 255, 255, 0.42)"
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
        background: active ? activeBackground : inactiveBackground,
        border: `1px solid ${borderColor}`,
        color: active ? palette.common.white : palette.text.primary,
        boxShadow: active ? tokens.shadow.level3 : tokens.shadow.level2,
        transition: tokens.transition.hover,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: tokens.shadow.level3,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, pb: 3 }}>
        <Stack spacing={2.5}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Typography
              variant="eyebrow"
              sx={{
                color: active
                  ? "rgba(255, 255, 255, 0.78)"
                  : isDark
                    ? "rgba(189, 204, 255, 0.82)"
                    : palette.brand.secondary,
              }}
            >
              Case {caseStudy.number}
            </Typography>
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
                  : isDark
                    ? "rgba(214, 224, 255, 0.92)"
                    : palette.brand.secondary,
                border: active ? "1px solid rgba(255, 255, 255, 0.3)" : undefined,
              }}
              size="small"
            />
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

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {caseStudy.tags.map((tag) => (
              <Pill
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: active
                    ? "rgba(255, 255, 255, 0.18)"
                    : isDark
                      ? "rgba(98, 132, 218, 0.22)"
                      : "rgba(31, 111, 235, 0.12)",
                  color: active
                    ? "rgba(255, 255, 255, 0.9)"
                    : isDark
                      ? "rgba(221, 230, 255, 0.92)"
                      : palette.brand.secondary,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
        {active ? (
          <PrimaryButton
            component={RouterLink}
            to={caseStudy.to}
            fullWidth
            endIcon={<ArrowForwardRoundedIcon />}
          >
            Explore
          </PrimaryButton>
        ) : (
          <GhostButton
            component={RouterLink}
            to={caseStudy.to}
            fullWidth
            endIcon={<ArrowForwardRoundedIcon />}
          >
            Explore
          </GhostButton>
        )}
        <GhostButton
          fullWidth
          color={active ? "inherit" : "primary"}
          onClick={onOpenRecap}
          endIcon={<PlayCircleOutlineRoundedIcon />}
          sx={{
            color: active ? "rgba(255, 255, 255, 0.92)" : undefined,
            borderColor: active ? "rgba(255, 255, 255, 0.45)" : undefined,
            "&:hover": {
              backgroundColor: active
                ? "rgba(255, 255, 255, 0.16)"
                : "rgba(122, 162, 255, 0.14)",
            },
          }}
        >
          Recap
        </GhostButton>
      </CardActions>
    </Card>
  );
};

export default CaseStudyCard;


