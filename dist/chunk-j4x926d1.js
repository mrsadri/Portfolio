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
    summary: "SetareYek had a bill payment feature that only 4% of users adopted, despite serving over 1 million active users. As the sole designer on this project, I was tasked with understanding why users avoided this critical feature and redesigning it to drive adoption and recurring engagement.",
    body: [
      "Ahmad, a 58-year-old building manager in Tehran, keeps a worn notebook with 12 residents' utility codes. Every month, he manually enters each 13-digit code, photocopies receipts, and slips them under doors. He tried SetareYek once—gave up after 10 minutes of confusion. This is his story, and how we fixed it.",
      "Setare Aval's SetareYek app serves over 1 million Iranian users with financial services including mobile recharges, internet packages, utility bill payments, transportation tickets, and health services. Bill payment represented a strategic opportunity: it's a high-frequency, recurring transaction that could drive monthly user engagement and increase lifetime value.",
      "However, analytics showed that only 4% of payments were bill-related—users actively avoided the feature despite having millions of active users. Session recordings revealed users were trying but failing to complete bill payments, indicating a fundamental UX problem rather than a lack of demand. Our goal was to reach 25% adoption within 6 months—we achieved 47% in 8 weeks."
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
      "As the sole designer, I owned the entire research process. I conducted 18 in-depth interviews across 7 households and 4 building managers, ranging from 28 to 62 years old. Through contextual inquiry, I observed users in their natural environments—like watching a building manager maintain his physical notebook where he tracked bills and receipts. This contextual approach revealed what 'proof' meant in practice, not just in theory.",
      "I synthesized digital behavior analysis from 200+ session recordings, 150+ app store reviews, and social media sentiment analysis. The patterns were clear: 73% of users were confused about which bills we supported, 68% expressed frustration with repetitive 13-digit code entry every month, and 81% lacked trust because they couldn't get official receipts.",
      "From this research, two core personas emerged with distinct but overlapping needs: The Building Manager (age 55+) who needs official documentation for residents, and The Head of Household who needs to avoid repetitive data entry and never miss due dates."
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
    summary: "Understanding these personas drove every design decision that followed.",
    body: [
      "From my research, two distinct personas emerged with overlapping but distinct needs. I created detailed personas with specific use cases, pain points, and goals that informed every design decision."
    ],
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
    id: "competitive",
    title: "Competitive Analysis",
    summary: "I analyzed how other fintech apps in Iran's market solved bill payment to understand what users expected and where we could differentiate.",
    body: [
      "Before designing solutions, I researched competitors including other Iranian fintech apps, banking apps, and regional payment platforms. Most competitors had similar problems: unclear coverage, no saved bills, and generic receipts. However, some had strengths we could learn from—like clear provider logos and QR scanning.",
      "Our differentiation would be: comprehensive bill management (not just payment), official shareable receipts, and a recurring workflow that remembered user preferences. This competitive analysis helped me prioritize features that would create real value, not just match competitors."
    ],
    highlights: [
      "Competitors: Similar problems with coverage clarity and receipt quality",
      "Differentiation: Bill management hub + official receipts + recurring workflow",
      "Market gap: No competitor offered saved bills with one-tap updates"
    ]
  },
  {
    id: "philosophy",
    title: "Design Philosophy",
    summary: "Digitize what people already do in the physical world—then make it 10x better.",
    body: [
      "People already keep notebooks of bill IDs—we built a digital bill list. They set calendar reminders—we built smart notifications. They make photocopies of receipts—we created shareable official receipts.",
      "The experience had to feel natural from day one, not like learning new software. This alignment with existing mental models was critical for adoption, especially for our 55+ Building Manager persona who needed familiar patterns."
    ]
  },
  {
    id: "design-process",
    title: "Design Process & Iteration",
    summary: "I followed a rigorous design process with multiple iterations, prototyping, and user validation before implementation.",
    body: [
      "I started with low-fidelity wireframes mapping out the core flows: bill entry, saved bills management, and receipt generation. I created 12 iterations exploring different approaches—from fully automated to user-controlled. Through rapid prototyping in Figma, I tested concepts with 8 users across both personas before committing to a direction.",
      "I conducted usability testing on key interactions: QR scanning flow, saved bill updates, and receipt sharing. This testing revealed that 87% of users preferred manual control over automation—a key insight that prevented another Version 1-style failure. Users said: 'I finally understand what bills you support!' when they saw the provider logos upfront.",
      "I created detailed design specifications with 50+ interaction states, comprehensive error handling, and loading state patterns. These specs ensured engineering could build exactly what I designed while I maintained design quality throughout implementation. I used Figma comments and weekly workshops to align stakeholders."
    ],
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
    summary: "Working within technical limitations required strategic trade-offs between ideal UX and implementation feasibility.",
    body: [
      "The Version 1 failure revealed critical technical constraints: API latency for bill lookups averaged 6.2 seconds (ranging from 2-8 seconds depending on provider), limited database capacity for storing saved bills at scale (needed to support 1M+ users), and network reliability issues in Iran affecting real-time updates (average connection speed: 2.5 Mbps).",
      "I worked closely with engineering to understand these constraints and design around them. Instead of auto-fetching all bills (which caused the 8-10 second load), I designed manual 'Check Amount' buttons that gave users control and instant feedback. For saved bills, we implemented lazy loading and pagination to handle scale—loading 10 bills at a time instead of all at once.",
      "The trade-off: Users had to tap a button instead of automatic updates, but they got instant feedback and never saw blank screens. This user-controlled approach actually improved satisfaction by 34% because users felt in control, not waiting for slow systems. Post-launch data showed 78% of users preferred manual control over the automated approach we initially tried."
    ],
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
    summary: "I designed for accessibility from the start, especially considering our 55+ Building Manager persona and the critical nature of financial transactions.",
    body: [
      "Given our Building Manager persona (55+) and the critical nature of bill payment, accessibility wasn't optional—it was essential. I implemented several accessibility considerations throughout the design.",
      "For visual accessibility: I used high contrast ratios (WCAG AA minimum) for all financial data, large touch targets (minimum 44x44px) for all interactive elements, and clear typography hierarchy with readable font sizes (minimum 16px body text). For our Persian right-to-left (RTL) layout, I ensured all UI elements mirrored correctly.",
      "For cognitive accessibility: I designed clear error states with actionable messages, avoided jargon in all copy, and provided multiple ways to complete tasks (QR scan OR manual entry). For the receipt, I ensured it was readable both on-screen and when printed.",
      "I tested the design with users who had varying levels of digital literacy and incorporated feedback. The QR scanning feature was particularly important for users who struggled with manual 13-digit code entry."
    ],
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
    summary: "I designed six interconnected features that addressed each core user need while building trust and reducing friction.",
    body: [
      "Working closely with product managers and engineers, I designed a comprehensive solution that addressed all three key insights. Each feature was tested through prototypes and validated with users before implementation. I prioritized features based on research insights, technical feasibility, and business impact."
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
    id: "feature-impact",
    title: "Feature Impact Breakdown",
    summary: "Post-launch analytics revealed which features drove the most adoption and value.",
    body: [
      "After 8 weeks, I analyzed feature adoption data to understand which solutions had the highest impact. This analysis helped validate our design decisions and inform future feature prioritization."
    ],
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
      "Saved Bills was the highest-impact feature: 68% adoption drove the majority of recurring usage",
      "QR Scanning exceeded expectations: 42% usage showed strong demand, especially among older users",
      "Receipt sharing validated emotional need: 73% sharing rate proved the receipt was core value, not nice-to-have",
      "Transparency upfront reduced drop-off: Showing supported providers early prevented trial-and-error abandonment"
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
      "Within 8 weeks of Version 2 launch, bill payment adoption increased from 4% to 47%—a 10x growth in bill payment share of total payments. This exceeded our initial goal of 25% adoption by 88%. Bill payment went from a neglected feature to one of SetareYek's primary value propositions, driving monthly recurring engagement.",
      "The performance improvements reduced drop-off rates by 80% compared to Version 1 (from 40% to 8% abandonment). User satisfaction scores increased from 4.2 to 4.6 stars (measured through app store reviews and in-app surveys), and bill payment became a top-3 feature by usage frequency. This transformation helped solidify SetareYek's position as a comprehensive financial services platform serving over 1 million users.",
      "Week-by-week adoption showed steady growth: Week 1 (12%), Week 2 (18%), Week 4 (28%), Week 6 (38%), Week 8 (47%). The curve flattened after week 8, indicating we'd reached market saturation for the initial launch cohort.",
      "Qualitative feedback from 12 post-launch interviews confirmed the success. Users praised the saved bills feature, official receipts, and the overall ease of use. The Building Manager persona specifically appreciated the shareable receipts, validating our research insights. One user said: 'This saves me 3 hours every month—I used to spend that time entering codes and making photocopies.'"
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

//# debugId=9E3DC7EDBAFCFBCE64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXhwYW5kTW9yZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXYudHN4IiwgIi4uL3NyYy9zaGFyZWQvdXRpbHMvc3gudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb24udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIERpdmlkZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZENvbXBvbmVudCA9ICh7IHNlY3Rpb24gfTogeyBzZWN0aW9uOiBDYXNlU3R1ZHlTZWN0aW9uIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIGlkPXtzZWN0aW9uLmlkfVxuICAgICAgc3BhY2luZz17eyB4czogMi41LCBtZDogMyB9fVxuICAgICAgc3g9e3sgbWF4V2lkdGg6IDc2MCwgbXg6IFwiYXV0b1wiLCBzY3JvbGxNYXJnaW5Ub3A6IHsgeHM6IDk2LCBtZDogMTQwIH0gfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMSB9fT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiB7IHhzOiAxLCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiBpbmRleCA8IHNlY3Rpb24uYm9keSEubGVuZ3RoIC0gMSA/IHsgeHM6IDIsIG1kOiAxLjUgfSA6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiIFxuICAgICAgICAgICAgICBrZXk9e3BvaW50fSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICBhbHQ9e3NlY3Rpb24uaW1hZ2UuYWx0fVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCA9IG1lbW8oXG4gIENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50LFxuICAocHJldiwgbmV4dCkgPT4gcHJldi5zZWN0aW9uID09PSBuZXh0LnNlY3Rpb24sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNS44OCA5LjI5IDEyIDEzLjE3IDguMTIgOS4yOWEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsNC41OSA0LjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw0LjU5LTQuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MS0uMzktLjM4LTEuMDMtLjM5LTEuNDIgMFwiXG59KSwgJ0V4cGFuZE1vcmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlLCBEaXZpZGVyLCBJY29uQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUsIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgRXhwYW5kTW9yZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVSb3VuZGVkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcyA9IHtcbiAgc2VjdGlvbnM6IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcbiAgYWN0aXZlU2VjdGlvbklkOiBzdHJpbmc7XG4gIG9uTmF2aWdhdGU6IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb3V0bGluZUxhYmVsPzogc3RyaW5nO1xuICBjb250YWluZXJTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgQ2FzZVN0dWR5T3V0bGluZU5hdiA9ICh7XG4gIHNlY3Rpb25zLFxuICBhY3RpdmVTZWN0aW9uSWQsXG4gIG9uTmF2aWdhdGUsXG4gIG91dGxpbmVMYWJlbCA9IFwiT3V0bGluZVwiLFxuICBjb250YWluZXJTeCxcbn06IENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCFpc01vYmlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICBzcGFjaW5nPXsxfVxuICAgICAgc3g9e21lcmdlU3goXG4gICAgICAgICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KSxcbiAgICAgICAgY29udGFpbmVyU3gsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3sgY3Vyc29yOiBpc01vYmlsZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaXNNb2JpbGUgJiYgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtvdXRsaW5lTGFiZWx9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2VcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBleHBhbmRlZCA/IFwicm90YXRlKDE4MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZXhwYW5kZWQgPyBcIkNvbGxhcHNlIG91dGxpbmVcIiA6IFwiRXhwYW5kIG91dGxpbmVcIn1cbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeHBhbmRNb3JlUm91bmRlZEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIj5cbiAgICAgICAgPERpdmlkZXIgc3g9e3sgbWI6IDEgfX0gLz5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb25OYXZpZ2F0ZShldmVudCwgc2VjdGlvbi5pZCk7XG4gICAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtY3VycmVudD17YWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yOClcIlxuICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgcHg6IDEuNSxcbiAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgU3hQcm9wcywgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBhcHBlbmQgPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KHRhcmdldDogU3hQcm9wczxUVGhlbWU+W10sIHZhbHVlPzogU3hQcm9wczxUVGhlbWU+KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiBhcHBlbmQodGFyZ2V0LCBpdGVtKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFyZ2V0LnB1c2godmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlU3ggPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KFxuICBiYXNlOiBTeFByb3BzPFRUaGVtZT4sXG4gIC4uLm92ZXJyaWRlczogQXJyYXk8U3hQcm9wczxUVGhlbWU+IHwgdW5kZWZpbmVkPlxuKTogU3hQcm9wczxUVGhlbWU+ID0+IHtcbiAgY29uc3QgZW50cmllczogU3hQcm9wczxUVGhlbWU+W10gPSBbXTtcbiAgYXBwZW5kKGVudHJpZXMsIGJhc2UpO1xuICBvdmVycmlkZXMuZm9yRWFjaCgodmFsdWUpID0+IGFwcGVuZChlbnRyaWVzLCB2YWx1ZSkpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBlbnRyaWVzWzBdITtcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzIGFzIFN4UHJvcHM8VFRoZW1lPjtcbn07XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlPdmVydmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25Qcm9wcyA9IHtcbiAgZXllYnJvdzogc3RyaW5nO1xuICBvdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXc7XG4gIHN1YnRpdGxlRmFsbGJhY2s/OiBzdHJpbmc7XG4gIG1ldGFUaXRsZT86IHN0cmluZztcbiAgc3RhdHNUaXRsZT86IHN0cmluZztcbiAgc3RhdHNWYXJpYW50PzogXCJncmFkaWVudFwiIHwgXCJvdXRsaW5lZFwiO1xuICBoZXJvQmFja2Ryb3BTeD86IFN4UHJvcHM8VGhlbWU+O1xuICBoZXJvU3VyZmFjZVN4PzogU3hQcm9wczxUaGVtZT47XG4gIHN0YXRzQ2FyZFN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0SGVyb0JhY2tkcm9wU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBpbnNldDogMCxcbiAgYm9yZGVyUmFkaXVzOiB7IHhzOiAyNCwgbWQ6IDMyIH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE4KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTYsMjgsNTYsMC44OCksIHJnYmEoMzYsNjQsMTIwLDAuNzIpKVwiLFxuICBmaWx0ZXI6IFwiYmx1cig0OHB4KVwiLFxuICB6SW5kZXg6IC0xLFxufSk7XG5cbmNvbnN0IGRlZmF1bHRIZXJvU3VyZmFjZVN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LCAyNTEsIDI1NSwgMC44OClcIiA6IFwicmdiYSgxMywgMjAsIDM2LCAwLjg4KVwiLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICB9YCxcbiAgYm94U2hhZG93OlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwiMCAyNnB4IDUycHggcmdiYSgzNCwgODQsIDI1NSwgMC4xNClcIlxuICAgICAgOiBcIjAgMjZweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxufSk7XG5cbmNvbnN0IGRlZmF1bHRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuOCksIHJnYmEoMzYsNjQsMTIwLDAuNikpXCIsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogXCJub25lXCIsXG59KTtcblxuY29uc3Qgb3V0bGluZWRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45MilcIiA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjg1KVwiLFxufSk7XG5cbmNvbnN0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIG92ZXJ2aWV3LFxuICBzdWJ0aXRsZUZhbGxiYWNrLFxuICBtZXRhVGl0bGUgPSBcIlByb2plY3QgZGV0YWlsc1wiLFxuICBzdGF0c1RpdGxlLFxuICBzdGF0c1ZhcmlhbnQgPSBcImdyYWRpZW50XCIsXG4gIGhlcm9CYWNrZHJvcFN4LFxuICBoZXJvU3VyZmFjZVN4LFxuICBzdGF0c0NhcmRTeCxcbn06IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3RhdHMgPSBvdmVydmlldy5zdGF0cztcbiAgY29uc3QgcmVzb2x2ZWRTdGF0c0NhcmRTeCA9XG4gICAgc3RhdHNWYXJpYW50ID09PSBcImdyYWRpZW50XCIgPyBkZWZhdWx0U3RhdHNDYXJkU3ggOiBvdXRsaW5lZFN0YXRzQ2FyZFN4O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIDxCb3ggc3g9e21lcmdlU3goZGVmYXVsdEhlcm9CYWNrZHJvcFN4LCBoZXJvQmFja2Ryb3BTeCl9IC8+XG5cbiAgICAgICAgPEJveCBzeD17bWVyZ2VTeChkZWZhdWx0SGVyb1N1cmZhY2VTeCwgaGVyb1N1cmZhY2VTeCl9PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAyIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIj57b3ZlcnZpZXcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7KG92ZXJ2aWV3LnN1YnRpdGxlID8/IHN1YnRpdGxlRmFsbGJhY2spICYmIChcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICAgICAgICB7b3ZlcnZpZXcuc3VidGl0bGUgPz8gc3VidGl0bGVGYWxsYmFja31cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge21ldGFUaXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICAgICAgICB7b3ZlcnZpZXcubWV0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAxLjI1LCBtZDogMS41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIG10OiAwLjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAge3N0YXRzICYmIChcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICAgIHtzdGF0c1RpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0c1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHMubWFwKChzdGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5sZW5ndGggPj0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB4czogMTIsIHNtOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRzLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHhzOiAxMiwgc206IDYgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHhzOiAxMiwgc206IDEyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezB9IHN4PXttZXJnZVN4KHJlc29sdmVkU3RhdHNDYXJkU3gsIHN0YXRzQ2FyZFN4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0LnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxLjU1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB0eXBlIFN4UHJvcHMsXG4gIHR5cGUgVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlFbnRyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzID0ge1xuICBleWVicm93OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0dWRpZXM6IHJlYWRvbmx5IENhc2VTdHVkeUVudHJ5W107XG4gIHByaW1hcnlDdGE6IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFwiY29udGFpbmVkXCIgfCBcIm91dGxpbmVkXCI7XG4gIH07XG4gIHNlY29uZGFyeUN0YT86IHtcbiAgICB0bzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFyaWFudD86IFwiY29udGFpbmVkXCIgfCBcIm91dGxpbmVkXCI7XG4gIH07XG4gIHNlY3Rpb25TeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgZGVmYXVsdFNlY3Rpb25TeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0MSwyNDUsMjU1LDAuOCksIHJnYmEoMjI0LDIzMywyNTUsMC45NCkpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLDIwLDMzLDAuOSksIHJnYmEoMjEsMzEsNTIsMC45MikpXCIsXG59KTtcblxuY29uc3QgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb24gPSAoe1xuICBleWVicm93LFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHN0dWRpZXMsXG4gIHByaW1hcnlDdGEsXG4gIHNlY29uZGFyeUN0YSxcbiAgc2VjdGlvblN4LFxufTogQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17bWVyZ2VTeChkZWZhdWx0U2VjdGlvblN4LCBzZWN0aW9uU3gpfT5cbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiA0LCBtZDogNiB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiA3MjAsIG14OiB7IHhzOiBcImF1dG9cIiwgbWQ6IDAgfSwgbGluZUhlaWdodDogMS42NSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgIHtzdHVkaWVzLm1hcCgoc3R1ZHkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3N0dWR5LmlkfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgdG89e3N0dWR5LnBhdGh9XG4gICAgICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUudG9rZW5zLnRyYW5zaXRpb24uaG92ZXJ9LCB0cmFuc2Zvcm0gMTYwbXMgZWFzZWAsXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuZm9jdXN9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3R1ZHkudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgIHtzdHVkeS5leGNlcnB0fVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBSZWFkIHRoZSBjYXNlIHN0dWR5IOKGklxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIHNtOiAzIH19XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e3ByaW1hcnlDdGEudG99XG4gICAgICAgICAgICB2YXJpYW50PXtwcmltYXJ5Q3RhLnZhcmlhbnQgPz8gXCJjb250YWluZWRcIn1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnlDdGEubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3NlY29uZGFyeUN0YSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e3NlY29uZGFyeUN0YS50b31cbiAgICAgICAgICAgICAgdmFyaWFudD17c2Vjb25kYXJ5Q3RhLnZhcmlhbnQgPz8gXCJvdXRsaW5lZFwifVxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5Q3RhLmxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5U2VjdGlvbkxpc3QgPSByZWFkb25seSBDYXNlU3R1ZHlTZWN0aW9uW107XG5cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbmNvbnN0IGdldEluaXRpYWxTZWN0aW9uSWQgPSAoc2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25MaXN0KSA9PiBzZWN0aW9uc1swXT8uaWQgPz8gXCJcIjtcblxuY29uc3QgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbiA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHtcbiAgY29uc3Qgc2VjdGlvbklkcyA9IHVzZU1lbW8oKCkgPT4gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiBzZWN0aW9uLmlkKSwgW3NlY3Rpb25zXSk7XG5cbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb25JZCwgc2V0QWN0aXZlU2VjdGlvbklkXSA9IHVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxTZWN0aW9uSWQoc2VjdGlvbnMpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VjdGlvbklkcy5pbmNsdWRlcyhhY3RpdmVTZWN0aW9uSWQpKSB7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZVNlY3Rpb25JZCwgc2VjdGlvbklkcywgc2VjdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGlmIChoYXNoICYmIHNlY3Rpb25JZHMuaW5jbHVkZXMoaGFzaCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChoYXNoKTtcbiAgICB9XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50cyA9IHNlY3Rpb25JZHNcbiAgICAgIC5tYXAoKHNlY3Rpb25JZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKSlcbiAgICAgIC5maWx0ZXIoKGVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxFbGVtZW50ID0+IEJvb2xlYW4oZWxlbWVudCkpO1xuXG4gICAgaWYgKHNlY3Rpb25FbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2libGVFbnRyaWVzID0gZW50cmllc1xuICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5pbnRlcnNlY3Rpb25SYXRpbyAtIGEuaW50ZXJzZWN0aW9uUmF0aW8pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VmlzaWJsZSA9IHZpc2libGVFbnRyaWVzWzBdO1xuICAgICAgICBpZiAoZmlyc3RWaXNpYmxlKSB7XG4gICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGZpcnN0VmlzaWJsZS50YXJnZXQuaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyByb290TWFyZ2luOiBcIi00NSUgMHB4IC00NSVcIiB9LFxuICAgICk7XG5cbiAgICBzZWN0aW9uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbc2VjdGlvbklkc10pO1xuXG4gIGNvbnN0IGhhbmRsZU91dGxpbmVDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQodGFyZ2V0SWQpO1xuICAgICAgICBjb25zdCBuZXdVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSMke3RhcmdldElkfWA7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBuZXdVcmwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgcmV0dXJuIHsgYWN0aXZlU2VjdGlvbklkLCBoYW5kbGVPdXRsaW5lQ2xpY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcyA9IChcbiAgZW50cmllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlFbnRyeT4sXG4gIGN1cnJlbnRJZDogQ2FzZVN0dWR5RW50cnlbXCJpZFwiXSxcbikgPT5cbiAgdXNlTWVtbyhcbiAgICAoKSA9PiBlbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlkICE9PSBjdXJyZW50SWQpLFxuICAgIFtlbnRyaWVzLCBjdXJyZW50SWRdLFxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWxhdGVkQ2FzZVN0dWRpZXM7XG5cblxuIiwKICAgICJpbXBvcnQgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvZGl2YXItc2VjdXJlLWNhbGwtbGlzdGluZy5wbmdcIjtcbmltcG9ydCBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC1pbnRlcnZpZXctc2Vzc2lvbi5hdmlmXCI7XG5pbXBvcnQgc2V0YXJlQXZhbFVzZXJGbG93QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC11c2VyLWZsb3cud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5LCBDYXNlU3R1ZHlPdmVydmlldywgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGl2YXJPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIldlIHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGluc2lkZSBEaXZhcuKAmXMgY2xvdGhpbmcgY2F0ZWdvcnkgYnkgYnVpbGRpbmcgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IG5vdyBwcm90ZWN0cyAyLjFNIHdlZWtseSB1c2Vycy5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgVVggRGVzaWduZXIgwrcgVHJ1c3QgJiBTYWZldHlcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiTWF5IOKAkyBKdW5lIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGVhbVwiLCB2YWx1ZTogXCJEZXNpZ24sIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgRW5naW5lZXJpbmcsIFN1cHBvcnRcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHsgdmFsdWU6IFwi4pa8NjAlXCIsIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiIH0sXG4gICAgeyB2YWx1ZTogXCIyLjFNXCIsIGxhYmVsOiBcIldlZWtseSBjYWxsZXJzIHNhZmVndWFyZGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0LFxuICAgIFwiRGl2YXIgc2VjdXJlIGNhbGwgbGlzdGluZ3MgaW50ZXJmYWNlXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXZhclNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpdmFyIGlzIElyYW7igJlzIGxhcmdlc3QgY2xhc3NpZmllZHMgbWFya2V0cGxhY2Ugd2l0aCA1M00rIHdlZWtseSB1c2Vycy4gVHJ1c3QgYW5kIHNhZmV0eSBpbmNpZGVudHMgY2FuIGNvbGxhcHNlIGVudGlyZSByZXZlbnVlIGNhdGVnb3JpZXMgaWYgbGVmdCB1bmNoZWNrZWQuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAgeyBsYWJlbDogXCJNYXJrZXRwbGFjZSBzY2FsZVwiLCB2YWx1ZTogXCI1M00rXCIsIGRlc2NyaXB0aW9uOiBcIldlZWtseSBidXllcnMgJiBzZWxsZXJzXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiVm9pY2UgZGVwZW5kZW5jZVwiLCB2YWx1ZTogXCIyLjFNXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGxzIHBsYWNlZCBldmVyeSB3ZWVrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiQWQgY29uc3VtcHRpb25cIiwgdmFsdWU6IFwiNkIrXCIsIGRlc2NyaXB0aW9uOiBcIk1vbnRobHkgYWQgdmlld3NcIiB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDbG90aGluZyBsaXN0aW5nc+KAlG1vc3RseSB3b21lbi1sZWTigJR3ZXJlIGhpdCBoYXJkZXN0IGJ5IGFidXNlLlwiLFxuICAgICAgXCJNYW51YWwgbW9kZXJhdGlvbiBjb3VsZG7igJl0IGtlZXAgdXA7IGxpcXVpZGl0eSBhbmQgdHJ1c3Qgd2VyZSBpbiBmcmVlIGZhbGwuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNyaXNpc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBDcmlzaXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJDdXN0b21lciBjYXJlIGNlbnRyZXMgd2VyZSBmbG9vZGVkIHdpdGggaGFyYXNzbWVudCByZXBvcnRzLiBTZWxsZXJzIGRlbGV0ZWQgbGlzdGluZ3Mgb3IgY2h1cm5lZCBlbnRpcmVseSwgZmVhcmluZyByZXBlYXQgaW5jaWRlbnRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSGFyYXNzZXJzIHNjcmFwZWQgcGhvbmUgbnVtYmVycyBmcm9tIGFkcyBhbmQgY2lyY3VsYXRlZCB0aGVtIGluIHByaXZhdGUgVGVsZWdyYW0gZ3JvdXBzLlwiLFxuICAgICAgXCJFdmVuIGFmdGVyIHZpY3RpbXMgZGVsZXRlZCBsaXN0aW5ncywgdGhlIGNhbGxzIGNvbnRpbnVlZCBiZWNhdXNlIG51bWJlcnMgd2VyZSBhbHJlYWR5IGV4cG9zZWQuXCIsXG4gICAgICBcIldpdGhvdXQgaW50ZXJ2ZW50aW9uLCBEaXZhciByaXNrZWQgbG9zaW5nIGEgY2F0ZWdvcnkgdGhhdCBhbmNob3JlZCBkYWlseSBlbmdhZ2VtZW50LlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJMYXlsYSwgMzJcIixcbiAgICAgICAgcm9sZTogXCJQcm9mZXNzaW9uYWwgYXJ0aXN0IHNlbGxpbmcgYmVzcG9rZSBjbG90aGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIkl0IHdhcyBpbmZ1cmlhdGluZy4gSSB0b29rIGRvd24gbXkgRGl2YXIgYWQgaG9waW5nIHRvIHN0b3AgdGhlIGNhbGxzLCBidXQgdGhleSBrZXB0IGNvbWluZy4gU29tZW9uZSB0b2xkIG1lIG15IG51bWJlciB3YXMgaW4gYSBUZWxlZ3JhbSBncm91cC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIGludGVydmlld2VkIGhhcmFzc2VkIHNlbGxlcnMgYW5kIGFuYWx5c2VkIGJlaGF2aW91cmFsIGRhdGEgdG8gdW5kZXJzdGFuZCBob3cgZXhwb3N1cmUgc2NhbGVkLiBUaGUgYnJlYWt0aHJvdWdoIGNhbWUgZnJvbSBjb25uZWN0aW5nIHF1YWxpdGF0aXZlIHN0b3JpZXMgdG8gcXVhbnRpdGF0aXZlIHNpZ25hbHMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQdWJsaWMgcGhvbmUgbnVtYmVycyB3ZXJlIHRoZSByb290IGNhdXNlIG9mIGV4cG9zdXJlLCBub3QgdGhlIG51bWJlciBvZiByZXBvcnRzLlwiLFxuICAgICAgXCJFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IGFkYXB0ZWQgYnkgdXNpbmcgaW4tYXBwIGNoYXQ7IG5ldyBzZWxsZXJzIG5lZWRlZCBwcm90ZWN0aXZlIGRlZmF1bHRzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdHJhdGVneVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbiBKb3VybmV5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgcmVmcmFtZWQgc3VjY2VzcyBmcm9tIOKAnHJlZHVjZSByZXBvcnRz4oCdIHRvIOKAnHJlZHVjZSBleHBvc3VyZS7igJ0gV2l0aCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIFN1cHBvcnQsIGFuZCBEYXRhLCB3ZSBldmFsdWF0ZWQgZXZlcnkgcGF0aCBhbmQgc3RyZXNzLXRlc3RlZCBlZGdlIGNhc2VzIGJlZm9yZSBjb21taXR0aW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRWR1Y2F0aW5nIHVzZXJzIGFib3V0IGhhcmFzc2VyIHRhY3RpY3Mgd291bGQgZXJvZGUgdHJ1c3QgYW5kIGRpc2NvdXJhZ2UgbGlzdGluZ3MuXCIsXG4gICAgICBcIkZ1bGwgVm9JUCB3YXMgY29zdC1wcm9oaWJpdGl2ZSwgZnJhZ2lsZSBhY3Jvc3MgZGV2aWNlIHR5cGVzLCBhbmQgaW5hY2Nlc3NpYmxlIHRvIDQ3JSBvZiBsZWdhY3kgQW5kcm9pZCB1c2Vycy5cIixcbiAgICAgIFwiVm9pY2UgcmVsYXkgd2l0aCBpbnRlcm1lZGlhcnkgbnVtYmVycyBwcm90ZWN0ZWQgc2VsbGVycyB3aXRob3V0IGNoYW5naW5nIHB1cmNoYXNlIGJlaGF2aW91cuKAlHRoaXMgYmVjYW1lIHRoZSBub3J0aCBzdGFyLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkEgMy1kYXkgcGlsb3QgaW4gdGhlIGNsb3RoaW5nIGNhdGVnb3J5IHJlc3VsdGVkIGluIGEgNTYlIGNhbGwgZmFpbHVyZSByYXRlLiBJbnN0ZWFkIG9mIHJldmVydGluZywgd2UgdHJlYXRlZCBldmVyeSBmYWlsdXJlIGFzIGEgZGVzaWduIHJlcXVpcmVtZW50LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciBiZWhhdmlvdXI6IHNlbGxlcnMgYmxvY2tlZCB1bmZhbWlsaWFyIG51bWJlcnM7IGJ1eWVycyByZWRpYWxsZWQgZnJvbSBjYWxsIGxvZ3M7IHJlcGVhdCBjb252ZXJzYXRpb25zIGJyb2tlIG1hcHBpbmcgd2luZG93cy5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGxvYWQ6IGNhbGwgdm9sdW1lIHNwaWtlZCBiZXlvbmQgZm9yZWNhc3RzIGFuZCBudW1iZXIgcG9vbHMgd2VyZSBleGhhdXN0ZWQuXCIsXG4gICAgICBcIkJ1c2luZXNzIHJpc2s6IGxvbmdlciBjYWxscyBpbmZsYXRlZCB0ZWxlY29tIGNvc3RzIGFuZCBhbm9ueW1pc2VkIG51bWJlcnMgYXR0cmFjdGVkIG9wcG9ydHVuaXN0aWMgc2NhbW1lcnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmluZW1lbnRcIixcbiAgICB0aXRsZTogXCJUaGUgUmVmaW5lZCBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHRyYW5zbGF0ZWQgZXZlcnkgcGlsb3QgaW5zaWdodCBpbnRvIHByb2R1Y3QgYW5kIHBsYXRmb3JtIGltcHJvdmVtZW50cyBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQmlkaXJlY3Rpb25hbCBtYXBwaW5nIGxldCBzZWxsZXJzIHJlY29ubmVjdCB3aXRob3V0IGV4cG9zaW5nIHJlYWwgbnVtYmVycy5cIixcbiAgICAgIFwiRXh0ZW5kZWQgbWFwcGluZyB3aW5kb3dzIGZyb20gMjAgc2Vjb25kcyB0byAxNSBtaW51dGVzIHJlZHVjZWQgZHJvcHBlZCBjYWxscy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyAo4oCcVGhpcyBpcyBhIHNlY3VyZSBjYWxsIGZyb20gRGl2YXLigKbigJ0pIHNldCBleHBlY3RhdGlvbnMgYW5kIGRldGVycmVkIHNjYW1tZXJzLlwiLFxuICAgICAgXCJBIHBvb2wgb2YgMTAwIGludGVybWVkaWFyeSBudW1iZXJzIGFzc2lnbmVkIHBlciBidXllci1zZWxsZXIgcGFpciBwcmV2ZW50ZWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5LCBjaGF0IGludGVncmF0aW9uLCBhbmQgYWQgbWFuYWdlbWVudCBsb2dzIGtlcHQgbGVnaXRpbWF0ZSByZWxhdGlvbnNoaXBzIGludGFjdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBZnRlciByb2xsb3V0LCBoYXJhc3NtZW50IHJlcG9ydHMgZHJvcHBlZCBkcmFtYXRpY2FsbHkgYW5kIHNlbGxlcnMgZmVsdCBzYWZlIGVub3VnaCB0byBrZWVwIGxpc3RpbmdzIGxpdmUuIE1vZGVyYXRpb24gdGVhbXMgcmVjb3ZlcmVkIGhvdXJzIGVhY2ggd2VlayB0aGF0IHdlcmUgcHJldmlvdXNseSBzcGVudCBvbiByZWFjdGl2ZSB0aWNrZXRzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDYwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gOCB3ZWVrcyBvZiBsYXVuY2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkIGRlbGV0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMjUlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZld2VyIHNlbGxlcnMgbGVhdmluZyB0aGUgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN1cHBvcnQgdGlja2V0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMTglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vcmUgdGltZSBmb3IgcHJvYWN0aXZlIG1vbml0b3JpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlYXJuaW5nc1wiLFxuICAgIHRpdGxlOiBcIktleSBMZWFybmluZ3NcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIG9uZeKAlGV4cG9zdXJlLCBub3QgcmVwb3J0cywgd2FzIHRoZSByb290LlwiLFxuICAgICAgXCJVc2VycyB3ZXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSByZXZlYWxlZCB0aGUgcmlnaHQgZGVmYXVsdHMuXCIsXG4gICAgICBcIkZhaWx1cmUgaXMgc2lnbmFsLiBUaGUgNTYlIHBpbG90IGZhaWx1cmUgZ2VuZXJhdGVkIGEgYmFja2xvZyBvZiBhY3Rpb25hYmxlIHJlcXVpcmVtZW50cy5cIixcbiAgICAgIFwiUGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcgdG8ga2VlcCBhYnVzZSB2ZWN0b3JzIGluIGNoZWNrLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZsZWN0aW9uXCIsXG4gICAgdGl0bGU6IFwiUmVmbGVjdGlvblwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHJlaW5mb3JjZWQgbXkgYmVsaWVmIHRoYXQgc29sdmluZyBoYXJkIHByb2JsZW1zIHN0YXJ0cyB3aXRoIHVuZGVyc3RhbmRpbmcgYmVoYXZpb3VyLiBCeSBibGVuZGluZyByZXNlYXJjaCwgZGF0YSwgYW5kIHJhcGlkIGl0ZXJhdGlvbiwgd2UgYnVpbHQgYSBzYWZldHkgbGF5ZXIgdGhhdCBzdGlsbCBwcm90ZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZWFjaCB3ZWVrLiBUaGUgaGFyYXNzbWVudCBwcm9ibGVtIG1heSBuZXZlciBkaXNhcHBlYXIgZW50aXJlbHksIGJ1dCBEaXZhciBpcyBzaWduaWZpY2FudGx5IHNhZmVyIGZvciB0aGUgdXNlcnMgd2hvIG5lZWQgaXQgbW9zdC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZU92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzIGF0IFNldGFyZSBBdmFsXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJGZWIgMjAyMSDigJMgSmFuIDIwMjJcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIkRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBpbiA2IG1vbnRoc1wiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiMsOXXCIsXG4gICAgICBsYWJlbDogXCJSZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBY2hpZXZlZCB3aXRoaW4gdGhlIGZpcnN0IDYgbW9udGhzIG9mIHJvbGxvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIis2MEtcIixcbiAgICAgIGxhYmVsOiBcIkRhaWx5IGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVmZXJyYWwgY29ob3J0IGNvbnZlcnRlZCB0byBoaWdoLWludGVudCBEQVVzXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQsXG4gICAgXCJTZXRhcmUgQXZhbCBjdXN0b21lciBlbmdhZ2VtZW50IGludGVydmlldyBzZXNzaW9uXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIkZyb20gNCUgdG8gNDclOiBIb3cgSSBUdXJuZWQgYSBGYWlsaW5nIEZlYXR1cmUgSW50byBhIENvcmUgUHJvZHVjdCBWYWx1ZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkxlZCBlbmQtdG8tZW5kIHJlZGVzaWduIG9mIFNldGFyZVllaydzIGJpbGwgcGF5bWVudCBleHBlcmllbmNlLCBpbmNyZWFzaW5nIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIHRocm91Z2ggcmlnb3JvdXMgdXNlciByZXNlYXJjaCwgc3RyYXRlZ2ljIGRlc2lnbiwgYW5kIGNyb3NzLWZ1bmN0aW9uYWwgY29sbGFib3JhdGlvbi5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciDCtyBFbmQtdG8tRW5kIExlYWRcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiMjAyMiDigJMgMjAyMyAoMTIgbW9udGhzKVwiIH0sXG4gICAgeyBsYWJlbDogXCJDb21wYW55XCIsIHZhbHVlOiBcIlNldGFyZSBBdmFsIChTZXRhcmVZZWsgYXBwKVwiIH0sXG4gICAgeyBsYWJlbDogXCJUZWFtXCIsIHZhbHVlOiBcIlByb2R1Y3QsIEVuZ2luZWVyaW5nLCBSZXNlYXJjaCwgU3VwcG9ydCwgTGVnYWxcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIjEweCBhZG9wdGlvbiBncm93dGgsIGV4Y2VlZGVkIDI1JSBnb2FsIGJ5IDg4JVwiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgbGFiZWw6IFwiQmlsbCBwYXltZW50IGFkb3B0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZSBvZiB0b3RhbCBwYXltZW50c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMU0rXCIsXG4gICAgICBsYWJlbDogXCJBcHAgZG93bmxvYWRzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRhcmVZZWsgb24gR29vZ2xlIFBsYXkgU3RvcmUgd2l0aCA0LjIrIHJhdGluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiODAlXCIsXG4gICAgICBsYWJlbDogXCJEcm9wIHJlZHVjdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWZ0ZXIgZml4aW5nIHBlcmZvcm1hbmNlIGlzc3VlcyBpbiBWZXJzaW9uIDJcIixcbiAgICB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgIHNldGFyZUF2YWxVc2VyRmxvd0Fzc2V0LFxuICAgIFwiU2V0YXJlWWVrIGJpbGwgcGF5bWVudCB1c2VyIGZsb3dcIixcbiAgICB7IHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDYzMCB9LFxuICApLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVlla1NlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJ0bGRyXCIsXG4gICAgdGl0bGU6IFwiVEw7RFJcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJRdWljayBzdW1tYXJ5OiBQcm9ibGVtLCBhcHByb2FjaCwgc29sdXRpb24sIGFuZCBpbXBhY3QgYXQgYSBnbGFuY2UuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCLwn5OKIFByb2JsZW06IDQlIGJpbGwgcGF5bWVudCBhZG9wdGlvbiBkZXNwaXRlIDFNKyB1c2Vycy4gVXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmcgdG8gY29tcGxldGUgcGF5bWVudHMuXCIsXG4gICAgICBcIvCflI0gQXBwcm9hY2g6IE11bHRpLW1ldGhvZCByZXNlYXJjaCAoMTggaW50ZXJ2aWV3cywgMjAwKyBzZXNzaW9uIHJlY29yZGluZ3MpIHJldmVhbGVkIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgICAgIFwi8J+SoSBTb2x1dGlvbjogU2l4IGludGVyY29ubmVjdGVkIGZlYXR1cmVzIGFkZHJlc3NpbmcgY29yZSB1c2VyIG5lZWRzOiBzYXZlZCBiaWxscywgb2ZmaWNpYWwgcmVjZWlwdHMsIHNtYXJ0IHJlbWluZGVycywgUVIgc2Nhbm5pbmcsIHByb3ZpZGVyIHRyYW5zcGFyZW5jeSwgYW5kIGJpbGwgbWFuYWdlbWVudCBodWIuXCIsXG4gICAgICBcIvCfk4ggSW1wYWN0OiA0NyUgYWRvcHRpb24gaW4gOCB3ZWVrcyAoMTB4IGdyb3d0aCksIGV4Y2VlZGVkIDI1JSBnb2FsIGJ5IDg4JS4gQmlsbCBwYXltZW50IGJlY2FtZSBhIHRvcC0zIGZlYXR1cmUgZHJpdmluZyByZWN1cnJpbmcgZW5nYWdlbWVudC5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiMTB4IGFkb3B0aW9uIGdyb3d0aDogNCUg4oaSIDQ3JVwiLFxuICAgICAgXCJFeGNlZWRlZCBnb2FsOiAxODglIG9mIHRhcmdldCAoNDclIHZzIDI1JSBnb2FsKVwiLFxuICAgICAgXCJUb3AtMyBmZWF0dXJlOiBCeSB1c2FnZSBmcmVxdWVuY3lcIixcbiAgICAgIFwiVXNlciBzYXRpc2ZhY3Rpb246IDQuMiDihpIgNC42IHN0YXJzICgrOS41JSBpbmNyZWFzZSlcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIlRoZSBCdXNpbmVzcyBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2V0YXJlWWVrIGhhZCBhIGJpbGwgcGF5bWVudCBmZWF0dXJlIHRoYXQgb25seSA0JSBvZiB1c2VycyBhZG9wdGVkLCBkZXNwaXRlIHNlcnZpbmcgb3ZlciAxIG1pbGxpb24gYWN0aXZlIHVzZXJzLiBBcyB0aGUgc29sZSBkZXNpZ25lciBvbiB0aGlzIHByb2plY3QsIEkgd2FzIHRhc2tlZCB3aXRoIHVuZGVyc3RhbmRpbmcgd2h5IHVzZXJzIGF2b2lkZWQgdGhpcyBjcml0aWNhbCBmZWF0dXJlIGFuZCByZWRlc2lnbmluZyBpdCB0byBkcml2ZSBhZG9wdGlvbiBhbmQgcmVjdXJyaW5nIGVuZ2FnZW1lbnQuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBaG1hZCwgYSA1OC15ZWFyLW9sZCBidWlsZGluZyBtYW5hZ2VyIGluIFRlaHJhbiwga2VlcHMgYSB3b3JuIG5vdGVib29rIHdpdGggMTIgcmVzaWRlbnRzJyB1dGlsaXR5IGNvZGVzLiBFdmVyeSBtb250aCwgaGUgbWFudWFsbHkgZW50ZXJzIGVhY2ggMTMtZGlnaXQgY29kZSwgcGhvdG9jb3BpZXMgcmVjZWlwdHMsIGFuZCBzbGlwcyB0aGVtIHVuZGVyIGRvb3JzLiBIZSB0cmllZCBTZXRhcmVZZWsgb25jZeKAlGdhdmUgdXAgYWZ0ZXIgMTAgbWludXRlcyBvZiBjb25mdXNpb24uIFRoaXMgaXMgaGlzIHN0b3J5LCBhbmQgaG93IHdlIGZpeGVkIGl0LlwiLFxuICAgICAgXCJTZXRhcmUgQXZhbCdzIFNldGFyZVllayBhcHAgc2VydmVzIG92ZXIgMSBtaWxsaW9uIElyYW5pYW4gdXNlcnMgd2l0aCBmaW5hbmNpYWwgc2VydmljZXMgaW5jbHVkaW5nIG1vYmlsZSByZWNoYXJnZXMsIGludGVybmV0IHBhY2thZ2VzLCB1dGlsaXR5IGJpbGwgcGF5bWVudHMsIHRyYW5zcG9ydGF0aW9uIHRpY2tldHMsIGFuZCBoZWFsdGggc2VydmljZXMuIEJpbGwgcGF5bWVudCByZXByZXNlbnRlZCBhIHN0cmF0ZWdpYyBvcHBvcnR1bml0eTogaXQncyBhIGhpZ2gtZnJlcXVlbmN5LCByZWN1cnJpbmcgdHJhbnNhY3Rpb24gdGhhdCBjb3VsZCBkcml2ZSBtb250aGx5IHVzZXIgZW5nYWdlbWVudCBhbmQgaW5jcmVhc2UgbGlmZXRpbWUgdmFsdWUuXCIsXG4gICAgICBcIkhvd2V2ZXIsIGFuYWx5dGljcyBzaG93ZWQgdGhhdCBvbmx5IDQlIG9mIHBheW1lbnRzIHdlcmUgYmlsbC1yZWxhdGVk4oCUdXNlcnMgYWN0aXZlbHkgYXZvaWRlZCB0aGUgZmVhdHVyZSBkZXNwaXRlIGhhdmluZyBtaWxsaW9ucyBvZiBhY3RpdmUgdXNlcnMuIFNlc3Npb24gcmVjb3JkaW5ncyByZXZlYWxlZCB1c2VycyB3ZXJlIHRyeWluZyBidXQgZmFpbGluZyB0byBjb21wbGV0ZSBiaWxsIHBheW1lbnRzLCBpbmRpY2F0aW5nIGEgZnVuZGFtZW50YWwgVVggcHJvYmxlbSByYXRoZXIgdGhhbiBhIGxhY2sgb2YgZGVtYW5kLiBPdXIgZ29hbCB3YXMgdG8gcmVhY2ggMjUlIGFkb3B0aW9uIHdpdGhpbiA2IG1vbnRoc+KAlHdlIGFjaGlldmVkIDQ3JSBpbiA4IHdlZWtzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJCdXNpbmVzcyBvcHBvcnR1bml0eVwiLFxuICAgICAgICB2YWx1ZTogXCJIaWdoLWZyZXF1ZW5jeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb250aGx5IHJlY3VycmluZyB0cmFuc2FjdGlvbiBmb3IgZXZlcnkgaG91c2Vob2xkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJJbml0aWFsIGFkb3B0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBcIjQlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgcGF5bWVudHMgYXMgc2hhcmUgb2YgdG90YWwgcGF5bWVudHNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgYmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCIxTStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWN0aXZlIHVzZXJzIG9uIFNldGFyZVllayBwbGF0Zm9ybVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiU3RyYXRlZ2ljIGJ1c2luZXNzIGdvYWw6IFRyYW5zZm9ybSBiaWxsIHBheW1lbnQgaW50byBhIGNvcmUgdmFsdWUgcHJvcG9zaXRpb24gZHJpdmluZyByZWN1cnJpbmcgZW5nYWdlbWVudC5cIixcbiAgICAgIFwiQ2xlYXIgcHJvYmxlbTogVXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmfigJRpbmRpY2F0aW5nIGEgVVggcHJvYmxlbSwgbm90IGxhY2sgb2YgZGVtYW5kLlwiLFxuICAgICAgXCJTb2xvIGRlc2lnbmVyIGNvbnN0cmFpbnQ6IFJlcXVpcmVkIGJhbGFuY2luZyBkZWVwIHJlc2VhcmNoIHdpdGggcmFwaWQgZXhlY3V0aW9uLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJhYm91dC1zZXRhcmV5ZWtcIixcbiAgICB0aXRsZTogXCJXaGF0IGlzIFNldGFyZVllaz9cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmVZZWsgaXMgU2V0YXJlIEF2YWwncyBmbGFnc2hpcCBtb2JpbGUgYXBwbGljYXRpb27igJRhIGNvbXByZWhlbnNpdmUgZmluYW5jaWFsIHNlcnZpY2VzIHBsYXRmb3JtIHRoYXQgaGFzIGJlY29tZSBlc3NlbnRpYWwgdG8gZGFpbHkgbGlmZSBmb3Igb3ZlciAxIG1pbGxpb24gSXJhbmlhbiB1c2Vycy5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlNldGFyZVllayBzZXJ2ZXMgYXMgYSBvbmUtc3RvcCBkaWdpdGFsIHBsYXRmb3JtIGZvciBlc3NlbnRpYWwgZmluYW5jaWFsIGFuZCB0ZWxlY29tbXVuaWNhdGlvbiBzZXJ2aWNlcy4gVXNlcnMgY2FuIHB1cmNoYXNlIG1vYmlsZSByZWNoYXJnZXMgYW5kIGludGVybmV0IHBhY2thZ2VzIGZvciBtYWpvciBJcmFuaWFuIG9wZXJhdG9ycyAoTUNJLCBJcmFuY2VsbCwgUmlnaHRlbCksIHBheSB1dGlsaXR5IGJpbGxzICh3YXRlciwgZWxlY3RyaWNpdHksIGdhcyksIGJ1eSB0cmFuc3BvcnRhdGlvbiB0aWNrZXRzICh0cmFpbiwgYnVzLCBwbGFuZSksIGJvb2sgaG90ZWxzLCBhY2Nlc3MgaGVhbHRoIHNlcnZpY2VzLCBwYXkgY2FyIHZpb2xhdGlvbnMgYW5kIGZyZWV3YXkgdG9sbHMsIGFuZCBwZXJmb3JtIGNhcmQtdG8tY2FyZCBtb25leSB0cmFuc2ZlcnMuXCIsXG4gICAgICBcIldoYXQgbWFrZXMgU2V0YXJlWWVrIHNpZ25pZmljYW50IGlzIGl0cyByb2xlIGluIG1vZGVybml6aW5nIElyYW4ncyBmaW5hbmNpYWwgc2VydmljZXMgbGFuZHNjYXBlLiBCeSBlbGltaW5hdGluZyBpbnRlcm1lZGlhcmllcyBhbmQgcHJvdmlkaW5nIGRpcmVjdCBhY2Nlc3MgdG8gc2VydmljZXMsIFNldGFyZVllayBoYXMgc3RyZWFtbGluZWQgcHJvY2Vzc2VzIHRoYXQgcHJldmlvdXNseSByZXF1aXJlZCBtdWx0aXBsZSBhcHBzLCBwaHlzaWNhbCB2aXNpdHMsIG9yIHBob25lIGNhbGxzLiBUaGlzIGNvbnNvbGlkYXRpb24gc2F2ZXMgdXNlcnMgdGltZSwgcmVkdWNlcyBmcmljdGlvbiwgYW5kIGNyZWF0ZXMgYSBtb3JlIGVmZmljaWVudCBkaWdpdGFsIGVjb25vbXkuXCIsXG4gICAgICBcIlRoZSBhcHAncyByZXdhcmRzIHN5c3RlbeKAlHdoZXJlIHVzZXJzIGVhcm4gcG9pbnRzIHdpdGggZXZlcnkgdHJhbnNhY3Rpb27igJRmb3N0ZXJzIGxveWFsdHkgYW5kIGVuZ2FnZW1lbnQuIFVzZXJzIGNhbiBwYXJ0aWNpcGF0ZSBpbiBsb3R0ZXJpZXMgd2l0aCBwcml6ZXMgcmFuZ2luZyBmcm9tIGNhc2ggcmV3YXJkcyB0byB2ZWhpY2xlcyBsaWtlIHRoZSBQZXVnZW90IDIwNi4gQnV0IG1vcmUgaW1wb3J0YW50bHksIFNldGFyZVllayBoYXMgcG9zaXRpb25lZCBpdHNlbGYgYXMgYSBjcml0aWNhbCBpbmZyYXN0cnVjdHVyZSBmb3IgZXZlcnlkYXkgZmluYW5jaWFsIHRyYW5zYWN0aW9ucywgbWFraW5nIGl0IGluZGlzcGVuc2FibGUgdG8gbWlsbGlvbnMgb2YgaG91c2Vob2xkcyBhY3Jvc3MgSXJhbi5cIixcbiAgICAgIFwiRm9yIFNldGFyZSBBdmFsLCBiaWxsIHBheW1lbnQgd2Fzbid0IGp1c3QgYW5vdGhlciBmZWF0dXJl4oCUaXQgd2FzIGEgc3RyYXRlZ2ljIG9wcG9ydHVuaXR5LiBCaWxsIHBheW1lbnQgaXMgYSBoaWdoLWZyZXF1ZW5jeSwgcmVjdXJyaW5nIHRyYW5zYWN0aW9uIHRoYXQgZXZlcnkgaG91c2Vob2xkIG5lZWRzIG1vbnRobHkuIElmIHdlIGNvdWxkIHNvbHZlIGl0IHdlbGwsIHdlJ2QgY3JlYXRlIGEgaGFiaXQgdGhhdCBicmluZ3MgdXNlcnMgYmFjayByZWd1bGFybHksIGluY3JlYXNpbmcgbGlmZXRpbWUgdmFsdWUgYW5kIHBsYXRmb3JtIHN0aWNraW5lc3MuIFRoaXMgaXMgd2h5IGZpeGluZyBiaWxsIHBheW1lbnQgYWRvcHRpb24gd2Fzbid0IGp1c3QgYWJvdXQgaW1wcm92aW5nIGEgZmVhdHVyZeKAlGl0IHdhcyBhYm91dCB0cmFuc2Zvcm1pbmcgU2V0YXJlWWVrIGZyb20gYSB1dGlsaXR5IGFwcCBpbnRvIGFuIGVzc2VudGlhbCBkYWlseSBjb21wYW5pb24uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkNvbXByZWhlbnNpdmUgcGxhdGZvcm06IDEwKyBzZXJ2aWNlIGNhdGVnb3JpZXMgaW4gb25lIGFwcFwiLFxuICAgICAgXCJNYXJrZXQgbGVhZGVyOiBEaXJlY3Qgc2FsZXMgY2hhbm5lbCBlbGltaW5hdGluZyBpbnRlcm1lZGlhcmllc1wiLFxuICAgICAgXCJEYWlseSBlc3NlbnRpYWw6IENyaXRpY2FsIGluZnJhc3RydWN0dXJlIGZvciBob3VzZWhvbGQgZmluYW5jaWFsIG1hbmFnZW1lbnRcIixcbiAgICAgIFwiU3RyYXRlZ2ljIGltcG9ydGFuY2U6IEJpbGwgcGF5bWVudCBkcml2ZXMgcmVjdXJyaW5nIGVuZ2FnZW1lbnQgYW5kIHBsYXRmb3JtIHN0aWNraW5lc3NcIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQXBwIGRvd25sb2Fkc1wiLFxuICAgICAgICB2YWx1ZTogXCIxTStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZ2xlIFBsYXkgU3RvcmUgd2l0aCA0LjIrIHN0YXIgcmF0aW5nXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIHJldmlld3NcIixcbiAgICAgICAgdmFsdWU6IFwiMjVLK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3NpdGl2ZSBmZWVkYmFjayBmcm9tIGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU2VydmljZSBjYXRlZ29yaWVzXCIsXG4gICAgICAgIHZhbHVlOiBcIjEwK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb2JpbGUgcmVjaGFyZ2UsIGJpbGxzLCB0cmFuc3BvcnRhdGlvbiwgaGVhbHRoLCBhbmQgbW9yZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueSBncm93dGhcIixcbiAgICAgICAgdmFsdWU6IFwiNiDihpIgMTQwK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFbXBsb3llZXMgc2luY2UgMjAxNiBmb3VuZGluZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2hhbGxlbmdlXCIsXG4gICAgdGl0bGU6IFwiVW5kZXJzdGFuZGluZyB0aGUgUHJvYmxlbVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgYW5hbHl6ZWQgcXVhbnRpdGF0aXZlIGRhdGEgYW5kIHF1YWxpdGF0aXZlIHVzZXIgYmVoYXZpb3IgdG8gaWRlbnRpZnkgdGhlIHJvb3QgY2F1c2VzIHByZXZlbnRpbmcgYmlsbCBwYXltZW50IGFkb3B0aW9uLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiSSBzdGFydGVkIGJ5IGFuYWx5emluZyBzZXNzaW9uIHJlY29yZGluZ3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBkcm9wLW9mZiBwYXR0ZXJucy4gVGhlIGRhdGEgdG9sZCBhIGNsZWFyIHN0b3J5OiA5NiUgb2YgcGF5bWVudHMgd2VyZSBub3QgYmlsbHPigJR1c2VycyBhY3RpdmVseSBhdm9pZGVkIHRoZSBmZWF0dXJlLiBIaWdoIGRyb3Atb2ZmIHJhdGVzIG9jY3VycmVkIGF0IHNwZWNpZmljIHN0ZXBzLCB1c2VycyBzcGVudCB1bnVzdWFsbHkgbG9uZyBvbiBzaW5nbGUgc2NyZWVucyBpbmRpY2F0aW5nIGNvbmZ1c2lvbiwgYW5kIG1hbnkgYWJhbmRvbmVkIGF0dGVtcHRzIGJlZm9yZSByZWFjaGluZyBwYXltZW50IGNvbmZpcm1hdGlvbi5cIixcbiAgICAgIFwiVGhpcyByYWlzZWQgYSBjcml0aWNhbCBxdWVzdGlvbjogUGVvcGxlIHBheSBiaWxscyBldmVyeSBtb250aOKAlGl0J3Mgbm90IG9wdGlvbmFsLiBTbyB3aHkgd2VyZSB0aGV5IGF2b2lkaW5nIG91ciBhcHA/IFRoZSBhbnN3ZXIgd2Fzbid0IGluIHRoZSBkYXRhIGFsb25lOyBJIG5lZWRlZCB0byB1bmRlcnN0YW5kIHRoZSBodW1hbiBjb250ZXh0IGJlaGluZCB0aGVzZSBudW1iZXJzLlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCI5NiUgb2YgcGF5bWVudHMgd2VyZSBub3QgYmlsbHPigJR1c2VycyBhY3RpdmVseSBhdm9pZGVkIHRoZSBmZWF0dXJlIGRlc3BpdGUgaGF2aW5nIGl0IGF2YWlsYWJsZS5cIixcbiAgICAgIFwiSGlnaCBkcm9wLW9mZiByYXRlcyBhdCBzcGVjaWZpYyBzdGVwcyBpbiB0aGUgcGF5bWVudCBmbG93LlwiLFxuICAgICAgXCJVc2VycyBzcGVuZGluZyAyLTN4IGF2ZXJhZ2UgdGltZSBvbiBzaW5nbGUgc2NyZWVucywgaW5kaWNhdGluZyBjb25mdXNpb24gYW5kIGhlc2l0YXRpb24uXCIsXG4gICAgICBcIjQwJSsgYWJhbmRvbm1lbnQgcmF0ZSBiZWZvcmUgcmVhY2hpbmcgcGF5bWVudCBjb25maXJtYXRpb24uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkRhdGEgcmV2ZWFsZWQgdXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmfigJRpbmRpY2F0aW5nIGEgVVggcHJvYmxlbSwgbm90IGxhY2sgb2YgZGVtYW5kLlwiLFxuICAgICAgXCJRdWFudGl0YXRpdmUgYW5hbHlzaXMgYWxvbmUgd2Fzbid0IGVub3VnaDsgSSBuZWVkZWQgcXVhbGl0YXRpdmUgcmVzZWFyY2ggdG8gdW5kZXJzdGFuZCB3aHkuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRpc2NvdmVyeVwiLFxuICAgIHRpdGxlOiBcIk15IFJlc2VhcmNoIEFwcHJvYWNoXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBsZWQgYSBtdWx0aS1tZXRob2QgcmVzZWFyY2ggaW5pdGlhdGl2ZSBjb21iaW5pbmcgcXVhbGl0YXRpdmUgaW50ZXJ2aWV3cywgY29udGV4dHVhbCBpbnF1aXJ5LCBldGhub2dyYXBoaWMgb2JzZXJ2YXRpb24sIGFuZCBxdWFudGl0YXRpdmUgYW5hbHlzaXMgdG8gdW5jb3ZlciB0aGUgcmVhbCB1c2VyIG5lZWRzLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQXMgdGhlIHNvbGUgZGVzaWduZXIsIEkgb3duZWQgdGhlIGVudGlyZSByZXNlYXJjaCBwcm9jZXNzLiBJIGNvbmR1Y3RlZCAxOCBpbi1kZXB0aCBpbnRlcnZpZXdzIGFjcm9zcyA3IGhvdXNlaG9sZHMgYW5kIDQgYnVpbGRpbmcgbWFuYWdlcnMsIHJhbmdpbmcgZnJvbSAyOCB0byA2MiB5ZWFycyBvbGQuIFRocm91Z2ggY29udGV4dHVhbCBpbnF1aXJ5LCBJIG9ic2VydmVkIHVzZXJzIGluIHRoZWlyIG5hdHVyYWwgZW52aXJvbm1lbnRz4oCUbGlrZSB3YXRjaGluZyBhIGJ1aWxkaW5nIG1hbmFnZXIgbWFpbnRhaW4gaGlzIHBoeXNpY2FsIG5vdGVib29rIHdoZXJlIGhlIHRyYWNrZWQgYmlsbHMgYW5kIHJlY2VpcHRzLiBUaGlzIGNvbnRleHR1YWwgYXBwcm9hY2ggcmV2ZWFsZWQgd2hhdCAncHJvb2YnIG1lYW50IGluIHByYWN0aWNlLCBub3QganVzdCBpbiB0aGVvcnkuXCIsXG4gICAgICBcIkkgc3ludGhlc2l6ZWQgZGlnaXRhbCBiZWhhdmlvciBhbmFseXNpcyBmcm9tIDIwMCsgc2Vzc2lvbiByZWNvcmRpbmdzLCAxNTArIGFwcCBzdG9yZSByZXZpZXdzLCBhbmQgc29jaWFsIG1lZGlhIHNlbnRpbWVudCBhbmFseXNpcy4gVGhlIHBhdHRlcm5zIHdlcmUgY2xlYXI6IDczJSBvZiB1c2VycyB3ZXJlIGNvbmZ1c2VkIGFib3V0IHdoaWNoIGJpbGxzIHdlIHN1cHBvcnRlZCwgNjglIGV4cHJlc3NlZCBmcnVzdHJhdGlvbiB3aXRoIHJlcGV0aXRpdmUgMTMtZGlnaXQgY29kZSBlbnRyeSBldmVyeSBtb250aCwgYW5kIDgxJSBsYWNrZWQgdHJ1c3QgYmVjYXVzZSB0aGV5IGNvdWxkbid0IGdldCBvZmZpY2lhbCByZWNlaXB0cy5cIixcbiAgICAgIFwiRnJvbSB0aGlzIHJlc2VhcmNoLCB0d28gY29yZSBwZXJzb25hcyBlbWVyZ2VkIHdpdGggZGlzdGluY3QgYnV0IG92ZXJsYXBwaW5nIG5lZWRzOiBUaGUgQnVpbGRpbmcgTWFuYWdlciAoYWdlIDU1Kykgd2hvIG5lZWRzIG9mZmljaWFsIGRvY3VtZW50YXRpb24gZm9yIHJlc2lkZW50cywgYW5kIFRoZSBIZWFkIG9mIEhvdXNlaG9sZCB3aG8gbmVlZHMgdG8gYXZvaWQgcmVwZXRpdGl2ZSBkYXRhIGVudHJ5IGFuZCBuZXZlciBtaXNzIGR1ZSBkYXRlcy5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiMTggdXNlciBpbnRlcnZpZXdzIGFjcm9zcyA3IGhvdXNlaG9sZHMgYW5kIDQgYnVpbGRpbmcgbWFuYWdlcnMgKGFnZXMgMjgtNjIpXCIsXG4gICAgICBcIjIwMCsgc2Vzc2lvbiByZWNvcmRpbmdzIGFuYWx5emVkIGZvciBiZWhhdmlvcmFsIHBhdHRlcm5zXCIsXG4gICAgICBcIjE1MCsgYXBwIHN0b3JlIHJldmlld3Mgc3ludGhlc2l6ZWQgZm9yIHNlbnRpbWVudCBhbmFseXNpc1wiLFxuICAgICAgXCJDb250ZXh0dWFsIGlucXVpcnkgcmV2ZWFsZWQgcmVhbC13b3JsZCB3b3JrZmxvd3Mgd2UgbmVlZGVkIHRvIGRpZ2l0aXplXCIsXG4gICAgICBcIk11bHRpLW1ldGhvZCBzeW50aGVzaXMgY29ubmVjdGVkIHF1YWxpdGF0aXZlIGluc2lnaHRzIHRvIHF1YW50aXRhdGl2ZSBwYXR0ZXJuc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwZXJzb25hc1wiLFxuICAgIHRpdGxlOiBcIlR3byBDb3JlIFBlcnNvbmFzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVW5kZXJzdGFuZGluZyB0aGVzZSBwZXJzb25hcyBkcm92ZSBldmVyeSBkZXNpZ24gZGVjaXNpb24gdGhhdCBmb2xsb3dlZC5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIkZyb20gbXkgcmVzZWFyY2gsIHR3byBkaXN0aW5jdCBwZXJzb25hcyBlbWVyZ2VkIHdpdGggb3ZlcmxhcHBpbmcgYnV0IGRpc3RpbmN0IG5lZWRzLiBJIGNyZWF0ZWQgZGV0YWlsZWQgcGVyc29uYXMgd2l0aCBzcGVjaWZpYyB1c2UgY2FzZXMsIHBhaW4gcG9pbnRzLCBhbmQgZ29hbHMgdGhhdCBpbmZvcm1lZCBldmVyeSBkZXNpZ24gZGVjaXNpb24uXCIsXG4gICAgXSxcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBCdWlsZGluZyBNYW5hZ2VyIChBZ2UgNTUrKTogTWFuYWdlcyB1dGlsaXRpZXMgZm9yIDgtMTUgdW5pdCBhcGFydG1lbnQgYnVpbGRpbmdzLiBQYXlzIDEwLTIwIGJpbGxzIG1vbnRobHkgYWNyb3NzIHdhdGVyLCBlbGVjdHJpY2l0eSwgYW5kIGdhcy4gQ3JpdGljYWwgbmVlZDogb2ZmaWNpYWwsIHNoYXJlYWJsZSBkb2N1bWVudGF0aW9uIGZvciByZXNpZGVudHMuIFplcm8gdG9sZXJhbmNlIGZvciBhbWJpZ3VpdHkuIExvdyBkaWdpdGFsIGxpdGVyYWN5LCBwcmVmZXJzIGZhbWlsaWFyIHBhdHRlcm5zLlwiLFxuICAgICAgXCJUaGUgSGVhZCBvZiBIb3VzZWhvbGQgKEFnZSAzMC01MCk6IFBheXMgNC02IGZhbWlseSBiaWxscyBtb250aGx5ICh1dGlsaXRpZXMsIGludGVybmV0LCBwaG9uZSkuIE1hbmFnZXMgaG91c2Vob2xkIGZpbmFuY2VzIGFsb25nc2lkZSBmdWxsLXRpbWUgd29yay4gQ3JpdGljYWwgbmVlZDogYXZvaWQgcmUtZW50ZXJpbmcgMTMtZGlnaXQgY29kZXMgZXZlcnkgbW9udGguIENvbnN0YW50bHkgZm9yZ2V0cyBkdWUgZGF0ZXMuIFZhbHVlcyBzcGVlZCBhbmQgZWZmaWNpZW5jeS5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiQnVpbGRpbmcgTWFuYWdlclwiLFxuICAgICAgICByb2xlOiBcIkFnZSA1NSssIG1hbmFnZXMgMTItdW5pdCBhcGFydG1lbnQgYnVpbGRpbmdcIixcbiAgICAgICAgdGV4dDogXCJJIG1ha2UgcGhvdG9jb3BpZXMgb2YgZXZlcnkgcmVjZWlwdCBhbmQgZ2l2ZSB0aGVtIHRvIHJlc2lkZW50cy4gSSBuZWVkIHByb29mIHRoYXQgaXQncyBwYWlkLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkhlYWQgb2YgSG91c2Vob2xkXCIsXG4gICAgICAgIHJvbGU6IFwiQWdlIDM4LCBwYXlzIDUgYmlsbHMgbW9udGhseSBmb3IgZmFtaWx5XCIsXG4gICAgICAgIHRleHQ6IFwiRW50ZXJpbmcgdGhpcyAxMy1kaWdpdCBjb2RlIGV2ZXJ5IHNpbmdsZSBtb250aCBpcyB0b3J0dXJlLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJLZXkgSW5zaWdodHMgVGhhdCBDaGFuZ2VkIEV2ZXJ5dGhpbmdcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJlZSBicmVha3Rocm91Z2ggaW5zaWdodHMgZnJvbSBteSByZXNlYXJjaCBmdW5kYW1lbnRhbGx5IHNoaWZ0ZWQgb3VyIHByb2R1Y3Qgc3RyYXRlZ3kgYW5kIGRlc2lnbiBhcHByb2FjaC5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIkZpcnN0LCB1c2VycyB3ZXJlbid0IGNvbmZ1c2VkIGFib3V0IGJpbGwgY292ZXJhZ2XigJR0aGV5IHdlcmUgY29uZnVzZWQgYWJvdXQgdXMuIFRoZXkgaGFkIG5vIGlkZWEgd2hpY2ggYmlsbHMgU2V0YXJlWWVrIHN1cHBvcnRlZCwgZm9yY2luZyB0cmlhbC1hbmQtZXJyb3IgdGhhdCBkZXN0cm95ZWQgdHJ1c3QgYmVmb3JlIHRoZXkgZXZlbiBzdGFydGVkLiBUaGlzIGluc2lnaHQgbGVkIG1lIHRvIHByaW9yaXRpemUgdHJhbnNwYXJlbmN5IGFuZCB1cGZyb250IGNvbW11bmljYXRpb24uXCIsXG4gICAgICBcIlNlY29uZCwgdGhlIHJlY2VpcHQgd2Fzbid0IGEgbmljZS10by1oYXZl4oCUaXQgd2FzIHRoZSBlbnRpcmUgdmFsdWUgcHJvcG9zaXRpb24uIFVzZXJzIGRpZG4ndCBqdXN0IHdhbnQgY29uZmlybWF0aW9uOyB0aGV5IG5lZWRlZCBhbiBvZmZpY2lhbCBkb2N1bWVudCB0aGV5IGNvdWxkIHNob3cgdG8gZmFtaWx5IG1lbWJlcnMsIHNoYXJlIHdpdGggYnVpbGRpbmcgcmVzaWRlbnRzLCBvciBwcmVzZW50IHRvIGxhbmRsb3Jkcy4gVGhpcyBlbW90aW9uYWwgbmVlZCB3YXMgYXMgaW1wb3J0YW50IGFzIHRoZSBmdW5jdGlvbmFsIHRyYW5zYWN0aW9uLlwiLFxuICAgICAgXCJUaGlyZCwgYmlsbCBwYXltZW50IGlzbid0IGEgb25lLXRpbWUgdGFza+KAlGl0J3MgYSByZWN1cnJpbmcgbW9udGhseSBjeWNsZS4gT3VyIGV4aXN0aW5nIGZsb3cgdHJlYXRlZCBldmVyeSBwYXltZW50IGxpa2UgYSBuZXcgdHJhbnNhY3Rpb24sIGZvcmNpbmcgdXNlcnMgdG8gcmUtZW50ZXIgMTMtZGlnaXQgY29kZXMgZXZlcnkgbW9udGguIFRoaXMgZnJpY3Rpb24gd2FzIGtpbGxpbmcgYWRvcHRpb24uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRydXN0IGlzc3VlOiBVc2VycyBkaWRuJ3Qga25vdyB3aGF0IHdlIHN1cHBvcnRlZCwgZGVzdHJveWluZyBjb25maWRlbmNlIGJlZm9yZSB0aGV5IHN0YXJ0ZWQuXCIsXG4gICAgICBcIkVtb3Rpb25hbCBuZWVkID0gRnVuY3Rpb25hbCBuZWVkOiBUaGUgcmVjZWlwdCB3YXMgdGhlIGVudGlyZSB2YWx1ZSBwcm9wb3NpdGlvbiwgbm90IGRlY29yYXRpb24uXCIsXG4gICAgICBcIlJlY3VycmluZyB3b3JrZmxvdzogV2UgbmVlZGVkIHRvIHJlbWVtYmVyLCBub3QgbWFrZSB1c2VycyByZXBlYXQgdGhlbXNlbHZlcyBtb250aGx5LlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjb21wZXRpdGl2ZVwiLFxuICAgIHRpdGxlOiBcIkNvbXBldGl0aXZlIEFuYWx5c2lzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBhbmFseXplZCBob3cgb3RoZXIgZmludGVjaCBhcHBzIGluIElyYW4ncyBtYXJrZXQgc29sdmVkIGJpbGwgcGF5bWVudCB0byB1bmRlcnN0YW5kIHdoYXQgdXNlcnMgZXhwZWN0ZWQgYW5kIHdoZXJlIHdlIGNvdWxkIGRpZmZlcmVudGlhdGUuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJCZWZvcmUgZGVzaWduaW5nIHNvbHV0aW9ucywgSSByZXNlYXJjaGVkIGNvbXBldGl0b3JzIGluY2x1ZGluZyBvdGhlciBJcmFuaWFuIGZpbnRlY2ggYXBwcywgYmFua2luZyBhcHBzLCBhbmQgcmVnaW9uYWwgcGF5bWVudCBwbGF0Zm9ybXMuIE1vc3QgY29tcGV0aXRvcnMgaGFkIHNpbWlsYXIgcHJvYmxlbXM6IHVuY2xlYXIgY292ZXJhZ2UsIG5vIHNhdmVkIGJpbGxzLCBhbmQgZ2VuZXJpYyByZWNlaXB0cy4gSG93ZXZlciwgc29tZSBoYWQgc3RyZW5ndGhzIHdlIGNvdWxkIGxlYXJuIGZyb23igJRsaWtlIGNsZWFyIHByb3ZpZGVyIGxvZ29zIGFuZCBRUiBzY2FubmluZy5cIixcbiAgICAgIFwiT3VyIGRpZmZlcmVudGlhdGlvbiB3b3VsZCBiZTogY29tcHJlaGVuc2l2ZSBiaWxsIG1hbmFnZW1lbnQgKG5vdCBqdXN0IHBheW1lbnQpLCBvZmZpY2lhbCBzaGFyZWFibGUgcmVjZWlwdHMsIGFuZCBhIHJlY3VycmluZyB3b3JrZmxvdyB0aGF0IHJlbWVtYmVyZWQgdXNlciBwcmVmZXJlbmNlcy4gVGhpcyBjb21wZXRpdGl2ZSBhbmFseXNpcyBoZWxwZWQgbWUgcHJpb3JpdGl6ZSBmZWF0dXJlcyB0aGF0IHdvdWxkIGNyZWF0ZSByZWFsIHZhbHVlLCBub3QganVzdCBtYXRjaCBjb21wZXRpdG9ycy5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ29tcGV0aXRvcnM6IFNpbWlsYXIgcHJvYmxlbXMgd2l0aCBjb3ZlcmFnZSBjbGFyaXR5IGFuZCByZWNlaXB0IHF1YWxpdHlcIixcbiAgICAgIFwiRGlmZmVyZW50aWF0aW9uOiBCaWxsIG1hbmFnZW1lbnQgaHViICsgb2ZmaWNpYWwgcmVjZWlwdHMgKyByZWN1cnJpbmcgd29ya2Zsb3dcIixcbiAgICAgIFwiTWFya2V0IGdhcDogTm8gY29tcGV0aXRvciBvZmZlcmVkIHNhdmVkIGJpbGxzIHdpdGggb25lLXRhcCB1cGRhdGVzXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInBoaWxvc29waHlcIixcbiAgICB0aXRsZTogXCJEZXNpZ24gUGhpbG9zb3BoeVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpZ2l0aXplIHdoYXQgcGVvcGxlIGFscmVhZHkgZG8gaW4gdGhlIHBoeXNpY2FsIHdvcmxk4oCUdGhlbiBtYWtlIGl0IDEweCBiZXR0ZXIuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQZW9wbGUgYWxyZWFkeSBrZWVwIG5vdGVib29rcyBvZiBiaWxsIElEc+KAlHdlIGJ1aWx0IGEgZGlnaXRhbCBiaWxsIGxpc3QuIFRoZXkgc2V0IGNhbGVuZGFyIHJlbWluZGVyc+KAlHdlIGJ1aWx0IHNtYXJ0IG5vdGlmaWNhdGlvbnMuIFRoZXkgbWFrZSBwaG90b2NvcGllcyBvZiByZWNlaXB0c+KAlHdlIGNyZWF0ZWQgc2hhcmVhYmxlIG9mZmljaWFsIHJlY2VpcHRzLlwiLFxuICAgICAgXCJUaGUgZXhwZXJpZW5jZSBoYWQgdG8gZmVlbCBuYXR1cmFsIGZyb20gZGF5IG9uZSwgbm90IGxpa2UgbGVhcm5pbmcgbmV3IHNvZnR3YXJlLiBUaGlzIGFsaWdubWVudCB3aXRoIGV4aXN0aW5nIG1lbnRhbCBtb2RlbHMgd2FzIGNyaXRpY2FsIGZvciBhZG9wdGlvbiwgZXNwZWNpYWxseSBmb3Igb3VyIDU1KyBCdWlsZGluZyBNYW5hZ2VyIHBlcnNvbmEgd2hvIG5lZWRlZCBmYW1pbGlhciBwYXR0ZXJucy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZGVzaWduLXByb2Nlc3NcIixcbiAgICB0aXRsZTogXCJEZXNpZ24gUHJvY2VzcyAmIEl0ZXJhdGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgZm9sbG93ZWQgYSByaWdvcm91cyBkZXNpZ24gcHJvY2VzcyB3aXRoIG11bHRpcGxlIGl0ZXJhdGlvbnMsIHByb3RvdHlwaW5nLCBhbmQgdXNlciB2YWxpZGF0aW9uIGJlZm9yZSBpbXBsZW1lbnRhdGlvbi5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIkkgc3RhcnRlZCB3aXRoIGxvdy1maWRlbGl0eSB3aXJlZnJhbWVzIG1hcHBpbmcgb3V0IHRoZSBjb3JlIGZsb3dzOiBiaWxsIGVudHJ5LCBzYXZlZCBiaWxscyBtYW5hZ2VtZW50LCBhbmQgcmVjZWlwdCBnZW5lcmF0aW9uLiBJIGNyZWF0ZWQgMTIgaXRlcmF0aW9ucyBleHBsb3JpbmcgZGlmZmVyZW50IGFwcHJvYWNoZXPigJRmcm9tIGZ1bGx5IGF1dG9tYXRlZCB0byB1c2VyLWNvbnRyb2xsZWQuIFRocm91Z2ggcmFwaWQgcHJvdG90eXBpbmcgaW4gRmlnbWEsIEkgdGVzdGVkIGNvbmNlcHRzIHdpdGggOCB1c2VycyBhY3Jvc3MgYm90aCBwZXJzb25hcyBiZWZvcmUgY29tbWl0dGluZyB0byBhIGRpcmVjdGlvbi5cIixcbiAgICAgIFwiSSBjb25kdWN0ZWQgdXNhYmlsaXR5IHRlc3Rpbmcgb24ga2V5IGludGVyYWN0aW9uczogUVIgc2Nhbm5pbmcgZmxvdywgc2F2ZWQgYmlsbCB1cGRhdGVzLCBhbmQgcmVjZWlwdCBzaGFyaW5nLiBUaGlzIHRlc3RpbmcgcmV2ZWFsZWQgdGhhdCA4NyUgb2YgdXNlcnMgcHJlZmVycmVkIG1hbnVhbCBjb250cm9sIG92ZXIgYXV0b21hdGlvbuKAlGEga2V5IGluc2lnaHQgdGhhdCBwcmV2ZW50ZWQgYW5vdGhlciBWZXJzaW9uIDEtc3R5bGUgZmFpbHVyZS4gVXNlcnMgc2FpZDogJ0kgZmluYWxseSB1bmRlcnN0YW5kIHdoYXQgYmlsbHMgeW91IHN1cHBvcnQhJyB3aGVuIHRoZXkgc2F3IHRoZSBwcm92aWRlciBsb2dvcyB1cGZyb250LlwiLFxuICAgICAgXCJJIGNyZWF0ZWQgZGV0YWlsZWQgZGVzaWduIHNwZWNpZmljYXRpb25zIHdpdGggNTArIGludGVyYWN0aW9uIHN0YXRlcywgY29tcHJlaGVuc2l2ZSBlcnJvciBoYW5kbGluZywgYW5kIGxvYWRpbmcgc3RhdGUgcGF0dGVybnMuIFRoZXNlIHNwZWNzIGVuc3VyZWQgZW5naW5lZXJpbmcgY291bGQgYnVpbGQgZXhhY3RseSB3aGF0IEkgZGVzaWduZWQgd2hpbGUgSSBtYWludGFpbmVkIGRlc2lnbiBxdWFsaXR5IHRocm91Z2hvdXQgaW1wbGVtZW50YXRpb24uIEkgdXNlZCBGaWdtYSBjb21tZW50cyBhbmQgd2Vla2x5IHdvcmtzaG9wcyB0byBhbGlnbiBzdGFrZWhvbGRlcnMuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIk11bHRpcGxlIGl0ZXJhdGlvbnM6IEV4cGxvcmVkIGF1dG9tYXRlZCB2cy4gbWFudWFsIGFwcHJvYWNoZXMgdGhyb3VnaCBwcm90b3R5cGluZ1wiLFxuICAgICAgXCJVc2VyIHZhbGlkYXRpb246IFRlc3RlZCBwcm90b3R5cGVzIHdpdGggOCB1c2VycyBiZWZvcmUgYnVpbGRcIixcbiAgICAgIFwiRGV0YWlsZWQgc3BlY3M6IENyZWF0ZWQgY29tcHJlaGVuc2l2ZSBkZXNpZ24gZG9jdW1lbnRhdGlvbiBmb3IgZW5naW5lZXJpbmdcIixcbiAgICAgIFwiQ29sbGFib3JhdGlvbiBhcnRpZmFjdHM6IFVzZWQgRmlnbWEgY29tbWVudHMgYW5kIHdvcmtzaG9wcyB0byBhbGlnbiBzdGFrZWhvbGRlcnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGVjaG5pY2FsLWNvbnN0cmFpbnRzXCIsXG4gICAgdGl0bGU6IFwiVGVjaG5pY2FsIENvbnN0cmFpbnRzICYgVHJhZGUtb2Zmc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldvcmtpbmcgd2l0aGluIHRlY2huaWNhbCBsaW1pdGF0aW9ucyByZXF1aXJlZCBzdHJhdGVnaWMgdHJhZGUtb2ZmcyBiZXR3ZWVuIGlkZWFsIFVYIGFuZCBpbXBsZW1lbnRhdGlvbiBmZWFzaWJpbGl0eS5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlRoZSBWZXJzaW9uIDEgZmFpbHVyZSByZXZlYWxlZCBjcml0aWNhbCB0ZWNobmljYWwgY29uc3RyYWludHM6IEFQSSBsYXRlbmN5IGZvciBiaWxsIGxvb2t1cHMgYXZlcmFnZWQgNi4yIHNlY29uZHMgKHJhbmdpbmcgZnJvbSAyLTggc2Vjb25kcyBkZXBlbmRpbmcgb24gcHJvdmlkZXIpLCBsaW1pdGVkIGRhdGFiYXNlIGNhcGFjaXR5IGZvciBzdG9yaW5nIHNhdmVkIGJpbGxzIGF0IHNjYWxlIChuZWVkZWQgdG8gc3VwcG9ydCAxTSsgdXNlcnMpLCBhbmQgbmV0d29yayByZWxpYWJpbGl0eSBpc3N1ZXMgaW4gSXJhbiBhZmZlY3RpbmcgcmVhbC10aW1lIHVwZGF0ZXMgKGF2ZXJhZ2UgY29ubmVjdGlvbiBzcGVlZDogMi41IE1icHMpLlwiLFxuICAgICAgXCJJIHdvcmtlZCBjbG9zZWx5IHdpdGggZW5naW5lZXJpbmcgdG8gdW5kZXJzdGFuZCB0aGVzZSBjb25zdHJhaW50cyBhbmQgZGVzaWduIGFyb3VuZCB0aGVtLiBJbnN0ZWFkIG9mIGF1dG8tZmV0Y2hpbmcgYWxsIGJpbGxzICh3aGljaCBjYXVzZWQgdGhlIDgtMTAgc2Vjb25kIGxvYWQpLCBJIGRlc2lnbmVkIG1hbnVhbCAnQ2hlY2sgQW1vdW50JyBidXR0b25zIHRoYXQgZ2F2ZSB1c2VycyBjb250cm9sIGFuZCBpbnN0YW50IGZlZWRiYWNrLiBGb3Igc2F2ZWQgYmlsbHMsIHdlIGltcGxlbWVudGVkIGxhenkgbG9hZGluZyBhbmQgcGFnaW5hdGlvbiB0byBoYW5kbGUgc2NhbGXigJRsb2FkaW5nIDEwIGJpbGxzIGF0IGEgdGltZSBpbnN0ZWFkIG9mIGFsbCBhdCBvbmNlLlwiLFxuICAgICAgXCJUaGUgdHJhZGUtb2ZmOiBVc2VycyBoYWQgdG8gdGFwIGEgYnV0dG9uIGluc3RlYWQgb2YgYXV0b21hdGljIHVwZGF0ZXMsIGJ1dCB0aGV5IGdvdCBpbnN0YW50IGZlZWRiYWNrIGFuZCBuZXZlciBzYXcgYmxhbmsgc2NyZWVucy4gVGhpcyB1c2VyLWNvbnRyb2xsZWQgYXBwcm9hY2ggYWN0dWFsbHkgaW1wcm92ZWQgc2F0aXNmYWN0aW9uIGJ5IDM0JSBiZWNhdXNlIHVzZXJzIGZlbHQgaW4gY29udHJvbCwgbm90IHdhaXRpbmcgZm9yIHNsb3cgc3lzdGVtcy4gUG9zdC1sYXVuY2ggZGF0YSBzaG93ZWQgNzglIG9mIHVzZXJzIHByZWZlcnJlZCBtYW51YWwgY29udHJvbCBvdmVyIHRoZSBhdXRvbWF0ZWQgYXBwcm9hY2ggd2UgaW5pdGlhbGx5IHRyaWVkLlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJBUEkgbGF0ZW5jeTogMi04IHNlY29uZCBiaWxsIGxvb2t1cHMgcmVxdWlyZWQgbWFudWFsIHVzZXIgdHJpZ2dlcnMgaW5zdGVhZCBvZiBhdXRvbWF0aW9uXCIsXG4gICAgICBcIkRhdGFiYXNlIHNjYWxlOiBJbXBsZW1lbnRlZCBsYXp5IGxvYWRpbmcgYW5kIHBhZ2luYXRpb24gZm9yIHNhdmVkIGJpbGxzIHRvIGhhbmRsZSAxTSsgdXNlcnNcIixcbiAgICAgIFwiTmV0d29yayByZWxpYWJpbGl0eTogRGVzaWduZWQgb2ZmbGluZS1maXJzdCBwYXR0ZXJucyBmb3IgYmlsbCBlbnRyeSwgc3luY2luZyB3aGVuIGNvbm5lY3Rpb24gcmVzdG9yZWRcIixcbiAgICAgIFwiVHJhZGUtb2ZmIHJhdGlvbmFsZTogVXNlciBjb250cm9sICsgaW5zdGFudCBmZWVkYmFjayA+IGF1dG9tYXRpb24gKyBzbG93IGxvYWRpbmdcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ29uc3RyYWludC1iYXNlZCBkZXNpZ246IFdvcmtlZCB3aXRoaW4gdGVjaG5pY2FsIGxpbWl0YXRpb25zIHRvIGNyZWF0ZSBiZXR0ZXIgVVhcIixcbiAgICAgIFwiQ29sbGFib3JhdGl2ZSBwcm9ibGVtLXNvbHZpbmc6IFBhcnRuZXJlZCB3aXRoIGVuZ2luZWVyaW5nIHRvIGZpbmQgb3B0aW1hbCBzb2x1dGlvbnNcIixcbiAgICAgIFwiVXNlciBjb250cm9sIG92ZXIgYXV0b21hdGlvbjogTWFudWFsIHRyaWdnZXJzIGltcHJvdmVkIHNhdGlzZmFjdGlvbiBkZXNwaXRlIHNlZW1pbmcgbGVzcyAnc21hcnQnXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImFjY2Vzc2liaWxpdHlcIixcbiAgICB0aXRsZTogXCJBY2Nlc3NpYmlsaXR5ICYgSW5jbHVzaXZlIERlc2lnblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgZGVzaWduZWQgZm9yIGFjY2Vzc2liaWxpdHkgZnJvbSB0aGUgc3RhcnQsIGVzcGVjaWFsbHkgY29uc2lkZXJpbmcgb3VyIDU1KyBCdWlsZGluZyBNYW5hZ2VyIHBlcnNvbmEgYW5kIHRoZSBjcml0aWNhbCBuYXR1cmUgb2YgZmluYW5jaWFsIHRyYW5zYWN0aW9ucy5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIkdpdmVuIG91ciBCdWlsZGluZyBNYW5hZ2VyIHBlcnNvbmEgKDU1KykgYW5kIHRoZSBjcml0aWNhbCBuYXR1cmUgb2YgYmlsbCBwYXltZW50LCBhY2Nlc3NpYmlsaXR5IHdhc24ndCBvcHRpb25hbOKAlGl0IHdhcyBlc3NlbnRpYWwuIEkgaW1wbGVtZW50ZWQgc2V2ZXJhbCBhY2Nlc3NpYmlsaXR5IGNvbnNpZGVyYXRpb25zIHRocm91Z2hvdXQgdGhlIGRlc2lnbi5cIixcbiAgICAgIFwiRm9yIHZpc3VhbCBhY2Nlc3NpYmlsaXR5OiBJIHVzZWQgaGlnaCBjb250cmFzdCByYXRpb3MgKFdDQUcgQUEgbWluaW11bSkgZm9yIGFsbCBmaW5hbmNpYWwgZGF0YSwgbGFyZ2UgdG91Y2ggdGFyZ2V0cyAobWluaW11bSA0NHg0NHB4KSBmb3IgYWxsIGludGVyYWN0aXZlIGVsZW1lbnRzLCBhbmQgY2xlYXIgdHlwb2dyYXBoeSBoaWVyYXJjaHkgd2l0aCByZWFkYWJsZSBmb250IHNpemVzIChtaW5pbXVtIDE2cHggYm9keSB0ZXh0KS4gRm9yIG91ciBQZXJzaWFuIHJpZ2h0LXRvLWxlZnQgKFJUTCkgbGF5b3V0LCBJIGVuc3VyZWQgYWxsIFVJIGVsZW1lbnRzIG1pcnJvcmVkIGNvcnJlY3RseS5cIixcbiAgICAgIFwiRm9yIGNvZ25pdGl2ZSBhY2Nlc3NpYmlsaXR5OiBJIGRlc2lnbmVkIGNsZWFyIGVycm9yIHN0YXRlcyB3aXRoIGFjdGlvbmFibGUgbWVzc2FnZXMsIGF2b2lkZWQgamFyZ29uIGluIGFsbCBjb3B5LCBhbmQgcHJvdmlkZWQgbXVsdGlwbGUgd2F5cyB0byBjb21wbGV0ZSB0YXNrcyAoUVIgc2NhbiBPUiBtYW51YWwgZW50cnkpLiBGb3IgdGhlIHJlY2VpcHQsIEkgZW5zdXJlZCBpdCB3YXMgcmVhZGFibGUgYm90aCBvbi1zY3JlZW4gYW5kIHdoZW4gcHJpbnRlZC5cIixcbiAgICAgIFwiSSB0ZXN0ZWQgdGhlIGRlc2lnbiB3aXRoIHVzZXJzIHdobyBoYWQgdmFyeWluZyBsZXZlbHMgb2YgZGlnaXRhbCBsaXRlcmFjeSBhbmQgaW5jb3Jwb3JhdGVkIGZlZWRiYWNrLiBUaGUgUVIgc2Nhbm5pbmcgZmVhdHVyZSB3YXMgcGFydGljdWxhcmx5IGltcG9ydGFudCBmb3IgdXNlcnMgd2hvIHN0cnVnZ2xlZCB3aXRoIG1hbnVhbCAxMy1kaWdpdCBjb2RlIGVudHJ5LlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJWaXN1YWw6IEhpZ2ggY29udHJhc3QgcmF0aW9zIChXQ0FHIEFBKSwgbGFyZ2UgdG91Y2ggdGFyZ2V0cyAoNDR4NDRweCBtaW5pbXVtKSwgcmVhZGFibGUgZm9udCBzaXplcyAoMTZweCsgYm9keSlcIixcbiAgICAgIFwiQ29nbml0aXZlOiBDbGVhciBlcnJvciBtZXNzYWdlcywgamFyZ29uLWZyZWUgY29weSwgbXVsdGlwbGUgdGFzayBjb21wbGV0aW9uIHBhdGhzXCIsXG4gICAgICBcIlJUTCBzdXBwb3J0OiBQcm9wZXIgUGVyc2lhbiByaWdodC10by1sZWZ0IGxheW91dCBtaXJyb3JpbmcgZm9yIGFsbCBVSSBlbGVtZW50c1wiLFxuICAgICAgXCJNdWx0aS1tb2RhbDogUVIgc2Nhbm5pbmcgZm9yIHVzZXJzIHdobyBzdHJ1Z2dsZSB3aXRoIG1hbnVhbCBlbnRyeVwiLFxuICAgICAgXCJQcmludCBhY2Nlc3NpYmlsaXR5OiBSZWNlaXB0cyBkZXNpZ25lZCB0byBiZSByZWFkYWJsZSBib3RoIGRpZ2l0YWxseSBhbmQgd2hlbiBwcmludGVkXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkRlc2lnbmVkIGZvciA1NSsgcGVyc29uYTogTGFyZ2UgdGFyZ2V0cywgY2xlYXIgdHlwb2dyYXBoeSwgc2ltcGxlIGludGVyYWN0aW9uc1wiLFxuICAgICAgXCJGaW5hbmNpYWwgcHJvZHVjdCBzdGFuZGFyZHM6IEV4dHJhIGF0dGVudGlvbiB0byBjbGFyaXR5IGFuZCBlcnJvciBwcmV2ZW50aW9uXCIsXG4gICAgICBcIlJUTCBsb2NhbGl6YXRpb246IFByb3BlciBQZXJzaWFuIGxhbmd1YWdlIHN1cHBvcnQgdGhyb3VnaG91dFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2x1dGlvbnNcIixcbiAgICB0aXRsZTogXCJEZXNpZ25pbmcgdGhlIFNvbHV0aW9uXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBkZXNpZ25lZCBzaXggaW50ZXJjb25uZWN0ZWQgZmVhdHVyZXMgdGhhdCBhZGRyZXNzZWQgZWFjaCBjb3JlIHVzZXIgbmVlZCB3aGlsZSBidWlsZGluZyB0cnVzdCBhbmQgcmVkdWNpbmcgZnJpY3Rpb24uXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJXb3JraW5nIGNsb3NlbHkgd2l0aCBwcm9kdWN0IG1hbmFnZXJzIGFuZCBlbmdpbmVlcnMsIEkgZGVzaWduZWQgYSBjb21wcmVoZW5zaXZlIHNvbHV0aW9uIHRoYXQgYWRkcmVzc2VkIGFsbCB0aHJlZSBrZXkgaW5zaWdodHMuIEVhY2ggZmVhdHVyZSB3YXMgdGVzdGVkIHRocm91Z2ggcHJvdG90eXBlcyBhbmQgdmFsaWRhdGVkIHdpdGggdXNlcnMgYmVmb3JlIGltcGxlbWVudGF0aW9uLiBJIHByaW9yaXRpemVkIGZlYXR1cmVzIGJhc2VkIG9uIHJlc2VhcmNoIGluc2lnaHRzLCB0ZWNobmljYWwgZmVhc2liaWxpdHksIGFuZCBidXNpbmVzcyBpbXBhY3QuXCIsXG4gICAgXSxcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlNhdmVkIEJpbGxzICYgT25lLVRhcCBVcGRhdGVzOiBJIGRlc2lnbmVkIGEgJ3NhdmUgYmlsbCcgZmVhdHVyZSBhbGxvd2luZyB1c2VycyB0byByZWdpc3RlciBhIGJpbGwgb25jZSBhbmQgcmV1c2UgaXQgZm9yZXZlci4gQSAnQ2hlY2sgZm9yIG5ldyBhbW91bnQnIGJ1dHRvbiBmZXRjaGVzIHRoZSBsYXRlc3QgYmlsbCBpbnN0YW50bHnigJRlbGltaW5hdGluZyB0aGUgbmVlZCB0byByZS1lbnRlciAxMy1kaWdpdCBjb2RlcyBtb250aGx5LlwiLFxuICAgICAgXCJEaWdpdGFsIEJpbGwgTWFuYWdlbWVudCBIdWI6IEkgY3JlYXRlZCBhIGNlbnRyYWxpemVkIGRhc2hib2FyZCBzaG93aW5nIGFsbCBiaWxscyBpbiBvbmUgb3JnYW5pemVkIGxpc3Qgd2l0aCBzdGF0dXMgbGFiZWxzIChQYWlkLCBQZW5kaW5nLCBPdmVyZHVlKS4gVGhlIGRlc2lnbiB3YXMgYmFja3dhcmQtY29tcGF0aWJsZSBzbyBleGlzdGluZyB1c2VycyBzYXcgdGhlaXIgcGF5bWVudCBoaXN0b3J5IGltbWVkaWF0ZWx5LlwiLFxuICAgICAgXCJTbWFydCBSZW1pbmRlcnM6IEkgZGVzaWduZWQgYSByZW1pbmRlciBzeXN0ZW0gYWxsb3dpbmcgdXNlcnMgdG8gc2V0IGN1c3RvbSBub3RpZmljYXRpb25zIGZvciBlYWNoIGJpbGwgd2l0aCBwdXNoIG5vdGlmaWNhdGlvbnMgYmVmb3JlIGR1ZSBkYXRlc+KAlGFkZHJlc3NpbmcgdGhlIGZvcmdldGZ1bG5lc3MgcHJvYmxlbS5cIixcbiAgICAgIFwiUVIvQmFyY29kZSBTY2FubmluZzogSSBpbnRlZ3JhdGVkIGNhbWVyYS1iYXNlZCBiaWxsIGVudHJ5IGZvciBpbnN0YW50IGRhdGEgY2FwdHVyZeKAlGNyaXRpY2FsIGZvciBvbGRlciB1c2VycyBhbmQgYnVzeSBwZXJzb25hcyB3aG8gc3RydWdnbGUgd2l0aCBtYW51YWwgZW50cnkuXCIsXG4gICAgICBcIkltbWVkaWF0ZSBUcmFuc3BhcmVuY3k6IEkgcmVkZXNpZ25lZCB0aGUgZW50cnkgZmxvdyB0byBzaG93IHN1cHBvcnRlZCBiaWxsIHByb3ZpZGVycyB1cGZyb250IHdpdGggbG9nb3MgYW5kIGNsZWFyIGd1aWRhbmNlIG9uIHdoYXQgd2UgY2FuIGFuZCBjYW4ndCBwcm9jZXNz4oCUZWxpbWluYXRpbmcgdHJpYWwtYW5kLWVycm9yLlwiLFxuICAgICAgXCJPZmZpY2lhbCwgU2hhcmVhYmxlIFJlY2VpcHRzOiBJIGRlc2lnbmVkIFBERi1xdWFsaXR5IHJlY2VpcHRzIHdpdGggYWxsIGxlZ2FsIGRldGFpbHMgYW5kIG9uZS10YXAgc2hhcmluZyB2aWEgYW55IGNoYW5uZWzigJRidWlsdCBzcGVjaWZpY2FsbHkgdG8gYWRkcmVzcyB0aGUgJ3Byb29mJyByZXF1aXJlbWVudCB0aGF0IGVtZXJnZWQgZnJvbSByZXNlYXJjaC5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiRWFjaCBzb2x1dGlvbiBkaXJlY3RseSBhZGRyZXNzZWQgaW5zaWdodHMgZnJvbSB1c2VyIHJlc2VhcmNoXCIsXG4gICAgICBcIkJhY2t3YXJkLWNvbXBhdGlibGUgZGVzaWduIGVuc3VyZWQgemVybyBsZWFybmluZyBjdXJ2ZSBmb3IgZXhpc3RpbmcgdXNlcnNcIixcbiAgICAgIFwiQ3Jvc3MtZnVuY3Rpb25hbCBjb2xsYWJvcmF0aW9uIGVuc3VyZWQgdGVjaG5pY2FsIGZlYXNpYmlsaXR5IGFuZCBidXNpbmVzcyBhbGlnbm1lbnRcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZmFpbHVyZVwiLFxuICAgIHRpdGxlOiBcIkxlYXJuaW5nIGZyb20gRmFpbHVyZTogVmVyc2lvbiAxXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVmVyc2lvbiAxIGxhdW5jaGVkIGFuZCBmYWlsZWQgd2l0aGluIDQ4IGhvdXJzLiBCaWxscyB0b29rIDgtMTAgc2Vjb25kcyB0byBsb2FkIHdpdGggbm8gbG9hZGluZyBzdGF0ZXMsIHNrZWxldG9uIFVJLCBvciBwcm9ncmVzcyBpbmRpY2F0b3JzLiBVc2VycyBzYXcgYmxhbmsgc2NyZWVucywgYW5kIGJpbGwgcGF5bWVudHMgZHJvcHBlZCA4MCUuIEkgbGVkIHRoZSBpbW1lZGlhdGUgcm9sbGJhY2sgYW5kIHJlZGVzaWduLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBmYWlsdXJlIGJlY2FtZSB0aGUgbW9zdCB2YWx1YWJsZSBsZWFybmluZyBleHBlcmllbmNlLiBBcyB0aGUgZGVzaWduZXIsIEkgdG9vayByZXNwb25zaWJpbGl0eSBmb3Igbm90IHB1c2hpbmcgaGFyZGVyIG9uIHBlcmZvcm1hbmNlIHJlcXVpcmVtZW50cy4gR3JlYXQgVVggZGVzaWduIGNhbid0IHNhdmUgcG9vciB0ZWNobmljYWwgcGVyZm9ybWFuY2UuIFdlIGhhZCBza2lwcGVkIHJlYWxpc3RpYyBsYXRlbmN5IHRlc3RpbmcsIGRpZG4ndCBzaW11bGF0ZSB3b3JzdC1jYXNlIG5ldHdvcmsgY29uZGl0aW9ucywgYW5kIEkgaGFkIHByaW9yaXRpemVkIGF1dG9tYXRpb24gb3ZlciB1c2VyIGNvbnRyb2wgaW4gbXkgZGVzaWducy5cIixcbiAgICAgIFwiSSBpbW1lZGlhdGVseSBjb2xsYWJvcmF0ZWQgd2l0aCBlbmdpbmVlcmluZyB0byBkaWFnbm9zZSB0aGUgaXNzdWVzLiBUb2dldGhlciwgd2UgcmVkZXNpZ25lZCB0aGUgYXBwcm9hY2g6IEkgY2hhbmdlZCB0aGUgZGVzaWduIHRvIHVzZSBtYW51YWwgJ0NoZWNrIEFtb3VudCcgYnV0dG9ucyBmb3IgaW5zdGFudCBmZWVkYmFjaywgYWRkZWQgbGF6eSBsb2FkaW5nIGFuZCBza2VsZXRvbiBzdGF0ZXMgZXZlcnl3aGVyZSwgYW5kIHdvcmtlZCB3aXRoIHRoZSB0ZWFtIHRvIGltcGxlbWVudCBjb21wcmVoZW5zaXZlIHByZS1sYXVuY2ggdGVjaG5pY2FsIHRlc3RpbmcuIEkgYWxzbyBhZHZvY2F0ZWQgZm9yIG5ldyBjb21wYW55LXdpZGUgc3RhbmRhcmRzIGZvciBwZXJmb3JtYW5jZSB0ZXN0aW5nIHRoYXQgd291bGQgcHJldmVudCB0aGlzIGluIGZ1dHVyZSBwcm9qZWN0cy5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVG9vayBvd25lcnNoaXA6IExlZCByb2xsYmFjayBhbmQgcmVkZXNpZ24gcHJvY2VzcywgZGlkbid0IGJsYW1lIG90aGVyc1wiLFxuICAgICAgXCJDb2xsYWJvcmF0ZWQgd2l0aCBlbmdpbmVlcmluZzogV29ya2VkIHRvZ2V0aGVyIHRvIHNvbHZlIHRlY2huaWNhbCBwZXJmb3JtYW5jZSBpc3N1ZXNcIixcbiAgICAgIFwiUHJvY2VzcyBpbXByb3ZlbWVudDogQ3JlYXRlZCBuZXcgc3RhbmRhcmRzIHRoYXQgaW1wcm92ZWQgYWxsIGZ1dHVyZSBwcm9qZWN0c1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ2ZXJzaW9uMlwiLFxuICAgIHRpdGxlOiBcIlZlcnNpb24gMjogU3VjY2Vzc2Z1bCBMYXVuY2hcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBcm1lZCB3aXRoIGxlc3NvbnMgZnJvbSBWZXJzaW9uIDEsIEkgcmVkZXNpZ25lZCB0aGUgZXhwZXJpZW5jZSB3aXRoIHBlcmZvcm1hbmNlIGFuZCB1c2VyIGNvbnRyb2wgYXMgcHJpb3JpdGllcy4gVmVyc2lvbiAyIGxhdW5jaGVkIHN1Y2Nlc3NmdWxseSBhbmQgYWNoaWV2ZWQgb3VyIGFkb3B0aW9uIGdvYWxzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiTWFudWFsIGNvbnRyb2w6IEkgcmVkZXNpZ25lZCBmbG93cyBzbyB1c2VycyB0cmlnZ2VyIHVwZGF0ZXMgd2hlbiByZWFkeSwgZ2l2aW5nIHRoZW0gY29udHJvbCBhbmQgaW5zdGFudCBmZWVkYmFjay5cIixcbiAgICAgIFwiUGVyZm9ybWFuY2UtZmlyc3Q6IEkgZGVzaWduZWQgY29tcHJlaGVuc2l2ZSBsb2FkaW5nIHN0YXRlcyBhbmQgc2tlbGV0b24gc2NyZWVucyBmb3IgZXZlcnkgYWN0aW9uLCBlbnN1cmluZyB1c2VycyBuZXZlciBzYXcgYmxhbmsgc2NyZWVucy5cIixcbiAgICAgIFwiQmFja3dhcmQgY29tcGF0aWJpbGl0eTogSSBlbnN1cmVkIHRoZSBkZXNpZ24gaGFkIHplcm8gbGVhcm5pbmcgY3VydmUgZm9yIHJldHVybmluZyB1c2Vyc+KAlHRoZXkgc2F3IHRoZWlyIGhpc3RvcnkgaW1tZWRpYXRlbHkuXCIsXG4gICAgICBcIk9mZmljaWFsIHJlY2VpcHRzOiBJIGRlc2lnbmVkIFBERi1xdWFsaXR5IHJlY2VpcHRzIHRoYXQgc29sdmVkIHRoZSBjb3JlIGVtb3Rpb25hbCBuZWVkIGlkZW50aWZpZWQgaW4gcmVzZWFyY2guXCIsXG4gICAgICBcIlNtYXJ0IHJlbWluZGVyczogSSBkZXNpZ25lZCBhIG5vdGlmaWNhdGlvbiBzeXN0ZW0gdGhhdCBhZGRyZXNzZWQgZm9yZ2V0ZnVsbmVzcyB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS5cIixcbiAgICAgIFwiQ2xlYXIgY29tbXVuaWNhdGlvbjogSSByZWRlc2lnbmVkIHRoZSBlbnRyeSBmbG93IHRvIGJ1aWxkIGNvbmZpZGVuY2UgZnJvbSBzY3JlZW4gb25lIHdpdGggdXBmcm9udCB0cmFuc3BhcmVuY3kuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkFwcGxpZWQgbGVhcm5pbmdzOiBFdmVyeSBWZXJzaW9uIDEgZmFpbHVyZSBiZWNhbWUgYSBWZXJzaW9uIDIgcmVxdWlyZW1lbnRcIixcbiAgICAgIFwiVXNlciBjb250cm9sOiBTaGlmdGVkIGZyb20gYXV0b21hdGlvbiB0byB1c2VyLXRyaWdnZXJlZCBhY3Rpb25zXCIsXG4gICAgICBcIlBlcmZvcm1hbmNlIHN0YW5kYXJkczogU2V0IG5ldyBiZW5jaG1hcmtzIGZvciB0aGUgZW50aXJlIHByb2R1Y3RcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZmVhdHVyZS1pbXBhY3RcIixcbiAgICB0aXRsZTogXCJGZWF0dXJlIEltcGFjdCBCcmVha2Rvd25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJQb3N0LWxhdW5jaCBhbmFseXRpY3MgcmV2ZWFsZWQgd2hpY2ggZmVhdHVyZXMgZHJvdmUgdGhlIG1vc3QgYWRvcHRpb24gYW5kIHZhbHVlLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQWZ0ZXIgOCB3ZWVrcywgSSBhbmFseXplZCBmZWF0dXJlIGFkb3B0aW9uIGRhdGEgdG8gdW5kZXJzdGFuZCB3aGljaCBzb2x1dGlvbnMgaGFkIHRoZSBoaWdoZXN0IGltcGFjdC4gVGhpcyBhbmFseXNpcyBoZWxwZWQgdmFsaWRhdGUgb3VyIGRlc2lnbiBkZWNpc2lvbnMgYW5kIGluZm9ybSBmdXR1cmUgZmVhdHVyZSBwcmlvcml0aXphdGlvbi5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU2F2ZWQgQmlsbHMgYWRvcHRpb25cIixcbiAgICAgICAgdmFsdWU6IFwiNjglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk9mIGJpbGwgcGF5bWVudCB1c2VycyBzYXZlZCBhdCBsZWFzdCBvbmUgYmlsbCAoaGlnaGVzdCBpbXBhY3QgZmVhdHVyZSlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlFSIFNjYW5uaW5nIHVzYWdlXCIsXG4gICAgICAgIHZhbHVlOiBcIjQyJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQcmVmZXJyZWQgUVIgc2NhbiBvdmVyIG1hbnVhbCBlbnRyeSAoZXhjZWVkZWQgMzAlIGV4cGVjdGF0aW9uKVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmVtaW5kZXIgYWN0aXZhdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCI1NSVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgZW5hYmxlZCByZW1pbmRlcnMgZm9yIHNhdmVkIGJpbGxzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZWNlaXB0IHNoYXJpbmdcIixcbiAgICAgICAgdmFsdWU6IFwiNzMlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHNoYXJlZCByZWNlaXB0cyBhdCBsZWFzdCBvbmNlICh2YWxpZGF0ZWQgZW1vdGlvbmFsIG5lZWQpXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJTYXZlZCBCaWxscyB3YXMgdGhlIGhpZ2hlc3QtaW1wYWN0IGZlYXR1cmU6IDY4JSBhZG9wdGlvbiBkcm92ZSB0aGUgbWFqb3JpdHkgb2YgcmVjdXJyaW5nIHVzYWdlXCIsXG4gICAgICBcIlFSIFNjYW5uaW5nIGV4Y2VlZGVkIGV4cGVjdGF0aW9uczogNDIlIHVzYWdlIHNob3dlZCBzdHJvbmcgZGVtYW5kLCBlc3BlY2lhbGx5IGFtb25nIG9sZGVyIHVzZXJzXCIsXG4gICAgICBcIlJlY2VpcHQgc2hhcmluZyB2YWxpZGF0ZWQgZW1vdGlvbmFsIG5lZWQ6IDczJSBzaGFyaW5nIHJhdGUgcHJvdmVkIHRoZSByZWNlaXB0IHdhcyBjb3JlIHZhbHVlLCBub3QgbmljZS10by1oYXZlXCIsXG4gICAgICBcIlRyYW5zcGFyZW5jeSB1cGZyb250IHJlZHVjZWQgZHJvcC1vZmY6IFNob3dpbmcgc3VwcG9ydGVkIHByb3ZpZGVycyBlYXJseSBwcmV2ZW50ZWQgdHJpYWwtYW5kLWVycm9yIGFiYW5kb25tZW50XCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkRhdGEgdmFsaWRhdGVkIHJlc2VhcmNoOiBGZWF0dXJlcyBiYXNlZCBvbiB1c2VyIGluc2lnaHRzIHNob3dlZCBoaWdoZXN0IGFkb3B0aW9uXCIsXG4gICAgICBcIlJlY2VpcHQgc2hhcmluZyBleGNlZWRlZCBleHBlY3RhdGlvbnM6IFByb3ZlZCBlbW90aW9uYWwgbmVlZCB3YXMgYXMgaW1wb3J0YW50IGFzIGZ1bmN0aW9uYWxcIixcbiAgICAgIFwiU2F2ZWQgYmlsbHMgZHJvdmUgcmV0ZW50aW9uOiBVc2VycyB3aG8gc2F2ZWQgYmlsbHMgcmV0dXJuZWQgbW9udGhseSB2cy4gb25lLXRpbWUgdXNlcnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiUmVzdWx0cyAmIEJ1c2luZXNzIEltcGFjdFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoZSByZWRlc2lnbiBhY2hpZXZlZCBvdXIgYWRvcHRpb24gZ29hbHMgYW5kIHRyYW5zZm9ybWVkIGJpbGwgcGF5bWVudCBpbnRvIGEgY29yZSB2YWx1ZSBwcm9wb3NpdGlvbiBkcml2aW5nIHJlY3VycmluZyBlbmdhZ2VtZW50LlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiV2l0aGluIDggd2Vla3Mgb2YgVmVyc2lvbiAyIGxhdW5jaCwgYmlsbCBwYXltZW50IGFkb3B0aW9uIGluY3JlYXNlZCBmcm9tIDQlIHRvIDQ3JeKAlGEgMTB4IGdyb3d0aCBpbiBiaWxsIHBheW1lbnQgc2hhcmUgb2YgdG90YWwgcGF5bWVudHMuIFRoaXMgZXhjZWVkZWQgb3VyIGluaXRpYWwgZ29hbCBvZiAyNSUgYWRvcHRpb24gYnkgODglLiBCaWxsIHBheW1lbnQgd2VudCBmcm9tIGEgbmVnbGVjdGVkIGZlYXR1cmUgdG8gb25lIG9mIFNldGFyZVllaydzIHByaW1hcnkgdmFsdWUgcHJvcG9zaXRpb25zLCBkcml2aW5nIG1vbnRobHkgcmVjdXJyaW5nIGVuZ2FnZW1lbnQuXCIsXG4gICAgICBcIlRoZSBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudHMgcmVkdWNlZCBkcm9wLW9mZiByYXRlcyBieSA4MCUgY29tcGFyZWQgdG8gVmVyc2lvbiAxIChmcm9tIDQwJSB0byA4JSBhYmFuZG9ubWVudCkuIFVzZXIgc2F0aXNmYWN0aW9uIHNjb3JlcyBpbmNyZWFzZWQgZnJvbSA0LjIgdG8gNC42IHN0YXJzIChtZWFzdXJlZCB0aHJvdWdoIGFwcCBzdG9yZSByZXZpZXdzIGFuZCBpbi1hcHAgc3VydmV5cyksIGFuZCBiaWxsIHBheW1lbnQgYmVjYW1lIGEgdG9wLTMgZmVhdHVyZSBieSB1c2FnZSBmcmVxdWVuY3kuIFRoaXMgdHJhbnNmb3JtYXRpb24gaGVscGVkIHNvbGlkaWZ5IFNldGFyZVllaydzIHBvc2l0aW9uIGFzIGEgY29tcHJlaGVuc2l2ZSBmaW5hbmNpYWwgc2VydmljZXMgcGxhdGZvcm0gc2VydmluZyBvdmVyIDEgbWlsbGlvbiB1c2Vycy5cIixcbiAgICAgIFwiV2Vlay1ieS13ZWVrIGFkb3B0aW9uIHNob3dlZCBzdGVhZHkgZ3Jvd3RoOiBXZWVrIDEgKDEyJSksIFdlZWsgMiAoMTglKSwgV2VlayA0ICgyOCUpLCBXZWVrIDYgKDM4JSksIFdlZWsgOCAoNDclKS4gVGhlIGN1cnZlIGZsYXR0ZW5lZCBhZnRlciB3ZWVrIDgsIGluZGljYXRpbmcgd2UnZCByZWFjaGVkIG1hcmtldCBzYXR1cmF0aW9uIGZvciB0aGUgaW5pdGlhbCBsYXVuY2ggY29ob3J0LlwiLFxuICAgICAgXCJRdWFsaXRhdGl2ZSBmZWVkYmFjayBmcm9tIDEyIHBvc3QtbGF1bmNoIGludGVydmlld3MgY29uZmlybWVkIHRoZSBzdWNjZXNzLiBVc2VycyBwcmFpc2VkIHRoZSBzYXZlZCBiaWxscyBmZWF0dXJlLCBvZmZpY2lhbCByZWNlaXB0cywgYW5kIHRoZSBvdmVyYWxsIGVhc2Ugb2YgdXNlLiBUaGUgQnVpbGRpbmcgTWFuYWdlciBwZXJzb25hIHNwZWNpZmljYWxseSBhcHByZWNpYXRlZCB0aGUgc2hhcmVhYmxlIHJlY2VpcHRzLCB2YWxpZGF0aW5nIG91ciByZXNlYXJjaCBpbnNpZ2h0cy4gT25lIHVzZXIgc2FpZDogJ1RoaXMgc2F2ZXMgbWUgMyBob3VycyBldmVyeSBtb250aOKAlEkgdXNlZCB0byBzcGVuZCB0aGF0IHRpbWUgZW50ZXJpbmcgY29kZXMgYW5kIG1ha2luZyBwaG90b2NvcGllcy4nXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkb3B0aW9uIHJhdGVcIixcbiAgICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGFjaGlldmVkIHdpdGhpbiA4IHdlZWtzIChleGNlZWRlZCAyNSUgZ29hbClcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRyb3Atb2ZmIHJlZHVjdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCI4MCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQgdnMgVmVyc2lvbiAxXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJGZWF0dXJlIHJhbmtpbmdcIixcbiAgICAgICAgdmFsdWU6IFwiVG9wIDNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQmlsbCBwYXltZW50IGJ5IHVzYWdlIGZyZXF1ZW5jeVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVXNlciBzYXRpc2ZhY3Rpb25cIixcbiAgICAgICAgdmFsdWU6IFwiNC4yIOKGkiA0LjZcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXBwIHN0b3JlIHJhdGluZyBpbXByb3ZlbWVudCAoKzkuNSUgaW5jcmVhc2UpXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJHb2FsIGFjaGlldmVtZW50XCIsXG4gICAgICAgIHZhbHVlOiBcIjE4OCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXhjZWVkZWQgMjUlIGdvYWwgYnkgcmVhY2hpbmcgNDclIGFkb3B0aW9uXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJUaW1lIHNhdmVkXCIsXG4gICAgICAgIHZhbHVlOiBcIjMgaG91cnMvbW9udGhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXZlcmFnZSB0aW1lIHNhdmVkIHBlciBCdWlsZGluZyBNYW5hZ2VyIHVzZXJcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkJ1aWxkaW5nIE1hbmFnZXJcIixcbiAgICAgICAgcm9sZTogXCJQb3N0LWxhdW5jaCBpbnRlcnZpZXdcIixcbiAgICAgICAgdGV4dDogXCJGaW5hbGx5LCBJIGNhbiBzaGFyZSByZWNlaXB0cyB3aXRoIHJlc2lkZW50cyB3aXRob3V0IG1ha2luZyBwaG90b2NvcGllcy4gVGhpcyBzYXZlcyBtZSBob3VycyBldmVyeSBtb250aC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEhvdXNlaG9sZFwiLFxuICAgICAgICByb2xlOiBcIkFwcCBzdG9yZSByZXZpZXdcIixcbiAgICAgICAgdGV4dDogXCJJIGxvdmUgdGhhdCBJIGRvbid0IGhhdmUgdG8gZW50ZXIgdGhhdCBsb25nIGNvZGUgZXZlcnkgbW9udGguIFNhdmVkIGJpbGxzIGNoYW5nZWQgZXZlcnl0aGluZy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJVc2VyIGZlZWRiYWNrXCIsXG4gICAgICAgIHJvbGU6IFwiSW4tYXBwIHN1cnZleVwiLFxuICAgICAgICB0ZXh0OiBcIlRoZSBvZmZpY2lhbCByZWNlaXB0IGZlYXR1cmUgaXMgZXhhY3RseSB3aGF0IEkgbmVlZGVkLiBJIGNhbiBzaG93IG15IGxhbmRsb3JkIHByb29mIG9mIHBheW1lbnQgaW5zdGFudGx5LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibGVhcm5pbmdzXCIsXG4gICAgdGl0bGU6IFwiS2V5IExlYXJuaW5nc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgcHJvamVjdCB0YXVnaHQgbWUgdmFsdWFibGUgbGVzc29ucyBhYm91dCBwcm9kdWN0IGRlc2lnbiwgdGVjaG5pY2FsIGNvbGxhYm9yYXRpb24sIGFuZCB1c2VyIHJlc2VhcmNoIHRoYXQgSSBhcHBseSB0byBldmVyeSBwcm9qZWN0LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRGVzaWduIGRvZXNuJ3QgZXhpc3QgaW4gaXNvbGF0aW9uOiBFdmVuIHBlcmZlY3QgVVggZmFpbHMgd2l0aG91dCB0ZWNobmljYWwgcGVyZm9ybWFuY2UuIEkgbm93IGFsd2F5cyBjb2xsYWJvcmF0ZSBjbG9zZWx5IHdpdGggZW5naW5lZXJpbmcgb24gcGVyZm9ybWFuY2UgcmVxdWlyZW1lbnRzIGZyb20gZGF5IG9uZS5cIixcbiAgICAgIFwiRW1vdGlvbmFsIG5lZWRzID0gRnVuY3Rpb25hbCBuZWVkczogVGhlIHJlY2VpcHQgd2Fzbid0IGRlY29yYXRpb27igJRpdCB3YXMgdGhlIGVudGlyZSB2YWx1ZSBwcm9wb3NpdGlvbi4gVXNlciByZXNlYXJjaCByZXZlYWxlZCBlbW90aW9uYWwgZHJpdmVycyB0aGF0IHdlcmUgYXMgaW1wb3J0YW50IGFzIGZ1bmN0aW9uYWwgcmVxdWlyZW1lbnRzLlwiLFxuICAgICAgXCJSZWFsIGJlaGF2aW9yID4gQXNzdW1wdGlvbnM6IFVzZXJzIHNob3dlZCB1cyB3aGF0IHRoZXkgbmVlZGVkIHRocm91Z2ggcmVzZWFyY2guIEkgbGVhcm5lZCB0byB0cnVzdCB1c2VyIGJlaGF2aW9yIG92ZXIgaW50ZXJuYWwgYXNzdW1wdGlvbnMuXCIsXG4gICAgICBcIkJhY2t3YXJkIGNvbXBhdGliaWxpdHkgaXMgdHJ1c3Q6IEVzcGVjaWFsbHkgaW4gZmluYW5jaWFsIHByb2R1Y3RzLCBmYW1pbGlhcml0eSBlcXVhbHMgY29uZmlkZW5jZS4gSSBkZXNpZ24gZm9yIGV4aXN0aW5nIHVzZXJzIGZpcnN0LCB0aGVuIG9wdGltaXplIGZvciBuZXcgb25lcy5cIixcbiAgICAgIFwiRmFpbHVyZSBhY2NlbGVyYXRlcyBsZWFybmluZzogT3duaW5nIG1pc3Rha2VzIGFuZCBpdGVyYXRpbmcgZmFzdCBidWlsdCBhIHN0cm9uZ2VyIHByb2R1Y3QgYW5kIHByb2Nlc3MuIEkgbm93IGFkdm9jYXRlIGZvciByYXBpZCBpdGVyYXRpb24gYW5kIGxlYXJuaW5nIGN5Y2xlcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwib3JnYW5pemF0aW9uYWxcIixcbiAgICB0aXRsZTogXCJPcmdhbml6YXRpb25hbCBJbXBhY3RcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJCZXlvbmQgdGhlIHByb2R1Y3QsIEkgaW5mbHVlbmNlZCBwcm9jZXNzIGltcHJvdmVtZW50cyB0aGF0IGJlbmVmaXRlZCB0aGUgZW50aXJlIG9yZ2FuaXphdGlvbi5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIkkgYWR2b2NhdGVkIGZvciBhbmQgaGVscGVkIGVzdGFibGlzaCBuZXcgY29tcGFueS13aWRlIHN0YW5kYXJkcyBiYXNlZCBvbiBsZWFybmluZ3MgZnJvbSB0aGlzIHByb2plY3QuIFRoZXNlIGNoYW5nZXMgaW1wcm92ZWQgZXZlcnkgZmVhdHVyZSB0aGF0IGNhbWUgYWZ0ZXIsIGRlbW9uc3RyYXRpbmcgdGhlIHZhbHVlIG9mIGxlYXJuaW5nIGZyb20gZmFpbHVyZSBhbmQgc2hhcmluZyBrbm93bGVkZ2UgYWNyb3NzIHRlYW1zLlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJJIGVzdGFibGlzaGVkIG1hbmRhdG9yeSBwcmUtbGF1bmNoIHBlcmZvcm1hbmNlIHRlc3RpbmcgYXMgc3RhbmRhcmQgcHJhY3RpY2UgYWNyb3NzIGFsbCBwcm9kdWN0IHRlYW1zLlwiLFxuICAgICAgXCJJIHdvcmtlZCB3aXRoIGVuZ2luZWVyaW5nIHRvIHNldCB1cCBzdGFnaW5nIGVudmlyb25tZW50cyB3aXRoIHJlYWwtd29ybGQgZGF0YSBmb3IgcmVhbGlzdGljIHRlc3RpbmcuXCIsXG4gICAgICBcIkkgY3JlYXRlZCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgcmVxdWlyaW5nIGxvYWRpbmcvc2tlbGV0b24gc3RhdGVzIGZvciBhbGwgaGVhdnkgb3BlcmF0aW9ucy5cIixcbiAgICAgIFwiSSBmYWNpbGl0YXRlZCBzaGFyZWQgc3RhbmRhcmRzIGFuZCBjb2xsYWJvcmF0aW9uIHByb2Nlc3NlcyBiZXR3ZWVuIGRlc2lnbiBhbmQgZW5naW5lZXJpbmcgdGVhbXMuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlByb2Nlc3MgbGVhZGVyc2hpcDogSW5mbHVlbmNlZCBvcmdhbml6YXRpb25hbCBzdGFuZGFyZHMgYmV5b25kIG15IGltbWVkaWF0ZSBwcm9qZWN0XCIsXG4gICAgICBcIkNyb3NzLWZ1bmN0aW9uYWwgaW1wYWN0OiBJbXByb3ZlZCBjb2xsYWJvcmF0aW9uIGJldHdlZW4gZGVzaWduIGFuZCBlbmdpbmVlcmluZ1wiLFxuICAgICAgXCJLbm93bGVkZ2Ugc2hhcmluZzogRG9jdW1lbnRlZCBsZWFybmluZ3MgdGhhdCBiZW5lZml0ZWQgZnV0dXJlIHByb2plY3RzXCIsXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZHlFbnRyaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeUVudHJ5PiA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgdGl0bGU6IFwiRGl2YXIgU2VjdXJlIENhbGxcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJSZWR1Y2VkIGhhcmFzc21lbnQgYnkgNjAlIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzIHRocm91Z2ggYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgbGF5ZXIgaW5zaWRlIElyYW4ncyBsYXJnZXN0IG1hcmtldHBsYWNlLlwiLFxuICAgIGZvY3VzOiBcIlRydXN0ICYgU2FmZXR5XCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiU2V0YXJlIEF2YWwgRW5nYWdlbWVudFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIlJlLWFyY2hpdGVjdGVkIGxpZmVjeWNsZSBqb3VybmV5cyB0aGF0IGRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBhbmQgY29udmVydGVkIHJlZmVycmFsIGNvaG9ydHMgaW50byA2MEsrIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgICBmb2N1czogXCJSZXRlbnRpb24gJiBHcm93dGhcIixcbiAgICBwYXRoOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLXllay1iaWxsLXBheW1lbnRcIixcbiAgICB0aXRsZTogXCJTZXRhcmVZZWsgQmlsbCBQYXltZW50XCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiSW5jcmVhc2VkIGJpbGwgcGF5bWVudCBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JSBhdCBTZXRhcmUgQXZhbCdzIFNldGFyZVllayBhcHAgYnkgc29sdmluZyB0cnVzdCwgdHJhbnNwYXJlbmN5LCBhbmQgcmVjdXJyaW5nIHdvcmtmbG93IGNoYWxsZW5nZXMuXCIsXG4gICAgZm9jdXM6IFwiUHJvZHVjdCBEZXNpZ24gJiBHcm93dGhcIixcbiAgICBwYXRoOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLXllay1iaWxsLXBheW1lbnRcIixcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBkaXZhck92ZXJ2aWV3LCBzZXRhcmVPdmVydmlldywgc2V0YXJlWWVrT3ZlcnZpZXcgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgZGl2YXJTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIkNhc2VTdHVkeVwiLFxuICBuYW1lOiBkaXZhck92ZXJ2aWV3LnRpdGxlLFxuICBkZXNjcmlwdGlvbjpcbiAgICBkaXZhck92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJQcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGZvciAyLjFNIERpdmFyIHVzZXJzLlwiLFxuICBhdXRob3I6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgfSxcbiAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxgLFxuICBpbWFnZTogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICBrZXl3b3JkOiBbXCJUcnVzdCAmIFNhZmV0eVwiLCBcIkhhcmFzc21lbnQgUmVkdWN0aW9uXCIsIFwiTWFya2V0cGxhY2VcIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgZGl2YXJDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJEaXZhciBTZWN1cmUgQ2FsbCBDYXNlIFN0dWR5IOKAlCBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBkaXZhck92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJQcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGZvciAyLjFNIERpdmFyIHVzZXJzLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICAgICAgYWx0OiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2UuaGVpZ2h0ID8/IDYzMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogZGl2YXJTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cbmNvbnN0IHNldGFyZVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IHNldGFyZU92ZXJ2aWV3LnRpdGxlLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkxpZmVjeWNsZSByZWRlc2lnbiB0aGF0IGRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBhbmQgdHVybmVkIHJlZmVycmFsIGNvaG9ydHMgaW50byBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50YCxcbiAgaW1hZ2U6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlJldGVudGlvblwiLCBcIkxpZmVjeWNsZVwiLCBcIkdyb3d0aCBEZXNpZ25cIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlQ2FzZVN0dWR5TWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiU2V0YXJlIEF2YWwgRW5nYWdlbWVudCBDYXNlIFN0dWR5IOKAlCBEb3VibGluZyBSZXRhaW5lZCBSZXZlbnVlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3MgbGlmZWN5Y2xlIHRvIGRvdWJsZSByZXRhaW5lZCByZXZlbnVlIGFuZCBjb252ZXJ0IHJlZmVycmFsIGNvaG9ydHMgaW50byBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICBoZWlnaHQ6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBzZXRhcmVTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cbmNvbnN0IHNldGFyZVlla1N0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IHNldGFyZVlla092ZXJ2aWV3LnRpdGxlLFxuICBkZXNjcmlwdGlvbjpcbiAgICBzZXRhcmVZZWtPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUmVkZXNpZ25lZCBiaWxsIHBheW1lbnQgZXhwZXJpZW5jZSB0aGF0IGluY3JlYXNlZCBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JSBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50YCxcbiAgaW1hZ2U6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlByb2R1Y3QgRGVzaWduXCIsIFwiR3Jvd3RoXCIsIFwiRmludGVjaFwiLCBcIlVzZXIgRXhwZXJpZW5jZVwiLCBcIlNldGFyZSBBdmFsXCIsIFwiU2V0YXJlWWVrXCJdLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVlla0Nhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIlNldGFyZVllayBCaWxsIFBheW1lbnQgQ2FzZSBTdHVkeSDigJQgRnJvbSA0JSB0byA0NyUgQWRvcHRpb24gYXQgU2V0YXJlIEF2YWxcIixcbiAgZGVzY3JpcHRpb246XG4gICAgc2V0YXJlWWVrT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlJlZGVzaWduZWQgU2V0YXJlWWVrJ3MgYmlsbCBwYXltZW50IGV4cGVyaWVuY2UgYXQgU2V0YXJlIEF2YWwgdG8gaW5jcmVhc2UgYWRvcHRpb24gZnJvbSA0JSB0byA0NyUgYnkgc29sdmluZyB0cnVzdCwgdHJhbnNwYXJlbmN5LCBhbmQgcmVjdXJyaW5nIHdvcmtmbG93IGNoYWxsZW5nZXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICAgICAgYWx0OiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2UuYWx0LFxuICAgICAgd2lkdGg6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2UuaGVpZ2h0ID8/IDYzMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogc2V0YXJlWWVrU3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUlBLElBQU0sZ0NBQWdDLEdBQUcsY0FBNkM7QUFBQSxFQUNwRixNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFLHVCQThKRSxlQTlKRjtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBSSxRQUFRO0FBQUEsSUFDWixTQUFTLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRTtBQUFBLElBQzFCLElBQUksRUFBRSxVQUFVLEtBQUssSUFBSSxRQUFRLGlCQUFpQixFQUFFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLElBSnhFLFVBOEpFO0FBQUEsc0JBeEpBLHVCQWdDRSxlQWhDRjtBQUFBLFFBQU8sU0FBUyxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxRQUFqQyxVQWdDRTtBQUFBLFVBL0JDLFFBQVEsMkJBQ1AsdUJBRUUsb0JBRkY7QUFBQSxZQUFZLFNBQVE7QUFBQSxZQUFVLE9BQU07QUFBQSxZQUFwQyxVQUNHLFFBQVE7QUFBQSxhQURYLGlDQUVFO0FBQUEsMEJBRUosdUJBQTBDLG9CQUExQztBQUFBLFlBQVksU0FBUTtBQUFBLFlBQXBCLFVBQTBCLFFBQVE7QUFBQSxhQUFsQyxpQ0FBMEM7QUFBQSxVQUN6QyxRQUFRLDJCQUNQLHVCQVNFLG9CQVRGO0FBQUEsWUFDRSxTQUFRO0FBQUEsWUFDUixPQUFNO0FBQUEsWUFDTixJQUFJO0FBQUEsY0FDRixZQUFZLEVBQUUsSUFBSSxLQUFLLElBQUksS0FBSztBQUFBLGNBQ2hDLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsWUFDckI7QUFBQSxZQU5GLFVBUUcs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SUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEs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QjtBQUNsQjtBQUVBLElBQU0sdUJBQXVDO0FBQUEsRUFDM0MsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsTUFBTSxlQUFlO0FBQUEsRUFDckIsYUFDRTtBQUFBLEVBQ0YsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLEtBQUssR0FBRztBQUFBLEVBQ1IsT0FBTyxlQUFlLFVBQVU7QUFBQSxFQUNoQyxTQUFTLENBQUMsYUFBYSxhQUFhLGVBQWU7QUFDckQ7QUFFTyxJQUFNLDBCQUF3QztBQUFBLEVBQ25ELE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssZUFBZSxVQUFVO0FBQUEsTUFDOUIsS0FBSyxlQUFlLFVBQVU7QUFBQSxNQUM5QixPQUFPLGVBQWUsVUFBVSxTQUFTO0FBQUEsTUFDekMsUUFBUSxlQUFlLFVBQVUsVUFBVTtBQUFBLElBQzdDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCO0FBRUEsSUFBTSwwQkFBMEM7QUFBQSxFQUM5QyxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNLGtCQUFrQjtBQUFBLEVBQ3hCLGFBQ0Usa0JBQWtCLFlBQ2xCO0FBQUEsRUFDRixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBQ0EsS0FBSyxHQUFHO0FBQUEsRUFDUixPQUFPLGtCQUFrQixVQUFVO0FBQUEsRUFDbkMsU0FBUyxDQUFDLGtCQUFrQixVQUFVLFdBQVcsbUJBQW1CLGVBQWUsV0FBVztBQUNoRztBQUVPLElBQU0sNkJBQTJDO0FBQUEsRUFDdEQsT0FBTztBQUFBLEVBQ1AsYUFDRSxrQkFBa0IsWUFDbEI7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssa0JBQWtCLFVBQVU7QUFBQSxNQUNqQyxLQUFLLGtCQUFrQixVQUFVO0FBQUEsTUFDakMsT0FBTyxrQkFBa0IsVUFBVSxTQUFTO0FBQUEsTUFDNUMsUUFBUSxrQkFBa0IsVUFBVSxVQUFVO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7IiwKICAiZGVidWdJZCI6ICI5RTNEQzdFREJBRkNGQkNFNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
