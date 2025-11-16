import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LanguageIcon from "@mui/icons-material/Language";
import Grid from "@mui/system/Grid";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Pill } from "@shared/ui";
import { useScrollAnimation } from "@shared/utils/useScrollAnimation";
import { getSectionStyles, SECTION_PADDING } from "@shared/utils/sectionBackgrounds";
import SectionHeader from "@shared/components/SectionHeader";
import SurfaceCard from "./SurfaceCard";
import type { CertificateItem, EducationItem } from "../types";

type OutsideDesignItem = EducationItem | CertificateItem;

type OutsideDesignSectionProps = {
  items: ReadonlyArray<OutsideDesignItem>;
};

const OutsideDesignSection = ({ items }: OutsideDesignSectionProps) => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const getBadgeIcon = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "degree":
      case "associate":
      case "diploma":
        return <SchoolIcon fontSize="small" />;
      case "certificate":
      case "bootcamp":
        return <WorkspacePremiumIcon fontSize="small" />;
      case "language":
        return <LanguageIcon fontSize="small" />;
      default:
        return <AutoAwesomeRoundedIcon fontSize="small" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "degree":
      case "associate":
      case "diploma":
        return theme.tokens.colors.primary;
      case "certificate":
      case "bootcamp":
        return theme.tokens.colors.secondary;
      case "language":
        return theme.palette.mode === "light" ? "#10b981" : "#34d399";
      default:
        return theme.palette.text.secondary;
    }
  };

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: SECTION_PADDING.standard,
        ...getSectionStyles("paper", theme),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
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
                <SurfaceCard
                  sx={{
                    height: "100%",
                    borderLeft: `4px solid ${getBadgeColor(item.badge)}`,
                  }}
                >
                  <CardContent>
                    <Stack spacing={2.5}>
                      <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Box
                            sx={{
                              color: getBadgeColor(item.badge),
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {getBadgeIcon(item.badge)}
                          </Box>
                          <Pill label={item.badge} size="small" />
                        </Stack>
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
};

export default OutsideDesignSection;

