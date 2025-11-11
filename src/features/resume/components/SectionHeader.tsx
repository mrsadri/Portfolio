import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  icon?: ReactNode;
  title: string;
};

const SectionHeader = ({ icon, title }: SectionHeaderProps) => (
  <Stack direction="row" spacing={2} alignItems="center">
    {icon}
    <Typography variant="h3">{title}</Typography>
  </Stack>
);

export default SectionHeader;


