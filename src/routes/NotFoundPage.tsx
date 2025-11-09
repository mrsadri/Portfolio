// File: src/routes/NotFoundPage.tsx
// Purpose: Supplies the in-app fallback screen for unknown React Router paths.
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => (
  <Box
    sx={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Container>
      <Stack
        spacing={3}
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h2">Page not found</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
          The page you're looking for has moved or no longer exists. Let's bring you back to the work that matters.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          size="large"
        >
          Return home
        </Button>
      </Stack>
    </Container>
  </Box>
);

export default NotFoundPage;

