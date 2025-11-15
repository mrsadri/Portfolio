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
} from "./chunk-ecdwmet8.js";
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

//# debugId=10173B923C2DF7F864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlTZXRhcmVZZWtQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IENhc2VTdHVkeU91dGxpbmVOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlPdXRsaW5lTmF2XCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24gZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyBmcm9tIFwiLi9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXNcIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkeUVudHJpZXMsXG4gIHNldGFyZVlla092ZXJ2aWV3LFxuICBzZXRhcmVZZWtTZWN0aW9ucyxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyBzZXRhcmVZZWtDYXNlU3R1ZHlNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZXRhcmVZZWtQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZVNlY3Rpb25JZCwgaGFuZGxlT3V0bGluZUNsaWNrIH0gPSB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uKHNldGFyZVlla1NlY3Rpb25zKTtcblxuICBjb25zdCBvdGhlckNhc2VTdHVkaWVzID0gdXNlUmVsYXRlZENhc2VTdHVkaWVzKGNhc2VTdHVkeUVudHJpZXMsIFwic2V0YXJlLXllay1iaWxsLXBheW1lbnRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uc2V0YXJlWWVrQ2FzZVN0dWR5TWV0YWRhdGF9IC8+XG4gICAgICA8Q2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJDYXNlIHN0dWR5IMK3IFNldGFyZSBBdmFsIChTZXRhcmVZZWspXCJcbiAgICAgICAgb3ZlcnZpZXc9e3NldGFyZVlla092ZXJ2aWV3fVxuICAgICAgICBzdGF0c1RpdGxlPVwiSW1wYWN0IHNuYXBzaG90XCJcbiAgICAgICAgc3RhdHNWYXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICBoZXJvQmFja2Ryb3BTeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNiksIHJnYmEoMTQ1LDE2NywyNTUsMC4xNCkpXCJcbiAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTIsMTgsMzIsMC44NSksIHJnYmEoMjgsNDgsOTAsMC42OCkpXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBoZXJvU3VyZmFjZVN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJnYmEoMjUwLCAyNTIsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDEyLCAxOCwgMzIsIDAuOSlcIixcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPENhc2VTdHVkeU91dGxpbmVOYXZcbiAgICAgICAgICAgICAgICBzZWN0aW9ucz17c2V0YXJlWWVrU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbklkPXthY3RpdmVTZWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aGFuZGxlT3V0bGluZUNsaWNrfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN4PXt7IGJvcmRlclJhZGl1czogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogOSB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICAgIHtzZXRhcmVZZWtTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Q2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIkNvbnRpbnVlIHRoZSBqb3VybmV5XCJcbiAgICAgICAgdGl0bGU9XCJTZWUgbW9yZSB3YXlzIEkgZGVzaWduIGZvciBpbXBhY3RcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkV4cGxvcmUgYWRkaXRpb25hbCBwcm9kdWN0IGNoYWxsZW5nZXMgb3IgbGVhcm4gbW9yZSBhYm91dCBob3cgSSBjb2xsYWJvcmF0ZS4gQ2hvb3NlIGFub3RoZXIgY2FzZSBzdHVkeSwgcmVhZCBteSBzdG9yeSwgb3IgZHJvcCBtZSBhIGxpbmUuXCJcbiAgICAgICAgc3R1ZGllcz17b3RoZXJDYXNlU3R1ZGllc31cbiAgICAgICAgcHJpbWFyeUN0YT17eyB0bzogXCIvbXktc3RvcnlcIiwgbGFiZWw6IFwiVmlzaXQgTXkgU3RvcnlcIiwgdmFyaWFudDogXCJjb250YWluZWRcIiB9fVxuICAgICAgICBzZWNvbmRhcnlDdGE9e3sgdG86IFwiL2NvbnRhY3RcIiwgbGFiZWw6IFwiU3RhcnQgYSBjb252ZXJzYXRpb25cIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiIH19XG4gICAgICAgIHNlY3Rpb25TeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDMsMjQ3LDI1NSwwLjgyKSwgcmdiYSgyMjYsMjM2LDI1NSwwLjk0KSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiwxOCwzMCwwLjkpLCByZ2JhKDE5LDI4LDQ0LDAuOTIpKVwiLFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZXRhcmVZZWtQYWdlO1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLElBQU0seUJBQXlCLE1BQU07QUFBQSxFQUNuQyxRQUFRLGlCQUFpQix1QkFBdUIsK0JBQXVCLGlCQUFpQjtBQUFBLEVBRXhGLE1BQU0sbUJBQW1CLDhCQUFzQixrQkFBa0IseUJBQXlCO0FBQUEsRUFFMUYsdUJBQ0U7QUFBQSxjQThERTtBQUFBLHNCQTdEQSx1QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQXFDO0FBQUEsc0JBQ3JDLHVCQUFDLGtDQUFEO0FBQUEsUUFDRSxTQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixZQUFXO0FBQUEsUUFDWCxjQUFhO0FBQUEsUUFDYixnQkFBZ0IsQ0FBQyxXQUFXO0FBQUEsVUFDMUIsWUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiwwRUFDQTtBQUFBLFFBQ1I7QUFBQSxRQUNBLGVBQWUsQ0FBQyxXQUFXO0FBQUEsVUFDekIsaUJBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNkJBQ0E7QUFBQSxVQUNOLFFBQVEsYUFDTixNQUFNLFFBQVEsU0FBUyxVQUNuQix5QkFDQTtBQUFBLFFBRVI7QUFBQSxTQXJCRixpQ0FzQkE7QUFBQSxzQkFFQSx1QkFvQkUsYUFwQkY7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUEsUUFBckQsMEJBQ0UsdUJBa0JFLG1CQWxCRjtBQUFBLFVBQVcsVUFBUztBQUFBLFVBQXBCLDBCQUNFLHVCQWdCRSxjQWhCRjtBQUFBLFlBQU0sV0FBUztBQUFBLFlBQUMsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxZQUF6QyxVQWdCRTtBQUFBLDhCQWZBLHVCQU9FLGNBUEY7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkFBQyw2QkFBRDtBQUFBLGtCQUNFLFVBQVU7QUFBQSxrQkFDVjtBQUFBLGtCQUNBLFlBQVk7QUFBQSxrQkFDWixhQUFhLEVBQUUsY0FBYyxPQUFPO0FBQUEsbUJBSnRDLGlDQUtBO0FBQUEsaUJBTkYsaUNBT0U7QUFBQSw4QkFDRix1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBSUUsZUFKRjtBQUFBLGtCQUFPLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsa0JBQS9CLFVBQ0csa0JBQWtCLElBQUksQ0FBQyw0QkFDdEIsdUJBQUMscUJBQUQ7QUFBQSxvQkFBdUM7QUFBQSxxQkFBWixRQUFRLElBQW5DLHNCQUF5RCxDQUMxRDtBQUFBLG1CQUhILGlDQUlFO0FBQUEsaUJBTEosaUNBTUU7QUFBQTtBQUFBLGFBZkosZ0NBZ0JFO0FBQUEsV0FqQkosaUNBa0JFO0FBQUEsU0FuQkosaUNBb0JFO0FBQUEsc0JBRUYsdUJBQUMsaUNBQUQ7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLGFBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxRQUNULFlBQVksRUFBRSxJQUFJLGFBQWEsT0FBTyxrQkFBa0IsU0FBUyxZQUFZO0FBQUEsUUFDN0UsY0FBYyxFQUFFLElBQUksWUFBWSxPQUFPLHdCQUF3QixTQUFTLFdBQVc7QUFBQSxRQUNuRixXQUFXLENBQUMsV0FBVztBQUFBLFVBQ3JCLFlBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNEVBQ0E7QUFBQSxRQUNSO0FBQUEsU0FaRixpQ0FhQTtBQUFBO0FBQUEsS0E3REYsZ0NBOERFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMTAxNzNCOTIzQzJERjdGODY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
