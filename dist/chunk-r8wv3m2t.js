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
                background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(34,84,255,0.06), rgba(145,167,255,0.14))" : "linear-gradient(140deg, rgba(12,18,32,0.85), rgba(28,48,90,0.68))",
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
                                children: "Case study · Retention & Growth"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "hero",
                                children: setareOverview.title
                              }, undefined, false, undefined, this),
                              setareOverview.subtitle && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "subtitle1",
                                color: "text.secondary",
                                sx: { lineHeight: 1.65 },
                                children: setareOverview.subtitle
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            direction: "row",
                            spacing: 1,
                            flexWrap: "wrap",
                            useFlexGap: true,
                            children: setareOverview.meta.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
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
                          setareOverview.stats && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                            container: true,
                            spacing: 2,
                            children: setareOverview.stats.map((stat) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                              size: { xs: 12, sm: setareOverview.stats.length > 1 ? 6 : 12 },
                              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                                elevation: 0,
                                sx: {
                                  borderRadius: 20,
                                  px: { xs: 2.5, md: 3 },
                                  py: { xs: 2, md: 2.5 },
                                  border: `1px solid ${theme.tokens.colors.border}`,
                                  backgroundColor: theme.palette.mode === "light" ? "rgba(249,251,255,0.92)" : "rgba(14, 22, 38, 0.85)"
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
                        src: setareOverview.heroImage,
                        alt: "Setare Aval interview session",
                        sx: {
                          width: "100%",
                          borderRadius: 24,
                          objectFit: "cover",
                          boxShadow: theme.palette.mode === "light" ? "0 30px 60px rgba(34, 84, 255, 0.18)" : "0 30px 60px rgba(0,0,0,0.45)"
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
                  spacing: 1,
                  component: "nav",
                  "aria-label": "Case study sections",
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
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider, {}, undefined, false, undefined, this),
                    setareSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button, {
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
                  children: setareSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionCard_default, {
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
var CaseStudySetarePage_default = CaseStudySetarePage;
export {
  CaseStudySetarePage_default as default
};

//# debugId=5183ED51F92F9CFB64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgQXJyb3dCYWNrUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvU2VjdGlvbkNhcmRcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuaW1wb3J0IHsgc2V0YXJlT3ZlcnZpZXcsIHNldGFyZVNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcblxuY29uc3QgQ2FzZVN0dWR5U2V0YXJlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNiksIHJnYmEoMTQ1LDE2NywyNTUsMC4xNCkpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDEyLDE4LDMyLDAuODUpLCByZ2JhKDI4LDQ4LDkwLDAuNjgpKVwiLFxuICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig0OHB4KVwiLFxuICAgICAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgPEdob3N0QnV0dG9uIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89XCIvXCIgc3RhcnRJY29uPXs8QXJyb3dCYWNrUm91bmRlZEljb24gLz59PlxuICAgICAgICAgICAgICBCYWNrIHRvIGhvbWVcbiAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogOCB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDYXNlIHN0dWR5IMK3IFJldGVudGlvbiAmIEdyb3d0aFxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCI+e3NldGFyZU92ZXJ2aWV3LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN1YnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2V0YXJlT3ZlcnZpZXcuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5tZXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN0YXRzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5zdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2V0YXJlT3ZlcnZpZXcuc3RhdHMhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX0ga2V5PXtzdGF0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICBzcmM9e3NldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlNldGFyZSBBdmFsIGludGVydmlldyBzZXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMzBweCA2MHB4IHJnYmEoMzQsIDg0LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDMwcHggNjBweCByZ2JhKDAsMCwwLDAuNDUpXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEyIH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogMTAgfX0+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IG1kOiBcInN0aWNreVwiIH0sXG4gICAgICAgICAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIE91dGxpbmVcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7c2V0YXJlU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge3NldGFyZVNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhc2VTdHVkeVNlY3Rpb25DYXJkIGtleT17c2VjdGlvbi5pZH0gc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQg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QVc7QUFBQSxrQkFDWCxJQUFJO0FBQUEsb0JBQ0YsVUFBVSxFQUFFLElBQUksU0FBUztBQUFBLG9CQUN6QixLQUFLLEVBQUUsSUFBSSxJQUFJO0FBQUEsb0JBQ2YsY0FBYztBQUFBLG9CQUNkLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLHlCQUNBO0FBQUEsb0JBQ04sSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUk7QUFBQSxvQkFDckIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUk7QUFBQSxvQkFDckIsUUFBUSxhQUNOLE1BQU0sUUFBUSxTQUFTLFVBQ25CLHlCQUNBO0FBQUEsa0JBRVI7QUFBQSxrQkFuQkYsVUE0Q0U7QUFBQSxvQ0F2QkEsdUJBRUUsb0JBRkY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVcsT0FBTTtBQUFBLHNCQUFyQztBQUFBLHdEQUVFO0FBQUEsb0NBQ0YsdUJBQUMsU0FBRCxxQ0FBUztBQUFBLG9CQUNSLGVBQWUsSUFBSSxDQUFDLDRCQUNuQix1QkFnQkUsUUFoQkY7QUFBQSxzQkFFRSxXQUFVO0FBQUEsc0JBQ1YsTUFBTSxJQUFJLFFBQVE7QUFBQSxzQkFDbEIsU0FBUTtBQUFBLHNCQUNSLE1BQUs7QUFBQSxzQkFDTCxJQUFJO0FBQUEsd0JBQ0YsZ0JBQWdCO0FBQUEsd0JBQ2hCLFlBQVk7QUFBQSx3QkFDWixPQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLE1BQU0sUUFBUSxNQUFNLFlBQ3BCO0FBQUEsc0JBQ1I7QUFBQSxzQkFiRixVQWVHLFFBQVE7QUFBQSx1QkFkSixRQUFRLElBRGYsc0JBZ0JFLENBQ0g7QUFBQTtBQUFBLG1CQTNDSCxnQ0E0Q0U7QUFBQSxpQkE3Q0osaUNBOENFO0FBQUEsOEJBQ0YsdUJBTUUsY0FORjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUlFLGVBSkY7QUFBQSxrQkFBTyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUEvQixVQUNHLGVBQWUsSUFBSSxDQUFDLDRCQUNuQix1QkFBQyxxQkFBRDtBQUFBLG9CQUF1QztBQUFBLHFCQUFaLFFBQVEsSUFBbkMsc0JBQXlELENBQzFEO0FBQUEsbUJBSEgsaUNBSUU7QUFBQSxpQkFMSixpQ0FNRTtBQUFBO0FBQUEsYUF0REosZ0NBdURFO0FBQUEsV0F4REosaUNBeURFO0FBQUEsU0ExREosaUNBMkRFO0FBQUE7QUFBQSxLQTlLSixnQ0ErS0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICI1MTgzRUQ1MUY5MkY5Q0ZCNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
