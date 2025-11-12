import {
  GitHub_default,
  Telegram_default,
  smoothScrollToElement
} from "./chunk-7s1qrsc1.js";
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
var ICON_MAP = {
  LinkedIn: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(LinkedIn_default, {}, undefined, false, undefined, this),
  GitHub: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(GitHub_default, {}, undefined, false, undefined, this)
};
var ContactSection = ({ socialLinks }) => {
  const baseActions = socialLinks.map((link) => ({
    label: link.label,
    href: link.href,
    icon: ICON_MAP[link.label] ?? undefined
  }));
  const secondaryActions = [
    ...baseActions,
    {
      label: "Direct message",
      href: "https://t.me/masihsadri",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Telegram_default, {}, undefined, false, undefined, this)
    },
    {
      label: "Set an appointment",
      href: "/contact#mentorship",
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(EventAvailable_default, {}, undefined, false, undefined, this)
    }
  ];
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

//# debugId=D58BB25006B6019464756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXZlbnRBdmFpbGFibGUuanMiLCAiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9JbXBhY3RTdGF0Q2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja0lvc1JvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZElvc1JvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9EaWZmZXJlbnRpYXRvcnNDYXJvdXNlbC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9XaHlIaXJlTWVTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXAudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL0hvbWVQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxM2gxMS4xN2wtNC44OCA0Ljg4Yy0uMzkuMzktLjM5IDEuMDMgMCAxLjQyczEuMDIuMzkgMS40MSAwbDYuNTktNi41OWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC02LjU4LTYuNmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTYuMTcgMTFINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMVwiXG59KSwgJ0Fycm93Rm9yd2FyZFJvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VTdHVkeUNhcmQgPSAoeyBjYXNlU3R1ZHksIGFjdGl2ZSA9IGZhbHNlLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZHlDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG5cbiAgY29uc3QgYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIwLCA0NSwgMTEwLCAwLjk4KSwgcmdiYSg1OCwgMTE4LCAyMjYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTcsIDc2LCAxNzAsIDAuODgpLCByZ2JhKDYwLCAxNTEsIDI1NSwgMC44MikpXCI7XG5cbiAgY29uc3QgaW5hY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjAsIDI4LCA1MiwgMC44MiksIHJnYmEoMTIsIDE4LCAzNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjk0KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjg4KSlcIjtcblxuICBjb25zdCBoZWFkaW5nQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIyNiwgMjM0LCAyNTUsIDAuOTUpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMTAsIDIyMCwgMjU1LCAwLjgyKVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgIDogXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjEyKVwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IGFjdGl2ZUJhY2tncm91bmQgOiBpbmFjdGl2ZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2JvcmRlckNvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBhY3RpdmUgPyBwYWxldHRlLmNvbW1vbi53aGl0ZSA6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IHRva2Vucy5zaGFkb3cubGV2ZWwzIDogdG9rZW5zLnNoYWRvdy5sZXZlbDIsXG4gICAgICAgIHRyYW5zaXRpb246IHRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiB0b2tlbnMuc2hhZG93LmxldmVsMyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYjogMyB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxODksIDIwNCwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhc2Uge2Nhc2VTdHVkeS5udW1iZXJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMTQsIDIyNCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBhY3RpdmUgPyBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcImluaGVyaXRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2FwfVxuICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUmVjYXBcbiAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IENhc2VTdHVkeUNhcmQgZnJvbSBcIi4vQ2FzZVN0dWR5Q2FyZFwiO1xuXG50eXBlIENhc2VTdHVkaWVzU2VjdGlvblByb3BzID0ge1xuICBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcbiAgb25PcGVuUmVjYXA6IChpZDogQ2FzZVN0dWR5SWQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZGllc1NlY3Rpb24gPSAoeyBjYXNlU3R1ZGllcywgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWRpZXNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwiY2FzZS1zdHVkaWVzXCJcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+Q2FzZSBzdHVkaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICB7Y2FzZVN0dWRpZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8Q2FzZVN0dWR5Q2FyZFxuICAgICAgICAgICAgICBjYXNlU3R1ZHk9e2l0ZW19XG4gICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICBvbk9wZW5SZWNhcD17KCkgPT4gb25PcGVuUmVjYXAoaXRlbS5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWRpZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXBEaWFsb2dQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENhc2VTdHVkeVJlY2FwRGlhbG9nID0gKHsgY2FzZVN0dWR5LCBvbkNsb3NlIH06IENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMpID0+IChcbiAgPERpYWxvZ1xuICAgIG9wZW49e0Jvb2xlYW4oY2FzZVN0dWR5KX1cbiAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICA+XG4gICAge2Nhc2VTdHVkeSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIj57Y2FzZVN0dWR5LnJlY2FwLmhlYWRsaW5lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezEuNX0gc3g9e3sgcGw6IDIgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnJlY2FwLmJ1bGxldHMubWFwKChidWxsZXQpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e2J1bGxldH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IG10PXszfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVlcCBkaXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC8+XG4gICAgKSA6IG51bGx9XG4gIDwvRGlhbG9nPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVjYXBEaWFsb2c7XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNTMgMTEuMDYgMTUuNDcgMTBsLTQuODggNC44OC0yLjEyLTIuMTItMS4wNiAxLjA2TDEwLjU5IDE3ek0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMm0wIDE2SDVWOGgxNHpcIlxufSksICdFdmVudEF2YWlsYWJsZScpOyIsCiAgICAiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG50eXBlIENvbnRhY3RBY3Rpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdmFyaWFudD86IEJ1dHRvblByb3BzW1widmFyaWFudFwiXTtcbiAgY29sb3I/OiBCdXR0b25Qcm9wc1tcImNvbG9yXCJdO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbn07XG5cbnR5cGUgTGV0c1RhbGtTZWN0aW9uUHJvcHMgPSB7XG4gIGlkPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaW1hcnlBY3Rpb246IENvbnRhY3RBY3Rpb247XG4gIHNlY29uZGFyeUFjdGlvbnM/OiBSZWFkb25seUFycmF5PENvbnRhY3RBY3Rpb24+O1xufTtcblxuY29uc3QgZ2V0RXh0ZXJuYWxMaW5rUHJvcHMgPSAoaHJlZjogc3RyaW5nKSA9PiB7XG4gIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgfSBhcyBjb25zdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB1bmRlZmluZWQsXG4gICAgcmVsOiB1bmRlZmluZWQsXG4gIH0gYXMgY29uc3Q7XG59O1xuXG5jb25zdCBMZXRzVGFsa1NlY3Rpb24gPSAoe1xuICBpZCxcbiAgdGl0bGUgPSBcIkxldCdzIFRhbGsgYW5kIFdvcmsgVG9nZXRoZXJcIixcbiAgZGVzY3JpcHRpb24gPSBcIkknbSBhbHdheXMgb3BlbiB0byBkaXNjdXNzaW5nIG5ldyBwcm9qZWN0cywgY3JlYXRpdmUgaWRlYXMsIG9yIG9wcG9ydHVuaXRpZXMgdG8gYmUgcGFydCBvZiB5b3VyIHZpc2lvbi5cIixcbiAgcHJpbWFyeUFjdGlvbixcbiAgc2Vjb25kYXJ5QWN0aW9ucyA9IFtdLFxufTogTGV0c1RhbGtTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgaWQ9e2lkfSBzeD17eyBweTogeyB4czogNCwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmRcbiAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB7IHhzOiBcIjE2cHhcIiwgbWQ6IFwiMjRweFwiIH0sXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDUgfSxcbiAgICAgICAgICBweTogeyB4czogMywgbWQ6IDUgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHBiOiAwLCBweDogeyB4czogMCwgbWQ6IDAgfSB9fT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMSwgbWQ6IDEuNSB9fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIiBcbiAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMS41cmVtXCIsIG1kOiBcIjJyZW1cIiB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIwLjg3NXJlbVwiLCBtZDogXCIxcmVtXCIgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB0OiB7IHhzOiAyLjUsIG1kOiA0IH0sIHB4OiAwLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IHsgeHM6IDEuNSwgbWQ6IDIgfSB9fT5cbiAgICAgICAgICB7LyogUHJpbWFyeSBBY3Rpb24gLSBGdWxsIFdpZHRoICovfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17cHJpbWFyeUFjdGlvbi5ocmVmfVxuICAgICAgICAgICAgc3RhcnRJY29uPXtwcmltYXJ5QWN0aW9uLmljb259XG4gICAgICAgICAgICB2YXJpYW50PXtwcmltYXJ5QWN0aW9uLnZhcmlhbnQgPz8gXCJjb250YWluZWRcIn1cbiAgICAgICAgICAgIGNvbG9yPXtwcmltYXJ5QWN0aW9uLmNvbG9yID8/IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgIHN4PXt7IG1pbkhlaWdodDogeyB4czogXCI0OHB4XCIsIG1kOiBcIjU2cHhcIiB9IH19XG4gICAgICAgICAgICB0YXJnZXQ9e3ByaW1hcnlBY3Rpb24udGFyZ2V0ID8/IGdldEV4dGVybmFsTGlua1Byb3BzKHByaW1hcnlBY3Rpb24uaHJlZikudGFyZ2V0fVxuICAgICAgICAgICAgcmVsPXtwcmltYXJ5QWN0aW9uLnJlbCA/PyBnZXRFeHRlcm5hbExpbmtQcm9wcyhwcmltYXJ5QWN0aW9uLmhyZWYpLnJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUFjdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogU2Vjb25kYXJ5IEFjdGlvbnMgLSBHcm91cGVkIFJvdyAqL31cbiAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEuNSB9fVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlBY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxQcm9wcyA9IGdldEV4dGVybmFsTGlua1Byb3BzKGFjdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2FjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17YWN0aW9uLmljb259XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2FjdGlvbi52YXJpYW50ID8/IFwib3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2FjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt7IHhzOiB0cnVlLCBtZDogZmFsc2UgfX1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiBcIjQ4cHhcIiwgbWQ6IFwiNDhweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIxIDEgMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXthY3Rpb24udGFyZ2V0ID8/IGV4dGVybmFsUHJvcHMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICByZWw9e2FjdGlvbi5yZWwgPz8gZXh0ZXJuYWxQcm9wcy5yZWx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgdHlwZSB7IENvbnRhY3RBY3Rpb24sIExldHNUYWxrU2VjdGlvblByb3BzIH07XG5leHBvcnQgZGVmYXVsdCBMZXRzVGFsa1NlY3Rpb247XG5cbiIsCiAgICAiaW1wb3J0IEVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQgRXZlbnRBdmFpbGFibGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V2ZW50QXZhaWxhYmxlXCI7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HaXRIdWJcIjtcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua2VkSW5cIjtcbmltcG9ydCBUZWxlZ3JhbUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVGVsZWdyYW1cIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGV0c1RhbGtTZWN0aW9uIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgU29jaWFsTGluayB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENvbnRhY3RTZWN0aW9uUHJvcHMgPSB7XG4gIHNvY2lhbExpbmtzOiBSZWFkb25seUFycmF5PFNvY2lhbExpbms+O1xufTtcblxuY29uc3QgSUNPTl9NQVA6IFJlY29yZDxzdHJpbmcsIFJlYWN0Tm9kZT4gPSB7XG4gIExpbmtlZEluOiA8TGlua2VkSW5JY29uIC8+LFxuICBHaXRIdWI6IDxHaXRIdWJJY29uIC8+LFxufTtcblxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSAoeyBzb2NpYWxMaW5rcyB9OiBDb250YWN0U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGJhc2VBY3Rpb25zOiBDb250YWN0QWN0aW9uW10gPSBzb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+ICh7XG4gICAgbGFiZWw6IGxpbmsubGFiZWwsXG4gICAgaHJlZjogbGluay5ocmVmLFxuICAgIGljb246IElDT05fTUFQW2xpbmsubGFiZWxdID8/IHVuZGVmaW5lZCxcbiAgfSkpO1xuXG4gIGNvbnN0IHNlY29uZGFyeUFjdGlvbnM6IENvbnRhY3RBY3Rpb25bXSA9IFtcbiAgICAuLi5iYXNlQWN0aW9ucyxcbiAgICB7XG4gICAgICBsYWJlbDogXCJEaXJlY3QgbWVzc2FnZVwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICAgICAgaWNvbjogPFRlbGVncmFtSWNvbiAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlNldCBhbiBhcHBvaW50bWVudFwiLFxuICAgICAgaHJlZjogXCIvY29udGFjdCNtZW50b3JzaGlwXCIsXG4gICAgICBpY29uOiA8RXZlbnRBdmFpbGFibGVJY29uIC8+LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGV0c1RhbGtTZWN0aW9uXG4gICAgICBpZD1cImNvbnRhY3RcIlxuICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICBsYWJlbDogXCJzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICAgICAgICBocmVmOiBcIm1haWx0bzpzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICAgICAgICBpY29uOiA8RW1haWxSb3VuZGVkSWNvbiAvPixcbiAgICAgIH19XG4gICAgICBzZWNvbmRhcnlBY3Rpb25zPXtzZWNvbmRhcnlBY3Rpb25zfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0U2VjdGlvbjtcbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7IEF2YXRhciwgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBIZXJvQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgY2VydGlmaWVkQmFkZ2VTcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9iYWRnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ1wiO1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsVG9FbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Ntb290aFNjcm9sbFwiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IEhlcm9Db250ZW50O1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVQcmltYXJ5Q3RhQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBoZXJvLmN0YVByaW1hcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVByaW1hcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhUHJpbWFyeS5zY3JvbGxUb0lkLCBoZXJvLmN0YVByaW1hcnkudG9dKTtcblxuICBjb25zdCBoYW5kbGVTZWNvbmRhcnlDdGFDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQgPz8gaGVyby5jdGFTZWNvbmRhcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH1cbiAgfSwgW2hlcm8uY3RhU2Vjb25kYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhU2Vjb25kYXJ5LnRvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTglIDE1JSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTgpLCB0cmFuc3BhcmVudCA2MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc4JSAxOCUsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTgpLCB0cmFuc3BhcmVudCA1NSUpXCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogNCwgbWQ6IDMuNSB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJzdHJldGNoXCIgfSxcbiAgICAgICAgICAgIHB4OiB7IHhzOiAwLCBtZDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDMyMCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2hlcm8ucG9ydHJhaXQuYWx0fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMThweCA0MHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtjZXJ0aWZpZWRCYWRnZVNyY31cbiAgICAgICAgICAgICAgICBhbHQ9XCJDZXJ0aWZpZWQgYmFkZ2VcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogeyB4czogLTE4LCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAtMTgsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAxMjAsIG1kOiAxNTAgfSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17eyB4czogMi4yNSwgbWQ6IDIuNzUgfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS40LCBtZDogMS44IH19IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEsIHNtOiAxLjUgfX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcImNlbnRlclwiLCBzbTogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjMsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImRpc3BsYXlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjA1LFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMTVlbVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5uYW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7IHhzOiBcIjAuMDFlbVwiLCBtZDogXCIwLjAwNWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjg1JVwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjEycmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNjUsIG1kOiAxLjcgfSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuc3BsaXQoXCIgfCBcIilbMF19XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGUuaW5jbHVkZXMoXCIgfCBcIikgJiYgKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuOTVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHsgeHM6IDEuNiwgbWQ6IDEuNjUgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5zcGxpdChcIiB8IFwiKS5zbGljZSgxKS5qb2luKFwiIHwgXCIpfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgey8qIEtleSBWYWx1ZSBQaWxscyAqL31cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHB0OiAwLjUsXG4gICAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIjQwKyBNaWxsaW9uIFVzZXJzXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkIyQiAmIEIyQ1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhLURyaXZlblwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBSS1GYW1pbGlhclwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjAuNzVyZW1cIiwgbWQ6IFwiMC44MTI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWNobmljYWwgJiBNYW5hZ2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNCwgc206IDEuOCB9fVxuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHN4PXt7IHB0OiB7IHhzOiAwLjUsIG1kOiAwLjc1IH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17eyBtaW5XaWR0aDogeyBzbTogMjIwIH0gfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmltYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFQcmltYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlY29uZGFyeUN0YUNsaWNrfVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFTZWNvbmRhcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IE1ldHJpY1N1bW1hcnk7XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wYWN0U3RhdENhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0cmljU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEltcGFjdFN0YXRDYXJkIGZyb20gXCIuL0ltcGFjdFN0YXRDYXJkXCI7XG5cbnR5cGUgTWV0cmljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5Pjtcbn07XG5cbmNvbnN0IE1ldHJpY3NTZWN0aW9uID0gKHsgbWV0cmljcyB9OiBNZXRyaWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9LCBwdDogeyBtZDogNiB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5SZWNlbnQgSW1wYWN0IEkgSGF2ZSBNYWRlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIE1lYXN1cmFibGUgb3V0Y29tZXMgZnJvbSBteSBkZXNpZ24gd29ya1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAge21ldHJpY3MubWFwKCh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA2LCBtZDogMyB9fSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNjIgMi45OWMtLjQ5LS40OS0xLjI4LS40OS0xLjc3IDBMNi41NCAxMS4zYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDguMzEgOC4zMWMuNDkuNDkgMS4yOC40OSAxLjc3IDBzLjQ5LTEuMjggMC0xLjc3TDkuMzggMTJsNy4yNS03LjI1Yy40OC0uNDguNDgtMS4yOC0uMDEtMS43NlwiXG59KSwgJ0Fycm93QmFja0lvc1JvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03LjM4IDIxLjAxYy40OS40OSAxLjI4LjQ5IDEuNzcgMGw4LjMxLTguMzFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MUw5LjE1IDIuOThjLS40OS0uNDktMS4yOC0uNDktMS43NyAwcy0uNDkgMS4yOCAwIDEuNzdMMTQuNjIgMTJsLTcuMjUgNy4yNWMtLjQ4LjQ4LS40OCAxLjI4LjAxIDEuNzZcIlxufSksICdBcnJvd0ZvcndhcmRJb3NSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQXJyb3dCYWNrSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrSW9zUm91bmRlZFwiO1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1JvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIEljb25CdXR0b24sXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBEaWZmZXJlbnRpYXRvciA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWxQcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8RGlmZmVyZW50aWF0b3I+O1xufTtcblxuY29uc3QgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwgPSAoeyBpdGVtcyB9OiBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2NhblNjcm9sbExlZnQsIHNldENhblNjcm9sbExlZnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2FuU2Nyb2xsUmlnaHQsIHNldENhblNjcm9sbFJpZ2h0XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNoZWNrU2Nyb2xsYWJpbGl0eSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBjb25zdCB7IHNjcm9sbExlZnQsIHNjcm9sbFdpZHRoLCBjbGllbnRXaWR0aCB9ID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgc2V0Q2FuU2Nyb2xsTGVmdChzY3JvbGxMZWZ0ID4gMCk7XG4gICAgc2V0Q2FuU2Nyb2xsUmlnaHQoc2Nyb2xsTGVmdCA8IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSAxMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGwgPSB1c2VDYWxsYmFjayhcbiAgICAoZGlyZWN0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xuICAgICAgaWYgKCFzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjYXJkV2lkdGggPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpPy5jbGllbnRXaWR0aCA/PyAzMjA7XG4gICAgICBjb25zdCBzY3JvbGxBbW91bnQgPSBjYXJkV2lkdGggKyAyNDsgLy8gY2FyZCB3aWR0aCArIGdhcFxuXG4gICAgICBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxCeSh7XG4gICAgICAgIGxlZnQ6IGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyAtc2Nyb2xsQW1vdW50IDogc2Nyb2xsQW1vdW50LFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayBzY3JvbGxhYmlsaXR5IGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgIHNldFRpbWVvdXQoY2hlY2tTY3JvbGxhYmlsaXR5LCAzMDApO1xuICAgIH0sXG4gICAgW2NoZWNrU2Nyb2xsYWJpbGl0eV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNoZWNrU2Nyb2xsYWJpbGl0eSgpO1xuICB9LCBbY2hlY2tTY3JvbGxhYmlsaXR5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Njcm9sbGFiaWxpdHkoKTtcbiAgICAvLyBBbHNvIGNoZWNrIG9uIHdpbmRvdyByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja1Njcm9sbGFiaWxpdHkpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja1Njcm9sbGFiaWxpdHkpO1xuICB9LCBbY2hlY2tTY3JvbGxhYmlsaXR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uIEJ1dHRvbnMgKi99XG4gICAgICB7Y2FuU2Nyb2xsTGVmdCAmJiAoXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsKFwibGVmdFwiKX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIGxlZnQ6IHsgeHM6IC0xMiwgbWQ6IC0xNiB9LFxuICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgNHB4IDEycHggcmdiYSgxNywgMzYsIDgzLCAwLjEpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiB7IHhzOiA0MCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgbGVmdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHtjYW5TY3JvbGxSaWdodCAmJiAoXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsKFwicmlnaHRcIil9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICByaWdodDogeyB4czogLTEyLCBtZDogLTE2IH0sXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICAgIGhlaWdodDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNjcm9sbCByaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBTY3JvbGxhYmxlIENvbnRhaW5lciAqL31cbiAgICAgIDxCb3hcbiAgICAgICAgcmVmPXtzY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZ2FwOiAzLFxuICAgICAgICAgIG92ZXJmbG93WDogXCJhdXRvXCIsXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcImhpZGRlblwiLFxuICAgICAgICAgIHNjcm9sbFNuYXBUeXBlOiBcInggbWFuZGF0b3J5XCIsXG4gICAgICAgICAgc2Nyb2xsQmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLCAvLyBGaXJlZm94XG4gICAgICAgICAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIiwgLy8gSUUvRWRnZVxuICAgICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsIC8vIENocm9tZS9TYWZhcmlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB4OiB7IHhzOiAxLCBtZDogMiB9LFxuICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGJ1dCBhbGxvdyBzY3JvbGxpbmdcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogMjYwLCBzbTogMzAwLCBtZDogMzQwIH0sXG4gICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAyMDAsIG1kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE4LCAxOCwgMTgsIDAuNilcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2VcIixcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTRweClcIixcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDhweCAyNHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBwOiB7IHhzOiAyLCBtZDogMi41IH0sIGhlaWdodDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBmb250V2VpZ2h0PXs2MDB9IHN4PXt7IGZvbnRTaXplOiB7IHhzOiBcIjFyZW1cIiwgbWQ6IFwiMS4xMjVyZW1cIiB9IH19PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBsaW5lSGVpZ2h0PXsxLjZ9IHN4PXt7IGZsZXhHcm93OiAxLCBmb250U2l6ZTogeyB4czogXCIwLjg3NXJlbVwiLCBtZDogXCIwLjkzNzVyZW1cIiB9IH19PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWw7XG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbCBmcm9tIFwiLi9EaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFwiO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgV2h5SGlyZU1lQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFdoeUhpcmVNZVNlY3Rpb25Qcm9wcyA9IHtcbiAgY29udGVudDogV2h5SGlyZU1lQ29udGVudDtcbn07XG5cbmNvbnN0IFdoeUhpcmVNZVNlY3Rpb24gPSAoeyBjb250ZW50IH06IFdoeUhpcmVNZVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBwdDogeyB4czogNCwgbWQ6IDYgfSwgcGI6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIHsvKiBXaGF0IEkgQnJpbmcgU2VjdGlvbiAqL31cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPntjb250ZW50LndoYXRJQnJpbmcudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgS2V5IGRpZmZlcmVudGlhdG9ycyB0aGF0IHNldCBtZSBhcGFydFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPERpZmZlcmVudGlhdG9yc0Nhcm91c2VsIGl0ZW1zPXtjb250ZW50LndoYXRJQnJpbmcuZGlmZmVyZW50aWF0b3JzfSAvPlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICB7LyogUXVpY2sgU3RhdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweTogNCxcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIG1kOiA0IH0sXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMSwgMTExLCAyMzUsIDAuMDgpIDAlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMDgpIDEwMCUpXCJcbiAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE1KSAwJSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTUpIDEwMCUpXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICB7Y29udGVudC5xdWlja1N0YXRzLm1hcCgoc3RhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiA2LCBtZDogMyB9fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7LyogV2hhdCBJJ20gTG9va2luZyBGb3IgU2VjdGlvbiAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweTogNCxcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA1IH0sXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4wNilcIlxuICAgICAgICAgICAgICAgICAgOiBcInJnYmEoNDgsIDg2LCAxNzYsIDAuMTIpXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBsaW5lSGVpZ2h0PXsxLjh9PlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICB0bz17Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmFjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBzbTogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2h5SGlyZU1lU2VjdGlvbjtcblxuIiwKICAgICJpbXBvcnQgaGVyb1BvcnRyYWl0QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1zYWRyaS1wcm9maWxlLndlYnBcIjtcbmltcG9ydCBtb3JwaERlc2lnblN5c3RlbUFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbW9ycGgtZGVzaWduLXN5c3RlbS53ZWJwXCI7XG5pbXBvcnQgcmFobmVtYVN0dWRlbnRzQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9yYWhuZW1hLXN0dWRlbnRzLndlYnBcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Fzc2V0c1wiO1xuaW1wb3J0IHR5cGUge1xuICBDYXNlU3R1ZHlTdW1tYXJ5LFxuICBFeHBlcmllbmNlU3VtbWFyeSxcbiAgSGVyb0NvbnRlbnQsXG4gIE1ldHJpY1N1bW1hcnksXG4gIFNvY2lhbExpbmssXG4gIFdoeUhpcmVNZUNvbnRlbnQsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgaGVybzogSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBcIkhlbGxvIPCfkYvwn4+8LCBJIGFtXCIsXG4gIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgdGl0bGU6IFwiYW4gaW1wYWN0LW9yaWVudGVkIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiRm9ybWVyIGlPUyBkZXZlbG9wZXIgdHVybmVkIGRlc2lnbmVyLCBidWlsZGluZyBkYXRhLWRyaXZlbiBleHBlcmllbmNlcyB0aGF0IGRyaXZlIHVzZXIgcmV0ZW50aW9uIGFuZCBidXNpbmVzcyBncm93dGggZm9yIDQwKyBtaWxsaW9uIHVzZXJzIGFjcm9zcyBCMkIgYW5kIEIyQyBwcm9kdWN0c1wiLFxuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyBjYXNlIHN0dWR5XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjYXNlLXN0dWRpZXNcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjb250YWN0XCIsXG4gIH0sXG4gIHBvcnRyYWl0OiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgaGVyb1BvcnRyYWl0QXNzZXQsIFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsIHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG4gIH0pLFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3M6IFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB2YWx1ZTogXCI2MCVcIixcbiAgICB0aXRsZTogXCJSZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ28tbGVkIERpdmFy4oCZcyBzZWN1cmUgY2FsbCBzeXN0ZW0gd2l0aCBUcnVzdCAmIFNhZmV0eSB0byBzYWZlZ3VhcmQgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjguM0srXCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCB0ZWFtcyB1c2luZyBNb3JwaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBhbiBvcGVuIGRlc2lnbiBzeXN0ZW0gdGhhdCBwb3dlcnMgRmlnbWEgaGFuZG9mZnMgYW5kIGFjY2VsZXJhdGVzIGhpZ2gtcXVhbGl0eSByZWxlYXNlcy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICB0aXRsZTogXCJEZXNpZ25lcnMgbWVudG9yZWRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGVzaWduZWQgcHJvamVjdC1iYXNlZCBwcm9ncmFtcyBhdCBSYWhuZW1hIENvbGxlZ2UgdG8gaGVscCBlbWVyZ2luZyBkZXNpZ25lcnMgbGF1bmNoIGNhcmVlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4MCVcIixcbiAgICB0aXRsZTogXCJMaWZ0IGluIHF1YWxpZmllZCBsZWFkc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWRlc2lnbmVkIFBlcnNvbOKAmXMgc2lnbi11cCBmdW5uZWwgZW5kLXRvLWVuZCwgcmVtb3ZpbmcgZnJpY3Rpb24gYW5kIGJvb3N0aW5nIGxlYWQgZ2VuZXJhdGlvbiBpbiAzIG1vbnRocy5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PiA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyXCIsXG4gICAgbnVtYmVyOiBcIjAxXCIsXG4gICAgdGFnOiBcIkltcHJvdmluZyBVc2VyIFNhZmV0eVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTdG9yeSBvZiBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICAgIHBsYXRmb3JtOiBcIm9uIERpdmFyXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiQ2xhc3NpZmllZCBBZHMgUGxhdGZvcm1cIixcbiAgICBzdGF0OiBcIkEgZmVhdHVyZSB1c2VkIGJ5IDIuMSBtaWxsaW9uIHVzZXJzIHBlciB3ZWVrXCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwidHJ1c3QgJiBzYWZldHlcIiwgXCJpbXBhY3QgYXQgc2NhbGVcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgY3Jvc3MtZnVuY3Rpb25hbCBndWFyZHJhaWxzIGhlbHBlZCBEaXZhciByZWR1Y2UgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiQ28tbGVkIGEgdGFzayBmb3JjZSBicmlkZ2luZyBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIGFuZCBFbmdpbmVlcmluZy5cIixcbiAgICAgICAgXCJTaGlwcGVkIGR5bmFtaWMgdm9pY2UtbWFza2luZyB3aXRoIGFidXNlIGRldGVjdGlvbiBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgICAgICAgXCJTdG9vZCB1cCBwbGF5Ym9va3MgZm9yIG1vZGVyYXRpb24gb3BzIHRvIG1vbml0b3IgcmVwZWF0IG9mZmVuZGVycy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsXCIsXG4gICAgbnVtYmVyOiBcIjAyXCIsXG4gICAgdGFnOiBcIkJvb3N0aW5nIFVzZXIgRW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnNcIixcbiAgICBwbGF0Zm9ybTogXCJhdCBTZXRhcmUgQXZhbCBDby5cIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJSZXRlbnRpb24gc3RyYXRlZ3lcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJyZXRlbnRpb24gc3RyYXRlZ3lcIiwgXCJjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXBcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIG9uYm9hcmRpbmcgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJNYXBwZWQgYSBuZXcgbGlmZWN5Y2xlIG1vZGVsIHRpZWQgdG8gZGF0YS1iYWNrZWQgZXhwZXJpbWVudGF0aW9uLlwiLFxuICAgICAgICBcIlJlZmluZWQgYWN0aXZhdGlvbiBmbG93cyB0byBzcG90bGlnaHQgdmFsdWUgcHJvcHMgd2l0aGluIGZpcnN0IHNlc3Npb24uXCIsXG4gICAgICAgIFwiQ28tY3JlYXRlZCBhIGxlYXJuaW5nIGFnZW5kYSB0byBtZWFzdXJlIGxveWFsdHkgcHJvZ3JhbSB0cmFjdGlvbi5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlczogUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gSW5zdHJ1Y3RvciBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyAyMDArIHN0dWRlbnRzIHRocm91Z2ggNiBjb3Vyc2VzIHNpbmNlIDIwMjJcIixcbiAgICB0YWdzOiBbXCJlZHVjYXRpb25cIiwgXCJtZW50b3JzaGlwXCIsIFwiY3VycmljdWx1bSBkZXNpZ25cIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCByYWhuZW1hU3R1ZGVudHNBc3NldCwgXCJTdHVkZW50cyBhdCBSYWhuZW1hIENvbGxlZ2VcIiksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIG1vcnBoRGVzaWduU3lzdGVtQXNzZXQsXG4gICAgICBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICApLFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogUmVhZG9ubHlBcnJheTxTb2NpYWxMaW5rPiA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiR2l0SHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHdoeUhpcmVNZTogV2h5SGlyZU1lQ29udGVudCA9IHtcbiAgd2hhdElCcmluZzoge1xuICAgIHRpdGxlOiBcIldoYXQgSSBCcmluZ1wiLFxuICAgIGRpZmZlcmVudGlhdG9yczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBSS1GYW1pbGlhciAmIFRlY2huaWNhbFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJ1aWx0IHRoaXMgcG9ydGZvbGlvIGZyb20gc2NyYXRjaCB3aXRoIG1vZGVybiB0b29scy4gRm9ybWVyIGlPUyBkZXZlbG9wZXIgd2l0aCBkZWVwIHVuZGVyc3RhbmRpbmcgb2YgdGVjaG5pY2FsIGNvbnN0cmFpbnRzIGFuZCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRGF0YS1Ecml2ZW4gRGVjaXNpb24gTWFraW5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQ29tcGxldGVkIGEgMTcwLWhvdXIgZGF0YSBhbmFseXN0IGNvdXJzZS4gSSB1c2UgZGF0YSB0byB2YWxpZGF0ZSBkZXNpZ24gZGVjaXNpb25zIGFuZCBtZWFzdXJlIGltcGFjdCwgbm90IGp1c3QgaW50dWl0aW9uLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVXNlciBSZXRlbnRpb24gRXhwZXJ0aXNlIGF0IFNjYWxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUHJvdmVuIHRyYWNrIHJlY29yZCBvZiBpbXByb3ZpbmcgdXNlciByZXRlbnRpb24gYW5kIGVuZ2FnZW1lbnQgZm9yIDQwKyBtaWxsaW9uIHVuaXF1ZSB1c2Vycy4gQ28tbGVkIGNyb3NzLWZ1bmN0aW9uYWwgaW5pdGlhdGl2ZXMgdGhhdCBkcml2ZSBsb25nLXRlcm0gdXNlciB2YWx1ZSBhbmQgYnVzaW5lc3MgZ3Jvd3RoLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVGVhY2hpbmcgJiBNZW50b3JzaGlwIExlYWRlcnNoaXBcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCIzcmQgeWVhciB0ZWFjaGluZyBhdCBjb2xsZWdlLCBtZW50b3JlZCAyMDArIHN0dWRlbnRzLiBUaGlzIHRyYW5zbGF0ZXMgdG8gc3Ryb25nIGNvbW11bmljYXRpb24gc2tpbGxzLCBjdXJyaWN1bHVtIGRlc2lnbiwgYW5kIHRoZSBhYmlsaXR5IHRvIGVsZXZhdGUgdGVhbSBjYXBhYmlsaXRpZXMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDcm9zcy1Qcm9kdWN0IEV4cGVyaWVuY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeHBlcmllbmNlIGFjcm9zcyBib3RoIEIyQyBhbmQgQjJCIHByb2R1Y3RzLCB3aXRoIGEgYmFja2dyb3VuZCBpbiBwcm9qZWN0IG1hbmFnZW1lbnQuIEkgdW5kZXJzdGFuZCBidXNpbmVzcyBzdHJhdGVneSBhbmQgY2FuIG5hdmlnYXRlIGNvbXBsZXggc3Rha2Vob2xkZXIgbGFuZHNjYXBlcy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFkYXB0YWJsZSB0byBBbnkgVGVhbSBTdHJ1Y3R1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeHBlcmllbmNlZCBpbiBnZW5lcmFsaXplZCB0ZWFtcywgZW1iZWRkZWQgcHJvZHVjdCB0ZWFtcywgYW5kIHNvbG8gZGVzaWduIHJvbGVzIGFjcm9zcyBCMkIgYW5kIEIyQyBwcm9kdWN0cy4gSSBhZGFwdCBteSB3b3JrZmxvdyB0byBmaXQgYW55IG9yZ2FuaXphdGlvbmFsIG1vZGVsLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB3aGF0SW1Mb29raW5nRm9yOiB7XG4gICAgdGl0bGU6IFwiV2hhdCBJJ20gTG9va2luZyBGb3JcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSdtIHNlZWtpbmcgc2VuaW9yIHByb2R1Y3QgZGVzaWduIHJvbGVzIHdoZXJlIEkgY2FuIGxldmVyYWdlIG15IGRhdGEtZHJpdmVuIGFwcHJvYWNoIGFuZCB0ZWNobmljYWwgYmFja2dyb3VuZCB0byBkcml2ZSBtZWFzdXJhYmxlIGJ1c2luZXNzIGltcGFjdC4gSSB0aHJpdmUgaW4gY3Jvc3MtZnVuY3Rpb25hbCBlbnZpcm9ubWVudHMgd2hlcmUgZGVzaWduLCBlbmdpbmVlcmluZywgYW5kIGJ1c2luZXNzIHN0cmF0ZWd5IGludGVyc2VjdCwgYW5kIEknbSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHNvbHV0aW9ucyB0aGF0IGRlbGl2ZXIgdGFuZ2libGUgcmVzdWx0cy5cIixcbiAgICBhY3Rpb246IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgTXkgUmVzdW1lXCIsXG4gICAgICBocmVmOiBcIi9yZXN1bWVcIixcbiAgICB9LFxuICB9LFxuICBxdWlja1N0YXRzOiBbXG4gICAge1xuICAgICAgdmFsdWU6IFwiNDBNK1wiLFxuICAgICAgbGFiZWw6IFwiVW5pcXVlIFVzZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIyMDArXCIsXG4gICAgICBsYWJlbDogXCJTdHVkZW50cyBNZW50b3JlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiMyBZZWFyc1wiLFxuICAgICAgbGFiZWw6IFwiVGVhY2hpbmcgRXhwZXJpZW5jZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IFwiQjJDICYgQjJCXCIsXG4gICAgICBsYWJlbDogXCJQcm9kdWN0IEV4cGVyaWVuY2VcIixcbiAgICB9LFxuICBdLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVJlY2FwQ29udHJvbGxlciA9IHtcbiAgYWN0aXZlQ2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb3BlblJlY2FwOiAoaWQ6IENhc2VTdHVkeUlkKSA9PiB2b2lkO1xuICBjbG9zZVJlY2FwOiAoKSA9PiB2b2lkO1xuICBpc09wZW46IGJvb2xlYW47XG59O1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlSZWNhcCA9IChjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5Pik6IENhc2VTdHVkeVJlY2FwQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENhc2VTdHVkeUlkLCBzZXRTZWxlY3RlZENhc2VTdHVkeUlkXSA9IHVzZVN0YXRlPENhc2VTdHVkeUlkIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgYWN0aXZlQ2FzZVN0dWR5ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZGllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZENhc2VTdHVkeUlkKSA/PyBudWxsLFxuICAgIFtjYXNlU3R1ZGllcywgc2VsZWN0ZWRDYXNlU3R1ZHlJZF0sXG4gICk7XG5cbiAgY29uc3Qgb3BlblJlY2FwID0gdXNlQ2FsbGJhY2soKGlkOiBDYXNlU3R1ZHlJZCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWQoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VSZWNhcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKG51bGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVDYXNlU3R1ZHksXG4gICAgb3BlblJlY2FwLFxuICAgIGNsb3NlUmVjYXAsXG4gICAgaXNPcGVuOiBhY3RpdmVDYXNlU3R1ZHkgIT09IG51bGwsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXNlU3R1ZHlSZWNhcDtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGhlcm8sIHNvY2lhbExpbmtzIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IGhvbWVTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSBbXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBwb3RlbnRpYWxBY3Rpb246IHtcbiAgICAgIFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIixcbiAgICAgIHRhcmdldDogYCR7c2l0ZVVybH0vP3E9e3NlYXJjaF90ZXJtX3N0cmluZ31gLFxuICAgICAgXCJxdWVyeS1pbnB1dFwiOiBcInJlcXVpcmVkIG5hbWU9c2VhcmNoX3Rlcm1fc3RyaW5nXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogaGVyby5uYW1lLFxuICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgZGVzY3JpcHRpb246IGhlcm8uc3VidGl0bGUsXG4gICAgdXJsOiBzaXRlVXJsLFxuICAgIGltYWdlOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICBzYW1lQXM6IHNvY2lhbExpbmtzLm1hcCgobGluaykgPT4gbGluay5ocmVmKSxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciBjcmFmdGluZyB0cnVzdHdvcnRoeSBleHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlBvcnRmb2xpbyBvZiBNYXNpaCBTYWRyaSwgYW4gaW1wYWN0LW9yaWVudGVkIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHByb3RlY3RpbmcgbWlsbGlvbnMgb2YgdXNlcnMgdGhyb3VnaCB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBhbmQgZGVzaWduIHN5c3RlbXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL1wiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgIGFsdDogaGVyby5wb3J0cmFpdC5hbHQsXG4gICAgICB3aWR0aDogMTIwMCxcbiAgICAgIGhlaWdodDogMTIwMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogaG9tZVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWRpZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVjYXBEaWFsb2cgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWNhcERpYWxvZ1wiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgTWV0cmljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvblwiO1xuaW1wb3J0IFdoeUhpcmVNZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9XaHlIaXJlTWVTZWN0aW9uXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZGllcyxcbiAgaGVybyxcbiAgbWV0cmljcyxcbiAgc29jaWFsTGlua3MsXG4gIHdoeUhpcmVNZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5UmVjYXAgZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXBcIjtcbmltcG9ydCB7IGhvbWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlQ2FzZVN0dWR5LCBjbG9zZVJlY2FwLCBvcGVuUmVjYXAgfSA9IHVzZUNhc2VTdHVkeVJlY2FwKGNhc2VTdHVkaWVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5ob21lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17aGVyb30gLz5cbiAgICAgIDxXaHlIaXJlTWVTZWN0aW9uIGNvbnRlbnQ9e3doeUhpcmVNZX0gLz5cbiAgICAgIDxNZXRyaWNzU2VjdGlvbiBtZXRyaWNzPXttZXRyaWNzfSAvPlxuICAgICAgPENhc2VTdHVkaWVzU2VjdGlvbiBjYXNlU3R1ZGllcz17Y2FzZVN0dWRpZXN9IG9uT3BlblJlY2FwPXtvcGVuUmVjYXB9IC8+XG4gICAgICA8Q29udGFjdFNlY3Rpb24gc29jaWFsTGlua3M9e3NvY2lhbExpbmtzfSAvPlxuXG4gICAgICA8Q2FzZVN0dWR5UmVjYXBEaWFsb2cgY2FzZVN0dWR5PXthY3RpdmVDYXNlU3R1ZHl9IG9uQ2xvc2U9e2Nsb3NlUmVjYXB9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSw0REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcscUJBQXFCOzs7QUNIekI7QUFIQTtBQUlBLElBQWUsaUVBQTJCLHdCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FB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Q0wsaUJBQWlCO0FBQUEsTUFDZixTQUFTO0FBQUEsTUFDVCxRQUFRLEdBQUc7QUFBQSxNQUNYLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLEtBQUs7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLGFBQWEsS0FBSztBQUFBLElBQ2xCLEtBQUs7QUFBQSxJQUNMLE9BQU8sS0FBSyxTQUFTO0FBQUEsSUFDckIsUUFBUSxZQUFZLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtBQUFBLEVBQzdDO0FBQ0Y7QUFFTyxJQUFNLG1CQUFpQztBQUFBLEVBQzVDLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDbkIsS0FBSyxLQUFLLFNBQVM7QUFBQSxNQUNuQixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjs7OztBQzVCQSxJQUFNLFdBQVcsTUFBTTtBQUFBLEVBQ3JCLFFBQVEsaUJBQWlCLFlBQVksY0FBYywwQkFBa0IsV0FBVztBQUFBLEVBRWhGLHVCQUNFO0FBQUEsY0FVRTtBQUFBLHNCQVRBLHlCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBMkI7QUFBQSxzQkFFM0IseUJBQUMscUJBQUQ7QUFBQSxRQUFhO0FBQUEsU0FBYixpQ0FBeUI7QUFBQSxzQkFDekIseUJBQUMsMEJBQUQ7QUFBQSxRQUFrQixTQUFTO0FBQUEsU0FBM0IsaUNBQXNDO0FBQUEsc0JBQ3RDLHlCQUFDLHdCQUFEO0FBQUEsUUFBZ0I7QUFBQSxTQUFoQixpQ0FBa0M7QUFBQSxzQkFDbEMseUJBQUMsNEJBQUQ7QUFBQSxRQUFvQjtBQUFBLFFBQTBCLGFBQWE7QUFBQSxTQUEzRCxpQ0FBc0U7QUFBQSxzQkFDdEUseUJBQUMsd0JBQUQ7QUFBQSxRQUFnQjtBQUFBLFNBQWhCLGlDQUEwQztBQUFBLHNCQUUxQyx5QkFBQyw4QkFBRDtBQUFBLFFBQXNCLFdBQVc7QUFBQSxRQUFpQixTQUFTO0FBQUEsU0FBM0QsaUNBQXVFO0FBQUE7QUFBQSxLQVR6RSxnQ0FVRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIkQ1OEJCMjUwMDZCNjAxOTQ2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
