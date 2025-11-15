import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  divarCaseStudyMetadata,
  divarOverview,
  divarSections,
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

// src/features/case-studies/CaseStudyDivarPage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyDivarPage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation_default(divarSections);
  const otherCaseStudies = useRelatedCaseStudies_default(caseStudyEntries, "divar-secure-call");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        ...divarCaseStudyMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyOverviewSection_default, {
        eyebrow: "Trust & Safety · Case Study",
        overview: divarOverview,
        subtitleFallback: divarCaseStudyMetadata.description,
        statsTitle: "Impact snapshot"
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
                  sections: divarSections,
                  activeSectionId,
                  onNavigate: handleOutlineClick
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 9 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: { xs: 3, md: 4 },
                  children: divarSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionCard_default, {
                    section
                  }, section.id, false, undefined, this))
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyRelatedSection_default, {
        eyebrow: "Keep exploring",
        title: "More ways I design for trust",
        description: "Dive into other collaborations or get to know the person behind the work. Pick another case study, peek inside my story, or reach out directly.",
        studies: otherCaseStudies,
        primaryCta: { to: "/my-story", label: "Visit My Story", variant: "contained" },
        secondaryCta: { to: "/contact", label: "Start a conversation", variant: "outlined" }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudyDivarPage_default = CaseStudyDivarPage;
export {
  CaseStudyDivarPage_default as default
};

//# debugId=5B12F1C8EFF9151A64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgU2VvIH0gZnJvbSBcIkBzaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IENhc2VTdHVkeU91dGxpbmVOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlPdXRsaW5lTmF2XCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24gZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyBmcm9tIFwiLi9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXNcIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkeUVudHJpZXMsXG4gIGRpdmFyT3ZlcnZpZXcsXG4gIGRpdmFyU2VjdGlvbnMsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHsgZGl2YXJDYXNlU3R1ZHlNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlU2VjdGlvbklkLCBoYW5kbGVPdXRsaW5lQ2xpY2sgfSA9IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24oZGl2YXJTZWN0aW9ucyk7XG5cbiAgY29uc3Qgb3RoZXJDYXNlU3R1ZGllcyA9IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyhjYXNlU3R1ZHlFbnRyaWVzLCBcImRpdmFyLXNlY3VyZS1jYWxsXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLmRpdmFyQ2FzZVN0dWR5TWV0YWRhdGF9IC8+XG4gICAgICA8Q2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJUcnVzdCAmIFNhZmV0eSDCtyBDYXNlIFN0dWR5XCJcbiAgICAgICAgb3ZlcnZpZXc9e2RpdmFyT3ZlcnZpZXd9XG4gICAgICAgIHN1YnRpdGxlRmFsbGJhY2s9e2RpdmFyQ2FzZVN0dWR5TWV0YWRhdGEuZGVzY3JpcHRpb259XG4gICAgICAgIHN0YXRzVGl0bGU9XCJJbXBhY3Qgc25hcHNob3RcIlxuICAgICAgLz5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IDMgfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogMTAgfX0+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0+XG4gICAgICAgICAgICAgIDxDYXNlU3R1ZHlPdXRsaW5lTmF2XG4gICAgICAgICAgICAgICAgc2VjdGlvbnM9e2RpdmFyU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbklkPXthY3RpdmVTZWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aGFuZGxlT3V0bGluZUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge2RpdmFyU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJLZWVwIGV4cGxvcmluZ1wiXG4gICAgICAgIHRpdGxlPVwiTW9yZSB3YXlzIEkgZGVzaWduIGZvciB0cnVzdFwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRGl2ZSBpbnRvIG90aGVyIGNvbGxhYm9yYXRpb25zIG9yIGdldCB0byBrbm93IHRoZSBwZXJzb24gYmVoaW5kIHRoZSB3b3JrLiBQaWNrIGFub3RoZXIgY2FzZSBzdHVkeSwgcGVlayBpbnNpZGUgbXkgc3RvcnksIG9yIHJlYWNoIG91dCBkaXJlY3RseS5cIlxuICAgICAgICBzdHVkaWVzPXtvdGhlckNhc2VTdHVkaWVzfVxuICAgICAgICBwcmltYXJ5Q3RhPXt7IHRvOiBcIi9teS1zdG9yeVwiLCBsYWJlbDogXCJWaXNpdCBNeSBTdG9yeVwiLCB2YXJpYW50OiBcImNvbnRhaW5lZFwiIH19XG4gICAgICAgIHNlY29uZGFyeUN0YT17eyB0bzogXCIvY29udGFjdFwiLCBsYWJlbDogXCJTdGFydCBhIGNvbnZlcnNhdGlvblwiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlEaXZhclBhZ2U7XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsUUFBUSxpQkFBaUIsdUJBQXVCLCtCQUF1QixhQUFhO0FBQUEsRUFFcEYsTUFBTSxtQkFBbUIsOEJBQXNCLGtCQUFrQixtQkFBbUI7QUFBQSxFQUVwRix1QkFDRTtBQUFBLGNBc0NFO0FBQUEsc0JBckNBLHVCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBaUM7QUFBQSxzQkFDakMsdUJBQUMsa0NBQUQ7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLGtCQUFrQix1QkFBdUI7QUFBQSxRQUN6QyxZQUFXO0FBQUEsU0FKYixpQ0FLQTtBQUFBLHNCQUVBLHVCQW1CRSxhQW5CRjtBQUFBLFFBQUssV0FBVTtBQUFBLFFBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFBLFFBQXJDLDBCQUNFLHVCQWlCRSxtQkFqQkY7QUFBQSxVQUFXLFVBQVM7QUFBQSxVQUFwQiwwQkFDRSx1QkFlRSxjQWZGO0FBQUEsWUFBTSxXQUFTO0FBQUEsWUFBQyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLFlBQXpDLFVBZUU7QUFBQSw4QkFkQSx1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBQUMsNkJBQUQ7QUFBQSxrQkFDRSxVQUFVO0FBQUEsa0JBQ1Y7QUFBQSxrQkFDQSxZQUFZO0FBQUEsbUJBSGQsaUNBSUE7QUFBQSxpQkFMRixpQ0FNRTtBQUFBLDhCQUNGLHVCQU1FLGNBTkY7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkFJRSxlQUpGO0FBQUEsa0JBQU8sU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxrQkFBL0IsVUFDRyxjQUFjLElBQUksQ0FBQyw0QkFDbEIsdUJBQUMscUJBQUQ7QUFBQSxvQkFBdUM7QUFBQSxxQkFBWixRQUFRLElBQW5DLHNCQUF5RCxDQUMxRDtBQUFBLG1CQUhILGlDQUlFO0FBQUEsaUJBTEosaUNBTUU7QUFBQTtBQUFBLGFBZEosZ0NBZUU7QUFBQSxXQWhCSixpQ0FpQkU7QUFBQSxTQWxCSixpQ0FtQkU7QUFBQSxzQkFFRix1QkFBQyxpQ0FBRDtBQUFBLFFBQ0UsU0FBUTtBQUFBLFFBQ1IsT0FBTTtBQUFBLFFBQ04sYUFBWTtBQUFBLFFBQ1osU0FBUztBQUFBLFFBQ1QsWUFBWSxFQUFFLElBQUksYUFBYSxPQUFPLGtCQUFrQixTQUFTLFlBQVk7QUFBQSxRQUM3RSxjQUFjLEVBQUUsSUFBSSxZQUFZLE9BQU8sd0JBQXdCLFNBQVMsV0FBVztBQUFBLFNBTnJGLGlDQU9BO0FBQUE7QUFBQSxLQXJDRixnQ0FzQ0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICI1QjEyRjFDOEVGRjkxNTFBNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
