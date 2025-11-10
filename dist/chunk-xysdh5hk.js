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
  const siteUrl = typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL || "https://mrsadri.github.io/Portfolio";
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

//# debugId=AA114C7E6CBC73B464756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Vtb2ppRXZlbnRzUm91bmRlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2Nob29sUm91bmRlZC5qcyIsICIuLi9zcmMvcm91dGVzL015U3RvcnlQYWdlLnRzeCIsICIuLi9zcmMvZGF0YS9teVN0b3J5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA1aC0yVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDVjLTEuMSAwLTIgLjktMiAydjFjMCAyLjU1IDEuOTIgNC42MyA0LjM5IDQuOTQuNjMgMS41IDEuOTggMi42MyAzLjYxIDIuOTZWMTlIOGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zdi0zLjFjMS42My0uMzMgMi45OC0xLjQ2IDMuNjEtMi45NkMxOS4wOCAxMi42MyAyMSAxMC41NSAyMSA4VjdjMC0xLjEtLjktMi0yLTJNNSA4VjdoMnYzLjgyQzUuODQgMTAuNCA1IDkuMyA1IDhtMTQgMGMwIDEuMy0uODQgMi40LTIgMi44MlY3aDJ6XCJcbn0pLCAnRW1vamlFdmVudHNSb3VuZGVkJyk7IiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNSAxMy4xOHYyLjgxYzAgLjczLjQgMS40MSAxLjA0IDEuNzZsNSAyLjczYy42LjMzIDEuMzIuMzMgMS45MiAwbDUtMi43M2MuNjQtLjM1IDEuMDQtMS4wMyAxLjA0LTEuNzZ2LTIuODFsLTYuMDQgMy4zYy0uNi4zMy0xLjMyLjMzLTEuOTIgMHptNi4wNC05LjY2LTguNDMgNC42Yy0uNjkuMzgtLjY5IDEuMzggMCAxLjc2bDguNDMgNC42Yy42LjMzIDEuMzIuMzMgMS45MiAwTDIxIDEwLjA5VjE2YzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY5LjU5YzAtLjM3LS4yLS43LS41Mi0uODhsLTkuNTItNS4xOWEyLjA0IDIuMDQgMCAwIDAtMS45MiAwXCJcbn0pLCAnU2Nob29sUm91bmRlZCcpOyIsCiAgICAiLy8gRmlsZTogc3JjL3JvdXRlcy9NeVN0b3J5UGFnZS50c3hcbi8vIFB1cnBvc2U6IFJlaW1hZ2luZXMgdGhlIE15IFN0b3J5IHJvdXRlIHdpdGggdW5pZmllZCBkZXNpZ24gdG9rZW5zLCBjb25zaXN0ZW50IHN1cmZhY2VzLCBhbmQgY2xlYXIgaGllcmFyY2h5IGFjcm9zcyBwZXJzb25hbCBuYXJyYXRpdmUsIGdhbGxlcnksIGFuZCBjcmVkZW50aWFscy5cbmltcG9ydCBBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NOZXdSb3VuZGVkXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiO1xuaW1wb3J0IEVtb2ppRXZlbnRzUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1vamlFdmVudHNSb3VuZGVkXCI7XG5pbXBvcnQgU2Nob29sUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2Nob29sUm91bmRlZFwiO1xuaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBJY29uQnV0dG9uLFxuICBNb2JpbGVTdGVwcGVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdXNlTWVkaWFRdWVyeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENhcmRQcm9wcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHR5cGUgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHtcbiAgYm9va3MsXG4gIGNlcnRpZmljYXRlcyxcbiAgZWR1Y2F0aW9uLFxuICBlbW9qaUxpc3QsXG4gIGdhbGxlcnksXG4gIHBoaWxvc29waHlUZXh0LFxuICByZWFkaW5nSm91cm5leSxcbiAgcmVmZXJlbmNlcyxcbiAgc3RvcnlIZXJvLFxuICB0ZWFtLFxufSBmcm9tIFwiLi4vZGF0YS9teVN0b3J5XCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9QaWxsXCI7XG5pbXBvcnQgR2hvc3RCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvR2hvc3RCdXR0b25cIjtcblxudHlwZSBTZWN0aW9uSGVhZGVyUHJvcHMgPSB7XG4gIGV5ZWJyb3c/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICBhbGlnbj86IFwiY2VudGVyXCIgfCBcImxlZnRcIjtcbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoeyBleWVicm93LCB0aXRsZSwgc3VidGl0bGUsIGljb24sIGFsaWduID0gXCJjZW50ZXJcIiB9OiBTZWN0aW9uSGVhZGVyUHJvcHMpID0+IChcbiAgPFN0YWNrXG4gICAgc3BhY2luZz17MS41fVxuICAgIGFsaWduSXRlbXM9e2FsaWduID09PSBcImNlbnRlclwiID8gXCJjZW50ZXJcIiA6IFwiZmxleC1zdGFydFwifVxuICAgIHRleHRBbGlnbj17YWxpZ259XG4gID5cbiAgICB7KGljb24gfHwgZXllYnJvdykgJiYgKFxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAge2ljb259XG4gICAgICAgIHtleWVicm93ICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGFnXCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKX1cbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgIHtzdWJ0aXRsZSAmJiAoXG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgIHN4PXt7IG1heFdpZHRoOiBhbGlnbiA9PT0gXCJjZW50ZXJcIiA/IDcyMCA6IDY0MCwgbGluZUhlaWdodDogMS42IH19XG4gICAgICA+XG4gICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICApfVxuICA8L1N0YWNrPlxuKTtcblxuY29uc3QgU3VyZmFjZUNhcmQgPSAoeyBzeCwgY2hpbGRyZW4sIC4uLnByb3BzIH06IENhcmRQcm9wcykgPT4gKFxuICA8Q2FyZFxuICAgIGVsZXZhdGlvbj17MH1cbiAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgIHN4PXt7XG4gICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgIC4uLnN4LFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0NhcmQ+XG4pO1xuXG5jb25zdCBMaWZlSW5GcmFtZXNTbGlkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZFVwID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpKTtcbiAgY29uc3QgaXNTbVVwID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpKTtcbiAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IGlzTWRVcCA/IDMgOiBpc1NtVXAgPyAyIDogMTtcblxuICBjb25zdCBtYXhJbmRleCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gTWF0aC5tYXgoMCwgZ2FsbGVyeS5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSxcbiAgICBbc2xpZGVzUGVyVmlld10sXG4gICk7XG5cbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiBNYXRoLm1pbihwcmV2LCBtYXhJbmRleCkpO1xuICB9LCBbbWF4SW5kZXhdKTtcblxuICBjb25zdCBoYW5kbGVTdGVwID0gKGRpcmVjdGlvbjogLTEgfCAxKSA9PiB7XG4gICAgc2V0QWN0aXZlSW5kZXgoKHByZXYpID0+IE1hdGgubWluKG1heEluZGV4LCBNYXRoLm1heCgwLCBwcmV2ICsgZGlyZWN0aW9uKSkpO1xuICB9O1xuXG4gIGNvbnN0IHNsaWRlV2lkdGhQZXJjZW50ID0gMTAwIC8gc2xpZGVzUGVyVmlldztcblxuICByZXR1cm4gKFxuICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogKHRoZW1lKSA9PiB0aGVtZS50b2tlbnMucmFkaXVzLnhsLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMzYwbXMgZWFzZVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHthY3RpdmVJbmRleCAqIHNsaWRlV2lkdGhQZXJjZW50fSUpYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHsoZ2FsbGVyeS5sZW5ndGggKiAxMDApIC8gc2xpZGVzUGVyVmlld30lYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2dhbGxlcnkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8U3VyZmFjZUNhcmRcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmNhcHRpb259XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZmxleDogYDAgMCAke3NsaWRlV2lkdGhQZXJjZW50fSVgLFxuICAgICAgICAgICAgICAgIG14OiB7IHhzOiAwLjc1LCBtZDogMS4yNSB9LFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IDI2MCwgc206IDMwMCwgbWQ6IDMyMCB9LFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntpdGVtLmNhcHRpb259PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAge2l0ZW0uc3ViY2FwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdWJjYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L1N1cmZhY2VDYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgcGhvdG9cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwKC0xKX1cbiAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZUluZGV4ID09PSAwfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgIGxlZnQ6IHsgeHM6IDYsIHNtOiAxMiB9LFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZUluZGV4ID09PSAwID8gXCJub25lXCIgOiB0aGVtZS50b2tlbnMuc2hhZG93LmxldmVsMSxcbiAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXJyb3dCYWNrSW9zTmV3Um91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCBwaG90b1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXAoMSl9XG4gICAgICAgIGRpc2FibGVkPXthY3RpdmVJbmRleCA9PT0gbWF4SW5kZXh9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgcmlnaHQ6IHsgeHM6IDYsIHNtOiAxMiB9LFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICBib3hTaGFkb3c6IGFjdGl2ZUluZGV4ID09PSBtYXhJbmRleCA/IFwibm9uZVwiIDogdGhlbWUudG9rZW5zLnNoYWRvdy5sZXZlbDEsXG4gICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICA8TW9iaWxlU3RlcHBlclxuICAgICAgICB2YXJpYW50PVwiZG90c1wiXG4gICAgICAgIHN0ZXBzPXttYXhJbmRleCArIDF9XG4gICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcbiAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlSW5kZXh9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIG10OiAzLFxuICAgICAgICAgIFwiJiAuTXVpTW9iaWxlU3RlcHBlci1kb3RcIjoge1xuICAgICAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgICAgICBoZWlnaHQ6IDgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgbmV4dEJ1dHRvbj17XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwKDEpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZUluZGV4ID09PSBtYXhJbmRleH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHNsaWRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIGJhY2tCdXR0b249e1xuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcCgtMSl9XG4gICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlSW5kZXggPT09IDB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgc2xpZGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NOZXdSb3VuZGVkSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBNeVN0b3J5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzaXRlVXJsID1cbiAgICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgICBcImh0dHBzOi8vbXJzYWRyaS5naXRodWIuaW8vUG9ydGZvbGlvXCI7XG4gIGNvbnN0IGhlcm9JbWFnZSA9IGdhbGxlcnlbMF0/LmltYWdlO1xuXG4gIGNvbnN0IHN0cnVjdHVyZWREYXRhID0ge1xuICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICBcIkB0eXBlXCI6IFwiUHJvZmlsZVBhZ2VcIixcbiAgICBuYW1lOiBcIk1hc2loIFNhZHJpIOKAlCBNeSBTdG9yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBzdG9yeUhlcm8uZGVzY3JpcHRpb24sXG4gICAgdXJsOiBgJHtzaXRlVXJsfS9teS1zdG9yeWAsXG4gICAgaW1hZ2U6IGhlcm9JbWFnZSxcbiAgICBwcmltYXJ5VG9waWM6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgIG5hbWU6IFwiTWFzaWggU2FkcmlcIixcbiAgICAgIGpvYlRpdGxlOiBcIlNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCIsXG4gICAgICBzYW1lQXM6IFtcbiAgICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICAgICAgICBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9AbWFzaWhcIixcbiAgICAgICAgXCJodHRwczovL21hc2loLmZyYW1lci53ZWJzaXRlL1wiLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgdGl0bGU9XCJNeSBTdG9yeSDigJQgTWFzaWggU2FkcmnigJlzIHBhdGggYXMgYSBwcm9kdWN0IGRlc2lnbmVyXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJMZWFybiBob3cgTWFzaWggU2FkcmkgYmxlbmRzIG1lbnRvcnNoaXAsIGV4cGVyaW1lbnRhdGlvbiwgYW5kIGNyYWZ0IHRvIGRlc2lnbiBodW1hbiBleHBlcmllbmNlc+KAlGZyb20gY2xhc3Nyb29tIHRvIHByb2R1Y3QgbGF1bmNoZXMuXCJcbiAgICAgICAgY2Fub25pY2FsUGF0aD1cIi9teS1zdG9yeVwiXG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHR5cGU6IFwicHJvZmlsZVwiLFxuICAgICAgICAgIGltYWdlOiBoZXJvSW1hZ2VcbiAgICAgICAgICAgID8geyB1cmw6IGhlcm9JbWFnZSwgYWx0OiBcIk1hc2loIFNhZHJpIGRvY3VtZW50aW5nIHBlcnNvbmFsIGpvdXJuZXlcIiB9XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgfX1cbiAgICAgICAgc3RydWN0dXJlZERhdGE9e3N0cnVjdHVyZWREYXRhfVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwiaGVhZGVyXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNilcIiA6IFwicmdiYSg4LCAxNCwgMjYsIDAuODUpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDg0MCxcbiAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwibGVmdFwiLCBtZDogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGFnXCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIiBzeD17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICBNeSBzdG9yeVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57c3RvcnlIZXJvLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7c3RvcnlIZXJvLnN1YnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0b3J5SGVyby5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB0OiB7IHhzOiAyLCBtZDogNCB9LFxuICAgICAgICAgIHBiOiB7IHhzOiA4LCBtZDogMTIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fSBzeD17eyBtYXhXaWR0aDogNzIwIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBQaG90byBTdHJpcFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+TGF5ZXJzIG9mIHRoZSBldmVyeWRheTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQSBnbGltcHNlIGludG8gdGhlIHRleHR1cmVzLCBwZW9wbGUsIGFuZCBzY2VuZXMgdGhhdCBzaGFwZSBob3cgSSBhcHByb2FjaCBwcm9kdWN0XG4gICAgICAgICAgICAgIGRlc2lnbuKAlHVuZmlsdGVyZWQsIGEgbGl0dGxlIGltcGVyZmVjdCwgYW5kIHZlcnkgYWxpdmUuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxDb250YWluZXIgZGlzYWJsZUd1dHRlcnMgbWF4V2lkdGg9e2ZhbHNlfSBzeD17eyBtdDogeyB4czogNCwgbWQ6IDYgfSB9fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBweDogeyB4czogMiwgc206IDQsIG1kOiA2IH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBjb2x1bW5Db3VudDogeyB4czogMiwgc206IDMsIG1kOiA1IH0sXG4gICAgICAgICAgICAgICAgY29sdW1uR2FwOiB7IHhzOiAxLjUsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dhbGxlcnkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLmNhcHRpb259LSR7aXRlbS5pbWFnZX1gfVxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtJbnNpZGU6IFwiYXZvaWRcIixcbiAgICAgICAgICAgICAgICAgICAgbWI6IHsgeHM6IDEuNSwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMCB9LFxuICAgICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiA2LCBtZDogOCB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyLjV9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwaGlsb3NvcGh5VGV4dH1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICAgICAgICAgICAgICBwbDogMixcbiAgICAgICAgICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAgICBJIGFtIGRyaXZlbiBieSBleHBlcmllbmNlc+KAlGRlc2lnbmluZyB0aGVtLCBsZWFybmluZyBmcm9tIHRoZW0sIGFuZCBsaXZpbmcgdGhlbVxuICAgICAgICAgICAgICAgICAgICBkZWVwbHkuXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIE15IGZyaWVuZHMgb2Z0ZW4gZGVzY3JpYmUgbWUgYXMgc29tZW9uZSB3aXRoIGxheWVyc+KAlGN1cmlvc2l0eSBrZWVwcyBtZSBleHBsb3JpbmdcbiAgICAgICAgICAgICAgICAgIG5ldyBjcmFmdHMsIGNvbW11bml0aWVzLCBhbmQgY2hhbGxlbmdlcy4gSXTigJlzIGhvdyBJIHN0YXkgZ3JvdW5kZWQgYW5kIGluc3BpcmVkLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgc3BhY2luZz17My41fVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNDhweFwiLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IDMsIG1kOiA0IH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMywgbWQ6IDQgfSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjcpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBUaGVzZSBzbWFsbCByaXR1YWxzIHNoYXBlIHRoZSB3YXkgSSBkZXNpZ24gYW5kIGNvbGxhYm9yYXRlOlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgIEZyb20gbXVzaWMgYW5kIGNlcmFtaWNzIHRvIHBsYW50cywgY29va2luZywgYW5kIGNvbGxhYm9yYXRpdmUgZ2FtZXPigJRJ4oCZbSBtb3N0XG4gICAgICAgICAgICAgICAgICAgIGFsaXZlIHdoZW4gSeKAmW0gYnVpbGRpbmcgd2l0aCBvdGhlcnMuXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgIHVzZUZsZXhHYXBcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IHhzOiBcImZsZXgtc3RhcnRcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Vtb2ppTGlzdC5tYXAoKGVtb2ppKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IDU2LCBzbTogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZW1vaml9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIlJlYWRpbmcgSm91cm5leVwiXG4gICAgICAgICAgICAgIHRpdGxlPXtyZWFkaW5nSm91cm5leS50aXRsZX1cbiAgICAgICAgICAgICAgc3VidGl0bGU9e3JlYWRpbmdKb3VybmV5LnN1YnRpdGxlfVxuICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiB9fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e2Jvb2sudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtib29rLmNvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BDb3ZlciBvZiAke2Jvb2sudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHRoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57Ym9vay50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay50YWtlYXdheXMubWFwKCh0YWtlYXdheSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rha2Vhd2F5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rha2Vhd2F5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5oaWdobGlnaHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Ym9vay5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzMSwgMTExLCAyMzUsIDAuMTIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LCAxMzIsIDIxOCwgMC4yMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBkaXNhYmxlR3V0dGVycyBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB7IG1kOiBcIjEuMTVmciAwLjg1ZnJcIiB9LFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6IDM2MCwgc206IDQyMCwgbWQ6IDUyMCB9LFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e3RlYW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXt0ZWFtLmFsdH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiB7IHhzOiAxNiwgbWQ6IDI0IH0sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB7IHhzOiAxNiwgbWQ6IDMyIH0sXG4gICAgICAgICAgICAgICAgICBweDogMixcbiAgICAgICAgICAgICAgICAgIHB5OiAwLjc1LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS50b2tlbnMucmFkaXVzLnBpbGwsXG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEycHgpXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MilcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDE0LCAyMiwgMzgsIDAuNzIpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZWFtLmNhcHRpb259XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAzLCBzbTogNiwgbWQ6IDggfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogNSwgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19IHN4PXt7IG1heFdpZHRoOiA1MjAgfX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgQ29sbGFib3JhdG9yc1xuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57dGVhbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuOCB9fT5cbiAgICAgICAgICAgICAgICAgIHt0ZWFtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBgM3B4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5zZWNvbmRhcnl9YCxcbiAgICAgICAgICAgICAgICAgICAgcGw6IDMsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgICAg4oCcRGVzaWduaW5nIHdpdGggcGVvcGxlIEkgdHJ1c3Qga2VlcHMgdGhlIHdvcmsgaHVtYmxlLCBhbWJpdGlvdXMsIGFuZCBqb3lmdWwu4oCdXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgIGV5ZWJyb3c9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgICB0aXRsZT1cIkFjYWRlbWljIEZvdW5kYXRpb25zXCJcbiAgICAgICAgICAgICAgaWNvbj17PFNjaG9vbFJvdW5kZWRJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAge2VkdWNhdGlvbi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDQgfX0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIDxTdXJmYWNlQ2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD17aXRlbS5iYWRnZX0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezAuNzV9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTAgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgICBleWVicm93PVwiQ29udGludW91cyBMZWFybmluZ1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ2VydGlmaWNhdGVzICYgVHJhaW5pbmdcIlxuICAgICAgICAgICAgICBpY29uPXs8RW1vamlFdmVudHNSb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fVxuICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAge2NlcnRpZmljYXRlcy5tYXAoKGNlcnRpZmljYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17Y2VydGlmaWNhdGUudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPXtjZXJ0aWZpY2F0ZS5iYWRnZX0gc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57Y2VydGlmaWNhdGUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRlLmluc3RpdHV0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGUuaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7W2NlcnRpZmljYXRlLmhvdXJzLCBjZXJ0aWZpY2F0ZS5zY29yZSwgY2VydGlmaWNhdGUudG9waWNzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGtleT17ZGV0YWlsfSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvU3VyZmFjZUNhcmQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIiBzeD17eyBweTogeyB4czogOCwgbWQ6IDEwIH0gfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgZXllYnJvdz1cIlJlZmVyZW5jZXNcIlxuICAgICAgICAgICAgICB0aXRsZT1cIldoYXQgTXkgUGFydG5lcnMgU2F5XCJcbiAgICAgICAgICAgICAgaWNvbj17PFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIHtyZWZlcmVuY2VzLm1hcCgocmVmZXJlbmNlKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA0IH19IGtleT17cmVmZXJlbmNlLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPFN1cmZhY2VDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3JlZmVyZW5jZS5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWZlcmVuY2Uucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVmZXJlbmNlLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlZmVyZW5jZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8R2hvc3RCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cmVmZXJlbmNlLmxpbmtlZGlufVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG10OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjIyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxMjIsIDE2MiwgMjU1LCAwLjM1KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDE3LCA3NiwgMTcwLCAwLjQyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuNTUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzEsIDExMSwgMjM1LCAwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDEyMiwgMTYyLCAyNTUsIDAuMTYpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgb24gTGlua2VkSW5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dob3N0QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9TdXJmYWNlQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVN0b3J5UGFnZTtcblxuXG4iLAogICAgIi8vIEZpbGU6IHNyYy9kYXRhL215U3RvcnkudHNcbi8vIFB1cnBvc2U6IFN0b3JlcyBuYXJyYXRpdmUsIGdhbGxlcnksIHJlYWRpbmcgbGlzdCwgYW5kIGNyZWRlbnRpYWwgZGF0YSB1c2VkIGFjcm9zcyB0aGUgTXkgU3RvcnkgcGFnZS5cbmltcG9ydCBjcmVhdGl2ZUNvbmZpZGVuY2VDb3ZlckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvYm9va3MvY3JlYXRpdmUtY29uZmlkZW5jZS5qcGdcIjtcbmltcG9ydCBkZXNpZ25PZkV2ZXJ5ZGF5VGhpbmdzQ292ZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jvb2tzL2Rlc2lnbi1vZi1ldmVyeWRheS10aGluZ3MuanBnXCI7XG5pbXBvcnQgc3ByaW50Q292ZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jvb2tzL3NwcmludC5qcGdcIjtcbmltcG9ydCBkaXZhclRlYW1QaG90b0Fzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvZGl2YXItdGVhbS5qcGdcIjtcbmltcG9ydCBtYXNpaENoaWxkUGhvdG9Bc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLWNoaWxkLXBob3RvLnBuZ1wiO1xuaW1wb3J0IG1hc2loQ29mZmVlQXJ0aXN0QXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC1jb2ZmZWUtYXJ0aXN0LnBuZ1wiO1xuaW1wb3J0IG1hc2loTW91bnRhaW5lZXJBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21hc2loLW1vdW50YWluZWVyLnBuZ1wiO1xuaW1wb3J0IG1hc2loVXhEZXNpZ25lckFzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWFzaWgtdXgtZGVzaWduZXIucG5nXCI7XG5pbXBvcnQgYWlBbmRVeENvdmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9ib29rcy9haS1hbmQtdXguanBnXCI7XG5pbXBvcnQgbWFzaWhXb29kQ2FydmVyQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9tYXNpaC13b29kLWNhcnZlci5wbmdcIjtcblxuY29uc3QgcmVzb2x2ZUFzc2V0ID0gKGFzc2V0OiBzdHJpbmcpID0+IG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZjtcbnR5cGUgU3RvcnlIZXJvID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBHYWxsZXJ5SXRlbSA9IHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbiAgc3ViY2FwdGlvbj86IHN0cmluZztcbn07XG5cbnR5cGUgUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIGN1cnJlbnRseVJlYWRpbmc6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIEJvb2sgPSB7XG4gIGNvdmVyOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBzdW1tYXJ5OiBzdHJpbmc7XG4gIHRha2Vhd2F5czogcmVhZG9ubHkgc3RyaW5nW107XG4gIGhpZ2hsaWdodD86IHN0cmluZztcbn07XG5cbnR5cGUgVGVhbVNuYXBzaG90ID0ge1xuICBpbWFnZTogc3RyaW5nO1xuICBhbHQ6IHN0cmluZztcbiAgY2FwdGlvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBFZHVjYXRpb25JdGVtID0ge1xuICBiYWRnZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGluc3RpdHV0aW9uOiBzdHJpbmc7XG4gIGRldGFpbHM/OiByZWFkb25seSBzdHJpbmdbXTtcbn07XG5cbnR5cGUgQ2VydGlmaWNhdGVJdGVtID0ge1xuICBiYWRnZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGluc3RpdHV0aW9uPzogc3RyaW5nO1xuICBob3Vycz86IHN0cmluZztcbiAgdG9waWNzPzogc3RyaW5nO1xuICBzY29yZT86IHN0cmluZztcbn07XG5cbnR5cGUgUmVmZXJlbmNlSXRlbSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBsaW5rZWRpbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0b3J5SGVybzogU3RvcnlIZXJvID0ge1xuICB0aXRsZTogXCJJIGFtIE1hc2loXCIsXG4gIHN1YnRpdGxlOiBcIkEgQ3JlYXRvciBvZiBNZWFuaW5nZnVsIEV4cGVyaWVuY2VzXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiT3V0c2lkZSBvZiBkZXNpZ24sIEkgZW5qb3kgZXhwbG9yaW5nIGNoYWxsZW5nZXMgYW5kIGxlYXJuaW5nIHRocm91Z2ggZXhwZXJpZW5jZXMgbGlrZSBtb3VudGFpbmVlcmluZywgd29vZCBjYXJ2aW5nLCBhbmQgdGVhY2hpbmcuIFRoZXNlIHB1cnN1aXRzIGhhdmUgdGF1Z2h0IG1lIHBhdGllbmNlLCByZXNpbGllbmNlLCBhbmQgZW1wYXRoeSwgd2hpY2ggSSBicmluZyBpbnRvIG15IHdvcmsgdG8gY3JhZnQgbWVhbmluZ2Z1bCBhbmQgdGhvdWdodGZ1bCBkZXNpZ25zLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbGxlcnkgPSBbXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loQ2hpbGRQaG90b0Fzc2V0KSxcbiAgICBhbHQ6IFwiTWFzaWggYXMgYSBjaGlsZCBpbiBoaXMgZGFkJ3MgamFja2V0XCIsXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIENoaWxkIGluIE15IERhZCdzIEphY2tldFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaE1vdW50YWluZWVyQXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBhcyBhIG1vdW50YWluZWVyXCIsXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIE1vdW50YWluZWVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogcmVzb2x2ZUFzc2V0KG1hc2loQ29mZmVlQXJ0aXN0QXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCdzIGxhdHRlIGFydFwiLFxuICAgIGNhcHRpb246IFwiTXkgYXJ0IG9uIGEgTGF0dGVcIixcbiAgICBzdWJjYXB0aW9uOiBcIkxhdHRlIEFydCBieSBtZSA6KVwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHJlc29sdmVBc3NldChtYXNpaFV4RGVzaWduZXJBc3NldCksXG4gICAgYWx0OiBcIk1hc2loIGFzIGEgVVggRGVzaWduZXJcIixcbiAgICBjYXB0aW9uOiBcIk1lIGFzIGEgVVggRGVzaWduZXJcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiByZXNvbHZlQXNzZXQobWFzaWhXb29kQ2FydmVyQXNzZXQpLFxuICAgIGFsdDogXCJNYXNpaCBhcyBhIHdvb2QgY2FydmVyXCIsXG4gICAgY2FwdGlvbjogXCJNZSBhcyBhIFdvb2QgQ2FydmVyXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PEdhbGxlcnlJdGVtPjtcblxuZXhwb3J0IGNvbnN0IHBoaWxvc29waHlUZXh0ID1cbiAgXCJJIGRlc2lnbiBleHBlcmllbmNlcyB0aGF0IG5vdCBvbmx5IHNvbHZlIHByb2JsZW1zIGJ1dCBjcmVhdGUgdmFsdWUgZm9yIGJvdGggYnVzaW5lc3NlcyBhbmQgdXNlcnMuIEkgZW5qb3kgZGlnZ2luZyBkZWVwIGludG8gY2hhbGxlbmdlcywgYW5hbHl6aW5nIHRoZW0gdGhvcm91Z2hseSwgYW5kIGNvbWluZyB1cCB3aXRoIHNvbHV0aW9ucyB0aGF0IHRydWx5IG1ha2UgYSBkaWZmZXJlbmNlLlwiO1xuXG5leHBvcnQgY29uc3QgZW1vamlMaXN0OiByZWFkb25seSBzdHJpbmdbXSA9IFtcIuKYle+4j1wiLCBcIvCfp5fwn4+9XCIsIFwi8J+Su1wiLCBcIvCfk5pcIl07XG5cbmV4cG9ydCBjb25zdCByZWFkaW5nSm91cm5leTogUmVhZGluZ0pvdXJuZXkgPSB7XG4gIHRpdGxlOiBcIkRlc2lnbiBCb29rcyBHdWlkaW5nIE15IENyYWZ0XCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiSW5zcGlyZWQgYnkgdGhlIGxpdmluZyBib29rc2hlbHZlcyBzaGFyZWQgYnkgcGVlcnMgbGlrZSBLeWxlIEpvaG5zdG9uLCBTYXd5ZXIgSG9sbGVuc2hlYWQsIEphc29uIFpvb2ssIGFuZCBBbXkgTWNMYXkgUGF0ZXJzb24sIEkga2VlcCBhIGN1cmF0ZWQgcmVjb3JkIG9mIHRoZSBpZGVhcyB0aGF0IHNoYXBlIG15IHByYWN0aWNlLlwiLFxuICBjdXJyZW50bHlSZWFkaW5nOiB7XG4gICAgbGFiZWw6IFwiQ3VycmVudGx5IHJlYWRpbmdcIixcbiAgICB0aXRsZTogXCJBSSBhbmQgVVg6IFdoeSBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBOZWVkcyBVc2VyIEV4cGVyaWVuY2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29rcyA9IFtcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoZGVzaWduT2ZFdmVyeWRheVRoaW5nc0NvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIlRoZSBEZXNpZ24gb2YgRXZlcnlkYXkgVGhpbmdzXCIsXG4gICAgYXV0aG9yOiBcIkRvbiBOb3JtYW5cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMTggwrcgUmV2aXNpdGVkIDIwMjRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJOb3JtYW7igJlzIGZyYW1ld29yayBmb3IgYWZmb3JkYW5jZXMgYW5kIGZlZWRiYWNrIGhlbHBlZCBtZSBidWlsZCByZXNpbGllbmNlIGFnYWluc3QgYmlhcyB3aGVuIHRlc3Rpbmcgc2FmZXR5LWNyaXRpY2FsIGZsb3dzLCBlc3BlY2lhbGx5IHdoZW4gd2UgcmVkZXNpZ25lZCB2b2ljZSBtYXNraW5nIGZvciBEaXZhci5cIixcbiAgICB0YWtlYXdheXM6IFtcbiAgICAgIFwiUmVpbmZvcmNlZCBteSBoYWJpdCBvZiBwcm90b3R5cGluZyBlcnJvciBzdGF0ZXMgZmlyc3QuXCIsXG4gICAgICBcIkluZmx1ZW5jZWQgbXkgaGV1cmlzdGljcyBjaGVja2xpc3QgZm9yIGFjY2Vzc2liaWxpdHkgcmV2aWV3cy5cIixcbiAgICAgIFwiVGF1Z2h0IG1lIHRvIG5hcnJhdGUg4oCcdXNlciBnb2Fsc+KAnSBpbiBldmVyeSBkZXNpZ24gY3JpdGlxdWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoc3ByaW50Q292ZXJBc3NldCksXG4gICAgdGl0bGU6IFwiU3ByaW50XCIsXG4gICAgYXV0aG9yOiBcIkpha2UgS25hcHAgJiB0aGUgR1YgRGVzaWduIFRlYW1cIixcbiAgICBsYWJlbDogXCJSZWFkIGluIDIwMjBcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJCb3Jyb3dpbmcgdGhlIHNwcmludCByaHl0aG0gaGVscGVkIG1lIGNvYWNoIHByb2R1Y3Qgc3F1YWRzIHRvd2FyZCBkZWNpc2lvbiBjbGFyaXR5LiBXZSBwcm90b3R5cGVkIGFuZCBsYXVuY2hlZCBhIGxveWFsdHkgcHJvZ3JhbSBhdCBTZXRhcmUgQXZhbCB1c2luZyBhIDQtZGF5IHZhcmlhdGlvbiBvZiB0aGlzIHBsYXlib29rLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJBZG9wdGVkIGxpZ2h0bmluZyB0YWxrcyB0byBhbGlnbiBzdGFrZWhvbGRlcnMgZmFzdC5cIixcbiAgICAgIFwiTWFkZSDigJxIb3cgbWlnaHQgd2XigJ0gc3ludGhlc2lzIGEgc3RhcGxlIGluIG15IHdvcmtzaG9wcy5cIixcbiAgICAgIFwiSW1wcm92ZWQgcmVtb3RlIGZhY2lsaXRhdGlvbiB1c2luZyBzdHJ1Y3R1cmVkIHZvdGluZyByaXR1YWxzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3ZlcjogcmVzb2x2ZUFzc2V0KGNyZWF0aXZlQ29uZmlkZW5jZUNvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIkNyZWF0aXZlIENvbmZpZGVuY2VcIixcbiAgICBhdXRob3I6IFwiVG9tICYgRGF2aWQgS2VsbGV5XCIsXG4gICAgbGFiZWw6IFwiUmVhZCBpbiAyMDIxXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhpcyBib29rIHJlZnJhbWVkIGhvdyBJIG1lbnRvciBuZXcgZGVzaWduZXJz4oCUc2hpZnRpbmcgY3JpdGlxdWVzIGZyb20gc29sdXRpb24ganVkZ21lbnQgdG8gY2FwYWJpbGl0eSBidWlsZGluZyBhbmQgcHN5Y2hvbG9naWNhbCBzYWZldHkuXCIsXG4gICAgdGFrZWF3YXlzOiBbXG4gICAgICBcIkludHJvZHVjZWQg4oCcY29uZmlkZW5jZSBtYXBwaW5n4oCdIGluIG15IG1lbnRvcnNoaXAgc2Vzc2lvbnMuXCIsXG4gICAgICBcIkRyb3ZlIG1lIHRvIGRlc2lnbiBwcm9qZWN0LWJhc2VkIGN1cnJpY3VsYSBhdCBSYWhuZW1hIENvbGxlZ2UuXCIsXG4gICAgICBcIkVuY291cmFnZWQgc3Rvcnl0ZWxsaW5nIHJpdHVhbHMgdG8gY2VsZWJyYXRlIGluY3JlbWVudGFsIHdpbnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdmVyOiByZXNvbHZlQXNzZXQoYWlBbmRVeENvdmVyQXNzZXQpLFxuICAgIHRpdGxlOiBcIkFJIGFuZCBVWDogV2h5IEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIE5lZWRzIFVzZXIgRXhwZXJpZW5jZVwiLFxuICAgIGF1dGhvcjogXCJQYW1lbGEgUGF2bGlzY2FrXCIsXG4gICAgbGFiZWw6IFwiSW4gcHJvZ3Jlc3MgwrcgUTQgMjAyNVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIknigJltIGV4cGxvcmluZyBob3cgaHVtYW4tY2VudGVyZWQgbWV0aG9kcyBldm9sdmUgd2hlbiBtb2RlbHMgbWFrZSBwcm9iYWJpbGlzdGljIGRlY2lzaW9uc+KAlGluZm9ybWluZyB0aGUgZ3VhcmRyYWlscyBJIGNyYWZ0IGZvciBBSS1hdWdtZW50ZWQgc29sdXRpb25zLlwiLFxuICAgIHRha2Vhd2F5czogW1xuICAgICAgXCJCdWlsZGluZyBhbiBldGhpY2FsIGNoZWNrbGlzdCBmb3IgQUkgZXhwZXJpbWVudHMuXCIsXG4gICAgICBcIlBhaXJpbmcgcXVhbGl0YXRpdmUgaW50ZXJ2aWV3cyB3aXRoIG1vZGVsIG1ldHJpY3MuXCIsXG4gICAgICBcIkRvY3VtZW50aW5nIHByb21wdCBkZXNpZ24gcGF0dGVybnMgZm9yIG15IHRlYW0uXCIsXG4gICAgXSxcbiAgICBoaWdobGlnaHQ6IFwiTm93IFJlYWRpbmdcIixcbiAgfSxcbl0gc2F0aXNmaWVzIFJlYWRvbmx5QXJyYXk8Qm9vaz47XG5cbmV4cG9ydCBjb25zdCB0ZWFtOiBUZWFtU25hcHNob3QgPSB7XG4gIGltYWdlOiByZXNvbHZlQXNzZXQoZGl2YXJUZWFtUGhvdG9Bc3NldCksXG4gIGFsdDogXCJNYXNpaCBTYWRyaSB3aXRoIHRoZSBEaXZhciBwcm9kdWN0IHRlYW1cIixcbiAgY2FwdGlvbjpcbiAgICBcIkRpdmFyIFByb2R1Y3QgRXhwZXJpZW5jZSBUZWFtIOKAlCBjb2xsYWJvcmF0aW5nIGFjcm9zcyByZXNlYXJjaCwgcHJvZHVjdCBkZXNpZ24sIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgdGl0bGU6IFwiTXkgRGl2YXIgUHJvZHVjdCBUZWFtXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlc2UgYXJlIHRoZSB0YWxlbnRlZCBjb2xsZWFndWVzIEknbSBwcm91ZCB0byBjb2xsYWJvcmF0ZSB3aXRoIGF0IERpdmFyLiBUb2dldGhlciwgb3VyIDMyLXBlcnNvbiBwcm9kdWN0IG9yZ2FuaXphdGlvbiBibGVuZHMgZGVzaWduLCByZXNlYXJjaCwgcHJvZHVjdCwgYW5kIGVuZ2luZWVyaW5nIHRvIHNoaXAgZXhwZXJpZW5jZXMgdGhhdCBwcm90ZWN0IGFuZCBlbXBvd2VyIG1pbGxpb25zIG9mIHVzZXJzLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbiA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkRlZ3JlZVwiLFxuICAgIGRhdGU6IFwiMjAxNSDigJMgMjAxOFwiLFxuICAgIHRpdGxlOiBcIkJTYyBpbiBQcm9qZWN0IE1hbmFnZW1lbnQgRW5naW5lZXJpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJQYXlhbWUgTm9vciBVbml2ZXJzaXR5XCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCJUZWFjaGluZyBBc3Npc3RhbnQsIGFwcG9pbnRlZCBieSBEci4gRS4gUmFqYWJpLCBIZWFkIG9mIHRoZSBTY2llbmNlIENvbW1pdHRlZVwiLFxuICAgICAgXCJBY3RpdmUgTWVtYmVyIG9mIHRoZSBDaXZpbCBFbmdpbmVlcmluZyBhbmQgUHJvamVjdCBNYW5hZ2VtZW50IFNjaWVudGlmaWMgU29jaWV0eVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJBc3NvY2lhdGVcIixcbiAgICBkYXRlOiBcIjIwMTRcIixcbiAgICB0aXRsZTogXCJBc3NvY2lhdGUgaW4gTWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIkJ1LUFsaSBTaW5hIFVuaXZlcnNpdHlcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkRpcGxvbWFcIixcbiAgICBkYXRlOiBcIjIwMDlcIixcbiAgICB0aXRsZTogXCJEaXBsb21hIGluIE1hdGhlbWF0aWNzIGFuZCBQaHlzaWNzXCIsXG4gICAgaW5zdGl0dXRpb246XG4gICAgICBcIk5hdGlvbmFsIE9yZ2FuaXphdGlvbiBmb3IgRGV2ZWxvcG1lbnQgb2YgRXhjZXB0aW9uYWwgVGFsZW50cyAoU2FtcGFkKVwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxFZHVjYXRpb25JdGVtPjtcblxuZXhwb3J0IGNvbnN0IGNlcnRpZmljYXRlcyA9IFtcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMjVcIixcbiAgICB0aXRsZTogXCJEYXRhIEFuYWx5c2lzIEJvb3RDYW1wXCIsXG4gICAgaW5zdGl0dXRpb246IFwiUmFobmVtYSBDb2xsZWdlXCIsXG4gICAgaG91cnM6IFwiMTcwaFwiLFxuICAgIHRvcGljczpcbiAgICAgIFwiRGF0YSBQcmVwcm9jZXNzaW5nLCBCdXNpbmVzcyBNZXRyaWNzLCBCSSBUb29scywgSW50cm9kdWN0b3J5IFB5dGhvbiwgU3Rvcnl0ZWxsaW5nIHdpdGggRGF0YSwgU3RhdGlzdGljYWwgSW5mZXJlbmNlLCBBL0IgVGVzdGluZ1wiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiTGFuZ3VhZ2VcIixcbiAgICBkYXRlOiBcIk1heSAyMDIyXCIsXG4gICAgdGl0bGU6IFwiSUVMVFMgKEFjYWRlbWljKVwiLFxuICAgIGluc3RpdHV0aW9uOiBcIkludGVybmF0aW9uYWwgRGV2ZWxvcG1lbnQgUHJvZ3JhbSAoSURQKVwiLFxuICAgIHNjb3JlOiBcIk92ZXJhbGwgU2NvcmU6IDcuMFwiLFxuICB9LFxuICB7XG4gICAgYmFkZ2U6IFwiQ2VydGlmaWNhdGVcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAyMVwiLFxuICAgIHRpdGxlOiBcIkNvbmR1Y3RpbmcgVXNhYmlsaXR5IFRlc3RpbmdcIixcbiAgICBpbnN0aXR1dGlvbjogXCJUaGUgSW50ZXJhY3Rpb24gRGVzaWduIEZvdW5kYXRpb25cIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCJTZXB0ZW1iZXIgMjAyMVwiLFxuICAgIHRpdGxlOiBcIkNvbXBsZXRlIEZpZ21hIE1lZ2Fjb3Vyc2VcIixcbiAgICBpbnN0aXR1dGlvbjogXCJPbmxpbmUgQ291cnNlIC0gVWRlbXlcIixcbiAgICBob3VyczogXCI0MmhcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkJvb3RDYW1wXCIsXG4gICAgZGF0ZTogXCJKdWx5IDIwMTlcIixcbiAgICB0aXRsZTogXCJVSS9VWCBEZXNpZ24gQm9vdENhbXBcIixcbiAgICBpbnN0aXR1dGlvbjogXCJSYWhuZW1hIENvbGxlZ2VcIixcbiAgICBob3VyczogXCIxNTBoXCIsXG4gIH0sXG4gIHtcbiAgICBiYWRnZTogXCJDZXJ0aWZpY2F0ZVwiLFxuICAgIGRhdGU6IFwiTWF5IDIwMTlcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IGFuZCBBZHZhbmNlZCBVWCBEZXNpZ25cIixcbiAgICBpbnN0aXR1dGlvbjogXCJTaGFyaWYgVW5pdmVyc2l0eSBvZiBUZWNobm9sb2d5ICYgVW5pdmVyc2l0eSBvZiBUZWhyYW5cIixcbiAgICBob3VyczogXCI5OGhcIixcbiAgfSxcbiAge1xuICAgIGJhZGdlOiBcIkNlcnRpZmljYXRlXCIsXG4gICAgZGF0ZTogXCIyMDE0XCIsXG4gICAgdGl0bGU6IFwiQ2F0aWEgQ2VydGlmaWNhdGUg4oCTIFByb2Zlc3Npb25hbCAzRCBNb2RlbGluZ1wiLFxuICAgIGluc3RpdHV0aW9uOiBcIklyYW4gQ2F0aWEgQ29tbXVuaXR5XCIsXG4gICAgc2NvcmU6IFwiR3JhZGU6IDEwMCBvdXQgb2YgMTAwXCIsXG4gIH0sXG5dIHNhdGlzZmllcyBSZWFkb25seUFycmF5PENlcnRpZmljYXRlSXRlbT47XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VzID0gW1xuICB7XG4gICAgbmFtZTogXCJTYWVlZCBBYm9sZ2hhc2VtaVwiLFxuICAgIHJvbGU6IFwiUHJvZHVjdCBEZXNpZ24gTGVhZCBhdCBTbmFwcEZvb2RcIixcbiAgICBkYXRlOiBcIkp1bHkgMzAsIDIwMjEg4oCiIFJlcG9ydGVkIGRpcmVjdGx5IHRvIE1hc2loXCIsXG4gICAgdGV4dDogXCJJIGhhZCB0aGUgcHJpdmlsZWdlIG9mIHdvcmtpbmcgY2xvc2VseSB3aXRoIE1hc2loIGZvciBhIHllYXIuIFN0YXJ0aW5nIG15IHByb2Zlc3Npb25hbCBqb3VybmV5IHdpdGggaGltIHdhcyB0cnVseSBmb3J0dW5hdGU7IGhlJ3Mgbm90IG9ubHkgZW1wYXRoZXRpYyB0b3dhcmRzIGNvbGxlYWd1ZXMgYnV0IGFsc28gYWRlcHQgYXQgcHJpb3JpdGl6aW5nIHRhc2tzIGJhc2VkIG9uIGluZGl2aWR1YWwgc3RyZW5ndGhzIGFuZCBhc3NpZ25pbmcgdGhlbSBhY2NvcmRpbmdseS4gTWFzaWggcGxhY2VzIHNpZ25pZmljYW50IGVtcGhhc2lzIG9uIHBlcnNvbmFsIGdyb3d0aCwgb2ZmZXJpbmcgcHJhY3RpY2FsIHJlc291cmNlcyB0YWlsb3JlZCB0byB0ZWFtIG1lbWJlcnMnIGNvbXBldGVuY2llcy4gV29ya2luZyBhbG9uZ3NpZGUgaGltIHdhcyBib3RoIGVuam95YWJsZSBhbmQgZW5yaWNoaW5nLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYWVlZC1hYm9sZ2hhc2VtaS9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWxpIEF6YWRlaFwiLFxuICAgIHJvbGU6IFwiU29mdHdhcmUgRW5naW5lZXIgYXQgVXNlclRlc3RpbmdcIixcbiAgICBkYXRlOiBcIkp1bHkgMzEsIDIwMjEg4oCiIE1hc2loJ3MgdGVhY2hlclwiLFxuICAgIHRleHQ6IFwiTWFzaWggaXMgb25lIG9mIG15IHByaXZpbGVnZWQgc3R1ZGVudHMgd2hvIGlzIGRldGVybWluZWQgdG8gaW1wcm92ZSBoaXMga25vd2xlZGdlIGFuZCBza2lsbHMuIEhpcyBjb21taXRtZW50IGFuZCBwdW5jdHVhbGl0eSBpbiBkZWxpdmVyaW5nIGFzc2lnbm1lbnRzIGFyZSBjb21tZW5kYWJsZS4gSW4gbXkgb3BpbmlvbiwgaGlzIGludGVyZXN0IGluIGxlYXJuaW5nIGhhcyBiZWVuIG9uZSBvZiB0aGUga2V5IHJlYXNvbnMgZm9yIGhpcyBzdWNjZXNzLlwiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGktYXphZGVoL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJIb3NzZWluIE1haG1vdWR2YW5kXCIsXG4gICAgcm9sZTogXCJEZXNpZ24gTGVhZCBhdCBTZXRhcmUgQXZhbCAoTUNJKVwiLFxuICAgIGRhdGU6IFwiTWFyY2ggMTAsIDIwMjEg4oCiIEhvc3NlaW4gbWFuYWdlZCBNYXNpaCBkaXJlY3RseVwiLFxuICAgIHRleHQ6IFwiSSBoYXZlIGtub3duIE1hc2loIHNpbmNlIDIwMTgsIGFuZCBmcm9tIHRoZSBiZWdpbm5pbmcsIGhpcyBwb3RlbnRpYWwgdGFsZW50IHdhcyBldmlkZW50LCBtYXJraW5nIHRoZSBzdGFydCBvZiBvdXIgY29sbGFib3JhdGl2ZSBqb3VybmV5LiBGb3IgY29uc2lzdGVudCwgdG9wLXF1YWxpdHkgZGVzaWduLCB5b3Ugb25seSBuZWVkIHRvIGdpdmUgTWFzaWggdGhlIHJhdyBkYXRhIGFuZCBhbnkgdW5jZXJ0YWludGllcy4gV2hpbGUgd29ya2luZyB0b2dldGhlciBvbiB0aGUgcHJvZHVjdCB0ZWFtIGF0IFNldGFyZSBBdmFsIENvbXBhbnksIGhpcyBleHBlcnRpc2Ugd2FzIGNydWNpYWwgaW4gcHJvYmxlbSBkZWZpbml0aW9uLCBzb2x1dGlvbiBmaW5kaW5nLCBhbmQgZGVzaWduaW5nIGZsb3dzLiBUaGUgb3V0Y29tZXMgb2YgaGlzIHByb2Zlc3Npb25hbCBhbmQgbWV0aWN1bG91c2x5IGNyYWZ0ZWQgZGVzaWducyBoYXZlIGFsd2F5cyBiZWVuIG91dHN0YW5kaW5nLiBIZSBpcyBhIGNvbnN1bW1hdGUgcHJvZmVzc2lvbmFsLCBhbmQgSSBoaWdobHkgcmVjb21tZW5kIGhpbS5cIixcbiAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaG9zc2Vpbm1haG1vdWR2YW5kL1wiLFxuICB9LFxuXSBzYXRpc2ZpZXMgUmVhZG9ubHlBcnJheTxSZWZlcmVuY2VJdGVtPjtcblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LDRCQUNGLElBQUk7QUFBQSw0QkFDSixXQUFXO0FBQUEsNEJBQ1gsYUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw0QkFDQTtBQUFBLDRCQUNOLE9BQ0UsTUFBTSxRQUFRLFNBQVMsVUFDbkIsTUFBTSxRQUFRLE1BQU0sWUFDcEI7QUFBQSw0QkFDTixXQUFXO0FBQUEsOEJBQ1QsYUFDRSxNQUFNLFFBQVEsU0FBUyxVQUNuQiw0QkFDQTtBQUFBLDhCQUNOLGlCQUNFLE1BQU0sUUFBUSxTQUFTLFVBQ25CLDZCQUNBO0FBQUEsNEJBQ1I7QUFBQSwwQkFDRjtBQUFBLDBCQTNCRjtBQUFBLDREQThCRTtBQUFBO0FBQUEsdUJBN0NKLGdDQThDRTtBQUFBLHFCQS9DSixpQ0FnREU7QUFBQSxtQkFqRGdDLFVBQVUsTUFBOUMsc0JBa0RFLENBQ0g7QUFBQSxpQkFyREgsaUNBc0RFO0FBQUE7QUFBQSxhQTdESixnQ0E4REU7QUFBQSxXQS9ESixpQ0FnRUU7QUFBQSxTQWpFSixpQ0FrRUU7QUFBQTtBQUFBLEtBdGhCSixnQ0F1aEJFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiQUExMTRDN0U2Q0JDNzNCNDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
