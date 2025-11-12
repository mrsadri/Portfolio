import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import type { SocialLink } from "../types";

type ContactSectionProps = {
  socialLinks: ReadonlyArray<SocialLink>;
};

const ContactSection = ({ socialLinks }: ContactSectionProps) => (
  <Box
    component="section"
    sx={(theme) => ({
      py: { xs: 6, md: 8 },
      background:
        theme.palette.mode === "light"
          ? "linear-gradient(135deg, rgba(34,84,255,0.05), transparent 70%)"
          : "linear-gradient(135deg, rgba(48,86,176,0.18), rgba(4,7,15,0))",
    })}
  >
    <Container maxWidth="md">
      <Card
        component="footer"
        elevation={0}
        sx={(theme) => ({
          borderRadius: theme.tokens.radius.surface,
          border: `1px solid ${theme.tokens.colors.border}`,
          background: theme.palette.surface.base,
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <CardContent
          sx={{
            px: { xs: 5, md: 5 },
            pt: { xs: 5, md: 5 },
            pb: { xs: 3.5, md: 3.5 },
            "&:last-child": { pb: { xs: 3.5, md: 3.5 } },
          }}
        >
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h3" component="h2">
              Let’s Talk and Work Together
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ lineHeight: 1.7, maxWidth: 560 }}
            >
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of
              your vision.
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            px: { xs: 5, md: 5 },
            pb: { xs: 5, md: 5 },
            pt: 0,
            justifyContent: "center",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.25, sm: 1.5 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Button
              component="a"
              href="mailto:sadrimasih@gmail.com"
              variant="contained"
              size="large"
              startIcon={<MailOutlineRoundedIcon />}
              sx={{
                borderRadius: 3,
                minWidth: { xs: "100%", sm: 260 },
                px: { xs: 2.5, sm: 4 },
                py: 1.5,
              }}
            >
              sadrimasih@gmail.com
            </Button>
            {socialLinks.map(({ label, href }) => {
              const icon =
                label === "LinkedIn" ? (
                  <LinkedInIcon fontSize="small" />
                ) : (
                  <GitHubIcon fontSize="small" />
                );

              return (
                <Button
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  startIcon={icon}
                  sx={{
                    borderRadius: 3,
                    minWidth: { xs: "100%", sm: 160 },
                    px: { xs: 2.5, sm: 3 },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Stack>
        </CardActions>
      </Card>
    </Container>
  </Box>
);

export default ContactSection;


