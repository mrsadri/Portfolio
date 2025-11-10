import {
  GhostButton_default
} from "./chunk-skwfc3as.js";
import"./chunk-56dhb304.js";
import {
  Pill_default
} from "./chunk-60y8jd63.js";
import {
  Link
} from "./chunk-4503tp5q.js";
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
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  require_react,
  useTheme
} from "./chunk-kr6hc1f9.js";

// node_modules/@mui/icons-material/esm/ArrowForwardRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowForwardRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"
}), "ArrowForwardRounded");

// src/routes/HomePage.tsx
var import_react2 = __toESM(require_react(), 1);

// images/masih-sadri-profile.webp
var masih_sadri_profile_default = "./masih-sadri-profile-fsr6f34z.webp";

// images/morph-design-system.webp
var morph_design_system_default = "./morph-design-system-5k1nrfcf.webp";

// images/rahnema-students.webp
var rahnema_students_default = "./rahnema-students-v1k766m3.webp";

// src/data/home.ts
var resolveAsset = (asset) => new URL(asset, import.meta.url).href;
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
  portrait: {
    src: resolveAsset(masih_sadri_profile_default),
    alt: "Masih Sadri - Product Designer"
  }
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
    image: {
      src: resolveAsset(rahnema_students_default),
      alt: "Students at Rahnema College"
    }
  },
  {
    title: "Morph Design System",
    description: "Built from scratch, used over 7400 times in the Figma Community",
    tags: ["open source", "design system", "community impact"],
    image: {
      src: resolveAsset(morph_design_system_default),
      alt: "Morph Design System - Figma Community"
    },
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

// node_modules/@mui/icons-material/esm/PlayCircleOutlineRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var PlayCircleOutlineRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "m10.8 15.9 4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4v7c0 .41.47.65.8.4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "PlayCircleOutlineRounded");

// src/components/ui/PrimaryButton.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var PrimaryButton = import_react.forwardRef(function PrimaryButton2({ variant: _variant, ...props }, ref) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
    ref,
    variant: "contained",
    ...props
  }, undefined, false, undefined, this);
});
var PrimaryButton_default = PrimaryButton;

// src/components/ui/CaseCard.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var CaseCard = ({ caseStudy, active = false, onOpenRecap }) => {
  const theme = useTheme();
  const { palette, tokens } = theme;
  const isDark = palette.mode === "dark";
  const activeBackground = isDark ? "linear-gradient(135deg, rgba(20, 45, 110, 0.98), rgba(58, 118, 226, 0.88))" : "linear-gradient(135deg, rgba(17, 76, 170, 0.88), rgba(60, 151, 255, 0.82))";
  const inactiveBackground = isDark ? "linear-gradient(140deg, rgba(20, 28, 52, 0.82), rgba(12, 18, 36, 0.88))" : "linear-gradient(135deg, rgba(248, 251, 255, 0.94), rgba(232, 242, 255, 0.88))";
  const headingColor = active ? "rgba(255, 255, 255, 0.96)" : isDark ? "rgba(226, 234, 255, 0.95)" : palette.text.primary;
  const bodyColor = active ? "rgba(255, 255, 255, 0.85)" : isDark ? "rgba(210, 220, 255, 0.82)" : palette.text.secondary;
  const borderColor = active ? "rgba(255, 255, 255, 0.42)" : isDark ? "rgba(122, 162, 255, 0.28)" : "rgba(17, 76, 170, 0.12)";
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Card_default, {
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
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CardContent_default, {
        sx: { flexGrow: 1, pb: 3 },
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
          spacing: 2.5,
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              spacing: 2,
              children: [
                /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                  variant: "eyebrow",
                  sx: {
                    color: active ? "rgba(255, 255, 255, 0.78)" : isDark ? "rgba(189, 204, 255, 0.82)" : palette.brand.secondary
                  },
                  children: [
                    "Case ",
                    caseStudy.number
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Pill_default, {
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
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
              variant: "h3",
              component: "h3",
              sx: { color: headingColor },
              children: caseStudy.title
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
              variant: "subtitle2",
              sx: {
                fontWeight: 500,
                color: bodyColor
              },
              children: [
                caseStudy.platform,
                caseStudy.platformDetail && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Box_default, {
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
            caseStudy.stat && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
              variant: "body2",
              sx: { color: bodyColor },
              children: caseStudy.stat
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
              direction: "row",
              spacing: 1,
              flexWrap: "wrap",
              useFlexGap: true,
              children: caseStudy.tags.map((tag) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Pill_default, {
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
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CardActions_default, {
        sx: { px: 3, pb: 3, pt: 0, gap: 1 },
        children: [
          active ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PrimaryButton_default, {
            component: Link,
            to: caseStudy.to,
            fullWidth: true,
            endIcon: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
            children: "Explore"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(GhostButton_default, {
            component: Link,
            to: caseStudy.to,
            fullWidth: true,
            endIcon: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
            children: "Explore"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(GhostButton_default, {
            fullWidth: true,
            color: active ? "inherit" : "primary",
            onClick: onOpenRecap,
            endIcon: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PlayCircleOutlineRounded_default, {}, undefined, false, undefined, this),
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
var CaseCard_default = CaseCard;

// src/components/ui/ImpactStatCard.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var ImpactStatCard = ({ value, label, description }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
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
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(CardContent_default, {
    sx: { display: "flex", flexDirection: "column", gap: 1 },
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
        variant: "h4",
        component: "p",
        children: value
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
        variant: "h6",
        component: "h6",
        children: label
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
        variant: "body2",
        color: "text.secondary",
        children: description
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
}, undefined, false, undefined, this);
var ImpactStatCard_default = ImpactStatCard;

// src/routes/HomePage.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var HomePage = () => {
  const theme = useTheme();
  const [selectedCaseStudy, setSelectedCaseStudy] = import_react2.useState(null);
  const selectedCaseStudyData = import_react2.useMemo(() => caseStudies.find((item) => item.id === selectedCaseStudy) ?? null, [selectedCaseStudy]);
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
        component: "section",
        sx: (theme2) => ({
          py: { xs: 6, md: 9 },
          background: theme2.palette.mode === "light" ? "radial-gradient(circle at 20% 15%, rgba(145, 167, 255, 0.12), transparent 58%), radial-gradient(circle at 80% 20%, rgba(34, 84, 255, 0.1), transparent 52%)" : "radial-gradient(circle at 18% 15%, rgba(73, 109, 193, 0.18), transparent 60%), radial-gradient(circle at 78% 18%, rgba(48, 86, 176, 0.18), transparent 55%)"
        }),
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 5, md: 8 },
            sx: {
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
                size: { xs: 12, md: 6 },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  spacing: 3,
                  sx: { maxWidth: 548 },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "eyebrow",
                      color: "brand.secondary",
                      children: hero.greeting
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "display",
                      children: hero.name
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "h2",
                      sx: {
                        color: theme.palette.text.secondary,
                        fontWeight: 500
                      },
                      children: hero.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "subtitle1",
                      sx: {
                        color: theme.palette.text.secondary,
                        fontSize: { xs: "1.05rem", md: "1.1rem" },
                        lineHeight: 1.6
                      },
                      children: hero.subtitle
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      spacing: 0.75,
                      children: hero.credentials.map((line) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        variant: "body1",
                        sx: { color: theme.palette.text.primary, lineHeight: 1.6 },
                        children: line
                      }, line, false, undefined, this))
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      direction: { xs: "column", sm: "row" },
                      spacing: 2,
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(PrimaryButton_default, {
                          component: Link,
                          to: hero.ctaPrimary.to,
                          endIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                          size: "large",
                          children: hero.ctaPrimary.label
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(GhostButton_default, {
                          component: Link,
                          to: hero.ctaSecondary.to,
                          size: "large",
                          children: hero.ctaSecondary.label
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(GhostButton_default, {
                      component: Link,
                      to: hero.availability.to,
                      variant: "text",
                      color: "secondary",
                      endIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                      sx: { alignSelf: "flex-start", fontWeight: 600 },
                      children: hero.availability.label
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
                size: { xs: 12, md: 5 },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                  sx: {
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                      sx: {
                        position: "absolute",
                        inset: { xs: 14, md: 20 },
                        background: theme.palette.mode === "light" ? "linear-gradient(180deg, rgba(145,167,255,0.22) 0%, rgba(244,247,251,0) 100%)" : "linear-gradient(180deg, rgba(58,88,170,0.35) 0%, rgba(4,7,15,0) 95%)",
                        borderRadius: "38%",
                        filter: "blur(36px)"
                      }
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Avatar_default, {
                      src: hero.portrait.src,
                      alt: hero.portrait.alt,
                      variant: "rounded",
                      sx: {
                        width: { xs: 260, md: 360 },
                        height: { xs: 260, md: 360 },
                        borderRadius: (theme2) => theme2.tokens.radius.xl,
                        boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 20px 46px rgba(17, 36, 83, 0.15)" : "0 22px 52px rgba(0, 0, 0, 0.4)",
                        border: (theme2) => `1px solid ${theme2.tokens.colors.border}`
                      }
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 6, md: 8 }, pt: { md: 6 } },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 3, md: 3.5 },
            children: metrics.map(({ value, title, description }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
              size: { xs: 12, sm: 6, md: 3 },
              children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ImpactStatCard_default, {
                value,
                label: title,
                description
              }, undefined, false, undefined, this)
            }, title, false, undefined, this))
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
        id: "case-studies",
        component: "section",
        sx: { py: { xs: 8, md: 10 }, backgroundColor: "background.paper" },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              spacing: 3,
              alignItems: "center",
              textAlign: "center",
              mb: 6,
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h2",
                  children: "Case studies"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h6",
                  color: "text.secondary",
                  children: "Examples of the impact I have made"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
              container: true,
              spacing: 4,
              children: caseStudies.map((item) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
                size: { xs: 12, md: 6 },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CaseCard_default, {
                  caseStudy: item,
                  active: item.id === "divar",
                  onOpenRecap: () => setSelectedCaseStudy(item.id)
                }, undefined, false, undefined, this)
              }, item.id, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
        sx: { py: { xs: 8, md: 10 } },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              spacing: 3,
              alignItems: "center",
              textAlign: "center",
              mb: 6,
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h2",
                  children: "Other Exciting Experience"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h6",
                  color: "text.secondary",
                  children: "Alongside my professional journey"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
              container: true,
              spacing: 4,
              children: experiences.map((experience) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
                size: { xs: 12, md: 6 },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
                  sx: { height: "100%" },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                      component: "img",
                      src: experience.image.src,
                      alt: experience.image.alt,
                      sx: {
                        width: "100%",
                        height: 240,
                        objectFit: "cover",
                        borderTopLeftRadius: (theme2) => theme2.shape.borderRadius,
                        borderTopRightRadius: (theme2) => theme2.shape.borderRadius
                      }
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardContent_default, {
                      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                        spacing: 2,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                            variant: "h5",
                            children: experience.title
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                            variant: "body1",
                            color: "text.secondary",
                            children: experience.description
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                            direction: "row",
                            spacing: 1,
                            flexWrap: "wrap",
                            children: experience.tags.map((tag) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Pill_default, {
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
                    experience.link && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
                      sx: { pt: 0, pb: 3, px: 3 },
                      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                        component: "a",
                        href: experience.link.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        endIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                        children: experience.link.label
                      }, undefined, false, undefined, this)
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, experience.title, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
        component: "section",
        sx: (theme2) => ({
          py: { xs: 6, md: 8 },
          background: theme2.palette.mode === "light" ? "linear-gradient(135deg, rgba(34,84,255,0.05), transparent 70%)" : "linear-gradient(135deg, rgba(48,86,176,0.18), rgba(4,7,15,0))"
        }),
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
          maxWidth: "md",
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
            component: "footer",
            elevation: 0,
            sx: (theme2) => ({
              borderRadius: theme2.tokens.radius.surface,
              border: `1px solid ${theme2.tokens.colors.border}`,
              background: theme2.palette.surface.base,
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
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Dialog_default, {
        open: Boolean(selectedCaseStudyData),
        onClose: () => setSelectedCaseStudy(null),
        "aria-labelledby": "case-study-recap-title",
        children: selectedCaseStudyData && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(DialogTitle_default, {
              id: "case-study-recap-title",
              children: selectedCaseStudyData.recap.headline
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(DialogContent_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  component: "ul",
                  spacing: 1.5,
                  sx: { pl: 2 },
                  children: selectedCaseStudyData.recap.bullets.map((bullet) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                    component: "li",
                    variant: "body1",
                    color: "text.secondary",
                    children: bullet
                  }, bullet, false, undefined, this))
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  direction: "row",
                  spacing: 2,
                  mt: 3,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                      component: Link,
                      to: selectedCaseStudyData.to,
                      variant: "contained",
                      fullWidth: true,
                      endIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                      onClick: () => setSelectedCaseStudy(null),
                      children: "Deep dive"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                      fullWidth: true,
                      variant: "outlined",
                      onClick: () => setSelectedCaseStudy(null),
                      children: "Close"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var HomePage_default = HomePage;
export {
  HomePage_default as default
};

//# debugId=4767DABC6514731D64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vc3JjL3JvdXRlcy9Ib21lUGFnZS50c3giLCAiLi4vc3JjL2RhdGEvaG9tZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL1ByaW1hcnlCdXR0b24udHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL0Nhc2VDYXJkLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL0hvbWVQYWdlLnRzeFxuLy8gUHVycG9zZTogUmVuZGVycyB0aGUgbGFuZGluZyBleHBlcmllbmNlIGluY2x1ZGluZyBoZXJvLCBtZXRyaWNzLCBjYXNlIHN0dWRpZXMsIGV4cGVyaWVuY2VzLCBhbmQgY29udGFjdCBjYWxsLXRvLWFjdGlvbi5cbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZGllcyxcbiAgZXhwZXJpZW5jZXMsXG4gIGhlcm8sXG4gIG1ldHJpY3MsXG4gIHNvY2lhbExpbmtzLFxufSBmcm9tIFwiLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgQ2FzZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvQ2FzZUNhcmRcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuaW1wb3J0IEltcGFjdFN0YXRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0ltcGFjdFN0YXRDYXJkXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9QaWxsXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9QcmltYXJ5QnV0dG9uXCI7XG5cbnR5cGUgQ2FzZVN0dWR5SWQgPSAodHlwZW9mIGNhc2VTdHVkaWVzKVtudW1iZXJdW1wiaWRcIl07XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFtzZWxlY3RlZENhc2VTdHVkeSwgc2V0U2VsZWN0ZWRDYXNlU3R1ZHldID1cbiAgICB1c2VTdGF0ZTxDYXNlU3R1ZHlJZCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHNlbGVjdGVkQ2FzZVN0dWR5RGF0YSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY2FzZVN0dWRpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRDYXNlU3R1ZHkpID8/IG51bGwsXG4gICAgW3NlbGVjdGVkQ2FzZVN0dWR5XSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgICA6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxOCUgMTUlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xOCksIHRyYW5zcGFyZW50IDYwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzglIDE4JSwgcmdiYSg0OCwgODYsIDE3NiwgMC4xOCksIHRyYW5zcGFyZW50IDU1JSlcIixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgc3BhY2luZz17eyB4czogNSwgbWQ6IDggfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gc3g9e3sgbWF4V2lkdGg6IDU0OCB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjFyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgICB7aGVyby5jcmVkZW50aWFscy5tYXAoKGxpbmUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIGxpbmVIZWlnaHQ6IDEuNiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fSBzcGFjaW5nPXsyfT5cbiAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgdG89e2hlcm8uY3RhUHJpbWFyeS50b31cbiAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgIHRvPXtoZXJvLmN0YVNlY29uZGFyeS50b31cbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICA+XG4gICAgICAgICAge2hlcm8uY3RhU2Vjb25kYXJ5LmxhYmVsfVxuICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgIHRvPXtoZXJvLmF2YWlsYWJpbGl0eS50b31cbiAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgc3g9e3sgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIiwgZm9udFdlaWdodDogNjAwIH19XG4gICAgICA+XG4gICAgICAgIHtoZXJvLmF2YWlsYWJpbGl0eS5sYWJlbH1cbiAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDUgfX0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGluc2V0OiB7IHhzOiAxNCwgbWQ6IDIwIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE0NSwxNjcsMjU1LDAuMjIpIDAlLCByZ2JhKDI0NCwyNDcsMjUxLDApIDEwMCUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDU4LDg4LDE3MCwwLjM1KSAwJSwgcmdiYSg0LDcsMTUsMCkgOTUlKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzglXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDM2cHgpXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMjYwLCBtZDogMzYwIH0sXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogMjYwLCBtZDogMzYwIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnhsLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMjBweCA0NnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xNSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMjJweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfX0ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gbGFiZWw9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8Q2FzZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNhc2VTdHVkeT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5PdGhlciBFeGNpdGluZyBFeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBbG9uZ3NpZGUgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17ZXhwZXJpZW5jZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtleHBlcmllbmNlLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtleHBlcmllbmNlLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntleHBlcmllbmNlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IDAsIHBiOiAzLCBweDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2V4cGVyaWVuY2UubGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNSksIHRyYW5zcGFyZW50IDcwJSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg0OCw4NiwxNzYsMC4xOCksIHJnYmEoNCw3LDE1LDApKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImZvb3RlclwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJhc2UsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcHQ6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9LFxuICAgICAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkXCI6IHsgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgTGV04oCZcyBjb25uZWN0XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgU2hhcmUgeW91ciBjaGFsbGVuZ2Ugb3Igc2F5IGhlbGxv4oCUaGFwcHkgdG8gZXhwbG9yZSBwcm9kdWN0IGRlc2lnbiBjb2xsYWJvcmF0aW9ucy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG10OiAzIH19IC8+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcGI6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcHQ6IDAsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIixcbiAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PVwiYVwiIGhyZWY9XCJtYWlsdG86c2RhcmltYXNpaEBnbWFpbC5jb21cIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgc2RhcmltYXNpaEBnbWFpbC5jb21cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19IHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oc2VsZWN0ZWRDYXNlU3R1ZHlEYXRhKX1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICAgICAgPlxuICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhLnJlY2FwLmhlYWRsaW5lfVxuICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyIH19PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENhc2VTdHVkeURhdGEucmVjYXAuYnVsbGV0cy5tYXAoKGJ1bGxldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2J1bGxldH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBtdD17M30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89e3NlbGVjdGVkQ2FzZVN0dWR5RGF0YS50b31cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWVwIGRpdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9EaWFsb2c+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9ob21lLnRzXG4vLyBQdXJwb3NlOiBDb250YWlucyBob21lIHBhZ2UgaGVybyBjb3B5LCBtZXRyaWNzLCBjYXNlIHN0dWR5IHN1bW1hcmllcywgYW5kIHNvY2lhbCBsaW5rIGRhdGEgY29uc3VtZWQgYnkgVUkgY29tcG9uZW50cy5cbmltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuXG5jb25zdCByZXNvbHZlQXNzZXQgPSAoYXNzZXQ6IHN0cmluZykgPT4gbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xudHlwZSBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBjcmVkZW50aWFsczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIGN0YVNlY29uZGFyeToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgYXZhaWxhYmlsaXR5OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xuICBwb3J0cmFpdDoge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBNZXRyaWNTdW1tYXJ5ID0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcCA9IHtcbiAgaGVhZGxpbmU6IHN0cmluZztcbiAgYnVsbGV0czogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG50eXBlIENhc2VTdHVkeVN1bW1hcnkgPSB7XG4gIGlkOiBcImRpdmFyXCIgfCBcInNldGFyZS1hdmFsXCI7XG4gIG51bWJlcjogc3RyaW5nO1xuICB0YWc6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgcGxhdGZvcm1EZXRhaWw/OiBzdHJpbmc7XG4gIHN0YXQ/OiBzdHJpbmc7XG4gIHRhZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB0bzogc3RyaW5nO1xuICByZWNhcDogQ2FzZVN0dWR5UmVjYXA7XG59O1xuXG50eXBlIEV4cGVyaWVuY2VTdW1tYXJ5ID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0YWdzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgaW1hZ2U6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgfTtcbiAgbGluaz86IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhyZWY6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgU29jaWFsTGluayA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGhlcm86IEhlcm9Db250ZW50ID0ge1xuICBncmVldGluZzogXCJIZWxsbyDwn5GL8J+PvCwgSSBhbVwiLFxuICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gIHRpdGxlOiBcImFuIGltcGFjdC1vcmllbnRlZCBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwid2l0aCA2KyB5ZWFycyBvZiBleHBlcmllbmNlLCBlbmhhbmNpbmcgZXhwZXJpZW5jZXMgZm9yIDQwIG1pbGxpb24gYWN0aXZlIHVzZXJzXCIsXG4gIGNyZWRlbnRpYWxzOiBbXG4gICAgXCJDZXJ0aWZpZWQgaW4gVVggRGVzaWduIGJ5IHRoZSBVbml2ZXJzaXR5IG9mIFRlaHJhbiBhbmQgU2hhcmlmIFVuaXZlcnNpdHlcIixcbiAgICBcIk1lbnRvcmVkIDIwMCsgc3R1ZGVudHMgYXMgYSBkZXNpZ24gaW5zdHJ1Y3RvciBvdmVyIHRoZSBwYXN0IDMgeWVhcnMuXCIsXG4gIF0sXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZGllc1wiLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyByZXN1bWVcIixcbiAgICB0bzogXCIvcmVzdW1lXCIsXG4gIH0sXG4gIGF2YWlsYWJpbGl0eToge1xuICAgIGxhYmVsOiBcIk9wZW4gdG8gc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcm9sZXNcIixcbiAgICB0bzogXCIvY29udGFjdFwiLFxuICB9LFxuICBwb3J0cmFpdDoge1xuICAgIHNyYzogcmVzb2x2ZUFzc2V0KGhlcm9Qb3J0cmFpdEFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWV0cmljcyA9IFtcbiAge1xuICAgIHZhbHVlOiBcIjYwJVwiLFxuICAgIHRpdGxlOiBcIlJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDby1sZWQgRGl2YXLigJlzIHNlY3VyZSBjYWxsIHN5c3RlbSB3aXRoIFRydXN0ICYgU2FmZXR5IHRvIHNhZmVndWFyZCAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiOC4zSytcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IHRlYW1zIHVzaW5nIE1vcnBoXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIG9wZW4gZGVzaWduIHN5c3RlbSB0aGF0IHBvd2VycyBGaWdtYSBoYW5kb2ZmcyBhbmQgYWNjZWxlcmF0ZXMgaGlnaC1xdWFsaXR5IHJlbGVhc2VzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgIHRpdGxlOiBcIkRlc2lnbmVycyBtZW50b3JlZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXNpZ25lZCBwcm9qZWN0LWJhc2VkIHByb2dyYW1zIGF0IFJhaG5lbWEgQ29sbGVnZSB0byBoZWxwIGVtZXJnaW5nIGRlc2lnbmVycyBsYXVuY2ggY2FyZWVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgIHRpdGxlOiBcIkxpZnQgaW4gcXVhbGlmaWVkIGxlYWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlZGVzaWduZWQgUGVyc29s4oCZcyBzaWduLXVwIGZ1bm5lbCBlbmQtdG8tZW5kLCByZW1vdmluZyBmcmljdGlvbiBhbmQgYm9vc3RpbmcgbGVhZCBnZW5lcmF0aW9uIGluIDMgbW9udGhzLlwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkaWVzID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXJcIixcbiAgICBudW1iZXI6IFwiMDFcIixcbiAgICB0YWc6IFwiSW1wcm92aW5nIFVzZXIgU2FmZXR5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFN0b3J5IG9mIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gICAgcGxhdGZvcm06IFwib24gRGl2YXJcIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJDbGFzc2lmaWVkIEFkcyBQbGF0Zm9ybVwiLFxuICAgIHN0YXQ6IFwiQSBmZWF0dXJlIHVzZWQgYnkgMi4xIG1pbGxpb24gdXNlcnMgcGVyIHdlZWtcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJ0cnVzdCAmIHNhZmV0eVwiLCBcImltcGFjdCBhdCBzY2FsZVwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOlxuICAgICAgICBcIkhvdyBjcm9zcy1mdW5jdGlvbmFsIGd1YXJkcmFpbHMgaGVscGVkIERpdmFyIHJlZHVjZSBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDby1sZWQgYSB0YXNrIGZvcmNlIGJyaWRnaW5nIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgYW5kIEVuZ2luZWVyaW5nLlwiLFxuICAgICAgICBcIlNoaXBwZWQgZHluYW1pYyB2b2ljZS1tYXNraW5nIHdpdGggYWJ1c2UgZGV0ZWN0aW9uIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICAgICAgICBcIlN0b29kIHVwIHBsYXlib29rcyBmb3IgbW9kZXJhdGlvbiBvcHMgdG8gbW9uaXRvciByZXBlYXQgb2ZmZW5kZXJzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWxcIixcbiAgICBudW1iZXI6IFwiMDJcIixcbiAgICB0YWc6IFwiQm9vc3RpbmcgVXNlciBFbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVyc1wiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsIENvLlwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlJldGVudGlvbiBzdHJhdGVneVwiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInJldGVudGlvbiBzdHJhdGVneVwiLCBcImNyb3NzLWZ1bmN0aW9uYWwgbGVhZGVyc2hpcFwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6XG4gICAgICAgIFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3Mgb25ib2FyZGluZyB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIk1hcHBlZCBhIG5ldyBsaWZlY3ljbGUgbW9kZWwgdGllZCB0byBkYXRhLWJhY2tlZCBleHBlcmltZW50YXRpb24uXCIsXG4gICAgICAgIFwiUmVmaW5lZCBhY3RpdmF0aW9uIGZsb3dzIHRvIHNwb3RsaWdodCB2YWx1ZSBwcm9wcyB3aXRoaW4gZmlyc3Qgc2Vzc2lvbi5cIixcbiAgICAgICAgXCJDby1jcmVhdGVkIGEgbGVhcm5pbmcgYWdlbmRhIHRvIG1lYXN1cmUgbG95YWx0eSBwcm9ncmFtIHRyYWN0aW9uLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIEluc3RydWN0b3IgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhaW5pbmcgMjAwKyBzdHVkZW50cyB0aHJvdWdoIDYgY291cnNlcyBzaW5jZSAyMDIyXCIsXG4gICAgdGFnczogW1wiZWR1Y2F0aW9uXCIsIFwibWVudG9yc2hpcFwiLCBcImN1cnJpY3VsdW0gZGVzaWduXCJdLFxuICAgIGltYWdlOiB7XG4gICAgICBzcmM6IHJlc29sdmVBc3NldChyYWhuZW1hU3R1ZGVudHNBc3NldCksXG4gICAgICBhbHQ6IFwiU3R1ZGVudHMgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vcnBoIERlc2lnbiBTeXN0ZW1cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZToge1xuICAgICAgc3JjOiByZXNvbHZlQXNzZXQobW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCksXG4gICAgICBhbHQ6IFwiTW9ycGggRGVzaWduIFN5c3RlbSAtIEZpZ21hIENvbW11bml0eVwiLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgbGFiZWw6IFwiVmlldyBvbiBGaWdtYSBDb21tdW5pdHlcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL2NvbW11bml0eS9maWxlLzEwNjkyNTkzMzM0NjcwODMxODJcIixcbiAgICB9LFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiRmlnbWFcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9AbWFzaWhcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlBvcnRmb2xpb1wiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9tYXNpaC5mcmFtZXIud2Vic2l0ZS9cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz47XG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTEwLjggMTUuOSA0LjY3LTMuNWMuMjctLjIuMjctLjYgMC0uOEwxMC44IDguMWMtLjMzLS4yNS0uOC0uMDEtLjguNHY3YzAgLjQxLjQ3LjY1LjguNE0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcmltYXJ5QnV0dG9uID0gZm9yd2FyZFJlZjxhbnksIEJ1dHRvblByb3BzPGFueT4+KGZ1bmN0aW9uIFByaW1hcnlCdXR0b24oXG4gIHsgdmFyaWFudDogX3ZhcmlhbnQsIC4uLnByb3BzIH0sXG4gIHJlZixcbikge1xuICByZXR1cm4gPEJ1dHRvbiByZWY9e3JlZn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUJ1dHRvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgY2FzZVN0dWRpZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4vR2hvc3RCdXR0b25cIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuL1BpbGxcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuL1ByaW1hcnlCdXR0b25cIjtcblxuZXhwb3J0IHR5cGUgQ2FzZVN0dWR5U3VtbWFyeSA9ICh0eXBlb2YgY2FzZVN0dWRpZXMpW251bWJlcl07XG5cbnR5cGUgQ2FzZUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VDYXJkID0gKHsgY2FzZVN0dWR5LCBhY3RpdmUgPSBmYWxzZSwgb25PcGVuUmVjYXAgfTogQ2FzZUNhcmRQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgcGFsZXR0ZSwgdG9rZW5zIH0gPSB0aGVtZTtcbiAgY29uc3QgaXNEYXJrID0gcGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIjtcblxuICBjb25zdCBhY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjAsIDQ1LCAxMTAsIDAuOTgpLCByZ2JhKDU4LCAxMTgsIDIyNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNywgNzYsIDE3MCwgMC44OCksIHJnYmEoNjAsIDE1MSwgMjU1LCAwLjgyKSlcIjtcblxuICBjb25zdCBpbmFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgyMCwgMjgsIDUyLCAwLjgyKSwgcmdiYSgxMiwgMTgsIDM2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0OCwgMjUxLCAyNTUsIDAuOTQpLCByZ2JhKDIzMiwgMjQyLCAyNTUsIDAuODgpKVwiO1xuXG4gIGNvbnN0IGhlYWRpbmdDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjI2LCAyMzQsIDI1NSwgMC45NSlcIlxuICAgICAgOiBwYWxldHRlLnRleHQucHJpbWFyeTtcblxuICBjb25zdCBib2R5Q29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIxMCwgMjIwLCAyNTUsIDAuODIpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcblxuICBjb25zdCBib3JkZXJDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4yOClcIlxuICAgICAgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMTIpXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgICBlbGV2YXRpb249ezB9XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gYWN0aXZlQmFja2dyb3VuZCA6IGluYWN0aXZlQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcbiAgICAgICAgY29sb3I6IGFjdGl2ZSA/IHBhbGV0dGUuY29tbW9uLndoaXRlIDogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIGJveFNoYWRvdzogYWN0aXZlID8gdG9rZW5zLnNoYWRvdy5sZXZlbDMgOiB0b2tlbnMuc2hhZG93LmxldmVsMixcbiAgICAgICAgdHJhbnNpdGlvbjogdG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTZweClcIixcbiAgICAgICAgICBib3hTaGFkb3c6IHRva2Vucy5zaGFkb3cubGV2ZWwzLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBiOiAzIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV5ZWJyb3dcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE4OSwgMjA0LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FzZSB7Y2FzZVN0dWR5Lm51bWJlcn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXNlU3R1ZHkudGFnfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yNClcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjcsIDI0MSwgMjU1LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIxNCwgMjI0LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXI6IGFjdGl2ZSA/IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDNcIiBzeD17eyBjb2xvcjogaGVhZGluZ0NvbG9yIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm19XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgbWw6IDAuNzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAoe2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbH0pXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXQgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IGJvZHlDb2xvciB9fT5cbiAgICAgICAgICAgICAge2Nhc2VTdHVkeS5zdGF0fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCwgZ2FwOiAxIH19PlxuICAgICAgICB7YWN0aXZlID8gKFxuICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgY29sb3I9e2FjdGl2ZSA/IFwiaW5oZXJpdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgb25DbGljaz17b25PcGVuUmVjYXB9XG4gICAgICAgICAgZW5kSWNvbj17PFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gLz59XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSlcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNilcIlxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTQpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBSZWNhcFxuICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlQ2FyZDtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIGxhYmVsLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1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Q1IsT0FBTTtBQUFBLG9CQUpSLFVBTUc7QUFBQSxxQkFKSSxRQUZQLHNCQU9FLENBQ0g7QUFBQSxtQkFWSCxpQ0FXRTtBQUFBLGdDQUNGLHdCQWtCRSxlQWxCRjtBQUFBLGtCQUFPLFdBQVU7QUFBQSxrQkFBTSxTQUFTO0FBQUEsa0JBQUcsSUFBSTtBQUFBLGtCQUF2QyxVQWtCRTtBQUFBLG9DQWpCQSx3QkFTRSxnQkFURjtBQUFBLHNCQUNFLFdBQVc7QUFBQSxzQkFDWCxJQUFJLHNCQUFzQjtBQUFBLHNCQUMxQixTQUFRO0FBQUEsc0JBQ1IsV0FBUztBQUFBLHNCQUNULHlCQUFTLHdCQUFDLDZCQUFELHFDQUF5QjtBQUFBLHNCQUNsQyxTQUFTLE1BQU0scUJBQXFCLElBQUk7QUFBQSxzQkFOMUM7QUFBQSx3REFTRTtBQUFBLG9DQUNGLHdCQU1FLGdCQU5GO0FBQUEsc0JBQ0UsV0FBUztBQUFBLHNCQUNULFNBQVE7QUFBQSxzQkFDUixTQUFTLE1BQU0scUJBQXFCLElBQUk7QUFBQSxzQkFIMUM7QUFBQSx3REFNRTtBQUFBO0FBQUEsbUJBakJKLGdDQWtCRTtBQUFBO0FBQUEsZUEvQkosZ0NBZ0NFO0FBQUE7QUFBQSxXQXBDSixnQ0FxQ0U7QUFBQSxTQTNDTixpQ0E2Q0U7QUFBQTtBQUFBLEtBbldKLGdDQW9XRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjQ3NjdEQUJDNjUxNDczMUQ2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
