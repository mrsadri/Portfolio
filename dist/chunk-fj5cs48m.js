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
              borderRadius: 18,
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
            borderRadius: 18,
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
          borderRadius: 24,
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

//# debugId=F6F8F04777B661B564756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja1JvdW5kZWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvZGF0YS9jYXNlU3R1ZGllcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTFINy44M2w0Ljg4LTQuODhjLjM5LS4zOS4zOS0xLjAzIDAtMS40MmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBsLTYuNTkgNi41OWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw2LjU5IDYuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwcy4zOS0xLjAyIDAtMS40MUw3LjgzIDEzSDE5Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xXCJcbn0pLCAnQXJyb3dCYWNrUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHR5cGUgeyBDYXNlU3R1ZHlTZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2FzZVN0dWRpZXNcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgRGl2aWRlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBQaWxsIGZyb20gXCIuLi91aS9QaWxsXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGNvbXBvbmVudD1cInNlY3Rpb25cIlxuICAgICAgaWQ9e3NlY3Rpb24uaWR9XG4gICAgICBzcGFjaW5nPXt7IHhzOiAyLjUsIG1kOiAzIH19XG4gICAgICBzeD17eyBtYXhXaWR0aDogNzYwLCBteDogXCJhdXRvXCIgfX1cbiAgICA+XG4gICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgIHtzZWN0aW9uLmV5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJleWVicm93XCIgY29sb3I9XCJicmFuZC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uLmV5ZWJyb3d9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57c2VjdGlvbi50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIHtzZWN0aW9uLnN1bW1hcnkgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBsaW5lSGVpZ2h0OiAxLjY1IH19PlxuICAgICAgICAgICAge3NlY3Rpb24uc3VtbWFyeX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWN0aW9uLmJvZHk/Lm1hcCgocGFyYWdyYXBoKSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLnNsaWNlKDAsIDMyKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtzZWN0aW9uLmJ1bGxldHMgJiYgKFxuICAgICAgICA8U3RhY2sgY29tcG9uZW50PVwidWxcIiBzcGFjaW5nPXsxfSBzeD17eyBwbDogMiwgbWI6IDAgfX0+XG4gICAgICAgICAge3NlY3Rpb24uYnVsbGV0cy5tYXAoKHBvaW50KSA9PiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIGtleT17cG9pbnR9IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cyAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQpID0+IChcbiAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBsYWJlbD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LDg0LDI1NSwwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDk4LDEzMiwyMTgsMC4xNilcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5icmFuZC5zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjIxLCAyMzAsIDI1NSwgMC45MilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuXG4gICAgICB7c2VjdGlvbi5tZXRyaWNzICYmIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtzZWN0aW9uLm1ldHJpY3MubWFwKChtZXRyaWMpID0+IChcbiAgICAgICAgICAgIDxHcmlkIHNpemU9e3sgeHM6IDEyLCBzbTogc2VjdGlvbi5tZXRyaWNzIS5sZW5ndGggPiAxID8gNiA6IDEyIH19IGtleT17bWV0cmljLmxhYmVsfT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTgsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogMi41LCBtZDogMyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnRva2Vucy5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjQ5LDI1MSwyNTUsMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMTQsIDIyLCAzOCwgMC44NSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57bWV0cmljLnZhbHVlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXRyaWMubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAge3NlY3Rpb24ucXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAyNCl9YH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE4LFxuICAgICAgICAgICAgICAgIHB4OiB7IHhzOiAyLjUsIG1kOiAzIH0sXG4gICAgICAgICAgICAgICAgcHk6IHsgeHM6IDIsIG1kOiAyLjUgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgzNCw4NCwyNTUsMC4wNilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgzNCw4NCwyNTUsMC4xNilcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiwgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgICAgICAg4oCce3F1b3RlLnRleHR94oCdXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge3F1b3RlLmF1dGhvcn0g4oCUIHtxdW90ZS5yb2xlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cblxuICAgICAge3NlY3Rpb24uaW1hZ2UgJiYgKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICBzcmM9e3NlY3Rpb24uaW1hZ2Uuc3JjfVxuICAgICAgICAgIGFsdD17c2VjdGlvbi5pbWFnZS5hbHR9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjQsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyBcIjAgMThweCAyOHB4IHJnYmEoMzQsODQsMjU1LDAuMTgpXCJcbiAgICAgICAgICAgICAgICA6IFwiMCAyNHB4IDQwcHggcmdiYSgwLDAsMCwwLjQ1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciBzeD17eyBtdDogeyB4czogMywgbWQ6IDQgfSB9fSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3R1ZHlTZWN0aW9uQ2FyZDtcblxuIiwKICAgICIvLyBGaWxlOiBzcmMvZGF0YS9jYXNlU3R1ZGllcy50c1xuLy8gUHVycG9zZTogUHJvdmlkZXMgc3RydWN0dXJlZCBjb250ZW50IGZvciB0aGUgRGl2YXIgYW5kIFNldGFyZSBBdmFsIGNhc2Ugc3R1ZHkgcGFnZXMgaW5jbHVkaW5nIG92ZXJ2aWV3cyBhbmQgc2VjdGlvbiBkZXRhaWxzLlxuaW1wb3J0IGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2RpdmFyLXNlY3VyZS1jYWxsLWxpc3RpbmcucG5nXCI7XG5pbXBvcnQgc2V0YXJlQXZhbEludGVydmlld0Fzc2V0IGZyb20gXCIuLi8uLi9pbWFnZXMvc2V0YXJlLWF2YWwtaW50ZXJ2aWV3LXNlc3Npb24uYXZpZlwiO1xuXG5jb25zdCByZXNvbHZlQXNzZXQgPSAoYXNzZXQ6IHN0cmluZykgPT4gbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xuZXhwb3J0IHR5cGUgQ2FzZVN0dWR5U2VjdGlvbiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZXllYnJvdz86IHN0cmluZztcbiAgc3VtbWFyeT86IHN0cmluZztcbiAgYm9keT86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBidWxsZXRzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIGhpZ2hsaWdodHM/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgcXVvdGVzPzogcmVhZG9ubHkge1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIHJvbGU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH1bXTtcbiAgbWV0cmljcz86IHJlYWRvbmx5IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIH1bXTtcbiAgaW1hZ2U/OiB7XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgYWx0OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJPdmVydmlldyA9IHtcbiAgdGl0bGU6XG4gICAgXCJTb2x2aW5nIEhhcmFzc21lbnQgYXQgU2NhbGU6IEhvdyBJIFByb3RlY3RlZCAyLjFNIFVzZXJzIG9uIElyYW4ncyBMYXJnZXN0IE1hcmtldHBsYWNlXCIsXG4gIHN1YnRpdGxlOlxuICAgIFwiV2UgcmVkdWNlZCBoYXJhc3NtZW50IGluY2lkZW50cyBieSA2MCUgaW5zaWRlIERpdmFy4oCZcyBjbG90aGluZyBjYXRlZ29yeSBieSBidWlsZGluZyBhIHByaXZhY3ktZmlyc3QgY2FsbGluZyBleHBlcmllbmNlIHRoYXQgbm93IHByb3RlY3RzIDIuMU0gd2Vla2x5IHVzZXJzLlwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlNlbmlvciBVWCBEZXNpZ25lciDCtyBUcnVzdCAmIFNhZmV0eVwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJNYXkg4oCTIEp1bmUgMjAyM1wiIH0sXG4gICAgeyBsYWJlbDogXCJUZWFtXCIsIHZhbHVlOiBcIkRlc2lnbiwgVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBFbmdpbmVlcmluZywgU3VwcG9ydFwiIH0sXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAgeyB2YWx1ZTogXCLilrw2MCVcIiwgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIgfSxcbiAgICB7IHZhbHVlOiBcIjIuMU1cIiwgbGFiZWw6IFwiV2Vla2x5IGNhbGxlcnMgc2FmZWd1YXJkZWRcIiB9LFxuICAgIHsgdmFsdWU6IFwi4pa8MTglXCIsIGxhYmVsOiBcIlNhZmV0eSB0aWNrZXQgdm9sdW1lXCIgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiByZXNvbHZlQXNzZXQoZGl2YXJTZWN1cmVDYWxsTGlzdGluZ0Fzc2V0KSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXZhclNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRpdmFyIGlzIElyYW7igJlzIGxhcmdlc3QgY2xhc3NpZmllZHMgbWFya2V0cGxhY2Ugd2l0aCA1M00rIHdlZWtseSB1c2Vycy4gVHJ1c3QgYW5kIHNhZmV0eSBpbmNpZGVudHMgY2FuIGNvbGxhcHNlIGVudGlyZSByZXZlbnVlIGNhdGVnb3JpZXMgaWYgbGVmdCB1bmNoZWNrZWQuXCIsXG4gICAgbWV0cmljczogW1xuICAgICAgeyBsYWJlbDogXCJNYXJrZXRwbGFjZSBzY2FsZVwiLCB2YWx1ZTogXCI1M00rXCIsIGRlc2NyaXB0aW9uOiBcIldlZWtseSBidXllcnMgJiBzZWxsZXJzXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiVm9pY2UgZGVwZW5kZW5jZVwiLCB2YWx1ZTogXCIyLjFNXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGxzIHBsYWNlZCBldmVyeSB3ZWVrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiQWQgY29uc3VtcHRpb25cIiwgdmFsdWU6IFwiNkIrXCIsIGRlc2NyaXB0aW9uOiBcIk1vbnRobHkgYWQgdmlld3NcIiB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJDbG90aGluZyBsaXN0aW5nc+KAlG1vc3RseSB3b21lbi1sZWTigJR3ZXJlIGhpdCBoYXJkZXN0IGJ5IGFidXNlLlwiLFxuICAgICAgXCJNYW51YWwgbW9kZXJhdGlvbiBjb3VsZG7igJl0IGtlZXAgdXA7IGxpcXVpZGl0eSBhbmQgdHJ1c3Qgd2VyZSBpbiBmcmVlIGZhbGwuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNyaXNpc1wiLFxuICAgIHRpdGxlOiBcIlRoZSBDcmlzaXNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJDdXN0b21lciBjYXJlIGNlbnRyZXMgd2VyZSBmbG9vZGVkIHdpdGggaGFyYXNzbWVudCByZXBvcnRzLiBTZWxsZXJzIGRlbGV0ZWQgbGlzdGluZ3Mgb3IgY2h1cm5lZCBlbnRpcmVseSwgZmVhcmluZyByZXBlYXQgaW5jaWRlbnRzLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSGFyYXNzZXJzIHNjcmFwZWQgcGhvbmUgbnVtYmVycyBmcm9tIGFkcyBhbmQgY2lyY3VsYXRlZCB0aGVtIGluIHByaXZhdGUgVGVsZWdyYW0gZ3JvdXBzLlwiLFxuICAgICAgXCJFdmVuIGFmdGVyIHZpY3RpbXMgZGVsZXRlZCBsaXN0aW5ncywgdGhlIGNhbGxzIGNvbnRpbnVlZCBiZWNhdXNlIG51bWJlcnMgd2VyZSBhbHJlYWR5IGV4cG9zZWQuXCIsXG4gICAgICBcIldpdGhvdXQgaW50ZXJ2ZW50aW9uLCBEaXZhciByaXNrZWQgbG9zaW5nIGEgY2F0ZWdvcnkgdGhhdCBhbmNob3JlZCBkYWlseSBlbmdhZ2VtZW50LlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJMYXlsYSwgMzJcIixcbiAgICAgICAgcm9sZTogXCJQcm9mZXNzaW9uYWwgYXJ0aXN0IHNlbGxpbmcgYmVzcG9rZSBjbG90aGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIkl0IHdhcyBpbmZ1cmlhdGluZy4gSSB0b29rIGRvd24gbXkgRGl2YXIgYWQgaG9waW5nIHRvIHN0b3AgdGhlIGNhbGxzLCBidXQgdGhleSBrZXB0IGNvbWluZy4gU29tZW9uZSB0b2xkIG1lIG15IG51bWJlciB3YXMgaW4gYSBUZWxlZ3JhbSBncm91cC5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJIGludGVydmlld2VkIGhhcmFzc2VkIHNlbGxlcnMgYW5kIGFuYWx5c2VkIGJlaGF2aW91cmFsIGRhdGEgdG8gdW5kZXJzdGFuZCBob3cgZXhwb3N1cmUgc2NhbGVkLiBUaGUgYnJlYWt0aHJvdWdoIGNhbWUgZnJvbSBjb25uZWN0aW5nIHF1YWxpdGF0aXZlIHN0b3JpZXMgdG8gcXVhbnRpdGF0aXZlIHNpZ25hbHMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0czogW1xuICAgICAgXCJQdWJsaWMgcGhvbmUgbnVtYmVycyB3ZXJlIHRoZSByb290IGNhdXNlIG9mIGV4cG9zdXJlLCBub3QgdGhlIG51bWJlciBvZiByZXBvcnRzLlwiLFxuICAgICAgXCJFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IGFkYXB0ZWQgYnkgdXNpbmcgaW4tYXBwIGNoYXQ7IG5ldyBzZWxsZXJzIG5lZWRlZCBwcm90ZWN0aXZlIGRlZmF1bHRzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdHJhdGVneVwiLFxuICAgIHRpdGxlOiBcIlRoZSBTb2x1dGlvbiBKb3VybmV5XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiV2UgcmVmcmFtZWQgc3VjY2VzcyBmcm9tIOKAnHJlZHVjZSByZXBvcnRz4oCdIHRvIOKAnHJlZHVjZSBleHBvc3VyZS7igJ0gV2l0aCBUcnVzdCAmIFNhZmV0eSwgTGVnYWwsIFN1cHBvcnQsIGFuZCBEYXRhLCB3ZSBldmFsdWF0ZWQgZXZlcnkgcGF0aCBhbmQgc3RyZXNzLXRlc3RlZCBlZGdlIGNhc2VzIGJlZm9yZSBjb21taXR0aW5nLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiRWR1Y2F0aW5nIHVzZXJzIGFib3V0IGhhcmFzc2VyIHRhY3RpY3Mgd291bGQgZXJvZGUgdHJ1c3QgYW5kIGRpc2NvdXJhZ2UgbGlzdGluZ3MuXCIsXG4gICAgICBcIkZ1bGwgVm9JUCB3YXMgY29zdC1wcm9oaWJpdGl2ZSwgZnJhZ2lsZSBhY3Jvc3MgZGV2aWNlIHR5cGVzLCBhbmQgaW5hY2Nlc3NpYmxlIHRvIDQ3JSBvZiBsZWdhY3kgQW5kcm9pZCB1c2Vycy5cIixcbiAgICAgIFwiVm9pY2UgcmVsYXkgd2l0aCBpbnRlcm1lZGlhcnkgbnVtYmVycyBwcm90ZWN0ZWQgc2VsbGVycyB3aXRob3V0IGNoYW5naW5nIHB1cmNoYXNlIGJlaGF2aW91cuKAlHRoaXMgYmVjYW1lIHRoZSBub3J0aCBzdGFyLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkEgMy1kYXkgcGlsb3QgaW4gdGhlIGNsb3RoaW5nIGNhdGVnb3J5IHJlc3VsdGVkIGluIGEgNTYlIGNhbGwgZmFpbHVyZSByYXRlLiBJbnN0ZWFkIG9mIHJldmVydGluZywgd2UgdHJlYXRlZCBldmVyeSBmYWlsdXJlIGFzIGEgZGVzaWduIHJlcXVpcmVtZW50LlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiVXNlciBiZWhhdmlvdXI6IHNlbGxlcnMgYmxvY2tlZCB1bmZhbWlsaWFyIG51bWJlcnM7IGJ1eWVycyByZWRpYWxsZWQgZnJvbSBjYWxsIGxvZ3M7IHJlcGVhdCBjb252ZXJzYXRpb25zIGJyb2tlIG1hcHBpbmcgd2luZG93cy5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGxvYWQ6IGNhbGwgdm9sdW1lIHNwaWtlZCBiZXlvbmQgZm9yZWNhc3RzIGFuZCBudW1iZXIgcG9vbHMgd2VyZSBleGhhdXN0ZWQuXCIsXG4gICAgICBcIkJ1c2luZXNzIHJpc2s6IGxvbmdlciBjYWxscyBpbmZsYXRlZCB0ZWxlY29tIGNvc3RzIGFuZCBhbm9ueW1pc2VkIG51bWJlcnMgYXR0cmFjdGVkIG9wcG9ydHVuaXN0aWMgc2NhbW1lcnMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmluZW1lbnRcIixcbiAgICB0aXRsZTogXCJUaGUgUmVmaW5lZCBTb2x1dGlvblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIldlIHRyYW5zbGF0ZWQgZXZlcnkgcGlsb3QgaW5zaWdodCBpbnRvIHByb2R1Y3QgYW5kIHBsYXRmb3JtIGltcHJvdmVtZW50cyBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQmlkaXJlY3Rpb25hbCBtYXBwaW5nIGxldCBzZWxsZXJzIHJlY29ubmVjdCB3aXRob3V0IGV4cG9zaW5nIHJlYWwgbnVtYmVycy5cIixcbiAgICAgIFwiRXh0ZW5kZWQgbWFwcGluZyB3aW5kb3dzIGZyb20gMjAgc2Vjb25kcyB0byAxNSBtaW51dGVzIHJlZHVjZWQgZHJvcHBlZCBjYWxscy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyAo4oCcVGhpcyBpcyBhIHNlY3VyZSBjYWxsIGZyb20gRGl2YXLigKbigJ0pIHNldCBleHBlY3RhdGlvbnMgYW5kIGRldGVycmVkIHNjYW1tZXJzLlwiLFxuICAgICAgXCJBIHBvb2wgb2YgMTAwIGludGVybWVkaWFyeSBudW1iZXJzIGFzc2lnbmVkIHBlciBidXllci1zZWxsZXIgcGFpciBwcmV2ZW50ZWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5LCBjaGF0IGludGVncmF0aW9uLCBhbmQgYWQgbWFuYWdlbWVudCBsb2dzIGtlcHQgbGVnaXRpbWF0ZSByZWxhdGlvbnNoaXBzIGludGFjdC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW1wYWN0XCIsXG4gICAgdGl0bGU6IFwiSW1wYWN0XCIsXG4gICAgYm9keTogW1xuICAgICAgXCJBZnRlciByb2xsb3V0LCBoYXJhc3NtZW50IHJlcG9ydHMgZHJvcHBlZCBkcmFtYXRpY2FsbHkgYW5kIHNlbGxlcnMgZmVsdCBzYWZlIGVub3VnaCB0byBrZWVwIGxpc3RpbmdzIGxpdmUuIE1vZGVyYXRpb24gdGVhbXMgcmVjb3ZlcmVkIGhvdXJzIGVhY2ggd2VlayB0aGF0IHdlcmUgcHJldmlvdXNseSBzcGVudCBvbiByZWFjdGl2ZSB0aWNrZXRzLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJIYXJhc3NtZW50IHJlcG9ydHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDYwJVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gOCB3ZWVrcyBvZiBsYXVuY2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFkIGRlbGV0aW9uc1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMjUlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZld2VyIHNlbGxlcnMgbGVhdmluZyB0aGUgcGxhdGZvcm1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN1cHBvcnQgdGlja2V0c1wiLFxuICAgICAgICB2YWx1ZTogXCLilrwgMTglXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vcmUgdGltZSBmb3IgcHJvYWN0aXZlIG1vbml0b3JpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlYXJuaW5nc1wiLFxuICAgIHRpdGxlOiBcIktleSBMZWFybmluZ3NcIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIG9uZeKAlGV4cG9zdXJlLCBub3QgcmVwb3J0cywgd2FzIHRoZSByb290LlwiLFxuICAgICAgXCJVc2VycyB3ZXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSByZXZlYWxlZCB0aGUgcmlnaHQgZGVmYXVsdHMuXCIsXG4gICAgICBcIkZhaWx1cmUgaXMgc2lnbmFsLiBUaGUgNTYlIHBpbG90IGZhaWx1cmUgZ2VuZXJhdGVkIGEgYmFja2xvZyBvZiBhY3Rpb25hYmxlIHJlcXVpcmVtZW50cy5cIixcbiAgICAgIFwiUGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcgdG8ga2VlcCBhYnVzZSB2ZWN0b3JzIGluIGNoZWNrLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZsZWN0aW9uXCIsXG4gICAgdGl0bGU6IFwiUmVmbGVjdGlvblwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiVGhpcyBwcm9qZWN0IHJlaW5mb3JjZWQgbXkgYmVsaWVmIHRoYXQgc29sdmluZyBoYXJkIHByb2JsZW1zIHN0YXJ0cyB3aXRoIHVuZGVyc3RhbmRpbmcgYmVoYXZpb3VyLiBCeSBibGVuZGluZyByZXNlYXJjaCwgZGF0YSwgYW5kIHJhcGlkIGl0ZXJhdGlvbiwgd2UgYnVpbHQgYSBzYWZldHkgbGF5ZXIgdGhhdCBzdGlsbCBwcm90ZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZWFjaCB3ZWVrLiBUaGUgaGFyYXNzbWVudCBwcm9ibGVtIG1heSBuZXZlciBkaXNhcHBlYXIgZW50aXJlbHksIGJ1dCBEaXZhciBpcyBzaWduaWZpY2FudGx5IHNhZmVyIGZvciB0aGUgdXNlcnMgd2hvIG5lZWQgaXQgbW9zdC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZU92ZXJ2aWV3ID0ge1xuICB0aXRsZTpcbiAgICBcIlR1cm5pbmcgT25lLVRpbWUgVmlzaXRvcnMgaW50byBMaWZlbG9uZyBDdXN0b21lcnMgYXQgU2V0YXJlIEF2YWxcIixcbiAgbWV0YTogW1xuICAgIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogXCJQcm9kdWN0IERlc2lnbmVyXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRpbWVsaW5lXCIsIHZhbHVlOiBcIkZlYiAyMDIxIOKAkyBKYW4gMjAyMlwiIH0sXG4gICAgeyBsYWJlbDogXCJJbXBhY3RcIiwgdmFsdWU6IFwiRG91YmxlZCByZXRhaW5lZCByZXZlbnVlIGluIDYgbW9udGhzXCIgfSxcbiAgXSxcbiAgaGVyb0ltYWdlOiByZXNvbHZlQXNzZXQoc2V0YXJlQXZhbEludGVydmlld0Fzc2V0KSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRhcmVTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwiY29udGV4dFwiLFxuICAgIHRpdGxlOiBcIkNvbnRleHRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiQWN0aXZhdGlvbiBmbG93IHRyZWF0ZWQgZXZlcnkgc2VnbWVudCBpZGVudGljYWxseSwgaWdub3JpbmcgdXNhZ2UgaW50ZW50LlwiLFxuICAgICAgXCJSZWZlcnJhbCBsb29wcyBleGlzdGVkIGJ1dCB3ZXJlIHVucmV3YXJkaW5n4oCUdXNlcnMgY2h1cm5lZCBhZnRlciBmaXJzdCBiZW5lZml0LlwiLFxuICAgICAgXCJUZWFtcyBzaGlwcGVkIGluIHNpbG9zOyBubyBzaGFyZWQgZXhwZXJpbWVudCBjYWRlbmNlIG9yIHN1Y2Nlc3MgbWV0cmljcy5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaW5zaWdodHNcIixcbiAgICB0aXRsZTogXCJXaGF0IFdlIExlYXJuZWRcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBidWxsZXRzOiBbXG4gICAgICBcIlVzZXJzIHdhbnRlZCB0YW5naWJsZSBtaWxlc3RvbmVz4oCUd2l0aG91dCB0aGVtLCB0aGUgcHJvZHVjdCBmZWx0IHRyYW5zYWN0aW9uYWwuXCIsXG4gICAgICBcIkhpZ2gtaW50ZW50IGNvaG9ydHMgcmVzcG9uZGVkIHRvIGVkdWNhdGlvbmFsIG51ZGdlcyBtb3JlIHRoYW4gcHJvbW90aW9ucy5cIixcbiAgICAgIFwiSW50ZXJuYWwgdGVhbXMgbGFja2VkIHZpc2liaWxpdHkgaW50byBleHBlcmltZW50IG91dGNvbWVzLCBzbG93aW5nIGl0ZXJhdGlvbi5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29sdXRpb25cIixcbiAgICB0aXRsZTogXCJFeHBlcmllbmNlIFJlLUFyY2hpdGVjdHVyZVwiLFxuICAgIGJ1bGxldHM6IFtcbiAgICAgIFwiSW50cm9kdWNlZCBsaWZlY3ljbGUgbWVzc2FnaW5nIHRhaWxvcmVkIHRvIGludGVudCAoZXhwbG9yZXJzLCBlYXJuZXJzLCBsb3lhbGlzdHMpLlwiLFxuICAgICAgXCJTaGlwcGVkIGEgZ2FtaWZpZWQgcmVmZXJyYWwgam91cm5leSB0aGF0IGNlbGVicmF0ZWQgcHJvZ3Jlc3MgYW5kIHVubG9ja2VkIHRpZXJlZCByZXdhcmRzLlwiLFxuICAgICAgXCJTdG9vZCB1cCBhIGNyb3NzLWZ1bmN0aW9uYWwgZ3Jvd3RoIGd1aWxkIHdpdGggYSAyLXdlZWsgZXhwZXJpbWVudCBjYWRlbmNlLlwiLFxuICAgIF0sXG4gICAgbWV0cmljczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRhaW5lZCBSZXZlbnVlXCIsXG4gICAgICAgIHZhbHVlOiBcIjLDl1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaXRoaW4gNiBtb250aHMgb2Ygc3RhZ2VkIHJvbGxvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRhaWx5IEFjdGl2ZSBVc2Vyc1wiLFxuICAgICAgICB2YWx1ZTogXCIrNjBLXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZmVycmFsIHByb2dyYW0gcGFydGljaXBhbnRzIGJlY2FtZSBkYWlseSBhY3RpdmVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb2xlXCIsXG4gICAgdGl0bGU6IFwiTXkgUm9sZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkkgb3BlcmF0ZWQgYXMgdGhlIGVuZC10by1lbmQgcHJvZHVjdCBkZXNpZ25lciwgYnJpZGdpbmcgcHJvZHVjdCwgbWFya2V0aW5nLCBjdXN0b21lciBzdWNjZXNzLCBhbmQgZW5naW5lZXJpbmcuXCIsXG4gICAgYnVsbGV0czogW1xuICAgICAgXCJSYW4gd2Vla2x5IGNvLWNyZWF0aW9uIHJpdHVhbHMgdG8gYWxpZ24gc3Rha2Vob2xkZXJzIG9uIGV4cGVyaW1lbnQgcHJpb3JpdGllcy5cIixcbiAgICAgIFwiRXN0YWJsaXNoZWQgZGVzaWduIHN5c3RlbSBmb3VuZGF0aW9ucyBhZG9wdGVkIGJ5IHRlYW1zIGJleW9uZCBncm93dGguXCIsXG4gICAgICBcIlNldCB1cCBhbmFseXRpY3MgZGFzaGJvYXJkcyB0aGF0IHBhaXJlZCBxdWFsaXRhdGl2ZSBub3RlcyB3aXRoIGZ1bm5lbCBLUElzLlwiLFxuICAgIF0sXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIGF1dGhvcjogXCJIZWFkIG9mIEdyb3d0aFwiLFxuICAgICAgICByb2xlOiBcIlNldGFyZSBBdmFsXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzaWggaGVscGVkIHVzIHNoaWZ0IGZyb20gb25lLW9mZiBjYW1wYWlnbnMgdG8gYSBwcm9kdWN0IG1pbmRzZXQuIFRoZSBsaWZlY3ljbGUgbW9kZWwgYW5kIGV4cGVyaW1lbnQgY2FkZW5jZSBzdGlsbCBndWlkZSBob3cgd2UgYnVpbGQgdG9kYXkuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSx5REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsa0JB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QSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgImRlYnVnSWQiOiAiRjZGOEYwNDc3N0I2NjFCNTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
