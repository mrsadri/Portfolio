import {
  SectionHeader_default
} from "./chunk-x3hrb28v.js";
import {
  LinkedIn_default
} from "./chunk-8x20x6j8.js";
import {
  EmailRounded_default
} from "./chunk-ahhs5fwx.js";
import {
  Seo_default,
  site_default
} from "./chunk-aj4jdr23.js";
import"./chunk-56dhb304.js";
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
} from "./chunk-ygqezw1f.js";

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

// src/features/resume/components/CertificatesSection.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var CertificatesSection = ({ certificates }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ResumeSectionWrapper_default, {
  children: [
    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(SectionHeader_default, {
      variant: "compact",
      icon: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(WorkspacePremiumOutlined_default, {
        color: "secondary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Certificates"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
      container: true,
      spacing: 3,
      children: certificates.map((certificate) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
        size: { xs: 12, md: 6 },
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ResumeCard_default, {
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
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var EducationSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ResumeSectionWrapper_default, {
  backgroundColor: "paper",
  children: [
    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SectionHeader_default, {
      variant: "compact",
      icon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(HistoryEduOutlined_default, {
        color: "secondary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Education"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
      spacing: 3,
      children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ResumeCard_default, {
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
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var ExperienceSection = ({
  title = "Professional Experience",
  icon = /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(WorkHistoryOutlined_default, {
    color: "primary",
    sx: { fontSize: "1.75rem" }
  }, undefined, false, undefined, this),
  items
}) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ResumeSectionWrapper_default, {
  children: [
    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(SectionHeader_default, {
      variant: "compact",
      icon,
      title
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
      spacing: 3,
      children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ResumeCard_default, {
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
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
    sx: {
      py: { xs: 6, md: 8 },
      background: "linear-gradient(135deg, rgba(31,111,235,0.1), rgba(90,200,250,0.14))"
    },
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
        spacing: 2,
        alignItems: "center",
        textAlign: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
            variant: "overline",
            color: "secondary",
            children: summary.subtitle
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
            variant: "h2",
            children: summary.title
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
            direction: { xs: "column", sm: "row" },
            spacing: 1.5,
            sx: {
              width: "100%",
              maxWidth: { xs: "100%", sm: "600px" },
              gap: { xs: 1.5, sm: 1.5 }
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(LinkedIn_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "LinkedIn",
                component: "a",
                href: "https://www.linkedin.com/in/msadri/",
                target: "_blank",
                clickable: true,
                sx: {
                  ...chipStyles,
                  minHeight: 44,
                  "& .MuiChip-label": {
                    paddingLeft: 1,
                    paddingRight: 1.5
                  }
                }
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(LanguageRounded_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "Portfolio",
                component: "a",
                href: "https://masihsadri.com",
                target: "_blank",
                clickable: true,
                sx: {
                  ...chipStyles,
                  minHeight: 44,
                  "& .MuiChip-label": {
                    paddingLeft: 1,
                    paddingRight: 1.5
                  }
                }
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(EmailRounded_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "sadrimasih@gmail.com",
                component: "a",
                href: "mailto:sadrimasih@gmail.com",
                clickable: true,
                sx: {
                  ...chipStyles,
                  minHeight: 44,
                  "& .MuiChip-label": {
                    paddingLeft: 1,
                    paddingRight: 1.5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }
                }
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Chip_default, {
                icon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(LocationOnRounded_default, {
                  sx: { fontSize: "1.125rem" }
                }, undefined, false, undefined, this),
                label: "Tehran, Iran • Willing to relocate",
                sx: {
                  ...chipStyles,
                  minHeight: 44,
                  "&:hover": undefined,
                  "& .MuiChip-label": {
                    paddingLeft: 1,
                    paddingRight: 1.5
                  }
                }
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
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
              return parts.length > 0 ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
                children: parts.map((part, index) => part.bold ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
                  component: "span",
                  sx: { fontWeight: 700 },
                  children: part.text
                }, index, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV("span", {
                  children: part.text
                }, index, false, undefined, this))
              }, undefined, false, undefined, this) : text;
            })()
          }, undefined, false, undefined, this),
          isMobile ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Button_default, {
            variant: "contained",
            color: "primary",
            size: "large",
            startIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ShareRounded_default, {}, undefined, false, undefined, this),
            onClick: handleShare,
            fullWidth: true,
            sx: { maxWidth: { xs: "100%", sm: "400px" } },
            children: "Share Resume"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Button_default, {
            component: "a",
            href: actions.href,
            variant: "contained",
            color: "primary",
            size: "large",
            startIcon: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(DownloadRounded_default, {}, undefined, false, undefined, this),
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
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var SkillsSection = ({ categories }) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ResumeSectionWrapper_default, {
  children: [
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(SectionHeader_default, {
      variant: "compact",
      icon: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(MilitaryTechOutlined_default, {
        color: "primary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Skills"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Grid_default, {
      container: true,
      spacing: 3,
      children: categories.map((category) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Grid_default, {
        size: { xs: 12, md: 4 },
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ResumeCard_default, {
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
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var VolunteerSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ResumeSectionWrapper_default, {
  backgroundColor: "paper",
  children: [
    /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(SectionHeader_default, {
      variant: "compact",
      icon: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(VolunteerActivismOutlined_default, {
        color: "secondary",
        sx: { fontSize: "1.75rem" }
      }, undefined, false, undefined, this),
      title: "Volunteer Activity"
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
      spacing: 3,
      children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ResumeCard_default, {
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
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var ResumePage = () => {
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Seo_default, {
        ...resumePageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(HeaderSection_default, {
        summary: resumeSummary,
        actions: resumeActions
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ExperienceSection_default, {
        items: professionalExperience
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(VolunteerSection_default, {
        items: volunteerExperience
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(SkillsSection_default, {
        categories: skillCategories
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(EducationSection_default, {
        items: resumeEducation
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(CertificatesSection_default, {
        certificates: resumeCertificates
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ResumePage_default = ResumePage;
export {
  ResumePage_default as default
};

//# debugId=624C73CFB1873F4164756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1dvcmtzcGFjZVByZW1pdW1PdXRsaW5lZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvUmVzdW1lQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL1Jlc3VtZVNlY3Rpb25XcmFwcGVyLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0hpc3RvcnlFZHVPdXRsaW5lZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1dvcmtIaXN0b3J5T3V0bGluZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL0V4cGVyaWVuY2VTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRG93bmxvYWRSb3VuZGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9MYW5ndWFnZVJvdW5kZWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0xvY2F0aW9uT25Sb3VuZGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9TaGFyZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL0hlYWRlclNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9NaWxpdGFyeVRlY2hPdXRsaW5lZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvU2tpbGxzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1ZvbHVudGVlckFjdGl2aXNtT3V0bGluZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL3Jlc3VtZS9jb21wb25lbnRzL1ZvbHVudGVlclNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9yZXN1bWUvUmVzdW1lUGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkuNjggMTMuNjkgMTIgMTEuOTNsMi4zMSAxLjc2LS44OC0yLjg1TDE1Ljc1IDloLTIuODRMMTIgNi4xOSAxMS4wOSA5SDguMjVsMi4zMSAxLjg0ek0yMCAxMGMwLTQuNDItMy41OC04LTgtOHMtOCAzLjU4LTggOGMwIDIuMDMuNzYgMy44NyAyIDUuMjhWMjNsNi0yIDYgMnYtNy43MmMxLjI0LTEuNDEgMi0zLjI1IDItNS4yOG0tOC02YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNm0wIDE1LTQgMS4wMnYtMy4xYzEuMTguNjggMi41NCAxLjA4IDQgMS4wOHMyLjgyLS40IDQtMS4wOHYzLjF6XCJcbn0pLCAnV29ya3NwYWNlUHJlbWl1bU91dGxpbmVkJyk7IiwKICAgICJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIFJlc3VtZUNhcmRQcm9wcyA9IHtcbiAgLy8gSGVhZGVyIGNvbnRlbnRcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIHBlcmlvZD86IHN0cmluZztcbiAgeWVhcj86IHN0cmluZztcbiAgXG4gIC8vIEJvZHkgY29udGVudFxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaGlnaGxpZ2h0cz86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBza2lsbHM/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgXG4gIC8vIExheW91dCBvcHRpb25zXG4gIHVzZUNhcmRDb250ZW50PzogYm9vbGVhbjtcbiAgc3g/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbn07XG5cbmNvbnN0IFJlc3VtZUNhcmQgPSAoe1xuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIHBlcmlvZCxcbiAgeWVhcixcbiAgZGVzY3JpcHRpb24sXG4gIGhpZ2hsaWdodHMsXG4gIHNraWxscyxcbiAgdXNlQ2FyZENvbnRlbnQgPSBmYWxzZSxcbiAgc3gsXG59OiBSZXN1bWVDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgY2FyZFBhZGRpbmcgPSB7IHhzOiAzLCBtZDogNCB9O1xuICBjb25zdCBjYXJkU3ggPSB7XG4gICAgcDogY2FyZFBhZGRpbmcsXG4gICAgLi4uKHVzZUNhcmRDb250ZW50ID8geyBoZWlnaHQ6IFwiMTAwJVwiIH0gOiB7fSksXG4gICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICBib3JkZXJDb2xvcjogXCJkaXZpZGVyXCIsXG4gICAgYm94U2hhZG93OiBcIjAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKVwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMnMgZWFzZS1pbi1vdXRcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNClcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcInByaW1hcnkubGlnaHRcIixcbiAgICB9LFxuICAgIC4uLnN4LFxuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGlzIGlzIGEgc2tpbGxzIGNhcmQgKG5vIHBlcmlvZC95ZWFyL3N1YnRpdGxlKVxuICBjb25zdCBpc1NraWxsc0NhcmQgPSAhIXNraWxscyAmJiAhc3VidGl0bGUgJiYgIXBlcmlvZCAmJiAheWVhcjtcbiAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSBjZXJ0aWZpY2F0ZSBjYXJkIChoYXMgeWVhcilcbiAgY29uc3QgaXNDZXJ0aWZpY2F0ZUNhcmQgPSAhIXllYXI7XG5cbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IChcbiAgICA8U3RhY2tcbiAgICAgIGRpcmVjdGlvbj17aXNDZXJ0aWZpY2F0ZUNhcmQgPyBcInJvd1wiIDogeyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBzcGFjaW5nPXsxfVxuICAgICAgYWxpZ25JdGVtcz17aXNDZXJ0aWZpY2F0ZUNhcmQgPyBcImNlbnRlclwiIDogdW5kZWZpbmVkfVxuICAgID5cbiAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICB2YXJpYW50PXtpc1NraWxsc0NhcmQgfHwgaXNDZXJ0aWZpY2F0ZUNhcmQgPyBcImg2XCIgOiBcImg1XCJ9XG4gICAgICAgIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7KHBlcmlvZCB8fCB5ZWFyKSAmJiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwZXJpb2QgfHwgeWVhcn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L1N0YWNrPlxuICApO1xuXG4gIGNvbnN0IHNwYWNpbmcgPSBpc0NlcnRpZmljYXRlQ2FyZCA/IDEuNSA6IGlzU2tpbGxzQ2FyZCA/IDIgOiAyO1xuICBjb25zdCBib2R5Q29udGVudCA9IChcbiAgICA8U3RhY2sgc3BhY2luZz17c3BhY2luZ30+XG4gICAgICB7aGVhZGVyQ29udGVudH1cbiAgICAgIHtzdWJ0aXRsZSAmJiAhaXNTa2lsbHNDYXJkICYmIChcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17aXNDZXJ0aWZpY2F0ZUNhcmQgPyBcImJvZHkyXCIgOiBcInN1YnRpdGxlMVwifSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICApfVxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICAgIHtoaWdobGlnaHRzICYmIGhpZ2hsaWdodHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjJ9IHN4PXt7IG1iOiAwIH19PlxuICAgICAgICAgIHtoaWdobGlnaHRzLm1hcCgoaGlnaGxpZ2h0KSA9PiAoXG4gICAgICAgICAgICA8U3RhY2sga2V5PXtoaWdobGlnaHR9IGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeS5tYWluXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICBtdDogMC4yNSxcbiAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOKck1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQucHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgZm9udFdlaWdodDogNDAwLCBsaW5lSGVpZ2h0OiAxLjYgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuICAgICAge3NraWxscyAmJiBza2lsbHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfSBzeD17eyBtYjogMCB9fT5cbiAgICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcbiAgICAgICAgICAgIDxTdGFjayBrZXk9e3NraWxsfSBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnkubWFpblwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgbXQ6IDAuMjUsXG4gICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDinJNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRXZWlnaHQ6IDQwMCwgbGluZUhlaWdodDogMS42IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2tpbGx9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gICk7XG5cbiAgaWYgKHVzZUNhcmRDb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkIHN4PXtjYXJkU3h9PlxuICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgcDogMCwgXCImOmxhc3QtY2hpbGRcIjogeyBwYjogMCB9IH19Pntib2R5Q29udGVudH08L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPENhcmQgc3g9e2NhcmRTeH0+e2JvZHlDb250ZW50fTwvQ2FyZD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWVDYXJkO1xuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFJlc3VtZVNlY3Rpb25XcmFwcGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGJhY2tncm91bmRDb2xvcj86IFwiZGVmYXVsdFwiIHwgXCJwYXBlclwiO1xuICBzeD86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufTtcblxuY29uc3QgUmVzdW1lU2VjdGlvbldyYXBwZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgYmFja2dyb3VuZENvbG9yID0gXCJkZWZhdWx0XCIsXG4gIHN4LFxufTogUmVzdW1lU2VjdGlvbldyYXBwZXJQcm9wcykgPT4ge1xuICBjb25zdCBib3hTeCA9IHtcbiAgICBweTogeyB4czogNiwgbWQ6IDEwIH0sXG4gICAgLi4uKGJhY2tncm91bmRDb2xvciA9PT0gXCJwYXBlclwiID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiIH0gOiB7fSksXG4gICAgLi4uc3gsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtib3hTeH0+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PntjaGlsZHJlbn08L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWVTZWN0aW9uV3JhcHBlcjtcblxuIiwKICAgICJpbXBvcnQgV29ya3NwYWNlUHJlbWl1bU91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Xb3Jrc3BhY2VQcmVtaXVtT3V0bGluZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiQHNoYXJlZC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBSZXN1bWVDYXJkIGZyb20gXCIuL1Jlc3VtZUNhcmRcIjtcbmltcG9ydCBSZXN1bWVTZWN0aW9uV3JhcHBlciBmcm9tIFwiLi9SZXN1bWVTZWN0aW9uV3JhcHBlclwiO1xuaW1wb3J0IHR5cGUgeyBDZXJ0aWZpY2F0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzID0ge1xuICBjZXJ0aWZpY2F0ZXM6IFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGlvbj47XG59O1xuXG5jb25zdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uID0gKHsgY2VydGlmaWNhdGVzIH06IENlcnRpZmljYXRlc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXI+XG4gICAgPFNlY3Rpb25IZWFkZXIgdmFyaWFudD1cImNvbXBhY3RcIiBpY29uPXs8V29ya3NwYWNlUHJlbWl1bU91dGxpbmVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIHN4PXt7IGZvbnRTaXplOiBcIjEuNzVyZW1cIiB9fSAvPn0gdGl0bGU9XCJDZXJ0aWZpY2F0ZXNcIiAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge2NlcnRpZmljYXRlcy5tYXAoKGNlcnRpZmljYXRlKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtgJHtjZXJ0aWZpY2F0ZS5uYW1lfS0ke2NlcnRpZmljYXRlLnllYXJ9YH0+XG4gICAgICAgICAgPFJlc3VtZUNhcmRcbiAgICAgICAgICAgIHRpdGxlPXtjZXJ0aWZpY2F0ZS5uYW1lfVxuICAgICAgICAgICAgc3VidGl0bGU9e2NlcnRpZmljYXRlLmlzc3Vlcn1cbiAgICAgICAgICAgIHllYXI9e2NlcnRpZmljYXRlLnllYXJ9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17Y2VydGlmaWNhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICB1c2VDYXJkQ29udGVudD17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gIDwvUmVzdW1lU2VjdGlvbldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkgNHYxLjM4Yy0uODMtLjMzLTEuNzItLjUtMi42MS0uNS0xLjc5IDAtMy41OC42OC00Ljk1IDIuMDVsMy4zMyAzLjMzaDEuMTF2MS4xMWMuODYuODYgMS45OCAxLjMxIDMuMTEgMS4zNlYxNUg2djNjMCAxLjEuOSAyIDIgMmgxMGMxLjY2IDAgMy0xLjM0IDMtM1Y0em0tMS4xMSA2LjQxVjguMjZINS42MUw0LjU3IDcuMjJhNS4wNyA1LjA3IDAgMCAxIDEuODItLjM0YzEuMzQgMCAyLjU5LjUyIDMuNTQgMS40NmwxLjQxIDEuNDEtLjIuMmMtLjUxLjUxLTEuMTkuOC0xLjkyLjgtLjQ3IDAtLjkzLS4xMi0xLjMzLS4zNE0xOSAxN2MwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMXYtMmgtNnYtMi41OWMuNTctLjIzIDEuMS0uNTcgMS41Ni0xLjAzbC4yLS4yTDE1LjU5IDE0SDE3di0xLjQxbC02LTUuOTdWNmg4elwiXG59KSwgJ0hpc3RvcnlFZHVPdXRsaW5lZCcpOyIsCiAgICAiaW1wb3J0IEhpc3RvcnlFZHVPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvSGlzdG9yeUVkdU91dGxpbmVkXCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiQHNoYXJlZC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBSZXN1bWVDYXJkIGZyb20gXCIuL1Jlc3VtZUNhcmRcIjtcbmltcG9ydCBSZXN1bWVTZWN0aW9uV3JhcHBlciBmcm9tIFwiLi9SZXN1bWVTZWN0aW9uV3JhcHBlclwiO1xuaW1wb3J0IHR5cGUgeyBFZHVjYXRpb25JdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgRWR1Y2F0aW9uU2VjdGlvblByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPjtcbn07XG5cbmNvbnN0IEVkdWNhdGlvblNlY3Rpb24gPSAoeyBpdGVtcyB9OiBFZHVjYXRpb25TZWN0aW9uUHJvcHMpID0+IChcbiAgPFJlc3VtZVNlY3Rpb25XcmFwcGVyIGJhY2tncm91bmRDb2xvcj1cInBhcGVyXCI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHZhcmlhbnQ9XCJjb21wYWN0XCIgaWNvbj17PEhpc3RvcnlFZHVPdXRsaW5lZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBzeD17eyBmb250U2l6ZTogXCIxLjc1cmVtXCIgfX0gLz59IHRpdGxlPVwiRWR1Y2F0aW9uXCIgLz5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPFJlc3VtZUNhcmRcbiAgICAgICAgICBrZXk9e2Ake2l0ZW0uaW5zdGl0dXRpb259LSR7aXRlbS5wcm9ncmFtfWB9XG4gICAgICAgICAgdGl0bGU9e2l0ZW0ucHJvZ3JhbX1cbiAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICBwZXJpb2Q9e2l0ZW0ucGVyaW9kfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICA8L1Jlc3VtZVNlY3Rpb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbihbLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNCAxOVY4aDE2djMuMjljLjcyLjIyIDEuNC41NCAyIC45N1Y4YzAtMS4xMS0uODktMi0yLTJoLTRWNGMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDcuNjhjLS4zLS42Mi0uNS0xLjI5LS42LTJ6bTYtMTVoNHYyaC00elwiXG59LCBcIjBcIiksIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4IDEzYy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNW0xLjY1IDcuMzVMMTcuNSAxOC4yVjE1aDF2Mi43OWwxLjg1IDEuODV6XCJcbn0sIFwiMVwiKV0sICdXb3JrSGlzdG9yeU91dGxpbmVkJyk7IiwKICAgICJpbXBvcnQgV29ya0hpc3RvcnlPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvV29ya0hpc3RvcnlPdXRsaW5lZFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIkBzaGFyZWQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgUmVzdW1lQ2FyZCBmcm9tIFwiLi9SZXN1bWVDYXJkXCI7XG5pbXBvcnQgUmVzdW1lU2VjdGlvbldyYXBwZXIgZnJvbSBcIi4vUmVzdW1lU2VjdGlvbldyYXBwZXJcIjtcbmltcG9ydCB0eXBlIHsgVGltZWxpbmVJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgRXhwZXJpZW5jZVNlY3Rpb25Qcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PFRpbWVsaW5lSXRlbT47XG59O1xuXG5jb25zdCBFeHBlcmllbmNlU2VjdGlvbiA9ICh7XG4gIHRpdGxlID0gXCJQcm9mZXNzaW9uYWwgRXhwZXJpZW5jZVwiLFxuICBpY29uID0gPFdvcmtIaXN0b3J5T3V0bGluZWRJY29uIGNvbG9yPVwicHJpbWFyeVwiIHN4PXt7IGZvbnRTaXplOiBcIjEuNzVyZW1cIiB9fSAvPixcbiAgaXRlbXMsXG59OiBFeHBlcmllbmNlU2VjdGlvblByb3BzKSA9PiAoXG4gIDxSZXN1bWVTZWN0aW9uV3JhcHBlcj5cbiAgICA8U2VjdGlvbkhlYWRlciB2YXJpYW50PVwiY29tcGFjdFwiIGljb249e2ljb259IHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPFJlc3VtZUNhcmRcbiAgICAgICAgICBrZXk9e2Ake2l0ZW0uY29tcGFueX0tJHtpdGVtLnJvbGV9YH1cbiAgICAgICAgICB0aXRsZT17aXRlbS5yb2xlfVxuICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLmNvbXBhbnl9XG4gICAgICAgICAgcGVyaW9kPXtpdGVtLnBlcmlvZH1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBoaWdobGlnaHRzPXtpdGVtLmhpZ2hsaWdodHN9XG4gICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICA8L1Jlc3VtZVNlY3Rpb25XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZVNlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNTkgOUgxNVY0YzAtLjU1LS40NS0xLTEtMWgtNGMtLjU1IDAtMSAuNDUtMSAxdjVINy40MWMtLjg5IDAtMS4zNCAxLjA4LS43MSAxLjcxbDQuNTkgNC41OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDBsNC41OS00LjU5Yy42My0uNjMuMTktMS43MS0uNy0xLjcxTTUgMTljMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFINmMtLjU1IDAtMSAuNDUtMSAxXCJcbn0pLCAnRG93bmxvYWRSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMm02LjkzIDZoLTIuOTVjLS4zMi0xLjI1LS43OC0yLjQ1LTEuMzgtMy41NiAxLjg0LjYzIDMuMzcgMS45MSA0LjMzIDMuNTZNMTIgNC4wNGMuODMgMS4yIDEuNDggMi41MyAxLjkxIDMuOTZoLTMuODJjLjQzLTEuNDMgMS4wOC0yLjc2IDEuOTEtMy45Nk00LjI2IDE0QzQuMSAxMy4zNiA0IDEyLjY5IDQgMTJzLjEtMS4zNi4yNi0yaDMuMzhjLS4wOC42Ni0uMTQgMS4zMi0uMTQgMnMuMDYgMS4zNC4xNCAyem0uODIgMmgyLjk1Yy4zMiAxLjI1Ljc4IDIuNDUgMS4zOCAzLjU2LTEuODQtLjYzLTMuMzctMS45LTQuMzMtMy41Nm0yLjk1LThINS4wOGMuOTYtMS42NiAyLjQ5LTIuOTMgNC4zMy0zLjU2QzguODEgNS41NSA4LjM1IDYuNzUgOC4wMyA4TTEyIDE5Ljk2Yy0uODMtMS4yLTEuNDgtMi41My0xLjkxLTMuOTZoMy44MmMtLjQzIDEuNDMtMS4wOCAyLjc2LTEuOTEgMy45Nk0xNC4zNCAxNEg5LjY2Yy0uMDktLjY2LS4xNi0xLjMyLS4xNi0ycy4wNy0xLjM1LjE2LTJoNC42OGMuMDkuNjUuMTYgMS4zMi4xNiAycy0uMDcgMS4zNC0uMTYgMm0uMjUgNS41NmMuNi0xLjExIDEuMDYtMi4zMSAxLjM4LTMuNTZoMi45NWMtLjk2IDEuNjUtMi40OSAyLjkzLTQuMzMgMy41Nk0xNi4zNiAxNGMuMDgtLjY2LjE0LTEuMzIuMTQtMnMtLjA2LTEuMzQtLjE0LTJoMy4zOGMuMTYuNjQuMjYgMS4zMS4yNiAycy0uMSAxLjM2LS4yNiAyelwiXG59KSwgJ0xhbmd1YWdlUm91bmRlZCcpOyIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDJjLTQuMiAwLTggMy4yMi04IDguMiAwIDMuMTggMi40NSA2LjkyIDcuMzQgMTEuMjMuMzguMzMuOTUuMzMgMS4zMyAwQzE3LjU1IDE3LjEyIDIwIDEzLjM4IDIwIDEwLjIgMjAgNS4yMiAxNi4yIDIgMTIgMm0wIDEwYy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMlwiXG59KSwgJ0xvY2F0aW9uT25Sb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTggMTYuMDhjLS43NiAwLTEuNDQuMy0xLjk2Ljc3TDguOTEgMTIuN2MuMDUtLjIzLjA5LS40Ni4wOS0uN3MtLjA0LS40Ny0uMDktLjdsNy4wNS00LjExYy41NC41IDEuMjUuODEgMi4wNC44MSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtMy0zIDEuMzQtMyAzYzAgLjI0LjA0LjQ3LjA5LjdMOC4wNCA5LjgxQzcuNSA5LjMxIDYuNzkgOSA2IDljLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDNjLjc5IDAgMS41LS4zMSAyLjA0LS44MWw3LjEyIDQuMTZjLS4wNS4yMS0uMDguNDMtLjA4LjY1IDAgMS42MSAxLjMxIDIuOTIgMi45MiAyLjkyczIuOTItMS4zMSAyLjkyLTIuOTItMS4zMS0yLjkyLTIuOTItMi45MlwiXG59KSwgJ1NoYXJlUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IERvd25sb2FkUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRG93bmxvYWRSb3VuZGVkXCI7XG5pbXBvcnQgRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFJvdW5kZWRcIjtcbmltcG9ydCBMYW5ndWFnZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xhbmd1YWdlUm91bmRlZFwiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiO1xuaW1wb3J0IExvY2F0aW9uT25Sb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhdGlvbk9uUm91bmRlZFwiO1xuaW1wb3J0IFNoYXJlUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2hhcmVSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2hpcCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlTWVkaWFRdWVyeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBSZXN1bWVBY3Rpb24sIFJlc3VtZVN1bW1hcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZWFkZXJTZWN0aW9uUHJvcHMgPSB7XG4gIHN1bW1hcnk6IFJlc3VtZVN1bW1hcnk7XG4gIGFjdGlvbnM6IFJlc3VtZUFjdGlvbjtcbn07XG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSAoeyBzdW1tYXJ5LCBhY3Rpb25zIH06IEhlYWRlclNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIikpO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTaGFyZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZSh7XG4gICAgICAgICAgdGl0bGU6IGAke3N1bW1hcnkudGl0bGV9IC0gJHtzdW1tYXJ5LnN1YnRpdGxlfWAsXG4gICAgICAgICAgdGV4dDogc3VtbWFyeS5kZXNjcmlwdGlvbixcbiAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIFVzZXIgY2FuY2VsbGVkIG9yIGVycm9yIG9jY3VycmVkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hhcmUgY2FuY2VsbGVkIG9yIGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjazogY29weSBVUkwgdG8gY2xpcGJvYXJkXG4gICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGFsZXJ0KFwiTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdW1tYXJ5XSk7XG5cbiAgY29uc3QgY2hpcFN0eWxlcyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICBib3JkZXJDb2xvcjogXCJkaXZpZGVyXCIsXG4gICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJhY3Rpb24uaG92ZXJcIixcbiAgICAgIGJveFNoYWRvdzogXCIwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KVwiLFxuICAgIH0sXG4gICAgLi4uKGlzTW9iaWxlICYmIHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICB9KSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsMTExLDIzNSwwLjEpLCByZ2JhKDkwLDIwMCwyNTAsMC4xNCkpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtzdW1tYXJ5LnN1YnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57c3VtbWFyeS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19XG4gICAgICAgICAgICBzcGFjaW5nPXsxLjV9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IFwiNjAwcHhcIiB9LFxuICAgICAgICAgICAgICBnYXA6IHsgeHM6IDEuNSwgc206IDEuNSB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBpY29uPXs8TGlua2VkSW5JY29uIHN4PXt7IGZvbnRTaXplOiBcIjEuMTI1cmVtXCIgfX0gLz59XG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlua2VkSW5cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgLi4uY2hpcFN0eWxlcyxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIFwiJiAuTXVpQ2hpcC1sYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMSxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMS41LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgaWNvbj17PExhbmd1YWdlUm91bmRlZEljb24gc3g9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJQb3J0Zm9saW9cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzaWhzYWRyaS5jb21cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAuLi5jaGlwU3R5bGVzLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogNDQsXG4gICAgICAgICAgICAgICAgXCImIC5NdWlDaGlwLWxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxLjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBpY29uPXs8RW1haWxSb3VuZGVkSWNvbiBzeD17eyBmb250U2l6ZTogXCIxLjEyNXJlbVwiIH19IC8+fVxuICAgICAgICAgICAgICBsYWJlbD1cInNhZHJpbWFzaWhAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAuLi5jaGlwU3R5bGVzLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogNDQsXG4gICAgICAgICAgICAgICAgXCImIC5NdWlDaGlwLWxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxLjUsXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIGljb249ezxMb2NhdGlvbk9uUm91bmRlZEljb24gc3g9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJUZWhyYW4sIElyYW4g4oCiIFdpbGxpbmcgdG8gcmVsb2NhdGVcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIC4uLmNoaXBTdHlsZXMsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiA0NCxcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFwiJiAuTXVpQ2hpcC1sYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMSxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMS41LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IG1heFdpZHRoOiA3MjAgfX0+XG4gICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHN1bW1hcnkuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgIGNvbnN0IGltcG9ydGFudFBocmFzZXMgPSBbXG4gICAgICAgICAgICAgICAgXCI2KyB5ZWFyc1wiLFxuICAgICAgICAgICAgICAgIFwiNDBNKyB1c2Vyc1wiLFxuICAgICAgICAgICAgICAgIFwidHdvIHNlbWktdW5pY29ybiB0ZWNoIGNvbXBhbmllc1wiLFxuICAgICAgICAgICAgICAgIFwiQjJCIGFuZCBCMkNcIixcbiAgICAgICAgICAgICAgICBcImVtYmVkZGVkLCBjZW50cmFsaXplZCwgYW5kIHNpbmdsZS10aHJlYWRlZFwiLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc3QgcGFydHM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBib2xkOiBib29sZWFuIH0+ID0gW107XG4gICAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gRmluZCBhbGwgbWF0Y2hlcyBhbmQgdGhlaXIgcG9zaXRpb25zXG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXM6IEFycmF5PHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXI7IHRleHQ6IHN0cmluZyB9PiA9IFtdO1xuICAgICAgICAgICAgICBpbXBvcnRhbnRQaHJhc2VzLmZvckVhY2goKHBocmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwaHJhc2UucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKG1hdGNoID0gcmVnZXguZXhlYyh0ZXh0KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtYXRjaC5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2hbMF0sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gU29ydCBtYXRjaGVzIGJ5IHBvc2l0aW9uXG4gICAgICAgICAgICAgIG1hdGNoZXMuc29ydCgoYSwgYikgPT4gYS5zdGFydCAtIGIuc3RhcnQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQnVpbGQgcGFydHMgYXJyYXlcbiAgICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKChtYXRjaCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5zdGFydCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHRleHQ6IHRleHQuc2xpY2UobGFzdEluZGV4LCBtYXRjaC5zdGFydCksIGJvbGQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdGV4dDogbWF0Y2gudGV4dCwgYm9sZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5lbmQ7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHRleHQ6IHRleHQuc2xpY2UobGFzdEluZGV4KSwgYm9sZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7cGFydHMubWFwKChwYXJ0LCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgcGFydC5ib2xkID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwic3BhblwiIGtleT17aW5kZXh9IHN4PXt7IGZvbnRXZWlnaHQ6IDcwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJ0LnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e3BhcnQudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2hhcmV9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzeD17eyBtYXhXaWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiBcIjQwMHB4XCIgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaGFyZSBSZXN1bWVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICBocmVmPXthY3Rpb25zLmhyZWZ9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBzdGFydEljb249ezxEb3dubG9hZFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FjdGlvbnMubGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE3IDEwLjQzVjJIN3Y4LjQzYzAgLjM1LjE4LjY4LjQ5Ljg2bDQuMTggMi41MS0uOTkgMi4zNC0zLjQxLjI5IDIuNTkgMi4yNEw5LjA3IDIyIDEyIDIwLjIzIDE0LjkzIDIybC0uNzgtMy4zMyAyLjU5LTIuMjQtMy40MS0uMjktLjk5LTIuMzQgNC4xOC0yLjUxYy4zLS4xOC40OC0uNS40OC0uODZtLTYgLjY0LTItMS4yVjRoMnptNC0xLjItMiAxLjJWNGgyelwiXG59KSwgJ01pbGl0YXJ5VGVjaE91dGxpbmVkJyk7IiwKICAgICJpbXBvcnQgTWlsaXRhcnlUZWNoT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01pbGl0YXJ5VGVjaE91dGxpbmVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIkBzaGFyZWQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgUmVzdW1lQ2FyZCBmcm9tIFwiLi9SZXN1bWVDYXJkXCI7XG5pbXBvcnQgUmVzdW1lU2VjdGlvbldyYXBwZXIgZnJvbSBcIi4vUmVzdW1lU2VjdGlvbldyYXBwZXJcIjtcbmltcG9ydCB0eXBlIHsgU2tpbGxDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFNraWxsc1NlY3Rpb25Qcm9wcyA9IHtcbiAgY2F0ZWdvcmllczogUmVhZG9ubHlBcnJheTxTa2lsbENhdGVnb3J5Pjtcbn07XG5cbmNvbnN0IFNraWxsc1NlY3Rpb24gPSAoeyBjYXRlZ29yaWVzIH06IFNraWxsc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHZhcmlhbnQ9XCJjb21wYWN0XCIgaWNvbj17PE1pbGl0YXJ5VGVjaE91dGxpbmVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBmb250U2l6ZTogXCIxLjc1cmVtXCIgfX0gLz59IHRpdGxlPVwiU2tpbGxzXCIgLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2NhdGVnb3J5LnRpdGxlfT5cbiAgICAgICAgICA8UmVzdW1lQ2FyZFxuICAgICAgICAgICAgdGl0bGU9e2NhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgICAgc2tpbGxzPXtjYXRlZ29yeS5za2lsbHN9XG4gICAgICAgICAgICB1c2VDYXJkQ29udGVudD17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gIDwvUmVzdW1lU2VjdGlvbldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHNTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2IDEzYzMuMDktMi44MSA2LTUuNDQgNi03LjdDMjIgMy40NSAyMC41NSAyIDE4LjcgMmMtMS4wNCAwLTIuMDUuNDktMi43IDEuMjVDMTUuMzQgMi40OSAxNC4zNCAyIDEzLjMgMiAxMS40NSAyIDEwIDMuNDUgMTAgNS4zYzAgMi4yNiAyLjkxIDQuODkgNiA3LjdtLTIuNy05Yy40NCAwIC44OS4yMSAxLjE4LjU1TDE2IDYuMzRsMS41Mi0xLjc5Yy4yOS0uMzQuNzQtLjU1IDEuMTgtLjU1Ljc0IDAgMS4zLjU2IDEuMyAxLjMgMCAxLjEyLTIuMDQgMy4xNy00IDQuOTktMS45Ni0xLjgyLTQtMy44OC00LTQuOTkgMC0uNzQuNTYtMS4zIDEuMy0xLjNNMTkgMTZoLTJjMC0xLjItLjc1LTIuMjgtMS44Ny0yLjdMOC45NyAxMUgxdjExaDZ2LTEuNDRsNyAxLjk0IDgtMi41di0xYzAtMS42Ni0xLjM0LTMtMy0zTTMgMjB2LTdoMnY3em0xMC45Ny40MUw3IDE4LjQ4VjEzaDEuNjFsNS44MiAyLjE3Yy4zNC4xMy41Ny40Ni41Ny44MyAwIDAtMS45OS0uMDUtMi4zLS4xNWwtMi4zOC0uNzktLjYzIDEuOSAyLjM4Ljc5Yy41MS4xNyAxLjA0LjI2IDEuNTguMjZIMTljLjM5IDAgLjc0LjIzLjkuNTZ6XCJcbn0pLCAnVm9sdW50ZWVyQWN0aXZpc21PdXRsaW5lZCcpOyIsCiAgICAiaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1ZvbHVudGVlckFjdGl2aXNtT3V0bGluZWRcIjtcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJAc2hhcmVkL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFJlc3VtZUNhcmQgZnJvbSBcIi4vUmVzdW1lQ2FyZFwiO1xuaW1wb3J0IFJlc3VtZVNlY3Rpb25XcmFwcGVyIGZyb20gXCIuL1Jlc3VtZVNlY3Rpb25XcmFwcGVyXCI7XG5pbXBvcnQgdHlwZSB7IFZvbHVudGVlckV4cGVyaWVuY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBWb2x1bnRlZXJTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PFZvbHVudGVlckV4cGVyaWVuY2U+O1xufTtcblxuY29uc3QgVm9sdW50ZWVyU2VjdGlvbiA9ICh7IGl0ZW1zIH06IFZvbHVudGVlclNlY3Rpb25Qcm9wcykgPT4gKFxuICA8UmVzdW1lU2VjdGlvbldyYXBwZXIgYmFja2dyb3VuZENvbG9yPVwicGFwZXJcIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICB2YXJpYW50PVwiY29tcGFjdFwiXG4gICAgICAgICAgaWNvbj17PFZvbHVudGVlckFjdGl2aXNtT3V0bGluZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgc3g9e3sgZm9udFNpemU6IFwiMS43NXJlbVwiIH19IC8+fVxuICAgICAgICAgIHRpdGxlPVwiVm9sdW50ZWVyIEFjdGl2aXR5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPFJlc3VtZUNhcmRcbiAgICAgICAgICBrZXk9e2Ake2l0ZW0ub3JnYW5pemF0aW9ufS0ke2l0ZW0ucm9sZX1gfVxuICAgICAgICAgIHRpdGxlPXtpdGVtLnJvbGV9XG4gICAgICAgICAgc3VidGl0bGU9e2l0ZW0ub3JnYW5pemF0aW9ufVxuICAgICAgICAgIHBlcmlvZD17aXRlbS5wZXJpb2R9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gIDwvUmVzdW1lU2VjdGlvbldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBWb2x1bnRlZXJTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUge1xuICBDZXJ0aWZpY2F0aW9uLFxuICBFZHVjYXRpb25JdGVtLFxuICBSZXN1bWVBY3Rpb24sXG4gIFJlc3VtZVN1bW1hcnksXG4gIFNraWxsQ2F0ZWdvcnksXG4gIFRpbWVsaW5lSXRlbSxcbiAgVm9sdW50ZWVyRXhwZXJpZW5jZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCByZXN1bWVTdW1tYXJ5OiBSZXN1bWVTdW1tYXJ5ID0ge1xuICB0aXRsZTogXCJNYXNpaCBTYWRyaVwiLFxuICBzdWJ0aXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkRhdGEtZHJpdmVuIFByb2R1Y3QgRGVzaWduZXIgd2l0aCA2KyB5ZWFycyBvZiBleHBlcmllbmNlIGltcHJvdmluZyBleHBlcmllbmNlcyBmb3IgNDBNKyB1c2Vycy4gSW1wYWN0LW9yaWVudGVkIHdpdGggaGFuZHMtb24gZXhwZXJpZW5jZSBpbiB0d28gc2VtaS11bmljb3JuIHRlY2ggY29tcGFuaWVzIChEaXZhciwgSVItTUNJKSwgZGVzaWduaW5nIGZvciBib3RoIEIyQiBhbmQgQjJDIHByb2R1Y3RzIGFjcm9zcyBlbWJlZGRlZCwgY2VudHJhbGl6ZWQsIGFuZCBzaW5nbGUtdGhyZWFkZWQgdGVhbSBzdHJ1Y3R1cmVzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlc3VtZUFjdGlvbnM6IFJlc3VtZUFjdGlvbiA9IHtcbiAgbGFiZWw6IFwiRG93bmxvYWQgUmVzdW1lIChQREYpXCIsXG4gIGhyZWY6IFwiL01hc2loLVNhZHJpLVJlc3VtZS5wZGZcIixcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9mZXNzaW9uYWxFeHBlcmllbmNlOiBSZWFkb25seUFycmF5PFRpbWVsaW5lSXRlbT4gPSBbXG4gIHtcbiAgICBjb21wYW55OiBcIlBlcnNvbCB8IEIyQi9CMkMgbWFya2V0cGxhY2UsIGVhcmx5LXN0YWdlIGdyb3d0aFwiLFxuICAgIHJvbGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBwZXJpb2Q6IFwiT2N0b2JlciAyMDI0IOKAkyBBdWd1c3QgMjAyNSDCtyBIeWJyaWQsIEZ1bGwtdGltZSB8IDExIG1vbnRoc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMZWFkIGRlc2lnbmVyIGd1aWRpbmcgcHJvZHVjdCB2aXNpb24gYW5kIGRlbGl2ZXJpbmcgaGlnaC1pbXBhY3QgZXhwZXJpbWVudHMgYWNyb3NzIHRoZSBmdW5uZWwuXCIsXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJSZWRlc2lnbmVkIHRoZSBzaWduLXVwIGZsb3cgdGhyb3VnaCBkYXRhLWRyaXZlbiBmdW5uZWwgYW5hbHlzaXMsIGVsaW1pbmF0aW5nIG1ham9yIGZyaWN0aW9uIHBvaW50cyBhbmQgYWNoaWV2aW5nIGFuIDgwJSBpbmNyZWFzZSBpbiBsZWFkIGdlbmVyYXRpb24gd2l0aGluIDMgbW9udGhzLlwiLFxuICAgICAgXCJEZXZlbG9wZWQgYSBzY2FsYWJsZSBkZXNpZ24ga2l0IGZyb20gc2NyYXRjaCwgc3RhbmRhcmRpemluZyBVSSBwYXR0ZXJucyBhbmQgaW1wcm92aW5nIGRlc2lnbi10by1kZXZlbG9wbWVudCBoYW5kb2ZmIGVmZmljaWVuY3kgYWNyb3NzIHRoZSB0ZWFtLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb21wYW55OiBcIkRpdmFyIHwgVG9wIHJlZ2lvbmFsIGNsYXNzaWZpZWRzIHBsYXRmb3JtIHwgNTBNKyB1c2Vyc1wiLFxuICAgIHJvbGU6IFwiU2VuaW9yIFVzZXIgRXhwZXJpZW5jZSBEZXNpZ25lclwiLFxuICAgIHBlcmlvZDogXCJBcHJpbCAyMDIyIOKAkyBTZXB0ZW1iZXIgMjAyNCDCtyBIeWJyaWQsIEZ1bGwtdGltZSB8IDIgeWVhcnMgNiBtb250aHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcnVzdGVkIHBhcnRuZXIgYWNyb3NzIFRydXN0ICYgU2FmZXR5LCBHcm93dGgsIGFuZCBDb3JlIEV4cGVyaWVuY2UgaW5pdGlhdGl2ZXMuXCIsXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJEZXNpZ25lZCBhbmQgbGF1bmNoZWQgYSBTZWN1cmUgQ2FsbCBTeXN0ZW0gd2l0aCB0aGUgVHJ1c3QgJiBTYWZldHkgdGVhbSwgYWNoaWV2aW5nIGEgNjAlIHJlZHVjdGlvbiBpbiBoYXJhc3NtZW50IGluY2lkZW50cyBhbmQgc3RyZW5ndGhlbmluZyB1c2VyIHRydXN0LlwiLFxuICAgICAgXCJJbXByb3ZlZCBzZWFyY2ggZXhwZXJpZW5jZSBieSBpbnRyb2R1Y2luZyB0aGUgTmVhcmJ5IENpdGllcyBmZWF0dXJlLCByZWR1Y2luZyBib3VuY2UgcmF0ZSBieSAyNSUuXCIsXG4gICAgICBcIk9wdGltaXplZCBwb3N0LWFkIHN1Ym1pc3Npb24gZmxvdywgc3RyZWFtbGluaW5nIGZvcm0gZmllbGRzIGFuZCBsb3dlcmluZyByZWR1bmRhbnQgY2hhdCBjb252ZXJzYXRpb25zIGJ5IDEyJS5cIixcbiAgICAgIFwiSW1wbGVtZW50ZWQgYSBuZXcgdGlja2V0aW5nIHdvcmtmbG93LCBpbXByb3ZpbmcgY3VzdG9tZXItc3VwcG9ydCBlZmZpY2llbmN5IGFuZCByZWR1Y2luZyB1c2VyIHdhaXQgdGltZXMgYnkgMjAlLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb21wYW55OiBcIklSIE1DSSAtIFNldGFyZSBBdmFsIHwgRmludGVjaCBzZXJ2aWNlcyArIFVTU0QgKyBNb2JpbGUgc2VydmljZSB8IE5hdGlvbndpZGUgc2NhbGVcIixcbiAgICByb2xlOiBcIlByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBwZXJpb2Q6IFwiSnVuZSAyMDE5IOKAkyBNYXJjaCAyMDIyIMK3IE9uLXNpdGUsIEZ1bGwtdGltZSB8IDIgeWVhcnMgMTAgbW9udGhzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNoYXBlZCBjcm9zcy1mdW5jdGlvbmFsIGZlYXR1cmUgZGV2ZWxvcG1lbnQgYW5kIGRlc2lnbiBzeXN0ZW1zIGZvciBuYXRpb253aWRlIGZpbmFuY2lhbCBwcm9kdWN0cy5cIixcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkJ1aWx0IE1vcnBoLCBhIHNjYWxhYmxlIGRlc2lnbiBzeXN0ZW0gZW5zdXJpbmcgdmlzdWFsIGNvbnNpc3RlbmN5LCB1c2VkIGJ5IDgsMzAwKyBkZXNpZ25lcnMuXCIsXG4gICAgICBcIkdhbWlmaWVkIHRoZSByZWZlcnJhbC1zaGFyaW5nIGV4cGVyaWVuY2UsIHR1cm5pbmcgNjAsMDAwKyBzdWJzY3JpYmVycyBpbnRvIGRhaWx5IGFjdGl2ZSB1c2VycyBhbmQgYm9vc3RpbmcgcmV0ZW50aW9uLlwiLFxuICAgICAgXCJJbmNyZWFzZWQgYmlsbC1wYXltZW50IHNoYXJlIGZyb20gNiUgdG8gNDclIG9mIHRvdGFsIHBheW1lbnQgdGhyb3VnaCBpbi1kZXB0aCBpbnRlcnZpZXdzLlwiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgdm9sdW50ZWVyRXhwZXJpZW5jZTogUmVhZG9ubHlBcnJheTxWb2x1bnRlZXJFeHBlcmllbmNlPiA9IFtcbiAge1xuICAgIG9yZ2FuaXphdGlvbjogXCJSYWhuZW1hIENvbGxlZ2UgfCBQcm9mZXNzaW9uYWwgYm9vdGNhbXBzICsgSW50ZXJuc2hpcCBwcm9ncmFtc1wiLFxuICAgIHJvbGU6IFwiRGVzaWduIE1lbnRvclwiLFxuICAgIHBlcmlvZDogXCJKdW5lIDIwMjIg4oCTIFByZXNlbnQgwrcgU2Vhc29uYWxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTWVudG9yZWQgb3ZlciAyMDAgYXNwaXJpbmcgZGVzaWduZXJzLCBpbnRyb2R1Y2VkIGdhbWlmaWVkIGxlYXJuaW5nIHRlY2huaXF1ZXMsIGFuZCBicmlkZ2VkIGFjYWRlbWlhIHdpdGggaW5kdXN0cnkgcHJhY3RpY2VzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNraWxsQ2F0ZWdvcmllczogUmVhZG9ubHlBcnJheTxTa2lsbENhdGVnb3J5PiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlJlc2VhcmNoICYgU3RyYXRlZ3lcIixcbiAgICBza2lsbHM6IFtcbiAgICAgIFwiVXNhYmlsaXR5IFRlc3RpbmcgJiBJbnRlcnZpZXdcIixcbiAgICAgIFwiTWFya2V0ICYgQ29tcGV0aXRpdmUgQW5hbHlzaXNcIixcbiAgICAgIFwiUm9hZG1hcHBpbmcgJiBPS1IgQWxpZ25tZW50XCIsXG4gICAgICBcIkluc2lnaHQgR2F0aGVyaW5nOiBDbGFyaXR5LCBHQSwgSG90SmFyXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnblwiLFxuICAgIHNraWxsczogW1xuICAgICAgXCJEZXNpZ24gU3lzdGVtcyAmIFVJIEtpdHNcIixcbiAgICAgIFwiVXNlciBJbnRlcmZhY2UgRGVzaWduIChVSSlcIixcbiAgICAgIFwiV2lyZWZyYW1pbmcgJiBQcm90b3R5cGluZ1wiLFxuICAgICAgXCJJbnRlcmFjdGlvbiAmIE1pY3JvLWludGVyYWN0aW9uc1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUZWNobmljYWwgVG9vbHMgJiBEYXRhIEFuYWx5dGljc1wiLFxuICAgIHNraWxsczogW1xuICAgICAgXCJGaWdtYSwgRnJhbWVyLCBDbGF1ZGUsIEN1cnNvciwgTm90ZWJvb2tMTVwiLFxuICAgICAgXCJCdXNpbmVzcyBNZXRyaWNzICYgRnVubmVsIEFuYWx5dGljcyAoQ1JPKVwiLFxuICAgICAgXCJEYXRhIFByZXByb2Nlc3NpbmcgJiBTdGF0aXN0aWNhbCBBbmFseXNpc1wiLFxuICAgICAgXCJCSSBUb29scyBhbmQgRGFzaGJvYXJkc1wiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcmVzdW1lRWR1Y2F0aW9uOiBSZWFkb25seUFycmF5PEVkdWNhdGlvbkl0ZW0+ID0gW1xuICB7XG4gICAgaW5zdGl0dXRpb246IFwiUGF5YW1lIE5vb3IgVW5pdmVyc2l0eVwiLFxuICAgIHByb2dyYW06IFwiQlNjLiBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBwZXJpb2Q6IFwiU2VwdGVtYmVyIDIwMTUg4oCTIEF1Z3VzdCAyMDE4XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRlYWNoaW5nIEFzc2lzdGFudCwgYXBwb2ludGVkIGJ5IERyLiBFLiBSYWphYmksIEhlYWQgb2YgdGhlIFNjaWVuY2UgQ29tbWl0dGVlLiBNZW1iZXIgb2YgdGhlIENpdmlsIEVuZ2luZWVyaW5nIGFuZCBQcm9qZWN0IE1hbmFnZW1lbnQgc2NpZW50aWZpYyBzb2NpZXR5LlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlc3VtZUNlcnRpZmljYXRlczogUmVhZG9ubHlBcnJheTxDZXJ0aWZpY2F0aW9uPiA9IFtcbiAge1xuICAgIG5hbWU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGlzc3VlcjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICB5ZWFyOiBcIkp1bHkgMjAyNVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCIxNzBoIOKAoiBEYXRhIFByZXByb2Nlc3NpbmcsIEJ1c2luZXNzIE1ldHJpY3MsIEJJIFRvb2xzLCBJbnRyb2R1Y3RvcnkgUHl0aG9uLCBTdG9yeXRlbGxpbmcgd2l0aCBEYXRhLCBTdGF0aXN0aWNhbCBJbmZlcmVuY2UsIEEvQiBUZXN0aW5nLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJJRUxUUyAoQWNhZGVtaWMpXCIsXG4gICAgaXNzdWVyOiBcIkludGVybmF0aW9uYWwgRGV2ZWxvcG1lbnQgUHJvZ3JhbSAoSURQKVwiLFxuICAgIHllYXI6IFwiTWF5IDIwMjJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPdmVyYWxsIFNjb3JlIDcuMC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29uZHVjdGluZyBVc2FiaWxpdHkgVGVzdGluZ1wiLFxuICAgIGlzc3VlcjogXCJJbnRlcmFjdGlvbiBEZXNpZ24gRm91bmRhdGlvblwiLFxuICAgIHllYXI6IFwiSnVseSAyMDIxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlVJL1VYIERlc2lnbiBCb290Q2FtcFwiLFxuICAgIGlzc3VlcjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICB5ZWFyOiBcIkp1bHkgMjAxOVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIjE1MGggaW50ZW5zaXZlIGJvb3RjYW1wLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9kdWN0IERlc2lnbiBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaXNzdWVyOiBcIlNoYXJpZiBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3kgKyBVbml2ZXJzaXR5IG9mIFRlaHJhblwiLFxuICAgIHllYXI6IFwiTWF5IDIwMTlcIixcbiAgICBkZXNjcmlwdGlvbjogXCI5OGggZHVhbC1pbnN0aXR1dGlvbiB0cmFpbmluZy5cIixcbiAgfSxcbl07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiQHNoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCJAc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IHJlc3VtZVN1bW1hcnkgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgcmVzdW1lU3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIFJlc3VtZVwiLFxuICBkZXNjcmlwdGlvbjogcmVzdW1lU3VtbWFyeS5kZXNjcmlwdGlvbixcbiAgdXJsOiBgJHtzaXRlVXJsfS9yZXN1bWVgLFxuICBhYm91dDoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiByZXN1bWVTdW1tYXJ5LnRpdGxlLFxuICAgIGpvYlRpdGxlOiByZXN1bWVTdW1tYXJ5LnN1YnRpdGxlLFxuICAgIGVtYWlsOiBcInNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgYWRkcmVzczoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIGFkZHJlc3NMb2NhbGl0eTogXCJUZWhyYW5cIixcbiAgICAgIGFkZHJlc3NDb3VudHJ5OiBcIklSXCIsXG4gICAgfSxcbiAgfSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCByZXN1bWVQYWdlTWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyIFJlc3VtZVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlJldmlldyBNYXNpaCBTYWRyaeKAmXMgc2VuaW9yIHByb2R1Y3QgZGVzaWduZXIgcmVzdW1lIGNvdmVyaW5nIHRydXN0ICYgc2FmZXR5LCBncm93dGgsIGRlc2lnbiBzeXN0ZW1zLCBhbmQgbGVhZGVyc2hpcCBleHBlcmllbmNlLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9yZXN1bWVcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiByZXN1bWVTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyBTZW8gfSBmcm9tIFwiQHNoYXJlZC9zZW9cIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvblwiO1xuaW1wb3J0IEVkdWNhdGlvblNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FZHVjYXRpb25TZWN0aW9uXCI7XG5pbXBvcnQgRXhwZXJpZW5jZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FeHBlcmllbmNlU2VjdGlvblwiO1xuaW1wb3J0IEhlYWRlclNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJTZWN0aW9uXCI7XG5pbXBvcnQgU2tpbGxzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1NraWxsc1NlY3Rpb25cIjtcbmltcG9ydCBWb2x1bnRlZXJTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvVm9sdW50ZWVyU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgcHJvZmVzc2lvbmFsRXhwZXJpZW5jZSxcbiAgcmVzdW1lQWN0aW9ucyxcbiAgcmVzdW1lQ2VydGlmaWNhdGVzLFxuICByZXN1bWVFZHVjYXRpb24sXG4gIHJlc3VtZVN1bW1hcnksXG4gIHNraWxsQ2F0ZWdvcmllcyxcbiAgdm9sdW50ZWVyRXhwZXJpZW5jZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyByZXN1bWVQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgUmVzdW1lUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4ucmVzdW1lUGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVhZGVyU2VjdGlvbiBzdW1tYXJ5PXtyZXN1bWVTdW1tYXJ5fSBhY3Rpb25zPXtyZXN1bWVBY3Rpb25zfSAvPlxuICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uIGl0ZW1zPXtwcm9mZXNzaW9uYWxFeHBlcmllbmNlfSAvPlxuICAgICAgPFZvbHVudGVlclNlY3Rpb24gaXRlbXM9e3ZvbHVudGVlckV4cGVyaWVuY2V9IC8+XG4gICAgICA8U2tpbGxzU2VjdGlvbiBjYXRlZ29yaWVzPXtza2lsbENhdGVnb3JpZXN9IC8+XG4gICAgICA8RWR1Y2F0aW9uU2VjdGlvbiBpdGVtcz17cmVzdW1lRWR1Y2F0aW9ufSAvPlxuICAgICAgPENlcnRpZmljYXRlc1NlY3Rpb24gY2VydGlmaWNhdGVzPXtyZXN1bWVDZXJ0aWZpY2F0ZXN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWVQYWdlO1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FB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
