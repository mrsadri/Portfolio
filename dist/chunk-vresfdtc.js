import {
  SectionCard_default,
  caseStudyEntries,
  divarOverview,
  divarSections
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
  const otherCaseStudies = caseStudyEntries.filter((entry) => entry.id !== "divar-secure-call");
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
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          py: { xs: 10, md: 14 },
          background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(241,245,255,0.8), rgba(224,233,255,0.94))" : "linear-gradient(135deg, rgba(13,20,33,0.9), rgba(21,31,52,0.92))"
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
                    children: "Keep exploring"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "h2",
                    children: "More ways I design for trust"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { maxWidth: 720, mx: { xs: "auto", md: 0 }, lineHeight: 1.65 },
                    children: "Dive into other collaborations or get to know the person behind the work. Pick another case study, peek inside my story, or reach out directly."
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
var CaseStudyDivarPage_default = CaseStudyDivarPage;
export {
  CaseStudyDivarPage_default as default
};

//# debugId=A0115ED8C4B5911D64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ29udGFpbmVyLCBEaXZpZGVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHR5cGUgTW91c2VFdmVudCBhcyBSZWFjdE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvU2VjdGlvbkNhcmRcIjtcbmltcG9ydCB7IGNhc2VTdHVkeUVudHJpZXMsIGRpdmFyT3ZlcnZpZXcsIGRpdmFyU2VjdGlvbnMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jYXNlU3R1ZGllc1wiO1xuXG5jb25zdCBDYXNlU3R1ZHlEaXZhclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb25JZCwgc2V0QWN0aXZlU2VjdGlvbklkXSA9IHVzZVN0YXRlKGRpdmFyU2VjdGlvbnNbMF0/LmlkID8/IFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGlmIChoYXNoICYmIGRpdmFyU2VjdGlvbnMuc29tZSgoc2VjdGlvbikgPT4gc2VjdGlvbi5pZCA9PT0gaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtkaXZhclNlY3Rpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uRWxlbWVudHMgPSBkaXZhclNlY3Rpb25zXG4gICAgICAubWFwKChzZWN0aW9uKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uLmlkKSlcbiAgICAgIC5maWx0ZXIoKGVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxFbGVtZW50ID0+IEJvb2xlYW4oZWxlbWVudCkpO1xuXG4gICAgaWYgKHNlY3Rpb25FbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2libGVFbnRyaWVzID0gZW50cmllc1xuICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5pbnRlcnNlY3Rpb25SYXRpbyAtIGEuaW50ZXJzZWN0aW9uUmF0aW8pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VmlzaWJsZSA9IHZpc2libGVFbnRyaWVzWzBdO1xuICAgICAgICBpZiAoZmlyc3RWaXNpYmxlKSB7XG4gICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGZpcnN0VmlzaWJsZS50YXJnZXQuaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyByb290TWFyZ2luOiBcIi00NSUgMHB4IC00NSVcIiB9LFxuICAgICk7XG5cbiAgICBzZWN0aW9uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbZGl2YXJTZWN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgY29uc3QgbmV3VXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH0jJHt0YXJnZXRJZH1gO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG90aGVyQ2FzZVN0dWRpZXMgPSBjYXNlU3R1ZHlFbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlkICE9PSBcImRpdmFyLXNlY3VyZS1jYWxsXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xOCkpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuODgpLCByZ2JhKDM2LDY0LDEyMCwwLjcyKSlcIixcbiAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoNDhweClcIixcbiAgICAgICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDksIDI1MSwgMjU1LCAwLjg4KVwiXG4gICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMywgMjAsIDM2LCAwLjg4KVwiLFxuICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwiMCAyNnB4IDUycHggcmdiYSgzNCwgODQsIDI1NSwgMC4xNClcIlxuICAgICAgICAgICAgICAgICAgOiBcIjAgMjZweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAyIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIFRydXN0ICYgU2FmZXR5IMK3IENhc2UgU3R1ZHlcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57ZGl2YXJPdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX0gc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3QgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICBJbXBhY3Qgc25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3RhdHMubWFwKChzdGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDQgfX0ga2V5PXtzdGF0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjgpLCByZ2JhKDM2LDY0LDEyMCwwLjYpKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDEwIH19PlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19PlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDYXNlIHN0dWR5IHNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyBtZDogXCJzdGlja3lcIiB9LFxuICAgICAgICAgICAgICAgICAgdG9wOiB7IG1kOiAxNDAgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtkaXZhclNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7c2VjdGlvbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3V0bGluZUNsaWNrKGV2ZW50LCBzZWN0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXthY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgc3g9eyhtdWlUaGVtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtdWlUaGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXVpVGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtdWlUaGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbXVpVGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IG11aVRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4OiAxLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG11aVRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI0KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge2RpdmFyU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDEsMjQ1LDI1NSwwLjgpLCByZ2JhKDIyNCwyMzMsMjU1LDAuOTQpKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLDIwLDMzLDAuOSksIHJnYmEoMjEsMzEsNTIsMC45MikpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiA0LCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0gfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBLZWVwIGV4cGxvcmluZ1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk1vcmUgd2F5cyBJIGRlc2lnbiBmb3IgdHJ1c3Q8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDcyMCwgbXg6IHsgeHM6IFwiYXV0b1wiLCBtZDogMCB9LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEaXZlIGludG8gb3RoZXIgY29sbGFib3JhdGlvbnMgb3IgZ2V0IHRvIGtub3cgdGhlIHBlcnNvbiBiZWhpbmQgdGhlIHdvcmsuIFBpY2tcbiAgICAgICAgICAgICAgICBhbm90aGVyIGNhc2Ugc3R1ZHksIHBlZWsgaW5zaWRlIG15IHN0b3J5LCBvciByZWFjaCBvdXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAge290aGVyQ2FzZVN0dWRpZXMubWFwKChzdHVkeSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3N0dWR5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgdG89e3N0dWR5LnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIHN4PXsobXVpVGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGdhcDogbXVpVGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBtdWlUaGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGAke211aVRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyfSwgdHJhbnNmb3JtIDE2MG1zIGVhc2VgLFxuICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuZm9jdXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdHVkeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3N0dWR5LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGNhc2Ugc3R1ZHkg4oaSXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBzbTogMyB9fVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz1cIi9teS1zdG9yeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBWaXNpdCBNeSBTdG9yeVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPVwiL2NvbnRhY3RcIiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBTdGFydCBhIGNvbnZlcnNhdGlvblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeURpdmFyUGFnZTtcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBSUEsSUFBTSxxQkFBcUIsTUFBTTtBQUFBLEVBQy9CLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFDdkIsT0FBTyxpQkFBaUIsc0JBQXNCLHNCQUFTLGNBQWMsSUFBSSxNQUFNLEVBQUU7QUFBQSxFQUVqRix1QkFBVSxNQUFNO0FBQUEsSUFDZCxNQUFNLE9BQU8sT0FBTyxTQUFTLEtBQUssUUFBUSxLQUFLLEVBQUU7QUFBQSxJQUNqRCxJQUFJLFFBQVEsY0FBYyxLQUFLLENBQUMsWUFBWSxRQUFRLE9BQU8sSUFBSSxHQUFHO0FBQUEsTUFDaEUsbUJBQW1CLElBQUk7QUFBQSxJQUN6QjtBQUFBLEtBQ0MsQ0FBQyxhQUFhLENBQUM7QUFBQSxFQUVsQix1QkFBVSxNQUFNO0FBQUEsSUFDZCxNQUFNLGtCQUFrQixjQUNyQixJQUFJLENBQUMsWUFBWSxTQUFTLGVBQWUsUUFBUSxF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O0FBQUEsc0JBQ3JCLFlBQVksR0FBRyxTQUFTLE9BQU8sV0FBVztBQUFBLHNCQUMxQyxXQUFXO0FBQUEsd0JBQ1QsV0FBVztBQUFBLHNCQUNiO0FBQUEsb0JBQ0Y7QUFBQSxvQkFoQkYsVUE4QkU7QUFBQSxzQ0FaQSx1QkFLRSxlQUxGO0FBQUEsd0JBQU8sU0FBUztBQUFBLHdCQUFoQixVQUtFO0FBQUEsMENBSkEsdUJBRUUsb0JBRkY7QUFBQSw0QkFBWSxTQUFRO0FBQUEsNEJBQU0sT0FBTTtBQUFBLDRCQUFoQyxVQUNHLE1BQU07QUFBQSw2QkFEVCxpQ0FFRTtBQUFBLDBDQUNGLHVCQUF3QyxvQkFBeEM7QUFBQSw0QkFBWSxTQUFRO0FBQUEsNEJBQXBCLFVBQTBCLE1BQU07QUFBQSw2QkFBaEMsaUNBQXdDO0FBQUE7QUFBQSx5QkFKMUMsZ0NBS0U7QUFBQSxzQ0FDRix1QkFFRSxvQkFGRjtBQUFBLHdCQUFZLFNBQVE7QUFBQSx3QkFBUSxPQUFNO0FBQUEsd0JBQWlCLElBQUksRUFBRSxZQUFZLElBQUk7QUFBQSx3QkFBekUsVUFDRyxNQUFNO0FBQUEseUJBRFQsaUNBRUU7QUFBQSxzQ0FDRix1QkFFRSxvQkFGRjtBQUFBLHdCQUFZLFNBQVE7QUFBQSx3QkFBUyxPQUFNO0FBQUEsd0JBQW5DO0FBQUEsMERBRUU7QUFBQTtBQUFBLHFCQTdCSixnQ0E4QkU7QUFBQSxtQkEvQmdDLE1BQU0sSUFBMUMsc0JBZ0NFLENBQ0g7QUFBQSxpQkFuQ0gsaUNBb0NFO0FBQUEsOEJBRUYsdUJBV0UsZUFYRjtBQUFBLGdCQUNFLFdBQVcsRUFBRSxJQUFJLFVBQVUsSUFBSSxNQUFNO0FBQUEsZ0JBQ3JDLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsZ0JBQ3hCLGdCQUFlO0FBQUEsZ0JBSGpCLFVBV0U7QUFBQSxrQ0FOQSx1QkFFRSxnQkFGRjtBQUFBLG9CQUFRLFdBQVc7QUFBQSxvQkFBWSxJQUFHO0FBQUEsb0JBQVksU0FBUTtBQUFBLG9CQUFZLE1BQUs7QUFBQSxvQkFBdkU7QUFBQSxzREFFRTtBQUFBLGtDQUNGLHVCQUVFLGdCQUZGO0FBQUEsb0JBQVEsV0FBVztBQUFBLG9CQUFZLElBQUc7QUFBQSxvQkFBVyxTQUFRO0FBQUEsb0JBQVcsTUFBSztBQUFBLG9CQUFyRTtBQUFBLHNEQUVFO0FBQUE7QUFBQSxpQkFWSixnQ0FXRTtBQUFBO0FBQUEsYUFqRUosZ0NBa0VFO0FBQUEsV0FuRUosaUNBb0VFO0FBQUEsU0E5RUosaUNBK0VFO0FBQUE7QUFBQSxLQXpSSixnQ0EwUkU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICJBMDExNUVEOEM0QjU5MTFENjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
