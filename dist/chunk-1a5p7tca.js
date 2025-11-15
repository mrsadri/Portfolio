import {
  Pill_default,
  createImageResource
} from "./chunk-rwk54k0r.js";
import {
  site_default
} from "./chunk-4q5mgts6.js";
import {
  Box_default,
  Button_default,
  Card_default,
  Collapse_default,
  Container_default,
  Divider_default,
  Grid_default,
  Grid_default1 as Grid_default2,
  IconButton_default,
  Link,
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  require_react,
  useMediaQuery_default,
  useTheme
} from "./chunk-pzn0e5q4.js";

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
        spacing: { xs: 1.5, md: 1 },
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
            sx: {
              lineHeight: { xs: 1.7, md: 1.65 },
              mb: { xs: 1, md: 0 }
            },
            children: section.summary
          }, undefined, false, undefined, this),
          section.body?.map((paragraph, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: {
              lineHeight: { xs: 1.7, md: 1.65 },
              mb: index < section.body.length - 1 ? { xs: 2, md: 1.5 } : 0
            },
            children: paragraph
          }, paragraph.slice(0, 32), false, undefined, this))
        ]
      }, undefined, true, undefined, this),
      section.bullets && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        component: "ul",
        spacing: 1.5,
        sx: { pl: 2, mb: 0 },
        children: section.bullets.map((point) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
          component: "li",
          variant: "body1",
          color: "text.secondary",
          sx: { lineHeight: { xs: 1.7, md: 1.65 } },
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

// node_modules/@mui/icons-material/esm/ExpandMoreRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ExpandMoreRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"
}), "ExpandMoreRounded");

// src/features/case-studies/components/CaseStudyOutlineNav.tsx
var import_react2 = __toESM(require_react(), 1);

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
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery_default(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = import_react2.useState(!isMobile);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
    component: "nav",
    "aria-label": "Case study sections",
    spacing: 1,
    sx: mergeSx((theme2) => ({
      position: { md: "sticky" },
      top: { md: 140 },
      borderRadius: theme2.tokens.radius.surface,
      backgroundColor: theme2.palette.mode === "light" ? "rgba(34,84,255,0.04)" : "rgba(34,84,255,0.14)",
      px: { xs: 2, md: 2.5 },
      py: { xs: 2, md: 2.5 },
      border: `1px solid ${theme2.palette.mode === "light" ? "rgba(34,84,255,0.18)" : "rgba(98,132,218,0.32)"}`
    }), containerSx),
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: { cursor: isMobile ? "pointer" : "default" },
        onClick: () => isMobile && setExpanded(!expanded),
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
            variant: "overline",
            color: "text.secondary",
            children: outlineLabel
          }, undefined, false, undefined, this),
          isMobile && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IconButton_default, {
            size: "small",
            onClick: (e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            },
            sx: {
              minWidth: 44,
              minHeight: 44,
              transition: "transform 0.2s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)"
            },
            "aria-label": expanded ? "Collapse outline" : "Expand outline",
            "aria-expanded": expanded,
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ExpandMoreRounded_default, {}, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Collapse_default, {
        in: expanded,
        timeout: "auto",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Divider_default, {
            sx: { mb: 1 }
          }, undefined, false, undefined, this),
          sections.map((section) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Button_default, {
            component: "a",
            href: `#${section.id}`,
            variant: "text",
            size: "small",
            onClick: (event) => {
              onNavigate(event, section.id);
              if (isMobile) {
                setExpanded(false);
              }
            },
            "aria-current": activeSectionId === section.id ? "true" : undefined,
            sx: (theme2) => {
              const isActive = activeSectionId === section.id;
              return {
                justifyContent: "flex-start",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? theme2.palette.mode === "light" ? theme2.palette.primary.main : theme2.palette.brand.secondary : theme2.palette.mode === "light" ? theme2.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
                backgroundColor: isActive ? theme2.palette.mode === "light" ? "rgba(34,84,255,0.12)" : "rgba(98,132,218,0.28)" : "transparent",
                borderRadius: theme2.tokens.radius.surface,
                px: 1.5,
                py: 1,
                minHeight: 44,
                transition: theme2.tokens.transition.hover,
                "&:hover": {
                  backgroundColor: theme2.palette.mode === "light" ? "rgba(34,84,255,0.16)" : "rgba(98,132,218,0.24)"
                }
              };
            },
            children: section.title
          }, section.id, false, undefined, this))
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
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
var import_react3 = __toESM(require_react(), 1);
var isBrowser = typeof window !== "undefined";
var getInitialSectionId = (sections) => sections[0]?.id ?? "";
var useCaseStudyNavigation = (sections) => {
  const sectionIds = import_react3.useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeSectionId, setActiveSectionId] = import_react3.useState(() => getInitialSectionId(sections));
  import_react3.useEffect(() => {
    if (!sectionIds.includes(activeSectionId)) {
      setActiveSectionId(getInitialSectionId(sections));
    }
  }, [activeSectionId, sectionIds, sections]);
  import_react3.useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActiveSectionId(hash);
    }
  }, [sectionIds]);
  import_react3.useEffect(() => {
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
  const handleOutlineClick = import_react3.useCallback((event, targetId) => {
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
var import_react4 = __toESM(require_react(), 1);
var useRelatedCaseStudies = (entries, currentId) => import_react4.useMemo(() => entries.filter((entry) => entry.id !== currentId), [entries, currentId]);
var useRelatedCaseStudies_default = useRelatedCaseStudies;

// images/divar-secure-call-listing.png
var divar_secure_call_listing_default = "./divar-secure-call-listing-6ff2dx8n.png";

// images/setare-aval-interview-session.avif
var setare_aval_interview_session_default = "./setare-aval-interview-session-p9jcmw69.avif";

// images/setare-aval-user-flow.webp
var setare_aval_user_flow_default = "./setare-aval-user-flow-vk00xagm.webp";

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
var setareYekOverview = {
  title: "From 4% to 47%: How I Turned a Failing Feature Into a Core Product Value",
  subtitle: "Led end-to-end redesign of SetareYek's bill payment experience, increasing adoption from 4% to 47% through user research, strategic design, and cross-functional collaboration.",
  meta: [
    { label: "Role", value: "Senior Product Designer · End-to-End Lead" },
    { label: "Timeline", value: "2022 – 2023 (12 months)" },
    { label: "Company", value: "Setare Aval (SetareYek app)" },
    { label: "Team", value: "Product, Engineering, Research, Support, Legal" }
  ],
  stats: [
    {
      value: "4% → 47%",
      label: "Bill payment adoption",
      description: "10x growth in bill payment share of total payments"
    },
    {
      value: "1M+",
      label: "App downloads",
      description: "SetareYek on Google Play Store with 4.2+ rating"
    },
    {
      value: "80%",
      label: "Drop reduction",
      description: "After fixing performance issues in Version 2"
    }
  ],
  heroImage: createImageResource(import.meta.url, setare_aval_user_flow_default, "SetareYek bill payment user flow", { width: 1200, height: 630 })
};
var setareYekSections = [
  {
    id: "context",
    title: "The Business Problem",
    summary: "SetareYek had a bill payment feature that only 4% of users adopted, despite serving over 1 million active users. As the sole designer on this project, I was tasked with understanding why users avoided this critical feature and redesigning it to drive adoption and recurring engagement.",
    body: [
      "Setare Aval's SetareYek app serves over 1 million Iranian users with financial services including mobile recharges, internet packages, utility bill payments, transportation tickets, and health services. Bill payment represented a strategic opportunity: it's a high-frequency, recurring transaction that could drive monthly user engagement and increase lifetime value.",
      "However, analytics showed that only 4% of payments were bill-related—users actively avoided the feature despite having millions of active users. Session recordings revealed users were trying but failing to complete bill payments, indicating a fundamental UX problem rather than a lack of demand."
    ],
    metrics: [
      {
        label: "Business opportunity",
        value: "High-frequency",
        description: "Monthly recurring transaction for every household"
      },
      {
        label: "Initial adoption",
        value: "4%",
        description: "Bill payments as share of total payments"
      },
      {
        label: "User base",
        value: "1M+",
        description: "Active users on SetareYek platform"
      }
    ],
    highlights: [
      "Strategic business goal: Transform bill payment into a core value proposition driving recurring engagement.",
      "Clear problem: Users were trying but failing—indicating a UX problem, not lack of demand.",
      "Solo designer constraint: Required balancing deep research with rapid execution."
    ]
  },
  {
    id: "about-setareyek",
    title: "What is SetareYek?",
    summary: "SetareYek is Setare Aval's flagship mobile application—a comprehensive financial services platform that has become essential to daily life for over 1 million Iranian users.",
    body: [
      "SetareYek serves as a one-stop digital platform for essential financial and telecommunication services. Users can purchase mobile recharges and internet packages for major Iranian operators (MCI, Irancell, Rightel), pay utility bills (water, electricity, gas), buy transportation tickets (train, bus, plane), book hotels, access health services, pay car violations and freeway tolls, and perform card-to-card money transfers.",
      "What makes SetareYek significant is its role in modernizing Iran's financial services landscape. By eliminating intermediaries and providing direct access to services, SetareYek has streamlined processes that previously required multiple apps, physical visits, or phone calls. This consolidation saves users time, reduces friction, and creates a more efficient digital economy.",
      "The app's rewards system—where users earn points with every transaction—fosters loyalty and engagement. Users can participate in lotteries with prizes ranging from cash rewards to vehicles like the Peugeot 206. But more importantly, SetareYek has positioned itself as a critical infrastructure for everyday financial transactions, making it indispensable to millions of households across Iran.",
      "For Setare Aval, bill payment wasn't just another feature—it was a strategic opportunity. Bill payment is a high-frequency, recurring transaction that every household needs monthly. If we could solve it well, we'd create a habit that brings users back regularly, increasing lifetime value and platform stickiness. This is why fixing bill payment adoption wasn't just about improving a feature—it was about transforming SetareYek from a utility app into an essential daily companion."
    ],
    highlights: [
      "Comprehensive platform: 10+ service categories in one app",
      "Market leader: Direct sales channel eliminating intermediaries",
      "Daily essential: Critical infrastructure for household financial management",
      "Strategic importance: Bill payment drives recurring engagement and platform stickiness"
    ],
    metrics: [
      {
        label: "App downloads",
        value: "1M+",
        description: "Google Play Store with 4.2+ star rating"
      },
      {
        label: "User reviews",
        value: "25K+",
        description: "Positive feedback from active users"
      },
      {
        label: "Service categories",
        value: "10+",
        description: "Mobile recharge, bills, transportation, health, and more"
      },
      {
        label: "Company growth",
        value: "6 → 140+",
        description: "Employees since 2016 founding"
      }
    ]
  },
  {
    id: "challenge",
    title: "Understanding the Problem",
    summary: "I analyzed quantitative data and qualitative user behavior to identify the root causes preventing bill payment adoption.",
    body: [
      "I started by analyzing session recordings, funnel analytics, and drop-off patterns. The data told a clear story: 96% of payments were not bills—users actively avoided the feature. High drop-off rates occurred at specific steps, users spent unusually long on single screens indicating confusion, and many abandoned attempts before reaching payment confirmation.",
      "This raised a critical question: People pay bills every month—it's not optional. So why were they avoiding our app? The answer wasn't in the data alone; I needed to understand the human context behind these numbers."
    ],
    bullets: [
      "96% of payments were not bills—users actively avoided the feature despite having it available.",
      "High drop-off rates at specific steps in the payment flow.",
      "Users spending 2-3x average time on single screens, indicating confusion and hesitation.",
      "40%+ abandonment rate before reaching payment confirmation."
    ],
    highlights: [
      "Data revealed users were trying but failing—indicating a UX problem, not lack of demand.",
      "Quantitative analysis alone wasn't enough; I needed qualitative research to understand why."
    ]
  },
  {
    id: "discovery",
    title: "My Research Approach",
    summary: "I led a multi-method research initiative combining qualitative interviews, contextual inquiry, ethnographic observation, and quantitative analysis to uncover the real user needs.",
    body: [
      "As the sole designer, I owned the entire research process. I conducted 15+ in-depth interviews with building managers, heads of households, and everyday users. Through contextual inquiry, I observed users in their natural environments—like watching a building manager maintain his physical notebook where he tracked bills and receipts. This ethnographic approach revealed what 'proof' meant in practice, not just in theory.",
      "I synthesized digital behavior analysis from session recordings, app store reviews, and social media sentiment. The patterns were clear: users were confused about which bills we supported, frustrated by repetitive 13-digit code entry every month, and lacked trust because they couldn't get official receipts.",
      "From this research, two core personas emerged with distinct but overlapping needs: The Building Manager (age 55+) who needs official documentation for residents, and The Head of Household who needs to avoid repetitive data entry and never miss due dates."
    ],
    highlights: [
      "15+ user interviews across diverse personas and use cases",
      "Contextual inquiry revealed real-world workflows we needed to digitize",
      "Multi-method synthesis connected qualitative insights to quantitative patterns"
    ]
  },
  {
    id: "personas",
    title: "Two Core Personas",
    summary: "Understanding these personas drove every design decision that followed.",
    bullets: [
      "The Building Manager (Age 55+): Manages utilities for entire apartment buildings. Critical need: official, shareable documentation. Zero tolerance for ambiguity.",
      "The Head of Household: Pays all family bills monthly. Critical need: avoid re-entering 13-digit codes every month. Constantly forgets due dates."
    ],
    quotes: [
      {
        author: "Building Manager",
        role: "Age 55+, manages apartment building utilities",
        text: "I make photocopies of every receipt and give them to residents. I need proof that it's paid."
      },
      {
        author: "Head of Household",
        role: "Pays all family bills monthly",
        text: "Entering this 13-digit code every single month is torture."
      }
    ]
  },
  {
    id: "insights",
    title: "Key Insights That Changed Everything",
    summary: "Three breakthrough insights from my research fundamentally shifted our product strategy and design approach.",
    body: [
      "First, users weren't confused about bill coverage—they were confused about us. They had no idea which bills SetareYek supported, forcing trial-and-error that destroyed trust before they even started. This insight led me to prioritize transparency and upfront communication.",
      "Second, the receipt wasn't a nice-to-have—it was the entire value proposition. Users didn't just want confirmation; they needed an official document they could show to family members, share with building residents, or present to landlords. This emotional need was as important as the functional transaction.",
      "Third, bill payment isn't a one-time task—it's a recurring monthly cycle. Our existing flow treated every payment like a new transaction, forcing users to re-enter 13-digit codes every month. This friction was killing adoption."
    ],
    highlights: [
      "Trust issue: Users didn't know what we supported, destroying confidence before they started.",
      "Emotional need = Functional need: The receipt was the entire value proposition, not decoration.",
      "Recurring workflow: We needed to remember, not make users repeat themselves monthly."
    ]
  },
  {
    id: "philosophy",
    title: "Design Philosophy",
    summary: "Digitize what people already do in the physical world—then make it 10x better.",
    body: [
      "People already keep notebooks of bill IDs—we built a digital bill list. They set calendar reminders—we built smart notifications. They make photocopies of receipts—we created shareable official receipts.",
      "The experience had to feel natural from day one, not like learning new software. This alignment with existing mental models was critical for adoption."
    ]
  },
  {
    id: "solutions",
    title: "Designing the Solution",
    summary: "I designed six interconnected features that addressed each core user need while building trust and reducing friction.",
    body: [
      "Working closely with product managers and engineers, I designed a comprehensive solution that addressed all three key insights. Each feature was tested through prototypes and validated with users before implementation."
    ],
    bullets: [
      "Saved Bills & One-Tap Updates: I designed a 'save bill' feature allowing users to register a bill once and reuse it forever. A 'Check for new amount' button fetches the latest bill instantly—eliminating the need to re-enter 13-digit codes monthly.",
      "Digital Bill Management Hub: I created a centralized dashboard showing all bills in one organized list with status labels (Paid, Pending, Overdue). The design was backward-compatible so existing users saw their payment history immediately.",
      "Smart Reminders: I designed a reminder system allowing users to set custom notifications for each bill with push notifications before due dates—addressing the forgetfulness problem.",
      "QR/Barcode Scanning: I integrated camera-based bill entry for instant data capture—critical for older users and busy personas who struggle with manual entry.",
      "Immediate Transparency: I redesigned the entry flow to show supported bill providers upfront with logos and clear guidance on what we can and can't process—eliminating trial-and-error.",
      "Official, Shareable Receipts: I designed PDF-quality receipts with all legal details and one-tap sharing via any channel—built specifically to address the 'proof' requirement that emerged from research."
    ],
    highlights: [
      "Each solution directly addressed insights from user research",
      "Backward-compatible design ensured zero learning curve for existing users",
      "Cross-functional collaboration ensured technical feasibility and business alignment"
    ]
  },
  {
    id: "failure",
    title: "Learning from Failure: Version 1",
    summary: "Version 1 launched and failed within 48 hours. Bills took 8-10 seconds to load with no loading states, skeleton UI, or progress indicators. Users saw blank screens, and bill payments dropped 80%. I led the immediate rollback and redesign.",
    body: [
      "This failure became the most valuable learning experience. As the designer, I took responsibility for not pushing harder on performance requirements. Great UX design can't save poor technical performance. We had skipped realistic latency testing, didn't simulate worst-case network conditions, and I had prioritized automation over user control in my designs.",
      "I immediately collaborated with engineering to diagnose the issues. Together, we redesigned the approach: I changed the design to use manual 'Check Amount' buttons for instant feedback, added lazy loading and skeleton states everywhere, and worked with the team to implement comprehensive pre-launch technical testing. I also advocated for new company-wide standards for performance testing that would prevent this in future projects."
    ],
    highlights: [
      "Took ownership: Led rollback and redesign process, didn't blame others",
      "Collaborated with engineering: Worked together to solve technical performance issues",
      "Process improvement: Created new standards that improved all future projects"
    ]
  },
  {
    id: "version2",
    title: "Version 2: Successful Launch",
    summary: "Armed with lessons from Version 1, I redesigned the experience with performance and user control as priorities. Version 2 launched successfully and achieved our adoption goals.",
    bullets: [
      "Manual control: I redesigned flows so users trigger updates when ready, giving them control and instant feedback.",
      "Performance-first: I designed comprehensive loading states and skeleton screens for every action, ensuring users never saw blank screens.",
      "Backward compatibility: I ensured the design had zero learning curve for returning users—they saw their history immediately.",
      "Official receipts: I designed PDF-quality receipts that solved the core emotional need identified in research.",
      "Smart reminders: I designed a notification system that addressed forgetfulness without being intrusive.",
      "Clear communication: I redesigned the entry flow to build confidence from screen one with upfront transparency."
    ],
    highlights: [
      "Applied learnings: Every Version 1 failure became a Version 2 requirement",
      "User control: Shifted from automation to user-triggered actions",
      "Performance standards: Set new benchmarks for the entire product"
    ]
  },
  {
    id: "impact",
    title: "Results & Business Impact",
    summary: "The redesign achieved our adoption goals and transformed bill payment into a core value proposition driving recurring engagement.",
    body: [
      "Within 8 weeks of Version 2 launch, bill payment adoption increased from 4% to 47%—a 10x growth in bill payment share of total payments. Bill payment went from a neglected feature to one of SetareYek's primary value propositions, driving monthly recurring engagement.",
      "The performance improvements reduced drop-off rates by 80% compared to Version 1. User satisfaction scores increased significantly, and bill payment became a top-3 feature by usage frequency. This transformation helped solidify SetareYek's position as a comprehensive financial services platform serving over 1 million users."
    ],
    metrics: [
      {
        label: "Adoption rate",
        value: "4% → 47%",
        description: "10x growth achieved within 8 weeks"
      },
      {
        label: "Drop-off reduction",
        value: "80%",
        description: "Performance improvement vs Version 1"
      },
      {
        label: "Feature ranking",
        value: "Top 3",
        description: "Bill payment by usage frequency"
      },
      {
        label: "User satisfaction",
        value: "↑ Significant",
        description: "Measured through app store reviews and surveys"
      }
    ]
  },
  {
    id: "learnings",
    title: "Key Learnings",
    summary: "This project taught me valuable lessons about product design, technical collaboration, and user research that I apply to every project.",
    bullets: [
      "Design doesn't exist in isolation: Even perfect UX fails without technical performance. I now always collaborate closely with engineering on performance requirements from day one.",
      "Emotional needs = Functional needs: The receipt wasn't decoration—it was the entire value proposition. User research revealed emotional drivers that were as important as functional requirements.",
      "Real behavior > Assumptions: Users showed us what they needed through research. I learned to trust user behavior over internal assumptions.",
      "Backward compatibility is trust: Especially in financial products, familiarity equals confidence. I design for existing users first, then optimize for new ones.",
      "Failure accelerates learning: Owning mistakes and iterating fast built a stronger product and process. I now advocate for rapid iteration and learning cycles."
    ]
  },
  {
    id: "organizational",
    title: "Organizational Impact",
    summary: "Beyond the product, I influenced process improvements that benefited the entire organization.",
    body: [
      "I advocated for and helped establish new company-wide standards based on learnings from this project. These changes improved every feature that came after, demonstrating the value of learning from failure and sharing knowledge across teams."
    ],
    bullets: [
      "I established mandatory pre-launch performance testing as standard practice across all product teams.",
      "I worked with engineering to set up staging environments with real-world data for realistic testing.",
      "I created design system guidelines requiring loading/skeleton states for all heavy operations.",
      "I facilitated shared standards and collaboration processes between design and engineering teams."
    ],
    highlights: [
      "Process leadership: Influenced organizational standards beyond my immediate project",
      "Cross-functional impact: Improved collaboration between design and engineering",
      "Knowledge sharing: Documented learnings that benefited future projects"
    ]
  }
];
var caseStudyEntries = [
  {
    id: "divar-secure-call",
    title: "Divar Secure Call",
    excerpt: "Reduced harassment by 60% for 2.1M weekly callers through a privacy-first calling layer inside Iran's largest marketplace.",
    focus: "Trust & Safety",
    path: "/case-studies/divar-secure-call"
  },
  {
    id: "setare-aval-engagement",
    title: "Setare Aval Engagement",
    excerpt: "Re-architected lifecycle journeys that doubled retained revenue and converted referral cohorts into 60K+ daily active users.",
    focus: "Retention & Growth",
    path: "/case-studies/setare-aval-engagement"
  },
  {
    id: "setare-yek-bill-payment",
    title: "SetareYek Bill Payment",
    excerpt: "Increased bill payment adoption from 4% to 47% at Setare Aval's SetareYek app by solving trust, transparency, and recurring workflow challenges.",
    focus: "Product Design & Growth",
    path: "/case-studies/setare-yek-bill-payment"
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
var setareYekStructuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: setareYekOverview.title,
  description: setareYekOverview.subtitle ?? "Redesigned bill payment experience that increased adoption from 4% to 47% by solving trust, transparency, and recurring workflow challenges.",
  author: {
    "@type": "Person",
    name: "Masih Sadri",
    url: siteUrl
  },
  url: `${siteUrl}/case-studies/setare-yek-bill-payment`,
  image: setareYekOverview.heroImage.src,
  keyword: ["Product Design", "Growth", "Fintech", "User Experience", "Setare Aval", "SetareYek"]
};
var setareYekCaseStudyMetadata = {
  title: "SetareYek Bill Payment Case Study — From 4% to 47% Adoption at Setare Aval",
  description: setareYekOverview.subtitle ?? "Redesigned SetareYek's bill payment experience at Setare Aval to increase adoption from 4% to 47% by solving trust, transparency, and recurring workflow challenges.",
  canonicalPath: "/case-studies/setare-yek-bill-payment",
  openGraph: {
    type: "article",
    image: {
      url: setareYekOverview.heroImage.src,
      alt: setareYekOverview.heroImage.alt,
      width: setareYekOverview.heroImage.width ?? 1200,
      height: setareYekOverview.heroImage.height ?? 630
    }
  },
  structuredData: setareYekStructuredData
};

export { SectionCard_default, CaseStudyOutlineNav_default, CaseStudyOverviewSection_default, CaseStudyRelatedSection_default, useCaseStudyNavigation_default, useRelatedCaseStudies_default, divarOverview, divarSections, setareOverview, setareSections, setareYekOverview, setareYekSections, caseStudyEntries, divarCaseStudyMetadata, setareCaseStudyMetadata, setareYekCaseStudyMetadata };

//# debugId=204AD029955CF50864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXhwYW5kTW9yZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXYudHN4IiwgIi4uL3NyYy9zaGFyZWQvdXRpbHMvc3gudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb24udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIERpdmlkZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZENvbXBvbmVudCA9ICh7IHNlY3Rpb24gfTogeyBzZWN0aW9uOiBDYXNlU3R1ZHlTZWN0aW9uIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIGlkPXtzZWN0aW9uLmlkfVxuICAgICAgc3BhY2luZz17eyB4czogMi41LCBtZDogMyB9fVxuICAgICAgc3g9e3sgbWF4V2lkdGg6IDc2MCwgbXg6IFwiYXV0b1wiLCBzY3JvbGxNYXJnaW5Ub3A6IHsgeHM6IDk2LCBtZDogMTQwIH0gfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMSB9fT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiB7IHhzOiAxLCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiBpbmRleCA8IHNlY3Rpb24uYm9keSEubGVuZ3RoIC0gMSA/IHsgeHM6IDIsIG1kOiAxLjUgfSA6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiIFxuICAgICAgICAgICAgICBrZXk9e3BvaW50fSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICBhbHQ9e3NlY3Rpb24uaW1hZ2UuYWx0fVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCA9IG1lbW8oXG4gIENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50LFxuICAocHJldiwgbmV4dCkgPT4gcHJldi5zZWN0aW9uID09PSBuZXh0LnNlY3Rpb24sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNS44OCA5LjI5IDEyIDEzLjE3IDguMTIgOS4yOWEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsNC41OSA0LjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw0LjU5LTQuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MS0uMzktLjM4LTEuMDMtLjM5LTEuNDIgMFwiXG59KSwgJ0V4cGFuZE1vcmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlLCBEaXZpZGVyLCBJY29uQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUsIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgRXhwYW5kTW9yZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVSb3VuZGVkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcyA9IHtcbiAgc2VjdGlvbnM6IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcbiAgYWN0aXZlU2VjdGlvbklkOiBzdHJpbmc7XG4gIG9uTmF2aWdhdGU6IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb3V0bGluZUxhYmVsPzogc3RyaW5nO1xuICBjb250YWluZXJTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgQ2FzZVN0dWR5T3V0bGluZU5hdiA9ICh7XG4gIHNlY3Rpb25zLFxuICBhY3RpdmVTZWN0aW9uSWQsXG4gIG9uTmF2aWdhdGUsXG4gIG91dGxpbmVMYWJlbCA9IFwiT3V0bGluZVwiLFxuICBjb250YWluZXJTeCxcbn06IENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCFpc01vYmlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICBzcGFjaW5nPXsxfVxuICAgICAgc3g9e21lcmdlU3goXG4gICAgICAgICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KSxcbiAgICAgICAgY29udGFpbmVyU3gsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3sgY3Vyc29yOiBpc01vYmlsZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaXNNb2JpbGUgJiYgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtvdXRsaW5lTGFiZWx9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2VcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBleHBhbmRlZCA/IFwicm90YXRlKDE4MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZXhwYW5kZWQgPyBcIkNvbGxhcHNlIG91dGxpbmVcIiA6IFwiRXhwYW5kIG91dGxpbmVcIn1cbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeHBhbmRNb3JlUm91bmRlZEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIj5cbiAgICAgICAgPERpdmlkZXIgc3g9e3sgbWI6IDEgfX0gLz5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb25OYXZpZ2F0ZShldmVudCwgc2VjdGlvbi5pZCk7XG4gICAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtY3VycmVudD17YWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yOClcIlxuICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgcHg6IDEuNSxcbiAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgU3hQcm9wcywgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBhcHBlbmQgPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KHRhcmdldDogU3hQcm9wczxUVGhlbWU+W10sIHZhbHVlPzogU3hQcm9wczxUVGhlbWU+KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiBhcHBlbmQodGFyZ2V0LCBpdGVtKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFyZ2V0LnB1c2godmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlU3ggPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KFxuICBiYXNlOiBTeFByb3BzPFRUaGVtZT4sXG4gIC4uLm92ZXJyaWRlczogQXJyYXk8U3hQcm9wczxUVGhlbWU+IHwgdW5kZWZpbmVkPlxuKTogU3hQcm9wczxUVGhlbWU+ID0+IHtcbiAgY29uc3QgZW50cmllczogU3hQcm9wczxUVGhlbWU+W10gPSBbXTtcbiAgYXBwZW5kKGVudHJpZXMsIGJhc2UpO1xuICBvdmVycmlkZXMuZm9yRWFjaCgodmFsdWUpID0+IGFwcGVuZChlbnRyaWVzLCB2YWx1ZSkpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBlbnRyaWVzWzBdITtcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzIGFzIFN4UHJvcHM8VFRoZW1lPjtcbn07XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlPdmVydmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25Qcm9wcyA9IHtcbiAgZXllYnJvdzogc3RyaW5nO1xuICBvdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXc7XG4gIHN1YnRpdGxlRmFsbGJhY2s/OiBzdHJpbmc7XG4gIG1ldGFUaXRsZT86IHN0cmluZztcbiAgc3RhdHNUaXRsZT86IHN0cmluZztcbiAgc3RhdHNWYXJpYW50PzogXCJncmFkaWVudFwiIHwgXCJvdXRsaW5lZFwiO1xuICBoZXJvQmFja2Ryb3BTeD86IFN4UHJvcHM8VGhlbWU+O1xuICBoZXJvU3VyZmFjZVN4PzogU3hQcm9wczxUaGVtZT47XG4gIHN0YXRzQ2FyZFN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0SGVyb0JhY2tkcm9wU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBpbnNldDogMCxcbiAgYm9yZGVyUmFkaXVzOiB7IHhzOiAyNCwgbWQ6IDMyIH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE4KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTYsMjgsNTYsMC44OCksIHJnYmEoMzYsNjQsMTIwLDAuNzIpKVwiLFxuICBmaWx0ZXI6IFwiYmx1cig0OHB4KVwiLFxuICB6SW5kZXg6IC0xLFxufSk7XG5cbmNvbnN0IGRlZmF1bHRIZXJvU3VyZmFjZVN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LCAyNTEsIDI1NSwgMC44OClcIiA6IFwicmdiYSgxMywgMjAsIDM2LCAwLjg4KVwiLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICB9YCxcbiAgYm94U2hhZG93OlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwiMCAyNnB4IDUycHggcmdiYSgzNCwgODQsIDI1NSwgMC4xNClcIlxuICAgICAgOiBcIjAgMjZweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxufSk7XG5cbmNvbnN0IGRlZmF1bHRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuOCksIHJnYmEoMzYsNjQsMTIwLDAuNikpXCIsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogXCJub25lXCIsXG59KTtcblxuY29uc3Qgb3V0bGluZWRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIiA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjg1KVwiLFxufSk7XG5cbmNvbnN0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIG92ZXJ2aWV3LFxuICBzdWJ0aXRsZUZhbGxiYWNrLFxuICBtZXRhVGl0bGUgPSBcIlByb2plY3QgZGV0YWlsc1wiLFxuICBzdGF0c1RpdGxlLFxuICBzdGF0c1ZhcmlhbnQgPSBcImdyYWRpZW50XCIsXG4gIGhlcm9CYWNrZHJvcFN4LFxuICBoZXJvU3VyZmFjZVN4LFxuICBzdGF0c0NhcmRTeCxcbn06IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3RhdHMgPSBvdmVydmlldy5zdGF0cztcbiAgY29uc3QgcmVzb2x2ZWRTdGF0c0NhcmRTeCA9XG4gICAgc3RhdHNWYXJpYW50ID09PSBcImdyYWRpZW50XCIgPyBkZWZhdWx0U3RhdHNDYXJkU3ggOiBvdXRsaW5lZFN0YXRzQ2FyZFN4O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIDxCb3ggc3g9e21lcmdlU3goZGVmYXVsdEhlcm9CYWNrZHJvcFN4LCBoZXJvQmFja2Ryb3BTeCl9IC8+XG5cbiAgICAgICAgPEJveCBzeD17bWVyZ2VTeChkZWZhdWx0SGVyb1N1cmZhY2VTeCwgaGVyb1N1cmZhY2VTeCl9PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAyIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57b3ZlcnZpZXcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7KG92ZXJ2aWV3LnN1YnRpdGxlID8/IHN1YnRpdGxlRmFsbGJhY2spICYmIChcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICAgICAgICB7b3ZlcnZpZXcuc3VidGl0bGUgPz8gc3VidGl0bGVGYWxsYmFja31cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge21ldGFUaXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICB7b3ZlcnZpZXcubWV0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAxLjI1LCBtZDogMS41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIG10OiAwLjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAge3N0YXRzICYmIChcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICAgIHtzdGF0c1RpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0c1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHMubWFwKChzdGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5sZW5ndGggPj0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB4czogMTIsIHNtOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRzLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHhzOiAxMiwgc206IDYgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHhzOiAxMiwgc206IDEyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezB9IHN4PXttZXJnZVN4KHJlc29sdmVkU3RhdHNDYXJkU3gsIHN0YXRzQ2FyZFN4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxLjU1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB0eXBlIFN4UHJvcHMsXG4gIHR5cGUgVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlFbnRyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzID0ge1xuICBleWVicm93OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0dWRpZXM6IHJlYWRvbmx5IENhc2VTdHVkeUVudHJ5W107XG4gIHByaW1hcnlDdGE6IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFwiY29udGFpbmVkXCIgfCBcIm91dGxpbmVkXCI7XG4gIH07XG4gIHNlY29uZGFyeUN0YT86IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFwiY29udGFpbmVkXCIgfCBcIm91dGxpbmVkXCI7XG4gIH07XG4gIHNlY3Rpb25TeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgZGVmYXVsdFNlY3Rpb25TeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0MSwyNDUsMjU1LDAuOCksIHJnYmEoMjI0LDIzMywyNTUsMC45NCkpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLDIwLDMzLDAuOSksIHJnYmEoMjEsMzEsNTIsMC45MikpXCIsXG59KTtcblxuY29uc3QgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gPSAoe1xuICBleWVicm93LFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHN0dWRpZXMsXG4gIHByaW1hcnlDdGEsXG4gIHNlY29uZGFyeUN0YSxcbiAgc2VjdGlvblN4LFxufTogQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17bWVyZ2VTeChkZWZhdWx0U2VjdGlvblN4LCBzZWN0aW9uU3gpfT5cbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiA0LCBtZDogNiB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiA3MjAsIG14OiB7IHhzOiBcImF1dG9cIiwgbWQ6IDAgfSwgbGluZUhlaWdodDogMS42NSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgIHtzdHVkaWVzLm1hcCgoc3R1ZHkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3N0dWR5LmlkfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgdG89e3N0dWR5LnBhdGh9XG4gICAgICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUudG9rZW5zLnRyYW5zaXRpb24uaG92ZXJ9LCB0cmFuc2Zvcm0gMTYwbXMgZWFzZWAsXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuZm9jdXN9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3R1ZHkudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgIHtzdHVkeS5leGNlcnB0fVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBSZWFkIHRoZSBjYXNlIHN0dWR5IOKGklxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIHNtOiAzIH19XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e3ByaW1hcnlDdGEudG99XG4gICAgICAgICAgICB2YXJpYW50PXtwcmltYXJ5Q3RhLnZhcmlhbnQgPz8gXCJjb250YWluZWRcIn1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnlDdGEubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3NlY29uZGFyeUN0YSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e3NlY29uZGFyeUN0YS50b31cbiAgICAgICAgICAgICAgdmFyaWFudD17c2Vjb25kYXJ5Q3RhLnZhcmlhbnQgPz8gXCJvdXRsaW5lZFwifVxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5Q3RhLmxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5U2VjdGlvbkxpc3QgPSByZWFkb25seSBDYXNlU3R1ZHlTZWN0aW9uW107XG5cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbmNvbnN0IGdldEluaXRpYWxTZWN0aW9uSWQgPSAoc2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25MaXN0KSA9PiBzZWN0aW9uc1swXT8uaWQgPz8gXCJcIjtcblxuY29uc3QgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbiA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHtcbiAgY29uc3Qgc2VjdGlvbklkcyA9IHVzZU1lbW8oKCkgPT4gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiBzZWN0aW9uLmlkKSwgW3NlY3Rpb25zXSk7XG5cbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb25JZCwgc2V0QWN0aXZlU2VjdGlvbklkXSA9IHVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxTZWN0aW9uSWQoc2VjdGlvbnMpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VjdGlvbklkcy5pbmNsdWRlcyhhY3RpdmVTZWN0aW9uSWQpKSB7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZVNlY3Rpb25JZCwgc2VjdGlvbklkcywgc2VjdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGlmIChoYXNoICYmIHNlY3Rpb25JZHMuaW5jbHVkZXMoaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50cyA9IHNlY3Rpb25JZHNcbiAgICAgIC5tYXAoKHNlY3Rpb25JZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKSlcbiAgICAgIC5maWx0ZXIoKGVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxFbGVtZW50ID0+IEJvb2xlYW4oZWxlbWVudCkpO1xuXG4gICAgaWYgKHNlY3Rpb25FbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2libGVFbnRyaWVzID0gZW50cmllc1xuICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5pbnRlcnNlY3Rpb25SYXRpbyAtIGEuaW50ZXJzZWN0aW9uUmF0aW8pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VmlzaWJsZSA9IHZpc2libGVFbnRyaWVzWzBdO1xuICAgICAgICBpZiAoZmlyc3RWaXNpYmxlKSB7XG4gICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGZpcnN0VmlzaWJsZS50YXJnZXQuaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyByb290TWFyZ2luOiBcIi00NSUgMHB4IC00NSVcIiB9LFxuICAgICk7XG5cbiAgICBzZWN0aW9uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbc2VjdGlvbklkc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgICBjb25zdCBuZXdVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSMke3RhcmdldElkfWA7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBuZXdVcmwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgcmV0dXJuIHsgYWN0aXZlU2VjdGlvbklkLCBoYW5kbGVPdXRsaW5lQ2xpY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyA9IChcbiAgZW50cmllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlFbnRyeT4sXG4gIGN1cnJlbnRJZDogQ2FzZVN0dWR5RW50cnlbXCJpZFwiXSxcbikgPT5cbiAgdXNlTWVtbyhcbiAgICAoKSA9PiBlbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlkICE9PSBjdXJyZW50SWQpLFxuICAgIFtlbnRyaWVzLCBjdXJyZW50SWRdLFxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWxhdGVkQ2FzZVN0dWRpZXM7XG5cblxuIiwKICAgICJpbXBvcnQgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvZGl2YXItc2VjdXJlLWNhbGwtbGlzdGluZy5wbmdcIjtcbmltcG9ydCBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC1pbnRlcnZpZXctc2Vzc2lvbi5hdmlmXCI7XG5pbXBvcnQgc2V0YXJlQXZhbFVzZXJGbG93QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC11c2VyLWZsb3cud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5LCBDYXNlU3R1ZHlPdmVydmlldywgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGl2YXJPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIldlIHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGluc2lkZSBEaXZhcuKAmXMgY2xvdGhpbmcgY2F0ZWdvcnkgYnkgYnVpbGRpbmcgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IG5vdyBwcm90ZWN0cyAyLjFNIHdlZWtseSB1c2Vycy5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgVVggRGVzaWduZXIgwrcgVHJ1c3QgJiBTYWZldHlcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiTWF5IOKAkyBKdW5lIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGVhbVwiLCB2YWx1ZTogXCJEZXNpZ24sIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgRW5naW5lZXJpbmcsIFN1cHBvcnRcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHsgdmFsdWU6IFwi4pa8NjAlXCIsIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiIH0sXG4gICAgeyB2YWx1ZTogXCIyLjFNXCIsIGxhYmVsOiBcIldlZWtseSBjYWxsZXJzIHNhZmVndWFyZGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0LFxuICAgIFwiRGl2YXIgc2VjdXJlIGNhbGwgbGlzdGluZ3MgaW50ZXJmYWNlXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXZhclNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpdmFyIGlzIElyYW7igJlzIGxhcmdlc3QgY2xhc3NpZmllZHMgbWFya2V0cGxhY2Ugd2l0aCA1M00rIHdlZWtseSB1c2Vycy4gVHJ1c3QgYW5kIHNhZmV0eSBpbmNpZGVudHMgY2FuIGNvbGxhcHNlIGVudGlyZSByZXZlbnVlIGNhdGVnb3JpZXMgaWYgbGVmdCB1bmNoZWNrZWQuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAgeyBsYWJlbDogXCJNYXJrZXRwbGFjZSBzY2FsZVwiLCB2YWx1ZTogXCI1M00rXCIsIGRlc2NyaXB0aW9uOiBcIldlZWtseSBidXllcnMgJiBzZWxsZXJzXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiVm9pY2UgZGVwZW5kZW5jZVwiLCB2YWx1ZTogXCIyLjFNXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGxzIHBsYWNlZCBldmVyeSB3ZWVrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiQWQgY29uc3VtcHRpb25cIiwgdmFsdWU6IFwiNkIrXCIsIGRlc2NyaXB0aW9uOiBcIk1vbnRobHkgYWQgdmlld3NcIiB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDbG90aGluZyBsaXN0aW5nc+KAlG1vc3RseSB3b21lbi1sZWTigJR3ZXJlIGhpdCBoYXJkZXN0IGJ5IGFidXNlLlwiLFxuICAgICAgXCJNYW51YWwgbW9kZXJhdGlvbiBjb3VsZG7igJl0IGtlZXAgdXA7IGxpcXVpZGl0eSBhbmQgdHJ1c3Qgd2VyZSBpbiBmcmVlIGZhbGwuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNyaXNpc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBDcmlzaXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJDdXN0b21lciBjYXJlIGNlbnRyZXMgd2VyZSBmbG9vZGVkIHdpdGggaGFyYXNzbWVudCByZXBvcnRzLiBTZWxsZXJzIGRlbGV0ZWQgbGlzdGluZ3Mgb3IgY2h1cm5lZCBlbnRpcmVseSwgZmVhcmluZyByZXBlYXQgaW5jaWRlbnRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSGFyYXNzZXJzIHNjcmFwZWQgcGhvbmUgbnVtYmVycyBmcm9tIGFkcyBhbmQgY2lyY3VsYXRlZCB0aGVtIGluIHByaXZhdGUgVGVsZWdyYW0gZ3JvdXBzLlwiLFxuICAgICAgXCJFdmVuIGFmdGVyIHZpY3RpbXMgZGVsZXRlZCBsaXN0aW5ncywgdGhlIGNhbGxzIGNvbnRpbnVlZCBiZWNhdXNlIG51bWJlcnMgd2VyZSBhbHJlYWR5IGV4cG9zZWQuXCIsXG4gICAgICBcIldpdGhvdXQgaW50ZXJ2ZW50aW9uLCBEaXZhciByaXNrZWQgbG9zaW5nIGEgY2F0ZWdvcnkgdGhhdCBhbmNob3JlZCBkYWlseSBlbmdhZ2VtZW50LlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJMYXlsYSwgMzJcIixcbiAgICAgICAgcm9sZTogXCJQcm9mZXNzaW9uYWwgYXJ0aXN0IHNlbGxpbmcgYmVzcG9rZSBjbG90aGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIkl0IHdhcyBpbmZ1cmlhdGluZy4gSSB0b29rIGRvd24gbXkgRGl2YXIgYWQgaG9waW5nIHRvIHN0b3AgdGhlIGNhbGxzLCBidXQgdGhleSBrZXB0IGNvbWluZy4gU29tZW9uZSB0b2xkIG1lIG15IG51bWJlciB3YXMgaW4gYSBUZWxlZ3JhbSBncm91cC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIGludGVydmlld2VkIGhhcmFzc2VkIHNlbGxlcnMgYW5kIGFuYWx5c2VkIGJlaGF2aW91cmFsIGRhdGEgdG8gdW5kZXJzdGFuZCBob3cgZXhwb3N1cmUgc2NhbGVkLiBUaGUgYnJlYWt0aHJvdWdoIGNhbWUgZnJvbSBjb25uZWN0aW5nIHF1YWxpdGF0aXZlIHN0b3JpZXMgdG8gcXVhbnRpdGF0aXZlIHNpZ25hbHMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQdWJsaWMgcGhvbmUgbnVtYmVycyB3ZXJlIHRoZSByb290IGNhdXNlIG9mIGV4cG9zdXJlLCBub3QgdGhlIG51bWJlciBvZiByZXBvcnRzLlwiLFxuICAgICAgXCJFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IGFkYXB0ZWQgYnkgdXNpbmcgaW4tYXBwIGNoYXQ7IG5ldyBzZWxsZXJzIG5lZWRlZCBwcm90ZWN0aXZlIGRlZmF1bHRzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdHJhdGVneVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbiBKb3VybmV5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgcmVmcmFtZWQgc3VjY2VzcyBmcm9tIOKAnHJlZHVjZSByZXBvcnRz4oCdIHRvIOKAnHJlZHVjZSBleHBvc3VyZS7igJ0gV2l0aCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIFN1cHBvcnQsIGFuZCBEYXRhLCB3ZSBldmFsdWF0ZWQgZXZlcnkgcGF0aCBhbmQgc3RyZXNzLXRlc3RlZCBlZGdlIGNhc2VzIGJlZm9yZSBjb21taXR0aW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRWR1Y2F0aW5nIHVzZXJzIGFib3V0IGhhcmFzc2VyIHRhY3RpY3Mgd291bGQgZXJvZGUgdHJ1c3QgYW5kIGRpc2NvdXJhZ2UgbGlzdGluZ3MuXCIsXG4gICAgICBcIkZ1bGwgVm9JUCB3YXMgY29zdC1wcm9oaWJpdGl2ZSwgZnJhZ2lsZSBhY3Jvc3MgZGV2aWNlIHR5cGVzLCBhbmQgaW5hY2Nlc3NpYmxlIHRvIDQ3JSBvZiBsZWdhY3kgQW5kcm9pZCB1c2Vycy5cIixcbiAgICAgIFwiVm9pY2UgcmVsYXkgd2l0aCBpbnRlcm1lZGlhcnkgbnVtYmVycyBwcm90ZWN0ZWQgc2VsbGVycyB3aXRob3V0IGNoYW5naW5nIHB1cmNoYXNlIGJlaGF2aW91cuKAlHRoaXMgYmVjYW1lIHRoZSBub3J0aCBzdGFyLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkEgMy1kYXkgcGlsb3QgaW4gdGhlIGNsb3RoaW5nIGNhdGVnb3J5IHJlc3VsdGVkIGluIGEgNTYlIGNhbGwgZmFpbHVyZSByYXRlLiBJbnN0ZWFkIG9mIHJldmVydGluZywgd2UgdHJlYXRlZCBldmVyeSBmYWlsdXJlIGFzIGEgZGVzaWduIHJlcXVpcmVtZW50LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciBiZWhhdmlvdXI6IHNlbGxlcnMgYmxvY2tlZCB1bmZhbWlsaWFyIG51bWJlcnM7IGJ1eWVycyByZWRpYWxsZWQgZnJvbSBjYWxsIGxvZ3M7IHJlcGVhdCBjb252ZXJzYXRpb25zIGJyb2tlIG1hcHBpbmcgd2luZG93cy5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGxvYWQ6IGNhbGwgdm9sdW1lIHNwaWtlZCBiZXlvbmQgZm9yZWNhc3RzIGFuZCBudW1iZXIgcG9vbHMgd2VyZSBleGhhdXN0ZWQuXCIsXG4gICAgICBcIkJ1c2luZXNzIHJpc2s6IGxvbmdlciBjYWxscyBpbmZsYXRlZCB0ZWxlY29tIGNvc3RzIGFuZCBhbm9ueW1pc2VkIG51bWJlcnMgYXR0cmFjdGVkIG9wcG9ydHVuaXN0aWMgc2NhbW1lcnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmluZW1lbnRcIixcbiAgICB0aXRsZTogXCJUaGUgUmVmaW5lZCBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHRyYW5zbGF0ZWQgZXZlcnkgcGlsb3QgaW5zaWdodCBpbnRvIHByb2R1Y3QgYW5kIHBsYXRmb3JtIGltcHJvdmVtZW50cyBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQmlkaXJlY3Rpb25hbCBtYXBwaW5nIGxldCBzZWxsZXJzIHJlY29ubmVjdCB3aXRob3V0IGV4cG9zaW5nIHJlYWwgbnVtYmVycy5cIixcbiAgICAgIFwiRXh0ZW5kZWQgbWFwcGluZyB3aW5kb3dzIGZyb20gMjAgc2Vjb25kcyB0byAxNSBtaW51dGVzIHJlZHVjZWQgZHJvcHBlZCBjYWxscy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyAo4oCcVGhpcyBpcyBhIHNlY3VyZSBjYWxsIGZyb20gRGl2YXLigKbigJ0pIHNldCBleHBlY3RhdGlvbnMgYW5kIGRldGVycmVkIHNjYW1tZXJzLlwiLFxuICAgICAgXCJBIHBvb2wgb2YgMTAwIGludGVybWVkaWFyeSBudW1iZXJzIGFzc2lnbmVkIHBlciBidXllci1zZWxsZXIgcGFpciBwcmV2ZW50ZWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5LCBjaGF0IGludGVncmF0aW9uLCBhbmQgYWQgbWFuYWdlbWVudCBsb2dzIGtlcHQgbGVnaXRpbWF0ZSByZWxhdGlvbnNoaXBzIGludGFjdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBZnRlciByb2xsb3V0LCBoYXJhc3NtZW50IHJlcG9ydHMgZHJvcHBlZCBkcmFtYXRpY2FsbHkgYW5kIHNlbGxlcnMgZmVsdCBzYWZlIGVub3VnaCB0byBrZWVwIGxpc3RpbmdzIGxpdmUuIE1vZGVyYXRpb24gdGVhbXMgcmVjb3ZlcmVkIGhvdXJzIGVhY2ggd2VlayB0aGF0IHdlcmUgcHJldmlvdXNseSBzcGVudCBvbiByZWFjdGl2ZSB0aWNrZXRzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDYwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gOCB3ZWVrcyBvZiBsYXVuY2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkIGRlbGV0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMjUlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZld2VyIHNlbGxlcnMgbGVhdmluZyB0aGUgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN1cHBvcnQgdGlja2V0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMTglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vcmUgdGltZSBmb3IgcHJvYWN0aXZlIG1vbml0b3JpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlYXJuaW5nc1wiLFxuICAgIHRpdGxlOiBcIktleSBMZWFybmluZ3NcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIG9uZeKAlGV4cG9zdXJlLCBub3QgcmVwb3J0cywgd2FzIHRoZSByb290LlwiLFxuICAgICAgXCJVc2VycyB3ZXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSByZXZlYWxlZCB0aGUgcmlnaHQgZGVmYXVsdHMuXCIsXG4gICAgICBcIkZhaWx1cmUgaXMgc2lnbmFsLiBUaGUgNTYlIHBpbG90IGZhaWx1cmUgZ2VuZXJhdGVkIGEgYmFja2xvZyBvZiBhY3Rpb25hYmxlIHJlcXVpcmVtZW50cy5cIixcbiAgICAgIFwiUGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcgdG8ga2VlcCBhYnVzZSB2ZWN0b3JzIGluIGNoZWNrLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZsZWN0aW9uXCIsXG4gICAgdGl0bGU6IFwiUmVmbGVjdGlvblwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHJlaW5mb3JjZWQgbXkgYmVsaWVmIHRoYXQgc29sdmluZyBoYXJkIHByb2JsZW1zIHN0YXJ0cyB3aXRoIHVuZGVyc3RhbmRpbmcgYmVoYXZpb3VyLiBCeSBibGVuZGluZyByZXNlYXJjaCwgZGF0YSwgYW5kIHJhcGlkIGl0ZXJhdGlvbiwgd2UgYnVpbHQgYSBzYWZldHkgbGF5ZXIgdGhhdCBzdGlsbCBwcm90ZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZWFjaCB3ZWVrLiBUaGUgaGFyYXNzbWVudCBwcm9ibGVtIG1heSBuZXZlciBkaXNhcHBlYXIgZW50aXJlbHksIGJ1dCBEaXZhciBpcyBzaWduaWZpY2FudGx5IHNhZmVyIGZvciB0aGUgdXNlcnMgd2hvIG5lZWQgaXQgbW9zdC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZU92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzIGF0IFNldGFyZSBBdmFsXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJGZWIgMjAyMSDigJMgSmFuIDIwMjJcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIkRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBpbiA2IG1vbnRoc1wiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiMsOXXCIsXG4gICAgICBsYWJlbDogXCJSZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBY2hpZXZlZCB3aXRoaW4gdGhlIGZpcnN0IDYgbW9udGhzIG9mIHJvbGxvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIis2MEtcIixcbiAgICAgIGxhYmVsOiBcIkRhaWx5IGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVmZXJyYWwgY29ob3J0IGNvbnZlcnRlZCB0byBoaWdoLWludGVudCBEQVVzXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQsXG4gICAgXCJTZXRhcmUgQXZhbCBjdXN0b21lciBlbmdhZ2VtZW50IGludGVydmlldyBzZXNzaW9uXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIkZyb20gNCUgdG8gNDclOiBIb3cgSSBUdXJuZWQgYSBGYWlsaW5nIEZlYXR1cmUgSW50byBhIENvcmUgUHJvZHVjdCBWYWx1ZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkxlZCBlbmQtdG8tZW5kIHJlZGVzaWduIG9mIFNldGFyZVllaydzIGJpbGwgcGF5bWVudCBleHBlcmllbmNlLCBpbmNyZWFzaW5nIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIHRocm91Z2ggdXNlciByZXNlYXJjaCwgc3RyYXRlZ2ljIGRlc2lnbiwgYW5kIGNyb3NzLWZ1bmN0aW9uYWwgY29sbGFib3JhdGlvbi5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciDCtyBFbmQtdG8tRW5kIExlYWRcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiMjAyMiDigJMgMjAyMyAoMTIgbW9udGhzKVwiIH0sXG4gICAgeyBsYWJlbDogXCJDb21wYW55XCIsIHZhbHVlOiBcIlNldGFyZSBBdmFsIChTZXRhcmVZZWsgYXBwKVwiIH0sXG4gICAgeyBsYWJlbDogXCJUZWFtXCIsIHZhbHVlOiBcIlByb2R1Y3QsIEVuZ2luZWVyaW5nLCBSZXNlYXJjaCwgU3VwcG9ydCwgTGVnYWxcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjQlIOKGkiA0NyVcIixcbiAgICAgIGxhYmVsOiBcIkJpbGwgcGF5bWVudCBhZG9wdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiMTB4IGdyb3d0aCBpbiBiaWxsIHBheW1lbnQgc2hhcmUgb2YgdG90YWwgcGF5bWVudHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjFNK1wiLFxuICAgICAgbGFiZWw6IFwiQXBwIGRvd25sb2Fkc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0YXJlWWVrIG9uIEdvb2dsZSBQbGF5IFN0b3JlIHdpdGggNC4yKyByYXRpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgICAgbGFiZWw6IFwiRHJvcCByZWR1Y3Rpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFmdGVyIGZpeGluZyBwZXJmb3JtYW5jZSBpc3N1ZXMgaW4gVmVyc2lvbiAyXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBzZXRhcmVBdmFsVXNlckZsb3dBc3NldCxcbiAgICBcIlNldGFyZVllayBiaWxsIHBheW1lbnQgdXNlciBmbG93XCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVZZWtTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIlRoZSBCdXNpbmVzcyBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2V0YXJlWWVrIGhhZCBhIGJpbGwgcGF5bWVudCBmZWF0dXJlIHRoYXQgb25seSA0JSBvZiB1c2VycyBhZG9wdGVkLCBkZXNwaXRlIHNlcnZpbmcgb3ZlciAxIG1pbGxpb24gYWN0aXZlIHVzZXJzLiBBcyB0aGUgc29sZSBkZXNpZ25lciBvbiB0aGlzIHByb2plY3QsIEkgd2FzIHRhc2tlZCB3aXRoIHVuZGVyc3RhbmRpbmcgd2h5IHVzZXJzIGF2b2lkZWQgdGhpcyBjcml0aWNhbCBmZWF0dXJlIGFuZCByZWRlc2lnbmluZyBpdCB0byBkcml2ZSBhZG9wdGlvbiBhbmQgcmVjdXJyaW5nIGVuZ2FnZW1lbnQuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJTZXRhcmUgQXZhbCdzIFNldGFyZVllayBhcHAgc2VydmVzIG92ZXIgMSBtaWxsaW9uIElyYW5pYW4gdXNlcnMgd2l0aCBmaW5hbmNpYWwgc2VydmljZXMgaW5jbHVkaW5nIG1vYmlsZSByZWNoYXJnZXMsIGludGVybmV0IHBhY2thZ2VzLCB1dGlsaXR5IGJpbGwgcGF5bWVudHMsIHRyYW5zcG9ydGF0aW9uIHRpY2tldHMsIGFuZCBoZWFsdGggc2VydmljZXMuIEJpbGwgcGF5bWVudCByZXByZXNlbnRlZCBhIHN0cmF0ZWdpYyBvcHBvcnR1bml0eTogaXQncyBhIGhpZ2gtZnJlcXVlbmN5LCByZWN1cnJpbmcgdHJhbnNhY3Rpb24gdGhhdCBjb3VsZCBkcml2ZSBtb250aGx5IHVzZXIgZW5nYWdlbWVudCBhbmQgaW5jcmVhc2UgbGlmZXRpbWUgdmFsdWUuXCIsXG4gICAgICBcIkhvd2V2ZXIsIGFuYWx5dGljcyBzaG93ZWQgdGhhdCBvbmx5IDQlIG9mIHBheW1lbnRzIHdlcmUgYmlsbC1yZWxhdGVk4oCUdXNlcnMgYWN0aXZlbHkgYXZvaWRlZCB0aGUgZmVhdHVyZSBkZXNwaXRlIGhhdmluZyBtaWxsaW9ucyBvZiBhY3RpdmUgdXNlcnMuIFNlc3Npb24gcmVjb3JkaW5ncyByZXZlYWxlZCB1c2VycyB3ZXJlIHRyeWluZyBidXQgZmFpbGluZyB0byBjb21wbGV0ZSBiaWxsIHBheW1lbnRzLCBpbmRpY2F0aW5nIGEgZnVuZGFtZW50YWwgVVggcHJvYmxlbSByYXRoZXIgdGhhbiBhIGxhY2sgb2YgZGVtYW5kLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJCdXNpbmVzcyBvcHBvcnR1bml0eVwiLFxuICAgICAgICB2YWx1ZTogXCJIaWdoLWZyZXF1ZW5jeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb250aGx5IHJlY3VycmluZyB0cmFuc2FjdGlvbiBmb3IgZXZlcnkgaG91c2Vob2xkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJJbml0aWFsIGFkb3B0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBcIjQlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgcGF5bWVudHMgYXMgc2hhcmUgb2YgdG90YWwgcGF5bWVudHNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgYmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCIxTStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWN0aXZlIHVzZXJzIG9uIFNldGFyZVllayBwbGF0Zm9ybVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiU3RyYXRlZ2ljIGJ1c2luZXNzIGdvYWw6IFRyYW5zZm9ybSBiaWxsIHBheW1lbnQgaW50byBhIGNvcmUgdmFsdWUgcHJvcG9zaXRpb24gZHJpdmluZyByZWN1cnJpbmcgZW5nYWdlbWVudC5cIixcbiAgICAgIFwiQ2xlYXIgcHJvYmxlbTogVXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmfigJRpbmRpY2F0aW5nIGEgVVggcHJvYmxlbSwgbm90IGxhY2sgb2YgZGVtYW5kLlwiLFxuICAgICAgXCJTb2xvIGRlc2lnbmVyIGNvbnN0cmFpbnQ6IFJlcXVpcmVkIGJhbGFuY2luZyBkZWVwIHJlc2VhcmNoIHdpdGggcmFwaWQgZXhlY3V0aW9uLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJhYm91dC1zZXRhcmV5ZWtcIixcbiAgICB0aXRsZTogXCJXaGF0IGlzIFNldGFyZVllaz9cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmVZZWsgaXMgU2V0YXJlIEF2YWwncyBmbGFnc2hpcCBtb2JpbGUgYXBwbGljYXRpb27igJRhIGNvbXByZWhlbnNpdmUgZmluYW5jaWFsIHNlcnZpY2VzIHBsYXRmb3JtIHRoYXQgaGFzIGJlY29tZSBlc3NlbnRpYWwgdG8gZGFpbHkgbGlmZSBmb3Igb3ZlciAxIG1pbGxpb24gSXJhbmlhbiB1c2Vycy5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlNldGFyZVllayBzZXJ2ZXMgYXMgYSBvbmUtc3RvcCBkaWdpdGFsIHBsYXRmb3JtIGZvciBlc3NlbnRpYWwgZmluYW5jaWFsIGFuZCB0ZWxlY29tbXVuaWNhdGlvbiBzZXJ2aWNlcy4gVXNlcnMgY2FuIHB1cmNoYXNlIG1vYmlsZSByZWNoYXJnZXMgYW5kIGludGVybmV0IHBhY2thZ2VzIGZvciBtYWpvciBJcmFuaWFuIG9wZXJhdG9ycyAoTUNJLCBJcmFuY2VsbCwgUmlnaHRlbCksIHBheSB1dGlsaXR5IGJpbGxzICh3YXRlciwgZWxlY3RyaWNpdHksIGdhcyksIGJ1eSB0cmFuc3BvcnRhdGlvbiB0aWNrZXRzICh0cmFpbiwgYnVzLCBwbGFuZSksIGJvb2sgaG90ZWxzLCBhY2Nlc3MgaGVhbHRoIHNlcnZpY2VzLCBwYXkgY2FyIHZpb2xhdGlvbnMgYW5kIGZyZWV3YXkgdG9sbHMsIGFuZCBwZXJmb3JtIGNhcmQtdG8tY2FyZCBtb25leSB0cmFuc2ZlcnMuXCIsXG4gICAgICBcIldoYXQgbWFrZXMgU2V0YXJlWWVrIHNpZ25pZmljYW50IGlzIGl0cyByb2xlIGluIG1vZGVybml6aW5nIElyYW4ncyBmaW5hbmNpYWwgc2VydmljZXMgbGFuZHNjYXBlLiBCeSBlbGltaW5hdGluZyBpbnRlcm1lZGlhcmllcyBhbmQgcHJvdmlkaW5nIGRpcmVjdCBhY2Nlc3MgdG8gc2VydmljZXMsIFNldGFyZVllayBoYXMgc3RyZWFtbGluZWQgcHJvY2Vzc2VzIHRoYXQgcHJldmlvdXNseSByZXF1aXJlZCBtdWx0aXBsZSBhcHBzLCBwaHlzaWNhbCB2aXNpdHMsIG9yIHBob25lIGNhbGxzLiBUaGlzIGNvbnNvbGlkYXRpb24gc2F2ZXMgdXNlcnMgdGltZSwgcmVkdWNlcyBmcmljdGlvbiwgYW5kIGNyZWF0ZXMgYSBtb3JlIGVmZmljaWVudCBkaWdpdGFsIGVjb25vbXkuXCIsXG4gICAgICBcIlRoZSBhcHAncyByZXdhcmRzIHN5c3RlbeKAlHdoZXJlIHVzZXJzIGVhcm4gcG9pbnRzIHdpdGggZXZlcnkgdHJhbnNhY3Rpb27igJRmb3N0ZXJzIGxveWFsdHkgYW5kIGVuZ2FnZW1lbnQuIFVzZXJzIGNhbiBwYXJ0aWNpcGF0ZSBpbiBsb3R0ZXJpZXMgd2l0aCBwcml6ZXMgcmFuZ2luZyBmcm9tIGNhc2ggcmV3YXJkcyB0byB2ZWhpY2xlcyBsaWtlIHRoZSBQZXVnZW90IDIwNi4gQnV0IG1vcmUgaW1wb3J0YW50bHksIFNldGFyZVllayBoYXMgcG9zaXRpb25lZCBpdHNlbGYgYXMgYSBjcml0aWNhbCBpbmZyYXN0cnVjdHVyZSBmb3IgZXZlcnlkYXkgZmluYW5jaWFsIHRyYW5zYWN0aW9ucywgbWFraW5nIGl0IGluZGlzcGVuc2FibGUgdG8gbWlsbGlvbnMgb2YgaG91c2Vob2xkcyBhY3Jvc3MgSXJhbi5cIixcbiAgICAgIFwiRm9yIFNldGFyZSBBdmFsLCBiaWxsIHBheW1lbnQgd2Fzbid0IGp1c3QgYW5vdGhlciBmZWF0dXJl4oCUaXQgd2FzIGEgc3RyYXRlZ2ljIG9wcG9ydHVuaXR5LiBCaWxsIHBheW1lbnQgaXMgYSBoaWdoLWZyZXF1ZW5jeSwgcmVjdXJyaW5nIHRyYW5zYWN0aW9uIHRoYXQgZXZlcnkgaG91c2Vob2xkIG5lZWRzIG1vbnRobHkuIElmIHdlIGNvdWxkIHNvbHZlIGl0IHdlbGwsIHdlJ2QgY3JlYXRlIGEgaGFiaXQgdGhhdCBicmluZ3MgdXNlcnMgYmFjayByZWd1bGFybHksIGluY3JlYXNpbmcgbGlmZXRpbWUgdmFsdWUgYW5kIHBsYXRmb3JtIHN0aWNraW5lc3MuIFRoaXMgaXMgd2h5IGZpeGluZyBiaWxsIHBheW1lbnQgYWRvcHRpb24gd2Fzbid0IGp1c3QgYWJvdXQgaW1wcm92aW5nIGEgZmVhdHVyZeKAlGl0IHdhcyBhYm91dCB0cmFuc2Zvcm1pbmcgU2V0YXJlWWVrIGZyb20gYSB1dGlsaXR5IGFwcCBpbnRvIGFuIGVzc2VudGlhbCBkYWlseSBjb21wYW5pb24uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkNvbXByZWhlbnNpdmUgcGxhdGZvcm06IDEwKyBzZXJ2aWNlIGNhdGVnb3JpZXMgaW4gb25lIGFwcFwiLFxuICAgICAgXCJNYXJrZXQgbGVhZGVyOiBEaXJlY3Qgc2FsZXMgY2hhbm5lbCBlbGltaW5hdGluZyBpbnRlcm1lZGlhcmllc1wiLFxuICAgICAgXCJEYWlseSBlc3NlbnRpYWw6IENyaXRpY2FsIGluZnJhc3RydWN0dXJlIGZvciBob3VzZWhvbGQgZmluYW5jaWFsIG1hbmFnZW1lbnRcIixcbiAgICAgIFwiU3RyYXRlZ2ljIGltcG9ydGFuY2U6IEJpbGwgcGF5bWVudCBkcml2ZXMgcmVjdXJyaW5nIGVuZ2FnZW1lbnQgYW5kIHBsYXRmb3JtIHN0aWNraW5lc3NcIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQXBwIGRvd25sb2Fkc1wiLFxuICAgICAgICB2YWx1ZTogXCIxTStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZ2xlIFBsYXkgU3RvcmUgd2l0aCA0LjIrIHN0YXIgcmF0aW5nXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIHJldmlld3NcIixcbiAgICAgICAgdmFsdWU6IFwiMjVLK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3NpdGl2ZSBmZWVkYmFjayBmcm9tIGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU2VydmljZSBjYXRlZ29yaWVzXCIsXG4gICAgICAgIHZhbHVlOiBcIjEwK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb2JpbGUgcmVjaGFyZ2UsIGJpbGxzLCB0cmFuc3BvcnRhdGlvbiwgaGVhbHRoLCBhbmQgbW9yZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueSBncm93dGhcIixcbiAgICAgICAgdmFsdWU6IFwiNiDihpIgMTQwK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFbXBsb3llZXMgc2luY2UgMjAxNiBmb3VuZGluZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2hhbGxlbmdlXCIsXG4gICAgdGl0bGU6IFwiVW5kZXJzdGFuZGluZyB0aGUgUHJvYmxlbVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgYW5hbHl6ZWQgcXVhbnRpdGF0aXZlIGRhdGEgYW5kIHF1YWxpdGF0aXZlIHVzZXIgYmVoYXZpb3IgdG8gaWRlbnRpZnkgdGhlIHJvb3QgY2F1c2VzIHByZXZlbnRpbmcgYmlsbCBwYXltZW50IGFkb3B0aW9uLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiSSBzdGFydGVkIGJ5IGFuYWx5emluZyBzZXNzaW9uIHJlY29yZGluZ3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBkcm9wLW9mZiBwYXR0ZXJucy4gVGhlIGRhdGEgdG9sZCBhIGNsZWFyIHN0b3J5OiA5NiUgb2YgcGF5bWVudHMgd2VyZSBub3QgYmlsbHPigJR1c2VycyBhY3RpdmVseSBhdm9pZGVkIHRoZSBmZWF0dXJlLiBIaWdoIGRyb3Atb2ZmIHJhdGVzIG9jY3VycmVkIGF0IHNwZWNpZmljIHN0ZXBzLCB1c2VycyBzcGVudCB1bnVzdWFsbHkgbG9uZyBvbiBzaW5nbGUgc2NyZWVucyBpbmRpY2F0aW5nIGNvbmZ1c2lvbiwgYW5kIG1hbnkgYWJhbmRvbmVkIGF0dGVtcHRzIGJlZm9yZSByZWFjaGluZyBwYXltZW50IGNvbmZpcm1hdGlvbi5cIixcbiAgICAgIFwiVGhpcyByYWlzZWQgYSBjcml0aWNhbCBxdWVzdGlvbjogUGVvcGxlIHBheSBiaWxscyBldmVyeSBtb250aOKAlGl0J3Mgbm90IG9wdGlvbmFsLiBTbyB3aHkgd2VyZSB0aGV5IGF2b2lkaW5nIG91ciBhcHA/IFRoZSBhbnN3ZXIgd2Fzbid0IGluIHRoZSBkYXRhIGFsb25lOyBJIG5lZWRlZCB0byB1bmRlcnN0YW5kIHRoZSBodW1hbiBjb250ZXh0IGJlaGluZCB0aGVzZSBudW1iZXJzLlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCI5NiUgb2YgcGF5bWVudHMgd2VyZSBub3QgYmlsbHPigJR1c2VycyBhY3RpdmVseSBhdm9pZGVkIHRoZSBmZWF0dXJlIGRlc3BpdGUgaGF2aW5nIGl0IGF2YWlsYWJsZS5cIixcbiAgICAgIFwiSGlnaCBkcm9wLW9mZiByYXRlcyBhdCBzcGVjaWZpYyBzdGVwcyBpbiB0aGUgcGF5bWVudCBmbG93LlwiLFxuICAgICAgXCJVc2VycyBzcGVuZGluZyAyLTN4IGF2ZXJhZ2UgdGltZSBvbiBzaW5nbGUgc2NyZWVucywgaW5kaWNhdGluZyBjb25mdXNpb24gYW5kIGhlc2l0YXRpb24uXCIsXG4gICAgICBcIjQwJSsgYWJhbmRvbm1lbnQgcmF0ZSBiZWZvcmUgcmVhY2hpbmcgcGF5bWVudCBjb25maXJtYXRpb24uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkRhdGEgcmV2ZWFsZWQgdXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmfigJRpbmRpY2F0aW5nIGEgVVggcHJvYmxlbSwgbm90IGxhY2sgb2YgZGVtYW5kLlwiLFxuICAgICAgXCJRdWFudGl0YXRpdmUgYW5hbHlzaXMgYWxvbmUgd2Fzbid0IGVub3VnaDsgSSBuZWVkZWQgcXVhbGl0YXRpdmUgcmVzZWFyY2ggdG8gdW5kZXJzdGFuZCB3aHkuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRpc2NvdmVyeVwiLFxuICAgIHRpdGxlOiBcIk15IFJlc2VhcmNoIEFwcHJvYWNoXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBsZWQgYSBtdWx0aS1tZXRob2QgcmVzZWFyY2ggaW5pdGlhdGl2ZSBjb21iaW5pbmcgcXVhbGl0YXRpdmUgaW50ZXJ2aWV3cywgY29udGV4dHVhbCBpbnF1aXJ5LCBldGhub2dyYXBoaWMgb2JzZXJ2YXRpb24sIGFuZCBxdWFudGl0YXRpdmUgYW5hbHlzaXMgdG8gdW5jb3ZlciB0aGUgcmVhbCB1c2VyIG5lZWRzLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQXMgdGhlIHNvbGUgZGVzaWduZXIsIEkgb3duZWQgdGhlIGVudGlyZSByZXNlYXJjaCBwcm9jZXNzLiBJIGNvbmR1Y3RlZCAxNSsgaW4tZGVwdGggaW50ZXJ2aWV3cyB3aXRoIGJ1aWxkaW5nIG1hbmFnZXJzLCBoZWFkcyBvZiBob3VzZWhvbGRzLCBhbmQgZXZlcnlkYXkgdXNlcnMuIFRocm91Z2ggY29udGV4dHVhbCBpbnF1aXJ5LCBJIG9ic2VydmVkIHVzZXJzIGluIHRoZWlyIG5hdHVyYWwgZW52aXJvbm1lbnRz4oCUbGlrZSB3YXRjaGluZyBhIGJ1aWxkaW5nIG1hbmFnZXIgbWFpbnRhaW4gaGlzIHBoeXNpY2FsIG5vdGVib29rIHdoZXJlIGhlIHRyYWNrZWQgYmlsbHMgYW5kIHJlY2VpcHRzLiBUaGlzIGV0aG5vZ3JhcGhpYyBhcHByb2FjaCByZXZlYWxlZCB3aGF0ICdwcm9vZicgbWVhbnQgaW4gcHJhY3RpY2UsIG5vdCBqdXN0IGluIHRoZW9yeS5cIixcbiAgICAgIFwiSSBzeW50aGVzaXplZCBkaWdpdGFsIGJlaGF2aW9yIGFuYWx5c2lzIGZyb20gc2Vzc2lvbiByZWNvcmRpbmdzLCBhcHAgc3RvcmUgcmV2aWV3cywgYW5kIHNvY2lhbCBtZWRpYSBzZW50aW1lbnQuIFRoZSBwYXR0ZXJucyB3ZXJlIGNsZWFyOiB1c2VycyB3ZXJlIGNvbmZ1c2VkIGFib3V0IHdoaWNoIGJpbGxzIHdlIHN1cHBvcnRlZCwgZnJ1c3RyYXRlZCBieSByZXBldGl0aXZlIDEzLWRpZ2l0IGNvZGUgZW50cnkgZXZlcnkgbW9udGgsIGFuZCBsYWNrZWQgdHJ1c3QgYmVjYXVzZSB0aGV5IGNvdWxkbid0IGdldCBvZmZpY2lhbCByZWNlaXB0cy5cIixcbiAgICAgIFwiRnJvbSB0aGlzIHJlc2VhcmNoLCB0d28gY29yZSBwZXJzb25hcyBlbWVyZ2VkIHdpdGggZGlzdGluY3QgYnV0IG92ZXJsYXBwaW5nIG5lZWRzOiBUaGUgQnVpbGRpbmcgTWFuYWdlciAoYWdlIDU1Kykgd2hvIG5lZWRzIG9mZmljaWFsIGRvY3VtZW50YXRpb24gZm9yIHJlc2lkZW50cywgYW5kIFRoZSBIZWFkIG9mIEhvdXNlaG9sZCB3aG8gbmVlZHMgdG8gYXZvaWQgcmVwZXRpdGl2ZSBkYXRhIGVudHJ5IGFuZCBuZXZlciBtaXNzIGR1ZSBkYXRlcy5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiMTUrIHVzZXIgaW50ZXJ2aWV3cyBhY3Jvc3MgZGl2ZXJzZSBwZXJzb25hcyBhbmQgdXNlIGNhc2VzXCIsXG4gICAgICBcIkNvbnRleHR1YWwgaW5xdWlyeSByZXZlYWxlZCByZWFsLXdvcmxkIHdvcmtmbG93cyB3ZSBuZWVkZWQgdG8gZGlnaXRpemVcIixcbiAgICAgIFwiTXVsdGktbWV0aG9kIHN5bnRoZXNpcyBjb25uZWN0ZWQgcXVhbGl0YXRpdmUgaW5zaWdodHMgdG8gcXVhbnRpdGF0aXZlIHBhdHRlcm5zXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInBlcnNvbmFzXCIsXG4gICAgdGl0bGU6IFwiVHdvIENvcmUgUGVyc29uYXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJVbmRlcnN0YW5kaW5nIHRoZXNlIHBlcnNvbmFzIGRyb3ZlIGV2ZXJ5IGRlc2lnbiBkZWNpc2lvbiB0aGF0IGZvbGxvd2VkLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVGhlIEJ1aWxkaW5nIE1hbmFnZXIgKEFnZSA1NSspOiBNYW5hZ2VzIHV0aWxpdGllcyBmb3IgZW50aXJlIGFwYXJ0bWVudCBidWlsZGluZ3MuIENyaXRpY2FsIG5lZWQ6IG9mZmljaWFsLCBzaGFyZWFibGUgZG9jdW1lbnRhdGlvbi4gWmVybyB0b2xlcmFuY2UgZm9yIGFtYmlndWl0eS5cIixcbiAgICAgIFwiVGhlIEhlYWQgb2YgSG91c2Vob2xkOiBQYXlzIGFsbCBmYW1pbHkgYmlsbHMgbW9udGhseS4gQ3JpdGljYWwgbmVlZDogYXZvaWQgcmUtZW50ZXJpbmcgMTMtZGlnaXQgY29kZXMgZXZlcnkgbW9udGguIENvbnN0YW50bHkgZm9yZ2V0cyBkdWUgZGF0ZXMuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkJ1aWxkaW5nIE1hbmFnZXJcIixcbiAgICAgICAgcm9sZTogXCJBZ2UgNTUrLCBtYW5hZ2VzIGFwYXJ0bWVudCBidWlsZGluZyB1dGlsaXRpZXNcIixcbiAgICAgICAgdGV4dDogXCJJIG1ha2UgcGhvdG9jb3BpZXMgb2YgZXZlcnkgcmVjZWlwdCBhbmQgZ2l2ZSB0aGVtIHRvIHJlc2lkZW50cy4gSSBuZWVkIHByb29mIHRoYXQgaXQncyBwYWlkLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkhlYWQgb2YgSG91c2Vob2xkXCIsXG4gICAgICAgIHJvbGU6IFwiUGF5cyBhbGwgZmFtaWx5IGJpbGxzIG1vbnRobHlcIixcbiAgICAgICAgdGV4dDogXCJFbnRlcmluZyB0aGlzIDEzLWRpZ2l0IGNvZGUgZXZlcnkgc2luZ2xlIG1vbnRoIGlzIHRvcnR1cmUuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnNpZ2h0c1wiLFxuICAgIHRpdGxlOiBcIktleSBJbnNpZ2h0cyBUaGF0IENoYW5nZWQgRXZlcnl0aGluZ1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRocmVlIGJyZWFrdGhyb3VnaCBpbnNpZ2h0cyBmcm9tIG15IHJlc2VhcmNoIGZ1bmRhbWVudGFsbHkgc2hpZnRlZCBvdXIgcHJvZHVjdCBzdHJhdGVneSBhbmQgZGVzaWduIGFwcHJvYWNoLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiRmlyc3QsIHVzZXJzIHdlcmVuJ3QgY29uZnVzZWQgYWJvdXQgYmlsbCBjb3ZlcmFnZeKAlHRoZXkgd2VyZSBjb25mdXNlZCBhYm91dCB1cy4gVGhleSBoYWQgbm8gaWRlYSB3aGljaCBiaWxscyBTZXRhcmVZZWsgc3VwcG9ydGVkLCBmb3JjaW5nIHRyaWFsLWFuZC1lcnJvciB0aGF0IGRlc3Ryb3llZCB0cnVzdCBiZWZvcmUgdGhleSBldmVuIHN0YXJ0ZWQuIFRoaXMgaW5zaWdodCBsZWQgbWUgdG8gcHJpb3JpdGl6ZSB0cmFuc3BhcmVuY3kgYW5kIHVwZnJvbnQgY29tbXVuaWNhdGlvbi5cIixcbiAgICAgIFwiU2Vjb25kLCB0aGUgcmVjZWlwdCB3YXNuJ3QgYSBuaWNlLXRvLWhhdmXigJRpdCB3YXMgdGhlIGVudGlyZSB2YWx1ZSBwcm9wb3NpdGlvbi4gVXNlcnMgZGlkbid0IGp1c3Qgd2FudCBjb25maXJtYXRpb247IHRoZXkgbmVlZGVkIGFuIG9mZmljaWFsIGRvY3VtZW50IHRoZXkgY291bGQgc2hvdyB0byBmYW1pbHkgbWVtYmVycywgc2hhcmUgd2l0aCBidWlsZGluZyByZXNpZGVudHMsIG9yIHByZXNlbnQgdG8gbGFuZGxvcmRzLiBUaGlzIGVtb3Rpb25hbCBuZWVkIHdhcyBhcyBpbXBvcnRhbnQgYXMgdGhlIGZ1bmN0aW9uYWwgdHJhbnNhY3Rpb24uXCIsXG4gICAgICBcIlRoaXJkLCBiaWxsIHBheW1lbnQgaXNuJ3QgYSBvbmUtdGltZSB0YXNr4oCUaXQncyBhIHJlY3VycmluZyBtb250aGx5IGN5Y2xlLiBPdXIgZXhpc3RpbmcgZmxvdyB0cmVhdGVkIGV2ZXJ5IHBheW1lbnQgbGlrZSBhIG5ldyB0cmFuc2FjdGlvbiwgZm9yY2luZyB1c2VycyB0byByZS1lbnRlciAxMy1kaWdpdCBjb2RlcyBldmVyeSBtb250aC4gVGhpcyBmcmljdGlvbiB3YXMga2lsbGluZyBhZG9wdGlvbi5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVHJ1c3QgaXNzdWU6IFVzZXJzIGRpZG4ndCBrbm93IHdoYXQgd2Ugc3VwcG9ydGVkLCBkZXN0cm95aW5nIGNvbmZpZGVuY2UgYmVmb3JlIHRoZXkgc3RhcnRlZC5cIixcbiAgICAgIFwiRW1vdGlvbmFsIG5lZWQgPSBGdW5jdGlvbmFsIG5lZWQ6IFRoZSByZWNlaXB0IHdhcyB0aGUgZW50aXJlIHZhbHVlIHByb3Bvc2l0aW9uLCBub3QgZGVjb3JhdGlvbi5cIixcbiAgICAgIFwiUmVjdXJyaW5nIHdvcmtmbG93OiBXZSBuZWVkZWQgdG8gcmVtZW1iZXIsIG5vdCBtYWtlIHVzZXJzIHJlcGVhdCB0aGVtc2VsdmVzIG1vbnRobHkuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInBoaWxvc29waHlcIixcbiAgICB0aXRsZTogXCJEZXNpZ24gUGhpbG9zb3BoeVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpZ2l0aXplIHdoYXQgcGVvcGxlIGFscmVhZHkgZG8gaW4gdGhlIHBoeXNpY2FsIHdvcmxk4oCUdGhlbiBtYWtlIGl0IDEweCBiZXR0ZXIuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQZW9wbGUgYWxyZWFkeSBrZWVwIG5vdGVib29rcyBvZiBiaWxsIElEc+KAlHdlIGJ1aWx0IGEgZGlnaXRhbCBiaWxsIGxpc3QuIFRoZXkgc2V0IGNhbGVuZGFyIHJlbWluZGVyc+KAlHdlIGJ1aWx0IHNtYXJ0IG5vdGlmaWNhdGlvbnMuIFRoZXkgbWFrZSBwaG90b2NvcGllcyBvZiByZWNlaXB0c+KAlHdlIGNyZWF0ZWQgc2hhcmVhYmxlIG9mZmljaWFsIHJlY2VpcHRzLlwiLFxuICAgICAgXCJUaGUgZXhwZXJpZW5jZSBoYWQgdG8gZmVlbCBuYXR1cmFsIGZyb20gZGF5IG9uZSwgbm90IGxpa2UgbGVhcm5pbmcgbmV3IHNvZnR3YXJlLiBUaGlzIGFsaWdubWVudCB3aXRoIGV4aXN0aW5nIG1lbnRhbCBtb2RlbHMgd2FzIGNyaXRpY2FsIGZvciBhZG9wdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25zXCIsXG4gICAgdGl0bGU6IFwiRGVzaWduaW5nIHRoZSBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgZGVzaWduZWQgc2l4IGludGVyY29ubmVjdGVkIGZlYXR1cmVzIHRoYXQgYWRkcmVzc2VkIGVhY2ggY29yZSB1c2VyIG5lZWQgd2hpbGUgYnVpbGRpbmcgdHJ1c3QgYW5kIHJlZHVjaW5nIGZyaWN0aW9uLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiV29ya2luZyBjbG9zZWx5IHdpdGggcHJvZHVjdCBtYW5hZ2VycyBhbmQgZW5naW5lZXJzLCBJIGRlc2lnbmVkIGEgY29tcHJlaGVuc2l2ZSBzb2x1dGlvbiB0aGF0IGFkZHJlc3NlZCBhbGwgdGhyZWUga2V5IGluc2lnaHRzLiBFYWNoIGZlYXR1cmUgd2FzIHRlc3RlZCB0aHJvdWdoIHByb3RvdHlwZXMgYW5kIHZhbGlkYXRlZCB3aXRoIHVzZXJzIGJlZm9yZSBpbXBsZW1lbnRhdGlvbi5cIixcbiAgICBdLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiU2F2ZWQgQmlsbHMgJiBPbmUtVGFwIFVwZGF0ZXM6IEkgZGVzaWduZWQgYSAnc2F2ZSBiaWxsJyBmZWF0dXJlIGFsbG93aW5nIHVzZXJzIHRvIHJlZ2lzdGVyIGEgYmlsbCBvbmNlIGFuZCByZXVzZSBpdCBmb3JldmVyLiBBICdDaGVjayBmb3IgbmV3IGFtb3VudCcgYnV0dG9uIGZldGNoZXMgdGhlIGxhdGVzdCBiaWxsIGluc3RhbnRseeKAlGVsaW1pbmF0aW5nIHRoZSBuZWVkIHRvIHJlLWVudGVyIDEzLWRpZ2l0IGNvZGVzIG1vbnRobHkuXCIsXG4gICAgICBcIkRpZ2l0YWwgQmlsbCBNYW5hZ2VtZW50IEh1YjogSSBjcmVhdGVkIGEgY2VudHJhbGl6ZWQgZGFzaGJvYXJkIHNob3dpbmcgYWxsIGJpbGxzIGluIG9uZSBvcmdhbml6ZWQgbGlzdCB3aXRoIHN0YXR1cyBsYWJlbHMgKFBhaWQsIFBlbmRpbmcsIE92ZXJkdWUpLiBUaGUgZGVzaWduIHdhcyBiYWNrd2FyZC1jb21wYXRpYmxlIHNvIGV4aXN0aW5nIHVzZXJzIHNhdyB0aGVpciBwYXltZW50IGhpc3RvcnkgaW1tZWRpYXRlbHkuXCIsXG4gICAgICBcIlNtYXJ0IFJlbWluZGVyczogSSBkZXNpZ25lZCBhIHJlbWluZGVyIHN5c3RlbSBhbGxvd2luZyB1c2VycyB0byBzZXQgY3VzdG9tIG5vdGlmaWNhdGlvbnMgZm9yIGVhY2ggYmlsbCB3aXRoIHB1c2ggbm90aWZpY2F0aW9ucyBiZWZvcmUgZHVlIGRhdGVz4oCUYWRkcmVzc2luZyB0aGUgZm9yZ2V0ZnVsbmVzcyBwcm9ibGVtLlwiLFxuICAgICAgXCJRUi9CYXJjb2RlIFNjYW5uaW5nOiBJIGludGVncmF0ZWQgY2FtZXJhLWJhc2VkIGJpbGwgZW50cnkgZm9yIGluc3RhbnQgZGF0YSBjYXB0dXJl4oCUY3JpdGljYWwgZm9yIG9sZGVyIHVzZXJzIGFuZCBidXN5IHBlcnNvbmFzIHdobyBzdHJ1Z2dsZSB3aXRoIG1hbnVhbCBlbnRyeS5cIixcbiAgICAgIFwiSW1tZWRpYXRlIFRyYW5zcGFyZW5jeTogSSByZWRlc2lnbmVkIHRoZSBlbnRyeSBmbG93IHRvIHNob3cgc3VwcG9ydGVkIGJpbGwgcHJvdmlkZXJzIHVwZnJvbnQgd2l0aCBsb2dvcyBhbmQgY2xlYXIgZ3VpZGFuY2Ugb24gd2hhdCB3ZSBjYW4gYW5kIGNhbid0IHByb2Nlc3PigJRlbGltaW5hdGluZyB0cmlhbC1hbmQtZXJyb3IuXCIsXG4gICAgICBcIk9mZmljaWFsLCBTaGFyZWFibGUgUmVjZWlwdHM6IEkgZGVzaWduZWQgUERGLXF1YWxpdHkgcmVjZWlwdHMgd2l0aCBhbGwgbGVnYWwgZGV0YWlscyBhbmQgb25lLXRhcCBzaGFyaW5nIHZpYSBhbnkgY2hhbm5lbOKAlGJ1aWx0IHNwZWNpZmljYWxseSB0byBhZGRyZXNzIHRoZSAncHJvb2YnIHJlcXVpcmVtZW50IHRoYXQgZW1lcmdlZCBmcm9tIHJlc2VhcmNoLlwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJFYWNoIHNvbHV0aW9uIGRpcmVjdGx5IGFkZHJlc3NlZCBpbnNpZ2h0cyBmcm9tIHVzZXIgcmVzZWFyY2hcIixcbiAgICAgIFwiQmFja3dhcmQtY29tcGF0aWJsZSBkZXNpZ24gZW5zdXJlZCB6ZXJvIGxlYXJuaW5nIGN1cnZlIGZvciBleGlzdGluZyB1c2Vyc1wiLFxuICAgICAgXCJDcm9zcy1mdW5jdGlvbmFsIGNvbGxhYm9yYXRpb24gZW5zdXJlZCB0ZWNobmljYWwgZmVhc2liaWxpdHkgYW5kIGJ1c2luZXNzIGFsaWdubWVudFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJmYWlsdXJlXCIsXG4gICAgdGl0bGU6IFwiTGVhcm5pbmcgZnJvbSBGYWlsdXJlOiBWZXJzaW9uIDFcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJWZXJzaW9uIDEgbGF1bmNoZWQgYW5kIGZhaWxlZCB3aXRoaW4gNDggaG91cnMuIEJpbGxzIHRvb2sgOC0xMCBzZWNvbmRzIHRvIGxvYWQgd2l0aCBubyBsb2FkaW5nIHN0YXRlcywgc2tlbGV0b24gVUksIG9yIHByb2dyZXNzIGluZGljYXRvcnMuIFVzZXJzIHNhdyBibGFuayBzY3JlZW5zLCBhbmQgYmlsbCBwYXltZW50cyBkcm9wcGVkIDgwJS4gSSBsZWQgdGhlIGltbWVkaWF0ZSByb2xsYmFjayBhbmQgcmVkZXNpZ24uXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJUaGlzIGZhaWx1cmUgYmVjYW1lIHRoZSBtb3N0IHZhbHVhYmxlIGxlYXJuaW5nIGV4cGVyaWVuY2UuIEFzIHRoZSBkZXNpZ25lciwgSSB0b29rIHJlc3BvbnNpYmlsaXR5IGZvciBub3QgcHVzaGluZyBoYXJkZXIgb24gcGVyZm9ybWFuY2UgcmVxdWlyZW1lbnRzLiBHcmVhdCBVWCBkZXNpZ24gY2FuJ3Qgc2F2ZSBwb29yIHRlY2huaWNhbCBwZXJmb3JtYW5jZS4gV2UgaGFkIHNraXBwZWQgcmVhbGlzdGljIGxhdGVuY3kgdGVzdGluZywgZGlkbid0IHNpbXVsYXRlIHdvcnN0LWNhc2UgbmV0d29yayBjb25kaXRpb25zLCBhbmQgSSBoYWQgcHJpb3JpdGl6ZWQgYXV0b21hdGlvbiBvdmVyIHVzZXIgY29udHJvbCBpbiBteSBkZXNpZ25zLlwiLFxuICAgICAgXCJJIGltbWVkaWF0ZWx5IGNvbGxhYm9yYXRlZCB3aXRoIGVuZ2luZWVyaW5nIHRvIGRpYWdub3NlIHRoZSBpc3N1ZXMuIFRvZ2V0aGVyLCB3ZSByZWRlc2lnbmVkIHRoZSBhcHByb2FjaDogSSBjaGFuZ2VkIHRoZSBkZXNpZ24gdG8gdXNlIG1hbnVhbCAnQ2hlY2sgQW1vdW50JyBidXR0b25zIGZvciBpbnN0YW50IGZlZWRiYWNrLCBhZGRlZCBsYXp5IGxvYWRpbmcgYW5kIHNrZWxldG9uIHN0YXRlcyBldmVyeXdoZXJlLCBhbmQgd29ya2VkIHdpdGggdGhlIHRlYW0gdG8gaW1wbGVtZW50IGNvbXByZWhlbnNpdmUgcHJlLWxhdW5jaCB0ZWNobmljYWwgdGVzdGluZy4gSSBhbHNvIGFkdm9jYXRlZCBmb3IgbmV3IGNvbXBhbnktd2lkZSBzdGFuZGFyZHMgZm9yIHBlcmZvcm1hbmNlIHRlc3RpbmcgdGhhdCB3b3VsZCBwcmV2ZW50IHRoaXMgaW4gZnV0dXJlIHByb2plY3RzLlwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJUb29rIG93bmVyc2hpcDogTGVkIHJvbGxiYWNrIGFuZCByZWRlc2lnbiBwcm9jZXNzLCBkaWRuJ3QgYmxhbWUgb3RoZXJzXCIsXG4gICAgICBcIkNvbGxhYm9yYXRlZCB3aXRoIGVuZ2luZWVyaW5nOiBXb3JrZWQgdG9nZXRoZXIgdG8gc29sdmUgdGVjaG5pY2FsIHBlcmZvcm1hbmNlIGlzc3Vlc1wiLFxuICAgICAgXCJQcm9jZXNzIGltcHJvdmVtZW50OiBDcmVhdGVkIG5ldyBzdGFuZGFyZHMgdGhhdCBpbXByb3ZlZCBhbGwgZnV0dXJlIHByb2plY3RzXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInZlcnNpb24yXCIsXG4gICAgdGl0bGU6IFwiVmVyc2lvbiAyOiBTdWNjZXNzZnVsIExhdW5jaFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkFybWVkIHdpdGggbGVzc29ucyBmcm9tIFZlcnNpb24gMSwgSSByZWRlc2lnbmVkIHRoZSBleHBlcmllbmNlIHdpdGggcGVyZm9ybWFuY2UgYW5kIHVzZXIgY29udHJvbCBhcyBwcmlvcml0aWVzLiBWZXJzaW9uIDIgbGF1bmNoZWQgc3VjY2Vzc2Z1bGx5IGFuZCBhY2hpZXZlZCBvdXIgYWRvcHRpb24gZ29hbHMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJNYW51YWwgY29udHJvbDogSSByZWRlc2lnbmVkIGZsb3dzIHNvIHVzZXJzIHRyaWdnZXIgdXBkYXRlcyB3aGVuIHJlYWR5LCBnaXZpbmcgdGhlbSBjb250cm9sIGFuZCBpbnN0YW50IGZlZWRiYWNrLlwiLFxuICAgICAgXCJQZXJmb3JtYW5jZS1maXJzdDogSSBkZXNpZ25lZCBjb21wcmVoZW5zaXZlIGxvYWRpbmcgc3RhdGVzIGFuZCBza2VsZXRvbiBzY3JlZW5zIGZvciBldmVyeSBhY3Rpb24sIGVuc3VyaW5nIHVzZXJzIG5ldmVyIHNhdyBibGFuayBzY3JlZW5zLlwiLFxuICAgICAgXCJCYWNrd2FyZCBjb21wYXRpYmlsaXR5OiBJIGVuc3VyZWQgdGhlIGRlc2lnbiBoYWQgemVybyBsZWFybmluZyBjdXJ2ZSBmb3IgcmV0dXJuaW5nIHVzZXJz4oCUdGhleSBzYXcgdGhlaXIgaGlzdG9yeSBpbW1lZGlhdGVseS5cIixcbiAgICAgIFwiT2ZmaWNpYWwgcmVjZWlwdHM6IEkgZGVzaWduZWQgUERGLXF1YWxpdHkgcmVjZWlwdHMgdGhhdCBzb2x2ZWQgdGhlIGNvcmUgZW1vdGlvbmFsIG5lZWQgaWRlbnRpZmllZCBpbiByZXNlYXJjaC5cIixcbiAgICAgIFwiU21hcnQgcmVtaW5kZXJzOiBJIGRlc2lnbmVkIGEgbm90aWZpY2F0aW9uIHN5c3RlbSB0aGF0IGFkZHJlc3NlZCBmb3JnZXRmdWxuZXNzIHdpdGhvdXQgYmVpbmcgaW50cnVzaXZlLlwiLFxuICAgICAgXCJDbGVhciBjb21tdW5pY2F0aW9uOiBJIHJlZGVzaWduZWQgdGhlIGVudHJ5IGZsb3cgdG8gYnVpbGQgY29uZmlkZW5jZSBmcm9tIHNjcmVlbiBvbmUgd2l0aCB1cGZyb250IHRyYW5zcGFyZW5jeS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQXBwbGllZCBsZWFybmluZ3M6IEV2ZXJ5IFZlcnNpb24gMSBmYWlsdXJlIGJlY2FtZSBhIFZlcnNpb24gMiByZXF1aXJlbWVudFwiLFxuICAgICAgXCJVc2VyIGNvbnRyb2w6IFNoaWZ0ZWQgZnJvbSBhdXRvbWF0aW9uIHRvIHVzZXItdHJpZ2dlcmVkIGFjdGlvbnNcIixcbiAgICAgIFwiUGVyZm9ybWFuY2Ugc3RhbmRhcmRzOiBTZXQgbmV3IGJlbmNobWFya3MgZm9yIHRoZSBlbnRpcmUgcHJvZHVjdFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbXBhY3RcIixcbiAgICB0aXRsZTogXCJSZXN1bHRzICYgQnVzaW5lc3MgSW1wYWN0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhlIHJlZGVzaWduIGFjaGlldmVkIG91ciBhZG9wdGlvbiBnb2FscyBhbmQgdHJhbnNmb3JtZWQgYmlsbCBwYXltZW50IGludG8gYSBjb3JlIHZhbHVlIHByb3Bvc2l0aW9uIGRyaXZpbmcgcmVjdXJyaW5nIGVuZ2FnZW1lbnQuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJXaXRoaW4gOCB3ZWVrcyBvZiBWZXJzaW9uIDIgbGF1bmNoLCBiaWxsIHBheW1lbnQgYWRvcHRpb24gaW5jcmVhc2VkIGZyb20gNCUgdG8gNDcl4oCUYSAxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZSBvZiB0b3RhbCBwYXltZW50cy4gQmlsbCBwYXltZW50IHdlbnQgZnJvbSBhIG5lZ2xlY3RlZCBmZWF0dXJlIHRvIG9uZSBvZiBTZXRhcmVZZWsncyBwcmltYXJ5IHZhbHVlIHByb3Bvc2l0aW9ucywgZHJpdmluZyBtb250aGx5IHJlY3VycmluZyBlbmdhZ2VtZW50LlwiLFxuICAgICAgXCJUaGUgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnRzIHJlZHVjZWQgZHJvcC1vZmYgcmF0ZXMgYnkgODAlIGNvbXBhcmVkIHRvIFZlcnNpb24gMS4gVXNlciBzYXRpc2ZhY3Rpb24gc2NvcmVzIGluY3JlYXNlZCBzaWduaWZpY2FudGx5LCBhbmQgYmlsbCBwYXltZW50IGJlY2FtZSBhIHRvcC0zIGZlYXR1cmUgYnkgdXNhZ2UgZnJlcXVlbmN5LiBUaGlzIHRyYW5zZm9ybWF0aW9uIGhlbHBlZCBzb2xpZGlmeSBTZXRhcmVZZWsncyBwb3NpdGlvbiBhcyBhIGNvbXByZWhlbnNpdmUgZmluYW5jaWFsIHNlcnZpY2VzIHBsYXRmb3JtIHNlcnZpbmcgb3ZlciAxIG1pbGxpb24gdXNlcnMuXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkb3B0aW9uIHJhdGVcIixcbiAgICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGFjaGlldmVkIHdpdGhpbiA4IHdlZWtzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEcm9wLW9mZiByZWR1Y3Rpb25cIixcbiAgICAgICAgdmFsdWU6IFwiODAlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcmZvcm1hbmNlIGltcHJvdmVtZW50IHZzIFZlcnNpb24gMVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRmVhdHVyZSByYW5raW5nXCIsXG4gICAgICAgIHZhbHVlOiBcIlRvcCAzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgcGF5bWVudCBieSB1c2FnZSBmcmVxdWVuY3lcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgc2F0aXNmYWN0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBcIuKGkSBTaWduaWZpY2FudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNZWFzdXJlZCB0aHJvdWdoIGFwcCBzdG9yZSByZXZpZXdzIGFuZCBzdXJ2ZXlzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHRhdWdodCBtZSB2YWx1YWJsZSBsZXNzb25zIGFib3V0IHByb2R1Y3QgZGVzaWduLCB0ZWNobmljYWwgY29sbGFib3JhdGlvbiwgYW5kIHVzZXIgcmVzZWFyY2ggdGhhdCBJIGFwcGx5IHRvIGV2ZXJ5IHByb2plY3QuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJEZXNpZ24gZG9lc24ndCBleGlzdCBpbiBpc29sYXRpb246IEV2ZW4gcGVyZmVjdCBVWCBmYWlscyB3aXRob3V0IHRlY2huaWNhbCBwZXJmb3JtYW5jZS4gSSBub3cgYWx3YXlzIGNvbGxhYm9yYXRlIGNsb3NlbHkgd2l0aCBlbmdpbmVlcmluZyBvbiBwZXJmb3JtYW5jZSByZXF1aXJlbWVudHMgZnJvbSBkYXkgb25lLlwiLFxuICAgICAgXCJFbW90aW9uYWwgbmVlZHMgPSBGdW5jdGlvbmFsIG5lZWRzOiBUaGUgcmVjZWlwdCB3YXNuJ3QgZGVjb3JhdGlvbuKAlGl0IHdhcyB0aGUgZW50aXJlIHZhbHVlIHByb3Bvc2l0aW9uLiBVc2VyIHJlc2VhcmNoIHJldmVhbGVkIGVtb3Rpb25hbCBkcml2ZXJzIHRoYXQgd2VyZSBhcyBpbXBvcnRhbnQgYXMgZnVuY3Rpb25hbCByZXF1aXJlbWVudHMuXCIsXG4gICAgICBcIlJlYWwgYmVoYXZpb3IgPiBBc3N1bXB0aW9uczogVXNlcnMgc2hvd2VkIHVzIHdoYXQgdGhleSBuZWVkZWQgdGhyb3VnaCByZXNlYXJjaC4gSSBsZWFybmVkIHRvIHRydXN0IHVzZXIgYmVoYXZpb3Igb3ZlciBpbnRlcm5hbCBhc3N1bXB0aW9ucy5cIixcbiAgICAgIFwiQmFja3dhcmQgY29tcGF0aWJpbGl0eSBpcyB0cnVzdDogRXNwZWNpYWxseSBpbiBmaW5hbmNpYWwgcHJvZHVjdHMsIGZhbWlsaWFyaXR5IGVxdWFscyBjb25maWRlbmNlLiBJIGRlc2lnbiBmb3IgZXhpc3RpbmcgdXNlcnMgZmlyc3QsIHRoZW4gb3B0aW1pemUgZm9yIG5ldyBvbmVzLlwiLFxuICAgICAgXCJGYWlsdXJlIGFjY2VsZXJhdGVzIGxlYXJuaW5nOiBPd25pbmcgbWlzdGFrZXMgYW5kIGl0ZXJhdGluZyBmYXN0IGJ1aWx0IGEgc3Ryb25nZXIgcHJvZHVjdCBhbmQgcHJvY2Vzcy4gSSBub3cgYWR2b2NhdGUgZm9yIHJhcGlkIGl0ZXJhdGlvbiBhbmQgbGVhcm5pbmcgY3ljbGVzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJvcmdhbml6YXRpb25hbFwiLFxuICAgIHRpdGxlOiBcIk9yZ2FuaXphdGlvbmFsIEltcGFjdFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJleW9uZCB0aGUgcHJvZHVjdCwgSSBpbmZsdWVuY2VkIHByb2Nlc3MgaW1wcm92ZW1lbnRzIHRoYXQgYmVuZWZpdGVkIHRoZSBlbnRpcmUgb3JnYW5pemF0aW9uLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiSSBhZHZvY2F0ZWQgZm9yIGFuZCBoZWxwZWQgZXN0YWJsaXNoIG5ldyBjb21wYW55LXdpZGUgc3RhbmRhcmRzIGJhc2VkIG9uIGxlYXJuaW5ncyBmcm9tIHRoaXMgcHJvamVjdC4gVGhlc2UgY2hhbmdlcyBpbXByb3ZlZCBldmVyeSBmZWF0dXJlIHRoYXQgY2FtZSBhZnRlciwgZGVtb25zdHJhdGluZyB0aGUgdmFsdWUgb2YgbGVhcm5pbmcgZnJvbSBmYWlsdXJlIGFuZCBzaGFyaW5nIGtub3dsZWRnZSBhY3Jvc3MgdGVhbXMuXCIsXG4gICAgXSxcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkkgZXN0YWJsaXNoZWQgbWFuZGF0b3J5IHByZS1sYXVuY2ggcGVyZm9ybWFuY2UgdGVzdGluZyBhcyBzdGFuZGFyZCBwcmFjdGljZSBhY3Jvc3MgYWxsIHByb2R1Y3QgdGVhbXMuXCIsXG4gICAgICBcIkkgd29ya2VkIHdpdGggZW5naW5lZXJpbmcgdG8gc2V0IHVwIHN0YWdpbmcgZW52aXJvbm1lbnRzIHdpdGggcmVhbC13b3JsZCBkYXRhIGZvciByZWFsaXN0aWMgdGVzdGluZy5cIixcbiAgICAgIFwiSSBjcmVhdGVkIGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyByZXF1aXJpbmcgbG9hZGluZy9za2VsZXRvbiBzdGF0ZXMgZm9yIGFsbCBoZWF2eSBvcGVyYXRpb25zLlwiLFxuICAgICAgXCJJIGZhY2lsaXRhdGVkIHNoYXJlZCBzdGFuZGFyZHMgYW5kIGNvbGxhYm9yYXRpb24gcHJvY2Vzc2VzIGJldHdlZW4gZGVzaWduIGFuZCBlbmdpbmVlcmluZyB0ZWFtcy5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiUHJvY2VzcyBsZWFkZXJzaGlwOiBJbmZsdWVuY2VkIG9yZ2FuaXphdGlvbmFsIHN0YW5kYXJkcyBiZXlvbmQgbXkgaW1tZWRpYXRlIHByb2plY3RcIixcbiAgICAgIFwiQ3Jvc3MtZnVuY3Rpb25hbCBpbXBhY3Q6IEltcHJvdmVkIGNvbGxhYm9yYXRpb24gYmV0d2VlbiBkZXNpZ24gYW5kIGVuZ2luZWVyaW5nXCIsXG4gICAgICBcIktub3dsZWRnZSBzaGFyaW5nOiBEb2N1bWVudGVkIGxlYXJuaW5ncyB0aGF0IGJlbmVmaXRlZCBmdXR1cmUgcHJvamVjdHNcIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkeUVudHJpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5RW50cnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICB0aXRsZTogXCJEaXZhciBTZWN1cmUgQ2FsbFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIlJlZHVjZWQgaGFyYXNzbWVudCBieSA2MCUgZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMgdGhyb3VnaCBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBsYXllciBpbnNpZGUgSXJhbidzIGxhcmdlc3QgbWFya2V0cGxhY2UuXCIsXG4gICAgZm9jdXM6IFwiVHJ1c3QgJiBTYWZldHlcIixcbiAgICBwYXRoOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50XCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiUmUtYXJjaGl0ZWN0ZWQgbGlmZWN5Y2xlIGpvdXJuZXlzIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCBjb252ZXJ0ZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIDYwSysgZGFpbHkgYWN0aXZlIHVzZXJzLlwiLFxuICAgIGZvY3VzOiBcIlJldGVudGlvbiAmIEdyb3d0aFwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICAgIHRpdGxlOiBcIlNldGFyZVllayBCaWxsIFBheW1lbnRcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJJbmNyZWFzZWQgYmlsbCBwYXltZW50IGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGF0IFNldGFyZSBBdmFsJ3MgU2V0YXJlWWVrIGFwcCBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgICBmb2N1czogXCJQcm9kdWN0IERlc2lnbiAmIEdyb3d0aFwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICB9LFxuXTtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIHNldGFyZU92ZXJ2aWV3LCBzZXRhcmVZZWtPdmVydmlldyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBkaXZhclN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IGRpdmFyT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbGAsXG4gIGltYWdlOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlRydXN0ICYgU2FmZXR5XCIsIFwiSGFyYXNzbWVudCBSZWR1Y3Rpb25cIiwgXCJNYXJrZXRwbGFjZVwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBkaXZhckNhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsIENhc2UgU3R1ZHkg4oCUIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBkaXZhclN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiTGlmZWN5Y2xlIHJlZGVzaWduIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCB0dXJuZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRgLFxuICBpbWFnZTogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUmV0ZW50aW9uXCIsIFwiTGlmZWN5Y2xlXCIsIFwiR3Jvd3RoIERlc2lnblwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50IENhc2UgU3R1ZHkg4oCUIERvdWJsaW5nIFJldGFpbmVkIFJldmVudWVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBsaWZlY3ljbGUgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAgICAgIGFsdDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IHNldGFyZVN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlWWVrU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlWWVrT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIHNldGFyZVlla092ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJSZWRlc2lnbmVkIGJpbGwgcGF5bWVudCBleHBlcmllbmNlIHRoYXQgaW5jcmVhc2VkIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGJ5IHNvbHZpbmcgdHJ1c3QsIHRyYW5zcGFyZW5jeSwgYW5kIHJlY3VycmluZyB3b3JrZmxvdyBjaGFsbGVuZ2VzLlwiLFxuICBhdXRob3I6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgfSxcbiAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvc2V0YXJlLXllay1iaWxsLXBheW1lbnRgLFxuICBpbWFnZTogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUHJvZHVjdCBEZXNpZ25cIiwgXCJHcm93dGhcIiwgXCJGaW50ZWNoXCIsIFwiVXNlciBFeHBlcmllbmNlXCIsIFwiU2V0YXJlIEF2YWxcIiwgXCJTZXRhcmVZZWtcIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrQ2FzZVN0dWR5TWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiU2V0YXJlWWVrIEJpbGwgUGF5bWVudCBDYXNlIFN0dWR5IOKAlCBGcm9tIDQlIHRvIDQ3JSBBZG9wdGlvbiBhdCBTZXRhcmUgQXZhbFwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBzZXRhcmVZZWtPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUmVkZXNpZ25lZCBTZXRhcmVZZWsncyBiaWxsIHBheW1lbnQgZXhwZXJpZW5jZSBhdCBTZXRhcmUgQXZhbCB0byBpbmNyZWFzZSBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JSBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICBoZWlnaHQ6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBzZXRhcmVZZWtTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBSUEsSUFBTSxnQ0FBZ0MsR0FBRyxjQUE2QztBQUFBLEVBQ3BGLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFFdkIsdUJBQ0UsdUJBOEpFLGVBOUpGO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixJQUFJLFFBQVE7QUFBQSxJQUNaLFNBQVMsRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUEsSUFDMUIsSUFBSSxFQUFFLFVBQVUsS0FBSyxJQUFJLFFBQVEsaUJBQWlCLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsSUFKeEUsVUE4SkU7QUFBQSxzQkF4SkEsdUJBZ0NFLGVBaENGO0FBQUEsUUFBTyxTQUFTLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRTtBQUFBLFFBQWpDLFVBZ0NFO0FBQUEsVUEvQkMsUUFBUSwyQkFDUCx1QkFFRSxvQkFGRjtBQUFBLFlBQVksU0FBUTtBQUFBLFlBQVUsT0FBTTtBQUFBLFlBQXBDLFVBQ0csUUFBUTtBQUFBLGFBRFgsaUNBRUU7QUFBQSwwQkFFSix1QkFBMEMsb0JBQTFDO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBcEIs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O0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQ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QSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFB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QUFFQSxJQUFNLHVCQUF1QztBQUFBLEVBQzNDLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULE1BQU0sZUFBZTtBQUFBLEVBQ3JCLGFBQ0U7QUFBQSxFQUNGLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxLQUFLLEdBQUc7QUFBQSxFQUNSLE9BQU8sZUFBZSxVQUFVO0FBQUEsRUFDaEMsU0FBUyxDQUFDLGFBQWEsYUFBYSxlQUFlO0FBQ3JEO0FBRU8sSUFBTSwwQkFBd0M7QUFBQSxFQUNuRCxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLGVBQWUsVUFBVTtBQUFBLE1BQzlCLEtBQUssZUFBZSxVQUFVO0FBQUEsTUFDOUIsT0FBTyxlQUFlLFVBQVUsU0FBUztBQUFBLE1BQ3pDLFFBQVEsZUFBZSxVQUFVLFVBQVU7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjtBQUVBLElBQU0sMEJBQTBDO0FBQUEsRUFDOUMsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsTUFBTSxrQkFBa0I7QUFBQSxFQUN4QixhQUNFLGtCQUFrQixZQUNsQjtBQUFBLEVBQ0YsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLEtBQUssR0FBRztBQUFBLEVBQ1IsT0FBTyxrQkFBa0IsVUFBVTtBQUFBLEVBQ25DLFNBQVMsQ0FBQyxrQkFBa0IsVUFBVSxXQUFXLG1CQUFtQixlQUFlLFdBQVc7QUFDaEc7QUFFTyxJQUFNLDZCQUEyQztBQUFBLEVBQ3RELE9BQU87QUFBQSxFQUNQLGFBQ0Usa0JBQWtCLFlBQ2xCO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLGtCQUFrQixVQUFVO0FBQUEsTUFDakMsS0FBSyxrQkFBa0IsVUFBVTtBQUFBLE1BQ2pDLE9BQU8sa0JBQWtCLFVBQVUsU0FBUztBQUFBLE1BQzVDLFFBQVEsa0JBQWtCLFVBQVUsVUFBVTtBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOyIsCiAgImRlYnVnSWQiOiAiMjA0QUQwMjk5NTVDRjUwODY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
