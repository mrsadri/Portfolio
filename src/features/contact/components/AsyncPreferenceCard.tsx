import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
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
        <Stack spacing={2} alignItems="flex-start">
          <Stack direction="row" spacing={1} alignItems="center">
            <Diversity3RoundedIcon
              sx={(theme) => ({
                color: theme.palette.mode === "dark" ? theme.palette.common.white : "inherit",
              })}
            />
            <Typography
              variant="h5"
              sx={(theme) => ({
                color: theme.palette.mode === "dark" ? theme.palette.common.white : "inherit",
              })}
            >
              Prefer async communication?
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: theme.palette.mode === "dark" ? "rgba(255,255,255,0.9)" : "inherit",
            })}
          >
            Send me an email with your context, and I’ll tailor the conversation so our call is
            focused and impactful.
          </Typography>
          <Button component="a" href="mailto:sdarimasih@gmail.com" variant="contained" color="secondary">
            Email Masih
          </Button>
        </Stack>
      </Card>
    </Container>
  </Box>
);

export default AsyncPreferenceCard;


