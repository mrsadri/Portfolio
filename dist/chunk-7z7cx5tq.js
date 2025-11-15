import {
  Pill_default,
  createImageResource
} from "./chunk-rwk54k0r.js";
import {
  Seo_default,
  site_default
} from "./chunk-4q5mgts6.js";
import"./chunk-56dhb304.js";
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
} from "./chunk-pzn0e5q4.js";

// src/features/my-story/components/HeroSection.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var HeroSection = ({ hero }) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
  component: "header",
  sx: (theme) => ({
    py: { xs: 10, md: 14 },
    backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.6)" : "rgba(8, 14, 26, 0.85)"
  }),
  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
      spacing: { xs: 3, md: 4 },
      sx: {
        maxWidth: 840,
        mx: "auto",
        textAlign: { xs: "left", md: "center" }
      },
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
          variant: "display",
          children: hero.title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
          variant: "hero",
          color: "text.secondary",
          children: hero.subtitle
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
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

// node_modules/@mui/icons-material/esm/AutoAwesomeRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var AutoAwesomeRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded");

// src/features/my-story/components/SectionHeader.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  icon,
  align = "center"
}) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
  spacing: 1.5,
  alignItems: align === "center" ? "center" : "flex-start",
  textAlign: align,
  children: [
    (icon || eyebrow) && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
      direction: "row",
      spacing: 1,
      alignItems: "center",
      children: [
        icon,
        eyebrow && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
          variant: "tag",
          color: "brand.secondary",
          children: eyebrow
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
      variant: "h2",
      children: title
    }, undefined, false, undefined, this),
    subtitle && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
      variant: "subtitle1",
      color: "text.secondary",
      sx: { maxWidth: align === "center" ? 720 : 640, lineHeight: 1.6 },
      children: subtitle
    }, undefined, false, undefined, this)
  ]
}, undefined, true, undefined, this);
var SectionHeader_default = SectionHeader;

// src/features/my-story/components/SurfaceCard.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var SurfaceCard = ({ sx, children, ...props }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
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

// src/features/my-story/components/OutsideDesignSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var OutsideDesignSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  component: "section",
  sx: { py: { xs: 8, md: 10 } },
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
      spacing: 5,
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SectionHeader_default, {
          eyebrow: "Beyond Design",
          title: "Outside Design",
          icon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(AutoAwesomeRounded_default, {
            color: "primary"
          }, undefined, false, undefined, this),
          align: "left"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: items.map((item, index) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
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
                      justifyContent: "space-between",
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
                    "institution" in item && item.institution && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "subtitle1",
                      color: "text.secondary",
                      children: item.institution
                    }, undefined, false, undefined, this),
                    "details" in item && item.details && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                      component: "ul",
                      spacing: 0.75,
                      sx: { pl: 2, mb: 0 },
                      children: item.details.map((detail) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        component: "li",
                        variant: "body2",
                        color: "text.secondary",
                        children: detail
                      }, detail, false, undefined, this))
                    }, undefined, false, undefined, this),
                    "hours" in item && item.hours && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: item.hours
                    }, undefined, false, undefined, this),
                    "score" in item && item.score && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: item.score
                    }, undefined, false, undefined, this),
                    "topics" in item && item.topics && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: item.topics
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, `${item.title}-${item.date}-${index}`, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var OutsideDesignSection_default = OutsideDesignSection;

// src/features/my-story/components/PhilosophySection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var PhilosophySection = ({ philosophyText, emojiList }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 8, md: 10 },
      borderTop: `1px solid ${theme.palette.divider}`,
      backgroundColor: "transparent"
    },
    children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
        container: true,
        spacing: { xs: 6, md: 8 },
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
              spacing: 2.5,
              children: [
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                  variant: "h3",
                  sx: {
                    fontStyle: "italic",
                    lineHeight: 1.6
                  },
                  children: philosophyText
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
                  sx: {
                    borderLeft: `3px solid ${theme.tokens.colors.primary}`,
                    pl: 2,
                    py: 1
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { lineHeight: 1.7 },
                    children: "I am driven by experiences—designing them, learning from them, and living them deeply."
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.7 },
                  children: "My friends often describe me as someone with layers—curiosity keeps me exploring new crafts, communities, and challenges. It’s how I stay grounded and inspired."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
              spacing: 3.5,
              sx: {
                borderRadius: "48px",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 },
                backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.7)" : "rgba(14, 22, 38, 0.7)"
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
                  spacing: 1.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      children: "These small rituals shape the way I design and collaborate:"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                      variant: "h6",
                      children: "From music and ceramics to plants, cooking, and collaborative games—I’m most alive when I’m building with others."
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
                  direction: "row",
                  spacing: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                  useFlexGap: true,
                  justifyContent: { xs: "flex-start", md: "space-between" },
                  children: emojiList.map((emoji) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
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
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var PhotoGallerySection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
  component: "section",
  sx: {
    pt: { xs: 4, md: 4 },
    pb: { xs: 6, md: 12 }
  },
  children: [
    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
        spacing: { xs: 1.5, md: 1.5 },
        sx: { maxWidth: 720 },
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
            variant: "eyebrow",
            color: "brand.secondary",
            children: "Photo Strip"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
            variant: "h3",
            sx: { fontSize: { xs: "1.75rem", md: "2.5rem" } },
            children: "My Life in Frames"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { fontSize: { xs: "0.9375rem", md: "1rem" } },
            children: "A glimpse into the textures, people, and scenes that shape how I approach product design—unfiltered, a little imperfect, and very alive."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      sx: { mt: { xs: 3, md: 6 } },
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
        sx: {
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          overflowX: { xs: "auto", md: "visible" },
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          },
          WebkitOverflowScrolling: "touch",
          "&::after": {
            content: { xs: '""', md: "none" },
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 30,
            background: (theme) => theme.palette.mode === "light" ? "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9))" : "linear-gradient(to right, transparent, rgba(18, 18, 18, 0.9))",
            pointerEvents: "none",
            zIndex: 1
          }
        },
        children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
          sx: {
            columnCount: { xs: 2, sm: 3, md: 5 },
            columnGap: { xs: 1.5, md: 2.5 },
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "row", md: "unset" },
            gap: { xs: 1.5, md: 0 },
            overflowX: { xs: "auto", md: "visible" },
            scrollSnapType: { xs: "x mandatory", md: "none" },
            scrollBehavior: { xs: "smooth", md: "auto" },
            scrollbarWidth: { xs: "none", md: "auto" },
            msOverflowStyle: { xs: "none", md: "auto" },
            "&::-webkit-scrollbar": {
              display: { xs: "none", md: "auto" }
            },
            WebkitOverflowScrolling: "touch"
          },
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
            sx: {
              breakInside: { md: "avoid" },
              mb: { xs: 0, md: 2.5 },
              borderRadius: (theme) => theme.tokens.radius.surface,
              overflow: "hidden",
              flexShrink: { xs: 0, md: "unset" },
              width: { xs: "200px", md: "auto" },
              scrollSnapAlign: { xs: "start", md: "none" }
            },
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
              component: "img",
              src: item.image.src,
              alt: item.image.alt,
              loading: "lazy",
              sx: {
                width: "100%",
                display: "block",
                objectFit: "cover",
                height: { xs: "auto", md: "auto" }
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
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var ReadingJourneySection = ({ journey, books }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
        spacing: 5,
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(SectionHeader_default, {
            eyebrow: "Reading Journey",
            title: journey.title,
            subtitle: journey.subtitle,
            align: "left"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Grid_default, {
            container: true,
            spacing: 3,
            alignItems: "stretch",
            children: books.map((book) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Grid_default, {
              size: { xs: 12, md: 6 },
              children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(SurfaceCard_default, {
                sx: {
                  height: "100%",
                  display: "flex"
                },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
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
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(CardContent_default, {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      flexGrow: 1
                    },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
                        spacing: 0.75,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                            variant: "caption",
                            color: "text.secondary",
                            children: book.label
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                            variant: "h5",
                            children: book.title
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                            variant: "subtitle1",
                            color: "text.secondary",
                            children: book.author
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                        variant: "body2",
                        color: "text.secondary",
                        children: book.summary
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
                        component: "ul",
                        spacing: 0.75,
                        sx: { pl: 2, mb: 0 },
                        children: book.takeaways.map((takeaway) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                          component: "li",
                          variant: "body2",
                          color: "text.secondary",
                          children: takeaway
                        }, takeaway, false, undefined, this))
                      }, undefined, false, undefined, this),
                      book.highlight && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Pill_default, {
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

// src/features/my-story/components/TeamSection.tsx
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var TeamSection = ({ team }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 10, md: 14 },
      borderTop: `1px solid ${theme.palette.divider}`
    },
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
        sx: {
          display: "grid",
          gridTemplateColumns: { md: "1.15fr 0.85fr" },
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
            sx: {
              position: "relative",
              minHeight: { xs: 360, sm: 420, md: 520 },
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
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
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
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
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
            sx: {
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 5, md: 0 }
            },
            children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Stack_default, {
              spacing: { xs: 3, md: 4 },
              sx: { maxWidth: 520 },
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                  variant: "eyebrow",
                  color: "brand.secondary",
                  children: "Collaborators"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                  variant: "h2",
                  children: team.title
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.8 },
                  children: team.description
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Box_default, {
                  sx: {
                    borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                    pl: 3,
                    py: 1
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Typography_default, {
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
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var MyStoryPage = () => {
  const outsideDesignItems = [
    education[0],
    certificates[0],
    certificates[1]
  ];
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Seo_default, {
        ...MyStoryPageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(HeroSection_default, {
        hero: storyHero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(PhotoGallerySection_default, {
        items: gallery
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(PhilosophySection_default, {
        philosophyText,
        emojiList
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ReadingJourneySection_default, {
        journey: readingJourney,
        books
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(TeamSection_default, {
        team
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(OutsideDesignSection_default, {
        items: outsideDesignItems
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var MyStoryPage_default = MyStoryPage;
export {
  MyStoryPage_default as default
};

//# debugId=0B3CFFD4E89289DA64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BdXRvQXdlc29tZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvU3VyZmFjZUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL091dHNpZGVEZXNpZ25TZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9QaGlsb3NvcGh5U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvUGhvdG9HYWxsZXJ5U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvUmVhZGluZ0pvdXJuZXlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9UZWFtU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3Rvcnkvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9NeVN0b3J5UGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgU3RvcnlIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogU3RvcnlIZXJvO1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cImhlYWRlclwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNilcIiA6IFwicmdiYSg4LCAxNCwgMjYsIDAuODUpXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IDg0MCxcbiAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImxlZnRcIiwgbWQ6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTE5LjQ2IDggLjc5LTEuNzVMMjIgNS40NmMuMzktLjE4LjM5LS43MyAwLS45MWwtMS43NS0uNzlMMTkuNDYgMmMtLjE4LS4zOS0uNzMtLjM5LS45MSAwbC0uNzkgMS43NS0xLjc2Ljc5Yy0uMzkuMTgtLjM5LjczIDAgLjkxbDEuNzUuNzkuNzkgMS43NmMuMTguMzkuNzQuMzkuOTIgME0xMS41IDkuNSA5LjkxIDZjLS4zNS0uNzgtMS40Ny0uNzgtMS44MiAwTDYuNSA5LjUgMyAxMS4wOWMtLjc4LjM2LS43OCAxLjQ3IDAgMS44MmwzLjUgMS41OUw4LjA5IDE4Yy4zNi43OCAxLjQ3Ljc4IDEuODIgMGwxLjU5LTMuNSAzLjUtMS41OWMuNzgtLjM2Ljc4LTEuNDcgMC0xLjgyem03LjA0IDYuNS0uNzkgMS43NS0xLjc1Ljc5Yy0uMzkuMTgtLjM5LjczIDAgLjkxbDEuNzUuNzkuNzkgMS43NmMuMTguMzkuNzMuMzkuOTEgMGwuNzktMS43NSAxLjc2LS43OWMuMzktLjE4LjM5LS43MyAwLS45MWwtMS43NS0uNzktLjc5LTEuNzZjLS4xOC0uMzktLjc0LS4zOS0uOTIgMFwiXG59KSwgJ0F1dG9Bd2Vzb21lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHsgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBTZWN0aW9uSGVhZGVyUHJvcHMgPSB7XG4gIGV5ZWJyb3c/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICBhbGlnbj86IFwiY2VudGVyXCIgfCBcImxlZnRcIjtcbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoe1xuICBleWVicm93LFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIGljb24sXG4gIGFsaWduID0gXCJjZW50ZXJcIixcbn06IFNlY3Rpb25IZWFkZXJQcm9wcykgPT4gKFxuICA8U3RhY2tcbiAgICBzcGFjaW5nPXsxLjV9XG4gICAgYWxpZ25JdGVtcz17YWxpZ24gPT09IFwiY2VudGVyXCIgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCJ9XG4gICAgdGV4dEFsaWduPXthbGlnbn1cbiAgPlxuICAgIHsoaWNvbiB8fCBleWVicm93KSAmJiAoXG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAge2V5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgPC9TdGFjaz5cbiAgICApfVxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAge3N1YnRpdGxlICYmIChcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWF4V2lkdGg6IGFsaWduID09PSBcImNlbnRlclwiID8gNzIwIDogNjQwLCBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICApfVxuICA8L1N0YWNrPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjtcblxuXG4iLAogICAgImltcG9ydCB7IENhcmQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYXJkUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5cbmNvbnN0IFN1cmZhY2VDYXJkID0gKHsgc3gsIGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17e1xuICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAuLi5zeCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VyZmFjZUNhcmQ7XG5cblxuIiwKICAgICJpbXBvcnQgQXV0b0F3ZXNvbWVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BdXRvQXdlc29tZVJvdW5kZWRcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgUGlsbCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBTdXJmYWNlQ2FyZCBmcm9tIFwiLi9TdXJmYWNlQ2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZXJ0aWZpY2F0ZUl0ZW0sIEVkdWNhdGlvbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBPdXRzaWRlRGVzaWduSXRlbSA9IEVkdWNhdGlvbkl0ZW0gfCBDZXJ0aWZpY2F0ZUl0ZW07XG5cbnR5cGUgT3V0c2lkZURlc2lnblNlY3Rpb25Qcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8T3V0c2lkZURlc2lnbkl0ZW0+O1xufTtcblxuY29uc3QgT3V0c2lkZURlc2lnblNlY3Rpb24gPSAoeyBpdGVtcyB9OiBPdXRzaWRlRGVzaWduU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIGV5ZWJyb3c9XCJCZXlvbmQgRGVzaWduXCJcbiAgICAgICAgICB0aXRsZT1cIk91dHNpZGUgRGVzaWduXCJcbiAgICAgICAgICBpY29uPXs8QXV0b0F3ZXNvbWVSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2Ake2l0ZW0udGl0bGV9LSR7aXRlbS5kYXRlfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17aXRlbS5iYWRnZX0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtcImluc3RpdHV0aW9uXCIgaW4gaXRlbSAmJiBpdGVtLmluc3RpdHV0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7XCJkZXRhaWxzXCIgaW4gaXRlbSAmJiBpdGVtLmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHMubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e2RldGFpbH0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtcImhvdXJzXCIgaW4gaXRlbSAmJiBpdGVtLmhvdXJzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ob3Vyc31cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtcInNjb3JlXCIgaW4gaXRlbSAmJiBpdGVtLnNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zY29yZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtcInRvcGljc1wiIGluIGl0ZW0gJiYgaXRlbS50b3BpY3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRvcGljc31cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3V0c2lkZURlc2lnblNlY3Rpb247XG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIFBoaWxvc29waHlTZWN0aW9uUHJvcHMgPSB7XG4gIHBoaWxvc29waHlUZXh0OiBzdHJpbmc7XG4gIGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG5jb25zdCBQaGlsb3NvcGh5U2VjdGlvbiA9ICh7IHBoaWxvc29waHlUZXh0LCBlbW9qaUxpc3QgfTogUGhpbG9zb3BoeVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDggfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BoaWxvc29waHlUZXh0fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICAgICAgICAgICAgcGw6IDIsXG4gICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICBJIGFtIGRyaXZlbiBieSBleHBlcmllbmNlc+KAlGRlc2lnbmluZyB0aGVtLCBsZWFybmluZyBmcm9tIHRoZW0sIGFuZCBsaXZpbmcgdGhlbVxuICAgICAgICAgICAgICAgICAgZGVlcGx5LlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgTXkgZnJpZW5kcyBvZnRlbiBkZXNjcmliZSBtZSBhcyBzb21lb25lIHdpdGggbGF5ZXJz4oCUY3VyaW9zaXR5IGtlZXBzIG1lIGV4cGxvcmluZ1xuICAgICAgICAgICAgICAgIG5ldyBjcmFmdHMsIGNvbW11bml0aWVzLCBhbmQgY2hhbGxlbmdlcy4gSXTigJlzIGhvdyBJIHN0YXkgZ3JvdW5kZWQgYW5kIGluc3BpcmVkLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3BhY2luZz17My41fVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0OHB4XCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC43KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuNylcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgVGhlc2Ugc21hbGwgcml0dWFscyBzaGFwZSB0aGUgd2F5IEkgZGVzaWduIGFuZCBjb2xsYWJvcmF0ZTpcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICBGcm9tIG11c2ljIGFuZCBjZXJhbWljcyB0byBwbGFudHMsIGNvb2tpbmcsIGFuZCBjb2xsYWJvcmF0aXZlIGdhbWVz4oCUSeKAmW0gbW9zdFxuICAgICAgICAgICAgICAgICAgYWxpdmUgd2hlbiBJ4oCZbSBidWlsZGluZyB3aXRoIG90aGVycy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIHVzZUZsZXhHYXBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyB4czogXCJmbGV4LXN0YXJ0XCIsIG1kOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Vtb2ppTGlzdC5tYXAoKGVtb2ppKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogNTYsIHNtOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IHhzOiBcImF1dG9cIiwgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlbW9qaX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBoaWxvc29waHlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgR2FsbGVyeUl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBQaG90b0dhbGxlcnlTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW1zOiBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPjtcbn07XG5cbmNvbnN0IFBob3RvR2FsbGVyeVNlY3Rpb24gPSAoeyBpdGVtcyB9OiBQaG90b0dhbGxlcnlTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgIHN4PXt7XG4gICAgICBwdDogeyB4czogNCwgbWQ6IDQgfSxcbiAgICAgIHBiOiB7IHhzOiA2LCBtZDogMTIgfSxcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIG1kOiAxLjUgfX0gc3g9e3sgbWF4V2lkdGg6IDcyMCB9fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgIFBob3RvIFN0cmlwXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMS43NXJlbVwiLCBtZDogXCIyLjVyZW1cIiB9IH19PlxuICAgICAgICAgIE15IExpZmUgaW4gRnJhbWVzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IFwiMC45Mzc1cmVtXCIsIG1kOiBcIjFyZW1cIiB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBBIGdsaW1wc2UgaW50byB0aGUgdGV4dHVyZXMsIHBlb3BsZSwgYW5kIHNjZW5lcyB0aGF0IHNoYXBlIGhvdyBJIGFwcHJvYWNoIHByb2R1Y3RcbiAgICAgICAgICBkZXNpZ27igJR1bmZpbHRlcmVkLCBhIGxpdHRsZSBpbXBlcmZlY3QsIGFuZCB2ZXJ5IGFsaXZlLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgZGlzYWJsZUd1dHRlcnMgbWF4V2lkdGg9e2ZhbHNlfSBzeD17eyBtdDogeyB4czogMywgbWQ6IDYgfSB9fT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweDogeyB4czogMiwgc206IDQsIG1kOiA2IH0sXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBvdmVyZmxvd1g6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCJ2aXNpYmxlXCIgfSxcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLFxuICAgICAgICAgIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG4gICAgICAgICAgLy8gVmlzdWFsIGluZGljYXRvciBmb3IgaG9yaXpvbnRhbCBzY3JvbGwgb24gbW9iaWxlXG4gICAgICAgICAgXCImOjphZnRlclwiOiB7XG4gICAgICAgICAgICBjb250ZW50OiB7IHhzOiAnXCJcIicsIG1kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkpXCJcbiAgICAgICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgcmdiYSgxOCwgMTgsIDE4LCAwLjkpKVwiLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBjb2x1bW5Db3VudDogeyB4czogMiwgc206IDMsIG1kOiA1IH0sXG4gICAgICAgICAgICBjb2x1bW5HYXA6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgZGlzcGxheTogeyB4czogXCJmbGV4XCIsIG1kOiBcImJsb2NrXCIgfSxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHsgeHM6IFwicm93XCIsIG1kOiBcInVuc2V0XCIgfSxcbiAgICAgICAgICAgIGdhcDogeyB4czogMS41LCBtZDogMCB9LFxuICAgICAgICAgICAgb3ZlcmZsb3dYOiB7IHhzOiBcImF1dG9cIiwgbWQ6IFwidmlzaWJsZVwiIH0sXG4gICAgICAgICAgICBzY3JvbGxTbmFwVHlwZTogeyB4czogXCJ4IG1hbmRhdG9yeVwiLCBtZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgIHNjcm9sbEJlaGF2aW9yOiB7IHhzOiBcInNtb290aFwiLCBtZDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiB7IHhzOiBcIm5vbmVcIiwgbWQ6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICBtc092ZXJmbG93U3R5bGU6IHsgeHM6IFwibm9uZVwiLCBtZDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiBcIm5vbmVcIiwgbWQ6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0uY2FwdGlvbn0tJHtpdGVtLmltYWdlLnNyY31gfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJyZWFrSW5zaWRlOiB7IG1kOiBcImF2b2lkXCIgfSxcbiAgICAgICAgICAgICAgICBtYjogeyB4czogMCwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgZmxleFNocmluazogeyB4czogMCwgbWQ6IFwidW5zZXRcIiB9LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiBcIjIwMHB4XCIsIG1kOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogeyB4czogXCJzdGFydFwiLCBtZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9HYWxsZXJ5U2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU3VyZmFjZUNhcmQgZnJvbSBcIi4vU3VyZmFjZUNhcmRcIjtcbmltcG9ydCB0eXBlIHsgQm9vaywgUmVhZGluZ0pvdXJuZXkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBSZWFkaW5nSm91cm5leVNlY3Rpb25Qcm9wcyA9IHtcbiAgam91cm5leTogUmVhZGluZ0pvdXJuZXk7XG4gIGJvb2tzOiBSZWFkb25seUFycmF5PEJvb2s+O1xufTtcblxuY29uc3QgUmVhZGluZ0pvdXJuZXlTZWN0aW9uID0gKHsgam91cm5leSwgYm9va3MgfTogUmVhZGluZ0pvdXJuZXlTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICBleWVicm93PVwiUmVhZGluZyBKb3VybmV5XCJcbiAgICAgICAgICAgIHRpdGxlPXtqb3VybmV5LnRpdGxlfVxuICAgICAgICAgICAgc3VidGl0bGU9e2pvdXJuZXkuc3VidGl0bGV9XG4gICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJzdHJldGNoXCI+XG4gICAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2Jvb2sudGl0bGV9PlxuICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtib29rLmNvdmVyLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtib29rLmNvdmVyLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGdhcDogMixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNzV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2subGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntib29rLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rLnN1bW1hcnl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rLnRha2Vhd2F5cy5tYXAoKHRha2Vhd2F5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17dGFrZWF3YXl9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Rha2Vhd2F5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5oaWdobGlnaHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Ym9vay5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhZGluZ0pvdXJuZXlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFRlYW1TbmFwc2hvdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFRlYW1TZWN0aW9uUHJvcHMgPSB7XG4gIHRlYW06IFRlYW1TbmFwc2hvdDtcbn07XG5cbmNvbnN0IFRlYW1TZWN0aW9uID0gKHsgdGVhbSB9OiBUZWFtU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgc3g9e3tcbiAgICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgZGlzYWJsZUd1dHRlcnMgbWF4V2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHsgbWQ6IFwiMS4xNWZyIDAuODVmclwiIH0sXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IDM2MCwgc206IDQyMCwgbWQ6IDUyMCB9LFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICBzcmM9e3RlYW0uaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICBhbHQ9e3RlYW0uaW1hZ2UuYWx0fVxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogeyB4czogMTYsIG1kOiAyNCB9LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IDE2LCBtZDogMzIgfSxcbiAgICAgICAgICAgICAgICBweDogMixcbiAgICAgICAgICAgICAgICBweTogMC43NSxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMucGlsbCxcbiAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEycHgpXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcyKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGVhbS5jYXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBzbTogNiwgbWQ6IDggfSxcbiAgICAgICAgICAgICAgcHk6IHsgeHM6IDUsIG1kOiAwIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fSBzeD17eyBtYXhXaWR0aDogNTIwIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgQ29sbGFib3JhdG9yc1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0ZWFtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuOCB9fT5cbiAgICAgICAgICAgICAgICB7dGVhbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnNlY29uZGFyeX1gLFxuICAgICAgICAgICAgICAgICAgcGw6IDMsXG4gICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICDigJxEZXNpZ25pbmcgd2l0aCBwZW9wbGUgSSB0cnVzdCBrZWVwcyB0aGUgd29yayBodW1ibGUsIGFtYml0aW91cywgYW5kIGpveWZ1bC7igJ1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1TZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IGNyZWF0aXZlQ29uZmlkZW5jZUNvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9jcmVhdGl2ZS1jb25maWRlbmNlLmpwZ1wiO1xuaW1wb3J0IGRlc2lnbk9mRXZlcnlkYXlUaGluZ3NDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3MvZGVzaWduLW9mLWV2ZXJ5ZGF5LXRoaW5ncy5qcGdcIjtcbmltcG9ydCBzcHJpbnRDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3Mvc3ByaW50LmpwZ1wiO1xuaW1wb3J0IGFpQW5kVXhDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvYm9va3MvYWktYW5kLXV4LmpwZ1wiO1xuaW1wb3J0IGRpdmFyVGVhbVBob3RvQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9kaXZhci10ZWFtLmpwZ1wiO1xuaW1wb3J0IG1hc2loQ2hpbGRQaG90b0Fzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtY2hpbGQtcGhvdG8ucG5nXCI7XG5pbXBvcnQgbWFzaWhDb2ZmZWVBcnRpc3RBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLWNvZmZlZS1hcnRpc3QucG5nXCI7XG5pbXBvcnQgbWFzaWhNb3VudGFpbmVlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtbW91bnRhaW5lZXIucG5nXCI7XG5pbXBvcnQgbWFzaWhVeERlc2lnbmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC11eC1kZXNpZ25lci5wbmdcIjtcbmltcG9ydCBtYXNpaFdvb2RDYXJ2ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXdvb2QtY2FydmVyLnBuZ1wiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VSZXNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIEJvb2ssXG4gIENlcnRpZmljYXRlSXRlbSxcbiAgRWR1Y2F0aW9uSXRlbSxcbiAgR2FsbGVyeUl0ZW0sXG4gIFJlYWRpbmdKb3VybmV5LFxuICBSZWZlcmVuY2VJdGVtLFxuICBTdG9yeUhlcm8sXG4gIFRlYW1TbmFwc2hvdCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yeUhlcm86IFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IFwiSSBhbSBNYXNpaFwiLFxuICBzdWJ0aXRsZTogXCJBIENyZWF0b3Igb2YgTWVhbmluZ2Z1bCBFeHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIk91dHNpZGUgb2YgZGVzaWduLCBJIGVuam95IGV4cGxvcmluZyBjaGFsbGVuZ2VzIGFuZCBsZWFybmluZyB0aHJvdWdoIGV4cGVyaWVuY2VzIGxpa2UgbW91bnRhaW5lZXJpbmcsIHdvb2QgY2FydmluZywgYW5kIHRlYWNoaW5nLiBUaGVzZSBwdXJzdWl0cyBoYXZlIHRhdWdodCBtZSBwYXRpZW5jZSwgcmVzaWxpZW5jZSwgYW5kIGVtcGF0aHksIHdoaWNoIEkgYnJpbmcgaW50byBteSB3b3JrIHRvIGNyYWZ0IG1lYW5pbmdmdWwgYW5kIHRob3VnaHRmdWwgZGVzaWducy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5OiBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPiA9IFtcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgbWFzaWhDaGlsZFBob3RvQXNzZXQsXG4gICAgICBcIk1hc2loIGFzIGEgY2hpbGQgaW4gaGlzIGRhZCdzIGphY2tldFwiLFxuICAgICksXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIENoaWxkIGluIE15IERhZCdzIEphY2tldFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYXNpaE1vdW50YWluZWVyQXNzZXQsIFwiTWFzaWggYXMgYSBtb3VudGFpbmVlclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgTW91bnRhaW5lZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhDb2ZmZWVBcnRpc3RBc3NldCwgXCJNYXNpaCdzIGxhdHRlIGFydFwiKSxcbiAgICBjYXB0aW9uOiBcIk15IGFydCBvbiBhIExhdHRlXCIsXG4gICAgc3ViY2FwdGlvbjogXCJMYXR0ZSBBcnQgYnkgbWUgOilcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhVeERlc2lnbmVyQXNzZXQsIFwiTWFzaWggYXMgYSBVWCBEZXNpZ25lclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgVVggRGVzaWduZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhXb29kQ2FydmVyQXNzZXQsIFwiTWFzaWggYXMgYSB3b29kIGNhcnZlclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgV29vZCBDYXJ2ZXJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwaGlsb3NvcGh5VGV4dCA9XG4gIFwiSSBkZXNpZ24gZXhwZXJpZW5jZXMgdGhhdCBub3Qgb25seSBzb2x2ZSBwcm9ibGVtcyBidXQgY3JlYXRlIHZhbHVlIGZvciBib3RoIGJ1c2luZXNzZXMgYW5kIHVzZXJzLiBJIGVuam95IGRpZ2dpbmcgZGVlcCBpbnRvIGNoYWxsZW5nZXMsIGFuYWx5emluZyB0aGVtIHRob3JvdWdobHksIGFuZCBjb21pbmcgdXAgd2l0aCBzb2x1dGlvbnMgdGhhdCB0cnVseSBtYWtlIGEgZGlmZmVyZW5jZS5cIjtcblxuZXhwb3J0IGNvbnN0IGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW10gPSBbXCLimJXvuI9cIiwgXCLwn6eX8J+PvVwiLCBcIvCfkrtcIiwgXCLwn5OaXCIsIFwi8J+OqFwiLCBcIvCfqrRcIl07XG5cbmV4cG9ydCBjb25zdCByZWFkaW5nSm91cm5leTogUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBcIkRlc2lnbiBCb29rcyBHdWlkaW5nIE15IENyYWZ0XCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiSW5zcGlyZWQgYnkgdGhlIGxpdmluZyBib29rc2hlbHZlcyBzaGFyZWQgYnkgcGVlcnMgbGlrZSBLeWxlIEpvaG5zdG9uLCBTYXd5ZXIgSG9sbGVuc2hlYWQsIEphc29uIFpvb2ssIGFuZCBBbXkgTWNMYXkgUGF0ZXJzb24sIEkga2VlcCBhIGN1cmF0ZWQgcmVjb3JkIG9mIHRoZSBpZGVhcyB0aGF0IHNoYXBlIG15IHByYWN0aWNlLlwiLFxuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IFwiQ3VycmVudGx5IHJlYWRpbmdcIixcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29rczogUmVhZG9ubHlBcnJheTxCb29rPiA9IFtcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQsXG4gICAgICBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzIGJvb2sgY292ZXJcIixcbiAgICApLFxuICAgIHRpdGxlOiBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzXCIsXG4gICAgYXV0aG9yOiBcIkRvbiBOb3JtYW5cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMTggwrcgUmV2aXNpdGVkIDIwMjRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJOb3JtYW7igJlzIGZyYW1ld29yayBmb3IgYWZmb3JkYW5jZXMgYW5kIGZlZWRiYWNrIGhlbHBlZCBtZSBidWlsZCByZXNpbGllbmNlIGFnYWluc3QgYmlhcyB3aGVuIHRlc3Rpbmcgc2FmZXR5LWNyaXRpY2FsIGZsb3dzLCBlc3BlY2lhbGx5IHdoZW4gd2UgcmVkZXNpZ25lZCB2b2ljZSBtYXNraW5nIGZvciBEaXZhci5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiUmVpbmZvcmNlZCBteSBoYWJpdCBvZiBwcm90b3R5cGluZyBlcnJvciBzdGF0ZXMgZmlyc3QuXCIsXG4gICAgICBcIkluZmx1ZW5jZWQgbXkgaGV1cmlzdGljcyBjaGVja2xpc3QgZm9yIGFjY2Vzc2liaWxpdHkgcmV2aWV3cy5cIixcbiAgICAgIFwiVGF1Z2h0IG1lIHRvIG5hcnJhdGUg4oCcdXNlciBnb2Fsc+KAnSBpbiBldmVyeSBkZXNpZ24gY3JpdGlxdWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgc3ByaW50Q292ZXJBc3NldCwgXCJTcHJpbnQgYm9vayBjb3ZlclwiKSxcbiAgICB0aXRsZTogXCJTcHJpbnRcIixcbiAgICBhdXRob3I6IFwiSmFrZSBLbmFwcCAmIHRoZSBHViBEZXNpZ24gVGVhbVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJvcnJvd2luZyB0aGUgc3ByaW50IHJoeXRobSBoZWxwZWQgbWUgY29hY2ggcHJvZHVjdCBzcXVhZHMgdG93YXJkIGRlY2lzaW9uIGNsYXJpdHkuIFdlIHByb3RvdHlwZWQgYW5kIGxhdW5jaGVkIGEgbG95YWx0eSBwcm9ncmFtIGF0IFNldGFyZSBBdmFsIHVzaW5nIGEgNC1kYXkgdmFyaWF0aW9uIG9mIHRoaXMgcGxheWJvb2suXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkFkb3B0ZWQgbGlnaHRuaW5nIHRhbGtzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBmYXN0LlwiLFxuICAgICAgXCJNYWRlIOKAnEhvdyBtaWdodCB3ZeKAnSBzeW50aGVzaXMgYSBzdGFwbGUgaW4gbXkgd29ya3Nob3BzLlwiLFxuICAgICAgXCJJbXByb3ZlZCByZW1vdGUgZmFjaWxpdGF0aW9uIHVzaW5nIHN0cnVjdHVyZWQgdm90aW5nIHJpdHVhbHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCxcbiAgICAgIFwiQ3JlYXRpdmUgQ29uZmlkZW5jZSBib29rIGNvdmVyXCIsXG4gICAgKSxcbiAgICB0aXRsZTogXCJDcmVhdGl2ZSBDb25maWRlbmNlXCIsXG4gICAgYXV0aG9yOiBcIlRvbSAmIERhdmlkIEtlbGxleVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgYm9vayByZWZyYW1lZCBob3cgSSBtZW50b3IgbmV3IGRlc2lnbmVyc+KAlHNoaWZ0aW5nIGNyaXRpcXVlcyBmcm9tIHNvbHV0aW9uIGp1ZGdtZW50IHRvIGNhcGFiaWxpdHkgYnVpbGRpbmcgYW5kIHBzeWNob2xvZ2ljYWwgc2FmZXR5LlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIOKAnGNvbmZpZGVuY2UgbWFwcGluZ+KAnSBpbiBteSBtZW50b3JzaGlwIHNlc3Npb25zLlwiLFxuICAgICAgXCJEcm92ZSBtZSB0byBkZXNpZ24gcHJvamVjdC1iYXNlZCBjdXJyaWN1bGEgYXQgUmFobmVtYSBDb2xsZWdlLlwiLFxuICAgICAgXCJFbmNvdXJhZ2VkIHN0b3J5dGVsbGluZyByaXR1YWxzIHRvIGNlbGVicmF0ZSBpbmNyZW1lbnRhbCB3aW5zLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIGFpQW5kVXhDb3ZlckFzc2V0LFxuICAgICAgXCJBSSBhbmQgVVggYm9vayBjb3ZlclwiLFxuICAgICksXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gICAgYXV0aG9yOiBcIlBhbWVsYSBQYXZsaXNjYWtcIixcbiAgICBsYWJlbDogXCJJbiBwcm9ncmVzcyDCtyBRNCAyMDI1XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSeKAmW0gZXhwbG9yaW5nIGhvdyBodW1hbi1jZW50ZXJlZCBtZXRob2RzIGV2b2x2ZSB3aGVuIG1vZGVscyBtYWtlIHByb2JhYmlsaXN0aWMgZGVjaXNpb25z4oCUaW5mb3JtaW5nIHRoZSBndWFyZHJhaWxzIEkgY3JhZnQgZm9yIEFJLWF1Z21lbnRlZCBzb2x1dGlvbnMuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkJ1aWxkaW5nIGFuIGV0aGljYWwgY2hlY2tsaXN0IGZvciBBSSBleHBlcmltZW50cy5cIixcbiAgICAgIFwiUGFpcmluZyBxdWFsaXRhdGl2ZSBpbnRlcnZpZXdzIHdpdGggbW9kZWwgbWV0cmljcy5cIixcbiAgICAgIFwiRG9jdW1lbnRpbmcgcHJvbXB0IGRlc2lnbiBwYXR0ZXJucyBmb3IgbXkgdGVhbS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodDogXCJOb3cgUmVhZGluZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRlYW06IFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBkaXZhclRlYW1QaG90b0Fzc2V0LCBcIk1hc2loIFNhZHJpIHdpdGggdGhlIERpdmFyIHByb2R1Y3QgdGVhbVwiKSxcbiAgY2FwdGlvbjpcbiAgICBcIkRpdmFyIFByb2R1Y3QgRXhwZXJpZW5jZSBUZWFtIOKAlCBjb2xsYWJvcmF0aW5nIGFjcm9zcyByZXNlYXJjaCwgcHJvZHVjdCBkZXNpZ24sIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgdGl0bGU6IFwiTXkgRGl2YXIgUHJvZHVjdCBUZWFtXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlc2UgYXJlIHRoZSB0YWxlbnRlZCBjb2xsZWFndWVzIEknbSBwcm91ZCB0byBjb2xsYWJvcmF0ZSB3aXRoIGF0IERpdmFyLiBUb2dldGhlciwgb3VyIDMyLXBlcnNvbiBwcm9kdWN0IG9yZ2FuaXphdGlvbiBibGVuZHMgZGVzaWduLCByZXNlYXJjaCwgcHJvZHVjdCwgYW5kIGVuZ2luZWVyaW5nIHRvIHNoaXAgZXhwZXJpZW5jZXMgdGhhdCBwcm90ZWN0IGFuZCBlbXBvd2VyIG1pbGxpb25zIG9mIHVzZXJzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbjogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPiA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkRlZ3JlZVwiLFxuICAgIGRhdGU6IFwiMjAxNSDigJMgMjAxOFwiLFxuICAgIHRpdGxlOiBcIkJTYyBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQYXlhbWUgTm9vciBVbml2ZXJzaXR5XCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZVwiLFxuICAgICAgXCJBY3RpdmUgTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IFNjaWVudGlmaWMgU29jaWV0eVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJBc3NvY2lhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJBc3NvY2lhdGUgaW4gTWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIkJ1LUFsaSBTaW5hIFVuaXZlcnNpdHlcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkRpcGxvbWFcIixcbiAgICBkYXRlOiBcIjIwMDlcIixcbiAgICB0aXRsZTogXCJEaXBsb21hIGluIE1hdGhlbWF0aWNzIGFuZCBQaHlzaWNzXCIsXG4gICAgaW5zdGl0dXRpb246IFwiTmF0aW9uYWwgT3JnYW5pemF0aW9uIGZvciBEZXZlbG9wbWVudCBvZiBFeGNlcHRpb25hbCBUYWxlbnRzIChTYW1wYWQpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2VydGlmaWNhdGVzOiBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT4gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZXM6IFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbiBMZWFkIGF0IFNuYXBwRm9vZFwiLFxuICAgIGRhdGU6IFwiSnVseSAzMCwgMjAyMSDigKIgUmVwb3J0ZWQgZGlyZWN0bHkgdG8gTWFzaWhcIixcbiAgICB0ZXh0OiBcIkkgaGFkIHRoZSBwcml2aWxlZ2Ugb2Ygd29ya2luZyBjbG9zZWx5IHdpdGggTWFzaWggZm9yIGEgeWVhci4gU3RhcnRpbmcgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBoaW0gd2FzIHRydWx5IGZvcnR1bmF0ZTsgaGUncyBub3Qgb25seSBlbXBhdGhldGljIHRvd2FyZHMgY29sbGVhZ3VlcyBidXQgYWxzbyBhZGVwdCBhdCBwcmlvcml0aXppbmcgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbCBzdHJlbmd0aHMgYW5kIGFzc2lnbmluZyB0aGVtIGFjY29yZGluZ2x5LiBNYXNpaCBwbGFjZXMgc2lnbmlmaWNhbnQgZW1waGFzaXMgb24gcGVyc29uYWwgZ3Jvd3RoLCBvZmZlcmluZyBwcmFjdGljYWwgcmVzb3VyY2VzIHRhaWxvcmVkIHRvIHRlYW0gbWVtYmVycycgY29tcGV0ZW5jaWVzLiBXb3JraW5nIGFsb25nc2lkZSBoaW0gd2FzIGJvdGggZW5qb3lhYmxlIGFuZCBlbnJpY2hpbmcuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhZWVkLWFib2xnaGFzZW1pL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGkgQXphZGVoXCIsXG4gICAgcm9sZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBhdCBVc2VyVGVzdGluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAzMSwgMjAyMSDigKIgTWFzaWgncyB0ZWFjaGVyXCIsXG4gICAgdGV4dDogXCJNYXNpaCBpcyBvbmUgb2YgbXkgcHJpdmlsZWdlZCBzdHVkZW50cyB3aG8gaXMgZGV0ZXJtaW5lZCB0byBpbXByb3ZlIGhpcyBrbm93bGVkZ2UgYW5kIHNraWxscy4gSGlzIGNvbW1pdG1lbnQgYW5kIHB1bmN0dWFsaXR5IGluIGRlbGl2ZXJpbmcgYXNzaWdubWVudHMgYXJlIGNvbW1lbmRhYmxlLiBJbiBteSBvcGluaW9uLCBoaXMgaW50ZXJlc3QgaW4gbGVhcm5pbmcgaGFzIGJlZW4gb25lIG9mIHRoZSBrZXkgcmVhc29ucyBmb3IgaGlzIHN1Y2Nlc3MuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsaS1hemFkZWgvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICByb2xlOiBcIkRlc2lnbiBMZWFkIGF0IFNldGFyZSBBdmFsIChNQ0kpXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyMSDigKIgSG9zc2VpbiBtYW5hZ2VkIE1hc2loIGRpcmVjdGx5XCIsXG4gICAgdGV4dDogXCJJIGhhdmUga25vd24gTWFzaWggc2luY2UgMjAxOCwgYW5kIGZyb20gdGhlIGJlZ2lubmluZywgaGlzIHBvdGVudGlhbCB0YWxlbnQgd2FzIGV2aWRlbnQsIG1hcmtpbmcgdGhlIHN0YXJ0IG9mIG91ciBjb2xsYWJvcmF0aXZlIGpvdXJuZXkuIEZvciBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIHlvdSBvbmx5IG5lZWQgdG8gZ2l2ZSBNYXNpaCB0aGUgcmF3IGRhdGEgYW5kIGFueSB1bmNlcnRhaW50aWVzLiBXaGlsZSB3b3JraW5nIHRvZ2V0aGVyIG9uIHRoZSBwcm9kdWN0IHRlYW0gYXQgU2V0YXJlIEF2YWwgQ29tcGFueSwgaGlzIGV4cGVydGlzZSB3YXMgY3J1Y2lhbCBpbiBwcm9ibGVtIGRlZmluaXRpb24sIHNvbHV0aW9uIGZpbmRpbmcsIGFuZCBkZXNpZ25pbmcgZmxvd3MuIFRoZSBvdXRjb21lcyBvZiBoaXMgcHJvZmVzc2lvbmFsIGFuZCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBkZXNpZ25zIGhhdmUgYWx3YXlzIGJlZW4gb3V0c3RhbmRpbmcuIEhlIGlzIGEgY29uc3VtbWF0ZSBwcm9mZXNzaW9uYWwsIGFuZCBJIGhpZ2hseSByZWNvbW1lbmQgaGltLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3NzZWlubWFobW91ZHZhbmQvXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgZ2FsbGVyeSwgc3RvcnlIZXJvIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5jb25zdCBoZXJvSW1hZ2UgPSBnYWxsZXJ5WzBdPy5pbWFnZTtcblxuY29uc3QgTXlTdG9yeVN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiUHJvZmlsZVBhZ2VcIixcbiAgbmFtZTogXCJNYXNpaCBTYWRyaSDigJQgTXkgU3RvcnlcIixcbiAgZGVzY3JpcHRpb246IHN0b3J5SGVyby5kZXNjcmlwdGlvbixcbiAgdXJsOiBgJHtzaXRlVXJsfS9teS1zdG9yeWAsXG4gIGltYWdlOiBoZXJvSW1hZ2U/LnNyYyxcbiAgcHJpbWFyeVRvcGljOiB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICBqb2JUaXRsZTogXCJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiLFxuICAgIHNhbWVBczogW1xuICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICAgICAgXCJodHRwczovL3d3dy5maWdtYS5jb20vQG1hc2loXCIsXG4gICAgICBcImh0dHBzOi8vbWFzaWguZnJhbWVyLndlYnNpdGUvXCIsXG4gICAgXSxcbiAgfSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBNeVN0b3J5UGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIk15IFN0b3J5IOKAlCBNYXNpaCBTYWRyaSdzIHBhdGggYXMgYSBwcm9kdWN0IGRlc2lnbmVyXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiTGVhcm4gaG93IE1hc2loIFNhZHJpIGJsZW5kcyBtZW50b3JzaGlwLCBleHBlcmltZW50YXRpb24sIGFuZCBjcmFmdCB0byBkZXNpZ24gaHVtYW4gZXhwZXJpZW5jZXPigJRmcm9tIGNsYXNzcm9vbSB0byBwcm9kdWN0IGxhdW5jaGVzLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9teS1zdG9yeVwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcInByb2ZpbGVcIixcbiAgICBpbWFnZTogaGVyb0ltYWdlXG4gICAgICA/IHtcbiAgICAgICAgICB1cmw6IGhlcm9JbWFnZS5zcmMsXG4gICAgICAgICAgYWx0OiBoZXJvSW1hZ2UuYWx0LFxuICAgICAgICAgIHdpZHRoOiBoZXJvSW1hZ2Uud2lkdGggPz8gMTIwMCxcbiAgICAgICAgICBoZWlnaHQ6IGhlcm9JbWFnZS5oZWlnaHQgPz8gNjMwLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IE15U3RvcnlTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBPdXRzaWRlRGVzaWduU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL091dHNpZGVEZXNpZ25TZWN0aW9uXCI7XG5pbXBvcnQgUGhpbG9zb3BoeVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QaGlsb3NvcGh5U2VjdGlvblwiO1xuaW1wb3J0IFBob3RvR2FsbGVyeVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uXCI7XG5pbXBvcnQgUmVhZGluZ0pvdXJuZXlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVhZGluZ0pvdXJuZXlTZWN0aW9uXCI7XG5pbXBvcnQgVGVhbVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9UZWFtU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgYm9va3MsXG4gIGNlcnRpZmljYXRlcyxcbiAgZWR1Y2F0aW9uLFxuICBlbW9qaUxpc3QsXG4gIGdhbGxlcnksXG4gIHBoaWxvc29waHlUZXh0LFxuICByZWFkaW5nSm91cm5leSxcbiAgc3RvcnlIZXJvLFxuICB0ZWFtLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IE15U3RvcnlQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgTXlTdG9yeVBhZ2UgPSAoKSA9PiB7XG4gIC8vIEZpbHRlcmVkIGl0ZW1zOiBmaXJzdCBlZHVjYXRpb24gaXRlbSwgZmlyc3QgYW5kIHNlY29uZCBjZXJ0aWZpY2F0ZSBpdGVtc1xuICBjb25zdCBvdXRzaWRlRGVzaWduSXRlbXMgPSBbXG4gICAgZWR1Y2F0aW9uWzBdLFxuICAgIGNlcnRpZmljYXRlc1swXSxcbiAgICBjZXJ0aWZpY2F0ZXNbMV0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uTXlTdG9yeVBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e3N0b3J5SGVyb30gLz5cbiAgICAgIDxQaG90b0dhbGxlcnlTZWN0aW9uIGl0ZW1zPXtnYWxsZXJ5fSAvPlxuICAgICAgPFBoaWxvc29waHlTZWN0aW9uIHBoaWxvc29waHlUZXh0PXtwaGlsb3NvcGh5VGV4dH0gZW1vamlMaXN0PXtlbW9qaUxpc3R9IC8+XG4gICAgICA8UmVhZGluZ0pvdXJuZXlTZWN0aW9uIGpvdXJuZXk9e3JlYWRpbmdKb3VybmV5fSBib29rcz17Ym9va3N9IC8+XG4gICAgICA8VGVhbVNlY3Rpb24gdGVhbT17dGVhbX0gLz5cbiAgICAgIDxPdXRzaWRlRGVzaWduU2VjdGlvbiBpdGVtcz17b3V0c2lkZURlc2lnbkl0ZW1zfSAvPlxuICAgIDwvPlxuICApO1xufTtc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
