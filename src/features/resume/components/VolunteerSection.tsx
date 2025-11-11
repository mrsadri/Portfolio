import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import SectionHeader from "./SectionHeader";
import type { VolunteerExperience } from "../types";

type VolunteerSectionProps = {
  items: ReadonlyArray<VolunteerExperience>;
};

const VolunteerSection = ({ items }: VolunteerSectionProps) => (
  <Box
    sx={{
      py: { xs: 6, md: 8 },
      backgroundColor: "background.paper",
    }}
  >
    <Container>
      <Stack spacing={4}>
        <SectionHeader
          icon={<VolunteerActivismRoundedIcon color="secondary" />}
          title="Volunteer Activity"
        />
        <Stack spacing={3}>
          {items.map((item) => (
            <Card key={`${item.organization}-${item.role}`} sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={2}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography variant="h5">{item.role}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.period}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.organization}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default VolunteerSection;


