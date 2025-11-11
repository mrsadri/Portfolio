import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  setareOverview,
  setareSections,
  useCaseStudyNavigation_default
} from "./chunk-3vxjs62c.js";
import"./chunk-tdhdn874.js";
import {
  Seo_default,
  site_default
} from "./chunk-1c6sycnn.js";
import {
  Box_default,
  Container_default,
  Grid_default,
  Stack_default,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "./chunk-yty9pdhr.js";

// src/features/case-studies/CaseStudySetarePage.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySetarePage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation_default(setareSections);
  const siteUrl = site_default();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: setareOverview.title,
    description: setareOverview.subtitle ?? "Retention and growth strategy that doubled retained revenue at Setare Aval.",
    author: {
      "@type": "Person",
      name: "Masih Sadri",
      url: siteUrl
    },
    url: `${siteUrl}/case-studies/setare-aval-engagement`,
    image: setareOverview.heroImage,
    keyword: ["Retention Strategy", "Lifecycle Marketing", "Growth Design"]
  };
  const otherCaseStudies = import_react.useMemo(() => caseStudyEntries.filter((entry) => entry.id !== "setare-aval-engagement"), []);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        title: "Setare Aval Engagement Case Study — Doubling Retained Revenue",
        description: setareOverview.subtitle ?? "Re-architected lifecycle journeys for Setare Aval to double retained revenue and energise loyal users.",
        canonicalPath: "/case-studies/setare-aval-engagement",
        openGraph: {
          type: "article",
          image: {
            url: setareOverview.heroImage,
            alt: "Setare Aval customer engagement session"
          }
        },
        structuredData
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyOverviewSection_default, {
        eyebrow: "Case study · Retention & Growth",
        overview: setareOverview,
        statsTitle: "Growth outcomes",
        statsVariant: "outlined",
        heroBackdropSx: (theme) => ({
          background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(34,84,255,0.06), rgba(145,167,255,0.14))" : "linear-gradient(140deg, rgba(12,18,32,0.85), rgba(28,48,90,0.68))"
        }),
        heroSurfaceSx: (theme) => ({
          backgroundColor: theme.palette.mode === "light" ? "rgba(250, 252, 255, 0.9)" : "rgba(12, 18, 32, 0.9)",
          border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.14)" : "rgba(98,132,218,0.32)"}`
        })
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 8, md: 12 } },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          maxWidth: "lg",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 6, md: 10 },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 3 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyOutlineNav_default, {
                  sections: setareSections,
                  activeSectionId,
                  onNavigate: handleOutlineClick,
                  containerSx: { borderRadius: "20px" }
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 9 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: { xs: 3, md: 4 },
                  children: setareSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionCard_default, {
                    section
                  }, section.id, false, undefined, this))
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyRelatedSection_default, {
        eyebrow: "Continue the journey",
        title: "See more ways I design for growth",
        description: "Explore additional product challenges or learn more about how I collaborate. Choose another case study, read my story, or drop me a line.",
        studies: otherCaseStudies,
        primaryCta: { to: "/my-story", label: "Visit My Story", variant: "contained" },
        secondaryCta: { to: "/contact", label: "Start a conversation", variant: "outlined" },
        sectionSx: (theme) => ({
          background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(243,247,255,0.82), rgba(226,236,255,0.94))" : "linear-gradient(135deg, rgba(12,18,30,0.9), rgba(19,28,44,0.92))"
        })
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudySetarePage_default = CaseStudySetarePage;
export {
  CaseStudySetarePage_default as default
};

//# debugId=A8511F6399C4201E64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlTZXRhcmVQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IENhc2VTdHVkeVNlY3Rpb25DYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvU2VjdGlvbkNhcmRcIjtcbmltcG9ydCBDYXNlU3R1ZHlPdXRsaW5lTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3V0bGluZU5hdlwiO1xuaW1wb3J0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblwiO1xuaW1wb3J0IENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cIjtcbmltcG9ydCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uIGZyb20gXCIuL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb25cIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkeUVudHJpZXMsXG4gIHNldGFyZU92ZXJ2aWV3LFxuICBzZXRhcmVTZWN0aW9ucyxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcblxuY29uc3QgQ2FzZVN0dWR5U2V0YXJlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9ID0gdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbihzZXRhcmVTZWN0aW9ucyk7XG4gIGNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbiAgY29uc3Qgc3RydWN0dXJlZERhdGEgPSB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgICBuYW1lOiBzZXRhcmVPdmVydmlldy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIHNldGFyZU92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgICBcIlJldGVudGlvbiBhbmQgZ3Jvd3RoIHN0cmF0ZWd5IHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGF0IFNldGFyZSBBdmFsLlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgIH0sXG4gICAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudGAsXG4gICAgaW1hZ2U6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZSxcbiAgICBrZXl3b3JkOiBbXCJSZXRlbnRpb24gU3RyYXRlZ3lcIiwgXCJMaWZlY3ljbGUgTWFya2V0aW5nXCIsIFwiR3Jvd3RoIERlc2lnblwiXSxcbiAgfSBhcyBjb25zdDtcblxuICBjb25zdCBvdGhlckNhc2VTdHVkaWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY2FzZVN0dWR5RW50cmllcy5maWx0ZXIoXG4gICAgICAgIChlbnRyeSkgPT4gZW50cnkuaWQgIT09IFwic2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgICAgKSxcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvXG4gICAgICAgIHRpdGxlPVwiU2V0YXJlIEF2YWwgRW5nYWdlbWVudCBDYXNlIFN0dWR5IOKAlCBEb3VibGluZyBSZXRhaW5lZCBSZXZlbnVlXCJcbiAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgIHNldGFyZU92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgICAgICAgXCJSZS1hcmNoaXRlY3RlZCBsaWZlY3ljbGUgam91cm5leXMgZm9yIFNldGFyZSBBdmFsIHRvIGRvdWJsZSByZXRhaW5lZCByZXZlbnVlIGFuZCBlbmVyZ2lzZSBsb3lhbCB1c2Vycy5cIlxuICAgICAgICB9XG4gICAgICAgIGNhbm9uaWNhbFBhdGg9XCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIlxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdXJsOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2UsXG4gICAgICAgICAgICBhbHQ6IFwiU2V0YXJlIEF2YWwgY3VzdG9tZXIgZW5nYWdlbWVudCBzZXNzaW9uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3RydWN0dXJlZERhdGE9e3N0cnVjdHVyZWREYXRhfVxuICAgICAgLz5cbiAgICAgIDxDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIkNhc2Ugc3R1ZHkgwrcgUmV0ZW50aW9uICYgR3Jvd3RoXCJcbiAgICAgICAgb3ZlcnZpZXc9e3NldGFyZU92ZXJ2aWV3fVxuICAgICAgICBzdGF0c1RpdGxlPVwiR3Jvd3RoIG91dGNvbWVzXCJcbiAgICAgICAgc3RhdHNWYXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICBoZXJvQmFja2Ryb3BTeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNiksIHJnYmEoMTQ1LDE2NywyNTUsMC4xNCkpXCJcbiAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTIsMTgsMzIsMC44NSksIHJnYmEoMjgsNDgsOTAsMC42OCkpXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBoZXJvU3VyZmFjZVN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJnYmEoMjUwLCAyNTIsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDEyLCAxOCwgMzIsIDAuOSlcIixcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPENhc2VTdHVkeU91dGxpbmVOYXZcbiAgICAgICAgICAgICAgICBzZWN0aW9ucz17c2V0YXJlU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbklkPXthY3RpdmVTZWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aGFuZGxlT3V0bGluZUNsaWNrfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN4PXt7IGJvcmRlclJhZGl1czogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogOSB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICAgIHtzZXRhcmVTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Q2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIkNvbnRpbnVlIHRoZSBqb3VybmV5XCJcbiAgICAgICAgdGl0bGU9XCJTZWUgbW9yZSB3YXlzIEkgZGVzaWduIGZvciBncm93dGhcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkV4cGxvcmUgYWRkaXRpb25hbCBwcm9kdWN0IGNoYWxsZW5nZXMgb3IgbGVhcm4gbW9yZSBhYm91dCBob3cgSSBjb2xsYWJvcmF0ZS4gQ2hvb3NlIGFub3RoZXIgY2FzZSBzdHVkeSwgcmVhZCBteSBzdG9yeSwgb3IgZHJvcCBtZSBhIGxpbmUuXCJcbiAgICAgICAgc3R1ZGllcz17b3RoZXJDYXNlU3R1ZGllc31cbiAgICAgICAgcHJpbWFyeUN0YT17eyB0bzogXCIvbXktc3RvcnlcIiwgbGFiZWw6IFwiVmlzaXQgTXkgU3RvcnlcIiwgdmFyaWFudDogXCJjb250YWluZWRcIiB9fVxuICAgICAgICBzZWNvbmRhcnlDdGE9e3sgdG86IFwiL2NvbnRhY3RcIiwgbGFiZWw6IFwiU3RhcnQgYSBjb252ZXJzYXRpb25cIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiIH19XG4gICAgICAgIHNlY3Rpb25TeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDMsMjQ3LDI1NSwwLjgyKSwgcmdiYSgyMjYsMjM2LDI1NSwwLjk0KSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiwxOCwzMCwwLjkpLCByZ2JhKDE5LDI4LDQ0LDAuOTIpKVwiLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZXRhcmVQYWdlO1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBY0EsSUFBTSxzQkFBc0IsTUFBTTtBQUFBLEVBQ2hDLFFBQVEsaUJBQWlCLHVCQUF1QiwrQkFBdUIsY0FBYztBQUFBLEVBQ3JGLE1BQU0sVUFBVSxhQUFXO0FBQUEsRUFFM0IsTUFBTSxpQkFBaUI7QUFBQSxJQUNyQixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLGVBQWU7QUFBQSxJQUNyQixhQUNFLGVBQWUsWUFDZjtBQUFBLElBQ0YsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLEtBQUssR0FBRztBQUFBLElBQ1IsT0FBTyxlQUFlO0FBQUEsSUFDdEIsU0FBUyxDQUFDLHNCQUFzQix1QkFBdUIsZUFBZTtBQUFBLEVBQ3hFO0FBQUEsRUFFQSxNQUFNLG1CQUFt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
