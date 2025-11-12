import {
  Telegram_default,
  smoothScrollToElement
} from "./chunk-ch0gm56j.js";
import {
  EmailRounded_default,
  LinkedIn_default
} from "./chunk-ja5rpkr4.js";
import"./chunk-56dhb304.js";
import {
  GhostButton_default,
  Pill_default,
  PrimaryButton_default,
  createImageResource
} from "./chunk-gbpa909n.js";
import {
  Seo_default,
  site_default
} from "./chunk-fvvawq8m.js";
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
} from "./chunk-a0eztsys.js";

// node_modules/@mui/icons-material/esm/ArrowForwardRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowForwardRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"
}), "ArrowForwardRounded");

// node_modules/@mui/icons-material/esm/PlayCircleOutlineRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var PlayCircleOutlineRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "m10.8 15.9 4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4v7c0 .41.47.65.8.4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "PlayCircleOutlineRounded");

// src/features/home/components/CaseStudyCard.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudyCard = ({ caseStudy, active = false, onOpenRecap }) => {
  const theme = useTheme();
  const { palette, tokens } = theme;
  const isDark = palette.mode === "dark";
  const activeBackground = isDark ? "linear-gradient(135deg, rgba(20, 45, 110, 0.98), rgba(58, 118, 226, 0.88))" : "linear-gradient(135deg, rgba(17, 76, 170, 0.88), rgba(60, 151, 255, 0.82))";
  const inactiveBackground = isDark ? "linear-gradient(140deg, rgba(20, 28, 52, 0.82), rgba(12, 18, 36, 0.88))" : "linear-gradient(135deg, rgba(248, 251, 255, 0.94), rgba(232, 242, 255, 0.88))";
  const headingColor = active ? "rgba(255, 255, 255, 0.96)" : isDark ? "rgba(226, 234, 255, 0.95)" : palette.text.primary;
  const bodyColor = active ? "rgba(255, 255, 255, 0.85)" : isDark ? "rgba(210, 220, 255, 0.82)" : palette.text.secondary;
  const borderColor = active ? "rgba(255, 255, 255, 0.42)" : isDark ? "rgba(122, 162, 255, 0.28)" : "rgba(17, 76, 170, 0.12)";
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
    component: "article",
    elevation: 0,
    sx: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: active ? activeBackground : inactiveBackground,
      border: `1px solid ${borderColor}`,
      color: active ? palette.common.white : palette.text.primary,
      boxShadow: active ? tokens.shadow.level3 : tokens.shadow.level2,
      transition: tokens.transition.hover,
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: tokens.shadow.level3
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
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "eyebrow",
                  sx: {
                    color: active ? "rgba(255, 255, 255, 0.78)" : isDark ? "rgba(189, 204, 255, 0.82)" : palette.brand.secondary
                  },
                  children: [
                    "Case ",
                    caseStudy.number
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                  label: caseStudy.tag,
                  sx: {
                    backgroundColor: active ? "rgba(255, 255, 255, 0.2)" : isDark ? "rgba(98, 132, 218, 0.24)" : "rgba(227, 241, 255, 0.85)",
                    color: active ? "rgba(255, 255, 255, 0.92)" : isDark ? "rgba(214, 224, 255, 0.92)" : palette.brand.secondary,
                    border: active ? "1px solid rgba(255, 255, 255, 0.3)" : undefined
                  },
                  size: "small"
                }, undefined, false, undefined, this)
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
              children: caseStudy.tags.map((tag) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                label: tag,
                size: "small",
                sx: {
                  backgroundColor: active ? "rgba(255, 255, 255, 0.18)" : isDark ? "rgba(98, 132, 218, 0.22)" : "rgba(31, 111, 235, 0.12)",
                  color: active ? "rgba(255, 255, 255, 0.9)" : isDark ? "rgba(221, 230, 255, 0.92)" : palette.brand.secondary
                }
              }, tag, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardActions_default, {
        sx: { px: 3, pb: 3, pt: 0, gap: 1 },
        children: [
          active ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PrimaryButton_default, {
            component: Link,
            to: caseStudy.to,
            fullWidth: true,
            endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
            children: "Explore"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
            component: Link,
            to: caseStudy.to,
            fullWidth: true,
            endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
            children: "Explore"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
            fullWidth: true,
            color: active ? "inherit" : "primary",
            onClick: onOpenRecap,
            endIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PlayCircleOutlineRounded_default, {}, undefined, false, undefined, this),
            sx: {
              color: active ? "rgba(255, 255, 255, 0.92)" : undefined,
              borderColor: active ? "rgba(255, 255, 255, 0.45)" : undefined,
              "&:hover": {
                backgroundColor: active ? "rgba(255, 255, 255, 0.16)" : "rgba(122, 162, 255, 0.14)"
              }
            },
            children: "Recap"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
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

// node_modules/@mui/icons-material/esm/ArticleRounded.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArticleRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1m3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"
}), "ArticleRounded");

// node_modules/@mui/icons-material/esm/EventAvailable.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var EventAvailable_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime4.jsx("path", {
  d: "M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14z"
}), "EventAvailable");

// node_modules/@mui/icons-material/esm/PersonRounded.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var PersonRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime5.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
}), "PersonRounded");

// src/shared/components/LetsTalkSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var getExternalLinkProps = (href) => {
  if (href.startsWith("http")) {
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
          sx: { pt: { xs: 2.5, md: 4 }, px: 0, flexDirection: "column", gap: { xs: 2, md: 2.5 } },
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
              component: "a",
              href: primaryAction.href,
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
              spacing: 2,
              sx: { width: "100%" },
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  direction: { xs: "column", md: "row" },
                  spacing: { xs: 1.5, md: 1.5 },
                  justifyContent: "center",
                  alignItems: "stretch",
                  sx: { width: "100%" },
                  children: secondaryActions.filter((action) => action.category === "contact").map((action) => {
                    const externalProps = getExternalLinkProps(action.href);
                    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                      component: "a",
                      href: action.href,
                      startIcon: action.icon,
                      variant: action.variant ?? "outlined",
                      color: action.color ?? "primary",
                      size: "large",
                      fullWidth: { xs: true, md: false },
                      sx: {
                        minHeight: { xs: "48px", md: "48px" },
                        flex: { md: "1 1 0" },
                        minWidth: { md: 0 }
                      },
                      target: action.target ?? externalProps.target,
                      rel: action.rel ?? externalProps.rel,
                      children: action.label
                    }, action.href, false, undefined, this);
                  })
                }, undefined, false, undefined, this),
                secondaryActions.filter((action) => action.category === "about").length > 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  direction: { xs: "column", md: "row" },
                  spacing: { xs: 1.5, md: 1.5 },
                  justifyContent: "center",
                  alignItems: "stretch",
                  sx: { width: "100%" },
                  children: secondaryActions.filter((action) => action.category === "about").map((action) => {
                    const externalProps = getExternalLinkProps(action.href);
                    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                      component: "a",
                      href: action.href,
                      startIcon: action.icon,
                      variant: action.variant ?? "outlined",
                      color: action.color ?? "primary",
                      size: "large",
                      fullWidth: { xs: true, md: false },
                      sx: {
                        minHeight: { xs: "48px", md: "48px" },
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
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var LetsTalkSection_default = LetsTalkSection;

// src/features/home/components/ContactSection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var ContactSection = ({ socialLinks }) => {
  const contactActions = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/msadri/",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(LinkedIn_default, {}, undefined, false, undefined, this),
      category: "contact"
    },
    {
      label: "Direct message",
      href: "https://t.me/masihsadri",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Telegram_default, {}, undefined, false, undefined, this),
      category: "contact"
    },
    {
      label: "Set an appointment",
      href: "/contact#mentorship",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(EventAvailable_default, {}, undefined, false, undefined, this),
      category: "contact"
    }
  ];
  const aboutActions = [
    {
      label: "View Resume",
      href: "/resume",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ArticleRounded_default, {}, undefined, false, undefined, this),
      category: "about"
    },
    {
      label: "My Story",
      href: "/my-story",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(PersonRounded_default, {}, undefined, false, undefined, this),
      category: "about"
    }
  ];
  const secondaryActions = [...contactActions, ...aboutActions];
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(LetsTalkSection_default, {
    id: "contact",
    primaryAction: {
      label: "sadrimasih@gmail.com",
      href: "mailto:sadrimasih@gmail.com",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(EmailRounded_default, {}, undefined, false, undefined, this)
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
                spacing: { xs: 1.4, sm: 1.8 },
                direction: { xs: "column", sm: "row" },
                sx: { pt: { xs: 0.5, md: 0.75 } },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(PrimaryButton_default, {
                    endIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                    size: "large",
                    sx: { minWidth: { sm: 220 } },
                    onClick: handlePrimaryCtaClick,
                    children: hero.ctaPrimary.label
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(GhostButton_default, {
                    onClick: handleSecondaryCtaClick,
                    size: "large",
                    sx: {
                      borderRadius: 999,
                      px: 3,
                      borderWidth: 1.5
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

// node_modules/@mui/icons-material/esm/ArrowBackIosRounded.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowBackIosRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime6.jsx("path", {
  d: "M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
}), "ArrowBackIosRounded");

// node_modules/@mui/icons-material/esm/ArrowForwardIosRounded.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowForwardIosRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime7.jsx("path", {
  d: "M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"
}), "ArrowForwardIosRounded");

// src/features/home/components/DifferentiatorsCarousel.tsx
var import_react2 = __toESM(require_react(), 1);
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var DifferentiatorsCarousel = ({ items }) => {
  const theme = useTheme();
  const scrollContainerRef = import_react2.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = import_react2.useState(false);
  const [canScrollRight, setCanScrollRight] = import_react2.useState(true);
  const checkScrollability = import_react2.useCallback(() => {
    if (!scrollContainerRef.current)
      return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);
  const scroll = import_react2.useCallback((direction) => {
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
  const handleScroll = import_react2.useCallback(() => {
    checkScrollability();
  }, [checkScrollability]);
  import_react2.useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [checkScrollability]);
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
    sx: { position: "relative", width: "100%" },
    children: [
      canScrollLeft && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(IconButton_default, {
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
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 }
        },
        "aria-label": "Scroll left",
        children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ArrowBackIosRounded_default, {
          fontSize: "small"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      canScrollRight && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(IconButton_default, {
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
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 }
        },
        "aria-label": "Scroll right",
        children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ArrowForwardIosRounded_default, {
          fontSize: "small"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
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
          WebkitOverflowScrolling: "touch"
        },
        children: items.map((item, index) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
          sx: {
            flexShrink: 0,
            width: { xs: 260, sm: 300, md: 340 },
            scrollSnapAlign: "start"
          },
          children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Card_default, {
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
            children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(CardContent_default, {
              sx: { p: { xs: 2, md: 2.5 }, height: "100%", display: "flex", flexDirection: "column" },
              children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
                spacing: 1.5,
                sx: { height: "100%" },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                    variant: "h6",
                    fontWeight: 600,
                    sx: { fontSize: { xs: "1rem", md: "1.125rem" } },
                    children: item.title
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
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
var jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
var WhyHireMeSection = ({ content }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
    component: "section",
    sx: { pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
        spacing: 6,
        children: [
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
            spacing: 3,
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
                spacing: 1.5,
                alignItems: "center",
                textAlign: "center",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                    variant: "h2",
                    children: content.whatIBring.title
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                    variant: "h6",
                    color: "text.secondary",
                    children: "Key differentiators that set me apart"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(DifferentiatorsCarousel_default, {
                items: content.whatIBring.differentiators
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
            sx: {
              py: 4,
              px: { xs: 2, md: 4 },
              borderRadius: (theme2) => theme2.tokens.radius.lg,
              background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(31, 111, 235, 0.08) 0%, rgba(145, 167, 255, 0.08) 100%)" : "linear-gradient(135deg, rgba(48, 86, 176, 0.15) 0%, rgba(73, 109, 193, 0.15) 100%)",
              border: (theme2) => `1px solid ${theme2.tokens.colors.border}`
            },
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Grid_default, {
              container: true,
              spacing: 3,
              children: content.quickStats.map((stat, index) => /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Grid_default, {
                size: { xs: 6, md: 3 },
                children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
                  spacing: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                      variant: "h3",
                      fontWeight: 700,
                      sx: {
                        color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.95)"
                      },
                      children: stat.value
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
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
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
            sx: {
              py: 4,
              px: { xs: 3, md: 5 },
              borderRadius: (theme2) => theme2.tokens.radius.lg,
              backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.06)" : "rgba(48, 86, 176, 0.12)",
              border: (theme2) => `1px solid ${theme2.tokens.colors.border}`
            },
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
              spacing: 3,
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
                  spacing: 2,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                      variant: "h4",
                      fontWeight: 600,
                      children: content.whatImLookingFor.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      lineHeight: 1.8,
                      children: content.whatImLookingFor.description
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                content.whatImLookingFor.action && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
                  children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(PrimaryButton_default, {
                    component: Link,
                    to: content.whatImLookingFor.action.href,
                    endIcon: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
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
    label: "Set an appointment",
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

// src/features/home/hooks/useCaseStudyRecap.ts
var import_react3 = __toESM(require_react(), 1);
var useCaseStudyRecap = (caseStudies2) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = import_react3.useState(null);
  const activeCaseStudy = import_react3.useMemo(() => caseStudies2.find((item) => item.id === selectedCaseStudyId) ?? null, [caseStudies2, selectedCaseStudyId]);
  const openRecap = import_react3.useCallback((id) => {
    setSelectedCaseStudyId(id);
  }, []);
  const closeRecap = import_react3.useCallback(() => {
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
    image: hero.portrait.src,
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
      url: hero.portrait.src,
      alt: hero.portrait.alt,
      width: 1200,
      height: 1200
    }
  },
  structuredData: homeStructuredData
};

// src/features/home/HomePage.tsx
var jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var HomePage = () => {
  const { activeCaseStudy, closeRecap, openRecap } = useCaseStudyRecap_default(caseStudies);
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(jsx_dev_runtime11.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Seo_default, {
        ...homePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(HeroSection_default, {
        hero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(WhyHireMeSection_default, {
        content: whyHireMe
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(MetricsSection_default, {
        metrics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(CaseStudiesSection_default, {
        caseStudies,
        onOpenRecap: openRecap
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ContactSection_default, {
        socialLinks
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(CaseStudyRecapDialog_default, {
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

//# debugId=8770034CB797F82F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQXJ0aWNsZVJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0V2ZW50QXZhaWxhYmxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9QZXJzb25Sb3VuZGVkLmpzIiwgIi4uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvSW1wYWN0U3RhdENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvTWV0cmljc1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BcnJvd0JhY2tJb3NSb3VuZGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BcnJvd0ZvcndhcmRJb3NSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvV2h5SGlyZU1lU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2hvb2tzL3VzZUNhc2VTdHVkeVJlY2FwLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL3Nlby50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9Ib21lUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJtMTAuOCAxNS45IDQuNjctMy41Yy4yNy0uMi4yNy0uNiAwLS44TDEwLjggOC4xYy0uMzMtLjI1LS44LS4wMS0uOC40djdjMCAuNDEuNDcuNjUuOC40TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJtMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhcIlxufSksICdQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlDYXJkUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgb25PcGVuUmVjYXA/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlDYXJkID0gKHsgY2FzZVN0dWR5LCBhY3RpdmUgPSBmYWxzZSwgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWR5Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBwYWxldHRlLCB0b2tlbnMgfSA9IHRoZW1lO1xuICBjb25zdCBpc0RhcmsgPSBwYWxldHRlLm1vZGUgPT09IFwiZGFya1wiO1xuXG4gIGNvbnN0IGFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMCwgNDUsIDExMCwgMC45OCksIHJnYmEoNTgsIDExOCwgMjI2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE3LCA3NiwgMTcwLCAwLjg4KSwgcmdiYSg2MCwgMTUxLCAyNTUsIDAuODIpKVwiO1xuXG4gIGNvbnN0IGluYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIwLCAyOCwgNTIsIDAuODIpLCByZ2JhKDEyLCAxOCwgMzYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQ4LCAyNTEsIDI1NSwgMC45NCksIHJnYmEoMjMyLCAyNDIsIDI1NSwgMC44OCkpXCI7XG5cbiAgY29uc3QgaGVhZGluZ0NvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMjYsIDIzNCwgMjU1LCAwLjk1KVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5wcmltYXJ5O1xuXG4gIGNvbnN0IGJvZHlDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjEwLCAyMjAsIDI1NSwgMC44MilcIlxuICAgICAgOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5O1xuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjI4KVwiXG4gICAgICA6IFwicmdiYSgxNywgNzYsIDE3MCwgMC4xMilcIjtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBhY3RpdmUgPyBhY3RpdmVCYWNrZ3JvdW5kIDogaW5hY3RpdmVCYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtib3JkZXJDb2xvcn1gLFxuICAgICAgICBjb2xvcjogYWN0aXZlID8gcGFsZXR0ZS5jb21tb24ud2hpdGUgOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgYm94U2hhZG93OiBhY3RpdmUgPyB0b2tlbnMuc2hhZG93LmxldmVsMyA6IHRva2Vucy5zaGFkb3cubGV2ZWwyLFxuICAgICAgICB0cmFuc2l0aW9uOiB0b2tlbnMudHJhbnNpdGlvbi5ob3ZlcixcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNnB4KVwiLFxuICAgICAgICAgIGJveFNoYWRvdzogdG9rZW5zLnNoYWRvdy5sZXZlbDMsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGI6IDMgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZXllYnJvd1wiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OClcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTg5LCAyMDQsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYXNlIHtjYXNlU3R1ZHkubnVtYmVyfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgbGFiZWw9e2Nhc2VTdHVkeS50YWd9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjI0KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyNywgMjQxLCAyNTUsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjE0LCAyMjQsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogYWN0aXZlID8gXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoM1wiIHN4PXt7IGNvbG9yOiBoZWFkaW5nQ29sb3IgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUyXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybX1cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWwgJiYgKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBtbDogMC43NSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICh7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsfSlcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdCAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBjb2xvcjogYm9keUNvbG9yIH19PlxuICAgICAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwLCBnYXA6IDEgfX0+XG4gICAgICAgIHthY3RpdmUgPyAoXG4gICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBjb2xvcj17YWN0aXZlID8gXCJpbmhlcml0XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZWNhcH1cbiAgICAgICAgICBlbmRJY29uPXs8UGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KVwiXG4gICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNClcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlY2FwXG4gICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDYXNlU3R1ZHlDYXJkIGZyb20gXCIuL0Nhc2VTdHVkeUNhcmRcIjtcblxudHlwZSBDYXNlU3R1ZGllc1NlY3Rpb25Qcm9wcyA9IHtcbiAgY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT47XG4gIG9uT3BlblJlY2FwOiAoaWQ6IENhc2VTdHVkeUlkKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ2FzZVN0dWRpZXNTZWN0aW9uID0gKHsgY2FzZVN0dWRpZXMsIG9uT3BlblJlY2FwIH06IENhc2VTdHVkaWVzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIEV4YW1wbGVzIG9mIHRoZSBpbXBhY3QgSSBoYXZlIG1hZGVcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPENhc2VTdHVkeUNhcmRcbiAgICAgICAgICAgICAgY2FzZVN0dWR5PXtpdGVtfVxuICAgICAgICAgICAgICBhY3RpdmU9e2l0ZW0uaWQgPT09IFwiZGl2YXJcIn1cbiAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IG9uT3BlblJlY2FwKGl0ZW0uaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkaWVzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nVGl0bGUsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlSZWNhcERpYWxvZyA9ICh7IGNhc2VTdHVkeSwgb25DbG9zZSB9OiBDYXNlU3R1ZHlSZWNhcERpYWxvZ1Byb3BzKSA9PiAoXG4gIDxEaWFsb2dcbiAgICBvcGVuPXtCb29sZWFuKGNhc2VTdHVkeSl9XG4gICAgb25DbG9zZT17b25DbG9zZX1cbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCJcbiAgPlxuICAgIHtjYXNlU3R1ZHkgPyAoXG4gICAgICA8PlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCI+e2Nhc2VTdHVkeS5yZWNhcC5oZWFkbGluZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5yZWNhcC5idWxsZXRzLm1hcCgoYnVsbGV0KSA9PiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtidWxsZXR9IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7YnVsbGV0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBtdD17M30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlZXAgZGl2ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvPlxuICAgICkgOiBudWxsfVxuICA8L0RpYWxvZz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVJlY2FwRGlhbG9nO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0ybS02IDE0SDhjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTFoNWMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMW0zLTRIOGMtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMWg4Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxbTAtNEg4Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xaDhjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDFcIlxufSksICdBcnRpY2xlUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2LjUzIDExLjA2IDE1LjQ3IDEwbC00Ljg4IDQuODgtMi4xMi0yLjEyLTEuMDYgMS4wNkwxMC41OSAxN3pNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJtMCAxNkg1VjhoMTR6XCJcbn0pLCAnRXZlbnRBdmFpbGFibGUnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDRtMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYxYzAgLjU1LjQ1IDEgMSAxaDE0Yy41NSAwIDEtLjQ1IDEtMXYtMWMwLTIuNjYtNS4zMy00LTgtNFwiXG59KSwgJ1BlcnNvblJvdW5kZWQnKTsiLAogICAgImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcblxudHlwZSBDb250YWN0QWN0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdE5vZGU7XG4gIHZhcmlhbnQ/OiBCdXR0b25Qcm9wc1tcInZhcmlhbnRcIl07XG4gIGNvbG9yPzogQnV0dG9uUHJvcHNbXCJjb2xvclwiXTtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICByZWw/OiBzdHJpbmc7XG4gIGNhdGVnb3J5PzogXCJjb250YWN0XCIgfCBcImFib3V0XCI7XG59O1xuXG50eXBlIExldHNUYWxrU2VjdGlvblByb3BzID0ge1xuICBpZD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmltYXJ5QWN0aW9uOiBDb250YWN0QWN0aW9uO1xuICBzZWNvbmRhcnlBY3Rpb25zPzogUmVhZG9ubHlBcnJheTxDb250YWN0QWN0aW9uPjtcbn07XG5cbmNvbnN0IGdldEV4dGVybmFsTGlua1Byb3BzID0gKGhyZWY6IHN0cmluZykgPT4ge1xuICBpZiAoaHJlZi5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgIH0gYXMgY29uc3Q7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgIHJlbDogdW5kZWZpbmVkLFxuICB9IGFzIGNvbnN0O1xufTtcblxuY29uc3QgTGV0c1RhbGtTZWN0aW9uID0gKHtcbiAgaWQsXG4gIHRpdGxlID0gXCJMZXQncyBUYWxrIGFuZCBXb3JrIFRvZ2V0aGVyXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJJJ20gYWx3YXlzIG9wZW4gdG8gZGlzY3Vzc2luZyBuZXcgcHJvamVjdHMsIGNyZWF0aXZlIGlkZWFzLCBvciBvcHBvcnR1bml0aWVzIHRvIGJlIHBhcnQgb2YgeW91ciB2aXNpb24uXCIsXG4gIHByaW1hcnlBY3Rpb24sXG4gIHNlY29uZGFyeUFjdGlvbnMgPSBbXSxcbn06IExldHNUYWxrU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIGlkPXtpZH0gc3g9e3sgcHk6IHsgeHM6IDQsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkXG4gICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogXCIxNnB4XCIsIG1kOiBcIjI0cHhcIiB9LFxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiA1IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA1IH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBwYjogMCwgcHg6IHsgeHM6IDAsIG1kOiAwIH0gfX0+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEsIG1kOiAxLjUgfX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCIgXG4gICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiB7IHhzOiBcIjEuNXJlbVwiLCBtZDogXCIycmVtXCIgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiIFxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMC44NzVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBwdDogeyB4czogMi41LCBtZDogNCB9LCBweDogMCwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiB7IHhzOiAyLCBtZDogMi41IH0gfX0+XG4gICAgICAgICAgey8qIFByaW1hcnkgQWN0aW9uIC0gRnVsbCBXaWR0aCAqL31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgIGhyZWY9e3ByaW1hcnlBY3Rpb24uaHJlZn1cbiAgICAgICAgICAgIHN0YXJ0SWNvbj17cHJpbWFyeUFjdGlvbi5pY29ufVxuICAgICAgICAgICAgdmFyaWFudD17cHJpbWFyeUFjdGlvbi52YXJpYW50ID8/IFwiY29udGFpbmVkXCJ9XG4gICAgICAgICAgICBjb2xvcj17cHJpbWFyeUFjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICBzeD17eyBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI1NnB4XCIgfSB9fVxuICAgICAgICAgICAgdGFyZ2V0PXtwcmltYXJ5QWN0aW9uLnRhcmdldCA/PyBnZXRFeHRlcm5hbExpbmtQcm9wcyhwcmltYXJ5QWN0aW9uLmhyZWYpLnRhcmdldH1cbiAgICAgICAgICAgIHJlbD17cHJpbWFyeUFjdGlvbi5yZWwgPz8gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMocHJpbWFyeUFjdGlvbi5ocmVmKS5yZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnlBY3Rpb24ubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIFNlY29uZGFyeSBBY3Rpb25zIC0gR3JvdXBlZCBieSBDYXRlZ29yeSAqL31cbiAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgIHsvKiBHZXQgaW4gVG91Y2ggQWN0aW9ucyAqL31cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEuNSB9fVxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5maWx0ZXIoYWN0aW9uID0+IGFjdGlvbi5jYXRlZ29yeSA9PT0gXCJjb250YWN0XCIpLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbFByb3BzID0gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMoYWN0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXthY3Rpb24uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXthY3Rpb24udmFyaWFudCA/PyBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2FjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17eyB4czogdHJ1ZSwgbWQ6IGZhbHNlIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI0OHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IHsgbWQ6IFwiMSAxIDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17YWN0aW9uLnRhcmdldCA/PyBleHRlcm5hbFByb3BzLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgICByZWw9e2FjdGlvbi5yZWwgPz8gZXh0ZXJuYWxQcm9wcy5yZWx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogS25vdyBNb3JlIEFib3V0IE1lIEFjdGlvbnMgKi99XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlBY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLmNhdGVnb3J5ID09PSBcImFib3V0XCIpLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS41LCBtZDogMS41IH19XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5maWx0ZXIoYWN0aW9uID0+IGFjdGlvbi5jYXRlZ29yeSA9PT0gXCJhYm91dFwiKS5tYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbFByb3BzID0gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMoYWN0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2FjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXthY3Rpb24uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2FjdGlvbi52YXJpYW50ID8/IFwib3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXthY3Rpb24uY29sb3IgPz8gXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt7IHhzOiB0cnVlLCBtZDogZmFsc2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI0OHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIxIDEgMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB7IG1kOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXthY3Rpb24udGFyZ2V0ID8/IGV4dGVybmFsUHJvcHMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPXthY3Rpb24ucmVsID8/IGV4dGVybmFsUHJvcHMucmVsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCB0eXBlIHsgQ29udGFjdEFjdGlvbiwgTGV0c1RhbGtTZWN0aW9uUHJvcHMgfTtcbmV4cG9ydCBkZWZhdWx0IExldHNUYWxrU2VjdGlvbjtcblxuIiwKICAgICJpbXBvcnQgQXJ0aWNsZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FydGljbGVSb3VuZGVkXCI7XG5pbXBvcnQgRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFJvdW5kZWRcIjtcbmltcG9ydCBFdmVudEF2YWlsYWJsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRXZlbnRBdmFpbGFibGVcIjtcbmltcG9ydCBQZXJzb25Sb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QZXJzb25Sb3VuZGVkXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1RlbGVncmFtXCI7XG5pbXBvcnQgTGV0c1RhbGtTZWN0aW9uIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgU29jaWFsTGluayB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENvbnRhY3RTZWN0aW9uUHJvcHMgPSB7XG4gIHNvY2lhbExpbmtzOiBSZWFkb25seUFycmF5PFNvY2lhbExpbms+O1xufTtcblxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSAoeyBzb2NpYWxMaW5rcyB9OiBDb250YWN0U2VjdGlvblByb3BzKSA9PiB7XG4gIC8vIEdldCBpbiBUb3VjaCBBY3Rpb25zICgzIGFjdGlvbnMpXG4gIGNvbnN0IGNvbnRhY3RBY3Rpb25zOiBDb250YWN0QWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiTGlua2VkSW5cIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgICAgIGljb246IDxMaW5rZWRJbkljb24gLz4sXG4gICAgICBjYXRlZ29yeTogXCJjb250YWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJEaXJlY3QgbWVzc2FnZVwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICAgICAgaWNvbjogPFRlbGVncmFtSWNvbiAvPixcbiAgICAgIGNhdGVnb3J5OiBcImNvbnRhY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlNldCBhbiBhcHBvaW50bWVudFwiLFxuICAgICAgaHJlZjogXCIvY29udGFjdCNtZW50b3JzaGlwXCIsXG4gICAgICBpY29uOiA8RXZlbnRBdmFpbGFibGVJY29uIC8+LFxuICAgICAgY2F0ZWdvcnk6IFwiY29udGFjdFwiLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gS25vdyBNb3JlIEFib3V0IE1lIEFjdGlvbnMgKDIgYWN0aW9ucylcbiAgY29uc3QgYWJvdXRBY3Rpb25zOiBDb250YWN0QWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiVmlldyBSZXN1bWVcIixcbiAgICAgIGhyZWY6IFwiL3Jlc3VtZVwiLFxuICAgICAgaWNvbjogPEFydGljbGVSb3VuZGVkSWNvbiAvPixcbiAgICAgIGNhdGVnb3J5OiBcImFib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJNeSBTdG9yeVwiLFxuICAgICAgaHJlZjogXCIvbXktc3RvcnlcIixcbiAgICAgIGljb246IDxQZXJzb25Sb3VuZGVkSWNvbiAvPixcbiAgICAgIGNhdGVnb3J5OiBcImFib3V0XCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBzZWNvbmRhcnlBY3Rpb25zOiBDb250YWN0QWN0aW9uW10gPSBbLi4uY29udGFjdEFjdGlvbnMsIC4uLmFib3V0QWN0aW9uc107XG5cbiAgcmV0dXJuIChcbiAgICA8TGV0c1RhbGtTZWN0aW9uXG4gICAgICBpZD1cImNvbnRhY3RcIlxuICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICBsYWJlbDogXCJzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICAgICAgICBocmVmOiBcIm1haWx0bzpzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICAgICAgICBpY29uOiA8RW1haWxSb3VuZGVkSWNvbiAvPixcbiAgICAgIH19XG4gICAgICBzZWNvbmRhcnlBY3Rpb25zPXtzZWNvbmRhcnlBY3Rpb25zfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0U2VjdGlvbjtcbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7IEF2YXRhciwgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBIZXJvQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgY2VydGlmaWVkQmFkZ2VTcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9iYWRnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ1wiO1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsVG9FbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Ntb290aFNjcm9sbFwiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IEhlcm9Db250ZW50O1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVQcmltYXJ5Q3RhQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBoZXJvLmN0YVByaW1hcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVByaW1hcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhUHJpbWFyeS5zY3JvbGxUb0lkLCBoZXJvLmN0YVByaW1hcnkudG9dKTtcblxuICBjb25zdCBoYW5kbGVTZWNvbmRhcnlDdGFDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQgPz8gaGVyby5jdGFTZWNvbmRhcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhU2Vjb25kYXJ5LnRvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTglIDE1JSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTgpLCB0cmFuc3BhcmVudCA2MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc4JSAxOCUsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTgpLCB0cmFuc3BhcmVudCA1NSUpXCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogNCwgbWQ6IDMuNSB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJzdHJldGNoXCIgfSxcbiAgICAgICAgICAgIHB4OiB7IHhzOiAwLCBtZDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDMyMCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2hlcm8ucG9ydHJhaXQuYWx0fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMThweCA0MHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtjZXJ0aWZpZWRCYWRnZVNyY31cbiAgICAgICAgICAgICAgICBhbHQ9XCJDZXJ0aWZpZWQgYmFkZ2VcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogeyB4czogLTE4LCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAtMTgsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAxMjAsIG1kOiAxNTAgfSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17eyB4czogMi4yNSwgbWQ6IDIuNzUgfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS40LCBtZDogMS44IH19IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEsIHNtOiAxLjUgfX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcImNlbnRlclwiLCBzbTogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjMsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImRpc3BsYXlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjA1LFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMTVlbVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5uYW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7IHhzOiBcIjAuMDFlbVwiLCBtZDogXCIwLjAwNWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjg1JVwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjEycmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNjUsIG1kOiAxLjcgfSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuc3BsaXQoXCIgfCBcIilbMF19XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuaW5jbHVkZXMoXCIgfCBcIikgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuOTVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNiwgbWQ6IDEuNjUgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5zcGxpdChcIiB8IFwiKS5zbGljZSgxKS5qb2luKFwiIHwgXCIpfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgey8qIEtleSBWYWx1ZSBQaWxscyAqL31cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHB0OiAwLjUsXG4gICAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIjQwKyBNaWxsaW9uIFVzZXJzXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkIyQiAmIEIyQ1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhLURyaXZlblwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBSS1GYW1pbGlhclwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWNobmljYWwgJiBNYW5hZ2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNCwgc206IDEuOCB9fVxuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHN4PXt7IHB0OiB7IHhzOiAwLjUsIG1kOiAwLjc1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17eyBtaW5XaWR0aDogeyBzbTogMjIwIH0gfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmltYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFQcmltYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlY29uZGFyeUN0YUNsaWNrfVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFTZWNvbmRhcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IE1ldHJpY1N1bW1hcnk7XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wYWN0U3RhdENhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0cmljU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEltcGFjdFN0YXRDYXJkIGZyb20gXCIuL0ltcGFjdFN0YXRDYXJkXCI7XG5cbnR5cGUgTWV0cmljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5Pjtcbn07XG5cbmNvbnN0IE1ldHJpY3NTZWN0aW9uID0gKHsgbWV0cmljcyB9OiBNZXRyaWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9LCBwdDogeyBtZDogNiB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5SZWNlbnQgSW1wYWN0IEkgSGF2ZSBNYWRlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIE1lYXN1cmFibGUgb3V0Y29tZXMgZnJvbSBteSBkZXNpZ24gd29ya1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAge21ldHJpY3MubWFwKCh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA2LCBtZDogMyB9fSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNjIgMi45OWMtLjQ5LS40OS0xLjI4LS40OS0xLjc3IDBMNi41NCAxMS4zYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDguMzEgOC4zMWMuNDkuNDkgMS4yOC40OSAxLjc3IDBzLjQ5LTEuMjggMC0xLjc3TDkuMzggMTJsNy4yNS03LjI1Yy40OC0uNDguNDgtMS4yOC0uMDEtMS43NlwiXG59KSwgJ0Fycm93QmFja0lvc1JvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03LjM4IDIxLjAxYy40OS40OSAxLjI4LjQ5IDEuNzcgMGw4LjMxLTguMzFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MUw5LjE1IDIuOThjLS40OS0uNDktMS4yOC0uNDktMS43NyAwcy0uNDkgMS4yOCAwIDEuNzdMMTQuNjIgMTJsLTcuMjUgNy4yNWMtLjQ4LjQ4LS40OCAxLjI4LjAxIDEuNzZcIlxufSksICdBcnJvd0ZvcndhcmRJb3NSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQXJyb3dCYWNrSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrSW9zUm91bmRlZFwiO1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1JvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIEljb25CdXR0b24sXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBEaWZmZXJlbnRpYXRvciA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWxQcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8RGlmZmVyZW50aWF0b3I+O1xufTtcblxuY29uc3QgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwgPSAoeyBpdGVtcyB9OiBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2NhblNjcm9sbExlZnQsIHNldENhblNjcm9sbExlZnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2FuU2Nyb2xsUmlnaHQsIHNldENhblNjcm9sbFJpZ2h0XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNoZWNrU2Nyb2xsYWJpbGl0eSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBjb25zdCB7IHNjcm9sbExlZnQsIHNjcm9sbFdpZHRoLCBjbGllbnRXaWR0aCB9ID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgc2V0Q2FuU2Nyb2xsTGVmdChzY3JvbGxMZWZ0ID4gMCk7XG4gICAgc2V0Q2FuU2Nyb2xsUmlnaHQoc2Nyb2xsTGVmdCA8IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSAxMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGwgPSB1c2VDYWxsYmFjayhcbiAgICAoZGlyZWN0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xuICAgICAgaWYgKCFzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjYXJkV2lkdGggPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpPy5jbGllbnRXaWR0aCA/PyAzMjA7XG4gICAgICBjb25zdCBzY3JvbGxBbW91bnQgPSBjYXJkV2lkdGggKyAyNDsgLy8gY2FyZCB3aWR0aCArIGdhcFxuXG4gICAgICBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxCeSh7XG4gICAgICAgIGxlZnQ6IGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyAtc2Nyb2xsQW1vdW50IDogc2Nyb2xsQW1vdW50LFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayBzY3JvbGxhYmlsaXR5IGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgIHNldFRpbWVvdXQoY2hlY2tTY3JvbGxhYmlsaXR5LCAzMDApO1xuICAgIH0sXG4gICAgW2NoZWNrU2Nyb2xsYWJpbGl0eV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNoZWNrU2Nyb2xsYWJpbGl0eSgpO1xuICB9LCBbY2hlY2tTY3JvbGxhYmlsaXR5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Njcm9sbGFiaWxpdHkoKTtcbiAgICAvLyBBbHNvIGNoZWNrIG9uIHdpbmRvdyByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja1Njcm9sbGFiaWxpdHkpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja1Njcm9sbGFiaWxpdHkpO1xuICB9LCBbY2hlY2tTY3JvbGxhYmlsaXR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uIEJ1dHRvbnMgKi99XG4gICAgICB7Y2FuU2Nyb2xsTGVmdCAmJiAoXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsKFwibGVmdFwiKX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIGxlZnQ6IHsgeHM6IC0xMiwgbWQ6IC0xNiB9LFxuICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgNHB4IDEycHggcmdiYSgxNywgMzYsIDgzLCAwLjEpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0MCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgbGVmdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHtjYW5TY3JvbGxSaWdodCAmJiAoXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsKFwicmlnaHRcIil9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICByaWdodDogeyB4czogLTEyLCBtZDogLTE2IH0sXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICAgIGhlaWdodDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNjcm9sbCByaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBTY3JvbGxhYmxlIENvbnRhaW5lciAqL31cbiAgICAgIDxCb3hcbiAgICAgICAgcmVmPXtzY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZ2FwOiAzLFxuICAgICAgICAgIG92ZXJmbG93WDogXCJhdXRvXCIsXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcImhpZGRlblwiLFxuICAgICAgICAgIHNjcm9sbFNuYXBUeXBlOiBcInggbWFuZGF0b3J5XCIsXG4gICAgICAgICAgc2Nyb2xsQmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLCAvLyBGaXJlZm94XG4gICAgICAgICAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIiwgLy8gSUUvRWRnZVxuICAgICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsIC8vIENocm9tZS9TYWZhcmlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB4OiB7IHhzOiAxLCBtZDogMiB9LFxuICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGJ1dCBhbGxvdyBzY3JvbGxpbmdcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogMjYwLCBzbTogMzAwLCBtZDogMzQwIH0sXG4gICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAyMDAsIG1kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE4LCAxOCwgMTgsIDAuNilcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2VcIixcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTRweClcIixcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDhweCAyNHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBwOiB7IHhzOiAyLCBtZDogMi41IH0sIGhlaWdodDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBmb250V2VpZ2h0PXs2MDB9IHN4PXt7IGZvbnRTaXplOiB7IHhzOiBcIjFyZW1cIiwgbWQ6IFwiMS4xMjVyZW1cIiB9IH19PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBsaW5lSGVpZ2h0PXsxLjZ9IHN4PXt7IGZsZXhHcm93OiAxLCBmb250U2l6ZTogeyB4czogXCIwLjg3NXJlbVwiLCBtZDogXCIwLjkzNzVyZW1cIiB9IH19PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWw7XG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbCBmcm9tIFwiLi9EaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFwiO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgV2h5SGlyZU1lQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFdoeUhpcmVNZVNlY3Rpb25Qcm9wcyA9IHtcbiAgY29udGVudDogV2h5SGlyZU1lQ29udGVudDtcbn07XG5cbmNvbnN0IFdoeUhpcmVNZVNlY3Rpb24gPSAoeyBjb250ZW50IH06IFdoeUhpcmVNZVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBwdDogeyB4czogNCwgbWQ6IDYgfSwgcGI6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIHsvKiBXaGF0IEkgQnJpbmcgU2VjdGlvbiAqL31cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPntjb250ZW50LndoYXRJQnJpbmcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgS2V5IGRpZmZlcmVudGlhdG9ycyB0aGF0IHNldCBtZSBhcGFydFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPERpZmZlcmVudGlhdG9yc0Nhcm91c2VsIGl0ZW1zPXtjb250ZW50LndoYXRJQnJpbmcuZGlmZmVyZW50aWF0b3JzfSAvPlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICB7LyogUXVpY2sgU3RhdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweTogNCxcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiA0IH0sXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMSwgMTExLCAyMzUsIDAuMDgpIDAlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMDgpIDEwMCUpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE1KSAwJSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTUpIDEwMCUpXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICB7Y29udGVudC5xdWlja1N0YXRzLm1hcCgoc3RhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiA2LCBtZDogMyB9fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7LyogV2hhdCBJJ20gTG9va2luZyBGb3IgU2VjdGlvbiAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweTogNCxcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA1IH0sXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4wNilcIlxuICAgICAgICAgICAgICAgICAgOiBcInJnYmEoNDgsIDg2LCAxNzYsIDAuMTIpXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBsaW5lSGVpZ2h0PXsxLjh9PlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICB0bz17Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmFjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBzbTogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2h5SGlyZU1lU2VjdGlvbjtcblxuIiwKICAgICJpbXBvcnQgaGVyb1BvcnRyYWl0QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1zYWRyaS1wcm9maWxlLndlYnBcIjtcbmltcG9ydCBtb3JwaERlc2lnblN5c3RlbUFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbW9ycGgtZGVzaWduLXN5c3RlbS53ZWJwXCI7XG5pbXBvcnQgcmFobmVtYVN0dWRlbnRzQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9yYWhuZW1hLXN0dWRlbnRzLndlYnBcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Fzc2V0c1wiO1xuaW1wb3J0IHR5cGUge1xuICBDYXNlU3R1ZHlTdW1tYXJ5LFxuICBFeHBlcmllbmNlU3VtbWFyeSxcbiAgSGVyb0NvbnRlbnQsXG4gIE1ldHJpY1N1bW1hcnksXG4gIFNvY2lhbExpbmssXG4gIFdoeUhpcmVNZUNvbnRlbnQsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgaGVybzogSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBcIkhlbGxvIPCfkYvwn4+8LCBJIGFtXCIsXG4gIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgdGl0bGU6IFwiYW4gaW1wYWN0LW9yaWVudGVkIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiRm9ybWVyIGlPUyBkZXZlbG9wZXIgdHVybmVkIGRlc2lnbmVyLCBidWlsZGluZyBkYXRhLWRyaXZlbiBleHBlcmllbmNlcyB0aGF0IGRyaXZlIHVzZXIgcmV0ZW50aW9uIGFuZCBidXNpbmVzcyBncm93dGggZm9yIDQwKyBtaWxsaW9uIHVzZXJzIGFjcm9zcyBCMkIgYW5kIEIyQyBwcm9kdWN0c1wiLFxuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyBjYXNlIHN0dWR5XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjYXNlLXN0dWRpZXNcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjb250YWN0XCIsXG4gIH0sXG4gIHBvcnRyYWl0OiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgaGVyb1BvcnRyYWl0QXNzZXQsIFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsIHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG4gIH0pLFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3M6IFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB2YWx1ZTogXCI2MCVcIixcbiAgICB0aXRsZTogXCJSZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ28tbGVkIERpdmFy4oCZcyBzZWN1cmUgY2FsbCBzeXN0ZW0gd2l0aCBUcnVzdCAmIFNhZmV0eSB0byBzYWZlZ3VhcmQgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjguM0srXCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCB0ZWFtcyB1c2luZyBNb3JwaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBhbiBvcGVuIGRlc2lnbiBzeXN0ZW0gdGhhdCBwb3dlcnMgRmlnbWEgaGFuZG9mZnMgYW5kIGFjY2VsZXJhdGVzIGhpZ2gtcXVhbGl0eSByZWxlYXNlcy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICB0aXRsZTogXCJEZXNpZ25lcnMgbWVudG9yZWRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGVzaWduZWQgcHJvamVjdC1iYXNlZCBwcm9ncmFtcyBhdCBSYWhuZW1hIENvbGxlZ2UgdG8gaGVscCBlbWVyZ2luZyBkZXNpZ25lcnMgbGF1bmNoIGNhcmVlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4MCVcIixcbiAgICB0aXRsZTogXCJMaWZ0IGluIHF1YWxpZmllZCBsZWFkc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWRlc2lnbmVkIFBlcnNvbOKAmXMgc2lnbi11cCBmdW5uZWwgZW5kLXRvLWVuZCwgcmVtb3ZpbmcgZnJpY3Rpb24gYW5kIGJvb3N0aW5nIGxlYWQgZ2VuZXJhdGlvbiBpbiAzIG1vbnRocy5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PiA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyXCIsXG4gICAgbnVtYmVyOiBcIjAxXCIsXG4gICAgdGFnOiBcIkltcHJvdmluZyBVc2VyIFNhZmV0eVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTdG9yeSBvZiBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICAgIHBsYXRmb3JtOiBcIm9uIERpdmFyXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiQ2xhc3NpZmllZCBBZHMgUGxhdGZvcm1cIixcbiAgICBzdGF0OiBcIkEgZmVhdHVyZSB1c2VkIGJ5IDIuMSBtaWxsaW9uIHVzZXJzIHBlciB3ZWVrXCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwidHJ1c3QgJiBzYWZldHlcIiwgXCJpbXBhY3QgYXQgc2NhbGVcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgY3Jvc3MtZnVuY3Rpb25hbCBndWFyZHJhaWxzIGhlbHBlZCBEaXZhciByZWR1Y2UgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiQ28tbGVkIGEgdGFzayBmb3JjZSBicmlkZ2luZyBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIGFuZCBFbmdpbmVlcmluZy5cIixcbiAgICAgICAgXCJTaGlwcGVkIGR5bmFtaWMgdm9pY2UtbWFza2luZyB3aXRoIGFidXNlIGRldGVjdGlvbiBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgICAgICAgXCJTdG9vZCB1cCBwbGF5Ym9va3MgZm9yIG1vZGVyYXRpb24gb3BzIHRvIG1vbml0b3IgcmVwZWF0IG9mZmVuZGVycy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsXCIsXG4gICAgbnVtYmVyOiBcIjAyXCIsXG4gICAgdGFnOiBcIkJvb3N0aW5nIFVzZXIgRW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnNcIixcbiAgICBwbGF0Zm9ybTogXCJhdCBTZXRhcmUgQXZhbCBDby5cIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJSZXRlbnRpb24gc3RyYXRlZ3lcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJyZXRlbnRpb24gc3RyYXRlZ3lcIiwgXCJjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXBcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIG9uYm9hcmRpbmcgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJNYXBwZWQgYSBuZXcgbGlmZWN5Y2xlIG1vZGVsIHRpZWQgdG8gZGF0YS1iYWNrZWQgZXhwZXJpbWVudGF0aW9uLlwiLFxuICAgICAgICBcIlJlZmluZWQgYWN0aXZhdGlvbiBmbG93cyB0byBzcG90bGlnaHQgdmFsdWUgcHJvcHMgd2l0aGluIGZpcnN0IHNlc3Npb24uXCIsXG4gICAgICAgIFwiQ28tY3JlYXRlZCBhIGxlYXJuaW5nIGFnZW5kYSB0byBtZWFzdXJlIGxveWFsdHkgcHJvZ3JhbSB0cmFjdGlvbi5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlczogUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gSW5zdHJ1Y3RvciBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyAyMDArIHN0dWRlbnRzIHRocm91Z2ggNiBjb3Vyc2VzIHNpbmNlIDIwMjJcIixcbiAgICB0YWdzOiBbXCJlZHVjYXRpb25cIiwgXCJtZW50b3JzaGlwXCIsIFwiY3VycmljdWx1bSBkZXNpZ25cIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCByYWhuZW1hU3R1ZGVudHNBc3NldCwgXCJTdHVkZW50cyBhdCBSYWhuZW1hIENvbGxlZ2VcIiksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIG1vcnBoRGVzaWduU3lzdGVtQXNzZXQsXG4gICAgICBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICApLFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogUmVhZG9ubHlBcnJheTxTb2NpYWxMaW5rPiA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiR2l0SHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHdoeUhpcmVNZTogV2h5SGlyZU1lQ29udGVudCA9IHtcbiAgd2hhdElCcmluZzoge1xuICAgIHRpdGxlOiBcIldoYXQgSSBCcmluZ1wiLFxuICAgIGRpZmZlcmVudGlhdG9yczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBSS1GYW1pbGlhciAmIFRlY2huaWNhbFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJ1aWx0IHRoaXMgcG9ydGZvbGlvIGZyb20gc2NyYXRjaCB3aXRoIG1vZGVybiB0b29scy4gRm9ybWVyIGlPUyBkZXZlbG9wZXIgd2l0aCBkZWVwIHVuZGVyc3RhbmRpbmcgb2YgdGVjaG5pY2FsIGNvbnN0cmFpbnRzIGFuZCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRGF0YS1Ecml2ZW4gRGVjaXNpb24gTWFraW5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQ29tcGxldGVkIGEgMTcwLWhvdXIgZGF0YSBhbmFseXN0IGNvdXJzZS4gSSB1c2UgZGF0YSB0byB2YWxpZGF0ZSBkZXNpZ24gZGVjaXNpb25zIGFuZCBtZWFzdXJlIGltcGFjdCwgbm90IGp1c3QgaW50dWl0aW9uLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVXNlciBSZXRlbnRpb24gRXhwZXJ0aXNlIGF0IFNjYWxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUHJvdmVuIHRyYWNrIHJlY29yZCBvZiBpbXByb3ZpbmcgdXNlciByZXRlbnRpb24gYW5kIGVuZ2FnZW1lbnQgZm9yIDQwKyBtaWxsaW9uIHVuaXF1ZSB1c2Vycy4gQ28tbGVkIGNyb3NzLWZ1bmN0aW9uYWwgaW5pdGlhdGl2ZXMgdGhhdCBkcml2ZSBsb25nLXRlcm0gdXNlciB2YWx1ZSBhbmQgYnVzaW5lc3MgZ3Jvd3RoLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVGVhY2hpbmcgJiBNZW50b3JzaGlwIExlYWRlcnNoaXBcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCIzcmQgeWVhciB0ZWFjaGluZyBhdCBjb2xsZWdlLCBtZW50b3JlZCAyMDArIHN0dWRlbnRzLiBUaGlzIHRyYW5zbGF0ZXMgdG8gc3Ryb25nIGNvbW11bmljYXRpb24gc2tpbGxzLCBjdXJyaWN1bHVtIGRlc2lnbiwgYW5kIHRoZSBhYmlsaXR5IHRvIGVsZXZhdGUgdGVhbSBjYXBhYmlsaXRpZXMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDcm9zcy1Qcm9kdWN0IEV4cGVyaWVuY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeHBlcmllbmNlIGFjcm9zcyBib3RoIEIyQyBhbmQgQjJCIHByb2R1Y3RzLCB3aXRoIGEgYmFja2dyb3VuZCBpbiBwcm9qZWN0IG1hbmFnZW1lbnQuIEkgdW5kZXJzdGFuZCBidXNpbmVzcyBzdHJhdGVneSBhbmQgY2FuIG5hdmlnYXRlIGNvbXBsZXggc3Rha2Vob2xkZXIgbGFuZHNjYXBlcy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFkYXB0YWJsZSB0byBBbnkgVGVhbSBTdHJ1Y3R1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeHBlcmllbmNlZCBpbiBnZW5lcmFsaXplZCB0ZWFtcywgZW1iZWRkZWQgcHJvZHVjdCB0ZWFtcywgYW5kIHNvbG8gZGVzaWduIHJvbGVzIGFjcm9zcyBCMkIgYW5kIEIyQyBwcm9kdWN0cy4gSSBhZGFwdCBteSB3b3JrZmxvdyB0byBmaXQgYW55IG9yZ2FuaXphdGlvbmFsIG1vZGVsLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB3aGF0SW1Mb29raW5nRm9yOiB7XG4gICAgdGl0bGU6IFwiV2hhdCBJJ20gTG9va2luZyBGb3JcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSdtIHNlZWtpbmcgc2VuaW9yIHByb2R1Y3QgZGVzaWduIHJvbGVzIHdoZXJlIEkgY2FuIGxldmVyYWdlIG15IGRhdGEtZHJpdmVuIGFwcHJvYWNoIGFuZCB0ZWNobmljYWwgYmFja2dyb3VuZCB0byBkcml2ZSBtZWFzdXJhYmxlIGJ1c2luZXNzIGltcGFjdC4gSSB0aHJpdmUgaW4gY3Jvc3MtZnVuY3Rpb25hbCBlbnZpcm9ubWVudHMgd2hlcmUgZGVzaWduLCBlbmdpbmVlcmluZywgYW5kIGJ1c2luZXNzIHN0cmF0ZWd5IGludGVyc2VjdCwgYW5kIEknbSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHNvbHV0aW9ucyB0aGF0IGRlbGl2ZXIgdGFuZ2libGUgcmVzdWx0cy5cIixcbiAgICBhY3Rpb246IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgTXkgUmVzdW1lXCIsXG4gICAgICBocmVmOiBcIi9yZXN1bWVcIixcbiAgICB9LFxuICB9LFxuICBxdWlja1N0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiNDBNK1wiLFxuICAgICAgbGFiZWw6IFwiVW5pcXVlIFVzZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIyMDArXCIsXG4gICAgICBsYWJlbDogXCJTdHVkZW50cyBNZW50b3JlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMyBZZWFyc1wiLFxuICAgICAgbGFiZWw6IFwiVGVhY2hpbmcgRXhwZXJpZW5jZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiQjJDICYgQjJCXCIsXG4gICAgICBsYWJlbDogXCJQcm9kdWN0IEV4cGVyaWVuY2VcIixcbiAgICB9LFxuICBdLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVJlY2FwQ29udHJvbGxlciA9IHtcbiAgYWN0aXZlQ2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb3BlblJlY2FwOiAoaWQ6IENhc2VTdHVkeUlkKSA9PiB2b2lkO1xuICBjbG9zZVJlY2FwOiAoKSA9PiB2b2lkO1xuICBpc09wZW46IGJvb2xlYW47XG59O1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlSZWNhcCA9IChjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5Pik6IENhc2VTdHVkeVJlY2FwQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENhc2VTdHVkeUlkLCBzZXRTZWxlY3RlZENhc2VTdHVkeUlkXSA9IHVzZVN0YXRlPENhc2VTdHVkeUlkIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgYWN0aXZlQ2FzZVN0dWR5ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZGllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZENhc2VTdHVkeUlkKSA/PyBudWxsLFxuICAgIFtjYXNlU3R1ZGllcywgc2VsZWN0ZWRDYXNlU3R1ZHlJZF0sXG4gICk7XG5cbiAgY29uc3Qgb3BlblJlY2FwID0gdXNlQ2FsbGJhY2soKGlkOiBDYXNlU3R1ZHlJZCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWQoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VSZWNhcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKG51bGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVDYXNlU3R1ZHksXG4gICAgb3BlblJlY2FwLFxuICAgIGNsb3NlUmVjYXAsXG4gICAgaXNPcGVuOiBhY3RpdmVDYXNlU3R1ZHkgIT09IG51bGwsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXNlU3R1ZHlSZWNhcDtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGhlcm8sIHNvY2lhbExpbmtzIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IGhvbWVTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSBbXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBwb3RlbnRpYWxBY3Rpb246IHtcbiAgICAgIFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIixcbiAgICAgIHRhcmdldDogYCR7c2l0ZVVybH0vP3E9e3NlYXJjaF90ZXJtX3N0cmluZ31gLFxuICAgICAgXCJxdWVyeS1pbnB1dFwiOiBcInJlcXVpcmVkIG5hbWU9c2VhcmNoX3Rlcm1fc3RyaW5nXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogaGVyby5uYW1lLFxuICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgZGVzY3JpcHRpb246IGhlcm8uc3VidGl0bGUsXG4gICAgdXJsOiBzaXRlVXJsLFxuICAgIGltYWdlOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICBzYW1lQXM6IHNvY2lhbExpbmtzLm1hcCgobGluaykgPT4gbGluay5ocmVmKSxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciBjcmFmdGluZyB0cnVzdHdvcnRoeSBleHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlBvcnRmb2xpbyBvZiBNYXNpaCBTYWRyaSwgYW4gaW1wYWN0LW9yaWVudGVkIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHByb3RlY3RpbmcgbWlsbGlvbnMgb2YgdXNlcnMgdGhyb3VnaCB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBhbmQgZGVzaWduIHN5c3RlbXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL1wiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgIGFsdDogaGVyby5wb3J0cmFpdC5hbHQsXG4gICAgICB3aWR0aDogMTIwMCxcbiAgICAgIGhlaWdodDogMTIwMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogaG9tZVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWRpZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVjYXBEaWFsb2cgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWNhcERpYWxvZ1wiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgTWV0cmljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvblwiO1xuaW1wb3J0IFdoeUhpcmVNZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9XaHlIaXJlTWVTZWN0aW9uXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZGllcyxcbiAgaGVybyxcbiAgbWV0cmljcyxcbiAgc29jaWFsTGlua3MsXG4gIHdoeUhpcmVNZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5UmVjYXAgZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXBcIjtcbmltcG9ydCB7IGhvbWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlQ2FzZVN0dWR5LCBjbG9zZVJlY2FwLCBvcGVuUmVjYXAgfSA9IHVzZUNhc2VTdHVkeVJlY2FwKGNhc2VTdHVkaWVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5ob21lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17aGVyb30gLz5cbiAgICAgIDxXaHlIaXJlTWVTZWN0aW9uIGNvbnRlbnQ9e3doeUhpcmVNZX0gLz5cbiAgICAgIDxNZXRyaWNzU2VjdGlvbiBtZXRyaWNzPXttZXRyaWNzfSAvPlxuICAgICAgPENhc2VTdHVkaWVzU2VjdGlvbiBjYXNlU3R1ZGllcz17Y2FzZVN0dWRpZXN9IG9uT3BlblJlY2FwPXtvcGVuUmVjYXB9IC8+XG4gICAgICA8Q29udGFjdFNlY3Rpb24gc29jaWFsTGlua3M9e3NvY2lhbExpbmtzfSAvPlxuXG4gICAgICA8Q2FzZVN0dWR5UmVjYXBEaWFsb2cgY2FzZVN0dWR5PXthY3RpdmVDYXNlU3R1ZHl9IG9uQ2xvc2U9e2Nsb3NlUmVjYXB9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSEE7QUFJQSxJQUFlLDREQUEyQix1QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxxQkFBcUI7OztBQ0h6QjtBQUhBO0FBSUEsSUFBZSxpRUFBMkIsd0JBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsMEJBQTBCOzs7O0FDZ0I5QixJQUFNLGdCQUFnQixHQUFHLFdBQVcsU0FBUyxPQUFPLGtCQUFzQztBQUFBLEVBQ3hGLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFDdkIsUUFBUSxTQUFTLFdBQVc7QUFBQSxFQUM1QixNQUFNLFNBQVMsUUFBUSxTQUFTO0FBQUEsRUFFaEMsTUFBTSxtQkFBbUIsU0FDckIsK0VBQ0E7QUFBQSxFQUVKLE1BQU0scUJBQXFCLFNBQ3ZCLDRFQUNBO0FBQUEsRUFFSixNQUFNLGVB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UUFBUSxvQkFBb0I7QUFBQSxFQUM5QjtBQUFBO0FBR0YsSUFBZTs7O0FDOUJmLElBQU0sVUFBVSxhQUFXO0FBRTNCLElBQU0scUJBQXFDO0FBQUEsRUFDekM7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLGlCQUFpQjtBQUFBLE1BQ2YsU0FBUztBQUFBLE1BQ1QsUUFBUSxHQUFHO0FBQUEsTUFDWCxlQUFlO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTSxLQUFLO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixhQUFhLEtBQUs7QUFBQSxJQUNsQixLQUFLO0FBQUEsSUFDTCxPQUFPLEtBQUssU0FBUztBQUFBLElBQ3JCLFFBQVEsWUFBWSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7QUFBQSxFQUM3QztBQUNGO0FBRU8sSUFBTSxtQkFBaUM7QUFBQSxFQUM1QyxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssU0FBUztBQUFBLE1BQ25CLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDbkIsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7Ozs7QUM1QkEsSUFBTSxXQUFXLE1BQU07QUFBQSxFQUNyQixRQUFRLGlCQUFpQixZQUFZLGNBQWMsMEJBQWtCLFdBQVc7QUFBQSxFQUVoRix1QkFDRTtBQUFBLGNBVUU7QUFBQSxzQkFUQSx5QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQTJCO0FBQUEsc0JBRTNCLHlCQUFDLHFCQUFEO0FBQUEsUUFBYTtBQUFBLFNBQWIsaUNBQXlCO0FBQUEsc0JBQ3pCLHlCQUFDLDBCQUFEO0FBQUEsUUFBa0IsU0FBUztBQUFBLFNBQTNCLGlDQUFzQztBQUFBLHNCQUN0Qyx5QkFBQyx3QkFBRDtBQUFBLFFBQWdCO0FBQUEsU0FBaEIsaUNBQWtDO0FBQUEsc0JBQ2xDLHlCQUFDLDRCQUFEO0FBQUEsUUFBb0I7QUFBQSxRQUEwQixhQUFhO0FBQUEsU0FBM0QsaUNBQXNFO0FBQUEsc0JBQ3RFLHlCQUFDLHdCQUFEO0FBQUEsUUFBZ0I7QUFBQSxTQUFoQixpQ0FBMEM7QUFBQSxzQkFFMUMseUJBQUMsOEJBQUQ7QUFBQSxRQUFzQixXQUFXO0FBQUEsUUFBaUIsU0FBUztBQUFBLFNBQTNELGlDQUF1RTtBQUFBO0FBQUEsS0FUekUsZ0NBVUU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICI4NzcwMDM0Q0I3OTdGODJGNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
