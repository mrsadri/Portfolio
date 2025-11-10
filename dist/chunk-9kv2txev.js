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
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
            sx: {
              position: "relative",
              borderRadius: { xs: 5, md: 6 },
              border: `1px solid ${theme.tokens.colors.border}`,
              overflow: "hidden",
              background: theme.palette.mode === "light" ? "linear-gradient(140deg, rgba(255,255,255,0.88) 0%, rgba(230,237,255,0.65) 100%)" : "linear-gradient(145deg, rgba(18,26,48,0.92) 0%, rgba(30,48,94,0.72) 100%)",
              boxShadow: theme.palette.mode === "light" ? "0 42px 120px -60px rgba(17, 36, 83, 0.65)" : "0 48px 120px -70px rgba(0, 0, 0, 0.8)"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                sx: {
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-40% 55% 30% -20%",
                    background: theme.palette.mode === "light" ? "radial-gradient(circle at center, rgba(66, 127, 255, 0.25) 0%, rgba(66, 127, 255, 0) 55%)" : "radial-gradient(circle at center, rgba(96, 139, 255, 0.35) 0%, rgba(96, 139, 255, 0) 60%)",
                    filter: "blur(40px)"
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: "18% -45% -25% 55%",
                    background: theme.palette.mode === "light" ? "radial-gradient(circle at center, rgba(120, 170, 255, 0.22) 0%, rgba(120, 170, 255, 0) 60%)" : "radial-gradient(circle at center, rgba(53, 104, 214, 0.32) 0%, rgba(53, 104, 214, 0) 65%)",
                    filter: "blur(36px)"
                  }
                }
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                direction: { xs: "column", md: "row" },
                spacing: { xs: 5, md: 6 },
                sx: {
                  position: "relative",
                  zIndex: 1,
                  px: { xs: 3.5, sm: 5, md: 6 },
                  py: { xs: 4.5, md: 6.5 },
                  alignItems: "stretch"
                },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                    spacing: 3,
                    sx: {
                      flexBasis: { md: "44%" },
                      alignItems: { xs: "center", md: "flex-start" },
                      textAlign: { xs: "center", md: "left" },
                      pb: { xs: 4, md: 5 }
                    },
                    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                      sx: {
                        position: "relative",
                        width: "100%",
                        maxWidth: { xs: 280, sm: 320, md: 360 }
                      },
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                          sx: {
                            position: "absolute",
                            inset: "-10%",
                            background: theme.palette.mode === "light" ? "linear-gradient(180deg, rgba(66, 127, 255, 0.2) 0%, rgba(255,255,255,0) 70%)" : "linear-gradient(180deg, rgba(83, 134, 255, 0.28) 0%, rgba(18,26,48,0) 75%)",
                            borderRadius: "46%",
                            filter: "blur(32px)"
                          }
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                          sx: {
                            position: "relative",
                            borderRadius: (theme2) => theme2.tokens.radius.xl,
                            padding: "12px",
                            background: theme.palette.mode === "light" ? "linear-gradient(160deg, rgba(255,255,255,0.45), rgba(235,241,255,0.75))" : "linear-gradient(150deg, rgba(20,28,48,0.9), rgba(46,62,110,0.85))",
                            border: `1px solid ${theme.tokens.colors.border}`,
                            boxShadow: theme.palette.mode === "light" ? "0 24px 60px rgba(17, 36, 83, 0.18)" : "0 28px 70px rgba(0, 0, 0, 0.55)"
                          },
                          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Avatar_default, {
                            src: hero.portrait.src,
                            alt: hero.portrait.alt,
                            variant: "rounded",
                            sx: {
                              width: "100%",
                              height: "100%",
                              borderRadius: (theme2) => theme2.tokens.radius.lg
                            }
                          }, undefined, false, undefined, this)
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
                            px: 2.5,
                            py: 1,
                            boxShadow: "0 12px 24px rgba(12, 28, 75, 0.35)"
                          },
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                              sx: {
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: theme.palette.success.main
                              }
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                              variant: "caption",
                              sx: { fontWeight: 600, letterSpacing: 0.4 },
                              children: "Available for senior roles"
                            }, undefined, false, undefined, this)
                          ]
                        }, undefined, true, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                    spacing: { xs: 3, md: 3.5 },
                    sx: {
                      flex: 1,
                      justifyContent: "center",
                      maxWidth: { md: 620 }
                    },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                        spacing: { xs: 1.5, md: 2 },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                            direction: "row",
                            spacing: 1.5,
                            alignItems: "center",
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Pill_default, {
                                label: hero.greeting,
                                size: "small",
                                sx: {
                                  backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.12)" : "rgba(98, 132, 218, 0.22)",
                                  color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
                                  fontWeight: 600,
                                  letterSpacing: 0.3
                                }
                              }, undefined, false, undefined, this),
                              primaryHeroMetric && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                                variant: "body2",
                                color: "text.secondary",
                                children: [
                                  primaryHeroMetric.value,
                                  " · ",
                                  primaryHeroMetric.title.toLowerCase()
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
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
                              maxWidth: { md: "80%" }
                            },
                            children: hero.title
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        variant: "subtitle1",
                        sx: {
                          color: theme.palette.text.secondary,
                          fontSize: { xs: "1.05rem", md: "1.14rem" },
                          lineHeight: { xs: 1.65, md: 1.75 }
                        },
                        children: hero.subtitle
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                        spacing: 1.25,
                        children: hero.credentials.map((line) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                          variant: "body1",
                          sx: { color: theme.palette.text.primary, lineHeight: 1.7 },
                          children: line
                        }, line, false, undefined, this))
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                        spacing: { xs: 1.5, sm: 2 },
                        direction: { xs: "column", sm: "row" },
                        sx: { pt: { xs: 0.5, md: 1 } },
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
                          mt: { xs: 0.5, md: 1 }
                        },
                        children: hero.availability.label
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
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

//# debugId=CEC194E1AD3FA2A964756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vc3JjL3JvdXRlcy9Ib21lUGFnZS50c3giLCAiLi4vc3JjL2RhdGEvaG9tZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL1ByaW1hcnlCdXR0b24udHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL0Nhc2VDYXJkLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL0hvbWVQYWdlLnRzeFxuLy8gUHVycG9zZTogUmVuZGVycyB0aGUgbGFuZGluZyBleHBlcmllbmNlIGluY2x1ZGluZyBoZXJvLCBtZXRyaWNzLCBjYXNlIHN0dWRpZXMsIGV4cGVyaWVuY2VzLCBhbmQgY29udGFjdCBjYWxsLXRvLWFjdGlvbi5cbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWRpZXMsXG4gIGV4cGVyaWVuY2VzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICBzb2NpYWxMaW5rcyxcbn0gZnJvbSBcIi4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IENhc2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Nhc2VDYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCBJbXBhY3RTdGF0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUHJpbWFyeUJ1dHRvblwiO1xuXG50eXBlIENhc2VTdHVkeUlkID0gKHR5cGVvZiBjYXNlU3R1ZGllcylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHksIHNldFNlbGVjdGVkQ2FzZVN0dWR5XSA9XG4gICAgdXNlU3RhdGU8Q2FzZVN0dWR5SWQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzaXRlVXJsID1cbiAgICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgICBcImh0dHBzOi8vbXJzYWRyaS5naXRodWIuaW8vUG9ydGZvbGlvXCI7XG5cbiAgY29uc3QgcHJpbWFyeUhlcm9NZXRyaWMgPSBtZXRyaWNzWzBdO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0gW1xuICAgIHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgICAgcG90ZW50aWFsQWN0aW9uOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIixcbiAgICAgICAgdGFyZ2V0OiBgJHtzaXRlVXJsfS8/cT17c2VhcmNoX3Rlcm1fc3RyaW5nfWAsXG4gICAgICAgIFwicXVlcnktaW5wdXRcIjogXCJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgIG5hbWU6IGhlcm8ubmFtZSxcbiAgICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgICBkZXNjcmlwdGlvbjogaGVyby5zdWJ0aXRsZSxcbiAgICAgIHVybDogc2l0ZVVybCxcbiAgICAgIGltYWdlOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgIHNhbWVBczogc29jaWFsTGlua3MubWFwKChsaW5rKSA9PiBsaW5rLmhyZWYpLFxuICAgIH0sXG4gIF0gYXMgY29uc3Q7XG5cbiAgY29uc3Qgc2VsZWN0ZWRDYXNlU3R1ZHlEYXRhID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYXNlU3R1ZGllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZENhc2VTdHVkeSkgPz8gbnVsbCxcbiAgICBbc2VsZWN0ZWRDYXNlU3R1ZHldLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgdGl0bGU9XCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgY3JhZnRpbmcgdHJ1c3R3b3J0aHkgZXhwZXJpZW5jZXNcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlBvcnRmb2xpbyBvZiBNYXNpaCBTYWRyaSwgYW4gaW1wYWN0LW9yaWVudGVkIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHByb3RlY3RpbmcgbWlsbGlvbnMgb2YgdXNlcnMgdGhyb3VnaCB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBhbmQgZGVzaWduIHN5c3RlbXMuXCJcbiAgICAgICAgY2Fub25pY2FsUGF0aD1cIi9cIlxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdXJsOiBoZXJvLnBvcnRyYWl0LnNyYyxcbiAgICAgICAgICAgIGFsdDogaGVyby5wb3J0cmFpdC5hbHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3RydWN0dXJlZERhdGE9e3N0cnVjdHVyZWREYXRhfVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA5IH0sXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAxNSUsIHJnYmEoMTQ1LCAxNjcsIDI1NSwgMC4xMiksIHRyYW5zcGFyZW50IDU4JSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSgzNCwgODQsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQgNTIlKVwiXG4gICAgICAgICAgICAgIDogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAxNSUsIHJnYmEoNzMsIDEwOSwgMTkzLCAwLjE4KSwgdHJhbnNwYXJlbnQgNjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3OCUgMTglLCByZ2JhKDQ4LCA4NiwgMTc2LCAwLjE4KSwgdHJhbnNwYXJlbnQgNTUlKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHsgeHM6IDUsIG1kOiA2IH0sXG4gICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuODgpIDAlLCByZ2JhKDIzMCwyMzcsMjU1LDAuNjUpIDEwMCUpXCJcbiAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSgxOCwyNiw0OCwwLjkyKSAwJSwgcmdiYSgzMCw0OCw5NCwwLjcyKSAxMDAlKVwiLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgID8gXCIwIDQycHggMTIwcHggLTYwcHggcmdiYSgxNywgMzYsIDgzLCAwLjY1KVwiXG4gICAgICAgICAgICAgICAgICA6IFwiMCA0OHB4IDEyMHB4IC03MHB4IHJnYmEoMCwgMCwgMCwgMC44KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICBpbnNldDogMCxcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBcIiY6OmJlZm9yZVwiOiB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgaW5zZXQ6IFwiLTQwJSA1NSUgMzAlIC0yMCVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDY2LCAxMjcsIDI1NSwgMC4yNSkgMCUsIHJnYmEoNjYsIDEyNywgMjU1LCAwKSA1NSUpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoOTYsIDEzOSwgMjU1LCAwLjM1KSAwJSwgcmdiYSg5NiwgMTM5LCAyNTUsIDApIDYwJSlcIixcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDQwcHgpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIiY6OmFmdGVyXCI6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICBpbnNldDogXCIxOCUgLTQ1JSAtMjUlIDU1JVwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTIwLCAxNzAsIDI1NSwgMC4yMikgMCUsIHJnYmEoMTIwLCAxNzAsIDI1NSwgMCkgNjAlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDUzLCAxMDQsIDIxNCwgMC4zMikgMCUsIHJnYmEoNTMsIDEwNCwgMjE0LCAwKSA2NSUpXCIsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigzNnB4KVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogNSwgbWQ6IDYgfX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgICAgICBweDogeyB4czogMy41LCBzbTogNSwgbWQ6IDYgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogNC41LCBtZDogNi41IH0sXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZsZXhCYXNpczogeyBtZDogXCI0NCVcIiB9LFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogeyB4czogXCJjZW50ZXJcIiwgbWQ6IFwiZmxleC1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwiY2VudGVyXCIsIG1kOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgcGI6IHsgeHM6IDQsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDI4MCwgc206IDMyMCwgbWQ6IDM2MCB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBpbnNldDogXCItMTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY2LCAxMjcsIDI1NSwgMC4yKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA3MCUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoODMsIDEzNCwgMjU1LCAwLjI4KSAwJSwgcmdiYSgxOCwyNiw0OCwwKSA3NSUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQ2JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDMycHgpXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMueGwsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuNDUpLCByZ2JhKDIzNSwyNDEsMjU1LDAuNzUpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCByZ2JhKDIwLDI4LDQ4LDAuOSksIHJnYmEoNDYsNjIsMTEwLDAuODUpKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMjRweCA2MHB4IHJnYmEoMTcsIDM2LCA4MywgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMCAyOHB4IDcwcHggcmdiYSgwLCAwLCAwLCAwLjU1KVwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2hlcm8ucG9ydHJhaXQuYWx0fVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLmxnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMjQsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE3LCAzNiwgODMsIDAuODYpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoNSwgMTIsIDI0LCAwLjg4KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImNvbW1vbi53aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgICAgIHB4OiAyLjUsXG4gICAgICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMTJweCAyNHB4IHJnYmEoMTIsIDI4LCA3NSwgMC4zNSlcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICBBdmFpbGFibGUgZm9yIHNlbmlvciByb2xlc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAzLCBtZDogMy41IH19XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IG1kOiA2MjAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDIgfX0+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2hlcm8uZ3JlZXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4zLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtwcmltYXJ5SGVyb01ldHJpYyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ByaW1hcnlIZXJvTWV0cmljLnZhbHVlfSDCtyB7cHJpbWFyeUhlcm9NZXRyaWMudGl0bGUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMDUsXG4gICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4wMTVlbVwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGVyby5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogeyB4czogXCIwLjAxZW1cIiwgbWQ6IFwiMC4wMDVlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgbWQ6IFwiODAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hlcm8udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMS4wNXJlbVwiLCBtZDogXCIxLjE0cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogeyB4czogMS42NSwgbWQ6IDEuNzUgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2hlcm8uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjI1fT5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLmNyZWRlbnRpYWxzLm1hcCgobGluZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bGluZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSwgbGluZUhlaWdodDogMS43IH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEuNSwgc206IDIgfX1cbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7IHB0OiB7IHhzOiAwLjUsIG1kOiAxIH0gfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtoZXJvLmN0YVByaW1hcnkudG99XG4gICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWluV2lkdGg6IHsgc206IDIyMCB9IH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtoZXJvLmN0YVByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICB0bz17aGVyby5jdGFTZWNvbmRhcnkudG99XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hlcm8uY3RhU2Vjb25kYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89e2hlcm8uYXZhaWxhYmlsaXR5LnRvfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiB7IHhzOiBcImZsZXgtc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIG10OiB7IHhzOiAwLjUsIG1kOiAxIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLmF2YWlsYWJpbGl0eS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfX0ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gbGFiZWw9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8Q2FzZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNhc2VTdHVkeT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5PdGhlciBFeGNpdGluZyBFeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBbG9uZ3NpZGUgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17ZXhwZXJpZW5jZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtleHBlcmllbmNlLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtleHBlcmllbmNlLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntleHBlcmllbmNlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IDAsIHBiOiAzLCBweDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2V4cGVyaWVuY2UubGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNSksIHRyYW5zcGFyZW50IDcwJSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg0OCw4NiwxNzYsMC4xOCksIHJnYmEoNCw3LDE1LDApKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImZvb3RlclwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJhc2UsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcHQ6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9LFxuICAgICAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkXCI6IHsgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgTGV04oCZcyBjb25uZWN0XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgU2hhcmUgeW91ciBjaGFsbGVuZ2Ugb3Igc2F5IGhlbGxv4oCUaGFwcHkgdG8gZXhwbG9yZSBwcm9kdWN0IGRlc2lnbiBjb2xsYWJvcmF0aW9ucy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG10OiAzIH19IC8+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcGI6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcHQ6IDAsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIixcbiAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PVwiYVwiIGhyZWY9XCJtYWlsdG86c2RhcmltYXNpaEBnbWFpbC5jb21cIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgc2RhcmltYXNpaEBnbWFpbC5jb21cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19IHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oc2VsZWN0ZWRDYXNlU3R1ZHlEYXRhKX1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICAgICAgPlxuICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhLnJlY2FwLmhlYWRsaW5lfVxuICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyIH19PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENhc2VTdHVkeURhdGEucmVjYXAuYnVsbGV0cy5tYXAoKGJ1bGxldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2J1bGxldH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBtdD17M30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89e3NlbGVjdGVkQ2FzZVN0dWR5RGF0YS50b31cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWVwIGRpdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9EaWFsb2c+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9ob21lLnRzXG4vLyBQdXJwb3NlOiBDb250YWlucyBob21lIHBhZ2UgaGVybyBjb3B5LCBtZXRyaWNzLCBjYXNlIHN0dWR5IHN1bW1hcmllcywgYW5kIHNvY2lhbCBsaW5rIGRhdGEgY29uc3VtZWQgYnkgVUkgY29tcG9uZW50cy5cbmltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuXG5jb25zdCByZXNvbHZlQXNzZXQgPSAoYXNzZXQ6IHN0cmluZykgPT4gbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xudHlwZSBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBjcmVkZW50aWFsczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIGN0YVNlY29uZGFyeToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgYXZhaWxhYmlsaXR5OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xuICBwb3J0cmFpdDoge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBNZXRyaWNTdW1tYXJ5ID0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcCA9IHtcbiAgaGVhZGxpbmU6IHN0cmluZztcbiAgYnVsbGV0czogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG50eXBlIENhc2VTdHVkeVN1bW1hcnkgPSB7XG4gIGlkOiBcImRpdmFyXCIgfCBcInNldGFyZS1hdmFsXCI7XG4gIG51bWJlcjogc3RyaW5nO1xuICB0YWc6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgcGxhdGZvcm1EZXRhaWw/OiBzdHJpbmc7XG4gIHN0YXQ/OiBzdHJpbmc7XG4gIHRhZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB0bzogc3RyaW5nO1xuICByZWNhcDogQ2FzZVN0dWR5UmVjYXA7XG59O1xuXG50eXBlIEV4cGVyaWVuY2VTdW1tYXJ5ID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0YWdzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgaW1hZ2U6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgfTtcbiAgbGluaz86IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhyZWY6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgU29jaWFsTGluayA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGhlcm86IEhlcm9Db250ZW50ID0ge1xuICBncmVldGluZzogXCJIZWxsbyDwn5GL8J+PvCwgSSBhbVwiLFxuICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gIHRpdGxlOiBcImFuIGltcGFjdC1vcmllbnRlZCBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwid2l0aCA2KyB5ZWFycyBvZiBleHBlcmllbmNlLCBlbmhhbmNpbmcgZXhwZXJpZW5jZXMgZm9yIDQwIG1pbGxpb24gYWN0aXZlIHVzZXJzXCIsXG4gIGNyZWRlbnRpYWxzOiBbXG4gICAgXCJDZXJ0aWZpZWQgaW4gVVggRGVzaWduIGJ5IHRoZSBVbml2ZXJzaXR5IG9mIFRlaHJhbiBhbmQgU2hhcmlmIFVuaXZlcnNpdHlcIixcbiAgICBcIk1lbnRvcmVkIDIwMCsgc3R1ZGVudHMgYXMgYSBkZXNpZ24gaW5zdHJ1Y3RvciBvdmVyIHRoZSBwYXN0IDMgeWVhcnMuXCIsXG4gIF0sXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZGllc1wiLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyByZXN1bWVcIixcbiAgICB0bzogXCIvcmVzdW1lXCIsXG4gIH0sXG4gIGF2YWlsYWJpbGl0eToge1xuICAgIGxhYmVsOiBcIk9wZW4gdG8gc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcm9sZXNcIixcbiAgICB0bzogXCIvY29udGFjdFwiLFxuICB9LFxuICBwb3J0cmFpdDoge1xuICAgIHNyYzogcmVzb2x2ZUFzc2V0KGhlcm9Qb3J0cmFpdEFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWV0cmljcyA9IFtcbiAge1xuICAgIHZhbHVlOiBcIjYwJVwiLFxuICAgIHRpdGxlOiBcIlJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDby1sZWQgRGl2YXLigJlzIHNlY3VyZSBjYWxsIHN5c3RlbSB3aXRoIFRydXN0ICYgU2FmZXR5IHRvIHNhZmVndWFyZCAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiOC4zSytcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IHRlYW1zIHVzaW5nIE1vcnBoXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIG9wZW4gZGVzaWduIHN5c3RlbSB0aGF0IHBvd2VycyBGaWdtYSBoYW5kb2ZmcyBhbmQgYWNjZWxlcmF0ZXMgaGlnaC1xdWFsaXR5IHJlbGVhc2VzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgIHRpdGxlOiBcIkRlc2lnbmVycyBtZW50b3JlZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXNpZ25lZCBwcm9qZWN0LWJhc2VkIHByb2dyYW1zIGF0IFJhaG5lbWEgQ29sbGVnZSB0byBoZWxwIGVtZXJnaW5nIGRlc2lnbmVycyBsYXVuY2ggY2FyZWVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgIHRpdGxlOiBcIkxpZnQgaW4gcXVhbGlmaWVkIGxlYWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlZGVzaWduZWQgUGVyc29s4oCZcyBzaWduLXVwIGZ1bm5lbCBlbmQtdG8tZW5kLCByZW1vdmluZyBmcmljdGlvbiBhbmQgYm9vc3RpbmcgbGVhZCBnZW5lcmF0aW9uIGluIDMgbW9udGhzLlwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkaWVzID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXJcIixcbiAgICBudW1iZXI6IFwiMDFcIixcbiAgICB0YWc6IFwiSW1wcm92aW5nIFVzZXIgU2FmZXR5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFN0b3J5IG9mIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gICAgcGxhdGZvcm06IFwib24gRGl2YXJcIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJDbGFzc2lmaWVkIEFkcyBQbGF0Zm9ybVwiLFxuICAgIHN0YXQ6IFwiQSBmZWF0dXJlIHVzZWQgYnkgMi4xIG1pbGxpb24gdXNlcnMgcGVyIHdlZWtcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJ0cnVzdCAmIHNhZmV0eVwiLCBcImltcGFjdCBhdCBzY2FsZVwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOlxuICAgICAgICBcIkhvdyBjcm9zcy1mdW5jdGlvbmFsIGd1YXJkcmFpbHMgaGVscGVkIERpdmFyIHJlZHVjZSBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDby1sZWQgYSB0YXNrIGZvcmNlIGJyaWRnaW5nIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgYW5kIEVuZ2luZWVyaW5nLlwiLFxuICAgICAgICBcIlNoaXBwZWQgZHluYW1pYyB2b2ljZS1tYXNraW5nIHdpdGggYWJ1c2UgZGV0ZWN0aW9uIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICAgICAgICBcIlN0b29kIHVwIHBsYXlib29rcyBmb3IgbW9kZXJhdGlvbiBvcHMgdG8gbW9uaXRvciByZXBlYXQgb2ZmZW5kZXJzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWxcIixcbiAgICBudW1iZXI6IFwiMDJcIixcbiAgICB0YWc6IFwiQm9vc3RpbmcgVXNlciBFbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVyc1wiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsIENvLlwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlJldGVudGlvbiBzdHJhdGVneVwiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInJldGVudGlvbiBzdHJhdGVneVwiLCBcImNyb3NzLWZ1bmN0aW9uYWwgbGVhZGVyc2hpcFwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6XG4gICAgICAgIFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3Mgb25ib2FyZGluZyB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIk1hcHBlZCBhIG5ldyBsaWZlY3ljbGUgbW9kZWwgdGllZCB0byBkYXRhLWJhY2tlZCBleHBlcmltZW50YXRpb24uXCIsXG4gICAgICAgIFwiUmVmaW5lZCBhY3RpdmF0aW9uIGZsb3dzIHRvIHNwb3RsaWdodCB2YWx1ZSBwcm9wcyB3aXRoaW4gZmlyc3Qgc2Vzc2lvbi5cIixcbiAgICAgICAgXCJDby1jcmVhdGVkIGEgbGVhcm5pbmcgYWdlbmRhIHRvIG1lYXN1cmUgbG95YWx0eSBwcm9ncmFtIHRyYWN0aW9uLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIEluc3RydWN0b3IgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhaW5pbmcgMjAwKyBzdHVkZW50cyB0aHJvdWdoIDYgY291cnNlcyBzaW5jZSAyMDIyXCIsXG4gICAgdGFnczogW1wiZWR1Y2F0aW9uXCIsIFwibWVudG9yc2hpcFwiLCBcImN1cnJpY3VsdW0gZGVzaWduXCJdLFxuICAgIGltYWdlOiB7XG4gICAgICBzcmM6IHJlc29sdmVBc3NldChyYWhuZW1hU3R1ZGVudHNBc3NldCksXG4gICAgICBhbHQ6IFwiU3R1ZGVudHMgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vcnBoIERlc2lnbiBTeXN0ZW1cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZToge1xuICAgICAgc3JjOiByZXNvbHZlQXNzZXQobW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCksXG4gICAgICBhbHQ6IFwiTW9ycGggRGVzaWduIFN5c3RlbSAtIEZpZ21hIENvbW11bml0eVwiLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgbGFiZWw6IFwiVmlldyBvbiBGaWdtYSBDb21tdW5pdHlcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL2NvbW11bml0eS9maWxlLzEwNjkyNTkzMzM0NjcwODMxODJcIixcbiAgICB9LFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiRmlnbWFcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9AbWFzaWhcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlBvcnRmb2xpb1wiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9tYXNpaC5mcmFtZXIud2Vic2l0ZS9cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz47XG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTEwLjggMTUuOSA0LjY3LTMuNWMuMjctLjIuMjctLjYgMC0uOEwxMC44IDguMWMtLjMzLS4yNS0uOC0uMDEtLjguNHY3YzAgLjQxLjQ3LjY1LjguNE0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcmltYXJ5QnV0dG9uID0gZm9yd2FyZFJlZjxhbnksIEJ1dHRvblByb3BzPGFueT4+KGZ1bmN0aW9uIFByaW1hcnlCdXR0b24oXG4gIHsgdmFyaWFudDogX3ZhcmlhbnQsIC4uLnByb3BzIH0sXG4gIHJlZixcbikge1xuICByZXR1cm4gPEJ1dHRvbiByZWY9e3JlZn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUJ1dHRvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgY2FzZVN0dWRpZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4vR2hvc3RCdXR0b25cIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuL1BpbGxcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuL1ByaW1hcnlCdXR0b25cIjtcblxuZXhwb3J0IHR5cGUgQ2FzZVN0dWR5U3VtbWFyeSA9ICh0eXBlb2YgY2FzZVN0dWRpZXMpW251bWJlcl07XG5cbnR5cGUgQ2FzZUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VDYXJkID0gKHsgY2FzZVN0dWR5LCBhY3RpdmUgPSBmYWxzZSwgb25PcGVuUmVjYXAgfTogQ2FzZUNhcmRQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgcGFsZXR0ZSwgdG9rZW5zIH0gPSB0aGVtZTtcbiAgY29uc3QgaXNEYXJrID0gcGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIjtcblxuICBjb25zdCBhY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjAsIDQ1LCAxMTAsIDAuOTgpLCByZ2JhKDU4LCAxMTgsIDIyNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNywgNzYsIDE3MCwgMC44OCksIHJnYmEoNjAsIDE1MSwgMjU1LCAwLjgyKSlcIjtcblxuICBjb25zdCBpbmFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgyMCwgMjgsIDUyLCAwLjgyKSwgcmdiYSgxMiwgMTgsIDM2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0OCwgMjUxLCAyNTUsIDAuOTQpLCByZ2JhKDIzMiwgMjQyLCAyNTUsIDAuODgpKVwiO1xuXG4gIGNvbnN0IGhlYWRpbmdDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjI2LCAyMzQsIDI1NSwgMC45NSlcIlxuICAgICAgOiBwYWxldHRlLnRleHQucHJpbWFyeTtcblxuICBjb25zdCBib2R5Q29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIxMCwgMjIwLCAyNTUsIDAuODIpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcblxuICBjb25zdCBib3JkZXJDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4yOClcIlxuICAgICAgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMTIpXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgICBlbGV2YXRpb249ezB9XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gYWN0aXZlQmFja2dyb3VuZCA6IGluYWN0aXZlQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcbiAgICAgICAgY29sb3I6IGFjdGl2ZSA/IHBhbGV0dGUuY29tbW9uLndoaXRlIDogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIGJveFNoYWRvdzogYWN0aXZlID8gdG9rZW5zLnNoYWRvdy5sZXZlbDMgOiB0b2tlbnMuc2hhZG93LmxldmVsMixcbiAgICAgICAgdHJhbnNpdGlvbjogdG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTZweClcIixcbiAgICAgICAgICBib3hTaGFkb3c6IHRva2Vucy5zaGFkb3cubGV2ZWwzLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBiOiAzIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV5ZWJyb3dcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE4OSwgMjA0LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FzZSB7Y2FzZVN0dWR5Lm51bWJlcn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXNlU3R1ZHkudGFnfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yNClcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjcsIDI0MSwgMjU1LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIxNCwgMjI0LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXI6IGFjdGl2ZSA/IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDNcIiBzeD17eyBjb2xvcjogaGVhZGluZ0NvbG9yIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm19XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgbWw6IDAuNzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAoe2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbH0pXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXQgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IGJvZHlDb2xvciB9fT5cbiAgICAgICAgICAgICAge2Nhc2VTdHVkeS5zdGF0fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCwgZ2FwOiAxIH19PlxuICAgICAgICB7YWN0aXZlID8gKFxuICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgY29sb3I9e2FjdGl2ZSA/IFwiaW5oZXJpdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgb25DbGljaz17b25PcGVuUmVjYXB9XG4gICAgICAgICAgZW5kSWNvbj17PFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gLz59XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSlcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNilcIlxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTQpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBSZWNhcFxuICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlQ2FyZDtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIGxhYmVsLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wYWN0U3RhdENhcmQ7XG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUsNERBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLHFCQUFxQjs7O0FDZXpCOzs7Ozs7Ozs7Ozs7QUNmQSxJQUFNLGVBQWUsQ0FBQyxVQUFrQixJQUFJLElBQUksT0FBTyxZQUFZLEdBQUcsRUFBRTtBQW9FakUsSUFBTSxPQUFvQjtBQUFBLEVBQy9CLFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQ0U7QUFBQSxFQUNGLGFBQWE7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLEtBQUssYUFBYSwyQkFBaUI7QUFBQSxJQUNuQyxLQUFLO0FBQUEsRUFDUDtBQUNGO0FBRU8sSUFBTSxVQUFVO0FBQUEsRUFDckI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU87QUFB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QkFDQSxRQUFPO0FBQUEsc0JBQ1AsS0FBSTtBQUFBLHNCQUNKLFNBQVE7QUFBQSxzQkFDUixXQUFTO0FBQUEsc0JBUFgsVUFTRztBQUFBLHVCQVJJLE9BRFAsc0JBVUUsQ0FDSDtBQUFBLHFCQWJILGlDQWNFO0FBQUE7QUFBQSxpQkEzQkosZ0NBNEJFO0FBQUE7QUFBQSxhQTFESixnQ0EyREU7QUFBQSxXQTVESixpQ0E2REU7QUFBQSxTQXZFSixpQ0F3RUU7QUFBQSxzQkFFRix3QkE2Q0UsZ0JBN0NGO0FBQUEsUUFDRSxNQUFNLFFBQVEscUJBQXFCO0FBQUEsUUFDbkMsU0FBUyxNQUFNLHFCQUFxQixJQUFJO0FBQUEsUUFDeEMsbUJBQWdCO0FBQUEsUUFIbEIsVUFLRyx5Q0FDQztBQUFBLG9CQXFDRTtBQUFBLDRCQXBDQSx3QkFFRSxxQkFGRjtBQUFBLGNBQWEsSUFBRztBQUFBLGNBQWhCLFVBQ0csc0JBQXNCLE1BQU07QUFBQSxlQUQvQixpQ0FFRTtBQUFBLDRCQUNGLHdCQWdDRSx1QkFoQ0Y7QUFBQSx3QkFnQ0U7QUFBQSxnQ0EvQkEsd0JBV0UsZUFYRjtBQUFBLGtCQUFPLFdBQVU7QUFBQSxrQkFBSyxTQUFTO0FBQUEsa0JBQUssSUFBSSxFQUFFLElBQUksRUFBRTtBQUFBLGtCQUFoRCxVQUNHLHNCQUFzQixNQUFNLFFBQVEsSUFBSSxDQUFDLDJCQUN4Qyx3QkFPRSxvQkFQRjtBQUFBLG9CQUNFLFdBQVU7QUFBQSxvQkFFVixTQUFRO0FBQUEsb0JBQ1IsT0FBTTtBQUFBLG9CQUpSLFVBTUc7QUFBQSxxQkFKSSxRQUZQLHNCQU9FLENBQ0g7QUFBQSxtQkFWSCxpQ0FXRTtBQUFBLGdDQUNGLHdCQWtCRSxlQWxCRjtBQUFBLGtCQUFPLFdBQVU7QUFBQSxrQkFBTSxTQUFTO0FBQUEsa0JBQUcsSUFBSTtBQUFBLGtCQUF2QyxVQWtCRTtBQUFBLG9DQWpCQSx3QkFTRSxnQkFURjtBQUFBLHNCQUNFLFdBQVc7QUFBQSxzQkFDWCxJQUFJLHNCQUFzQjtBQUFBLHNCQUMxQixTQUFRO0FBQUEsc0JBQ1IsV0FBUztBQUFBLHNCQUNULHlCQUFTLHdCQUFDLDZCQUFELHFDQUF5QjtBQUFBLHNCQUNsQyxTQUFTLE1BQU0scUJBQXFCLElBQUk7QUFBQSxzQkFOMUM7QUFBQSx3REFTRTtBQUFBLG9DQUNGLHdCQU1FLGdCQU5GO0FBQUEsc0JBQ0UsV0FBUztBQUFBLHNCQUNULFNBQVE7QUFBQSxzQkFDUixTQUFTLE1BQU0scUJBQXFCLElBQUk7QUFBQSxzQkFIMUM7QUFBQSx3REFNRTtBQUFBO0FBQUEsbUJBakJKLGdDQWtCRTtBQUFBO0FBQUEsZUEvQkosZ0NBZ0NFO0FBQUE7QUFBQSxXQXBDSixnQ0FxQ0U7QUFBQSxTQTNDTixpQ0E2Q0U7QUFBQTtBQUFBLEtBcGdCSixnQ0FxZ0JFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiQ0VDMTk0RTFBRDNGQTJBOTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
