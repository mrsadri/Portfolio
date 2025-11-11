import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import type { TimelineItem } from "../types";

type ExperienceSectionProps = {
  title?: string;
  icon?: React.ReactNode;
  items: ReadonlyArray<TimelineItem>;
};

const ExperienceSection = ({
  title = "Professional Experience",
  icon = <WorkHistoryRoundedIcon color="primary" />,
  items,
}: ExperienceSectionProps) => (
  <Box sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          {icon}
          <Typography variant="h3">{title}</Typography>
        </Stack>
        <Stack spacing={3}>
          {items.map((item) => (
            <Card key={`${item.company}-${item.role}`} sx={{ p: { xs: 3, md: 4 } }}>
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
                  {item.company}
                </Typography>
                {item.description && (
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                )}
                <Stack component="ul" spacing={1.2} sx={{ pl: 2, mb: 0 }}>
                  {item.highlights.map((highlight) => (
                    <Typography
                      component="li"
                      key={highlight}
                      variant="body1"
                      color="text.secondary"
                    >
                      {highlight}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default ExperienceSection;


