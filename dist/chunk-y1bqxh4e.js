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
    sx: { maxWidth: 760, mx: "auto" },
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

//# debugId=0F53582ABB7AC27164756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja1JvdW5kZWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvZGF0YS9jYXNlU3R1ZGllcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTFINy44M2w0Ljg4LTQuODhjLjM5LS4zOS4zOS0xLjAzIDAtMS40MmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBsLTYuNTkgNi41OWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw2LjU5IDYuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwcy4zOS0xLjAyIDAtMS40MUw3LjgzIDEzSDE5Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xXCJcbn0pLCAnQXJyb3dCYWNrUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgRGl2aWRlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuLi91aS9QaWxsXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgaWQ9e3NlY3Rpb24uaWR9XG4gICAgICBzcGFjaW5nPXt7IHhzOiAyLjUsIG1kOiAzIH19XG4gICAgICBzeD17eyBtYXhXaWR0aDogNzYwLCBteDogXCJhdXRvXCIgfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgIHtzZWN0aW9uLmV5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uLmV5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57c2VjdGlvbi50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIHtzZWN0aW9uLnN1bW1hcnkgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAge3NlY3Rpb24uc3VtbWFyeX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWN0aW9uLmJvZHk/Lm1hcCgocGFyYWdyYXBoKSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxfSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAge3NlY3Rpb24uYnVsbGV0cy5tYXAoKHBvaW50KSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17cG9pbnR9IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgcHg6IHsgeHM6IDIuNSwgbWQ6IDMgfSxcbiAgICAgICAgICAgICAgICBweTogeyB4czogMiwgbWQ6IDIuNSB9LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA2KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDM0LDg0LDI1NSwwLjE2KVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiLCBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICDigJx7cXVvdGUudGV4dH3igJ1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7cXVvdGUuYXV0aG9yfSDigJQge3F1b3RlLnJvbGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5pbWFnZSAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgIHNyYz17c2VjdGlvbi5pbWFnZS5zcmN9XG4gICAgICAgICAgYWx0PXtzZWN0aW9uLmltYWdlLmFsdH1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAodGhlbWUpID0+IHRoZW1lLnRva2Vucy5yYWRpdXMubGcsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9jYXNlU3R1ZGllcy50c1xuLy8gUHVycG9zZTogUHJvdmlkZXMgc3RydWN0dXJlZCBjb250ZW50IGZvciB0aGUgRGl2YXIgYW5kIFNldGFyZSBBdmFsIGNhc2Ugc3R1ZHkgcGFnZXMgaW5jbHVkaW5nIG92ZXJ2aWV3cyBhbmQgc2VjdGlvbiBkZXRhaWxzLlxuaW1wb3J0IGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2RpdmFyLXNlY3VyZS1jYWxsLWxpc3RpbmcucG5nXCI7XG5pbXBvcnQgc2V0YXJlQXZhbEludGVydmlld0Fzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvc2V0YXJlLWF2YWwtaW50ZXJ2aWV3LXNlc3Npb24uYXZpZlwiO1xuXG5jb25zdCByZXNvbHZlQXNzZXQgPSAoYXNzZXQ6IHN0cmluZykgPT4gbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xuZXhwb3J0IHR5cGUgQ2FzZVN0dWR5U2VjdGlvbiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZXllYnJvdz86IHN0cmluZztcbiAgc3VtbWFyeT86IHN0cmluZztcbiAgYm9keT86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBidWxsZXRzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIGhpZ2hsaWdodHM/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgcXVvdGVzPzogcmVhZG9ubHkge1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIHJvbGU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH1bXTtcbiAgbWV0cmljcz86IHJlYWRvbmx5IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIH1bXTtcbiAgaW1hZ2U/OiB7XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgYWx0OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBDYXNlU3R1ZHlPdmVydmlldyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIG1ldGE6IHJlYWRvbmx5IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gIH1bXTtcbiAgc3RhdHM/OiByZWFkb25seSB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICB9W107XG4gIGhlcm9JbWFnZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpdmFyT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIlNvbHZpbmcgSGFyYXNzbWVudCBhdCBTY2FsZTogSG93IEkgUHJvdGVjdGVkIDIuMU0gVXNlcnMgb24gSXJhbidzIExhcmdlc3QgTWFya2V0cGxhY2VcIixcbiAgc3VidGl0bGU6XG4gICAgXCJXZSByZWR1Y2VkIGhhcmFzc21lbnQgaW5jaWRlbnRzIGJ5IDYwJSBpbnNpZGUgRGl2YXLigJlzIGNsb3RoaW5nIGNhdGVnb3J5IGJ5IGJ1aWxkaW5nIGEgcHJpdmFjeS1maXJzdCBjYWxsaW5nIGV4cGVyaWVuY2UgdGhhdCBub3cgcHJvdGVjdHMgMi4xTSB3ZWVrbHkgdXNlcnMuXCIsXG4gIG1ldGE6IFtcbiAgICB7IGxhYmVsOiBcIlJvbGVcIiwgdmFsdWU6IFwiU2VuaW9yIFVYIERlc2lnbmVyIMK3IFRydXN0ICYgU2FmZXR5XCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIk1heSDigJMgSnVuZSAyMDIzXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRlYW1cIiwgdmFsdWU6IFwiRGVzaWduLCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIEVuZ2luZWVyaW5nLCBTdXBwb3J0XCIgfSxcbiAgXSxcbiAgc3RhdHM6IFtcbiAgICB7IHZhbHVlOiBcIuKWvDYwJVwiLCBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIiB9LFxuICAgIHsgdmFsdWU6IFwiMi4xTVwiLCBsYWJlbDogXCJXZWVrbHkgY2FsbGVycyBzYWZlZ3VhcmRlZFwiIH0sXG4gICAgeyB2YWx1ZTogXCLilrwxOCVcIiwgbGFiZWw6IFwiU2FmZXR5IHRpY2tldCB2b2x1bWVcIiB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IHJlc29sdmVBc3NldChkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQpLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpdmFyU2VjdGlvbnM6IENhc2VTdHVkeVNlY3Rpb25bXSA9IFtcbiAge1xuICAgIGlkOiBcImNvbnRleHRcIixcbiAgICB0aXRsZTogXCJDb250ZXh0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiRGl2YXIgaXMgSXJhbuKAmXMgbGFyZ2VzdCBjbGFzc2lmaWVkcyBtYXJrZXRwbGFjZSB3aXRoIDUzTSsgd2Vla2x5IHVzZXJzLiBUcnVzdCBhbmQgc2FmZXR5IGluY2lkZW50cyBjYW4gY29sbGFwc2UgZW50aXJlIHJldmVudWUgY2F0ZWdvcmllcyBpZiBsZWZ0IHVuY2hlY2tlZC5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7IGxhYmVsOiBcIk1hcmtldHBsYWNlIHNjYWxlXCIsIHZhbHVlOiBcIjUzTStcIiwgZGVzY3JpcHRpb246IFwiV2Vla2x5IGJ1eWVycyAmIHNlbGxlcnNcIiB9LFxuICAgICAgeyBsYWJlbDogXCJWb2ljZSBkZXBlbmRlbmNlXCIsIHZhbHVlOiBcIjIuMU1cIiwgZGVzY3JpcHRpb246IFwiQ2FsbHMgcGxhY2VkIGV2ZXJ5IHdlZWtcIiB9LFxuICAgICAgeyBsYWJlbDogXCJBZCBjb25zdW1wdGlvblwiLCB2YWx1ZTogXCI2QitcIiwgZGVzY3JpcHRpb246IFwiTW9udGhseSBhZCB2aWV3c1wiIH0sXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIkNsb3RoaW5nIGxpc3Rpbmdz4oCUbW9zdGx5IHdvbWVuLWxlZOKAlHdlcmUgaGl0IGhhcmRlc3QgYnkgYWJ1c2UuXCIsXG4gICAgICBcIk1hbnVhbCBtb2RlcmF0aW9uIGNvdWxkbuKAmXQga2VlcCB1cDsgbGlxdWlkaXR5IGFuZCB0cnVzdCB3ZXJlIGluIGZyZWUgZmFsbC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY3Jpc2lzXCIsXG4gICAgdGl0bGU6IFwiVGhlIENyaXNpc1wiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkN1c3RvbWVyIGNhcmUgY2VudHJlcyB3ZXJlIGZsb29kZWQgd2l0aCBoYXJhc3NtZW50IHJlcG9ydHMuIFNlbGxlcnMgZGVsZXRlZCBsaXN0aW5ncyBvciBjaHVybmVkIGVudGlyZWx5LCBmZWFyaW5nIHJlcGVhdCBpbmNpZGVudHMuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJIYXJhc3NlcnMgc2NyYXBlZCBwaG9uZSBudW1iZXJzIGZyb20gYWRzIGFuZCBjaXJjdWxhdGVkIHRoZW0gaW4gcHJpdmF0ZSBUZWxlZ3JhbSBncm91cHMuXCIsXG4gICAgICBcIkV2ZW4gYWZ0ZXIgdmljdGltcyBkZWxldGVkIGxpc3RpbmdzLCB0aGUgY2FsbHMgY29udGludWVkIGJlY2F1c2UgbnVtYmVycyB3ZXJlIGFscmVhZHkgZXhwb3NlZC5cIixcbiAgICAgIFwiV2l0aG91dCBpbnRlcnZlbnRpb24sIERpdmFyIHJpc2tlZCBsb3NpbmcgYSBjYXRlZ29yeSB0aGF0IGFuY2hvcmVkIGRhaWx5IGVuZ2FnZW1lbnQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkxheWxhLCAzMlwiLFxuICAgICAgICByb2xlOiBcIlByb2Zlc3Npb25hbCBhcnRpc3Qgc2VsbGluZyBiZXNwb2tlIGNsb3RoaW5nXCIsXG4gICAgICAgIHRleHQ6IFwiSXQgd2FzIGluZnVyaWF0aW5nLiBJIHRvb2sgZG93biBteSBEaXZhciBhZCBob3BpbmcgdG8gc3RvcCB0aGUgY2FsbHMsIGJ1dCB0aGV5IGtlcHQgY29taW5nLiBTb21lb25lIHRvbGQgbWUgbXkgbnVtYmVyIHdhcyBpbiBhIFRlbGVncmFtIGdyb3VwLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW52ZXN0aWdhdGlvblwiLFxuICAgIHRpdGxlOiBcIkZpbmRpbmcgdGhlIFJlYWwgUHJvYmxlbVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgaW50ZXJ2aWV3ZWQgaGFyYXNzZWQgc2VsbGVycyBhbmQgYW5hbHlzZWQgYmVoYXZpb3VyYWwgZGF0YSB0byB1bmRlcnN0YW5kIGhvdyBleHBvc3VyZSBzY2FsZWQuIFRoZSBicmVha3Rocm91Z2ggY2FtZSBmcm9tIGNvbm5lY3RpbmcgcXVhbGl0YXRpdmUgc3RvcmllcyB0byBxdWFudGl0YXRpdmUgc2lnbmFscy5cIixcbiAgICBib2R5OiBbXG4gICAgICBcIlBhdHRlcm5zIGVtZXJnZWQgcXVpY2tseTogaGFyYXNzZXJzIHNhdmVkIHBvc3RlZCBudW1iZXJzLCBjcm9zcy1yZWZlcmVuY2VkIHRoZW0gb24gV2hhdHNBcHAgYW5kIEluc3RhZ3JhbSwgYW5kIG9ubHkgdGhlbiBiZWdhbiB0aGUgYWJ1c2UuIEV4cGVyaWVuY2VkIHNlbGxlcnMgaGFkIGFscmVhZHkgc3RvcHBlZCBzaGFyaW5nIG51bWJlcnMgYW5kIHJlbGllZCBvbiBpbi1hcHAgY2hhdOKAlG5ldyBzZWxsZXJzIHdlcmUgdGhlIG9uZXMgbGVmdCBleHBvc2VkLlwiLFxuICAgICAgXCJTYXJh4oCZcyBtZW50aW9uIG9mIGEgY2FsbGVyIHJlZmVyZW5jaW5nIGhlciBleWUgY29sb3IgY29uZmlybWVkIG91ciBoeXBvdGhlc2lzOiBzb2NpYWwgbWVkaWEgYnJlYWRjcnVtYnMgbWFkZSBoYXJhc3NtZW50IHBlcnNvbmFsIGFuZCBmcmlnaHRlbmluZy5cIixcbiAgICAgIFwiRGF0YSBhbmFseXNpcyBiYWNrZWQgdGhlIHF1YWxpdGF0aXZlIHdvcmsuIFVzZXJzIHdob3NlIHBob25lIG51bWJlcnMgd2VyZSBsaW5rZWQgdG8gcHVibGljIHNvY2lhbCBwcm9maWxlcyByZXBvcnRlZCBoYXJhc3NtZW50IGRyYW1hdGljYWxseSBtb3JlIG9mdGVuLiBUaG9zZSB3aG8gc3R1Y2sgdG8gaW4tYXBwIGNoYXQgcmFyZWx5IGRpZC5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiU2FyYSwgMjZcIixcbiAgICAgICAgcm9sZTogXCJGYXNoaW9uIHJldGFpbCB3b3JrZXJcIixcbiAgICAgICAgdGV4dDogXCJPbmUgY2FsbGVyIGtuZXcgbXkgZXllIGNvbG9yLiBUaGV5IGNsZWFybHkgZm91bmQgbXkgSW5zdGFncmFtIHRocm91Z2ggdGhlIHBob25lIG51bWJlciBvbiBEaXZhci5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJaYWhyYSwgMjhcIixcbiAgICAgICAgcm9sZTogXCJGcmVlbGFuY2UgZ3JhcGhpYyBkZXNpZ25lclwiLFxuICAgICAgICB0ZXh0OiBcIkkgc3RvcHBlZCBsaXN0aW5nIG15IHBob25lIG51bWJlci4gSXQgZmVsdCB1bnByb2Zlc3Npb25hbCwgYnV0IGl0IHdhcyB0aGUgb25seSB3YXkgdG8gYXZvaWQgaGFyYXNzbWVudC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBoaWdobGlnaHRzOiBbXG4gICAgICBcIlB1YmxpYyBwaG9uZSBudW1iZXJzIHdlcmUgdGhlIHJvb3QgY2F1c2Ugb2YgZXhwb3N1cmUsIG5vdCB0aGUgbnVtYmVyIG9mIHJlcG9ydHMuXCIsXG4gICAgICBcIkV4cGVyaWVuY2VkIHNlbGxlcnMgaGFkIGFscmVhZHkgYWRhcHRlZCBieSB1c2luZyBpbi1hcHAgY2hhdDsgbmV3IHNlbGxlcnMgbmVlZGVkIHByb3RlY3RpdmUgZGVmYXVsdHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInN0cmF0ZWd5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFNvbHV0aW9uIEpvdXJuZXlcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJXZSByZWZyYW1lZCBzdWNjZXNzIGZyb20g4oCccmVkdWNlIHJlcG9ydHPigJ0gdG8g4oCccmVkdWNlIGV4cG9zdXJlLuKAnSBXaXRoIFRydXN0ICYgU2FmZXR5LCBMZWdhbCwgU3VwcG9ydCwgYW5kIERhdGEsIHdlIGV2YWx1YXRlZCBldmVyeSBwYXRoIGFuZCBzdHJlc3MtdGVzdGVkIGVkZ2UgY2FzZXMgYmVmb3JlIGNvbW1pdHRpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJFZHVjYXRpbmcgdXNlcnMgYWJvdXQgaGFyYXNzZXIgdGFjdGljcyB3b3VsZCBlcm9kZSB0cnVzdCBhbmQgZGlzY291cmFnZSBsaXN0aW5ncy5cIixcbiAgICAgIFwiRnVsbCBWb0lQIHdhcyBjb3N0LXByb2hpYml0aXZlLCBmcmFnaWxlIGFjcm9zcyBkZXZpY2UgdHlwZXMsIGFuZCBpbmFjY2Vzc2libGUgdG8gNDclIG9mIGxlZ2FjeSBBbmRyb2lkIHVzZXJzLlwiLFxuICAgICAgXCJWb2ljZSByZWxheSB3aXRoIGludGVybWVkaWFyeSBudW1iZXJzIHByb3RlY3RlZCBzZWxsZXJzIHdpdGhvdXQgY2hhbmdpbmcgcHVyY2hhc2UgYmVoYXZpb3Vy4oCUdGhpcyBiZWNhbWUgdGhlIG5vcnRoIHN0YXIuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInRlc3RpbmdcIixcbiAgICB0aXRsZTogXCJUZXN0aW5nICYgTGVhcm5pbmcgZnJvbSBGYWlsdXJlXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQSAzLWRheSBwaWxvdCBpbiB0aGUgY2xvdGhpbmcgY2F0ZWdvcnkgcmVzdWx0ZWQgaW4gYSA1NiUgY2FsbCBmYWlsdXJlIHJhdGUuIEluc3RlYWQgb2YgcmV2ZXJ0aW5nLCB3ZSB0cmVhdGVkIGV2ZXJ5IGZhaWx1cmUgYXMgYSBkZXNpZ24gcmVxdWlyZW1lbnQuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJVc2VyIGJlaGF2aW91cjogc2VsbGVycyBibG9ja2VkIHVuZmFtaWxpYXIgbnVtYmVyczsgYnV5ZXJzIHJlZGlhbGxlZCBmcm9tIGNhbGwgbG9nczsgcmVwZWF0IGNvbnZlcnNhdGlvbnMgYnJva2UgbWFwcGluZyB3aW5kb3dzLlwiLFxuICAgICAgXCJUZWNobmljYWwgbG9hZDogY2FsbCB2b2x1bWUgc3Bpa2VkIGJleW9uZCBmb3JlY2FzdHMgYW5kIG51bWJlciBwb29scyB3ZXJlIGV4aGF1c3RlZC5cIixcbiAgICAgIFwiQnVzaW5lc3MgcmlzazogbG9uZ2VyIGNhbGxzIGluZmxhdGVkIHRlbGVjb20gY29zdHMgYW5kIGFub255bWlzZWQgbnVtYmVycyBhdHRyYWN0ZWQgb3Bwb3J0dW5pc3RpYyBzY2FtbWVycy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVmaW5lbWVudFwiLFxuICAgIHRpdGxlOiBcIlRoZSBSZWZpbmVkIFNvbHV0aW9uXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgdHJhbnNsYXRlZCBldmVyeSBwaWxvdCBpbnNpZ2h0IGludG8gcHJvZHVjdCBhbmQgcGxhdGZvcm0gaW1wcm92ZW1lbnRzIGJlZm9yZSBzY2FsaW5nIG5hdGlvbndpZGUuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJCaWRpcmVjdGlvbmFsIG1hcHBpbmcgbGV0IHNlbGxlcnMgcmVjb25uZWN0IHdpdGhvdXQgZXhwb3NpbmcgcmVhbCBudW1iZXJzLlwiLFxuICAgICAgXCJFeHRlbmRlZCBtYXBwaW5nIHdpbmRvd3MgZnJvbSAyMCBzZWNvbmRzIHRvIDE1IG1pbnV0ZXMgcmVkdWNlZCBkcm9wcGVkIGNhbGxzLlwiLFxuICAgICAgXCJWb2ljZSBwcm9tcHRzICjigJxUaGlzIGlzIGEgc2VjdXJlIGNhbGwgZnJvbSBEaXZhcuKApuKAnSkgc2V0IGV4cGVjdGF0aW9ucyBhbmQgZGV0ZXJyZWQgc2NhbW1lcnMuXCIsXG4gICAgICBcIkEgcG9vbCBvZiAxMDAgaW50ZXJtZWRpYXJ5IG51bWJlcnMgYXNzaWduZWQgcGVyIGJ1eWVyLXNlbGxlciBwYWlyIHByZXZlbnRlZCByZXVzZSBhbmQgYmxvY2tpbmcuXCIsXG4gICAgICBcIlNlY3VyZSBjYWxsIGhpc3RvcnksIGNoYXQgaW50ZWdyYXRpb24sIGFuZCBhZCBtYW5hZ2VtZW50IGxvZ3Mga2VwdCBsZWdpdGltYXRlIHJlbGF0aW9uc2hpcHMgaW50YWN0LlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbXBhY3RcIixcbiAgICB0aXRsZTogXCJJbXBhY3RcIixcbiAgICBib2R5OiBbXG4gICAgICBcIkFmdGVyIHJvbGxvdXQsIGhhcmFzc21lbnQgcmVwb3J0cyBkcm9wcGVkIGRyYW1hdGljYWxseSBhbmQgc2VsbGVycyBmZWx0IHNhZmUgZW5vdWdoIHRvIGtlZXAgbGlzdGluZ3MgbGl2ZS4gTW9kZXJhdGlvbiB0ZWFtcyByZWNvdmVyZWQgaG91cnMgZWFjaCB3ZWVrIHRoYXQgd2VyZSBwcmV2aW91c2x5IHNwZW50IG9uIHJlYWN0aXZlIHRpY2tldHMuXCIsXG4gICAgXSxcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkhhcmFzc21lbnQgcmVwb3J0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgNjAlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGhpbiA4IHdlZWtzIG9mIGxhdW5jaFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWQgZGVsZXRpb25zXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCAyNSVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmV3ZXIgc2VsbGVycyBsZWF2aW5nIHRoZSBwbGF0Zm9ybVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU3VwcG9ydCB0aWNrZXRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCAxOCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTW9yZSB0aW1lIGZvciBwcm9hY3RpdmUgbW9uaXRvcmluZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibGVhcm5pbmdzXCIsXG4gICAgdGl0bGU6IFwiS2V5IExlYXJuaW5nc1wiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVGhlIG9idmlvdXMgcHJvYmxlbSBpcyByYXJlbHkgdGhlIHJlYWwgb25l4oCUZXhwb3N1cmUsIG5vdCByZXBvcnRzLCB3YXMgdGhlIHJvb3QuXCIsXG4gICAgICBcIlVzZXJzIHdlcmUgYWxyZWFkeSBkZXNpZ25pbmcgd29ya2Fyb3VuZHM7IG9ic2VydmluZyB0aGVtIHJldmVhbGVkIHRoZSByaWdodCBkZWZhdWx0cy5cIixcbiAgICAgIFwiRmFpbHVyZSBpcyBzaWduYWwuIFRoZSA1NiUgcGlsb3QgZmFpbHVyZSBnZW5lcmF0ZWQgYSBiYWNrbG9nIG9mIGFjdGlvbmFibGUgcmVxdWlyZW1lbnRzLlwiLFxuICAgICAgXCJQYWlyIHF1YWxpdGF0aXZlIGluc2lnaHQgd2l0aCByZWFsLXRpbWUgbW9uaXRvcmluZyB0byBrZWVwIGFidXNlIHZlY3RvcnMgaW4gY2hlY2suXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmxlY3Rpb25cIixcbiAgICB0aXRsZTogXCJSZWZsZWN0aW9uXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJUaGlzIHByb2plY3QgcmVpbmZvcmNlZCBteSBiZWxpZWYgdGhhdCBzb2x2aW5nIGhhcmQgcHJvYmxlbXMgc3RhcnRzIHdpdGggdW5kZXJzdGFuZGluZyBiZWhhdmlvdXIuIEJ5IGJsZW5kaW5nIHJlc2VhcmNoLCBkYXRhLCBhbmQgcmFwaWQgaXRlcmF0aW9uLCB3ZSBidWlsdCBhIHNhZmV0eSBsYXllciB0aGF0IHN0aWxsIHByb3RlY3RzIG1pbGxpb25zIG9mIHBlb3BsZSBlYWNoIHdlZWsuIFRoZSBoYXJhc3NtZW50IHByb2JsZW0gbWF5IG5ldmVyIGRpc2FwcGVhciBlbnRpcmVseSwgYnV0IERpdmFyIGlzIHNpZ25pZmljYW50bHkgc2FmZXIgZm9yIHRoZSB1c2VycyB3aG8gbmVlZCBpdCBtb3N0LlwiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlT3ZlcnZpZXc6IENhc2VTdHVkeU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnMgYXQgU2V0YXJlIEF2YWxcIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJQcm9kdWN0IERlc2lnbmVyXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIkZlYiAyMDIxIOKAkyBKYW4gMjAyMlwiIH0sXG4gICAgeyBsYWJlbDogXCJJbXBhY3RcIiwgdmFsdWU6IFwiRG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGluIDYgbW9udGhzXCIgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiByZXNvbHZlQXNzZXQoc2V0YXJlQXZhbEludGVydmlld0Fzc2V0KSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSx5REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsa0JBQWtCOzs7O0FDRnRCLElBQU0sdUJBQXVCLEdBQUcsY0FBNkM7QUFBQSxFQUMzRSxNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFLHVCQTZJRSxlQTdJRjtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBSSxRQUFRO0FBQUEsSUFDWixTQUFTLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRTtBQUFBLElBQzFCLElBQUksRUFBRSxVQUFVLEtBQUssSUFBSSxPQUFPO0FBQUEsSUFKbEMsVUE2SUU7QUFBQSxzQkF2SUEsdUJBc0JFLGVBdEJGO0FBQUEsUUFBTyxTQUFTO0FBQUEsUUFBaEIsVUFzQkU7QUFBQSxVQXJCQyxRQUFRLDJCQUNQLHVCQUVFLG9CQUZGO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBVSxPQUFNO0FBQUEsWUFBcEMsVUFDRyxRQUFRO0FBQUEsYUFEWCxpQ0FFRTtBQUFBLDBCQUVKLHVCQUEwQyxvQkFBMUM7QUFBQSxZQUFZLFNBQVE7QUFBQSxZQUFwQixVQUEwQixRQUFRO0FBQUEsYUFBbEMsaUNBQTBDO0FBQUEsVUFDekMsUUFBUSwyQkFDUCx1QkFFRSxvQkFGRjtBQUFBLFlBQVksU0FBUTtBQUFBLFlBQVEsT0FBTTtBQUFBLFlBQWlCLElBQUksRUFBRSxZQUFZLEtBQUs7QUFBQSxZQUExRSxVQUNHLFFBQVE7QUFB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QUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FDRTtBQUFBLElBQ0YsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FB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
