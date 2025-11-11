import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import GhostButton from "../../../shared/components/ui/GhostButton";
import SectionHeader from "./SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { ReferenceItem } from "../types";

type ReferencesSectionProps = {
  references: ReadonlyArray<ReferenceItem>;
};

const ReferencesSection = ({ references }: ReferencesSectionProps) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container>
        <Stack spacing={5}>
          <SectionHeader
            eyebrow="References"
            title="What My Partners Say"
            icon={<VolunteerActivismRoundedIcon color="secondary" />}
            align="left"
          />
          <Grid container spacing={3}>
            {references.map((reference) => (
              <Grid size={{ xs: 12, md: 4 }} key={reference.name}>
                <SurfaceCard sx={{ height: "100%" }}>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}
                  >
                    <Stack spacing={0.5}>
                      <Typography variant="h5">{reference.name}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {reference.role}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {reference.date}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {reference.text}
                    </Typography>
                    <GhostButton
                      component="a"
                      href={reference.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{
                        mt: "auto",
                        alignSelf: "flex-start",
                        borderColor: isLight ? "rgba(17, 76, 170, 0.22)" : "rgba(122, 162, 255, 0.35)",
                        color: isLight
                          ? theme.palette.brand.secondary
                          : "rgba(221, 230, 255, 0.92)",
                        "&:hover": {
                          borderColor: isLight
                            ? "rgba(17, 76, 170, 0.42)"
                            : "rgba(122, 162, 255, 0.55)",
                          backgroundColor: isLight
                            ? "rgba(31, 111, 235, 0.08)"
                            : "rgba(122, 162, 255, 0.16)",
                        },
                      }}
                    >
                      View on LinkedIn
                    </GhostButton>
                  </CardContent>
                </SurfaceCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ReferencesSection;


