// File: src/components/LoadingScreen.tsx
// Purpose: Displays a centered loading indicator while lazy-loaded routes resolve.
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingScreen = () => (
  <Box
    sx={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
    }}
  >
    <CircularProgress color="primary" />
    <Typography variant="body1" color="text.secondary">
      Loading experience…
    </Typography>
  </Box>
);

export default LoadingScreen;

