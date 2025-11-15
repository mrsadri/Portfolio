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
  border: "none",
  height: "100%",
  display: "flex",
  flexDirection: "column"
});
var outlinedStatsCardSx = (theme) => ({
  borderRadius: theme.tokens.radius.card,
  px: { xs: 2.5, md: 3 },
  py: { xs: 2, md: 2.5 },
  border: `1px solid ${theme.tokens.colors.border}`,
  backgroundColor: theme.palette.mode === "light" ? "rgba(249,251,255,0.92)" : "rgba(14, 22, 38, 0.85)",
  height: "100%",
  display: "flex",
  flexDirection: "column"
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
                          sx: { display: "flex" },
                          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
                            elevation: 0,
                            sx: mergeSx(resolvedStatsCardSx, statsCardSx),
                            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                              spacing: 0.5,
                              sx: { flex: 1 },
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
  subtitle: "Despite millions of active users, only 4% of payments were bills. Session recordings showed users were trying but failing. I led the complete redesign from research through launch, increasing adoption to 47%.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Timeline", value: "2022 – 2023" },
    { label: "Company", value: "Setare Aval (SetareYek app)" },
    { label: "Constraint", value: "Sole designer—balanced deep research with rapid execution" }
  ],
  stats: [
    {
      value: "4% → 47%",
      label: "Adoption rate",
      description: "10x growth in bill payment share"
    },
    {
      value: "80%",
      label: "Drop reduction",
      description: "After Version 2 performance fixes"
    },
    {
      value: "1M+",
      label: "Users",
      description: "SetareYek platform scale"
    }
  ],
  heroImage: createImageResource(import.meta.url, setare_aval_user_flow_default, "SetareYek bill payment user flow", { width: 1200, height: 630 })
};
var setareYekSections = [
  {
    id: "challenge",
    title: "The Challenge",
    summary: "Despite millions of active users, only 4% of payments were bills. Session recordings showed users were trying but failing.",
    bullets: [
      "96% of payments were not bills",
      "High drop-off rates at specific steps",
      "Users spending unusually long on single screens",
      "Many abandoned attempts before payment confirmation"
    ],
    quotes: [
      {
        author: "Key question",
        role: "Research insight",
        text: "People pay bills every month—it's not optional. So why are they avoiding our app?"
      }
    ],
    highlights: [
      "This wasn't about adding features. Something fundamental was broken."
    ]
  },
  {
    id: "about-setareyek",
    title: "About SetareYek",
    summary: "Iran's largest fintech platform serving millions of users for everyday financial transactions.",
    highlights: [
      "Top 10 Finance App",
      "Market Leader",
      "10M+ Active Users"
    ],
    metrics: [
      {
        label: "Monthly Active Users",
        value: "10.6M+",
        description: "Nationwide fintech platform"
      },
      {
        label: "Total Installs",
        value: "2.36M+",
        description: "Growing user base"
      }
    ],
    body: [
      "The opportunity: Bill payment is a high-frequency, high-stress task that every household faces monthly. If we could solve it well, we'd become indispensable.",
      "The problem: We had the feature, but almost nobody used it."
    ]
  },
  {
    id: "role",
    title: "My Role",
    summary: "Senior Product Designer—led complete redesign from research through launch.",
    bullets: [
      "User research & synthesis",
      "UX/UI design",
      "Prototyping & testing",
      "Collaboration on implementation & rollout"
    ],
    highlights: [
      "Constraint: Sole designer—balanced deep research with rapid execution"
    ]
  },
  {
    id: "discovery",
    title: "Discovery: What Users Actually Needed",
    summary: "Multi-method research combining qualitative interviews, contextual inquiry, digital behavior analysis, and quantitative patterns.",
    bullets: [
      "Qualitative: In-depth interviews with building managers, heads of households, and everyday users",
      "Contextual inquiry: Observing bill payment in real contexts",
      "Ethnographic details: Studying a building manager's physical notebook",
      "Digital behavior: Session recordings, app store reviews, social media sentiment",
      "Quantitative: Drop-off analysis and behavior patterns"
    ]
  },
  {
    id: "personas",
    title: "Two Core Personas",
    summary: "Two distinct personas emerged with different needs driving every design decision.",
    bullets: [
      "The Building Manager (Age 55+): Manages utilities for entire apartment building. Needs official, shareable documentation. Zero tolerance for ambiguity.",
      "The Head of Household: Pays all family bills monthly. Needs to avoid re-entering 13-digit codes every month. Constantly forgets due dates."
    ],
    quotes: [
      {
        author: "Building Manager",
        role: "Age 55+",
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
    title: "The Breakthrough Insights",
    summary: "Three insights fundamentally changed our approach.",
    bullets: [
      "Insight #1: Users weren't confused about coverage—they were confused about us. They had no idea which bills we supported, forcing trial-and-error that destroyed trust.",
      "Insight #2: The receipt was everything. Users needed an official document they could show to family, share with residents, or present to landlords. This wasn't a 'nice-to-have'—it was the core emotional need.",
      "Insight #3: Bill payment isn't a one-time task—it's a recurring cycle. Our flow treated every payment like a new transaction, forcing users to re-enter everything monthly."
    ],
    highlights: [
      "The receipt wasn't decoration—it was the entire value proposition",
      "People pay the same bills repeatedly. They need a system that remembers"
    ]
  },
  {
    id: "philosophy",
    title: "Design Philosophy",
    summary: "Digitize what people already do in the physical world—then make it 10x better.",
    bullets: [
      "Keep notebooks of bill IDs → We built a digital bill list",
      "Set calendar reminders → We built smart notifications",
      "Make photocopies of receipts → We created shareable official receipts"
    ],
    highlights: [
      "The experience had to feel natural from day one, not like learning new software"
    ]
  },
  {
    id: "solutions",
    title: "The Solutions",
    summary: "Six interconnected solutions addressing core user needs.",
    bullets: [
      "Saved Bills & One-Tap Updates: Register a bill once, use it forever. 'Check for new amount' button fetches latest bill instantly—no more re-entering 13-digit codes",
      "Digital Bill Management Hub: All bills in one organized list with status labels (Paid, Pending, Overdue). Backward-compatible: returning users saw history immediately",
      "Smart Reminders: Set custom reminders for each bill with push notifications before due dates",
      "QR/Barcode Scanning: Instant bill entry via camera—critical for older users and busy personas",
      "Immediate Transparency: Supported bill providers shown upfront with logos. Clear guidance on what we can and can't process—no more trial-and-error",
      "Official, Shareable Receipts: PDF-quality receipts with all legal details. One-tap sharing via any channel—built specifically for the 'proof' requirement"
    ]
  },
  {
    id: "failure",
    title: "The Failure That Made Everything Better",
    summary: "Version 1 launched and failed within 48 hours. Bill payments dropped 80%. We rolled back immediately.",
    body: [
      "What happened: Bills took 8-10 seconds to load (we were fetching everything automatically). No loading states, no skeleton UI, no progress indicators. Users saw blank screens."
    ],
    bullets: [
      "What went wrong: Great UX design can't save poor technical performance. We skipped realistic latency testing, didn't simulate worst-case network conditions, prioritized automation over user control",
      "What changed: Switched to manual 'Check Amount' buttons (instant feedback), added lazy loading + skeleton states everywhere, implemented comprehensive pre-launch technical testing, created new company-wide standards for performance testing"
    ],
    highlights: [
      "This failure became the most valuable part of the project"
    ]
  },
  {
    id: "version2",
    title: "Version 2: The Launch That Worked",
    summary: "Armed with lessons from failure, we shipped a stable, fast, trustworthy experience.",
    bullets: [
      "Manual control: Users trigger updates when ready",
      "Instant feedback: Loading states for every action",
      "Backward compatibility: Zero learning curve for returning users",
      "Official receipts: Solved the core emotional need",
      "Smart reminders: Addressed forgetfulness",
      "Clear communication: Built confidence from screen one"
    ]
  },
  {
    id: "impact",
    title: "The Result",
    summary: "4% → 47% adoption rate. That's 10x growth in bill payment share.",
    body: [
      "Bill payment went from a neglected feature to one of the app's primary value propositions."
    ],
    bullets: [
      "Trust: Official receipts and clear communication",
      "Ease: One-time setup, recurring use",
      "Reliability: Fast, stable, predictable",
      "Alignment: Matched real-world behavior"
    ],
    metrics: [
      {
        label: "Adoption rate",
        value: "4% → 47%",
        description: "10x growth in bill payment share"
      }
    ]
  },
  {
    id: "learnings",
    title: "Key Takeaways",
    summary: "Five lessons from this project.",
    bullets: [
      "Design doesn't exist in isolation: Even perfect UX fails without technical performance",
      "Emotional needs = Functional needs: The receipt wasn't decoration—it was the entire value proposition",
      "Real behavior > Assumptions: Users showed us what they needed. We listened",
      "Backward compatibility is trust: Especially in financial products, familiarity = confidence",
      "Failed launches can be the best learning: Owning mistakes and iterating fast built a stronger product and process"
    ]
  },
  {
    id: "organizational",
    title: "Organizational Impact",
    summary: "Beyond the product, this project changed how we work.",
    bullets: [
      "Mandatory pre-launch performance testing",
      "Staging environments with real-world data",
      "Required loading/skeleton states for all heavy operations",
      "Shared standards across design and engineering"
    ],
    highlights: [
      "These changes improved every feature that came after"
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

//# debugId=E7E4CEBD2C8E8C8264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXhwYW5kTW9yZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXYudHN4IiwgIi4uL3NyYy9zaGFyZWQvdXRpbHMvc3gudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb24udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIERpdmlkZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZENvbXBvbmVudCA9ICh7IHNlY3Rpb24gfTogeyBzZWN0aW9uOiBDYXNlU3R1ZHlTZWN0aW9uIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIGlkPXtzZWN0aW9uLmlkfVxuICAgICAgc3BhY2luZz17eyB4czogMi41LCBtZDogMyB9fVxuICAgICAgc3g9e3sgbWF4V2lkdGg6IDc2MCwgbXg6IFwiYXV0b1wiLCBzY3JvbGxNYXJnaW5Ub3A6IHsgeHM6IDk2LCBtZDogMTQwIH0gfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMSB9fT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiB7IHhzOiAxLCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiBpbmRleCA8IHNlY3Rpb24uYm9keSEubGVuZ3RoIC0gMSA/IHsgeHM6IDIsIG1kOiAxLjUgfSA6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiIFxuICAgICAgICAgICAgICBrZXk9e3BvaW50fSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICBhbHQ9e3NlY3Rpb24uaW1hZ2UuYWx0fVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCA9IG1lbW8oXG4gIENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50LFxuICAocHJldiwgbmV4dCkgPT4gcHJldi5zZWN0aW9uID09PSBuZXh0LnNlY3Rpb24sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNS44OCA5LjI5IDEyIDEzLjE3IDguMTIgOS4yOWEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsNC41OSA0LjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw0LjU5LTQuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MS0uMzktLjM4LTEuMDMtLjM5LTEuNDIgMFwiXG59KSwgJ0V4cGFuZE1vcmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlLCBEaXZpZGVyLCBJY29uQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUsIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgRXhwYW5kTW9yZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVSb3VuZGVkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcyA9IHtcbiAgc2VjdGlvbnM6IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcbiAgYWN0aXZlU2VjdGlvbklkOiBzdHJpbmc7XG4gIG9uTmF2aWdhdGU6IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb3V0bGluZUxhYmVsPzogc3RyaW5nO1xuICBjb250YWluZXJTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgQ2FzZVN0dWR5T3V0bGluZU5hdiA9ICh7XG4gIHNlY3Rpb25zLFxuICBhY3RpdmVTZWN0aW9uSWQsXG4gIG9uTmF2aWdhdGUsXG4gIG91dGxpbmVMYWJlbCA9IFwiT3V0bGluZVwiLFxuICBjb250YWluZXJTeCxcbn06IENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCFpc01vYmlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICBzcGFjaW5nPXsxfVxuICAgICAgc3g9e21lcmdlU3goXG4gICAgICAgICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KSxcbiAgICAgICAgY29udGFpbmVyU3gsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3sgY3Vyc29yOiBpc01vYmlsZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaXNNb2JpbGUgJiYgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtvdXRsaW5lTGFiZWx9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2VcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBleHBhbmRlZCA/IFwicm90YXRlKDE4MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZXhwYW5kZWQgPyBcIkNvbGxhcHNlIG91dGxpbmVcIiA6IFwiRXhwYW5kIG91dGxpbmVcIn1cbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeHBhbmRNb3JlUm91bmRlZEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIj5cbiAgICAgICAgPERpdmlkZXIgc3g9e3sgbWI6IDEgfX0gLz5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb25OYXZpZ2F0ZShldmVudCwgc2VjdGlvbi5pZCk7XG4gICAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtY3VycmVudD17YWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yOClcIlxuICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgcHg6IDEuNSxcbiAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgU3hQcm9wcywgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBhcHBlbmQgPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KHRhcmdldDogU3hQcm9wczxUVGhlbWU+W10sIHZhbHVlPzogU3hQcm9wczxUVGhlbWU+KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiBhcHBlbmQodGFyZ2V0LCBpdGVtKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFyZ2V0LnB1c2godmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlU3ggPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KFxuICBiYXNlOiBTeFByb3BzPFRUaGVtZT4sXG4gIC4uLm92ZXJyaWRlczogQXJyYXk8U3hQcm9wczxUVGhlbWU+IHwgdW5kZWZpbmVkPlxuKTogU3hQcm9wczxUVGhlbWU+ID0+IHtcbiAgY29uc3QgZW50cmllczogU3hQcm9wczxUVGhlbWU+W10gPSBbXTtcbiAgYXBwZW5kKGVudHJpZXMsIGJhc2UpO1xuICBvdmVycmlkZXMuZm9yRWFjaCgodmFsdWUpID0+IGFwcGVuZChlbnRyaWVzLCB2YWx1ZSkpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBlbnRyaWVzWzBdITtcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzIGFzIFN4UHJvcHM8VFRoZW1lPjtcbn07XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlPdmVydmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3hcIjtcblxudHlwZSBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb25Qcm9wcyA9IHtcbiAgZXllYnJvdzogc3RyaW5nO1xuICBvdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXc7XG4gIHN1YnRpdGxlRmFsbGJhY2s/OiBzdHJpbmc7XG4gIG1ldGFUaXRsZT86IHN0cmluZztcbiAgc3RhdHNUaXRsZT86IHN0cmluZztcbiAgc3RhdHNWYXJpYW50PzogXCJncmFkaWVudFwiIHwgXCJvdXRsaW5lZFwiO1xuICBoZXJvQmFja2Ryb3BTeD86IFN4UHJvcHM8VGhlbWU+O1xuICBoZXJvU3VyZmFjZVN4PzogU3hQcm9wczxUaGVtZT47XG4gIHN0YXRzQ2FyZFN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0SGVyb0JhY2tkcm9wU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBpbnNldDogMCxcbiAgYm9yZGVyUmFkaXVzOiB7IHhzOiAyNCwgbWQ6IDMyIH0sXG4gIGJhY2tncm91bmQ6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA4KSwgcmdiYSgxNDUsMTY3LDI1NSwwLjE4KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMTYsMjgsNTYsMC44OCksIHJnYmEoMzYsNjQsMTIwLDAuNzIpKVwiLFxuICBmaWx0ZXI6IFwiYmx1cig0OHB4KVwiLFxuICB6SW5kZXg6IC0xLFxufSk7XG5cbmNvbnN0IGRlZmF1bHRIZXJvU3VyZmFjZVN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ5LCAyNTEsIDI1NSwgMC44OClcIiA6IFwicmdiYSgxMywgMjAsIDM2LCAwLjg4KVwiLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICB9YCxcbiAgYm94U2hhZG93OlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwiMCAyNnB4IDUycHggcmdiYSgzNCwgODQsIDI1NSwgMC4xNClcIlxuICAgICAgOiBcIjAgMjZweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxufSk7XG5cbmNvbnN0IGRlZmF1bHRTdGF0c0NhcmRTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xMikpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuOCksIHJnYmEoMzYsNjQsMTIwLDAuNikpXCIsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogXCJub25lXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxufSk7XG5cbmNvbnN0IG91dGxpbmVkU3RhdHNDYXJkU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0OSwyNTEsMjU1LDAuOTIpXCIgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG59KTtcblxuY29uc3QgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uID0gKHtcbiAgZXllYnJvdyxcbiAgb3ZlcnZpZXcsXG4gIHN1YnRpdGxlRmFsbGJhY2ssXG4gIG1ldGFUaXRsZSA9IFwiUHJvamVjdCBkZXRhaWxzXCIsXG4gIHN0YXRzVGl0bGUsXG4gIHN0YXRzVmFyaWFudCA9IFwiZ3JhZGllbnRcIixcbiAgaGVyb0JhY2tkcm9wU3gsXG4gIGhlcm9TdXJmYWNlU3gsXG4gIHN0YXRzQ2FyZFN4LFxufTogQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzdGF0cyA9IG92ZXJ2aWV3LnN0YXRzO1xuICBjb25zdCByZXNvbHZlZFN0YXRzQ2FyZFN4ID1cbiAgICBzdGF0c1ZhcmlhbnQgPT09IFwiZ3JhZGllbnRcIiA/IGRlZmF1bHRTdGF0c0NhcmRTeCA6IG91dGxpbmVkU3RhdHNDYXJkU3g7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogMTAsIG1kOiAxNCB9IH19PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgPEJveCBzeD17bWVyZ2VTeChkZWZhdWx0SGVyb0JhY2tkcm9wU3gsIGhlcm9CYWNrZHJvcFN4KX0gLz5cblxuICAgICAgICA8Qm94IHN4PXttZXJnZVN4KGRlZmF1bHRIZXJvU3VyZmFjZVN4LCBoZXJvU3VyZmFjZVN4KX0+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiPntvdmVydmlldy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIHsob3ZlcnZpZXcuc3VidGl0bGUgPz8gc3VidGl0bGVGYWxsYmFjaykgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42NSB9fT5cbiAgICAgICAgICAgICAgICAgIHtvdmVydmlldy5zdWJ0aXRsZSA/PyBzdWJ0aXRsZUZhbGxiYWNrfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19IHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZmxleD17eyBtZDogMSB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7bWV0YVRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgICAgICAgIHtvdmVydmlldy5tZXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCwgbXQ6IDAuNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICB7c3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgICAge3N0YXRzVGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRzVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoKHN0YXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmxlbmd0aCA+PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHhzOiAxMiwgc206IDQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMubGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgeHM6IDEyLCBzbTogNiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgeHM6IDEyLCBzbTogMTIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezB9IHN4PXttZXJnZVN4KHJlc29sdmVkU3RhdHNDYXJkU3gsIHN0YXRzQ2FyZFN4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9IHN4PXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXQudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlPdmVydmlld1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHR5cGUgU3hQcm9wcyxcbiAgdHlwZSBUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uUHJvcHMgPSB7XG4gIGV5ZWJyb3c6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc3R1ZGllczogcmVhZG9ubHkgQ2FzZVN0dWR5RW50cnlbXTtcbiAgcHJpbWFyeUN0YToge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2Vjb25kYXJ5Q3RhPzoge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2VjdGlvblN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0U2VjdGlvblN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQxLDI0NSwyNTUsMC44KSwgcmdiYSgyMjQsMjMzLDI1NSwwLjk0KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTMsMjAsMzMsMC45KSwgcmdiYSgyMSwzMSw1MiwwLjkyKSlcIixcbn0pO1xuXG5jb25zdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgc3R1ZGllcyxcbiAgcHJpbWFyeUN0YSxcbiAgc2Vjb25kYXJ5Q3RhLFxuICBzZWN0aW9uU3gsXG59OiBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXttZXJnZVN4KGRlZmF1bHRTZWN0aW9uU3gsIHNlY3Rpb25TeCl9PlxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiA2IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9IH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDcyMCwgbXg6IHsgeHM6IFwiYXV0b1wiLCBtZDogMCB9LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAge3N0dWRpZXMubWFwKChzdHVkeSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17c3R1ZHkuaWR9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICB0bz17c3R1ZHkucGF0aH1cbiAgICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGdhcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS50b2tlbnMudHJhbnNpdGlvbi5ob3Zlcn0sIHRyYW5zZm9ybSAxNjBtcyBlYXNlYCxcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdHVkeS5mb2N1c31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdHVkeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAge3N0dWR5LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGNhc2Ugc3R1ZHkg4oaSXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogMiwgc206IDMgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17cHJpbWFyeUN0YS50b31cbiAgICAgICAgICAgIHZhcmlhbnQ9e3ByaW1hcnlDdGEudmFyaWFudCA/PyBcImNvbnRhaW5lZFwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUN0YS5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17c2Vjb25kYXJ5Q3RhLnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PXtzZWNvbmRhcnlDdGEudmFyaWFudCA/PyBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlDdGEubGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB0eXBlIE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlTZWN0aW9uTGlzdCA9IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgZ2V0SW5pdGlhbFNlY3Rpb25JZCA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHNlY3Rpb25zWzBdPy5pZCA/PyBcIlwiO1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uID0gKHNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uTGlzdCkgPT4ge1xuICBjb25zdCBzZWN0aW9uSWRzID0gdXNlTWVtbygoKSA9PiBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHNlY3Rpb24uaWQpLCBbc2VjdGlvbnNdKTtcblxuICBjb25zdCBbYWN0aXZlU2VjdGlvbklkLCBzZXRBY3RpdmVTZWN0aW9uSWRdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uSWRzLmluY2x1ZGVzKGFjdGl2ZVNlY3Rpb25JZCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChnZXRJbml0aWFsU2VjdGlvbklkKHNlY3Rpb25zKSk7XG4gICAgfVxuICB9LCBbYWN0aXZlU2VjdGlvbklkLCBzZWN0aW9uSWRzLCBzZWN0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgc2VjdGlvbklkcy5pbmNsdWRlcyhoYXNoKSkge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGhhc2gpO1xuICAgIH1cbiAgfSwgW3NlY3Rpb25JZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnRzID0gc2VjdGlvbklkc1xuICAgICAgLm1hcCgoc2VjdGlvbklkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgY29uc3QgaGFuZGxlT3V0bGluZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZCh0YXJnZXRJZCk7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9IyR7dGFyZ2V0SWR9YDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4geyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdXNlUmVsYXRlZENhc2VTdHVkaWVzID0gKFxuICBlbnRyaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeUVudHJ5PixcbiAgY3VycmVudElkOiBDYXNlU3R1ZHlFbnRyeVtcImlkXCJdLFxuKSA9PlxuICB1c2VNZW1vKFxuICAgICgpID0+IGVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaWQgIT09IGN1cnJlbnRJZCksXG4gICAgW2VudHJpZXMsIGN1cnJlbnRJZF0sXG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcztcblxuXG4iLAogICAgImltcG9ydCBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9kaXZhci1zZWN1cmUtY2FsbC1saXN0aW5nLnBuZ1wiO1xuaW1wb3J0IHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLWludGVydmlldy1zZXNzaW9uLmF2aWZcIjtcbmltcG9ydCBzZXRhcmVBdmFsVXNlckZsb3dBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLXVzZXItZmxvdy53ZWJwXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZVJlc291cmNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9hc3NldHNcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnksIENhc2VTdHVkeU92ZXJ2aWV3LCBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBkaXZhck92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJTb2x2aW5nIEhhcmFzc21lbnQgYXQgU2NhbGU6IEhvdyBJIFByb3RlY3RlZCAyLjFNIFVzZXJzIG9uIElyYW4ncyBMYXJnZXN0IE1hcmtldHBsYWNlXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiV2UgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgaW5zaWRlIERpdmFy4oCZcyBjbG90aGluZyBjYXRlZ29yeSBieSBidWlsZGluZyBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgbm93IHByb3RlY3RzIDIuMU0gd2Vla2x5IHVzZXJzLlwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlNlbmlvciBVWCBEZXNpZ25lciDCtyBUcnVzdCAmIFNhZmV0eVwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJNYXkg4oCTIEp1bmUgMjAyM1wiIH0sXG4gICAgeyBsYWJlbDogXCJUZWFtXCIsIHZhbHVlOiBcIkRlc2lnbiwgVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBFbmdpbmVlcmluZywgU3VwcG9ydFwiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAgeyB2YWx1ZTogXCLilrw2MCVcIiwgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIgfSxcbiAgICB7IHZhbHVlOiBcIjIuMU1cIiwgbGFiZWw6IFwiV2Vla2x5IGNhbGxlcnMgc2FmZWd1YXJkZWRcIiB9LFxuICAgIHsgdmFsdWU6IFwi4pa8MTglXCIsIGxhYmVsOiBcIlNhZmV0eSB0aWNrZXQgdm9sdW1lXCIgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQsXG4gICAgXCJEaXZhciBzZWN1cmUgY2FsbCBsaXN0aW5ncyBpbnRlcmZhY2VcIixcbiAgICB7IHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDYzMCB9LFxuICApLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpdmFyU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNvbnRleHRcIixcbiAgICB0aXRsZTogXCJDb250ZXh0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiRGl2YXIgaXMgSXJhbuKAmXMgbGFyZ2VzdCBjbGFzc2lmaWVkcyBtYXJrZXRwbGFjZSB3aXRoIDUzTSsgd2Vla2x5IHVzZXJzLiBUcnVzdCBhbmQgc2FmZXR5IGluY2lkZW50cyBjYW4gY29sbGFwc2UgZW50aXJlIHJldmVudWUgY2F0ZWdvcmllcyBpZiBsZWZ0IHVuY2hlY2tlZC5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7IGxhYmVsOiBcIk1hcmtldHBsYWNlIHNjYWxlXCIsIHZhbHVlOiBcIjUzTStcIiwgZGVzY3JpcHRpb246IFwiV2Vla2x5IGJ1eWVycyAmIHNlbGxlcnNcIiB9LFxuICAgICAgeyBsYWJlbDogXCJWb2ljZSBkZXBlbmRlbmNlXCIsIHZhbHVlOiBcIjIuMU1cIiwgZGVzY3JpcHRpb246IFwiQ2FsbHMgcGxhY2VkIGV2ZXJ5IHdlZWtcIiB9LFxuICAgICAgeyBsYWJlbDogXCJBZCBjb25zdW1wdGlvblwiLCB2YWx1ZTogXCI2QitcIiwgZGVzY3JpcHRpb246IFwiTW9udGhseSBhZCB2aWV3c1wiIH0sXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkNsb3RoaW5nIGxpc3Rpbmdz4oCUbW9zdGx5IHdvbWVuLWxlZOKAlHdlcmUgaGl0IGhhcmRlc3QgYnkgYWJ1c2UuXCIsXG4gICAgICBcIk1hbnVhbCBtb2RlcmF0aW9uIGNvdWxkbuKAmXQga2VlcCB1cDsgbGlxdWlkaXR5IGFuZCB0cnVzdCB3ZXJlIGluIGZyZWUgZmFsbC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY3Jpc2lzXCIsXG4gICAgdGl0bGU6IFwiVGhlIENyaXNpc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkN1c3RvbWVyIGNhcmUgY2VudHJlcyB3ZXJlIGZsb29kZWQgd2l0aCBoYXJhc3NtZW50IHJlcG9ydHMuIFNlbGxlcnMgZGVsZXRlZCBsaXN0aW5ncyBvciBjaHVybmVkIGVudGlyZWx5LCBmZWFyaW5nIHJlcGVhdCBpbmNpZGVudHMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJIYXJhc3NlcnMgc2NyYXBlZCBwaG9uZSBudW1iZXJzIGZyb20gYWRzIGFuZCBjaXJjdWxhdGVkIHRoZW0gaW4gcHJpdmF0ZSBUZWxlZ3JhbSBncm91cHMuXCIsXG4gICAgICBcIkV2ZW4gYWZ0ZXIgdmljdGltcyBkZWxldGVkIGxpc3RpbmdzLCB0aGUgY2FsbHMgY29udGludWVkIGJlY2F1c2UgbnVtYmVycyB3ZXJlIGFscmVhZHkgZXhwb3NlZC5cIixcbiAgICAgIFwiV2l0aG91dCBpbnRlcnZlbnRpb24sIERpdmFyIHJpc2tlZCBsb3NpbmcgYSBjYXRlZ29yeSB0aGF0IGFuY2hvcmVkIGRhaWx5IGVuZ2FnZW1lbnQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkxheWxhLCAzMlwiLFxuICAgICAgICByb2xlOiBcIlByb2Zlc3Npb25hbCBhcnRpc3Qgc2VsbGluZyBiZXNwb2tlIGNsb3RoaW5nXCIsXG4gICAgICAgIHRleHQ6IFwiSXQgd2FzIGluZnVyaWF0aW5nLiBJIHRvb2sgZG93biBteSBEaXZhciBhZCBob3BpbmcgdG8gc3RvcCB0aGUgY2FsbHMsIGJ1dCB0aGV5IGtlcHQgY29taW5nLiBTb21lb25lIHRvbGQgbWUgbXkgbnVtYmVyIHdhcyBpbiBhIFRlbGVncmFtIGdyb3VwLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW52ZXN0aWdhdGlvblwiLFxuICAgIHRpdGxlOiBcIkZpbmRpbmcgdGhlIFJlYWwgUHJvYmxlbVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgaW50ZXJ2aWV3ZWQgaGFyYXNzZWQgc2VsbGVycyBhbmQgYW5hbHlzZWQgYmVoYXZpb3VyYWwgZGF0YSB0byB1bmRlcnN0YW5kIGhvdyBleHBvc3VyZSBzY2FsZWQuIFRoZSBicmVha3Rocm91Z2ggY2FtZSBmcm9tIGNvbm5lY3RpbmcgcXVhbGl0YXRpdmUgc3RvcmllcyB0byBxdWFudGl0YXRpdmUgc2lnbmFscy5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlBhdHRlcm5zIGVtZXJnZWQgcXVpY2tseTogaGFyYXNzZXJzIHNhdmVkIHBvc3RlZCBudW1iZXJzLCBjcm9zcy1yZWZlcmVuY2VkIHRoZW0gb24gV2hhdHNBcHAgYW5kIEluc3RhZ3JhbSwgYW5kIG9ubHkgdGhlbiBiZWdhbiB0aGUgYWJ1c2UuIEV4cGVyaWVuY2VkIHNlbGxlcnMgaGFkIGFscmVhZHkgc3RvcHBlZCBzaGFyaW5nIG51bWJlcnMgYW5kIHJlbGllZCBvbiBpbi1hcHAgY2hhdOKAlG5ldyBzZWxsZXJzIHdlcmUgdGhlIG9uZXMgbGVmdCBleHBvc2VkLlwiLFxuICAgICAgXCJTYXJh4oCZcyBtZW50aW9uIG9mIGEgY2FsbGVyIHJlZmVyZW5jaW5nIGhlciBleWUgY29sb3IgY29uZmlybWVkIG91ciBoeXBvdGhlc2lzOiBzb2NpYWwgbWVkaWEgYnJlYWRjcnVtYnMgbWFkZSBoYXJhc3NtZW50IHBlcnNvbmFsIGFuZCBmcmlnaHRlbmluZy5cIixcbiAgICAgIFwiRGF0YSBhbmFseXNpcyBiYWNrZWQgdGhlIHF1YWxpdGF0aXZlIHdvcmsuIFVzZXJzIHdob3NlIHBob25lIG51bWJlcnMgd2VyZSBsaW5rZWQgdG8gcHVibGljIHNvY2lhbCBwcm9maWxlcyByZXBvcnRlZCBoYXJhc3NtZW50IGRyYW1hdGljYWxseSBtb3JlIG9mdGVuLiBUaG9zZSB3aG8gc3R1Y2sgdG8gaW4tYXBwIGNoYXQgcmFyZWx5IGRpZC5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiU2FyYSwgMjZcIixcbiAgICAgICAgcm9sZTogXCJGYXNoaW9uIHJldGFpbCB3b3JrZXJcIixcbiAgICAgICAgdGV4dDogXCJPbmUgY2FsbGVyIGtuZXcgbXkgZXllIGNvbG9yLiBUaGV5IGNsZWFybHkgZm91bmQgbXkgSW5zdGFncmFtIHRocm91Z2ggdGhlIHBob25lIG51bWJlciBvbiBEaXZhci5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJaYWhyYSwgMjhcIixcbiAgICAgICAgcm9sZTogXCJGcmVlbGFuY2UgZ3JhcGhpYyBkZXNpZ25lclwiLFxuICAgICAgICB0ZXh0OiBcIkkgc3RvcHBlZCBsaXN0aW5nIG15IHBob25lIG51bWJlci4gSXQgZmVsdCB1bnByb2Zlc3Npb25hbCwgYnV0IGl0IHdhcyB0aGUgb25seSB3YXkgdG8gYXZvaWQgaGFyYXNzbWVudC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlB1YmxpYyBwaG9uZSBudW1iZXJzIHdlcmUgdGhlIHJvb3QgY2F1c2Ugb2YgZXhwb3N1cmUsIG5vdCB0aGUgbnVtYmVyIG9mIHJlcG9ydHMuXCIsXG4gICAgICBcIkV4cGVyaWVuY2VkIHNlbGxlcnMgaGFkIGFscmVhZHkgYWRhcHRlZCBieSB1c2luZyBpbi1hcHAgY2hhdDsgbmV3IHNlbGxlcnMgbmVlZGVkIHByb3RlY3RpdmUgZGVmYXVsdHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInN0cmF0ZWd5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFNvbHV0aW9uIEpvdXJuZXlcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJXZSByZWZyYW1lZCBzdWNjZXNzIGZyb20g4oCccmVkdWNlIHJlcG9ydHPigJ0gdG8g4oCccmVkdWNlIGV4cG9zdXJlLuKAnSBXaXRoIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgU3VwcG9ydCwgYW5kIERhdGEsIHdlIGV2YWx1YXRlZCBldmVyeSBwYXRoIGFuZCBzdHJlc3MtdGVzdGVkIGVkZ2UgY2FzZXMgYmVmb3JlIGNvbW1pdHRpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJFZHVjYXRpbmcgdXNlcnMgYWJvdXQgaGFyYXNzZXIgdGFjdGljcyB3b3VsZCBlcm9kZSB0cnVzdCBhbmQgZGlzY291cmFnZSBsaXN0aW5ncy5cIixcbiAgICAgIFwiRnVsbCBWb0lQIHdhcyBjb3N0LXByb2hpYml0aXZlLCBmcmFnaWxlIGFjcm9zcyBkZXZpY2UgdHlwZXMsIGFuZCBpbmFjY2Vzc2libGUgdG8gNDclIG9mIGxlZ2FjeSBBbmRyb2lkIHVzZXJzLlwiLFxuICAgICAgXCJWb2ljZSByZWxheSB3aXRoIGludGVybWVkaWFyeSBudW1iZXJzIHByb3RlY3RlZCBzZWxsZXJzIHdpdGhvdXQgY2hhbmdpbmcgcHVyY2hhc2UgYmVoYXZpb3Vy4oCUdGhpcyBiZWNhbWUgdGhlIG5vcnRoIHN0YXIuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInRlc3RpbmdcIixcbiAgICB0aXRsZTogXCJUZXN0aW5nICYgTGVhcm5pbmcgZnJvbSBGYWlsdXJlXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQSAzLWRheSBwaWxvdCBpbiB0aGUgY2xvdGhpbmcgY2F0ZWdvcnkgcmVzdWx0ZWQgaW4gYSA1NiUgY2FsbCBmYWlsdXJlIHJhdGUuIEluc3RlYWQgb2YgcmV2ZXJ0aW5nLCB3ZSB0cmVhdGVkIGV2ZXJ5IGZhaWx1cmUgYXMgYSBkZXNpZ24gcmVxdWlyZW1lbnQuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJVc2VyIGJlaGF2aW91cjogc2VsbGVycyBibG9ja2VkIHVuZmFtaWxpYXIgbnVtYmVyczsgYnV5ZXJzIHJlZGlhbGxlZCBmcm9tIGNhbGwgbG9nczsgcmVwZWF0IGNvbnZlcnNhdGlvbnMgYnJva2UgbWFwcGluZyB3aW5kb3dzLlwiLFxuICAgICAgXCJUZWNobmljYWwgbG9hZDogY2FsbCB2b2x1bWUgc3Bpa2VkIGJleW9uZCBmb3JlY2FzdHMgYW5kIG51bWJlciBwb29scyB3ZXJlIGV4aGF1c3RlZC5cIixcbiAgICAgIFwiQnVzaW5lc3MgcmlzazogbG9uZ2VyIGNhbGxzIGluZmxhdGVkIHRlbGVjb20gY29zdHMgYW5kIGFub255bWlzZWQgbnVtYmVycyBhdHRyYWN0ZWQgb3Bwb3J0dW5pc3RpYyBzY2FtbWVycy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVmaW5lbWVudFwiLFxuICAgIHRpdGxlOiBcIlRoZSBSZWZpbmVkIFNvbHV0aW9uXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgdHJhbnNsYXRlZCBldmVyeSBwaWxvdCBpbnNpZ2h0IGludG8gcHJvZHVjdCBhbmQgcGxhdGZvcm0gaW1wcm92ZW1lbnRzIGJlZm9yZSBzY2FsaW5nIG5hdGlvbndpZGUuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJCaWRpcmVjdGlvbmFsIG1hcHBpbmcgbGV0IHNlbGxlcnMgcmVjb25uZWN0IHdpdGhvdXQgZXhwb3NpbmcgcmVhbCBudW1iZXJzLlwiLFxuICAgICAgXCJFeHRlbmRlZCBtYXBwaW5nIHdpbmRvd3MgZnJvbSAyMCBzZWNvbmRzIHRvIDE1IG1pbnV0ZXMgcmVkdWNlZCBkcm9wcGVkIGNhbGxzLlwiLFxuICAgICAgXCJWb2ljZSBwcm9tcHRzICjigJxUaGlzIGlzIGEgc2VjdXJlIGNhbGwgZnJvbSBEaXZhcuKApuKAnSkgc2V0IGV4cGVjdGF0aW9ucyBhbmQgZGV0ZXJyZWQgc2NhbW1lcnMuXCIsXG4gICAgICBcIkEgcG9vbCBvZiAxMDAgaW50ZXJtZWRpYXJ5IG51bWJlcnMgYXNzaWduZWQgcGVyIGJ1eWVyLXNlbGxlciBwYWlyIHByZXZlbnRlZCByZXVzZSBhbmQgYmxvY2tpbmcuXCIsXG4gICAgICBcIlNlY3VyZSBjYWxsIGhpc3RvcnksIGNoYXQgaW50ZWdyYXRpb24sIGFuZCBhZCBtYW5hZ2VtZW50IGxvZ3Mga2VwdCBsZWdpdGltYXRlIHJlbGF0aW9uc2hpcHMgaW50YWN0LlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbXBhY3RcIixcbiAgICB0aXRsZTogXCJJbXBhY3RcIixcbiAgICBib2R5OiBbXG4gICAgICBcIkFmdGVyIHJvbGxvdXQsIGhhcmFzc21lbnQgcmVwb3J0cyBkcm9wcGVkIGRyYW1hdGljYWxseSBhbmQgc2VsbGVycyBmZWx0IHNhZmUgZW5vdWdoIHRvIGtlZXAgbGlzdGluZ3MgbGl2ZS4gTW9kZXJhdGlvbiB0ZWFtcyByZWNvdmVyZWQgaG91cnMgZWFjaCB3ZWVrIHRoYXQgd2VyZSBwcmV2aW91c2x5IHNwZW50IG9uIHJlYWN0aXZlIHRpY2tldHMuXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgNjAlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGhpbiA4IHdlZWtzIG9mIGxhdW5jaFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWQgZGVsZXRpb25zXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCAyNSVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmV3ZXIgc2VsbGVycyBsZWF2aW5nIHRoZSBwbGF0Zm9ybVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU3VwcG9ydCB0aWNrZXRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCAxOCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTW9yZSB0aW1lIGZvciBwcm9hY3RpdmUgbW9uaXRvcmluZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibGVhcm5pbmdzXCIsXG4gICAgdGl0bGU6IFwiS2V5IExlYXJuaW5nc1wiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVGhlIG9idmlvdXMgcHJvYmxlbSBpcyByYXJlbHkgdGhlIHJlYWwgb25l4oCUZXhwb3N1cmUsIG5vdCByZXBvcnRzLCB3YXMgdGhlIHJvb3QuXCIsXG4gICAgICBcIlVzZXJzIHdlcmUgYWxyZWFkeSBkZXNpZ25pbmcgd29ya2Fyb3VuZHM7IG9ic2VydmluZyB0aGVtIHJldmVhbGVkIHRoZSByaWdodCBkZWZhdWx0cy5cIixcbiAgICAgIFwiRmFpbHVyZSBpcyBzaWduYWwuIFRoZSA1NiUgcGlsb3QgZmFpbHVyZSBnZW5lcmF0ZWQgYSBiYWNrbG9nIG9mIGFjdGlvbmFibGUgcmVxdWlyZW1lbnRzLlwiLFxuICAgICAgXCJQYWlyIHF1YWxpdGF0aXZlIGluc2lnaHQgd2l0aCByZWFsLXRpbWUgbW9uaXRvcmluZyB0byBrZWVwIGFidXNlIHZlY3RvcnMgaW4gY2hlY2suXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmxlY3Rpb25cIixcbiAgICB0aXRsZTogXCJSZWZsZWN0aW9uXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJUaGlzIHByb2plY3QgcmVpbmZvcmNlZCBteSBiZWxpZWYgdGhhdCBzb2x2aW5nIGhhcmQgcHJvYmxlbXMgc3RhcnRzIHdpdGggdW5kZXJzdGFuZGluZyBiZWhhdmlvdXIuIEJ5IGJsZW5kaW5nIHJlc2VhcmNoLCBkYXRhLCBhbmQgcmFwaWQgaXRlcmF0aW9uLCB3ZSBidWlsdCBhIHNhZmV0eSBsYXllciB0aGF0IHN0aWxsIHByb3RlY3RzIG1pbGxpb25zIG9mIHBlb3BsZSBlYWNoIHdlZWsuIFRoZSBoYXJhc3NtZW50IHByb2JsZW0gbWF5IG5ldmVyIGRpc2FwcGVhciBlbnRpcmVseSwgYnV0IERpdmFyIGlzIHNpZ25pZmljYW50bHkgc2FmZXIgZm9yIHRoZSB1c2VycyB3aG8gbmVlZCBpdCBtb3N0LlwiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnMgYXQgU2V0YXJlIEF2YWxcIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJQcm9kdWN0IERlc2lnbmVyXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIkZlYiAyMDIxIOKAkyBKYW4gMjAyMlwiIH0sXG4gICAgeyBsYWJlbDogXCJJbXBhY3RcIiwgdmFsdWU6IFwiRG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGluIDYgbW9udGhzXCIgfSxcbiAgXSxcbiAgc3RhdHM6IFtcbiAgICB7XG4gICAgICB2YWx1ZTogXCIyw5dcIixcbiAgICAgIGxhYmVsOiBcIlJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFjaGlldmVkIHdpdGhpbiB0aGUgZmlyc3QgNiBtb250aHMgb2Ygcm9sbG91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiKzYwS1wiLFxuICAgICAgbGFiZWw6IFwiRGFpbHkgYWN0aXZlIHVzZXJzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZWZlcnJhbCBjb2hvcnQgY29udmVydGVkIHRvIGhpZ2gtaW50ZW50IERBVXNcIixcbiAgICB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgIHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCxcbiAgICBcIlNldGFyZSBBdmFsIGN1c3RvbWVyIGVuZ2FnZW1lbnQgaW50ZXJ2aWV3IHNlc3Npb25cIixcbiAgICB7IHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDYzMCB9LFxuICApLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlNldGFyZSBBdmFsIGlzIHRoZSBkaWdpdGFsIGFybSBvZiBJcmFuJ3MgbGFyZ2VzdCB0ZWxlY29tLiBXZSBwb3dlcmVkIGZpbnRlY2ggc2VydmljZXMsIFVTU0QgZXhwZXJpZW5jZXMsIGFuZCBtb2JpbGUgdmFsdWUtYWRkZWQgc2VydmljZXMgbmF0aW9uLXdpZGUuIEdyb3d0aCBoYWQgcGxhdGVhdWVk4oCUb3VyIGZ1bm5lbCBsZWFrZWQgYWZ0ZXIgdGhlIGZpcnN0IHB1cmNoYXNlLlwiLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVXNlciBCYXNlXCIsXG4gICAgICAgIHZhbHVlOiBcIjYwSytcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGFpbHkgc3Vic2NyaWJlcnMgYWNyb3NzIG5hdGlvbndpZGUgc2VydmljZXNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlJldGVudGlvbiBHb2FsXCIsXG4gICAgICAgIHZhbHVlOiBcIngyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvdWJsZSA5MC1kYXkgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2hhbGxlbmdlXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJBY3RpdmF0aW9uIGZsb3cgdHJlYXRlZCBldmVyeSBzZWdtZW50IGlkZW50aWNhbGx5LCBpZ25vcmluZyB1c2FnZSBpbnRlbnQuXCIsXG4gICAgICBcIlJlZmVycmFsIGxvb3BzIGV4aXN0ZWQgYnV0IHdlcmUgdW5yZXdhcmRpbmfigJR1c2VycyBjaHVybmVkIGFmdGVyIGZpcnN0IGJlbmVmaXQuXCIsXG4gICAgICBcIlRlYW1zIHNoaXBwZWQgaW4gc2lsb3M7IG5vIHNoYXJlZCBleHBlcmltZW50IGNhZGVuY2Ugb3Igc3VjY2VzcyBtZXRyaWNzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnNpZ2h0c1wiLFxuICAgIHRpdGxlOiBcIldoYXQgV2UgTGVhcm5lZFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRocm91Z2ggaW50ZXJ2aWV3cywgZnVubmVsIGFuYWx5dGljcywgYW5kIHNlcnZpY2UtYmx1ZXByaW50IG1hcHBpbmcsIHdlIHN1cmZhY2VkIHRoZSB1bmRlcmx5aW5nIGJsb2NrZXJzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlcnMgd2FudGVkIHRhbmdpYmxlIG1pbGVzdG9uZXPigJR3aXRob3V0IHRoZW0sIHRoZSBwcm9kdWN0IGZlbHQgdHJhbnNhY3Rpb25hbC5cIixcbiAgICAgIFwiSGlnaC1pbnRlbnQgY29ob3J0cyByZXNwb25kZWQgdG8gZWR1Y2F0aW9uYWwgbnVkZ2VzIG1vcmUgdGhhbiBwcm9tb3Rpb25zLlwiLFxuICAgICAgXCJJbnRlcm5hbCB0ZWFtcyBsYWNrZWQgdmlzaWJpbGl0eSBpbnRvIGV4cGVyaW1lbnQgb3V0Y29tZXMsIHNsb3dpbmcgaXRlcmF0aW9uLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2x1dGlvblwiLFxuICAgIHRpdGxlOiBcIkV4cGVyaWVuY2UgUmUtQXJjaGl0ZWN0dXJlXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIGxpZmVjeWNsZSBtZXNzYWdpbmcgdGFpbG9yZWQgdG8gaW50ZW50IChleHBsb3JlcnMsIGVhcm5lcnMsIGxveWFsaXN0cykuXCIsXG4gICAgICBcIlNoaXBwZWQgYSBnYW1pZmllZCByZWZlcnJhbCBqb3VybmV5IHRoYXQgY2VsZWJyYXRlZCBwcm9ncmVzcyBhbmQgdW5sb2NrZWQgdGllcmVkIHJld2FyZHMuXCIsXG4gICAgICBcIlN0b29kIHVwIGEgY3Jvc3MtZnVuY3Rpb25hbCBncm93dGggZ3VpbGQgd2l0aCBhIDItd2VlayBleHBlcmltZW50IGNhZGVuY2UuXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlJldGFpbmVkIFJldmVudWVcIixcbiAgICAgICAgdmFsdWU6IFwiMsOXXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGhpbiA2IG1vbnRocyBvZiBzdGFnZWQgcm9sbG91dFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRGFpbHkgQWN0aXZlIFVzZXJzXCIsXG4gICAgICAgIHZhbHVlOiBcIis2MEtcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmVmZXJyYWwgcHJvZ3JhbSBwYXJ0aWNpcGFudHMgYmVjYW1lIGRhaWx5IGFjdGl2ZXNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJvbGVcIixcbiAgICB0aXRsZTogXCJNeSBSb2xlXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBvcGVyYXRlZCBhcyB0aGUgZW5kLXRvLWVuZCBwcm9kdWN0IGRlc2lnbmVyLCBicmlkZ2luZyBwcm9kdWN0LCBtYXJrZXRpbmcsIGN1c3RvbWVyIHN1Y2Nlc3MsIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlJhbiB3ZWVrbHkgY28tY3JlYXRpb24gcml0dWFscyB0byBhbGlnbiBzdGFrZWhvbGRlcnMgb24gZXhwZXJpbWVudCBwcmlvcml0aWVzLlwiLFxuICAgICAgXCJFc3RhYmxpc2hlZCBkZXNpZ24gc3lzdGVtIGZvdW5kYXRpb25zIGFkb3B0ZWQgYnkgdGVhbXMgYmV5b25kIGdyb3d0aC5cIixcbiAgICAgIFwiU2V0IHVwIGFuYWx5dGljcyBkYXNoYm9hcmRzIHRoYXQgcGFpcmVkIHF1YWxpdGF0aXZlIG5vdGVzIHdpdGggZnVubmVsIEtQSXMuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkhlYWQgb2YgR3Jvd3RoXCIsXG4gICAgICAgIHJvbGU6IFwiU2V0YXJlIEF2YWxcIixcbiAgICAgICAgdGV4dDogXCJNYXNpaCBoZWxwZWQgdXMgc2hpZnQgZnJvbSBvbmUtb2ZmIGNhbXBhaWducyB0byBhIHByb2R1Y3QgbWluZHNldC4gVGhlIGxpZmVjeWNsZSBtb2RlbCBhbmQgZXhwZXJpbWVudCBjYWRlbmNlIHN0aWxsIGd1aWRlIGhvdyB3ZSBidWlsZCB0b2RheS5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVZZWtPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiRnJvbSA0JSB0byA0NyU6IEhvdyBJIFR1cm5lZCBhIEZhaWxpbmcgRmVhdHVyZSBJbnRvIGEgQ29yZSBQcm9kdWN0IFZhbHVlXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiRGVzcGl0ZSBtaWxsaW9ucyBvZiBhY3RpdmUgdXNlcnMsIG9ubHkgNCUgb2YgcGF5bWVudHMgd2VyZSBiaWxscy4gU2Vzc2lvbiByZWNvcmRpbmdzIHNob3dlZCB1c2VycyB3ZXJlIHRyeWluZyBidXQgZmFpbGluZy4gSSBsZWQgdGhlIGNvbXBsZXRlIHJlZGVzaWduIGZyb20gcmVzZWFyY2ggdGhyb3VnaCBsYXVuY2gsIGluY3JlYXNpbmcgYWRvcHRpb24gdG8gNDclLlwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIjIwMjIg4oCTIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiQ29tcGFueVwiLCB2YWx1ZTogXCJTZXRhcmUgQXZhbCAoU2V0YXJlWWVrIGFwcClcIiB9LFxuICAgIHsgbGFiZWw6IFwiQ29uc3RyYWludFwiLCB2YWx1ZTogXCJTb2xlIGRlc2lnbmVy4oCUYmFsYW5jZWQgZGVlcCByZXNlYXJjaCB3aXRoIHJhcGlkIGV4ZWN1dGlvblwiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgbGFiZWw6IFwiQWRvcHRpb24gcmF0ZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiMTB4IGdyb3d0aCBpbiBiaWxsIHBheW1lbnQgc2hhcmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgICAgbGFiZWw6IFwiRHJvcCByZWR1Y3Rpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFmdGVyIFZlcnNpb24gMiBwZXJmb3JtYW5jZSBmaXhlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMU0rXCIsXG4gICAgICBsYWJlbDogXCJVc2Vyc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0YXJlWWVrIHBsYXRmb3JtIHNjYWxlXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBzZXRhcmVBdmFsVXNlckZsb3dBc3NldCxcbiAgICBcIlNldGFyZVllayBiaWxsIHBheW1lbnQgdXNlciBmbG93XCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVZZWtTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY2hhbGxlbmdlXCIsXG4gICAgdGl0bGU6IFwiVGhlIENoYWxsZW5nZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRlc3BpdGUgbWlsbGlvbnMgb2YgYWN0aXZlIHVzZXJzLCBvbmx5IDQlIG9mIHBheW1lbnRzIHdlcmUgYmlsbHMuIFNlc3Npb24gcmVjb3JkaW5ncyBzaG93ZWQgdXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCI5NiUgb2YgcGF5bWVudHMgd2VyZSBub3QgYmlsbHNcIixcbiAgICAgIFwiSGlnaCBkcm9wLW9mZiByYXRlcyBhdCBzcGVjaWZpYyBzdGVwc1wiLFxuICAgICAgXCJVc2VycyBzcGVuZGluZyB1bnVzdWFsbHkgbG9uZyBvbiBzaW5nbGUgc2NyZWVuc1wiLFxuICAgICAgXCJNYW55IGFiYW5kb25lZCBhdHRlbXB0cyBiZWZvcmUgcGF5bWVudCBjb25maXJtYXRpb25cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiS2V5IHF1ZXN0aW9uXCIsXG4gICAgICAgIHJvbGU6IFwiUmVzZWFyY2ggaW5zaWdodFwiLFxuICAgICAgICB0ZXh0OiBcIlBlb3BsZSBwYXkgYmlsbHMgZXZlcnkgbW9udGjigJRpdCdzIG5vdCBvcHRpb25hbC4gU28gd2h5IGFyZSB0aGV5IGF2b2lkaW5nIG91ciBhcHA/XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJUaGlzIHdhc24ndCBhYm91dCBhZGRpbmcgZmVhdHVyZXMuIFNvbWV0aGluZyBmdW5kYW1lbnRhbCB3YXMgYnJva2VuLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJhYm91dC1zZXRhcmV5ZWtcIixcbiAgICB0aXRsZTogXCJBYm91dCBTZXRhcmVZZWtcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJcmFuJ3MgbGFyZ2VzdCBmaW50ZWNoIHBsYXRmb3JtIHNlcnZpbmcgbWlsbGlvbnMgb2YgdXNlcnMgZm9yIGV2ZXJ5ZGF5IGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMuXCIsXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJUb3AgMTAgRmluYW5jZSBBcHBcIixcbiAgICAgIFwiTWFya2V0IExlYWRlclwiLFxuICAgICAgXCIxME0rIEFjdGl2ZSBVc2Vyc1wiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJNb250aGx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIxMC42TStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmF0aW9ud2lkZSBmaW50ZWNoIHBsYXRmb3JtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJUb3RhbCBJbnN0YWxsc1wiLFxuICAgICAgICB2YWx1ZTogXCIyLjM2TStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR3Jvd2luZyB1c2VyIGJhc2VcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBib2R5OiBbXG4gICAgICBcIlRoZSBvcHBvcnR1bml0eTogQmlsbCBwYXltZW50IGlzIGEgaGlnaC1mcmVxdWVuY3ksIGhpZ2gtc3RyZXNzIHRhc2sgdGhhdCBldmVyeSBob3VzZWhvbGQgZmFjZXMgbW9udGhseS4gSWYgd2UgY291bGQgc29sdmUgaXQgd2VsbCwgd2UnZCBiZWNvbWUgaW5kaXNwZW5zYWJsZS5cIixcbiAgICAgIFwiVGhlIHByb2JsZW06IFdlIGhhZCB0aGUgZmVhdHVyZSwgYnV0IGFsbW9zdCBub2JvZHkgdXNlZCBpdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicm9sZVwiLFxuICAgIHRpdGxlOiBcIk15IFJvbGVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lcuKAlGxlZCBjb21wbGV0ZSByZWRlc2lnbiBmcm9tIHJlc2VhcmNoIHRocm91Z2ggbGF1bmNoLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciByZXNlYXJjaCAmIHN5bnRoZXNpc1wiLFxuICAgICAgXCJVWC9VSSBkZXNpZ25cIixcbiAgICAgIFwiUHJvdG90eXBpbmcgJiB0ZXN0aW5nXCIsXG4gICAgICBcIkNvbGxhYm9yYXRpb24gb24gaW1wbGVtZW50YXRpb24gJiByb2xsb3V0XCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkNvbnN0cmFpbnQ6IFNvbGUgZGVzaWduZXLigJRiYWxhbmNlZCBkZWVwIHJlc2VhcmNoIHdpdGggcmFwaWQgZXhlY3V0aW9uXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRpc2NvdmVyeVwiLFxuICAgIHRpdGxlOiBcIkRpc2NvdmVyeTogV2hhdCBVc2VycyBBY3R1YWxseSBOZWVkZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJNdWx0aS1tZXRob2QgcmVzZWFyY2ggY29tYmluaW5nIHF1YWxpdGF0aXZlIGludGVydmlld3MsIGNvbnRleHR1YWwgaW5xdWlyeSwgZGlnaXRhbCBiZWhhdmlvciBhbmFseXNpcywgYW5kIHF1YW50aXRhdGl2ZSBwYXR0ZXJucy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlF1YWxpdGF0aXZlOiBJbi1kZXB0aCBpbnRlcnZpZXdzIHdpdGggYnVpbGRpbmcgbWFuYWdlcnMsIGhlYWRzIG9mIGhvdXNlaG9sZHMsIGFuZCBldmVyeWRheSB1c2Vyc1wiLFxuICAgICAgXCJDb250ZXh0dWFsIGlucXVpcnk6IE9ic2VydmluZyBiaWxsIHBheW1lbnQgaW4gcmVhbCBjb250ZXh0c1wiLFxuICAgICAgXCJFdGhub2dyYXBoaWMgZGV0YWlsczogU3R1ZHlpbmcgYSBidWlsZGluZyBtYW5hZ2VyJ3MgcGh5c2ljYWwgbm90ZWJvb2tcIixcbiAgICAgIFwiRGlnaXRhbCBiZWhhdmlvcjogU2Vzc2lvbiByZWNvcmRpbmdzLCBhcHAgc3RvcmUgcmV2aWV3cywgc29jaWFsIG1lZGlhIHNlbnRpbWVudFwiLFxuICAgICAgXCJRdWFudGl0YXRpdmU6IERyb3Atb2ZmIGFuYWx5c2lzIGFuZCBiZWhhdmlvciBwYXR0ZXJuc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwZXJzb25hc1wiLFxuICAgIHRpdGxlOiBcIlR3byBDb3JlIFBlcnNvbmFzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVHdvIGRpc3RpbmN0IHBlcnNvbmFzIGVtZXJnZWQgd2l0aCBkaWZmZXJlbnQgbmVlZHMgZHJpdmluZyBldmVyeSBkZXNpZ24gZGVjaXNpb24uXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgQnVpbGRpbmcgTWFuYWdlciAoQWdlIDU1Kyk6IE1hbmFnZXMgdXRpbGl0aWVzIGZvciBlbnRpcmUgYXBhcnRtZW50IGJ1aWxkaW5nLiBOZWVkcyBvZmZpY2lhbCwgc2hhcmVhYmxlIGRvY3VtZW50YXRpb24uIFplcm8gdG9sZXJhbmNlIGZvciBhbWJpZ3VpdHkuXCIsXG4gICAgICBcIlRoZSBIZWFkIG9mIEhvdXNlaG9sZDogUGF5cyBhbGwgZmFtaWx5IGJpbGxzIG1vbnRobHkuIE5lZWRzIHRvIGF2b2lkIHJlLWVudGVyaW5nIDEzLWRpZ2l0IGNvZGVzIGV2ZXJ5IG1vbnRoLiBDb25zdGFudGx5IGZvcmdldHMgZHVlIGRhdGVzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJCdWlsZGluZyBNYW5hZ2VyXCIsXG4gICAgICAgIHJvbGU6IFwiQWdlIDU1K1wiLFxuICAgICAgICB0ZXh0OiBcIkkgbWFrZSBwaG90b2NvcGllcyBvZiBldmVyeSByZWNlaXB0IGFuZCBnaXZlIHRoZW0gdG8gcmVzaWRlbnRzLiBJIG5lZWQgcHJvb2YgdGhhdCBpdCdzIHBhaWQuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBIb3VzZWhvbGRcIixcbiAgICAgICAgcm9sZTogXCJQYXlzIGFsbCBmYW1pbHkgYmlsbHMgbW9udGhseVwiLFxuICAgICAgICB0ZXh0OiBcIkVudGVyaW5nIHRoaXMgMTMtZGlnaXQgY29kZSBldmVyeSBzaW5nbGUgbW9udGggaXMgdG9ydHVyZS5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc2lnaHRzXCIsXG4gICAgdGl0bGU6IFwiVGhlIEJyZWFrdGhyb3VnaCBJbnNpZ2h0c1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRocmVlIGluc2lnaHRzIGZ1bmRhbWVudGFsbHkgY2hhbmdlZCBvdXIgYXBwcm9hY2guXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJJbnNpZ2h0ICMxOiBVc2VycyB3ZXJlbid0IGNvbmZ1c2VkIGFib3V0IGNvdmVyYWdl4oCUdGhleSB3ZXJlIGNvbmZ1c2VkIGFib3V0IHVzLiBUaGV5IGhhZCBubyBpZGVhIHdoaWNoIGJpbGxzIHdlIHN1cHBvcnRlZCwgZm9yY2luZyB0cmlhbC1hbmQtZXJyb3IgdGhhdCBkZXN0cm95ZWQgdHJ1c3QuXCIsXG4gICAgICBcIkluc2lnaHQgIzI6IFRoZSByZWNlaXB0IHdhcyBldmVyeXRoaW5nLiBVc2VycyBuZWVkZWQgYW4gb2ZmaWNpYWwgZG9jdW1lbnQgdGhleSBjb3VsZCBzaG93IHRvIGZhbWlseSwgc2hhcmUgd2l0aCByZXNpZGVudHMsIG9yIHByZXNlbnQgdG8gbGFuZGxvcmRzLiBUaGlzIHdhc24ndCBhICduaWNlLXRvLWhhdmUn4oCUaXQgd2FzIHRoZSBjb3JlIGVtb3Rpb25hbCBuZWVkLlwiLFxuICAgICAgXCJJbnNpZ2h0ICMzOiBCaWxsIHBheW1lbnQgaXNuJ3QgYSBvbmUtdGltZSB0YXNr4oCUaXQncyBhIHJlY3VycmluZyBjeWNsZS4gT3VyIGZsb3cgdHJlYXRlZCBldmVyeSBwYXltZW50IGxpa2UgYSBuZXcgdHJhbnNhY3Rpb24sIGZvcmNpbmcgdXNlcnMgdG8gcmUtZW50ZXIgZXZlcnl0aGluZyBtb250aGx5LlwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJUaGUgcmVjZWlwdCB3YXNuJ3QgZGVjb3JhdGlvbuKAlGl0IHdhcyB0aGUgZW50aXJlIHZhbHVlIHByb3Bvc2l0aW9uXCIsXG4gICAgICBcIlBlb3BsZSBwYXkgdGhlIHNhbWUgYmlsbHMgcmVwZWF0ZWRseS4gVGhleSBuZWVkIGEgc3lzdGVtIHRoYXQgcmVtZW1iZXJzXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInBoaWxvc29waHlcIixcbiAgICB0aXRsZTogXCJEZXNpZ24gUGhpbG9zb3BoeVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpZ2l0aXplIHdoYXQgcGVvcGxlIGFscmVhZHkgZG8gaW4gdGhlIHBoeXNpY2FsIHdvcmxk4oCUdGhlbiBtYWtlIGl0IDEweCBiZXR0ZXIuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJLZWVwIG5vdGVib29rcyBvZiBiaWxsIElEcyDihpIgV2UgYnVpbHQgYSBkaWdpdGFsIGJpbGwgbGlzdFwiLFxuICAgICAgXCJTZXQgY2FsZW5kYXIgcmVtaW5kZXJzIOKGkiBXZSBidWlsdCBzbWFydCBub3RpZmljYXRpb25zXCIsXG4gICAgICBcIk1ha2UgcGhvdG9jb3BpZXMgb2YgcmVjZWlwdHMg4oaSIFdlIGNyZWF0ZWQgc2hhcmVhYmxlIG9mZmljaWFsIHJlY2VpcHRzXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRoZSBleHBlcmllbmNlIGhhZCB0byBmZWVsIG5hdHVyYWwgZnJvbSBkYXkgb25lLCBub3QgbGlrZSBsZWFybmluZyBuZXcgc29mdHdhcmVcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25zXCIsXG4gICAgdGl0bGU6IFwiVGhlIFNvbHV0aW9uc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlNpeCBpbnRlcmNvbm5lY3RlZCBzb2x1dGlvbnMgYWRkcmVzc2luZyBjb3JlIHVzZXIgbmVlZHMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJTYXZlZCBCaWxscyAmIE9uZS1UYXAgVXBkYXRlczogUmVnaXN0ZXIgYSBiaWxsIG9uY2UsIHVzZSBpdCBmb3JldmVyLiAnQ2hlY2sgZm9yIG5ldyBhbW91bnQnIGJ1dHRvbiBmZXRjaGVzIGxhdGVzdCBiaWxsIGluc3RhbnRseeKAlG5vIG1vcmUgcmUtZW50ZXJpbmcgMTMtZGlnaXQgY29kZXNcIixcbiAgICAgIFwiRGlnaXRhbCBCaWxsIE1hbmFnZW1lbnQgSHViOiBBbGwgYmlsbHMgaW4gb25lIG9yZ2FuaXplZCBsaXN0IHdpdGggc3RhdHVzIGxhYmVscyAoUGFpZCwgUGVuZGluZywgT3ZlcmR1ZSkuIEJhY2t3YXJkLWNvbXBhdGlibGU6IHJldHVybmluZyB1c2VycyBzYXcgaGlzdG9yeSBpbW1lZGlhdGVseVwiLFxuICAgICAgXCJTbWFydCBSZW1pbmRlcnM6IFNldCBjdXN0b20gcmVtaW5kZXJzIGZvciBlYWNoIGJpbGwgd2l0aCBwdXNoIG5vdGlmaWNhdGlvbnMgYmVmb3JlIGR1ZSBkYXRlc1wiLFxuICAgICAgXCJRUi9CYXJjb2RlIFNjYW5uaW5nOiBJbnN0YW50IGJpbGwgZW50cnkgdmlhIGNhbWVyYeKAlGNyaXRpY2FsIGZvciBvbGRlciB1c2VycyBhbmQgYnVzeSBwZXJzb25hc1wiLFxuICAgICAgXCJJbW1lZGlhdGUgVHJhbnNwYXJlbmN5OiBTdXBwb3J0ZWQgYmlsbCBwcm92aWRlcnMgc2hvd24gdXBmcm9udCB3aXRoIGxvZ29zLiBDbGVhciBndWlkYW5jZSBvbiB3aGF0IHdlIGNhbiBhbmQgY2FuJ3QgcHJvY2Vzc+KAlG5vIG1vcmUgdHJpYWwtYW5kLWVycm9yXCIsXG4gICAgICBcIk9mZmljaWFsLCBTaGFyZWFibGUgUmVjZWlwdHM6IFBERi1xdWFsaXR5IHJlY2VpcHRzIHdpdGggYWxsIGxlZ2FsIGRldGFpbHMuIE9uZS10YXAgc2hhcmluZyB2aWEgYW55IGNoYW5uZWzigJRidWlsdCBzcGVjaWZpY2FsbHkgZm9yIHRoZSAncHJvb2YnIHJlcXVpcmVtZW50XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImZhaWx1cmVcIixcbiAgICB0aXRsZTogXCJUaGUgRmFpbHVyZSBUaGF0IE1hZGUgRXZlcnl0aGluZyBCZXR0ZXJcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJWZXJzaW9uIDEgbGF1bmNoZWQgYW5kIGZhaWxlZCB3aXRoaW4gNDggaG91cnMuIEJpbGwgcGF5bWVudHMgZHJvcHBlZCA4MCUuIFdlIHJvbGxlZCBiYWNrIGltbWVkaWF0ZWx5LlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiV2hhdCBoYXBwZW5lZDogQmlsbHMgdG9vayA4LTEwIHNlY29uZHMgdG8gbG9hZCAod2Ugd2VyZSBmZXRjaGluZyBldmVyeXRoaW5nIGF1dG9tYXRpY2FsbHkpLiBObyBsb2FkaW5nIHN0YXRlcywgbm8gc2tlbGV0b24gVUksIG5vIHByb2dyZXNzIGluZGljYXRvcnMuIFVzZXJzIHNhdyBibGFuayBzY3JlZW5zLlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJXaGF0IHdlbnQgd3Jvbmc6IEdyZWF0IFVYIGRlc2lnbiBjYW4ndCBzYXZlIHBvb3IgdGVjaG5pY2FsIHBlcmZvcm1hbmNlLiBXZSBza2lwcGVkIHJlYWxpc3RpYyBsYXRlbmN5IHRlc3RpbmcsIGRpZG4ndCBzaW11bGF0ZSB3b3JzdC1jYXNlIG5ldHdvcmsgY29uZGl0aW9ucywgcHJpb3JpdGl6ZWQgYXV0b21hdGlvbiBvdmVyIHVzZXIgY29udHJvbFwiLFxuICAgICAgXCJXaGF0IGNoYW5nZWQ6IFN3aXRjaGVkIHRvIG1hbnVhbCAnQ2hlY2sgQW1vdW50JyBidXR0b25zIChpbnN0YW50IGZlZWRiYWNrKSwgYWRkZWQgbGF6eSBsb2FkaW5nICsgc2tlbGV0b24gc3RhdGVzIGV2ZXJ5d2hlcmUsIGltcGxlbWVudGVkIGNvbXByZWhlbnNpdmUgcHJlLWxhdW5jaCB0ZWNobmljYWwgdGVzdGluZywgY3JlYXRlZCBuZXcgY29tcGFueS13aWRlIHN0YW5kYXJkcyBmb3IgcGVyZm9ybWFuY2UgdGVzdGluZ1wiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJUaGlzIGZhaWx1cmUgYmVjYW1lIHRoZSBtb3N0IHZhbHVhYmxlIHBhcnQgb2YgdGhlIHByb2plY3RcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidmVyc2lvbjJcIixcbiAgICB0aXRsZTogXCJWZXJzaW9uIDI6IFRoZSBMYXVuY2ggVGhhdCBXb3JrZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBcm1lZCB3aXRoIGxlc3NvbnMgZnJvbSBmYWlsdXJlLCB3ZSBzaGlwcGVkIGEgc3RhYmxlLCBmYXN0LCB0cnVzdHdvcnRoeSBleHBlcmllbmNlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiTWFudWFsIGNvbnRyb2w6IFVzZXJzIHRyaWdnZXIgdXBkYXRlcyB3aGVuIHJlYWR5XCIsXG4gICAgICBcIkluc3RhbnQgZmVlZGJhY2s6IExvYWRpbmcgc3RhdGVzIGZvciBldmVyeSBhY3Rpb25cIixcbiAgICAgIFwiQmFja3dhcmQgY29tcGF0aWJpbGl0eTogWmVybyBsZWFybmluZyBjdXJ2ZSBmb3IgcmV0dXJuaW5nIHVzZXJzXCIsXG4gICAgICBcIk9mZmljaWFsIHJlY2VpcHRzOiBTb2x2ZWQgdGhlIGNvcmUgZW1vdGlvbmFsIG5lZWRcIixcbiAgICAgIFwiU21hcnQgcmVtaW5kZXJzOiBBZGRyZXNzZWQgZm9yZ2V0ZnVsbmVzc1wiLFxuICAgICAgXCJDbGVhciBjb21tdW5pY2F0aW9uOiBCdWlsdCBjb25maWRlbmNlIGZyb20gc2NyZWVuIG9uZVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbXBhY3RcIixcbiAgICB0aXRsZTogXCJUaGUgUmVzdWx0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiNCUg4oaSIDQ3JSBhZG9wdGlvbiByYXRlLiBUaGF0J3MgMTB4IGdyb3d0aCBpbiBiaWxsIHBheW1lbnQgc2hhcmUuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJCaWxsIHBheW1lbnQgd2VudCBmcm9tIGEgbmVnbGVjdGVkIGZlYXR1cmUgdG8gb25lIG9mIHRoZSBhcHAncyBwcmltYXJ5IHZhbHVlIHByb3Bvc2l0aW9ucy5cIixcbiAgICBdLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVHJ1c3Q6IE9mZmljaWFsIHJlY2VpcHRzIGFuZCBjbGVhciBjb21tdW5pY2F0aW9uXCIsXG4gICAgICBcIkVhc2U6IE9uZS10aW1lIHNldHVwLCByZWN1cnJpbmcgdXNlXCIsXG4gICAgICBcIlJlbGlhYmlsaXR5OiBGYXN0LCBzdGFibGUsIHByZWRpY3RhYmxlXCIsXG4gICAgICBcIkFsaWdubWVudDogTWF0Y2hlZCByZWFsLXdvcmxkIGJlaGF2aW9yXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkb3B0aW9uIHJhdGVcIixcbiAgICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibGVhcm5pbmdzXCIsXG4gICAgdGl0bGU6IFwiS2V5IFRha2Vhd2F5c1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkZpdmUgbGVzc29ucyBmcm9tIHRoaXMgcHJvamVjdC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkRlc2lnbiBkb2Vzbid0IGV4aXN0IGluIGlzb2xhdGlvbjogRXZlbiBwZXJmZWN0IFVYIGZhaWxzIHdpdGhvdXQgdGVjaG5pY2FsIHBlcmZvcm1hbmNlXCIsXG4gICAgICBcIkVtb3Rpb25hbCBuZWVkcyA9IEZ1bmN0aW9uYWwgbmVlZHM6IFRoZSByZWNlaXB0IHdhc24ndCBkZWNvcmF0aW9u4oCUaXQgd2FzIHRoZSBlbnRpcmUgdmFsdWUgcHJvcG9zaXRpb25cIixcbiAgICAgIFwiUmVhbCBiZWhhdmlvciA+IEFzc3VtcHRpb25zOiBVc2VycyBzaG93ZWQgdXMgd2hhdCB0aGV5IG5lZWRlZC4gV2UgbGlzdGVuZWRcIixcbiAgICAgIFwiQmFja3dhcmQgY29tcGF0aWJpbGl0eSBpcyB0cnVzdDogRXNwZWNpYWxseSBpbiBmaW5hbmNpYWwgcHJvZHVjdHMsIGZhbWlsaWFyaXR5ID0gY29uZmlkZW5jZVwiLFxuICAgICAgXCJGYWlsZWQgbGF1bmNoZXMgY2FuIGJlIHRoZSBiZXN0IGxlYXJuaW5nOiBPd25pbmcgbWlzdGFrZXMgYW5kIGl0ZXJhdGluZyBmYXN0IGJ1aWx0IGEgc3Ryb25nZXIgcHJvZHVjdCBhbmQgcHJvY2Vzc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJvcmdhbml6YXRpb25hbFwiLFxuICAgIHRpdGxlOiBcIk9yZ2FuaXphdGlvbmFsIEltcGFjdFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJleW9uZCB0aGUgcHJvZHVjdCwgdGhpcyBwcm9qZWN0IGNoYW5nZWQgaG93IHdlIHdvcmsuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJNYW5kYXRvcnkgcHJlLWxhdW5jaCBwZXJmb3JtYW5jZSB0ZXN0aW5nXCIsXG4gICAgICBcIlN0YWdpbmcgZW52aXJvbm1lbnRzIHdpdGggcmVhbC13b3JsZCBkYXRhXCIsXG4gICAgICBcIlJlcXVpcmVkIGxvYWRpbmcvc2tlbGV0b24gc3RhdGVzIGZvciBhbGwgaGVhdnkgb3BlcmF0aW9uc1wiLFxuICAgICAgXCJTaGFyZWQgc3RhbmRhcmRzIGFjcm9zcyBkZXNpZ24gYW5kIGVuZ2luZWVyaW5nXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRoZXNlIGNoYW5nZXMgaW1wcm92ZWQgZXZlcnkgZmVhdHVyZSB0aGF0IGNhbWUgYWZ0ZXJcIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkeUVudHJpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5RW50cnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICB0aXRsZTogXCJEaXZhciBTZWN1cmUgQ2FsbFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIlJlZHVjZWQgaGFyYXNzbWVudCBieSA2MCUgZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMgdGhyb3VnaCBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBsYXllciBpbnNpZGUgSXJhbidzIGxhcmdlc3QgbWFya2V0cGxhY2UuXCIsXG4gICAgZm9jdXM6IFwiVHJ1c3QgJiBTYWZldHlcIixcbiAgICBwYXRoOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50XCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiUmUtYXJjaGl0ZWN0ZWQgbGlmZWN5Y2xlIGpvdXJuZXlzIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCBjb252ZXJ0ZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIDYwSysgZGFpbHkgYWN0aXZlIHVzZXJzLlwiLFxuICAgIGZvY3VzOiBcIlJldGVudGlvbiAmIEdyb3d0aFwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICAgIHRpdGxlOiBcIlNldGFyZVllayBCaWxsIFBheW1lbnRcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJJbmNyZWFzZWQgYmlsbCBwYXltZW50IGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGF0IFNldGFyZSBBdmFsJ3MgU2V0YXJlWWVrIGFwcCBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgICBmb2N1czogXCJQcm9kdWN0IERlc2lnbiAmIEdyb3d0aFwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICB9LFxuXTtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIHNldGFyZU92ZXJ2aWV3LCBzZXRhcmVZZWtPdmVydmlldyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBkaXZhclN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IGRpdmFyT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbGAsXG4gIGltYWdlOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlRydXN0ICYgU2FmZXR5XCIsIFwiSGFyYXNzbWVudCBSZWR1Y3Rpb25cIiwgXCJNYXJrZXRwbGFjZVwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBkaXZhckNhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsIENhc2UgU3R1ZHkg4oCUIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBkaXZhclN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiTGlmZWN5Y2xlIHJlZGVzaWduIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCB0dXJuZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRgLFxuICBpbWFnZTogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUmV0ZW50aW9uXCIsIFwiTGlmZWN5Y2xlXCIsIFwiR3Jvd3RoIERlc2lnblwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50IENhc2UgU3R1ZHkg4oCUIERvdWJsaW5nIFJldGFpbmVkIFJldmVudWVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBsaWZlY3ljbGUgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAgICAgIGFsdDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IHNldGFyZVN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlWWVrU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlWWVrT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIHNldGFyZVlla092ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJSZWRlc2lnbmVkIGJpbGwgcGF5bWVudCBleHBlcmllbmNlIHRoYXQgaW5jcmVhc2VkIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGJ5IHNvbHZpbmcgdHJ1c3QsIHRyYW5zcGFyZW5jeSwgYW5kIHJlY3VycmluZyB3b3JrZmxvdyBjaGFsbGVuZ2VzLlwiLFxuICBhdXRob3I6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgfSxcbiAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvc2V0YXJlLXllay1iaWxsLXBheW1lbnRgLFxuICBpbWFnZTogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUHJvZHVjdCBEZXNpZ25cIiwgXCJHcm93dGhcIiwgXCJGaW50ZWNoXCIsIFwiVXNlciBFeHBlcmllbmNlXCIsIFwiU2V0YXJlIEF2YWxcIiwgXCJTZXRhcmVZZWtcIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrQ2FzZVN0dWR5TWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiU2V0YXJlWWVrIEJpbGwgUGF5bWVudCBDYXNlIFN0dWR5IOKAlCBGcm9tIDQlIHRvIDQ3JSBBZG9wdGlvbiBhdCBTZXRhcmUgQXZhbFwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBzZXRhcmVZZWtPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUmVkZXNpZ25lZCBTZXRhcmVZZWsncyBiaWxsIHBheW1lbnQgZXhwZXJpZW5jZSBhdCBTZXRhcmUgQXZhbCB0byBpbmNyZWFzZSBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JSBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICBoZWlnaHQ6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBzZXRhcmVZZWtTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBSUEsSUFBTSxnQ0FBZ0MsR0FBRyxjQUE2QztBQUFBLEVBQ3BGLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFFdkIsdUJBQ0UsdUJBOEpFLGVBOUpGO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixJQUFJLFFBQVE7QUFBQSxJQUNaLFNBQVMsRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUEsSUFDMUIsSUFBSSxFQUFFLFVBQVUsS0FBSyxJQUFJLFFBQVEsaUJBQWlCLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsSUFKeEUsVUE4SkU7QUFBQSxzQkF4SkEsdUJBZ0NFLGVBaENGO0FBQUEsUUFBTyxTQUFTLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRTtBQUFBLFFBQWpDLFVBZ0NFO0FBQUEsVUEvQkMsUUFBUSwyQkFDUCx1QkFFRSxvQkFGRjtBQUFBLFlBQVksU0FBUTtBQUFBLFlBQVUsT0FBTTtBQUFBLFlBQXBDLFVBQ0csUUFBUTtBQUFBLGFBRFgsaUNB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QUMzRTtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7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QUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLG1CQUFrRDtBQUFBLEVBQzdEO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFDRjs7O0FDOWlCQSxJQUFNLFVBQVUsYUFBVztBQUUzQixJQUFNLHNCQUFzQztBQUFBLEVBQzFDLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULE1BQU0sY0FBYztBQUFBLEVBQ3BCLGFBQ0UsY0FBYyxZQUNkO0FBQUEsRUFDRixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBQ0EsS0FBSyxHQUFHO0FBQUEsRUFDUixPQUFPLGNBQWMsVUFBVTtBQUFBLEVBQy9CLFNBQVMsQ0FBQyxrQkFBa0Isd0JBQXdCLGFBQWE7QUFDbkU7QUFFTyxJQUFNLHlCQUF1QztBQUFBLEVBQ2xELE9BQU87QUFBQSxFQUNQLGFBQ0UsY0FBYyxZQUNkO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsVUFBVTtBQUFBLE1BQzdCLEtBQUssY0FBYyxVQUFVO0FBQUEsTUFDN0IsT0FBTyxjQUFjLFVBQVUsU0FBUztBQUFBLE1BQ3hDLFFBQVEsY0FBYyxVQUFVLFVBQVU7QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjtBQUVBLElBQU0sdUJBQXVDO0FBQUEsRUFDM0MsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsTUFBTSxlQUFlO0FBQUEsRUFDckIsYUFDRTtBQUFBLEVBQ0YsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLEtBQUssR0FBRztBQUFBLEVBQ1IsT0FBTyxlQUFlLFVBQVU7QUFBQSxFQUNoQyxTQUFTLENBQUMsYUFBYSxhQUFhLGVBQWU7QUFDckQ7QUFFTyxJQUFNLDBCQUF3QztBQUFBLEVBQ25ELE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssZUFBZSxVQUFVO0FBQUEsTUFDOUIsS0FBSyxlQUFlLFVBQVU7QUFBQSxNQUM5QixPQUFPLGVBQWUsVUFBVSxTQUFTO0FBQUEsTUFDekMsUUFBUSxlQUFlLFVBQVUsVUFBVTtBQUFBLElBQzdDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCO0FBRUEsSUFBTSwwQkFBMEM7QUFBQSxFQUM5QyxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNLGtCQUFrQjtBQUFBLEVBQ3hCLGFBQ0Usa0JBQWtCLFlBQ2xCO0FBQUEsRUFDRixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBQ0EsS0FBSyxHQUFHO0FBQUEsRUFDUixPQUFPLGtCQUFrQixVQUFVO0FBQUEsRUFDbkMsU0FBUyxDQUFDLGtCQUFrQixVQUFVLFdBQVcsbUJBQW1CLGVBQWUsV0FBVztBQUNoRztBQUVPLElBQU0sNkJBQTJDO0FBQUEsRUFDdEQsT0FBTztBQUFBLEVBQ1AsYUFDRSxrQkFBa0IsWUFDbEI7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssa0JBQWtCLFVBQVU7QUFBQSxNQUNqQyxLQUFLLGtCQUFrQixVQUFVO0FBQUEsTUFDakMsT0FBTyxrQkFBa0IsVUFBVSxTQUFTO0FBQUEsTUFDNUMsUUFBUSxrQkFBa0IsVUFBVSxVQUFVO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7IiwKICAiZGVidWdJZCI6ICJFN0U0Q0VCRDJDOEU4QzgyNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
