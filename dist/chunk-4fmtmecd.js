import {
  ArrowBackRounded_default,
  SectionCard_default,
  divarOverview,
  divarSections
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

// src/routes/case-studies/CaseStudyDivarPage.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyDivarPage = () => {
  const theme = useTheme();
  const [activeSectionId, setActiveSectionId] = import_react.useState(divarSections[0]?.id ?? "");
  import_react.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && divarSections.some((section) => section.id === hash)) {
      setActiveSectionId(hash);
    }
  }, [divarSections]);
  import_react.useEffect(() => {
    const sectionElements = divarSections.map((section) => document.getElementById(section.id)).filter((element) => Boolean(element));
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
  }, [divarSections]);
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
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                  sx: {
                    borderRadius: theme.tokens.radius.lg,
                    backgroundColor: theme.palette.mode === "light" ? "rgba(249, 251, 255, 0.88)" : "rgba(13, 20, 36, 0.88)",
                    border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.32)"}`,
                    boxShadow: theme.palette.mode === "light" ? "0 26px 52px rgba(34, 84, 255, 0.14)" : "0 26px 52px rgba(0, 0, 0, 0.45)",
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
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          divarOverview.stats && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            spacing: 2,
                            flex: { md: 1 },
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "overline",
                                color: "text.secondary",
                                children: "Impact snapshot"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
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

//# debugId=9E7CB93CBE6E1A7964756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBBcnJvd0JhY2tSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB0eXBlIE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIGRpdmFyU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb25JZCwgc2V0QWN0aXZlU2VjdGlvbklkXSA9IHVzZVN0YXRlKGRpdmFyU2VjdGlvbnNbMF0/LmlkID8/IFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGlmIChoYXNoICYmIGRpdmFyU2VjdGlvbnMuc29tZSgoc2VjdGlvbikgPT4gc2VjdGlvbi5pZCA9PT0gaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtkaXZhclNlY3Rpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uRWxlbWVudHMgPSBkaXZhclNlY3Rpb25zXG4gICAgICAubWFwKChzZWN0aW9uKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uLmlkKSlcbiAgICAgIC5maWx0ZXIoKGVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxFbGVtZW50ID0+IEJvb2xlYW4oZWxlbWVudCkpO1xuXG4gICAgaWYgKHNlY3Rpb25FbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2libGVFbnRyaWVzID0gZW50cmllc1xuICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5pbnRlcnNlY3Rpb25SYXRpbyAtIGEuaW50ZXJzZWN0aW9uUmF0aW8pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VmlzaWJsZSA9IHZpc2libGVFbnRyaWVzWzBdO1xuICAgICAgICBpZiAoZmlyc3RWaXNpYmxlKSB7XG4gICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGZpcnN0VmlzaWJsZS50YXJnZXQuaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyByb290TWFyZ2luOiBcIi00NSUgMHB4IC00NSVcIiB9LFxuICAgICk7XG5cbiAgICBzZWN0aW9uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbZGl2YXJTZWN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgY29uc3QgbmV3VXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH0jJHt0YXJnZXRJZH1gO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xOCkpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuODgpLCByZ2JhKDM2LDY0LDEyMCwwLjcyKSlcIixcbiAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoNDhweClcIixcbiAgICAgICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgIDxHaG9zdEJ1dHRvbiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPVwiL1wiIHN0YXJ0SWNvbj17PEFycm93QmFja1JvdW5kZWRJY29uIC8+fT5cbiAgICAgICAgICAgICAgQmFjayB0byBob21lXG4gICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI0OSwgMjUxLCAyNTUsIDAuODgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTMsIDIwLCAzNiwgMC44OClcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCIwIDI2cHggNTJweCByZ2JhKDM0LCA4NCwgMjU1LCAwLjE0KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCIwIDI2cHggNTJweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMiB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgVHJ1c3QgJiBTYWZldHkgwrcgQ2FzZSBTdHVkeVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57ZGl2YXJPdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3LnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX0gc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAxLjI1LCBtZDogMS41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5zdGF0cyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEltcGFjdCBzbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGl2YXJPdmVydmlldy5zdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA0IH19IGtleT17c3RhdC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuOCksIHJnYmEoMzYsNjQsMTIwLDAuNikpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3RhdC52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEyIH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogMTAgfX0+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNhc2Ugc3R1ZHkgc2VjdGlvbnNcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IG1kOiBcInN0aWNreVwiIH0sXG4gICAgICAgICAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzNCw4NCwyNTUsMC4xNClcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMzIpXCJcbiAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBPdXRsaW5lXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge2RpdmFyU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVPdXRsaW5lQ2xpY2soZXZlbnQsIHNlY3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2FjdGl2ZVNlY3Rpb25JZCA9PT0gc2VjdGlvbi5pZCA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICBzeD17KG11aVRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGlzQWN0aXZlID8gNjAwIDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbXVpVGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtdWlUaGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtdWlUaGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbXVpVGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogbXVpVGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHg6IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbXVpVGhlbWUudG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVpVGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDkgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICB7ZGl2YXJTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBrZXk9e3NlY3Rpb24uaWR9IHNlY3Rpb249e3NlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5RGl2YXJQYWdlO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7QUFLQSxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUN2QixPQUFPLGlCQUFpQixzQkFBc0Isc0JBQVMsY0FBYyxJQUFJLE1BQU0sRUFBRTtBQUFBLEVBRWpGLHVCQUFVLE1BQU07QUFBQSxJQUNkLE1BQU0sT0FBTyxPQUFPLFNBQVMsS0FBSyxRQUFRLEtBQUssRUFBRTtBQUFBLElBQ2pELElBQUksUUFBUSxjQUFjLEtBQUssQ0FBQyxZQUFZLFFBQVEsT0FBTyxJQUFJLEdBQUc7QUFBQSxNQUNoRSxtQkFBbUIsSUFBSTtBQUFBLElBQ3pCO0FBQUEsS0FDQyxDQUFDLGFBQWEsQ0FBQztBQUFBLEVBRWxCLHVCQUFVLE1BQU07QUFBQSxJQUNkLE1BQU0sa0JBQWtCLGNBQ3JCLElBQUksQ0FBQyxZQUFZLFNBQVMsZUFBZSxRQUFRLEVBQUUsQ0FBQyxFQUNwRCxPQUFPLENBQUMsWUFBb0MsUUFBUSxPQUFPLENBQUM7QUFBQSxJQUUvRCxJQUFJLGdCQUFnQixXQUFXLEdBQUc7QUFBQSxNQUNoQztBQUFBLElBQ0Y7QUFBQSxJQUVBLE1BQU0sV0FBVyxJQUFJLHFCQUNuQixDQUFDLFlBQVk7QUFBQSxNQUNYLE1BQU0saUJBQWlCLFFBQ3BCLE9BQU8sQ0FBQyxVQUFVLE1BQU0sY0FBYyxFQUN0QyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCO0FBQUEsTUFFM0QsTUFBTSxlQUFlLGVBQWU7QUFBQSxNQUNwQyxJQUFJLGNBQWM7QUFBQSxRQUNoQixtQkFBbUIsYUFBYSxPQUFPLEVBQUU7QUFBQSxNQUMzQztBQUFB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QTtBQUFBLHNCQW5DSixVQXNDRyxRQUFRO0FBQUEsdUJBckNKLFFBQVEsSUFEZixzQkF1Q0UsQ0FDSDtBQUFBO0FBQUEsbUJBbEVILGdDQW1FRTtBQUFBLGlCQXBFSixpQ0FxRUU7QUFBQSw4QkFDRix1QkFNRSxjQU5GO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBSUUsZUFKRjtBQUFBLGtCQUFPLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsa0JBQS9CLFVBQ0csY0FBYyxJQUFJLENBQUMsNEJBQ2xCLHVCQUFDLHFCQUFEO0FBQUEsb0JBQXVDO0FBQUEscUJBQVosUUFBUSxJQUFuQyxzQkFBeUQsQ0FDMUQ7QUFBQSxtQkFISCxpQ0FJRTtBQUFBLGlCQUxKLGlDQU1FO0FBQUE7QUFBQSxhQTdFSixnQ0E4RUU7QUFBQSxXQS9FSixpQ0FnRkU7QUFBQSxTQWpGSixpQ0FrRkU7QUFBQTtBQUFBLEtBOU1KLGdDQStNRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjlFN0NCOTNDQkU2RTFBNzk2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
