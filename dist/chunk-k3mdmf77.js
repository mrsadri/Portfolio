import {
  SectionHeader_default
} from "./chunk-x3hrb28v.js";
import {
  Pill_default,
  createImageResource
} from "./chunk-m6wkdxbm.js";
import {
  Seo_default,
  site_default
} from "./chunk-aj4jdr23.js";
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
} from "./chunk-ygqezw1f.js";

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

// src/features/my-story/components/OutsideDesignSection.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var OutsideDesignSection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
  component: "section",
  sx: { py: { xs: 8, md: 10 } },
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
      spacing: 5,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(SectionHeader_default, {
          eyebrow: "Beyond Design",
          title: "Outside Design",
          icon: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(AutoAwesomeRounded_default, {
            color: "primary"
          }, undefined, false, undefined, this),
          align: "left"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: items.map((item, index) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
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
                      justifyContent: "space-between",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Pill_default, {
                          label: item.badge,
                          size: "small"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                          variant: "caption",
                          color: "text.secondary",
                          children: item.date
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: item.title
                    }, undefined, false, undefined, this),
                    "institution" in item && item.institution && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "subtitle1",
                      color: "text.secondary",
                      children: item.institution
                    }, undefined, false, undefined, this),
                    "details" in item && item.details && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                      component: "ul",
                      spacing: 0.75,
                      sx: { pl: 2, mb: 0 },
                      children: item.details.map((detail) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                        component: "li",
                        variant: "body2",
                        color: "text.secondary",
                        children: detail
                      }, detail, false, undefined, this))
                    }, undefined, false, undefined, this),
                    "hours" in item && item.hours && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: item.hours
                    }, undefined, false, undefined, this),
                    "score" in item && item.score && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: item.score
                    }, undefined, false, undefined, this),
                    "topics" in item && item.topics && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
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
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var PhilosophySection = ({ philosophyText, emojiList }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 8, md: 10 },
      borderTop: `1px solid ${theme.palette.divider}`,
      backgroundColor: "transparent"
    },
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
        container: true,
        spacing: { xs: 6, md: 8 },
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              spacing: 2.5,
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h3",
                  sx: {
                    fontStyle: "italic",
                    lineHeight: 1.6
                  },
                  children: philosophyText
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
                  sx: {
                    borderLeft: `3px solid ${theme.tokens.colors.primary}`,
                    pl: 2,
                    py: 1
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: { lineHeight: 1.7 },
                    children: "I am driven by experiences—designing them, learning from them, and living them deeply."
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.7 },
                  children: "My friends often describe me as someone with layers—curiosity keeps me exploring new crafts, communities, and challenges. It’s how I stay grounded and inspired."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              spacing: 3.5,
              sx: {
                borderRadius: "48px",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 },
                backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.7)" : "rgba(14, 22, 38, 0.7)"
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  spacing: 1.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      children: "These small rituals shape the way I design and collaborate:"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                      variant: "h6",
                      children: "From music and ceramics to plants, cooking, and collaborative games—I’m most alive when I’m building with others."
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
                  direction: "row",
                  spacing: { xs: 2, md: 3 },
                  flexWrap: "wrap",
                  useFlexGap: true,
                  justifyContent: { xs: "flex-start", md: "space-between" },
                  children: emojiList.map((emoji) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
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
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var PhotoGallerySection = ({ items }) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
  component: "section",
  sx: {
    pt: { xs: 4, md: 4 },
    pb: { xs: 6, md: 12 }
  },
  children: [
    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
        spacing: { xs: 1.5, md: 1.5 },
        sx: { maxWidth: 720 },
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "eyebrow",
            color: "brand.secondary",
            children: "Photo Strip"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "h3",
            sx: { fontSize: { xs: "1.75rem", md: "2.5rem" } },
            children: "My Life in Frames"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { fontSize: { xs: "0.9375rem", md: "1rem" } },
            children: "A glimpse into the textures, people, and scenes that shape how I approach product design—unfiltered, a little imperfect, and very alive."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      sx: { mt: { xs: 3, md: 6 } },
      children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
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
        children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
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
          children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
            sx: {
              breakInside: { md: "avoid" },
              mb: { xs: 0, md: 2.5 },
              borderRadius: (theme) => theme.tokens.radius.surface,
              overflow: "hidden",
              flexShrink: { xs: 0, md: "unset" },
              width: { xs: "200px", md: "auto" },
              scrollSnapAlign: { xs: "start", md: "none" }
            },
            children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
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
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var ReadingJourneySection = ({ journey, books }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
    component: "section",
    sx: { py: { xs: 8, md: 10 } },
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
        spacing: 5,
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(SectionHeader_default, {
            eyebrow: "Reading Journey",
            title: journey.title,
            subtitle: journey.subtitle,
            align: "left"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
            container: true,
            spacing: 3,
            alignItems: "stretch",
            children: books.map((book) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Grid_default, {
              size: { xs: 12, md: 6 },
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(SurfaceCard_default, {
                sx: {
                  height: "100%",
                  display: "flex"
                },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
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
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(CardContent_default, {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      flexGrow: 1
                    },
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                        spacing: 0.75,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                            variant: "caption",
                            color: "text.secondary",
                            children: book.label
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                            variant: "h5",
                            children: book.title
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                            variant: "subtitle1",
                            color: "text.secondary",
                            children: book.author
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                        variant: "body2",
                        color: "text.secondary",
                        children: book.summary
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
                        component: "ul",
                        spacing: 0.75,
                        sx: { pl: 2, mb: 0 },
                        children: book.takeaways.map((takeaway) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                          component: "li",
                          variant: "body2",
                          color: "text.secondary",
                          children: takeaway
                        }, takeaway, false, undefined, this))
                      }, undefined, false, undefined, this),
                      book.highlight && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Pill_default, {
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
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var TeamSection = ({ team }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
    component: "section",
    sx: {
      py: { xs: 10, md: 14 },
      borderTop: `1px solid ${theme.palette.divider}`
    },
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Container_default, {
      disableGutters: true,
      maxWidth: false,
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
        sx: {
          display: "grid",
          gridTemplateColumns: { md: "1.15fr 0.85fr" },
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
            sx: {
              position: "relative",
              minHeight: { xs: 360, sm: 420, md: 520 },
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
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
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
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
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
            sx: {
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 5, md: 0 }
            },
            children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Stack_default, {
              spacing: { xs: 3, md: 4 },
              sx: { maxWidth: 520 },
              children: [
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                  variant: "eyebrow",
                  color: "brand.secondary",
                  children: "Collaborators"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                  variant: "h2",
                  children: team.title
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { lineHeight: 1.8 },
                  children: team.description
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Box_default, {
                  sx: {
                    borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                    pl: 3,
                    py: 1
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Typography_default, {
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
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var MyStoryPage = () => {
  const outsideDesignItems = [
    education[0],
    certificates[0],
    certificates[1]
  ].filter((item) => item !== undefined);
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Seo_default, {
        ...MyStoryPageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(HeroSection_default, {
        hero: storyHero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(PhotoGallerySection_default, {
        items: gallery
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(PhilosophySection_default, {
        philosophyText,
        emojiList
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ReadingJourneySection_default, {
        journey: readingJourney,
        books
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(TeamSection_default, {
        team
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(OutsideDesignSection_default, {
        items: outsideDesignItems
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var MyStoryPage_default = MyStoryPage;
export {
  MyStoryPage_default as default
};

//# debugId=E084F393489E067B64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BdXRvQXdlc29tZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvU3VyZmFjZUNhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9jb21wb25lbnRzL091dHNpZGVEZXNpZ25TZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9QaGlsb3NvcGh5U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvUGhvdG9HYWxsZXJ5U2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2NvbXBvbmVudHMvUmVhZGluZ0pvdXJuZXlTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3RvcnkvY29tcG9uZW50cy9UZWFtU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL215LXN0b3J5L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvbXktc3Rvcnkvc2VvLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9teS1zdG9yeS9NeVN0b3J5UGFnZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgU3RvcnlIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogU3RvcnlIZXJvO1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cImhlYWRlclwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNilcIiA6IFwicmdiYSg4LCAxNCwgMjYsIDAuODUpXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IDg0MCxcbiAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImxlZnRcIiwgbWQ6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTE5LjQ2IDggLjc5LTEuNzVMMjIgNS40NmMuMzktLjE4LjM5LS43MyAwLS45MWwtMS43NS0uNzlMMTkuNDYgMmMtLjE4LS4zOS0uNzMtLjM5LS45MSAwbC0uNzkgMS43NS0xLjc2Ljc5Yy0uMzkuMTgtLjM5LjczIDAgLjkxbDEuNzUuNzkuNzkgMS43NmMuMTguMzkuNzQuMzkuOTIgME0xMS41IDkuNSA5LjkxIDZjLS4zNS0uNzgtMS40Ny0uNzgtMS44MiAwTDYuNSA5LjUgMyAxMS4wOWMtLjc4LjM2LS43OCAxLjQ3IDAgMS44MmwzLjUgMS41OUw4LjA5IDE4Yy4zNi43OCAxLjQ3Ljc4IDEuODIgMGwxLjU5LTMuNSAzLjUtMS41OWMuNzgtLjM2Ljc4LTEuNDcgMC0xLjgyem03LjA0IDYuNS0uNzkgMS43NS0xLjc1Ljc5Yy0uMzkuMTgtLjM5LjczIDAgLjkxbDEuNzUuNzkuNzkgMS43NmMuMTguMzkuNzMuMzkuOTEgMGwuNzktMS43NSAxLjc2LS43OWMuMzktLjE4LjM5LS43MyAwLS45MWwtMS43NS0uNzktLjc5LTEuNzZjLS4xOC0uMzktLjc0LS4zOS0uOTIgMFwiXG59KSwgJ0F1dG9Bd2Vzb21lUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhcmRQcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcblxuY29uc3QgU3VyZmFjZUNhcmQgPSAoeyBzeCwgY2hpbGRyZW4sIC4uLnByb3BzIH06IENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXt7XG4gICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgIC4uLnN4LFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdXJmYWNlQ2FyZDtcblxuXG4iLAogICAgImltcG9ydCBBdXRvQXdlc29tZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0F1dG9Bd2Vzb21lUm91bmRlZFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSBcIkBzaGFyZWQvdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJAc2hhcmVkL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlclwiO1xuaW1wb3J0IFN1cmZhY2VDYXJkIGZyb20gXCIuL1N1cmZhY2VDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IENlcnRpZmljYXRlSXRlbSwgRWR1Y2F0aW9uSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIE91dHNpZGVEZXNpZ25JdGVtID0gRWR1Y2F0aW9uSXRlbSB8IENlcnRpZmljYXRlSXRlbTtcblxudHlwZSBPdXRzaWRlRGVzaWduU2VjdGlvblByb3BzID0ge1xuICBpdGVtczogUmVhZG9ubHlBcnJheTxPdXRzaWRlRGVzaWduSXRlbT47XG59O1xuXG5jb25zdCBPdXRzaWRlRGVzaWduU2VjdGlvbiA9ICh7IGl0ZW1zIH06IE91dHNpZGVEZXNpZ25TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgZXllYnJvdz1cIkJleW9uZCBEZXNpZ25cIlxuICAgICAgICAgIHRpdGxlPVwiT3V0c2lkZSBEZXNpZ25cIlxuICAgICAgICAgIGljb249ezxBdXRvQXdlc29tZVJvdW5kZWRJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17YCR7aXRlbS50aXRsZX0tJHtpdGVtLmRhdGV9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPXtpdGVtLmJhZGdlfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge1wiaW5zdGl0dXRpb25cIiBpbiBpdGVtICYmIGl0ZW0uaW5zdGl0dXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtcImRldGFpbHNcIiBpbiBpdGVtICYmIGl0ZW0uZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17ZGV0YWlsfSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge1wiaG91cnNcIiBpbiBpdGVtICYmIGl0ZW0uaG91cnMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmhvdXJzfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge1wic2NvcmVcIiBpbiBpdGVtICYmIGl0ZW0uc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNjb3JlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge1widG9waWNzXCIgaW4gaXRlbSAmJiBpdGVtLnRvcGljcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udG9waWNzfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPdXRzaWRlRGVzaWduU2VjdGlvbjtcblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgUGhpbG9zb3BoeVNlY3Rpb25Qcm9wcyA9IHtcbiAgcGhpbG9zb3BoeVRleHQ6IHN0cmluZztcbiAgZW1vamlMaXN0OiByZWFkb25seSBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IFBoaWxvc29waHlTZWN0aW9uID0gKHsgcGhpbG9zb3BoeVRleHQsIGVtb2ppTGlzdCB9OiBQaGlsb3NvcGh5U2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgc3g9e3tcbiAgICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogOCB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGhpbG9zb3BoeVRleHR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBgM3B4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgICAgICAgICAgICBwbDogMixcbiAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIEkgYW0gZHJpdmVuIGJ5IGV4cGVyaWVuY2Vz4oCUZGVzaWduaW5nIHRoZW0sIGxlYXJuaW5nIGZyb20gdGhlbSwgYW5kIGxpdmluZyB0aGVtXG4gICAgICAgICAgICAgICAgICBkZWVwbHkuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICBNeSBmcmllbmRzIG9mdGVuIGRlc2NyaWJlIG1lIGFzIHNvbWVvbmUgd2l0aCBsYXllcnPigJRjdXJpb3NpdHkga2VlcHMgbWUgZXhwbG9yaW5nXG4gICAgICAgICAgICAgICAgbmV3IGNyYWZ0cywgY29tbXVuaXRpZXMsIGFuZCBjaGFsbGVuZ2VzLiBJdOKAmXMgaG93IEkgc3RheSBncm91bmRlZCBhbmQgaW5zcGlyZWQuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBzcGFjaW5nPXszLjV9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC43KVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBUaGVzZSBzbWFsbCByaXR1YWxzIHNoYXBlIHRoZSB3YXkgSSBkZXNpZ24gYW5kIGNvbGxhYm9yYXRlOlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgIEZyb20gbXVzaWMgYW5kIGNlcmFtaWNzIHRvIHBsYW50cywgY29va2luZywgYW5kIGNvbGxhYm9yYXRpdmUgZ2FtZXPigJRJ4oCZbSBtb3N0XG4gICAgICAgICAgICAgICAgICBhbGl2ZSB3aGVuIEnigJltIGJ1aWxkaW5nIHdpdGggb3RoZXJzLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgdXNlRmxleEdhcFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IHhzOiBcImZsZXgtc3RhcnRcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZW1vamlMaXN0Lm1hcCgoZW1vamkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZW1vaml9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiA1Niwgc206IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Vtb2ppfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhpbG9zb3BoeVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBHYWxsZXJ5SXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFBob3RvR2FsbGVyeVNlY3Rpb25Qcm9wcyA9IHtcbiAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8R2FsbGVyeUl0ZW0+O1xufTtcblxuY29uc3QgUGhvdG9HYWxsZXJ5U2VjdGlvbiA9ICh7IGl0ZW1zIH06IFBob3RvR2FsbGVyeVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgc3g9e3tcbiAgICAgIHB0OiB7IHhzOiA0LCBtZDogNCB9LFxuICAgICAgcGI6IHsgeHM6IDYsIG1kOiAxMiB9LFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDEuNSwgbWQ6IDEuNSB9fSBzeD17eyBtYXhXaWR0aDogNzIwIH19PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgUGhvdG8gU3RyaXBcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBmb250U2l6ZTogeyB4czogXCIxLjc1cmVtXCIsIG1kOiBcIjIuNXJlbVwiIH0gfX0+XG4gICAgICAgICAgTXkgTGlmZSBpbiBGcmFtZXNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICBzeD17eyBmb250U2l6ZTogeyB4czogXCIwLjkzNzVyZW1cIiwgbWQ6IFwiMXJlbVwiIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEEgZ2xpbXBzZSBpbnRvIHRoZSB0ZXh0dXJlcywgcGVvcGxlLCBhbmQgc2NlbmVzIHRoYXQgc2hhcGUgaG93IEkgYXBwcm9hY2ggcHJvZHVjdFxuICAgICAgICAgIGRlc2lnbuKAlHVuZmlsdGVyZWQsIGEgbGl0dGxlIGltcGVyZmVjdCwgYW5kIHZlcnkgYWxpdmUuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBtYXhXaWR0aD17ZmFsc2V9IHN4PXt7IG10OiB7IHhzOiAzLCBtZDogNiB9IH19PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB4OiB7IHhzOiAyLCBzbTogNCwgbWQ6IDYgfSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIG92ZXJmbG93WDogeyB4czogXCJhdXRvXCIsIG1kOiBcInZpc2libGVcIiB9LFxuICAgICAgICAgIG92ZXJmbG93WTogXCJoaWRkZW5cIixcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aDogXCJub25lXCIsXG4gICAgICAgICAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICAgICAgICAvLyBWaXN1YWwgaW5kaWNhdG9yIGZvciBob3Jpem9udGFsIHNjcm9sbCBvbiBtb2JpbGVcbiAgICAgICAgICBcIiY6OmFmdGVyXCI6IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHsgeHM6ICdcIlwiJywgbWQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAodGhlbWUpID0+XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSlcIlxuICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCByZ2JhKDE4LCAxOCwgMTgsIDAuOSkpXCIsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGNvbHVtbkNvdW50OiB7IHhzOiAyLCBzbTogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgIGNvbHVtbkdhcDogeyB4czogMS41LCBtZDogMi41IH0sXG4gICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiBcImZsZXhcIiwgbWQ6IFwiYmxvY2tcIiB9LFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogeyB4czogXCJyb3dcIiwgbWQ6IFwidW5zZXRcIiB9LFxuICAgICAgICAgICAgZ2FwOiB7IHhzOiAxLjUsIG1kOiAwIH0sXG4gICAgICAgICAgICBvdmVyZmxvd1g6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCJ2aXNpYmxlXCIgfSxcbiAgICAgICAgICAgIHNjcm9sbFNuYXBUeXBlOiB7IHhzOiBcInggbWFuZGF0b3J5XCIsIG1kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgc2Nyb2xsQmVoYXZpb3I6IHsgeHM6IFwic21vb3RoXCIsIG1kOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6IHsgeHM6IFwibm9uZVwiLCBtZDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgIG1zT3ZlcmZsb3dTdHlsZTogeyB4czogXCJub25lXCIsIG1kOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6IFwibm9uZVwiLCBtZDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17YCR7aXRlbS5jYXB0aW9ufS0ke2l0ZW0uaW1hZ2Uuc3JjfWB9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYnJlYWtJbnNpZGU6IHsgbWQ6IFwiYXZvaWRcIiB9LFxuICAgICAgICAgICAgICAgIG1iOiB7IHhzOiAwLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiB7IHhzOiAwLCBtZDogXCJ1bnNldFwiIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IFwiMjAwcHhcIiwgbWQ6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiB7IHhzOiBcInN0YXJ0XCIsIG1kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5pbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogXCJhdXRvXCIsIG1kOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnlTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgUGlsbCB9IGZyb20gXCJAc2hhcmVkL3VpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiQHNoYXJlZC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXJcIjtcbmltcG9ydCBTdXJmYWNlQ2FyZCBmcm9tIFwiLi9TdXJmYWNlQ2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBCb29rLCBSZWFkaW5nSm91cm5leSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlYWRpbmdKb3VybmV5U2VjdGlvblByb3BzID0ge1xuICBqb3VybmV5OiBSZWFkaW5nSm91cm5leTtcbiAgYm9va3M6IFJlYWRvbmx5QXJyYXk8Qm9vaz47XG59O1xuXG5jb25zdCBSZWFkaW5nSm91cm5leVNlY3Rpb24gPSAoeyBqb3VybmV5LCBib29rcyB9OiBSZWFkaW5nSm91cm5leVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWFkaW5nIEpvdXJuZXlcIlxuICAgICAgICAgICAgdGl0bGU9e2pvdXJuZXkudGl0bGV9XG4gICAgICAgICAgICBzdWJ0aXRsZT17am91cm5leS5zdWJ0aXRsZX1cbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17Ym9vay50aXRsZX0+XG4gICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Jvb2suY292ZXIuc3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Jvb2suY292ZXIuYWx0fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ2FwOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2Jvb2sudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2suc3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXswLjc1fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2sudGFrZWF3YXlzLm1hcCgodGFrZWF3YXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXt0YWtlYXdheX0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFrZWF3YXl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmhpZ2hsaWdodCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtib29rLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFkaW5nSm91cm5leVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgVGVhbVNuYXBzaG90IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgVGVhbVNlY3Rpb25Qcm9wcyA9IHtcbiAgdGVhbTogVGVhbVNuYXBzaG90O1xufTtcblxuY29uc3QgVGVhbVNlY3Rpb24gPSAoeyB0ZWFtIH06IFRlYW1TZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBzeD17e1xuICAgICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogeyBtZDogXCIxLjE1ZnIgMC44NWZyXCIgfSxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogeyB4czogMzYwLCBzbTogNDIwLCBtZDogNTIwIH0sXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgIHNyYz17dGVhbS5pbWFnZS5zcmN9XG4gICAgICAgICAgICAgIGFsdD17dGVhbS5pbWFnZS5hbHR9XG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB7IHhzOiAxNiwgbWQ6IDI0IH0sXG4gICAgICAgICAgICAgICAgbGVmdDogeyB4czogMTYsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICAgIHB4OiAyLFxuICAgICAgICAgICAgICAgIHB5OiAwLjc1LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5waWxsLFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuNzIpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0ZWFtLmNhcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIHNtOiA2LCBtZDogOCB9LFxuICAgICAgICAgICAgICBweTogeyB4czogNSwgbWQ6IDAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19IHN4PXt7IG1heFdpZHRoOiA1MjAgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBDb2xsYWJvcmF0b3JzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RlYW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS44IH19PlxuICAgICAgICAgICAgICAgIHt0ZWFtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuc2Vjb25kYXJ5fWAsXG4gICAgICAgICAgICAgICAgICBwbDogMyxcbiAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnERlc2lnbmluZyB3aXRoIHBlb3BsZSBJIHRydXN0IGtlZXBzIHRoZSB3b3JrIGh1bWJsZSwgYW1iaXRpb3VzLCBhbmQgam95ZnVsLuKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2Jvb2tzL2NyZWF0aXZlLWNvbmZpZGVuY2UuanBnXCI7XG5pbXBvcnQgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9kZXNpZ24tb2YtZXZlcnlkYXktdGhpbmdzLmpwZ1wiO1xuaW1wb3J0IHNwcmludENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9zcHJpbnQuanBnXCI7XG5pbXBvcnQgYWlBbmRVeENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9ib29rcy9haS1hbmQtdXguanBnXCI7XG5pbXBvcnQgZGl2YXJUZWFtUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2RpdmFyLXRlYW0uanBnXCI7XG5pbXBvcnQgbWFzaWhDaGlsZFBob3RvQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1jaGlsZC1waG90by5wbmdcIjtcbmltcG9ydCBtYXNpaENvZmZlZUFydGlzdEFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtY29mZmVlLWFydGlzdC5wbmdcIjtcbmltcG9ydCBtYXNpaE1vdW50YWluZWVyQXNzZXQgZnJvbSBcIi4uLy4uLy4uLy4uL2ltYWdlcy9tYXNpaC1tb3VudGFpbmVlci5wbmdcIjtcbmltcG9ydCBtYXNpaFV4RGVzaWduZXJBc3NldCBmcm9tIFwiLi4vLi4vLi4vLi4vaW1hZ2VzL21hc2loLXV4LWRlc2lnbmVyLnBuZ1wiO1xuaW1wb3J0IG1hc2loV29vZENhcnZlckFzc2V0IGZyb20gXCIuLi8uLi8uLi8uLi9pbWFnZXMvbWFzaWgtd29vZC1jYXJ2ZXIucG5nXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZVJlc291cmNlIH0gZnJvbSBcIkBzaGFyZWQvdXRpbHMvYXNzZXRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIEJvb2ssXG4gIENlcnRpZmljYXRlSXRlbSxcbiAgRWR1Y2F0aW9uSXRlbSxcbiAgR2FsbGVyeUl0ZW0sXG4gIFJlYWRpbmdKb3VybmV5LFxuICBSZWZlcmVuY2VJdGVtLFxuICBTdG9yeUhlcm8sXG4gIFRlYW1TbmFwc2hvdCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yeUhlcm86IFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IFwiSSBhbSBNYXNpaFwiLFxuICBzdWJ0aXRsZTogXCJBIENyZWF0b3Igb2YgTWVhbmluZ2Z1bCBFeHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIk91dHNpZGUgb2YgZGVzaWduLCBJIGVuam95IGV4cGxvcmluZyBjaGFsbGVuZ2VzIGFuZCBsZWFybmluZyB0aHJvdWdoIGV4cGVyaWVuY2VzIGxpa2UgbW91bnRhaW5lZXJpbmcsIHdvb2QgY2FydmluZywgYW5kIHRlYWNoaW5nLiBUaGVzZSBwdXJzdWl0cyBoYXZlIHRhdWdodCBtZSBwYXRpZW5jZSwgcmVzaWxpZW5jZSwgYW5kIGVtcGF0aHksIHdoaWNoIEkgYnJpbmcgaW50byBteSB3b3JrIHRvIGNyYWZ0IG1lYW5pbmdmdWwgYW5kIHRob3VnaHRmdWwgZGVzaWducy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5OiBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPiA9IFtcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgbWFzaWhDaGlsZFBob3RvQXNzZXQsXG4gICAgICBcIk1hc2loIGFzIGEgY2hpbGQgaW4gaGlzIGRhZCdzIGphY2tldFwiLFxuICAgICksXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIENoaWxkIGluIE15IERhZCdzIEphY2tldFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBtYXNpaE1vdW50YWluZWVyQXNzZXQsIFwiTWFzaWggYXMgYSBtb3VudGFpbmVlclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgTW91bnRhaW5lZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhDb2ZmZWVBcnRpc3RBc3NldCwgXCJNYXNpaCdzIGxhdHRlIGFydFwiKSxcbiAgICBjYXB0aW9uOiBcIk15IGFydCBvbiBhIExhdHRlXCIsXG4gICAgc3ViY2FwdGlvbjogXCJMYXR0ZSBBcnQgYnkgbWUgOilcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhVeERlc2lnbmVyQXNzZXQsIFwiTWFzaWggYXMgYSBVWCBEZXNpZ25lclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgVVggRGVzaWduZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgbWFzaWhXb29kQ2FydmVyQXNzZXQsIFwiTWFzaWggYXMgYSB3b29kIGNhcnZlclwiKSxcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgV29vZCBDYXJ2ZXJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwaGlsb3NvcGh5VGV4dCA9XG4gIFwiSSBkZXNpZ24gZXhwZXJpZW5jZXMgdGhhdCBub3Qgb25seSBzb2x2ZSBwcm9ibGVtcyBidXQgY3JlYXRlIHZhbHVlIGZvciBib3RoIGJ1c2luZXNzZXMgYW5kIHVzZXJzLiBJIGVuam95IGRpZ2dpbmcgZGVlcCBpbnRvIGNoYWxsZW5nZXMsIGFuYWx5emluZyB0aGVtIHRob3JvdWdobHksIGFuZCBjb21pbmcgdXAgd2l0aCBzb2x1dGlvbnMgdGhhdCB0cnVseSBtYWtlIGEgZGlmZmVyZW5jZS5cIjtcblxuZXhwb3J0IGNvbnN0IGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW10gPSBbXCLimJXvuI9cIiwgXCLwn6eX8J+PvVwiLCBcIvCfkrtcIiwgXCLwn5OaXCIsIFwi8J+OqFwiLCBcIvCfqrRcIl07XG5cbmV4cG9ydCBjb25zdCByZWFkaW5nSm91cm5leTogUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBcIkRlc2lnbiBCb29rcyBHdWlkaW5nIE15IENyYWZ0XCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiSW5zcGlyZWQgYnkgdGhlIGxpdmluZyBib29rc2hlbHZlcyBzaGFyZWQgYnkgcGVlcnMgbGlrZSBLeWxlIEpvaG5zdG9uLCBTYXd5ZXIgSG9sbGVuc2hlYWQsIEphc29uIFpvb2ssIGFuZCBBbXkgTWNMYXkgUGF0ZXJzb24sIEkga2VlcCBhIGN1cmF0ZWQgcmVjb3JkIG9mIHRoZSBpZGVhcyB0aGF0IHNoYXBlIG15IHByYWN0aWNlLlwiLFxuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IFwiQ3VycmVudGx5IHJlYWRpbmdcIixcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29rczogUmVhZG9ubHlBcnJheTxCb29rPiA9IFtcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQsXG4gICAgICBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzIGJvb2sgY292ZXJcIixcbiAgICApLFxuICAgIHRpdGxlOiBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzXCIsXG4gICAgYXV0aG9yOiBcIkRvbiBOb3JtYW5cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMTggwrcgUmV2aXNpdGVkIDIwMjRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJOb3JtYW7igJlzIGZyYW1ld29yayBmb3IgYWZmb3JkYW5jZXMgYW5kIGZlZWRiYWNrIGhlbHBlZCBtZSBidWlsZCByZXNpbGllbmNlIGFnYWluc3QgYmlhcyB3aGVuIHRlc3Rpbmcgc2FmZXR5LWNyaXRpY2FsIGZsb3dzLCBlc3BlY2lhbGx5IHdoZW4gd2UgcmVkZXNpZ25lZCB2b2ljZSBtYXNraW5nIGZvciBEaXZhci5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiUmVpbmZvcmNlZCBteSBoYWJpdCBvZiBwcm90b3R5cGluZyBlcnJvciBzdGF0ZXMgZmlyc3QuXCIsXG4gICAgICBcIkluZmx1ZW5jZWQgbXkgaGV1cmlzdGljcyBjaGVja2xpc3QgZm9yIGFjY2Vzc2liaWxpdHkgcmV2aWV3cy5cIixcbiAgICAgIFwiVGF1Z2h0IG1lIHRvIG5hcnJhdGUg4oCcdXNlciBnb2Fsc+KAnSBpbiBldmVyeSBkZXNpZ24gY3JpdGlxdWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKGltcG9ydC5tZXRhLnVybCwgc3ByaW50Q292ZXJBc3NldCwgXCJTcHJpbnQgYm9vayBjb3ZlclwiKSxcbiAgICB0aXRsZTogXCJTcHJpbnRcIixcbiAgICBhdXRob3I6IFwiSmFrZSBLbmFwcCAmIHRoZSBHViBEZXNpZ24gVGVhbVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJvcnJvd2luZyB0aGUgc3ByaW50IHJoeXRobSBoZWxwZWQgbWUgY29hY2ggcHJvZHVjdCBzcXVhZHMgdG93YXJkIGRlY2lzaW9uIGNsYXJpdHkuIFdlIHByb3RvdHlwZWQgYW5kIGxhdW5jaGVkIGEgbG95YWx0eSBwcm9ncmFtIGF0IFNldGFyZSBBdmFsIHVzaW5nIGEgNC1kYXkgdmFyaWF0aW9uIG9mIHRoaXMgcGxheWJvb2suXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkFkb3B0ZWQgbGlnaHRuaW5nIHRhbGtzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBmYXN0LlwiLFxuICAgICAgXCJNYWRlIOKAnEhvdyBtaWdodCB3ZeKAnSBzeW50aGVzaXMgYSBzdGFwbGUgaW4gbXkgd29ya3Nob3BzLlwiLFxuICAgICAgXCJJbXByb3ZlZCByZW1vdGUgZmFjaWxpdGF0aW9uIHVzaW5nIHN0cnVjdHVyZWQgdm90aW5nIHJpdHVhbHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiBjcmVhdGVJbWFnZVJlc291cmNlKFxuICAgICAgaW1wb3J0Lm1ldGEudXJsLFxuICAgICAgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCxcbiAgICAgIFwiQ3JlYXRpdmUgQ29uZmlkZW5jZSBib29rIGNvdmVyXCIsXG4gICAgKSxcbiAgICB0aXRsZTogXCJDcmVhdGl2ZSBDb25maWRlbmNlXCIsXG4gICAgYXV0aG9yOiBcIlRvbSAmIERhdmlkIEtlbGxleVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgYm9vayByZWZyYW1lZCBob3cgSSBtZW50b3IgbmV3IGRlc2lnbmVyc+KAlHNoaWZ0aW5nIGNyaXRpcXVlcyBmcm9tIHNvbHV0aW9uIGp1ZGdtZW50IHRvIGNhcGFiaWxpdHkgYnVpbGRpbmcgYW5kIHBzeWNob2xvZ2ljYWwgc2FmZXR5LlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIOKAnGNvbmZpZGVuY2UgbWFwcGluZ+KAnSBpbiBteSBtZW50b3JzaGlwIHNlc3Npb25zLlwiLFxuICAgICAgXCJEcm92ZSBtZSB0byBkZXNpZ24gcHJvamVjdC1iYXNlZCBjdXJyaWN1bGEgYXQgUmFobmVtYSBDb2xsZWdlLlwiLFxuICAgICAgXCJFbmNvdXJhZ2VkIHN0b3J5dGVsbGluZyByaXR1YWxzIHRvIGNlbGVicmF0ZSBpbmNyZW1lbnRhbCB3aW5zLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogY3JlYXRlSW1hZ2VSZXNvdXJjZShcbiAgICAgIGltcG9ydC5tZXRhLnVybCxcbiAgICAgIGFpQW5kVXhDb3ZlckFzc2V0LFxuICAgICAgXCJBSSBhbmQgVVggYm9vayBjb3ZlclwiLFxuICAgICksXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gICAgYXV0aG9yOiBcIlBhbWVsYSBQYXZsaXNjYWtcIixcbiAgICBsYWJlbDogXCJJbiBwcm9ncmVzcyDCtyBRNCAyMDI1XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSeKAmW0gZXhwbG9yaW5nIGhvdyBodW1hbi1jZW50ZXJlZCBtZXRob2RzIGV2b2x2ZSB3aGVuIG1vZGVscyBtYWtlIHByb2JhYmlsaXN0aWMgZGVjaXNpb25z4oCUaW5mb3JtaW5nIHRoZSBndWFyZHJhaWxzIEkgY3JhZnQgZm9yIEFJLWF1Z21lbnRlZCBzb2x1dGlvbnMuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkJ1aWxkaW5nIGFuIGV0aGljYWwgY2hlY2tsaXN0IGZvciBBSSBleHBlcmltZW50cy5cIixcbiAgICAgIFwiUGFpcmluZyBxdWFsaXRhdGl2ZSBpbnRlcnZpZXdzIHdpdGggbW9kZWwgbWV0cmljcy5cIixcbiAgICAgIFwiRG9jdW1lbnRpbmcgcHJvbXB0IGRlc2lnbiBwYXR0ZXJucyBmb3IgbXkgdGVhbS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodDogXCJOb3cgUmVhZGluZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRlYW06IFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IGNyZWF0ZUltYWdlUmVzb3VyY2UoaW1wb3J0Lm1ldGEudXJsLCBkaXZhclRlYW1QaG90b0Fzc2V0LCBcIk1hc2loIFNhZHJpIHdpdGggdGhlIERpdmFyIHByb2R1Y3QgdGVhbVwiKSxcbiAgY2FwdGlvbjpcbiAgICBcIkRpdmFyIFByb2R1Y3QgRXhwZXJpZW5jZSBUZWFtIOKAlCBjb2xsYWJvcmF0aW5nIGFjcm9zcyByZXNlYXJjaCwgcHJvZHVjdCBkZXNpZ24sIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgdGl0bGU6IFwiTXkgRGl2YXIgUHJvZHVjdCBUZWFtXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlc2UgYXJlIHRoZSB0YWxlbnRlZCBjb2xsZWFndWVzIEknbSBwcm91ZCB0byBjb2xsYWJvcmF0ZSB3aXRoIGF0IERpdmFyLiBUb2dldGhlciwgb3VyIDMyLXBlcnNvbiBwcm9kdWN0IG9yZ2FuaXphdGlvbiBibGVuZHMgZGVzaWduLCByZXNlYXJjaCwgcHJvZHVjdCwgYW5kIGVuZ2luZWVyaW5nIHRvIHNoaXAgZXhwZXJpZW5jZXMgdGhhdCBwcm90ZWN0IGFuZCBlbXBvd2VyIG1pbGxpb25zIG9mIHVzZXJzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbjogUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPiA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkRlZ3JlZVwiLFxuICAgIGRhdGU6IFwiMjAxNSDigJMgMjAxOFwiLFxuICAgIHRpdGxlOiBcIkJTYyBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQYXlhbWUgTm9vciBVbml2ZXJzaXR5XCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZVwiLFxuICAgICAgXCJBY3RpdmUgTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IFNjaWVudGlmaWMgU29jaWV0eVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJBc3NvY2lhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJBc3NvY2lhdGUgaW4gTWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIkJ1LUFsaSBTaW5hIFVuaXZlcnNpdHlcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkRpcGxvbWFcIixcbiAgICBkYXRlOiBcIjIwMDlcIixcbiAgICB0aXRsZTogXCJEaXBsb21hIGluIE1hdGhlbWF0aWNzIGFuZCBQaHlzaWNzXCIsXG4gICAgaW5zdGl0dXRpb246IFwiTmF0aW9uYWwgT3JnYW5pemF0aW9uIGZvciBEZXZlbG9wbWVudCBvZiBFeGNlcHRpb25hbCBUYWxlbnRzIChTYW1wYWQpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY2VydGlmaWNhdGVzOiBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT4gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZXM6IFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbiBMZWFkIGF0IFNuYXBwRm9vZFwiLFxuICAgIGRhdGU6IFwiSnVseSAzMCwgMjAyMSDigKIgUmVwb3J0ZWQgZGlyZWN0bHkgdG8gTWFzaWhcIixcbiAgICB0ZXh0OiBcIkkgaGFkIHRoZSBwcml2aWxlZ2Ugb2Ygd29ya2luZyBjbG9zZWx5IHdpdGggTWFzaWggZm9yIGEgeWVhci4gU3RhcnRpbmcgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBoaW0gd2FzIHRydWx5IGZvcnR1bmF0ZTsgaGUncyBub3Qgb25seSBlbXBhdGhldGljIHRvd2FyZHMgY29sbGVhZ3VlcyBidXQgYWxzbyBhZGVwdCBhdCBwcmlvcml0aXppbmcgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbCBzdHJlbmd0aHMgYW5kIGFzc2lnbmluZyB0aGVtIGFjY29yZGluZ2x5LiBNYXNpaCBwbGFjZXMgc2lnbmlmaWNhbnQgZW1waGFzaXMgb24gcGVyc29uYWwgZ3Jvd3RoLCBvZmZlcmluZyBwcmFjdGljYWwgcmVzb3VyY2VzIHRhaWxvcmVkIHRvIHRlYW0gbWVtYmVycycgY29tcGV0ZW5jaWVzLiBXb3JraW5nIGFsb25nc2lkZSBoaW0gd2FzIGJvdGggZW5qb3lhYmxlIGFuZCBlbnJpY2hpbmcuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhZWVkLWFib2xnaGFzZW1pL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGkgQXphZGVoXCIsXG4gICAgcm9sZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBhdCBVc2VyVGVzdGluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAzMSwgMjAyMSDigKIgTWFzaWgncyB0ZWFjaGVyXCIsXG4gICAgdGV4dDogXCJNYXNpaCBpcyBvbmUgb2YgbXkgcHJpdmlsZWdlZCBzdHVkZW50cyB3aG8gaXMgZGV0ZXJtaW5lZCB0byBpbXByb3ZlIGhpcyBrbm93bGVkZ2UgYW5kIHNraWxscy4gSGlzIGNvbW1pdG1lbnQgYW5kIHB1bmN0dWFsaXR5IGluIGRlbGl2ZXJpbmcgYXNzaWdubWVudHMgYXJlIGNvbW1lbmRhYmxlLiBJbiBteSBvcGluaW9uLCBoaXMgaW50ZXJlc3QgaW4gbGVhcm5pbmcgaGFzIGJlZW4gb25lIG9mIHRoZSBrZXkgcmVhc29ucyBmb3IgaGlzIHN1Y2Nlc3MuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsaS1hemFkZWgvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICByb2xlOiBcIkRlc2lnbiBMZWFkIGF0IFNldGFyZSBBdmFsIChNQ0kpXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyMSDigKIgSG9zc2VpbiBtYW5hZ2VkIE1hc2loIGRpcmVjdGx5XCIsXG4gICAgdGV4dDogXCJJIGhhdmUga25vd24gTWFzaWggc2luY2UgMjAxOCwgYW5kIGZyb20gdGhlIGJlZ2lubmluZywgaGlzIHBvdGVudGlhbCB0YWxlbnQgd2FzIGV2aWRlbnQsIG1hcmtpbmcgdGhlIHN0YXJ0IG9mIG91ciBjb2xsYWJvcmF0aXZlIGpvdXJuZXkuIEZvciBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIHlvdSBvbmx5IG5lZWQgdG8gZ2l2ZSBNYXNpaCB0aGUgcmF3IGRhdGEgYW5kIGFueSB1bmNlcnRhaW50aWVzLiBXaGlsZSB3b3JraW5nIHRvZ2V0aGVyIG9uIHRoZSBwcm9kdWN0IHRlYW0gYXQgU2V0YXJlIEF2YWwgQ29tcGFueSwgaGlzIGV4cGVydGlzZSB3YXMgY3J1Y2lhbCBpbiBwcm9ibGVtIGRlZmluaXRpb24sIHNvbHV0aW9uIGZpbmRpbmcsIGFuZCBkZXNpZ25pbmcgZmxvd3MuIFRoZSBvdXRjb21lcyBvZiBoaXMgcHJvZmVzc2lvbmFsIGFuZCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBkZXNpZ25zIGhhdmUgYWx3YXlzIGJlZW4gb3V0c3RhbmRpbmcuIEhlIGlzIGEgY29uc3VtbWF0ZSBwcm9mZXNzaW9uYWwsIGFuZCBJIGhpZ2hseSByZWNvbW1lbmQgaGltLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3NzZWlubWFobW91ZHZhbmQvXCIsXG4gIH0sXG5dO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIkBzaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiQHNoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBnYWxsZXJ5LCBzdG9yeUhlcm8gfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcbmNvbnN0IGhlcm9JbWFnZSA9IGdhbGxlcnlbMF0/LmltYWdlO1xuXG5jb25zdCBNeVN0b3J5U3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJQcm9maWxlUGFnZVwiLFxuICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBNeSBTdG9yeVwiLFxuICBkZXNjcmlwdGlvbjogc3RvcnlIZXJvLmRlc2NyaXB0aW9uLFxuICB1cmw6IGAke3NpdGVVcmx9L215LXN0b3J5YCxcbiAgaW1hZ2U6IGhlcm9JbWFnZT8uc3JjLFxuICBwcmltYXJ5VG9waWM6IHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgc2FtZUFzOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9AbWFzaWhcIixcbiAgICAgIFwiaHR0cHM6Ly9tYXNpaC5mcmFtZXIud2Vic2l0ZS9cIixcbiAgICBdLFxuICB9LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IE15U3RvcnlQYWdlTWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiTXkgU3Rvcnkg4oCUIE1hc2loIFNhZHJpJ3MgcGF0aCBhcyBhIHByb2R1Y3QgZGVzaWduZXJcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJMZWFybiBob3cgTWFzaWggU2FkcmkgYmxlbmRzIG1lbnRvcnNoaXAsIGV4cGVyaW1lbnRhdGlvbiwgYW5kIGNyYWZ0IHRvIGRlc2lnbiBodW1hbiBleHBlcmllbmNlc+KAlGZyb20gY2xhc3Nyb29tIHRvIHByb2R1Y3QgbGF1bmNoZXMuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL215LXN0b3J5XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwicHJvZmlsZVwiLFxuICAgIGltYWdlOiBoZXJvSW1hZ2VcbiAgICAgID8ge1xuICAgICAgICAgIHVybDogaGVyb0ltYWdlLnNyYyxcbiAgICAgICAgICBhbHQ6IGhlcm9JbWFnZS5hbHQsXG4gICAgICAgICAgd2lkdGg6IGhlcm9JbWFnZS53aWR0aCA/PyAxMjAwLFxuICAgICAgICAgIGhlaWdodDogaGVyb0ltYWdlLmhlaWdodCA/PyA2MzAsXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogTXlTdG9yeVN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iLAogICAgImltcG9ydCB7IFNlbyB9IGZyb20gXCJAc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBPdXRzaWRlRGVzaWduU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL091dHNpZGVEZXNpZ25TZWN0aW9uXCI7XG5pbXBvcnQgUGhpbG9zb3BoeVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QaGlsb3NvcGh5U2VjdGlvblwiO1xuaW1wb3J0IFBob3RvR2FsbGVyeVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QaG90b0dhbGxlcnlTZWN0aW9uXCI7XG5pbXBvcnQgUmVhZGluZ0pvdXJuZXlTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVhZGluZ0pvdXJuZXlTZWN0aW9uXCI7XG5pbXBvcnQgVGVhbVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9UZWFtU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgYm9va3MsXG4gIGNlcnRpZmljYXRlcyxcbiAgZWR1Y2F0aW9uLFxuICBlbW9qaUxpc3QsXG4gIGdhbGxlcnksXG4gIHBoaWxvc29waHlUZXh0LFxuICByZWFkaW5nSm91cm5leSxcbiAgc3RvcnlIZXJvLFxuICB0ZWFtLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IE15U3RvcnlQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgTXlTdG9yeVBhZ2UgPSAoKSA9PiB7XG4gIC8vIEZpbHRlcmVkIGl0ZW1zOiBmaXJzdCBlZHVjYXRpb24gaXRlbSwgZmlyc3QgYW5kIHNlY29uZCBjZXJ0aWZpY2F0ZSBpdGVtc1xuICBjb25zdCBvdXRzaWRlRGVzaWduSXRlbXMgPSBbXG4gICAgZWR1Y2F0aW9uWzBdLFxuICAgIGNlcnRpZmljYXRlc1swXSxcbiAgICBjZXJ0aWZpY2F0ZXNbMV0sXG4gIF0uZmlsdGVyKChpdGVtKTogaXRlbSBpcyBOb25OdWxsYWJsZTx0eXBlb2YgaXRlbT4gPT4gaXRlbSAhPT0gdW5kZWZpbmVkKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5NeVN0b3J5UGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17c3RvcnlIZXJvfSAvPlxuICAgICAgPFBob3RvR2FsbGVyeVNlY3Rpb24gaXRlbXM9e2dhbGxlcnl9IC8+XG4gICAgICA8UGhpbG9zb3BoeVNlY3Rpb24gcGhpbG9zb3BoeVRleHQ9e3BoaWxvc29waHlUZXh0fSBlbW9qaUxpc3Q9e2Vtb2ppTGlzdH0gLz5cbiAgICAgIDxSZWFkaW5nSm91cm5leVNlY3Rpb24gam91cm5leT17cmVhZGluZ0pvdXJuZXl9IGJvb2tzPXtib29rc30gLz5cbiAgICAgIDxUZWFtU2VjdGlvbiB0ZWFtPXt0ZWFtfSAvPlxuICAgICAgPE91dHNpZGVEZXNpZ25TZWN0aW9uIGl0ZW1zPXtvdXRzaWRlRGVzaWduSXRlbXN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVN0b3J5UGFnZTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLElBQU0sY0FBYyxHQUFHLDJCQUNyQix1QkEwQkUsYUExQkY7QUFBQSxFQUNFLFdBQVU7QUFBQSxFQUNWLElBQUksQ0FBQyxXQUFXO0FBQUEsSUFDZCxJQUFJLEVBQUUsSUFBSSxJ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LFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLGFBQWEsVUFBVTtBQUFBLEVBQ3ZCLEtBQUssR0FBRztBQUFBLEVBQ1IsT0FBTyxXQUFXO0FBQUEsRUFDbEIsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLHNCQUFvQztBQUFBLEVBQy9DLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE9BQU8sWUFDSDtBQUFBLE1BQ0UsS0FBSyxVQUFVO0FBQUEsTUFDZixLQUFLLFVBQVU7QUFBQSxNQUNmLE9BQU8sVUFBVSxTQUFTO0FBQUEsTUFDMUIsUUFBUSxVQUFVLFVBQVU7QUFBQSxJQUM5QixJQUNBO0FBQUEsRUFDTjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOzs7O0FDdkJBLElBQU0sY0FBYyxNQUFNO0FBQUEsRUFFeEIsTUFBTSxxQkFBcUI7QUFBQSxJQUN6QixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsRUFDZixFQUFFLE9BQU8sQ0FBQyxTQUEyQyxTQUFTLFNBQVM7QUFBQSxFQUV2RSx1QkFDRTtBQUFBLGNBU0U7QUFBQSxzQkFSQSx3QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQThCO0FBQUEsc0JBRTlCLHdCQUFDLHFCQUFEO0FBQUEsUUFBYSxNQUFNO0FBQUEsU0FBbkIsaUNBQThCO0FBQUEsc0JBQzlCLHdCQUFDLDZCQUFEO0FBQUEsUUFBcUIsT0FBTztBQUFBLFNBQTVCLGlDQUFxQztBQUFBLHNCQUNyQyx3QkFBQywyQkFBRDtBQUFBLFFBQW1CO0FBQUEsUUFBZ0M7QUFBQSxTQUFuRCxpQ0FBeUU7QUFBQSxzQkFDekUsd0JBQUMsK0JBQUQ7QUFBQSxRQUF1QixTQUFTO0FBQUEsUUFBZ0I7QUFBQSxTQUFoRCxpQ0FBOEQ7QUFBQSxzQkFDOUQsd0JBQUMscUJBQUQ7QUFBQSxRQUFhO0FBQUEsU0FBYixpQ0FBeUI7QUFBQSxzQkFDekIsd0JBQUMsOEJBQUQ7QUFBQSxRQUFzQixPQUFPO0FBQUEsU0FBN0IsaUNBQWlEO0FBQUE7QUFBQSxLQVJuRCxnQ0FTRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIkUwODRGMzkzNDg5RTA2N0I2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
