import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  icon?: ReactNode;
  title: string;
};

const SectionHeader = ({ icon, title }: SectionHeaderProps) => (
  <Stack direction="row" spacing={2} alignItems="center">
    {icon && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          borderRadius: 2,
          border: "1.5px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        {icon}
      </Box>
    )}
    <Typography variant="h3" sx={{ fontWeight: 600 }}>
      {title}
    </Typography>
  </Stack>
);

export default SectionHeader;


