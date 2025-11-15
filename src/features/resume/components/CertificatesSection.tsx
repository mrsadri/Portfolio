import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import Grid from "@mui/system/Grid";
import SectionHeader from "@shared/components/SectionHeader";
import ResumeCard from "./ResumeCard";
import ResumeSectionWrapper from "./ResumeSectionWrapper";
import type { Certification } from "../types";

type CertificatesSectionProps = {
  certificates: ReadonlyArray<Certification>;
};

const CertificatesSection = ({ certificates }: CertificatesSectionProps) => (
  <ResumeSectionWrapper>
    <SectionHeader variant="compact" icon={<WorkspacePremiumOutlinedIcon color="secondary" sx={{ fontSize: "1.75rem" }} />} title="Certificates" />
        <Grid container spacing={3}>
          {certificates.map((certificate) => (
            <Grid size={{ xs: 12, md: 6 }} key={`${certificate.name}-${certificate.year}`}>
          <ResumeCard
            title={certificate.name}
            subtitle={certificate.issuer}
            year={certificate.year}
            description={certificate.description}
            useCardContent={true}
          />
            </Grid>
          ))}
        </Grid>
  </ResumeSectionWrapper>
);

export default CertificatesSection;


