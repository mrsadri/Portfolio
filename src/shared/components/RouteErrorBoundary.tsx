import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const getErrorDetails = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return {
      title: `${error.status} ${error.statusText}`,
      description: error.data || "The requested page could not be loaded.",
    };
  }

  if (error instanceof Error) {
    return {
      title: "Something went wrong",
      description: error.message,
    };
  }

  return {
    title: "Something went wrong",
    description: "An unexpected error occurred while loading this page.",
  };
};

const RouteErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const { title, description } = getErrorDetails(error);

  return (
    <Box
      role="alert"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <ErrorOutlineRoundedIcon color="error" sx={{ fontSize: 64 }} />
          <Stack spacing={1.5}>
            <Typography variant="h4" component="h1">
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              startIcon={<HomeRoundedIcon />}
              onClick={() => navigate("/", { replace: true })}
            >
              Go home
            </Button>
            <Button
              variant="outlined"
              startIcon={<RefreshRoundedIcon />}
              onClick={() => navigate(0)}
            >
              Retry
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default RouteErrorBoundary;


