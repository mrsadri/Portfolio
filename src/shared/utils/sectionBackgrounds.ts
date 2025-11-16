import type { Theme } from "@mui/material/styles";

/**
 * Section background color variants for alternating sections.
 * These create visual separation between sections while maintaining
 * a cohesive design system.
 */
export const SECTION_BACKGROUNDS = {
  /**
   * Light tinted background - used for hero sections and prominent sections
   * Light mode: rgba(244, 247, 251, 0.6)
   * Dark mode: rgba(8, 14, 26, 0.85)
   */
  hero: (theme: Theme) =>
    theme.palette.mode === "light"
      ? "rgba(244, 247, 251, 0.6)"
      : "rgba(8, 14, 26, 0.85)",

  /**
   * Medium tinted background - used for secondary sections
   * Light mode: rgba(244, 247, 251, 0.4)
   * Dark mode: rgba(8, 14, 26, 0.5)
   */
  medium: (theme: Theme) =>
    theme.palette.mode === "light"
      ? "rgba(244, 247, 251, 0.4)"
      : "rgba(8, 14, 26, 0.5)",

  /**
   * Light tinted background - used for tertiary sections
   * Light mode: rgba(244, 247, 251, 0.3)
   * Dark mode: rgba(8, 14, 26, 0.4)
   */
  light: (theme: Theme) =>
    theme.palette.mode === "light"
      ? "rgba(244, 247, 251, 0.3)"
      : "rgba(8, 14, 26, 0.4)",

  /**
   * Subtle tinted background - used for minimal contrast
   * Light mode: rgba(244, 247, 251, 0.2)
   * Dark mode: rgba(8, 14, 26, 0.3)
   */
  subtle: (theme: Theme) =>
    theme.palette.mode === "light"
      ? "rgba(244, 247, 251, 0.2)"
      : "rgba(8, 14, 26, 0.3)",

  /**
   * Paper background - uses theme's paper color
   * Provides standard contrast against tinted backgrounds
   */
  paper: "background.paper",

  /**
   * Transparent background - no background color
   */
  transparent: "transparent",
} as const;

/**
 * Section padding presets for consistent spacing
 */
export const SECTION_PADDING = {
  /** Standard section padding */
  standard: { xs: 6, md: 8 },
  /** Large section padding for hero/feature sections */
  large: { xs: 8, md: 10 },
  /** Extra large padding for hero sections */
  xlarge: { xs: 10, md: 14 },
} as const;

/**
 * Helper function to get section background styles
 * @param variant - The background variant to use
 * @param theme - MUI theme object
 * @returns Background color value
 */
export const getSectionBackground = (
  variant: keyof typeof SECTION_BACKGROUNDS,
  theme: Theme,
): string => {
  const background = SECTION_BACKGROUNDS[variant];
  return typeof background === "function" ? background(theme) : background;
};

/**
 * Common section styles with border and background
 * @param variant - Background variant
 * @param theme - MUI theme object
 * @param options - Optional configuration
 * @param options.includeBorder - Whether to include top border (default: true)
 * @returns Section sx styles object
 */
export const getSectionStyles = (
  variant: keyof typeof SECTION_BACKGROUNDS,
  theme: Theme,
  options?: { includeBorder?: boolean },
) => {
  const { includeBorder = true } = options ?? {};
  return {
    ...(includeBorder && { borderTop: `1px solid ${theme.palette.divider}` }),
    backgroundColor: getSectionBackground(variant, theme),
  };
};

