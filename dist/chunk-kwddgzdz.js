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

// src/features/contact/components/MentorshipSection.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var MentorshipSection = ({ offers }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  id: "mentorship",
  sx: {
    py: { xs: 6, md: 8 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
        spacing: 3,
        alignItems: "center",
        textAlign: "center",
        mb: 4,
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
            variant: "h2",
            children: "Mentorship & Sessions"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
            variant: "h6",
            color: "text.secondary",
            children: "Looking for a mentor or someone to chat with?"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
        container: true,
        spacing: 3,
        children: offers.map((offer) => {
          const isFeatured = offer.featured ?? false;
          return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Card_default, {
              sx: {
                height: "100%",
                background: isFeatured ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))" : undefined,
                color: isFeatured ? "primary.contrastText" : undefined
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardContent_default, {
                  sx: { pb: 2 },
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
                        color: isFeatured ? "inherit" : "text.secondary",
                        children: offer.description
                      }, undefined, false, undefined, this),
                      offer.note && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
                        variant: "body2",
                        color: isFeatured ? "inherit" : "text.secondary",
                        children: offer.note
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(CardActions_default, {
                  sx: { px: 3, pb: 3, pt: 0, gap: 0 },
                  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Button_default, {
                    component: "a",
                    href: offer.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    variant: "outlined",
                    color: isFeatured ? "secondary" : "primary",
                    fullWidth: true,
                    sx: { m: 0 },
                    children: offer.ctaLabel ?? "Choose a time"
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, offer.title, false, undefined, this);
        })
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
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var ResponseTimeSection = ({ responseTime }) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Box_default, {
  sx: {
    py: { xs: 6, md: 8 },
    backgroundColor: "background.paper"
  },
  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Card_default, {
      sx: { p: { xs: 4, md: 5 } },
      children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
        spacing: 2,
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
            direction: "row",
            spacing: 2,
            alignItems: "center",
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(AlternateEmailRounded_default, {
                color: "primary"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                variant: "h4",
                children: responseTime.title
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          responseTime.paragraphs.map((paragraph) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
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
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Seo_default, {
        ...contactPageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(HeroSection_default, {
        hero: contactHero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(HelpTopicsSection_default, {
        topics: helpTopics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(MentorshipSection_default, {
        offers: mentorshipOffers
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ContactMethodsSection_default, {
        methods: contactMethods
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ResponseTimeSection_default, {
        responseTime
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ContactPage_default = ContactPage;
export {
  ContactPage_default as default
};

//# debugId=20C5809EB5D8119C64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vU2NoZWR1bGVSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BbHRlcm5hdGVFbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9SZXNwb25zZVRpbWVTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vVGVsZWdyYW0uanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgeyBzbW9vdGhTY3JvbGxUb0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvc21vb3RoU2Nyb2xsXCI7XG5pbXBvcnQgQ29udGFjdE1ldGhvZHNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uXCI7XG5pbXBvcnQgSGVscFRvcGljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxwVG9waWNzU2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBNZW50b3JzaGlwU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL01lbnRvcnNoaXBTZWN0aW9uXCI7XG5pbXBvcnQgUmVzcG9uc2VUaW1lU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3BvbnNlVGltZVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNvbnRhY3RIZXJvLFxuICBjb250YWN0TWV0aG9kcyxcbiAgaGVscFRvcGljcyxcbiAgbWVudG9yc2hpcE9mZmVycyxcbiAgcmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbnRhY3RQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRJZCA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNtb290aFNjcm9sbFRvRWxlbWVudChlbGVtZW50LCB7IGR1cmF0aW9uOiA5MDAsIG9mZnNldDogMTYgfSk7XG4gICAgfSk7XG4gIH0sIFtsb2NhdGlvbi5oYXNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uY29udGFjdFBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2NvbnRhY3RIZXJvfSAvPlxuICAgICAgPEhlbHBUb3BpY3NTZWN0aW9uIHRvcGljcz17aGVscFRvcGljc30gLz5cbiAgICAgIDxNZW50b3JzaGlwU2VjdGlvbiBvZmZlcnM9e21lbnRvcnNoaXBPZmZlcnN9IC8+XG4gICAgICA8Q29udGFjdE1ldGhvZHNTZWN0aW9uIG1ldGhvZHM9e2NvbnRhY3RNZXRob2RzfSAvPlxuICAgICAgPFJlc3BvbnNlVGltZVNlY3Rpb24gcmVzcG9uc2VUaW1lPXtyZXNwb25zZVRpbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdE1ldGhvZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIENvbnRhY3RNZXRob2RzU2VjdGlvblByb3BzID0ge1xuICBtZXRob2RzOiBSZWFkb25seUFycmF5PENvbnRhY3RNZXRob2Q+O1xufTtcblxuY29uc3QgQ29udGFjdE1ldGhvZHNTZWN0aW9uID0gKHsgbWV0aG9kcyB9OiBDb250YWN0TWV0aG9kc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgIHttZXRob2RzLm1hcCgobWV0aG9kKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNNYWlsTGluayA9IG1ldGhvZC5ocmVmLnN0YXJ0c1dpdGgoXCJtYWlsdG86XCIpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDMgfX0ga2V5PXttZXRob2QudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MS41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgY29sb3I6IFwicHJpbWFyeS5tYWluXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0aG9kLmljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57bWV0aG9kLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRob2QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21ldGhvZC5ocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2lzTWFpbExpbmsgPyB1bmRlZmluZWQgOiBcIl9ibGFua1wifVxuICAgICAgICAgICAgICAgICAgICByZWw9e2lzTWFpbExpbmsgPyB1bmRlZmluZWQgOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge21ldGhvZC5hY3Rpb25MYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TWV0aG9kc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1ZvbHVudGVlckFjdGl2aXNtUm91bmRlZFwiO1xuaW1wb3J0IHR5cGUgeyBIZWxwVG9waWMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZWxwVG9waWNzU2VjdGlvblByb3BzID0ge1xuICB0b3BpY3M6IFJlYWRvbmx5QXJyYXk8SGVscFRvcGljPjtcbn07XG5cbmNvbnN0IEhlbHBUb3BpY3NTZWN0aW9uID0gKHsgdG9waWNzIH06IEhlbHBUb3BpY3NTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IG1iPXs0fT5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Vm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+V2hhdCBJIENhbiBIZWxwIFdpdGg8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICB7dG9waWNzLm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e3RvcGljLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RvcGljLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscFRvcGljc1NlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDb250YWN0SGVybyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlcm9TZWN0aW9uUHJvcHMgPSB7XG4gIGhlcm86IENvbnRhY3RIZXJvO1xufTtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBoZXJvIH06IEhlcm9TZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogOCwgbWQ6IDEyIH0sXG4gICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsMTExLDIzNSwwLjEyKSwgcmdiYSg5MCwyMDAsMjUwLDAuMTYpKVwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e2hlcm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2hlcm8uc3VidGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IG1heFdpZHRoOiA3MjAgfX0+XG4gICAgICAgICAge2hlcm8uZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMk0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDhtLS4yMi0xM2gtLjA2Yy0uNCAwLS43Mi4zMi0uNzIuNzJ2NC43MmMwIC4zNS4xOC42OC40OS44Nmw0LjE1IDIuNDljLjM0LjIuNzguMS45OC0uMjQuMjEtLjM0LjEtLjc5LS4yNS0uOTlsLTMuODctMi4zVjcuNzJjMC0uNC0uMzItLjcyLS43Mi0uNzJcIlxufSksICdTY2hlZHVsZVJvdW5kZWQnKTsiLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDaGlwLFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNjaGVkdWxlUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2NoZWR1bGVSb3VuZGVkXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnRvcnNoaXBPZmZlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIE1lbnRvcnNoaXBTZWN0aW9uUHJvcHMgPSB7XG4gIG9mZmVyczogUmVhZG9ubHlBcnJheTxNZW50b3JzaGlwT2ZmZXI+O1xufTtcblxuY29uc3QgTWVudG9yc2hpcFNlY3Rpb24gPSAoeyBvZmZlcnMgfTogTWVudG9yc2hpcFNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgaWQ9XCJtZW50b3JzaGlwXCJcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk1lbnRvcnNoaXAgJiBTZXNzaW9uczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIExvb2tpbmcgZm9yIGEgbWVudG9yIG9yIHNvbWVvbmUgdG8gY2hhdCB3aXRoP1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICB7b2ZmZXJzLm1hcCgob2ZmZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0ZlYXR1cmVkID0gb2ZmZXIuZmVhdHVyZWQgPz8gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNiB9fSBrZXk9e29mZmVyLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzRmVhdHVyZWRcbiAgICAgICAgICAgICAgICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTIsNTMsMTQ4LDAuOTIpLCByZ2JhKDMxLDExMSwyMzUsMC44OCkpXCJcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNGZWF0dXJlZCA/IFwicHJpbWFyeS5jb250cmFzdFRleHRcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHBiOiAyIH19PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxTY2hlZHVsZVJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e29mZmVyLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcImRlZmF1bHRcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWw6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXNGZWF0dXJlZCAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4xOClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj17aXNGZWF0dXJlZCA/IFwiaW5oZXJpdFwiIDogXCJ0ZXh0LnNlY29uZGFyeVwifT5cbiAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge29mZmVyLm5vdGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPXtpc0ZlYXR1cmVkID8gXCJpbmhlcml0XCIgOiBcInRleHQuc2Vjb25kYXJ5XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyLm5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwLCBnYXA6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtvZmZlci5ocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAwIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvZmZlci5jdGFMYWJlbCA/PyBcIkNob29zZSBhIHRpbWVcIn1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW50b3JzaGlwU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMi43MiAyLjAzQzYuNjMgMS42IDEuNiA2LjYzIDIuMDMgMTIuNzIgMi4zOSAxOC4wMSA3LjAxIDIyIDEyLjMxIDIySDE2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zLjY3Yy0zLjczIDAtNy4xNS0yLjQyLTguMDgtNi4wMy0xLjQ5LTUuOCAzLjkxLTExLjIxIDkuNzEtOS43MUMxNy41OCA1LjE4IDIwIDguNiAyMCAxMi4zM3YxLjFjMCAuNzktLjcxIDEuNTctMS41IDEuNTdzLTEuNS0uNzgtMS41LTEuNTd2LTEuMjVjMC0yLjUxLTEuNzgtNC43Ny00LjI2LTUuMTItMy40LS40OS02LjI3IDIuNDUtNS42NiA1Ljg3LjM0IDEuOTEgMS44MyAzLjQ5IDMuNzIgMy45NCAxLjg0LjQzIDMuNTktLjE2IDQuNzQtMS4zMy44OSAxLjIyIDIuNjcgMS44NiA0LjMgMS4yMSAxLjM0LS41MyAyLjE2LTEuOSAyLjE2LTMuMzR2LTEuMDljMC01LjMxLTMuOTktOS45My05LjI4LTEwLjI5TTEyIDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM1wiXG59KSwgJ0FsdGVybmF0ZUVtYWlsUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWx0ZXJuYXRlRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3BvbnNlVGltZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcyA9IHtcbiAgcmVzcG9uc2VUaW1lOiBSZXNwb25zZVRpbWU7XG59O1xuXG5jb25zdCBSZXNwb25zZVRpbWVTZWN0aW9uID0gKHsgcmVzcG9uc2VUaW1lIH06IFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkIHN4PXt7IHA6IHsgeHM6IDQsIG1kOiA1IH0gfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntyZXNwb25zZVRpbWUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAge3Jlc3BvbnNlVGltZS5wYXJhZ3JhcGhzLm1hcCgocGFyYWdyYXBoKSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e3BhcmFncmFwaH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlVGltZVNlY3Rpb247XG5cblxuIiwKICAgICIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkuNzggMTguNjVsLjI4LTQuMjMgNy42OC02LjkyYy4zNC0uMzEtLjA3LS40Ni0uNTItLjE5TDcuNzQgMTMuMyAzLjY0IDEyYy0uODgtLjI1LS44OS0uODYuMi0xLjNsMTUuOTctNi4xNmMuNzMtLjMzIDEuNDMuMTggMS4xNSAxLjNsLTIuNzIgMTIuODFjLS4xOS45MS0uNzQgMS4xMy0xLjUuNzFMMTIuNiAxNi4zbC0xLjk5IDEuOTNjLS4yMy4yMy0uNDIuNDItLjgzLjQyelwiXG59KSwgJ1RlbGVncmFtJyk7IiwKICAgICJpbXBvcnQgRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbFJvdW5kZWRcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YlwiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UZWxlZ3JhbVwiO1xuaW1wb3J0IHR5cGUge1xuICBDb250YWN0SGVybyxcbiAgQ29udGFjdE1ldGhvZCxcbiAgSGVscFRvcGljLFxuICBNZW50b3JzaGlwT2ZmZXIsXG4gIFJlc3BvbnNlVGltZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0SGVybzogQ29udGFjdEhlcm8gPSB7XG4gIHRpdGxlOiBcIkxldCdzIENvbm5lY3RcIixcbiAgc3VidGl0bGU6IFwiSSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIldoZXRoZXIgeW91J3JlIGxvb2tpbmcgZm9yIGEgZGVzaWduIG1lbnRvciwgd2FudCB0byBjb2xsYWJvcmF0ZSBvbiBhIHByb2plY3QsIG9yIGhhdmUgYW4gb3Bwb3J0dW5pdHkgdG8gZGlzY3VzcywgZmVlbCBmcmVlIHRvIHJlYWNoIG91dC4gSSdtIGFsd2F5cyBvcGVuIHRvIG1lYW5pbmdmdWwgY29udmVyc2F0aW9ucyBhYm91dCBkZXNpZ24sIHVzZXIgZXhwZXJpZW5jZSwgYW5kIGJ1aWxkaW5nIHByb2R1Y3RzIHRoYXQgbWF0dGVyLlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RNZXRob2RzOiBSZWFkb25seUFycmF5PENvbnRhY3RNZXRob2Q+ID0gW1xuICB7XG4gICAgaWNvbjogRW1haWxSb3VuZGVkSWNvbixcbiAgICB0aXRsZTogXCJFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvciBnZW5lcmFsIGlucXVpcmllcywgY29sbGFib3JhdGlvbiBvcHBvcnR1bml0aWVzLCBvciBqdXN0IHRvIHNheSBoZWxsb1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcInNhZHJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgaHJlZjogXCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgfSxcbiAge1xuICAgIGljb246IFRlbGVncmFtSWNvbixcbiAgICB0aXRsZTogXCJUZWxlZ3JhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlYWNoIG91dCBmb3IgYSBxdWljayBjaGF0IG9yIHRvIHNoYXJlIGlkZWFzIGFzeW5jaHJvbm91c2x5XCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiTWVzc2FnZSBvbiBUZWxlZ3JhbVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly90Lm1lL21hc2loc2FkcmlcIixcbiAgfSxcbiAge1xuICAgIGljb246IExpbmtlZEluSWNvbixcbiAgICB0aXRsZTogXCJMaW5rZWRJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbm5lY3Qgd2l0aCBtZSBwcm9mZXNzaW9uYWxseSBhbmQgc2VlIG15IGxhdGVzdCB1cGRhdGVzXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiVmlldyBQcm9maWxlXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogR2l0SHViSWNvbixcbiAgICB0aXRsZTogXCJHaXRIdWJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIG15IGNvZGUsIGV4cGVyaW1lbnRzLCBhbmQgb3Blbi1zb3VyY2UgY29udHJpYnV0aW9uc1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcIlZpc2l0IEdpdEh1YlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21yc2FkcmlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBtZW50b3JzaGlwT2ZmZXJzOiBSZWFkb25seUFycmF5PE1lbnRvcnNoaXBPZmZlcj4gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJFeGNsdXNpdmUgVGFsayAoRnJlZSlcIixcbiAgICBkdXJhdGlvbjogXCIyMCBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZSBjYW4gZGlzY3VzcyBvdXIgY2FyZWVyIHBhdGhzIGFuZCB3b3JrIGV4cGVyaWVuY2VzIHRvZ2V0aGVyLlwiLFxuICAgIG5vdGU6IFwiVG8gY29uZmlybSB5b3VyIHNlc3Npb24sIHBsZWFzZSBkb25hdGUgJDEgdG8gYSBjaGFyaXR5IG9mIHlvdXIgY2hvaWNlLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9sZXRzdGFsa1wiLFxuICAgIGN0YUxhYmVsOiBcIkNob29zZSBhIHRpbWVcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBNZW50b3JzaGlwIHdpdGggTWFzaWhcIixcbiAgICBkdXJhdGlvbjogXCI3NSBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVhZHkgdG8gdGFrZSB5b3VyIGRlc2lnbiBza2lsbHMgdG8gdGhlIG5leHQgbGV2ZWw/IFdlZWtseSBtZW50b3JzaGlwIHNlc3Npb25zIGFyZSBhIHByb3ZlbiB3YXkgdG8gbGVhcm4gYSBuZXcgc2tpbGwgYW5kIGFjY2VsZXJhdGUgeW91ciBncm93dGggaW4gVVgvVUkgZGVzaWduLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9tZW50b3JzaGlwXCIsXG4gICAgY3RhTGFiZWw6IFwiU2V0IGFuIGFwcG9pbnRtZW50XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaGVscFRvcGljczogUmVhZG9ubHlBcnJheTxIZWxwVG9waWM+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIE1lbnRvcnNoaXBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT25lLW9uLW9uZSBndWlkYW5jZSBmb3IgZGVzaWduZXJzIGF0IGFueSBzdGFnZSBvZiB0aGVpciBjYXJlZXIuIFBvcnRmb2xpbyByZXZpZXdzLCBza2lsbCBkZXZlbG9wbWVudCwgYW5kIGNhcmVlciBhZHZpY2UuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3J0Zm9saW8gUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgZmVlZGJhY2sgb24geW91ciBjYXNlIHN0dWRpZXMsIGRlc2lnbiBwcm9jZXNzLCBhbmQgcHJlc2VudGF0aW9uLiBNYWtlIHlvdXIgcG9ydGZvbGlvIHN0YW5kIG91dC5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2plY3QgQ29sbGFib3JhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJbnRlcmVzdGVkIGluIHdvcmtpbmcgdG9nZXRoZXIgb24gYSBwcm9kdWN0IG9yIGRlc2lnbiBzeXN0ZW0/IExldCdzIGRpc2N1c3Mgb3Bwb3J0dW5pdGllcy5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWFraW5nICYgV29ya3Nob3BzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkF2YWlsYWJsZSBmb3IgZGVzaWduIHRhbGtzLCB3b3Jrc2hvcHMsIG9yIHBhbmVsIGRpc2N1c3Npb25zIGFib3V0IFVYIGRlc2lnbiwgdXNlciBzYWZldHksIGFuZCBwcm9kdWN0IGRlc2lnbi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZSA9IHtcbiAgdGl0bGU6IFwiUmVzcG9uc2UgVGltZVwiLFxuICBwYXJhZ3JhcGhzOiBbXG4gICAgXCJJIHR5cGljYWxseSByZXNwb25kIHRvIGVtYWlscyB3aXRoaW4gMjQtNDggaG91cnMuIEZvciBtZW50b3JzaGlwIGlucXVpcmllcywgcGxlYXNlIGFsbG93IGEgYml0IG1vcmUgdGltZSBhcyBJIHJldmlldyBlYWNoIHJlcXVlc3QgY2FyZWZ1bGx5LlwiLFxuICAgIFwiSWYgeW91IGhhdmVuJ3QgaGVhcmQgYmFjayBhZnRlciAzIGRheXMsIGZlZWwgZnJlZSB0byBzZW5kIGEgZ2VudGxlIGZvbGxvdy11cC5cIixcbiAgXSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBjb250YWN0SGVybywgY29udGFjdE1ldGhvZHMsIG1lbnRvcnNoaXBPZmZlcnMgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgY29udGFjdFN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ29udGFjdFBhZ2VcIixcbiAgbmFtZTogXCJDb250YWN0IE1hc2loIFNhZHJpXCIsXG4gIGRlc2NyaXB0aW9uOiBjb250YWN0SGVyby5kZXNjcmlwdGlvbixcbiAgdXJsOiBgJHtzaXRlVXJsfS9jb250YWN0YCxcbiAgbWFpbkVudGl0eTogY29udGFjdE1ldGhvZHMubWFwKChtZXRob2QpID0+ICh7XG4gICAgXCJAdHlwZVwiOiBcIkNvbnRhY3RQb2ludFwiLFxuICAgIGNvbnRhY3RUeXBlOiBtZXRob2QudGl0bGUsXG4gICAgdXJsOiBtZXRob2QuaHJlZixcbiAgICBkZXNjcmlwdGlvbjogbWV0aG9kLmRlc2NyaXB0aW9uLFxuICB9KSksXG4gIG9mZmVyczogbWVudG9yc2hpcE9mZmVycy5tYXAoKG9mZmVyKSA9PiAoe1xuICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgIG5hbWU6IG9mZmVyLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBvZmZlci5kZXNjcmlwdGlvbixcbiAgICB1cmw6IG9mZmVyLmhyZWYsXG4gICAgZHVyYXRpb246IG9mZmVyLmR1cmF0aW9uLFxuICB9KSksXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgY29udGFjdFBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJDb250YWN0IE1hc2loIFNhZHJpIOKAlCBDb2xsYWJvcmF0aW9ucywgbWVudG9yc2hpcCwgYW5kIHNwZWFraW5nXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQm9vayBtZW50b3JzaGlwIHNlc3Npb25zLCByZXF1ZXN0IGNvbGxhYm9yYXRpb25zLCBvciByZWFjaCBNYXNpaCBTYWRyaSBkaXJlY3RseSBmb3Igc2VuaW9yIHByb2R1Y3QgZGVzaWduIHdvcmsuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2NvbnRhY3RcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBjb250YWN0U3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FDUUEsSUFBTSx3QkFBd0IsR0FBRyw4QkFDL0IsdUJBd0NFLGFBeENGO0FBQUEsRUFBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtBQUFBLEVBQWhDLDBCQUNFLHVCQXNDRSxtQkF0Q0Y7QUFBQSw4QkFDRSx1QkFvQ0UsY0FwQ0Y7QUFBQSxNQUFNLFdBQVM7QUFBQSxNQUFDLFNBQVM7QUFBQSxNQUF6QixVQUNHLFFBQVEsSUFBSSxDQUFDLFdBQVc7QUFBQSxRQUN2QixNQUFNLGFBQWEsT0FBTyxLQUFLLFdBQVcsU0FBUztBQUFBLFFBQ25ELHVCQUNFLHVCQTZCRSxjQTdCRjtBQUFBLFVBQU0sTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBQSxVQUE1QiwwQkFDRSx1QkEyQkUsY0EzQkY7QUFBQSxZQUFNLElBQUksRUFBRSxRQUFRLE9BQU87QUFBQSxZQUEzQixVQTJCRTtBQUFBLDhCQTFCQSx1QkFZRSxxQkFaRjtBQUFBLDBDQUNFLHVCQVVFLGVBVkY7QUFBQSxrQkFBTyxTQUFTO0FBQUEsa0JBQUcsWUFBVztBQUFBLGtCQUE5QixVQVVFO0FBQUEsb0NBVEEsdUJBS0UsZUFMRjtBQUFBLHNCQUFPLFdBQVU7QUFBQSxzQkFBTSxTQUFTO0FBQUEsc0JBQUssWUFBVztBQUFBLHNCQUFoRCxVQUtFO0FBQUEsd0NBSkEsdUJBRUUsYUFGRjtBQUFBLDBCQUFLLElBQUksRUFBRSxTQUFTLFFBQVEsWUFBWSxVQUFVLE9BQU8sZUFBZTtBQUFBLDBCQUF4RSwwQkFDRSx1QkFBQyxPQUFPLE1BQVIs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QUFDLFNBQVM7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBRUEsT0FBTyxzQkFBc0IsTUFBTTtBQUFBLE1BQ2pDLHNCQUFzQixTQUFTLEVBQUUsVUFBVSxLQUFLLFFBQVEsR0FBRyxDQUFDO0FBQUEsS0FDN0Q7QUFBQSxLQUNBLENBQUMsU0FBUyxJQUFJLENBQUM7QUFBQSxFQUVsQix1QkFDRTtBQUFBLGNBUUU7QUFBQSxzQkFQQSx3QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQThCO0FBQUEsc0JBRTlCLHdCQUFDLHFCQUFEO0FBQUEsUUFBYSxNQUFNO0FBQUEsU0FBbkIsaUNBQWdDO0FBQUEsc0JBQ2hDLHdCQUFDLDJCQUFEO0FBQUEsUUFBbUIsUUFBUTtBQUFBLFNBQTNCLGlDQUF1QztBQUFBLHNCQUN2Qyx3QkFBQywyQkFBRDtBQUFBLFFBQW1CLFFBQVE7QUFBQSxTQUEzQixpQ0FBNkM7QUFBQSxzQkFDN0Msd0JBQUMsK0JBQUQ7QUFBQSxRQUF1QixTQUFTO0FBQUEsU0FBaEMsaUNBQWdEO0FBQUEsc0JBQ2hELHdCQUFDLDZCQUFEO0FBQUEsUUFBcUI7QUFBQSxTQUFyQixpQ0FBaUQ7QUFBQTtBQUFBLEtBUG5ELGdDQVFFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiMjBDNTgwOUVCNUQ4MTE5QzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
