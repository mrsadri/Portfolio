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
          spacing: 1.5,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "h3",
              children: section.title
            }, undefined, false, undefined, this),
            section.description && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
              variant: "body1",
              color: "text.secondary",
              sx: { lineHeight: 1.7 },
              children: section.description
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
        section.points && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
          component: "ul",
          spacing: 1,
          sx: { pl: 2, mb: 0 },
          children: section.points.map((point) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
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
  meta: [
    { label: "Role", value: "Senior UX Designer" },
    { label: "Timeline", value: "May – June 2023" },
    { label: "Impact", value: "~60% reduction in harassment reports" }
  ],
  summary: [
    "Partnered with Trust & Safety, Legal, Engineering, and Support to build a privacy-first calling experience.",
    "Reduced harassment incidents by 60% while protecting liquidity in the clothing category.",
    "Designed an infrastructure that still safeguards 2.1M weekly callers on Iran’s largest marketplace."
  ],
  stats: [
    { value: "60%", label: "Drop in harassment reports" },
    { value: "2.1M", label: "Weekly secure callers protected" },
    { value: "▼18%", label: "Safety ticket volume" }
  ],
  heroImage: resolveAsset(divar_secure_call_listing_default)
};
var divarSections = [
  {
    id: "platform",
    title: "The Platform",
    description: "Divar is Iran's leading classifieds marketplace, relied upon by tens of millions of people every week. At this scale, trust and safety are non-negotiable.",
    body: [
      "Every transaction matters. When harassment spiked in the clothing category—where sellers were predominantly women—it threatened both users' safety and the health of an entire revenue stream."
    ],
    metrics: [
      {
        label: "Active users",
        value: "53M+",
        description: "Weekly buyers and sellers across the country"
      },
      {
        label: "Weekly secure callers",
        value: "2.1M",
        description: "People relying on voice to close transactions"
      },
      {
        label: "Ads viewed monthly",
        value: "6B+",
        description: "Demand that depends on a trusted marketplace"
      }
    ],
    points: [
      "Harassment complaints escalated fastest within clothing listings.",
      "Victims removed ads or churned silently, eroding marketplace liquidity."
    ]
  },
  {
    id: "crisis",
    title: "The Crisis",
    description: "Customer care was overwhelmed by reports from women who were harassed via phone calls. Many were afraid to keep their listings live.",
    points: [
      "Harassers scraped phone numbers from ads and circulated them in private Telegram groups.",
      "Even after victims deleted listings, the calls continued because numbers were already exposed.",
      "Without intervention, Divar risked losing a category that anchored daily engagement."
    ]
  },
  {
    id: "investigation",
    title: "Finding the Real Problem",
    description: "I interviewed affected sellers to understand how harassment scaled and what they were doing to protect themselves.",
    body: [
      "Patterns emerged quickly: harassers saved posted numbers, cross-referenced them on WhatsApp and Instagram, and only then began the abuse. Experienced sellers had already stopped sharing numbers and relied on in-app chat—new sellers were the ones left exposed.",
      "Sara’s mention of a caller referencing her eye color confirmed our hypothesis: social media breadcrumbs made harassment personal and frightening.",
      "Data analysis backed the qualitative work. Users whose phone numbers were linked to public social profiles reported harassment dramatically more often. Those who stuck to in-app chat rarely did."
    ],
    quotes: [
      {
        author: "Layla, 32",
        role: "Professional artist selling bespoke clothing",
        text: "It was infuriating. I took down my Divar ad hoping to stop the calls, but they kept coming. Someone told me my number was in a Telegram group."
      },
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
    points: [
      "Public phone numbers—not the volume of reports—were the root of exposure.",
      "Experienced sellers had already adapted by using chat; newcomers needed protective defaults."
    ]
  },
  {
    id: "strategy",
    title: "The Solution Journey",
    description: "We reframed the mandate from “reduce reports” to “reduce exposure.” With Trust & Safety, Legal, Support, and Data teams, we evaluated every path we could take.",
    points: [
      "Option 1 — Educate users about harasser tactics. Rejected: would publicly expose our vulnerabilities and damage trust.",
      "Option 2 — Full in-app VoIP. Rejected: infrastructure cost, device fragmentation, and inconsistent nationwide connectivity.",
      "Option 3 — Voice relay with intermediary numbers. Selected: privacy-first, scalable, and compatible with existing behaviors."
    ]
  },
  {
    id: "testing",
    title: "Testing & Learning from Failure",
    description: "A 3-day pilot in the clothing category produced a 56% call failure rate. Instead of rolling back, we treated it as a roadmap.",
    points: [
      "User-side issues: sellers blocked unfamiliar numbers, and buyers redialed from call logs instead of the app.",
      "Technical gaps: volume spikes exceeded predictions and number mappings expired too quickly.",
      "Business risk: longer calls increased telecom costs and attracted opportunistic scammers."
    ]
  },
  {
    id: "refinement",
    title: "The Refined Solution",
    description: "We translated every pilot insight into a tangible improvement before scaling nationwide.",
    points: [
      "Bidirectional mapping so sellers could call buyers back without exposing real numbers.",
      "Extended mapping windows from 20 seconds to 15 minutes to minimise dropped connections.",
      "Voice prompts that announced “This is a secure call from Divar…” to reduce confusion and deter scammers.",
      "A pool of 100 intermediary numbers assigned per buyer-seller pair to avoid reuse and blocking.",
      "Secure call history in ad management plus chat integration so legitimate contacts could continue."
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
    points: [
      "The obvious problem is rarely the real problem—focus on exposure, not just reports.",
      "Users are already designing workarounds; observing them led directly to the right solution.",
      "Treat failure as signal. The 56% pilot failure revealed exactly what to fix.",
      "Iterate ruthlessly and pair qualitative insight with real-time monitoring."
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
    points: [
      "Activation flow treated every segment identically, ignoring usage intent.",
      "Referral loops existed but were unrewarding—users churned after first benefit.",
      "Teams shipped in silos; no shared experiment cadence or success metrics."
    ]
  },
  {
    id: "insights",
    title: "What We Learned",
    description: "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
    points: [
      "Users wanted tangible milestones—without them, the product felt transactional.",
      "High-intent cohorts responded to educational nudges more than promotions.",
      "Internal teams lacked visibility into experiment outcomes, slowing iteration."
    ]
  },
  {
    id: "solution",
    title: "Experience Re-Architecture",
    points: [
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
    points: [
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

//# debugId=1D9406BF5B5A008F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0Fycm93QmFja1JvdW5kZWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL1NlY3Rpb25DYXJkLnRzeCIsICIuLi9zcmMvZGF0YS9jYXNlU3R1ZGllcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTFINy44M2w0Ljg4LTQuODhjLjM5LS4zOS4zOS0xLjAzIDAtMS40MmEuOTk2Ljk5NiAwIDAgMC0xLjQxIDBsLTYuNTkgNi41OWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw2LjU5IDYuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwcy4zOS0xLjAyIDAtMS40MUw3LjgzIDEzSDE5Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xXCJcbn0pLCAnQXJyb3dCYWNrUm91bmRlZCcpOyIsCiAgICAiaW1wb3J0IHsgQm94LCBDYXJkLCBHcmlkLCBTdGFjaywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL3VpL1BpbGxcIjtcbmltcG9ydCB0eXBlIHsgQ2FzZVN0dWR5U2VjdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhL2Nhc2VTdHVkaWVzXCI7XG5cbmNvbnN0IENhc2VTdHVkeVNlY3Rpb25DYXJkID0gKHsgc2VjdGlvbiB9OiB7IHNlY3Rpb246IENhc2VTdHVkeVNlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY29tcG9uZW50PVwic2VjdGlvblwiXG4gICAgICBpZD17c2VjdGlvbi5pZH1cbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBzeD17e1xuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgIHB4OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH0sXG4gICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZywgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLnhsIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXt7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH19PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17MS41fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57c2VjdGlvbi50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3NlY3Rpb24uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEuNyB9fT5cbiAgICAgICAgICAgICAge3NlY3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2VjdGlvbi5ib2R5Py5tYXAoKHBhcmFncmFwaCkgPT4gKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGguc2xpY2UoMCwgMjQpfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMS43IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAge3NlY3Rpb24ucXVvdGVzICYmIHNlY3Rpb24ucXVvdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIHtzZWN0aW9uLnF1b3Rlcy5tYXAoKHF1b3RlKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtgJHtxdW90ZS5hdXRob3J9LSR7cXVvdGUudGV4dC5zbGljZSgwLCAxNil9YH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LCA4NCwgMjU1LCAwLjA0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMzQsIDg0LCAyNTUsIDAuMTIpXCIsXG4gICAgICAgICAgICAgICAgICBweDogeyB4czogdGhlbWUudG9rZW5zLnNwYWNpbmcubWQsIG1kOiB0aGVtZS50b2tlbnMuc3BhY2luZy5sZyB9LFxuICAgICAgICAgICAgICAgICAgcHk6IHsgeHM6IHRoZW1lLnRva2Vucy5zcGFjaW5nLm1kLCBtZDogdGhlbWUudG9rZW5zLnNwYWNpbmcubGcgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiLCBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgICAgICAgIOKAnHtxdW90ZS50ZXh0feKAnVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtxdW90ZS5hdXRob3J9IOKAlCB7cXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWN0aW9uLnBvaW50cyAmJiAoXG4gICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD1cInVsXCIgc3BhY2luZz17MX0gc3g9e3sgcGw6IDIsIG1iOiAwIH19PlxuICAgICAgICAgICAge3NlY3Rpb24ucG9pbnRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiBrZXk9e3BvaW50fSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWN0aW9uLmhpZ2hsaWdodHMgJiYgKFxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBmbGV4V3JhcD1cIndyYXBcIiB1c2VGbGV4R2FwPlxuICAgICAgICAgICAge3NlY3Rpb24uaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCkgPT4gKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGtleT17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgIGxhYmVsPXtoaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDM0LCA4NCwgMjU1LCAwLjA4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoOTgsIDEzMiwgMjE4LCAwLjE2KVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJyYW5kLnNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIyMSwgMjMwLCAyNTUsIDAuOTIpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICl9XG5cbiAgICAgICAge3NlY3Rpb24ubWV0cmljcyAmJiAoXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAge3NlY3Rpb24ubWV0cmljcy5tYXAoKG1ldHJpYykgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBzaXplPXt7IHhzOiAxMiwgbWQ6IHNlY3Rpb24ubWV0cmljcyEubGVuZ3RoID4gMSA/IDYgOiAxMiB9fSBrZXk9e21ldHJpYy5sYWJlbH0+XG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnRva2Vucy5yYWRpdXMuc3VyZmFjZX1weGAsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIHB4OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgICAgIHB5OiB7IHhzOiB0aGVtZS50b2tlbnMuc3BhY2luZy5tZCwgbWQ6IHRoZW1lLnRva2Vucy5zcGFjaW5nLmxnIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswLjc1fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e21ldHJpYy52YWx1ZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21ldHJpYy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7bWV0cmljLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge21ldHJpYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWN0aW9uLmltYWdlICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgc3JjPXtzZWN0aW9uLmltYWdlLnNyY31cbiAgICAgICAgICAgIGFsdD17c2VjdGlvbi5pbWFnZS5hbHR9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUudG9rZW5zLnJhZGl1cy5zdXJmYWNlfXB4YCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0dWR5U2VjdGlvbkNhcmQ7XG5cbiIsCiAgICAiLy8gRmlsZTogc3JjL2RhdGEvY2FzZVN0dWRpZXMudHNcbi8vIFB1cnBvc2U6IFByb3ZpZGVzIHN0cnVjdHVyZWQgY29udGVudCBmb3IgdGhlIERpdmFyIGFuZCBTZXRhcmUgQXZhbCBjYXNlIHN0dWR5IHBhZ2VzIGluY2x1ZGluZyBvdmVydmlld3MgYW5kIHNlY3Rpb24gZGV0YWlscy5cbmltcG9ydCBkaXZhclNlY3VyZUNhbGxMaXN0aW5nQXNzZXQgZnJvbSBcIi4uLy4uL2ltYWdlcy9kaXZhci1zZWN1cmUtY2FsbC1saXN0aW5nLnBuZ1wiO1xuaW1wb3J0IHNldGFyZUF2YWxJbnRlcnZpZXdBc3NldCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NldGFyZS1hdmFsLWludGVydmlldy1zZXNzaW9uLmF2aWZcIjtcblxuY29uc3QgcmVzb2x2ZUFzc2V0ID0gKGFzc2V0OiBzdHJpbmcpID0+IG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZjtcbmV4cG9ydCB0eXBlIENhc2VTdHVkeVNlY3Rpb24gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBib2R5PzogcmVhZG9ubHkgc3RyaW5nW107XG4gIHBvaW50cz86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBoaWdobGlnaHRzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIHF1b3Rlcz86IHJlYWRvbmx5IHtcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICB9W107XG4gIG1ldHJpY3M/OiByZWFkb25seSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB9W107XG4gIGltYWdlPzoge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGFsdDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRpdmFyT3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiU29sdmluZyBIYXJhc3NtZW50IGF0IFNjYWxlOiBIb3cgSSBQcm90ZWN0ZWQgMi4xTSBVc2VycyBvbiBJcmFuJ3MgTGFyZ2VzdCBNYXJrZXRwbGFjZVwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlNlbmlvciBVWCBEZXNpZ25lclwiIH0sXG4gICAgeyBsYWJlbDogXCJUaW1lbGluZVwiLCB2YWx1ZTogXCJNYXkg4oCTIEp1bmUgMjAyM1wiIH0sXG4gICAgeyBsYWJlbDogXCJJbXBhY3RcIiwgdmFsdWU6IFwifjYwJSByZWR1Y3Rpb24gaW4gaGFyYXNzbWVudCByZXBvcnRzXCIgfSxcbiAgXSxcbiAgc3VtbWFyeTogW1xuICAgIFwiUGFydG5lcmVkIHdpdGggVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBFbmdpbmVlcmluZywgYW5kIFN1cHBvcnQgdG8gYnVpbGQgYSBwcml2YWN5LWZpcnN0IGNhbGxpbmcgZXhwZXJpZW5jZS5cIixcbiAgICBcIlJlZHVjZWQgaGFyYXNzbWVudCBpbmNpZGVudHMgYnkgNjAlIHdoaWxlIHByb3RlY3RpbmcgbGlxdWlkaXR5IGluIHRoZSBjbG90aGluZyBjYXRlZ29yeS5cIixcbiAgICBcIkRlc2lnbmVkIGFuIGluZnJhc3RydWN0dXJlIHRoYXQgc3RpbGwgc2FmZWd1YXJkcyAyLjFNIHdlZWtseSBjYWxsZXJzIG9uIElyYW7igJlzIGxhcmdlc3QgbWFya2V0cGxhY2UuXCIsXG4gIF0sXG4gIHN0YXRzOiBbXG4gICAgeyB2YWx1ZTogXCI2MCVcIiwgbGFiZWw6IFwiRHJvcCBpbiBoYXJhc3NtZW50IHJlcG9ydHNcIiB9LFxuICAgIHsgdmFsdWU6IFwiMi4xTVwiLCBsYWJlbDogXCJXZWVrbHkgc2VjdXJlIGNhbGxlcnMgcHJvdGVjdGVkXCIgfSxcbiAgICB7IHZhbHVlOiBcIuKWvDE4JVwiLCBsYWJlbDogXCJTYWZldHkgdGlja2V0IHZvbHVtZVwiIH0sXG4gIF0sXG4gIGhlcm9JbWFnZTogcmVzb2x2ZUFzc2V0KGRpdmFyU2VjdXJlQ2FsbExpc3RpbmdBc3NldCksXG59O1xuXG5leHBvcnQgY29uc3QgZGl2YXJTZWN0aW9uczogQ2FzZVN0dWR5U2VjdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwicGxhdGZvcm1cIixcbiAgICB0aXRsZTogXCJUaGUgUGxhdGZvcm1cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGl2YXIgaXMgSXJhbidzIGxlYWRpbmcgY2xhc3NpZmllZHMgbWFya2V0cGxhY2UsIHJlbGllZCB1cG9uIGJ5IHRlbnMgb2YgbWlsbGlvbnMgb2YgcGVvcGxlIGV2ZXJ5IHdlZWsuIEF0IHRoaXMgc2NhbGUsIHRydXN0IGFuZCBzYWZldHkgYXJlIG5vbi1uZWdvdGlhYmxlLlwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiRXZlcnkgdHJhbnNhY3Rpb24gbWF0dGVycy4gV2hlbiBoYXJhc3NtZW50IHNwaWtlZCBpbiB0aGUgY2xvdGhpbmcgY2F0ZWdvcnnigJR3aGVyZSBzZWxsZXJzIHdlcmUgcHJlZG9taW5hbnRseSB3b21lbuKAlGl0IHRocmVhdGVuZWQgYm90aCB1c2Vycycgc2FmZXR5IGFuZCB0aGUgaGVhbHRoIG9mIGFuIGVudGlyZSByZXZlbnVlIHN0cmVhbS5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWN0aXZlIHVzZXJzXCIsXG4gICAgICAgIHZhbHVlOiBcIjUzTStcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2Vla2x5IGJ1eWVycyBhbmQgc2VsbGVycyBhY3Jvc3MgdGhlIGNvdW50cnlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIldlZWtseSBzZWN1cmUgY2FsbGVyc1wiLFxuICAgICAgICB2YWx1ZTogXCIyLjFNXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlb3BsZSByZWx5aW5nIG9uIHZvaWNlIHRvIGNsb3NlIHRyYW5zYWN0aW9uc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWRzIHZpZXdlZCBtb250aGx5XCIsXG4gICAgICAgIHZhbHVlOiBcIjZCK1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZW1hbmQgdGhhdCBkZXBlbmRzIG9uIGEgdHJ1c3RlZCBtYXJrZXRwbGFjZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHBvaW50czogW1xuICAgICAgXCJIYXJhc3NtZW50IGNvbXBsYWludHMgZXNjYWxhdGVkIGZhc3Rlc3Qgd2l0aGluIGNsb3RoaW5nIGxpc3RpbmdzLlwiLFxuICAgICAgXCJWaWN0aW1zIHJlbW92ZWQgYWRzIG9yIGNodXJuZWQgc2lsZW50bHksIGVyb2RpbmcgbWFya2V0cGxhY2UgbGlxdWlkaXR5LlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjcmlzaXNcIixcbiAgICB0aXRsZTogXCJUaGUgQ3Jpc2lzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkN1c3RvbWVyIGNhcmUgd2FzIG92ZXJ3aGVsbWVkIGJ5IHJlcG9ydHMgZnJvbSB3b21lbiB3aG8gd2VyZSBoYXJhc3NlZCB2aWEgcGhvbmUgY2FsbHMuIE1hbnkgd2VyZSBhZnJhaWQgdG8ga2VlcCB0aGVpciBsaXN0aW5ncyBsaXZlLlwiLFxuICAgIHBvaW50czogW1xuICAgICAgXCJIYXJhc3NlcnMgc2NyYXBlZCBwaG9uZSBudW1iZXJzIGZyb20gYWRzIGFuZCBjaXJjdWxhdGVkIHRoZW0gaW4gcHJpdmF0ZSBUZWxlZ3JhbSBncm91cHMuXCIsXG4gICAgICBcIkV2ZW4gYWZ0ZXIgdmljdGltcyBkZWxldGVkIGxpc3RpbmdzLCB0aGUgY2FsbHMgY29udGludWVkIGJlY2F1c2UgbnVtYmVycyB3ZXJlIGFscmVhZHkgZXhwb3NlZC5cIixcbiAgICAgIFwiV2l0aG91dCBpbnRlcnZlbnRpb24sIERpdmFyIHJpc2tlZCBsb3NpbmcgYSBjYXRlZ29yeSB0aGF0IGFuY2hvcmVkIGRhaWx5IGVuZ2FnZW1lbnQuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJGaW5kaW5nIHRoZSBSZWFsIFByb2JsZW1cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSBpbnRlcnZpZXdlZCBhZmZlY3RlZCBzZWxsZXJzIHRvIHVuZGVyc3RhbmQgaG93IGhhcmFzc21lbnQgc2NhbGVkIGFuZCB3aGF0IHRoZXkgd2VyZSBkb2luZyB0byBwcm90ZWN0IHRoZW1zZWx2ZXMuXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJQYXR0ZXJucyBlbWVyZ2VkIHF1aWNrbHk6IGhhcmFzc2VycyBzYXZlZCBwb3N0ZWQgbnVtYmVycywgY3Jvc3MtcmVmZXJlbmNlZCB0aGVtIG9uIFdoYXRzQXBwIGFuZCBJbnN0YWdyYW0sIGFuZCBvbmx5IHRoZW4gYmVnYW4gdGhlIGFidXNlLiBFeHBlcmllbmNlZCBzZWxsZXJzIGhhZCBhbHJlYWR5IHN0b3BwZWQgc2hhcmluZyBudW1iZXJzIGFuZCByZWxpZWQgb24gaW4tYXBwIGNoYXTigJRuZXcgc2VsbGVycyB3ZXJlIHRoZSBvbmVzIGxlZnQgZXhwb3NlZC5cIixcbiAgICAgIFwiU2FyYeKAmXMgbWVudGlvbiBvZiBhIGNhbGxlciByZWZlcmVuY2luZyBoZXIgZXllIGNvbG9yIGNvbmZpcm1lZCBvdXIgaHlwb3RoZXNpczogc29jaWFsIG1lZGlhIGJyZWFkY3J1bWJzIG1hZGUgaGFyYXNzbWVudCBwZXJzb25hbCBhbmQgZnJpZ2h0ZW5pbmcuXCIsXG4gICAgICBcIkRhdGEgYW5hbHlzaXMgYmFja2VkIHRoZSBxdWFsaXRhdGl2ZSB3b3JrLiBVc2VycyB3aG9zZSBwaG9uZSBudW1iZXJzIHdlcmUgbGlua2VkIHRvIHB1YmxpYyBzb2NpYWwgcHJvZmlsZXMgcmVwb3J0ZWQgaGFyYXNzbWVudCBkcmFtYXRpY2FsbHkgbW9yZSBvZnRlbi4gVGhvc2Ugd2hvIHN0dWNrIHRvIGluLWFwcCBjaGF0IHJhcmVseSBkaWQuXCIsXG4gICAgXSxcbiAgICBxdW90ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkxheWxhLCAzMlwiLFxuICAgICAgICByb2xlOiBcIlByb2Zlc3Npb25hbCBhcnRpc3Qgc2VsbGluZyBiZXNwb2tlIGNsb3RoaW5nXCIsXG4gICAgICAgIHRleHQ6IFwiSXQgd2FzIGluZnVyaWF0aW5nLiBJIHRvb2sgZG93biBteSBEaXZhciBhZCBob3BpbmcgdG8gc3RvcCB0aGUgY2FsbHMsIGJ1dCB0aGV5IGtlcHQgY29taW5nLiBTb21lb25lIHRvbGQgbWUgbXkgbnVtYmVyIHdhcyBpbiBhIFRlbGVncmFtIGdyb3VwLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIlNhcmEsIDI2XCIsXG4gICAgICAgIHJvbGU6IFwiRmFzaGlvbiByZXRhaWwgd29ya2VyXCIsXG4gICAgICAgIHRleHQ6IFwiT25lIGNhbGxlciBrbmV3IG15IGV5ZSBjb2xvci4gVGhleSBjbGVhcmx5IGZvdW5kIG15IEluc3RhZ3JhbSB0aHJvdWdoIHRoZSBwaG9uZSBudW1iZXIgb24gRGl2YXIuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiWmFocmEsIDI4XCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIGdyYXBoaWMgZGVzaWduZXJcIixcbiAgICAgICAgdGV4dDogXCJJIHN0b3BwZWQgbGlzdGluZyBteSBwaG9uZSBudW1iZXIuIEl0IGZlbHQgdW5wcm9mZXNzaW9uYWwsIGJ1dCBpdCB3YXMgdGhlIG9ubHkgd2F5IHRvIGF2b2lkIGhhcmFzc21lbnQuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgcG9pbnRzOiBbXG4gICAgICBcIlB1YmxpYyBwaG9uZSBudW1iZXJz4oCUbm90IHRoZSB2b2x1bWUgb2YgcmVwb3J0c+KAlHdlcmUgdGhlIHJvb3Qgb2YgZXhwb3N1cmUuXCIsXG4gICAgICBcIkV4cGVyaWVuY2VkIHNlbGxlcnMgaGFkIGFscmVhZHkgYWRhcHRlZCBieSB1c2luZyBjaGF0OyBuZXdjb21lcnMgbmVlZGVkIHByb3RlY3RpdmUgZGVmYXVsdHMuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInN0cmF0ZWd5XCIsXG4gICAgdGl0bGU6IFwiVGhlIFNvbHV0aW9uIEpvdXJuZXlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2UgcmVmcmFtZWQgdGhlIG1hbmRhdGUgZnJvbSDigJxyZWR1Y2UgcmVwb3J0c+KAnSB0byDigJxyZWR1Y2UgZXhwb3N1cmUu4oCdIFdpdGggVHJ1c3QgJiBTYWZldHksIExlZ2FsLCBTdXBwb3J0LCBhbmQgRGF0YSB0ZWFtcywgd2UgZXZhbHVhdGVkIGV2ZXJ5IHBhdGggd2UgY291bGQgdGFrZS5cIixcbiAgICBwb2ludHM6IFtcbiAgICAgIFwiT3B0aW9uIDEg4oCUIEVkdWNhdGUgdXNlcnMgYWJvdXQgaGFyYXNzZXIgdGFjdGljcy4gUmVqZWN0ZWQ6IHdvdWxkIHB1YmxpY2x5IGV4cG9zZSBvdXIgdnVsbmVyYWJpbGl0aWVzIGFuZCBkYW1hZ2UgdHJ1c3QuXCIsXG4gICAgICBcIk9wdGlvbiAyIOKAlCBGdWxsIGluLWFwcCBWb0lQLiBSZWplY3RlZDogaW5mcmFzdHJ1Y3R1cmUgY29zdCwgZGV2aWNlIGZyYWdtZW50YXRpb24sIGFuZCBpbmNvbnNpc3RlbnQgbmF0aW9ud2lkZSBjb25uZWN0aXZpdHkuXCIsXG4gICAgICBcIk9wdGlvbiAzIOKAlCBWb2ljZSByZWxheSB3aXRoIGludGVybWVkaWFyeSBudW1iZXJzLiBTZWxlY3RlZDogcHJpdmFjeS1maXJzdCwgc2NhbGFibGUsIGFuZCBjb21wYXRpYmxlIHdpdGggZXhpc3RpbmcgYmVoYXZpb3JzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZXN0aW5nXCIsXG4gICAgdGl0bGU6IFwiVGVzdGluZyAmIExlYXJuaW5nIGZyb20gRmFpbHVyZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIDMtZGF5IHBpbG90IGluIHRoZSBjbG90aGluZyBjYXRlZ29yeSBwcm9kdWNlZCBhIDU2JSBjYWxsIGZhaWx1cmUgcmF0ZS4gSW5zdGVhZCBvZiByb2xsaW5nIGJhY2ssIHdlIHRyZWF0ZWQgaXQgYXMgYSByb2FkbWFwLlwiLFxuICAgIHBvaW50czogW1xuICAgICAgXCJVc2VyLXNpZGUgaXNzdWVzOiBzZWxsZXJzIGJsb2NrZWQgdW5mYW1pbGlhciBudW1iZXJzLCBhbmQgYnV5ZXJzIHJlZGlhbGVkIGZyb20gY2FsbCBsb2dzIGluc3RlYWQgb2YgdGhlIGFwcC5cIixcbiAgICAgIFwiVGVjaG5pY2FsIGdhcHM6IHZvbHVtZSBzcGlrZXMgZXhjZWVkZWQgcHJlZGljdGlvbnMgYW5kIG51bWJlciBtYXBwaW5ncyBleHBpcmVkIHRvbyBxdWlja2x5LlwiLFxuICAgICAgXCJCdXNpbmVzcyByaXNrOiBsb25nZXIgY2FsbHMgaW5jcmVhc2VkIHRlbGVjb20gY29zdHMgYW5kIGF0dHJhY3RlZCBvcHBvcnR1bmlzdGljIHNjYW1tZXJzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWZpbmVtZW50XCIsXG4gICAgdGl0bGU6IFwiVGhlIFJlZmluZWQgU29sdXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2UgdHJhbnNsYXRlZCBldmVyeSBwaWxvdCBpbnNpZ2h0IGludG8gYSB0YW5naWJsZSBpbXByb3ZlbWVudCBiZWZvcmUgc2NhbGluZyBuYXRpb253aWRlLlwiLFxuICAgIHBvaW50czogW1xuICAgICAgXCJCaWRpcmVjdGlvbmFsIG1hcHBpbmcgc28gc2VsbGVycyBjb3VsZCBjYWxsIGJ1eWVycyBiYWNrIHdpdGhvdXQgZXhwb3NpbmcgcmVhbCBudW1iZXJzLlwiLFxuICAgICAgXCJFeHRlbmRlZCBtYXBwaW5nIHdpbmRvd3MgZnJvbSAyMCBzZWNvbmRzIHRvIDE1IG1pbnV0ZXMgdG8gbWluaW1pc2UgZHJvcHBlZCBjb25uZWN0aW9ucy5cIixcbiAgICAgIFwiVm9pY2UgcHJvbXB0cyB0aGF0IGFubm91bmNlZCDigJxUaGlzIGlzIGEgc2VjdXJlIGNhbGwgZnJvbSBEaXZhcuKApuKAnSB0byByZWR1Y2UgY29uZnVzaW9uIGFuZCBkZXRlciBzY2FtbWVycy5cIixcbiAgICAgIFwiQSBwb29sIG9mIDEwMCBpbnRlcm1lZGlhcnkgbnVtYmVycyBhc3NpZ25lZCBwZXIgYnV5ZXItc2VsbGVyIHBhaXIgdG8gYXZvaWQgcmV1c2UgYW5kIGJsb2NraW5nLlwiLFxuICAgICAgXCJTZWN1cmUgY2FsbCBoaXN0b3J5IGluIGFkIG1hbmFnZW1lbnQgcGx1cyBjaGF0IGludGVncmF0aW9uIHNvIGxlZ2l0aW1hdGUgY29udGFjdHMgY291bGQgY29udGludWUuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImltcGFjdFwiLFxuICAgIHRpdGxlOiBcIkltcGFjdFwiLFxuICAgIGJvZHk6IFtcbiAgICAgIFwiQWZ0ZXIgcm9sbG91dCwgaGFyYXNzbWVudCByZXBvcnRzIGRyb3BwZWQgZHJhbWF0aWNhbGx5IGFuZCBzZWxsZXJzIGZlbHQgc2FmZSBlbm91Z2ggdG8ga2VlcCBsaXN0aW5ncyBsaXZlLiBNb2RlcmF0aW9uIHRlYW1zIHJlY292ZXJlZCBob3VycyBlYWNoIHdlZWsgdGhhdCB3ZXJlIHByZXZpb3VzbHkgc3BlbnQgb24gcmVhY3RpdmUgdGlja2V0cy5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSGFyYXNzbWVudCByZXBvcnRzXCIsXG4gICAgICAgIHZhbHVlOiBcIuKWvCA2MCVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDggd2Vla3Mgb2YgbGF1bmNoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBZCBkZWxldGlvbnNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDI1JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGZXdlciBzZWxsZXJzIGxlYXZpbmcgdGhlIHBsYXRmb3JtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTdXBwb3J0IHRpY2tldHNcIixcbiAgICAgICAgdmFsdWU6IFwi4pa8IDE4JVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb3JlIHRpbWUgZm9yIHByb2FjdGl2ZSBtb25pdG9yaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsZWFybmluZ3NcIixcbiAgICB0aXRsZTogXCJLZXkgTGVhcm5pbmdzXCIsXG4gICAgcG9pbnRzOiBbXG4gICAgICBcIlRoZSBvYnZpb3VzIHByb2JsZW0gaXMgcmFyZWx5IHRoZSByZWFsIHByb2JsZW3igJRmb2N1cyBvbiBleHBvc3VyZSwgbm90IGp1c3QgcmVwb3J0cy5cIixcbiAgICAgIFwiVXNlcnMgYXJlIGFscmVhZHkgZGVzaWduaW5nIHdvcmthcm91bmRzOyBvYnNlcnZpbmcgdGhlbSBsZWQgZGlyZWN0bHkgdG8gdGhlIHJpZ2h0IHNvbHV0aW9uLlwiLFxuICAgICAgXCJUcmVhdCBmYWlsdXJlIGFzIHNpZ25hbC4gVGhlIDU2JSBwaWxvdCBmYWlsdXJlIHJldmVhbGVkIGV4YWN0bHkgd2hhdCB0byBmaXguXCIsXG4gICAgICBcIkl0ZXJhdGUgcnV0aGxlc3NseSBhbmQgcGFpciBxdWFsaXRhdGl2ZSBpbnNpZ2h0IHdpdGggcmVhbC10aW1lIG1vbml0b3JpbmcuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlZmxlY3Rpb25cIixcbiAgICB0aXRsZTogXCJSZWZsZWN0aW9uXCIsXG4gICAgYm9keTogW1xuICAgICAgXCJUaGlzIHByb2plY3QgcmVpbmZvcmNlZCBteSBiZWxpZWYgdGhhdCBzb2x2aW5nIGhhcmQgcHJvYmxlbXMgc3RhcnRzIHdpdGggdW5kZXJzdGFuZGluZyBiZWhhdmlvdXIuIEJ5IGJsZW5kaW5nIHJlc2VhcmNoLCBkYXRhLCBhbmQgcmFwaWQgaXRlcmF0aW9uLCB3ZSBidWlsdCBhIHNhZmV0eSBsYXllciB0aGF0IHN0aWxsIHByb3RlY3RzIG1pbGxpb25zIG9mIHBlb3BsZSBlYWNoIHdlZWsuIFRoZSBoYXJhc3NtZW50IHByb2JsZW0gbWF5IG5ldmVyIGRpc2FwcGVhciBlbnRpcmVseSwgYnV0IERpdmFyIGlzIHNpZ25pZmljYW50bHkgc2FmZXIgZm9yIHRoZSB1c2VycyB3aG8gbmVlZCBpdCBtb3N0LlwiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2V0YXJlT3ZlcnZpZXcgPSB7XG4gIHRpdGxlOlxuICAgIFwiVHVybmluZyBPbmUtVGltZSBWaXNpdG9ycyBpbnRvIExpZmVsb25nIEN1c3RvbWVycyBhdCBTZXRhcmUgQXZhbFwiLFxuICBtZXRhOiBbXG4gICAgeyBsYWJlbDogXCJSb2xlXCIsIHZhbHVlOiBcIlByb2R1Y3QgRGVzaWduZXJcIiB9LFxuICAgIHsgbGFiZWw6IFwiVGltZWxpbmVcIiwgdmFsdWU6IFwiRmViIDIwMjEg4oCTIEphbiAyMDIyXCIgfSxcbiAgICB7IGxhYmVsOiBcIkltcGFjdFwiLCB2YWx1ZTogXCJEb3VibGVkIHJldGFpbmVkIHJldmVudWUgaW4gNiBtb250aHNcIiB9LFxuICBdLFxuICBoZXJvSW1hZ2U6IHJlc29sdmVBc3NldChzZXRhcmVBdmFsSW50ZXJ2aWV3QXNzZXQpLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldGFyZVNlY3Rpb25zOiBDYXNlU3R1ZHlTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb250ZXh0XCIsXG4gICAgdGl0bGU6IFwiQ29udGV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTZXRhcmUgQXZhbCBpcyB0aGUgZGlnaXRhbCBhcm0gb2YgSXJhbidzIGxhcmdlc3QgdGVsZWNvbS4gV2UgcG93ZXJlZCBmaW50ZWNoIHNlcnZpY2VzLCBVU1NEIGV4cGVyaWVuY2VzLCBhbmQgbW9iaWxlIHZhbHVlLWFkZGVkIHNlcnZpY2VzIG5hdGlvbi13aWRlLiBHcm93dGggaGFkIHBsYXRlYXVlZOKAlG91ciBmdW5uZWwgbGVha2VkIGFmdGVyIHRoZSBmaXJzdCBwdXJjaGFzZS5cIixcbiAgICBtZXRyaWNzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVzZXIgQmFzZVwiLFxuICAgICAgICB2YWx1ZTogXCI2MEsrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhaWx5IHN1YnNjcmliZXJzIGFjcm9zcyBuYXRpb253aWRlIHNlcnZpY2VzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJSZXRlbnRpb24gR29hbFwiLFxuICAgICAgICB2YWx1ZTogXCJ4MlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgOTAtZGF5IHJldGFpbmVkIHJldmVudWVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNoYWxsZW5nZVwiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZVwiLFxuICAgIHBvaW50czogW1xuICAgICAgXCJBY3RpdmF0aW9uIGZsb3cgdHJlYXRlZCBldmVyeSBzZWdtZW50IGlkZW50aWNhbGx5LCBpZ25vcmluZyB1c2FnZSBpbnRlbnQuXCIsXG4gICAgICBcIlJlZmVycmFsIGxvb3BzIGV4aXN0ZWQgYnV0IHdlcmUgdW5yZXdhcmRpbmfigJR1c2VycyBjaHVybmVkIGFmdGVyIGZpcnN0IGJlbmVmaXQuXCIsXG4gICAgICBcIlRlYW1zIHNoaXBwZWQgaW4gc2lsb3M7IG5vIHNoYXJlZCBleHBlcmltZW50IGNhZGVuY2Ugb3Igc3VjY2VzcyBtZXRyaWNzLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbnNpZ2h0c1wiLFxuICAgIHRpdGxlOiBcIldoYXQgV2UgTGVhcm5lZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaHJvdWdoIGludGVydmlld3MsIGZ1bm5lbCBhbmFseXRpY3MsIGFuZCBzZXJ2aWNlLWJsdWVwcmludCBtYXBwaW5nLCB3ZSBzdXJmYWNlZCB0aGUgdW5kZXJseWluZyBibG9ja2Vycy5cIixcbiAgICBwb2ludHM6IFtcbiAgICAgIFwiVXNlcnMgd2FudGVkIHRhbmdpYmxlIG1pbGVzdG9uZXPigJR3aXRob3V0IHRoZW0sIHRoZSBwcm9kdWN0IGZlbHQgdHJhbnNhY3Rpb25hbC5cIixcbiAgICAgIFwiSGlnaC1pbnRlbnQgY29ob3J0cyByZXNwb25kZWQgdG8gZWR1Y2F0aW9uYWwgbnVkZ2VzIG1vcmUgdGhhbiBwcm9tb3Rpb25zLlwiLFxuICAgICAgXCJJbnRlcm5hbCB0ZWFtcyBsYWNrZWQgdmlzaWJpbGl0eSBpbnRvIGV4cGVyaW1lbnQgb3V0Y29tZXMsIHNsb3dpbmcgaXRlcmF0aW9uLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2x1dGlvblwiLFxuICAgIHRpdGxlOiBcIkV4cGVyaWVuY2UgUmUtQXJjaGl0ZWN0dXJlXCIsXG4gICAgcG9pbnRzOiBbXG4gICAgICBcIkludHJvZHVjZWQgbGlmZWN5Y2xlIG1lc3NhZ2luZyB0YWlsb3JlZCB0byBpbnRlbnQgKGV4cGxvcmVycywgZWFybmVycywgbG95YWxpc3RzKS5cIixcbiAgICAgIFwiU2hpcHBlZCBhIGdhbWlmaWVkIHJlZmVycmFsIGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVkIHByb2dyZXNzIGFuZCB1bmxvY2tlZCB0aWVyZWQgcmV3YXJkcy5cIixcbiAgICAgIFwiU3Rvb2QgdXAgYSBjcm9zcy1mdW5jdGlvbmFsIGdyb3d0aCBndWlsZCB3aXRoIGEgMi13ZWVrIGV4cGVyaW1lbnQgY2FkZW5jZS5cIixcbiAgICBdLFxuICAgIG1ldHJpY3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0YWluZWQgUmV2ZW51ZVwiLFxuICAgICAgICB2YWx1ZTogXCIyw5dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2l0aGluIDYgbW9udGhzIG9mIHN0YWdlZCByb2xsb3V0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEYWlseSBBY3RpdmUgVXNlcnNcIixcbiAgICAgICAgdmFsdWU6IFwiKzYwS1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWZlcnJhbCBwcm9ncmFtIHBhcnRpY2lwYW50cyBiZWNhbWUgZGFpbHkgYWN0aXZlc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicm9sZVwiLFxuICAgIHRpdGxlOiBcIk15IFJvbGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSBvcGVyYXRlZCBhcyB0aGUgZW5kLXRvLWVuZCBwcm9kdWN0IGRlc2lnbmVyLCBicmlkZ2luZyBwcm9kdWN0LCBtYXJrZXRpbmcsIGN1c3RvbWVyIHN1Y2Nlc3MsIGFuZCBlbmdpbmVlcmluZy5cIixcbiAgICBwb2ludHM6IFtcbiAgICAgIFwiUmFuIHdlZWtseSBjby1jcmVhdGlvbiByaXR1YWxzIHRvIGFsaWduIHN0YWtlaG9sZGVycyBvbiBleHBlcmltZW50IHByaW9yaXRpZXMuXCIsXG4gICAgICBcIkVzdGFibGlzaGVkIGRlc2lnbiBzeXN0ZW0gZm91bmRhdGlvbnMgYWRvcHRlZCBieSB0ZWFtcyBiZXlvbmQgZ3Jvd3RoLlwiLFxuICAgICAgXCJTZXQgdXAgYW5hbHl0aWNzIGRhc2hib2FyZHMgdGhhdCBwYWlyZWQgcXVhbGl0YXRpdmUgbm90ZXMgd2l0aCBmdW5uZWwgS1BJcy5cIixcbiAgICBdLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBhdXRob3I6IFwiSGVhZCBvZiBHcm93dGhcIixcbiAgICAgICAgcm9sZTogXCJTZXRhcmUgQXZhbFwiLFxuICAgICAgICB0ZXh0OiBcIk1hc2loIGhlbHBlZCB1cyBzaGlmdCBmcm9tIG9uZS1vZmYgY2FtcGFpZ25zIHRvIGEgcHJvZHVjdCBtaW5kc2V0LiBUaGUgbGlmZWN5Y2xlIG1vZGVsIGFuZCBleHBlcmltZW50IGNhZGVuY2Ugc3RpbGwgZ3VpZGUgaG93IHdlIGJ1aWxkIHRvZGF5LlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBSUEsSUFBZSx5REFBMkIsdUJBQUssUUFBUTtBQUFBLEVBQ3JELEdBQUc7QUFDTCxDQUFDLEdBQUcsa0JBQWtCOzs7O0FDRnRCLElBQU0sdUJBQXVCLEdBQUcsY0FBNkM7QUFBQSxFQUMzRSxNQUFNLFFBQVEsU0FBUztBQUFBLEVBRXZCLHVCQUNFLHVCQXlJRSxjQXpJRjtBQUFBLElB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QTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxpQkFBaUI7QUFBQSxFQUM1QixPQUNFO0FBQUEsRUFDRixNQUFNO0FBQUEsSUFDSixFQUFFLE9BQU8sUUFBUSxPQUFPLG1CQUFtQjtBQUFBLElBQzNDLEVBQUUsT0FBTyxZQUFZLE9BQU8sc0JBQXFCO0FBQUEsSUFDakQsRUFBRSxPQUFPLFVBQVUsT0FBTyx1Q0FBdUM7QUFBQSxFQUNuRTtBQUFBLEVBQ0EsV0FBVyxhQUFhLHFDQUF3QjtBQUNsRDtBQUVPLElBQU0saUJBQXFDO0FBQUEsRUFDaEQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUEsSUFDRixRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgImRlYnVnSWQiOiAiMUQ5NDA2QkY1QjVBMDA4RjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
