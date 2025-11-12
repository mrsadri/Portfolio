import { Box, Container, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

const Footer = () => {
  const year = dayjs().year();

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Stack spacing={1} textAlign="center">
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: "0.875rem", md: "0.875rem" },
              lineHeight: 1.6,
            }}
          >
            © {year} Masih Sadri. Crafted with empathy and care.
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: "0.875rem", md: "0.875rem" },
              lineHeight: 1.6,
            }}
          >
            Built from scratch by Masih with ❤️
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;


