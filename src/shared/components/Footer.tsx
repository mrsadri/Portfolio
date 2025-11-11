import { Box, Container, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

const Footer = () => {
  const year = dayjs().year();

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} Masih Sadri. Crafted with empathy and care.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with Bun + React + MUI.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;


