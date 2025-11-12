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
    pt: { xs: 4, md: 4 },
    pb: { xs: 6, md: 12 }
  },
  children: [
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
        spacing: { xs: 1.5, md: 1.5 },
        sx: { maxWidth: 720 },
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "eyebrow",
            color: "brand.secondary",
            children: "Photo Strip"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "h3",
            sx: { fontSize: { xs: "1.75rem", md: "2.5rem" } },
            children: "My Life in Frames"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { fontSize: { xs: "0.9375rem", md: "1rem" } },
            children: "A glimpse into the textures, people, and scenes that shape how I approach product design—unfiltered, a little imperfect, and very alive."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      sx: { mt: { xs: 3, md: 6 } },
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

// node_modules/@mui/icons-material/esm/VolunteerActivismRounded.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var VolunteerActivismRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2m7-5.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25.65-.76 1.66-1.25 2.7-1.25C20.55 2 22 3.45 22 5.3c0 2.1-2.5 4.51-5.33 7.09-.38.35-.97.35-1.35 0C12.5 9.81 10 7.4 10 5.3M19.99 17h-6.83a.96.96 0 0 1-.33-.06l-1.47-.51c-.26-.09-.39-.37-.3-.63s.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2"
}), "VolunteerActivismRounded");

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
var emojiList = ["☕️", "\uD83E\uDDD7\uD83C\uDFFD", "\uD83D\uDCBB", "\uD83D\uDCDA", "\uD83C\uDFA8", "\uD83E\uDEB4"];
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
var MyStoryStructuredData = {
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
var MyStoryPageMetadata = {
  title: "My Story — Masih Sadri's path as a product designer",
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
  structuredData: MyStoryStructuredData
};

// src/features/my-story/MyStoryPage.tsx
var jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var MyStoryPage = () => {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(jsx_dev_runtime11.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Seo_default, {
        ...MyStoryPageMetadata
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

//# debugId=33C74B99CBD3A40264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9TdXJmYWNlQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1NjaG9vbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvRWR1Y2F0aW9uU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1BoaWxvc29waHlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9SZWFkaW5nSm91cm5leVNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Wb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvUmVmZXJlbmNlc1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL1RlYW1TZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9zZW8udHMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L015U3RvcnlQYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgNWgtMlY0YzAtLjU1LS40NS0xLTEtMUg4Yy0uNTUgMC0xIC40NS0xIDF2MUg1Yy0xLjEgMC0yIC45LTIgMnYxYzAgMi41NSAxLjkyIDQuNjMgNC4zOSA0Ljk0LjYzIDEuNSAxLjk4IDIuNjMgMy42MSAyLjk2VjE5SDhjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoOGMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMWgtM3YtMy4xYzEuNjMtLjMzIDIuOTgtMS40NiAzLjYxLTIuOTZDMTkuMDggMTIuNjMgMjEgMTAuNTUgMjEgOFY3YzAtMS4xLS45LTItMi0yTTUgOFY3aDJ2My44MkM1Ljg0IDEwLjQgNSA5LjMgNSA4bTE0IDBjMCAxLjMtLjg0IDIuNC0yIDIuODJWN2gyelwiXG59KSwgJ0Vtb2ppRXZlbnRzUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHsgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBTZWN0aW9uSGVhZGVyUHJvcHMgPSB7XG4gIGV5ZWJyb3c/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICBhbGlnbj86IFwiY2VudGVyXCIgfCBcImxlZnRcIjtcbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoe1xuICBleWVicm93LFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIGljb24sXG4gIGFsaWduID0gXCJjZW50ZXJcIixcbn06IFNlY3Rpb25IZWFkZXJQcm9wcykgPT4gKFxuICA8U3RhY2tcbiAgICBzcGFjaW5nPXsxLjV9XG4gICAgYWxpZ25JdGVtcz17YWxpZ24gPT09IFwiY2VudGVyXCIgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCJ9XG4gICAgdGV4dEFsaWduPXthbGlnbn1cbiAgPlxuICAgIHsoaWNvbiB8fCBleWVicm93KSAmJiAoXG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAge2V5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgPC9TdGFjaz5cbiAgICApfVxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAge3N1YnRpdGxlICYmIChcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWF4V2lkdGg6IGFsaWduID09PSBcImNlbnRlclwiID8gNzIwIDogNjQwLCBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICApfVxuICA8L1N0YWNrPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXJkUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5cbmNvbnN0IFN1cmZhY2VDYXJkID0gKHsgc3gsIGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17e1xuICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAuLi5zeCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VyZmFjZUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgRW1vamlFdmVudHNSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbW9qaUV2ZW50c1JvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgUGlsbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBTdXJmYWNlQ2FyZCBmcm9tIFwiLi9TdXJmYWNlQ2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZXJ0aWZpY2F0ZUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDZXJ0aWZpY2F0ZXNTZWN0aW9uUHJvcHMgPSB7XG4gIGNlcnRpZmljYXRlczogUmVhZG9ubHlBcnJheTxDZXJ0aWZpY2F0ZUl0ZW0+O1xufTtcblxuY29uc3QgQ2VydGlmaWNhdGVzU2VjdGlvbiA9ICh7IGNlcnRpZmljYXRlcyB9OiBDZXJ0aWZpY2F0ZXNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogOCwgbWQ6IDEwIH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIGV5ZWJyb3c9XCJDb250aW51b3VzIExlYXJuaW5nXCJcbiAgICAgICAgICB0aXRsZT1cIkNlcnRpZmljYXRlcyAmIFRyYWluaW5nXCJcbiAgICAgICAgICBpY29uPXs8RW1vamlFdmVudHNSb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fVxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7Y2VydGlmaWNhdGVzLm1hcCgoY2VydGlmaWNhdGUpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2Ake2NlcnRpZmljYXRlLnRpdGxlfS0ke2NlcnRpZmljYXRlLmRhdGV9YH0+XG4gICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPXtjZXJ0aWZpY2F0ZS5iYWRnZX0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2NlcnRpZmljYXRlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmluc3RpdHV0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge1tjZXJ0aWZpY2F0ZS5ob3VycywgY2VydGlmaWNhdGUuc2NvcmUsIGNlcnRpZmljYXRlLnRvcGljc11cbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2RldGFpbH0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRlc1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxMy4xOHYyLjgxYzAgLjczLjQgMS40MSAxLjA0IDEuNzZsNSAyLjczYy42LjMzIDEuMzIuMzMgMS45MiAwbDUtMi43M2MuNjQtLjM1IDEuMDQtMS4wMyAxLjA0LTEuNzZ2LTIuODFsLTYuMDQgMy4zYy0uNi4zMy0xLjMyLjMzLTEuOTIgMHptNi4wNC05LjY2LTguNDMgNC42Yy0uNjkuMzgtLjY5IDEuMzggMCAxLjc2bDguNDMgNC42Yy42LjMzIDEuMzIuMzMgMS45MiAwTDIxIDEwLjA5VjE2YzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY5LjU5YzAtLjM3LS4yLS43LS41Mi0uODhsLTkuNTItNS4xOWEyLjA0IDIuMDQgMCAwIDAtMS45MiAwXCJcbn0pLCAnU2Nob29sUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IFNjaG9vbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NjaG9vbFJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgUGlsbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBTdXJmYWNlQ2FyZCBmcm9tIFwiLi9TdXJmYWNlQ2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBFZHVjYXRpb25JdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgRWR1Y2F0aW9uU2VjdGlvblByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPjtcbn07XG5cbmNvbnN0IEVkdWNhdGlvblNlY3Rpb24gPSAoeyBpdGVtcyB9OiBFZHVjYXRpb25TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgZXllYnJvdz1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgdGl0bGU9XCJBY2FkZW1pYyBGb3VuZGF0aW9uc1wiXG4gICAgICAgICAgaWNvbj17PFNjaG9vbFJvdW5kZWRJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtgJHtpdGVtLnRpdGxlfS0ke2l0ZW0uaW5zdGl0dXRpb259YH0+XG4gICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPXtpdGVtLmJhZGdlfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXswLjc1fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtkZXRhaWx9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvblNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBTdG9yeUhlcm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZXJvU2VjdGlvblByb3BzID0ge1xuICBoZXJvOiBTdG9yeUhlcm87XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwiaGVhZGVyXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC42KVwiIDogXCJyZ2JhKDgsIDE0LCAyNiwgMC44NSlcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogODQwLFxuICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwibGVmdFwiLCBtZDogXCJjZW50ZXJcIiB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheVwiPntoZXJvLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2hlcm8uc3VidGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAge2hlcm8uZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgUGhpbG9zb3BoeVNlY3Rpb25Qcm9wcyA9IHtcbiAgcGhpbG9zb3BoeVRleHQ6IHN0cmluZztcbiAgZW1vamlMaXN0OiByZWFkb25seSBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IFBoaWxvc29waHlTZWN0aW9uID0gKHsgcGhpbG9zb3BoeVRleHQsIGVtb2ppTGlzdCB9OiBQaGlsb3NvcGh5U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgc3g9e3tcbiAgICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogOCB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGhpbG9zb3BoeVRleHR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBgM3B4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgICAgICAgICAgICBwbDogMixcbiAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIEkgYW0gZHJpdmVuIGJ5IGV4cGVyaWVuY2Vz4oCUZGVzaWduaW5nIHRoZW0sIGxlYXJuaW5nIGZyb20gdGhlbSwgYW5kIGxpdmluZyB0aGVtXG4gICAgICAgICAgICAgICAgICBkZWVwbHkuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICBNeSBmcmllbmRzIG9mdGVuIGRlc2NyaWJlIG1lIGFzIHNvbWVvbmUgd2l0aCBsYXllcnPigJRjdXJpb3NpdHkga2VlcHMgbWUgZXhwbG9yaW5nXG4gICAgICAgICAgICAgICAgbmV3IGNyYWZ0cywgY29tbXVuaXRpZXMsIGFuZCBjaGFsbGVuZ2VzLiBJdOKAmXMgaG93IEkgc3RheSBncm91bmRlZCBhbmQgaW5zcGlyZWQuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBzcGFjaW5nPXszLjV9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC43KVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBUaGVzZSBzbWFsbCByaXR1YWxzIHNoYXBlIHRoZSB3YXkgSSBkZXNpZ24gYW5kIGNvbGxhYm9yYXRlOlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgIEZyb20gbXVzaWMgYW5kIGNlcmFtaWNzIHRvIHBsYW50cywgY29va2luZywgYW5kIGNvbGxhYm9yYXRpdmUgZ2FtZXPigJRJ4oCZbSBtb3N0XG4gICAgICAgICAgICAgICAgICBhbGl2ZSB3aGVuIEnigJltIGJ1aWxkaW5nIHdpdGggb3RoZXJzLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgdXNlRmxleEdhcFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IHhzOiBcImZsZXgtc3RhcnRcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZW1vamlMaXN0Lm1hcCgoZW1vamkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZW1vaml9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiA1Niwgc206IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Vtb2ppfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhpbG9zb3BoeVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBHYWxsZXJ5SXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFBob3RvR2FsbGVyeVNlY3Rpb25Qcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8R2FsbGVyeUl0ZW0+O1xufTtcblxuY29uc3QgUGhvdG9HYWxsZXJ5U2VjdGlvbiA9ICh7IGl0ZW1zIH06IFBob3RvR2FsbGVyeVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgc3g9e3tcbiAgICAgIHB0OiB7IHhzOiA0LCBtZDogNCB9LFxuICAgICAgcGI6IHsgeHM6IDYsIG1kOiAxMiB9LFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEuNSB9fSBzeD17eyBtYXhXaWR0aDogNzIwIH19PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgUGhvdG8gU3RyaXBcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBmb250U2l6ZTogeyB4czogXCIxLjc1cmVtXCIsIG1kOiBcIjIuNXJlbVwiIH0gfX0+XG4gICAgICAgICAgTXkgTGlmZSBpbiBGcmFtZXNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIwLjkzNzVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEEgZ2xpbXBzZSBpbnRvIHRoZSB0ZXh0dXJlcywgcGVvcGxlLCBhbmQgc2NlbmVzIHRoYXQgc2hhcGUgaG93IEkgYXBwcm9hY2ggcHJvZHVjdFxuICAgICAgICAgIGRlc2lnbuKAlHVuZmlsdGVyZWQsIGEgbGl0dGxlIGltcGVyZmVjdCwgYW5kIHZlcnkgYWxpdmUuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBtYXhXaWR0aD17ZmFsc2V9IHN4PXt7IG10OiB7IHhzOiAzLCBtZDogNiB9IH19PlxuICAgICAgPEJveCBzeD17eyBweDogeyB4czogMiwgc206IDQsIG1kOiA2IH0gfX0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgY29sdW1uQ291bnQ6IHsgeHM6IDIsIHNtOiAzLCBtZDogNSB9LFxuICAgICAgICAgICAgY29sdW1uR2FwOiB7IHhzOiAxLjUsIG1kOiAyLjUgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0uY2FwdGlvbn0tJHtpdGVtLmltYWdlLnNyY31gfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJyZWFrSW5zaWRlOiBcImF2b2lkXCIsXG4gICAgICAgICAgICAgICAgbWI6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZS5zcmN9XG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgUGlsbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBTdXJmYWNlQ2FyZCBmcm9tIFwiLi9TdXJmYWNlQ2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBCb29rLCBSZWFkaW5nSm91cm5leSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlYWRpbmdKb3VybmV5U2VjdGlvblByb3BzID0ge1xuICBqb3VybmV5OiBSZWFkaW5nSm91cm5leTtcbiAgYm9va3M6IFJlYWRvbmx5QXJyYXk8Qm9vaz47XG59O1xuXG5jb25zdCBSZWFkaW5nSm91cm5leVNlY3Rpb24gPSAoeyBqb3VybmV5LCBib29rcyB9OiBSZWFkaW5nSm91cm5leVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWFkaW5nIEpvdXJuZXlcIlxuICAgICAgICAgICAgdGl0bGU9e2pvdXJuZXkudGl0bGV9XG4gICAgICAgICAgICBzdWJ0aXRsZT17am91cm5leS5zdWJ0aXRsZX1cbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17Ym9vay50aXRsZX0+XG4gICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Jvb2suY292ZXIuc3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Jvb2suY292ZXIuYWx0fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ2FwOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2Jvb2sudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2suc3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXswLjc1fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2sudGFrZWF3YXlzLm1hcCgodGFrZWF3YXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXt0YWtlYXdheX0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFrZWF3YXl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmhpZ2hsaWdodCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtib29rLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFkaW5nSm91cm5leVNlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMyAxMWMtMS4xIDAtMiAuOS0yIDJ2N2MwIDEuMS45IDIgMiAyczItLjkgMi0ydi03YzAtMS4xLS45LTItMi0ybTctNS43QzEwIDMuNDUgMTEuNDUgMiAxMy4zIDJjMS4wNCAwIDIuMDUuNDkgMi43IDEuMjUuNjUtLjc2IDEuNjYtMS4yNSAyLjctMS4yNUMyMC41NSAyIDIyIDMuNDUgMjIgNS4zYzAgMi4xLTIuNSA0LjUxLTUuMzMgNy4wOS0uMzguMzUtLjk3LjM1LTEuMzUgMEMxMi41IDkuODEgMTAgNy40IDEwIDUuM00xOS45OSAxN2gtNi44M2EuOTYuOTYgMCAwIDEtLjMzLS4wNmwtMS40Ny0uNTFjLS4yNi0uMDktLjM5LS4zNy0uMy0uNjNzLjM4LS40LjY0LS4zbDEuMTIuNDNjLjExLjA0LjI0LjA3LjM2LjA3aDIuNjNjLjY1IDAgMS4xOC0uNTMgMS4xOC0xLjE4IDAtLjQ5LS4zMS0uOTMtLjc3LTEuMTFMOS4zIDExLjEzYy0uMjItLjA5LS40Ni0uMTMtLjctLjEzSDd2OS4wMmw2LjM3IDEuODFjLjQxLjEyLjg1LjEgMS4yNS0uMDVMMjIgMTljMC0xLjExLS45LTItMi4wMS0yXCJcbn0pLCAnVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Wb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEdob3N0QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91aVwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4vU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFJlZmVyZW5jZUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBSZWZlcmVuY2VzU2VjdGlvblByb3BzID0ge1xuICByZWZlcmVuY2VzOiBSZWFkb25seUFycmF5PFJlZmVyZW5jZUl0ZW0+O1xufTtcblxuY29uc3QgUmVmZXJlbmNlc1NlY3Rpb24gPSAoeyByZWZlcmVuY2VzIH06IFJlZmVyZW5jZXNTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc0xpZ2h0ID0gdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWZlcmVuY2VzXCJcbiAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBNeSBQYXJ0bmVycyBTYXlcIlxuICAgICAgICAgICAgaWNvbj17PFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICB7cmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtyZWZlcmVuY2UubmFtZX0+XG4gICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57cmVmZXJlbmNlLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cmVmZXJlbmNlLmxpbmtlZGlufVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBpc0xpZ2h0ID8gXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjIyKVwiIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMzUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNMaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogaXNMaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjQyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC41NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0xpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFZpZXcgb24gTGlua2VkSW5cbiAgICAgICAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBUZWFtU25hcHNob3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBUZWFtU2VjdGlvblByb3BzID0ge1xuICB0ZWFtOiBUZWFtU25hcHNob3Q7XG59O1xuXG5jb25zdCBUZWFtU2VjdGlvbiA9ICh7IHRlYW0gfTogVGVhbVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIGRpc2FibGVHdXR0ZXJzIG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB7IG1kOiBcIjEuMTVmciAwLjg1ZnJcIiB9LFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAzNjAsIHNtOiA0MjAsIG1kOiA1MjAgfSxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgc3JjPXt0ZWFtLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgYWx0PXt0ZWFtLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICBib3R0b206IHsgeHM6IDE2LCBtZDogMjQgfSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAxNiwgbWQ6IDMyIH0sXG4gICAgICAgICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgICAgICAgcHk6IDAuNzUsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnBpbGwsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMnB4KVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC43MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RlYW0uY2FwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweDogeyB4czogMywgc206IDYsIG1kOiA4IH0sXG4gICAgICAgICAgICAgIHB5OiB7IHhzOiA1LCBtZDogMCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0gc3g9e3sgbWF4V2lkdGg6IDUyMCB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIENvbGxhYm9yYXRvcnNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGVhbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAge3RlYW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBgM3B4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5zZWNvbmRhcnl9YCxcbiAgICAgICAgICAgICAgICAgIHBsOiAzLFxuICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAg4oCcRGVzaWduaW5nIHdpdGggcGVvcGxlIEkgdHJ1c3Qga2VlcHMgdGhlIHdvcmsgaHVtYmxlLCBhbWJpdGlvdXMsIGFuZCBqb3lmdWwu4oCdXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBjcmVhdGl2ZUNvbmZpZGVuY2VDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3MvY3JlYXRpdmUtY29uZmlkZW5jZS5qcGdcIjtcbmltcG9ydCBkZXNpZ25PZkV2ZXJ5ZGF5VGhpbmdzQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL2Rlc2lnbi1vZi1ldmVyeWRheS10aGluZ3MuanBnXCI7XG5pbXBvcnQgc3ByaW50Q292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL3NwcmludC5qcGdcIjtcbmltcG9ydCBhaUFuZFV4Q292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL2FpLWFuZC11eC5qcGdcIjtcbmltcG9ydCBkaXZhclRlYW1QaG90b0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvZGl2YXItdGVhbS5qcGdcIjtcbmltcG9ydCBtYXNpaENoaWxkUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLWNoaWxkLXBob3RvLnBuZ1wiO1xuaW1wb3J0IG1hc2loQ29mZmVlQXJ0aXN0QXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1jb2ZmZWUtYXJ0aXN0LnBuZ1wiO1xuaW1wb3J0IG1hc2loTW91bnRhaW5lZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLW1vdW50YWluZWVyLnBuZ1wiO1xuaW1wb3J0IG1hc2loVXhEZXNpZ25lckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtdXgtZGVzaWduZXIucG5nXCI7XG5pbXBvcnQgbWFzaWhXb29kQ2FydmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC13b29kLWNhcnZlci5wbmdcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlUmVzb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Fzc2V0c1wiO1xuaW1wb3J0IHR5cGUge1xuICBCb29rLFxuICBDZXJ0aWZpY2F0ZUl0ZW0sXG4gIEVkdWNhdGlvbkl0ZW0sXG4gIEdhbGxlcnlJdGVtLFxuICBSZWFkaW5nSm91cm5leSxcbiAgUmVmZXJlbmNlSXRlbSxcbiAgU3RvcnlIZXJvLFxuICBUZWFtU25hcHNob3QsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RvcnlIZXJvOiBTdG9yeUhlcm8gPSB7XG4gIHRpdGxlOiBcIkkgYW0gTWFzaWhcIixcbiAgc3VidGl0bGU6IFwiQSBDcmVhdG9yIG9mIE1lYW5pbmdmdWwgRXhwZXJpZW5jZXNcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJPdXRzaWRlIG9mIGRlc2lnbiwgSSBlbmpveSBleHBsb3JpbmcgY2hhbGxlbmdlcyBhbmQgbGVhcm5pbmcgdGhyb3VnaCBleHBlcmllbmNlcyBsaWtlIG1vdW50YWluZWVyaW5nLCB3b29kIGNhcnZpbmcsIGFuZCB0ZWFjaGluZy4gVGhlc2UgcHVyc3VpdHMgaGF2ZSB0YXVnaHQgbWUgcGF0aWVuY2UsIHJlc2lsaWVuY2UsIGFuZCBlbXBhdGh5LCB3aGljaCBJIGJyaW5nIGludG8gbXkgd29yayB0byBjcmFmdCBtZWFuaW5nZnVsIGFuZCB0aG91Z2h0ZnVsIGRlc2lnbnMuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZ2FsbGVyeTogUmVhZG9ubHlBcnJheTxHYWxsZXJ5SXRlbT4gPSBbXG4gIHtcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIG1hc2loQ2hpbGRQaG90b0Fzc2V0LFxuICAgICAgXCJNYXNpaCBhcyBhIGNoaWxkIGluIGhpcyBkYWQncyBqYWNrZXRcIixcbiAgICApLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBDaGlsZCBpbiBNeSBEYWQncyBKYWNrZXRcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhNb3VudGFpbmVlckFzc2V0LCBcIk1hc2loIGFzIGEgbW91bnRhaW5lZXJcIiksXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIE1vdW50YWluZWVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIG1hc2loQ29mZmVlQXJ0aXN0QXNzZXQsIFwiTWFzaWgncyBsYXR0ZSBhcnRcIiksXG4gICAgY2FwdGlvbjogXCJNeSBhcnQgb24gYSBMYXR0ZVwiLFxuICAgIHN1YmNhcHRpb246IFwiTGF0dGUgQXJ0IGJ5IG1lIDopXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIG1hc2loVXhEZXNpZ25lckFzc2V0LCBcIk1hc2loIGFzIGEgVVggRGVzaWduZXJcIiksXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIFVYIERlc2lnbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIG1hc2loV29vZENhcnZlckFzc2V0LCBcIk1hc2loIGFzIGEgd29vZCBjYXJ2ZXJcIiksXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIFdvb2QgQ2FydmVyXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcGhpbG9zb3BoeVRleHQgPVxuICBcIkkgZGVzaWduIGV4cGVyaWVuY2VzIHRoYXQgbm90IG9ubHkgc29sdmUgcHJvYmxlbXMgYnV0IGNyZWF0ZSB2YWx1ZSBmb3IgYm90aCBidXNpbmVzc2VzIGFuZCB1c2Vycy4gSSBlbmpveSBkaWdnaW5nIGRlZXAgaW50byBjaGFsbGVuZ2VzLCBhbmFseXppbmcgdGhlbSB0aG9yb3VnaGx5LCBhbmQgY29taW5nIHVwIHdpdGggc29sdXRpb25zIHRoYXQgdHJ1bHkgbWFrZSBhIGRpZmZlcmVuY2UuXCI7XG5cbmV4cG9ydCBjb25zdCBlbW9qaUxpc3Q6IHJlYWRvbmx5IHN0cmluZ1tdID0gW1wi4piV77iPXCIsIFwi8J+nl/Cfj71cIiwgXCLwn5K7XCIsIFwi8J+TmlwiLCBcIvCfjqhcIiwgXCLwn6q0XCJdO1xuXG5leHBvcnQgY29uc3QgcmVhZGluZ0pvdXJuZXk6IFJlYWRpbmdKb3VybmV5ID0ge1xuICB0aXRsZTogXCJEZXNpZ24gQm9va3MgR3VpZGluZyBNeSBDcmFmdFwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkluc3BpcmVkIGJ5IHRoZSBsaXZpbmcgYm9va3NoZWx2ZXMgc2hhcmVkIGJ5IHBlZXJzIGxpa2UgS3lsZSBKb2huc3RvbiwgU2F3eWVyIEhvbGxlbnNoZWFkLCBKYXNvbiBab29rLCBhbmQgQW15IE1jTGF5IFBhdGVyc29uLCBJIGtlZXAgYSBjdXJhdGVkIHJlY29yZCBvZiB0aGUgaWRlYXMgdGhhdCBzaGFwZSBteSBwcmFjdGljZS5cIixcbiAgY3VycmVudGx5UmVhZGluZzoge1xuICAgIGxhYmVsOiBcIkN1cnJlbnRseSByZWFkaW5nXCIsXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYm9va3M6IFJlYWRvbmx5QXJyYXk8Qm9vaz4gPSBbXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIGRlc2lnbk9mRXZlcnlkYXlUaGluZ3NDb3ZlckFzc2V0LFxuICAgICAgXCJUaGUgRGVzaWduIG9mIEV2ZXJ5ZGF5IFRoaW5ncyBib29rIGNvdmVyXCIsXG4gICAgKSxcbiAgICB0aXRsZTogXCJUaGUgRGVzaWduIG9mIEV2ZXJ5ZGF5IFRoaW5nc1wiLFxuICAgIGF1dGhvcjogXCJEb24gTm9ybWFuXCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDE4IMK3IFJldmlzaXRlZCAyMDI0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiTm9ybWFu4oCZcyBmcmFtZXdvcmsgZm9yIGFmZm9yZGFuY2VzIGFuZCBmZWVkYmFjayBoZWxwZWQgbWUgYnVpbGQgcmVzaWxpZW5jZSBhZ2FpbnN0IGJpYXMgd2hlbiB0ZXN0aW5nIHNhZmV0eS1jcml0aWNhbCBmbG93cywgZXNwZWNpYWxseSB3aGVuIHdlIHJlZGVzaWduZWQgdm9pY2UgbWFza2luZyBmb3IgRGl2YXIuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIlJlaW5mb3JjZWQgbXkgaGFiaXQgb2YgcHJvdG90eXBpbmcgZXJyb3Igc3RhdGVzIGZpcnN0LlwiLFxuICAgICAgXCJJbmZsdWVuY2VkIG15IGhldXJpc3RpY3MgY2hlY2tsaXN0IGZvciBhY2Nlc3NpYmlsaXR5IHJldmlld3MuXCIsXG4gICAgICBcIlRhdWdodCBtZSB0byBuYXJyYXRlIOKAnHVzZXIgZ29hbHPigJ0gaW4gZXZlcnkgZGVzaWduIGNyaXRpcXVlLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShpbXBvcnQubWV0YS51cmwsIHNwcmludENvdmVyQXNzZXQsIFwiU3ByaW50IGJvb2sgY292ZXJcIiksXG4gICAgdGl0bGU6IFwiU3ByaW50XCIsXG4gICAgYXV0aG9yOiBcIkpha2UgS25hcHAgJiB0aGUgR1YgRGVzaWduIFRlYW1cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMjBcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJCb3Jyb3dpbmcgdGhlIHNwcmludCByaHl0aG0gaGVscGVkIG1lIGNvYWNoIHByb2R1Y3Qgc3F1YWRzIHRvd2FyZCBkZWNpc2lvbiBjbGFyaXR5LiBXZSBwcm90b3R5cGVkIGFuZCBsYXVuY2hlZCBhIGxveWFsdHkgcHJvZ3JhbSBhdCBTZXRhcmUgQXZhbCB1c2luZyBhIDQtZGF5IHZhcmlhdGlvbiBvZiB0aGlzIHBsYXlib29rLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJBZG9wdGVkIGxpZ2h0bmluZyB0YWxrcyB0byBhbGlnbiBzdGFrZWhvbGRlcnMgZmFzdC5cIixcbiAgICAgIFwiTWFkZSDigJxIb3cgbWlnaHQgd2XigJ0gc3ludGhlc2lzIGEgc3RhcGxlIGluIG15IHdvcmtzaG9wcy5cIixcbiAgICAgIFwiSW1wcm92ZWQgcmVtb3RlIGZhY2lsaXRhdGlvbiB1c2luZyBzdHJ1Y3R1cmVkIHZvdGluZyByaXR1YWxzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIGNyZWF0aXZlQ29uZmlkZW5jZUNvdmVyQXNzZXQsXG4gICAgICBcIkNyZWF0aXZlIENvbmZpZGVuY2UgYm9vayBjb3ZlclwiLFxuICAgICksXG4gICAgdGl0bGU6IFwiQ3JlYXRpdmUgQ29uZmlkZW5jZVwiLFxuICAgIGF1dGhvcjogXCJUb20gJiBEYXZpZCBLZWxsZXlcIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMjFcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaGlzIGJvb2sgcmVmcmFtZWQgaG93IEkgbWVudG9yIG5ldyBkZXNpZ25lcnPigJRzaGlmdGluZyBjcml0aXF1ZXMgZnJvbSBzb2x1dGlvbiBqdWRnbWVudCB0byBjYXBhYmlsaXR5IGJ1aWxkaW5nIGFuZCBwc3ljaG9sb2dpY2FsIHNhZmV0eS5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCDigJxjb25maWRlbmNlIG1hcHBpbmfigJ0gaW4gbXkgbWVudG9yc2hpcCBzZXNzaW9ucy5cIixcbiAgICAgIFwiRHJvdmUgbWUgdG8gZGVzaWduIHByb2plY3QtYmFzZWQgY3VycmljdWxhIGF0IFJhaG5lbWEgQ29sbGVnZS5cIixcbiAgICAgIFwiRW5jb3VyYWdlZCBzdG9yeXRlbGxpbmcgcml0dWFscyB0byBjZWxlYnJhdGUgaW5jcmVtZW50YWwgd2lucy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY292ZXI6IGNyZWF0ZUltYWdlUmVzb3VyY2UoXG4gICAgICBpbXBvcnQubWV0YS51cmwsXG4gICAgICBhaUFuZFV4Q292ZXJBc3NldCxcbiAgICAgIFwiQUkgYW5kIFVYIGJvb2sgY292ZXJcIixcbiAgICApLFxuICAgIHRpdGxlOiBcIkFJIGFuZCBVWDogV2h5IEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIE5lZWRzIFVzZXIgRXhwZXJpZW5jZVwiLFxuICAgIGF1dGhvcjogXCJQYW1lbGEgUGF2bGlzY2FrXCIsXG4gICAgbGFiZWw6IFwiSW4gcHJvZ3Jlc3MgwrcgUTQgMjAyNVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIknigJltIGV4cGxvcmluZyBob3cgaHVtYW4tY2VudGVyZWQgbWV0aG9kcyBldm9sdmUgd2hlbiBtb2RlbHMgbWFrZSBwcm9iYWJpbGlzdGljIGRlY2lzaW9uc+KAlGluZm9ybWluZyB0aGUgZ3VhcmRyYWlscyBJIGNyYWZ0IGZvciBBSS1hdWdtZW50ZWQgc29sdXRpb25zLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJCdWlsZGluZyBhbiBldGhpY2FsIGNoZWNrbGlzdCBmb3IgQUkgZXhwZXJpbWVudHMuXCIsXG4gICAgICBcIlBhaXJpbmcgcXVhbGl0YXRpdmUgaW50ZXJ2aWV3cyB3aXRoIG1vZGVsIG1ldHJpY3MuXCIsXG4gICAgICBcIkRvY3VtZW50aW5nIHByb21wdCBkZXNpZ24gcGF0dGVybnMgZm9yIG15IHRlYW0uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHQ6IFwiTm93IFJlYWRpbmdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0ZWFtOiBUZWFtU25hcHNob3QgPSB7XG4gIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgZGl2YXJUZWFtUGhvdG9Bc3NldCwgXCJNYXNpaCBTYWRyaSB3aXRoIHRoZSBEaXZhciBwcm9kdWN0IHRlYW1cIiksXG4gIGNhcHRpb246XG4gICAgXCJEaXZhciBQcm9kdWN0IEV4cGVyaWVuY2UgVGVhbSDigJQgY29sbGFib3JhdGluZyBhY3Jvc3MgcmVzZWFyY2gsIHByb2R1Y3QgZGVzaWduLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gIHRpdGxlOiBcIk15IERpdmFyIFByb2R1Y3QgVGVhbVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlRoZXNlIGFyZSB0aGUgdGFsZW50ZWQgY29sbGVhZ3VlcyBJJ20gcHJvdWQgdG8gY29sbGFib3JhdGUgd2l0aCBhdCBEaXZhci4gVG9nZXRoZXIsIG91ciAzMi1wZXJzb24gcHJvZHVjdCBvcmdhbml6YXRpb24gYmxlbmRzIGRlc2lnbiwgcmVzZWFyY2gsIHByb2R1Y3QsIGFuZCBlbmdpbmVlcmluZyB0byBzaGlwIGV4cGVyaWVuY2VzIHRoYXQgcHJvdGVjdCBhbmQgZW1wb3dlciBtaWxsaW9ucyBvZiB1c2Vycy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBlZHVjYXRpb246IFJlYWRvbmx5QXJyYXk8RWR1Y2F0aW9uSXRlbT4gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJEZWdyZWVcIixcbiAgICBkYXRlOiBcIjIwMTUg4oCTIDIwMThcIixcbiAgICB0aXRsZTogXCJCU2MgaW4gUHJvamVjdCBNYW5hZ2VtZW50IEVuZ2luZWVyaW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUGF5YW1lIE5vb3IgVW5pdmVyc2l0eVwiLFxuICAgIGRldGFpbHM6IFtcbiAgICAgIFwiVGVhY2hpbmcgQXNzaXN0YW50LCBhcHBvaW50ZWQgYnkgRHIuIEUuIFJhamFiaSwgSGVhZCBvZiB0aGUgU2NpZW5jZSBDb21taXR0ZWVcIixcbiAgICAgIFwiQWN0aXZlIE1lbWJlciBvZiB0aGUgQ2l2aWwgRW5naW5lZXJpbmcgYW5kIFByb2plY3QgTWFuYWdlbWVudCBTY2llbnRpZmljIFNvY2lldHlcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQXNzb2NpYXRlXCIsXG4gICAgZGF0ZTogXCIyMDE0XCIsXG4gICAgdGl0bGU6IFwiQXNzb2NpYXRlIGluIE1lY2hhbmljYWwgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJCdS1BbGkgU2luYSBVbml2ZXJzaXR5XCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJEaXBsb21hXCIsXG4gICAgZGF0ZTogXCIyMDA5XCIsXG4gICAgdGl0bGU6IFwiRGlwbG9tYSBpbiBNYXRoZW1hdGljcyBhbmQgUGh5c2ljc1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIk5hdGlvbmFsIE9yZ2FuaXphdGlvbiBmb3IgRGV2ZWxvcG1lbnQgb2YgRXhjZXB0aW9uYWwgVGFsZW50cyAoU2FtcGFkKVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNlcnRpZmljYXRlczogUmVhZG9ubHlBcnJheTxDZXJ0aWZpY2F0ZUl0ZW0+ID0gW1xuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAyNVwiLFxuICAgIHRpdGxlOiBcIkRhdGEgQW5hbHlzaXMgQm9vdENhbXBcIixcbiAgICBpbnN0aXR1dGlvbjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBob3VyczogXCIxNzBoXCIsXG4gICAgdG9waWNzOlxuICAgICAgXCJEYXRhIFByZXByb2Nlc3NpbmcsIEJ1c2luZXNzIE1ldHJpY3MsIEJJIFRvb2xzLCBJbnRyb2R1Y3RvcnkgUHl0aG9uLCBTdG9yeXRlbGxpbmcgd2l0aCBEYXRhLCBTdGF0aXN0aWNhbCBJbmZlcmVuY2UsIEEvQiBUZXN0aW5nXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJMYW5ndWFnZVwiLFxuICAgIGRhdGU6IFwiTWF5IDIwMjJcIixcbiAgICB0aXRsZTogXCJJRUxUUyAoQWNhZGVtaWMpXCIsXG4gICAgaW5zdGl0dXRpb246IFwiSW50ZXJuYXRpb25hbCBEZXZlbG9wbWVudCBQcm9ncmFtIChJRFApXCIsXG4gICAgc2NvcmU6IFwiT3ZlcmFsbCBTY29yZTogNy4wXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDIxXCIsXG4gICAgdGl0bGU6IFwiQ29uZHVjdGluZyBVc2FiaWxpdHkgVGVzdGluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIlRoZSBJbnRlcmFjdGlvbiBEZXNpZ24gRm91bmRhdGlvblwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIlNlcHRlbWJlciAyMDIxXCIsXG4gICAgdGl0bGU6IFwiQ29tcGxldGUgRmlnbWEgTWVnYWNvdXJzZVwiLFxuICAgIGluc3RpdHV0aW9uOiBcIk9ubGluZSBDb3Vyc2UgLSBVZGVteVwiLFxuICAgIGhvdXJzOiBcIjQyaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQm9vdENhbXBcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAxOVwiLFxuICAgIHRpdGxlOiBcIlVJL1VYIERlc2lnbiBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE1MGhcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAxOVwiLFxuICAgIHRpdGxlOiBcIlByb2R1Y3QgYW5kIEFkdmFuY2VkIFVYIERlc2lnblwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlNoYXJpZiBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3kgJiBVbml2ZXJzaXR5IG9mIFRlaHJhblwiLFxuICAgIGhvdXJzOiBcIjk4aFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJDYXRpYSBDZXJ0aWZpY2F0ZSDigJMgUHJvZmVzc2lvbmFsIDNEIE1vZGVsaW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiSXJhbiBDYXRpYSBDb21tdW5pdHlcIixcbiAgICBzY29yZTogXCJHcmFkZTogMTAwIG91dCBvZiAxMDBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VzOiBSZWFkb25seUFycmF5PFJlZmVyZW5jZUl0ZW0+ID0gW1xuICB7XG4gICAgbmFtZTogXCJTYWVlZCBBYm9sZ2hhc2VtaVwiLFxuICAgIHJvbGU6IFwiUHJvZHVjdCBEZXNpZ24gTGVhZCBhdCBTbmFwcEZvb2RcIixcbiAgICBkYXRlOiBcIkp1bHkgMzAsIDIwMjEg4oCiIFJlcG9ydGVkIGRpcmVjdGx5IHRvIE1hc2loXCIsXG4gICAgdGV4dDogXCJJIGhhZCB0aGUgcHJpdmlsZWdlIG9mIHdvcmtpbmcgY2xvc2VseSB3aXRoIE1hc2loIGZvciBhIHllYXIuIFN0YXJ0aW5nIG15IHByb2Zlc3Npb25hbCBqb3VybmV5IHdpdGggaGltIHdhcyB0cnVseSBmb3J0dW5hdGU7IGhlJ3Mgbm90IG9ubHkgZW1wYXRoZXRpYyB0b3dhcmRzIGNvbGxlYWd1ZXMgYnV0IGFsc28gYWRlcHQgYXQgcHJpb3JpdGl6aW5nIHRhc2tzIGJhc2VkIG9uIGluZGl2aWR1YWwgc3RyZW5ndGhzIGFuZCBhc3NpZ25pbmcgdGhlbSBhY2NvcmRpbmdseS4gTWFzaWggcGxhY2VzIHNpZ25pZmljYW50IGVtcGhhc2lzIG9uIHBlcnNvbmFsIGdyb3d0aCwgb2ZmZXJpbmcgcHJhY3RpY2FsIHJlc291cmNlcyB0YWlsb3JlZCB0byB0ZWFtIG1lbWJlcnMnIGNvbXBldGVuY2llcy4gV29ya2luZyBhbG9uZ3NpZGUgaGltIHdhcyBib3RoIGVuam95YWJsZSBhbmQgZW5yaWNoaW5nLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYWVlZC1hYm9sZ2hhc2VtaS9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWxpIEF6YWRlaFwiLFxuICAgIHJvbGU6IFwiU29mdHdhcmUgRW5naW5lZXIgYXQgVXNlclRlc3RpbmdcIixcbiAgICBkYXRlOiBcIkp1bHkgMzEsIDIwMjEg4oCiIE1hc2loJ3MgdGVhY2hlclwiLFxuICAgIHRleHQ6IFwiTWFzaWggaXMgb25lIG9mIG15IHByaXZpbGVnZWQgc3R1ZGVudHMgd2hvIGlzIGRldGVybWluZWQgdG8gaW1wcm92ZSBoaXMga25vd2xlZGdlIGFuZCBza2lsbHMuIEhpcyBjb21taXRtZW50IGFuZCBwdW5jdHVhbGl0eSBpbiBkZWxpdmVyaW5nIGFzc2lnbm1lbnRzIGFyZSBjb21tZW5kYWJsZS4gSW4gbXkgb3BpbmlvbiwgaGlzIGludGVyZXN0IGluIGxlYXJuaW5nIGhhcyBiZWVuIG9uZSBvZiB0aGUga2V5IHJlYXNvbnMgZm9yIGhpcyBzdWNjZXNzLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGktYXphZGVoL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJIb3NzZWluIE1haG1vdWR2YW5kXCIsXG4gICAgcm9sZTogXCJEZXNpZ24gTGVhZCBhdCBTZXRhcmUgQXZhbCAoTUNJKVwiLFxuICAgIGRhdGU6IFwiTWFyY2ggMTAsIDIwMjEg4oCiIEhvc3NlaW4gbWFuYWdlZCBNYXNpaCBkaXJlY3RseVwiLFxuICAgIHRleHQ6IFwiSSBoYXZlIGtub3duIE1hc2loIHNpbmNlIDIwMTgsIGFuZCBmcm9tIHRoZSBiZWdpbm5pbmcsIGhpcyBwb3RlbnRpYWwgdGFsZW50IHdhcyBldmlkZW50LCBtYXJraW5nIHRoZSBzdGFydCBvZiBvdXIgY29sbGFib3JhdGl2ZSBqb3VybmV5LiBGb3IgY29uc2lzdGVudCwgdG9wLXF1YWxpdHkgZGVzaWduLCB5b3Ugb25seSBuZWVkIHRvIGdpdmUgTWFzaWggdGhlIHJhdyBkYXRhIGFuZCBhbnkgdW5jZXJ0YWludGllcy4gV2hpbGUgd29ya2luZyB0b2dldGhlciBvbiB0aGUgcHJvZHVjdCB0ZWFtIGF0IFNldGFyZSBBdmFsIENvbXBhbnksIGhpcyBleHBlcnRpc2Ugd2FzIGNydWNpYWwgaW4gcHJvYmxlbSBkZWZpbml0aW9uLCBzb2x1dGlvbiBmaW5kaW5nLCBhbmQgZGVzaWduaW5nIGZsb3dzLiBUaGUgb3V0Y29tZXMgb2YgaGlzIHByb2Zlc3Npb25hbCBhbmQgbWV0aWN1bG91c2x5IGNyYWZ0ZWQgZGVzaWducyBoYXZlIGFsd2F5cyBiZWVuIG91dHN0YW5kaW5nLiBIZSBpcyBhIGNvbnN1bW1hdGUgcHJvZmVzc2lvbmFsLCBhbmQgSSBoaWdobHkgcmVjb21tZW5kIGhpbS5cIixcbiAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaG9zc2Vpbm1haG1vdWR2YW5kL1wiLFxuICB9LFxuXTtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGdhbGxlcnksIHN0b3J5SGVybyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuY29uc3QgaGVyb0ltYWdlID0gZ2FsbGVyeVswXT8uaW1hZ2U7XG5cbmNvbnN0IE15U3RvcnlTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIlByb2ZpbGVQYWdlXCIsXG4gIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIE15IFN0b3J5XCIsXG4gIGRlc2NyaXB0aW9uOiBzdG9yeUhlcm8uZGVzY3JpcHRpb24sXG4gIHVybDogYCR7c2l0ZVVybH0vbXktc3RvcnlgLFxuICBpbWFnZTogaGVyb0ltYWdlPy5zcmMsXG4gIHByaW1hcnlUb3BpYzoge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpXCIsXG4gICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICBzYW1lQXM6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL0BtYXNpaFwiLFxuICAgICAgXCJodHRwczovL21hc2loLmZyYW1lci53ZWJzaXRlL1wiLFxuICAgIF0sXG4gIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgTXlTdG9yeVBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJNeSBTdG9yeSDigJQgTWFzaWggU2FkcmkncyBwYXRoIGFzIGEgcHJvZHVjdCBkZXNpZ25lclwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkxlYXJuIGhvdyBNYXNpaCBTYWRyaSBibGVuZHMgbWVudG9yc2hpcCwgZXhwZXJpbWVudGF0aW9uLCBhbmQgY3JhZnQgdG8gZGVzaWduIGh1bWFuIGV4cGVyaWVuY2Vz4oCUZnJvbSBjbGFzc3Jvb20gdG8gcHJvZHVjdCBsYXVuY2hlcy5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvbXktc3RvcnlcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJwcm9maWxlXCIsXG4gICAgaW1hZ2U6IGhlcm9JbWFnZVxuICAgICAgPyB7XG4gICAgICAgICAgdXJsOiBoZXJvSW1hZ2Uuc3JjLFxuICAgICAgICAgIGFsdDogaGVyb0ltYWdlLmFsdCxcbiAgICAgICAgICB3aWR0aDogaGVyb0ltYWdlLndpZHRoID8/IDEyMDAsXG4gICAgICAgICAgaGVpZ2h0OiBoZXJvSW1hZ2UuaGVpZ2h0ID8/IDYzMCxcbiAgICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQsXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBNeVN0b3J5U3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVzU2VjdGlvblwiO1xuaW1wb3J0IEVkdWNhdGlvblNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9FZHVjYXRpb25TZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IFBoaWxvc29waHlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUGhpbG9zb3BoeVNlY3Rpb25cIjtcbmltcG9ydCBQaG90b0dhbGxlcnlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUGhvdG9HYWxsZXJ5U2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdKb3VybmV5U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1JlYWRpbmdKb3VybmV5U2VjdGlvblwiO1xuaW1wb3J0IFJlZmVyZW5jZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVmZXJlbmNlc1NlY3Rpb25cIjtcbmltcG9ydCBUZWFtU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1RlYW1TZWN0aW9uXCI7XG5pbXBvcnQge1xuICBib29rcyxcbiAgY2VydGlmaWNhdGVzLFxuICBlZHVjYXRpb24sXG4gIGVtb2ppTGlzdCxcbiAgZ2FsbGVyeSxcbiAgcGhpbG9zb3BoeVRleHQsXG4gIHJlYWRpbmdKb3VybmV5LFxuICByZWZlcmVuY2VzLFxuICBzdG9yeUhlcm8sXG4gIHRlYW0sXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHsgTXlTdG9yeVBhZ2VNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBNeVN0b3J5UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uTXlTdG9yeVBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e3N0b3J5SGVyb30gLz5cbiAgICAgIDxQaG90b0dhbGxlcnlTZWN0aW9uIGl0ZW1zPXtnYWxsZXJ5fSAvPlxuICAgICAgPFBoaWxvc29waHlTZWN0aW9uIHBoaWxvc29waHlUZXh0PXtwaGlsb3NvcGh5VGV4dH0gZW1vamlMaXN0PXtlbW9qaUxpc3R9IC8+XG4gICAgICA8UmVhZGluZ0pvdXJuZXlTZWN0aW9uIGpvdXJuZXk9e3JlYWRpbmdKb3VybmV5fSBib29rcz17Ym9va3N9IC8+XG4gICAgICA8VGVhbVNlY3Rpb24gdGVhbT17dGVhbX0gLz5cbiAgICAgIDxFZHVjYXRpb25TZWN0aW9uIGl0ZW1zPXtlZHVjYXRpb259IC8+XG4gICAgICA8Q2VydGlmaWNhdGVzU2VjdGlvbiBjZXJ0aWZpY2F0ZXM9e2NlcnRpZmljYXRlc30gLz5cbiAgICAgIDxSZWZlcmVuY2VzU2VjdGlvbiByZWZlcmVuY2VzPXtyZWZlcmVuY2VzfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlTdG9yeVBhZ2U7XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSwyREFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsb0JBQW9COzs7O0FDS3hCLElBQU0sZ0JBQWdCO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFFBQVE7QUFBQSxzQkFFUix1QkFxQkUsZUFyQkY7QUFBQSxFQUNFLFNBQVM7QUFBQSxFQUNULFlBQVksVUFBVSxXQUFXLFdBQVc7QUFBQSxFQUM1QyxXQUFXO0FBQUEsRUFIYixVQXFCRTtBQUFBLEtBaEJFLFFBQVEsNEJBQ1IsdUJBT0UsZUFQRjtBQUFBLE1BQU8sV0FBVTtBQUFBLE1BQU0sU0FBUztBQUFBLE1BQUcsWUFBVztBQUFBLE1BQTlDLFVBT0U7QUFBQSxRQU5DO0FBQUEsUUFDQSwyQkFDQyx1QkFFRSxvQkFGRjtBQUFBLFVBQVksU0FBUTtBQUFBLFVBQU0sT0FBTTtBQUFBLFVBQWhDLFVBQ0c7QUFBQSxXQURILGlDQUVFO0FBQUE7QUFBQSxPQUxOLGdDQU9FO0FBQUEsb0JBRUosdUJBQWtDLG9CQUFsQztBQUFBLE1BQVksU0FBUTtBQUFBLE1BQXBCLFVBQTBCO0FBQUEsT0FBMUIsaUNBQWtDO0FBQUEsSUFDakMsNEJBQ0MsdUJBRUUsb0JBRkY7QUFBQSxNQUFZLFNBQVE7QUFBQSxNQUFZLE9BQU07QUFBQSxNQUFpQixJQUFJLEVBQUUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksSUFBSTtBQUFBLE1BQXZILFVBQ0c7QUFBQSxPQURILGlDQUVFO0FBQUE7QUFBQSxHQW5CTixnQ0Fx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QUFLLFVBQVU7QUFBQSxNQUNmLE9BQU8sVUFBVSxTQUFTO0FBQUEsTUFDMUIsUUFBUSxVQUFVLFVBQVU7QUFBQSxJQUM5QixJQUNBO0FBQUEsRUFDTjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOzs7O0FDcEJBLElBQU0sY0FBYyxNQUFNO0FBQUEsRUFDeEIsdUJBQ0U7QUFBQSxjQVdFO0FBQUEsc0JBVkEseUJBQUMsYUFBRDtBQUFBLFdBQVM7QUFBQSxTQUFULGlDQUE4QjtBQUFBLHNCQUU5Qix5QkFBQyxxQkFBRDtBQUFBLFFBQWEsTUFBTTtBQUFBLFNBQW5CLGlDQUE4QjtBQUFBLHNCQUM5Qix5QkFBQyw2QkFBRDtBQUFBLFFBQXFCLE9BQU87QUFBQSxTQUE1QixpQ0FBcUM7QUFBQSxzQkFDckMseUJBQUMsMkJBQUQ7QUFBQSxRQUFtQjtBQUFBLFFBQWdDO0FBQUEsU0FBbkQsaUNBQXlFO0FBQUEsc0JBQ3pFLHlCQUFDLCtCQUFEO0FBQUEsUUFBdUIsU0FBUztBQUFBLFFBQWdCO0FBQUEsU0FBaEQsaUNBQThEO0FBQUEsc0JBQzlELHlCQUFDLHFCQUFEO0FBQUEsUUFBYTtBQUFBLFNBQWIsaUNBQXlCO0FBQUEsc0JBQ3pCLHlCQUFDLDBCQUFEO0FBQUEsUUFBa0IsT0FBTztBQUFBLFNBQXpCLGlDQUFvQztBQUFBLHNCQUNwQyx5QkFBQyw2QkFBRDtBQUFBLFFBQXFCO0FBQUEsU0FBckIsaUNBQWlEO0FBQUEsc0JBQ2pELHlCQUFDLDJCQUFEO0FBQUEsUUFBbUI7QUFBQSxTQUFuQixpQ0FBMkM7QUFBQTtBQUFBLEtBVjdDLGdDQVdFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMzNDNzRCOTlDQkQzQTQwMjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
