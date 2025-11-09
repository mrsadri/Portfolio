// File: src/App.tsx
// Purpose: Defines the application's router, lazy-loads route components, and renders the RouterProvider with suspense handling.
import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./layout/MainLayout";

const HomePage = lazy(() => import("./routes/HomePage"));
const MyStoryPage = lazy(() => import("./routes/MyStoryPage"));
const ContactPage = lazy(() => import("./routes/ContactPage"));
const ResumePage = lazy(() => import("./routes/ResumePage"));
const CaseStudyDivarPage = lazy(
  () => import("./routes/case-studies/CaseStudyDivarPage"),
);
const CaseStudySetarePage = lazy(
  () => import("./routes/case-studies/CaseStudySetarePage"),
);
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));

const detectBasename = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  const { hostname, pathname } = window.location;
  if (!hostname.endsWith("github.io")) {
    return "/";
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "/";
  }

  return `/${segments[0]}`;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "my-story",
          element: <MyStoryPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "resume",
          element: <ResumePage />,
        },
        {
          path: "case-studies/divar-secure-call",
          element: <CaseStudyDivarPage />,
        },
        {
          path: "case-studies/setare-aval-engagement",
          element: <CaseStudySetarePage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  { basename: detectBasename() },
);

const App = () => (
  <Suspense fallback={<LoadingScreen />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default App;

