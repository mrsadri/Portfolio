import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import SectionHeader from "./SectionHeader";
import type { EducationItem } from "../types";

type EducationSectionProps = {
  items: ReadonlyArray<EducationItem>;
};

const EducationSection = ({ items }: EducationSectionProps) => (
  <Box
    sx={{
      py: { xs: 6, md: 8 },
      backgroundColor: "background.paper",
    }}
  >
    <Container>
      <Stack spacing={4}>
        <SectionHeader icon={<HistoryEduRoundedIcon color="secondary" />} title="Education" />
        <Stack spacing={3}>
          {items.map((item) => (
            <Card key={`${item.institution}-${item.program}`} sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={2}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography variant="h5">{item.program}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.period}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.institution}
                </Typography>
                {item.description && (
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                )}
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default EducationSection;


