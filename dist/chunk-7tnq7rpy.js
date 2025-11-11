import {
  Pill_default,
  createImageResource
} from "./chunk-gbpa909n.js";
import {
  site_default
} from "./chunk-fvvawq8m.js";
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
} from "./chunk-a0eztsys.js";

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

// src/features/case-studies/hooks/useRelatedCaseStudies.ts
var import_react3 = __toESM(require_react(), 1);
var useRelatedCaseStudies = (entries, currentId) => import_react3.useMemo(() => entries.filter((entry) => entry.id !== currentId), [entries, currentId]);
var useRelatedCaseStudies_default = useRelatedCaseStudies;

// images/divar-secure-call-listing.png
var divar_secure_call_listing_default = "./divar-secure-call-listing-6ff2dx8n.png";

// images/setare-aval-interview-session.avif
var setare_aval_interview_session_default = "./setare-aval-interview-session-p9jcmw69.avif";

// src/features/case-studies/data/content.ts
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
  heroImage: createImageResource(import.meta.url, divar_secure_call_listing_default, "Divar secure call listings interface", { width: 1200, height: 630 })
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
  heroImage: createImageResource(import.meta.url, setare_aval_interview_session_default, "Setare Aval customer engagement interview session", { width: 1200, height: 630 })
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

// src/features/case-studies/seo.ts
var siteUrl = site_default();
var divarStructuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: divarOverview.title,
  description: divarOverview.subtitle ?? "Privacy-first calling experience that reduced harassment incidents by 60% for 2.1M Divar users.",
  author: {
    "@type": "Person",
    name: "Masih Sadri",
    url: siteUrl
  },
  url: `${siteUrl}/case-studies/divar-secure-call`,
  image: divarOverview.heroImage.src,
  keyword: ["Trust & Safety", "Harassment Reduction", "Marketplace"]
};
var divarCaseStudyMetadata = {
  title: "Divar Secure Call Case Study — Reducing Harassment by 60%",
  description: divarOverview.subtitle ?? "Privacy-first calling experience that reduced harassment incidents by 60% for 2.1M Divar users.",
  canonicalPath: "/case-studies/divar-secure-call",
  openGraph: {
    type: "article",
    image: {
      url: divarOverview.heroImage.src,
      alt: divarOverview.heroImage.alt,
      width: divarOverview.heroImage.width ?? 1200,
      height: divarOverview.heroImage.height ?? 630
    }
  },
  structuredData: divarStructuredData
};
var setareStructuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: setareOverview.title,
  description: "Lifecycle redesign that doubled retained revenue and turned referral cohorts into daily active users.",
  author: {
    "@type": "Person",
    name: "Masih Sadri",
    url: siteUrl
  },
  url: `${siteUrl}/case-studies/setare-aval-engagement`,
  image: setareOverview.heroImage.src,
  keyword: ["Retention", "Lifecycle", "Growth Design"]
};
var setareCaseStudyMetadata = {
  title: "Setare Aval Engagement Case Study — Doubling Retained Revenue",
  description: "How we re-architected Setare Aval's lifecycle to double retained revenue and convert referral cohorts into daily active users.",
  canonicalPath: "/case-studies/setare-aval-engagement",
  openGraph: {
    type: "article",
    image: {
      url: setareOverview.heroImage.src,
      alt: setareOverview.heroImage.alt,
      width: setareOverview.heroImage.width ?? 1200,
      height: setareOverview.heroImage.height ?? 630
    }
  },
  structuredData: setareStructuredData
};

export { SectionCard_default, CaseStudyOutlineNav_default, CaseStudyOverviewSection_default, CaseStudyRelatedSection_default, useCaseStudyNavigation_default, useRelatedCaseStudies_default, divarOverview, divarSections, setareOverview, setareSections, caseStudyEntries, divarCaseStudyMetadata, setareCaseStudyMetadata };

//# debugId=82FEDD047B390C6564756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvc2hhcmVkL3V0aWxzL3N4LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9jYXNlLXN0dWRpZXMvY29tcG9uZW50cy9DYXNlU3R1ZHlPdXRsaW5lTmF2LnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2NvbXBvbmVudHMvQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jYXNlLXN0dWRpZXMvaG9va3MvdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbi50cyIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZVJlbGF0ZWRDYXNlU3R1ZGllcy50cyIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgRGl2aWRlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50ID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgaWQ9e3NlY3Rpb24uaWR9XG4gICAgICBzcGFjaW5nPXt7IHhzOiAyLjUsIG1kOiAzIH19XG4gICAgICBzeD17eyBtYXhXaWR0aDogNzYwLCBteDogXCJhdXRvXCIsIHNjcm9sbE1hcmdpblRvcDogeyB4czogOTYsIG1kOiAxNDAgfSB9fVxuICAgID5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGguc2xpY2UoMCwgMzIpfVxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS43IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cblxuICAgICAge3NlY3Rpb24uYnVsbGV0cyAmJiAoXG4gICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezF9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtwb2ludH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cG9pbnR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5oaWdobGlnaHRzICYmIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCkgPT4gKFxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAga2V5PXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIGxhYmVsPXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjE2KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLm1ldHJpY3MgJiYgKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ubWV0cmljcy5tYXAoKG1ldHJpYykgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiBzZWN0aW9uLm1ldHJpY3MhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX0ga2V5PXttZXRyaWMubGFiZWx9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPnttZXRyaWMudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAge21ldHJpYy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHttZXRyaWMuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRyaWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5xdW90ZXMgJiYgc2VjdGlvbi5xdW90ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7c2VjdGlvbi5xdW90ZXMubWFwKChxdW90ZSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Ake3F1b3RlLmF1dGhvcn0tJHtxdW90ZS50ZXh0LnNsaWNlKDAsIDI0KX1gfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiwgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAg4oCce3F1b3RlLnRleHR94oCdXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge3F1b3RlLmF1dGhvcn0g4oCUIHtxdW90ZS5yb2xlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaW1hZ2UgJiYgKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICBzcmM9e3NlY3Rpb24uaW1hZ2Uuc3JjfVxuICAgICAgICAgIGFsdD17c2VjdGlvbi5pbWFnZS5hbHR9XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCAxOHB4IDI4cHggcmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgICAgIDogXCIwIDI0cHggNDBweCByZ2JhKDAsMCwwLDAuNDUpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxEaXZpZGVyIHN4PXt7IG10OiB7IHhzOiAzLCBtZDogNCB9IH19IC8+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gbWVtbyhcbiAgQ2FzZVN0dWR5U2VjdGlvbkNhcmRDb21wb25lbnQsXG4gIChwcmV2LCBuZXh0KSA9PiBwcmV2LnNlY3Rpb24gPT09IG5leHQuc2VjdGlvbixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNlY3Rpb25DYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBTeFByb3BzLCBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IGFwcGVuZCA9IDxUVGhlbWUgZXh0ZW5kcyBUaGVtZT4odGFyZ2V0OiBTeFByb3BzPFRUaGVtZT5bXSwgdmFsdWU/OiBTeFByb3BzPFRUaGVtZT4pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IGFwcGVuZCh0YXJnZXQsIGl0ZW0pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0YXJnZXQucHVzaCh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWVyZ2VTeCA9IDxUVGhlbWUgZXh0ZW5kcyBUaGVtZT4oXG4gIGJhc2U6IFN4UHJvcHM8VFRoZW1lPixcbiAgLi4ub3ZlcnJpZGVzOiBBcnJheTxTeFByb3BzPFRUaGVtZT4gfCB1bmRlZmluZWQ+XG4pOiBTeFByb3BzPFRUaGVtZT4gPT4ge1xuICBjb25zdCBlbnRyaWVzOiBTeFByb3BzPFRUaGVtZT5bXSA9IFtdO1xuICBhcHBlbmQoZW50cmllcywgYmFzZSk7XG4gIG92ZXJyaWRlcy5mb3JFYWNoKCh2YWx1ZSkgPT4gYXBwZW5kKGVudHJpZXMsIHZhbHVlKSk7XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGVudHJpZXNbMF0hO1xuICB9XG5cbiAgcmV0dXJuIGVudHJpZXMgYXMgU3hQcm9wczxUVGhlbWU+O1xufTtcblxuXG4iLAogICAgImltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgU3RhY2ssIFR5cG9ncmFwaHksIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lcmdlU3ggfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3N4XCI7XG5cbnR5cGUgQ2FzZVN0dWR5T3V0bGluZU5hdlByb3BzID0ge1xuICBzZWN0aW9uczogcmVhZG9ubHkgQ2FzZVN0dWR5U2VjdGlvbltdO1xuICBhY3RpdmVTZWN0aW9uSWQ6IHN0cmluZztcbiAgb25OYXZpZ2F0ZTogKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvdXRsaW5lTGFiZWw/OiBzdHJpbmc7XG4gIGNvbnRhaW5lclN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlPdXRsaW5lTmF2ID0gKHtcbiAgc2VjdGlvbnMsXG4gIGFjdGl2ZVNlY3Rpb25JZCxcbiAgb25OYXZpZ2F0ZSxcbiAgb3V0bGluZUxhYmVsID0gXCJPdXRsaW5lXCIsXG4gIGNvbnRhaW5lclN4LFxufTogQ2FzZVN0dWR5T3V0bGluZU5hdlByb3BzKSA9PiAoXG4gIDxTdGFja1xuICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgYXJpYS1sYWJlbD1cIkNhc2Ugc3R1ZHkgc2VjdGlvbnNcIlxuICAgIHNwYWNpbmc9ezF9XG4gICAgc3g9e21lcmdlU3goXG4gICAgICAodGhlbWU6IFRoZW1lKSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogeyBtZDogXCJzdGlja3lcIiB9LFxuICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNClcIlxuICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgICBjb250YWluZXJTeCxcbiAgICApfVxuICA+XG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAge291dGxpbmVMYWJlbH1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICAgPERpdmlkZXIgLz5cbiAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBvbk5hdmlnYXRlKGV2ZW50LCBzZWN0aW9uLmlkKX1cbiAgICAgICAgYXJpYS1jdXJyZW50PXthY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgc3g9eyh0aGVtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTIpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjgpXCJcbiAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgIHB4OiAxLjUsXG4gICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICkpfVxuICA8L1N0YWNrPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxuICB0eXBlIFN4UHJvcHMsXG4gIHR5cGUgVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeU92ZXJ2aWV3IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzID0ge1xuICBleWVicm93OiBzdHJpbmc7XG4gIG92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldztcbiAgc3VidGl0bGVGYWxsYmFjaz86IHN0cmluZztcbiAgbWV0YVRpdGxlPzogc3RyaW5nO1xuICBzdGF0c1RpdGxlPzogc3RyaW5nO1xuICBzdGF0c1ZhcmlhbnQ/OiBcImdyYWRpZW50XCIgfCBcIm91dGxpbmVkXCI7XG4gIGhlcm9CYWNrZHJvcFN4PzogU3hQcm9wczxUaGVtZT47XG4gIGhlcm9TdXJmYWNlU3g/OiBTeFByb3BzPFRoZW1lPjtcbiAgc3RhdHNDYXJkU3g/OiBTeFByb3BzPFRoZW1lPjtcbn07XG5cbmNvbnN0IGRlZmF1bHRIZXJvQmFja2Ryb3BTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGluc2V0OiAwLFxuICBib3JkZXJSYWRpdXM6IHsgeHM6IDI0LCBtZDogMzIgfSxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTgpKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjg4KSwgcmdiYSgzNiw2NCwxMjAsMC43MikpXCIsXG4gIGZpbHRlcjogXCJibHVyKDQ4cHgpXCIsXG4gIHpJbmRleDogLTEsXG59KTtcblxuY29uc3QgZGVmYXVsdEhlcm9TdXJmYWNlU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDksIDI1MSwgMjU1LCAwLjg4KVwiIDogXCJyZ2JhKDEzLCAyMCwgMzYsIDAuODgpXCIsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gIH1gLFxuICBib3hTaGFkb3c6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCIwIDI2cHggNTJweCByZ2JhKDM0LCA4NCwgMjU1LCAwLjE0KVwiXG4gICAgICA6IFwiMCAyNnB4IDUycHggcmdiYSgwLCAwLCAwLCAwLjQ1KVwiLFxuICBweDogeyB4czogMywgbWQ6IDQgfSxcbiAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG59KTtcblxuY29uc3QgZGVmYXVsdFN0YXRzQ2FyZFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjEyKSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTYsMjgsNTYsMC44KSwgcmdiYSgzNiw2NCwxMjAsMC42KSlcIixcbiAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgYm9yZGVyOiBcIm5vbmVcIixcbn0pO1xuXG5jb25zdCBvdXRsaW5lZFN0YXRzQ2FyZFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkyKVwiIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG59KTtcblxuY29uc3QgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uID0gKHtcbiAgZXllYnJvdyxcbiAgb3ZlcnZpZXcsXG4gIHN1YnRpdGxlRmFsbGJhY2ssXG4gIG1ldGFUaXRsZSA9IFwiUHJvamVjdCBkZXRhaWxzXCIsXG4gIHN0YXRzVGl0bGUsXG4gIHN0YXRzVmFyaWFudCA9IFwiZ3JhZGllbnRcIixcbiAgaGVyb0JhY2tkcm9wU3gsXG4gIGhlcm9TdXJmYWNlU3gsXG4gIHN0YXRzQ2FyZFN4LFxufTogQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzdGF0cyA9IG92ZXJ2aWV3LnN0YXRzO1xuICBjb25zdCByZXNvbHZlZFN0YXRzQ2FyZFN4ID1cbiAgICBzdGF0c1ZhcmlhbnQgPT09IFwiZ3JhZGllbnRcIiA/IGRlZmF1bHRTdGF0c0NhcmRTeCA6IG91dGxpbmVkU3RhdHNDYXJkU3g7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogMTAsIG1kOiAxNCB9IH19PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgPEJveCBzeD17bWVyZ2VTeChkZWZhdWx0SGVyb0JhY2tkcm9wU3gsIGhlcm9CYWNrZHJvcFN4KX0gLz5cblxuICAgICAgICA8Qm94IHN4PXttZXJnZVN4KGRlZmF1bHRIZXJvU3VyZmFjZVN4LCBoZXJvU3VyZmFjZVN4KX0+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiPntvdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIHsob3ZlcnZpZXcuc3VidGl0bGUgPz8gc3VidGl0bGVGYWxsYmFjaykgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fT5cbiAgICAgICAgICAgICAgICAgIHtvdmVydmlldy5zdWJ0aXRsZSA/PyBzdWJ0aXRsZUZhbGxiYWNrfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19IHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7bWV0YVRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgIHtvdmVydmlldy5tZXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCwgbXQ6IDAuNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICB7c3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgICAge3N0YXRzVGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRzVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmxlbmd0aCA+PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHhzOiAxMiwgc206IDQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMubGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgeHM6IDEyLCBzbTogNiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgeHM6IDEyLCBzbTogMTIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGVsZXZhdGlvbj17MH0gc3g9e21lcmdlU3gocmVzb2x2ZWRTdGF0c0NhcmRTeCwgc3RhdHNDYXJkU3gpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHR5cGUgU3hQcm9wcyxcbiAgdHlwZSBUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uUHJvcHMgPSB7XG4gIGV5ZWJyb3c6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc3R1ZGllczogcmVhZG9ubHkgQ2FzZVN0dWR5RW50cnlbXTtcbiAgcHJpbWFyeUN0YToge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2Vjb25kYXJ5Q3RhPzoge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2VjdGlvblN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0U2VjdGlvblN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQxLDI0NSwyNTUsMC44KSwgcmdiYSgyMjQsMjMzLDI1NSwwLjk0KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTMsMjAsMzMsMC45KSwgcmdiYSgyMSwzMSw1MiwwLjkyKSlcIixcbn0pO1xuXG5jb25zdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgc3R1ZGllcyxcbiAgcHJpbWFyeUN0YSxcbiAgc2Vjb25kYXJ5Q3RhLFxuICBzZWN0aW9uU3gsXG59OiBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXttZXJnZVN4KGRlZmF1bHRTZWN0aW9uU3gsIHNlY3Rpb25TeCl9PlxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiA2IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9IH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDcyMCwgbXg6IHsgeHM6IFwiYXV0b1wiLCBtZDogMCB9LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAge3N0dWRpZXMubWFwKChzdHVkeSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17c3R1ZHkuaWR9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICB0bz17c3R1ZHkucGF0aH1cbiAgICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGdhcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS50b2tlbnMudHJhbnNpdGlvbi5ob3Zlcn0sIHRyYW5zZm9ybSAxNjBtcyBlYXNlYCxcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdHVkeS5mb2N1c31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdHVkeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAge3N0dWR5LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGNhc2Ugc3R1ZHkg4oaSXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogMiwgc206IDMgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17cHJpbWFyeUN0YS50b31cbiAgICAgICAgICAgIHZhcmlhbnQ9e3ByaW1hcnlDdGEudmFyaWFudCA/PyBcImNvbnRhaW5lZFwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUN0YS5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17c2Vjb25kYXJ5Q3RhLnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PXtzZWNvbmRhcnlDdGEudmFyaWFudCA/PyBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlDdGEubGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB0eXBlIE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlTZWN0aW9uTGlzdCA9IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgZ2V0SW5pdGlhbFNlY3Rpb25JZCA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHNlY3Rpb25zWzBdPy5pZCA/PyBcIlwiO1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uID0gKHNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uTGlzdCkgPT4ge1xuICBjb25zdCBzZWN0aW9uSWRzID0gdXNlTWVtbygoKSA9PiBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHNlY3Rpb24uaWQpLCBbc2VjdGlvbnNdKTtcblxuICBjb25zdCBbYWN0aXZlU2VjdGlvbklkLCBzZXRBY3RpdmVTZWN0aW9uSWRdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uSWRzLmluY2x1ZGVzKGFjdGl2ZVNlY3Rpb25JZCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChnZXRJbml0aWFsU2VjdGlvbklkKHNlY3Rpb25zKSk7XG4gICAgfVxuICB9LCBbYWN0aXZlU2VjdGlvbklkLCBzZWN0aW9uSWRzLCBzZWN0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgc2VjdGlvbklkcy5pbmNsdWRlcyhoYXNoKSkge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGhhc2gpO1xuICAgIH1cbiAgfSwgW3NlY3Rpb25JZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnRzID0gc2VjdGlvbklkc1xuICAgICAgLm1hcCgoc2VjdGlvbklkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgY29uc3QgaGFuZGxlT3V0bGluZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZCh0YXJnZXRJZCk7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9IyR7dGFyZ2V0SWR9YDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4geyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdXNlUmVsYXRlZENhc2VTdHVkaWVzID0gKFxuICBlbnRyaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeUVudHJ5PixcbiAgY3VycmVudElkOiBDYXNlU3R1ZHlFbnRyeVtcImlkXCJdLFxuKSA9PlxuICB1c2VNZW1vKFxuICAgICgpID0+IGVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaWQgIT09IGN1cnJlbnRJZCksXG4gICAgW2VudHJpZXMsIGN1cnJlbnRJZF0sXG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcztcblxuXG4iLAogICAgImltcG9ydCBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9kaXZhci1zZWN1cmUtY2FsbC1saXN0aW5nLnBuZ1wiO1xuaW1wb3J0IHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLWludGVydmlldy1zZXNzaW9uLmF2aWZcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Fzc2V0c1wiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlFbnRyeSwgQ2FzZVN0dWR5T3ZlcnZpZXcsIENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRpdmFyT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIlNvbHZpbmcgSGFyYXNzbWVudCBhdCBTY2FsZTogSG93IEkgUHJvdGVjdGVkIDIuMU0gVXNlcnMgb24gSXJhbidzIExhcmdlc3QgTWFya2V0cGxhY2VcIixcbiAgc3VidGl0bGU6XG4gICAgXCJXZSByZWR1Y2VkIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJSBpbnNpZGUgRGl2YXLigJlzIGNsb3RoaW5nIGNhdGVnb3J5IGJ5IGJ1aWxkaW5nIGEgcHJpdmFjeS1maXJzdCBjYWxsaW5nIGV4cGVyaWVuY2UgdGhhdCBub3cgcHJvdGVjdHMgMi4xTSB3ZWVrbHkgdXNlcnMuXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiU2VuaW9yIFVYIERlc2lnbmVyIMK3IFRydXN0ICYgU2FmZXR5XCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIk1heSDigJMgSnVuZSAyMDIzXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRlYW1cIiwgdmFsdWU6IFwiRGVzaWduLCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIEVuZ2luZWVyaW5nLCBTdXBwb3J0XCIgfSxcbiAgXSxcbiAgc3RhdHM6IFtcbiAgICB7IHZhbHVlOiBcIuKWvDYwJVwiLCBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIiB9LFxuICAgIHsgdmFsdWU6IFwiMi4xTVwiLCBsYWJlbDogXCJXZWVrbHkgY2FsbGVycyBzYWZlZ3VhcmRlZFwiIH0sXG4gICAgeyB2YWx1ZTogXCLilrwxOCVcIiwgbGFiZWw6IFwiU2FmZXR5IHRpY2tldCB2b2x1bWVcIiB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgIGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCxcbiAgICBcIkRpdmFyIHNlY3VyZSBjYWxsIGxpc3RpbmdzIGludGVyZmFjZVwiLFxuICAgIHsgd2lkdGg6IDEyMDAsIGhlaWdodDogNjMwIH0sXG4gICksXG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJEaXZhciBpcyBJcmFu4oCZcyBsYXJnZXN0IGNsYXNzaWZpZWRzIG1hcmtldHBsYWNlIHdpdGggNTNNKyB3ZWVrbHkgdXNlcnMuIFRydXN0IGFuZCBzYWZldHkgaW5jaWRlbnRzIGNhbiBjb2xsYXBzZSBlbnRpcmUgcmV2ZW51ZSBjYXRlZ29yaWVzIGlmIGxlZnQgdW5jaGVja2VkLlwiLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHsgbGFiZWw6IFwiTWFya2V0cGxhY2Ugc2NhbGVcIiwgdmFsdWU6IFwiNTNNK1wiLCBkZXNjcmlwdGlvbjogXCJXZWVrbHkgYnV5ZXJzICYgc2VsbGVyc1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIlZvaWNlIGRlcGVuZGVuY2VcIiwgdmFsdWU6IFwiMi4xTVwiLCBkZXNjcmlwdGlvbjogXCJDYWxscyBwbGFjZWQgZXZlcnkgd2Vla1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIkFkIGNvbnN1bXB0aW9uXCIsIHZhbHVlOiBcIjZCK1wiLCBkZXNjcmlwdGlvbjogXCJNb250aGx5IGFkIHZpZXdzXCIgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ2xvdGhpbmcgbGlzdGluZ3PigJRtb3N0bHkgd29tZW4tbGVk4oCUd2VyZSBoaXQgaGFyZGVzdCBieSBhYnVzZS5cIixcbiAgICAgIFwiTWFudWFsIG1vZGVyYXRpb24gY291bGRu4oCZdCBrZWVwIHVwOyBsaXF1aWRpdHkgYW5kIHRydXN0IHdlcmUgaW4gZnJlZSBmYWxsLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjcmlzaXNcIixcbiAgICB0aXRsZTogXCJUaGUgQ3Jpc2lzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQ3VzdG9tZXIgY2FyZSBjZW50cmVzIHdlcmUgZmxvb2RlZCB3aXRoIGhhcmFzc21lbnQgcmVwb3J0cy4gU2VsbGVycyBkZWxldGVkIGxpc3RpbmdzIG9yIGNodXJuZWQgZW50aXJlbHksIGZlYXJpbmcgcmVwZWF0IGluY2lkZW50cy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkhhcmFzc2VycyBzY3JhcGVkIHBob25lIG51bWJlcnMgZnJvbSBhZHMgYW5kIGNpcmN1bGF0ZWQgdGhlbSBpbiBwcml2YXRlIFRlbGVncmFtIGdyb3Vwcy5cIixcbiAgICAgIFwiRXZlbiBhZnRlciB2aWN0aW1zIGRlbGV0ZWQgbGlzdGluZ3MsIHRoZSBjYWxscyBjb250aW51ZWQgYmVjYXVzZSBudW1iZXJzIHdlcmUgYWxyZWFkeSBleHBvc2VkLlwiLFxuICAgICAgXCJXaXRob3V0IGludGVydmVudGlvbiwgRGl2YXIgcmlza2VkIGxvc2luZyBhIGNhdGVnb3J5IHRoYXQgYW5jaG9yZWQgZGFpbHkgZW5nYWdlbWVudC5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiTGF5bGEsIDMyXCIsXG4gICAgICAgIHJvbGU6IFwiUHJvZmVzc2lvbmFsIGFydGlzdCBzZWxsaW5nIGJlc3Bva2UgY2xvdGhpbmdcIixcbiAgICAgICAgdGV4dDogXCJJdCB3YXMgaW5mdXJpYXRpbmcuIEkgdG9vayBkb3duIG15IERpdmFyIGFkIGhvcGluZyB0byBzdG9wIHRoZSBjYWxscywgYnV0IHRoZXkga2VwdCBjb21pbmcuIFNvbWVvbmUgdG9sZCBtZSBteSBudW1iZXIgd2FzIGluIGEgVGVsZWdyYW0gZ3JvdXAuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnZlc3RpZ2F0aW9uXCIsXG4gICAgdGl0bGU6IFwiRmluZGluZyB0aGUgUmVhbCBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBpbnRlcnZpZXdlZCBoYXJhc3NlZCBzZWxsZXJzIGFuZCBhbmFseXNlZCBiZWhhdmlvdXJhbCBkYXRhIHRvIHVuZGVyc3RhbmQgaG93IGV4cG9zdXJlIHNjYWxlZC4gVGhlIGJyZWFrdGhyb3VnaCBjYW1lIGZyb20gY29ubmVjdGluZyBxdWFsaXRhdGl2ZSBzdG9yaWVzIHRvIHF1YW50aXRhdGl2ZSBzaWduYWxzLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiUGF0dGVybnMgZW1lcmdlZCBxdWlja2x5OiBoYXJhc3NlcnMgc2F2ZWQgcG9zdGVkIG51bWJlcnMsIGNyb3NzLXJlZmVyZW5jZWQgdGhlbSBvbiBXaGF0c0FwcCBhbmQgSW5zdGFncmFtLCBhbmQgb25seSB0aGVuIGJlZ2FuIHRoZSBhYnVzZS4gRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBzdG9wcGVkIHNoYXJpbmcgbnVtYmVycyBhbmQgcmVsaWVkIG9uIGluLWFwcCBjaGF04oCUbmV3IHNlbGxlcnMgd2VyZSB0aGUgb25lcyBsZWZ0IGV4cG9zZWQuXCIsXG4gICAgICBcIlNhcmHigJlzIG1lbnRpb24gb2YgYSBjYWxsZXIgcmVmZXJlbmNpbmcgaGVyIGV5ZSBjb2xvciBjb25maXJtZWQgb3VyIGh5cG90aGVzaXM6IHNvY2lhbCBtZWRpYSBicmVhZGNydW1icyBtYWRlIGhhcmFzc21lbnQgcGVyc29uYWwgYW5kIGZyaWdodGVuaW5nLlwiLFxuICAgICAgXCJEYXRhIGFuYWx5c2lzIGJhY2tlZCB0aGUgcXVhbGl0YXRpdmUgd29yay4gVXNlcnMgd2hvc2UgcGhvbmUgbnVtYmVycyB3ZXJlIGxpbmtlZCB0byBwdWJsaWMgc29jaWFsIHByb2ZpbGVzIHJlcG9ydGVkIGhhcmFzc21lbnQgZHJhbWF0aWNhbGx5IG1vcmUgb2Z0ZW4uIFRob3NlIHdobyBzdHVjayB0byBpbi1hcHAgY2hhdCByYXJlbHkgZGlkLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJTYXJhLCAyNlwiLFxuICAgICAgICByb2xlOiBcIkZhc2hpb24gcmV0YWlsIHdvcmtlclwiLFxuICAgICAgICB0ZXh0OiBcIk9uZSBjYWxsZXIga25ldyBteSBleWUgY29sb3IuIFRoZXkgY2xlYXJseSBmb3VuZCBteSBJbnN0YWdyYW0gdGhyb3VnaCB0aGUgcGhvbmUgbnVtYmVyIG9uIERpdmFyLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlphaHJhLCAyOFwiLFxuICAgICAgICByb2xlOiBcIkZyZWVsYW5jZSBncmFwaGljIGRlc2lnbmVyXCIsXG4gICAgICAgIHRleHQ6IFwiSSBzdG9wcGVkIGxpc3RpbmcgbXkgcGhvbmUgbnVtYmVyLiBJdCBmZWx0IHVucHJvZmVzc2lvbmFsLCBidXQgaXQgd2FzIHRoZSBvbmx5IHdheSB0byBhdm9pZCBoYXJhc3NtZW50LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiUHVibGljIHBob25lIG51bWJlcnMgd2VyZSB0aGUgcm9vdCBjYXVzZSBvZiBleHBvc3VyZSwgbm90IHRoZSBudW1iZXIgb2YgcmVwb3J0cy5cIixcbiAgICAgIFwiRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBhZGFwdGVkIGJ5IHVzaW5nIGluLWFwcCBjaGF0OyBuZXcgc2VsbGVycyBuZWVkZWQgcHJvdGVjdGl2ZSBkZWZhdWx0cy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3RyYXRlZ3lcIixcbiAgICB0aXRsZTogXCJUaGUgU29sdXRpb24gSm91cm5leVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHJlZnJhbWVkIHN1Y2Nlc3MgZnJvbSDigJxyZWR1Y2UgcmVwb3J0c+KAnSB0byDigJxyZWR1Y2UgZXhwb3N1cmUu4oCdIFdpdGggVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBTdXBwb3J0LCBhbmQgRGF0YSwgd2UgZXZhbHVhdGVkIGV2ZXJ5IHBhdGggYW5kIHN0cmVzcy10ZXN0ZWQgZWRnZSBjYXNlcyBiZWZvcmUgY29tbWl0dGluZy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkVkdWNhdGluZyB1c2VycyBhYm91dCBoYXJhc3NlciB0YWN0aWNzIHdvdWxkIGVyb2RlIHRydXN0IGFuZCBkaXNjb3VyYWdlIGxpc3RpbmdzLlwiLFxuICAgICAgXCJGdWxsIFZvSVAgd2FzIGNvc3QtcHJvaGliaXRpdmUsIGZyYWdpbGUgYWNyb3NzIGRldmljZSB0eXBlcywgYW5kIGluYWNjZXNzaWJsZSB0byA0NyUgb2YgbGVnYWN5IEFuZHJvaWQgdXNlcnMuXCIsXG4gICAgICBcIlZvaWNlIHJlbGF5IHdpdGggaW50ZXJtZWRpYXJ5IG51bWJlcnMgcHJvdGVjdGVkIHNlbGxlcnMgd2l0aG91dCBjaGFuZ2luZyBwdXJjaGFzZSBiZWhhdmlvdXLigJR0aGlzIGJlY2FtZSB0aGUgbm9ydGggc3Rhci5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGVzdGluZ1wiLFxuICAgIHRpdGxlOiBcIlRlc3RpbmcgJiBMZWFybmluZyBmcm9tIEZhaWx1cmVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBIDMtZGF5IHBpbG90IGluIHRoZSBjbG90aGluZyBjYXRlZ29yeSByZXN1bHRlZCBpbiBhIDU2JSBjYWxsIGZhaWx1cmUgcmF0ZS4gSW5zdGVhZCBvZiByZXZlcnRpbmcsIHdlIHRyZWF0ZWQgZXZlcnkgZmFpbHVyZSBhcyBhIGRlc2lnbiByZXF1aXJlbWVudC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXIgYmVoYXZpb3VyOiBzZWxsZXJzIGJsb2NrZWQgdW5mYW1pbGlhciBudW1iZXJzOyBidXllcnMgcmVkaWFsbGVkIGZyb20gY2FsbCBsb2dzOyByZXBlYXQgY29udmVyc2F0aW9ucyBicm9rZSBtYXBwaW5nIHdpbmRvd3MuXCIsXG4gICAgICBcIlRlY2huaWNhbCBsb2FkOiBjYWxsIHZvbHVtZSBzcGlrZWQgYmV5b25kIGZvcmVjYXN0cyBhbmQgbnVtYmVyIHBvb2xzIHdlcmUgZXhoYXVzdGVkLlwiLFxuICAgICAgXCJCdXNpbmVzcyByaXNrOiBsb25nZXIgY2FsbHMgaW5mbGF0ZWQgdGVsZWNvbSBjb3N0cyBhbmQgYW5vbnltaXNlZCBudW1iZXJzIGF0dHJhY3RlZCBvcHBvcnR1bmlzdGljIHNjYW1tZXJzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZpbmVtZW50XCIsXG4gICAgdGl0bGU6IFwiVGhlIFJlZmluZWQgU29sdXRpb25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJXZSB0cmFuc2xhdGVkIGV2ZXJ5IHBpbG90IGluc2lnaHQgaW50byBwcm9kdWN0IGFuZCBwbGF0Zm9ybSBpbXByb3ZlbWVudHMgYmVmb3JlIHNjYWxpbmcgbmF0aW9ud2lkZS5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkJpZGlyZWN0aW9uYWwgbWFwcGluZyBsZXQgc2VsbGVycyByZWNvbm5lY3Qgd2l0aG91dCBleHBvc2luZyByZWFsIG51bWJlcnMuXCIsXG4gICAgICBcIkV4dGVuZGVkIG1hcHBpbmcgd2luZG93cyBmcm9tIDIwIHNlY29uZHMgdG8gMTUgbWludXRlcyByZWR1Y2VkIGRyb3BwZWQgY2FsbHMuXCIsXG4gICAgICBcIlZvaWNlIHByb21wdHMgKOKAnFRoaXMgaXMgYSBzZWN1cmUgY2FsbCBmcm9tIERpdmFy4oCm4oCdKSBzZXQgZXhwZWN0YXRpb25zIGFuZCBkZXRlcnJlZCBzY2FtbWVycy5cIixcbiAgICAgIFwiQSBwb29sIG9mIDEwMCBpbnRlcm1lZGlhcnkgbnVtYmVycyBhc3NpZ25lZCBwZXIgYnV5ZXItc2VsbGVyIHBhaXIgcHJldmVudGVkIHJldXNlIGFuZCBibG9ja2luZy5cIixcbiAgICAgIFwiU2VjdXJlIGNhbGwgaGlzdG9yeSwgY2hhdCBpbnRlZ3JhdGlvbiwgYW5kIGFkIG1hbmFnZW1lbnQgbG9ncyBrZXB0IGxlZ2l0aW1hdGUgcmVsYXRpb25zaGlwcyBpbnRhY3QuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImltcGFjdFwiLFxuICAgIHRpdGxlOiBcIkltcGFjdFwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQWZ0ZXIgcm9sbG91dCwgaGFyYXNzbWVudCByZXBvcnRzIGRyb3BwZWQgZHJhbWF0aWNhbGx5IGFuZCBzZWxsZXJzIGZlbHQgc2FmZSBlbm91Z2ggdG8ga2VlcCBsaXN0aW5ncyBsaXZlLiBNb2RlcmF0aW9uIHRlYW1zIHJlY292ZXJlZCBob3VycyBlYWNoIHdlZWsgdGhhdCB3ZXJlIHByZXZpb3VzbHkgc3BlbnQgb24gcmVhY3RpdmUgdGlja2V0cy5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCA2MCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDggd2Vla3Mgb2YgbGF1bmNoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBZCBkZWxldGlvbnNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDI1JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGZXdlciBzZWxsZXJzIGxlYXZpbmcgdGhlIHBsYXRmb3JtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTdXBwb3J0IHRpY2tldHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDE4JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb3JlIHRpbWUgZm9yIHByb2FjdGl2ZSBtb25pdG9yaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgb2J2aW91cyBwcm9ibGVtIGlzIHJhcmVseSB0aGUgcmVhbCBvbmXigJRleHBvc3VyZSwgbm90IHJlcG9ydHMsIHdhcyB0aGUgcm9vdC5cIixcbiAgICAgIFwiVXNlcnMgd2VyZSBhbHJlYWR5IGRlc2lnbmluZyB3b3JrYXJvdW5kczsgb2JzZXJ2aW5nIHRoZW0gcmV2ZWFsZWQgdGhlIHJpZ2h0IGRlZmF1bHRzLlwiLFxuICAgICAgXCJGYWlsdXJlIGlzIHNpZ25hbC4gVGhlIDU2JSBwaWxvdCBmYWlsdXJlIGdlbmVyYXRlZCBhIGJhY2tsb2cgb2YgYWN0aW9uYWJsZSByZXF1aXJlbWVudHMuXCIsXG4gICAgICBcIlBhaXIgcXVhbGl0YXRpdmUgaW5zaWdodCB3aXRoIHJlYWwtdGltZSBtb25pdG9yaW5nIHRvIGtlZXAgYWJ1c2UgdmVjdG9ycyBpbiBjaGVjay5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVmbGVjdGlvblwiLFxuICAgIHRpdGxlOiBcIlJlZmxlY3Rpb25cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlRoaXMgcHJvamVjdCByZWluZm9yY2VkIG15IGJlbGllZiB0aGF0IHNvbHZpbmcgaGFyZCBwcm9ibGVtcyBzdGFydHMgd2l0aCB1bmRlcnN0YW5kaW5nIGJlaGF2aW91ci4gQnkgYmxlbmRpbmcgcmVzZWFyY2gsIGRhdGEsIGFuZCByYXBpZCBpdGVyYXRpb24sIHdlIGJ1aWx0IGEgc2FmZXR5IGxheWVyIHRoYXQgc3RpbGwgcHJvdGVjdHMgbWlsbGlvbnMgb2YgcGVvcGxlIGVhY2ggd2Vlay4gVGhlIGhhcmFzc21lbnQgcHJvYmxlbSBtYXkgbmV2ZXIgZGlzYXBwZWFyIGVudGlyZWx5LCBidXQgRGl2YXIgaXMgc2lnbmlmaWNhbnRseSBzYWZlciBmb3IgdGhlIHVzZXJzIHdobyBuZWVkIGl0IG1vc3QuXCIsXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVycyBhdCBTZXRhcmUgQXZhbFwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlByb2R1Y3QgRGVzaWduZXJcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiRmViIDIwMjEg4oCTIEphbiAyMDIyXCIgfSxcbiAgICB7IGxhYmVsOiBcIkltcGFjdFwiLCB2YWx1ZTogXCJEb3VibGVkIHJldGFpbmVkIHJldmVudWUgaW4gNiBtb250aHNcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgbGFiZWw6IFwiUmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWNoaWV2ZWQgd2l0aGluIHRoZSBmaXJzdCA2IG1vbnRocyBvZiByb2xsb3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICBsYWJlbDogXCJEYWlseSBhY3RpdmUgdXNlcnNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIGNvaG9ydCBjb252ZXJ0ZWQgdG8gaGlnaC1pbnRlbnQgREFVc1wiLFxuICAgIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgc2V0YXJlQXZhbEludGVydmlld0Fzc2V0LFxuICAgIFwiU2V0YXJlIEF2YWwgY3VzdG9tZXIgZW5nYWdlbWVudCBpbnRlcnZpZXcgc2Vzc2lvblwiLFxuICAgIHsgd2lkdGg6IDEyMDAsIGhlaWdodDogNjMwIH0sXG4gICksXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNvbnRleHRcIixcbiAgICB0aXRsZTogXCJDb250ZXh0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2V0YXJlIEF2YWwgaXMgdGhlIGRpZ2l0YWwgYXJtIG9mIElyYW4ncyBsYXJnZXN0IHRlbGVjb20uIFdlIHBvd2VyZWQgZmludGVjaCBzZXJ2aWNlcywgVVNTRCBleHBlcmllbmNlcywgYW5kIG1vYmlsZSB2YWx1ZS1hZGRlZCBzZXJ2aWNlcyBuYXRpb24td2lkZS4gR3Jvd3RoIGhhZCBwbGF0ZWF1ZWTigJRvdXIgZnVubmVsIGxlYWtlZCBhZnRlciB0aGUgZmlyc3QgcHVyY2hhc2UuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIEJhc2VcIixcbiAgICAgICAgdmFsdWU6IFwiNjBLK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEYWlseSBzdWJzY3JpYmVycyBhY3Jvc3MgbmF0aW9ud2lkZSBzZXJ2aWNlc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0ZW50aW9uIEdvYWxcIixcbiAgICAgICAgdmFsdWU6IFwieDJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRG91YmxlIDkwLWRheSByZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjaGFsbGVuZ2VcIixcbiAgICB0aXRsZTogXCJDaGFsbGVuZ2VcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkFjdGl2YXRpb24gZmxvdyB0cmVhdGVkIGV2ZXJ5IHNlZ21lbnQgaWRlbnRpY2FsbHksIGlnbm9yaW5nIHVzYWdlIGludGVudC5cIixcbiAgICAgIFwiUmVmZXJyYWwgbG9vcHMgZXhpc3RlZCBidXQgd2VyZSB1bnJld2FyZGluZ+KAlHVzZXJzIGNodXJuZWQgYWZ0ZXIgZmlyc3QgYmVuZWZpdC5cIixcbiAgICAgIFwiVGVhbXMgc2hpcHBlZCBpbiBzaWxvczsgbm8gc2hhcmVkIGV4cGVyaW1lbnQgY2FkZW5jZSBvciBzdWNjZXNzIG1ldHJpY3MuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc2lnaHRzXCIsXG4gICAgdGl0bGU6IFwiV2hhdCBXZSBMZWFybmVkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhyb3VnaCBpbnRlcnZpZXdzLCBmdW5uZWwgYW5hbHl0aWNzLCBhbmQgc2VydmljZS1ibHVlcHJpbnQgbWFwcGluZywgd2Ugc3VyZmFjZWQgdGhlIHVuZGVybHlpbmcgYmxvY2tlcnMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJVc2VycyB3YW50ZWQgdGFuZ2libGUgbWlsZXN0b25lc+KAlHdpdGhvdXQgdGhlbSwgdGhlIHByb2R1Y3QgZmVsdCB0cmFuc2FjdGlvbmFsLlwiLFxuICAgICAgXCJIaWdoLWludGVudCBjb2hvcnRzIHJlc3BvbmRlZCB0byBlZHVjYXRpb25hbCBudWRnZXMgbW9yZSB0aGFuIHByb21vdGlvbnMuXCIsXG4gICAgICBcIkludGVybmFsIHRlYW1zIGxhY2tlZCB2aXNpYmlsaXR5IGludG8gZXhwZXJpbWVudCBvdXRjb21lcywgc2xvd2luZyBpdGVyYXRpb24uXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNvbHV0aW9uXCIsXG4gICAgdGl0bGU6IFwiRXhwZXJpZW5jZSBSZS1BcmNoaXRlY3R1cmVcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkludHJvZHVjZWQgbGlmZWN5Y2xlIG1lc3NhZ2luZyB0YWlsb3JlZCB0byBpbnRlbnQgKGV4cGxvcmVycywgZWFybmVycywgbG95YWxpc3RzKS5cIixcbiAgICAgIFwiU2hpcHBlZCBhIGdhbWlmaWVkIHJlZmVycmFsIGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVkIHByb2dyZXNzIGFuZCB1bmxvY2tlZCB0aWVyZWQgcmV3YXJkcy5cIixcbiAgICAgIFwiU3Rvb2QgdXAgYSBjcm9zcy1mdW5jdGlvbmFsIGdyb3d0aCBndWlsZCB3aXRoIGEgMi13ZWVrIGV4cGVyaW1lbnQgY2FkZW5jZS5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0YWluZWQgUmV2ZW51ZVwiLFxuICAgICAgICB2YWx1ZTogXCIyw5dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDYgbW9udGhzIG9mIHN0YWdlZCByb2xsb3V0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEYWlseSBBY3RpdmUgVXNlcnNcIixcbiAgICAgICAgdmFsdWU6IFwiKzYwS1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWZlcnJhbCBwcm9ncmFtIHBhcnRpY2lwYW50cyBiZWNhbWUgZGFpbHkgYWN0aXZlc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicm9sZVwiLFxuICAgIHRpdGxlOiBcIk15IFJvbGVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIG9wZXJhdGVkIGFzIHRoZSBlbmQtdG8tZW5kIHByb2R1Y3QgZGVzaWduZXIsIGJyaWRnaW5nIHByb2R1Y3QsIG1hcmtldGluZywgY3VzdG9tZXIgc3VjY2VzcywgYW5kIGVuZ2luZWVyaW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiUmFuIHdlZWtseSBjby1jcmVhdGlvbiByaXR1YWxzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBvbiBleHBlcmltZW50IHByaW9yaXRpZXMuXCIsXG4gICAgICBcIkVzdGFibGlzaGVkIGRlc2lnbiBzeXN0ZW0gZm91bmRhdGlvbnMgYWRvcHRlZCBieSB0ZWFtcyBiZXlvbmQgZ3Jvd3RoLlwiLFxuICAgICAgXCJTZXQgdXAgYW5hbHl0aWNzIGRhc2hib2FyZHMgdGhhdCBwYWlyZWQgcXVhbGl0YXRpdmUgbm90ZXMgd2l0aCBmdW5uZWwgS1BJcy5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBHcm93dGhcIixcbiAgICAgICAgcm9sZTogXCJTZXRhcmUgQXZhbFwiLFxuICAgICAgICB0ZXh0OiBcIk1hc2loIGhlbHBlZCB1cyBzaGlmdCBmcm9tIG9uZS1vZmYgY2FtcGFpZ25zIHRvIGEgcHJvZHVjdCBtaW5kc2V0LiBUaGUgbGlmZWN5Y2xlIG1vZGVsIGFuZCBleHBlcmltZW50IGNhZGVuY2Ugc3RpbGwgZ3VpZGUgaG93IHdlIGJ1aWxkIHRvZGF5LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkeUVudHJpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5RW50cnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICB0aXRsZTogXCJEaXZhciBTZWN1cmUgQ2FsbFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIlJlZHVjZWQgaGFyYXNzbWVudCBieSA2MCUgZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMgdGhyb3VnaCBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBsYXllciBpbnNpZGUgSXJhbuKAmXMgbGFyZ2VzdCBtYXJrZXRwbGFjZS5cIixcbiAgICBmb2N1czogXCJUcnVzdCAmIFNhZmV0eVwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlNldGFyZSBBdmFsIEVuZ2FnZW1lbnRcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJSZS1hcmNoaXRlY3RlZCBsaWZlY3ljbGUgam91cm5leXMgdGhhdCBkb3VibGVkIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnRlZCByZWZlcnJhbCBjb2hvcnRzIGludG8gNjBLKyBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gICAgZm9jdXM6IFwiUmV0ZW50aW9uICYgR3Jvd3RoXCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBkaXZhck92ZXJ2aWV3LCBzZXRhcmVPdmVydmlldyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBkaXZhclN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IGRpdmFyT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbGAsXG4gIGltYWdlOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlRydXN0ICYgU2FmZXR5XCIsIFwiSGFyYXNzbWVudCBSZWR1Y3Rpb25cIiwgXCJNYXJrZXRwbGFjZVwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBkaXZhckNhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsIENhc2UgU3R1ZHkg4oCUIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBkaXZhclN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiTGlmZWN5Y2xlIHJlZGVzaWduIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCB0dXJuZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRgLFxuICBpbWFnZTogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUmV0ZW50aW9uXCIsIFwiTGlmZWN5Y2xlXCIsIFwiR3Jvd3RoIERlc2lnblwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50IENhc2UgU3R1ZHkg4oCUIERvdWJsaW5nIFJldGFpbmVkIFJldmVudWVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBsaWZlY3ljbGUgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAgICAgIGFsdDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IHNldGFyZVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7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QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxpQkFBb0M7QUFBQSxFQUMvQyxPQUNFO0FBQUEsRUFDRixNQUFNO0FBQUEsSUFDSixFQUFFLE9BQU8sUUFBUSxPQUFPLG1CQUFtQjtBQUFBLElBQzNDLEVBQUUsT0FBTyxZQUFZLE9BQU8sc0JBQXFCO0FBQUEsSUFDakQsRUFBRSxPQUFPLFVBQVUsT0FBTyx1Q0FBdUM7QUFBQSxFQUNuRTtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXLG9CQUNULFlBQVksS0FDWix1Q0FDQSxxREFDQSxFQUFFLE9BQU8sTUFBTSxRQUFRLElBQUksQ0FDN0I7QUFDRjtBQUVPLElBQU0saUJBQXFDO0FBQUEsRUFDaEQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxtQkFBa0Q7QUFBQSxFQUM3RDtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGOzs7QUNoU0EsSUFBTSxVQUFVLGFBQVc7QUFFM0IsSUFBTSxzQkFBc0M7QUFBQSxFQUMxQyxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNLGNBQWM7QUFBQSxFQUNwQixhQUNFLGNBQWMsWUFDZDtBQUFBLEVBQ0YsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLEtBQUssR0FBRztBQUFBLEVBQ1IsT0FBTyxjQUFjLFVBQVU7QUFBQSxFQUMvQixTQUFTLENBQUMsa0JBQWtCLHdCQUF3QixhQUFhO0FBQ25FO0FBRU8sSUFBTSx5QkFBdUM7QUFBQSxFQUNsRCxPQUFPO0FBQUEsRUFDUCxhQUNFLGNBQWMsWUFDZDtBQUFBLEVBQ0YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLFVBQVU7QUFBQSxNQUM3QixLQUFLLGNBQWMsVUFBVTtBQUFBLE1BQzdCLE9BQU8sY0FBYyxVQUFVLFNBQVM7QUFBQSxNQUN4QyxRQUFRLGNBQWMsVUFBVSxVQUFVO0FBQUEsSUFDNUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7QUFFQSxJQUFNLHVCQUF1QztBQUFBLEVBQzNDLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULE1BQU0sZUFBZTtBQUFBLEVBQ3JCLGFBQ0U7QUFBQSxFQUNGLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxLQUFLLEdBQUc7QUFBQSxFQUNSLE9BQU8sZUFBZSxVQUFVO0FBQUEsRUFDaEMsU0FBUyxDQUFDLGFBQWEsYUFBYSxlQUFlO0FBQ3JEO0FBRU8sSUFBTSwwQkFBd0M7QUFBQSxFQUNuRCxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLGVBQWUsVUFBVTtBQUFBLE1BQzlCLEtBQUssZUFBZSxVQUFVO0FBQUEsTUFDOUIsT0FBTyxlQUFlLFVBQVUsU0FBUztBQUFBLE1BQ3pDLFFBQVEsZUFBZSxVQUFVLFVBQVU7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjsiLAogICJkZWJ1Z0lkIjogIjgyRkVERDA0N0IzOTBDNjU2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
