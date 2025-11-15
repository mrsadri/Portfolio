import {
  Pill_default,
  createImageResource
} from "./chunk-m6wkdxbm.js";
import {
  site_default
} from "./chunk-aj4jdr23.js";
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
} from "./chunk-ygqezw1f.js";

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
            children: section.shortTitle ?? section.title
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
    sx: { py: 3 },
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
    title: "Discovery",
    shortTitle: "Discovery",
    eyebrow: "What Users Actually Needed",
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
    title: "Personas",
    shortTitle: "Personas",
    eyebrow: "Two Core Personas",
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
    title: "Insights",
    shortTitle: "Insights",
    eyebrow: "The Breakthrough Insights",
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
    title: "Learning from Failure",
    shortTitle: "Learning from Failure",
    eyebrow: "Version 1: The Failure That Made Everything Better",
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
    title: "Version 2",
    shortTitle: "Version 2",
    eyebrow: "The Launch That Worked",
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
    title: "Results",
    shortTitle: "Results",
    eyebrow: "Business Impact",
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
    title: "Learnings",
    shortTitle: "Learnings",
    eyebrow: "Key Takeaways",
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
    shortTitle: "Impact",
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

//# debugId=15821F65E259DC0764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXhwYW5kTW9yZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXYudHN4IiwgIi4uL3NyYy9zaGFyZWQvdXRpbHMvc3gudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb24udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIERpdmlkZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIkBzaGFyZWQvdWlcIjtcblxuY29uc3QgQ2FzZVN0dWR5U2VjdGlvbkNhcmRDb21wb25lbnQgPSAoeyBzZWN0aW9uIH06IHsgc2VjdGlvbjogQ2FzZVN0dWR5U2VjdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBpZD17c2VjdGlvbi5pZH1cbiAgICAgIHNwYWNpbmc9e3sgeHM6IDIuNSwgbWQ6IDMgfX1cbiAgICAgIHN4PXt7IG1heFdpZHRoOiA3NjAsIG14OiBcImF1dG9cIiwgc2Nyb2xsTWFyZ2luVG9wOiB7IHhzOiA5NiwgbWQ6IDE0MCB9IH19XG4gICAgPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEgfX0+XG4gICAgICAgIHtzZWN0aW9uLmV5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uLmV5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57c2VjdGlvbi50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIHtzZWN0aW9uLnN1bW1hcnkgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgXG4gICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS43LCBtZDogMS42NSB9LFxuICAgICAgICAgICAgICBtYjogeyB4czogMSwgbWQ6IDAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb24uc3VtbWFyeX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWN0aW9uLmJvZHk/Lm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBrZXk9e3BhcmFncmFwaC5zbGljZSgwLCAzMil9XG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS43LCBtZDogMS42NSB9LFxuICAgICAgICAgICAgICBtYjogaW5kZXggPCBzZWN0aW9uLmJvZHkhLmxlbmd0aCAtIDEgPyB7IHhzOiAyLCBtZDogMS41IH0gOiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuXG4gICAgICB7c2VjdGlvbi5idWxsZXRzICYmIChcbiAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MS41fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAge3NlY3Rpb24uYnVsbGV0cy5tYXAoKHBvaW50KSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIiBcbiAgICAgICAgICAgICAga2V5PXtwb2ludH0gXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiIFxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogeyB4czogMS43LCBtZDogMS42NSB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwb2ludH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMgJiYgKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICB7c2VjdGlvbi5oaWdobGlnaHRzLm1hcCgoaGlnaGxpZ2h0KSA9PiAoXG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBrZXk9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgICAgbGFiZWw9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wOClcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMTYpXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ubWV0cmljcyAmJiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7c2VjdGlvbi5tZXRyaWNzLm1hcCgobWV0cmljKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IHNlY3Rpb24ubWV0cmljcyEubGVuZ3RoID4gMSA/IDYgOiAxMiB9fSBrZXk9e21ldHJpYy5sYWJlbH0+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI0OSwyNTEsMjU1LDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e21ldHJpYy52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgc3g9e3sgZm9udFdlaWdodDogNjAwIH19PlxuICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAge21ldHJpYy5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21ldHJpYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLnF1b3RlcyAmJiBzZWN0aW9uLnF1b3Rlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLnF1b3Rlcy5tYXAoKHF1b3RlKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17YCR7cXVvdGUuYXV0aG9yfS0ke3F1b3RlLnRleHQuc2xpY2UoMCwgMjQpfWB9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA2KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiLCBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICDigJx7cXVvdGUudGV4dH3igJ1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7cXVvdGUuYXV0aG9yfSDigJQge3F1b3RlLnJvbGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5pbWFnZSAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgIHNyYz17c2VjdGlvbi5pbWFnZS5zcmN9XG4gICAgICAgICAgYWx0PXtzZWN0aW9uLmltYWdlLmFsdH1cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCIwIDE4cHggMjhweCByZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgICAgOiBcIjAgMjRweCA0MHB4IHJnYmEoMCwwLDAsMC40NSlcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IHsgeHM6IDMsIG1kOiA0IH0gfX0gLz5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuY29uc3QgQ2FzZVN0dWR5U2VjdGlvbkNhcmQgPSBtZW1vKFxuICBDYXNlU3R1ZHlTZWN0aW9uQ2FyZENvbXBvbmVudCxcbiAgKHByZXYsIG5leHQpID0+IHByZXYuc2VjdGlvbiA9PT0gbmV4dC5zZWN0aW9uLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQ7XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTUuODggOS4yOSAxMiAxMy4xNyA4LjEyIDkuMjlhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDQuNTkgNC41OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDBsNC41OS00LjU5Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDEtLjM5LS4zOC0xLjAzLS4zOS0xLjQyIDBcIlxufSksICdFeHBhbmRNb3JlUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHsgQnV0dG9uLCBDb2xsYXBzZSwgRGl2aWRlciwgSWNvbkJ1dHRvbiwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lLCB0eXBlIFN4UHJvcHMsIHR5cGUgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEV4cGFuZE1vcmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlUm91bmRlZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHR5cGUgTW91c2VFdmVudCBhcyBSZWFjdE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCJAc2hhcmVkL3V0aWxzL3N4XCI7XG5cbnR5cGUgQ2FzZVN0dWR5T3V0bGluZU5hdlByb3BzID0ge1xuICBzZWN0aW9uczogcmVhZG9ubHkgQ2FzZVN0dWR5U2VjdGlvbltdO1xuICBhY3RpdmVTZWN0aW9uSWQ6IHN0cmluZztcbiAgb25OYXZpZ2F0ZTogKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvdXRsaW5lTGFiZWw/OiBzdHJpbmc7XG4gIGNvbnRhaW5lclN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlPdXRsaW5lTmF2ID0gKHtcbiAgc2VjdGlvbnMsXG4gIGFjdGl2ZVNlY3Rpb25JZCxcbiAgb25OYXZpZ2F0ZSxcbiAgb3V0bGluZUxhYmVsID0gXCJPdXRsaW5lXCIsXG4gIGNvbnRhaW5lclN4LFxufTogQ2FzZVN0dWR5T3V0bGluZU5hdlByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoIWlzTW9iaWxlKTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJDYXNlIHN0dWR5IHNlY3Rpb25zXCJcbiAgICAgIHNwYWNpbmc9ezF9XG4gICAgICBzeD17bWVyZ2VTeChcbiAgICAgICAgKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgICAgICAgICBwb3NpdGlvbjogeyBtZDogXCJzdGlja3lcIiB9LFxuICAgICAgICAgIHRvcDogeyBtZDogMTQwIH0sXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDQpXCJcbiAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTQpXCIsXG4gICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1xuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjMyKVwiXG4gICAgICAgICAgfWAsXG4gICAgICAgIH0pLFxuICAgICAgICBjb250YWluZXJTeCxcbiAgICAgICl9XG4gICAgPlxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBzeD17eyBjdXJzb3I6IGlzTW9iaWxlID8gXCJwb2ludGVyXCIgOiBcImRlZmF1bHRcIiB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBpc01vYmlsZSAmJiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge291dGxpbmVMYWJlbH1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7aXNNb2JpbGUgJiYgKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtaW5XaWR0aDogNDQsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogNDQsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMnMgZWFzZVwiLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGV4cGFuZGVkID8gXCJyb3RhdGUoMTgwZGVnKVwiIDogXCJyb3RhdGUoMGRlZylcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtleHBhbmRlZCA/IFwiQ29sbGFwc2Ugb3V0bGluZVwiIDogXCJFeHBhbmQgb3V0bGluZVwifVxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEV4cGFuZE1vcmVSb3VuZGVkSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8Q29sbGFwc2UgaW49e2V4cGFuZGVkfSB0aW1lb3V0PVwiYXV0b1wiPlxuICAgICAgICA8RGl2aWRlciBzeD17eyBtYjogMSB9fSAvPlxuICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICBocmVmPXtgIyR7c2VjdGlvbi5pZH1gfVxuICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBvbk5hdmlnYXRlKGV2ZW50LCBzZWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1jdXJyZW50PXthY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHN4PXsodGhlbWUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVTZWN0aW9uSWQgPT09IHNlY3Rpb24uaWQ7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGlzQWN0aXZlID8gNjAwIDogNTAwLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjI4KVwiXG4gICAgICAgICAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICBweDogMS41LFxuICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogNDQsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yNClcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi5zaG9ydFRpdGxlID8/IHNlY3Rpb24udGl0bGV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5T3V0bGluZU5hdjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgU3hQcm9wcywgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBhcHBlbmQgPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KHRhcmdldDogU3hQcm9wczxUVGhlbWU+W10sIHZhbHVlPzogU3hQcm9wczxUVGhlbWU+KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiBhcHBlbmQodGFyZ2V0LCBpdGVtKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFyZ2V0LnB1c2godmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlU3ggPSA8VFRoZW1lIGV4dGVuZHMgVGhlbWU+KFxuICBiYXNlOiBTeFByb3BzPFRUaGVtZT4sXG4gIC4uLm92ZXJyaWRlczogQXJyYXk8U3hQcm9wczxUVGhlbWU+IHwgdW5kZWZpbmVkPlxuKTogU3hQcm9wczxUVGhlbWU+ID0+IHtcbiAgY29uc3QgZW50cmllczogU3hQcm9wczxUVGhlbWU+W10gPSBbXTtcbiAgYXBwZW5kKGVudHJpZXMsIGJhc2UpO1xuICBvdmVycmlkZXMuZm9yRWFjaCgodmFsdWUpID0+IGFwcGVuZChlbnRyaWVzLCB2YWx1ZSkpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBlbnRyaWVzWzBdITtcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzIGFzIFN4UHJvcHM8VFRoZW1lPjtcbn07XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlPdmVydmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWVyZ2VTeCB9IGZyb20gXCJAc2hhcmVkL3V0aWxzL3N4XCI7XG5cbnR5cGUgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uUHJvcHMgPSB7XG4gIGV5ZWJyb3c6IHN0cmluZztcbiAgb3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3O1xuICBzdWJ0aXRsZUZhbGxiYWNrPzogc3RyaW5nO1xuICBtZXRhVGl0bGU/OiBzdHJpbmc7XG4gIHN0YXRzVGl0bGU/OiBzdHJpbmc7XG4gIHN0YXRzVmFyaWFudD86IFwiZ3JhZGllbnRcIiB8IFwib3V0bGluZWRcIjtcbiAgaGVyb0JhY2tkcm9wU3g/OiBTeFByb3BzPFRoZW1lPjtcbiAgaGVyb1N1cmZhY2VTeD86IFN4UHJvcHM8VGhlbWU+O1xuICBzdGF0c0NhcmRTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgZGVmYXVsdEhlcm9CYWNrZHJvcFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgaW5zZXQ6IDAsXG4gIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xOCkpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuODgpLCByZ2JhKDM2LDY0LDEyMCwwLjcyKSlcIixcbiAgZmlsdGVyOiBcImJsdXIoNDhweClcIixcbiAgekluZGV4OiAtMSxcbn0pO1xuXG5jb25zdCBkZWZhdWx0SGVyb1N1cmZhY2VTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0OSwgMjUxLCAyNTUsIDAuODgpXCIgOiBcInJnYmEoMTMsIDIwLCAzNiwgMC44OClcIixcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiXG4gICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMzIpXCJcbiAgfWAsXG4gIGJveFNoYWRvdzpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcIjAgMjZweCA1MnB4IHJnYmEoMzQsIDg0LCAyNTUsIDAuMTQpXCJcbiAgICAgIDogXCIwIDI2cHggNTJweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCIsXG4gIHB4OiB7IHhzOiAzLCBtZDogNCB9LFxuICBweTogeyB4czogMywgbWQ6IDQgfSxcbn0pO1xuXG5jb25zdCBkZWZhdWx0U3RhdHNDYXJkU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTIpKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjgpLCByZ2JhKDM2LDY0LDEyMCwwLjYpKVwiLFxuICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pO1xuXG5jb25zdCBvdXRsaW5lZFN0YXRzQ2FyZFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkyKVwiIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxufSk7XG5cbmNvbnN0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIG92ZXJ2aWV3LFxuICBzdWJ0aXRsZUZhbGxiYWNrLFxuICBtZXRhVGl0bGUgPSBcIlByb2plY3QgZGV0YWlsc1wiLFxuICBzdGF0c1RpdGxlLFxuICBzdGF0c1ZhcmlhbnQgPSBcImdyYWRpZW50XCIsXG4gIGhlcm9CYWNrZHJvcFN4LFxuICBoZXJvU3VyZmFjZVN4LFxuICBzdGF0c0NhcmRTeCxcbn06IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3RhdHMgPSBvdmVydmlldy5zdGF0cztcbiAgY29uc3QgcmVzb2x2ZWRTdGF0c0NhcmRTeCA9XG4gICAgc3RhdHNWYXJpYW50ID09PSBcImdyYWRpZW50XCIgPyBkZWZhdWx0U3RhdHNDYXJkU3ggOiBvdXRsaW5lZFN0YXRzQ2FyZFN4O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IDMgfX0+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICA8Qm94IHN4PXttZXJnZVN4KGRlZmF1bHRIZXJvQmFja2Ryb3BTeCwgaGVyb0JhY2tkcm9wU3gpfSAvPlxuXG4gICAgICAgIDxCb3ggc3g9e21lcmdlU3goZGVmYXVsdEhlcm9TdXJmYWNlU3gsIGhlcm9TdXJmYWNlU3gpfT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMiB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCI+e292ZXJ2aWV3LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgeyhvdmVydmlldy5zdWJ0aXRsZSA/PyBzdWJ0aXRsZUZhbGxiYWNrKSAmJiAoXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAgICAgICAge292ZXJ2aWV3LnN1YnRpdGxlID8/IHN1YnRpdGxlRmFsbGJhY2t9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX0gc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHttZXRhVGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAgICAgICAge292ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMS4yNSwgbWQ6IDEuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgIHtzdGF0cyAmJiAoXG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICB7c3RhdHNUaXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdHNUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRzLm1hcCgoc3RhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMubGVuZ3RoID49IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgeHM6IDEyLCBzbTogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0cy5sZW5ndGggPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB4czogMTIsIHNtOiA2IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyB4czogMTIsIHNtOiAxMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGVsZXZhdGlvbj17MH0gc3g9e21lcmdlU3gocmVzb2x2ZWRTdGF0c0NhcmRTeCwgc3RhdHNDYXJkU3gpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0gc3g9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3RhdC52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS41NSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lcmdlU3ggfSBmcm9tIFwiQHNoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uUHJvcHMgPSB7XG4gIGV5ZWJyb3c6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc3R1ZGllczogcmVhZG9ubHkgQ2FzZVN0dWR5RW50cnlbXTtcbiAgcHJpbWFyeUN0YToge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2Vjb25kYXJ5Q3RhPzoge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YXJpYW50PzogXCJjb250YWluZWRcIiB8IFwib3V0bGluZWRcIjtcbiAgfTtcbiAgc2VjdGlvblN4PzogU3hQcm9wczxUaGVtZT47XG59O1xuXG5jb25zdCBkZWZhdWx0U2VjdGlvblN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQxLDI0NSwyNTUsMC44KSwgcmdiYSgyMjQsMjMzLDI1NSwwLjk0KSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTMsMjAsMzMsMC45KSwgcmdiYSgyMSwzMSw1MiwwLjkyKSlcIixcbn0pO1xuXG5jb25zdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgc3R1ZGllcyxcbiAgcHJpbWFyeUN0YSxcbiAgc2Vjb25kYXJ5Q3RhLFxuICBzZWN0aW9uU3gsXG59OiBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXttZXJnZVN4KGRlZmF1bHRTZWN0aW9uU3gsIHNlY3Rpb25TeCl9PlxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiA2IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9IH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDcyMCwgbXg6IHsgeHM6IFwiYXV0b1wiLCBtZDogMCB9LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAge3N0dWRpZXMubWFwKChzdHVkeSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17c3R1ZHkuaWR9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICB0bz17c3R1ZHkucGF0aH1cbiAgICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGdhcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5jYXJkLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS50b2tlbnMudHJhbnNpdGlvbi5ob3Zlcn0sIHRyYW5zZm9ybSAxNjBtcyBlYXNlYCxcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdHVkeS5mb2N1c31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdHVkeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAge3N0dWR5LmV4Y2VycHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGNhc2Ugc3R1ZHkg4oaSXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogMiwgc206IDMgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17cHJpbWFyeUN0YS50b31cbiAgICAgICAgICAgIHZhcmlhbnQ9e3ByaW1hcnlDdGEudmFyaWFudCA/PyBcImNvbnRhaW5lZFwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUN0YS5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17c2Vjb25kYXJ5Q3RhLnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PXtzZWNvbmRhcnlDdGEudmFyaWFudCA/PyBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlDdGEubGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlSZWxhdGVkU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB0eXBlIE1vdXNlRXZlbnQgYXMgUmVhY3RNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlTZWN0aW9uTGlzdCA9IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgZ2V0SW5pdGlhbFNlY3Rpb25JZCA9IChzZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbkxpc3QpID0+IHNlY3Rpb25zWzBdPy5pZCA/PyBcIlwiO1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uID0gKHNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uTGlzdCkgPT4ge1xuICBjb25zdCBzZWN0aW9uSWRzID0gdXNlTWVtbygoKSA9PiBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHNlY3Rpb24uaWQpLCBbc2VjdGlvbnNdKTtcblxuICBjb25zdCBbYWN0aXZlU2VjdGlvbklkLCBzZXRBY3RpdmVTZWN0aW9uSWRdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbFNlY3Rpb25JZChzZWN0aW9ucykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uSWRzLmluY2x1ZGVzKGFjdGl2ZVNlY3Rpb25JZCkpIHtcbiAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChnZXRJbml0aWFsU2VjdGlvbklkKHNlY3Rpb25zKSk7XG4gICAgfVxuICB9LCBbYWN0aXZlU2VjdGlvbklkLCBzZWN0aW9uSWRzLCBzZWN0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgaWYgKGhhc2ggJiYgc2VjdGlvbklkcy5pbmNsdWRlcyhoYXNoKSkge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGhhc2gpO1xuICAgIH1cbiAgfSwgW3NlY3Rpb25JZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnRzID0gc2VjdGlvbklkc1xuICAgICAgLm1hcCgoc2VjdGlvbklkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpKVxuICAgICAgLmZpbHRlcigoZWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEVsZW1lbnQgPT4gQm9vbGVhbihlbGVtZW50KSk7XG5cbiAgICBpZiAoc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUVudHJpZXMgPSBlbnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmludGVyc2VjdGlvblJhdGlvIC0gYS5pbnRlcnNlY3Rpb25SYXRpbyk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWaXNpYmxlID0gdmlzaWJsZUVudHJpZXNbMF07XG4gICAgICAgIGlmIChmaXJzdFZpc2libGUpIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoZmlyc3RWaXNpYmxlLnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHJvb3RNYXJnaW46IFwiLTQ1JSAwcHggLTQ1JVwiIH0sXG4gICAgKTtcblxuICAgIHNlY3Rpb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtzZWN0aW9uSWRzXSk7XG5cbiAgY29uc3QgaGFuZGxlT3V0bGluZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+LCB0YXJnZXRJZDogc3RyaW5nKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZCh0YXJnZXRJZCk7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9IyR7dGFyZ2V0SWR9YDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4geyBhY3RpdmVTZWN0aW9uSWQsIGhhbmRsZU91dGxpbmVDbGljayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5TmF2aWdhdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdXNlUmVsYXRlZENhc2VTdHVkaWVzID0gKFxuICBlbnRyaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeUVudHJ5PixcbiAgY3VycmVudElkOiBDYXNlU3R1ZHlFbnRyeVtcImlkXCJdLFxuKSA9PlxuICB1c2VNZW1vKFxuICAgICgpID0+IGVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaWQgIT09IGN1cnJlbnRJZCksXG4gICAgW2VudHJpZXMsIGN1cnJlbnRJZF0sXG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlbGF0ZWRDYXNlU3R1ZGllcztcblxuXG4iLAogICAgImltcG9ydCBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9kaXZhci1zZWN1cmUtY2FsbC1saXN0aW5nLnBuZ1wiO1xuaW1wb3J0IHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLWludGVydmlldy1zZXNzaW9uLmF2aWZcIjtcbmltcG9ydCBzZXRhcmVBdmFsVXNlckZsb3dBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLXVzZXItZmxvdy53ZWJwXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZVJlc291cmNlIH0gZnJvbSBcIkBzaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUVudHJ5LCBDYXNlU3R1ZHlPdmVydmlldywgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGl2YXJPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIldlIHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGluc2lkZSBEaXZhcuKAmXMgY2xvdGhpbmcgY2F0ZWdvcnkgYnkgYnVpbGRpbmcgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IG5vdyBwcm90ZWN0cyAyLjFNIHdlZWtseSB1c2Vycy5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgVVggRGVzaWduZXIgwrcgVHJ1c3QgJiBTYWZldHlcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiTWF5IOKAkyBKdW5lIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGVhbVwiLCB2YWx1ZTogXCJEZXNpZ24sIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgRW5naW5lZXJpbmcsIFN1cHBvcnRcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHsgdmFsdWU6IFwi4pa8NjAlXCIsIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiIH0sXG4gICAgeyB2YWx1ZTogXCIyLjFNXCIsIGxhYmVsOiBcIldlZWtseSBjYWxsZXJzIHNhZmVndWFyZGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0LFxuICAgIFwiRGl2YXIgc2VjdXJlIGNhbGwgbGlzdGluZ3MgaW50ZXJmYWNlXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXZhclNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpdmFyIGlzIElyYW7igJlzIGxhcmdlc3QgY2xhc3NpZmllZHMgbWFya2V0cGxhY2Ugd2l0aCA1M00rIHdlZWtseSB1c2Vycy4gVHJ1c3QgYW5kIHNhZmV0eSBpbmNpZGVudHMgY2FuIGNvbGxhcHNlIGVudGlyZSByZXZlbnVlIGNhdGVnb3JpZXMgaWYgbGVmdCB1bmNoZWNrZWQuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAgeyBsYWJlbDogXCJNYXJrZXRwbGFjZSBzY2FsZVwiLCB2YWx1ZTogXCI1M00rXCIsIGRlc2NyaXB0aW9uOiBcIldlZWtseSBidXllcnMgJiBzZWxsZXJzXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiVm9pY2UgZGVwZW5kZW5jZVwiLCB2YWx1ZTogXCIyLjFNXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGxzIHBsYWNlZCBldmVyeSB3ZWVrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiQWQgY29uc3VtcHRpb25cIiwgdmFsdWU6IFwiNkIrXCIsIGRlc2NyaXB0aW9uOiBcIk1vbnRobHkgYWQgdmlld3NcIiB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDbG90aGluZyBsaXN0aW5nc+KAlG1vc3RseSB3b21lbi1sZWTigJR3ZXJlIGhpdCBoYXJkZXN0IGJ5IGFidXNlLlwiLFxuICAgICAgXCJNYW51YWwgbW9kZXJhdGlvbiBjb3VsZG7igJl0IGtlZXAgdXA7IGxpcXVpZGl0eSBhbmQgdHJ1c3Qgd2VyZSBpbiBmcmVlIGZhbGwuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNyaXNpc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBDcmlzaXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJDdXN0b21lciBjYXJlIGNlbnRyZXMgd2VyZSBmbG9vZGVkIHdpdGggaGFyYXNzbWVudCByZXBvcnRzLiBTZWxsZXJzIGRlbGV0ZWQgbGlzdGluZ3Mgb3IgY2h1cm5lZCBlbnRpcmVseSwgZmVhcmluZyByZXBlYXQgaW5jaWRlbnRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSGFyYXNzZXJzIHNjcmFwZWQgcGhvbmUgbnVtYmVycyBmcm9tIGFkcyBhbmQgY2lyY3VsYXRlZCB0aGVtIGluIHByaXZhdGUgVGVsZWdyYW0gZ3JvdXBzLlwiLFxuICAgICAgXCJFdmVuIGFmdGVyIHZpY3RpbXMgZGVsZXRlZCBsaXN0aW5ncywgdGhlIGNhbGxzIGNvbnRpbnVlZCBiZWNhdXNlIG51bWJlcnMgd2VyZSBhbHJlYWR5IGV4cG9zZWQuXCIsXG4gICAgICBcIldpdGhvdXQgaW50ZXJ2ZW50aW9uLCBEaXZhciByaXNrZWQgbG9zaW5nIGEgY2F0ZWdvcnkgdGhhdCBhbmNob3JlZCBkYWlseSBlbmdhZ2VtZW50LlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJMYXlsYSwgMzJcIixcbiAgICAgICAgcm9sZTogXCJQcm9mZXNzaW9uYWwgYXJ0aXN0IHNlbGxpbmcgYmVzcG9rZSBjbG90aGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIkl0IHdhcyBpbmZ1cmlhdGluZy4gSSB0b29rIGRvd24gbXkgRGl2YXIgYWQgaG9waW5nIHRvIHN0b3AgdGhlIGNhbGxzLCBidXQgdGhleSBrZXB0IGNvbWluZy4gU29tZW9uZSB0b2xkIG1lIG15IG51bWJlciB3YXMgaW4gYSBUZWxlZ3JhbSBncm91cC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIGludGVydmlld2VkIGhhcmFzc2VkIHNlbGxlcnMgYW5kIGFuYWx5c2VkIGJlaGF2aW91cmFsIGRhdGEgdG8gdW5kZXJzdGFuZCBob3cgZXhwb3N1cmUgc2NhbGVkLiBUaGUgYnJlYWt0aHJvdWdoIGNhbWUgZnJvbSBjb25uZWN0aW5nIHF1YWxpdGF0aXZlIHN0b3JpZXMgdG8gcXVhbnRpdGF0aXZlIHNpZ25hbHMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQdWJsaWMgcGhvbmUgbnVtYmVycyB3ZXJlIHRoZSByb290IGNhdXNlIG9mIGV4cG9zdXJlLCBub3QgdGhlIG51bWJlciBvZiByZXBvcnRzLlwiLFxuICAgICAgXCJFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IGFkYXB0ZWQgYnkgdXNpbmcgaW4tYXBwIGNoYXQ7IG5ldyBzZWxsZXJzIG5lZWRlZCBwcm90ZWN0aXZlIGRlZmF1bHRzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdHJhdGVneVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbiBKb3VybmV5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgcmVmcmFtZWQgc3VjY2VzcyBmcm9tIOKAnHJlZHVjZSByZXBvcnRz4oCdIHRvIOKAnHJlZHVjZSBleHBvc3VyZS7igJ0gV2l0aCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIFN1cHBvcnQsIGFuZCBEYXRhLCB3ZSBldmFsdWF0ZWQgZXZlcnkgcGF0aCBhbmQgc3RyZXNzLXRlc3RlZCBlZGdlIGNhc2VzIGJlZm9yZSBjb21taXR0aW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRWR1Y2F0aW5nIHVzZXJzIGFib3V0IGhhcmFzc2VyIHRhY3RpY3Mgd291bGQgZXJvZGUgdHJ1c3QgYW5kIGRpc2NvdXJhZ2UgbGlzdGluZ3MuXCIsXG4gICAgICBcIkZ1bGwgVm9JUCB3YXMgY29zdC1wcm9oaWJpdGl2ZSwgZnJhZ2lsZSBhY3Jvc3MgZGV2aWNlIHR5cGVzLCBhbmQgaW5hY2Nlc3NpYmxlIHRvIDQ3JSBvZiBsZWdhY3kgQW5kcm9pZCB1c2Vycy5cIixcbiAgICAgIFwiVm9pY2UgcmVsYXkgd2l0aCBpbnRlcm1lZGlhcnkgbnVtYmVycyBwcm90ZWN0ZWQgc2VsbGVycyB3aXRob3V0IGNoYW5naW5nIHB1cmNoYXNlIGJlaGF2aW91cuKAlHRoaXMgYmVjYW1lIHRoZSBub3J0aCBzdGFyLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkEgMy1kYXkgcGlsb3QgaW4gdGhlIGNsb3RoaW5nIGNhdGVnb3J5IHJlc3VsdGVkIGluIGEgNTYlIGNhbGwgZmFpbHVyZSByYXRlLiBJbnN0ZWFkIG9mIHJldmVydGluZywgd2UgdHJlYXRlZCBldmVyeSBmYWlsdXJlIGFzIGEgZGVzaWduIHJlcXVpcmVtZW50LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciBiZWhhdmlvdXI6IHNlbGxlcnMgYmxvY2tlZCB1bmZhbWlsaWFyIG51bWJlcnM7IGJ1eWVycyByZWRpYWxsZWQgZnJvbSBjYWxsIGxvZ3M7IHJlcGVhdCBjb252ZXJzYXRpb25zIGJyb2tlIG1hcHBpbmcgd2luZG93cy5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGxvYWQ6IGNhbGwgdm9sdW1lIHNwaWtlZCBiZXlvbmQgZm9yZWNhc3RzIGFuZCBudW1iZXIgcG9vbHMgd2VyZSBleGhhdXN0ZWQuXCIsXG4gICAgICBcIkJ1c2luZXNzIHJpc2s6IGxvbmdlciBjYWxscyBpbmZsYXRlZCB0ZWxlY29tIGNvc3RzIGFuZCBhbm9ueW1pc2VkIG51bWJlcnMgYXR0cmFjdGVkIG9wcG9ydHVuaXN0aWMgc2NhbW1lcnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmluZW1lbnRcIixcbiAgICB0aXRsZTogXCJUaGUgUmVmaW5lZCBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHRyYW5zbGF0ZWQgZXZlcnkgcGlsb3QgaW5zaWdodCBpbnRvIHByb2R1Y3QgYW5kIHBsYXRmb3JtIGltcHJvdmVtZW50cyBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQmlkaXJlY3Rpb25hbCBtYXBwaW5nIGxldCBzZWxsZXJzIHJlY29ubmVjdCB3aXRob3V0IGV4cG9zaW5nIHJlYWwgbnVtYmVycy5cIixcbiAgICAgIFwiRXh0ZW5kZWQgbWFwcGluZyB3aW5kb3dzIGZyb20gMjAgc2Vjb25kcyB0byAxNSBtaW51dGVzIHJlZHVjZWQgZHJvcHBlZCBjYWxscy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyAo4oCcVGhpcyBpcyBhIHNlY3VyZSBjYWxsIGZyb20gRGl2YXLigKbigJ0pIHNldCBleHBlY3RhdGlvbnMgYW5kIGRldGVycmVkIHNjYW1tZXJzLlwiLFxuICAgICAgXCJBIHBvb2wgb2YgMTAwIGludGVybWVkaWFyeSBudW1iZXJzIGFzc2lnbmVkIHBlciBidXllci1zZWxsZXIgcGFpciBwcmV2ZW50ZWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5LCBjaGF0IGludGVncmF0aW9uLCBhbmQgYWQgbWFuYWdlbWVudCBsb2dzIGtlcHQgbGVnaXRpbWF0ZSByZWxhdGlvbnNoaXBzIGludGFjdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBZnRlciByb2xsb3V0LCBoYXJhc3NtZW50IHJlcG9ydHMgZHJvcHBlZCBkcmFtYXRpY2FsbHkgYW5kIHNlbGxlcnMgZmVsdCBzYWZlIGVub3VnaCB0byBrZWVwIGxpc3RpbmdzIGxpdmUuIE1vZGVyYXRpb24gdGVhbXMgcmVjb3ZlcmVkIGhvdXJzIGVhY2ggd2VlayB0aGF0IHdlcmUgcHJldmlvdXNseSBzcGVudCBvbiByZWFjdGl2ZSB0aWNrZXRzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDYwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gOCB3ZWVrcyBvZiBsYXVuY2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkIGRlbGV0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMjUlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZld2VyIHNlbGxlcnMgbGVhdmluZyB0aGUgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN1cHBvcnQgdGlja2V0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMTglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vcmUgdGltZSBmb3IgcHJvYWN0aXZlIG1vbml0b3JpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlYXJuaW5nc1wiLFxuICAgIHRpdGxlOiBcIktleSBMZWFybmluZ3NcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIG9uZeKAlGV4cG9zdXJlLCBub3QgcmVwb3J0cywgd2FzIHRoZSByb290LlwiLFxuICAgICAgXCJVc2VycyB3ZXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSByZXZlYWxlZCB0aGUgcmlnaHQgZGVmYXVsdHMuXCIsXG4gICAgICBcIkZhaWx1cmUgaXMgc2lnbmFsLiBUaGUgNTYlIHBpbG90IGZhaWx1cmUgZ2VuZXJhdGVkIGEgYmFja2xvZyBvZiBhY3Rpb25hYmxlIHJlcXVpcmVtZW50cy5cIixcbiAgICAgIFwiUGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcgdG8ga2VlcCBhYnVzZSB2ZWN0b3JzIGluIGNoZWNrLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZsZWN0aW9uXCIsXG4gICAgdGl0bGU6IFwiUmVmbGVjdGlvblwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHJlaW5mb3JjZWQgbXkgYmVsaWVmIHRoYXQgc29sdmluZyBoYXJkIHByb2JsZW1zIHN0YXJ0cyB3aXRoIHVuZGVyc3RhbmRpbmcgYmVoYXZpb3VyLiBCeSBibGVuZGluZyByZXNlYXJjaCwgZGF0YSwgYW5kIHJhcGlkIGl0ZXJhdGlvbiwgd2UgYnVpbHQgYSBzYWZldHkgbGF5ZXIgdGhhdCBzdGlsbCBwcm90ZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZWFjaCB3ZWVrLiBUaGUgaGFyYXNzbWVudCBwcm9ibGVtIG1heSBuZXZlciBkaXNhcHBlYXIgZW50aXJlbHksIGJ1dCBEaXZhciBpcyBzaWduaWZpY2FudGx5IHNhZmVyIGZvciB0aGUgdXNlcnMgd2hvIG5lZWQgaXQgbW9zdC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZU92ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzIGF0IFNldGFyZSBBdmFsXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJGZWIgMjAyMSDigJMgSmFuIDIwMjJcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIkRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBpbiA2IG1vbnRoc1wiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiMsOXXCIsXG4gICAgICBsYWJlbDogXCJSZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBY2hpZXZlZCB3aXRoaW4gdGhlIGZpcnN0IDYgbW9udGhzIG9mIHJvbGxvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIis2MEtcIixcbiAgICAgIGxhYmVsOiBcIkRhaWx5IGFjdGl2ZSB1c2Vyc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVmZXJyYWwgY29ob3J0IGNvbnZlcnRlZCB0byBoaWdoLWludGVudCBEQVVzXCIsXG4gICAgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQsXG4gICAgXCJTZXRhcmUgQXZhbCBjdXN0b21lciBlbmdhZ2VtZW50IGludGVydmlldyBzZXNzaW9uXCIsXG4gICAgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiA2MzAgfSxcbiAgKSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIkZyb20gNCUgdG8gNDclOiBIb3cgSSBUdXJuZWQgYSBGYWlsaW5nIEZlYXR1cmUgSW50byBhIENvcmUgUHJvZHVjdCBWYWx1ZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkRlc3BpdGUgbWlsbGlvbnMgb2YgYWN0aXZlIHVzZXJzLCBvbmx5IDQlIG9mIHBheW1lbnRzIHdlcmUgYmlsbHMuIFNlc3Npb24gcmVjb3JkaW5ncyBzaG93ZWQgdXNlcnMgd2VyZSB0cnlpbmcgYnV0IGZhaWxpbmcuIEkgbGVkIHRoZSBjb21wbGV0ZSByZWRlc2lnbiBmcm9tIHJlc2VhcmNoIHRocm91Z2ggbGF1bmNoLCBpbmNyZWFzaW5nIGFkb3B0aW9uIHRvIDQ3JS5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCIyMDIyIOKAkyAyMDIzXCIgfSxcbiAgICB7IGxhYmVsOiBcIkNvbXBhbnlcIiwgdmFsdWU6IFwiU2V0YXJlIEF2YWwgKFNldGFyZVllayBhcHApXCIgfSxcbiAgICB7IGxhYmVsOiBcIkNvbnN0cmFpbnRcIiwgdmFsdWU6IFwiU29sZSBkZXNpZ25lcuKAlGJhbGFuY2VkIGRlZXAgcmVzZWFyY2ggd2l0aCByYXBpZCBleGVjdXRpb25cIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjQlIOKGkiA0NyVcIixcbiAgICAgIGxhYmVsOiBcIkFkb3B0aW9uIHJhdGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIjEweCBncm93dGggaW4gYmlsbCBwYXltZW50IHNoYXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCI4MCVcIixcbiAgICAgIGxhYmVsOiBcIkRyb3AgcmVkdWN0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBZnRlciBWZXJzaW9uIDIgcGVyZm9ybWFuY2UgZml4ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjFNK1wiLFxuICAgICAgbGFiZWw6IFwiVXNlcnNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldGFyZVllayBwbGF0Zm9ybSBzY2FsZVwiLFxuICAgIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgc2V0YXJlQXZhbFVzZXJGbG93QXNzZXQsXG4gICAgXCJTZXRhcmVZZWsgYmlsbCBwYXltZW50IHVzZXIgZmxvd1wiLFxuICAgIHsgd2lkdGg6IDEyMDAsIGhlaWdodDogNjMwIH0sXG4gICksXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIlRoZSBDaGFsbGVuZ2VcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJEZXNwaXRlIG1pbGxpb25zIG9mIGFjdGl2ZSB1c2Vycywgb25seSA0JSBvZiBwYXltZW50cyB3ZXJlIGJpbGxzLiBTZXNzaW9uIHJlY29yZGluZ3Mgc2hvd2VkIHVzZXJzIHdlcmUgdHJ5aW5nIGJ1dCBmYWlsaW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiOTYlIG9mIHBheW1lbnRzIHdlcmUgbm90IGJpbGxzXCIsXG4gICAgICBcIkhpZ2ggZHJvcC1vZmYgcmF0ZXMgYXQgc3BlY2lmaWMgc3RlcHNcIixcbiAgICAgIFwiVXNlcnMgc3BlbmRpbmcgdW51c3VhbGx5IGxvbmcgb24gc2luZ2xlIHNjcmVlbnNcIixcbiAgICAgIFwiTWFueSBhYmFuZG9uZWQgYXR0ZW1wdHMgYmVmb3JlIHBheW1lbnQgY29uZmlybWF0aW9uXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIktleSBxdWVzdGlvblwiLFxuICAgICAgICByb2xlOiBcIlJlc2VhcmNoIGluc2lnaHRcIixcbiAgICAgICAgdGV4dDogXCJQZW9wbGUgcGF5IGJpbGxzIGV2ZXJ5IG1vbnRo4oCUaXQncyBub3Qgb3B0aW9uYWwuIFNvIHdoeSBhcmUgdGhleSBhdm9pZGluZyBvdXIgYXBwP1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVGhpcyB3YXNuJ3QgYWJvdXQgYWRkaW5nIGZlYXR1cmVzLiBTb21ldGhpbmcgZnVuZGFtZW50YWwgd2FzIGJyb2tlbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiYWJvdXQtc2V0YXJleWVrXCIsXG4gICAgdGl0bGU6IFwiQWJvdXQgU2V0YXJlWWVrXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSXJhbidzIGxhcmdlc3QgZmludGVjaCBwbGF0Zm9ybSBzZXJ2aW5nIG1pbGxpb25zIG9mIHVzZXJzIGZvciBldmVyeWRheSBmaW5hbmNpYWwgdHJhbnNhY3Rpb25zLlwiLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVG9wIDEwIEZpbmFuY2UgQXBwXCIsXG4gICAgICBcIk1hcmtldCBMZWFkZXJcIixcbiAgICAgIFwiMTBNKyBBY3RpdmUgVXNlcnNcIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiTW9udGhseSBBY3RpdmUgVXNlcnNcIixcbiAgICAgICAgdmFsdWU6IFwiMTAuNk0rXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk5hdGlvbndpZGUgZmludGVjaCBwbGF0Zm9ybVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVG90YWwgSW5zdGFsbHNcIixcbiAgICAgICAgdmFsdWU6IFwiMi4zNk0rXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdyb3dpbmcgdXNlciBiYXNlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYm9keTogW1xuICAgICAgXCJUaGUgb3Bwb3J0dW5pdHk6IEJpbGwgcGF5bWVudCBpcyBhIGhpZ2gtZnJlcXVlbmN5LCBoaWdoLXN0cmVzcyB0YXNrIHRoYXQgZXZlcnkgaG91c2Vob2xkIGZhY2VzIG1vbnRobHkuIElmIHdlIGNvdWxkIHNvbHZlIGl0IHdlbGwsIHdlJ2QgYmVjb21lIGluZGlzcGVuc2FibGUuXCIsXG4gICAgICBcIlRoZSBwcm9ibGVtOiBXZSBoYWQgdGhlIGZlYXR1cmUsIGJ1dCBhbG1vc3Qgbm9ib2R5IHVzZWQgaXQuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJvbGVcIixcbiAgICB0aXRsZTogXCJNeSBSb2xlXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXLigJRsZWQgY29tcGxldGUgcmVkZXNpZ24gZnJvbSByZXNlYXJjaCB0aHJvdWdoIGxhdW5jaC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXIgcmVzZWFyY2ggJiBzeW50aGVzaXNcIixcbiAgICAgIFwiVVgvVUkgZGVzaWduXCIsXG4gICAgICBcIlByb3RvdHlwaW5nICYgdGVzdGluZ1wiLFxuICAgICAgXCJDb2xsYWJvcmF0aW9uIG9uIGltcGxlbWVudGF0aW9uICYgcm9sbG91dFwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDb25zdHJhaW50OiBTb2xlIGRlc2lnbmVy4oCUYmFsYW5jZWQgZGVlcCByZXNlYXJjaCB3aXRoIHJhcGlkIGV4ZWN1dGlvblwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkaXNjb3ZlcnlcIixcbiAgICB0aXRsZTogXCJEaXNjb3ZlcnlcIixcbiAgICBzaG9ydFRpdGxlOiBcIkRpc2NvdmVyeVwiLFxuICAgIGV5ZWJyb3c6IFwiV2hhdCBVc2VycyBBY3R1YWxseSBOZWVkZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJNdWx0aS1tZXRob2QgcmVzZWFyY2ggY29tYmluaW5nIHF1YWxpdGF0aXZlIGludGVydmlld3MsIGNvbnRleHR1YWwgaW5xdWlyeSwgZGlnaXRhbCBiZWhhdmlvciBhbmFseXNpcywgYW5kIHF1YW50aXRhdGl2ZSBwYXR0ZXJucy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlF1YWxpdGF0aXZlOiBJbi1kZXB0aCBpbnRlcnZpZXdzIHdpdGggYnVpbGRpbmcgbWFuYWdlcnMsIGhlYWRzIG9mIGhvdXNlaG9sZHMsIGFuZCBldmVyeWRheSB1c2Vyc1wiLFxuICAgICAgXCJDb250ZXh0dWFsIGlucXVpcnk6IE9ic2VydmluZyBiaWxsIHBheW1lbnQgaW4gcmVhbCBjb250ZXh0c1wiLFxuICAgICAgXCJFdGhub2dyYXBoaWMgZGV0YWlsczogU3R1ZHlpbmcgYSBidWlsZGluZyBtYW5hZ2VyJ3MgcGh5c2ljYWwgbm90ZWJvb2tcIixcbiAgICAgIFwiRGlnaXRhbCBiZWhhdmlvcjogU2Vzc2lvbiByZWNvcmRpbmdzLCBhcHAgc3RvcmUgcmV2aWV3cywgc29jaWFsIG1lZGlhIHNlbnRpbWVudFwiLFxuICAgICAgXCJRdWFudGl0YXRpdmU6IERyb3Atb2ZmIGFuYWx5c2lzIGFuZCBiZWhhdmlvciBwYXR0ZXJuc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwZXJzb25hc1wiLFxuICAgIHRpdGxlOiBcIlBlcnNvbmFzXCIsXG4gICAgc2hvcnRUaXRsZTogXCJQZXJzb25hc1wiLFxuICAgIGV5ZWJyb3c6IFwiVHdvIENvcmUgUGVyc29uYXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUd28gZGlzdGluY3QgcGVyc29uYXMgZW1lcmdlZCB3aXRoIGRpZmZlcmVudCBuZWVkcyBkcml2aW5nIGV2ZXJ5IGRlc2lnbiBkZWNpc2lvbi5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBCdWlsZGluZyBNYW5hZ2VyIChBZ2UgNTUrKTogTWFuYWdlcyB1dGlsaXRpZXMgZm9yIGVudGlyZSBhcGFydG1lbnQgYnVpbGRpbmcuIE5lZWRzIG9mZmljaWFsLCBzaGFyZWFibGUgZG9jdW1lbnRhdGlvbi4gWmVybyB0b2xlcmFuY2UgZm9yIGFtYmlndWl0eS5cIixcbiAgICAgIFwiVGhlIEhlYWQgb2YgSG91c2Vob2xkOiBQYXlzIGFsbCBmYW1pbHkgYmlsbHMgbW9udGhseS4gTmVlZHMgdG8gYXZvaWQgcmUtZW50ZXJpbmcgMTMtZGlnaXQgY29kZXMgZXZlcnkgbW9udGguIENvbnN0YW50bHkgZm9yZ2V0cyBkdWUgZGF0ZXMuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkJ1aWxkaW5nIE1hbmFnZXJcIixcbiAgICAgICAgcm9sZTogXCJBZ2UgNTUrXCIsXG4gICAgICAgIHRleHQ6IFwiSSBtYWtlIHBob3RvY29waWVzIG9mIGV2ZXJ5IHJlY2VpcHQgYW5kIGdpdmUgdGhlbSB0byByZXNpZGVudHMuIEkgbmVlZCBwcm9vZiB0aGF0IGl0J3MgcGFpZC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEhvdXNlaG9sZFwiLFxuICAgICAgICByb2xlOiBcIlBheXMgYWxsIGZhbWlseSBiaWxscyBtb250aGx5XCIsXG4gICAgICAgIHRleHQ6IFwiRW50ZXJpbmcgdGhpcyAxMy1kaWdpdCBjb2RlIGV2ZXJ5IHNpbmdsZSBtb250aCBpcyB0b3J0dXJlLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJJbnNpZ2h0c1wiLFxuICAgIHNob3J0VGl0bGU6IFwiSW5zaWdodHNcIixcbiAgICBleWVicm93OiBcIlRoZSBCcmVha3Rocm91Z2ggSW5zaWdodHNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJlZSBpbnNpZ2h0cyBmdW5kYW1lbnRhbGx5IGNoYW5nZWQgb3VyIGFwcHJvYWNoLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW5zaWdodCAjMTogVXNlcnMgd2VyZW4ndCBjb25mdXNlZCBhYm91dCBjb3ZlcmFnZeKAlHRoZXkgd2VyZSBjb25mdXNlZCBhYm91dCB1cy4gVGhleSBoYWQgbm8gaWRlYSB3aGljaCBiaWxscyB3ZSBzdXBwb3J0ZWQsIGZvcmNpbmcgdHJpYWwtYW5kLWVycm9yIHRoYXQgZGVzdHJveWVkIHRydXN0LlwiLFxuICAgICAgXCJJbnNpZ2h0ICMyOiBUaGUgcmVjZWlwdCB3YXMgZXZlcnl0aGluZy4gVXNlcnMgbmVlZGVkIGFuIG9mZmljaWFsIGRvY3VtZW50IHRoZXkgY291bGQgc2hvdyB0byBmYW1pbHksIHNoYXJlIHdpdGggcmVzaWRlbnRzLCBvciBwcmVzZW50IHRvIGxhbmRsb3Jkcy4gVGhpcyB3YXNuJ3QgYSAnbmljZS10by1oYXZlJ+KAlGl0IHdhcyB0aGUgY29yZSBlbW90aW9uYWwgbmVlZC5cIixcbiAgICAgIFwiSW5zaWdodCAjMzogQmlsbCBwYXltZW50IGlzbid0IGEgb25lLXRpbWUgdGFza+KAlGl0J3MgYSByZWN1cnJpbmcgY3ljbGUuIE91ciBmbG93IHRyZWF0ZWQgZXZlcnkgcGF5bWVudCBsaWtlIGEgbmV3IHRyYW5zYWN0aW9uLCBmb3JjaW5nIHVzZXJzIHRvIHJlLWVudGVyIGV2ZXJ5dGhpbmcgbW9udGhseS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVGhlIHJlY2VpcHQgd2Fzbid0IGRlY29yYXRpb27igJRpdCB3YXMgdGhlIGVudGlyZSB2YWx1ZSBwcm9wb3NpdGlvblwiLFxuICAgICAgXCJQZW9wbGUgcGF5IHRoZSBzYW1lIGJpbGxzIHJlcGVhdGVkbHkuIFRoZXkgbmVlZCBhIHN5c3RlbSB0aGF0IHJlbWVtYmVyc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwaGlsb3NvcGh5XCIsXG4gICAgdGl0bGU6IFwiRGVzaWduIFBoaWxvc29waHlcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJEaWdpdGl6ZSB3aGF0IHBlb3BsZSBhbHJlYWR5IGRvIGluIHRoZSBwaHlzaWNhbCB3b3JsZOKAlHRoZW4gbWFrZSBpdCAxMHggYmV0dGVyLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiS2VlcCBub3RlYm9va3Mgb2YgYmlsbCBJRHMg4oaSIFdlIGJ1aWx0IGEgZGlnaXRhbCBiaWxsIGxpc3RcIixcbiAgICAgIFwiU2V0IGNhbGVuZGFyIHJlbWluZGVycyDihpIgV2UgYnVpbHQgc21hcnQgbm90aWZpY2F0aW9uc1wiLFxuICAgICAgXCJNYWtlIHBob3RvY29waWVzIG9mIHJlY2VpcHRzIOKGkiBXZSBjcmVhdGVkIHNoYXJlYWJsZSBvZmZpY2lhbCByZWNlaXB0c1wiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJUaGUgZXhwZXJpZW5jZSBoYWQgdG8gZmVlbCBuYXR1cmFsIGZyb20gZGF5IG9uZSwgbm90IGxpa2UgbGVhcm5pbmcgbmV3IHNvZnR3YXJlXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNvbHV0aW9uc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbnNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTaXggaW50ZXJjb25uZWN0ZWQgc29sdXRpb25zIGFkZHJlc3NpbmcgY29yZSB1c2VyIG5lZWRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiU2F2ZWQgQmlsbHMgJiBPbmUtVGFwIFVwZGF0ZXM6IFJlZ2lzdGVyIGEgYmlsbCBvbmNlLCB1c2UgaXQgZm9yZXZlci4gJ0NoZWNrIGZvciBuZXcgYW1vdW50JyBidXR0b24gZmV0Y2hlcyBsYXRlc3QgYmlsbCBpbnN0YW50bHnigJRubyBtb3JlIHJlLWVudGVyaW5nIDEzLWRpZ2l0IGNvZGVzXCIsXG4gICAgICBcIkRpZ2l0YWwgQmlsbCBNYW5hZ2VtZW50IEh1YjogQWxsIGJpbGxzIGluIG9uZSBvcmdhbml6ZWQgbGlzdCB3aXRoIHN0YXR1cyBsYWJlbHMgKFBhaWQsIFBlbmRpbmcsIE92ZXJkdWUpLiBCYWNrd2FyZC1jb21wYXRpYmxlOiByZXR1cm5pbmcgdXNlcnMgc2F3IGhpc3RvcnkgaW1tZWRpYXRlbHlcIixcbiAgICAgIFwiU21hcnQgUmVtaW5kZXJzOiBTZXQgY3VzdG9tIHJlbWluZGVycyBmb3IgZWFjaCBiaWxsIHdpdGggcHVzaCBub3RpZmljYXRpb25zIGJlZm9yZSBkdWUgZGF0ZXNcIixcbiAgICAgIFwiUVIvQmFyY29kZSBTY2FubmluZzogSW5zdGFudCBiaWxsIGVudHJ5IHZpYSBjYW1lcmHigJRjcml0aWNhbCBmb3Igb2xkZXIgdXNlcnMgYW5kIGJ1c3kgcGVyc29uYXNcIixcbiAgICAgIFwiSW1tZWRpYXRlIFRyYW5zcGFyZW5jeTogU3VwcG9ydGVkIGJpbGwgcHJvdmlkZXJzIHNob3duIHVwZnJvbnQgd2l0aCBsb2dvcy4gQ2xlYXIgZ3VpZGFuY2Ugb24gd2hhdCB3ZSBjYW4gYW5kIGNhbid0IHByb2Nlc3PigJRubyBtb3JlIHRyaWFsLWFuZC1lcnJvclwiLFxuICAgICAgXCJPZmZpY2lhbCwgU2hhcmVhYmxlIFJlY2VpcHRzOiBQREYtcXVhbGl0eSByZWNlaXB0cyB3aXRoIGFsbCBsZWdhbCBkZXRhaWxzLiBPbmUtdGFwIHNoYXJpbmcgdmlhIGFueSBjaGFubmVs4oCUYnVpbHQgc3BlY2lmaWNhbGx5IGZvciB0aGUgJ3Byb29mJyByZXF1aXJlbWVudFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJmYWlsdXJlXCIsXG4gICAgdGl0bGU6IFwiTGVhcm5pbmcgZnJvbSBGYWlsdXJlXCIsXG4gICAgc2hvcnRUaXRsZTogXCJMZWFybmluZyBmcm9tIEZhaWx1cmVcIixcbiAgICBleWVicm93OiBcIlZlcnNpb24gMTogVGhlIEZhaWx1cmUgVGhhdCBNYWRlIEV2ZXJ5dGhpbmcgQmV0dGVyXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVmVyc2lvbiAxIGxhdW5jaGVkIGFuZCBmYWlsZWQgd2l0aGluIDQ4IGhvdXJzLiBCaWxsIHBheW1lbnRzIGRyb3BwZWQgODAlLiBXZSByb2xsZWQgYmFjayBpbW1lZGlhdGVseS5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIldoYXQgaGFwcGVuZWQ6IEJpbGxzIHRvb2sgOC0xMCBzZWNvbmRzIHRvIGxvYWQgKHdlIHdlcmUgZmV0Y2hpbmcgZXZlcnl0aGluZyBhdXRvbWF0aWNhbGx5KS4gTm8gbG9hZGluZyBzdGF0ZXMsIG5vIHNrZWxldG9uIFVJLCBubyBwcm9ncmVzcyBpbmRpY2F0b3JzLiBVc2VycyBzYXcgYmxhbmsgc2NyZWVucy5cIixcbiAgICBdLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiV2hhdCB3ZW50IHdyb25nOiBHcmVhdCBVWCBkZXNpZ24gY2FuJ3Qgc2F2ZSBwb29yIHRlY2huaWNhbCBwZXJmb3JtYW5jZS4gV2Ugc2tpcHBlZCByZWFsaXN0aWMgbGF0ZW5jeSB0ZXN0aW5nLCBkaWRuJ3Qgc2ltdWxhdGUgd29yc3QtY2FzZSBuZXR3b3JrIGNvbmRpdGlvbnMsIHByaW9yaXRpemVkIGF1dG9tYXRpb24gb3ZlciB1c2VyIGNvbnRyb2xcIixcbiAgICAgIFwiV2hhdCBjaGFuZ2VkOiBTd2l0Y2hlZCB0byBtYW51YWwgJ0NoZWNrIEFtb3VudCcgYnV0dG9ucyAoaW5zdGFudCBmZWVkYmFjayksIGFkZGVkIGxhenkgbG9hZGluZyArIHNrZWxldG9uIHN0YXRlcyBldmVyeXdoZXJlLCBpbXBsZW1lbnRlZCBjb21wcmVoZW5zaXZlIHByZS1sYXVuY2ggdGVjaG5pY2FsIHRlc3RpbmcsIGNyZWF0ZWQgbmV3IGNvbXBhbnktd2lkZSBzdGFuZGFyZHMgZm9yIHBlcmZvcm1hbmNlIHRlc3RpbmdcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVGhpcyBmYWlsdXJlIGJlY2FtZSB0aGUgbW9zdCB2YWx1YWJsZSBwYXJ0IG9mIHRoZSBwcm9qZWN0XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInZlcnNpb24yXCIsXG4gICAgdGl0bGU6IFwiVmVyc2lvbiAyXCIsXG4gICAgc2hvcnRUaXRsZTogXCJWZXJzaW9uIDJcIixcbiAgICBleWVicm93OiBcIlRoZSBMYXVuY2ggVGhhdCBXb3JrZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBcm1lZCB3aXRoIGxlc3NvbnMgZnJvbSBmYWlsdXJlLCB3ZSBzaGlwcGVkIGEgc3RhYmxlLCBmYXN0LCB0cnVzdHdvcnRoeSBleHBlcmllbmNlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiTWFudWFsIGNvbnRyb2w6IFVzZXJzIHRyaWdnZXIgdXBkYXRlcyB3aGVuIHJlYWR5XCIsXG4gICAgICBcIkluc3RhbnQgZmVlZGJhY2s6IExvYWRpbmcgc3RhdGVzIGZvciBldmVyeSBhY3Rpb25cIixcbiAgICAgIFwiQmFja3dhcmQgY29tcGF0aWJpbGl0eTogWmVybyBsZWFybmluZyBjdXJ2ZSBmb3IgcmV0dXJuaW5nIHVzZXJzXCIsXG4gICAgICBcIk9mZmljaWFsIHJlY2VpcHRzOiBTb2x2ZWQgdGhlIGNvcmUgZW1vdGlvbmFsIG5lZWRcIixcbiAgICAgIFwiU21hcnQgcmVtaW5kZXJzOiBBZGRyZXNzZWQgZm9yZ2V0ZnVsbmVzc1wiLFxuICAgICAgXCJDbGVhciBjb21tdW5pY2F0aW9uOiBCdWlsdCBjb25maWRlbmNlIGZyb20gc2NyZWVuIG9uZVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbXBhY3RcIixcbiAgICB0aXRsZTogXCJSZXN1bHRzXCIsXG4gICAgc2hvcnRUaXRsZTogXCJSZXN1bHRzXCIsXG4gICAgZXllYnJvdzogXCJCdXNpbmVzcyBJbXBhY3RcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCI0JSDihpIgNDclIGFkb3B0aW9uIHJhdGUuIFRoYXQncyAxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZS5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIkJpbGwgcGF5bWVudCB3ZW50IGZyb20gYSBuZWdsZWN0ZWQgZmVhdHVyZSB0byBvbmUgb2YgdGhlIGFwcCdzIHByaW1hcnkgdmFsdWUgcHJvcG9zaXRpb25zLlwiLFxuICAgIF0sXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUcnVzdDogT2ZmaWNpYWwgcmVjZWlwdHMgYW5kIGNsZWFyIGNvbW11bmljYXRpb25cIixcbiAgICAgIFwiRWFzZTogT25lLXRpbWUgc2V0dXAsIHJlY3VycmluZyB1c2VcIixcbiAgICAgIFwiUmVsaWFiaWxpdHk6IEZhc3QsIHN0YWJsZSwgcHJlZGljdGFibGVcIixcbiAgICAgIFwiQWxpZ25tZW50OiBNYXRjaGVkIHJlYWwtd29ybGQgYmVoYXZpb3JcIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWRvcHRpb24gcmF0ZVwiLFxuICAgICAgICB2YWx1ZTogXCI0JSDihpIgNDclXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIjEweCBncm93dGggaW4gYmlsbCBwYXltZW50IHNoYXJlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJMZWFybmluZ3NcIixcbiAgICBzaG9ydFRpdGxlOiBcIkxlYXJuaW5nc1wiLFxuICAgIGV5ZWJyb3c6IFwiS2V5IFRha2Vhd2F5c1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkZpdmUgbGVzc29ucyBmcm9tIHRoaXMgcHJvamVjdC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkRlc2lnbiBkb2Vzbid0IGV4aXN0IGluIGlzb2xhdGlvbjogRXZlbiBwZXJmZWN0IFVYIGZhaWxzIHdpdGhvdXQgdGVjaG5pY2FsIHBlcmZvcm1hbmNlXCIsXG4gICAgICBcIkVtb3Rpb25hbCBuZWVkcyA9IEZ1bmN0aW9uYWwgbmVlZHM6IFRoZSByZWNlaXB0IHdhc24ndCBkZWNvcmF0aW9u4oCUaXQgd2FzIHRoZSBlbnRpcmUgdmFsdWUgcHJvcG9zaXRpb25cIixcbiAgICAgIFwiUmVhbCBiZWhhdmlvciA+IEFzc3VtcHRpb25zOiBVc2VycyBzaG93ZWQgdXMgd2hhdCB0aGV5IG5lZWRlZC4gV2UgbGlzdGVuZWRcIixcbiAgICAgIFwiQmFja3dhcmQgY29tcGF0aWJpbGl0eSBpcyB0cnVzdDogRXNwZWNpYWxseSBpbiBmaW5hbmNpYWwgcHJvZHVjdHMsIGZhbWlsaWFyaXR5ID0gY29uZmlkZW5jZVwiLFxuICAgICAgXCJGYWlsZWQgbGF1bmNoZXMgY2FuIGJlIHRoZSBiZXN0IGxlYXJuaW5nOiBPd25pbmcgbWlzdGFrZXMgYW5kIGl0ZXJhdGluZyBmYXN0IGJ1aWx0IGEgc3Ryb25nZXIgcHJvZHVjdCBhbmQgcHJvY2Vzc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJvcmdhbml6YXRpb25hbFwiLFxuICAgIHRpdGxlOiBcIk9yZ2FuaXphdGlvbmFsIEltcGFjdFwiLFxuICAgIHNob3J0VGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQmV5b25kIHRoZSBwcm9kdWN0LCB0aGlzIHByb2plY3QgY2hhbmdlZCBob3cgd2Ugd29yay5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIk1hbmRhdG9yeSBwcmUtbGF1bmNoIHBlcmZvcm1hbmNlIHRlc3RpbmdcIixcbiAgICAgIFwiU3RhZ2luZyBlbnZpcm9ubWVudHMgd2l0aCByZWFsLXdvcmxkIGRhdGFcIixcbiAgICAgIFwiUmVxdWlyZWQgbG9hZGluZy9za2VsZXRvbiBzdGF0ZXMgZm9yIGFsbCBoZWF2eSBvcGVyYXRpb25zXCIsXG4gICAgICBcIlNoYXJlZCBzdGFuZGFyZHMgYWNyb3NzIGRlc2lnbiBhbmQgZW5naW5lZXJpbmdcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVGhlc2UgY2hhbmdlcyBpbXByb3ZlZCBldmVyeSBmZWF0dXJlIHRoYXQgY2FtZSBhZnRlclwiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2FzZVN0dWR5RW50cmllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlFbnRyeT4gPSBbXG4gIHtcbiAgICBpZDogXCJkaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsXCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiUmVkdWNlZCBoYXJhc3NtZW50IGJ5IDYwJSBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycyB0aHJvdWdoIGEgcHJpdmFjeS1maXJzdCBjYWxsaW5nIGxheWVyIGluc2lkZSBJcmFuJ3MgbGFyZ2VzdCBtYXJrZXRwbGFjZS5cIixcbiAgICBmb2N1czogXCJUcnVzdCAmIFNhZmV0eVwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlNldGFyZSBBdmFsIEVuZ2FnZW1lbnRcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJSZS1hcmNoaXRlY3RlZCBsaWZlY3ljbGUgam91cm5leXMgdGhhdCBkb3VibGVkIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnRlZCByZWZlcnJhbCBjb2hvcnRzIGludG8gNjBLKyBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gICAgZm9jdXM6IFwiUmV0ZW50aW9uICYgR3Jvd3RoXCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gICAgdGl0bGU6IFwiU2V0YXJlWWVrIEJpbGwgUGF5bWVudFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIkluY3JlYXNlZCBiaWxsIHBheW1lbnQgYWRvcHRpb24gZnJvbSA0JSB0byA0NyUgYXQgU2V0YXJlIEF2YWwncyBTZXRhcmVZZWsgYXBwIGJ5IHNvbHZpbmcgdHJ1c3QsIHRyYW5zcGFyZW5jeSwgYW5kIHJlY3VycmluZyB3b3JrZmxvdyBjaGFsbGVuZ2VzLlwiLFxuICAgIGZvY3VzOiBcIlByb2R1Y3QgRGVzaWduICYgR3Jvd3RoXCIsXG4gICAgcGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIkBzaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiQHNoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBkaXZhck92ZXJ2aWV3LCBzZXRhcmVPdmVydmlldywgc2V0YXJlWWVrT3ZlcnZpZXcgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgZGl2YXJTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIkNhc2VTdHVkeVwiLFxuICBuYW1lOiBkaXZhck92ZXJ2aWV3LnRpdGxlLFxuICBkZXNjcmlwdGlvbjpcbiAgICBkaXZhck92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJQcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGZvciAyLjFNIERpdmFyIHVzZXJzLlwiLFxuICBhdXRob3I6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgfSxcbiAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxgLFxuICBpbWFnZTogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICBrZXl3b3JkOiBbXCJUcnVzdCAmIFNhZmV0eVwiLCBcIkhhcmFzc21lbnQgUmVkdWN0aW9uXCIsIFwiTWFya2V0cGxhY2VcIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgZGl2YXJDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJEaXZhciBTZWN1cmUgQ2FsbCBDYXNlIFN0dWR5IOKAlCBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBkaXZhck92ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJQcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGZvciAyLjFNIERpdmFyIHVzZXJzLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICAgICAgYWx0OiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogZGl2YXJPdmVydmlldy5oZXJvSW1hZ2UuaGVpZ2h0ID8/IDYzMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogZGl2YXJTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cbmNvbnN0IHNldGFyZVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IHNldGFyZU92ZXJ2aWV3LnRpdGxlLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkxpZmVjeWNsZSByZWRlc2lnbiB0aGF0IGRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBhbmQgdHVybmVkIHJlZmVycmFsIGNvaG9ydHMgaW50byBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50YCxcbiAgaW1hZ2U6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlJldGVudGlvblwiLCBcIkxpZmVjeWNsZVwiLCBcIkdyb3d0aCBEZXNpZ25cIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlQ2FzZVN0dWR5TWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiU2V0YXJlIEF2YWwgRW5nYWdlbWVudCBDYXNlIFN0dWR5IOKAlCBEb3VibGluZyBSZXRhaW5lZCBSZXZlbnVlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3MgbGlmZWN5Y2xlIHRvIGRvdWJsZSByZXRhaW5lZCByZXZlbnVlIGFuZCBjb252ZXJ0IHJlZmVycmFsIGNvaG9ydHMgaW50byBkYWlseSBhY3RpdmUgdXNlcnMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICBoZWlnaHQ6IHNldGFyZU92ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBzZXRhcmVTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cbmNvbnN0IHNldGFyZVlla1N0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IHNldGFyZVlla092ZXJ2aWV3LnRpdGxlLFxuICBkZXNjcmlwdGlvbjpcbiAgICBzZXRhcmVZZWtPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUmVkZXNpZ25lZCBiaWxsIHBheW1lbnQgZXhwZXJpZW5jZSB0aGF0IGluY3JlYXNlZCBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JSBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50YCxcbiAgaW1hZ2U6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlByb2R1Y3QgRGVzaWduXCIsIFwiR3Jvd3RoXCIsIFwiRmludGVjaFwiLCBcIlVzZXIgRXhwZXJpZW5jZVwiLCBcIlNldGFyZSBBdmFsXCIsIFwiU2V0YXJlWWVrXCJdLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVlla0Nhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIlNldGFyZVllayBCaWxsIFBheW1lbnQgQ2FzZSBTdHVkeSDigJQgRnJvbSA0JSB0byA0NyUgQWRvcHRpb24gYXQgU2V0YXJlIEF2YWxcIixcbiAgZGVzY3JpcHRpb246XG4gICAgc2V0YXJlWWVrT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlJlZGVzaWduZWQgU2V0YXJlWWVrJ3MgYmlsbCBwYXltZW50IGV4cGVyaWVuY2UgYXQgU2V0YXJlIEF2YWwgdG8gaW5jcmVhc2UgYWRvcHRpb24gZnJvbSA0JSB0byA0NyUgYnkgc29sdmluZyB0cnVzdCwgdHJhbnNwYXJlbmN5LCBhbmQgcmVjdXJyaW5nIHdvcmtmbG93IGNoYWxsZW5nZXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2Uuc3JjLFxuICAgICAgYWx0OiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2UuYWx0LFxuICAgICAgd2lkdGg6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBzZXRhcmVZZWtPdmVydmlldy5oZXJvSW1hZ2UuaGVpZ2h0ID8/IDYzMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogc2V0YXJlWWVrU3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUlBLElBQU0sZ0NB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O0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sbUJBQWtEO0FBQUEsRUFDN0Q7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGOzs7QUM3akJBLElBQU0sVUFBVSxhQUFXO0FBRTNCLElBQU0sc0JBQXNDO0FBQUEsRUFDMUMsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsTUFBTSxjQUFjO0FBQUEsRUFDcEIsYUFDRSxjQUFjLFlBQ2Q7QUFBQSxFQUNGLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxLQUFLLEdBQUc7QUFBQSxFQUNSLE9BQU8sY0FBYyxVQUFVO0FBQUEsRUFDL0IsU0FBUyxDQUFDLGtCQUFrQix3QkFBd0IsYUFBYTtBQUNuRTtBQUVPLElBQU0seUJBQXVDO0FBQUEsRUFDbEQsT0FBTztBQUFBLEVBQ1AsYUFDRSxjQUFjLFlBQ2Q7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxVQUFVO0FBQUEsTUFDN0IsS0FBSyxjQUFjLFVBQVU7QUFBQSxNQUM3QixPQUFPLGNBQWMsVUFBVSxTQUFTO0FBQUEsTUFDeEMsUUFBUSxjQUFjLFVBQVUsVUFBVTtBQUFBLElBQzVDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCO0FBRUEsSUFBTSx1QkFBdUM7QUFBQSxFQUMzQyxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNLGVBQWU7QUFBQSxFQUNyQixhQUNFO0FBQUEsRUFDRixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBQ0EsS0FBSyxHQUFHO0FBQUEsRUFDUixPQUFPLGVBQWUsVUFBVTtBQUFBLEVBQ2hDLFNBQVMsQ0FBQyxhQUFhLGFBQWEsZUFBZTtBQUNyRDtBQUVPLElBQU0sMEJBQXdDO0FBQUEsRUFDbkQsT0FBTztBQUFBLEVBQ1AsYUFDRTtBQUFBLEVBQ0YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSyxlQUFlLFVBQVU7QUFBQSxNQUM5QixLQUFLLGVBQWUsVUFBVTtBQUFBLE1BQzlCLE9BQU8sZUFBZSxVQUFVLFNBQVM7QUFBQSxNQUN6QyxRQUFRLGVBQWUsVUFBVSxVQUFVO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7QUFFQSxJQUFNLDBCQUEwQztBQUFBLEVBQzlDLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULE1BQU0sa0JBQWtCO0FBQUEsRUFDeEIsYUFDRSxrQkFBa0IsWUFDbEI7QUFBQSxFQUNGLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxLQUFLLEdBQUc7QUFBQSxFQUNSLE9BQU8sa0JBQWtCLFVBQVU7QUFBQSxFQUNuQyxTQUFTLENBQUMsa0JBQWtCLFVBQVUsV0FBVyxtQkFBbUIsZUFBZSxXQUFXO0FBQ2hHO0FBRU8sSUFBTSw2QkFBMkM7QUFBQSxFQUN0RCxPQUFPO0FBQUEsRUFDUCxhQUNFLGtCQUFrQixZQUNsQjtBQUFBLEVBQ0YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSyxrQkFBa0IsVUFBVTtBQUFBLE1BQ2pDLEtBQUssa0JBQWtCLFVBQVU7QUFBQSxNQUNqQyxPQUFPLGtCQUFrQixVQUFVLFNBQVM7QUFBQSxNQUM1QyxRQUFRLGtCQUFrQixVQUFVLFVBQVU7QUFBQSxJQUNoRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjsiLAogICJkZWJ1Z0lkIjogIjE1ODIxRjY1RTI1OURDMDc2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
