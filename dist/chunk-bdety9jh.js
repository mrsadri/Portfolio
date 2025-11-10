import {
  GhostButton_default
} from "./chunk-wds9v5jt.js";
import {
  VolunteerActivismRounded_default
} from "./chunk-1y7kpfxe.js";
import"./chunk-56dhb304.js";
import {
  Pill_default
} from "./chunk-3197h7cd.js";
import {
  site_default
} from "./chunk-342m0h67.js";
import {
  Seo_default
} from "./chunk-2ny3xade.js";
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
} from "./chunk-dkmh5se1.js";

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
    borderRadius: (theme) => theme.tokens.radius.surface,
    boxShadow: "none",
    ...sx
  },
  ...props,
  children
}, undefined, false, undefined, this);
var MyStoryPage = () => {
  const theme = useTheme();
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
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Seo_default, {
        title: "My Story — Masih Sadri’s path as a product designer",
        description: "Learn how Masih Sadri blends mentorship, experimentation, and craft to design human experiences—from classroom to product launches.",
        canonicalPath: "/my-story",
        openGraph: {
          type: "profile",
          image: heroImage ? { url: heroImage, alt: "Masih Sadri documenting personal journey" } : undefined
        },
        structuredData
      }, undefined, false, undefined, this),
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
            maxWidth: false,
            sx: { mt: { xs: 4, md: 6 } },
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
                    borderRadius: (theme2) => theme2.tokens.radius.surface,
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
                    borderRadius: "48px",
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
          maxWidth: false,
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
                      borderRadius: theme.tokens.radius.pill,
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

//# debugId=8AEA0590F69223EE64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2Nob29sUm91bmRlZC5qcyIsICIuLi9zcmMvcm91dGVzL015U3RvcnlQYWdlLnRzeCIsICIuLi9zcmMvZGF0YS9teVN0b3J5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA1aC0yVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDVjLTEuMSAwLTIgLjktMiAydjFjMCAyLjU1IDEuOTIgNC42MyA0LjM5IDQuOTQuNjMgMS41IDEuOTggMi42MyAzLjYxIDIuOTZWMTlIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zdi0zLjFjMS42My0uMzMgMi45OC0xLjQ2IDMuNjEtMi45NkMxOS4wOCAxMi42MyAyMSAxMC41NSAyMSA4VjdjMC0xLjEtLjktMi0yLTJNNSA4VjdoMnYzLjgyQzUuODQgMTAuNCA1IDkuMyA1IDhtMTQgMGMwIDEuMy0uODQgMi40LTIgMi44MlY3aDJ6XCJcbn0pLCAnRW1vamlFdmVudHNSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxMy4xOHYyLjgxYzAgLjczLjQgMS40MSAxLjA0IDEuNzZsNSAyLjczYy42LjMzIDEuMzIuMzMgMS45MiAwbDUtMi43M2MuNjQtLjM1IDEuMDQtMS4wMyAxLjA0LTEuNzZ2LTIuODFsLTYuMDQgMy4zYy0uNi4zMy0xLjMyLjMzLTEuOTIgMHptNi4wNC05LjY2LTguNDMgNC42Yy0uNjkuMzgtLjY5IDEuMzggMCAxLjc2bDguNDMgNC42Yy42LjMzIDEuMzIuMzMgMS45MiAwTDIxIDEwLjA5VjE2YzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY5LjU5YzAtLjM3LS4yLS43LS41Mi0uODhsLTkuNTItNS4xOWEyLjA0IDIuMDQgMCAwIDAtMS45MiAwXCJcbn0pLCAnU2Nob29sUm91bmRlZCcpOyIsCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9NeVN0b3J5UGFnZS50c3hcbi8vIFB1cnBvc2U6IFJlaW1hZ2luZXMgdGhlIE15IFN0b3J5IHJvdXRlIHdpdGggdW5pZmllZCBkZXNpZ24gdG9rZW5zLCBjb25zaXN0ZW50IHN1cmZhY2VzLCBhbmQgY2xlYXIgaGllcmFyY2h5IGFjcm9zcyBwZXJzb25hbCBuYXJyYXRpdmUsIGdhbGxlcnksIGFuZCBjcmVkZW50aWFscy5cbmltcG9ydCBBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NOZXdSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IEVtb2ppRXZlbnRzUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1vamlFdmVudHNSb3VuZGVkXCI7XG5pbXBvcnQgU2Nob29sUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2Nob29sUm91bmRlZFwiO1xuaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBJY29uQnV0dG9uLFxuICBNb2JpbGVTdGVwcGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlTWVkaWFRdWVyeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhcmRQcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHR5cGUgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHtcbiAgYm9va3MsXG4gIGNlcnRpZmljYXRlcyxcbiAgZWR1Y2F0aW9uLFxuICBlbW9qaUxpc3QsXG4gIGdhbGxlcnksXG4gIHBoaWxvc29waHlUZXh0LFxuICByZWFkaW5nSm91cm5leSxcbiAgcmVmZXJlbmNlcyxcbiAgc3RvcnlIZXJvLFxuICB0ZWFtLFxufSBmcm9tIFwiLi4vZGF0YS9teVN0b3J5XCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9QaWxsXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi91dGlscy9zaXRlXCI7XG5cbnR5cGUgU2VjdGlvbkhlYWRlclByb3BzID0ge1xuICBleWVicm93Pzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IFJlYWN0Tm9kZTtcbiAgYWxpZ24/OiBcImNlbnRlclwiIHwgXCJsZWZ0XCI7XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgZXllYnJvdywgdGl0bGUsIHN1YnRpdGxlLCBpY29uLCBhbGlnbiA9IFwiY2VudGVyXCIgfTogU2VjdGlvbkhlYWRlclByb3BzKSA9PiAoXG4gIDxTdGFja1xuICAgIHNwYWNpbmc9ezEuNX1cbiAgICBhbGlnbkl0ZW1zPXthbGlnbiA9PT0gXCJjZW50ZXJcIiA/IFwiY2VudGVyXCIgOiBcImZsZXgtc3RhcnRcIn1cbiAgICB0ZXh0QWxpZ249e2FsaWdufVxuICA+XG4gICAgeyhpY29uIHx8IGV5ZWJyb3cpICYmIChcbiAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIHtpY29ufVxuICAgICAgICB7ZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7ZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICl9XG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICBzeD17eyBtYXhXaWR0aDogYWxpZ24gPT09IFwiY2VudGVyXCIgPyA3MjAgOiA2NDAsIGxpbmVIZWlnaHQ6IDEuNiB9fVxuICAgICAgPlxuICAgICAgICB7c3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgKX1cbiAgPC9TdGFjaz5cbik7XG5cbmNvbnN0IFN1cmZhY2VDYXJkID0gKHsgc3gsIGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBDYXJkUHJvcHMpID0+IChcbiAgPENhcmRcbiAgICBlbGV2YXRpb249ezB9XG4gICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICBzeD17e1xuICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAuLi5zeCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9DYXJkPlxuKTtcblxuY29uc3QgTGlmZUluRnJhbWVzU2xpZGVyID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWRVcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKSk7XG4gIGNvbnN0IGlzU21VcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKSk7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBpc01kVXAgPyAzIDogaXNTbVVwID8gMiA6IDE7XG5cbiAgY29uc3QgbWF4SW5kZXggPSB1c2VNZW1vKFxuICAgICgpID0+IE1hdGgubWF4KDAsIGdhbGxlcnkubGVuZ3RoIC0gc2xpZGVzUGVyVmlldyksXG4gICAgW3NsaWRlc1BlclZpZXddLFxuICApO1xuXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleCgocHJldikgPT4gTWF0aC5taW4ocHJldiwgbWF4SW5kZXgpKTtcbiAgfSwgW21heEluZGV4XSk7XG5cbiAgY29uc3QgaGFuZGxlU3RlcCA9IChkaXJlY3Rpb246IC0xIHwgMSkgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiBNYXRoLm1pbihtYXhJbmRleCwgTWF0aC5tYXgoMCwgcHJldiArIGRpcmVjdGlvbikpKTtcbiAgfTtcblxuICBjb25zdCBzbGlkZVdpZHRoUGVyY2VudCA9IDEwMCAvIHNsaWRlc1BlclZpZXc7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy54bCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDM2MG1zIGVhc2VcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7YWN0aXZlSW5kZXggKiBzbGlkZVdpZHRoUGVyY2VudH0lKWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7KGdhbGxlcnkubGVuZ3RoICogMTAwKSAvIHNsaWRlc1BlclZpZXd9JWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnYWxsZXJ5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFN1cmZhY2VDYXJkXG4gICAgICAgICAgICAgIGtleT17aXRlbS5jYXB0aW9ufVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGZsZXg6IGAwIDAgJHtzbGlkZVdpZHRoUGVyY2VudH0lYCxcbiAgICAgICAgICAgICAgICBteDogeyB4czogMC43NSwgbWQ6IDEuMjUgfSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiAyNjAsIHNtOiAzMDAsIG1kOiAzMjAgfSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS5jYXB0aW9ufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YmNhcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3ViY2FwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHBob3RvXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcCgtMSl9XG4gICAgICAgIGRpc2FibGVkPXthY3RpdmVJbmRleCA9PT0gMH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICBsZWZ0OiB7IHhzOiA2LCBzbTogMTIgfSxcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgYm94U2hhZG93OiBhY3RpdmVJbmRleCA9PT0gMCA/IFwibm9uZVwiIDogdGhlbWUudG9rZW5zLnNoYWRvdy5sZXZlbDEsXG4gICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFycm93QmFja0lvc05ld1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgcGhvdG9cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwKDEpfVxuICAgICAgICBkaXNhYmxlZD17YWN0aXZlSW5kZXggPT09IG1heEluZGV4fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgIHJpZ2h0OiB7IHhzOiA2LCBzbTogMTIgfSxcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgYm94U2hhZG93OiBhY3RpdmVJbmRleCA9PT0gbWF4SW5kZXggPyBcIm5vbmVcIiA6IHRoZW1lLnRva2Vucy5zaGFkb3cubGV2ZWwxLFxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgPE1vYmlsZVN0ZXBwZXJcbiAgICAgICAgdmFyaWFudD1cImRvdHNcIlxuICAgICAgICBzdGVwcz17bWF4SW5kZXggKyAxfVxuICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXG4gICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZUluZGV4fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBtdDogMyxcbiAgICAgICAgICBcIiYgLk11aU1vYmlsZVN0ZXBwZXItZG90XCI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgICAgaGVpZ2h0OiA4LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIG5leHRCdXR0b249e1xuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcCgxKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVJbmRleCA9PT0gbWF4SW5kZXh9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCBzbGlkZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgfVxuICAgICAgICBiYWNrQnV0dG9uPXtcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXAoLTEpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZUluZGV4ID09PSAwfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHNsaWRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dCYWNrSW9zTmV3Um91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuY29uc3QgTXlTdG9yeVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcbiAgY29uc3QgaGVyb0ltYWdlID0gZ2FsbGVyeVswXT8uaW1hZ2U7XG5cbiAgY29uc3Qgc3RydWN0dXJlZERhdGEgPSB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgIFwiQHR5cGVcIjogXCJQcm9maWxlUGFnZVwiLFxuICAgIG5hbWU6IFwiTWFzaWggU2Fkcmkg4oCUIE15IFN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IHN0b3J5SGVyby5kZXNjcmlwdGlvbixcbiAgICB1cmw6IGAke3NpdGVVcmx9L215LXN0b3J5YCxcbiAgICBpbWFnZTogaGVyb0ltYWdlLFxuICAgIHByaW1hcnlUb3BpYzoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgbmFtZTogXCJNYXNpaCBTYWRyaVwiLFxuICAgICAgam9iVGl0bGU6IFwiU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIixcbiAgICAgIHNhbWVBczogW1xuICAgICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL0BtYXNpaFwiLFxuICAgICAgICBcImh0dHBzOi8vbWFzaWguZnJhbWVyLndlYnNpdGUvXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlb1xuICAgICAgICB0aXRsZT1cIk15IFN0b3J5IOKAlCBNYXNpaCBTYWRyaeKAmXMgcGF0aCBhcyBhIHByb2R1Y3QgZGVzaWduZXJcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkxlYXJuIGhvdyBNYXNpaCBTYWRyaSBibGVuZHMgbWVudG9yc2hpcCwgZXhwZXJpbWVudGF0aW9uLCBhbmQgY3JhZnQgdG8gZGVzaWduIGh1bWFuIGV4cGVyaWVuY2Vz4oCUZnJvbSBjbGFzc3Jvb20gdG8gcHJvZHVjdCBsYXVuY2hlcy5cIlxuICAgICAgICBjYW5vbmljYWxQYXRoPVwiL215LXN0b3J5XCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdHlwZTogXCJwcm9maWxlXCIsXG4gICAgICAgICAgaW1hZ2U6IGhlcm9JbWFnZVxuICAgICAgICAgICAgPyB7IHVybDogaGVyb0ltYWdlLCBhbHQ6IFwiTWFzaWggU2FkcmkgZG9jdW1lbnRpbmcgcGVyc29uYWwgam91cm5leVwiIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB9fVxuICAgICAgICBzdHJ1Y3R1cmVkRGF0YT17c3RydWN0dXJlZERhdGF9XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC42KVwiIDogXCJyZ2JhKDgsIDE0LCAyNiwgMC44NSlcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtYXhXaWR0aDogODQwLFxuICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJsZWZ0XCIsIG1kOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJkaXNwbGF5XCI+e3N0b3J5SGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge3N0b3J5SGVyby5zdWJ0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS43IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdG9yeUhlcm8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwdDogeyB4czogMiwgbWQ6IDQgfSxcbiAgICAgICAgICBwYjogeyB4czogOCwgbWQ6IDEyIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0gc3g9e3sgbWF4V2lkdGg6IDcyMCB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgUGhvdG8gU3RyaXBcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkxheWVycyBvZiB0aGUgZXZlcnlkYXk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEEgZ2xpbXBzZSBpbnRvIHRoZSB0ZXh0dXJlcywgcGVvcGxlLCBhbmQgc2NlbmVzIHRoYXQgc2hhcGUgaG93IEkgYXBwcm9hY2ggcHJvZHVjdFxuICAgICAgICAgICAgICBkZXNpZ27igJR1bmZpbHRlcmVkLCBhIGxpdHRsZSBpbXBlcmZlY3QsIGFuZCB2ZXJ5IGFsaXZlLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyIGRpc2FibGVHdXR0ZXJzIG1heFdpZHRoPXtmYWxzZX0gc3g9e3sgbXQ6IHsgeHM6IDQsIG1kOiA2IH0gfX0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcHg6IHsgeHM6IDIsIHNtOiA0LCBtZDogNiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgY29sdW1uQ291bnQ6IHsgeHM6IDIsIHNtOiAzLCBtZDogNSB9LFxuICAgICAgICAgICAgICAgIGNvbHVtbkdhcDogeyB4czogMS41LCBtZDogMi41IH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnYWxsZXJ5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS5jYXB0aW9ufS0ke2l0ZW0uaW1hZ2V9YH1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrSW5zaWRlOiBcImF2b2lkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1iOiB7IHhzOiAxLjUsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNiwgbWQ6IDggfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGhpbG9zb3BoeVRleHR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGAzcHggc29saWQgJHt0aGVtZS50b2tlbnMuY29sb3JzLnByaW1hcnl9YCxcbiAgICAgICAgICAgICAgICAgICAgcGw6IDIsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgICAgSSBhbSBkcml2ZW4gYnkgZXhwZXJpZW5jZXPigJRkZXNpZ25pbmcgdGhlbSwgbGVhcm5pbmcgZnJvbSB0aGVtLCBhbmQgbGl2aW5nIHRoZW1cbiAgICAgICAgICAgICAgICAgICAgZGVlcGx5LlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICBNeSBmcmllbmRzIG9mdGVuIGRlc2NyaWJlIG1lIGFzIHNvbWVvbmUgd2l0aCBsYXllcnPigJRjdXJpb3NpdHkga2VlcHMgbWUgZXhwbG9yaW5nXG4gICAgICAgICAgICAgICAgICBuZXcgY3JhZnRzLCBjb21tdW5pdGllcywgYW5kIGNoYWxsZW5nZXMuIEl04oCZcyBob3cgSSBzdGF5IGdyb3VuZGVkIGFuZCBpbnNwaXJlZC5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezMuNX1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBtZDogNCB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC43KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC43KVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlc2Ugc21hbGwgcml0dWFscyBzaGFwZSB0aGUgd2F5IEkgZGVzaWduIGFuZCBjb2xsYWJvcmF0ZTpcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICBGcm9tIG11c2ljIGFuZCBjZXJhbWljcyB0byBwbGFudHMsIGNvb2tpbmcsIGFuZCBjb2xsYWJvcmF0aXZlIGdhbWVz4oCUSeKAmW0gbW9zdFxuICAgICAgICAgICAgICAgICAgICBhbGl2ZSB3aGVuIEnigJltIGJ1aWxkaW5nIHdpdGggb3RoZXJzLlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICB1c2VGbGV4R2FwXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyB4czogXCJmbGV4LXN0YXJ0XCIsIG1kOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlbW9qaUxpc3QubWFwKChlbW9qaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZW1vaml9XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiA1Niwgc206IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleEJhc2lzOiB7IHhzOiBcImF1dG9cIiwgbWQ6IFwiMzAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2Vtb2ppfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWFkaW5nIEpvdXJuZXlcIlxuICAgICAgICAgICAgICB0aXRsZT17cmVhZGluZ0pvdXJuZXkudGl0bGV9XG4gICAgICAgICAgICAgIHN1YnRpdGxlPXtyZWFkaW5nSm91cm5leS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIgfX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtib29rLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Ym9vay5jb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQ292ZXIgb2YgJHtib29rLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC43NX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2Jvb2sudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suc3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXswLjc1fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2sudGFrZWF3YXlzLm1hcCgodGFrZWF3YXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWtlYXdheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWtlYXdheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suaGlnaGxpZ2h0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Jvb2suaGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjEyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg5OCwgMTMyLCAyMTgsIDAuMjIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYnJhbmQuc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgZGlzYWJsZUd1dHRlcnMgbWF4V2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogeyBtZDogXCIxLjE1ZnIgMC44NWZyXCIgfSxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAzNjAsIHNtOiA0MjAsIG1kOiA1MjAgfSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXt0ZWFtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17dGVhbS5hbHR9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogeyB4czogMTYsIG1kOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgbGVmdDogeyB4czogMTYsIG1kOiAzMiB9LFxuICAgICAgICAgICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgICAgICAgICBweTogMC43NSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudG9rZW5zLnJhZGl1cy5waWxsLFxuICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMnB4KVwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcyKVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVhbS5jYXB0aW9ufVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBweDogeyB4czogMywgc206IDYsIG1kOiA4IH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDUsIG1kOiAwIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fSBzeD17eyBtYXhXaWR0aDogNTIwIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIENvbGxhYm9yYXRvcnNcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RlYW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjggfX0+XG4gICAgICAgICAgICAgICAgICB7dGVhbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuc2Vjb25kYXJ5fWAsXG4gICAgICAgICAgICAgICAgICAgIHBsOiAzLFxuICAgICAgICAgICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICAgIOKAnERlc2lnbmluZyB3aXRoIHBlb3BsZSBJIHRydXN0IGtlZXBzIHRoZSB3b3JrIGh1bWJsZSwgYW1iaXRpb3VzLCBhbmQgam95ZnVsLuKAnVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiIHN4PXt7IHB5OiB7IHhzOiA4LCBtZDogMTAgfSB9fT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgICBleWVicm93PVwiRWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJBY2FkZW1pYyBGb3VuZGF0aW9uc1wiXG4gICAgICAgICAgICAgIGljb249ezxTY2hvb2xSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtlZHVjYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICA8U3VyZmFjZUNhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9e2l0ZW0uYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pbnN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXswLjc1fSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJzZWN0aW9uXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogeyB4czogOCwgbWQ6IDEwIH0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIkNvbnRpbnVvdXMgTGVhcm5pbmdcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkNlcnRpZmljYXRlcyAmIFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgaWNvbj17PEVtb2ppRXZlbnRzUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZXMubWFwKChjZXJ0aWZpY2F0ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e2NlcnRpZmljYXRlLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17Y2VydGlmaWNhdGUuYmFkZ2V9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2NlcnRpZmljYXRlLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0ZS5pbnN0aXR1dGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge1tjZXJ0aWZpY2F0ZS5ob3VycywgY2VydGlmaWNhdGUuc2NvcmUsIGNlcnRpZmljYXRlLnRvcGljc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2RldGFpbH0gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgIGV5ZWJyb3c9XCJSZWZlcmVuY2VzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJXaGF0IE15IFBhcnRuZXJzIFNheVwiXG4gICAgICAgICAgICAgIGljb249ezxWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz59XG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICB7cmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e3JlZmVyZW5jZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAyLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntyZWZlcmVuY2UubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2UudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPEdob3N0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlZmVyZW5jZS5saW5rZWRpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtdDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgNzYsIDE3MCwgMC4yMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTIyLCAxNjIsIDI1NSwgMC4zNSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgxNywgNzYsIDE3MCwgMC40MilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjU1KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDMxLCAxMTEsIDIzNSwgMC4wOClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjE2KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9uIExpbmtlZEluXG4gICAgICAgICAgICAgICAgICAgICAgPC9HaG9zdEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlTdG9yeVBhZ2U7XG5cblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9teVN0b3J5LnRzXG4vLyBQdXJwb3NlOiBTdG9yZXMgbmFycmF0aXZlLCBnYWxsZXJ5LCByZWFkaW5nIGxpc3QsIGFuZCBjcmVkZW50aWFsIGRhdGEgdXNlZCBhY3Jvc3MgdGhlIE15IFN0b3J5IHBhZ2UuXG5pbXBvcnQgY3JlYXRpdmVDb25maWRlbmNlQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jvb2tzL2NyZWF0aXZlLWNvbmZpZGVuY2UuanBnXCI7XG5pbXBvcnQgZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9ib29rcy9kZXNpZ24tb2YtZXZlcnlkYXktdGhpbmdzLmpwZ1wiO1xuaW1wb3J0IHNwcmludENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9ib29rcy9zcHJpbnQuanBnXCI7XG5pbXBvcnQgZGl2YXJUZWFtUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2RpdmFyLXRlYW0uanBnXCI7XG5pbXBvcnQgbWFzaWhDaGlsZFBob3RvQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1jaGlsZC1waG90by5wbmdcIjtcbmltcG9ydCBtYXNpaENvZmZlZUFydGlzdEFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtY29mZmVlLWFydGlzdC5wbmdcIjtcbmltcG9ydCBtYXNpaE1vdW50YWluZWVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1tb3VudGFpbmVlci5wbmdcIjtcbmltcG9ydCBtYXNpaFV4RGVzaWduZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLXV4LWRlc2lnbmVyLnBuZ1wiO1xuaW1wb3J0IGFpQW5kVXhDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvYm9va3MvYWktYW5kLXV4LmpwZ1wiO1xuaW1wb3J0IG1hc2loV29vZENhcnZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtd29vZC1jYXJ2ZXIucG5nXCI7XG5cbmNvbnN0IHJlc29sdmVBc3NldCA9IChhc3NldDogc3RyaW5nKSA9PiBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWY7XG50eXBlIFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgR2FsbGVyeUl0ZW0gPSB7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICBjYXB0aW9uOiBzdHJpbmc7XG4gIHN1YmNhcHRpb24/OiBzdHJpbmc7XG59O1xuXG50eXBlIFJlYWRpbmdKb3VybmV5ID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBCb29rID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgc3VtbWFyeTogc3RyaW5nO1xuICB0YWtlYXdheXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBoaWdobGlnaHQ/OiBzdHJpbmc7XG59O1xuXG50eXBlIFRlYW1TbmFwc2hvdCA9IHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbnR5cGUgRWR1Y2F0aW9uSXRlbSA9IHtcbiAgYmFkZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpbnN0aXR1dGlvbjogc3RyaW5nO1xuICBkZXRhaWxzPzogcmVhZG9ubHkgc3RyaW5nW107XG59O1xuXG50eXBlIENlcnRpZmljYXRlSXRlbSA9IHtcbiAgYmFkZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpbnN0aXR1dGlvbj86IHN0cmluZztcbiAgaG91cnM/OiBzdHJpbmc7XG4gIHRvcGljcz86IHN0cmluZztcbiAgc2NvcmU/OiBzdHJpbmc7XG59O1xuXG50eXBlIFJlZmVyZW5jZUl0ZW0gPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgbGlua2VkaW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9yeUhlcm86IFN0b3J5SGVybyA9IHtcbiAgdGl0bGU6IFwiSSBhbSBNYXNpaFwiLFxuICBzdWJ0aXRsZTogXCJBIENyZWF0b3Igb2YgTWVhbmluZ2Z1bCBFeHBlcmllbmNlc1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIk91dHNpZGUgb2YgZGVzaWduLCBJIGVuam95IGV4cGxvcmluZyBjaGFsbGVuZ2VzIGFuZCBsZWFybmluZyB0aHJvdWdoIGV4cGVyaWVuY2VzIGxpa2UgbW91bnRhaW5lZXJpbmcsIHdvb2QgY2FydmluZywgYW5kIHRlYWNoaW5nLiBUaGVzZSBwdXJzdWl0cyBoYXZlIHRhdWdodCBtZSBwYXRpZW5jZSwgcmVzaWxpZW5jZSwgYW5kIGVtcGF0aHksIHdoaWNoIEkgYnJpbmcgaW50byBteSB3b3JrIHRvIGNyYWZ0IG1lYW5pbmdmdWwgYW5kIHRob3VnaHRmdWwgZGVzaWducy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5ID0gW1xuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaENoaWxkUGhvdG9Bc3NldCksXG4gICAgYWx0OiBcIk1hc2loIGFzIGEgY2hpbGQgaW4gaGlzIGRhZCdzIGphY2tldFwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBDaGlsZCBpbiBNeSBEYWQncyBKYWNrZXRcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhNb3VudGFpbmVlckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSBtb3VudGFpbmVlclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBNb3VudGFpbmVlclwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaENvZmZlZUFydGlzdEFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWgncyBsYXR0ZSBhcnRcIixcbiAgICBjYXB0aW9uOiBcIk15IGFydCBvbiBhIExhdHRlXCIsXG4gICAgc3ViY2FwdGlvbjogXCJMYXR0ZSBBcnQgYnkgbWUgOilcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhVeERlc2lnbmVyQXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBhcyBhIFVYIERlc2lnbmVyXCIsXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIFVYIERlc2lnbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loV29vZENhcnZlckFzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSB3b29kIGNhcnZlclwiLFxuICAgIGNhcHRpb246IFwiTWUgYXMgYSBXb29kIENhcnZlclwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxHYWxsZXJ5SXRlbT47XG5cbmV4cG9ydCBjb25zdCBwaGlsb3NvcGh5VGV4dCA9XG4gIFwiSSBkZXNpZ24gZXhwZXJpZW5jZXMgdGhhdCBub3Qgb25seSBzb2x2ZSBwcm9ibGVtcyBidXQgY3JlYXRlIHZhbHVlIGZvciBib3RoIGJ1c2luZXNzZXMgYW5kIHVzZXJzLiBJIGVuam95IGRpZ2dpbmcgZGVlcCBpbnRvIGNoYWxsZW5nZXMsIGFuYWx5emluZyB0aGVtIHRob3JvdWdobHksIGFuZCBjb21pbmcgdXAgd2l0aCBzb2x1dGlvbnMgdGhhdCB0cnVseSBtYWtlIGEgZGlmZmVyZW5jZS5cIjtcblxuZXhwb3J0IGNvbnN0IGVtb2ppTGlzdDogcmVhZG9ubHkgc3RyaW5nW10gPSBbXCLimJXvuI9cIiwgXCLwn6eX8J+PvVwiLCBcIvCfkrtcIiwgXCLwn5OaXCJdO1xuXG5leHBvcnQgY29uc3QgcmVhZGluZ0pvdXJuZXk6IFJlYWRpbmdKb3VybmV5ID0ge1xuICB0aXRsZTogXCJEZXNpZ24gQm9va3MgR3VpZGluZyBNeSBDcmFmdFwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIkluc3BpcmVkIGJ5IHRoZSBsaXZpbmcgYm9va3NoZWx2ZXMgc2hhcmVkIGJ5IHBlZXJzIGxpa2UgS3lsZSBKb2huc3RvbiwgU2F3eWVyIEhvbGxlbnNoZWFkLCBKYXNvbiBab29rLCBhbmQgQW15IE1jTGF5IFBhdGVyc29uLCBJIGtlZXAgYSBjdXJhdGVkIHJlY29yZCBvZiB0aGUgaWRlYXMgdGhhdCBzaGFwZSBteSBwcmFjdGljZS5cIixcbiAgY3VycmVudGx5UmVhZGluZzoge1xuICAgIGxhYmVsOiBcIkN1cnJlbnRseSByZWFkaW5nXCIsXG4gICAgdGl0bGU6IFwiQUkgYW5kIFVYOiBXaHkgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgTmVlZHMgVXNlciBFeHBlcmllbmNlXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYm9va3MgPSBbXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KGRlc2lnbk9mRXZlcnlkYXlUaGluZ3NDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJUaGUgRGVzaWduIG9mIEV2ZXJ5ZGF5IFRoaW5nc1wiLFxuICAgIGF1dGhvcjogXCJEb24gTm9ybWFuXCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDE4IMK3IFJldmlzaXRlZCAyMDI0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiTm9ybWFu4oCZcyBmcmFtZXdvcmsgZm9yIGFmZm9yZGFuY2VzIGFuZCBmZWVkYmFjayBoZWxwZWQgbWUgYnVpbGQgcmVzaWxpZW5jZSBhZ2FpbnN0IGJpYXMgd2hlbiB0ZXN0aW5nIHNhZmV0eS1jcml0aWNhbCBmbG93cywgZXNwZWNpYWxseSB3aGVuIHdlIHJlZGVzaWduZWQgdm9pY2UgbWFza2luZyBmb3IgRGl2YXIuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIlJlaW5mb3JjZWQgbXkgaGFiaXQgb2YgcHJvdG90eXBpbmcgZXJyb3Igc3RhdGVzIGZpcnN0LlwiLFxuICAgICAgXCJJbmZsdWVuY2VkIG15IGhldXJpc3RpY3MgY2hlY2tsaXN0IGZvciBhY2Nlc3NpYmlsaXR5IHJldmlld3MuXCIsXG4gICAgICBcIlRhdWdodCBtZSB0byBuYXJyYXRlIOKAnHVzZXIgZ29hbHPigJ0gaW4gZXZlcnkgZGVzaWduIGNyaXRpcXVlLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KHNwcmludENvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIlNwcmludFwiLFxuICAgIGF1dGhvcjogXCJKYWtlIEtuYXBwICYgdGhlIEdWIERlc2lnbiBUZWFtXCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDIwXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQm9ycm93aW5nIHRoZSBzcHJpbnQgcmh5dGhtIGhlbHBlZCBtZSBjb2FjaCBwcm9kdWN0IHNxdWFkcyB0b3dhcmQgZGVjaXNpb24gY2xhcml0eS4gV2UgcHJvdG90eXBlZCBhbmQgbGF1bmNoZWQgYSBsb3lhbHR5IHByb2dyYW0gYXQgU2V0YXJlIEF2YWwgdXNpbmcgYSA0LWRheSB2YXJpYXRpb24gb2YgdGhpcyBwbGF5Ym9vay5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiQWRvcHRlZCBsaWdodG5pbmcgdGFsa3MgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIGZhc3QuXCIsXG4gICAgICBcIk1hZGUg4oCcSG93IG1pZ2h0IHdl4oCdIHN5bnRoZXNpcyBhIHN0YXBsZSBpbiBteSB3b3Jrc2hvcHMuXCIsXG4gICAgICBcIkltcHJvdmVkIHJlbW90ZSBmYWNpbGl0YXRpb24gdXNpbmcgc3RydWN0dXJlZCB2b3Rpbmcgcml0dWFscy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHJlc29sdmVBc3NldChjcmVhdGl2ZUNvbmZpZGVuY2VDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJDcmVhdGl2ZSBDb25maWRlbmNlXCIsXG4gICAgYXV0aG9yOiBcIlRvbSAmIERhdmlkIEtlbGxleVwiLFxuICAgIGxhYmVsOiBcIlJlYWQgaW4gMjAyMVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlRoaXMgYm9vayByZWZyYW1lZCBob3cgSSBtZW50b3IgbmV3IGRlc2lnbmVyc+KAlHNoaWZ0aW5nIGNyaXRpcXVlcyBmcm9tIHNvbHV0aW9uIGp1ZGdtZW50IHRvIGNhcGFiaWxpdHkgYnVpbGRpbmcgYW5kIHBzeWNob2xvZ2ljYWwgc2FmZXR5LlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJJbnRyb2R1Y2VkIOKAnGNvbmZpZGVuY2UgbWFwcGluZ+KAnSBpbiBteSBtZW50b3JzaGlwIHNlc3Npb25zLlwiLFxuICAgICAgXCJEcm92ZSBtZSB0byBkZXNpZ24gcHJvamVjdC1iYXNlZCBjdXJyaWN1bGEgYXQgUmFobmVtYSBDb2xsZWdlLlwiLFxuICAgICAgXCJFbmNvdXJhZ2VkIHN0b3J5dGVsbGluZyByaXR1YWxzIHRvIGNlbGVicmF0ZSBpbmNyZW1lbnRhbCB3aW5zLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KGFpQW5kVXhDb3ZlckFzc2V0KSxcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgICBhdXRob3I6IFwiUGFtZWxhIFBhdmxpc2Nha1wiLFxuICAgIGxhYmVsOiBcIkluIHByb2dyZXNzIMK3IFE0IDIwMjVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJ4oCZbSBleHBsb3JpbmcgaG93IGh1bWFuLWNlbnRlcmVkIG1ldGhvZHMgZXZvbHZlIHdoZW4gbW9kZWxzIG1ha2UgcHJvYmFiaWxpc3RpYyBkZWNpc2lvbnPigJRpbmZvcm1pbmcgdGhlIGd1YXJkcmFpbHMgSSBjcmFmdCBmb3IgQUktYXVnbWVudGVkIHNvbHV0aW9ucy5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiQnVpbGRpbmcgYW4gZXRoaWNhbCBjaGVja2xpc3QgZm9yIEFJIGV4cGVyaW1lbnRzLlwiLFxuICAgICAgXCJQYWlyaW5nIHF1YWxpdGF0aXZlIGludGVydmlld3Mgd2l0aCBtb2RlbCBtZXRyaWNzLlwiLFxuICAgICAgXCJEb2N1bWVudGluZyBwcm9tcHQgZGVzaWduIHBhdHRlcm5zIGZvciBteSB0ZWFtLlwiLFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0OiBcIk5vdyBSZWFkaW5nXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PEJvb2s+O1xuXG5leHBvcnQgY29uc3QgdGVhbTogVGVhbVNuYXBzaG90ID0ge1xuICBpbWFnZTogcmVzb2x2ZUFzc2V0KGRpdmFyVGVhbVBob3RvQXNzZXQpLFxuICBhbHQ6IFwiTWFzaWggU2Fkcmkgd2l0aCB0aGUgRGl2YXIgcHJvZHVjdCB0ZWFtXCIsXG4gIGNhcHRpb246XG4gICAgXCJEaXZhciBQcm9kdWN0IEV4cGVyaWVuY2UgVGVhbSDigJQgY29sbGFib3JhdGluZyBhY3Jvc3MgcmVzZWFyY2gsIHByb2R1Y3QgZGVzaWduLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gIHRpdGxlOiBcIk15IERpdmFyIFByb2R1Y3QgVGVhbVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIlRoZXNlIGFyZSB0aGUgdGFsZW50ZWQgY29sbGVhZ3VlcyBJJ20gcHJvdWQgdG8gY29sbGFib3JhdGUgd2l0aCBhdCBEaXZhci4gVG9nZXRoZXIsIG91ciAzMi1wZXJzb24gcHJvZHVjdCBvcmdhbml6YXRpb24gYmxlbmRzIGRlc2lnbiwgcmVzZWFyY2gsIHByb2R1Y3QsIGFuZCBlbmdpbmVlcmluZyB0byBzaGlwIGV4cGVyaWVuY2VzIHRoYXQgcHJvdGVjdCBhbmQgZW1wb3dlciBtaWxsaW9ucyBvZiB1c2Vycy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBlZHVjYXRpb24gPSBbXG4gIHtcbiAgICBiYWRnZTogXCJEZWdyZWVcIixcbiAgICBkYXRlOiBcIjIwMTUg4oCTIDIwMThcIixcbiAgICB0aXRsZTogXCJCU2MgaW4gUHJvamVjdCBNYW5hZ2VtZW50IEVuZ2luZWVyaW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUGF5YW1lIE5vb3IgVW5pdmVyc2l0eVwiLFxuICAgIGRldGFpbHM6IFtcbiAgICAgIFwiVGVhY2hpbmcgQXNzaXN0YW50LCBhcHBvaW50ZWQgYnkgRHIuIEUuIFJhamFiaSwgSGVhZCBvZiB0aGUgU2NpZW5jZSBDb21taXR0ZWVcIixcbiAgICAgIFwiQWN0aXZlIE1lbWJlciBvZiB0aGUgQ2l2aWwgRW5naW5lZXJpbmcgYW5kIFByb2plY3QgTWFuYWdlbWVudCBTY2llbnRpZmljIFNvY2lldHlcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQXNzb2NpYXRlXCIsXG4gICAgZGF0ZTogXCIyMDE0XCIsXG4gICAgdGl0bGU6IFwiQXNzb2NpYXRlIGluIE1lY2hhbmljYWwgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJCdS1BbGkgU2luYSBVbml2ZXJzaXR5XCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJEaXBsb21hXCIsXG4gICAgZGF0ZTogXCIyMDA5XCIsXG4gICAgdGl0bGU6IFwiRGlwbG9tYSBpbiBNYXRoZW1hdGljcyBhbmQgUGh5c2ljc1wiLFxuICAgIGluc3RpdHV0aW9uOlxuICAgICAgXCJOYXRpb25hbCBPcmdhbml6YXRpb24gZm9yIERldmVsb3BtZW50IG9mIEV4Y2VwdGlvbmFsIFRhbGVudHMgKFNhbXBhZClcIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8RWR1Y2F0aW9uSXRlbT47XG5cbmV4cG9ydCBjb25zdCBjZXJ0aWZpY2F0ZXMgPSBbXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI1XCIsXG4gICAgdGl0bGU6IFwiRGF0YSBBbmFseXNpcyBCb290Q2FtcFwiLFxuICAgIGluc3RpdHV0aW9uOiBcIlJhaG5lbWEgQ29sbGVnZVwiLFxuICAgIGhvdXJzOiBcIjE3MGhcIixcbiAgICB0b3BpY3M6XG4gICAgICBcIkRhdGEgUHJlcHJvY2Vzc2luZywgQnVzaW5lc3MgTWV0cmljcywgQkkgVG9vbHMsIEludHJvZHVjdG9yeSBQeXRob24sIFN0b3J5dGVsbGluZyB3aXRoIERhdGEsIFN0YXRpc3RpY2FsIEluZmVyZW5jZSwgQS9CIFRlc3RpbmdcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkxhbmd1YWdlXCIsXG4gICAgZGF0ZTogXCJNYXkgMjAyMlwiLFxuICAgIHRpdGxlOiBcIklFTFRTIChBY2FkZW1pYylcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJbnRlcm5hdGlvbmFsIERldmVsb3BtZW50IFByb2dyYW0gKElEUClcIixcbiAgICBzY29yZTogXCJPdmVyYWxsIFNjb3JlOiA3LjBcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjFcIixcbiAgICB0aXRsZTogXCJDb25kdWN0aW5nIFVzYWJpbGl0eSBUZXN0aW5nXCIsXG4gICAgaW5zdGl0dXRpb246IFwiVGhlIEludGVyYWN0aW9uIERlc2lnbiBGb3VuZGF0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMjFcIixcbiAgICB0aXRsZTogXCJDb21wbGV0ZSBGaWdtYSBNZWdhY291cnNlXCIsXG4gICAgaW5zdGl0dXRpb246IFwiT25saW5lIENvdXJzZSAtIFVkZW15XCIsXG4gICAgaG91cnM6IFwiNDJoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJCb290Q2FtcFwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiVUkvVVggRGVzaWduIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTUwaFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIk1heSAyMDE5XCIsXG4gICAgdGl0bGU6IFwiUHJvZHVjdCBhbmQgQWR2YW5jZWQgVVggRGVzaWduXCIsXG4gICAgaW5zdGl0dXRpb246IFwiU2hhcmlmIFVuaXZlcnNpdHkgb2YgVGVjaG5vbG9neSAmIFVuaXZlcnNpdHkgb2YgVGVocmFuXCIsXG4gICAgaG91cnM6IFwiOThoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgIHRpdGxlOiBcIkNhdGlhIENlcnRpZmljYXRlIOKAkyBQcm9mZXNzaW9uYWwgM0QgTW9kZWxpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJJcmFuIENhdGlhIENvbW11bml0eVwiLFxuICAgIHNjb3JlOiBcIkdyYWRlOiAxMDAgb3V0IG9mIDEwMFwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxDZXJ0aWZpY2F0ZUl0ZW0+O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiU2FlZWQgQWJvbGdoYXNlbWlcIixcbiAgICByb2xlOiBcIlByb2R1Y3QgRGVzaWduIExlYWQgYXQgU25hcHBGb29kXCIsXG4gICAgZGF0ZTogXCJKdWx5IDMwLCAyMDIxIOKAoiBSZXBvcnRlZCBkaXJlY3RseSB0byBNYXNpaFwiLFxuICAgIHRleHQ6IFwiSSBoYWQgdGhlIHByaXZpbGVnZSBvZiB3b3JraW5nIGNsb3NlbHkgd2l0aCBNYXNpaCBmb3IgYSB5ZWFyLiBTdGFydGluZyBteSBwcm9mZXNzaW9uYWwgam91cm5leSB3aXRoIGhpbSB3YXMgdHJ1bHkgZm9ydHVuYXRlOyBoZSdzIG5vdCBvbmx5IGVtcGF0aGV0aWMgdG93YXJkcyBjb2xsZWFndWVzIGJ1dCBhbHNvIGFkZXB0IGF0IHByaW9yaXRpemluZyB0YXNrcyBiYXNlZCBvbiBpbmRpdmlkdWFsIHN0cmVuZ3RocyBhbmQgYXNzaWduaW5nIHRoZW0gYWNjb3JkaW5nbHkuIE1hc2loIHBsYWNlcyBzaWduaWZpY2FudCBlbXBoYXNpcyBvbiBwZXJzb25hbCBncm93dGgsIG9mZmVyaW5nIHByYWN0aWNhbCByZXNvdXJjZXMgdGFpbG9yZWQgdG8gdGVhbSBtZW1iZXJzJyBjb21wZXRlbmNpZXMuIFdvcmtpbmcgYWxvbmdzaWRlIGhpbSB3YXMgYm90aCBlbmpveWFibGUgYW5kIGVucmljaGluZy5cIixcbiAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FlZWQtYWJvbGdoYXNlbWkvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFsaSBBemFkZWhcIixcbiAgICByb2xlOiBcIlNvZnR3YXJlIEVuZ2luZWVyIGF0IFVzZXJUZXN0aW5nXCIsXG4gICAgZGF0ZTogXCJKdWx5IDMxLCAyMDIxIOKAoiBNYXNpaCdzIHRlYWNoZXJcIixcbiAgICB0ZXh0OiBcIk1hc2loIGlzIG9uZSBvZiBteSBwcml2aWxlZ2VkIHN0dWRlbnRzIHdobyBpcyBkZXRlcm1pbmVkIHRvIGltcHJvdmUgaGlzIGtub3dsZWRnZSBhbmQgc2tpbGxzLiBIaXMgY29tbWl0bWVudCBhbmQgcHVuY3R1YWxpdHkgaW4gZGVsaXZlcmluZyBhc3NpZ25tZW50cyBhcmUgY29tbWVuZGFibGUuIEluIG15IG9waW5pb24sIGhpcyBpbnRlcmVzdCBpbiBsZWFybmluZyBoYXMgYmVlbiBvbmUgb2YgdGhlIGtleSByZWFzb25zIGZvciBoaXMgc3VjY2Vzcy5cIixcbiAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxpLWF6YWRlaC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG9zc2VpbiBNYWhtb3VkdmFuZFwiLFxuICAgIHJvbGU6IFwiRGVzaWduIExlYWQgYXQgU2V0YXJlIEF2YWwgKE1DSSlcIixcbiAgICBkYXRlOiBcIk1hcmNoIDEwLCAyMDIxIOKAoiBIb3NzZWluIG1hbmFnZWQgTWFzaWggZGlyZWN0bHlcIixcbiAgICB0ZXh0OiBcIkkgaGF2ZSBrbm93biBNYXNpaCBzaW5jZSAyMDE4LCBhbmQgZnJvbSB0aGUgYmVnaW5uaW5nLCBoaXMgcG90ZW50aWFsIHRhbGVudCB3YXMgZXZpZGVudCwgbWFya2luZyB0aGUgc3RhcnQgb2Ygb3VyIGNvbGxhYm9yYXRpdmUgam91cm5leS4gRm9yIGNvbnNpc3RlbnQsIHRvcC1xdWFsaXR5IGRlc2lnbiwgeW91IG9ubHkgbmVlZCB0byBnaXZlIE1hc2loIHRoZSByYXcgZGF0YSBhbmQgYW55IHVuY2VydGFpbnRpZXMuIFdoaWxlIHdvcmtpbmcgdG9nZXRoZXIgb24gdGhlIHByb2R1Y3QgdGVhbSBhdCBTZXRhcmUgQXZhbCBDb21wYW55LCBoaXMgZXhwZXJ0aXNlIHdhcyBjcnVjaWFsIGluIHByb2JsZW0gZGVmaW5pdGlvbiwgc29sdXRpb24gZmluZGluZywgYW5kIGRlc2lnbmluZyBmbG93cy4gVGhlIG91dGNvbWVzIG9mIGhpcyBwcm9mZXNzaW9uYWwgYW5kIG1ldGljdWxvdXNseSBjcmFmdGVkIGRlc2lnbnMgaGF2ZSBhbHdheXMgYmVlbiBvdXRzdGFuZGluZy4gSGUgaXMgYSBjb25zdW1tYXRlIHByb2Zlc3Npb25hbCwgYW5kIEkgaGlnaGx5IHJlY29tbWVuZCBoaW0uXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hvc3NlaW5tYWhtb3VkdmFuZC9cIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8UmVmZXJlbmNlSXRlbT47XG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSEE7QUFJQSxJQUFlLDJEQUEyQix1QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxvQkFBb0I7OztBQ0h4QjtBQUhBO0FBSUEsSUFBZSxzREFBMkIsd0JBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsZUFBZTs7O0FDZW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSxJQUFNLGVBQWUsQ0FBQyxV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LDRDQVBBLHVCQUEyQyxvQkFBM0M7QUFBQSw4QkFBWSxTQUFRO0FBQUEsOEJBQXBCLFVBQTBCLFVBQVU7QUFBQSwrQkFBcEMsaUNBQTJDO0FBQUEsNENBQzNDLHVCQUVFLG9CQUZGO0FBQUEsOEJBQVksU0FBUTtBQUFBLDhCQUFZLE9BQU07QUFBQSw4QkFBdEMsVUFDRyxVQUFVO0FBQUEsK0JBRGIsaUNBRUU7QUFBQSw0Q0FDRix1QkFFRSxvQkFGRjtBQUFBLDhCQUFZLFNBQVE7QUFBQSw4QkFBVSxPQUFNO0FBQUEsOEJBQXBDLFVBQ0csVUFBVTtBQUFBLCtCQURiLGlDQUVFO0FBQUE7QUFBQSwyQkFQSixnQ0FRRTtBQUFBLHdDQUNGLHVCQUVFLG9CQUZGO0FBQUEsMEJBQVksU0FBUTtBQUFBLDBCQUFRLE9BQU07QUFBQSwwQkFBaUIsSUFBSSxFQUFFLFlBQVksSUFBSTtBQUFBLDBCQUF6RSxVQUNHLFVBQVU7QUFBQSwyQkFEYixpQ0FFRTtBQUFBLHdDQUNGLHVCQThCRSxxQkE5QkY7QUFBQSwwQkFDRSxXQUFVO0FBQUEsMEJBQ1YsTUFBTSxVQUFVO0FBQUEsMEJBQ2hCLFFBQU87QUFBQSwwQkFDUCxLQUFJO0FBQUEsMEJBQ0osU0FBUTtBQUFBLDBCQUNSLElBQUk7QUFBQSw0QkFDRixJQUFJO0FBQUEsNEJBQ0osV0FBVztBQUFBLDRCQUNYLGFBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNEJBQ0E7QUFBQSw0QkFDTixPQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLE1BQU0sUUFBUSxNQUFNLFlBQ3BCO0FBQUEsNEJBQ04sV0FBVztBQUFBLDhCQUNULGFBQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsNEJBQ0E7QUFBQSw4QkFDTixpQkFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw2QkFDQTtBQUFBLDRCQUNSO0FBQUEsMEJBQ0Y7QUFBQSwwQkEzQkY7QUFBQSw0REE4QkU7QUFBQTtBQUFBLHVCQTdDSixnQ0E4Q0U7QUFBQSxxQkEvQ0osaUNBZ0RFO0FBQUEsbUJBakRnQyxVQUFVLE1BQTlDLHNCQWtERSxDQUNIO0FBQUEsaUJBckRILGlDQXNERTtBQUFBO0FBQUEsYUE3REosZ0NBOERFO0FBQUEsV0EvREosaUNBZ0VFO0FBQUEsU0FqRUosaUNBa0VFO0FBQUE7QUFBQSxLQW5oQkosZ0NBb2hCRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjhBRUEwNTkwRjY5MjIzRUU2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
