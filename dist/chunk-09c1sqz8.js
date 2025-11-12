import {
  EmailRounded_default
} from "./chunk-j27r43mr.js";
import {
  GitHub_default,
  LinkedIn_default
} from "./chunk-4n4dry3g.js";
import {
  VolunteerActivismRounded_default
} from "./chunk-e4bga9a6.js";
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

// src/features/contact/components/AsyncPreferenceCard.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var AsyncPreferenceCard = () => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
      sx: (theme) => ({
        p: { xs: 4, md: 5 },
        background: "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))",
        color: theme.palette.mode === "dark" ? theme.palette.common.white : "primary.contrastText"
      }),
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        spacing: { xs: 2.5, md: 3 },
        alignItems: "flex-start",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "h4",
                sx: (theme) => ({
                  color: theme.palette.mode === "dark" ? theme.palette.common.white : "inherit"
                }),
                children: "Ready to collaborate?"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                variant: "body1",
                sx: (theme) => ({
                  color: theme.palette.mode === "dark" ? "rgba(255,255,255,0.88)" : "inherit",
                  maxWidth: 520
                }),
                children: "Reach out directly by email or follow along on LinkedIn and GitHub. I’ll get back within a couple of days."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
            spacing: { xs: 1.5, sm: 2 },
            sx: { width: "100%" },
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                component: "a",
                href: "mailto:sadrimasih@gmail.com",
                variant: "contained",
                color: "secondary",
                startIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(EmailRounded_default, {}, undefined, false, undefined, this),
                fullWidth: true,
                children: "Email Masih"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                direction: { xs: "column", sm: "row" },
                spacing: { xs: 1.5, sm: 1.5 },
                sx: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                    component: "a",
                    href: "https://www.linkedin.com/in/msadri/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LinkedIn_default, {}, undefined, false, undefined, this),
                    fullWidth: true,
                    sx: {
                      color: "inherit",
                      borderColor: "rgba(255,255,255,0.4)",
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.9)",
                        backgroundColor: "rgba(255,255,255,0.12)"
                      }
                    },
                    children: "LinkedIn"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Button_default, {
                    component: "a",
                    href: "https://github.com/mrsadri",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GitHub_default, {}, undefined, false, undefined, this),
                    fullWidth: true,
                    sx: {
                      color: "inherit",
                      borderColor: "rgba(255,255,255,0.4)",
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.9)",
                        backgroundColor: "rgba(255,255,255,0.12)"
                      }
                    },
                    children: "GitHub"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
}, undefined, false, undefined, this);
var AsyncPreferenceCard_default = AsyncPreferenceCard;

// src/features/contact/components/ContactMethodsSection.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var ContactMethodsSection = ({ methods }) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
      container: true,
      spacing: 3,
      children: methods.map((method) => {
        const isMailLink = method.href.startsWith("mailto:");
        return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Grid_default, {
          size: { xs: 12, md: 3 },
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Card_default, {
            sx: { height: "100%" },
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Stack_default, {
                  spacing: 2,
                  alignItems: "flex-start",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "h3",
                      component: "span",
                      sx: { lineHeight: 1 },
                      children: method.icon
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: method.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Typography_default, {
                      variant: "body2",
                      color: "text.secondary",
                      children: method.description
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CardActions_default, {
                sx: { px: 3, pb: 3, pt: 0 },
                children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Button_default, {
                  component: "a",
                  href: method.href,
                  target: isMailLink ? undefined : "_blank",
                  rel: isMailLink ? undefined : "noopener noreferrer",
                  variant: "contained",
                  color: "primary",
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
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var HelpTopicsSection = ({ topics }) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Box_default, {
  sx: { py: { xs: 6, md: 8 } },
  children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
      spacing: 3,
      mb: 4,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
          direction: "row",
          spacing: 2,
          alignItems: "center",
          children: [
            /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(VolunteerActivismRounded_default, {
              color: "secondary"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
              variant: "h2",
              children: "What I Can Help With"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
          container: true,
          spacing: 3,
          children: topics.map((topic) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Card_default, {
              sx: { height: "100%" },
              children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(CardContent_default, {
                children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Stack_default, {
                  spacing: 1.5,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
                      variant: "h5",
                      children: topic.title
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Typography_default, {
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
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var HeroSection = ({ hero }) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Box_default, {
  sx: {
    py: { xs: 8, md: 12 },
    background: "linear-gradient(135deg, rgba(31,111,235,0.12), rgba(90,200,250,0.16))"
  },
  children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Container_default, {
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Stack_default, {
      spacing: 2,
      alignItems: "center",
      textAlign: "center",
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
          variant: "h2",
          children: hero.title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
          variant: "h4",
          color: "text.secondary",
          children: hero.subtitle
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Typography_default, {
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
        children: offers.map((offer) => {
          const isFeatured = offer.featured ?? false;
          return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Grid_default, {
            size: { xs: 12, md: 6 },
            children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Card_default, {
              sx: {
                height: "100%",
                background: isFeatured ? "linear-gradient(135deg, rgba(12,53,148,0.92), rgba(31,111,235,0.88))" : undefined,
                color: isFeatured ? "primary.contrastText" : undefined
              },
              children: [
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(CardContent_default, {
                  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
                    spacing: 2,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Stack_default, {
                        direction: "row",
                        alignItems: "center",
                        spacing: 2,
                        sx: { width: "100%" },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                            variant: "h5",
                            sx: { flexGrow: 1 },
                            children: offer.title
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Chip_default, {
                            icon: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ScheduleRounded_default, {}, undefined, false, undefined, this),
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
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                        variant: "body1",
                        color: isFeatured ? "inherit" : "text.secondary",
                        children: offer.description
                      }, undefined, false, undefined, this),
                      offer.note && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Typography_default, {
                        variant: "body2",
                        color: isFeatured ? "inherit" : "text.secondary",
                        children: offer.note
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(CardActions_default, {
                  sx: { px: 3, pb: 3, pt: 0 },
                  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Button_default, {
                    component: "a",
                    href: offer.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    variant: "contained",
                    color: isFeatured ? "secondary" : "primary",
                    fullWidth: true,
                    children: offer.ctaLabel ?? "Book now"
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
  title: "Let's Connect",
  subtitle: "I'd love to hear from you",
  description: "Whether you're looking for a design mentor, want to collaborate on a project, or have an opportunity to discuss, feel free to reach out. I'm always open to meaningful conversations about design, user experience, and building products that matter."
};
var contactMethods = [
  {
    icon: "\uD83D\uDCE7",
    title: "Email",
    description: "For general inquiries, collaboration opportunities, or just to say hello",
    actionLabel: "sadrimasih@gmail.com",
    href: "mailto:sadrimasih@gmail.com"
  },
  {
    icon: "\uD83D\uDCAC",
    title: "Telegram",
    description: "Reach out for a quick chat or to share ideas asynchronously",
    actionLabel: "Message on Telegram →",
    href: "https://t.me/masihsadri"
  },
  {
    icon: "\uD83D\uDCBC",
    title: "LinkedIn",
    description: "Connect with me professionally and see my latest updates",
    actionLabel: "View Profile →",
    href: "https://www.linkedin.com/in/msadri/"
  },
  {
    icon: "\uD83D\uDC19",
    title: "GitHub",
    description: "Explore my code, experiments, and open-source contributions",
    actionLabel: "Visit GitHub →",
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
    ctaLabel: "Book on Zeeg"
  },
  {
    title: "Design Mentorship with Masih",
    duration: "75 min",
    description: "Ready to take your design skills to the next level? Weekly mentorship sessions are a proven way to learn a new skill and accelerate your growth in UX/UI design.",
    href: "https://zeeg.me/masihs/mentorship",
    ctaLabel: "Book on Zeeg"
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Seo_default, {
        ...contactPageMetadata
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(HeroSection_default, {
        hero: contactHero
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ContactMethodsSection_default, {
        methods: contactMethods
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(MentorshipSection_default, {
        offers: mentorshipOffers
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(HelpTopicsSection_default, {
        topics: helpTopics
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ResponseTimeSection_default, {
        responseTime
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(AsyncPreferenceCard_default, {}, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ContactPage_default = ContactPage;
export {
  ContactPage_default as default
};

//# debugId=0044136CF4EA653664756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvQXN5bmNQcmVmZXJlbmNlQ2FyZC50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9Db250YWN0TWV0aG9kc1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvSGVscFRvcGljc1NlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvSGVyb1NlY3Rpb24udHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9TY2hlZHVsZVJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9NZW50b3JzaGlwU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FsdGVybmF0ZUVtYWlsUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL1Jlc3BvbnNlVGltZVNlY3Rpb24udHN4IiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2RhdGEvY29udGVudC50cyIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9zZW8udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IEFzeW5jUHJlZmVyZW5jZUNhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9Bc3luY1ByZWZlcmVuY2VDYXJkXCI7XG5pbXBvcnQgQ29udGFjdE1ldGhvZHNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdE1ldGhvZHNTZWN0aW9uXCI7XG5pbXBvcnQgSGVscFRvcGljc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxwVG9waWNzU2VjdGlvblwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBNZW50b3JzaGlwU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL01lbnRvcnNoaXBTZWN0aW9uXCI7XG5pbXBvcnQgUmVzcG9uc2VUaW1lU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3BvbnNlVGltZVNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIGNvbnRhY3RIZXJvLFxuICBjb250YWN0TWV0aG9kcyxcbiAgaGVscFRvcGljcyxcbiAgbWVudG9yc2hpcE9mZmVycyxcbiAgcmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbnRhY3RQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi9zZW9cIjtcblxuY29uc3QgQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldElkID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgfVxuICB9LCBbbG9jYXRpb24uaGFzaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gey4uLmNvbnRhY3RQYWdlTWV0YWRhdGF9IC8+XG5cbiAgICAgIDxIZXJvU2VjdGlvbiBoZXJvPXtjb250YWN0SGVyb30gLz5cbiAgICAgIDxDb250YWN0TWV0aG9kc1NlY3Rpb24gbWV0aG9kcz17Y29udGFjdE1ldGhvZHN9IC8+XG4gICAgICA8TWVudG9yc2hpcFNlY3Rpb24gb2ZmZXJzPXttZW50b3JzaGlwT2ZmZXJzfSAvPlxuICAgICAgPEhlbHBUb3BpY3NTZWN0aW9uIHRvcGljcz17aGVscFRvcGljc30gLz5cbiAgICAgIDxSZXNwb25zZVRpbWVTZWN0aW9uIHJlc3BvbnNlVGltZT17cmVzcG9uc2VUaW1lfSAvPlxuICAgICAgPEFzeW5jUHJlZmVyZW5jZUNhcmQgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuXG5cbiIsCiAgICAiaW1wb3J0IEVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HaXRIdWJcIjtcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua2VkSW5cIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgQXN5bmNQcmVmZXJlbmNlQ2FyZCA9ICgpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmRcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBwOiB7IHhzOiA0LCBtZDogNSB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiw1MywxNDgsMC45MiksIHJnYmEoMzEsMTExLDIzNSwwLjg4KSlcIixcbiAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSA6IFwicHJpbWFyeS5jb250cmFzdFRleHRcIixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAyLjUsIG1kOiAzIH19IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcbiAgICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIiA/IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlIDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZWFkeSB0byBjb2xsYWJvcmF0ZT9cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCIgPyBcInJnYmEoMjU1LDI1NSwyNTUsMC44OClcIiA6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA1MjAsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZWFjaCBvdXQgZGlyZWN0bHkgYnkgZW1haWwgb3IgZm9sbG93IGFsb25nIG9uIExpbmtlZEluIGFuZCBHaXRIdWIuIEnigJlsbCBnZXQgYmFjayB3aXRoaW5cbiAgICAgICAgICAgICAgYSBjb3VwbGUgb2YgZGF5cy5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiAxLjUsIHNtOiAyIH19IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86c2FkcmltYXNpaEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzdGFydEljb249ezxFbWFpbFJvdW5kZWRJY29uIC8+fVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWwgTWFzaWhcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgc206IFwicm93XCIgfX0gc3BhY2luZz17eyB4czogMS41LCBzbTogMS41IH19IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PExpbmtlZEluSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCIsXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4xMilcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tcnNhZHJpXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8R2l0SHViSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCIsXG4gICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4xMilcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBc3luY1ByZWZlcmVuY2VDYXJkO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RNZXRob2QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBDb250YWN0TWV0aG9kc1NlY3Rpb25Qcm9wcyA9IHtcbiAgbWV0aG9kczogUmVhZG9ubHlBcnJheTxDb250YWN0TWV0aG9kPjtcbn07XG5cbmNvbnN0IENvbnRhY3RNZXRob2RzU2VjdGlvbiA9ICh7IG1ldGhvZHMgfTogQ29udGFjdE1ldGhvZHNTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveCBzeD17eyBweTogeyB4czogNiwgbWQ6IDggfSB9fT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICB7bWV0aG9kcy5tYXAoKG1ldGhvZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzTWFpbExpbmsgPSBtZXRob2QuaHJlZi5zdGFydHNXaXRoKFwibWFpbHRvOlwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiAzIH19IGtleT17bWV0aG9kLnRpdGxlfT5cbiAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwic3BhblwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21ldGhvZC5pY29ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnttZXRob2QudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge21ldGhvZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBweDogMywgcGI6IDMsIHB0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWV0aG9kLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17aXNNYWlsTGluayA/IHVuZGVmaW5lZCA6IFwiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgICAgIHJlbD17aXNNYWlsTGluayA/IHVuZGVmaW5lZCA6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwifVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttZXRob2QuYWN0aW9uTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdE1ldGhvZHNTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Wb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRcIjtcbmltcG9ydCB0eXBlIHsgSGVscFRvcGljIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVscFRvcGljc1NlY3Rpb25Qcm9wcyA9IHtcbiAgdG9waWNzOiBSZWFkb25seUFycmF5PEhlbHBUb3BpYz47XG59O1xuXG5jb25zdCBIZWxwVG9waWNzU2VjdGlvbiA9ICh7IHRvcGljcyB9OiBIZWxwVG9waWNzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBtYj17NH0+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPldoYXQgSSBDYW4gSGVscCBXaXRoPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAge3RvcGljcy5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXt0b3BpYy50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezEuNX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0b3BpYy50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dG9waWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBUb3BpY3NTZWN0aW9uO1xuXG5cbiIsCiAgICAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdEhlcm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBIZXJvU2VjdGlvblByb3BzID0ge1xuICBoZXJvOiBDb250YWN0SGVybztcbn07XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKHsgaGVybyB9OiBIZXJvU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDgsIG1kOiAxMiB9LFxuICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLDExMSwyMzUsMC4xMiksIHJnYmEoOTAsMjAwLDI1MCwwLjE2KSlcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPntoZXJvLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtoZXJvLnN1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBtYXhXaWR0aDogNzIwIH19PlxuICAgICAgICAgIHtoZXJvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4bS0uMjItMTNoLS4wNmMtLjQgMC0uNzIuMzItLjcyLjcydjQuNzJjMCAuMzUuMTguNjguNDkuODZsNC4xNSAyLjQ5Yy4zNC4yLjc4LjEuOTgtLjI0LjIxLS4zNC4xLS43OS0uMjUtLjk5bC0zLjg3LTIuM1Y3LjcyYzAtLjQtLjMyLS43Mi0uNzItLjcyXCJcbn0pLCAnU2NoZWR1bGVSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9zeXN0ZW0vR3JpZFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ2hpcCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBTY2hlZHVsZVJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NjaGVkdWxlUm91bmRlZFwiO1xuaW1wb3J0IHR5cGUgeyBNZW50b3JzaGlwT2ZmZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBNZW50b3JzaGlwU2VjdGlvblByb3BzID0ge1xuICBvZmZlcnM6IFJlYWRvbmx5QXJyYXk8TWVudG9yc2hpcE9mZmVyPjtcbn07XG5cbmNvbnN0IE1lbnRvcnNoaXBTZWN0aW9uID0gKHsgb2ZmZXJzIH06IE1lbnRvcnNoaXBTZWN0aW9uUHJvcHMpID0+IChcbiAgPEJveFxuICAgIGlkPVwibWVudG9yc2hpcFwiXG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezR9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5NZW50b3JzaGlwICYgU2Vzc2lvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBMb29raW5nIGZvciBhIG1lbnRvciBvciBzb21lb25lIHRvIGNoYXQgd2l0aD9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAge29mZmVycy5tYXAoKG9mZmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNGZWF0dXJlZCA9IG9mZmVyLmZlYXR1cmVkID8/IGZhbHNlO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IDYgfX0ga2V5PXtvZmZlci50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc0ZlYXR1cmVkXG4gICAgICAgICAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyLDUzLDE0OCwwLjkyKSwgcmdiYSgzMSwxMTEsMjM1LDAuODgpKVwiXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGlzRmVhdHVyZWQgPyBcInByaW1hcnkuY29udHJhc3RUZXh0XCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8U2NoZWR1bGVSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtvZmZlci5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZlYXR1cmVkID8gXCJkZWZhdWx0XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1sOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGlzRmVhdHVyZWQgJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9e2lzRmVhdHVyZWQgPyBcImluaGVyaXRcIiA6IFwidGV4dC5zZWNvbmRhcnlcIn0+XG4gICAgICAgICAgICAgICAgICAgICAge29mZmVyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtvZmZlci5ub3RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj17aXNGZWF0dXJlZCA/IFwiaW5oZXJpdFwiIDogXCJ0ZXh0LnNlY29uZGFyeVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvZmZlci5ub3RlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e29mZmVyLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRmVhdHVyZWQgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b2ZmZXIuY3RhTGFiZWwgPz8gXCJCb29rIG5vd1wifVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnRvcnNoaXBTZWN0aW9uO1xuXG5cbiIsCiAgICAiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyLjcyIDIuMDNDNi42MyAxLjYgMS42IDYuNjMgMi4wMyAxMi43MiAyLjM5IDE4LjAxIDcuMDEgMjIgMTIuMzEgMjJIMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTMuNjdjLTMuNzMgMC03LjE1LTIuNDItOC4wOC02LjAzLTEuNDktNS44IDMuOTEtMTEuMjEgOS43MS05LjcxQzE3LjU4IDUuMTggMjAgOC42IDIwIDEyLjMzdjEuMWMwIC43OS0uNzEgMS41Ny0xLjUgMS41N3MtMS41LS43OC0xLjUtMS41N3YtMS4yNWMwLTIuNTEtMS43OC00Ljc3LTQuMjYtNS4xMi0zLjQtLjQ5LTYuMjcgMi40NS01LjY2IDUuODcuMzQgMS45MSAxLjgzIDMuNDkgMy43MiAzLjk0IDEuODQuNDMgMy41OS0uMTYgNC43NC0xLjMzLjg5IDEuMjIgMi42NyAxLjg2IDQuMyAxLjIxIDEuMzQtLjUzIDIuMTYtMS45IDIuMTYtMy4zNHYtMS4wOWMwLTUuMzEtMy45OS05LjkzLTkuMjgtMTAuMjlNMTIgMTVjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzXCJcbn0pLCAnQWx0ZXJuYXRlRW1haWxSb3VuZGVkJyk7IiwKICAgICJpbXBvcnQgQWx0ZXJuYXRlRW1haWxSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BbHRlcm5hdGVFbWFpbFJvdW5kZWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgUmVzcG9uc2VUaW1lIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgUmVzcG9uc2VUaW1lU2VjdGlvblByb3BzID0ge1xuICByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZTtcbn07XG5cbmNvbnN0IFJlc3BvbnNlVGltZVNlY3Rpb24gPSAoeyByZXNwb25zZVRpbWUgfTogUmVzcG9uc2VUaW1lU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBzeD17e1xuICAgICAgcHk6IHsgeHM6IDYsIG1kOiA4IH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIH19XG4gID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmQgc3g9e3sgcDogeyB4czogNCwgbWQ6IDUgfSB9fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QWx0ZXJuYXRlRW1haWxSb3VuZGVkSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3Jlc3BvbnNlVGltZS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICB7cmVzcG9uc2VUaW1lLnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGtleT17cGFyYWdyYXBofSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VUaW1lU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHtcbiAgQ29udGFjdEhlcm8sXG4gIENvbnRhY3RNZXRob2QsXG4gIEhlbHBUb3BpYyxcbiAgTWVudG9yc2hpcE9mZmVyLFxuICBSZXNwb25zZVRpbWUsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdEhlcm86IENvbnRhY3RIZXJvID0ge1xuICB0aXRsZTogXCJMZXQncyBDb25uZWN0XCIsXG4gIHN1YnRpdGxlOiBcIkknZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3VcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJXaGV0aGVyIHlvdSdyZSBsb29raW5nIGZvciBhIGRlc2lnbiBtZW50b3IsIHdhbnQgdG8gY29sbGFib3JhdGUgb24gYSBwcm9qZWN0LCBvciBoYXZlIGFuIG9wcG9ydHVuaXR5IHRvIGRpc2N1c3MsIGZlZWwgZnJlZSB0byByZWFjaCBvdXQuIEknbSBhbHdheXMgb3BlbiB0byBtZWFuaW5nZnVsIGNvbnZlcnNhdGlvbnMgYWJvdXQgZGVzaWduLCB1c2VyIGV4cGVyaWVuY2UsIGFuZCBidWlsZGluZyBwcm9kdWN0cyB0aGF0IG1hdHRlci5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWN0TWV0aG9kczogUmVhZG9ubHlBcnJheTxDb250YWN0TWV0aG9kPiA9IFtcbiAge1xuICAgIGljb246IFwi8J+Tp1wiLFxuICAgIHRpdGxlOiBcIkVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIGdlbmVyYWwgaW5xdWlyaWVzLCBjb2xsYWJvcmF0aW9uIG9wcG9ydHVuaXRpZXMsIG9yIGp1c3QgdG8gc2F5IGhlbGxvXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwic2FkcmltYXNpaEBnbWFpbC5jb21cIixcbiAgICBocmVmOiBcIm1haWx0bzpzYWRyaW1hc2loQGdtYWlsLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCLwn5KsXCIsXG4gICAgdGl0bGU6IFwiVGVsZWdyYW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFjaCBvdXQgZm9yIGEgcXVpY2sgY2hhdCBvciB0byBzaGFyZSBpZGVhcyBhc3luY2hyb25vdXNseVwiLFxuICAgIGFjdGlvbkxhYmVsOiBcIk1lc3NhZ2Ugb24gVGVsZWdyYW0g4oaSXCIsXG4gICAgaHJlZjogXCJodHRwczovL3QubWUvbWFzaWhzYWRyaVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCLwn5K8XCIsXG4gICAgdGl0bGU6IFwiTGlua2VkSW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25uZWN0IHdpdGggbWUgcHJvZmVzc2lvbmFsbHkgYW5kIHNlZSBteSBsYXRlc3QgdXBkYXRlc1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcIlZpZXcgUHJvZmlsZSDihpJcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tc2FkcmkvXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcIvCfkJlcIixcbiAgICB0aXRsZTogXCJHaXRIdWJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIG15IGNvZGUsIGV4cGVyaW1lbnRzLCBhbmQgb3Blbi1zb3VyY2UgY29udHJpYnV0aW9uc1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcIlZpc2l0IEdpdEh1YiDihpJcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tcnNhZHJpXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbWVudG9yc2hpcE9mZmVyczogUmVhZG9ubHlBcnJheTxNZW50b3JzaGlwT2ZmZXI+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRXhjbHVzaXZlIFRhbGsgKEZyZWUpXCIsXG4gICAgZHVyYXRpb246IFwiMjAgbWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2UgY2FuIGRpc2N1c3Mgb3VyIGNhcmVlciBwYXRocyBhbmQgd29yayBleHBlcmllbmNlcyB0b2dldGhlci5cIixcbiAgICBub3RlOiBcIlRvIGNvbmZpcm0geW91ciBzZXNzaW9uLCBwbGVhc2UgZG9uYXRlICQxIHRvIGEgY2hhcml0eSBvZiB5b3VyIGNob2ljZS5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vemVlZy5tZS9tYXNpaHMvbGV0c3RhbGtcIixcbiAgICBjdGFMYWJlbDogXCJCb29rIG9uIFplZWdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBNZW50b3JzaGlwIHdpdGggTWFzaWhcIixcbiAgICBkdXJhdGlvbjogXCI3NSBtaW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUmVhZHkgdG8gdGFrZSB5b3VyIGRlc2lnbiBza2lsbHMgdG8gdGhlIG5leHQgbGV2ZWw/IFdlZWtseSBtZW50b3JzaGlwIHNlc3Npb25zIGFyZSBhIHByb3ZlbiB3YXkgdG8gbGVhcm4gYSBuZXcgc2tpbGwgYW5kIGFjY2VsZXJhdGUgeW91ciBncm93dGggaW4gVVgvVUkgZGVzaWduLlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly96ZWVnLm1lL21hc2locy9tZW50b3JzaGlwXCIsXG4gICAgY3RhTGFiZWw6IFwiQm9vayBvbiBaZWVnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaGVscFRvcGljczogUmVhZG9ubHlBcnJheTxIZWxwVG9waWM+ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIE1lbnRvcnNoaXBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT25lLW9uLW9uZSBndWlkYW5jZSBmb3IgZGVzaWduZXJzIGF0IGFueSBzdGFnZSBvZiB0aGVpciBjYXJlZXIuIFBvcnRmb2xpbyByZXZpZXdzLCBza2lsbCBkZXZlbG9wbWVudCwgYW5kIGNhcmVlciBhZHZpY2UuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3J0Zm9saW8gUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgZmVlZGJhY2sgb24geW91ciBjYXNlIHN0dWRpZXMsIGRlc2lnbiBwcm9jZXNzLCBhbmQgcHJlc2VudGF0aW9uLiBNYWtlIHlvdXIgcG9ydGZvbGlvIHN0YW5kIG91dC5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2plY3QgQ29sbGFib3JhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJbnRlcmVzdGVkIGluIHdvcmtpbmcgdG9nZXRoZXIgb24gYSBwcm9kdWN0IG9yIGRlc2lnbiBzeXN0ZW0/IExldCdzIGRpc2N1c3Mgb3Bwb3J0dW5pdGllcy5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWFraW5nICYgV29ya3Nob3BzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkF2YWlsYWJsZSBmb3IgZGVzaWduIHRhbGtzLCB3b3Jrc2hvcHMsIG9yIHBhbmVsIGRpc2N1c3Npb25zIGFib3V0IFVYIGRlc2lnbiwgdXNlciBzYWZldHksIGFuZCBwcm9kdWN0IGRlc2lnbi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZVRpbWU6IFJlc3BvbnNlVGltZSA9IHtcbiAgdGl0bGU6IFwiUmVzcG9uc2UgVGltZVwiLFxuICBwYXJhZ3JhcGhzOiBbXG4gICAgXCJJIHR5cGljYWxseSByZXNwb25kIHRvIGVtYWlscyB3aXRoaW4gMjQtNDggaG91cnMuIEZvciBtZW50b3JzaGlwIGlucXVpcmllcywgcGxlYXNlIGFsbG93IGEgYml0IG1vcmUgdGltZSBhcyBJIHJldmlldyBlYWNoIHJlcXVlc3QgY2FyZWZ1bGx5LlwiLFxuICAgIFwiSWYgeW91IGhhdmVuJ3QgaGVhcmQgYmFjayBhZnRlciAzIGRheXMsIGZlZWwgZnJlZSB0byBzZW5kIGEgZ2VudGxlIGZvbGxvdy11cC5cIixcbiAgXSxcbn07XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7IFBhZ2VNZXRhZGF0YSwgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Nlb1wiO1xuaW1wb3J0IGdldFNpdGVVcmwgZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlscy9zaXRlXCI7XG5pbXBvcnQgeyBjb250YWN0SGVybywgY29udGFjdE1ldGhvZHMsIG1lbnRvcnNoaXBPZmZlcnMgfSBmcm9tIFwiLi9kYXRhL2NvbnRlbnRcIjtcblxuY29uc3Qgc2l0ZVVybCA9IGdldFNpdGVVcmwoKTtcblxuY29uc3QgY29udGFjdFN0cnVjdHVyZWREYXRhOiBTdHJ1Y3R1cmVkRGF0YSA9IHtcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICBcIkB0eXBlXCI6IFwiQ29udGFjdFBhZ2VcIixcbiAgbmFtZTogXCJDb250YWN0IE1hc2loIFNhZHJpXCIsXG4gIGRlc2NyaXB0aW9uOiBjb250YWN0SGVyby5kZXNjcmlwdGlvbixcbiAgdXJsOiBgJHtzaXRlVXJsfS9jb250YWN0YCxcbiAgbWFpbkVudGl0eTogY29udGFjdE1ldGhvZHMubWFwKChtZXRob2QpID0+ICh7XG4gICAgXCJAdHlwZVwiOiBcIkNvbnRhY3RQb2ludFwiLFxuICAgIGNvbnRhY3RUeXBlOiBtZXRob2QudGl0bGUsXG4gICAgdXJsOiBtZXRob2QuaHJlZixcbiAgICBkZXNjcmlwdGlvbjogbWV0aG9kLmRlc2NyaXB0aW9uLFxuICB9KSksXG4gIG9mZmVyczogbWVudG9yc2hpcE9mZmVycy5tYXAoKG9mZmVyKSA9PiAoe1xuICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgIG5hbWU6IG9mZmVyLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBvZmZlci5kZXNjcmlwdGlvbixcbiAgICB1cmw6IG9mZmVyLmhyZWYsXG4gICAgZHVyYXRpb246IG9mZmVyLmR1cmF0aW9uLFxuICB9KSksXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgY29udGFjdFBhZ2VNZXRhZGF0YTogUGFnZU1ldGFkYXRhID0ge1xuICB0aXRsZTogXCJDb250YWN0IE1hc2loIFNhZHJpIOKAlCBDb2xsYWJvcmF0aW9ucywgbWVudG9yc2hpcCwgYW5kIHNwZWFraW5nXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQm9vayBtZW50b3JzaGlwIHNlc3Npb25zLCByZXF1ZXN0IGNvbGxhYm9yYXRpb25zLCBvciByZWFjaCBNYXNpaCBTYWRyaSBkaXJlY3RseSBmb3Igc2VuaW9yIHByb2R1Y3QgZGVzaWduIHdvcmsuXCIsXG4gIGNhbm9uaWNhbFBhdGg6IFwiL2NvbnRhY3RcIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gIH0sXG4gIHN0cnVjdHVyZWREYXRhOiBjb250YWN0U3RydWN0dXJlZERhdGEsXG59O1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUNLQSxJQUFNLHNCQUFzQixzQkFDMUIsdUJBc0ZFLGFBdEZGO0FBQUEsRUFBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtBQUFBLEVBQWhDLDBCQUNFLHVCQW9GRSxtQkFwRkY7QUFBQSw4QkFDRSx1QkFrRkUsY0FsRkY7QUFBQSxNQUNFLElBQUksQ0FBQyxXQUFXO0FBQUEsUUFDZCxHQUFHLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLFFBQ2xCLFlBQVk7QUFBQSxRQUNaLE9BQ0UsTUFBTSxRQUFRLFNBQVMsU0FBUyxNQUFNLFFBQVEsT0FBTyxRQUFRO0FBQUEsTUFDakU7QUFBQSxNQU5GLDBCQVFFLHVCQXlFRSxlQXpFRjtBQUFBLFFBQU8sU0FBUyxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxRQUFHLFlBQVc7QUFBQSxRQUEvQyxVQXlFRTtBQUFBLDBCQXhFQSx1QkFtQkUsZUFuQkY7QUFBQSxZQUFPLFNBQVM7QUFBQSxZQUFoQixVQW1CRTtBQUFBLDhCQWxCQSx1QkFPRSxvQkFQRjtBQUFBLGdCQUNFLFNBQVE7QUFBQSxnQkFDUixJQUFJLENBQUMsV0FBVztBQUFBLGtCQUNkLE9BQU8sTUFBTSxRQUFRLFNBQVMsU0FBUyxNQUFNLFFBQVEsT0FBTyxRQUFRO0FBQUEsZ0JBQ3RFO0FBQUEsZ0JBSkY7QUFBQSxrREFPRTtBQUFBLDhCQUNGLHVCQVNFLG9CQVRGO0FBQUEsZ0JBQ0UsU0FBUTtBQUFBLGdCQUNSLElBQUksQ0FBQyxXQUFXO0FBQUEsa0JBQ2QsT0FBTyxNQUFNLFFBQVEsU0FBUyxTQUFTLDJCQUEyQjtBQUFBLGtCQUNsRSxVQUFVO0FBQUEsZ0JBQ1o7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LGFBQVc7QUFFM0IsSUFBTSx3QkFBd0M7QUFBQSxFQUM1QyxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixhQUFhLFlBQVk7QUFBQSxFQUN6QixLQUFLLEdBQUc7QUFBQSxFQUNSLFlBQVksZUFBZSxJQUFJLENBQUMsWUFBWTtBQUFBLElBQzFDLFNBQVM7QUFBQSxJQUNULGFBQWEsT0FBTztBQUFBLElBQ3BCLEtBQUssT0FBTztBQUFBLElBQ1osYUFBYSxPQUFPO0FBQUEsRUFDdEIsRUFBRTtBQUFBLEVBQ0YsUUFBUSxpQkFBaUIsSUFBSSxDQUFDLFdBQVc7QUFBQSxJQUN2QyxTQUFTO0FBQUEsSUFDVCxNQUFNLE1BQU07QUFBQSxJQUNaLGFBQWEsTUFBTTtBQUFBLElBQ25CLEtBQUssTUFBTTtBQUFBLElBQ1gsVUFBVSxNQUFNO0FBQUEsRUFDbEIsRUFBRTtBQUNKO0FBRU8sSUFBTSxzQkFBb0M7QUFBQSxFQUMvQyxPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2xCOzs7O0FWbEJBLElBQU0sY0FBYyxNQUFNO0FBQUEsRUFDeEIsTUFBTSxXQUFXLFlBQVk7QUFBQSxFQUU3Qix1QkFBVSxNQUFNO0FBQUEsSUFDZCxJQUFJLENBQUMsU0FBUyxNQUFNO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFFQSxNQUFNLFdBQVcsU0FBUyxLQUFLLE1BQU0sQ0FBQztBQUFBLElBQ3RDLE1BQU0sVUFBVSxTQUFTLGVBQWUsUUFBUTtBQUFBLElBQ2hELElBQUksU0FBUztBQUFBLE1BQ1gsUUFBUSxlQUFlLEVBQUUsVUFBVSxVQUFVLE9BQU8sUUFBUSxDQUFDO0FBQUEsSUFDL0Q7QUFBQSxLQUNDLENBQUMsU0FBUyxJQUFJLENBQUM7QUFBQSxFQUVsQix1QkFDRTtBQUFBLGNBU0U7QUFBQSxzQkFSQSx3QkFBQyxhQUFEO0FBQUEsV0FBUztBQUFBLFNBQVQsaUNBQThCO0FBQUEsc0JBRTlCLHdCQUFDLHFCQUFEO0FBQUEsUUFBYSxNQUFNO0FBQUEsU0FBbkIsaUNBQWdDO0FBQUEsc0JBQ2hDLHdCQUFDLCtCQUFEO0FBQUEsUUFBdUIsU0FBUztBQUFBLFNBQWhDLGlDQUFnRDtBQUFBLHNCQUNoRCx3QkFBQywyQkFBRDtBQUFBLFFBQW1CLFFBQVE7QUFBQSxTQUEzQixpQ0FBNkM7QUFBQSxzQkFDN0Msd0JBQUMsMkJBQUQ7QUFBQSxRQUFtQixRQUFRO0FBQUEsU0FBM0IsaUNBQXVDO0FBQUEsc0JBQ3ZDLHdCQUFDLDZCQUFEO0FBQUEsUUFBcUI7QUFBQSxTQUFyQixpQ0FBaUQ7QUFBQSxzQkFDakQsd0JBQUMsNkJBQUQscUNBQXFCO0FBQUE7QUFBQSxLQVJ2QixnQ0FTRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjAwNDQxMzZDRjRFQTY1MzY2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
