import {
  ArrowBackRounded_default,
  SectionCard_default,
  divarOverview,
  divarSections
} from "./chunk-y1bqxh4e.js";
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
                                borderRadius: theme.tokens.radius.surface,
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
                                  borderRadius: theme.tokens.radius.card,
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
                          borderRadius: theme.tokens.radius.card,
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
                    borderRadius: theme.tokens.radius.surface,
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

//# debugId=FF1F4F0EE277D38F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBBcnJvd0JhY2tSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIGRpdmFyU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogMTAsIG1kOiAxNCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgIGluc2V0OiAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHsgeHM6IDI0LCBtZDogMzIgfSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTgpKVwiXG4gICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjg4KSwgcmdiYSgzNiw2NCwxMjAsMC43MikpXCIsXG4gICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDQ4cHgpXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b24gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz1cIi9cIiBzdGFydEljb249ezxBcnJvd0JhY2tSb3VuZGVkSWNvbiAvPn0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gaG9tZVxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiA4IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRydXN0ICYgU2FmZXR5IMK3IENhc2UgU3R1ZHlcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiPntkaXZhck92ZXJ2aWV3LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcubWV0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMS4yNSwgbWQ6IDEuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIG10OiAwLjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5zdGF0cyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5zdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNCB9fSBrZXk9e3N0YXQubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjEyKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuOCksIHJnYmEoMzYsNjQsMTIwLDAuNikpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICBzcmM9e2RpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiRGl2YXIgc2VjdXJlIGNhbGwgbGlzdGluZ3NcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAzMHB4IDYwcHggcmdiYSgzNCwgODQsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMzBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICAgICAgICAgIHRvcDogeyBtZDogMTQwIH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIE91dGxpbmVcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7ZGl2YXJTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICB7ZGl2YXJTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5RGl2YXJQYWdlO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsTUFB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
