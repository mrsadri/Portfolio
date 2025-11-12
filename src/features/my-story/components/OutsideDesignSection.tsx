import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Pill } from "../../../shared/ui";
import SectionHeader from "./SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { CertificateItem, EducationItem } from "../types";

type OutsideDesignItem = EducationItem | CertificateItem;

type OutsideDesignSectionProps = {
  items: ReadonlyArray<OutsideDesignItem>;
};

const OutsideDesignSection = ({ items }: OutsideDesignSectionProps) => (
  <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <Stack spacing={5}>
        <SectionHeader
          eyebrow="Beyond Design"
          title="Outside Design"
          icon={<AutoAwesomeRoundedIcon color="primary" />}
          align="left"
        />
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={`${item.title}-${item.date}-${index}`}>
              <SurfaceCard sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
                      <Pill label={item.badge} size="small" />
                      <Typography variant="caption" color="text.secondary">
                        {item.date}
                      </Typography>
                    </Stack>
                    <Typography variant="h5">{item.title}</Typography>
                    {"institution" in item && item.institution && (
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.institution}
                      </Typography>
                    )}
                    {"details" in item && item.details && (
                      <Stack component="ul" spacing={0.75} sx={{ pl: 2, mb: 0 }}>
                        {item.details.map((detail) => (
                          <Typography component="li" key={detail} variant="body2" color="text.secondary">
                            {detail}
                          </Typography>
                        ))}
                      </Stack>
                    )}
                    {"hours" in item && item.hours && (
                      <Typography variant="body2" color="text.secondary">
                        {item.hours}
                      </Typography>
                    )}
                    {"score" in item && item.score && (
                      <Typography variant="body2" color="text.secondary">
                        {item.score}
                      </Typography>
                    )}
                    {"topics" in item && item.topics && (
                      <Typography variant="body2" color="text.secondary">
                        {item.topics}
                      </Typography>
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

export default OutsideDesignSection;

