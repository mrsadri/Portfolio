import {
  SectionCard_default,
  caseStudyEntries,
  divarOverview,
  divarSections
} from "./chunk-dexbfxq5.js";
import"./chunk-3197h7cd.js";
import {
  Seo_default
} from "./chunk-2ny3xade.js";
import {
  Box_default,
  Button_default,
  Card_default,
  Container_default,
  Divider_default,
  Grid_default,
  Link,
  Stack_default,
  Typography_default,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useTheme
} from "./chunk-dkmh5se1.js";

// src/routes/case-studies/CaseStudyDivarPage.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyDivarPage = () => {
  const theme = useTheme();
  const [activeSectionId, setActiveSectionId] = import_react.useState(divarSections[0]?.id ?? "");
  const siteUrl = typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL || "https://mrsadri.github.io/Portfolio";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: divarOverview.title,
    description: divarOverview.subtitle,
    author: {
      "@type": "Person",
      name: "Masih Sadri",
      url: siteUrl
    },
    url: `${siteUrl}/case-studies/divar-secure-call`,
    image: divarOverview.heroImage,
    keyword: ["Trust & Safety", "Harassment Reduction", "Marketplace"]
  };
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
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        title: "Divar Secure Call Case Study — Reducing Harassment by 60%",
        description: divarOverview.subtitle,
        canonicalPath: "/case-studies/divar-secure-call",
        openGraph: {
          type: "article",
          image: {
            url: divarOverview.heroImage,
            alt: "Divar secure call listings interface"
          }
        },
        structuredData
      }, undefined, false, undefined, this),
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

//# debugId=150BDD55F081618064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JvdXRlcy9jYXNlLXN0dWRpZXMvQ2FzZVN0dWR5RGl2YXJQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL2Nhc2Utc3R1ZGllcy9DYXNlU3R1ZHlEaXZhclBhZ2UudHN4XG4vLyBQdXJwb3NlOiBEZXRhaWxzIHRoZSBEaXZhciBzZWN1cmUgY2FsbCBjYXNlIHN0dWR5IHdpdGggc3RydWN0dXJlZCBzZWN0aW9ucywgbWV0cmljcywgYW5kIG5hcnJhdGl2ZS5cbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ29udGFpbmVyLCBEaXZpZGVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHR5cGUgTW91c2VFdmVudCBhcyBSZWFjdE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkXCI7XG5pbXBvcnQgeyBjYXNlU3R1ZHlFbnRyaWVzLCBkaXZhck92ZXJ2aWV3LCBkaXZhclNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcblxuY29uc3QgQ2FzZVN0dWR5RGl2YXJQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uSWQsIHNldEFjdGl2ZVNlY3Rpb25JZF0gPSB1c2VTdGF0ZShkaXZhclNlY3Rpb25zWzBdPy5pZCA/PyBcIlwiKTtcblxuICBjb25zdCBzaXRlVXJsID1cbiAgICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgICBcImh0dHBzOi8vbXJzYWRyaS5naXRodWIuaW8vUG9ydGZvbGlvXCI7XG5cbiAgY29uc3Qgc3RydWN0dXJlZERhdGEgPSB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgICBuYW1lOiBkaXZhck92ZXJ2aWV3LnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkaXZhck92ZXJ2aWV3LnN1YnRpdGxlLFxuICAgIGF1dGhvcjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgIH0sXG4gICAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxgLFxuICAgIGltYWdlOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZSxcbiAgICBrZXl3b3JkOiBbXCJUcnVzdCAmIFNhZmV0eVwiLCBcIkhhcmFzc21lbnQgUmVkdWN0aW9uXCIsIFwiTWFya2V0cGxhY2VcIl0sXG4gIH0gYXMgY29uc3Q7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgZGl2YXJTZWN0aW9ucy5zb21lKChzZWN0aW9uKSA9PiBzZWN0aW9uLmlkID09PSBoYXNoKSkge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGhhc2gpO1xuICAgIH1cbiAgfSwgW2RpdmFyU2VjdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50cyA9IGRpdmFyU2VjdGlvbnNcbiAgICAgIC5tYXAoKHNlY3Rpb24pID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24uaWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtkaXZhclNlY3Rpb25zXSk7XG5cbiAgY29uc3QgaGFuZGxlT3V0bGluZUNsaWNrID0gKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZCh0YXJnZXRJZCk7XG4gICAgICBjb25zdCBuZXdVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSMke3RhcmdldElkfWA7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgbmV3VXJsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3RoZXJDYXNlU3R1ZGllcyA9IGNhc2VTdHVkeUVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaWQgIT09IFwiZGl2YXItc2VjdXJlLWNhbGxcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlb1xuICAgICAgICB0aXRsZT1cIkRpdmFyIFNlY3VyZSBDYWxsIENhc2UgU3R1ZHkg4oCUIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCJcbiAgICAgICAgZGVzY3JpcHRpb249e2RpdmFyT3ZlcnZpZXcuc3VidGl0bGV9XG4gICAgICAgIGNhbm9uaWNhbFBhdGg9XCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHVybDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2UsXG4gICAgICAgICAgICBhbHQ6IFwiRGl2YXIgc2VjdXJlIGNhbGwgbGlzdGluZ3MgaW50ZXJmYWNlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3RydWN0dXJlZERhdGE9e3N0cnVjdHVyZWREYXRhfVxuICAgICAgLz5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0gfX0+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xOCkpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuODgpLCByZ2JhKDM2LDY0LDEyMCwwLjcyKSlcIixcbiAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoNDhweClcIixcbiAgICAgICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDksIDI1MSwgMjU1LCAwLjg4KVwiXG4gICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMywgMjAsIDM2LCAwLjg4KVwiLFxuICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwiMCAyNnB4IDUycHggcmdiYSgzNCwgODQsIDI1NSwgMC4xNClcIlxuICAgICAgICAgICAgICAgICAgOiBcIjAgMjZweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAyIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIFRydXN0ICYgU2FmZXR5IMK3IENhc2UgU3R1ZHlcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57ZGl2YXJPdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX0gc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3QgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICAgIHtkaXZhck92ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICBJbXBhY3Qgc25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAge2RpdmFyT3ZlcnZpZXcuc3RhdHMubWFwKChzdGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDQgfX0ga2V5PXtzdGF0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjgpLCByZ2JhKDM2LDY0LDEyMCwwLjYpKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDEwIH19PlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19PlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDYXNlIHN0dWR5IHNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyBtZDogXCJzdGlja3lcIiB9LFxuICAgICAgICAgICAgICAgICAgdG9wOiB7IG1kOiAxNDAgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtkaXZhclNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7c2VjdGlvbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3V0bGluZUNsaWNrKGV2ZW50LCBzZWN0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXthY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgc3g9eyhtdWlUaGVtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtdWlUaGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbXVpVGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtdWlUaGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbXVpVGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IG11aVRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4OiAxLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG11aVRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11aVRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI0KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA5IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgICAge2RpdmFyU2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FzZVN0dWR5U2VjdGlvbkNhcmQga2V5PXtzZWN0aW9uLmlkfSBzZWN0aW9uPXtzZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDEsMjQ1LDI1NSwwLjgpLCByZ2JhKDIyNCwyMzMsMjU1LDAuOTQpKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLDIwLDMzLDAuOSksIHJnYmEoMjEsMzEsNTIsMC45MikpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiA0LCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0gfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBLZWVwIGV4cGxvcmluZ1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk1vcmUgd2F5cyBJIGRlc2lnbiBmb3IgdHJ1c3Q8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDcyMCwgbXg6IHsgeHM6IFwiYXV0b1wiLCBtZDogMCB9LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEaXZlIGludG8gb3RoZXIgY29sbGFib3JhdGlvbnMgb3IgZ2V0IHRvIGtub3cgdGhlIHBlcnNvbiBiZWhpbmQgdGhlIHdvcmsuIFBpY2tcbiAgICAgICAgICAgICAgICBhbm90aGVyIGNhc2Ugc3R1ZHksIHBlZWsgaW5zaWRlIG15IHN0b3J5LCBvciByZWFjaCBvdXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAge290aGVyQ2FzZVN0dWRpZXMubWFwKChzdHVkeSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3N0dWR5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgdG89e3N0dWR5LnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIHN4PXsobXVpVGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGdhcDogbXVpVGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBtdWlUaGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGAke211aVRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyfSwgdHJhbnNmb3JtIDE2MG1zIGVhc2VgLFxuICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuZm9jdXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdHVkeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3N0dWR5LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGNhc2Ugc3R1ZHkg4oaSXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBzbTogMyB9fVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz1cIi9teS1zdG9yeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBWaXNpdCBNeSBTdG9yeVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPVwiL2NvbnRhY3RcIiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBTdGFydCBhIGNvbnZlcnNhdGlvblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeURpdmFyUGFnZTtcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUtBLElBQU0scUJBQXFCLE1BQU07QUFBQSxFQUMvQixNQUFNLFFBQVEsU0FBUztBQUFBLEVBQ3ZCLE9BQU8saUJBQWlCLHNCQUFzQixzQkFBUyxjQUFjLElBQUksTUFBTSxFQUFFO0FBQUEsRUFFakYsTUFBTSxVQUNILE9BQU8sZ0JBQWdCLGVBQWUsWUFBWSxLQUFLLGlCQUN4RDtBQUFBLEVBRUYs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
