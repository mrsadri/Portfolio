import {
  GitHub_default,
  LinkedIn_default
} from "./chunk-4n4dry3g.js";
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

// node_modules/@mui/icons-material/esm/MailOutlineRounded.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var MailOutlineRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1m-7-7L4 6h16z"
}), "MailOutlineRounded");

// src/features/home/components/ContactSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var ContactSection = ({ socialLinks }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  component: "section",
  sx: (theme) => ({
    py: { xs: 6, md: 8 },
    background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(34,84,255,0.05), transparent 70%)" : "linear-gradient(135deg, rgba(48,86,176,0.18), rgba(4,7,15,0))"
  }),
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    maxWidth: "md",
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
      component: "footer",
      elevation: 0,
      sx: (theme) => ({
        borderRadius: theme.tokens.radius.surface,
        border: `1px solid ${theme.tokens.colors.border}`,
        background: theme.palette.surface.base,
        boxShadow: "none",
        display: "flex",
        flexDirection: "column"
      }),
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardContent_default, {
          sx: {
            px: { xs: 5, md: 5 },
            pt: { xs: 5, md: 5 },
            pb: { xs: 3.5, md: 3.5 },
            "&:last-child": { pb: { xs: 3.5, md: 3.5 } }
          },
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
            spacing: 2,
            alignItems: "center",
            textAlign: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                variant: "h3",
                component: "h2",
                children: "Let’s Talk and Work Together"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                variant: "subtitle1",
                color: "text.secondary",
                sx: { lineHeight: 1.7, maxWidth: 560 },
                children: "I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
          sx: {
            px: { xs: 5, md: 5 },
            pb: { xs: 5, md: 5 },
            pt: 0,
            justifyContent: "center"
          },
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
            direction: { xs: "column", sm: "row" },
            spacing: { xs: 1.25, sm: 1.5 },
            alignItems: "center",
            justifyContent: "center",
            sx: { width: "100%" },
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                component: "a",
                href: "mailto:sadrimasih@gmail.com",
                variant: "contained",
                size: "large",
                startIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(MailOutlineRounded_default, {}, undefined, false, undefined, this),
                sx: {
                  borderRadius: 3,
                  minWidth: { xs: "100%", sm: 260 },
                  px: { xs: 2.5, sm: 4 },
                  py: 1.5
                },
                children: "sadrimasih@gmail.com"
              }, undefined, false, undefined, this),
              socialLinks.map(({ label, href }) => {
                const icon = label === "LinkedIn" ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(LinkedIn_default, {
                  fontSize: "small"
                }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(GitHub_default, {
                  fontSize: "small"
                }, undefined, false, undefined, this);
                return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                  component: "a",
                  href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  variant: "outlined",
                  size: "large",
                  startIcon: icon,
                  sx: {
                    borderRadius: 3,
                    minWidth: { xs: "100%", sm: 160 },
                    px: { xs: 2.5, sm: 3 }
                  },
                  children: label
                }, label, false, undefined, this);
              })
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var ContactSection_default = ContactSection;

// src/features/home/components/ExperiencesSection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var ExperiencesSection = ({ experiences }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
          spacing: 3,
          alignItems: "center",
          textAlign: "center",
          mb: 6,
          children: [
            /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
              variant: "h2",
              children: "Other Exciting Experience"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
              variant: "h6",
              color: "text.secondary",
              children: "Alongside my professional journey"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
          container: true,
          spacing: 4,
          children: experiences.map((experience) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Card_default, {
              sx: { height: "100%" },
              children: [
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
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
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(CardContent_default, {
                  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
                    spacing: 2,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                        variant: "h5",
                        children: experience.title
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                        variant: "body1",
                        color: "text.secondary",
                        children: experience.description
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
                        direction: "row",
                        spacing: 1,
                        flexWrap: "wrap",
                        children: experience.tags.map((tag) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Pill_default, {
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
                experience.link && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(CardActions_default, {
                  sx: { pt: 0, pb: 3, px: 3 },
                  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Button_default, {
                    component: "a",
                    href: experience.link.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    endIcon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hero.ctaPrimary.scrollToId, hero.ctaPrimary.to]);
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
                      maxWidth: { md: "78%" }
                    },
                    children: hero.title
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                variant: "subtitle1",
                sx: {
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1.05rem", md: "1.12rem" },
                  lineHeight: { xs: 1.65, md: 1.7 }
                },
                children: hero.subtitle
              }, undefined, false, undefined, this),
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
                    component: Link,
                    to: hero.ctaSecondary.to,
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
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
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
    label: "Book a call",
    to: "/contact#mentorship"
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
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var HomePage = () => {
  const { activeCaseStudy, closeRecap, openRecap } = useCaseStudyRecap_default(caseStudies);
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Seo_default, {
        ...homePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(HeroSection_default, {
        hero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(MetricsSection_default, {
        metrics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(CaseStudiesSection_default, {
        caseStudies,
        onOpenRecap: openRecap
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ExperiencesSection_default, {
        experiences
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ContactSection_default, {
        socialLinks
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(CaseStudyRecapDialog_default, {
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

//# debugId=B8D5DD1BB0322E0B64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vTWFpbE91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvRXhwZXJpZW5jZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0ltcGFjdFN0YXRDYXJkLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL01ldHJpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9va3MvdXNlQ2FzZVN0dWR5UmVjYXAudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL0hvbWVQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxM2gxMS4xN2wtNC44OCA0Ljg4Yy0uMzkuMzktLjM5IDEuMDMgMCAxLjQyczEuMDIuMzkgMS40MSAwbDYuNTktNi41OWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC02LjU4LTYuNmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTYuMTcgMTFINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMVwiXG59KSwgJ0Fycm93Rm9yd2FyZFJvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiwgUGlsbCwgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VTdHVkeUNhcmQgPSAoeyBjYXNlU3R1ZHksIGFjdGl2ZSA9IGZhbHNlLCBvbk9wZW5SZWNhcCB9OiBDYXNlU3R1ZHlDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG5cbiAgY29uc3QgYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIwLCA0NSwgMTEwLCAwLjk4KSwgcmdiYSg1OCwgMTE4LCAyMjYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTcsIDc2LCAxNzAsIDAuODgpLCByZ2JhKDYwLCAxNTEsIDI1NSwgMC44MikpXCI7XG5cbiAgY29uc3QgaW5hY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjAsIDI4LCA1MiwgMC44MiksIHJnYmEoMTIsIDE4LCAzNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjk0KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjg4KSlcIjtcblxuICBjb25zdCBoZWFkaW5nQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIyNiwgMjM0LCAyNTUsIDAuOTUpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMTAsIDIyMCwgMjU1LCAwLjgyKVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgIDogXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjEyKVwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IGFjdGl2ZUJhY2tncm91bmQgOiBpbmFjdGl2ZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2JvcmRlckNvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBhY3RpdmUgPyBwYWxldHRlLmNvbW1vbi53aGl0ZSA6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IHRva2Vucy5zaGFkb3cubGV2ZWwzIDogdG9rZW5zLnNoYWRvdy5sZXZlbDIsXG4gICAgICAgIHRyYW5zaXRpb246IHRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiB0b2tlbnMuc2hhZG93LmxldmVsMyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYjogMyB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxODksIDIwNCwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhc2Uge2Nhc2VTdHVkeS5udW1iZXJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMTQsIDIyNCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBhY3RpdmUgPyBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcImluaGVyaXRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2FwfVxuICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUmVjYXBcbiAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5Q2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlJZCwgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IENhc2VTdHVkeUNhcmQgZnJvbSBcIi4vQ2FzZVN0dWR5Q2FyZFwiO1xuXG50eXBlIENhc2VTdHVkaWVzU2VjdGlvblByb3BzID0ge1xuICBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcbiAgb25PcGVuUmVjYXA6IChpZDogQ2FzZVN0dWR5SWQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZGllc1NlY3Rpb24gPSAoeyBjYXNlU3R1ZGllcywgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWRpZXNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwiY2FzZS1zdHVkaWVzXCJcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+Q2FzZSBzdHVkaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICB7Y2FzZVN0dWRpZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8Q2FzZVN0dWR5Q2FyZFxuICAgICAgICAgICAgICBjYXNlU3R1ZHk9e2l0ZW19XG4gICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICBvbk9wZW5SZWNhcD17KCkgPT4gb25PcGVuUmVjYXAoaXRlbS5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWRpZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXBEaWFsb2dQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5IHwgbnVsbDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IENhc2VTdHVkeVJlY2FwRGlhbG9nID0gKHsgY2FzZVN0dWR5LCBvbkNsb3NlIH06IENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMpID0+IChcbiAgPERpYWxvZ1xuICAgIG9wZW49e0Jvb2xlYW4oY2FzZVN0dWR5KX1cbiAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICA+XG4gICAge2Nhc2VTdHVkeSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIj57Y2FzZVN0dWR5LnJlY2FwLmhlYWRsaW5lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezEuNX0gc3g9e3sgcGw6IDIgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnJlY2FwLmJ1bGxldHMubWFwKChidWxsZXQpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e2J1bGxldH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IG10PXszfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVlcCBkaXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC8+XG4gICAgKSA6IG51bGx9XG4gIDwvRGlhbG9nPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5UmVjYXBEaWFsb2c7XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ybS0xIDE0SDVjLS41NSAwLTEtLjQ1LTEtMVY4bDYuOTQgNC4zNGMuNjUuNDEgMS40Ny40MSAyLjEyIDBMMjAgOHY5YzAgLjU1LS40NSAxLTEgMW0tNy03TDQgNmgxNnpcIlxufSksICdNYWlsT3V0bGluZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBNYWlsT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01haWxPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR2l0SHViXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBTb2NpYWxMaW5rIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ29udGFjdFNlY3Rpb25Qcm9wcyA9IHtcbiAgc29jaWFsTGlua3M6IFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz47XG59O1xuXG5jb25zdCBDb250YWN0U2VjdGlvbiA9ICh7IHNvY2lhbExpbmtzIH06IENvbnRhY3RTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDUpLCB0cmFuc3BhcmVudCA3MCUpXCJcbiAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg0OCw4NiwxNzYsMC4xOCksIHJnYmEoNCw3LDE1LDApKVwiLFxuICAgIH0pfVxuICA+XG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICA8Q2FyZFxuICAgICAgICBjb21wb25lbnQ9XCJmb290ZXJcIlxuICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnN1cmZhY2UuYmFzZSxcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICBwdDogeyB4czogNSwgbWQ6IDUgfSxcbiAgICAgICAgICAgIHBiOiB7IHhzOiAzLjUsIG1kOiAzLjUgfSxcbiAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkXCI6IHsgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9IH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICBMZXTigJlzIFRhbGsgYW5kIFdvcmsgVG9nZXRoZXJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS43LCBtYXhXaWR0aDogNTYwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEnigJltIGFsd2F5cyBvcGVuIHRvIGRpc2N1c3NpbmcgbmV3IHByb2plY3RzLCBjcmVhdGl2ZSBpZGVhcywgb3Igb3Bwb3J0dW5pdGllcyB0byBiZSBwYXJ0IG9mXG4gICAgICAgICAgICAgIHlvdXIgdmlzaW9uLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQWN0aW9uc1xuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBweDogeyB4czogNSwgbWQ6IDUgfSxcbiAgICAgICAgICAgIHBiOiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgcHQ6IDAsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLjI1LCBzbTogMS41IH19XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgc3RhcnRJY29uPXs8TWFpbE91dGxpbmVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBzbTogMjYwIH0sXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgc206IDQgfSxcbiAgICAgICAgICAgICAgICBweTogMS41LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBzYWRyaW1hc2loQGdtYWlsLmNvbVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWNvbiA9XG4gICAgICAgICAgICAgICAgbGFiZWwgPT09IFwiTGlua2VkSW5cIiA/IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rZWRJbkljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxHaXRIdWJJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBzdGFydEljb249e2ljb259XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IDE2MCB9LFxuICAgICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBzbTogMyB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB0eXBlIHsgRXhwZXJpZW5jZVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5cbnR5cGUgRXhwZXJpZW5jZXNTZWN0aW9uUHJvcHMgPSB7XG4gIGV4cGVyaWVuY2VzOiBSZWFkb25seUFycmF5PEV4cGVyaWVuY2VTdW1tYXJ5Pjtcbn07XG5cbmNvbnN0IEV4cGVyaWVuY2VzU2VjdGlvbiA9ICh7IGV4cGVyaWVuY2VzIH06IEV4cGVyaWVuY2VzU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezZ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk90aGVyIEV4Y2l0aW5nIEV4cGVyaWVuY2U8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgQWxvbmdzaWRlIG15IHByb2Zlc3Npb25hbCBqb3VybmV5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAge2V4cGVyaWVuY2VzLm1hcCgoZXhwZXJpZW5jZSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17ZXhwZXJpZW5jZS50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZXhwZXJpZW5jZS5pbWFnZS5zcmN9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2V4cGVyaWVuY2UuaW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0MCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57ZXhwZXJpZW5jZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAge2V4cGVyaWVuY2UubGluayAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IDAsIHBiOiAzLCBweDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2V4cGVyaWVuY2UubGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UubGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBIZXJvQ29udGVudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgY2VydGlmaWVkQmFkZ2VTcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9iYWRnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ1wiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IEhlcm9Db250ZW50O1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVQcmltYXJ5Q3RhQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBoZXJvLmN0YVByaW1hcnkuc2Nyb2xsVG9JZCA/PyBoZXJvLmN0YVByaW1hcnkudG87XG4gICAgaWYgKCF0YXJnZXRJZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0SWQuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRJZCA9IHRhcmdldElkLnN0YXJ0c1dpdGgoXCIjXCIpID8gdGFyZ2V0SWQuc2xpY2UoMSkgOiB0YXJnZXRJZDtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgfVxuICB9LCBbaGVyby5jdGFQcmltYXJ5LnNjcm9sbFRvSWQsIGhlcm8uY3RhUHJpbWFyeS50b10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBweTogeyB4czogNiwgbWQ6IDkgfSxcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgPyBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDE1JSwgcmdiYSgxNDUsIDE2NywgMjU1LCAwLjEyKSwgdHJhbnNwYXJlbnQgNTglKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDM0LCA4NCwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCA1MiUpXCJcbiAgICAgICAgICAgIDogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAxNSUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjE4KSwgdHJhbnNwYXJlbnQgNjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3OCUgMTglLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE4KSwgdHJhbnNwYXJlbnQgNTUlKVwiLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiAzLjUgfX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwic3RyZXRjaFwiIH0sXG4gICAgICAgICAgICBweDogeyB4czogMCwgbWQ6IDIgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXsyLjV9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzMjAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgIHNyYz17aGVyby5wb3J0cmFpdC5zcmN9XG4gICAgICAgICAgICAgICAgYWx0PXtoZXJvLnBvcnRyYWl0LmFsdH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDE4cHggNDBweCByZ2JhKDE3LCAzNiwgODMsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjU1KVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17Y2VydGlmaWVkQmFkZ2VTcmN9XG4gICAgICAgICAgICAgICAgYWx0PVwiQ2VydGlmaWVkIGJhZGdlXCJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IHsgeHM6IC0xOCwgbWQ6IC0yNCB9LFxuICAgICAgICAgICAgICAgICAgbGVmdDogeyB4czogLTE4LCBtZDogLTI0IH0sXG4gICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMTIwLCBtZDogMTUwIH0sXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIuMjUsIG1kOiAyLjc1IH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiNzAlXCIgfSxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiNzAlXCIgfSxcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNCwgbWQ6IDEuOCB9fSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLCBzbTogMS41IH19XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17eyB4czogXCJjZW50ZXJcIiwgc206IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2hlcm8uZ3JlZXRpbmd9XG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4zLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkaXNwbGF5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4wNSxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiLTAuMDE1ZW1cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8ubmFtZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogeyB4czogXCIwLjAxZW1cIiwgbWQ6IFwiMC4wMDVlbVwiIH0sXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3OCVcIiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjEycmVtXCIgfSxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjY1LCBtZDogMS43IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS40LCBzbTogMS44IH19XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgc3g9e3sgcHQ6IHsgeHM6IDAuNSwgbWQ6IDAuNzUgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiB7IHNtOiAyMjAgfSB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByaW1hcnlDdGFDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtoZXJvLmN0YVNlY29uZGFyeS50b31cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgIHB4OiAzLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEuNSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uY3RhU2Vjb25kYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0cmljU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEltcGFjdFN0YXRDYXJkUHJvcHMgPSBNZXRyaWNTdW1tYXJ5O1xuXG5jb25zdCBJbXBhY3RTdGF0Q2FyZCA9ICh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogSW1wYWN0U3RhdENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIH0pfVxuICA+XG4gICAgPENhcmRDb250ZW50IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEgfX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgIHt2YWx1ZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImg2XCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQ2FyZENvbnRlbnQ+XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcGFjdFN0YXRDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0cmljU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEltcGFjdFN0YXRDYXJkIGZyb20gXCIuL0ltcGFjdFN0YXRDYXJkXCI7XG5cbnR5cGUgTWV0cmljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5Pjtcbn07XG5cbmNvbnN0IE1ldHJpY3NTZWN0aW9uID0gKHsgbWV0cmljcyB9OiBNZXRyaWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9LCBwdDogeyBtZDogNiB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDMuNSB9fT5cbiAgICAgICAge21ldHJpY3MubWFwKCh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfX0ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICA8SW1wYWN0U3RhdENhcmQgdmFsdWU9e3ZhbHVlfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3NTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IGhlcm9Qb3J0cmFpdEFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtc2FkcmktcHJvZmlsZS53ZWJwXCI7XG5pbXBvcnQgbW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21vcnBoLWRlc2lnbi1zeXN0ZW0ud2VicFwiO1xuaW1wb3J0IHJhaG5lbWFTdHVkZW50c0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvcmFobmVtYS1zdHVkZW50cy53ZWJwXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZVJlc291cmNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9hc3NldHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ2FzZVN0dWR5U3VtbWFyeSxcbiAgRXhwZXJpZW5jZVN1bW1hcnksXG4gIEhlcm9Db250ZW50LFxuICBNZXRyaWNTdW1tYXJ5LFxuICBTb2NpYWxMaW5rLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGhlcm86IEhlcm9Db250ZW50ID0ge1xuICBncmVldGluZzogXCJIZWxsbyDwn5GL8J+PvCwgSSBhbVwiLFxuICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gIHRpdGxlOiBcImFuIGltcGFjdC1vcmllbnRlZCBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwid2l0aCA2KyB5ZWFycyBvZiBleHBlcmllbmNlLCBlbmhhbmNpbmcgZXhwZXJpZW5jZXMgZm9yIDQwIG1pbGxpb24gYWN0aXZlIHVzZXJzXCIsXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZHlcIixcbiAgICBzY3JvbGxUb0lkOiBcImNhc2Utc3R1ZGllc1wiLFxuICB9LFxuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogXCJCb29rIGEgY2FsbFwiLFxuICAgIHRvOiBcIi9jb250YWN0I21lbnRvcnNoaXBcIixcbiAgfSxcbiAgcG9ydHJhaXQ6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBoZXJvUG9ydHJhaXRBc3NldCwgXCJNYXNpaCBTYWRyaSAtIFByb2R1Y3QgRGVzaWduZXJcIiwge1xuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogMTIwMCxcbiAgfSksXG59O1xuXG5leHBvcnQgY29uc3QgbWV0cmljczogUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5PiA9IFtcbiAge1xuICAgIHZhbHVlOiBcIjYwJVwiLFxuICAgIHRpdGxlOiBcIlJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDby1sZWQgRGl2YXLigJlzIHNlY3VyZSBjYWxsIHN5c3RlbSB3aXRoIFRydXN0ICYgU2FmZXR5IHRvIHNhZmVndWFyZCAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiOC4zSytcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IHRlYW1zIHVzaW5nIE1vcnBoXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIG9wZW4gZGVzaWduIHN5c3RlbSB0aGF0IHBvd2VycyBGaWdtYSBoYW5kb2ZmcyBhbmQgYWNjZWxlcmF0ZXMgaGlnaC1xdWFsaXR5IHJlbGVhc2VzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgIHRpdGxlOiBcIkRlc2lnbmVycyBtZW50b3JlZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXNpZ25lZCBwcm9qZWN0LWJhc2VkIHByb2dyYW1zIGF0IFJhaG5lbWEgQ29sbGVnZSB0byBoZWxwIGVtZXJnaW5nIGRlc2lnbmVycyBsYXVuY2ggY2FyZWVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgIHRpdGxlOiBcIkxpZnQgaW4gcXVhbGlmaWVkIGxlYWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlZGVzaWduZWQgUGVyc29s4oCZcyBzaWduLXVwIGZ1bm5lbCBlbmQtdG8tZW5kLCByZW1vdmluZyBmcmljdGlvbiBhbmQgYm9vc3RpbmcgbGVhZCBnZW5lcmF0aW9uIGluIDMgbW9udGhzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+ID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXJcIixcbiAgICBudW1iZXI6IFwiMDFcIixcbiAgICB0YWc6IFwiSW1wcm92aW5nIFVzZXIgU2FmZXR5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFN0b3J5IG9mIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gICAgcGxhdGZvcm06IFwib24gRGl2YXJcIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJDbGFzc2lmaWVkIEFkcyBQbGF0Zm9ybVwiLFxuICAgIHN0YXQ6IFwiQSBmZWF0dXJlIHVzZWQgYnkgMi4xIG1pbGxpb24gdXNlcnMgcGVyIHdlZWtcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJ0cnVzdCAmIHNhZmV0eVwiLCBcImltcGFjdCBhdCBzY2FsZVwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyBjcm9zcy1mdW5jdGlvbmFsIGd1YXJkcmFpbHMgaGVscGVkIERpdmFyIHJlZHVjZSBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDby1sZWQgYSB0YXNrIGZvcmNlIGJyaWRnaW5nIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgYW5kIEVuZ2luZWVyaW5nLlwiLFxuICAgICAgICBcIlNoaXBwZWQgZHluYW1pYyB2b2ljZS1tYXNraW5nIHdpdGggYWJ1c2UgZGV0ZWN0aW9uIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICAgICAgICBcIlN0b29kIHVwIHBsYXlib29rcyBmb3IgbW9kZXJhdGlvbiBvcHMgdG8gbW9uaXRvciByZXBlYXQgb2ZmZW5kZXJzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWxcIixcbiAgICBudW1iZXI6IFwiMDJcIixcbiAgICB0YWc6IFwiQm9vc3RpbmcgVXNlciBFbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVyc1wiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsIENvLlwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlJldGVudGlvbiBzdHJhdGVneVwiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInJldGVudGlvbiBzdHJhdGVneVwiLCBcImNyb3NzLWZ1bmN0aW9uYWwgbGVhZGVyc2hpcFwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6IFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3Mgb25ib2FyZGluZyB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIk1hcHBlZCBhIG5ldyBsaWZlY3ljbGUgbW9kZWwgdGllZCB0byBkYXRhLWJhY2tlZCBleHBlcmltZW50YXRpb24uXCIsXG4gICAgICAgIFwiUmVmaW5lZCBhY3RpdmF0aW9uIGZsb3dzIHRvIHNwb3RsaWdodCB2YWx1ZSBwcm9wcyB3aXRoaW4gZmlyc3Qgc2Vzc2lvbi5cIixcbiAgICAgICAgXCJDby1jcmVhdGVkIGEgbGVhcm5pbmcgYWdlbmRhIHRvIG1lYXN1cmUgbG95YWx0eSBwcm9ncmFtIHRyYWN0aW9uLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzOiBSZWFkb25seUFycmF5PEV4cGVyaWVuY2VTdW1tYXJ5PiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBJbnN0cnVjdG9yIGF0IFJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYWluaW5nIDIwMCsgc3R1ZGVudHMgdGhyb3VnaCA2IGNvdXJzZXMgc2luY2UgMjAyMlwiLFxuICAgIHRhZ3M6IFtcImVkdWNhdGlvblwiLCBcIm1lbnRvcnNoaXBcIiwgXCJjdXJyaWN1bHVtIGRlc2lnblwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIHJhaG5lbWFTdHVkZW50c0Fzc2V0LCBcIlN0dWRlbnRzIGF0IFJhaG5lbWEgQ29sbGVnZVwiKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vcnBoIERlc2lnbiBTeXN0ZW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCdWlsdCBmcm9tIHNjcmF0Y2gsIHVzZWQgb3ZlciA3NDAwIHRpbWVzIGluIHRoZSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICB0YWdzOiBbXCJvcGVuIHNvdXJjZVwiLCBcImRlc2lnbiBzeXN0ZW1cIiwgXCJjb21tdW5pdHkgaW1wYWN0XCJdLFxuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgbW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCxcbiAgICAgIFwiTW9ycGggRGVzaWduIFN5c3RlbSAtIEZpZ21hIENvbW11bml0eVwiLFxuICAgICksXG4gICAgbGluazoge1xuICAgICAgbGFiZWw6IFwiVmlldyBvbiBGaWdtYSBDb21tdW5pdHlcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL2NvbW11bml0eS9maWxlLzEwNjkyNTkzMzM0NjcwODMxODJcIixcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbExpbmtzOiBSZWFkb25seUFycmF5PFNvY2lhbExpbms+ID0gW1xuICB7XG4gICAgbGFiZWw6IFwiTGlua2VkSW5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJHaXRIdWJcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tcnNhZHJpXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeUlkLCBDYXNlU3R1ZHlTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXBDb250cm9sbGVyID0ge1xuICBhY3RpdmVDYXNlU3R1ZHk6IENhc2VTdHVkeVN1bW1hcnkgfCBudWxsO1xuICBvcGVuUmVjYXA6IChpZDogQ2FzZVN0dWR5SWQpID0+IHZvaWQ7XG4gIGNsb3NlUmVjYXA6ICgpID0+IHZvaWQ7XG4gIGlzT3BlbjogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHVzZUNhc2VTdHVkeVJlY2FwID0gKGNhc2VTdHVkaWVzOiBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+KTogQ2FzZVN0dWR5UmVjYXBDb250cm9sbGVyID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2FzZVN0dWR5SWQsIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWRdID0gdXNlU3RhdGU8Q2FzZVN0dWR5SWQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBhY3RpdmVDYXNlU3R1ZHkgPSB1c2VNZW1vKFxuICAgICgpID0+IGNhc2VTdHVkaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkQ2FzZVN0dWR5SWQpID8/IG51bGwsXG4gICAgW2Nhc2VTdHVkaWVzLCBzZWxlY3RlZENhc2VTdHVkeUlkXSxcbiAgKTtcblxuICBjb25zdCBvcGVuUmVjYXAgPSB1c2VDYWxsYmFjaygoaWQ6IENhc2VTdHVkeUlkKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZChpZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZVJlY2FwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2FzZVN0dWR5SWQobnVsbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4ge1xuICAgIGFjdGl2ZUNhc2VTdHVkeSxcbiAgICBvcGVuUmVjYXAsXG4gICAgY2xvc2VSZWNhcCxcbiAgICBpc09wZW46IGFjdGl2ZUNhc2VTdHVkeSAhPT0gbnVsbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhc2VTdHVkeVJlY2FwO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgaGVybywgc29jaWFsTGlua3MgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgaG9tZVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IFtcbiAge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiV2ViU2l0ZVwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgdXJsOiBzaXRlVXJsLFxuICAgIHBvdGVudGlhbEFjdGlvbjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlNlYXJjaEFjdGlvblwiLFxuICAgICAgdGFyZ2V0OiBgJHtzaXRlVXJsfS8/cT17c2VhcmNoX3Rlcm1fc3RyaW5nfWAsXG4gICAgICBcInF1ZXJ5LWlucHV0XCI6IFwicmVxdWlyZWQgbmFtZT1zZWFyY2hfdGVybV9zdHJpbmdcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBoZXJvLm5hbWUsXG4gICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBkZXNjcmlwdGlvbjogaGVyby5zdWJ0aXRsZSxcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgaW1hZ2U6IGhlcm8ucG9ydHJhaXQuc3JjLFxuICAgIHNhbWVBczogc29jaWFsTGlua3MubWFwKChsaW5rKSA9PiBsaW5rLmhyZWYpLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlTWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyIGNyYWZ0aW5nIHRydXN0d29ydGh5IGV4cGVyaWVuY2VzXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiUG9ydGZvbGlvIG9mIE1hc2loIFNhZHJpLCBhbiBpbXBhY3Qtb3JpZW50ZWQgc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcHJvdGVjdGluZyBtaWxsaW9ucyBvZiB1c2VycyB0aHJvdWdoIHRydXN0ICYgc2FmZXR5LCBncm93dGgsIGFuZCBkZXNpZ24gc3lzdGVtcy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvXCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IGhlcm8ucG9ydHJhaXQuc3JjLFxuICAgICAgYWx0OiBoZXJvLnBvcnRyYWl0LmFsdCxcbiAgICAgIHdpZHRoOiAxMjAwLFxuICAgICAgaGVpZ2h0OiAxMjAwLFxuICAgIH0sXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBob21lU3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBDYXNlU3R1ZGllc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXNlU3R1ZGllc1NlY3Rpb25cIjtcbmltcG9ydCBDYXNlU3R1ZHlSZWNhcERpYWxvZyBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nXCI7XG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvblwiO1xuaW1wb3J0IEV4cGVyaWVuY2VzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VzU2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBNZXRyaWNzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL01ldHJpY3NTZWN0aW9uXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZGllcyxcbiAgZXhwZXJpZW5jZXMsXG4gIGhlcm8sXG4gIG1ldHJpY3MsXG4gIHNvY2lhbExpbmtzLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB1c2VDYXNlU3R1ZHlSZWNhcCBmcm9tIFwiLi9ob29rcy91c2VDYXNlU3R1ZHlSZWNhcFwiO1xuaW1wb3J0IHsgaG9tZVBhZ2VNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVDYXNlU3R1ZHksIGNsb3NlUmVjYXAsIG9wZW5SZWNhcCB9ID0gdXNlQ2FzZVN0dWR5UmVjYXAoY2FzZVN0dWRpZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLmhvbWVQYWdlTWV0YWRhdGF9IC8+XG5cbiAgICAgIDxIZXJvU2VjdGlvbiBoZXJvPXtoZXJvfSAvPlxuICAgICAgPE1ldHJpY3NTZWN0aW9uIG1ldHJpY3M9e21ldHJpY3N9IC8+XG4gICAgICA8Q2FzZVN0dWRpZXNTZWN0aW9uIGNhc2VTdHVkaWVzPXtjYXNlU3R1ZGllc30gb25PcGVuUmVjYXA9e29wZW5SZWNhcH0gLz5cbiAgICAgIDxFeHBlcmllbmNlc1NlY3Rpb24gZXhwZXJpZW5jZXM9e2V4cGVyaWVuY2VzfSAvPlxuICAgICAgPENvbnRhY3RTZWN0aW9uIHNvY2lhbExpbmtzPXtzb2NpYWxMaW5rc30gLz5cblxuICAgICAgPENhc2VTdHVkeVJlY2FwRGlhbG9nIGNhc2VTdHVkeT17YWN0aXZlQ2FzZVN0dWR5fSBvbkNsb3NlPXtjbG9zZVJlY2FwfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUsNERBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLHFCQUFxQjs7O0FDSHpCO0FBSEE7QUFJQSxJQUFlLGlFQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRywwQkFBMEI7Ozs7QUNnQjlCLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxTQUFTLE9BQU8sa0JBQXNDO0FBQUEsRUFDeEYsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUN2QixRQUFRLFNBQVMsV0FBVztBQUFBLEVBQzVCLE1BQU0sU0FBUyxRQUFRLFNBQVM7QUFBQSxFQUVoQyxNQUFNLG1CQUFtQixTQUNyQiwrRUFDQTtBQUFBLEVBRUosTUFBTSxxQkFBcUIsU0FDdkIsNEVBQ0E7QUFBQSxFQUVKLE1BQU0sZUFBZSxTQUNqQiw4QkFDQSxTQUNFLDhCQUNBLFFBQVEsS0FBSztBQUFBLEVBRW5CLE1BQU0sWUFBWSxTQUNkLDhCQUNBLFNBQ0UsOEJBQ0EsUUFBUSxLQUFLO0FBQUEsRUFFbkIsTUFBTSxjQUFjLFNBQ2hCLDhCQUNBLFNBQ0UsOEJBQ0E7QUFBQSxFQUVOLHVCQUNFLHVCQW9KRSxjQXBKRjtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsWUFBWSxTQUFTLG1CQUFtQjtBQUFBLE1BQ3hDLFFBQVEsYUFBYTtBQUFBLE1BQ3JCLE9BQU8sU0FBUyxRQUFRLE9BQU8sUUFBUSxRQUFRLEtBQUs7QUFBQSxNQUNwRCxXQUFXLFNBQVMsT0FBTyxPQUFPLFNBQVMs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
