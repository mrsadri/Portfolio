import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  setareYekCaseStudyMetadata,
  setareYekOverview,
  setareYekSections,
  useCaseStudyNavigation_default,
  useRelatedCaseStudies_default
} from "./chunk-0q744vxh.js";
import"./chunk-rwk54k0r.js";
import {
  Seo_default
} from "./chunk-4q5mgts6.js";
import"./chunk-56dhb304.js";
import {
  Box_default,
  Container_default,
  Grid_default,
  Stack_default,
  __toESM,
  require_jsx_dev_runtime
} from "./chunk-pzn0e5q4.js";

// src/features/case-studies/CaseStudySetareYekPage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySetareYekPage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation_default(setareYekSections);
  const otherCaseStudies = useRelatedCaseStudies_default(caseStudyEntries, "setare-yek-bill-payment");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        ...setareYekCaseStudyMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyOverviewSection_default, {
        eyebrow: "Case study · Setare Aval (SetareYek)",
        overview: setareYekOverview,
        statsTitle: "Impact snapshot",
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
        sx: { py: 3 },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          maxWidth: "lg",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 6, md: 10 },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 3 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyOutlineNav_default, {
                  sections: setareYekSections,
                  activeSectionId,
                  onNavigate: handleOutlineClick,
                  containerSx: { borderRadius: "20px" }
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 9 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: { xs: 3, md: 4 },
                  children: setareYekSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionCard_default, {
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
        title: "See more ways I design for impact",
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
var CaseStudySetareYekPage_default = CaseStudySetareYekPage;
export {
  CaseStudySetareYekPage_default as default
};

//# debugId=7B6AA5786CCBC0ED64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlTZXRhcmVZZWtQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IENhc2VTdHVkeU91dGxpbmVOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlPdXRsaW5lTmF2XCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24gZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyBmcm9tIFwiLi9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXNcIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkeUVudHJpZXMsXG4gIHNldGFyZVlla092ZXJ2aWV3LFxuICBzZXRhcmVZZWtTZWN0aW9ucyxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyBzZXRhcmVZZWtDYXNlU3R1ZHlNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZXRhcmVZZWtQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZVNlY3Rpb25JZCwgaGFuZGxlT3V0bGluZUNsaWNrIH0gPSB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uKHNldGFyZVlla1NlY3Rpb25zKTtcblxuICBjb25zdCBvdGhlckNhc2VTdHVkaWVzID0gdXNlUmVsYXRlZENhc2VTdHVkaWVzKGNhc2VTdHVkeUVudHJpZXMsIFwic2V0YXJlLXllay1iaWxsLXBheW1lbnRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uc2V0YXJlWWVrQ2FzZVN0dWR5TWV0YWRhdGF9IC8+XG4gICAgICA8Q2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJDYXNlIHN0dWR5IMK3IFNldGFyZSBBdmFsIChTZXRhcmVZZWspXCJcbiAgICAgICAgb3ZlcnZpZXc9e3NldGFyZVlla092ZXJ2aWV3fVxuICAgICAgICBzdGF0c1RpdGxlPVwiSW1wYWN0IHNuYXBzaG90XCJcbiAgICAgICAgc3RhdHNWYXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICBoZXJvQmFja2Ryb3BTeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNiksIHJnYmEoMTQ1LDE2NywyNTUsMC4xNCkpXCJcbiAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTIsMTgsMzIsMC44NSksIHJnYmEoMjgsNDgsOTAsMC42OCkpXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBoZXJvU3VyZmFjZVN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJnYmEoMjUwLCAyNTIsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDEyLCAxOCwgMzIsIDAuOSlcIixcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiAzIH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDEwIH19PlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19PlxuICAgICAgICAgICAgICA8Q2FzZVN0dWR5T3V0bGluZU5hdlxuICAgICAgICAgICAgICAgIHNlY3Rpb25zPXtzZXRhcmVZZWtTZWN0aW9uc31cbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uSWQ9e2FjdGl2ZVNlY3Rpb25JZH1cbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtoYW5kbGVPdXRsaW5lQ2xpY2t9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU3g9e3sgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge3NldGFyZVlla1NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhc2VTdHVkeVNlY3Rpb25DYXJkIGtleT17c2VjdGlvbi5pZH0gc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblxuICAgICAgICBleWVicm93PVwiQ29udGludWUgdGhlIGpvdXJuZXlcIlxuICAgICAgICB0aXRsZT1cIlNlZSBtb3JlIHdheXMgSSBkZXNpZ24gZm9yIGltcGFjdFwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRXhwbG9yZSBhZGRpdGlvbmFsIHByb2R1Y3QgY2hhbGxlbmdlcyBvciBsZWFybiBtb3JlIGFib3V0IGhvdyBJIGNvbGxhYm9yYXRlLiBDaG9vc2UgYW5vdGhlciBjYXNlIHN0dWR5LCByZWFkIG15IHN0b3J5LCBvciBkcm9wIG1lIGEgbGluZS5cIlxuICAgICAgICBzdHVkaWVzPXtvdGhlckNhc2VTdHVkaWVzfVxuICAgICAgICBwcmltYXJ5Q3RhPXt7IHRvOiBcIi9teS1zdG9yeVwiLCBsYWJlbDogXCJWaXNpdCBNeSBTdG9yeVwiLCB2YXJpYW50OiBcImNvbnRhaW5lZFwiIH19XG4gICAgICAgIHNlY29uZGFyeUN0YT17eyB0bzogXCIvY29udGFjdFwiLCBsYWJlbDogXCJTdGFydCBhIGNvbnZlcnNhdGlvblwiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIgfX1cbiAgICAgICAgc2VjdGlvblN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0MywyNDcsMjU1LDAuODIpLCByZ2JhKDIyNiwyMzYsMjU1LDAuOTQpKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyLDE4LDMwLDAuOSksIHJnYmEoMTksMjgsNDQsMC45MikpXCIsXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNldGFyZVlla1BhZ2U7XG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsSUFBTSx5QkFBeUIsTUFBTTtBQUFBLEVBQ25DLFFBQVEsaUJBQWlCLHVCQUF1QiwrQkFBdUIsaUJBQWlCO0FBQUEsRUFFeEYsTUFBTSxtQkFBbUIsOEJBQXNCLGtCQUFrQix5QkFBeUI7QUFBQSxFQUUxRix1QkFDRTtBQUFBLGNBOERFO0FBQUEsc0JBN0RBLHVCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBcUM7QUFBQSxzQkFDckMsdUJBQUMsa0NBQUQ7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFlBQVc7QUFBQSxRQUNYLGNBQWE7QUFBQSxRQUNiLGdCQUFnQixDQUFDLFdBQVc7QUFBQSxVQUMxQixZQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDBFQUNBO0FBQUEsUUFDUjtBQUFBLFFBQ0EsZUFBZSxDQUFDLFdBQVc7QUFBQSxVQUN6QixpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw2QkFDQTtBQUFBLFVBQ04sUUFBUSxhQUNOLE1BQU0sUUFBUSxTQUFTLFVBQ25CLHlCQUNBO0FBQUEsUUFFUjtBQUFBLFNBckJGLGlDQXNCQTtBQUFBLHNCQUVBLHVCQW9CRSxhQXBCRjtBQUFBLFFBQUssV0FBVTtBQUFBLFFBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFBLFFBQXJDLDBCQUNFLHVCQWtCRSxtQkFsQkY7QUFBQSxVQUFXLFVBQVM7QUFBQSxVQUFwQiwwQkFDRSx1QkFnQkUsY0FoQkY7QUFBQSxZQUFNLFdBQVM7QUFBQSxZQUFDLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQUEsWUFBekMsVUFnQkU7QUFBQSw4QkFmQSx1QkFPRSxjQVBGO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBQUMsNkJBQUQ7QUFBQSxrQkFDRSxVQUFVO0FBQUEsa0JBQ1Y7QUFBQSxrQkFDQSxZQUFZO0FBQUEsa0JBQ1osYUFBYSxFQUFFLGNBQWMsT0FBTztBQUFBLG1CQUp0QyxpQ0FLQTtBQUFBLGlCQU5GLGlDQU9FO0FBQUEsOEJBQ0YsdUJBTUUsY0FORjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUlFLGVBSkY7QUFBQSxrQkFBTyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUEvQixVQUNHLGtCQUFrQixJQUFJLENBQUMsNEJBQ3RCLHVCQUFDLHFCQUFEO0FBQUEsb0JBQXVDO0FBQUEscUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxtQkFISCxpQ0FJRTtBQUFBLGlCQUxKLGlDQU1FO0FBQUE7QUFBQSxhQWZKLGdDQWdCRTtBQUFBLFdBakJKLGlDQWtCRTtBQUFBLFNBbkJKLGlDQW9CRTtBQUFBLHNCQUVGLHVCQUFDLGlDQUFEO0FBQUEsUUFDRSxTQUFRO0FBQUEsUUFDUixPQUFNO0FBQUEsUUFDTixhQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxZQUFZLEVBQUUsSUFBSSxhQUFhLE9BQU8sa0JBQWtCLFNBQVMsWUFBWTtBQUFBLFFBQzdFLGNBQWMsRUFBRSxJQUFJLFlBQVksT0FBTyx3QkFBd0IsU0FBUyxXQUFXO0FBQUEsUUFDbkYsV0FBVyxDQUFDLFdBQVc7QUFBQSxVQUNyQixZQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDRFQUNBO0FBQUEsUUFDUjtBQUFBLFNBWkYsaUNBYUE7QUFBQTtBQUFBLEtBN0RGLGdDQThERTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjdCNkFBNTc4NkNDQkMwRUQ2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
