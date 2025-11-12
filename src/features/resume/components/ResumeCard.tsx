import { Card, CardContent, Stack, Typography } from "@mui/material";

type ResumeCardProps = {
  // Header content
  title: string;
  subtitle?: string;
  period?: string;
  year?: string;
  
  // Body content
  description?: string;
  highlights?: readonly string[];
  skills?: readonly string[];
  
  // Layout options
  useCardContent?: boolean;
  sx?: Record<string, unknown>;
};

const ResumeCard = ({
  title,
  subtitle,
  period,
  year,
  description,
  highlights,
  skills,
  useCardContent = false,
  sx,
}: ResumeCardProps) => {
  const cardPadding = { xs: 3, md: 4 };
  const cardSx = {
    p: cardPadding,
    ...(useCardContent ? { height: "100%" } : {}),
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
      borderColor: "primary.light",
    },
    ...sx,
  };

  // Determine if this is a skills card (no period/year/subtitle)
  const isSkillsCard = !!skills && !subtitle && !period && !year;
  // Determine if this is a certificate card (has year)
  const isCertificateCard = !!year;

  const headerContent = (
    <Stack
      direction={isCertificateCard ? "row" : { xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={1}
      alignItems={isCertificateCard ? "center" : undefined}
    >
      <Typography 
        variant={isSkillsCard || isCertificateCard ? "h6" : "h5"}
        sx={{ fontWeight: 600 }}
      >
        {title}
      </Typography>
      {(period || year) && (
        <Typography
          variant="subtitle2"
          color="primary"
        >
          {period || year}
        </Typography>
      )}
    </Stack>
  );

  const spacing = isCertificateCard ? 1.5 : isSkillsCard ? 2 : 2;
  const bodyContent = (
    <Stack spacing={spacing}>
      {headerContent}
      {subtitle && !isSkillsCard && (
        <Typography variant={isCertificateCard ? "body2" : "subtitle1"} color="text.secondary">
          {subtitle}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
      {highlights && highlights.length > 0 && (
        <Stack spacing={1.2} sx={{ mb: 0 }}>
          {highlights.map((highlight) => (
            <Stack key={highlight} direction="row" spacing={1.5} alignItems="flex-start">
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  mt: 0.25,
                  flexShrink: 0,
                  lineHeight: 1.6,
                }}
              >
                ✓
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ fontWeight: 400, lineHeight: 1.6 }}
              >
                {highlight}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
      {skills && skills.length > 0 && (
        <Stack spacing={1} sx={{ mb: 0 }}>
          {skills.map((skill) => (
            <Stack key={skill} direction="row" spacing={1.5} alignItems="flex-start">
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "1rem",
                  fontWeight: 600,
                  mt: 0.25,
                  flexShrink: 0,
                  lineHeight: 1.6,
                }}
              >
                ✓
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ fontWeight: 400, lineHeight: 1.6 }}
              >
                {skill}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );

  if (useCardContent) {
    return (
      <Card sx={cardSx}>
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>{bodyContent}</CardContent>
      </Card>
    );
  }

  return <Card sx={cardSx}>{bodyContent}</Card>;
};

export default ResumeCard;

