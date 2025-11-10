import {
  ArrowBackRounded_default,
  SectionCard_default,
  setareOverview,
  setareSections
} from "./chunk-7n309k53.js";
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
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudySetarePage_default = CaseStudySetarePage;
export {
  CaseStudySetarePage_default as default
};

//# debugId=0103E5F31288A19064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5U2V0YXJlUGFnZS50c3hcbi8vIFB1cnBvc2U6IFByZXNlbnRzIHRoZSBTZXRhcmUgQXZhbCBlbmdhZ2VtZW50IGNhc2Ugc3R1ZHkgY292ZXJpbmcgc3RyYXRlZ3ksIGluc2lnaHRzLCBhbmQgb3V0Y29tZXMuXG5pbXBvcnQgQXJyb3dCYWNrUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIERpdmlkZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhc2VTdHVkeVNlY3Rpb25DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Nhc2Utc3R1ZGllcy9TZWN0aW9uQ2FyZFwiO1xuaW1wb3J0IEdob3N0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0dob3N0QnV0dG9uXCI7XG5pbXBvcnQgeyBzZXRhcmVPdmVydmlldywgc2V0YXJlU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZXRhcmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uSWQsIHNldEFjdGl2ZVNlY3Rpb25JZF0gPSB1c2VTdGF0ZShzZXRhcmVTZWN0aW9uc1swXT8uaWQgPz8gXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgc2V0YXJlU2VjdGlvbnMuc29tZSgoc2VjdGlvbikgPT4gc2VjdGlvbi5pZCA9PT0gaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtzZXRhcmVTZWN0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnRzID0gc2V0YXJlU2VjdGlvbnNcbiAgICAgIC5tYXAoKHNlY3Rpb24pID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24uaWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtzZXRhcmVTZWN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgY29uc3QgbmV3VXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH0jJHt0YXJnZXRJZH1gO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNiksIHJnYmEoMTQ1LDE2NywyNTUsMC4xNCkpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDEyLDE4LDMyLDAuODUpLCByZ2JhKDI4LDQ4LDkwLDAuNjgpKVwiLFxuICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig0OHB4KVwiLFxuICAgICAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgPEdob3N0QnV0dG9uIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89XCIvXCIgc3RhcnRJY29uPXs8QXJyb3dCYWNrUm91bmRlZEljb24gLz59PlxuICAgICAgICAgICAgICBCYWNrIHRvIGhvbWVcbiAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjUwLCAyNTIsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyLCAxOCwgMzIsIDAuOSlcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCIwIDI2cHggNTJweCByZ2JhKDM0LCA4NCwgMjU1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCIwIDI2cHggNTJweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMiB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FzZSBzdHVkeSDCtyBSZXRlbnRpb24gJiBHcm93dGhcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCI+e3NldGFyZU92ZXJ2aWV3LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHtzZXRhcmVPdmVydmlldy5zdWJ0aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7c2V0YXJlT3ZlcnZpZXcuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAxLjI1LCBtZDogMS41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICB7c2V0YXJlT3ZlcnZpZXcuc3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBHcm93dGggb3V0Y29tZXNcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3NldGFyZU92ZXJ2aWV3LnN0YXRzLm1hcCgoc3RhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3sgeHM6IDEyLCBzbTogc2V0YXJlT3ZlcnZpZXcuc3RhdHMhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDEwIH19PlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19PlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNhc2Ugc3R1ZHkgc2VjdGlvbnNcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyBtZDogXCJzdGlja3lcIiB9LFxuICAgICAgICAgICAgICAgICAgdG9wOiB7IG1kOiAxNDAgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzNCw4NCwyNTUsMC4xNClcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMzIpXCJcbiAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBPdXRsaW5lXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge3NldGFyZVNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7c2VjdGlvbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3V0bGluZUNsaWNrKGV2ZW50LCBzZWN0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXthY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgc3g9eyhtdWlUaGVtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtdWlUaGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXVpVGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtdWlUaGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbXVpVGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IG11aVRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4OiAxLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG11aVRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI0KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge3NldGFyZVNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhc2VTdHVkeVNlY3Rpb25DYXJkIGtleT17c2VjdGlvbi5pZH0gc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZXRhcmVQYWdlO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7QUFLQSxJQUFNLHNCQUFzQixNQUFNO0FBQUEsRUFDaEMsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUN2QixPQUFPLGlCQUFpQixzQkFBc0Isc0JBQVMsZUFBZSxJQUFJLE1BQU0sRUFBRTtB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LG9CQUZGO0FBQUEsc0JBQVksU0FBUTtBQUFBLHNCQUFXLE9BQU07QUFBQSxzQkFBckM7QUFBQSx3REFFRTtBQUFBLG9DQUNGLHVCQUFDLGlCQUFELHFDQUFTO0FBQUEsb0JBQ1IsZUFBZSxJQUFJLENBQUMsNEJBQ25CLHVCQXVDRSxnQkF2Q0Y7QUFBQSxzQkFFRSxXQUFVO0FBQUEsc0JBQ1YsTUFBTSxJQUFJLFFBQVE7QUFBQSxzQkFDbEIsU0FBUTtBQUFBLHNCQUNSLE1BQUs7QUFBQSxzQkFDTCxTQUFTLENBQUMsVUFBVSxtQkFBbUIsT0FBTyxRQUFRLEVBQUU7QUFBQSxzQkFDeEQsZ0JBQWMsb0JBQW9CLFFBQVEsS0FBSyxTQUFTO0FBQUEsc0JBQ3hELElBQUksQ0FBQyxhQUFhO0FBQUEsd0JBQ2hCLE1BQU0sV0FBVyxvQkFBb0IsUUFBUTtBQUFBLHdCQUM3QyxPQUFPO0FBQUEsMEJBQ0wsZ0JBQWdCO0FBQUEsMEJBQ2hCLFlBQVksV0FBVyxNQUFNO0FBQUEsMEJBQzdCLE9BQU8sV0FDSCxTQUFTLFFBQVEsU0FBUyxVQUN4QixTQUFTLFFBQVEsUUFBUSxPQUN6QixTQUFTLFFBQVEsTUFBTSxZQUN6QixTQUFTLFFBQVEsU0FBUyxVQUN4QixTQUFTLFFBQVEsTUFBTSxZQUN2QjtBQUFBLDBCQUNOLGlCQUFpQixXQUNiLFNBQVMsUUFBUSxTQUFTLFVBQ3hCLHlCQUNBLDBCQUNGO0FBQUEsMEJBQ0osY0FBYyxTQUFTLE9BQU8sT0FBTztBQUFBLDBCQUNyQyxJQUFJO0FBQUEsMEJBQ0osSUFBSTtBQUFBLDBCQUNKLFlBQVksU0FBUyxPQUFPLFdBQVc7QUFBQSwwQkFDdkMsV0FBVztBQUFBLDRCQUNULGlCQUNFLFNBQVMsUUFBUSxTQUFTLFVBQ3RCLHlCQUNBO0FBQUEsMEJBQ1I7QUFBQSx3QkFDRjtBQUFBO0FBQUEsc0JBbkNKLFVBc0NHLFFBQVE7QUFBQSx1QkFyQ0osUUFBUSxJQURmLHNCQXVDRSxDQUNIO0FBQUE7QUFBQSxtQkFsRUgsZ0NBbUVFO0FBQUEsaUJBcEVKLGlDQXFFRTtBQUFBLDhCQUNGLHVCQU1FLGNBTkY7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkFJRSxlQUpGO0FBQUEsa0JBQU8sU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxrQkFBL0IsVUFDRyxlQUFlLElBQUksQ0FBQyw0QkFDbkIsdUJBQUMscUJBQUQ7QUFBQSxvQkFBdUM7QUFBQSxxQkFBWixRQUFRLElBQW5DLHNCQUF5RCxDQUMxRDtBQUFBLG1CQUhILGlDQUlFO0FBQUEsaUJBTEosaUNBTUU7QUFBQTtBQUFBLGFBN0VKLGdDQThFRTtBQUFBLFdBL0VKLGlDQWdGRTtBQUFBLFNBakZKLGlDQWtGRTtBQUFBO0FBQUEsS0E1TkosZ0NBNk5FO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMDEwM0U1RjMxMjg4QTE5MDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
