import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { CaseStudySummary } from "../types";

type CaseStudyRecapDialogProps = {
  caseStudy: CaseStudySummary | null;
  onClose: () => void;
};

const CaseStudyRecapDialog = ({ caseStudy, onClose }: CaseStudyRecapDialogProps) => (
  <Dialog
    open={Boolean(caseStudy)}
    onClose={onClose}
    aria-labelledby="case-study-recap-title"
  >
    {caseStudy ? (
      <>
        <DialogTitle id="case-study-recap-title">{caseStudy.recap.headline}</DialogTitle>
        <DialogContent>
          <Stack component="ul" spacing={1.5} sx={{ pl: 2 }}>
            {caseStudy.recap.bullets.map((bullet) => (
              <Typography component="li" key={bullet} variant="body1" color="text.secondary">
                {bullet}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={2} mt={3}>
            <Button
              component={RouterLink}
              to={caseStudy.to}
              variant="contained"
              fullWidth
              endIcon={<ArrowForwardRoundedIcon />}
              onClick={onClose}
            >
              Deep dive
            </Button>
            <Button fullWidth variant="outlined" onClick={onClose}>
              Close
            </Button>
          </Stack>
        </DialogContent>
      </>
    ) : null}
  </Dialog>
);

export default CaseStudyRecapDialog;


