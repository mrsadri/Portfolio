import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Pill } from "@shared/ui";
import SectionHeader from "@shared/components/SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { EducationItem } from "../types";

type EducationSectionProps = {
  items: ReadonlyArray<EducationItem>;
};

const EducationSection = ({ items }: EducationSectionProps) => (
  <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <Stack spacing={5}>
        <SectionHeader
          eyebrow="Education"
          title="Academic Foundations"
          icon={<SchoolRoundedIcon color="primary" />}
          align="left"
        />
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={`${item.title}-${item.institution}`}>
              <SurfaceCard sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Pill label={item.badge} size="small" />
                      <Typography variant="caption" color="text.secondary">
                        {item.date}
                      </Typography>
                    </Stack>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {item.institution}
                    </Typography>
                    {item.details && (
                      <Stack component="ul" spacing={0.75} sx={{ pl: 2, mb: 0 }}>
                        {item.details.map((detail) => (
                          <Typography component="li" key={detail} variant="body2" color="text.secondary">
                            {detail}
                          </Typography>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </CardContent>
              </SurfaceCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default EducationSection;


