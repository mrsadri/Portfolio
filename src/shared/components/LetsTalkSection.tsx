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
  <Box component="section" id={id} sx={{ py: { xs: 4, md: 8 } }}>
    <Container>
      <Card
        elevation={0}
        sx={{
          boxShadow: "none",
          borderRadius: { xs: "16px", md: "24px" },
          bgcolor: "background.paper",
          px: { xs: 2.5, md: 5 },
          py: { xs: 3, md: 5 },
        }}
      >
        <CardContent sx={{ pb: 0, px: { xs: 0, md: 0 } }}>
          <Stack spacing={{ xs: 1, md: 1.5 }} textAlign="center">
            <Typography 
              variant="h3" 
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              {title}
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              {description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ pt: { xs: 2.5, md: 4 }, px: 0, flexDirection: "column", gap: { xs: 1.5, md: 2 } }}>
          {/* Primary Action - Full Width */}
          <Button
            component="a"
            href={primaryAction.href}
            startIcon={primaryAction.icon}
            variant={primaryAction.variant ?? "contained"}
            color={primaryAction.color ?? "primary"}
            size="large"
            fullWidth={true}
            sx={{ minHeight: { xs: "48px", md: "56px" } }}
            target={primaryAction.target ?? getExternalLinkProps(primaryAction.href).target}
            rel={primaryAction.rel ?? getExternalLinkProps(primaryAction.href).rel}
          >
            {primaryAction.label}
          </Button>
          
          {/* Secondary Actions - Grouped Row */}
          {secondaryActions.length > 0 && (
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1.5, md: 1.5 }}
              justifyContent="center"
              alignItems="stretch"
              sx={{ width: "100%" }}
            >
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
                    fullWidth={{ xs: true, md: false }}
                    sx={{ 
                      minHeight: { xs: "48px", md: "48px" },
                      flex: { md: "1 1 0" },
                      minWidth: { md: 0 },
                    }}
                    target={action.target ?? externalProps.target}
                    rel={action.rel ?? externalProps.rel}
                  >
                    {action.label}
                  </Button>
                );
              })}
            </Stack>
          )}
        </CardActions>
      </Card>
    </Container>
  </Box>
);

export type { ContactAction, LetsTalkSectionProps };
export default LetsTalkSection;

