import type { ReactNode } from "react";
import { Box, Button, Card, CardActions, CardContent, Container, Stack, Typography } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

type ContactAction = {
  label: string;
  href: string;
  icon?: ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  target?: string;
  rel?: string;
};

type LetsTalkSectionProps = {
  id?: string;
  title?: string;
  description?: string;
  primaryAction: ContactAction;
  secondaryActions?: ReadonlyArray<ContactAction>;
};

const getExternalLinkProps = (href: string) => {
  if (href.startsWith("http")) {
    return {
      target: "_blank",
      rel: "noopener noreferrer",
    } as const;
  }

  return {
    target: undefined,
    rel: undefined,
  } as const;
};

const LetsTalkSection = ({
  id,
  title = "Let's Talk and Work Together",
  description = "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  primaryAction,
  secondaryActions = [],
}: LetsTalkSectionProps) => (
  <Box component="section" id={id} sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Card
        elevation={0}
        sx={{
          boxShadow: "none",
          borderRadius: "24px",
          bgcolor: "background.paper",
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 5 },
        }}
      >
        <CardContent sx={{ pb: 0 }}>
          <Stack spacing={1.5} textAlign="center">
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ pt: { xs: 3, md: 4 }, justifyContent: "center" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 2.5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              component="a"
              href={primaryAction.href}
              startIcon={primaryAction.icon}
              variant={primaryAction.variant ?? "contained"}
              color={primaryAction.color ?? "primary"}
              size="large"
              target={primaryAction.target ?? getExternalLinkProps(primaryAction.href).target}
              rel={primaryAction.rel ?? getExternalLinkProps(primaryAction.href).rel}
            >
              {primaryAction.label}
            </Button>
            {secondaryActions.map((action) => {
              const externalProps = getExternalLinkProps(action.href);
              return (
                <Button
                  key={action.href}
                  component="a"
                  href={action.href}
                  startIcon={action.icon}
                  variant={action.variant ?? "outlined"}
                  color={action.color ?? "primary"}
                  size="large"
                  target={action.target ?? externalProps.target}
                  rel={action.rel ?? externalProps.rel}
                >
                  {action.label}
                </Button>
              );
            })}
          </Stack>
        </CardActions>
      </Card>
    </Container>
  </Box>
);

export type { ContactAction, LetsTalkSectionProps };
export default LetsTalkSection;

