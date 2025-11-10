import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  setareOverview,
  setareSections,
  useCaseStudyNavigation_default
} from "./chunk-wv70a3e6.js";
import"./chunk-3197h7cd.js";
import {
  site_default
} from "./chunk-342m0h67.js";
import {
  Seo_default
} from "./chunk-2ny3xade.js";
import {
  Box_default,
  Container_default,
  Grid_default,
  Stack_default,
  __toESM,
  require_jsx_dev_runtime
} from "./chunk-dkmh5se1.js";

// src/routes/case-studies/CaseStudySetarePage.tsx
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
  const otherCaseStudies = caseStudyEntries.filter((entry) => entry.id !== "setare-aval-engagement");
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

//# debugId=0918C2846293274C64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3V0bGluZU5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5T3V0bGluZU5hdlwiO1xuaW1wb3J0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uXCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY2FzZVN0dWR5RW50cmllcywgc2V0YXJlT3ZlcnZpZXcsIHNldGFyZVNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi91dGlscy9zaXRlXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNldGFyZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlU2VjdGlvbklkLCBoYW5kbGVPdXRsaW5lQ2xpY2sgfSA9IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24oc2V0YXJlU2VjdGlvbnMpO1xuICBjb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0ge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gICAgbmFtZTogc2V0YXJlT3ZlcnZpZXcudGl0bGUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBzZXRhcmVPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgICAgXCJSZXRlbnRpb24gYW5kIGdyb3d0aCBzdHJhdGVneSB0aGF0IGRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBhdCBTZXRhcmUgQXZhbC5cIixcbiAgICBhdXRob3I6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICAgIHVybDogc2l0ZVVybCxcbiAgICB9LFxuICAgIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRgLFxuICAgIGltYWdlOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2UsXG4gICAga2V5d29yZDogW1wiUmV0ZW50aW9uIFN0cmF0ZWd5XCIsIFwiTGlmZWN5Y2xlIE1hcmtldGluZ1wiLCBcIkdyb3d0aCBEZXNpZ25cIl0sXG4gIH0gYXMgY29uc3Q7XG5cbiAgY29uc3Qgb3RoZXJDYXNlU3R1ZGllcyA9IGNhc2VTdHVkeUVudHJpZXMuZmlsdGVyKFxuICAgIChlbnRyeSkgPT4gZW50cnkuaWQgIT09IFwic2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgdGl0bGU9XCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50IENhc2UgU3R1ZHkg4oCUIERvdWJsaW5nIFJldGFpbmVkIFJldmVudWVcIlxuICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgc2V0YXJlT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICAgICAgICBcIlJlLWFyY2hpdGVjdGVkIGxpZmVjeWNsZSBqb3VybmV5cyBmb3IgU2V0YXJlIEF2YWwgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWUgYW5kIGVuZXJnaXNlIGxveWFsIHVzZXJzLlwiXG4gICAgICAgIH1cbiAgICAgICAgY2Fub25pY2FsUGF0aD1cIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiXG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB1cmw6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZSxcbiAgICAgICAgICAgIGFsdDogXCJTZXRhcmUgQXZhbCBjdXN0b21lciBlbmdhZ2VtZW50IHNlc3Npb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHJ1Y3R1cmVkRGF0YT17c3RydWN0dXJlZERhdGF9XG4gICAgICAvPlxuICAgICAgPENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblxuICAgICAgICBleWVicm93PVwiQ2FzZSBzdHVkeSDCtyBSZXRlbnRpb24gJiBHcm93dGhcIlxuICAgICAgICBvdmVydmlldz17c2V0YXJlT3ZlcnZpZXd9XG4gICAgICAgIHN0YXRzVGl0bGU9XCJHcm93dGggb3V0Y29tZXNcIlxuICAgICAgICBzdGF0c1ZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIGhlcm9CYWNrZHJvcFN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA2KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE0KSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxMiwxOCwzMiwwLjg1KSwgcmdiYSgyOCw0OCw5MCwwLjY4KSlcIixcbiAgICAgICAgfSl9XG4gICAgICAgIGhlcm9TdXJmYWNlU3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwicmdiYSgyNTAsIDI1MiwgMjU1LCAwLjkpXCJcbiAgICAgICAgICAgICAgOiBcInJnYmEoMTIsIDE4LCAzMiwgMC45KVwiLFxuICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCJcbiAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgfWAsXG4gICAgICAgIH0pfVxuICAgICAgLz5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDEwIH19PlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19PlxuICAgICAgICAgICAgICA8Q2FzZVN0dWR5T3V0bGluZU5hdlxuICAgICAgICAgICAgICAgIHNlY3Rpb25zPXtzZXRhcmVTZWN0aW9uc31cbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uSWQ9e2FjdGl2ZVNlY3Rpb25JZH1cbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtoYW5kbGVPdXRsaW5lQ2xpY2t9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU3g9e3sgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge3NldGFyZVNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhc2VTdHVkeVNlY3Rpb25DYXJkIGtleT17c2VjdGlvbi5pZH0gc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblxuICAgICAgICBleWVicm93PVwiQ29udGludWUgdGhlIGpvdXJuZXlcIlxuICAgICAgICB0aXRsZT1cIlNlZSBtb3JlIHdheXMgSSBkZXNpZ24gZm9yIGdyb3d0aFwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRXhwbG9yZSBhZGRpdGlvbmFsIHByb2R1Y3QgY2hhbGxlbmdlcyBvciBsZWFybiBtb3JlIGFib3V0IGhvdyBJIGNvbGxhYm9yYXRlLiBDaG9vc2UgYW5vdGhlciBjYXNlIHN0dWR5LCByZWFkIG15IHN0b3J5LCBvciBkcm9wIG1lIGEgbGluZS5cIlxuICAgICAgICBzdHVkaWVzPXtvdGhlckNhc2VTdHVkaWVzfVxuICAgICAgICBwcmltYXJ5Q3RhPXt7IHRvOiBcIi9teS1zdG9yeVwiLCBsYWJlbDogXCJWaXNpdCBNeSBTdG9yeVwiLCB2YXJpYW50OiBcImNvbnRhaW5lZFwiIH19XG4gICAgICAgIHNlY29uZGFyeUN0YT17eyB0bzogXCIvY29udGFjdFwiLCBsYWJlbDogXCJTdGFydCBhIGNvbnZlcnNhdGlvblwiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIgfX1cbiAgICAgICAgc2VjdGlvblN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0MywyNDcsMjU1LDAuODIpLCByZ2JhKDIyNiwyMzYsMjU1LDAuOTQpKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyLDE4LDMwLDAuOSksIHJnYmEoMTksMjgsNDQsMC45MikpXCIsXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNldGFyZVBhZ2U7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTSxzQkFBc0IsTUFBTTtBQUFBLEVBQ2hDLFFBQVEsaUJBQWlCLHVCQUF1QiwrQkFBdUIsY0FBYztBQUFBLEVBQ3JGLE1BQU0sVUFBVSxhQUFXO0FBQUEsRUFFM0IsTUFBTSxpQkFBaUI7QUFBQSxJQUNyQixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLGVBQWU7QUFBQSxJQUNyQixhQUNFLGVBQWUsWUFDZjtBQUFBLElBQ0YsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsTUFB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
