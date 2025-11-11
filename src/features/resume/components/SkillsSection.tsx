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
import type { SkillCategory } from "../types";

type SkillsSectionProps = {
  categories: ReadonlyArray<SkillCategory>;
};

const SkillsSection = ({ categories }: SkillsSectionProps) => (
  <Box sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Stack spacing={4}>
        <SectionHeader icon={<MilitaryTechRoundedIcon color="primary" />} title="Skills" />
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h6">{category.title}</Typography>
                    <Stack component="ul" spacing={1} sx={{ pl: 2, mb: 0 }}>
                      {category.skills.map((skill) => (
                        <Typography component="li" key={skill} variant="body2" color="text.secondary">
                          {skill}
                        </Typography>
                      ))}
                    </Stack>
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

export default SkillsSection;


