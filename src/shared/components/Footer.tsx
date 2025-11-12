import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const year = dayjs().year();

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Stack spacing={{ xs: 4, md: 5 }}>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              © {year} Masih Sadri. Crafted with empathy and care.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built from scratch by Masih with ❤️
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1.5, md: 1.5 }}
            useFlexGap
            flexWrap="wrap"
          >
            <Button
              component="a"
              href="mailto:sadrimasih@gmail.com"
              startIcon={<EmailRoundedIcon />}
              variant="contained"
              color="primary"
            >
              Email Masih
            </Button>
            <Button
              component="a"
              href="https://t.me/masihsadri"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<TelegramIcon />}
              variant="outlined"
            >
              Direct Message on Telegram
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/msadri/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LinkedInIcon />}
              variant="outlined"
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
            >
              GitHub
            </Button>
            <Button
              component={RouterLink}
              to="/contact#mentorship"
              startIcon={<EventAvailableRoundedIcon />}
              variant="contained"
              color="secondary"
            >
              Book a Session
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;


