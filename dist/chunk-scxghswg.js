import {
  SectionCard_default,
  caseStudyEntries,
  setareOverview,
  setareSections
} from "./chunk-4vftth5w.js";
import"./chunk-60y8jd63.js";
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
  require_react,
  useTheme
} from "./chunk-kr6hc1f9.js";

// src/routes/case-studies/CaseStudySetarePage.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySetarePage = () => {
  const theme = useTheme();
  const [activeSectionId, setActiveSectionId] = import_react.useState(setareSections[0]?.id ?? "");
  import_react.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && setareSections.some((section) => section.id === hash)) {
      setActiveSectionId(hash);
    }
  }, [setareSections]);
  import_react.useEffect(() => {
    const sectionElements = setareSections.map((section) => document.getElementById(section.id)).filter((element) => Boolean(element));
    if (sectionElements.length === 0) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const firstVisible = visibleEntries[0];
      if (firstVisible) {
        setActiveSectionId(firstVisible.target.id);
      }
    }, { rootMargin: "-45% 0px -45%" });
    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [setareSections]);
  const handleOutlineClick = (event, targetId) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSectionId(targetId);
      const newUrl = `${window.location.pathname}${window.location.search}#${targetId}`;
      window.history.replaceState(null, "", newUrl);
    }
  };
  const otherCaseStudies = caseStudyEntries.filter((entry) => entry.id !== "setare-aval-engagement");
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
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
              sx: {
                borderRadius: theme.tokens.radius.lg,
                backgroundColor: theme.palette.mode === "light" ? "rgba(250, 252, 255, 0.9)" : "rgba(12, 18, 32, 0.9)",
                border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.14)" : "rgba(98,132,218,0.32)"}`,
                boxShadow: theme.palette.mode === "light" ? "0 26px 52px rgba(34, 84, 255, 0.12)" : "0 26px 52px rgba(0, 0, 0, 0.45)",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 }
              },
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                spacing: { xs: 3, md: 4 },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                    spacing: { xs: 1.5, md: 2 },
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
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider_default, {}, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                    direction: { xs: "column", md: "row" },
                    spacing: { xs: 3, md: 4 },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                        spacing: 2,
                        flex: { md: 1 },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "overline",
                            color: "text.secondary",
                            children: "Project details"
                          }, undefined, false, undefined, this),
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
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      setareOverview.stats && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                        spacing: 2,
                        flex: { md: 1 },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "overline",
                            color: "text.secondary",
                            children: "Growth outcomes"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                            container: true,
                            spacing: 2,
                            children: setareOverview.stats.map((stat) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                              size: { xs: 12, sm: setareOverview.stats.length > 1 ? 6 : 12 },
                              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                                elevation: 0,
                                sx: {
                                  borderRadius: theme.tokens.radius.card,
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
                                    }, undefined, false, undefined, this),
                                    stat.description && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      sx: { lineHeight: 1.55 },
                                      children: stat.description
                                    }, undefined, false, undefined, this)
                                  ]
                                }, undefined, true, undefined, this)
                              }, undefined, false, undefined, this)
                            }, stat.label, false, undefined, this))
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
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
                      onClick: (event) => handleOutlineClick(event, section.id),
                      "aria-current": activeSectionId === section.id ? "true" : undefined,
                      sx: (muiTheme) => {
                        const isActive = activeSectionId === section.id;
                        return {
                          justifyContent: "flex-start",
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? muiTheme.palette.mode === "light" ? muiTheme.palette.primary.main : muiTheme.palette.brand.secondary : muiTheme.palette.mode === "light" ? muiTheme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
                          backgroundColor: isActive ? muiTheme.palette.mode === "light" ? "rgba(34,84,255,0.12)" : "rgba(98,132,218,0.28)" : "transparent",
                          borderRadius: muiTheme.tokens.radius.surface,
                          px: 1.5,
                          py: 1,
                          transition: muiTheme.tokens.transition.hover,
                          "&:hover": {
                            backgroundColor: muiTheme.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.24)"
                          }
                        };
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
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          py: { xs: 10, md: 14 },
          background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(243,247,255,0.82), rgba(226,236,255,0.94))" : "linear-gradient(135deg, rgba(12,18,30,0.9), rgba(19,28,44,0.92))"
        },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          maxWidth: "lg",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: { xs: 4, md: 6 },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                spacing: 1.5,
                sx: { textAlign: { xs: "center", md: "left" } },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "eyebrow",
                    color: "brand.secondary",
                    children: "Continue the journey"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "h2",
                    children: "See more ways I design for growth"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { maxWidth: 720, mx: { xs: "auto", md: 0 }, lineHeight: 1.65 },
                    children: "Explore additional product challenges or learn more about how I collaborate. Choose another case study, read my story, or drop me a line."
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                container: true,
                spacing: { xs: 3, md: 4 },
                children: otherCaseStudies.map((study) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                  size: { xs: 12, md: 6 },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
                    component: Link,
                    to: study.path,
                    sx: (muiTheme) => ({
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: muiTheme.spacing(2),
                      textDecoration: "none",
                      borderRadius: muiTheme.tokens.radius.card,
                      px: { xs: 2.5, md: 3 },
                      py: { xs: 2.5, md: 3 },
                      transition: `${muiTheme.tokens.transition.hover}, transform 160ms ease`,
                      "&:hover": {
                        transform: "translateY(-4px)"
                      }
                    }),
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                        spacing: 1,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "tag",
                            color: "brand.secondary",
                            children: study.focus
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "h4",
                            children: study.title
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                        variant: "body1",
                        color: "text.secondary",
                        sx: { lineHeight: 1.6 },
                        children: study.excerpt
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                        variant: "button",
                        color: "primary",
                        children: "Read the case study →"
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                }, study.id, false, undefined, this))
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                direction: { xs: "column", sm: "row" },
                spacing: { xs: 2, sm: 3 },
                justifyContent: "center",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                    component: Link,
                    to: "/my-story",
                    variant: "contained",
                    size: "large",
                    children: "Visit My Story"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                    component: Link,
                    to: "/contact",
                    variant: "outlined",
                    size: "large",
                    children: "Start a conversation"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
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

//# debugId=A3C4CD53746B855C64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB0eXBlIE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgeyBjYXNlU3R1ZHlFbnRyaWVzLCBzZXRhcmVPdmVydmlldywgc2V0YXJlU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZXRhcmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uSWQsIHNldEFjdGl2ZVNlY3Rpb25JZF0gPSB1c2VTdGF0ZShzZXRhcmVTZWN0aW9uc1swXT8uaWQgPz8gXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgc2V0YXJlU2VjdGlvbnMuc29tZSgoc2VjdGlvbikgPT4gc2VjdGlvbi5pZCA9PT0gaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtzZXRhcmVTZWN0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnRzID0gc2V0YXJlU2VjdGlvbnNcbiAgICAgIC5tYXAoKHNlY3Rpb24pID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24uaWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtzZXRhcmVTZWN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgY29uc3QgbmV3VXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH0jJHt0YXJnZXRJZH1gO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG90aGVyQ2FzZVN0dWRpZXMgPSBjYXNlU3R1ZHlFbnRyaWVzLmZpbHRlcihcbiAgICAoZW50cnkpID0+IGVudHJ5LmlkICE9PSBcInNldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogMTAsIG1kOiAxNCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgIGluc2V0OiAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHsgeHM6IDI0LCBtZDogMzIgfSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDYpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTQpKVwiXG4gICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxMiwxOCwzMiwwLjg1KSwgcmdiYSgyOCw0OCw5MCwwLjY4KSlcIixcbiAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoNDhweClcIixcbiAgICAgICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTAsIDI1MiwgMjU1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyLCAxOCwgMzIsIDAuOSlcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiXG4gICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMzIpXCJcbiAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcIjAgMjZweCA1MnB4IHJnYmEoMzQsIDg0LCAyNTUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgIDogXCIwIDI2cHggNTJweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCIsXG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgICBweTogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMiB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBDYXNlIHN0dWR5IMK3IFJldGVudGlvbiAmIEdyb3d0aFxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiPntzZXRhcmVPdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN1YnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fT5cbiAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN0YXRzICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3Jvd3RoIG91dGNvbWVzXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5zdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3sgeHM6IDEyLCBzbTogc2V0YXJlT3ZlcnZpZXcuc3RhdHMhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxLjU1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTIgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiAxMCB9fT5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDYXNlIHN0dWR5IHNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICAgICAgICAgIHRvcDogeyBtZDogMTQwIH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtzZXRhcmVTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZU91dGxpbmVDbGljayhldmVudCwgc2VjdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD17YWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHN4PXsobXVpVGhlbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVNlY3Rpb25JZCA9PT0gc2VjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogaXNBY3RpdmUgPyA2MDAgOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtdWlUaGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbXVpVGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG11aVRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbXVpVGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtdWlUaGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBtdWlUaGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBweDogMS41LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBtdWlUaGVtZS50b2tlbnMudHJhbnNpdGlvbi5ob3ZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWlUaGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yNClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogOSB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICAgIHtzZXRhcmVTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0MywyNDcsMjU1LDAuODIpLCByZ2JhKDIyNiwyMzYsMjU1LDAuOTQpKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyLDE4LDMwLDAuOSksIHJnYmEoMTksMjgsNDQsMC45MikpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiA0LCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0gfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBDb250aW51ZSB0aGUgam91cm5leVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPlNlZSBtb3JlIHdheXMgSSBkZXNpZ24gZm9yIGdyb3d0aDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBzeD17eyBtYXhXaWR0aDogNzIwLCBteDogeyB4czogXCJhdXRvXCIsIG1kOiAwIH0sIGxpbmVIZWlnaHQ6IDEuNjUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEV4cGxvcmUgYWRkaXRpb25hbCBwcm9kdWN0IGNoYWxsZW5nZXMgb3IgbGVhcm4gbW9yZSBhYm91dCBob3cgSSBjb2xsYWJvcmF0ZS4gQ2hvb3NlXG4gICAgICAgICAgICAgICAgYW5vdGhlciBjYXNlIHN0dWR5LCByZWFkIG15IHN0b3J5LCBvciBkcm9wIG1lIGEgbGluZS5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICB7b3RoZXJDYXNlU3R1ZGllcy5tYXAoKHN0dWR5KSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17c3R1ZHkuaWR9PlxuICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICB0bz17c3R1ZHkucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3g9eyhtdWlUaGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ2FwOiBtdWlUaGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IG11aVRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYCR7bXVpVGhlbWUudG9rZW5zLnRyYW5zaXRpb24uaG92ZXJ9LCB0cmFuc2Zvcm0gMTYwbXMgZWFzZWAsXG4gICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGFnXCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHVkeS5mb2N1c31cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0dWR5LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuZXhjZXJwdH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVhZCB0aGUgY2FzZSBzdHVkeSDihpJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIHNtOiAzIH19XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPVwiL215LXN0b3J5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIFZpc2l0IE15IFN0b3J5XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89XCIvY29udGFjdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIFN0YXJ0IGEgY29udmVyc2F0aW9uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5U2V0YXJlUGFnZTtcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBSUEsSUFBTSxzQkFBc0IsTUFBTTtBQUFBLEVBQ2hDLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFDdkIsT0FBTyxpQkFBaUIsc0JBQXNCLHNCQUFTLGVBQWUsSUFBSSxNQUFNLEVBQUU7QUFBQSxFQUVsRix1QkFBVSxNQUFNO0FBQUEsSUFDZCxNQUFNLE9BQU8sT0FBTyxTQUFTLEtBQUssUUFBUSxLQUFLLEVBQUU7QUFBQSxJQUNqRCxJQUFJLFFBQVEsZUFBZSxLQUFLLENBQUMsWUFBWSxRQUFRLE9BQU8sSUFBSSxHQUFHO0FBQUEsTUFDakUsbUJBQW1CLElBQUk7QUFBQSxJQUN6QjtBQUFBLEtBQ0MsQ0FBQyxjQUFjLENBQUM7QUFBQSxFQUVuQix1QkFBVSxNQUFNO0FBQUEsSUFDZCxNQUFNLGtCQUFrQixlQUNyQixJQUFJLENBQUMsWUFBWSxTQUFTLGVBQWUsUUFBUSxFQUFFLENBQUMsRUFDcEQsT0FBTyxDQUFDLFlBQW9DLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFFL0QsSUFBSSxnQkFBZ0IsV0FBVyxHQUFHO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsSUFFQSxNQUFNLFdBQVcsSUFBSSxxQkFDbkIsQ0FBQyxZQUFZO0FBQUEsTUFDWCxNQUFNLGlCQUFpQixRQUNwQixPQUFPLENBQUMsVUFBVSxNQUFNLGNBQWMsRUFDdEMsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQjtBQUFBLE1BRTNELE1BQU0sZUFBZSxlQUFlO0FBQUEsTUFDcEMsSUFBSSxjQUFjO0FB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QVpBLHVCQUtFLGVBTEY7QUFBQSx3QkFBTyxTQUFTO0FBQUEsd0JBQWhCLFVBS0U7QUFBQSwwQ0FKQSx1QkFFRSxvQkFGRjtBQUFBLDRCQUFZLFNBQVE7QUFBQSw0QkFBTSxPQUFNO0FBQUEsNEJBQWhDLFVBQ0csTUFBTTtBQUFBLDZCQURULGlDQUVFO0FBQUEsMENBQ0YsdUJBQXdDLG9CQUF4QztBQUFBLDRCQUFZLFNBQVE7QUFBQSw0QkFBcEIsVUFBMEIsTUFBTTtBQUFBLDZCQUFoQyxpQ0FBd0M7QUFBQTtBQUFBLHlCQUoxQyxnQ0FLRTtBQUFBLHNDQUNGLHVCQUVFLG9CQUZGO0FBQUEsd0JBQVksU0FBUTtBQUFBLHdCQUFRLE9BQU07QUFBQSx3QkFBaUIsSUFBSSxFQUFFLFlBQVksSUFBSTtBQUFBLHdCQUF6RSxVQUNHLE1BQU07QUFBQSx5QkFEVCxpQ0FFRTtBQUFBLHNDQUNGLHVCQUVFLG9CQUZGO0FBQUEsd0JBQVksU0FBUTtBQUFBLHdCQUFTLE9BQU07QUFBQSx3QkFBbkM7QUFBQSwwREFFRTtBQUFBO0FBQUEscUJBN0JKLGdDQThCRTtBQUFBLG1CQS9CZ0MsTUFBTSxJQUExQyxzQkFnQ0UsQ0FDSDtBQUFBLGlCQW5DSCxpQ0FvQ0U7QUFBQSw4QkFFRix1QkFXRSxlQVhGO0FBQUEsZ0JBQ0UsV0FBVyxFQUFFLElBQUksVUFBVSxJQUFJLE1BQU07QUFBQSxnQkFDckMsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxnQkFDeEIsZ0JBQWU7QUFBQSxnQkFIakIsVUFXRTtBQUFBLGtDQU5BLHVCQUVFLGdCQUZGO0FBQUEsb0JBQVEsV0FBVztBQUFBLG9CQUFZLElBQUc7QUFBQSxvQkFBWSxTQUFRO0FBQUEsb0JBQVksTUFBSztBQUFBLG9CQUF2RTtBQUFBLHNEQUVFO0FBQUEsa0NBQ0YsdUJBRUUsZ0JBRkY7QUFBQSxvQkFBUSxXQUFXO0FBQUEsb0JBQVksSUFBRztBQUFBLG9CQUFXLFNBQVE7QUFBQSxvQkFBVyxNQUFLO0FBQUEsb0JBQXJFO0FBQUEsc0RBRUU7QUFBQTtBQUFBLGlCQVZKLGdDQVdFO0FBQUE7QUFBQSxhQWpFSixnQ0FrRUU7QUFBQSxXQW5FSixpQ0FvRUU7QUFBQSxTQTlFSixpQ0ErRUU7QUFBQTtBQUFBLEtBdlNKLGdDQXdTRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIkEzQzRDRDUzNzQ2Qjg1NUM2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
