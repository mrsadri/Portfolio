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

// node_modules/@mui/icons-material/esm/EmailRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var EmailRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72"
}), "EmailRounded");

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
                href: "mailto:sdarimasih@gmail.com",
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
          size: { xs: 12, md: 4 },
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
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var ScheduleRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime2.jsx("path", {
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
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var AlternateEmailRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime3.jsx("path", {
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
    actionLabel: "sdarimasih@gmail.com",
    href: "mailto:sdarimasih@gmail.com"
  },
  {
    icon: "\uD83D\uDCBC",
    title: "LinkedIn",
    description: "Connect with me professionally and see my latest updates",
    actionLabel: "View Profile →",
    href: "https://www.linkedin.com/in/msadri/"
  },
  {
    icon: "\uD83C\uDFA8",
    title: "Figma",
    description: "Check out my design work and the Morph Design System",
    actionLabel: "View Profile →",
    href: "https://www.figma.com/@masih"
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

//# debugId=863004BD7632121264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvQ29udGFjdFBhZ2UudHN4IiwgIi4uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9FbWFpbFJvdW5kZWQuanMiLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9Bc3luY1ByZWZlcmVuY2VDYXJkLnRzeCIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL0NvbnRhY3RNZXRob2RzU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9IZWxwVG9waWNzU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1NjaGVkdWxlUm91bmRlZC5qcyIsICIuLi9zcmMvZmVhdHVyZXMvY29udGFjdC9jb21wb25lbnRzL01lbnRvcnNoaXBTZWN0aW9uLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQWx0ZXJuYXRlRW1haWxSb3VuZGVkLmpzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L2NvbXBvbmVudHMvUmVzcG9uc2VUaW1lU2VjdGlvbi50c3giLCAiLi4vc3JjL2ZlYXR1cmVzL2NvbnRhY3QvZGF0YS9jb250ZW50LnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9jb250YWN0L3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VvXCI7XG5pbXBvcnQgQXN5bmNQcmVmZXJlbmNlQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0FzeW5jUHJlZmVyZW5jZUNhcmRcIjtcbmltcG9ydCBDb250YWN0TWV0aG9kc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9Db250YWN0TWV0aG9kc1NlY3Rpb25cIjtcbmltcG9ydCBIZWxwVG9waWNzU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0hlbHBUb3BpY3NTZWN0aW9uXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IE1lbnRvcnNoaXBTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTWVudG9yc2hpcFNlY3Rpb25cIjtcbmltcG9ydCBSZXNwb25zZVRpbWVTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmVzcG9uc2VUaW1lU2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgY29udGFjdEhlcm8sXG4gIGNvbnRhY3RNZXRob2RzLFxuICBoZWxwVG9waWNzLFxuICBtZW50b3JzaGlwT2ZmZXJzLFxuICByZXNwb25zZVRpbWUsXG59IGZyb20gXCIuL2RhdGEvY29udGVudFwiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2VNZXRhZGF0YSB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhdGlvbi5oYXNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbi5oYXNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbyB7Li4uY29udGFjdFBhZ2VNZXRhZGF0YX0gLz5cblxuICAgICAgPEhlcm9TZWN0aW9uIGhlcm89e2NvbnRhY3RIZXJvfSAvPlxuICAgICAgPENvbnRhY3RNZXRob2RzU2VjdGlvbiBtZXRob2RzPXtjb250YWN0TWV0aG9kc30gLz5cbiAgICAgIDxNZW50b3JzaGlwU2VjdGlvbiBvZmZlcnM9e21lbnRvcnNoaXBPZmZlcnN9IC8+XG4gICAgICA8SGVscFRvcGljc1NlY3Rpb24gdG9waWNzPXtoZWxwVG9waWNzfSAvPlxuICAgICAgPFJlc3BvbnNlVGltZVNlY3Rpb24gcmVzcG9uc2VUaW1lPXtyZXNwb25zZVRpbWV9IC8+XG4gICAgICA8QXN5bmNQcmVmZXJlbmNlQ2FyZCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG5cblxuIiwKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ybS0uNCA0LjI1LTcuMDcgNC40MmMtLjMyLjItLjc0LjItMS4wNiAwTDQuNCA4LjI1Yy0uMjUtLjE2LS40LS40My0uNC0uNzIgMC0uNjcuNzMtMS4wNyAxLjMtLjcyTDEyIDExbDYuNy00LjE5Yy41Ny0uMzUgMS4zLjA1IDEuMy43MiAwIC4yOS0uMTUuNTYtLjQuNzJcIlxufSksICdFbWFpbFJvdW5kZWQnKTsiLAogICAgImltcG9ydCBFbWFpbFJvdW5kZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsUm91bmRlZFwiO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR2l0SHViXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IEFzeW5jUHJlZmVyZW5jZUNhcmQgPSAoKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgcDogeyB4czogNCwgbWQ6IDUgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTIsNTMsMTQ4LDAuOTIpLCByZ2JhKDMxLDExMSwyMzUsMC44OCkpXCIsXG4gICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUgOiBcInByaW1hcnkuY29udHJhc3RUZXh0XCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMi41LCBtZDogMyB9fSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSA6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVhZHkgdG8gY29sbGFib3JhdGU/XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuODgpXCIgOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTIwLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVhY2ggb3V0IGRpcmVjdGx5IGJ5IGVtYWlsIG9yIGZvbGxvdyBhbG9uZyBvbiBMaW5rZWRJbiBhbmQgR2l0SHViLiBJ4oCZbGwgZ2V0IGJhY2sgd2l0aGluXG4gICAgICAgICAgICAgIGEgY291cGxlIG9mIGRheXMuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17eyB4czogMS41LCBzbTogMiB9fSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnNkYXJpbWFzaWhAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3RhcnRJY29uPXs8RW1haWxSb3VuZGVkSWNvbiAvPn1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsIE1hc2loXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIHNtOiBcInJvd1wiIH19IHNwYWNpbmc9e3sgeHM6IDEuNSwgc206IDEuNSB9fSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21zYWRyaS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxMaW5rZWRJbkljb24gLz59XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC40KVwiLFxuICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMaW5rZWRJblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbXJzYWRyaVwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEdpdEh1Ykljb24gLz59XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC40KVwiLFxuICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXN5bmNQcmVmZXJlbmNlQ2FyZDtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDb250YWN0TWV0aG9kIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgQ29udGFjdE1ldGhvZHNTZWN0aW9uUHJvcHMgPSB7XG4gIG1ldGhvZHM6IFJlYWRvbmx5QXJyYXk8Q29udGFjdE1ldGhvZD47XG59O1xuXG5jb25zdCBDb250YWN0TWV0aG9kc1NlY3Rpb24gPSAoeyBtZXRob2RzIH06IENvbnRhY3RNZXRob2RzU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3ggc3g9e3sgcHk6IHsgeHM6IDYsIG1kOiA4IH0gfX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAge21ldGhvZHMubWFwKChtZXRob2QpID0+IHtcbiAgICAgICAgICBjb25zdCBpc01haWxMaW5rID0gbWV0aG9kLmhyZWYuc3RhcnRzV2l0aChcIm1haWx0bzpcIik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBtZDogNCB9fSBrZXk9e21ldGhvZC50aXRsZX0+XG4gICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cInNwYW5cIiBzeD17eyBsaW5lSGVpZ2h0OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRob2QuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57bWV0aG9kLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRob2QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzLCBwdDogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21ldGhvZC5ocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2lzTWFpbExpbmsgPyB1bmRlZmluZWQgOiBcIl9ibGFua1wifVxuICAgICAgICAgICAgICAgICAgICByZWw9e2lzTWFpbExpbmsgPyB1bmRlZmluZWQgOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWV0aG9kLmFjdGlvbkxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RNZXRob2RzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCBHcmlkIGZyb20gXCJAbXVpL3N5c3RlbS9HcmlkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFZvbHVudGVlckFjdGl2aXNtUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVm9sdW50ZWVyQWN0aXZpc21Sb3VuZGVkXCI7XG5pbXBvcnQgdHlwZSB7IEhlbHBUb3BpYyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIEhlbHBUb3BpY3NTZWN0aW9uUHJvcHMgPSB7XG4gIHRvcGljczogUmVhZG9ubHlBcnJheTxIZWxwVG9waWM+O1xufTtcblxuY29uc3QgSGVscFRvcGljc1NlY3Rpb24gPSAoeyB0b3BpY3MgfTogSGVscFRvcGljc1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94IHN4PXt7IHB5OiB7IHhzOiA2LCBtZDogOCB9IH19PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gbWI9ezR9PlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIDxWb2x1bnRlZXJBY3RpdmlzbVJvdW5kZWRJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5XaGF0IEkgQ2FuIEhlbHAgV2l0aDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIHt0b3BpY3MubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17dG9waWMudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57dG9waWMudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RvcGljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwVG9waWNzU2VjdGlvbjtcblxuXG4iLAogICAgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RIZXJvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgSGVyb1NlY3Rpb25Qcm9wcyA9IHtcbiAgaGVybzogQ29udGFjdEhlcm87XG59O1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7IGhlcm8gfTogSGVyb1NlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA4LCBtZDogMTIgfSxcbiAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMSwxMTEsMjM1LDAuMTIpLCByZ2JhKDkwLDIwMCwyNTAsMC4xNikpXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj57aGVyby50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICB7aGVyby5zdWJ0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWF4V2lkdGg6IDcyMCB9fT5cbiAgICAgICAgICB7aGVyby5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyTTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOG0tLjIyLTEzaC0uMDZjLS40IDAtLjcyLjMyLS43Mi43MnY0LjcyYzAgLjM1LjE4LjY4LjQ5Ljg2bDQuMTUgMi40OWMuMzQuMi43OC4xLjk4LS4yNC4yMS0uMzQuMS0uNzktLjI1LS45OWwtMy44Ny0yLjNWNy43MmMwLS40LS4zMi0uNzItLjcyLS43MlwiXG59KSwgJ1NjaGVkdWxlUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvc3lzdGVtL0dyaWRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZENvbnRlbnQsXG4gIENoaXAsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU2NoZWR1bGVSb3VuZGVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TY2hlZHVsZVJvdW5kZWRcIjtcbmltcG9ydCB0eXBlIHsgTWVudG9yc2hpcE9mZmVyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbnR5cGUgTWVudG9yc2hpcFNlY3Rpb25Qcm9wcyA9IHtcbiAgb2ZmZXJzOiBSZWFkb25seUFycmF5PE1lbnRvcnNoaXBPZmZlcj47XG59O1xuXG5jb25zdCBNZW50b3JzaGlwU2VjdGlvbiA9ICh7IG9mZmVycyB9OiBNZW50b3JzaGlwU2VjdGlvblByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBpZD1cIm1lbnRvcnNoaXBcIlxuICAgIHN4PXt7XG4gICAgICBweTogeyB4czogNiwgbWQ6IDggfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgfX1cbiAgPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs0fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+TWVudG9yc2hpcCAmIFNlc3Npb25zPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgTG9va2luZyBmb3IgYSBtZW50b3Igb3Igc29tZW9uZSB0byBjaGF0IHdpdGg/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgIHtvZmZlcnMubWFwKChvZmZlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRmVhdHVyZWQgPSBvZmZlci5mZWF0dXJlZCA/PyBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIG1kOiA2IH19IGtleT17b2ZmZXIudGl0bGV9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaXNGZWF0dXJlZFxuICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMiw1MywxNDgsMC45MiksIHJnYmEoMzEsMTExLDIzNSwwLjg4KSlcIlxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0ZlYXR1cmVkID8gXCJwcmltYXJ5LmNvbnRyYXN0VGV4dFwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge29mZmVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PFNjaGVkdWxlUm91bmRlZEljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17b2ZmZXIuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNGZWF0dXJlZCA/IFwiZGVmYXVsdFwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtbDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihpc0ZlYXR1cmVkICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjE4KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPXtpc0ZlYXR1cmVkID8gXCJpbmhlcml0XCIgOiBcInRleHQuc2Vjb25kYXJ5XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtvZmZlci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7b2ZmZXIubm90ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9e2lzRmVhdHVyZWQgPyBcImluaGVyaXRcIiA6IFwidGV4dC5zZWNvbmRhcnlcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXIubm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IHB4OiAzLCBwYjogMywgcHQ6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtvZmZlci5ocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZlYXR1cmVkID8gXCJzZWNvbmRhcnlcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29mZmVyLmN0YUxhYmVsID8/IFwiQm9vayBub3dcIn1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW50b3JzaGlwU2VjdGlvbjtcblxuXG4iLAogICAgIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tIFwiLi91dGlscy9jcmVhdGVTdmdJY29uLmpzXCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbigvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMi43MiAyLjAzQzYuNjMgMS42IDEuNiA2LjYzIDIuMDMgMTIuNzIgMi4zOSAxOC4wMSA3LjAxIDIyIDEyLjMxIDIySDE2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0zLjY3Yy0zLjczIDAtNy4xNS0yLjQyLTguMDgtNi4wMy0xLjQ5LTUuOCAzLjkxLTExLjIxIDkuNzEtOS43MUMxNy41OCA1LjE4IDIwIDguNiAyMCAxMi4zM3YxLjFjMCAuNzktLjcxIDEuNTctMS41IDEuNTdzLTEuNS0uNzgtMS41LTEuNTd2LTEuMjVjMC0yLjUxLTEuNzgtNC43Ny00LjI2LTUuMTItMy40LS40OS02LjI3IDIuNDUtNS42NiA1Ljg3LjM0IDEuOTEgMS44MyAzLjQ5IDMuNzIgMy45NCAxLjg0LjQzIDMuNTktLjE2IDQuNzQtMS4zMy44OSAxLjIyIDIuNjcgMS44NiA0LjMgMS4yMSAxLjM0LS41MyAyLjE2LTEuOSAyLjE2LTMuMzR2LTEuMDljMC01LjMxLTMuOTktOS45My05LjI4LTEwLjI5TTEyIDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM1wiXG59KSwgJ0FsdGVybmF0ZUVtYWlsUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWx0ZXJuYXRlRW1haWxSb3VuZGVkXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3BvbnNlVGltZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG50eXBlIFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcyA9IHtcbiAgcmVzcG9uc2VUaW1lOiBSZXNwb25zZVRpbWU7XG59O1xuXG5jb25zdCBSZXNwb25zZVRpbWVTZWN0aW9uID0gKHsgcmVzcG9uc2VUaW1lIH06IFJlc3BvbnNlVGltZVNlY3Rpb25Qcm9wcykgPT4gKFxuICA8Qm94XG4gICAgc3g9e3tcbiAgICAgIHB5OiB7IHhzOiA2LCBtZDogOCB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICB9fVxuICA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDYXJkIHN4PXt7IHA6IHsgeHM6IDQsIG1kOiA1IH0gfX0+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEFsdGVybmF0ZUVtYWlsUm91bmRlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntyZXNwb25zZVRpbWUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAge3Jlc3BvbnNlVGltZS5wYXJhZ3JhcGhzLm1hcCgocGFyYWdyYXBoKSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e3BhcmFncmFwaH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlVGltZVNlY3Rpb247XG5cblxuIiwKICAgICJpbXBvcnQgdHlwZSB7XG4gIENvbnRhY3RIZXJvLFxuICBDb250YWN0TWV0aG9kLFxuICBIZWxwVG9waWMsXG4gIE1lbnRvcnNoaXBPZmZlcixcbiAgUmVzcG9uc2VUaW1lLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RIZXJvOiBDb250YWN0SGVybyA9IHtcbiAgdGl0bGU6IFwiTGV0J3MgQ29ubmVjdFwiLFxuICBzdWJ0aXRsZTogXCJJJ2QgbG92ZSB0byBoZWFyIGZyb20geW91XCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSBkZXNpZ24gbWVudG9yLCB3YW50IHRvIGNvbGxhYm9yYXRlIG9uIGEgcHJvamVjdCwgb3IgaGF2ZSBhbiBvcHBvcnR1bml0eSB0byBkaXNjdXNzLCBmZWVsIGZyZWUgdG8gcmVhY2ggb3V0LiBJJ20gYWx3YXlzIG9wZW4gdG8gbWVhbmluZ2Z1bCBjb252ZXJzYXRpb25zIGFib3V0IGRlc2lnbiwgdXNlciBleHBlcmllbmNlLCBhbmQgYnVpbGRpbmcgcHJvZHVjdHMgdGhhdCBtYXR0ZXIuXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdE1ldGhvZHM6IFJlYWRvbmx5QXJyYXk8Q29udGFjdE1ldGhvZD4gPSBbXG4gIHtcbiAgICBpY29uOiBcIvCfk6dcIixcbiAgICB0aXRsZTogXCJFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvciBnZW5lcmFsIGlucXVpcmllcywgY29sbGFib3JhdGlvbiBvcHBvcnR1bml0aWVzLCBvciBqdXN0IHRvIHNheSBoZWxsb1wiLFxuICAgIGFjdGlvbkxhYmVsOiBcInNkYXJpbWFzaWhAZ21haWwuY29tXCIsXG4gICAgaHJlZjogXCJtYWlsdG86c2RhcmltYXNpaEBnbWFpbC5jb21cIixcbiAgfSxcbiAge1xuICAgIGljb246IFwi8J+SvFwiLFxuICAgIHRpdGxlOiBcIkxpbmtlZEluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB3aXRoIG1lIHByb2Zlc3Npb25hbGx5IGFuZCBzZWUgbXkgbGF0ZXN0IHVwZGF0ZXNcIixcbiAgICBhY3Rpb25MYWJlbDogXCJWaWV3IFByb2ZpbGUg4oaSXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbXNhZHJpL1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCLwn46oXCIsXG4gICAgdGl0bGU6IFwiRmlnbWFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGVjayBvdXQgbXkgZGVzaWduIHdvcmsgYW5kIHRoZSBNb3JwaCBEZXNpZ24gU3lzdGVtXCIsXG4gICAgYWN0aW9uTGFiZWw6IFwiVmlldyBQcm9maWxlIOKGklwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmlnbWEuY29tL0BtYXNpaFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG1lbnRvcnNoaXBPZmZlcnM6IFJlYWRvbmx5QXJyYXk8TWVudG9yc2hpcE9mZmVyPiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkV4Y2x1c2l2ZSBUYWxrIChGcmVlKVwiLFxuICAgIGR1cmF0aW9uOiBcIjIwIG1pblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlIGNhbiBkaXNjdXNzIG91ciBjYXJlZXIgcGF0aHMgYW5kIHdvcmsgZXhwZXJpZW5jZXMgdG9nZXRoZXIuXCIsXG4gICAgbm90ZTogXCJUbyBjb25maXJtIHlvdXIgc2Vzc2lvbiwgcGxlYXNlIGRvbmF0ZSAkMSB0byBhIGNoYXJpdHkgb2YgeW91ciBjaG9pY2UuXCIsXG4gICAgaHJlZjogXCJodHRwczovL3plZWcubWUvbWFzaWhzL2xldHN0YWxrXCIsXG4gICAgY3RhTGFiZWw6IFwiQm9vayBvbiBaZWVnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gTWVudG9yc2hpcCB3aXRoIE1hc2loXCIsXG4gICAgZHVyYXRpb246IFwiNzUgbWluXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlJlYWR5IHRvIHRha2UgeW91ciBkZXNpZ24gc2tpbGxzIHRvIHRoZSBuZXh0IGxldmVsPyBXZWVrbHkgbWVudG9yc2hpcCBzZXNzaW9ucyBhcmUgYSBwcm92ZW4gd2F5IHRvIGxlYXJuIGEgbmV3IHNraWxsIGFuZCBhY2NlbGVyYXRlIHlvdXIgZ3Jvd3RoIGluIFVYL1VJIGRlc2lnbi5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vemVlZy5tZS9tYXNpaHMvbWVudG9yc2hpcFwiLFxuICAgIGN0YUxhYmVsOiBcIkJvb2sgb24gWmVlZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGhlbHBUb3BpY3M6IFJlYWRvbmx5QXJyYXk8SGVscFRvcGljPiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBNZW50b3JzaGlwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk9uZS1vbi1vbmUgZ3VpZGFuY2UgZm9yIGRlc2lnbmVycyBhdCBhbnkgc3RhZ2Ugb2YgdGhlaXIgY2FyZWVyLiBQb3J0Zm9saW8gcmV2aWV3cywgc2tpbGwgZGV2ZWxvcG1lbnQsIGFuZCBjYXJlZXIgYWR2aWNlLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUG9ydGZvbGlvIFJldmlld3NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IGZlZWRiYWNrIG9uIHlvdXIgY2FzZSBzdHVkaWVzLCBkZXNpZ24gcHJvY2VzcywgYW5kIHByZXNlbnRhdGlvbi4gTWFrZSB5b3VyIHBvcnRmb2xpbyBzdGFuZCBvdXQuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0IENvbGxhYm9yYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSW50ZXJlc3RlZCBpbiB3b3JraW5nIHRvZ2V0aGVyIG9uIGEgcHJvZHVjdCBvciBkZXNpZ24gc3lzdGVtPyBMZXQncyBkaXNjdXNzIG9wcG9ydHVuaXRpZXMuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTcGVha2luZyAmIFdvcmtzaG9wc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBdmFpbGFibGUgZm9yIGRlc2lnbiB0YWxrcywgd29ya3Nob3BzLCBvciBwYW5lbCBkaXNjdXNzaW9ucyBhYm91dCBVWCBkZXNpZ24sIHVzZXIgc2FmZXR5LCBhbmQgcHJvZHVjdCBkZXNpZ24uXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcmVzcG9uc2VUaW1lOiBSZXNwb25zZVRpbWUgPSB7XG4gIHRpdGxlOiBcIlJlc3BvbnNlIFRpbWVcIixcbiAgcGFyYWdyYXBoczogW1xuICAgIFwiSSB0eXBpY2FsbHkgcmVzcG9uZCB0byBlbWFpbHMgd2l0aGluIDI0LTQ4IGhvdXJzLiBGb3IgbWVudG9yc2hpcCBpbnF1aXJpZXMsIHBsZWFzZSBhbGxvdyBhIGJpdCBtb3JlIHRpbWUgYXMgSSByZXZpZXcgZWFjaCByZXF1ZXN0IGNhcmVmdWxseS5cIixcbiAgICBcIklmIHlvdSBoYXZlbid0IGhlYXJkIGJhY2sgYWZ0ZXIgMyBkYXlzLCBmZWVsIGZyZWUgdG8gc2VuZCBhIGdlbnRsZSBmb2xsb3ctdXAuXCIsXG4gIF0sXG59O1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEsIFN0cnVjdHVyZWREYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZW9cIjtcbmltcG9ydCBnZXRTaXRlVXJsIGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbHMvc2l0ZVwiO1xuaW1wb3J0IHsgY29udGFjdEhlcm8sIGNvbnRhY3RNZXRob2RzLCBtZW50b3JzaGlwT2ZmZXJzIH0gZnJvbSBcIi4vZGF0YS9jb250ZW50XCI7XG5cbmNvbnN0IHNpdGVVcmwgPSBnZXRTaXRlVXJsKCk7XG5cbmNvbnN0IGNvbnRhY3RTdHJ1Y3R1cmVkRGF0YTogU3RydWN0dXJlZERhdGEgPSB7XG4gIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgXCJAdHlwZVwiOiBcIkNvbnRhY3RQYWdlXCIsXG4gIG5hbWU6IFwiQ29udGFjdCBNYXNpaCBTYWRyaVwiLFxuICBkZXNjcmlwdGlvbjogY29udGFjdEhlcm8uZGVzY3JpcHRpb24sXG4gIHVybDogYCR7c2l0ZVVybH0vY29udGFjdGAsXG4gIG1haW5FbnRpdHk6IGNvbnRhY3RNZXRob2RzLm1hcCgobWV0aG9kKSA9PiAoe1xuICAgIFwiQHR5cGVcIjogXCJDb250YWN0UG9pbnRcIixcbiAgICBjb250YWN0VHlwZTogbWV0aG9kLnRpdGxlLFxuICAgIHVybDogbWV0aG9kLmhyZWYsXG4gICAgZGVzY3JpcHRpb246IG1ldGhvZC5kZXNjcmlwdGlvbixcbiAgfSkpLFxuICBvZmZlcnM6IG1lbnRvcnNoaXBPZmZlcnMubWFwKChvZmZlcikgPT4gKHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICBuYW1lOiBvZmZlci50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogb2ZmZXIuZGVzY3JpcHRpb24sXG4gICAgdXJsOiBvZmZlci5ocmVmLFxuICAgIGR1cmF0aW9uOiBvZmZlci5kdXJhdGlvbixcbiAgfSkpLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RQYWdlTWV0YWRhdGE6IFBhZ2VNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiQ29udGFjdCBNYXNpaCBTYWRyaSDigJQgQ29sbGFib3JhdGlvbnMsIG1lbnRvcnNoaXAsIGFuZCBzcGVha2luZ1wiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkJvb2sgbWVudG9yc2hpcCBzZXNzaW9ucywgcmVxdWVzdCBjb2xsYWJvcmF0aW9ucywgb3IgcmVhY2ggTWFzaWggU2FkcmkgZGlyZWN0bHkgZm9yIHNlbmlvciBwcm9kdWN0IGRlc2lnbiB3b3JrLlwiLFxuICBjYW5vbmljYWxQYXRoOiBcIi9jb250YWN0XCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICB9LFxuICBzdHJ1Y3R1cmVkRGF0YTogY29udGFjdFN0cnVjdHVyZWREYXRhLFxufTtcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUNHQTtBQUhBO0FBSUEsSUFBZSxxREFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsY0FBYzs7OztBQ0RsQixJQUFNLHNCQUFzQixzQkFDMUIsdUJBc0ZFLGFBdEZGO0FBQUEsRUFBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtBQUFBLEVBQWhDLDBCQUNFLHVCQW9GRSxtQkFwRkY7QUFBQSw4QkFDRSx1QkFrRkUsY0FsRkY7QUFBQSxNQUNFLElBQUksQ0FBQyxXQUFXO0FBQUEsUUFDZCxHQUFHLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLFFBQ2xCLFlBQVk7QUFBQSxRQUNaLE9BQ0UsTUFBTSxRQUFRLFNBQVMsU0FBUyxNQUFNLFFBQVEsT0FBTyxRQUFRO0FBQUEsTUFDakU7QUFBQSxNQU5GLDBCQVFFLHVCQXlFRSxlQXpFRjtBQUFBLFFBQU8sU0FBUyxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxRQUFHLFlBQVc7QUFBQSxRQUEv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SUFDRjtBQUFBLElBRUEsTUFBTSxXQUFXLFNBQVMsS0FBSyxNQUFNLENBQUM7QUFBQSxJQUN0QyxNQUFNLFVBQVUsU0FBUyxlQUFlLFFBQVE7QUFBQSxJQUNoRCxJQUFJLFNBQVM7QUFBQSxNQUNYLFFBQVEsZUFBZSxFQUFFLFVBQVUsVUFBVSxPQUFPLFFBQVEsQ0FBQztBQUFBLElBQy9EO0FBQUEsS0FDQyxDQUFDLFNBQVMsSUFBSSxDQUFDO0FBQUEsRUFFbEIsdUJBQ0U7QUFBQSxjQVNFO0FBQUEsc0JBUkEsd0JBQUMsYUFBRDtBQUFBLFdBQVM7QUFBQSxTQUFULGlDQUE4QjtBQUFBLHNCQUU5Qix3QkFBQyxxQkFBRDtBQUFBLFFBQWEsTUFBTTtBQUFBLFNBQW5CLGlDQUFnQztBQUFBLHNCQUNoQyx3QkFBQywrQkFBRDtBQUFBLFFBQXVCLFNBQVM7QUFBQSxTQUFoQyxpQ0FBZ0Q7QUFBQSxzQkFDaEQsd0JBQUMsMkJBQUQ7QUFBQSxRQUFtQixRQUFRO0FBQUEsU0FBM0IsaUNBQTZDO0FBQUEsc0JBQzdDLHdCQUFDLDJCQUFEO0FBQUEsUUFBbUIsUUFBUTtBQUFBLFNBQTNCLGlDQUF1QztBQUFBLHNCQUN2Qyx3QkFBQyw2QkFBRDtBQUFBLFFBQXFCO0FBQUEsU0FBckIsaUNBQWlEO0FBQUEsc0JBQ2pELHdCQUFDLDZCQUFELHFDQUFxQjtBQUFBO0FBQUEsS0FSdkIsZ0NBU0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICI4NjMwMDRCRDc2MzIxMjEyNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
