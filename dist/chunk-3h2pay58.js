import {
  VolunteerActivismRounded_default
} from "./chunk-e4bga9a6.js";
import"./chunk-56dhb304.js";
import {
  Seo_default,
  site_default
} from "./chunk-fvvawq8m.js";
import {
  Box_default,
  Button_default,
  CardContent_default,
  Card_default,
  Chip_default,
  Container_default,
  Grid_default,
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  require_react
} from "./chunk-a0eztsys.js";

// node_modules/@mui/icons-material/esm/MilitaryTechRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var MilitaryTechRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M17 10.43V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v7.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-2.22.19c-.46.04-.64.59-.3.88l1.69 1.46-.51 2.18c-.1.43.37.77.75.54L12 20.23l1.91 1.15c.38.23.85-.11.75-.54l-.51-2.18 1.69-1.46c.33-.29.16-.84-.29-.88l-2.22-.19-.99-2.34 4.18-2.51c.3-.17.48-.49.48-.85m-4 1.8-1 .6-1-.6V3h2z"
}), "MilitaryTechRounded");

// src/features/resume/components/SectionHeader.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SectionHeader = ({ icon, title }) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
  direction: "row",
  spacing: 2,
  alignItems: "center",
  children: [
    icon,
    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
      variant: "h3",
      children: title
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var SectionHeader_default = SectionHeader;

// src/features/resume/components/CertificatesSection.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var CertificatesSection = ({ certificates }) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
      spacing: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(SectionHeader_default, {
          icon: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(MilitaryTechRounded_default, {
            color: "secondary"
          }, undefined, false, undefined, this),
          title: "Certificates"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: certificates.map((certificate) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Card_default, {
              sx: { height: "100%" },
              children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
                  spacing: 1.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
                      direction: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                          variant: "h6",
                          children: certificate.name
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                          variant: "caption",
                          color: "text.secondary",
                          children: certificate.year
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: certificate.issuer
                    }, undefined, false, undefined, this),
                    certificate.description && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: certificate.description
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, `${certificate.name}-${certificate.year}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var CertificatesSection_default = CertificatesSection;

// node_modules/@mui/icons-material/esm/HistoryEduRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var HistoryEduRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "M9 5v.38c-.83-.33-1.72-.5-2.61-.5-1.42 0-2.84.43-4.05 1.29-.51.36-.57 1.09-.13 1.53l2.57 2.57h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H7c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V5c0-.55-.45-1-1-1H10c-.55 0-1 .45-1 1m-1.11 5.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34M19 17c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.55-.45-1-1-1h-5v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8z"
}), "HistoryEduRounded");

// src/features/resume/components/EducationSection.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var EducationSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
  sx: {
    py: { xs: 6, md: 8 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
      spacing: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(SectionHeader_default, {
          icon: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(HistoryEduRounded_default, {
            color: "secondary"
          }, undefined, false, undefined, this),
          title: "Education"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
          spacing: 3,
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
            sx: { p: { xs: 3, md: 4 } },
            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
              spacing: 2,
              children: [
                /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                  direction: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: item.program
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "subtitle2",
                      color: "text.secondary",
                      children: item.period
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                  variant: "subtitle1",
                  color: "text.secondary",
                  children: item.institution
                }, undefined, false, undefined, this),
                item.description && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                  variant: "body2",
                  color: "text.secondary",
                  children: item.description
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, `${item.institution}-${item.program}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var EducationSection_default = EducationSection;

// node_modules/@mui/icons-material/esm/WorkHistoryRounded.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var WorkHistoryRounded_default = createSvgIcon([/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7m-8-7h4v2h-4z"
}, "0"), /* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"
}, "1")], "WorkHistoryRounded");

// src/features/resume/components/ExperienceSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var ExperienceSection = ({
  title = "Professional Experience",
  icon = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(WorkHistoryRounded_default, {
    color: "primary"
  }, undefined, false, undefined, this),
  items
}) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
      spacing: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
          direction: "row",
          spacing: 2,
          alignItems: "center",
          children: [
            icon,
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "h3",
              children: title
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
          spacing: 3,
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
            sx: { p: { xs: 3, md: 4 } },
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              spacing: 2,
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  direction: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: item.role
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "subtitle2",
                      color: "text.secondary",
                      children: item.period
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "subtitle1",
                  color: "text.secondary",
                  children: item.company
                }, undefined, false, undefined, this),
                item.description && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "body2",
                  color: "text.secondary",
                  children: item.description
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  component: "ul",
                  spacing: 1.2,
                  sx: { pl: 2, mb: 0 },
                  children: item.highlights.map((highlight) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                    component: "li",
                    variant: "body1",
                    color: "text.secondary",
                    children: highlight
                  }, highlight, false, undefined, this))
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, `${item.company}-${item.role}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var ExperienceSection_default = ExperienceSection;

// node_modules/@mui/icons-material/esm/DownloadRounded.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var DownloadRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime4.jsx("path", {
  d: "M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"
}), "DownloadRounded");

// src/features/resume/components/HeaderSection.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var HeaderSection = ({ summary, actions }) => {
  const handleDownload = import_react.useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
    sx: {
      py: { xs: 6, md: 8 },
      background: "linear-gradient(135deg, rgba(31,111,235,0.1), rgba(90,200,250,0.14))"
    },
    children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
        spacing: 2,
        alignItems: "center",
        textAlign: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "overline",
            color: "secondary",
            children: summary.subtitle
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "h2",
            children: summary.title
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
            direction: "row",
            spacing: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Chip_default, {
                label: "LinkedIn",
                component: "a",
                href: "https://www.linkedin.com/in/msadri/",
                target: "_blank",
                clickable: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Chip_default, {
                label: "Portfolio",
                component: "a",
                href: "https://masihsadri.com",
                target: "_blank",
                clickable: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Chip_default, {
                label: "sadrimasih@gmail.com",
                component: "a",
                href: "mailto:sadrimasih@gmail.com",
                clickable: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Chip_default, {
                label: "Tehran, Iran • Willing to relocate"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { maxWidth: 720 },
            children: summary.description
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Button_default, {
            component: "a",
            href: actions.href,
            variant: "contained",
            color: "primary",
            size: "large",
            startIcon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(DownloadRounded_default, {}, undefined, false, undefined, this),
            onClick: handleDownload,
            children: actions.label
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var HeaderSection_default = HeaderSection;

// src/features/resume/components/SkillsSection.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var SkillsSection = ({ categories }) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
      spacing: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(SectionHeader_default, {
          icon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(MilitaryTechRounded_default, {
            color: "primary"
          }, undefined, false, undefined, this),
          title: "Skills"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: categories.map((category) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
            size: { xs: 12, md: 4 },
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Card_default, {
              sx: { height: "100%" },
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                  spacing: 2,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                      variant: "h6",
                      children: category.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                      component: "ul",
                      spacing: 1,
                      sx: { pl: 2, mb: 0 },
                      children: category.skills.map((skill) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                        component: "li",
                        variant: "body2",
                        color: "text.secondary",
                        children: skill
                      }, skill, false, undefined, this))
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, category.title, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var SkillsSection_default = SkillsSection;

// src/features/resume/components/VolunteerSection.tsx
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var VolunteerSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
  sx: {
    py: { xs: 6, md: 8 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
      spacing: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(SectionHeader_default, {
          icon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(VolunteerActivismRounded_default, {
            color: "secondary"
          }, undefined, false, undefined, this),
          title: "Volunteer Activity"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
          spacing: 3,
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Card_default, {
            sx: { p: { xs: 3, md: 4 } },
            children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
              spacing: 2,
              children: [
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
                  direction: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: item.role
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                      variant: "subtitle2",
                      color: "text.secondary",
                      children: item.period
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                  variant: "subtitle1",
                  color: "text.secondary",
                  children: item.organization
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  children: item.description
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, `${item.organization}-${item.role}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var VolunteerSection_default = VolunteerSection;

// src/features/resume/data/content.ts
var resumeSummary = {
  title: "Masih Sadri",
  subtitle: "Senior Product Designer",
  description: "Data-driven Product Designer with 6+ years of experience improving experiences for 40M+ users. Impact-oriented with hands-on experience in two semi-unicorn tech companies (Divar, IR-MCI), designing for both B2B and B2C products across embedded, centralized, and single-threaded team structures."
};
var resumeActions = {
  label: "Download Resume (PDF)",
  href: "/Masih-Sadri-Resume.pdf"
};
var professionalExperience = [
  {
    company: "Persol | B2B/B2C marketplace, early-stage growth",
    role: "Senior Product Designer",
    period: "October 2024 – August 2025 · Hybrid, Full-time | 11 months",
    description: "Lead designer guiding product vision and delivering high-impact experiments across the funnel.",
    highlights: [
      "Redesigned the sign-up flow through data-driven funnel analysis, eliminating major friction points and achieving an 80% increase in lead generation within 3 months.",
      "Developed a scalable design kit from scratch, standardizing UI patterns and improving design-to-development handoff efficiency across the team."
    ]
  },
  {
    company: "Divar | Top regional classifieds platform | 50M+ users",
    role: "Senior User Experience Designer",
    period: "April 2022 – September 2024 · Hybrid, Full-time | 2 years 6 months",
    description: "Trusted partner across Trust & Safety, Growth, and Core Experience initiatives.",
    highlights: [
      "Designed and launched a Secure Call System with the Trust & Safety team, achieving a 60% reduction in harassment incidents and strengthening user trust.",
      "Improved search experience by introducing the Nearby Cities feature, reducing bounce rate by 25%.",
      "Optimized post-ad submission flow, streamlining form fields and lowering redundant chat conversations by 12%.",
      "Implemented a new ticketing workflow, improving customer-support efficiency and reducing user wait times by 20%."
    ]
  },
  {
    company: "IR MCI - Setare Aval | Fintech services + USSD + Mobile service | Nationwide scale",
    role: "Product Designer",
    period: "June 2019 – March 2022 · On-site, Full-time | 2 years 10 months",
    description: "Shaped cross-functional feature development and design systems for nationwide financial products.",
    highlights: [
      "Built Morph, a scalable design system ensuring visual consistency, used by 8,300+ designers.",
      "Gamified the referral-sharing experience, turning 60,000+ subscribers into daily active users and boosting retention.",
      "Increased bill-payment share from 6% to 47% of total payment through in-depth interviews."
    ]
  }
];
var volunteerExperience = [
  {
    organization: "Rahnema College | Professional bootcamps + Internship programs",
    role: "Design Mentor",
    period: "June 2022 – Present · Seasonal",
    description: "Mentored over 200 aspiring designers, introduced gamified learning techniques, and bridged academia with industry practices."
  }
];
var skillCategories = [
  {
    title: "Research & Strategy",
    skills: [
      "Usability Testing & Interview",
      "Market & Competitive Analysis",
      "Roadmapping & OKR Alignment",
      "Insight Gathering: Clarity, GA, HotJar"
    ]
  },
  {
    title: "Design",
    skills: [
      "Design Systems & UI Kits",
      "User Interface Design (UI)",
      "Wireframing & Prototyping",
      "Interaction & Micro-interactions"
    ]
  },
  {
    title: "Technical Tools & Data Analytics",
    skills: [
      "Figma, Framer, Claude, Cursor, NotebookLM",
      "Business Metrics & Funnel Analytics (CRO)",
      "Data Preprocessing & Statistical Analysis",
      "BI Tools and Dashboards"
    ]
  }
];
var resumeEducation = [
  {
    institution: "Payame Noor University",
    program: "BSc. in Project Management Engineering",
    period: "September 2015 – August 2018",
    description: "Teaching Assistant, appointed by Dr. E. Rajabi, Head of the Science Committee. Member of the Civil Engineering and Project Management scientific society."
  }
];
var resumeCertificates = [
  {
    name: "Data Analysis BootCamp",
    issuer: "Rahnema College",
    year: "July 2025",
    description: "170h • Data Preprocessing, Business Metrics, BI Tools, Introductory Python, Storytelling with Data, Statistical Inference, A/B Testing."
  },
  {
    name: "IELTS (Academic)",
    issuer: "International Development Program (IDP)",
    year: "May 2022",
    description: "Overall Score 7.0."
  },
  {
    name: "Conducting Usability Testing",
    issuer: "Interaction Design Foundation",
    year: "July 2021"
  },
  {
    name: "UI/UX Design BootCamp",
    issuer: "Rahnema College",
    year: "July 2019",
    description: "150h intensive bootcamp."
  },
  {
    name: "Product Design and Advanced UX Design",
    issuer: "Sharif University of Technology + University of Tehran",
    year: "May 2019",
    description: "98h dual-institution training."
  }
];

// src/features/resume/seo.ts
var siteUrl = site_default();
var resumeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Masih Sadri — Resume",
  description: resumeSummary.description,
  url: `${siteUrl}/resume`,
  about: {
    "@type": "Person",
    name: resumeSummary.title,
    jobTitle: resumeSummary.subtitle,
    email: "sadrimasih@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR"
    }
  }
};
var resumePageMetadata = {
  title: "Masih Sadri — Senior Product Designer Resume",
  description: "Review Masih Sadri’s senior product designer resume covering trust & safety, growth, design systems, and leadership experience.",
  canonicalPath: "/resume",
  openGraph: {
    type: "article"
  },
  structuredData: resumeStructuredData
};

// src/features/resume/ResumePage.tsx
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var ResumePage = () => {
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Seo_default, {
        ...resumePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(HeaderSection_default, {
        summary: resumeSummary,
        actions: resumeActions
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ExperienceSection_default, {
        items: professionalExperience
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(VolunteerSection_default, {
        items: volunteerExperience
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(SkillsSection_default, {
        categories: skillCategories
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(EducationSection_default, {
        items: resumeEducation
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(CertificatesSection_default, {
        certificates: resumeCertificates
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ResumePage_default = ResumePage;
export {
  ResumePage_default as default
};

//# debugId=E4E4B030DD44DA0764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL01pbGl0YXJ5VGVjaFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvY29tcG9uZW50cy9DZXJ0aWZpY2F0ZXNTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vSGlzdG9yeUVkdVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL0VkdWNhdGlvblNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Xb3JrSGlzdG9yeVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL0V4cGVyaWVuY2VTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRG93bmxvYWRSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvY29tcG9uZW50cy9IZWFkZXJTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvU2tpbGxzU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL1ZvbHVudGVlclNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvUmVzdW1lUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE3IDEwLjQzVjNjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXY3LjQzYzAgLjM1LjE4LjY4LjQ5Ljg2bDQuMTggMi41MS0uOTkgMi4zNC0yLjIyLjE5Yy0uNDYuMDQtLjY0LjU5LS4zLjg4bDEuNjkgMS40Ni0uNTEgMi4xOGMtLjEuNDMuMzcuNzcuNzUuNTRMMTIgMjAuMjNsMS45MSAxLjE1Yy4zOC4yMy44NS0uMTEuNzUtLjU0bC0uNTEtMi4xOCAxLjY5LTEuNDZjLjMzLS4yOS4xNi0uODQtLjI5LS44OGwtMi4yMi0uMTktLjk5LTIuMzQgNC4xOC0yLjUxYy4zLS4xNy40OC0uNDkuNDgtLjg1bS00IDEuOC0xIC42LTEtLjZWM2gyelwiXG59KSwgJ01pbGl0YXJ5VGVjaFJvdW5kZWQnKTsiLAogICAgImltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgU2VjdGlvbkhlYWRlclByb3BzID0ge1xuICBpY29uPzogUmVhY3ROb2RlO1xuICB0aXRsZTogc3RyaW5nO1xufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7IGljb24sIHRpdGxlIH06IFNlY3Rpb25IZWFkZXJQcm9wcykgPT4gKFxuICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgIHtpY29ufVxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gIDwvU3RhY2s+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyO1xuXG5cbiIsCiAgICAiaW1wb3J0IE1pbGl0YXJ5VGVjaFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01pbGl0YXJ5VGVjaFJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IHR5cGUgeyBDZXJ0aWZpY2F0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzID0ge1xuICBjZXJ0aWZpY2F0ZXM6IFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGlvbj47XG59O1xuXG5jb25zdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uID0gKHsgY2VydGlmaWNhdGVzIH06IENlcnRpZmljYXRlc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIGljb249ezxNaWxpdGFyeVRlY2hSb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fSB0aXRsZT1cIkNlcnRpZmljYXRlc1wiIC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7Y2VydGlmaWNhdGVzLm1hcCgoY2VydGlmaWNhdGUpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2Ake2NlcnRpZmljYXRlLm5hbWV9LSR7Y2VydGlmaWNhdGUueWVhcn1gfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y2VydGlmaWNhdGUubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUueWVhcn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuaXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRlc1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOSA1di4zOGMtLjgzLS4zMy0xLjcyLS41LTIuNjEtLjUtMS40MiAwLTIuODQuNDMtNC4wNSAxLjI5LS41MS4zNi0uNTcgMS4wOS0uMTMgMS41M2wyLjU3IDIuNTdoMS4xMXYxLjExYy44Ni44NiAxLjk4IDEuMzEgMy4xMSAxLjM2VjE1SDdjLS41NSAwLTEgLjQ1LTEgMXYyYzAgMS4xLjkgMiAyIDJoMTBjMS42NiAwIDMtMS4zNCAzLTNWNWMwLS41NS0uNDUtMS0xLTFIMTBjLS41NSAwLTEgLjQ1LTEgMW0tMS4xMSA1LjQxVjguMjZINS42MUw0LjU3IDcuMjJhNS4wNyA1LjA3IDAgMCAxIDEuODItLjM0YzEuMzQgMCAyLjU5LjUyIDMuNTQgMS40NmwxLjQxIDEuNDEtLjIuMmMtLjUxLjUxLTEuMTkuOC0xLjkyLjgtLjQ3IDAtLjkzLS4xMi0xLjMzLS4zNE0xOSAxN2MwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMXYtMWMwLS41NS0uNDUtMS0xLTFoLTV2LTIuNTljLjU3LS4yMyAxLjEtLjU3IDEuNTYtMS4wM2wuMi0uMkwxNS41OSAxNEgxN3YtMS40MWwtNi01Ljk3VjZoOHpcIlxufSksICdIaXN0b3J5RWR1Um91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEhpc3RvcnlFZHVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9IaXN0b3J5RWR1Um91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IHR5cGUgeyBFZHVjYXRpb25JdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgRWR1Y2F0aW9uU2VjdGlvblByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPjtcbn07XG5cbmNvbnN0IEVkdWNhdGlvblNlY3Rpb24gPSAoeyBpdGVtcyB9OiBFZHVjYXRpb25TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIGljb249ezxIaXN0b3J5RWR1Um91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn0gdGl0bGU9XCJFZHVjYXRpb25cIiAvPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtgJHtpdGVtLmluc3RpdHV0aW9ufS0ke2l0ZW0ucHJvZ3JhbX1gfSBzeD17eyBwOiB7IHhzOiAzLCBtZDogNCB9IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS5wcm9ncmFtfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnBlcmlvZH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb25TZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKFsvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOCAxMWMxLjQ5IDAgMi44Ny40NyA0IDEuMjZWOGMwLTEuMTEtLjg5LTItMi0yaC00VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmg3LjY4Yy0uNDMtLjkxLS42OC0xLjkyLS42OC0zIDAtMy44NyAzLjEzLTcgNy03bS04LTdoNHYyaC00elwiXG59LCBcIjBcIiksIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4IDEzYy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNW0xLjY1IDcuMzVMMTcuNSAxOC4yVjE1aDF2Mi43OWwxLjg1IDEuODV6XCJcbn0sIFwiMVwiKV0sICdXb3JrSGlzdG9yeVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBXb3JrSGlzdG9yeVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1dvcmtIaXN0b3J5Um91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBUaW1lbGluZUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBFeHBlcmllbmNlU2VjdGlvblByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8VGltZWxpbmVJdGVtPjtcbn07XG5cbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uID0gKHtcbiAgdGl0bGUgPSBcIlByb2Zlc3Npb25hbCBFeHBlcmllbmNlXCIsXG4gIGljb24gPSA8V29ya0hpc3RvcnlSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPixcbiAgaXRlbXMsXG59OiBFeHBlcmllbmNlU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtgJHtpdGVtLmNvbXBhbnl9LSR7aXRlbS5yb2xlfWB9IHN4PXt7IHA6IHsgeHM6IDMsIG1kOiA0IH0gfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntpdGVtLnJvbGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGVyaW9kfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxLjJ9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtoaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2LjU5IDlIMTVWNGMwLS41NS0uNDUtMS0xLTFoLTRjLS41NSAwLTEgLjQ1LTEgMXY1SDcuNDFjLS44OSAwLTEuMzQgMS4wOC0uNzEgMS43MWw0LjU5IDQuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwbDQuNTktNC41OWMuNjMtLjYzLjE5LTEuNzEtLjctMS43MU01IDE5YzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDZjLS41NSAwLTEgLjQ1LTEgMVwiXG59KSwgJ0Rvd25sb2FkUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IERvd25sb2FkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRG93bmxvYWRSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2hpcCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IFJlc3VtZUFjdGlvbiwgUmVzdW1lU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlYWRlclNlY3Rpb25Qcm9wcyA9IHtcbiAgc3VtbWFyeTogUmVzdW1lU3VtbWFyeTtcbiAgYWN0aW9uczogUmVzdW1lQWN0aW9uO1xufTtcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9ICh7IHN1bW1hcnksIGFjdGlvbnMgfTogSGVhZGVyU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsMTExLDIzNSwwLjEpLCByZ2JhKDkwLDIwMCwyNTAsMC4xNCkpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtzdW1tYXJ5LnN1YnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57c3VtbWFyeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBsYWJlbD1cIkxpbmtlZEluXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIGxhYmVsPVwiUG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21hc2loc2FkcmkuY29tXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoaXAgbGFiZWw9XCJzYWRyaW1hc2loQGdtYWlsLmNvbVwiIGNvbXBvbmVudD1cImFcIiBocmVmPVwibWFpbHRvOnNhZHJpbWFzaWhAZ21haWwuY29tXCIgY2xpY2thYmxlIC8+XG4gICAgICAgICAgICA8Q2hpcCBsYWJlbD1cIlRlaHJhbiwgSXJhbiDigKIgV2lsbGluZyB0byByZWxvY2F0ZVwiIC8+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWF4V2lkdGg6IDcyMCB9fT5cbiAgICAgICAgICAgIHtzdW1tYXJ5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgIGhyZWY9e2FjdGlvbnMuaHJlZn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBzdGFydEljb249ezxEb3dubG9hZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FjdGlvbnMubGFiZWx9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgTWlsaXRhcnlUZWNoUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWlsaXRhcnlUZWNoUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFNraWxsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBTa2lsbHNTZWN0aW9uUHJvcHMgPSB7XG4gIGNhdGVnb3JpZXM6IFJlYWRvbmx5QXJyYXk8U2tpbGxDYXRlZ29yeT47XG59O1xuXG5jb25zdCBTa2lsbHNTZWN0aW9uID0gKHsgY2F0ZWdvcmllcyB9OiBTa2lsbHNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBpY29uPXs8TWlsaXRhcnlUZWNoUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz59IHRpdGxlPVwiU2tpbGxzXCIgLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2NhdGVnb3J5LnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjYXRlZ29yeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezF9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc2tpbGxzLm1hcCgoc2tpbGwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtza2lsbH0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2tpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFZvbHVudGVlckV4cGVyaWVuY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBWb2x1bnRlZXJTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PFZvbHVudGVlckV4cGVyaWVuY2U+O1xufTtcblxuY29uc3QgVm9sdW50ZWVyU2VjdGlvbiA9ICh7IGl0ZW1zIH06IFZvbHVudGVlclNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBpY29uPXs8Vm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fVxuICAgICAgICAgIHRpdGxlPVwiVm9sdW50ZWVyIEFjdGl2aXR5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17YCR7aXRlbS5vcmdhbml6YXRpb259LSR7aXRlbS5yb2xlfWB9IHN4PXt7IHA6IHsgeHM6IDMsIG1kOiA0IH0gfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntpdGVtLnJvbGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGVyaW9kfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm9yZ2FuaXphdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBWb2x1bnRlZXJTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUge1xuICBDZXJ0aWZpY2F0aW9uLFxuICBFZHVjYXRpb25JdGVtLFxuICBSZXN1bWVBY3Rpb24sXG4gIFJlc3VtZVN1bW1hcnksXG4gIFNraWxsQ2F0ZWdvcnksXG4gIFRpbWVsaW5lSXRlbSxcbiAgVm9sdW50ZWVyRXhwZXJpZW5jZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCByZXN1bWVTdW1tYXJ5OiBSZXN1bWVTdW1tYXJ5ID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaVwiLFxuICBzdWJ0aXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkRhdGEtZHJpdmVuIFByb2R1Y3QgRGVzaWduZXIgd2l0aCA2KyB5ZWFycyBvZiBleHBlcmllbmNlIGltcHJvdmluZyBleHBlcmllbmNlcyBmb3IgNDBNKyB1c2Vycy4gSW1wYWN0LW9yaWVudGVkIHdpdGggaGFuZHMtb24gZXhwZXJpZW5jZSBpbiB0d28gc2VtaS11bmljb3JuIHRlY2ggY29tcGFuaWVzIChEaXZhciwgSVItTUNJKSwgZGVzaWduaW5nIGZvciBib3RoIEIyQiBhbmQgQjJDIHByb2R1Y3RzIGFjcm9zcyBlbWJlZGRlZCwgY2VudHJhbGl6ZWQsIGFuZCBzaW5nbGUtdGhyZWFkZWQgdGVhbSBzdHJ1Y3R1cmVzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlc3VtZUFjdGlvbnM6IFJlc3VtZUFjdGlvbiA9IHtcbiAgbGFiZWw6IFwiRG93bmxvYWQgUmVzdW1lIChQREYpXCIsXG4gIGhyZWY6IFwiL01hc2loLVNhZHJpLVJlc3VtZS5wZGZcIixcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9mZXNzaW9uYWxFeHBlcmllbmNlOiBSZWFkb25seUFycmF5PFRpbWVsaW5lSXRlbT4gPSBbXG4gIHtcbiAgICBjb21wYW55OiBcIlBlcnNvbCB8IEIyQi9CMkMgbWFya2V0cGxhY2UsIGVhcmx5LXN0YWdlIGdyb3d0aFwiLFxuICAgIHJvbGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBwZXJpb2Q6IFwiT2N0b2JlciAyMDI0IOKAkyBBdWd1c3QgMjAyNSDCtyBIeWJyaWQsIEZ1bGwtdGltZSB8IDExIG1vbnRoc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMZWFkIGRlc2lnbmVyIGd1aWRpbmcgcHJvZHVjdCB2aXNpb24gYW5kIGRlbGl2ZXJpbmcgaGlnaC1pbXBhY3QgZXhwZXJpbWVudHMgYWNyb3NzIHRoZSBmdW5uZWwuXCIsXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJSZWRlc2lnbmVkIHRoZSBzaWduLXVwIGZsb3cgdGhyb3VnaCBkYXRhLWRyaXZlbiBmdW5uZWwgYW5hbHlzaXMsIGVsaW1pbmF0aW5nIG1ham9yIGZyaWN0aW9uIHBvaW50cyBhbmQgYWNoaWV2aW5nIGFuIDgwJSBpbmNyZWFzZSBpbiBsZWFkIGdlbmVyYXRpb24gd2l0aGluIDMgbW9udGhzLlwiLFxuICAgICAgXCJEZXZlbG9wZWQgYSBzY2FsYWJsZSBkZXNpZ24ga2l0IGZyb20gc2NyYXRjaCwgc3RhbmRhcmRpemluZyBVSSBwYXR0ZXJucyBhbmQgaW1wcm92aW5nIGRlc2lnbi10by1kZXZlbG9wbWVudCBoYW5kb2ZmIGVmZmljaWVuY3kgYWNyb3NzIHRoZSB0ZWFtLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb21wYW55OiBcIkRpdmFyIHwgVG9wIHJlZ2lvbmFsIGNsYXNzaWZpZWRzIHBsYXRmb3JtIHwgNTBNKyB1c2Vyc1wiLFxuICAgIHJvbGU6IFwiU2VuaW9yIFVzZXIgRXhwZXJpZW5jZSBEZXNpZ25lclwiLFxuICAgIHBlcmlvZDogXCJBcHJpbCAyMDIyIOKAkyBTZXB0ZW1iZXIgMjAyNCDCtyBIeWJyaWQsIEZ1bGwtdGltZSB8IDIgeWVhcnMgNiBtb250aHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcnVzdGVkIHBhcnRuZXIgYWNyb3NzIFRydXN0ICYgU2FmZXR5LCBHcm93dGgsIGFuZCBDb3JlIEV4cGVyaWVuY2UgaW5pdGlhdGl2ZXMuXCIsXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJEZXNpZ25lZCBhbmQgbGF1bmNoZWQgYSBTZWN1cmUgQ2FsbCBTeXN0ZW0gd2l0aCB0aGUgVHJ1c3QgJiBTYWZldHkgdGVhbSwgYWNoaWV2aW5nIGEgNjAlIHJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50cyBhbmQgc3RyZW5ndGhlbmluZyB1c2VyIHRydXN0LlwiLFxuICAgICAgXCJJbXByb3ZlZCBzZWFyY2ggZXhwZXJpZW5jZSBieSBpbnRyb2R1Y2luZyB0aGUgTmVhcmJ5IENpdGllcyBmZWF0dXJlLCByZWR1Y2luZyBib3VuY2UgcmF0ZSBieSAyNSUuXCIsXG4gICAgICBcIk9wdGltaXplZCBwb3N0LWFkIHN1Ym1pc3Npb24gZmxvdywgc3RyZWFtbGluaW5nIGZvcm0gZmllbGRzIGFuZCBsb3dlcmluZyByZWR1bmRhbnQgY2hhdCBjb252ZXJzYXRpb25zIGJ5IDEyJS5cIixcbiAgICAgIFwiSW1wbGVtZW50ZWQgYSBuZXcgdGlja2V0aW5nIHdvcmtmbG93LCBpbXByb3ZpbmcgY3VzdG9tZXItc3VwcG9ydCBlZmZpY2llbmN5IGFuZCByZWR1Y2luZyB1c2VyIHdhaXQgdGltZXMgYnkgMjAlLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb21wYW55OiBcIklSIE1DSSAtIFNldGFyZSBBdmFsIHwgRmludGVjaCBzZXJ2aWNlcyArIFVTU0QgKyBNb2JpbGUgc2VydmljZSB8IE5hdGlvbndpZGUgc2NhbGVcIixcbiAgICByb2xlOiBcIlByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBwZXJpb2Q6IFwiSnVuZSAyMDE5IOKAkyBNYXJjaCAyMDIyIMK3IE9uLXNpdGUsIEZ1bGwtdGltZSB8IDIgeWVhcnMgMTAgbW9udGhzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNoYXBlZCBjcm9zcy1mdW5jdGlvbmFsIGZlYXR1cmUgZGV2ZWxvcG1lbnQgYW5kIGRlc2lnbiBzeXN0ZW1zIGZvciBuYXRpb253aWRlIGZpbmFuY2lhbCBwcm9kdWN0cy5cIixcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkJ1aWx0IE1vcnBoLCBhIHNjYWxhYmxlIGRlc2lnbiBzeXN0ZW0gZW5zdXJpbmcgdmlzdWFsIGNvbnNpc3RlbmN5LCB1c2VkIGJ5IDgsMzAwKyBkZXNpZ25lcnMuXCIsXG4gICAgICBcIkdhbWlmaWVkIHRoZSByZWZlcnJhbC1zaGFyaW5nIGV4cGVyaWVuY2UsIHR1cm5pbmcgNjAsMDAwKyBzdWJzY3JpYmVycyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2VycyBhbmQgYm9vc3RpbmcgcmV0ZW50aW9uLlwiLFxuICAgICAgXCJJbmNyZWFzZWQgYmlsbC1wYXltZW50IHNoYXJlIGZyb20gNiUgdG8gNDclIG9mIHRvdGFsIHBheW1lbnQgdGhyb3VnaCBpbi1kZXB0aCBpbnRlcnZpZXdzLlwiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgdm9sdW50ZWVyRXhwZXJpZW5jZTogUmVhZG9ubHlBcnJheTxWb2x1bnRlZXJFeHBlcmllbmNlPiA9IFtcbiAge1xuICAgIG9yZ2FuaXphdGlvbjogXCJSYWhuZW1hIENvbGxlZ2UgfCBQcm9mZXNzaW9uYWwgYm9vdGNhbXBzICsgSW50ZXJuc2hpcCBwcm9ncmFtc1wiLFxuICAgIHJvbGU6IFwiRGVzaWduIE1lbnRvclwiLFxuICAgIHBlcmlvZDogXCJKdW5lIDIwMjIg4oCTIFByZXNlbnQgwrcgU2Vhc29uYWxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTWVudG9yZWQgb3ZlciAyMDAgYXNwaXJpbmcgZGVzaWduZXJzLCBpbnRyb2R1Y2VkIGdhbWlmaWVkIGxlYXJuaW5nIHRlY2huaXF1ZXMsIGFuZCBicmlkZ2VkIGFjYWRlbWlhIHdpdGggaW5kdXN0cnkgcHJhY3RpY2VzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNraWxsQ2F0ZWdvcmllczogUmVhZG9ubHlBcnJheTxTa2lsbENhdGVnb3J5PiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlJlc2VhcmNoICYgU3RyYXRlZ3lcIixcbiAgICBza2lsbHM6IFtcbiAgICAgIFwiVXNhYmlsaXR5IFRlc3RpbmcgJiBJbnRlcnZpZXdcIixcbiAgICAgIFwiTWFya2V0ICYgQ29tcGV0aXRpdmUgQW5hbHlzaXNcIixcbiAgICAgIFwiUm9hZG1hcHBpbmcgJiBPS1IgQWxpZ25tZW50XCIsXG4gICAgICBcIkluc2lnaHQgR2F0aGVyaW5nOiBDbGFyaXR5LCBHQSwgSG90SmFyXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnblwiLFxuICAgIHNraWxsczogW1xuICAgICAgXCJEZXNpZ24gU3lzdGVtcyAmIFVJIEtpdHNcIixcbiAgICAgIFwiVXNlciBJbnRlcmZhY2UgRGVzaWduIChVSSlcIixcbiAgICAgIFwiV2lyZWZyYW1pbmcgJiBQcm90b3R5cGluZ1wiLFxuICAgICAgXCJJbnRlcmFjdGlvbiAmIE1pY3JvLWludGVyYWN0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUZWNobmljYWwgVG9vbHMgJiBEYXRhIEFuYWx5dGljc1wiLFxuICAgIHNraWxsczogW1xuICAgICAgXCJGaWdtYSwgRnJhbWVyLCBDbGF1ZGUsIEN1cnNvciwgTm90ZWJvb2tMTVwiLFxuICAgICAgXCJCdXNpbmVzcyBNZXRyaWNzICYgRnVubmVsIEFuYWx5dGljcyAoQ1JPKVwiLFxuICAgICAgXCJEYXRhIFByZXByb2Nlc3NpbmcgJiBTdGF0aXN0aWNhbCBBbmFseXNpc1wiLFxuICAgICAgXCJCSSBUb29scyBhbmQgRGFzaGJvYXJkc1wiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcmVzdW1lRWR1Y2F0aW9uOiBSZWFkb25seUFycmF5PEVkdWNhdGlvbkl0ZW0+ID0gW1xuICB7XG4gICAgaW5zdGl0dXRpb246IFwiUGF5YW1lIE5vb3IgVW5pdmVyc2l0eVwiLFxuICAgIHByb2dyYW06IFwiQlNjLiBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBwZXJpb2Q6IFwiU2VwdGVtYmVyIDIwMTUg4oCTIEF1Z3VzdCAyMDE4XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRlYWNoaW5nIEFzc2lzdGFudCwgYXBwb2ludGVkIGJ5IERyLiBFLiBSYWphYmksIEhlYWQgb2YgdGhlIFNjaWVuY2UgQ29tbWl0dGVlLiBNZW1iZXIgb2YgdGhlIENpdmlsIEVuZ2luZWVyaW5nIGFuZCBQcm9qZWN0IE1hbmFnZW1lbnQgc2NpZW50aWZpYyBzb2NpZXR5LlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlc3VtZUNlcnRpZmljYXRlczogUmVhZG9ubHlBcnJheTxDZXJ0aWZpY2F0aW9uPiA9IFtcbiAge1xuICAgIG5hbWU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGlzc3VlcjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICB5ZWFyOiBcIkp1bHkgMjAyNVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCIxNzBoIOKAoiBEYXRhIFByZXByb2Nlc3NpbmcsIEJ1c2luZXNzIE1ldHJpY3MsIEJJIFRvb2xzLCBJbnRyb2R1Y3RvcnkgUHl0aG9uLCBTdG9yeXRlbGxpbmcgd2l0aCBEYXRhLCBTdGF0aXN0aWNhbCBJbmZlcmVuY2UsIEEvQiBUZXN0aW5nLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJJRUxUUyAoQWNhZGVtaWMpXCIsXG4gICAgaXNzdWVyOiBcIkludGVybmF0aW9uYWwgRGV2ZWxvcG1lbnQgUHJvZ3JhbSAoSURQKVwiLFxuICAgIHllYXI6IFwiTWF5IDIwMjJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPdmVyYWxsIFNjb3JlIDcuMC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29uZHVjdGluZyBVc2FiaWxpdHkgVGVzdGluZ1wiLFxuICAgIGlzc3VlcjogXCJJbnRlcmFjdGlvbiBEZXNpZ24gRm91bmRhdGlvblwiLFxuICAgIHllYXI6IFwiSnVseSAyMDIxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlVJL1VYIERlc2lnbiBCb290Q2FtcFwiLFxuICAgIGlzc3VlcjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICB5ZWFyOiBcIkp1bHkgMjAxOVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIjE1MGggaW50ZW5zaXZlIGJvb3RjYW1wLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9kdWN0IERlc2lnbiBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaXNzdWVyOiBcIlNoYXJpZiBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3kgKyBVbml2ZXJzaXR5IG9mIFRlaHJhblwiLFxuICAgIHllYXI6IFwiTWF5IDIwMTlcIixcbiAgICBkZXNjcmlwdGlvbjogXCI5OGggZHVhbC1pbnN0aXR1dGlvbiB0cmFpbmluZy5cIixcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyByZXN1bWVTdW1tYXJ5IH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IHJlc3VtZVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBSZXN1bWVcIixcbiAgZGVzY3JpcHRpb246IHJlc3VtZVN1bW1hcnkuZGVzY3JpcHRpb24sXG4gIHVybDogYCR7c2l0ZVVybH0vcmVzdW1lYCxcbiAgYWJvdXQ6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogcmVzdW1lU3VtbWFyeS50aXRsZSxcbiAgICBqb2JUaXRsZTogcmVzdW1lU3VtbWFyeS5zdWJ0aXRsZSxcbiAgICBlbWFpbDogXCJzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICAgIGFkZHJlc3M6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJQb3N0YWxBZGRyZXNzXCIsXG4gICAgICBhZGRyZXNzTG9jYWxpdHk6IFwiVGVocmFuXCIsXG4gICAgICBhZGRyZXNzQ291bnRyeTogXCJJUlwiLFxuICAgIH0sXG4gIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcmVzdW1lUGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciBSZXN1bWVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJSZXZpZXcgTWFzaWggU2FkcmnigJlzIHNlbmlvciBwcm9kdWN0IGRlc2lnbmVyIHJlc3VtZSBjb3ZlcmluZyB0cnVzdCAmIHNhZmV0eSwgZ3Jvd3RoLCBkZXNpZ24gc3lzdGVtcywgYW5kIGxlYWRlcnNoaXAgZXhwZXJpZW5jZS5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvcmVzdW1lXCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogcmVzdW1lU3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvblwiO1xuaW1wb3J0IEVkdWNhdGlvblNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FZHVjYXRpb25TZWN0aW9uXCI7XG5pbXBvcnQgRXhwZXJpZW5jZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FeHBlcmllbmNlU2VjdGlvblwiO1xuaW1wb3J0IEhlYWRlclNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJTZWN0aW9uXCI7XG5pbXBvcnQgU2tpbGxzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1NraWxsc1NlY3Rpb25cIjtcbmltcG9ydCBWb2x1bnRlZXJTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvVm9sdW50ZWVyU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgcHJvZmVzc2lvbmFsRXhwZXJpZW5jZSxcbiAgcmVzdW1lQWN0aW9ucyxcbiAgcmVzdW1lQ2VydGlmaWNhdGVzLFxuICByZXN1bWVFZHVjYXRpb24sXG4gIHJlc3VtZVN1bW1hcnksXG4gIHNraWxsQ2F0ZWdvcmllcyxcbiAgdm9sdW50ZWVyRXhwZXJpZW5jZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyByZXN1bWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgUmVzdW1lUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4ucmVzdW1lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVhZGVyU2VjdGlvbiBzdW1tYXJ5PXtyZXN1bWVTdW1tYXJ5fSBhY3Rpb25zPXtyZXN1bWVBY3Rpb25zfSAvPlxuICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uIGl0ZW1zPXtwcm9mZXNzaW9uYWxFeHBlcmllbmNlfSAvPlxuICAgICAgPFZvbHVudGVlclNlY3Rpb24gaXRlbXM9e3ZvbHVudGVlckV4cGVyaWVuY2V9IC8+XG4gICAgICA8U2tpbGxzU2VjdGlvbiBjYXRlZ29yaWVzPXtza2lsbENhdGVnb3JpZXN9IC8+XG4gICAgICA8RWR1Y2F0aW9uU2VjdGlvbiBpdGVtcz17cmVzdW1lRWR1Y2F0aW9ufSAvPlxuICAgICAgPENlcnRpZmljYXRlc1NlY3Rpb24gY2VydGlmaWNhdGVzPXtyZXN1bWVDZXJ0aWZpY2F0ZXN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWVQYWdlO1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUsNERBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLHFCQUFxQjs7OztBQ0V6QixJQUFNLGdCQUFnQixHQUFHLE1BQU0sNEJBQzdCLHVCQUdFLGVBSEY7QUFBQSxFQUFPLFdBQVU7QUFBQSxFQUFNLFNBQVM7QUFBQSxFQUFHLFlBQVc7QUFBQSxFQUE5QyxVQUdFO0FBQUEsSUFGQztBQUFBLG9CQUNELHVCQUFrQyxvQkFBbEM7QUFBQSxNQUFZLFNBQVE7QUFBQSxNQUFwQixVQUEwQjtBQUFBLE9BQTFCLGlDQUFrQztBQUFBO0FBQUEsR0FGcEMsZ0NBR0U7QUFHSixJQUFlOzs7O0FDRWYsSUFBTSxzQkFBc0IsR0FBRyxtQ0FDN0Isd0JBZ0NFLGFBaENGO0FBQUEsRUFBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtBQUFBLEVBQWhDLDBCQUNFLHdCQThCRSxtQkE5QkY7QUFBQSw4QkFDRSx3QkE0QkUsZUE1QkY7QUFBQSxNQUFPLFNBQVM7QUFBQSxNQUFoQixVQTRCRTtBQUFBLHdCQTNCQSx3QkFBQyx1QkFBRDtBQUFBLFVBQWUsc0JBQU0sd0JBQUMsNkJBQUQ7QUFBQSxZQUF5QixPQUFNO0FBQUEsYUFBL0IsaUNBQTJDO0FBQUEsVUFBSSxPQUFNO0FBQUEsV0FBMUUsaUNBQXlGO0FBQUEsd0JBQ3pGLHdCQXlCRSxjQXpCRjtB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Qyx1QkFBRDtBQUFBLFFBQWUsU0FBUztBQUFBLFFBQWUsU0FBUztBQUFBLFNBQWhELGlDQUErRDtBQUFBLHNCQUMvRCx3QkFBQywyQkFBRDtBQUFBLFFBQW1CLE9BQU87QUFBQSxTQUExQixpQ0FBa0Q7QUFBQSxzQkFDbEQsd0JBQUMsMEJBQUQ7QUFBQSxRQUFrQixPQUFPO0FBQUEsU0FBekIsaUNBQThDO0FBQUEsc0JBQzlDLHdCQUFDLHVCQUFEO0FBQUEsUUFBZSxZQUFZO0FBQUEsU0FBM0IsaUNBQTRDO0FBQUEsc0JBQzVDLHdCQUFDLDBCQUFEO0FBQUEsUUFBa0IsT0FBTztBQUFBLFNBQXpCLGlDQUEwQztBQUFBLHNCQUMxQyx3QkFBQyw2QkFBRDtBQUFBLFFBQXFCLGNBQWM7QUFBQSxTQUFuQyxpQ0FBdUQ7QUFBQTtBQUFBLEtBUnpELGdDQVNFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiRTRFNEIwMzBERDQ0REEwNzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
