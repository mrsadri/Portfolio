import {
  ArrowBackRounded_default,
  SectionCard_default,
  divarOverview,
  divarSections
} from "./chunk-gxbby23f.js";
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
                          children: "Case study · Trust & Safety"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "hero",
                          children: divarOverview.title
                        }, undefined, false, undefined, this),
                        divarOverview.summary && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                          component: "ul",
                          spacing: 1.25,
                          sx: { pl: 2, mb: 0 },
                          children: divarOverview.summary.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            component: "li",
                            variant: "body1",
                            color: "text.secondary",
                            sx: { lineHeight: 1.7 },
                            children: item
                          }, item.slice(0, 32), false, undefined, this))
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                          direction: "row",
                          spacing: 1.5,
                          flexWrap: "wrap",
                          useFlexGap: true,
                          children: divarOverview.meta.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
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
                        }, undefined, false, undefined, this),
                        divarOverview.stats && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                          container: true,
                          spacing: 2,
                          children: divarOverview.stats.map((stat) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                            size: { xs: 12, sm: 4 },
                            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                              variant: "outlined",
                              sx: {
                                height: "100%",
                                borderRadius: `${theme.tokens.radius.surface}px`,
                                boxShadow: "none",
                                px: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
                                py: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg }
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
                        borderRadius: `${theme.tokens.radius.surface}px`,
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
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                  component: "nav",
                  "aria-label": "Case study sections",
                  sx: {
                    position: "sticky",
                    top: { xs: 72, md: 96 },
                    zIndex: 1,
                    borderRadius: `${theme.tokens.radius.surface}px`,
                    backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.05)" : "rgba(34,84,255,0.18)",
                    px: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
                    py: { xs: theme.tokens.spacing.sm, md: theme.tokens.spacing.md },
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.32)"}`
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                    direction: "row",
                    spacing: 1,
                    flexWrap: "wrap",
                    useFlexGap: true,
                    children: divarSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                      component: "a",
                      href: `#${section.id}`,
                      variant: "text",
                      size: "small",
                      sx: {
                        fontWeight: 500,
                        color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
                      },
                      children: section.title
                    }, section.id, false, undefined, this))
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider_default, {}, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: { xs: theme.tokens.spacing.lg, md: theme.tokens.spacing.xl },
              children: divarSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionCard_default, {
                section
              }, section.id, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudyDivarPage_default = CaseStudyDivarPage;
export {
  CaseStudyDivarPage_default as default
};

//# debugId=C876E87C6CE7BEC364756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBBcnJvd0JhY2tSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIGRpdmFyU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTIgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDkwLDIwMCwyNTAsMC4xMikpXCJcbiAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTIsMTgsMzIsMC45MiksIHJnYmEoMjIsMzYsNjgsMC43MikpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcueGwgfX0+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgc3g9e3sgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCYWNrIHRvIGhvbWVcbiAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogOCB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FzZSBzdHVkeSDCtyBUcnVzdCAmIFNhZmV0eVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57ZGl2YXJPdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5zdW1tYXJ5ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MS4yNX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN1bW1hcnkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5zbGljZSgwLCAzMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcubWV0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnNtLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN0YXRzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN0YXRzLm1hcCgoc3RhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA0IH19IGtleT17c3RhdC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3RhdC52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZGl2YXJPdmVydmlldy5oZXJvSW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJEaXZhciBzZWN1cmUgY2FsbCBsaXN0aW5nc1wiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiB0aGVtZS50b2tlbnMuc2hhZG93LmxldmVsMSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9fT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNhc2Ugc3R1ZHkgc2VjdGlvbnNcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0aWNreVwiLFxuICAgICAgICAgICAgICAgIHRvcDogeyB4czogNzIsIG1kOiA5NiB9LFxuICAgICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDUpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTgpXCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcuc20sIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCB9LFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICB7ZGl2YXJTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH19PlxuICAgICAgICAgICAge2RpdmFyU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5RGl2YXJQYWdlO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsTUFBTSxR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RSxNQUFNLFFBQVEsU0FBUyxVQUNuQix5QkFDQTtBQUFBLG9CQUNOLElBQUksRUFBRSxJQUFJLE1BQU0sT0FBTyxRQUFRLElBQUksSUFBSSxNQUFNLE9BQU8sUUFBUSxHQUFHO0FBQUEsb0JBQy9ELElBQUksRUFBRSxJQUFJLE1BQU0sT0FBTyxRQUFRLElBQUksSUFBSSxNQUFNLE9BQU8sUUFBUSxHQUFHO0FBQUEsb0JBQy9ELGdCQUFnQjtBQUFBLG9CQUNoQixRQUFRLGFBQ04sTUFBTSxRQUFRLFNBQVMsVUFDbkIseUJBQ0E7QUFBQSxrQkFFUjtBQUFBLGtCQXBCRiwwQkFzQkUsdUJBbUJFLGVBbkJGO0FBQUEsb0JBQU8sV0FBVTtBQUFBLG9CQUFNLFNBQVM7QUFBQSxvQkFBRyxVQUFTO0FBQUEsb0JBQU8sWUFBVTtBQUFBLG9CQUE3RCxVQUNHLGNBQWMsSUFBSSxDQUFDLDRCQUNsQix1QkFlRSxnQkFmRjtBQUFBLHNCQUVFLFdBQVU7QUFBQSxzQkFDVixNQUFNLElBQUksUUFBUTtBQUFBLHNCQUNsQixTQUFRO0FBQUEsc0JBQ1IsTUFBSztBQUFBLHNCQUNMLElBQUk7QUFBQSx3QkFDRixZQUFZO0FBQUEsd0JBQ1osT0FDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQixNQUFNLFFBQVEsTUFBTSxZQUNwQjtBQUFBLHNCQUNSO0FBQUEsc0JBWkYsVUFjRyxRQUFRO0FBQUEsdUJBYkosUUFBUSxJQURmLHNCQWVFLENBQ0g7QUFBQSxxQkFsQkgsaUNBbUJFO0FBQUEsbUJBekNKLGlDQTBDRTtBQUFBLGdDQUNGLHVCQUFDLGlCQUFELHFDQUFTO0FBQUE7QUFBQSxlQTVDWCxnQ0E2Q0U7QUFBQSw0QkFDRix1QkFJRSxlQUpGO0FBQUEsY0FBTyxTQUFTLEVBQUUsSUFBSSxNQUFNLE9BQU8sUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLFFBQVEsR0FBRztBQUFBLGNBQTNFLFVBQ0csY0FBYyxJQUFJLENBQUMsNEJBQ2xCLHVCQUFDLHFCQUFEO0FBQUEsZ0JBQXVDO0FBQUEsaUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxlQUhILGlDQUlFO0FBQUE7QUFBQSxXQW5ESixnQ0FvREU7QUFBQSxTQXJESixpQ0FzREU7QUFBQTtBQUFBLEtBcEtKLGdDQXFLRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIkM4NzZFODdDNkNFN0JFQzM2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
