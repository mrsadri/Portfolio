import {
  Pill_default
} from "./chunk-akz6m2hr.js";
import {
  Box_default,
  Card_default,
  Divider_default,
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
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
    component: "section",
    id: section.id,
    spacing: { xs: 2.5, md: 3 },
    sx: { maxWidth: 760, mx: "auto", scrollMarginTop: { xs: 96, md: 140 } },
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
            sx: { lineHeight: 1.65 },
            children: section.summary
          }, undefined, false, undefined, this),
          section.body?.map((paragraph) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "body1",
            color: "text.secondary",
            sx: { lineHeight: 1.7 },
            children: paragraph
          }, paragraph.slice(0, 32), false, undefined, this))
        ]
      }, undefined, true, undefined, this),
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
            backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.08)" : "rgba(98,132,218,0.16)",
            color: theme.palette.mode === "light" ? theme.palette.brand.secondary : "rgba(221, 230, 255, 0.92)"
          }
        }, highlight, false, undefined, this))
      }, undefined, false, undefined, this),
      section.metrics && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
        container: true,
        spacing: 2,
        children: section.metrics.map((metric) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Grid_default, {
          size: { xs: 12, sm: section.metrics.length > 1 ? 6 : 12 },
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Card_default, {
            elevation: 0,
            sx: {
              borderRadius: "18px",
              px: { xs: 2.5, md: 3 },
              py: { xs: 2, md: 2.5 },
              border: `1px solid ${theme.tokens.colors.border}`,
              backgroundColor: theme.palette.mode === "light" ? "rgba(249,251,255,0.9)" : "rgba(14, 22, 38, 0.85)"
            },
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
              spacing: 0.5,
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "h4",
                  children: metric.value
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
                  variant: "subtitle2",
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
      section.quotes && section.quotes.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        spacing: 2,
        children: section.quotes.map((quote) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
          sx: {
            borderRadius: "18px",
            px: { xs: 2.5, md: 3 },
            py: { xs: 2, md: 2.5 },
            backgroundColor: theme.palette.mode === "light" ? "rgba(34,84,255,0.06)" : "rgba(34,84,255,0.16)"
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
        }, `${quote.author}-${quote.text.slice(0, 24)}`, false, undefined, this))
      }, undefined, false, undefined, this),
      section.image && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
        component: "img",
        src: section.image.src,
        alt: section.image.alt,
        sx: {
          width: "100%",
          borderRadius: (theme2) => theme2.tokens.radius.lg,
          boxShadow: theme.palette.mode === "light" ? "0 18px 28px rgba(34,84,255,0.18)" : "0 24px 40px rgba(0,0,0,0.45)"
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider_default, {
        sx: { mt: { xs: 3, md: 4 } }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
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
  stats: [
    {
      value: "2×",
      label: "Retained revenue",
      description: "Achieved within the first 6 months of rollout"
    },
    {
      value: "+60K",
      label: "Daily active users",
      description: "Referral cohort converted to high-intent DAUs"
    }
  ],
  heroImage: resolveAsset(setare_aval_interview_session_default)
};
var setareSections = [
  {
    id: "context",
    title: "Context",
    summary: "Setare Aval is the digital arm of Iran's largest telecom. We powered fintech services, USSD experiences, and mobile value-added services nation-wide. Growth had plateaued—our funnel leaked after the first purchase.",
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
    summary: "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
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
    summary: "I operated as the end-to-end product designer, bridging product, marketing, customer success, and engineering.",
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

//# debugId=779A1786D7BB027264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja1JvdW5kZWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvZGF0YS9jYXNlU3R1ZGllcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTFINy44M2w0Ljg4LTQuODhjLjM5LS4zOS4zOS0xLjAzIDAtMS40MmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBsLTYuNTkgNi41OWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw2LjU5IDYuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwcy4zOS0xLjAyIDAtMS40MUw3LjgzIDEzSDE5Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xXCJcbn0pLCAnQXJyb3dCYWNrUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgRGl2aWRlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuLi91aS9QaWxsXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgaWQ9e3NlY3Rpb24uaWR9XG4gICAgICBzcGFjaW5nPXt7IHhzOiAyLjUsIG1kOiAzIH19XG4gICAgICBzeD17eyBtYXhXaWR0aDogNzYwLCBteDogXCJhdXRvXCIsIHNjcm9sbE1hcmdpblRvcDogeyB4czogOTYsIG1kOiAxNDAgfSB9fVxuICAgID5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAge3NlY3Rpb24uZXllYnJvdyAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImV5ZWJyb3dcIiBjb2xvcj1cImJyYW5kLnNlY29uZGFyeVwiPlxuICAgICAgICAgICAge3NlY3Rpb24uZXllYnJvd31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntzZWN0aW9uLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAge3NlY3Rpb24uc3VtbWFyeSAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNjUgfX0+XG4gICAgICAgICAgICB7c2VjdGlvbi5zdW1tYXJ5fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3Rpb24uYm9keT8ubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGguc2xpY2UoMCwgMzIpfVxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS43IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cblxuICAgICAge3NlY3Rpb24uYnVsbGV0cyAmJiAoXG4gICAgICAgIDxTdGFjayBjb21wb25lbnQ9XCJ1bFwiIHNwYWNpbmc9ezF9IHN4PXt7IHBsOiAyLCBtYjogMCB9fT5cbiAgICAgICAgICB7c2VjdGlvbi5idWxsZXRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxpXCIga2V5PXtwb2ludH0gdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7cG9pbnR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5oaWdobGlnaHRzICYmIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGZsZXhXcmFwPVwid3JhcFwiIHVzZUZsZXhHYXA+XG4gICAgICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCkgPT4gKFxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAga2V5PXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIGxhYmVsPXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDgpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsMTMyLDIxOCwwLjE2KVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyMjEsIDIzMCwgMjU1LCAwLjkyKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLm1ldHJpY3MgJiYgKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ubWV0cmljcy5tYXAoKG1ldHJpYykgPT4gKFxuICAgICAgICAgICAgPEdyaWQgc2l6ZT17eyB4czogMTIsIHNtOiBzZWN0aW9uLm1ldHJpY3MhLmxlbmd0aCA+IDEgPyA2IDogMTIgfX0ga2V5PXttZXRyaWMubGFiZWx9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUudG9rZW5zLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgyNDksMjUxLDI1NSwwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgxNCwgMjIsIDM4LCAwLjg1KVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MC41fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPnttZXRyaWMudmFsdWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAge21ldHJpYy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHttZXRyaWMuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttZXRyaWMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5xdW90ZXMgJiYgc2VjdGlvbi5xdW90ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7c2VjdGlvbi5xdW90ZXMubWFwKChxdW90ZSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Ake3F1b3RlLmF1dGhvcn0tJHtxdW90ZS50ZXh0LnNsaWNlKDAsIDI0KX1gfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgIHB5OiB7IHhzOiAyLCBtZDogMi41IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMzQsODQsMjU1LDAuMDYpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsODQsMjU1LDAuMTYpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBzeD17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG5cbiAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICBhbHQ9e3NlY3Rpb24uaW1hZ2UuYWx0fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICh0aGVtZSkgPT4gdGhlbWUudG9rZW5zLnJhZGl1cy5sZyxcbiAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICA/IFwiMCAxOHB4IDI4cHggcmdiYSgzNCw4NCwyNTUsMC4xOClcIlxuICAgICAgICAgICAgICAgIDogXCIwIDI0cHggNDBweCByZ2JhKDAsMCwwLDAuNDUpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxEaXZpZGVyIHN4PXt7IG10OiB7IHhzOiAzLCBtZDogNCB9IH19IC8+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVNlY3Rpb25DYXJkO1xuXG4iLAogICAgIi8vIEZpbGU6IHNyYy9kYXRhL2Nhc2VTdHVkaWVzLnRzXG4vLyBQdXJwb3NlOiBQcm92aWRlcyBzdHJ1Y3R1cmVkIGNvbnRlbnQgZm9yIHRoZSBEaXZhciBhbmQgU2V0YXJlIEF2YWwgY2FzZSBzdHVkeSBwYWdlcyBpbmNsdWRpbmcgb3ZlcnZpZXdzIGFuZCBzZWN0aW9uIGRldGFpbHMuXG5pbXBvcnQgZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvZGl2YXItc2VjdXJlLWNhbGwtbGlzdGluZy5wbmdcIjtcbmltcG9ydCBzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9zZXRhcmUtYXZhbC1pbnRlcnZpZXctc2Vzc2lvbi5hdmlmXCI7XG5cbmNvbnN0IHJlc29sdmVBc3NldCA9IChhc3NldDogc3RyaW5nKSA9PiBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWY7XG5leHBvcnQgdHlwZSBDYXNlU3R1ZHlTZWN0aW9uID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBleWVicm93Pzogc3RyaW5nO1xuICBzdW1tYXJ5Pzogc3RyaW5nO1xuICBib2R5PzogcmVhZG9ubHkgc3RyaW5nW107XG4gIGJ1bGxldHM/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgaGlnaGxpZ2h0cz86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBxdW90ZXM/OiByZWFkb25seSB7XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgfVtdO1xuICBtZXRyaWNzPzogcmVhZG9ubHkge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgfVtdO1xuICBpbWFnZT86IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgbWV0YTogcmVhZG9ubHkge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfVtdO1xuICBzdGF0cz86IHJlYWRvbmx5IHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIH1bXTtcbiAgaGVyb0ltYWdlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBzdWJ0aXRsZTpcbiAgICBcIldlIHJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIGluc2lkZSBEaXZhcuKAmXMgY2xvdGhpbmcgY2F0ZWdvcnkgYnkgYnVpbGRpbmcgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZSB0aGF0IG5vdyBwcm90ZWN0cyAyLjFNIHdlZWtseSB1c2Vycy5cIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJTZW5pb3IgVVggRGVzaWduZXIgwrcgVHJ1c3QgJiBTYWZldHlcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiTWF5IOKAkyBKdW5lIDIwMjNcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGVhbVwiLCB2YWx1ZTogXCJEZXNpZ24sIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgRW5naW5lZXJpbmcsIFN1cHBvcnRcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHsgdmFsdWU6IFwi4pa8NjAlXCIsIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiIH0sXG4gICAgeyB2YWx1ZTogXCIyLjFNXCIsIGxhYmVsOiBcIldlZWtseSBjYWxsZXJzIHNhZmVndWFyZGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogcmVzb2x2ZUFzc2V0KGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCksXG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJEaXZhciBpcyBJcmFu4oCZcyBsYXJnZXN0IGNsYXNzaWZpZWRzIG1hcmtldHBsYWNlIHdpdGggNTNNKyB3ZWVrbHkgdXNlcnMuIFRydXN0IGFuZCBzYWZldHkgaW5jaWRlbnRzIGNhbiBjb2xsYXBzZSBlbnRpcmUgcmV2ZW51ZSBjYXRlZ29yaWVzIGlmIGxlZnQgdW5jaGVja2VkLlwiLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHsgbGFiZWw6IFwiTWFya2V0cGxhY2Ugc2NhbGVcIiwgdmFsdWU6IFwiNTNNK1wiLCBkZXNjcmlwdGlvbjogXCJXZWVrbHkgYnV5ZXJzICYgc2VsbGVyc1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIlZvaWNlIGRlcGVuZGVuY2VcIiwgdmFsdWU6IFwiMi4xTVwiLCBkZXNjcmlwdGlvbjogXCJDYWxscyBwbGFjZWQgZXZlcnkgd2Vla1wiIH0sXG4gICAgICB7IGxhYmVsOiBcIkFkIGNvbnN1bXB0aW9uXCIsIHZhbHVlOiBcIjZCK1wiLCBkZXNjcmlwdGlvbjogXCJNb250aGx5IGFkIHZpZXdzXCIgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiQ2xvdGhpbmcgbGlzdGluZ3PigJRtb3N0bHkgd29tZW4tbGVk4oCUd2VyZSBoaXQgaGFyZGVzdCBieSBhYnVzZS5cIixcbiAgICAgIFwiTWFudWFsIG1vZGVyYXRpb24gY291bGRu4oCZdCBrZWVwIHVwOyBsaXF1aWRpdHkgYW5kIHRydXN0IHdlcmUgaW4gZnJlZSBmYWxsLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjcmlzaXNcIixcbiAgICB0aXRsZTogXCJUaGUgQ3Jpc2lzXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQ3VzdG9tZXIgY2FyZSBjZW50cmVzIHdlcmUgZmxvb2RlZCB3aXRoIGhhcmFzc21lbnQgcmVwb3J0cy4gU2VsbGVycyBkZWxldGVkIGxpc3RpbmdzIG9yIGNodXJuZWQgZW50aXJlbHksIGZlYXJpbmcgcmVwZWF0IGluY2lkZW50cy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkhhcmFzc2VycyBzY3JhcGVkIHBob25lIG51bWJlcnMgZnJvbSBhZHMgYW5kIGNpcmN1bGF0ZWQgdGhlbSBpbiBwcml2YXRlIFRlbGVncmFtIGdyb3Vwcy5cIixcbiAgICAgIFwiRXZlbiBhZnRlciB2aWN0aW1zIGRlbGV0ZWQgbGlzdGluZ3MsIHRoZSBjYWxscyBjb250aW51ZWQgYmVjYXVzZSBudW1iZXJzIHdlcmUgYWxyZWFkeSBleHBvc2VkLlwiLFxuICAgICAgXCJXaXRob3V0IGludGVydmVudGlvbiwgRGl2YXIgcmlza2VkIGxvc2luZyBhIGNhdGVnb3J5IHRoYXQgYW5jaG9yZWQgZGFpbHkgZW5nYWdlbWVudC5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiTGF5bGEsIDMyXCIsXG4gICAgICAgIHJvbGU6IFwiUHJvZmVzc2lvbmFsIGFydGlzdCBzZWxsaW5nIGJlc3Bva2UgY2xvdGhpbmdcIixcbiAgICAgICAgdGV4dDogXCJJdCB3YXMgaW5mdXJpYXRpbmcuIEkgdG9vayBkb3duIG15IERpdmFyIGFkIGhvcGluZyB0byBzdG9wIHRoZSBjYWxscywgYnV0IHRoZXkga2VwdCBjb21pbmcuIFNvbWVvbmUgdG9sZCBtZSBteSBudW1iZXIgd2FzIGluIGEgVGVsZWdyYW0gZ3JvdXAuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnZlc3RpZ2F0aW9uXCIsXG4gICAgdGl0bGU6IFwiRmluZGluZyB0aGUgUmVhbCBQcm9ibGVtXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSSBpbnRlcnZpZXdlZCBoYXJhc3NlZCBzZWxsZXJzIGFuZCBhbmFseXNlZCBiZWhhdmlvdXJhbCBkYXRhIHRvIHVuZGVyc3RhbmQgaG93IGV4cG9zdXJlIHNjYWxlZC4gVGhlIGJyZWFrdGhyb3VnaCBjYW1lIGZyb20gY29ubmVjdGluZyBxdWFsaXRhdGl2ZSBzdG9yaWVzIHRvIHF1YW50aXRhdGl2ZSBzaWduYWxzLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiUGF0dGVybnMgZW1lcmdlZCBxdWlja2x5OiBoYXJhc3NlcnMgc2F2ZWQgcG9zdGVkIG51bWJlcnMsIGNyb3NzLXJlZmVyZW5jZWQgdGhlbSBvbiBXaGF0c0FwcCBhbmQgSW5zdGFncmFtLCBhbmQgb25seSB0aGVuIGJlZ2FuIHRoZSBhYnVzZS4gRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBzdG9wcGVkIHNoYXJpbmcgbnVtYmVycyBhbmQgcmVsaWVkIG9uIGluLWFwcCBjaGF04oCUbmV3IHNlbGxlcnMgd2VyZSB0aGUgb25lcyBsZWZ0IGV4cG9zZWQuXCIsXG4gICAgICBcIlNhcmHigJlzIG1lbnRpb24gb2YgYSBjYWxsZXIgcmVmZXJlbmNpbmcgaGVyIGV5ZSBjb2xvciBjb25maXJtZWQgb3VyIGh5cG90aGVzaXM6IHNvY2lhbCBtZWRpYSBicmVhZGNydW1icyBtYWRlIGhhcmFzc21lbnQgcGVyc29uYWwgYW5kIGZyaWdodGVuaW5nLlwiLFxuICAgICAgXCJEYXRhIGFuYWx5c2lzIGJhY2tlZCB0aGUgcXVhbGl0YXRpdmUgd29yay4gVXNlcnMgd2hvc2UgcGhvbmUgbnVtYmVycyB3ZXJlIGxpbmtlZCB0byBwdWJsaWMgc29jaWFsIHByb2ZpbGVzIHJlcG9ydGVkIGhhcmFzc21lbnQgZHJhbWF0aWNhbGx5IG1vcmUgb2Z0ZW4uIFRob3NlIHdobyBzdHVjayB0byBpbi1hcHAgY2hhdCByYXJlbHkgZGlkLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJTYXJhLCAyNlwiLFxuICAgICAgICByb2xlOiBcIkZhc2hpb24gcmV0YWlsIHdvcmtlclwiLFxuICAgICAgICB0ZXh0OiBcIk9uZSBjYWxsZXIga25ldyBteSBleWUgY29sb3IuIFRoZXkgY2xlYXJseSBmb3VuZCBteSBJbnN0YWdyYW0gdGhyb3VnaCB0aGUgcGhvbmUgbnVtYmVyIG9uIERpdmFyLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlphaHJhLCAyOFwiLFxuICAgICAgICByb2xlOiBcIkZyZWVsYW5jZSBncmFwaGljIGRlc2lnbmVyXCIsXG4gICAgICAgIHRleHQ6IFwiSSBzdG9wcGVkIGxpc3RpbmcgbXkgcGhvbmUgbnVtYmVyLiBJdCBmZWx0IHVucHJvZmVzc2lvbmFsLCBidXQgaXQgd2FzIHRoZSBvbmx5IHdheSB0byBhdm9pZCBoYXJhc3NtZW50LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodHM6IFtcbiAgICAgIFwiUHVibGljIHBob25lIG51bWJlcnMgd2VyZSB0aGUgcm9vdCBjYXVzZSBvZiBleHBvc3VyZSwgbm90IHRoZSBudW1iZXIgb2YgcmVwb3J0cy5cIixcbiAgICAgIFwiRXhwZXJpZW5jZWQgc2VsbGVycyBoYWQgYWxyZWFkeSBhZGFwdGVkIGJ5IHVzaW5nIGluLWFwcCBjaGF0OyBuZXcgc2VsbGVycyBuZWVkZWQgcHJvdGVjdGl2ZSBkZWZhdWx0cy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3RyYXRlZ3lcIixcbiAgICB0aXRsZTogXCJUaGUgU29sdXRpb24gSm91cm5leVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHJlZnJhbWVkIHN1Y2Nlc3MgZnJvbSDigJxyZWR1Y2UgcmVwb3J0c+KAnSB0byDigJxyZWR1Y2UgZXhwb3N1cmUu4oCdIFdpdGggVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBTdXBwb3J0LCBhbmQgRGF0YSwgd2UgZXZhbHVhdGVkIGV2ZXJ5IHBhdGggYW5kIHN0cmVzcy10ZXN0ZWQgZWRnZSBjYXNlcyBiZWZvcmUgY29tbWl0dGluZy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkVkdWNhdGluZyB1c2VycyBhYm91dCBoYXJhc3NlciB0YWN0aWNzIHdvdWxkIGVyb2RlIHRydXN0IGFuZCBkaXNjb3VyYWdlIGxpc3RpbmdzLlwiLFxuICAgICAgXCJGdWxsIFZvSVAgd2FzIGNvc3QtcHJvaGliaXRpdmUsIGZyYWdpbGUgYWNyb3NzIGRldmljZSB0eXBlcywgYW5kIGluYWNjZXNzaWJsZSB0byA0NyUgb2YgbGVnYWN5IEFuZHJvaWQgdXNlcnMuXCIsXG4gICAgICBcIlZvaWNlIHJlbGF5IHdpdGggaW50ZXJtZWRpYXJ5IG51bWJlcnMgcHJvdGVjdGVkIHNlbGxlcnMgd2l0aG91dCBjaGFuZ2luZyBwdXJjaGFzZSBiZWhhdmlvdXLigJR0aGlzIGJlY2FtZSB0aGUgbm9ydGggc3Rhci5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGVzdGluZ1wiLFxuICAgIHRpdGxlOiBcIlRlc3RpbmcgJiBMZWFybmluZyBmcm9tIEZhaWx1cmVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBIDMtZGF5IHBpbG90IGluIHRoZSBjbG90aGluZyBjYXRlZ29yeSByZXN1bHRlZCBpbiBhIDU2JSBjYWxsIGZhaWx1cmUgcmF0ZS4gSW5zdGVhZCBvZiByZXZlcnRpbmcsIHdlIHRyZWF0ZWQgZXZlcnkgZmFpbHVyZSBhcyBhIGRlc2lnbiByZXF1aXJlbWVudC5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXIgYmVoYXZpb3VyOiBzZWxsZXJzIGJsb2NrZWQgdW5mYW1pbGlhciBudW1iZXJzOyBidXllcnMgcmVkaWFsbGVkIGZyb20gY2FsbCBsb2dzOyByZXBlYXQgY29udmVyc2F0aW9ucyBicm9rZSBtYXBwaW5nIHdpbmRvd3MuXCIsXG4gICAgICBcIlRlY2huaWNhbCBsb2FkOiBjYWxsIHZvbHVtZSBzcGlrZWQgYmV5b25kIGZvcmVjYXN0cyBhbmQgbnVtYmVyIHBvb2xzIHdlcmUgZXhoYXVzdGVkLlwiLFxuICAgICAgXCJCdXNpbmVzcyByaXNrOiBsb25nZXIgY2FsbHMgaW5mbGF0ZWQgdGVsZWNvbSBjb3N0cyBhbmQgYW5vbnltaXNlZCBudW1iZXJzIGF0dHJhY3RlZCBvcHBvcnR1bmlzdGljIHNjYW1tZXJzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZpbmVtZW50XCIsXG4gICAgdGl0bGU6IFwiVGhlIFJlZmluZWQgU29sdXRpb25cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJXZSB0cmFuc2xhdGVkIGV2ZXJ5IHBpbG90IGluc2lnaHQgaW50byBwcm9kdWN0IGFuZCBwbGF0Zm9ybSBpbXByb3ZlbWVudHMgYmVmb3JlIHNjYWxpbmcgbmF0aW9ud2lkZS5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkJpZGlyZWN0aW9uYWwgbWFwcGluZyBsZXQgc2VsbGVycyByZWNvbm5lY3Qgd2l0aG91dCBleHBvc2luZyByZWFsIG51bWJlcnMuXCIsXG4gICAgICBcIkV4dGVuZGVkIG1hcHBpbmcgd2luZG93cyBmcm9tIDIwIHNlY29uZHMgdG8gMTUgbWludXRlcyByZWR1Y2VkIGRyb3BwZWQgY2FsbHMuXCIsXG4gICAgICBcIlZvaWNlIHByb21wdHMgKOKAnFRoaXMgaXMgYSBzZWN1cmUgY2FsbCBmcm9tIERpdmFy4oCm4oCdKSBzZXQgZXhwZWN0YXRpb25zIGFuZCBkZXRlcnJlZCBzY2FtbWVycy5cIixcbiAgICAgIFwiQSBwb29sIG9mIDEwMCBpbnRlcm1lZGlhcnkgbnVtYmVycyBhc3NpZ25lZCBwZXIgYnV5ZXItc2VsbGVyIHBhaXIgcHJldmVudGVkIHJldXNlIGFuZCBibG9ja2luZy5cIixcbiAgICAgIFwiU2VjdXJlIGNhbGwgaGlzdG9yeSwgY2hhdCBpbnRlZ3JhdGlvbiwgYW5kIGFkIG1hbmFnZW1lbnQgbG9ncyBrZXB0IGxlZ2l0aW1hdGUgcmVsYXRpb25zaGlwcyBpbnRhY3QuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImltcGFjdFwiLFxuICAgIHRpdGxlOiBcIkltcGFjdFwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQWZ0ZXIgcm9sbG91dCwgaGFyYXNzbWVudCByZXBvcnRzIGRyb3BwZWQgZHJhbWF0aWNhbGx5IGFuZCBzZWxsZXJzIGZlbHQgc2FmZSBlbm91Z2ggdG8ga2VlcCBsaXN0aW5ncyBsaXZlLiBNb2RlcmF0aW9uIHRlYW1zIHJlY292ZXJlZCBob3VycyBlYWNoIHdlZWsgdGhhdCB3ZXJlIHByZXZpb3VzbHkgc3BlbnQgb24gcmVhY3RpdmUgdGlja2V0cy5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCA2MCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDggd2Vla3Mgb2YgbGF1bmNoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBZCBkZWxldGlvbnNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDI1JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGZXdlciBzZWxsZXJzIGxlYXZpbmcgdGhlIHBsYXRmb3JtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTdXBwb3J0IHRpY2tldHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDE4JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb3JlIHRpbWUgZm9yIHByb2FjdGl2ZSBtb25pdG9yaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJUaGUgb2J2aW91cyBwcm9ibGVtIGlzIHJhcmVseSB0aGUgcmVhbCBvbmXigJRleHBvc3VyZSwgbm90IHJlcG9ydHMsIHdhcyB0aGUgcm9vdC5cIixcbiAgICAgIFwiVXNlcnMgd2VyZSBhbHJlYWR5IGRlc2lnbmluZyB3b3JrYXJvdW5kczsgb2JzZXJ2aW5nIHRoZW0gcmV2ZWFsZWQgdGhlIHJpZ2h0IGRlZmF1bHRzLlwiLFxuICAgICAgXCJGYWlsdXJlIGlzIHNpZ25hbC4gVGhlIDU2JSBwaWxvdCBmYWlsdXJlIGdlbmVyYXRlZCBhIGJhY2tsb2cgb2YgYWN0aW9uYWJsZSByZXF1aXJlbWVudHMuXCIsXG4gICAgICBcIlBhaXIgcXVhbGl0YXRpdmUgaW5zaWdodCB3aXRoIHJlYWwtdGltZSBtb25pdG9yaW5nIHRvIGtlZXAgYWJ1c2UgdmVjdG9ycyBpbiBjaGVjay5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVmbGVjdGlvblwiLFxuICAgIHRpdGxlOiBcIlJlZmxlY3Rpb25cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlRoaXMgcHJvamVjdCByZWluZm9yY2VkIG15IGJlbGllZiB0aGF0IHNvbHZpbmcgaGFyZCBwcm9ibGVtcyBzdGFydHMgd2l0aCB1bmRlcnN0YW5kaW5nIGJlaGF2aW91ci4gQnkgYmxlbmRpbmcgcmVzZWFyY2gsIGRhdGEsIGFuZCByYXBpZCBpdGVyYXRpb24sIHdlIGJ1aWx0IGEgc2FmZXR5IGxheWVyIHRoYXQgc3RpbGwgcHJvdGVjdHMgbWlsbGlvbnMgb2YgcGVvcGxlIGVhY2ggd2Vlay4gVGhlIGhhcmFzc21lbnQgcHJvYmxlbSBtYXkgbmV2ZXIgZGlzYXBwZWFyIGVudGlyZWx5LCBidXQgRGl2YXIgaXMgc2lnbmlmaWNhbnRseSBzYWZlciBmb3IgdGhlIHVzZXJzIHdobyBuZWVkIGl0IG1vc3QuXCIsXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVPdmVydmlldzogQ2FzZVN0dWR5T3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVycyBhdCBTZXRhcmUgQXZhbFwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlByb2R1Y3QgRGVzaWduZXJcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiRmViIDIwMjEg4oCTIEphbiAyMDIyXCIgfSxcbiAgICB7IGxhYmVsOiBcIkltcGFjdFwiLCB2YWx1ZTogXCJEb3VibGVkIHJldGFpbmVkIHJldmVudWUgaW4gNiBtb250aHNcIiB9LFxuICBdLFxuICBzdGF0czogW1xuICAgIHtcbiAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgbGFiZWw6IFwiUmV0YWluZWQgcmV2ZW51ZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWNoaWV2ZWQgd2l0aGluIHRoZSBmaXJzdCA2IG1vbnRocyBvZiByb2xsb3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICBsYWJlbDogXCJEYWlseSBhY3RpdmUgdXNlcnNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIGNvaG9ydCBjb252ZXJ0ZWQgdG8gaGlnaC1pbnRlbnQgREFVc1wiLFxuICAgIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogcmVzb2x2ZUFzc2V0KHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCksXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNvbnRleHRcIixcbiAgICB0aXRsZTogXCJDb250ZXh0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiU2V0YXJlIEF2YWwgaXMgdGhlIGRpZ2l0YWwgYXJtIG9mIElyYW4ncyBsYXJnZXN0IHRlbGVjb20uIFdlIHBvd2VyZWQgZmludGVjaCBzZXJ2aWNlcywgVVNTRCBleHBlcmllbmNlcywgYW5kIG1vYmlsZSB2YWx1ZS1hZGRlZCBzZXJ2aWNlcyBuYXRpb24td2lkZS4gR3Jvd3RoIGhhZCBwbGF0ZWF1ZWTigJRvdXIgZnVubmVsIGxlYWtlZCBhZnRlciB0aGUgZmlyc3QgcHVyY2hhc2UuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJVc2VyIEJhc2VcIixcbiAgICAgICAgdmFsdWU6IFwiNjBLK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEYWlseSBzdWJzY3JpYmVycyBhY3Jvc3MgbmF0aW9ud2lkZSBzZXJ2aWNlc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0ZW50aW9uIEdvYWxcIixcbiAgICAgICAgdmFsdWU6IFwieDJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRG91YmxlIDkwLWRheSByZXRhaW5lZCByZXZlbnVlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjaGFsbGVuZ2VcIixcbiAgICB0aXRsZTogXCJDaGFsbGVuZ2VcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkFjdGl2YXRpb24gZmxvdyB0cmVhdGVkIGV2ZXJ5IHNlZ21lbnQgaWRlbnRpY2FsbHksIGlnbm9yaW5nIHVzYWdlIGludGVudC5cIixcbiAgICAgIFwiUmVmZXJyYWwgbG9vcHMgZXhpc3RlZCBidXQgd2VyZSB1bnJld2FyZGluZ+KAlHVzZXJzIGNodXJuZWQgYWZ0ZXIgZmlyc3QgYmVuZWZpdC5cIixcbiAgICAgIFwiVGVhbXMgc2hpcHBlZCBpbiBzaWxvczsgbm8gc2hhcmVkIGV4cGVyaW1lbnQgY2FkZW5jZSBvciBzdWNjZXNzIG1ldHJpY3MuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImluc2lnaHRzXCIsXG4gICAgdGl0bGU6IFwiV2hhdCBXZSBMZWFybmVkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVGhyb3VnaCBpbnRlcnZpZXdzLCBmdW5uZWwgYW5hbHl0aWNzLCBhbmQgc2VydmljZS1ibHVlcHJpbnQgbWFwcGluZywgd2Ugc3VyZmFjZWQgdGhlIHVuZGVybHlpbmcgYmxvY2tlcnMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJVc2VycyB3YW50ZWQgdGFuZ2libGUgbWlsZXN0b25lc+KAlHdpdGhvdXQgdGhlbSwgdGhlIHByb2R1Y3QgZmVsdCB0cmFuc2FjdGlvbmFsLlwiLFxuICAgICAgXCJIaWdoLWludGVudCBjb2hvcnRzIHJlc3BvbmRlZCB0byBlZHVjYXRpb25hbCBudWRnZXMgbW9yZSB0aGFuIHByb21vdGlvbnMuXCIsXG4gICAgICBcIkludGVybmFsIHRlYW1zIGxhY2tlZCB2aXNpYmlsaXR5IGludG8gZXhwZXJpbWVudCBvdXRjb21lcywgc2xvd2luZyBpdGVyYXRpb24uXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNvbHV0aW9uXCIsXG4gICAgdGl0bGU6IFwiRXhwZXJpZW5jZSBSZS1BcmNoaXRlY3R1cmVcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIkludHJvZHVjZWQgbGlmZWN5Y2xlIG1lc3NhZ2luZyB0YWlsb3JlZCB0byBpbnRlbnQgKGV4cGxvcmVycywgZWFybmVycywgbG95YWxpc3RzKS5cIixcbiAgICAgIFwiU2hpcHBlZCBhIGdhbWlmaWVkIHJlZmVycmFsIGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVkIHByb2dyZXNzIGFuZCB1bmxvY2tlZCB0aWVyZWQgcmV3YXJkcy5cIixcbiAgICAgIFwiU3Rvb2QgdXAgYSBjcm9zcy1mdW5jdGlvbmFsIGdyb3d0aCBndWlsZCB3aXRoIGEgMi13ZWVrIGV4cGVyaW1lbnQgY2FkZW5jZS5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0YWluZWQgUmV2ZW51ZVwiLFxuICAgICAgICB2YWx1ZTogXCIyw5dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDYgbW9udGhzIG9mIHN0YWdlZCByb2xsb3V0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEYWlseSBBY3RpdmUgVXNlcnNcIixcbiAgICAgICAgdmFsdWU6IFwiKzYwS1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWZlcnJhbCBwcm9ncmFtIHBhcnRpY2lwYW50cyBiZWNhbWUgZGFpbHkgYWN0aXZlc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicm9sZVwiLFxuICAgIHRpdGxlOiBcIk15IFJvbGVcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIG9wZXJhdGVkIGFzIHRoZSBlbmQtdG8tZW5kIHByb2R1Y3QgZGVzaWduZXIsIGJyaWRnaW5nIHByb2R1Y3QsIG1hcmtldGluZywgY3VzdG9tZXIgc3VjY2VzcywgYW5kIGVuZ2luZWVyaW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiUmFuIHdlZWtseSBjby1jcmVhdGlvbiByaXR1YWxzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBvbiBleHBlcmltZW50IHByaW9yaXRpZXMuXCIsXG4gICAgICBcIkVzdGFibGlzaGVkIGRlc2lnbiBzeXN0ZW0gZm91bmRhdGlvbnMgYWRvcHRlZCBieSB0ZWFtcyBiZXlvbmQgZ3Jvd3RoLlwiLFxuICAgICAgXCJTZXQgdXAgYW5hbHl0aWNzIGRhc2hib2FyZHMgdGhhdCBwYWlyZWQgcXVhbGl0YXRpdmUgbm90ZXMgd2l0aCBmdW5uZWwgS1BJcy5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBHcm93dGhcIixcbiAgICAgICAgcm9sZTogXCJTZXRhcmUgQXZhbFwiLFxuICAgICAgICB0ZXh0OiBcIk1hc2loIGhlbHBlZCB1cyBzaGlmdCBmcm9tIG9uZS1vZmYgY2FtcGFpZ25zIHRvIGEgcHJvZHVjdCBtaW5kc2V0LiBUaGUgbGlmZWN5Y2xlIG1vZGVsIGFuZCBleHBlcmltZW50IGNhZGVuY2Ugc3RpbGwgZ3VpZGUgaG93IHdlIGJ1aWxkIHRvZGF5LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFIQTtBQUlBLElBQWUseURBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLGtCQUFrQjs7OztBQ0Z0QixJQUFNLHVCQUF1QixHQUFHLGNBQTZDO0FBQUEsRUFDM0UsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUV2Qix1QkFDRSx1QkE2SUUsZUE3SUY7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLElBQUksUUFBUTtBQUFBLElBQ1osU0FBUyxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxJQUMxQixJQUFJLEVBQUUsVUFBVSxLQUFLLElBQUksUUFB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O0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0saUJBQW9DO0FBQUEsRUFDL0MsT0FDRTtBQUFBLEVBQ0YsTUFBTTtBQUFBLElBQ0osRUFBRSxPQUFPLFFBQVEsT0FBTyxtQkFBbUI7QUFBQSxJQUMzQyxFQUFFLE9BQU8sWUFBWSxPQUFPLHNCQUFxQjtBQUFBLElBQ2pELEVBQUUsT0FBTyxVQUFVLE9BQU8sdUNBQXVDO0FBQUEsRUFDbkU7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVyxhQUFhLHFDQUF3QjtBQUNsRDtBQUVPLElBQU0saUJBQXFDO0FBQUEsRUFDaEQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUNFO0FBQUEsSUFDRixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgImRlYnVnSWQiOiAiNzc5QTE3ODZEN0JCMDI3MjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
