// File: src/layout/MainLayout.tsx
// Purpose: Renders the primary page frame with navigation, responsive drawer, scroll restoration, and footer.
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Switch,
  Divider,
} from "@mui/material";
import { useEffect, useState, type MouseEvent } from "react";
import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useColorMode } from "../theme";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "MyStory", to: "/my-story" },
  { label: "CaseStudies", to: "/#case-studies" },
  { label: "Contact", to: "/contact" },
  { label: "Resume", to: "/resume" },
] as const;

const MainLayout = () => {
  const theme = useTheme();
  const { mode, setMode } = useColorMode();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLinkActive = (to: string) => {
    if (to.includes("#")) {
      return false;
    }
    if (to === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.pathname === to;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.hash]);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavigation =
    (to: string, closeDrawer = false) =>
    (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      const [pathPart, hashPart] = to.split("#");
      const targetPath = pathPart || "/";
      const targetHash = hashPart ? hashPart : "";

      if (location.pathname === targetPath) {
        event.preventDefault();

        if (targetHash) {
          const element = document.getElementById(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }

      if (closeDrawer) {
        setDrawerOpen(false);
      }
    };

  const colorModeSwitch = (
    <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`} arrow>
      <Stack
        direction="row"
        spacing={0.75}
        alignItems="center"
        sx={{
          px: 1.5,
          py: 0.75,
          borderRadius: (theme) => theme.tokens.radius.pill,
          backgroundColor: "transparent",
          border: "1px solid",
          borderColor: mode === "light" ? "brand.muted" : "rgba(122, 162, 255, 0.35)",
        }}
      >
        <DarkModeOutlinedIcon
          fontSize="small"
          color={mode === "dark" ? "primary" : "action"}
        />
        <Switch
          checked={mode === "dark"}
          onChange={(_event, checked) => setMode(checked ? "dark" : "light")}
          color="primary"
          inputProps={{ "aria-label": "Toggle dark mode" }}
          sx={{
            mx: 0.5,
            ".MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              opacity: 1,
            },
            ".MuiSwitch-track": {
              opacity: 1,
              backgroundColor: mode === "dark" ? "brand.accent" : "brand.muted",
            },
          }}
        />
        <LightModeOutlinedIcon
          fontSize="small"
          color={mode === "light" ? "primary" : "action"}
        />
      </Stack>
    </Tooltip>
  );

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          top: -40,
          left: 0,
          backgroundColor: "background.paper",
          color: "text.primary",
          padding: 1,
          zIndex: 1200,
          "&:focus": {
            top: 12,
          },
        }}
      >
        Skip to main content
      </Box>

      <AppBar position="sticky">
        <Container>
          <Toolbar disableGutters sx={{ py: 1.5 }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "primary.main",
                flexGrow: 1,
              }}
            >
              Masih Sadri
            </Typography>

            {isDesktop ? (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Stack direction="row" spacing={1}>
                  {navigationLinks.map(({ label, to }) => {
                    const active = isLinkActive(to);
                    return (
                      <Button
                        key={to}
                        component={RouterLink}
                        to={to}
                        onClick={handleNavigation(to)}
                        color="inherit"
                        variant="text"
                        disableRipple
                        sx={(theme) => ({
                          position: "relative",
                          fontWeight: 500,
                          color: active ? theme.palette.primary.main : theme.palette.text.secondary,
                          transition: theme.tokens.transition.hover,
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: theme.tokens.spacing.xs,
                            right: theme.tokens.spacing.xs,
                            bottom: -theme.tokens.spacing.xs,
                            height: 2,
                            borderRadius: theme.tokens.radius.xs,
                            backgroundColor: active
                              ? theme.palette.primary.main
                              : "transparent",
                            transition: theme.tokens.transition.hover,
                          },
                        })}
                      >
                        {label}
                      </Button>
                    );
                  })}
                </Stack>
                {colorModeSwitch}
              </Stack>
            ) : (
              <>
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  aria-label="Toggle navigation menu"
                >
                  {drawerOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                  PaperProps={{
                    sx: { width: 320, p: 2 },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight={700}>
                      Navigate
                    </Typography>
                    <IconButton onClick={handleDrawerToggle} aria-label="Close navigation menu">
                      <CloseRoundedIcon />
                    </IconButton>
                  </Stack>
                  <List sx={{ mt: 2 }}>
                    {navigationLinks.map(({ label, to }) => (
                      <ListItemButton
                        key={to}
                        component={RouterLink}
                        to={to}
                        onClick={handleNavigation(to, true)}
                        selected={isLinkActive(to)}
                        sx={{
                          borderRadius: (theme) => theme.tokens.radius.xl,
                          "&.Mui-selected": {
                            backgroundColor: "brand.muted",
                            color: "brand.primary",
                          },
                        }}
                      >
                        <ListItemText primary={label} />
                      </ListItemButton>
                    ))}
                  </List>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex", justifyContent: "center" }}>{colorModeSwitch}</Box>
                </Drawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" id="main-content" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;

