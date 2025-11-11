import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type { Breakpoint, PaletteMode } from "@mui/material";
import type { CSSProperties, ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
    surface: {
      base: string;
      elevated: string;
      glass: string;
      outline: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
    surface?: {
      base: string;
      elevated: string;
      glass: string;
      outline: string;
    };
  }

  type RadiusValue = number | string;

  type RadiusScale = {
    xs: RadiusValue;
    sm: RadiusValue;
    md: RadiusValue;
    lg: RadiusValue;
    xl: RadiusValue;
    pill: RadiusValue;
    card: RadiusValue;
    surface: RadiusValue;
  };

  type SpacingScale = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };

  type ShadowScale = {
    level1: string;
    level2: string;
    level3: string;
    inset?: string;
  };

  interface Theme {
    tokens: {
      radius: RadiusScale;
      spacing: SpacingScale;
      blur: {
        glass: string;
      };
      shadow: ShadowScale;
      transition: {
        hover: string;
      };
      colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        textPrimary: string;
        textSecondary: string;
        border: string;
        subtle: string;
      };
    };
  }

  interface ThemeOptions {
    tokens?: Theme["tokens"];
  }

  interface TypographyVariants {
    display: CSSProperties;
    hero: CSSProperties;
    eyebrow: CSSProperties;
    tag: CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: CSSProperties;
    hero?: CSSProperties;
    eyebrow?: CSSProperties;
    tag?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    hero: true;
    eyebrow: true;
    tag: true;
  }
}

const getDesignTokens = (mode: PaletteMode) => {
  const isLight = mode === "light";

  const radius = {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    pill: "999px",
  } as const;

  const spacing = {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  } as const;

  const tokens = {
    radius: {
      ...radius,
      card: radius.lg,
      surface: radius.md,
    },
    spacing,
    blur: {
      glass: "18px",
    },
    shadow: {
      level1: "0 8px 18px rgba(15, 23, 42, 0.08)",
      level2: "0 14px 28px rgba(15, 23, 42, 0.12)",
      level3: "0 24px 48px rgba(15, 23, 42, 0.16)",
    },
    transition: {
      hover: "all 160ms ease",
    },
  } as const;

  const colorTokens = {
    primary: isLight ? "#2254ff" : "#91a7ff",
    secondary: isLight ? "#0a387d" : "#7db4ff",
    background: isLight ? "#f4f7fb" : "#04070f",
    surface: isLight ? "#ffffff" : "rgba(10,16,29,0.92)",
    textPrimary: isLight ? "#0b1c33" : "#f5f7ff",
    textSecondary: isLight ? "#4a5d7d" : "#b7c4e5",
    border: isLight ? "rgba(11, 34, 74, 0.12)" : "rgba(145, 167, 255, 0.28)",
    subtle: isLight ? "rgba(34, 84, 255, 0.06)" : "rgba(145, 167, 255, 0.14)",
  } as const;

  return {
    palette: {
      mode,
      primary: {
        main: colorTokens.primary,
        contrastText: isLight ? "#ffffff" : "#060913",
      },
      secondary: {
        main: isLight ? "#0086ff" : "#63b3ff",
        contrastText: isLight ? "#021631" : "#021431",
      },
      background: {
        default: colorTokens.background,
        paper: isLight ? "#ffffff" : "#0a101d",
      },
      text: {
        primary: colorTokens.textPrimary,
        secondary: colorTokens.textSecondary,
      },
      brand: {
        primary: colorTokens.primary,
        secondary: isLight ? "#0a387d" : "#a8c1ff",
        accent: isLight ? "#d8e5ff" : "#2a4bad",
        muted: isLight ? "rgba(34, 84, 255, 0.08)" : "rgba(145, 167, 255, 0.18)",
      },
      surface: {
        base: colorTokens.surface,
        elevated: isLight ? "rgba(255, 255, 255, 0.94)" : "rgba(14, 22, 38, 0.9)",
        glass: isLight ? "rgba(244, 247, 251, 0.75)" : "rgba(18, 28, 48, 0.7)",
        outline: colorTokens.border,
      },
      divider: isLight ? "rgba(9, 29, 61, 0.12)" : "rgba(130, 151, 203, 0.26)",
    },
    tokens: {
      ...tokens,
      colors: colorTokens,
    },
    typography: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      display: {
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        fontSize: "clamp(3.5rem, 7vw, 4.5rem)",
      },
      hero: {
        fontWeight: 700,
        letterSpacing: "-0.025em",
        lineHeight: 1.12,
        fontSize: "clamp(2.6rem, 6vw, 3.5rem)",
      },
      eyebrow: {
        fontWeight: 600,
        letterSpacing: "0.14em",
      textTransform: "uppercase" as const,
        fontSize: "0.75rem",
      },
      tag: {
        fontWeight: 600,
        letterSpacing: 0.4,
        fontSize: "0.75rem",
      },
      h1: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1.16,
        fontSize: "2.4rem",
      },
      h2: {
        fontWeight: 600,
        letterSpacing: "-0.015em",
        lineHeight: 1.2,
        fontSize: "2rem",
      },
      h3: {
        fontWeight: 600,
        lineHeight: 1.28,
        fontSize: "1.6rem",
      },
      h4: {
        fontWeight: 600,
        lineHeight: 1.32,
        fontSize: "1.4rem",
      },
      subtitle1: {
        fontWeight: 500,
      },
      button: {
        textTransform: "none" as const,
        fontWeight: 600,
        letterSpacing: 0,
      },
    },
    shape: {
      borderRadius: tokens.radius.surface,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isLight ? "#f1f6ff" : "#050b18",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg" as Breakpoint,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            borderRadius: tokens.radius.pill,
            paddingInline: tokens.spacing.lg,
            paddingBlock: tokens.spacing.sm,
            fontWeight: 600,
            transition: tokens.transition.hover,
            "&:focus-visible": {
              outline: `3px solid ${isLight ? "rgba(34, 84, 255, 0.35)" : "rgba(145, 167, 255, 0.45)"}`,
              outlineOffset: 2,
            },
          },
        },
        variants: [
          {
            props: { variant: "contained" as const },
            style: {
              backgroundImage: isLight
                ? "linear-gradient(135deg, #2254ff, #0f2e84)"
                : "linear-gradient(135deg, #688cff, #2f4db8)",
              color: isLight ? "#ffffff" : "#f5f7ff",
              boxShadow: tokens.shadow.level1,
              "&:hover": {
                boxShadow: tokens.shadow.level2,
              },
              "&:active": {
                transform: "translateY(1px)",
              },
            },
          },
          {
            props: { variant: "outlined" as const },
            style: {
              borderWidth: 1,
              borderColor: colorTokens.border,
              color: isLight ? colorTokens.secondary : colorTokens.textPrimary,
              "&:hover": {
                borderColor: isLight ? "rgba(34, 84, 255, 0.42)" : "rgba(145, 167, 255, 0.6)",
                backgroundColor: isLight
                  ? "rgba(34, 84, 255, 0.08)"
                  : "rgba(145, 167, 255, 0.18)",
              },
            },
          },
          {
            props: { variant: "text" as const },
            style: {
              color: isLight ? colorTokens.primary : colorTokens.secondary,
              "&:hover": {
                backgroundColor: isLight
                  ? "rgba(34, 84, 255, 0.08)"
                  : "rgba(145, 167, 255, 0.18)",
              },
            },
          },
        ],
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: tokens.radius.pill,
            fontWeight: 600,
            fontSize: "0.75rem",
            backgroundColor: isLight ? "#e3f1ff" : "rgba(114, 148, 227, 0.26)",
            color: isLight ? "#0b5394" : "#d5dfff",
            paddingInline: 6,
            "&:focus-visible": {
              outline: "2px solid rgba(122, 162, 255, 0.6)",
              outlineOffset: 2,
            },
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            display: "h1",
            hero: "h2",
            eyebrow: "p",
            tag: "span",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: tokens.radius.card,
            boxShadow: tokens.shadow.level1,
            background: colorTokens.surface,
            backdropFilter: `blur(${tokens.blur.glass})`,
            border: `1px solid ${colorTokens.border}`,
            transition: tokens.transition.hover,
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: tokens.shadow.level2,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: tokens.radius.surface,
            backgroundImage: "none",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: "transparent" as const,
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backdropFilter: "blur(12px)",
            backgroundColor: isLight
              ? "rgba(241, 246, 255, 0.9)"
              : "rgba(10, 16, 30, 0.9)",
            borderBottom: `1px solid ${
              isLight ? "rgba(12, 51, 106, 0.08)" : "rgba(122, 162, 255, 0.24)"
            }`,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: tokens.radius.card,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            cursor: "pointer",
            textDecoration: "none",
            fontWeight: 600,
            color: isLight ? "#1f6feb" : "#9eb8ff",
            "&:hover": {
              textDecoration: "underline",
            },
            "&:focus-visible": {
              outline: "2px solid rgba(122, 162, 255, 0.45)",
              outlineOffset: 2,
            },
          },
        },
      },
    },
  };
};

const createAppTheme = (mode: PaletteMode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));

type ColorModeContextValue = {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: "light",
  setMode: () => undefined,
  toggleColorMode: () => undefined,
});

const isBrowser = typeof window !== "undefined";

const getInitialMode = (): PaletteMode => {
  if (!isBrowser) {
    return "light";
  }

  try {
    const storedMode = window.localStorage.getItem("color-mode");
    if (storedMode === "light" || storedMode === "dark") {
      return storedMode;
    }
  } catch (error) {
    if (import.meta.env?.MODE !== "production") {
      console.warn("[theme] Failed to read persisted color mode", error);
    }
  }

  try {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDark.matches ? "dark" : "light";
  } catch {
    return "light";
  }
};

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);
  const persistedModeRef = useRef<PaletteMode | null>(null);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    if (persistedModeRef.current === mode) {
      return;
    }

    persistedModeRef.current = mode;

    try {
      window.localStorage.setItem("color-mode", mode);
    } catch (error) {
      if (import.meta.env?.MODE !== "production") {
        console.warn("[theme] Failed to persist color mode", error);
      }
    }
  }, [mode]);

  const value = useMemo<ColorModeContextValue>(
    () => ({
      mode,
      setMode,
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);

