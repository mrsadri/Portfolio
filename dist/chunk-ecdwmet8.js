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
  subtitle: "Led end-to-end redesign of SetareYek's bill payment experience, increasing adoption from 4% to 47% through rigorous user research, strategic design, and cross-functional collaboration.",
  meta: [
    { label: "Role", value: "Senior Product Designer · End-to-End Lead" },
    { label: "Timeline", value: "2022 – 2023 (12 months)" },
    { label: "Company", value: "Setare Aval (SetareYek app)" },
    { label: "Team", value: "Product, Engineering, Research, Support, Legal" },
    { label: "Impact", value: "10x adoption growth, exceeded 25% goal by 88%" }
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
    id: "tldr",
    title: "TL;DR",
    summary: "Quick summary: Problem, approach, solution, and impact at a glance.",
    body: [
      "\uD83D\uDCCA Problem: 4% bill payment adoption despite 1M+ users. Users were trying but failing to complete payments.",
      "\uD83D\uDD0D Approach: Multi-method research (18 interviews, 200+ session recordings) revealed trust, transparency, and recurring workflow challenges.",
      "\uD83D\uDCA1 Solution: Six interconnected features addressing core user needs: saved bills, official receipts, smart reminders, QR scanning, provider transparency, and bill management hub.",
      "\uD83D\uDCC8 Impact: 47% adoption in 8 weeks (10x growth), exceeded 25% goal by 88%. Bill payment became a top-3 feature driving recurring engagement."
    ],
    highlights: [
      "10x adoption growth: 4% → 47%",
      "Exceeded goal: 188% of target (47% vs 25% goal)",
      "Top-3 feature: By usage frequency",
      "User satisfaction: 4.2 → 4.6 stars (+9.5% increase)"
    ]
  },
  {
    id: "context",
    title: "The Business Problem",
    summary: "4% adoption despite 1M+ users. Users were trying but failing. Goal: 25% in 6 months. Result: 47% in 8 weeks.",
    body: [
      "Ahmad, a 58-year-old building manager, keeps a worn notebook with 12 residents' utility codes. He tried SetareYek once—gave up after 10 minutes. This is how we fixed it."
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
    summary: "Iran's leading fintech app: 1M+ users, 10+ service categories. Bill payment = strategic opportunity for recurring engagement.",
    body: [
      "SetareYek is a one-stop platform for mobile recharges, bills, transportation, health services, and more. Bill payment is a high-frequency, monthly transaction—solving it well would transform SetareYek from a utility app into an essential daily companion."
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
    summary: "Data showed users were trying but failing. 96% avoided bills. 40%+ abandonment rate. Why?",
    body: [],
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
    summary: "Multi-method research: 18 interviews, 200+ session recordings, 150+ reviews. Two personas emerged.",
    body: [
      "I observed users in their natural environments—like watching a building manager maintain his physical notebook. This revealed what 'proof' meant in practice."
    ],
    highlights: [
      "18 user interviews across 7 households and 4 building managers (ages 28-62)",
      "200+ session recordings analyzed for behavioral patterns",
      "150+ app store reviews synthesized for sentiment analysis",
      "Contextual inquiry revealed real-world workflows we needed to digitize",
      "Multi-method synthesis connected qualitative insights to quantitative patterns"
    ]
  },
  {
    id: "personas",
    title: "Two Core Personas",
    summary: "Two distinct personas with different needs drove every design decision.",
    body: [],
    bullets: [
      "The Building Manager (Age 55+): Manages utilities for 8-15 unit apartment buildings. Pays 10-20 bills monthly across water, electricity, and gas. Critical need: official, shareable documentation for residents. Zero tolerance for ambiguity. Low digital literacy, prefers familiar patterns.",
      "The Head of Household (Age 30-50): Pays 4-6 family bills monthly (utilities, internet, phone). Manages household finances alongside full-time work. Critical need: avoid re-entering 13-digit codes every month. Constantly forgets due dates. Values speed and efficiency."
    ],
    quotes: [
      {
        author: "Building Manager",
        role: "Age 55+, manages 12-unit apartment building",
        text: "I make photocopies of every receipt and give them to residents. I need proof that it's paid."
      },
      {
        author: "Head of Household",
        role: "Age 38, pays 5 bills monthly for family",
        text: "Entering this 13-digit code every single month is torture."
      }
    ]
  },
  {
    id: "insights",
    title: "Key Insights That Changed Everything",
    summary: "Three insights shifted our strategy: trust, receipts, and recurring workflow.",
    body: [],
    highlights: [
      "Trust issue: Users didn't know what we supported, destroying confidence before they started.",
      "Emotional need = Functional need: The receipt was the entire value proposition, not decoration.",
      "Recurring workflow: We needed to remember, not make users repeat themselves monthly."
    ]
  },
  {
    id: "competitive",
    title: "Competitive Analysis",
    summary: "Competitors had similar problems. Our differentiation: bill management hub + official receipts + saved bills.",
    body: [],
    highlights: [
      "Competitors: Similar problems with coverage clarity and receipt quality",
      "Differentiation: Bill management hub + official receipts + recurring workflow",
      "Market gap: No competitor offered saved bills with one-tap updates"
    ]
  },
  {
    id: "philosophy",
    title: "Design Philosophy",
    summary: "Digitize what people already do—then make it 10x better.",
    body: [
      "Notebooks → Digital bill list. Calendar reminders → Smart notifications. Photocopies → Shareable receipts. Natural from day one."
    ]
  },
  {
    id: "design-process",
    title: "Design Process & Iteration",
    summary: "12 iterations, 8 user tests, 50+ interaction states. 87% preferred manual control—key insight.",
    body: [],
    highlights: [
      "Multiple iterations: Explored automated vs. manual approaches through prototyping",
      "User validation: Tested prototypes with 8 users before build",
      "Detailed specs: Created comprehensive design documentation for engineering",
      "Collaboration artifacts: Used Figma comments and workshops to align stakeholders"
    ]
  },
  {
    id: "technical-constraints",
    title: "Technical Constraints & Trade-offs",
    summary: "6.2s API latency, 2.5 Mbps connection. Trade-off: Manual control > automation. Result: 34% satisfaction increase.",
    body: [],
    bullets: [
      "API latency: 2-8 second bill lookups required manual user triggers instead of automation",
      "Database scale: Implemented lazy loading and pagination for saved bills to handle 1M+ users",
      "Network reliability: Designed offline-first patterns for bill entry, syncing when connection restored",
      "Trade-off rationale: User control + instant feedback > automation + slow loading"
    ],
    highlights: [
      "Constraint-based design: Worked within technical limitations to create better UX",
      "Collaborative problem-solving: Partnered with engineering to find optimal solutions",
      "User control over automation: Manual triggers improved satisfaction despite seeming less 'smart'"
    ]
  },
  {
    id: "accessibility",
    title: "Accessibility & Inclusive Design",
    summary: "WCAG AA compliance, 44x44px touch targets, 16px+ fonts, RTL support, QR scanning alternative.",
    body: [],
    bullets: [
      "Visual: High contrast ratios (WCAG AA), large touch targets (44x44px minimum), readable font sizes (16px+ body)",
      "Cognitive: Clear error messages, jargon-free copy, multiple task completion paths",
      "RTL support: Proper Persian right-to-left layout mirroring for all UI elements",
      "Multi-modal: QR scanning for users who struggle with manual entry",
      "Print accessibility: Receipts designed to be readable both digitally and when printed"
    ],
    highlights: [
      "Designed for 55+ persona: Large targets, clear typography, simple interactions",
      "Financial product standards: Extra attention to clarity and error prevention",
      "RTL localization: Proper Persian language support throughout"
    ]
  },
  {
    id: "solutions",
    title: "Designing the Solution",
    summary: "Six features addressing trust, transparency, and recurring workflow challenges.",
    body: [],
    bullets: [
      "Saved Bills: Register once, reuse forever. One-tap 'Check Amount' button—no more 13-digit codes.",
      "Bill Management Hub: All bills in one dashboard with status labels (Paid/Pending/Overdue). Backward-compatible.",
      "Smart Reminders: Custom notifications per bill before due dates.",
      "QR Scanning: Camera-based entry for instant capture—critical for older users.",
      "Provider Transparency: Supported providers shown upfront with logos—no trial-and-error.",
      "Official Receipts: PDF-quality, shareable via any channel—addresses 'proof' requirement."
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
    summary: "Version 1 failed in 48 hours. 8-10s load times, blank screens, 80% drop. Rolled back. Learned: UX can't save poor performance.",
    body: [
      "I took ownership, collaborated with engineering, and redesigned with performance-first approach. Created new company-wide performance standards."
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
    summary: "Performance-first design: Manual control, loading states, backward compatibility. Launched successfully.",
    bullets: [
      "Manual control: Users trigger updates—instant feedback, no blank screens.",
      "Loading states: Skeleton screens for every action.",
      "Backward compatible: Zero learning curve—existing users see history immediately.",
      "Official receipts: PDF-quality, solves emotional need.",
      "Smart reminders: Addresses forgetfulness without being intrusive.",
      "Upfront transparency: Build confidence from screen one."
    ],
    highlights: [
      "Applied learnings: Every Version 1 failure became a Version 2 requirement",
      "User control: Shifted from automation to user-triggered actions",
      "Performance standards: Set new benchmarks for the entire product"
    ]
  },
  {
    id: "feature-impact",
    title: "Feature Impact Breakdown",
    summary: "Post-launch analytics: Which features drove adoption?",
    body: [],
    metrics: [
      {
        label: "Saved Bills adoption",
        value: "68%",
        description: "Of bill payment users saved at least one bill (highest impact feature)"
      },
      {
        label: "QR Scanning usage",
        value: "42%",
        description: "Preferred QR scan over manual entry (exceeded 30% expectation)"
      },
      {
        label: "Reminder activation",
        value: "55%",
        description: "Users enabled reminders for saved bills"
      },
      {
        label: "Receipt sharing",
        value: "73%",
        description: "Users shared receipts at least once (validated emotional need)"
      }
    ],
    bullets: [
      "Saved Bills: 68% adoption—highest impact, drove recurring usage",
      "QR Scanning: 42% usage—exceeded 30% expectation, strong demand from older users",
      "Receipt sharing: 73% shared at least once—validated emotional need",
      "Transparency: Upfront provider logos prevented trial-and-error abandonment"
    ],
    highlights: [
      "Data validated research: Features based on user insights showed highest adoption",
      "Receipt sharing exceeded expectations: Proved emotional need was as important as functional",
      "Saved bills drove retention: Users who saved bills returned monthly vs. one-time users"
    ]
  },
  {
    id: "impact",
    title: "Results & Business Impact",
    summary: "The redesign achieved our adoption goals and transformed bill payment into a core value proposition driving recurring engagement.",
    body: [
      "47% adoption in 8 weeks (exceeded 25% goal by 88%). Week-by-week: 12% → 18% → 28% → 38% → 47%."
    ],
    metrics: [
      {
        label: "Adoption rate",
        value: "4% → 47%",
        description: "10x growth achieved within 8 weeks (exceeded 25% goal)"
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
        value: "4.2 → 4.6",
        description: "App store rating improvement (+9.5% increase)"
      },
      {
        label: "Goal achievement",
        value: "188%",
        description: "Exceeded 25% goal by reaching 47% adoption"
      },
      {
        label: "Time saved",
        value: "3 hours/month",
        description: "Average time saved per Building Manager user"
      }
    ],
    quotes: [
      {
        author: "Building Manager",
        role: "Post-launch interview",
        text: "Finally, I can share receipts with residents without making photocopies. This saves me hours every month."
      },
      {
        author: "Head of Household",
        role: "App store review",
        text: "I love that I don't have to enter that long code every month. Saved bills changed everything."
      },
      {
        author: "User feedback",
        role: "In-app survey",
        text: "The official receipt feature is exactly what I needed. I can show my landlord proof of payment instantly."
      }
    ]
  },
  {
    id: "learnings",
    title: "Key Learnings",
    summary: "Five lessons I apply to every project.",
    bullets: [
      "UX can't save poor performance: Collaborate with engineering on performance from day one.",
      "Emotional = Functional: Receipt wasn't decoration—it was the entire value proposition.",
      "Real behavior > Assumptions: Trust user research over internal assumptions.",
      "Backward compatibility = Trust: Familiarity equals confidence in financial products.",
      "Failure accelerates learning: Own mistakes, iterate fast, share learnings."
    ]
  },
  {
    id: "organizational",
    title: "Organizational Impact",
    summary: "Created company-wide performance testing standards. Improved all future projects.",
    body: [],
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

//# debugId=47F044A0FA721CBF64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXhwYW5kTW9yZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXYudHN4IiwgIi4uL3NyYy9zaGFyZWQvdXRpbHMvc3gudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb24udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIERpdmlkZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZENvbXBvbmVudCA9ICh7IHNlY3Rpb24gfTogeyBzZWN0aW9uOiBDYXNlU3R1ZHlTZWN0aW9uIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIGlkPXtzZWN0aW9uLmlkfVxuICAgICAgc3BhY2luZz17eyB4czogMi41LCBtZDogMyB9fVxuICAgICAgc3g9e3sgbWF4V2lkdGg6IDc2MCwgbXg6IFwiYXV0b1wiLCBzY3JvbGxNYXJnaW5Ub3A6IHsgeHM6IDk2LCBtZDogMTQwIH0gfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMSB9fT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiB7IHhzOiAxLCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiBpbmRleCA8IHNlY3Rpb24uYm9keSEubGVuZ3RoIC0gMSA/IHsgeHM6IDIsIG1kOiAxLjUgfSA6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiIFxuICAgICAgICAgICAgICBrZXk9e3BvaW50fSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICBhbHQ9e3NlY3Rpb24uaW1hZ2UuYWx0fVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCA9IG1lbW8oXG4gIENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50LFxuICAocHJldiwgbmV4dCkgPT4gcHJldi5zZWN0aW9uID09PSBuZXh0LnNlY3Rpb24sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNS44OCA5LjI5IDEyIDEzLjE3IDguMTIgOS4yOWEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsNC41OSA0LjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw0LjU5LTQuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MS0uMzktLjM4LTEuMDMtLjM5LTEuNDIgMFwiXG59KSwgJ0V4cGFuZE1vcmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlLCBEaXZpZGVyLCBJY29uQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUsIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgRXhwYW5kTW9yZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVSb3VuZGVkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcyA9IHtcbiAgc2VjdGlvbnM6IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcbiAgYWN0aXZlU2VjdGlvbklkOiBzdHJpbmc7XG4gIG9uTmF2aWdhdGU6IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb3V0bGluZUxhYmVsPzogc3RyaW5nO1xuICBjb250YWluZXJTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgQ2FzZVN0dWR5T3V0bGluZU5hdiA9ICh7XG4gIHNlY3Rpb25zLFxuICBhY3RpdmVTZWN0aW9uSWQsXG4gIG9uTmF2aWdhdGUsXG4gIG91dGxpbmVMYWJlbCA9IFwiT3V0bGluZVwiLFxuICBjb250YWluZXJTeCxcbn06IENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCFpc01vYmlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICBzcGFjaW5nPXsxfVxuICAgICAgc3g9e21lcmdlU3goXG4gICAgICAgICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KSxcbiAgICAgICAgY29udGFpbmVyU3gsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3sgY3Vyc29yOiBpc01vYmlsZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaXNNb2JpbGUgJiYgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtvdXRsaW5lTGFiZWx9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2VcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBleHBhbmRlZCA/IFwicm90YXRlKDE4MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZXhwYW5kZWQgPyBcIkNvbGxhcHNlIG91dGxpbmVcIiA6IFwiRXhwYW5kIG91dGxpbmVcIn1cbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeHBhbmRNb3JlUm91bmRlZEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIj5cbiAgICAgICAgPERpdmlkZXIgc3g9e3sgbWI6IDEgfX0gLz5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb25OYXZpZ2F0ZShldmVudCwgc2VjdGlvbi5pZCk7XG4gICAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtY3VycmVudD17YWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yOClcIlxuICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgcHg6IDEuNSxcbiAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgU3hQcm9wcywgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBhcHBlbmQgPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KHRhcmdldDogU3hQcm9wczxUVGhlbWU+W10sIHZhbHVlPzogU3hQcm9wczxUVGhlbWU+KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiBhcHBlbmQodGFyZ2V0LCBpdGVtKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFyZ2V0LnB1c2godmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlU3ggPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KFxuICBiYXNlOiBTeFByb3BzPFRUaGVtZT4sXG4gIC4uLm92ZXJyaWRlczogQXJyYXk8U3hQcm9wczxUVGhlbWU+IHwgdW5kZWZpbmVkPlxuKTogU3hQcm9wczxUVGhlbWU+ID0+IHtcbiAgY29uc3QgZW50cmllczogU3hQcm9wczxUVGhlbWU+W10gPSBbXTtcbiAgYXBwZW5kKGVudHJpZXMsIGJhc2UpO1xuICBvdmVycmlkZXMuZm9yRWFjaCgodmFsdWUpID0+IGFwcGVuZChlbnRyaWVzLCB2YWx1ZSkpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBlbnRyaWVzWzBdITtcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzIGFzIFN4UHJvcHM8VFRoZW1lPjtcbn07XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlPdmVydmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25Qcm9wcyA9IHtcbiAgZXllYnJvdzogc3RyaW5nO1xuICBvdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXc7XG4gIHN1YnRpdGxlRmFsbGJhY2s/OiBzdHJpbmc7XG4gIG1ldGFUaXRsZT86IHN0cmluZztcbiAgc3RhdHNUaXRsZT86IHN0cmluZztcbiAgc3RhdHNWYXJpYW50PzogXCJncmFkaWVudFwiIHwgXCJvdXRsaW5lZFwiO1xuICBoZXJvQmFja2Ryb3BTeD86IFN4UHJvcHM8VGhlbWU+O1xuICBoZXJvU3VyZmFjZVN4PzogU3hQcm9wczxUaGVtZT47XG4gIHN0YXRzQ2FyZFN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0SGVyb0JhY2tkcm9wU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBpbnNldDogMCxcbiAgYm9yZGVyUmFkaXVzOiB7IHhzOiAyNCwgbWQ6IDMyIH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE4KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTYsMjgsNTYsMC44OCksIHJnYmEoMzYsNjQsMTIwLDAuNzIpKVwiLFxuICBmaWx0ZXI6IFwiYmx1cig0OHB4KVwiLFxuICB6SW5kZXg6IC0xLFxufSk7XG5cbmNvbnN0IGRlZmF1bHRIZXJvU3VyZmFjZVN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LCAyNTEsIDI1NSwgMC44OClcIiA6IFwicmdiYSgxMywgMjAsIDM2LCAwLjg4KVwiLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICB9YCxcbiAgYm94U2hhZG93OlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwiMCAyNnB4IDUycHggcmdiYSgzNCwgODQsIDI1NSwgMC4xNClcIlxuICAgICAgOiBcIjAgMjZweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxufSk7XG5cbmNvbnN0IGRlZmF1bHRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuOCksIHJnYmEoMzYsNjQsMTIwLDAuNikpXCIsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogXCJub25lXCIsXG59KTtcblxuY29uc3Qgb3V0bGluZWRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIiA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjg1KVwiLFxufSk7XG5cbmNvbnN0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIG92ZXJ2aWV3LFxuICBzdWJ0aXRsZUZhbGxiYWNrLFxuICBtZXRhVGl0bGUgPSBcIlByb2plY3QgZGV0YWlsc1wiLFxuICBzdGF0c1RpdGxlLFxuICBzdGF0c1ZhcmlhbnQgPSBcImdyYWRpZW50XCIsXG4gIGhlcm9CYWNrZHJvcFN4LFxuICBoZXJvU3VyZmFjZVN4LFxuICBzdGF0c0NhcmRTeCxcbn06IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3RhdHMgPSBvdmVydmlldy5zdGF0cztcbiAgY29uc3QgcmVzb2x2ZWRTdGF0c0NhcmRTeCA9XG4gICAgc3RhdHNWYXJpYW50ID09PSBcImdyYWRpZW50XCIgPyBkZWZhdWx0U3RhdHNDYXJkU3ggOiBvdXRsaW5lZFN0YXRzQ2FyZFN4O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIDxCb3ggc3g9e21lcmdlU3goZGVmYXVsdEhlcm9CYWNrZHJvcFN4LCBoZXJvQmFja2Ryb3BTeCl9IC8+XG5cbiAgICAgICAgPEJveCBzeD17bWVyZ2VTeChkZWZhdWx0SGVyb1N1cmZhY2VTeCwgaGVyb1N1cmZhY2VTeCl9PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAyIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57b3ZlcnZpZXcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7KG92ZXJ2aWV3LnN1YnRpdGxlID8/IHN1YnRpdGxlRmFsbGJhY2spICYmIChcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICAgICAgICB7b3ZlcnZpZXcuc3VidGl0bGUgPz8gc3VidGl0bGVGYWxsYmFja31cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge21ldGFUaXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICB7b3ZlcnZpZXcubWV0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAxLjI1LCBtZDogMS41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIG10OiAwLjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAge3N0YXRzICYmIChcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICAgIHtzdGF0c1RpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0c1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHMubWFwKChzdGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5sZW5ndGggPj0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB4czogMTIsIHNtOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRzLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHhzOiAxMiwgc206IDYgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHhzOiAxMiwgc206IDEyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezB9IHN4PXttZXJnZVN4KHJlc29sdmVkU3RhdHNDYXJkU3gsIHN0YXRzQ2FyZFN4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxLjU1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB0eXBlIFN4UHJvcHMsXG4gIHR5cGUgVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlFbnRyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzID0ge1xuICBleWVicm93OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0dWRpZXM6IHJlYWRvbmx5IENhc2VTdHVkeUVudHJ5W107XG4gIHByaW1hcnlDdGE6IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFwiY29udGFpbmVkXCIgfCBcIm91dGxpbmVkXCI7XG4gIH07XG4gIHNlY29uZGFyeUN0YT86IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFwiY29udGFpbmVkXCIgfCBcIm91dGxpbmVkXCI7XG4gIH07XG4gIHNlY3Rpb25TeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgZGVmYXVsdFNlY3Rpb25TeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0MSwyNDUsMjU1LDAuOCksIHJnYmEoMjI0LDIzMywyNTUsMC45NCkpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLDIwLDMzLDAuOSksIHJnYmEoMjEsMzEsNTIsMC45MikpXCIsXG59KTtcblxuY29uc3QgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gPSAoe1xuICBleWVicm93LFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHN0dWRpZXMsXG4gIHByaW1hcnlDdGEsXG4gIHNlY29uZGFyeUN0YSxcbiAgc2VjdGlvblN4LFxufTogQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17bWVyZ2VTeChkZWZhdWx0U2VjdGlvblN4LCBzZWN0aW9uU3gpfT5cbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiA0LCBtZDogNiB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiA3MjAsIG14OiB7IHhzOiBcImF1dG9cIiwgbWQ6IDAgfSwgbGluZUhlaWdodDogMS42NSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgIHtzdHVkaWVzLm1hcCgoc3R1ZHkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3N0dWR5LmlkfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgdG89e3N0dWR5LnBhdGh9XG4gICAgICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUudG9rZW5zLnRyYW5zaXRpb24uaG92ZXJ9LCB0cmFuc2Zvcm0gMTYwbXMgZWFzZWAsXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuZm9jdXN9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3R1ZHkudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgIHtzdHVkeS5leGNlcnB0fVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBSZWFkIHRoZSBjYXNlIHN0dWR5IOKGklxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIHNtOiAzIH19XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e3ByaW1hcnlDdGEudG99XG4gICAgICAgICAgICB2YXJpYW50PXtwcmltYXJ5Q3RhLnZhcmlhbnQgPz8gXCJjb250YWluZWRcIn1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnlDdGEubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3NlY29uZGFyeUN0YSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e3NlY29uZGFyeUN0YS50b31cbiAgICAgICAgICAgICAgdmFyaWFudD17c2Vjb25kYXJ5Q3RhLnZhcmlhbnQgPz8gXCJvdXRsaW5lZFwifVxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5Q3RhLmxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5U2VjdGlvbkxpc3QgPSByZWFkb25seSBDYXNlU3R1ZHlTZWN0aW9uW107XG5cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbmNvbnN0IGdldEluaXRpYWxTZWN0aW9uSWQgPSAoc2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25MaXN0KSA9PiBzZWN0aW9uc1swXT8uaWQgPz8gXCJcIjtcblxuY29uc3QgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbiA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHtcbiAgY29uc3Qgc2VjdGlvbklkcyA9IHVzZU1lbW8oKCkgPT4gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiBzZWN0aW9uLmlkKSwgW3NlY3Rpb25zXSk7XG5cbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb25JZCwgc2V0QWN0aXZlU2VjdGlvbklkXSA9IHVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxTZWN0aW9uSWQoc2VjdGlvbnMpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VjdGlvbklkcy5pbmNsdWRlcyhhY3RpdmVTZWN0aW9uSWQpKSB7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZVNlY3Rpb25JZCwgc2VjdGlvbklkcywgc2VjdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGlmIChoYXNoICYmIHNlY3Rpb25JZHMuaW5jbHVkZXMoaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50cyA9IHNlY3Rpb25JZHNcbiAgICAgIC5tYXAoKHNlY3Rpb25JZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKSlcbiAgICAgIC5maWx0ZXIoKGVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxFbGVtZW50ID0+IEJvb2xlYW4oZWxlbWVudCkpO1xuXG4gICAgaWYgKHNlY3Rpb25FbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2libGVFbnRyaWVzID0gZW50cmllc1xuICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5pbnRlcnNlY3Rpb25SYXRpbyAtIGEuaW50ZXJzZWN0aW9uUmF0aW8pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VmlzaWJsZSA9IHZpc2libGVFbnRyaWVzWzBdO1xuICAgICAgICBpZiAoZmlyc3RWaXNpYmxlKSB7XG4gICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGZpcnN0VmlzaWJsZS50YXJnZXQuaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyByb290TWFyZ2luOiBcIi00NSUgMHB4IC00NSVcIiB9LFxuICAgICk7XG5cbiAgICBzZWN0aW9uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbc2VjdGlvbklkc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgICBjb25zdCBuZXdVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSMke3RhcmdldElkfWA7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBuZXdVcmwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgcmV0dXJuIHsgYWN0aXZlU2VjdGlvbklkLCBoYW5kbGVPdXRsaW5lQ2xpY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyA9IChcbiAgZW50cmllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlFbnRyeT4sXG4gIGN1cnJlbnRJZDogQ2FzZVN0dWR5RW50cnlbXCJpZFwiXSxcbikgPT5cbiAgdXNlTWVtbyhcbiAgICAoKSA9PiBlbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlkICE9PSBjdXJyZW50SWQpLFxuICAgIFtlbnRyaWVzLCBjdXJyZW50SWRdLFxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWxhdGVkQ2FzZVN0dWRpZXM7XG5cblxuIiwKICAgICJpbXBvcnQgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvZGl2YXItc2VjdXJlLWNhbGwtbGlzdGluZy5wbmdcIjtcbmltcG9ydCBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC1pbnRlcnZpZXctc2Vzc2lvbi5hdmlmXCI7XG5pbXBvcnQgc2V0YXJlQXZhbFVzZXJGbG93QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC11c2VyLWZsb3cud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5LCBDYXNlU3R1ZHlPdmVydmlldywgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGl2YXJPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIldlIHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGluc2lkZSBEaXZhcuKAmXMgY2xvdGhpbmcgY2F0ZWdvcnkgYnkgYnVpbGRpbmcgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IG5vdyBwcm90ZWN0cyAyLjFNIHdlZWtseSB1c2Vycy5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgVVggRGVzaWduZXIgwrcgVHJ1c3QgJiBTYWZldHlcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiTWF5IOKAkyBKdW5lIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGVhbVwiLCB2YWx1ZTogXCJEZXNpZ24sIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgRW5naW5lZXJpbmcsIFN1cHBvcnRcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHsgdmFsdWU6IFwi4pa8NjAlXCIsIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiIH0sXG4gICAgeyB2YWx1ZTogXCIyLjFNXCIsIGxhYmVsOiBcIldlZWtseSBjYWxsZXJzIHNhZmVndWFyZGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0LFxuICAgIFwiRGl2YXIgc2VjdXJlIGNhbGwgbGlzdGluZ3MgaW50ZXJmYWNlXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXZhclNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpdmFyIGlzIElyYW7igJlzIGxhcmdlc3QgY2xhc3NpZmllZHMgbWFya2V0cGxhY2Ugd2l0aCA1M00rIHdlZWtseSB1c2Vycy4gVHJ1c3QgYW5kIHNhZmV0eSBpbmNpZGVudHMgY2FuIGNvbGxhcHNlIGVudGlyZSByZXZlbnVlIGNhdGVnb3JpZXMgaWYgbGVmdCB1bmNoZWNrZWQuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAgeyBsYWJlbDogXCJNYXJrZXRwbGFjZSBzY2FsZVwiLCB2YWx1ZTogXCI1M00rXCIsIGRlc2NyaXB0aW9uOiBcIldlZWtseSBidXllcnMgJiBzZWxsZXJzXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiVm9pY2UgZGVwZW5kZW5jZVwiLCB2YWx1ZTogXCIyLjFNXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGxzIHBsYWNlZCBldmVyeSB3ZWVrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiQWQgY29uc3VtcHRpb25cIiwgdmFsdWU6IFwiNkIrXCIsIGRlc2NyaXB0aW9uOiBcIk1vbnRobHkgYWQgdmlld3NcIiB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDbG90aGluZyBsaXN0aW5nc+KAlG1vc3RseSB3b21lbi1sZWTigJR3ZXJlIGhpdCBoYXJkZXN0IGJ5IGFidXNlLlwiLFxuICAgICAgXCJNYW51YWwgbW9kZXJhdGlvbiBjb3VsZG7igJl0IGtlZXAgdXA7IGxpcXVpZGl0eSBhbmQgdHJ1c3Qgd2VyZSBpbiBmcmVlIGZhbGwuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNyaXNpc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBDcmlzaXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJDdXN0b21lciBjYXJlIGNlbnRyZXMgd2VyZSBmbG9vZGVkIHdpdGggaGFyYXNzbWVudCByZXBvcnRzLiBTZWxsZXJzIGRlbGV0ZWQgbGlzdGluZ3Mgb3IgY2h1cm5lZCBlbnRpcmVseSwgZmVhcmluZyByZXBlYXQgaW5jaWRlbnRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSGFyYXNzZXJzIHNjcmFwZWQgcGhvbmUgbnVtYmVycyBmcm9tIGFkcyBhbmQgY2lyY3VsYXRlZCB0aGVtIGluIHByaXZhdGUgVGVsZWdyYW0gZ3JvdXBzLlwiLFxuICAgICAgXCJFdmVuIGFmdGVyIHZpY3RpbXMgZGVsZXRlZCBsaXN0aW5ncywgdGhlIGNhbGxzIGNvbnRpbnVlZCBiZWNhdXNlIG51bWJlcnMgd2VyZSBhbHJlYWR5IGV4cG9zZWQuXCIsXG4gICAgICBcIldpdGhvdXQgaW50ZXJ2ZW50aW9uLCBEaXZhciByaXNrZWQgbG9zaW5nIGEgY2F0ZWdvcnkgdGhhdCBhbmNob3JlZCBkYWlseSBlbmdhZ2VtZW50LlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJMYXlsYSwgMzJcIixcbiAgICAgICAgcm9sZTogXCJQcm9mZXNzaW9uYWwgYXJ0aXN0IHNlbGxpbmcgYmVzcG9rZSBjbG90aGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIkl0IHdhcyBpbmZ1cmlhdGluZy4gSSB0b29rIGRvd24gbXkgRGl2YXIgYWQgaG9waW5nIHRvIHN0b3AgdGhlIGNhbGxzLCBidXQgdGhleSBrZXB0IGNvbWluZy4gU29tZW9uZSB0b2xkIG1lIG15IG51bWJlciB3YXMgaW4gYSBUZWxlZ3JhbSBncm91cC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIGludGVydmlld2VkIGhhcmFzc2VkIHNlbGxlcnMgYW5kIGFuYWx5c2VkIGJlaGF2aW91cmFsIGRhdGEgdG8gdW5kZXJzdGFuZCBob3cgZXhwb3N1cmUgc2NhbGVkLiBUaGUgYnJlYWt0aHJvdWdoIGNhbWUgZnJvbSBjb25uZWN0aW5nIHF1YWxpdGF0aXZlIHN0b3JpZXMgdG8gcXVhbnRpdGF0aXZlIHNpZ25hbHMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQdWJsaWMgcGhvbmUgbnVtYmVycyB3ZXJlIHRoZSByb290IGNhdXNlIG9mIGV4cG9zdXJlLCBub3QgdGhlIG51bWJlciBvZiByZXBvcnRzLlwiLFxuICAgICAgXCJFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IGFkYXB0ZWQgYnkgdXNpbmcgaW4tYXBwIGNoYXQ7IG5ldyBzZWxsZXJzIG5lZWRlZCBwcm90ZWN0aXZlIGRlZmF1bHRzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdHJhdGVneVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbiBKb3VybmV5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgcmVmcmFtZWQgc3VjY2VzcyBmcm9tIOKAnHJlZHVjZSByZXBvcnRz4oCdIHRvIOKAnHJlZHVjZSBleHBvc3VyZS7igJ0gV2l0aCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIFN1cHBvcnQsIGFuZCBEYXRhLCB3ZSBldmFsdWF0ZWQgZXZlcnkgcGF0aCBhbmQgc3RyZXNzLXRlc3RlZCBlZGdlIGNhc2VzIGJlZm9yZSBjb21taXR0aW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRWR1Y2F0aW5nIHVzZXJzIGFib3V0IGhhcmFzc2VyIHRhY3RpY3Mgd291bGQgZXJvZGUgdHJ1c3QgYW5kIGRpc2NvdXJhZ2UgbGlzdGluZ3MuXCIsXG4gICAgICBcIkZ1bGwgVm9JUCB3YXMgY29zdC1wcm9oaWJpdGl2ZSwgZnJhZ2lsZSBhY3Jvc3MgZGV2aWNlIHR5cGVzLCBhbmQgaW5hY2Nlc3NpYmxlIHRvIDQ3JSBvZiBsZWdhY3kgQW5kcm9pZCB1c2Vycy5cIixcbiAgICAgIFwiVm9pY2UgcmVsYXkgd2l0aCBpbnRlcm1lZGlhcnkgbnVtYmVycyBwcm90ZWN0ZWQgc2VsbGVycyB3aXRob3V0IGNoYW5naW5nIHB1cmNoYXNlIGJlaGF2aW91cuKAlHRoaXMgYmVjYW1lIHRoZSBub3J0aCBzdGFyLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkEgMy1kYXkgcGlsb3QgaW4gdGhlIGNsb3RoaW5nIGNhdGVnb3J5IHJlc3VsdGVkIGluIGEgNTYlIGNhbGwgZmFpbHVyZSByYXRlLiBJbnN0ZWFkIG9mIHJldmVydGluZywgd2UgdHJlYXRlZCBldmVyeSBmYWlsdXJlIGFzIGEgZGVzaWduIHJlcXVpcmVtZW50LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciBiZWhhdmlvdXI6IHNlbGxlcnMgYmxvY2tlZCB1bmZhbWlsaWFyIG51bWJlcnM7IGJ1eWVycyByZWRpYWxsZWQgZnJvbSBjYWxsIGxvZ3M7IHJlcGVhdCBjb252ZXJzYXRpb25zIGJyb2tlIG1hcHBpbmcgd2luZG93cy5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGxvYWQ6IGNhbGwgdm9sdW1lIHNwaWtlZCBiZXlvbmQgZm9yZWNhc3RzIGFuZCBudW1iZXIgcG9vbHMgd2VyZSBleGhhdXN0ZWQuXCIsXG4gICAgICBcIkJ1c2luZXNzIHJpc2s6IGxvbmdlciBjYWxscyBpbmZsYXRlZCB0ZWxlY29tIGNvc3RzIGFuZCBhbm9ueW1pc2VkIG51bWJlcnMgYXR0cmFjdGVkIG9wcG9ydHVuaXN0aWMgc2NhbW1lcnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmluZW1lbnRcIixcbiAgICB0aXRsZTogXCJUaGUgUmVmaW5lZCBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHRyYW5zbGF0ZWQgZXZlcnkgcGlsb3QgaW5zaWdodCBpbnRvIHByb2R1Y3QgYW5kIHBsYXRmb3JtIGltcHJvdmVtZW50cyBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQmlkaXJlY3Rpb25hbCBtYXBwaW5nIGxldCBzZWxsZXJzIHJlY29ubmVjdCB3aXRob3V0IGV4cG9zaW5nIHJlYWwgbnVtYmVycy5cIixcbiAgICAgIFwiRXh0ZW5kZWQgbWFwcGluZyB3aW5kb3dzIGZyb20gMjAgc2Vjb25kcyB0byAxNSBtaW51dGVzIHJlZHVjZWQgZHJvcHBlZCBjYWxscy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyAo4oCcVGhpcyBpcyBhIHNlY3VyZSBjYWxsIGZyb20gRGl2YXLigKbigJ0pIHNldCBleHBlY3RhdGlvbnMgYW5kIGRldGVycmVkIHNjYW1tZXJzLlwiLFxuICAgICAgXCJBIHBvb2wgb2YgMTAwIGludGVybWVkaWFyeSBudW1iZXJzIGFzc2lnbmVkIHBlciBidXllci1zZWxsZXIgcGFpciBwcmV2ZW50ZWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5LCBjaGF0IGludGVncmF0aW9uLCBhbmQgYWQgbWFuYWdlbWVudCBsb2dzIGtlcHQgbGVnaXRpbWF0ZSByZWxhdGlvbnNoaXBzIGludGFjdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBZnRlciByb2xsb3V0LCBoYXJhc3NtZW50IHJlcG9ydHMgZHJvcHBlZCBkcmFtYXRpY2FsbHkgYW5kIHNlbGxlcnMgZmVsdCBzYWZlIGVub3VnaCB0byBrZWVwIGxpc3RpbmdzIGxpdmUuIE1vZGVyYXRpb24gdGVhbXMgcmVjb3ZlcmVkIGhvdXJzIGVhY2ggd2VlayB0aGF0IHdlcmUgcHJldmlvdXNseSBzcGVudCBvbiByZWFjdGl2ZSB0aWNrZXRzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDYwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gOCB3ZWVrcyBvZiBsYXVuY2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkIGRlbGV0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMjUlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZld2VyIHNlbGxlcnMgbGVhdmluZyB0aGUgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN1cHBvcnQgdGlja2V0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMTglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vcmUgdGltZSBmb3IgcHJvYWN0aXZlIG1vbml0b3JpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlYXJuaW5nc1wiLFxuICAgIHRpdGxlOiBcIktleSBMZWFybmluZ3NcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIG9uZeKAlGV4cG9zdXJlLCBub3QgcmVwb3J0cywgd2FzIHRoZSByb290LlwiLFxuICAgICAgXCJVc2VycyB3ZXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSByZXZlYWxlZCB0aGUgcmlnaHQgZGVmYXVsdHMuXCIsXG4gICAgICBcIkZhaWx1cmUgaXMgc2lnbmFsLiBUaGUgNTYlIHBpbG90IGZhaWx1cmUgZ2VuZXJhdGVkIGEgYmFja2xvZyBvZiBhY3Rpb25hYmxlIHJlcXVpcmVtZW50cy5cIixcbiAgICAgIFwiUGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcgdG8ga2VlcCBhYnVzZSB2ZWN0b3JzIGluIGNoZWNrLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZsZWN0aW9uXCIsXG4gICAgdGl0bGU6IFwiUmVmbGVjdGlvblwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHJlaW5mb3JjZWQgbXkgYmVsaWVmIHRoYXQgc29sdmluZyBoYXJkIHByb2JsZW1zIHN0YXJ0cyB3aXRoIHVuZGVyc3RhbmRpbmcgYmVoYXZpb3VyLiBCeSBibGVuZGluZyByZXNlYXJjaCwgZGF0YSwgYW5kIHJhcGlkIGl0ZXJhdGlvbiwgd2UgYnVpbHQgYSBzYWZldHkgbGF5ZXIgdGhhdCBzdGlsbCBwcm90ZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZWFjaCB3ZWVrLiBUaGUgaGFyYXNzbWVudCBwcm9ibGVtIG1heSBuZXZlciBkaXNhcHBlYXIgZW50aXJlbHksIGJ1dCBEaXZhciBpcyBzaWduaWZpY2FudGx5IHNhZmVyIGZvciB0aGUgdXNlcnMgd2hvIG5lZWQgaXQgbW9zdC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZU92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzIGF0IFNldGFyZSBBdmFsXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJGZWIgMjAyMSDigJMgSmFuIDIwMjJcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIkRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBpbiA2IG1vbnRoc1wiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiMsOXXCIsXG4gICAgICBsYWJlbDogXCJSZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBY2hpZXZlZCB3aXRoaW4gdGhlIGZpcnN0IDYgbW9udGhzIG9mIHJvbGxvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIis2MEtcIixcbiAgICAgIGxhYmVsOiBcIkRhaWx5IGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVmZXJyYWwgY29ob3J0IGNvbnZlcnRlZCB0byBoaWdoLWludGVudCBEQVVzXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQsXG4gICAgXCJTZXRhcmUgQXZhbCBjdXN0b21lciBlbmdhZ2VtZW50IGludGVydmlldyBzZXNzaW9uXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIkZyb20gNCUgdG8gNDclOiBIb3cgSSBUdXJuZWQgYSBGYWlsaW5nIEZlYXR1cmUgSW50byBhIENvcmUgUHJvZHVjdCBWYWx1ZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkxlZCBlbmQtdG8tZW5kIHJlZGVzaWduIG9mIFNldGFyZVllaydzIGJpbGwgcGF5bWVudCBleHBlcmllbmNlLCBpbmNyZWFzaW5nIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIHRocm91Z2ggcmlnb3JvdXMgdXNlciByZXNlYXJjaCwgc3RyYXRlZ2ljIGRlc2lnbiwgYW5kIGNyb3NzLWZ1bmN0aW9uYWwgY29sbGFib3JhdGlvbi5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciDCtyBFbmQtdG8tRW5kIExlYWRcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiMjAyMiDigJMgMjAyMyAoMTIgbW9udGhzKVwiIH0sXG4gICAgeyBsYWJlbDogXCJDb21wYW55XCIsIHZhbHVlOiBcIlNldGFyZSBBdmFsIChTZXRhcmVZZWsgYXBwKVwiIH0sXG4gICAgeyBsYWJlbDogXCJUZWFtXCIsIHZhbHVlOiBcIlByb2R1Y3QsIEVuZ2luZWVyaW5nLCBSZXNlYXJjaCwgU3VwcG9ydCwgTGVnYWxcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIjEweCBhZG9wdGlvbiBncm93dGgsIGV4Y2VlZGVkIDI1JSBnb2FsIGJ5IDg4JVwiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgbGFiZWw6IFwiQmlsbCBwYXltZW50IGFkb3B0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZSBvZiB0b3RhbCBwYXltZW50c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMU0rXCIsXG4gICAgICBsYWJlbDogXCJBcHAgZG93bmxvYWRzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRhcmVZZWsgb24gR29vZ2xlIFBsYXkgU3RvcmUgd2l0aCA0LjIrIHJhdGluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiODAlXCIsXG4gICAgICBsYWJlbDogXCJEcm9wIHJlZHVjdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWZ0ZXIgZml4aW5nIHBlcmZvcm1hbmNlIGlzc3VlcyBpbiBWZXJzaW9uIDJcIixcbiAgICB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgIHNldGFyZUF2YWxVc2VyRmxvd0Fzc2V0LFxuICAgIFwiU2V0YXJlWWVrIGJpbGwgcGF5bWVudCB1c2VyIGZsb3dcIixcbiAgICB7IHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDYzMCB9LFxuICApLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVlla1NlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJ0bGRyXCIsXG4gICAgdGl0bGU6IFwiVEw7RFJcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJRdWljayBzdW1tYXJ5OiBQcm9ibGVtLCBhcHByb2FjaCwgc29sdXRpb24sIGFuZCBpbXBhY3QgYXQgYSBnbGFuY2UuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCLwn5OKIFByb2JsZW06IDQlIGJpbGwgcGF5bWVudCBhZG9wdGlvbiBkZXNwaXRlIDFNKyB1c2Vycy4gVXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmcgdG8gY29tcGxldGUgcGF5bWVudHMuXCIsXG4gICAgICBcIvCflI0gQXBwcm9hY2g6IE11bHRpLW1ldGhvZCByZXNlYXJjaCAoMTggaW50ZXJ2aWV3cywgMjAwKyBzZXNzaW9uIHJlY29yZGluZ3MpIHJldmVhbGVkIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgICAgIFwi8J+SoSBTb2x1dGlvbjogU2l4IGludGVyY29ubmVjdGVkIGZlYXR1cmVzIGFkZHJlc3NpbmcgY29yZSB1c2VyIG5lZWRzOiBzYXZlZCBiaWxscywgb2ZmaWNpYWwgcmVjZWlwdHMsIHNtYXJ0IHJlbWluZGVycywgUVIgc2Nhbm5pbmcsIHByb3ZpZGVyIHRyYW5zcGFyZW5jeSwgYW5kIGJpbGwgbWFuYWdlbWVudCBodWIuXCIsXG4gICAgICBcIvCfk4ggSW1wYWN0OiA0NyUgYWRvcHRpb24gaW4gOCB3ZWVrcyAoMTB4IGdyb3d0aCksIGV4Y2VlZGVkIDI1JSBnb2FsIGJ5IDg4JS4gQmlsbCBwYXltZW50IGJlY2FtZSBhIHRvcC0zIGZlYXR1cmUgZHJpdmluZyByZWN1cnJpbmcgZW5nYWdlbWVudC5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiMTB4IGFkb3B0aW9uIGdyb3d0aDogNCUg4oaSIDQ3JVwiLFxuICAgICAgXCJFeGNlZWRlZCBnb2FsOiAxODglIG9mIHRhcmdldCAoNDclIHZzIDI1JSBnb2FsKVwiLFxuICAgICAgXCJUb3AtMyBmZWF0dXJlOiBCeSB1c2FnZSBmcmVxdWVuY3lcIixcbiAgICAgIFwiVXNlciBzYXRpc2ZhY3Rpb246IDQuMiDihpIgNC42IHN0YXJzICgrOS41JSBpbmNyZWFzZSlcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIlRoZSBCdXNpbmVzcyBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiNCUgYWRvcHRpb24gZGVzcGl0ZSAxTSsgdXNlcnMuIFVzZXJzIHdlcmUgdHJ5aW5nIGJ1dCBmYWlsaW5nLiBHb2FsOiAyNSUgaW4gNiBtb250aHMuIFJlc3VsdDogNDclIGluIDggd2Vla3MuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBaG1hZCwgYSA1OC15ZWFyLW9sZCBidWlsZGluZyBtYW5hZ2VyLCBrZWVwcyBhIHdvcm4gbm90ZWJvb2sgd2l0aCAxMiByZXNpZGVudHMnIHV0aWxpdHkgY29kZXMuIEhlIHRyaWVkIFNldGFyZVllayBvbmNl4oCUZ2F2ZSB1cCBhZnRlciAxMCBtaW51dGVzLiBUaGlzIGlzIGhvdyB3ZSBmaXhlZCBpdC5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQnVzaW5lc3Mgb3Bwb3J0dW5pdHlcIixcbiAgICAgICAgdmFsdWU6IFwiSGlnaC1mcmVxdWVuY3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTW9udGhseSByZWN1cnJpbmcgdHJhbnNhY3Rpb24gZm9yIGV2ZXJ5IGhvdXNlaG9sZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSW5pdGlhbCBhZG9wdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCI0JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCaWxsIHBheW1lbnRzIGFzIHNoYXJlIG9mIHRvdGFsIHBheW1lbnRzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIGJhc2VcIixcbiAgICAgICAgdmFsdWU6IFwiMU0rXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFjdGl2ZSB1c2VycyBvbiBTZXRhcmVZZWsgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlN0cmF0ZWdpYyBidXNpbmVzcyBnb2FsOiBUcmFuc2Zvcm0gYmlsbCBwYXltZW50IGludG8gYSBjb3JlIHZhbHVlIHByb3Bvc2l0aW9uIGRyaXZpbmcgcmVjdXJyaW5nIGVuZ2FnZW1lbnQuXCIsXG4gICAgICBcIkNsZWFyIHByb2JsZW06IFVzZXJzIHdlcmUgdHJ5aW5nIGJ1dCBmYWlsaW5n4oCUaW5kaWNhdGluZyBhIFVYIHByb2JsZW0sIG5vdCBsYWNrIG9mIGRlbWFuZC5cIixcbiAgICAgIFwiU29sbyBkZXNpZ25lciBjb25zdHJhaW50OiBSZXF1aXJlZCBiYWxhbmNpbmcgZGVlcCByZXNlYXJjaCB3aXRoIHJhcGlkIGV4ZWN1dGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiYWJvdXQtc2V0YXJleWVrXCIsXG4gICAgdGl0bGU6IFwiV2hhdCBpcyBTZXRhcmVZZWs/XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSXJhbidzIGxlYWRpbmcgZmludGVjaCBhcHA6IDFNKyB1c2VycywgMTArIHNlcnZpY2UgY2F0ZWdvcmllcy4gQmlsbCBwYXltZW50ID0gc3RyYXRlZ2ljIG9wcG9ydHVuaXR5IGZvciByZWN1cnJpbmcgZW5nYWdlbWVudC5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlNldGFyZVllayBpcyBhIG9uZS1zdG9wIHBsYXRmb3JtIGZvciBtb2JpbGUgcmVjaGFyZ2VzLCBiaWxscywgdHJhbnNwb3J0YXRpb24sIGhlYWx0aCBzZXJ2aWNlcywgYW5kIG1vcmUuIEJpbGwgcGF5bWVudCBpcyBhIGhpZ2gtZnJlcXVlbmN5LCBtb250aGx5IHRyYW5zYWN0aW9u4oCUc29sdmluZyBpdCB3ZWxsIHdvdWxkIHRyYW5zZm9ybSBTZXRhcmVZZWsgZnJvbSBhIHV0aWxpdHkgYXBwIGludG8gYW4gZXNzZW50aWFsIGRhaWx5IGNvbXBhbmlvbi5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ29tcHJlaGVuc2l2ZSBwbGF0Zm9ybTogMTArIHNlcnZpY2UgY2F0ZWdvcmllcyBpbiBvbmUgYXBwXCIsXG4gICAgICBcIk1hcmtldCBsZWFkZXI6IERpcmVjdCBzYWxlcyBjaGFubmVsIGVsaW1pbmF0aW5nIGludGVybWVkaWFyaWVzXCIsXG4gICAgICBcIkRhaWx5IGVzc2VudGlhbDogQ3JpdGljYWwgaW5mcmFzdHJ1Y3R1cmUgZm9yIGhvdXNlaG9sZCBmaW5hbmNpYWwgbWFuYWdlbWVudFwiLFxuICAgICAgXCJTdHJhdGVnaWMgaW1wb3J0YW5jZTogQmlsbCBwYXltZW50IGRyaXZlcyByZWN1cnJpbmcgZW5nYWdlbWVudCBhbmQgcGxhdGZvcm0gc3RpY2tpbmVzc1wiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBcHAgZG93bmxvYWRzXCIsXG4gICAgICAgIHZhbHVlOiBcIjFNK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHb29nbGUgUGxheSBTdG9yZSB3aXRoIDQuMisgc3RhciByYXRpbmdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgcmV2aWV3c1wiLFxuICAgICAgICB2YWx1ZTogXCIyNUsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBvc2l0aXZlIGZlZWRiYWNrIGZyb20gYWN0aXZlIHVzZXJzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTZXJ2aWNlIGNhdGVnb3JpZXNcIixcbiAgICAgICAgdmFsdWU6IFwiMTArXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vYmlsZSByZWNoYXJnZSwgYmlsbHMsIHRyYW5zcG9ydGF0aW9uLCBoZWFsdGgsIGFuZCBtb3JlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55IGdyb3d0aFwiLFxuICAgICAgICB2YWx1ZTogXCI2IOKGkiAxNDArXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVtcGxveWVlcyBzaW5jZSAyMDE2IGZvdW5kaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjaGFsbGVuZ2VcIixcbiAgICB0aXRsZTogXCJVbmRlcnN0YW5kaW5nIHRoZSBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiRGF0YSBzaG93ZWQgdXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmcuIDk2JSBhdm9pZGVkIGJpbGxzLiA0MCUrIGFiYW5kb25tZW50IHJhdGUuIFdoeT9cIixcbiAgICBib2R5OiBbXSxcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIjk2JSBvZiBwYXltZW50cyB3ZXJlIG5vdCBiaWxsc+KAlHVzZXJzIGFjdGl2ZWx5IGF2b2lkZWQgdGhlIGZlYXR1cmUgZGVzcGl0ZSBoYXZpbmcgaXQgYXZhaWxhYmxlLlwiLFxuICAgICAgXCJIaWdoIGRyb3Atb2ZmIHJhdGVzIGF0IHNwZWNpZmljIHN0ZXBzIGluIHRoZSBwYXltZW50IGZsb3cuXCIsXG4gICAgICBcIlVzZXJzIHNwZW5kaW5nIDItM3ggYXZlcmFnZSB0aW1lIG9uIHNpbmdsZSBzY3JlZW5zLCBpbmRpY2F0aW5nIGNvbmZ1c2lvbiBhbmQgaGVzaXRhdGlvbi5cIixcbiAgICAgIFwiNDAlKyBhYmFuZG9ubWVudCByYXRlIGJlZm9yZSByZWFjaGluZyBwYXltZW50IGNvbmZpcm1hdGlvbi5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiRGF0YSByZXZlYWxlZCB1c2VycyB3ZXJlIHRyeWluZyBidXQgZmFpbGluZ+KAlGluZGljYXRpbmcgYSBVWCBwcm9ibGVtLCBub3QgbGFjayBvZiBkZW1hbmQuXCIsXG4gICAgICBcIlF1YW50aXRhdGl2ZSBhbmFseXNpcyBhbG9uZSB3YXNuJ3QgZW5vdWdoOyBJIG5lZWRlZCBxdWFsaXRhdGl2ZSByZXNlYXJjaCB0byB1bmRlcnN0YW5kIHdoeS5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZGlzY292ZXJ5XCIsXG4gICAgdGl0bGU6IFwiTXkgUmVzZWFyY2ggQXBwcm9hY2hcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJNdWx0aS1tZXRob2QgcmVzZWFyY2g6IDE4IGludGVydmlld3MsIDIwMCsgc2Vzc2lvbiByZWNvcmRpbmdzLCAxNTArIHJldmlld3MuIFR3byBwZXJzb25hcyBlbWVyZ2VkLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiSSBvYnNlcnZlZCB1c2VycyBpbiB0aGVpciBuYXR1cmFsIGVudmlyb25tZW50c+KAlGxpa2Ugd2F0Y2hpbmcgYSBidWlsZGluZyBtYW5hZ2VyIG1haW50YWluIGhpcyBwaHlzaWNhbCBub3RlYm9vay4gVGhpcyByZXZlYWxlZCB3aGF0ICdwcm9vZicgbWVhbnQgaW4gcHJhY3RpY2UuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIjE4IHVzZXIgaW50ZXJ2aWV3cyBhY3Jvc3MgNyBob3VzZWhvbGRzIGFuZCA0IGJ1aWxkaW5nIG1hbmFnZXJzIChhZ2VzIDI4LTYyKVwiLFxuICAgICAgXCIyMDArIHNlc3Npb24gcmVjb3JkaW5ncyBhbmFseXplZCBmb3IgYmVoYXZpb3JhbCBwYXR0ZXJuc1wiLFxuICAgICAgXCIxNTArIGFwcCBzdG9yZSByZXZpZXdzIHN5bnRoZXNpemVkIGZvciBzZW50aW1lbnQgYW5hbHlzaXNcIixcbiAgICAgIFwiQ29udGV4dHVhbCBpbnF1aXJ5IHJldmVhbGVkIHJlYWwtd29ybGQgd29ya2Zsb3dzIHdlIG5lZWRlZCB0byBkaWdpdGl6ZVwiLFxuICAgICAgXCJNdWx0aS1tZXRob2Qgc3ludGhlc2lzIGNvbm5lY3RlZCBxdWFsaXRhdGl2ZSBpbnNpZ2h0cyB0byBxdWFudGl0YXRpdmUgcGF0dGVybnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicGVyc29uYXNcIixcbiAgICB0aXRsZTogXCJUd28gQ29yZSBQZXJzb25hc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlR3byBkaXN0aW5jdCBwZXJzb25hcyB3aXRoIGRpZmZlcmVudCBuZWVkcyBkcm92ZSBldmVyeSBkZXNpZ24gZGVjaXNpb24uXCIsXG4gICAgYm9keTogW10sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgQnVpbGRpbmcgTWFuYWdlciAoQWdlIDU1Kyk6IE1hbmFnZXMgdXRpbGl0aWVzIGZvciA4LTE1IHVuaXQgYXBhcnRtZW50IGJ1aWxkaW5ncy4gUGF5cyAxMC0yMCBiaWxscyBtb250aGx5IGFjcm9zcyB3YXRlciwgZWxlY3RyaWNpdHksIGFuZCBnYXMuIENyaXRpY2FsIG5lZWQ6IG9mZmljaWFsLCBzaGFyZWFibGUgZG9jdW1lbnRhdGlvbiBmb3IgcmVzaWRlbnRzLiBaZXJvIHRvbGVyYW5jZSBmb3IgYW1iaWd1aXR5LiBMb3cgZGlnaXRhbCBsaXRlcmFjeSwgcHJlZmVycyBmYW1pbGlhciBwYXR0ZXJucy5cIixcbiAgICAgIFwiVGhlIEhlYWQgb2YgSG91c2Vob2xkIChBZ2UgMzAtNTApOiBQYXlzIDQtNiBmYW1pbHkgYmlsbHMgbW9udGhseSAodXRpbGl0aWVzLCBpbnRlcm5ldCwgcGhvbmUpLiBNYW5hZ2VzIGhvdXNlaG9sZCBmaW5hbmNlcyBhbG9uZ3NpZGUgZnVsbC10aW1lIHdvcmsuIENyaXRpY2FsIG5lZWQ6IGF2b2lkIHJlLWVudGVyaW5nIDEzLWRpZ2l0IGNvZGVzIGV2ZXJ5IG1vbnRoLiBDb25zdGFudGx5IGZvcmdldHMgZHVlIGRhdGVzLiBWYWx1ZXMgc3BlZWQgYW5kIGVmZmljaWVuY3kuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkJ1aWxkaW5nIE1hbmFnZXJcIixcbiAgICAgICAgcm9sZTogXCJBZ2UgNTUrLCBtYW5hZ2VzIDEyLXVuaXQgYXBhcnRtZW50IGJ1aWxkaW5nXCIsXG4gICAgICAgIHRleHQ6IFwiSSBtYWtlIHBob3RvY29waWVzIG9mIGV2ZXJ5IHJlY2VpcHQgYW5kIGdpdmUgdGhlbSB0byByZXNpZGVudHMuIEkgbmVlZCBwcm9vZiB0aGF0IGl0J3MgcGFpZC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEhvdXNlaG9sZFwiLFxuICAgICAgICByb2xlOiBcIkFnZSAzOCwgcGF5cyA1IGJpbGxzIG1vbnRobHkgZm9yIGZhbWlseVwiLFxuICAgICAgICB0ZXh0OiBcIkVudGVyaW5nIHRoaXMgMTMtZGlnaXQgY29kZSBldmVyeSBzaW5nbGUgbW9udGggaXMgdG9ydHVyZS5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc2lnaHRzXCIsXG4gICAgdGl0bGU6IFwiS2V5IEluc2lnaHRzIFRoYXQgQ2hhbmdlZCBFdmVyeXRoaW5nXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhyZWUgaW5zaWdodHMgc2hpZnRlZCBvdXIgc3RyYXRlZ3k6IHRydXN0LCByZWNlaXB0cywgYW5kIHJlY3VycmluZyB3b3JrZmxvdy5cIixcbiAgICBib2R5OiBbXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRydXN0IGlzc3VlOiBVc2VycyBkaWRuJ3Qga25vdyB3aGF0IHdlIHN1cHBvcnRlZCwgZGVzdHJveWluZyBjb25maWRlbmNlIGJlZm9yZSB0aGV5IHN0YXJ0ZWQuXCIsXG4gICAgICBcIkVtb3Rpb25hbCBuZWVkID0gRnVuY3Rpb25hbCBuZWVkOiBUaGUgcmVjZWlwdCB3YXMgdGhlIGVudGlyZSB2YWx1ZSBwcm9wb3NpdGlvbiwgbm90IGRlY29yYXRpb24uXCIsXG4gICAgICBcIlJlY3VycmluZyB3b3JrZmxvdzogV2UgbmVlZGVkIHRvIHJlbWVtYmVyLCBub3QgbWFrZSB1c2VycyByZXBlYXQgdGhlbXNlbHZlcyBtb250aGx5LlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjb21wZXRpdGl2ZVwiLFxuICAgIHRpdGxlOiBcIkNvbXBldGl0aXZlIEFuYWx5c2lzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQ29tcGV0aXRvcnMgaGFkIHNpbWlsYXIgcHJvYmxlbXMuIE91ciBkaWZmZXJlbnRpYXRpb246IGJpbGwgbWFuYWdlbWVudCBodWIgKyBvZmZpY2lhbCByZWNlaXB0cyArIHNhdmVkIGJpbGxzLlwiLFxuICAgIGJvZHk6IFtdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ29tcGV0aXRvcnM6IFNpbWlsYXIgcHJvYmxlbXMgd2l0aCBjb3ZlcmFnZSBjbGFyaXR5IGFuZCByZWNlaXB0IHF1YWxpdHlcIixcbiAgICAgIFwiRGlmZmVyZW50aWF0aW9uOiBCaWxsIG1hbmFnZW1lbnQgaHViICsgb2ZmaWNpYWwgcmVjZWlwdHMgKyByZWN1cnJpbmcgd29ya2Zsb3dcIixcbiAgICAgIFwiTWFya2V0IGdhcDogTm8gY29tcGV0aXRvciBvZmZlcmVkIHNhdmVkIGJpbGxzIHdpdGggb25lLXRhcCB1cGRhdGVzXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInBoaWxvc29waHlcIixcbiAgICB0aXRsZTogXCJEZXNpZ24gUGhpbG9zb3BoeVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpZ2l0aXplIHdoYXQgcGVvcGxlIGFscmVhZHkgZG/igJR0aGVuIG1ha2UgaXQgMTB4IGJldHRlci5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIk5vdGVib29rcyDihpIgRGlnaXRhbCBiaWxsIGxpc3QuIENhbGVuZGFyIHJlbWluZGVycyDihpIgU21hcnQgbm90aWZpY2F0aW9ucy4gUGhvdG9jb3BpZXMg4oaSIFNoYXJlYWJsZSByZWNlaXB0cy4gTmF0dXJhbCBmcm9tIGRheSBvbmUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRlc2lnbi1wcm9jZXNzXCIsXG4gICAgdGl0bGU6IFwiRGVzaWduIFByb2Nlc3MgJiBJdGVyYXRpb25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCIxMiBpdGVyYXRpb25zLCA4IHVzZXIgdGVzdHMsIDUwKyBpbnRlcmFjdGlvbiBzdGF0ZXMuIDg3JSBwcmVmZXJyZWQgbWFudWFsIGNvbnRyb2zigJRrZXkgaW5zaWdodC5cIixcbiAgICBib2R5OiBbXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIk11bHRpcGxlIGl0ZXJhdGlvbnM6IEV4cGxvcmVkIGF1dG9tYXRlZCB2cy4gbWFudWFsIGFwcHJvYWNoZXMgdGhyb3VnaCBwcm90b3R5cGluZ1wiLFxuICAgICAgXCJVc2VyIHZhbGlkYXRpb246IFRlc3RlZCBwcm90b3R5cGVzIHdpdGggOCB1c2VycyBiZWZvcmUgYnVpbGRcIixcbiAgICAgIFwiRGV0YWlsZWQgc3BlY3M6IENyZWF0ZWQgY29tcHJlaGVuc2l2ZSBkZXNpZ24gZG9jdW1lbnRhdGlvbiBmb3IgZW5naW5lZXJpbmdcIixcbiAgICAgIFwiQ29sbGFib3JhdGlvbiBhcnRpZmFjdHM6IFVzZWQgRmlnbWEgY29tbWVudHMgYW5kIHdvcmtzaG9wcyB0byBhbGlnbiBzdGFrZWhvbGRlcnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGVjaG5pY2FsLWNvbnN0cmFpbnRzXCIsXG4gICAgdGl0bGU6IFwiVGVjaG5pY2FsIENvbnN0cmFpbnRzICYgVHJhZGUtb2Zmc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIjYuMnMgQVBJIGxhdGVuY3ksIDIuNSBNYnBzIGNvbm5lY3Rpb24uIFRyYWRlLW9mZjogTWFudWFsIGNvbnRyb2wgPiBhdXRvbWF0aW9uLiBSZXN1bHQ6IDM0JSBzYXRpc2ZhY3Rpb24gaW5jcmVhc2UuXCIsXG4gICAgYm9keTogW10sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJBUEkgbGF0ZW5jeTogMi04IHNlY29uZCBiaWxsIGxvb2t1cHMgcmVxdWlyZWQgbWFudWFsIHVzZXIgdHJpZ2dlcnMgaW5zdGVhZCBvZiBhdXRvbWF0aW9uXCIsXG4gICAgICBcIkRhdGFiYXNlIHNjYWxlOiBJbXBsZW1lbnRlZCBsYXp5IGxvYWRpbmcgYW5kIHBhZ2luYXRpb24gZm9yIHNhdmVkIGJpbGxzIHRvIGhhbmRsZSAxTSsgdXNlcnNcIixcbiAgICAgIFwiTmV0d29yayByZWxpYWJpbGl0eTogRGVzaWduZWQgb2ZmbGluZS1maXJzdCBwYXR0ZXJucyBmb3IgYmlsbCBlbnRyeSwgc3luY2luZyB3aGVuIGNvbm5lY3Rpb24gcmVzdG9yZWRcIixcbiAgICAgIFwiVHJhZGUtb2ZmIHJhdGlvbmFsZTogVXNlciBjb250cm9sICsgaW5zdGFudCBmZWVkYmFjayA+IGF1dG9tYXRpb24gKyBzbG93IGxvYWRpbmdcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ29uc3RyYWludC1iYXNlZCBkZXNpZ246IFdvcmtlZCB3aXRoaW4gdGVjaG5pY2FsIGxpbWl0YXRpb25zIHRvIGNyZWF0ZSBiZXR0ZXIgVVhcIixcbiAgICAgIFwiQ29sbGFib3JhdGl2ZSBwcm9ibGVtLXNvbHZpbmc6IFBhcnRuZXJlZCB3aXRoIGVuZ2luZWVyaW5nIHRvIGZpbmQgb3B0aW1hbCBzb2x1dGlvbnNcIixcbiAgICAgIFwiVXNlciBjb250cm9sIG92ZXIgYXV0b21hdGlvbjogTWFudWFsIHRyaWdnZXJzIGltcHJvdmVkIHNhdGlzZmFjdGlvbiBkZXNwaXRlIHNlZW1pbmcgbGVzcyAnc21hcnQnXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImFjY2Vzc2liaWxpdHlcIixcbiAgICB0aXRsZTogXCJBY2Nlc3NpYmlsaXR5ICYgSW5jbHVzaXZlIERlc2lnblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldDQUcgQUEgY29tcGxpYW5jZSwgNDR4NDRweCB0b3VjaCB0YXJnZXRzLCAxNnB4KyBmb250cywgUlRMIHN1cHBvcnQsIFFSIHNjYW5uaW5nIGFsdGVybmF0aXZlLlwiLFxuICAgIGJvZHk6IFtdLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVmlzdWFsOiBIaWdoIGNvbnRyYXN0IHJhdGlvcyAoV0NBRyBBQSksIGxhcmdlIHRvdWNoIHRhcmdldHMgKDQ0eDQ0cHggbWluaW11bSksIHJlYWRhYmxlIGZvbnQgc2l6ZXMgKDE2cHgrIGJvZHkpXCIsXG4gICAgICBcIkNvZ25pdGl2ZTogQ2xlYXIgZXJyb3IgbWVzc2FnZXMsIGphcmdvbi1mcmVlIGNvcHksIG11bHRpcGxlIHRhc2sgY29tcGxldGlvbiBwYXRoc1wiLFxuICAgICAgXCJSVEwgc3VwcG9ydDogUHJvcGVyIFBlcnNpYW4gcmlnaHQtdG8tbGVmdCBsYXlvdXQgbWlycm9yaW5nIGZvciBhbGwgVUkgZWxlbWVudHNcIixcbiAgICAgIFwiTXVsdGktbW9kYWw6IFFSIHNjYW5uaW5nIGZvciB1c2VycyB3aG8gc3RydWdnbGUgd2l0aCBtYW51YWwgZW50cnlcIixcbiAgICAgIFwiUHJpbnQgYWNjZXNzaWJpbGl0eTogUmVjZWlwdHMgZGVzaWduZWQgdG8gYmUgcmVhZGFibGUgYm90aCBkaWdpdGFsbHkgYW5kIHdoZW4gcHJpbnRlZFwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJEZXNpZ25lZCBmb3IgNTUrIHBlcnNvbmE6IExhcmdlIHRhcmdldHMsIGNsZWFyIHR5cG9ncmFwaHksIHNpbXBsZSBpbnRlcmFjdGlvbnNcIixcbiAgICAgIFwiRmluYW5jaWFsIHByb2R1Y3Qgc3RhbmRhcmRzOiBFeHRyYSBhdHRlbnRpb24gdG8gY2xhcml0eSBhbmQgZXJyb3IgcHJldmVudGlvblwiLFxuICAgICAgXCJSVEwgbG9jYWxpemF0aW9uOiBQcm9wZXIgUGVyc2lhbiBsYW5ndWFnZSBzdXBwb3J0IHRocm91Z2hvdXRcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25zXCIsXG4gICAgdGl0bGU6IFwiRGVzaWduaW5nIHRoZSBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlNpeCBmZWF0dXJlcyBhZGRyZXNzaW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgICBib2R5OiBbXSxcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlNhdmVkIEJpbGxzOiBSZWdpc3RlciBvbmNlLCByZXVzZSBmb3JldmVyLiBPbmUtdGFwICdDaGVjayBBbW91bnQnIGJ1dHRvbuKAlG5vIG1vcmUgMTMtZGlnaXQgY29kZXMuXCIsXG4gICAgICBcIkJpbGwgTWFuYWdlbWVudCBIdWI6IEFsbCBiaWxscyBpbiBvbmUgZGFzaGJvYXJkIHdpdGggc3RhdHVzIGxhYmVscyAoUGFpZC9QZW5kaW5nL092ZXJkdWUpLiBCYWNrd2FyZC1jb21wYXRpYmxlLlwiLFxuICAgICAgXCJTbWFydCBSZW1pbmRlcnM6IEN1c3RvbSBub3RpZmljYXRpb25zIHBlciBiaWxsIGJlZm9yZSBkdWUgZGF0ZXMuXCIsXG4gICAgICBcIlFSIFNjYW5uaW5nOiBDYW1lcmEtYmFzZWQgZW50cnkgZm9yIGluc3RhbnQgY2FwdHVyZeKAlGNyaXRpY2FsIGZvciBvbGRlciB1c2Vycy5cIixcbiAgICAgIFwiUHJvdmlkZXIgVHJhbnNwYXJlbmN5OiBTdXBwb3J0ZWQgcHJvdmlkZXJzIHNob3duIHVwZnJvbnQgd2l0aCBsb2dvc+KAlG5vIHRyaWFsLWFuZC1lcnJvci5cIixcbiAgICAgIFwiT2ZmaWNpYWwgUmVjZWlwdHM6IFBERi1xdWFsaXR5LCBzaGFyZWFibGUgdmlhIGFueSBjaGFubmVs4oCUYWRkcmVzc2VzICdwcm9vZicgcmVxdWlyZW1lbnQuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkVhY2ggc29sdXRpb24gZGlyZWN0bHkgYWRkcmVzc2VkIGluc2lnaHRzIGZyb20gdXNlciByZXNlYXJjaFwiLFxuICAgICAgXCJCYWNrd2FyZC1jb21wYXRpYmxlIGRlc2lnbiBlbnN1cmVkIHplcm8gbGVhcm5pbmcgY3VydmUgZm9yIGV4aXN0aW5nIHVzZXJzXCIsXG4gICAgICBcIkNyb3NzLWZ1bmN0aW9uYWwgY29sbGFib3JhdGlvbiBlbnN1cmVkIHRlY2huaWNhbCBmZWFzaWJpbGl0eSBhbmQgYnVzaW5lc3MgYWxpZ25tZW50XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImZhaWx1cmVcIixcbiAgICB0aXRsZTogXCJMZWFybmluZyBmcm9tIEZhaWx1cmU6IFZlcnNpb24gMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlZlcnNpb24gMSBmYWlsZWQgaW4gNDggaG91cnMuIDgtMTBzIGxvYWQgdGltZXMsIGJsYW5rIHNjcmVlbnMsIDgwJSBkcm9wLiBSb2xsZWQgYmFjay4gTGVhcm5lZDogVVggY2FuJ3Qgc2F2ZSBwb29yIHBlcmZvcm1hbmNlLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiSSB0b29rIG93bmVyc2hpcCwgY29sbGFib3JhdGVkIHdpdGggZW5naW5lZXJpbmcsIGFuZCByZWRlc2lnbmVkIHdpdGggcGVyZm9ybWFuY2UtZmlyc3QgYXBwcm9hY2guIENyZWF0ZWQgbmV3IGNvbXBhbnktd2lkZSBwZXJmb3JtYW5jZSBzdGFuZGFyZHMuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRvb2sgb3duZXJzaGlwOiBMZWQgcm9sbGJhY2sgYW5kIHJlZGVzaWduIHByb2Nlc3MsIGRpZG4ndCBibGFtZSBvdGhlcnNcIixcbiAgICAgIFwiQ29sbGFib3JhdGVkIHdpdGggZW5naW5lZXJpbmc6IFdvcmtlZCB0b2dldGhlciB0byBzb2x2ZSB0ZWNobmljYWwgcGVyZm9ybWFuY2UgaXNzdWVzXCIsXG4gICAgICBcIlByb2Nlc3MgaW1wcm92ZW1lbnQ6IENyZWF0ZWQgbmV3IHN0YW5kYXJkcyB0aGF0IGltcHJvdmVkIGFsbCBmdXR1cmUgcHJvamVjdHNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidmVyc2lvbjJcIixcbiAgICB0aXRsZTogXCJWZXJzaW9uIDI6IFN1Y2Nlc3NmdWwgTGF1bmNoXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiUGVyZm9ybWFuY2UtZmlyc3QgZGVzaWduOiBNYW51YWwgY29udHJvbCwgbG9hZGluZyBzdGF0ZXMsIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIExhdW5jaGVkIHN1Y2Nlc3NmdWxseS5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIk1hbnVhbCBjb250cm9sOiBVc2VycyB0cmlnZ2VyIHVwZGF0ZXPigJRpbnN0YW50IGZlZWRiYWNrLCBubyBibGFuayBzY3JlZW5zLlwiLFxuICAgICAgXCJMb2FkaW5nIHN0YXRlczogU2tlbGV0b24gc2NyZWVucyBmb3IgZXZlcnkgYWN0aW9uLlwiLFxuICAgICAgXCJCYWNrd2FyZCBjb21wYXRpYmxlOiBaZXJvIGxlYXJuaW5nIGN1cnZl4oCUZXhpc3RpbmcgdXNlcnMgc2VlIGhpc3RvcnkgaW1tZWRpYXRlbHkuXCIsXG4gICAgICBcIk9mZmljaWFsIHJlY2VpcHRzOiBQREYtcXVhbGl0eSwgc29sdmVzIGVtb3Rpb25hbCBuZWVkLlwiLFxuICAgICAgXCJTbWFydCByZW1pbmRlcnM6IEFkZHJlc3NlcyBmb3JnZXRmdWxuZXNzIHdpdGhvdXQgYmVpbmcgaW50cnVzaXZlLlwiLFxuICAgICAgXCJVcGZyb250IHRyYW5zcGFyZW5jeTogQnVpbGQgY29uZmlkZW5jZSBmcm9tIHNjcmVlbiBvbmUuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkFwcGxpZWQgbGVhcm5pbmdzOiBFdmVyeSBWZXJzaW9uIDEgZmFpbHVyZSBiZWNhbWUgYSBWZXJzaW9uIDIgcmVxdWlyZW1lbnRcIixcbiAgICAgIFwiVXNlciBjb250cm9sOiBTaGlmdGVkIGZyb20gYXV0b21hdGlvbiB0byB1c2VyLXRyaWdnZXJlZCBhY3Rpb25zXCIsXG4gICAgICBcIlBlcmZvcm1hbmNlIHN0YW5kYXJkczogU2V0IG5ldyBiZW5jaG1hcmtzIGZvciB0aGUgZW50aXJlIHByb2R1Y3RcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZmVhdHVyZS1pbXBhY3RcIixcbiAgICB0aXRsZTogXCJGZWF0dXJlIEltcGFjdCBCcmVha2Rvd25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJQb3N0LWxhdW5jaCBhbmFseXRpY3M6IFdoaWNoIGZlYXR1cmVzIGRyb3ZlIGFkb3B0aW9uP1wiLFxuICAgIGJvZHk6IFtdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU2F2ZWQgQmlsbHMgYWRvcHRpb25cIixcbiAgICAgICAgdmFsdWU6IFwiNjglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk9mIGJpbGwgcGF5bWVudCB1c2VycyBzYXZlZCBhdCBsZWFzdCBvbmUgYmlsbCAoaGlnaGVzdCBpbXBhY3QgZmVhdHVyZSlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlFSIFNjYW5uaW5nIHVzYWdlXCIsXG4gICAgICAgIHZhbHVlOiBcIjQyJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQcmVmZXJyZWQgUVIgc2NhbiBvdmVyIG1hbnVhbCBlbnRyeSAoZXhjZWVkZWQgMzAlIGV4cGVjdGF0aW9uKVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmVtaW5kZXIgYWN0aXZhdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCI1NSVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgZW5hYmxlZCByZW1pbmRlcnMgZm9yIHNhdmVkIGJpbGxzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZWNlaXB0IHNoYXJpbmdcIixcbiAgICAgICAgdmFsdWU6IFwiNzMlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHNoYXJlZCByZWNlaXB0cyBhdCBsZWFzdCBvbmNlICh2YWxpZGF0ZWQgZW1vdGlvbmFsIG5lZWQpXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJTYXZlZCBCaWxsczogNjglIGFkb3B0aW9u4oCUaGlnaGVzdCBpbXBhY3QsIGRyb3ZlIHJlY3VycmluZyB1c2FnZVwiLFxuICAgICAgXCJRUiBTY2FubmluZzogNDIlIHVzYWdl4oCUZXhjZWVkZWQgMzAlIGV4cGVjdGF0aW9uLCBzdHJvbmcgZGVtYW5kIGZyb20gb2xkZXIgdXNlcnNcIixcbiAgICAgIFwiUmVjZWlwdCBzaGFyaW5nOiA3MyUgc2hhcmVkIGF0IGxlYXN0IG9uY2XigJR2YWxpZGF0ZWQgZW1vdGlvbmFsIG5lZWRcIixcbiAgICAgIFwiVHJhbnNwYXJlbmN5OiBVcGZyb250IHByb3ZpZGVyIGxvZ29zIHByZXZlbnRlZCB0cmlhbC1hbmQtZXJyb3IgYWJhbmRvbm1lbnRcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiRGF0YSB2YWxpZGF0ZWQgcmVzZWFyY2g6IEZlYXR1cmVzIGJhc2VkIG9uIHVzZXIgaW5zaWdodHMgc2hvd2VkIGhpZ2hlc3QgYWRvcHRpb25cIixcbiAgICAgIFwiUmVjZWlwdCBzaGFyaW5nIGV4Y2VlZGVkIGV4cGVjdGF0aW9uczogUHJvdmVkIGVtb3Rpb25hbCBuZWVkIHdhcyBhcyBpbXBvcnRhbnQgYXMgZnVuY3Rpb25hbFwiLFxuICAgICAgXCJTYXZlZCBiaWxscyBkcm92ZSByZXRlbnRpb246IFVzZXJzIHdobyBzYXZlZCBiaWxscyByZXR1cm5lZCBtb250aGx5IHZzLiBvbmUtdGltZSB1c2Vyc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbXBhY3RcIixcbiAgICB0aXRsZTogXCJSZXN1bHRzICYgQnVzaW5lc3MgSW1wYWN0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhlIHJlZGVzaWduIGFjaGlldmVkIG91ciBhZG9wdGlvbiBnb2FscyBhbmQgdHJhbnNmb3JtZWQgYmlsbCBwYXltZW50IGludG8gYSBjb3JlIHZhbHVlIHByb3Bvc2l0aW9uIGRyaXZpbmcgcmVjdXJyaW5nIGVuZ2FnZW1lbnQuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCI0NyUgYWRvcHRpb24gaW4gOCB3ZWVrcyAoZXhjZWVkZWQgMjUlIGdvYWwgYnkgODglKS4gV2Vlay1ieS13ZWVrOiAxMiUg4oaSIDE4JSDihpIgMjglIOKGkiAzOCUg4oaSIDQ3JS5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWRvcHRpb24gcmF0ZVwiLFxuICAgICAgICB2YWx1ZTogXCI0JSDihpIgNDclXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIjEweCBncm93dGggYWNoaWV2ZWQgd2l0aGluIDggd2Vla3MgKGV4Y2VlZGVkIDI1JSBnb2FsKVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRHJvcC1vZmYgcmVkdWN0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQZXJmb3JtYW5jZSBpbXByb3ZlbWVudCB2cyBWZXJzaW9uIDFcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkZlYXR1cmUgcmFua2luZ1wiLFxuICAgICAgICB2YWx1ZTogXCJUb3AgM1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCaWxsIHBheW1lbnQgYnkgdXNhZ2UgZnJlcXVlbmN5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIHNhdGlzZmFjdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCI0LjIg4oaSIDQuNlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBcHAgc3RvcmUgcmF0aW5nIGltcHJvdmVtZW50ICgrOS41JSBpbmNyZWFzZSlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkdvYWwgYWNoaWV2ZW1lbnRcIixcbiAgICAgICAgdmFsdWU6IFwiMTg4JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFeGNlZWRlZCAyNSUgZ29hbCBieSByZWFjaGluZyA0NyUgYWRvcHRpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlRpbWUgc2F2ZWRcIixcbiAgICAgICAgdmFsdWU6IFwiMyBob3Vycy9tb250aFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBdmVyYWdlIHRpbWUgc2F2ZWQgcGVyIEJ1aWxkaW5nIE1hbmFnZXIgdXNlclwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiQnVpbGRpbmcgTWFuYWdlclwiLFxuICAgICAgICByb2xlOiBcIlBvc3QtbGF1bmNoIGludGVydmlld1wiLFxuICAgICAgICB0ZXh0OiBcIkZpbmFsbHksIEkgY2FuIHNoYXJlIHJlY2VpcHRzIHdpdGggcmVzaWRlbnRzIHdpdGhvdXQgbWFraW5nIHBob3RvY29waWVzLiBUaGlzIHNhdmVzIG1lIGhvdXJzIGV2ZXJ5IG1vbnRoLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkhlYWQgb2YgSG91c2Vob2xkXCIsXG4gICAgICAgIHJvbGU6IFwiQXBwIHN0b3JlIHJldmlld1wiLFxuICAgICAgICB0ZXh0OiBcIkkgbG92ZSB0aGF0IEkgZG9uJ3QgaGF2ZSB0byBlbnRlciB0aGF0IGxvbmcgY29kZSBldmVyeSBtb250aC4gU2F2ZWQgYmlsbHMgY2hhbmdlZCBldmVyeXRoaW5nLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlVzZXIgZmVlZGJhY2tcIixcbiAgICAgICAgcm9sZTogXCJJbi1hcHAgc3VydmV5XCIsXG4gICAgICAgIHRleHQ6IFwiVGhlIG9mZmljaWFsIHJlY2VpcHQgZmVhdHVyZSBpcyBleGFjdGx5IHdoYXQgSSBuZWVkZWQuIEkgY2FuIHNob3cgbXkgbGFuZGxvcmQgcHJvb2Ygb2YgcGF5bWVudCBpbnN0YW50bHkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiRml2ZSBsZXNzb25zIEkgYXBwbHkgdG8gZXZlcnkgcHJvamVjdC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVYIGNhbid0IHNhdmUgcG9vciBwZXJmb3JtYW5jZTogQ29sbGFib3JhdGUgd2l0aCBlbmdpbmVlcmluZyBvbiBwZXJmb3JtYW5jZSBmcm9tIGRheSBvbmUuXCIsXG4gICAgICBcIkVtb3Rpb25hbCA9IEZ1bmN0aW9uYWw6IFJlY2VpcHQgd2Fzbid0IGRlY29yYXRpb27igJRpdCB3YXMgdGhlIGVudGlyZSB2YWx1ZSBwcm9wb3NpdGlvbi5cIixcbiAgICAgIFwiUmVhbCBiZWhhdmlvciA+IEFzc3VtcHRpb25zOiBUcnVzdCB1c2VyIHJlc2VhcmNoIG92ZXIgaW50ZXJuYWwgYXNzdW1wdGlvbnMuXCIsXG4gICAgICBcIkJhY2t3YXJkIGNvbXBhdGliaWxpdHkgPSBUcnVzdDogRmFtaWxpYXJpdHkgZXF1YWxzIGNvbmZpZGVuY2UgaW4gZmluYW5jaWFsIHByb2R1Y3RzLlwiLFxuICAgICAgXCJGYWlsdXJlIGFjY2VsZXJhdGVzIGxlYXJuaW5nOiBPd24gbWlzdGFrZXMsIGl0ZXJhdGUgZmFzdCwgc2hhcmUgbGVhcm5pbmdzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJvcmdhbml6YXRpb25hbFwiLFxuICAgIHRpdGxlOiBcIk9yZ2FuaXphdGlvbmFsIEltcGFjdFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkNyZWF0ZWQgY29tcGFueS13aWRlIHBlcmZvcm1hbmNlIHRlc3Rpbmcgc3RhbmRhcmRzLiBJbXByb3ZlZCBhbGwgZnV0dXJlIHByb2plY3RzLlwiLFxuICAgIGJvZHk6IFtdLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSSBlc3RhYmxpc2hlZCBtYW5kYXRvcnkgcHJlLWxhdW5jaCBwZXJmb3JtYW5jZSB0ZXN0aW5nIGFzIHN0YW5kYXJkIHByYWN0aWNlIGFjcm9zcyBhbGwgcHJvZHVjdCB0ZWFtcy5cIixcbiAgICAgIFwiSSB3b3JrZWQgd2l0aCBlbmdpbmVlcmluZyB0byBzZXQgdXAgc3RhZ2luZyBlbnZpcm9ubWVudHMgd2l0aCByZWFsLXdvcmxkIGRhdGEgZm9yIHJlYWxpc3RpYyB0ZXN0aW5nLlwiLFxuICAgICAgXCJJIGNyZWF0ZWQgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIHJlcXVpcmluZyBsb2FkaW5nL3NrZWxldG9uIHN0YXRlcyBmb3IgYWxsIGhlYXZ5IG9wZXJhdGlvbnMuXCIsXG4gICAgICBcIkkgZmFjaWxpdGF0ZWQgc2hhcmVkIHN0YW5kYXJkcyBhbmQgY29sbGFib3JhdGlvbiBwcm9jZXNzZXMgYmV0d2VlbiBkZXNpZ24gYW5kIGVuZ2luZWVyaW5nIHRlYW1zLlwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQcm9jZXNzIGxlYWRlcnNoaXA6IEluZmx1ZW5jZWQgb3JnYW5pemF0aW9uYWwgc3RhbmRhcmRzIGJleW9uZCBteSBpbW1lZGlhdGUgcHJvamVjdFwiLFxuICAgICAgXCJDcm9zcy1mdW5jdGlvbmFsIGltcGFjdDogSW1wcm92ZWQgY29sbGFib3JhdGlvbiBiZXR3ZWVuIGRlc2lnbiBhbmQgZW5naW5lZXJpbmdcIixcbiAgICAgIFwiS25vd2xlZGdlIHNoYXJpbmc6IERvY3VtZW50ZWQgbGVhcm5pbmdzIHRoYXQgYmVuZWZpdGVkIGZ1dHVyZSBwcm9qZWN0c1wiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2FzZVN0dWR5RW50cmllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlFbnRyeT4gPSBbXG4gIHtcbiAgICBpZDogXCJkaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsXCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiUmVkdWNlZCBoYXJhc3NtZW50IGJ5IDYwJSBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycyB0aHJvdWdoIGEgcHJpdmFjeS1maXJzdCBjYWxsaW5nIGxheWVyIGluc2lkZSBJcmFuJ3MgbGFyZ2VzdCBtYXJrZXRwbGFjZS5cIixcbiAgICBmb2N1czogXCJUcnVzdCAmIFNhZmV0eVwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlNldGFyZSBBdmFsIEVuZ2FnZW1lbnRcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJSZS1hcmNoaXRlY3RlZCBsaWZlY3ljbGUgam91cm5leXMgdGhhdCBkb3VibGVkIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnRlZCByZWZlcnJhbCBjb2hvcnRzIGludG8gNjBLKyBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gICAgZm9jdXM6IFwiUmV0ZW50aW9uICYgR3Jvd3RoXCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gICAgdGl0bGU6IFwiU2V0YXJlWWVrIEJpbGwgUGF5bWVudFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIkluY3JlYXNlZCBiaWxsIHBheW1lbnQgYWRvcHRpb24gZnJvbSA0JSB0byA0NyUgYXQgU2V0YXJlIEF2YWwncyBTZXRhcmVZZWsgYXBwIGJ5IHNvbHZpbmcgdHJ1c3QsIHRyYW5zcGFyZW5jeSwgYW5kIHJlY3VycmluZyB3b3JrZmxvdyBjaGFsbGVuZ2VzLlwiLFxuICAgIGZvY3VzOiBcIlByb2R1Y3QgRGVzaWduICYgR3Jvd3RoXCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgZGl2YXJPdmVydmlldywgc2V0YXJlT3ZlcnZpZXcsIHNldGFyZVlla092ZXJ2aWV3IH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IGRpdmFyU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogZGl2YXJPdmVydmlldy50aXRsZSxcbiAgZGVzY3JpcHRpb246XG4gICAgZGl2YXJPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUHJpdmFjeS1maXJzdCBjYWxsaW5nIGV4cGVyaWVuY2UgdGhhdCByZWR1Y2VkIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJSBmb3IgMi4xTSBEaXZhciB1c2Vycy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsYCxcbiAgaW1hZ2U6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiVHJ1c3QgJiBTYWZldHlcIiwgXCJIYXJhc3NtZW50IFJlZHVjdGlvblwiLCBcIk1hcmtldHBsYWNlXCJdLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGRpdmFyQ2FzZVN0dWR5TWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiRGl2YXIgU2VjdXJlIENhbGwgQ2FzZSBTdHVkeSDigJQgUmVkdWNpbmcgSGFyYXNzbWVudCBieSA2MCVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgZGl2YXJPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUHJpdmFjeS1maXJzdCBjYWxsaW5nIGV4cGVyaWVuY2UgdGhhdCByZWR1Y2VkIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJSBmb3IgMi4xTSBEaXZhciB1c2Vycy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAgICAgIGFsdDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2UuYWx0LFxuICAgICAgd2lkdGg6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICBoZWlnaHQ6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGRpdmFyU3RydWN0dXJlZERhdGEsXG59O1xuXG5jb25zdCBzZXRhcmVTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIkNhc2VTdHVkeVwiLFxuICBuYW1lOiBzZXRhcmVPdmVydmlldy50aXRsZSxcbiAgZGVzY3JpcHRpb246XG4gICAgXCJMaWZlY3ljbGUgcmVkZXNpZ24gdGhhdCBkb3VibGVkIHJldGFpbmVkIHJldmVudWUgYW5kIHR1cm5lZCByZWZlcnJhbCBjb2hvcnRzIGludG8gZGFpbHkgYWN0aXZlIHVzZXJzLlwiLFxuICBhdXRob3I6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgfSxcbiAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudGAsXG4gIGltYWdlOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICBrZXl3b3JkOiBbXCJSZXRlbnRpb25cIiwgXCJMaWZlY3ljbGVcIiwgXCJHcm93dGggRGVzaWduXCJdLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHNldGFyZUNhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIlNldGFyZSBBdmFsIEVuZ2FnZW1lbnQgQ2FzZSBTdHVkeSDigJQgRG91YmxpbmcgUmV0YWluZWQgUmV2ZW51ZVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIGxpZmVjeWNsZSB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZSBhbmQgY29udmVydCByZWZlcnJhbCBjb2hvcnRzIGludG8gZGFpbHkgYWN0aXZlIHVzZXJzLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICAgICAgYWx0OiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2UuYWx0LFxuICAgICAgd2lkdGg6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2UuaGVpZ2h0ID8/IDYzMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogc2V0YXJlU3RydWN0dXJlZERhdGEsXG59O1xuXG5jb25zdCBzZXRhcmVZZWtTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIkNhc2VTdHVkeVwiLFxuICBuYW1lOiBzZXRhcmVZZWtPdmVydmlldy50aXRsZSxcbiAgZGVzY3JpcHRpb246XG4gICAgc2V0YXJlWWVrT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlJlZGVzaWduZWQgYmlsbCBwYXltZW50IGV4cGVyaWVuY2UgdGhhdCBpbmNyZWFzZWQgYWRvcHRpb24gZnJvbSA0JSB0byA0NyUgYnkgc29sdmluZyB0cnVzdCwgdHJhbnNwYXJlbmN5LCBhbmQgcmVjdXJyaW5nIHdvcmtmbG93IGNoYWxsZW5nZXMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudGAsXG4gIGltYWdlOiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICBrZXl3b3JkOiBbXCJQcm9kdWN0IERlc2lnblwiLCBcIkdyb3d0aFwiLCBcIkZpbnRlY2hcIiwgXCJVc2VyIEV4cGVyaWVuY2VcIiwgXCJTZXRhcmUgQXZhbFwiLCBcIlNldGFyZVlla1wiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVZZWtDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJTZXRhcmVZZWsgQmlsbCBQYXltZW50IENhc2UgU3R1ZHkg4oCUIEZyb20gNCUgdG8gNDclIEFkb3B0aW9uIGF0IFNldGFyZSBBdmFsXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIHNldGFyZVlla092ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJSZWRlc2lnbmVkIFNldGFyZVllaydzIGJpbGwgcGF5bWVudCBleHBlcmllbmNlIGF0IFNldGFyZSBBdmFsIHRvIGluY3JlYXNlIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGJ5IHNvbHZpbmcgdHJ1c3QsIHRyYW5zcGFyZW5jeSwgYW5kIHJlY3VycmluZyB3b3JrZmxvdyBjaGFsbGVuZ2VzLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLXllay1iaWxsLXBheW1lbnRcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAgICAgIGFsdDogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IHNldGFyZVlla1N0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFJQSxJQUFNLGdDQUFnQyxHQUFHLGNBQTZDO0FBQUEsRUFDcEYsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUV2Qix1QkFDRSx1QkE4SkUsZUE5SkY7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLElBQUksUUFBUTtBQUFBLElBQ1osU0FBUyxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxJQUMxQixJQUFJLEVBQUUsVUFBVSxLQUFLLElBQUksUUFBUSxpQkFBaUIsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxJQUp4RSxVQThKRTtBQUFBLHNCQXhKQSx1QkFnQ0UsZUFoQ0Y7QUFBQSxRQUFPLFNBQVMsRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUEsUUFBakMsVUFnQ0U7QUFBQSxVQS9CQyxRQUFRLDJCQUNQLHVCQUVFLG9CQUZGO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBVSxPQUFNO0FBQUEsWUFBcEMsVUFDRyxRQUFRO0FBQUEsYUFEWCxpQ0FFRTtBQUFBLDBCQUVKLHVCQUEwQyxvQkFBMUM7QUFBQSxZQUFZLFNBQVE7QUFBQSxZQUFwQixVQUEwQixRQUFRO0FBQUEsYUFBbEMsaUNBQTBDO0FBQUEsVUFDekMsUUFBUSwyQkFDUCx1QkFTRSxvQkFURjtBQUFBLFlBQ0UsU0FBUTtBQUFBLFlBQ1IsT0FBTTtBQUFBLFlBQ04sSUFBSTtBQUFBLGNBQ0YsWUFBWSxFQUFFLElBQUksS0FBSyxJQUFJLEtBQUs7QUFBQSxjQUNoQyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtB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QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNLENBQUM7QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNLENBQUM7QUFBQSxJQUNQLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNLENBQUM7QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU0sQ0FBQztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sbUJBQWtEO0FBQUEsRUFDN0Q7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGOzs7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
