import { Card, CardContent, Stack, Typography } from "@mui/material";

type ImpactStatCardProps = {
  value: string;
  label: string;
  description: string;
};

const ImpactStatCard = ({ value, label, description }: ImpactStatCardProps) => (
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
        {label}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ImpactStatCard;

