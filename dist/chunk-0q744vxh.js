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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXhwYW5kTW9yZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU91dGxpbmVOYXYudHN4IiwgIi4uL3NyYy9zaGFyZWQvdXRpbHMvc3gudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9jb21wb25lbnRzL0Nhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY2FzZS1zdHVkaWVzL2hvb2tzL3VzZUNhc2VTdHVkeU5hdmlnYXRpb24udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9ob29rcy91c2VSZWxhdGVkQ2FzZVN0dWRpZXMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2Nhc2Utc3R1ZGllcy9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIERpdmlkZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZENvbXBvbmVudCA9ICh7IHNlY3Rpb24gfTogeyBzZWN0aW9uOiBDYXNlU3R1ZHlTZWN0aW9uIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIGlkPXtzZWN0aW9uLmlkfVxuICAgICAgc3BhY2luZz17eyB4czogMi41LCBtZDogMyB9fVxuICAgICAgc3g9e3sgbWF4V2lkdGg6IDc2MCwgbXg6IFwiYXV0b1wiLCBzY3JvbGxNYXJnaW5Ub3A6IHsgeHM6IDk2LCBtZDogMTQwIH0gfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMSB9fT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiB7IHhzOiAxLCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0sXG4gICAgICAgICAgICAgIG1iOiBpbmRleCA8IHNlY3Rpb24uYm9keSEubGVuZ3RoIC0gMSA/IHsgeHM6IDIsIG1kOiAxLjUgfSA6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiIFxuICAgICAgICAgICAgICBrZXk9e3BvaW50fSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiB7IHhzOiAxLjcsIG1kOiAxLjY1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICBhbHQ9e3NlY3Rpb24uaW1hZ2UuYWx0fVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZCA9IG1lbW8oXG4gIENhc2VTdHVkeVNlY3Rpb25DYXJkQ29tcG9uZW50LFxuICAocHJldiwgbmV4dCkgPT4gcHJldi5zZWN0aW9uID09PSBuZXh0LnNlY3Rpb24sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNS44OCA5LjI5IDEyIDEzLjE3IDguMTIgOS4yOWEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsNC41OSA0LjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw0LjU5LTQuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MS0uMzktLjM4LTEuMDMtLjM5LTEuNDIgMFwiXG59KSwgJ0V4cGFuZE1vcmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlLCBEaXZpZGVyLCBJY29uQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUsIHR5cGUgU3hQcm9wcywgdHlwZSBUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgRXhwYW5kTW9yZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVSb3VuZGVkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdHlwZSBNb3VzZUV2ZW50IGFzIFJlYWN0TW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtZXJnZVN4IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9zeFwiO1xuXG50eXBlIENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcyA9IHtcbiAgc2VjdGlvbnM6IHJlYWRvbmx5IENhc2VTdHVkeVNlY3Rpb25bXTtcbiAgYWN0aXZlU2VjdGlvbklkOiBzdHJpbmc7XG4gIG9uTmF2aWdhdGU6IChldmVudDogUmVhY3RNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PiwgdGFyZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb3V0bGluZUxhYmVsPzogc3RyaW5nO1xuICBjb250YWluZXJTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgQ2FzZVN0dWR5T3V0bGluZU5hdiA9ICh7XG4gIHNlY3Rpb25zLFxuICBhY3RpdmVTZWN0aW9uSWQsXG4gIG9uTmF2aWdhdGUsXG4gIG91dGxpbmVMYWJlbCA9IFwiT3V0bGluZVwiLFxuICBjb250YWluZXJTeCxcbn06IENhc2VTdHVkeU91dGxpbmVOYXZQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCFpc01vYmlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICBhcmlhLWxhYmVsPVwiQ2FzZSBzdHVkeSBzZWN0aW9uc1wiXG4gICAgICBzcGFjaW5nPXsxfVxuICAgICAgc3g9e21lcmdlU3goXG4gICAgICAgICh0aGVtZTogVGhlbWUpID0+ICh7XG4gICAgICAgICAgcG9zaXRpb246IHsgbWQ6IFwic3RpY2t5XCIgfSxcbiAgICAgICAgICB0b3A6IHsgbWQ6IDE0MCB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA0KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE0KVwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE4KVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4zMilcIlxuICAgICAgICAgIH1gLFxuICAgICAgICB9KSxcbiAgICAgICAgY29udGFpbmVyU3gsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3sgY3Vyc29yOiBpc01vYmlsZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaXNNb2JpbGUgJiYgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtvdXRsaW5lTGFiZWx9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2VcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBleHBhbmRlZCA/IFwicm90YXRlKDE4MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZXhwYW5kZWQgPyBcIkNvbGxhcHNlIG91dGxpbmVcIiA6IFwiRXhwYW5kIG91dGxpbmVcIn1cbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeHBhbmRNb3JlUm91bmRlZEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIj5cbiAgICAgICAgPERpdmlkZXIgc3g9e3sgbWI6IDEgfX0gLz5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb25OYXZpZ2F0ZShldmVudCwgc2VjdGlvbi5pZCk7XG4gICAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtY3VycmVudD17YWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlU2VjdGlvbklkID09PSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZSA/IDYwMCA6IDUwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4yOClcIlxuICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgcHg6IDEuNSxcbiAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3Rpb24uc2hvcnRUaXRsZSA/PyBzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeU91dGxpbmVOYXY7XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFN4UHJvcHMsIFRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgYXBwZW5kID0gPFRUaGVtZSBleHRlbmRzIFRoZW1lPih0YXJnZXQ6IFN4UHJvcHM8VFRoZW1lPltdLCB2YWx1ZT86IFN4UHJvcHM8VFRoZW1lPikgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gYXBwZW5kKHRhcmdldCwgaXRlbSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRhcmdldC5wdXNoKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXJnZVN4ID0gPFRUaGVtZSBleHRlbmRzIFRoZW1lPihcbiAgYmFzZTogU3hQcm9wczxUVGhlbWU+LFxuICAuLi5vdmVycmlkZXM6IEFycmF5PFN4UHJvcHM8VFRoZW1lPiB8IHVuZGVmaW5lZD5cbik6IFN4UHJvcHM8VFRoZW1lPiA9PiB7XG4gIGNvbnN0IGVudHJpZXM6IFN4UHJvcHM8VFRoZW1lPltdID0gW107XG4gIGFwcGVuZChlbnRyaWVzLCBiYXNlKTtcbiAgb3ZlcnJpZGVzLmZvckVhY2goKHZhbHVlKSA9PiBhcHBlbmQoZW50cmllcywgdmFsdWUpKTtcblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZW50cmllc1swXSE7XG4gIH1cblxuICByZXR1cm4gZW50cmllcyBhcyBTeFByb3BzPFRUaGVtZT47XG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG4gIHR5cGUgU3hQcm9wcyxcbiAgdHlwZSBUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5T3ZlcnZpZXcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lcmdlU3ggfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3N4XCI7XG5cbnR5cGUgQ2FzZVN0dWR5T3ZlcnZpZXdTZWN0aW9uUHJvcHMgPSB7XG4gIGV5ZWJyb3c6IHN0cmluZztcbiAgb3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3O1xuICBzdWJ0aXRsZUZhbGxiYWNrPzogc3RyaW5nO1xuICBtZXRhVGl0bGU/OiBzdHJpbmc7XG4gIHN0YXRzVGl0bGU/OiBzdHJpbmc7XG4gIHN0YXRzVmFyaWFudD86IFwiZ3JhZGllbnRcIiB8IFwib3V0bGluZWRcIjtcbiAgaGVyb0JhY2tkcm9wU3g/OiBTeFByb3BzPFRoZW1lPjtcbiAgaGVyb1N1cmZhY2VTeD86IFN4UHJvcHM8VGhlbWU+O1xuICBzdGF0c0NhcmRTeD86IFN4UHJvcHM8VGhlbWU+O1xufTtcblxuY29uc3QgZGVmYXVsdEhlcm9CYWNrZHJvcFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgaW5zZXQ6IDAsXG4gIGJvcmRlclJhZGl1czogeyB4czogMjQsIG1kOiAzMiB9LFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgzNCw4NCwyNTUsMC4wOCksIHJnYmEoMTQ1LDE2NywyNTUsMC4xOCkpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDE2LDI4LDU2LDAuODgpLCByZ2JhKDM2LDY0LDEyMCwwLjcyKSlcIixcbiAgZmlsdGVyOiBcImJsdXIoNDhweClcIixcbiAgekluZGV4OiAtMSxcbn0pO1xuXG5jb25zdCBkZWZhdWx0SGVyb1N1cmZhY2VTeDogU3hQcm9wczxUaGVtZT4gPSAodGhlbWUpID0+ICh7XG4gIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0OSwgMjUxLCAyNTUsIDAuODgpXCIgOiBcInJnYmEoMTMsIDIwLCAzNiwgMC44OClcIixcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiXG4gICAgICA6IFwicmdiYSg5OCwxMzIsMjE4LDAuMzIpXCJcbiAgfWAsXG4gIGJveFNoYWRvdzpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcIjAgMjZweCA1MnB4IHJnYmEoMzQsIDg0LCAyNTUsIDAuMTQpXCJcbiAgICAgIDogXCIwIDI2cHggNTJweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCIsXG4gIHB4OiB7IHhzOiAzLCBtZDogNCB9LFxuICBweTogeyB4czogMywgbWQ6IDQgfSxcbn0pO1xuXG5jb25zdCBkZWZhdWx0U3RhdHNDYXJkU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuY2FyZCxcbiAgYmFja2dyb3VuZDpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDgpLCByZ2JhKDE0NSwxNjcsMjU1LDAuMTIpKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgxNiwyOCw1NiwwLjgpLCByZ2JhKDM2LDY0LDEyMCwwLjYpKVwiLFxuICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pO1xuXG5jb25zdCBvdXRsaW5lZFN0YXRzQ2FyZFN4OiBTeFByb3BzPFRoZW1lPiA9ICh0aGVtZSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkyKVwiIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuODUpXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxufSk7XG5cbmNvbnN0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbiA9ICh7XG4gIGV5ZWJyb3csXG4gIG92ZXJ2aWV3LFxuICBzdWJ0aXRsZUZhbGxiYWNrLFxuICBtZXRhVGl0bGUgPSBcIlByb2plY3QgZGV0YWlsc1wiLFxuICBzdGF0c1RpdGxlLFxuICBzdGF0c1ZhcmlhbnQgPSBcImdyYWRpZW50XCIsXG4gIGhlcm9CYWNrZHJvcFN4LFxuICBoZXJvU3VyZmFjZVN4LFxuICBzdGF0c0NhcmRTeCxcbn06IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3RhdHMgPSBvdmVydmlldy5zdGF0cztcbiAgY29uc3QgcmVzb2x2ZWRTdGF0c0NhcmRTeCA9XG4gICAgc3RhdHNWYXJpYW50ID09PSBcImdyYWRpZW50XCIgPyBkZWZhdWx0U3RhdHNDYXJkU3ggOiBvdXRsaW5lZFN0YXRzQ2FyZFN4O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IDMgfX0+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICA8Qm94IHN4PXttZXJnZVN4KGRlZmF1bHRIZXJvQmFja2Ryb3BTeCwgaGVyb0JhY2tkcm9wU3gpfSAvPlxuXG4gICAgICAgIDxCb3ggc3g9e21lcmdlU3goZGVmYXVsdEhlcm9TdXJmYWNlU3gsIGhlcm9TdXJmYWNlU3gpfT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBtZDogMiB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCI+e292ZXJ2aWV3LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgeyhvdmVydmlldy5zdWJ0aXRsZSA/PyBzdWJ0aXRsZUZhbGxiYWNrKSAmJiAoXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAgICAgICAge292ZXJ2aWV3LnN1YnRpdGxlID8/IHN1YnRpdGxlRmFsbGJhY2t9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX0gc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBmbGV4PXt7IG1kOiAxIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHttZXRhVGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAgICAgICAge292ZXJ2aWV3Lm1ldGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBweTogeyB4czogMS4yNSwgbWQ6IDEuNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFdlaWdodDogNjAwLCBtdDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgIHtzdGF0cyAmJiAoXG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGZsZXg9e3sgbWQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICB7c3RhdHNUaXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdHNUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRzLm1hcCgoc3RhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMubGVuZ3RoID49IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgeHM6IDEyLCBzbTogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0cy5sZW5ndGggPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyB4czogMTIsIHNtOiA2IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyB4czogMTIsIHNtOiAxMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGVsZXZhdGlvbj17MH0gc3g9e21lcmdlU3gocmVzb2x2ZWRTdGF0c0NhcmRTeCwgc3RhdHNDYXJkU3gpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0gc3g9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57c3RhdC52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS41NSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeU92ZXJ2aWV3U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdHlwZSBTeFByb3BzLFxuICB0eXBlIFRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5RW50cnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1lcmdlU3ggfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3N4XCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVsYXRlZFNlY3Rpb25Qcm9wcyA9IHtcbiAgZXllYnJvdzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzdHVkaWVzOiByZWFkb25seSBDYXNlU3R1ZHlFbnRyeVtdO1xuICBwcmltYXJ5Q3RhOiB7XG4gICAgdG86IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhcmlhbnQ/OiBcImNvbnRhaW5lZFwiIHwgXCJvdXRsaW5lZFwiO1xuICB9O1xuICBzZWNvbmRhcnlDdGE/OiB7XG4gICAgdG86IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhcmlhbnQ/OiBcImNvbnRhaW5lZFwiIHwgXCJvdXRsaW5lZFwiO1xuICB9O1xuICBzZWN0aW9uU3g/OiBTeFByb3BzPFRoZW1lPjtcbn07XG5cbmNvbnN0IGRlZmF1bHRTZWN0aW9uU3g6IFN4UHJvcHM8VGhlbWU+ID0gKHRoZW1lKSA9PiAoe1xuICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICBiYWNrZ3JvdW5kOlxuICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDEsMjQ1LDI1NSwwLjgpLCByZ2JhKDIyNCwyMzMsMjU1LDAuOTQpKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMywyMCwzMywwLjkpLCByZ2JhKDIxLDMxLDUyLDAuOTIpKVwiLFxufSk7XG5cbmNvbnN0IENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uID0gKHtcbiAgZXllYnJvdyxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBzdHVkaWVzLFxuICBwcmltYXJ5Q3RhLFxuICBzZWNvbmRhcnlDdGEsXG4gIHNlY3Rpb25TeCxcbn06IENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e21lcmdlU3goZGVmYXVsdFNlY3Rpb25TeCwgc2VjdGlvblN4KX0+XG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogNCwgbWQ6IDYgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0gfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICBzeD17eyBtYXhXaWR0aDogNzIwLCBteDogeyB4czogXCJhdXRvXCIsIG1kOiAwIH0sIGxpbmVIZWlnaHQ6IDEuNjUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fT5cbiAgICAgICAgICB7c3R1ZGllcy5tYXAoKHN0dWR5KSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtzdHVkeS5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtzdHVkeS5wYXRofVxuICAgICAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgZ2FwOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLmNhcmQsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGAke3RoZW1lLnRva2Vucy50cmFuc2l0aW9uLmhvdmVyfSwgdHJhbnNmb3JtIDE2MG1zIGVhc2VgLFxuICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTRweClcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGFnXCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0dWR5LmZvY3VzfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0dWR5LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICB7c3R1ZHkuZXhjZXJwdH1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgUmVhZCB0aGUgY2FzZSBzdHVkeSDihpJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBzbTogMyB9fVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtwcmltYXJ5Q3RhLnRvfVxuICAgICAgICAgICAgdmFyaWFudD17cHJpbWFyeUN0YS52YXJpYW50ID8/IFwiY29udGFpbmVkXCJ9XG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcmltYXJ5Q3RhLmxhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIHtzZWNvbmRhcnlDdGEgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPXtzZWNvbmRhcnlDdGEudG99XG4gICAgICAgICAgICAgIHZhcmlhbnQ9e3NlY29uZGFyeUN0YS52YXJpYW50ID8/IFwib3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY29uZGFyeUN0YS5sYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVJlbGF0ZWRTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHR5cGUgTW91c2VFdmVudCBhcyBSZWFjdE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVNlY3Rpb25MaXN0ID0gcmVhZG9ubHkgQ2FzZVN0dWR5U2VjdGlvbltdO1xuXG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuXG5jb25zdCBnZXRJbml0aWFsU2VjdGlvbklkID0gKHNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uTGlzdCkgPT4gc2VjdGlvbnNbMF0/LmlkID8/IFwiXCI7XG5cbmNvbnN0IHVzZUNhc2VTdHVkeU5hdmlnYXRpb24gPSAoc2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25MaXN0KSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25JZHMgPSB1c2VNZW1vKCgpID0+IHNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gc2VjdGlvbi5pZCksIFtzZWN0aW9uc10pO1xuXG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uSWQsIHNldEFjdGl2ZVNlY3Rpb25JZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZXRJbml0aWFsU2VjdGlvbklkKHNlY3Rpb25zKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlY3Rpb25JZHMuaW5jbHVkZXMoYWN0aXZlU2VjdGlvbklkKSkge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKGdldEluaXRpYWxTZWN0aW9uSWQoc2VjdGlvbnMpKTtcbiAgICB9XG4gIH0sIFthY3RpdmVTZWN0aW9uSWQsIHNlY3Rpb25JZHMsIHNlY3Rpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICBpZiAoaGFzaCAmJiBzZWN0aW9uSWRzLmluY2x1ZGVzKGhhc2gpKSB7XG4gICAgICBzZXRBY3RpdmVTZWN0aW9uSWQoaGFzaCk7XG4gICAgfVxuICB9LCBbc2VjdGlvbklkc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uRWxlbWVudHMgPSBzZWN0aW9uSWRzXG4gICAgICAubWFwKChzZWN0aW9uSWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCkpXG4gICAgICAuZmlsdGVyKChlbGVtZW50KTogZWxlbWVudCBpcyBIVE1MRWxlbWVudCA9PiBCb29sZWFuKGVsZW1lbnQpKTtcblxuICAgIGlmIChzZWN0aW9uRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICBjb25zdCB2aXNpYmxlRW50cmllcyA9IGVudHJpZXNcbiAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuaW50ZXJzZWN0aW9uUmF0aW8gLSBhLmludGVyc2VjdGlvblJhdGlvKTtcblxuICAgICAgICBjb25zdCBmaXJzdFZpc2libGUgPSB2aXNpYmxlRW50cmllc1swXTtcbiAgICAgICAgaWYgKGZpcnN0VmlzaWJsZSkge1xuICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb25JZChmaXJzdFZpc2libGUudGFyZ2V0LmlkKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgcm9vdE1hcmdpbjogXCItNDUlIDBweCAtNDUlXCIgfSxcbiAgICApO1xuXG4gICAgc2VjdGlvbkVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCkpO1xuXG4gICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfSwgW3NlY3Rpb25JZHNdKTtcblxuICBjb25zdCBoYW5kbGVPdXRsaW5lQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0TW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4sIHRhcmdldElkOiBzdHJpbmcpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgc2V0QWN0aXZlU2VjdGlvbklkKHRhcmdldElkKTtcbiAgICAgICAgY29uc3QgbmV3VXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH0jJHt0YXJnZXRJZH1gO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgbmV3VXJsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtdLFxuICApO1xuXG4gIHJldHVybiB7IGFjdGl2ZVNlY3Rpb25JZCwgaGFuZGxlT3V0bGluZUNsaWNrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXNlU3R1ZHlOYXZpZ2F0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlFbnRyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB1c2VSZWxhdGVkQ2FzZVN0dWRpZXMgPSAoXG4gIGVudHJpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5RW50cnk+LFxuICBjdXJyZW50SWQ6IENhc2VTdHVkeUVudHJ5W1wiaWRcIl0sXG4pID0+XG4gIHVzZU1lbW8oXG4gICAgKCkgPT4gZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pZCAhPT0gY3VycmVudElkKSxcbiAgICBbZW50cmllcywgY3VycmVudElkXSxcbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVsYXRlZENhc2VTdHVkaWVzO1xuXG5cbiIsCiAgICAiaW1wb3J0IGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2RpdmFyLXNlY3VyZS1jYWxsLWxpc3RpbmcucG5nXCI7XG5pbXBvcnQgc2V0YXJlQXZhbEludGVydmlld0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvc2V0YXJlLWF2YWwtaW50ZXJ2aWV3LXNlc3Npb24uYXZpZlwiO1xuaW1wb3J0IHNldGFyZUF2YWxVc2VyRmxvd0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvc2V0YXJlLWF2YWwtdXNlci1mbG93LndlYnBcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Fzc2V0c1wiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlFbnRyeSwgQ2FzZVN0dWR5T3ZlcnZpZXcsIENhc2VTdHVkeVNlY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRpdmFyT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIlNvbHZpbmcgSGFyYXNzbWVudCBhdCBTY2FsZTogSG93IEkgUHJvdGVjdGVkIDIuMU0gVXNlcnMgb24gSXJhbidzIExhcmdlc3QgTWFya2V0cGxhY2VcIixcbiAgc3VidGl0bGU6XG4gICAgXCJXZSByZWR1Y2VkIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJSBpbnNpZGUgRGl2YXLigJlzIGNsb3RoaW5nIGNhdGVnb3J5IGJ5IGJ1aWxkaW5nIGEgcHJpdmFjeS1maXJzdCBjYWxsaW5nIGV4cGVyaWVuY2UgdGhhdCBub3cgcHJvdGVjdHMgMi4xTSB3ZWVrbHkgdXNlcnMuXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiU2VuaW9yIFVYIERlc2lnbmVyIMK3IFRydXN0ICYgU2FmZXR5XCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIk1heSDigJMgSnVuZSAyMDIzXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRlYW1cIiwgdmFsdWU6IFwiRGVzaWduLCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIEVuZ2luZWVyaW5nLCBTdXBwb3J0XCIgfSxcbiAgXSxcbiAgc3RhdHM6IFtcbiAgICB7IHZhbHVlOiBcIuKWvDYwJVwiLCBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIiB9LFxuICAgIHsgdmFsdWU6IFwiMi4xTVwiLCBsYWJlbDogXCJXZWVrbHkgY2FsbGVycyBzYWZlZ3VhcmRlZFwiIH0sXG4gICAgeyB2YWx1ZTogXCLilrwxOCVcIiwgbGFiZWw6IFwiU2FmZXR5IHRpY2tldCB2b2x1bWVcIiB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgIGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCxcbiAgICBcIkRpdmFyIHNlY3VyZSBjYWxsIGxpc3RpbmdzIGludGVyZmFjZVwiLFxuICAgIHsgd2lkdGg6IDEyMDAsIGhlaWdodDogNjMwIH0sXG4gICksXG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJEaXZhciBpcyBJcmFu4oCZcyBsYXJnZXN0IGNsYXNzaWZpZWRzIG1hcmtldHBsYWNlIHdpdGggNTNNKyB3ZWVrbHkgdXNlcnMuIFRydXN0IGFuZCBzYWZldHkgaW5jaWRlbnRzIGNhbiBjb2xsYXBzZSBlbnRpcmUgcmV2ZW51ZSBjYXRlZ29yaWVzIGlmIGxlZnQgdW5jaGVja2VkLlwiLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHsgbGFiZWw6IFwiTWFya2V0cGxhY2Ugc2NhbGVcIiwgdmFsdWU6IFwiNTNNK1wiLCBkZXNjcmlwdGlvbjogXCJXZWVrbHkgYnV5ZXJzICYgc2VsbGVyc1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIlZvaWNlIGRlcGVuZGVuY2VcIiwgdmFsdWU6IFwiMi4xTVwiLCBkZXNjcmlwdGlvbjogXCJDYWxscyBwbGFjZWQgZXZlcnkgd2Vla1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIkFkIGNvbnN1bXB0aW9uXCIsIHZhbHVlOiBcIjZCK1wiLCBkZXNjcmlwdGlvbjogXCJNb250aGx5IGFkIHZpZXdzXCIgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ2xvdGhpbmcgbGlzdGluZ3PigJRtb3N0bHkgd29tZW4tbGVk4oCUd2VyZSBoaXQgaGFyZGVzdCBieSBhYnVzZS5cIixcbiAgICAgIFwiTWFudWFsIG1vZGVyYXRpb24gY291bGRu4oCZdCBrZWVwIHVwOyBsaXF1aWRpdHkgYW5kIHRydXN0IHdlcmUgaW4gZnJlZSBmYWxsLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjcmlzaXNcIixcbiAgICB0aXRsZTogXCJUaGUgQ3Jpc2lzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQ3VzdG9tZXIgY2FyZSBjZW50cmVzIHdlcmUgZmxvb2RlZCB3aXRoIGhhcmFzc21lbnQgcmVwb3J0cy4gU2VsbGVycyBkZWxldGVkIGxpc3RpbmdzIG9yIGNodXJuZWQgZW50aXJlbHksIGZlYXJpbmcgcmVwZWF0IGluY2lkZW50cy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkhhcmFzc2VycyBzY3JhcGVkIHBob25lIG51bWJlcnMgZnJvbSBhZHMgYW5kIGNpcmN1bGF0ZWQgdGhlbSBpbiBwcml2YXRlIFRlbGVncmFtIGdyb3Vwcy5cIixcbiAgICAgIFwiRXZlbiBhZnRlciB2aWN0aW1zIGRlbGV0ZWQgbGlzdGluZ3MsIHRoZSBjYWxscyBjb250aW51ZWQgYmVjYXVzZSBudW1iZXJzIHdlcmUgYWxyZWFkeSBleHBvc2VkLlwiLFxuICAgICAgXCJXaXRob3V0IGludGVydmVudGlvbiwgRGl2YXIgcmlza2VkIGxvc2luZyBhIGNhdGVnb3J5IHRoYXQgYW5jaG9yZWQgZGFpbHkgZW5nYWdlbWVudC5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiTGF5bGEsIDMyXCIsXG4gICAgICAgIHJvbGU6IFwiUHJvZmVzc2lvbmFsIGFydGlzdCBzZWxsaW5nIGJlc3Bva2UgY2xvdGhpbmdcIixcbiAgICAgICAgdGV4dDogXCJJdCB3YXMgaW5mdXJpYXRpbmcuIEkgdG9vayBkb3duIG15IERpdmFyIGFkIGhvcGluZyB0byBzdG9wIHRoZSBjYWxscywgYnV0IHRoZXkga2VwdCBjb21pbmcuIFNvbWVvbmUgdG9sZCBtZSBteSBudW1iZXIgd2FzIGluIGEgVGVsZWdyYW0gZ3JvdXAuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnZlc3RpZ2F0aW9uXCIsXG4gICAgdGl0bGU6IFwiRmluZGluZyB0aGUgUmVhbCBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBpbnRlcnZpZXdlZCBoYXJhc3NlZCBzZWxsZXJzIGFuZCBhbmFseXNlZCBiZWhhdmlvdXJhbCBkYXRhIHRvIHVuZGVyc3RhbmQgaG93IGV4cG9zdXJlIHNjYWxlZC4gVGhlIGJyZWFrdGhyb3VnaCBjYW1lIGZyb20gY29ubmVjdGluZyBxdWFsaXRhdGl2ZSBzdG9yaWVzIHRvIHF1YW50aXRhdGl2ZSBzaWduYWxzLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiUGF0dGVybnMgZW1lcmdlZCBxdWlja2x5OiBoYXJhc3NlcnMgc2F2ZWQgcG9zdGVkIG51bWJlcnMsIGNyb3NzLXJlZmVyZW5jZWQgdGhlbSBvbiBXaGF0c0FwcCBhbmQgSW5zdGFncmFtLCBhbmQgb25seSB0aGVuIGJlZ2FuIHRoZSBhYnVzZS4gRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBzdG9wcGVkIHNoYXJpbmcgbnVtYmVycyBhbmQgcmVsaWVkIG9uIGluLWFwcCBjaGF04oCUbmV3IHNlbGxlcnMgd2VyZSB0aGUgb25lcyBsZWZ0IGV4cG9zZWQuXCIsXG4gICAgICBcIlNhcmHigJlzIG1lbnRpb24gb2YgYSBjYWxsZXIgcmVmZXJlbmNpbmcgaGVyIGV5ZSBjb2xvciBjb25maXJtZWQgb3VyIGh5cG90aGVzaXM6IHNvY2lhbCBtZWRpYSBicmVhZGNydW1icyBtYWRlIGhhcmFzc21lbnQgcGVyc29uYWwgYW5kIGZyaWdodGVuaW5nLlwiLFxuICAgICAgXCJEYXRhIGFuYWx5c2lzIGJhY2tlZCB0aGUgcXVhbGl0YXRpdmUgd29yay4gVXNlcnMgd2hvc2UgcGhvbmUgbnVtYmVycyB3ZXJlIGxpbmtlZCB0byBwdWJsaWMgc29jaWFsIHByb2ZpbGVzIHJlcG9ydGVkIGhhcmFzc21lbnQgZHJhbWF0aWNhbGx5IG1vcmUgb2Z0ZW4uIFRob3NlIHdobyBzdHVjayB0byBpbi1hcHAgY2hhdCByYXJlbHkgZGlkLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJTYXJhLCAyNlwiLFxuICAgICAgICByb2xlOiBcIkZhc2hpb24gcmV0YWlsIHdvcmtlclwiLFxuICAgICAgICB0ZXh0OiBcIk9uZSBjYWxsZXIga25ldyBteSBleWUgY29sb3IuIFRoZXkgY2xlYXJseSBmb3VuZCBteSBJbnN0YWdyYW0gdGhyb3VnaCB0aGUgcGhvbmUgbnVtYmVyIG9uIERpdmFyLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlphaHJhLCAyOFwiLFxuICAgICAgICByb2xlOiBcIkZyZWVsYW5jZSBncmFwaGljIGRlc2lnbmVyXCIsXG4gICAgICAgIHRleHQ6IFwiSSBzdG9wcGVkIGxpc3RpbmcgbXkgcGhvbmUgbnVtYmVyLiBJdCBmZWx0IHVucHJvZmVzc2lvbmFsLCBidXQgaXQgd2FzIHRoZSBvbmx5IHdheSB0byBhdm9pZCBoYXJhc3NtZW50LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiUHVibGljIHBob25lIG51bWJlcnMgd2VyZSB0aGUgcm9vdCBjYXVzZSBvZiBleHBvc3VyZSwgbm90IHRoZSBudW1iZXIgb2YgcmVwb3J0cy5cIixcbiAgICAgIFwiRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBhZGFwdGVkIGJ5IHVzaW5nIGluLWFwcCBjaGF0OyBuZXcgc2VsbGVycyBuZWVkZWQgcHJvdGVjdGl2ZSBkZWZhdWx0cy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3RyYXRlZ3lcIixcbiAgICB0aXRsZTogXCJUaGUgU29sdXRpb24gSm91cm5leVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHJlZnJhbWVkIHN1Y2Nlc3MgZnJvbSDigJxyZWR1Y2UgcmVwb3J0c+KAnSB0byDigJxyZWR1Y2UgZXhwb3N1cmUu4oCdIFdpdGggVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBTdXBwb3J0LCBhbmQgRGF0YSwgd2UgZXZhbHVhdGVkIGV2ZXJ5IHBhdGggYW5kIHN0cmVzcy10ZXN0ZWQgZWRnZSBjYXNlcyBiZWZvcmUgY29tbWl0dGluZy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkVkdWNhdGluZyB1c2VycyBhYm91dCBoYXJhc3NlciB0YWN0aWNzIHdvdWxkIGVyb2RlIHRydXN0IGFuZCBkaXNjb3VyYWdlIGxpc3RpbmdzLlwiLFxuICAgICAgXCJGdWxsIFZvSVAgd2FzIGNvc3QtcHJvaGliaXRpdmUsIGZyYWdpbGUgYWNyb3NzIGRldmljZSB0eXBlcywgYW5kIGluYWNjZXNzaWJsZSB0byA0NyUgb2YgbGVnYWN5IEFuZHJvaWQgdXNlcnMuXCIsXG4gICAgICBcIlZvaWNlIHJlbGF5IHdpdGggaW50ZXJtZWRpYXJ5IG51bWJlcnMgcHJvdGVjdGVkIHNlbGxlcnMgd2l0aG91dCBjaGFuZ2luZyBwdXJjaGFzZSBiZWhhdmlvdXLigJR0aGlzIGJlY2FtZSB0aGUgbm9ydGggc3Rhci5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGVzdGluZ1wiLFxuICAgIHRpdGxlOiBcIlRlc3RpbmcgJiBMZWFybmluZyBmcm9tIEZhaWx1cmVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBIDMtZGF5IHBpbG90IGluIHRoZSBjbG90aGluZyBjYXRlZ29yeSByZXN1bHRlZCBpbiBhIDU2JSBjYWxsIGZhaWx1cmUgcmF0ZS4gSW5zdGVhZCBvZiByZXZlcnRpbmcsIHdlIHRyZWF0ZWQgZXZlcnkgZmFpbHVyZSBhcyBhIGRlc2lnbiByZXF1aXJlbWVudC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXIgYmVoYXZpb3VyOiBzZWxsZXJzIGJsb2NrZWQgdW5mYW1pbGlhciBudW1iZXJzOyBidXllcnMgcmVkaWFsbGVkIGZyb20gY2FsbCBsb2dzOyByZXBlYXQgY29udmVyc2F0aW9ucyBicm9rZSBtYXBwaW5nIHdpbmRvd3MuXCIsXG4gICAgICBcIlRlY2huaWNhbCBsb2FkOiBjYWxsIHZvbHVtZSBzcGlrZWQgYmV5b25kIGZvcmVjYXN0cyBhbmQgbnVtYmVyIHBvb2xzIHdlcmUgZXhoYXVzdGVkLlwiLFxuICAgICAgXCJCdXNpbmVzcyByaXNrOiBsb25nZXIgY2FsbHMgaW5mbGF0ZWQgdGVsZWNvbSBjb3N0cyBhbmQgYW5vbnltaXNlZCBudW1iZXJzIGF0dHJhY3RlZCBvcHBvcnR1bmlzdGljIHNjYW1tZXJzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZpbmVtZW50XCIsXG4gICAgdGl0bGU6IFwiVGhlIFJlZmluZWQgU29sdXRpb25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJXZSB0cmFuc2xhdGVkIGV2ZXJ5IHBpbG90IGluc2lnaHQgaW50byBwcm9kdWN0IGFuZCBwbGF0Zm9ybSBpbXByb3ZlbWVudHMgYmVmb3JlIHNjYWxpbmcgbmF0aW9ud2lkZS5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkJpZGlyZWN0aW9uYWwgbWFwcGluZyBsZXQgc2VsbGVycyByZWNvbm5lY3Qgd2l0aG91dCBleHBvc2luZyByZWFsIG51bWJlcnMuXCIsXG4gICAgICBcIkV4dGVuZGVkIG1hcHBpbmcgd2luZG93cyBmcm9tIDIwIHNlY29uZHMgdG8gMTUgbWludXRlcyByZWR1Y2VkIGRyb3BwZWQgY2FsbHMuXCIsXG4gICAgICBcIlZvaWNlIHByb21wdHMgKOKAnFRoaXMgaXMgYSBzZWN1cmUgY2FsbCBmcm9tIERpdmFy4oCm4oCdKSBzZXQgZXhwZWN0YXRpb25zIGFuZCBkZXRlcnJlZCBzY2FtbWVycy5cIixcbiAgICAgIFwiQSBwb29sIG9mIDEwMCBpbnRlcm1lZGlhcnkgbnVtYmVycyBhc3NpZ25lZCBwZXIgYnV5ZXItc2VsbGVyIHBhaXIgcHJldmVudGVkIHJldXNlIGFuZCBibG9ja2luZy5cIixcbiAgICAgIFwiU2VjdXJlIGNhbGwgaGlzdG9yeSwgY2hhdCBpbnRlZ3JhdGlvbiwgYW5kIGFkIG1hbmFnZW1lbnQgbG9ncyBrZXB0IGxlZ2l0aW1hdGUgcmVsYXRpb25zaGlwcyBpbnRhY3QuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImltcGFjdFwiLFxuICAgIHRpdGxlOiBcIkltcGFjdFwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQWZ0ZXIgcm9sbG91dCwgaGFyYXNzbWVudCByZXBvcnRzIGRyb3BwZWQgZHJhbWF0aWNhbGx5IGFuZCBzZWxsZXJzIGZlbHQgc2FmZSBlbm91Z2ggdG8ga2VlcCBsaXN0aW5ncyBsaXZlLiBNb2RlcmF0aW9uIHRlYW1zIHJlY292ZXJlZCBob3VycyBlYWNoIHdlZWsgdGhhdCB3ZXJlIHByZXZpb3VzbHkgc3BlbnQgb24gcmVhY3RpdmUgdGlja2V0cy5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCA2MCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDggd2Vla3Mgb2YgbGF1bmNoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBZCBkZWxldGlvbnNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDI1JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGZXdlciBzZWxsZXJzIGxlYXZpbmcgdGhlIHBsYXRmb3JtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTdXBwb3J0IHRpY2tldHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDE4JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb3JlIHRpbWUgZm9yIHByb2FjdGl2ZSBtb25pdG9yaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgb2J2aW91cyBwcm9ibGVtIGlzIHJhcmVseSB0aGUgcmVhbCBvbmXigJRleHBvc3VyZSwgbm90IHJlcG9ydHMsIHdhcyB0aGUgcm9vdC5cIixcbiAgICAgIFwiVXNlcnMgd2VyZSBhbHJlYWR5IGRlc2lnbmluZyB3b3JrYXJvdW5kczsgb2JzZXJ2aW5nIHRoZW0gcmV2ZWFsZWQgdGhlIHJpZ2h0IGRlZmF1bHRzLlwiLFxuICAgICAgXCJGYWlsdXJlIGlzIHNpZ25hbC4gVGhlIDU2JSBwaWxvdCBmYWlsdXJlIGdlbmVyYXRlZCBhIGJhY2tsb2cgb2YgYWN0aW9uYWJsZSByZXF1aXJlbWVudHMuXCIsXG4gICAgICBcIlBhaXIgcXVhbGl0YXRpdmUgaW5zaWdodCB3aXRoIHJlYWwtdGltZSBtb25pdG9yaW5nIHRvIGtlZXAgYWJ1c2UgdmVjdG9ycyBpbiBjaGVjay5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVmbGVjdGlvblwiLFxuICAgIHRpdGxlOiBcIlJlZmxlY3Rpb25cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlRoaXMgcHJvamVjdCByZWluZm9yY2VkIG15IGJlbGllZiB0aGF0IHNvbHZpbmcgaGFyZCBwcm9ibGVtcyBzdGFydHMgd2l0aCB1bmRlcnN0YW5kaW5nIGJlaGF2aW91ci4gQnkgYmxlbmRpbmcgcmVzZWFyY2gsIGRhdGEsIGFuZCByYXBpZCBpdGVyYXRpb24sIHdlIGJ1aWx0IGEgc2FmZXR5IGxheWVyIHRoYXQgc3RpbGwgcHJvdGVjdHMgbWlsbGlvbnMgb2YgcGVvcGxlIGVhY2ggd2Vlay4gVGhlIGhhcmFzc21lbnQgcHJvYmxlbSBtYXkgbmV2ZXIgZGlzYXBwZWFyIGVudGlyZWx5LCBidXQgRGl2YXIgaXMgc2lnbmlmaWNhbnRseSBzYWZlciBmb3IgdGhlIHVzZXJzIHdobyBuZWVkIGl0IG1vc3QuXCIsXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVycyBhdCBTZXRhcmUgQXZhbFwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlByb2R1Y3QgRGVzaWduZXJcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiRmViIDIwMjEg4oCTIEphbiAyMDIyXCIgfSxcbiAgICB7IGxhYmVsOiBcIkltcGFjdFwiLCB2YWx1ZTogXCJEb3VibGVkIHJldGFpbmVkIHJldmVudWUgaW4gNiBtb250aHNcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgbGFiZWw6IFwiUmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWNoaWV2ZWQgd2l0aGluIHRoZSBmaXJzdCA2IG1vbnRocyBvZiByb2xsb3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICBsYWJlbDogXCJEYWlseSBhY3RpdmUgdXNlcnNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIGNvaG9ydCBjb252ZXJ0ZWQgdG8gaGlnaC1pbnRlbnQgREFVc1wiLFxuICAgIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgc2V0YXJlQXZhbEludGVydmlld0Fzc2V0LFxuICAgIFwiU2V0YXJlIEF2YWwgY3VzdG9tZXIgZW5nYWdlbWVudCBpbnRlcnZpZXcgc2Vzc2lvblwiLFxuICAgIHsgd2lkdGg6IDEyMDAsIGhlaWdodDogNjMwIH0sXG4gICksXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNvbnRleHRcIixcbiAgICB0aXRsZTogXCJDb250ZXh0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2V0YXJlIEF2YWwgaXMgdGhlIGRpZ2l0YWwgYXJtIG9mIElyYW4ncyBsYXJnZXN0IHRlbGVjb20uIFdlIHBvd2VyZWQgZmludGVjaCBzZXJ2aWNlcywgVVNTRCBleHBlcmllbmNlcywgYW5kIG1vYmlsZSB2YWx1ZS1hZGRlZCBzZXJ2aWNlcyBuYXRpb24td2lkZS4gR3Jvd3RoIGhhZCBwbGF0ZWF1ZWTigJRvdXIgZnVubmVsIGxlYWtlZCBhZnRlciB0aGUgZmlyc3QgcHVyY2hhc2UuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIEJhc2VcIixcbiAgICAgICAgdmFsdWU6IFwiNjBLK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEYWlseSBzdWJzY3JpYmVycyBhY3Jvc3MgbmF0aW9ud2lkZSBzZXJ2aWNlc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0ZW50aW9uIEdvYWxcIixcbiAgICAgICAgdmFsdWU6IFwieDJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRG91YmxlIDkwLWRheSByZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjaGFsbGVuZ2VcIixcbiAgICB0aXRsZTogXCJDaGFsbGVuZ2VcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkFjdGl2YXRpb24gZmxvdyB0cmVhdGVkIGV2ZXJ5IHNlZ21lbnQgaWRlbnRpY2FsbHksIGlnbm9yaW5nIHVzYWdlIGludGVudC5cIixcbiAgICAgIFwiUmVmZXJyYWwgbG9vcHMgZXhpc3RlZCBidXQgd2VyZSB1bnJld2FyZGluZ+KAlHVzZXJzIGNodXJuZWQgYWZ0ZXIgZmlyc3QgYmVuZWZpdC5cIixcbiAgICAgIFwiVGVhbXMgc2hpcHBlZCBpbiBzaWxvczsgbm8gc2hhcmVkIGV4cGVyaW1lbnQgY2FkZW5jZSBvciBzdWNjZXNzIG1ldHJpY3MuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc2lnaHRzXCIsXG4gICAgdGl0bGU6IFwiV2hhdCBXZSBMZWFybmVkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhyb3VnaCBpbnRlcnZpZXdzLCBmdW5uZWwgYW5hbHl0aWNzLCBhbmQgc2VydmljZS1ibHVlcHJpbnQgbWFwcGluZywgd2Ugc3VyZmFjZWQgdGhlIHVuZGVybHlpbmcgYmxvY2tlcnMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJVc2VycyB3YW50ZWQgdGFuZ2libGUgbWlsZXN0b25lc+KAlHdpdGhvdXQgdGhlbSwgdGhlIHByb2R1Y3QgZmVsdCB0cmFuc2FjdGlvbmFsLlwiLFxuICAgICAgXCJIaWdoLWludGVudCBjb2hvcnRzIHJlc3BvbmRlZCB0byBlZHVjYXRpb25hbCBudWRnZXMgbW9yZSB0aGFuIHByb21vdGlvbnMuXCIsXG4gICAgICBcIkludGVybmFsIHRlYW1zIGxhY2tlZCB2aXNpYmlsaXR5IGludG8gZXhwZXJpbWVudCBvdXRjb21lcywgc2xvd2luZyBpdGVyYXRpb24uXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNvbHV0aW9uXCIsXG4gICAgdGl0bGU6IFwiRXhwZXJpZW5jZSBSZS1BcmNoaXRlY3R1cmVcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkludHJvZHVjZWQgbGlmZWN5Y2xlIG1lc3NhZ2luZyB0YWlsb3JlZCB0byBpbnRlbnQgKGV4cGxvcmVycywgZWFybmVycywgbG95YWxpc3RzKS5cIixcbiAgICAgIFwiU2hpcHBlZCBhIGdhbWlmaWVkIHJlZmVycmFsIGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVkIHByb2dyZXNzIGFuZCB1bmxvY2tlZCB0aWVyZWQgcmV3YXJkcy5cIixcbiAgICAgIFwiU3Rvb2QgdXAgYSBjcm9zcy1mdW5jdGlvbmFsIGdyb3d0aCBndWlsZCB3aXRoIGEgMi13ZWVrIGV4cGVyaW1lbnQgY2FkZW5jZS5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0YWluZWQgUmV2ZW51ZVwiLFxuICAgICAgICB2YWx1ZTogXCIyw5dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDYgbW9udGhzIG9mIHN0YWdlZCByb2xsb3V0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEYWlseSBBY3RpdmUgVXNlcnNcIixcbiAgICAgICAgdmFsdWU6IFwiKzYwS1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWZlcnJhbCBwcm9ncmFtIHBhcnRpY2lwYW50cyBiZWNhbWUgZGFpbHkgYWN0aXZlc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicm9sZVwiLFxuICAgIHRpdGxlOiBcIk15IFJvbGVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIG9wZXJhdGVkIGFzIHRoZSBlbmQtdG8tZW5kIHByb2R1Y3QgZGVzaWduZXIsIGJyaWRnaW5nIHByb2R1Y3QsIG1hcmtldGluZywgY3VzdG9tZXIgc3VjY2VzcywgYW5kIGVuZ2luZWVyaW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiUmFuIHdlZWtseSBjby1jcmVhdGlvbiByaXR1YWxzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBvbiBleHBlcmltZW50IHByaW9yaXRpZXMuXCIsXG4gICAgICBcIkVzdGFibGlzaGVkIGRlc2lnbiBzeXN0ZW0gZm91bmRhdGlvbnMgYWRvcHRlZCBieSB0ZWFtcyBiZXlvbmQgZ3Jvd3RoLlwiLFxuICAgICAgXCJTZXQgdXAgYW5hbHl0aWNzIGRhc2hib2FyZHMgdGhhdCBwYWlyZWQgcXVhbGl0YXRpdmUgbm90ZXMgd2l0aCBmdW5uZWwgS1BJcy5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBHcm93dGhcIixcbiAgICAgICAgcm9sZTogXCJTZXRhcmUgQXZhbFwiLFxuICAgICAgICB0ZXh0OiBcIk1hc2loIGhlbHBlZCB1cyBzaGlmdCBmcm9tIG9uZS1vZmYgY2FtcGFpZ25zIHRvIGEgcHJvZHVjdCBtaW5kc2V0LiBUaGUgbGlmZWN5Y2xlIG1vZGVsIGFuZCBleHBlcmltZW50IGNhZGVuY2Ugc3RpbGwgZ3VpZGUgaG93IHdlIGJ1aWxkIHRvZGF5LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVlla092ZXJ2aWV3OiBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJGcm9tIDQlIHRvIDQ3JTogSG93IEkgVHVybmVkIGEgRmFpbGluZyBGZWF0dXJlIEludG8gYSBDb3JlIFByb2R1Y3QgVmFsdWVcIixcbiAgc3VidGl0bGU6XG4gICAgXCJEZXNwaXRlIG1pbGxpb25zIG9mIGFjdGl2ZSB1c2Vycywgb25seSA0JSBvZiBwYXltZW50cyB3ZXJlIGJpbGxzLiBTZXNzaW9uIHJlY29yZGluZ3Mgc2hvd2VkIHVzZXJzIHdlcmUgdHJ5aW5nIGJ1dCBmYWlsaW5nLiBJIGxlZCB0aGUgY29tcGxldGUgcmVkZXNpZ24gZnJvbSByZXNlYXJjaCB0aHJvdWdoIGxhdW5jaCwgaW5jcmVhc2luZyBhZG9wdGlvbiB0byA0NyUuXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiMjAyMiDigJMgMjAyM1wiIH0sXG4gICAgeyBsYWJlbDogXCJDb21wYW55XCIsIHZhbHVlOiBcIlNldGFyZSBBdmFsIChTZXRhcmVZZWsgYXBwKVwiIH0sXG4gICAgeyBsYWJlbDogXCJDb25zdHJhaW50XCIsIHZhbHVlOiBcIlNvbGUgZGVzaWduZXLigJRiYWxhbmNlZCBkZWVwIHJlc2VhcmNoIHdpdGggcmFwaWQgZXhlY3V0aW9uXCIgfSxcbiAgXSxcbiAgc3RhdHM6IFtcbiAgICB7XG4gICAgICB2YWx1ZTogXCI0JSDihpIgNDclXCIsXG4gICAgICBsYWJlbDogXCJBZG9wdGlvbiByYXRlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiODAlXCIsXG4gICAgICBsYWJlbDogXCJEcm9wIHJlZHVjdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWZ0ZXIgVmVyc2lvbiAyIHBlcmZvcm1hbmNlIGZpeGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIxTStcIixcbiAgICAgIGxhYmVsOiBcIlVzZXJzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRhcmVZZWsgcGxhdGZvcm0gc2NhbGVcIixcbiAgICB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgIHNldGFyZUF2YWxVc2VyRmxvd0Fzc2V0LFxuICAgIFwiU2V0YXJlWWVrIGJpbGwgcGF5bWVudCB1c2VyIGZsb3dcIixcbiAgICB7IHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDYzMCB9LFxuICApLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVlla1NlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjaGFsbGVuZ2VcIixcbiAgICB0aXRsZTogXCJUaGUgQ2hhbGxlbmdlXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiRGVzcGl0ZSBtaWxsaW9ucyBvZiBhY3RpdmUgdXNlcnMsIG9ubHkgNCUgb2YgcGF5bWVudHMgd2VyZSBiaWxscy4gU2Vzc2lvbiByZWNvcmRpbmdzIHNob3dlZCB1c2VycyB3ZXJlIHRyeWluZyBidXQgZmFpbGluZy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIjk2JSBvZiBwYXltZW50cyB3ZXJlIG5vdCBiaWxsc1wiLFxuICAgICAgXCJIaWdoIGRyb3Atb2ZmIHJhdGVzIGF0IHNwZWNpZmljIHN0ZXBzXCIsXG4gICAgICBcIlVzZXJzIHNwZW5kaW5nIHVudXN1YWxseSBsb25nIG9uIHNpbmdsZSBzY3JlZW5zXCIsXG4gICAgICBcIk1hbnkgYWJhbmRvbmVkIGF0dGVtcHRzIGJlZm9yZSBwYXltZW50IGNvbmZpcm1hdGlvblwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJLZXkgcXVlc3Rpb25cIixcbiAgICAgICAgcm9sZTogXCJSZXNlYXJjaCBpbnNpZ2h0XCIsXG4gICAgICAgIHRleHQ6IFwiUGVvcGxlIHBheSBiaWxscyBldmVyeSBtb250aOKAlGl0J3Mgbm90IG9wdGlvbmFsLiBTbyB3aHkgYXJlIHRoZXkgYXZvaWRpbmcgb3VyIGFwcD9cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRoaXMgd2Fzbid0IGFib3V0IGFkZGluZyBmZWF0dXJlcy4gU29tZXRoaW5nIGZ1bmRhbWVudGFsIHdhcyBicm9rZW4uXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImFib3V0LXNldGFyZXlla1wiLFxuICAgIHRpdGxlOiBcIkFib3V0IFNldGFyZVlla1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIklyYW4ncyBsYXJnZXN0IGZpbnRlY2ggcGxhdGZvcm0gc2VydmluZyBtaWxsaW9ucyBvZiB1c2VycyBmb3IgZXZlcnlkYXkgZmluYW5jaWFsIHRyYW5zYWN0aW9ucy5cIixcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRvcCAxMCBGaW5hbmNlIEFwcFwiLFxuICAgICAgXCJNYXJrZXQgTGVhZGVyXCIsXG4gICAgICBcIjEwTSsgQWN0aXZlIFVzZXJzXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIk1vbnRobHkgQWN0aXZlIFVzZXJzXCIsXG4gICAgICAgIHZhbHVlOiBcIjEwLjZNK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOYXRpb253aWRlIGZpbnRlY2ggcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlRvdGFsIEluc3RhbGxzXCIsXG4gICAgICAgIHZhbHVlOiBcIjIuMzZNK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHcm93aW5nIHVzZXIgYmFzZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhlIG9wcG9ydHVuaXR5OiBCaWxsIHBheW1lbnQgaXMgYSBoaWdoLWZyZXF1ZW5jeSwgaGlnaC1zdHJlc3MgdGFzayB0aGF0IGV2ZXJ5IGhvdXNlaG9sZCBmYWNlcyBtb250aGx5LiBJZiB3ZSBjb3VsZCBzb2x2ZSBpdCB3ZWxsLCB3ZSdkIGJlY29tZSBpbmRpc3BlbnNhYmxlLlwiLFxuICAgICAgXCJUaGUgcHJvYmxlbTogV2UgaGFkIHRoZSBmZWF0dXJlLCBidXQgYWxtb3N0IG5vYm9keSB1c2VkIGl0LlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVy4oCUbGVkIGNvbXBsZXRlIHJlZGVzaWduIGZyb20gcmVzZWFyY2ggdGhyb3VnaCBsYXVuY2guXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJVc2VyIHJlc2VhcmNoICYgc3ludGhlc2lzXCIsXG4gICAgICBcIlVYL1VJIGRlc2lnblwiLFxuICAgICAgXCJQcm90b3R5cGluZyAmIHRlc3RpbmdcIixcbiAgICAgIFwiQ29sbGFib3JhdGlvbiBvbiBpbXBsZW1lbnRhdGlvbiAmIHJvbGxvdXRcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ29uc3RyYWludDogU29sZSBkZXNpZ25lcuKAlGJhbGFuY2VkIGRlZXAgcmVzZWFyY2ggd2l0aCByYXBpZCBleGVjdXRpb25cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZGlzY292ZXJ5XCIsXG4gICAgdGl0bGU6IFwiRGlzY292ZXJ5XCIsXG4gICAgc2hvcnRUaXRsZTogXCJEaXNjb3ZlcnlcIixcbiAgICBleWVicm93OiBcIldoYXQgVXNlcnMgQWN0dWFsbHkgTmVlZGVkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiTXVsdGktbWV0aG9kIHJlc2VhcmNoIGNvbWJpbmluZyBxdWFsaXRhdGl2ZSBpbnRlcnZpZXdzLCBjb250ZXh0dWFsIGlucXVpcnksIGRpZ2l0YWwgYmVoYXZpb3IgYW5hbHlzaXMsIGFuZCBxdWFudGl0YXRpdmUgcGF0dGVybnMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJRdWFsaXRhdGl2ZTogSW4tZGVwdGggaW50ZXJ2aWV3cyB3aXRoIGJ1aWxkaW5nIG1hbmFnZXJzLCBoZWFkcyBvZiBob3VzZWhvbGRzLCBhbmQgZXZlcnlkYXkgdXNlcnNcIixcbiAgICAgIFwiQ29udGV4dHVhbCBpbnF1aXJ5OiBPYnNlcnZpbmcgYmlsbCBwYXltZW50IGluIHJlYWwgY29udGV4dHNcIixcbiAgICAgIFwiRXRobm9ncmFwaGljIGRldGFpbHM6IFN0dWR5aW5nIGEgYnVpbGRpbmcgbWFuYWdlcidzIHBoeXNpY2FsIG5vdGVib29rXCIsXG4gICAgICBcIkRpZ2l0YWwgYmVoYXZpb3I6IFNlc3Npb24gcmVjb3JkaW5ncywgYXBwIHN0b3JlIHJldmlld3MsIHNvY2lhbCBtZWRpYSBzZW50aW1lbnRcIixcbiAgICAgIFwiUXVhbnRpdGF0aXZlOiBEcm9wLW9mZiBhbmFseXNpcyBhbmQgYmVoYXZpb3IgcGF0dGVybnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicGVyc29uYXNcIixcbiAgICB0aXRsZTogXCJQZXJzb25hc1wiLFxuICAgIHNob3J0VGl0bGU6IFwiUGVyc29uYXNcIixcbiAgICBleWVicm93OiBcIlR3byBDb3JlIFBlcnNvbmFzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVHdvIGRpc3RpbmN0IHBlcnNvbmFzIGVtZXJnZWQgd2l0aCBkaWZmZXJlbnQgbmVlZHMgZHJpdmluZyBldmVyeSBkZXNpZ24gZGVjaXNpb24uXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgQnVpbGRpbmcgTWFuYWdlciAoQWdlIDU1Kyk6IE1hbmFnZXMgdXRpbGl0aWVzIGZvciBlbnRpcmUgYXBhcnRtZW50IGJ1aWxkaW5nLiBOZWVkcyBvZmZpY2lhbCwgc2hhcmVhYmxlIGRvY3VtZW50YXRpb24uIFplcm8gdG9sZXJhbmNlIGZvciBhbWJpZ3VpdHkuXCIsXG4gICAgICBcIlRoZSBIZWFkIG9mIEhvdXNlaG9sZDogUGF5cyBhbGwgZmFtaWx5IGJpbGxzIG1vbnRobHkuIE5lZWRzIHRvIGF2b2lkIHJlLWVudGVyaW5nIDEzLWRpZ2l0IGNvZGVzIGV2ZXJ5IG1vbnRoLiBDb25zdGFudGx5IGZvcmdldHMgZHVlIGRhdGVzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJCdWlsZGluZyBNYW5hZ2VyXCIsXG4gICAgICAgIHJvbGU6IFwiQWdlIDU1K1wiLFxuICAgICAgICB0ZXh0OiBcIkkgbWFrZSBwaG90b2NvcGllcyBvZiBldmVyeSByZWNlaXB0IGFuZCBnaXZlIHRoZW0gdG8gcmVzaWRlbnRzLiBJIG5lZWQgcHJvb2YgdGhhdCBpdCdzIHBhaWQuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBIb3VzZWhvbGRcIixcbiAgICAgICAgcm9sZTogXCJQYXlzIGFsbCBmYW1pbHkgYmlsbHMgbW9udGhseVwiLFxuICAgICAgICB0ZXh0OiBcIkVudGVyaW5nIHRoaXMgMTMtZGlnaXQgY29kZSBldmVyeSBzaW5nbGUgbW9udGggaXMgdG9ydHVyZS5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc2lnaHRzXCIsXG4gICAgdGl0bGU6IFwiSW5zaWdodHNcIixcbiAgICBzaG9ydFRpdGxlOiBcIkluc2lnaHRzXCIsXG4gICAgZXllYnJvdzogXCJUaGUgQnJlYWt0aHJvdWdoIEluc2lnaHRzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhyZWUgaW5zaWdodHMgZnVuZGFtZW50YWxseSBjaGFuZ2VkIG91ciBhcHByb2FjaC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkluc2lnaHQgIzE6IFVzZXJzIHdlcmVuJ3QgY29uZnVzZWQgYWJvdXQgY292ZXJhZ2XigJR0aGV5IHdlcmUgY29uZnVzZWQgYWJvdXQgdXMuIFRoZXkgaGFkIG5vIGlkZWEgd2hpY2ggYmlsbHMgd2Ugc3VwcG9ydGVkLCBmb3JjaW5nIHRyaWFsLWFuZC1lcnJvciB0aGF0IGRlc3Ryb3llZCB0cnVzdC5cIixcbiAgICAgIFwiSW5zaWdodCAjMjogVGhlIHJlY2VpcHQgd2FzIGV2ZXJ5dGhpbmcuIFVzZXJzIG5lZWRlZCBhbiBvZmZpY2lhbCBkb2N1bWVudCB0aGV5IGNvdWxkIHNob3cgdG8gZmFtaWx5LCBzaGFyZSB3aXRoIHJlc2lkZW50cywgb3IgcHJlc2VudCB0byBsYW5kbG9yZHMuIFRoaXMgd2Fzbid0IGEgJ25pY2UtdG8taGF2ZSfigJRpdCB3YXMgdGhlIGNvcmUgZW1vdGlvbmFsIG5lZWQuXCIsXG4gICAgICBcIkluc2lnaHQgIzM6IEJpbGwgcGF5bWVudCBpc24ndCBhIG9uZS10aW1lIHRhc2vigJRpdCdzIGEgcmVjdXJyaW5nIGN5Y2xlLiBPdXIgZmxvdyB0cmVhdGVkIGV2ZXJ5IHBheW1lbnQgbGlrZSBhIG5ldyB0cmFuc2FjdGlvbiwgZm9yY2luZyB1c2VycyB0byByZS1lbnRlciBldmVyeXRoaW5nIG1vbnRobHkuXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRoZSByZWNlaXB0IHdhc24ndCBkZWNvcmF0aW9u4oCUaXQgd2FzIHRoZSBlbnRpcmUgdmFsdWUgcHJvcG9zaXRpb25cIixcbiAgICAgIFwiUGVvcGxlIHBheSB0aGUgc2FtZSBiaWxscyByZXBlYXRlZGx5LiBUaGV5IG5lZWQgYSBzeXN0ZW0gdGhhdCByZW1lbWJlcnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicGhpbG9zb3BoeVwiLFxuICAgIHRpdGxlOiBcIkRlc2lnbiBQaGlsb3NvcGh5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiRGlnaXRpemUgd2hhdCBwZW9wbGUgYWxyZWFkeSBkbyBpbiB0aGUgcGh5c2ljYWwgd29ybGTigJR0aGVuIG1ha2UgaXQgMTB4IGJldHRlci5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIktlZXAgbm90ZWJvb2tzIG9mIGJpbGwgSURzIOKGkiBXZSBidWlsdCBhIGRpZ2l0YWwgYmlsbCBsaXN0XCIsXG4gICAgICBcIlNldCBjYWxlbmRhciByZW1pbmRlcnMg4oaSIFdlIGJ1aWx0IHNtYXJ0IG5vdGlmaWNhdGlvbnNcIixcbiAgICAgIFwiTWFrZSBwaG90b2NvcGllcyBvZiByZWNlaXB0cyDihpIgV2UgY3JlYXRlZCBzaGFyZWFibGUgb2ZmaWNpYWwgcmVjZWlwdHNcIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiVGhlIGV4cGVyaWVuY2UgaGFkIHRvIGZlZWwgbmF0dXJhbCBmcm9tIGRheSBvbmUsIG5vdCBsaWtlIGxlYXJuaW5nIG5ldyBzb2Z0d2FyZVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2x1dGlvbnNcIixcbiAgICB0aXRsZTogXCJUaGUgU29sdXRpb25zXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2l4IGludGVyY29ubmVjdGVkIHNvbHV0aW9ucyBhZGRyZXNzaW5nIGNvcmUgdXNlciBuZWVkcy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlNhdmVkIEJpbGxzICYgT25lLVRhcCBVcGRhdGVzOiBSZWdpc3RlciBhIGJpbGwgb25jZSwgdXNlIGl0IGZvcmV2ZXIuICdDaGVjayBmb3IgbmV3IGFtb3VudCcgYnV0dG9uIGZldGNoZXMgbGF0ZXN0IGJpbGwgaW5zdGFudGx54oCUbm8gbW9yZSByZS1lbnRlcmluZyAxMy1kaWdpdCBjb2Rlc1wiLFxuICAgICAgXCJEaWdpdGFsIEJpbGwgTWFuYWdlbWVudCBIdWI6IEFsbCBiaWxscyBpbiBvbmUgb3JnYW5pemVkIGxpc3Qgd2l0aCBzdGF0dXMgbGFiZWxzIChQYWlkLCBQZW5kaW5nLCBPdmVyZHVlKS4gQmFja3dhcmQtY29tcGF0aWJsZTogcmV0dXJuaW5nIHVzZXJzIHNhdyBoaXN0b3J5IGltbWVkaWF0ZWx5XCIsXG4gICAgICBcIlNtYXJ0IFJlbWluZGVyczogU2V0IGN1c3RvbSByZW1pbmRlcnMgZm9yIGVhY2ggYmlsbCB3aXRoIHB1c2ggbm90aWZpY2F0aW9ucyBiZWZvcmUgZHVlIGRhdGVzXCIsXG4gICAgICBcIlFSL0JhcmNvZGUgU2Nhbm5pbmc6IEluc3RhbnQgYmlsbCBlbnRyeSB2aWEgY2FtZXJh4oCUY3JpdGljYWwgZm9yIG9sZGVyIHVzZXJzIGFuZCBidXN5IHBlcnNvbmFzXCIsXG4gICAgICBcIkltbWVkaWF0ZSBUcmFuc3BhcmVuY3k6IFN1cHBvcnRlZCBiaWxsIHByb3ZpZGVycyBzaG93biB1cGZyb250IHdpdGggbG9nb3MuIENsZWFyIGd1aWRhbmNlIG9uIHdoYXQgd2UgY2FuIGFuZCBjYW4ndCBwcm9jZXNz4oCUbm8gbW9yZSB0cmlhbC1hbmQtZXJyb3JcIixcbiAgICAgIFwiT2ZmaWNpYWwsIFNoYXJlYWJsZSBSZWNlaXB0czogUERGLXF1YWxpdHkgcmVjZWlwdHMgd2l0aCBhbGwgbGVnYWwgZGV0YWlscy4gT25lLXRhcCBzaGFyaW5nIHZpYSBhbnkgY2hhbm5lbOKAlGJ1aWx0IHNwZWNpZmljYWxseSBmb3IgdGhlICdwcm9vZicgcmVxdWlyZW1lbnRcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZmFpbHVyZVwiLFxuICAgIHRpdGxlOiBcIkxlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHNob3J0VGl0bGU6IFwiTGVhcm5pbmcgZnJvbSBGYWlsdXJlXCIsXG4gICAgZXllYnJvdzogXCJWZXJzaW9uIDE6IFRoZSBGYWlsdXJlIFRoYXQgTWFkZSBFdmVyeXRoaW5nIEJldHRlclwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlZlcnNpb24gMSBsYXVuY2hlZCBhbmQgZmFpbGVkIHdpdGhpbiA0OCBob3Vycy4gQmlsbCBwYXltZW50cyBkcm9wcGVkIDgwJS4gV2Ugcm9sbGVkIGJhY2sgaW1tZWRpYXRlbHkuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJXaGF0IGhhcHBlbmVkOiBCaWxscyB0b29rIDgtMTAgc2Vjb25kcyB0byBsb2FkICh3ZSB3ZXJlIGZldGNoaW5nIGV2ZXJ5dGhpbmcgYXV0b21hdGljYWxseSkuIE5vIGxvYWRpbmcgc3RhdGVzLCBubyBza2VsZXRvbiBVSSwgbm8gcHJvZ3Jlc3MgaW5kaWNhdG9ycy4gVXNlcnMgc2F3IGJsYW5rIHNjcmVlbnMuXCIsXG4gICAgXSxcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIldoYXQgd2VudCB3cm9uZzogR3JlYXQgVVggZGVzaWduIGNhbid0IHNhdmUgcG9vciB0ZWNobmljYWwgcGVyZm9ybWFuY2UuIFdlIHNraXBwZWQgcmVhbGlzdGljIGxhdGVuY3kgdGVzdGluZywgZGlkbid0IHNpbXVsYXRlIHdvcnN0LWNhc2UgbmV0d29yayBjb25kaXRpb25zLCBwcmlvcml0aXplZCBhdXRvbWF0aW9uIG92ZXIgdXNlciBjb250cm9sXCIsXG4gICAgICBcIldoYXQgY2hhbmdlZDogU3dpdGNoZWQgdG8gbWFudWFsICdDaGVjayBBbW91bnQnIGJ1dHRvbnMgKGluc3RhbnQgZmVlZGJhY2spLCBhZGRlZCBsYXp5IGxvYWRpbmcgKyBza2VsZXRvbiBzdGF0ZXMgZXZlcnl3aGVyZSwgaW1wbGVtZW50ZWQgY29tcHJlaGVuc2l2ZSBwcmUtbGF1bmNoIHRlY2huaWNhbCB0ZXN0aW5nLCBjcmVhdGVkIG5ldyBjb21wYW55LXdpZGUgc3RhbmRhcmRzIGZvciBwZXJmb3JtYW5jZSB0ZXN0aW5nXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRoaXMgZmFpbHVyZSBiZWNhbWUgdGhlIG1vc3QgdmFsdWFibGUgcGFydCBvZiB0aGUgcHJvamVjdFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ2ZXJzaW9uMlwiLFxuICAgIHRpdGxlOiBcIlZlcnNpb24gMlwiLFxuICAgIHNob3J0VGl0bGU6IFwiVmVyc2lvbiAyXCIsXG4gICAgZXllYnJvdzogXCJUaGUgTGF1bmNoIFRoYXQgV29ya2VkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQXJtZWQgd2l0aCBsZXNzb25zIGZyb20gZmFpbHVyZSwgd2Ugc2hpcHBlZCBhIHN0YWJsZSwgZmFzdCwgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZS5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIk1hbnVhbCBjb250cm9sOiBVc2VycyB0cmlnZ2VyIHVwZGF0ZXMgd2hlbiByZWFkeVwiLFxuICAgICAgXCJJbnN0YW50IGZlZWRiYWNrOiBMb2FkaW5nIHN0YXRlcyBmb3IgZXZlcnkgYWN0aW9uXCIsXG4gICAgICBcIkJhY2t3YXJkIGNvbXBhdGliaWxpdHk6IFplcm8gbGVhcm5pbmcgY3VydmUgZm9yIHJldHVybmluZyB1c2Vyc1wiLFxuICAgICAgXCJPZmZpY2lhbCByZWNlaXB0czogU29sdmVkIHRoZSBjb3JlIGVtb3Rpb25hbCBuZWVkXCIsXG4gICAgICBcIlNtYXJ0IHJlbWluZGVyczogQWRkcmVzc2VkIGZvcmdldGZ1bG5lc3NcIixcbiAgICAgIFwiQ2xlYXIgY29tbXVuaWNhdGlvbjogQnVpbHQgY29uZmlkZW5jZSBmcm9tIHNjcmVlbiBvbmVcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiUmVzdWx0c1wiLFxuICAgIHNob3J0VGl0bGU6IFwiUmVzdWx0c1wiLFxuICAgIGV5ZWJyb3c6IFwiQnVzaW5lc3MgSW1wYWN0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiNCUg4oaSIDQ3JSBhZG9wdGlvbiByYXRlLiBUaGF0J3MgMTB4IGdyb3d0aCBpbiBiaWxsIHBheW1lbnQgc2hhcmUuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJCaWxsIHBheW1lbnQgd2VudCBmcm9tIGEgbmVnbGVjdGVkIGZlYXR1cmUgdG8gb25lIG9mIHRoZSBhcHAncyBwcmltYXJ5IHZhbHVlIHByb3Bvc2l0aW9ucy5cIixcbiAgICBdLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVHJ1c3Q6IE9mZmljaWFsIHJlY2VpcHRzIGFuZCBjbGVhciBjb21tdW5pY2F0aW9uXCIsXG4gICAgICBcIkVhc2U6IE9uZS10aW1lIHNldHVwLCByZWN1cnJpbmcgdXNlXCIsXG4gICAgICBcIlJlbGlhYmlsaXR5OiBGYXN0LCBzdGFibGUsIHByZWRpY3RhYmxlXCIsXG4gICAgICBcIkFsaWdubWVudDogTWF0Y2hlZCByZWFsLXdvcmxkIGJlaGF2aW9yXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkb3B0aW9uIHJhdGVcIixcbiAgICAgICAgdmFsdWU6IFwiNCUg4oaSIDQ3JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCIxMHggZ3Jvd3RoIGluIGJpbGwgcGF5bWVudCBzaGFyZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibGVhcm5pbmdzXCIsXG4gICAgdGl0bGU6IFwiTGVhcm5pbmdzXCIsXG4gICAgc2hvcnRUaXRsZTogXCJMZWFybmluZ3NcIixcbiAgICBleWVicm93OiBcIktleSBUYWtlYXdheXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJGaXZlIGxlc3NvbnMgZnJvbSB0aGlzIHByb2plY3QuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJEZXNpZ24gZG9lc24ndCBleGlzdCBpbiBpc29sYXRpb246IEV2ZW4gcGVyZmVjdCBVWCBmYWlscyB3aXRob3V0IHRlY2huaWNhbCBwZXJmb3JtYW5jZVwiLFxuICAgICAgXCJFbW90aW9uYWwgbmVlZHMgPSBGdW5jdGlvbmFsIG5lZWRzOiBUaGUgcmVjZWlwdCB3YXNuJ3QgZGVjb3JhdGlvbuKAlGl0IHdhcyB0aGUgZW50aXJlIHZhbHVlIHByb3Bvc2l0aW9uXCIsXG4gICAgICBcIlJlYWwgYmVoYXZpb3IgPiBBc3N1bXB0aW9uczogVXNlcnMgc2hvd2VkIHVzIHdoYXQgdGhleSBuZWVkZWQuIFdlIGxpc3RlbmVkXCIsXG4gICAgICBcIkJhY2t3YXJkIGNvbXBhdGliaWxpdHkgaXMgdHJ1c3Q6IEVzcGVjaWFsbHkgaW4gZmluYW5jaWFsIHByb2R1Y3RzLCBmYW1pbGlhcml0eSA9IGNvbmZpZGVuY2VcIixcbiAgICAgIFwiRmFpbGVkIGxhdW5jaGVzIGNhbiBiZSB0aGUgYmVzdCBsZWFybmluZzogT3duaW5nIG1pc3Rha2VzIGFuZCBpdGVyYXRpbmcgZmFzdCBidWlsdCBhIHN0cm9uZ2VyIHByb2R1Y3QgYW5kIHByb2Nlc3NcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwib3JnYW5pemF0aW9uYWxcIixcbiAgICB0aXRsZTogXCJPcmdhbml6YXRpb25hbCBJbXBhY3RcIixcbiAgICBzaG9ydFRpdGxlOiBcIkltcGFjdFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJleW9uZCB0aGUgcHJvZHVjdCwgdGhpcyBwcm9qZWN0IGNoYW5nZWQgaG93IHdlIHdvcmsuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJNYW5kYXRvcnkgcHJlLWxhdW5jaCBwZXJmb3JtYW5jZSB0ZXN0aW5nXCIsXG4gICAgICBcIlN0YWdpbmcgZW52aXJvbm1lbnRzIHdpdGggcmVhbC13b3JsZCBkYXRhXCIsXG4gICAgICBcIlJlcXVpcmVkIGxvYWRpbmcvc2tlbGV0b24gc3RhdGVzIGZvciBhbGwgaGVhdnkgb3BlcmF0aW9uc1wiLFxuICAgICAgXCJTaGFyZWQgc3RhbmRhcmRzIGFjcm9zcyBkZXNpZ24gYW5kIGVuZ2luZWVyaW5nXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlRoZXNlIGNoYW5nZXMgaW1wcm92ZWQgZXZlcnkgZmVhdHVyZSB0aGF0IGNhbWUgYWZ0ZXJcIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkeUVudHJpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5RW50cnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICB0aXRsZTogXCJEaXZhciBTZWN1cmUgQ2FsbFwiLFxuICAgIGV4Y2VycHQ6XG4gICAgICBcIlJlZHVjZWQgaGFyYXNzbWVudCBieSA2MCUgZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMgdGhyb3VnaCBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBsYXllciBpbnNpZGUgSXJhbidzIGxhcmdlc3QgbWFya2V0cGxhY2UuXCIsXG4gICAgZm9jdXM6IFwiVHJ1c3QgJiBTYWZldHlcIixcbiAgICBwYXRoOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50XCIsXG4gICAgZXhjZXJwdDpcbiAgICAgIFwiUmUtYXJjaGl0ZWN0ZWQgbGlmZWN5Y2xlIGpvdXJuZXlzIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCBjb252ZXJ0ZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIDYwSysgZGFpbHkgYWN0aXZlIHVzZXJzLlwiLFxuICAgIGZvY3VzOiBcIlJldGVudGlvbiAmIEdyb3d0aFwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICAgIHRpdGxlOiBcIlNldGFyZVllayBCaWxsIFBheW1lbnRcIixcbiAgICBleGNlcnB0OlxuICAgICAgXCJJbmNyZWFzZWQgYmlsbCBwYXltZW50IGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGF0IFNldGFyZSBBdmFsJ3MgU2V0YXJlWWVrIGFwcCBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgICBmb2N1czogXCJQcm9kdWN0IERlc2lnbiAmIEdyb3d0aFwiLFxuICAgIHBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICB9LFxuXTtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGRpdmFyT3ZlcnZpZXcsIHNldGFyZU92ZXJ2aWV3LCBzZXRhcmVZZWtPdmVydmlldyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBkaXZhclN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ2FzZVN0dWR5XCIsXG4gIG5hbWU6IGRpdmFyT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGF1dGhvcjoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICB9LFxuICB1cmw6IGAke3NpdGVVcmx9L2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbGAsXG4gIGltYWdlOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gIGtleXdvcmQ6IFtcIlRydXN0ICYgU2FmZXR5XCIsIFwiSGFyYXNzbWVudCBSZWR1Y3Rpb25cIiwgXCJNYXJrZXRwbGFjZVwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBkaXZhckNhc2VTdHVkeU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkRpdmFyIFNlY3VyZSBDYWxsIENhc2UgU3R1ZHkg4oCUIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIGRpdmFyT3ZlcnZpZXcuc3VidGl0bGUgPz9cbiAgICBcIlByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgZm9yIDIuMU0gRGl2YXIgdXNlcnMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IGRpdmFyT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgaGVpZ2h0OiBkaXZhck92ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBkaXZhclN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiTGlmZWN5Y2xlIHJlZGVzaWduIHRoYXQgZG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGFuZCB0dXJuZWQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgYXV0aG9yOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gIH0sXG4gIHVybDogYCR7c2l0ZVVybH0vY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRgLFxuICBpbWFnZTogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUmV0ZW50aW9uXCIsIFwiTGlmZWN5Y2xlXCIsIFwiR3Jvd3RoIERlc2lnblwiXSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVDYXNlU3R1ZHlNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJTZXRhcmUgQXZhbCBFbmdhZ2VtZW50IENhc2UgU3R1ZHkg4oCUIERvdWJsaW5nIFJldGFpbmVkIFJldmVudWVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBsaWZlY3ljbGUgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWUgYW5kIGNvbnZlcnQgcmVmZXJyYWwgY29ob3J0cyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2Vycy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAgICAgIGFsdDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmFsdCxcbiAgICAgIHdpZHRoOiBzZXRhcmVPdmVydmlldy5oZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgIGhlaWdodDogc2V0YXJlT3ZlcnZpZXcuaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IHNldGFyZVN0cnVjdHVyZWREYXRhLFxufTtcblxuY29uc3Qgc2V0YXJlWWVrU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDYXNlU3R1ZHlcIixcbiAgbmFtZTogc2V0YXJlWWVrT3ZlcnZpZXcudGl0bGUsXG4gIGRlc2NyaXB0aW9uOlxuICAgIHNldGFyZVlla092ZXJ2aWV3LnN1YnRpdGxlID8/XG4gICAgXCJSZWRlc2lnbmVkIGJpbGwgcGF5bWVudCBleHBlcmllbmNlIHRoYXQgaW5jcmVhc2VkIGFkb3B0aW9uIGZyb20gNCUgdG8gNDclIGJ5IHNvbHZpbmcgdHJ1c3QsIHRyYW5zcGFyZW5jeSwgYW5kIHJlY3VycmluZyB3b3JrZmxvdyBjaGFsbGVuZ2VzLlwiLFxuICBhdXRob3I6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgfSxcbiAgdXJsOiBgJHtzaXRlVXJsfS9jYXNlLXN0dWRpZXMvc2V0YXJlLXllay1iaWxsLXBheW1lbnRgLFxuICBpbWFnZTogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLnNyYyxcbiAga2V5d29yZDogW1wiUHJvZHVjdCBEZXNpZ25cIiwgXCJHcm93dGhcIiwgXCJGaW50ZWNoXCIsIFwiVXNlciBFeHBlcmllbmNlXCIsIFwiU2V0YXJlIEF2YWxcIiwgXCJTZXRhcmVZZWtcIl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlWWVrQ2FzZVN0dWR5TWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiU2V0YXJlWWVrIEJpbGwgUGF5bWVudCBDYXNlIFN0dWR5IOKAlCBGcm9tIDQlIHRvIDQ3JSBBZG9wdGlvbiBhdCBTZXRhcmUgQXZhbFwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBzZXRhcmVZZWtPdmVydmlldy5zdWJ0aXRsZSA/P1xuICAgIFwiUmVkZXNpZ25lZCBTZXRhcmVZZWsncyBiaWxsIHBheW1lbnQgZXhwZXJpZW5jZSBhdCBTZXRhcmUgQXZhbCB0byBpbmNyZWFzZSBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JSBieSBzb2x2aW5nIHRydXN0LCB0cmFuc3BhcmVuY3ksIGFuZCByZWN1cnJpbmcgd29ya2Zsb3cgY2hhbGxlbmdlcy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS15ZWstYmlsbC1wYXltZW50XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5zcmMsXG4gICAgICBhbHQ6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5hbHQsXG4gICAgICB3aWR0aDogc2V0YXJlWWVrT3ZlcnZpZXcuaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICBoZWlnaHQ6IHNldGFyZVlla092ZXJ2aWV3Lmhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBzZXRhcmVZZWtTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjog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TixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFB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LE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxTQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxTQUNFO0FBQUEsSUFDRixTQUFT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QUNBLEtBQUssR0FBRztBQUFBLEVBQ1IsT0FBTyxrQkFBa0IsVUFBVTtBQUFBLEVBQ25DLFNBQVMsQ0FBQyxrQkFBa0IsVUFBVSxXQUFXLG1CQUFtQixlQUFlLFdBQVc7QUFDaEc7QUFFTyxJQUFNLDZCQUEyQztBQUFBLEVBQ3RELE9BQU87QUFBQSxFQUNQLGFBQ0Usa0JBQWtCLFlBQ2xCO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLGtCQUFrQixVQUFVO0FBQUEsTUFDakMsS0FBSyxrQkFBa0IsVUFBVTtBQUFBLE1BQ2pDLE9BQU8sa0JBQWtCLFVBQVUsU0FBUztBQUFBLE1BQzVDLFFBQVEsa0JBQWtCLFVBQVUsVUFBVTtBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOyIsCiAgImRlYnVnSWQiOiAiMTU4MjFGNjVFMjU5REMwNzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
