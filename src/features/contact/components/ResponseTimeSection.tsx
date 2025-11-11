import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import type { ResponseTime } from "../types";

type ResponseTimeSectionProps = {
  responseTime: ResponseTime;
};

const ResponseTimeSection = ({ responseTime }: ResponseTimeSectionProps) => (
  <Box
    sx={{
      py: { xs: 6, md: 8 },
      backgroundColor: "background.paper",
    }}
  >
    <Container>
      <Card sx={{ p: { xs: 4, md: 5 } }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <AlternateEmailRoundedIcon color="primary" />
            <Typography variant="h4">{responseTime.title}</Typography>
          </Stack>
          {responseTime.paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Card>
    </Container>
  </Box>
);

export default ResponseTimeSection;


