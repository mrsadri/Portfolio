import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import RouteErrorBoundary from "../shared/components/RouteErrorBoundary";

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

const normaliseBasename = (value?: string | null) => {
  if (!value) {
    return "/";
  }

  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") {
    return "/";
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
};

const getEnvBasename = () => {
  if (typeof import.meta === "undefined") {
    return "/";
  }

  const env = import.meta.env ?? {};
  const explicitBasename = typeof env.VITE_ROUTER_BASENAME === "string" ? env.VITE_ROUTER_BASENAME : undefined;
  const baseUrl = explicitBasename ?? env.BASE_URL;

  return normaliseBasename(baseUrl);
};

const detectBasename = () => {
  const envBasename = getEnvBasename();
  if (envBasename !== "/") {
    return envBasename;
  }

  if (typeof window === "undefined") {
    return "/";
  }

  const { hostname, pathname } = window.location;
  if (!hostname.endsWith("github.io")) {
    return "/";
  }

  const [maybeRepo] = pathname.split("/").filter(Boolean);

  return maybeRepo ? normaliseBasename(maybeRepo) : "/";
};

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <RouteErrorBoundary />,
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


