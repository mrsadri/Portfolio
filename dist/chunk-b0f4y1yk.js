import {
  GhostButton_default,
  Pill_default
} from "./chunk-akz6m2hr.js";
import"./chunk-56dhb304.js";
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
    borderRadius: `${theme.tokens.radius.surface}px`,
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
              borderRadius: `${theme2.tokens.radius.surface}px`,
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

//# debugId=AD7807FC0FDEA27964756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vc3JjL3JvdXRlcy9Ib21lUGFnZS50c3giLCAiLi4vc3JjL2RhdGEvaG9tZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL1ByaW1hcnlCdXR0b24udHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL0Nhc2VDYXJkLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL0hvbWVQYWdlLnRzeFxuLy8gUHVycG9zZTogUmVuZGVycyB0aGUgbGFuZGluZyBleHBlcmllbmNlIGluY2x1ZGluZyBoZXJvLCBtZXRyaWNzLCBjYXNlIHN0dWRpZXMsIGV4cGVyaWVuY2VzLCBhbmQgY29udGFjdCBjYWxsLXRvLWFjdGlvbi5cbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBjYXNlU3R1ZGllcyxcbiAgZXhwZXJpZW5jZXMsXG4gIGhlcm8sXG4gIG1ldHJpY3MsXG4gIHNvY2lhbExpbmtzLFxufSBmcm9tIFwiLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgQ2FzZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvQ2FzZUNhcmRcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuaW1wb3J0IEltcGFjdFN0YXRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0ltcGFjdFN0YXRDYXJkXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9QaWxsXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9QcmltYXJ5QnV0dG9uXCI7XG5cbnR5cGUgQ2FzZVN0dWR5SWQgPSAodHlwZW9mIGNhc2VTdHVkaWVzKVtudW1iZXJdW1wiaWRcIl07XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFtzZWxlY3RlZENhc2VTdHVkeSwgc2V0U2VsZWN0ZWRDYXNlU3R1ZHldID1cbiAgICB1c2VTdGF0ZTxDYXNlU3R1ZHlJZCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHNlbGVjdGVkQ2FzZVN0dWR5RGF0YSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY2FzZVN0dWRpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRDYXNlU3R1ZHkpID8/IG51bGwsXG4gICAgW3NlbGVjdGVkQ2FzZVN0dWR5XSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOSB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDE0NSwgMTY3LCAyNTUsIDAuMTIpLCB0cmFuc3BhcmVudCA1OCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMzQsIDg0LCAyNTUsIDAuMSksIHRyYW5zcGFyZW50IDUyJSlcIlxuICAgICAgICAgICAgICA6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxOCUgMTUlLCByZ2JhKDczLCAxMDksIDE5MywgMC4xOCksIHRyYW5zcGFyZW50IDYwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzglIDE4JSwgcmdiYSg0OCwgODYsIDE3NiwgMC4xOCksIHRyYW5zcGFyZW50IDU1JSlcIixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgc3BhY2luZz17eyB4czogNSwgbWQ6IDggfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gc3g9e3sgbWF4V2lkdGg6IDU0OCB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjFyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgICB7aGVyby5jcmVkZW50aWFscy5tYXAoKGxpbmUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIGxpbmVIZWlnaHQ6IDEuNiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fSBzcGFjaW5nPXsyfT5cbiAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgdG89e2hlcm8uY3RhUHJpbWFyeS50b31cbiAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgIHRvPXtoZXJvLmN0YVNlY29uZGFyeS50b31cbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICA+XG4gICAgICAgICAge2hlcm8uY3RhU2Vjb25kYXJ5LmxhYmVsfVxuICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgIHRvPXtoZXJvLmF2YWlsYWJpbGl0eS50b31cbiAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgc3g9e3sgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIiwgZm9udFdlaWdodDogNjAwIH19XG4gICAgICA+XG4gICAgICAgIHtoZXJvLmF2YWlsYWJpbGl0eS5sYWJlbH1cbiAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDUgfX0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGluc2V0OiB7IHhzOiAxNCwgbWQ6IDIwIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE0NSwxNjcsMjU1LDAuMjIpIDAlLCByZ2JhKDI0NCwyNDcsMjUxLDApIDEwMCUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDU4LDg4LDE3MCwwLjM1KSAwJSwgcmdiYSg0LDcsMTUsMCkgOTUlKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzglXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDM2cHgpXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMjYwLCBtZDogMzYwIH0sXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogMjYwLCBtZDogMzYwIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnhsLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMjBweCA0NnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xNSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMjJweCA1MnB4IHJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfX0ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gbGFiZWw9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8Q2FzZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNhc2VTdHVkeT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5PdGhlciBFeGNpdGluZyBFeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBbG9uZ3NpZGUgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17ZXhwZXJpZW5jZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtleHBlcmllbmNlLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtleHBlcmllbmNlLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntleHBlcmllbmNlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IDAsIHBiOiAzLCBweDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2V4cGVyaWVuY2UubGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNSksIHRyYW5zcGFyZW50IDcwJSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg0OCw4NiwxNzYsMC4xOCksIHJnYmEoNCw3LDE1LDApKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImZvb3RlclwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS5iYXNlLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHB0OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHBiOiB7IHhzOiAzLjUsIG1kOiAzLjUgfSxcbiAgICAgICAgICAgICAgICBcIiY6bGFzdC1jaGlsZFwiOiB7IHBiOiB7IHhzOiAzLjUsIG1kOiAzLjUgfSB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgIExldOKAmXMgY29ubmVjdFxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgIFNoYXJlIHlvdXIgY2hhbGxlbmdlIG9yIHNheSBoZWxsb+KAlGhhcHB5IHRvIGV4cGxvcmUgcHJvZHVjdCBkZXNpZ24gY29sbGFib3JhdGlvbnMuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtdDogMyB9fSAvPlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkQWN0aW9uc1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHBiOiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHB0OiAwLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gICAgICAgICAgICAgICAgZ2FwOiAxLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD1cImFcIiBocmVmPVwibWFpbHRvOnNkYXJpbWFzaWhAZ21haWwuY29tXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIHNkYXJpbWFzaWhAZ21haWwuY29tXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fSBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtCb29sZWFuKHNlbGVjdGVkQ2FzZVN0dWR5RGF0YSl9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KG51bGwpfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCJcbiAgICAgID5cbiAgICAgICAge3NlbGVjdGVkQ2FzZVN0dWR5RGF0YSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIj5cbiAgICAgICAgICAgICAge3NlbGVjdGVkQ2FzZVN0dWR5RGF0YS5yZWNhcC5oZWFkbGluZX1cbiAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MS41fSBzeD17eyBwbDogMiB9fT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhLnJlY2FwLmJ1bGxldHMubWFwKChidWxsZXQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtidWxsZXR9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YnVsbGV0fVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gbXQ9ezN9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIHRvPXtzZWxlY3RlZENhc2VTdHVkeURhdGEudG99XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRGVlcCBkaXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbiIsCiAgICAiLy8gRmlsZTogc3JjL2RhdGEvaG9tZS50c1xuLy8gUHVycG9zZTogQ29udGFpbnMgaG9tZSBwYWdlIGhlcm8gY29weSwgbWV0cmljcywgY2FzZSBzdHVkeSBzdW1tYXJpZXMsIGFuZCBzb2NpYWwgbGluayBkYXRhIGNvbnN1bWVkIGJ5IFVJIGNvbXBvbmVudHMuXG5pbXBvcnQgaGVyb1BvcnRyYWl0QXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1zYWRyaS1wcm9maWxlLndlYnBcIjtcbmltcG9ydCBtb3JwaERlc2lnblN5c3RlbUFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbW9ycGgtZGVzaWduLXN5c3RlbS53ZWJwXCI7XG5pbXBvcnQgcmFobmVtYVN0dWRlbnRzQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYWhuZW1hLXN0dWRlbnRzLndlYnBcIjtcblxuY29uc3QgcmVzb2x2ZUFzc2V0ID0gKGFzc2V0OiBzdHJpbmcpID0+IG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZjtcbnR5cGUgSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgY3JlZGVudGlhbHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIGF2YWlsYWJpbGl0eToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgcG9ydHJhaXQ6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgTWV0cmljU3VtbWFyeSA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXAgPSB7XG4gIGhlYWRsaW5lOiBzdHJpbmc7XG4gIGJ1bGxldHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xufTtcblxudHlwZSBDYXNlU3R1ZHlTdW1tYXJ5ID0ge1xuICBpZDogXCJkaXZhclwiIHwgXCJzZXRhcmUtYXZhbFwiO1xuICBudW1iZXI6IHN0cmluZztcbiAgdGFnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIHBsYXRmb3JtRGV0YWlsPzogc3RyaW5nO1xuICBzdGF0Pzogc3RyaW5nO1xuICB0YWdzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgdG86IHN0cmluZztcbiAgcmVjYXA6IENhc2VTdHVkeVJlY2FwO1xufTtcblxudHlwZSBFeHBlcmllbmNlU3VtbWFyeSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdGFnczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGltYWdlOiB7XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgYWx0OiBzdHJpbmc7XG4gIH07XG4gIGxpbms/OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBocmVmOiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIFNvY2lhbExpbmsgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBoZXJvOiBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IFwiSGVsbG8g8J+Ri/Cfj7wsIEkgYW1cIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICB0aXRsZTogXCJhbiBpbXBhY3Qtb3JpZW50ZWQgUHJvZHVjdCBEZXNpZ25lclwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIndpdGggNisgeWVhcnMgb2YgZXhwZXJpZW5jZSwgZW5oYW5jaW5nIGV4cGVyaWVuY2VzIGZvciA0MCBtaWxsaW9uIGFjdGl2ZSB1c2Vyc1wiLFxuICBjcmVkZW50aWFsczogW1xuICAgIFwiQ2VydGlmaWVkIGluIFVYIERlc2lnbiBieSB0aGUgVW5pdmVyc2l0eSBvZiBUZWhyYW4gYW5kIFNoYXJpZiBVbml2ZXJzaXR5XCIsXG4gICAgXCJNZW50b3JlZCAyMDArIHN0dWRlbnRzIGFzIGEgZGVzaWduIGluc3RydWN0b3Igb3ZlciB0aGUgcGFzdCAzIHllYXJzLlwiLFxuICBdLFxuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyBjYXNlIHN0dWRpZXNcIixcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gIH0sXG4gIGN0YVNlY29uZGFyeToge1xuICAgIGxhYmVsOiBcIlZpZXcgcmVzdW1lXCIsXG4gICAgdG86IFwiL3Jlc3VtZVwiLFxuICB9LFxuICBhdmFpbGFiaWxpdHk6IHtcbiAgICBsYWJlbDogXCJPcGVuIHRvIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHJvbGVzXCIsXG4gICAgdG86IFwiL2NvbnRhY3RcIixcbiAgfSxcbiAgcG9ydHJhaXQ6IHtcbiAgICBzcmM6IHJlc29sdmVBc3NldChoZXJvUG9ydHJhaXRBc3NldCksXG4gICAgYWx0OiBcIk1hc2loIFNhZHJpIC0gUHJvZHVjdCBEZXNpZ25lclwiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3MgPSBbXG4gIHtcbiAgICB2YWx1ZTogXCI2MCVcIixcbiAgICB0aXRsZTogXCJSZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ28tbGVkIERpdmFy4oCZcyBzZWN1cmUgY2FsbCBzeXN0ZW0gd2l0aCBUcnVzdCAmIFNhZmV0eSB0byBzYWZlZ3VhcmQgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjguM0srXCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCB0ZWFtcyB1c2luZyBNb3JwaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBhbiBvcGVuIGRlc2lnbiBzeXN0ZW0gdGhhdCBwb3dlcnMgRmlnbWEgaGFuZG9mZnMgYW5kIGFjY2VsZXJhdGVzIGhpZ2gtcXVhbGl0eSByZWxlYXNlcy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICB0aXRsZTogXCJEZXNpZ25lcnMgbWVudG9yZWRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGVzaWduZWQgcHJvamVjdC1iYXNlZCBwcm9ncmFtcyBhdCBSYWhuZW1hIENvbGxlZ2UgdG8gaGVscCBlbWVyZ2luZyBkZXNpZ25lcnMgbGF1bmNoIGNhcmVlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4MCVcIixcbiAgICB0aXRsZTogXCJMaWZ0IGluIHF1YWxpZmllZCBsZWFkc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWRlc2lnbmVkIFBlcnNvbOKAmXMgc2lnbi11cCBmdW5uZWwgZW5kLXRvLWVuZCwgcmVtb3ZpbmcgZnJpY3Rpb24gYW5kIGJvb3N0aW5nIGxlYWQgZ2VuZXJhdGlvbiBpbiAzIG1vbnRocy5cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZGllcyA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyXCIsXG4gICAgbnVtYmVyOiBcIjAxXCIsXG4gICAgdGFnOiBcIkltcHJvdmluZyBVc2VyIFNhZmV0eVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTdG9yeSBvZiBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICAgIHBsYXRmb3JtOiBcIm9uIERpdmFyXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiQ2xhc3NpZmllZCBBZHMgUGxhdGZvcm1cIixcbiAgICBzdGF0OiBcIkEgZmVhdHVyZSB1c2VkIGJ5IDIuMSBtaWxsaW9uIHVzZXJzIHBlciB3ZWVrXCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwidHJ1c3QgJiBzYWZldHlcIiwgXCJpbXBhY3QgYXQgc2NhbGVcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTpcbiAgICAgICAgXCJIb3cgY3Jvc3MtZnVuY3Rpb25hbCBndWFyZHJhaWxzIGhlbHBlZCBEaXZhciByZWR1Y2UgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiQ28tbGVkIGEgdGFzayBmb3JjZSBicmlkZ2luZyBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIGFuZCBFbmdpbmVlcmluZy5cIixcbiAgICAgICAgXCJTaGlwcGVkIGR5bmFtaWMgdm9pY2UtbWFza2luZyB3aXRoIGFidXNlIGRldGVjdGlvbiBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgICAgICAgXCJTdG9vZCB1cCBwbGF5Ym9va3MgZm9yIG1vZGVyYXRpb24gb3BzIHRvIG1vbml0b3IgcmVwZWF0IG9mZmVuZGVycy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsXCIsXG4gICAgbnVtYmVyOiBcIjAyXCIsXG4gICAgdGFnOiBcIkJvb3N0aW5nIFVzZXIgRW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnNcIixcbiAgICBwbGF0Zm9ybTogXCJhdCBTZXRhcmUgQXZhbCBDby5cIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJSZXRlbnRpb24gc3RyYXRlZ3lcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJyZXRlbnRpb24gc3RyYXRlZ3lcIiwgXCJjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXBcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOlxuICAgICAgICBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIG9uYm9hcmRpbmcgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJNYXBwZWQgYSBuZXcgbGlmZWN5Y2xlIG1vZGVsIHRpZWQgdG8gZGF0YS1iYWNrZWQgZXhwZXJpbWVudGF0aW9uLlwiLFxuICAgICAgICBcIlJlZmluZWQgYWN0aXZhdGlvbiBmbG93cyB0byBzcG90bGlnaHQgdmFsdWUgcHJvcHMgd2l0aGluIGZpcnN0IHNlc3Npb24uXCIsXG4gICAgICAgIFwiQ28tY3JlYXRlZCBhIGxlYXJuaW5nIGFnZW5kYSB0byBtZWFzdXJlIGxveWFsdHkgcHJvZ3JhbSB0cmFjdGlvbi5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBJbnN0cnVjdG9yIGF0IFJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYWluaW5nIDIwMCsgc3R1ZGVudHMgdGhyb3VnaCA2IGNvdXJzZXMgc2luY2UgMjAyMlwiLFxuICAgIHRhZ3M6IFtcImVkdWNhdGlvblwiLCBcIm1lbnRvcnNoaXBcIiwgXCJjdXJyaWN1bHVtIGRlc2lnblwiXSxcbiAgICBpbWFnZToge1xuICAgICAgc3JjOiByZXNvbHZlQXNzZXQocmFobmVtYVN0dWRlbnRzQXNzZXQpLFxuICAgICAgYWx0OiBcIlN0dWRlbnRzIGF0IFJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGZyb20gc2NyYXRjaCwgdXNlZCBvdmVyIDc0MDAgdGltZXMgaW4gdGhlIEZpZ21hIENvbW11bml0eVwiLFxuICAgIHRhZ3M6IFtcIm9wZW4gc291cmNlXCIsIFwiZGVzaWduIHN5c3RlbVwiLCBcImNvbW11bml0eSBpbXBhY3RcIl0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHNyYzogcmVzb2x2ZUFzc2V0KG1vcnBoRGVzaWduU3lzdGVtQXNzZXQpLFxuICAgICAgYWx0OiBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8RXhwZXJpZW5jZVN1bW1hcnk+O1xuXG5leHBvcnQgY29uc3Qgc29jaWFsTGlua3MgPSBbXG4gIHtcbiAgICBsYWJlbDogXCJMaW5rZWRJblwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkZpZ21hXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5maWdtYS5jb20vQG1hc2loXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJQb3J0Zm9saW9cIixcbiAgICBocmVmOiBcImh0dHBzOi8vbWFzaWguZnJhbWVyLndlYnNpdGUvXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PFNvY2lhbExpbms+O1xuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJpbWFyeUJ1dHRvbiA9IGZvcndhcmRSZWY8YW55LCBCdXR0b25Qcm9wczxhbnk+PihmdW5jdGlvbiBQcmltYXJ5QnV0dG9uKFxuICB7IHZhcmlhbnQ6IF92YXJpYW50LCAuLi5wcm9wcyB9LFxuICByZWYsXG4pIHtcbiAgcmV0dXJuIDxCdXR0b24gcmVmPXtyZWZ9IHZhcmlhbnQ9XCJjb250YWluZWRcIiB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlCdXR0b247XG5cblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkXCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IGNhc2VTdHVkaWVzIH0gZnJvbSBcIi4uLy4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IEdob3N0QnV0dG9uIGZyb20gXCIuL0dob3N0QnV0dG9uXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi9QaWxsXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi9QcmltYXJ5QnV0dG9uXCI7XG5cbmV4cG9ydCB0eXBlIENhc2VTdHVkeVN1bW1hcnkgPSAodHlwZW9mIGNhc2VTdHVkaWVzKVtudW1iZXJdO1xuXG50eXBlIENhc2VDYXJkUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgb25PcGVuUmVjYXA/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG59O1xuXG5jb25zdCBDYXNlQ2FyZCA9ICh7IGNhc2VTdHVkeSwgYWN0aXZlID0gZmFsc2UsIG9uT3BlblJlY2FwIH06IENhc2VDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG5cbiAgY29uc3QgYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIwLCA0NSwgMTEwLCAwLjk4KSwgcmdiYSg1OCwgMTE4LCAyMjYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTcsIDc2LCAxNzAsIDAuODgpLCByZ2JhKDYwLCAxNTEsIDI1NSwgMC44MikpXCI7XG5cbiAgY29uc3QgaW5hY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjAsIDI4LCA1MiwgMC44MiksIHJnYmEoMTIsIDE4LCAzNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjk0KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjg4KSlcIjtcblxuICBjb25zdCBoZWFkaW5nQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIyNiwgMjM0LCAyNTUsIDAuOTUpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMTAsIDIyMCwgMjU1LCAwLjgyKVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgIDogXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjEyKVwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IGFjdGl2ZUJhY2tncm91bmQgOiBpbmFjdGl2ZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2JvcmRlckNvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBhY3RpdmUgPyBwYWxldHRlLmNvbW1vbi53aGl0ZSA6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IHRva2Vucy5zaGFkb3cubGV2ZWwzIDogdG9rZW5zLnNoYWRvdy5sZXZlbDIsXG4gICAgICAgIHRyYW5zaXRpb246IHRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiB0b2tlbnMuc2hhZG93LmxldmVsMyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYjogMyB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxODksIDIwNCwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhc2Uge2Nhc2VTdHVkeS5udW1iZXJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMTQsIDIyNCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBhY3RpdmUgPyBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcImluaGVyaXRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2FwfVxuICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUmVjYXBcbiAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIEltcGFjdFN0YXRDYXJkUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBJbXBhY3RTdGF0Q2FyZCA9ICh7IHZhbHVlLCBsYWJlbCwgZGVzY3JpcHRpb24gfTogSW1wYWN0U3RhdENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2V9cHhgLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxIH19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNlwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0NhcmRDb250ZW50PlxuICA8L0NhcmQ+XG4pO1xu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QUEsb0JBRVYsU0FBUTtBQUFBLG9CQUNSLE9BQU07QUFBQSxvQkFKUixVQU1HO0FBQUEscUJBSkksUUFGUCxzQkFPRSxDQUNIO0FBQUEsbUJBVkgsaUNBV0U7QUFBQSxnQ0FDRix3QkFrQkUsZUFsQkY7QUFBQSxrQkFBTyxXQUFVO0FBQUEsa0JBQU0sU0FBUztBQUFBLGtCQUFHLElBQUk7QUFBQSxrQkFBdkMsVUFrQkU7QUFBQSxvQ0FqQkEsd0JBU0UsZ0JBVEY7QUFBQSxzQkFDRSxXQUFXO0FBQUEsc0JBQ1gsSUFBSSxzQkFBc0I7QUFBQSxzQkFDMUIsU0FBUTtBQUFBLHNCQUNSLFdBQVM7QUFBQSxzQkFDVCx5QkFBUyx3QkFBQyw2QkFBRCxxQ0FBeUI7QUFBQSxzQkFDbEMsU0FBUyxNQUFNLHFCQUFxQixJQUFJO0FBQUEsc0JBTjFDO0FBQUEsd0RBU0U7QUFBQSxvQ0FDRix3QkFNRSxnQkFORjtBQUFBLHNCQUNFLFdBQVM7QUFBQSxzQkFDVCxTQUFRO0FBQUEsc0JBQ1IsU0FBUyxNQUFNLHFCQUFxQixJQUFJO0FBQUEsc0JBSDFDO0FBQUEsd0RBTUU7QUFBQTtBQUFBLG1CQWpCSixnQ0FrQkU7QUFBQTtBQUFBLGVBL0JKLGdDQWdDRTtBQUFBO0FBQUEsV0FwQ0osZ0NBcUNFO0FBQUEsU0EzQ04saUNBNkNFO0FBQUE7QUFBQSxLQW5XSixnQ0FvV0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICJBRDc4MDdGQzBGREVBMjc5NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
