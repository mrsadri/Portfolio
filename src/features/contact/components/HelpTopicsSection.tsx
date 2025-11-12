import Grid from "@mui/system/Grid";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import type { HelpTopic } from "../types";

type HelpTopicsSectionProps = {
  topics: ReadonlyArray<HelpTopic>;
};

const HelpTopicsSection = ({ topics }: HelpTopicsSectionProps) => (
  <Box sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Stack spacing={3} mb={4}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h2">What I Can Help With</Typography>
        </Stack>
        <Grid container spacing={3}>
          {topics.map((topic) => (
            <Grid size={{ xs: 12, md: 6 }} key={topic.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Typography variant="h5">{topic.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {topic.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default HelpTopicsSection;


