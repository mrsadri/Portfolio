import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import type { MentorshipOffer } from "../types";

type MentorshipCardProps = {
  offer: MentorshipOffer;
};

const MentorshipCard = ({ offer }: MentorshipCardProps) => {
  const isFeatured = offer.featured ?? false;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: isFeatured
          ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))"
          : undefined,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <CardContent sx={{ flexGrow: 1, px: { xs: 3, md: 3 }, py: { xs: 3, md: 3 } }}>
        <Stack spacing={2.5}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                flexGrow: 1,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {offer.title}
            </Typography>
            <Chip
              icon={<ScheduleRoundedIcon />}
              label={offer.duration}
              color={isFeatured ? "default" : "primary"}
              sx={{
                ml: "auto",
                ...(isFeatured && {
                  backgroundColor: "rgba(255,255,255,0.18)",
                  color: "inherit",
                }),
              }}
            />
          </Stack>
          <Typography 
            variant="body1" 
            sx={{ 
              color: (theme) => theme.palette.text.secondary,
              lineHeight: 1.65,
            }}
          >
            {offer.description}
          </Typography>
          {offer.note && (
            <Typography 
              variant="body1" 
              sx={{ 
                color: (theme) => theme.palette.text.secondary,
                lineHeight: 1.65,
              }}
            >
              {offer.note}
            </Typography>
          )}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: { xs: 3, md: 3 }, pb: { xs: 3, md: 3 }, pt: { xs: 1, md: 0 } }}>
        <Button
          component="a"
          href={offer.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color={isFeatured ? "secondary" : "primary"}
          fullWidth
          sx={{
            minHeight: 44,
            py: 1.25,
          }}
        >
          {offer.ctaLabel ?? "Choose a time"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MentorshipCard;

