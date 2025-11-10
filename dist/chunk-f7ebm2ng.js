import {
  VolunteerActivismRounded_default
} from "./chunk-ddby249f.js";
import {
  GhostButton_default,
  Pill_default
} from "./chunk-akz6m2hr.js";
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
  require_react,
  useTheme
} from "./chunk-kr6hc1f9.js";

// node_modules/@mui/icons-material/esm/EmojiEventsRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var EmojiEventsRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M19 5h-2V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"
}), "EmojiEventsRounded");

// node_modules/@mui/icons-material/esm/SchoolRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var SchoolRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0"
}), "SchoolRounded");

// src/routes/MyStoryPage.tsx
var import_react = __toESM(require_react(), 1);

// images/books/creative-confidence.jpg
var creative_confidence_default = "./creative-confidence-hvwkkg8c.jpg";

// images/books/design-of-everyday-things.jpg
var design_of_everyday_things_default = "./design-of-everyday-things-srwfr3ym.jpg";

// images/books/sprint.jpg
var sprint_default = "./sprint-yp6mxb89.jpg";

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

// images/books/ai-and-ux.jpg
var ai_and_ux_default = "./ai-and-ux-zftybkh2.jpg";

// images/masih-wood-carver.png
var masih_wood_carver_default = "./masih-wood-carver-tfm2a041.png";

// src/data/myStory.ts
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

// src/routes/MyStoryPage.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SectionHeader = ({ eyebrow, title, subtitle, icon, align = "center" }) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
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
var SurfaceCard = ({ sx, children, ...props }) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
  elevation: 0,
  variant: "outlined",
  sx: {
    borderRadius: 1,
    boxShadow: "none",
    ...sx
  },
  ...props,
  children
}, undefined, false, undefined, this);
var MyStoryPage = () => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "header",
        sx: {
          py: { xs: 10, md: 14 },
          backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.6)" : "rgba(8, 14, 26, 0.85)"
        },
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
                variant: "tag",
                color: "brand.secondary",
                sx: { textAlign: "left" },
                children: "My story"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "display",
                children: storyHero.title
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "hero",
                color: "text.secondary",
                children: storyHero.subtitle
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "subtitle1",
                color: "text.secondary",
                sx: { lineHeight: 1.7 },
                children: storyHero.description
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          pt: { xs: 2, md: 4 },
          pb: { xs: 8, md: 12 }
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: 1.5,
              sx: { maxWidth: 720 },
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "eyebrow",
                  color: "brand.secondary",
                  children: "Photo Strip"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "h3",
                  children: "Layers of the everyday"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "body1",
                  color: "text.secondary",
                  children: "A glimpse into the textures, people, and scenes that shape how I approach product design—unfiltered, a little imperfect, and very alive."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
            disableGutters: true,
            sx: { maxWidth: false, mt: { xs: 4, md: 6 } },
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
              sx: {
                px: { xs: 2, sm: 4, md: 6 }
              },
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                sx: {
                  columnCount: { xs: 2, sm: 3, md: 5 },
                  columnGap: { xs: 1.5, md: 2.5 }
                },
                children: gallery.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                  sx: {
                    breakInside: "avoid",
                    mb: { xs: 1.5, md: 2.5 },
                    borderRadius: 1,
                    overflow: "hidden"
                  },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                    component: "img",
                    src: item.image,
                    alt: item.alt,
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
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          py: { xs: 8, md: 10 },
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: "transparent"
        },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
            container: true,
            spacing: { xs: 6, md: 8 },
            alignItems: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 6 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: 2.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "h3",
                      sx: {
                        fontStyle: "italic",
                        lineHeight: 1.6
                      },
                      children: philosophyText
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                      sx: {
                        borderLeft: `3px solid ${theme.tokens.colors.primary}`,
                        pl: 2,
                        py: 1
                      },
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                        variant: "subtitle1",
                        color: "text.secondary",
                        sx: { lineHeight: 1.7 },
                        children: "I am driven by experiences—designing them, learning from them, and living them deeply."
                      }, undefined, false, undefined, this)
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      sx: { lineHeight: 1.7 },
                      children: "My friends often describe me as someone with layers—curiosity keeps me exploring new crafts, communities, and challenges. It’s how I stay grounded and inspired."
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                size: { xs: 12, md: 6 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: 3.5,
                  sx: {
                    borderRadius: 3,
                    px: { xs: 3, md: 4 },
                    py: { xs: 3, md: 4 },
                    backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.7)" : "rgba(14, 22, 38, 0.7)"
                  },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                      spacing: 1.5,
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "body1",
                          color: "text.secondary",
                          children: "These small rituals shape the way I design and collaborate:"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "h6",
                          children: "From music and ceramics to plants, cooking, and collaborative games—I’m most alive when I’m building with others."
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                      direction: "row",
                      spacing: { xs: 2, md: 3 },
                      flexWrap: "wrap",
                      useFlexGap: true,
                      justifyContent: { xs: "flex-start", md: "space-between" },
                      children: emojiList.map((emoji) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
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
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 8, md: 10 } },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: 5,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionHeader, {
                eyebrow: "Reading Journey",
                title: readingJourney.title,
                subtitle: readingJourney.subtitle,
                align: "left"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                container: true,
                spacing: 3,
                alignItems: "stretch",
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                  size: { xs: 12 },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                    container: true,
                    spacing: 3,
                    children: books.map((book) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                      size: { xs: 12, md: 6 },
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SurfaceCard, {
                        sx: {
                          height: "100%",
                          display: "flex"
                        },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                            component: "img",
                            src: book.cover,
                            alt: `Cover of ${book.title}`,
                            sx: {
                              width: 160,
                              objectFit: "cover",
                              borderTopLeftRadius: theme.tokens.radius.surface,
                              borderBottomLeftRadius: theme.tokens.radius.surface
                            }
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                              flexGrow: 1
                            },
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                                spacing: 0.75,
                                children: [
                                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: book.label
                                  }, undefined, false, undefined, this),
                                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                    variant: "h5",
                                    children: book.title
                                  }, undefined, false, undefined, this),
                                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                    variant: "subtitle1",
                                    color: "text.secondary",
                                    children: book.author
                                  }, undefined, false, undefined, this)
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "body2",
                                color: "text.secondary",
                                children: book.summary
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                                component: "ul",
                                spacing: 0.75,
                                sx: { pl: 2, mb: 0 },
                                children: book.takeaways.map((takeaway) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                  component: "li",
                                  variant: "body2",
                                  color: "text.secondary",
                                  children: takeaway
                                }, takeaway, false, undefined, this))
                              }, undefined, false, undefined, this),
                              book.highlight && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
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
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          py: { xs: 10, md: 14 },
          borderTop: `1px solid ${theme.palette.divider}`
        },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          disableGutters: true,
          sx: { maxWidth: false },
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
            sx: {
              display: "grid",
              gridTemplateColumns: { md: "1.15fr 0.85fr" },
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                sx: {
                  position: "relative",
                  minHeight: { xs: 360, sm: 420, md: 520 },
                  overflow: "hidden"
                },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                    component: "img",
                    src: team.image,
                    alt: team.alt,
                    sx: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                      position: "absolute",
                      bottom: { xs: 16, md: 24 },
                      left: { xs: 16, md: 32 },
                      px: 2,
                      py: 0.75,
                      borderRadius: 999,
                      backdropFilter: "blur(12px)",
                      backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.82)" : "rgba(14, 22, 38, 0.72)"
                    },
                    children: team.caption
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                sx: {
                  px: { xs: 3, sm: 6, md: 8 },
                  py: { xs: 5, md: 0 }
                },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: { xs: 3, md: 4 },
                  sx: { maxWidth: 520 },
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "eyebrow",
                      color: "brand.secondary",
                      children: "Collaborators"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "h2",
                      children: team.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "body1",
                      color: "text.secondary",
                      sx: { lineHeight: 1.8 },
                      children: team.description
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                      sx: {
                        borderLeft: `3px solid ${theme.tokens.colors.secondary}`,
                        pl: 3,
                        py: 1
                      },
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
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
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 8, md: 10 } },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: 5,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionHeader, {
                eyebrow: "Education",
                title: "Academic Foundations",
                icon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SchoolRounded_default, {
                  color: "primary"
                }, undefined, false, undefined, this),
                align: "left"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                container: true,
                spacing: 3,
                children: education.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                  size: { xs: 12, md: 4 },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SurfaceCard, {
                    sx: { height: "100%" },
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                        spacing: 2,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            direction: "row",
                            spacing: 1.5,
                            alignItems: "center",
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                                label: item.badge,
                                size: "small"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "caption",
                                color: "text.secondary",
                                children: item.date
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "h5",
                            children: item.title
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "subtitle1",
                            color: "text.secondary",
                            children: item.institution
                          }, undefined, false, undefined, this),
                          item.details && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            component: "ul",
                            spacing: 0.75,
                            sx: { pl: 2, mb: 0 },
                            children: item.details.map((detail) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
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
                }, item.title, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: {
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.background.paper
        },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: 5,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionHeader, {
                eyebrow: "Continuous Learning",
                title: "Certificates & Training",
                icon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(EmojiEventsRounded_default, {
                  color: "secondary"
                }, undefined, false, undefined, this),
                align: "left"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                container: true,
                spacing: 3,
                children: certificates.map((certificate) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                  size: { xs: 12, md: 4 },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SurfaceCard, {
                    sx: { height: "100%" },
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                        spacing: 2,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                            direction: "row",
                            spacing: 1.5,
                            alignItems: "center",
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
                                label: certificate.badge,
                                size: "small"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                                variant: "caption",
                                color: "text.secondary",
                                children: certificate.date
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "h5",
                            children: certificate.title
                          }, undefined, false, undefined, this),
                          certificate.institution && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "subtitle1",
                            color: "text.secondary",
                            children: certificate.institution
                          }, undefined, false, undefined, this),
                          [certificate.hours, certificate.score, certificate.topics].filter(Boolean).map((detail) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                            variant: "body2",
                            color: "text.secondary",
                            children: detail
                          }, detail, false, undefined, this))
                        ]
                      }, undefined, true, undefined, this)
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this)
                }, certificate.title, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "section",
        sx: { py: { xs: 8, md: 10 } },
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: 5,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SectionHeader, {
                eyebrow: "References",
                title: "What My Partners Say",
                icon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(VolunteerActivismRounded_default, {
                  color: "secondary"
                }, undefined, false, undefined, this),
                align: "left"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                container: true,
                spacing: 3,
                children: references.map((reference) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
                  size: { xs: 12, md: 4 },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SurfaceCard, {
                    sx: { height: "100%" },
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
                      sx: { display: "flex", flexDirection: "column", gap: 2, height: "100%" },
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                          spacing: 0.5,
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                              variant: "h5",
                              children: reference.name
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                              variant: "subtitle2",
                              color: "text.secondary",
                              children: reference.role
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                              variant: "caption",
                              color: "text.secondary",
                              children: reference.date
                            }, undefined, false, undefined, this)
                          ]
                        }, undefined, true, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "body2",
                          color: "text.secondary",
                          sx: { lineHeight: 1.6 },
                          children: reference.text
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GhostButton_default, {
                          component: "a",
                          href: reference.linkedin,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          variant: "outlined",
                          sx: {
                            mt: "auto",
                            alignSelf: "flex-start",
                            borderColor: theme.palette.mode === "light" ? "rgba(17, 76, 170, 0.22)" : "rgba(122, 162, 255, 0.35)",
                            color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)",
                            "&:hover": {
                              borderColor: theme.palette.mode === "light" ? "rgba(17, 76, 170, 0.42)" : "rgba(122, 162, 255, 0.55)",
                              backgroundColor: theme.palette.mode === "light" ? "rgba(31, 111, 235, 0.08)" : "rgba(122, 162, 255, 0.16)"
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
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var MyStoryPage_default = MyStoryPage;
export {
  MyStoryPage_default as default
};

//# debugId=826AE6E321348CA164756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2Nob29sUm91bmRlZC5qcyIsICIuLi9zcmMvcm91dGVzL015U3RvcnlQYWdlLnRzeCIsICIuLi9zcmMvZGF0YS9teVN0b3J5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA1aC0yVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDVjLTEuMSAwLTIgLjktMiAydjFjMCAyLjU1IDEuOTIgNC42MyA0LjM5IDQuOTQuNjMgMS41IDEuOTggMi42MyAzLjYxIDIuOTZWMTlIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zdi0zLjFjMS42My0uMzMgMi45OC0xLjQ2IDMuNjEtMi45NkMxOS4wOCAxMi42MyAyMSAxMC41NSAyMSA4VjdjMC0xLjEtLjktMi0yLTJNNSA4VjdoMnYzLjgyQzUuODQgMTAuNCA1IDkuMyA1IDhtMTQgMGMwIDEuMy0uODQgMi40LTIgMi44MlY3aDJ6XCJcbn0pLCAnRW1vamlFdmVudHNSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxMy4xOHYyLjgxYzAgLjczLjQgMS40MSAxLjA0IDEuNzZsNSAyLjczYy42LjMzIDEuMzIuMzMgMS45MiAwbDUtMi43M2MuNjQtLjM1IDEuMDQtMS4wMyAxLjA0LTEuNzZ2LTIuODFsLTYuMDQgMy4zYy0uNi4zMy0xLjMyLjMzLTEuOTIgMHptNi4wNC05LjY2LTguNDMgNC42Yy0uNjkuMzgtLjY5IDEuMzggMCAxLjc2bDguNDMgNC42Yy42LjMzIDEuMzIuMzMgMS45MiAwTDIxIDEwLjA5VjE2YzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY5LjU5YzAtLjM3LS4yLS43LS41Mi0uODhsLTkuNTItNS4xOWEyLjA0IDIuMDQgMCAwIDAtMS45MiAwXCJcbn0pLCAnU2Nob29sUm91bmRlZCcpOyIsCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9NeVN0b3J5UGFnZS50c3hcbi8vIFB1cnBvc2U6IFJlaW1hZ2luZXMgdGhlIE15IFN0b3J5IHJvdXRlIHdpdGggdW5pZmllZCBkZXNpZ24gdG9rZW5zLCBjb25zaXN0ZW50IHN1cmZhY2VzLCBhbmQgY2xlYXIgaGllcmFyY2h5IGFjcm9zcyBwZXJzb25hbCBuYXJyYXRpdmUsIGdhbGxlcnksIGFuZCBjcmVkZW50aWFscy5cbmltcG9ydCBBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NOZXdSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IEVtb2ppRXZlbnRzUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1vamlFdmVudHNSb3VuZGVkXCI7XG5pbXBvcnQgU2Nob29sUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2Nob29sUm91bmRlZFwiO1xuaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBJY29uQnV0dG9uLFxuICBNb2JpbGVTdGVwcGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlTWVkaWFRdWVyeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhcmRQcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHR5cGUgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBib29rcyxcbiAgY2VydGlmaWNhdGVzLFxuICBlZHVjYXRpb24sXG4gIGVtb2ppTGlzdCxcbiAgZ2FsbGVyeSxcbiAgcGhpbG9zb3BoeVRleHQsXG4gIHJlYWRpbmdKb3VybmV5LFxuICByZWZlcmVuY2VzLFxuICBzdG9yeUhlcm8sXG4gIHRlYW0sXG59IGZyb20gXCIuLi9kYXRhL215U3RvcnlcIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL1BpbGxcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgZXllYnJvdz86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdE5vZGU7XG4gIGFsaWduPzogXCJjZW50ZXJcIiB8IFwibGVmdFwiO1xufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7IGV5ZWJyb3csIHRpdGxlLCBzdWJ0aXRsZSwgaWNvbiwgYWxpZ24gPSBcImNlbnRlclwiIH06IFNlY3Rpb25IZWFkZXJQcm9wcykgPT4gKFxuICA8U3RhY2tcbiAgICBzcGFjaW5nPXsxLjV9XG4gICAgYWxpZ25JdGVtcz17YWxpZ24gPT09IFwiY2VudGVyXCIgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCJ9XG4gICAgdGV4dEFsaWduPXthbGlnbn1cbiAgPlxuICAgIHsoaWNvbiB8fCBleWVicm93KSAmJiAoXG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAge2V5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgPC9TdGFjaz5cbiAgICApfVxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAge3N1YnRpdGxlICYmIChcbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgc3g9e3sgbWF4V2lkdGg6IGFsaWduID09PSBcImNlbnRlclwiID8gNzIwIDogNjQwLCBsaW5lSGVpZ2h0OiAxLjYgfX1cbiAgICAgID5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICl9XG4gIDwvU3RhY2s+XG4pO1xuXG5jb25zdCBTdXJmYWNlQ2FyZCA9ICh7IHN4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfTogQ2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9e3tcbiAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAuLi5zeCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJkPlxuKTtcblxuY29uc3QgTGlmZUluRnJhbWVzU2xpZGVyID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWRVcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKSk7XG4gIGNvbnN0IGlzU21VcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKSk7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBpc01kVXAgPyAzIDogaXNTbVVwID8gMiA6IDE7XG5cbiAgY29uc3QgbWF4SW5kZXggPSB1c2VNZW1vKFxuICAgICgpID0+IE1hdGgubWF4KDAsIGdhbGxlcnkubGVuZ3RoIC0gc2xpZGVzUGVyVmlldyksXG4gICAgW3NsaWRlc1BlclZpZXddLFxuICApO1xuXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleCgocHJldikgPT4gTWF0aC5taW4ocHJldiwgbWF4SW5kZXgpKTtcbiAgfSwgW21heEluZGV4XSk7XG5cbiAgY29uc3QgaGFuZGxlU3RlcCA9IChkaXJlY3Rpb246IC0xIHwgMSkgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiBNYXRoLm1pbihtYXhJbmRleCwgTWF0aC5tYXgoMCwgcHJldiArIGRpcmVjdGlvbikpKTtcbiAgfTtcblxuICBjb25zdCBzbGlkZVdpZHRoUGVyY2VudCA9IDEwMCAvIHNsaWRlc1BlclZpZXc7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAzNjBtcyBlYXNlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2FjdGl2ZUluZGV4ICogc2xpZGVXaWR0aFBlcmNlbnR9JSlgLFxuICAgICAgICAgICAgd2lkdGg6IGAkeyhnYWxsZXJ5Lmxlbmd0aCAqIDEwMCkgLyBzbGlkZXNQZXJWaWV3fSVgLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Z2FsbGVyeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uY2FwdGlvbn1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4OiBgMCAwICR7c2xpZGVXaWR0aFBlcmNlbnR9JWAsXG4gICAgICAgICAgICAgICAgbXg6IHsgeHM6IDAuNzUsIG1kOiAxLjI1IH0sXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogMjYwLCBzbTogMzAwLCBtZDogMzIwIH0sXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2l0ZW0uY2FwdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5zdWJjYXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YmNhcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBwaG90b1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXAoLTEpfVxuICAgICAgICBkaXNhYmxlZD17YWN0aXZlSW5kZXggPT09IDB9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgbGVmdDogeyB4czogNiwgc206IDEyIH0sXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIGJveFNoYWRvdzogYWN0aXZlSW5kZXggPT09IDAgPyBcIm5vbmVcIiA6IHRoZW1lLnRva2Vucy5zaGFkb3cubGV2ZWwxLFxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHBob3RvXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcCgxKX1cbiAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZUluZGV4ID09PSBtYXhJbmRleH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICByaWdodDogeyB4czogNiwgc206IDEyIH0sXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIGJveFNoYWRvdzogYWN0aXZlSW5kZXggPT09IG1heEluZGV4ID8gXCJub25lXCIgOiB0aGVtZS50b2tlbnMuc2hhZG93LmxldmVsMSxcbiAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgIDxNb2JpbGVTdGVwcGVyXG4gICAgICAgIHZhcmlhbnQ9XCJkb3RzXCJcbiAgICAgICAgc3RlcHM9e21heEluZGV4ICsgMX1cbiAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVJbmRleH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgbXQ6IDMsXG4gICAgICAgICAgXCImIC5NdWlNb2JpbGVTdGVwcGVyLWRvdFwiOiB7XG4gICAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICAgIGhlaWdodDogOCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBuZXh0QnV0dG9uPXtcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXAoMSl9XG4gICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlSW5kZXggPT09IG1heEluZGV4fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgYmFja0J1dHRvbj17XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwKC0xKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVJbmRleCA9PT0gMH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBzbGlkZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93QmFja0lvc05ld1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmNvbnN0IE15U3RvcnlQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC42KVwiIDogXCJyZ2JhKDgsIDE0LCAyNiwgMC44NSlcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtYXhXaWR0aDogODQwLFxuICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJsZWZ0XCIsIG1kOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiIHN4PXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgIE15IHN0b3J5XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheVwiPntzdG9yeUhlcm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtzdG9yeUhlcm8uc3VidGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RvcnlIZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHQ6IHsgeHM6IDIsIG1kOiA0IH0sXG4gICAgICAgICAgcGI6IHsgeHM6IDgsIG1kOiAxMiB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IG1heFdpZHRoOiA3MjAgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIFBob3RvIFN0cmlwXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5MYXllcnMgb2YgdGhlIGV2ZXJ5ZGF5PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBIGdsaW1wc2UgaW50byB0aGUgdGV4dHVyZXMsIHBlb3BsZSwgYW5kIHNjZW5lcyB0aGF0IHNoYXBlIGhvdyBJIGFwcHJvYWNoIHByb2R1Y3RcbiAgICAgICAgICAgICAgZGVzaWdu4oCUdW5maWx0ZXJlZCwgYSBsaXR0bGUgaW1wZXJmZWN0LCBhbmQgdmVyeSBhbGl2ZS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBzeD17eyBtYXhXaWR0aDogZmFsc2UsIG10OiB7IHhzOiA0LCBtZDogNiB9IH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBzbTogNCwgbWQ6IDYgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbHVtbkNvdW50OiB7IHhzOiAyLCBzbTogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgICBjb2x1bW5HYXA6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2FsbGVyeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0uY2FwdGlvbn0tJHtpdGVtLmltYWdlfWB9XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBicmVha0luc2lkZTogXCJhdm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICBtYjogeyB4czogMS41LCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDggfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGhpbG9zb3BoeVRleHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnByaW1hcnl9YCxcbiAgICAgICAgICAgICAgICAgICAgcGw6IDIsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgICAgSSBhbSBkcml2ZW4gYnkgZXhwZXJpZW5jZXPigJRkZXNpZ25pbmcgdGhlbSwgbGVhcm5pbmcgZnJvbSB0aGVtLCBhbmQgbGl2aW5nIHRoZW1cbiAgICAgICAgICAgICAgICAgICAgZGVlcGx5LlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICBNeSBmcmllbmRzIG9mdGVuIGRlc2NyaWJlIG1lIGFzIHNvbWVvbmUgd2l0aCBsYXllcnPigJRjdXJpb3NpdHkga2VlcHMgbWUgZXhwbG9yaW5nXG4gICAgICAgICAgICAgICAgICBuZXcgY3JhZnRzLCBjb21tdW5pdGllcywgYW5kIGNoYWxsZW5nZXMuIEl04oCZcyBob3cgSSBzdGF5IGdyb3VuZGVkIGFuZCBpbnNwaXJlZC5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezMuNX1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBUaGVzZSBzbWFsbCByaXR1YWxzIHNoYXBlIHRoZSB3YXkgSSBkZXNpZ24gYW5kIGNvbGxhYm9yYXRlOlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgIEZyb20gbXVzaWMgYW5kIGNlcmFtaWNzIHRvIHBsYW50cywgY29va2luZywgYW5kIGNvbGxhYm9yYXRpdmUgZ2FtZXPigJRJ4oCZbSBtb3N0XG4gICAgICAgICAgICAgICAgICAgIGFsaXZlIHdoZW4gSeKAmW0gYnVpbGRpbmcgd2l0aCBvdGhlcnMuXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgIHVzZUZsZXhHYXBcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IHhzOiBcImZsZXgtc3RhcnRcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Vtb2ppTGlzdC5tYXAoKGVtb2ppKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IDU2LCBzbTogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZW1vaml9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIlJlYWRpbmcgSm91cm5leVwiXG4gICAgICAgICAgICAgIHRpdGxlPXtyZWFkaW5nSm91cm5leS50aXRsZX1cbiAgICAgICAgICAgICAgc3VidGl0bGU9e3JlYWRpbmdKb3VybmV5LnN1YnRpdGxlfVxuICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiB9fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2Jvb2sudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtib29rLmNvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BDb3ZlciBvZiAke2Jvb2sudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57Ym9vay50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay50YWtlYXdheXMubWFwKCh0YWtlYXdheSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rha2Vhd2F5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rha2Vhd2F5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5oaWdobGlnaHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Ym9vay5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBzeD17eyBtYXhXaWR0aDogZmFsc2UgfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHsgbWQ6IFwiMS4xNWZyIDAuODVmclwiIH0sXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogeyB4czogMzYwLCBzbTogNDIwLCBtZDogNTIwIH0sXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17dGVhbS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3RlYW0uYWx0fVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICBib3R0b206IHsgeHM6IDE2LCBtZDogMjQgfSxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHsgeHM6IDE2LCBtZDogMzIgfSxcbiAgICAgICAgICAgICAgICAgIHB4OiAyLFxuICAgICAgICAgICAgICAgICAgcHk6IDAuNzUsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC43MilcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RlYW0uY2FwdGlvbn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIHNtOiA2LCBtZDogOCB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiA1LCBtZDogMCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX0gc3g9e3sgbWF4V2lkdGg6IDUyMCB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBDb2xsYWJvcmF0b3JzXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0ZWFtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS44IH19PlxuICAgICAgICAgICAgICAgICAge3RlYW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnNlY29uZGFyeX1gLFxuICAgICAgICAgICAgICAgICAgICBwbDogMyxcbiAgICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAgICDigJxEZXNpZ25pbmcgd2l0aCBwZW9wbGUgSSB0cnVzdCBrZWVwcyB0aGUgd29yayBodW1ibGUsIGFtYml0aW91cywgYW5kIGpveWZ1bC7igJ1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiQWNhZGVtaWMgRm91bmRhdGlvbnNcIlxuICAgICAgICAgICAgICBpY29uPXs8U2Nob29sUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICB7ZWR1Y2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPXtpdGVtLmJhZGdlfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2l0ZW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHMubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgIGV5ZWJyb3c9XCJDb250aW51b3VzIExlYXJuaW5nXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDZXJ0aWZpY2F0ZXMgJiBUcmFpbmluZ1wiXG4gICAgICAgICAgICAgIGljb249ezxFbW9qaUV2ZW50c1JvdW5kZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz59XG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICB7Y2VydGlmaWNhdGVzLm1hcCgoY2VydGlmaWNhdGUpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtjZXJ0aWZpY2F0ZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9e2NlcnRpZmljYXRlLmJhZGdlfSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntjZXJ0aWZpY2F0ZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuaW5zdGl0dXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbY2VydGlmaWNhdGUuaG91cnMsIGNlcnRpZmljYXRlLnNjb3JlLCBjZXJ0aWZpY2F0ZS50b3BpY3NdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkga2V5PXtkZXRhaWx9IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgICBleWVicm93PVwiUmVmZXJlbmNlc1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBNeSBQYXJ0bmVycyBTYXlcIlxuICAgICAgICAgICAgICBpY29uPXs8Vm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fVxuICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAge3JlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtyZWZlcmVuY2UubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57cmVmZXJlbmNlLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS5yb2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2UuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxHaG9zdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyZWZlcmVuY2UubGlua2VkaW59XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTcsIDc2LCAxNzAsIDAuMjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMzUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMTcsIDc2LCAxNzAsIDAuNDIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC41NSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMDgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4xNilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBvbiBMaW5rZWRJblxuICAgICAgICAgICAgICAgICAgICAgIDwvR2hvc3RCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15U3RvcnlQYWdlO1xuXG5cbiIsCiAgICAiLy8gRmlsZTogc3JjL2RhdGEvbXlTdG9yeS50c1xuLy8gUHVycG9zZTogU3RvcmVzIG5hcnJhdGl2ZSwgZ2FsbGVyeSwgcmVhZGluZyBsaXN0LCBhbmQgY3JlZGVudGlhbCBkYXRhIHVzZWQgYWNyb3NzIHRoZSBNeSBTdG9yeSBwYWdlLlxuaW1wb3J0IGNyZWF0aXZlQ29uZmlkZW5jZUNvdmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9ib29rcy9jcmVhdGl2ZS1jb25maWRlbmNlLmpwZ1wiO1xuaW1wb3J0IGRlc2lnbk9mRXZlcnlkYXlUaGluZ3NDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvYm9va3MvZGVzaWduLW9mLWV2ZXJ5ZGF5LXRoaW5ncy5qcGdcIjtcbmltcG9ydCBzcHJpbnRDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvYm9va3Mvc3ByaW50LmpwZ1wiO1xuaW1wb3J0IGRpdmFyVGVhbVBob3RvQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9kaXZhci10ZWFtLmpwZ1wiO1xuaW1wb3J0IG1hc2loQ2hpbGRQaG90b0Fzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtY2hpbGQtcGhvdG8ucG5nXCI7XG5pbXBvcnQgbWFzaWhDb2ZmZWVBcnRpc3RBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLWNvZmZlZS1hcnRpc3QucG5nXCI7XG5pbXBvcnQgbWFzaWhNb3VudGFpbmVlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtbW91bnRhaW5lZXIucG5nXCI7XG5pbXBvcnQgbWFzaWhVeERlc2lnbmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC11eC1kZXNpZ25lci5wbmdcIjtcbmltcG9ydCBhaUFuZFV4Q292ZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jvb2tzL2FpLWFuZC11eC5qcGdcIjtcbmltcG9ydCBtYXNpaFdvb2RDYXJ2ZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLXdvb2QtY2FydmVyLnBuZ1wiO1xuXG5jb25zdCByZXNvbHZlQXNzZXQgPSAoYXNzZXQ6IHN0cmluZykgPT4gbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xudHlwZSBTdG9yeUhlcm8gPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIEdhbGxlcnlJdGVtID0ge1xuICBpbWFnZTogc3RyaW5nO1xuICBhbHQ6IHN0cmluZztcbiAgY2FwdGlvbjogc3RyaW5nO1xuICBzdWJjYXB0aW9uPzogc3RyaW5nO1xufTtcblxudHlwZSBSZWFkaW5nSm91cm5leSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgY3VycmVudGx5UmVhZGluZzoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgQm9vayA9IHtcbiAgY292ZXI6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgdGFrZWF3YXlzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgaGlnaGxpZ2h0Pzogc3RyaW5nO1xufTtcblxudHlwZSBUZWFtU25hcHNob3QgPSB7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICBjYXB0aW9uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIEVkdWNhdGlvbkl0ZW0gPSB7XG4gIGJhZGdlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaW5zdGl0dXRpb246IHN0cmluZztcbiAgZGV0YWlscz86IHJlYWRvbmx5IHN0cmluZ1tdO1xufTtcblxudHlwZSBDZXJ0aWZpY2F0ZUl0ZW0gPSB7XG4gIGJhZGdlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaW5zdGl0dXRpb24/OiBzdHJpbmc7XG4gIGhvdXJzPzogc3RyaW5nO1xuICB0b3BpY3M/OiBzdHJpbmc7XG4gIHNjb3JlPzogc3RyaW5nO1xufTtcblxudHlwZSBSZWZlcmVuY2VJdGVtID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGxpbmtlZGluOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcnlIZXJvOiBTdG9yeUhlcm8gPSB7XG4gIHRpdGxlOiBcIkkgYW0gTWFzaWhcIixcbiAgc3VidGl0bGU6IFwiQSBDcmVhdG9yIG9mIE1lYW5pbmdmdWwgRXhwZXJpZW5jZXNcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJPdXRzaWRlIG9mIGRlc2lnbiwgSSBlbmpveSBleHBsb3JpbmcgY2hhbGxlbmdlcyBhbmQgbGVhcm5pbmcgdGhyb3VnaCBleHBlcmllbmNlcyBsaWtlIG1vdW50YWluZWVyaW5nLCB3b29kIGNhcnZpbmcsIGFuZCB0ZWFjaGluZy4gVGhlc2UgcHVyc3VpdHMgaGF2ZSB0YXVnaHQgbWUgcGF0aWVuY2UsIHJlc2lsaWVuY2UsIGFuZCBlbXBhdGh5LCB3aGljaCBJIGJyaW5nIGludG8gbXkgd29yayB0byBjcmFmdCBtZWFuaW5nZnVsIGFuZCB0aG91Z2h0ZnVsIGRlc2lnbnMuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZ2FsbGVyeSA9IFtcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhDaGlsZFBob3RvQXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBhcyBhIGNoaWxkIGluIGhpcyBkYWQncyBqYWNrZXRcIixcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgQ2hpbGQgaW4gTXkgRGFkJ3MgSmFja2V0XCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loTW91bnRhaW5lZXJBc3NldCksXG4gICAgYWx0OiBcIk1hc2loIGFzIGEgbW91bnRhaW5lZXJcIixcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgTW91bnRhaW5lZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhDb2ZmZWVBcnRpc3RBc3NldCksXG4gICAgYWx0OiBcIk1hc2loJ3MgbGF0dGUgYXJ0XCIsXG4gICAgY2FwdGlvbjogXCJNeSBhcnQgb24gYSBMYXR0ZVwiLFxuICAgIHN1YmNhcHRpb246IFwiTGF0dGUgQXJ0IGJ5IG1lIDopXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loVXhEZXNpZ25lckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSBVWCBEZXNpZ25lclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBVWCBEZXNpZ25lclwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaFdvb2RDYXJ2ZXJBc3NldCksXG4gICAgYWx0OiBcIk1hc2loIGFzIGEgd29vZCBjYXJ2ZXJcIixcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgV29vZCBDYXJ2ZXJcIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8R2FsbGVyeUl0ZW0+O1xuXG5leHBvcnQgY29uc3QgcGhpbG9zb3BoeVRleHQgPVxuICBcIkkgZGVzaWduIGV4cGVyaWVuY2VzIHRoYXQgbm90IG9ubHkgc29sdmUgcHJvYmxlbXMgYnV0IGNyZWF0ZSB2YWx1ZSBmb3IgYm90aCBidXNpbmVzc2VzIGFuZCB1c2Vycy4gSSBlbmpveSBkaWdnaW5nIGRlZXAgaW50byBjaGFsbGVuZ2VzLCBhbmFseXppbmcgdGhlbSB0aG9yb3VnaGx5LCBhbmQgY29taW5nIHVwIHdpdGggc29sdXRpb25zIHRoYXQgdHJ1bHkgbWFrZSBhIGRpZmZlcmVuY2UuXCI7XG5cbmV4cG9ydCBjb25zdCBlbW9qaUxpc3Q6IHJlYWRvbmx5IHN0cmluZ1tdID0gW1wi4piV77iPXCIsIFwi8J+nl/Cfj71cIiwgXCLwn5K7XCIsIFwi8J+TmlwiXTtcblxuZXhwb3J0IGNvbnN0IHJlYWRpbmdKb3VybmV5OiBSZWFkaW5nSm91cm5leSA9IHtcbiAgdGl0bGU6IFwiRGVzaWduIEJvb2tzIEd1aWRpbmcgTXkgQ3JhZnRcIixcbiAgc3VidGl0bGU6XG4gICAgXCJJbnNwaXJlZCBieSB0aGUgbGl2aW5nIGJvb2tzaGVsdmVzIHNoYXJlZCBieSBwZWVycyBsaWtlIEt5bGUgSm9obnN0b24sIFNhd3llciBIb2xsZW5zaGVhZCwgSmFzb24gWm9vaywgYW5kIEFteSBNY0xheSBQYXRlcnNvbiwgSSBrZWVwIGEgY3VyYXRlZCByZWNvcmQgb2YgdGhlIGlkZWFzIHRoYXQgc2hhcGUgbXkgcHJhY3RpY2UuXCIsXG4gIGN1cnJlbnRseVJlYWRpbmc6IHtcbiAgICBsYWJlbDogXCJDdXJyZW50bHkgcmVhZGluZ1wiLFxuICAgIHRpdGxlOiBcIkFJIGFuZCBVWDogV2h5IEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIE5lZWRzIFVzZXIgRXhwZXJpZW5jZVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGJvb2tzID0gW1xuICB7XG4gICAgY292ZXI6IHJlc29sdmVBc3NldChkZXNpZ25PZkV2ZXJ5ZGF5VGhpbmdzQ292ZXJBc3NldCksXG4gICAgdGl0bGU6IFwiVGhlIERlc2lnbiBvZiBFdmVyeWRheSBUaGluZ3NcIixcbiAgICBhdXRob3I6IFwiRG9uIE5vcm1hblwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAxOCDCtyBSZXZpc2l0ZWQgMjAyNFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIk5vcm1hbuKAmXMgZnJhbWV3b3JrIGZvciBhZmZvcmRhbmNlcyBhbmQgZmVlZGJhY2sgaGVscGVkIG1lIGJ1aWxkIHJlc2lsaWVuY2UgYWdhaW5zdCBiaWFzIHdoZW4gdGVzdGluZyBzYWZldHktY3JpdGljYWwgZmxvd3MsIGVzcGVjaWFsbHkgd2hlbiB3ZSByZWRlc2lnbmVkIHZvaWNlIG1hc2tpbmcgZm9yIERpdmFyLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJSZWluZm9yY2VkIG15IGhhYml0IG9mIHByb3RvdHlwaW5nIGVycm9yIHN0YXRlcyBmaXJzdC5cIixcbiAgICAgIFwiSW5mbHVlbmNlZCBteSBoZXVyaXN0aWNzIGNoZWNrbGlzdCBmb3IgYWNjZXNzaWJpbGl0eSByZXZpZXdzLlwiLFxuICAgICAgXCJUYXVnaHQgbWUgdG8gbmFycmF0ZSDigJx1c2VyIGdvYWxz4oCdIGluIGV2ZXJ5IGRlc2lnbiBjcml0aXF1ZS5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHJlc29sdmVBc3NldChzcHJpbnRDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJTcHJpbnRcIixcbiAgICBhdXRob3I6IFwiSmFrZSBLbmFwcCAmIHRoZSBHViBEZXNpZ24gVGVhbVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkJvcnJvd2luZyB0aGUgc3ByaW50IHJoeXRobSBoZWxwZWQgbWUgY29hY2ggcHJvZHVjdCBzcXVhZHMgdG93YXJkIGRlY2lzaW9uIGNsYXJpdHkuIFdlIHByb3RvdHlwZWQgYW5kIGxhdW5jaGVkIGEgbG95YWx0eSBwcm9ncmFtIGF0IFNldGFyZSBBdmFsIHVzaW5nIGEgNC1kYXkgdmFyaWF0aW9uIG9mIHRoaXMgcGxheWJvb2suXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkFkb3B0ZWQgbGlnaHRuaW5nIHRhbGtzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBmYXN0LlwiLFxuICAgICAgXCJNYWRlIOKAnEhvdyBtaWdodCB3ZeKAnSBzeW50aGVzaXMgYSBzdGFwbGUgaW4gbXkgd29ya3Nob3BzLlwiLFxuICAgICAgXCJJbXByb3ZlZCByZW1vdGUgZmFjaWxpdGF0aW9uIHVzaW5nIHN0cnVjdHVyZWQgdm90aW5nIHJpdHVhbHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCksXG4gICAgdGl0bGU6IFwiQ3JlYXRpdmUgQ29uZmlkZW5jZVwiLFxuICAgIGF1dGhvcjogXCJUb20gJiBEYXZpZCBLZWxsZXlcIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMjFcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaGlzIGJvb2sgcmVmcmFtZWQgaG93IEkgbWVudG9yIG5ldyBkZXNpZ25lcnPigJRzaGlmdGluZyBjcml0aXF1ZXMgZnJvbSBzb2x1dGlvbiBqdWRnbWVudCB0byBjYXBhYmlsaXR5IGJ1aWxkaW5nIGFuZCBwc3ljaG9sb2dpY2FsIHNhZmV0eS5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCDigJxjb25maWRlbmNlIG1hcHBpbmfigJ0gaW4gbXkgbWVudG9yc2hpcCBzZXNzaW9ucy5cIixcbiAgICAgIFwiRHJvdmUgbWUgdG8gZGVzaWduIHByb2plY3QtYmFzZWQgY3VycmljdWxhIGF0IFJhaG5lbWEgQ29sbGVnZS5cIixcbiAgICAgIFwiRW5jb3VyYWdlZCBzdG9yeXRlbGxpbmcgcml0dWFscyB0byBjZWxlYnJhdGUgaW5jcmVtZW50YWwgd2lucy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHJlc29sdmVBc3NldChhaUFuZFV4Q292ZXJBc3NldCksXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gICAgYXV0aG9yOiBcIlBhbWVsYSBQYXZsaXNjYWtcIixcbiAgICBsYWJlbDogXCJJbiBwcm9ncmVzcyDCtyBRNCAyMDI1XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSeKAmW0gZXhwbG9yaW5nIGhvdyBodW1hbi1jZW50ZXJlZCBtZXRob2RzIGV2b2x2ZSB3aGVuIG1vZGVscyBtYWtlIHByb2JhYmlsaXN0aWMgZGVjaXNpb25z4oCUaW5mb3JtaW5nIHRoZSBndWFyZHJhaWxzIEkgY3JhZnQgZm9yIEFJLWF1Z21lbnRlZCBzb2x1dGlvbnMuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkJ1aWxkaW5nIGFuIGV0aGljYWwgY2hlY2tsaXN0IGZvciBBSSBleHBlcmltZW50cy5cIixcbiAgICAgIFwiUGFpcmluZyBxdWFsaXRhdGl2ZSBpbnRlcnZpZXdzIHdpdGggbW9kZWwgbWV0cmljcy5cIixcbiAgICAgIFwiRG9jdW1lbnRpbmcgcHJvbXB0IGRlc2lnbiBwYXR0ZXJucyBmb3IgbXkgdGVhbS5cIixcbiAgICBdLFxuICAgIGhpZ2hsaWdodDogXCJOb3cgUmVhZGluZ1wiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxCb29rPjtcblxuZXhwb3J0IGNvbnN0IHRlYW06IFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IHJlc29sdmVBc3NldChkaXZhclRlYW1QaG90b0Fzc2V0KSxcbiAgYWx0OiBcIk1hc2loIFNhZHJpIHdpdGggdGhlIERpdmFyIHByb2R1Y3QgdGVhbVwiLFxuICBjYXB0aW9uOlxuICAgIFwiRGl2YXIgUHJvZHVjdCBFeHBlcmllbmNlIFRlYW0g4oCUIGNvbGxhYm9yYXRpbmcgYWNyb3NzIHJlc2VhcmNoLCBwcm9kdWN0IGRlc2lnbiwgYW5kIGVuZ2luZWVyaW5nLlwiLFxuICB0aXRsZTogXCJNeSBEaXZhciBQcm9kdWN0IFRlYW1cIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJUaGVzZSBhcmUgdGhlIHRhbGVudGVkIGNvbGxlYWd1ZXMgSSdtIHByb3VkIHRvIGNvbGxhYm9yYXRlIHdpdGggYXQgRGl2YXIuIFRvZ2V0aGVyLCBvdXIgMzItcGVyc29uIHByb2R1Y3Qgb3JnYW5pemF0aW9uIGJsZW5kcyBkZXNpZ24sIHJlc2VhcmNoLCBwcm9kdWN0LCBhbmQgZW5naW5lZXJpbmcgdG8gc2hpcCBleHBlcmllbmNlcyB0aGF0IHByb3RlY3QgYW5kIGVtcG93ZXIgbWlsbGlvbnMgb2YgdXNlcnMuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZWR1Y2F0aW9uID0gW1xuICB7XG4gICAgYmFkZ2U6IFwiRGVncmVlXCIsXG4gICAgZGF0ZTogXCIyMDE1IOKAkyAyMDE4XCIsXG4gICAgdGl0bGU6IFwiQlNjIGluIFByb2plY3QgTWFuYWdlbWVudCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIlBheWFtZSBOb29yIFVuaXZlcnNpdHlcIixcbiAgICBkZXRhaWxzOiBbXG4gICAgICBcIlRlYWNoaW5nIEFzc2lzdGFudCwgYXBwb2ludGVkIGJ5IERyLiBFLiBSYWphYmksIEhlYWQgb2YgdGhlIFNjaWVuY2UgQ29tbWl0dGVlXCIsXG4gICAgICBcIkFjdGl2ZSBNZW1iZXIgb2YgdGhlIENpdmlsIEVuZ2luZWVyaW5nIGFuZCBQcm9qZWN0IE1hbmFnZW1lbnQgU2NpZW50aWZpYyBTb2NpZXR5XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkFzc29jaWF0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkFzc29jaWF0ZSBpbiBNZWNoYW5pY2FsIEVuZ2luZWVyaW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiQnUtQWxpIFNpbmEgVW5pdmVyc2l0eVwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiRGlwbG9tYVwiLFxuICAgIGRhdGU6IFwiMjAwOVwiLFxuICAgIHRpdGxlOiBcIkRpcGxvbWEgaW4gTWF0aGVtYXRpY3MgYW5kIFBoeXNpY3NcIixcbiAgICBpbnN0aXR1dGlvbjpcbiAgICAgIFwiTmF0aW9uYWwgT3JnYW5pemF0aW9uIGZvciBEZXZlbG9wbWVudCBvZiBFeGNlcHRpb25hbCBUYWxlbnRzIChTYW1wYWQpXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PEVkdWNhdGlvbkl0ZW0+O1xuXG5leHBvcnQgY29uc3QgY2VydGlmaWNhdGVzID0gW1xuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAyNVwiLFxuICAgIHRpdGxlOiBcIkRhdGEgQW5hbHlzaXMgQm9vdENhbXBcIixcbiAgICBpbnN0aXR1dGlvbjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBob3VyczogXCIxNzBoXCIsXG4gICAgdG9waWNzOlxuICAgICAgXCJEYXRhIFByZXByb2Nlc3NpbmcsIEJ1c2luZXNzIE1ldHJpY3MsIEJJIFRvb2xzLCBJbnRyb2R1Y3RvcnkgUHl0aG9uLCBTdG9yeXRlbGxpbmcgd2l0aCBEYXRhLCBTdGF0aXN0aWNhbCBJbmZlcmVuY2UsIEEvQiBUZXN0aW5nXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJMYW5ndWFnZVwiLFxuICAgIGRhdGU6IFwiTWF5IDIwMjJcIixcbiAgICB0aXRsZTogXCJJRUxUUyAoQWNhZGVtaWMpXCIsXG4gICAgaW5zdGl0dXRpb246IFwiSW50ZXJuYXRpb25hbCBEZXZlbG9wbWVudCBQcm9ncmFtIChJRFApXCIsXG4gICAgc2NvcmU6IFwiT3ZlcmFsbCBTY29yZTogNy4wXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDIxXCIsXG4gICAgdGl0bGU6IFwiQ29uZHVjdGluZyBVc2FiaWxpdHkgVGVzdGluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIlRoZSBJbnRlcmFjdGlvbiBEZXNpZ24gRm91bmRhdGlvblwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIlNlcHRlbWJlciAyMDIxXCIsXG4gICAgdGl0bGU6IFwiQ29tcGxldGUgRmlnbWEgTWVnYWNvdXJzZVwiLFxuICAgIGluc3RpdHV0aW9uOiBcIk9ubGluZSBDb3Vyc2UgLSBVZGVteVwiLFxuICAgIGhvdXJzOiBcIjQyaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQm9vdENhbXBcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAxOVwiLFxuICAgIHRpdGxlOiBcIlVJL1VYIERlc2lnbiBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE1MGhcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAxOVwiLFxuICAgIHRpdGxlOiBcIlByb2R1Y3QgYW5kIEFkdmFuY2VkIFVYIERlc2lnblwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlNoYXJpZiBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3kgJiBVbml2ZXJzaXR5IG9mIFRlaHJhblwiLFxuICAgIGhvdXJzOiBcIjk4aFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJDYXRpYSBDZXJ0aWZpY2F0ZSDigJMgUHJvZmVzc2lvbmFsIDNEIE1vZGVsaW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiSXJhbiBDYXRpYSBDb21tdW5pdHlcIixcbiAgICBzY29yZTogXCJHcmFkZTogMTAwIG91dCBvZiAxMDBcIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8Q2VydGlmaWNhdGVJdGVtPjtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNhZWVkIEFib2xnaGFzZW1pXCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IERlc2lnbiBMZWFkIGF0IFNuYXBwRm9vZFwiLFxuICAgIGRhdGU6IFwiSnVseSAzMCwgMjAyMSDigKIgUmVwb3J0ZWQgZGlyZWN0bHkgdG8gTWFzaWhcIixcbiAgICB0ZXh0OiBcIkkgaGFkIHRoZSBwcml2aWxlZ2Ugb2Ygd29ya2luZyBjbG9zZWx5IHdpdGggTWFzaWggZm9yIGEgeWVhci4gU3RhcnRpbmcgbXkgcHJvZmVzc2lvbmFsIGpvdXJuZXkgd2l0aCBoaW0gd2FzIHRydWx5IGZvcnR1bmF0ZTsgaGUncyBub3Qgb25seSBlbXBhdGhldGljIHRvd2FyZHMgY29sbGVhZ3VlcyBidXQgYWxzbyBhZGVwdCBhdCBwcmlvcml0aXppbmcgdGFza3MgYmFzZWQgb24gaW5kaXZpZHVhbCBzdHJlbmd0aHMgYW5kIGFzc2lnbmluZyB0aGVtIGFjY29yZGluZ2x5LiBNYXNpaCBwbGFjZXMgc2lnbmlmaWNhbnQgZW1waGFzaXMgb24gcGVyc29uYWwgZ3Jvd3RoLCBvZmZlcmluZyBwcmFjdGljYWwgcmVzb3VyY2VzIHRhaWxvcmVkIHRvIHRlYW0gbWVtYmVycycgY29tcGV0ZW5jaWVzLiBXb3JraW5nIGFsb25nc2lkZSBoaW0gd2FzIGJvdGggZW5qb3lhYmxlIGFuZCBlbnJpY2hpbmcuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhZWVkLWFib2xnaGFzZW1pL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGkgQXphZGVoXCIsXG4gICAgcm9sZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBhdCBVc2VyVGVzdGluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAzMSwgMjAyMSDigKIgTWFzaWgncyB0ZWFjaGVyXCIsXG4gICAgdGV4dDogXCJNYXNpaCBpcyBvbmUgb2YgbXkgcHJpdmlsZWdlZCBzdHVkZW50cyB3aG8gaXMgZGV0ZXJtaW5lZCB0byBpbXByb3ZlIGhpcyBrbm93bGVkZ2UgYW5kIHNraWxscy4gSGlzIGNvbW1pdG1lbnQgYW5kIHB1bmN0dWFsaXR5IGluIGRlbGl2ZXJpbmcgYXNzaWdubWVudHMgYXJlIGNvbW1lbmRhYmxlLiBJbiBteSBvcGluaW9uLCBoaXMgaW50ZXJlc3QgaW4gbGVhcm5pbmcgaGFzIGJlZW4gb25lIG9mIHRoZSBrZXkgcmVhc29ucyBmb3IgaGlzIHN1Y2Nlc3MuXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsaS1hemFkZWgvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvc3NlaW4gTWFobW91ZHZhbmRcIixcbiAgICByb2xlOiBcIkRlc2lnbiBMZWFkIGF0IFNldGFyZSBBdmFsIChNQ0kpXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAxMCwgMjAyMSDigKIgSG9zc2VpbiBtYW5hZ2VkIE1hc2loIGRpcmVjdGx5XCIsXG4gICAgdGV4dDogXCJJIGhhdmUga25vd24gTWFzaWggc2luY2UgMjAxOCwgYW5kIGZyb20gdGhlIGJlZ2lubmluZywgaGlzIHBvdGVudGlhbCB0YWxlbnQgd2FzIGV2aWRlbnQsIG1hcmtpbmcgdGhlIHN0YXJ0IG9mIG91ciBjb2xsYWJvcmF0aXZlIGpvdXJuZXkuIEZvciBjb25zaXN0ZW50LCB0b3AtcXVhbGl0eSBkZXNpZ24sIHlvdSBvbmx5IG5lZWQgdG8gZ2l2ZSBNYXNpaCB0aGUgcmF3IGRhdGEgYW5kIGFueSB1bmNlcnRhaW50aWVzLiBXaGlsZSB3b3JraW5nIHRvZ2V0aGVyIG9uIHRoZSBwcm9kdWN0IHRlYW0gYXQgU2V0YXJlIEF2YWwgQ29tcGFueSwgaGlzIGV4cGVydGlzZSB3YXMgY3J1Y2lhbCBpbiBwcm9ibGVtIGRlZmluaXRpb24sIHNvbHV0aW9uIGZpbmRpbmcsIGFuZCBkZXNpZ25pbmcgZmxvd3MuIFRoZSBvdXRjb21lcyBvZiBoaXMgcHJvZmVzc2lvbmFsIGFuZCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBkZXNpZ25zIGhhdmUgYWx3YXlzIGJlZW4gb3V0c3RhbmRpbmcuIEhlIGlzIGEgY29uc3VtbWF0ZSBwcm9mZXNzaW9uYWwsIGFuZCBJIGhpZ2hseSByZWNvbW1lbmQgaGltLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3NzZWlubWFobW91ZHZhbmQvXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PFJlZmVyZW5jZUl0ZW0+O1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUsMkRBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLG9CQUFvQjs7O0FDSHhCO0FBSEE7QUFJQSxJQUFlLHNEQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxlQUFlOzs7QUNlbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLElBQU0sZUFBZSxDQUFDLFVBQWtCLElBQUksSUFBSSxPQUFPLFlBQVksR0FBRyxFQUFFO0FBbUVqRSxJQUFNLFlBQXVCO0FBQUEsRUFDbEMsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsYUFDRTtBQUNKO0FBRU8sSUFBTSxVQUFVO0FBQUEsRUFDckI7QUFBQSxJQUNFLE9BQU8sYUFBYSx5QkFBb0I7QUFBQSxJQUN4QyxLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU8sYUFBYSx5QkFBcUI7QUFBQSxJQUN6QyxLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU8sYUFBYSwyQkFBc0I7QUFBQSxJQUMxQyxLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU8sYUFBYSx5QkFBb0I7QUFBQSxJQUN4QyxLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU8sYUFBYSx5QkFBb0I7QUFBQSxJQUN4QyxLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDWDtBQUNGO0FBRU8sSUFBTSxpQkFDWDtBQUVLLElBQU0sWUFBK0IsQ0FBQyxNQUFLLDRCQUFRLGdCQUFNLGNBQUk7QUFFN0QsSUFBTSxpQkFBaUM7QUFBQSxFQUM1QyxPQUFPO0FBQUEsRUFDUCxVQUNFO0FBQUEsRUFDRixrQkFBa0I7QUFBQSxJQUNoQixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDVDtBQUNGO0FBRU8sSUFBTSxRQUFRO0FBQUEsRUFDbkI7QUFBQSxJQUNFLE9BQU8sYUFBYSxpQ0FBZ0M7QUFBQSxJQUNwRCxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixXQUFXO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPLGFBQWEsY0FBZ0I7QUFBQSxJQUNwQyxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixXQUFXO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPLGFBQWEsMkJBQTRCO0FBQUEsSUFDaEQsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsV0FBVztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTyxhQUFhLGlCQUFpQjtBQUFBLElBQ3JDLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFdBQVc7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsRUFDYjtBQUNGO0FBRU8sSUFBTSxPQUFxQjtBQUFBLEVBQ2hDLE9BQU8sYUFBYSxrQkFBbUI7QUFBQSxFQUN2QyxLQUFLO0FBQUEsRUFDTCxTQUNFO0FBQUEsRUFDRixPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQ0o7QUFFTyxJQUFNLFlBQVk7QUFBQSxFQUN2QjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxFQUNKO0FBQ0Y7QUFFTyxJQUFNLGVBQWU7QUFBQSxFQUMxQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsUUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVPLElBQU0sYUFBYTtBQUFBLEVBQ3hCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLEVBQ1o7QUFDRjs7OztBRDdQQSxJQUFNLGdCQUFnQixHQUFHLFNBQVMsT0FBTyxVQUFVLE1BQU0sUUFBUSwrQkFDL0QsdUJBeUJFLGVBekJGO0FBQUEsRUFDRSxTQUFTO0FBQUEsRUFDVCxZQUFZLFVBQVUsV0FBVyxXQUFXO0FBQUEsRUFDNUMsV0FBVztBQUFBLEVBSGIsVUF5QkU7QUFBQSxLQXBCRSxRQUFRLDRCQUNSLHVCQU9FLGVBUEY7QUFBQSxNQUFPLFdBQVU7QUFBQSxNQUFNLFNBQVM7QUFBQSxNQUFHLFlBQVc7QUFBQSxNQUE5QyxVQU9FO0FBQUEsUUFOQztBQUFBLFFBQ0EsMkJBQ0MsdUJBRUUsb0JBRkY7QUFBQSxVQUFZLFNBQVE7QUFBQSxVQUFNLE9BQU07QUFBQSxVQUFoQyxVQUNHO0FBQUEsV0FESCxpQ0FFRTtBQUFBO0FBQUEsT0FMTixnQ0FPRTtBQUFBLG9CQUVKLHVCQUFrQyxvQkFBbEM7QUFBQSxNQUFZLFNBQVE7QUFBQSxNQUFwQixVQUEwQjtBQUFBLE9BQTFCLGlDQUFrQztBQUFBLElBQ2pDLDRCQUNDLHVCQU1FLG9CQU5GO0FBQUEsTUFDRSxTQUFRO0FBQUEsTUFDUixPQUFNO0FBQUEsTUFDTixJQUFJLEVBQUUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksSUFBSTtBQUFBLE1BSGxFLFVBS0c7QUFBQSxPQUxILGlDQU1FO0FBQUE7QUFBQSxHQXZCTixnQ0F5QkU7QUFHSixJQUFNLGNBQWMsR0FBRyxJQUFJLGFBQWEsNEJBQ3RDLHVCQVdFLGNBWEY7QUFBQSxFQUNFLFdBQVc7QUFBQSxFQUNYLFNBQVE7QUFBQSxFQUNSLElBQUk7QUFBQSxJQUNGLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxPQUNSO0FBQUEsRUFDTDtBQUFBLEtBQ0k7QUFBQSxFQVJOO0FBQUEsb0NBV0U7QUF5SkosSUFBTSxjQUFjLE1BQU07QUFBQSxFQUN4QixNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFO0FBQUEsY0EyZ0JFO0FBQUEsc0JBMWdCQSx1QkFpQ0UsYUFqQ0Y7QUFBQSxRQUNFLFdBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUEsVUFDckIsaUJBQ0UsTUFBTSxRQUFRLFNBQVMsVUFBVSw2QkFBNkI7QUFBQSxRQUNsRTtBQUFBLFFBTkYsMEJBUUUsdUJBd0JFLG1CQXhCRjtBQUFBLG9DQUNFLHVCQXNCRSxlQXRCRjtBQUFBLFlBQ0UsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxZQUN4QixJQUFJO0FBQUEsY0FDRixVQUFVO0FBQUEsY0FDVixJQUFJO0FBQUEsY0FDSixXQUFXLEVBQUUsSUFBSSxRQUFRLElBQUksU0FBUztBQUFBLFlBQ3hDO0FBQUEsWUFORixVQXNCRTtBQUFBLDhCQWRBLHVCQUVFLG9CQUZGO0FBQUEsZ0JBQVksU0FBUTtBQUFBLGdCQUFNLE9BQU07QUFBQSxnQkFBa0IsSUFBSSxFQUFFLFdBQVcsT0FBTztBQUFBLGdCQUExRTtBQUFBLGtEQUVFO0FBQUEsOEJBQ0YsdUJBQWlELG9CQUFqRDtBQUFBLGdCQUFZLFNBQVE7QUFBQSxnQkFBcEIsVUFBK0IsVUFBVTtBQUFBLGlCQUF6QyxpQ0FBaUQ7QUFBQSw4QkFDakQsdUJBRUUsb0JBRkY7QUFBQSxnQkFBWSxTQUFRO0FBQUEsZ0JBQU8sT0FBTTtBQUFBLGdCQUFqQyxVQUNHLFVBQVU7QUFBQSxpQkFEYixpQ0FFRTtBQUFBLDhCQUNGLHVCQU1FLG9CQU5GO0FBQUEsZ0JBQ0UsU0FBUTtBQUFBLGdCQUNSLE9BQU07QUFBQSxnQkFDTixJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsZ0JBSHhCLFVBS0csVUFBVTtBQUFBLGlCQUxiLGlDQU1FO0FBQUE7QUFBQSxhQXJCSixnQ0FzQkU7QUFBQSxXQXZCSixpQ0F3QkU7QUFBQSxTQWhDSixpQ0FpQ0U7QUFBQSxzQkFFRix1QkF3REUsYUF4REY7QUFBQSxRQUNFLFdBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsVUFDbkIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxRQUN0QjtBQUFBLFFBTEYsVUF3REU7QUFBQSwwQkFqREEsdUJBV0UsbUJBWEY7QUFBQSxzQ0FDRSx1QkFTRSxlQVRGO0FBQUEsY0FBTyxTQUFTO0FBQUEsY0FBSyxJQUFJLEVBQUUsVUFBVSxJQUFJO0FBQUEsY0FBekMsVUFTRTtBQUFBLGdDQVJBLHVCQUVFLG9CQUZGO0FBQUEsa0JBQVksU0FBUTtBQUFBLGtCQUFVLE9BQU07QUFBQSxrQkFBcEM7QUFBQSxvREFFRTtBQUFBLGdDQUNGLHVCQUFpRCxvQkFBakQ7QUFBQSxrQkFBWSxTQUFRO0FBQUEsa0JBQXBCO0FBQUEsb0RBQWlEO0FBQUEsZ0NBQ2pELHVCQUdFLG9CQUhGO0FBQUEsa0JBQVksU0FBUTtBQUFBLGtCQUFRLE9BQU07QUFBQSxrQkFBbEM7QUFBQSxvREFHRTtBQUFBO0FBQUEsZUFSSixnQ0FTRTtBQUFBLGFBVkosaUNBV0U7QUFBQSwwQkFDRix1QkFvQ0UsbUJBcENGO0FBQUEsWUFBVyxnQkFBYztBQUFBLFlBQUMsSUFBSSxFQUFFLFVBQVUsT0FBTyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO0FBQUEsWUFBdEUsMEJBQ0UsdUJBa0NFLGFBbENGO0FBQUEsY0FDRSxJQUFJO0FBQUEsZ0JBQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsY0FDNUI7QUFBQSxjQUhGLDBCQUtFLHVCQTRCRSxhQTVCRjtBQUFBLGdCQUNFLElBQUk7QUFBQSxrQkFDRixhQUFhLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxrQkFDbkMsV0FBVyxFQUFFLElBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxnQkFDaEM7QUFBQSxnQkFKRixVQU1HLFFBQVEsSUFBSSxDQUFDLHlCQUNaLHVCQW1CRSxhQW5CRjtBQUFBLGtCQUVFLElBQUk7QUFBQSxvQkFDRixhQUFhO0FBQUEsb0JBQ2IsSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxvQkFDdkIsY0FBYztBQUFBLG9CQUNkLFVBQVU7QUFBQSxrQkFDWjtBQUFBLGtCQVBGLDBCQVNFLHVCQUFDLGFBQUQ7QUFBQSxvQkFDRSxXQUFVO0FBQUEsb0JBQ1YsS0FBSyxLQUFLO0FBQUEsb0JBQ1YsS0FBSyxLQUFLO0FBQUEsb0JBQ1YsSUFBSTtBQUFBLHNCQUNGLE9BQU87QUFBQSxzQkFDUCxTQUFTO0FBQUEsc0JBQ1QsV0FBVztBQUFBLG9CQUNiO0FBQUEscUJBUkYsaUNBU0E7QUFBQSxtQkFqQkssR0FBRyxLQUFLLFdBQVcsS0FBSyxTQUQvQixzQkFtQkUsQ0FDSDtBQUFBLGlCQTNCSCxpQ0E0QkU7QUFBQSxlQWpDSixpQ0FrQ0U7QUFBQSxhQW5DSixpQ0FvQ0U7QUFBQTtBQUFBLFNBdkRKLGdDQXdERTtBQUFBLHNCQUVGLHVCQXVGRSxhQXZGRjtBQUFBLFFBQ0UsV0FBVTtBQUFBLFFBQ1YsSUFBSTtBQUFBLFVBQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxVQUNwQixXQUFXLGFBQWEsTUFBTSxRQUFRO0FBQUEsVUFDdEMsaUJBQWlCO0FBQUEsUUFDbkI7QUFBQSxRQU5GLDBCQVFFLHVCQThFRSxtQkE5RUY7QUFBQSxvQ0FDRSx1QkE0RUUsY0E1RUY7QUFBQSxZQUFNLFdBQVM7QUFBQSxZQUFDLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsWUFBRyxZQUFXO0FBQUEsWUFBdEQsVUE0RUU7QUFBQSw4QkEzRUEsdUJBNEJFLGNBNUJGO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBMEJFLGVBMUJGO0FBQUEsa0JBQU8sU0FBUztBQUFBLGtCQUFoQixVQTBCRTtBQUFBLG9DQXpCQSx1QkFRRSxvQkFSRjtBQUFBLHNCQUNFLFNBQVE7QUFBQSxzQkFDUixJQUFJO0FBQUEsd0JBQ0YsV0FBVztBQUFBLHdCQUNYLFlBQVk7QUFBQSxzQkFDZDtBQUFBLHNCQUxGLFVBT0c7QUFBQSx1QkFQSCxpQ0FRRTtBQUFBLG9DQUNGLHVCQVdFLGFBWEY7QUFBQSxzQkFDRSxJQUFJO0FBQUEsd0JBQ0YsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPO0FBQUEsd0JBQzdDLElBQUk7QUFBQSx3QkFDSixJQUFJO0FBQUEsc0JBQ047QUFBQSxzQkFMRiwwQkFPRSx1QkFHRSxvQkFIRjtBQUFBLHdCQUFZLFNBQVE7QUFBQSx3QkFBWSxPQUFNO0FBQUEsd0JBQWlCLElBQUksRUFBRSxZQUFZLElBQUk7QUFBQSx3QkFBN0U7QUFBQSwwREFHRTtBQUFBLHVCQVZKLGlDQVdFO0FBQUEsb0NBQ0YsdUJBR0Usb0JBSEY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVEsT0FBTTtBQUFBLHNCQUFpQixJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsc0JBQXpFO0FBQUEsd0RBR0U7QUFBQTtBQUFBLG1CQXpCSixnQ0EwQkU7QUFBQSxpQkEzQkosaUNBNEJFO0FBQUEsOEJBQ0YsdUJBNkNFLGNBN0NGO0FBQUEsZ0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxnQkFBNUIsMEJBQ0UsdUJBMkNFLGVBM0NGO0FBQUEsa0JBQ0UsU0FBUztBQUFBLGtCQUNULElBQUk7QUFBQSxvQkFDRixjQUFjO0FBQUEsb0JBQ2QsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxvQkFDbkIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxvQkFDbkIsaUJBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNkJBQ0E7QUFBQSxrQkFDUjtBQUFBLGtCQVZGLFVBMkNFO0FBQUEsb0NBL0JBLHVCQVFFLGVBUkY7QUFBQSxzQkFBTyxTQUFTO0FBQUEsc0JBQWhCLFVBUUU7QUFBQSx3Q0FQQSx1QkFFRSxvQkFGRjtBQUFBLDBCQUFZLFNBQVE7QUFBQSwwQkFBUSxPQUFNO0FBQUEsMEJBQWxDO0FBQUEsNERBRUU7QUFBQSx3Q0FDRix1QkFHRSxvQkFIRjtBQUFBLDBCQUFZLFNBQVE7QUFBQSwwQkFBcEI7QUFBQSw0REFHRTtBQUFBO0FBQUEsdUJBUEosZ0NBUUU7QUFBQSxvQ0FDRix1QkFxQkUsZUFyQkY7QUFBQSxzQkFDRSxXQUFVO0FBQUEsc0JBQ1YsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxzQkFDeEIsVUFBUztBQUFBLHNCQUNULFlBQVU7QUFBQSxzQkFDVixnQkFBZ0IsRUFBRSxJQUFJLGNBQWMsSUFBSSxnQkFBZ0I7QUFBQSxzQkFMMUQsVUFPRyxVQUFVLElBQUksQ0FBQywwQkFDZCx1QkFXRSxvQkFYRjtBQUFBLHdCQUVFLFdBQVU7QUFBQSx3QkFDVixJQUFJO0FBQUEsMEJBQ0YsVUFBVSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSwwQkFDM0IsWUFBWTtBQUFBLDBCQUNaLFdBQVcsRUFBRSxJQUFJLFFBQVEsSUFBSSxNQUFNO0FBQUEsMEJBQ25DLFdBQVc7QUFBQSx3QkFDYjtBQUFBLHdCQVJGLFVBVUc7QUFBQSx5QkFUSSxPQURQLHNCQVdFLENBQ0g7QUFBQSx1QkFwQkgsaUNBcUJFO0FBQUE7QUFBQSxtQkExQ0osZ0NBMkNFO0FBQUEsaUJBNUNKLGlDQTZDRTtBQUFBO0FBQUEsYUEzRUosZ0NBNEVFO0FBQUEsV0E3RUosaUNBOEVFO0FBQUEsU0F0RkosaUNBdUZFO0FBQUEsc0JBRUYsdUJBeUZFLGFBekZGO0FBQUEsUUFBSyxXQUFVO0FBQUEsUUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUFBLFFBQXJELDBCQUNFLHVCQXVGRSxtQkF2RkY7QUFBQSxvQ0FDRSx1QkFxRkUsZUFyRkY7QUFBQSxZQUFPLFNBQVM7QUFBQSxZQUFoQixVQXFGRTtBQUFBLDhCQXBGQSx1QkFBQyxlQUFEO0FBQUEsZ0JBQ0UsU0FBUTtBQUFBLGdCQUNSLE9BQU8sZUFBZTtBQUFBLGdCQUN0QixVQUFVLGVBQWU7QUFBQSxnQkFDekIsT0FBTTtBQUFBLGlCQUpSLGlDQUtBO0FBQUEsOEJBQ0EsdUJBNkVFLGNBN0VGO0FBQUEsZ0JBQU0sV0FBUztBQUFBLGdCQUFDLFNBQVM7QUFBQSxnQkFBRyxZQUFXO0FBQUEsZ0JBQXZDLDBCQUNFLHVCQTJFRSxjQTNFRjtBQUFBLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEdBQUc7QUFBQSxrQkFBckIsMEJBQ0UsdUJBeUVFLGNBekVGO0FBQUEsb0JBQU0sV0FBUztBQUFBLG9CQUFDLFNBQVM7QUFBQSxvQkFBekIsVUFDRyxNQUFNLElBQUksQ0FBQyx5QkFDVix1QkFxRUUsY0FyRUY7QUFBQSxzQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLHNCQUE1QiwwQkFDRSx1QkFtRUUsYUFuRUY7QUFBQSx3QkFDRSxJQUFJO0FBQUEsMEJBQ0YsUUFBUTtBQUFBLDBCQUNSLFNBQVM7QUFBQSx3QkFDWDtBQUFBLHdCQUpGLFVBbUVFO0FBQUEsMENBN0RBLHVCQUFDLGFBQUQ7QUFBQSw0QkFDRSxXQUFVO0FBQUEsNEJBQ1YsS0FBSyxLQUFLO0FBQUEsNEJBQ1YsS0FBSyxZQUFZLEtBQUs7QUFBQSw0QkFDdEIsSUFBSTtBQUFBLDhCQUNGLE9BQU87QUFBQSw4QkFDUCxXQUFXO0FBQUEsOEJBQ1gscUJBQXFCLE1BQU0sT0FBTyxPQUFPO0FBQUEsOEJBQ3pDLHdCQUF3QixNQUFNLE9BQU8sT0FBTztBQUFBLDRCQUM5QztBQUFBLDZCQVRGLGlDQVVBO0FBQUEsMENBQ0EsdUJBaURFLHFCQWpERjtBQUFBLDRCQUNFLElBQUk7QUFBQSw4QkFDRixTQUFTO0FBQUEsOEJBQ1QsZUFBZTtBQUFBLDhCQUNmLEtBQUs7QUFBQSw4QkFDTCxVQUFVO0FBQUEsNEJBQ1o7QUFBQSw0QkFORixVQWlERTtBQUFBLDhDQXpDQSx1QkFRRSxlQVJGO0FBQUEsZ0NBQU8sU0FBUztBQUFBLGdDQUFoQixVQVFFO0FBQUEsa0RBUEEsdUJBRUUsb0JBRkY7QUFBQSxvQ0FBWSxTQUFRO0FBQUEsb0NBQVUsT0FBTTtBQUFBLG9DQUFwQyxVQUNHLEtBQUs7QUFBQSxxQ0FEUixpQ0FFRTtBQUFBLGtEQUNGLHVCQUF1QyxvQkFBdkM7QUFBQSxvQ0FBWSxTQUFRO0FBQUEsb0NBQXBCLFVBQTBCLEtBQUs7QUFBQSxxQ0FBL0IsaUNBQXVDO0FBQUEsa0RBQ3ZDLHVCQUVFLG9CQUZGO0FBQUEsb0NBQVksU0FBUTtBQUFBLG9DQUFZLE9BQU07QUFBQSxvQ0FBdEMsVUFDRyxLQUFLO0FBQUEscUNBRFIsaUNBRUU7QUFBQTtBQUFBLGlDQVBKLGdDQVFFO0FBQUEsOENBQ0YsdUJBRUUsb0JBRkY7QUFBQSxnQ0FBWSxTQUFRO0FBQUEsZ0NBQVEsT0FBTTtBQUFBLGdDQUFsQyxVQUNHLEtBQUs7QUFBQSxpQ0FEUixpQ0FFRTtBQUFBLDhDQUNGLHVCQVdFLGVBWEY7QUFBQSxnQ0FBTyxXQUFVO0FBQUEsZ0NBQUssU0FBUztBQUFBLGdDQUFNLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsZ0NBQXhELFVBQ0csS0FBSyxVQUFVLElBQUksQ0FBQyw2QkFDbkIsdUJBT0Usb0JBUEY7QUFBQSxrQ0FDRSxXQUFVO0FBQUEsa0NBRVYsU0FBUTtBQUFBLGtDQUNSLE9BQU07QUFBQSxrQ0FKUixVQU1HO0FBQUEsbUNBSkksVUFGUCxzQkFPRSxDQUNIO0FBQUEsaUNBVkgsaUNBV0U7QUFBQSw4QkFDRCxLQUFLLDZCQUNKLHVCQUFDLGNBQUQ7QUFBQSxnQ0FDRSxPQUFPLEtBQUs7QUFBQSxnQ0FDWixNQUFLO0FBQUEsZ0NBQ0wsSUFBSTtBQUFBLGtDQUNGLFdBQVc7QUFBQSxrQ0FDWCxpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw2QkFDQTtBQUFBLGtDQUNOLE9BQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsTUFBTSxRQUFRLE1BQU0sWUFDcEI7QUFBQSxnQ0FDUjtBQUFBLGlDQWJGLGlDQWNBO0FBQUE7QUFBQSw2QkEvQ0osZ0NBaURFO0FBQUE7QUFBQSx5QkFsRUosZ0NBbUVFO0FBQUEsdUJBcEVnQyxLQUFLLE9BQXpDLHNCQXFFRSxDQUNIO0FBQUEscUJBeEVILGlDQXlFRTtBQUFBLG1CQTFFSixpQ0EyRUU7QUFBQSxpQkE1RUosaUNBNkVFO0FBQUE7QUFBQSxhQXBGSixnQ0FxRkU7QUFBQSxXQXRGSixpQ0F1RkU7QUFBQSxTQXhGSixpQ0F5RkU7QUFBQSxzQkFFRix1QkFpRkUsYUFqRkY7QUFBQSxRQUNFLFdBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUEsVUFDckIsV0FBVyxhQUFhLE1BQU0sUUFBUTtBQUFBLFFBQ3hDO0FBQUEsUUFMRiwwQkFPRSx1QkF5RUUsbUJBekVGO0FBQUEsVUFBVyxnQkFBYztBQUFBLFVBQUMsSUFBSSxFQUFFLFVBQVUsTUFBTTtBQUFBLFVBQWhELDBCQUNFLHVCQXVFRSxhQXZFRjtBQUFBLFlBQ0UsSUFBSTtBQUFBLGNBQ0YsU0FBUztBQUFBLGNBQ1QscUJBQXFCLEVBQUUsSUFBSSxnQkFBZ0I7QUFBQSxjQUMzQyxZQUFZO0FBQUEsWUFDZDtBQUFBLFlBTEYsVUF1RUU7QUFBQSw4QkFoRUEsdUJBb0NFLGFBcENGO0FBQUEsZ0JBQ0UsSUFBSTtBQUFBLGtCQUNGLFVBQVU7QUFBQSxrQkFDVixXQUFXLEVBQUUsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxrQkFDdkMsVUFBVTtBQUFBLGdCQUNaO0FBQUEsZ0JBTEYsVUFvQ0U7QUFBQSxrQ0E3QkEsdUJBQUMsYUFBRDtBQUFBLG9CQUNFLFdBQVU7QUFBQSxvQkFDVixLQUFLLEtBQUs7QUFBQSxvQkFDVixLQUFLLEtBQUs7QUFBQSxvQkFDVixJQUFJO0FBQUEsc0JBQ0YsT0FBTztBQUFBLHNCQUNQLFFBQVE7QUFBQSxzQkFDUixXQUFXO0FBQUEsb0JBQ2I7QUFBQSxxQkFSRixpQ0FTQTtBQUFBLGtDQUNBLHVCQWtCRSxvQkFsQkY7QUFBQSxvQkFDRSxTQUFRO0FBQUEsb0JBQ1IsT0FBTTtBQUFBLG9CQUNOLElBQUk7QUFBQSxzQkFDRixVQUFVO0FBQUEsc0JBQ1YsUUFBUSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSxzQkFDekIsTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSxzQkFDdkIsSUFBSTtBQUFBLHNCQUNKLElBQUk7QUFBQSxzQkFDSixjQUFjO0FBQUEsc0JBQ2QsZ0JBQWdCO0FBQUEsc0JBQ2hCLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDhCQUNBO0FBQUEsb0JBQ1I7QUFBQSxvQkFmRixVQWlCRyxLQUFLO0FBQUEscUJBakJSLGlDQWtCRTtBQUFBO0FBQUEsaUJBbkNKLGdDQW9DRTtBQUFBLDhCQUNGLHVCQTBCRSxhQTFCRjtBQUFBLGdCQUNFLElBQUk7QUFBQSxrQkFDRixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxrQkFDMUIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxnQkFDckI7QUFBQSxnQkFKRiwwQkFNRSx1QkFtQkUsZUFuQkY7QUFBQSxrQkFBTyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUFHLElBQUksRUFBRSxVQUFVLElBQUk7QUFBQSxrQkFBdEQsVUFtQkU7QUFBQSxvQ0FsQkEsdUJBRUUsb0JBRkY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVUsT0FBTTtBQUFBLHNCQUFwQztBQUFBLHdEQUVFO0FBQUEsb0NBQ0YsdUJBQXVDLG9CQUF2QztBQUFBLHNCQUFZLFNBQVE7QUFBQSxzQkFBcEIsVUFBMEIsS0FBSztBQUFBLHVCQUEvQixpQ0FBdUM7QUFBQSxvQ0FDdkMsdUJBRUUsb0JBRkY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVEsT0FBTTtBQUFBLHNCQUFpQixJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsc0JBQXpFLFVBQ0csS0FBSztBQUFBLHVCQURSLGlDQUVFO0FBQUEsb0NBQ0YsdUJBVUUsYUFWRjtBQUFBLHNCQUNFLElBQUk7QUFBQSx3QkFDRixZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU87QUFBQSx3QkFDN0MsSUFBSTtBQUFBLHdCQUNKLElBQUk7QUFBQSxzQkFDTjtBQUFBLHNCQUxGLDBCQU9FLHVCQUVFLG9CQUZGO0FBQUEsd0JBQVksU0FBUTtBQUFBLHdCQUFZLE9BQU07QUFBQSx3QkFBaUIsSUFBSSxFQUFFLFlBQVksSUFBSTtBQUFBLHdCQUE3RTtBQUFBLDBEQUVFO0FBQUEsdUJBVEosaUNBVUU7QUFBQTtBQUFBLG1CQWxCSixnQ0FtQkU7QUFBQSxpQkF6QkosaUNBMEJFO0FBQUE7QUFBQSxhQXRFSixnQ0F1RUU7QUFBQSxXQXhFSixpQ0F5RUU7QUFBQSxTQWhGSixpQ0FpRkU7QUFBQSxzQkFFRix1QkErQ0UsYUEvQ0Y7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUEsUUFBckQsMEJBQ0UsdUJBNkNFLG1CQTdDRjtBQUFBLG9DQUNFLHVCQTJDRSxlQTNDRjtBQUFBLFlBQU8sU0FBUztBQUFBLFlBQWhCLFVBMkNFO0FBQUEsOEJBMUNBLHVCQUFDLGVBQUQ7QUFBQSxnQkFDRSxTQUFRO0FBQUEsZ0JBQ1IsT0FBTTtBQUFBLGdCQUNOLHNCQUFNLHVCQUFDLHVCQUFEO0FBQUEsa0JBQW1CLE9BQU07QUFBQSxtQkFBekIsaUNBQW1DO0FBQUEsZ0JBQ3pDLE9BQU07QUFBQSxpQkFKUixpQ0FLQTtBQUFBLDhCQUNBLHVCQW1DRSxjQW5DRjtBQUFBLGdCQUFNLFdBQVM7QUFBQSxnQkFBQyxTQUFTO0FBQUEsZ0JBQXpCLFVBQ0csVUFBVSxJQUFJLENBQUMseUJBQ2QsdUJBK0JFLGNBL0JGO0FBQUEsa0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxrQkFBNUIsMEJBQ0UsdUJBNkJFLGFBN0JGO0FBQUEsb0JBQWEsSUFBSSxFQUFFLFFBQVEsT0FBTztBQUFBLG9CQUFsQywwQkFDRSx1QkEyQkUscUJBM0JGO0FBQUEsZ0RBQ0UsdUJBeUJFLGVBekJGO0FBQUEsd0JBQU8sU0FBUztBQUFBLHdCQUFoQixVQXlCRTtBQUFBLDBDQXhCQSx1QkFLRSxlQUxGO0FBQUEsNEJBQU8sV0FBVTtBQUFBLDRCQUFNLFNBQVM7QUFBQSw0QkFBSyxZQUFXO0FBQUEsNEJBQWhELFVBS0U7QUFBQSw4Q0FKQSx1QkFBQyxjQUFEO0FBQUEsZ0NBQU0sT0FBTyxLQUFLO0FBQUEsZ0NBQU8sTUFBSztBQUFBLGlDQUE5QixpQ0FBc0M7QUFBQSw4Q0FDdEMsdUJBRUUsb0JBRkY7QUFBQSxnQ0FBWSxTQUFRO0FBQUEsZ0NBQVUsT0FBTTtBQUFBLGdDQUFwQyxVQUNHLEtBQUs7QUFBQSxpQ0FEUixpQ0FFRTtBQUFBO0FBQUEsNkJBSkosZ0NBS0U7QUFBQSwwQ0FDRix1QkFBdUMsb0JBQXZDO0FBQUEsNEJBQVksU0FBUTtBQUFBLDRCQUFwQixVQUEwQixLQUFLO0FBQUEsNkJBQS9CLGlDQUF1QztBQUFBLDBDQUN2Qyx1QkFFRSxvQkFGRjtBQUFBLDRCQUFZLFNBQVE7QUFBQSw0QkFBWSxPQUFNO0FBQUEsNEJBQXRDLFVBQ0csS0FBSztBQUFBLDZCQURSLGlDQUVFO0FBQUEsMEJBQ0QsS0FBSywyQkFDSix1QkFXRSxlQVhGO0FBQUEsNEJBQU8sV0FBVTtBQUFBLDRCQUFLLFNBQVM7QUFBQSw0QkFBTSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLDRCQUF4RCxVQUNHLEtBQUssUUFBUSxJQUFJLENBQUMsMkJBQ2pCLHVCQU9FLG9CQVBGO0FBQUEsOEJBQ0UsV0FBVTtBQUFBLDhCQUVWLFNBQVE7QUFBQSw4QkFDUixPQUFNO0FBQUEsOEJBSlIsVUFNRztBQUFBLCtCQUpJLFFBRlAsc0JBT0UsQ0FDSDtBQUFBLDZCQVZILGlDQVdFO0FBQUE7QUFBQSx5QkF2Qk4sZ0NBeUJFO0FBQUEsdUJBMUJKLGlDQTJCRTtBQUFBLHFCQTVCSixpQ0E2QkU7QUFBQSxtQkE5QmdDLEtBQUssT0FBekMsc0JBK0JFLENBQ0g7QUFBQSxpQkFsQ0gsaUNBbUNFO0FBQUE7QUFBQSxhQTFDSixnQ0EyQ0U7QUFBQSxXQTVDSixpQ0E2Q0U7QUFBQSxTQTlDSixpQ0ErQ0U7QUFBQSxzQkFFRix1QkFnREUsYUFoREY7QUFBQSxRQUNFLFdBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQUEsVUFDcEIsaUJBQWlCLE1BQU0sUUFBUSxXQUFXO0FBQUEsUUFDNUM7QUFBQSxRQUxGLDBCQU9FLHVCQXdDRSxtQkF4Q0Y7QUFBQSxvQ0FDRSx1QkFzQ0UsZUF0Q0Y7QUFBQSxZQUFPLFNBQVM7QUFBQSxZQUFoQixVQXNDRTtBQUFBLDhCQXJDQSx1QkFBQyxlQUFEO0FBQUEsZ0JBQ0UsU0FBUTtBQUFBLGdCQUNSLE9BQU07QUFBQSxnQkFDTixzQkFBTSx1QkFBQyw0QkFBRDtBQUFBLGtCQUF3QixPQUFNO0FBQUEsbUJBQTlCLGlDQUEwQztBQUFBLGdCQUNoRCxPQUFNO0FBQUEsaUJBSlIsaUNBS0E7QUFBQSw4QkFDQSx1QkE4QkUsY0E5QkY7QUFBQSxnQkFBTSxXQUFTO0FBQUEsZ0JBQUMsU0FBUztBQUFBLGdCQUF6QixVQUNHLGFBQWEsSUFBSSxDQUFDLGdDQUNqQix1QkEwQkUsY0ExQkY7QUFBQSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGtCQUE1QiwwQkFDRSx1QkF3QkUsYUF4QkY7QUFBQSxvQkFBYSxJQUFJLEVBQUUsUUFBUSxPQUFPO0FBQUEsb0JBQWxDLDBCQUNFLHVCQXNCRSxxQkF0QkY7QUFBQSxnREFDRSx1QkFvQkUsZUFwQkY7QUFBQSx3QkFBTyxTQUFTO0FBQUEsd0JBQWhCLFVBb0JFO0FBQUEsMENBbkJBLHVCQUtFLGVBTEY7QUFBQSw0QkFBTyxXQUFVO0FBQUEsNEJBQU0sU0FBUztBQUFBLDRCQUFLLFlBQVc7QUFBQSw0QkFBaEQsVUFLRTtBQUFBLDhDQUpBLHVCQUFDLGNBQUQ7QUFBQSxnQ0FBTSxPQUFPLFlBQVk7QUFBQSxnQ0FBTyxNQUFLO0FBQUEsaUNBQXJDLGlDQUE2QztBQUFBLDhDQUM3Qyx1QkFFRSxvQkFGRjtBQUFBLGdDQUFZLFNBQVE7QUFBQSxnQ0FBVSxPQUFNO0FBQUEsZ0NBQXBDLFVBQ0csWUFBWTtBQUFBLGlDQURmLGlDQUVFO0FBQUE7QUFBQSw2QkFKSixnQ0FLRTtBQUFBLDBDQUNGLHVCQUE4QyxvQkFBOUM7QUFBQSw0QkFBWSxTQUFRO0FBQUEsNEJBQXBCLFVBQTBCLFlBQVk7QUFBQSw2QkFBdEMsaUNBQThDO0FBQUEsMEJBQzdDLFlBQVksK0JBQ1gsdUJBRUUsb0JBRkY7QUFBQSw0QkFBWSxTQUFRO0FBQUEsNEJBQVksT0FBTTtBQUFBLDRCQUF0QyxVQUNHLFlBQVk7QUFBQSw2QkFEZixpQ0FFRTtBQUFBLDBCQUVILENBQUMsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sRUFDdkQsT0FBTyxPQUFPLEVBQ2QsSUFBSSxDQUFDLDJCQUNKLHVCQUVFLG9CQUZGO0FBQUEsNEJBQXlCLFNBQVE7QUFBQSw0QkFBUSxPQUFNO0FBQUEsNEJBQS9DLFVBQ0c7QUFBQSw2QkFEYyxRQUFqQixzQkFFRSxDQUNIO0FBQUE7QUFBQSx5QkFuQkwsZ0NBb0JFO0FBQUEsdUJBckJKLGlDQXNCRTtBQUFBLHFCQXZCSixpQ0F3QkU7QUFBQSxtQkF6QmdDLFlBQVksT0FBaEQsc0JBMEJFLENBQ0g7QUFBQSxpQkE3QkgsaUNBOEJFO0FBQUE7QUFBQSxhQXJDSixnQ0FzQ0U7QUFBQSxXQXZDSixpQ0F3Q0U7QUFBQSxTQS9DSixpQ0FnREU7QUFBQSxzQkFFRix1QkFrRUUsYUFsRUY7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUEsUUFBckQsMEJBQ0UsdUJBZ0VFLG1CQWhFRjtBQUFBLG9DQUNFLHVCQThERSxlQTlERjtBQUFBLFlBQU8sU0FBUztBQUFBLFlBQWhCLFVBOERFO0FBQUEsOEJBN0RBLHVCQUFDLGVBQUQ7QUFBQSxnQkFDRSxTQUFRO0FBQUEsZ0JBQ1IsT0FBTTtBQUFBLGdCQUNOLHNCQUFNLHVCQUFDLGtDQUFEO0FBQUEsa0JBQThCLE9BQU07QUFBQSxtQkFBcEMsaUNBQWdEO0FBQUEsZ0JBQ3RELE9BQU07QUFBQSxpQkFKUixpQ0FLQTtBQUFBLDhCQUNBLHVCQXNERSxjQXRERjtBQUFBLGdCQUFNLFdBQVM7QUFBQSxnQkFBQyxTQUFTO0FBQUEsZ0JBQXpCLFVBQ0csV0FBVyxJQUFJLENBQUMsOEJBQ2YsdUJBa0RFLGNBbERGO0FBQUEsa0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxrQkFBNUIsMEJBQ0UsdUJBZ0RFLGFBaERGO0FBQUEsb0JBQWEsSUFBSSxFQUFFLFFBQVEsT0FBTztBQUFBLG9CQUFsQywwQkFDRSx1QkE4Q0UscUJBOUNGO0FBQUEsc0JBQ0UsSUFBSSxFQUFFLFNBQVMsUUFBUSxlQUFlLFVBQVUsS0FBSyxHQUFHLFFBQVEsT0FBTztBQUFBLHNCQUR6RSxVQThDRTtBQUFBLHdDQTNDQSx1QkFRRSxlQVJGO0FBQUEsMEJBQU8sU0FBUztBQUFBLDBCQUFoQixVQVFFO0FBQUEsNENBUEEsdUJBQTJDLG9CQUEzQztBQUFBLDhCQUFZLFNBQVE7QUFBQSw4QkFBcEIsVUFBMEIsVUFBVTtBQUFBLCtCQUFwQyxpQ0FBMkM7QUFBQSw0Q0FDM0MsdUJBRUUsb0JBRkY7QUFBQSw4QkFBWSxTQUFRO0FBQUEsOEJBQVksT0FBTTtBQUFBLDhCQUF0QyxVQUNHLFVBQVU7QUFBQSwrQkFEYixpQ0FFRTtBQUFBLDRDQUNGLHVCQUVFLG9CQUZGO0FBQUEsOEJBQVksU0FBUTtBQUFBLDhCQUFVLE9BQU07QUFBQSw4QkFBcEMsVUFDRyxVQUFVO0FBQUEsK0JBRGIsaUNBRUU7QUFBQTtBQUFBLDJCQVBKLGdDQVFFO0FBQUEsd0NBQ0YsdUJBRUUsb0JBRkY7QUFBQSwwQkFBWSxTQUFRO0FBQUEsMEJBQVEsT0FBTTtBQUFBLDBCQUFpQixJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsMEJBQXpFLFVBQ0csVUFBVTtBQUFBLDJCQURiLGlDQUVFO0FBQUEsd0NBQ0YsdUJBOEJFLHFCQTlCRjtBQUFBLDBCQUNFLFdBQVU7QUFBQSwwQkFDVixNQUFNLFVBQVU7QUFBQSwwQkFDaEIsUUFBTztBQUFBLDBCQUNQLEtBQUk7QUFBQSwwQkFDSixTQUFRO0FBQUEsMEJBQ1IsSUFBSTtBQUFBLDRCQUNGLElBQUk7QUFBQSw0QkFDSixXQUFXO0FBQUEsNEJBQ1gsYUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw0QkFDQTtBQUFBLDRCQUNOLE9BQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsTUFBTSxRQUFRLE1BQU0sWUFDcEI7QUFBQSw0QkFDTixXQUFXO0FBQUEsOEJBQ1QsYUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw0QkFDQTtBQUFBLDhCQUNOLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDZCQUNBO0FBQUEsNEJBQ1I7QUFBQSwwQkFDRjtBQUFBLDBCQTNCRjtBQUFBLDREQThCRTtBQUFBO0FBQUEsdUJBN0NKLGdDQThDRTtBQUFBLHFCQS9DSixpQ0FnREU7QUFBQSxtQkFqRGdDLFVBQVUsTUFBOUMsc0JBa0RFLENBQ0g7QUFBQSxpQkFyREgsaUNBc0RFO0FBQUE7QUFBQSxhQTdESixnQ0E4REU7QUFBQSxXQS9ESixpQ0FnRUU7QUFBQSxTQWpFSixpQ0FrRUU7QUFBQTtBQUFBLEtBMWdCSixnQ0EyZ0JFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiODI2QUU2RTMyMTM0OENBMTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
