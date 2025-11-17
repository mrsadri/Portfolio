import Grid from "@mui/system/Grid";
import { Box, Container, Stack, Typography } from "@mui/material";
import type { MentorshipOffer } from "../types";
import MentorshipCard from "./MentorshipCard";

type MentorshipSectionProps = {
  offers: ReadonlyArray<MentorshipOffer>;
};

const MentorshipSection = ({ offers }: MentorshipSectionProps) => (
  <Box
    id="section-mentorship"
    sx={{
      py: { xs: 6, md: 8 },
      backgroundColor: "background.paper",
    }}
  >
    <Container>
      <Stack spacing={3} alignItems="center" textAlign="center" mb={4}>
        <Typography variant="h2">Mentorship & Sessions</Typography>
        <Typography variant="h6" color="text.secondary">
          Looking for a mentor or someone to chat with?
        </Typography>
      </Stack>
      <Grid container spacing={{ xs: 4, md: 3 }}>
        {offers.map((offer) => (
          <Grid size={{ xs: 12, md: 6 }} key={offer.title}>
            <MentorshipCard offer={offer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default MentorshipSection;


