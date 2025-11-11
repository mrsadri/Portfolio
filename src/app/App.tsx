import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import LoadingScreen from "../shared/components/LoadingScreen";
import { appRouter } from "./router";

const App = () => (
  <Suspense fallback={<LoadingScreen />}>
    <RouterProvider router={appRouter} />
  </Suspense>
);

export default App;


