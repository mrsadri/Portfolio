// File: src/routes/ResumePage.tsx
// Purpose: Displays resume-focused content including experience, skills, education, and certifications.
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import Grid from "@mui/system/Grid";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import Seo from "../components/Seo";
import {
  professionalExperience,
  resumeActions,
  resumeCertificates,
  resumeEducation,
  resumeSummary,
  skillCategories,
  volunteerExperience,
} from "../data/resume";
import getSiteUrl from "../utils/site";

const ResumePage = () => {
  const handleDownload = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  const siteUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Masih Sadri — Resume",
    description: resumeSummary,
    url: `${siteUrl}/resume`,
    about: {
      "@type": "Person",
      name: "Masih Sadri",
      jobTitle: "Senior Product Designer",
      email: "sdarimasih@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "IR",
      },
    },
  } as const;

  return (
    <>
      <Seo
        title="Masih Sadri — Senior Product Designer Resume"
        description="Review Masih Sadri’s senior product designer resume covering trust & safety, growth, design systems, and leadership experience."
        canonicalPath="/resume"
        openGraph={{ type: "article" }}
        structuredData={structuredData}
      />
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            "linear-gradient(135deg, rgba(31,111,235,0.1), rgba(90,200,250,0.14))",
        }}
      >
        <Container>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="overline" color="secondary">
              Senior Product Designer
            </Typography>
            <Typography variant="h2">Masih Sadri</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
              <Chip label="LinkedIn" component="a" href="https://www.linkedin.com/in/msadri/" target="_blank" clickable />
              <Chip label="Portfolio" component="a" href="https://masihsadri.com" target="_blank" clickable />
              <Chip label="sdarimasih@gmail.com" component="a" href="mailto:sdarimasih@gmail.com" clickable />
              <Chip label="Tehran, Iran • Willing to relocate" />
            </Stack>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              {resumeSummary}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<DownloadRoundedIcon />}
              onClick={handleDownload}
            >
              {resumeActions.downloadLabel}
            </Button>
            <Typography variant="caption" color="text.secondary">
              Last updated: {resumeActions.updatedAt}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <WorkHistoryRoundedIcon color="primary" />
              <Typography variant="h3">Professional Experience</Typography>
            </Stack>
            <Stack spacing={3}>
              {professionalExperience.map((role) => (
                <Card key={role.title} sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      justifyContent="space-between"
                      spacing={1}
                    >
                      <Typography variant="h5">{role.title}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {role.date}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                      {role.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {role.location}
                    </Typography>
                    <Stack component="ul" spacing={1.2} sx={{ pl: 2, mb: 0 }}>
                      {role.achievements.map((achievement) => (
                        <Typography
                          component="li"
                          key={achievement}
                          variant="body1"
                          color="text.secondary"
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Stack>
                    {role.links && (
                      <Stack direction="row" spacing={2}>
                        {role.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            color="primary"
                            underline="hover"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "background.paper",
        }}
      >
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <VolunteerActivismRoundedIcon color="secondary" />
              <Typography variant="h3">Volunteer Activity</Typography>
            </Stack>
            <Stack spacing={3}>
              {volunteerExperience.map((role) => (
                <Card key={role.title} sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      justifyContent="space-between"
                      spacing={1}
                    >
                      <Typography variant="h5">{role.title}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {role.date}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                      {role.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {role.location}
                    </Typography>
                    <Stack component="ul" spacing={1.2} sx={{ pl: 2, mb: 0 }}>
                      {role.achievements.map((achievement) => (
                        <Typography
                          component="li"
                          key={achievement}
                          variant="body1"
                          color="text.secondary"
                        >
                          {achievement}
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

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <MilitaryTechRoundedIcon color="primary" />
              <Typography variant="h3">Skills</Typography>
            </Stack>
            <Grid container spacing={3}>
              {skillCategories.map((category) => (
                <Grid size={{ xs: 12, md: 4 }} key={category.title}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography variant="h6">{category.title}</Typography>
                        <Stack component="ul" spacing={1} sx={{ pl: 2, mb: 0 }}>
                          {category.items.map((item) => (
                            <Typography
                              component="li"
                              key={item}
                              variant="body2"
                              color="text.secondary"
                            >
                              {item}
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

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "background.paper",
        }}
      >
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <HistoryEduRoundedIcon color="secondary" />
              <Typography variant="h3">Education</Typography>
            </Stack>
            <Stack spacing={3}>
              {resumeEducation.map((item) => (
                <Card key={item.degree} sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      justifyContent="space-between"
                      spacing={1}
                    >
                      <Typography variant="h5">{item.degree}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {item.date}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                      {item.institution}
                    </Typography>
                    {item.details && (
                      <Stack component="ul" spacing={1.2} sx={{ pl: 2, mb: 0 }}>
                        {item.details.map((detail) => (
                          <Typography
                            component="li"
                            key={detail}
                            variant="body2"
                            color="text.secondary"
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <DownloadRoundedIcon color="secondary" />
              <Typography variant="h3">Certificates</Typography>
            </Stack>
            <Grid container spacing={3}>
              {resumeCertificates.map((certificate) => (
                <Grid size={{ xs: 12, md: 6 }} key={certificate.title}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={1.5}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="h6">
                            {certificate.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {certificate.date}
                          </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                          {certificate.details}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ResumePage;

