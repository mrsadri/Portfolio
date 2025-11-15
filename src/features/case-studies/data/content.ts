import divarSecureCallListingAsset from "../../../../images/divar-secure-call-listing.png";
import setareAvalInterviewAsset from "../../../../images/setare-aval-interview-session.avif";
import setareAvalUserFlowAsset from "../../../../images/setare-aval-user-flow.webp";
import { createImageResource } from "@shared/utils/assets";
import type { CaseStudyEntry, CaseStudyOverview, CaseStudySection } from "../types";

export const divarOverview: CaseStudyOverview = {
  title:
    "Solving Harassment at Scale: How I Protected 2.1M Users on Iran's Largest Marketplace",
  subtitle:
    "We reduced harassment incidents by 60% inside Divar’s clothing category by building a privacy-first calling experience that now protects 2.1M weekly users.",
  meta: [
    { label: "Role", value: "Senior UX Designer · Trust & Safety" },
    { label: "Timeline", value: "May – June 2023" },
    { label: "Team", value: "Design, Trust & Safety, Legal, Engineering, Support" },
  ],
  stats: [
    { value: "▼60%", label: "Harassment reports" },
    { value: "2.1M", label: "Weekly callers safeguarded" },
    { value: "▼18%", label: "Safety ticket volume" },
  ],
  heroImage: createImageResource(
    import.meta.url,
    divarSecureCallListingAsset,
    "Divar secure call listings interface",
    { width: 1200, height: 630 },
  ),
};

export const divarSections: CaseStudySection[] = [
  {
    id: "context",
    title: "Context",
    summary:
      "Divar is Iran’s largest classifieds marketplace with 53M+ weekly users. Trust and safety incidents can collapse entire revenue categories if left unchecked.",
    metrics: [
      { label: "Marketplace scale", value: "53M+", description: "Weekly buyers & sellers" },
      { label: "Voice dependence", value: "2.1M", description: "Calls placed every week" },
      { label: "Ad consumption", value: "6B+", description: "Monthly ad views" },
    ],
    highlights: [
      "Clothing listings—mostly women-led—were hit hardest by abuse.",
      "Manual moderation couldn’t keep up; liquidity and trust were in free fall.",
    ],
  },
  {
    id: "crisis",
    title: "The Crisis",
    summary:
      "Customer care centres were flooded with harassment reports. Sellers deleted listings or churned entirely, fearing repeat incidents.",
    bullets: [
      "Harassers scraped phone numbers from ads and circulated them in private Telegram groups.",
      "Even after victims deleted listings, the calls continued because numbers were already exposed.",
      "Without intervention, Divar risked losing a category that anchored daily engagement.",
    ],
    quotes: [
      {
        author: "Layla, 32",
        role: "Professional artist selling bespoke clothing",
        text: "It was infuriating. I took down my Divar ad hoping to stop the calls, but they kept coming. Someone told me my number was in a Telegram group.",
      },
    ],
  },
  {
    id: "investigation",
    title: "Finding the Real Problem",
    summary:
      "I interviewed harassed sellers and analysed behavioural data to understand how exposure scaled. The breakthrough came from connecting qualitative stories to quantitative signals.",
    body: [
      "Patterns emerged quickly: harassers saved posted numbers, cross-referenced them on WhatsApp and Instagram, and only then began the abuse. Experienced sellers had already stopped sharing numbers and relied on in-app chat—new sellers were the ones left exposed.",
      "Sara’s mention of a caller referencing her eye color confirmed our hypothesis: social media breadcrumbs made harassment personal and frightening.",
      "Data analysis backed the qualitative work. Users whose phone numbers were linked to public social profiles reported harassment dramatically more often. Those who stuck to in-app chat rarely did.",
    ],
    quotes: [
      {
        author: "Sara, 26",
        role: "Fashion retail worker",
        text: "One caller knew my eye color. They clearly found my Instagram through the phone number on Divar.",
      },
      {
        author: "Zahra, 28",
        role: "Freelance graphic designer",
        text: "I stopped listing my phone number. It felt unprofessional, but it was the only way to avoid harassment.",
      },
    ],
    highlights: [
      "Public phone numbers were the root cause of exposure, not the number of reports.",
      "Experienced sellers had already adapted by using in-app chat; new sellers needed protective defaults.",
    ],
  },
  {
    id: "strategy",
    title: "The Solution Journey",
    summary:
      "We reframed success from “reduce reports” to “reduce exposure.” With Trust & Safety, Legal, Support, and Data, we evaluated every path and stress-tested edge cases before committing.",
    bullets: [
      "Educating users about harasser tactics would erode trust and discourage listings.",
      "Full VoIP was cost-prohibitive, fragile across device types, and inaccessible to 47% of legacy Android users.",
      "Voice relay with intermediary numbers protected sellers without changing purchase behaviour—this became the north star.",
    ],
  },
  {
    id: "testing",
    title: "Testing & Learning from Failure",
    summary:
      "A 3-day pilot in the clothing category resulted in a 56% call failure rate. Instead of reverting, we treated every failure as a design requirement.",
    bullets: [
      "User behaviour: sellers blocked unfamiliar numbers; buyers redialled from call logs; repeat conversations broke mapping windows.",
      "Technical load: call volume spiked beyond forecasts and number pools were exhausted.",
      "Business risk: longer calls inflated telecom costs and anonymised numbers attracted opportunistic scammers.",
    ],
  },
  {
    id: "refinement",
    title: "The Refined Solution",
    summary:
      "We translated every pilot insight into product and platform improvements before scaling nationwide.",
    bullets: [
      "Bidirectional mapping let sellers reconnect without exposing real numbers.",
      "Extended mapping windows from 20 seconds to 15 minutes reduced dropped calls.",
      "Voice prompts (“This is a secure call from Divar…”) set expectations and deterred scammers.",
      "A pool of 100 intermediary numbers assigned per buyer-seller pair prevented reuse and blocking.",
      "Secure call history, chat integration, and ad management logs kept legitimate relationships intact.",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    body: [
      "After rollout, harassment reports dropped dramatically and sellers felt safe enough to keep listings live. Moderation teams recovered hours each week that were previously spent on reactive tickets.",
    ],
    metrics: [
      {
        label: "Harassment reports",
        value: "▼ 60%",
        description: "Within 8 weeks of launch",
      },
      {
        label: "Ad deletions",
        value: "▼ 25%",
        description: "Fewer sellers leaving the platform",
      },
      {
        label: "Support tickets",
        value: "▼ 18%",
        description: "More time for proactive monitoring",
      },
    ],
  },
  {
    id: "learnings",
    title: "Key Learnings",
    bullets: [
      "The obvious problem is rarely the real one—exposure, not reports, was the root.",
      "Users were already designing workarounds; observing them revealed the right defaults.",
      "Failure is signal. The 56% pilot failure generated a backlog of actionable requirements.",
      "Pair qualitative insight with real-time monitoring to keep abuse vectors in check.",
    ],
  },
  {
    id: "reflection",
    title: "Reflection",
    body: [
      "This project reinforced my belief that solving hard problems starts with understanding behaviour. By blending research, data, and rapid iteration, we built a safety layer that still protects millions of people each week. The harassment problem may never disappear entirely, but Divar is significantly safer for the users who need it most.",
    ],
  },
];

export const setareOverview: CaseStudyOverview = {
  title:
    "Turning One-Time Visitors into Lifelong Customers at Setare Aval",
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "Feb 2021 – Jan 2022" },
    { label: "Impact", value: "Doubled retained revenue in 6 months" },
  ],
  stats: [
    {
      value: "2×",
      label: "Retained revenue",
      description: "Achieved within the first 6 months of rollout",
    },
    {
      value: "+60K",
      label: "Daily active users",
      description: "Referral cohort converted to high-intent DAUs",
    },
  ],
  heroImage: createImageResource(
    import.meta.url,
    setareAvalInterviewAsset,
    "Setare Aval customer engagement interview session",
    { width: 1200, height: 630 },
  ),
};

export const setareSections: CaseStudySection[] = [
  {
    id: "context",
    title: "Context",
    summary:
      "Setare Aval is the digital arm of Iran's largest telecom. We powered fintech services, USSD experiences, and mobile value-added services nation-wide. Growth had plateaued—our funnel leaked after the first purchase.",
    metrics: [
      {
        label: "User Base",
        value: "60K+",
        description: "Daily subscribers across nationwide services",
      },
      {
        label: "Retention Goal",
        value: "x2",
        description: "Double 90-day retained revenue",
      },
    ],
  },
  {
    id: "challenge",
    title: "Challenge",
    bullets: [
      "Activation flow treated every segment identically, ignoring usage intent.",
      "Referral loops existed but were unrewarding—users churned after first benefit.",
      "Teams shipped in silos; no shared experiment cadence or success metrics.",
    ],
  },
  {
    id: "insights",
    title: "What We Learned",
    summary:
      "Through interviews, funnel analytics, and service-blueprint mapping, we surfaced the underlying blockers.",
    bullets: [
      "Users wanted tangible milestones—without them, the product felt transactional.",
      "High-intent cohorts responded to educational nudges more than promotions.",
      "Internal teams lacked visibility into experiment outcomes, slowing iteration.",
    ],
  },
  {
    id: "solution",
    title: "Experience Re-Architecture",
    bullets: [
      "Introduced lifecycle messaging tailored to intent (explorers, earners, loyalists).",
      "Shipped a gamified referral journey that celebrated progress and unlocked tiered rewards.",
      "Stood up a cross-functional growth guild with a 2-week experiment cadence.",
    ],
    metrics: [
      {
        label: "Retained Revenue",
        value: "2×",
        description: "Within 6 months of staged rollout",
      },
      {
        label: "Daily Active Users",
        value: "+60K",
        description: "Referral program participants became daily actives",
      },
    ],
  },
  {
    id: "role",
    title: "My Role",
    summary:
      "I operated as the end-to-end product designer, bridging product, marketing, customer success, and engineering.",
    bullets: [
      "Ran weekly co-creation rituals to align stakeholders on experiment priorities.",
      "Established design system foundations adopted by teams beyond growth.",
      "Set up analytics dashboards that paired qualitative notes with funnel KPIs.",
    ],
    quotes: [
      {
        author: "Head of Growth",
        role: "Setare Aval",
        text: "Masih helped us shift from one-off campaigns to a product mindset. The lifecycle model and experiment cadence still guide how we build today.",
      },
    ],
  },
];

export const setareYekOverview: CaseStudyOverview = {
  title:
    "From 4% to 47%: How I Turned a Failing Feature Into a Core Product Value",
  subtitle:
    "Despite millions of active users, only 4% of payments were bills. Session recordings showed users were trying but failing. I led the complete redesign from research through launch, increasing adoption to 47%.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Timeline", value: "2022 – 2023" },
    { label: "Company", value: "Setare Aval (SetareYek app)" },
    { label: "Constraint", value: "Sole designer—balanced deep research with rapid execution" },
  ],
  stats: [
    {
      value: "4% → 47%",
      label: "Adoption rate",
      description: "10x growth in bill payment share",
    },
    {
      value: "80%",
      label: "Drop reduction",
      description: "After Version 2 performance fixes",
    },
    {
      value: "1M+",
      label: "Users",
      description: "SetareYek platform scale",
    },
  ],
  heroImage: createImageResource(
    import.meta.url,
    setareAvalUserFlowAsset,
    "SetareYek bill payment user flow",
    { width: 1200, height: 630 },
  ),
};

export const setareYekSections: CaseStudySection[] = [
  {
    id: "challenge",
    title: "The Challenge",
    summary:
      "Despite millions of active users, only 4% of payments were bills. Session recordings showed users were trying but failing.",
    bullets: [
      "96% of payments were not bills",
      "High drop-off rates at specific steps",
      "Users spending unusually long on single screens",
      "Many abandoned attempts before payment confirmation",
    ],
    quotes: [
      {
        author: "Key question",
        role: "Research insight",
        text: "People pay bills every month—it's not optional. So why are they avoiding our app?",
      },
    ],
    highlights: [
      "This wasn't about adding features. Something fundamental was broken.",
    ],
  },
  {
    id: "about-setareyek",
    title: "About SetareYek",
    summary:
      "Iran's largest fintech platform serving millions of users for everyday financial transactions.",
    highlights: [
      "Top 10 Finance App",
      "Market Leader",
      "10M+ Active Users",
    ],
    metrics: [
      {
        label: "Monthly Active Users",
        value: "10.6M+",
        description: "Nationwide fintech platform",
      },
      {
        label: "Total Installs",
        value: "2.36M+",
        description: "Growing user base",
      },
    ],
    body: [
      "The opportunity: Bill payment is a high-frequency, high-stress task that every household faces monthly. If we could solve it well, we'd become indispensable.",
      "The problem: We had the feature, but almost nobody used it.",
    ],
  },
  {
    id: "role",
    title: "My Role",
    summary:
      "Senior Product Designer—led complete redesign from research through launch.",
    bullets: [
      "User research & synthesis",
      "UX/UI design",
      "Prototyping & testing",
      "Collaboration on implementation & rollout",
    ],
    highlights: [
      "Constraint: Sole designer—balanced deep research with rapid execution",
    ],
  },
  {
    id: "discovery",
    title: "Discovery",
    shortTitle: "Discovery",
    eyebrow: "What Users Actually Needed",
    summary:
      "Multi-method research combining qualitative interviews, contextual inquiry, digital behavior analysis, and quantitative patterns.",
    bullets: [
      "Qualitative: In-depth interviews with building managers, heads of households, and everyday users",
      "Contextual inquiry: Observing bill payment in real contexts",
      "Ethnographic details: Studying a building manager's physical notebook",
      "Digital behavior: Session recordings, app store reviews, social media sentiment",
      "Quantitative: Drop-off analysis and behavior patterns",
    ],
  },
  {
    id: "personas",
    title: "Personas",
    shortTitle: "Personas",
    eyebrow: "Two Core Personas",
    summary:
      "Two distinct personas emerged with different needs driving every design decision.",
    bullets: [
      "The Building Manager (Age 55+): Manages utilities for entire apartment building. Needs official, shareable documentation. Zero tolerance for ambiguity.",
      "The Head of Household: Pays all family bills monthly. Needs to avoid re-entering 13-digit codes every month. Constantly forgets due dates.",
    ],
    quotes: [
      {
        author: "Building Manager",
        role: "Age 55+",
        text: "I make photocopies of every receipt and give them to residents. I need proof that it's paid.",
      },
      {
        author: "Head of Household",
        role: "Pays all family bills monthly",
        text: "Entering this 13-digit code every single month is torture.",
      },
    ],
  },
  {
    id: "insights",
    title: "Insights",
    shortTitle: "Insights",
    eyebrow: "The Breakthrough Insights",
    summary:
      "Three insights fundamentally changed our approach.",
    bullets: [
      "Insight #1: Users weren't confused about coverage—they were confused about us. They had no idea which bills we supported, forcing trial-and-error that destroyed trust.",
      "Insight #2: The receipt was everything. Users needed an official document they could show to family, share with residents, or present to landlords. This wasn't a 'nice-to-have'—it was the core emotional need.",
      "Insight #3: Bill payment isn't a one-time task—it's a recurring cycle. Our flow treated every payment like a new transaction, forcing users to re-enter everything monthly.",
    ],
    highlights: [
      "The receipt wasn't decoration—it was the entire value proposition",
      "People pay the same bills repeatedly. They need a system that remembers",
    ],
  },
  {
    id: "philosophy",
    title: "Design Philosophy",
    summary:
      "Digitize what people already do in the physical world—then make it 10x better.",
    bullets: [
      "Keep notebooks of bill IDs → We built a digital bill list",
      "Set calendar reminders → We built smart notifications",
      "Make photocopies of receipts → We created shareable official receipts",
    ],
    highlights: [
      "The experience had to feel natural from day one, not like learning new software",
    ],
  },
  {
    id: "solutions",
    title: "The Solutions",
    summary:
      "Six interconnected solutions addressing core user needs.",
    bullets: [
      "Saved Bills & One-Tap Updates: Register a bill once, use it forever. 'Check for new amount' button fetches latest bill instantly—no more re-entering 13-digit codes",
      "Digital Bill Management Hub: All bills in one organized list with status labels (Paid, Pending, Overdue). Backward-compatible: returning users saw history immediately",
      "Smart Reminders: Set custom reminders for each bill with push notifications before due dates",
      "QR/Barcode Scanning: Instant bill entry via camera—critical for older users and busy personas",
      "Immediate Transparency: Supported bill providers shown upfront with logos. Clear guidance on what we can and can't process—no more trial-and-error",
      "Official, Shareable Receipts: PDF-quality receipts with all legal details. One-tap sharing via any channel—built specifically for the 'proof' requirement",
    ],
  },
  {
    id: "failure",
    title: "Learning from Failure",
    shortTitle: "Learning from Failure",
    eyebrow: "Version 1: The Failure That Made Everything Better",
    summary:
      "Version 1 launched and failed within 48 hours. Bill payments dropped 80%. We rolled back immediately.",
    body: [
      "What happened: Bills took 8-10 seconds to load (we were fetching everything automatically). No loading states, no skeleton UI, no progress indicators. Users saw blank screens.",
    ],
    bullets: [
      "What went wrong: Great UX design can't save poor technical performance. We skipped realistic latency testing, didn't simulate worst-case network conditions, prioritized automation over user control",
      "What changed: Switched to manual 'Check Amount' buttons (instant feedback), added lazy loading + skeleton states everywhere, implemented comprehensive pre-launch technical testing, created new company-wide standards for performance testing",
    ],
    highlights: [
      "This failure became the most valuable part of the project",
    ],
  },
  {
    id: "version2",
    title: "Version 2",
    shortTitle: "Version 2",
    eyebrow: "The Launch That Worked",
    summary:
      "Armed with lessons from failure, we shipped a stable, fast, trustworthy experience.",
    bullets: [
      "Manual control: Users trigger updates when ready",
      "Instant feedback: Loading states for every action",
      "Backward compatibility: Zero learning curve for returning users",
      "Official receipts: Solved the core emotional need",
      "Smart reminders: Addressed forgetfulness",
      "Clear communication: Built confidence from screen one",
    ],
  },
  {
    id: "impact",
    title: "Results",
    shortTitle: "Results",
    eyebrow: "Business Impact",
    summary:
      "4% → 47% adoption rate. That's 10x growth in bill payment share.",
    body: [
      "Bill payment went from a neglected feature to one of the app's primary value propositions.",
    ],
    bullets: [
      "Trust: Official receipts and clear communication",
      "Ease: One-time setup, recurring use",
      "Reliability: Fast, stable, predictable",
      "Alignment: Matched real-world behavior",
    ],
    metrics: [
      {
        label: "Adoption rate",
        value: "4% → 47%",
        description: "10x growth in bill payment share",
      },
    ],
  },
  {
    id: "learnings",
    title: "Learnings",
    shortTitle: "Learnings",
    eyebrow: "Key Takeaways",
    summary:
      "Five lessons from this project.",
    bullets: [
      "Design doesn't exist in isolation: Even perfect UX fails without technical performance",
      "Emotional needs = Functional needs: The receipt wasn't decoration—it was the entire value proposition",
      "Real behavior > Assumptions: Users showed us what they needed. We listened",
      "Backward compatibility is trust: Especially in financial products, familiarity = confidence",
      "Failed launches can be the best learning: Owning mistakes and iterating fast built a stronger product and process",
    ],
  },
  {
    id: "organizational",
    title: "Organizational Impact",
    shortTitle: "Impact",
    summary:
      "Beyond the product, this project changed how we work.",
    bullets: [
      "Mandatory pre-launch performance testing",
      "Staging environments with real-world data",
      "Required loading/skeleton states for all heavy operations",
      "Shared standards across design and engineering",
    ],
    highlights: [
      "These changes improved every feature that came after",
    ],
  },
];

export const caseStudyEntries: ReadonlyArray<CaseStudyEntry> = [
  {
    id: "divar-secure-call",
    title: "Divar Secure Call",
    excerpt:
      "Reduced harassment by 60% for 2.1M weekly callers through a privacy-first calling layer inside Iran's largest marketplace.",
    focus: "Trust & Safety",
    path: "/case-studies/divar-secure-call",
  },
  {
    id: "setare-aval-engagement",
    title: "Setare Aval Engagement",
    excerpt:
      "Re-architected lifecycle journeys that doubled retained revenue and converted referral cohorts into 60K+ daily active users.",
    focus: "Retention & Growth",
    path: "/case-studies/setare-aval-engagement",
  },
  {
    id: "setare-yek-bill-payment",
    title: "SetareYek Bill Payment",
    excerpt:
      "Increased bill payment adoption from 4% to 47% at Setare Aval's SetareYek app by solving trust, transparency, and recurring workflow challenges.",
    focus: "Product Design & Growth",
    path: "/case-studies/setare-yek-bill-payment",
  },
];


