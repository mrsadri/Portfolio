import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@shared/layout/MainLayout";
import RouteErrorBoundary from "@shared/components/RouteErrorBoundary";

const HomePage = lazy(() => import("@features/home/HomePage"));
const MyStoryPage = lazy(() => import("@features/my-story/MyStoryPage"));
const ContactPage = lazy(() => import("@features/contact/ContactPage"));
const ResumePage = lazy(() => import("@features/resume/ResumePage"));
const CaseStudyDivarPage = lazy(
  () => import("@features/case-studies/CaseStudyDivarPage"),
);
const CaseStudySetarePage = lazy(
  () => import("@features/case-studies/CaseStudySetarePage"),
);
const CaseStudySetareYekPage = lazy(
  () => import("@features/case-studies/CaseStudySetareYekPage"),
);
const NotFoundPage = lazy(() => import("@app/NotFoundPage"));

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
    console.log("[Router] Using explicit basename from env:", envBasename);
    return envBasename;
  }

  if (typeof window === "undefined") {
    console.log("[Router] No window object, using basename: /");
    return "/";
  }

  const { hostname, pathname } = window.location;
  if (!hostname.endsWith("github.io")) {
    console.log("[Router] Not GitHub Pages, using basename: /");
    return "/";
  }

  const [maybeRepo] = pathname.split("/").filter(Boolean);
  const detectedBasename = maybeRepo ? normaliseBasename(maybeRepo) : "/";
  console.log("[Router] Detected GitHub Pages basename:", detectedBasename, "from pathname:", pathname);
  return detectedBasename;
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
          path: "case-studies/setare-yek-bill-payment",
          element: <CaseStudySetareYekPage />,
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


