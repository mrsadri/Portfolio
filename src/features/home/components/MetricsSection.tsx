import Grid from "@mui/system/Grid";
import { Box, Container, Stack, Typography } from "@mui/material";
import type { MetricSummary } from "../types";
import ImpactStatCard from "./ImpactStatCard";

type MetricsSectionProps = {
  metrics: ReadonlyArray<MetricSummary>;
};

const MetricsSection = ({ metrics }: MetricsSectionProps) => (
  <Box component="section" sx={{ py: { xs: 6, md: 8 }, pt: { md: 6 } }}>
    <Container>
      <Stack spacing={4}>
        <Stack spacing={1.5} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight={700}>Recent Impact I Have Made</Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400}>
            Measurable outcomes from my design work
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          {metrics.map(({ value, title, description }) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
              <ImpactStatCard value={value} title={title} description={description} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              textAlign: "center",
              lineHeight: 1.65,
              fontSize: { xs: "0.875rem", md: "0.9375rem" },
            }}
          >
            These aren't just numbers. They're real improvements in people's experiences and measurable business impact.
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default MetricsSection;


