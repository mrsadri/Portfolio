import {
  GitHub_default,
  Telegram_default,
  smoothScrollToElement
} from "./chunk-7s1qrsc1.js";
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

//# debugId=03CCC6572B4B45DE64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2NoZWR1bGVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BbHRlcm5hdGVFbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9kYXRhL2NvbnRlbnQudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3Qvc2VvLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCB7IHNtb290aFNjcm9sbFRvRWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9zbW9vdGhTY3JvbGxcIjtcbmltcG9ydCBDb250YWN0TWV0aG9kc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9Db250YWN0TWV0aG9kc1NlY3Rpb25cIjtcbmltcG9ydCBIZWxwVG9waWNzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IE1lbnRvcnNoaXBTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb25cIjtcbmltcG9ydCBSZXNwb25zZVRpbWVTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVzcG9uc2VUaW1lU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgY29udGFjdEhlcm8sXG4gIGNvbnRhY3RNZXRob2RzLFxuICBoZWxwVG9waWNzLFxuICBtZW50b3JzaGlwT2ZmZXJzLFxuICByZXNwb25zZVRpbWUsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2VNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuY29uc3QgQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldElkID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc21vb3RoU2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIHsgZHVyYXRpb246IDkwMCwgb2Zmc2V0OiAxNiB9KTtcbiAgICB9KTtcbiAgfSwgW2xvY2F0aW9uLmhhc2hdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHsuLi5jb250YWN0UGFnZU1ldGFkYXRhfSAvPlxuXG4gICAgICA8SGVyb1NlY3Rpb24gaGVybz17Y29udGFjdEhlcm99IC8+XG4gICAgICA8SGVscFRvcGljc1NlY3Rpb24gdG9waWNzPXtoZWxwVG9waWNzfSAvPlxuICAgICAgPE1lbnRvcnNoaXBTZWN0aW9uIG9mZmVycz17bWVudG9yc2hpcE9mZmVyc30gLz5cbiAgICAgIDxDb250YWN0TWV0aG9kc1NlY3Rpb24gbWV0aG9kcz17Y29udGFjdE1ldGhvZHN9IC8+XG4gICAgICA8UmVzcG9uc2VUaW1lU2VjdGlvbiByZXNwb25zZVRpbWU9e3Jlc3BvbnNlVGltZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDb250YWN0TWV0aG9kIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ29udGFjdE1ldGhvZHNTZWN0aW9uUHJvcHMgPSB7XG4gIG1ldGhvZHM6IFJlYWRvbmx5QXJyYXk8Q29udGFjdE1ldGhvZD47XG59O1xuXG5jb25zdCBDb250YWN0TWV0aG9kc1NlY3Rpb24gPSAoeyBtZXRob2RzIH06IENvbnRhY3RNZXRob2RzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAge21ldGhvZHMubWFwKChtZXRob2QpID0+IHtcbiAgICAgICAgICBjb25zdCBpc01haWxMaW5rID0gbWV0aG9kLmhyZWYuc3RhcnRzV2l0aChcIm1haWx0bzpcIik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogMyB9fSBrZXk9e21ldGhvZC50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBjb2xvcjogXCJwcmltYXJ5Lm1haW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRob2QuaWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57bWV0aG9kLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRob2QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21ldGhvZC5ocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2lzTWFpbExpbmsgPyB1bmRlZmluZWQgOiBcIl9ibGFua1wifVxuICAgICAgICAgICAgICAgICAgICByZWw9e2lzTWFpbExpbmsgPyB1bmRlZmluZWQgOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge21ldGhvZC5hY3Rpb25MYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TWV0aG9kc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgSGVscFRvcGljIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVscFRvcGljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgdG9waWNzOiBSZWFkb25seUFycmF5PEhlbHBUb3BpYz47XG59O1xuXG5jb25zdCBIZWxwVG9waWNzU2VjdGlvbiA9ICh7IHRvcGljcyB9OiBIZWxwVG9waWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBtYj17NH0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+V2hhdCBJIENhbiBIZWxwIFdpdGg8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7dG9waWNzLm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3RvcGljLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RvcGljLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscFRvcGljc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDb250YWN0SGVybyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IENvbnRhY3RIZXJvO1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGNvbXBvbmVudD1cImhlYWRlclwiXG4gICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgIHB5OiB7IHhzOiAxMCwgbWQ6IDE0IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiID8gXCJyZ2JhKDI0NCwgMjQ3LCAyNTEsIDAuNilcIiA6IFwicmdiYSg4LCAxNCwgMjYsIDAuODUpXCIsXG4gICAgfSl9XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA0IH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IDg0MCxcbiAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiBcImxlZnRcIiwgbWQ6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXlcIj57aGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoZXJvXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4bS0uMjItMTNoLS4wNmMtLjQgMC0uNzIuMzItLjcyLjcydjQuNzJjMCAuMzUuMTguNjguNDkuODZsNC4xNSAyLjQ5Yy4zNC4yLjc4LjEuOTgtLjI0LjIxLS4zNC4xLS43OS0uMjUtLjk5bC0zLjg3LTIuM1Y3LjcyYzAtLjQtLjMyLS43Mi0uNzItLjcyXCJcbn0pLCAnU2NoZWR1bGVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ2hpcCxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU2NoZWR1bGVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TY2hlZHVsZVJvdW5kZWRcIjtcbmltcG9ydCB0eXBlIHsgTWVudG9yc2hpcE9mZmVyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgTWVudG9yc2hpcENhcmRQcm9wcyA9IHtcbiAgb2ZmZXI6IE1lbnRvcnNoaXBPZmZlcjtcbn07XG5cbmNvbnN0IE1lbnRvcnNoaXBDYXJkID0gKHsgb2ZmZXIgfTogTWVudG9yc2hpcENhcmRQcm9wcykgPT4ge1xuICBjb25zdCBpc0ZlYXR1cmVkID0gb2ZmZXIuZmVhdHVyZWQgPz8gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGlzRmVhdHVyZWRcbiAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiw1MywxNDgsMC45MiksIHJnYmEoMzEsMTExLDIzNSwwLjg4KSlcIlxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiIFxuICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29mZmVyLnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgaWNvbj17PFNjaGVkdWxlUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIGxhYmVsPXtvZmZlci5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcImRlZmF1bHRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIG1sOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAuLi4oaXNGZWF0dXJlZCAmJiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjE4KVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IFxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICBzeD17eyBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29mZmVyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7b2ZmZXIubm90ZSAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCIgXG4gICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnkgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29mZmVyLm5vdGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgIGhyZWY9e29mZmVyLmhyZWZ9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIGNvbG9yPXtpc0ZlYXR1cmVkID8gXCJzZWNvbmRhcnlcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICA+XG4gICAgICAgICAge29mZmVyLmN0YUxhYmVsID8/IFwiQ2hvb3NlIGEgdGltZVwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudG9yc2hpcENhcmQ7XG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnRvcnNoaXBPZmZlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IE1lbnRvcnNoaXBDYXJkIGZyb20gXCIuL01lbnRvcnNoaXBDYXJkXCI7XG5cbnR5cGUgTWVudG9yc2hpcFNlY3Rpb25Qcm9wcyA9IHtcbiAgb2ZmZXJzOiBSZWFkb25seUFycmF5PE1lbnRvcnNoaXBPZmZlcj47XG59O1xuXG5jb25zdCBNZW50b3JzaGlwU2VjdGlvbiA9ICh7IG9mZmVycyB9OiBNZW50b3JzaGlwU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBpZD1cIm1lbnRvcnNoaXBcIlxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs0fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+TWVudG9yc2hpcCAmIFNlc3Npb25zPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgTG9va2luZyBmb3IgYSBtZW50b3Igb3Igc29tZW9uZSB0byBjaGF0IHdpdGg/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgIHtvZmZlcnMubWFwKChvZmZlcikgPT4gKFxuICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e29mZmVyLnRpdGxlfT5cbiAgICAgICAgICAgIDxNZW50b3JzaGlwQ2FyZCBvZmZlcj17b2ZmZXJ9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW50b3JzaGlwU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMi43MiAyLjAzQzYuNjMgMS42IDEuNiA2LjYzIDIuMDMgMTIuNzIgMi4zOSAxOC4wMSA3LjAxIDIyIDEyLjMxIDIySDE2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zLjY3Yy0zLjczIDAtNy4xNS0yLjQyLTguMDgtNi4wMy0xLjQ5LTUuOCAzLjkxLTExLjIxIDkuNzEtOS43MUMxNy41OCA1LjE4IDIwIDguNiAyMCAxMi4zM3YxLjFjMCAuNzktLjcxIDEuNTctMS41IDEuNTdzLTEuNS0uNzgtMS41LTEuNTd2LTEuMjVjMC0yLjUxLTEuNzgtNC43Ny00LjI2LTUuMTItMy40LS40OS02LjI3IDIuNDUtNS42NiA1Ljg3LjM0IDEuOTEgMS44MyAzLjQ5IDMuNzIgMy45NCAxLjg0LjQzIDMuNTktLjE2IDQuNzQtMS4zMy44OSAxLjIyIDIuNjcgMS44NiA0LjMgMS4yMSAxLjM0LS41MyAyLjE2LTEuOSAyLjE2LTMuMzR2LTEuMDljMC01LjMxLTMuOTktOS45My05LjI4LTEwLjI5TTEyIDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM1wiXG59KSwgJ0FsdGVybmF0ZUVtYWlsUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWx0ZXJuYXRlRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3BvbnNlVGltZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcyA9IHtcbiAgcmVzcG9uc2VUaW1lOiBSZXNwb25zZVRpbWU7XG59O1xuXG5jb25zdCBSZXNwb25zZVRpbWVTZWN0aW9uID0gKHsgcmVzcG9uc2VUaW1lIH06IFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkIHN4PXt7IHA6IHsgeHM6IDQsIG1kOiA1IH0gfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntyZXNwb25zZVRpbWUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAge3Jlc3BvbnNlVGltZS5wYXJhZ3JhcGhzLm1hcCgocGFyYWdyYXBoKSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e3BhcmFncmFwaH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlVGltZVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFJvdW5kZWRcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YlwiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UZWxlZ3JhbVwiO1xuaW1wb3J0IHR5cGUge1xuICBDb250YWN0SGVybyxcbiAgQ29udGFjdE1ldGhvZCxcbiAgSGVscFRvcGljLFxuICBNZW50b3JzaGlwT2ZmZXIsXG4gIFJlc3BvbnNlVGltZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0SGVybzogQ29udGFjdEhlcm8gPSB7XG4gIHRpdGxlOiBcIkxldCdzIFdvcmsgVG9nZXRoZXJcIixcbiAgc3VidGl0bGU6IFwiQnVpbGRpbmcgbWVhbmluZ2Z1bCBjb25uZWN0aW9ucyB0aHJvdWdoIGRlc2lnblwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkknbSBhbHdheXMgb3BlbiB0byBkaXNjdXNzaW5nIG5ldyBwcm9qZWN0cywgY3JlYXRpdmUgaWRlYXMsIG1lbnRvcnNoaXAgb3Bwb3J0dW5pdGllcywgb3IgY29sbGFib3JhdGlvbnMuIFdoZXRoZXIgeW91J3JlIGxvb2tpbmcgZm9yIGRlc2lnbiBndWlkYW5jZSwgd2FudCB0byBleHBsb3JlIGEgcHJvZHVjdCBpZGVhLCBvciBzaW1wbHkgd2FudCB0byBjb25uZWN0LCBJJ2QgbG92ZSB0byBoZWFyIGZyb20geW91LlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RNZXRob2RzOiBSZWFkb25seUFycmF5PENvbnRhY3RNZXRob2Q+ID0gW1xuICB7XG4gICAgaWNvbjogRW1haWxSb3VuZGVkSWNvbixcbiAgICB0aXRsZTogXCJFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvciBnZW5lcmFsIGlucXVpcmllcywgY29sbGFib3JhdGlvbiBvcHBvcnR1bml0aWVzLCBvciBqdXN0IHRvIHNheSBoZWxsb1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcInNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgaHJlZjogXCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgfSxcbiAge1xuICAgIGljb246IFRlbGVncmFtSWNvbixcbiAgICB0aXRsZTogXCJUZWxlZ3JhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlYWNoIG91dCBmb3IgYSBxdWljayBjaGF0IG9yIHRvIHNoYXJlIGlkZWFzIGFzeW5jaHJvbm91c2x5XCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiTWVzc2FnZSBvbiBUZWxlZ3JhbVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly90Lm1lL21hc2loc2FkcmlcIixcbiAgfSxcbiAge1xuICAgIGljb246IExpbmtlZEluSWNvbixcbiAgICB0aXRsZTogXCJMaW5rZWRJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbm5lY3Qgd2l0aCBtZSBwcm9mZXNzaW9uYWxseSBhbmQgc2VlIG15IGxhdGVzdCB1cGRhdGVzXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiVmlldyBQcm9maWxlXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogR2l0SHViSWNvbixcbiAgICB0aXRsZTogXCJHaXRIdWJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIG15IGNvZGUsIGV4cGVyaW1lbnRzLCBhbmQgb3Blbi1zb3VyY2UgY29udHJpYnV0aW9uc1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcIlZpc2l0IEdpdEh1YlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21yc2FkcmlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBtZW50b3JzaGlwT2ZmZXJzOiBSZWFkb25seUFycmF5PE1lbnRvcnNoaXBPZmZlcj4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJFeGNsdXNpdmUgVGFsayAoRnJlZSlcIixcbiAgICBkdXJhdGlvbjogXCIyMCBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZSBjYW4gZGlzY3VzcyBvdXIgY2FyZWVyIHBhdGhzIGFuZCB3b3JrIGV4cGVyaWVuY2VzIHRvZ2V0aGVyLlwiLFxuICAgIG5vdGU6IFwiVG8gY29uZmlybSB5b3VyIHNlc3Npb24sIHBsZWFzZSBkb25hdGUgJDEgdG8gYSBjaGFyaXR5IG9mIHlvdXIgY2hvaWNlLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9sZXRzdGFsa1wiLFxuICAgIGN0YUxhYmVsOiBcIkNob29zZSBhIHRpbWVcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBNZW50b3JzaGlwIHdpdGggTWFzaWhcIixcbiAgICBkdXJhdGlvbjogXCI3NSBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVhZHkgdG8gdGFrZSB5b3VyIGRlc2lnbiBza2lsbHMgdG8gdGhlIG5leHQgbGV2ZWw/IFdlZWtseSBtZW50b3JzaGlwIHNlc3Npb25zIGFyZSBhIHByb3ZlbiB3YXkgdG8gbGVhcm4gYSBuZXcgc2tpbGwgYW5kIGFjY2VsZXJhdGUgeW91ciBncm93dGggaW4gVVgvVUkgZGVzaWduLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9tZW50b3JzaGlwXCIsXG4gICAgY3RhTGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaGVscFRvcGljczogUmVhZG9ubHlBcnJheTxIZWxwVG9waWM+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIE1lbnRvcnNoaXBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT25lLW9uLW9uZSBndWlkYW5jZSBmb3IgZGVzaWduZXJzIGF0IGFueSBzdGFnZSBvZiB0aGVpciBjYXJlZXIuIFBvcnRmb2xpbyByZXZpZXdzLCBza2lsbCBkZXZlbG9wbWVudCwgYW5kIGNhcmVlciBhZHZpY2UuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3J0Zm9saW8gUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgZmVlZGJhY2sgb24geW91ciBjYXNlIHN0dWRpZXMsIGRlc2lnbiBwcm9jZXNzLCBhbmQgcHJlc2VudGF0aW9uLiBNYWtlIHlvdXIgcG9ydGZvbGlvIHN0YW5kIG91dC5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2plY3QgQ29sbGFib3JhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJbnRlcmVzdGVkIGluIHdvcmtpbmcgdG9nZXRoZXIgb24gYSBwcm9kdWN0IG9yIGRlc2lnbiBzeXN0ZW0/IExldCdzIGRpc2N1c3Mgb3Bwb3J0dW5pdGllcy5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWFraW5nICYgV29ya3Nob3BzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkF2YWlsYWJsZSBmb3IgZGVzaWduIHRhbGtzLCB3b3Jrc2hvcHMsIG9yIHBhbmVsIGRpc2N1c3Npb25zIGFib3V0IFVYIGRlc2lnbiwgdXNlciBzYWZldHksIGFuZCBwcm9kdWN0IGRlc2lnbi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZSA9IHtcbiAgdGl0bGU6IFwiUmVzcG9uc2UgVGltZVwiLFxuICBwYXJhZ3JhcGhzOiBbXG4gICAgXCJJIHR5cGljYWxseSByZXNwb25kIHRvIGVtYWlscyB3aXRoaW4gMjQtNDggaG91cnMuIEZvciBtZW50b3JzaGlwIGlucXVpcmllcywgcGxlYXNlIGFsbG93IGEgYml0IG1vcmUgdGltZSBhcyBJIHJldmlldyBlYWNoIHJlcXVlc3QgY2FyZWZ1bGx5LlwiLFxuICAgIFwiSWYgeW91IGhhdmVuJ3QgaGVhcmQgYmFjayBhZnRlciAzIGRheXMsIGZlZWwgZnJlZSB0byBzZW5kIGEgZ2VudGxlIGZvbGxvdy11cC5cIixcbiAgXSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBjb250YWN0SGVybywgY29udGFjdE1ldGhvZHMsIG1lbnRvcnNoaXBPZmZlcnMgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgY29udGFjdFN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ29udGFjdFBhZ2VcIixcbiAgbmFtZTogXCJDb250YWN0IE1hc2loIFNhZHJpXCIsXG4gIGRlc2NyaXB0aW9uOiBjb250YWN0SGVyby5kZXNjcmlwdGlvbixcbiAgdXJsOiBgJHtzaXRlVXJsfS9jb250YWN0YCxcbiAgbWFpbkVudGl0eTogY29udGFjdE1ldGhvZHMubWFwKChtZXRob2QpID0+ICh7XG4gICAgXCJAdHlwZVwiOiBcIkNvbnRhY3RQb2ludFwiLFxuICAgIGNvbnRhY3RUeXBlOiBtZXRob2QudGl0bGUsXG4gICAgdXJsOiBtZXRob2QuaHJlZixcbiAgICBkZXNjcmlwdGlvbjogbWV0aG9kLmRlc2NyaXB0aW9uLFxuICB9KSksXG4gIG9mZmVyczogbWVudG9yc2hpcE9mZmVycy5tYXAoKG9mZmVyKSA9PiAoe1xuICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgIG5hbWU6IG9mZmVyLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBvZmZlci5kZXNjcmlwdGlvbixcbiAgICB1cmw6IG9mZmVyLmhyZWYsXG4gICAgZHVyYXRpb246IG9mZmVyLmR1cmF0aW9uLFxuICB9KSksXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgY29udGFjdFBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJDb250YWN0IE1hc2loIFNhZHJpIOKAlCBDb2xsYWJvcmF0aW9ucywgbWVudG9yc2hpcCwgYW5kIHNwZWFraW5nXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQm9vayBtZW50b3JzaGlwIHNlc3Npb25zLCByZXF1ZXN0IGNvbGxhYm9yYXRpb25zLCBvciByZWFjaCBNYXNpaCBTYWRyaSBkaXJlY3RseSBmb3Igc2VuaW9yIHByb2R1Y3QgZGVzaWduIHdvcmsuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2NvbnRhY3RcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBjb250YWN0U3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQ1FBLElBQU0sd0JBQXdCLEdBQUcsOEJBQy9CLHVCQXdDRSxhQXhDRjtBQUFBLEVBQUssSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUU7QUFBQSxFQUFoQywwQkFDRSx1QkFzQ0UsbUJBdENGO0FBQUEsOEJBQ0UsdUJBb0NFLGNBcENGO0FBQUEsTUFBTSxXQUFT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VCxNQUFNO0FBQUEsRUFDTixhQUFhLFlBQVk7QUFBQSxFQUN6QixLQUFLLEdBQUc7QUFBQSxFQUNSLFlBQVksZUFBZSxJQUFJLENBQUMsWUFBWTtBQUFBLElBQzFDLFNBQVM7QUFBQSxJQUNULGFBQWEsT0FBTztBQUFBLElBQ3BCLEtBQUssT0FBTztBQUFBLElBQ1osYUFBYSxPQUFPO0FBQUEsRUFDdEIsRUFBRTtBQUFBLEVBQ0YsUUFBUSxpQkFBaUIsSUFBSSxDQUFDLFdBQVc7QUFBQSxJQUN2QyxTQUFTO0FBQUEsSUFDVCxNQUFNLE1BQU07QUFBQSxJQUNaLGFBQWEsTUFBTTtBQUFBLElBQ25CLEtBQUssTUFBTTtBQUFBLElBQ1gsVUFBVSxNQUFNO0FBQUEsRUFDbEIsRUFBRTtBQUNKO0FBRU8sSUFBTSxzQkFBb0M7QUFBQSxFQUMvQyxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOzs7O0FWbkJBLElBQU0sY0FBYyxNQUFNO0FBQUEsRUFDeEIsTUFBTSxXQUFXLFlBQVk7QUFBQSxFQUU3Qix1QkFBVSxNQUFNO0FBQUEsSUFDZCxJQUFJLENBQUMsU0FBUyxNQUFNO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFFQSxNQUFNLFdBQVcsU0FBUyxLQUFLLE1BQU0sQ0FBQztBQUFBLElBQ3RDLE1BQU0sVUFBVSxTQUFTLGVBQWUsUUFBUTtBQUFBLElBQ2hELElBQUksQ0FBQyxTQUFTO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxJQUVBLE9BQU8sc0JBQXNCLE1BQU07QUFBQSxNQUNqQyxzQkFBc0IsU0FBUyxFQUFFLFVBQVUsS0FBSyxRQUFRLEdBQUcsQ0FBQztBQUFBLEtBQzdEO0FBQUEsS0FDQSxDQUFDLFNBQVMsSUFBSSxDQUFDO0FBQUEsRUFFbEIsdUJBQ0U7QUFBQSxjQVFFO0FBQUEsc0JBUEEsd0JBQUMsYUFBRDtBQUFBLFdBQVM7QUFBQSxTQUFULGlDQUE4QjtBQUFBLHNCQUU5Qix3QkFBQyxxQkFBRDtBQUFBLFFBQWEsTUFBTTtBQUFBLFNBQW5CLGlDQUFnQztBQUFBLHNCQUNoQyx3QkFBQywyQkFBRDtBQUFBLFFBQW1CLFFBQVE7QUFBQSxTQUEzQixpQ0FBdUM7QUFBQSxzQkFDdkMsd0JBQUMsMkJBQUQ7QUFBQSxRQUFtQixRQUFRO0FBQUEsU0FBM0IsaUNBQTZDO0FBQUEsc0JBQzdDLHdCQUFDLCtCQUFEO0FBQUEsUUFBdUIsU0FBUztBQUFBLFNBQWhDLGlDQUFnRDtBQUFBLHNCQUNoRCx3QkFBQyw2QkFBRDtBQUFBLFFBQXFCO0FBQUEsU0FBckIsaUNBQWlEO0FBQUE7QUFBQSxLQVBuRCxnQ0FRRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjAzQ0NDNjU3MkI0QjQ1REU2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
