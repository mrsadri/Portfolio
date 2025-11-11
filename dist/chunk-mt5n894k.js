import {
  CaseStudyOutlineNav_default,
  CaseStudyOverviewSection_default,
  CaseStudyRelatedSection_default,
  SectionCard_default,
  caseStudyEntries,
  divarOverview,
  divarSections,
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

// src/features/case-studies/CaseStudyDivarPage.tsx
var import_react = __toESM(require_react(), 1);
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
  const otherCaseStudies = import_react.useMemo(() => caseStudyEntries.filter((entry) => entry.id !== "divar-secure-call"), []);
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

//# debugId=B37EFE9D715127E464756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvU2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IENhc2VTdHVkeU91dGxpbmVOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlPdXRsaW5lTmF2XCI7XG5pbXBvcnQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24gZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvblwiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWR5RW50cmllcyxcbiAgZGl2YXJPdmVydmlldyxcbiAgZGl2YXJTZWN0aW9ucyxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcblxuY29uc3QgQ2FzZVN0dWR5RGl2YXJQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZVNlY3Rpb25JZCwgaGFuZGxlT3V0bGluZUNsaWNrIH0gPSB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uKGRpdmFyU2VjdGlvbnMpO1xuICBjb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG4gIGNvbnN0IGNhc2VTdHVkeURlc2NyaXB0aW9uID1cbiAgICBkaXZhck92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJQcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGZvciAyLjFNIERpdmFyIHVzZXJzLlwiO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0ge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gICAgbmFtZTogZGl2YXJPdmVydmlldy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogY2FzZVN0dWR5RGVzY3JpcHRpb24sXG4gICAgYXV0aG9yOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgICB1cmw6IHNpdGVVcmwsXG4gICAgfSxcbiAgICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbGAsXG4gICAgaW1hZ2U6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLFxuICAgIGtleXdvcmQ6IFtcIlRydXN0ICYgU2FmZXR5XCIsIFwiSGFyYXNzbWVudCBSZWR1Y3Rpb25cIiwgXCJNYXJrZXRwbGFjZVwiXSxcbiAgfSBhcyBjb25zdDtcblxuICBjb25zdCBvdGhlckNhc2VTdHVkaWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZHlFbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlkICE9PSBcImRpdmFyLXNlY3VyZS1jYWxsXCIpLFxuICAgIFtdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgdGl0bGU9XCJEaXZhciBTZWN1cmUgQ2FsbCBDYXNlIFN0dWR5IOKAlCBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPXtjYXNlU3R1ZHlEZXNjcmlwdGlvbn1cbiAgICAgICAgY2Fub25pY2FsUGF0aD1cIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIlxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdXJsOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZSxcbiAgICAgICAgICAgIGFsdDogXCJEaXZhciBzZWN1cmUgY2FsbCBsaXN0aW5ncyBpbnRlcmZhY2VcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHJ1Y3R1cmVkRGF0YT17c3RydWN0dXJlZERhdGF9XG4gICAgICAvPlxuICAgICAgPENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblxuICAgICAgICBleWVicm93PVwiVHJ1c3QgJiBTYWZldHkgwrcgQ2FzZSBTdHVkeVwiXG4gICAgICAgIG92ZXJ2aWV3PXtkaXZhck92ZXJ2aWV3fVxuICAgICAgICBzdWJ0aXRsZUZhbGxiYWNrPXtjYXNlU3R1ZHlEZXNjcmlwdGlvbn1cbiAgICAgICAgc3RhdHNUaXRsZT1cIkltcGFjdCBzbmFwc2hvdFwiXG4gICAgICAvPlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEyIH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogMTAgfX0+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0+XG4gICAgICAgICAgICAgIDxDYXNlU3R1ZHlPdXRsaW5lTmF2XG4gICAgICAgICAgICAgICAgc2VjdGlvbnM9e2RpdmFyU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbklkPXthY3RpdmVTZWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aGFuZGxlT3V0bGluZUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge2RpdmFyU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uXG4gICAgICAgIGV5ZWJyb3c9XCJLZWVwIGV4cGxvcmluZ1wiXG4gICAgICAgIHRpdGxlPVwiTW9yZSB3YXlzIEkgZGVzaWduIGZvciB0cnVzdFwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRGl2ZSBpbnRvIG90aGVyIGNvbGxhYm9yYXRpb25zIG9yIGdldCB0byBrbm93IHRoZSBwZXJzb24gYmVoaW5kIHRoZSB3b3JrLiBQaWNrIGFub3RoZXIgY2FzZSBzdHVkeSwgcGVlayBpbnNpZGUgbXkgc3RvcnksIG9yIHJlYWNoIG91dCBkaXJlY3RseS5cIlxuICAgICAgICBzdHVkaWVzPXtvdGhlckNhc2VTdHVkaWVzfVxuICAgICAgICBwcmltYXJ5Q3RhPXt7IHRvOiBcIi9teS1zdG9yeVwiLCBsYWJlbDogXCJWaXNpdCBNeSBTdG9yeVwiLCB2YXJpYW50OiBcImNvbnRhaW5lZFwiIH19XG4gICAgICAgIHNlY29uZGFyeUN0YT17eyB0bzogXCIvY29udGFjdFwiLCBsYWJlbDogXCJTdGFydCBhIGNvbnZlcnNhdGlvblwiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlEaXZhclBhZ2U7XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFjQSxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsUUFBUSxpQkFBaUIsdUJBQXVCLCtCQUF1QixhQUFhO0FBQUEsRUFDcEYsTUFBTSxVQUFVLGFBQVc7QUFBQSxFQUUzQixNQUFNLHVCQUNKLGNBQWMsWUFDZDtBQUFBLEVBRUYsTUFBTSxpQkFBaUI7QUFBQSxJQUNyQixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLGNBQWM7QUFBQSxJQUNwQixhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsS0FBSyxHQUFHO0FBQUEsSUFDUixPQUFPLGNBQWM7QUFBQSxJQUNyQixTQUFTLENBQUMsa0JBQWtCLHdCQUF3QixhQUFhO0FBQUEsRUFDbkU7QUFBQSxFQUVBLE1BQU0sbUJBQW1CLHFCQUN2QixNQUFNLGlCQUFpQixPQUFPLENBQUMsVUFBVSxNQUFNLE9BQU8sbUJBQW1CLEdBQ3pFLENBQUMsQ0FDSDtBQUFBLEVBRUEsdUJBQ0U7QUFBQSxjQWtERTtBQUFBLHNCQWpEQSx1QkFBQyxhQUFEO0FBQUEsUUFDRSxPQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixlQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTCxLQUFLLGNBQWM7QUFBQSxZQUNuQixLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsU0FYRixpQ0FZQTtBQUFBLHNCQUNBLHVCQUFDLGtDQUFEO0FBQUEsUUFDRSxTQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxRQUNsQixZQUFXO0FBQUEsU0FKYixpQ0FLQTtBQUFBLHNCQUVBLHVCQW1CRSxhQW5CRjtBQUFBLFFBQUssV0FBVTtBQUFBLFFBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBQSxRQUFyRCwwQkFDRSx1QkFpQkUsbUJBakJGO0FBQUEsVUFBVyxVQUFTO0FBQUEsVUFBcEIsMEJBQ0UsdUJBZUUsY0FmRjtBQUFBLFlBQU0sV0FBUztBQUFBLFlBQUMsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxZQUF6QyxVQWVFO0FBQUEsOEJBZEEsdUJBTUUsY0FORjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUFDLDZCQUFEO0FBQUEsa0JBQ0UsVUFBVTtBQUFBLGtCQUNWO0FBQUEsa0JBQ0EsWUFBWTtBQUFBLG1CQUhkLGlDQUlBO0FBQUEsaUJBTEYsaUNBTUU7QUFBQSw4QkFDRix1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBSUUsZUFKRjtBQUFBLGtCQUFPLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsa0JBQS9CLFVBQ0csY0FBYyxJQUFJLENBQUMsNEJBQ2xCLHVCQUFDLHFCQUFEO0FBQUEsb0JBQXVDO0FBQUEscUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxtQkFISCxpQ0FJRTtBQUFBLGlCQUxKLGlDQU1FO0FBQUE7QUFBQSxhQWRKLGdDQWVFO0FBQUEsV0FoQkosaUNBaUJFO0FBQUEsU0FsQkosaUNBbUJFO0FBQUEsc0JBRUYsdUJBQUMsaUNBQUQ7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLGFBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxRQUNULFlBQVksRUFBRSxJQUFJLGFBQWEsT0FBTyxrQkFBa0IsU0FBUyxZQUFZO0FBQUEsUUFDN0UsY0FBYyxFQUFFLElBQUksWUFBWSxPQUFPLHdCQUF3QixTQUFTLFdBQVc7QUFBQSxTQU5yRixpQ0FPQTtBQUFBO0FBQUEsS0FqREYsZ0NBa0RFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiQjM3RUZFOUQ3MTUxMjdFNDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
