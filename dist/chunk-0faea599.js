import {
  GhostButton_default
} from "./chunk-1hsfrdqr.js";
import {
  VolunteerActivismRounded_default
} from "./chunk-8qp43c5k.js";
import"./chunk-56dhb304.js";
import {
  Pill_default
} from "./chunk-tdhdn874.js";
import {
  Seo_default,
  site_default
} from "./chunk-1c6sycnn.js";
import {
  Box_default,
  CardContent_default,
  Card_default,
  Container_default,
  Grid_default,
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  useTheme
} from "./chunk-yty9pdhr.js";

// node_modules/@mui/icons-material/esm/EmojiEventsRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var EmojiEventsRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M19 5h-2V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"
}), "EmojiEventsRounded");

// src/features/my-story/components/SectionHeader.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  icon,
  align = "center"
}) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
  spacing: 1.5,
  alignItems: align === "center" ? "center" : "flex-start",
  textAlign: align,
  children: [
    (icon || eyebrow) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
      direction: "row",
      spacing: 1,
      alignItems: "center",
      children: [
        icon,
        eyebrow && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
          variant: "tag",
          color: "brand.secondary",
          children: eyebrow
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
      variant: "h2",
      children: title
    }, undefined, false, undefined, this),
    subtitle && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
      variant: "subtitle1",
      color: "text.secondary",
      sx: { maxWidth: align === "center" ? 720 : 640, lineHeight: 1.6 },
      children: subtitle
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var SectionHeader_default = SectionHeader;

// src/features/my-story/components/SurfaceCard.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var SurfaceCard = ({ sx, children, ...props }) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Card_default, {
  elevation: 0,
  variant: "outlined",
  sx: {
    borderRadius: (theme) => theme.tokens.radius.surface,
    boxShadow: "none",
    ...sx
  },
  ...props,
  children
}, undefined, false, undefined, this);
var SurfaceCard_default = SurfaceCard;

// src/features/my-story/components/CertificatesSection.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var CertificatesSection = ({ certificates }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
  component: "section",
  sx: {
    py: { xs: 8, md: 10 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
      spacing: 5,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(SectionHeader_default, {
          eyebrow: "Continuous Learning",
          title: "Certificates & Training",
          icon: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(EmojiEventsRounded_default, {
            color: "secondary"
          }, undefined, false, undefined, this),
          align: "left"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: certificates.map((certificate) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
            size: { xs: 12, md: 4 },
            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(SurfaceCard_default, {
              sx: { height: "100%" },
              children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                  spacing: 2,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                      direction: "row",
                      spacing: 1.5,
                      alignItems: "center",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Pill_default, {
                          label: certificate.badge,
                          size: "small"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                          variant: "caption",
                          color: "text.secondary",
                          children: certificate.date
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: certificate.title
                    }, undefined, false, undefined, this),
                    certificate.institution && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "subtitle1",
                      color: "text.secondary",
                      children: certificate.institution
                    }, undefined, false, undefined, this),
                    [certificate.hours, certificate.score, certificate.topics].filter(Boolean).map((detail) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: detail
                    }, detail, false, undefined, this))
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, `${certificate.title}-${certificate.date}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var CertificatesSection_default = CertificatesSection;

// node_modules/@mui/icons-material/esm/SchoolRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var SchoolRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0"
}), "SchoolRounded");

// src/features/my-story/components/EducationSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var EducationSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  component: "section",
  sx: { py: { xs: 8, md: 10 } },
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
      spacing: 5,
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SectionHeader_default, {
          eyebrow: "Education",
          title: "Academic Foundations",
          icon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SchoolRounded_default, {
            color: "primary"
          }, undefined, false, undefined, this),
          align: "left"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            size: { xs: 12, md: 4 },
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SurfaceCard_default, {
              sx: { height: "100%" },
              children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  spacing: 2,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      direction: "row",
                      spacing: 1.5,
                      alignItems: "center",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Pill_default, {
                          label: item.badge,
                          size: "small"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                          variant: "caption",
                          color: "text.secondary",
                          children: item.date
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: item.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "subtitle1",
                      color: "text.secondary",
                      children: item.institution
                    }, undefined, false, undefined, this),
                    item.details && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      component: "ul",
                      spacing: 0.75,
                      sx: { pl: 2, mb: 0 },
                      children: item.details.map((detail) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        component: "li",
                        variant: "body2",
                        color: "text.secondary",
                        children: detail
                      }, detail, false, undefined, this))
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, `${item.title}-${item.institution}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var EducationSection_default = EducationSection;

// src/features/my-story/components/HeroSection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var HeroSection = ({ hero }) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
  component: "header",
  sx: (theme) => ({
    py: { xs: 10, md: 14 },
    backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.6)" : "rgba(8, 14, 26, 0.85)"
  }),
  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
      spacing: { xs: 3, md: 4 },
      sx: {
        maxWidth: 840,
        mx: "auto",
        textAlign: { xs: "left", md: "center" }
      },
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
          variant: "display",
          children: hero.title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
          variant: "hero",
          color: "text.secondary",
          children: hero.subtitle
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
          variant: "subtitle1",
          color: "text.secondary",
          sx: { lineHeight: 1.7 },
          children: hero.description
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var HeroSection_default = HeroSection;

// src/features/my-story/components/PhilosophySection.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var PhilosophySection = ({ philosophyText, emojiList }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 8, md: 10 },
      borderTop: `1px solid ${theme.palette.divider}`,
      backgroundColor: "transparent"
    },
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
        container: true,
        spacing: { xs: 6, md: 8 },
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
              spacing: 2.5,
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                  variant: "h3",
                  sx: {
                    fontStyle: "italic",
                    lineHeight: 1.6
                  },
                  children: philosophyText
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
                  sx: {
                    borderLeft: `3px solid ${theme.tokens.colors.primary}`,
                    pl: 2,
                    py: 1
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { lineHeight: 1.7 },
                    children: "I am driven by experiences—designing them, learning from them, and living them deeply."
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.7 },
                  children: "My friends often describe me as someone with layers—curiosity keeps me exploring new crafts, communities, and challenges. It’s how I stay grounded and inspired."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
              spacing: 3.5,
              sx: {
                borderRadius: "48px",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 },
                backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.7)" : "rgba(14, 22, 38, 0.7)"
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                  spacing: 1.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      children: "These small rituals shape the way I design and collaborate:"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                      variant: "h6",
                      children: "From music and ceramics to plants, cooking, and collaborative games—I’m most alive when I’m building with others."
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                  direction: "row",
                  spacing: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                  useFlexGap: true,
                  justifyContent: { xs: "flex-start", md: "space-between" },
                  children: emojiList.map((emoji) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                    component: "span",
                    sx: {
                      fontSize: { xs: 56, sm: 64 },
                      lineHeight: 1,
                      flexBasis: { xs: "auto", md: "30%" },
                      textAlign: "center"
                    },
                    children: emoji
                  }, emoji, false, undefined, this))
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var PhilosophySection_default = PhilosophySection;

// src/features/my-story/components/PhotoGallerySection.tsx
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var PhotoGallerySection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
  component: "section",
  sx: {
    pt: { xs: 2, md: 4 },
    pb: { xs: 8, md: 12 }
  },
  children: [
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
        spacing: 1.5,
        sx: { maxWidth: 720 },
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "eyebrow",
            color: "brand.secondary",
            children: "Photo Strip"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "h3",
            children: "Layers of the everyday"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            children: "A glimpse into the textures, people, and scenes that shape how I approach product design—unfiltered, a little imperfect, and very alive."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      sx: { mt: { xs: 4, md: 6 } },
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
        sx: { px: { xs: 2, sm: 4, md: 6 } },
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
          sx: {
            columnCount: { xs: 2, sm: 3, md: 5 },
            columnGap: { xs: 1.5, md: 2.5 }
          },
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
            sx: {
              breakInside: "avoid",
              mb: { xs: 1.5, md: 2.5 },
              borderRadius: (theme) => theme.tokens.radius.surface,
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
              component: "img",
              src: item.image,
              alt: item.alt,
              loading: "lazy",
              sx: {
                width: "100%",
                display: "block",
                objectFit: "cover"
              }
            }, undefined, false, undefined, this)
          }, `${item.caption}-${item.image}`, false, undefined, this))
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var PhotoGallerySection_default = PhotoGallerySection;

// src/features/my-story/components/ReadingJourneySection.tsx
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var ReadingJourneySection = ({ journey, books }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
        spacing: 5,
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(SectionHeader_default, {
            eyebrow: "Reading Journey",
            title: journey.title,
            subtitle: journey.subtitle,
            align: "left"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
            container: true,
            spacing: 3,
            alignItems: "stretch",
            children: books.map((book) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Grid_default, {
              size: { xs: 12, md: 6 },
              children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(SurfaceCard_default, {
                sx: {
                  height: "100%",
                  display: "flex"
                },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
                    component: "img",
                    src: book.cover,
                    alt: `Cover of ${book.title}`,
                    loading: "lazy",
                    sx: {
                      width: 160,
                      objectFit: "cover",
                      borderTopLeftRadius: theme.tokens.radius.surface,
                      borderBottomLeftRadius: theme.tokens.radius.surface
                    }
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(CardContent_default, {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      flexGrow: 1
                    },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
                        spacing: 0.75,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                            variant: "caption",
                            color: "text.secondary",
                            children: book.label
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                            variant: "h5",
                            children: book.title
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                            variant: "subtitle1",
                            color: "text.secondary",
                            children: book.author
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                        variant: "body2",
                        color: "text.secondary",
                        children: book.summary
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
                        component: "ul",
                        spacing: 0.75,
                        sx: { pl: 2, mb: 0 },
                        children: book.takeaways.map((takeaway) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                          component: "li",
                          variant: "body2",
                          color: "text.secondary",
                          children: takeaway
                        }, takeaway, false, undefined, this))
                      }, undefined, false, undefined, this),
                      book.highlight && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Pill_default, {
                        label: book.highlight,
                        size: "small",
                        sx: {
                          alignSelf: "flex-start",
                          backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.12)" : "rgba(98, 132, 218, 0.22)",
                          color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
                        }
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, book.title, false, undefined, this))
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var ReadingJourneySection_default = ReadingJourneySection;

// src/features/my-story/components/ReferencesSection.tsx
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var ReferencesSection = ({ references }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
        spacing: 5,
        children: [
          /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(SectionHeader_default, {
            eyebrow: "References",
            title: "What My Partners Say",
            icon: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(VolunteerActivismRounded_default, {
              color: "secondary"
            }, undefined, false, undefined, this),
            align: "left"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Grid_default, {
            container: true,
            spacing: 3,
            children: references.map((reference) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Grid_default, {
              size: { xs: 12, md: 4 },
              children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(SurfaceCard_default, {
                sx: { height: "100%" },
                children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(CardContent_default, {
                  sx: { display: "flex", flexDirection: "column", gap: 2, height: "100%" },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Stack_default, {
                      spacing: 0.5,
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                          variant: "h5",
                          children: reference.name
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                          variant: "subtitle2",
                          color: "text.secondary",
                          children: reference.role
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                          variant: "caption",
                          color: "text.secondary",
                          children: reference.date
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      sx: { lineHeight: 1.6 },
                      children: reference.text
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(GhostButton_default, {
                      component: "a",
                      href: reference.linkedin,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      variant: "outlined",
                      sx: {
                        mt: "auto",
                        alignSelf: "flex-start",
                        borderColor: isLight ? "rgba(17, 76, 170, 0.22)" : "rgba(122, 162, 255, 0.35)",
                        color: isLight ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
                        "&:hover": {
                          borderColor: isLight ? "rgba(17, 76, 170, 0.42)" : "rgba(122, 162, 255, 0.55)",
                          backgroundColor: isLight ? "rgba(31, 111, 235, 0.08)" : "rgba(122, 162, 255, 0.16)"
                        }
                      },
                      children: "View on LinkedIn"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, reference.name, false, undefined, this))
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var ReferencesSection_default = ReferencesSection;

// src/features/my-story/components/TeamSection.tsx
var jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
var TeamSection = ({ team }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 10, md: 14 },
      borderTop: `1px solid ${theme.palette.divider}`
    },
    children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
        sx: {
          display: "grid",
          gridTemplateColumns: { md: "1.15fr 0.85fr" },
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
            sx: {
              position: "relative",
              minHeight: { xs: 360, sm: 420, md: 520 },
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
                component: "img",
                src: team.image,
                alt: team.alt,
                loading: "lazy",
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                variant: "caption",
                color: "text.secondary",
                sx: {
                  position: "absolute",
                  bottom: { xs: 16, md: 24 },
                  left: { xs: 16, md: 32 },
                  px: 2,
                  py: 0.75,
                  borderRadius: theme.tokens.radius.pill,
                  backdropFilter: "blur(12px)",
                  backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.82)" : "rgba(14, 22, 38, 0.72)"
                },
                children: team.caption
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
            sx: {
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 5, md: 0 }
            },
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Stack_default, {
              spacing: { xs: 3, md: 4 },
              sx: { maxWidth: 520 },
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                  variant: "eyebrow",
                  color: "brand.secondary",
                  children: "Collaborators"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                  variant: "h2",
                  children: team.title
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.8 },
                  children: team.description
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Box_default, {
                  sx: {
                    borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                    pl: 3,
                    py: 1
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { lineHeight: 1.7 },
                    children: "“Designing with people I trust keeps the work humble, ambitious, and joyful.”"
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var TeamSection_default = TeamSection;

// images/books/creative-confidence.jpg
var creative_confidence_default = "./creative-confidence-hvwkkg8c.jpg";

// images/books/design-of-everyday-things.jpg
var design_of_everyday_things_default = "./design-of-everyday-things-srwfr3ym.jpg";

// images/books/sprint.jpg
var sprint_default = "./sprint-yp6mxb89.jpg";

// images/books/ai-and-ux.jpg
var ai_and_ux_default = "./ai-and-ux-zftybkh2.jpg";

// images/divar-team.jpg
var divar_team_default = "./divar-team-rtkjpat1.jpg";

// images/masih-child-photo.png
var masih_child_photo_default = "./masih-child-photo-m4s95bqg.png";

// images/masih-coffee-artist.png
var masih_coffee_artist_default = "./masih-coffee-artist-jrn1fh0y.png";

// images/masih-mountaineer.png
var masih_mountaineer_default = "./masih-mountaineer-t9xjgcmf.png";

// images/masih-ux-designer.png
var masih_ux_designer_default = "./masih-ux-designer-t8skyp4r.png";

// images/masih-wood-carver.png
var masih_wood_carver_default = "./masih-wood-carver-tfm2a041.png";

// src/features/my-story/data/content.ts
var resolveAsset = (asset) => new URL(asset, import.meta.url).href;
var storyHero = {
  title: "I am Masih",
  subtitle: "A Creator of Meaningful Experiences",
  description: "Outside of design, I enjoy exploring challenges and learning through experiences like mountaineering, wood carving, and teaching. These pursuits have taught me patience, resilience, and empathy, which I bring into my work to craft meaningful and thoughtful designs."
};
var gallery = [
  {
    image: resolveAsset(masih_child_photo_default),
    alt: "Masih as a child in his dad's jacket",
    caption: "Me as a Child in My Dad's Jacket"
  },
  {
    image: resolveAsset(masih_mountaineer_default),
    alt: "Masih as a mountaineer",
    caption: "Me as a Mountaineer"
  },
  {
    image: resolveAsset(masih_coffee_artist_default),
    alt: "Masih's latte art",
    caption: "My art on a Latte",
    subcaption: "Latte Art by me :)"
  },
  {
    image: resolveAsset(masih_ux_designer_default),
    alt: "Masih as a UX Designer",
    caption: "Me as a UX Designer"
  },
  {
    image: resolveAsset(masih_wood_carver_default),
    alt: "Masih as a wood carver",
    caption: "Me as a Wood Carver"
  }
];
var philosophyText = "I design experiences that not only solve problems but create value for both businesses and users. I enjoy digging deep into challenges, analyzing them thoroughly, and coming up with solutions that truly make a difference.";
var emojiList = ["☕️", "\uD83E\uDDD7\uD83C\uDFFD", "\uD83D\uDCBB", "\uD83D\uDCDA"];
var readingJourney = {
  title: "Design Books Guiding My Craft",
  subtitle: "Inspired by the living bookshelves shared by peers like Kyle Johnston, Sawyer Hollenshead, Jason Zook, and Amy McLay Paterson, I keep a curated record of the ideas that shape my practice.",
  currentlyReading: {
    label: "Currently reading",
    title: "AI and UX: Why Artificial Intelligence Needs User Experience"
  }
};
var books = [
  {
    cover: resolveAsset(design_of_everyday_things_default),
    title: "The Design of Everyday Things",
    author: "Don Norman",
    label: "Read in 2018 · Revisited 2024",
    summary: "Norman’s framework for affordances and feedback helped me build resilience against bias when testing safety-critical flows, especially when we redesigned voice masking for Divar.",
    takeaways: [
      "Reinforced my habit of prototyping error states first.",
      "Influenced my heuristics checklist for accessibility reviews.",
      "Taught me to narrate “user goals” in every design critique."
    ]
  },
  {
    cover: resolveAsset(sprint_default),
    title: "Sprint",
    author: "Jake Knapp & the GV Design Team",
    label: "Read in 2020",
    summary: "Borrowing the sprint rhythm helped me coach product squads toward decision clarity. We prototyped and launched a loyalty program at Setare Aval using a 4-day variation of this playbook.",
    takeaways: [
      "Adopted lightning talks to align stakeholders fast.",
      "Made “How might we” synthesis a staple in my workshops.",
      "Improved remote facilitation using structured voting rituals."
    ]
  },
  {
    cover: resolveAsset(creative_confidence_default),
    title: "Creative Confidence",
    author: "Tom & David Kelley",
    label: "Read in 2021",
    summary: "This book reframed how I mentor new designers—shifting critiques from solution judgment to capability building and psychological safety.",
    takeaways: [
      "Introduced “confidence mapping” in my mentorship sessions.",
      "Drove me to design project-based curricula at Rahnema College.",
      "Encouraged storytelling rituals to celebrate incremental wins."
    ]
  },
  {
    cover: resolveAsset(ai_and_ux_default),
    title: "AI and UX: Why Artificial Intelligence Needs User Experience",
    author: "Pamela Pavliscak",
    label: "In progress · Q4 2025",
    summary: "I’m exploring how human-centered methods evolve when models make probabilistic decisions—informing the guardrails I craft for AI-augmented solutions.",
    takeaways: [
      "Building an ethical checklist for AI experiments.",
      "Pairing qualitative interviews with model metrics.",
      "Documenting prompt design patterns for my team."
    ],
    highlight: "Now Reading"
  }
];
var team = {
  image: resolveAsset(divar_team_default),
  alt: "Masih Sadri with the Divar product team",
  caption: "Divar Product Experience Team — collaborating across research, product design, and engineering.",
  title: "My Divar Product Team",
  description: "These are the talented colleagues I'm proud to collaborate with at Divar. Together, our 32-person product organization blends design, research, product, and engineering to ship experiences that protect and empower millions of users."
};
var education = [
  {
    badge: "Degree",
    date: "2015 – 2018",
    title: "BSc in Project Management Engineering",
    institution: "Payame Noor University",
    details: [
      "Teaching Assistant, appointed by Dr. E. Rajabi, Head of the Science Committee",
      "Active Member of the Civil Engineering and Project Management Scientific Society"
    ]
  },
  {
    badge: "Associate",
    date: "2014",
    title: "Associate in Mechanical Engineering",
    institution: "Bu-Ali Sina University"
  },
  {
    badge: "Diploma",
    date: "2009",
    title: "Diploma in Mathematics and Physics",
    institution: "National Organization for Development of Exceptional Talents (Sampad)"
  }
];
var certificates = [
  {
    badge: "Certificate",
    date: "July 2025",
    title: "Data Analysis BootCamp",
    institution: "Rahnema College",
    hours: "170h",
    topics: "Data Preprocessing, Business Metrics, BI Tools, Introductory Python, Storytelling with Data, Statistical Inference, A/B Testing"
  },
  {
    badge: "Language",
    date: "May 2022",
    title: "IELTS (Academic)",
    institution: "International Development Program (IDP)",
    score: "Overall Score: 7.0"
  },
  {
    badge: "Certificate",
    date: "July 2021",
    title: "Conducting Usability Testing",
    institution: "The Interaction Design Foundation"
  },
  {
    badge: "Certificate",
    date: "September 2021",
    title: "Complete Figma Megacourse",
    institution: "Online Course - Udemy",
    hours: "42h"
  },
  {
    badge: "BootCamp",
    date: "July 2019",
    title: "UI/UX Design BootCamp",
    institution: "Rahnema College",
    hours: "150h"
  },
  {
    badge: "Certificate",
    date: "May 2019",
    title: "Product and Advanced UX Design",
    institution: "Sharif University of Technology & University of Tehran",
    hours: "98h"
  },
  {
    badge: "Certificate",
    date: "2014",
    title: "Catia Certificate – Professional 3D Modeling",
    institution: "Iran Catia Community",
    score: "Grade: 100 out of 100"
  }
];
var references = [
  {
    name: "Saeed Abolghasemi",
    role: "Product Design Lead at SnappFood",
    date: "July 30, 2021 • Reported directly to Masih",
    text: "I had the privilege of working closely with Masih for a year. Starting my professional journey with him was truly fortunate; he's not only empathetic towards colleagues but also adept at prioritizing tasks based on individual strengths and assigning them accordingly. Masih places significant emphasis on personal growth, offering practical resources tailored to team members' competencies. Working alongside him was both enjoyable and enriching.",
    linkedin: "https://www.linkedin.com/in/saeed-abolghasemi/"
  },
  {
    name: "Ali Azadeh",
    role: "Software Engineer at UserTesting",
    date: "July 31, 2021 • Masih's teacher",
    text: "Masih is one of my privileged students who is determined to improve his knowledge and skills. His commitment and punctuality in delivering assignments are commendable. In my opinion, his interest in learning has been one of the key reasons for his success.",
    linkedin: "https://www.linkedin.com/in/ali-azadeh/"
  },
  {
    name: "Hossein Mahmoudvand",
    role: "Design Lead at Setare Aval (MCI)",
    date: "March 10, 2021 • Hossein managed Masih directly",
    text: "I have known Masih since 2018, and from the beginning, his potential talent was evident, marking the start of our collaborative journey. For consistent, top-quality design, you only need to give Masih the raw data and any uncertainties. While working together on the product team at Setare Aval Company, his expertise was crucial in problem definition, solution finding, and designing flows. The outcomes of his professional and meticulously crafted designs have always been outstanding. He is a consummate professional, and I highly recommend him.",
    linkedin: "https://www.linkedin.com/in/hosseinmahmoudvand/"
  }
];

// src/features/my-story/MyStoryPage.tsx
var jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var MyStoryPage = () => {
  const siteUrl = site_default();
  const heroImage = gallery[0]?.image;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Masih Sadri — My Story",
    description: storyHero.description,
    url: `${siteUrl}/my-story`,
    image: heroImage,
    primaryTopic: {
      "@type": "Person",
      name: "Masih Sadri",
      jobTitle: "Senior Product Designer",
      sameAs: [
        "https://www.linkedin.com/in/msadri/",
        "https://www.figma.com/@masih",
        "https://masih.framer.website/"
      ]
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(jsx_dev_runtime11.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Seo_default, {
        title: "My Story — Masih Sadri’s path as a product designer",
        description: "Learn how Masih Sadri blends mentorship, experimentation, and craft to design human experiences—from classroom to product launches.",
        canonicalPath: "/my-story",
        openGraph: {
          type: "profile",
          image: heroImage ? { url: heroImage, alt: "Masih Sadri documenting personal journey" } : undefined
        },
        structuredData
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(HeroSection_default, {
        hero: storyHero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(PhotoGallerySection_default, {
        items: gallery
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(PhilosophySection_default, {
        philosophyText,
        emojiList
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ReadingJourneySection_default, {
        journey: readingJourney,
        books
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(TeamSection_default, {
        team
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(EducationSection_default, {
        items: education
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(CertificatesSection_default, {
        certificates
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ReferencesSection_default, {
        references
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var MyStoryPage_default = MyStoryPage;
export {
  MyStoryPage_default as default
};

//# debugId=9F10EC2FCAB106E464756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TdXJmYWNlQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1NjaG9vbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1BoaWxvc29waHlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9SZWFkaW5nSm91cm5leVNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1JlZmVyZW5jZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9UZWFtU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvTXlTdG9yeVBhZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA1aC0yVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDVjLTEuMSAwLTIgLjktMiAydjFjMCAyLjU1IDEuOTIgNC42MyA0LjM5IDQuOTQuNjMgMS41IDEuOTggMi42MyAzLjYxIDIuOTZWMTlIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zdi0zLjFjMS42My0uMzMgMi45OC0xLjQ2IDMuNjEtMi45NkMxOS4wOCAxMi42MyAyMSAxMC41NSAyMSA4VjdjMC0xLjEtLjktMi0yLTJNNSA4VjdoMnYzLjgyQzUuODQgMTAuNCA1IDkuMyA1IDhtMTQgMGMwIDEuMy0uODQgMi40LTIgMi44MlY3aDJ6XCJcbn0pLCAnRW1vamlFdmVudHNSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgeyBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgZXllYnJvdz86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdE5vZGU7XG4gIGFsaWduPzogXCJjZW50ZXJcIiB8IFwibGVmdFwiO1xufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7XG4gIGV5ZWJyb3csXG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgaWNvbixcbiAgYWxpZ24gPSBcImNlbnRlclwiLFxufTogU2VjdGlvbkhlYWRlclByb3BzKSA9PiAoXG4gIDxTdGFja1xuICAgIHNwYWNpbmc9ezEuNX1cbiAgICBhbGlnbkl0ZW1zPXthbGlnbiA9PT0gXCJjZW50ZXJcIiA/IFwiY2VudGVyXCIgOiBcImZsZXgtc3RhcnRcIn1cbiAgICB0ZXh0QWxpZ249e2FsaWdufVxuICA+XG4gICAgeyhpY29uIHx8IGV5ZWJyb3cpICYmIChcbiAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIHtpY29ufVxuICAgICAgICB7ZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICl9XG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBtYXhXaWR0aDogYWxpZ24gPT09IFwiY2VudGVyXCIgPyA3MjAgOiA2NDAsIGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICl9XG4gIDwvU3RhY2s+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhcmRQcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcblxuY29uc3QgU3VyZmFjZUNhcmQgPSAoeyBzeCwgY2hpbGRyZW4sIC4uLnByb3BzIH06IENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXt7XG4gICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgIC4uLnN4LFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdXJmYWNlQ2FyZDtcblxuXG4iLAogICAgImltcG9ydCBFbW9qaUV2ZW50c1JvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Vtb2ppRXZlbnRzUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IENlcnRpZmljYXRlSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENlcnRpZmljYXRlc1NlY3Rpb25Qcm9wcyA9IHtcbiAgY2VydGlmaWNhdGVzOiBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT47XG59O1xuXG5jb25zdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uID0gKHsgY2VydGlmaWNhdGVzIH06IENlcnRpZmljYXRlc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgZXllYnJvdz1cIkNvbnRpbnVvdXMgTGVhcm5pbmdcIlxuICAgICAgICAgIHRpdGxlPVwiQ2VydGlmaWNhdGVzICYgVHJhaW5pbmdcIlxuICAgICAgICAgIGljb249ezxFbW9qaUV2ZW50c1JvdW5kZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz59XG4gICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtjZXJ0aWZpY2F0ZXMubWFwKChjZXJ0aWZpY2F0ZSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17YCR7Y2VydGlmaWNhdGUudGl0bGV9LSR7Y2VydGlmaWNhdGUuZGF0ZX1gfT5cbiAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9e2NlcnRpZmljYXRlLmJhZGdlfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57Y2VydGlmaWNhdGUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuaW5zdGl0dXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7W2NlcnRpZmljYXRlLmhvdXJzLCBjZXJ0aWZpY2F0ZS5zY29yZSwgY2VydGlmaWNhdGUudG9waWNzXVxuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGtleT17ZGV0YWlsfSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VydGlmaWNhdGVzU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk01IDEzLjE4djIuODFjMCAuNzMuNCAxLjQxIDEuMDQgMS43Nmw1IDIuNzNjLjYuMzMgMS4zMi4zMyAxLjkyIDBsNS0yLjczYy42NC0uMzUgMS4wNC0xLjAzIDEuMDQtMS43NnYtMi44MWwtNi4wNCAzLjNjLS42LjMzLTEuMzIuMzMtMS45MiAwem02LjA0LTkuNjYtOC40MyA0LjZjLS42OS4zOC0uNjkgMS4zOCAwIDEuNzZsOC40MyA0LjZjLjYuMzMgMS4zMi4zMyAxLjkyIDBMMjEgMTAuMDlWMTZjMCAuNTUuNDUgMSAxIDFzMS0uNDUgMS0xVjkuNTljMC0uMzctLjItLjctLjUyLS44OGwtOS41Mi01LjE5YTIuMDQgMi4wNCAwIDAgMC0xLjkyIDBcIlxufSksICdTY2hvb2xSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgU2Nob29sUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2Nob29sUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IEVkdWNhdGlvbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBFZHVjYXRpb25TZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PEVkdWNhdGlvbkl0ZW0+O1xufTtcblxuY29uc3QgRWR1Y2F0aW9uU2VjdGlvbiA9ICh7IGl0ZW1zIH06IEVkdWNhdGlvblNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBleWVicm93PVwiRWR1Y2F0aW9uXCJcbiAgICAgICAgICB0aXRsZT1cIkFjYWRlbWljIEZvdW5kYXRpb25zXCJcbiAgICAgICAgICBpY29uPXs8U2Nob29sUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2Ake2l0ZW0udGl0bGV9LSR7aXRlbS5pbnN0aXR1dGlvbn1gfT5cbiAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9e2l0ZW0uYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2l0ZW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHMubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e2RldGFpbH0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFN0b3J5SGVybyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IFN0b3J5SGVybztcbn07XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKHsgaGVybyB9OiBIZXJvU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjYpXCIgOiBcInJnYmEoOCwgMTQsIDI2LCAwLjg1KVwiLFxuICAgIH0pfVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFja1xuICAgICAgICBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiA4NDAsXG4gICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJsZWZ0XCIsIG1kOiBcImNlbnRlclwiIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJkaXNwbGF5XCI+e2hlcm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICB7aGVyby5zdWJ0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICB7aGVyby5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxudHlwZSBQaGlsb3NvcGh5U2VjdGlvblByb3BzID0ge1xuICBwaGlsb3NvcGh5VGV4dDogc3RyaW5nO1xuICBlbW9qaUxpc3Q6IHJlYWRvbmx5IHN0cmluZ1tdO1xufTtcblxuY29uc3QgUGhpbG9zb3BoeVNlY3Rpb24gPSAoeyBwaGlsb3NvcGh5VGV4dCwgZW1vamlMaXN0IH06IFBoaWxvc29waHlTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBzeD17e1xuICAgICAgICBweTogeyB4czogOCwgbWQ6IDEwIH0sXG4gICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDYsIG1kOiA4IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwaGlsb3NvcGh5VGV4dH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnByaW1hcnl9YCxcbiAgICAgICAgICAgICAgICAgIHBsOiAyLFxuICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAgSSBhbSBkcml2ZW4gYnkgZXhwZXJpZW5jZXPigJRkZXNpZ25pbmcgdGhlbSwgbGVhcm5pbmcgZnJvbSB0aGVtLCBhbmQgbGl2aW5nIHRoZW1cbiAgICAgICAgICAgICAgICAgIGRlZXBseS5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgIE15IGZyaWVuZHMgb2Z0ZW4gZGVzY3JpYmUgbWUgYXMgc29tZW9uZSB3aXRoIGxheWVyc+KAlGN1cmlvc2l0eSBrZWVwcyBtZSBleHBsb3JpbmdcbiAgICAgICAgICAgICAgICBuZXcgY3JhZnRzLCBjb21tdW5pdGllcywgYW5kIGNoYWxsZW5nZXMuIEl04oCZcyBob3cgSSBzdGF5IGdyb3VuZGVkIGFuZCBpbnNwaXJlZC5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezMuNX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNDhweFwiLFxuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNylcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIFRoZXNlIHNtYWxsIHJpdHVhbHMgc2hhcGUgdGhlIHdheSBJIGRlc2lnbiBhbmQgY29sbGFib3JhdGU6XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgRnJvbSBtdXNpYyBhbmQgY2VyYW1pY3MgdG8gcGxhbnRzLCBjb29raW5nLCBhbmQgY29sbGFib3JhdGl2ZSBnYW1lc+KAlEnigJltIG1vc3RcbiAgICAgICAgICAgICAgICAgIGFsaXZlIHdoZW4gSeKAmW0gYnVpbGRpbmcgd2l0aCBvdGhlcnMuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICB1c2VGbGV4R2FwXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgeHM6IFwiZmxleC1zdGFydFwiLCBtZDogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbW9qaUxpc3QubWFwKChlbW9qaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IDU2LCBzbTogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhCYXNpczogeyB4czogXCJhdXRvXCIsIG1kOiBcIjMwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZW1vaml9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaGlsb3NvcGh5U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IEdhbGxlcnlJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUGhvdG9HYWxsZXJ5U2VjdGlvblByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxHYWxsZXJ5SXRlbT47XG59O1xuXG5jb25zdCBQaG90b0dhbGxlcnlTZWN0aW9uID0gKHsgaXRlbXMgfTogUGhvdG9HYWxsZXJ5U2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17e1xuICAgICAgcHQ6IHsgeHM6IDIsIG1kOiA0IH0sXG4gICAgICBwYjogeyB4czogOCwgbWQ6IDEyIH0sXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyBtYXhXaWR0aDogNzIwIH19PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgUGhvdG8gU3RyaXBcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5MYXllcnMgb2YgdGhlIGV2ZXJ5ZGF5PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgQSBnbGltcHNlIGludG8gdGhlIHRleHR1cmVzLCBwZW9wbGUsIGFuZCBzY2VuZXMgdGhhdCBzaGFwZSBob3cgSSBhcHByb2FjaCBwcm9kdWN0XG4gICAgICAgICAgZGVzaWdu4oCUdW5maWx0ZXJlZCwgYSBsaXR0bGUgaW1wZXJmZWN0LCBhbmQgdmVyeSBhbGl2ZS5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Q29udGFpbmVyIGRpc2FibGVHdXR0ZXJzIG1heFdpZHRoPXtmYWxzZX0gc3g9e3sgbXQ6IHsgeHM6IDQsIG1kOiA2IH0gfX0+XG4gICAgICA8Qm94IHN4PXt7IHB4OiB7IHhzOiAyLCBzbTogNCwgbWQ6IDYgfSB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2x1bW5Db3VudDogeyB4czogMiwgc206IDMsIG1kOiA1IH0sXG4gICAgICAgICAgICBjb2x1bW5HYXA6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17YCR7aXRlbS5jYXB0aW9ufS0ke2l0ZW0uaW1hZ2V9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBicmVha0luc2lkZTogXCJhdm9pZFwiLFxuICAgICAgICAgICAgICAgIG1iOiB7IHhzOiAxLjUsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvR2FsbGVyeVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdWkvUGlsbFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IEJvb2ssIFJlYWRpbmdKb3VybmV5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUmVhZGluZ0pvdXJuZXlTZWN0aW9uUHJvcHMgPSB7XG4gIGpvdXJuZXk6IFJlYWRpbmdKb3VybmV5O1xuICBib29rczogUmVhZG9ubHlBcnJheTxCb29rPjtcbn07XG5cbmNvbnN0IFJlYWRpbmdKb3VybmV5U2VjdGlvbiA9ICh7IGpvdXJuZXksIGJvb2tzIH06IFJlYWRpbmdKb3VybmV5U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgZXllYnJvdz1cIlJlYWRpbmcgSm91cm5leVwiXG4gICAgICAgICAgICB0aXRsZT17am91cm5leS50aXRsZX1cbiAgICAgICAgICAgIHN1YnRpdGxlPXtqb3VybmV5LnN1YnRpdGxlfVxuICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtib29rLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmRcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Ym9vay5jb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgQ292ZXIgb2YgJHtib29rLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBnYXA6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57Ym9vay50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay50YWtlYXdheXMubWFwKCh0YWtlYXdheSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e3Rha2Vhd2F5fSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWtlYXdheX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suaGlnaGxpZ2h0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Jvb2suaGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWRpbmdKb3VybmV5U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1ZvbHVudGVlckFjdGl2aXNtUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEdob3N0QnV0dG9uIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFJlZmVyZW5jZUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBSZWZlcmVuY2VzU2VjdGlvblByb3BzID0ge1xuICByZWZlcmVuY2VzOiBSZWFkb25seUFycmF5PFJlZmVyZW5jZUl0ZW0+O1xufTtcblxuY29uc3QgUmVmZXJlbmNlc1NlY3Rpb24gPSAoeyByZWZlcmVuY2VzIH06IFJlZmVyZW5jZXNTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc0xpZ2h0ID0gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWZlcmVuY2VzXCJcbiAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBNeSBQYXJ0bmVycyBTYXlcIlxuICAgICAgICAgICAgaWNvbj17PFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICB7cmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtyZWZlcmVuY2UubmFtZX0+XG4gICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57cmVmZXJlbmNlLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cmVmZXJlbmNlLmxpbmtlZGlufVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBpc0xpZ2h0ID8gXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjIyKVwiIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMzUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNMaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogaXNMaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjQyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC41NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0xpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFZpZXcgb24gTGlua2VkSW5cbiAgICAgICAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBUZWFtU25hcHNob3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBUZWFtU2VjdGlvblByb3BzID0ge1xuICB0ZWFtOiBUZWFtU25hcHNob3Q7XG59O1xuXG5jb25zdCBUZWFtU2VjdGlvbiA9ICh7IHRlYW0gfTogVGVhbVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIGRpc2FibGVHdXR0ZXJzIG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB7IG1kOiBcIjEuMTVmciAwLjg1ZnJcIiB9LFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAzNjAsIHNtOiA0MjAsIG1kOiA1MjAgfSxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgc3JjPXt0ZWFtLmltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e3RlYW0uYWx0fVxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICBib3R0b206IHsgeHM6IDE2LCBtZDogMjQgfSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAxNiwgbWQ6IDMyIH0sXG4gICAgICAgICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgICAgICAgcHk6IDAuNzUsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnBpbGwsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMnB4KVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC43MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RlYW0uY2FwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweDogeyB4czogMywgc206IDYsIG1kOiA4IH0sXG4gICAgICAgICAgICAgIHB5OiB7IHhzOiA1LCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0gc3g9e3sgbWF4V2lkdGg6IDUyMCB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIENvbGxhYm9yYXRvcnNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGVhbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAge3RlYW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBgM3B4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5zZWNvbmRhcnl9YCxcbiAgICAgICAgICAgICAgICAgIHBsOiAzLFxuICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAg4oCcRGVzaWduaW5nIHdpdGggcGVvcGxlIEkgdHJ1c3Qga2VlcHMgdGhlIHdvcmsgaHVtYmxlLCBhbWJpdGlvdXMsIGFuZCBqb3lmdWwu4oCdXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBjcmVhdGl2ZUNvbmZpZGVuY2VDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3MvY3JlYXRpdmUtY29uZmlkZW5jZS5qcGdcIjtcbmltcG9ydCBkZXNpZ25PZkV2ZXJ5ZGF5VGhpbmdzQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL2Rlc2lnbi1vZi1ldmVyeWRheS10aGluZ3MuanBnXCI7XG5pbXBvcnQgc3ByaW50Q292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL3NwcmludC5qcGdcIjtcbmltcG9ydCBhaUFuZFV4Q292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL2FpLWFuZC11eC5qcGdcIjtcbmltcG9ydCBkaXZhclRlYW1QaG90b0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvZGl2YXItdGVhbS5qcGdcIjtcbmltcG9ydCBtYXNpaENoaWxkUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLWNoaWxkLXBob3RvLnBuZ1wiO1xuaW1wb3J0IG1hc2loQ29mZmVlQXJ0aXN0QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1jb2ZmZWUtYXJ0aXN0LnBuZ1wiO1xuaW1wb3J0IG1hc2loTW91bnRhaW5lZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLW1vdW50YWluZWVyLnBuZ1wiO1xuaW1wb3J0IG1hc2loVXhEZXNpZ25lckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtdXgtZGVzaWduZXIucG5nXCI7XG5pbXBvcnQgbWFzaWhXb29kQ2FydmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC13b29kLWNhcnZlci5wbmdcIjtcbmltcG9ydCB0eXBlIHtcbiAgQm9vayxcbiAgQ2VydGlmaWNhdGVJdGVtLFxuICBFZHVjYXRpb25JdGVtLFxuICBHYWxsZXJ5SXRlbSxcbiAgUmVhZGluZ0pvdXJuZXksXG4gIFJlZmVyZW5jZUl0ZW0sXG4gIFN0b3J5SGVybyxcbiAgVGVhbVNuYXBzaG90LFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgcmVzb2x2ZUFzc2V0ID0gKGFzc2V0OiBzdHJpbmcpID0+IG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZjtcblxuZXhwb3J0IGNvbnN0IHN0b3J5SGVybzogU3RvcnlIZXJvID0ge1xuICB0aXRsZTogXCJJIGFtIE1hc2loXCIsXG4gIHN1YnRpdGxlOiBcIkEgQ3JlYXRvciBvZiBNZWFuaW5nZnVsIEV4cGVyaWVuY2VzXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiT3V0c2lkZSBvZiBkZXNpZ24sIEkgZW5qb3kgZXhwbG9yaW5nIGNoYWxsZW5nZXMgYW5kIGxlYXJuaW5nIHRocm91Z2ggZXhwZXJpZW5jZXMgbGlrZSBtb3VudGFpbmVlcmluZywgd29vZCBjYXJ2aW5nLCBhbmQgdGVhY2hpbmcuIFRoZXNlIHB1cnN1aXRzIGhhdmUgdGF1Z2h0IG1lIHBhdGllbmNlLCByZXNpbGllbmNlLCBhbmQgZW1wYXRoeSwgd2hpY2ggSSBicmluZyBpbnRvIG15IHdvcmsgdG8gY3JhZnQgbWVhbmluZ2Z1bCBhbmQgdGhvdWdodGZ1bCBkZXNpZ25zLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbGxlcnk6IFJlYWRvbmx5QXJyYXk8R2FsbGVyeUl0ZW0+ID0gW1xuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaENoaWxkUGhvdG9Bc3NldCksXG4gICAgYWx0OiBcIk1hc2loIGFzIGEgY2hpbGQgaW4gaGlzIGRhZCdzIGphY2tldFwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBDaGlsZCBpbiBNeSBEYWQncyBKYWNrZXRcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhNb3VudGFpbmVlckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSBtb3VudGFpbmVlclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBNb3VudGFpbmVlclwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaENvZmZlZUFydGlzdEFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWgncyBsYXR0ZSBhcnRcIixcbiAgICBjYXB0aW9uOiBcIk15IGFydCBvbiBhIExhdHRlXCIsXG4gICAgc3ViY2FwdGlvbjogXCJMYXR0ZSBBcnQgYnkgbWUgOilcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhVeERlc2lnbmVyQXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBhcyBhIFVYIERlc2lnbmVyXCIsXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIFVYIERlc2lnbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loV29vZENhcnZlckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSB3b29kIGNhcnZlclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBXb29kIENhcnZlclwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHBoaWxvc29waHlUZXh0ID1cbiAgXCJJIGRlc2lnbiBleHBlcmllbmNlcyB0aGF0IG5vdCBvbmx5IHNvbHZlIHByb2JsZW1zIGJ1dCBjcmVhdGUgdmFsdWUgZm9yIGJvdGggYnVzaW5lc3NlcyBhbmQgdXNlcnMuIEkgZW5qb3kgZGlnZ2luZyBkZWVwIGludG8gY2hhbGxlbmdlcywgYW5hbHl6aW5nIHRoZW0gdGhvcm91Z2hseSwgYW5kIGNvbWluZyB1cCB3aXRoIHNvbHV0aW9ucyB0aGF0IHRydWx5IG1ha2UgYSBkaWZmZXJlbmNlLlwiO1xuXG5leHBvcnQgY29uc3QgZW1vamlMaXN0OiByZWFkb25seSBzdHJpbmdbXSA9IFtcIuKYle+4j1wiLCBcIvCfp5fwn4+9XCIsIFwi8J+Su1wiLCBcIvCfk5pcIl07XG5cbmV4cG9ydCBjb25zdCByZWFkaW5nSm91cm5leTogUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBcIkRlc2lnbiBCb29rcyBHdWlkaW5nIE15IENyYWZ0XCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiSW5zcGlyZWQgYnkgdGhlIGxpdmluZyBib29rc2hlbHZlcyBzaGFyZWQgYnkgcGVlcnMgbGlrZSBLeWxlIEpvaG5zdG9uLCBTYXd5ZXIgSG9sbGVuc2hlYWQsIEphc29uIFpvb2ssIGFuZCBBbXkgTWNMYXkgUGF0ZXJzb24sIEkga2VlcCBhIGN1cmF0ZWQgcmVjb3JkIG9mIHRoZSBpZGVhcyB0aGF0IHNoYXBlIG15IHByYWN0aWNlLlwiLFxuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IFwiQ3VycmVudGx5IHJlYWRpbmdcIixcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29rczogUmVhZG9ubHlBcnJheTxCb29rPiA9IFtcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzXCIsXG4gICAgYXV0aG9yOiBcIkRvbiBOb3JtYW5cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMTggwrcgUmV2aXNpdGVkIDIwMjRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJOb3JtYW7igJlzIGZyYW1ld29yayBmb3IgYWZmb3JkYW5jZXMgYW5kIGZlZWRiYWNrIGhlbHBlZCBtZSBidWlsZCByZXNpbGllbmNlIGFnYWluc3QgYmlhcyB3aGVuIHRlc3Rpbmcgc2FmZXR5LWNyaXRpY2FsIGZsb3dzLCBlc3BlY2lhbGx5IHdoZW4gd2UgcmVkZXNpZ25lZCB2b2ljZSBtYXNraW5nIGZvciBEaXZhci5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiUmVpbmZvcmNlZCBteSBoYWJpdCBvZiBwcm90b3R5cGluZyBlcnJvciBzdGF0ZXMgZmlyc3QuXCIsXG4gICAgICBcIkluZmx1ZW5jZWQgbXkgaGV1cmlzdGljcyBjaGVja2xpc3QgZm9yIGFjY2Vzc2liaWxpdHkgcmV2aWV3cy5cIixcbiAgICAgIFwiVGF1Z2h0IG1lIHRvIG5hcnJhdGUg4oCcdXNlciBnb2Fsc+KAnSBpbiBldmVyeSBkZXNpZ24gY3JpdGlxdWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoc3ByaW50Q292ZXJBc3NldCksXG4gICAgdGl0bGU6IFwiU3ByaW50XCIsXG4gICAgYXV0aG9yOiBcIkpha2UgS25hcHAgJiB0aGUgR1YgRGVzaWduIFRlYW1cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMjBcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJCb3Jyb3dpbmcgdGhlIHNwcmludCByaHl0aG0gaGVscGVkIG1lIGNvYWNoIHByb2R1Y3Qgc3F1YWRzIHRvd2FyZCBkZWNpc2lvbiBjbGFyaXR5LiBXZSBwcm90b3R5cGVkIGFuZCBsYXVuY2hlZCBhIGxveWFsdHkgcHJvZ3JhbSBhdCBTZXRhcmUgQXZhbCB1c2luZyBhIDQtZGF5IHZhcmlhdGlvbiBvZiB0aGlzIHBsYXlib29rLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJBZG9wdGVkIGxpZ2h0bmluZyB0YWxrcyB0byBhbGlnbiBzdGFrZWhvbGRlcnMgZmFzdC5cIixcbiAgICAgIFwiTWFkZSDigJxIb3cgbWlnaHQgd2XigJ0gc3ludGhlc2lzIGEgc3RhcGxlIGluIG15IHdvcmtzaG9wcy5cIixcbiAgICAgIFwiSW1wcm92ZWQgcmVtb3RlIGZhY2lsaXRhdGlvbiB1c2luZyBzdHJ1Y3R1cmVkIHZvdGluZyByaXR1YWxzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KGNyZWF0aXZlQ29uZmlkZW5jZUNvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIkNyZWF0aXZlIENvbmZpZGVuY2VcIixcbiAgICBhdXRob3I6IFwiVG9tICYgRGF2aWQgS2VsbGV5XCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDIxXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhpcyBib29rIHJlZnJhbWVkIGhvdyBJIG1lbnRvciBuZXcgZGVzaWduZXJz4oCUc2hpZnRpbmcgY3JpdGlxdWVzIGZyb20gc29sdXRpb24ganVkZ21lbnQgdG8gY2FwYWJpbGl0eSBidWlsZGluZyBhbmQgcHN5Y2hvbG9naWNhbCBzYWZldHkuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkludHJvZHVjZWQg4oCcY29uZmlkZW5jZSBtYXBwaW5n4oCdIGluIG15IG1lbnRvcnNoaXAgc2Vzc2lvbnMuXCIsXG4gICAgICBcIkRyb3ZlIG1lIHRvIGRlc2lnbiBwcm9qZWN0LWJhc2VkIGN1cnJpY3VsYSBhdCBSYWhuZW1hIENvbGxlZ2UuXCIsXG4gICAgICBcIkVuY291cmFnZWQgc3Rvcnl0ZWxsaW5nIHJpdHVhbHMgdG8gY2VsZWJyYXRlIGluY3JlbWVudGFsIHdpbnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoYWlBbmRVeENvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIkFJIGFuZCBVWDogV2h5IEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIE5lZWRzIFVzZXIgRXhwZXJpZW5jZVwiLFxuICAgIGF1dGhvcjogXCJQYW1lbGEgUGF2bGlzY2FrXCIsXG4gICAgbGFiZWw6IFwiSW4gcHJvZ3Jlc3MgwrcgUTQgMjAyNVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIknigJltIGV4cGxvcmluZyBob3cgaHVtYW4tY2VudGVyZWQgbWV0aG9kcyBldm9sdmUgd2hlbiBtb2RlbHMgbWFrZSBwcm9iYWJpbGlzdGljIGRlY2lzaW9uc+KAlGluZm9ybWluZyB0aGUgZ3VhcmRyYWlscyBJIGNyYWZ0IGZvciBBSS1hdWdtZW50ZWQgc29sdXRpb25zLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJCdWlsZGluZyBhbiBldGhpY2FsIGNoZWNrbGlzdCBmb3IgQUkgZXhwZXJpbWVudHMuXCIsXG4gICAgICBcIlBhaXJpbmcgcXVhbGl0YXRpdmUgaW50ZXJ2aWV3cyB3aXRoIG1vZGVsIG1ldHJpY3MuXCIsXG4gICAgICBcIkRvY3VtZW50aW5nIHByb21wdCBkZXNpZ24gcGF0dGVybnMgZm9yIG15IHRlYW0uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHQ6IFwiTm93IFJlYWRpbmdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0ZWFtOiBUZWFtU25hcHNob3QgPSB7XG4gIGltYWdlOiByZXNvbHZlQXNzZXQoZGl2YXJUZWFtUGhvdG9Bc3NldCksXG4gIGFsdDogXCJNYXNpaCBTYWRyaSB3aXRoIHRoZSBEaXZhciBwcm9kdWN0IHRlYW1cIixcbiAgY2FwdGlvbjpcbiAgICBcIkRpdmFyIFByb2R1Y3QgRXhwZXJpZW5jZSBUZWFtIOKAlCBjb2xsYWJvcmF0aW5nIGFjcm9zcyByZXNlYXJjaCwgcHJvZHVjdCBkZXNpZ24sIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgdGl0bGU6IFwiTXkgRGl2YXIgUHJvZHVjdCBUZWFtXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlc2UgYXJlIHRoZSB0YWxlbnRlZCBjb2xsZWFndWVzIEknbSBwcm91ZCB0byBjb2xsYWJvcmF0ZSB3aXRoIGF0IERpdmFyLiBUb2dldGhlciwgb3VyIDMyLXBlcnNvbiBwcm9kdWN0IG9yZ2FuaXphdGlvbiBibGVuZHMgZGVzaWduLCByZXNlYXJjaCwgcHJvZHVjdCwgYW5kIGVuZ2luZWVyaW5nIHRvIHNoaXAgZXhwZXJpZW5jZXMgdGhhdCBwcm90ZWN0IGFuZCBlbXBvd2VyIG1pbGxpb25zIG9mIHVzZXJzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbjogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPiA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkRlZ3JlZVwiLFxuICAgIGRhdGU6IFwiMjAxNSDigJMgMjAxOFwiLFxuICAgIHRpdGxlOiBcIkJTYyBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQYXlhbWUgTm9vciBVbml2ZXJzaXR5XCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZVwiLFxuICAgICAgXCJBY3RpdmUgTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IFNjaWVudGlmaWMgU29jaWV0eVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJBc3NvY2lhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJBc3NvY2lhdGUgaW4gTWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIkJ1LUFsaSBTaW5hIFVuaXZlcnNpdHlcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkRpcGxvbWFcIixcbiAgICBkYXRlOiBcIjIwMDlcIixcbiAgICB0aXRsZTogXCJEaXBsb21hIGluIE1hdGhlbWF0aWNzIGFuZCBQaHlzaWNzXCIsXG4gICAgaW5zdGl0dXRpb246IFwiTmF0aW9uYWwgT3JnYW5pemF0aW9uIGZvciBEZXZlbG9wbWVudCBvZiBFeGNlcHRpb25hbCBUYWxlbnRzIChTYW1wYWQpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2VydGlmaWNhdGVzOiBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT4gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZXM6IFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbiBMZWFkIGF0IFNuYXBwRm9vZFwiLFxuICAgIGRhdGU6IFwiSnVseSAzMCwgMjAyMSDigKIgUmVwb3J0ZWQgZGlyZWN0bHkgdG8gTWFzaWhcIixcbiAgICB0ZXh0OiBcIkkgaGFkIHRoZSBwcml2aWxlZ2Ugb2Ygd29ya2luZyBjbG9zZWx5IHdpdGggTWFzaWggZm9yIGEgeWVhci4gU3RhcnRpbmcgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBoaW0gd2FzIHRydWx5IGZvcnR1bmF0ZTsgaGUncyBub3Qgb25seSBlbXBhdGhldGljIHRvd2FyZHMgY29sbGVhZ3VlcyBidXQgYWxzbyBhZGVwdCBhdCBwcmlvcml0aXppbmcgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbCBzdHJlbmd0aHMgYW5kIGFzc2lnbmluZyB0aGVtIGFjY29yZGluZ2x5LiBNYXNpaCBwbGFjZXMgc2lnbmlmaWNhbnQgZW1waGFzaXMgb24gcGVyc29uYWwgZ3Jvd3RoLCBvZmZlcmluZyBwcmFjdGljYWwgcmVzb3VyY2VzIHRhaWxvcmVkIHRvIHRlYW0gbWVtYmVycycgY29tcGV0ZW5jaWVzLiBXb3JraW5nIGFsb25nc2lkZSBoaW0gd2FzIGJvdGggZW5qb3lhYmxlIGFuZCBlbnJpY2hpbmcuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhZWVkLWFib2xnaGFzZW1pL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGkgQXphZGVoXCIsXG4gICAgcm9sZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBhdCBVc2VyVGVzdGluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAzMSwgMjAyMSDigKIgTWFzaWgncyB0ZWFjaGVyXCIsXG4gICAgdGV4dDogXCJNYXNpaCBpcyBvbmUgb2YgbXkgcHJpdmlsZWdlZCBzdHVkZW50cyB3aG8gaXMgZGV0ZXJtaW5lZCB0byBpbXByb3ZlIGhpcyBrbm93bGVkZ2UgYW5kIHNraWxscy4gSGlzIGNvbW1pdG1lbnQgYW5kIHB1bmN0dWFsaXR5IGluIGRlbGl2ZXJpbmcgYXNzaWdubWVudHMgYXJlIGNvbW1lbmRhYmxlLiBJbiBteSBvcGluaW9uLCBoaXMgaW50ZXJlc3QgaW4gbGVhcm5pbmcgaGFzIGJlZW4gb25lIG9mIHRoZSBrZXkgcmVhc29ucyBmb3IgaGlzIHN1Y2Nlc3MuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsaS1hemFkZWgvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICByb2xlOiBcIkRlc2lnbiBMZWFkIGF0IFNldGFyZSBBdmFsIChNQ0kpXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyMSDigKIgSG9zc2VpbiBtYW5hZ2VkIE1hc2loIGRpcmVjdGx5XCIsXG4gICAgdGV4dDogXCJJIGhhdmUga25vd24gTWFzaWggc2luY2UgMjAxOCwgYW5kIGZyb20gdGhlIGJlZ2lubmluZywgaGlzIHBvdGVudGlhbCB0YWxlbnQgd2FzIGV2aWRlbnQsIG1hcmtpbmcgdGhlIHN0YXJ0IG9mIG91ciBjb2xsYWJvcmF0aXZlIGpvdXJuZXkuIEZvciBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIHlvdSBvbmx5IG5lZWQgdG8gZ2l2ZSBNYXNpaCB0aGUgcmF3IGRhdGEgYW5kIGFueSB1bmNlcnRhaW50aWVzLiBXaGlsZSB3b3JraW5nIHRvZ2V0aGVyIG9uIHRoZSBwcm9kdWN0IHRlYW0gYXQgU2V0YXJlIEF2YWwgQ29tcGFueSwgaGlzIGV4cGVydGlzZSB3YXMgY3J1Y2lhbCBpbiBwcm9ibGVtIGRlZmluaXRpb24sIHNvbHV0aW9uIGZpbmRpbmcsIGFuZCBkZXNpZ25pbmcgZmxvd3MuIFRoZSBvdXRjb21lcyBvZiBoaXMgcHJvZmVzc2lvbmFsIGFuZCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBkZXNpZ25zIGhhdmUgYWx3YXlzIGJlZW4gb3V0c3RhbmRpbmcuIEhlIGlzIGEgY29uc3VtbWF0ZSBwcm9mZXNzaW9uYWwsIGFuZCBJIGhpZ2hseSByZWNvbW1lbmQgaGltLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3NzZWlubWFobW91ZHZhbmQvXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvU2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvblwiO1xuaW1wb3J0IEVkdWNhdGlvblNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FZHVjYXRpb25TZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IFBoaWxvc29waHlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUGhpbG9zb3BoeVNlY3Rpb25cIjtcbmltcG9ydCBQaG90b0dhbGxlcnlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUGhvdG9HYWxsZXJ5U2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdKb3VybmV5U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1JlYWRpbmdKb3VybmV5U2VjdGlvblwiO1xuaW1wb3J0IFJlZmVyZW5jZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVmZXJlbmNlc1NlY3Rpb25cIjtcbmltcG9ydCBUZWFtU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1RlYW1TZWN0aW9uXCI7XG5pbXBvcnQge1xuICBib29rcyxcbiAgY2VydGlmaWNhdGVzLFxuICBlZHVjYXRpb24sXG4gIGVtb2ppTGlzdCxcbiAgZ2FsbGVyeSxcbiAgcGhpbG9zb3BoeVRleHQsXG4gIHJlYWRpbmdKb3VybmV5LFxuICByZWZlcmVuY2VzLFxuICBzdG9yeUhlcm8sXG4gIHRlYW0sXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBNeVN0b3J5UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcbiAgY29uc3QgaGVyb0ltYWdlID0gZ2FsbGVyeVswXT8uaW1hZ2U7XG5cbiAgY29uc3Qgc3RydWN0dXJlZERhdGEgPSB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJQcm9maWxlUGFnZVwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIE15IFN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IHN0b3J5SGVyby5kZXNjcmlwdGlvbixcbiAgICB1cmw6IGAke3NpdGVVcmx9L215LXN0b3J5YCxcbiAgICBpbWFnZTogaGVyb0ltYWdlLFxuICAgIHByaW1hcnlUb3BpYzoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICAgIHNhbWVBczogW1xuICAgICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL0BtYXNpaFwiLFxuICAgICAgICBcImh0dHBzOi8vbWFzaWguZnJhbWVyLndlYnNpdGUvXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlb1xuICAgICAgICB0aXRsZT1cIk15IFN0b3J5IOKAlCBNYXNpaCBTYWRyaeKAmXMgcGF0aCBhcyBhIHByb2R1Y3QgZGVzaWduZXJcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkxlYXJuIGhvdyBNYXNpaCBTYWRyaSBibGVuZHMgbWVudG9yc2hpcCwgZXhwZXJpbWVudGF0aW9uLCBhbmQgY3JhZnQgdG8gZGVzaWduIGh1bWFuIGV4cGVyaWVuY2Vz4oCUZnJvbSBjbGFzc3Jvb20gdG8gcHJvZHVjdCBsYXVuY2hlcy5cIlxuICAgICAgICBjYW5vbmljYWxQYXRoPVwiL215LXN0b3J5XCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdHlwZTogXCJwcm9maWxlXCIsXG4gICAgICAgICAgaW1hZ2U6IGhlcm9JbWFnZVxuICAgICAgICAgICAgPyB7IHVybDogaGVyb0ltYWdlLCBhbHQ6IFwiTWFzaWggU2FkcmkgZG9jdW1lbnRpbmcgcGVyc29uYWwgam91cm5leVwiIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB9fVxuICAgICAgICBzdHJ1Y3R1cmVkRGF0YT17c3RydWN0dXJlZERhdGF9XG4gICAgICAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17c3RvcnlIZXJvfSAvPlxuICAgICAgPFBob3RvR2FsbGVyeVNlY3Rpb24gaXRlbXM9e2dhbGxlcnl9IC8+XG4gICAgICA8UGhpbG9zb3BoeVNlY3Rpb24gcGhpbG9zb3BoeVRleHQ9e3BoaWxvc29waHlUZXh0fSBlbW9qaUxpc3Q9e2Vtb2ppTGlzdH0gLz5cbiAgICAgIDxSZWFkaW5nSm91cm5leVNlY3Rpb24gam91cm5leT17cmVhZGluZ0pvdXJuZXl9IGJvb2tzPXtib29rc30gLz5cbiAgICAgIDxUZWFtU2VjdGlvbiB0ZWFtPXt0ZWFtfSAvPlxuICAgICAgPEVkdWNhdGlvblNlY3Rpb24gaXRlbXM9e2VkdWNhdGlvbn0gLz5cbiAgICAgIDxDZXJ0aWZpY2F0ZXNTZWN0aW9uIGNlcnRpZmljYXRlcz17Y2VydGlmaWNhdGVzfSAvPlxuICAgICAgPFJlZmVyZW5jZXNTZWN0aW9uIHJlZmVyZW5jZXM9e3JlZmVyZW5jZXN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVN0b3J5UGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSwyREFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsb0JBQW9COzs7O0FDS3hCLElBQU0sZ0JBQWdCO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFFBQVE7QUFBQSxzQkFFUix1QkFxQkUsZUFyQkY7QUFBQSxFQUNFLFNBQVM7QUFBQSxFQUNULFlBQVksVUFBVSxXQUFXLFdBQVc7QUFBQSxFQUM1QyxXQUFXO0FBQUEsRUFIYixVQXFCRTtBQUFBLEtBaEJFLFFBQVEsNEJBQ1IsdUJBT0UsZUFQRjtBQUFBLE1BQU8sV0FBVTtBQUFBLE1BQU0sU0FBUztBQUFBLE1BQUcsWUFBVztBQUFBLE1BQTlDLFVBT0U7QUFBQSxRQU5DO0FBQUEsUUFDQSwyQkFDQyx1QkFFRSxvQkFGRjtBQUFBLFVBQVksU0FBUTtBQUFBLFVBQU0sT0FBTTtBQUFBLFVBQWhDLFVBQ0c7QUFBQSxXQURILGlDQUVFO0FBQUE7QUFBQSxPQUxOLGdDQU9FO0FBQUEsb0JBRUosdUJBQWtDLG9CQUFsQztBQUFBLE1BQVksU0FBUTtBQUFBLE1BQXBCLFVBQTBCO0FBQUEsT0FBMUIsaUNBQWtDO0FBQUEsSUFDakMsNEJBQ0MsdUJBRUUsb0JBRkY7QUFBQSxNQUFZLFNBQVE7QUFBQSxNQUFZLE9BQU07QUFBQSxNQUFpQixJQUFJLEVBQUUsVUFBVSxVQUFV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QixpQ0FBcUM7QUFBQSxzQkFDckMseUJBQUMsMkJBQUQ7QUFBQSxRQUFtQjtBQUFBLFFBQWdDO0FBQUEsU0FBbkQsaUNBQXlFO0FBQUEsc0JBQ3pFLHlCQUFDLCtCQUFEO0FBQUEsUUFBdUIsU0FBUztBQUFBLFFBQWdCO0FBQUEsU0FBaEQsaUNBQThEO0FBQUEsc0JBQzlELHlCQUFDLHFCQUFEO0FBQUEsUUFBYTtBQUFBLFNBQWIsaUNBQXlCO0FBQUEsc0JBQ3pCLHlCQUFDLDBCQUFEO0FBQUEsUUFBa0IsT0FBTztBQUFBLFNBQXpCLGlDQUFvQztBQUFBLHNCQUNwQyx5QkFBQyw2QkFBRDtBQUFBLFFBQXFCO0FBQUEsU0FBckIsaUNBQWlEO0FBQUEsc0JBQ2pELHlCQUFDLDJCQUFEO0FBQUEsUUFBbUI7QUFBQSxTQUFuQixpQ0FBMkM7QUFBQTtBQUFBLEtBckI3QyxnQ0FzQkU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICI5RjEwRUMyRkNBQjEwNkU0NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
