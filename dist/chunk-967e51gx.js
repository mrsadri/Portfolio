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

// src/features/home/components/ExperiencesSection.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var ExperiencesSection = ({ experiences }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
          spacing: 3,
          alignItems: "center",
          textAlign: "center",
          mb: 6,
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
              variant: "h2",
              children: "Other Exciting Experience"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
              variant: "h6",
              color: "text.secondary",
              children: "Alongside my professional journey"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
          container: true,
          spacing: 4,
          children: experiences.map((experience) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Card_default, {
              sx: { height: "100%" },
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
                  component: "img",
                  src: experience.image.src,
                  alt: experience.image.alt,
                  loading: "lazy",
                  sx: {
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    borderTopLeftRadius: (theme2) => theme2.shape.borderRadius,
                    borderTopRightRadius: (theme2) => theme2.shape.borderRadius
                  }
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(CardContent_default, {
                  children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                    spacing: 2,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                        variant: "h5",
                        children: experience.title
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                        variant: "body1",
                        color: "text.secondary",
                        children: experience.description
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                        direction: "row",
                        spacing: 1,
                        flexWrap: "wrap",
                        children: experience.tags.map((tag) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
                          label: tag,
                          size: "small",
                          sx: {
                            backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.12)" : "rgba(98, 132, 218, 0.22)",
                            color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
                          }
                        }, tag, false, undefined, this))
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                }, undefined, false, undefined, this),
                experience.link && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(CardActions_default, {
                  sx: { pt: 0, pb: 3, px: 3 },
                  children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Button_default, {
                    component: "a",
                    href: experience.link.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    endIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                    children: experience.link.label
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, experience.title, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
var ExperiencesSection_default = ExperiencesSection;

// src/features/home/components/HeroSection.tsx
var import_react = __toESM(require_react(), 1);

// images/badges/certified-badge.png
var certified_badge_default = "./certified-badge-p1bwqvk4.png";

// src/features/home/components/HeroSection.tsx
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
    component: "section",
    sx: (theme2) => ({
      py: { xs: 6, md: 9 },
      background: theme2.palette.mode === "light" ? "radial-gradient(circle at 20% 15%, rgba(145, 167, 255, 0.12), transparent 58%), radial-gradient(circle at 80% 20%, rgba(34, 84, 255, 0.1), transparent 52%)" : "radial-gradient(circle at 18% 15%, rgba(73, 109, 193, 0.18), transparent 60%), radial-gradient(circle at 78% 18%, rgba(48, 86, 176, 0.18), transparent 55%)"
    }),
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
        direction: { xs: "column", md: "row" },
        spacing: { xs: 4, md: 3.5 },
        sx: {
          alignItems: { xs: "center", md: "stretch" },
          px: { xs: 0, md: 2 }
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
            spacing: 2.5,
            sx: {
              flexBasis: { md: "30%" },
              maxWidth: { md: "30%" },
              flexShrink: 0,
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              width: "100%"
            },
            children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
              sx: {
                position: "relative",
                width: "100%",
                maxWidth: { xs: 260, sm: 300, md: 320 }
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Avatar_default, {
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
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
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
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
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
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
                spacing: { xs: 1.4, md: 1.8 },
                sx: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
                    direction: { xs: "column", sm: "row" },
                    spacing: { xs: 1, sm: 1.5 },
                    alignItems: { xs: "center", sm: "flex-start" },
                    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Pill_default, {
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
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                    variant: "display",
                    sx: {
                      lineHeight: 1.05,
                      letterSpacing: "-0.015em"
                    },
                    children: hero.name
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                    variant: "h2",
                    sx: {
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                      letterSpacing: { xs: "0.01em", md: "0.005em" },
                      maxWidth: { md: "78%" }
                    },
                    children: hero.title
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                variant: "subtitle1",
                sx: {
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1.05rem", md: "1.12rem" },
                  lineHeight: { xs: 1.65, md: 1.7 }
                },
                children: hero.subtitle
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
                spacing: { xs: 1.4, sm: 1.8 },
                direction: { xs: "column", sm: "row" },
                sx: { pt: { xs: 0.5, md: 0.75 } },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(PrimaryButton_default, {
                    endIcon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                    size: "large",
                    sx: { minWidth: { sm: 220 } },
                    onClick: handlePrimaryCtaClick,
                    children: hero.ctaPrimary.label
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(GhostButton_default, {
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
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var ImpactStatCard = ({ value, title, description }) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Card_default, {
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
  children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(CardContent_default, {
    sx: { display: "flex", flexDirection: "column", gap: 1 },
    children: [
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
        variant: "h4",
        component: "p",
        children: value
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
        variant: "h6",
        component: "h6",
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
        variant: "body2",
        color: "text.secondary",
        children: description
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
}, undefined, false, undefined, this);
var ImpactStatCard_default = ImpactStatCard;

// src/features/home/components/MetricsSection.tsx
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var MetricsSection = ({ metrics }) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
  component: "section",
  sx: { py: { xs: 6, md: 8 }, pt: { md: 6 } },
  children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Grid_default, {
      container: true,
      spacing: { xs: 3, md: 3.5 },
      children: metrics.map(({ value, title, description }) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Grid_default, {
        size: { xs: 12, sm: 6, md: 3 },
        children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ImpactStatCard_default, {
          value,
          title,
          description
        }, undefined, false, undefined, this)
      }, title, false, undefined, this))
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var MetricsSection_default = MetricsSection;

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
  title: "an impact-oriented Product Designer",
  subtitle: "with 6+ years of experience, enhancing experiences for 40 million active users",
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

// src/features/home/hooks/useCaseStudyRecap.ts
var import_react2 = __toESM(require_react(), 1);
var useCaseStudyRecap = (caseStudies2) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = import_react2.useState(null);
  const activeCaseStudy = import_react2.useMemo(() => caseStudies2.find((item) => item.id === selectedCaseStudyId) ?? null, [caseStudies2, selectedCaseStudyId]);
  const openRecap = import_react2.useCallback((id) => {
    setSelectedCaseStudyId(id);
  }, []);
  const closeRecap = import_react2.useCallback(() => {
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
var jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
var HomePage = () => {
  const { activeCaseStudy, closeRecap, openRecap } = useCaseStudyRecap_default(caseStudies);
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Seo_default, {
        ...homePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(HeroSection_default, {
        hero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(MetricsSection_default, {
        metrics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(CaseStudiesSection_default, {
        caseStudies,
        onOpenRecap: openRecap
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ExperiencesSection_default, {
        experiences
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ContactSection_default, {
        socialLinks
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(CaseStudyRecapDialog_default, {
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

//# debugId=D4578667DDE373F864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRXZlbnRBdmFpbGFibGUuanMiLCAiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9FeHBlcmllbmNlc1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvSW1wYWN0U3RhdENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvTWV0cmljc1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9ob29rcy91c2VDYXNlU3R1ZHlSZWNhcC50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9zZW8udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvSG9tZVBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk01IDEzaDExLjE3bC00Ljg4IDQuODhjLS4zOS4zOS0uMzkgMS4wMyAwIDEuNDJzMS4wMi4zOSAxLjQxIDBsNi41OS02LjU5Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTYuNTgtNi42YS45OTYuOTk2IDAgMCAwLTEuNDEgMGMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxNi4xNyAxMUg1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxXCJcbn0pLCAnQXJyb3dGb3J3YXJkUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTEwLjggMTUuOSA0LjY3LTMuNWMuMjctLjIuMjctLjYgMC0uOEwxMC44IDguMWMtLjMzLS4yNS0uOC0uMDEtLjguNHY3YzAgLjQxLjQ3LjY1LjguNE0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEdob3N0QnV0dG9uLCBQaWxsLCBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5Q2FyZFByb3BzID0ge1xuICBjYXNlU3R1ZHk6IENhc2VTdHVkeVN1bW1hcnk7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIG9uT3BlblJlY2FwPzogTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xufTtcblxuY29uc3QgQ2FzZVN0dWR5Q2FyZCA9ICh7IGNhc2VTdHVkeSwgYWN0aXZlID0gZmFsc2UsIG9uT3BlblJlY2FwIH06IENhc2VTdHVkeUNhcmRQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgcGFsZXR0ZSwgdG9rZW5zIH0gPSB0aGVtZTtcbiAgY29uc3QgaXNEYXJrID0gcGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIjtcblxuICBjb25zdCBhY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjAsIDQ1LCAxMTAsIDAuOTgpLCByZ2JhKDU4LCAxMTgsIDIyNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNywgNzYsIDE3MCwgMC44OCksIHJnYmEoNjAsIDE1MSwgMjU1LCAwLjgyKSlcIjtcblxuICBjb25zdCBpbmFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgyMCwgMjgsIDUyLCAwLjgyKSwgcmdiYSgxMiwgMTgsIDM2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0OCwgMjUxLCAyNTUsIDAuOTQpLCByZ2JhKDIzMiwgMjQyLCAyNTUsIDAuODgpKVwiO1xuXG4gIGNvbnN0IGhlYWRpbmdDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjI2LCAyMzQsIDI1NSwgMC45NSlcIlxuICAgICAgOiBwYWxldHRlLnRleHQucHJpbWFyeTtcblxuICBjb25zdCBib2R5Q29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIxMCwgMjIwLCAyNTUsIDAuODIpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcblxuICBjb25zdCBib3JkZXJDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4yOClcIlxuICAgICAgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMTIpXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgICBlbGV2YXRpb249ezB9XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gYWN0aXZlQmFja2dyb3VuZCA6IGluYWN0aXZlQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcbiAgICAgICAgY29sb3I6IGFjdGl2ZSA/IHBhbGV0dGUuY29tbW9uLndoaXRlIDogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIGJveFNoYWRvdzogYWN0aXZlID8gdG9rZW5zLnNoYWRvdy5sZXZlbDMgOiB0b2tlbnMuc2hhZG93LmxldmVsMixcbiAgICAgICAgdHJhbnNpdGlvbjogdG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTZweClcIixcbiAgICAgICAgICBib3hTaGFkb3c6IHRva2Vucy5zaGFkb3cubGV2ZWwzLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBiOiAzIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV5ZWJyb3dcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE4OSwgMjA0LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FzZSB7Y2FzZVN0dWR5Lm51bWJlcn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXNlU3R1ZHkudGFnfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yNClcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjcsIDI0MSwgMjU1LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIxNCwgMjI0LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXI6IGFjdGl2ZSA/IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDNcIiBzeD17eyBjb2xvcjogaGVhZGluZ0NvbG9yIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm19XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgbWw6IDAuNzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAoe2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbH0pXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXQgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IGJvZHlDb2xvciB9fT5cbiAgICAgICAgICAgICAge2Nhc2VTdHVkeS5zdGF0fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCwgZ2FwOiAxIH19PlxuICAgICAgICB7YWN0aXZlID8gKFxuICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgY29sb3I9e2FjdGl2ZSA/IFwiaW5oZXJpdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgb25DbGljaz17b25PcGVuUmVjYXB9XG4gICAgICAgICAgZW5kSWNvbj17PFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gLz59XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSlcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNilcIlxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTQpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBSZWNhcFxuICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUlkLCBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQ2FzZVN0dWR5Q2FyZCBmcm9tIFwiLi9DYXNlU3R1ZHlDYXJkXCI7XG5cbnR5cGUgQ2FzZVN0dWRpZXNTZWN0aW9uUHJvcHMgPSB7XG4gIGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+O1xuICBvbk9wZW5SZWNhcDogKGlkOiBDYXNlU3R1ZHlJZCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENhc2VTdHVkaWVzU2VjdGlvbiA9ICh7IGNhc2VTdHVkaWVzLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZGllc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgaWQ9XCJjYXNlLXN0dWRpZXNcIlxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSwgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIiB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezZ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5DYXNlIHN0dWRpZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBFeGFtcGxlcyBvZiB0aGUgaW1wYWN0IEkgaGF2ZSBtYWRlXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgIHtjYXNlU3R1ZGllcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIDxDYXNlU3R1ZHlDYXJkXG4gICAgICAgICAgICAgIGNhc2VTdHVkeT17aXRlbX1cbiAgICAgICAgICAgICAgYWN0aXZlPXtpdGVtLmlkID09PSBcImRpdmFyXCJ9XG4gICAgICAgICAgICAgIG9uT3BlblJlY2FwPXsoKSA9PiBvbk9wZW5SZWNhcChpdGVtLmlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZGllc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBEaWFsb2csXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ1RpdGxlLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcERpYWxvZ1Byb3BzID0ge1xuICBjYXNlU3R1ZHk6IENhc2VTdHVkeVN1bW1hcnkgfCBudWxsO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ2FzZVN0dWR5UmVjYXBEaWFsb2cgPSAoeyBjYXNlU3R1ZHksIG9uQ2xvc2UgfTogQ2FzZVN0dWR5UmVjYXBEaWFsb2dQcm9wcykgPT4gKFxuICA8RGlhbG9nXG4gICAgb3Blbj17Qm9vbGVhbihjYXNlU3R1ZHkpfVxuICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiXG4gID5cbiAgICB7Y2FzZVN0dWR5ID8gKFxuICAgICAgPD5cbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiPntjYXNlU3R1ZHkucmVjYXAuaGVhZGxpbmV9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MS41fSBzeD17eyBwbDogMiB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucmVjYXAuYnVsbGV0cy5tYXAoKGJ1bGxldCkgPT4gKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17YnVsbGV0fSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge2J1bGxldH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gbXQ9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWVwIGRpdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8Lz5cbiAgICApIDogbnVsbH1cbiAgPC9EaWFsb2c+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlSZWNhcERpYWxvZztcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNi41MyAxMS4wNiAxNS40NyAxMGwtNC44OCA0Ljg4LTIuMTItMi4xMi0xLjA2IDEuMDZMMTAuNTkgMTd6TTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0ybTAgMTZINVY4aDE0elwiXG59KSwgJ0V2ZW50QXZhaWxhYmxlJyk7IiwKICAgICJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvblByb3BzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbnR5cGUgQ29udGFjdEFjdGlvbiA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICB2YXJpYW50PzogQnV0dG9uUHJvcHNbXCJ2YXJpYW50XCJdO1xuICBjb2xvcj86IEJ1dHRvblByb3BzW1wiY29sb3JcIl07XG4gIHRhcmdldD86IHN0cmluZztcbiAgcmVsPzogc3RyaW5nO1xufTtcblxudHlwZSBMZXRzVGFsa1NlY3Rpb25Qcm9wcyA9IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJpbWFyeUFjdGlvbjogQ29udGFjdEFjdGlvbjtcbiAgc2Vjb25kYXJ5QWN0aW9ucz86IFJlYWRvbmx5QXJyYXk8Q29udGFjdEFjdGlvbj47XG59O1xuXG5jb25zdCBnZXRFeHRlcm5hbExpbmtQcm9wcyA9IChocmVmOiBzdHJpbmcpID0+IHtcbiAgaWYgKGhyZWYuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICB9IGFzIGNvbnN0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHVuZGVmaW5lZCxcbiAgICByZWw6IHVuZGVmaW5lZCxcbiAgfSBhcyBjb25zdDtcbn07XG5cbmNvbnN0IExldHNUYWxrU2VjdGlvbiA9ICh7XG4gIGlkLFxuICB0aXRsZSA9IFwiTGV0J3MgVGFsayBhbmQgV29yayBUb2dldGhlclwiLFxuICBkZXNjcmlwdGlvbiA9IFwiSSdtIGFsd2F5cyBvcGVuIHRvIGRpc2N1c3NpbmcgbmV3IHByb2plY3RzLCBjcmVhdGl2ZSBpZGVhcywgb3Igb3Bwb3J0dW5pdGllcyB0byBiZSBwYXJ0IG9mIHlvdXIgdmlzaW9uLlwiLFxuICBwcmltYXJ5QWN0aW9uLFxuICBzZWNvbmRhcnlBY3Rpb25zID0gW10sXG59OiBMZXRzVGFsa1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBpZD17aWR9IHN4PXt7IHB5OiB7IHhzOiA0LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q2FyZFxuICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHsgeHM6IFwiMTZweFwiLCBtZDogXCIyNHB4XCIgfSxcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICBweDogeyB4czogMi41LCBtZDogNSB9LFxuICAgICAgICAgIHB5OiB7IHhzOiAzLCBtZDogNSB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgcGI6IDAsIHB4OiB7IHhzOiAwLCBtZDogMCB9IH19PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLCBtZDogMS41IH19IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiIFxuICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIxLjVyZW1cIiwgbWQ6IFwiMnJlbVwiIH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiB7IHhzOiBcIjAuODc1cmVtXCIsIG1kOiBcIjFyZW1cIiB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IHsgeHM6IDIuNSwgbWQ6IDQgfSwgcHg6IDAsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogeyB4czogMS41LCBtZDogMiB9IH19PlxuICAgICAgICAgIHsvKiBQcmltYXJ5IEFjdGlvbiAtIEZ1bGwgV2lkdGggKi99XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICBocmVmPXtwcmltYXJ5QWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICBzdGFydEljb249e3ByaW1hcnlBY3Rpb24uaWNvbn1cbiAgICAgICAgICAgIHZhcmlhbnQ9e3ByaW1hcnlBY3Rpb24udmFyaWFudCA/PyBcImNvbnRhaW5lZFwifVxuICAgICAgICAgICAgY29sb3I9e3ByaW1hcnlBY3Rpb24uY29sb3IgPz8gXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgc3g9e3sgbWluSGVpZ2h0OiB7IHhzOiBcIjQ4cHhcIiwgbWQ6IFwiNTZweFwiIH0gfX1cbiAgICAgICAgICAgIHRhcmdldD17cHJpbWFyeUFjdGlvbi50YXJnZXQgPz8gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMocHJpbWFyeUFjdGlvbi5ocmVmKS50YXJnZXR9XG4gICAgICAgICAgICByZWw9e3ByaW1hcnlBY3Rpb24ucmVsID8/IGdldEV4dGVybmFsTGlua1Byb3BzKHByaW1hcnlBY3Rpb24uaHJlZikucmVsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcmltYXJ5QWN0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBTZWNvbmRhcnkgQWN0aW9ucyAtIEdyb3VwZWQgUm93ICovfVxuICAgICAgICAgIHtzZWNvbmRhcnlBY3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS41LCBtZDogMS41IH19XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIlxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY29uZGFyeUFjdGlvbnMubWFwKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbFByb3BzID0gZ2V0RXh0ZXJuYWxMaW5rUHJvcHMoYWN0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17YWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXthY3Rpb24uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXthY3Rpb24uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17YWN0aW9uLnZhcmlhbnQgPz8gXCJvdXRsaW5lZFwifVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17YWN0aW9uLmNvbG9yID8/IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3sgeHM6IHRydWUsIG1kOiBmYWxzZSB9fVxuICAgICAgICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IFwiNDhweFwiLCBtZDogXCI0OHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4OiB7IG1kOiBcIjEgMSAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogeyBtZDogMCB9LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2FjdGlvbi50YXJnZXQgPz8gZXh0ZXJuYWxQcm9wcy50YXJnZXR9XG4gICAgICAgICAgICAgICAgICAgIHJlbD17YWN0aW9uLnJlbCA/PyBleHRlcm5hbFByb3BzLnJlbH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCB0eXBlIHsgQ29udGFjdEFjdGlvbiwgTGV0c1RhbGtTZWN0aW9uUHJvcHMgfTtcbmV4cG9ydCBkZWZhdWx0IExldHNUYWxrU2VjdGlvbjtcblxuIiwKICAgICJpbXBvcnQgRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFJvdW5kZWRcIjtcbmltcG9ydCBFdmVudEF2YWlsYWJsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRXZlbnRBdmFpbGFibGVcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YlwiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UZWxlZ3JhbVwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMZXRzVGFsa1NlY3Rpb24gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBDb250YWN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0xldHNUYWxrU2VjdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBTb2NpYWxMaW5rIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ29udGFjdFNlY3Rpb25Qcm9wcyA9IHtcbiAgc29jaWFsTGlua3M6IFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz47XG59O1xuXG5jb25zdCBJQ09OX01BUDogUmVjb3JkPHN0cmluZywgUmVhY3ROb2RlPiA9IHtcbiAgTGlua2VkSW46IDxMaW5rZWRJbkljb24gLz4sXG4gIEdpdEh1YjogPEdpdEh1Ykljb24gLz4sXG59O1xuXG5jb25zdCBDb250YWN0U2VjdGlvbiA9ICh7IHNvY2lhbExpbmtzIH06IENvbnRhY3RTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgYmFzZUFjdGlvbnM6IENvbnRhY3RBY3Rpb25bXSA9IHNvY2lhbExpbmtzLm1hcCgobGluaykgPT4gKHtcbiAgICBsYWJlbDogbGluay5sYWJlbCxcbiAgICBocmVmOiBsaW5rLmhyZWYsXG4gICAgaWNvbjogSUNPTl9NQVBbbGluay5sYWJlbF0gPz8gdW5kZWZpbmVkLFxuICB9KSk7XG5cbiAgY29uc3Qgc2Vjb25kYXJ5QWN0aW9uczogQ29udGFjdEFjdGlvbltdID0gW1xuICAgIC4uLmJhc2VBY3Rpb25zLFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkRpcmVjdCBtZXNzYWdlXCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdC5tZS9tYXNpaHNhZHJpXCIsXG4gICAgICBpY29uOiA8VGVsZWdyYW1JY29uIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gICAgICBocmVmOiBcIi9jb250YWN0I21lbnRvcnNoaXBcIixcbiAgICAgIGljb246IDxFdmVudEF2YWlsYWJsZUljb24gLz4sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMZXRzVGFsa1NlY3Rpb25cbiAgICAgIGlkPVwiY29udGFjdFwiXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgIGxhYmVsOiBcInNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgICAgIGhyZWY6IFwibWFpbHRvOnNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgICAgIGljb246IDxFbWFpbFJvdW5kZWRJY29uIC8+LFxuICAgICAgfX1cbiAgICAgIHNlY29uZGFyeUFjdGlvbnM9e3NlY29uZGFyeUFjdGlvbnN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RTZWN0aW9uO1xuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IHR5cGUgeyBFeHBlcmllbmNlU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgUGlsbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcblxudHlwZSBFeHBlcmllbmNlc1NlY3Rpb25Qcm9wcyA9IHtcbiAgZXhwZXJpZW5jZXM6IFJlYWRvbmx5QXJyYXk8RXhwZXJpZW5jZVN1bW1hcnk+O1xufTtcblxuY29uc3QgRXhwZXJpZW5jZXNTZWN0aW9uID0gKHsgZXhwZXJpZW5jZXMgfTogRXhwZXJpZW5jZXNTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+T3RoZXIgRXhjaXRpbmcgRXhwZXJpZW5jZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBBbG9uZ3NpZGUgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXlcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtleHBlcmllbmNlLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtleHBlcmllbmNlLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17ZXhwZXJpZW5jZS5pbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntleHBlcmllbmNlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5saW5rICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBwdDogMCwgcGI6IDMsIHB4OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZXhwZXJpZW5jZS5saW5rLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5saW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgSGVyb0NvbnRlbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEdob3N0QnV0dG9uLCBQaWxsLCBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IGNlcnRpZmllZEJhZGdlU3JjIGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYmFkZ2VzL2NlcnRpZmllZC1iYWRnZS5wbmdcIjtcbmltcG9ydCB7IHNtb290aFNjcm9sbFRvRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9zbW9vdGhTY3JvbGxcIjtcblxudHlwZSBIZXJvU2VjdGlvblByb3BzID0ge1xuICBoZXJvOiBIZXJvQ29udGVudDtcbn07XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKHsgaGVybyB9OiBIZXJvU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaGFuZGxlUHJpbWFyeUN0YUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldElkID0gaGVyby5jdGFQcmltYXJ5LnNjcm9sbFRvSWQgPz8gaGVyby5jdGFQcmltYXJ5LnRvO1xuICAgIGlmICghdGFyZ2V0SWQgfHwgdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldElkLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpemVkSWQgPSB0YXJnZXRJZC5zdGFydHNXaXRoKFwiI1wiKSA/IHRhcmdldElkLnNsaWNlKDEpIDogdGFyZ2V0SWQ7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNhbml0aXplZElkKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgc21vb3RoU2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIHsgZHVyYXRpb246IDkwMCwgb2Zmc2V0OiAxNiB9KTtcbiAgICB9XG4gIH0sIFtoZXJvLmN0YVByaW1hcnkuc2Nyb2xsVG9JZCwgaGVyby5jdGFQcmltYXJ5LnRvXSk7XG5cbiAgY29uc3QgaGFuZGxlU2Vjb25kYXJ5Q3RhQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBoZXJvLmN0YVNlY29uZGFyeS5zY3JvbGxUb0lkID8/IGhlcm8uY3RhU2Vjb25kYXJ5LnRvO1xuICAgIGlmICghdGFyZ2V0SWQgfHwgdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldElkLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpemVkSWQgPSB0YXJnZXRJZC5zdGFydHNXaXRoKFwiI1wiKSA/IHRhcmdldElkLnNsaWNlKDEpIDogdGFyZ2V0SWQ7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNhbml0aXplZElkKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgc21vb3RoU2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIHsgZHVyYXRpb246IDkwMCwgb2Zmc2V0OiAxNiB9KTtcbiAgICB9XG4gIH0sIFtoZXJvLmN0YVNlY29uZGFyeS5zY3JvbGxUb0lkLCBoZXJvLmN0YVNlY29uZGFyeS50b10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBweTogeyB4czogNiwgbWQ6IDkgfSxcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgPyBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDE1JSwgcmdiYSgxNDUsIDE2NywgMjU1LCAwLjEyKSwgdHJhbnNwYXJlbnQgNTglKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDM0LCA4NCwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCA1MiUpXCJcbiAgICAgICAgICAgIDogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAxNSUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjE4KSwgdHJhbnNwYXJlbnQgNjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3OCUgMTglLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE4KSwgdHJhbnNwYXJlbnQgNTUlKVwiLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiAzLjUgfX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwic3RyZXRjaFwiIH0sXG4gICAgICAgICAgICBweDogeyB4czogMCwgbWQ6IDIgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXsyLjV9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzMjAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgIHNyYz17aGVyby5wb3J0cmFpdC5zcmN9XG4gICAgICAgICAgICAgICAgYWx0PXtoZXJvLnBvcnRyYWl0LmFsdH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDE4cHggNDBweCByZ2JhKDE3LCAzNiwgODMsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjU1KVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17Y2VydGlmaWVkQmFkZ2VTcmN9XG4gICAgICAgICAgICAgICAgYWx0PVwiQ2VydGlmaWVkIGJhZGdlXCJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IHsgeHM6IC0xOCwgbWQ6IC0yNCB9LFxuICAgICAgICAgICAgICAgICAgbGVmdDogeyB4czogLTE4LCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMTIwLCBtZDogMTUwIH0sXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIuMjUsIG1kOiAyLjc1IH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiNzAlXCIgfSxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiNzAlXCIgfSxcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNCwgbWQ6IDEuOCB9fSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLCBzbTogMS41IH19XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17eyB4czogXCJjZW50ZXJcIiwgc206IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2hlcm8uZ3JlZXRpbmd9XG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4zLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkaXNwbGF5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4wNSxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiLTAuMDE1ZW1cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8ubmFtZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogeyB4czogXCIwLjAxZW1cIiwgbWQ6IFwiMC4wMDVlbVwiIH0sXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3OCVcIiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjEycmVtXCIgfSxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjY1LCBtZDogMS43IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS40LCBzbTogMS44IH19XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgc3g9e3sgcHQ6IHsgeHM6IDAuNSwgbWQ6IDAuNzUgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiB7IHNtOiAyMjAgfSB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByaW1hcnlDdGFDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vjb25kYXJ5Q3RhQ2xpY2t9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVNlY29uZGFyeS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1ldHJpY1N1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBJbXBhY3RTdGF0Q2FyZFByb3BzID0gTWV0cmljU3VtbWFyeTtcblxuY29uc3QgSW1wYWN0U3RhdENhcmQgPSAoeyB2YWx1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH06IEltcGFjdFN0YXRDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxIH19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNlwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0NhcmRDb250ZW50PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBhY3RTdGF0Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1ldHJpY1N1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBJbXBhY3RTdGF0Q2FyZCBmcm9tIFwiLi9JbXBhY3RTdGF0Q2FyZFwiO1xuXG50eXBlIE1ldHJpY3NTZWN0aW9uUHJvcHMgPSB7XG4gIG1ldHJpY3M6IFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT47XG59O1xuXG5jb25zdCBNZXRyaWNzU2VjdGlvbiA9ICh7IG1ldHJpY3MgfTogTWV0cmljc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSwgcHQ6IHsgbWQ6IDYgfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgIHttZXRyaWNzLm1hcCgoeyB2YWx1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IChcbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDYsIG1kOiAzIH19IGtleT17dGl0bGV9PlxuICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENhc2VTdHVkeVN1bW1hcnksXG4gIEV4cGVyaWVuY2VTdW1tYXJ5LFxuICBIZXJvQ29udGVudCxcbiAgTWV0cmljU3VtbWFyeSxcbiAgU29jaWFsTGluayxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBoZXJvOiBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IFwiSGVsbG8g8J+Ri/Cfj7wsIEkgYW1cIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICB0aXRsZTogXCJhbiBpbXBhY3Qtb3JpZW50ZWQgUHJvZHVjdCBEZXNpZ25lclwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIndpdGggNisgeWVhcnMgb2YgZXhwZXJpZW5jZSwgZW5oYW5jaW5nIGV4cGVyaWVuY2VzIGZvciA0MCBtaWxsaW9uIGFjdGl2ZSB1c2Vyc1wiLFxuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyBjYXNlIHN0dWR5XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjYXNlLXN0dWRpZXNcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gICAgc2Nyb2xsVG9JZDogXCJjb250YWN0XCIsXG4gIH0sXG4gIHBvcnRyYWl0OiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgaGVyb1BvcnRyYWl0QXNzZXQsIFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsIHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG4gIH0pLFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3M6IFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB2YWx1ZTogXCI2MCVcIixcbiAgICB0aXRsZTogXCJSZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ28tbGVkIERpdmFy4oCZcyBzZWN1cmUgY2FsbCBzeXN0ZW0gd2l0aCBUcnVzdCAmIFNhZmV0eSB0byBzYWZlZ3VhcmQgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjguM0srXCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCB0ZWFtcyB1c2luZyBNb3JwaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBhbiBvcGVuIGRlc2lnbiBzeXN0ZW0gdGhhdCBwb3dlcnMgRmlnbWEgaGFuZG9mZnMgYW5kIGFjY2VsZXJhdGVzIGhpZ2gtcXVhbGl0eSByZWxlYXNlcy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICB0aXRsZTogXCJEZXNpZ25lcnMgbWVudG9yZWRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGVzaWduZWQgcHJvamVjdC1iYXNlZCBwcm9ncmFtcyBhdCBSYWhuZW1hIENvbGxlZ2UgdG8gaGVscCBlbWVyZ2luZyBkZXNpZ25lcnMgbGF1bmNoIGNhcmVlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4MCVcIixcbiAgICB0aXRsZTogXCJMaWZ0IGluIHF1YWxpZmllZCBsZWFkc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWRlc2lnbmVkIFBlcnNvbOKAmXMgc2lnbi11cCBmdW5uZWwgZW5kLXRvLWVuZCwgcmVtb3ZpbmcgZnJpY3Rpb24gYW5kIGJvb3N0aW5nIGxlYWQgZ2VuZXJhdGlvbiBpbiAzIG1vbnRocy5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PiA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyXCIsXG4gICAgbnVtYmVyOiBcIjAxXCIsXG4gICAgdGFnOiBcIkltcHJvdmluZyBVc2VyIFNhZmV0eVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTdG9yeSBvZiBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICAgIHBsYXRmb3JtOiBcIm9uIERpdmFyXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiQ2xhc3NpZmllZCBBZHMgUGxhdGZvcm1cIixcbiAgICBzdGF0OiBcIkEgZmVhdHVyZSB1c2VkIGJ5IDIuMSBtaWxsaW9uIHVzZXJzIHBlciB3ZWVrXCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwidHJ1c3QgJiBzYWZldHlcIiwgXCJpbXBhY3QgYXQgc2NhbGVcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgY3Jvc3MtZnVuY3Rpb25hbCBndWFyZHJhaWxzIGhlbHBlZCBEaXZhciByZWR1Y2UgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiQ28tbGVkIGEgdGFzayBmb3JjZSBicmlkZ2luZyBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIGFuZCBFbmdpbmVlcmluZy5cIixcbiAgICAgICAgXCJTaGlwcGVkIGR5bmFtaWMgdm9pY2UtbWFza2luZyB3aXRoIGFidXNlIGRldGVjdGlvbiBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgICAgICAgXCJTdG9vZCB1cCBwbGF5Ym9va3MgZm9yIG1vZGVyYXRpb24gb3BzIHRvIG1vbml0b3IgcmVwZWF0IG9mZmVuZGVycy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsXCIsXG4gICAgbnVtYmVyOiBcIjAyXCIsXG4gICAgdGFnOiBcIkJvb3N0aW5nIFVzZXIgRW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnNcIixcbiAgICBwbGF0Zm9ybTogXCJhdCBTZXRhcmUgQXZhbCBDby5cIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJSZXRlbnRpb24gc3RyYXRlZ3lcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJyZXRlbnRpb24gc3RyYXRlZ3lcIiwgXCJjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXBcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIG9uYm9hcmRpbmcgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJNYXBwZWQgYSBuZXcgbGlmZWN5Y2xlIG1vZGVsIHRpZWQgdG8gZGF0YS1iYWNrZWQgZXhwZXJpbWVudGF0aW9uLlwiLFxuICAgICAgICBcIlJlZmluZWQgYWN0aXZhdGlvbiBmbG93cyB0byBzcG90bGlnaHQgdmFsdWUgcHJvcHMgd2l0aGluIGZpcnN0IHNlc3Npb24uXCIsXG4gICAgICAgIFwiQ28tY3JlYXRlZCBhIGxlYXJuaW5nIGFnZW5kYSB0byBtZWFzdXJlIGxveWFsdHkgcHJvZ3JhbSB0cmFjdGlvbi5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlczogUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gSW5zdHJ1Y3RvciBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyAyMDArIHN0dWRlbnRzIHRocm91Z2ggNiBjb3Vyc2VzIHNpbmNlIDIwMjJcIixcbiAgICB0YWdzOiBbXCJlZHVjYXRpb25cIiwgXCJtZW50b3JzaGlwXCIsIFwiY3VycmljdWx1bSBkZXNpZ25cIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCByYWhuZW1hU3R1ZGVudHNBc3NldCwgXCJTdHVkZW50cyBhdCBSYWhuZW1hIENvbGxlZ2VcIiksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIG1vcnBoRGVzaWduU3lzdGVtQXNzZXQsXG4gICAgICBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICApLFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogUmVhZG9ubHlBcnJheTxTb2NpYWxMaW5rPiA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiR2l0SHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiLFxuICB9LFxuXTtcblxuXG4iLAogICAgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVJlY2FwQ29udHJvbGxlciA9IHtcbiAgYWN0aXZlQ2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb3BlblJlY2FwOiAoaWQ6IENhc2VTdHVkeUlkKSA9PiB2b2lkO1xuICBjbG9zZVJlY2FwOiAoKSA9PiB2b2lkO1xuICBpc09wZW46IGJvb2xlYW47XG59O1xuXG5jb25zdCB1c2VDYXNlU3R1ZHlSZWNhcCA9IChjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5Pik6IENhc2VTdHVkeVJlY2FwQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENhc2VTdHVkeUlkLCBzZXRTZWxlY3RlZENhc2VTdHVkeUlkXSA9IHVzZVN0YXRlPENhc2VTdHVkeUlkIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgYWN0aXZlQ2FzZVN0dWR5ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZGllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZENhc2VTdHVkeUlkKSA/PyBudWxsLFxuICAgIFtjYXNlU3R1ZGllcywgc2VsZWN0ZWRDYXNlU3R1ZHlJZF0sXG4gICk7XG5cbiAgY29uc3Qgb3BlblJlY2FwID0gdXNlQ2FsbGJhY2soKGlkOiBDYXNlU3R1ZHlJZCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWQoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VSZWNhcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKG51bGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVDYXNlU3R1ZHksXG4gICAgb3BlblJlY2FwLFxuICAgIGNsb3NlUmVjYXAsXG4gICAgaXNPcGVuOiBhY3RpdmVDYXNlU3R1ZHkgIT09IG51bGwsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXNlU3R1ZHlSZWNhcDtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGhlcm8sIHNvY2lhbExpbmtzIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IGhvbWVTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSBbXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBwb3RlbnRpYWxBY3Rpb246IHtcbiAgICAgIFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIixcbiAgICAgIHRhcmdldDogYCR7c2l0ZVVybH0vP3E9e3NlYXJjaF90ZXJtX3N0cmluZ31gLFxuICAgICAgXCJxdWVyeS1pbnB1dFwiOiBcInJlcXVpcmVkIG5hbWU9c2VhcmNoX3Rlcm1fc3RyaW5nXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogaGVyby5uYW1lLFxuICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgZGVzY3JpcHRpb246IGhlcm8uc3VidGl0bGUsXG4gICAgdXJsOiBzaXRlVXJsLFxuICAgIGltYWdlOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICBzYW1lQXM6IHNvY2lhbExpbmtzLm1hcCgobGluaykgPT4gbGluay5ocmVmKSxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciBjcmFmdGluZyB0cnVzdHdvcnRoeSBleHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlBvcnRmb2xpbyBvZiBNYXNpaCBTYWRyaSwgYW4gaW1wYWN0LW9yaWVudGVkIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHByb3RlY3RpbmcgbWlsbGlvbnMgb2YgdXNlcnMgdGhyb3VnaCB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBhbmQgZGVzaWduIHN5c3RlbXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL1wiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgIGFsdDogaGVyby5wb3J0cmFpdC5hbHQsXG4gICAgICB3aWR0aDogMTIwMCxcbiAgICAgIGhlaWdodDogMTIwMCxcbiAgICB9LFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogaG9tZVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2FzZVN0dWRpZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uXCI7XG5pbXBvcnQgQ2FzZVN0dWR5UmVjYXBEaWFsb2cgZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZHlSZWNhcERpYWxvZ1wiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb25cIjtcbmltcG9ydCBFeHBlcmllbmNlc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FeHBlcmllbmNlc1NlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgTWV0cmljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWRpZXMsXG4gIGV4cGVyaWVuY2VzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICBzb2NpYWxMaW5rcyxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgdXNlQ2FzZVN0dWR5UmVjYXAgZnJvbSBcIi4vaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXBcIjtcbmltcG9ydCB7IGhvbWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlQ2FzZVN0dWR5LCBjbG9zZVJlY2FwLCBvcGVuUmVjYXAgfSA9IHVzZUNhc2VTdHVkeVJlY2FwKGNhc2VTdHVkaWVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5ob21lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17aGVyb30gLz5cbiAgICAgIDxNZXRyaWNzU2VjdGlvbiBtZXRyaWNzPXttZXRyaWNzfSAvPlxuICAgICAgPENhc2VTdHVkaWVzU2VjdGlvbiBjYXNlU3R1ZGllcz17Y2FzZVN0dWRpZXN9IG9uT3BlblJlY2FwPXtvcGVuUmVjYXB9IC8+XG4gICAgICA8RXhwZXJpZW5jZXNTZWN0aW9uIGV4cGVyaWVuY2VzPXtleHBlcmllbmNlc30gLz5cbiAgICAgIDxDb250YWN0U2VjdGlvbiBzb2NpYWxMaW5rcz17c29jaWFsTGlua3N9IC8+XG5cbiAgICAgIDxDYXNlU3R1ZHlSZWNhcERpYWxvZyBjYXNlU3R1ZHk9e2FjdGl2ZUNhc2VTdHVkeX0gb25DbG9zZT17Y2xvc2VSZWNhcH0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5c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O0FBQUE7QUFHRixJQUFlOzs7QUM5QmYsSUFBTSxVQUFVLGFBQVc7QUFFM0IsSUFBTSxxQkFBcUM7QUFBQSxFQUN6QztBQUFBLElBQ0UsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsaUJBQWlCO0FBQUEsTUFDZixTQUFTO0FBQUEsTUFDVCxRQUFRLEdBQUc7QUFBQSxNQUNYLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLEtBQUs7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLGFBQWEsS0FBSztBQUFBLElBQ2xCLEtBQUs7QUFBQSxJQUNMLE9BQU8sS0FBSyxTQUFTO0FBQUEsSUFDckIsUUFBUSxZQUFZLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtBQUFBLEVBQzdDO0FBQ0Y7QUFFTyxJQUFNLG1CQUFpQztBQUFBLEVBQzVDLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDbkIsS0FBSyxLQUFLLFNBQVM7QUFBQSxNQUNuQixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjs7OztBQzVCQSxJQUFNLFdBQVcsTUFBTTtBQUFBLEVBQ3JCLFFBQVEsaUJBQWlCLFlBQVksY0FBYywwQkFBa0IsV0FBVztBQUFBLEVBRWhGLHVCQUNFO0FBQUEsY0FVRTtBQUFBLHNCQVRBLHlCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBMkI7QUFBQSxzQkFFM0IseUJBQUMscUJBQUQ7QUFBQSxRQUFhO0FBQUEsU0FBYixpQ0FBeUI7QUFBQSxzQkFDekIseUJBQUMsd0JBQUQ7QUFBQSxRQUFnQjtBQUFBLFNBQWhCLGlDQUFrQztBQUFBLHNCQUNsQyx5QkFBQyw0QkFBRDtBQUFBLFFBQW9CO0FBQUEsUUFBMEIsYUFBYTtBQUFBLFNBQTNELGlDQUFzRTtBQUFBLHNCQUN0RSx5QkFBQyw0QkFBRDtBQUFBLFFBQW9CO0FBQUEsU0FBcEIsaUNBQThDO0FBQUEsc0JBQzlDLHlCQUFDLHdCQUFEO0FBQUEsUUFBZ0I7QUFBQSxTQUFoQixpQ0FBMEM7QUFBQSxzQkFFMUMseUJBQUMsOEJBQUQ7QUFBQSxRQUFzQixXQUFXO0FBQUEsUUFBaUIsU0FBUztBQUFBLFNBQTNELGlDQUF1RTtBQUFBO0FBQUEsS0FUekUsZ0NBVUU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICJENDU3ODY2N0RERTM3M0Y4NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
