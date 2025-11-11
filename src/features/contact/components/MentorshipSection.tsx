import Grid from "@mui/system/Grid";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import type { MentorshipOffer } from "../types";

type MentorshipSectionProps = {
  offers: ReadonlyArray<MentorshipOffer>;
};

const MentorshipSection = ({ offers }: MentorshipSectionProps) => (
  <Box
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
      <Grid container spacing={3}>
        {offers.map((offer) => {
          const isFeatured = offer.featured ?? false;
          return (
            <Grid size={{ xs: 12, md: 6 }} key={offer.title}>
              <Card
                sx={{
                  height: "100%",
                  background: isFeatured
                    ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))"
                    : undefined,
                  color: isFeatured ? "primary.contrastText" : undefined,
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="h5">{offer.title}</Typography>
                      <Chip
                        icon={<ScheduleRoundedIcon />}
                        label={offer.duration}
                        color={isFeatured ? "default" : "primary"}
                        sx={{
                          ...(isFeatured && {
                            backgroundColor: "rgba(255,255,255,0.18)",
                            color: "inherit",
                          }),
                        }}
                      />
                    </Stack>
                    <Typography variant="body1" color={isFeatured ? "inherit" : "text.secondary"}>
                      {offer.description}
                    </Typography>
                    {offer.note && (
                      <Typography variant="body2" color={isFeatured ? "inherit" : "text.secondary"}>
                        {offer.note}
                      </Typography>
                    )}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Button
                    component="a"
                    href={offer.href}
                    variant="contained"
                    color={isFeatured ? "secondary" : "primary"}
                    fullWidth
                  >
                    Schedule via Email
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default MentorshipSection;


