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
                              borderTopLeftRadius: `${theme.tokens.radius.surface}px`,
                              borderBottomLeftRadius: `${theme.tokens.radius.surface}px`
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

//# debugId=E3D01E61519D8D6164756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2Nob29sUm91bmRlZC5qcyIsICIuLi9zcmMvcm91dGVzL015U3RvcnlQYWdlLnRzeCIsICIuLi9zcmMvZGF0YS9teVN0b3J5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA1aC0yVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDVjLTEuMSAwLTIgLjktMiAydjFjMCAyLjU1IDEuOTIgNC42MyA0LjM5IDQuOTQuNjMgMS41IDEuOTggMi42MyAzLjYxIDIuOTZWMTlIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zdi0zLjFjMS42My0uMzMgMi45OC0xLjQ2IDMuNjEtMi45NkMxOS4wOCAxMi42MyAyMSAxMC41NSAyMSA4VjdjMC0xLjEtLjktMi0yLTJNNSA4VjdoMnYzLjgyQzUuODQgMTAuNCA1IDkuMyA1IDhtMTQgMGMwIDEuMy0uODQgMi40LTIgMi44MlY3aDJ6XCJcbn0pLCAnRW1vamlFdmVudHNSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxMy4xOHYyLjgxYzAgLjczLjQgMS40MSAxLjA0IDEuNzZsNSAyLjczYy42LjMzIDEuMzIuMzMgMS45MiAwbDUtMi43M2MuNjQtLjM1IDEuMDQtMS4wMyAxLjA0LTEuNzZ2LTIuODFsLTYuMDQgMy4zYy0uNi4zMy0xLjMyLjMzLTEuOTIgMHptNi4wNC05LjY2LTguNDMgNC42Yy0uNjkuMzgtLjY5IDEuMzggMCAxLjc2bDguNDMgNC42Yy42LjMzIDEuMzIuMzMgMS45MiAwTDIxIDEwLjA5VjE2YzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY5LjU5YzAtLjM3LS4yLS43LS41Mi0uODhsLTkuNTItNS4xOWEyLjA0IDIuMDQgMCAwIDAtMS45MiAwXCJcbn0pLCAnU2Nob29sUm91bmRlZCcpOyIsCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9NeVN0b3J5UGFnZS50c3hcbi8vIFB1cnBvc2U6IFJlaW1hZ2luZXMgdGhlIE15IFN0b3J5IHJvdXRlIHdpdGggdW5pZmllZCBkZXNpZ24gdG9rZW5zLCBjb25zaXN0ZW50IHN1cmZhY2VzLCBhbmQgY2xlYXIgaGllcmFyY2h5IGFjcm9zcyBwZXJzb25hbCBuYXJyYXRpdmUsIGdhbGxlcnksIGFuZCBjcmVkZW50aWFscy5cbmltcG9ydCBBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NOZXdSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IEVtb2ppRXZlbnRzUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1vamlFdmVudHNSb3VuZGVkXCI7XG5pbXBvcnQgU2Nob29sUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2Nob29sUm91bmRlZFwiO1xuaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBJY29uQnV0dG9uLFxuICBNb2JpbGVTdGVwcGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlTWVkaWFRdWVyeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhcmRQcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHR5cGUgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBib29rcyxcbiAgY2VydGlmaWNhdGVzLFxuICBlZHVjYXRpb24sXG4gIGVtb2ppTGlzdCxcbiAgZ2FsbGVyeSxcbiAgcGhpbG9zb3BoeVRleHQsXG4gIHJlYWRpbmdKb3VybmV5LFxuICByZWZlcmVuY2VzLFxuICBzdG9yeUhlcm8sXG4gIHRlYW0sXG59IGZyb20gXCIuLi9kYXRhL215U3RvcnlcIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL1BpbGxcIjtcbmltcG9ydCBHaG9zdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9HaG9zdEJ1dHRvblwiO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgZXllYnJvdz86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdE5vZGU7XG4gIGFsaWduPzogXCJjZW50ZXJcIiB8IFwibGVmdFwiO1xufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7IGV5ZWJyb3csIHRpdGxlLCBzdWJ0aXRsZSwgaWNvbiwgYWxpZ24gPSBcImNlbnRlclwiIH06IFNlY3Rpb25IZWFkZXJQcm9wcykgPT4gKFxuICA8U3RhY2tcbiAgICBzcGFjaW5nPXsxLjV9XG4gICAgYWxpZ25JdGVtcz17YWxpZ24gPT09IFwiY2VudGVyXCIgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCJ9XG4gICAgdGV4dEFsaWduPXthbGlnbn1cbiAgPlxuICAgIHsoaWNvbiB8fCBleWVicm93KSAmJiAoXG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAge2V5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge2V5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgPC9TdGFjaz5cbiAgICApfVxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAge3N1YnRpdGxlICYmIChcbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgc3g9e3sgbWF4V2lkdGg6IGFsaWduID09PSBcImNlbnRlclwiID8gNzIwIDogNjQwLCBsaW5lSGVpZ2h0OiAxLjYgfX1cbiAgICAgID5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICl9XG4gIDwvU3RhY2s+XG4pO1xuXG5jb25zdCBTdXJmYWNlQ2FyZCA9ICh7IHN4LCBjaGlsZHJlbiwgLi4ucHJvcHMgfTogQ2FyZFByb3BzKSA9PiAoXG4gIDxDYXJkXG4gICAgZWxldmF0aW9uPXswfVxuICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgc3g9e3tcbiAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAuLi5zeCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJkPlxuKTtcblxuY29uc3QgTGlmZUluRnJhbWVzU2xpZGVyID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWRVcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKSk7XG4gIGNvbnN0IGlzU21VcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKSk7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBpc01kVXAgPyAzIDogaXNTbVVwID8gMiA6IDE7XG5cbiAgY29uc3QgbWF4SW5kZXggPSB1c2VNZW1vKFxuICAgICgpID0+IE1hdGgubWF4KDAsIGdhbGxlcnkubGVuZ3RoIC0gc2xpZGVzUGVyVmlldyksXG4gICAgW3NsaWRlc1BlclZpZXddLFxuICApO1xuXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleCgocHJldikgPT4gTWF0aC5taW4ocHJldiwgbWF4SW5kZXgpKTtcbiAgfSwgW21heEluZGV4XSk7XG5cbiAgY29uc3QgaGFuZGxlU3RlcCA9IChkaXJlY3Rpb246IC0xIHwgMSkgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiBNYXRoLm1pbihtYXhJbmRleCwgTWF0aC5tYXgoMCwgcHJldiArIGRpcmVjdGlvbikpKTtcbiAgfTtcblxuICBjb25zdCBzbGlkZVdpZHRoUGVyY2VudCA9IDEwMCAvIHNsaWRlc1BlclZpZXc7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAzNjBtcyBlYXNlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2FjdGl2ZUluZGV4ICogc2xpZGVXaWR0aFBlcmNlbnR9JSlgLFxuICAgICAgICAgICAgd2lkdGg6IGAkeyhnYWxsZXJ5Lmxlbmd0aCAqIDEwMCkgLyBzbGlkZXNQZXJWaWV3fSVgLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Z2FsbGVyeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uY2FwdGlvbn1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4OiBgMCAwICR7c2xpZGVXaWR0aFBlcmNlbnR9JWAsXG4gICAgICAgICAgICAgICAgbXg6IHsgeHM6IDAuNzUsIG1kOiAxLjI1IH0sXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogMjYwLCBzbTogMzAwLCBtZDogMzIwIH0sXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2l0ZW0uY2FwdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5zdWJjYXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YmNhcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBwaG90b1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXAoLTEpfVxuICAgICAgICBkaXNhYmxlZD17YWN0aXZlSW5kZXggPT09IDB9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgbGVmdDogeyB4czogNiwgc206IDEyIH0sXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIGJveFNoYWRvdzogYWN0aXZlSW5kZXggPT09IDAgPyBcIm5vbmVcIiA6IHRoZW1lLnRva2Vucy5zaGFkb3cubGV2ZWwxLFxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHBob3RvXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcCgxKX1cbiAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZUluZGV4ID09PSBtYXhJbmRleH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICByaWdodDogeyB4czogNiwgc206IDEyIH0sXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIGJveFNoYWRvdzogYWN0aXZlSW5kZXggPT09IG1heEluZGV4ID8gXCJub25lXCIgOiB0aGVtZS50b2tlbnMuc2hhZG93LmxldmVsMSxcbiAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgIDxNb2JpbGVTdGVwcGVyXG4gICAgICAgIHZhcmlhbnQ9XCJkb3RzXCJcbiAgICAgICAgc3RlcHM9e21heEluZGV4ICsgMX1cbiAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVJbmRleH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgbXQ6IDMsXG4gICAgICAgICAgXCImIC5NdWlNb2JpbGVTdGVwcGVyLWRvdFwiOiB7XG4gICAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICAgIGhlaWdodDogOCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBuZXh0QnV0dG9uPXtcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXAoMSl9XG4gICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlSW5kZXggPT09IG1heEluZGV4fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgYmFja0J1dHRvbj17XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwKC0xKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVJbmRleCA9PT0gMH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBzbGlkZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93QmFja0lvc05ld1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmNvbnN0IE15U3RvcnlQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC42KVwiIDogXCJyZ2JhKDgsIDE0LCAyNiwgMC44NSlcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtYXhXaWR0aDogODQwLFxuICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJsZWZ0XCIsIG1kOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0YWdcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiIHN4PXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgIE15IHN0b3J5XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheVwiPntzdG9yeUhlcm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtzdG9yeUhlcm8uc3VidGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RvcnlIZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHQ6IHsgeHM6IDIsIG1kOiA0IH0sXG4gICAgICAgICAgcGI6IHsgeHM6IDgsIG1kOiAxMiB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IHN4PXt7IG1heFdpZHRoOiA3MjAgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIFBob3RvIFN0cmlwXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5MYXllcnMgb2YgdGhlIGV2ZXJ5ZGF5PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBIGdsaW1wc2UgaW50byB0aGUgdGV4dHVyZXMsIHBlb3BsZSwgYW5kIHNjZW5lcyB0aGF0IHNoYXBlIGhvdyBJIGFwcHJvYWNoIHByb2R1Y3RcbiAgICAgICAgICAgICAgZGVzaWdu4oCUdW5maWx0ZXJlZCwgYSBsaXR0bGUgaW1wZXJmZWN0LCBhbmQgdmVyeSBhbGl2ZS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBzeD17eyBtYXhXaWR0aDogZmFsc2UsIG10OiB7IHhzOiA0LCBtZDogNiB9IH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHB4OiB7IHhzOiAyLCBzbTogNCwgbWQ6IDYgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGNvbHVtbkNvdW50OiB7IHhzOiAyLCBzbTogMywgbWQ6IDUgfSxcbiAgICAgICAgICAgICAgICBjb2x1bW5HYXA6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2FsbGVyeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0uY2FwdGlvbn0tJHtpdGVtLmltYWdlfWB9XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBicmVha0luc2lkZTogXCJhdm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICBtYjogeyB4czogMS41LCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDggfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGhpbG9zb3BoeVRleHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnByaW1hcnl9YCxcbiAgICAgICAgICAgICAgICAgICAgcGw6IDIsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgICAgSSBhbSBkcml2ZW4gYnkgZXhwZXJpZW5jZXPigJRkZXNpZ25pbmcgdGhlbSwgbGVhcm5pbmcgZnJvbSB0aGVtLCBhbmQgbGl2aW5nIHRoZW1cbiAgICAgICAgICAgICAgICAgICAgZGVlcGx5LlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICBNeSBmcmllbmRzIG9mdGVuIGRlc2NyaWJlIG1lIGFzIHNvbWVvbmUgd2l0aCBsYXllcnPigJRjdXJpb3NpdHkga2VlcHMgbWUgZXhwbG9yaW5nXG4gICAgICAgICAgICAgICAgICBuZXcgY3JhZnRzLCBjb21tdW5pdGllcywgYW5kIGNoYWxsZW5nZXMuIEl04oCZcyBob3cgSSBzdGF5IGdyb3VuZGVkIGFuZCBpbnNwaXJlZC5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezMuNX1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBUaGVzZSBzbWFsbCByaXR1YWxzIHNoYXBlIHRoZSB3YXkgSSBkZXNpZ24gYW5kIGNvbGxhYm9yYXRlOlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgIEZyb20gbXVzaWMgYW5kIGNlcmFtaWNzIHRvIHBsYW50cywgY29va2luZywgYW5kIGNvbGxhYm9yYXRpdmUgZ2FtZXPigJRJ4oCZbSBtb3N0XG4gICAgICAgICAgICAgICAgICAgIGFsaXZlIHdoZW4gSeKAmW0gYnVpbGRpbmcgd2l0aCBvdGhlcnMuXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgIHVzZUZsZXhHYXBcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IHhzOiBcImZsZXgtc3RhcnRcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Vtb2ppTGlzdC5tYXAoKGVtb2ppKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IDU2LCBzbTogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZW1vaml9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIlJlYWRpbmcgSm91cm5leVwiXG4gICAgICAgICAgICAgIHRpdGxlPXtyZWFkaW5nSm91cm5leS50aXRsZX1cbiAgICAgICAgICAgICAgc3VidGl0bGU9e3JlYWRpbmdKb3VybmV5LnN1YnRpdGxlfVxuICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiB9fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2Jvb2sudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtib29rLmNvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BDb3ZlciBvZiAke2Jvb2sudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNzV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2subGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntib29rLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLnN1bW1hcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MC43NX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLnRha2Vhd2F5cy5tYXAoKHRha2Vhd2F5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFrZWF3YXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFrZWF3YXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmhpZ2hsaWdodCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtib29rLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4xMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjIyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIGRpc2FibGVHdXR0ZXJzIHN4PXt7IG1heFdpZHRoOiBmYWxzZSB9fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogeyBtZDogXCIxLjE1ZnIgMC44NWZyXCIgfSxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAzNjAsIHNtOiA0MjAsIG1kOiA1MjAgfSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXt0ZWFtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17dGVhbS5hbHR9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogeyB4czogMTYsIG1kOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgbGVmdDogeyB4czogMTYsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgICAgICAgICBweTogMC43NSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMnB4KVwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcyKVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVhbS5jYXB0aW9ufVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBweDogeyB4czogMywgc206IDYsIG1kOiA4IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDUsIG1kOiAwIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fSBzeD17eyBtYXhXaWR0aDogNTIwIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIENvbGxhYm9yYXRvcnNcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RlYW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAgICB7dGVhbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuc2Vjb25kYXJ5fWAsXG4gICAgICAgICAgICAgICAgICAgIHBsOiAzLFxuICAgICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICAgIOKAnERlc2lnbmluZyB3aXRoIHBlb3BsZSBJIHRydXN0IGtlZXBzIHRoZSB3b3JrIGh1bWJsZSwgYW1iaXRpb3VzLCBhbmQgam95ZnVsLuKAnVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgICBleWVicm93PVwiRWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJBY2FkZW1pYyBGb3VuZGF0aW9uc1wiXG4gICAgICAgICAgICAgIGljb249ezxTY2hvb2xSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtlZHVjYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9e2l0ZW0uYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXswLjc1fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogeyB4czogOCwgbWQ6IDEwIH0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIkNvbnRpbnVvdXMgTGVhcm5pbmdcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkNlcnRpZmljYXRlcyAmIFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgaWNvbj17PEVtb2ppRXZlbnRzUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZXMubWFwKChjZXJ0aWZpY2F0ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2NlcnRpZmljYXRlLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17Y2VydGlmaWNhdGUuYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2NlcnRpZmljYXRlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge1tjZXJ0aWZpY2F0ZS5ob3VycywgY2VydGlmaWNhdGUuc2NvcmUsIGNlcnRpZmljYXRlLnRvcGljc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2RldGFpbH0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWZlcmVuY2VzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJXaGF0IE15IFBhcnRuZXJzIFNheVwiXG4gICAgICAgICAgICAgIGljb249ezxWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz59XG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICB7cmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e3JlZmVyZW5jZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAyLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntyZWZlcmVuY2UubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2UudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlZmVyZW5jZS5saW5rZWRpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtdDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgNzYsIDE3MCwgMC4yMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4zNSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgNzYsIDE3MCwgMC40MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjU1KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4wOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE2KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9uIExpbmtlZEluXG4gICAgICAgICAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlTdG9yeVBhZ2U7XG5cblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9teVN0b3J5LnRzXG4vLyBQdXJwb3NlOiBTdG9yZXMgbmFycmF0aXZlLCBnYWxsZXJ5LCByZWFkaW5nIGxpc3QsIGFuZCBjcmVkZW50aWFsIGRhdGEgdXNlZCBhY3Jvc3MgdGhlIE15IFN0b3J5IHBhZ2UuXG5pbXBvcnQgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jvb2tzL2NyZWF0aXZlLWNvbmZpZGVuY2UuanBnXCI7XG5pbXBvcnQgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9ib29rcy9kZXNpZ24tb2YtZXZlcnlkYXktdGhpbmdzLmpwZ1wiO1xuaW1wb3J0IHNwcmludENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9ib29rcy9zcHJpbnQuanBnXCI7XG5pbXBvcnQgZGl2YXJUZWFtUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2RpdmFyLXRlYW0uanBnXCI7XG5pbXBvcnQgbWFzaWhDaGlsZFBob3RvQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1jaGlsZC1waG90by5wbmdcIjtcbmltcG9ydCBtYXNpaENvZmZlZUFydGlzdEFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtY29mZmVlLWFydGlzdC5wbmdcIjtcbmltcG9ydCBtYXNpaE1vdW50YWluZWVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1tb3VudGFpbmVlci5wbmdcIjtcbmltcG9ydCBtYXNpaFV4RGVzaWduZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLXV4LWRlc2lnbmVyLnBuZ1wiO1xuaW1wb3J0IGFpQW5kVXhDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvYm9va3MvYWktYW5kLXV4LmpwZ1wiO1xuaW1wb3J0IG1hc2loV29vZENhcnZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtd29vZC1jYXJ2ZXIucG5nXCI7XG5cbmNvbnN0IHJlc29sdmVBc3NldCA9IChhc3NldDogc3RyaW5nKSA9PiBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWY7XG50eXBlIFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgR2FsbGVyeUl0ZW0gPSB7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICBjYXB0aW9uOiBzdHJpbmc7XG4gIHN1YmNhcHRpb24/OiBzdHJpbmc7XG59O1xuXG50eXBlIFJlYWRpbmdKb3VybmV5ID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBCb29rID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgc3VtbWFyeTogc3RyaW5nO1xuICB0YWtlYXdheXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBoaWdobGlnaHQ/OiBzdHJpbmc7XG59O1xuXG50eXBlIFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgRWR1Y2F0aW9uSXRlbSA9IHtcbiAgYmFkZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpbnN0aXR1dGlvbjogc3RyaW5nO1xuICBkZXRhaWxzPzogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG50eXBlIENlcnRpZmljYXRlSXRlbSA9IHtcbiAgYmFkZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpbnN0aXR1dGlvbj86IHN0cmluZztcbiAgaG91cnM/OiBzdHJpbmc7XG4gIHRvcGljcz86IHN0cmluZztcbiAgc2NvcmU/OiBzdHJpbmc7XG59O1xuXG50eXBlIFJlZmVyZW5jZUl0ZW0gPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgbGlua2VkaW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9yeUhlcm86IFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IFwiSSBhbSBNYXNpaFwiLFxuICBzdWJ0aXRsZTogXCJBIENyZWF0b3Igb2YgTWVhbmluZ2Z1bCBFeHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIk91dHNpZGUgb2YgZGVzaWduLCBJIGVuam95IGV4cGxvcmluZyBjaGFsbGVuZ2VzIGFuZCBsZWFybmluZyB0aHJvdWdoIGV4cGVyaWVuY2VzIGxpa2UgbW91bnRhaW5lZXJpbmcsIHdvb2QgY2FydmluZywgYW5kIHRlYWNoaW5nLiBUaGVzZSBwdXJzdWl0cyBoYXZlIHRhdWdodCBtZSBwYXRpZW5jZSwgcmVzaWxpZW5jZSwgYW5kIGVtcGF0aHksIHdoaWNoIEkgYnJpbmcgaW50byBteSB3b3JrIHRvIGNyYWZ0IG1lYW5pbmdmdWwgYW5kIHRob3VnaHRmdWwgZGVzaWducy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5ID0gW1xuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaENoaWxkUGhvdG9Bc3NldCksXG4gICAgYWx0OiBcIk1hc2loIGFzIGEgY2hpbGQgaW4gaGlzIGRhZCdzIGphY2tldFwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBDaGlsZCBpbiBNeSBEYWQncyBKYWNrZXRcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhNb3VudGFpbmVlckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSBtb3VudGFpbmVlclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBNb3VudGFpbmVlclwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaENvZmZlZUFydGlzdEFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWgncyBsYXR0ZSBhcnRcIixcbiAgICBjYXB0aW9uOiBcIk15IGFydCBvbiBhIExhdHRlXCIsXG4gICAgc3ViY2FwdGlvbjogXCJMYXR0ZSBBcnQgYnkgbWUgOilcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhVeERlc2lnbmVyQXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBhcyBhIFVYIERlc2lnbmVyXCIsXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIFVYIERlc2lnbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loV29vZENhcnZlckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSB3b29kIGNhcnZlclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBXb29kIENhcnZlclwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxHYWxsZXJ5SXRlbT47XG5cbmV4cG9ydCBjb25zdCBwaGlsb3NvcGh5VGV4dCA9XG4gIFwiSSBkZXNpZ24gZXhwZXJpZW5jZXMgdGhhdCBub3Qgb25seSBzb2x2ZSBwcm9ibGVtcyBidXQgY3JlYXRlIHZhbHVlIGZvciBib3RoIGJ1c2luZXNzZXMgYW5kIHVzZXJzLiBJIGVuam95IGRpZ2dpbmcgZGVlcCBpbnRvIGNoYWxsZW5nZXMsIGFuYWx5emluZyB0aGVtIHRob3JvdWdobHksIGFuZCBjb21pbmcgdXAgd2l0aCBzb2x1dGlvbnMgdGhhdCB0cnVseSBtYWtlIGEgZGlmZmVyZW5jZS5cIjtcblxuZXhwb3J0IGNvbnN0IGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW10gPSBbXCLimJXvuI9cIiwgXCLwn6eX8J+PvVwiLCBcIvCfkrtcIiwgXCLwn5OaXCJdO1xuXG5leHBvcnQgY29uc3QgcmVhZGluZ0pvdXJuZXk6IFJlYWRpbmdKb3VybmV5ID0ge1xuICB0aXRsZTogXCJEZXNpZ24gQm9va3MgR3VpZGluZyBNeSBDcmFmdFwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkluc3BpcmVkIGJ5IHRoZSBsaXZpbmcgYm9va3NoZWx2ZXMgc2hhcmVkIGJ5IHBlZXJzIGxpa2UgS3lsZSBKb2huc3RvbiwgU2F3eWVyIEhvbGxlbnNoZWFkLCBKYXNvbiBab29rLCBhbmQgQW15IE1jTGF5IFBhdGVyc29uLCBJIGtlZXAgYSBjdXJhdGVkIHJlY29yZCBvZiB0aGUgaWRlYXMgdGhhdCBzaGFwZSBteSBwcmFjdGljZS5cIixcbiAgY3VycmVudGx5UmVhZGluZzoge1xuICAgIGxhYmVsOiBcIkN1cnJlbnRseSByZWFkaW5nXCIsXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYm9va3MgPSBbXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KGRlc2lnbk9mRXZlcnlkYXlUaGluZ3NDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJUaGUgRGVzaWduIG9mIEV2ZXJ5ZGF5IFRoaW5nc1wiLFxuICAgIGF1dGhvcjogXCJEb24gTm9ybWFuXCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDE4IMK3IFJldmlzaXRlZCAyMDI0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiTm9ybWFu4oCZcyBmcmFtZXdvcmsgZm9yIGFmZm9yZGFuY2VzIGFuZCBmZWVkYmFjayBoZWxwZWQgbWUgYnVpbGQgcmVzaWxpZW5jZSBhZ2FpbnN0IGJpYXMgd2hlbiB0ZXN0aW5nIHNhZmV0eS1jcml0aWNhbCBmbG93cywgZXNwZWNpYWxseSB3aGVuIHdlIHJlZGVzaWduZWQgdm9pY2UgbWFza2luZyBmb3IgRGl2YXIuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIlJlaW5mb3JjZWQgbXkgaGFiaXQgb2YgcHJvdG90eXBpbmcgZXJyb3Igc3RhdGVzIGZpcnN0LlwiLFxuICAgICAgXCJJbmZsdWVuY2VkIG15IGhldXJpc3RpY3MgY2hlY2tsaXN0IGZvciBhY2Nlc3NpYmlsaXR5IHJldmlld3MuXCIsXG4gICAgICBcIlRhdWdodCBtZSB0byBuYXJyYXRlIOKAnHVzZXIgZ29hbHPigJ0gaW4gZXZlcnkgZGVzaWduIGNyaXRpcXVlLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KHNwcmludENvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIlNwcmludFwiLFxuICAgIGF1dGhvcjogXCJKYWtlIEtuYXBwICYgdGhlIEdWIERlc2lnbiBUZWFtXCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDIwXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQm9ycm93aW5nIHRoZSBzcHJpbnQgcmh5dGhtIGhlbHBlZCBtZSBjb2FjaCBwcm9kdWN0IHNxdWFkcyB0b3dhcmQgZGVjaXNpb24gY2xhcml0eS4gV2UgcHJvdG90eXBlZCBhbmQgbGF1bmNoZWQgYSBsb3lhbHR5IHByb2dyYW0gYXQgU2V0YXJlIEF2YWwgdXNpbmcgYSA0LWRheSB2YXJpYXRpb24gb2YgdGhpcyBwbGF5Ym9vay5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiQWRvcHRlZCBsaWdodG5pbmcgdGFsa3MgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIGZhc3QuXCIsXG4gICAgICBcIk1hZGUg4oCcSG93IG1pZ2h0IHdl4oCdIHN5bnRoZXNpcyBhIHN0YXBsZSBpbiBteSB3b3Jrc2hvcHMuXCIsXG4gICAgICBcIkltcHJvdmVkIHJlbW90ZSBmYWNpbGl0YXRpb24gdXNpbmcgc3RydWN0dXJlZCB2b3Rpbmcgcml0dWFscy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHJlc29sdmVBc3NldChjcmVhdGl2ZUNvbmZpZGVuY2VDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJDcmVhdGl2ZSBDb25maWRlbmNlXCIsXG4gICAgYXV0aG9yOiBcIlRvbSAmIERhdmlkIEtlbGxleVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgYm9vayByZWZyYW1lZCBob3cgSSBtZW50b3IgbmV3IGRlc2lnbmVyc+KAlHNoaWZ0aW5nIGNyaXRpcXVlcyBmcm9tIHNvbHV0aW9uIGp1ZGdtZW50IHRvIGNhcGFiaWxpdHkgYnVpbGRpbmcgYW5kIHBzeWNob2xvZ2ljYWwgc2FmZXR5LlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIOKAnGNvbmZpZGVuY2UgbWFwcGluZ+KAnSBpbiBteSBtZW50b3JzaGlwIHNlc3Npb25zLlwiLFxuICAgICAgXCJEcm92ZSBtZSB0byBkZXNpZ24gcHJvamVjdC1iYXNlZCBjdXJyaWN1bGEgYXQgUmFobmVtYSBDb2xsZWdlLlwiLFxuICAgICAgXCJFbmNvdXJhZ2VkIHN0b3J5dGVsbGluZyByaXR1YWxzIHRvIGNlbGVicmF0ZSBpbmNyZW1lbnRhbCB3aW5zLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KGFpQW5kVXhDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgICBhdXRob3I6IFwiUGFtZWxhIFBhdmxpc2Nha1wiLFxuICAgIGxhYmVsOiBcIkluIHByb2dyZXNzIMK3IFE0IDIwMjVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJ4oCZbSBleHBsb3JpbmcgaG93IGh1bWFuLWNlbnRlcmVkIG1ldGhvZHMgZXZvbHZlIHdoZW4gbW9kZWxzIG1ha2UgcHJvYmFiaWxpc3RpYyBkZWNpc2lvbnPigJRpbmZvcm1pbmcgdGhlIGd1YXJkcmFpbHMgSSBjcmFmdCBmb3IgQUktYXVnbWVudGVkIHNvbHV0aW9ucy5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiQnVpbGRpbmcgYW4gZXRoaWNhbCBjaGVja2xpc3QgZm9yIEFJIGV4cGVyaW1lbnRzLlwiLFxuICAgICAgXCJQYWlyaW5nIHF1YWxpdGF0aXZlIGludGVydmlld3Mgd2l0aCBtb2RlbCBtZXRyaWNzLlwiLFxuICAgICAgXCJEb2N1bWVudGluZyBwcm9tcHQgZGVzaWduIHBhdHRlcm5zIGZvciBteSB0ZWFtLlwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0OiBcIk5vdyBSZWFkaW5nXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PEJvb2s+O1xuXG5leHBvcnQgY29uc3QgdGVhbTogVGVhbVNuYXBzaG90ID0ge1xuICBpbWFnZTogcmVzb2x2ZUFzc2V0KGRpdmFyVGVhbVBob3RvQXNzZXQpLFxuICBhbHQ6IFwiTWFzaWggU2Fkcmkgd2l0aCB0aGUgRGl2YXIgcHJvZHVjdCB0ZWFtXCIsXG4gIGNhcHRpb246XG4gICAgXCJEaXZhciBQcm9kdWN0IEV4cGVyaWVuY2UgVGVhbSDigJQgY29sbGFib3JhdGluZyBhY3Jvc3MgcmVzZWFyY2gsIHByb2R1Y3QgZGVzaWduLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gIHRpdGxlOiBcIk15IERpdmFyIFByb2R1Y3QgVGVhbVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlRoZXNlIGFyZSB0aGUgdGFsZW50ZWQgY29sbGVhZ3VlcyBJJ20gcHJvdWQgdG8gY29sbGFib3JhdGUgd2l0aCBhdCBEaXZhci4gVG9nZXRoZXIsIG91ciAzMi1wZXJzb24gcHJvZHVjdCBvcmdhbml6YXRpb24gYmxlbmRzIGRlc2lnbiwgcmVzZWFyY2gsIHByb2R1Y3QsIGFuZCBlbmdpbmVlcmluZyB0byBzaGlwIGV4cGVyaWVuY2VzIHRoYXQgcHJvdGVjdCBhbmQgZW1wb3dlciBtaWxsaW9ucyBvZiB1c2Vycy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBlZHVjYXRpb24gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJEZWdyZWVcIixcbiAgICBkYXRlOiBcIjIwMTUg4oCTIDIwMThcIixcbiAgICB0aXRsZTogXCJCU2MgaW4gUHJvamVjdCBNYW5hZ2VtZW50IEVuZ2luZWVyaW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUGF5YW1lIE5vb3IgVW5pdmVyc2l0eVwiLFxuICAgIGRldGFpbHM6IFtcbiAgICAgIFwiVGVhY2hpbmcgQXNzaXN0YW50LCBhcHBvaW50ZWQgYnkgRHIuIEUuIFJhamFiaSwgSGVhZCBvZiB0aGUgU2NpZW5jZSBDb21taXR0ZWVcIixcbiAgICAgIFwiQWN0aXZlIE1lbWJlciBvZiB0aGUgQ2l2aWwgRW5naW5lZXJpbmcgYW5kIFByb2plY3QgTWFuYWdlbWVudCBTY2llbnRpZmljIFNvY2lldHlcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQXNzb2NpYXRlXCIsXG4gICAgZGF0ZTogXCIyMDE0XCIsXG4gICAgdGl0bGU6IFwiQXNzb2NpYXRlIGluIE1lY2hhbmljYWwgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJCdS1BbGkgU2luYSBVbml2ZXJzaXR5XCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJEaXBsb21hXCIsXG4gICAgZGF0ZTogXCIyMDA5XCIsXG4gICAgdGl0bGU6IFwiRGlwbG9tYSBpbiBNYXRoZW1hdGljcyBhbmQgUGh5c2ljc1wiLFxuICAgIGluc3RpdHV0aW9uOlxuICAgICAgXCJOYXRpb25hbCBPcmdhbml6YXRpb24gZm9yIERldmVsb3BtZW50IG9mIEV4Y2VwdGlvbmFsIFRhbGVudHMgKFNhbXBhZClcIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8RWR1Y2F0aW9uSXRlbT47XG5cbmV4cG9ydCBjb25zdCBjZXJ0aWZpY2F0ZXMgPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxDZXJ0aWZpY2F0ZUl0ZW0+O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiU2FlZWQgQWJvbGdoYXNlbWlcIixcbiAgICByb2xlOiBcIlByb2R1Y3QgRGVzaWduIExlYWQgYXQgU25hcHBGb29kXCIsXG4gICAgZGF0ZTogXCJKdWx5IDMwLCAyMDIxIOKAoiBSZXBvcnRlZCBkaXJlY3RseSB0byBNYXNpaFwiLFxuICAgIHRleHQ6IFwiSSBoYWQgdGhlIHByaXZpbGVnZSBvZiB3b3JraW5nIGNsb3NlbHkgd2l0aCBNYXNpaCBmb3IgYSB5ZWFyLiBTdGFydGluZyBteSBwcm9mZXNzaW9uYWwgam91cm5leSB3aXRoIGhpbSB3YXMgdHJ1bHkgZm9ydHVuYXRlOyBoZSdzIG5vdCBvbmx5IGVtcGF0aGV0aWMgdG93YXJkcyBjb2xsZWFndWVzIGJ1dCBhbHNvIGFkZXB0IGF0IHByaW9yaXRpemluZyB0YXNrcyBiYXNlZCBvbiBpbmRpdmlkdWFsIHN0cmVuZ3RocyBhbmQgYXNzaWduaW5nIHRoZW0gYWNjb3JkaW5nbHkuIE1hc2loIHBsYWNlcyBzaWduaWZpY2FudCBlbXBoYXNpcyBvbiBwZXJzb25hbCBncm93dGgsIG9mZmVyaW5nIHByYWN0aWNhbCByZXNvdXJjZXMgdGFpbG9yZWQgdG8gdGVhbSBtZW1iZXJzJyBjb21wZXRlbmNpZXMuIFdvcmtpbmcgYWxvbmdzaWRlIGhpbSB3YXMgYm90aCBlbmpveWFibGUgYW5kIGVucmljaGluZy5cIixcbiAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FlZWQtYWJvbGdoYXNlbWkvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFsaSBBemFkZWhcIixcbiAgICByb2xlOiBcIlNvZnR3YXJlIEVuZ2luZWVyIGF0IFVzZXJUZXN0aW5nXCIsXG4gICAgZGF0ZTogXCJKdWx5IDMxLCAyMDIxIOKAoiBNYXNpaCdzIHRlYWNoZXJcIixcbiAgICB0ZXh0OiBcIk1hc2loIGlzIG9uZSBvZiBteSBwcml2aWxlZ2VkIHN0dWRlbnRzIHdobyBpcyBkZXRlcm1pbmVkIHRvIGltcHJvdmUgaGlzIGtub3dsZWRnZSBhbmQgc2tpbGxzLiBIaXMgY29tbWl0bWVudCBhbmQgcHVuY3R1YWxpdHkgaW4gZGVsaXZlcmluZyBhc3NpZ25tZW50cyBhcmUgY29tbWVuZGFibGUuIEluIG15IG9waW5pb24sIGhpcyBpbnRlcmVzdCBpbiBsZWFybmluZyBoYXMgYmVlbiBvbmUgb2YgdGhlIGtleSByZWFzb25zIGZvciBoaXMgc3VjY2Vzcy5cIixcbiAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxpLWF6YWRlaC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG9zc2VpbiBNYWhtb3VkdmFuZFwiLFxuICAgIHJvbGU6IFwiRGVzaWduIExlYWQgYXQgU2V0YXJlIEF2YWwgKE1DSSlcIixcbiAgICBkYXRlOiBcIk1hcmNoIDEwLCAyMDIxIOKAoiBIb3NzZWluIG1hbmFnZWQgTWFzaWggZGlyZWN0bHlcIixcbiAgICB0ZXh0OiBcIkkgaGF2ZSBrbm93biBNYXNpaCBzaW5jZSAyMDE4LCBhbmQgZnJvbSB0aGUgYmVnaW5uaW5nLCBoaXMgcG90ZW50aWFsIHRhbGVudCB3YXMgZXZpZGVudCwgbWFya2luZyB0aGUgc3RhcnQgb2Ygb3VyIGNvbGxhYm9yYXRpdmUgam91cm5leS4gRm9yIGNvbnNpc3RlbnQsIHRvcC1xdWFsaXR5IGRlc2lnbiwgeW91IG9ubHkgbmVlZCB0byBnaXZlIE1hc2loIHRoZSByYXcgZGF0YSBhbmQgYW55IHVuY2VydGFpbnRpZXMuIFdoaWxlIHdvcmtpbmcgdG9nZXRoZXIgb24gdGhlIHByb2R1Y3QgdGVhbSBhdCBTZXRhcmUgQXZhbCBDb21wYW55LCBoaXMgZXhwZXJ0aXNlIHdhcyBjcnVjaWFsIGluIHByb2JsZW0gZGVmaW5pdGlvbiwgc29sdXRpb24gZmluZGluZywgYW5kIGRlc2lnbmluZyBmbG93cy4gVGhlIG91dGNvbWVzIG9mIGhpcyBwcm9mZXNzaW9uYWwgYW5kIG1ldGljdWxvdXNseSBjcmFmdGVkIGRlc2lnbnMgaGF2ZSBhbHdheXMgYmVlbiBvdXRzdGFuZGluZy4gSGUgaXMgYSBjb25zdW1tYXRlIHByb2Zlc3Npb25hbCwgYW5kIEkgaGlnaGx5IHJlY29tbWVuZCBoaW0uXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hvc3NlaW5tYWhtb3VkdmFuZC9cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT47XG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSwyREFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsb0JBQW9COzs7QUNIeEI7QUFIQTtBQUlBLElBQWUsc0RBQTJCLHdCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLGVBQWU7OztBQ2VuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsSUFBTSxlQUFlLENBQUMsVUFBa0IsSUFBSSxJQUFJLE9BQU8sWUFBWSxHQUFHLEVBQUU7QUFtRWpFLElBQU0sWUFBdUI7QUFBQSxFQUNsQyxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixhQUNFO0FBQ0o7QUFFTyxJQUFNLFVBQVU7QUFBQSxFQUNyQjtBQUFBLElBQ0UsT0FBTyxhQUFhLHlCQUFvQjtBQUFBLElBQ3hDLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTyxhQUFhLHlCQUFxQjtBQUFBLElBQ3pDLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTyxhQUFhLDJCQUFzQjtBQUFBLElBQzFDLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTyxhQUFhLHlCQUFvQjtBQUFBLElBQ3hDLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTyxhQUFhLHlCQUFvQjtBQUFBLElBQ3hDLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxFQUNYO0FBQ0Y7QUFFTyxJQUFNLGlCQUNYO0FBRUssSUFBTSxZQUErQixDQUFDLE1BQUssNEJBQVEsZ0JBQU0sY0FBSTtBQUU3RCxJQUFNLGlCQUFpQztBQUFBLEVBQzVDLE9BQU87QUFBQSxFQUNQLFVBQ0U7QUFBQSxFQUNGLGtCQUFrQjtBQUFBLElBQ2hCLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNUO0FBQ0Y7QUFFTyxJQUFNLFFBQVE7QUFBQSxFQUNuQjtBQUFBLElBQ0UsT0FBTyxhQUFhLGlDQUFnQztBQUFBLElBQ3BELE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFdBQVc7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU8sYUFBYSxjQUFnQjtBQUFBLElBQ3BDLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFdBQVc7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU8sYUFBYSwyQkFBNEI7QUFBQSxJQUNoRCxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixXQUFXO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPLGFBQWEsaUJBQWlCO0FBQUEsSUFDckMsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsV0FBVztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiO0FBQ0Y7QUFFTyxJQUFNLE9BQXFCO0FBQUEsRUFDaEMsT0FBTyxhQUFhLGtCQUFtQjtBQUFBLEVBQ3ZDLEtBQUs7QUFBQSxFQUNMLFNBQ0U7QUFBQSxFQUNGLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFDSjtBQUVPLElBQU0sWUFBWTtBQUFBLEVBQ3ZCO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLEVBQ0o7QUFDRjtBQUVPLElBQU0sZUFBZTtBQUFBLEVBQzFCO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxRQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsRUFDVDtBQUNGO0FBRU8sSUFBTSxhQUFhO0FBQUEsRUFDeEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsRUFDWjtBQUNGOzs7O0FEN1BBLElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxPQUFPLFVBQVUsTUFBTSxRQUFRLCtCQUMvRCx1QkF5QkUsZUF6QkY7QUFBQSxFQUNFLFNBQVM7QUFBQSxFQUNULFlBQVksVUFBVSxXQUFXLFdBQVc7QUFBQSxFQUM1QyxXQUFXO0FBQUEsRUFIYixVQXlCRTtBQUFBLEtBcEJFLFFBQVEsNEJBQ1IsdUJBT0UsZUFQRjtBQUFBLE1BQU8sV0FBVTtBQUFBLE1BQU0sU0FBUztBQUFBLE1BQUcsWUFBVztBQUFBLE1BQTlDLFVBT0U7QUFBQSxRQU5DO0FBQUEsUUFDQSwyQkFDQyx1QkFFRSxvQkFGRjtBQUFBLFVBQVksU0FBUTtBQUFBLFVBQU0sT0FBTTtBQUFBLFVBQWhDLFVBQ0c7QUFBQSxXQURILGlDQUVFO0FBQUE7QUFBQSxPQUxOLGdDQU9FO0FBQUEsb0JBRUosdUJBQWtDLG9CQUFsQztBQUFBLE1BQVksU0FBUTtBQUFBLE1BQXBCLFVBQTBCO0FBQUEsT0FBMUIsaUNBQWtDO0FBQUEsSUFDakMsNEJBQ0MsdUJBTUUsb0JBTkY7QUFBQSxNQUNFLFNBQVE7QUFBQSxNQUNSLE9BQU07QUFBQSxNQUNOLElBQUksRUFBRSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxJQUFJO0FBQUEsTUFIbEUsVUFLRztBQUFBLE9BTEgsaUNBTUU7QUFBQTtBQUFBLEdBdkJOLGdDQXlCRTtBQUdKLElBQU0sY0FBYyxHQUFHLElBQUksYUFBYSw0QkFDdEMsdUJBV0UsY0FYRjtBQUFBLEVBQ0UsV0FBVztBQUFBLEVBQ1gsU0FBUTtBQUFBLEVBQ1IsSUFBSTtBQUFBLElBQ0YsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLE9BQ1I7QUFBQSxFQUNMO0FBQUEsS0FDSTtBQUFBLEVBUk47QUFBQSxvQ0FXRTtBQXlKSixJQUFNLGNBQWMsTUFBTTtBQUFBLEVBQ3hCLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFFdkIsdUJBQ0U7QUFBQSxjQTJnQkU7QUFBQSxzQkExZ0JBLHVCQWlDRSxhQWpDRjtBQUFBLFFBQ0UsV0FBVTtBQUFBLFFBQ1YsSUFBSTtBQUFBLFVBQ0YsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSxVQUNyQixpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUFVLDZCQUE2QjtBQUFBLFFBQ2xFO0FBQUEsUUFORiwwQkFRRSx1QkF3QkUsbUJBeEJGO0FBQUEsb0NBQ0UsdUJBc0JFLGVBdEJGO0FBQUEsWUFDRSxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLFlBQ3hCLElBQUk7QUFBQSxjQUNGLFVBQVU7QUFBQSxjQUNWLElBQUk7QUFBQSxjQUNKLFdBQVcsRUFBRSxJQUFJLFFBQVEsSUFBSSxTQUFTO0FBQUEsWUFDeEM7QUFBQSxZQU5GLFVBc0JFO0FBQUEsOEJBZEEsdUJBRUUsb0JBRkY7QUFBQSxnQkFBWSxTQUFRO0FBQUEsZ0JBQU0sT0FBTTtBQUFBLGdCQUFrQixJQUFJLEVBQUUsV0FBVyxPQUFPO0FBQUEsZ0JBQTFFO0FBQUEsa0RBRUU7QUFBQSw4QkFDRix1QkFBaUQsb0JBQWpEO0FBQUEsZ0JBQVksU0FBUTtBQUFBLGdCQUFwQixVQUErQixVQUFVO0FBQUEsaUJBQXpDLGlDQUFpRDtBQUFBLDhCQUNqRCx1QkFFRSxvQkFGRjtBQUFBLGdCQUFZLFNBQVE7QUFBQSxnQkFBTyxPQUFNO0FBQUEsZ0JBQWpDLFVBQ0csVUFBVTtBQUFBLGlCQURiLGlDQUVFO0FBQUEsOEJBQ0YsdUJBTUUsb0JBTkY7QUFBQSxnQkFDRSxTQUFRO0FBQUEsZ0JBQ1IsT0FBTTtBQUFBLGdCQUNOLElBQUksRUFBRSxZQUFZLElBQUk7QUFBQSxnQkFIeEIsVUFLRyxVQUFVO0FBQUEsaUJBTGIsaUNBTUU7QUFBQTtBQUFBLGFBckJKLGdDQXNCRTtBQUFBLFdBdkJKLGlDQXdCRTtBQUFBLFNBaENKLGlDQWlDRTtBQUFBLHNCQUVGLHVCQXdERSxhQXhERjtBQUFBLFFBQ0UsV0FBVTtBQUFBLFFBQ1YsSUFBSTtBQUFBLFVBQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxVQUNuQixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLFFBQ3RCO0FBQUEsUUFMRixVQXdERTtBQUFBLDBCQWpEQSx1QkFXRSxtQkFYRjtBQUFBLHNDQUNFLHVCQVNFLGVBVEY7QUFBQSxjQUFPLFNBQVM7QUFBQSxjQUFLLElBQUksRUFBRSxVQUFVLElBQUk7QUFBQSxjQUF6QyxVQVNFO0FBQUEsZ0NBUkEsdUJBRUUsb0JBRkY7QUFBQSxrQkFBWSxTQUFRO0FBQUEsa0JBQVUsT0FBTTtBQUFBLGtCQUFwQztBQUFBLG9EQUVFO0FBQUEsZ0NBQ0YsdUJBQWlELG9CQUFqRDtBQUFBLGtCQUFZLFNBQVE7QUFBQSxrQkFBcEI7QUFBQSxvREFBaUQ7QUFBQSxnQ0FDakQsdUJBR0Usb0JBSEY7QUFBQSxrQkFBWSxTQUFRO0FBQUEsa0JBQVEsT0FBTTtBQUFBLGtCQUFsQztBQUFBLG9EQUdFO0FBQUE7QUFBQSxlQVJKLGdDQVNFO0FBQUEsYUFWSixpQ0FXRTtBQUFBLDBCQUNGLHVCQW9DRSxtQkFwQ0Y7QUFBQSxZQUFXLGdCQUFjO0FBQUEsWUFBQyxJQUFJLEVBQUUsVUFBVSxPQUFPLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUU7QUFBQSxZQUF0RSwwQkFDRSx1QkFrQ0UsYUFsQ0Y7QUFBQSxjQUNFLElBQUk7QUFBQSxnQkFDRixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxjQUM1QjtBQUFBLGNBSEYsMEJBS0UsdUJBNEJFLGFBNUJGO0FBQUEsZ0JBQ0UsSUFBSTtBQUFBLGtCQUNGLGFBQWEsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUNuQyxXQUFXLEVBQUUsSUFBSSxLQUFLLElBQUksSUFBSTtBQUFBLGdCQUNoQztBQUFBLGdCQUpGLFVBTUcsUUFBUSxJQUFJLENBQUMseUJBQ1osdUJBbUJFLGFBbkJGO0FBQUEsa0JBRUUsSUFBSTtBQUFBLG9CQUNGLGFBQWE7QUFBQSxvQkFDYixJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksSUFBSTtBQUFBLG9CQUN2QixjQUFjO0FBQUEsb0JBQ2QsVUFBVTtBQUFBLGtCQUNaO0FBQUEsa0JBUEYsMEJBU0UsdUJBQUMsYUFBRDtBQUFBLG9CQUNFLFdBQVU7QUFBQSxvQkFDVixLQUFLLEtBQUs7QUFBQSxvQkFDVixLQUFLLEtBQUs7QUFBQSxvQkFDVixJQUFJO0FBQUEsc0JBQ0YsT0FBTztBQUFBLHNCQUNQLFNBQVM7QUFBQSxzQkFDVCxXQUFXO0FBQUEsb0JBQ2I7QUFBQSxxQkFSRixpQ0FTQTtBQUFBLG1CQWpCSyxHQUFHLEtBQUssV0FBVyxLQUFLLFNBRC9CLHNCQW1CRSxDQUNIO0FBQUEsaUJBM0JILGlDQTRCRTtBQUFBLGVBakNKLGlDQWtDRTtBQUFBLGFBbkNKLGlDQW9DRTtBQUFBO0FBQUEsU0F2REosZ0NBd0RFO0FBQUEsc0JBRUYsdUJBdUZFLGFBdkZGO0FBQUEsUUFDRSxXQUFVO0FBQUEsUUFDVixJQUFJO0FBQUEsVUFDRixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztBQUFBLFVBQ3BCLFdBQVcsYUFBYSxNQUFNLFFBQVE7QUFBQSxVQUN0QyxpQkFBaUI7QUFBQSxRQUNuQjtBQUFBLFFBTkYsMEJBUUUsdUJBOEVFLG1CQTlFRjtBQUFBLG9DQUNFLHVCQTRFRSxjQTVFRjtBQUFBLFlBQU0sV0FBUztBQUFBLFlBQUMsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxZQUFHLFlBQVc7QUFBQSxZQUF0RCxVQTRFRTtBQUFBLDhCQTNFQSx1QkE0QkUsY0E1QkY7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkEwQkUsZUExQkY7QUFBQSxrQkFBTyxTQUFTO0FBQUEsa0JBQWhCLFVBMEJFO0FBQUEsb0NBekJBLHVCQVFFLG9CQVJGO0FBQUEsc0JBQ0UsU0FBUTtBQUFBLHNCQUNSLElBQUk7QUFBQSx3QkFDRixXQUFXO0FBQUEsd0JBQ1gsWUFBWTtBQUFBLHNCQUNkO0FBQUEsc0JBTEYsVUFPRztBQUFBLHVCQVBILGlDQVFFO0FBQUEsb0NBQ0YsdUJBV0UsYUFYRjtBQUFBLHNCQUNFLElBQUk7QUFBQSx3QkFDRixZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU87QUFBQSx3QkFDN0MsSUFBSTtBQUFBLHdCQUNKLElBQUk7QUFBQSxzQkFDTjtBQUFBLHNCQUxGLDBCQU9FLHVCQUdFLG9CQUhGO0FBQUEsd0JBQVksU0FBUTtBQUFBLHdCQUFZLE9BQU07QUFBQSx3QkFBaUIsSUFBSSxFQUFFLFlBQVksSUFBSTtBQUFBLHdCQUE3RTtBQUFBLDBEQUdFO0FBQUEsdUJBVkosaUNBV0U7QUFBQSxvQ0FDRix1QkFHRSxvQkFIRjtBQUFBLHNCQUFZLFNBQVE7QUFBQSxzQkFBUSxPQUFNO0FBQUEsc0JBQWlCLElBQUksRUFBRSxZQUFZLElBQUk7QUFBQSxzQkFBekU7QUFBQSx3REFHRTtBQUFBO0FBQUEsbUJBekJKLGdDQTBCRTtBQUFBLGlCQTNCSixpQ0E0QkU7QUFBQSw4QkFDRix1QkE2Q0UsY0E3Q0Y7QUFBQSxnQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGdCQUE1QiwwQkFDRSx1QkEyQ0UsZUEzQ0Y7QUFBQSxrQkFDRSxTQUFTO0FBQUEsa0JBQ1QsSUFBSTtBQUFBLG9CQUNGLGNBQWM7QUFBQSxvQkFDZCxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLG9CQUNuQixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLG9CQUNuQixpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw2QkFDQTtBQUFBLGtCQUNSO0FBQUEsa0JBVkYsVUEyQ0U7QUFBQSxvQ0EvQkEsdUJBUUUsZUFSRjtBQUFBLHNCQUFPLFNBQVM7QUFBQSxzQkFBaEIsVUFRRTtBQUFBLHdDQVBBLHVCQUVFLG9CQUZGO0FBQUEsMEJBQVksU0FBUTtBQUFBLDBCQUFRLE9BQU07QUFBQSwwQkFBbEM7QUFBQSw0REFFRTtBQUFBLHdDQUNGLHVCQUdFLG9CQUhGO0FBQUEsMEJBQVksU0FBUTtBQUFBLDBCQUFwQjtBQUFBLDREQUdFO0FBQUE7QUFBQSx1QkFQSixnQ0FRRTtBQUFBLG9DQUNGLHVCQXFCRSxlQXJCRjtBQUFBLHNCQUNFLFdBQVU7QUFBQSxzQkFDVixTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLHNCQUN4QixVQUFTO0FBQUEsc0JBQ1QsWUFBVTtBQUFBLHNCQUNWLGdCQUFnQixFQUFFLElBQUksY0FBYyxJQUFJLGdCQUFnQjtBQUFBLHNCQUwxRCxVQU9HLFVBQVUsSUFBSSxDQUFDLDBCQUNkLHVCQVdFLG9CQVhGO0FBQUEsd0JBRUUsV0FBVTtBQUFBLHdCQUNWLElBQUk7QUFBQSwwQkFDRixVQUFVLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRztBQUFBLDBCQUMzQixZQUFZO0FBQUEsMEJBQ1osV0FBVyxFQUFFLElBQUksUUFBUSxJQUFJLE1BQU07QUFBQSwwQkFDbkMsV0FBVztBQUFBLHdCQUNiO0FBQUEsd0JBUkYsVUFVRztBQUFBLHlCQVRJLE9BRFAsc0JBV0UsQ0FDSDtBQUFBLHVCQXBCSCxpQ0FxQkU7QUFBQTtBQUFBLG1CQTFDSixnQ0EyQ0U7QUFBQSxpQkE1Q0osaUNBNkNFO0FBQUE7QUFBQSxhQTNFSixnQ0E0RUU7QUFBQSxXQTdFSixpQ0E4RUU7QUFBQSxTQXRGSixpQ0F1RkU7QUFBQSxzQkFFRix1QkF5RkUsYUF6RkY7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUEsUUFBckQsMEJBQ0UsdUJBdUZFLG1CQXZGRjtBQUFBLG9DQUNFLHVCQXFGRSxlQXJGRjtBQUFBLFlBQU8sU0FBUztBQUFBLFlBQWhCLFVBcUZFO0FBQUEsOEJBcEZBLHVCQUFDLGVBQUQ7QUFBQSxnQkFDRSxTQUFRO0FBQUEsZ0JBQ1IsT0FBTyxlQUFlO0FBQUEsZ0JBQ3RCLFVBQVUsZUFBZTtBQUFBLGdCQUN6QixPQUFNO0FBQUEsaUJBSlIsaUNBS0E7QUFBQSw4QkFDQSx1QkE2RUUsY0E3RUY7QUFBQSxnQkFBTSxXQUFTO0FBQUEsZ0JBQUMsU0FBUztBQUFBLGdCQUFHLFlBQVc7QUFBQSxnQkFBdkMsMEJBQ0UsdUJBMkVFLGNBM0VGO0FBQUEsa0JBQU0sTUFBTSxFQUFFLElBQUksR0FBRztBQUFBLGtCQUFyQiwwQkFDRSx1QkF5RUUsY0F6RUY7QUFBQSxvQkFBTSxXQUFTO0FBQUEsb0JBQUMsU0FBUztBQUFBLG9CQUF6QixVQUNHLE1BQU0sSUFBSSxDQUFDLHlCQUNWLHVCQXFFRSxjQXJFRjtBQUFBLHNCQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsc0JBQTVCLDBCQUNFLHVCQW1FRSxhQW5FRjtBQUFBLHdCQUNFLElBQUk7QUFBQSwwQkFDRixRQUFRO0FBQUEsMEJBQ1IsU0FBUztBQUFBLHdCQUNYO0FBQUEsd0JBSkYsVUFtRUU7QUFBQSwwQ0E3REEsdUJBQUMsYUFBRDtBQUFBLDRCQUNFLFdBQVU7QUFBQSw0QkFDVixLQUFLLEtBQUs7QUFBQSw0QkFDVixLQUFLLFlBQVksS0FBSztBQUFBLDRCQUN0QixJQUFJO0FBQUEsOEJBQ0YsT0FBTztBQUFBLDhCQUNQLFdBQVc7QUFBQSw4QkFDWCxxQkFBcUIsR0FBRyxNQUFNLE9BQU8sT0FBTztBQUFBLDhCQUM1Qyx3QkFBd0IsR0FBRyxNQUFNLE9BQU8sT0FBTztBQUFBLDRCQUNqRDtBQUFBLDZCQVRGLGlDQVVBO0FBQUEsMENBQ0EsdUJBaURFLHFCQWpERjtBQUFBLDRCQUNFLElBQUk7QUFBQSw4QkFDRixTQUFTO0FBQUEsOEJBQ1QsZUFBZTtBQUFBLDhCQUNmLEtBQUs7QUFBQSw4QkFDTCxVQUFVO0FBQUEsNEJBQ1o7QUFBQSw0QkFORixVQWlERTtBQUFBLDhDQXpDQSx1QkFRRSxlQVJGO0FBQUEsZ0NBQU8sU0FBUztBQUFBLGdDQUFoQixVQVFFO0FBQUEsa0RBUEEsdUJBRUUsb0JBRkY7QUFBQSxvQ0FBWSxTQUFRO0FBQUEsb0NBQVUsT0FBTTtBQUFBLG9DQUFwQyxVQUNHLEtBQUs7QUFBQSxxQ0FEUixpQ0FFRTtBQUFBLGtEQUNGLHVCQUF1QyxvQkFBdkM7QUFBQSxvQ0FBWSxTQUFRO0FBQUEsb0NBQXBCLFVBQTBCLEtBQUs7QUFBQSxxQ0FBL0IsaUNBQXVDO0FBQUEsa0RBQ3ZDLHVCQUVFLG9CQUZGO0FBQUEsb0NBQVksU0FBUTtBQUFBLG9DQUFZLE9BQU07QUFBQSxvQ0FBdEMsVUFDRyxLQUFLO0FBQUEscUNBRFIsaUNBRUU7QUFBQTtBQUFBLGlDQVBKLGdDQVFFO0FBQUEsOENBQ0YsdUJBRUUsb0JBRkY7QUFBQSxnQ0FBWSxTQUFRO0FBQUEsZ0NBQVEsT0FBTTtBQUFBLGdDQUFsQyxVQUNHLEtBQUs7QUFBQSxpQ0FEUixpQ0FFRTtBQUFBLDhDQUNGLHVCQVdFLGVBWEY7QUFBQSxnQ0FBTyxXQUFVO0FBQUEsZ0NBQUssU0FBUztBQUFBLGdDQUFNLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsZ0NBQXhELFVBQ0csS0FBSyxVQUFVLElBQUksQ0FBQyw2QkFDbkIsdUJBT0Usb0JBUEY7QUFBQSxrQ0FDRSxXQUFVO0FBQUEsa0NBRVYsU0FBUTtBQUFBLGtDQUNSLE9BQU07QUFBQSxrQ0FKUixVQU1HO0FBQUEsbUNBSkksVUFGUCxzQkFPRSxDQUNIO0FBQUEsaUNBVkgsaUNBV0U7QUFBQSw4QkFDRCxLQUFLLDZCQUNKLHVCQUFDLGNBQUQ7QUFBQSxnQ0FDRSxPQUFPLEtBQUs7QUFBQSxnQ0FDWixNQUFLO0FBQUEsZ0NBQ0wsSUFBSTtBQUFBLGtDQUNGLFdBQVc7QUFBQSxrQ0FDWCxpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw2QkFDQTtBQUFBLGtDQUNOLE9BQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsTUFBTSxRQUFRLE1BQU0sWUFDcEI7QUFBQSxnQ0FDUjtBQUFBLGlDQWJGLGlDQWNBO0FBQUE7QUFBQSw2QkEvQ0osZ0NBaURFO0FBQUE7QUFBQSx5QkFsRUosZ0NBbUVFO0FBQUEsdUJBcEVnQyxLQUFLLE9BQXpDLHNCQXFFRSxDQUNIO0FBQUEscUJBeEVILGlDQXlFRTtBQUFBLG1CQTFFSixpQ0EyRUU7QUFBQSxpQkE1RUosaUNBNkVFO0FBQUE7QUFBQSxhQXBGSixnQ0FxRkU7QUFBQSxXQXRGSixpQ0F1RkU7QUFBQSxTQXhGSixpQ0F5RkU7QUFBQSxzQkFFRix1QkFpRkUsYUFqRkY7QUFBQSxRQUNFLFdBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUEsVUFDckIsV0FBVyxhQUFhLE1BQU0sUUFBUTtBQUFBLFFBQ3hDO0FBQUEsUUFMRiwwQkFPRSx1QkF5RUUsbUJBekVGO0FBQUEsVUFBVyxnQkFBYztBQUFBLFVBQUMsSUFBSSxFQUFFLFVBQVUsTUFBTTtBQUFBLFVBQWhELDBCQUNFLHVCQXVFRSxhQXZFRjtBQUFBLFlBQ0UsSUFBSTtBQUFBLGNBQ0YsU0FBUztBQUFBLGNBQ1QscUJBQXFCLEVBQUUsSUFBSSxnQkFBZ0I7QUFBQSxjQUMzQyxZQUFZO0FBQUEsWUFDZDtBQUFBLFlBTEYsVUF1RUU7QUFBQSw4QkFoRUEsdUJBb0NFLGFBcENGO0FBQUEsZ0JBQ0UsSUFBSTtBQUFBLGtCQUNGLFVBQVU7QUFBQSxrQkFDVixXQUFXLEVBQUUsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxrQkFDdkMsVUFBVTtBQUFBLGdCQUNaO0FBQUEsZ0JBTEYsVUFvQ0U7QUFBQSxrQ0E3QkEsdUJBQUMsYUFBRDtBQUFBLG9CQUNFLFdBQVU7QUFBQSxvQkFDVixLQUFLLEtBQUs7QUFBQSxvQkFDVixLQUFLLEtBQUs7QUFBQSxvQkFDVixJQUFJO0FBQUEsc0JBQ0YsT0FBTztBQUFBLHNCQUNQLFFBQVE7QUFBQSxzQkFDUixXQUFXO0FBQUEsb0JBQ2I7QUFBQSxxQkFSRixpQ0FTQTtBQUFBLGtDQUNBLHVCQWtCRSxvQkFsQkY7QUFBQSxvQkFDRSxTQUFRO0FBQUEsb0JBQ1IsT0FBTTtBQUFBLG9CQUNOLElBQUk7QUFBQSxzQkFDRixVQUFVO0FBQUEsc0JBQ1YsUUFBUSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSxzQkFDekIsTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSxzQkFDdkIsSUFBSTtBQUFBLHNCQUNKLElBQUk7QUFBQSxzQkFDSixjQUFjO0FBQUEsc0JBQ2QsZ0JBQWdCO0FBQUEsc0JBQ2hCLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDhCQUNBO0FBQUEsb0JBQ1I7QUFBQSxvQkFmRixVQWlCRyxLQUFLO0FBQUEscUJBakJSLGlDQWtCRTtBQUFBO0FBQUEsaUJBbkNKLGdDQW9DRTtBQUFBLDhCQUNGLHVCQTBCRSxhQTFCRjtBQUFBLGdCQUNFLElBQUk7QUFBQSxrQkFDRixJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxrQkFDMUIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxnQkFDckI7QUFBQSxnQkFKRiwwQkFNRSx1QkFtQkUsZUFuQkY7QUFBQSxrQkFBTyxTQUFTLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGtCQUFHLElBQUksRUFBRSxVQUFVLElBQUk7QUFBQSxrQkFBdEQsVUFtQkU7QUFBQSxvQ0FsQkEsdUJBRUUsb0JBRkY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVUsT0FBTTtBQUFBLHNCQUFwQztBQUFBLHdEQUVFO0FBQUEsb0NBQ0YsdUJBQXVDLG9CQUF2QztBQUFBLHNCQUFZLFNBQVE7QUFBQSxzQkFBcEIsVUFBMEIsS0FBSztBQUFBLHVCQUEvQixpQ0FBdUM7QUFBQSxvQ0FDdkMsdUJBRUUsb0JBRkY7QUFBQSxzQkFBWSxTQUFRO0FBQUEsc0JBQVEsT0FBTTtBQUFBLHNCQUFpQixJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsc0JBQXpFLFVBQ0csS0FBSztBQUFBLHVCQURSLGlDQUVFO0FBQUEsb0NBQ0YsdUJBVUUsYUFWRjtBQUFBLHNCQUNFLElBQUk7QUFBQSx3QkFDRixZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU87QUFBQSx3QkFDN0MsSUFBSTtBQUFBLHdCQUNKLElBQUk7QUFBQSxzQkFDTjtBQUFBLHNCQUxGLDBCQU9FLHVCQUVFLG9CQUZGO0FBQUEsd0JBQVksU0FBUTtBQUFBLHdCQUFZLE9BQU07QUFBQSx3QkFBaUIsSUFBSSxFQUFFLFlBQVksSUFBSTtBQUFBLHdCQUE3RTtBQUFBLDBEQUVFO0FBQUEsdUJBVEosaUNBVUU7QUFBQTtBQUFBLG1CQWxCSixnQ0FtQkU7QUFBQSxpQkF6QkosaUNBMEJFO0FBQUE7QUFBQSxhQXRFSixnQ0F1RUU7QUFBQSxXQXhFSixpQ0F5RUU7QUFBQSxTQWhGSixpQ0FpRkU7QUFBQSxzQkFFRix1QkErQ0UsYUEvQ0Y7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUEsUUFBckQsMEJBQ0UsdUJBNkNFLG1CQTdDRjtBQUFBLG9DQUNFLHVCQTJDRSxlQTNDRjtBQUFBLFlBQU8sU0FBUztBQUFBLFlBQWhCLFVBMkNFO0FBQUEsOEJBMUNBLHVCQUFDLGVBQUQ7QUFBQSxnQkFDRSxTQUFRO0FBQUEsZ0JBQ1IsT0FBTTtBQUFBLGdCQUNOLHNCQUFNLHVCQUFDLHVCQUFEO0FBQUEsa0JBQW1CLE9BQU07QUFBQSxtQkFBekIsaUNBQW1DO0FBQUEsZ0JBQ3pDLE9BQU07QUFBQSxpQkFKUixpQ0FLQTtBQUFBLDhCQUNBLHVCQW1DRSxjQW5DRjtBQUFBLGdCQUFNLFdBQVM7QUFBQSxnQkFBQyxTQUFTO0FBQUEsZ0JBQXpCLFVBQ0csVUFBVSxJQUFJLENBQUMseUJBQ2QsdUJBK0JFLGNBL0JGO0FBQUEsa0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxrQkFBNUIsMEJBQ0UsdUJBNkJFLGFBN0JGO0FBQUEsb0JBQWEsSUFBSSxFQUFFLFFBQVEsT0FBTztBQUFBLG9CQUFsQywwQkFDRSx1QkEyQkUscUJBM0JGO0FBQUEsZ0RBQ0UsdUJBeUJFLGVBekJGO0FBQUEsd0JBQU8sU0FBUztBQUFBLHdCQUFoQixVQXlCRTtBQUFBLDBDQXhCQSx1QkFLRSxlQUxGO0FBQUEsNEJBQU8sV0FBVTtBQUFBLDRCQUFNLFNBQVM7QUFBQSw0QkFBSyxZQUFXO0FBQUEsNEJBQWhELFVBS0U7QUFBQSw4Q0FKQSx1QkFBQyxjQUFEO0FBQUEsZ0NBQU0sT0FBTyxLQUFLO0FBQUEsZ0NBQU8sTUFBSztBQUFBLGlDQUE5QixpQ0FBc0M7QUFBQSw4Q0FDdEMsdUJBRUUsb0JBRkY7QUFBQSxnQ0FBWSxTQUFRO0FBQUEsZ0NBQVUsT0FBTTtBQUFBLGdDQUFwQyxVQUNHLEtBQUs7QUFBQSxpQ0FEUixpQ0FFRTtBQUFBO0FBQUEsNkJBSkosZ0NBS0U7QUFBQSwwQ0FDRix1QkFBdUMsb0JBQXZDO0FBQUEsNEJBQVksU0FBUTtBQUFBLDRCQUFwQixVQUEwQixLQUFLO0FBQUEsNkJBQS9CLGlDQUF1QztBQUFBLDBDQUN2Qyx1QkFFRSxvQkFGRjtBQUFBLDRCQUFZLFNBQVE7QUFBQSw0QkFBWSxPQUFNO0FBQUEsNEJBQXRDLFVBQ0csS0FBSztBQUFBLDZCQURSLGlDQUVFO0FBQUEsMEJBQ0QsS0FBSywyQkFDSix1QkFXRSxlQVhGO0FBQUEsNEJBQU8sV0FBVTtBQUFBLDRCQUFLLFNBQVM7QUFBQSw0QkFBTSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLDRCQUF4RCxVQUNHLEtBQUssUUFBUSxJQUFJLENBQUMsMkJBQ2pCLHVCQU9FLG9CQVBGO0FBQUEsOEJBQ0UsV0FBVTtBQUFBLDhCQUVWLFNBQVE7QUFBQSw4QkFDUixPQUFNO0FBQUEsOEJBSlIsVUFNRztBQUFBLCtCQUpJLFFBRlAsc0JBT0UsQ0FDSDtBQUFBLDZCQVZILGlDQVdFO0FBQUE7QUFBQSx5QkF2Qk4sZ0NBeUJFO0FBQUEsdUJBMUJKLGlDQTJCRTtBQUFBLHFCQTVCSixpQ0E2QkU7QUFBQSxtQkE5QmdDLEtBQUssT0FBekMsc0JBK0JFLENBQ0g7QUFBQSxpQkFsQ0gsaUNBbUNFO0FBQUE7QUFBQSxhQTFDSixnQ0EyQ0U7QUFBQSxXQTVDSixpQ0E2Q0U7QUFBQSxTQTlDSixpQ0ErQ0U7QUFBQSxzQkFFRix1QkFnREUsYUFoREY7QUFBQSxRQUNFLFdBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQUEsVUFDcEIsaUJBQWlCLE1BQU0sUUFBUSxXQUFXO0FBQUEsUUFDNUM7QUFBQSxRQUxGLDBCQU9FLHVCQXdDRSxtQkF4Q0Y7QUFBQSxvQ0FDRSx1QkFzQ0UsZUF0Q0Y7QUFBQSxZQUFPLFNBQVM7QUFBQSxZQUFoQixVQXNDRTtBQUFBLDhCQXJDQSx1QkFBQyxlQUFEO0FBQUEsZ0JBQ0UsU0FBUTtBQUFBLGdCQUNSLE9BQU07QUFBQSxnQkFDTixzQkFBTSx1QkFBQyw0QkFBRDtBQUFBLGtCQUF3QixPQUFNO0FBQUEsbUJBQTlCLGlDQUEwQztBQUFBLGdCQUNoRCxPQUFNO0FBQUEsaUJBSlIsaUNBS0E7QUFBQSw4QkFDQSx1QkE4QkUsY0E5QkY7QUFBQSxnQkFBTSxXQUFTO0FBQUEsZ0JBQUMsU0FBUztBQUFBLGdCQUF6QixVQUNHLGFBQWEsSUFBSSxDQUFDLGdDQUNqQix1QkEwQkUsY0ExQkY7QUFBQSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLGtCQUE1QiwwQkFDRSx1QkF3QkUsYUF4QkY7QUFBQSxvQkFBYSxJQUFJLEVBQUUsUUFBUSxPQUFPO0FBQUEsb0JBQWxDLDBCQUNFLHVCQXNCRSxxQkF0QkY7QUFBQSxnREFDRSx1QkFvQkUsZUFwQkY7QUFBQSx3QkFBTyxTQUFTO0FBQUEsd0JBQWhCLFVBb0JFO0FBQUEsMENBbkJBLHVCQUtFLGVBTEY7QUFBQSw0QkFBTyxXQUFVO0FBQUEsNEJBQU0sU0FBUztBQUFBLDRCQUFLLFlBQVc7QUFBQSw0QkFBaEQsVUFLRTtBQUFBLDhDQUpBLHVCQUFDLGNBQUQ7QUFBQSxnQ0FBTSxPQUFPLFlBQVk7QUFBQSxnQ0FBTyxNQUFLO0FBQUEsaUNBQXJDLGlDQUE2QztBQUFBLDhDQUM3Qyx1QkFFRSxvQkFGRjtBQUFBLGdDQUFZLFNBQVE7QUFBQSxnQ0FBVSxPQUFNO0FBQUEsZ0NBQXBDLFVBQ0csWUFBWTtBQUFBLGlDQURmLGlDQUVFO0FBQUE7QUFBQSw2QkFKSixnQ0FLRTtBQUFBLDBDQUNGLHVCQUE4QyxvQkFBOUM7QUFBQSw0QkFBWSxTQUFRO0FBQUEsNEJBQXBCLFVBQTBCLFlBQVk7QUFBQSw2QkFBdEMsaUNBQThDO0FBQUEsMEJBQzdDLFlBQVksK0JBQ1gsdUJBRUUsb0JBRkY7QUFBQSw0QkFBWSxTQUFRO0FBQUEsNEJBQVksT0FBTTtBQUFBLDRCQUF0QyxVQUNHLFlBQVk7QUFBQSw2QkFEZixpQ0FFRTtBQUFBLDBCQUVILENBQUMsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sRUFDdkQsT0FBTyxPQUFPLEVBQ2QsSUFBSSxDQUFDLDJCQUNKLHVCQUVFLG9CQUZGO0FBQUEsNEJBQXlCLFNBQVE7QUFBQSw0QkFBUSxPQUFNO0FBQUEsNEJBQS9DLFVBQ0c7QUFBQSw2QkFEYyxRQUFqQixzQkFFRSxDQUNIO0FBQUE7QUFBQSx5QkFuQkwsZ0NBb0JFO0FBQUEsdUJBckJKLGlDQXNCRTtBQUFBLHFCQXZCSixpQ0F3QkU7QUFBQSxtQkF6QmdDLFlBQVksT0FBaEQsc0JBMEJFLENBQ0g7QUFBQSxpQkE3QkgsaUNBOEJFO0FBQUE7QUFBQSxhQXJDSixnQ0FzQ0U7QUFBQSxXQXZDSixpQ0F3Q0U7QUFBQSxTQS9DSixpQ0FnREU7QUFBQSxzQkFFRix1QkFrRUUsYUFsRUY7QUFBQSxRQUFLLFdBQVU7QUFBQSxRQUFVLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUEsUUFBckQsMEJBQ0UsdUJBZ0VFLG1CQWhFRjtBQUFBLG9DQUNFLHVCQThERSxlQTlERjtBQUFBLFlBQU8sU0FBUztBQUFBLFlBQWhCLFVBOERFO0FBQUEsOEJBN0RBLHVCQUFDLGVBQUQ7QUFBQSxnQkFDRSxTQUFRO0FBQUEsZ0JBQ1IsT0FBTTtBQUFBLGdCQUNOLHNCQUFNLHVCQUFDLGtDQUFEO0FBQUEsa0JBQThCLE9BQU07QUFBQSxtQkFBcEMsaUNBQWdEO0FBQUEsZ0JBQ3RELE9BQU07QUFBQSxpQkFKUixpQ0FLQTtBQUFBLDhCQUNBLHVCQXNERSxjQXRERjtBQUFBLGdCQUFNLFdBQVM7QUFBQSxnQkFBQyxTQUFTO0FBQUEsZ0JBQXpCLFVBQ0csV0FBVyxJQUFJLENBQUMsOEJBQ2YsdUJBa0RFLGNBbERGO0FBQUEsa0JBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxrQkFBNUIsMEJBQ0UsdUJBZ0RFLGFBaERGO0FBQUEsb0JBQWEsSUFBSSxFQUFFLFFBQVEsT0FBTztBQUFBLG9CQUFsQywwQkFDRSx1QkE4Q0UscUJBOUNGO0FBQUEsc0JBQ0UsSUFBSSxFQUFFLFNBQVMsUUFBUSxlQUFlLFVBQVUsS0FBSyxHQUFHLFFBQVEsT0FBTztBQUFBLHNCQUR6RSxVQThDRTtBQUFBLHdDQTNDQSx1QkFRRSxlQVJGO0FBQUEsMEJBQU8sU0FBUztBQUFBLDBCQUFoQixVQVFFO0FBQUEsNENBUEEsdUJBQTJDLG9CQUEzQztBQUFBLDhCQUFZLFNBQVE7QUFBQSw4QkFBcEIsVUFBMEIsVUFBVTtBQUFBLCtCQUFwQyxpQ0FBMkM7QUFBQSw0Q0FDM0MsdUJBRUUsb0JBRkY7QUFBQSw4QkFBWSxTQUFRO0FBQUEsOEJBQVksT0FBTTtBQUFBLDhCQUF0QyxVQUNHLFVBQVU7QUFBQSwrQkFEYixpQ0FFRTtBQUFBLDRDQUNGLHVCQUVFLG9CQUZGO0FBQUEsOEJBQVksU0FBUTtBQUFBLDhCQUFVLE9BQU07QUFBQSw4QkFBcEMsVUFDRyxVQUFVO0FBQUEsK0JBRGIsaUNBRUU7QUFBQTtBQUFBLDJCQVBKLGdDQVFFO0FBQUEsd0NBQ0YsdUJBRUUsb0JBRkY7QUFBQSwwQkFBWSxTQUFRO0FBQUEsMEJBQVEsT0FBTTtBQUFBLDBCQUFpQixJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsMEJBQXpFLFVBQ0csVUFBVTtBQUFBLDJCQURiLGlDQUVFO0FBQUEsd0NBQ0YsdUJBOEJFLHFCQTlCRjtBQUFBLDBCQUNFLFdBQVU7QUFBQSwwQkFDVixNQUFNLFVBQVU7QUFBQSwwQkFDaEIsUUFBTztBQUFBLDBCQUNQLEtBQUk7QUFBQSwwQkFDSixTQUFRO0FBQUEsMEJBQ1IsSUFBSTtBQUFBLDRCQUNGLElBQUk7QUFBQSw0QkFDSixXQUFXO0FBQUEsNEJBQ1gsYUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw0QkFDQTtBQUFBLDRCQUNOLE9BQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsTUFBTSxRQUFRLE1BQU0sWUFDcEI7QUFBQSw0QkFDTixXQUFXO0FBQUEsOEJBQ1QsYUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw0QkFDQTtBQUFBLDhCQUNOLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDZCQUNBO0FBQUEsNEJBQ1I7QUFBQSwwQkFDRjtBQUFBLDBCQTNCRjtBQUFBLDREQThCRTtBQUFBO0FBQUEsdUJBN0NKLGdDQThDRTtBQUFBLHFCQS9DSixpQ0FnREU7QUFBQSxtQkFqRGdDLFVBQVUsTUFBOUMsc0JBa0RFLENBQ0g7QUFBQSxpQkFyREgsaUNBc0RFO0FBQUE7QUFBQSxhQTdESixnQ0E4REU7QUFBQSxXQS9ESixpQ0FnRUU7QUFBQSxTQWpFSixpQ0FrRUU7QUFBQTtBQUFBLEtBMWdCSixnQ0EyZ0JFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiRTNEMDFFNjE1MTlEOEQ2MTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
