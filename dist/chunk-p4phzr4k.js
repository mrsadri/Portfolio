import {
  GhostButton_default
} from "./chunk-wds9v5jt.js";
import"./chunk-56dhb304.js";
import {
  Pill_default
} from "./chunk-3197h7cd.js";
import {
  Seo_default
} from "./chunk-2ny3xade.js";
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
} from "./chunk-dkmh5se1.js";

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
  const siteUrl = typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL || "https://mrsadri.github.io/Portfolio";
  const primaryHeroMetric = metrics[0];
  const structuredData = [
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
  const selectedCaseStudyData = import_react2.useMemo(() => caseStudies.find((item) => item.id === selectedCaseStudy) ?? null, [selectedCaseStudy]);
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Seo_default, {
        title: "Masih Sadri — Senior Product Designer crafting trustworthy experiences",
        description: "Portfolio of Masih Sadri, an impact-oriented senior product designer protecting millions of users through trust & safety, growth, and design systems.",
        canonicalPath: "/",
        openGraph: {
          type: "website",
          image: {
            url: hero.portrait.src,
            alt: hero.portrait.alt
          }
        },
        structuredData
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
        component: "section",
        sx: (theme2) => ({
          py: { xs: 6, md: 9 },
          background: theme2.palette.mode === "light" ? "radial-gradient(circle at 20% 15%, rgba(145, 167, 255, 0.12), transparent 58%), radial-gradient(circle at 80% 20%, rgba(34, 84, 255, 0.1), transparent 52%)" : "radial-gradient(circle at 18% 15%, rgba(73, 109, 193, 0.18), transparent 60%), radial-gradient(circle at 78% 18%, rgba(48, 86, 176, 0.18), transparent 55%)"
        }),
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
            direction: { xs: "column", md: "row" },
            spacing: { xs: 4, md: 3.5 },
            sx: {
              alignItems: { xs: "center", md: "stretch" },
              px: { xs: 0, md: 2 }
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                spacing: 2.5,
                sx: {
                  flexBasis: { md: "30%" },
                  maxWidth: { md: "30%" },
                  flexShrink: 0,
                  alignItems: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                  width: "100%"
                },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                  sx: {
                    position: "relative",
                    width: "100%",
                    maxWidth: { xs: 260, sm: 300, md: 320 }
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Avatar_default, {
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
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
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
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
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
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                          variant: "caption",
                          sx: { fontWeight: 600, letterSpacing: 0.4, whiteSpace: "nowrap" },
                          children: "Available for senior roles"
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
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
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                    spacing: { xs: 1.4, md: 1.8 },
                    sx: { width: "100%" },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                        direction: { xs: "column", sm: "row" },
                        spacing: { xs: 1, sm: 1.5 },
                        alignItems: { xs: "center", sm: "flex-start" },
                        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Pill_default, {
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
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        variant: "display",
                        sx: {
                          lineHeight: 1.05,
                          letterSpacing: "-0.015em"
                        },
                        children: hero.name
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
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
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    sx: {
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "1.05rem", md: "1.12rem" },
                      lineHeight: { xs: 1.65, md: 1.7 }
                    },
                    children: hero.subtitle
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                    spacing: 1.1,
                    children: hero.credentials.map((line) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "body1",
                      sx: { color: theme.palette.text.primary, lineHeight: 1.65 },
                      children: line
                    }, line, false, undefined, this))
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                    spacing: { xs: 1.4, sm: 1.8 },
                    direction: { xs: "column", sm: "row" },
                    sx: { pt: { xs: 0.5, md: 0.75 } },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(PrimaryButton_default, {
                        component: Link,
                        to: hero.ctaPrimary.to,
                        endIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
                        size: "large",
                        sx: { minWidth: { sm: 220 } },
                        children: hero.ctaPrimary.label
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(GhostButton_default, {
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
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(GhostButton_default, {
                    component: Link,
                    to: hero.availability.to,
                    variant: "text",
                    color: "secondary",
                    endIcon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ArrowForwardRounded_default, {}, undefined, false, undefined, this),
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

//# debugId=9807A710494734BB64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vc3JjL3JvdXRlcy9Ib21lUGFnZS50c3giLCAiLi4vc3JjL2RhdGEvaG9tZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL1ByaW1hcnlCdXR0b24udHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL0Nhc2VDYXJkLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL0hvbWVQYWdlLnRzeFxuLy8gUHVycG9zZTogUmVuZGVycyB0aGUgbGFuZGluZyBleHBlcmllbmNlIGluY2x1ZGluZyBoZXJvLCBtZXRyaWNzLCBjYXNlIHN0dWRpZXMsIGV4cGVyaWVuY2VzLCBhbmQgY29udGFjdCBjYWxsLXRvLWFjdGlvbi5cbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWRpZXMsXG4gIGV4cGVyaWVuY2VzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICBzb2NpYWxMaW5rcyxcbn0gZnJvbSBcIi4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IENhc2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Nhc2VDYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCBJbXBhY3RTdGF0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUHJpbWFyeUJ1dHRvblwiO1xuXG50eXBlIENhc2VTdHVkeUlkID0gKHR5cGVvZiBjYXNlU3R1ZGllcylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHksIHNldFNlbGVjdGVkQ2FzZVN0dWR5XSA9XG4gICAgdXNlU3RhdGU8Q2FzZVN0dWR5SWQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzaXRlVXJsID1cbiAgICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgICBcImh0dHBzOi8vbXJzYWRyaS5naXRodWIuaW8vUG9ydGZvbGlvXCI7XG5cbiAgY29uc3QgcHJpbWFyeUhlcm9NZXRyaWMgPSBtZXRyaWNzWzBdO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0gW1xuICAgIHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIixcbiAgICAgICAgdGFyZ2V0OiBgJHtzaXRlVXJsfS8/cT17c2VhcmNoX3Rlcm1fc3RyaW5nfWAsXG4gICAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgICBkZXNjcmlwdGlvbjogaGVyby5zdWJ0aXRsZSxcbiAgICAgIHVybDogc2l0ZVVybCxcbiAgICAgIGltYWdlOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgIHNhbWVBczogc29jaWFsTGlua3MubWFwKChsaW5rKSA9PiBsaW5rLmhyZWYpLFxuICAgIH0sXG4gIF0gYXMgY29uc3Q7XG5cbiAgY29uc3Qgc2VsZWN0ZWRDYXNlU3R1ZHlEYXRhID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZGllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZENhc2VTdHVkeSkgPz8gbnVsbCxcbiAgICBbc2VsZWN0ZWRDYXNlU3R1ZHldLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgdGl0bGU9XCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlBvcnRmb2xpbyBvZiBNYXNpaCBTYWRyaSwgYW4gaW1wYWN0LW9yaWVudGVkIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHByb3RlY3RpbmcgbWlsbGlvbnMgb2YgdXNlcnMgdGhyb3VnaCB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBhbmQgZGVzaWduIHN5c3RlbXMuXCJcbiAgICAgICAgY2Fub25pY2FsUGF0aD1cIi9cIlxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdXJsOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgICAgICAgIGFsdDogaGVyby5wb3J0cmFpdC5hbHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3RydWN0dXJlZERhdGE9e3N0cnVjdHVyZWREYXRhfVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA5IH0sXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAxNSUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4xMiksIHRyYW5zcGFyZW50IDU4JSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSgzNCwgODQsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQgNTIlKVwiXG4gICAgICAgICAgICAgIDogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAxNSUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjE4KSwgdHJhbnNwYXJlbnQgNjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3OCUgMTglLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE4KSwgdHJhbnNwYXJlbnQgNTUlKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiAzLjUgfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcInN0cmV0Y2hcIiB9LFxuICAgICAgICAgICAgICBweDogeyB4czogMCwgbWQ6IDIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzMjAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDE4cHggNDBweCByZ2JhKDE3LCAzNiwgODMsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTI0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgMzYsIDgzLCAwLjg2KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg1LCAxMiwgMjQsIDAuODgpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImNvbW1vbi53aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgICAgcHg6IDIuMjUsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAwLjc1LFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxMnB4IDI0cHggcmdiYSgxMiwgMjgsIDc1LCAwLjM1KVwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJhdmFpbGFiaWxpdHlQdWxzZSAxLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJAa2V5ZnJhbWVzIGF2YWlsYWJpbGl0eVB1bHNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMCUsIDEwMCVcIjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjUwJVwiOiB7IG9wYWNpdHk6IDAuMiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBzeD17eyBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuNCwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBdmFpbGFibGUgZm9yIHNlbmlvciByb2xlc1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLjI1LCBtZDogMi43NSB9fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjcwJVwiIH0sXG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNCwgbWQ6IDEuOCB9fSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLCBzbTogMS41IH19XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcImNlbnRlclwiLCBzbTogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17aGVyby5ncmVldGluZ31cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjMsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkaXNwbGF5XCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMDUsXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiLTAuMDE1ZW1cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2hlcm8ubmFtZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7IHhzOiBcIjAuMDFlbVwiLCBtZDogXCIwLjAwNWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiNzglXCIgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2hlcm8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjEuMDVyZW1cIiwgbWQ6IFwiMS4xMnJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjY1LCBtZDogMS43IH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjF9PlxuICAgICAgICAgICAgICAgIHtoZXJvLmNyZWRlbnRpYWxzLm1hcCgobGluZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsaW5lfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIGxpbmVIZWlnaHQ6IDEuNjUgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNCwgc206IDEuOCB9fVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICBzeD17eyBwdDogeyB4czogMC41LCBtZDogMC43NSB9IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89e2hlcm8uY3RhUHJpbWFyeS50b31cbiAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBzeD17eyBtaW5XaWR0aDogeyBzbTogMjIwIH0gfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aGVyby5jdGFQcmltYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIHRvPXtoZXJvLmN0YVNlY29uZGFyeS50b31cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLmN0YVNlY29uZGFyeS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgdG89e2hlcm8uYXZhaWxhYmlsaXR5LnRvfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IHsgeHM6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICBtdDogeyB4czogMC41LCBtZDogMC43NSB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5hdmFpbGFiaWxpdHkubGFiZWx9XG4gICAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9LCBwdDogeyBtZDogNiB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAzLCBtZDogMy41IH19PlxuICAgICAgICAgICAge21ldHJpY3MubWFwKCh7IHZhbHVlLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgc206IDYsIG1kOiAzIH19IGtleT17dGl0bGV9PlxuICAgICAgICAgICAgICAgIDxJbXBhY3RTdGF0Q2FyZCB2YWx1ZT17dmFsdWV9IGxhYmVsPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgaWQ9XCJjYXNlLXN0dWRpZXNcIlxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5DYXNlIHN0dWRpZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEV4YW1wbGVzIG9mIHRoZSBpbXBhY3QgSSBoYXZlIG1hZGVcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZGllcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPENhc2VDYXJkXG4gICAgICAgICAgICAgICAgICBjYXNlU3R1ZHk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e2l0ZW0uaWQgPT09IFwiZGl2YXJcIn1cbiAgICAgICAgICAgICAgICAgIG9uT3BlblJlY2FwPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezZ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+T3RoZXIgRXhjaXRpbmcgRXhwZXJpZW5jZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQWxvbmdzaWRlIG15IHByb2Zlc3Npb25hbCBqb3VybmV5XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2V4cGVyaWVuY2UudGl0bGV9PlxuICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZXhwZXJpZW5jZS5pbWFnZS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17ZXhwZXJpZW5jZS5pbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57ZXhwZXJpZW5jZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5saW5rICYmIChcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB0OiAwLCBwYjogMywgcHg6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtleHBlcmllbmNlLmxpbmsuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5saW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzQsODQsMjU1LDAuMDUpLCB0cmFuc3BhcmVudCA3MCUpXCJcbiAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDgsODYsMTc2LDAuMTgpLCByZ2JhKDQsNywxNSwwKSlcIixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJmb290ZXJcIlxuICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS5iYXNlLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHB0OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHBiOiB7IHhzOiAzLjUsIG1kOiAzLjUgfSxcbiAgICAgICAgICAgICAgICBcIiY6bGFzdC1jaGlsZFwiOiB7IHBiOiB7IHhzOiAzLjUsIG1kOiAzLjUgfSB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgIExldOKAmXMgY29ubmVjdFxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgIFNoYXJlIHlvdXIgY2hhbGxlbmdlIG9yIHNheSBoZWxsb+KAlGhhcHB5IHRvIGV4cGxvcmUgcHJvZHVjdCBkZXNpZ24gY29sbGFib3JhdGlvbnMuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtdDogMyB9fSAvPlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkQWN0aW9uc1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHBiOiB7IHhzOiA1LCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIHB0OiAwLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gICAgICAgICAgICAgICAgZ2FwOiAxLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD1cImFcIiBocmVmPVwibWFpbHRvOnNkYXJpbWFzaWhAZ21haWwuY29tXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIHNkYXJpbWFzaWhAZ21haWwuY29tXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fSBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtCb29sZWFuKHNlbGVjdGVkQ2FzZVN0dWR5RGF0YSl9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KG51bGwpfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCJcbiAgICAgID5cbiAgICAgICAge3NlbGVjdGVkQ2FzZVN0dWR5RGF0YSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIj5cbiAgICAgICAgICAgICAge3NlbGVjdGVkQ2FzZVN0dWR5RGF0YS5yZWNhcC5oZWFkbGluZX1cbiAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MS41fSBzeD17eyBwbDogMiB9fT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhLnJlY2FwLmJ1bGxldHMubWFwKChidWxsZXQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtidWxsZXR9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YnVsbGV0fVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gbXQ9ezN9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIHRvPXtzZWxlY3RlZENhc2VTdHVkeURhdGEudG99XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRGVlcCBkaXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbiIsCiAgICAiLy8gRmlsZTogc3JjL2RhdGEvaG9tZS50c1xuLy8gUHVycG9zZTogQ29udGFpbnMgaG9tZSBwYWdlIGhlcm8gY29weSwgbWV0cmljcywgY2FzZSBzdHVkeSBzdW1tYXJpZXMsIGFuZCBzb2NpYWwgbGluayBkYXRhIGNvbnN1bWVkIGJ5IFVJIGNvbXBvbmVudHMuXG5pbXBvcnQgaGVyb1BvcnRyYWl0QXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1zYWRyaS1wcm9maWxlLndlYnBcIjtcbmltcG9ydCBtb3JwaERlc2lnblN5c3RlbUFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbW9ycGgtZGVzaWduLXN5c3RlbS53ZWJwXCI7XG5pbXBvcnQgcmFobmVtYVN0dWRlbnRzQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYWhuZW1hLXN0dWRlbnRzLndlYnBcIjtcblxuY29uc3QgcmVzb2x2ZUFzc2V0ID0gKGFzc2V0OiBzdHJpbmcpID0+IG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZjtcbnR5cGUgSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgY3JlZGVudGlhbHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIGF2YWlsYWJpbGl0eToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgcG9ydHJhaXQ6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgTWV0cmljU3VtbWFyeSA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgQ2FzZVN0dWR5UmVjYXAgPSB7XG4gIGhlYWRsaW5lOiBzdHJpbmc7XG4gIGJ1bGxldHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xufTtcblxudHlwZSBDYXNlU3R1ZHlTdW1tYXJ5ID0ge1xuICBpZDogXCJkaXZhclwiIHwgXCJzZXRhcmUtYXZhbFwiO1xuICBudW1iZXI6IHN0cmluZztcbiAgdGFnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIHBsYXRmb3JtRGV0YWlsPzogc3RyaW5nO1xuICBzdGF0Pzogc3RyaW5nO1xuICB0YWdzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgdG86IHN0cmluZztcbiAgcmVjYXA6IENhc2VTdHVkeVJlY2FwO1xufTtcblxudHlwZSBFeHBlcmllbmNlU3VtbWFyeSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdGFnczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGltYWdlOiB7XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgYWx0OiBzdHJpbmc7XG4gIH07XG4gIGxpbms/OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBocmVmOiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIFNvY2lhbExpbmsgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBoZXJvOiBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IFwiSGVsbG8g8J+Ri/Cfj7wsIEkgYW1cIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICB0aXRsZTogXCJhbiBpbXBhY3Qtb3JpZW50ZWQgUHJvZHVjdCBEZXNpZ25lclwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIndpdGggNisgeWVhcnMgb2YgZXhwZXJpZW5jZSwgZW5oYW5jaW5nIGV4cGVyaWVuY2VzIGZvciA0MCBtaWxsaW9uIGFjdGl2ZSB1c2Vyc1wiLFxuICBjcmVkZW50aWFsczogW1xuICAgIFwiQ2VydGlmaWVkIGluIFVYIERlc2lnbiBieSB0aGUgVW5pdmVyc2l0eSBvZiBUZWhyYW4gYW5kIFNoYXJpZiBVbml2ZXJzaXR5XCIsXG4gICAgXCJNZW50b3JlZCAyMDArIHN0dWRlbnRzIGFzIGEgZGVzaWduIGluc3RydWN0b3Igb3ZlciB0aGUgcGFzdCAzIHllYXJzLlwiLFxuICBdLFxuICBjdGFQcmltYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyBjYXNlIHN0dWRpZXNcIixcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gIH0sXG4gIGN0YVNlY29uZGFyeToge1xuICAgIGxhYmVsOiBcIlZpZXcgcmVzdW1lXCIsXG4gICAgdG86IFwiL3Jlc3VtZVwiLFxuICB9LFxuICBhdmFpbGFiaWxpdHk6IHtcbiAgICBsYWJlbDogXCJPcGVuIHRvIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHJvbGVzXCIsXG4gICAgdG86IFwiL2NvbnRhY3RcIixcbiAgfSxcbiAgcG9ydHJhaXQ6IHtcbiAgICBzcmM6IHJlc29sdmVBc3NldChoZXJvUG9ydHJhaXRBc3NldCksXG4gICAgYWx0OiBcIk1hc2loIFNhZHJpIC0gUHJvZHVjdCBEZXNpZ25lclwiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3MgPSBbXG4gIHtcbiAgICB2YWx1ZTogXCI2MCVcIixcbiAgICB0aXRsZTogXCJSZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ28tbGVkIERpdmFy4oCZcyBzZWN1cmUgY2FsbCBzeXN0ZW0gd2l0aCBUcnVzdCAmIFNhZmV0eSB0byBzYWZlZ3VhcmQgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjguM0srXCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCB0ZWFtcyB1c2luZyBNb3JwaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBhbiBvcGVuIGRlc2lnbiBzeXN0ZW0gdGhhdCBwb3dlcnMgRmlnbWEgaGFuZG9mZnMgYW5kIGFjY2VsZXJhdGVzIGhpZ2gtcXVhbGl0eSByZWxlYXNlcy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjIwMCtcIixcbiAgICB0aXRsZTogXCJEZXNpZ25lcnMgbWVudG9yZWRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGVzaWduZWQgcHJvamVjdC1iYXNlZCBwcm9ncmFtcyBhdCBSYWhuZW1hIENvbGxlZ2UgdG8gaGVscCBlbWVyZ2luZyBkZXNpZ25lcnMgbGF1bmNoIGNhcmVlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4MCVcIixcbiAgICB0aXRsZTogXCJMaWZ0IGluIHF1YWxpZmllZCBsZWFkc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWRlc2lnbmVkIFBlcnNvbOKAmXMgc2lnbi11cCBmdW5uZWwgZW5kLXRvLWVuZCwgcmVtb3ZpbmcgZnJpY3Rpb24gYW5kIGJvb3N0aW5nIGxlYWQgZ2VuZXJhdGlvbiBpbiAzIG1vbnRocy5cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8TWV0cmljU3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBjYXNlU3R1ZGllcyA9IFtcbiAge1xuICAgIGlkOiBcImRpdmFyXCIsXG4gICAgbnVtYmVyOiBcIjAxXCIsXG4gICAgdGFnOiBcIkltcHJvdmluZyBVc2VyIFNhZmV0eVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTdG9yeSBvZiBSZWR1Y2luZyBIYXJhc3NtZW50IGJ5IDYwJVwiLFxuICAgIHBsYXRmb3JtOiBcIm9uIERpdmFyXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiQ2xhc3NpZmllZCBBZHMgUGxhdGZvcm1cIixcbiAgICBzdGF0OiBcIkEgZmVhdHVyZSB1c2VkIGJ5IDIuMSBtaWxsaW9uIHVzZXJzIHBlciB3ZWVrXCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwidHJ1c3QgJiBzYWZldHlcIiwgXCJpbXBhY3QgYXQgc2NhbGVcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTpcbiAgICAgICAgXCJIb3cgY3Jvc3MtZnVuY3Rpb25hbCBndWFyZHJhaWxzIGhlbHBlZCBEaXZhciByZWR1Y2UgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiQ28tbGVkIGEgdGFzayBmb3JjZSBicmlkZ2luZyBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIGFuZCBFbmdpbmVlcmluZy5cIixcbiAgICAgICAgXCJTaGlwcGVkIGR5bmFtaWMgdm9pY2UtbWFza2luZyB3aXRoIGFidXNlIGRldGVjdGlvbiBmb3IgMi4xTSB3ZWVrbHkgY2FsbGVycy5cIixcbiAgICAgICAgXCJTdG9vZCB1cCBwbGF5Ym9va3MgZm9yIG1vZGVyYXRpb24gb3BzIHRvIG1vbml0b3IgcmVwZWF0IG9mZmVuZGVycy5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNldGFyZS1hdmFsXCIsXG4gICAgbnVtYmVyOiBcIjAyXCIsXG4gICAgdGFnOiBcIkJvb3N0aW5nIFVzZXIgRW5nYWdlbWVudFwiLFxuICAgIHRpdGxlOiBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnNcIixcbiAgICBwbGF0Zm9ybTogXCJhdCBTZXRhcmUgQXZhbCBDby5cIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJSZXRlbnRpb24gc3RyYXRlZ3lcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJyZXRlbnRpb24gc3RyYXRlZ3lcIiwgXCJjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXBcIl0sXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9zZXRhcmUtYXZhbC1lbmdhZ2VtZW50XCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOlxuICAgICAgICBcIkhvdyB3ZSByZS1hcmNoaXRlY3RlZCBTZXRhcmUgQXZhbCdzIG9uYm9hcmRpbmcgdG8gZG91YmxlIHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJNYXBwZWQgYSBuZXcgbGlmZWN5Y2xlIG1vZGVsIHRpZWQgdG8gZGF0YS1iYWNrZWQgZXhwZXJpbWVudGF0aW9uLlwiLFxuICAgICAgICBcIlJlZmluZWQgYWN0aXZhdGlvbiBmbG93cyB0byBzcG90bGlnaHQgdmFsdWUgcHJvcHMgd2l0aGluIGZpcnN0IHNlc3Npb24uXCIsXG4gICAgICAgIFwiQ28tY3JlYXRlZCBhIGxlYXJuaW5nIGFnZW5kYSB0byBtZWFzdXJlIGxveWFsdHkgcHJvZ3JhbSB0cmFjdGlvbi5cIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8Q2FzZVN0dWR5U3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBJbnN0cnVjdG9yIGF0IFJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYWluaW5nIDIwMCsgc3R1ZGVudHMgdGhyb3VnaCA2IGNvdXJzZXMgc2luY2UgMjAyMlwiLFxuICAgIHRhZ3M6IFtcImVkdWNhdGlvblwiLCBcIm1lbnRvcnNoaXBcIiwgXCJjdXJyaWN1bHVtIGRlc2lnblwiXSxcbiAgICBpbWFnZToge1xuICAgICAgc3JjOiByZXNvbHZlQXNzZXQocmFobmVtYVN0dWRlbnRzQXNzZXQpLFxuICAgICAgYWx0OiBcIlN0dWRlbnRzIGF0IFJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGZyb20gc2NyYXRjaCwgdXNlZCBvdmVyIDc0MDAgdGltZXMgaW4gdGhlIEZpZ21hIENvbW11bml0eVwiLFxuICAgIHRhZ3M6IFtcIm9wZW4gc291cmNlXCIsIFwiZGVzaWduIHN5c3RlbVwiLCBcImNvbW11bml0eSBpbXBhY3RcIl0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHNyYzogcmVzb2x2ZUFzc2V0KG1vcnBoRGVzaWduU3lzdGVtQXNzZXQpLFxuICAgICAgYWx0OiBcIk1vcnBoIERlc2lnbiBTeXN0ZW0gLSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIGxhYmVsOiBcIlZpZXcgb24gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDY5MjU5MzMzNDY3MDgzMTgyXCIsXG4gICAgfSxcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8RXhwZXJpZW5jZVN1bW1hcnk+O1xuXG5leHBvcnQgY29uc3Qgc29jaWFsTGlua3MgPSBbXG4gIHtcbiAgICBsYWJlbDogXCJMaW5rZWRJblwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkZpZ21hXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5maWdtYS5jb20vQG1hc2loXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJQb3J0Zm9saW9cIixcbiAgICBocmVmOiBcImh0dHBzOi8vbWFzaWguZnJhbWVyLndlYnNpdGUvXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PFNvY2lhbExpbms+O1xuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xMC44IDE1LjkgNC42Ny0zLjVjLjI3LS4yLjI3LS42IDAtLjhMMTAuOCA4LjFjLS4zMy0uMjUtLjgtLjAxLS44LjR2N2MwIC40MS40Ny42NS44LjRNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJpbWFyeUJ1dHRvbiA9IGZvcndhcmRSZWY8YW55LCBCdXR0b25Qcm9wczxhbnk+PihmdW5jdGlvbiBQcmltYXJ5QnV0dG9uKFxuICB7IHZhcmlhbnQ6IF92YXJpYW50LCAuLi5wcm9wcyB9LFxuICByZWYsXG4pIHtcbiAgcmV0dXJuIDxCdXR0b24gcmVmPXtyZWZ9IHZhcmlhbnQ9XCJjb250YWluZWRcIiB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlCdXR0b247XG5cblxuIiwKICAgICJpbXBvcnQgQXJyb3dGb3J3YXJkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkUm91bmRlZFwiO1xuaW1wb3J0IFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkXCI7XG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IGNhc2VTdHVkaWVzIH0gZnJvbSBcIi4uLy4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IEdob3N0QnV0dG9uIGZyb20gXCIuL0dob3N0QnV0dG9uXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi9QaWxsXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi9QcmltYXJ5QnV0dG9uXCI7XG5cbmV4cG9ydCB0eXBlIENhc2VTdHVkeVN1bW1hcnkgPSAodHlwZW9mIGNhc2VTdHVkaWVzKVtudW1iZXJdO1xuXG50eXBlIENhc2VDYXJkUHJvcHMgPSB7XG4gIGNhc2VTdHVkeTogQ2FzZVN0dWR5U3VtbWFyeTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgb25PcGVuUmVjYXA/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG59O1xuXG5jb25zdCBDYXNlQ2FyZCA9ICh7IGNhc2VTdHVkeSwgYWN0aXZlID0gZmFsc2UsIG9uT3BlblJlY2FwIH06IENhc2VDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHBhbGV0dGUsIHRva2VucyB9ID0gdGhlbWU7XG4gIGNvbnN0IGlzRGFyayA9IHBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCI7XG5cbiAgY29uc3QgYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIwLCA0NSwgMTEwLCAwLjk4KSwgcmdiYSg1OCwgMTE4LCAyMjYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTcsIDc2LCAxNzAsIDAuODgpLCByZ2JhKDYwLCAxNTEsIDI1NSwgMC44MikpXCI7XG5cbiAgY29uc3QgaW5hY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjAsIDI4LCA1MiwgMC44MiksIHJnYmEoMTIsIDE4LCAzNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjk0KSwgcmdiYSgyMzIsIDI0MiwgMjU1LCAwLjg4KSlcIjtcblxuICBjb25zdCBoZWFkaW5nQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIyNiwgMjM0LCAyNTUsIDAuOTUpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnByaW1hcnk7XG5cbiAgY29uc3QgYm9keUNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMTAsIDIyMCwgMjU1LCAwLjgyKVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMjgpXCJcbiAgICAgIDogXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjEyKVwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZSA/IGFjdGl2ZUJhY2tncm91bmQgOiBpbmFjdGl2ZUJhY2tncm91bmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2JvcmRlckNvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBhY3RpdmUgPyBwYWxldHRlLmNvbW1vbi53aGl0ZSA6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IHRva2Vucy5zaGFkb3cubGV2ZWwzIDogdG9rZW5zLnNoYWRvdy5sZXZlbDIsXG4gICAgICAgIHRyYW5zaXRpb246IHRva2Vucy50cmFuc2l0aW9uLmhvdmVyLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC02cHgpXCIsXG4gICAgICAgICAgYm94U2hhZG93OiB0b2tlbnMuc2hhZG93LmxldmVsMyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYjogMyB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleWVicm93XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxODksIDIwNCwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhc2Uge2Nhc2VTdHVkeS5udW1iZXJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBsYWJlbD17Y2FzZVN0dWR5LnRhZ31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjI3LCAyNDEsIDI1NSwgMC44NSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMTQsIDIyNCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBhY3RpdmUgPyBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCIgc3g9e3sgY29sb3I6IGhlYWRpbmdDb2xvciB9fT5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtfVxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1sOiAwLjc1LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWx9KVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAge2Nhc2VTdHVkeS5zdGF0ICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBib2R5Q29sb3IgfX0+XG4gICAgICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAsIGdhcDogMSB9fT5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcImluaGVyaXRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2FwfVxuICAgICAgICAgIGVuZEljb249ezxQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZlID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE0KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUmVjYXBcbiAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIEltcGFjdFN0YXRDYXJkUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBJbXBhY3RTdGF0Q2FyZCA9ICh7IHZhbHVlLCBsYWJlbCwgZGVzY3JpcHRpb24gfTogSW1wYWN0U3RhdENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGNvbXBvbmVudD1cImFydGljbGVcIlxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgIH0pfVxuICA+XG4gICAgPENhcmRDb250ZW50IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEgfX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgIHt2YWx1ZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImg2XCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQ2FyZENvbnRlbnQ+XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcGFjdFN0YXRDYXJkO1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSEE7QUFJQSxJQUFlLDREQUEyQix1QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxxQkFBcUI7OztBQ2V6Qjs7Ozs7Ozs7Ozs7O0FDZkEsSUFBTSxlQUFlLENBQUMsVUFBa0IsSUFBSSxJQUFJLE9BQU8sWUFBWSxHQUFHLEVBQUU7QUFvRWpFLElBQU0sT0FBb0I7QUFBQSxFQUMvQixVQUFVO0FBQUEsRUFDVixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxVQUNFO0FBQUEsRUFDRixhQUFhO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxF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
