import {
  smoothScrollToElement
} from "./chunk-3v4zq8dh.js";
import {
  Telegram_default
} from "./chunk-15fhz216.js";
import {
  EmailRounded_default
} from "./chunk-j27r43mr.js";
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

// node_modules/@mui/icons-material/esm/EventAvailable.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var EventAvailable_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14z"
}), "EventAvailable");

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
          sx: { pt: { xs: 2.5, md: 4 }, px: 0, flexDirection: "column", gap: { xs: 1.5, md: 2 } },
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
              direction: { xs: "column", md: "row" },
              spacing: { xs: 1.5, md: 1.5 },
              justifyContent: "center",
              alignItems: "stretch",
              sx: { width: "100%" },
              children: secondaryActions.map((action) => {
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

// node_modules/@mui/icons-material/esm/ChevronLeftRounded.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var ChevronLeftRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime4.jsx("path", {
  d: "M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
}), "ChevronLeftRounded");

// node_modules/@mui/icons-material/esm/ChevronRightRounded.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var ChevronRightRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime5.jsx("path", {
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
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
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
                        lineHeight: { xs: 1.5, md: 1.6 },
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
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
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
            spacing: 1,
            justifyContent: "center",
            alignItems: "center",
            children: testimonials.map((_, index) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
              onClick: () => setCurrentIndex(index),
              sx: {
                width: { xs: 8, md: 10 },
                height: { xs: 8, md: 10 },
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? theme.palette.brand.secondary : theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.2)" : "rgba(98, 132, 218, 0.3)",
                cursor: "pointer",
                transition: "all 0.2s ease",
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
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 }
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
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 }
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
          WebkitOverflowScrolling: "touch"
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
    quote: "MohammadReza is a very talented and professional UX specialist who made a great addition to our great company. MohammadReza began contributing on day one by porting our existing product.",
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
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(TestimonialsSection_default, {
        testimonials
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(CaseStudiesSection_default, {
        caseStudies,
        onOpenRecap: openRecap
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

//# debugId=B8A3193AE6CC19D964756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXZlbnRBdmFpbGFibGUuanMiLCAiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9JbXBhY3RTdGF0Q2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0NoZXZyb25MZWZ0Um91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQ2hldnJvblJpZ2h0Um91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL1Rlc3RpbW9uaWFsc1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BcnJvd0JhY2tJb3NSb3VuZGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BcnJvd0ZvcndhcmRJb3NSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvV2h5SGlyZU1lU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2hvb2tzL3VzZUNhc2VTdHVkeVJlY2FwLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL3Nlby50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9Ib21lUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJtMTAuOCAxNS45IDQuNjctMy41Yy4yNy0uMi4yNy0uNiAwLS44TDEwLjggOC4xYy0uMzMtLjI1LS44LS4wMS0uOC40djdjMCAuNDEuNDcuNjUuOC40TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJtMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhcIlxufSksICdQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlDYXJkUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgb25PcGVuUmVjYXA/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlDYXJkID0gKHsgY2FzZVN0dWR5LCBhY3RpdmUgPSBmYWxzZSwgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWR5Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBwYWxldHRlLCB0b2tlbnMgfSA9IHRoZW1lO1xuICBjb25zdCBpc0RhcmsgPSBwYWxldHRlLm1vZGUgPT09IFwiZGFya1wiO1xuXG4gIGNvbnN0IGFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMCwgNDUsIDExMCwgMC45OCksIHJnYmEoNTgsIDExOCwgMjI2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE3LCA3NiwgMTcwLCAwLjg4KSwgcmdiYSg2MCwgMTUxLCAyNTUsIDAuODIpKVwiO1xuXG4gIGNvbnN0IGluYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIwLCAyOCwgNTIsIDAuODIpLCByZ2JhKDEyLCAxOCwgMzYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQ4LCAyNTEsIDI1NSwgMC45NCksIHJnYmEoMjMyLCAyNDIsIDI1NSwgMC44OCkpXCI7XG5cbiAgY29uc3QgaGVhZGluZ0NvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMjYsIDIzNCwgMjU1LCAwLjk1KVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5wcmltYXJ5O1xuXG4gIGNvbnN0IGJvZHlDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjEwLCAyMjAsIDI1NSwgMC44MilcIlxuICAgICAgOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5O1xuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjI4KVwiXG4gICAgICA6IFwicmdiYSgxNywgNzYsIDE3MCwgMC4xMilcIjtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBhY3RpdmUgPyBhY3RpdmVCYWNrZ3JvdW5kIDogaW5hY3RpdmVCYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtib3JkZXJDb2xvcn1gLFxuICAgICAgICBjb2xvcjogYWN0aXZlID8gcGFsZXR0ZS5jb21tb24ud2hpdGUgOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgYm94U2hhZG93OiBhY3RpdmUgPyB0b2tlbnMuc2hhZG93LmxldmVsMyA6IHRva2Vucy5zaGFkb3cubGV2ZWwyLFxuICAgICAgICB0cmFuc2l0aW9uOiB0b2tlbnMudHJhbnNpdGlvbi5ob3ZlcixcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNnB4KVwiLFxuICAgICAgICAgIGJveFNoYWRvdzogdG9rZW5zLnNoYWRvdy5sZXZlbDMsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGI6IDMgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZXllYnJvd1wiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OClcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTg5LCAyMDQsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYXNlIHtjYXNlU3R1ZHkubnVtYmVyfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgbGFiZWw9e2Nhc2VTdHVkeS50YWd9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjI0KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyNywgMjQxLCAyNTUsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjE0LCAyMjQsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogYWN0aXZlID8gXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoM1wiIHN4PXt7IGNvbG9yOiBoZWFkaW5nQ29sb3IgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUyXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybX1cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWwgJiYgKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBtbDogMC43NSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICh7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsfSlcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdCAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBjb2xvcjogYm9keUNvbG9yIH19PlxuICAgICAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwLCBnYXA6IDEgfX0+XG4gICAgICAgIHthY3RpdmUgPyAoXG4gICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBjb2xvcj17YWN0aXZlID8gXCJpbmhlcml0XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZWNhcH1cbiAgICAgICAgICBlbmRJY29uPXs8UGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KVwiXG4gICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNClcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlY2FwXG4gICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDYXNlU3R1ZHlDYXJkIGZyb20gXCIuL0Nhc2VTdHVkeUNhcmRcIjtcblxudHlwZSBDYXNlU3R1ZGllc1NlY3Rpb25Qcm9wcyA9IHtcbiAgY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT47XG4gIG9uT3BlblJlY2FwOiAoaWQ6IENhc2VTdHVkeUlkKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ2FzZVN0dWRpZXNTZWN0aW9uID0gKHsgY2FzZVN0dWRpZXMsIG9uT3BlblJlY2FwIH06IENhc2VTdHVkaWVzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIEV4YW1wbGVzIG9mIHRoZSBpbXBhY3QgSSBoYXZlIG1hZGVcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPENhc2VTdHVkeUNhcmRcbiAgICAgICAgICAgICAgY2FzZVN0dWR5PXtpdGVtfVxuICAgICAgICAgICAgICBhY3RpdmU9e2l0ZW0uaWQgPT09IFwiZGl2YXJcIn1cbiAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IG9uT3BlblJlY2FwKGl0ZW0uaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkaWVzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nVGl0bGUsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlSZWNhcERpYWxvZyA9ICh7IGNhc2VTdHVkeSwgb25DbG9zZSB9OiBDYXNlU3R1ZHlSZWNhcERpYWxvZ1Byb3BzKSA9PiAoXG4gIDxEaWFsb2dcbiAgICBvcGVuPXtCb29sZWFuKGNhc2VTdHVkeSl9XG4gICAgb25DbG9zZT17b25DbG9zZX1cbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCJcbiAgPlxuICAgIHtjYXNlU3R1ZHkgPyAoXG4gICAgICA8PlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCI+e2Nhc2VTdHVkeS5yZWNhcC5oZWFkbGluZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5yZWNhcC5idWxsZXRzLm1hcCgoYnVsbGV0KSA9PiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtidWxsZXR9IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7YnVsbGV0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBtdD17M30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlZXAgZGl2ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvPlxuICAgICkgOiBudWxsfVxuICA8L0RpYWxvZz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVJlY2FwRGlhbG9nO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2LjUzIDExLjA2IDE1LjQ3IDEwbC00Ljg4IDQuODgtMi4xMi0yLjEyLTEuMDYgMS4wNkwxMC41OSAxN3pNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJtMCAxNkg1VjhoMTR6XCJcbn0pLCAnRXZlbnRBdmFpbGFibGUnKTsiLAogICAgImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcblxudHlwZSBDb250YWN0QWN0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdE5vZGU7XG4gIHZhcmlhbnQ/OiBCdXR0b25Qcm9wc1tcInZhcmlhbnRcIl07XG4gIGNvbG9yPzogQnV0dG9uUHJvcHNbXCJjb2xvclwiXTtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICByZWw/OiBzdHJpbmc7XG59O1xuXG50eXBlIExldHNUYWxrU2VjdGlvblByb3BzID0ge1xuICBpZD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmltYXJ5QWN0aW9uOiBDb250YWN0QWN0aW9uO1xuICBzZWNvbmRhcnlBY3Rpb25zPzogUmVhZG9ubHlBcnJheTxDb250YWN0QWN0aW9uPjtcbn07XG5cbmNvbnN0IGdldEV4dGVybmFsTGlua1Byb3BzID0gKGhyZWY6IHN0cmluZykgPT4ge1xuICBpZiAoaHJlZi5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgIH0gYXMgY29uc3Q7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgIHJlbDogdW5kZWZpbmVkLFxuICB9IGFzIGNvbnN0O1xufTtcblxuY29uc3QgTGV0c1RhbGtTZWN0aW9uID0gKHtcbiAgaWQsXG4gIHRpdGxlID0gXCJMZXQncyBUYWxrIGFuZCBXb3JrIFRvZ2V0aGVyXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJJJ20gYWx3YXlzIG9wZW4gdG8gZGlzY3Vzc2luZyBuZXcgcHJvamVjdHMsIGNyZWF0aXZlIGlkZWFzLCBvciBvcHBvcnR1bml0aWVzIHRvIGJlIHBhcnQgb2YgeW91ciB2aXNpb24uXCIsXG4gIHByaW1hcnlBY3Rpb24sXG4gIHNlY29uZGFyeUFjdGlvbnMgPSBbXSxcbn06IExldHNUYWxrU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIGlkPXtpZH0gc3g9e3sgcHk6IHsgeHM6IDQsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkXG4gICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogeyB4czogXCIxNnB4XCIsIG1kOiBcIjI0cHhcIiB9LFxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiA1IH0sXG4gICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA1IH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBwYjogMCwgcHg6IHsgeHM6IDAsIG1kOiAwIH0gfX0+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEsIG1kOiAxLjUgfX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCIgXG4gICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiB7IHhzOiBcIjEuNXJlbVwiLCBtZDogXCIycmVtXCIgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiIFxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMC44NzVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBwdDogeyB4czogMi41LCBtZDogNCB9LCBweDogMCwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiB7IHhzOiAxLjUsIG1kOiAyIH0gfX0+XG4gICAgICAgICAgey8qIFByaW1hcnkgQWN0aW9uIC0gRnVsbCBXaWR0aCAqL31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgIGhyZWY9e3ByaW1hcnlBY3Rpb24uaHJlZn1cbiAgICAgICAgICAgIHN0YXJ0SWNvbj17cHJpbWFyeUFjdGlvbi5pY29ufVxuICAgICAgICAgICAgdmFyaWFudD17cHJpbWFyeUFjdGlvbi52YXJpYW50ID8/IFwiY29udGFpbmVkXCJ9XG4gICAgICAgICAgICBjb2xvcj17cHJpbWFyeUFjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICBzeD17eyBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI1NnB4XCIgfSB9fVxuICAgICAgICAgICAgdGFyZ2V0PXtwcmltYXJ5QWN0aW9uLnRhcmdldCA/PyBnZXRFeHRlcm5hbExpbmtQcm9wcyhwcmltYXJ5QWN0aW9uLmhyZWYpLnRhcmdldH1cbiAgICAgICAgICAgIHJlbD17cHJpbWFyeUFjdGlvbi5yZWwgPz8gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMocHJpbWFyeUFjdGlvbi5ocmVmKS5yZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ByaW1hcnlBY3Rpb24ubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIFNlY29uZGFyeSBBY3Rpb25zIC0gR3JvdXBlZCBSb3cgKi99XG4gICAgICAgICAge3NlY29uZGFyeUFjdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAxLjUgfX1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsUHJvcHMgPSBnZXRFeHRlcm5hbExpbmtQcm9wcyhhY3Rpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXthY3Rpb24uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2FjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBzdGFydEljb249e2FjdGlvbi5pY29ufVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXthY3Rpb24udmFyaWFudCA/PyBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXthY3Rpb24uY29sb3IgPz8gXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17eyB4czogdHJ1ZSwgbWQ6IGZhbHNlIH19XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogeyB4czogXCI0OHB4XCIsIG1kOiBcIjQ4cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IHsgbWQ6IFwiMSAxIDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB7IG1kOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17YWN0aW9uLnRhcmdldCA/PyBleHRlcm5hbFByb3BzLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgcmVsPXthY3Rpb24ucmVsID8/IGV4dGVybmFsUHJvcHMucmVsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IHR5cGUgeyBDb250YWN0QWN0aW9uLCBMZXRzVGFsa1NlY3Rpb25Qcm9wcyB9O1xuZXhwb3J0IGRlZmF1bHQgTGV0c1RhbGtTZWN0aW9uO1xuXG4iLAogICAgImltcG9ydCBFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsUm91bmRlZFwiO1xuaW1wb3J0IEV2ZW50QXZhaWxhYmxlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FdmVudEF2YWlsYWJsZVwiO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UZWxlZ3JhbVwiO1xuaW1wb3J0IExldHNUYWxrU2VjdGlvbiBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvTGV0c1RhbGtTZWN0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvTGV0c1RhbGtTZWN0aW9uXCI7XG5cbmNvbnN0IENvbnRhY3RTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzZWNvbmRhcnlBY3Rpb25zOiBDb250YWN0QWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICAgIGhyZWY6IFwibWFpbHRvOnNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgICBpY29uOiA8RW1haWxSb3VuZGVkSWNvbiAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkJvb2sgYSBzZXNzaW9uXCIsXG4gICAgICBocmVmOiBcIi9jb250YWN0I21lbnRvcnNoaXBcIixcbiAgICAgIGljb246IDxFdmVudEF2YWlsYWJsZUljb24gLz4sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMZXRzVGFsa1NlY3Rpb25cbiAgICAgIGlkPVwiY29udGFjdFwiXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgIGxhYmVsOiBcIkRpcmVjdCBtZXNzYWdlXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly90Lm1lL21hc2loc2FkcmlcIixcbiAgICAgICAgaWNvbjogPFRlbGVncmFtSWNvbiAvPixcbiAgICAgIH19XG4gICAgICBzZWNvbmRhcnlBY3Rpb25zPXtzZWNvbmRhcnlBY3Rpb25zfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0U2VjdGlvbjtcbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7IEF2YXRhciwgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBIZXJvQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgY2VydGlmaWVkQmFkZ2VTcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9iYWRnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ1wiO1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsVG9FbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Ntb290aFNjcm9sbFwiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IEhlcm9Db250ZW50O1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVQcmltYXJ5Q3RhQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBoZXJvLmN0YVByaW1hcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVByaW1hcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhUHJpbWFyeS5zY3JvbGxUb0lkLCBoZXJvLmN0YVByaW1hcnkudG9dKTtcblxuICBjb25zdCBoYW5kbGVTZWNvbmRhcnlDdGFDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQgPz8gaGVyby5jdGFTZWNvbmRhcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhU2Vjb25kYXJ5LnRvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTglIDE1JSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTgpLCB0cmFuc3BhcmVudCA2MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc4JSAxOCUsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTgpLCB0cmFuc3BhcmVudCA1NSUpXCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogNCwgbWQ6IDMuNSB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJzdHJldGNoXCIgfSxcbiAgICAgICAgICAgIHB4OiB7IHhzOiAwLCBtZDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDMyMCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2hlcm8ucG9ydHJhaXQuYWx0fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMThweCA0MHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtjZXJ0aWZpZWRCYWRnZVNyY31cbiAgICAgICAgICAgICAgICBhbHQ9XCJDZXJ0aWZpZWQgYmFkZ2VcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogeyB4czogLTE4LCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAtMTgsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAxMjAsIG1kOiAxNTAgfSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17eyB4czogMi4yNSwgbWQ6IDIuNzUgfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS40LCBtZDogMS44IH19IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEsIHNtOiAxLjUgfX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcImNlbnRlclwiLCBzbTogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjMsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImRpc3BsYXlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjA1LFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMTVlbVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5uYW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7IHhzOiBcIjAuMDFlbVwiLCBtZDogXCIwLjAwNWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjg1JVwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjEycmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNjUsIG1kOiAxLjcgfSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuc3BsaXQoXCIgfCBcIilbMF19XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuaW5jbHVkZXMoXCIgfCBcIikgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuOTVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNiwgbWQ6IDEuNjUgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5zcGxpdChcIiB8IFwiKS5zbGljZSgxKS5qb2luKFwiIHwgXCIpfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgey8qIEtleSBWYWx1ZSBQaWxscyAqL31cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHB0OiAwLjUsXG4gICAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIjQwKyBNaWxsaW9uIFVzZXJzXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkIyQiAmIEIyQ1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhLURyaXZlblwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBSS1GYW1pbGlhclwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWNobmljYWwgJiBNYW5hZ2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNCwgc206IDEuOCB9fVxuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHN4PXt7IHB0OiB7IHhzOiAwLjUsIG1kOiAwLjc1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17eyBtaW5XaWR0aDogeyBzbTogMjIwIH0gfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmltYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFQcmltYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlY29uZGFyeUN0YUNsaWNrfVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFTZWNvbmRhcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IE1ldHJpY1N1bW1hcnk7XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wYWN0U3RhdENhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0cmljU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEltcGFjdFN0YXRDYXJkIGZyb20gXCIuL0ltcGFjdFN0YXRDYXJkXCI7XG5cbnR5cGUgTWV0cmljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5Pjtcbn07XG5cbmNvbnN0IE1ldHJpY3NTZWN0aW9uID0gKHsgbWV0cmljcyB9OiBNZXRyaWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9LCBwdDogeyBtZDogNiB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5SZWNlbnQgSW1wYWN0IEkgSGF2ZSBNYWRlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIE1lYXN1cmFibGUgb3V0Y29tZXMgZnJvbSBteSBkZXNpZ24gd29ya1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAge21ldHJpY3MubWFwKCh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA2LCBtZDogMyB9fSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTQuNzEgNi43MWEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBMOC43MSAxMS4zYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDQuNTkgNC41OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDBzLjM5LTEuMDIgMC0xLjQxTDEwLjgzIDEybDMuODgtMy44OGMuMzktLjM5LjM4LTEuMDMgMC0xLjQxXCJcbn0pLCAnQ2hldnJvbkxlZnRSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOS4yOSA2LjcxYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDEzLjE3IDEybC0zLjg4IDMuODhjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFzMS4wMi4zOSAxLjQxIDBsNC41OS00LjU5Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTAuNyA2LjdjLS4zOC0uMzgtMS4wMi0uMzgtMS40MS4wMVwiXG59KSwgJ0NoZXZyb25SaWdodFJvdW5kZWQnKTsiLAogICAgImltcG9ydCBDaGV2cm9uTGVmdFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0Um91bmRlZFwiO1xuaW1wb3J0IENoZXZyb25SaWdodFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodFJvdW5kZWRcIjtcbmltcG9ydCB7IEF2YXRhciwgQm94LCBDYXJkLCBDb250YWluZXIsIEljb25CdXR0b24sIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBUZXN0aW1vbmlhbCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFRlc3RpbW9uaWFsc1NlY3Rpb25Qcm9wcyA9IHtcbiAgdGVzdGltb25pYWxzOiBSZWFkb25seUFycmF5PFRlc3RpbW9uaWFsPjtcbn07XG5cbmNvbnN0IFRlc3RpbW9uaWFsc1NlY3Rpb24gPSAoeyB0ZXN0aW1vbmlhbHMgfTogVGVzdGltb25pYWxzU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gKHByZXYgPT09IDAgPyB0ZXN0aW1vbmlhbHMubGVuZ3RoIC0gMSA6IHByZXYgLSAxKSk7XG4gIH0sIFt0ZXN0aW1vbmlhbHMubGVuZ3RoXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ID09PSB0ZXN0aW1vbmlhbHMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2ICsgMSkpO1xuICB9LCBbdGVzdGltb25pYWxzLmxlbmd0aF0pO1xuXG4gIC8vIEtleWJvYXJkIG5hdmlnYXRpb24gc3VwcG9ydFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgaGFuZGxlUHJldmlvdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBoYW5kbGVOZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICB9LCBbaGFuZGxlUHJldmlvdXMsIGhhbmRsZU5leHRdKTtcblxuICBjb25zdCBjdXJyZW50VGVzdGltb25pYWwgPSB0ZXN0aW1vbmlhbHNbY3VycmVudEluZGV4XTtcblxuICBpZiAoIWN1cnJlbnRUZXN0aW1vbmlhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMDYpLCB0cmFuc3BhcmVudCA3MCUpXCJcbiAgICAgICAgICAgIDogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjEpLCB0cmFuc3BhcmVudCA3MCUpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+V2hhdCBQZW9wbGUgU2F5PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBSZWNvbW1lbmRhdGlvbnMgZnJvbSBjb2xsZWFndWVzIGFuZCBtZW50ZWVzXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBtZDogXCI4NSVcIiwgbGc6IFwiMTIwMHB4XCIgfSxcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogTGVmdCBBcnJvdyAqL31cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogeyB4czogLTEyLCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCIwIDRweCAxMnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzIGVhc2VcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHRlc3RpbW9uaWFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0Um91bmRlZEljb24gZm9udFNpemU9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICB7LyogVGVzdGltb25pYWwgQ2FyZCAqL31cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgbWQ6IFwiODAlXCIgfSxcbiAgICAgICAgICAgICAgICBweDogeyB4czogNCwgbWQ6IDgsIGxnOiAxMCB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiA1LCBtZDogNiwgbGc6IDggfSxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE4LCAxOCwgMTgsIDAuOClcIixcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCIwIDhweCAzMnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuNClcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2VcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgey8qIFF1b3RlIFRleHQgKi99XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJibG9ja3F1b3RlXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdcIkdlb3JnaWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWYnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxLjVyZW1cIiwgbWQ6IFwiMS43NXJlbVwiLCBsZzogXCIycmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS41LCBtZDogMS42IH0sXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsOiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgICAgICAgICBcIiY6OmJlZm9yZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1wiXFxcXDIwMUNcIicsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogeyB4czogXCItMC4yZW1cIiwgbWQ6IFwiLTAuM2VtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIzcmVtXCIsIG1kOiBcIjRyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4yKVwiIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdcIkdlb3JnaWFcIiwgc2VyaWYnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y3VycmVudFRlc3RpbW9uaWFsLnF1b3RlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgIHsvKiBBdXRob3IgU2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHB0OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5pbWFnZT8uc3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2N1cnJlbnRUZXN0aW1vbmlhbC5hdXRob3IuaW1hZ2U/LmFsdCB8fCBgJHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLm5hbWV9IGF2YXRhcmB9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDU2LCBtZDogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDU2LCBtZDogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDJweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLm5hbWUuY2hhckF0KDApfVxuICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fSBzeD17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIwLjkzNzVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4wMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIwLjgxMjVyZW1cIiwgbWQ6IFwiMC44NzVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5jb21wYW55ICYmIGAg4oCiICR7Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5jb21wYW55fWB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuNylcIiA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuNylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG10OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvci5yZWxhdGlvbnNoaXB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgey8qIFJpZ2h0IEFycm93ICovfVxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB7IHhzOiAtMTIsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAgNHB4IDEycHggcmdiYSgxNywgMzYsIDgzLCAwLjEpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIjAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMnMgZWFzZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCB0ZXN0aW1vbmlhbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRSb3VuZGVkSWNvbiBmb250U2l6ZT1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7LyogQ2Fyb3VzZWwgSW5kaWNhdG9ycyAqL31cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGluZGV4KX1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4ycyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuNClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuNSlcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMilcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgR28gdG8gdGVzdGltb25pYWwgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc1NlY3Rpb247XG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2LjYyIDIuOTljLS40OS0uNDktMS4yOC0uNDktMS43NyAwTDYuNTQgMTEuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw4LjMxIDguMzFjLjQ5LjQ5IDEuMjguNDkgMS43NyAwcy40OS0xLjI4IDAtMS43N0w5LjM4IDEybDcuMjUtNy4yNWMuNDgtLjQ4LjQ4LTEuMjgtLjAxLTEuNzZcIlxufSksICdBcnJvd0JhY2tJb3NSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNy4zOCAyMS4wMWMuNDkuNDkgMS4yOC40OSAxLjc3IDBsOC4zMS04LjMxYy4zOS0uMzkuMzktMS4wMiAwLTEuNDFMOS4xNSAyLjk4Yy0uNDktLjQ5LTEuMjgtLjQ5LTEuNzcgMHMtLjQ5IDEuMjggMCAxLjc3TDE0LjYyIDEybC03LjI1IDcuMjVjLS40OC40OC0uNDggMS4yOC4wMSAxLjc2XCJcbn0pLCAnQXJyb3dGb3J3YXJkSW9zUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFycm93QmFja0lvc1JvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja0lvc1JvdW5kZWRcIjtcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBJY29uQnV0dG9uLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgRGlmZmVyZW50aWF0b3IgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIERpZmZlcmVudGlhdG9yc0Nhcm91c2VsUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PERpZmZlcmVudGlhdG9yPjtcbn07XG5cbmNvbnN0IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsID0gKHsgaXRlbXMgfTogRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWxQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtjYW5TY3JvbGxMZWZ0LCBzZXRDYW5TY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhblNjcm9sbFJpZ2h0LCBzZXRDYW5TY3JvbGxSaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjaGVja1Njcm9sbGFiaWxpdHkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzY3JvbGxMZWZ0LCBzY3JvbGxXaWR0aCwgY2xpZW50V2lkdGggfSA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgIHNldENhblNjcm9sbExlZnQoc2Nyb2xsTGVmdCA+IDApO1xuICAgIHNldENhblNjcm9sbFJpZ2h0KHNjcm9sbExlZnQgPCBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gMTApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gdXNlQ2FsbGJhY2soXG4gICAgKGRpcmVjdGlvbjogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpID0+IHtcbiAgICAgIGlmICghc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgY29uc3QgY2FyZFdpZHRoID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImRpdlwiKT8uY2xpZW50V2lkdGggPz8gMzIwO1xuICAgICAgY29uc3Qgc2Nyb2xsQW1vdW50ID0gY2FyZFdpZHRoICsgMjQ7IC8vIGNhcmQgd2lkdGggKyBnYXBcblxuICAgICAgc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsQnkoe1xuICAgICAgICBsZWZ0OiBkaXJlY3Rpb24gPT09IFwibGVmdFwiID8gLXNjcm9sbEFtb3VudCA6IHNjcm9sbEFtb3VudCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hlY2sgc2Nyb2xsYWJpbGl0eSBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICBzZXRUaW1lb3V0KGNoZWNrU2Nyb2xsYWJpbGl0eSwgMzAwKTtcbiAgICB9LFxuICAgIFtjaGVja1Njcm9sbGFiaWxpdHldLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjaGVja1Njcm9sbGFiaWxpdHkoKTtcbiAgfSwgW2NoZWNrU2Nyb2xsYWJpbGl0eV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tTY3JvbGxhYmlsaXR5KCk7XG4gICAgLy8gQWxzbyBjaGVjayBvbiB3aW5kb3cgcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tTY3JvbGxhYmlsaXR5KTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tTY3JvbGxhYmlsaXR5KTtcbiAgfSwgW2NoZWNrU2Nyb2xsYWJpbGl0eV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICB7LyogTmF2aWdhdGlvbiBCdXR0b25zICovfVxuICAgICAge2NhblNjcm9sbExlZnQgJiYgKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbChcImxlZnRcIil9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBsZWZ0OiB7IHhzOiAtMTIsIG1kOiAtMTYgfSxcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCIwIDRweCAxMnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xKVwiXG4gICAgICAgICAgICAgICAgOiBcIjAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiA0MCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2Nyb2xsIGxlZnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93QmFja0lvc1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApfVxuXG4gICAgICB7Y2FuU2Nyb2xsUmlnaHQgJiYgKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbChcInJpZ2h0XCIpfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgcmlnaHQ6IHsgeHM6IC0xMiwgbWQ6IC0xNiB9LFxuICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgNHB4IDEycHggcmdiYSgxNywgMzYsIDgzLCAwLjEpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0MCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgcmlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApfVxuXG4gICAgICB7LyogU2Nyb2xsYWJsZSBDb250YWluZXIgKi99XG4gICAgICA8Qm94XG4gICAgICAgIHJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGdhcDogMyxcbiAgICAgICAgICBvdmVyZmxvd1g6IFwiYXV0b1wiLFxuICAgICAgICAgIG92ZXJmbG93WTogXCJoaWRkZW5cIixcbiAgICAgICAgICBzY3JvbGxTbmFwVHlwZTogXCJ4IG1hbmRhdG9yeVwiLFxuICAgICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIiwgLy8gRmlyZWZveFxuICAgICAgICAgIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsIC8vIElFL0VkZ2VcbiAgICAgICAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLCAvLyBDaHJvbWUvU2FmYXJpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBweDogeyB4czogMSwgbWQ6IDIgfSxcbiAgICAgICAgICBweTogMSxcbiAgICAgICAgICAvLyBIaWRlIHNjcm9sbGJhciBidXQgYWxsb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDM0MCB9LFxuICAgICAgICAgICAgICBzY3JvbGxTbmFwQWxpZ246IFwic3RhcnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogeyB4czogMjAwLCBtZDogMjIwIH0sXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxOCwgMTgsIDE4LCAwLjYpXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC00cHgpXCIsXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiMCA4cHggMjRweCByZ2JhKDE3LCAzNiwgODMsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNClcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgcDogeyB4czogMiwgbWQ6IDIuNSB9LCBoZWlnaHQ6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZm9udFdlaWdodD17NjAwfSBzeD17eyBmb250U2l6ZTogeyB4czogXCIxcmVtXCIsIG1kOiBcIjEuMTI1cmVtXCIgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgbGluZUhlaWdodD17MS42fSBzeD17eyBmbGV4R3JvdzogMSwgZm9udFNpemU6IHsgeHM6IFwiMC44NzVyZW1cIiwgbWQ6IFwiMC45Mzc1cmVtXCIgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsO1xuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwgZnJvbSBcIi4vRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWxcIjtcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgdHlwZSB7IFdoeUhpcmVNZUNvbnRlbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBXaHlIaXJlTWVTZWN0aW9uUHJvcHMgPSB7XG4gIGNvbnRlbnQ6IFdoeUhpcmVNZUNvbnRlbnQ7XG59O1xuXG5jb25zdCBXaHlIaXJlTWVTZWN0aW9uID0gKHsgY29udGVudCB9OiBXaHlIaXJlTWVTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHQ6IHsgeHM6IDQsIG1kOiA2IH0sIHBiOiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs2fT5cbiAgICAgICAgICB7LyogV2hhdCBJIEJyaW5nIFNlY3Rpb24gKi99XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57Y29udGVudC53aGF0SUJyaW5nLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIEtleSBkaWZmZXJlbnRpYXRvcnMgdGhhdCBzZXQgbWUgYXBhcnRcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbCBpdGVtcz17Y29udGVudC53aGF0SUJyaW5nLmRpZmZlcmVudGlhdG9yc30gLz5cbiAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgey8qIFF1aWNrIFN0YXRzIFNlY3Rpb24gKi99XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcHk6IDQsXG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBtZDogNCB9LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsIDExMSwgMjM1LCAwLjA4KSAwJSwgcmdiYSgxNDUsIDE2NywgMjU1LCAwLjA4KSAxMDAlKVwiXG4gICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg0OCwgODYsIDE3NiwgMC4xNSkgMCUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjE1KSAxMDAlKVwiLFxuICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAge2NvbnRlbnQucXVpY2tTdGF0cy5tYXAoKHN0YXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogNiwgbWQ6IDMgfX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjk1KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgey8qIFdoYXQgSSdtIExvb2tpbmcgRm9yIFNlY3Rpb24gKi99XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcHk6IDQsXG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBtZDogNSB9LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDQ4LCA4NiwgMTc2LCAwLjEyKVwiLFxuICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SW1Mb29raW5nRm9yLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgbGluZUhlaWdodD17MS44fT5cbiAgICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICB7Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmFjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgdG89e2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IDIyMCB9LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmFjdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdoeUhpcmVNZVNlY3Rpb247XG5cbiIsCiAgICAiaW1wb3J0IGhlcm9Qb3J0cmFpdEFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtc2FkcmktcHJvZmlsZS53ZWJwXCI7XG5pbXBvcnQgbW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21vcnBoLWRlc2lnbi1zeXN0ZW0ud2VicFwiO1xuaW1wb3J0IHJhaG5lbWFTdHVkZW50c0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvcmFobmVtYS1zdHVkZW50cy53ZWJwXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZVJlc291cmNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9hc3NldHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ2FzZVN0dWR5U3VtbWFyeSxcbiAgRXhwZXJpZW5jZVN1bW1hcnksXG4gIEhlcm9Db250ZW50LFxuICBNZXRyaWNTdW1tYXJ5LFxuICBTb2NpYWxMaW5rLFxuICBUZXN0aW1vbmlhbCxcbiAgV2h5SGlyZU1lQ29udGVudCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBoZXJvOiBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IFwiSGVsbG8g8J+Ri/Cfj7wsIEkgYW1cIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICB0aXRsZTogXCJhbiBpbXBhY3Qtb3JpZW50ZWQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgc3VidGl0bGU6XG4gICAgXCJGb3JtZXIgaU9TIGRldmVsb3BlciB0dXJuZWQgZGVzaWduZXIsIGJ1aWxkaW5nIGRhdGEtZHJpdmVuIGV4cGVyaWVuY2VzIHRoYXQgZHJpdmUgdXNlciByZXRlbnRpb24gYW5kIGJ1c2luZXNzIGdyb3d0aCBmb3IgNDArIG1pbGxpb24gdXNlcnMgYWNyb3NzIEIyQiBhbmQgQjJDIHByb2R1Y3RzXCIsXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZHlcIixcbiAgICBzY3JvbGxUb0lkOiBcImNhc2Utc3R1ZGllc1wiLFxuICB9LFxuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogXCJUbyBiZSBpbiB0b3VjaFwiLFxuICAgIHNjcm9sbFRvSWQ6IFwiY29udGFjdFwiLFxuICB9LFxuICBwb3J0cmFpdDogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIGhlcm9Qb3J0cmFpdEFzc2V0LCBcIk1hc2loIFNhZHJpIC0gUHJvZHVjdCBEZXNpZ25lclwiLCB7XG4gICAgd2lkdGg6IDEyMDAsXG4gICAgaGVpZ2h0OiAxMjAwLFxuICB9KSxcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzOiBSZWFkb25seUFycmF5PE1ldHJpY1N1bW1hcnk+ID0gW1xuICB7XG4gICAgdmFsdWU6IFwiNjAlXCIsXG4gICAgdGl0bGU6IFwiUmVkdWN0aW9uIGluIGhhcmFzc21lbnQgaW5jaWRlbnRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvLWxlZCBEaXZhcuKAmXMgc2VjdXJlIGNhbGwgc3lzdGVtIHdpdGggVHJ1c3QgJiBTYWZldHkgdG8gc2FmZWd1YXJkIDIuMU0gd2Vla2x5IGNhbGxlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4LjNLK1wiLFxuICAgIHRpdGxlOiBcIlByb2R1Y3QgdGVhbXMgdXNpbmcgTW9ycGhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgYW4gb3BlbiBkZXNpZ24gc3lzdGVtIHRoYXQgcG93ZXJzIEZpZ21hIGhhbmRvZmZzIGFuZCBhY2NlbGVyYXRlcyBoaWdoLXF1YWxpdHkgcmVsZWFzZXMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCIyMDArXCIsXG4gICAgdGl0bGU6IFwiRGVzaWduZXJzIG1lbnRvcmVkXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRlc2lnbmVkIHByb2plY3QtYmFzZWQgcHJvZ3JhbXMgYXQgUmFobmVtYSBDb2xsZWdlIHRvIGhlbHAgZW1lcmdpbmcgZGVzaWduZXJzIGxhdW5jaCBjYXJlZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiODAlXCIsXG4gICAgdGl0bGU6IFwiTGlmdCBpbiBxdWFsaWZpZWQgbGVhZHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVkZXNpZ25lZCBQZXJzb2zigJlzIHNpZ24tdXAgZnVubmVsIGVuZC10by1lbmQsIHJlbW92aW5nIGZyaWN0aW9uIGFuZCBib29zdGluZyBsZWFkIGdlbmVyYXRpb24gaW4gMyBtb250aHMuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT4gPSBbXG4gIHtcbiAgICBpZDogXCJkaXZhclwiLFxuICAgIG51bWJlcjogXCIwMVwiLFxuICAgIHRhZzogXCJJbXByb3ZpbmcgVXNlciBTYWZldHlcIixcbiAgICB0aXRsZTogXCJUaGUgU3Rvcnkgb2YgUmVkdWNpbmcgSGFyYXNzbWVudCBieSA2MCVcIixcbiAgICBwbGF0Zm9ybTogXCJvbiBEaXZhclwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIkNsYXNzaWZpZWQgQWRzIFBsYXRmb3JtXCIsXG4gICAgc3RhdDogXCJBIGZlYXR1cmUgdXNlZCBieSAyLjEgbWlsbGlvbiB1c2VycyBwZXIgd2Vla1wiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInRydXN0ICYgc2FmZXR5XCIsIFwiaW1wYWN0IGF0IHNjYWxlXCJdLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6IFwiSG93IGNyb3NzLWZ1bmN0aW9uYWwgZ3VhcmRyYWlscyBoZWxwZWQgRGl2YXIgcmVkdWNlIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIkNvLWxlZCBhIHRhc2sgZm9yY2UgYnJpZGdpbmcgVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBhbmQgRW5naW5lZXJpbmcuXCIsXG4gICAgICAgIFwiU2hpcHBlZCBkeW5hbWljIHZvaWNlLW1hc2tpbmcgd2l0aCBhYnVzZSBkZXRlY3Rpb24gZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMuXCIsXG4gICAgICAgIFwiU3Rvb2QgdXAgcGxheWJvb2tzIGZvciBtb2RlcmF0aW9uIG9wcyB0byBtb25pdG9yIHJlcGVhdCBvZmZlbmRlcnMuXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUtYXZhbFwiLFxuICAgIG51bWJlcjogXCIwMlwiLFxuICAgIHRhZzogXCJCb29zdGluZyBVc2VyIEVuZ2FnZW1lbnRcIixcbiAgICB0aXRsZTogXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzXCIsXG4gICAgcGxhdGZvcm06IFwiYXQgU2V0YXJlIEF2YWwgQ28uXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiUmV0ZW50aW9uIHN0cmF0ZWd5XCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwicmV0ZW50aW9uIHN0cmF0ZWd5XCIsIFwiY3Jvc3MtZnVuY3Rpb25hbCBsZWFkZXJzaGlwXCJdLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBvbmJvYXJkaW5nIHRvIGRvdWJsZSByZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiTWFwcGVkIGEgbmV3IGxpZmVjeWNsZSBtb2RlbCB0aWVkIHRvIGRhdGEtYmFja2VkIGV4cGVyaW1lbnRhdGlvbi5cIixcbiAgICAgICAgXCJSZWZpbmVkIGFjdGl2YXRpb24gZmxvd3MgdG8gc3BvdGxpZ2h0IHZhbHVlIHByb3BzIHdpdGhpbiBmaXJzdCBzZXNzaW9uLlwiLFxuICAgICAgICBcIkNvLWNyZWF0ZWQgYSBsZWFybmluZyBhZ2VuZGEgdG8gbWVhc3VyZSBsb3lhbHR5IHByb2dyYW0gdHJhY3Rpb24uXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXM6IFJlYWRvbmx5QXJyYXk8RXhwZXJpZW5jZVN1bW1hcnk+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIEluc3RydWN0b3IgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhaW5pbmcgMjAwKyBzdHVkZW50cyB0aHJvdWdoIDYgY291cnNlcyBzaW5jZSAyMDIyXCIsXG4gICAgdGFnczogW1wiZWR1Y2F0aW9uXCIsIFwibWVudG9yc2hpcFwiLCBcImN1cnJpY3VsdW0gZGVzaWduXCJdLFxuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgcmFobmVtYVN0dWRlbnRzQXNzZXQsIFwiU3R1ZGVudHMgYXQgUmFobmVtYSBDb2xsZWdlXCIpLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW9ycGggRGVzaWduIFN5c3RlbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWx0IGZyb20gc2NyYXRjaCwgdXNlZCBvdmVyIDc0MDAgdGltZXMgaW4gdGhlIEZpZ21hIENvbW11bml0eVwiLFxuICAgIHRhZ3M6IFtcIm9wZW4gc291cmNlXCIsIFwiZGVzaWduIHN5c3RlbVwiLCBcImNvbW11bml0eSBpbXBhY3RcIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgICBtb3JwaERlc2lnblN5c3RlbUFzc2V0LFxuICAgICAgXCJNb3JwaCBEZXNpZ24gU3lzdGVtIC0gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgKSxcbiAgICBsaW5rOiB7XG4gICAgICBsYWJlbDogXCJWaWV3IG9uIEZpZ21hIENvbW11bml0eVwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3d3dy5maWdtYS5jb20vY29tbXVuaXR5L2ZpbGUvMTA2OTI1OTMzMzQ2NzA4MzE4MlwiLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc29jaWFsTGlua3M6IFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz4gPSBbXG4gIHtcbiAgICBsYWJlbDogXCJMaW5rZWRJblwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkdpdEh1YlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21yc2FkcmlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB3aHlIaXJlTWU6IFdoeUhpcmVNZUNvbnRlbnQgPSB7XG4gIHdoYXRJQnJpbmc6IHtcbiAgICB0aXRsZTogXCJXaGF0IEkgQnJpbmdcIixcbiAgICBkaWZmZXJlbnRpYXRvcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQUktRmFtaWxpYXIgJiBUZWNobmljYWxcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCdWlsdCB0aGlzIHBvcnRmb2xpbyBmcm9tIHNjcmF0Y2ggd2l0aCBtb2Rlcm4gdG9vbHMuIEZvcm1lciBpT1MgZGV2ZWxvcGVyIHdpdGggZGVlcCB1bmRlcnN0YW5kaW5nIG9mIHRlY2huaWNhbCBjb25zdHJhaW50cyBhbmQgaW1wbGVtZW50YXRpb24gZGV0YWlscy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkRhdGEtRHJpdmVuIERlY2lzaW9uIE1ha2luZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkNvbXBsZXRlZCBhIDE3MC1ob3VyIGRhdGEgYW5hbHlzdCBjb3Vyc2UuIEkgdXNlIGRhdGEgdG8gdmFsaWRhdGUgZGVzaWduIGRlY2lzaW9ucyBhbmQgbWVhc3VyZSBpbXBhY3QsIG5vdCBqdXN0IGludHVpdGlvbi5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlVzZXIgUmV0ZW50aW9uIEV4cGVydGlzZSBhdCBTY2FsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlByb3ZlbiB0cmFjayByZWNvcmQgb2YgaW1wcm92aW5nIHVzZXIgcmV0ZW50aW9uIGFuZCBlbmdhZ2VtZW50IGZvciA0MCsgbWlsbGlvbiB1bmlxdWUgdXNlcnMuIENvLWxlZCBjcm9zcy1mdW5jdGlvbmFsIGluaXRpYXRpdmVzIHRoYXQgZHJpdmUgbG9uZy10ZXJtIHVzZXIgdmFsdWUgYW5kIGJ1c2luZXNzIGdyb3d0aC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlRlYWNoaW5nICYgTWVudG9yc2hpcCBMZWFkZXJzaGlwXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiM3JkIHllYXIgdGVhY2hpbmcgYXQgY29sbGVnZSwgbWVudG9yZWQgMjAwKyBzdHVkZW50cy4gVGhpcyB0cmFuc2xhdGVzIHRvIHN0cm9uZyBjb21tdW5pY2F0aW9uIHNraWxscywgY3VycmljdWx1bSBkZXNpZ24sIGFuZCB0aGUgYWJpbGl0eSB0byBlbGV2YXRlIHRlYW0gY2FwYWJpbGl0aWVzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ3Jvc3MtUHJvZHVjdCBFeHBlcmllbmNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRXhwZXJpZW5jZSBhY3Jvc3MgYm90aCBCMkMgYW5kIEIyQiBwcm9kdWN0cywgd2l0aCBhIGJhY2tncm91bmQgaW4gcHJvamVjdCBtYW5hZ2VtZW50LiBJIHVuZGVyc3RhbmQgYnVzaW5lc3Mgc3RyYXRlZ3kgYW5kIGNhbiBuYXZpZ2F0ZSBjb21wbGV4IHN0YWtlaG9sZGVyIGxhbmRzY2FwZXMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBZGFwdGFibGUgdG8gQW55IFRlYW0gU3RydWN0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRXhwZXJpZW5jZWQgaW4gZ2VuZXJhbGl6ZWQgdGVhbXMsIGVtYmVkZGVkIHByb2R1Y3QgdGVhbXMsIGFuZCBzb2xvIGRlc2lnbiByb2xlcyBhY3Jvc3MgQjJCIGFuZCBCMkMgcHJvZHVjdHMuIEkgYWRhcHQgbXkgd29ya2Zsb3cgdG8gZml0IGFueSBvcmdhbml6YXRpb25hbCBtb2RlbC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgd2hhdEltTG9va2luZ0Zvcjoge1xuICAgIHRpdGxlOiBcIldoYXQgSSdtIExvb2tpbmcgRm9yXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBzZWVraW5nIHNlbmlvciBwcm9kdWN0IGRlc2lnbiByb2xlcyB3aGVyZSBJIGNhbiBsZXZlcmFnZSBteSBkYXRhLWRyaXZlbiBhcHByb2FjaCBhbmQgdGVjaG5pY2FsIGJhY2tncm91bmQgdG8gZHJpdmUgbWVhc3VyYWJsZSBidXNpbmVzcyBpbXBhY3QuIEkgdGhyaXZlIGluIGNyb3NzLWZ1bmN0aW9uYWwgZW52aXJvbm1lbnRzIHdoZXJlIGRlc2lnbiwgZW5naW5lZXJpbmcsIGFuZCBidXNpbmVzcyBzdHJhdGVneSBpbnRlcnNlY3QsIGFuZCBJJ20gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyBzb2x1dGlvbnMgdGhhdCBkZWxpdmVyIHRhbmdpYmxlIHJlc3VsdHMuXCIsXG4gICAgYWN0aW9uOiB7XG4gICAgICBsYWJlbDogXCJWaWV3IE15IFJlc3VtZVwiLFxuICAgICAgaHJlZjogXCIvcmVzdW1lXCIsXG4gICAgfSxcbiAgfSxcbiAgcXVpY2tTdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjQwTStcIixcbiAgICAgIGxhYmVsOiBcIlVuaXF1ZSBVc2Vyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgICAgbGFiZWw6IFwiU3R1ZGVudHMgTWVudG9yZWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjMgWWVhcnNcIixcbiAgICAgIGxhYmVsOiBcIlRlYWNoaW5nIEV4cGVyaWVuY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIkIyQyAmIEIyQlwiLFxuICAgICAgbGFiZWw6IFwiUHJvZHVjdCBFeHBlcmllbmNlXCIsXG4gICAgfSxcbiAgXSxcbn07XG5cbi8vIFByb2ZpbGUgaW1hZ2VzXG5pbXBvcnQgbWFoZGlBaG1hZGl6YWRlaEltYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvdGVzdGltb25pYWxzL21haGRpLWFobWFkaXphZGVoLmpwZWdcIjtcbmltcG9ydCBuYWhpZEtJbWFnZSBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3Rlc3RpbW9uaWFscy9uYWhpZC1rLmpwZWdcIjtcbmltcG9ydCBzaGFkaVphcmVpSW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy90ZXN0aW1vbmlhbHMvc2hhZGktemFyZWkuanBlZ1wiO1xuaW1wb3J0IHNhZGVxQkltYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvdGVzdGltb25pYWxzL3NhZGVxLWIuanBlZ1wiO1xuaW1wb3J0IHNhZWVkQWJvbGdoYXNlbWlJbWFnZSBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3Rlc3RpbW9uaWFscy9zYWVlZC1hYm9sZ2hhc2VtaS5qcGdcIjtcbmltcG9ydCBob3NzZWluTWFobW91ZHZhbmRJbWFnZSBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3Rlc3RpbW9uaWFscy9ob3NzZWluLW1haG1vdWR2YW5kLmpwZWdcIjtcbmltcG9ydCBzaGF5YW5NZWhyYW5wb3VySW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy90ZXN0aW1vbmlhbHMvc2hheWFuLW1laHJhbnBvdXIuanBlZ1wiO1xuXG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxzOiBSZWFkb25seUFycmF5PFRlc3RpbW9uaWFsPiA9IFtcbiAge1xuICAgIHF1b3RlOlxuICAgICAgXCJNYXNpaCBTYWRyaSBoYXMgYmVlbiBhbiBpbmNyZWRpYmxlIG1lbnRvciB0aHJvdWdob3V0IG15IGxlYXJuaW5nIGpvdXJuZXkuIEhlIGNvbnNpc3RlbnRseSBzaGFyZWQgaGlzIHZhc3Qga25vd2xlZGdlIGFuZCB1c2VmdWwgcmVzb3VyY2VzLCBhbHdheXMgZW5jb3VyYWdpbmcgbWUgdG8gcHJhY3RpY2UgYW5kIGdyb3cuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIk1haGRpIEFobWFkaXphZGVoXCIsXG4gICAgICBwb3NpdGlvbjogXCJEZXNpZ24gU3lzdGVtIE1hbmFnZXJcIixcbiAgICAgIGNvbXBhbnk6IFwiU25hcHAhIE1hcmtldFwiLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIk1lbnRlZVwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYWhkaUFobWFkaXphZGVoSW1hZ2UsIFwiTWFoZGkgQWhtYWRpemFkZWhcIiksXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHF1b3RlOlxuICAgICAgXCJNYXNpaCBpcyBhbiBpbmNyZWRpYmx5IHRhbGVudGVkIHBlcnNvbiwgYSB2ZXJ5IG1hdHVyZSBhbmQgc2Vhc29uZWQgcHJvZmVzc2lvbmFsLCBhbmQgYSBncmVhdCBtZW50b3IgdG8gaGF2ZS4gSGUgaGFzIGEgd2FybSBhbmQgZW5nYWdpbmcgc3R5bGUsIGFuZCB0aGUgcXVhbGl0eSBvZiBoaXMgZGVzaWduIHdvcmsgYW5kIGlsbHVzdHJhdGlvbnMgaXMgZXhjZXB0aW9uYWwuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIk5haGlkIEsuXCIsXG4gICAgICBwb3NpdGlvbjogXCJQcm9kdWN0IE1hbmFnZXJcIixcbiAgICAgIGNvbXBhbnk6IFwiU2VydmljZSBNYW5hZ2VtZW50IHwgSVRTTVwiLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIkNvbGxlYWd1ZVwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBuYWhpZEtJbWFnZSwgXCJOYWhpZCBLLlwiKSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIkhpcyBwcm9ibGVtLXNvbHZpbmcsIGludGVyYWN0aW9uIHNraWxscyBhbmQgZXllIGZvciBkZXRhaWxzIGFyZSByZW1hcmthYmxlLiBJIGhhdmUgYWx3YXlzIGJlZW4gaW1wcmVzc2VkIGJ5IGhpcyBzZXZlcmUgbW90aXZhdGlvbiBhbmQgZGVlcCBrbm93bGVkZ2UgaW4gdXNlciBleHBlcmllbmNlLlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJTaGFkaSBaYXJlaVwiLFxuICAgICAgcG9zaXRpb246IFwiUmVzZWFyY2hlciAmIFVYL1VJIERlc2lnbmVyXCIsXG4gICAgICBjb21wYW55OiBcIlBoRCBDYW5kaWRhdGVcIixcbiAgICAgIHJlbGF0aW9uc2hpcDogXCJDbGFzc21hdGVcIixcbiAgICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgc2hhZGlaYXJlaUltYWdlLCBcIlNoYWRpIFphcmVpXCIpLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdW90ZTpcbiAgICAgIFwiSGUgaGFzIGEgY3VyaW91cyBtaW5kIGFuZCBjb25zaWRlcnMgcGVyc29uYWwgZGV2ZWxvcG1lbnQuIEluIGFkZGl0aW9uIHRvIHdoYXQgaXMgdGF1Z2h0IGluIHRoZSBjbGFzc3Jvb20sIGhlIGFsd2F5cyByZWZlcnMgdG8gbW9yZSByZXNvdXJjZXMgdG8gc29sdmUgcHJvYmxlbXMgaW4gdGhlIGJlc3QgcG9zc2libGUgd2F5LlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJTYWRlcSAuQlwiLFxuICAgICAgcG9zaXRpb246IFwiU2VuaW9yIGlPUyBFbmdpbmVlclwiLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIkNsYXNzbWF0ZVwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBzYWRlcUJJbWFnZSwgXCJTYWRlcSAuQlwiKSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIk1hc2loIGlzIG9uZSBvZiBteSBwcml2aWxlZ2VkIHN0dWRlbnRzIHdobyBpcyBkZXRlcm1pbmVkIHRvIGltcHJvdmUgaGlzIGtub3dsZWRnZSBhbmQgc2tpbGxzLiBIaXMgY29tbWl0bWVudCBhbmQgcHVuY3R1YWxpdHkgaW4gZGVsaXZlcmluZyBhc3NpZ25tZW50cyBhcmUgY29tbWVuZGFibGUuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIkFsaSBBemFkZVwiLFxuICAgICAgcG9zaXRpb246IFwiU29mdHdhcmUgRW5naW5lZXJcIixcbiAgICAgIGNvbXBhbnk6IFwiVXNlclRlc3RpbmdcIixcbiAgICAgIHJlbGF0aW9uc2hpcDogXCJGb3JtZXIgVGVhY2hlclwiLFxuICAgICAgLy8gaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBhbGlBemFkZUltYWdlLCBcIkFsaSBBemFkZVwiKSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIkl0IHdhcyBteSBmb3J0dW5lIHRvIHN0YXJ0IG15IHByb2Zlc3Npb25hbCBqb3VybmV5IHdpdGggYSBzeW1wYXRoZXRpYyBwZXJzb24gd2hvIGhhcyByZW1hcmthYmxlIHNraWxscyBpbiBlbXBhdGhpemluZyB3aXRoIGNvbGxlYWd1ZXMuIEhlIGFsc28ga25vd3MgaG93IHRvIHByaW9yaXRpemUgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbHMnIGludGVyZXN0cyBhbmQgYXNzaWducyB0aGVtIHRvIHRoZSB0ZWFtIG1lbWJlcnMuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgICBwb3NpdGlvbjogXCJQcmluY2lwYWwgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgICAgY29tcGFueTogXCJTeXN0ZW1zIFRoaW5rZXJcIixcbiAgICAgIHJlbGF0aW9uc2hpcDogXCJEaXJlY3QgUmVwb3J0XCIsXG4gICAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIHNhZWVkQWJvbGdoYXNlbWlJbWFnZSwgXCJTYWVlZCBBYm9sZ2hhc2VtaVwiKSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIldoZW4gaXQgY29tZXMgdG8gY29uc2lzdGVudCwgdG9wLXF1YWxpdHkgZGVzaWduLCBJdCBpcyBlbm91Z2ggdG8gaGFuZG92ZXIgY29uZnVzaW9ucyBhbmQgcmF3IGRhdGEgdG8gTWFzaWguIFdoaWxlIHdvcmtpbmcgdG9nZXRoZXIgaW4gdGhlIHByb2R1Y3QgdGVhbSBhdCBTZXRhcmUgYXZhbCBjb21wYW55LCBNYXNpaCdzIHNwZWNpYWx0aWVzIHdlcmUgaW5zdHJ1bWVudGFsIGluIHByb2JsZW0gZGVmaW5pdGlvbiwgZmluZGluZyBwcm9wZXIgc29sdXRpb25zLCBhbmQgZGVzaWduaW5nIGZsb3dzLlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJIb3NzZWluIE1haG1vdWR2YW5kXCIsXG4gICAgICBwb3NpdGlvbjogXCJQcm9kdWN0IERlc2lnbiBMZWFkXCIsXG4gICAgICBjb21wYW55OiBcIlNuYXBwUGF5XCIsXG4gICAgICByZWxhdGlvbnNoaXA6IFwiRm9ybWVyIE1hbmFnZXJcIixcbiAgICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgaG9zc2Vpbk1haG1vdWR2YW5kSW1hZ2UsIFwiSG9zc2VpbiBNYWhtb3VkdmFuZFwiKSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcXVvdGU6XG4gICAgICBcIk1vaGFtbWFkUmV6YSBpcyBhIHZlcnkgdGFsZW50ZWQgYW5kIHByb2Zlc3Npb25hbCBVWCBzcGVjaWFsaXN0IHdobyBtYWRlIGEgZ3JlYXQgYWRkaXRpb24gdG8gb3VyIGdyZWF0IGNvbXBhbnkuIE1vaGFtbWFkUmV6YSBiZWdhbiBjb250cmlidXRpbmcgb24gZGF5IG9uZSBieSBwb3J0aW5nIG91ciBleGlzdGluZyBwcm9kdWN0LlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJTaGF5YW4gTWVocmFucG91clwiLFxuICAgICAgcG9zaXRpb246IFwiU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICBjb21wYW55OiBcIkZsaXhcIixcbiAgICAgIHJlbGF0aW9uc2hpcDogXCJUZWFtIE1lbWJlclwiLFxuICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBzaGF5YW5NZWhyYW5wb3VySW1hZ2UsIFwiU2hheWFuIE1laHJhbnBvdXJcIiksXG4gICAgfSxcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPSB7XG4gIGFjdGl2ZUNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9wZW5SZWNhcDogKGlkOiBDYXNlU3R1ZHlJZCkgPT4gdm9pZDtcbiAgY2xvc2VSZWNhcDogKCkgPT4gdm9pZDtcbiAgaXNPcGVuOiBib29sZWFuO1xufTtcblxuY29uc3QgdXNlQ2FzZVN0dWR5UmVjYXAgPSAoY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT4pOiBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHlJZCwgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZF0gPSB1c2VTdGF0ZTxDYXNlU3R1ZHlJZCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGFjdGl2ZUNhc2VTdHVkeSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY2FzZVN0dWRpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRDYXNlU3R1ZHlJZCkgPz8gbnVsbCxcbiAgICBbY2FzZVN0dWRpZXMsIHNlbGVjdGVkQ2FzZVN0dWR5SWRdLFxuICApO1xuXG4gIGNvbnN0IG9wZW5SZWNhcCA9IHVzZUNhbGxiYWNrKChpZDogQ2FzZVN0dWR5SWQpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNsb3NlUmVjYXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZChudWxsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZlQ2FzZVN0dWR5LFxuICAgIG9wZW5SZWNhcCxcbiAgICBjbG9zZVJlY2FwLFxuICAgIGlzT3BlbjogYWN0aXZlQ2FzZVN0dWR5ICE9PSBudWxsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5UmVjYXA7XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBoZXJvLCBzb2NpYWxMaW5rcyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBob21lU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0gW1xuICB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiU2VhcmNoQWN0aW9uXCIsXG4gICAgICB0YXJnZXQ6IGAke3NpdGVVcmx9Lz9xPXtzZWFyY2hfdGVybV9zdHJpbmd9YCxcbiAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICBqb2JUaXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBoZXJvLnN1YnRpdGxlLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBpbWFnZTogaGVyby5wb3J0cmFpdC5zcmMsXG4gICAgc2FtZUFzOiBzb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IGxpbmsuaHJlZiksXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJQb3J0Zm9saW8gb2YgTWFzaWggU2FkcmksIGFuIGltcGFjdC1vcmllbnRlZCBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciBwcm90ZWN0aW5nIG1pbGxpb25zIG9mIHVzZXJzIHRocm91Z2ggdHJ1c3QgJiBzYWZldHksIGdyb3d0aCwgYW5kIGRlc2lnbiBzeXN0ZW1zLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9cIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogaGVyby5wb3J0cmFpdC5zcmMsXG4gICAgICBhbHQ6IGhlcm8ucG9ydHJhaXQuYWx0LFxuICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICBoZWlnaHQ6IDEyMDAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGhvbWVTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IENhc2VTdHVkaWVzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkaWVzU2VjdGlvblwiO1xuaW1wb3J0IENhc2VTdHVkeVJlY2FwRGlhbG9nIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVjYXBEaWFsb2dcIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IE1ldHJpY3NTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTWV0cmljc1NlY3Rpb25cIjtcbmltcG9ydCBUZXN0aW1vbmlhbHNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvVGVzdGltb25pYWxzU2VjdGlvblwiO1xuaW1wb3J0IFdoeUhpcmVNZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9XaHlIaXJlTWVTZWN0aW9uXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZGllcyxcbiAgaGVybyxcbiAgbWV0cmljcyxcbiAgdGVzdGltb25pYWxzLFxuICB3aHlIaXJlTWUsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeVJlY2FwIGZyb20gXCIuL2hvb2tzL3VzZUNhc2VTdHVkeVJlY2FwXCI7XG5pbXBvcnQgeyBob21lUGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZUNhc2VTdHVkeSwgY2xvc2VSZWNhcCwgb3BlblJlY2FwIH0gPSB1c2VDYXNlU3R1ZHlSZWNhcChjYXNlU3R1ZGllcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uaG9tZVBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2hlcm99IC8+XG4gICAgICA8V2h5SGlyZU1lU2VjdGlvbiBjb250ZW50PXt3aHlIaXJlTWV9IC8+XG4gICAgICA8TWV0cmljc1NlY3Rpb24gbWV0cmljcz17bWV0cmljc30gLz5cbiAgICAgIDxUZXN0aW1vbmlhbHNTZWN0aW9uIHRlc3RpbW9uaWFscz17dGVzdGltb25pYWxzfSAvPlxuICAgICAgPENhc2VTdHVkaWVzU2VjdGlvbiBjYXNlU3R1ZGllcz17Y2FzZVN0dWRpZXN9IG9uT3BlblJlY2FwPXtvcGVuUmVjYXB9IC8+XG4gICAgICA8Q29udGFjdFNlY3Rpb24gLz5cblxuICAgICAgPENhc2VTdHVkeVJlY2FwRGlhbG9nIGNhc2VTdHVkeT17YWN0aXZlQ2FzZVN0dWR5fSBvbkNsb3NlPXtjbG9zZVJlY2FwfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUsNERBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLHFCQUFxQjs7O0FDSHpCO0FBSEE7QUFJQSxJQUFlLGlFQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRywwQkFBMEI7Ozs7QUNnQjlCLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxTQUFTLE9BQU8sa0JBQXNDO0FB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
