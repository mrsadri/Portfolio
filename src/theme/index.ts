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
      main: "#1b4332",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#40916c",
    },
    background: {
      default: "#f6f7f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#161c24",
      secondary: "#4f5b62",
    },
    brand: {
      primary: "#1b4332",
      secondary: "#2d6a4f",
      accent: "#95d5b2",
      muted: "#e8f3ef",
    },
    divider: "rgba(22, 28, 36, 0.12)",
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
          backgroundImage: "linear-gradient(135deg, #1b4332, #2d6a4f)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
          backgroundColor: "#e8f3ef",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          boxShadow:
            "0 18px 40px rgba(24, 45, 35, 0.08), 0 2px 8px rgba(24, 45, 35, 0.08)",
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
          backgroundColor: "rgba(246, 247, 249, 0.9)",
          borderBottom: "1px solid rgba(22, 28, 36, 0.06)",
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

