import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";

const AsyncPreferenceCard = () => (
  <Box sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Card
        sx={(theme) => ({
          p: { xs: 4, md: 5 },
          background: "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))",
          color:
            theme.palette.mode === "dark" ? theme.palette.common.white : "primary.contrastText",
        })}
      >
        <Stack spacing={{ xs: 2.5, md: 3 }} alignItems="flex-start">
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={(theme) => ({
                color: theme.palette.mode === "dark" ? theme.palette.common.white : "inherit",
              })}
            >
              Ready to collaborate?
            </Typography>
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.mode === "dark" ? "rgba(255,255,255,0.88)" : "inherit",
                maxWidth: 520,
              })}
            >
              Reach out directly by email or follow along on LinkedIn and GitHub. I’ll get back within
              a couple of days.
            </Typography>
          </Stack>
          <Stack spacing={{ xs: 1.5, sm: 2 }} sx={{ width: "100%" }}>
            <Button
              component="a"
              href="mailto:sadrimasih@gmail.com"
              variant="contained"
              color="secondary"
              startIcon={<EmailRoundedIcon />}
              fullWidth
            >
              Email Masih
            </Button>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1.5, sm: 1.5 }} sx={{ width: "100%" }}>
              <Button
                component="a"
                href="https://www.linkedin.com/in/msadri/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<LinkedInIcon />}
                fullWidth
                sx={{
                  color: "inherit",
                  borderColor: "rgba(255,255,255,0.4)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.9)",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },
                }}
              >
                LinkedIn
              </Button>
              <Button
                component="a"
                href="https://github.com/mrsadri"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<GitHubIcon />}
                fullWidth
                sx={{
                  color: "inherit",
                  borderColor: "rgba(255,255,255,0.4)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.9)",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Container>
  </Box>
);

export default AsyncPreferenceCard;


