// File: src/theme/index.ts
// Purpose: Configures the global MUI theme including palette, typography, and component style overrides.
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
  }
}

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f6feb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#5ac8fa",
      contrastText: "#0b2c5c",
    },
    background: {
      default: "#f1f6ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#16223a",
      secondary: "#42526b",
    },
    brand: {
      primary: "#1f6feb",
      secondary: "#0b5394",
      accent: "#9bd3ff",
      muted: "#e3f1ff",
    },
    divider: "rgba(12, 51, 106, 0.12)",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 10,
        },
        containedPrimary: {
          backgroundImage: "linear-gradient(135deg, #1f6feb, #0b5394)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
          backgroundColor: "#e3f1ff",
          color: "#0b5394",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            "0 18px 40px rgba(29, 78, 216, 0.08), 0 2px 8px rgba(12, 51, 106, 0.12)",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(241, 246, 255, 0.9)",
          borderBottom: "1px solid rgba(12, 51, 106, 0.08)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;

