import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Pill from "../../../shared/components/ui/Pill";
import SectionHeader from "./SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { CertificateItem } from "../types";

type CertificatesSectionProps = {
  certificates: ReadonlyArray<CertificateItem>;
};

const CertificatesSection = ({ certificates }: CertificatesSectionProps) => (
  <Box
    component="section"
    sx={{
      py: { xs: 8, md: 10 },
      backgroundColor: "background.paper",
    }}
  >
    <Container>
      <Stack spacing={5}>
        <SectionHeader
          eyebrow="Continuous Learning"
          title="Certificates & Training"
          icon={<EmojiEventsRoundedIcon color="secondary" />}
          align="left"
        />
        <Grid container spacing={3}>
          {certificates.map((certificate) => (
            <Grid size={{ xs: 12, md: 4 }} key={`${certificate.title}-${certificate.date}`}>
              <SurfaceCard sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Pill label={certificate.badge} size="small" />
                      <Typography variant="caption" color="text.secondary">
                        {certificate.date}
                      </Typography>
                    </Stack>
                    <Typography variant="h5">{certificate.title}</Typography>
                    {certificate.institution && (
                      <Typography variant="subtitle1" color="text.secondary">
                        {certificate.institution}
                      </Typography>
                    )}
                    {[certificate.hours, certificate.score, certificate.topics]
                      .filter(Boolean)
                      .map((detail) => (
                        <Typography key={detail} variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
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

export default CertificatesSection;


