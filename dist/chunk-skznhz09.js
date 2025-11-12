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
} from "./chunk-fvvawq8m.js";
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
            children: "My Life in Frames"
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
var emojiList = ["☕️", "\uD83E\uDDD7\uD83C\uDFFD", "\uD83D\uDCBB", "\uD83D\uDCDA", "\uD83C\uDFA8", "\uD83E\uDEB5"];
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

//# debugId=2CA17387AB035A6B64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TdXJmYWNlQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1NjaG9vbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1BoaWxvc29waHlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9SZWFkaW5nSm91cm5leVNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1JlZmVyZW5jZXNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9UZWFtU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3Rvcnkvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9NeVN0b3J5UGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDVoLTJWNGMwLS41NS0uNDUtMS0xLTFIOGMtLjU1IDAtMSAuNDUtMSAxdjFINWMtMS4xIDAtMiAuOS0yIDJ2MWMwIDIuNTUgMS45MiA0LjYzIDQuMzkgNC45NC42MyAxLjUgMS45OCAyLjYzIDMuNjEgMi45NlYxOUg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDhjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTN2LTMuMWMxLjYzLS4zMyAyLjk4LTEuNDYgMy42MS0yLjk2QzE5LjA4IDEyLjYzIDIxIDEwLjU1IDIxIDhWN2MwLTEuMS0uOS0yLTItMk01IDhWN2gydjMuODJDNS44NCAxMC40IDUgOS4zIDUgOG0xNCAwYzAgMS4zLS44NCAyLjQtMiAyLjgyVjdoMnpcIlxufSksICdFbW9qaUV2ZW50c1JvdW5kZWQnKTsiLAogICAgImltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgU2VjdGlvbkhlYWRlclByb3BzID0ge1xuICBleWVicm93Pzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgYWxpZ24/OiBcImNlbnRlclwiIHwgXCJsZWZ0XCI7XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHtcbiAgZXllYnJvdyxcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBpY29uLFxuICBhbGlnbiA9IFwiY2VudGVyXCIsXG59OiBTZWN0aW9uSGVhZGVyUHJvcHMpID0+IChcbiAgPFN0YWNrXG4gICAgc3BhY2luZz17MS41fVxuICAgIGFsaWduSXRlbXM9e2FsaWduID09PSBcImNlbnRlclwiID8gXCJjZW50ZXJcIiA6IFwiZmxleC1zdGFydFwifVxuICAgIHRleHRBbGlnbj17YWxpZ259XG4gID5cbiAgICB7KGljb24gfHwgZXllYnJvdykgJiYgKFxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAge2ljb259XG4gICAgICAgIHtleWVicm93ICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGFnXCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKX1cbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgIHtzdWJ0aXRsZSAmJiAoXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IG1heFdpZHRoOiBhbGlnbiA9PT0gXCJjZW50ZXJcIiA/IDcyMCA6IDY0MCwgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICB7c3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgKX1cbiAgPC9TdGFjaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkZXI7XG5cblxuIiwKICAgICJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FyZFByb3BzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuXG5jb25zdCBTdXJmYWNlQ2FyZCA9ICh7IHN4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfTogQ2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9e3tcbiAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgLi4uc3gsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQ2FyZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN1cmZhY2VDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEVtb2ppRXZlbnRzUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1vamlFdmVudHNSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VydGlmaWNhdGVJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzID0ge1xuICBjZXJ0aWZpY2F0ZXM6IFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGVJdGVtPjtcbn07XG5cbmNvbnN0IENlcnRpZmljYXRlc1NlY3Rpb24gPSAoeyBjZXJ0aWZpY2F0ZXMgfTogQ2VydGlmaWNhdGVzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBleWVicm93PVwiQ29udGludW91cyBMZWFybmluZ1wiXG4gICAgICAgICAgdGl0bGU9XCJDZXJ0aWZpY2F0ZXMgJiBUcmFpbmluZ1wiXG4gICAgICAgICAgaWNvbj17PEVtb2ppRXZlbnRzUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge2NlcnRpZmljYXRlcy5tYXAoKGNlcnRpZmljYXRlKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtgJHtjZXJ0aWZpY2F0ZS50aXRsZX0tJHtjZXJ0aWZpY2F0ZS5kYXRlfWB9PlxuICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17Y2VydGlmaWNhdGUuYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntjZXJ0aWZpY2F0ZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtbY2VydGlmaWNhdGUuaG91cnMsIGNlcnRpZmljYXRlLnNjb3JlLCBjZXJ0aWZpY2F0ZS50b3BpY3NdXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkga2V5PXtkZXRhaWx9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUgMTMuMTh2Mi44MWMwIC43My40IDEuNDEgMS4wNCAxLjc2bDUgMi43M2MuNi4zMyAxLjMyLjMzIDEuOTIgMGw1LTIuNzNjLjY0LS4zNSAxLjA0LTEuMDMgMS4wNC0xLjc2di0yLjgxbC02LjA0IDMuM2MtLjYuMzMtMS4zMi4zMy0xLjkyIDB6bTYuMDQtOS42Ni04LjQzIDQuNmMtLjY5LjM4LS42OSAxLjM4IDAgMS43Nmw4LjQzIDQuNmMuNi4zMyAxLjMyLjMzIDEuOTIgMEwyMSAxMC4wOVYxNmMwIC41NS40NSAxIDEgMXMxLS40NSAxLTFWOS41OWMwLS4zNy0uMi0uNy0uNTItLjg4bC05LjUyLTUuMTlhMi4wNCAyLjA0IDAgMCAwLTEuOTIgMFwiXG59KSwgJ1NjaG9vbFJvdW5kZWQnKTsiLAogICAgImltcG9ydCBTY2hvb2xSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TY2hvb2xSb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgRWR1Y2F0aW9uSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEVkdWNhdGlvblNlY3Rpb25Qcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8RWR1Y2F0aW9uSXRlbT47XG59O1xuXG5jb25zdCBFZHVjYXRpb25TZWN0aW9uID0gKHsgaXRlbXMgfTogRWR1Y2F0aW9uU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIGV5ZWJyb3c9XCJFZHVjYXRpb25cIlxuICAgICAgICAgIHRpdGxlPVwiQWNhZGVtaWMgRm91bmRhdGlvbnNcIlxuICAgICAgICAgIGljb249ezxTY2hvb2xSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17YCR7aXRlbS50aXRsZX0tJHtpdGVtLmluc3RpdHV0aW9ufWB9PlxuICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17aXRlbS5iYWRnZX0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17ZGV0YWlsfSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb25TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgU3RvcnlIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogU3RvcnlIZXJvO1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cImhlYWRlclwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNilcIiA6IFwicmdiYSg4LCAxNCwgMjYsIDAuODUpXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IDg0MCxcbiAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImxlZnRcIiwgbWQ6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIFBoaWxvc29waHlTZWN0aW9uUHJvcHMgPSB7XG4gIHBoaWxvc29waHlUZXh0OiBzdHJpbmc7XG4gIGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG5jb25zdCBQaGlsb3NvcGh5U2VjdGlvbiA9ICh7IHBoaWxvc29waHlUZXh0LCBlbW9qaUxpc3QgfTogUGhpbG9zb3BoeVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDggfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BoaWxvc29waHlUZXh0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICAgICAgICAgICAgcGw6IDIsXG4gICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICBJIGFtIGRyaXZlbiBieSBleHBlcmllbmNlc+KAlGRlc2lnbmluZyB0aGVtLCBsZWFybmluZyBmcm9tIHRoZW0sIGFuZCBsaXZpbmcgdGhlbVxuICAgICAgICAgICAgICAgICAgZGVlcGx5LlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgTXkgZnJpZW5kcyBvZnRlbiBkZXNjcmliZSBtZSBhcyBzb21lb25lIHdpdGggbGF5ZXJz4oCUY3VyaW9zaXR5IGtlZXBzIG1lIGV4cGxvcmluZ1xuICAgICAgICAgICAgICAgIG5ldyBjcmFmdHMsIGNvbW11bml0aWVzLCBhbmQgY2hhbGxlbmdlcy4gSXTigJlzIGhvdyBJIHN0YXkgZ3JvdW5kZWQgYW5kIGluc3BpcmVkLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17My41fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0OHB4XCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC43KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuNylcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgVGhlc2Ugc21hbGwgcml0dWFscyBzaGFwZSB0aGUgd2F5IEkgZGVzaWduIGFuZCBjb2xsYWJvcmF0ZTpcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICBGcm9tIG11c2ljIGFuZCBjZXJhbWljcyB0byBwbGFudHMsIGNvb2tpbmcsIGFuZCBjb2xsYWJvcmF0aXZlIGdhbWVz4oCUSeKAmW0gbW9zdFxuICAgICAgICAgICAgICAgICAgYWxpdmUgd2hlbiBJ4oCZbSBidWlsZGluZyB3aXRoIG90aGVycy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIHVzZUZsZXhHYXBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyB4czogXCJmbGV4LXN0YXJ0XCIsIG1kOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Vtb2ppTGlzdC5tYXAoKGVtb2ppKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogNTYsIHNtOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IHhzOiBcImF1dG9cIiwgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlbW9qaX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBoaWxvc29waHlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgR2FsbGVyeUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBQaG90b0dhbGxlcnlTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPjtcbn07XG5cbmNvbnN0IFBob3RvR2FsbGVyeVNlY3Rpb24gPSAoeyBpdGVtcyB9OiBQaG90b0dhbGxlcnlTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXt7XG4gICAgICBwdDogeyB4czogMiwgbWQ6IDQgfSxcbiAgICAgIHBiOiB7IHhzOiA4LCBtZDogMTIgfSxcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IG1heFdpZHRoOiA3MjAgfX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBQaG90byBTdHJpcFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPk15IExpZmUgaW4gRnJhbWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgQSBnbGltcHNlIGludG8gdGhlIHRleHR1cmVzLCBwZW9wbGUsIGFuZCBzY2VuZXMgdGhhdCBzaGFwZSBob3cgSSBhcHByb2FjaCBwcm9kdWN0XG4gICAgICAgICAgZGVzaWdu4oCUdW5maWx0ZXJlZCwgYSBsaXR0bGUgaW1wZXJmZWN0LCBhbmQgdmVyeSBhbGl2ZS5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Q29udGFpbmVyIGRpc2FibGVHdXR0ZXJzIG1heFdpZHRoPXtmYWxzZX0gc3g9e3sgbXQ6IHsgeHM6IDQsIG1kOiA2IH0gfX0+XG4gICAgICA8Qm94IHN4PXt7IHB4OiB7IHhzOiAyLCBzbTogNCwgbWQ6IDYgfSB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2x1bW5Db3VudDogeyB4czogMiwgc206IDMsIG1kOiA1IH0sXG4gICAgICAgICAgICBjb2x1bW5HYXA6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17YCR7aXRlbS5jYXB0aW9ufS0ke2l0ZW0uaW1hZ2Uuc3JjfWB9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYnJlYWtJbnNpZGU6IFwiYXZvaWRcIixcbiAgICAgICAgICAgICAgICBtYjogeyB4czogMS41LCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvR2FsbGVyeVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IEJvb2ssIFJlYWRpbmdKb3VybmV5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUmVhZGluZ0pvdXJuZXlTZWN0aW9uUHJvcHMgPSB7XG4gIGpvdXJuZXk6IFJlYWRpbmdKb3VybmV5O1xuICBib29rczogUmVhZG9ubHlBcnJheTxCb29rPjtcbn07XG5cbmNvbnN0IFJlYWRpbmdKb3VybmV5U2VjdGlvbiA9ICh7IGpvdXJuZXksIGJvb2tzIH06IFJlYWRpbmdKb3VybmV5U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgZXllYnJvdz1cIlJlYWRpbmcgSm91cm5leVwiXG4gICAgICAgICAgICB0aXRsZT17am91cm5leS50aXRsZX1cbiAgICAgICAgICAgIHN1YnRpdGxlPXtqb3VybmV5LnN1YnRpdGxlfVxuICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtib29rLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmRcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Ym9vay5jb3Zlci5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Ym9vay5jb3Zlci5hbHR9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBnYXA6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57Ym9vay50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay50YWtlYXdheXMubWFwKCh0YWtlYXdheSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e3Rha2Vhd2F5fSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWtlYXdheX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suaGlnaGxpZ2h0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Jvb2suaGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWRpbmdKb3VybmV5U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1ZvbHVudGVlckFjdGl2aXNtUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgR2hvc3RCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgUmVmZXJlbmNlSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlZmVyZW5jZXNTZWN0aW9uUHJvcHMgPSB7XG4gIHJlZmVyZW5jZXM6IFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT47XG59O1xuXG5jb25zdCBSZWZlcmVuY2VzU2VjdGlvbiA9ICh7IHJlZmVyZW5jZXMgfTogUmVmZXJlbmNlc1NlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTGlnaHQgPSB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIjtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgZXllYnJvdz1cIlJlZmVyZW5jZXNcIlxuICAgICAgICAgICAgdGl0bGU9XCJXaGF0IE15IFBhcnRuZXJzIFNheVwiXG4gICAgICAgICAgICBpY29uPXs8Vm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fVxuICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgIHtyZWZlcmVuY2VzLm1hcCgocmVmZXJlbmNlKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e3JlZmVyZW5jZS5uYW1lfT5cbiAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAyLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntyZWZlcmVuY2UubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2Uucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2UudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyZWZlcmVuY2UubGlua2VkaW59XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGlzTGlnaHQgPyBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMjIpXCIgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4zNSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0xpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBpc0xpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTcsIDc2LCAxNzAsIDAuNDIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjU1KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMDgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE2KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBvbiBMaW5rZWRJblxuICAgICAgICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZXNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFRlYW1TbmFwc2hvdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFRlYW1TZWN0aW9uUHJvcHMgPSB7XG4gIHRlYW06IFRlYW1TbmFwc2hvdDtcbn07XG5cbmNvbnN0IFRlYW1TZWN0aW9uID0gKHsgdGVhbSB9OiBUZWFtU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgc3g9e3tcbiAgICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgZGlzYWJsZUd1dHRlcnMgbWF4V2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHsgbWQ6IFwiMS4xNWZyIDAuODVmclwiIH0sXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IDM2MCwgc206IDQyMCwgbWQ6IDUyMCB9LFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICBzcmM9e3RlYW0uaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICBhbHQ9e3RlYW0uaW1hZ2UuYWx0fVxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogeyB4czogMTYsIG1kOiAyNCB9LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IDE2LCBtZDogMzIgfSxcbiAgICAgICAgICAgICAgICBweDogMixcbiAgICAgICAgICAgICAgICBweTogMC43NSxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMucGlsbCxcbiAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEycHgpXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcyKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGVhbS5jYXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBzbTogNiwgbWQ6IDggfSxcbiAgICAgICAgICAgICAgcHk6IHsgeHM6IDUsIG1kOiAwIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fSBzeD17eyBtYXhXaWR0aDogNTIwIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgQ29sbGFib3JhdG9yc1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0ZWFtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuOCB9fT5cbiAgICAgICAgICAgICAgICB7dGVhbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnNlY29uZGFyeX1gLFxuICAgICAgICAgICAgICAgICAgcGw6IDMsXG4gICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICDigJxEZXNpZ25pbmcgd2l0aCBwZW9wbGUgSSB0cnVzdCBrZWVwcyB0aGUgd29yayBodW1ibGUsIGFtYml0aW91cywgYW5kIGpveWZ1bC7igJ1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IGNyZWF0aXZlQ29uZmlkZW5jZUNvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9jcmVhdGl2ZS1jb25maWRlbmNlLmpwZ1wiO1xuaW1wb3J0IGRlc2lnbk9mRXZlcnlkYXlUaGluZ3NDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3MvZGVzaWduLW9mLWV2ZXJ5ZGF5LXRoaW5ncy5qcGdcIjtcbmltcG9ydCBzcHJpbnRDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3Mvc3ByaW50LmpwZ1wiO1xuaW1wb3J0IGFpQW5kVXhDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3MvYWktYW5kLXV4LmpwZ1wiO1xuaW1wb3J0IGRpdmFyVGVhbVBob3RvQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9kaXZhci10ZWFtLmpwZ1wiO1xuaW1wb3J0IG1hc2loQ2hpbGRQaG90b0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtY2hpbGQtcGhvdG8ucG5nXCI7XG5pbXBvcnQgbWFzaWhDb2ZmZWVBcnRpc3RBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLWNvZmZlZS1hcnRpc3QucG5nXCI7XG5pbXBvcnQgbWFzaWhNb3VudGFpbmVlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtbW91bnRhaW5lZXIucG5nXCI7XG5pbXBvcnQgbWFzaWhVeERlc2lnbmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC11eC1kZXNpZ25lci5wbmdcIjtcbmltcG9ydCBtYXNpaFdvb2RDYXJ2ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXdvb2QtY2FydmVyLnBuZ1wiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIEJvb2ssXG4gIENlcnRpZmljYXRlSXRlbSxcbiAgRWR1Y2F0aW9uSXRlbSxcbiAgR2FsbGVyeUl0ZW0sXG4gIFJlYWRpbmdKb3VybmV5LFxuICBSZWZlcmVuY2VJdGVtLFxuICBTdG9yeUhlcm8sXG4gIFRlYW1TbmFwc2hvdCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yeUhlcm86IFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IFwiSSBhbSBNYXNpaFwiLFxuICBzdWJ0aXRsZTogXCJBIENyZWF0b3Igb2YgTWVhbmluZ2Z1bCBFeHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIk91dHNpZGUgb2YgZGVzaWduLCBJIGVuam95IGV4cGxvcmluZyBjaGFsbGVuZ2VzIGFuZCBsZWFybmluZyB0aHJvdWdoIGV4cGVyaWVuY2VzIGxpa2UgbW91bnRhaW5lZXJpbmcsIHdvb2QgY2FydmluZywgYW5kIHRlYWNoaW5nLiBUaGVzZSBwdXJzdWl0cyBoYXZlIHRhdWdodCBtZSBwYXRpZW5jZSwgcmVzaWxpZW5jZSwgYW5kIGVtcGF0aHksIHdoaWNoIEkgYnJpbmcgaW50byBteSB3b3JrIHRvIGNyYWZ0IG1lYW5pbmdmdWwgYW5kIHRob3VnaHRmdWwgZGVzaWducy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5OiBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPiA9IFtcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgbWFzaWhDaGlsZFBob3RvQXNzZXQsXG4gICAgICBcIk1hc2loIGFzIGEgY2hpbGQgaW4gaGlzIGRhZCdzIGphY2tldFwiLFxuICAgICksXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIENoaWxkIGluIE15IERhZCdzIEphY2tldFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYXNpaE1vdW50YWluZWVyQXNzZXQsIFwiTWFzaWggYXMgYSBtb3VudGFpbmVlclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgTW91bnRhaW5lZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhDb2ZmZWVBcnRpc3RBc3NldCwgXCJNYXNpaCdzIGxhdHRlIGFydFwiKSxcbiAgICBjYXB0aW9uOiBcIk15IGFydCBvbiBhIExhdHRlXCIsXG4gICAgc3ViY2FwdGlvbjogXCJMYXR0ZSBBcnQgYnkgbWUgOilcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhVeERlc2lnbmVyQXNzZXQsIFwiTWFzaWggYXMgYSBVWCBEZXNpZ25lclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgVVggRGVzaWduZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhXb29kQ2FydmVyQXNzZXQsIFwiTWFzaWggYXMgYSB3b29kIGNhcnZlclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgV29vZCBDYXJ2ZXJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwaGlsb3NvcGh5VGV4dCA9XG4gIFwiSSBkZXNpZ24gZXhwZXJpZW5jZXMgdGhhdCBub3Qgb25seSBzb2x2ZSBwcm9ibGVtcyBidXQgY3JlYXRlIHZhbHVlIGZvciBib3RoIGJ1c2luZXNzZXMgYW5kIHVzZXJzLiBJIGVuam95IGRpZ2dpbmcgZGVlcCBpbnRvIGNoYWxsZW5nZXMsIGFuYWx5emluZyB0aGVtIHRob3JvdWdobHksIGFuZCBjb21pbmcgdXAgd2l0aCBzb2x1dGlvbnMgdGhhdCB0cnVseSBtYWtlIGEgZGlmZmVyZW5jZS5cIjtcblxuZXhwb3J0IGNvbnN0IGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW10gPSBbXCLimJXvuI9cIiwgXCLwn6eX8J+PvVwiLCBcIvCfkrtcIiwgXCLwn5OaXCIsIFwi8J+OqFwiLCBcIvCfqrVcIl07XG5cbmV4cG9ydCBjb25zdCByZWFkaW5nSm91cm5leTogUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBcIkRlc2lnbiBCb29rcyBHdWlkaW5nIE15IENyYWZ0XCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiSW5zcGlyZWQgYnkgdGhlIGxpdmluZyBib29rc2hlbHZlcyBzaGFyZWQgYnkgcGVlcnMgbGlrZSBLeWxlIEpvaG5zdG9uLCBTYXd5ZXIgSG9sbGVuc2hlYWQsIEphc29uIFpvb2ssIGFuZCBBbXkgTWNMYXkgUGF0ZXJzb24sIEkga2VlcCBhIGN1cmF0ZWQgcmVjb3JkIG9mIHRoZSBpZGVhcyB0aGF0IHNoYXBlIG15IHByYWN0aWNlLlwiLFxuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IFwiQ3VycmVudGx5IHJlYWRpbmdcIixcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29rczogUmVhZG9ubHlBcnJheTxCb29rPiA9IFtcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQsXG4gICAgICBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzIGJvb2sgY292ZXJcIixcbiAgICApLFxuICAgIHRpdGxlOiBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzXCIsXG4gICAgYXV0aG9yOiBcIkRvbiBOb3JtYW5cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMTggwrcgUmV2aXNpdGVkIDIwMjRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJOb3JtYW7igJlzIGZyYW1ld29yayBmb3IgYWZmb3JkYW5jZXMgYW5kIGZlZWRiYWNrIGhlbHBlZCBtZSBidWlsZCByZXNpbGllbmNlIGFnYWluc3QgYmlhcyB3aGVuIHRlc3Rpbmcgc2FmZXR5LWNyaXRpY2FsIGZsb3dzLCBlc3BlY2lhbGx5IHdoZW4gd2UgcmVkZXNpZ25lZCB2b2ljZSBtYXNraW5nIGZvciBEaXZhci5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiUmVpbmZvcmNlZCBteSBoYWJpdCBvZiBwcm90b3R5cGluZyBlcnJvciBzdGF0ZXMgZmlyc3QuXCIsXG4gICAgICBcIkluZmx1ZW5jZWQgbXkgaGV1cmlzdGljcyBjaGVja2xpc3QgZm9yIGFjY2Vzc2liaWxpdHkgcmV2aWV3cy5cIixcbiAgICAgIFwiVGF1Z2h0IG1lIHRvIG5hcnJhdGUg4oCcdXNlciBnb2Fsc+KAnSBpbiBldmVyeSBkZXNpZ24gY3JpdGlxdWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgc3ByaW50Q292ZXJBc3NldCwgXCJTcHJpbnQgYm9vayBjb3ZlclwiKSxcbiAgICB0aXRsZTogXCJTcHJpbnRcIixcbiAgICBhdXRob3I6IFwiSmFrZSBLbmFwcCAmIHRoZSBHViBEZXNpZ24gVGVhbVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJvcnJvd2luZyB0aGUgc3ByaW50IHJoeXRobSBoZWxwZWQgbWUgY29hY2ggcHJvZHVjdCBzcXVhZHMgdG93YXJkIGRlY2lzaW9uIGNsYXJpdHkuIFdlIHByb3RvdHlwZWQgYW5kIGxhdW5jaGVkIGEgbG95YWx0eSBwcm9ncmFtIGF0IFNldGFyZSBBdmFsIHVzaW5nIGEgNC1kYXkgdmFyaWF0aW9uIG9mIHRoaXMgcGxheWJvb2suXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkFkb3B0ZWQgbGlnaHRuaW5nIHRhbGtzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBmYXN0LlwiLFxuICAgICAgXCJNYWRlIOKAnEhvdyBtaWdodCB3ZeKAnSBzeW50aGVzaXMgYSBzdGFwbGUgaW4gbXkgd29ya3Nob3BzLlwiLFxuICAgICAgXCJJbXByb3ZlZCByZW1vdGUgZmFjaWxpdGF0aW9uIHVzaW5nIHN0cnVjdHVyZWQgdm90aW5nIHJpdHVhbHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCxcbiAgICAgIFwiQ3JlYXRpdmUgQ29uZmlkZW5jZSBib29rIGNvdmVyXCIsXG4gICAgKSxcbiAgICB0aXRsZTogXCJDcmVhdGl2ZSBDb25maWRlbmNlXCIsXG4gICAgYXV0aG9yOiBcIlRvbSAmIERhdmlkIEtlbGxleVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgYm9vayByZWZyYW1lZCBob3cgSSBtZW50b3IgbmV3IGRlc2lnbmVyc+KAlHNoaWZ0aW5nIGNyaXRpcXVlcyBmcm9tIHNvbHV0aW9uIGp1ZGdtZW50IHRvIGNhcGFiaWxpdHkgYnVpbGRpbmcgYW5kIHBzeWNob2xvZ2ljYWwgc2FmZXR5LlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIOKAnGNvbmZpZGVuY2UgbWFwcGluZ+KAnSBpbiBteSBtZW50b3JzaGlwIHNlc3Npb25zLlwiLFxuICAgICAgXCJEcm92ZSBtZSB0byBkZXNpZ24gcHJvamVjdC1iYXNlZCBjdXJyaWN1bGEgYXQgUmFobmVtYSBDb2xsZWdlLlwiLFxuICAgICAgXCJFbmNvdXJhZ2VkIHN0b3J5dGVsbGluZyByaXR1YWxzIHRvIGNlbGVicmF0ZSBpbmNyZW1lbnRhbCB3aW5zLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIGFpQW5kVXhDb3ZlckFzc2V0LFxuICAgICAgXCJBSSBhbmQgVVggYm9vayBjb3ZlclwiLFxuICAgICksXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gICAgYXV0aG9yOiBcIlBhbWVsYSBQYXZsaXNjYWtcIixcbiAgICBsYWJlbDogXCJJbiBwcm9ncmVzcyDCtyBRNCAyMDI1XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSeKAmW0gZXhwbG9yaW5nIGhvdyBodW1hbi1jZW50ZXJlZCBtZXRob2RzIGV2b2x2ZSB3aGVuIG1vZGVscyBtYWtlIHByb2JhYmlsaXN0aWMgZGVjaXNpb25z4oCUaW5mb3JtaW5nIHRoZSBndWFyZHJhaWxzIEkgY3JhZnQgZm9yIEFJLWF1Z21lbnRlZCBzb2x1dGlvbnMuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkJ1aWxkaW5nIGFuIGV0aGljYWwgY2hlY2tsaXN0IGZvciBBSSBleHBlcmltZW50cy5cIixcbiAgICAgIFwiUGFpcmluZyBxdWFsaXRhdGl2ZSBpbnRlcnZpZXdzIHdpdGggbW9kZWwgbWV0cmljcy5cIixcbiAgICAgIFwiRG9jdW1lbnRpbmcgcHJvbXB0IGRlc2lnbiBwYXR0ZXJucyBmb3IgbXkgdGVhbS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodDogXCJOb3cgUmVhZGluZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRlYW06IFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBkaXZhclRlYW1QaG90b0Fzc2V0LCBcIk1hc2loIFNhZHJpIHdpdGggdGhlIERpdmFyIHByb2R1Y3QgdGVhbVwiKSxcbiAgY2FwdGlvbjpcbiAgICBcIkRpdmFyIFByb2R1Y3QgRXhwZXJpZW5jZSBUZWFtIOKAlCBjb2xsYWJvcmF0aW5nIGFjcm9zcyByZXNlYXJjaCwgcHJvZHVjdCBkZXNpZ24sIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgdGl0bGU6IFwiTXkgRGl2YXIgUHJvZHVjdCBUZWFtXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlc2UgYXJlIHRoZSB0YWxlbnRlZCBjb2xsZWFndWVzIEknbSBwcm91ZCB0byBjb2xsYWJvcmF0ZSB3aXRoIGF0IERpdmFyLiBUb2dldGhlciwgb3VyIDMyLXBlcnNvbiBwcm9kdWN0IG9yZ2FuaXphdGlvbiBibGVuZHMgZGVzaWduLCByZXNlYXJjaCwgcHJvZHVjdCwgYW5kIGVuZ2luZWVyaW5nIHRvIHNoaXAgZXhwZXJpZW5jZXMgdGhhdCBwcm90ZWN0IGFuZCBlbXBvd2VyIG1pbGxpb25zIG9mIHVzZXJzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbjogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPiA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkRlZ3JlZVwiLFxuICAgIGRhdGU6IFwiMjAxNSDigJMgMjAxOFwiLFxuICAgIHRpdGxlOiBcIkJTYyBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQYXlhbWUgTm9vciBVbml2ZXJzaXR5XCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZVwiLFxuICAgICAgXCJBY3RpdmUgTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IFNjaWVudGlmaWMgU29jaWV0eVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJBc3NvY2lhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJBc3NvY2lhdGUgaW4gTWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIkJ1LUFsaSBTaW5hIFVuaXZlcnNpdHlcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkRpcGxvbWFcIixcbiAgICBkYXRlOiBcIjIwMDlcIixcbiAgICB0aXRsZTogXCJEaXBsb21hIGluIE1hdGhlbWF0aWNzIGFuZCBQaHlzaWNzXCIsXG4gICAgaW5zdGl0dXRpb246IFwiTmF0aW9uYWwgT3JnYW5pemF0aW9uIGZvciBEZXZlbG9wbWVudCBvZiBFeGNlcHRpb25hbCBUYWxlbnRzIChTYW1wYWQpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2VydGlmaWNhdGVzOiBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT4gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZXM6IFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbiBMZWFkIGF0IFNuYXBwRm9vZFwiLFxuICAgIGRhdGU6IFwiSnVseSAzMCwgMjAyMSDigKIgUmVwb3J0ZWQgZGlyZWN0bHkgdG8gTWFzaWhcIixcbiAgICB0ZXh0OiBcIkkgaGFkIHRoZSBwcml2aWxlZ2Ugb2Ygd29ya2luZyBjbG9zZWx5IHdpdGggTWFzaWggZm9yIGEgeWVhci4gU3RhcnRpbmcgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBoaW0gd2FzIHRydWx5IGZvcnR1bmF0ZTsgaGUncyBub3Qgb25seSBlbXBhdGhldGljIHRvd2FyZHMgY29sbGVhZ3VlcyBidXQgYWxzbyBhZGVwdCBhdCBwcmlvcml0aXppbmcgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbCBzdHJlbmd0aHMgYW5kIGFzc2lnbmluZyB0aGVtIGFjY29yZGluZ2x5LiBNYXNpaCBwbGFjZXMgc2lnbmlmaWNhbnQgZW1waGFzaXMgb24gcGVyc29uYWwgZ3Jvd3RoLCBvZmZlcmluZyBwcmFjdGljYWwgcmVzb3VyY2VzIHRhaWxvcmVkIHRvIHRlYW0gbWVtYmVycycgY29tcGV0ZW5jaWVzLiBXb3JraW5nIGFsb25nc2lkZSBoaW0gd2FzIGJvdGggZW5qb3lhYmxlIGFuZCBlbnJpY2hpbmcuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhZWVkLWFib2xnaGFzZW1pL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGkgQXphZGVoXCIsXG4gICAgcm9sZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBhdCBVc2VyVGVzdGluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAzMSwgMjAyMSDigKIgTWFzaWgncyB0ZWFjaGVyXCIsXG4gICAgdGV4dDogXCJNYXNpaCBpcyBvbmUgb2YgbXkgcHJpdmlsZWdlZCBzdHVkZW50cyB3aG8gaXMgZGV0ZXJtaW5lZCB0byBpbXByb3ZlIGhpcyBrbm93bGVkZ2UgYW5kIHNraWxscy4gSGlzIGNvbW1pdG1lbnQgYW5kIHB1bmN0dWFsaXR5IGluIGRlbGl2ZXJpbmcgYXNzaWdubWVudHMgYXJlIGNvbW1lbmRhYmxlLiBJbiBteSBvcGluaW9uLCBoaXMgaW50ZXJlc3QgaW4gbGVhcm5pbmcgaGFzIGJlZW4gb25lIG9mIHRoZSBrZXkgcmVhc29ucyBmb3IgaGlzIHN1Y2Nlc3MuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsaS1hemFkZWgvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICByb2xlOiBcIkRlc2lnbiBMZWFkIGF0IFNldGFyZSBBdmFsIChNQ0kpXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyMSDigKIgSG9zc2VpbiBtYW5hZ2VkIE1hc2loIGRpcmVjdGx5XCIsXG4gICAgdGV4dDogXCJJIGhhdmUga25vd24gTWFzaWggc2luY2UgMjAxOCwgYW5kIGZyb20gdGhlIGJlZ2lubmluZywgaGlzIHBvdGVudGlhbCB0YWxlbnQgd2FzIGV2aWRlbnQsIG1hcmtpbmcgdGhlIHN0YXJ0IG9mIG91ciBjb2xsYWJvcmF0aXZlIGpvdXJuZXkuIEZvciBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIHlvdSBvbmx5IG5lZWQgdG8gZ2l2ZSBNYXNpaCB0aGUgcmF3IGRhdGEgYW5kIGFueSB1bmNlcnRhaW50aWVzLiBXaGlsZSB3b3JraW5nIHRvZ2V0aGVyIG9uIHRoZSBwcm9kdWN0IHRlYW0gYXQgU2V0YXJlIEF2YWwgQ29tcGFueSwgaGlzIGV4cGVydGlzZSB3YXMgY3J1Y2lhbCBpbiBwcm9ibGVtIGRlZmluaXRpb24sIHNvbHV0aW9uIGZpbmRpbmcsIGFuZCBkZXNpZ25pbmcgZmxvd3MuIFRoZSBvdXRjb21lcyBvZiBoaXMgcHJvZmVzc2lvbmFsIGFuZCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBkZXNpZ25zIGhhdmUgYWx3YXlzIGJlZW4gb3V0c3RhbmRpbmcuIEhlIGlzIGEgY29uc3VtbWF0ZSBwcm9mZXNzaW9uYWwsIGFuZCBJIGhpZ2hseSByZWNvbW1lbmQgaGltLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3NzZWlubWFobW91ZHZhbmQvXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgZ2FsbGVyeSwgc3RvcnlIZXJvIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5jb25zdCBoZXJvSW1hZ2UgPSBnYWxsZXJ5WzBdPy5pbWFnZTtcblxuY29uc3QgbXlTdG9yeVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiUHJvZmlsZVBhZ2VcIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgTXkgU3RvcnlcIixcbiAgZGVzY3JpcHRpb246IHN0b3J5SGVyby5kZXNjcmlwdGlvbixcbiAgdXJsOiBgJHtzaXRlVXJsfS9teS1zdG9yeWAsXG4gIGltYWdlOiBoZXJvSW1hZ2U/LnNyYyxcbiAgcHJpbWFyeVRvcGljOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICBqb2JUaXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIHNhbWVBczogW1xuICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICAgICAgXCJodHRwczovL3d3dy5maWdtYS5jb20vQG1hc2loXCIsXG4gICAgICBcImh0dHBzOi8vbWFzaWguZnJhbWVyLndlYnNpdGUvXCIsXG4gICAgXSxcbiAgfSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBteVN0b3J5UGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIk15IFN0b3J5IOKAlCBNYXNpaCBTYWRyaeKAmXMgcGF0aCBhcyBhIHByb2R1Y3QgZGVzaWduZXJcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJMZWFybiBob3cgTWFzaWggU2FkcmkgYmxlbmRzIG1lbnRvcnNoaXAsIGV4cGVyaW1lbnRhdGlvbiwgYW5kIGNyYWZ0IHRvIGRlc2lnbiBodW1hbiBleHBlcmllbmNlc+KAlGZyb20gY2xhc3Nyb29tIHRvIHByb2R1Y3QgbGF1bmNoZXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL215LXN0b3J5XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwicHJvZmlsZVwiLFxuICAgIGltYWdlOiBoZXJvSW1hZ2VcbiAgICAgID8ge1xuICAgICAgICAgIHVybDogaGVyb0ltYWdlLnNyYyxcbiAgICAgICAgICBhbHQ6IGhlcm9JbWFnZS5hbHQsXG4gICAgICAgICAgd2lkdGg6IGhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgICAgIGhlaWdodDogaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogbXlTdG9yeVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQ2VydGlmaWNhdGVzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NlcnRpZmljYXRlc1NlY3Rpb25cIjtcbmltcG9ydCBFZHVjYXRpb25TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBQaGlsb3NvcGh5U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1BoaWxvc29waHlTZWN0aW9uXCI7XG5pbXBvcnQgUGhvdG9HYWxsZXJ5U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1Bob3RvR2FsbGVyeVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nSm91cm5leVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9SZWFkaW5nSm91cm5leVNlY3Rpb25cIjtcbmltcG9ydCBSZWZlcmVuY2VzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1JlZmVyZW5jZXNTZWN0aW9uXCI7XG5pbXBvcnQgVGVhbVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9UZWFtU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgYm9va3MsXG4gIGNlcnRpZmljYXRlcyxcbiAgZWR1Y2F0aW9uLFxuICBlbW9qaUxpc3QsXG4gIGdhbGxlcnksXG4gIHBoaWxvc29waHlUZXh0LFxuICByZWFkaW5nSm91cm5leSxcbiAgcmVmZXJlbmNlcyxcbiAgc3RvcnlIZXJvLFxuICB0ZWFtLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IG15U3RvcnlQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgTXlTdG9yeVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLm15U3RvcnlQYWdlTWV0YWRhdGF9IC8+XG5cbiAgICAgIDxIZXJvU2VjdGlvbiBoZXJvPXtzdG9yeUhlcm99IC8+XG4gICAgICA8UGhvdG9HYWxsZXJ5U2VjdGlvbiBpdGVtcz17Z2FsbGVyeX0gLz5cbiAgICAgIDxQaGlsb3NvcGh5U2VjdGlvbiBwaGlsb3NvcGh5VGV4dD17cGhpbG9zb3BoeVRleHR9IGVtb2ppTGlzdD17ZW1vamlMaXN0fSAvPlxuICAgICAgPFJlYWRpbmdKb3VybmV5U2VjdGlvbiBqb3VybmV5PXtyZWFkaW5nSm91cm5leX0gYm9va3M9e2Jvb2tzfSAvPlxuICAgICAgPFRlYW1TZWN0aW9uIHRlYW09e3RlYW19IC8+XG4gICAgICA8RWR1Y2F0aW9uU2VjdGlvbiBpdGVtcz17ZWR1Y2F0aW9ufSAvPlxuICAgICAgPENlcnRpZmljYXRlc1NlY3Rpb24gY2VydGlmaWNhdGVzPXtjZXJ0aWZpY2F0ZXN9IC8+XG4gICAgICA8UmVmZXJlbmNlc1NlY3Rpb24gcmVmZXJlbmNlcz17cmVmZXJlbmNlc30gLz5cbiAgICA8Lz5cbiAg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QSxTQUE1QixpQ0FBcUM7QUFBQSxzQkFDckMseUJBQUMsMkJBQUQ7QUFBQSxRQUFtQjtBQUFBLFFBQWdDO0FBQUEsU0FBbkQsaUNBQXlFO0FBQUEsc0JBQ3pFLHlCQUFDLCtCQUFEO0FBQUEsUUFBdUIsU0FBUztBQUFBLFFBQWdCO0FBQUEsU0FBaEQsaUNBQThEO0FBQUEsc0JBQzlELHlCQUFDLHFCQUFEO0FBQUEsUUFBYTtBQUFBLFNBQWIsaUNBQXlCO0FBQUEsc0JBQ3pCLHlCQUFDLDBCQUFEO0FBQUEsUUFBa0IsT0FBTztBQUFBLFNBQXpCLGlDQUFvQztBQUFBLHNCQUNwQyx5QkFBQyw2QkFBRDtBQUFBLFFBQXFCO0FBQUEsU0FBckIsaUNBQWlEO0FBQUEsc0JBQ2pELHlCQUFDLDJCQUFEO0FBQUEsUUFBbUI7QUFBQSxTQUFuQixpQ0FBMkM7QUFBQTtBQUFBLEtBVjdDLGdDQVdFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMkNBMTczODdBQjAzNUE2QjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
