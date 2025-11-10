import {
  ArrowBackRounded_default,
  SectionCard_default,
  divarOverview,
  divarSections
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
  Button_default,
  Card_default,
  Container_default,
  Divider_default,
  Grid_default,
  Stack_default,
  Typography_default,
  __toESM,
  require_jsx_dev_runtime,
  useTheme
} from "./chunk-kr6hc1f9.js";

// src/routes/case-studies/CaseStudyDivarPage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyDivarPage = () => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 10, md: 14 } },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          maxWidth: "lg",
          sx: { position: "relative" },
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
              sx: {
                position: "absolute",
                inset: 0,
                borderRadius: { xs: 24, md: 32 },
                background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.18))" : "linear-gradient(140deg, rgba(16,28,56,0.88), rgba(36,64,120,0.72))",
                filter: "blur(48px)",
                zIndex: -1
              }
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: { xs: 3, md: 4 },
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
                  component: Link,
                  to: "/",
                  startIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ArrowBackRounded_default, {}, undefined, false, undefined, this),
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
                        spacing: { xs: 2, md: 3 },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            spacing: 1,
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "eyebrow",
                                color: "brand.secondary",
                                children: "Trust & Safety · Case Study"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "hero",
                                children: divarOverview.title
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "subtitle1",
                                color: "text.secondary",
                                sx: { lineHeight: 1.65 },
                                children: divarOverview.subtitle
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            direction: "row",
                            spacing: 1,
                            flexWrap: "wrap",
                            useFlexGap: true,
                            children: divarOverview.meta.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                              variant: "outlined",
                              sx: {
                                borderRadius: 16,
                                boxShadow: "none",
                                px: { xs: 2, md: 2.5 },
                                py: { xs: 1.25, md: 1.5 },
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
                          }, undefined, false, undefined, this),
                          divarOverview.stats && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                            container: true,
                            spacing: 2,
                            children: divarOverview.stats.map((stat) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                              size: { xs: 12, sm: 4 },
                              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                                elevation: 0,
                                sx: {
                                  borderRadius: 20,
                                  background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.12))" : "linear-gradient(140deg, rgba(16,28,56,0.8), rgba(36,64,120,0.6))",
                                  px: { xs: 2.5, md: 3 },
                                  py: { xs: 2, md: 2.5 },
                                  border: "none"
                                },
                                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                                  spacing: 0.5,
                                  children: [
                                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                      variant: "h4",
                                      children: stat.value
                                    }, undefined, false, undefined, this),
                                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                      variant: "subtitle2",
                                      color: "text.secondary",
                                      children: stat.label
                                    }, undefined, false, undefined, this)
                                  ]
                                }, undefined, true, undefined, this)
                              }, undefined, false, undefined, this)
                            }, stat.label, false, undefined, this))
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this)
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                      size: { xs: 12, md: 6 },
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                        component: "img",
                        src: divarOverview.heroImage,
                        alt: "Divar secure call listings",
                        sx: {
                          width: "100%",
                          borderRadius: 24,
                          boxShadow: theme.palette.mode === "light" ? "0 30px 60px rgba(34, 84, 255, 0.18)" : "0 30px 60px rgba(0, 0, 0, 0.45)"
                        }
                      }, undefined, false, undefined, this)
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
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
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  component: "nav",
                  "aria-label": "Case study sections",
                  spacing: 1,
                  sx: {
                    position: { md: "sticky" },
                    top: { md: 140 },
                    borderRadius: 20,
                    backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.04)" : "rgba(34,84,255,0.14)",
                    px: { xs: 2, md: 2.5 },
                    py: { xs: 2, md: 2.5 },
                    border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.18)" : "rgba(98,132,218,0.32)"}`
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "overline",
                      color: "text.secondary",
                      children: "Outline"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider_default, {}, undefined, false, undefined, this),
                    divarSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                      component: "a",
                      href: `#${section.id}`,
                      variant: "text",
                      size: "small",
                      sx: {
                        justifyContent: "flex-start",
                        fontWeight: 500,
                        color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
                      },
                      children: section.title
                    }, section.id, false, undefined, this))
                  ]
                }, undefined, true, undefined, this)
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
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudyDivarPage_default = CaseStudyDivarPage;
export {
  CaseStudyDivarPage_default as default
};

//# debugId=84FB9D737FBD1C4864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBBcnJvd0JhY2tSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIGRpdmFyU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogMTAsIG1kOiAxNCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgIGluc2V0OiAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHsgeHM6IDI0LCBtZDogMzIgfSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTgpKVwiXG4gICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjg4KSwgcmdiYSgzNiw2NCwxMjAsMC43MikpXCIsXG4gICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDQ4cHgpXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b24gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz1cIi9cIiBzdGFydEljb249ezxBcnJvd0JhY2tSb3VuZGVkSWNvbiAvPn0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gaG9tZVxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiA4IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRydXN0ICYgU2FmZXR5IMK3IENhc2UgU3R1ZHlcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiPntkaXZhck92ZXJ2aWV3LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcubWV0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAxLjI1LCBtZDogMS41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCwgbXQ6IDAuNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN0YXRzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN0YXRzLm1hcCgoc3RhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA0IH19IGtleT17c3RhdC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjgpLCByZ2JhKDM2LDY0LDEyMCwwLjYpKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIkRpdmFyIHNlY3VyZSBjYWxsIGxpc3RpbmdzXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAzMHB4IDYwcHggcmdiYSgzNCwgODQsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMzBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICAgICAgICAgIHRvcDogeyBtZDogMTQwIH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtkaXZhclNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7c2VjdGlvbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogOSB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICAgIHtkaXZhclNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhc2VTdHVkeVNlY3Rpb25DYXJkIGtleT17c2VjdGlvbi5pZH0gc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlEaXZhclBhZ2U7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0scUJBQXFCLE1BQU07QUFBQSxFQUMvQixNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFO0FBQUEsY0F3S0U7QUFBQSxzQkF2S0EsdUJBeUdFLGFBekdGO0FBQUEsUUFBSyxXQUFVO0FBQUEsUUFBVSxJQUFJ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
