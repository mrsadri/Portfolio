import {
  VolunteerActivismRounded_default
} from "./chunk-e4bga9a6.js";
import"./chunk-56dhb304.js";
import {
  GhostButton_default,
  Pill_default,
  createImageResource
} from "./chunk-gbpa909n.js";
import {
  Seo_default,
  site_default
} from "./chunk-02872d2e.js";
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
} from "./chunk-a0eztsys.js";

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
              src: item.image.src,
              alt: item.image.alt,
              loading: "lazy",
              sx: {
                width: "100%",
                display: "block",
                objectFit: "cover"
              }
            }, undefined, false, undefined, this)
          }, `${item.caption}-${item.image.src}`, false, undefined, this))
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
                    src: book.cover.src,
                    alt: book.cover.alt,
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
                src: team.image.src,
                alt: team.image.alt,
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
var storyHero = {
  title: "I am Masih",
  subtitle: "A Creator of Meaningful Experiences",
  description: "Outside of design, I enjoy exploring challenges and learning through experiences like mountaineering, wood carving, and teaching. These pursuits have taught me patience, resilience, and empathy, which I bring into my work to craft meaningful and thoughtful designs."
};
var gallery = [
  {
    image: createImageResource(import.meta.url, masih_child_photo_default, "Masih as a child in his dad's jacket"),
    caption: "Me as a Child in My Dad's Jacket"
  },
  {
    image: createImageResource(import.meta.url, masih_mountaineer_default, "Masih as a mountaineer"),
    caption: "Me as a Mountaineer"
  },
  {
    image: createImageResource(import.meta.url, masih_coffee_artist_default, "Masih's latte art"),
    caption: "My art on a Latte",
    subcaption: "Latte Art by me :)"
  },
  {
    image: createImageResource(import.meta.url, masih_ux_designer_default, "Masih as a UX Designer"),
    caption: "Me as a UX Designer"
  },
  {
    image: createImageResource(import.meta.url, masih_wood_carver_default, "Masih as a wood carver"),
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
    cover: createImageResource(import.meta.url, design_of_everyday_things_default, "The Design of Everyday Things book cover"),
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
    cover: createImageResource(import.meta.url, sprint_default, "Sprint book cover"),
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
    cover: createImageResource(import.meta.url, creative_confidence_default, "Creative Confidence book cover"),
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
    cover: createImageResource(import.meta.url, ai_and_ux_default, "AI and UX book cover"),
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
  image: createImageResource(import.meta.url, divar_team_default, "Masih Sadri with the Divar product team"),
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

// src/features/my-story/seo.ts
var siteUrl = site_default();
var heroImage = gallery[0]?.image;
var myStoryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Masih Sadri — My Story",
  description: storyHero.description,
  url: `${siteUrl}/my-story`,
  image: heroImage?.src,
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
var myStoryPageMetadata = {
  title: "My Story — Masih Sadri’s path as a product designer",
  description: "Learn how Masih Sadri blends mentorship, experimentation, and craft to design human experiences—from classroom to product launches.",
  canonicalPath: "/my-story",
  openGraph: {
    type: "profile",
    image: heroImage ? {
      url: heroImage.src,
      alt: heroImage.alt,
      width: heroImage.width ?? 1200,
      height: heroImage.height ?? 630
    } : undefined
  },
  structuredData: myStoryStructuredData
};

// src/features/my-story/MyStoryPage.tsx
var jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var MyStoryPage = () => {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(jsx_dev_runtime11.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Seo_default, {
        ...myStoryPageMetadata
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

//# debugId=EEB1A1D1F6768CA264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TdXJmYWNlQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1NjaG9vbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1BoaWxvc29waHlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9SZWFkaW5nSm91cm5leVNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1JlZmVyZW5jZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9UZWFtU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3Rvcnkvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9NeVN0b3J5UGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDVoLTJWNGMwLS41NS0uNDUtMS0xLTFIOGMtLjU1IDAtMSAuNDUtMSAxdjFINWMtMS4xIDAtMiAuOS0yIDJ2MWMwIDIuNTUgMS45MiA0LjYzIDQuMzkgNC45NC42MyAxLjUgMS45OCAyLjYzIDMuNjEgMi45NlYxOUg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDhjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTN2LTMuMWMxLjYzLS4zMyAyLjk4LTEuNDYgMy42MS0yLjk2QzE5LjA4IDEyLjYzIDIxIDEwLjU1IDIxIDhWN2MwLTEuMS0uOS0yLTItMk01IDhWN2gydjMuODJDNS44NCAxMC40IDUgOS4zIDUgOG0xNCAwYzAgMS4zLS44NCAyLjQtMiAyLjgyVjdoMnpcIlxufSksICdFbW9qaUV2ZW50c1JvdW5kZWQnKTsiLAogICAgImltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgU2VjdGlvbkhlYWRlclByb3BzID0ge1xuICBleWVicm93Pzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgYWxpZ24/OiBcImNlbnRlclwiIHwgXCJsZWZ0XCI7XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHtcbiAgZXllYnJvdyxcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBpY29uLFxuICBhbGlnbiA9IFwiY2VudGVyXCIsXG59OiBTZWN0aW9uSGVhZGVyUHJvcHMpID0+IChcbiAgPFN0YWNrXG4gICAgc3BhY2luZz17MS41fVxuICAgIGFsaWduSXRlbXM9e2FsaWduID09PSBcImNlbnRlclwiID8gXCJjZW50ZXJcIiA6IFwiZmxleC1zdGFydFwifVxuICAgIHRleHRBbGlnbj17YWxpZ259XG4gID5cbiAgICB7KGljb24gfHwgZXllYnJvdykgJiYgKFxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAge2ljb259XG4gICAgICAgIHtleWVicm93ICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGFnXCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKX1cbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgIHtzdWJ0aXRsZSAmJiAoXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IG1heFdpZHRoOiBhbGlnbiA9PT0gXCJjZW50ZXJcIiA/IDcyMCA6IDY0MCwgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICB7c3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgKX1cbiAgPC9TdGFjaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkZXI7XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FyZFByb3BzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuXG5jb25zdCBTdXJmYWNlQ2FyZCA9ICh7IHN4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfTogQ2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9e3tcbiAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgLi4uc3gsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN1cmZhY2VDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEVtb2ppRXZlbnRzUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1vamlFdmVudHNSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VydGlmaWNhdGVJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzID0ge1xuICBjZXJ0aWZpY2F0ZXM6IFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGVJdGVtPjtcbn07XG5cbmNvbnN0IENlcnRpZmljYXRlc1NlY3Rpb24gPSAoeyBjZXJ0aWZpY2F0ZXMgfTogQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBleWVicm93PVwiQ29udGludW91cyBMZWFybmluZ1wiXG4gICAgICAgICAgdGl0bGU9XCJDZXJ0aWZpY2F0ZXMgJiBUcmFpbmluZ1wiXG4gICAgICAgICAgaWNvbj17PEVtb2ppRXZlbnRzUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge2NlcnRpZmljYXRlcy5tYXAoKGNlcnRpZmljYXRlKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtgJHtjZXJ0aWZpY2F0ZS50aXRsZX0tJHtjZXJ0aWZpY2F0ZS5kYXRlfWB9PlxuICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17Y2VydGlmaWNhdGUuYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntjZXJ0aWZpY2F0ZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtbY2VydGlmaWNhdGUuaG91cnMsIGNlcnRpZmljYXRlLnNjb3JlLCBjZXJ0aWZpY2F0ZS50b3BpY3NdXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkga2V5PXtkZXRhaWx9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTMuMTh2Mi44MWMwIC43My40IDEuNDEgMS4wNCAxLjc2bDUgMi43M2MuNi4zMyAxLjMyLjMzIDEuOTIgMGw1LTIuNzNjLjY0LS4zNSAxLjA0LTEuMDMgMS4wNC0xLjc2di0yLjgxbC02LjA0IDMuM2MtLjYuMzMtMS4zMi4zMy0xLjkyIDB6bTYuMDQtOS42Ni04LjQzIDQuNmMtLjY5LjM4LS42OSAxLjM4IDAgMS43Nmw4LjQzIDQuNmMuNi4zMyAxLjMyLjMzIDEuOTIgMEwyMSAxMC4wOVYxNmMwIC41NS40NSAxIDEgMXMxLS40NSAxLTFWOS41OWMwLS4zNy0uMi0uNy0uNTItLjg4bC05LjUyLTUuMTlhMi4wNCAyLjA0IDAgMCAwLTEuOTIgMFwiXG59KSwgJ1NjaG9vbFJvdW5kZWQnKTsiLAogICAgImltcG9ydCBTY2hvb2xSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TY2hvb2xSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgRWR1Y2F0aW9uSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEVkdWNhdGlvblNlY3Rpb25Qcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8RWR1Y2F0aW9uSXRlbT47XG59O1xuXG5jb25zdCBFZHVjYXRpb25TZWN0aW9uID0gKHsgaXRlbXMgfTogRWR1Y2F0aW9uU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIGV5ZWJyb3c9XCJFZHVjYXRpb25cIlxuICAgICAgICAgIHRpdGxlPVwiQWNhZGVtaWMgRm91bmRhdGlvbnNcIlxuICAgICAgICAgIGljb249ezxTY2hvb2xSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17YCR7aXRlbS50aXRsZX0tJHtpdGVtLmluc3RpdHV0aW9ufWB9PlxuICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17aXRlbS5iYWRnZX0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17ZGV0YWlsfSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb25TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgU3RvcnlIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogU3RvcnlIZXJvO1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cImhlYWRlclwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNilcIiA6IFwicmdiYSg4LCAxNCwgMjYsIDAuODUpXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IDg0MCxcbiAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImxlZnRcIiwgbWQ6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIFBoaWxvc29waHlTZWN0aW9uUHJvcHMgPSB7XG4gIHBoaWxvc29waHlUZXh0OiBzdHJpbmc7XG4gIGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG5jb25zdCBQaGlsb3NvcGh5U2VjdGlvbiA9ICh7IHBoaWxvc29waHlUZXh0LCBlbW9qaUxpc3QgfTogUGhpbG9zb3BoeVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDggfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BoaWxvc29waHlUZXh0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICAgICAgICAgICAgcGw6IDIsXG4gICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICBJIGFtIGRyaXZlbiBieSBleHBlcmllbmNlc+KAlGRlc2lnbmluZyB0aGVtLCBsZWFybmluZyBmcm9tIHRoZW0sIGFuZCBsaXZpbmcgdGhlbVxuICAgICAgICAgICAgICAgICAgZGVlcGx5LlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgTXkgZnJpZW5kcyBvZnRlbiBkZXNjcmliZSBtZSBhcyBzb21lb25lIHdpdGggbGF5ZXJz4oCUY3VyaW9zaXR5IGtlZXBzIG1lIGV4cGxvcmluZ1xuICAgICAgICAgICAgICAgIG5ldyBjcmFmdHMsIGNvbW11bml0aWVzLCBhbmQgY2hhbGxlbmdlcy4gSXTigJlzIGhvdyBJIHN0YXkgZ3JvdW5kZWQgYW5kIGluc3BpcmVkLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17My41fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0OHB4XCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC43KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuNylcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgVGhlc2Ugc21hbGwgcml0dWFscyBzaGFwZSB0aGUgd2F5IEkgZGVzaWduIGFuZCBjb2xsYWJvcmF0ZTpcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICBGcm9tIG11c2ljIGFuZCBjZXJhbWljcyB0byBwbGFudHMsIGNvb2tpbmcsIGFuZCBjb2xsYWJvcmF0aXZlIGdhbWVz4oCUSeKAmW0gbW9zdFxuICAgICAgICAgICAgICAgICAgYWxpdmUgd2hlbiBJ4oCZbSBidWlsZGluZyB3aXRoIG90aGVycy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIHVzZUZsZXhHYXBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyB4czogXCJmbGV4LXN0YXJ0XCIsIG1kOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Vtb2ppTGlzdC5tYXAoKGVtb2ppKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogNTYsIHNtOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IHhzOiBcImF1dG9cIiwgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlbW9qaX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBoaWxvc29waHlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgR2FsbGVyeUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBQaG90b0dhbGxlcnlTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPjtcbn07XG5cbmNvbnN0IFBob3RvR2FsbGVyeVNlY3Rpb24gPSAoeyBpdGVtcyB9OiBQaG90b0dhbGxlcnlTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXt7XG4gICAgICBwdDogeyB4czogMiwgbWQ6IDQgfSxcbiAgICAgIHBiOiB7IHhzOiA4LCBtZDogMTIgfSxcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IG1heFdpZHRoOiA3MjAgfX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBQaG90byBTdHJpcFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkxheWVycyBvZiB0aGUgZXZlcnlkYXk8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBBIGdsaW1wc2UgaW50byB0aGUgdGV4dHVyZXMsIHBlb3BsZSwgYW5kIHNjZW5lcyB0aGF0IHNoYXBlIGhvdyBJIGFwcHJvYWNoIHByb2R1Y3RcbiAgICAgICAgICBkZXNpZ27igJR1bmZpbHRlcmVkLCBhIGxpdHRsZSBpbXBlcmZlY3QsIGFuZCB2ZXJ5IGFsaXZlLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgZGlzYWJsZUd1dHRlcnMgbWF4V2lkdGg9e2ZhbHNlfSBzeD17eyBtdDogeyB4czogNCwgbWQ6IDYgfSB9fT5cbiAgICAgIDxCb3ggc3g9e3sgcHg6IHsgeHM6IDIsIHNtOiA0LCBtZDogNiB9IH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGNvbHVtbkNvdW50OiB7IHhzOiAyLCBzbTogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgIGNvbHVtbkdhcDogeyB4czogMS41LCBtZDogMi41IH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLmNhcHRpb259LSR7aXRlbS5pbWFnZS5zcmN9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBicmVha0luc2lkZTogXCJhdm9pZFwiLFxuICAgICAgICAgICAgICAgIG1iOiB7IHhzOiAxLjUsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5pbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9HYWxsZXJ5U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgQm9vaywgUmVhZGluZ0pvdXJuZXkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBSZWFkaW5nSm91cm5leVNlY3Rpb25Qcm9wcyA9IHtcbiAgam91cm5leTogUmVhZGluZ0pvdXJuZXk7XG4gIGJvb2tzOiBSZWFkb25seUFycmF5PEJvb2s+O1xufTtcblxuY29uc3QgUmVhZGluZ0pvdXJuZXlTZWN0aW9uID0gKHsgam91cm5leSwgYm9va3MgfTogUmVhZGluZ0pvdXJuZXlTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICBleWVicm93PVwiUmVhZGluZyBKb3VybmV5XCJcbiAgICAgICAgICAgIHRpdGxlPXtqb3VybmV5LnRpdGxlfVxuICAgICAgICAgICAgc3VidGl0bGU9e2pvdXJuZXkuc3VidGl0bGV9XG4gICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJzdHJldGNoXCI+XG4gICAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2Jvb2sudGl0bGV9PlxuICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtib29rLmNvdmVyLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtib29rLmNvdmVyLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGdhcDogMixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNzV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2subGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntib29rLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rLnN1bW1hcnl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rLnRha2Vhd2F5cy5tYXAoKHRha2Vhd2F5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17dGFrZWF3YXl9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Rha2Vhd2F5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5oaWdobGlnaHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Ym9vay5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhZGluZ0pvdXJuZXlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBTdXJmYWNlQ2FyZCBmcm9tIFwiLi9TdXJmYWNlQ2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBSZWZlcmVuY2VJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUmVmZXJlbmNlc1NlY3Rpb25Qcm9wcyA9IHtcbiAgcmVmZXJlbmNlczogUmVhZG9ubHlBcnJheTxSZWZlcmVuY2VJdGVtPjtcbn07XG5cbmNvbnN0IFJlZmVyZW5jZXNTZWN0aW9uID0gKHsgcmVmZXJlbmNlcyB9OiBSZWZlcmVuY2VzU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNMaWdodCA9IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICBleWVicm93PVwiUmVmZXJlbmNlc1wiXG4gICAgICAgICAgICB0aXRsZT1cIldoYXQgTXkgUGFydG5lcnMgU2F5XCJcbiAgICAgICAgICAgIGljb249ezxWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz59XG4gICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAge3JlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17cmVmZXJlbmNlLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3JlZmVyZW5jZS5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS5yb2xlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2UuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlZmVyZW5jZS5saW5rZWRpbn1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG10OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogaXNMaWdodCA/IFwicmdiYSgxNywgNzYsIDE3MCwgMC4yMilcIiA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjM1KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGlzTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgNzYsIDE3MCwgMC40MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNMaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4wOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTYpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9uIExpbmtlZEluXG4gICAgICAgICAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgVGVhbVNuYXBzaG90IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgVGVhbVNlY3Rpb25Qcm9wcyA9IHtcbiAgdGVhbTogVGVhbVNuYXBzaG90O1xufTtcblxuY29uc3QgVGVhbVNlY3Rpb24gPSAoeyB0ZWFtIH06IFRlYW1TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBzeD17e1xuICAgICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogeyBtZDogXCIxLjE1ZnIgMC44NWZyXCIgfSxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogeyB4czogMzYwLCBzbTogNDIwLCBtZDogNTIwIH0sXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgIHNyYz17dGVhbS5pbWFnZS5zcmN9XG4gICAgICAgICAgICAgIGFsdD17dGVhbS5pbWFnZS5hbHR9XG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB7IHhzOiAxNiwgbWQ6IDI0IH0sXG4gICAgICAgICAgICAgICAgbGVmdDogeyB4czogMTYsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICAgIHB4OiAyLFxuICAgICAgICAgICAgICAgIHB5OiAwLjc1LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5waWxsLFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuNzIpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0ZWFtLmNhcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIHNtOiA2LCBtZDogOCB9LFxuICAgICAgICAgICAgICBweTogeyB4czogNSwgbWQ6IDAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19IHN4PXt7IG1heFdpZHRoOiA1MjAgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBDb2xsYWJvcmF0b3JzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RlYW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS44IH19PlxuICAgICAgICAgICAgICAgIHt0ZWFtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuc2Vjb25kYXJ5fWAsXG4gICAgICAgICAgICAgICAgICBwbDogMyxcbiAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnERlc2lnbmluZyB3aXRoIHBlb3BsZSBJIHRydXN0IGtlZXBzIHRoZSB3b3JrIGh1bWJsZSwgYW1iaXRpb3VzLCBhbmQgam95ZnVsLuKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL2NyZWF0aXZlLWNvbmZpZGVuY2UuanBnXCI7XG5pbXBvcnQgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9kZXNpZ24tb2YtZXZlcnlkYXktdGhpbmdzLmpwZ1wiO1xuaW1wb3J0IHNwcmludENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9zcHJpbnQuanBnXCI7XG5pbXBvcnQgYWlBbmRVeENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9haS1hbmQtdXguanBnXCI7XG5pbXBvcnQgZGl2YXJUZWFtUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2RpdmFyLXRlYW0uanBnXCI7XG5pbXBvcnQgbWFzaWhDaGlsZFBob3RvQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1jaGlsZC1waG90by5wbmdcIjtcbmltcG9ydCBtYXNpaENvZmZlZUFydGlzdEFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtY29mZmVlLWFydGlzdC5wbmdcIjtcbmltcG9ydCBtYXNpaE1vdW50YWluZWVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1tb3VudGFpbmVlci5wbmdcIjtcbmltcG9ydCBtYXNpaFV4RGVzaWduZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXV4LWRlc2lnbmVyLnBuZ1wiO1xuaW1wb3J0IG1hc2loV29vZENhcnZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtd29vZC1jYXJ2ZXIucG5nXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZVJlc291cmNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91dGlscy9hc3NldHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgQm9vayxcbiAgQ2VydGlmaWNhdGVJdGVtLFxuICBFZHVjYXRpb25JdGVtLFxuICBHYWxsZXJ5SXRlbSxcbiAgUmVhZGluZ0pvdXJuZXksXG4gIFJlZmVyZW5jZUl0ZW0sXG4gIFN0b3J5SGVybyxcbiAgVGVhbVNuYXBzaG90LFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3J5SGVybzogU3RvcnlIZXJvID0ge1xuICB0aXRsZTogXCJJIGFtIE1hc2loXCIsXG4gIHN1YnRpdGxlOiBcIkEgQ3JlYXRvciBvZiBNZWFuaW5nZnVsIEV4cGVyaWVuY2VzXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiT3V0c2lkZSBvZiBkZXNpZ24sIEkgZW5qb3kgZXhwbG9yaW5nIGNoYWxsZW5nZXMgYW5kIGxlYXJuaW5nIHRocm91Z2ggZXhwZXJpZW5jZXMgbGlrZSBtb3VudGFpbmVlcmluZywgd29vZCBjYXJ2aW5nLCBhbmQgdGVhY2hpbmcuIFRoZXNlIHB1cnN1aXRzIGhhdmUgdGF1Z2h0IG1lIHBhdGllbmNlLCByZXNpbGllbmNlLCBhbmQgZW1wYXRoeSwgd2hpY2ggSSBicmluZyBpbnRvIG15IHdvcmsgdG8gY3JhZnQgbWVhbmluZ2Z1bCBhbmQgdGhvdWdodGZ1bCBkZXNpZ25zLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbGxlcnk6IFJlYWRvbmx5QXJyYXk8R2FsbGVyeUl0ZW0+ID0gW1xuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgICBtYXNpaENoaWxkUGhvdG9Bc3NldCxcbiAgICAgIFwiTWFzaWggYXMgYSBjaGlsZCBpbiBoaXMgZGFkJ3MgamFja2V0XCIsXG4gICAgKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgQ2hpbGQgaW4gTXkgRGFkJ3MgSmFja2V0XCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIG1hc2loTW91bnRhaW5lZXJBc3NldCwgXCJNYXNpaCBhcyBhIG1vdW50YWluZWVyXCIpLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBNb3VudGFpbmVlclwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYXNpaENvZmZlZUFydGlzdEFzc2V0LCBcIk1hc2loJ3MgbGF0dGUgYXJ0XCIpLFxuICAgIGNhcHRpb246IFwiTXkgYXJ0IG9uIGEgTGF0dGVcIixcbiAgICBzdWJjYXB0aW9uOiBcIkxhdHRlIEFydCBieSBtZSA6KVwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYXNpaFV4RGVzaWduZXJBc3NldCwgXCJNYXNpaCBhcyBhIFVYIERlc2lnbmVyXCIpLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBVWCBEZXNpZ25lclwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYXNpaFdvb2RDYXJ2ZXJBc3NldCwgXCJNYXNpaCBhcyBhIHdvb2QgY2FydmVyXCIpLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBXb29kIENhcnZlclwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHBoaWxvc29waHlUZXh0ID1cbiAgXCJJIGRlc2lnbiBleHBlcmllbmNlcyB0aGF0IG5vdCBvbmx5IHNvbHZlIHByb2JsZW1zIGJ1dCBjcmVhdGUgdmFsdWUgZm9yIGJvdGggYnVzaW5lc3NlcyBhbmQgdXNlcnMuIEkgZW5qb3kgZGlnZ2luZyBkZWVwIGludG8gY2hhbGxlbmdlcywgYW5hbHl6aW5nIHRoZW0gdGhvcm91Z2hseSwgYW5kIGNvbWluZyB1cCB3aXRoIHNvbHV0aW9ucyB0aGF0IHRydWx5IG1ha2UgYSBkaWZmZXJlbmNlLlwiO1xuXG5leHBvcnQgY29uc3QgZW1vamlMaXN0OiByZWFkb25seSBzdHJpbmdbXSA9IFtcIuKYle+4j1wiLCBcIvCfp5fwn4+9XCIsIFwi8J+Su1wiLCBcIvCfk5pcIl07XG5cbmV4cG9ydCBjb25zdCByZWFkaW5nSm91cm5leTogUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBcIkRlc2lnbiBCb29rcyBHdWlkaW5nIE15IENyYWZ0XCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiSW5zcGlyZWQgYnkgdGhlIGxpdmluZyBib29rc2hlbHZlcyBzaGFyZWQgYnkgcGVlcnMgbGlrZSBLeWxlIEpvaG5zdG9uLCBTYXd5ZXIgSG9sbGVuc2hlYWQsIEphc29uIFpvb2ssIGFuZCBBbXkgTWNMYXkgUGF0ZXJzb24sIEkga2VlcCBhIGN1cmF0ZWQgcmVjb3JkIG9mIHRoZSBpZGVhcyB0aGF0IHNoYXBlIG15IHByYWN0aWNlLlwiLFxuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IFwiQ3VycmVudGx5IHJlYWRpbmdcIixcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29rczogUmVhZG9ubHlBcnJheTxCb29rPiA9IFtcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQsXG4gICAgICBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzIGJvb2sgY292ZXJcIixcbiAgICApLFxuICAgIHRpdGxlOiBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzXCIsXG4gICAgYXV0aG9yOiBcIkRvbiBOb3JtYW5cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMTggwrcgUmV2aXNpdGVkIDIwMjRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJOb3JtYW7igJlzIGZyYW1ld29yayBmb3IgYWZmb3JkYW5jZXMgYW5kIGZlZWRiYWNrIGhlbHBlZCBtZSBidWlsZCByZXNpbGllbmNlIGFnYWluc3QgYmlhcyB3aGVuIHRlc3Rpbmcgc2FmZXR5LWNyaXRpY2FsIGZsb3dzLCBlc3BlY2lhbGx5IHdoZW4gd2UgcmVkZXNpZ25lZCB2b2ljZSBtYXNraW5nIGZvciBEaXZhci5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiUmVpbmZvcmNlZCBteSBoYWJpdCBvZiBwcm90b3R5cGluZyBlcnJvciBzdGF0ZXMgZmlyc3QuXCIsXG4gICAgICBcIkluZmx1ZW5jZWQgbXkgaGV1cmlzdGljcyBjaGVja2xpc3QgZm9yIGFjY2Vzc2liaWxpdHkgcmV2aWV3cy5cIixcbiAgICAgIFwiVGF1Z2h0IG1lIHRvIG5hcnJhdGUg4oCcdXNlciBnb2Fsc+KAnSBpbiBldmVyeSBkZXNpZ24gY3JpdGlxdWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgc3ByaW50Q292ZXJBc3NldCwgXCJTcHJpbnQgYm9vayBjb3ZlclwiKSxcbiAgICB0aXRsZTogXCJTcHJpbnRcIixcbiAgICBhdXRob3I6IFwiSmFrZSBLbmFwcCAmIHRoZSBHViBEZXNpZ24gVGVhbVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJvcnJvd2luZyB0aGUgc3ByaW50IHJoeXRobSBoZWxwZWQgbWUgY29hY2ggcHJvZHVjdCBzcXVhZHMgdG93YXJkIGRlY2lzaW9uIGNsYXJpdHkuIFdlIHByb3RvdHlwZWQgYW5kIGxhdW5jaGVkIGEgbG95YWx0eSBwcm9ncmFtIGF0IFNldGFyZSBBdmFsIHVzaW5nIGEgNC1kYXkgdmFyaWF0aW9uIG9mIHRoaXMgcGxheWJvb2suXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkFkb3B0ZWQgbGlnaHRuaW5nIHRhbGtzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBmYXN0LlwiLFxuICAgICAgXCJNYWRlIOKAnEhvdyBtaWdodCB3ZeKAnSBzeW50aGVzaXMgYSBzdGFwbGUgaW4gbXkgd29ya3Nob3BzLlwiLFxuICAgICAgXCJJbXByb3ZlZCByZW1vdGUgZmFjaWxpdGF0aW9uIHVzaW5nIHN0cnVjdHVyZWQgdm90aW5nIHJpdHVhbHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCxcbiAgICAgIFwiQ3JlYXRpdmUgQ29uZmlkZW5jZSBib29rIGNvdmVyXCIsXG4gICAgKSxcbiAgICB0aXRsZTogXCJDcmVhdGl2ZSBDb25maWRlbmNlXCIsXG4gICAgYXV0aG9yOiBcIlRvbSAmIERhdmlkIEtlbGxleVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgYm9vayByZWZyYW1lZCBob3cgSSBtZW50b3IgbmV3IGRlc2lnbmVyc+KAlHNoaWZ0aW5nIGNyaXRpcXVlcyBmcm9tIHNvbHV0aW9uIGp1ZGdtZW50IHRvIGNhcGFiaWxpdHkgYnVpbGRpbmcgYW5kIHBzeWNob2xvZ2ljYWwgc2FmZXR5LlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIOKAnGNvbmZpZGVuY2UgbWFwcGluZ+KAnSBpbiBteSBtZW50b3JzaGlwIHNlc3Npb25zLlwiLFxuICAgICAgXCJEcm92ZSBtZSB0byBkZXNpZ24gcHJvamVjdC1iYXNlZCBjdXJyaWN1bGEgYXQgUmFobmVtYSBDb2xsZWdlLlwiLFxuICAgICAgXCJFbmNvdXJhZ2VkIHN0b3J5dGVsbGluZyByaXR1YWxzIHRvIGNlbGVicmF0ZSBpbmNyZW1lbnRhbCB3aW5zLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIGFpQW5kVXhDb3ZlckFzc2V0LFxuICAgICAgXCJBSSBhbmQgVVggYm9vayBjb3ZlclwiLFxuICAgICksXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gICAgYXV0aG9yOiBcIlBhbWVsYSBQYXZsaXNjYWtcIixcbiAgICBsYWJlbDogXCJJbiBwcm9ncmVzcyDCtyBRNCAyMDI1XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSeKAmW0gZXhwbG9yaW5nIGhvdyBodW1hbi1jZW50ZXJlZCBtZXRob2RzIGV2b2x2ZSB3aGVuIG1vZGVscyBtYWtlIHByb2JhYmlsaXN0aWMgZGVjaXNpb25z4oCUaW5mb3JtaW5nIHRoZSBndWFyZHJhaWxzIEkgY3JhZnQgZm9yIEFJLWF1Z21lbnRlZCBzb2x1dGlvbnMuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkJ1aWxkaW5nIGFuIGV0aGljYWwgY2hlY2tsaXN0IGZvciBBSSBleHBlcmltZW50cy5cIixcbiAgICAgIFwiUGFpcmluZyBxdWFsaXRhdGl2ZSBpbnRlcnZpZXdzIHdpdGggbW9kZWwgbWV0cmljcy5cIixcbiAgICAgIFwiRG9jdW1lbnRpbmcgcHJvbXB0IGRlc2lnbiBwYXR0ZXJucyBmb3IgbXkgdGVhbS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodDogXCJOb3cgUmVhZGluZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRlYW06IFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBkaXZhclRlYW1QaG90b0Fzc2V0LCBcIk1hc2loIFNhZHJpIHdpdGggdGhlIERpdmFyIHByb2R1Y3QgdGVhbVwiKSxcbiAgY2FwdGlvbjpcbiAgICBcIkRpdmFyIFByb2R1Y3QgRXhwZXJpZW5jZSBUZWFtIOKAlCBjb2xsYWJvcmF0aW5nIGFjcm9zcyByZXNlYXJjaCwgcHJvZHVjdCBkZXNpZ24sIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgdGl0bGU6IFwiTXkgRGl2YXIgUHJvZHVjdCBUZWFtXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlc2UgYXJlIHRoZSB0YWxlbnRlZCBjb2xsZWFndWVzIEknbSBwcm91ZCB0byBjb2xsYWJvcmF0ZSB3aXRoIGF0IERpdmFyLiBUb2dldGhlciwgb3VyIDMyLXBlcnNvbiBwcm9kdWN0IG9yZ2FuaXphdGlvbiBibGVuZHMgZGVzaWduLCByZXNlYXJjaCwgcHJvZHVjdCwgYW5kIGVuZ2luZWVyaW5nIHRvIHNoaXAgZXhwZXJpZW5jZXMgdGhhdCBwcm90ZWN0IGFuZCBlbXBvd2VyIG1pbGxpb25zIG9mIHVzZXJzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbjogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPiA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkRlZ3JlZVwiLFxuICAgIGRhdGU6IFwiMjAxNSDigJMgMjAxOFwiLFxuICAgIHRpdGxlOiBcIkJTYyBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQYXlhbWUgTm9vciBVbml2ZXJzaXR5XCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZVwiLFxuICAgICAgXCJBY3RpdmUgTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IFNjaWVudGlmaWMgU29jaWV0eVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJBc3NvY2lhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJBc3NvY2lhdGUgaW4gTWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIkJ1LUFsaSBTaW5hIFVuaXZlcnNpdHlcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkRpcGxvbWFcIixcbiAgICBkYXRlOiBcIjIwMDlcIixcbiAgICB0aXRsZTogXCJEaXBsb21hIGluIE1hdGhlbWF0aWNzIGFuZCBQaHlzaWNzXCIsXG4gICAgaW5zdGl0dXRpb246IFwiTmF0aW9uYWwgT3JnYW5pemF0aW9uIGZvciBEZXZlbG9wbWVudCBvZiBFeGNlcHRpb25hbCBUYWxlbnRzIChTYW1wYWQpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2VydGlmaWNhdGVzOiBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT4gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZXM6IFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbiBMZWFkIGF0IFNuYXBwRm9vZFwiLFxuICAgIGRhdGU6IFwiSnVseSAzMCwgMjAyMSDigKIgUmVwb3J0ZWQgZGlyZWN0bHkgdG8gTWFzaWhcIixcbiAgICB0ZXh0OiBcIkkgaGFkIHRoZSBwcml2aWxlZ2Ugb2Ygd29ya2luZyBjbG9zZWx5IHdpdGggTWFzaWggZm9yIGEgeWVhci4gU3RhcnRpbmcgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBoaW0gd2FzIHRydWx5IGZvcnR1bmF0ZTsgaGUncyBub3Qgb25seSBlbXBhdGhldGljIHRvd2FyZHMgY29sbGVhZ3VlcyBidXQgYWxzbyBhZGVwdCBhdCBwcmlvcml0aXppbmcgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbCBzdHJlbmd0aHMgYW5kIGFzc2lnbmluZyB0aGVtIGFjY29yZGluZ2x5LiBNYXNpaCBwbGFjZXMgc2lnbmlmaWNhbnQgZW1waGFzaXMgb24gcGVyc29uYWwgZ3Jvd3RoLCBvZmZlcmluZyBwcmFjdGljYWwgcmVzb3VyY2VzIHRhaWxvcmVkIHRvIHRlYW0gbWVtYmVycycgY29tcGV0ZW5jaWVzLiBXb3JraW5nIGFsb25nc2lkZSBoaW0gd2FzIGJvdGggZW5qb3lhYmxlIGFuZCBlbnJpY2hpbmcuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhZWVkLWFib2xnaGFzZW1pL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGkgQXphZGVoXCIsXG4gICAgcm9sZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBhdCBVc2VyVGVzdGluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAzMSwgMjAyMSDigKIgTWFzaWgncyB0ZWFjaGVyXCIsXG4gICAgdGV4dDogXCJNYXNpaCBpcyBvbmUgb2YgbXkgcHJpdmlsZWdlZCBzdHVkZW50cyB3aG8gaXMgZGV0ZXJtaW5lZCB0byBpbXByb3ZlIGhpcyBrbm93bGVkZ2UgYW5kIHNraWxscy4gSGlzIGNvbW1pdG1lbnQgYW5kIHB1bmN0dWFsaXR5IGluIGRlbGl2ZXJpbmcgYXNzaWdubWVudHMgYXJlIGNvbW1lbmRhYmxlLiBJbiBteSBvcGluaW9uLCBoaXMgaW50ZXJlc3QgaW4gbGVhcm5pbmcgaGFzIGJlZW4gb25lIG9mIHRoZSBrZXkgcmVhc29ucyBmb3IgaGlzIHN1Y2Nlc3MuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsaS1hemFkZWgvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICByb2xlOiBcIkRlc2lnbiBMZWFkIGF0IFNldGFyZSBBdmFsIChNQ0kpXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyMSDigKIgSG9zc2VpbiBtYW5hZ2VkIE1hc2loIGRpcmVjdGx5XCIsXG4gICAgdGV4dDogXCJJIGhhdmUga25vd24gTWFzaWggc2luY2UgMjAxOCwgYW5kIGZyb20gdGhlIGJlZ2lubmluZywgaGlzIHBvdGVudGlhbCB0YWxlbnQgd2FzIGV2aWRlbnQsIG1hcmtpbmcgdGhlIHN0YXJ0IG9mIG91ciBjb2xsYWJvcmF0aXZlIGpvdXJuZXkuIEZvciBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIHlvdSBvbmx5IG5lZWQgdG8gZ2l2ZSBNYXNpaCB0aGUgcmF3IGRhdGEgYW5kIGFueSB1bmNlcnRhaW50aWVzLiBXaGlsZSB3b3JraW5nIHRvZ2V0aGVyIG9uIHRoZSBwcm9kdWN0IHRlYW0gYXQgU2V0YXJlIEF2YWwgQ29tcGFueSwgaGlzIGV4cGVydGlzZSB3YXMgY3J1Y2lhbCBpbiBwcm9ibGVtIGRlZmluaXRpb24sIHNvbHV0aW9uIGZpbmRpbmcsIGFuZCBkZXNpZ25pbmcgZmxvd3MuIFRoZSBvdXRjb21lcyBvZiBoaXMgcHJvZmVzc2lvbmFsIGFuZCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBkZXNpZ25zIGhhdmUgYWx3YXlzIGJlZW4gb3V0c3RhbmRpbmcuIEhlIGlzIGEgY29uc3VtbWF0ZSBwcm9mZXNzaW9uYWwsIGFuZCBJIGhpZ2hseSByZWNvbW1lbmQgaGltLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3NzZWlubWFobW91ZHZhbmQvXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgZ2FsbGVyeSwgc3RvcnlIZXJvIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5jb25zdCBoZXJvSW1hZ2UgPSBnYWxsZXJ5WzBdPy5pbWFnZTtcblxuZXhwb3J0IGNvbnN0IG15U3RvcnlTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIlByb2ZpbGVQYWdlXCIsXG4gIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIE15IFN0b3J5XCIsXG4gIGRlc2NyaXB0aW9uOiBzdG9yeUhlcm8uZGVzY3JpcHRpb24sXG4gIHVybDogYCR7c2l0ZVVybH0vbXktc3RvcnlgLFxuICBpbWFnZTogaGVyb0ltYWdlPy5zcmMsXG4gIHByaW1hcnlUb3BpYzoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBzYW1lQXM6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL0BtYXNpaFwiLFxuICAgICAgXCJodHRwczovL21hc2loLmZyYW1lci53ZWJzaXRlL1wiLFxuICAgIF0sXG4gIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgbXlTdG9yeVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNeSBTdG9yeSDigJQgTWFzaWggU2FkcmnigJlzIHBhdGggYXMgYSBwcm9kdWN0IGRlc2lnbmVyXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiTGVhcm4gaG93IE1hc2loIFNhZHJpIGJsZW5kcyBtZW50b3JzaGlwLCBleHBlcmltZW50YXRpb24sIGFuZCBjcmFmdCB0byBkZXNpZ24gaHVtYW4gZXhwZXJpZW5jZXPigJRmcm9tIGNsYXNzcm9vbSB0byBwcm9kdWN0IGxhdW5jaGVzLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9teS1zdG9yeVwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcInByb2ZpbGVcIixcbiAgICBpbWFnZTogaGVyb0ltYWdlXG4gICAgICA/IHtcbiAgICAgICAgICB1cmw6IGhlcm9JbWFnZS5zcmMsXG4gICAgICAgICAgYWx0OiBoZXJvSW1hZ2UuYWx0LFxuICAgICAgICAgIHdpZHRoOiBoZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgICAgICBoZWlnaHQ6IGhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IG15U3RvcnlTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IENlcnRpZmljYXRlc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DZXJ0aWZpY2F0ZXNTZWN0aW9uXCI7XG5pbXBvcnQgRWR1Y2F0aW9uU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0VkdWNhdGlvblNlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgUGhpbG9zb3BoeVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QaGlsb3NvcGh5U2VjdGlvblwiO1xuaW1wb3J0IFBob3RvR2FsbGVyeVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uXCI7XG5pbXBvcnQgUmVhZGluZ0pvdXJuZXlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVhZGluZ0pvdXJuZXlTZWN0aW9uXCI7XG5pbXBvcnQgUmVmZXJlbmNlc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9SZWZlcmVuY2VzU2VjdGlvblwiO1xuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvVGVhbVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGJvb2tzLFxuICBjZXJ0aWZpY2F0ZXMsXG4gIGVkdWNhdGlvbixcbiAgZW1vamlMaXN0LFxuICBnYWxsZXJ5LFxuICBwaGlsb3NvcGh5VGV4dCxcbiAgcmVhZGluZ0pvdXJuZXksXG4gIHJlZmVyZW5jZXMsXG4gIHN0b3J5SGVybyxcbiAgdGVhbSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyBteVN0b3J5UGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5cbmNvbnN0IE15U3RvcnlQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5teVN0b3J5UGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17c3RvcnlIZXJvfSAvPlxuICAgICAgPFBob3RvR2FsbGVyeVNlY3Rpb24gaXRlbXM9e2dhbGxlcnl9IC8+XG4gICAgICA8UGhpbG9zb3BoeVNlY3Rpb24gcGhpbG9zb3BoeVRleHQ9e3BoaWxvc29waHlUZXh0fSBlbW9qaUxpc3Q9e2Vtb2ppTGlzdH0gLz5cbiAgICAgIDxSZWFkaW5nSm91cm5leVNlY3Rpb24gam91cm5leT17cmVhZGluZ0pvdXJuZXl9IGJvb2tzPXtib29rc30gLz5cbiAgICAgIDxUZWFtU2VjdGlvbiB0ZWFtPXt0ZWFtfSAvPlxuICAgICAgPEVkdWNhdGlvblNlY3Rpb24gaXRlbXM9e2VkdWNhdGlvbn0gLz5cbiAgICAgIDxDZXJ0aWZpY2F0ZXNTZWN0aW9uIGNlcnRpZmljYXRlcz17Y2VydGlmaWNhdGVzfSAvPlxuICAgICAgPFJlZmVyZW5jZXNTZWN0aW9uIHJlZmVyZW5jZXM9e3JlZmVyZW5jZXN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xu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QSxJQUNOLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLEVBQ1o7QUFDRjs7O0FDclBBLElBQU0sVUFBVSxhQUFXO0FBQzNCLElBQU0sWUFBWSxRQUFRLElBQUk7QUFFdkIsSUFBTSx3QkFBd0M7QUFBQSxFQUNuRCxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixhQUFhLFVBQVU7QUFBQSxFQUN2QixLQUFLLEdBQUc7QUFBQSxFQUNSLE9BQU8sV0FBVztBQUFBLEVBQ2xCLGNBQWM7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxzQkFBb0M7QUFBQSxFQUMvQyxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixPQUFPLFlBQ0g7QUFBQSxNQUNFLEtBQUssVUFBVTtBQUFBLE1BQ2YsS0FBSyxVQUFVO0FBQUEsTUFDZixPQUFPLFVBQVUsU0FBUztBQUFBLE1BQzFCLFFBQVEsVUFBVSxVQUFVO0FBQUEsSUFDOUIsSUFDQTtBQUFBLEVBQ047QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjs7OztBQ3BCQSxJQUFNLGNBQWMsTUFBTTtBQUFBLEVBQ3hCLHVCQUNFO0FBQUEsY0FXRTtBQUFBLHNCQVZBLHlCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBOEI7QUFBQSxzQkFFOUIseUJBQUMscUJBQUQ7QUFBQSxRQUFhLE1BQU07QUFBQSxTQUFuQixpQ0FBOEI7QUFBQSxzQkFDOUIseUJBQUMsNkJBQUQ7QUFBQSxRQUFxQixPQUFPO0FBQUEsU0FBNUIsaUNBQXFDO0FBQUEsc0JBQ3JDLHlCQUFDLDJCQUFEO0FBQUEsUUFBbUI7QUFBQSxRQUFnQztBQUFBLFNBQW5ELGlDQUF5RTtBQUFBLHNCQUN6RSx5QkFBQywrQkFBRDtBQUFBLFFBQXVCLFNBQVM7QUFBQSxRQUFnQjtBQUFBLFNBQWhELGlDQUE4RDtBQUFBLHNCQUM5RCx5QkFBQyxxQkFBRDtBQUFBLFFBQWE7QUFBQSxTQUFiLGlDQUF5QjtBQUFBLHNCQUN6Qix5QkFBQywwQkFBRDtBQUFBLFFBQWtCLE9BQU87QUFBQSxTQUF6QixpQ0FBb0M7QUFBQSxzQkFDcEMseUJBQUMsNkJBQUQ7QUFBQSxRQUFxQjtBQUFBLFNBQXJCLGlDQUFpRDtBQUFBLHNCQUNqRCx5QkFBQywyQkFBRDtBQUFBLFFBQW1CO0FBQUEsU0FBbkIsaUNBQTJDO0FBQUE7QUFBQSxLQVY3QyxnQ0FXRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIkVFQjFBMUQxRjY3NjhDQTI2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
