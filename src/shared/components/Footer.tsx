import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
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
import dayjs from "dayjs";

const Footer = () => {
  const year = dayjs().year();

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Stack spacing={{ xs: 5, md: 6 }}>
          <Card
            component="section"
            elevation={0}
            sx={{
              boxShadow: "none",
              borderRadius: 4,
              bgcolor: "background.paper",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
            }}
          >
            <CardContent sx={{ pb: 0 }}>
              <Stack spacing={1.5} textAlign="center">
                <Typography variant="h3">
                  Let&rsquo;s Talk and Work Together
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </Typography>
              </Stack>
            </CardContent>
            <CardActions sx={{ pt: { xs: 3, md: 4 }, justifyContent: "center" }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 2.5 }}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  component="a"
                  href="mailto:sadrimasih@gmail.com"
                  startIcon={<EmailRoundedIcon />}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  sadrimasih@gmail.com
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/msadri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  variant="outlined"
                  size="large"
                >
                  LinkedIn
                </Button>
                <Button
                  component="a"
                  href="https://github.com/mrsadri"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  variant="outlined"
                  size="large"
                >
                  GitHub
                </Button>
              </Stack>
            </CardActions>
          </Card>

          <Stack spacing={1} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              © {year} Masih Sadri. Crafted with empathy and care.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built from scratch by Masih with ❤️
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;


