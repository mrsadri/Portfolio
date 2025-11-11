import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "center" | "left";
};

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  icon,
  align = "center",
}: SectionHeaderProps) => (
  <Stack
    spacing={1.5}
    alignItems={align === "center" ? "center" : "flex-start"}
    textAlign={align}
  >
    {(icon || eyebrow) && (
      <Stack direction="row" spacing={1} alignItems="center">
        {icon}
        {eyebrow && (
          <Typography variant="tag" color="brand.secondary">
            {eyebrow}
          </Typography>
        )}
      </Stack>
    )}
    <Typography variant="h2">{title}</Typography>
    {subtitle && (
      <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: align === "center" ? 720 : 640, lineHeight: 1.6 }}>
        {subtitle}
      </Typography>
    )}
  </Stack>
);

export default SectionHeader;


