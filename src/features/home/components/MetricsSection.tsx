import Grid from "@mui/system/Grid";
import { Box, Container } from "@mui/material";
import type { MetricSummary } from "../types";
import ImpactStatCard from "./ImpactStatCard";

type MetricsSectionProps = {
  metrics: ReadonlyArray<MetricSummary>;
};

const MetricsSection = ({ metrics }: MetricsSectionProps) => (
  <Box component="section" sx={{ py: { xs: 6, md: 8 }, pt: { md: 6 } }}>
    <Container>
      <Grid container spacing={{ xs: 3, md: 3.5 }}>
        {metrics.map(({ value, title, description }) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
            <ImpactStatCard value={value} title={title} description={description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default MetricsSection;


