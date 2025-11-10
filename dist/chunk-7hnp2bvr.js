import {
  ArrowBackRounded_default,
  SectionCard_default,
  setareOverview,
  setareSections
} from "./chunk-fj5cs48m.js";
import {
  GhostButton_default
} from "./chunk-akz6m2hr.js";
import"./chunk-56dhb304.js";
import {
  Link
} from "./chunk-4503tp5q.js";
import {
  Box_default,
  Card_default,
  Container_default,
  Grid_default,
  Stack_default,
  Typography_default,
  __toESM,
  require_jsx_dev_runtime,
  useTheme
} from "./chunk-kr6hc1f9.js";

// src/routes/case-studies/CaseStudySetarePage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySetarePage = () => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          py: { xs: 8, md: 12 },
          background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(34,84,255,0.08), rgba(90,200,250,0.12))" : "linear-gradient(135deg, rgba(12,18,32,0.92), rgba(22,36,68,0.72))"
        },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: { xs: theme.tokens.spacing.lg, md: theme.tokens.spacing.xl },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
                component: Link,
                to: "/",
                startIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ArrowBackRounded_default, {}, undefined, false, undefined, this),
                sx: { alignSelf: "flex-start" },
                children: "Back to home"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                container: true,
                spacing: { xs: 6, md: 8 },
                alignItems: "center",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                    size: { xs: 12, md: 6 },
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                      spacing: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "eyebrow",
                          color: "brand.secondary",
                          children: "Case study · Retention & Growth"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "hero",
                          children: setareOverview.title
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                          direction: "row",
                          spacing: 1.5,
                          flexWrap: "wrap",
                          useFlexGap: true,
                          children: setareOverview.meta.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                            variant: "outlined",
                            sx: {
                              borderRadius: `${theme.tokens.radius.surface}px`,
                              boxShadow: "none",
                              px: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
                              py: { xs: theme.tokens.spacing.sm, md: theme.tokens.spacing.md },
                              minWidth: 160
                            },
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "caption",
                                color: "text.secondary",
                                children: item.label
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "body1",
                                sx: { fontWeight: 600, mt: 0.5 },
                                children: item.value
                              }, undefined, false, undefined, this)
                            ]
                          }, item.label, true, undefined, this))
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                    size: { xs: 12, md: 6 },
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                      component: "img",
                      src: setareOverview.heroImage,
                      alt: "Setare Aval interview session",
                      sx: {
                        width: "100%",
                        borderRadius: `${theme.tokens.radius.surface}px`,
                        objectFit: "cover",
                        boxShadow: theme.tokens.shadow.level1
                      }
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 8, md: 12 } },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: { xs: theme.tokens.spacing.lg, md: theme.tokens.spacing.xl },
            children: setareSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionCard_default, {
              section
            }, section.id, false, undefined, this))
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudySetarePage_default = CaseStudySetarePage;
export {
  CaseStudySetarePage_default as default
};

//# debugId=81F50F4C266B030A64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgQXJyb3dCYWNrUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvU2VjdGlvbkNhcmRcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuaW1wb3J0IHsgc2V0YXJlT3ZlcnZpZXcsIHNldGFyZVNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcblxuY29uc3QgQ2FzZVN0dWR5U2V0YXJlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMiB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoOTAsMjAwLDI1MCwwLjEyKSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiwxOCwzMiwwLjkyKSwgcmdiYSgyMiwzNiw2OCwwLjcyKSlcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy54bCB9fT5cbiAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFycm93QmFja1JvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBzeD17eyBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJhY2sgdG8gaG9tZVxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiA4IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH19PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBDYXNlIHN0dWR5IMK3IFJldGVudGlvbiAmIEdyb3d0aFxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57c2V0YXJlT3ZlcnZpZXcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5zbSwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCwgbXQ6IDAuNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiU2V0YXJlIEF2YWwgaW50ZXJ2aWV3IHNlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnRva2Vucy5zaGFkb3cubGV2ZWwxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH19PlxuICAgICAgICAgICAge3NldGFyZVNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNldGFyZVBhZ2U7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNLHNCQUFzQixNQUFNO0FBQUEsRUFDaEMsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUV2Qix1QkFDRTtBQUFBLGNBZ0ZFO0FBQUEsc0JBL0VBLHVCQW9FRSxhQXBFRjtBQUFBLFFBQ0UsV0FBVTtBQUFBLFFBQ1YsSUFBSTtBQUFBLFVBQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxVQUNwQixZQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLHlFQUNB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RTtBQUFBO0FBQUEsaUJBM0NKLGdDQTRDRTtBQUFBO0FBQUEsYUF0REosZ0NBdURFO0FBQUEsV0F4REosaUNBeURFO0FBQUEsU0FuRUosaUNBb0VFO0FBQUEsc0JBRUYsdUJBUUUsYUFSRjtBQUFBLFFBQUssV0FBVTtBQUFBLFFBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBQSxRQUFyRCwwQkFDRSx1QkFNRSxtQkFORjtBQUFBLG9DQUNFLHVCQUlFLGVBSkY7QUFBQSxZQUFPLFNBQVMsRUFBRSxJQUFJLE1BQU0sT0FBTyxRQUFRLElBQUksSUFBSSxNQUFNLE9BQU8sUUFBUSxHQUFHO0FBQUEsWUFBM0UsVUFDRyxlQUFlLElBQUksQ0FBQyw0QkFDbkIsdUJBQUMscUJBQUQ7QUFBQSxjQUF1QztBQUFBLGVBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxhQUhILGlDQUlFO0FBQUEsV0FMSixpQ0FNRTtBQUFBLFNBUEosaUNBUUU7QUFBQTtBQUFBLEtBL0VKLGdDQWdGRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjgxRjUwRjRDMjY2QjAzMEE2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
