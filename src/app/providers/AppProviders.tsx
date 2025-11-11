import type { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AppThemeProvider } from "../../theme";

const AppProviders = ({ children }: PropsWithChildren) => (
  <HelmetProvider>
    <AppThemeProvider>{children}</AppThemeProvider>
  </HelmetProvider>
);

export default AppProviders;


