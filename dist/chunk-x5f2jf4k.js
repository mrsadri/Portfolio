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
} from "./chunk-nc5ksz8p.js";
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

//# debugId=C3B015D12DB8477764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3V0bGluZU5hdiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXZcIjtcbmltcG9ydCBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25cIjtcbmltcG9ydCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uXCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbiBmcm9tIFwiLi9ob29rcy91c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgdXNlUmVsYXRlZENhc2VTdHVkaWVzIGZyb20gXCIuL2hvb2tzL3VzZVJlbGF0ZWRDYXNlU3R1ZGllc1wiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWR5RW50cmllcyxcbiAgZGl2YXJPdmVydmlldyxcbiAgZGl2YXJTZWN0aW9ucyxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyBkaXZhckNhc2VTdHVkeU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5cbmNvbnN0IENhc2VTdHVkeURpdmFyUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9ID0gdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbihkaXZhclNlY3Rpb25zKTtcblxuICBjb25zdCBvdGhlckNhc2VTdHVkaWVzID0gdXNlUmVsYXRlZENhc2VTdHVkaWVzKGNhc2VTdHVkeUVudHJpZXMsIFwiZGl2YXItc2VjdXJlLWNhbGxcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uZGl2YXJDYXNlU3R1ZHlNZXRhZGF0YX0gLz5cbiAgICAgIDxDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIlRydXN0ICYgU2FmZXR5IMK3IENhc2UgU3R1ZHlcIlxuICAgICAgICBvdmVydmlldz17ZGl2YXJPdmVydmlld31cbiAgICAgICAgc3VidGl0bGVGYWxsYmFjaz17ZGl2YXJDYXNlU3R1ZHlNZXRhZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgc3RhdHNUaXRsZT1cIkltcGFjdCBzbmFwc2hvdFwiXG4gICAgICAvPlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogMyB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPENhc2VTdHVkeU91dGxpbmVOYXZcbiAgICAgICAgICAgICAgICBzZWN0aW9ucz17ZGl2YXJTZWN0aW9uc31cbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uSWQ9e2FjdGl2ZVNlY3Rpb25JZH1cbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtoYW5kbGVPdXRsaW5lQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICB7ZGl2YXJTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Q2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIktlZXAgZXhwbG9yaW5nXCJcbiAgICAgICAgdGl0bGU9XCJNb3JlIHdheXMgSSBkZXNpZ24gZm9yIHRydXN0XCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJEaXZlIGludG8gb3RoZXIgY29sbGFib3JhdGlvbnMgb3IgZ2V0IHRvIGtub3cgdGhlIHBlcnNvbiBiZWhpbmQgdGhlIHdvcmsuIFBpY2sgYW5vdGhlciBjYXNlIHN0dWR5LCBwZWVrIGluc2lkZSBteSBzdG9yeSwgb3IgcmVhY2ggb3V0IGRpcmVjdGx5LlwiXG4gICAgICAgIHN0dWRpZXM9e290aGVyQ2FzZVN0dWRpZXN9XG4gICAgICAgIHByaW1hcnlDdGE9e3sgdG86IFwiL215LXN0b3J5XCIsIGxhYmVsOiBcIlZpc2l0IE15IFN0b3J5XCIsIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIgfX1cbiAgICAgICAgc2Vjb25kYXJ5Q3RhPXt7IHRvOiBcIi9jb250YWN0XCIsIGxhYmVsOiBcIlN0YXJ0IGEgY29udmVyc2F0aW9uXCIsIHZhcmlhbnQ6IFwib3V0bGluZWRcIiB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeURpdmFyUGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLElBQU0scUJBQXFCLE1BQU07QUFBQSxFQUMvQixRQUFRLGlCQUFpQix1QkFBdUIsK0JBQXVCLGFBQWE7QUFBQSxFQUVwRixNQUFNLG1CQUFtQiw4QkFBc0Isa0JBQWtCLG1CQUFtQjtBQUFBLEVBRXBGLHVCQUNFO0FBQUEsY0FzQ0U7QUFBQSxzQkFyQ0EsdUJBQUMsYUFBRDtBQUFBLFdBQVM7QUFBQSxTQUFULGlDQUFpQztBQUFBLHNCQUNqQyx1QkFBQyxrQ0FBRDtBQUFBLFFBQ0UsU0FBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1Ysa0JBQWtCLHVCQUF1QjtBQUFBLFFBQ3pDLFlBQVc7QUFBQSxTQUpiLGlDQUtBO0FBQUEsc0JBRUEsdUJBbUJFLGFBbkJGO0FBQUEsUUFBSyxXQUFVO0FBQUEsUUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQUEsUUFBckMsMEJBQ0UsdUJBaUJFLG1CQWpCRjtBQUFBLFVBQVcsVUFBUztBQUFBLFVBQXBCLDBCQUNFLHVCQWVFLGNBZkY7QUFBQSxZQUFNLFdBQVM7QUFBQSxZQUFDLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQUEsWUFBekMsVUFlRTtBQUFBLDhCQWRBLHVCQU1FLGNBTkY7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkFBQyw2QkFBRDtBQUFBLGtCQUNFLFVBQVU7QUFBQSxrQkFDVjtBQUFBLGtCQUNBLFlBQVk7QUFBQSxtQkFIZCxpQ0FJQTtBQUFBLGlCQUxGLGlDQU1FO0FBQUEsOEJBQ0YsdUJBTUUsY0FORjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUlFLGVBSkY7QUFBQSxrQkFBTyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUEvQixVQUNHLGNBQWMsSUFBSSxDQUFDLDRCQUNsQix1QkFBQyxxQkFBRDtBQUFBLG9CQUF1QztBQUFBLHFCQUFaLFFBQVEsSUFBbkMsc0JBQXlELENBQzFEO0FBQUEsbUJBSEgsaUNBSUU7QUFBQSxpQkFMSixpQ0FNRTtBQUFBO0FBQUEsYUFkSixnQ0FlRTtBQUFBLFdBaEJKLGlDQWlCRTtBQUFBLFNBbEJKLGlDQW1CRTtBQUFBLHNCQUVGLHVCQUFDLGlDQUFEO0FBQUEsUUFDRSxTQUFRO0FBQUEsUUFDUixPQUFNO0FBQUEsUUFDTixhQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxZQUFZLEVBQUUsSUFBSSxhQUFhLE9BQU8sa0JBQWtCLFNBQVMsWUFBWTtBQUFBLFFBQzdFLGNBQWMsRUFBRSxJQUFJLFlBQVksT0FBTyx3QkFBd0IsU0FBUyxXQUFXO0FBQUEsU0FOckYsaUNBT0E7QUFBQTtBQUFBLEtBckNGLGdDQXNDRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIkMzQjAxNUQxMkRCODQ3Nzc2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
