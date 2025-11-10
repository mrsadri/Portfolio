import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  divarOverview,
  divarSections,
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

// src/routes/case-studies/CaseStudyDivarPage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyDivarPage = () => {
  const { activeSectionId, handleOutlineClick } = useCaseStudyNavigation_default(divarSections);
  const siteUrl = site_default();
  const caseStudyDescription = divarOverview.subtitle ?? "Privacy-first calling experience that reduced harassment incidents by 60% for 2.1M Divar users.";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: divarOverview.title,
    description: caseStudyDescription,
    author: {
      "@type": "Person",
      name: "Masih Sadri",
      url: siteUrl
    },
    url: `${siteUrl}/case-studies/divar-secure-call`,
    image: divarOverview.heroImage,
    keyword: ["Trust & Safety", "Harassment Reduction", "Marketplace"]
  };
  const otherCaseStudies = caseStudyEntries.filter((entry) => entry.id !== "divar-secure-call");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        title: "Divar Secure Call Case Study — Reducing Harassment by 60%",
        description: caseStudyDescription,
        canonicalPath: "/case-studies/divar-secure-call",
        openGraph: {
          type: "article",
          image: {
            url: divarOverview.heroImage,
            alt: "Divar secure call listings interface"
          }
        },
        structuredData
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CaseStudyOverviewSection_default, {
        eyebrow: "Trust & Safety · Case Study",
        overview: divarOverview,
        subtitleFallback: caseStudyDescription,
        statsTitle: "Impact snapshot"
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

//# debugId=F393B832E1528DBA64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW9cIjtcbmltcG9ydCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvU2VjdGlvbkNhcmRcIjtcbmltcG9ydCBDYXNlU3R1ZHlPdXRsaW5lTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlPdXRsaW5lTmF2XCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25cIjtcbmltcG9ydCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cIjtcbmltcG9ydCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Nhc2Utc3R1ZGllcy91c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBjYXNlU3R1ZHlFbnRyaWVzLCBkaXZhck92ZXJ2aWV3LCBkaXZhclNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi91dGlscy9zaXRlXCI7XG5cbmNvbnN0IENhc2VTdHVkeURpdmFyUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9ID0gdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbihkaXZhclNlY3Rpb25zKTtcbiAgY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuICBjb25zdCBjYXNlU3R1ZHlEZXNjcmlwdGlvbiA9XG4gICAgZGl2YXJPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUHJpdmFjeS1maXJzdCBjYWxsaW5nIGV4cGVyaWVuY2UgdGhhdCByZWR1Y2VkIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJSBmb3IgMi4xTSBEaXZhciB1c2Vycy5cIjtcblxuICBjb25zdCBzdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIkNhc2VTdHVkeVwiLFxuICAgIG5hbWU6IGRpdmFyT3ZlcnZpZXcudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGNhc2VTdHVkeURlc2NyaXB0aW9uLFxuICAgIGF1dGhvcjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgIH0sXG4gICAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxgLFxuICAgIGltYWdlOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZSxcbiAgICBrZXl3b3JkOiBbXCJUcnVzdCAmIFNhZmV0eVwiLCBcIkhhcmFzc21lbnQgUmVkdWN0aW9uXCIsIFwiTWFya2V0cGxhY2VcIl0sXG4gIH0gYXMgY29uc3Q7XG5cbiAgY29uc3Qgb3RoZXJDYXNlU3R1ZGllcyA9IGNhc2VTdHVkeUVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaWQgIT09IFwiZGl2YXItc2VjdXJlLWNhbGxcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlb1xuICAgICAgICB0aXRsZT1cIkRpdmFyIFNlY3VyZSBDYWxsIENhc2UgU3R1ZHkg4oCUIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCJcbiAgICAgICAgZGVzY3JpcHRpb249e2Nhc2VTdHVkeURlc2NyaXB0aW9ufVxuICAgICAgICBjYW5vbmljYWxQYXRoPVwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiXG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB1cmw6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLFxuICAgICAgICAgICAgYWx0OiBcIkRpdmFyIHNlY3VyZSBjYWxsIGxpc3RpbmdzIGludGVyZmFjZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0cnVjdHVyZWREYXRhPXtzdHJ1Y3R1cmVkRGF0YX1cbiAgICAgIC8+XG4gICAgICA8Q2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJUcnVzdCAmIFNhZmV0eSDCtyBDYXNlIFN0dWR5XCJcbiAgICAgICAgb3ZlcnZpZXc9e2RpdmFyT3ZlcnZpZXd9XG4gICAgICAgIHN1YnRpdGxlRmFsbGJhY2s9e2Nhc2VTdHVkeURlc2NyaXB0aW9ufVxuICAgICAgICBzdGF0c1RpdGxlPVwiSW1wYWN0IHNuYXBzaG90XCJcbiAgICAgIC8+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPENhc2VTdHVkeU91dGxpbmVOYXZcbiAgICAgICAgICAgICAgICBzZWN0aW9ucz17ZGl2YXJTZWN0aW9uc31cbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uSWQ9e2FjdGl2ZVNlY3Rpb25JZH1cbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtoYW5kbGVPdXRsaW5lQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICB7ZGl2YXJTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Q2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25cbiAgICAgICAgZXllYnJvdz1cIktlZXAgZXhwbG9yaW5nXCJcbiAgICAgICAgdGl0bGU9XCJNb3JlIHdheXMgSSBkZXNpZ24gZm9yIHRydXN0XCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJEaXZlIGludG8gb3RoZXIgY29sbGFib3JhdGlvbnMgb3IgZ2V0IHRvIGtub3cgdGhlIHBlcnNvbiBiZWhpbmQgdGhlIHdvcmsuIFBpY2sgYW5vdGhlciBjYXNlIHN0dWR5LCBwZWVrIGluc2lkZSBteSBzdG9yeSwgb3IgcmVhY2ggb3V0IGRpcmVjdGx5LlwiXG4gICAgICAgIHN0dWRpZXM9e290aGVyQ2FzZVN0dWRpZXN9XG4gICAgICAgIHByaW1hcnlDdGE9e3sgdG86IFwiL215LXN0b3J5XCIsIGxhYmVsOiBcIlZpc2l0IE15IFN0b3J5XCIsIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIgfX1cbiAgICAgICAgc2Vjb25kYXJ5Q3RhPXt7IHRvOiBcIi9jb250YWN0XCIsIGxhYmVsOiBcIlN0YXJ0IGEgY29udmVyc2F0aW9uXCIsIHZhcmlhbnQ6IFwib3V0bGluZWRcIiB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeURpdmFyUGFnZTtcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsUUFBUSxpQkFBaUIsdUJBQXVCLCtCQUF1QixhQUFhO0FBQUEsRUFDcEYsTUFBTSxVQUFVLGFBQVc7QUFBQSxFQUUzQixNQUFNLHVCQUNKLGNBQWMsWUFDZDtBQUFBLEVBRUYsTUFBTSxpQkFBaUI7QUFBQSxJQUNyQixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLGNBQWM7QUFBQSxJQUNwQixhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsS0FBSyxHQUFHO0FBQUEsSUFDUixPQUFPLGNBQWM7QUFBQSxJQUNyQixTQUFTLENBQUMsa0JBQWtCLHdCQUF3QixhQUFhO0FBQUEsRUFDbkU7QUFBQSxFQUVBLE1BQU0sbUJBQW1CLGlCQUFpQixPQUFPLENBQUMsVUFBVSxNQUFNLE9BQU8sbUJBQW1CO0FBQUEsRUFFNUYsdUJBQ0U7QUFBQSxjQWtERTtBQUFBLHNCQWpEQSx1QkFBQyxhQUFEO0FBQUEsUUFDRSxPQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixlQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTCxLQUFLLGNBQWM7QUFBQSxZQUNuQixLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsU0FYRixpQ0FZQTtBQUFBLHNCQUNBLHVCQUFDLGtDQUFEO0FBQUEsUUFDRSxTQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxRQUNsQixZQUFXO0FBQUEsU0FKYixpQ0FLQTtBQUFBLHNCQUVBLHVCQW1CRSxhQW5CRjtBQUFBLFFBQUssV0FBVTtBQUFBLFFBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBQSxRQUFyRCwwQkFDRSx1QkFpQkUsbUJBakJGO0FBQUEsVUFBVyxVQUFTO0FBQUEsVUFBcEIsMEJBQ0UsdUJBZUUsY0FmRjtBQUFBLFlBQU0sV0FBUztBQUFBLFlBQUMsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxZQUF6QyxVQWVFO0FBQUEsOEJBZEEsdUJBTUUsY0FORjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUFDLDZCQUFEO0FBQUEsa0JBQ0UsVUFBVTtBQUFBLGtCQUNWO0FBQUEsa0JBQ0EsWUFBWTtBQUFBLG1CQUhkLGlDQUlBO0FBQUEsaUJBTEYsaUNBTUU7QUFBQSw4QkFDRix1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBSUUsZUFKRjtBQUFBLGtCQUFPLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsa0JBQS9CLFVBQ0csY0FBYyxJQUFJLENBQUMsNEJBQ2xCLHVCQUFDLHFCQUFEO0FBQUEsb0JBQXVDO0FBQUEscUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxtQkFISCxpQ0FJRTtBQUFBLGlCQUxKLGlDQU1FO0FBQUE7QUFBQSxhQWRKLGdDQWVFO0FBQUEsV0FoQkosaUNBaUJFO0FBQUEsU0FsQkosaUNBbUJFO0FBQUEsc0JBRUYsdUJBQUMsaUNBQUQ7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLGFBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxRQUNULFlBQVksRUFBRSxJQUFJLGFBQWEsT0FBTyxrQkFBa0IsU0FBUyxZQUFZO0FBQUEsUUFDN0UsY0FBYyxFQUFFLElBQUksWUFBWSxPQUFPLHdCQUF3QixTQUFTLFdBQVc7QUFBQSxTQU5yRixpQ0FPQTtBQUFBO0FBQUEsS0FqREYsZ0NBa0RFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiRjM5M0I4MzJFMTUyOERCQTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
