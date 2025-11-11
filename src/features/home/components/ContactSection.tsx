import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
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
          <Stack spacing={0.75}>
            <Typography variant="h3" component="h2">
              Let’s connect
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              Share your challenge or say hello—happy to explore product design collaborations.
            </Typography>
          </Stack>
          <Divider sx={{ mt: 3 }} />
        </CardContent>
        <CardActions
          sx={{
            px: { xs: 5, md: 5 },
            pb: { xs: 5, md: 5 },
            pt: 0,
            flexDirection: "column",
            alignItems: "stretch",
            gap: 1,
          }}
        >
          <Button component="a" href="mailto:sdarimasih@gmail.com" variant="contained" size="large">
            sdarimasih@gmail.com
          </Button>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            {socialLinks.map(({ label, href }) => (
              <Button
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                fullWidth
              >
                {label}
              </Button>
            ))}
          </Stack>
        </CardActions>
      </Card>
    </Container>
  </Box>
);

export default ContactSection;


