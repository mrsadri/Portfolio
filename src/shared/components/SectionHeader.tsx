import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** Optional eyebrow text displayed above the title */
  eyebrow?: string;
  /** Main title text */
  title: string;
  /** Optional subtitle text displayed below the title */
  subtitle?: string;
  /** Optional icon displayed alongside the header */
  icon?: ReactNode;
  /** Text alignment - defaults to "center" */
  align?: "center" | "left";
  /** Variant style - "full" supports eyebrow/subtitle, "compact" is icon+title only */
  variant?: "full" | "compact";
};

/**
 * Unified SectionHeader component that supports both full-featured and compact layouts.
 * 
 * - Full variant: Supports eyebrow, title, subtitle, icon, and alignment (used in my-story)
 * - Compact variant: Simple icon box + title layout (used in resume)
 */
const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  icon,
  align = "center",
  variant = "full",
}: SectionHeaderProps) => {
  // Compact variant: icon box + title (resume style)
  if (variant === "compact") {
    return (
      <Stack direction="row" spacing={2} alignItems="center">
        {icon && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 2,
              border: "1.5px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            {icon}
          </Box>
        )}
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Stack>
    );
  }

  // Full variant: supports all features (my-story style)
  return (
    <Stack
      spacing={1.5}
      alignItems={align === "center" ? "center" : "flex-start"}
      textAlign={align}
    >
      {(icon || eyebrow) && (
        <Stack direction="row" spacing={1} alignItems="center">
          {icon}
          {eyebrow && (
            <Typography variant="tag" color="brand.secondary">
              {eyebrow}
            </Typography>
          )}
        </Stack>
      )}
      <Typography variant="h2">{title}</Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            maxWidth: align === "center" ? 720 : 640,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
};

export default SectionHeader;

