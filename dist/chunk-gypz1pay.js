import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  setareCaseStudyMetadata,
  setareOverview,
  setareSections,
  useCaseStudyNavigation_default,
  useRelatedCaseStudies_default
} from "./chunk-sr0dz9vh.js";
import"./chunk-m6wkdxbm.js";
import {
  Seo_default
} from "./chunk-aj4jdr23.js";
import"./chunk-56dhb304.js";
import {
  Box_default,
  Container_default,
  Grid_default,
  Stack_default,
  __toESM,
  require_jsx_dev_runtime
} from "./chunk-ygqezw1f.js";

// src/features/case-studies/CaseStudySetarePage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySetarePage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation_default(setareSections);
  const otherCaseStudies = useRelatedCaseStudies_default(caseStudyEntries, "setare-aval-engagement");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        ...setareCaseStudyMetadata
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

//# debugId=2AF65209ADD4E43564756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlTZXRhcmVQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCJAc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IENhc2VTdHVkeVNlY3Rpb25DYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvU2VjdGlvbkNhcmRcIjtcbmltcG9ydCBDYXNlU3R1ZHlPdXRsaW5lTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3V0bGluZU5hdlwiO1xuaW1wb3J0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblwiO1xuaW1wb3J0IENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cIjtcbmltcG9ydCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uIGZyb20gXCIuL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb25cIjtcbmltcG9ydCB1c2VSZWxhdGVkQ2FzZVN0dWRpZXMgZnJvbSBcIi4vaG9va3MvdXNlUmVsYXRlZENhc2VTdHVkaWVzXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZHlFbnRyaWVzLFxuICBzZXRhcmVPdmVydmlldyxcbiAgc2V0YXJlU2VjdGlvbnMsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHsgc2V0YXJlQ2FzZVN0dWR5TWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgQ2FzZVN0dWR5U2V0YXJlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9ID0gdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbihzZXRhcmVTZWN0aW9ucyk7XG5cbiAgY29uc3Qgb3RoZXJDYXNlU3R1ZGllcyA9IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyhjYXNlU3R1ZHlFbnRyaWVzLCBcInNldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uc2V0YXJlQ2FzZVN0dWR5TWV0YWRhdGF9IC8+XG4gICAgICA8Q2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJDYXNlIHN0dWR5IMK3IFJldGVudGlvbiAmIEdyb3d0aFwiXG4gICAgICAgIG92ZXJ2aWV3PXtzZXRhcmVPdmVydmlld31cbiAgICAgICAgc3RhdHNUaXRsZT1cIkdyb3d0aCBvdXRjb21lc1wiXG4gICAgICAgIHN0YXRzVmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgaGVyb0JhY2tkcm9wU3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDYpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTQpKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDEyLDE4LDMyLDAuODUpLCByZ2JhKDI4LDQ4LDkwLDAuNjgpKVwiLFxuICAgICAgICB9KX1cbiAgICAgICAgaGVyb1N1cmZhY2VTeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDI1MCwgMjUyLCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICA6IFwicmdiYSgxMiwgMTgsIDMyLCAwLjkpXCIsXG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNClcIlxuICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMzIpXCJcbiAgICAgICAgICB9YCxcbiAgICAgICAgfSl9XG4gICAgICAvPlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogMyB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPENhc2VTdHVkeU91dGxpbmVOYXZcbiAgICAgICAgICAgICAgICBzZWN0aW9ucz17c2V0YXJlU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbklkPXthY3RpdmVTZWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aGFuZGxlT3V0bGluZUNsaWNrfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN4PXt7IGJvcmRlclJhZGl1czogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogOSB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICAgIHtzZXRhcmVTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Q2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIkNvbnRpbnVlIHRoZSBqb3VybmV5XCJcbiAgICAgICAgdGl0bGU9XCJTZWUgbW9yZSB3YXlzIEkgZGVzaWduIGZvciBncm93dGhcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkV4cGxvcmUgYWRkaXRpb25hbCBwcm9kdWN0IGNoYWxsZW5nZXMgb3IgbGVhcm4gbW9yZSBhYm91dCBob3cgSSBjb2xsYWJvcmF0ZS4gQ2hvb3NlIGFub3RoZXIgY2FzZSBzdHVkeSwgcmVhZCBteSBzdG9yeSwgb3IgZHJvcCBtZSBhIGxpbmUuXCJcbiAgICAgICAgc3R1ZGllcz17b3RoZXJDYXNlU3R1ZGllc31cbiAgICAgICAgcHJpbWFyeUN0YT17eyB0bzogXCIvbXktc3RvcnlcIiwgbGFiZWw6IFwiVmlzaXQgTXkgU3RvcnlcIiwgdmFyaWFudDogXCJjb250YWluZWRcIiB9fVxuICAgICAgICBzZWNvbmRhcnlDdGE9e3sgdG86IFwiL2NvbnRhY3RcIiwgbGFiZWw6IFwiU3RhcnQgYSBjb252ZXJzYXRpb25cIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiIH19XG4gICAgICAgIHNlY3Rpb25TeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDMsMjQ3LDI1NSwwLjgyKSwgcmdiYSgyMjYsMjM2LDI1NSwwLjk0KSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiwxOCwzMCwwLjkpLCByZ2JhKDE5LDI4LDQ0LDAuOTIpKVwiLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZXRhcmVQYWdlO1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsSUFBTSxzQkFBc0IsTUFBTTtBQUFBLEVBQ2hDLFFBQVEsaUJBQWlCLHVCQUF1QiwrQkFBdUIsY0FBYztBQUFBLEVBRXJGLE1BQU0sbUJBQW1CLDhCQUFzQixrQkFBa0Isd0JBQXdCO0FBQUEsRUFFekYsdUJBQ0U7QUFBQSxjQThERTtBQUFBLHNCQTdEQSx1QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQWtDO0FBQUEsc0JBQ2xDLHVCQUFDLGtDQUFEO0FBQUEsUUFDRSxTQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixZQUFXO0FBQUEsUUFDWCxjQUFhO0FBQUEsUUFDYixnQkFBZ0IsQ0FBQyxXQUFXO0FBQUEsVUFDMUIsWUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiwwRUFDQTtBQUFBLFFBQ1I7QUFBQSxRQUNBLGVBQWUsQ0FBQyxXQUFXO0FBQUEsVUFDekIsaUJBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNkJBQ0E7QUFBQSxVQUNOLFFBQVEsYUFDTixNQUFNLFFBQVEsU0FBUyxVQUNuQix5QkFDQTtBQUFBLFFBRVI7QUFBQSxTQXJCRixpQ0FzQkE7QUFBQSxzQkFFQSx1QkFvQkUsYUFwQkY7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUU7QUFBQSxRQUFyQywwQkFDRSx1QkFrQkUsbUJBbEJGO0FBQUEsVUFBVyxVQUFTO0FBQUEsVUFBcEIsMEJBQ0UsdUJBZ0JFLGNBaEJGO0FBQUEsWUFBTSxXQUFTO0FBQUEsWUFBQyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLFlBQXpDLFVBZ0JFO0FBQUEsOEJBZkEsdUJBT0UsY0FQRjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUFDLDZCQUFEO0FBQUEsa0JBQ0UsVUFBVTtBQUFBLGtCQUNWO0FBQUEsa0JBQ0EsWUFBWTtBQUFBLGtCQUNaLGFBQWEsRUFBRSxjQUFjLE9BQU87QUFBQSxtQkFKdEMsaUNBS0E7QUFBQSxpQkFORixpQ0FPRTtBQUFBLDhCQUNGLHVCQU1FLGNBTkY7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkFJRSxlQUpGO0FBQUEsa0JBQU8sU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxrQkFBL0IsVUFDRyxlQUFlLElBQUksQ0FBQyw0QkFDbkIsdUJBQUMscUJBQUQ7QUFBQSxvQkFBdUM7QUFBQSxxQkFBWixRQUFRLElBQW5DLHNCQUF5RCxDQUMxRDtBQUFBLG1CQUhILGlDQUlFO0FBQUEsaUJBTEosaUNBTUU7QUFBQTtBQUFBLGFBZkosZ0NBZ0JFO0FBQUEsV0FqQkosaUNBa0JFO0FBQUEsU0FuQkosaUNBb0JFO0FBQUEsc0JBRUYsdUJBQUMsaUNBQUQ7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLGFBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxRQUNULFlBQVksRUFBRSxJQUFJLGFBQWEsT0FBTyxrQkFBa0IsU0FBUyxZQUFZO0FBQUEsUUFDN0UsY0FBYyxFQUFFLElBQUksWUFBWSxPQUFPLHdCQUF3QixTQUFTLFdBQVc7QUFBQSxRQUNuRixXQUFXLENBQUMsV0FBVztBQUFBLFVBQ3JCLFlBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNEVBQ0E7QUFBQSxRQUNSO0FBQUEsU0FaRixpQ0FhQTtBQUFBO0FBQUEsS0E3REYsZ0NBOERFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMkFGNjUyMDlBREQ0RTQzNTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
