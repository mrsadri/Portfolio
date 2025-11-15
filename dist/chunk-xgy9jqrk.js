import {
  smoothScrollToElement
} from "./chunk-3v4zq8dh.js";
import {
  Telegram_default
} from "./chunk-db0trqvn.js";
import {
  LinkedIn_default
} from "./chunk-8x20x6j8.js";
import {
  EmailRounded_default
} from "./chunk-ahhs5fwx.js";
import {
  Seo_default,
  site_default
} from "./chunk-aj4jdr23.js";
import"./chunk-56dhb304.js";
import {
  Box_default,
  Button_default,
  CardActions_default,
  CardContent_default,
  Card_default,
  Chip_default,
  Container_default,
  Grid_default,
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  require_react,
  useLocation
} from "./chunk-ygqezw1f.js";

// src/features/contact/ContactPage.tsx
var import_react = __toESM(require_react(), 1);

// src/features/contact/components/ContactMethodsSection.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ContactMethodsSection = ({ methods }) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
      container: true,
      spacing: 3,
      children: methods.map((method) => {
        const isMailLink = method.href.startsWith("mailto:");
        return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
          size: { xs: 12, md: 3 },
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
            sx: { height: "100%" },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                  spacing: 2,
                  alignItems: "flex-start",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                      direction: "row",
                      spacing: 1.5,
                      alignItems: "center",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
                          sx: { display: "flex", alignItems: "center", color: "primary.main" },
                          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(method.icon, {}, undefined, false, undefined, this)
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                          variant: "h5",
                          children: method.title
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: method.description
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CardActions_default, {
                sx: { px: 3, pb: 3, pt: 0 },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                  component: "a",
                  href: method.href,
                  target: isMailLink ? undefined : "_blank",
                  rel: isMailLink ? undefined : "noopener noreferrer",
                  variant: "outlined",
                  color: "secondary",
                  fullWidth: true,
                  children: method.actionLabel
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, method.title, false, undefined, this);
      })
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var ContactMethodsSection_default = ContactMethodsSection;

// src/features/contact/components/HelpTopicsSection.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var HelpTopicsSection = ({ topics }) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
      spacing: 3,
      mb: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
          spacing: 2,
          alignItems: "center",
          textAlign: "center",
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
            variant: "h2",
            children: "What I Can Help With"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: topics.map((topic) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Card_default, {
              sx: { height: "100%" },
              children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
                  spacing: 1.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: topic.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: topic.description
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, topic.title, false, undefined, this))
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var HelpTopicsSection_default = HelpTopicsSection;

// src/features/contact/components/HeroSection.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var HeroSection = ({ hero }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
  component: "header",
  sx: (theme) => ({
    py: { xs: 10, md: 14 },
    backgroundColor: theme.palette.mode === "light" ? "rgba(244, 247, 251, 0.6)" : "rgba(8, 14, 26, 0.85)"
  }),
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
      spacing: { xs: 3, md: 4 },
      sx: {
        maxWidth: 840,
        mx: "auto",
        textAlign: { xs: "left", md: "center" }
      },
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
          variant: "display",
          children: hero.title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
          variant: "hero",
          color: "text.secondary",
          children: hero.subtitle
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
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

// node_modules/@mui/icons-material/esm/ScheduleRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ScheduleRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"
}), "ScheduleRounded");

// src/features/contact/components/MentorshipCard.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var MentorshipCard = ({ offer }) => {
  const isFeatured = offer.featured ?? false;
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
    sx: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: isFeatured ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))" : undefined,
      color: (theme) => theme.palette.text.primary
    },
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardContent_default, {
        sx: { flexGrow: 1, px: { xs: 3, md: 3 }, py: { xs: 3, md: 3 } },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
          spacing: 2.5,
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
              direction: "row",
              alignItems: "center",
              spacing: 2,
              sx: { width: "100%" },
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                  variant: "h5",
                  sx: {
                    flexGrow: 1,
                    color: (theme) => theme.palette.text.primary
                  },
                  children: offer.title
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Chip_default, {
                  icon: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ScheduleRounded_default, {}, undefined, false, undefined, this),
                  label: offer.duration,
                  color: isFeatured ? "default" : "primary",
                  sx: {
                    ml: "auto",
                    ...isFeatured && {
                      backgroundColor: "rgba(255,255,255,0.18)",
                      color: "inherit"
                    }
                  }
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "body1",
              sx: {
                color: (theme) => theme.palette.text.secondary,
                lineHeight: 1.65
              },
              children: offer.description
            }, undefined, false, undefined, this),
            offer.note && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "body1",
              sx: {
                color: (theme) => theme.palette.text.secondary,
                lineHeight: 1.65
              },
              children: offer.note
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
        sx: { px: { xs: 3, md: 3 }, pb: { xs: 3, md: 3 }, pt: { xs: 1, md: 0 } },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
          component: "a",
          href: offer.href,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "outlined",
          color: isFeatured ? "secondary" : "primary",
          fullWidth: true,
          sx: {
            minHeight: 44,
            py: 1.25
          },
          children: offer.ctaLabel ?? "Choose a time"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var MentorshipCard_default = MentorshipCard;

// src/features/contact/components/MentorshipSection.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var MentorshipSection = ({ offers }) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
  id: "mentorship",
  sx: {
    py: { xs: 6, md: 8 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
        spacing: 3,
        alignItems: "center",
        textAlign: "center",
        mb: 4,
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "h2",
            children: "Mentorship & Sessions"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
            variant: "h6",
            color: "text.secondary",
            children: "Looking for a mentor or someone to chat with?"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
        container: true,
        spacing: { xs: 4, md: 3 },
        children: offers.map((offer) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
          size: { xs: 12, md: 6 },
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(MentorshipCard_default, {
            offer
          }, undefined, false, undefined, this)
        }, offer.title, false, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
}, undefined, false, undefined, this);
var MentorshipSection_default = MentorshipSection;

// node_modules/@mui/icons-material/esm/AlternateEmailRounded.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var AlternateEmailRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
  d: "M12.72 2.03C6.63 1.6 1.6 6.63 2.03 12.72 2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12-3.4-.49-6.27 2.45-5.66 5.87.34 1.91 1.83 3.49 3.72 3.94 1.84.43 3.59-.16 4.74-1.33.89 1.22 2.67 1.86 4.3 1.21 1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
}), "AlternateEmailRounded");

// src/features/contact/components/ResponseTimeSection.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var ResponseTimeSection = ({ responseTime }) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Box_default, {
  sx: {
    py: { xs: 6, md: 8 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Card_default, {
      sx: { p: { xs: 4, md: 5 } },
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
        spacing: 2,
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Stack_default, {
            direction: "row",
            spacing: 2,
            alignItems: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(AlternateEmailRounded_default, {
                color: "primary"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
                variant: "h4",
                children: responseTime.title
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          responseTime.paragraphs.map((paragraph) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            children: paragraph
          }, paragraph, false, undefined, this))
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var ResponseTimeSection_default = ResponseTimeSection;

// node_modules/@mui/icons-material/esm/GitHub.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var GitHub_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), "GitHub");

// src/features/contact/data/content.ts
var contactHero = {
  title: "Let's Work Together",
  subtitle: "Building meaningful connections through design",
  description: "I'm always open to discussing new projects, creative ideas, mentorship opportunities, or collaborations. Whether you're looking for design guidance, want to explore a product idea, or simply want to connect, I'd love to hear from you."
};
var contactMethods = [
  {
    icon: EmailRounded_default,
    title: "Email",
    description: "For general inquiries, collaboration opportunities, or just to say hello",
    actionLabel: "sadrimasih@gmail.com",
    href: "mailto:sadrimasih@gmail.com"
  },
  {
    icon: Telegram_default,
    title: "Telegram",
    description: "Reach out for a quick chat or to share ideas asynchronously",
    actionLabel: "Message on Telegram",
    href: "https://t.me/masihsadri"
  },
  {
    icon: LinkedIn_default,
    title: "LinkedIn",
    description: "Connect with me professionally and see my latest updates",
    actionLabel: "View Profile",
    href: "https://www.linkedin.com/in/msadri/"
  },
  {
    icon: GitHub_default,
    title: "GitHub",
    description: "Explore my code, experiments, and open-source contributions",
    actionLabel: "Visit GitHub",
    href: "https://github.com/mrsadri"
  }
];
var mentorshipOffers = [
  {
    title: "Exclusive Talk (Free)",
    duration: "20 min",
    description: "We can discuss our career paths and work experiences together.",
    note: "To confirm your session, please donate $1 to a charity of your choice.",
    href: "https://zeeg.me/masihs/letstalk",
    ctaLabel: "Choose a time"
  },
  {
    title: "Design Mentorship with Masih",
    duration: "75 min",
    description: "Ready to take your design skills to the next level? Weekly mentorship sessions are a proven way to learn a new skill and accelerate your growth in UX/UI design.",
    href: "https://zeeg.me/masihs/mentorship",
    ctaLabel: "Set an appointment"
  }
];
var helpTopics = [
  {
    title: "Design Mentorship",
    description: "One-on-one guidance for designers at any stage of their career. Portfolio reviews, skill development, and career advice."
  },
  {
    title: "Portfolio Reviews",
    description: "Get feedback on your case studies, design process, and presentation. Make your portfolio stand out."
  },
  {
    title: "Project Collaboration",
    description: "Interested in working together on a product or design system? Let's discuss opportunities."
  },
  {
    title: "Speaking & Workshops",
    description: "Available for design talks, workshops, or panel discussions about UX design, user safety, and product design."
  }
];
var responseTime = {
  title: "Response Time",
  paragraphs: [
    "I typically respond to emails within 24-48 hours. For mentorship inquiries, please allow a bit more time as I review each request carefully.",
    "If you haven't heard back after 3 days, feel free to send a gentle follow-up."
  ]
};

// src/features/contact/seo.ts
var siteUrl = site_default();
var contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Masih Sadri",
  description: contactHero.description,
  url: `${siteUrl}/contact`,
  mainEntity: contactMethods.map((method) => ({
    "@type": "ContactPoint",
    contactType: method.title,
    url: method.href,
    description: method.description
  })),
  offers: mentorshipOffers.map((offer) => ({
    "@type": "Offer",
    name: offer.title,
    description: offer.description,
    url: offer.href,
    duration: offer.duration
  }))
};
var contactPageMetadata = {
  title: "Contact Masih Sadri — Collaborations, mentorship, and speaking",
  description: "Book mentorship sessions, request collaborations, or reach Masih Sadri directly for senior product design work.",
  canonicalPath: "/contact",
  openGraph: {
    type: "website"
  },
  structuredData: contactStructuredData
};

// src/features/contact/ContactPage.tsx
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var ContactPage = () => {
  const location = useLocation();
  import_react.useEffect(() => {
    if (!location.hash) {
      return;
    }
    const targetId = location.hash.slice(1);
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }
    window.requestAnimationFrame(() => {
      smoothScrollToElement(element, { duration: 900, offset: 16 });
    });
  }, [location.hash]);
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Seo_default, {
        ...contactPageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(HeroSection_default, {
        hero: contactHero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(HelpTopicsSection_default, {
        topics: helpTopics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(MentorshipSection_default, {
        offers: mentorshipOffers
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ContactMethodsSection_default, {
        methods: contactMethods
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ResponseTimeSection_default, {
        responseTime
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ContactPage_default = ContactPage;
export {
  ContactPage_default as default
};

//# debugId=CECEDD33876E49BD64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2NoZWR1bGVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BbHRlcm5hdGVFbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vR2l0SHViLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiQHNoYXJlZC9zZW9cIjtcbmltcG9ydCB7IHNtb290aFNjcm9sbFRvRWxlbWVudCB9IGZyb20gXCJAdXRpbHMvc21vb3RoU2Nyb2xsXCI7XG5pbXBvcnQgQ29udGFjdE1ldGhvZHNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uXCI7XG5pbXBvcnQgSGVscFRvcGljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxwVG9waWNzU2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBNZW50b3JzaGlwU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL01lbnRvcnNoaXBTZWN0aW9uXCI7XG5pbXBvcnQgUmVzcG9uc2VUaW1lU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3BvbnNlVGltZVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNvbnRhY3RIZXJvLFxuICBjb250YWN0TWV0aG9kcyxcbiAgaGVscFRvcGljcyxcbiAgbWVudG9yc2hpcE9mZmVycyxcbiAgcmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbnRhY3RQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRJZCA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfSk7XG4gIH0sIFtsb2NhdGlvbi5oYXNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uY29udGFjdFBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2NvbnRhY3RIZXJvfSAvPlxuICAgICAgPEhlbHBUb3BpY3NTZWN0aW9uIHRvcGljcz17aGVscFRvcGljc30gLz5cbiAgICAgIDxNZW50b3JzaGlwU2VjdGlvbiBvZmZlcnM9e21lbnRvcnNoaXBPZmZlcnN9IC8+XG4gICAgICA8Q29udGFjdE1ldGhvZHNTZWN0aW9uIG1ldGhvZHM9e2NvbnRhY3RNZXRob2RzfSAvPlxuICAgICAgPFJlc3BvbnNlVGltZVNlY3Rpb24gcmVzcG9uc2VUaW1lPXtyZXNwb25zZVRpbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdE1ldGhvZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENvbnRhY3RNZXRob2RzU2VjdGlvblByb3BzID0ge1xuICBtZXRob2RzOiBSZWFkb25seUFycmF5PENvbnRhY3RNZXRob2Q+O1xufTtcblxuY29uc3QgQ29udGFjdE1ldGhvZHNTZWN0aW9uID0gKHsgbWV0aG9kcyB9OiBDb250YWN0TWV0aG9kc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgIHttZXRob2RzLm1hcCgobWV0aG9kKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNNYWlsTGluayA9IG1ldGhvZC5ocmVmLnN0YXJ0c1dpdGgoXCJtYWlsdG86XCIpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0ga2V5PXttZXRob2QudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgY29sb3I6IFwicHJpbWFyeS5tYWluXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0aG9kLmljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e21ldGhvZC50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0aG9kLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXttZXRob2QuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtpc01haWxMaW5rID8gdW5kZWZpbmVkIDogXCJfYmxhbmtcIn1cbiAgICAgICAgICAgICAgICAgICAgcmVsPXtpc01haWxMaW5rID8gdW5kZWZpbmVkIDogXCJub29wZW5lciBub3JlZmVycmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttZXRob2QuYWN0aW9uTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdE1ldGhvZHNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IEhlbHBUb3BpYyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlbHBUb3BpY3NTZWN0aW9uUHJvcHMgPSB7XG4gIHRvcGljczogUmVhZG9ubHlBcnJheTxIZWxwVG9waWM+O1xufTtcblxuY29uc3QgSGVscFRvcGljc1NlY3Rpb24gPSAoeyB0b3BpY3MgfTogSGVscFRvcGljc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gbWI9ezR9PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPldoYXQgSSBDYW4gSGVscCBXaXRoPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge3RvcGljcy5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXt0b3BpYy50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0b3BpYy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dG9waWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBUb3BpY3NTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEhlcm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZXJvU2VjdGlvblByb3BzID0ge1xuICBoZXJvOiBDb250YWN0SGVybztcbn07XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKHsgaGVybyB9OiBIZXJvU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICBweTogeyB4czogMTAsIG1kOiAxNCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIiA/IFwicmdiYSgyNDQsIDI0NywgMjUxLCAwLjYpXCIgOiBcInJnYmEoOCwgMTQsIDI2LCAwLjg1KVwiLFxuICAgIH0pfVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFja1xuICAgICAgICBzcGFjaW5nPXt7IHhzOiAzLCBtZDogNCB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiA4NDAsXG4gICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgIHRleHRBbGlnbjogeyB4czogXCJsZWZ0XCIsIG1kOiBcImNlbnRlclwiIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJkaXNwbGF5XCI+e2hlcm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaGVyb1wiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICB7aGVyby5zdWJ0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICB7aGVyby5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyTTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOG0tLjIyLTEzaC0uMDZjLS40IDAtLjcyLjMyLS43Mi43MnY0LjcyYzAgLjM1LjE4LjY4LjQ5Ljg2bDQuMTUgMi40OWMuMzQuMi43OC4xLjk4LS4yNC4yMS0uMzQuMS0uNzktLjI1LS45OWwtMy44Ny0yLjNWNy43MmMwLS40LS4zMi0uNzItLjcyLS43MlwiXG59KSwgJ1NjaGVkdWxlUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENoaXAsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNjaGVkdWxlUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2NoZWR1bGVSb3VuZGVkXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnRvcnNoaXBPZmZlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIE1lbnRvcnNoaXBDYXJkUHJvcHMgPSB7XG4gIG9mZmVyOiBNZW50b3JzaGlwT2ZmZXI7XG59O1xuXG5jb25zdCBNZW50b3JzaGlwQ2FyZCA9ICh7IG9mZmVyIH06IE1lbnRvcnNoaXBDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgaXNGZWF0dXJlZCA9IG9mZmVyLmZlYXR1cmVkID8/IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBpc0ZlYXR1cmVkXG4gICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTIsNTMsMTQ4LDAuOTIpLCByZ2JhKDMxLDExMSwyMzUsMC44OCkpXCJcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcHg6IHsgeHM6IDMsIG1kOiAzIH0sIHB5OiB7IHhzOiAzLCBtZDogMyB9IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mi41fT5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCIgXG4gICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b2ZmZXIudGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBpY29uPXs8U2NoZWR1bGVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9e29mZmVyLmR1cmF0aW9ufVxuICAgICAgICAgICAgICBjb2xvcj17aXNGZWF0dXJlZCA/IFwiZGVmYXVsdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgbWw6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIC4uLihpc0ZlYXR1cmVkICYmIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjY1LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b2ZmZXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHtvZmZlci5ub3RlICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgY29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjY1LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b2ZmZXIubm90ZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogeyB4czogMywgbWQ6IDMgfSwgcGI6IHsgeHM6IDMsIG1kOiAzIH0sIHB0OiB7IHhzOiAxLCBtZDogMCB9IH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgaHJlZj17b2ZmZXIuaHJlZn1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG1pbkhlaWdodDogNDQsXG4gICAgICAgICAgICBweTogMS4yNSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge29mZmVyLmN0YUxhYmVsID8/IFwiQ2hvb3NlIGEgdGltZVwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudG9yc2hpcENhcmQ7XG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnRvcnNoaXBPZmZlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IE1lbnRvcnNoaXBDYXJkIGZyb20gXCIuL01lbnRvcnNoaXBDYXJkXCI7XG5cbnR5cGUgTWVudG9yc2hpcFNlY3Rpb25Qcm9wcyA9IHtcbiAgb2ZmZXJzOiBSZWFkb25seUFycmF5PE1lbnRvcnNoaXBPZmZlcj47XG59O1xuXG5jb25zdCBNZW50b3JzaGlwU2VjdGlvbiA9ICh7IG9mZmVycyB9OiBNZW50b3JzaGlwU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBpZD1cIm1lbnRvcnNoaXBcIlxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs0fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+TWVudG9yc2hpcCAmIFNlc3Npb25zPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgTG9va2luZyBmb3IgYSBtZW50b3Igb3Igc29tZW9uZSB0byBjaGF0IHdpdGg/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogNCwgbWQ6IDMgfX0+XG4gICAgICAgIHtvZmZlcnMubWFwKChvZmZlcikgPT4gKFxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e29mZmVyLnRpdGxlfT5cbiAgICAgICAgICAgIDxNZW50b3JzaGlwQ2FyZCBvZmZlcj17b2ZmZXJ9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW50b3JzaGlwU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMi43MiAyLjAzQzYuNjMgMS42IDEuNiA2LjYzIDIuMDMgMTIuNzIgMi4zOSAxOC4wMSA3LjAxIDIyIDEyLjMxIDIySDE2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zLjY3Yy0zLjczIDAtNy4xNS0yLjQyLTguMDgtNi4wMy0xLjQ5LTUuOCAzLjkxLTExLjIxIDkuNzEtOS43MUMxNy41OCA1LjE4IDIwIDguNiAyMCAxMi4zM3YxLjFjMCAuNzktLjcxIDEuNTctMS41IDEuNTdzLTEuNS0uNzgtMS41LTEuNTd2LTEuMjVjMC0yLjUxLTEuNzgtNC43Ny00LjI2LTUuMTItMy40LS40OS02LjI3IDIuNDUtNS42NiA1Ljg3LjM0IDEuOTEgMS44MyAzLjQ5IDMuNzIgMy45NCAxLjg0LjQzIDMuNTktLjE2IDQuNzQtMS4zMy44OSAxLjIyIDIuNjcgMS44NiA0LjMgMS4yMSAxLjM0LS41MyAyLjE2LTEuOSAyLjE2LTMuMzR2LTEuMDljMC01LjMxLTMuOTktOS45My05LjI4LTEwLjI5TTEyIDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM1wiXG59KSwgJ0FsdGVybmF0ZUVtYWlsUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWx0ZXJuYXRlRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3BvbnNlVGltZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcyA9IHtcbiAgcmVzcG9uc2VUaW1lOiBSZXNwb25zZVRpbWU7XG59O1xuXG5jb25zdCBSZXNwb25zZVRpbWVTZWN0aW9uID0gKHsgcmVzcG9uc2VUaW1lIH06IFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkIHN4PXt7IHA6IHsgeHM6IDQsIG1kOiA1IH0gfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntyZXNwb25zZVRpbWUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAge3Jlc3BvbnNlVGltZS5wYXJhZ3JhcGhzLm1hcCgocGFyYWdyYXBoKSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e3BhcmFncmFwaH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlVGltZVNlY3Rpb247XG5cblxuIiwKICAgICIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDEuMjdhMTEgMTEgMCAwMC0zLjQ4IDIxLjQ2Yy41NS4wOS43My0uMjguNzMtLjU1di0xLjg0Yy0zLjAzLjY0LTMuNjctMS40Ni0zLjY3LTEuNDYtLjU1LTEuMjktMS4yOC0xLjY1LTEuMjgtMS42NS0uOTItLjY1LjEtLjY1LjEtLjY1IDEuMSAwIDEuNzMgMS4xIDEuNzMgMS4xLjkyIDEuNjUgMi41NyAxLjIgMy4yMS45MmEyIDIgMCAwMS42NC0xLjQ3Yy0yLjQ3LS4yNy01LjA0LTEuMTktNS4wNC01LjUgMC0xLjEuNDYtMi4xIDEuMi0yLjg0YTMuNzYgMy43NiAwIDAxMC0yLjkzcy45MS0uMjggMy4xMSAxLjFjMS44LS40OSAzLjctLjQ5IDUuNSAwIDIuMS0xLjM4IDMuMDItMS4xIDMuMDItMS4xYTMuNzYgMy43NiAwIDAxMCAyLjkzYy44My43NCAxLjIgMS43NCAxLjIgMi45NCAwIDQuMjEtMi41NyA1LjEzLTUuMDQgNS40LjQ1LjM3LjgyLjkyLjgyIDIuMDJ2My4wM2MwIC4yNy4xLjY0LjczLjU1QTExIDExIDAgMDAxMiAxLjI3XCJcbn0pLCAnR2l0SHViJyk7IiwKICAgICJpbXBvcnQgRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFJvdW5kZWRcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YlwiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UZWxlZ3JhbVwiO1xuaW1wb3J0IHR5cGUge1xuICBDb250YWN0SGVybyxcbiAgQ29udGFjdE1ldGhvZCxcbiAgSGVscFRvcGljLFxuICBNZW50b3JzaGlwT2ZmZXIsXG4gIFJlc3BvbnNlVGltZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0SGVybzogQ29udGFjdEhlcm8gPSB7XG4gIHRpdGxlOiBcIkxldCdzIFdvcmsgVG9nZXRoZXJcIixcbiAgc3VidGl0bGU6IFwiQnVpbGRpbmcgbWVhbmluZ2Z1bCBjb25uZWN0aW9ucyB0aHJvdWdoIGRlc2lnblwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkknbSBhbHdheXMgb3BlbiB0byBkaXNjdXNzaW5nIG5ldyBwcm9qZWN0cywgY3JlYXRpdmUgaWRlYXMsIG1lbnRvcnNoaXAgb3Bwb3J0dW5pdGllcywgb3IgY29sbGFib3JhdGlvbnMuIFdoZXRoZXIgeW91J3JlIGxvb2tpbmcgZm9yIGRlc2lnbiBndWlkYW5jZSwgd2FudCB0byBleHBsb3JlIGEgcHJvZHVjdCBpZGVhLCBvciBzaW1wbHkgd2FudCB0byBjb25uZWN0LCBJJ2QgbG92ZSB0byBoZWFyIGZyb20geW91LlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RNZXRob2RzOiBSZWFkb25seUFycmF5PENvbnRhY3RNZXRob2Q+ID0gW1xuICB7XG4gICAgaWNvbjogRW1haWxSb3VuZGVkSWNvbixcbiAgICB0aXRsZTogXCJFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvciBnZW5lcmFsIGlucXVpcmllcywgY29sbGFib3JhdGlvbiBvcHBvcnR1bml0aWVzLCBvciBqdXN0IHRvIHNheSBoZWxsb1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcInNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgaHJlZjogXCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgfSxcbiAge1xuICAgIGljb246IFRlbGVncmFtSWNvbixcbiAgICB0aXRsZTogXCJUZWxlZ3JhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlYWNoIG91dCBmb3IgYSBxdWljayBjaGF0IG9yIHRvIHNoYXJlIGlkZWFzIGFzeW5jaHJvbm91c2x5XCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiTWVzc2FnZSBvbiBUZWxlZ3JhbVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly90Lm1lL21hc2loc2FkcmlcIixcbiAgfSxcbiAge1xuICAgIGljb246IExpbmtlZEluSWNvbixcbiAgICB0aXRsZTogXCJMaW5rZWRJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbm5lY3Qgd2l0aCBtZSBwcm9mZXNzaW9uYWxseSBhbmQgc2VlIG15IGxhdGVzdCB1cGRhdGVzXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiVmlldyBQcm9maWxlXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogR2l0SHViSWNvbixcbiAgICB0aXRsZTogXCJHaXRIdWJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIG15IGNvZGUsIGV4cGVyaW1lbnRzLCBhbmQgb3Blbi1zb3VyY2UgY29udHJpYnV0aW9uc1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcIlZpc2l0IEdpdEh1YlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21yc2FkcmlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBtZW50b3JzaGlwT2ZmZXJzOiBSZWFkb25seUFycmF5PE1lbnRvcnNoaXBPZmZlcj4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJFeGNsdXNpdmUgVGFsayAoRnJlZSlcIixcbiAgICBkdXJhdGlvbjogXCIyMCBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZSBjYW4gZGlzY3VzcyBvdXIgY2FyZWVyIHBhdGhzIGFuZCB3b3JrIGV4cGVyaWVuY2VzIHRvZ2V0aGVyLlwiLFxuICAgIG5vdGU6IFwiVG8gY29uZmlybSB5b3VyIHNlc3Npb24sIHBsZWFzZSBkb25hdGUgJDEgdG8gYSBjaGFyaXR5IG9mIHlvdXIgY2hvaWNlLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9sZXRzdGFsa1wiLFxuICAgIGN0YUxhYmVsOiBcIkNob29zZSBhIHRpbWVcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBNZW50b3JzaGlwIHdpdGggTWFzaWhcIixcbiAgICBkdXJhdGlvbjogXCI3NSBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVhZHkgdG8gdGFrZSB5b3VyIGRlc2lnbiBza2lsbHMgdG8gdGhlIG5leHQgbGV2ZWw/IFdlZWtseSBtZW50b3JzaGlwIHNlc3Npb25zIGFyZSBhIHByb3ZlbiB3YXkgdG8gbGVhcm4gYSBuZXcgc2tpbGwgYW5kIGFjY2VsZXJhdGUgeW91ciBncm93dGggaW4gVVgvVUkgZGVzaWduLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9tZW50b3JzaGlwXCIsXG4gICAgY3RhTGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaGVscFRvcGljczogUmVhZG9ubHlBcnJheTxIZWxwVG9waWM+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIE1lbnRvcnNoaXBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT25lLW9uLW9uZSBndWlkYW5jZSBmb3IgZGVzaWduZXJzIGF0IGFueSBzdGFnZSBvZiB0aGVpciBjYXJlZXIuIFBvcnRmb2xpbyByZXZpZXdzLCBza2lsbCBkZXZlbG9wbWVudCwgYW5kIGNhcmVlciBhZHZpY2UuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3J0Zm9saW8gUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgZmVlZGJhY2sgb24geW91ciBjYXNlIHN0dWRpZXMsIGRlc2lnbiBwcm9jZXNzLCBhbmQgcHJlc2VudGF0aW9uLiBNYWtlIHlvdXIgcG9ydGZvbGlvIHN0YW5kIG91dC5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2plY3QgQ29sbGFib3JhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJbnRlcmVzdGVkIGluIHdvcmtpbmcgdG9nZXRoZXIgb24gYSBwcm9kdWN0IG9yIGRlc2lnbiBzeXN0ZW0/IExldCdzIGRpc2N1c3Mgb3Bwb3J0dW5pdGllcy5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWFraW5nICYgV29ya3Nob3BzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkF2YWlsYWJsZSBmb3IgZGVzaWduIHRhbGtzLCB3b3Jrc2hvcHMsIG9yIHBhbmVsIGRpc2N1c3Npb25zIGFib3V0IFVYIGRlc2lnbiwgdXNlciBzYWZldHksIGFuZCBwcm9kdWN0IGRlc2lnbi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZSA9IHtcbiAgdGl0bGU6IFwiUmVzcG9uc2UgVGltZVwiLFxuICBwYXJhZ3JhcGhzOiBbXG4gICAgXCJJIHR5cGljYWxseSByZXNwb25kIHRvIGVtYWlscyB3aXRoaW4gMjQtNDggaG91cnMuIEZvciBtZW50b3JzaGlwIGlucXVpcmllcywgcGxlYXNlIGFsbG93IGEgYml0IG1vcmUgdGltZSBhcyBJIHJldmlldyBlYWNoIHJlcXVlc3QgY2FyZWZ1bGx5LlwiLFxuICAgIFwiSWYgeW91IGhhdmVuJ3QgaGVhcmQgYmFjayBhZnRlciAzIGRheXMsIGZlZWwgZnJlZSB0byBzZW5kIGEgZ2VudGxlIGZvbGxvdy11cC5cIixcbiAgXSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiQHNoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCJAc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGNvbnRhY3RIZXJvLCBjb250YWN0TWV0aG9kcywgbWVudG9yc2hpcE9mZmVycyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBjb250YWN0U3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDb250YWN0UGFnZVwiLFxuICBuYW1lOiBcIkNvbnRhY3QgTWFzaWggU2FkcmlcIixcbiAgZGVzY3JpcHRpb246IGNvbnRhY3RIZXJvLmRlc2NyaXB0aW9uLFxuICB1cmw6IGAke3NpdGVVcmx9L2NvbnRhY3RgLFxuICBtYWluRW50aXR5OiBjb250YWN0TWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4gKHtcbiAgICBcIkB0eXBlXCI6IFwiQ29udGFjdFBvaW50XCIsXG4gICAgY29udGFjdFR5cGU6IG1ldGhvZC50aXRsZSxcbiAgICB1cmw6IG1ldGhvZC5ocmVmLFxuICAgIGRlc2NyaXB0aW9uOiBtZXRob2QuZGVzY3JpcHRpb24sXG4gIH0pKSxcbiAgb2ZmZXJzOiBtZW50b3JzaGlwT2ZmZXJzLm1hcCgob2ZmZXIpID0+ICh7XG4gICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgbmFtZTogb2ZmZXIudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IG9mZmVyLmRlc2NyaXB0aW9uLFxuICAgIHVybDogb2ZmZXIuaHJlZixcbiAgICBkdXJhdGlvbjogb2ZmZXIuZHVyYXRpb24sXG4gIH0pKSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkNvbnRhY3QgTWFzaWggU2Fkcmkg4oCUIENvbGxhYm9yYXRpb25zLCBtZW50b3JzaGlwLCBhbmQgc3BlYWtpbmdcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJCb29rIG1lbnRvcnNoaXAgc2Vzc2lvbnMsIHJlcXVlc3QgY29sbGFib3JhdGlvbnMsIG9yIHJlYWNoIE1hc2loIFNhZHJpIGRpcmVjdGx5IGZvciBzZW5pb3IgcHJvZHVjdCBkZXNpZ24gd29yay5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY29udGFjdFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGNvbnRhY3RTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
