import { Box, Container, Stack } from "@mui/material";
import type { ReactNode } from "react";

type ResumeSectionWrapperProps = {
  children: ReactNode;
  backgroundColor?: "default" | "paper";
  sx?: Record<string, unknown>;
};

const ResumeSectionWrapper = ({
  children,
  backgroundColor = "default",
  sx,
}: ResumeSectionWrapperProps) => {
  const boxSx = {
    py: { xs: 6, md: 10 },
    ...(backgroundColor === "paper" ? { backgroundColor: "background.paper" } : {}),
    ...sx,
  };

  return (
    <Box sx={boxSx}>
      <Container maxWidth="lg">
        <Stack spacing={4}>{children}</Stack>
      </Container>
    </Box>
  );
};

export default ResumeSectionWrapper;

