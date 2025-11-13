import {
  smoothScrollToElement
} from "./chunk-3v4zq8dh.js";
import {
  Telegram_default
} from "./chunk-htjd0bqe.js";
import {
  LinkedIn_default
} from "./chunk-9kthbtsd.js";
import {
  EmailRounded_default
} from "./chunk-w1484txq.js";
import"./chunk-56dhb304.js";
import {
  Seo_default,
  site_default
} from "./chunk-4q5mgts6.js";
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
} from "./chunk-pzn0e5q4.js";

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

//# debugId=DF8308BF4221E17E64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2NoZWR1bGVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BbHRlcm5hdGVFbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vR2l0SHViLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsVG9FbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Ntb290aFNjcm9sbFwiO1xuaW1wb3J0IENvbnRhY3RNZXRob2RzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RNZXRob2RzU2VjdGlvblwiO1xuaW1wb3J0IEhlbHBUb3BpY3NTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVscFRvcGljc1NlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgTWVudG9yc2hpcFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9NZW50b3JzaGlwU2VjdGlvblwiO1xuaW1wb3J0IFJlc3BvbnNlVGltZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uXCI7XG5pbXBvcnQge1xuICBjb250YWN0SGVybyxcbiAgY29udGFjdE1ldGhvZHMsXG4gIGhlbHBUb3BpY3MsXG4gIG1lbnRvcnNoaXBPZmZlcnMsXG4gIHJlc3BvbnNlVGltZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyBjb250YWN0UGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5jb25zdCBDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhdGlvbi5oYXNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH0pO1xuICB9LCBbbG9jYXRpb24uaGFzaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLmNvbnRhY3RQYWdlTWV0YWRhdGF9IC8+XG5cbiAgICAgIDxIZXJvU2VjdGlvbiBoZXJvPXtjb250YWN0SGVyb30gLz5cbiAgICAgIDxIZWxwVG9waWNzU2VjdGlvbiB0b3BpY3M9e2hlbHBUb3BpY3N9IC8+XG4gICAgICA8TWVudG9yc2hpcFNlY3Rpb24gb2ZmZXJzPXttZW50b3JzaGlwT2ZmZXJzfSAvPlxuICAgICAgPENvbnRhY3RNZXRob2RzU2VjdGlvbiBtZXRob2RzPXtjb250YWN0TWV0aG9kc30gLz5cbiAgICAgIDxSZXNwb25zZVRpbWVTZWN0aW9uIHJlc3BvbnNlVGltZT17cmVzcG9uc2VUaW1lfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RNZXRob2QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDb250YWN0TWV0aG9kc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0aG9kczogUmVhZG9ubHlBcnJheTxDb250YWN0TWV0aG9kPjtcbn07XG5cbmNvbnN0IENvbnRhY3RNZXRob2RzU2VjdGlvbiA9ICh7IG1ldGhvZHMgfTogQ29udGFjdE1ldGhvZHNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICB7bWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzTWFpbExpbmsgPSBtZXRob2QuaHJlZi5zdGFydHNXaXRoKFwibWFpbHRvOlwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19IGtleT17bWV0aG9kLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGNvbG9yOiBcInByaW1hcnkubWFpblwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGhvZC5pY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnttZXRob2QudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge21ldGhvZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWV0aG9kLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17aXNNYWlsTGluayA/IHVuZGVmaW5lZCA6IFwiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgICAgIHJlbD17aXNNYWlsTGluayA/IHVuZGVmaW5lZCA6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwifVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWV0aG9kLmFjdGlvbkxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RNZXRob2RzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBIZWxwVG9waWMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZWxwVG9waWNzU2VjdGlvblByb3BzID0ge1xuICB0b3BpY3M6IFJlYWRvbmx5QXJyYXk8SGVscFRvcGljPjtcbn07XG5cbmNvbnN0IEhlbHBUb3BpY3NTZWN0aW9uID0gKHsgdG9waWNzIH06IEhlbHBUb3BpY3NTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IG1iPXs0fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5XaGF0IEkgQ2FuIEhlbHAgV2l0aDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHt0b3BpY3MubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17dG9waWMudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57dG9waWMudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RvcGljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwVG9waWNzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogQ29udGFjdEhlcm87XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwiaGVhZGVyXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC42KVwiIDogXCJyZ2JhKDgsIDE0LCAyNiwgMC44NSlcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogODQwLFxuICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwibGVmdFwiLCBtZDogXCJjZW50ZXJcIiB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheVwiPntoZXJvLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2hlcm8uc3VidGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAge2hlcm8uZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMk0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDhtLS4yMi0xM2gtLjA2Yy0uNCAwLS43Mi4zMi0uNzIuNzJ2NC43MmMwIC4zNS4xOC42OC40OS44Nmw0LjE1IDIuNDljLjM0LjIuNzguMS45OC0uMjQuMjEtLjM0LjEtLjc5LS4yNS0uOTlsLTMuODctMi4zVjcuNzJjMC0uNC0uMzItLjcyLS43Mi0uNzJcIlxufSksICdTY2hlZHVsZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDaGlwLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBTY2hlZHVsZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NjaGVkdWxlUm91bmRlZFwiO1xuaW1wb3J0IHR5cGUgeyBNZW50b3JzaGlwT2ZmZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBNZW50b3JzaGlwQ2FyZFByb3BzID0ge1xuICBvZmZlcjogTWVudG9yc2hpcE9mZmVyO1xufTtcblxuY29uc3QgTWVudG9yc2hpcENhcmQgPSAoeyBvZmZlciB9OiBNZW50b3JzaGlwQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBvZmZlci5mZWF0dXJlZCA/PyBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogaXNGZWF0dXJlZFxuICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyLDUzLDE0OCwwLjkyKSwgcmdiYSgzMSwxMTEsMjM1LDAuODgpKVwiXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHB4OiB7IHhzOiAzLCBtZDogMyB9LCBweTogeyB4czogMywgbWQ6IDMgfSB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezIuNX0+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiIFxuICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29mZmVyLnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgaWNvbj17PFNjaGVkdWxlUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIGxhYmVsPXtvZmZlci5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcImRlZmF1bHRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIG1sOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAuLi4oaXNGZWF0dXJlZCAmJiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjE4KVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgY29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42NSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29mZmVyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7b2ZmZXIubm90ZSAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgIGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS42NSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29mZmVyLm5vdGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IHsgeHM6IDMsIG1kOiAzIH0sIHBiOiB7IHhzOiAzLCBtZDogMyB9LCBwdDogeyB4czogMSwgbWQ6IDAgfSB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgIGhyZWY9e29mZmVyLmhyZWZ9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIGNvbG9yPXtpc0ZlYXR1cmVkID8gXCJzZWNvbmRhcnlcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgcHk6IDEuMjUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtvZmZlci5jdGFMYWJlbCA/PyBcIkNob29zZSBhIHRpbWVcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnRvcnNoaXBDYXJkO1xuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBNZW50b3JzaGlwT2ZmZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBNZW50b3JzaGlwQ2FyZCBmcm9tIFwiLi9NZW50b3JzaGlwQ2FyZFwiO1xuXG50eXBlIE1lbnRvcnNoaXBTZWN0aW9uUHJvcHMgPSB7XG4gIG9mZmVyczogUmVhZG9ubHlBcnJheTxNZW50b3JzaGlwT2ZmZXI+O1xufTtcblxuY29uc3QgTWVudG9yc2hpcFNlY3Rpb24gPSAoeyBvZmZlcnMgfTogTWVudG9yc2hpcFNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgaWQ9XCJtZW50b3JzaGlwXCJcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk1lbnRvcnNoaXAgJiBTZXNzaW9uczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIExvb2tpbmcgZm9yIGEgbWVudG9yIG9yIHNvbWVvbmUgdG8gY2hhdCB3aXRoP1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDQsIG1kOiAzIH19PlxuICAgICAgICB7b2ZmZXJzLm1hcCgob2ZmZXIpID0+IChcbiAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtvZmZlci50aXRsZX0+XG4gICAgICAgICAgICA8TWVudG9yc2hpcENhcmQgb2ZmZXI9e29mZmVyfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudG9yc2hpcFNlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIuNzIgMi4wM0M2LjYzIDEuNiAxLjYgNi42MyAyLjAzIDEyLjcyIDIuMzkgMTguMDEgNy4wMSAyMiAxMi4zMSAyMkgxNmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMWgtMy42N2MtMy43MyAwLTcuMTUtMi40Mi04LjA4LTYuMDMtMS40OS01LjggMy45MS0xMS4yMSA5LjcxLTkuNzFDMTcuNTggNS4xOCAyMCA4LjYgMjAgMTIuMzN2MS4xYzAgLjc5LS43MSAxLjU3LTEuNSAxLjU3cy0xLjUtLjc4LTEuNS0xLjU3di0xLjI1YzAtMi41MS0xLjc4LTQuNzctNC4yNi01LjEyLTMuNC0uNDktNi4yNyAyLjQ1LTUuNjYgNS44Ny4zNCAxLjkxIDEuODMgMy40OSAzLjcyIDMuOTQgMS44NC40MyAzLjU5LS4xNiA0Ljc0LTEuMzMuODkgMS4yMiAyLjY3IDEuODYgNC4zIDEuMjEgMS4zNC0uNTMgMi4xNi0xLjkgMi4xNi0zLjM0di0xLjA5YzAtNS4zMS0zLjk5LTkuOTMtOS4yOC0xMC4yOU0xMiAxNWMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDNcIlxufSksICdBbHRlcm5hdGVFbWFpbFJvdW5kZWQnKTsiLAogICAgImltcG9ydCBBbHRlcm5hdGVFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FsdGVybmF0ZUVtYWlsUm91bmRlZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBSZXNwb25zZVRpbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBSZXNwb25zZVRpbWVTZWN0aW9uUHJvcHMgPSB7XG4gIHJlc3BvbnNlVGltZTogUmVzcG9uc2VUaW1lO1xufTtcblxuY29uc3QgUmVzcG9uc2VUaW1lU2VjdGlvbiA9ICh7IHJlc3BvbnNlVGltZSB9OiBSZXNwb25zZVRpbWVTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q2FyZCBzeD17eyBwOiB7IHhzOiA0LCBtZDogNSB9IH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxBbHRlcm5hdGVFbWFpbFJvdW5kZWRJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57cmVzcG9uc2VUaW1lLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIHtyZXNwb25zZVRpbWUucGFyYWdyYXBocy5tYXAoKHBhcmFncmFwaCkgPT4gKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkga2V5PXtwYXJhZ3JhcGh9IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZVRpbWVTZWN0aW9uO1xuXG5cbiIsCiAgICAiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAxLjI3YTExIDExIDAgMDAtMy40OCAyMS40NmMuNTUuMDkuNzMtLjI4LjczLS41NXYtMS44NGMtMy4wMy42NC0zLjY3LTEuNDYtMy42Ny0xLjQ2LS41NS0xLjI5LTEuMjgtMS42NS0xLjI4LTEuNjUtLjkyLS42NS4xLS42NS4xLS42NSAxLjEgMCAxLjczIDEuMSAxLjczIDEuMS45MiAxLjY1IDIuNTcgMS4yIDMuMjEuOTJhMiAyIDAgMDEuNjQtMS40N2MtMi40Ny0uMjctNS4wNC0xLjE5LTUuMDQtNS41IDAtMS4xLjQ2LTIuMSAxLjItMi44NGEzLjc2IDMuNzYgMCAwMTAtMi45M3MuOTEtLjI4IDMuMTEgMS4xYzEuOC0uNDkgMy43LS40OSA1LjUgMCAyLjEtMS4zOCAzLjAyLTEuMSAzLjAyLTEuMWEzLjc2IDMuNzYgMCAwMTAgMi45M2MuODMuNzQgMS4yIDEuNzQgMS4yIDIuOTQgMCA0LjIxLTIuNTcgNS4xMy01LjA0IDUuNC40NS4zNy44Mi45Mi44MiAyLjAydjMuMDNjMCAuMjcuMS42NC43My41NUExMSAxMSAwIDAwMTIgMS4yN1wiXG59KSwgJ0dpdEh1YicpOyIsCiAgICAiaW1wb3J0IEVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HaXRIdWJcIjtcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua2VkSW5cIjtcbmltcG9ydCBUZWxlZ3JhbUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVGVsZWdyYW1cIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29udGFjdEhlcm8sXG4gIENvbnRhY3RNZXRob2QsXG4gIEhlbHBUb3BpYyxcbiAgTWVudG9yc2hpcE9mZmVyLFxuICBSZXNwb25zZVRpbWUsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdEhlcm86IENvbnRhY3RIZXJvID0ge1xuICB0aXRsZTogXCJMZXQncyBXb3JrIFRvZ2V0aGVyXCIsXG4gIHN1YnRpdGxlOiBcIkJ1aWxkaW5nIG1lYW5pbmdmdWwgY29ubmVjdGlvbnMgdGhyb3VnaCBkZXNpZ25cIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJJJ20gYWx3YXlzIG9wZW4gdG8gZGlzY3Vzc2luZyBuZXcgcHJvamVjdHMsIGNyZWF0aXZlIGlkZWFzLCBtZW50b3JzaGlwIG9wcG9ydHVuaXRpZXMsIG9yIGNvbGxhYm9yYXRpb25zLiBXaGV0aGVyIHlvdSdyZSBsb29raW5nIGZvciBkZXNpZ24gZ3VpZGFuY2UsIHdhbnQgdG8gZXhwbG9yZSBhIHByb2R1Y3QgaWRlYSwgb3Igc2ltcGx5IHdhbnQgdG8gY29ubmVjdCwgSSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWN0TWV0aG9kczogUmVhZG9ubHlBcnJheTxDb250YWN0TWV0aG9kPiA9IFtcbiAge1xuICAgIGljb246IEVtYWlsUm91bmRlZEljb24sXG4gICAgdGl0bGU6IFwiRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGb3IgZ2VuZXJhbCBpbnF1aXJpZXMsIGNvbGxhYm9yYXRpb24gb3Bwb3J0dW5pdGllcywgb3IganVzdCB0byBzYXkgaGVsbG9cIixcbiAgICBhY3Rpb25MYWJlbDogXCJzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICAgIGhyZWY6IFwibWFpbHRvOnNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBUZWxlZ3JhbUljb24sXG4gICAgdGl0bGU6IFwiVGVsZWdyYW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFjaCBvdXQgZm9yIGEgcXVpY2sgY2hhdCBvciB0byBzaGFyZSBpZGVhcyBhc3luY2hyb25vdXNseVwiLFxuICAgIGFjdGlvbkxhYmVsOiBcIk1lc3NhZ2Ugb24gVGVsZWdyYW1cIixcbiAgICBocmVmOiBcImh0dHBzOi8vdC5tZS9tYXNpaHNhZHJpXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBMaW5rZWRJbkljb24sXG4gICAgdGl0bGU6IFwiTGlua2VkSW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25uZWN0IHdpdGggbWUgcHJvZmVzc2lvbmFsbHkgYW5kIHNlZSBteSBsYXRlc3QgdXBkYXRlc1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcIlZpZXcgUHJvZmlsZVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIixcbiAgfSxcbiAge1xuICAgIGljb246IEdpdEh1Ykljb24sXG4gICAgdGl0bGU6IFwiR2l0SHViXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwbG9yZSBteSBjb2RlLCBleHBlcmltZW50cywgYW5kIG9wZW4tc291cmNlIGNvbnRyaWJ1dGlvbnNcIixcbiAgICBhY3Rpb25MYWJlbDogXCJWaXNpdCBHaXRIdWJcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tcnNhZHJpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbWVudG9yc2hpcE9mZmVyczogUmVhZG9ubHlBcnJheTxNZW50b3JzaGlwT2ZmZXI+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRXhjbHVzaXZlIFRhbGsgKEZyZWUpXCIsXG4gICAgZHVyYXRpb246IFwiMjAgbWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2UgY2FuIGRpc2N1c3Mgb3VyIGNhcmVlciBwYXRocyBhbmQgd29yayBleHBlcmllbmNlcyB0b2dldGhlci5cIixcbiAgICBub3RlOiBcIlRvIGNvbmZpcm0geW91ciBzZXNzaW9uLCBwbGVhc2UgZG9uYXRlICQxIHRvIGEgY2hhcml0eSBvZiB5b3VyIGNob2ljZS5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vemVlZy5tZS9tYXNpaHMvbGV0c3RhbGtcIixcbiAgICBjdGFMYWJlbDogXCJDaG9vc2UgYSB0aW1lXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gTWVudG9yc2hpcCB3aXRoIE1hc2loXCIsXG4gICAgZHVyYXRpb246IFwiNzUgbWluXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlYWR5IHRvIHRha2UgeW91ciBkZXNpZ24gc2tpbGxzIHRvIHRoZSBuZXh0IGxldmVsPyBXZWVrbHkgbWVudG9yc2hpcCBzZXNzaW9ucyBhcmUgYSBwcm92ZW4gd2F5IHRvIGxlYXJuIGEgbmV3IHNraWxsIGFuZCBhY2NlbGVyYXRlIHlvdXIgZ3Jvd3RoIGluIFVYL1VJIGRlc2lnbi5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vemVlZy5tZS9tYXNpaHMvbWVudG9yc2hpcFwiLFxuICAgIGN0YUxhYmVsOiBcIlNldCBhbiBhcHBvaW50bWVudFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGhlbHBUb3BpY3M6IFJlYWRvbmx5QXJyYXk8SGVscFRvcGljPiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBNZW50b3JzaGlwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk9uZS1vbi1vbmUgZ3VpZGFuY2UgZm9yIGRlc2lnbmVycyBhdCBhbnkgc3RhZ2Ugb2YgdGhlaXIgY2FyZWVyLiBQb3J0Zm9saW8gcmV2aWV3cywgc2tpbGwgZGV2ZWxvcG1lbnQsIGFuZCBjYXJlZXIgYWR2aWNlLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUG9ydGZvbGlvIFJldmlld3NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IGZlZWRiYWNrIG9uIHlvdXIgY2FzZSBzdHVkaWVzLCBkZXNpZ24gcHJvY2VzcywgYW5kIHByZXNlbnRhdGlvbi4gTWFrZSB5b3VyIHBvcnRmb2xpbyBzdGFuZCBvdXQuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0IENvbGxhYm9yYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSW50ZXJlc3RlZCBpbiB3b3JraW5nIHRvZ2V0aGVyIG9uIGEgcHJvZHVjdCBvciBkZXNpZ24gc3lzdGVtPyBMZXQncyBkaXNjdXNzIG9wcG9ydHVuaXRpZXMuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTcGVha2luZyAmIFdvcmtzaG9wc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBdmFpbGFibGUgZm9yIGRlc2lnbiB0YWxrcywgd29ya3Nob3BzLCBvciBwYW5lbCBkaXNjdXNzaW9ucyBhYm91dCBVWCBkZXNpZ24sIHVzZXIgc2FmZXR5LCBhbmQgcHJvZHVjdCBkZXNpZ24uXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcmVzcG9uc2VUaW1lOiBSZXNwb25zZVRpbWUgPSB7XG4gIHRpdGxlOiBcIlJlc3BvbnNlIFRpbWVcIixcbiAgcGFyYWdyYXBoczogW1xuICAgIFwiSSB0eXBpY2FsbHkgcmVzcG9uZCB0byBlbWFpbHMgd2l0aGluIDI0LTQ4IGhvdXJzLiBGb3IgbWVudG9yc2hpcCBpbnF1aXJpZXMsIHBsZWFzZSBhbGxvdyBhIGJpdCBtb3JlIHRpbWUgYXMgSSByZXZpZXcgZWFjaCByZXF1ZXN0IGNhcmVmdWxseS5cIixcbiAgICBcIklmIHlvdSBoYXZlbid0IGhlYXJkIGJhY2sgYWZ0ZXIgMyBkYXlzLCBmZWVsIGZyZWUgdG8gc2VuZCBhIGdlbnRsZSBmb2xsb3ctdXAuXCIsXG4gIF0sXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgY29udGFjdEhlcm8sIGNvbnRhY3RNZXRob2RzLCBtZW50b3JzaGlwT2ZmZXJzIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IGNvbnRhY3RTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIkNvbnRhY3RQYWdlXCIsXG4gIG5hbWU6IFwiQ29udGFjdCBNYXNpaCBTYWRyaVwiLFxuICBkZXNjcmlwdGlvbjogY29udGFjdEhlcm8uZGVzY3JpcHRpb24sXG4gIHVybDogYCR7c2l0ZVVybH0vY29udGFjdGAsXG4gIG1haW5FbnRpdHk6IGNvbnRhY3RNZXRob2RzLm1hcCgobWV0aG9kKSA9PiAoe1xuICAgIFwiQHR5cGVcIjogXCJDb250YWN0UG9pbnRcIixcbiAgICBjb250YWN0VHlwZTogbWV0aG9kLnRpdGxlLFxuICAgIHVybDogbWV0aG9kLmhyZWYsXG4gICAgZGVzY3JpcHRpb246IG1ldGhvZC5kZXNjcmlwdGlvbixcbiAgfSkpLFxuICBvZmZlcnM6IG1lbnRvcnNoaXBPZmZlcnMubWFwKChvZmZlcikgPT4gKHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICBuYW1lOiBvZmZlci50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogb2ZmZXIuZGVzY3JpcHRpb24sXG4gICAgdXJsOiBvZmZlci5ocmVmLFxuICAgIGR1cmF0aW9uOiBvZmZlci5kdXJhdGlvbixcbiAgfSkpLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RQYWdlTWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiQ29udGFjdCBNYXNpaCBTYWRyaSDigJQgQ29sbGFib3JhdGlvbnMsIG1lbnRvcnNoaXAsIGFuZCBzcGVha2luZ1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkJvb2sgbWVudG9yc2hpcCBzZXNzaW9ucywgcmVxdWVzdCBjb2xsYWJvcmF0aW9ucywgb3IgcmVhY2ggTWFzaWggU2FkcmkgZGlyZWN0bHkgZm9yIHNlbmlvciBwcm9kdWN0IGRlc2lnbiB3b3JrLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9jb250YWN0XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogY29udGFjdFN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7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
