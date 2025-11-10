import {
  ArrowBackRounded_default,
  SectionCard_default,
  setareOverview,
  setareSections
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
                          setareOverview.stats && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                            container: true,
                            spacing: 2,
                            children: setareOverview.stats.map((stat) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                              size: { xs: 12, sm: setareOverview.stats.length > 1 ? 6 : 12 },
                              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                                elevation: 0,
                                sx: {
                                  borderRadius: "20px",
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
                          borderRadius: theme.tokens.radius.lg,
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
                    borderRadius: "20px",
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
                    setareSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
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

//# debugId=4FFACB7E6C10CF3564756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgQXJyb3dCYWNrUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIERpdmlkZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENhc2VTdHVkeVNlY3Rpb25DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Nhc2Utc3R1ZGllcy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IEdob3N0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0dob3N0QnV0dG9uXCI7XG5pbXBvcnQgeyBzZXRhcmVPdmVydmlldywgc2V0YXJlU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZXRhcmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICBpbnNldDogMCxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB7IHhzOiAyNCwgbWQ6IDMyIH0sXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA2KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE0KSlcIlxuICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTIsMTgsMzIsMC44NSksIHJnYmEoMjgsNDgsOTAsMC42OCkpXCIsXG4gICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDQ4cHgpXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b24gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz1cIi9cIiBzdGFydEljb249ezxBcnJvd0JhY2tSb3VuZGVkSWNvbiAvPn0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gaG9tZVxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiA4IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENhc2Ugc3R1ZHkgwrcgUmV0ZW50aW9uICYgR3Jvd3RoXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57c2V0YXJlT3ZlcnZpZXcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7c2V0YXJlT3ZlcnZpZXcuc3VidGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN0YXRzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5zdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2V0YXJlT3ZlcnZpZXcuc3RhdHMhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX0ga2V5PXtzdGF0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICBzcmM9e3NldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlNldGFyZSBBdmFsIGludGVydmlldyBzZXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAzMHB4IDYwcHggcmdiYSgzNCwgODQsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMzBweCA2MHB4IHJnYmEoMCwwLDAsMC40NSlcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDYXNlIHN0dWR5IHNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICAgICAgICAgIHRvcDogeyBtZDogMTQwIH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtzZXRhcmVTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICB7c2V0YXJlU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNldGFyZVBhZ2U7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sc0JBQXNCLE1BQU07QUFBQSxFQUNoQyxNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFO0FBQUEsY0ErS0U7QUFBQSxzQkE5S0EsdUJBZ0hFLGFBaEhGO0FBQUEsUUFBSyxXQUFVO0FBQUEsUUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUFBLFFBQXRELDBCQUNFLHVCQThHRSxtQkE5R0Y7QUFBQSxVQUFXLFVBQVM7QUFBQSxVQUFLLElBQUksRUFBRSxVQUFVLFdBQVc7QUFBQSxVQUFwRCxVQThHRTtBQUFBLDRCQTdHQSx1QkFBQyxhQUFEO0FBQUEsY0FDRSxJQUFJO0FBQUEsZ0JBQ0YsVUFBVTtBQUFBLGdCQUNWLE9BQU87QUFBQSxnQkFDUCxjQUFjLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRztBQUFBLGdCQUMvQixZQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDBFQUNBO0FBQUEsZ0JBQ04sUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsZUFYRixpQ0FZQTtBQUFBLDRCQUVBLHVCQThGRSxlQTlGRjtBQUFBLGNBQU8sU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxjQUEvQixVQThGRTtBQUFBLGdDQTdGQSx1QkFFRSxxQkFGRjtBQUFBLGtCQUFhLFdBQVc7QUFBQSxrQkFBWSxJQUFHO0FBQUEsa0JBQUksMkJBQVcsdUJBQUMsMEJBQUQscUNBQXNCO0FBQUEsa0JBQTVFO0FBQUEsb0RBRUU7QUFBQSxnQ0FFRix1QkF3RkUsY0F4RkY7QUFBQSxrQkFBTSxXQUFTO0FBQUEsa0JBQUMsU0FBUyxFQUFFLElBQUksR0FBRyxJ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TSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkE0Q0UsZUE1Q0Y7QUFBQSxrQkFDRSxTQUFTO0FBQUEsa0JBQ1QsV0FBVTtBQUFBLGtCQUNWLGNBQVc7QUFBQSxrQkFDWCxJQUFJO0FBQUEsb0JBQ0YsVUFBVSxFQUFFLElBQUksU0FBUztBQUFBLG9CQUN6QixLQUFLLEVBQUUsSUFBSSxJQUFJO0FBQUEsb0JBQ2YsY0FBYztBQUFBLG9CQUNkLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLHlCQUNBO0FBQUEsb0JBQ04sSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUk7QUFBQSxvQkFDckIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUk7QUFBQSxvQkFDckIsUUFBUSxhQUNOLE1BQU0sUUFBUSxTQUFTLFVBQ25CLHlCQUNBO0FBQUEsa0JBRVI7QUFBQSxrQkFuQkYsVUE0Q0U7QUFBQSxvQ0F2QkEsdUJBRUUsb0JBRkY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVcsT0FBTTtBQUFBLHNCQUFyQztBQUFBLHdEQUVFO0FBQUEsb0NBQ0YsdUJBQUMsaUJBQUQscUNBQVM7QUFBQSxvQkFDUixlQUFlLElBQUksQ0FBQyw0QkFDbkIsdUJBZ0JFLGdCQWhCRjtBQUFBLHNCQUVFLFdBQVU7QUFBQSxzQkFDVixNQUFNLElBQUksUUFBUTtBQUFBLHNCQUNsQixTQUFRO0FBQUEsc0JBQ1IsTUFBSztBQUFBLHNCQUNMLElBQUk7QUFBQSx3QkFDRixnQkFBZ0I7QUFBQSx3QkFDaEIsWUFBWTtBQUFBLHdCQUNaLE9BQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsTUFBTSxRQUFRLE1BQU0sWUFDcEI7QUFBQSxzQkFDUjtBQUFBLHNCQWJGLFVBZUcsUUFBUTtBQUFBLHVCQWRKLFFBQVEsSUFEZixzQkFnQkUsQ0FDSDtBQUFBO0FBQUEsbUJBM0NILGdDQTRDRTtBQUFBLGlCQTdDSixpQ0E4Q0U7QUFBQSw4QkFDRix1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBSUUsZUFKRjtBQUFBLGtCQUFPLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsa0JBQS9CLFVBQ0csZUFBZSxJQUFJLENBQUMsNEJBQ25CLHVCQUFDLHFCQUFEO0FBQUEsb0JBQXVDO0FBQUEscUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxtQkFISCxpQ0FJRTtBQUFBLGlCQUxKLGlDQU1FO0FBQUE7QUFBQSxhQXRESixnQ0F1REU7QUFBQSxXQXhESixpQ0F5REU7QUFBQSxTQTFESixpQ0EyREU7QUFBQTtBQUFBLEtBOUtKLGdDQStLRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjRGRkFDQjdFNkMxMENGMzU2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
