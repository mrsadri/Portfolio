import { Button, Collapse, Divider, IconButton, Stack, Typography, useMediaQuery, useTheme, type SxProps, type Theme } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import type { CaseStudySection } from "../types";
import { mergeSx } from "@shared/utils/sx";

type CaseStudyOutlineNavProps = {
  sections: readonly CaseStudySection[];
  activeSectionId: string;
  onNavigate: (event: ReactMouseEvent<HTMLAnchorElement>, targetId: string) => void;
  outlineLabel?: string;
  containerSx?: SxProps<Theme>;
};

const CaseStudyOutlineNav = ({
  sections,
  activeSectionId,
  onNavigate,
  outlineLabel = "Outline",
  containerSx,
}: CaseStudyOutlineNavProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(!isMobile);

  return (
    <Stack
      component="nav"
      aria-label="Case study sections"
      spacing={1}
      sx={mergeSx(
        (theme: Theme) => ({
          position: { md: "sticky" },
          top: { md: 140 },
          borderRadius: theme.tokens.radius.surface,
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(34,84,255,0.04)"
              : "rgba(34,84,255,0.14)",
          px: { xs: 2, md: 2.5 },
          py: { xs: 2, md: 2.5 },
          border: `1px solid ${
            theme.palette.mode === "light"
              ? "rgba(34,84,255,0.18)"
              : "rgba(98,132,218,0.32)"
          }`,
        }),
        containerSx,
      )}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ cursor: isMobile ? "pointer" : "default" }}
        onClick={() => isMobile && setExpanded(!expanded)}
      >
        <Typography variant="overline" color="text.secondary">
          {outlineLabel}
        </Typography>
        {isMobile && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            sx={{
              minWidth: 44,
              minHeight: 44,
              transition: "transform 0.2s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
            aria-label={expanded ? "Collapse outline" : "Expand outline"}
            aria-expanded={expanded}
          >
            <ExpandMoreRoundedIcon />
          </IconButton>
        )}
      </Stack>
      <Collapse in={expanded} timeout="auto">
        <Divider sx={{ mb: 1 }} />
        {sections.map((section) => (
          <Button
            key={section.id}
            component="a"
            href={`#${section.id}`}
            variant="text"
            size="small"
            onClick={(event) => {
              onNavigate(event, section.id);
              if (isMobile) {
                setExpanded(false);
              }
            }}
            aria-current={activeSectionId === section.id ? "true" : undefined}
            sx={(theme) => {
              const isActive = activeSectionId === section.id;
              return {
                justifyContent: "flex-start",
                fontWeight: isActive ? 600 : 500,
                color: isActive
                  ? theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : theme.palette.brand.secondary
                  : theme.palette.mode === "light"
                    ? theme.palette.brand.secondary
                    : "rgba(221, 230, 255, 0.92)",
                backgroundColor: isActive
                  ? theme.palette.mode === "light"
                    ? "rgba(34,84,255,0.12)"
                    : "rgba(98,132,218,0.28)"
                  : "transparent",
                borderRadius: theme.tokens.radius.surface,
                px: 1.5,
                py: 1,
                minHeight: 44,
                transition: theme.tokens.transition.hover,
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgba(34,84,255,0.16)"
                      : "rgba(98,132,218,0.24)",
                },
              };
            }}
          >
            {section.shortTitle ?? section.title}
          </Button>
        ))}
      </Collapse>
    </Stack>
  );
};

export default CaseStudyOutlineNav;


