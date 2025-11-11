import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";

const HomePage = lazy(() => import("../routes/HomePage"));
const MyStoryPage = lazy(() => import("../routes/MyStoryPage"));
const ContactPage = lazy(() => import("../routes/ContactPage"));
const ResumePage = lazy(() => import("../routes/ResumePage"));
const CaseStudyDivarPage = lazy(
  () => import("../routes/case-studies/CaseStudyDivarPage"),
);
const CaseStudySetarePage = lazy(
  () => import("../routes/case-studies/CaseStudySetarePage"),
);
const NotFoundPage = lazy(() => import("../routes/NotFoundPage"));

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

export const appRouter = createBrowserRouter(
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


