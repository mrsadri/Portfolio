import {
  GitHub_default,
  smoothScrollToElement
} from "./chunk-ww3gqa7b.js";
import {
  VolunteerActivismRounded_default
} from "./chunk-e4bga9a6.js";
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
          direction: "row",
          spacing: 2,
          alignItems: "center",
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(VolunteerActivismRounded_default, {
              color: "secondary"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
              variant: "h2",
              children: "What I Can Help With"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
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
  sx: {
    py: { xs: 8, md: 12 },
    background: "linear-gradient(135deg, rgba(31,111,235,0.12), rgba(90,200,250,0.16))"
  },
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
      spacing: 2,
      alignItems: "center",
      textAlign: "center",
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
          variant: "h2",
          children: hero.title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
          variant: "h4",
          color: "text.secondary",
          children: hero.subtitle
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
          variant: "h6",
          color: "text.secondary",
          sx: { maxWidth: 720 },
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
      background: isFeatured ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))" : undefined
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
                  sx: { flexGrow: 1 },
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
              color: "text.secondary",
              children: offer.description
            }, undefined, false, undefined, this),
            offer.note && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
              variant: "body2",
              color: "text.secondary",
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

// node_modules/@mui/icons-material/esm/Telegram.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var Telegram_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
  d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
}), "Telegram");

// src/features/contact/data/content.ts
var contactHero = {
  title: "Let's Connect",
  subtitle: "I'd love to hear from you",
  description: "Whether you're looking for a design mentor, want to collaborate on a project, or have an opportunity to discuss, feel free to reach out. I'm always open to meaningful conversations about design, user experience, and building products that matter."
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

//# debugId=2E2700A67404AD4364756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2NoZWR1bGVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcENhcmQudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BbHRlcm5hdGVFbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vVGVsZWdyYW0uanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgeyBzbW9vdGhTY3JvbGxUb0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvc21vb3RoU2Nyb2xsXCI7XG5pbXBvcnQgQ29udGFjdE1ldGhvZHNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uXCI7XG5pbXBvcnQgSGVscFRvcGljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxwVG9waWNzU2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBNZW50b3JzaGlwU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL01lbnRvcnNoaXBTZWN0aW9uXCI7XG5pbXBvcnQgUmVzcG9uc2VUaW1lU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3BvbnNlVGltZVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNvbnRhY3RIZXJvLFxuICBjb250YWN0TWV0aG9kcyxcbiAgaGVscFRvcGljcyxcbiAgbWVudG9yc2hpcE9mZmVycyxcbiAgcmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbnRhY3RQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRJZCA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfSk7XG4gIH0sIFtsb2NhdGlvbi5oYXNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uY29udGFjdFBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2NvbnRhY3RIZXJvfSAvPlxuICAgICAgPEhlbHBUb3BpY3NTZWN0aW9uIHRvcGljcz17aGVscFRvcGljc30gLz5cbiAgICAgIDxNZW50b3JzaGlwU2VjdGlvbiBvZmZlcnM9e21lbnRvcnNoaXBPZmZlcnN9IC8+XG4gICAgICA8Q29udGFjdE1ldGhvZHNTZWN0aW9uIG1ldGhvZHM9e2NvbnRhY3RNZXRob2RzfSAvPlxuICAgICAgPFJlc3BvbnNlVGltZVNlY3Rpb24gcmVzcG9uc2VUaW1lPXtyZXNwb25zZVRpbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdE1ldGhvZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENvbnRhY3RNZXRob2RzU2VjdGlvblByb3BzID0ge1xuICBtZXRob2RzOiBSZWFkb25seUFycmF5PENvbnRhY3RNZXRob2Q+O1xufTtcblxuY29uc3QgQ29udGFjdE1ldGhvZHNTZWN0aW9uID0gKHsgbWV0aG9kcyB9OiBDb250YWN0TWV0aG9kc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgIHttZXRob2RzLm1hcCgobWV0aG9kKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNNYWlsTGluayA9IG1ldGhvZC5ocmVmLnN0YXJ0c1dpdGgoXCJtYWlsdG86XCIpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0ga2V5PXttZXRob2QudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgY29sb3I6IFwicHJpbWFyeS5tYWluXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0aG9kLmljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e21ldGhvZC50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0aG9kLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXttZXRob2QuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtpc01haWxMaW5rID8gdW5kZWZpbmVkIDogXCJfYmxhbmtcIn1cbiAgICAgICAgICAgICAgICAgICAgcmVsPXtpc01haWxMaW5rID8gdW5kZWZpbmVkIDogXCJub29wZW5lciBub3JlZmVycmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttZXRob2QuYWN0aW9uTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdE1ldGhvZHNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Wb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRcIjtcbmltcG9ydCB0eXBlIHsgSGVscFRvcGljIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVscFRvcGljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgdG9waWNzOiBSZWFkb25seUFycmF5PEhlbHBUb3BpYz47XG59O1xuXG5jb25zdCBIZWxwVG9waWNzU2VjdGlvbiA9ICh7IHRvcGljcyB9OiBIZWxwVG9waWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBtYj17NH0+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPldoYXQgSSBDYW4gSGVscCBXaXRoPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge3RvcGljcy5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXt0b3BpYy50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0b3BpYy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dG9waWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBUb3BpY3NTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEhlcm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZXJvU2VjdGlvblByb3BzID0ge1xuICBoZXJvOiBDb250YWN0SGVybztcbn07XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKHsgaGVybyB9OiBIZXJvU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMiB9LFxuICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLDExMSwyMzUsMC4xMiksIHJnYmEoOTAsMjAwLDI1MCwwLjE2KSlcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPntoZXJvLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBtYXhXaWR0aDogNzIwIH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4bS0uMjItMTNoLS4wNmMtLjQgMC0uNzIuMzItLjcyLjcydjQuNzJjMCAuMzUuMTguNjguNDkuODZsNC4xNSAyLjQ5Yy4zNC4yLjc4LjEuOTgtLjI0LjIxLS4zNC4xLS43OS0uMjUtLjk5bC0zLjg3LTIuM1Y3LjcyYzAtLjQtLjMyLS43Mi0uNzItLjcyXCJcbn0pLCAnU2NoZWR1bGVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ2hpcCxcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU2NoZWR1bGVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TY2hlZHVsZVJvdW5kZWRcIjtcbmltcG9ydCB0eXBlIHsgTWVudG9yc2hpcE9mZmVyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgTWVudG9yc2hpcENhcmRQcm9wcyA9IHtcbiAgb2ZmZXI6IE1lbnRvcnNoaXBPZmZlcjtcbn07XG5cbmNvbnN0IE1lbnRvcnNoaXBDYXJkID0gKHsgb2ZmZXIgfTogTWVudG9yc2hpcENhcmRQcm9wcykgPT4ge1xuICBjb25zdCBpc0ZlYXR1cmVkID0gb2ZmZXIuZmVhdHVyZWQgPz8gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IGlzRmVhdHVyZWRcbiAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiw1MywxNDgsMC45MiksIHJnYmEoMzEsMTExLDIzNSwwLjg4KSlcIlxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAge29mZmVyLnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgaWNvbj17PFNjaGVkdWxlUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgIGxhYmVsPXtvZmZlci5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcImRlZmF1bHRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIG1sOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAuLi4oaXNGZWF0dXJlZCAmJiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjE4KVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtvZmZlci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge29mZmVyLm5vdGUgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7b2ZmZXIubm90ZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgaHJlZj17b2ZmZXIuaHJlZn1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgID5cbiAgICAgICAgICB7b2ZmZXIuY3RhTGFiZWwgPz8gXCJDaG9vc2UgYSB0aW1lXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW50b3JzaGlwQ2FyZDtcblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWVudG9yc2hpcE9mZmVyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgTWVudG9yc2hpcENhcmQgZnJvbSBcIi4vTWVudG9yc2hpcENhcmRcIjtcblxudHlwZSBNZW50b3JzaGlwU2VjdGlvblByb3BzID0ge1xuICBvZmZlcnM6IFJlYWRvbmx5QXJyYXk8TWVudG9yc2hpcE9mZmVyPjtcbn07XG5cbmNvbnN0IE1lbnRvcnNoaXBTZWN0aW9uID0gKHsgb2ZmZXJzIH06IE1lbnRvcnNoaXBTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwibWVudG9yc2hpcFwiXG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezR9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5NZW50b3JzaGlwICYgU2Vzc2lvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBMb29raW5nIGZvciBhIG1lbnRvciBvciBzb21lb25lIHRvIGNoYXQgd2l0aD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAge29mZmVycy5tYXAoKG9mZmVyKSA9PiAoXG4gICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17b2ZmZXIudGl0bGV9PlxuICAgICAgICAgICAgPE1lbnRvcnNoaXBDYXJkIG9mZmVyPXtvZmZlcn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnRvcnNoaXBTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyLjcyIDIuMDNDNi42MyAxLjYgMS42IDYuNjMgMi4wMyAxMi43MiAyLjM5IDE4LjAxIDcuMDEgMjIgMTIuMzEgMjJIMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTMuNjdjLTMuNzMgMC03LjE1LTIuNDItOC4wOC02LjAzLTEuNDktNS44IDMuOTEtMTEuMjEgOS43MS05LjcxQzE3LjU4IDUuMTggMjAgOC42IDIwIDEyLjMzdjEuMWMwIC43OS0uNzEgMS41Ny0xLjUgMS41N3MtMS41LS43OC0xLjUtMS41N3YtMS4yNWMwLTIuNTEtMS43OC00Ljc3LTQuMjYtNS4xMi0zLjQtLjQ5LTYuMjcgMi40NS01LjY2IDUuODcuMzQgMS45MSAxLjgzIDMuNDkgMy43MiAzLjk0IDEuODQuNDMgMy41OS0uMTYgNC43NC0xLjMzLjg5IDEuMjIgMi42NyAxLjg2IDQuMyAxLjIxIDEuMzQtLjUzIDIuMTYtMS45IDIuMTYtMy4zNHYtMS4wOWMwLTUuMzEtMy45OS05LjkzLTkuMjgtMTAuMjlNMTIgMTVjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzXCJcbn0pLCAnQWx0ZXJuYXRlRW1haWxSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQWx0ZXJuYXRlRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BbHRlcm5hdGVFbWFpbFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgUmVzcG9uc2VUaW1lIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUmVzcG9uc2VUaW1lU2VjdGlvblByb3BzID0ge1xuICByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZTtcbn07XG5cbmNvbnN0IFJlc3BvbnNlVGltZVNlY3Rpb24gPSAoeyByZXNwb25zZVRpbWUgfTogUmVzcG9uc2VUaW1lU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmQgc3g9e3sgcDogeyB4czogNCwgbWQ6IDUgfSB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QWx0ZXJuYXRlRW1haWxSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3Jlc3BvbnNlVGltZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICB7cmVzcG9uc2VUaW1lLnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGtleT17cGFyYWdyYXBofSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VUaW1lU2VjdGlvbjtcblxuXG4iLAogICAgIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOS43OCAxOC42NWwuMjgtNC4yMyA3LjY4LTYuOTJjLjM0LS4zMS0uMDctLjQ2LS41Mi0uMTlMNy43NCAxMy4zIDMuNjQgMTJjLS44OC0uMjUtLjg5LS44Ni4yLTEuM2wxNS45Ny02LjE2Yy43My0uMzMgMS40My4xOCAxLjE1IDEuM2wtMi43MiAxMi44MWMtLjE5LjkxLS43NCAxLjEzLTEuNS43MUwxMi42IDE2LjNsLTEuOTkgMS45M2MtLjIzLjIzLS40Mi40Mi0uODMuNDJ6XCJcbn0pLCAnVGVsZWdyYW0nKTsiLAogICAgImltcG9ydCBFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsUm91bmRlZFwiO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR2l0SHViXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1RlbGVncmFtXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnRhY3RIZXJvLFxuICBDb250YWN0TWV0aG9kLFxuICBIZWxwVG9waWMsXG4gIE1lbnRvcnNoaXBPZmZlcixcbiAgUmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RIZXJvOiBDb250YWN0SGVybyA9IHtcbiAgdGl0bGU6IFwiTGV0J3MgQ29ubmVjdFwiLFxuICBzdWJ0aXRsZTogXCJJJ2QgbG92ZSB0byBoZWFyIGZyb20geW91XCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSBkZXNpZ24gbWVudG9yLCB3YW50IHRvIGNvbGxhYm9yYXRlIG9uIGEgcHJvamVjdCwgb3IgaGF2ZSBhbiBvcHBvcnR1bml0eSB0byBkaXNjdXNzLCBmZWVsIGZyZWUgdG8gcmVhY2ggb3V0LiBJJ20gYWx3YXlzIG9wZW4gdG8gbWVhbmluZ2Z1bCBjb252ZXJzYXRpb25zIGFib3V0IGRlc2lnbiwgdXNlciBleHBlcmllbmNlLCBhbmQgYnVpbGRpbmcgcHJvZHVjdHMgdGhhdCBtYXR0ZXIuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdE1ldGhvZHM6IFJlYWRvbmx5QXJyYXk8Q29udGFjdE1ldGhvZD4gPSBbXG4gIHtcbiAgICBpY29uOiBFbWFpbFJvdW5kZWRJY29uLFxuICAgIHRpdGxlOiBcIkVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIGdlbmVyYWwgaW5xdWlyaWVzLCBjb2xsYWJvcmF0aW9uIG9wcG9ydHVuaXRpZXMsIG9yIGp1c3QgdG8gc2F5IGhlbGxvXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwic2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgICBocmVmOiBcIm1haWx0bzpzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogVGVsZWdyYW1JY29uLFxuICAgIHRpdGxlOiBcIlRlbGVncmFtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhY2ggb3V0IGZvciBhIHF1aWNrIGNoYXQgb3IgdG8gc2hhcmUgaWRlYXMgYXN5bmNocm9ub3VzbHlcIixcbiAgICBhY3Rpb25MYWJlbDogXCJNZXNzYWdlIG9uIFRlbGVncmFtXCIsXG4gICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogTGlua2VkSW5JY29uLFxuICAgIHRpdGxlOiBcIkxpbmtlZEluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB3aXRoIG1lIHByb2Zlc3Npb25hbGx5IGFuZCBzZWUgbXkgbGF0ZXN0IHVwZGF0ZXNcIixcbiAgICBhY3Rpb25MYWJlbDogXCJWaWV3IFByb2ZpbGVcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBHaXRIdWJJY29uLFxuICAgIHRpdGxlOiBcIkdpdEh1YlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkV4cGxvcmUgbXkgY29kZSwgZXhwZXJpbWVudHMsIGFuZCBvcGVuLXNvdXJjZSBjb250cmlidXRpb25zXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiVmlzaXQgR2l0SHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG1lbnRvcnNoaXBPZmZlcnM6IFJlYWRvbmx5QXJyYXk8TWVudG9yc2hpcE9mZmVyPiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkV4Y2x1c2l2ZSBUYWxrIChGcmVlKVwiLFxuICAgIGR1cmF0aW9uOiBcIjIwIG1pblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlIGNhbiBkaXNjdXNzIG91ciBjYXJlZXIgcGF0aHMgYW5kIHdvcmsgZXhwZXJpZW5jZXMgdG9nZXRoZXIuXCIsXG4gICAgbm90ZTogXCJUbyBjb25maXJtIHlvdXIgc2Vzc2lvbiwgcGxlYXNlIGRvbmF0ZSAkMSB0byBhIGNoYXJpdHkgb2YgeW91ciBjaG9pY2UuXCIsXG4gICAgaHJlZjogXCJodHRwczovL3plZWcubWUvbWFzaWhzL2xldHN0YWxrXCIsXG4gICAgY3RhTGFiZWw6IFwiQ2hvb3NlIGEgdGltZVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIE1lbnRvcnNoaXAgd2l0aCBNYXNpaFwiLFxuICAgIGR1cmF0aW9uOiBcIjc1IG1pblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWFkeSB0byB0YWtlIHlvdXIgZGVzaWduIHNraWxscyB0byB0aGUgbmV4dCBsZXZlbD8gV2Vla2x5IG1lbnRvcnNoaXAgc2Vzc2lvbnMgYXJlIGEgcHJvdmVuIHdheSB0byBsZWFybiBhIG5ldyBza2lsbCBhbmQgYWNjZWxlcmF0ZSB5b3VyIGdyb3d0aCBpbiBVWC9VSSBkZXNpZ24uXCIsXG4gICAgaHJlZjogXCJodHRwczovL3plZWcubWUvbWFzaWhzL21lbnRvcnNoaXBcIixcbiAgICBjdGFMYWJlbDogXCJTZXQgYW4gYXBwb2ludG1lbnRcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBoZWxwVG9waWNzOiBSZWFkb25seUFycmF5PEhlbHBUb3BpYz4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gTWVudG9yc2hpcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPbmUtb24tb25lIGd1aWRhbmNlIGZvciBkZXNpZ25lcnMgYXQgYW55IHN0YWdlIG9mIHRoZWlyIGNhcmVlci4gUG9ydGZvbGlvIHJldmlld3MsIHNraWxsIGRldmVsb3BtZW50LCBhbmQgY2FyZWVyIGFkdmljZS5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBvcnRmb2xpbyBSZXZpZXdzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdldCBmZWVkYmFjayBvbiB5b3VyIGNhc2Ugc3R1ZGllcywgZGVzaWduIHByb2Nlc3MsIGFuZCBwcmVzZW50YXRpb24uIE1ha2UgeW91ciBwb3J0Zm9saW8gc3RhbmQgb3V0LlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUHJvamVjdCBDb2xsYWJvcmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkludGVyZXN0ZWQgaW4gd29ya2luZyB0b2dldGhlciBvbiBhIHByb2R1Y3Qgb3IgZGVzaWduIHN5c3RlbT8gTGV0J3MgZGlzY3VzcyBvcHBvcnR1bml0aWVzLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3BlYWtpbmcgJiBXb3Jrc2hvcHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQXZhaWxhYmxlIGZvciBkZXNpZ24gdGFsa3MsIHdvcmtzaG9wcywgb3IgcGFuZWwgZGlzY3Vzc2lvbnMgYWJvdXQgVVggZGVzaWduLCB1c2VyIHNhZmV0eSwgYW5kIHByb2R1Y3QgZGVzaWduLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNlVGltZTogUmVzcG9uc2VUaW1lID0ge1xuICB0aXRsZTogXCJSZXNwb25zZSBUaW1lXCIsXG4gIHBhcmFncmFwaHM6IFtcbiAgICBcIkkgdHlwaWNhbGx5IHJlc3BvbmQgdG8gZW1haWxzIHdpdGhpbiAyNC00OCBob3Vycy4gRm9yIG1lbnRvcnNoaXAgaW5xdWlyaWVzLCBwbGVhc2UgYWxsb3cgYSBiaXQgbW9yZSB0aW1lIGFzIEkgcmV2aWV3IGVhY2ggcmVxdWVzdCBjYXJlZnVsbHkuXCIsXG4gICAgXCJJZiB5b3UgaGF2ZW4ndCBoZWFyZCBiYWNrIGFmdGVyIDMgZGF5cywgZmVlbCBmcmVlIHRvIHNlbmQgYSBnZW50bGUgZm9sbG93LXVwLlwiLFxuICBdLFxufTtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgZ2V0U2l0ZVVybCBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxzL3NpdGVcIjtcbmltcG9ydCB7IGNvbnRhY3RIZXJvLCBjb250YWN0TWV0aG9kcywgbWVudG9yc2hpcE9mZmVycyB9IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuXG5jb25zdCBzaXRlVXJsID0gZ2V0U2l0ZVVybCgpO1xuXG5jb25zdCBjb250YWN0U3RydWN0dXJlZERhdGE6IFN0cnVjdHVyZWREYXRhID0ge1xuICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gIFwiQHR5cGVcIjogXCJDb250YWN0UGFnZVwiLFxuICBuYW1lOiBcIkNvbnRhY3QgTWFzaWggU2FkcmlcIixcbiAgZGVzY3JpcHRpb246IGNvbnRhY3RIZXJvLmRlc2NyaXB0aW9uLFxuICB1cmw6IGAke3NpdGVVcmx9L2NvbnRhY3RgLFxuICBtYWluRW50aXR5OiBjb250YWN0TWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4gKHtcbiAgICBcIkB0eXBlXCI6IFwiQ29udGFjdFBvaW50XCIsXG4gICAgY29udGFjdFR5cGU6IG1ldGhvZC50aXRsZSxcbiAgICB1cmw6IG1ldGhvZC5ocmVmLFxuICAgIGRlc2NyaXB0aW9uOiBtZXRob2QuZGVzY3JpcHRpb24sXG4gIH0pKSxcbiAgb2ZmZXJzOiBtZW50b3JzaGlwT2ZmZXJzLm1hcCgob2ZmZXIpID0+ICh7XG4gICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgbmFtZTogb2ZmZXIudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IG9mZmVyLmRlc2NyaXB0aW9uLFxuICAgIHVybDogb2ZmZXIuaHJlZixcbiAgICBkdXJhdGlvbjogb2ZmZXIuZHVyYXRpb24sXG4gIH0pKSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZU1ldGFkYXRhOiBQYWdlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkNvbnRhY3QgTWFzaWggU2Fkcmkg4oCUIENvbGxhYm9yYXRpb25zLCBtZW50b3JzaGlwLCBhbmQgc3BlYWtpbmdcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJCb29rIG1lbnRvcnNoaXAgc2Vzc2lvbnMsIHJlcXVlc3QgY29sbGFib3JhdGlvbnMsIG9yIHJlYWNoIE1hc2loIFNhZHJpIGRpcmVjdGx5IGZvciBzZW5pb3IgcHJvZHVjdCBkZXNpZ24gd29yay5cIixcbiAgY2Fub25pY2FsUGF0aDogXCIvY29udGFjdFwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgfSxcbiAgc3RydWN0dXJlZERhdGE6IGNvbnRhY3RTdHJ1Y3R1cmVkRGF0YSxcbn07XG5cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUNRQSxJQUFNLHdCQUF3QixHQUFHLDhCQUMvQix1QkF3Q0UsYUF4Q0Y7QUFBQSxFQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO0FBQUEsRUFBaEMsMEJBQ0UsdUJBc0NFLG1CQXRDRjtBQUFBLDhCQUNFLHVCQW9DRSxjQXBDRjtBQUFBLE1BQU0sV0FBUztBQUFBLE1BQUMsU0FBUztBQUFBLE1BQXpCLFVBQ0csUUFBUSxJQUFJLENBQUMsV0FBVztBQUFBLFFBQ3ZCLE1BQU0sYUFBYSxPQUFPLEtBQUssV0FBVyxTQUFTO0FBQUEsUUFDbkQsdUJBQ0UsdUJBNkJFLGNBN0JGO0FBQUEsVUFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLFVBQTVCLDBCQUNFLHVCQTJCRSxjQTNCRjtBQUFBLFlBQU0sSUFBSSxFQUFFLFFBQVEsT0FBTztBQUFBLFlBQTNCLFVBMkJFO0FBQUEsOEJBMUJBLHVCQVlFLHFCQVpGO0FBQUEsMENBQ0UsdUJBVUUsZUFWRjtBQUFBLGtCQUFPLFNBQVM7QUFBQSxrQkFBRyxZQUFXO0FBQUEsa0JBQTlCLFVBVUU7QUFBQSxvQ0FUQSx1QkFLRSxlQUxGO0FBQUEsc0JBQU8sV0FBVTtBQUFBLHNCQUFNLFNBQVM7QUFBQSxzQkFBSyxZQUFXO0FBQUEsc0JBQWhELFVBS0U7QUFBQSx3Q0FKQSx1QkFFRSxhQUZGO0FBQUEsMEJBQUssSUFBSSxFQUFFLFNBQVMsUUFBUSxZQUFZLFVBQVUsT0FBTyxlQUFlO0FBQUEsMEJBQXhFLDBCQUNFLHVCQUFDLE9BQU8sTUFBUixxQ0FBYTtBQUFBLDJCQURmLGlDQUVFO0FBQUEsd0NBQ0osdUJBQXlDLG9CQUF6QztBQUFBLDBCQUFZLFNBQVE7QUFBQSwwQkFBcEIsVUFBMEIsT0FBTztBQUFBLDJCQUFqQyxpQ0FBeUM7QUFBQTtBQUFBLHVCQUp6QyxnQ0FLRTtBQUFBLG9DQUNGLHVCQUVFLG9CQUZGO0FBQUEsc0JBQVksU0FBUTtBQUFBLHNCQUFRLE9BQU07QUFBQSxzQkFBbEMsVUFDRyxPQUFPO0FBQUEsdUJBRFYsaUNBRUU7QUFBQTtBQUFBLG1CQVRKLGdDQVVFO0FBQUEsaUJBWEosaUNBWUU7QUFBQSw4QkFDRix1QkFZRSxxQkFaRjtBQUFBLGdCQUFhLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLGdCQUF2QywwQkFDRSx1QkFVRSxnQkFWRjtBQUFBLGtCQUNFLFdBQVU7QUFBQSxrQkFDVixNQUFNLE9BQU87QUFBQSxrQkFDYixRQUFRLGFBQWEsWUFBWTtBQUFBLGtCQUNqQyxLQUFLLGFBQWEsWUFBWTtBQUFBLGtCQUM5QixTQUFRO0FBQUEsa0JBQ1IsT0FBTTtBQUFBLGtCQUNOLFdBQVM7QUFBQSxrQkFQWCxVQVNHLE9BQU87QUFBQSxtQkFUVixpQ0FVRTtBQUFBLGlCQVhKLGlDQVlFO0FBQUE7QUFBQSxhQTFCSixnQ0EyQkU7QUFBQSxXQTVCZ0MsT0FBTyxPQUEzQyxzQkE2QkU7QUFBQSxPQUVMO0FBQUEsT0FuQ0gsaUNBb0NFO0FBQUEsS0FyQ0osaUNBc0NFO0FBQUEsR0F2Q0osaUNBd0NFO0FBR0osSUFBZTs7OztBQ3BDZixJQUFNLG9CQUFvQixHQUFHLDZCQUMzQix3QkF5QkUsYUF6QkY7QUFBQSxFQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO0FBQUEsRUFBaEMsMEJBQ0Usd0JBdUJFLG1CQXZCRjtBQUFBLDhCQUNFLHdCQXFCRSxlQXJCRjtBQUFBLE1BQU8sU0FBUztBQUFBLE1BQUcsSUFBSTtBQUFBLE1BQXZCLFVBcUJFO0FBQUEsd0JBcEJBLHdCQUdFLGVBSEY7QUFBQSxVQUFPLFdBQVU7QUFBQSxVQUFNLFNBQVM7QUFBQSxVQUFHLFlBQVc7QUFBQSxVQUE5QyxVQUdFO0FBQUEsNEJBRkEsd0JBQUMsa0NBQUQ7QUFBQSxjQUE4QixPQUFNO0FBQUEsZUFBcEMsaUNBQWdEO0FBQUEsNEJBQ2hELHdCQUErQyxvQkFBL0M7QUFBQSxjQUFZLFNBQVE7QUFBQSxjQUFwQjtBQUFBLGdEQUErQztBQUFBO0FBQUEsV0FGakQsZ0NBR0U7QUFBQSx3QkFDRix3QkFlRSxjQWZGO0FBQUEsVUFBTSxXQUFTO0FBQUEsVUFBQyxTQUFTO0FBQUEsVUFBekIsVUFDRyxPQUFPLElBQUksQ0FBQywwQkFDWCx3QkFXRSxjQVhGO0FBQUEsWUFBTSxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLFlBQTVCLDBCQUNFLHdCQVNFLGNBVEY7QUFBQSxjQUFNLElBQUksRUFBRSxRQUFRLE9BQU87QUFBQSxjQUEzQiwwQkFDRSx3QkFPRSxxQkFQRjtBQUFBLDBDQUNFLHdCQUtFLGVBTEY7QUFBQSxrQkFBTyxTQUFTO0FBQUEsa0JBQWhCLFVBS0U7QUFBQSxvQ0FKQSx3QkFBd0Msb0JBQXhDO0FBQUEsc0JBQVksU0FBUTtBQUFBLHNCQUFwQixVQUEwQixNQUFNO0FBQUEsdUJBQWhDLGlDQUF3QztBQUFBLG9DQUN4Qyx3QkFFRSxvQkFGRjtBQUFBLHNCQUFZLFNBQVE7QUFBQSxzQkFBUSxPQUFNO0FBQUEsc0JBQWxDLFVBQ0csTUFBTTtBQUFBLHVCQURULGlDQUVFO0FBQUE7QUFBQSxtQkFKSixnQ0FLRTtBQUFBLGlCQU5KLGlDQU9FO0FBQUEsZUFSSixpQ0FTRTtBQUFBLGFBVmdDLE1BQU0sT0FBMUMsc0JBV0UsQ0FDSDtBQUFBLFdBZEgsaUNBZUU7QUFBQTtBQUFBLE9BcEJKLGdDQXFCRTtBQUFBLEtBdEJKLGlDQXVCRTtBQUFBLEdBeEJKLGlDQXlCRTtBQUdKLElBQWU7Ozs7QUN0Q2YsSUFBTSxjQUFjLEdBQUcsMkJBQ3JCLHdCQWlCRSxhQWpCRjtBQUFBLEVBQ0UsSUFBSTtBQUFBLElBQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7QUFBQSxJQUNwQixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBSkYsMEJBTUUsd0JBVUUsbUJBVkY7QUFBQSw4QkFDRSx3QkFRRSxlQVJGO0FBQUEsTUFBTyxTQUFTO0FBQUEsTUFBRyxZQUFXO0FBQUEsTUFBUyxXQUFVO0FBQUEsTUFBakQsVUFRRTtBQUFBLHdCQVBBLHdCQUF1QyxvQkFBdkM7QUFBQSxVQUFZLFNBQVE7QUFBQSxVQUFwQixVQUEwQixLQUFLO0FBQUEsV0FBL0IsaUNBQXVDO0FBQUEsd0JBQ3ZDLHdCQUVFLG9CQUZGO0FBQUEsVUFBWSxTQUFRO0FBQUEsVUFBSyxPQUFNO0FBQUEsVUFBL0IsVUFDRyxLQUFLO0FBQUEsV0FEUixpQ0FFRTtBQUFBLHdCQUNGLHdCQUVFLG9CQUZGO0FBQUEsVUFBWSxTQUFRO0FBQUEsVUFBSyxPQUFNO0FBQUEsVUFBaUIsSUFBSSxFQUFFLFVBQVUsSUFBSTtBQUFBLFVBQXBFLFVBQ0csS0FBSztBQUFBLFdBRFIsaUNBRUU7QUFBQTtBQUFBLE9BUEosZ0NBUUU7QUFBQSxLQVRKLGlDQVVFO0FBQUEsR0FoQkosaUNBaUJFO0FBR0osSUFBZTs7O0FDekJmO0FBSEE7QUFJQSxJQUFlLHdEQUEyQix1QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxpQkFBaUI7Ozs7QUNVckIsSUFBTSxpQkFBaUIsR0FBRyxZQUFpQztBQUFBLEVBQ3pELE1BQU0sYUFBYSxNQUFNLFlBQVk7QUFBQSxFQUVyQyx1QkFDRSx3QkF5REUsY0F6REY7QUFBQSxJQUNFLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQSxNQUNmLFlBQVksYUFDUix5RUFDQTtBQUFBLElBQ047QUFBQSxJQVJGLFVBeURFO0FBQUEsc0JBL0NBLHdCQWlDRSxxQkFqQ0Y7QUFBQSxRQUFhLElBQUksRUFBRSxVQUFVLEVBQUU7QUFBQSxRQUEvQiwwQkFDRSx3QkErQkUsZUEvQkY7QUFBQSxVQUFPLFNBQVM7QUFBQSxVQUFoQixVQStCRTtBQUFBLDRCQTlCQSx3QkFxQkUsZUFyQkY7QUFBQSxjQUNFLFdBQVU7QUFBQSxjQUNWLFlBQVc7QUFBQSxjQUNYLFNBQVM7QUFBQSxjQUNULElBQUksRUFBRSxPQUFPLE9BQU87QUFBQSxjQUp0QixVQXFCRTtBQUFBLGdDQWZBLHdCQUVFLG9CQUZGO0FBQUEsa0JBQVksU0FBUTtBQUFBLGtCQUFLLElBQUksRUFBRSxVQUFVLEVBQUU7QUFBQSxrQkFBM0MsVUFDRyxNQUFNO0FBQUEsbUJBRFQsaUNBRUU7QUFBQSxnQ0FDRix3QkFBQyxjQUFEO0FBQUEsa0JBQ0Usc0JBQU0sd0JBQUMseUJBQUQscUNBQXFCO0FBQUEsa0JBQzNCLE9BQU8sTUFBTTtBQUFBLGtCQUNiLE9BQU8sYUFBYSxZQUFZO0FBQUEsa0JBQ2hDLElBQUk7QUFBQSxvQkFDRixJQUFJO0FBQUEsdUJBQ0EsY0FBYztBQUFBLHNCQUNoQixpQkFBaUI7QUFBQSxzQkFDakIsT0FBTztBQUFBLG9CQUNUO0FBQUEsa0JBQ0Y7QUFBQSxtQkFWRixpQ0FXQTtBQUFBO0FBQUEsZUFwQkYsZ0NBcUJFO0FBQUEsNEJBQ0Ysd0JBRUUsb0JBRkY7QUFBQSxjQUFZLFNBQVE7QUFBQSxjQUFRLE9BQU07QUFBQSxjQUFsQyxVQUNHLE1BQU07QUFBQSxlQURULGlDQUVFO0FBQUEsWUFDRCxNQUFNLHdCQUNMLHdCQUVFLG9CQUZGO0FBQUEsY0FBWSxTQUFRO0FBQUEsY0FBUSxPQUFNO0FBQUEsY0FBbEMsVUFDRyxNQUFNO0FBQUEsZUFEVCxpQ0FFRTtBQUFBO0FBQUEsV0E3Qk4sZ0NBK0JFO0FBQUEsU0FoQ0osaUNBaUNFO0FBQUEsc0JBQ0Ysd0JBWUUscUJBWkY7QUFBQSxRQUFhLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLFFBQXZDLDBCQUNFLHdCQVVFLGdCQVZGO0FBQUEsVUFDRSxXQUFVO0FBQUEsVUFDVixNQUFNLE1BQU07QUFBQSxVQUNaLFFBQU87QUFBQSxVQUNQLEtBQUk7QUFBQSxVQUNKLFNBQVE7QUFBQSxVQUNSLE9BQU8sYUFBYSxjQUFjO0FBQUEsVUFDbEMsV0FBUztBQUFBLFVBUFgsVUFTRyxNQUFNLFlBQVk7QUFBQSxXQVRyQixpQ0FVRTtBQUFBLFNBWEosaUNBWUU7QUFBQTtBQUFBLEtBeERKLGdDQXlERTtBQUFBO0FBSU4sSUFBZTs7OztBQ3hFZixJQUFNLG9CQUFvQixHQUFHLDZCQUMzQix3QkFzQkUsYUF0QkY7QUFBQSxFQUNFLElBQUc7QUFBQSxFQUNILElBQUk7QUFBQSxJQUNGLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUEsSUFDbkIsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUxGLDBCQU9FLHdCQWNFLG1CQWRGO0FBQUEsY0FjRTtBQUFBLHNCQWJBLHdCQUtFLGVBTEY7QUFBQSxRQUFPLFNBQVM7QUFBQSxRQUFHLFlBQVc7QUFBQSxRQUFTLFdBQVU7QUFBQSxRQUFTLElBQUk7QUFBQSxRQUE5RCxVQUtFO0FBQUEsMEJBSkEsd0JBQWdELG9CQUFoRDtBQUFBLFlBQVksU0FBUTtBQUFBLFlBQXBCO0FBQUEsOENBQWdEO0FBQUEsMEJBQ2hELHdCQUVFLG9CQUZGO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBSyxPQUFNO0FBQUEsWUFBL0I7QUFBQSw4Q0FFRTtBQUFBO0FBQUEsU0FKSixnQ0FLRTtBQUFBLHNCQUNGLHdCQU1FLGNBTkY7QUFBQSxRQUFNLFdBQVM7QUFBQSxRQUFDLFNBQVM7QUFBQSxRQUF6QixVQUNHLE9BQU8sSUFBSSxDQUFDLDBCQUNYLHdCQUVFLGNBRkY7QUFBQSxVQUFNLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsVUFBNUIsMEJBQ0Usd0JBQUMsd0JBQUQ7QUFBQSxZQUFnQjtBQUFBLGFBQWhCLGlDQUE4QjtBQUFBLFdBREksTUFBTSxPQUExQyxzQkFFRSxDQUNIO0FBQUEsU0FMSCxpQ0FNRTtBQUFBO0FBQUEsS0FiSixnQ0FjRTtBQUFBLEdBckJKLGlDQXNCRTtBQUdKLElBQWU7OztBQ2hDZjtBQUhBO0FBSUEsSUFBZSw4REFBMkIsd0JBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsdUJBQXVCOzs7O0FDUTNCLElBQU0sc0JBQXNCLEdBQUcsbUNBQzdCLHdCQXFCRSxhQXJCRjtBQUFBLEVBQ0UsSUFBSTtBQUFBLElBQ0YsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFBQSxJQUNuQixpQkFBaUI7QUFBQSxFQUNuQjtBQUFBLEVBSkYsMEJBTUUsd0JBY0UsbUJBZEY7QUFBQSw4QkFDRSx3QkFZRSxjQVpGO0FBQUEsTUFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtBQUFBLE1BQWhDLDBCQUNFLHdCQVVFLGVBVkY7QUFBQSxRQUFPLFNBQVM7QUFBQSxRQUFoQixVQVVFO0FBQUEsMEJBVEEsd0JBR0UsZUFIRjtBQUFBLFlBQU8sV0FBVTtBQUFBLFlBQU0sU0FBUztBQUFBLFlBQUcsWUFBVztBQUFBLFlBQTlDLFVBR0U7QUFBQSw4QkFGQSx3QkFBQywrQkFBRDtBQUFBLGdCQUEyQixPQUFNO0FBQUEsaUJBQWpDLGlDQUEyQztBQUFBLDhCQUMzQyx3QkFBK0Msb0JBQS9DO0FBQUEsZ0JBQVksU0FBUTtBQUFBLGdCQUFwQixVQUEwQixhQUFhO0FBQUEsaUJBQXZDLGlDQUErQztBQUFBO0FBQUEsYUFGakQsZ0NBR0U7QUFBQSxVQUNELGFBQWEsV0FBVyxJQUFJLENBQUMsOEJBQzVCLHdCQUVFLG9CQUZGO0FBQUEsWUFBNEIsU0FBUTtBQUFBLFlBQVEsT0FBTTtBQUFBLFlBQWxELFVBQ0c7QUFBQSxhQURjLFdBQWpCLHNCQUVFLENBQ0g7QUFBQTtBQUFBLFNBVEgsZ0NBVUU7QUFBQSxPQVhKLGlDQVlFO0FBQUEsS0FiSixpQ0FjRTtBQUFBLEdBcEJKLGlDQXFCRTtBQUdKLElBQWU7OztBQ3JDZjtBQUVBO0FBSkE7QUFLQSxJQUFlLGlEQUEyQix3QkFBSyxRQUFRO0FBQUEsRUFDckQsR0FBRztBQUNMLENBQUMsR0FBRyxVQUFVOzs7QUNLUCxJQUFNLGNBQTJCO0FBQUEsRUFDdEMsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsYUFDRTtBQUNKO0FBRU8sSUFBTSxpQkFBK0M7QUFBQSxFQUMxRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sbUJBQW1EO0FBQUEsRUFDOUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsYUFDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLEVBQ1o7QUFDRjtBQUVPLElBQU0sYUFBdUM7QUFBQSxFQUNsRDtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLEVBQ0o7QUFDRjtBQUVPLElBQU0sZUFBNkI7QUFBQSxFQUN4QyxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7OztBQzlGQSxJQUFNLFVBQVUsYUFBVztBQUUzQixJQUFNLHdCQUF3QztBQUFBLEVBQzVDLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLGFBQWEsWUFBWTtBQUFBLEVBQ3pCLEtBQUssR0FBRztBQUFBLEVBQ1IsWUFBWSxlQUFlLElBQUksQ0FBQyxZQUFZO0FBQUEsSUFDMUMsU0FBUztBQUFBLElBQ1QsYUFBYSxPQUFPO0FBQUEsSUFDcEIsS0FBSyxPQUFPO0FBQUEsSUFDWixhQUFhLE9BQU87QUFBQSxFQUN0QixFQUFFO0FBQUEsRUFDRixRQUFRLGlCQUFpQixJQUFJLENBQUMsV0FBVztBQUFBLElBQ3ZDLFNBQVM7QUFBQSxJQUNULE1BQU0sTUFBTTtBQUFBLElBQ1osYUFBYSxNQUFNO0FBQUEsSUFDbkIsS0FBSyxNQUFNO0FBQUEsSUFDWCxVQUFVLE1BQU07QUFBQSxFQUNsQixFQUFFO0FBQ0o7QUFFTyxJQUFNLHNCQUFvQztBQUFBLEVBQy9DLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxnQkFBZ0I7QUFDbEI7Ozs7QVhuQkEsSUFBTSxjQUFjLE1BQU07QUFBQSxFQUN4QixNQUFNLFdBQVcsWUFBWTtBQUFBLEVBRTdCLHVCQUFVLE1BQU07QUFBQSxJQUNkLElBQUksQ0FBQyxTQUFTLE1BQU07QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUVBLE1BQU0sV0FBVyxTQUFTLEtBQUssTUFBTSxDQUFDO0FBQUEsSUFDdEMsTUFBTSxVQUFVLFNBQVMsZUFBZSxRQUFRO0FBQUEsSUFDaEQsSUFBSSxDQUFDLFNBQVM7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBRUEsT0FBTyxzQkFBc0IsTUFBTTtBQUFBLE1BQ2pDLHNCQUFzQixTQUFTLEVBQUUsVUFBVSxLQUFLLFFBQVEsR0FBRyxDQUFDO0FBQUEsS0FDN0Q7QUFBQSxLQUNBLENBQUMsU0FBUyxJQUFJLENBQUM7QUFBQSxFQUVsQix1QkFDRTtBQUFBLGNBUUU7QUFBQSxzQkFQQSx3QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQThCO0FBQUEsc0JBRTlCLHdCQUFDLHFCQUFEO0FBQUEsUUFBYSxNQUFNO0FBQUEsU0FBbkIsaUNBQWdDO0FBQUEsc0JBQ2hDLHdCQUFDLDJCQUFEO0FBQUEsUUFBbUIsUUFBUTtBQUFBLFNBQTNCLGlDQUF1QztBQUFBLHNCQUN2Qyx3QkFBQywyQkFBRDtBQUFBLFFBQW1CLFFBQVE7QUFBQSxTQUEzQixpQ0FBNkM7QUFBQSxzQkFDN0Msd0JBQUMsK0JBQUQ7QUFBQSxRQUF1QixTQUFTO0FBQUEsU0FBaEMsaUNBQWdEO0FBQUEsc0JBQ2hELHdCQUFDLDZCQUFEO0FBQUEsUUFBcUI7QUFBQSxTQUFyQixpQ0FBaUQ7QUFBQTtBQUFBLEtBUG5ELGdDQVFFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMkUyNzAwQTY3NDA0QUQ0MzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
