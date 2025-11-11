import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import SectionHeader from "./SectionHeader";
import type { Certification } from "../types";

type CertificatesSectionProps = {
  certificates: ReadonlyArray<Certification>;
};

const CertificatesSection = ({ certificates }: CertificatesSectionProps) => (
  <Box sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Stack spacing={4}>
        <SectionHeader icon={<MilitaryTechRoundedIcon color="secondary" />} title="Certificates" />
        <Grid container spacing={3}>
          {certificates.map((certificate) => (
            <Grid size={{ xs: 12, md: 6 }} key={`${certificate.name}-${certificate.year}`}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">{certificate.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {certificate.year}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {certificate.issuer}
                    </Typography>
                    {certificate.description && (
                      <Typography variant="body2" color="text.secondary">
                        {certificate.description}
                      </Typography>
                    )}
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

export default CertificatesSection;


