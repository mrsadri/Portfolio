import {
  Pill_default
} from "./chunk-akz6m2hr.js";
import {
  Box_default,
  Card_default,
  Grid_default1 as Grid_default,
  Stack_default,
  Typography_default,
  __toESM,
  createSvgIcon,
  require_jsx_dev_runtime,
  require_jsx_runtime,
  useTheme
} from "./chunk-kr6hc1f9.js";

// node_modules/@mui/icons-material/esm/ArrowBackRounded.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ArrowBackRounded_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"
}), "ArrowBackRounded");

// src/components/case-studies/SectionCard.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CaseStudySectionCard = ({ section }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
    component: "section",
    id: section.id,
    variant: "outlined",
    sx: {
      borderRadius: `${theme.tokens.radius.surface}px`,
      boxShadow: "none",
      px: { xs: theme.tokens.spacing.lg, md: theme.tokens.spacing.xl },
      py: { xs: theme.tokens.spacing.lg, md: theme.tokens.spacing.xl }
    },
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
      spacing: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          spacing: 1,
          children: [
            section.eyebrow && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "eyebrow",
              color: "brand.secondary",
              children: section.eyebrow
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "h3",
              children: section.title
            }, undefined, false, undefined, this),
            section.summary && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "body1",
              color: "text.secondary",
              sx: { lineHeight: 1.7 },
              children: section.summary
            }, undefined, false, undefined, this),
            section.body?.map((paragraph) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "body1",
              color: "text.secondary",
              sx: { lineHeight: 1.7 },
              children: paragraph
            }, paragraph.slice(0, 24), false, undefined, this))
          ]
        }, undefined, true, undefined, this),
        section.quotes && section.quotes.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          spacing: 2,
          children: section.quotes.map((quote) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
            variant: "outlined",
            sx: {
              borderRadius: `${theme.tokens.radius.surface}px`,
              boxShadow: "none",
              backgroundColor: theme.palette.mode === "light" ? "rgba(34, 84, 255, 0.04)" : "rgba(34, 84, 255, 0.12)",
              px: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
              py: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg }
            },
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: 1,
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "body1",
                  sx: { fontStyle: "italic", lineHeight: 1.7 },
                  children: [
                    "“",
                    quote.text,
                    "”"
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "caption",
                  color: "text.secondary",
                  children: [
                    quote.author,
                    " — ",
                    quote.role
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, `${quote.author}-${quote.text.slice(0, 16)}`, false, undefined, this))
        }, undefined, false, undefined, this),
        section.bullets && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          component: "ul",
          spacing: 1,
          sx: { pl: 2, mb: 0 },
          children: section.bullets.map((point) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            component: "li",
            variant: "body1",
            color: "text.secondary",
            children: point
          }, point, false, undefined, this))
        }, undefined, false, undefined, this),
        section.highlights && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          useFlexGap: true,
          children: section.highlights.map((highlight) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pill_default, {
            label: highlight,
            size: "small",
            sx: {
              backgroundColor: theme.palette.mode === "light" ? "rgba(34, 84, 255, 0.08)" : "rgba(98, 132, 218, 0.16)",
              color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
            }
          }, highlight, false, undefined, this))
        }, undefined, false, undefined, this),
        section.metrics && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
          container: true,
          spacing: 2,
          children: section.metrics.map((metric) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
            size: { xs: 12, md: section.metrics.length > 1 ? 6 : 12 },
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
              variant: "outlined",
              sx: {
                height: "100%",
                borderRadius: `${theme.tokens.radius.surface}px`,
                boxShadow: "none",
                px: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg },
                py: { xs: theme.tokens.spacing.md, md: theme.tokens.spacing.lg }
              },
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
                spacing: 0.75,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "h4",
                    children: metric.value
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "subtitle1",
                    sx: { fontWeight: 600 },
                    children: metric.label
                  }, undefined, false, undefined, this),
                  metric.description && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: { lineHeight: 1.6 },
                    children: metric.description
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          }, metric.label, false, undefined, this))
        }, undefined, false, undefined, this),
        section.image && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
          component: "img",
          src: section.image.src,
          alt: section.image.alt,
          sx: {
            width: "100%",
            borderRadius: `${theme.tokens.radius.surface}px`,
            boxShadow: "none"
          }
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
var SectionCard_default = CaseStudySectionCard;

// images/divar-secure-call-listing.png
var divar_secure_call_listing_default = "./divar-secure-call-listing-6ff2dx8n.png";

// images/setare-aval-interview-session.avif
var setare_aval_interview_session_default = "./setare-aval-interview-session-p9jcmw69.avif";

// src/data/caseStudies.ts
var resolveAsset = (asset) => new URL(asset, import.meta.url).href;
var divarOverview = {
  title: "Solving Harassment at Scale: How I Protected 2.1M Users on Iran's Largest Marketplace",
  subtitle: "We reduced harassment incidents by 60% inside Divar’s clothing category by building a privacy-first calling experience that now protects 2.1M weekly users.",
  meta: [
    { label: "Role", value: "Senior UX Designer · Trust & Safety" },
    { label: "Timeline", value: "May – June 2023" },
    { label: "Team", value: "Design, Trust & Safety, Legal, Engineering, Support" }
  ],
  stats: [
    { value: "▼60%", label: "Harassment reports" },
    { value: "2.1M", label: "Weekly callers safeguarded" },
    { value: "▼18%", label: "Safety ticket volume" }
  ],
  heroImage: resolveAsset(divar_secure_call_listing_default)
};
var divarSections = [
  {
    id: "context",
    title: "Context",
    summary: "Divar is Iran’s largest classifieds marketplace with 53M+ weekly users. Trust and safety incidents can collapse entire revenue categories if left unchecked.",
    metrics: [
      { label: "Marketplace scale", value: "53M+", description: "Weekly buyers & sellers" },
      { label: "Voice dependence", value: "2.1M", description: "Calls placed every week" },
      { label: "Ad consumption", value: "6B+", description: "Monthly ad views" }
    ],
    highlights: [
      "Clothing listings—mostly women-led—were hit hardest by abuse.",
      "Manual moderation couldn’t keep up; liquidity and trust were in free fall."
    ]
  },
  {
    id: "crisis",
    title: "The Crisis",
    summary: "Customer care centres were flooded with harassment reports. Sellers deleted listings or churned entirely, fearing repeat incidents.",
    bullets: [
      "Harassers scraped phone numbers from ads and circulated them in private Telegram groups.",
      "Even after victims deleted listings, the calls continued because numbers were already exposed.",
      "Without intervention, Divar risked losing a category that anchored daily engagement."
    ],
    quotes: [
      {
        author: "Layla, 32",
        role: "Professional artist selling bespoke clothing",
        text: "It was infuriating. I took down my Divar ad hoping to stop the calls, but they kept coming. Someone told me my number was in a Telegram group."
      }
    ]
  },
  {
    id: "investigation",
    title: "Finding the Real Problem",
    summary: "I interviewed harassed sellers and analysed behavioural data to understand how exposure scaled. The breakthrough came from connecting qualitative stories to quantitative signals.",
    body: [
      "Patterns emerged quickly: harassers saved posted numbers, cross-referenced them on WhatsApp and Instagram, and only then began the abuse. Experienced sellers had already stopped sharing numbers and relied on in-app chat—new sellers were the ones left exposed.",
      "Sara’s mention of a caller referencing her eye color confirmed our hypothesis: social media breadcrumbs made harassment personal and frightening.",
      "Data analysis backed the qualitative work. Users whose phone numbers were linked to public social profiles reported harassment dramatically more often. Those who stuck to in-app chat rarely did."
    ],
    quotes: [
      {
        author: "Sara, 26",
        role: "Fashion retail worker",
        text: "One caller knew my eye color. They clearly found my Instagram through the phone number on Divar."
      },
      {
        author: "Zahra, 28",
        role: "Freelance graphic designer",
        text: "I stopped listing my phone number. It felt unprofessional, but it was the only way to avoid harassment."
      }
    ],
    highlights: [
      "Public phone numbers were the root cause of exposure, not the number of reports.",
      "Experienced sellers had already adapted by using in-app chat; new sellers needed protective defaults."
    ]
  },
  {
    id: "strategy",
    title: "The Solution Journey",
    summary: "We reframed success from “reduce reports” to “reduce exposure.” With Trust & Safety, Legal, Support, and Data, we evaluated every path and stress-tested edge cases before committing.",
    bullets: [
      "Educating users about harasser tactics would erode trust and discourage listings.",
      "Full VoIP was cost-prohibitive, fragile across device types, and inaccessible to 47% of legacy Android users.",
      "Voice relay with intermediary numbers protected sellers without changing purchase behaviour—this became the north star."
    ]
  },
  {
    id: "testing",
    title: "Testing & Learning from Failure",
    summary: "A 3-day pilot in the clothing category resulted in a 56% call failure rate. Instead of reverting, we treated every failure as a design requirement.",
    bullets: [
      "User behaviour: sellers blocked unfamiliar numbers; buyers redialled from call logs; repeat conversations broke mapping windows.",
      "Technical load: call volume spiked beyond forecasts and number pools were exhausted.",
      "Business risk: longer calls inflated telecom costs and anonymised numbers attracted opportunistic scammers."
    ]
  },
  {
    id: "refinement",
    title: "The Refined Solution",
    summary: "We translated every pilot insight into product and platform improvements before scaling nationwide.",
    bullets: [
      "Bidirectional mapping let sellers reconnect without exposing real numbers.",
      "Extended mapping windows from 20 seconds to 15 minutes reduced dropped calls.",
      "Voice prompts (“This is a secure call from Divar…”) set expectations and deterred scammers.",
      "A pool of 100 intermediary numbers assigned per buyer-seller pair prevented reuse and blocking.",
      "Secure call history, chat integration, and ad management logs kept legitimate relationships intact."
    ]
  },
  {
    id: "impact",
    title: "Impact",
    body: [
      "After rollout, harassment reports dropped dramatically and sellers felt safe enough to keep listings live. Moderation teams recovered hours each week that were previously spent on reactive tickets."
    ],
    metrics: [
      {
        label: "Harassment reports",
        value: "▼ 60%",
        description: "Within 8 weeks of launch"
      },
      {
        label: "Ad deletions",
        value: "▼ 25%",
        description: "Fewer sellers leaving the platform"
      },
      {
        label: "Support tickets",
        value: "▼ 18%",
        description: "More time for proactive monitoring"
      }
    ]
  },
  {
    id: "learnings",
    title: "Key Learnings",
    bullets: [
      "The obvious problem is rarely the real one—exposure, not reports, was the root.",
      "Users were already designing workarounds; observing them revealed the right defaults.",
      "Failure is signal. The 56% pilot failure generated a backlog of actionable requirements.",
      "Pair qualitative insight with real-time monitoring to keep abuse vectors in check."
    ]
  },
  {
    id: "reflection",
    title: "Reflection",
    body: [
      "This project reinforced my belief that solving hard problems starts with understanding behaviour. By blending research, data, and rapid iteration, we built a safety layer that still protects millions of people each week. The harassment problem may never disappear entirely, but Divar is significantly safer for the users who need it most."
    ]
  }
];
var setareOverview = {
  title: "Turning One-Time Visitors into Lifelong Customers at Setare Aval",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "Feb 2021 – Jan 2022" },
    { label: "Impact", value: "Doubled retained revenue in 6 months" }
  ],
  heroImage: resolveAsset(setare_aval_interview_session_default)
};
var setareSections = [
  {
    id: "context",
    title: "Context",
    description: "Setare Aval is the digital arm of Iran's largest telecom. We powered fintech services, USSD experiences, and mobile value-added services nation-wide. Growth had plateaued—our funnel leaked after the first purchase.",
    metrics: [
      {
        label: "User Base",
        value: "60K+",
        description: "Daily subscribers across nationwide services"
      },
      {
        label: "Retention Goal",
        value: "x2",
        description: "Double 90-day retained revenue"
      }
    ]
  },
  {
    id: "challenge",
    title: "Challenge",
    bullets: [
      "Activation flow treated every segment identically, ignoring usage intent.",
      "Referral loops existed but were unrewarding—users churned after first benefit.",
      "Teams shipped in silos; no shared experiment cadence or success metrics."
    ]
  },
  {
    id: "insights",
    title: "What We Learned",
    description: "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
    bullets: [
      "Users wanted tangible milestones—without them, the product felt transactional.",
      "High-intent cohorts responded to educational nudges more than promotions.",
      "Internal teams lacked visibility into experiment outcomes, slowing iteration."
    ]
  },
  {
    id: "solution",
    title: "Experience Re-Architecture",
    bullets: [
      "Introduced lifecycle messaging tailored to intent (explorers, earners, loyalists).",
      "Shipped a gamified referral journey that celebrated progress and unlocked tiered rewards.",
      "Stood up a cross-functional growth guild with a 2-week experiment cadence."
    ],
    metrics: [
      {
        label: "Retained Revenue",
        value: "2×",
        description: "Within 6 months of staged rollout"
      },
      {
        label: "Daily Active Users",
        value: "+60K",
        description: "Referral program participants became daily actives"
      }
    ]
  },
  {
    id: "role",
    title: "My Role",
    description: "I operated as the end-to-end product designer, bridging product, marketing, customer success, and engineering.",
    bullets: [
      "Ran weekly co-creation rituals to align stakeholders on experiment priorities.",
      "Established design system foundations adopted by teams beyond growth.",
      "Set up analytics dashboards that paired qualitative notes with funnel KPIs."
    ],
    quotes: [
      {
        author: "Head of Growth",
        role: "Setare Aval",
        text: "Masih helped us shift from one-off campaigns to a product mindset. The lifecycle model and experiment cadence still guide how we build today."
      }
    ]
  }
];

export { ArrowBackRounded_default, SectionCard_default, divarOverview, divarSections, setareOverview, setareSections };

//# debugId=2944F4369D00696064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja1JvdW5kZWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvZGF0YS9jYXNlU3R1ZGllcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTFINy44M2w0Ljg4LTQuODhjLjM5LS4zOS4zOS0xLjAzIDAtMS40MmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBsLTYuNTkgNi41OWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw2LjU5IDYuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwcy4zOS0xLjAyIDAtMS40MUw3LjgzIDEzSDE5Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xXCJcbn0pLCAnQXJyb3dCYWNrUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHsgQm94LCBDYXJkLCBHcmlkLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL3VpL1BpbGxcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhL2Nhc2VTdHVkaWVzXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBpZD17c2VjdGlvbi5pZH1cbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBzeD17e1xuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgIHB4OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH0sXG4gICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZXllYnJvd1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtzZWN0aW9uLmV5ZWJyb3d9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57c2VjdGlvbi50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDI0KX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIHtzZWN0aW9uLnF1b3RlcyAmJiBzZWN0aW9uLnF1b3Rlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICB7c2VjdGlvbi5xdW90ZXMubWFwKChxdW90ZSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17YCR7cXVvdGUuYXV0aG9yfS0ke3F1b3RlLnRleHQuc2xpY2UoMCwgMTYpfWB9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS50b2tlbnMucmFkaXVzLnN1cmZhY2V9cHhgLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCwgODQsIDI1NSwgMC4wNClcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDM0LCA4NCwgMjU1LCAwLjEyKVwiLFxuICAgICAgICAgICAgICAgICAgcHg6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcgfSxcbiAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiwgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAgICDigJx7cXVvdGUudGV4dH3igJ1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7cXVvdGUuYXV0aG9yfSDigJQge3F1b3RlLnJvbGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c2VjdGlvbi5idWxsZXRzICYmIChcbiAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxfSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e3BvaW50fSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMgJiYgKFxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCkgPT4gKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgIGxhYmVsPXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LCA4NCwgMjU1LCAwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE2KVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICl9XG5cbiAgICAgICAge3NlY3Rpb24ubWV0cmljcyAmJiAoXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAge3NlY3Rpb24ubWV0cmljcy5tYXAoKG1ldHJpYykgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IHNlY3Rpb24ubWV0cmljcyEubGVuZ3RoID4gMSA/IDYgOiAxMiB9fSBrZXk9e21ldHJpYy5sYWJlbH0+XG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e21ldHJpYy52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21ldHJpYy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge21ldHJpYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICAgIGFsdD17c2VjdGlvbi5pbWFnZS5hbHR9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQ7XG5cbiIsCiAgICAiLy8gRmlsZTogc3JjL2RhdGEvY2FzZVN0dWRpZXMudHNcbi8vIFB1cnBvc2U6IFByb3ZpZGVzIHN0cnVjdHVyZWQgY29udGVudCBmb3IgdGhlIERpdmFyIGFuZCBTZXRhcmUgQXZhbCBjYXNlIHN0dWR5IHBhZ2VzIGluY2x1ZGluZyBvdmVydmlld3MgYW5kIHNlY3Rpb24gZGV0YWlscy5cbmltcG9ydCBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9kaXZhci1zZWN1cmUtY2FsbC1saXN0aW5nLnBuZ1wiO1xuaW1wb3J0IHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLWludGVydmlldy1zZXNzaW9uLmF2aWZcIjtcblxuY29uc3QgcmVzb2x2ZUFzc2V0ID0gKGFzc2V0OiBzdHJpbmcpID0+IG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZjtcbmV4cG9ydCB0eXBlIENhc2VTdHVkeVNlY3Rpb24gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGV5ZWJyb3c/OiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG4gIGJvZHk/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgYnVsbGV0cz86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBoaWdobGlnaHRzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIHF1b3Rlcz86IHJlYWRvbmx5IHtcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICB9W107XG4gIG1ldHJpY3M/OiByZWFkb25seSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB9W107XG4gIGltYWdlPzoge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRpdmFyT3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIldlIHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGluc2lkZSBEaXZhcuKAmXMgY2xvdGhpbmcgY2F0ZWdvcnkgYnkgYnVpbGRpbmcgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IG5vdyBwcm90ZWN0cyAyLjFNIHdlZWtseSB1c2Vycy5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgVVggRGVzaWduZXIgwrcgVHJ1c3QgJiBTYWZldHlcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiTWF5IOKAkyBKdW5lIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGVhbVwiLCB2YWx1ZTogXCJEZXNpZ24sIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgRW5naW5lZXJpbmcsIFN1cHBvcnRcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHsgdmFsdWU6IFwi4pa8NjAlXCIsIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiIH0sXG4gICAgeyB2YWx1ZTogXCIyLjFNXCIsIGxhYmVsOiBcIldlZWtseSBjYWxsZXJzIHNhZmVndWFyZGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogcmVzb2x2ZUFzc2V0KGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCksXG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJEaXZhciBpcyBJcmFu4oCZcyBsYXJnZXN0IGNsYXNzaWZpZWRzIG1hcmtldHBsYWNlIHdpdGggNTNNKyB3ZWVrbHkgdXNlcnMuIFRydXN0IGFuZCBzYWZldHkgaW5jaWRlbnRzIGNhbiBjb2xsYXBzZSBlbnRpcmUgcmV2ZW51ZSBjYXRlZ29yaWVzIGlmIGxlZnQgdW5jaGVja2VkLlwiLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHsgbGFiZWw6IFwiTWFya2V0cGxhY2Ugc2NhbGVcIiwgdmFsdWU6IFwiNTNNK1wiLCBkZXNjcmlwdGlvbjogXCJXZWVrbHkgYnV5ZXJzICYgc2VsbGVyc1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIlZvaWNlIGRlcGVuZGVuY2VcIiwgdmFsdWU6IFwiMi4xTVwiLCBkZXNjcmlwdGlvbjogXCJDYWxscyBwbGFjZWQgZXZlcnkgd2Vla1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIkFkIGNvbnN1bXB0aW9uXCIsIHZhbHVlOiBcIjZCK1wiLCBkZXNjcmlwdGlvbjogXCJNb250aGx5IGFkIHZpZXdzXCIgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ2xvdGhpbmcgbGlzdGluZ3PigJRtb3N0bHkgd29tZW4tbGVk4oCUd2VyZSBoaXQgaGFyZGVzdCBieSBhYnVzZS5cIixcbiAgICAgIFwiTWFudWFsIG1vZGVyYXRpb24gY291bGRu4oCZdCBrZWVwIHVwOyBsaXF1aWRpdHkgYW5kIHRydXN0IHdlcmUgaW4gZnJlZSBmYWxsLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjcmlzaXNcIixcbiAgICB0aXRsZTogXCJUaGUgQ3Jpc2lzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQ3VzdG9tZXIgY2FyZSBjZW50cmVzIHdlcmUgZmxvb2RlZCB3aXRoIGhhcmFzc21lbnQgcmVwb3J0cy4gU2VsbGVycyBkZWxldGVkIGxpc3RpbmdzIG9yIGNodXJuZWQgZW50aXJlbHksIGZlYXJpbmcgcmVwZWF0IGluY2lkZW50cy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkhhcmFzc2VycyBzY3JhcGVkIHBob25lIG51bWJlcnMgZnJvbSBhZHMgYW5kIGNpcmN1bGF0ZWQgdGhlbSBpbiBwcml2YXRlIFRlbGVncmFtIGdyb3Vwcy5cIixcbiAgICAgIFwiRXZlbiBhZnRlciB2aWN0aW1zIGRlbGV0ZWQgbGlzdGluZ3MsIHRoZSBjYWxscyBjb250aW51ZWQgYmVjYXVzZSBudW1iZXJzIHdlcmUgYWxyZWFkeSBleHBvc2VkLlwiLFxuICAgICAgXCJXaXRob3V0IGludGVydmVudGlvbiwgRGl2YXIgcmlza2VkIGxvc2luZyBhIGNhdGVnb3J5IHRoYXQgYW5jaG9yZWQgZGFpbHkgZW5nYWdlbWVudC5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiTGF5bGEsIDMyXCIsXG4gICAgICAgIHJvbGU6IFwiUHJvZmVzc2lvbmFsIGFydGlzdCBzZWxsaW5nIGJlc3Bva2UgY2xvdGhpbmdcIixcbiAgICAgICAgdGV4dDogXCJJdCB3YXMgaW5mdXJpYXRpbmcuIEkgdG9vayBkb3duIG15IERpdmFyIGFkIGhvcGluZyB0byBzdG9wIHRoZSBjYWxscywgYnV0IHRoZXkga2VwdCBjb21pbmcuIFNvbWVvbmUgdG9sZCBtZSBteSBudW1iZXIgd2FzIGluIGEgVGVsZWdyYW0gZ3JvdXAuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnZlc3RpZ2F0aW9uXCIsXG4gICAgdGl0bGU6IFwiRmluZGluZyB0aGUgUmVhbCBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBpbnRlcnZpZXdlZCBoYXJhc3NlZCBzZWxsZXJzIGFuZCBhbmFseXNlZCBiZWhhdmlvdXJhbCBkYXRhIHRvIHVuZGVyc3RhbmQgaG93IGV4cG9zdXJlIHNjYWxlZC4gVGhlIGJyZWFrdGhyb3VnaCBjYW1lIGZyb20gY29ubmVjdGluZyBxdWFsaXRhdGl2ZSBzdG9yaWVzIHRvIHF1YW50aXRhdGl2ZSBzaWduYWxzLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiUGF0dGVybnMgZW1lcmdlZCBxdWlja2x5OiBoYXJhc3NlcnMgc2F2ZWQgcG9zdGVkIG51bWJlcnMsIGNyb3NzLXJlZmVyZW5jZWQgdGhlbSBvbiBXaGF0c0FwcCBhbmQgSW5zdGFncmFtLCBhbmQgb25seSB0aGVuIGJlZ2FuIHRoZSBhYnVzZS4gRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBzdG9wcGVkIHNoYXJpbmcgbnVtYmVycyBhbmQgcmVsaWVkIG9uIGluLWFwcCBjaGF04oCUbmV3IHNlbGxlcnMgd2VyZSB0aGUgb25lcyBsZWZ0IGV4cG9zZWQuXCIsXG4gICAgICBcIlNhcmHigJlzIG1lbnRpb24gb2YgYSBjYWxsZXIgcmVmZXJlbmNpbmcgaGVyIGV5ZSBjb2xvciBjb25maXJtZWQgb3VyIGh5cG90aGVzaXM6IHNvY2lhbCBtZWRpYSBicmVhZGNydW1icyBtYWRlIGhhcmFzc21lbnQgcGVyc29uYWwgYW5kIGZyaWdodGVuaW5nLlwiLFxuICAgICAgXCJEYXRhIGFuYWx5c2lzIGJhY2tlZCB0aGUgcXVhbGl0YXRpdmUgd29yay4gVXNlcnMgd2hvc2UgcGhvbmUgbnVtYmVycyB3ZXJlIGxpbmtlZCB0byBwdWJsaWMgc29jaWFsIHByb2ZpbGVzIHJlcG9ydGVkIGhhcmFzc21lbnQgZHJhbWF0aWNhbGx5IG1vcmUgb2Z0ZW4uIFRob3NlIHdobyBzdHVjayB0byBpbi1hcHAgY2hhdCByYXJlbHkgZGlkLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJTYXJhLCAyNlwiLFxuICAgICAgICByb2xlOiBcIkZhc2hpb24gcmV0YWlsIHdvcmtlclwiLFxuICAgICAgICB0ZXh0OiBcIk9uZSBjYWxsZXIga25ldyBteSBleWUgY29sb3IuIFRoZXkgY2xlYXJseSBmb3VuZCBteSBJbnN0YWdyYW0gdGhyb3VnaCB0aGUgcGhvbmUgbnVtYmVyIG9uIERpdmFyLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlphaHJhLCAyOFwiLFxuICAgICAgICByb2xlOiBcIkZyZWVsYW5jZSBncmFwaGljIGRlc2lnbmVyXCIsXG4gICAgICAgIHRleHQ6IFwiSSBzdG9wcGVkIGxpc3RpbmcgbXkgcGhvbmUgbnVtYmVyLiBJdCBmZWx0IHVucHJvZmVzc2lvbmFsLCBidXQgaXQgd2FzIHRoZSBvbmx5IHdheSB0byBhdm9pZCBoYXJhc3NtZW50LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiUHVibGljIHBob25lIG51bWJlcnMgd2VyZSB0aGUgcm9vdCBjYXVzZSBvZiBleHBvc3VyZSwgbm90IHRoZSBudW1iZXIgb2YgcmVwb3J0cy5cIixcbiAgICAgIFwiRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBhZGFwdGVkIGJ5IHVzaW5nIGluLWFwcCBjaGF0OyBuZXcgc2VsbGVycyBuZWVkZWQgcHJvdGVjdGl2ZSBkZWZhdWx0cy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3RyYXRlZ3lcIixcbiAgICB0aXRsZTogXCJUaGUgU29sdXRpb24gSm91cm5leVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHJlZnJhbWVkIHN1Y2Nlc3MgZnJvbSDigJxyZWR1Y2UgcmVwb3J0c+KAnSB0byDigJxyZWR1Y2UgZXhwb3N1cmUu4oCdIFdpdGggVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBTdXBwb3J0LCBhbmQgRGF0YSwgd2UgZXZhbHVhdGVkIGV2ZXJ5IHBhdGggYW5kIHN0cmVzcy10ZXN0ZWQgZWRnZSBjYXNlcyBiZWZvcmUgY29tbWl0dGluZy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkVkdWNhdGluZyB1c2VycyBhYm91dCBoYXJhc3NlciB0YWN0aWNzIHdvdWxkIGVyb2RlIHRydXN0IGFuZCBkaXNjb3VyYWdlIGxpc3RpbmdzLlwiLFxuICAgICAgXCJGdWxsIFZvSVAgd2FzIGNvc3QtcHJvaGliaXRpdmUsIGZyYWdpbGUgYWNyb3NzIGRldmljZSB0eXBlcywgYW5kIGluYWNjZXNzaWJsZSB0byA0NyUgb2YgbGVnYWN5IEFuZHJvaWQgdXNlcnMuXCIsXG4gICAgICBcIlZvaWNlIHJlbGF5IHdpdGggaW50ZXJtZWRpYXJ5IG51bWJlcnMgcHJvdGVjdGVkIHNlbGxlcnMgd2l0aG91dCBjaGFuZ2luZyBwdXJjaGFzZSBiZWhhdmlvdXLigJR0aGlzIGJlY2FtZSB0aGUgbm9ydGggc3Rhci5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGVzdGluZ1wiLFxuICAgIHRpdGxlOiBcIlRlc3RpbmcgJiBMZWFybmluZyBmcm9tIEZhaWx1cmVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBIDMtZGF5IHBpbG90IGluIHRoZSBjbG90aGluZyBjYXRlZ29yeSByZXN1bHRlZCBpbiBhIDU2JSBjYWxsIGZhaWx1cmUgcmF0ZS4gSW5zdGVhZCBvZiByZXZlcnRpbmcsIHdlIHRyZWF0ZWQgZXZlcnkgZmFpbHVyZSBhcyBhIGRlc2lnbiByZXF1aXJlbWVudC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXIgYmVoYXZpb3VyOiBzZWxsZXJzIGJsb2NrZWQgdW5mYW1pbGlhciBudW1iZXJzOyBidXllcnMgcmVkaWFsbGVkIGZyb20gY2FsbCBsb2dzOyByZXBlYXQgY29udmVyc2F0aW9ucyBicm9rZSBtYXBwaW5nIHdpbmRvd3MuXCIsXG4gICAgICBcIlRlY2huaWNhbCBsb2FkOiBjYWxsIHZvbHVtZSBzcGlrZWQgYmV5b25kIGZvcmVjYXN0cyBhbmQgbnVtYmVyIHBvb2xzIHdlcmUgZXhoYXVzdGVkLlwiLFxuICAgICAgXCJCdXNpbmVzcyByaXNrOiBsb25nZXIgY2FsbHMgaW5mbGF0ZWQgdGVsZWNvbSBjb3N0cyBhbmQgYW5vbnltaXNlZCBudW1iZXJzIGF0dHJhY3RlZCBvcHBvcnR1bmlzdGljIHNjYW1tZXJzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZpbmVtZW50XCIsXG4gICAgdGl0bGU6IFwiVGhlIFJlZmluZWQgU29sdXRpb25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJXZSB0cmFuc2xhdGVkIGV2ZXJ5IHBpbG90IGluc2lnaHQgaW50byBwcm9kdWN0IGFuZCBwbGF0Zm9ybSBpbXByb3ZlbWVudHMgYmVmb3JlIHNjYWxpbmcgbmF0aW9ud2lkZS5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkJpZGlyZWN0aW9uYWwgbWFwcGluZyBsZXQgc2VsbGVycyByZWNvbm5lY3Qgd2l0aG91dCBleHBvc2luZyByZWFsIG51bWJlcnMuXCIsXG4gICAgICBcIkV4dGVuZGVkIG1hcHBpbmcgd2luZG93cyBmcm9tIDIwIHNlY29uZHMgdG8gMTUgbWludXRlcyByZWR1Y2VkIGRyb3BwZWQgY2FsbHMuXCIsXG4gICAgICBcIlZvaWNlIHByb21wdHMgKOKAnFRoaXMgaXMgYSBzZWN1cmUgY2FsbCBmcm9tIERpdmFy4oCm4oCdKSBzZXQgZXhwZWN0YXRpb25zIGFuZCBkZXRlcnJlZCBzY2FtbWVycy5cIixcbiAgICAgIFwiQSBwb29sIG9mIDEwMCBpbnRlcm1lZGlhcnkgbnVtYmVycyBhc3NpZ25lZCBwZXIgYnV5ZXItc2VsbGVyIHBhaXIgcHJldmVudGVkIHJldXNlIGFuZCBibG9ja2luZy5cIixcbiAgICAgIFwiU2VjdXJlIGNhbGwgaGlzdG9yeSwgY2hhdCBpbnRlZ3JhdGlvbiwgYW5kIGFkIG1hbmFnZW1lbnQgbG9ncyBrZXB0IGxlZ2l0aW1hdGUgcmVsYXRpb25zaGlwcyBpbnRhY3QuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImltcGFjdFwiLFxuICAgIHRpdGxlOiBcIkltcGFjdFwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQWZ0ZXIgcm9sbG91dCwgaGFyYXNzbWVudCByZXBvcnRzIGRyb3BwZWQgZHJhbWF0aWNhbGx5IGFuZCBzZWxsZXJzIGZlbHQgc2FmZSBlbm91Z2ggdG8ga2VlcCBsaXN0aW5ncyBsaXZlLiBNb2RlcmF0aW9uIHRlYW1zIHJlY292ZXJlZCBob3VycyBlYWNoIHdlZWsgdGhhdCB3ZXJlIHByZXZpb3VzbHkgc3BlbnQgb24gcmVhY3RpdmUgdGlja2V0cy5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCA2MCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDggd2Vla3Mgb2YgbGF1bmNoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBZCBkZWxldGlvbnNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDI1JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGZXdlciBzZWxsZXJzIGxlYXZpbmcgdGhlIHBsYXRmb3JtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTdXBwb3J0IHRpY2tldHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDE4JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb3JlIHRpbWUgZm9yIHByb2FjdGl2ZSBtb25pdG9yaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgb2J2aW91cyBwcm9ibGVtIGlzIHJhcmVseSB0aGUgcmVhbCBvbmXigJRleHBvc3VyZSwgbm90IHJlcG9ydHMsIHdhcyB0aGUgcm9vdC5cIixcbiAgICAgIFwiVXNlcnMgd2VyZSBhbHJlYWR5IGRlc2lnbmluZyB3b3JrYXJvdW5kczsgb2JzZXJ2aW5nIHRoZW0gcmV2ZWFsZWQgdGhlIHJpZ2h0IGRlZmF1bHRzLlwiLFxuICAgICAgXCJGYWlsdXJlIGlzIHNpZ25hbC4gVGhlIDU2JSBwaWxvdCBmYWlsdXJlIGdlbmVyYXRlZCBhIGJhY2tsb2cgb2YgYWN0aW9uYWJsZSByZXF1aXJlbWVudHMuXCIsXG4gICAgICBcIlBhaXIgcXVhbGl0YXRpdmUgaW5zaWdodCB3aXRoIHJlYWwtdGltZSBtb25pdG9yaW5nIHRvIGtlZXAgYWJ1c2UgdmVjdG9ycyBpbiBjaGVjay5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVmbGVjdGlvblwiLFxuICAgIHRpdGxlOiBcIlJlZmxlY3Rpb25cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlRoaXMgcHJvamVjdCByZWluZm9yY2VkIG15IGJlbGllZiB0aGF0IHNvbHZpbmcgaGFyZCBwcm9ibGVtcyBzdGFydHMgd2l0aCB1bmRlcnN0YW5kaW5nIGJlaGF2aW91ci4gQnkgYmxlbmRpbmcgcmVzZWFyY2gsIGRhdGEsIGFuZCByYXBpZCBpdGVyYXRpb24sIHdlIGJ1aWx0IGEgc2FmZXR5IGxheWVyIHRoYXQgc3RpbGwgcHJvdGVjdHMgbWlsbGlvbnMgb2YgcGVvcGxlIGVhY2ggd2Vlay4gVGhlIGhhcmFzc21lbnQgcHJvYmxlbSBtYXkgbmV2ZXIgZGlzYXBwZWFyIGVudGlyZWx5LCBidXQgRGl2YXIgaXMgc2lnbmlmaWNhbnRseSBzYWZlciBmb3IgdGhlIHVzZXJzIHdobyBuZWVkIGl0IG1vc3QuXCIsXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJUdXJuaW5nIE9uZS1UaW1lIFZpc2l0b3JzIGludG8gTGlmZWxvbmcgQ3VzdG9tZXJzIGF0IFNldGFyZSBBdmFsXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiUHJvZHVjdCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJGZWIgMjAyMSDigJMgSmFuIDIwMjJcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW1wYWN0XCIsIHZhbHVlOiBcIkRvdWJsZWQgcmV0YWluZWQgcmV2ZW51ZSBpbiA2IG1vbnRoc1wiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogcmVzb2x2ZUFzc2V0KHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCksXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNvbnRleHRcIixcbiAgICB0aXRsZTogXCJDb250ZXh0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNldGFyZSBBdmFsIGlzIHRoZSBkaWdpdGFsIGFybSBvZiBJcmFuJ3MgbGFyZ2VzdCB0ZWxlY29tLiBXZSBwb3dlcmVkIGZpbnRlY2ggc2VydmljZXMsIFVTU0QgZXhwZXJpZW5jZXMsIGFuZCBtb2JpbGUgdmFsdWUtYWRkZWQgc2VydmljZXMgbmF0aW9uLXdpZGUuIEdyb3d0aCBoYWQgcGxhdGVhdWVk4oCUb3VyIGZ1bm5lbCBsZWFrZWQgYWZ0ZXIgdGhlIGZpcnN0IHB1cmNoYXNlLlwiLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVXNlciBCYXNlXCIsXG4gICAgICAgIHZhbHVlOiBcIjYwSytcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGFpbHkgc3Vic2NyaWJlcnMgYWNyb3NzIG5hdGlvbndpZGUgc2VydmljZXNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlJldGVudGlvbiBHb2FsXCIsXG4gICAgICAgIHZhbHVlOiBcIngyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvdWJsZSA5MC1kYXkgcmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2hhbGxlbmdlXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJBY3RpdmF0aW9uIGZsb3cgdHJlYXRlZCBldmVyeSBzZWdtZW50IGlkZW50aWNhbGx5LCBpZ25vcmluZyB1c2FnZSBpbnRlbnQuXCIsXG4gICAgICBcIlJlZmVycmFsIGxvb3BzIGV4aXN0ZWQgYnV0IHdlcmUgdW5yZXdhcmRpbmfigJR1c2VycyBjaHVybmVkIGFmdGVyIGZpcnN0IGJlbmVmaXQuXCIsXG4gICAgICBcIlRlYW1zIHNoaXBwZWQgaW4gc2lsb3M7IG5vIHNoYXJlZCBleHBlcmltZW50IGNhZGVuY2Ugb3Igc3VjY2VzcyBtZXRyaWNzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnNpZ2h0c1wiLFxuICAgIHRpdGxlOiBcIldoYXQgV2UgTGVhcm5lZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIG9wZXJhdGVkIGFzIHRoZSBlbmQtdG8tZW5kIHByb2R1Y3QgZGVzaWduZXIsIGJyaWRnaW5nIHByb2R1Y3QsIG1hcmtldGluZywgY3VzdG9tZXIgc3VjY2VzcywgYW5kIGVuZ2luZWVyaW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiUmFuIHdlZWtseSBjby1jcmVhdGlvbiByaXR1YWxzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBvbiBleHBlcmltZW50IHByaW9yaXRpZXMuXCIsXG4gICAgICBcIkVzdGFibGlzaGVkIGRlc2lnbiBzeXN0ZW0gZm91bmRhdGlvbnMgYWRvcHRlZCBieSB0ZWFtcyBiZXlvbmQgZ3Jvd3RoLlwiLFxuICAgICAgXCJTZXQgdXAgYW5hbHl0aWNzIGRhc2hib2FyZHMgdGhhdCBwYWlyZWQgcXVhbGl0YXRpdmUgbm90ZXMgd2l0aCBmdW5uZWwgS1BJcy5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBHcm93dGhcIixcbiAgICAgICAgcm9sZTogXCJTZXRhcmUgQXZhbFwiLFxuICAgICAgICB0ZXh0OiBcIk1hc2loIGhlbHBlZCB1cyBzaGlmdCBmcm9tIG9uZS1vZmYgY2FtcGFpZ25zIHRvIGEgcHJvZHVjdCBtaW5kc2V0LiBUaGUgbGlmZWN5Y2xlIG1vZGVsIGFuZCBleHBlcmltZW50IGNhZGVuY2Ugc3RpbGwgZ3VpZGUgaG93IHdlIGJ1aWxkIHRvZGF5LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSx5REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsa0JBQWtCOzs7O0FDRnRCLElBQU0sdUJBQXVCLEdBQUcsY0FBNkM7QUFBQSxFQUMzRSxNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFLHVCQThJRSxjQTlJRjtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBSSxRQUFRO0FBQUEsSUFDWixTQUFRO0FBQUEsSUFDUixJQUFJO0FBQUEsTUFDRixjQUFjLEdBQUcsTUFBTSxPQUFPLE9BQU87QUFBQSxNQUNyQyxXQUFXO0FBQUEsTUFDWCxJQUFJLEVBQUUsSUFBSSxNQUFNLE9BQU8sUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLFFBQVEsR0FBRztBQUFBLE1BQy9ELElBQUksRUFBRSxJQUFJLE1BQU0sT0FBTyxRQUFRLElBQUksSUFBSSxNQUFNLE9BQU8sUUFBUSxHQUFHO0FBQUEsSUFDakU7QUFBQSxJ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SUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGlCQUFpQjtBQUFBLEVBQzVCLE9BQ0U7QUFBQSxFQUNGLE1BQU07QUFBQSxJQUNKLEVBQUUsT0FBTyxRQUFRLE9BQU8sbUJBQW1CO0FBQUEsSUFDM0MsRUFBRSxPQUFPLFlBQVksT0FBTyxzQkFBcUI7QUFBQSxJQUNqRCxFQUFFLE9BQU8sVUFBVSxPQUFPLHVDQUF1QztBQUFBLEVBQ25FO0FBQUEsRUFDQSxXQUFXLGFBQWEscUNBQXdCO0FBQ2xEO0FBRU8sSUFBTSxpQkFBcUM7QUFBQSxFQUNoRDtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAiZGVidWdJZCI6ICIyOTQ0RjQzNjlEMDA2OTYwNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
