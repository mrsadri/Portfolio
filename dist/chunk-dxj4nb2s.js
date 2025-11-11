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
  Divider_default,
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
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              spacing: 0.75,
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h3",
                  component: "h2",
                  children: "Let’s connect"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "subtitle1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.6 },
                  children: "Share your challenge or say hello—happy to explore product design collaborations."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Divider_default, {
              sx: { mt: 3 }
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
          sx: {
            px: { xs: 5, md: 5 },
            pb: { xs: 5, md: 5 },
            pt: 0,
            flexDirection: "column",
            alignItems: "stretch",
            gap: 1
          },
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
              component: "a",
              href: "mailto:sdarimasih@gmail.com",
              variant: "contained",
              size: "large",
              children: "sdarimasih@gmail.com"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              direction: { xs: "column", sm: "row" },
              spacing: 1,
              children: socialLinks.map(({ label, href }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                component: "a",
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                variant: "outlined",
                fullWidth: true,
                children: label
              }, label, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
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
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var env = import.meta.env ?? {};
var baseUrl = typeof env.BASE_URL === "string" ? env.BASE_URL : "/";
var normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
var certifiedBadgeSrc = `${normalizedBaseUrl}images/badges/certified-badge.png`;
var HeroSection = ({ hero }) => {
  const theme = useTheme();
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
                    height: "100%",
                    borderRadius: (theme2) => theme2.tokens.radius.lg,
                    border: `1px solid ${theme.tokens.colors.border}`,
                    boxShadow: theme.palette.mode === "light" ? "0 18px 40px rgba(17, 36, 83, 0.18)" : "0 20px 50px rgba(0, 0, 0, 0.55)"
                  }
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                  direction: "row",
                  spacing: 1,
                  sx: {
                    position: "absolute",
                    bottom: -24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    alignItems: "center",
                    background: theme.palette.mode === "light" ? "rgba(17, 36, 83, 0.86)" : "rgba(5, 12, 24, 0.88)",
                    color: "common.white",
                    borderRadius: 999,
                    px: 2.25,
                    py: 0.75,
                    boxShadow: "0 12px 24px rgba(12, 28, 75, 0.35)",
                    whiteSpace: "nowrap"
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
                      sx: {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: theme.palette.success.main,
                        animation: "availabilityPulse 1.6s ease-in-out infinite",
                        "@keyframes availabilityPulse": {
                          "0%, 100%": { opacity: 1 },
                          "50%": { opacity: 0.2 }
                        }
                      }
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                      variant: "caption",
                      sx: { fontWeight: 600, letterSpacing: 0.4 },
                      children: "Available for senior roles"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
                  component: "img",
                  src: certifiedBadgeSrc,
                  alt: "Certified badge",
                  loading: "lazy",
                  sx: {
                    position: "absolute",
                    top: { xs: -18, md: -26 },
                    left: { xs: -18, md: -26 },
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
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
                spacing: 1.1,
                children: hero.credentials.map((line) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                  variant: "body1",
                  sx: { color: theme.palette.text.primary, lineHeight: 1.65 },
                  children: line
                }, line, false, undefined, this))
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                spacing: { xs: 1.4, sm: 1.8 },
                direction: { xs: "column", sm: "row" },
                sx: { pt: { xs: 0.5, md: 0.75 } },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(PrimaryButton_default, {
                    component: Link,
                    to: hero.ctaPrimary.to,
                    endIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                    size: "large",
                    sx: { minWidth: { sm: 220 } },
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
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(GhostButton_default, {
                component: Link,
                to: hero.availability.to,
                variant: "text",
                color: "secondary",
                endIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                sx: {
                  alignSelf: { xs: "flex-start" },
                  fontWeight: 600,
                  mt: { xs: 0.5, md: 0.75 }
                },
                children: hero.availability.label
              }, undefined, false, undefined, this)
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
  credentials: [
    "Certified in UX Design by the University of Tehran and Sharif University",
    "Mentored 200+ students as a design instructor over the past 3 years."
  ],
  ctaPrimary: {
    label: "View case studies",
    to: "/case-studies/divar-secure-call"
  },
  ctaSecondary: {
    label: "View resume",
    to: "/resume"
  },
  availability: {
    label: "Open to senior product designer roles",
    to: "/contact"
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
    label: "Figma",
    href: "https://www.figma.com/@masih"
  },
  {
    label: "Portfolio",
    href: "https://masih.framer.website/"
  }
];

// src/features/home/hooks/useCaseStudyRecap.ts
var import_react = __toESM(require_react(), 1);
var useCaseStudyRecap = (caseStudies2) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = import_react.useState(null);
  const activeCaseStudy = import_react.useMemo(() => caseStudies2.find((item) => item.id === selectedCaseStudyId) ?? null, [caseStudies2, selectedCaseStudyId]);
  const openRecap = import_react.useCallback((id) => {
    setSelectedCaseStudyId(id);
  }, []);
  const closeRecap = import_react.useCallback(() => {
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

//# debugId=080A9FEF7C2B617D64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0Nhc2VTdHVkeVJlY2FwRGlhbG9nLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL0V4cGVyaWVuY2VzU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9JbXBhY3RTdGF0Q2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy9NZXRyaWNzU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2hvbWUvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL2hvb2tzL3VzZUNhc2VTdHVkeVJlY2FwLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9ob21lL3Nlby50cyIsICIuLi9zcmMvZmVhdHVyZXMvaG9tZS9Ib21lUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJtMTAuOCAxNS45IDQuNjctMy41Yy4yNy0uMi4yNy0uNiAwLS44TDEwLjggOC4xYy0uMzMtLjI1LS44LS4wMS0uOC40djdjMCAuNDEuNDcuNjUuOC40TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJtMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhcIlxufSksICdQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgdHlwZSB7IENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlDYXJkUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgb25PcGVuUmVjYXA/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlDYXJkID0gKHsgY2FzZVN0dWR5LCBhY3RpdmUgPSBmYWxzZSwgb25PcGVuUmVjYXAgfTogQ2FzZVN0dWR5Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBwYWxldHRlLCB0b2tlbnMgfSA9IHRoZW1lO1xuICBjb25zdCBpc0RhcmsgPSBwYWxldHRlLm1vZGUgPT09IFwiZGFya1wiO1xuXG4gIGNvbnN0IGFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMCwgNDUsIDExMCwgMC45OCksIHJnYmEoNTgsIDExOCwgMjI2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE3LCA3NiwgMTcwLCAwLjg4KSwgcmdiYSg2MCwgMTUxLCAyNTUsIDAuODIpKVwiO1xuXG4gIGNvbnN0IGluYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIwLCAyOCwgNTIsIDAuODIpLCByZ2JhKDEyLCAxOCwgMzYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQ4LCAyNTEsIDI1NSwgMC45NCksIHJnYmEoMjMyLCAyNDIsIDI1NSwgMC44OCkpXCI7XG5cbiAgY29uc3QgaGVhZGluZ0NvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMjYsIDIzNCwgMjU1LCAwLjk1KVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5wcmltYXJ5O1xuXG4gIGNvbnN0IGJvZHlDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjEwLCAyMjAsIDI1NSwgMC44MilcIlxuICAgICAgOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5O1xuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjI4KVwiXG4gICAgICA6IFwicmdiYSgxNywgNzYsIDE3MCwgMC4xMilcIjtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBhY3RpdmUgPyBhY3RpdmVCYWNrZ3JvdW5kIDogaW5hY3RpdmVCYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtib3JkZXJDb2xvcn1gLFxuICAgICAgICBjb2xvcjogYWN0aXZlID8gcGFsZXR0ZS5jb21tb24ud2hpdGUgOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgYm94U2hhZG93OiBhY3RpdmUgPyB0b2tlbnMuc2hhZG93LmxldmVsMyA6IHRva2Vucy5zaGFkb3cubGV2ZWwyLFxuICAgICAgICB0cmFuc2l0aW9uOiB0b2tlbnMudHJhbnNpdGlvbi5ob3ZlcixcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNnB4KVwiLFxuICAgICAgICAgIGJveFNoYWRvdzogdG9rZW5zLnNoYWRvdy5sZXZlbDMsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGI6IDMgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZXllYnJvd1wiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OClcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTg5LCAyMDQsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYXNlIHtjYXNlU3R1ZHkubnVtYmVyfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgbGFiZWw9e2Nhc2VTdHVkeS50YWd9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjI0KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyNywgMjQxLCAyNTUsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjE0LCAyMjQsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogYWN0aXZlID8gXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoM1wiIHN4PXt7IGNvbG9yOiBoZWFkaW5nQ29sb3IgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUyXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybX1cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWwgJiYgKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBtbDogMC43NSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICh7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsfSlcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdCAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBjb2xvcjogYm9keUNvbG9yIH19PlxuICAgICAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwLCBnYXA6IDEgfX0+XG4gICAgICAgIHthY3RpdmUgPyAoXG4gICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBjb2xvcj17YWN0aXZlID8gXCJpbmhlcml0XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZWNhcH1cbiAgICAgICAgICBlbmRJY29uPXs8UGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KVwiXG4gICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNClcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlY2FwXG4gICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDYXNlU3R1ZHlDYXJkIGZyb20gXCIuL0Nhc2VTdHVkeUNhcmRcIjtcblxudHlwZSBDYXNlU3R1ZGllc1NlY3Rpb25Qcm9wcyA9IHtcbiAgY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT47XG4gIG9uT3BlblJlY2FwOiAoaWQ6IENhc2VTdHVkeUlkKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ2FzZVN0dWRpZXNTZWN0aW9uID0gKHsgY2FzZVN0dWRpZXMsIG9uT3BlblJlY2FwIH06IENhc2VTdHVkaWVzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIEV4YW1wbGVzIG9mIHRoZSBpbXBhY3QgSSBoYXZlIG1hZGVcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPENhc2VTdHVkeUNhcmRcbiAgICAgICAgICAgICAgY2FzZVN0dWR5PXtpdGVtfVxuICAgICAgICAgICAgICBhY3RpdmU9e2l0ZW0uaWQgPT09IFwiZGl2YXJcIn1cbiAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IG9uT3BlblJlY2FwKGl0ZW0uaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkaWVzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nVGl0bGUsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENhc2VTdHVkeVJlY2FwRGlhbG9nUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXNlU3R1ZHlSZWNhcERpYWxvZyA9ICh7IGNhc2VTdHVkeSwgb25DbG9zZSB9OiBDYXNlU3R1ZHlSZWNhcERpYWxvZ1Byb3BzKSA9PiAoXG4gIDxEaWFsb2dcbiAgICBvcGVuPXtCb29sZWFuKGNhc2VTdHVkeSl9XG4gICAgb25DbG9zZT17b25DbG9zZX1cbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCJcbiAgPlxuICAgIHtjYXNlU3R1ZHkgPyAoXG4gICAgICA8PlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCI+e2Nhc2VTdHVkeS5yZWNhcC5oZWFkbGluZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5yZWNhcC5idWxsZXRzLm1hcCgoYnVsbGV0KSA9PiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtidWxsZXR9IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7YnVsbGV0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBtdD17M30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlZXAgZGl2ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvPlxuICAgICkgOiBudWxsfVxuICA8L0RpYWxvZz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVJlY2FwRGlhbG9nO1xuXG5cbiIsCiAgICAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgU29jaWFsTGluayB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENvbnRhY3RTZWN0aW9uUHJvcHMgPSB7XG4gIHNvY2lhbExpbmtzOiBSZWFkb25seUFycmF5PFNvY2lhbExpbms+O1xufTtcblxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSAoeyBzb2NpYWxMaW5rcyB9OiBDb250YWN0U2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA1KSwgdHJhbnNwYXJlbnQgNzAlKVwiXG4gICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDgsODYsMTc2LDAuMTgpLCByZ2JhKDQsNywxNSwwKSlcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgPENhcmRcbiAgICAgICAgY29tcG9uZW50PVwiZm9vdGVyXCJcbiAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJhc2UsXG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB4OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgcHQ6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICBwYjogeyB4czogMy41LCBtZDogMy41IH0sXG4gICAgICAgICAgICBcIiY6bGFzdC1jaGlsZFwiOiB7IHBiOiB7IHhzOiAzLjUsIG1kOiAzLjUgfSB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICBMZXTigJlzIGNvbm5lY3RcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICBTaGFyZSB5b3VyIGNoYWxsZW5nZSBvciBzYXkgaGVsbG/igJRoYXBweSB0byBleHBsb3JlIHByb2R1Y3QgZGVzaWduIGNvbGxhYm9yYXRpb25zLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IDMgfX0gLz5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRBY3Rpb25zXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB4OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgcGI6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICBwdDogMCxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIixcbiAgICAgICAgICAgIGdhcDogMSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9XCJhXCIgaHJlZj1cIm1haWx0bzpzZGFyaW1hc2loQGdtYWlsLmNvbVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgIHNkYXJpbWFzaWhAZ21haWwuY29tXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX0gc3BhY2luZz17MX0+XG4gICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgdHlwZSB7IEV4cGVyaWVuY2VTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuXG50eXBlIEV4cGVyaWVuY2VzU2VjdGlvblByb3BzID0ge1xuICBleHBlcmllbmNlczogUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT47XG59O1xuXG5jb25zdCBFeHBlcmllbmNlc1NlY3Rpb24gPSAoeyBleHBlcmllbmNlcyB9OiBFeHBlcmllbmNlc1NlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5PdGhlciBFeGNpdGluZyBFeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIEFsb25nc2lkZSBteSBwcm9mZXNzaW9uYWwgam91cm5leVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2V4cGVyaWVuY2UudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICBzcmM9e2V4cGVyaWVuY2UuaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgICAgYWx0PXtleHBlcmllbmNlLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2V4cGVyaWVuY2UudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB0OiAwLCBwYjogMywgcHg6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtleHBlcmllbmNlLmxpbmsuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCB7IEF2YXRhciwgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24sIFBpbGwsIFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEhlcm9Db250ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGVudiA9IGltcG9ydC5tZXRhLmVudiA/PyB7fTtcbmNvbnN0IGJhc2VVcmwgPSB0eXBlb2YgZW52LkJBU0VfVVJMID09PSBcInN0cmluZ1wiID8gZW52LkJBU0VfVVJMIDogXCIvXCI7XG5jb25zdCBub3JtYWxpemVkQmFzZVVybCA9IGJhc2VVcmwuZW5kc1dpdGgoXCIvXCIpID8gYmFzZVVybCA6IGAke2Jhc2VVcmx9L2A7XG5jb25zdCBjZXJ0aWZpZWRCYWRnZVNyYyA9IGAke25vcm1hbGl6ZWRCYXNlVXJsfWltYWdlcy9iYWRnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ2A7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogSGVyb0NvbnRlbnQ7XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTglIDE1JSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTgpLCB0cmFuc3BhcmVudCA2MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc4JSAxOCUsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTgpLCB0cmFuc3BhcmVudCA1NSUpXCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17eyB4czogNCwgbWQ6IDMuNSB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJzdHJldGNoXCIgfSxcbiAgICAgICAgICAgIHB4OiB7IHhzOiAwLCBtZDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDMyMCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2hlcm8ucG9ydHJhaXQuYWx0fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiMCAxOHB4IDQwcHggcmdiYSgxNywgMzYsIDgzLCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICBib3R0b206IC0yNCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTcsIDM2LCA4MywgMC44NilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDUsIDEyLCAyNCwgMC44OClcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImNvbW1vbi53aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICBweDogMi4yNSxcbiAgICAgICAgICAgICAgICAgIHB5OiAwLjc1LFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMTJweCAyNHB4IHJnYmEoMTIsIDI4LCA3NSwgMC4zNSlcIixcbiAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBcImF2YWlsYWJpbGl0eVB1bHNlIDEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJAa2V5ZnJhbWVzIGF2YWlsYWJpbGl0eVB1bHNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIjAlLCAxMDAlXCI6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiNTAlXCI6IHsgb3BhY2l0eTogMC4yIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuNCB9fT5cbiAgICAgICAgICAgICAgICAgIEF2YWlsYWJsZSBmb3Igc2VuaW9yIHJvbGVzXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2NlcnRpZmllZEJhZGdlU3JjfVxuICAgICAgICAgICAgICAgIGFsdD1cIkNlcnRpZmllZCBiYWRnZVwiXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiB7IHhzOiAtMTgsIG1kOiAtMjYgfSxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IC0xOCwgbWQ6IC0yNiB9LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDEyMCwgbWQ6IDE2MCB9LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiAxMjAsIG1kOiAxNjAgfSxcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLjI1LCBtZDogMi43NSB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjQsIG1kOiAxLjggfX0gc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMSwgc206IDEuNSB9fVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e3sgeHM6IFwiY2VudGVyXCIsIHNtOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtoZXJvLmdyZWV0aW5nfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDAuMyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGlzcGxheVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMDUsXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAxNWVtXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHsgeHM6IFwiMC4wMWVtXCIsIG1kOiBcIjAuMDA1ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiNzglXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8udGl0bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjEuMDVyZW1cIiwgbWQ6IFwiMS4xMnJlbVwiIH0sXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42NSwgbWQ6IDEuNyB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuMX0+XG4gICAgICAgICAgICAgIHtoZXJvLmNyZWRlbnRpYWxzLm1hcCgobGluZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBrZXk9e2xpbmV9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLjQsIHNtOiAxLjggfX1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICBzeD17eyBwdDogeyB4czogMC41LCBtZDogMC43NSB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtoZXJvLmN0YVByaW1hcnkudG99XG4gICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgbWluV2lkdGg6IHsgc206IDIyMCB9IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5jdGFQcmltYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICB0bz17aGVyby5jdGFTZWNvbmRhcnkudG99XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLmN0YVNlY29uZGFyeS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz17aGVyby5hdmFpbGFiaWxpdHkudG99XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmOiB7IHhzOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICBtdDogeyB4czogMC41LCBtZDogMC43NSB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aGVyby5hdmFpbGFiaWxpdHkubGFiZWx9XG4gICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IE1ldHJpY1N1bW1hcnk7XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wYWN0U3RhdENhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRyaWNTdW1tYXJ5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgSW1wYWN0U3RhdENhcmQgZnJvbSBcIi4vSW1wYWN0U3RhdENhcmRcIjtcblxudHlwZSBNZXRyaWNzU2VjdGlvblByb3BzID0ge1xuICBtZXRyaWNzOiBSZWFkb25seUFycmF5PE1ldHJpY1N1bW1hcnk+O1xufTtcblxuY29uc3QgTWV0cmljc1NlY3Rpb24gPSAoeyBtZXRyaWNzIH06IE1ldHJpY3NTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAzLCBtZDogMy41IH19PlxuICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA2LCBtZDogMyB9fSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgIDxJbXBhY3RTdGF0Q2FyZCB2YWx1ZT17dmFsdWV9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgaGVyb1BvcnRyYWl0QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1zYWRyaS1wcm9maWxlLndlYnBcIjtcbmltcG9ydCBtb3JwaERlc2lnblN5c3RlbUFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbW9ycGgtZGVzaWduLXN5c3RlbS53ZWJwXCI7XG5pbXBvcnQgcmFobmVtYVN0dWRlbnRzQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9yYWhuZW1hLXN0dWRlbnRzLndlYnBcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Fzc2V0c1wiO1xuaW1wb3J0IHR5cGUge1xuICBDYXNlU3R1ZHlTdW1tYXJ5LFxuICBFeHBlcmllbmNlU3VtbWFyeSxcbiAgSGVyb0NvbnRlbnQsXG4gIE1ldHJpY1N1bW1hcnksXG4gIFNvY2lhbExpbmssXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgaGVybzogSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBcIkhlbGxvIPCfkYvwn4+8LCBJIGFtXCIsXG4gIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgdGl0bGU6IFwiYW4gaW1wYWN0LW9yaWVudGVkIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgc3VidGl0bGU6XG4gICAgXCJ3aXRoIDYrIHllYXJzIG9mIGV4cGVyaWVuY2UsIGVuaGFuY2luZyBleHBlcmllbmNlcyBmb3IgNDAgbWlsbGlvbiBhY3RpdmUgdXNlcnNcIixcbiAgY3JlZGVudGlhbHM6IFtcbiAgICBcIkNlcnRpZmllZCBpbiBVWCBEZXNpZ24gYnkgdGhlIFVuaXZlcnNpdHkgb2YgVGVocmFuIGFuZCBTaGFyaWYgVW5pdmVyc2l0eVwiLFxuICAgIFwiTWVudG9yZWQgMjAwKyBzdHVkZW50cyBhcyBhIGRlc2lnbiBpbnN0cnVjdG9yIG92ZXIgdGhlIHBhc3QgMyB5ZWFycy5cIixcbiAgXSxcbiAgY3RhUHJpbWFyeToge1xuICAgIGxhYmVsOiBcIlZpZXcgY2FzZSBzdHVkaWVzXCIsXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICB9LFxuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IHJlc3VtZVwiLFxuICAgIHRvOiBcIi9yZXN1bWVcIixcbiAgfSxcbiAgYXZhaWxhYmlsaXR5OiB7XG4gICAgbGFiZWw6IFwiT3BlbiB0byBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciByb2xlc1wiLFxuICAgIHRvOiBcIi9jb250YWN0XCIsXG4gIH0sXG4gIHBvcnRyYWl0OiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgaGVyb1BvcnRyYWl0QXNzZXQsIFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsIHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG4gIH0pLFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3M6IFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB2YWx1ZTogXCI2MCVcIixcbiAgICB0aXRsZTogXCJSZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ28tbGVkIERpdmFy4oCZcyBzZWN1cmUgY2FsbCBzeXN0ZW0gd2l0aCBUcnVzdCAmIFNhZmV0eSB0byBzYWZlZ3VhcmQgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjguM0srXCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCB0ZWFtcyB1c2luZyBNb3JwaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBhbiBvcGVuIGRlc2lnbiBzeXN0ZW0gdGhhdCBwb3dlcnMgRmlnbWEgaGFuZG9mZnMgYW5kIGFjY2VsZXJhdGVzIGhpZ2gtcXVhbGl0eSByZWxlYXNlcy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICB0aXRsZTogXCJEZXNpZ25lcnMgbWVudG9yZWRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGVzaWduZWQgcHJvamVjdC1iYXNlZCBwcm9ncmFtcyBhdCBSYWhuZW1hIENvbGxlZ2UgdG8gaGVscCBlbWVyZ2luZyBkZXNpZ25lcnMgbGF1bmNoIGNhcmVlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4MCVcIixcbiAgICB0aXRsZTogXCJMaWZ0IGluIHF1YWxpZmllZCBsZWFkc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWRlc2lnbmVkIFBlcnNvbOKAmXMgc2lnbi11cCBmdW5uZWwgZW5kLXRvLWVuZCwgcmVtb3ZpbmcgZnJpY3Rpb24gYW5kIGJvb3N0aW5nIGxlYWQgZ2VuZXJhdGlvbiBpbiAzIG1vbnRocy5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZGllczogUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PiA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyXCIsXG4gICAgbnVtYmVyOiBcIjAxXCIsXG4gICAgdGFnOiBcIkltcHJvdmluZyBVc2VyIFNhZmV0eVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTdG9yeSBvZiBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICAgIHBsYXRmb3JtOiBcIm9uIERpdmFyXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiQ2xhc3NpZmllZCBBZHMgUGxhdGZvcm1cIixcbiAgICBzdGF0OiBcIkEgZmVhdHVyZSB1c2VkIGJ5IDIuMSBtaWxsaW9uIHVzZXJzIHBlciB3ZWVrXCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwidHJ1c3QgJiBzYWZldHlcIiwgXCJpbXBhY3QgYXQgc2NhbGVcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTogXCJIb3cgY3Jvc3MtZnVuY3Rpb25hbCBndWFyZHJhaWxzIGhlbHBlZCBEaXZhciByZWR1Y2UgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiQ28tbGVkIGEgdGFzayBmb3JjZSBicmlkZ2luZyBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIGFuZCBFbmdpbmVlcmluZy5cIixcbiAgICAgICAgXCJTaGlwcGVkIGR5bmFtaWMgdm9pY2UtbWFza2luZyB3aXRoIGFidXNlIGRldGVjdGlvbiBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgICAgICAgXCJTdG9vZCB1cCBwbGF5Ym9va3MgZm9yIG1vZGVyYXRpb24gb3BzIHRvIG1vbml0b3IgcmVwZWF0IG9mZmVuZGVycy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsXCIsXG4gICAgbnVtYmVyOiBcIjAyXCIsXG4gICAgdGFnOiBcIkJvb3N0aW5nIFVzZXIgRW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnNcIixcbiAgICBwbGF0Zm9ybTogXCJhdCBTZXRhcmUgQXZhbCBDby5cIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJSZXRlbnRpb24gc3RyYXRlZ3lcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJyZXRlbnRpb24gc3RyYXRlZ3lcIiwgXCJjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXBcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOiBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIG9uYm9hcmRpbmcgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJNYXBwZWQgYSBuZXcgbGlmZWN5Y2xlIG1vZGVsIHRpZWQgdG8gZGF0YS1iYWNrZWQgZXhwZXJpbWVudGF0aW9uLlwiLFxuICAgICAgICBcIlJlZmluZWQgYWN0aXZhdGlvbiBmbG93cyB0byBzcG90bGlnaHQgdmFsdWUgcHJvcHMgd2l0aGluIGZpcnN0IHNlc3Npb24uXCIsXG4gICAgICAgIFwiQ28tY3JlYXRlZCBhIGxlYXJuaW5nIGFnZW5kYSB0byBtZWFzdXJlIGxveWFsdHkgcHJvZ3JhbSB0cmFjdGlvbi5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlczogUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gSW5zdHJ1Y3RvciBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyAyMDArIHN0dWRlbnRzIHRocm91Z2ggNiBjb3Vyc2VzIHNpbmNlIDIwMjJcIixcbiAgICB0YWdzOiBbXCJlZHVjYXRpb25cIiwgXCJtZW50b3JzaGlwXCIsIFwiY3VycmljdWx1bSBkZXNpZ25cIl0sXG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCByYWhuZW1hU3R1ZGVudHNBc3NldCwgXCJTdHVkZW50cyBhdCBSYWhuZW1hIENvbGxlZ2VcIiksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIG1vcnBoRGVzaWduU3lzdGVtQXNzZXQsXG4gICAgICBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICApLFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogUmVhZG9ubHlBcnJheTxTb2NpYWxMaW5rPiA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiRmlnbWFcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9AbWFzaWhcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlBvcnRmb2xpb1wiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9tYXNpaC5mcmFtZXIud2Vic2l0ZS9cIixcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5SWQsIENhc2VTdHVkeVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPSB7XG4gIGFjdGl2ZUNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeSB8IG51bGw7XG4gIG9wZW5SZWNhcDogKGlkOiBDYXNlU3R1ZHlJZCkgPT4gdm9pZDtcbiAgY2xvc2VSZWNhcDogKCkgPT4gdm9pZDtcbiAgaXNPcGVuOiBib29sZWFuO1xufTtcblxuY29uc3QgdXNlQ2FzZVN0dWR5UmVjYXAgPSAoY2FzZVN0dWRpZXM6IFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT4pOiBDYXNlU3R1ZHlSZWNhcENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHlJZCwgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZF0gPSB1c2VTdGF0ZTxDYXNlU3R1ZHlJZCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGFjdGl2ZUNhc2VTdHVkeSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY2FzZVN0dWRpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRDYXNlU3R1ZHlJZCkgPz8gbnVsbCxcbiAgICBbY2FzZVN0dWRpZXMsIHNlbGVjdGVkQ2FzZVN0dWR5SWRdLFxuICApO1xuXG4gIGNvbnN0IG9wZW5SZWNhcCA9IHVzZUNhbGxiYWNrKChpZDogQ2FzZVN0dWR5SWQpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhc2VTdHVkeUlkKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNsb3NlUmVjYXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXNlU3R1ZHlJZChudWxsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZlQ2FzZVN0dWR5LFxuICAgIG9wZW5SZWNhcCxcbiAgICBjbG9zZVJlY2FwLFxuICAgIGlzT3BlbjogYWN0aXZlQ2FzZVN0dWR5ICE9PSBudWxsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FzZVN0dWR5UmVjYXA7XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBoZXJvLCBzb2NpYWxMaW5rcyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBob21lU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0gW1xuICB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiU2VhcmNoQWN0aW9uXCIsXG4gICAgICB0YXJnZXQ6IGAke3NpdGVVcmx9Lz9xPXtzZWFyY2hfdGVybV9zdHJpbmd9YCxcbiAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICBqb2JUaXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBoZXJvLnN1YnRpdGxlLFxuICAgIHVybDogc2l0ZVVybCxcbiAgICBpbWFnZTogaGVyby5wb3J0cmFpdC5zcmMsXG4gICAgc2FtZUFzOiBzb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IGxpbmsuaHJlZiksXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJQb3J0Zm9saW8gb2YgTWFzaWggU2FkcmksIGFuIGltcGFjdC1vcmllbnRlZCBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciBwcm90ZWN0aW5nIG1pbGxpb25zIG9mIHVzZXJzIHRocm91Z2ggdHJ1c3QgJiBzYWZldHksIGdyb3d0aCwgYW5kIGRlc2lnbiBzeXN0ZW1zLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9cIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogaGVyby5wb3J0cmFpdC5zcmMsXG4gICAgICBhbHQ6IGhlcm8ucG9ydHJhaXQuYWx0LFxuICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICBoZWlnaHQ6IDEyMDAsXG4gICAgfSxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGhvbWVTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IENhc2VTdHVkaWVzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Nhc2VTdHVkaWVzU2VjdGlvblwiO1xuaW1wb3J0IENhc2VTdHVkeVJlY2FwRGlhbG9nIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FzZVN0dWR5UmVjYXBEaWFsb2dcIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uXCI7XG5pbXBvcnQgRXhwZXJpZW5jZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvRXhwZXJpZW5jZXNTZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IE1ldHJpY3NTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTWV0cmljc1NlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNhc2VTdHVkaWVzLFxuICBleHBlcmllbmNlcyxcbiAgaGVybyxcbiAgbWV0cmljcyxcbiAgc29jaWFsTGlua3MsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHVzZUNhc2VTdHVkeVJlY2FwIGZyb20gXCIuL2hvb2tzL3VzZUNhc2VTdHVkeVJlY2FwXCI7XG5pbXBvcnQgeyBob21lUGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZUNhc2VTdHVkeSwgY2xvc2VSZWNhcCwgb3BlblJlY2FwIH0gPSB1c2VDYXNlU3R1ZHlSZWNhcChjYXNlU3R1ZGllcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uaG9tZVBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2hlcm99IC8+XG4gICAgICA8TWV0cmljc1NlY3Rpb24gbWV0cmljcz17bWV0cmljc30gLz5cbiAgICAgIDxDYXNlU3R1ZGllc1NlY3Rpb24gY2FzZVN0dWRpZXM9e2Nhc2VTdHVkaWVzfSBvbk9wZW5SZWNhcD17b3BlblJlY2FwfSAvPlxuICAgICAgPEV4cGVyaWVuY2VzU2VjdGlvbiBleHBlcmllbmNlcz17ZXhwZXJpZW5jZXN9IC8+XG4gICAgICA8Q29udGFjdFNlY3Rpb24gc29jaWFsTGlua3M9e3NvY2lhbExpbmtzfSAvPlxuXG4gICAgICA8Q2FzZVN0dWR5UmVjYXBEaWFsb2cgY2FzZVN0dWR5PXthY3RpdmVDYXNlU3R1ZHl9IG9uQ2xvc2U9e2Nsb3NlUmVjYXB9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSw0REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcscUJBQXFCOzs7QUNIekI7QUFIQTtBQUlBLElBQWUsaUVBQTJCLHdCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLDBCQUEw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WUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsaUJBQWlCO0FBQUEsTUFDZixTQUFTO0FBQUEsTUFDVCxRQUFRLEdBQUc7QUFBQSxNQUNYLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNLEtBQUs7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLGFBQWEsS0FBSztBQUFBLElBQ2xCLEtBQUs7QUFBQSxJQUNMLE9BQU8sS0FBSyxTQUFTO0FBQUEsSUFDckIsUUFBUSxZQUFZLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtBQUFBLEVBQzdDO0FBQ0Y7QUFFTyxJQUFNLG1CQUFpQztBQUFBLEVBQzVDLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDbkIsS0FBSyxLQUFLLFNBQVM7QUFBQSxNQUNuQixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjs7OztBQzVCQSxJQUFNLFdBQVcsTUFBTTtBQUFBLEVBQ3JCLFFBQVEsaUJBQWlCLFlBQVksY0FBYywwQkFBa0IsV0FBVztBQUFBLEVBRWhGLHVCQUNFO0FBQUEsY0FVRTtBQUFBLHNCQVRBLHdCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBMkI7QUFBQSxzQkFFM0Isd0JBQUMscUJBQUQ7QUFBQSxRQUFhO0FBQUEsU0FBYixpQ0FBeUI7QUFBQSxzQkFDekIsd0JBQUMsd0JBQUQ7QUFBQSxRQUFnQjtBQUFBLFNBQWhCLGlDQUFrQztBQUFBLHNCQUNsQyx3QkFBQyw0QkFBRDtBQUFBLFFBQW9CO0FBQUEsUUFBMEIsYUFBYTtBQUFBLFNBQTNELGlDQUFzRTtBQUFBLHNCQUN0RSx3QkFBQyw0QkFBRDtBQUFBLFFBQW9CO0FBQUEsU0FBcEIsaUNBQThDO0FBQUEsc0JBQzlDLHdCQUFDLHdCQUFEO0FBQUEsUUFBZ0I7QUFBQSxTQUFoQixpQ0FBMEM7QUFBQSxzQkFFMUMsd0JBQUMsOEJBQUQ7QUFBQSxRQUFzQixXQUFXO0FBQUEsUUFBaUIsU0FBUztBQUFBLFNBQTNELGlDQUF1RTtBQUFBO0FBQUEsS0FUekUsZ0NBVUU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICIwODBBOUZFRjdDMkI2MTdENjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
