import {
  Telegram_default,
  smoothScrollToElement
} from "./chunk-ch0gm56j.js";
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

//# debugId=5B6D4C26CC787BF264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXZlbnRBdmFpbGFibGUuanMiLCAiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9JbXBhY3RTdGF0Q2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja0lvc1JvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZElvc1JvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9EaWZmZXJlbnRpYXRvcnNDYXJvdXNlbC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9XaHlIaXJlTWVTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXAudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL0hvbWVQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxM2gxMS4xN2wtNC44OCA0Ljg4Yy0uMzkuMzktLjM5IDEuMDMgMCAxLjQyczEuMDIuMzkgMS40MSAwbDYuNTktNi41OWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC02LjU4LTYuNmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTYuMTcgMTFINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMVwiXG59KSwgJ0Fycm93Rm9yd2FyZFJvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VTdHVkeUNhcmQgPSAoeyBjYXNlU3R1ZHksIGFjdGl2ZSA9IGZhbHNlLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZHlDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG5cbiAgY29uc3QgYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIwLCA0NSwgMTEwLCAwLjk4KSwgcmdiYSg1OCwgMTE4LCAyMjYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTcsIDc2LCAxNzAsIDAuODgpLCByZ2JhKDYwLCAxNTEsIDI1NSwgMC44MikpXCI7XG5cbiAgY29uc3QgaW5hY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjAsIDI4LCA1MiwgMC44MiksIHJnYmEoMTIsIDE4LCAzNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjk0KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjg4KSlcIjtcblxuICBjb25zdCBoZWFkaW5nQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIyNiwgMjM0LCAyNTUsIDAuOTUpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMTAsIDIyMCwgMjU1LCAwLjgyKVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgIDogXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjEyKVwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IGFjdGl2ZUJhY2tncm91bmQgOiBpbmFjdGl2ZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2JvcmRlckNvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBhY3RpdmUgPyBwYWxldHRlLmNvbW1vbi53aGl0ZSA6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IHRva2Vucy5zaGFkb3cubGV2ZWwzIDogdG9rZW5zLnNoYWRvdy5sZXZlbDIsXG4gICAgICAgIHRyYW5zaXRpb246IHRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiB0b2tlbnMuc2hhZG93LmxldmVsMyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYjogMyB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxODksIDIwNCwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhc2Uge2Nhc2VTdHVkeS5udW1iZXJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMTQsIDIyNCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBhY3RpdmUgPyBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcImluaGVyaXRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2FwfVxuICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUmVjYXBcbiAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IENhc2VTdHVkeUNhcmQgZnJvbSBcIi4vQ2FzZVN0dWR5Q2FyZFwiO1xuXG50eXBlIENhc2VTdHVkaWVzU2VjdGlvblByb3BzID0ge1xuICBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcbiAgb25PcGVuUmVjYXA6IChpZDogQ2FzZVN0dWR5SWQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZGllc1NlY3Rpb24gPSAoeyBjYXNlU3R1ZGllcywgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWRpZXNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwiY2FzZS1zdHVkaWVzXCJcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+Q2FzZSBzdHVkaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICB7Y2FzZVN0dWRpZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8Q2FzZVN0dWR5Q2FyZFxuICAgICAgICAgICAgICBjYXNlU3R1ZHk9e2l0ZW19XG4gICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICBvbk9wZW5SZWNhcD17KCkgPT4gb25PcGVuUmVjYXAoaXRlbS5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWRpZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXBEaWFsb2dQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENhc2VTdHVkeVJlY2FwRGlhbG9nID0gKHsgY2FzZVN0dWR5LCBvbkNsb3NlIH06IENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMpID0+IChcbiAgPERpYWxvZ1xuICAgIG9wZW49e0Jvb2xlYW4oY2FzZVN0dWR5KX1cbiAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICA+XG4gICAge2Nhc2VTdHVkeSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIj57Y2FzZVN0dWR5LnJlY2FwLmhlYWRsaW5lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezEuNX0gc3g9e3sgcGw6IDIgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnJlY2FwLmJ1bGxldHMubWFwKChidWxsZXQpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e2J1bGxldH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IG10PXszfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVlcCBkaXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC8+XG4gICAgKSA6IG51bGx9XG4gIDwvRGlhbG9nPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVjYXBEaWFsb2c7XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNTMgMTEuMDYgMTUuNDcgMTBsLTQuODggNC44OC0yLjEyLTIuMTItMS4wNiAxLjA2TDEwLjU5IDE3ek0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMm0wIDE2SDVWOGgxNHpcIlxufSksICdFdmVudEF2YWlsYWJsZScpOyIsCiAgICAiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG50eXBlIENvbnRhY3RBY3Rpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdmFyaWFudD86IEJ1dHRvblByb3BzW1widmFyaWFudFwiXTtcbiAgY29sb3I/OiBCdXR0b25Qcm9wc1tcImNvbG9yXCJdO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbn07XG5cbnR5cGUgTGV0c1RhbGtTZWN0aW9uUHJvcHMgPSB7XG4gIGlkPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaW1hcnlBY3Rpb246IENvbnRhY3RBY3Rpb247XG4gIHNlY29uZGFyeUFjdGlvbnM/OiBSZWFkb25seUFycmF5PENvbnRhY3RBY3Rpb24+O1xufTtcblxuY29uc3QgZ2V0RXh0ZXJuYWxMaW5rUHJvcHMgPSAoaHJlZjogc3RyaW5nKSA9PiB7XG4gIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgfSBhcyBjb25zdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB1bmRlZmluZWQsXG4gICAgcmVsOiB1bmRlZmluZWQsXG4gIH0gYXMgY29uc3Q7XG59O1xuXG5jb25zdCBMZXRzVGFsa1NlY3Rpb24gPSAoe1xuICBpZCxcbiAgdGl0bGUgPSBcIkxldCdzIFRhbGsgYW5kIFdvcmsgVG9nZXRoZXJcIixcbiAgZGVzY3JpcHRpb24gPSBcIkknbSBhbHdheXMgb3BlbiB0byBkaXNjdXNzaW5nIG5ldyBwcm9qZWN0cywgY3JlYXRpdmUgaWRlYXMsIG9yIG9wcG9ydHVuaXRpZXMgdG8gYmUgcGFydCBvZiB5b3VyIHZpc2lvbi5cIixcbiAgcHJpbWFyeUFjdGlvbixcbiAgc2Vjb25kYXJ5QWN0aW9ucyA9IFtdLFxufTogTGV0c1RhbGtTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgaWQ9e2lkfSBzeD17eyBweTogeyB4czogNCwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmRcbiAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB7IHhzOiBcIjE2cHhcIiwgbWQ6IFwiMjRweFwiIH0sXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDUgfSxcbiAgICAgICAgICBweTogeyB4czogMywgbWQ6IDUgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHBiOiAwLCBweDogeyB4czogMCwgbWQ6IDAgfSB9fT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMSwgbWQ6IDEuNSB9fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIiBcbiAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMS41cmVtXCIsIG1kOiBcIjJyZW1cIiB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIwLjg3NXJlbVwiLCBtZDogXCIxcmVtXCIgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB0OiB7IHhzOiAyLjUsIG1kOiA0IH0sIHB4OiAwLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IHsgeHM6IDEuNSwgbWQ6IDIgfSB9fT5cbiAgICAgICAgICB7LyogUHJpbWFyeSBBY3Rpb24gLSBGdWxsIFdpZHRoICovfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj17cHJpbWFyeUFjdGlvbi5ocmVmfVxuICAgICAgICAgICAgc3RhcnRJY29uPXtwcmltYXJ5QWN0aW9uLmljb259XG4gICAgICAgICAgICB2YXJpYW50PXtwcmltYXJ5QWN0aW9uLnZhcmlhbnQgPz8gXCJjb250YWluZWRcIn1cbiAgICAgICAgICAgIGNvbG9yPXtwcmltYXJ5QWN0aW9uLmNvbG9yID8/IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgIHN4PXt7IG1pbkhlaWdodDogeyB4czogXCI0OHB4XCIsIG1kOiBcIjU2cHhcIiB9IH19XG4gICAgICAgICAgICB0YXJnZXQ9e3ByaW1hcnlBY3Rpb24udGFyZ2V0ID8/IGdldEV4dGVybmFsTGlua1Byb3BzKHByaW1hcnlBY3Rpb24uaHJlZikudGFyZ2V0fVxuICAgICAgICAgICAgcmVsPXtwcmltYXJ5QWN0aW9uLnJlbCA/PyBnZXRFeHRlcm5hbExpbmtQcm9wcyhwcmltYXJ5QWN0aW9uLmhyZWYpLnJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJpbWFyeUFjdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogU2Vjb25kYXJ5IEFjdGlvbnMgLSBHcm91cGVkIFJvdyAqL31cbiAgICAgICAgICB7c2Vjb25kYXJ5QWN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEuNSB9fVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlBY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxQcm9wcyA9IGdldEV4dGVybmFsTGlua1Byb3BzKGFjdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2FjdGlvbi5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17YWN0aW9uLmljb259XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2FjdGlvbi52YXJpYW50ID8/IFwib3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2FjdGlvbi5jb2xvciA/PyBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt7IHhzOiB0cnVlLCBtZDogZmFsc2UgfX1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiBcIjQ4cHhcIiwgbWQ6IFwiNDhweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIxIDEgMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXthY3Rpb24udGFyZ2V0ID8/IGV4dGVybmFsUHJvcHMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICByZWw9e2FjdGlvbi5yZWwgPz8gZXh0ZXJuYWxQcm9wcy5yZWx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgdHlwZSB7IENvbnRhY3RBY3Rpb24sIExldHNUYWxrU2VjdGlvblByb3BzIH07XG5leHBvcnQgZGVmYXVsdCBMZXRzVGFsa1NlY3Rpb247XG5cbiIsCiAgICAiaW1wb3J0IEVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQgRXZlbnRBdmFpbGFibGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V2ZW50QXZhaWxhYmxlXCI7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1RlbGVncmFtXCI7XG5pbXBvcnQgTGV0c1RhbGtTZWN0aW9uIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9MZXRzVGFsa1NlY3Rpb25cIjtcblxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY29uZGFyeUFjdGlvbnM6IENvbnRhY3RBY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgaHJlZjogXCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgICAgIGljb246IDxFbWFpbFJvdW5kZWRJY29uIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQm9vayBhIHNlc3Npb25cIixcbiAgICAgIGhyZWY6IFwiL2NvbnRhY3QjbWVudG9yc2hpcFwiLFxuICAgICAgaWNvbjogPEV2ZW50QXZhaWxhYmxlSWNvbiAvPixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExldHNUYWxrU2VjdGlvblxuICAgICAgaWQ9XCJjb250YWN0XCJcbiAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgbGFiZWw6IFwiRGlyZWN0IG1lc3NhZ2VcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICAgICAgICBpY29uOiA8VGVsZWdyYW1JY29uIC8+LFxuICAgICAgfX1cbiAgICAgIHNlY29uZGFyeUFjdGlvbnM9e3NlY29uZGFyeUFjdGlvbnN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RTZWN0aW9uO1xuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEhlcm9Db250ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBjZXJ0aWZpZWRCYWRnZVNyYyBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2JhZGdlcy9jZXJ0aWZpZWQtYmFkZ2UucG5nXCI7XG5pbXBvcnQgeyBzbW9vdGhTY3JvbGxUb0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc21vb3RoU2Nyb2xsXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogSGVyb0NvbnRlbnQ7XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGhhbmRsZVByaW1hcnlDdGFDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGhlcm8uY3RhUHJpbWFyeS5zY3JvbGxUb0lkID8/IGhlcm8uY3RhUHJpbWFyeS50bztcbiAgICBpZiAoIXRhcmdldElkIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRJZC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZElkID0gdGFyZ2V0SWQuc3RhcnRzV2l0aChcIiNcIikgPyB0YXJnZXRJZC5zbGljZSgxKSA6IHRhcmdldElkO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW5pdGl6ZWRJZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfVxuICB9LCBbaGVyby5jdGFQcmltYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhUHJpbWFyeS50b10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlY29uZGFyeUN0YUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldElkID0gaGVyby5jdGFTZWNvbmRhcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVNlY29uZGFyeS50bztcbiAgICBpZiAoIXRhcmdldElkIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRJZC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZElkID0gdGFyZ2V0SWQuc3RhcnRzV2l0aChcIiNcIikgPyB0YXJnZXRJZC5zbGljZSgxKSA6IHRhcmdldElkO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW5pdGl6ZWRJZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfVxuICB9LCBbaGVyby5jdGFTZWNvbmRhcnkuc2Nyb2xsVG9JZCwgaGVyby5jdGFTZWNvbmRhcnkudG9dKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA5IH0sXG4gICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgID8gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAxNSUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4xMiksIHRyYW5zcGFyZW50IDU4JSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSgzNCwgODQsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQgNTIlKVwiXG4gICAgICAgICAgICA6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxOCUgMTUlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xOCksIHRyYW5zcGFyZW50IDYwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzglIDE4JSwgcmdiYSg0OCwgODYsIDE3NiwgMC4xOCksIHRyYW5zcGFyZW50IDU1JSlcIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBzcGFjaW5nPXt7IHhzOiA0LCBtZDogMy41IH19XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcInN0cmV0Y2hcIiB9LFxuICAgICAgICAgICAgcHg6IHsgeHM6IDAsIG1kOiAyIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17Mi41fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IG1kOiBcIjMwJVwiIH0sXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjMwJVwiIH0sXG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyB4czogMjYwLCBzbTogMzAwLCBtZDogMzIwIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICBzcmM9e2hlcm8ucG9ydHJhaXQuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAxOHB4IDQwcHggcmdiYSgxNywgMzYsIDgzLCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2NlcnRpZmllZEJhZGdlU3JjfVxuICAgICAgICAgICAgICAgIGFsdD1cIkNlcnRpZmllZCBiYWRnZVwiXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiB7IHhzOiAtMTgsIG1kOiAtMjQgfSxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IC0xOCwgbWQ6IC0yNCB9LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDEyMCwgbWQ6IDE1MCB9LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLjI1LCBtZDogMi43NSB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjQsIG1kOiAxLjggfX0gc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMSwgc206IDEuNSB9fVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e3sgeHM6IFwiY2VudGVyXCIsIHNtOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtoZXJvLmdyZWV0aW5nfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDAuMyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGlzcGxheVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMDUsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAxNWVtXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHsgeHM6IFwiMC4wMWVtXCIsIG1kOiBcIjAuMDA1ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiODUlXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8udGl0bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxLjA1cmVtXCIsIG1kOiBcIjEuMTJyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42NSwgbWQ6IDEuNyB9LFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5zcGxpdChcIiB8IFwiKVswXX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZS5pbmNsdWRlcyhcIiB8IFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC45NXJlbVwiLCBtZDogXCIxcmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42LCBtZDogMS42NSB9LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlLnNwbGl0KFwiIHwgXCIpLnNsaWNlKDEpLmpvaW4oXCIgfCBcIil9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7LyogS2V5IFZhbHVlIFBpbGxzICovfVxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcHQ6IDAuNSxcbiAgICAgICAgICAgICAgICAgIGdhcDogMSxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiNDArIE1pbGxpb24gVXNlcnNcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4xNSlcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIwLjc1cmVtXCIsIG1kOiBcIjAuODEyNXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQjJCICYgQjJDXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEtRHJpdmVuXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkFJLUZhbWlsaWFyXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMC43NXJlbVwiLCBtZDogXCIwLjgxMjVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlY2huaWNhbCAmIE1hbmFnZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4xNSlcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIwLjc1cmVtXCIsIG1kOiBcIjAuODEyNXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS40LCBzbTogMS44IH19XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgc3g9e3sgcHQ6IHsgeHM6IDAuNSwgbWQ6IDAuNzUgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiB7IHNtOiAyMjAgfSB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByaW1hcnlDdGFDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vjb25kYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVNlY29uZGFyeS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1ldHJpY1N1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBJbXBhY3RTdGF0Q2FyZFByb3BzID0gTWV0cmljU3VtbWFyeTtcblxuY29uc3QgSW1wYWN0U3RhdENhcmQgPSAoeyB2YWx1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH06IEltcGFjdFN0YXRDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxIH19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNlwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0NhcmRDb250ZW50PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBhY3RTdGF0Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgSW1wYWN0U3RhdENhcmQgZnJvbSBcIi4vSW1wYWN0U3RhdENhcmRcIjtcblxudHlwZSBNZXRyaWNzU2VjdGlvblByb3BzID0ge1xuICBtZXRyaWNzOiBSZWFkb25seUFycmF5PE1ldHJpY1N1bW1hcnk+O1xufTtcblxuY29uc3QgTWV0cmljc1NlY3Rpb24gPSAoeyBtZXRyaWNzIH06IE1ldHJpY3NTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPlJlY2VudCBJbXBhY3QgSSBIYXZlIE1hZGU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgTWVhc3VyYWJsZSBvdXRjb21lcyBmcm9tIG15IGRlc2lnbiB3b3JrXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDMuNSB9fT5cbiAgICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDYsIG1kOiAzIH19IGtleT17dGl0bGV9PlxuICAgICAgICAgICAgICA8SW1wYWN0U3RhdENhcmQgdmFsdWU9e3ZhbHVlfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNi42MiAyLjk5Yy0uNDktLjQ5LTEuMjgtLjQ5LTEuNzcgMEw2LjU0IDExLjNjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOC4zMSA4LjMxYy40OS40OSAxLjI4LjQ5IDEuNzcgMHMuNDktMS4yOCAwLTEuNzdMOS4zOCAxMmw3LjI1LTcuMjVjLjQ4LS40OC40OC0xLjI4LS4wMS0xLjc2XCJcbn0pLCAnQXJyb3dCYWNrSW9zUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuMzggMjEuMDFjLjQ5LjQ5IDEuMjguNDkgMS43NyAwbDguMzEtOC4zMWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDkuMTUgMi45OGMtLjQ5LS40OS0xLjI4LS40OS0xLjc3IDBzLS40OSAxLjI4IDAgMS43N0wxNC42MiAxMmwtNy4yNSA3LjI1Yy0uNDguNDgtLjQ4IDEuMjguMDEgMS43NlwiXG59KSwgJ0Fycm93Rm9yd2FyZElvc1JvdW5kZWQnKTsiLAogICAgImltcG9ydCBBcnJvd0JhY2tJb3NSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgSWNvbkJ1dHRvbixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIERpZmZlcmVudGlhdG9yID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbFByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxEaWZmZXJlbnRpYXRvcj47XG59O1xuXG5jb25zdCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbCA9ICh7IGl0ZW1zIH06IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbY2FuU2Nyb2xsTGVmdCwgc2V0Q2FuU2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjYW5TY3JvbGxSaWdodCwgc2V0Q2FuU2Nyb2xsUmlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2hlY2tTY3JvbGxhYmlsaXR5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGgsIGNsaWVudFdpZHRoIH0gPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudDtcbiAgICBzZXRDYW5TY3JvbGxMZWZ0KHNjcm9sbExlZnQgPiAwKTtcbiAgICBzZXRDYW5TY3JvbGxSaWdodChzY3JvbGxMZWZ0IDwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIDEwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbCA9IHVzZUNhbGxiYWNrKFxuICAgIChkaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiKSA9PiB7XG4gICAgICBpZiAoIXNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik/LmNsaWVudFdpZHRoID8/IDMyMDtcbiAgICAgIGNvbnN0IHNjcm9sbEFtb3VudCA9IGNhcmRXaWR0aCArIDI0OyAvLyBjYXJkIHdpZHRoICsgZ2FwXG5cbiAgICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEJ5KHtcbiAgICAgICAgbGVmdDogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IC1zY3JvbGxBbW91bnQgOiBzY3JvbGxBbW91bnQsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENoZWNrIHNjcm9sbGFiaWxpdHkgYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgc2V0VGltZW91dChjaGVja1Njcm9sbGFiaWxpdHksIDMwMCk7XG4gICAgfSxcbiAgICBbY2hlY2tTY3JvbGxhYmlsaXR5XSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2hlY2tTY3JvbGxhYmlsaXR5KCk7XG4gIH0sIFtjaGVja1Njcm9sbGFiaWxpdHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrU2Nyb2xsYWJpbGl0eSgpO1xuICAgIC8vIEFsc28gY2hlY2sgb24gd2luZG93IHJlc2l6ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrU2Nyb2xsYWJpbGl0eSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrU2Nyb2xsYWJpbGl0eSk7XG4gIH0sIFtjaGVja1Njcm9sbGFiaWxpdHldKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgey8qIE5hdmlnYXRpb24gQnV0dG9ucyAqL31cbiAgICAgIHtjYW5TY3JvbGxMZWZ0ICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwoXCJsZWZ0XCIpfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgbGVmdDogeyB4czogLTEyLCBtZDogLTE2IH0sXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCA0cHggMTJweCByZ2JhKDE3LCAzNiwgODMsIDAuMSlcIlxuICAgICAgICAgICAgICAgIDogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDQwLCBtZDogNDggfSxcbiAgICAgICAgICAgIGhlaWdodDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNjcm9sbCBsZWZ0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0JhY2tJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKX1cblxuICAgICAge2NhblNjcm9sbFJpZ2h0ICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwoXCJyaWdodFwiKX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHJpZ2h0OiB7IHhzOiAtMTIsIG1kOiAtMTYgfSxcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCIwIDRweCAxMnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xKVwiXG4gICAgICAgICAgICAgICAgOiBcIjAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogeyB4czogNDAsIG1kOiA0OCB9LFxuICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiA0MCwgbWQ6IDQ4IH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2Nyb2xsIHJpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgey8qIFNjcm9sbGFibGUgQ29udGFpbmVyICovfVxuICAgICAgPEJveFxuICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBnYXA6IDMsXG4gICAgICAgICAgb3ZlcmZsb3dYOiBcImF1dG9cIixcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgc2Nyb2xsU25hcFR5cGU6IFwieCBtYW5kYXRvcnlcIixcbiAgICAgICAgICBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aDogXCJub25lXCIsIC8vIEZpcmVmb3hcbiAgICAgICAgICBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLCAvLyBJRS9FZGdlXG4gICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIiwgLy8gQ2hyb21lL1NhZmFyaVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHg6IHsgeHM6IDEsIG1kOiAyIH0sXG4gICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgLy8gSGlkZSBzY3JvbGxiYXIgYnV0IGFsbG93IHNjcm9sbGluZ1xuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzNDAgfSxcbiAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IDIwMCwgbWQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTgsIDE4LCAxOCwgMC42KVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KVwiLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAodGhlbWUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjAgOHB4IDI0cHggcmdiYSgxNywgMzYsIDgzLCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIjAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHA6IHsgeHM6IDIsIG1kOiAyLjUgfSwgaGVpZ2h0OiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGZvbnRXZWlnaHQ9ezYwMH0gc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMXJlbVwiLCBtZDogXCIxLjEyNXJlbVwiIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGxpbmVIZWlnaHQ9ezEuNn0gc3g9e3sgZmxleEdyb3c6IDEsIGZvbnRTaXplOiB7IHhzOiBcIjAuODc1cmVtXCIsIG1kOiBcIjAuOTM3NXJlbVwiIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWZmZXJlbnRpYXRvcnNDYXJvdXNlbDtcblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERpZmZlcmVudGlhdG9yc0Nhcm91c2VsIGZyb20gXCIuL0RpZmZlcmVudGlhdG9yc0Nhcm91c2VsXCI7XG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IHR5cGUgeyBXaHlIaXJlTWVDb250ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgV2h5SGlyZU1lU2VjdGlvblByb3BzID0ge1xuICBjb250ZW50OiBXaHlIaXJlTWVDb250ZW50O1xufTtcblxuY29uc3QgV2h5SGlyZU1lU2VjdGlvbiA9ICh7IGNvbnRlbnQgfTogV2h5SGlyZU1lU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB0OiB7IHhzOiA0LCBtZDogNiB9LCBwYjogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XG4gICAgICAgICAgey8qIFdoYXQgSSBCcmluZyBTZWN0aW9uICovfVxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e2NvbnRlbnQud2hhdElCcmluZy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBLZXkgZGlmZmVyZW50aWF0b3JzIHRoYXQgc2V0IG1lIGFwYXJ0XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8RGlmZmVyZW50aWF0b3JzQ2Fyb3VzZWwgaXRlbXM9e2NvbnRlbnQud2hhdElCcmluZy5kaWZmZXJlbnRpYXRvcnN9IC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIHsvKiBRdWljayBTdGF0cyBTZWN0aW9uICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB5OiA0LFxuICAgICAgICAgICAgICBweDogeyB4czogMiwgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMTEsIDIzNSwgMC4wOCkgMCUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4wOCkgMTAwJSlcIlxuICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTUpIDAlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xNSkgMTAwJSlcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtjb250ZW50LnF1aWNrU3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDYsIG1kOiAzIH19IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD17NzAwfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGZvbnRXZWlnaHQ9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHsvKiBXaGF0IEknbSBMb29raW5nIEZvciBTZWN0aW9uICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB5OiA0LFxuICAgICAgICAgICAgICBweDogeyB4czogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjA2KVwiXG4gICAgICAgICAgICAgICAgICA6IFwicmdiYSg0OCwgODYsIDE3NiwgMC4xMilcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGxpbmVIZWlnaHQ9ezEuOH0+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SW1Mb29raW5nRm9yLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtjb250ZW50LndoYXRJbUxvb2tpbmdGb3IuYWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdEltTG9va2luZ0Zvci5hY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaHlIaXJlTWVTZWN0aW9uO1xuXG4iLAogICAgImltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENhc2VTdHVkeVN1bW1hcnksXG4gIEV4cGVyaWVuY2VTdW1tYXJ5LFxuICBIZXJvQ29udGVudCxcbiAgTWV0cmljU3VtbWFyeSxcbiAgU29jaWFsTGluayxcbiAgV2h5SGlyZU1lQ29udGVudCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBoZXJvOiBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IFwiSGVsbG8g8J+Ri/Cfj7wsIEkgYW1cIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICB0aXRsZTogXCJhbiBpbXBhY3Qtb3JpZW50ZWQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgc3VidGl0bGU6XG4gICAgXCJGb3JtZXIgaU9TIGRldmVsb3BlciB0dXJuZWQgZGVzaWduZXIsIGJ1aWxkaW5nIGRhdGEtZHJpdmVuIGV4cGVyaWVuY2VzIHRoYXQgZHJpdmUgdXNlciByZXRlbnRpb24gYW5kIGJ1c2luZXNzIGdyb3d0aCBmb3IgNDArIG1pbGxpb24gdXNlcnMgYWNyb3NzIEIyQiBhbmQgQjJDIHByb2R1Y3RzXCIsXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZHlcIixcbiAgICBzY3JvbGxUb0lkOiBcImNhc2Utc3R1ZGllc1wiLFxuICB9LFxuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogXCJTZXQgYW4gYXBwb2ludG1lbnRcIixcbiAgICBzY3JvbGxUb0lkOiBcImNvbnRhY3RcIixcbiAgfSxcbiAgcG9ydHJhaXQ6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBoZXJvUG9ydHJhaXRBc3NldCwgXCJNYXNpaCBTYWRyaSAtIFByb2R1Y3QgRGVzaWduZXJcIiwge1xuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogMTIwMCxcbiAgfSksXG59O1xuXG5leHBvcnQgY29uc3QgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5PiA9IFtcbiAge1xuICAgIHZhbHVlOiBcIjYwJVwiLFxuICAgIHRpdGxlOiBcIlJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDby1sZWQgRGl2YXLigJlzIHNlY3VyZSBjYWxsIHN5c3RlbSB3aXRoIFRydXN0ICYgU2FmZXR5IHRvIHNhZmVndWFyZCAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiOC4zSytcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IHRlYW1zIHVzaW5nIE1vcnBoXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIG9wZW4gZGVzaWduIHN5c3RlbSB0aGF0IHBvd2VycyBGaWdtYSBoYW5kb2ZmcyBhbmQgYWNjZWxlcmF0ZXMgaGlnaC1xdWFsaXR5IHJlbGVhc2VzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgIHRpdGxlOiBcIkRlc2lnbmVycyBtZW50b3JlZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXNpZ25lZCBwcm9qZWN0LWJhc2VkIHByb2dyYW1zIGF0IFJhaG5lbWEgQ29sbGVnZSB0byBoZWxwIGVtZXJnaW5nIGRlc2lnbmVycyBsYXVuY2ggY2FyZWVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgIHRpdGxlOiBcIkxpZnQgaW4gcXVhbGlmaWVkIGxlYWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlZGVzaWduZWQgUGVyc29s4oCZcyBzaWduLXVwIGZ1bm5lbCBlbmQtdG8tZW5kLCByZW1vdmluZyBmcmljdGlvbiBhbmQgYm9vc3RpbmcgbGVhZCBnZW5lcmF0aW9uIGluIDMgbW9udGhzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXJcIixcbiAgICBudW1iZXI6IFwiMDFcIixcbiAgICB0YWc6IFwiSW1wcm92aW5nIFVzZXIgU2FmZXR5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFN0b3J5IG9mIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gICAgcGxhdGZvcm06IFwib24gRGl2YXJcIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJDbGFzc2lmaWVkIEFkcyBQbGF0Zm9ybVwiLFxuICAgIHN0YXQ6IFwiQSBmZWF0dXJlIHVzZWQgYnkgMi4xIG1pbGxpb24gdXNlcnMgcGVyIHdlZWtcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJ0cnVzdCAmIHNhZmV0eVwiLCBcImltcGFjdCBhdCBzY2FsZVwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyBjcm9zcy1mdW5jdGlvbmFsIGd1YXJkcmFpbHMgaGVscGVkIERpdmFyIHJlZHVjZSBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDby1sZWQgYSB0YXNrIGZvcmNlIGJyaWRnaW5nIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgYW5kIEVuZ2luZWVyaW5nLlwiLFxuICAgICAgICBcIlNoaXBwZWQgZHluYW1pYyB2b2ljZS1tYXNraW5nIHdpdGggYWJ1c2UgZGV0ZWN0aW9uIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICAgICAgICBcIlN0b29kIHVwIHBsYXlib29rcyBmb3IgbW9kZXJhdGlvbiBvcHMgdG8gbW9uaXRvciByZXBlYXQgb2ZmZW5kZXJzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWxcIixcbiAgICBudW1iZXI6IFwiMDJcIixcbiAgICB0YWc6IFwiQm9vc3RpbmcgVXNlciBFbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVyc1wiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsIENvLlwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlJldGVudGlvbiBzdHJhdGVneVwiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInJldGVudGlvbiBzdHJhdGVneVwiLCBcImNyb3NzLWZ1bmN0aW9uYWwgbGVhZGVyc2hpcFwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6IFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3Mgb25ib2FyZGluZyB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIk1hcHBlZCBhIG5ldyBsaWZlY3ljbGUgbW9kZWwgdGllZCB0byBkYXRhLWJhY2tlZCBleHBlcmltZW50YXRpb24uXCIsXG4gICAgICAgIFwiUmVmaW5lZCBhY3RpdmF0aW9uIGZsb3dzIHRvIHNwb3RsaWdodCB2YWx1ZSBwcm9wcyB3aXRoaW4gZmlyc3Qgc2Vzc2lvbi5cIixcbiAgICAgICAgXCJDby1jcmVhdGVkIGEgbGVhcm5pbmcgYWdlbmRhIHRvIG1lYXN1cmUgbG95YWx0eSBwcm9ncmFtIHRyYWN0aW9uLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzOiBSZWFkb25seUFycmF5PEV4cGVyaWVuY2VTdW1tYXJ5PiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBJbnN0cnVjdG9yIGF0IFJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYWluaW5nIDIwMCsgc3R1ZGVudHMgdGhyb3VnaCA2IGNvdXJzZXMgc2luY2UgMjAyMlwiLFxuICAgIHRhZ3M6IFtcImVkdWNhdGlvblwiLCBcIm1lbnRvcnNoaXBcIiwgXCJjdXJyaWN1bHVtIGRlc2lnblwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIHJhaG5lbWFTdHVkZW50c0Fzc2V0LCBcIlN0dWRlbnRzIGF0IFJhaG5lbWEgQ29sbGVnZVwiKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vcnBoIERlc2lnbiBTeXN0ZW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCdWlsdCBmcm9tIHNjcmF0Y2gsIHVzZWQgb3ZlciA3NDAwIHRpbWVzIGluIHRoZSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICB0YWdzOiBbXCJvcGVuIHNvdXJjZVwiLCBcImRlc2lnbiBzeXN0ZW1cIiwgXCJjb21tdW5pdHkgaW1wYWN0XCJdLFxuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgbW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCxcbiAgICAgIFwiTW9ycGggRGVzaWduIFN5c3RlbSAtIEZpZ21hIENvbW11bml0eVwiLFxuICAgICksXG4gICAgbGluazoge1xuICAgICAgbGFiZWw6IFwiVmlldyBvbiBGaWdtYSBDb21tdW5pdHlcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL2NvbW11bml0eS9maWxlLzEwNjkyNTkzMzM0NjcwODMxODJcIixcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbExpbmtzOiBSZWFkb25seUFycmF5PFNvY2lhbExpbms+ID0gW1xuICB7XG4gICAgbGFiZWw6IFwiTGlua2VkSW5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJHaXRIdWJcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tcnNhZHJpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgd2h5SGlyZU1lOiBXaHlIaXJlTWVDb250ZW50ID0ge1xuICB3aGF0SUJyaW5nOiB7XG4gICAgdGl0bGU6IFwiV2hhdCBJIEJyaW5nXCIsXG4gICAgZGlmZmVyZW50aWF0b3JzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFJLUZhbWlsaWFyICYgVGVjaG5pY2FsXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQnVpbHQgdGhpcyBwb3J0Zm9saW8gZnJvbSBzY3JhdGNoIHdpdGggbW9kZXJuIHRvb2xzLiBGb3JtZXIgaU9TIGRldmVsb3BlciB3aXRoIGRlZXAgdW5kZXJzdGFuZGluZyBvZiB0ZWNobmljYWwgY29uc3RyYWludHMgYW5kIGltcGxlbWVudGF0aW9uIGRldGFpbHMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJEYXRhLURyaXZlbiBEZWNpc2lvbiBNYWtpbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJDb21wbGV0ZWQgYSAxNzAtaG91ciBkYXRhIGFuYWx5c3QgY291cnNlLiBJIHVzZSBkYXRhIHRvIHZhbGlkYXRlIGRlc2lnbiBkZWNpc2lvbnMgYW5kIG1lYXN1cmUgaW1wYWN0LCBub3QganVzdCBpbnR1aXRpb24uXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJVc2VyIFJldGVudGlvbiBFeHBlcnRpc2UgYXQgU2NhbGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJQcm92ZW4gdHJhY2sgcmVjb3JkIG9mIGltcHJvdmluZyB1c2VyIHJldGVudGlvbiBhbmQgZW5nYWdlbWVudCBmb3IgNDArIG1pbGxpb24gdW5pcXVlIHVzZXJzLiBDby1sZWQgY3Jvc3MtZnVuY3Rpb25hbCBpbml0aWF0aXZlcyB0aGF0IGRyaXZlIGxvbmctdGVybSB1c2VyIHZhbHVlIGFuZCBidXNpbmVzcyBncm93dGguXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJUZWFjaGluZyAmIE1lbnRvcnNoaXAgTGVhZGVyc2hpcFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIjNyZCB5ZWFyIHRlYWNoaW5nIGF0IGNvbGxlZ2UsIG1lbnRvcmVkIDIwMCsgc3R1ZGVudHMuIFRoaXMgdHJhbnNsYXRlcyB0byBzdHJvbmcgY29tbXVuaWNhdGlvbiBza2lsbHMsIGN1cnJpY3VsdW0gZGVzaWduLCBhbmQgdGhlIGFiaWxpdHkgdG8gZWxldmF0ZSB0ZWFtIGNhcGFiaWxpdGllcy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNyb3NzLVByb2R1Y3QgRXhwZXJpZW5jZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkV4cGVyaWVuY2UgYWNyb3NzIGJvdGggQjJDIGFuZCBCMkIgcHJvZHVjdHMsIHdpdGggYSBiYWNrZ3JvdW5kIGluIHByb2plY3QgbWFuYWdlbWVudC4gSSB1bmRlcnN0YW5kIGJ1c2luZXNzIHN0cmF0ZWd5IGFuZCBjYW4gbmF2aWdhdGUgY29tcGxleCBzdGFrZWhvbGRlciBsYW5kc2NhcGVzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQWRhcHRhYmxlIHRvIEFueSBUZWFtIFN0cnVjdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkV4cGVyaWVuY2VkIGluIGdlbmVyYWxpemVkIHRlYW1zLCBlbWJlZGRlZCBwcm9kdWN0IHRlYW1zLCBhbmQgc29sbyBkZXNpZ24gcm9sZXMgYWNyb3NzIEIyQiBhbmQgQjJDIHByb2R1Y3RzLiBJIGFkYXB0IG15IHdvcmtmbG93IHRvIGZpdCBhbnkgb3JnYW5pemF0aW9uYWwgbW9kZWwuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHdoYXRJbUxvb2tpbmdGb3I6IHtcbiAgICB0aXRsZTogXCJXaGF0IEknbSBMb29raW5nIEZvclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJJ20gc2Vla2luZyBzZW5pb3IgcHJvZHVjdCBkZXNpZ24gcm9sZXMgd2hlcmUgSSBjYW4gbGV2ZXJhZ2UgbXkgZGF0YS1kcml2ZW4gYXBwcm9hY2ggYW5kIHRlY2huaWNhbCBiYWNrZ3JvdW5kIHRvIGRyaXZlIG1lYXN1cmFibGUgYnVzaW5lc3MgaW1wYWN0LiBJIHRocml2ZSBpbiBjcm9zcy1mdW5jdGlvbmFsIGVudmlyb25tZW50cyB3aGVyZSBkZXNpZ24sIGVuZ2luZWVyaW5nLCBhbmQgYnVzaW5lc3Mgc3RyYXRlZ3kgaW50ZXJzZWN0LCBhbmQgSSdtIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgc29sdXRpb25zIHRoYXQgZGVsaXZlciB0YW5naWJsZSByZXN1bHRzLlwiLFxuICAgIGFjdGlvbjoge1xuICAgICAgbGFiZWw6IFwiVmlldyBNeSBSZXN1bWVcIixcbiAgICAgIGhyZWY6IFwiL3Jlc3VtZVwiLFxuICAgIH0sXG4gIH0sXG4gIHF1aWNrU3RhdHM6IFtcbiAgICB7XG4gICAgICB2YWx1ZTogXCI0ME0rXCIsXG4gICAgICBsYWJlbDogXCJVbmlxdWUgVXNlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICAgIGxhYmVsOiBcIlN0dWRlbnRzIE1lbnRvcmVkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIzIFllYXJzXCIsXG4gICAgICBsYWJlbDogXCJUZWFjaGluZyBFeHBlcmllbmNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCJCMkMgJiBCMkJcIixcbiAgICAgIGxhYmVsOiBcIlByb2R1Y3QgRXhwZXJpZW5jZVwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUlkLCBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXBDb250cm9sbGVyID0ge1xuICBhY3RpdmVDYXNlU3R1ZHk6IENhc2VTdHVkeVN1bW1hcnkgfCBudWxsO1xuICBvcGVuUmVjYXA6IChpZDogQ2FzZVN0dWR5SWQpID0+IHZvaWQ7XG4gIGNsb3NlUmVjYXA6ICgpID0+IHZvaWQ7XG4gIGlzT3BlbjogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHVzZUNhc2VTdHVkeVJlY2FwID0gKGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+KTogQ2FzZVN0dWR5UmVjYXBDb250cm9sbGVyID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2FzZVN0dWR5SWQsIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWRdID0gdXNlU3RhdGU8Q2FzZVN0dWR5SWQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBhY3RpdmVDYXNlU3R1ZHkgPSB1c2VNZW1vKFxuICAgICgpID0+IGNhc2VTdHVkaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkQ2FzZVN0dWR5SWQpID8/IG51bGwsXG4gICAgW2Nhc2VTdHVkaWVzLCBzZWxlY3RlZENhc2VTdHVkeUlkXSxcbiAgKTtcblxuICBjb25zdCBvcGVuUmVjYXAgPSB1c2VDYWxsYmFjaygoaWQ6IENhc2VTdHVkeUlkKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZChpZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZVJlY2FwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWQobnVsbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4ge1xuICAgIGFjdGl2ZUNhc2VTdHVkeSxcbiAgICBvcGVuUmVjYXAsXG4gICAgY2xvc2VSZWNhcCxcbiAgICBpc09wZW46IGFjdGl2ZUNhc2VTdHVkeSAhPT0gbnVsbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhc2VTdHVkeVJlY2FwO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgaGVybywgc29jaWFsTGlua3MgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgaG9tZVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IFtcbiAge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiV2ViU2l0ZVwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICAgIHBvdGVudGlhbEFjdGlvbjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlNlYXJjaEFjdGlvblwiLFxuICAgICAgdGFyZ2V0OiBgJHtzaXRlVXJsfS8/cT17c2VhcmNoX3Rlcm1fc3RyaW5nfWAsXG4gICAgICBcInF1ZXJ5LWlucHV0XCI6IFwicmVxdWlyZWQgbmFtZT1zZWFyY2hfdGVybV9zdHJpbmdcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBoZXJvLm5hbWUsXG4gICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBkZXNjcmlwdGlvbjogaGVyby5zdWJ0aXRsZSxcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgaW1hZ2U6IGhlcm8ucG9ydHJhaXQuc3JjLFxuICAgIHNhbWVBczogc29jaWFsTGlua3MubWFwKChsaW5rKSA9PiBsaW5rLmhyZWYpLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlTWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyIGNyYWZ0aW5nIHRydXN0d29ydGh5IGV4cGVyaWVuY2VzXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiUG9ydGZvbGlvIG9mIE1hc2loIFNhZHJpLCBhbiBpbXBhY3Qtb3JpZW50ZWQgc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcHJvdGVjdGluZyBtaWxsaW9ucyBvZiB1c2VycyB0aHJvdWdoIHRydXN0ICYgc2FmZXR5LCBncm93dGgsIGFuZCBkZXNpZ24gc3lzdGVtcy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvXCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IGhlcm8ucG9ydHJhaXQuc3JjLFxuICAgICAgYWx0OiBoZXJvLnBvcnRyYWl0LmFsdCxcbiAgICAgIHdpZHRoOiAxMjAwLFxuICAgICAgaGVpZ2h0OiAxMjAwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBob21lU3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBDYXNlU3R1ZGllc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZGllc1NlY3Rpb25cIjtcbmltcG9ydCBDYXNlU3R1ZHlSZWNhcERpYWxvZyBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nXCI7XG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBNZXRyaWNzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL01ldHJpY3NTZWN0aW9uXCI7XG5pbXBvcnQgV2h5SGlyZU1lU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1doeUhpcmVNZVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkaWVzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICB3aHlIaXJlTWUsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeVJlY2FwIGZyb20gXCIuL2hvb2tzL3VzZUNhc2VTdHVkeVJlY2FwXCI7XG5pbXBvcnQgeyBob21lUGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZUNhc2VTdHVkeSwgY2xvc2VSZWNhcCwgb3BlblJlY2FwIH0gPSB1c2VDYXNlU3R1ZHlSZWNhcChjYXNlU3R1ZGllcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uaG9tZVBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2hlcm99IC8+XG4gICAgICA8V2h5SGlyZU1lU2VjdGlvbiBjb250ZW50PXt3aHlIaXJlTWV9IC8+XG4gICAgICA8TWV0cmljc1NlY3Rpb24gbWV0cmljcz17bWV0cmljc30gLz5cbiAgICAgIDxDYXNlU3R1ZGllc1NlY3Rpb24gY2FzZVN0dWRpZXM9e2Nhc2VTdHVkaWVzfSBvbk9wZW5SZWNhcD17b3BlblJlY2FwfSAvPlxuICAgICAgPENvbnRhY3RTZWN0aW9uIC8+XG5cbiAgICAgIDxDYXNlU3R1ZHlSZWNhcERpYWxvZyBjYXNlU3R1ZHk9e2FjdGl2ZUNhc2VTdHVkeX0gb25DbG9zZT17Y2xvc2VSZWNhcH0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhv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LE1BQ1QsUUFBUSxHQUFHO0FBQUEsTUFDWCxlQUFlO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTSxLQUFLO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixhQUFhLEtBQUs7QUFBQSxJQUNsQixLQUFLO0FBQUEsSUFDTCxPQUFPLEtBQUssU0FBUztBQUFBLElBQ3JCLFFBQVEsWUFBWSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7QUFBQSxFQUM3QztBQUNGO0FBRU8sSUFBTSxtQkFBaUM7QUFBQSxFQUM1QyxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssU0FBUztBQUFBLE1BQ25CLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDbkIsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7Ozs7QUM3QkEsSUFBTSxXQUFXLE1BQU07QUFBQSxFQUNyQixRQUFRLGlCQUFpQixZQUFZLGNBQWMsMEJBQWtCLFdBQVc7QUFBQSxFQUVoRix1QkFDRTtBQUFBLGNBVUU7QUFBQSxzQkFUQSx5QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQTJCO0FBQUEsc0JBRTNCLHlCQUFDLHFCQUFEO0FBQUEsUUFBYTtBQUFBLFNBQWIsaUNBQXlCO0FBQUEsc0JBQ3pCLHlCQUFDLDBCQUFEO0FBQUEsUUFBa0IsU0FBUztBQUFBLFNBQTNCLGlDQUFzQztBQUFBLHNCQUN0Qyx5QkFBQyx3QkFBRDtBQUFBLFFBQWdCO0FBQUEsU0FBaEIsaUNBQWtDO0FBQUEsc0JBQ2xDLHlCQUFDLDRCQUFEO0FBQUEsUUFBb0I7QUFBQSxRQUEwQixhQUFhO0FBQUEsU0FBM0QsaUNBQXNFO0FBQUEsc0JBQ3RFLHlCQUFDLHdCQUFELHFDQUFnQjtBQUFBLHNCQUVoQix5QkFBQyw4QkFBRDtBQUFBLFFBQXNCLFdBQVc7QUFBQSxRQUFpQixTQUFTO0FBQUEsU0FBM0QsaUNBQXVFO0FBQUE7QUFBQSxLQVR6RSxnQ0FVRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjVCNkQ0QzI2Q0M3ODdCRjI2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
