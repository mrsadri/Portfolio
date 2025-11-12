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

// node_modules/@mui/icons-material/esm/ArrowBackIosRounded.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowBackIosRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime4.jsx("path", {
  d: "M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
}), "ArrowBackIosRounded");

// node_modules/@mui/icons-material/esm/ArrowForwardIosRounded.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowForwardIosRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime5.jsx("path", {
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
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ContactSection_default, {}, undefined, false, undefined, this),
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

//# debugId=106246C523072AC064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXZlbnRBdmFpbGFibGUuanMiLCAiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9JbXBhY3RTdGF0Q2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja0lvc1JvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZElvc1JvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9EaWZmZXJlbnRpYXRvcnNDYXJvdXNlbC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9XaHlIaXJlTWVTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXAudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL0hvbWVQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxM2gxMS4xN2wtNC44OCA0Ljg4Yy0uMzkuMzktLjM5IDEuMDMgMCAxLjQyczEuMDIuMzkgMS40MSAwbDYuNTktNi41OWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC02LjU4LTYuNmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTYuMTcgMTFINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMVwiXG59KSwgJ0Fycm93Rm9yd2FyZFJvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VTdHVkeUNhcmQgPSAoeyBjYXNlU3R1ZHksIGFjdGl2ZSA9IGZhbHNlLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZHlDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG5cbiAgY29uc3QgYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIwLCA0NSwgMTEwLCAwLjk4KSwgcmdiYSg1OCwgMTE4LCAyMjYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTcsIDc2LCAxNzAsIDAuODgpLCByZ2JhKDYwLCAxNTEsIDI1NSwgMC44MikpXCI7XG5cbiAgY29uc3QgaW5hY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjAsIDI4LCA1MiwgMC44MiksIHJnYmEoMTIsIDE4LCAzNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjk0KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjg4KSlcIjtcblxuICBjb25zdCBoZWFkaW5nQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIyNiwgMjM0LCAyNTUsIDAuOTUpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMTAsIDIyMCwgMjU1LCAwLjgyKVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgIDogXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjEyKVwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IGFjdGl2ZUJhY2tncm91bmQgOiBpbmFjdGl2ZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2JvcmRlckNvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBhY3RpdmUgPyBwYWxldHRlLmNvbW1vbi53aGl0ZSA6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IHRva2Vucy5zaGFkb3cubGV2ZWwzIDogdG9rZW5zLnNoYWRvdy5sZXZlbDIsXG4gICAgICAgIHRyYW5zaXRpb246IHRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiB0b2tlbnMuc2hhZG93LmxldmVsMyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYjogMyB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxODksIDIwNCwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhc2Uge2Nhc2VTdHVkeS5udW1iZXJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMTQsIDIyNCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBhY3RpdmUgPyBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcImluaGVyaXRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2FwfVxuICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUmVjYXBcbiAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IENhc2VTdHVkeUNhcmQgZnJvbSBcIi4vQ2FzZVN0dWR5Q2FyZFwiO1xuXG50eXBlIENhc2VTdHVkaWVzU2VjdGlvblByb3BzID0ge1xuICBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcbiAgb25PcGVuUmVjYXA6IChpZDogQ2FzZVN0dWR5SWQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZGllc1NlY3Rpb24gPSAoeyBjYXNlU3R1ZGllcywgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWRpZXNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwiY2FzZS1zdHVkaWVzXCJcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+Q2FzZSBzdHVkaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICB7Y2FzZVN0dWRpZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8Q2FzZVN0dWR5Q2FyZFxuICAgICAgICAgICAgICBjYXNlU3R1ZHk9e2l0ZW19XG4gICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICBvbk9wZW5SZWNhcD17KCkgPT4gb25PcGVuUmVjYXAoaXRlbS5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWRpZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXBEaWFsb2dQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENhc2VTdHVkeVJlY2FwRGlhbG9nID0gKHsgY2FzZVN0dWR5LCBvbkNsb3NlIH06IENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMpID0+IChcbiAgPERpYWxvZ1xuICAgIG9wZW49e0Jvb2xlYW4oY2FzZVN0dWR5KX1cbiAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICA+XG4gICAge2Nhc2VTdHVkeSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIj57Y2FzZVN0dWR5LnJlY2FwLmhlYWRsaW5lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezEuNX0gc3g9e3sgcGw6IDIgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnJlY2FwLmJ1bGxldHMubWFwKChidWxsZXQpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e2J1bGxldH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IG10PXszfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVlcCBkaXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC8+XG4gICAgKSA6IG51bGx9XG4gIDwvRGlhbG9nPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVjYXBEaWFsb2c7XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNTMgMTEuMDYgMTUuNDcgMTBsLTQuODggNC44OC0yLjEyLTIuMTItMS4wNiAxLjA2TDEwLjU5IDE3ek0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMm0wIDE2SDVWOGgxNHpcIlxufSksICdFdmVudEF2YWlsYWJsZScpOyIsCiAgICAiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG50eXBlIENvbnRhY3RBY3Rpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdmFyaWFudD86IEJ1dHRvblByb3BzW1widmFyaWFudFwiXTtcbiAgY29sb3I/OiBCdXR0b25Qcm9wc1tcImNvbG9yXCJdO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbn07XG5cbnR5cGUgTGV0c1RhbGtTZWN0aW9uUHJvcHMgPSB7XG4gIGlkPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaW1hcnlBY3Rpb246IENvbnRhY3RBY3Rpb247XG4gIHNlY29uZGFyeUFjdGlvbnM/OiBSZWFkb25seUFycmF5PENvbnRhY3RBY3Rpb24+O1xufTtcblxuY29uc3QgZ2V0RXh0ZXJuYWxMaW5rUHJvcHMgPSAoaHJlZjogc3RyaW5nKSA9PiB7XG4gIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgfSBhcyBjb25zdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB1bmRlZmluZWQsXG4gICAgcmVsOiB1bmRlZmluZWQsXG4gIH0gYXMgY29uc3Q7XG59O1xuXG5jb25zdCBMZXRzVGFsa1NlY3Rpb24gPSAoe1xuICBpZCxcbiAgdGl0bGUgPSBcIkxldCdzIFRhbGsgYW5kIFdvcmsgVG9nZXRoZXJcIixcbiAgZGVzY3JpcHRpb24gPSBcIkknbSBhbHdheXMgb3BlbiB0byBkaXNjdXNzaW5nIG5ldyBwcm9qZWN0cywgY3JlYXRpdmUgaWRlYXMsIG9yIG9wcG9ydHVuaXRpZXMgdG8gYmUgcGFydCBvZiB5b3VyIHZpc2lvbi5cIixcbiAgcHJpbWFyeUFjdGlvbixcbiAgc2Vjb25kYXJ5QWN0aW9ucyA9IFtdLFxufTogTGV0c1RhbGtTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgaWQ9e2lkfSBzeD17eyBweTogeyB4czogNCwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmRcbiAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB7IHhzOiBcIjE2cHhcIiwgbWQ6IFwiMjRweFwiIH0sXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDUgfSxcbiAgICAgICAgICBweTogeyB4czogMywgbWQ6IDUgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHBiOiAwLCBweDogeyB4czogMCwgbWQ6IDAgfSB9fT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMSwgbWQ6IDEuNSB9fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIiBcbiAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMS41cmVtXCIsIG1kOiBcIjJyZW1cIiB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIwLjg3NXJlbVwiLCBtZDogXCIxcmVtXCIgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB0OiB7IHhzOiAyLjUsIG1kOiA0IH0sIHB4OiAwLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IHsgeHM6IDEuNSwgbWQ6IDIgfSB9fT5cbiAgICAgICAgICB7LyogUHJpbWFyeSBBY3Rpb24gLSBGdWxsIFdpZHRoICovfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17cHJpbWFyeUFjdGlvbi5ocmVmfVxuICAgICAgICAgICAgc3RhcnRJY29uPXtwcmltYXJ5QWN0aW9uLmljb259XG4gICAgICAgICAgICB2YXJpYW50PXtwcmltYXJ5QWN0aW9uLnZhcmlhbnQgPz8gXCJjb250YWluZWRcIn1cbiAgICAgICAgICAgIGNvbG9yPXtwcmltYXJ5QWN0aW9uLmNvbG9yID8/IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgIHN4PXt7IG1pbkhlaWdodDogeyB4czogXCI0OHB4XCIsIG1kOiBcIjU2cHhcIiB9IH19XG4gICAgICAgICAgICB0YXJnZXQ9e3ByaW1hcnlBY3Rpb24udGFyZ2V0ID8/IGdldEV4dGVybmFsTGlua1Byb3BzKHByaW1hcnlBY3Rpb24uaHJlZikudGFyZ2V0fVxuICAgICAgICAgICAgcmVsPXtwcmltYXJ5QWN0aW9uLnJlbCA/PyBnZXRFeHRlcm5hbExpbmtQcm9wcyhwcmltYXJ5QWN0aW9uLmhyZWYpLnJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUFjdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogU2Vjb25kYXJ5IEFjdGlvbnMgLSBHcm91cGVkIFJvdyAqL31cbiAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEuNSB9fVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlBY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxQcm9wcyA9IGdldEV4dGVybmFsTGlua1Byb3BzKGFjdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2FjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17YWN0aW9uLmljb259XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2FjdGlvbi52YXJpYW50ID8/IFwib3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2FjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt7IHhzOiB0cnVlLCBtZDogZmFsc2UgfX1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiBcIjQ4cHhcIiwgbWQ6IFwiNDhweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIxIDEgMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXthY3Rpb24udGFyZ2V0ID8/IGV4dGVybmFsUHJvcHMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICByZWw9e2FjdGlvbi5yZWwgPz8gZXh0ZXJuYWxQcm9wcy5yZWx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgdHlwZSB7IENvbnRhY3RBY3Rpb24sIExldHNUYWxrU2VjdGlvblByb3BzIH07XG5leHBvcnQgZGVmYXVsdCBMZXRzVGFsa1NlY3Rpb247XG5cbiIsCiAgICAiaW1wb3J0IEVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQgRXZlbnRBdmFpbGFibGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V2ZW50QXZhaWxhYmxlXCI7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1RlbGVncmFtXCI7XG5pbXBvcnQgTGV0c1RhbGtTZWN0aW9uIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcblxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY29uZGFyeUFjdGlvbnM6IENvbnRhY3RBY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgaHJlZjogXCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgICAgIGljb246IDxFbWFpbFJvdW5kZWRJY29uIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQm9vayBhIHNlc3Npb25cIixcbiAgICAgIGhyZWY6IFwiL2NvbnRhY3QjbWVudG9yc2hpcFwiLFxuICAgICAgaWNvbjogPEV2ZW50QXZhaWxhYmxlSWNvbiAvPixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExldHNUYWxrU2VjdGlvblxuICAgICAgaWQ9XCJjb250YWN0XCJcbiAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgbGFiZWw6IFwiRGlyZWN0IG1lc3NhZ2VcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICAgICAgICBpY29uOiA8VGVsZWdyYW1JY29uIC8+LFxuICAgICAgfX1cbiAgICAgIHNlY29uZGFyeUFjdGlvbnM9e3NlY29uZGFyeUFjdGlvbnN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RTZWN0aW9uO1xuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEhlcm9Db250ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBjZXJ0aWZpZWRCYWRnZVNyYyBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2JhZGdlcy9jZXJ0aWZpZWQtYmFkZ2UucG5nXCI7XG5pbXBvcnQgeyBzbW9vdGhTY3JvbGxUb0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc21vb3RoU2Nyb2xsXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogSGVyb0NvbnRlbnQ7XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGhhbmRsZVByaW1hcnlDdGFDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhlcm8uY3RhUHJpbWFyeS5zY3JvbGxUb0lkID8/IGhlcm8uY3RhUHJpbWFyeS50bztcbiAgICBpZiAoIXRhcmdldElkIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRJZC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZElkID0gdGFyZ2V0SWQuc3RhcnRzV2l0aChcIiNcIikgPyB0YXJnZXRJZC5zbGljZSgxKSA6IHRhcmdldElkO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW5pdGl6ZWRJZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfVxuICB9LCBbaGVyby5jdGFQcmltYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhUHJpbWFyeS50b10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlY29uZGFyeUN0YUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldElkID0gaGVyby5jdGFTZWNvbmRhcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVNlY29uZGFyeS50bztcbiAgICBpZiAoIXRhcmdldElkIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRJZC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZElkID0gdGFyZ2V0SWQuc3RhcnRzV2l0aChcIiNcIikgPyB0YXJnZXRJZC5zbGljZSgxKSA6IHRhcmdldElkO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW5pdGl6ZWRJZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfVxuICB9LCBbaGVyby5jdGFTZWNvbmRhcnkuc2Nyb2xsVG9JZCwgaGVyby5jdGFTZWNvbmRhcnkudG9dKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA5IH0sXG4gICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgID8gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAxNSUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4xMiksIHRyYW5zcGFyZW50IDU4JSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSgzNCwgODQsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQgNTIlKVwiXG4gICAgICAgICAgICA6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxOCUgMTUlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xOCksIHRyYW5zcGFyZW50IDYwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzglIDE4JSwgcmdiYSg0OCwgODYsIDE3NiwgMC4xOCksIHRyYW5zcGFyZW50IDU1JSlcIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBzcGFjaW5nPXt7IHhzOiA0LCBtZDogMy41IH19XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcInN0cmV0Y2hcIiB9LFxuICAgICAgICAgICAgcHg6IHsgeHM6IDAsIG1kOiAyIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17Mi41fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IG1kOiBcIjMwJVwiIH0sXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjMwJVwiIH0sXG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyB4czogMjYwLCBzbTogMzAwLCBtZDogMzIwIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICBzcmM9e2hlcm8ucG9ydHJhaXQuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAxOHB4IDQwcHggcmdiYSgxNywgMzYsIDgzLCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2NlcnRpZmllZEJhZGdlU3JjfVxuICAgICAgICAgICAgICAgIGFsdD1cIkNlcnRpZmllZCBiYWRnZVwiXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiB7IHhzOiAtMTgsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IC0xOCwgbWQ6IC0yNCB9LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDEyMCwgbWQ6IDE1MCB9LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLjI1LCBtZDogMi43NSB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjQsIG1kOiAxLjggfX0gc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMSwgc206IDEuNSB9fVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e3sgeHM6IFwiY2VudGVyXCIsIHNtOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtoZXJvLmdyZWV0aW5nfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDAuMyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGlzcGxheVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMDUsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAxNWVtXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHsgeHM6IFwiMC4wMWVtXCIsIG1kOiBcIjAuMDA1ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiODUlXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8udGl0bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxLjA1cmVtXCIsIG1kOiBcIjEuMTJyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42NSwgbWQ6IDEuNyB9LFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5zcGxpdChcIiB8IFwiKVswXX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5pbmNsdWRlcyhcIiB8IFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC45NXJlbVwiLCBtZDogXCIxcmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42LCBtZDogMS42NSB9LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlLnNwbGl0KFwiIHwgXCIpLnNsaWNlKDEpLmpvaW4oXCIgfCBcIil9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7LyogS2V5IFZhbHVlIFBpbGxzICovfVxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcHQ6IDAuNSxcbiAgICAgICAgICAgICAgICAgIGdhcDogMSxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiNDArIE1pbGxpb24gVXNlcnNcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4xNSlcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIwLjc1cmVtXCIsIG1kOiBcIjAuODEyNXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQjJCICYgQjJDXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEtRHJpdmVuXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkFJLUZhbWlsaWFyXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlY2huaWNhbCAmIE1hbmFnZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4xNSlcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIwLjc1cmVtXCIsIG1kOiBcIjAuODEyNXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS40LCBzbTogMS44IH19XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgc3g9e3sgcHQ6IHsgeHM6IDAuNSwgbWQ6IDAuNzUgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiB7IHNtOiAyMjAgfSB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByaW1hcnlDdGFDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vjb25kYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVNlY29uZGFyeS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1ldHJpY1N1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBJbXBhY3RTdGF0Q2FyZFByb3BzID0gTWV0cmljU3VtbWFyeTtcblxuY29uc3QgSW1wYWN0U3RhdENhcmQgPSAoeyB2YWx1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH06IEltcGFjdFN0YXRDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxIH19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNlwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0NhcmRDb250ZW50PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBhY3RTdGF0Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgSW1wYWN0U3RhdENhcmQgZnJvbSBcIi4vSW1wYWN0U3RhdENhcmRcIjtcblxudHlwZSBNZXRyaWNzU2VjdGlvblByb3BzID0ge1xuICBtZXRyaWNzOiBSZWFkb25seUFycmF5PE1ldHJpY1N1bW1hcnk+O1xufTtcblxuY29uc3QgTWV0cmljc1NlY3Rpb24gPSAoeyBtZXRyaWNzIH06IE1ldHJpY3NTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPlJlY2VudCBJbXBhY3QgSSBIYXZlIE1hZGU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgTWVhc3VyYWJsZSBvdXRjb21lcyBmcm9tIG15IGRlc2lnbiB3b3JrXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDMuNSB9fT5cbiAgICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDYsIG1kOiAzIH19IGtleT17dGl0bGV9PlxuICAgICAgICAgICAgICA8SW1wYWN0U3RhdENhcmQgdmFsdWU9e3ZhbHVlfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNi42MiAyLjk5Yy0uNDktLjQ5LTEuMjgtLjQ5LTEuNzcgMEw2LjU0IDExLjNjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOC4zMSA4LjMxYy40OS40OSAxLjI4LjQ5IDEuNzcgMHMuNDktMS4yOCAwLTEuNzdMOS4zOCAxMmw3LjI1LTcuMjVjLjQ4LS40OC40OC0xLjI4LS4wMS0xLjc2XCJcbn0pLCAnQXJyb3dCYWNrSW9zUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuMzggMjEuMDFjLjQ5LjQ5IDEuMjguNDkgMS43NyAwbDguMzEtOC4zMWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDkuMTUgMi45OGMtLjQ5LS40OS0xLjI4LS40OS0xLjc3IDBzLS40OSAxLjI4IDAgMS43N0wxNC42MiAxMmwtNy4yNSA3LjI1Yy0uNDguNDgtLjQ4IDEuMjguMDEgMS43NlwiXG59KSwgJ0Fycm93Rm9yd2FyZElvc1JvdW5kZWQnKTsiLAogICAgImltcG9ydCBBcnJvd0JhY2tJb3NSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgSWNvbkJ1dHRvbixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIERpZmZlcmVudGlhdG9yID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxEaWZmZXJlbnRpYXRvcj47XG59O1xuXG5jb25zdCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbCA9ICh7IGl0ZW1zIH06IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbY2FuU2Nyb2xsTGVmdCwgc2V0Q2FuU2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjYW5TY3JvbGxSaWdodCwgc2V0Q2FuU2Nyb2xsUmlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2hlY2tTY3JvbGxhYmlsaXR5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGgsIGNsaWVudFdpZHRoIH0gPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudDtcbiAgICBzZXRDYW5TY3JvbGxMZWZ0KHNjcm9sbExlZnQgPiAwKTtcbiAgICBzZXRDYW5TY3JvbGxSaWdodChzY3JvbGxMZWZ0IDwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIDEwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbCA9IHVzZUNhbGxiYWNrKFxuICAgIChkaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiKSA9PiB7XG4gICAgICBpZiAoIXNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik/LmNsaWVudFdpZHRoID8/IDMyMDtcbiAgICAgIGNvbnN0IHNjcm9sbEFtb3VudCA9IGNhcmRXaWR0aCArIDI0OyAvLyBjYXJkIHdpZHRoICsgZ2FwXG5cbiAgICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEJ5KHtcbiAgICAgICAgbGVmdDogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IC1zY3JvbGxBbW91bnQgOiBzY3JvbGxBbW91bnQsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENoZWNrIHNjcm9sbGFiaWxpdHkgYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgc2V0VGltZW91dChjaGVja1Njcm9sbGFiaWxpdHksIDMwMCk7XG4gICAgfSxcbiAgICBbY2hlY2tTY3JvbGxhYmlsaXR5XSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2hlY2tTY3JvbGxhYmlsaXR5KCk7XG4gIH0sIFtjaGVja1Njcm9sbGFiaWxpdHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrU2Nyb2xsYWJpbGl0eSgpO1xuICAgIC8vIEFsc28gY2hlY2sgb24gd2luZG93IHJlc2l6ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrU2Nyb2xsYWJpbGl0eSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrU2Nyb2xsYWJpbGl0eSk7XG4gIH0sIFtjaGVja1Njcm9sbGFiaWxpdHldKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgey8qIE5hdmlnYXRpb24gQnV0dG9ucyAqL31cbiAgICAgIHtjYW5TY3JvbGxMZWZ0ICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwoXCJsZWZ0XCIpfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgbGVmdDogeyB4czogLTEyLCBtZDogLTE2IH0sXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICAgIGhlaWdodDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNjcm9sbCBsZWZ0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0JhY2tJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKX1cblxuICAgICAge2NhblNjcm9sbFJpZ2h0ICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwoXCJyaWdodFwiKX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHJpZ2h0OiB7IHhzOiAtMTIsIG1kOiAtMTYgfSxcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCIwIDRweCAxMnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xKVwiXG4gICAgICAgICAgICAgICAgOiBcIjAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiA0MCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2Nyb2xsIHJpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgey8qIFNjcm9sbGFibGUgQ29udGFpbmVyICovfVxuICAgICAgPEJveFxuICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBnYXA6IDMsXG4gICAgICAgICAgb3ZlcmZsb3dYOiBcImF1dG9cIixcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgc2Nyb2xsU25hcFR5cGU6IFwieCBtYW5kYXRvcnlcIixcbiAgICAgICAgICBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aDogXCJub25lXCIsIC8vIEZpcmVmb3hcbiAgICAgICAgICBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLCAvLyBJRS9FZGdlXG4gICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIiwgLy8gQ2hyb21lL1NhZmFyaVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHg6IHsgeHM6IDEsIG1kOiAyIH0sXG4gICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgLy8gSGlkZSBzY3JvbGxiYXIgYnV0IGFsbG93IHNjcm9sbGluZ1xuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzNDAgfSxcbiAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IDIwMCwgbWQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTgsIDE4LCAxOCwgMC42KVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgOHB4IDI0cHggcmdiYSgxNywgMzYsIDgzLCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIjAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHA6IHsgeHM6IDIsIG1kOiAyLjUgfSwgaGVpZ2h0OiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGZvbnRXZWlnaHQ9ezYwMH0gc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMXJlbVwiLCBtZDogXCIxLjEyNXJlbVwiIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGxpbmVIZWlnaHQ9ezEuNn0gc3g9e3sgZmxleEdyb3c6IDEsIGZvbnRTaXplOiB7IHhzOiBcIjAuODc1cmVtXCIsIG1kOiBcIjAuOTM3NXJlbVwiIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbDtcblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsIGZyb20gXCIuL0RpZmZlcmVudGlhdG9yc0Nhcm91c2VsXCI7XG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IHR5cGUgeyBXaHlIaXJlTWVDb250ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgV2h5SGlyZU1lU2VjdGlvblByb3BzID0ge1xuICBjb250ZW50OiBXaHlIaXJlTWVDb250ZW50O1xufTtcblxuY29uc3QgV2h5SGlyZU1lU2VjdGlvbiA9ICh7IGNvbnRlbnQgfTogV2h5SGlyZU1lU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB0OiB7IHhzOiA0LCBtZDogNiB9LCBwYjogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XG4gICAgICAgICAgey8qIFdoYXQgSSBCcmluZyBTZWN0aW9uICovfVxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e2NvbnRlbnQud2hhdElCcmluZy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBLZXkgZGlmZmVyZW50aWF0b3JzIHRoYXQgc2V0IG1lIGFwYXJ0XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8RGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwgaXRlbXM9e2NvbnRlbnQud2hhdElCcmluZy5kaWZmZXJlbnRpYXRvcnN9IC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIHsvKiBRdWljayBTdGF0cyBTZWN0aW9uICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB5OiA0LFxuICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMTEsIDIzNSwgMC4wOCkgMCUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4wOCkgMTAwJSlcIlxuICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTUpIDAlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xNSkgMTAwJSlcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtjb250ZW50LnF1aWNrU3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDYsIG1kOiAzIH19IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD17NzAwfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGZvbnRXZWlnaHQ9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHsvKiBXaGF0IEknbSBMb29raW5nIEZvciBTZWN0aW9uICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB5OiA0LFxuICAgICAgICAgICAgICBweDogeyB4czogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjA2KVwiXG4gICAgICAgICAgICAgICAgICA6IFwicmdiYSg0OCwgODYsIDE3NiwgMC4xMilcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGxpbmVIZWlnaHQ9ezEuOH0+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaHlIaXJlTWVTZWN0aW9uO1xuXG4iLAogICAgImltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENhc2VTdHVkeVN1bW1hcnksXG4gIEV4cGVyaWVuY2VTdW1tYXJ5LFxuICBIZXJvQ29udGVudCxcbiAgTWV0cmljU3VtbWFyeSxcbiAgU29jaWFsTGluayxcbiAgV2h5SGlyZU1lQ29udGVudCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBoZXJvOiBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IFwiSGVsbG8g8J+Ri/Cfj7wsIEkgYW1cIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICB0aXRsZTogXCJhbiBpbXBhY3Qtb3JpZW50ZWQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgc3VidGl0bGU6XG4gICAgXCJGb3JtZXIgaU9TIGRldmVsb3BlciB0dXJuZWQgZGVzaWduZXIsIGJ1aWxkaW5nIGRhdGEtZHJpdmVuIGV4cGVyaWVuY2VzIHRoYXQgZHJpdmUgdXNlciByZXRlbnRpb24gYW5kIGJ1c2luZXNzIGdyb3d0aCBmb3IgNDArIG1pbGxpb24gdXNlcnMgYWNyb3NzIEIyQiBhbmQgQjJDIHByb2R1Y3RzXCIsXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZHlcIixcbiAgICBzY3JvbGxUb0lkOiBcImNhc2Utc3R1ZGllc1wiLFxuICB9LFxuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogXCJUbyBiZSBpbiB0b3VjaFwiLFxuICAgIHNjcm9sbFRvSWQ6IFwiY29udGFjdFwiLFxuICB9LFxuICBwb3J0cmFpdDogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIGhlcm9Qb3J0cmFpdEFzc2V0LCBcIk1hc2loIFNhZHJpIC0gUHJvZHVjdCBEZXNpZ25lclwiLCB7XG4gICAgd2lkdGg6IDEyMDAsXG4gICAgaGVpZ2h0OiAxMjAwLFxuICB9KSxcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzOiBSZWFkb25seUFycmF5PE1ldHJpY1N1bW1hcnk+ID0gW1xuICB7XG4gICAgdmFsdWU6IFwiNjAlXCIsXG4gICAgdGl0bGU6IFwiUmVkdWN0aW9uIGluIGhhcmFzc21lbnQgaW5jaWRlbnRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvLWxlZCBEaXZhcuKAmXMgc2VjdXJlIGNhbGwgc3lzdGVtIHdpdGggVHJ1c3QgJiBTYWZldHkgdG8gc2FmZWd1YXJkIDIuMU0gd2Vla2x5IGNhbGxlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4LjNLK1wiLFxuICAgIHRpdGxlOiBcIlByb2R1Y3QgdGVhbXMgdXNpbmcgTW9ycGhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgYW4gb3BlbiBkZXNpZ24gc3lzdGVtIHRoYXQgcG93ZXJzIEZpZ21hIGhhbmRvZmZzIGFuZCBhY2NlbGVyYXRlcyBoaWdoLXF1YWxpdHkgcmVsZWFzZXMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCIyMDArXCIsXG4gICAgdGl0bGU6IFwiRGVzaWduZXJzIG1lbnRvcmVkXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRlc2lnbmVkIHByb2plY3QtYmFzZWQgcHJvZ3JhbXMgYXQgUmFobmVtYSBDb2xsZWdlIHRvIGhlbHAgZW1lcmdpbmcgZGVzaWduZXJzIGxhdW5jaCBjYXJlZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiODAlXCIsXG4gICAgdGl0bGU6IFwiTGlmdCBpbiBxdWFsaWZpZWQgbGVhZHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVkZXNpZ25lZCBQZXJzb2zigJlzIHNpZ24tdXAgZnVubmVsIGVuZC10by1lbmQsIHJlbW92aW5nIGZyaWN0aW9uIGFuZCBib29zdGluZyBsZWFkIGdlbmVyYXRpb24gaW4gMyBtb250aHMuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT4gPSBbXG4gIHtcbiAgICBpZDogXCJkaXZhclwiLFxuICAgIG51bWJlcjogXCIwMVwiLFxuICAgIHRhZzogXCJJbXByb3ZpbmcgVXNlciBTYWZldHlcIixcbiAgICB0aXRsZTogXCJUaGUgU3Rvcnkgb2YgUmVkdWNpbmcgSGFyYXNzbWVudCBieSA2MCVcIixcbiAgICBwbGF0Zm9ybTogXCJvbiBEaXZhclwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIkNsYXNzaWZpZWQgQWRzIFBsYXRmb3JtXCIsXG4gICAgc3RhdDogXCJBIGZlYXR1cmUgdXNlZCBieSAyLjEgbWlsbGlvbiB1c2VycyBwZXIgd2Vla1wiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInRydXN0ICYgc2FmZXR5XCIsIFwiaW1wYWN0IGF0IHNjYWxlXCJdLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6IFwiSG93IGNyb3NzLWZ1bmN0aW9uYWwgZ3VhcmRyYWlscyBoZWxwZWQgRGl2YXIgcmVkdWNlIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIkNvLWxlZCBhIHRhc2sgZm9yY2UgYnJpZGdpbmcgVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBhbmQgRW5naW5lZXJpbmcuXCIsXG4gICAgICAgIFwiU2hpcHBlZCBkeW5hbWljIHZvaWNlLW1hc2tpbmcgd2l0aCBhYnVzZSBkZXRlY3Rpb24gZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMuXCIsXG4gICAgICAgIFwiU3Rvb2QgdXAgcGxheWJvb2tzIGZvciBtb2RlcmF0aW9uIG9wcyB0byBtb25pdG9yIHJlcGVhdCBvZmZlbmRlcnMuXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUtYXZhbFwiLFxuICAgIG51bWJlcjogXCIwMlwiLFxuICAgIHRhZzogXCJCb29zdGluZyBVc2VyIEVuZ2FnZW1lbnRcIixcbiAgICB0aXRsZTogXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzXCIsXG4gICAgcGxhdGZvcm06IFwiYXQgU2V0YXJlIEF2YWwgQ28uXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiUmV0ZW50aW9uIHN0cmF0ZWd5XCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwicmV0ZW50aW9uIHN0cmF0ZWd5XCIsIFwiY3Jvc3MtZnVuY3Rpb25hbCBsZWFkZXJzaGlwXCJdLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBvbmJvYXJkaW5nIHRvIGRvdWJsZSByZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiTWFwcGVkIGEgbmV3IGxpZmVjeWNsZSBtb2RlbCB0aWVkIHRvIGRhdGEtYmFja2VkIGV4cGVyaW1lbnRhdGlvbi5cIixcbiAgICAgICAgXCJSZWZpbmVkIGFjdGl2YXRpb24gZmxvd3MgdG8gc3BvdGxpZ2h0IHZhbHVlIHByb3BzIHdpdGhpbiBmaXJzdCBzZXNzaW9uLlwiLFxuICAgICAgICBcIkNvLWNyZWF0ZWQgYSBsZWFybmluZyBhZ2VuZGEgdG8gbWVhc3VyZSBsb3lhbHR5IHByb2dyYW0gdHJhY3Rpb24uXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXM6IFJlYWRvbmx5QXJyYXk8RXhwZXJpZW5jZVN1bW1hcnk+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIEluc3RydWN0b3IgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhaW5pbmcgMjAwKyBzdHVkZW50cyB0aHJvdWdoIDYgY291cnNlcyBzaW5jZSAyMDIyXCIsXG4gICAgdGFnczogW1wiZWR1Y2F0aW9uXCIsIFwibWVudG9yc2hpcFwiLCBcImN1cnJpY3VsdW0gZGVzaWduXCJdLFxuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgcmFobmVtYVN0dWRlbnRzQXNzZXQsIFwiU3R1ZGVudHMgYXQgUmFobmVtYSBDb2xsZWdlXCIpLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW9ycGggRGVzaWduIFN5c3RlbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWx0IGZyb20gc2NyYXRjaCwgdXNlZCBvdmVyIDc0MDAgdGltZXMgaW4gdGhlIEZpZ21hIENvbW11bml0eVwiLFxuICAgIHRhZ3M6IFtcIm9wZW4gc291cmNlXCIsIFwiZGVzaWduIHN5c3RlbVwiLCBcImNvbW11bml0eSBpbXBhY3RcIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgICBtb3JwaERlc2lnblN5c3RlbUFzc2V0LFxuICAgICAgXCJNb3JwaCBEZXNpZ24gU3lzdGVtIC0gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgKSxcbiAgICBsaW5rOiB7XG4gICAgICBsYWJlbDogXCJWaWV3IG9uIEZpZ21hIENvbW11bml0eVwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3d3dy5maWdtYS5jb20vY29tbXVuaXR5L2ZpbGUvMTA2OTI1OTMzMzQ2NzA4MzE4MlwiLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc29jaWFsTGlua3M6IFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz4gPSBbXG4gIHtcbiAgICBsYWJlbDogXCJMaW5rZWRJblwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkdpdEh1YlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21yc2FkcmlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB3aHlIaXJlTWU6IFdoeUhpcmVNZUNvbnRlbnQgPSB7XG4gIHdoYXRJQnJpbmc6IHtcbiAgICB0aXRsZTogXCJXaGF0IEkgQnJpbmdcIixcbiAgICBkaWZmZXJlbnRpYXRvcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQUktRmFtaWxpYXIgJiBUZWNobmljYWxcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCdWlsdCB0aGlzIHBvcnRmb2xpbyBmcm9tIHNjcmF0Y2ggd2l0aCBtb2Rlcm4gdG9vbHMuIEZvcm1lciBpT1MgZGV2ZWxvcGVyIHdpdGggZGVlcCB1bmRlcnN0YW5kaW5nIG9mIHRlY2huaWNhbCBjb25zdHJhaW50cyBhbmQgaW1wbGVtZW50YXRpb24gZGV0YWlscy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkRhdGEtRHJpdmVuIERlY2lzaW9uIE1ha2luZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkNvbXBsZXRlZCBhIDE3MC1ob3VyIGRhdGEgYW5hbHlzdCBjb3Vyc2UuIEkgdXNlIGRhdGEgdG8gdmFsaWRhdGUgZGVzaWduIGRlY2lzaW9ucyBhbmQgbWVhc3VyZSBpbXBhY3QsIG5vdCBqdXN0IGludHVpdGlvbi5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlVzZXIgUmV0ZW50aW9uIEV4cGVydGlzZSBhdCBTY2FsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlByb3ZlbiB0cmFjayByZWNvcmQgb2YgaW1wcm92aW5nIHVzZXIgcmV0ZW50aW9uIGFuZCBlbmdhZ2VtZW50IGZvciA0MCsgbWlsbGlvbiB1bmlxdWUgdXNlcnMuIENvLWxlZCBjcm9zcy1mdW5jdGlvbmFsIGluaXRpYXRpdmVzIHRoYXQgZHJpdmUgbG9uZy10ZXJtIHVzZXIgdmFsdWUgYW5kIGJ1c2luZXNzIGdyb3d0aC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlRlYWNoaW5nICYgTWVudG9yc2hpcCBMZWFkZXJzaGlwXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiM3JkIHllYXIgdGVhY2hpbmcgYXQgY29sbGVnZSwgbWVudG9yZWQgMjAwKyBzdHVkZW50cy4gVGhpcyB0cmFuc2xhdGVzIHRvIHN0cm9uZyBjb21tdW5pY2F0aW9uIHNraWxscywgY3VycmljdWx1bSBkZXNpZ24sIGFuZCB0aGUgYWJpbGl0eSB0byBlbGV2YXRlIHRlYW0gY2FwYWJpbGl0aWVzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ3Jvc3MtUHJvZHVjdCBFeHBlcmllbmNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRXhwZXJpZW5jZSBhY3Jvc3MgYm90aCBCMkMgYW5kIEIyQiBwcm9kdWN0cywgd2l0aCBhIGJhY2tncm91bmQgaW4gcHJvamVjdCBtYW5hZ2VtZW50LiBJIHVuZGVyc3RhbmQgYnVzaW5lc3Mgc3RyYXRlZ3kgYW5kIGNhbiBuYXZpZ2F0ZSBjb21wbGV4IHN0YWtlaG9sZGVyIGxhbmRzY2FwZXMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBZGFwdGFibGUgdG8gQW55IFRlYW0gU3RydWN0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRXhwZXJpZW5jZWQgaW4gZ2VuZXJhbGl6ZWQgdGVhbXMsIGVtYmVkZGVkIHByb2R1Y3QgdGVhbXMsIGFuZCBzb2xvIGRlc2lnbiByb2xlcyBhY3Jvc3MgQjJCIGFuZCBCMkMgcHJvZHVjdHMuIEkgYWRhcHQgbXkgd29ya2Zsb3cgdG8gZml0IGFueSBvcmdhbml6YXRpb25hbCBtb2RlbC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgd2hhdEltTG9va2luZ0Zvcjoge1xuICAgIHRpdGxlOiBcIldoYXQgSSdtIExvb2tpbmcgRm9yXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBzZWVraW5nIHNlbmlvciBwcm9kdWN0IGRlc2lnbiByb2xlcyB3aGVyZSBJIGNhbiBsZXZlcmFnZSBteSBkYXRhLWRyaXZlbiBhcHByb2FjaCBhbmQgdGVjaG5pY2FsIGJhY2tncm91bmQgdG8gZHJpdmUgbWVhc3VyYWJsZSBidXNpbmVzcyBpbXBhY3QuIEkgdGhyaXZlIGluIGNyb3NzLWZ1bmN0aW9uYWwgZW52aXJvbm1lbnRzIHdoZXJlIGRlc2lnbiwgZW5naW5lZXJpbmcsIGFuZCBidXNpbmVzcyBzdHJhdGVneSBpbnRlcnNlY3QsIGFuZCBJJ20gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyBzb2x1dGlvbnMgdGhhdCBkZWxpdmVyIHRhbmdpYmxlIHJlc3VsdHMuXCIsXG4gICAgYWN0aW9uOiB7XG4gICAgICBsYWJlbDogXCJWaWV3IE15IFJlc3VtZVwiLFxuICAgICAgaHJlZjogXCIvcmVzdW1lXCIsXG4gICAgfSxcbiAgfSxcbiAgcXVpY2tTdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjQwTStcIixcbiAgICAgIGxhYmVsOiBcIlVuaXF1ZSBVc2Vyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgICAgbGFiZWw6IFwiU3R1ZGVudHMgTWVudG9yZWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjMgWWVhcnNcIixcbiAgICAgIGxhYmVsOiBcIlRlYWNoaW5nIEV4cGVyaWVuY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIkIyQyAmIEIyQlwiLFxuICAgICAgbGFiZWw6IFwiUHJvZHVjdCBFeHBlcmllbmNlXCIsXG4gICAgfSxcbiAgXSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPSB7XG4gIGFjdGl2ZUNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9wZW5SZWNhcDogKGlkOiBDYXNlU3R1ZHlJZCkgPT4gdm9pZDtcbiAgY2xvc2VSZWNhcDogKCkgPT4gdm9pZDtcbiAgaXNPcGVuOiBib29sZWFuO1xufTtcblxuY29uc3QgdXNlQ2FzZVN0dWR5UmVjYXAgPSAoY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT4pOiBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHlJZCwgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZF0gPSB1c2VTdGF0ZTxDYXNlU3R1ZHlJZCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGFjdGl2ZUNhc2VTdHVkeSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY2FzZVN0dWRpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRDYXNlU3R1ZHlJZCkgPz8gbnVsbCxcbiAgICBbY2FzZVN0dWRpZXMsIHNlbGVjdGVkQ2FzZVN0dWR5SWRdLFxuICApO1xuXG4gIGNvbnN0IG9wZW5SZWNhcCA9IHVzZUNhbGxiYWNrKChpZDogQ2FzZVN0dWR5SWQpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNsb3NlUmVjYXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZChudWxsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZlQ2FzZVN0dWR5LFxuICAgIG9wZW5SZWNhcCxcbiAgICBjbG9zZVJlY2FwLFxuICAgIGlzT3BlbjogYWN0aXZlQ2FzZVN0dWR5ICE9PSBudWxsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5UmVjYXA7XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBoZXJvLCBzb2NpYWxMaW5rcyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBob21lU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0gW1xuICB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiU2VhcmNoQWN0aW9uXCIsXG4gICAgICB0YXJnZXQ6IGAke3NpdGVVcmx9Lz9xPXtzZWFyY2hfdGVybV9zdHJpbmd9YCxcbiAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICBqb2JUaXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBoZXJvLnN1YnRpdGxlLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBpbWFnZTogaGVyby5wb3J0cmFpdC5zcmMsXG4gICAgc2FtZUFzOiBzb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IGxpbmsuaHJlZiksXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJQb3J0Zm9saW8gb2YgTWFzaWggU2FkcmksIGFuIGltcGFjdC1vcmllbnRlZCBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciBwcm90ZWN0aW5nIG1pbGxpb25zIG9mIHVzZXJzIHRocm91Z2ggdHJ1c3QgJiBzYWZldHksIGdyb3d0aCwgYW5kIGRlc2lnbiBzeXN0ZW1zLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9cIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogaGVyby5wb3J0cmFpdC5zcmMsXG4gICAgICBhbHQ6IGhlcm8ucG9ydHJhaXQuYWx0LFxuICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICBoZWlnaHQ6IDEyMDAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGhvbWVTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IENhc2VTdHVkaWVzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkaWVzU2VjdGlvblwiO1xuaW1wb3J0IENhc2VTdHVkeVJlY2FwRGlhbG9nIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVjYXBEaWFsb2dcIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IE1ldHJpY3NTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTWV0cmljc1NlY3Rpb25cIjtcbmltcG9ydCBXaHlIaXJlTWVTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvV2h5SGlyZU1lU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWRpZXMsXG4gIGhlcm8sXG4gIG1ldHJpY3MsXG4gIHdoeUhpcmVNZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5UmVjYXAgZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXBcIjtcbmltcG9ydCB7IGhvbWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlQ2FzZVN0dWR5LCBjbG9zZVJlY2FwLCBvcGVuUmVjYXAgfSA9IHVzZUNhc2VTdHVkeVJlY2FwKGNhc2VTdHVkaWVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5ob21lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17aGVyb30gLz5cbiAgICAgIDxXaHlIaXJlTWVTZWN0aW9uIGNvbnRlbnQ9e3doeUhpcmVNZX0gLz5cbiAgICAgIDxNZXRyaWNzU2VjdGlvbiBtZXRyaWNzPXttZXRyaWNzfSAvPlxuICAgICAgPENhc2VTdHVkaWVzU2VjdGlvbiBjYXNlU3R1ZGllcz17Y2FzZVN0dWRpZXN9IG9uT3BlblJlY2FwPXtvcGVuUmVjYXB9IC8+XG4gICAgICA8Q29udGFjdFNlY3Rpb24gLz5cblxuICAgICAgPENhc2VTdHVkeVJlY2FwRGlhbG9nIGNhc2VTdHVkeT17YWN0aXZlQ2FzZVN0dWR5fSBvbkNsb3NlPXtjbG9zZVJlY2FwfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBh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QUNULFFBQVEsR0FBRztBQUFBLE1BQ1gsZUFBZTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE1BQU0sS0FBSztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsYUFBYSxLQUFLO0FBQUEsSUFDbEIsS0FBSztBQUFBLElBQ0wsT0FBTyxLQUFLLFNBQVM7QUFBQSxJQUNyQixRQUFRLFlBQVksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJO0FBQUEsRUFDN0M7QUFDRjtBQUVPLElBQU0sbUJBQWlDO0FBQUEsRUFDNUMsT0FBTztBQUFBLEVBQ1AsYUFDRTtBQUFBLEVBQ0YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFNBQVM7QUFBQSxNQUNuQixLQUFLLEtBQUssU0FBUztBQUFBLE1BQ25CLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOzs7O0FDN0JBLElBQU0sV0FBVyxNQUFNO0FBQUEsRUFDckIsUUFBUSxpQkFBaUIsWUFBWSxjQUFjLDBCQUFrQixXQUFXO0FBQUEsRUFFaEYsdUJBQ0U7QUFBQSxjQVVFO0FBQUEsc0JBVEEseUJBQUMsYUFBRDtBQUFBLFdBQVM7QUFBQSxTQUFULGlDQUEyQjtBQUFBLHNCQUUzQix5QkFBQyxxQkFBRDtBQUFBLFFBQWE7QUFBQSxTQUFiLGlDQUF5QjtBQUFBLHNCQUN6Qix5QkFBQywwQkFBRDtBQUFBLFFBQWtCLFNBQVM7QUFBQSxTQUEzQixpQ0FBc0M7QUFBQSxzQkFDdEMseUJBQUMsd0JBQUQ7QUFBQSxRQUFnQjtBQUFBLFNBQWhCLGlDQUFrQztBQUFBLHNCQUNsQyx5QkFBQyw0QkFBRDtBQUFBLFFBQW9CO0FBQUEsUUFBMEIsYUFBYTtBQUFBLFNBQTNELGlDQUFzRTtBQUFBLHNCQUN0RSx5QkFBQyx3QkFBRCxxQ0FBZ0I7QUFBQSxzQkFFaEIseUJBQUMsOEJBQUQ7QUFBQSxRQUFzQixXQUFXO0FBQUEsUUFBaUIsU0FBUztBQUFBLFNBQTNELGlDQUF1RTtBQUFBO0FBQUEsS0FUekUsZ0NBVUU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICIxMDYyNDZDNTIzMDcyQUMwNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
