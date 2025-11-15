import {
  smoothScrollToElement
} from "./chunk-3v4zq8dh.js";
import {
  Telegram_default
} from "./chunk-htjd0bqe.js";
import {
  EmailRounded_default
} from "./chunk-w1484txq.js";
import {
  GhostButton_default,
  Pill_default,
  PrimaryButton_default,
  createImageResource
} from "./chunk-rwk54k0r.js";
import {
  Seo_default,
  site_default
} from "./chunk-4q5mgts6.js";
import"./chunk-56dhb304.js";
import {
  Avatar_default,
  Box_default,
  Button_default,
  CardActions_default,
  CardContent_default,
  Card_default,
  Container_default,
  DialogContent_default,
  DialogTitle_default,
  Dialog_default,
  Grid_default,
  IconButton_default,
  Link,
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  require_react,
  useTheme
} from "./chunk-pzn0e5q4.js";

// node_modules/@mui/icons-material/esm/ArrowForwardRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowForwardRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"
}), "ArrowForwardRounded");

// node_modules/@mui/icons-material/esm/LockRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var LockRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"
}), "LockRounded");

// node_modules/@mui/icons-material/esm/PlayCircleOutlineRounded.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var PlayCircleOutlineRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "m10.8 15.9 4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4v7c0 .41.47.65.8.4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "PlayCircleOutlineRounded");

// src/features/home/components/CaseStudyCard.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyCard = ({ caseStudy, active = false, onOpenRecap }) => {
  const theme = useTheme();
  const { palette, tokens } = theme;
  const isDark = palette.mode === "dark";
  const isLocked = caseStudy.isLocked ?? false;
  const isInProgress = caseStudy.isInProgress ?? false;
  const activeBackground = isDark ? "linear-gradient(135deg, rgba(20, 45, 110, 0.98), rgba(58, 118, 226, 0.88))" : "linear-gradient(135deg, rgba(17, 76, 170, 0.88), rgba(60, 151, 255, 0.82))";
  const inactiveBackground = isDark ? "linear-gradient(140deg, rgba(20, 28, 52, 0.82), rgba(12, 18, 36, 0.88))" : "linear-gradient(135deg, rgba(248, 251, 255, 0.94), rgba(232, 242, 255, 0.88))";
  const lockedBackground = isDark ? "linear-gradient(140deg, rgba(20, 28, 52, 0.65), rgba(12, 18, 36, 0.7))" : "linear-gradient(135deg, rgba(248, 251, 255, 0.75), rgba(232, 242, 255, 0.7))";
  const headingColor = active ? "rgba(255, 255, 255, 0.96)" : isLocked ? isDark ? "rgba(180, 190, 220, 0.7)" : "rgba(100, 120, 150, 0.7)" : isDark ? "rgba(226, 234, 255, 0.95)" : palette.text.primary;
  const bodyColor = active ? "rgba(255, 255, 255, 0.85)" : isLocked ? isDark ? "rgba(160, 175, 210, 0.6)" : "rgba(120, 140, 170, 0.6)" : isDark ? "rgba(210, 220, 255, 0.82)" : palette.text.secondary;
  const borderColor = active ? "rgba(255, 255, 255, 0.42)" : isLocked ? isDark ? "rgba(122, 162, 255, 0.18)" : "rgba(17, 76, 170, 0.08)" : isDark ? "rgba(122, 162, 255, 0.28)" : "rgba(17, 76, 170, 0.12)";
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
    component: "article",
    elevation: 0,
    sx: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: active ? activeBackground : isLocked ? lockedBackground : inactiveBackground,
      border: `1px solid ${borderColor}`,
      color: active ? palette.common.white : palette.text.primary,
      boxShadow: active ? tokens.shadow.level3 : tokens.shadow.level2,
      transition: tokens.transition.hover,
      opacity: isLocked ? 0.85 : 1,
      position: "relative",
      "&:hover": {
        transform: isLocked ? "none" : "translateY(-6px)",
        boxShadow: isLocked ? tokens.shadow.level2 : tokens.shadow.level3
      }
    },
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
        sx: { flexGrow: 1, pb: 3 },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          spacing: 2.5,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              spacing: 2,
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  direction: "row",
                  alignItems: "center",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "eyebrow",
                      sx: {
                        color: active ? "rgba(255, 255, 255, 0.78)" : isLocked ? isDark ? "rgba(150, 165, 200, 0.7)" : "rgba(120, 140, 170, 0.7)" : isDark ? "rgba(189, 204, 255, 0.82)" : palette.brand.secondary
                      },
                      children: [
                        "Case ",
                        caseStudy.number
                      ]
                    }, undefined, true, undefined, this),
                    isLocked && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LockRounded_default, {
                      sx: {
                        fontSize: "0.875rem",
                        color: isDark ? "rgba(150, 165, 200, 0.7)" : "rgba(120, 140, 170, 0.7)"
                      }
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "center",
                  children: [
                    isInProgress && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                      label: "In Progress",
                      sx: {
                        backgroundColor: isDark ? "rgba(255, 193, 7, 0.2)" : "rgba(255, 193, 7, 0.15)",
                        color: isDark ? "rgba(255, 224, 130, 0.95)" : "rgba(184, 134, 11, 0.95)",
                        border: `1px solid ${isDark ? "rgba(255, 193, 7, 0.3)" : "rgba(255, 193, 7, 0.25)"}`,
                        fontSize: "0.7rem"
                      },
                      size: "small"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                      label: caseStudy.tag,
                      sx: {
                        backgroundColor: active ? "rgba(255, 255, 255, 0.2)" : isDark ? "rgba(98, 132, 218, 0.24)" : "rgba(227, 241, 255, 0.85)",
                        color: active ? "rgba(255, 255, 255, 0.92)" : isLocked ? isDark ? "rgba(180, 195, 220, 0.8)" : "rgba(120, 140, 170, 0.8)" : isDark ? "rgba(214, 224, 255, 0.92)" : palette.brand.secondary,
                        border: active ? "1px solid rgba(255, 255, 255, 0.3)" : undefined
                      },
                      size: "small"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "h3",
              component: "h3",
              sx: { color: headingColor },
              children: caseStudy.title
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "subtitle2",
              sx: {
                fontWeight: 500,
                color: bodyColor
              },
              children: [
                caseStudy.platform,
                caseStudy.platformDetail && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                  component: "span",
                  sx: {
                    display: "inline-block",
                    ml: 0.75,
                    color: bodyColor,
                    fontWeight: 400,
                    opacity: 0.9
                  },
                  children: [
                    "(",
                    caseStudy.platformDetail,
                    ")"
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            caseStudy.stat && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "body2",
              sx: { color: bodyColor },
              children: caseStudy.stat
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              direction: "row",
              spacing: 1,
              flexWrap: "wrap",
              useFlexGap: true,
              children: caseStudy.tags.map((tag) => {
                const isNDA = tag.toLowerCase() === "nda";
                return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                  label: tag,
                  size: "small",
                  sx: {
                    backgroundColor: isNDA ? active ? "rgba(255, 87, 34, 0.25)" : isDark ? "rgba(255, 87, 34, 0.2)" : "rgba(255, 87, 34, 0.12)" : active ? "rgba(255, 255, 255, 0.18)" : isDark ? "rgba(98, 132, 218, 0.22)" : "rgba(31, 111, 235, 0.12)",
                    color: isNDA ? active ? "rgba(255, 183, 154, 0.95)" : isDark ? "rgba(255, 183, 154, 0.95)" : "rgba(191, 54, 12, 0.95)" : active ? "rgba(255, 255, 255, 0.9)" : isDark ? "rgba(221, 230, 255, 0.92)" : palette.brand.secondary,
                    border: isNDA ? `1px solid ${active ? "rgba(255, 87, 34, 0.4)" : isDark ? "rgba(255, 87, 34, 0.3)" : "rgba(255, 87, 34, 0.25)"}` : undefined,
                    fontWeight: isNDA ? 600 : undefined
                  }
                }, tag, false, undefined, this);
              })
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardActions_default, {
        sx: { px: 3, pb: 3, pt: 0, gap: 1 },
        children: isLocked ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
              disabled: true,
              fullWidth: true,
              endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LockRounded_default, {}, undefined, false, undefined, this),
              sx: {
                opacity: 0.6,
                cursor: "not-allowed",
                color: isDark ? "rgba(150, 165, 200, 0.6)" : "rgba(120, 140, 170, 0.6)",
                borderColor: isDark ? "rgba(122, 162, 255, 0.15)" : "rgba(17, 76, 170, 0.1)"
              },
              children: "Locked"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
              fullWidth: true,
              color: "primary",
              onClick: onOpenRecap,
              endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PlayCircleOutlineRounded_default, {}, undefined, false, undefined, this),
              sx: {
                "&:hover": {
                  backgroundColor: "rgba(122, 162, 255, 0.14)"
                }
              },
              children: "Recap"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this) : active ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PrimaryButton_default, {
              component: Link,
              to: caseStudy.to,
              fullWidth: true,
              endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
              children: "Explore"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
              fullWidth: true,
              color: "inherit",
              onClick: onOpenRecap,
              endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PlayCircleOutlineRounded_default, {}, undefined, false, undefined, this),
              sx: {
                color: "rgba(255, 255, 255, 0.92)",
                borderColor: "rgba(255, 255, 255, 0.45)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.16)"
                }
              },
              children: "Recap"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
              component: Link,
              to: caseStudy.to,
              fullWidth: true,
              endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
              children: "Explore"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
              fullWidth: true,
              color: "primary",
              onClick: onOpenRecap,
              endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PlayCircleOutlineRounded_default, {}, undefined, false, undefined, this),
              sx: {
                "&:hover": {
                  backgroundColor: "rgba(122, 162, 255, 0.14)"
                }
              },
              children: "Recap"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CaseStudyCard_default = CaseStudyCard;

// src/features/home/components/CaseStudiesSection.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudiesSection = ({ caseStudies, onOpenRecap }) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Box_default, {
  id: "case-studies",
  component: "section",
  sx: { py: { xs: 8, md: 10 }, backgroundColor: "background.paper" },
  children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Container_default, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
        spacing: 3,
        alignItems: "center",
        textAlign: "center",
        mb: 6,
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
            variant: "h2",
            children: "Case studies"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
            variant: "h6",
            color: "text.secondary",
            children: "Examples of the impact I have made"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
        container: true,
        spacing: 4,
        children: caseStudies.map((item) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
          size: { xs: 12, md: 6 },
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CaseStudyCard_default, {
            caseStudy: item,
            active: item.id === "divar",
            onOpenRecap: () => onOpenRecap(item.id)
          }, undefined, false, undefined, this)
        }, item.id, false, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
}, undefined, false, undefined, this);
var CaseStudiesSection_default = CaseStudiesSection;

// src/features/home/components/CaseStudyRecapDialog.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyRecapDialog = ({ caseStudy, onClose }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Dialog_default, {
  open: Boolean(caseStudy),
  onClose,
  "aria-labelledby": "case-study-recap-title",
  children: caseStudy ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(DialogTitle_default, {
        id: "case-study-recap-title",
        children: caseStudy.recap.headline
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(DialogContent_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
            component: "ul",
            spacing: 1.5,
            sx: { pl: 2 },
            children: caseStudy.recap.bullets.map((bullet) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
              component: "li",
              variant: "body1",
              color: "text.secondary",
              children: bullet
            }, bullet, false, undefined, this))
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
            direction: "row",
            spacing: 2,
            mt: 3,
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Button_default, {
                component: Link,
                to: caseStudy.to,
                variant: "contained",
                fullWidth: true,
                endIcon: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                onClick: onClose,
                children: "Deep dive"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Button_default, {
                fullWidth: true,
                variant: "outlined",
                onClick: onClose,
                children: "Close"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this) : null
}, undefined, false, undefined, this);
var CaseStudyRecapDialog_default = CaseStudyRecapDialog;

// node_modules/@mui/icons-material/esm/EventAvailable.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var EventAvailable_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime4.jsx("path", {
  d: "M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14z"
}), "EventAvailable");

// src/shared/components/LetsTalkSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var isExternalLink = (href) => {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
};
var getExternalLinkProps = (href) => {
  if (isExternalLink(href)) {
    return {
      target: "_blank",
      rel: "noopener noreferrer"
    };
  }
  return {
    target: undefined,
    rel: undefined
  };
};
var LetsTalkSection = ({
  id,
  title = "Let's Talk and Work Together",
  description = "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  primaryAction,
  secondaryActions = []
}) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  component: "section",
  id,
  sx: { py: { xs: 4, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
      elevation: 0,
      sx: {
        boxShadow: "none",
        borderRadius: { xs: "16px", md: "24px" },
        bgcolor: "background.paper",
        px: { xs: 2.5, md: 5 },
        py: { xs: 3, md: 5 }
      },
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardContent_default, {
          sx: { pb: 0, px: { xs: 0, md: 0 } },
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
            spacing: { xs: 1, md: 1.5 },
            textAlign: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                variant: "h3",
                sx: { fontSize: { xs: "1.5rem", md: "2rem" } },
                children: title
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                variant: "subtitle1",
                color: "text.secondary",
                sx: { fontSize: { xs: "0.875rem", md: "1rem" } },
                children: description
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
          sx: { pt: { xs: 2.5, md: 4 }, px: 0, flexDirection: "column", gap: { xs: 1.5, md: 2 } },
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
              component: isExternalLink(primaryAction.href) ? "a" : Link,
              href: isExternalLink(primaryAction.href) ? primaryAction.href : undefined,
              to: !isExternalLink(primaryAction.href) ? primaryAction.href : undefined,
              startIcon: primaryAction.icon,
              variant: primaryAction.variant ?? "contained",
              color: primaryAction.color ?? "primary",
              size: "large",
              fullWidth: true,
              sx: { minHeight: { xs: "48px", md: "56px" } },
              target: primaryAction.target ?? getExternalLinkProps(primaryAction.href).target,
              rel: primaryAction.rel ?? getExternalLinkProps(primaryAction.href).rel,
              children: primaryAction.label
            }, undefined, false, undefined, this),
            secondaryActions.length > 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              direction: { xs: "column", md: "row" },
              spacing: { xs: 1.5, md: 1.5 },
              justifyContent: "center",
              alignItems: "stretch",
              sx: { width: "100%" },
              children: secondaryActions.map((action) => {
                const externalProps = getExternalLinkProps(action.href);
                const isExternal = isExternalLink(action.href);
                return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                  component: isExternal ? "a" : Link,
                  href: isExternal ? action.href : undefined,
                  to: !isExternal ? action.href : undefined,
                  startIcon: action.icon,
                  variant: action.variant ?? "outlined",
                  color: action.color ?? "primary",
                  size: "large",
                  fullWidth: true,
                  sx: {
                    minHeight: { xs: "48px", md: "48px" },
                    width: { xs: "100%", md: "auto" },
                    flex: { md: "1 1 0" },
                    minWidth: { md: 0 }
                  },
                  target: action.target ?? externalProps.target,
                  rel: action.rel ?? externalProps.rel,
                  children: action.label
                }, action.href, false, undefined, this);
              })
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var LetsTalkSection_default = LetsTalkSection;

// src/features/home/components/ContactSection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var ContactSection = () => {
  const secondaryActions = [
    {
      label: "Email",
      href: "mailto:sadrimasih@gmail.com",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(EmailRounded_default, {}, undefined, false, undefined, this)
    },
    {
      label: "Book a session",
      href: "/contact#mentorship",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(EventAvailable_default, {}, undefined, false, undefined, this)
    }
  ];
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(LetsTalkSection_default, {
    id: "contact",
    primaryAction: {
      label: "Direct message",
      href: "https://t.me/masihsadri",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Telegram_default, {}, undefined, false, undefined, this)
    },
    secondaryActions
  }, undefined, false, undefined, this);
};
var ContactSection_default = ContactSection;

// src/features/home/components/HeroSection.tsx
var import_react = __toESM(require_react(), 1);

// images/badges/certified-badge.png
var certified_badge_default = "./certified-badge-p1bwqvk4.png";

// src/features/home/components/HeroSection.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var HeroSection = ({ hero }) => {
  const theme = useTheme();
  const handlePrimaryCtaClick = import_react.useCallback(() => {
    const targetId = hero.ctaPrimary.scrollToId ?? hero.ctaPrimary.to;
    if (!targetId || typeof document === "undefined") {
      return;
    }
    if (targetId.startsWith("/")) {
      return;
    }
    const sanitizedId = targetId.startsWith("#") ? targetId.slice(1) : targetId;
    const element = document.getElementById(sanitizedId);
    if (element) {
      smoothScrollToElement(element, { duration: 900, offset: 16 });
    }
  }, [hero.ctaPrimary.scrollToId, hero.ctaPrimary.to]);
  const handleSecondaryCtaClick = import_react.useCallback(() => {
    const targetId = hero.ctaSecondary.scrollToId ?? hero.ctaSecondary.to;
    if (!targetId || typeof document === "undefined") {
      return;
    }
    if (targetId.startsWith("/")) {
      return;
    }
    const sanitizedId = targetId.startsWith("#") ? targetId.slice(1) : targetId;
    const element = document.getElementById(sanitizedId);
    if (element) {
      smoothScrollToElement(element, { duration: 900, offset: 16 });
    }
  }, [hero.ctaSecondary.scrollToId, hero.ctaSecondary.to]);
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
    component: "section",
    sx: (theme2) => ({
      py: { xs: 6, md: 9 },
      background: theme2.palette.mode === "light" ? "radial-gradient(circle at 20% 15%, rgba(145, 167, 255, 0.12), transparent 58%), radial-gradient(circle at 80% 20%, rgba(34, 84, 255, 0.1), transparent 52%)" : "radial-gradient(circle at 18% 15%, rgba(73, 109, 193, 0.18), transparent 60%), radial-gradient(circle at 78% 18%, rgba(48, 86, 176, 0.18), transparent 55%)"
    }),
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
        direction: { xs: "column", md: "row" },
        spacing: { xs: 4, md: 3.5 },
        sx: {
          alignItems: { xs: "center", md: "stretch" },
          px: { xs: 0, md: 2 }
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
            spacing: 2.5,
            sx: {
              flexBasis: { md: "30%" },
              maxWidth: { md: "30%" },
              flexShrink: 0,
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              width: "100%"
            },
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
              sx: {
                position: "relative",
                width: "100%",
                maxWidth: { xs: 260, sm: 300, md: 320 }
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Avatar_default, {
                  src: hero.portrait.src,
                  alt: hero.portrait.alt,
                  variant: "rounded",
                  sx: {
                    width: "100%",
                    height: "auto",
                    borderRadius: (theme2) => theme2.tokens.radius.lg,
                    border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
                    boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 18px 40px rgba(17, 36, 83, 0.18)" : "0 20px 50px rgba(0, 0, 0, 0.55)"
                  }
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
                  component: "img",
                  src: certified_badge_default,
                  alt: "Certified badge",
                  loading: "lazy",
                  sx: {
                    position: "absolute",
                    top: { xs: -18, md: -24 },
                    left: { xs: -18, md: -24 },
                    width: { xs: 120, md: 150 },
                    height: "auto",
                    pointerEvents: "none",
                    userSelect: "none"
                  }
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
            spacing: { xs: 2.25, md: 2.75 },
            sx: {
              flexBasis: { md: "70%" },
              maxWidth: { md: "70%" },
              flexGrow: 1,
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" }
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                spacing: { xs: 1.4, md: 1.8 },
                sx: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                    direction: { xs: "column", sm: "row" },
                    spacing: { xs: 1, sm: 1.5 },
                    alignItems: { xs: "center", sm: "flex-start" },
                    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                      label: hero.greeting,
                      size: "small",
                      sx: {
                        backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.12)" : "rgba(98, 132, 218, 0.22)",
                        color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
                        fontWeight: 600,
                        letterSpacing: 0.3
                      }
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                    variant: "display",
                    sx: {
                      lineHeight: 1.05,
                      letterSpacing: "-0.015em"
                    },
                    children: hero.name
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                    variant: "h2",
                    sx: {
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                      letterSpacing: { xs: "0.01em", md: "0.005em" },
                      maxWidth: { md: "85%" }
                    },
                    children: hero.title
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                spacing: 2,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    sx: {
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "1.05rem", md: "1.12rem" },
                      lineHeight: { xs: 1.65, md: 1.7 },
                      fontWeight: 500
                    },
                    children: hero.subtitle.split(" | ")[0]
                  }, undefined, false, undefined, this),
                  hero.subtitle.includes(" | ") && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                    variant: "body1",
                    sx: {
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      lineHeight: { xs: 1.6, md: 1.65 },
                      opacity: 0.9
                    },
                    children: hero.subtitle.split(" | ").slice(1).join(" | ")
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                    direction: "row",
                    spacing: 1,
                    flexWrap: "wrap",
                    sx: {
                      pt: 0.5,
                      gap: 1,
                      justifyContent: { xs: "center", md: "flex-start" }
                    },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                        label: "40+ Million Users",
                        size: "small",
                        sx: {
                          backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.1)" : "rgba(98, 132, 218, 0.15)",
                          color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.9)",
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", md: "0.8125rem" }
                        }
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                        label: "B2B & B2C",
                        size: "small",
                        sx: {
                          backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.1)" : "rgba(98, 132, 218, 0.15)",
                          color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.9)",
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", md: "0.8125rem" }
                        }
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                        label: "Data-Driven",
                        size: "small",
                        sx: {
                          backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.1)" : "rgba(98, 132, 218, 0.15)",
                          color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.9)",
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", md: "0.8125rem" }
                        }
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                        label: "AI-Familiar",
                        size: "small",
                        sx: {
                          backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.1)" : "rgba(98, 132, 218, 0.15)",
                          color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.9)",
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", md: "0.8125rem" }
                        }
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                        label: "Technical & Management",
                        size: "small",
                        sx: {
                          backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.1)" : "rgba(98, 132, 218, 0.15)",
                          color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.9)",
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", md: "0.8125rem" }
                        }
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                spacing: { xs: 1.5, sm: 2 },
                direction: { xs: "column", sm: "row" },
                sx: { pt: { xs: 0.5, md: 0.75 } },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(PrimaryButton_default, {
                    endIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                    size: "large",
                    sx: {
                      minWidth: { sm: 220 },
                      minHeight: 44,
                      py: { xs: 1.25, md: 1.5 }
                    },
                    onClick: handlePrimaryCtaClick,
                    children: hero.ctaPrimary.label
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(GhostButton_default, {
                    onClick: handleSecondaryCtaClick,
                    size: "large",
                    sx: {
                      borderRadius: 999,
                      px: 3,
                      borderWidth: 1.5,
                      minHeight: 44,
                      py: { xs: 1.25, md: 1.5 }
                    },
                    children: hero.ctaSecondary.label
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var HeroSection_default = HeroSection;

// src/features/home/components/ImpactStatCard.tsx
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var ImpactStatCard = ({ value, title, description }) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Card_default, {
  component: "article",
  elevation: 0,
  variant: "outlined",
  sx: (theme) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.tokens.radius.surface,
    boxShadow: "none"
  }),
  children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(CardContent_default, {
    sx: { display: "flex", flexDirection: "column", gap: 1 },
    children: [
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
        variant: "h4",
        component: "p",
        children: value
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
        variant: "h6",
        component: "h6",
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
        variant: "body2",
        color: "text.secondary",
        children: description
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
}, undefined, false, undefined, this);
var ImpactStatCard_default = ImpactStatCard;

// src/features/home/components/MetricsSection.tsx
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var MetricsSection = ({ metrics }) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
  component: "section",
  sx: { py: { xs: 6, md: 8 }, pt: { md: 6 } },
  children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
      spacing: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
          spacing: 1.5,
          alignItems: "center",
          textAlign: "center",
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
              variant: "h2",
              children: "Recent Impact I Have Made"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
              variant: "h6",
              color: "text.secondary",
              children: "Measurable outcomes from my design work"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
          container: true,
          spacing: { xs: 3, md: 3.5 },
          children: metrics.map(({ value, title, description }) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
            size: { xs: 12, sm: 6, md: 3 },
            children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ImpactStatCard_default, {
              value,
              title,
              description
            }, undefined, false, undefined, this)
          }, title, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var MetricsSection_default = MetricsSection;

// node_modules/@mui/icons-material/esm/ChevronLeftRounded.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var ChevronLeftRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime5.jsx("path", {
  d: "M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
}), "ChevronLeftRounded");

// node_modules/@mui/icons-material/esm/ChevronRightRounded.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
"use client";
var ChevronRightRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime6.jsx("path", {
  d: "M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
}), "ChevronRightRounded");

// src/features/home/components/TestimonialsSection.tsx
var import_react2 = __toESM(require_react(), 1);
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var TestimonialsSection = ({ testimonials }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = import_react2.useState(0);
  const handlePrevious = import_react2.useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  }, [testimonials.length]);
  const handleNext = import_react2.useCallback(() => {
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  }, [testimonials.length]);
  import_react2.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]);
  const currentTestimonial = testimonials[currentIndex];
  if (!currentTestimonial) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 6, md: 8 },
      background: theme.palette.mode === "light" ? "radial-gradient(circle at 50% 50%, rgba(145, 167, 255, 0.06), transparent 70%)" : "radial-gradient(circle at 50% 50%, rgba(73, 109, 193, 0.1), transparent 70%)"
    },
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
        spacing: 4,
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
            spacing: 1.5,
            alignItems: "center",
            textAlign: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                variant: "h2",
                children: "What People Say"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                variant: "h6",
                color: "text.secondary",
                children: "Recommendations from colleagues and mentees"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
            sx: {
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", md: "85%", lg: "1200px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(IconButton_default, {
                onClick: handlePrevious,
                sx: {
                  position: "absolute",
                  left: { xs: -12, md: -24 },
                  zIndex: 2,
                  backgroundColor: theme.palette.background.paper,
                  border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
                  boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 4px 12px rgba(17, 36, 83, 0.1)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
                  "&:hover": {
                    backgroundColor: theme.palette.background.paper,
                    transform: "scale(1.05)"
                  },
                  minWidth: 44,
                  minHeight: 44,
                  width: { xs: 44, md: 48 },
                  height: { xs: 44, md: 48 },
                  transition: "transform 0.2s ease"
                },
                "aria-label": "Previous testimonial",
                children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ChevronLeftRounded_default, {
                  fontSize: "medium"
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Card_default, {
                sx: {
                  width: "100%",
                  maxWidth: { xs: "100%", md: "80%" },
                  px: { xs: 4, md: 8, lg: 10 },
                  py: { xs: 5, md: 6, lg: 8 },
                  borderRadius: (theme2) => theme2.tokens.radius.lg,
                  border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
                  backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(18, 18, 18, 0.8)",
                  boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 8px 32px rgba(17, 36, 83, 0.12)" : "0 8px 32px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.3s ease"
                },
                children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
                  spacing: { xs: 3, md: 4 },
                  alignItems: "flex-start",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                      variant: "h4",
                      component: "blockquote",
                      sx: {
                        fontFamily: '"Georgia", "Times New Roman", serif',
                        fontSize: { xs: "1.5rem", md: "1.75rem", lg: "2rem" },
                        lineHeight: { xs: 1.7, md: 1.75 },
                        fontWeight: 400,
                        color: theme.palette.text.primary,
                        fontStyle: "italic",
                        position: "relative",
                        pl: { xs: 3, md: 4 },
                        "&::before": {
                          content: '"\\201C"',
                          position: "absolute",
                          left: 0,
                          top: { xs: "-0.2em", md: "-0.3em" },
                          fontSize: { xs: "3rem", md: "4rem" },
                          lineHeight: 1,
                          color: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.2)" : "rgba(98, 132, 218, 0.3)",
                          fontFamily: '"Georgia", serif'
                        }
                      },
                      children: currentTestimonial.quote
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
                      direction: "row",
                      spacing: 2,
                      alignItems: "center",
                      sx: {
                        width: "100%",
                        pt: 1
                      },
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Avatar_default, {
                          src: currentTestimonial.author.image?.src,
                          alt: currentTestimonial.author.image?.alt || `${currentTestimonial.author.name} avatar`,
                          sx: {
                            width: { xs: 56, md: 64 },
                            height: { xs: 56, md: 64 },
                            border: (theme2) => `2px solid ${theme2.tokens.colors.border}`
                          },
                          children: currentTestimonial.author.name.charAt(0)
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
                          spacing: 0.5,
                          sx: { flex: 1 },
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                              variant: "subtitle1",
                              sx: {
                                fontWeight: 600,
                                fontSize: { xs: "0.9375rem", md: "1rem" },
                                textTransform: "none",
                                letterSpacing: "0.01em"
                              },
                              children: currentTestimonial.author.name
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                              variant: "body2",
                              color: "text.secondary",
                              sx: {
                                fontSize: { xs: "0.8125rem", md: "0.875rem" },
                                lineHeight: 1.4
                              },
                              children: [
                                currentTestimonial.author.position,
                                currentTestimonial.author.company && ` • ${currentTestimonial.author.company}`
                              ]
                            }, undefined, true, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                              variant: "caption",
                              sx: {
                                fontSize: { xs: "0.75rem", md: "0.8125rem" },
                                color: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.7)" : "rgba(98, 132, 218, 0.7)",
                                fontWeight: 500,
                                mt: 0.25
                              },
                              children: currentTestimonial.author.relationship
                            }, undefined, false, undefined, this)
                          ]
                        }, undefined, true, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(IconButton_default, {
                onClick: handleNext,
                sx: {
                  position: "absolute",
                  right: { xs: -12, md: -24 },
                  zIndex: 2,
                  backgroundColor: theme.palette.background.paper,
                  border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
                  boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 4px 12px rgba(17, 36, 83, 0.1)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
                  "&:hover": {
                    backgroundColor: theme.palette.background.paper,
                    transform: "scale(1.05)"
                  },
                  minWidth: 44,
                  minHeight: 44,
                  width: { xs: 44, md: 48 },
                  height: { xs: 44, md: 48 },
                  transition: "transform 0.2s ease"
                },
                "aria-label": "Next testimonial",
                children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ChevronRightRounded_default, {
                  fontSize: "medium"
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
            direction: "row",
            spacing: 1.5,
            justifyContent: "center",
            alignItems: "center",
            children: testimonials.map((_, index) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
              onClick: () => setCurrentIndex(index),
              sx: {
                width: { xs: 12, md: 10 },
                height: { xs: 12, md: 10 },
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? theme.palette.brand.secondary : theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.2)" : "rgba(98, 132, 218, 0.3)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minWidth: 12,
                minHeight: 12,
                "&:hover": {
                  backgroundColor: index === currentIndex ? theme.palette.brand.secondary : theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.4)" : "rgba(98, 132, 218, 0.5)",
                  transform: "scale(1.2)"
                }
              },
              "aria-label": `Go to testimonial ${index + 1}`
            }, index, false, undefined, this))
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var TestimonialsSection_default = TestimonialsSection;

// node_modules/@mui/icons-material/esm/ArrowBackIosRounded.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowBackIosRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime7.jsx("path", {
  d: "M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
}), "ArrowBackIosRounded");

// node_modules/@mui/icons-material/esm/ArrowForwardIosRounded.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowForwardIosRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime8.jsx("path", {
  d: "M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"
}), "ArrowForwardIosRounded");

// src/features/home/components/DifferentiatorsCarousel.tsx
var import_react3 = __toESM(require_react(), 1);
var jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
var DifferentiatorsCarousel = ({ items }) => {
  const theme = useTheme();
  const scrollContainerRef = import_react3.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = import_react3.useState(false);
  const [canScrollRight, setCanScrollRight] = import_react3.useState(true);
  const checkScrollability = import_react3.useCallback(() => {
    if (!scrollContainerRef.current)
      return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);
  const scroll = import_react3.useCallback((direction) => {
    if (!scrollContainerRef.current)
      return;
    const cardWidth = scrollContainerRef.current.querySelector("div")?.clientWidth ?? 320;
    const scrollAmount = cardWidth + 24;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
    setTimeout(checkScrollability, 300);
  }, [checkScrollability]);
  const handleScroll = import_react3.useCallback(() => {
    checkScrollability();
  }, [checkScrollability]);
  import_react3.useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [checkScrollability]);
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
    sx: { position: "relative", width: "100%" },
    children: [
      canScrollLeft && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(IconButton_default, {
        onClick: () => scroll("left"),
        sx: {
          position: "absolute",
          left: { xs: -12, md: -16 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: theme.palette.background.paper,
          border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
          boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 4px 12px rgba(17, 36, 83, 0.1)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: theme.palette.background.paper
          },
          minWidth: 44,
          minHeight: 44,
          width: { xs: 44, md: 48 },
          height: { xs: 44, md: 48 }
        },
        "aria-label": "Scroll left",
        children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ArrowBackIosRounded_default, {
          fontSize: "small"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      canScrollRight && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(IconButton_default, {
        onClick: () => scroll("right"),
        sx: {
          position: "absolute",
          right: { xs: -12, md: -16 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: theme.palette.background.paper,
          border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
          boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 4px 12px rgba(17, 36, 83, 0.1)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: theme.palette.background.paper
          },
          minWidth: 44,
          minHeight: 44,
          width: { xs: 44, md: 48 },
          height: { xs: 44, md: 48 }
        },
        "aria-label": "Scroll right",
        children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ArrowForwardIosRounded_default, {
          fontSize: "small"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
        ref: scrollContainerRef,
        onScroll: handleScroll,
        sx: {
          display: "flex",
          gap: 3,
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          },
          px: { xs: 1, md: 2 },
          py: 1,
          WebkitOverflowScrolling: "touch",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 20,
            background: (theme2) => theme2.palette.mode === "light" ? "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8))" : "linear-gradient(to right, transparent, rgba(18, 18, 18, 0.8))",
            pointerEvents: "none",
            opacity: canScrollRight ? 1 : 0,
            transition: "opacity 0.2s ease"
          }
        },
        children: items.map((item, index) => /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
          sx: {
            flexShrink: 0,
            width: { xs: 260, sm: 300, md: 340 },
            scrollSnapAlign: "start"
          },
          children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Card_default, {
            sx: {
              height: "100%",
              minHeight: { xs: 200, md: 220 },
              border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
              backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.6)" : "rgba(18, 18, 18, 0.6)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 8px 24px rgba(17, 36, 83, 0.12)" : "0 8px 24px rgba(0, 0, 0, 0.4)"
              }
            },
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(CardContent_default, {
              sx: { p: { xs: 2, md: 2.5 }, height: "100%", display: "flex", flexDirection: "column" },
              children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
                spacing: 1.5,
                sx: { height: "100%" },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                    variant: "h6",
                    fontWeight: 600,
                    sx: { fontSize: { xs: "1rem", md: "1.125rem" } },
                    children: item.title
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                    variant: "body2",
                    color: "text.secondary",
                    lineHeight: 1.6,
                    sx: { flexGrow: 1, fontSize: { xs: "0.875rem", md: "0.9375rem" } },
                    children: item.description
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, index, false, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var DifferentiatorsCarousel_default = DifferentiatorsCarousel;

// src/features/home/components/WhyHireMeSection.tsx
var jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var WhyHireMeSection = ({ content }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Box_default, {
    component: "section",
    sx: { pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Stack_default, {
        spacing: 6,
        children: [
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Stack_default, {
            spacing: 3,
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Stack_default, {
                spacing: 1.5,
                alignItems: "center",
                textAlign: "center",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Typography_default, {
                    variant: "h2",
                    children: content.whatIBring.title
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Typography_default, {
                    variant: "h6",
                    color: "text.secondary",
                    children: "Key differentiators that set me apart"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(DifferentiatorsCarousel_default, {
                items: content.whatIBring.differentiators
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Box_default, {
            sx: {
              py: 4,
              px: { xs: 2, md: 4 },
              borderRadius: (theme2) => theme2.tokens.radius.lg,
              background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(31, 111, 235, 0.08) 0%, rgba(145, 167, 255, 0.08) 100%)" : "linear-gradient(135deg, rgba(48, 86, 176, 0.15) 0%, rgba(73, 109, 193, 0.15) 100%)",
              border: (theme2) => `1px solid ${theme2.tokens.colors.border}`
            },
            children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Grid_default, {
              container: true,
              spacing: 3,
              children: content.quickStats.map((stat, index) => /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Grid_default, {
                size: { xs: 6, md: 3 },
                children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Stack_default, {
                  spacing: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Typography_default, {
                      variant: "h3",
                      fontWeight: 700,
                      sx: {
                        color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.95)"
                      },
                      children: stat.value
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      fontWeight: 500,
                      children: stat.label
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, index, false, undefined, this))
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Box_default, {
            sx: {
              py: 4,
              px: { xs: 3, md: 5 },
              borderRadius: (theme2) => theme2.tokens.radius.lg,
              backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.06)" : "rgba(48, 86, 176, 0.12)",
              border: (theme2) => `1px solid ${theme2.tokens.colors.border}`
            },
            children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Stack_default, {
              spacing: 3,
              children: [
                /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Stack_default, {
                  spacing: 2,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Typography_default, {
                      variant: "h4",
                      fontWeight: 600,
                      children: content.whatImLookingFor.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      lineHeight: 1.8,
                      children: content.whatImLookingFor.description
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                content.whatImLookingFor.action && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Box_default, {
                  children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(PrimaryButton_default, {
                    component: Link,
                    to: content.whatImLookingFor.action.href,
                    endIcon: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                    size: "large",
                    sx: {
                      minWidth: { xs: "100%", sm: 220 }
                    },
                    children: content.whatImLookingFor.action.label
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var WhyHireMeSection_default = WhyHireMeSection;

// images/masih-sadri-profile.webp
var masih_sadri_profile_default = "./masih-sadri-profile-fsr6f34z.webp";

// images/morph-design-system.webp
var morph_design_system_default = "./morph-design-system-5k1nrfcf.webp";

// images/rahnema-students.webp
var rahnema_students_default = "./rahnema-students-v1k766m3.webp";

// images/testimonials/mahdi-ahmadizadeh.jpeg
var mahdi_ahmadizadeh_default = "./mahdi-ahmadizadeh-ggj250f1.jpeg";

// images/testimonials/nahid-k.jpeg
var nahid_k_default = "./nahid-k-v87ry9mz.jpeg";

// images/testimonials/shadi-zarei.jpeg
var shadi_zarei_default = "./shadi-zarei-sfrjfb46.jpeg";

// images/testimonials/sadeq-b.jpeg
var sadeq_b_default = "./sadeq-b-jndcsf40.jpeg";

// images/testimonials/saeed-abolghasemi.jpg
var saeed_abolghasemi_default = "./saeed-abolghasemi-74jf9wv9.jpg";

// images/testimonials/hossein-mahmoudvand.jpeg
var hossein_mahmoudvand_default = "./hossein-mahmoudvand-egrfyhwj.jpeg";

// images/testimonials/shayan-mehranpour.jpeg
var shayan_mehranpour_default = "./shayan-mehranpour-1exn4h3k.jpeg";

// src/features/home/data/content.ts
var hero = {
  greeting: "Hello \uD83D\uDC4B\uD83C\uDFFC, I am",
  name: "Masih Sadri",
  title: "an impact-oriented Senior Product Designer",
  subtitle: "Former iOS developer turned designer, building data-driven experiences that drive user retention and business growth for 40+ million users across B2B and B2C products",
  ctaPrimary: {
    label: "View case study",
    scrollToId: "case-studies"
  },
  ctaSecondary: {
    label: "To be in touch",
    scrollToId: "contact"
  },
  portrait: createImageResource(import.meta.url, masih_sadri_profile_default, "Masih Sadri - Product Designer", {
    width: 1200,
    height: 1200
  })
};
var metrics = [
  {
    value: "60%",
    title: "Reduction in harassment incidents",
    description: "Co-led Divar’s secure call system with Trust & Safety to safeguard 2.1M weekly callers."
  },
  {
    value: "8.3K+",
    title: "Product teams using Morph",
    description: "Built an open design system that powers Figma handoffs and accelerates high-quality releases."
  },
  {
    value: "200+",
    title: "Designers mentored",
    description: "Designed project-based programs at Rahnema College to help emerging designers launch careers."
  },
  {
    value: "80%",
    title: "Lift in qualified leads",
    description: "Redesigned Persol’s sign-up funnel end-to-end, removing friction and boosting lead generation in 3 months."
  }
];
var caseStudies = [
  {
    id: "divar",
    number: "01",
    tag: "Improving User Safety",
    title: "The Story of Reducing Harassment by 60%",
    platform: "on Divar",
    platformDetail: "Classified Ads Platform",
    stat: "A feature used by 2.1 million users per week",
    tags: ["real project", "trust & safety", "impact at scale"],
    to: "/case-studies/divar-secure-call",
    recap: {
      headline: "How cross-functional guardrails helped Divar reduce harassment incidents by 60%",
      bullets: [
        "Co-led a task force bridging Trust & Safety, Legal, and Engineering.",
        "Shipped dynamic voice-masking with abuse detection for 2.1M weekly callers.",
        "Stood up playbooks for moderation ops to monitor repeat offenders."
      ]
    }
  },
  {
    id: "setare-aval",
    number: "02",
    tag: "Boosting User Engagement",
    title: "Turning One-Time Visitors into Lifelong Customers",
    platform: "at Setare Aval Co.",
    platformDetail: "Retention strategy",
    tags: ["real project", "retention strategy", "cross-functional leadership"],
    to: "/case-studies/setare-aval-engagement",
    recap: {
      headline: "How we re-architected Setare Aval's onboarding to double retained revenue",
      bullets: [
        "Mapped a new lifecycle model tied to data-backed experimentation.",
        "Refined activation flows to spotlight value props within first session.",
        "Co-created a learning agenda to measure loyalty program traction."
      ]
    }
  },
  {
    id: "setare-yek",
    number: "03",
    tag: "Product Design & Growth",
    title: "From 4% to 47%: Turning a Failing Feature Into Core Value",
    platform: "at Setare Aval",
    platformDetail: "SetareYek App",
    stat: "10x growth in bill payment adoption",
    tags: ["real project", "product design", "user research", "growth"],
    to: "/case-studies/setare-yek-bill-payment",
    recap: {
      headline: "How I redesigned SetareYek's bill payment to increase adoption from 4% to 47%",
      bullets: [
        "Led multi-method research uncovering trust, transparency, and workflow challenges at Setare Aval.",
        "Designed six interconnected solutions addressing core user needs and emotional drivers.",
        "Learned from failure: Version 1 taught us that great UX requires great technical performance."
      ]
    }
  },
  {
    id: "physical-receipt",
    number: "04",
    tag: "Retention & Cost Optimization",
    title: "How Physical Receipts Increased Retention by 6%",
    platform: "at BimeBazar",
    platformDetail: "User Retention Strategy",
    stat: "6% higher retention vs. digital-only users",
    tags: ["in progress", "retention", "data-driven", "cost optimization", "NDA"],
    to: "#",
    isLocked: true,
    isInProgress: true,
    recap: {
      headline: "How we discovered that physical receipts drive 6% higher user retention",
      bullets: [
        "Company wanted to reduce costs by motivating users to skip physical receipts.",
        "Data analysis revealed users who received physical receipts returned 6% more than digital-only users.",
        "The 6% retention improvement meant lower acquisition costs, changing our strategy to encourage physical receipts."
      ]
    }
  }
];
var experiences = [
  {
    title: "Design Instructor at Rahnema College",
    description: "Training 200+ students through 6 courses since 2022",
    tags: ["education", "mentorship", "curriculum design"],
    image: createImageResource(import.meta.url, rahnema_students_default, "Students at Rahnema College")
  },
  {
    title: "Morph Design System",
    description: "Built from scratch, used over 7400 times in the Figma Community",
    tags: ["open source", "design system", "community impact"],
    image: createImageResource(import.meta.url, morph_design_system_default, "Morph Design System - Figma Community"),
    link: {
      label: "View on Figma Community",
      href: "https://www.figma.com/community/file/1069259333467083182"
    }
  }
];
var socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/msadri/"
  },
  {
    label: "GitHub",
    href: "https://github.com/mrsadri"
  }
];
var whyHireMe = {
  whatIBring: {
    title: "What I Bring",
    differentiators: [
      {
        title: "AI-Familiar & Technical",
        description: "Built this portfolio from scratch with modern tools. Former iOS developer with deep understanding of technical constraints and implementation details."
      },
      {
        title: "Data-Driven Decision Making",
        description: "Completed a 170-hour data analyst course. I use data to validate design decisions and measure impact, not just intuition."
      },
      {
        title: "User Retention Expertise at Scale",
        description: "Proven track record of improving user retention and engagement for 40+ million unique users. Co-led cross-functional initiatives that drive long-term user value and business growth."
      },
      {
        title: "Teaching & Mentorship Leadership",
        description: "3rd year teaching at college, mentored 200+ students. This translates to strong communication skills, curriculum design, and the ability to elevate team capabilities."
      },
      {
        title: "Cross-Product Experience",
        description: "Experience across both B2C and B2B products, with a background in project management. I understand business strategy and can navigate complex stakeholder landscapes."
      },
      {
        title: "Adaptable to Any Team Structure",
        description: "Experienced in generalized teams, embedded product teams, and solo design roles across B2B and B2C products. I adapt my workflow to fit any organizational model."
      }
    ]
  },
  whatImLookingFor: {
    title: "What I'm Looking For",
    description: "I'm seeking senior product design roles where I can leverage my data-driven approach and technical background to drive measurable business impact. I thrive in cross-functional environments where design, engineering, and business strategy intersect, and I'm passionate about creating solutions that deliver tangible results.",
    action: {
      label: "View My Resume",
      href: "/resume"
    }
  },
  quickStats: [
    {
      value: "40M+",
      label: "Unique Users"
    },
    {
      value: "200+",
      label: "Students Mentored"
    },
    {
      value: "3 Years",
      label: "Teaching Experience"
    },
    {
      value: "B2C & B2B",
      label: "Product Experience"
    }
  ]
};
var testimonials = [
  {
    quote: "Masih Sadri has been an incredible mentor throughout my learning journey. He consistently shared his vast knowledge and useful resources, always encouraging me to practice and grow.",
    author: {
      name: "Mahdi Ahmadizadeh",
      position: "Design System Manager",
      company: "Snapp! Market",
      relationship: "Mentee",
      image: createImageResource(import.meta.url, mahdi_ahmadizadeh_default, "Mahdi Ahmadizadeh")
    }
  },
  {
    quote: "Masih is an incredibly talented person, a very mature and seasoned professional, and a great mentor to have. He has a warm and engaging style, and the quality of his design work and illustrations is exceptional.",
    author: {
      name: "Nahid K.",
      position: "Product Manager",
      company: "Service Management | ITSM",
      relationship: "Colleague",
      image: createImageResource(import.meta.url, nahid_k_default, "Nahid K.")
    }
  },
  {
    quote: "His problem-solving, interaction skills and eye for details are remarkable. I have always been impressed by his severe motivation and deep knowledge in user experience.",
    author: {
      name: "Shadi Zarei",
      position: "Researcher & UX/UI Designer",
      company: "PhD Candidate",
      relationship: "Classmate",
      image: createImageResource(import.meta.url, shadi_zarei_default, "Shadi Zarei")
    }
  },
  {
    quote: "He has a curious mind and considers personal development. In addition to what is taught in the classroom, he always refers to more resources to solve problems in the best possible way.",
    author: {
      name: "Sadeq .B",
      position: "Senior iOS Engineer",
      relationship: "Classmate",
      image: createImageResource(import.meta.url, sadeq_b_default, "Sadeq .B")
    }
  },
  {
    quote: "Masih is one of my privileged students who is determined to improve his knowledge and skills. His commitment and punctuality in delivering assignments are commendable.",
    author: {
      name: "Ali Azade",
      position: "Software Engineer",
      company: "UserTesting",
      relationship: "Former Teacher"
    }
  },
  {
    quote: "It was my fortune to start my professional journey with a sympathetic person who has remarkable skills in empathizing with colleagues. He also knows how to prioritize tasks based on individuals' interests and assigns them to the team members.",
    author: {
      name: "Saeed Abolghasemi",
      position: "Principal Product Designer",
      company: "Systems Thinker",
      relationship: "Direct Report",
      image: createImageResource(import.meta.url, saeed_abolghasemi_default, "Saeed Abolghasemi")
    }
  },
  {
    quote: "When it comes to consistent, top-quality design, It is enough to handover confusions and raw data to Masih. While working together in the product team at Setare aval company, Masih's specialties were instrumental in problem definition, finding proper solutions, and designing flows.",
    author: {
      name: "Hossein Mahmoudvand",
      position: "Product Design Lead",
      company: "SnappPay",
      relationship: "Former Manager",
      image: createImageResource(import.meta.url, hossein_mahmoudvand_default, "Hossein Mahmoudvand")
    }
  },
  {
    quote: "Masih is a very talented and professional UX specialist who made a great addition to our great company. Masih began contributing on day one by porting our existing product.",
    author: {
      name: "Shayan Mehranpour",
      position: "Senior Software Engineer",
      company: "Flix",
      relationship: "Team Member",
      image: createImageResource(import.meta.url, shayan_mehranpour_default, "Shayan Mehranpour")
    }
  }
];

// src/features/home/hooks/useCaseStudyRecap.ts
var import_react4 = __toESM(require_react(), 1);
var useCaseStudyRecap = (caseStudies2) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = import_react4.useState(null);
  const activeCaseStudy = import_react4.useMemo(() => caseStudies2.find((item) => item.id === selectedCaseStudyId) ?? null, [caseStudies2, selectedCaseStudyId]);
  const openRecap = import_react4.useCallback((id) => {
    setSelectedCaseStudyId(id);
  }, []);
  const closeRecap = import_react4.useCallback(() => {
    setSelectedCaseStudyId(null);
  }, []);
  return {
    activeCaseStudy,
    openRecap,
    closeRecap,
    isOpen: activeCaseStudy !== null
  };
};
var useCaseStudyRecap_default = useCaseStudyRecap;

// src/features/home/seo.ts
var siteUrl = site_default();
var homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Masih Sadri — Senior Product Designer",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: hero.name,
    jobTitle: "Senior Product Designer",
    description: hero.subtitle,
    url: siteUrl,
    image: `${siteUrl}/images/masih-sadri-profile.webp`,
    sameAs: socialLinks.map((link) => link.href)
  }
];
var homePageMetadata = {
  title: "Masih Sadri — Senior Product Designer crafting trustworthy experiences",
  description: "Portfolio of Masih Sadri, an impact-oriented senior product designer protecting millions of users through trust & safety, growth, and design systems.",
  canonicalPath: "/",
  openGraph: {
    type: "website",
    image: {
      url: `${siteUrl}/images/hero-section-og.png`,
      alt: `${hero.name} — ${hero.title}`,
      width: 2400,
      height: 1120,
      type: "image/png"
    }
  },
  structuredData: homeStructuredData
};

// src/features/home/HomePage.tsx
var jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
var HomePage = () => {
  const { activeCaseStudy, closeRecap, openRecap } = useCaseStudyRecap_default(caseStudies);
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(jsx_dev_runtime12.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Seo_default, {
        ...homePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(HeroSection_default, {
        hero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(WhyHireMeSection_default, {
        content: whyHireMe
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(MetricsSection_default, {
        metrics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(CaseStudiesSection_default, {
        caseStudies,
        onOpenRecap: openRecap
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(TestimonialsSection_default, {
        testimonials
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ContactSection_default, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(CaseStudyRecapDialog_default, {
        caseStudy: activeCaseStudy,
        onClose: closeRecap
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var HomePage_default = HomePage;
export {
  HomePage_default as default
};

//# debugId=27DCD9512672E75864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0xvY2tSb3VuZGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9DYXNlU3R1ZHlDYXJkLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkaWVzU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9DYXNlU3R1ZHlSZWNhcERpYWxvZy50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0V2ZW50QXZhaWxhYmxlLmpzIiwgIi4uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvSW1wYWN0U3RhdENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvTWV0cmljc1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9DaGV2cm9uTGVmdFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0NoZXZyb25SaWdodFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9UZXN0aW1vbmlhbHNTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQXJyb3dCYWNrSW9zUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQXJyb3dGb3J3YXJkSW9zUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0RpZmZlcmVudGlhdG9yc0Nhcm91c2VsLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL1doeUhpcmVNZVNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9ob29rcy91c2VDYXNlU3R1ZHlSZWNhcC50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9zZW8udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvSG9tZVBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk01IDEzaDExLjE3bC00Ljg4IDQuODhjLS4zOS4zOS0uMzkgMS4wMyAwIDEuNDJzMS4wMi4zOSAxLjQxIDBsNi41OS02LjU5Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTYuNTgtNi42YS45OTYuOTk2IDAgMCAwLTEuNDEgMGMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxNi4xNyAxMUg1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxXCJcbn0pLCAnQXJyb3dGb3J3YXJkUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4IDhoLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMm0tNiA5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMk05IDhWNmMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzdjJ6XCJcbn0pLCAnTG9ja1JvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBMb2NrUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9ja1JvdW5kZWRcIjtcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VTdHVkeUNhcmQgPSAoeyBjYXNlU3R1ZHksIGFjdGl2ZSA9IGZhbHNlLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZHlDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG4gIGNvbnN0IGlzTG9ja2VkID0gY2FzZVN0dWR5LmlzTG9ja2VkID8/IGZhbHNlO1xuICBjb25zdCBpc0luUHJvZ3Jlc3MgPSBjYXNlU3R1ZHkuaXNJblByb2dyZXNzID8/IGZhbHNlO1xuXG4gIGNvbnN0IGFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMCwgNDUsIDExMCwgMC45OCksIHJnYmEoNTgsIDExOCwgMjI2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE3LCA3NiwgMTcwLCAwLjg4KSwgcmdiYSg2MCwgMTUxLCAyNTUsIDAuODIpKVwiO1xuXG4gIGNvbnN0IGluYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIwLCAyOCwgNTIsIDAuODIpLCByZ2JhKDEyLCAxOCwgMzYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQ4LCAyNTEsIDI1NSwgMC45NCksIHJnYmEoMjMyLCAyNDIsIDI1NSwgMC44OCkpXCI7XG5cbiAgY29uc3QgbG9ja2VkQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIwLCAyOCwgNTIsIDAuNjUpLCByZ2JhKDEyLCAxOCwgMzYsIDAuNykpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjc1KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjcpKVwiO1xuXG4gIGNvbnN0IGhlYWRpbmdDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpXCJcbiAgICA6IGlzTG9ja2VkXG4gICAgICA/IGlzRGFya1xuICAgICAgICA/IFwicmdiYSgxODAsIDE5MCwgMjIwLCAwLjcpXCJcbiAgICAgICAgOiBcInJnYmEoMTAwLCAxMjAsIDE1MCwgMC43KVwiXG4gICAgICA6IGlzRGFya1xuICAgICAgICA/IFwicmdiYSgyMjYsIDIzNCwgMjU1LCAwLjk1KVwiXG4gICAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNMb2NrZWRcbiAgICAgID8gaXNEYXJrXG4gICAgICAgID8gXCJyZ2JhKDE2MCwgMTc1LCAyMTAsIDAuNilcIlxuICAgICAgICA6IFwicmdiYSgxMjAsIDE0MCwgMTcwLCAwLjYpXCJcbiAgICAgIDogaXNEYXJrXG4gICAgICAgID8gXCJyZ2JhKDIxMCwgMjIwLCAyNTUsIDAuODIpXCJcbiAgICAgICAgOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5O1xuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilcIlxuICAgIDogaXNMb2NrZWRcbiAgICAgID8gaXNEYXJrXG4gICAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTgpXCJcbiAgICAgICAgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMDgpXCJcbiAgICAgIDogaXNEYXJrXG4gICAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgICAgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMTIpXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgICBlbGV2YXRpb249ezB9XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gYWN0aXZlQmFja2dyb3VuZCA6IGlzTG9ja2VkID8gbG9ja2VkQmFja2dyb3VuZCA6IGluYWN0aXZlQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcbiAgICAgICAgY29sb3I6IGFjdGl2ZSA/IHBhbGV0dGUuY29tbW9uLndoaXRlIDogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIGJveFNoYWRvdzogYWN0aXZlID8gdG9rZW5zLnNoYWRvdy5sZXZlbDMgOiB0b2tlbnMuc2hhZG93LmxldmVsMixcbiAgICAgICAgdHJhbnNpdGlvbjogdG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgIG9wYWNpdHk6IGlzTG9ja2VkID8gMC44NSA6IDEsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBpc0xvY2tlZCA/IFwibm9uZVwiIDogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiBpc0xvY2tlZCA/IHRva2Vucy5zaGFkb3cubGV2ZWwyIDogdG9rZW5zLnNoYWRvdy5sZXZlbDMsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGI6IDMgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNMb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTUwLCAxNjUsIDIwMCwgMC43KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjAsIDE0MCwgMTcwLCAwLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTg5LCAyMDQsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FzZSB7Y2FzZVN0dWR5Lm51bWJlcn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7aXNMb2NrZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxMb2NrUm91bmRlZEljb25cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0RhcmsgPyBcInJnYmEoMTUwLCAxNjUsIDIwMCwgMC43KVwiIDogXCJyZ2JhKDEyMCwgMTQwLCAxNzAsIDAuNylcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7aXNJblByb2dyZXNzICYmIChcbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbiBQcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMTkzLCA3LCAwLjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyNTUsIDE5MywgNywgMC4xNSlcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzRGFyayA/IFwicmdiYSgyNTUsIDIyNCwgMTMwLCAwLjk1KVwiIDogXCJyZ2JhKDE4NCwgMTM0LCAxMSwgMC45NSlcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJyZ2JhKDI1NSwgMTkzLCA3LCAwLjMpXCIgOiBcInJnYmEoMjU1LCAxOTMsIDcsIDAuMjUpXCJcbiAgICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuN3JlbVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjI0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzTG9ja2VkXG4gICAgICAgICAgICAgICAgICAgICAgPyBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE4MCwgMTk1LCAyMjAsIDAuOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIwLCAxNDAsIDE3MCwgMC44KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIxNCwgMjI0LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IGFjdGl2ZSA/IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNOREEgPSB0YWcudG9Mb3dlckNhc2UoKSA9PT0gXCJuZGFcIjtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNOREFcbiAgICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCA4NywgMzQsIDAuMjUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgODcsIDM0LCAwLjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjU1LCA4NywgMzQsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzTkRBXG4gICAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMTgzLCAxNTQsIDAuOTUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMTgzLCAxNTQsIDAuOTUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTkxLCA1NCwgMTIsIDAuOTUpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaXNOREFcbiAgICAgICAgICAgICAgICAgICAgICA/IGAxcHggc29saWQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCA4NywgMzQsIDAuNClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDg3LCAzNCwgMC4zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyNTUsIDg3LCAzNCwgMC4yNSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogaXNOREEgPyA2MDAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2lzTG9ja2VkID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxMb2NrUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJub3QtYWxsb3dlZFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpc0RhcmsgPyBcInJnYmEoMTUwLCAxNjUsIDIwMCwgMC42KVwiIDogXCJyZ2JhKDEyMCwgMTQwLCAxNzAsIDAuNilcIixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogaXNEYXJrID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTUpXCIgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMSlcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9ja2VkXG4gICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZWNhcH1cbiAgICAgICAgICAgICAgZW5kSWNvbj17PFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVjYXBcbiAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBhY3RpdmUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZWNhcH1cbiAgICAgICAgICAgICAgZW5kSWNvbj17PFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSlcIixcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNilcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZWNhcFxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuUmVjYXB9XG4gICAgICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlY2FwXG4gICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUlkLCBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQ2FzZVN0dWR5Q2FyZCBmcm9tIFwiLi9DYXNlU3R1ZHlDYXJkXCI7XG5cbnR5cGUgQ2FzZVN0dWRpZXNTZWN0aW9uUHJvcHMgPSB7XG4gIGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+O1xuICBvbk9wZW5SZWNhcDogKGlkOiBDYXNlU3R1ZHlJZCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENhc2VTdHVkaWVzU2VjdGlvbiA9ICh7IGNhc2VTdHVkaWVzLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZGllc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgaWQ9XCJjYXNlLXN0dWRpZXNcIlxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSwgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIiB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5DYXNlIHN0dWRpZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBFeGFtcGxlcyBvZiB0aGUgaW1wYWN0IEkgaGF2ZSBtYWRlXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgIHtjYXNlU3R1ZGllcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIDxDYXNlU3R1ZHlDYXJkXG4gICAgICAgICAgICAgIGNhc2VTdHVkeT17aXRlbX1cbiAgICAgICAgICAgICAgYWN0aXZlPXtpdGVtLmlkID09PSBcImRpdmFyXCJ9XG4gICAgICAgICAgICAgIG9uT3BlblJlY2FwPXsoKSA9PiBvbk9wZW5SZWNhcChpdGVtLmlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZGllc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBEaWFsb2csXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ1RpdGxlLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcERpYWxvZ1Byb3BzID0ge1xuICBjYXNlU3R1ZHk6IENhc2VTdHVkeVN1bW1hcnkgfCBudWxsO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ2FzZVN0dWR5UmVjYXBEaWFsb2cgPSAoeyBjYXNlU3R1ZHksIG9uQ2xvc2UgfTogQ2FzZVN0dWR5UmVjYXBEaWFsb2dQcm9wcykgPT4gKFxuICA8RGlhbG9nXG4gICAgb3Blbj17Qm9vbGVhbihjYXNlU3R1ZHkpfVxuICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiXG4gID5cbiAgICB7Y2FzZVN0dWR5ID8gKFxuICAgICAgPD5cbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiPntjYXNlU3R1ZHkucmVjYXAuaGVhZGxpbmV9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MS41fSBzeD17eyBwbDogMiB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucmVjYXAuYnVsbGV0cy5tYXAoKGJ1bGxldCkgPT4gKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17YnVsbGV0fSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge2J1bGxldH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gbXQ9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWVwIGRpdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8Lz5cbiAgICApIDogbnVsbH1cbiAgPC9EaWFsb2c+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlSZWNhcERpYWxvZztcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNi41MyAxMS4wNiAxNS40NyAxMGwtNC44OCA0Ljg4LTIuMTItMi4xMi0xLjA2IDEuMDZMMTAuNTkgMTd6TTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0ybTAgMTZINVY4aDE0elwiXG59KSwgJ0V2ZW50QXZhaWxhYmxlJyk7IiwKICAgICJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvblByb3BzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG50eXBlIENvbnRhY3RBY3Rpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdmFyaWFudD86IEJ1dHRvblByb3BzW1widmFyaWFudFwiXTtcbiAgY29sb3I/OiBCdXR0b25Qcm9wc1tcImNvbG9yXCJdO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbn07XG5cbnR5cGUgTGV0c1RhbGtTZWN0aW9uUHJvcHMgPSB7XG4gIGlkPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaW1hcnlBY3Rpb246IENvbnRhY3RBY3Rpb247XG4gIHNlY29uZGFyeUFjdGlvbnM/OiBSZWFkb25seUFycmF5PENvbnRhY3RBY3Rpb24+O1xufTtcblxuY29uc3QgaXNFeHRlcm5hbExpbmsgPSAoaHJlZjogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBocmVmLnN0YXJ0c1dpdGgoXCJodHRwXCIpIHx8IGhyZWYuc3RhcnRzV2l0aChcIm1haWx0bzpcIikgfHwgaHJlZi5zdGFydHNXaXRoKFwidGVsOlwiKTtcbn07XG5cbmNvbnN0IGdldEV4dGVybmFsTGlua1Byb3BzID0gKGhyZWY6IHN0cmluZykgPT4ge1xuICBpZiAoaXNFeHRlcm5hbExpbmsoaHJlZikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICB9IGFzIGNvbnN0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHVuZGVmaW5lZCxcbiAgICByZWw6IHVuZGVmaW5lZCxcbiAgfSBhcyBjb25zdDtcbn07XG5cbmNvbnN0IExldHNUYWxrU2VjdGlvbiA9ICh7XG4gIGlkLFxuICB0aXRsZSA9IFwiTGV0J3MgVGFsayBhbmQgV29yayBUb2dldGhlclwiLFxuICBkZXNjcmlwdGlvbiA9IFwiSSdtIGFsd2F5cyBvcGVuIHRvIGRpc2N1c3NpbmcgbmV3IHByb2plY3RzLCBjcmVhdGl2ZSBpZGVhcywgb3Igb3Bwb3J0dW5pdGllcyB0byBiZSBwYXJ0IG9mIHlvdXIgdmlzaW9uLlwiLFxuICBwcmltYXJ5QWN0aW9uLFxuICBzZWNvbmRhcnlBY3Rpb25zID0gW10sXG59OiBMZXRzVGFsa1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBpZD17aWR9IHN4PXt7IHB5OiB7IHhzOiA0LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q2FyZFxuICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHsgeHM6IFwiMTZweFwiLCBtZDogXCIyNHB4XCIgfSxcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICBweDogeyB4czogMi41LCBtZDogNSB9LFxuICAgICAgICAgIHB5OiB7IHhzOiAzLCBtZDogNSB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgcGI6IDAsIHB4OiB7IHhzOiAwLCBtZDogMCB9IH19PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLCBtZDogMS41IH19IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiIFxuICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIxLjVyZW1cIiwgbWQ6IFwiMnJlbVwiIH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiB7IHhzOiBcIjAuODc1cmVtXCIsIG1kOiBcIjFyZW1cIiB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IHsgeHM6IDIuNSwgbWQ6IDQgfSwgcHg6IDAsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogeyB4czogMS41LCBtZDogMiB9IH19PlxuICAgICAgICAgIHsvKiBQcmltYXJ5IEFjdGlvbiAtIEZ1bGwgV2lkdGggKi99XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtpc0V4dGVybmFsTGluayhwcmltYXJ5QWN0aW9uLmhyZWYpID8gXCJhXCIgOiBSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgaHJlZj17aXNFeHRlcm5hbExpbmsocHJpbWFyeUFjdGlvbi5ocmVmKSA/IHByaW1hcnlBY3Rpb24uaHJlZiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHRvPXshaXNFeHRlcm5hbExpbmsocHJpbWFyeUFjdGlvbi5ocmVmKSA/IHByaW1hcnlBY3Rpb24uaHJlZiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHN0YXJ0SWNvbj17cHJpbWFyeUFjdGlvbi5pY29ufVxuICAgICAgICAgICAgdmFyaWFudD17cHJpbWFyeUFjdGlvbi52YXJpYW50ID8/IFwiY29udGFpbmVkXCJ9XG4gICAgICAgICAgICBjb2xvcj17cHJpbWFyeUFjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICBzeD17eyBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI1NnB4XCIgfSB9fVxuICAgICAgICAgICAgdGFyZ2V0PXtwcmltYXJ5QWN0aW9uLnRhcmdldCA/PyBnZXRFeHRlcm5hbExpbmtQcm9wcyhwcmltYXJ5QWN0aW9uLmhyZWYpLnRhcmdldH1cbiAgICAgICAgICAgIHJlbD17cHJpbWFyeUFjdGlvbi5yZWwgPz8gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMocHJpbWFyeUFjdGlvbi5ocmVmKS5yZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnlBY3Rpb24ubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIFNlY29uZGFyeSBBY3Rpb25zIC0gR3JvdXBlZCBSb3cgKi99XG4gICAgICAgICAge3NlY29uZGFyeUFjdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAxLjUgfX1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsUHJvcHMgPSBnZXRFeHRlcm5hbExpbmtQcm9wcyhhY3Rpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNFeHRlcm5hbCA9IGlzRXh0ZXJuYWxMaW5rKGFjdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2FjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2lzRXh0ZXJuYWwgPyBcImFcIiA6IFJvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2lzRXh0ZXJuYWwgPyBhY3Rpb24uaHJlZiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgdG89eyFpc0V4dGVybmFsID8gYWN0aW9uLmhyZWYgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17YWN0aW9uLmljb259XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2FjdGlvbi52YXJpYW50ID8/IFwib3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2FjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI0OHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogXCIxMDAlXCIsIG1kOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IHsgbWQ6IFwiMSAxIDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB7IG1kOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17YWN0aW9uLnRhcmdldCA/PyBleHRlcm5hbFByb3BzLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgcmVsPXthY3Rpb24ucmVsID8/IGV4dGVybmFsUHJvcHMucmVsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IHR5cGUgeyBDb250YWN0QWN0aW9uLCBMZXRzVGFsa1NlY3Rpb25Qcm9wcyB9O1xuZXhwb3J0IGRlZmF1bHQgTGV0c1RhbGtTZWN0aW9uO1xuXG4iLAogICAgImltcG9ydCBFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsUm91bmRlZFwiO1xuaW1wb3J0IEV2ZW50QXZhaWxhYmxlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FdmVudEF2YWlsYWJsZVwiO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UZWxlZ3JhbVwiO1xuaW1wb3J0IExldHNUYWxrU2VjdGlvbiBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvTGV0c1RhbGtTZWN0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvTGV0c1RhbGtTZWN0aW9uXCI7XG5cbmNvbnN0IENvbnRhY3RTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzZWNvbmRhcnlBY3Rpb25zOiBDb250YWN0QWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICAgIGhyZWY6IFwibWFpbHRvOnNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgICBpY29uOiA8RW1haWxSb3VuZGVkSWNvbiAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkJvb2sgYSBzZXNzaW9uXCIsXG4gICAgICBocmVmOiBcIi9jb250YWN0I21lbnRvcnNoaXBcIixcbiAgICAgIGljb246IDxFdmVudEF2YWlsYWJsZUljb24gLz4sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMZXRzVGFsa1NlY3Rpb25cbiAgICAgIGlkPVwiY29udGFjdFwiXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgIGxhYmVsOiBcIkRpcmVjdCBtZXNzYWdlXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly90Lm1lL21hc2loc2FkcmlcIixcbiAgICAgICAgaWNvbjogPFRlbGVncmFtSWNvbiAvPixcbiAgICAgIH19XG4gICAgICBzZWNvbmRhcnlBY3Rpb25zPXtzZWNvbmRhcnlBY3Rpb25zfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0U2VjdGlvbjtcbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7IEF2YXRhciwgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBIZXJvQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgY2VydGlmaWVkQmFkZ2VTcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9iYWRnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ1wiO1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsVG9FbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Ntb290aFNjcm9sbFwiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IEhlcm9Db250ZW50O1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVQcmltYXJ5Q3RhQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBoZXJvLmN0YVByaW1hcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVByaW1hcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhUHJpbWFyeS5zY3JvbGxUb0lkLCBoZXJvLmN0YVByaW1hcnkudG9dKTtcblxuICBjb25zdCBoYW5kbGVTZWNvbmRhcnlDdGFDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQgPz8gaGVyby5jdGFTZWNvbmRhcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhU2Vjb25kYXJ5LnRvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTglIDE1JSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTgpLCB0cmFuc3BhcmVudCA2MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc4JSAxOCUsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTgpLCB0cmFuc3BhcmVudCA1NSUpXCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogNCwgbWQ6IDMuNSB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJzdHJldGNoXCIgfSxcbiAgICAgICAgICAgIHB4OiB7IHhzOiAwLCBtZDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDMyMCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2hlcm8ucG9ydHJhaXQuYWx0fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMThweCA0MHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtjZXJ0aWZpZWRCYWRnZVNyY31cbiAgICAgICAgICAgICAgICBhbHQ9XCJDZXJ0aWZpZWQgYmFkZ2VcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogeyB4czogLTE4LCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAtMTgsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAxMjAsIG1kOiAxNTAgfSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17eyB4czogMi4yNSwgbWQ6IDIuNzUgfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS40LCBtZDogMS44IH19IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEsIHNtOiAxLjUgfX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcImNlbnRlclwiLCBzbTogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjMsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImRpc3BsYXlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjA1LFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMTVlbVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5uYW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7IHhzOiBcIjAuMDFlbVwiLCBtZDogXCIwLjAwNWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjg1JVwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjEycmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNjUsIG1kOiAxLjcgfSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuc3BsaXQoXCIgfCBcIilbMF19XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuaW5jbHVkZXMoXCIgfCBcIikgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuOTVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNiwgbWQ6IDEuNjUgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5zcGxpdChcIiB8IFwiKS5zbGljZSgxKS5qb2luKFwiIHwgXCIpfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgey8qIEtleSBWYWx1ZSBQaWxscyAqL31cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHB0OiAwLjUsXG4gICAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIjQwKyBNaWxsaW9uIFVzZXJzXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkIyQiAmIEIyQ1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhLURyaXZlblwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBSS1GYW1pbGlhclwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWNobmljYWwgJiBNYW5hZ2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNSwgc206IDIgfX1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICBzeD17eyBwdDogeyB4czogMC41LCBtZDogMC43NSB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogeyBzbTogMjIwIH0sXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByaW1hcnlDdGFDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vjb25kYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDEuMjUsIG1kOiAxLjUgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uY3RhU2Vjb25kYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0cmljU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEltcGFjdFN0YXRDYXJkUHJvcHMgPSBNZXRyaWNTdW1tYXJ5O1xuXG5jb25zdCBJbXBhY3RTdGF0Q2FyZCA9ICh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogSW1wYWN0U3RhdENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIH0pfVxuICA+XG4gICAgPENhcmRDb250ZW50IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEgfX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgIHt2YWx1ZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImg2XCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQ2FyZENvbnRlbnQ+XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcGFjdFN0YXRDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1ldHJpY1N1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBJbXBhY3RTdGF0Q2FyZCBmcm9tIFwiLi9JbXBhY3RTdGF0Q2FyZFwiO1xuXG50eXBlIE1ldHJpY3NTZWN0aW9uUHJvcHMgPSB7XG4gIG1ldHJpY3M6IFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT47XG59O1xuXG5jb25zdCBNZXRyaWNzU2VjdGlvbiA9ICh7IG1ldHJpY3MgfTogTWV0cmljc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSwgcHQ6IHsgbWQ6IDYgfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+UmVjZW50IEltcGFjdCBJIEhhdmUgTWFkZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBNZWFzdXJhYmxlIG91dGNvbWVzIGZyb20gbXkgZGVzaWduIHdvcmtcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAzLCBtZDogMy41IH19PlxuICAgICAgICAgIHttZXRyaWNzLm1hcCgoeyB2YWx1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfX0ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgIDxJbXBhY3RTdGF0Q2FyZCB2YWx1ZT17dmFsdWV9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3NTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE0LjcxIDYuNzFhLjk5Ni45OTYgMCAwIDAtMS40MSAwTDguNzEgMTEuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw0LjU5IDQuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwcy4zOS0xLjAyIDAtMS40MUwxMC44MyAxMmwzLjg4LTMuODhjLjM5LS4zOS4zOC0xLjAzIDAtMS40MVwiXG59KSwgJ0NoZXZyb25MZWZ0Um91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkuMjkgNi43MWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMy4xNyAxMmwtMy44OCAzLjg4Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxczEuMDIuMzkgMS40MSAwbDQuNTktNC41OWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEwLjcgNi43Yy0uMzgtLjM4LTEuMDItLjM4LTEuNDEuMDFcIlxufSksICdDaGV2cm9uUmlnaHRSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQ2hldnJvbkxlZnRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdFJvdW5kZWRcIjtcbmltcG9ydCBDaGV2cm9uUmlnaHRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uUmlnaHRSb3VuZGVkXCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJveCwgQ2FyZCwgQ29udGFpbmVyLCBJY29uQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgVGVzdGltb25pYWwgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBUZXN0aW1vbmlhbHNTZWN0aW9uUHJvcHMgPSB7XG4gIHRlc3RpbW9uaWFsczogUmVhZG9ubHlBcnJheTxUZXN0aW1vbmlhbD47XG59O1xuXG5jb25zdCBUZXN0aW1vbmlhbHNTZWN0aW9uID0gKHsgdGVzdGltb25pYWxzIH06IFRlc3RpbW9uaWFsc1NlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVQcmV2aW91cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ID09PSAwID8gdGVzdGltb25pYWxzLmxlbmd0aCAtIDEgOiBwcmV2IC0gMSkpO1xuICB9LCBbdGVzdGltb25pYWxzLmxlbmd0aF0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiA9PT0gdGVzdGltb25pYWxzLmxlbmd0aCAtIDEgPyAwIDogcHJldiArIDEpKTtcbiAgfSwgW3Rlc3RpbW9uaWFscy5sZW5ndGhdKTtcblxuICAvLyBLZXlib2FyZCBuYXZpZ2F0aW9uIHN1cHBvcnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGhhbmRsZVByZXZpb3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgfSwgW2hhbmRsZVByZXZpb3VzLCBoYW5kbGVOZXh0XSk7XG5cbiAgY29uc3QgY3VycmVudFRlc3RpbW9uaWFsID0gdGVzdGltb25pYWxzW2N1cnJlbnRJbmRleF07XG5cbiAgaWYgKCFjdXJyZW50VGVzdGltb25pYWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBzeD17e1xuICAgICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgPyBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDUwJSwgcmdiYSgxNDUsIDE2NywgMjU1LCAwLjA2KSwgdHJhbnNwYXJlbnQgNzAlKVwiXG4gICAgICAgICAgICA6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xKSwgdHJhbnNwYXJlbnQgNzAlKVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPldoYXQgUGVvcGxlIFNheTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgUmVjb21tZW5kYXRpb25zIGZyb20gY29sbGVhZ3VlcyBhbmQgbWVudGVlc1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgbWQ6IFwiODUlXCIsIGxnOiBcIjEyMDBweFwiIH0sXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIExlZnQgQXJyb3cgKi99XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IC0xMiwgbWQ6IC0yNCB9LFxuICAgICAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA0NCxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0NCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiA0NCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4ycyBlYXNlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyB0ZXN0aW1vbmlhbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdFJvdW5kZWRJY29uIGZvbnRTaXplPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgey8qIFRlc3RpbW9uaWFsIENhcmQgKi99XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyB4czogXCIxMDAlXCIsIG1kOiBcIjgwJVwiIH0sXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDQsIG1kOiA4LCBsZzogMTAgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogNSwgbWQ6IDYsIGxnOiA4IH0sXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxOCwgMTgsIDE4LCAwLjgpXCIsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiMCA4cHggMzJweCByZ2JhKDE3LCAzNiwgODMsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIjAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgIHsvKiBRdW90ZSBUZXh0ICovfVxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYmxvY2txdW90ZVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnXCJHZW9yZ2lhXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS41cmVtXCIsIG1kOiBcIjEuNzVyZW1cIiwgbGc6IFwiMnJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNywgbWQ6IDEuNzUgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgcGw6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiJjo6YmVmb3JlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCJcXFxcMjAxQ1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiB7IHhzOiBcIi0wLjJlbVwiLCBtZDogXCItMC4zZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjNyZW1cIiwgbWQ6IFwiNHJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjIpXCIgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1wiR2VvcmdpYVwiLCBzZXJpZicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwucXVvdGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgey8qIEF1dGhvciBTZWN0aW9uICovfVxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgcHQ6IDEsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLmltYWdlPy5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5pbWFnZT8uYWx0IHx8IGAke2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IubmFtZX0gYXZhdGFyYH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogNTYsIG1kOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogNTYsIG1kOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMnB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IubmFtZS5jaGFyQXQoMCl9XG4gICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9IHN4PXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuOTM3NXJlbVwiLCBtZDogXCIxcmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjAxZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuODEyNXJlbVwiLCBtZDogXCIwLjg3NXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLmNvbXBhbnkgJiYgYCDigKIgJHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLmNvbXBhbnl9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC43KVwiIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC43KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IDAuMjUsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLnJlbGF0aW9uc2hpcH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgICB7LyogUmlnaHQgQXJyb3cgKi99XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHsgeHM6IC0xMiwgbWQ6IC0yNCB9LFxuICAgICAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA0NCxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0NCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiA0NCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4ycyBlYXNlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHRlc3RpbW9uaWFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENoZXZyb25SaWdodFJvdW5kZWRJY29uIGZvbnRTaXplPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHsvKiBDYXJvdXNlbCBJbmRpY2F0b3JzICovfVxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRJbmRleChpbmRleCl9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAxMiwgbWQ6IDEwIH0sXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDEyLCBtZDogMTAgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4ycyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTIsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDEyLFxuICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjIpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEdvIHRvIHRlc3RpbW9uaWFsICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNTZWN0aW9uO1xuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNi42MiAyLjk5Yy0uNDktLjQ5LTEuMjgtLjQ5LTEuNzcgMEw2LjU0IDExLjNjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOC4zMSA4LjMxYy40OS40OSAxLjI4LjQ5IDEuNzcgMHMuNDktMS4yOCAwLTEuNzdMOS4zOCAxMmw3LjI1LTcuMjVjLjQ4LS40OC40OC0xLjI4LS4wMS0xLjc2XCJcbn0pLCAnQXJyb3dCYWNrSW9zUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuMzggMjEuMDFjLjQ5LjQ5IDEuMjguNDkgMS43NyAwbDguMzEtOC4zMWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDkuMTUgMi45OGMtLjQ5LS40OS0xLjI4LS40OS0xLjc3IDBzLS40OSAxLjI4IDAgMS43N0wxNC42MiAxMmwtNy4yNSA3LjI1Yy0uNDguNDgtLjQ4IDEuMjguMDEgMS43NlwiXG59KSwgJ0Fycm93Rm9yd2FyZElvc1JvdW5kZWQnKTsiLAogICAgImltcG9ydCBBcnJvd0JhY2tJb3NSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgSWNvbkJ1dHRvbixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIERpZmZlcmVudGlhdG9yID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxEaWZmZXJlbnRpYXRvcj47XG59O1xuXG5jb25zdCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbCA9ICh7IGl0ZW1zIH06IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbY2FuU2Nyb2xsTGVmdCwgc2V0Q2FuU2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjYW5TY3JvbGxSaWdodCwgc2V0Q2FuU2Nyb2xsUmlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2hlY2tTY3JvbGxhYmlsaXR5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGgsIGNsaWVudFdpZHRoIH0gPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudDtcbiAgICBzZXRDYW5TY3JvbGxMZWZ0KHNjcm9sbExlZnQgPiAwKTtcbiAgICBzZXRDYW5TY3JvbGxSaWdodChzY3JvbGxMZWZ0IDwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIDEwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbCA9IHVzZUNhbGxiYWNrKFxuICAgIChkaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiKSA9PiB7XG4gICAgICBpZiAoIXNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik/LmNsaWVudFdpZHRoID8/IDMyMDtcbiAgICAgIGNvbnN0IHNjcm9sbEFtb3VudCA9IGNhcmRXaWR0aCArIDI0OyAvLyBjYXJkIHdpZHRoICsgZ2FwXG5cbiAgICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEJ5KHtcbiAgICAgICAgbGVmdDogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IC1zY3JvbGxBbW91bnQgOiBzY3JvbGxBbW91bnQsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENoZWNrIHNjcm9sbGFiaWxpdHkgYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgc2V0VGltZW91dChjaGVja1Njcm9sbGFiaWxpdHksIDMwMCk7XG4gICAgfSxcbiAgICBbY2hlY2tTY3JvbGxhYmlsaXR5XSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2hlY2tTY3JvbGxhYmlsaXR5KCk7XG4gIH0sIFtjaGVja1Njcm9sbGFiaWxpdHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrU2Nyb2xsYWJpbGl0eSgpO1xuICAgIC8vIEFsc28gY2hlY2sgb24gd2luZG93IHJlc2l6ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrU2Nyb2xsYWJpbGl0eSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrU2Nyb2xsYWJpbGl0eSk7XG4gIH0sIFtjaGVja1Njcm9sbGFiaWxpdHldKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgey8qIE5hdmlnYXRpb24gQnV0dG9ucyAqL31cbiAgICAgIHtjYW5TY3JvbGxMZWZ0ICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwoXCJsZWZ0XCIpfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgbGVmdDogeyB4czogLTEyLCBtZDogLTE2IH0sXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgbWluSGVpZ2h0OiA0NCxcbiAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0NCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDQ0LCBtZDogNDggfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgbGVmdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHtjYW5TY3JvbGxSaWdodCAmJiAoXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsKFwicmlnaHRcIil9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICByaWdodDogeyB4czogLTEyLCBtZDogLTE2IH0sXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluV2lkdGg6IDQ0LFxuICAgICAgICAgICAgbWluSGVpZ2h0OiA0NCxcbiAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0NCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDQ0LCBtZDogNDggfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgcmlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApfVxuXG4gICAgICB7LyogU2Nyb2xsYWJsZSBDb250YWluZXIgKi99XG4gICAgICA8Qm94XG4gICAgICAgIHJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGdhcDogMyxcbiAgICAgICAgICBvdmVyZmxvd1g6IFwiYXV0b1wiLFxuICAgICAgICAgIG92ZXJmbG93WTogXCJoaWRkZW5cIixcbiAgICAgICAgICBzY3JvbGxTbmFwVHlwZTogXCJ4IG1hbmRhdG9yeVwiLFxuICAgICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIiwgLy8gRmlyZWZveFxuICAgICAgICAgIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsIC8vIElFL0VkZ2VcbiAgICAgICAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLCAvLyBDaHJvbWUvU2FmYXJpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBweDogeyB4czogMSwgbWQ6IDIgfSxcbiAgICAgICAgICBweTogMSxcbiAgICAgICAgICAvLyBIaWRlIHNjcm9sbGJhciBidXQgYWxsb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICAgICAgICAvLyBWaXN1YWwgaW5kaWNhdG9yIGZvciBzY3JvbGxhYmxlIGNvbnRlbnRcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIFwiJjo6YWZ0ZXJcIjoge1xuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkpXCJcbiAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgcmdiYSgxOCwgMTgsIDE4LCAwLjgpKVwiLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBjYW5TY3JvbGxSaWdodCA/IDEgOiAwLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuMnMgZWFzZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzNDAgfSxcbiAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IDIwMCwgbWQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTgsIDE4LCAxOCwgMC42KVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgOHB4IDI0cHggcmdiYSgxNywgMzYsIDgzLCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIjAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHA6IHsgeHM6IDIsIG1kOiAyLjUgfSwgaGVpZ2h0OiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGZvbnRXZWlnaHQ9ezYwMH0gc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMXJlbVwiLCBtZDogXCIxLjEyNXJlbVwiIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGxpbmVIZWlnaHQ9ezEuNn0gc3g9e3sgZmxleEdyb3c6IDEsIGZvbnRTaXplOiB7IHhzOiBcIjAuODc1cmVtXCIsIG1kOiBcIjAuOTM3NXJlbVwiIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbDtcblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsIGZyb20gXCIuL0RpZmZlcmVudGlhdG9yc0Nhcm91c2VsXCI7XG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IHR5cGUgeyBXaHlIaXJlTWVDb250ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgV2h5SGlyZU1lU2VjdGlvblByb3BzID0ge1xuICBjb250ZW50OiBXaHlIaXJlTWVDb250ZW50O1xufTtcblxuY29uc3QgV2h5SGlyZU1lU2VjdGlvbiA9ICh7IGNvbnRlbnQgfTogV2h5SGlyZU1lU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB0OiB7IHhzOiA0LCBtZDogNiB9LCBwYjogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XG4gICAgICAgICAgey8qIFdoYXQgSSBCcmluZyBTZWN0aW9uICovfVxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e2NvbnRlbnQud2hhdElCcmluZy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBLZXkgZGlmZmVyZW50aWF0b3JzIHRoYXQgc2V0IG1lIGFwYXJ0XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8RGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwgaXRlbXM9e2NvbnRlbnQud2hhdElCcmluZy5kaWZmZXJlbnRpYXRvcnN9IC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIHsvKiBRdWljayBTdGF0cyBTZWN0aW9uICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB5OiA0LFxuICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMTEsIDIzNSwgMC4wOCkgMCUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4wOCkgMTAwJSlcIlxuICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTUpIDAlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xNSkgMTAwJSlcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtjb250ZW50LnF1aWNrU3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDYsIG1kOiAzIH19IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD17NzAwfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGZvbnRXZWlnaHQ9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHsvKiBXaGF0IEknbSBMb29raW5nIEZvciBTZWN0aW9uICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB5OiA0LFxuICAgICAgICAgICAgICBweDogeyB4czogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjA2KVwiXG4gICAgICAgICAgICAgICAgICA6IFwicmdiYSg0OCwgODYsIDE3NiwgMC4xMilcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGxpbmVIZWlnaHQ9ezEuOH0+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaHlIaXJlTWVTZWN0aW9uO1xuXG4iLAogICAgImltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENhc2VTdHVkeVN1bW1hcnksXG4gIEV4cGVyaWVuY2VTdW1tYXJ5LFxuICBIZXJvQ29udGVudCxcbiAgTWV0cmljU3VtbWFyeSxcbiAgU29jaWFsTGluayxcbiAgVGVzdGltb25pYWwsXG4gIFdoeUhpcmVNZUNvbnRlbnQsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgaGVybzogSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBcIkhlbGxvIPCfkYvwn4+8LCBJIGFtXCIsXG4gIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgdGl0bGU6IFwiYW4gaW1wYWN0LW9yaWVudGVkIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiRm9ybWVyIGlPUyBkZXZlbG9wZXIgdHVybmVkIGRlc2lnbmVyLCBidWlsZGluZyBkYXRhLWRyaXZlbiBleHBlcmllbmNlcyB0aGF0IGRyaXZlIHVzZXIgcmV0ZW50aW9uIGFuZCBidXNpbmVzcyBncm93dGggZm9yIDQwKyBtaWxsaW9uIHVzZXJzIGFjcm9zcyBCMkIgYW5kIEIyQyBwcm9kdWN0c1wiLFxuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyBjYXNlIHN0dWR5XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjYXNlLXN0dWRpZXNcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiVG8gYmUgaW4gdG91Y2hcIixcbiAgICBzY3JvbGxUb0lkOiBcImNvbnRhY3RcIixcbiAgfSxcbiAgcG9ydHJhaXQ6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBoZXJvUG9ydHJhaXRBc3NldCwgXCJNYXNpaCBTYWRyaSAtIFByb2R1Y3QgRGVzaWduZXJcIiwge1xuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogMTIwMCxcbiAgfSksXG59O1xuXG5leHBvcnQgY29uc3QgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5PiA9IFtcbiAge1xuICAgIHZhbHVlOiBcIjYwJVwiLFxuICAgIHRpdGxlOiBcIlJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDby1sZWQgRGl2YXLigJlzIHNlY3VyZSBjYWxsIHN5c3RlbSB3aXRoIFRydXN0ICYgU2FmZXR5IHRvIHNhZmVndWFyZCAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiOC4zSytcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IHRlYW1zIHVzaW5nIE1vcnBoXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIG9wZW4gZGVzaWduIHN5c3RlbSB0aGF0IHBvd2VycyBGaWdtYSBoYW5kb2ZmcyBhbmQgYWNjZWxlcmF0ZXMgaGlnaC1xdWFsaXR5IHJlbGVhc2VzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgIHRpdGxlOiBcIkRlc2lnbmVycyBtZW50b3JlZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXNpZ25lZCBwcm9qZWN0LWJhc2VkIHByb2dyYW1zIGF0IFJhaG5lbWEgQ29sbGVnZSB0byBoZWxwIGVtZXJnaW5nIGRlc2lnbmVycyBsYXVuY2ggY2FyZWVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgIHRpdGxlOiBcIkxpZnQgaW4gcXVhbGlmaWVkIGxlYWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlZGVzaWduZWQgUGVyc29s4oCZcyBzaWduLXVwIGZ1bm5lbCBlbmQtdG8tZW5kLCByZW1vdmluZyBmcmljdGlvbiBhbmQgYm9vc3RpbmcgbGVhZCBnZW5lcmF0aW9uIGluIDMgbW9udGhzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXJcIixcbiAgICBudW1iZXI6IFwiMDFcIixcbiAgICB0YWc6IFwiSW1wcm92aW5nIFVzZXIgU2FmZXR5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFN0b3J5IG9mIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gICAgcGxhdGZvcm06IFwib24gRGl2YXJcIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJDbGFzc2lmaWVkIEFkcyBQbGF0Zm9ybVwiLFxuICAgIHN0YXQ6IFwiQSBmZWF0dXJlIHVzZWQgYnkgMi4xIG1pbGxpb24gdXNlcnMgcGVyIHdlZWtcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJ0cnVzdCAmIHNhZmV0eVwiLCBcImltcGFjdCBhdCBzY2FsZVwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyBjcm9zcy1mdW5jdGlvbmFsIGd1YXJkcmFpbHMgaGVscGVkIERpdmFyIHJlZHVjZSBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDby1sZWQgYSB0YXNrIGZvcmNlIGJyaWRnaW5nIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgYW5kIEVuZ2luZWVyaW5nLlwiLFxuICAgICAgICBcIlNoaXBwZWQgZHluYW1pYyB2b2ljZS1tYXNraW5nIHdpdGggYWJ1c2UgZGV0ZWN0aW9uIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICAgICAgICBcIlN0b29kIHVwIHBsYXlib29rcyBmb3IgbW9kZXJhdGlvbiBvcHMgdG8gbW9uaXRvciByZXBlYXQgb2ZmZW5kZXJzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWxcIixcbiAgICBudW1iZXI6IFwiMDJcIixcbiAgICB0YWc6IFwiQm9vc3RpbmcgVXNlciBFbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVyc1wiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsIENvLlwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlJldGVudGlvbiBzdHJhdGVneVwiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInJldGVudGlvbiBzdHJhdGVneVwiLCBcImNyb3NzLWZ1bmN0aW9uYWwgbGVhZGVyc2hpcFwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6IFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3Mgb25ib2FyZGluZyB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIk1hcHBlZCBhIG5ldyBsaWZlY3ljbGUgbW9kZWwgdGllZCB0byBkYXRhLWJhY2tlZCBleHBlcmltZW50YXRpb24uXCIsXG4gICAgICAgIFwiUmVmaW5lZCBhY3RpdmF0aW9uIGZsb3dzIHRvIHNwb3RsaWdodCB2YWx1ZSBwcm9wcyB3aXRoaW4gZmlyc3Qgc2Vzc2lvbi5cIixcbiAgICAgICAgXCJDby1jcmVhdGVkIGEgbGVhcm5pbmcgYWdlbmRhIHRvIG1lYXN1cmUgbG95YWx0eSBwcm9ncmFtIHRyYWN0aW9uLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLXlla1wiLFxuICAgIG51bWJlcjogXCIwM1wiLFxuICAgIHRhZzogXCJQcm9kdWN0IERlc2lnbiAmIEdyb3d0aFwiLFxuICAgIHRpdGxlOiBcIkZyb20gNCUgdG8gNDclOiBUdXJuaW5nIGEgRmFpbGluZyBGZWF0dXJlIEludG8gQ29yZSBWYWx1ZVwiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiU2V0YXJlWWVrIEFwcFwiLFxuICAgIHN0YXQ6IFwiMTB4IGdyb3d0aCBpbiBiaWxsIHBheW1lbnQgYWRvcHRpb25cIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJwcm9kdWN0IGRlc2lnblwiLCBcInVzZXIgcmVzZWFyY2hcIiwgXCJncm93dGhcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUteWVrLWJpbGwtcGF5bWVudFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgSSByZWRlc2lnbmVkIFNldGFyZVllaydzIGJpbGwgcGF5bWVudCB0byBpbmNyZWFzZSBhZG9wdGlvbiBmcm9tIDQlIHRvIDQ3JVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIkxlZCBtdWx0aS1tZXRob2QgcmVzZWFyY2ggdW5jb3ZlcmluZyB0cnVzdCwgdHJhbnNwYXJlbmN5LCBhbmQgd29ya2Zsb3cgY2hhbGxlbmdlcyBhdCBTZXRhcmUgQXZhbC5cIixcbiAgICAgICAgXCJEZXNpZ25lZCBzaXggaW50ZXJjb25uZWN0ZWQgc29sdXRpb25zIGFkZHJlc3NpbmcgY29yZSB1c2VyIG5lZWRzIGFuZCBlbW90aW9uYWwgZHJpdmVycy5cIixcbiAgICAgICAgXCJMZWFybmVkIGZyb20gZmFpbHVyZTogVmVyc2lvbiAxIHRhdWdodCB1cyB0aGF0IGdyZWF0IFVYIHJlcXVpcmVzIGdyZWF0IHRlY2huaWNhbCBwZXJmb3JtYW5jZS5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInBoeXNpY2FsLXJlY2VpcHRcIixcbiAgICBudW1iZXI6IFwiMDRcIixcbiAgICB0YWc6IFwiUmV0ZW50aW9uICYgQ29zdCBPcHRpbWl6YXRpb25cIixcbiAgICB0aXRsZTogXCJIb3cgUGh5c2ljYWwgUmVjZWlwdHMgSW5jcmVhc2VkIFJldGVudGlvbiBieSA2JVwiLFxuICAgIHBsYXRmb3JtOiBcImF0IEJpbWVCYXphclwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlVzZXIgUmV0ZW50aW9uIFN0cmF0ZWd5XCIsXG4gICAgc3RhdDogXCI2JSBoaWdoZXIgcmV0ZW50aW9uIHZzLiBkaWdpdGFsLW9ubHkgdXNlcnNcIixcbiAgICB0YWdzOiBbXCJpbiBwcm9ncmVzc1wiLCBcInJldGVudGlvblwiLCBcImRhdGEtZHJpdmVuXCIsIFwiY29zdCBvcHRpbWl6YXRpb25cIiwgXCJOREFcIl0sXG4gICAgdG86IFwiI1wiLFxuICAgIGlzTG9ja2VkOiB0cnVlLFxuICAgIGlzSW5Qcm9ncmVzczogdHJ1ZSxcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6IFwiSG93IHdlIGRpc2NvdmVyZWQgdGhhdCBwaHlzaWNhbCByZWNlaXB0cyBkcml2ZSA2JSBoaWdoZXIgdXNlciByZXRlbnRpb25cIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDb21wYW55IHdhbnRlZCB0byByZWR1Y2UgY29zdHMgYnkgbW90aXZhdGluZyB1c2VycyB0byBza2lwIHBoeXNpY2FsIHJlY2VpcHRzLlwiLFxuICAgICAgICBcIkRhdGEgYW5hbHlzaXMgcmV2ZWFsZWQgdXNlcnMgd2hvIHJlY2VpdmVkIHBoeXNpY2FsIHJlY2VpcHRzIHJldHVybmVkIDYlIG1vcmUgdGhhbiBkaWdpdGFsLW9ubHkgdXNlcnMuXCIsXG4gICAgICAgIFwiVGhlIDYlIHJldGVudGlvbiBpbXByb3ZlbWVudCBtZWFudCBsb3dlciBhY3F1aXNpdGlvbiBjb3N0cywgY2hhbmdpbmcgb3VyIHN0cmF0ZWd5IHRvIGVuY291cmFnZSBwaHlzaWNhbCByZWNlaXB0cy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlczogUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gSW5zdHJ1Y3RvciBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyAyMDArIHN0dWRlbnRzIHRocm91Z2ggNiBjb3Vyc2VzIHNpbmNlIDIwMjJcIixcbiAgICB0YWdzOiBbXCJlZHVjYXRpb25cIiwgXCJtZW50b3JzaGlwXCIsIFwiY3VycmljdWx1bSBkZXNpZ25cIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCByYWhuZW1hU3R1ZGVudHNBc3NldCwgXCJTdHVkZW50cyBhdCBSYWhuZW1hIENvbGxlZ2VcIiksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIG1vcnBoRGVzaWduU3lzdGVtQXNzZXQsXG4gICAgICBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICApLFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogUmVhZG9ubHlBcnJheTxTb2NpYWxMaW5rPiA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiR2l0SHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHdoeUhpcmVNZTogV2h5SGlyZU1lQ29udGVudCA9IHtcbiAgd2hhdElCcmluZzoge1xuICAgIHRpdGxlOiBcIldoYXQgSSBCcmluZ1wiLFxuICAgIGRpZmZlcmVudGlhdG9yczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBSS1GYW1pbGlhciAmIFRlY2huaWNhbFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJ1aWx0IHRoaXMgcG9ydGZvbGlvIGZyb20gc2NyYXRjaCB3aXRoIG1vZGVybiB0b29scy4gRm9ybWVyIGlPUyBkZXZlbG9wZXIgd2l0aCBkZWVwIHVuZGVyc3RhbmRpbmcgb2YgdGVjaG5pY2FsIGNvbnN0cmFpbnRzIGFuZCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRGF0YS1Ecml2ZW4gRGVjaXNpb24gTWFraW5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQ29tcGxldGVkIGEgMTcwLWhvdXIgZGF0YSBhbmFseXN0IGNvdXJzZS4gSSB1c2UgZGF0YSB0byB2YWxpZGF0ZSBkZXNpZ24gZGVjaXNpb25zIGFuZCBtZWFzdXJlIGltcGFjdCwgbm90IGp1c3QgaW50dWl0aW9uLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVXNlciBSZXRlbnRpb24gRXhwZXJ0aXNlIGF0IFNjYWxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUHJvdmVuIHRyYWNrIHJlY29yZCBvZiBpbXByb3ZpbmcgdXNlciByZXRlbnRpb24gYW5kIGVuZ2FnZW1lbnQgZm9yIDQwKyBtaWxsaW9uIHVuaXF1ZSB1c2Vycy4gQ28tbGVkIGNyb3NzLWZ1bmN0aW9uYWwgaW5pdGlhdGl2ZXMgdGhhdCBkcml2ZSBsb25nLXRlcm0gdXNlciB2YWx1ZSBhbmQgYnVzaW5lc3MgZ3Jvd3RoLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVGVhY2hpbmcgJiBNZW50b3JzaGlwIExlYWRlcnNoaXBcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCIzcmQgeWVhciB0ZWFjaGluZyBhdCBjb2xsZWdlLCBtZW50b3JlZCAyMDArIHN0dWRlbnRzLiBUaGlzIHRyYW5zbGF0ZXMgdG8gc3Ryb25nIGNvbW11bmljYXRpb24gc2tpbGxzLCBjdXJyaWN1bHVtIGRlc2lnbiwgYW5kIHRoZSBhYmlsaXR5IHRvIGVsZXZhdGUgdGVhbSBjYXBhYmlsaXRpZXMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDcm9zcy1Qcm9kdWN0IEV4cGVyaWVuY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeHBlcmllbmNlIGFjcm9zcyBib3RoIEIyQyBhbmQgQjJCIHByb2R1Y3RzLCB3aXRoIGEgYmFja2dyb3VuZCBpbiBwcm9qZWN0IG1hbmFnZW1lbnQuIEkgdW5kZXJzdGFuZCBidXNpbmVzcyBzdHJhdGVneSBhbmQgY2FuIG5hdmlnYXRlIGNvbXBsZXggc3Rha2Vob2xkZXIgbGFuZHNjYXBlcy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFkYXB0YWJsZSB0byBBbnkgVGVhbSBTdHJ1Y3R1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeHBlcmllbmNlZCBpbiBnZW5lcmFsaXplZCB0ZWFtcywgZW1iZWRkZWQgcHJvZHVjdCB0ZWFtcywgYW5kIHNvbG8gZGVzaWduIHJvbGVzIGFjcm9zcyBCMkIgYW5kIEIyQyBwcm9kdWN0cy4gSSBhZGFwdCBteSB3b3JrZmxvdyB0byBmaXQgYW55IG9yZ2FuaXphdGlvbmFsIG1vZGVsLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB3aGF0SW1Mb29raW5nRm9yOiB7XG4gICAgdGl0bGU6IFwiV2hhdCBJJ20gTG9va2luZyBGb3JcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSdtIHNlZWtpbmcgc2VuaW9yIHByb2R1Y3QgZGVzaWduIHJvbGVzIHdoZXJlIEkgY2FuIGxldmVyYWdlIG15IGRhdGEtZHJpdmVuIGFwcHJvYWNoIGFuZCB0ZWNobmljYWwgYmFja2dyb3VuZCB0byBkcml2ZSBtZWFzdXJhYmxlIGJ1c2luZXNzIGltcGFjdC4gSSB0aHJpdmUgaW4gY3Jvc3MtZnVuY3Rpb25hbCBlbnZpcm9ubWVudHMgd2hlcmUgZGVzaWduLCBlbmdpbmVlcmluZywgYW5kIGJ1c2luZXNzIHN0cmF0ZWd5IGludGVyc2VjdCwgYW5kIEknbSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHNvbHV0aW9ucyB0aGF0IGRlbGl2ZXIgdGFuZ2libGUgcmVzdWx0cy5cIixcbiAgICBhY3Rpb246IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgTXkgUmVzdW1lXCIsXG4gICAgICBocmVmOiBcIi9yZXN1bWVcIixcbiAgICB9LFxuICB9LFxuICBxdWlja1N0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiNDBNK1wiLFxuICAgICAgbGFiZWw6IFwiVW5pcXVlIFVzZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIyMDArXCIsXG4gICAgICBsYWJlbDogXCJTdHVkZW50cyBNZW50b3JlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMyBZZWFyc1wiLFxuICAgICAgbGFiZWw6IFwiVGVhY2hpbmcgRXhwZXJpZW5jZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiQjJDICYgQjJCXCIsXG4gICAgICBsYWJlbDogXCJQcm9kdWN0IEV4cGVyaWVuY2VcIixcbiAgICB9LFxuICBdLFxufTtcblxuLy8gUHJvZmlsZSBpbWFnZXNcbmltcG9ydCBtYWhkaUFobWFkaXphZGVoSW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy90ZXN0aW1vbmlhbHMvbWFoZGktYWhtYWRpemFkZWguanBlZ1wiO1xuaW1wb3J0IG5haGlkS0ltYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvdGVzdGltb25pYWxzL25haGlkLWsuanBlZ1wiO1xuaW1wb3J0IHNoYWRpWmFyZWlJbWFnZSBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3Rlc3RpbW9uaWFscy9zaGFkaS16YXJlaS5qcGVnXCI7XG5pbXBvcnQgc2FkZXFCSW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy90ZXN0aW1vbmlhbHMvc2FkZXEtYi5qcGVnXCI7XG5pbXBvcnQgc2FlZWRBYm9sZ2hhc2VtaUltYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvdGVzdGltb25pYWxzL3NhZWVkLWFib2xnaGFzZW1pLmpwZ1wiO1xuaW1wb3J0IGhvc3NlaW5NYWhtb3VkdmFuZEltYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvdGVzdGltb25pYWxzL2hvc3NlaW4tbWFobW91ZHZhbmQuanBlZ1wiO1xuaW1wb3J0IHNoYXlhbk1laHJhbnBvdXJJbWFnZSBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3Rlc3RpbW9uaWFscy9zaGF5YW4tbWVocmFucG91ci5qcGVnXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXN0aW1vbmlhbHM6IFJlYWRvbmx5QXJyYXk8VGVzdGltb25pYWw+ID0gW1xuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIk1hc2loIFNhZHJpIGhhcyBiZWVuIGFuIGluY3JlZGlibGUgbWVudG9yIHRocm91Z2hvdXQgbXkgbGVhcm5pbmcgam91cm5leS4gSGUgY29uc2lzdGVudGx5IHNoYXJlZCBoaXMgdmFzdCBrbm93bGVkZ2UgYW5kIHVzZWZ1bCByZXNvdXJjZXMsIGFsd2F5cyBlbmNvdXJhZ2luZyBtZSB0byBwcmFjdGljZSBhbmQgZ3Jvdy5cIixcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IFwiTWFoZGkgQWhtYWRpemFkZWhcIixcbiAgICAgIHBvc2l0aW9uOiBcIkRlc2lnbiBTeXN0ZW0gTWFuYWdlclwiLFxuICAgICAgY29tcGFueTogXCJTbmFwcCEgTWFya2V0XCIsXG4gICAgICByZWxhdGlvbnNoaXA6IFwiTWVudGVlXCIsXG4gICAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIG1haGRpQWhtYWRpemFkZWhJbWFnZSwgXCJNYWhkaSBBaG1hZGl6YWRlaFwiKSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIk1hc2loIGlzIGFuIGluY3JlZGlibHkgdGFsZW50ZWQgcGVyc29uLCBhIHZlcnkgbWF0dXJlIGFuZCBzZWFzb25lZCBwcm9mZXNzaW9uYWwsIGFuZCBhIGdyZWF0IG1lbnRvciB0byBoYXZlLiBIZSBoYXMgYSB3YXJtIGFuZCBlbmdhZ2luZyBzdHlsZSwgYW5kIHRoZSBxdWFsaXR5IG9mIGhpcyBkZXNpZ24gd29yayBhbmQgaWxsdXN0cmF0aW9ucyBpcyBleGNlcHRpb25hbC5cIixcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IFwiTmFoaWQgSy5cIixcbiAgICAgIHBvc2l0aW9uOiBcIlByb2R1Y3QgTWFuYWdlclwiLFxuICAgICAgY29tcGFueTogXCJTZXJ2aWNlIE1hbmFnZW1lbnQgfCBJVFNNXCIsXG4gICAgICByZWxhdGlvbnNoaXA6IFwiQ29sbGVhZ3VlXCIsXG4gICAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIG5haGlkS0ltYWdlLCBcIk5haGlkIEsuXCIpLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdW90ZTpcbiAgICAgIFwiSGlzIHByb2JsZW0tc29sdmluZywgaW50ZXJhY3Rpb24gc2tpbGxzIGFuZCBleWUgZm9yIGRldGFpbHMgYXJlIHJlbWFya2FibGUuIEkgaGF2ZSBhbHdheXMgYmVlbiBpbXByZXNzZWQgYnkgaGlzIHNldmVyZSBtb3RpdmF0aW9uIGFuZCBkZWVwIGtub3dsZWRnZSBpbiB1c2VyIGV4cGVyaWVuY2UuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIlNoYWRpIFphcmVpXCIsXG4gICAgICBwb3NpdGlvbjogXCJSZXNlYXJjaGVyICYgVVgvVUkgRGVzaWduZXJcIixcbiAgICAgIGNvbXBhbnk6IFwiUGhEIENhbmRpZGF0ZVwiLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIkNsYXNzbWF0ZVwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBzaGFkaVphcmVpSW1hZ2UsIFwiU2hhZGkgWmFyZWlcIiksXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHF1b3RlOlxuICAgICAgXCJIZSBoYXMgYSBjdXJpb3VzIG1pbmQgYW5kIGNvbnNpZGVycyBwZXJzb25hbCBkZXZlbG9wbWVudC4gSW4gYWRkaXRpb24gdG8gd2hhdCBpcyB0YXVnaHQgaW4gdGhlIGNsYXNzcm9vbSwgaGUgYWx3YXlzIHJlZmVycyB0byBtb3JlIHJlc291cmNlcyB0byBzb2x2ZSBwcm9ibGVtcyBpbiB0aGUgYmVzdCBwb3NzaWJsZSB3YXkuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIlNhZGVxIC5CXCIsXG4gICAgICBwb3NpdGlvbjogXCJTZW5pb3IgaU9TIEVuZ2luZWVyXCIsXG4gICAgICByZWxhdGlvbnNoaXA6IFwiQ2xhc3NtYXRlXCIsXG4gICAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIHNhZGVxQkltYWdlLCBcIlNhZGVxIC5CXCIpLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdW90ZTpcbiAgICAgIFwiTWFzaWggaXMgb25lIG9mIG15IHByaXZpbGVnZWQgc3R1ZGVudHMgd2hvIGlzIGRldGVybWluZWQgdG8gaW1wcm92ZSBoaXMga25vd2xlZGdlIGFuZCBza2lsbHMuIEhpcyBjb21taXRtZW50IGFuZCBwdW5jdHVhbGl0eSBpbiBkZWxpdmVyaW5nIGFzc2lnbm1lbnRzIGFyZSBjb21tZW5kYWJsZS5cIixcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IFwiQWxpIEF6YWRlXCIsXG4gICAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxuICAgICAgY29tcGFueTogXCJVc2VyVGVzdGluZ1wiLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIkZvcm1lciBUZWFjaGVyXCIsXG4gICAgICAvLyBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIGFsaUF6YWRlSW1hZ2UsIFwiQWxpIEF6YWRlXCIpLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdW90ZTpcbiAgICAgIFwiSXQgd2FzIG15IGZvcnR1bmUgdG8gc3RhcnQgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBhIHN5bXBhdGhldGljIHBlcnNvbiB3aG8gaGFzIHJlbWFya2FibGUgc2tpbGxzIGluIGVtcGF0aGl6aW5nIHdpdGggY29sbGVhZ3Vlcy4gSGUgYWxzbyBrbm93cyBob3cgdG8gcHJpb3JpdGl6ZSB0YXNrcyBiYXNlZCBvbiBpbmRpdmlkdWFscycgaW50ZXJlc3RzIGFuZCBhc3NpZ25zIHRoZW0gdG8gdGhlIHRlYW0gbWVtYmVycy5cIixcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IFwiU2FlZWQgQWJvbGdoYXNlbWlcIixcbiAgICAgIHBvc2l0aW9uOiBcIlByaW5jaXBhbCBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgICBjb21wYW55OiBcIlN5c3RlbXMgVGhpbmtlclwiLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIkRpcmVjdCBSZXBvcnRcIixcbiAgICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgc2FlZWRBYm9sZ2hhc2VtaUltYWdlLCBcIlNhZWVkIEFib2xnaGFzZW1pXCIpLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdW90ZTpcbiAgICAgIFwiV2hlbiBpdCBjb21lcyB0byBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIEl0IGlzIGVub3VnaCB0byBoYW5kb3ZlciBjb25mdXNpb25zIGFuZCByYXcgZGF0YSB0byBNYXNpaC4gV2hpbGUgd29ya2luZyB0b2dldGhlciBpbiB0aGUgcHJvZHVjdCB0ZWFtIGF0IFNldGFyZSBhdmFsIGNvbXBhbnksIE1hc2loJ3Mgc3BlY2lhbHRpZXMgd2VyZSBpbnN0cnVtZW50YWwgaW4gcHJvYmxlbSBkZWZpbml0aW9uLCBmaW5kaW5nIHByb3BlciBzb2x1dGlvbnMsIGFuZCBkZXNpZ25pbmcgZmxvd3MuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICAgIHBvc2l0aW9uOiBcIlByb2R1Y3QgRGVzaWduIExlYWRcIixcbiAgICAgIGNvbXBhbnk6IFwiU25hcHBQYXlcIixcbiAgICAgIHJlbGF0aW9uc2hpcDogXCJGb3JtZXIgTWFuYWdlclwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBob3NzZWluTWFobW91ZHZhbmRJbWFnZSwgXCJIb3NzZWluIE1haG1vdWR2YW5kXCIpLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdW90ZTpcbiAgICAgIFwiTWFzaWggaXMgYSB2ZXJ5IHRhbGVudGVkIGFuZCBwcm9mZXNzaW9uYWwgVVggc3BlY2lhbGlzdCB3aG8gbWFkZSBhIGdyZWF0IGFkZGl0aW9uIHRvIG91ciBncmVhdCBjb21wYW55LiBNYXNpaCBiZWdhbiBjb250cmlidXRpbmcgb24gZGF5IG9uZSBieSBwb3J0aW5nIG91ciBleGlzdGluZyBwcm9kdWN0LlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJTaGF5YW4gTWVocmFucG91clwiLFxuICAgICAgcG9zaXRpb246IFwiU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICBjb21wYW55OiBcIkZsaXhcIixcbiAgICAgIHJlbGF0aW9uc2hpcDogXCJUZWFtIE1lbWJlclwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBzaGF5YW5NZWhyYW5wb3VySW1hZ2UsIFwiU2hheWFuIE1laHJhbnBvdXJcIiksXG4gICAgfSxcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPSB7XG4gIGFjdGl2ZUNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9wZW5SZWNhcDogKGlkOiBDYXNlU3R1ZHlJZCkgPT4gdm9pZDtcbiAgY2xvc2VSZWNhcDogKCkgPT4gdm9pZDtcbiAgaXNPcGVuOiBib29sZWFuO1xufTtcblxuY29uc3QgdXNlQ2FzZVN0dWR5UmVjYXAgPSAoY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT4pOiBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHlJZCwgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZF0gPSB1c2VTdGF0ZTxDYXNlU3R1ZHlJZCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGFjdGl2ZUNhc2VTdHVkeSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY2FzZVN0dWRpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRDYXNlU3R1ZHlJZCkgPz8gbnVsbCxcbiAgICBbY2FzZVN0dWRpZXMsIHNlbGVjdGVkQ2FzZVN0dWR5SWRdLFxuICApO1xuXG4gIGNvbnN0IG9wZW5SZWNhcCA9IHVzZUNhbGxiYWNrKChpZDogQ2FzZVN0dWR5SWQpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNsb3NlUmVjYXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZChudWxsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZlQ2FzZVN0dWR5LFxuICAgIG9wZW5SZWNhcCxcbiAgICBjbG9zZVJlY2FwLFxuICAgIGlzT3BlbjogYWN0aXZlQ2FzZVN0dWR5ICE9PSBudWxsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5UmVjYXA7XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBoZXJvLCBzb2NpYWxMaW5rcyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBob21lU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0gW1xuICB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiU2VhcmNoQWN0aW9uXCIsXG4gICAgICB0YXJnZXQ6IGAke3NpdGVVcmx9Lz9xPXtzZWFyY2hfdGVybV9zdHJpbmd9YCxcbiAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICBqb2JUaXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBoZXJvLnN1YnRpdGxlLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBpbWFnZTogYCR7c2l0ZVVybH0vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicGAsXG4gICAgc2FtZUFzOiBzb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IGxpbmsuaHJlZiksXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJQb3J0Zm9saW8gb2YgTWFzaWggU2FkcmksIGFuIGltcGFjdC1vcmllbnRlZCBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciBwcm90ZWN0aW5nIG1pbGxpb25zIG9mIHVzZXJzIHRocm91Z2ggdHJ1c3QgJiBzYWZldHksIGdyb3d0aCwgYW5kIGRlc2lnbiBzeXN0ZW1zLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9cIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogYCR7c2l0ZVVybH0vaW1hZ2VzL2hlcm8tc2VjdGlvbi1vZy5wbmdgLFxuICAgICAgYWx0OiBgJHtoZXJvLm5hbWV9IOKAlCAke2hlcm8udGl0bGV9YCxcbiAgICAgIHdpZHRoOiAyNDAwLFxuICAgICAgaGVpZ2h0OiAxMTIwLFxuICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogaG9tZVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWRpZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVjYXBEaWFsb2cgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWNhcERpYWxvZ1wiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgTWV0cmljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvblwiO1xuaW1wb3J0IFRlc3RpbW9uaWFsc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHNTZWN0aW9uXCI7XG5pbXBvcnQgV2h5SGlyZU1lU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1doeUhpcmVNZVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkaWVzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICB0ZXN0aW1vbmlhbHMsXG4gIHdoeUhpcmVNZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5UmVjYXAgZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXBcIjtcbmltcG9ydCB7IGhvbWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlQ2FzZVN0dWR5LCBjbG9zZVJlY2FwLCBvcGVuUmVjYXAgfSA9IHVzZUNhc2VTdHVkeVJlY2FwKGNhc2VTdHVkaWVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5ob21lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17aGVyb30gLz5cbiAgICAgIDxXaHlIaXJlTWVTZWN0aW9uIGNvbnRlbnQ9e3doeUhpcmVNZX0gLz5cbiAgICAgIDxNZXRyaWNzU2VjdGlvbiBtZXRyaWNzPXttZXRyaWNzfSAvPlxuICAgICAgPENhc2VTdHVkaWVzU2VjdGlvbiBjYXNlU3R1ZGllcz17Y2FzZVN0dWRpZXN9IG9uT3BlblJlY2FwPXtvcGVuUmVjYXB9IC8+XG4gICAgICA8VGVzdGltb25pYWxzU2VjdGlvbiB0ZXN0aW1vbmlhbHM9e3Rlc3RpbW9uaWFsc30gLz5cbiAgICAgIDxDb250YWN0U2VjdGlvbiAvPlxuXG4gICAgICA8Q2FzZVN0dWR5UmVjYXBEaWFsb2cgY2FzZVN0dWR5PXthY3RpdmVDYXNlU3R1ZHl9IG9uQ2xvc2U9e2Nsb3NlUmVjYXB9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSw0REFBMkIsdUJBQUssUUFBUTtBQUFB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OztBQzVCQSxJQUFNLFdBQVcsTUFBTTtBQUFBLEVBQ3JCLFFBQVEsaUJBQWlCLFlBQVksY0FBYywwQkFBa0IsV0FBVztBQUFBLEVBRWhGLHVCQUNFO0FBQUEsY0FXRTtBQUFBLHNCQVZBLHlCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBMkI7QUFBQSxzQkFFM0IseUJBQUMscUJBQUQ7QUFBQSxRQUFhO0FBQUEsU0FBYixpQ0FBeUI7QUFBQSxzQkFDekIseUJBQUMsMEJBQUQ7QUFBQSxRQUFrQixTQUFTO0FBQUEsU0FBM0IsaUNBQXNDO0FBQUEsc0JBQ3RDLHlCQUFDLHdCQUFEO0FBQUEsUUFBZ0I7QUFBQSxTQUFoQixpQ0FBa0M7QUFBQSxzQkFDbEMseUJBQUMsNEJBQUQ7QUFBQSxRQUFvQjtBQUFBLFFBQTBCLGFBQWE7QUFBQSxTQUEzRCxpQ0FBc0U7QUFBQSxzQkFDdEUseUJBQUMsNkJBQUQ7QUFBQSxRQUFxQjtBQUFBLFNBQXJCLGlDQUFpRDtBQUFBLHNCQUNqRCx5QkFBQyx3QkFBRCxxQ0FBZ0I7QUFBQSxzQkFFaEIseUJBQUMsOEJBQUQ7QUFBQSxRQUFzQixXQUFXO0FBQUEsUUFBaUIsU0FBUztBQUFBLFNBQTNELGlDQUF1RTtBQUFBO0FBQUEsS0FWekUsZ0NBV0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICIyN0RDRDk1MTI2NzJFNzU4NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
