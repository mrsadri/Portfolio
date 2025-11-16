import Grid from "@mui/system/Grid";
import { Box, Container, Stack, Typography } from "@mui/material";
import type { CaseStudyId, CaseStudySummary } from "../types";
import CaseStudyCard from "./CaseStudyCard";

type CaseStudiesSectionProps = {
  caseStudies: ReadonlyArray<CaseStudySummary>;
  onOpenRecap: (id: CaseStudyId) => void;
};

const CaseStudiesSection = ({ caseStudies, onOpenRecap }: CaseStudiesSectionProps) => (
  <Box
    id="case-studies"
    component="section"
    sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.paper" }}
  >
    <Container>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h2">Case Studies</Typography>
        <Typography variant="h6" color="text.secondary">
          Examples of the impact I have made
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        {caseStudies.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
            <CaseStudyCard
              caseStudy={item}
              active={item.id === "divar"}
              onOpenRecap={() => onOpenRecap(item.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default CaseStudiesSection;


