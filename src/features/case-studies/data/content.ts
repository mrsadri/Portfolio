import divarSecureCallListingAsset from "../../../../images/divar-secure-call-listing.png";
import divarIntroductionAsset from "../../../../images/divar-introduction.png";
import divarThinkingProcessAsset from "../../../../images/divar-thinking-process.png";
import divarGraph1Asset from "../../../../images/divar-graph-1.png";
import divarGraph2Asset from "../../../../images/divar-graph-2.png";
import divarGraph3Asset from "../../../../images/divar-graph-3.png";
import divarCodeSample1Asset from "../../../../images/divar-code-sample-1.png";
import divarCodeSample2Asset from "../../../../images/divar-code-sample-2.png";
import divarInterviewLeftAsset from "../../../../images/divar-interview-left.png";
import divarInterviewRightAsset from "../../../../images/divar-interview-right.png";
import setareAvalInterviewAsset from "../../../../images/setare-aval-interview-session.avif";
import setareAvalUserFlowAsset from "../../../../images/setare-aval-user-flow.webp";
import { createImageResource } from "@shared/utils/assets";
import type { CaseStudyEntry, CaseStudyOverview, CaseStudySection } from "../types";

export const divarOverview: CaseStudyOverview = {
  title: "Solving Harassment at Scale",
  subtitle: "How I Protected 2.1M Users on Iran's Largest Marketplace",
  meta: [
    { label: "My Role", value: "Senior UX Designer" },
    { label: "Timeline", value: "May – June 2023" },
  ],
  stats: [
    { value: "▼60%", label: "Harassment reports", description: "Within 8 weeks of launch" },
    { value: "2.1M", label: "Weekly callers safeguarded", description: "Protected by secure call system" },
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
    id: "platform",
    title: "The Platform",
    shortTitle: "Context",
    summary: "What is Divar Classified Ads?",
    image: createImageResource(
      import.meta.url,
      divarIntroductionAsset,
      "Divar platform introduction showing classified ads interface",
      { width: 1626, height: 885 },
    ),
    metrics: [
      { label: "Weekly buyers & sellers", value: "53M+", description: "" },
      { label: "Annual Ads Published", value: "180M+", description: "" },
      { label: "Annual Ad Viewed", value: "72B+", description: "" },
    ],
    body: [
      "Divar is Iran's largest and most popular online classified ads platform, launched in 2012, where individuals and businesses can easily buy, sell, or offer services directly to each other. It covers a wide range of categories such as real estate, vehicles, jobs, services, electronics, and personal items, with a strong focus on local, city-based listings. Divar is widely used for its simple interface, fast posting process, and high visibility, making it a go-to marketplace for everyday transactions across Iran.",
    ],
  },
  {
    id: "issue",
    title: "The Issue",
    summary:
      "Customer care centres were flooded with harassment reports. Sellers deleted listings or churned entirely, fearing repeat incidents.",
    bullets: [
      "Even after victims deleted listings, the calls continued because numbers were already exposed.",
      "Divar risked losing a category that anchored daily engagement.",
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
    id: "interview-results",
    title: "The result of interview:",
    shortTitle: "Interview Results",
    summary:
      "I interviewed harassed sellers and analysed behavioural data to understand: How did this happen? How did people solve this problem or prevent it from happening?",
    images: [
      createImageResource(
        import.meta.url,
        divarInterviewLeftAsset,
        "Interview session - left side showing discussion with stakeholders",
        { width: 1041, height: 846 },
      ),
      createImageResource(
        import.meta.url,
        divarInterviewRightAsset,
        "Interview session - right side showing insights and notes",
        { width: 568, height: 846 },
      ),
    ],
  },
  {
    id: "finding-problem",
    title: "Digging to find the Real Problem",
    summary: "The breakthrough came from connecting qualitative stories to quantitative signals.",
    image: createImageResource(
      import.meta.url,
      divarThinkingProcessAsset,
      "Research insights flow diagram showing user quote to assumption to data validation process",
      { width: 2280, height: 461 },
    ),
    highlights: [
      "Assumption:",
      "Users are being harassed through their phone numbers on social media platforms.",
      "Validation:",
      "To test this assumption, I sampled 1,000 fashion sellers who had posted advertisements in this category over the past two months, then I identified users who had experienced harassment and compared their WhatsApp profile characteristics across two groups:",
      "Random Sample: Representative baseline of all fashion sellers",
      "Harassment Victims: Sellers who reported being harassed",
      "Classified in three profile types: A. Phone number with WhatsApp account + profile image B. Phone number with WhatsApp account, without profile image C. Phone number with no WhatsApp account",
      "Assumption:",
      "Sellers in this category are increasingly hiding their phone numbers in advertisements and relying on in-app messaging instead to avoid harassment.",
      "Validation:",
      "I conducted two comparative analyses to test this behaviour:",
      "Analysis 1: Cross-Category Comparison",
      "I compared the percentage of ads with hidden phone numbers in the fashion/apparel category against other product categories on the platform.",
      "Query:",
      "Note: Tables and col names are changed due to company privacy",
      "Analysis 2: Experience-Based Behaviour",
      "We examined posting patterns over the past two months, comparing: First-time sellers: Percentage showing phone numbers in their initial ads Experienced sellers: Percentage showing phone numbers in subsequent ads (2nd, 3rd listings)",
      "Query:",
      "Note: Tables and col names are changed due to company privacy",
    ],
    images: [
      createImageResource(
        import.meta.url,
        divarGraph1Asset,
        "WhatsApp profile comparison chart showing Random Sample vs Victims of harassment",
        { width: 2280, height: 768 },
      ),
      createImageResource(
        import.meta.url,
        divarGraph2Asset,
        "Cross-category comparison chart showing proportion of hidden phone numbers per category",
        { width: 2280, height: 768 },
      ),
      createImageResource(
        import.meta.url,
        divarCodeSample1Asset,
        "SQL query for cross-category comparison analysis",
        { width: 1224, height: 738 },
      ),
      createImageResource(
        import.meta.url,
        divarGraph3Asset,
        "Experience-based behavior chart showing percentage of ads with hidden phone numbers by posting sequence",
        { width: 2280, height: 768 },
      ),
      createImageResource(
        import.meta.url,
        divarCodeSample2Asset,
        "SQL query with CTE for experience-based behavior analysis",
        { width: 1224, height: 1767 },
      ),
    ],
    body: [
      "Key Findings:",
      "Harassment victims are significantly more likely to have recognisable profile on social media.",
      "Note: we cannot recommend that sellers hide their profile pictures, since those build trust with legitimate customers.",
      "Data shows fashion sellers have been forced to adopt systematic self-protection strategies in response to persistent harassment.",
      "Key Findings:",
      "Most experienced fashion sellers hide their phone numbers, higher than other categories Sellers learn defensive behaviour immediately, there's a sharp decrease between their 1st and 2nd ad in clothing category",
      "In addition to quotes from interview and validating them by data, now we now the story of this issue.",
      "And we know what people do to prevent it: They use in-app message, instead of sharing their numbers.",
    ],
    quotes: [
      {
        author: "Sara, 26",
        role: "Fashion retail worker",
        text: "One caller even knew my eye colour. They clearly found my WhatsApp through the phone number on Divar.",
      },
      {
        author: "Zahra, 28",
        role: "Freelance graphic designer",
        text: "I stopped publishing my phone number on my ads. It felt unprofessional, but it was the only way to avoid harassment.",
      },
    ],
  },
  {
    id: "solution-journey",
    title: "Pick the right solution",
    shortTitle: "The Solution Journey",
    summary: "What solutions did we have?",
    bullets: [
      "1. User Education on Harasser Tactics\nInforming users about how harassers typically identify them.\nRejected because:\nCould damage Divar's reputation by highlighting vulnerabilities\nMight discourage users from posting ads\nSophisticated harassers would adapt",
      "2. In-App VoIP Calls\nUsing Voice over Internet Protocol to allow calls within the Divar app, masking user phone numbers.\n\nRejected because:\n\nExpensive to scale infrastructure\nInconsistent internet quality across Iran\n47% of users on older Android versions couldn't use it\nWould increase app size significantly",
      "3. Intermediary Numbers for Secure Calls\nWhen a buyer clicks \"view contact number,\" display a Divar intermediary number instead of the seller's real number. Calls are forwarded behind the scenes.",
    ],
  },
  {
    id: "implementation-journey",
    title: "The Implementation Journey",
    summary:
      "The First Attempt We ran a 3-hour pilot in the clothing category. nothing was changed. just instead of showing the post publisher number we show Divar proxy number and and divert calls from that ad viewer to post publisher.",
    // TODO: Add storyboard image for first attempt
    body: [
      "The results were... problematic.",
      "56% Calls Failed to Connect",
    ],
    highlights: [
      "Root Cause Analysis",
      "I developed assumptions for the 56% failure rate: Unknown incoming calls: Users blocking unfamiliar numbers Caller confusion: Users redialing from call logs instead of the app Competitor scraping: Ads reposted elsewhere without our system integration Device inconsistency: Users calling from different phones than they registered with Callee confusion: Users calling back unmapped numbers",
      "2nd stakeholders interview",
      "to get insight for second iteration",
      "Bidirectional Mapping Sellers could now call buyers back, creating two-way communication.",
      "Extended Mapping Time Increased from 20 seconds to 15 minutes for flexibility in communication.",
      "Voice Message Introduction Added explanation at call start: \"This is a secure call from Divar...\" to guide users and deter scammers.",
      "System Architecture Improvement Number Pool Solution Created 100 intermediary numbers Each buyer-seller pair got a unique number Maintained mapping for repeat contacts Prevented permanent blocking issues",
      "User interface, phase 1",
      "User interface, phase 2",
    ],
    bullets: [
      "User Side Issues Sellers couldn't see buyer numbers for follow-up contact Users blocked the intermediary number thinking it was spam All callers showed the same number, causing massive confusion",
      "Technical Side Issues Call volume peaks were much higher than expected System bottlenecks during high traffic",
      "Business Side Issues Calls lasted longer than predicted, inflating costs The anonymity attracted potential scammers",
    ],
    // TODO: Add UI phase 1 and phase 2 images
  },
  {
    id: "impact",
    title: "The Impact",
    summary:
      "After rollout, harassment reports dropped dramatically and sellers felt safe enough to keep listings live.",
    metrics: [
      { label: "Harassment reports", value: "▼ 60%", description: "Within 8 weeks of launch" },
      { label: "Weekly callers safeguarded", value: "2.1M", description: "Protected by secure call system" },
    ],
    body: [
      "Quantitative Results",
      "~60% reduction in harassment reports",
      "~2.1 million active users per week continuously protected by the secure call system",
      "Significant increase in secure call adoption in clothing category",
      "Ongoing safety infrastructure serving millions weekly",
      "Qualitative Results",
      "Users felt safer posting clothing ads",
      "Increased trust in platform protection",
      "Maintained communication efficiency without compromising privacy",
    ],
  },
  {
    id: "learnings",
    title: "Key Learnings",
    bullets: [
      "1. The obvious problem isn't always the real problem Initial instinct was to hide numbers. The real issue was the connection between phone numbers and social media profiles.",
      "2. Users are already solving problems—listen to them The solution came from observing how experienced users adapted (avoiding phone numbers, using in-app chat).",
      "3. Failure is a feature, not a bug The 56% failure rate in our pilot gave us the insights we needed to build a robust solution.",
      "4. Iterate ruthlessly From immediate fixes (voice messages) to structural improvements (number pools), each iteration solved specific user pain points.",
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


