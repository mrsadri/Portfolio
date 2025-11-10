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

// src/images/certified-badge.png
var certified_badge_default = "./certified-badge-p1bwqvk4.png";

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
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                      component: "img",
                      src: certified_badge_default,
                      alt: "Certified badge",
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

//# debugId=7CB32EE1194F9FD064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vc3JjL3JvdXRlcy9Ib21lUGFnZS50c3giLCAiLi4vc3JjL2RhdGEvaG9tZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL1ByaW1hcnlCdXR0b24udHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL0Nhc2VDYXJkLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL0hvbWVQYWdlLnRzeFxuLy8gUHVycG9zZTogUmVuZGVycyB0aGUgbGFuZGluZyBleHBlcmllbmNlIGluY2x1ZGluZyBoZXJvLCBtZXRyaWNzLCBjYXNlIHN0dWRpZXMsIGV4cGVyaWVuY2VzLCBhbmQgY29udGFjdCBjYWxsLXRvLWFjdGlvbi5cbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWRpZXMsXG4gIGV4cGVyaWVuY2VzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICBzb2NpYWxMaW5rcyxcbn0gZnJvbSBcIi4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IENhc2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Nhc2VDYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCBJbXBhY3RTdGF0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUHJpbWFyeUJ1dHRvblwiO1xuaW1wb3J0IGNlcnRpZmllZEJhZGdlIGZyb20gXCIuLi9pbWFnZXMvY2VydGlmaWVkLWJhZGdlLnBuZ1wiO1xuXG50eXBlIENhc2VTdHVkeUlkID0gKHR5cGVvZiBjYXNlU3R1ZGllcylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHksIHNldFNlbGVjdGVkQ2FzZVN0dWR5XSA9XG4gICAgdXNlU3RhdGU8Q2FzZVN0dWR5SWQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzaXRlVXJsID1cbiAgICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgICBcImh0dHBzOi8vbXJzYWRyaS5naXRodWIuaW8vUG9ydGZvbGlvXCI7XG5cbiAgY29uc3QgcHJpbWFyeUhlcm9NZXRyaWMgPSBtZXRyaWNzWzBdO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0gW1xuICAgIHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIixcbiAgICAgICAgdGFyZ2V0OiBgJHtzaXRlVXJsfS8/cT17c2VhcmNoX3Rlcm1fc3RyaW5nfWAsXG4gICAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgICBkZXNjcmlwdGlvbjogaGVyby5zdWJ0aXRsZSxcbiAgICAgIHVybDogc2l0ZVVybCxcbiAgICAgIGltYWdlOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgIHNhbWVBczogc29jaWFsTGlua3MubWFwKChsaW5rKSA9PiBsaW5rLmhyZWYpLFxuICAgIH0sXG4gIF0gYXMgY29uc3Q7XG5cbiAgY29uc3Qgc2VsZWN0ZWRDYXNlU3R1ZHlEYXRhID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZGllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZENhc2VTdHVkeSkgPz8gbnVsbCxcbiAgICBbc2VsZWN0ZWRDYXNlU3R1ZHldLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgdGl0bGU9XCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlBvcnRmb2xpbyBvZiBNYXNpaCBTYWRyaSwgYW4gaW1wYWN0LW9yaWVudGVkIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHByb3RlY3RpbmcgbWlsbGlvbnMgb2YgdXNlcnMgdGhyb3VnaCB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBhbmQgZGVzaWduIHN5c3RlbXMuXCJcbiAgICAgICAgY2Fub25pY2FsUGF0aD1cIi9cIlxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdXJsOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgICAgICAgIGFsdDogaGVyby5wb3J0cmFpdC5hbHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3RydWN0dXJlZERhdGE9e3N0cnVjdHVyZWREYXRhfVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA5IH0sXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAxNSUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4xMiksIHRyYW5zcGFyZW50IDU4JSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSgzNCwgODQsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQgNTIlKVwiXG4gICAgICAgICAgICAgIDogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAxNSUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjE4KSwgdHJhbnNwYXJlbnQgNjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3OCUgMTglLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE4KSwgdHJhbnNwYXJlbnQgNTUlKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiAzLjUgfX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcInN0cmV0Y2hcIiB9LFxuICAgICAgICAgICAgICBweDogeyB4czogMCwgbWQ6IDIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzMjAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDE4cHggNDBweCByZ2JhKDE3LCAzNiwgODMsIDAuMTgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTI0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgMzYsIDgzLCAwLjg2KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg1LCAxMiwgMjQsIDAuODgpXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImNvbW1vbi53aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgICAgcHg6IDIuMjUsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAwLjc1LFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxMnB4IDI0cHggcmdiYSgxMiwgMjgsIDc1LCAwLjM1KVwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJhdmFpbGFiaWxpdHlQdWxzZSAxLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJAa2V5ZnJhbWVzIGF2YWlsYWJpbGl0eVB1bHNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMCUsIDEwMCVcIjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjUwJVwiOiB7IG9wYWNpdHk6IDAuMiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBzeD17eyBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuNCwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBdmFpbGFibGUgZm9yIHNlbmlvciByb2xlc1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17Y2VydGlmaWVkQmFkZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDZXJ0aWZpZWQgYmFkZ2VcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB7IHhzOiAtMTgsIG1kOiAtMjYgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogeyB4czogLTE4LCBtZDogLTI2IH0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAxMjAsIG1kOiAxNjAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiAxMjAsIG1kOiAxNjAgfSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMi4yNSwgbWQ6IDIuNzUgfX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgbWQ6IFwiNzAlXCIgfSxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogeyBtZDogXCI3MCVcIiB9LFxuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjQsIG1kOiAxLjggfX0gc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMSwgc206IDEuNSB9fVxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17eyB4czogXCJjZW50ZXJcIiwgc206IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2hlcm8uZ3JlZXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4zLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGlzcGxheVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjA1LFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAxNWVtXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogeyB4czogXCIwLjAxZW1cIiwgbWQ6IFwiMC4wMDVlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiBcIjc4JVwiIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxLjA1cmVtXCIsIG1kOiBcIjEuMTJyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42NSwgbWQ6IDEuNyB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVyby5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS4xfT5cbiAgICAgICAgICAgICAgICB7aGVyby5jcmVkZW50aWFscy5tYXAoKGxpbmUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGtleT17bGluZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCBsaW5lSGVpZ2h0OiAxLjY1IH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5lfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAxLjQsIHNtOiAxLjggfX1cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgc3g9e3sgcHQ6IHsgeHM6IDAuNSwgbWQ6IDAuNzUgfSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIHRvPXtoZXJvLmN0YVByaW1hcnkudG99XG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgc3g9e3sgbWluV2lkdGg6IHsgc206IDIyMCB9IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2hlcm8uY3RhUHJpbWFyeS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICB0bz17aGVyby5jdGFTZWNvbmRhcnkudG99XG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICAgIHB4OiAzLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aGVyby5jdGFTZWNvbmRhcnkubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtoZXJvLmF2YWlsYWJpbGl0eS50b31cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiB7IHhzOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgbXQ6IHsgeHM6IDAuNSwgbWQ6IDAuNzUgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlcm8uYXZhaWxhYmlsaXR5LmxhYmVsfVxuICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSwgcHQ6IHsgbWQ6IDYgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMywgbWQ6IDMuNSB9fT5cbiAgICAgICAgICAgIHttZXRyaWNzLm1hcCgoeyB2YWx1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiA2LCBtZDogMyB9fSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICA8SW1wYWN0U3RhdENhcmQgdmFsdWU9e3ZhbHVlfSBsYWJlbD17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGlkPVwiY2FzZS1zdHVkaWVzXCJcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSwgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIiB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezZ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+Q2FzZSBzdHVkaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBFeGFtcGxlcyBvZiB0aGUgaW1wYWN0IEkgaGF2ZSBtYWRlXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgICB7Y2FzZVN0dWRpZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxDYXNlQ2FyZFxuICAgICAgICAgICAgICAgICAgY2FzZVN0dWR5PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpdGVtLmlkID09PSBcImRpdmFyXCJ9XG4gICAgICAgICAgICAgICAgICBvbk9wZW5SZWNhcD17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk90aGVyIEV4Y2l0aW5nIEV4cGVyaWVuY2U8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEFsb25nc2lkZSBteSBwcm9mZXNzaW9uYWwgam91cm5leVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAge2V4cGVyaWVuY2VzLm1hcCgoZXhwZXJpZW5jZSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtleHBlcmllbmNlLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2V4cGVyaWVuY2UuaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2V4cGVyaWVuY2UuaW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0MCxcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2V4cGVyaWVuY2UudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UubGluayAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBwdDogMCwgcGI6IDMsIHB4OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZXhwZXJpZW5jZS5saW5rLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UubGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDM0LDg0LDI1NSwwLjA1KSwgdHJhbnNwYXJlbnQgNzAlKVwiXG4gICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDQ4LDg2LDE3NiwwLjE4KSwgcmdiYSg0LDcsMTUsMCkpXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgY29tcG9uZW50PVwiZm9vdGVyXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnN1cmZhY2UuYmFzZSxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBweDogeyB4czogNSwgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgICBwdDogeyB4czogNSwgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgICBwYjogeyB4czogMy41LCBtZDogMy41IH0sXG4gICAgICAgICAgICAgICAgXCImOmxhc3QtY2hpbGRcIjogeyBwYjogeyB4czogMy41LCBtZDogMy41IH0gfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNzV9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgICAgICAgICBMZXTigJlzIGNvbm5lY3RcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICBTaGFyZSB5b3VyIGNoYWxsZW5nZSBvciBzYXkgaGVsbG/igJRoYXBweSB0byBleHBsb3JlIHByb2R1Y3QgZGVzaWduIGNvbGxhYm9yYXRpb25zLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IDMgfX0gLz5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnNcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBweDogeyB4czogNSwgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgICBwYjogeyB4czogNSwgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgICBwdDogMCxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLFxuICAgICAgICAgICAgICAgIGdhcDogMSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9XCJhXCIgaHJlZj1cIm1haWx0bzpzZGFyaW1hc2loQGdtYWlsLmNvbVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBzZGFyaW1hc2loQGdtYWlsLmNvbVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX0gc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAge3NvY2lhbExpbmtzLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17Qm9vbGVhbihzZWxlY3RlZENhc2VTdHVkeURhdGEpfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiXG4gICAgICA+XG4gICAgICAgIHtzZWxlY3RlZENhc2VTdHVkeURhdGEgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjYXNlLXN0dWR5LXJlY2FwLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZENhc2VTdHVkeURhdGEucmVjYXAuaGVhZGxpbmV9XG4gICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezEuNX0gc3g9e3sgcGw6IDIgfX0+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ2FzZVN0dWR5RGF0YS5yZWNhcC5idWxsZXRzLm1hcCgoYnVsbGV0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17YnVsbGV0fVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2J1bGxldH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IG10PXszfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICB0bz17c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhLnRvfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KG51bGwpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERlZXAgZGl2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KG51bGwpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0RpYWxvZz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuXG4iLAogICAgIi8vIEZpbGU6IHNyYy9kYXRhL2hvbWUudHNcbi8vIFB1cnBvc2U6IENvbnRhaW5zIGhvbWUgcGFnZSBoZXJvIGNvcHksIG1ldHJpY3MsIGNhc2Ugc3R1ZHkgc3VtbWFyaWVzLCBhbmQgc29jaWFsIGxpbmsgZGF0YSBjb25zdW1lZCBieSBVSSBjb21wb25lbnRzLlxuaW1wb3J0IGhlcm9Qb3J0cmFpdEFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtc2FkcmktcHJvZmlsZS53ZWJwXCI7XG5pbXBvcnQgbW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21vcnBoLWRlc2lnbi1zeXN0ZW0ud2VicFwiO1xuaW1wb3J0IHJhaG5lbWFTdHVkZW50c0Fzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvcmFobmVtYS1zdHVkZW50cy53ZWJwXCI7XG5cbmNvbnN0IHJlc29sdmVBc3NldCA9IChhc3NldDogc3RyaW5nKSA9PiBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWY7XG50eXBlIEhlcm9Db250ZW50ID0ge1xuICBncmVldGluZzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgY3RhUHJpbWFyeToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xuICBhdmFpbGFiaWxpdHk6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIHBvcnRyYWl0OiB7XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgYWx0OiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIE1ldHJpY1N1bW1hcnkgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIENhc2VTdHVkeVJlY2FwID0ge1xuICBoZWFkbGluZTogc3RyaW5nO1xuICBidWxsZXRzOiByZWFkb25seSBzdHJpbmdbXTtcbn07XG5cbnR5cGUgQ2FzZVN0dWR5U3VtbWFyeSA9IHtcbiAgaWQ6IFwiZGl2YXJcIiB8IFwic2V0YXJlLWF2YWxcIjtcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHRhZzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICBwbGF0Zm9ybURldGFpbD86IHN0cmluZztcbiAgc3RhdD86IHN0cmluZztcbiAgdGFnczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHRvOiBzdHJpbmc7XG4gIHJlY2FwOiBDYXNlU3R1ZHlSZWNhcDtcbn07XG5cbnR5cGUgRXhwZXJpZW5jZVN1bW1hcnkgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHRhZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBpbWFnZToge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICB9O1xuICBsaW5rPzoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaHJlZjogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBTb2NpYWxMaW5rID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgaGVybzogSGVyb0NvbnRlbnQgPSB7XG4gIGdyZWV0aW5nOiBcIkhlbGxvIPCfkYvwn4+8LCBJIGFtXCIsXG4gIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgdGl0bGU6IFwiYW4gaW1wYWN0LW9yaWVudGVkIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgc3VidGl0bGU6XG4gICAgXCJ3aXRoIDYrIHllYXJzIG9mIGV4cGVyaWVuY2UsIGVuaGFuY2luZyBleHBlcmllbmNlcyBmb3IgNDAgbWlsbGlvbiBhY3RpdmUgdXNlcnNcIixcbiAgY3JlZGVudGlhbHM6IFtcbiAgICBcIkNlcnRpZmllZCBpbiBVWCBEZXNpZ24gYnkgdGhlIFVuaXZlcnNpdHkgb2YgVGVocmFuIGFuZCBTaGFyaWYgVW5pdmVyc2l0eVwiLFxuICAgIFwiTWVudG9yZWQgMjAwKyBzdHVkZW50cyBhcyBhIGRlc2lnbiBpbnN0cnVjdG9yIG92ZXIgdGhlIHBhc3QgMyB5ZWFycy5cIixcbiAgXSxcbiAgY3RhUHJpbWFyeToge1xuICAgIGxhYmVsOiBcIlZpZXcgY2FzZSBzdHVkaWVzXCIsXG4gICAgdG86IFwiL2Nhc2Utc3R1ZGllcy9kaXZhci1zZWN1cmUtY2FsbFwiLFxuICB9LFxuICBjdGFTZWNvbmRhcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IHJlc3VtZVwiLFxuICAgIHRvOiBcIi9yZXN1bWVcIixcbiAgfSxcbiAgYXZhaWxhYmlsaXR5OiB7XG4gICAgbGFiZWw6IFwiT3BlbiB0byBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciByb2xlc1wiLFxuICAgIHRvOiBcIi9jb250YWN0XCIsXG4gIH0sXG4gIHBvcnRyYWl0OiB7XG4gICAgc3JjOiByZXNvbHZlQXNzZXQoaGVyb1BvcnRyYWl0QXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBTYWRyaSAtIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzID0gW1xuICB7XG4gICAgdmFsdWU6IFwiNjAlXCIsXG4gICAgdGl0bGU6IFwiUmVkdWN0aW9uIGluIGhhcmFzc21lbnQgaW5jaWRlbnRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvLWxlZCBEaXZhcuKAmXMgc2VjdXJlIGNhbGwgc3lzdGVtIHdpdGggVHJ1c3QgJiBTYWZldHkgdG8gc2FmZWd1YXJkIDIuMU0gd2Vla2x5IGNhbGxlcnMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI4LjNLK1wiLFxuICAgIHRpdGxlOiBcIlByb2R1Y3QgdGVhbXMgdXNpbmcgTW9ycGhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgYW4gb3BlbiBkZXNpZ24gc3lzdGVtIHRoYXQgcG93ZXJzIEZpZ21hIGhhbmRvZmZzIGFuZCBhY2NlbGVyYXRlcyBoaWdoLXF1YWxpdHkgcmVsZWFzZXMuXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCIyMDArXCIsXG4gICAgdGl0bGU6IFwiRGVzaWduZXJzIG1lbnRvcmVkXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRlc2lnbmVkIHByb2plY3QtYmFzZWQgcHJvZ3JhbXMgYXQgUmFobmVtYSBDb2xsZWdlIHRvIGhlbHAgZW1lcmdpbmcgZGVzaWduZXJzIGxhdW5jaCBjYXJlZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiODAlXCIsXG4gICAgdGl0bGU6IFwiTGlmdCBpbiBxdWFsaWZpZWQgbGVhZHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVkZXNpZ25lZCBQZXJzb2zigJlzIHNpZ24tdXAgZnVubmVsIGVuZC10by1lbmQsIHJlbW92aW5nIGZyaWN0aW9uIGFuZCBib29zdGluZyBsZWFkIGdlbmVyYXRpb24gaW4gMyBtb250aHMuXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PE1ldHJpY1N1bW1hcnk+O1xuXG5leHBvcnQgY29uc3QgY2FzZVN0dWRpZXMgPSBbXG4gIHtcbiAgICBpZDogXCJkaXZhclwiLFxuICAgIG51bWJlcjogXCIwMVwiLFxuICAgIHRhZzogXCJJbXByb3ZpbmcgVXNlciBTYWZldHlcIixcbiAgICB0aXRsZTogXCJUaGUgU3Rvcnkgb2YgUmVkdWNpbmcgSGFyYXNzbWVudCBieSA2MCVcIixcbiAgICBwbGF0Zm9ybTogXCJvbiBEaXZhclwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIkNsYXNzaWZpZWQgQWRzIFBsYXRmb3JtXCIsXG4gICAgc3RhdDogXCJBIGZlYXR1cmUgdXNlZCBieSAyLjEgbWlsbGlvbiB1c2VycyBwZXIgd2Vla1wiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInRydXN0ICYgc2FmZXR5XCIsIFwiaW1wYWN0IGF0IHNjYWxlXCJdLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6XG4gICAgICAgIFwiSG93IGNyb3NzLWZ1bmN0aW9uYWwgZ3VhcmRyYWlscyBoZWxwZWQgRGl2YXIgcmVkdWNlIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIkNvLWxlZCBhIHRhc2sgZm9yY2UgYnJpZGdpbmcgVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBhbmQgRW5naW5lZXJpbmcuXCIsXG4gICAgICAgIFwiU2hpcHBlZCBkeW5hbWljIHZvaWNlLW1hc2tpbmcgd2l0aCBhYnVzZSBkZXRlY3Rpb24gZm9yIDIuMU0gd2Vla2x5IGNhbGxlcnMuXCIsXG4gICAgICAgIFwiU3Rvb2QgdXAgcGxheWJvb2tzIGZvciBtb2RlcmF0aW9uIG9wcyB0byBtb25pdG9yIHJlcGVhdCBvZmZlbmRlcnMuXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzZXRhcmUtYXZhbFwiLFxuICAgIG51bWJlcjogXCIwMlwiLFxuICAgIHRhZzogXCJCb29zdGluZyBVc2VyIEVuZ2FnZW1lbnRcIixcbiAgICB0aXRsZTogXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzXCIsXG4gICAgcGxhdGZvcm06IFwiYXQgU2V0YXJlIEF2YWwgQ28uXCIsXG4gICAgcGxhdGZvcm1EZXRhaWw6IFwiUmV0ZW50aW9uIHN0cmF0ZWd5XCIsXG4gICAgdGFnczogW1wicmVhbCBwcm9qZWN0XCIsIFwicmV0ZW50aW9uIHN0cmF0ZWd5XCIsIFwiY3Jvc3MtZnVuY3Rpb25hbCBsZWFkZXJzaGlwXCJdLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvc2V0YXJlLWF2YWwtZW5nYWdlbWVudFwiLFxuICAgIHJlY2FwOiB7XG4gICAgICBoZWFkbGluZTpcbiAgICAgICAgXCJIb3cgd2UgcmUtYXJjaGl0ZWN0ZWQgU2V0YXJlIEF2YWwncyBvbmJvYXJkaW5nIHRvIGRvdWJsZSByZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgIFwiTWFwcGVkIGEgbmV3IGxpZmVjeWNsZSBtb2RlbCB0aWVkIHRvIGRhdGEtYmFja2VkIGV4cGVyaW1lbnRhdGlvbi5cIixcbiAgICAgICAgXCJSZWZpbmVkIGFjdGl2YXRpb24gZmxvd3MgdG8gc3BvdGxpZ2h0IHZhbHVlIHByb3BzIHdpdGhpbiBmaXJzdCBzZXNzaW9uLlwiLFxuICAgICAgICBcIkNvLWNyZWF0ZWQgYSBsZWFybmluZyBhZ2VuZGEgdG8gbWVhc3VyZSBsb3lhbHR5IHByb2dyYW0gdHJhY3Rpb24uXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PENhc2VTdHVkeVN1bW1hcnk+O1xuXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gSW5zdHJ1Y3RvciBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFpbmluZyAyMDArIHN0dWRlbnRzIHRocm91Z2ggNiBjb3Vyc2VzIHNpbmNlIDIwMjJcIixcbiAgICB0YWdzOiBbXCJlZHVjYXRpb25cIiwgXCJtZW50b3JzaGlwXCIsIFwiY3VycmljdWx1bSBkZXNpZ25cIl0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHNyYzogcmVzb2x2ZUFzc2V0KHJhaG5lbWFTdHVkZW50c0Fzc2V0KSxcbiAgICAgIGFsdDogXCJTdHVkZW50cyBhdCBSYWhuZW1hIENvbGxlZ2VcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW9ycGggRGVzaWduIFN5c3RlbVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBmcm9tIHNjcmF0Y2gsIHVzZWQgb3ZlciA3NDAwIHRpbWVzIGluIHRoZSBGaWdtYSBDb21tdW5pdHlcIixcbiAgICB0YWdzOiBbXCJvcGVuIHNvdXJjZVwiLCBcImRlc2lnbiBzeXN0ZW1cIiwgXCJjb21tdW5pdHkgaW1wYWN0XCJdLFxuICAgIGltYWdlOiB7XG4gICAgICBzcmM6IHJlc29sdmVBc3NldChtb3JwaERlc2lnblN5c3RlbUFzc2V0KSxcbiAgICAgIGFsdDogXCJNb3JwaCBEZXNpZ24gU3lzdGVtIC0gRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBsYWJlbDogXCJWaWV3IG9uIEZpZ21hIENvbW11bml0eVwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3d3dy5maWdtYS5jb20vY29tbXVuaXR5L2ZpbGUvMTA2OTI1OTMzMzQ2NzA4MzE4MlwiLFxuICAgIH0sXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PEV4cGVyaWVuY2VTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbExpbmtzID0gW1xuICB7XG4gICAgbGFiZWw6IFwiTGlua2VkSW5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJGaWdtYVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL0BtYXNpaFwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiUG9ydGZvbGlvXCIsXG4gICAgaHJlZjogXCJodHRwczovL21hc2loLmZyYW1lci53ZWJzaXRlL1wiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxTb2NpYWxMaW5rPjtcblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJtMTAuOCAxNS45IDQuNjctMy41Yy4yNy0uMi4yNy0uNiAwLS44TDEwLjggOC4xYy0uMzMtLjI1LS44LS4wMS0uOC40djdjMCAuNDEuNDcuNjUuOC40TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJtMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhcIlxufSksICdQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvblByb3BzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByaW1hcnlCdXR0b24gPSBmb3J3YXJkUmVmPGFueSwgQnV0dG9uUHJvcHM8YW55Pj4oZnVuY3Rpb24gUHJpbWFyeUJ1dHRvbihcbiAgeyB2YXJpYW50OiBfdmFyaWFudCwgLi4ucHJvcHMgfSxcbiAgcmVmLFxuKSB7XG4gIHJldHVybiA8QnV0dG9uIHJlZj17cmVmfSB2YXJpYW50PVwiY29udGFpbmVkXCIgey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5QnV0dG9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFJvdW5kZWRcIjtcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVPdXRsaW5lUm91bmRlZFwiO1xuaW1wb3J0IHsgQm94LCBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHR5cGUgeyBjYXNlU3R1ZGllcyB9IGZyb20gXCIuLi8uLi9kYXRhL2hvbWVcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi9HaG9zdEJ1dHRvblwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4vUGlsbFwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4vUHJpbWFyeUJ1dHRvblwiO1xuXG5leHBvcnQgdHlwZSBDYXNlU3R1ZHlTdW1tYXJ5ID0gKHR5cGVvZiBjYXNlU3R1ZGllcylbbnVtYmVyXTtcblxudHlwZSBDYXNlQ2FyZFByb3BzID0ge1xuICBjYXNlU3R1ZHk6IENhc2VTdHVkeVN1bW1hcnk7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIG9uT3BlblJlY2FwPzogTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xufTtcblxuY29uc3QgQ2FzZUNhcmQgPSAoeyBjYXNlU3R1ZHksIGFjdGl2ZSA9IGZhbHNlLCBvbk9wZW5SZWNhcCB9OiBDYXNlQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBwYWxldHRlLCB0b2tlbnMgfSA9IHRoZW1lO1xuICBjb25zdCBpc0RhcmsgPSBwYWxldHRlLm1vZGUgPT09IFwiZGFya1wiO1xuXG4gIGNvbnN0IGFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMCwgNDUsIDExMCwgMC45OCksIHJnYmEoNTgsIDExOCwgMjI2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE3LCA3NiwgMTcwLCAwLjg4KSwgcmdiYSg2MCwgMTUxLCAyNTUsIDAuODIpKVwiO1xuXG4gIGNvbnN0IGluYWN0aXZlQmFja2dyb3VuZCA9IGlzRGFya1xuICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIwLCAyOCwgNTIsIDAuODIpLCByZ2JhKDEyLCAxOCwgMzYsIDAuODgpKVwiXG4gICAgOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjQ4LCAyNTEsIDI1NSwgMC45NCksIHJnYmEoMjMyLCAyNDIsIDI1NSwgMC44OCkpXCI7XG5cbiAgY29uc3QgaGVhZGluZ0NvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgyMjYsIDIzNCwgMjU1LCAwLjk1KVwiXG4gICAgICA6IHBhbGV0dGUudGV4dC5wcmltYXJ5O1xuXG4gIGNvbnN0IGJvZHlDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjEwLCAyMjAsIDI1NSwgMC44MilcIlxuICAgICAgOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5O1xuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gYWN0aXZlXG4gICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilcIlxuICAgIDogaXNEYXJrXG4gICAgICA/IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjI4KVwiXG4gICAgICA6IFwicmdiYSgxNywgNzYsIDE3MCwgMC4xMilcIjtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBhY3RpdmUgPyBhY3RpdmVCYWNrZ3JvdW5kIDogaW5hY3RpdmVCYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtib3JkZXJDb2xvcn1gLFxuICAgICAgICBjb2xvcjogYWN0aXZlID8gcGFsZXR0ZS5jb21tb24ud2hpdGUgOiBwYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgYm94U2hhZG93OiBhY3RpdmUgPyB0b2tlbnMuc2hhZG93LmxldmVsMyA6IHRva2Vucy5zaGFkb3cubGV2ZWwyLFxuICAgICAgICB0cmFuc2l0aW9uOiB0b2tlbnMudHJhbnNpdGlvbi5ob3ZlcixcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNnB4KVwiLFxuICAgICAgICAgIGJveFNoYWRvdzogdG9rZW5zLnNoYWRvdy5sZXZlbDMsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGI6IDMgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZXllYnJvd1wiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OClcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTg5LCAyMDQsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYXNlIHtjYXNlU3R1ZHkubnVtYmVyfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgbGFiZWw9e2Nhc2VTdHVkeS50YWd9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjI0KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyNywgMjQxLCAyNTUsIDAuODUpXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjE0LCAyMjQsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICA6IHBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIGJvcmRlcjogYWN0aXZlID8gXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoM1wiIHN4PXt7IGNvbG9yOiBoZWFkaW5nQ29sb3IgfX0+XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUyXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS5wbGF0Zm9ybX1cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm1EZXRhaWwgJiYgKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBtbDogMC43NSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICh7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsfSlcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIHtjYXNlU3R1ZHkuc3RhdCAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBjb2xvcjogYm9keUNvbG9yIH19PlxuICAgICAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwLCBnYXA6IDEgfX0+XG4gICAgICAgIHthY3RpdmUgPyAoXG4gICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89e2Nhc2VTdHVkeS50b31cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBjb2xvcj17YWN0aXZlID8gXCJpbmhlcml0XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZWNhcH1cbiAgICAgICAgICBlbmRJY29uPXs8UGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2ZSA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KVwiXG4gICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNClcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlY2FwXG4gICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxudHlwZSBJbXBhY3RTdGF0Q2FyZFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxuY29uc3QgSW1wYWN0U3RhdENhcmQgPSAoeyB2YWx1ZSwgbGFiZWwsIGRlc2NyaXB0aW9uIH06IEltcGFjdFN0YXRDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBjb21wb25lbnQ9XCJhcnRpY2xlXCJcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxIH19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNlwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0NhcmRDb250ZW50PlxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBhY3RTdGF0Q2FyZDtcblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSw0REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcscUJBQXFCOzs7QUNlekI7Ozs7Ozs7Ozs7OztBQ2ZBLElBQU0sZUFBZSxDQUFDLFVBQWtCLElBQUksSUFBSSxPQUFPLFlBQVksR0FBRyxFQUFFO0FBb0VqRSxJQUFNLE9BQW9CO0FBQUEsRUFDL0IsVUFBVTtBQUFBLEVBQ1YsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFDRTtBQUFBLEVBQ0YsYUFBYTtBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsS0FBSyxhQUFhLDJCQUFpQjtBQUFBLElBQ25DLEtBQUs7QUFBQSxFQUNQO0FBQ0Y7QUFFTyxJQUFNLFVBQVU7QUFBQSxFQUNyQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsT0FB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
