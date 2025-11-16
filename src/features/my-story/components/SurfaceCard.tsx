import { Card } from "@mui/material";
import type { CardProps } from "@mui/material/Card";

const SurfaceCard = ({ sx, children, ...props }: CardProps) => (
  <Card
    elevation={0}
    variant="outlined"
    sx={{
      borderRadius: (theme) => theme.tokens.radius.surface,
      boxShadow: "none",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: (theme) =>
          theme.palette.mode === "light"
            ? "0 4px 12px rgba(0, 0, 0, 0.08)"
            : "0 4px 12px rgba(0, 0, 0, 0.3)",
        borderColor: "divider",
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Card>
);

export default SurfaceCard;


