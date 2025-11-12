import {
  EmailRounded_default,
  LinkedIn_default
} from "./chunk-ja5rpkr4.js";
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
  require_react,
  useMediaQuery_default,
  useTheme
} from "./chunk-a0eztsys.js";

// node_modules/@mui/icons-material/esm/WorkspacePremiumOutlined.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var WorkspacePremiumOutlined_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0 15-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1z"
}), "WorkspacePremiumOutlined");

// src/features/resume/components/ResumeCard.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ResumeCard = ({
  title,
  subtitle,
  period,
  year,
  description,
  highlights,
  skills,
  useCardContent = false,
  sx
}) => {
  const cardPadding = { xs: 3, md: 4 };
  const cardSx = {
    p: cardPadding,
    ...useCardContent ? { height: "100%" } : {},
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
      borderColor: "primary.light"
    },
    ...sx
  };
  const isSkillsCard = !!skills && !subtitle && !period && !year;
  const isCertificateCard = !!year;
  const headerContent = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
    direction: isCertificateCard ? "row" : { xs: "column", md: "row" },
    justifyContent: "space-between",
    spacing: 1,
    alignItems: isCertificateCard ? "center" : undefined,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
        variant: isSkillsCard || isCertificateCard ? "h6" : "h5",
        sx: { fontWeight: 600 },
        children: title
      }, undefined, false, undefined, this),
      (period || year) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
        variant: "subtitle2",
        color: "primary",
        children: period || year
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  const spacing = isCertificateCard ? 1.5 : isSkillsCard ? 2 : 2;
  const bodyContent = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
    spacing,
    children: [
      headerContent,
      subtitle && !isSkillsCard && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
        variant: isCertificateCard ? "body2" : "subtitle1",
        color: "text.secondary",
        children: subtitle
      }, undefined, false, undefined, this),
      description && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
        variant: "body2",
        color: "text.secondary",
        children: description
      }, undefined, false, undefined, this),
      highlights && highlights.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        spacing: 1.2,
        sx: { mb: 0 },
        children: highlights.map((highlight) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          direction: "row",
          spacing: 1.5,
          alignItems: "flex-start",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              sx: {
                color: "primary.main",
                fontSize: "1.25rem",
                fontWeight: 600,
                mt: 0.25,
                flexShrink: 0,
                lineHeight: 1.6
              },
              children: "✓"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "body1",
              color: "text.primary",
              sx: { fontWeight: 400, lineHeight: 1.6 },
              children: highlight
            }, undefined, false, undefined, this)
          ]
        }, highlight, true, undefined, this))
      }, undefined, false, undefined, this),
      skills && skills.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        spacing: 1,
        sx: { mb: 0 },
        children: skills.map((skill) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          direction: "row",
          spacing: 1.5,
          alignItems: "flex-start",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              sx: {
                color: "primary.main",
                fontSize: "1rem",
                fontWeight: 600,
                mt: 0.25,
                flexShrink: 0,
                lineHeight: 1.6
              },
              children: "✓"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "body2",
              color: "text.primary",
              sx: { fontWeight: 400, lineHeight: 1.6 },
              children: skill
            }, undefined, false, undefined, this)
          ]
        }, skill, true, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  if (useCardContent) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
      sx: cardSx,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
        sx: { p: 0, "&:last-child": { pb: 0 } },
        children: bodyContent
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
    sx: cardSx,
    children: bodyContent
  }, undefined, false, undefined, this);
};
var ResumeCard_default = ResumeCard;

// src/features/resume/components/ResumeSectionWrapper.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var ResumeSectionWrapper = ({
  children,
  backgroundColor = "default",
  sx
}) => {
  const boxSx = {
    py: { xs: 6, md: 10 },
    ...backgroundColor === "paper" ? { backgroundColor: "background.paper" } : {},
    ...sx
  };
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Box_default, {
    sx: boxSx,
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Container_default, {
      maxWidth: "lg",
      children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
        spacing: 4,
        children
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var ResumeSectionWrapper_default = ResumeSectionWrapper;

// src/features/resume/components/SectionHeader.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var SectionHeader = ({ icon, title }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
  direction: "row",
  spacing: 2,
  alignItems: "center",
  children: [
    icon && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: 2,
        border: "1.5px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
      },
      children: icon
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
      variant: "h3",
      sx: { fontWeight: 600 },
      children: title
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var SectionHeader_default = SectionHeader;

// src/features/resume/components/CertificatesSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var CertificatesSection = ({ certificates }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ResumeSectionWrapper_default, {
  children: [
    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SectionHeader_default, {
      icon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(WorkspacePremiumOutlined_default, {
        color: "secondary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Certificates"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
      container: true,
      spacing: 3,
      children: certificates.map((certificate) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
        size: { xs: 12, md: 6 },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ResumeCard_default, {
          title: certificate.name,
          subtitle: certificate.issuer,
          year: certificate.year,
          description: certificate.description,
          useCardContent: true
        }, undefined, false, undefined, this)
      }, `${certificate.name}-${certificate.year}`, false, undefined, this))
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var CertificatesSection_default = CertificatesSection;

// node_modules/@mui/icons-material/esm/HistoryEduOutlined.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var HistoryEduOutlined_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34M19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8z"
}), "HistoryEduOutlined");

// src/features/resume/components/EducationSection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var EducationSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ResumeSectionWrapper_default, {
  backgroundColor: "paper",
  children: [
    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(SectionHeader_default, {
      icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(HistoryEduOutlined_default, {
        color: "secondary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Education"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
      spacing: 3,
      children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ResumeCard_default, {
        title: item.program,
        subtitle: item.institution,
        period: item.period,
        description: item.description
      }, `${item.institution}-${item.program}`, false, undefined, this))
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var EducationSection_default = EducationSection;

// node_modules/@mui/icons-material/esm/WorkHistoryOutlined.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var WorkHistoryOutlined_default = createSvgIcon([/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M4 19V8h16v3.29c.72.22 1.4.54 2 .97V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.3-.62-.5-1.29-.6-2zm6-15h4v2h-4z"
}, "0"), /* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"
}, "1")], "WorkHistoryOutlined");

// src/features/resume/components/ExperienceSection.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var ExperienceSection = ({
  title = "Professional Experience",
  icon = /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(WorkHistoryOutlined_default, {
    color: "primary",
    sx: { fontSize: "1.75rem" }
  }, undefined, false, undefined, this),
  items
}) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ResumeSectionWrapper_default, {
  children: [
    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(SectionHeader_default, {
      icon,
      title
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
      spacing: 3,
      children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ResumeCard_default, {
        title: item.role,
        subtitle: item.company,
        period: item.period,
        description: item.description,
        highlights: item.highlights
      }, `${item.company}-${item.role}`, false, undefined, this))
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var ExperienceSection_default = ExperienceSection;

// node_modules/@mui/icons-material/esm/DownloadRounded.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var DownloadRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime4.jsx("path", {
  d: "M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"
}), "DownloadRounded");

// node_modules/@mui/icons-material/esm/LanguageRounded.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var LanguageRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime5.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"
}), "LanguageRounded");

// node_modules/@mui/icons-material/esm/LocationOnRounded.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
"use client";
var LocationOnRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime6.jsx("path", {
  d: "M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
}), "LocationOnRounded");

// node_modules/@mui/icons-material/esm/ShareRounded.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
var ShareRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime7.jsx("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"
}), "ShareRounded");

// src/features/resume/components/HeaderSection.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var HeaderSection = ({ summary, actions }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery_default(theme.breakpoints.down("md"));
  const handleDownload = import_react.useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);
  const handleShare = import_react.useCallback(async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${summary.title} - ${summary.subtitle}`,
          text: summary.description,
          url: window.location.href
        });
      } catch (error) {
        console.log("Share cancelled or failed:", error);
      }
    } else {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    }
  }, [summary]);
  const chipStyles = {
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    "&:hover": {
      backgroundColor: "action.hover",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)"
    },
    ...isMobile && {
      width: "100%",
      justifyContent: "flex-start",
      maxWidth: "100%"
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
    sx: {
      py: { xs: 6, md: 8 },
      background: "linear-gradient(135deg, rgba(31,111,235,0.1), rgba(90,200,250,0.14))"
    },
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
        spacing: 2,
        alignItems: "center",
        textAlign: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "overline",
            color: "secondary",
            children: summary.subtitle
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "h2",
            children: summary.title
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
            direction: { xs: "column", sm: "row" },
            spacing: 1.5,
            sx: {
              width: "100%",
              maxWidth: { xs: "100%", sm: "600px" }
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(LinkedIn_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "LinkedIn",
                component: "a",
                href: "https://www.linkedin.com/in/msadri/",
                target: "_blank",
                clickable: true,
                sx: chipStyles
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(LanguageRounded_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "Portfolio",
                component: "a",
                href: "https://masihsadri.com",
                target: "_blank",
                clickable: true,
                sx: chipStyles
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(EmailRounded_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "sadrimasih@gmail.com",
                component: "a",
                href: "mailto:sadrimasih@gmail.com",
                clickable: true,
                sx: chipStyles
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(LocationOnRounded_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "Tehran, Iran • Willing to relocate",
                sx: {
                  ...chipStyles,
                  "&:hover": undefined
                }
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { maxWidth: 720 },
            children: (() => {
              const text = summary.description;
              const importantPhrases = [
                "6+ years",
                "40M+ users",
                "two semi-unicorn tech companies",
                "B2B and B2C",
                "embedded, centralized, and single-threaded"
              ];
              const parts = [];
              let lastIndex = 0;
              const matches = [];
              importantPhrases.forEach((phrase) => {
                const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
                let match;
                while ((match = regex.exec(text)) !== null) {
                  matches.push({
                    start: match.index,
                    end: match.index + match[0].length,
                    text: match[0]
                  });
                }
              });
              matches.sort((a, b) => a.start - b.start);
              matches.forEach((match) => {
                if (match.start > lastIndex) {
                  parts.push({ text: text.slice(lastIndex, match.start), bold: false });
                }
                parts.push({ text: match.text, bold: true });
                lastIndex = match.end;
              });
              if (lastIndex < text.length) {
                parts.push({ text: text.slice(lastIndex), bold: false });
              }
              return parts.length > 0 ? /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
                children: parts.map((part, index) => part.bold ? /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
                  component: "span",
                  sx: { fontWeight: 700 },
                  children: part.text
                }, index, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime7.jsxDEV("span", {
                  children: part.text
                }, index, false, undefined, this))
              }, undefined, false, undefined, this) : text;
            })()
          }, undefined, false, undefined, this),
          isMobile ? /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Button_default, {
            variant: "contained",
            color: "primary",
            size: "large",
            startIcon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ShareRounded_default, {}, undefined, false, undefined, this),
            onClick: handleShare,
            fullWidth: true,
            sx: { maxWidth: { xs: "100%", sm: "400px" } },
            children: "Share Resume"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Button_default, {
            component: "a",
            href: actions.href,
            variant: "contained",
            color: "primary",
            size: "large",
            startIcon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(DownloadRounded_default, {}, undefined, false, undefined, this),
            onClick: handleDownload,
            children: actions.label
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var HeaderSection_default = HeaderSection;

// node_modules/@mui/icons-material/esm/MilitaryTechOutlined.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
"use client";
var MilitaryTechOutlined_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime8.jsx("path", {
  d: "M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86m-6 .64-2-1.2V4h2zm4-1.2-2 1.2V4h2z"
}), "MilitaryTechOutlined");

// src/features/resume/components/SkillsSection.tsx
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var SkillsSection = ({ categories }) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ResumeSectionWrapper_default, {
  children: [
    /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(SectionHeader_default, {
      icon: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(MilitaryTechOutlined_default, {
        color: "primary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Skills"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
      container: true,
      spacing: 3,
      children: categories.map((category) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
        size: { xs: 12, md: 4 },
        children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ResumeCard_default, {
          title: category.title,
          skills: category.skills,
          useCardContent: true
        }, undefined, false, undefined, this)
      }, category.title, false, undefined, this))
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var SkillsSection_default = SkillsSection;

// node_modules/@mui/icons-material/esm/VolunteerActivismOutlined.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
"use client";
var VolunteerActivismOutlined_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime9.jsx("path", {
  d: "M16 13c3.09-2.81 6-5.44 6-7.7C22 3.45 20.55 2 18.7 2c-1.04 0-2.05.49-2.7 1.25C15.34 2.49 14.34 2 13.3 2 11.45 2 10 3.45 10 5.3c0 2.26 2.91 4.89 6 7.7m-2.7-9c.44 0 .89.21 1.18.55L16 6.34l1.52-1.79c.29-.34.74-.55 1.18-.55.74 0 1.3.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-.74.56-1.3 1.3-1.3M19 16h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3M3 20v-7h2v7zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56z"
}), "VolunteerActivismOutlined");

// src/features/resume/components/VolunteerSection.tsx
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var VolunteerSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ResumeSectionWrapper_default, {
  backgroundColor: "paper",
  children: [
    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(SectionHeader_default, {
      icon: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(VolunteerActivismOutlined_default, {
        color: "secondary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Volunteer Activity"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
      spacing: 3,
      children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ResumeCard_default, {
        title: item.role,
        subtitle: item.organization,
        period: item.period,
        description: item.description
      }, `${item.organization}-${item.role}`, false, undefined, this))
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
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
var jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
var ResumePage = () => {
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Seo_default, {
        ...resumePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(HeaderSection_default, {
        summary: resumeSummary,
        actions: resumeActions
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ExperienceSection_default, {
        items: professionalExperience
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(VolunteerSection_default, {
        items: volunteerExperience
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(SkillsSection_default, {
        categories: skillCategories
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(EducationSection_default, {
        items: resumeEducation
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(CertificatesSection_default, {
        certificates: resumeCertificates
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ResumePage_default = ResumePage;
export {
  ResumePage_default as default
};

//# debugId=624D791592C98C8D64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1dvcmtzcGFjZVByZW1pdW1PdXRsaW5lZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvUmVzdW1lQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL1Jlc3VtZVNlY3Rpb25XcmFwcGVyLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL0NlcnRpZmljYXRlc1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9IaXN0b3J5RWR1T3V0bGluZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL0VkdWNhdGlvblNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Xb3JrSGlzdG9yeU91dGxpbmVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvY29tcG9uZW50cy9FeHBlcmllbmNlU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Rvd25sb2FkUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vTGFuZ3VhZ2VSb3VuZGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Mb2NhdGlvbk9uUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2hhcmVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvY29tcG9uZW50cy9IZWFkZXJTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vTWlsaXRhcnlUZWNoT3V0bGluZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL1NraWxsc1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Wb2x1bnRlZXJBY3RpdmlzbU91dGxpbmVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvY29tcG9uZW50cy9Wb2x1bnRlZXJTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL3Nlby50cyIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL1Jlc3VtZVBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk05LjY4IDEzLjY5IDEyIDExLjkzbDIuMzEgMS43Ni0uODgtMi44NUwxNS43NSA5aC0yLjg0TDEyIDYuMTkgMTEuMDkgOUg4LjI1bDIuMzEgMS44NHpNMjAgMTBjMC00LjQyLTMuNTgtOC04LThzLTggMy41OC04IDhjMCAyLjAzLjc2IDMuODcgMiA1LjI4VjIzbDYtMiA2IDJ2LTcuNzJjMS4yNC0xLjQxIDItMy4yNSAyLTUuMjhtLTgtNmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZtMCAxNS00IDEuMDJ2LTMuMWMxLjE4LjY4IDIuNTQgMS4wOCA0IDEuMDhzMi44Mi0uNCA0LTEuMDh2My4xelwiXG59KSwgJ1dvcmtzcGFjZVByZW1pdW1PdXRsaW5lZCcpOyIsCiAgICAiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxudHlwZSBSZXN1bWVDYXJkUHJvcHMgPSB7XG4gIC8vIEhlYWRlciBjb250ZW50XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBwZXJpb2Q/OiBzdHJpbmc7XG4gIHllYXI/OiBzdHJpbmc7XG4gIFxuICAvLyBCb2R5IGNvbnRlbnRcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGhpZ2hsaWdodHM/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2tpbGxzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIFxuICAvLyBMYXlvdXQgb3B0aW9uc1xuICB1c2VDYXJkQ29udGVudD86IGJvb2xlYW47XG4gIHN4PzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG59O1xuXG5jb25zdCBSZXN1bWVDYXJkID0gKHtcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBwZXJpb2QsXG4gIHllYXIsXG4gIGRlc2NyaXB0aW9uLFxuICBoaWdobGlnaHRzLFxuICBza2lsbHMsXG4gIHVzZUNhcmRDb250ZW50ID0gZmFsc2UsXG4gIHN4LFxufTogUmVzdW1lQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IGNhcmRQYWRkaW5nID0geyB4czogMywgbWQ6IDQgfTtcbiAgY29uc3QgY2FyZFN4ID0ge1xuICAgIHA6IGNhcmRQYWRkaW5nLFxuICAgIC4uLih1c2VDYXJkQ29udGVudCA/IHsgaGVpZ2h0OiBcIjEwMCVcIiB9IDoge30pLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgYm9yZGVyQ29sb3I6IFwiZGl2aWRlclwiLFxuICAgIGJveFNoYWRvdzogXCIwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMylcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjJzIGVhc2UtaW4tb3V0XCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJveFNoYWRvdzogXCIwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDQpXCIsXG4gICAgICBib3JkZXJDb2xvcjogXCJwcmltYXJ5LmxpZ2h0XCIsXG4gICAgfSxcbiAgICAuLi5zeCxcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHNraWxscyBjYXJkIChubyBwZXJpb2QveWVhci9zdWJ0aXRsZSlcbiAgY29uc3QgaXNTa2lsbHNDYXJkID0gISFza2lsbHMgJiYgIXN1YnRpdGxlICYmICFwZXJpb2QgJiYgIXllYXI7XG4gIC8vIERldGVybWluZSBpZiB0aGlzIGlzIGEgY2VydGlmaWNhdGUgY2FyZCAoaGFzIHllYXIpXG4gIGNvbnN0IGlzQ2VydGlmaWNhdGVDYXJkID0gISF5ZWFyO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSAoXG4gICAgPFN0YWNrXG4gICAgICBkaXJlY3Rpb249e2lzQ2VydGlmaWNhdGVDYXJkID8gXCJyb3dcIiA6IHsgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgc3BhY2luZz17MX1cbiAgICAgIGFsaWduSXRlbXM9e2lzQ2VydGlmaWNhdGVDYXJkID8gXCJjZW50ZXJcIiA6IHVuZGVmaW5lZH1cbiAgICA+XG4gICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgdmFyaWFudD17aXNTa2lsbHNDYXJkIHx8IGlzQ2VydGlmaWNhdGVDYXJkID8gXCJoNlwiIDogXCJoNVwifVxuICAgICAgICBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgeyhwZXJpb2QgfHwgeWVhcikgJiYgKFxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgID5cbiAgICAgICAgICB7cGVyaW9kIHx8IHllYXJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICl9XG4gICAgPC9TdGFjaz5cbiAgKTtcblxuICBjb25zdCBzcGFjaW5nID0gaXNDZXJ0aWZpY2F0ZUNhcmQgPyAxLjUgOiBpc1NraWxsc0NhcmQgPyAyIDogMjtcbiAgY29uc3QgYm9keUNvbnRlbnQgPSAoXG4gICAgPFN0YWNrIHNwYWNpbmc9e3NwYWNpbmd9PlxuICAgICAge2hlYWRlckNvbnRlbnR9XG4gICAgICB7c3VidGl0bGUgJiYgIWlzU2tpbGxzQ2FyZCAmJiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2lzQ2VydGlmaWNhdGVDYXJkID8gXCJib2R5MlwiIDogXCJzdWJ0aXRsZTFcIn0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICl9XG4gICAgICB7aGlnaGxpZ2h0cyAmJiBoaWdobGlnaHRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS4yfSBzeD17eyBtYjogMCB9fT5cbiAgICAgICAgICB7aGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCkgPT4gKFxuICAgICAgICAgICAgPFN0YWNrIGtleT17aGlnaGxpZ2h0fSBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnkubWFpblwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgbXQ6IDAuMjUsXG4gICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDinJNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRXZWlnaHQ6IDQwMCwgbGluZUhlaWdodDogMS42IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cbiAgICAgIHtza2lsbHMgJiYgc2tpbGxzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0gc3g9e3sgbWI6IDAgfX0+XG4gICAgICAgICAge3NraWxscy5tYXAoKHNraWxsKSA9PiAoXG4gICAgICAgICAgICA8U3RhY2sga2V5PXtza2lsbH0gZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgIG10OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4pyTXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzeD17eyBmb250V2VpZ2h0OiA0MDAsIGxpbmVIZWlnaHQ6IDEuNiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NraWxsfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cbiAgICA8L1N0YWNrPlxuICApO1xuXG4gIGlmICh1c2VDYXJkQ29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZCBzeD17Y2FyZFN4fT5cbiAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHA6IDAsIFwiJjpsYXN0LWNoaWxkXCI6IHsgcGI6IDAgfSB9fT57Ym9keUNvbnRlbnR9PC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxDYXJkIHN4PXtjYXJkU3h9Pntib2R5Q29udGVudH08L0NhcmQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lQ2FyZDtcblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBSZXN1bWVTZWN0aW9uV3JhcHBlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBcImRlZmF1bHRcIiB8IFwicGFwZXJcIjtcbiAgc3g/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbn07XG5cbmNvbnN0IFJlc3VtZVNlY3Rpb25XcmFwcGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIGJhY2tncm91bmRDb2xvciA9IFwiZGVmYXVsdFwiLFxuICBzeCxcbn06IFJlc3VtZVNlY3Rpb25XcmFwcGVyUHJvcHMpID0+IHtcbiAgY29uc3QgYm94U3ggPSB7XG4gICAgcHk6IHsgeHM6IDYsIG1kOiAxMCB9LFxuICAgIC4uLihiYWNrZ3JvdW5kQ29sb3IgPT09IFwicGFwZXJcIiA/IHsgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIiB9IDoge30pLFxuICAgIC4uLnN4LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17Ym94U3h9PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT57Y2hpbGRyZW59PC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lU2VjdGlvbldyYXBwZXI7XG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgdGl0bGU6IHN0cmluZztcbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoeyBpY29uLCB0aXRsZSB9OiBTZWN0aW9uSGVhZGVyUHJvcHMpID0+IChcbiAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICB7aWNvbiAmJiAoXG4gICAgICA8Qm94XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB3aWR0aDogNTYsXG4gICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgYm9yZGVyOiBcIjEuNXB4IHNvbGlkXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwiZGl2aWRlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpY29ufVxuICAgICAgPC9Cb3g+XG4gICAgKX1cbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICB7dGl0bGV9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICA8L1N0YWNrPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjtcblxuXG4iLAogICAgImltcG9ydCBXb3Jrc3BhY2VQcmVtaXVtT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1dvcmtzcGFjZVByZW1pdW1PdXRsaW5lZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCBSZXN1bWVDYXJkIGZyb20gXCIuL1Jlc3VtZUNhcmRcIjtcbmltcG9ydCBSZXN1bWVTZWN0aW9uV3JhcHBlciBmcm9tIFwiLi9SZXN1bWVTZWN0aW9uV3JhcHBlclwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IHR5cGUgeyBDZXJ0aWZpY2F0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzID0ge1xuICBjZXJ0aWZpY2F0ZXM6IFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGlvbj47XG59O1xuXG5jb25zdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uID0gKHsgY2VydGlmaWNhdGVzIH06IENlcnRpZmljYXRlc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXI+XG4gICAgPFNlY3Rpb25IZWFkZXIgaWNvbj17PFdvcmtzcGFjZVByZW1pdW1PdXRsaW5lZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBzeD17eyBmb250U2l6ZTogXCIxLjc1cmVtXCIgfX0gLz59IHRpdGxlPVwiQ2VydGlmaWNhdGVzXCIgLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtjZXJ0aWZpY2F0ZXMubWFwKChjZXJ0aWZpY2F0ZSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17YCR7Y2VydGlmaWNhdGUubmFtZX0tJHtjZXJ0aWZpY2F0ZS55ZWFyfWB9PlxuICAgICAgICAgIDxSZXN1bWVDYXJkXG4gICAgICAgICAgICB0aXRsZT17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICAgIHN1YnRpdGxlPXtjZXJ0aWZpY2F0ZS5pc3N1ZXJ9XG4gICAgICAgICAgICB5ZWFyPXtjZXJ0aWZpY2F0ZS55ZWFyfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2NlcnRpZmljYXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgdXNlQ2FyZENvbnRlbnQ9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICA8L1Jlc3VtZVNlY3Rpb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VydGlmaWNhdGVzU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk05IDR2MS4zOGMtLjgzLS4zMy0xLjcyLS41LTIuNjEtLjUtMS43OSAwLTMuNTguNjgtNC45NSAyLjA1bDMuMzMgMy4zM2gxLjExdjEuMTFjLjg2Ljg2IDEuOTggMS4zMSAzLjExIDEuMzZWMTVINnYzYzAgMS4xLjkgMiAyIDJoMTBjMS42NiAwIDMtMS4zNCAzLTNWNHptLTEuMTEgNi40MVY4LjI2SDUuNjFMNC41NyA3LjIyYTUuMDcgNS4wNyAwIDAgMSAxLjgyLS4zNGMxLjM0IDAgMi41OS41MiAzLjU0IDEuNDZsMS40MSAxLjQxLS4yLjJjLS41MS41MS0xLjE5LjgtMS45Mi44LS40NyAwLS45My0uMTItMS4zMy0uMzRNMTkgMTdjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTF2LTJoLTZ2LTIuNTljLjU3LS4yMyAxLjEtLjU3IDEuNTYtMS4wM2wuMi0uMkwxNS41OSAxNEgxN3YtMS40MWwtNi01Ljk3VjZoOHpcIlxufSksICdIaXN0b3J5RWR1T3V0bGluZWQnKTsiLAogICAgImltcG9ydCBIaXN0b3J5RWR1T3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0hpc3RvcnlFZHVPdXRsaW5lZFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlc3VtZUNhcmQgZnJvbSBcIi4vUmVzdW1lQ2FyZFwiO1xuaW1wb3J0IFJlc3VtZVNlY3Rpb25XcmFwcGVyIGZyb20gXCIuL1Jlc3VtZVNlY3Rpb25XcmFwcGVyXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgdHlwZSB7IEVkdWNhdGlvbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBFZHVjYXRpb25TZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PEVkdWNhdGlvbkl0ZW0+O1xufTtcblxuY29uc3QgRWR1Y2F0aW9uU2VjdGlvbiA9ICh7IGl0ZW1zIH06IEVkdWNhdGlvblNlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXIgYmFja2dyb3VuZENvbG9yPVwicGFwZXJcIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgaWNvbj17PEhpc3RvcnlFZHVPdXRsaW5lZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBzeD17eyBmb250U2l6ZTogXCIxLjc1cmVtXCIgfX0gLz59IHRpdGxlPVwiRWR1Y2F0aW9uXCIgLz5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPFJlc3VtZUNhcmRcbiAgICAgICAgICBrZXk9e2Ake2l0ZW0uaW5zdGl0dXRpb259LSR7aXRlbS5wcm9ncmFtfWB9XG4gICAgICAgICAgdGl0bGU9e2l0ZW0ucHJvZ3JhbX1cbiAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICBwZXJpb2Q9e2l0ZW0ucGVyaW9kfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICA8L1Jlc3VtZVNlY3Rpb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbihbLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNCAxOVY4aDE2djMuMjljLjcyLjIyIDEuNC41NCAyIC45N1Y4YzAtMS4xMS0uODktMi0yLTJoLTRWNGMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDcuNjhjLS4zLS42Mi0uNS0xLjI5LS42LTJ6bTYtMTVoNHYyaC00elwiXG59LCBcIjBcIiksIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4IDEzYy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNW0xLjY1IDcuMzVMMTcuNSAxOC4yVjE1aDF2Mi43OWwxLjg1IDEuODV6XCJcbn0sIFwiMVwiKV0sICdXb3JrSGlzdG9yeU91dGxpbmVkJyk7IiwKICAgICJpbXBvcnQgV29ya0hpc3RvcnlPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvV29ya0hpc3RvcnlPdXRsaW5lZFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlc3VtZUNhcmQgZnJvbSBcIi4vUmVzdW1lQ2FyZFwiO1xuaW1wb3J0IFJlc3VtZVNlY3Rpb25XcmFwcGVyIGZyb20gXCIuL1Jlc3VtZVNlY3Rpb25XcmFwcGVyXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRpbWVsaW5lSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEV4cGVyaWVuY2VTZWN0aW9uUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogUmVhY3QuUmVhY3ROb2RlO1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxUaW1lbGluZUl0ZW0+O1xufTtcblxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSAoe1xuICB0aXRsZSA9IFwiUHJvZmVzc2lvbmFsIEV4cGVyaWVuY2VcIixcbiAgaWNvbiA9IDxXb3JrSGlzdG9yeU91dGxpbmVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBmb250U2l6ZTogXCIxLjc1cmVtXCIgfX0gLz4sXG4gIGl0ZW1zLFxufTogRXhwZXJpZW5jZVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXI+XG4gICAgPFNlY3Rpb25IZWFkZXIgaWNvbj17aWNvbn0gdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17M30+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8UmVzdW1lQ2FyZFxuICAgICAgICAgIGtleT17YCR7aXRlbS5jb21wYW55fS0ke2l0ZW0ucm9sZX1gfVxuICAgICAgICAgIHRpdGxlPXtpdGVtLnJvbGV9XG4gICAgICAgICAgc3VidGl0bGU9e2l0ZW0uY29tcGFueX1cbiAgICAgICAgICBwZXJpb2Q9e2l0ZW0ucGVyaW9kfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGhpZ2hsaWdodHM9e2l0ZW0uaGlnaGxpZ2h0c31cbiAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gIDwvUmVzdW1lU2VjdGlvbldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNi41OSA5SDE1VjRjMC0uNTUtLjQ1LTEtMS0xaC00Yy0uNTUgMC0xIC40NS0xIDF2NUg3LjQxYy0uODkgMC0xLjM0IDEuMDgtLjcxIDEuNzFsNC41OSA0LjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw0LjU5LTQuNTljLjYzLS42My4xOS0xLjcxLS43LTEuNzFNNSAxOWMwIC41NS40NSAxIDEgMWgxMmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUg2Yy0uNTUgMC0xIC40NS0xIDFcIlxufSksICdEb3dubG9hZFJvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAybTYuOTMgNmgtMi45NWMtLjMyLTEuMjUtLjc4LTIuNDUtMS4zOC0zLjU2IDEuODQuNjMgMy4zNyAxLjkxIDQuMzMgMy41Nk0xMiA0LjA0Yy44MyAxLjIgMS40OCAyLjUzIDEuOTEgMy45NmgtMy44MmMuNDMtMS40MyAxLjA4LTIuNzYgMS45MS0zLjk2TTQuMjYgMTRDNC4xIDEzLjM2IDQgMTIuNjkgNCAxMnMuMS0xLjM2LjI2LTJoMy4zOGMtLjA4LjY2LS4xNCAxLjMyLS4xNCAycy4wNiAxLjM0LjE0IDJ6bS44MiAyaDIuOTVjLjMyIDEuMjUuNzggMi40NSAxLjM4IDMuNTYtMS44NC0uNjMtMy4zNy0xLjktNC4zMy0zLjU2bTIuOTUtOEg1LjA4Yy45Ni0xLjY2IDIuNDktMi45MyA0LjMzLTMuNTZDOC44MSA1LjU1IDguMzUgNi43NSA4LjAzIDhNMTIgMTkuOTZjLS44My0xLjItMS40OC0yLjUzLTEuOTEtMy45NmgzLjgyYy0uNDMgMS40My0xLjA4IDIuNzYtMS45MSAzLjk2TTE0LjM0IDE0SDkuNjZjLS4wOS0uNjYtLjE2LTEuMzItLjE2LTJzLjA3LTEuMzUuMTYtMmg0LjY4Yy4wOS42NS4xNiAxLjMyLjE2IDJzLS4wNyAxLjM0LS4xNiAybS4yNSA1LjU2Yy42LTEuMTEgMS4wNi0yLjMxIDEuMzgtMy41NmgyLjk1Yy0uOTYgMS42NS0yLjQ5IDIuOTMtNC4zMyAzLjU2TTE2LjM2IDE0Yy4wOC0uNjYuMTQtMS4zMi4xNC0ycy0uMDYtMS4zNC0uMTQtMmgzLjM4Yy4xNi42NC4yNiAxLjMxLjI2IDJzLS4xIDEuMzYtLjI2IDJ6XCJcbn0pLCAnTGFuZ3VhZ2VSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMmMtNC4yIDAtOCAzLjIyLTggOC4yIDAgMy4xOCAyLjQ1IDYuOTIgNy4zNCAxMS4yMy4zOC4zMy45NS4zMyAxLjMzIDBDMTcuNTUgMTcuMTIgMjAgMTMuMzggMjAgMTAuMiAyMCA1LjIyIDE2LjIgMiAxMiAybTAgMTBjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyXCJcbn0pLCAnTG9jYXRpb25PblJvdW5kZWQnKTsiLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTJzMi45Mi0xLjMxIDIuOTItMi45Mi0xLjMxLTIuOTItMi45Mi0yLjkyXCJcbn0pLCAnU2hhcmVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgRG93bmxvYWRSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Eb3dubG9hZFJvdW5kZWRcIjtcbmltcG9ydCBFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsUm91bmRlZFwiO1xuaW1wb3J0IExhbmd1YWdlUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGFuZ3VhZ2VSb3VuZGVkXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XG5pbXBvcnQgTG9jYXRpb25PblJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2F0aW9uT25Sb3VuZGVkXCI7XG5pbXBvcnQgU2hhcmVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TaGFyZVJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDaGlwLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VNZWRpYVF1ZXJ5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IFJlc3VtZUFjdGlvbiwgUmVzdW1lU3VtbWFyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlYWRlclNlY3Rpb25Qcm9wcyA9IHtcbiAgc3VtbWFyeTogUmVzdW1lU3VtbWFyeTtcbiAgYWN0aW9uczogUmVzdW1lQWN0aW9uO1xufTtcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9ICh7IHN1bW1hcnksIGFjdGlvbnMgfTogSGVhZGVyU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKSk7XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNoYXJlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5zaGFyZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgICB0aXRsZTogYCR7c3VtbWFyeS50aXRsZX0gLSAke3N1bW1hcnkuc3VidGl0bGV9YCxcbiAgICAgICAgICB0ZXh0OiBzdW1tYXJ5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gVXNlciBjYW5jZWxsZWQgb3IgZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgY29uc29sZS5sb2coXCJTaGFyZSBjYW5jZWxsZWQgb3IgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrOiBjb3B5IFVSTCB0byBjbGlwYm9hcmRcbiAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgYWxlcnQoXCJMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3N1bW1hcnldKTtcblxuICBjb25zdCBjaGlwU3R5bGVzID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgIGJvcmRlckNvbG9yOiBcImRpdmlkZXJcIixcbiAgICBib3hTaGFkb3c6IFwiMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImFjdGlvbi5ob3ZlclwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpXCIsXG4gICAgfSxcbiAgICAuLi4oaXNNb2JpbGUgJiYge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIH0pLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMSwxMTEsMjM1LDAuMSksIHJnYmEoOTAsMjAwLDI1MCwwLjE0KSlcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3N1bW1hcnkuc3VidGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPntzdW1tYXJ5LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX1cbiAgICAgICAgICAgIHNwYWNpbmc9ezEuNX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBzbTogXCI2MDBweFwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIGljb249ezxMaW5rZWRJbkljb24gc3g9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rZWRJblwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgc3g9e2NoaXBTdHlsZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgaWNvbj17PExhbmd1YWdlUm91bmRlZEljb24gc3g9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJQb3J0Zm9saW9cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzaWhzYWRyaS5jb21cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgc3g9e2NoaXBTdHlsZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgaWNvbj17PEVtYWlsUm91bmRlZEljb24gc3g9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJzYWRyaW1hc2loQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnNhZHJpbWFzaWhAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIHN4PXtjaGlwU3R5bGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIGljb249ezxMb2NhdGlvbk9uUm91bmRlZEljb24gc3g9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJUZWhyYW4sIElyYW4g4oCiIFdpbGxpbmcgdG8gcmVsb2NhdGVcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIC4uLmNoaXBTdHlsZXMsXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWF4V2lkdGg6IDcyMCB9fT5cbiAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gc3VtbWFyeS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50UGhyYXNlcyA9IFtcbiAgICAgICAgICAgICAgICBcIjYrIHllYXJzXCIsXG4gICAgICAgICAgICAgICAgXCI0ME0rIHVzZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJ0d28gc2VtaS11bmljb3JuIHRlY2ggY29tcGFuaWVzXCIsXG4gICAgICAgICAgICAgICAgXCJCMkIgYW5kIEIyQ1wiLFxuICAgICAgICAgICAgICAgIFwiZW1iZWRkZWQsIGNlbnRyYWxpemVkLCBhbmQgc2luZ2xlLXRocmVhZGVkXCIsXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBwYXJ0czogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IGJvbGQ6IGJvb2xlYW4gfT4gPSBbXTtcbiAgICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBGaW5kIGFsbCBtYXRjaGVzIGFuZCB0aGVpciBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlczogQXJyYXk8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcjsgdGV4dDogc3RyaW5nIH0+ID0gW107XG4gICAgICAgICAgICAgIGltcG9ydGFudFBocmFzZXMuZm9yRWFjaCgocGhyYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHBocmFzZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIiksIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAgICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWdleC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG1hdGNoLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaFswXSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBTb3J0IG1hdGNoZXMgYnkgcG9zaXRpb25cbiAgICAgICAgICAgICAgbWF0Y2hlcy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0IC0gYi5zdGFydCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBCdWlsZCBwYXJ0cyBhcnJheVxuICAgICAgICAgICAgICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLnN0YXJ0ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdGV4dDogdGV4dC5zbGljZShsYXN0SW5kZXgsIG1hdGNoLnN0YXJ0KSwgYm9sZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0ZXh0OiBtYXRjaC50ZXh0LCBib2xkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmVuZDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAobGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdGV4dDogdGV4dC5zbGljZShsYXN0SW5kZXgpLCBib2xkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtwYXJ0cy5tYXAoKHBhcnQsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICBwYXJ0LmJvbGQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJzcGFuXCIga2V5PXtpbmRleH0gc3g9e3sgZm9udFdlaWdodDogNzAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3BhcnQudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT57cGFydC50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSgpfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7aXNNb2JpbGUgPyAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBzdGFydEljb249ezxTaGFyZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaGFyZX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IFwiNDAwcHhcIiB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNoYXJlIFJlc3VtZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgIGhyZWY9e2FjdGlvbnMuaHJlZn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHN0YXJ0SWNvbj17PERvd25sb2FkUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YWN0aW9ucy5sYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclNlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTcgMTAuNDNWMkg3djguNDNjMCAuMzUuMTguNjguNDkuODZsNC4xOCAyLjUxLS45OSAyLjM0LTMuNDEuMjkgMi41OSAyLjI0TDkuMDcgMjIgMTIgMjAuMjMgMTQuOTMgMjJsLS43OC0zLjMzIDIuNTktMi4yNC0zLjQxLS4yOS0uOTktMi4zNCA0LjE4LTIuNTFjLjMtLjE4LjQ4LS41LjQ4LS44Nm0tNiAuNjQtMi0xLjJWNGgyem00LTEuMi0yIDEuMlY0aDJ6XCJcbn0pLCAnTWlsaXRhcnlUZWNoT3V0bGluZWQnKTsiLAogICAgImltcG9ydCBNaWxpdGFyeVRlY2hPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWlsaXRhcnlUZWNoT3V0bGluZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgUmVzdW1lQ2FyZCBmcm9tIFwiLi9SZXN1bWVDYXJkXCI7XG5pbXBvcnQgUmVzdW1lU2VjdGlvbldyYXBwZXIgZnJvbSBcIi4vUmVzdW1lU2VjdGlvbldyYXBwZXJcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCB0eXBlIHsgU2tpbGxDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFNraWxsc1NlY3Rpb25Qcm9wcyA9IHtcbiAgY2F0ZWdvcmllczogUmVhZG9ubHlBcnJheTxTa2lsbENhdGVnb3J5Pjtcbn07XG5cbmNvbnN0IFNraWxsc1NlY3Rpb24gPSAoeyBjYXRlZ29yaWVzIH06IFNraWxsc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIGljb249ezxNaWxpdGFyeVRlY2hPdXRsaW5lZEljb24gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgZm9udFNpemU6IFwiMS43NXJlbVwiIH19IC8+fSB0aXRsZT1cIlNraWxsc1wiIC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtjYXRlZ29yeS50aXRsZX0+XG4gICAgICAgICAgPFJlc3VtZUNhcmRcbiAgICAgICAgICAgIHRpdGxlPXtjYXRlZ29yeS50aXRsZX1cbiAgICAgICAgICAgIHNraWxscz17Y2F0ZWdvcnkuc2tpbGxzfVxuICAgICAgICAgICAgdXNlQ2FyZENvbnRlbnQ9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICA8L1Jlc3VtZVNlY3Rpb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNiAxM2MzLjA5LTIuODEgNi01LjQ0IDYtNy43QzIyIDMuNDUgMjAuNTUgMiAxOC43IDJjLTEuMDQgMC0yLjA1LjQ5LTIuNyAxLjI1QzE1LjM0IDIuNDkgMTQuMzQgMiAxMy4zIDIgMTEuNDUgMiAxMCAzLjQ1IDEwIDUuM2MwIDIuMjYgMi45MSA0Ljg5IDYgNy43bS0yLjctOWMuNDQgMCAuODkuMjEgMS4xOC41NUwxNiA2LjM0bDEuNTItMS43OWMuMjktLjM0Ljc0LS41NSAxLjE4LS41NS43NCAwIDEuMy41NiAxLjMgMS4zIDAgMS4xMi0yLjA0IDMuMTctNCA0Ljk5LTEuOTYtMS44Mi00LTMuODgtNC00Ljk5IDAtLjc0LjU2LTEuMyAxLjMtMS4zTTE5IDE2aC0yYzAtMS4yLS43NS0yLjI4LTEuODctMi43TDguOTcgMTFIMXYxMWg2di0xLjQ0bDcgMS45NCA4LTIuNXYtMWMwLTEuNjYtMS4zNC0zLTMtM00zIDIwdi03aDJ2N3ptMTAuOTcuNDFMNyAxOC40OFYxM2gxLjYxbDUuODIgMi4xN2MuMzQuMTMuNTcuNDYuNTcuODMgMCAwLTEuOTktLjA1LTIuMy0uMTVsLTIuMzgtLjc5LS42MyAxLjkgMi4zOC43OWMuNTEuMTcgMS4wNC4yNiAxLjU4LjI2SDE5Yy4zOSAwIC43NC4yMy45LjU2elwiXG59KSwgJ1ZvbHVudGVlckFjdGl2aXNtT3V0bGluZWQnKTsiLAogICAgImltcG9ydCBWb2x1bnRlZXJBY3RpdmlzbU91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Wb2x1bnRlZXJBY3RpdmlzbU91dGxpbmVkXCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVzdW1lQ2FyZCBmcm9tIFwiLi9SZXN1bWVDYXJkXCI7XG5pbXBvcnQgUmVzdW1lU2VjdGlvbldyYXBwZXIgZnJvbSBcIi4vUmVzdW1lU2VjdGlvbldyYXBwZXJcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCB0eXBlIHsgVm9sdW50ZWVyRXhwZXJpZW5jZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFZvbHVudGVlclNlY3Rpb25Qcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8Vm9sdW50ZWVyRXhwZXJpZW5jZT47XG59O1xuXG5jb25zdCBWb2x1bnRlZXJTZWN0aW9uID0gKHsgaXRlbXMgfTogVm9sdW50ZWVyU2VjdGlvblByb3BzKSA9PiAoXG4gIDxSZXN1bWVTZWN0aW9uV3JhcHBlciBiYWNrZ3JvdW5kQ29sb3I9XCJwYXBlclwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIGljb249ezxWb2x1bnRlZXJBY3RpdmlzbU91dGxpbmVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIHN4PXt7IGZvbnRTaXplOiBcIjEuNzVyZW1cIiB9fSAvPn1cbiAgICAgICAgICB0aXRsZT1cIlZvbHVudGVlciBBY3Rpdml0eVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxSZXN1bWVDYXJkXG4gICAgICAgICAga2V5PXtgJHtpdGVtLm9yZ2FuaXphdGlvbn0tJHtpdGVtLnJvbGV9YH1cbiAgICAgICAgICB0aXRsZT17aXRlbS5yb2xlfVxuICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLm9yZ2FuaXphdGlvbn1cbiAgICAgICAgICBwZXJpb2Q9e2l0ZW0ucGVyaW9kfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICA8L1Jlc3VtZVNlY3Rpb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVm9sdW50ZWVyU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHtcbiAgQ2VydGlmaWNhdGlvbixcbiAgRWR1Y2F0aW9uSXRlbSxcbiAgUmVzdW1lQWN0aW9uLFxuICBSZXN1bWVTdW1tYXJ5LFxuICBTa2lsbENhdGVnb3J5LFxuICBUaW1lbGluZUl0ZW0sXG4gIFZvbHVudGVlckV4cGVyaWVuY2UsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVzdW1lU3VtbWFyeTogUmVzdW1lU3VtbWFyeSA9IHtcbiAgdGl0bGU6IFwiTWFzaWggU2FkcmlcIixcbiAgc3VidGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJEYXRhLWRyaXZlbiBQcm9kdWN0IERlc2lnbmVyIHdpdGggNisgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbXByb3ZpbmcgZXhwZXJpZW5jZXMgZm9yIDQwTSsgdXNlcnMuIEltcGFjdC1vcmllbnRlZCB3aXRoIGhhbmRzLW9uIGV4cGVyaWVuY2UgaW4gdHdvIHNlbWktdW5pY29ybiB0ZWNoIGNvbXBhbmllcyAoRGl2YXIsIElSLU1DSSksIGRlc2lnbmluZyBmb3IgYm90aCBCMkIgYW5kIEIyQyBwcm9kdWN0cyBhY3Jvc3MgZW1iZWRkZWQsIGNlbnRyYWxpemVkLCBhbmQgc2luZ2xlLXRocmVhZGVkIHRlYW0gc3RydWN0dXJlcy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCByZXN1bWVBY3Rpb25zOiBSZXN1bWVBY3Rpb24gPSB7XG4gIGxhYmVsOiBcIkRvd25sb2FkIFJlc3VtZSAoUERGKVwiLFxuICBocmVmOiBcIi9NYXNpaC1TYWRyaS1SZXN1bWUucGRmXCIsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvZmVzc2lvbmFsRXhwZXJpZW5jZTogUmVhZG9ubHlBcnJheTxUaW1lbGluZUl0ZW0+ID0gW1xuICB7XG4gICAgY29tcGFueTogXCJQZXJzb2wgfCBCMkIvQjJDIG1hcmtldHBsYWNlLCBlYXJseS1zdGFnZSBncm93dGhcIixcbiAgICByb2xlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgcGVyaW9kOiBcIk9jdG9iZXIgMjAyNCDigJMgQXVndXN0IDIwMjUgwrcgSHlicmlkLCBGdWxsLXRpbWUgfCAxMSBtb250aHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTGVhZCBkZXNpZ25lciBndWlkaW5nIHByb2R1Y3QgdmlzaW9uIGFuZCBkZWxpdmVyaW5nIGhpZ2gtaW1wYWN0IGV4cGVyaW1lbnRzIGFjcm9zcyB0aGUgZnVubmVsLlwiLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiUmVkZXNpZ25lZCB0aGUgc2lnbi11cCBmbG93IHRocm91Z2ggZGF0YS1kcml2ZW4gZnVubmVsIGFuYWx5c2lzLCBlbGltaW5hdGluZyBtYWpvciBmcmljdGlvbiBwb2ludHMgYW5kIGFjaGlldmluZyBhbiA4MCUgaW5jcmVhc2UgaW4gbGVhZCBnZW5lcmF0aW9uIHdpdGhpbiAzIG1vbnRocy5cIixcbiAgICAgIFwiRGV2ZWxvcGVkIGEgc2NhbGFibGUgZGVzaWduIGtpdCBmcm9tIHNjcmF0Y2gsIHN0YW5kYXJkaXppbmcgVUkgcGF0dGVybnMgYW5kIGltcHJvdmluZyBkZXNpZ24tdG8tZGV2ZWxvcG1lbnQgaGFuZG9mZiBlZmZpY2llbmN5IGFjcm9zcyB0aGUgdGVhbS5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY29tcGFueTogXCJEaXZhciB8IFRvcCByZWdpb25hbCBjbGFzc2lmaWVkcyBwbGF0Zm9ybSB8IDUwTSsgdXNlcnNcIixcbiAgICByb2xlOiBcIlNlbmlvciBVc2VyIEV4cGVyaWVuY2UgRGVzaWduZXJcIixcbiAgICBwZXJpb2Q6IFwiQXByaWwgMjAyMiDigJMgU2VwdGVtYmVyIDIwMjQgwrcgSHlicmlkLCBGdWxsLXRpbWUgfCAyIHllYXJzIDYgbW9udGhzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJ1c3RlZCBwYXJ0bmVyIGFjcm9zcyBUcnVzdCAmIFNhZmV0eSwgR3Jvd3RoLCBhbmQgQ29yZSBFeHBlcmllbmNlIGluaXRpYXRpdmVzLlwiLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiRGVzaWduZWQgYW5kIGxhdW5jaGVkIGEgU2VjdXJlIENhbGwgU3lzdGVtIHdpdGggdGhlIFRydXN0ICYgU2FmZXR5IHRlYW0sIGFjaGlldmluZyBhIDYwJSByZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCBpbmNpZGVudHMgYW5kIHN0cmVuZ3RoZW5pbmcgdXNlciB0cnVzdC5cIixcbiAgICAgIFwiSW1wcm92ZWQgc2VhcmNoIGV4cGVyaWVuY2UgYnkgaW50cm9kdWNpbmcgdGhlIE5lYXJieSBDaXRpZXMgZmVhdHVyZSwgcmVkdWNpbmcgYm91bmNlIHJhdGUgYnkgMjUlLlwiLFxuICAgICAgXCJPcHRpbWl6ZWQgcG9zdC1hZCBzdWJtaXNzaW9uIGZsb3csIHN0cmVhbWxpbmluZyBmb3JtIGZpZWxkcyBhbmQgbG93ZXJpbmcgcmVkdW5kYW50IGNoYXQgY29udmVyc2F0aW9ucyBieSAxMiUuXCIsXG4gICAgICBcIkltcGxlbWVudGVkIGEgbmV3IHRpY2tldGluZyB3b3JrZmxvdywgaW1wcm92aW5nIGN1c3RvbWVyLXN1cHBvcnQgZWZmaWNpZW5jeSBhbmQgcmVkdWNpbmcgdXNlciB3YWl0IHRpbWVzIGJ5IDIwJS5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY29tcGFueTogXCJJUiBNQ0kgLSBTZXRhcmUgQXZhbCB8IEZpbnRlY2ggc2VydmljZXMgKyBVU1NEICsgTW9iaWxlIHNlcnZpY2UgfCBOYXRpb253aWRlIHNjYWxlXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgcGVyaW9kOiBcIkp1bmUgMjAxOSDigJMgTWFyY2ggMjAyMiDCtyBPbi1zaXRlLCBGdWxsLXRpbWUgfCAyIHllYXJzIDEwIG1vbnRoc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTaGFwZWQgY3Jvc3MtZnVuY3Rpb25hbCBmZWF0dXJlIGRldmVsb3BtZW50IGFuZCBkZXNpZ24gc3lzdGVtcyBmb3IgbmF0aW9ud2lkZSBmaW5hbmNpYWwgcHJvZHVjdHMuXCIsXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJCdWlsdCBNb3JwaCwgYSBzY2FsYWJsZSBkZXNpZ24gc3lzdGVtIGVuc3VyaW5nIHZpc3VhbCBjb25zaXN0ZW5jeSwgdXNlZCBieSA4LDMwMCsgZGVzaWduZXJzLlwiLFxuICAgICAgXCJHYW1pZmllZCB0aGUgcmVmZXJyYWwtc2hhcmluZyBleHBlcmllbmNlLCB0dXJuaW5nIDYwLDAwMCsgc3Vic2NyaWJlcnMgaW50byBkYWlseSBhY3RpdmUgdXNlcnMgYW5kIGJvb3N0aW5nIHJldGVudGlvbi5cIixcbiAgICAgIFwiSW5jcmVhc2VkIGJpbGwtcGF5bWVudCBzaGFyZSBmcm9tIDYlIHRvIDQ3JSBvZiB0b3RhbCBwYXltZW50IHRocm91Z2ggaW4tZGVwdGggaW50ZXJ2aWV3cy5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHZvbHVudGVlckV4cGVyaWVuY2U6IFJlYWRvbmx5QXJyYXk8Vm9sdW50ZWVyRXhwZXJpZW5jZT4gPSBbXG4gIHtcbiAgICBvcmdhbml6YXRpb246IFwiUmFobmVtYSBDb2xsZWdlIHwgUHJvZmVzc2lvbmFsIGJvb3RjYW1wcyArIEludGVybnNoaXAgcHJvZ3JhbXNcIixcbiAgICByb2xlOiBcIkRlc2lnbiBNZW50b3JcIixcbiAgICBwZXJpb2Q6IFwiSnVuZSAyMDIyIOKAkyBQcmVzZW50IMK3IFNlYXNvbmFsXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk1lbnRvcmVkIG92ZXIgMjAwIGFzcGlyaW5nIGRlc2lnbmVycywgaW50cm9kdWNlZCBnYW1pZmllZCBsZWFybmluZyB0ZWNobmlxdWVzLCBhbmQgYnJpZGdlZCBhY2FkZW1pYSB3aXRoIGluZHVzdHJ5IHByYWN0aWNlcy5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBza2lsbENhdGVnb3JpZXM6IFJlYWRvbmx5QXJyYXk8U2tpbGxDYXRlZ29yeT4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJSZXNlYXJjaCAmIFN0cmF0ZWd5XCIsXG4gICAgc2tpbGxzOiBbXG4gICAgICBcIlVzYWJpbGl0eSBUZXN0aW5nICYgSW50ZXJ2aWV3XCIsXG4gICAgICBcIk1hcmtldCAmIENvbXBldGl0aXZlIEFuYWx5c2lzXCIsXG4gICAgICBcIlJvYWRtYXBwaW5nICYgT0tSIEFsaWdubWVudFwiLFxuICAgICAgXCJJbnNpZ2h0IEdhdGhlcmluZzogQ2xhcml0eSwgR0EsIEhvdEphclwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ25cIixcbiAgICBza2lsbHM6IFtcbiAgICAgIFwiRGVzaWduIFN5c3RlbXMgJiBVSSBLaXRzXCIsXG4gICAgICBcIlVzZXIgSW50ZXJmYWNlIERlc2lnbiAoVUkpXCIsXG4gICAgICBcIldpcmVmcmFtaW5nICYgUHJvdG90eXBpbmdcIixcbiAgICAgIFwiSW50ZXJhY3Rpb24gJiBNaWNyby1pbnRlcmFjdGlvbnNcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGVjaG5pY2FsIFRvb2xzICYgRGF0YSBBbmFseXRpY3NcIixcbiAgICBza2lsbHM6IFtcbiAgICAgIFwiRmlnbWEsIEZyYW1lciwgQ2xhdWRlLCBDdXJzb3IsIE5vdGVib29rTE1cIixcbiAgICAgIFwiQnVzaW5lc3MgTWV0cmljcyAmIEZ1bm5lbCBBbmFseXRpY3MgKENSTylcIixcbiAgICAgIFwiRGF0YSBQcmVwcm9jZXNzaW5nICYgU3RhdGlzdGljYWwgQW5hbHlzaXNcIixcbiAgICAgIFwiQkkgVG9vbHMgYW5kIERhc2hib2FyZHNcIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlc3VtZUVkdWNhdGlvbjogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPiA9IFtcbiAge1xuICAgIGluc3RpdHV0aW9uOiBcIlBheWFtZSBOb29yIFVuaXZlcnNpdHlcIixcbiAgICBwcm9ncmFtOiBcIkJTYy4gaW4gUHJvamVjdCBNYW5hZ2VtZW50IEVuZ2luZWVyaW5nXCIsXG4gICAgcGVyaW9kOiBcIlNlcHRlbWJlciAyMDE1IOKAkyBBdWd1c3QgMjAxOFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZS4gTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IHNjaWVudGlmaWMgc29jaWV0eS5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZXN1bWVDZXJ0aWZpY2F0ZXM6IFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGlvbj4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkRhdGEgQW5hbHlzaXMgQm9vdENhbXBcIixcbiAgICBpc3N1ZXI6IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgeWVhcjogXCJKdWx5IDIwMjVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiMTcwaCDigKIgRGF0YSBQcmVwcm9jZXNzaW5nLCBCdXNpbmVzcyBNZXRyaWNzLCBCSSBUb29scywgSW50cm9kdWN0b3J5IFB5dGhvbiwgU3Rvcnl0ZWxsaW5nIHdpdGggRGF0YSwgU3RhdGlzdGljYWwgSW5mZXJlbmNlLCBBL0IgVGVzdGluZy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSUVMVFMgKEFjYWRlbWljKVwiLFxuICAgIGlzc3VlcjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICB5ZWFyOiBcIk1heSAyMDIyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3ZlcmFsbCBTY29yZSA3LjAuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNvbmR1Y3RpbmcgVXNhYmlsaXR5IFRlc3RpbmdcIixcbiAgICBpc3N1ZXI6IFwiSW50ZXJhY3Rpb24gRGVzaWduIEZvdW5kYXRpb25cIixcbiAgICB5ZWFyOiBcIkp1bHkgMjAyMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJVSS9VWCBEZXNpZ24gQm9vdENhbXBcIixcbiAgICBpc3N1ZXI6IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgeWVhcjogXCJKdWx5IDIwMTlcIixcbiAgICBkZXNjcmlwdGlvbjogXCIxNTBoIGludGVuc2l2ZSBib290Y2FtcC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvZHVjdCBEZXNpZ24gYW5kIEFkdmFuY2VkIFVYIERlc2lnblwiLFxuICAgIGlzc3VlcjogXCJTaGFyaWYgVW5pdmVyc2l0eSBvZiBUZWNobm9sb2d5ICsgVW5pdmVyc2l0eSBvZiBUZWhyYW5cIixcbiAgICB5ZWFyOiBcIk1heSAyMDE5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiOThoIGR1YWwtaW5zdGl0dXRpb24gdHJhaW5pbmcuXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgcmVzdW1lU3VtbWFyeSB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCByZXN1bWVTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgUmVzdW1lXCIsXG4gIGRlc2NyaXB0aW9uOiByZXN1bWVTdW1tYXJ5LmRlc2NyaXB0aW9uLFxuICB1cmw6IGAke3NpdGVVcmx9L3Jlc3VtZWAsXG4gIGFib3V0OiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IHJlc3VtZVN1bW1hcnkudGl0bGUsXG4gICAgam9iVGl0bGU6IHJlc3VtZVN1bW1hcnkuc3VidGl0bGUsXG4gICAgZW1haWw6IFwic2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgICBhZGRyZXNzOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgYWRkcmVzc0xvY2FsaXR5OiBcIlRlaHJhblwiLFxuICAgICAgYWRkcmVzc0NvdW50cnk6IFwiSVJcIixcbiAgICB9LFxuICB9LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHJlc3VtZVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXIgUmVzdW1lXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiUmV2aWV3IE1hc2loIFNhZHJp4oCZcyBzZW5pb3IgcHJvZHVjdCBkZXNpZ25lciByZXN1bWUgY292ZXJpbmcgdHJ1c3QgJiBzYWZldHksIGdyb3d0aCwgZGVzaWduIHN5c3RlbXMsIGFuZCBsZWFkZXJzaGlwIGV4cGVyaWVuY2UuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL3Jlc3VtZVwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcImFydGljbGVcIixcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IHJlc3VtZVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2VydGlmaWNhdGVzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NlcnRpZmljYXRlc1NlY3Rpb25cIjtcbmltcG9ydCBFZHVjYXRpb25TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvblwiO1xuaW1wb3J0IEV4cGVyaWVuY2VTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvRXhwZXJpZW5jZVNlY3Rpb25cIjtcbmltcG9ydCBIZWFkZXJTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyU2VjdGlvblwiO1xuaW1wb3J0IFNraWxsc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9Ta2lsbHNTZWN0aW9uXCI7XG5pbXBvcnQgVm9sdW50ZWVyU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1ZvbHVudGVlclNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIHByb2Zlc3Npb25hbEV4cGVyaWVuY2UsXG4gIHJlc3VtZUFjdGlvbnMsXG4gIHJlc3VtZUNlcnRpZmljYXRlcyxcbiAgcmVzdW1lRWR1Y2F0aW9uLFxuICByZXN1bWVTdW1tYXJ5LFxuICBza2lsbENhdGVnb3JpZXMsXG4gIHZvbHVudGVlckV4cGVyaWVuY2UsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHsgcmVzdW1lUGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5cbmNvbnN0IFJlc3VtZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLnJlc3VtZVBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlYWRlclNlY3Rpb24gc3VtbWFyeT17cmVzdW1lU3VtbWFyeX0gYWN0aW9ucz17cmVzdW1lQWN0aW9uc30gLz5cbiAgICAgIDxFeHBlcmllbmNlU2VjdGlvbiBpdGVtcz17cHJvZmVzc2lvbmFsRXhwZXJpZW5jZX0gLz5cbiAgICAgIDxWb2x1bnRlZXJTZWN0aW9uIGl0ZW1zPXt2b2x1bnRlZXJFeHBlcmllbmNlfSAvPlxuICAgICAgPFNraWxsc1NlY3Rpb24gY2F0ZWdvcmllcz17c2tpbGxDYXRlZ29yaWVzfSAvPlxuICAgICAgPEVkdWNhdGlvblNlY3Rpb24gaXRlbXM9e3Jlc3VtZUVkdWNhdGlvbn0gLz5cbiAgICAgIDxDZXJ0aWZpY2F0ZXNTZWN0aW9uIGNlcnRpZmljYXRlcz17cmVzdW1lQ2VydGlmaWNhdGVzfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lUGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSEE7QUFJQSxJQUFlLGlFQUEyQix1QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRywwQkFBMEI7Ozs7QUNhOUIsSUFBTSxhQUFhO0FBQUEsRUFDakI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLEVBQ2pCO0FBQUEsTUFDcUI7QUFBQSxFQUNyQixNQUFNLGNBQWMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsRUFDbkMsTUFBTSxTQUFTO0FBQUEsSUFDYixHQUFHO0FBQUEsT0FDQyxpQkFBaUIsRUFBRSxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQUEsSUFDM0MsY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsYUFBYTtBQUFBLElBQ2Y7QUFBQSxPQUNHO0FBQUEsRUFDTDtBQUFBLEVBR0EsTUFBTSxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBRTFELE1BQU0sb0JBQW9CLENBQUMsQ0FBQztBQUFBLEVBRTVCLE1BQU0sZ0NBQ0osdUJBb0JFLGVBcEJGO0FBQUEsSUFDRSxXQUFXLG9CQUFvQixRQUFRLEVBQUUsSUFBSSxVQUFVLElBQUksTUFBTTtBQUFBLElBQ2pFLGdCQUFlO0FBQUEsSUFDZixTQUFTO0FBQUEsSUFDVCxZQUFZLG9CQUFvQixXQUFXO0FBQUEsSUFKN0MsVUFvQkU7QUFBQSxzQkFkQSx1QkFLRSxvQkFMRjtBQUFBLFFBQ0UsU0FBUyxnQkFBZ0Isb0JBQW9CLE9BQU87QUFBQSxRQUNwRCxJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsUUFGeEIsVUFJRztBQUFBLFNBSkgsaUNBS0U7QUFBQSxPQUNBLFVBQVUseUJBQ1YsdUJBS0Usb0JBTEY7QUFBQSxRQUNFLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUZSLFVBSUcsVUFBVTtBQUFBLFNBSmIsaUNBS0U7QUFBQTtBQUFBLEtBbEJOLGdDQW9CRTtBQUFBLEVBR0osTUFBTSxVQUFVLG9CQUFvQixNQUFNLGVBQWUsSUFBSTtBQUFBLEVBQzdELE1BQU0sOEJBQ0osdUJBa0VFLGVBbEVGO0FBQUEsSUFBTztBQUFBLElBQVAsVUFrRUU7QUFBQSxNQWpFQztBQUFBLE1BQ0EsWUFBWSxDQUFDLGdDQUNaLHVCQUVFLG9CQUZGO0FBQUEsUUFBWSxTQUFTLG9CQUFvQixVQUFVO0FBQUEsUUFBYSxPQUFNO0FBQUEsUUFBdEUsVUFDRztBQUFBLFNBREgsaUNBRUU7QUFBQSxNQUVILCtCQUNDLHVCQUVFLG9CQUZGO0FBQUEsUUFBWSxTQUFRO0FBQUEsUUFBUSxPQUFNO0FBQUEsUUFBbEMsVUFDRztBQUFBLFNBREgsaUNBRUU7QUFBQSxNQUVILGNBQWMsV0FBVyxTQUFTLHFCQUNqQyx1QkF3QkUsZUF4QkY7QUFBQSxRQUFPLFNBQVM7QUFBQSxRQUFLLElBQUksRUFBRSxJQUFJLEVBQUU7QUFBQSxRQUFqQyxVQUNHLFdBQVcsSUFBSSxDQUFDLDhCQUNmLHVCQW9CRSxlQXBCRjtBQUFBLFVBQXVCLFdBQVU7QUFBQSxVQUFNLFNBQVM7QUFBQSxVQUFLLFlBQVc7QUFBQSxVQUFoRSxVQW9CRTtBQUFBLDRCQW5CQSx1QkFXRSxvQkFYRjtBQUFBLGNBQ0UsSUFBSTtBQUFBLGdCQUNGLE9BQU87QUFBQSxnQkFDUCxVQUFVO0FBQUEsZ0JBQ1YsWUFBWTtBQUFBLGdCQUNaLElBQUk7QUFBQSxnQkFDSixZQUFZO0FBQUEsZ0JBQ1osWUFBWTtBQUFBLGNBQ2Q7QUFBQSxjQVJGO0FBQUEsZ0RBV0U7QUFBQSw0QkFDRix1QkFNRSxvQkFORjtBQUFBLGNBQ0UsU0FBUTtBQUFBLGNBQ1IsT0FBTTtBQUFBLGNBQ04sSUFBSSxFQUFFLFlBQVksS0FBSyxZQUFZLElBQUk7QUFBQSxjQUh6QyxVQUtHO0FBQUEsZUFMSCxpQ0FNRTtBQUFBO0FBQUEsV0FuQlEsV0FBWixxQkFvQkUsQ0FDSDtBQUFBLFNBdkJILGlDQXdCRTtBQUFBLE1BRUgsVUFBVSxPQUFPLFNBQVMscUJBQ3pCLHVCQXdCRSxlQXhCRjtBQUFBLFFBQU8sU0FBUztBQUFBLFFBQUcsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFBLFFBQS9CLFVBQ0csT0FBTyxJQUFJLENBQUMsMEJBQ1gsdUJBb0JFLGVBcEJGO0FBQUEsVUFBbUIsV0FBVTtBQUFBLFVBQU0sU0FBUztBQUFBLFVBQUssWUFBVztBQUFBLFVBQTVELFVBb0JFO0FBQUEsNEJBbkJBLHVCQVdFLG9CQVhGO0FBQUEsY0FDRSxJQUFJO0FBQUEsZ0JBQ0YsT0FBTztBQUFBLGdCQUNQLFVBQVU7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osSUFBSTtBQUFBLGdCQUNKLFlBQVk7QUFBQSxnQkFDWixZQUFZO0FBQUEsY0FDZDtBQUFBLGNBUkY7QUFBQSxnREFXRTtBQUFBLDRCQUNGLHVCQU1FLG9CQU5GO0FBQUEsY0FDRSxTQUFRO0FBQUEsY0FDUixPQUFNO0FBQUEsY0FDTixJQUFJLEVBQUUsWUFBWSxLQUFLLFlBQVksSUFBSTtBQUFBLGNBSHpDLFVBS0c7QUFBQSxlQUxILGlDQU1FO0FBQUE7QUFBQSxXQW5CUSxPQUFaLHFCQW9CRSxDQUNIO0FBQUEsU0F2QkgsaUNBd0JFO0FBQUE7QUFBQSxLQWhFTixnQ0FrRUU7QUFBQSxFQUdKLElBQUksZ0JBQWdCO0FBQUEsSUFDbEIsdUJBQ0UsdUJBRUUsY0FGRjtBQUFBLE1BQU0sSUFBSTtBQUFBLE1BQVYsMEJBQ0UsdUJBQXFFLHFCQUFyRTtBQUFBLFFBQWEsSUFBSSxFQUFFLEdBQUcsR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUFBLFFBQW5ELFVBQXVEO0FBQUEsU0FBdkQsaUNBQXFFO0FBQUEsT0FEdkUsaUNBRUU7QUFBQSxFQUVOO0FBQUEsRUFFQSx1QkFBTyx1QkFBaUMsY0FBakM7QUFBQSxJQUFNLElBQUk7QUFBQSxJQUFWLFVBQW1CO0FBQUEsS0FBbkIsaUNBQWlDO0FBQUE7QUFHMUMsSUFBZTs7OztBQ3BKZixJQUFNLHVCQUF1QjtBQUFBLEVBQzNCO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxFQUNsQjtBQUFBLE1BQytCO0FBQUEsRUFDL0IsTUFBTSxRQUFRO0FBQUEsSUFDWixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLE9BQ2hCLG9CQUFvQixVQUFVLEVBQUUsaUJBQWlCLG1CQUFtQixJQUFJLENBQUM7QUFBQSxPQUMxRTtBQUFBLEVBQ0w7QUFBQSxFQUVBLHVCQUNFLHdCQUlFLGFBSkY7QUFBQSxJQUFLLElBQUk7QUFBQSxJQUFULDBCQUNFLHdCQUVFLG1CQUZGO0FBQUEsTUFBVyxVQUFTO0FBQUEsTUFBcEIsMEJBQ0Usd0JBQStCLGVBQS9CO0FBQUEsUUFBTyxTQUFTO0FBQUEsUUFBaEI7QUFBQSwwQ0FBK0I7QUFBQSxPQURqQyxpQ0FFRTtBQUFBLEtBSEosaUNBSUU7QUFBQTtBQUlOLElBQWU7Ozs7QUNyQmYsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLDRCQUM3Qix3QkFzQkUsZUF0QkY7QUFBQSxFQUFPLFdBQVU7QUFBQSxFQUFNLFNBQVM7QUFBQSxFQUFHLFlBQVc7QUFBQSxFQUE5QyxVQXNCRTtBQUFBLElBckJDLHdCQUNDLHdCQWVFLGFBZkY7QUFBQSxNQUNFLElBQUk7QUFBQSxRQUNGLFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxRQUNaLGdCQUFnQjtBQUFBLFFBQ2hCLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLGlCQUFpQjtBQUFBLFFBQ2pCLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFaRixVQWNHO0FBQUEsT0FkSCxpQ0FlRTtBQUFBLG9CQUVKLHdCQUVFLG9CQUZGO0FBQUEsTUFBWSxTQUFRO0FBQUEsTUFBSyxJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsTUFBL0MsVUFDRztBQUFBLE9BREgsaUNBRUU7QUFBQTtBQUFBLEdBckJKLGdDQXNCRTtBQUdKLElBQWU7Ozs7QUN2QmYsSUFBTSxzQkFBc0IsR0FBRyxtQ0FDN0Isd0JBZUUsOEJBZkY7QUFBQSxZQWVFO0FBQUEsb0JBZEEsd0JBQUMsdUJBQUQ7QUFBQSxNQUFlLHNCQUFNLHdCQUFDLGtDQUFEO0FBQUEsUUFBOEIsT0FBTTtBQUFBLFFBQVksSUFBSSxFQUFFLFVBQVUsVUFBVTtBQUFBLFNBQTFFLGlDQUE2RTtBQUFBLE1BQUksT0FBTTtBQUFBLE9BQTVHLGlDQUEySDtBQUFBLG9CQUN2SCx3QkFZRSxjQVpGO0FBQUEsTUFBTSxXQUFTO0FBQUEsTUFBQyxTQUFTO0FBQUEsTUFBekIsVUFDRyxhQUFhLElBQUksQ0FBQyxnQ0FDakIsd0JBUUUsY0FSRjtBQUFBLFFBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxRQUE1QiwwQkFDRix3QkFBQyxvQkFBRDtBQUFBLFVBQ0UsT0FBTyxZQUFZO0FBQUEsVUFDbkIsVUFBVSxZQUFZO0FBQUEsVUFDdEIsTUFBTSxZQUFZO0FBQUEsVUFDbEIsYUFBYSxZQUFZO0FBQUEsVUFDekIsZ0JBQWdCO0FBQUEsV0FMbEIsaUNBTUE7QUFBQSxTQVBzQyxHQUFHLFlBQVksUUFBUSxZQUFZLFFBQXZFLHNCQVFFLENBQ0g7QUFBQSxPQVhILGlDQVlFO0FBQUE7QUFBQSxHQWRSLGdDQWVFO0FBR0osSUFBZTs7O0FDM0JmO0FBSEE7QUFJQSxJQUFlLDJEQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxvQkFBb0I7Ozs7QUNLeEIsSUFBTSxtQkFBbUIsR0FBRyw0QkFDMUIsd0JBYUUsOEJBYkY7QUFBQSxFQUFzQixpQkFBZ0I7QUFBQSxFQUF0QyxVQWFFO0FBQUEsb0JBWkksd0JBQUMsdUJBQUQ7QUFBQSxNQUFlLHNCQUFNLHdCQUFDLDRCQUFEO0FBQUEsUUFBd0IsT0FBTTtBQUFBLFFBQVksSUFBSSxFQUFFLFVBQVUsVUFBVTtBQUFBLFNBQXBFLGlDQUF1RTtBQUFBLE1BQUksT0FBTTtBQUFBLE9BQXRHLGlDQUFrSDtBQUFBLG9CQUNsSCx3QkFVRSxlQVZGO0FBQUEsTUFBTyxTQUFTO0FBQUEsTUFBaEIsVUFDRyxNQUFNLElBQUksQ0FBQyx5QkFDZCx3QkFBQyxvQkFBRDtBQUFBLFFBRUUsT0FBTyxLQUFLO0FBQUEsUUFDWixVQUFVLEtBQUs7QUFBQSxRQUNmLFFBQVEsS0FBSztBQUFBLFFBQ2IsYUFBYSxLQUFLO0FBQUEsU0FKYixHQUFHLEtBQUssZUFBZSxLQUFLLFdBRG5DLHNCQU1BLENBQ0c7QUFBQSxPQVRILGlDQVVFO0FBQUE7QUFBQSxHQVpSLGdDQWFFO0FBR0osSUFBZTs7O0FDekJmO0FBSEE7QUFJQSxJQUFlLDRDQUFjLGlCQUFjLHdCQUFLLFFBQVE7QUFBQSxFQUN0RCxHQUFHO0FBQ0wsR0FBRyxHQUFHLG1CQUFnQix3QkFBSyxRQUFRO0FBQUEsRUFDakMsR0FBRztBQUNMLEdBQUcsR0FBRyxDQUFDLEdBQUcscUJBQXFCOzs7O0FDSy9CLElBQU0sb0JBQW9CO0FBQUEsRUFDeEIsUUFBUTtBQUFBLEVBQ1IsdUJBQU8sd0JBQUMsNkJBQUQ7QUFBQSxJQUF5QixPQUFNO0FBQUEsSUFBVSxJQUFJLEVBQUUsVUFBVSxVQUFVO0FBQUEsS0FBbkUsaUNBQXNFO0FBQUEsRUFDN0U7QUFBQSxzQkFFQSx3QkFjRSw4QkFkRjtBQUFBLFlBY0U7QUFBQSxvQkFiQSx3QkFBQyx1QkFBRDtBQUFBLE1BQWU7QUFBQSxNQUFZO0FBQUEsT0FBM0IsaUNBQXlDO0FBQUEsb0JBQ3JDLHdCQVdVLGVBWFY7QUFBQSxNQUFPLFNBQVM7QUFBQSxNQUFoQixVQUNHLE1BQU0sSUFBSSxDQUFDLHlCQUNkLHdCQUFDLG9CQUFEO0FBQUEsUUFFRSxPQUFPLEtBQUs7QUFBQSxRQUNaLFVBQVUsS0FBSztBQUFBLFFBQ2YsUUFBUSxLQUFLO0FBQUEsUUFDYixhQUFhLEtBQUs7QUFBQSxRQUNsQixZQUFZLEtBQUs7QUFBQSxTQUxaLEdBQUcsS0FBSyxXQUFXLEtBQUssUUFEL0Isc0JBT0EsQ0FDVztBQUFBLE9BVlgsaUNBV1U7QUFBQTtBQUFBLEdBYmhCLGdDQWNFO0FBR0osSUFBZTs7O0FDaENmO0FBSEE7QUFJQSxJQUFlLHdEQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxpQkFBaUI7OztBQ0hyQjtBQUhBO0FBSUEsSUFBZSx3REFBMkIsd0JBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsaUJBQWlCOzs7QUNIckI7QUFIQTtBQUlBLElBQWUsMERBQTJCLHdCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLG1CQUFtQjs7O0FDSHZCO0FBSEE7QUFJQSxJQUFlLHFEQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxjQUFjOzs7QUNVbEI7QUFBQTtBQVFBLElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxjQUFrQztBQUFBLEVBQ2xFLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFDdkIsTUFBTSxXQUFXLHNCQUFjLE1BQU0sWUFBWSxLQUFLLElBQUksQ0FBQztBQUFBLEVBRTNELE1BQU0saUJBQWlCLHlCQUFZLE1BQU07QUFBQSxJQUN2QyxJQUFJLE9BQU8sV0FBVyxhQUFhO0FBQUEsTUFDakMsT0FBTyxNQUFNO0FBQUEsSUFDZjtBQUFBLEtBQ0MsQ0FBQyxDQUFDO0FBQUEsRUFFTCxNQUFNLGNBQWMseUJBQVksWUFBWTtBQUFBLElBQzFDLElBQUksT0FBTyxXQUFXLGVBQWUsVUFBVSxPQUFPO0FBQUEsTUFDcEQsSUFBSTtBQUFBLFFBQ0YsTUFBTSxVQUFVLE1BQU07QUFBQSxVQUNwQixPQUFPLEdBQUcsUUFBUSxXQUFXLFFBQVE7QUFBQSxVQUNyQyxNQUFNLFFBQVE7QUFBQSxVQUNkLEtBQUssT0FBTyxTQUFTO0FBQUEsUUFDdkIsQ0FBQztBQUFBLFFBQ0QsT0FBTyxPQUFPO0FBQUEsUUFFZCxRQUFRLElBQUksOEJBQThCLEtBQUs7QUFBQTtBQUFBLElBRW5ELEVBQU87QUFBQSxNQUVMLElBQUksVUFBVSxXQUFXO0FBQUEsUUFDdkIsTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLFNBQVMsSUFBSTtBQUFBLFFBQ3hELE1BQU0sMkJBQTJCO0FBQUEsTUFDbkM7QUFBQTtBQUFBLEtBRUQsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUVaLE1BQU0sYUFBYTtBQUFBLElBQ2pCLGlCQUFpQjtBQUFBLElBQ2pCLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxNQUNULGlCQUFpQjtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxJQUNiO0FBQUEsT0FDSSxZQUFZO0FBQUEsTUFDZCxPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHVCQUNFLHdCQStJRSxhQS9JRjtBQUFBLElBQ0UsSUFBSTtBQUFBLE1BQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxNQUNuQixZQUFZO0FBQUEsSUFDZDtBQUFBLElBSkYsMEJBTUUsd0JBd0lFLG1CQXhJRjtBQUFBLGdDQUNFLHdCQXNJRSxlQXRJRjtBQUFBLFFBQU8sU0FBUztBQUFBLFFBQUcsWUFBVztBQUFBLFFBQVMsV0FBVTtBQUFBLFFBQWpELFVBc0lFO0FBQUEsMEJBcklBLHdCQUVFLG9CQUZGO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBVyxPQUFNO0FBQUEsWUFBckMsVUFDRyxRQUFRO0FBQUEsYUFEWCxpQ0FFRTtBQUFBLDBCQUNGLHdCQUEwQyxvQkFBMUM7QUFBQSxZQUFZLFNBQVE7QUFBQSxZQUFwQixVQUEwQixRQUFRO0FBQUEsYUFBbEMsaUNBQTBDO0FBQUEsMEJBQzFDLHdCQTBDRSxlQTFDRjtBQUFBLFlBQ0UsV0FBVyxFQUFFLElBQUksVUFBVSxJQUFJLE1BQU07QUFBQSxZQUNyQyxTQUFTO0FBQUEsWUFDVCxJQUFJO0FBQUEsY0FDRixPQUFPO0FBQUEsY0FDUCxVQUFVLEVBQUUsSUFBSSxRQUFRLElBQUksUUFBUTtBQUFBLFlBQ3RDO0FBQUEsWUFORixVQTBDRTtBQUFBLDhCQWxDQSx3QkFBQyxjQUFEO0FBQUEsZ0JBQ0Usc0JBQU0sd0JBQUMsa0JBQUQ7QUFBQSxrQkFBYyxJQUFJLEVBQUUsVUFBVSxXQUFXO0FBQUEsbUJBQXpDLGlDQUE0QztBQUFBLGdCQUNsRCxPQUFNO0FBQUEsZ0JBQ04sV0FBVTtBQUFBLGdCQUNWLE1BQUs7QUFBQSxnQkFDTCxRQUFPO0FBQUEsZ0JBQ1AsV0FBUztBQUFBLGdCQUNULElBQUk7QUFBQSxpQkFQTixpQ0FRQTtBQUFBLDhCQUNBLHdCQUFDLGNBQUQ7QUFBQSxnQkFDRSxzQkFBTSx3QkFBQyx5QkFBRDtBQUFBLGtCQUFxQixJQUFJLEVBQUUsVUFBVSxXQUFXO0FBQUEsbUJBQWhELGlDQUFtRDtBQUFBLGdCQUN6RCxPQUFNO0FBQUEsZ0JBQ04sV0FBVTtBQUFBLGdCQUNWLE1BQUs7QUFBQSxnQkFDTCxRQUFPO0FBQUEsZ0JBQ1AsV0FBUztBQUFBLGdCQUNULElBQUk7QUFBQSxpQkFQTixpQ0FRQTtBQUFBLDhCQUNBLHdCQUFDLGNBQUQ7QUFBQSxnQkFDRSxzQkFBTSx3QkFBQyxzQkFBRDtBQUFBLGtCQUFrQixJQUFJLEVBQUUsVUFBVSxXQUFXO0FBQUEsbUJBQTdDLGlDQUFnRDtBQUFBLGdCQUN0RCxPQUFNO0FBQUEsZ0JBQ04sV0FBVTtBQUFBLGdCQUNWLE1BQUs7QUFBQSxnQkFDTCxXQUFTO0FBQUEsZ0JBQ1QsSUFBSTtBQUFBLGlCQU5OLGlDQU9BO0FBQUEsOEJBQ0Esd0JBQUMsY0FBRDtBQUFBLGdCQUNFLHNCQUFNLHdCQUFDLDJCQUFEO0FBQUEsa0JBQXVCLElBQUksRUFBRSxVQUFVLFdBQVc7QUFBQSxtQkFBbEQsaUNBQXFEO0FBQUEsZ0JBQzNELE9BQU07QUFBQSxnQkFDTixJQUFJO0FBQUEscUJBQ0M7QUFBQSxrQkFDSCxXQUFXO0FBQUEsZ0JBQ2I7QUFBQSxpQkFORixpQ0FPQTtBQUFBO0FBQUEsYUF6Q0YsZ0NBMENFO0FBQUEsMEJBQ0Ysd0JBNERFLG9CQTVERjtBQUFBLFlBQVksU0FBUTtBQUFBLFlBQVEsT0FBTTtBQUFBLFlBQWlCLElBQUksRUFBRSxVQUFVLElBQUk7QUFBQSxZQUF2RSxXQUNJLE1BQU07QUFBQSxjQUNOLE1BQU0sT0FBTyxRQUFRO0FBQUEsY0FDckIsTUFBTSxtQkFBbUI7QUFBQSxnQkFDdkI7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUVBLE1BQU0sUUFBZ0QsQ0FBQztBQUFBLGNBQ3ZELElBQUksWUFBWTtBQUFBLGNBR2hCLE1BQU0sVUFBK0QsQ0FBQztBQUFBLGNBQ3RFLGlCQUFpQixRQUFRLENBQUMsV0FBVztBQUFBLGdCQUNuQyxNQUFNLFFBQVEsSUFBSSxPQUFPLE9BQU8sUUFBUSx1QkFBdUIsTUFBTSxHQUFHLElBQUk7QUFBQSxnQkFDNUUsSUFBSTtBQUFBLGdCQUNKLFFBQVEsUUFBUSxNQUFNLEtBQUssSUFBSSxPQUFPLE1BQU07QUFBQSxrQkFDMUMsUUFBUSxLQUFLO0FBQUEsb0JBQ1gsT0FBTyxNQUFNO0FBQUEsb0JBQ2IsS0FBSyxNQUFNLFFBQVEsTUFBTSxHQUFHO0FBQUEsb0JBQzVCLE1BQU0sTUFBTTtBQUFBLGtCQUNkLENBQUM7QUFBQSxnQkFDSDtBQUFBLGVBQ0Q7QUFBQSxjQUdELFFBQVEsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLO0FBQUEsY0FHeEMsUUFBUSxRQUFRLENBQUMsVUFBVTtBQUFBLGdCQUN6QixJQUFJLE1BQU0sUUFBUSxXQUFXO0FBQUEsa0JBQzNCLE1BQU0sS0FBSyxFQUFFLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUM7QUFBQSxnQkFDdEU7QUFBQSxnQkFDQSxNQUFNLEtBQUssRUFBRSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssQ0FBQztBQUFBLGdCQUMzQyxZQUFZLE1BQU07QUFBQSxlQUNuQjtBQUFBLGNBRUQsSUFBSSxZQUFZLEtBQUssUUFBUTtBQUFBLGdCQUMzQixNQUFNLEtBQUssRUFBRSxNQUFNLEtBQUssTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUM7QUFBQSxjQUN6RDtBQUFBLGNBRUEsT0FBTyxNQUFNLFNBQVMsb0JBQ3BCO0FBQUEsMEJBQ0csTUFBTSxJQUFJLENBQUMsTUFBTSxVQUNoQixLQUFLLHVCQUNILHdCQUVFLGFBRkY7QUFBQSxrQkFBSyxXQUFVO0FBQUEsa0JBQW1CLElBQUksRUFBRSxZQUFZLElBQUk7QUFBQSxrQkFBeEQsVUFDRyxLQUFLO0FBQUEsbUJBRG1CLE9BQTNCLHNCQUVFLG9CQUVGLHdCQUErQixRQUEvQjtBQUFBLDRCQUFtQixLQUFLO0FBQUEsbUJBQWIsT0FBWCxzQkFBK0IsQ0FFbkM7QUFBQSxpQkFURixpQ0FVRSxJQUVGO0FBQUEsZUFFRDtBQUFBLGFBM0RMLGlDQTRERTtBQUFBLFVBQ0QsMkJBQ0Msd0JBVUUsZ0JBVkY7QUFBQSxZQUNFLFNBQVE7QUFBQSxZQUNSLE9BQU07QUFBQSxZQUNOLE1BQUs7QUFBQSxZQUNMLDJCQUFXLHdCQUFDLHNCQUFELHFDQUFrQjtBQUFBLFlBQzdCLFNBQVM7QUFBQSxZQUNULFdBQVM7QUFBQSxZQUNULElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO0FBQUEsWUFQOUM7QUFBQSw4Q0FVRSxvQkFFRix3QkFVRSxnQkFWRjtBQUFBLFlBQ0UsV0FBVTtBQUFBLFlBQ1YsTUFBTSxRQUFRO0FBQUEsWUFDZCxTQUFRO0FBQUEsWUFDUixPQUFNO0FBQUEsWUFDTixNQUFLO0FBQUEsWUFDTCwyQkFBVyx3QkFBQyx5QkFBRCxxQ0FBcUI7QUFBQSxZQUNoQyxTQUFTO0FBQUEsWUFQWCxVQVNHLFFBQVE7QUFBQSxhQVRYLGlDQVVFO0FBQUE7QUFBQSxTQXBJTixnQ0FzSUU7QUFBQSxPQXZJSixpQ0F3SUU7QUFBQSxLQTlJSixpQ0ErSUU7QUFBQTtBQUlOLElBQWU7OztBQ3hOZjtBQUhBO0FBSUEsSUFBZSw2REFBMkIsd0JBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsc0JBQXNCOzs7O0FDSzFCLElBQU0sZ0JBQWdCLEdBQUcsaUNBQ3ZCLHdCQWFFLDhCQWJGO0FBQUEsWUFhRTtBQUFBLG9CQVpJLHdCQUFDLHVCQUFEO0FBQUEsTUFBZSxzQkFBTSx3QkFBQyw4QkFBRDtBQUFBLFFBQTBCLE9BQU07QUFBQSxRQUFVLElBQUksRUFBRSxVQUFVLFVBQVU7QUFBQSxTQUFwRSxpQ0FBdUU7QUFBQSxNQUFJLE9BQU07QUFBQSxPQUF0RyxpQ0FBK0c7QUFBQSxvQkFDL0csd0JBVUUsY0FWRjtBQUFBLE1BQU0sV0FBUztBQUFBLE1BQUMsU0FBUztBQUFBLE1BQXpCLFVBQ0csV0FBVyxJQUFJLENBQUMsNkJBQ2Ysd0JBTUUsY0FORjtBQUFBLFFBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxRQUE1QiwwQkFDRix3QkFBQyxvQkFBRDtBQUFBLFVBQ0UsT0FBTyxTQUFTO0FBQUEsVUFDaEIsUUFBUSxTQUFTO0FBQUEsVUFDakIsZ0JBQWdCO0FBQUEsV0FIbEIsaUNBSUE7QUFBQSxTQUxzQyxTQUFTLE9BQTdDLHNCQU1FLENBQ0g7QUFBQSxPQVRILGlDQVVFO0FBQUE7QUFBQSxHQVpSLGdDQWFFO0FBR0osSUFBZTs7O0FDekJmO0FBSEE7QUFJQSxJQUFlLGtFQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRywyQkFBMkI7Ozs7QUNLL0IsSUFBTSxtQkFBbUIsR0FBRyw0QkFDMUIsd0JBZ0JFLDhCQWhCRjtBQUFBLEVBQXNCLGlCQUFnQjtBQUFBLEVBQXRDLFVBZ0JFO0FBQUEsb0JBZkksd0JBQUMsdUJBQUQ7QUFBQSxNQUNFLHNCQUFNLHdCQUFDLG1DQUFEO0FBQUEsUUFBK0IsT0FBTTtBQUFBLFFBQVksSUFBSSxFQUFFLFVBQVUsVUFBVTtBQUFBLFNBQTNFLGlDQUE4RTtBQUFBLE1BQ3BGLE9BQU07QUFBQSxPQUZSLGlDQUdBO0FBQUEsb0JBQ0Esd0JBVUUsZUFWRjtBQUFBLE1BQU8sU0FBUztBQUFBLE1BQWhCLFVBQ0csTUFBTSxJQUFJLENBQUMseUJBQ2Qsd0JBQUMsb0JBQUQ7QUFBQSxRQUVFLE9BQU8sS0FBSztBQUFBLFFBQ1osVUFBVSxLQUFLO0FBQUEsUUFDZixRQUFRLEtBQUs7QUFBQSxRQUNiLGFBQWEsS0FBSztBQUFBLFNBSmIsR0FBRyxLQUFLLGdCQUFnQixLQUFLLFFBRHBDLHNCQU1BLENBQ0c7QUFBQSxPQVRILGlDQVVFO0FBQUE7QUFBQSxHQWZSLGdDQWdCRTtBQUdKLElBQWU7OztBQ3JCUixJQUFNLGdCQUErQjtBQUFBLEVBQzFDLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLGFBQ0U7QUFDSjtBQUVPLElBQU0sZ0JBQThCO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSO0FBRU8sSUFBTSx5QkFBc0Q7QUFBQSxFQUNqRTtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFDRTtBQUFBLElBQ0YsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsYUFDRTtBQUFBLElBQ0YsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLHNCQUEwRDtBQUFBLEVBQ3JFO0FBQUEsSUFDRSxjQUFjO0FBQUEsSUFDZCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixhQUNFO0FBQUEsRUFDSjtBQUNGO0FBRU8sSUFBTSxrQkFBZ0Q7QUFBQSxFQUMzRDtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGtCQUFnRDtBQUFBLEVBQzNEO0FBQUEsSUFDRSxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixhQUNFO0FBQUEsRUFDSjtBQUNGO0FBRU8sSUFBTSxxQkFBbUQ7QUFBQSxFQUM5RDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsRUFDZjtBQUNGOzs7QUN6SUEsSUFBTSxVQUFVLGFBQVc7QUFFM0IsSUFBTSx1QkFBdUM7QUFBQSxFQUMzQyxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixhQUFhLGNBQWM7QUFBQSxFQUMzQixLQUFLLEdBQUc7QUFBQSxFQUNSLE9BQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULE1BQU0sY0FBYztBQUFBLElBQ3BCLFVBQVUsY0FBYztBQUFBLElBQ3hCLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULGlCQUFpQjtBQUFBLE1BQ2pCLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxxQkFBbUM7QUFBQSxFQUM5QyxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOzs7O0FDaEJBLElBQU0sYUFBYSxNQUFNO0FBQUEsRUFDdkIsdUJBQ0U7QUFBQSxjQVNFO0FBQUEsc0JBUkEseUJBQUMsYUFBRDtBQUFBLFdBQVM7QUFBQSxTQUFULGlDQUE2QjtBQUFBLHNCQUU3Qix5QkFBQyx1QkFBRDtBQUFBLFFBQWUsU0FBUztBQUFBLFFBQWUsU0FBUztBQUFBLFNBQWhELGlDQUErRDtBQUFBLHNCQUMvRCx5QkFBQywyQkFBRDtBQUFBLFFBQW1CLE9BQU87QUFBQSxTQUExQixpQ0FBa0Q7QUFBQSxzQkFDbEQseUJBQUMsMEJBQUQ7QUFBQSxRQUFrQixPQUFPO0FBQUEsU0FBekIsaUNBQThDO0FBQUEsc0JBQzlDLHlCQUFDLHVCQUFEO0FBQUEsUUFBZSxZQUFZO0FBQUEsU0FBM0IsaUNBQTRDO0FBQUEsc0JBQzVDLHlCQUFDLDBCQUFEO0FBQUEsUUFBa0IsT0FBTztBQUFBLFNBQXpCLGlDQUEwQztBQUFBLHNCQUMxQyx5QkFBQyw2QkFBRDtBQUFBLFFBQXFCLGNBQWM7QUFBQSxTQUFuQyxpQ0FBdUQ7QUFBQTtBQUFBLEtBUnpELGdDQVNFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiNjI0RDc5MTU5MkM5OEM4RDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
