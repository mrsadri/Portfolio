import { Suspense, type PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AppThemeProvider } from "../../theme";
import LoadingScreen from "../../shared/components/LoadingScreen";

const AppProviders = ({ children }: PropsWithChildren) => (
  <HelmetProvider>
    <AppThemeProvider>
      <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
    </AppThemeProvider>
  </HelmetProvider>
);

export default AppProviders;

