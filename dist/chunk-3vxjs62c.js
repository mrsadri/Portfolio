import {
  Pill_default
} from "./chunk-tdhdn874.js";
import {
  Box_default,
  Button_default,
  Card_default,
  Container_default,
  Divider_default,
  Grid_default,
  Grid_default1 as Grid_default2,
  Link,
  Stack_default,
  Typography_default,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useTheme
} from "./chunk-yty9pdhr.js";

// src/features/case-studies/components/SectionCard.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySectionCardComponent = ({ section }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
    component: "section",
    id: section.id,
    spacing: { xs: 2.5, md: 3 },
    sx: { maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } },
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        spacing: 1,
        children: [
          section.eyebrow && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "eyebrow",
            color: "brand.secondary",
            children: section.eyebrow
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "h3",
            children: section.title
          }, undefined, false, undefined, this),
          section.summary && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { lineHeight: 1.65 },
            children: section.summary
          }, undefined, false, undefined, this),
          section.body?.map((paragraph) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { lineHeight: 1.7 },
            children: paragraph
          }, paragraph.slice(0, 32), false, undefined, this))
        ]
      }, undefined, true, undefined, this),
      section.bullets && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        component: "ul",
        spacing: 1,
        sx: { pl: 2, mb: 0 },
        children: section.bullets.map((point) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
          component: "li",
          variant: "body1",
          color: "text.secondary",
          children: point
        }, point, false, undefined, this))
      }, undefined, false, undefined, this),
      section.highlights && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        direction: "row",
        spacing: 1,
        flexWrap: "wrap",
        useFlexGap: true,
        children: section.highlights.map((highlight) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
          label: highlight,
          size: "small",
          sx: {
            backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.08)" : "rgba(98,132,218,0.16)",
            color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
          }
        }, highlight, false, undefined, this))
      }, undefined, false, undefined, this),
      section.metrics && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default2, {
        container: true,
        spacing: 2,
        children: section.metrics.map((metric) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default2, {
          size: { xs: 12, sm: section.metrics.length > 1 ? 6 : 12 },
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
            elevation: 0,
            sx: {
              borderRadius: "18px",
              px: { xs: 2.5, md: 3 },
              py: { xs: 2, md: 2.5 },
              border: `1px solid ${theme.tokens.colors.border}`,
              backgroundColor: theme.palette.mode === "light" ? "rgba(249,251,255,0.9)" : "rgba(14, 22, 38, 0.85)"
            },
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: 0.5,
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "h4",
                  children: metric.value
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "subtitle2",
                  sx: { fontWeight: 600 },
                  children: metric.label
                }, undefined, false, undefined, this),
                metric.description && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: { lineHeight: 1.6 },
                  children: metric.description
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, metric.label, false, undefined, this))
      }, undefined, false, undefined, this),
      section.quotes && section.quotes.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        spacing: 2,
        children: section.quotes.map((quote) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
          sx: {
            borderRadius: "18px",
            px: { xs: 2.5, md: 3 },
            py: { xs: 2, md: 2.5 },
            backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.06)" : "rgba(34,84,255,0.16)"
          },
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "body1",
                sx: { fontStyle: "italic", lineHeight: 1.7 },
                children: [
                  "“",
                  quote.text,
                  "”"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "caption",
                color: "text.secondary",
                children: [
                  quote.author,
                  " — ",
                  quote.role
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, `${quote.author}-${quote.text.slice(0, 24)}`, false, undefined, this))
      }, undefined, false, undefined, this),
      section.image && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "img",
        src: section.image.src,
        alt: section.image.alt,
        loading: "lazy",
        sx: {
          width: "100%",
          borderRadius: (theme2) => theme2.tokens.radius.lg,
          boxShadow: theme.palette.mode === "light" ? "0 18px 28px rgba(34,84,255,0.18)" : "0 24px 40px rgba(0,0,0,0.45)"
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider_default, {
        sx: { mt: { xs: 3, md: 4 } }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudySectionCard = import_react.memo(CaseStudySectionCardComponent, (prev, next) => prev.section === next.section);
var SectionCard_default = CaseStudySectionCard;

// src/shared/utils/sx.ts
var append = (target, value) => {
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => append(target, item));
    return;
  }
  target.push(value);
};
var mergeSx = (base, ...overrides) => {
  const entries = [];
  append(entries, base);
  overrides.forEach((value) => append(entries, value));
  if (entries.length === 0) {
    return {};
  }
  if (entries.length === 1) {
    return entries[0];
  }
  return entries;
};

// src/features/case-studies/components/CaseStudyOutlineNav.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyOutlineNav = ({
  sections,
  activeSectionId,
  onNavigate,
  outlineLabel = "Outline",
  containerSx
}) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
  component: "nav",
  "aria-label": "Case study sections",
  spacing: 1,
  sx: mergeSx((theme) => ({
    position: { md: "sticky" },
    top: { md: 140 },
    borderRadius: theme.tokens.radius.surface,
    backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.04)" : "rgba(34,84,255,0.14)",
    px: { xs: 2, md: 2.5 },
    py: { xs: 2, md: 2.5 },
    border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.18)" : "rgba(98,132,218,0.32)"}`
  }), containerSx),
  children: [
    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
      variant: "overline",
      color: "text.secondary",
      children: outlineLabel
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Divider_default, {}, undefined, false, undefined, this),
    sections.map((section) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Button_default, {
      component: "a",
      href: `#${section.id}`,
      variant: "text",
      size: "small",
      onClick: (event) => onNavigate(event, section.id),
      "aria-current": activeSectionId === section.id ? "true" : undefined,
      sx: (theme) => {
        const isActive = activeSectionId === section.id;
        return {
          justifyContent: "flex-start",
          fontWeight: isActive ? 600 : 500,
          color: isActive ? theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.brand.secondary : theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
          backgroundColor: isActive ? theme.palette.mode === "light" ? "rgba(34,84,255,0.12)" : "rgba(98,132,218,0.28)" : "transparent",
          borderRadius: theme.tokens.radius.surface,
          px: 1.5,
          py: 1,
          transition: theme.tokens.transition.hover,
          "&:hover": {
            backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.24)"
          }
        };
      },
      children: section.title
    }, section.id, false, undefined, this))
  ]
}, undefined, true, undefined, this);
var CaseStudyOutlineNav_default = CaseStudyOutlineNav;

// src/features/case-studies/components/CaseStudyOverviewSection.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var defaultHeroBackdropSx = (theme) => ({
  position: "absolute",
  inset: 0,
  borderRadius: { xs: 24, md: 32 },
  background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.18))" : "linear-gradient(140deg, rgba(16,28,56,0.88), rgba(36,64,120,0.72))",
  filter: "blur(48px)",
  zIndex: -1
});
var defaultHeroSurfaceSx = (theme) => ({
  borderRadius: theme.tokens.radius.lg,
  backgroundColor: theme.palette.mode === "light" ? "rgba(249, 251, 255, 0.88)" : "rgba(13, 20, 36, 0.88)",
  border: `1px solid ${theme.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.32)"}`,
  boxShadow: theme.palette.mode === "light" ? "0 26px 52px rgba(34, 84, 255, 0.14)" : "0 26px 52px rgba(0, 0, 0, 0.45)",
  px: { xs: 3, md: 4 },
  py: { xs: 3, md: 4 }
});
var defaultStatsCardSx = (theme) => ({
  borderRadius: theme.tokens.radius.card,
  background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(34,84,255,0.08), rgba(145,167,255,0.12))" : "linear-gradient(140deg, rgba(16,28,56,0.8), rgba(36,64,120,0.6))",
  px: { xs: 2.5, md: 3 },
  py: { xs: 2, md: 2.5 },
  border: "none"
});
var outlinedStatsCardSx = (theme) => ({
  borderRadius: theme.tokens.radius.card,
  px: { xs: 2.5, md: 3 },
  py: { xs: 2, md: 2.5 },
  border: `1px solid ${theme.tokens.colors.border}`,
  backgroundColor: theme.palette.mode === "light" ? "rgba(249,251,255,0.92)" : "rgba(14, 22, 38, 0.85)"
});
var CaseStudyOverviewSection = ({
  eyebrow,
  overview,
  subtitleFallback,
  metaTitle = "Project details",
  statsTitle,
  statsVariant = "gradient",
  heroBackdropSx,
  heroSurfaceSx,
  statsCardSx
}) => {
  const theme = useTheme();
  const stats = overview.stats;
  const resolvedStatsCardSx = statsVariant === "gradient" ? defaultStatsCardSx : outlinedStatsCardSx;
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 10, md: 14 } },
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
      maxWidth: "lg",
      sx: { position: "relative" },
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
          sx: mergeSx(defaultHeroBackdropSx, heroBackdropSx)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
          sx: mergeSx(defaultHeroSurfaceSx, heroSurfaceSx),
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
            spacing: { xs: 3, md: 4 },
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                spacing: { xs: 1.5, md: 2 },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                    variant: "eyebrow",
                    color: "brand.secondary",
                    children: eyebrow
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                    variant: "hero",
                    children: overview.title
                  }, undefined, false, undefined, this),
                  (overview.subtitle ?? subtitleFallback) && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { lineHeight: 1.65 },
                    children: overview.subtitle ?? subtitleFallback
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Divider_default, {}, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                direction: { xs: "column", md: "row" },
                spacing: { xs: 3, md: 4 },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                    spacing: 2,
                    flex: { md: 1 },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                        variant: "overline",
                        color: "text.secondary",
                        children: metaTitle
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                        direction: "row",
                        spacing: 1,
                        flexWrap: "wrap",
                        useFlexGap: true,
                        children: overview.meta.map((item) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
                          variant: "outlined",
                          sx: {
                            borderRadius: theme.tokens.radius.surface,
                            boxShadow: "none",
                            px: { xs: 2, md: 2.5 },
                            py: { xs: 1.25, md: 1.5 },
                            minWidth: 160
                          },
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                              variant: "caption",
                              color: "text.secondary",
                              children: item.label
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                              variant: "body1",
                              sx: { fontWeight: 600, mt: 0.5 },
                              children: item.value
                            }, undefined, false, undefined, this)
                          ]
                        }, item.label, true, undefined, this))
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  stats && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                    spacing: 2,
                    flex: { md: 1 },
                    children: [
                      statsTitle && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                        variant: "overline",
                        color: "text.secondary",
                        children: statsTitle
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
                        container: true,
                        spacing: 2,
                        children: stats.map((stat) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
                          size: stats.length >= 3 ? { xs: 12, sm: 4 } : stats.length === 2 ? { xs: 12, sm: 6 } : { xs: 12, sm: 12 },
                          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
                            elevation: 0,
                            sx: mergeSx(resolvedStatsCardSx, statsCardSx),
                            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                              spacing: 0.5,
                              children: [
                                /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                                  variant: "h4",
                                  children: stat.value
                                }, undefined, false, undefined, this),
                                /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                                  variant: "subtitle2",
                                  color: "text.secondary",
                                  children: stat.label
                                }, undefined, false, undefined, this),
                                stat.description && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
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
  }, undefined, false, undefined, this);
};
var CaseStudyOverviewSection_default = CaseStudyOverviewSection;

// src/features/case-studies/components/CaseStudyRelatedSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var defaultSectionSx = (theme) => ({
  py: { xs: 10, md: 14 },
  background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(241,245,255,0.8), rgba(224,233,255,0.94))" : "linear-gradient(135deg, rgba(13,20,33,0.9), rgba(21,31,52,0.92))"
});
var CaseStudyRelatedSection = ({
  eyebrow,
  title,
  description,
  studies,
  primaryCta,
  secondaryCta,
  sectionSx
}) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  component: "section",
  sx: mergeSx(defaultSectionSx, sectionSx),
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    maxWidth: "lg",
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
      spacing: { xs: 4, md: 6 },
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
          spacing: 1.5,
          sx: { textAlign: { xs: "center", md: "left" } },
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "eyebrow",
              color: "brand.secondary",
              children: eyebrow
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "h2",
              children: title
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "subtitle1",
              color: "text.secondary",
              sx: { maxWidth: 720, mx: { xs: "auto", md: 0 }, lineHeight: 1.65 },
              children: description
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
          container: true,
          spacing: { xs: 3, md: 4 },
          children: studies.map((study) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
              component: Link,
              to: study.path,
              sx: (theme) => ({
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(2),
                textDecoration: "none",
                borderRadius: theme.tokens.radius.card,
                px: { xs: 2.5, md: 3 },
                py: { xs: 2.5, md: 3 },
                transition: `${theme.tokens.transition.hover}, transform 160ms ease`,
                "&:hover": {
                  transform: "translateY(-4px)"
                }
              }),
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "tag",
                      color: "brand.secondary",
                      children: study.focus
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "h4",
                      children: study.title
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.6 },
                  children: study.excerpt
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "button",
                  color: "primary",
                  children: "Read the case study →"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, study.id, false, undefined, this))
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
          direction: { xs: "column", sm: "row" },
          spacing: { xs: 2, sm: 3 },
          justifyContent: "center",
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
              component: Link,
              to: primaryCta.to,
              variant: primaryCta.variant ?? "contained",
              size: "large",
              children: primaryCta.label
            }, undefined, false, undefined, this),
            secondaryCta && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
              component: Link,
              to: secondaryCta.to,
              variant: secondaryCta.variant ?? "outlined",
              size: "large",
              children: secondaryCta.label
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var CaseStudyRelatedSection_default = CaseStudyRelatedSection;

// src/features/case-studies/hooks/useCaseStudyNavigation.ts
var import_react2 = __toESM(require_react(), 1);
var isBrowser = typeof window !== "undefined";
var getInitialSectionId = (sections) => sections[0]?.id ?? "";
var useCaseStudyNavigation = (sections) => {
  const sectionIds = import_react2.useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeSectionId, setActiveSectionId] = import_react2.useState(() => getInitialSectionId(sections));
  import_react2.useEffect(() => {
    if (!sectionIds.includes(activeSectionId)) {
      setActiveSectionId(getInitialSectionId(sections));
    }
  }, [activeSectionId, sectionIds, sections]);
  import_react2.useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActiveSectionId(hash);
    }
  }, [sectionIds]);
  import_react2.useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const sectionElements = sectionIds.map((sectionId) => document.getElementById(sectionId)).filter((element) => Boolean(element));
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
  }, [sectionIds]);
  const handleOutlineClick = import_react2.useCallback((event, targetId) => {
    event.preventDefault();
    if (!isBrowser) {
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSectionId(targetId);
      const newUrl = `${window.location.pathname}${window.location.search}#${targetId}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, []);
  return { activeSectionId, handleOutlineClick };
};
var useCaseStudyNavigation_default = useCaseStudyNavigation;

// images/divar-secure-call-listing.png
var divar_secure_call_listing_default = "./divar-secure-call-listing-6ff2dx8n.png";

// images/setare-aval-interview-session.avif
var setare_aval_interview_session_default = "./setare-aval-interview-session-p9jcmw69.avif";

// src/features/case-studies/data/content.ts
var resolveAsset = (asset) => new URL(asset, import.meta.url).href;
var divarOverview = {
  title: "Solving Harassment at Scale: How I Protected 2.1M Users on Iran's Largest Marketplace",
  subtitle: "We reduced harassment incidents by 60% inside Divar’s clothing category by building a privacy-first calling experience that now protects 2.1M weekly users.",
  meta: [
    { label: "Role", value: "Senior UX Designer · Trust & Safety" },
    { label: "Timeline", value: "May – June 2023" },
    { label: "Team", value: "Design, Trust & Safety, Legal, Engineering, Support" }
  ],
  stats: [
    { value: "▼60%", label: "Harassment reports" },
    { value: "2.1M", label: "Weekly callers safeguarded" },
    { value: "▼18%", label: "Safety ticket volume" }
  ],
  heroImage: resolveAsset(divar_secure_call_listing_default)
};
var divarSections = [
  {
    id: "context",
    title: "Context",
    summary: "Divar is Iran’s largest classifieds marketplace with 53M+ weekly users. Trust and safety incidents can collapse entire revenue categories if left unchecked.",
    metrics: [
      { label: "Marketplace scale", value: "53M+", description: "Weekly buyers & sellers" },
      { label: "Voice dependence", value: "2.1M", description: "Calls placed every week" },
      { label: "Ad consumption", value: "6B+", description: "Monthly ad views" }
    ],
    highlights: [
      "Clothing listings—mostly women-led—were hit hardest by abuse.",
      "Manual moderation couldn’t keep up; liquidity and trust were in free fall."
    ]
  },
  {
    id: "crisis",
    title: "The Crisis",
    summary: "Customer care centres were flooded with harassment reports. Sellers deleted listings or churned entirely, fearing repeat incidents.",
    bullets: [
      "Harassers scraped phone numbers from ads and circulated them in private Telegram groups.",
      "Even after victims deleted listings, the calls continued because numbers were already exposed.",
      "Without intervention, Divar risked losing a category that anchored daily engagement."
    ],
    quotes: [
      {
        author: "Layla, 32",
        role: "Professional artist selling bespoke clothing",
        text: "It was infuriating. I took down my Divar ad hoping to stop the calls, but they kept coming. Someone told me my number was in a Telegram group."
      }
    ]
  },
  {
    id: "investigation",
    title: "Finding the Real Problem",
    summary: "I interviewed harassed sellers and analysed behavioural data to understand how exposure scaled. The breakthrough came from connecting qualitative stories to quantitative signals.",
    body: [
      "Patterns emerged quickly: harassers saved posted numbers, cross-referenced them on WhatsApp and Instagram, and only then began the abuse. Experienced sellers had already stopped sharing numbers and relied on in-app chat—new sellers were the ones left exposed.",
      "Sara’s mention of a caller referencing her eye color confirmed our hypothesis: social media breadcrumbs made harassment personal and frightening.",
      "Data analysis backed the qualitative work. Users whose phone numbers were linked to public social profiles reported harassment dramatically more often. Those who stuck to in-app chat rarely did."
    ],
    quotes: [
      {
        author: "Sara, 26",
        role: "Fashion retail worker",
        text: "One caller knew my eye color. They clearly found my Instagram through the phone number on Divar."
      },
      {
        author: "Zahra, 28",
        role: "Freelance graphic designer",
        text: "I stopped listing my phone number. It felt unprofessional, but it was the only way to avoid harassment."
      }
    ],
    highlights: [
      "Public phone numbers were the root cause of exposure, not the number of reports.",
      "Experienced sellers had already adapted by using in-app chat; new sellers needed protective defaults."
    ]
  },
  {
    id: "strategy",
    title: "The Solution Journey",
    summary: "We reframed success from “reduce reports” to “reduce exposure.” With Trust & Safety, Legal, Support, and Data, we evaluated every path and stress-tested edge cases before committing.",
    bullets: [
      "Educating users about harasser tactics would erode trust and discourage listings.",
      "Full VoIP was cost-prohibitive, fragile across device types, and inaccessible to 47% of legacy Android users.",
      "Voice relay with intermediary numbers protected sellers without changing purchase behaviour—this became the north star."
    ]
  },
  {
    id: "testing",
    title: "Testing & Learning from Failure",
    summary: "A 3-day pilot in the clothing category resulted in a 56% call failure rate. Instead of reverting, we treated every failure as a design requirement.",
    bullets: [
      "User behaviour: sellers blocked unfamiliar numbers; buyers redialled from call logs; repeat conversations broke mapping windows.",
      "Technical load: call volume spiked beyond forecasts and number pools were exhausted.",
      "Business risk: longer calls inflated telecom costs and anonymised numbers attracted opportunistic scammers."
    ]
  },
  {
    id: "refinement",
    title: "The Refined Solution",
    summary: "We translated every pilot insight into product and platform improvements before scaling nationwide.",
    bullets: [
      "Bidirectional mapping let sellers reconnect without exposing real numbers.",
      "Extended mapping windows from 20 seconds to 15 minutes reduced dropped calls.",
      "Voice prompts (“This is a secure call from Divar…”) set expectations and deterred scammers.",
      "A pool of 100 intermediary numbers assigned per buyer-seller pair prevented reuse and blocking.",
      "Secure call history, chat integration, and ad management logs kept legitimate relationships intact."
    ]
  },
  {
    id: "impact",
    title: "Impact",
    body: [
      "After rollout, harassment reports dropped dramatically and sellers felt safe enough to keep listings live. Moderation teams recovered hours each week that were previously spent on reactive tickets."
    ],
    metrics: [
      {
        label: "Harassment reports",
        value: "▼ 60%",
        description: "Within 8 weeks of launch"
      },
      {
        label: "Ad deletions",
        value: "▼ 25%",
        description: "Fewer sellers leaving the platform"
      },
      {
        label: "Support tickets",
        value: "▼ 18%",
        description: "More time for proactive monitoring"
      }
    ]
  },
  {
    id: "learnings",
    title: "Key Learnings",
    bullets: [
      "The obvious problem is rarely the real one—exposure, not reports, was the root.",
      "Users were already designing workarounds; observing them revealed the right defaults.",
      "Failure is signal. The 56% pilot failure generated a backlog of actionable requirements.",
      "Pair qualitative insight with real-time monitoring to keep abuse vectors in check."
    ]
  },
  {
    id: "reflection",
    title: "Reflection",
    body: [
      "This project reinforced my belief that solving hard problems starts with understanding behaviour. By blending research, data, and rapid iteration, we built a safety layer that still protects millions of people each week. The harassment problem may never disappear entirely, but Divar is significantly safer for the users who need it most."
    ]
  }
];
var setareOverview = {
  title: "Turning One-Time Visitors into Lifelong Customers at Setare Aval",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "Feb 2021 – Jan 2022" },
    { label: "Impact", value: "Doubled retained revenue in 6 months" }
  ],
  stats: [
    {
      value: "2×",
      label: "Retained revenue",
      description: "Achieved within the first 6 months of rollout"
    },
    {
      value: "+60K",
      label: "Daily active users",
      description: "Referral cohort converted to high-intent DAUs"
    }
  ],
  heroImage: resolveAsset(setare_aval_interview_session_default)
};
var setareSections = [
  {
    id: "context",
    title: "Context",
    summary: "Setare Aval is the digital arm of Iran's largest telecom. We powered fintech services, USSD experiences, and mobile value-added services nation-wide. Growth had plateaued—our funnel leaked after the first purchase.",
    metrics: [
      {
        label: "User Base",
        value: "60K+",
        description: "Daily subscribers across nationwide services"
      },
      {
        label: "Retention Goal",
        value: "x2",
        description: "Double 90-day retained revenue"
      }
    ]
  },
  {
    id: "challenge",
    title: "Challenge",
    bullets: [
      "Activation flow treated every segment identically, ignoring usage intent.",
      "Referral loops existed but were unrewarding—users churned after first benefit.",
      "Teams shipped in silos; no shared experiment cadence or success metrics."
    ]
  },
  {
    id: "insights",
    title: "What We Learned",
    summary: "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
    bullets: [
      "Users wanted tangible milestones—without them, the product felt transactional.",
      "High-intent cohorts responded to educational nudges more than promotions.",
      "Internal teams lacked visibility into experiment outcomes, slowing iteration."
    ]
  },
  {
    id: "solution",
    title: "Experience Re-Architecture",
    bullets: [
      "Introduced lifecycle messaging tailored to intent (explorers, earners, loyalists).",
      "Shipped a gamified referral journey that celebrated progress and unlocked tiered rewards.",
      "Stood up a cross-functional growth guild with a 2-week experiment cadence."
    ],
    metrics: [
      {
        label: "Retained Revenue",
        value: "2×",
        description: "Within 6 months of staged rollout"
      },
      {
        label: "Daily Active Users",
        value: "+60K",
        description: "Referral program participants became daily actives"
      }
    ]
  },
  {
    id: "role",
    title: "My Role",
    summary: "I operated as the end-to-end product designer, bridging product, marketing, customer success, and engineering.",
    bullets: [
      "Ran weekly co-creation rituals to align stakeholders on experiment priorities.",
      "Established design system foundations adopted by teams beyond growth.",
      "Set up analytics dashboards that paired qualitative notes with funnel KPIs."
    ],
    quotes: [
      {
        author: "Head of Growth",
        role: "Setare Aval",
        text: "Masih helped us shift from one-off campaigns to a product mindset. The lifecycle model and experiment cadence still guide how we build today."
      }
    ]
  }
];
var caseStudyEntries = [
  {
    id: "divar-secure-call",
    title: "Divar Secure Call",
    excerpt: "Reduced harassment by 60% for 2.1M weekly callers through a privacy-first calling layer inside Iran’s largest marketplace.",
    focus: "Trust & Safety",
    path: "/case-studies/divar-secure-call"
  },
  {
    id: "setare-aval-engagement",
    title: "Setare Aval Engagement",
    excerpt: "Re-architected lifecycle journeys that doubled retained revenue and converted referral cohorts into 60K+ daily active users.",
    focus: "Retention & Growth",
    path: "/case-studies/setare-aval-engagement"
  }
];

export { SectionCard_default, CaseStudyOutlineNav_default, CaseStudyOverviewSection_default, CaseStudyRelatedSection_default, useCaseStudyNavigation_default, divarOverview, divarSections, setareOverview, setareSections, caseStudyEntries };

//# debugId=6CCFE0DD9B80C94D64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvc2hhcmVkL3V0aWxzL3N4LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9jYXNlLXN0dWRpZXMvY29tcG9uZW50cy9DYXNlU3R1ZHlPdXRsaW5lTmF2LnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jYXNlLXN0dWRpZXMvaG9va3MvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbi50cyIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2RhdGEvY29udGVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgRGl2aWRlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy91aS9QaWxsXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50ID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgaWQ9e3NlY3Rpb24uaWR9XG4gICAgICBzcGFjaW5nPXt7IHhzOiAyLjUsIG1kOiAzIH19XG4gICAgICBzeD17eyBtYXhXaWR0aDogNzYwLCBteDogXCJhdXRvXCIsIHNjcm9sbE1hcmdpblRvcDogeyB4czogOTYsIG1kOiAxNDAgfSB9fVxuICAgID5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGguc2xpY2UoMCwgMzIpfVxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS43IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cblxuICAgICAge3NlY3Rpb24uYnVsbGV0cyAmJiAoXG4gICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezF9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtwb2ludH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cG9pbnR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5oaWdobGlnaHRzICYmIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCkgPT4gKFxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAga2V5PXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIGxhYmVsPXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjE2KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLm1ldHJpY3MgJiYgKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ubWV0cmljcy5tYXAoKG1ldHJpYykgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiBzZWN0aW9uLm1ldHJpY3MhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX0ga2V5PXttZXRyaWMubGFiZWx9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPnttZXRyaWMudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAge21ldHJpYy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHttZXRyaWMuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRyaWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5xdW90ZXMgJiYgc2VjdGlvbi5xdW90ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7c2VjdGlvbi5xdW90ZXMubWFwKChxdW90ZSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Ake3F1b3RlLmF1dGhvcn0tJHtxdW90ZS50ZXh0LnNsaWNlKDAsIDI0KX1gfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiwgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAg4oCce3F1b3RlLnRleHR94oCdXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge3F1b3RlLmF1dGhvcn0g4oCUIHtxdW90ZS5yb2xlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaW1hZ2UgJiYgKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICBzcmM9e3NlY3Rpb24uaW1hZ2Uuc3JjfVxuICAgICAgICAgIGFsdD17c2VjdGlvbi5pbWFnZS5hbHR9XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCAxOHB4IDI4cHggcmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgICAgIDogXCIwIDI0cHggNDBweCByZ2JhKDAsMCwwLDAuNDUpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxEaXZpZGVyIHN4PXt7IG10OiB7IHhzOiAzLCBtZDogNCB9IH19IC8+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gbWVtbyhcbiAgQ2FzZVN0dWR5U2VjdGlvbkNhcmRDb21wb25lbnQsXG4gIChwcmV2LCBuZXh0KSA9PiBwcmV2LnNlY3Rpb24gPT09IG5leHQuc2VjdGlvbixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNlY3Rpb25DYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBTeFByb3BzLCBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IGFwcGVuZCA9IDxUVGhlbWUgZXh0ZW5kcyBUaGVtZT4odGFyZ2V0OiBTeFByb3BzPFRUaGVtZT5bXSwgdmFsdWU/OiBTeFByb3BzPFRUaGVtZT4pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IGFwcGVuZCh0YXJnZXQsIGl0ZW0pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0YXJnZXQucHVzaCh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWVyZ2VTeCA9IDxUVGhlbWUgZXh0ZW5kcyBUaGVtZT4oXG4gIGJhc2U6IFN4UHJvcHM8VFRoZW1lPixcbiAgLi4ub3ZlcnJpZGVzOiBBcnJheTxTeFByb3BzPFRUaGVtZT4gfCB1bmRlZmluZWQ+XG4pOiBTeFByb3BzPFRUaGVtZT4gPT4ge1xuICBjb25zdCBlbnRyaWVzOiBTeFByb3BzPFRUaGVtZT5bXSA9IFtdO1xuICBhcHBlbmQoZW50cmllcywgYmFzZSk7XG4gIG92ZXJyaWRlcy5mb3JFYWNoKCh2YWx1ZSkgPT4gYXBwZW5kKGVudHJpZXMsIHZhbHVlKSk7XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGVudHJpZXNbMF0hO1xuICB9XG5cbiAgcmV0dXJuIGVudHJpZXMgYXMgU3hQcm9wczxUVGhlbWU+O1xufTtcblxuXG4iLAogICAgImltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lcmdlU3ggfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3N4XCI7XG5cbnR5cGUgQ2FzZVN0dWR5T3V0bGluZU5hdlByb3BzID0ge1xuICBzZWN0aW9uczogcmVhZG9ubHkgQ2FzZVN0dWR5U2VjdGlvbltdO1xuICBhY3RpdmVTZWN0aW9uSWQ6IHN0cmluZztcbiAgb25OYXZpZ2F0ZTogKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvdXRsaW5lTGFiZWw/OiBzdHJpbmc7XG4gIGNvbnRhaW5lclN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlPdXRsaW5lTmF2ID0gKHtcbiAgc2VjdGlvbnMsXG4gIGFjdGl2ZVNlY3Rpb25JZCxcbiAgb25OYXZpZ2F0ZSxcbiAgb3V0bGluZUxhYmVsID0gXCJPdXRsaW5lXCIsXG4gIGNvbnRhaW5lclN4LFxufTogQ2FzZVN0dWR5T3V0bGluZU5hdlByb3BzKSA9PiAoXG4gIDxTdGFja1xuICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgYXJpYS1sYWJlbD1cIkNhc2Ugc3R1ZHkgc2VjdGlvbnNcIlxuICAgIHNwYWNpbmc9ezF9XG4gICAgc3g9e21lcmdlU3goXG4gICAgICAodGhlbWU6IFRoZW1lKSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogeyBtZDogXCJzdGlja3lcIiB9LFxuICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNClcIlxuICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgICBjb250YWluZXJTeCxcbiAgICApfVxuICA+XG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAge291dGxpbmVMYWJlbH1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICAgPERpdmlkZXIgLz5cbiAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBvbk5hdmlnYXRlKGV2ZW50LCBzZWN0aW9uLmlkKX1cbiAgICAgICAgYXJpYS1jdXJyZW50PXthY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgc3g9eyh0aGVtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTIpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjgpXCJcbiAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgIHB4OiAxLjUsXG4gICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICkpfVxuICA8L1N0YWNrPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxuICB0eXBlIFN4UHJvcHMsXG4gIHR5cGUgVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeU92ZXJ2aWV3IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzID0ge1xuICBleWVicm93OiBzdHJpbmc7XG4gIG92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldztcbiAgc3VidGl0bGVGYWxsYmFjaz86IHN0cmluZztcbiAgbWV0YVRpdGxlPzogc3RyaW5nO1xuICBzdGF0c1RpdGxlPzogc3RyaW5nO1xuICBzdGF0c1ZhcmlhbnQ/OiBcImdyYWRpZW50XCIgfCBcIm91dGxpbmVkXCI7XG4gIGhlcm9CYWNrZHJvcFN4PzogU3hQcm9wczxUaGVtZT47XG4gIGhlcm9TdXJmYWNlU3g/OiBTeFByb3BzPFRoZW1lPjtcbiAgc3RhdHNDYXJkU3g/OiBTeFByb3BzPFRoZW1lPjtcbn07XG5cbmNvbnN0IGRlZmF1bHRIZXJvQmFja2Ryb3BTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGluc2V0OiAwLFxuICBib3JkZXJSYWRpdXM6IHsgeHM6IDI0LCBtZDogMzIgfSxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTgpKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjg4KSwgcmdiYSgzNiw2NCwxMjAsMC43MikpXCIsXG4gIGZpbHRlcjogXCJibHVyKDQ4cHgpXCIsXG4gIHpJbmRleDogLTEsXG59KTtcblxuY29uc3QgZGVmYXVsdEhlcm9TdXJmYWNlU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDksIDI1MSwgMjU1LCAwLjg4KVwiIDogXCJyZ2JhKDEzLCAyMCwgMzYsIDAuODgpXCIsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gIH1gLFxuICBib3hTaGFkb3c6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCIwIDI2cHggNTJweCByZ2JhKDM0LCA4NCwgMjU1LCAwLjE0KVwiXG4gICAgICA6IFwiMCAyNnB4IDUycHggcmdiYSgwLCAwLCAwLCAwLjQ1KVwiLFxuICBweDogeyB4czogMywgbWQ6IDQgfSxcbiAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG59KTtcblxuY29uc3QgZGVmYXVsdFN0YXRzQ2FyZFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjEyKSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTYsMjgsNTYsMC44KSwgcmdiYSgzNiw2NCwxMjAsMC42KSlcIixcbiAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgYm9yZGVyOiBcIm5vbmVcIixcbn0pO1xuXG5jb25zdCBvdXRsaW5lZFN0YXRzQ2FyZFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkyKVwiIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG59KTtcblxuY29uc3QgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uID0gKHtcbiAgZXllYnJvdyxcbiAgb3ZlcnZpZXcsXG4gIHN1YnRpdGxlRmFsbGJhY2ssXG4gIG1ldGFUaXRsZSA9IFwiUHJvamVjdCBkZXRhaWxzXCIsXG4gIHN0YXRzVGl0bGUsXG4gIHN0YXRzVmFyaWFudCA9IFwiZ3JhZGllbnRcIixcbiAgaGVyb0JhY2tkcm9wU3gsXG4gIGhlcm9TdXJmYWNlU3gsXG4gIHN0YXRzQ2FyZFN4LFxufTogQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzdGF0cyA9IG92ZXJ2aWV3LnN0YXRzO1xuICBjb25zdCByZXNvbHZlZFN0YXRzQ2FyZFN4ID1cbiAgICBzdGF0c1ZhcmlhbnQgPT09IFwiZ3JhZGllbnRcIiA/IGRlZmF1bHRTdGF0c0NhcmRTeCA6IG91dGxpbmVkU3RhdHNDYXJkU3g7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogMTAsIG1kOiAxNCB9IH19PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgPEJveCBzeD17bWVyZ2VTeChkZWZhdWx0SGVyb0JhY2tkcm9wU3gsIGhlcm9CYWNrZHJvcFN4KX0gLz5cblxuICAgICAgICA8Qm94IHN4PXttZXJnZVN4KGRlZmF1bHRIZXJvU3VyZmFjZVN4LCBoZXJvU3VyZmFjZVN4KX0+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiPntvdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIHsob3ZlcnZpZXcuc3VidGl0bGUgPz8gc3VidGl0bGVGYWxsYmFjaykgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fT5cbiAgICAgICAgICAgICAgICAgIHtvdmVydmlldy5zdWJ0aXRsZSA/PyBzdWJ0aXRsZUZhbGxiYWNrfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19IHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7bWV0YVRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgIHtvdmVydmlldy5tZXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCwgbXQ6IDAuNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICB7c3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgICAge3N0YXRzVGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRzVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmxlbmd0aCA+PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHhzOiAxMiwgc206IDQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMubGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgeHM6IDEyLCBzbTogNiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgeHM6IDEyLCBzbTogMTIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGVsZXZhdGlvbj17MH0gc3g9e21lcmdlU3gocmVzb2x2ZWRTdGF0c0NhcmRTeCwgc3RhdHNDYXJkU3gpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHR5cGUgU3hQcm9wcyxcbiAgdHlwZSBUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uUHJvcHMgPSB7XG4gIGV5ZWJyb3c6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc3R1ZGllczogcmVhZG9ubHkgQ2FzZVN0dWR5RW50cnlbXTtcbiAgcHJpbWFyeUN0YToge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2Vjb25kYXJ5Q3RhPzoge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2VjdGlvblN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0U2VjdGlvblN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQxLDI0NSwyNTUsMC44KSwgcmdiYSgyMjQsMjMzLDI1NSwwLjk0KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTMsMjAsMzMsMC45KSwgcmdiYSgyMSwzMSw1MiwwLjkyKSlcIixcbn0pO1xuXG5jb25zdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgc3R1ZGllcyxcbiAgcHJpbWFyeUN0YSxcbiAgc2Vjb25kYXJ5Q3RhLFxuICBzZWN0aW9uU3gsXG59OiBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXttZXJnZVN4KGRlZmF1bHRTZWN0aW9uU3gsIHNlY3Rpb25TeCl9PlxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiA2IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9IH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDcyMCwgbXg6IHsgeHM6IFwiYXV0b1wiLCBtZDogMCB9LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAge3N0dWRpZXMubWFwKChzdHVkeSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17c3R1ZHkuaWR9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICB0bz17c3R1ZHkucGF0aH1cbiAgICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGdhcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS50b2tlbnMudHJhbnNpdGlvbi5ob3Zlcn0sIHRyYW5zZm9ybSAxNjBtcyBlYXNlYCxcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdHVkeS5mb2N1c31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdHVkeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAge3N0dWR5LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGNhc2Ugc3R1ZHkg4oaSXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogMiwgc206IDMgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17cHJpbWFyeUN0YS50b31cbiAgICAgICAgICAgIHZhcmlhbnQ9e3ByaW1hcnlDdGEudmFyaWFudCA/PyBcImNvbnRhaW5lZFwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUN0YS5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17c2Vjb25kYXJ5Q3RhLnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PXtzZWNvbmRhcnlDdGEudmFyaWFudCA/PyBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlDdGEubGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB0eXBlIE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlTZWN0aW9uTGlzdCA9IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgZ2V0SW5pdGlhbFNlY3Rpb25JZCA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHNlY3Rpb25zWzBdPy5pZCA/PyBcIlwiO1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uID0gKHNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uTGlzdCkgPT4ge1xuICBjb25zdCBzZWN0aW9uSWRzID0gdXNlTWVtbygoKSA9PiBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHNlY3Rpb24uaWQpLCBbc2VjdGlvbnNdKTtcblxuICBjb25zdCBbYWN0aXZlU2VjdGlvbklkLCBzZXRBY3RpdmVTZWN0aW9uSWRdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uSWRzLmluY2x1ZGVzKGFjdGl2ZVNlY3Rpb25JZCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChnZXRJbml0aWFsU2VjdGlvbklkKHNlY3Rpb25zKSk7XG4gICAgfVxuICB9LCBbYWN0aXZlU2VjdGlvbklkLCBzZWN0aW9uSWRzLCBzZWN0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgc2VjdGlvbklkcy5pbmNsdWRlcyhoYXNoKSkge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGhhc2gpO1xuICAgIH1cbiAgfSwgW3NlY3Rpb25JZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnRzID0gc2VjdGlvbklkc1xuICAgICAgLm1hcCgoc2VjdGlvbklkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgY29uc3QgaGFuZGxlT3V0bGluZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZCh0YXJnZXRJZCk7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9IyR7dGFyZ2V0SWR9YDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4geyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9kaXZhci1zZWN1cmUtY2FsbC1saXN0aW5nLnBuZ1wiO1xuaW1wb3J0IHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLWludGVydmlldy1zZXNzaW9uLmF2aWZcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnksIENhc2VTdHVkeU92ZXJ2aWV3LCBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHJlc29sdmVBc3NldCA9IChhc3NldDogc3RyaW5nKSA9PiBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWY7XG5cbmV4cG9ydCBjb25zdCBkaXZhck92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJTb2x2aW5nIEhhcmFzc21lbnQgYXQgU2NhbGU6IEhvdyBJIFByb3RlY3RlZCAyLjFNIFVzZXJzIG9uIElyYW4ncyBMYXJnZXN0IE1hcmtldHBsYWNlXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiV2UgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgaW5zaWRlIERpdmFy4oCZcyBjbG90aGluZyBjYXRlZ29yeSBieSBidWlsZGluZyBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgbm93IHByb3RlY3RzIDIuMU0gd2Vla2x5IHVzZXJzLlwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlNlbmlvciBVWCBEZXNpZ25lciDCtyBUcnVzdCAmIFNhZmV0eVwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJNYXkg4oCTIEp1bmUgMjAyM1wiIH0sXG4gICAgeyBsYWJlbDogXCJUZWFtXCIsIHZhbHVlOiBcIkRlc2lnbiwgVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBFbmdpbmVlcmluZywgU3VwcG9ydFwiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAgeyB2YWx1ZTogXCLilrw2MCVcIiwgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIgfSxcbiAgICB7IHZhbHVlOiBcIjIuMU1cIiwgbGFiZWw6IFwiV2Vla2x5IGNhbGxlcnMgc2FmZWd1YXJkZWRcIiB9LFxuICAgIHsgdmFsdWU6IFwi4pa8MTglXCIsIGxhYmVsOiBcIlNhZmV0eSB0aWNrZXQgdm9sdW1lXCIgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiByZXNvbHZlQXNzZXQoZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0KSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXZhclNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpdmFyIGlzIElyYW7igJlzIGxhcmdlc3QgY2xhc3NpZmllZHMgbWFya2V0cGxhY2Ugd2l0aCA1M00rIHdlZWtseSB1c2Vycy4gVHJ1c3QgYW5kIHNhZmV0eSBpbmNpZGVudHMgY2FuIGNvbGxhcHNlIGVudGlyZSByZXZlbnVlIGNhdGVnb3JpZXMgaWYgbGVmdCB1bmNoZWNrZWQuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAgeyBsYWJlbDogXCJNYXJrZXRwbGFjZSBzY2FsZVwiLCB2YWx1ZTogXCI1M00rXCIsIGRlc2NyaXB0aW9uOiBcIldlZWtseSBidXllcnMgJiBzZWxsZXJzXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiVm9pY2UgZGVwZW5kZW5jZVwiLCB2YWx1ZTogXCIyLjFNXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGxzIHBsYWNlZCBldmVyeSB3ZWVrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiQWQgY29uc3VtcHRpb25cIiwgdmFsdWU6IFwiNkIrXCIsIGRlc2NyaXB0aW9uOiBcIk1vbnRobHkgYWQgdmlld3NcIiB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDbG90aGluZyBsaXN0aW5nc+KAlG1vc3RseSB3b21lbi1sZWTigJR3ZXJlIGhpdCBoYXJkZXN0IGJ5IGFidXNlLlwiLFxuICAgICAgXCJNYW51YWwgbW9kZXJhdGlvbiBjb3VsZG7igJl0IGtlZXAgdXA7IGxpcXVpZGl0eSBhbmQgdHJ1c3Qgd2VyZSBpbiBmcmVlIGZhbGwuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNyaXNpc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBDcmlzaXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJDdXN0b21lciBjYXJlIGNlbnRyZXMgd2VyZSBmbG9vZGVkIHdpdGggaGFyYXNzbWVudCByZXBvcnRzLiBTZWxsZXJzIGRlbGV0ZWQgbGlzdGluZ3Mgb3IgY2h1cm5lZCBlbnRpcmVseSwgZmVhcmluZyByZXBlYXQgaW5jaWRlbnRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSGFyYXNzZXJzIHNjcmFwZWQgcGhvbmUgbnVtYmVycyBmcm9tIGFkcyBhbmQgY2lyY3VsYXRlZCB0aGVtIGluIHByaXZhdGUgVGVsZWdyYW0gZ3JvdXBzLlwiLFxuICAgICAgXCJFdmVuIGFmdGVyIHZpY3RpbXMgZGVsZXRlZCBsaXN0aW5ncywgdGhlIGNhbGxzIGNvbnRpbnVlZCBiZWNhdXNlIG51bWJlcnMgd2VyZSBhbHJlYWR5IGV4cG9zZWQuXCIsXG4gICAgICBcIldpdGhvdXQgaW50ZXJ2ZW50aW9uLCBEaXZhciByaXNrZWQgbG9zaW5nIGEgY2F0ZWdvcnkgdGhhdCBhbmNob3JlZCBkYWlseSBlbmdhZ2VtZW50LlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJMYXlsYSwgMzJcIixcbiAgICAgICAgcm9sZTogXCJQcm9mZXNzaW9uYWwgYXJ0aXN0IHNlbGxpbmcgYmVzcG9rZSBjbG90aGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIkl0IHdhcyBpbmZ1cmlhdGluZy4gSSB0b29rIGRvd24gbXkgRGl2YXIgYWQgaG9waW5nIHRvIHN0b3AgdGhlIGNhbGxzLCBidXQgdGhleSBrZXB0IGNvbWluZy4gU29tZW9uZSB0b2xkIG1lIG15IG51bWJlciB3YXMgaW4gYSBUZWxlZ3JhbSBncm91cC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIGludGVydmlld2VkIGhhcmFzc2VkIHNlbGxlcnMgYW5kIGFuYWx5c2VkIGJlaGF2aW91cmFsIGRhdGEgdG8gdW5kZXJzdGFuZCBob3cgZXhwb3N1cmUgc2NhbGVkLiBUaGUgYnJlYWt0aHJvdWdoIGNhbWUgZnJvbSBjb25uZWN0aW5nIHF1YWxpdGF0aXZlIHN0b3JpZXMgdG8gcXVhbnRpdGF0aXZlIHNpZ25hbHMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQdWJsaWMgcGhvbmUgbnVtYmVycyB3ZXJlIHRoZSByb290IGNhdXNlIG9mIGV4cG9zdXJlLCBub3QgdGhlIG51bWJlciBvZiByZXBvcnRzLlwiLFxuICAgICAgXCJFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IGFkYXB0ZWQgYnkgdXNpbmcgaW4tYXBwIGNoYXQ7IG5ldyBzZWxsZXJzIG5lZWRlZCBwcm90ZWN0aXZlIGRlZmF1bHRzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdHJhdGVneVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbiBKb3VybmV5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgcmVmcmFtZWQgc3VjY2VzcyBmcm9tIOKAnHJlZHVjZSByZXBvcnRz4oCdIHRvIOKAnHJlZHVjZSBleHBvc3VyZS7igJ0gV2l0aCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIFN1cHBvcnQsIGFuZCBEYXRhLCB3ZSBldmFsdWF0ZWQgZXZlcnkgcGF0aCBhbmQgc3RyZXNzLXRlc3RlZCBlZGdlIGNhc2VzIGJlZm9yZSBjb21taXR0aW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRWR1Y2F0aW5nIHVzZXJzIGFib3V0IGhhcmFzc2VyIHRhY3RpY3Mgd291bGQgZXJvZGUgdHJ1c3QgYW5kIGRpc2NvdXJhZ2UgbGlzdGluZ3MuXCIsXG4gICAgICBcIkZ1bGwgVm9JUCB3YXMgY29zdC1wcm9oaWJpdGl2ZSwgZnJhZ2lsZSBhY3Jvc3MgZGV2aWNlIHR5cGVzLCBhbmQgaW5hY2Nlc3NpYmxlIHRvIDQ3JSBvZiBsZWdhY3kgQW5kcm9pZCB1c2Vycy5cIixcbiAgICAgIFwiVm9pY2UgcmVsYXkgd2l0aCBpbnRlcm1lZGlhcnkgbnVtYmVycyBwcm90ZWN0ZWQgc2VsbGVycyB3aXRob3V0IGNoYW5naW5nIHB1cmNoYXNlIGJlaGF2aW91cuKAlHRoaXMgYmVjYW1lIHRoZSBub3J0aCBzdGFyLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkEgMy1kYXkgcGlsb3QgaW4gdGhlIGNsb3RoaW5nIGNhdGVnb3J5IHJlc3VsdGVkIGluIGEgNTYlIGNhbGwgZmFpbHVyZSByYXRlLiBJbnN0ZWFkIG9mIHJldmVydGluZywgd2UgdHJlYXRlZCBldmVyeSBmYWlsdXJlIGFzIGEgZGVzaWduIHJlcXVpcmVtZW50LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciBiZWhhdmlvdXI6IHNlbGxlcnMgYmxvY2tlZCB1bmZhbWlsaWFyIG51bWJlcnM7IGJ1eWVycyByZWRpYWxsZWQgZnJvbSBjYWxsIGxvZ3M7IHJlcGVhdCBjb252ZXJzYXRpb25zIGJyb2tlIG1hcHBpbmcgd2luZG93cy5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGxvYWQ6IGNhbGwgdm9sdW1lIHNwaWtlZCBiZXlvbmQgZm9yZWNhc3RzIGFuZCBudW1iZXIgcG9vbHMgd2VyZSBleGhhdXN0ZWQuXCIsXG4gICAgICBcIkJ1c2luZXNzIHJpc2s6IGxvbmdlciBjYWxscyBpbmZsYXRlZCB0ZWxlY29tIGNvc3RzIGFuZCBhbm9ueW1pc2VkIG51bWJlcnMgYXR0cmFjdGVkIG9wcG9ydHVuaXN0aWMgc2NhbW1lcnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmluZW1lbnRcIixcbiAgICB0aXRsZTogXCJUaGUgUmVmaW5lZCBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHRyYW5zbGF0ZWQgZXZlcnkgcGlsb3QgaW5zaWdodCBpbnRvIHByb2R1Y3QgYW5kIHBsYXRmb3JtIGltcHJvdmVtZW50cyBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQmlkaXJlY3Rpb25hbCBtYXBwaW5nIGxldCBzZWxsZXJzIHJlY29ubmVjdCB3aXRob3V0IGV4cG9zaW5nIHJlYWwgbnVtYmVycy5cIixcbiAgICAgIFwiRXh0ZW5kZWQgbWFwcGluZyB3aW5kb3dzIGZyb20gMjAgc2Vjb25kcyB0byAxNSBtaW51dGVzIHJlZHVjZWQgZHJvcHBlZCBjYWxscy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyAo4oCcVGhpcyBpcyBhIHNlY3VyZSBjYWxsIGZyb20gRGl2YXLigKbigJ0pIHNldCBleHBlY3RhdGlvbnMgYW5kIGRldGVycmVkIHNjYW1tZXJzLlwiLFxuICAgICAgXCJBIHBvb2wgb2YgMTAwIGludGVybWVkaWFyeSBudW1iZXJzIGFzc2lnbmVkIHBlciBidXllci1zZWxsZXIgcGFpciBwcmV2ZW50ZWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5LCBjaGF0IGludGVncmF0aW9uLCBhbmQgYWQgbWFuYWdlbWVudCBsb2dzIGtlcHQgbGVnaXRpbWF0ZSByZWxhdGlvbnNoaXBzIGludGFjdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBZnRlciByb2xsb3V0LCBoYXJhc3NtZW50IHJlcG9ydHMgZHJvcHBlZCBkcmFtYXRpY2FsbHkgYW5kIHNlbGxlcnMgZmVsdCBzYWZlIGVub3VnaCB0byBrZWVwIGxpc3RpbmdzIGxpdmUuIE1vZGVyYXRpb24gdGVhbXMgcmVjb3ZlcmVkIGhvdXJzIGVhY2ggd2VlayB0aGF0IHdlcmUgcHJldmlvdXNseSBzcGVudCBvbiByZWFjdGl2ZSB0aWNrZXRzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDYwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gOCB3ZWVrcyBvZiBsYXVuY2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkIGRlbGV0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMjUlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZld2VyIHNlbGxlcnMgbGVhdmluZyB0aGUgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN1cHBvcnQgdGlja2V0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMTglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vcmUgdGltZSBmb3IgcHJvYWN0aXZlIG1vbml0b3JpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlYXJuaW5nc1wiLFxuICAgIHRpdGxlOiBcIktleSBMZWFybmluZ3NcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIG9uZeKAlGV4cG9zdXJlLCBub3QgcmVwb3J0cywgd2FzIHRoZSByb290LlwiLFxuICAgICAgXCJVc2VycyB3ZXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSByZXZlYWxlZCB0aGUgcmlnaHQgZGVmYXVsdHMuXCIsXG4gICAgICBcIkZhaWx1cmUgaXMgc2lnbmFsLiBUaGUgNTYlIHBpbG90IGZhaWx1cmUgZ2VuZXJhdGVkIGEgYmFja2xvZyBvZiBhY3Rpb25hYmxlIHJlcXVpcmVtZW50cy5cIixcbiAgICAgIFwiUGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcgdG8ga2VlcCBhYnVzZSB2ZWN0b3JzIGluIGNoZWNrLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZsZWN0aW9uXCIsXG4gICAgdGl0bGU6IFwiUmVmbGVjdGlvblwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHJlaW5mb3JjZWQgbXkgYmVsaWVmIHRoYXQgc29sdmluZyBoYXJkIHByb2JsZW1zIHN0YXJ0cyB3aXRoIHVuZGVyc3RhbmRpbmcgYmVoYXZpb3VyLiBCeSBibGVuZGluZyByZXNlYXJjaCwgZGF0YSwgYW5kIHJhcGlkIGl0ZXJhdGlvbiwgd2UgYnVpbHQgYSBzYWZldHkgbGF5ZXIgdGhhdCBzdGlsbCBwcm90ZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZWFjaCB3ZWVrLiBUaGUgaGFyYXNzbWVudCBwcm9ibGVtIG1heSBuZXZlciBkaXNhcHBlYXIgZW50aXJlbHksIGJ1dCBEaXZhciBpcyBzaWduaWZpY2FudGx5IHNhZmVyIGZvciB0aGUgdXNlcnMgd2hvIG5lZWQgaXQgbW9zdC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZU92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzIGF0IFNldGFyZSBBdmFsXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJGZWIgMjAyMSDigJMgSmFuIDIwMjJcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIkRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBpbiA2IG1vbnRoc1wiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiMsOXXCIsXG4gICAgICBsYWJlbDogXCJSZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBY2hpZXZlZCB3aXRoaW4gdGhlIGZpcnN0IDYgbW9udGhzIG9mIHJvbGxvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIis2MEtcIixcbiAgICAgIGxhYmVsOiBcIkRhaWx5IGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVmZXJyYWwgY29ob3J0IGNvbnZlcnRlZCB0byBoaWdoLWludGVudCBEQVVzXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiByZXNvbHZlQXNzZXQoc2V0YXJlQXZhbEludGVydmlld0Fzc2V0KSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2FzZVN0dWR5RW50cmllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlFbnRyeT4gPSBbXG4gIHtcbiAgICBpZDogXCJkaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsXCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiUmVkdWNlZCBoYXJhc3NtZW50IGJ5IDYwJSBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycyB0aHJvdWdoIGEgcHJpdmFjeS1maXJzdCBjYWxsaW5nIGxheWVyIGluc2lkZSBJcmFu4oCZcyBsYXJnZXN0IG1hcmtldHBsYWNlLlwiLFxuICAgIGZvY3VzOiBcIlRydXN0ICYgU2FmZXR5XCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiU2V0YXJlIEF2YWwgRW5nYWdlbWVudFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIlJlLWFyY2hpdGVjdGVkIGxpZmVjeWNsZSBqb3VybmV5cyB0aGF0IGRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBhbmQgY29udmVydGVkIHJlZmVycmFsIGNvaG9ydHMgaW50byA2MEsrIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgICBmb2N1czogXCJSZXRlbnRpb24gJiBHcm93dGhcIixcbiAgICBwYXRoOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICB9LFxuXTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFJQSxJQUFNLGdDQUFnQyxHQUFHLGNBQTZDO0FBQUEsRUFDcEYsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUV2Qix1QkFDRSx1QkE4SUUsZUE5SUY7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLElBQUksUUFBUTtBQUFBLElBQ1osU0FBUyxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxJQUMxQixJQUFJLEVBQUUsVUFBVSxLQUFLLElBQUksUUFBUSxpQkFBaUIsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxJQUp4RSxVQThJRTtBQUFBLHNCQXhJQSx1QkFzQkUsZUF0QkY7QUFBQSxRQUFPLFNBQVM7QUFBQSxRQUFoQixVQXNCRTtBQUFBLFVBckJDLFFBQVEsMkJBQ1AsdUJBRUUsb0JBRkY7QUFBQSxZQUFZLFNBQVE7QUFBQSxZQUFVLE9BQU07QUFBQSxZQUFwQyxVQUNHLFFBQVE7QUFBQSxhQURYLGlDQUVFO0FBQUEsMEJBRUosdUJBQTBDLG9CQUExQztBQUFBLFlBQVksU0FBUTtBQUFBLFlBQXBCLFVBQTBCLFFBQVE7QUFBQSxhQUFsQyxpQ0FBMEM7QUFBQSxVQUN6QyxRQUFRLDJCQUNQLHVCQUVFLG9CQUZGO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBUSxPQUFNO0FBQUEsWUFBaUIsSUFBSSxFQUFFLFlBQVksS0FBSztBQUFBLFlBQTFFLFVBQ0csUUFBUTtBQUFBLGFBRFgsaUNBRUU7QUFBQSxVQUVILFFBQVEsTUFBTSxJQUFJLENBQUMsOEJBQ2xCLHVCQU9FLG9C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QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVyxhQUFhLHFDQUF3QjtBQUNsRDtBQUVPLElBQU0saUJBQXFDO0FBQUEsRUFDaEQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxtQkFBa0Q7QUFBQSxFQUM3RDtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGOyIsCiAgImRlYnVnSWQiOiAiNkNDRkUwREQ5QjgwQzk0RDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
