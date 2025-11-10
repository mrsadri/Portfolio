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
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 3, md: 6 },
            sx: {
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
                size: { xs: 12, md: 5 },
                sx: {
                  order: { xs: 1, md: 1 },
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: { xs: 4, md: 0 }
                },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                  sx: {
                    position: "relative",
                    width: "100%",
                    maxWidth: { xs: 320, md: 420 },
                    display: "flex",
                    justifyContent: "center",
                    px: { xs: 0, md: 2 }
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                      sx: {
                        position: "absolute",
                        inset: { xs: 18, md: 28 },
                        background: theme.palette.mode === "light" ? "linear-gradient(180deg, rgba(145,167,255,0.22) 0%, rgba(244,247,251,0) 100%)" : "linear-gradient(180deg, rgba(58,88,170,0.35) 0%, rgba(4,7,15,0) 95%)",
                        borderRadius: "38%",
                        filter: "blur(42px)"
                      }
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                      sx: {
                        position: "absolute",
                        inset: "-8%",
                        background: theme.palette.mode === "light" ? "linear-gradient(160deg, rgba(63, 111, 231, 0.28) 0%, rgba(230, 240, 255, 0) 60%)" : "linear-gradient(160deg, rgba(53, 104, 214, 0.35) 0%, rgba(4, 7, 15, 0) 60%)",
                        borderRadius: "42%",
                        opacity: 0.55
                      }
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Avatar_default, {
                      src: hero.portrait.src,
                      alt: hero.portrait.alt,
                      variant: "rounded",
                      sx: {
                        position: "relative",
                        width: { xs: 260, md: 360 },
                        height: { xs: 260, md: 360 },
                        borderRadius: (theme2) => theme2.tokens.radius.xl,
                        boxShadow: (theme2) => theme2.palette.mode === "light" ? "0 24px 52px rgba(17, 36, 83, 0.18)" : "0 26px 60px rgba(0, 0, 0, 0.42)",
                        border: (theme2) => `1px solid ${theme2.tokens.colors.border}`,
                        transition: "transform 180ms ease, box-shadow 180ms ease",
                        "&:hover": {
                          transform: "translateY(-4px) scale(1.01)",
                          boxShadow: theme.palette.mode === "light" ? "0 28px 64px rgba(17, 36, 83, 0.24)" : "0 32px 80px rgba(0, 0, 0, 0.46)"
                        }
                      }
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
                size: { xs: 12, md: 6 },
                sx: {
                  order: { xs: 2, md: 2 },
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                  pl: { md: 4 }
                },
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  spacing: { xs: 2.5, sm: 3 },
                  sx: {
                    maxWidth: { xs: "100%", md: 560 },
                    pb: { xs: 1, md: 0 }
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      spacing: 1.25,
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                          variant: "eyebrow",
                          color: "brand.secondary",
                          children: hero.greeting
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                          variant: "display",
                          sx: { lineHeight: 1.1 },
                          children: hero.name
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                          variant: "h2",
                          sx: {
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            letterSpacing: { xs: "0.01em", md: "0.005em" }
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
                        lineHeight: { xs: 1.58, md: 1.7 },
                        mt: { xs: 0.5, md: 1 }
                      },
                      children: hero.subtitle
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      spacing: 1,
                      children: hero.credentials.map((line) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        variant: "body1",
                        sx: { color: theme.palette.text.primary, lineHeight: 1.65 },
                        children: line
                      }, line, false, undefined, this))
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      direction: { xs: "column", sm: "row" },
                      spacing: { xs: 1.5, sm: 2 },
                      sx: { pt: { xs: 0.5, md: 1 } },
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
                      sx: {
                        alignSelf: "flex-start",
                        fontWeight: 600,
                        mt: { xs: 0.5, md: 1 }
                      },
                      children: hero.availability.label
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

//# debugId=26F9B2C13AAF8C3F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93Rm9yd2FyZFJvdW5kZWQuanMiLCAiLi4vc3JjL3JvdXRlcy9Ib21lUGFnZS50c3giLCAiLi4vc3JjL2RhdGEvaG9tZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL1ByaW1hcnlCdXR0b24udHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3VpL0Nhc2VDYXJkLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTNoMTEuMTdsLTQuODggNC44OGMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MnMxLjAyLjM5IDEuNDEgMGw2LjU5LTYuNTljLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtNi41OC02LjZhLjk5Ni45OTYgMCAwIDAtMS40MSAwYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDE2LjE3IDExSDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFcIlxufSksICdBcnJvd0ZvcndhcmRSb3VuZGVkJyk7IiwKICAgICIvLyBGaWxlOiBzcmMvcm91dGVzL0hvbWVQYWdlLnRzeFxuLy8gUHVycG9zZTogUmVuZGVycyB0aGUgbGFuZGluZyBleHBlcmllbmNlIGluY2x1ZGluZyBoZXJvLCBtZXRyaWNzLCBjYXNlIHN0dWRpZXMsIGV4cGVyaWVuY2VzLCBhbmQgY29udGFjdCBjYWxsLXRvLWFjdGlvbi5cbmltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dUaXRsZSxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHtcbiAgY2FzZVN0dWRpZXMsXG4gIGV4cGVyaWVuY2VzLFxuICBoZXJvLFxuICBtZXRyaWNzLFxuICBzb2NpYWxMaW5rcyxcbn0gZnJvbSBcIi4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IENhc2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Nhc2VDYXJkXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCBJbXBhY3RTdGF0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9JbXBhY3RTdGF0Q2FyZFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvUHJpbWFyeUJ1dHRvblwiO1xuXG50eXBlIENhc2VTdHVkeUlkID0gKHR5cGVvZiBjYXNlU3R1ZGllcylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXNlU3R1ZHksIHNldFNlbGVjdGVkQ2FzZVN0dWR5XSA9XG4gICAgdXNlU3RhdGU8Q2FzZVN0dWR5SWQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzaXRlVXJsID1cbiAgICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgICBcImh0dHBzOi8vbXJzYWRyaS5naXRodWIuaW8vUG9ydGZvbGlvXCI7XG5cbiAgY29uc3Qgc3RydWN0dXJlZERhdGEgPSBbXG4gICAge1xuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcbiAgICAgIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgICB1cmw6IHNpdGVVcmwsXG4gICAgICBwb3RlbnRpYWxBY3Rpb246IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlNlYXJjaEFjdGlvblwiLFxuICAgICAgICB0YXJnZXQ6IGAke3NpdGVVcmx9Lz9xPXtzZWFyY2hfdGVybV9zdHJpbmd9YCxcbiAgICAgICAgXCJxdWVyeS1pbnB1dFwiOiBcInJlcXVpcmVkIG5hbWU9c2VhcmNoX3Rlcm1fc3RyaW5nXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgbmFtZTogaGVyby5uYW1lLFxuICAgICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBoZXJvLnN1YnRpdGxlLFxuICAgICAgdXJsOiBzaXRlVXJsLFxuICAgICAgaW1hZ2U6IGhlcm8ucG9ydHJhaXQuc3JjLFxuICAgICAgc2FtZUFzOiBzb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IGxpbmsuaHJlZiksXG4gICAgfSxcbiAgXSBhcyBjb25zdDtcblxuICBjb25zdCBzZWxlY3RlZENhc2VTdHVkeURhdGEgPSB1c2VNZW1vKFxuICAgICgpID0+IGNhc2VTdHVkaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkQ2FzZVN0dWR5KSA/PyBudWxsLFxuICAgIFtzZWxlY3RlZENhc2VTdHVkeV0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlb1xuICAgICAgICB0aXRsZT1cIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciBjcmFmdGluZyB0cnVzdHdvcnRoeSBleHBlcmllbmNlc1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiUG9ydGZvbGlvIG9mIE1hc2loIFNhZHJpLCBhbiBpbXBhY3Qtb3JpZW50ZWQgc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcHJvdGVjdGluZyBtaWxsaW9ucyBvZiB1c2VycyB0aHJvdWdoIHRydXN0ICYgc2FmZXR5LCBncm93dGgsIGFuZCBkZXNpZ24gc3lzdGVtcy5cIlxuICAgICAgICBjYW5vbmljYWxQYXRoPVwiL1wiXG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB1cmw6IGhlcm8ucG9ydHJhaXQuc3JjLFxuICAgICAgICAgICAgYWx0OiBoZXJvLnBvcnRyYWl0LmFsdCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHJ1Y3R1cmVkRGF0YT17c3RydWN0dXJlZERhdGF9XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBweTogeyB4czogNiwgbWQ6IDkgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDE1JSwgcmdiYSgxNDUsIDE2NywgMjU1LCAwLjEyKSwgdHJhbnNwYXJlbnQgNTglKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDM0LCA4NCwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCA1MiUpXCJcbiAgICAgICAgICAgICAgOiBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTglIDE1JSwgcmdiYSg3MywgMTA5LCAxOTMsIDAuMTgpLCB0cmFuc3BhcmVudCA2MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc4JSAxOCUsIHJnYmEoNDgsIDg2LCAxNzYsIDAuMTgpLCB0cmFuc3BhcmVudCA1NSUpXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA2IH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIHNpemU9e3sgeHM6IDEyLCBtZDogNSB9fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIG9yZGVyOiB7IHhzOiAxLCBtZDogMSB9LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB7IHhzOiBcImNlbnRlclwiLCBtZDogXCJmbGV4LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgICBtYjogeyB4czogNCwgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IDMyMCwgbWQ6IDQyMCB9LFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAwLCBtZDogMiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNldDogeyB4czogMTgsIG1kOiAyOCB9LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNDUsMTY3LDI1NSwwLjIyKSAwJSwgcmdiYSgyNDQsMjQ3LDI1MSwwKSAxMDAlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg1OCw4OCwxNzAsMC4zNSkgMCUsIHJnYmEoNCw3LDE1LDApIDk1JSlcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjM4JVwiLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig0MnB4KVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGluc2V0OiBcIi04JVwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSg2MywgMTExLCAyMzEsIDAuMjgpIDAlLCByZ2JhKDIzMCwgMjQwLCAyNTUsIDApIDYwJSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoNTMsIDEwNCwgMjE0LCAwLjM1KSAwJSwgcmdiYSg0LCA3LCAxNSwgMCkgNjAlKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNDIlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvLnBvcnRyYWl0LnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17aGVyby5wb3J0cmFpdC5hbHR9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMjYwLCBtZDogMzYwIH0sXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogMjYwLCBtZDogMzYwIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnhsLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMjRweCA1MnB4IHJnYmEoMTcsIDM2LCA4MywgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMjZweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC40MilcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAxODBtcyBlYXNlLCBib3gtc2hhZG93IDE4MG1zIGVhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwIDI4cHggNjRweCByZ2JhKDE3LCAzNiwgODMsIDAuMjQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMzJweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40NilcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBvcmRlcjogeyB4czogMiwgbWQ6IDIgfSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogeyB4czogXCJmbGV4LXN0YXJ0XCIsIG1kOiBcImZsZXgtZW5kXCIgfSxcbiAgICAgICAgICAgICAgICBwbDogeyBtZDogNCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLjUsIHNtOiAzIH19XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgbWQ6IDU2MCB9LFxuICAgICAgICAgICAgICAgICAgcGI6IHsgeHM6IDEsIG1kOiAwIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjI1fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge2hlcm8uZ3JlZXRpbmd9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuMSB9fT5cbiAgICAgICAgICAgICAgICAgICAge2hlcm8ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHsgeHM6IFwiMC4wMWVtXCIsIG1kOiBcIjAuMDA1ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGVyby50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxLjA1cmVtXCIsIG1kOiBcIjEuMTJyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB7IHhzOiAxLjU4LCBtZDogMS43IH0sXG4gICAgICAgICAgICAgICAgICAgIG10OiB7IHhzOiAwLjUsIG1kOiAxIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICB7aGVyby5jcmVkZW50aWFscy5tYXAoKGxpbmUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIGxpbmVIZWlnaHQ6IDEuNjUgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBzbTogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMS41LCBzbTogMiB9fVxuICAgICAgICAgICAgICAgICAgc3g9e3sgcHQ6IHsgeHM6IDAuNSwgbWQ6IDEgfSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgdG89e2hlcm8uY3RhUHJpbWFyeS50b31cbiAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGVyby5jdGFQcmltYXJ5LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgdG89e2hlcm8uY3RhU2Vjb25kYXJ5LnRvfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGVyby5jdGFTZWNvbmRhcnkubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICB0bz17aGVyby5hdmFpbGFiaWxpdHkudG99XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIG10OiB7IHhzOiAwLjUsIG1kOiAxIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtoZXJvLmF2YWlsYWJpbGl0eS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0sIHB0OiB7IG1kOiA2IH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiAzLjUgfX0+XG4gICAgICAgICAgICB7bWV0cmljcy5tYXAoKHsgdmFsdWUsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfX0ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgPEltcGFjdFN0YXRDYXJkIHZhbHVlPXt2YWx1ZX0gbGFiZWw9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBpZD1cImNhc2Utc3R1ZGllc1wiXG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0sIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkNhc2Ugc3R1ZGllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgRXhhbXBsZXMgb2YgdGhlIGltcGFjdCBJIGhhdmUgbWFkZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAge2Nhc2VTdHVkaWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8Q2FzZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNhc2VTdHVkeT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5pZCA9PT0gXCJkaXZhclwifVxuICAgICAgICAgICAgICAgICAgb25PcGVuUmVjYXA9eygpID0+IHNldFNlbGVjdGVkQ2FzZVN0dWR5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17Nn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5PdGhlciBFeGNpdGluZyBFeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBbG9uZ3NpZGUgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17ZXhwZXJpZW5jZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtleHBlcmllbmNlLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtleHBlcmllbmNlLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntleHBlcmllbmNlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHQ6IDAsIHBiOiAzLCBweDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2V4cGVyaWVuY2UubGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmxpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNCw4NCwyNTUsMC4wNSksIHRyYW5zcGFyZW50IDcwJSlcIlxuICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg0OCw4NiwxNzYsMC4xOCksIHJnYmEoNCw3LDE1LDApKVwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImZvb3RlclwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJhc2UsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcHQ6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9LFxuICAgICAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkXCI6IHsgcGI6IHsgeHM6IDMuNSwgbWQ6IDMuNSB9IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgTGV04oCZcyBjb25uZWN0XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgU2hhcmUgeW91ciBjaGFsbGVuZ2Ugb3Igc2F5IGhlbGxv4oCUaGFwcHkgdG8gZXhwbG9yZSBwcm9kdWN0IGRlc2lnbiBjb2xsYWJvcmF0aW9ucy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG10OiAzIH19IC8+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcGI6IHsgeHM6IDUsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgcHQ6IDAsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIixcbiAgICAgICAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PVwiYVwiIGhyZWY9XCJtYWlsdG86c2RhcmltYXNpaEBnbWFpbC5jb21cIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgc2RhcmltYXNpaEBnbWFpbC5jb21cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19IHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oc2VsZWN0ZWRDYXNlU3R1ZHlEYXRhKX1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWRDYXNlU3R1ZHkobnVsbCl9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNhc2Utc3R1ZHktcmVjYXAtdGl0bGVcIlxuICAgICAgPlxuICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY2FzZS1zdHVkeS1yZWNhcC10aXRsZVwiPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDYXNlU3R1ZHlEYXRhLnJlY2FwLmhlYWRsaW5lfVxuICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjV9IHN4PXt7IHBsOiAyIH19PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENhc2VTdHVkeURhdGEucmVjYXAuYnVsbGV0cy5tYXAoKGJ1bGxldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2J1bGxldH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtidWxsZXR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBtdD17M30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89e3NlbGVjdGVkQ2FzZVN0dWR5RGF0YS50b31cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWVwIGRpdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhc2VTdHVkeShudWxsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9EaWFsb2c+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9ob21lLnRzXG4vLyBQdXJwb3NlOiBDb250YWlucyBob21lIHBhZ2UgaGVybyBjb3B5LCBtZXRyaWNzLCBjYXNlIHN0dWR5IHN1bW1hcmllcywgYW5kIHNvY2lhbCBsaW5rIGRhdGEgY29uc3VtZWQgYnkgVUkgY29tcG9uZW50cy5cbmltcG9ydCBoZXJvUG9ydHJhaXRBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLXNhZHJpLXByb2ZpbGUud2VicFwiO1xuaW1wb3J0IG1vcnBoRGVzaWduU3lzdGVtQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tb3JwaC1kZXNpZ24tc3lzdGVtLndlYnBcIjtcbmltcG9ydCByYWhuZW1hU3R1ZGVudHNBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaG5lbWEtc3R1ZGVudHMud2VicFwiO1xuXG5jb25zdCByZXNvbHZlQXNzZXQgPSAoYXNzZXQ6IHN0cmluZykgPT4gbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xudHlwZSBIZXJvQ29udGVudCA9IHtcbiAgZ3JlZXRpbmc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBjcmVkZW50aWFsczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIGN0YVNlY29uZGFyeToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgYXZhaWxhYmlsaXR5OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xuICBwb3J0cmFpdDoge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBNZXRyaWNTdW1tYXJ5ID0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBDYXNlU3R1ZHlSZWNhcCA9IHtcbiAgaGVhZGxpbmU6IHN0cmluZztcbiAgYnVsbGV0czogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG50eXBlIENhc2VTdHVkeVN1bW1hcnkgPSB7XG4gIGlkOiBcImRpdmFyXCIgfCBcInNldGFyZS1hdmFsXCI7XG4gIG51bWJlcjogc3RyaW5nO1xuICB0YWc6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgcGxhdGZvcm1EZXRhaWw/OiBzdHJpbmc7XG4gIHN0YXQ/OiBzdHJpbmc7XG4gIHRhZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB0bzogc3RyaW5nO1xuICByZWNhcDogQ2FzZVN0dWR5UmVjYXA7XG59O1xuXG50eXBlIEV4cGVyaWVuY2VTdW1tYXJ5ID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0YWdzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgaW1hZ2U6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgfTtcbiAgbGluaz86IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhyZWY6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgU29jaWFsTGluayA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGhlcm86IEhlcm9Db250ZW50ID0ge1xuICBncmVldGluZzogXCJIZWxsbyDwn5GL8J+PvCwgSSBhbVwiLFxuICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gIHRpdGxlOiBcImFuIGltcGFjdC1vcmllbnRlZCBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwid2l0aCA2KyB5ZWFycyBvZiBleHBlcmllbmNlLCBlbmhhbmNpbmcgZXhwZXJpZW5jZXMgZm9yIDQwIG1pbGxpb24gYWN0aXZlIHVzZXJzXCIsXG4gIGNyZWRlbnRpYWxzOiBbXG4gICAgXCJDZXJ0aWZpZWQgaW4gVVggRGVzaWduIGJ5IHRoZSBVbml2ZXJzaXR5IG9mIFRlaHJhbiBhbmQgU2hhcmlmIFVuaXZlcnNpdHlcIixcbiAgICBcIk1lbnRvcmVkIDIwMCsgc3R1ZGVudHMgYXMgYSBkZXNpZ24gaW5zdHJ1Y3RvciBvdmVyIHRoZSBwYXN0IDMgeWVhcnMuXCIsXG4gIF0sXG4gIGN0YVByaW1hcnk6IHtcbiAgICBsYWJlbDogXCJWaWV3IGNhc2Ugc3R1ZGllc1wiLFxuICAgIHRvOiBcIi9jYXNlLXN0dWRpZXMvZGl2YXItc2VjdXJlLWNhbGxcIixcbiAgfSxcbiAgY3RhU2Vjb25kYXJ5OiB7XG4gICAgbGFiZWw6IFwiVmlldyByZXN1bWVcIixcbiAgICB0bzogXCIvcmVzdW1lXCIsXG4gIH0sXG4gIGF2YWlsYWJpbGl0eToge1xuICAgIGxhYmVsOiBcIk9wZW4gdG8gc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcm9sZXNcIixcbiAgICB0bzogXCIvY29udGFjdFwiLFxuICB9LFxuICBwb3J0cmFpdDoge1xuICAgIHNyYzogcmVzb2x2ZUFzc2V0KGhlcm9Qb3J0cmFpdEFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggU2FkcmkgLSBQcm9kdWN0IERlc2lnbmVyXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWV0cmljcyA9IFtcbiAge1xuICAgIHZhbHVlOiBcIjYwJVwiLFxuICAgIHRpdGxlOiBcIlJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDby1sZWQgRGl2YXLigJlzIHNlY3VyZSBjYWxsIHN5c3RlbSB3aXRoIFRydXN0ICYgU2FmZXR5IHRvIHNhZmVndWFyZCAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiOC4zSytcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IHRlYW1zIHVzaW5nIE1vcnBoXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIG9wZW4gZGVzaWduIHN5c3RlbSB0aGF0IHBvd2VycyBGaWdtYSBoYW5kb2ZmcyBhbmQgYWNjZWxlcmF0ZXMgaGlnaC1xdWFsaXR5IHJlbGVhc2VzLlwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiMjAwK1wiLFxuICAgIHRpdGxlOiBcIkRlc2lnbmVycyBtZW50b3JlZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXNpZ25lZCBwcm9qZWN0LWJhc2VkIHByb2dyYW1zIGF0IFJhaG5lbWEgQ29sbGVnZSB0byBoZWxwIGVtZXJnaW5nIGRlc2lnbmVycyBsYXVuY2ggY2FyZWVycy5cIixcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBcIjgwJVwiLFxuICAgIHRpdGxlOiBcIkxpZnQgaW4gcXVhbGlmaWVkIGxlYWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlZGVzaWduZWQgUGVyc29s4oCZcyBzaWduLXVwIGZ1bm5lbCBlbmQtdG8tZW5kLCByZW1vdmluZyBmcmljdGlvbiBhbmQgYm9vc3RpbmcgbGVhZCBnZW5lcmF0aW9uIGluIDMgbW9udGhzLlwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxNZXRyaWNTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IGNhc2VTdHVkaWVzID0gW1xuICB7XG4gICAgaWQ6IFwiZGl2YXJcIixcbiAgICBudW1iZXI6IFwiMDFcIixcbiAgICB0YWc6IFwiSW1wcm92aW5nIFVzZXIgU2FmZXR5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFN0b3J5IG9mIFJlZHVjaW5nIEhhcmFzc21lbnQgYnkgNjAlXCIsXG4gICAgcGxhdGZvcm06IFwib24gRGl2YXJcIixcbiAgICBwbGF0Zm9ybURldGFpbDogXCJDbGFzc2lmaWVkIEFkcyBQbGF0Zm9ybVwiLFxuICAgIHN0YXQ6IFwiQSBmZWF0dXJlIHVzZWQgYnkgMi4xIG1pbGxpb24gdXNlcnMgcGVyIHdlZWtcIixcbiAgICB0YWdzOiBbXCJyZWFsIHByb2plY3RcIiwgXCJ0cnVzdCAmIHNhZmV0eVwiLCBcImltcGFjdCBhdCBzY2FsZVwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL2RpdmFyLXNlY3VyZS1jYWxsXCIsXG4gICAgcmVjYXA6IHtcbiAgICAgIGhlYWRsaW5lOlxuICAgICAgICBcIkhvdyBjcm9zcy1mdW5jdGlvbmFsIGd1YXJkcmFpbHMgaGVscGVkIERpdmFyIHJlZHVjZSBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCVcIixcbiAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgXCJDby1sZWQgYSB0YXNrIGZvcmNlIGJyaWRnaW5nIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgYW5kIEVuZ2luZWVyaW5nLlwiLFxuICAgICAgICBcIlNoaXBwZWQgZHluYW1pYyB2b2ljZS1tYXNraW5nIHdpdGggYWJ1c2UgZGV0ZWN0aW9uIGZvciAyLjFNIHdlZWtseSBjYWxsZXJzLlwiLFxuICAgICAgICBcIlN0b29kIHVwIHBsYXlib29rcyBmb3IgbW9kZXJhdGlvbiBvcHMgdG8gbW9uaXRvciByZXBlYXQgb2ZmZW5kZXJzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IFwic2V0YXJlLWF2YWxcIixcbiAgICBudW1iZXI6IFwiMDJcIixcbiAgICB0YWc6IFwiQm9vc3RpbmcgVXNlciBFbmdhZ2VtZW50XCIsXG4gICAgdGl0bGU6IFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVyc1wiLFxuICAgIHBsYXRmb3JtOiBcImF0IFNldGFyZSBBdmFsIENvLlwiLFxuICAgIHBsYXRmb3JtRGV0YWlsOiBcIlJldGVudGlvbiBzdHJhdGVneVwiLFxuICAgIHRhZ3M6IFtcInJlYWwgcHJvamVjdFwiLCBcInJldGVudGlvbiBzdHJhdGVneVwiLCBcImNyb3NzLWZ1bmN0aW9uYWwgbGVhZGVyc2hpcFwiXSxcbiAgICB0bzogXCIvY2FzZS1zdHVkaWVzL3NldGFyZS1hdmFsLWVuZ2FnZW1lbnRcIixcbiAgICByZWNhcDoge1xuICAgICAgaGVhZGxpbmU6XG4gICAgICAgIFwiSG93IHdlIHJlLWFyY2hpdGVjdGVkIFNldGFyZSBBdmFsJ3Mgb25ib2FyZGluZyB0byBkb3VibGUgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgYnVsbGV0czogW1xuICAgICAgICBcIk1hcHBlZCBhIG5ldyBsaWZlY3ljbGUgbW9kZWwgdGllZCB0byBkYXRhLWJhY2tlZCBleHBlcmltZW50YXRpb24uXCIsXG4gICAgICAgIFwiUmVmaW5lZCBhY3RpdmF0aW9uIGZsb3dzIHRvIHNwb3RsaWdodCB2YWx1ZSBwcm9wcyB3aXRoaW4gZmlyc3Qgc2Vzc2lvbi5cIixcbiAgICAgICAgXCJDby1jcmVhdGVkIGEgbGVhcm5pbmcgYWdlbmRhIHRvIG1lYXN1cmUgbG95YWx0eSBwcm9ncmFtIHRyYWN0aW9uLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxDYXNlU3R1ZHlTdW1tYXJ5PjtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIEluc3RydWN0b3IgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhaW5pbmcgMjAwKyBzdHVkZW50cyB0aHJvdWdoIDYgY291cnNlcyBzaW5jZSAyMDIyXCIsXG4gICAgdGFnczogW1wiZWR1Y2F0aW9uXCIsIFwibWVudG9yc2hpcFwiLCBcImN1cnJpY3VsdW0gZGVzaWduXCJdLFxuICAgIGltYWdlOiB7XG4gICAgICBzcmM6IHJlc29sdmVBc3NldChyYWhuZW1hU3R1ZGVudHNBc3NldCksXG4gICAgICBhbHQ6IFwiU3R1ZGVudHMgYXQgUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vcnBoIERlc2lnbiBTeXN0ZW1cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgZnJvbSBzY3JhdGNoLCB1c2VkIG92ZXIgNzQwMCB0aW1lcyBpbiB0aGUgRmlnbWEgQ29tbXVuaXR5XCIsXG4gICAgdGFnczogW1wib3BlbiBzb3VyY2VcIiwgXCJkZXNpZ24gc3lzdGVtXCIsIFwiY29tbXVuaXR5IGltcGFjdFwiXSxcbiAgICBpbWFnZToge1xuICAgICAgc3JjOiByZXNvbHZlQXNzZXQobW9ycGhEZXNpZ25TeXN0ZW1Bc3NldCksXG4gICAgICBhbHQ6IFwiTW9ycGggRGVzaWduIFN5c3RlbSAtIEZpZ21hIENvbW11bml0eVwiLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgbGFiZWw6IFwiVmlldyBvbiBGaWdtYSBDb21tdW5pdHlcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL2NvbW11bml0eS9maWxlLzEwNjkyNTkzMzM0NjcwODMxODJcIixcbiAgICB9LFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxFeHBlcmllbmNlU3VtbWFyeT47XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiRmlnbWFcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9AbWFzaWhcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlBvcnRmb2xpb1wiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9tYXNpaC5mcmFtZXIud2Vic2l0ZS9cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8U29jaWFsTGluaz47XG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTEwLjggMTUuOSA0LjY3LTMuNWMuMjctLjIuMjctLjYgMC0uOEwxMC44IDguMWMtLjMzLS4yNS0uOC0uMDEtLjguNHY3YzAgLjQxLjQ3LjY1LjguNE0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcmltYXJ5QnV0dG9uID0gZm9yd2FyZFJlZjxhbnksIEJ1dHRvblByb3BzPGFueT4+KGZ1bmN0aW9uIFByaW1hcnlCdXR0b24oXG4gIHsgdmFyaWFudDogX3ZhcmlhbnQsIC4uLnByb3BzIH0sXG4gIHJlZixcbikge1xuICByZXR1cm4gPEJ1dHRvbiByZWY9e3JlZn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUJ1dHRvbjtcblxuXG4iLAogICAgImltcG9ydCBBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRSb3VuZGVkXCI7XG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlT3V0bGluZVJvdW5kZWRcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB0eXBlIHsgY2FzZVN0dWRpZXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4vR2hvc3RCdXR0b25cIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuL1BpbGxcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuL1ByaW1hcnlCdXR0b25cIjtcblxuZXhwb3J0IHR5cGUgQ2FzZVN0dWR5U3VtbWFyeSA9ICh0eXBlb2YgY2FzZVN0dWRpZXMpW251bWJlcl07XG5cbnR5cGUgQ2FzZUNhcmRQcm9wcyA9IHtcbiAgY2FzZVN0dWR5OiBDYXNlU3R1ZHlTdW1tYXJ5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBvbk9wZW5SZWNhcD86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pjtcbn07XG5cbmNvbnN0IENhc2VDYXJkID0gKHsgY2FzZVN0dWR5LCBhY3RpdmUgPSBmYWxzZSwgb25PcGVuUmVjYXAgfTogQ2FzZUNhcmRQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgcGFsZXR0ZSwgdG9rZW5zIH0gPSB0aGVtZTtcbiAgY29uc3QgaXNEYXJrID0gcGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIjtcblxuICBjb25zdCBhY3RpdmVCYWNrZ3JvdW5kID0gaXNEYXJrXG4gICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjAsIDQ1LCAxMTAsIDAuOTgpLCByZ2JhKDU4LCAxMTgsIDIyNiwgMC44OCkpXCJcbiAgICA6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNywgNzYsIDE3MCwgMC44OCksIHJnYmEoNjAsIDE1MSwgMjU1LCAwLjgyKSlcIjtcblxuICBjb25zdCBpbmFjdGl2ZUJhY2tncm91bmQgPSBpc0RhcmtcbiAgICA/IFwibGluZWFyLWdyYWRpZW50KDE0MGRlZywgcmdiYSgyMCwgMjgsIDUyLCAwLjgyKSwgcmdiYSgxMiwgMTgsIDM2LCAwLjg4KSlcIlxuICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0OCwgMjUxLCAyNTUsIDAuOTQpLCByZ2JhKDIzMiwgMjQyLCAyNTUsIDAuODgpKVwiO1xuXG4gIGNvbnN0IGhlYWRpbmdDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMjI2LCAyMzQsIDI1NSwgMC45NSlcIlxuICAgICAgOiBwYWxldHRlLnRleHQucHJpbWFyeTtcblxuICBjb25zdCBib2R5Q29sb3IgPSBhY3RpdmVcbiAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KVwiXG4gICAgOiBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDIxMCwgMjIwLCAyNTUsIDAuODIpXCJcbiAgICAgIDogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcblxuICBjb25zdCBib3JkZXJDb2xvciA9IGFjdGl2ZVxuICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpXCJcbiAgICA6IGlzRGFya1xuICAgICAgPyBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4yOClcIlxuICAgICAgOiBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMTIpXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgICBlbGV2YXRpb249ezB9XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gYWN0aXZlQmFja2dyb3VuZCA6IGluYWN0aXZlQmFja2dyb3VuZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcbiAgICAgICAgY29sb3I6IGFjdGl2ZSA/IHBhbGV0dGUuY29tbW9uLndoaXRlIDogcGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIGJveFNoYWRvdzogYWN0aXZlID8gdG9rZW5zLnNoYWRvdy5sZXZlbDMgOiB0b2tlbnMuc2hhZG93LmxldmVsMixcbiAgICAgICAgdHJhbnNpdGlvbjogdG9rZW5zLnRyYW5zaXRpb24uaG92ZXIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTZweClcIixcbiAgICAgICAgICBib3hTaGFkb3c6IHRva2Vucy5zaGFkb3cubGV2ZWwzLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBiOiAzIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV5ZWJyb3dcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE4OSwgMjA0LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FzZSB7Y2FzZVN0dWR5Lm51bWJlcn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXNlU3R1ZHkudGFnfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yNClcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjcsIDI0MSwgMjU1LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDIxNCwgMjI0LCAyNTUsIDAuOTIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWxldHRlLmJyYW5kLnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXI6IGFjdGl2ZSA/IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDNcIiBzeD17eyBjb2xvcjogaGVhZGluZ0NvbG9yIH19PlxuICAgICAgICAgICAge2Nhc2VTdHVkeS50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkucGxhdGZvcm19XG4gICAgICAgICAgICB7Y2FzZVN0dWR5LnBsYXRmb3JtRGV0YWlsICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgbWw6IDAuNzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAoe2Nhc2VTdHVkeS5wbGF0Zm9ybURldGFpbH0pXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICB7Y2FzZVN0dWR5LnN0YXQgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IGJvZHlDb2xvciB9fT5cbiAgICAgICAgICAgICAge2Nhc2VTdHVkeS5zdGF0fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gZmxleFdyYXA9XCJ3cmFwXCIgdXNlRmxleEdhcD5cbiAgICAgICAgICAgIHtjYXNlU3R1ZHkudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0YWd9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOClcIlxuICAgICAgICAgICAgICAgICAgICA6IGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgIDogaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogcGFsZXR0ZS5icmFuZC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCwgZ2FwOiAxIH19PlxuICAgICAgICB7YWN0aXZlID8gKFxuICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz17Y2FzZVN0dWR5LnRvfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dGb3J3YXJkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPXtjYXNlU3R1ZHkudG99XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgY29sb3I9e2FjdGl2ZSA/IFwiaW5oZXJpdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgb25DbGljaz17b25PcGVuUmVjYXB9XG4gICAgICAgICAgZW5kSWNvbj17PFBsYXlDaXJjbGVPdXRsaW5lUm91bmRlZEljb24gLz59XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MilcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmUgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSlcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNilcIlxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTQpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBSZWNhcFxuICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlQ2FyZDtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgSW1wYWN0U3RhdENhcmRQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEltcGFjdFN0YXRDYXJkID0gKHsgdmFsdWUsIGxhYmVsLCBkZXNjcmlwdGlvbiB9OiBJbXBhY3RTdGF0Q2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wYWN0U3RhdENhcmQ7XG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUsNERBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLHFCQUFxQjs7O0FDZXpCOzs7Ozs7Ozs7Ozs7QUNmQSxJQUFNLGVBQWUsQ0FBQyxVQUFrQixJQUFJLElBQUksT0FBTyxZQUFZLEdBQUcsRUFBRTtBQW9FakUsSUFBTSxPQUFvQjtBQUFBLEVBQy9CLFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQ0U7QUFBQSxFQUNGLGFBQWE7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxJQUFJO0FBQUEsRUFD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LFNBdkVKLGlDQXdFRTtBQUFBLHNCQUVGLHdCQTZDRSxnQkE3Q0Y7QUFBQSxRQUNFLE1BQU0sUUFBUSxxQkFBcUI7QUFBQSxRQUNuQyxTQUFTLE1BQU0scUJBQXFCLElBQUk7QUFBQSxRQUN4QyxtQkFBZ0I7QUFBQSxRQUhsQixVQUtHLHlDQUNDO0FBQUEsb0JBcUNFO0FBQUEsNEJBcENBLHdCQUVFLHFCQUZGO0FBQUEsY0FBYSxJQUFHO0FBQUEsY0FBaEIsVUFDRyxzQkFBc0IsTUFBTTtBQUFBLGVBRC9CLGlDQUVFO0FBQUEsNEJBQ0Ysd0JBZ0NFLHVCQWhDRjtBQUFBLHdCQWdDRTtBQUFBLGdDQS9CQSx3QkFXRSxlQVhGO0FBQUEsa0JBQU8sV0FBVTtBQUFBLGtCQUFLLFNBQVM7QUFBQSxrQkFBSyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQUEsa0JBQWhELFVBQ0csc0JBQXNCLE1BQU0sUUFBUSxJQUFJLENBQUMsMkJBQ3hDLHdCQU9FLG9CQVBGO0FBQUEsb0JBQ0UsV0FBVTtBQUFBLG9CQUVWLFNBQVE7QUFBQSxvQkFDUixPQUFNO0FBQUEsb0JBSlIsVUFNRztBQUFBLHFCQUpJLFFBRlAsc0JBT0UsQ0FDSDtBQUFBLG1CQVZILGlDQVdFO0FBQUEsZ0NBQ0Ysd0JBa0JFLGVBbEJGO0FBQUEsa0JBQU8sV0FBVTtBQUFBLGtCQUFNLFNBQVM7QUFBQSxrQkFBRyxJQUFJO0FBQUEsa0JBQXZDLFVBa0JFO0FBQUEsb0NBakJBLHdCQVNFLGdCQVRGO0FBQUEsc0JBQ0UsV0FBVztBQUFBLHNCQUNYLElBQUksc0JBQXNCO0FBQUEsc0JBQzFCLFNBQVE7QUFBQSxzQkFDUixXQUFTO0FBQUEsc0JBQ1QseUJBQVMsd0JBQUMsNkJBQUQscUNBQXlCO0FBQUEsc0JBQ2xDLFNBQVMsTUFBTSxxQkFBcUIsSUFBSTtBQUFBLHNCQU4xQztBQUFBLHdEQVNFO0FBQUEsb0NBQ0Ysd0JBTUUsZ0JBTkY7QUFBQSxzQkFDRSxXQUFTO0FBQUEsc0JBQ1QsU0FBUTtBQUFBLHNCQUNSLFNBQVMsTUFBTSxxQkFBcUIsSUFBSTtBQUFBLHNCQUgxQztBQUFBLHdEQU1FO0FBQUE7QUFBQSxtQkFqQkosZ0NBa0JFO0FBQUE7QUFBQSxlQS9CSixnQ0FnQ0U7QUFBQTtBQUFBLFdBcENKLGdDQXFDRTtBQUFBLFNBM0NOLGlDQTZDRTtBQUFBO0FBQUEsS0EzYUosZ0NBNGFFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMjZGOUIyQzEzQUFGOEMzRjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
