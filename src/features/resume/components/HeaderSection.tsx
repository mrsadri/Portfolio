import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import type { ResumeAction, ResumeSummary } from "../types";

type HeaderSectionProps = {
  summary: ResumeSummary;
  actions: ResumeAction;
};

const HeaderSection = ({ summary, actions }: HeaderSectionProps) => {
  const handleDownload = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, rgba(31,111,235,0.1), rgba(90,200,250,0.14))",
      }}
    >
      <Container>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="overline" color="secondary">
            {summary.subtitle}
          </Typography>
          <Typography variant="h2">{summary.title}</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            <Chip
              label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/msadri/"
              target="_blank"
              clickable
            />
            <Chip
              label="Portfolio"
              component="a"
              href="https://masihsadri.com"
              target="_blank"
              clickable
            />
            <Chip label="sadrimasih@gmail.com" component="a" href="mailto:sadrimasih@gmail.com" clickable />
            <Chip label="Tehran, Iran • Willing to relocate" />
          </Stack>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            {summary.description}
          </Typography>
          <Button
            component="a"
            href={actions.href}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DownloadRoundedIcon />}
            onClick={handleDownload}
          >
            {actions.label}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderSection;


