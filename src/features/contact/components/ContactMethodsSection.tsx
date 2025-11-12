import Grid from "@mui/system/Grid";
import { Box, Button, Card, CardActions, CardContent, Container, Stack, Typography } from "@mui/material";
import type { ContactMethod } from "../types";

type ContactMethodsSectionProps = {
  methods: ReadonlyArray<ContactMethod>;
};

const ContactMethodsSection = ({ methods }: ContactMethodsSectionProps) => (
  <Box sx={{ py: { xs: 6, md: 8 } }}>
    <Container>
      <Grid container spacing={3}>
        {methods.map((method) => {
          const isMailLink = method.href.startsWith("mailto:");
          return (
            <Grid size={{ xs: 12, md: 3 }} key={method.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2} alignItems="flex-start">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box sx={{ display: "flex", alignItems: "center", color: "primary.main" }}>
                        <method.icon />
                      </Box>
                      <Typography variant="h5">{method.title}</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {method.description}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Button
                    component="a"
                    href={method.href}
                    target={isMailLink ? undefined : "_blank"}
                    rel={isMailLink ? undefined : "noopener noreferrer"}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  >
                    {method.actionLabel}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default ContactMethodsSection;


