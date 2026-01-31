import setareAvalUserFlowAsset from "../../../../images/setare-aval-user-flow.webp";
import { createImageResource } from "@shared/utils/assets";
import type { CaseStudyOverview, CaseStudySection } from "../types";

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

