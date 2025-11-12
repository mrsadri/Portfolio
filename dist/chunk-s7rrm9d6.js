import {
  Telegram_default,
  smoothScrollToElement
} from "./chunk-ch0gm56j.js";
import {
  EmailRounded_default,
  LinkedIn_default
} from "./chunk-ja5rpkr4.js";
import"./chunk-56dhb304.js";
import {
  Seo_default,
  site_default
} from "./chunk-fvvawq8m.js";
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
} from "./chunk-a0eztsys.js";

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
        sx: { flexGrow: 1 },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
          spacing: 2,
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
              sx: { color: (theme) => theme.palette.text.secondary },
              children: offer.description
            }, undefined, false, undefined, this),
            offer.note && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "body1",
              sx: { color: (theme) => theme.palette.text.secondary },
              children: offer.note
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
        sx: { px: 3, pb: 3, pt: 0 },
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
          component: "a",
          href: offer.href,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "outlined",
          color: isFeatured ? "secondary" : "primary",
          fullWidth: true,
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
        spacing: 3,
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

//# debugId=15C8474E6754279764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2NoZWR1bGVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BbHRlcm5hdGVFbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vR2l0SHViLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IHsgc21vb3RoU2Nyb2xsVG9FbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Ntb290aFNjcm9sbFwiO1xuaW1wb3J0IENvbnRhY3RNZXRob2RzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RNZXRob2RzU2VjdGlvblwiO1xuaW1wb3J0IEhlbHBUb3BpY3NTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVscFRvcGljc1NlY3Rpb25cIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgTWVudG9yc2hpcFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9NZW50b3JzaGlwU2VjdGlvblwiO1xuaW1wb3J0IFJlc3BvbnNlVGltZVNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uXCI7XG5pbXBvcnQge1xuICBjb250YWN0SGVybyxcbiAgY29udGFjdE1ldGhvZHMsXG4gIGhlbHBUb3BpY3MsXG4gIG1lbnRvcnNoaXBPZmZlcnMsXG4gIHJlc3BvbnNlVGltZSxcbn0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5pbXBvcnQgeyBjb250YWN0UGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vc2VvXCI7XG5jb25zdCBDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhdGlvbi5oYXNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCwgeyBkdXJhdGlvbjogOTAwLCBvZmZzZXQ6IDE2IH0pO1xuICAgIH0pO1xuICB9LCBbbG9jYXRpb24uaGFzaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLmNvbnRhY3RQYWdlTWV0YWRhdGF9IC8+XG5cbiAgICAgIDxIZXJvU2VjdGlvbiBoZXJvPXtjb250YWN0SGVyb30gLz5cbiAgICAgIDxIZWxwVG9waWNzU2VjdGlvbiB0b3BpY3M9e2hlbHBUb3BpY3N9IC8+XG4gICAgICA8TWVudG9yc2hpcFNlY3Rpb24gb2ZmZXJzPXttZW50b3JzaGlwT2ZmZXJzfSAvPlxuICAgICAgPENvbnRhY3RNZXRob2RzU2VjdGlvbiBtZXRob2RzPXtjb250YWN0TWV0aG9kc30gLz5cbiAgICAgIDxSZXNwb25zZVRpbWVTZWN0aW9uIHJlc3BvbnNlVGltZT17cmVzcG9uc2VUaW1lfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RNZXRob2QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDb250YWN0TWV0aG9kc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0aG9kczogUmVhZG9ubHlBcnJheTxDb250YWN0TWV0aG9kPjtcbn07XG5cbmNvbnN0IENvbnRhY3RNZXRob2RzU2VjdGlvbiA9ICh7IG1ldGhvZHMgfTogQ29udGFjdE1ldGhvZHNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICB7bWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzTWFpbExpbmsgPSBtZXRob2QuaHJlZi5zdGFydHNXaXRoKFwibWFpbHRvOlwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19IGtleT17bWV0aG9kLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezEuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGNvbG9yOiBcInByaW1hcnkubWFpblwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGhvZC5pY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnttZXRob2QudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge21ldGhvZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWV0aG9kLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17aXNNYWlsTGluayA/IHVuZGVmaW5lZCA6IFwiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgICAgIHJlbD17aXNNYWlsTGluayA/IHVuZGVmaW5lZCA6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwifVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWV0aG9kLmFjdGlvbkxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RNZXRob2RzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBIZWxwVG9waWMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZWxwVG9waWNzU2VjdGlvblByb3BzID0ge1xuICB0b3BpY3M6IFJlYWRvbmx5QXJyYXk8SGVscFRvcGljPjtcbn07XG5cbmNvbnN0IEhlbHBUb3BpY3NTZWN0aW9uID0gKHsgdG9waWNzIH06IEhlbHBUb3BpY3NTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IG1iPXs0fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5XaGF0IEkgQ2FuIEhlbHAgV2l0aDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHt0b3BpY3MubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17dG9waWMudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57dG9waWMudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RvcGljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwVG9waWNzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogQ29udGFjdEhlcm87XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwiaGVhZGVyXCJcbiAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgcHk6IHsgeHM6IDEwLCBtZDogMTQgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCIgPyBcInJnYmEoMjQ0LCAyNDcsIDI1MSwgMC42KVwiIDogXCJyZ2JhKDgsIDE0LCAyNiwgMC44NSlcIixcbiAgICB9KX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3BhY2luZz17eyB4czogMywgbWQ6IDQgfX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogODQwLFxuICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6IFwibGVmdFwiLCBtZDogXCJjZW50ZXJcIiB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheVwiPntoZXJvLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImhlcm9cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2hlcm8uc3VidGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAge2hlcm8uZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMk0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDhtLS4yMi0xM2gtLjA2Yy0uNCAwLS43Mi4zMi0uNzIuNzJ2NC43MmMwIC4zNS4xOC42OC40OS44Nmw0LjE1IDIuNDljLjM0LjIuNzguMS45OC0uMjQuMjEtLjM0LjEtLjc5LS4yNS0uOTlsLTMuODctMi4zVjcuNzJjMC0uNC0uMzItLjcyLS43Mi0uNzJcIlxufSksICdTY2hlZHVsZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDaGlwLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBTY2hlZHVsZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NjaGVkdWxlUm91bmRlZFwiO1xuaW1wb3J0IHR5cGUgeyBNZW50b3JzaGlwT2ZmZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBNZW50b3JzaGlwQ2FyZFByb3BzID0ge1xuICBvZmZlcjogTWVudG9yc2hpcE9mZmVyO1xufTtcblxuY29uc3QgTWVudG9yc2hpcENhcmQgPSAoeyBvZmZlciB9OiBNZW50b3JzaGlwQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBvZmZlci5mZWF0dXJlZCA/PyBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYmFja2dyb3VuZDogaXNGZWF0dXJlZFxuICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyLDUzLDE0OCwwLjkyKSwgcmdiYSgzMSwxMTEsMjM1LDAuODgpKVwiXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCIgXG4gICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b2ZmZXIudGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBpY29uPXs8U2NoZWR1bGVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9e29mZmVyLmR1cmF0aW9ufVxuICAgICAgICAgICAgICBjb2xvcj17aXNGZWF0dXJlZCA/IFwiZGVmYXVsdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgbWw6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIC4uLihpc0ZlYXR1cmVkICYmIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgIHN4PXt7IGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnkgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b2ZmZXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHtvZmZlci5ub3RlICYmIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIiBcbiAgICAgICAgICAgICAgc3g9e3sgY29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b2ZmZXIubm90ZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgaHJlZj17b2ZmZXIuaHJlZn1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgID5cbiAgICAgICAgICB7b2ZmZXIuY3RhTGFiZWwgPz8gXCJDaG9vc2UgYSB0aW1lXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW50b3JzaGlwQ2FyZDtcblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWVudG9yc2hpcE9mZmVyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgTWVudG9yc2hpcENhcmQgZnJvbSBcIi4vTWVudG9yc2hpcENhcmRcIjtcblxudHlwZSBNZW50b3JzaGlwU2VjdGlvblByb3BzID0ge1xuICBvZmZlcnM6IFJlYWRvbmx5QXJyYXk8TWVudG9yc2hpcE9mZmVyPjtcbn07XG5cbmNvbnN0IE1lbnRvcnNoaXBTZWN0aW9uID0gKHsgb2ZmZXJzIH06IE1lbnRvcnNoaXBTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwibWVudG9yc2hpcFwiXG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezR9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5NZW50b3JzaGlwICYgU2Vzc2lvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBMb29raW5nIGZvciBhIG1lbnRvciBvciBzb21lb25lIHRvIGNoYXQgd2l0aD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAge29mZmVycy5tYXAoKG9mZmVyKSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17b2ZmZXIudGl0bGV9PlxuICAgICAgICAgICAgPE1lbnRvcnNoaXBDYXJkIG9mZmVyPXtvZmZlcn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnRvcnNoaXBTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyLjcyIDIuMDNDNi42MyAxLjYgMS42IDYuNjMgMi4wMyAxMi43MiAyLjM5IDE4LjAxIDcuMDEgMjIgMTIuMzEgMjJIMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTMuNjdjLTMuNzMgMC03LjE1LTIuNDItOC4wOC02LjAzLTEuNDktNS44IDMuOTEtMTEuMjEgOS43MS05LjcxQzE3LjU4IDUuMTggMjAgOC42IDIwIDEyLjMzdjEuMWMwIC43OS0uNzEgMS41Ny0xLjUgMS41N3MtMS41LS43OC0xLjUtMS41N3YtMS4yNWMwLTIuNTEtMS43OC00Ljc3LTQuMjYtNS4xMi0zLjQtLjQ5LTYuMjcgMi40NS01LjY2IDUuODcuMzQgMS45MSAxLjgzIDMuNDkgMy43MiAzLjk0IDEuODQuNDMgMy41OS0uMTYgNC43NC0xLjMzLjg5IDEuMjIgMi42NyAxLjg2IDQuMyAxLjIxIDEuMzQtLjUzIDIuMTYtMS45IDIuMTYtMy4zNHYtMS4wOWMwLTUuMzEtMy45OS05LjkzLTkuMjgtMTAuMjlNMTIgMTVjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzXCJcbn0pLCAnQWx0ZXJuYXRlRW1haWxSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQWx0ZXJuYXRlRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BbHRlcm5hdGVFbWFpbFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgUmVzcG9uc2VUaW1lIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUmVzcG9uc2VUaW1lU2VjdGlvblByb3BzID0ge1xuICByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZTtcbn07XG5cbmNvbnN0IFJlc3BvbnNlVGltZVNlY3Rpb24gPSAoeyByZXNwb25zZVRpbWUgfTogUmVzcG9uc2VUaW1lU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmQgc3g9e3sgcDogeyB4czogNCwgbWQ6IDUgfSB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QWx0ZXJuYXRlRW1haWxSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3Jlc3BvbnNlVGltZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICB7cmVzcG9uc2VUaW1lLnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGtleT17cGFyYWdyYXBofSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VUaW1lU2VjdGlvbjtcblxuXG4iLAogICAgIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMS4yN2ExMSAxMSAwIDAwLTMuNDggMjEuNDZjLjU1LjA5LjczLS4yOC43My0uNTV2LTEuODRjLTMuMDMuNjQtMy42Ny0xLjQ2LTMuNjctMS40Ni0uNTUtMS4yOS0xLjI4LTEuNjUtMS4yOC0xLjY1LS45Mi0uNjUuMS0uNjUuMS0uNjUgMS4xIDAgMS43MyAxLjEgMS43MyAxLjEuOTIgMS42NSAyLjU3IDEuMiAzLjIxLjkyYTIgMiAwIDAxLjY0LTEuNDdjLTIuNDctLjI3LTUuMDQtMS4xOS01LjA0LTUuNSAwLTEuMS40Ni0yLjEgMS4yLTIuODRhMy43NiAzLjc2IDAgMDEwLTIuOTNzLjkxLS4yOCAzLjExIDEuMWMxLjgtLjQ5IDMuNy0uNDkgNS41IDAgMi4xLTEuMzggMy4wMi0xLjEgMy4wMi0xLjFhMy43NiAzLjc2IDAgMDEwIDIuOTNjLjgzLjc0IDEuMiAxLjc0IDEuMiAyLjk0IDAgNC4yMS0yLjU3IDUuMTMtNS4wNCA1LjQuNDUuMzcuODIuOTIuODIgMi4wMnYzLjAzYzAgLjI3LjEuNjQuNzMuNTVBMTEgMTEgMCAwMDEyIDEuMjdcIlxufSksICdHaXRIdWInKTsiLAogICAgImltcG9ydCBFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsUm91bmRlZFwiO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR2l0SHViXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1RlbGVncmFtXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnRhY3RIZXJvLFxuICBDb250YWN0TWV0aG9kLFxuICBIZWxwVG9waWMsXG4gIE1lbnRvcnNoaXBPZmZlcixcbiAgUmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RIZXJvOiBDb250YWN0SGVybyA9IHtcbiAgdGl0bGU6IFwiTGV0J3MgV29yayBUb2dldGhlclwiLFxuICBzdWJ0aXRsZTogXCJCdWlsZGluZyBtZWFuaW5nZnVsIGNvbm5lY3Rpb25zIHRocm91Z2ggZGVzaWduXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiSSdtIGFsd2F5cyBvcGVuIHRvIGRpc2N1c3NpbmcgbmV3IHByb2plY3RzLCBjcmVhdGl2ZSBpZGVhcywgbWVudG9yc2hpcCBvcHBvcnR1bml0aWVzLCBvciBjb2xsYWJvcmF0aW9ucy4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgZGVzaWduIGd1aWRhbmNlLCB3YW50IHRvIGV4cGxvcmUgYSBwcm9kdWN0IGlkZWEsIG9yIHNpbXBseSB3YW50IHRvIGNvbm5lY3QsIEknZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdE1ldGhvZHM6IFJlYWRvbmx5QXJyYXk8Q29udGFjdE1ldGhvZD4gPSBbXG4gIHtcbiAgICBpY29uOiBFbWFpbFJvdW5kZWRJY29uLFxuICAgIHRpdGxlOiBcIkVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIGdlbmVyYWwgaW5xdWlyaWVzLCBjb2xsYWJvcmF0aW9uIG9wcG9ydHVuaXRpZXMsIG9yIGp1c3QgdG8gc2F5IGhlbGxvXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwic2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgICBocmVmOiBcIm1haWx0bzpzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogVGVsZWdyYW1JY29uLFxuICAgIHRpdGxlOiBcIlRlbGVncmFtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhY2ggb3V0IGZvciBhIHF1aWNrIGNoYXQgb3IgdG8gc2hhcmUgaWRlYXMgYXN5bmNocm9ub3VzbHlcIixcbiAgICBhY3Rpb25MYWJlbDogXCJNZXNzYWdlIG9uIFRlbGVncmFtXCIsXG4gICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogTGlua2VkSW5JY29uLFxuICAgIHRpdGxlOiBcIkxpbmtlZEluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB3aXRoIG1lIHByb2Zlc3Npb25hbGx5IGFuZCBzZWUgbXkgbGF0ZXN0IHVwZGF0ZXNcIixcbiAgICBhY3Rpb25MYWJlbDogXCJWaWV3IFByb2ZpbGVcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBHaXRIdWJJY29uLFxuICAgIHRpdGxlOiBcIkdpdEh1YlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkV4cGxvcmUgbXkgY29kZSwgZXhwZXJpbWVudHMsIGFuZCBvcGVuLXNvdXJjZSBjb250cmlidXRpb25zXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiVmlzaXQgR2l0SHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG1lbnRvcnNoaXBPZmZlcnM6IFJlYWRvbmx5QXJyYXk8TWVudG9yc2hpcE9mZmVyPiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkV4Y2x1c2l2ZSBUYWxrIChGcmVlKVwiLFxuICAgIGR1cmF0aW9uOiBcIjIwIG1pblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlIGNhbiBkaXNjdXNzIG91ciBjYXJlZXIgcGF0aHMgYW5kIHdvcmsgZXhwZXJpZW5jZXMgdG9nZXRoZXIuXCIsXG4gICAgbm90ZTogXCJUbyBjb25maXJtIHlvdXIgc2Vzc2lvbiwgcGxlYXNlIGRvbmF0ZSAkMSB0byBhIGNoYXJpdHkgb2YgeW91ciBjaG9pY2UuXCIsXG4gICAgaHJlZjogXCJodHRwczovL3plZWcubWUvbWFzaWhzL2xldHN0YWxrXCIsXG4gICAgY3RhTGFiZWw6IFwiQ2hvb3NlIGEgdGltZVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIE1lbnRvcnNoaXAgd2l0aCBNYXNpaFwiLFxuICAgIGR1cmF0aW9uOiBcIjc1IG1pblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWFkeSB0byB0YWtlIHlvdXIgZGVzaWduIHNraWxscyB0byB0aGUgbmV4dCBsZXZlbD8gV2Vla2x5IG1lbnRvcnNoaXAgc2Vzc2lvbnMgYXJlIGEgcHJvdmVuIHdheSB0byBsZWFybiBhIG5ldyBza2lsbCBhbmQgYWNjZWxlcmF0ZSB5b3VyIGdyb3d0aCBpbiBVWC9VSSBkZXNpZ24uXCIsXG4gICAgaHJlZjogXCJodHRwczovL3plZWcubWUvbWFzaWhzL21lbnRvcnNoaXBcIixcbiAgICBjdGFMYWJlbDogXCJTZXQgYW4gYXBwb2ludG1lbnRcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBoZWxwVG9waWNzOiBSZWFkb25seUFycmF5PEhlbHBUb3BpYz4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gTWVudG9yc2hpcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPbmUtb24tb25lIGd1aWRhbmNlIGZvciBkZXNpZ25lcnMgYXQgYW55IHN0YWdlIG9mIHRoZWlyIGNhcmVlci4gUG9ydGZvbGlvIHJldmlld3MsIHNraWxsIGRldmVsb3BtZW50LCBhbmQgY2FyZWVyIGFkdmljZS5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBvcnRmb2xpbyBSZXZpZXdzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdldCBmZWVkYmFjayBvbiB5b3VyIGNhc2Ugc3R1ZGllcywgZGVzaWduIHByb2Nlc3MsIGFuZCBwcmVzZW50YXRpb24uIE1ha2UgeW91ciBwb3J0Zm9saW8gc3RhbmQgb3V0LlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUHJvamVjdCBDb2xsYWJvcmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkludGVyZXN0ZWQgaW4gd29ya2luZyB0b2dldGhlciBvbiBhIHByb2R1Y3Qgb3IgZGVzaWduIHN5c3RlbT8gTGV0J3MgZGlzY3VzcyBvcHBvcnR1bml0aWVzLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3BlYWtpbmcgJiBXb3Jrc2hvcHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQXZhaWxhYmxlIGZvciBkZXNpZ24gdGFsa3MsIHdvcmtzaG9wcywgb3IgcGFuZWwgZGlzY3Vzc2lvbnMgYWJvdXQgVVggZGVzaWduLCB1c2VyIHNhZmV0eSwgYW5kIHByb2R1Y3QgZGVzaWduLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNlVGltZTogUmVzcG9uc2VUaW1lID0ge1xuICB0aXRsZTogXCJSZXNwb25zZSBUaW1lXCIsXG4gIHBhcmFncmFwaHM6IFtcbiAgICBcIkkgdHlwaWNhbGx5IHJlc3BvbmQgdG8gZW1haWxzIHdpdGhpbiAyNC00OCBob3Vycy4gRm9yIG1lbnRvcnNoaXAgaW5xdWlyaWVzLCBwbGVhc2UgYWxsb3cgYSBiaXQgbW9yZSB0aW1lIGFzIEkgcmV2aWV3IGVhY2ggcmVxdWVzdCBjYXJlZnVsbHkuXCIsXG4gICAgXCJJZiB5b3UgaGF2ZW4ndCBoZWFyZCBiYWNrIGFmdGVyIDMgZGF5cywgZmVlbCBmcmVlIHRvIHNlbmQgYSBnZW50bGUgZm9sbG93LXVwLlwiLFxuICBdLFxufTtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGNvbnRhY3RIZXJvLCBjb250YWN0TWV0aG9kcywgbWVudG9yc2hpcE9mZmVycyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBjb250YWN0U3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDb250YWN0UGFnZVwiLFxuICBuYW1lOiBcIkNvbnRhY3QgTWFzaWggU2FkcmlcIixcbiAgZGVzY3JpcHRpb246IGNvbnRhY3RIZXJvLmRlc2NyaXB0aW9uLFxuICB1cmw6IGAke3NpdGVVcmx9L2NvbnRhY3RgLFxuICBtYWluRW50aXR5OiBjb250YWN0TWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4gKHtcbiAgICBcIkB0eXBlXCI6IFwiQ29udGFjdFBvaW50XCIsXG4gICAgY29udGFjdFR5cGU6IG1ldGhvZC50aXRsZSxcbiAgICB1cmw6IG1ldGhvZC5ocmVmLFxuICAgIGRlc2NyaXB0aW9uOiBtZXRob2QuZGVzY3JpcHRpb24sXG4gIH0pKSxcbiAgb2ZmZXJzOiBtZW50b3JzaGlwT2ZmZXJzLm1hcCgob2ZmZXIpID0+ICh7XG4gICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgbmFtZTogb2ZmZXIudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IG9mZmVyLmRlc2NyaXB0aW9uLFxuICAgIHVybDogb2ZmZXIuaHJlZixcbiAgICBkdXJhdGlvbjogb2ZmZXIuZHVyYXRpb24sXG4gIH0pKSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkNvbnRhY3QgTWFzaWggU2Fkcmkg4oCUIENvbGxhYm9yYXRpb25zLCBtZW50b3JzaGlwLCBhbmQgc3BlYWtpbmdcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJCb29rIG1lbnRvcnNoaXAgc2Vzc2lvbnMsIHJlcXVlc3QgY29sbGFib3JhdGlvbnMsIG9yIHJlYWNoIE1hc2loIFNhZHJpIGRpcmVjdGx5IGZvciBzZW5pb3IgcHJvZHVjdCBkZXNpZ24gd29yay5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY29udGFjdFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGNvbnRhY3RTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUNRQSxJQUFNLHdCQUF3QixHQUFHLDhCQUMvQix1QkF3Q0UsYUF4Q0Y7QUFBQSxFQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO0FBQUEsRUFBaEMsMEJBQ0UsdUJBc0NFLG1CQXRDRjtBQUFBLDhCQUNFLHVCQW9DRSxjQXBDRjtBQUFBLE1BQU0sV0FBUztBQUFBLE1BQUMsU0FBUztBQUFBLE1BQXpCLFVBQ0csUUFBUSxJQUFJLENBQUMsV0FBVztBQUFBLFFBQ3ZCLE1BQU0sYUFBYSxPQUFPLEtBQUssV0FBVyxTQUFTO0FBQUEsUUFDbkQsdUJBQ0UsdUJBNkJFLGNBN0JGO0FB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QUFHO0FBQUEsRUFDUixZQUFZLGVBQWUsSUFBSSxDQUFDLFlBQVk7QUFBQSxJQUMxQyxTQUFTO0FBQUEsSUFDVCxhQUFhLE9BQU87QUFBQSxJQUNwQixLQUFLLE9BQU87QUFBQSxJQUNaLGFBQWEsT0FBTztBQUFBLEVBQ3RCLEVBQUU7QUFBQSxFQUNGLFFBQVEsaUJBQWlCLElBQUksQ0FBQyxXQUFXO0FBQUEsSUFDdkMsU0FBUztBQUFBLElBQ1QsTUFBTSxNQUFNO0FBQUEsSUFDWixhQUFhLE1BQU07QUFBQSxJQUNuQixLQUFLLE1BQU07QUFBQSxJQUNYLFVBQVUsTUFBTTtBQUFBLEVBQ2xCLEVBQUU7QUFDSjtBQUVPLElBQU0sc0JBQW9DO0FBQUEsRUFDL0MsT0FBTztBQUFBLEVBQ1AsYUFDRTtBQUFBLEVBQ0YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGdCQUFnQjtBQUNsQjs7OztBWG5CQSxJQUFNLGNBQWMsTUFBTTtBQUFBLEVBQ3hCLE1BQU0sV0FBVyxZQUFZO0FBQUEsRUFFN0IsdUJBQVUsTUFBTTtBQUFBLElBQ2QsSUFBSSxDQUFDLFNBQVMsTUFBTTtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBRUEsTUFBTSxXQUFXLFNBQVMsS0FBSyxNQUFNLENBQUM7QUFBQSxJQUN0QyxNQUFNLFVBQVUsU0FBUyxlQUFlLFFBQVE7QUFBQSxJQUNoRCxJQUFJLENBQUMsU0FBUztBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsSUFFQSxPQUFPLHNCQUFzQixNQUFNO0FBQUEsTUFDakMsc0JBQXNCLFNBQVMsRUFBRSxVQUFVLEtBQUssUUFBUSxHQUFHLENBQUM7QUFBQSxLQUM3RDtBQUFBLEtBQ0EsQ0FBQyxTQUFTLElBQUksQ0FBQztBQUFBLEVBRWxCLHVCQUNFO0FBQUEsY0FRRTtBQUFBLHNCQVBBLHdCQUFDLGFBQUQ7QUFBQSxXQUFTO0FBQUEsU0FBVCxpQ0FBOEI7QUFBQSxzQkFFOUIsd0JBQUMscUJBQUQ7QUFBQSxRQUFhLE1BQU07QUFBQSxTQUFuQixpQ0FBZ0M7QUFBQSxzQkFDaEMsd0JBQUMsMkJBQUQ7QUFBQSxRQUFtQixRQUFRO0FBQUEsU0FBM0IsaUNBQXVDO0FBQUEsc0JBQ3ZDLHdCQUFDLDJCQUFEO0FBQUEsUUFBbUIsUUFBUTtBQUFBLFNBQTNCLGlDQUE2QztBQUFBLHNCQUM3Qyx3QkFBQywrQkFBRDtBQUFBLFFBQXVCLFNBQVM7QUFBQSxTQUFoQyxpQ0FBZ0Q7QUFBQSxzQkFDaEQsd0JBQUMsNkJBQUQ7QUFBQSxRQUFxQjtBQUFBLFNBQXJCLGlDQUFpRDtBQUFBO0FBQUEsS0FQbkQsZ0NBUUU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICIxNUM4NDc0RTY3NTQyNzk3NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
