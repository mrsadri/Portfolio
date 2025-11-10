import {
  ArrowBackRounded_default,
  SectionCard_default,
  divarOverview,
  divarSections
} from "./chunk-dgw5ep2h.js";
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
                        divarOverview.subtitle && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "body1",
                          color: "text.secondary",
                          sx: { lineHeight: 1.7 },
                          children: divarOverview.subtitle
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
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 5, md: 8 },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 3 },
                sx: {
                  position: { md: "sticky" },
                  top: { md: 120 },
                  alignSelf: "flex-start"
                },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                  component: "nav",
                  "aria-label": "Case study sections",
                  sx: {
                    borderRadius: `${theme.tokens.radius.surface}px`,
                    backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.05)" : "rgba(34,84,255,0.18)",
                    px: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
                    py: { xs: theme.tokens.spacing.sm, md: theme.tokens.spacing.md },
                    border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.32)"}`,
                    backdropFilter: "blur(12px)"
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                    spacing: 0.5,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                        variant: "overline",
                        color: "text.secondary",
                        children: "Outline"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider_default, {}, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                        spacing: 0.5,
                        children: divarSections.map((section) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
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
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 9 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: { xs: theme.tokens.spacing.lg, md: theme.tokens.spacing.xl },
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

//# debugId=0945C8D27CEB7DC864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBBcnJvd0JhY2tSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIGRpdmFyU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTIgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDkwLDIwMCwyNTAsMC4xMikpXCJcbiAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTIsMTgsMzIsMC45MiksIHJnYmEoMjIsMzYsNjgsMC43MikpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcueGwgfX0+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgc3g9e3sgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCYWNrIHRvIGhvbWVcbiAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogOCB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FzZSBzdHVkeSDCtyBUcnVzdCAmIFNhZmV0eVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57ZGl2YXJPdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5zdWJ0aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5tZXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2V9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcuc20sIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIG10OiAwLjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3RhdHMubWFwKChzdGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDQgfX0ga2V5PXtzdGF0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2V9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIkRpdmFyIHNlY3VyZSBjYWxsIGxpc3RpbmdzXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2V9cHhgLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnRva2Vucy5zaGFkb3cubGV2ZWwxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA1LCBtZDogOCB9fT5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IG1kOiBcInN0aWNreVwiIH0sXG4gICAgICAgICAgICAgICAgdG9wOiB7IG1kOiAxMjAgfSxcbiAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNSlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5zbSwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kIH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEycHgpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBPdXRsaW5lXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgIHtkaXZhclNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH19PlxuICAgICAgICAgICAgICAgIHtkaXZhclNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhc2VTdHVkeVNlY3Rpb25DYXJkIGtleT17c2VjdGlvbi5pZH0gc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlEaXZhclBhZ2U7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0scUJBQXFCLE1BQU07QUFBQSxFQUMvQixNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFO0FBQUEsY0F5S0U7QUFBQSxzQkF4S0EsdUJBaUdFLGFBakdGO0FBQUEsUUFDRSxXQUFVO0FBQUEsUUFDVixJQUFJO0FBQUEsVUFDRixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLFVBQ3BCLFlBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIseUVBQ0E7QUFBQSxRQUNSO0FBQUEsUUFSRiwwQkFVRSx1QkFzRkUsbUJBdEZGO0FBQUEsb0NBQ0UsdUJBb0ZFLGVBcEZGO0FBQUEsWUFBTyxTQUFTLEVBQUUsSUFBSSxNQUFNLE9BQU8sUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLFFBQVEsR0FBRztBQUFBLFlBQTNFLFVBb0ZFO0FBQUEsOEJBbkZBLHVCQU9FLHFCQVBGO0FBQUEsZ0JBQ0UsV0FBVztBQUFBLGdCQUNYLElBQUc7QUFBQSxnQkFDSCwyQkFBVyx1QkFBQywwQkFBRCxxQ0FBc0I7QUFBQSxnQkFDakMsSUFBSSxFQUFFLFdBQVcsYUFBYTtBQUFBLGdCQUpoQztBQUFBLGtEQU9FO0FBQUEsOEJBRUYsdUJBeUVFLGNBekVGO0FBQUEsZ0JBQU0sV0FBUztBQUFBLGdCQUFDLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsZ0JBQUcsWUFBVztBQUFBLGdCQUF0RCxVQXlFRTtBQUFBLGtDQXhFQSx1QkEyREUsY0EzREY7QUFBQSxvQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLG9CQUE1QiwwQkFDRSx1QkF5REUsZUF6REY7QUFBQSxzQkFBTyxTQUFTLEVBQUUsSUFBSSxNQUFNLE9BQU8sUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLFFBQVEs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QUFjLEdBQUcsTUFBTSxPQUFPLE9BQU87QUFBQSxvQkFDckMsaUJBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIseUJBQ0E7QUFBQSxvQkFDTixJQUFJLEVBQUUsSUFBSSxNQUFNLE9BQU8sUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLFFBQVEsR0FBRztBQUFBLG9CQUMvRCxJQUFJLEVBQUUsSUFBSSxNQUFNLE9BQU8sUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLFFBQVEsR0FBRztBQUFBLG9CQUMvRCxRQUFRLGFBQ04sTUFBTSxRQUFRLFNBQVMsVUFDbkIseUJBQ0E7QUFBQSxvQkFFTixnQkFBZ0I7QUFBQSxrQkFDbEI7QUFBQSxrQkFqQkYsMEJBbUJFLHVCQTBCRSxlQTFCRjtBQUFBLG9CQUFPLFNBQVM7QUFBQSxvQkFBaEIsVUEwQkU7QUFBQSxzQ0F6QkEsdUJBRUUsb0JBRkY7QUFBQSx3QkFBWSxTQUFRO0FBQUEsd0JBQVcsT0FBTTtBQUFBLHdCQUFyQztBQUFBLDBEQUVFO0FBQUEsc0NBQ0YsdUJBQUMsaUJBQUQscUNBQVM7QUFBQSxzQ0FDVCx1QkFvQkUsZUFwQkY7QUFBQSx3QkFBTyxTQUFTO0FBQUEsd0JBQWhCLFVBQ0csY0FBYyxJQUFJLENBQUMsNEJBQ2xCLHVCQWdCRSxnQkFoQkY7QUFBQSwwQkFFRSxXQUFVO0FBQUEsMEJBQ1YsTUFBTSxJQUFJLFFBQVE7QUFBQSwwQkFDbEIsU0FBUTtBQUFBLDBCQUNSLE1BQUs7QUFBQSwwQkFDTCxJQUFJO0FBQUEsNEJBQ0YsZ0JBQWdCO0FBQUEsNEJBQ2hCLFlBQVk7QUFBQSw0QkFDWixPQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLE1BQU0sUUFBUSxNQUFNLFlBQ3BCO0FBQUEsMEJBQ1I7QUFBQSwwQkFiRixVQWVHLFFBQVE7QUFBQSwyQkFkSixRQUFRLElBRGYsc0JBZ0JFLENBQ0g7QUFBQSx5QkFuQkgsaUNBb0JFO0FBQUE7QUFBQSxxQkF6QkosZ0NBMEJFO0FBQUEsbUJBN0NKLGlDQThDRTtBQUFBLGlCQXRESixpQ0F1REU7QUFBQSw4QkFDRix1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBSUUsZUFKRjtBQUFBLGtCQUFPLFNBQVMsRUFBRSxJQUFJLE1BQU0sT0FBTyxRQUFRLElBQUksSUFBSSxNQUFNLE9BQU8sUUFBUSxHQUFHO0FBQUEsa0JBQTNFLFVBQ0csY0FBYyxJQUFJLENBQUMsNEJBQ2xCLHVCQUFDLHFCQUFEO0FBQUEsb0JBQXVDO0FBQUEscUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxtQkFISCxpQ0FJRTtBQUFBLGlCQUxKLGlDQU1FO0FBQUE7QUFBQSxhQS9ESixnQ0FnRUU7QUFBQSxXQWpFSixpQ0FrRUU7QUFBQSxTQW5FSixpQ0FvRUU7QUFBQTtBQUFBLEtBeEtKLGdDQXlLRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjA5NDVDOEQyN0NFQjdEQzg2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
