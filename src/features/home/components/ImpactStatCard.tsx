import { Card, CardContent, Typography } from "@mui/material";
import type { MetricSummary } from "../types";

type ImpactStatCardProps = MetricSummary;

const ImpactStatCard = ({ value, title, description }: ImpactStatCardProps) => (
  <Card
    component="article"
    elevation={0}
    variant="outlined"
    sx={(theme) => ({
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: theme.tokens.radius.surface,
      boxShadow: "none",
    })}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h4" component="p">
        {value}
      </Typography>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ImpactStatCard;


