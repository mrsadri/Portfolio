import { Card } from "@mui/material";
import type { CardProps } from "@mui/material/Card";

const SurfaceCard = ({ sx, children, ...props }: CardProps) => (
  <Card
    elevation={0}
    variant="outlined"
    sx={{
      borderRadius: (theme) => theme.tokens.radius.surface,
      boxShadow: "none",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Card>
);

export default SurfaceCard;


