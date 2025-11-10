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

//# debugId=850509D1EFE5BE3A64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgQXJyb3dCYWNrUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIERpdmlkZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENhc2VTdHVkeVNlY3Rpb25DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Nhc2Utc3R1ZGllcy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IEdob3N0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0dob3N0QnV0dG9uXCI7XG5pbXBvcnQgeyBzZXRhcmVPdmVydmlldywgc2V0YXJlU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZXRhcmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICBpbnNldDogMCxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB7IHhzOiAyNCwgbWQ6IDMyIH0sXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA2KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE0KSlcIlxuICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTIsMTgsMzIsMC44NSksIHJnYmEoMjgsNDgsOTAsMC42OCkpXCIsXG4gICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDQ4cHgpXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b24gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz1cIi9cIiBzdGFydEljb249ezxBcnJvd0JhY2tSb3VuZGVkSWNvbiAvPn0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gaG9tZVxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiA4IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENhc2Ugc3R1ZHkgwrcgUmV0ZW50aW9uICYgR3Jvd3RoXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57c2V0YXJlT3ZlcnZpZXcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7c2V0YXJlT3ZlcnZpZXcuc3VidGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMS4yNSwgbWQ6IDEuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIG10OiAwLjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICB7c2V0YXJlT3ZlcnZpZXcuc3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN0YXRzLm1hcCgoc3RhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiBzZXRhcmVPdmVydmlldy5zdGF0cyEubGVuZ3RoID4gMSA/IDYgOiAxMiB9fSBrZXk9e3N0YXQubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3RhdC52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiU2V0YXJlIEF2YWwgaW50ZXJ2aWV3IHNlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI0LFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAzMHB4IDYwcHggcmdiYSgzNCwgODQsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMzBweCA2MHB4IHJnYmEoMCwwLDAsMC40NSlcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDYXNlIHN0dWR5IHNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICAgICAgICAgIHRvcDogeyBtZDogMTQwIH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtzZXRhcmVTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICB7c2V0YXJlU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAg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LFdBQVU7QUFBQSxrQkFDVixjQUFXO0FBQUEsa0JBQ1gsSUFBSTtBQUFBLG9CQUNGLFVBQVUsRUFBRSxJQUFJLFNBQVM7QUFBQSxvQkFDekIsS0FBSyxFQUFFLElBQUksSUFBSTtBQUFBLG9CQUNmLGNBQWM7QUFBQSxvQkFDZCxpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQix5QkFDQTtBQUFBLG9CQUNOLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJO0FBQUEsb0JBQ3JCLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJO0FBQUEsb0JBQ3JCLFFBQVEsYUFDTixNQUFNLFFBQVEsU0FBUyxVQUNuQix5QkFDQTtBQUFBLGtCQUVSO0FBQUEsa0JBbkJGLFVBNENFO0FBQUEsb0NBdkJBLHVCQUVFLG9CQUZGO0FBQUEsc0JBQVksU0FBUTtBQUFBLHNCQUFXLE9BQU07QUFBQSxzQkFBckM7QUFBQSx3REFFRTtBQUFBLG9DQUNGLHVCQUFDLGlCQUFELHFDQUFTO0FBQUEsb0JBQ1IsZUFBZSxJQUFJLENBQUMsNEJBQ25CLHVCQWdCRSxnQkFoQkY7QUFBQSxzQkFFRSxXQUFVO0FBQUEsc0JBQ1YsTUFBTSxJQUFJLFFBQVE7QUFBQSxzQkFDbEIsU0FBUTtBQUFBLHNCQUNSLE1BQUs7QUFBQSxzQkFDTCxJQUFJO0FBQUEsd0JBQ0YsZ0JBQWdCO0FBQUEsd0JBQ2hCLFlBQVk7QUFBQSx3QkFDWixPQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLE1BQU0sUUFBUSxNQUFNLFlBQ3BCO0FBQUEsc0JBQ1I7QUFBQSxzQkFiRixVQWVHLFFBQVE7QUFBQSx1QkFkSixRQUFRLElBRGYsc0JBZ0JFLENBQ0g7QUFBQTtBQUFBLG1CQTNDSCxnQ0E0Q0U7QUFBQSxpQkE3Q0osaUNBOENFO0FBQUEsOEJBQ0YsdUJBTUUsY0FORjtBQUFBLGdCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsZ0JBQTVCLDBCQUNFLHVCQUlFLGVBSkY7QUFBQSxrQkFBTyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUEvQixVQUNHLGVBQWUsSUFBSSxDQUFDLDRCQUNuQix1QkFBQyxxQkFBRDtBQUFBLG9CQUF1QztBQUFBLHFCQUFaLFFBQVEsSUFBbkMsc0JBQXlELENBQzFEO0FBQUEsbUJBSEgsaUNBSUU7QUFBQSxpQkFMSixpQ0FNRTtBQUFBO0FBQUEsYUF0REosZ0NBdURFO0FBQUEsV0F4REosaUNBeURFO0FBQUEsU0ExREosaUNBMkRFO0FBQUE7QUFBQSxLQTlLSixnQ0ErS0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICI4NTA1MDlEMUVGRTVCRTNBNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
