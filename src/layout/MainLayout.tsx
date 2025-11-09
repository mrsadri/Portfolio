import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const navigationLinks = [
  { label: "my story", to: "/my-story" },
  { label: "case studies", to: "/#case-studies" },
  { label: "contact", to: "/contact" },
  { label: "resume", to: "/resume" },
] as const;

const MainLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLinkActive = (to: string) => {
    if (to.includes("#")) {
      const hash = to.slice(to.indexOf("#"));
      return location.pathname === "/" && location.hash === hash;
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
              <Stack direction="row" spacing={1}>
                {navigationLinks.map(({ label, to }) => (
                  <Button
                    key={to}
                    component={RouterLink}
                    to={to}
                    color="inherit"
                    variant={isLinkActive(to) ? "contained" : "text"}
                    sx={{
                      fontWeight: 500,
                      ...(isLinkActive(to) && {
                        backgroundColor: "brand.muted",
                        color: "brand.primary",
                        "&:hover": {
                          backgroundColor: "brand.muted",
                        },
                      }),
                    }}
                  >
                    {label}
                  </Button>
                ))}
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
                        onClick={handleDrawerToggle}
                        selected={isLinkActive(to)}
                        sx={{
                          borderRadius: 2,
                        }}
                      >
                        <ListItemText primary={label} />
                      </ListItemButton>
                    ))}
                  </List>
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

