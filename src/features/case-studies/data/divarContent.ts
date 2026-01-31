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
import { createImageResource } from "@shared/utils/assets";
import type { CaseStudyOverview, CaseStudySection } from "../types";

export const divarOverview: CaseStudyOverview = {
  title: "Solving Harassment at Scale",
  subtitle: "How I Protected 2.1M Users on Iran's Largest Marketplace",
  description:
    "We reduced harassment incidents by 60% inside Divar's clothing category by building a proxy number for calling experience that now protects 2.1M weekly users.",
  meta: [
    { label: "My Role", value: "Senior UX Designer" },
    { label: "Timeline", value: "May - June 2023" },
  ],
  stats: [
    { value: "▼60%", label: "Harassment reports" },
    { value: "2.1M", label: "Weekly callers safeguarded" },
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
    title: "The Context",
    shortTitle: "The Context",
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
      "Divar is Iran’s largest and most popular online classified ads platform (launched in 2012). It serves as a go-to marketplace for everyday transactions, covering categories like real estate, vehicles, jobs, services, and personal items.",
    ],
  },
  {
    id: "issue",
    title: "The Issue",
    summary:
      "Customer care centres were flooded with harassment reports in the Clothing & Apparel category.",
    bullets: [
      "Sellers were deleting listings or churning entirely, fearing repeat incidents.",
      "Even after victims deleted listings, calls continued because their numbers were already exposed.",
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
    id: "problem",
    title: "Digging to find the Real Problem",
    shortTitle: "The Right Problem",
    summary:
      "I interviewed harassed sellers and analysed behavioural data to understand:\n1. How did this happen?\n2. How were users currently trying to solve or prevent it?",
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
    id: "investigation",
    title: "The Process of investigation",
    shortTitle: "The Investigation Process",
    summary: "The breakthrough came from connecting qualitative stories to quantitative signals.",
    image: createImageResource(
      import.meta.url,
      divarThinkingProcessAsset,
      "Research insights flow diagram showing user quote to assumption to data validation process",
      { width: 2280, height: 461 },
    ),
    highlights: [
      "Investigation 1: Social Media Profile Exposure",
      "Assumption:",
      "Users are being harassed through their phone numbers on social media platforms.",
      "Validation:",
      "To test this assumption, I sampled 1,000 fashion sellers who had posted advertisements in this category over the past two months. I then identified users who had experienced harassment and compared their WhatsApp profile characteristics across two groups:",
      "• Random Sample: Representative baseline of all fashion sellers",
      "• Harassment Victims: Sellers who reported being harassed",
      "Profile types classified:",
      "A. Phone number with WhatsApp account + profile image",
      "B. Phone number with WhatsApp account, without profile image",
      "C. Phone number with no WhatsApp account",
      "",
      "Investigation 2: Defensive Behavior Patterns",
      "Assumption:",
      "Sellers in this category are increasingly hiding their phone numbers in advertisements and relying on in-app messaging instead to avoid harassment.",
      "Validation:",
      "I conducted two comparative analyses to test this behavior:",
      "",
      "Analysis 1: Cross-Category Comparison",
      "I compared the percentage of ads with hidden phone numbers in the fashion/apparel category against other product categories on the platform.",
      "",
      "Analysis 2: Experience-Based Behavior",
      "We examined posting patterns over the past two months, comparing:",
      "• First-time sellers: Percentage showing phone numbers in their initial ads",
      "• Experienced sellers: Percentage showing phone numbers in subsequent ads (2nd, 3rd listings)",
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
      "Harassment victims are significantly more likely to have recognisable profile on social media.",
      "Note: we cannot recommend that sellers hide their profile pictures, since those build trust with legitimate customers.",
      "Data shows fashion sellers have been forced to adopt systematic self-protection strategies in response to persistent harassment.",
      "Most experienced fashion sellers hide their phone numbers, higher than other categories",
      "Sellers learn defensive behaviour immediately, there's a sharp decrease between their 1st and 2nd ad in clothing category",
      "And we know what people do to prevent it: They use in-app message, instead of sharing their numbers.",
      "In addition to quotes from interview and validating them by data, now we now the story of this issue.",
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
    id: "solution",
    title: "Pick the right solution",
    shortTitle: "To Find the Right Solution",
    summary: "What solutions did we have?",
    bullets: [
      "1. User Education on Harasser Tactics\nInforming users about how harassers typically identify them.\nRejected because:\nCould damage Divar's reputation by highlighting vulnerabilities\nMight discourage users from posting ads\nSophisticated harassers would adapt",
      "2. In-App VoIP Calls\nUsing Voice over Internet Protocol to allow calls within the Divar app, masking user phone numbers.\n\nRejected because:\n\nExpensive to scale infrastructure\nInconsistent internet quality across Iran\n47% of users on older Android versions couldn't use it\nWould increase app size significantly",
      "3. Intermediary Numbers for Secure Calls\nWhen a buyer clicks \"view contact number,\" display a Divar intermediary number instead of the seller's real number. Calls are forwarded behind the scenes.",
    ],
  },
  {
    id: "implementation",
    title: "The Implementation Journey",
    shortTitle: "The Rapid Implementation",
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
    ],
    bullets: [
      "User Side Issues Sellers couldn't see buyer numbers for follow-up contact Users blocked the intermediary number thinking it was spam All callers showed the same number, causing massive confusion",
      "Technical Side Issues Call volume peaks were much higher than expected System bottlenecks during high traffic",
      "Business Side Issues Calls lasted longer than predicted, inflating costs The anonymity attracted potential scammers",
    ],
  },
  {
    id: "impact",
    title: "The Impact",
    shortTitle: "The Overall Impact",
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
    body: [
      "1. The obvious problem isn't always the real problem",
      "Initial instinct was to hide numbers. The real issue was the connection between phone numbers and social media profiles.",
      "",
      "2. Users are already solving problems, listen to them",
      "The solution came from observing how experienced users adapted (avoiding phone numbers, using in-app chat).",
      "",
      "3. Failure is a feature, not a bug",
      "The 56% failure rate in our pilot gave us the insights we needed to build a robust solution.",
      "",
      "4. Iterate ruthlessly",
      "From immediate fixes (voice messages) to structural improvements (number pools), each iteration solved specific user pain points.",
    ],
  },
  {
    id: "reflection",
    title: "Reflection",
    body: [
      "This project reinforced my belief that solving hard problems starts with understanding behaviour. By blending research, data, and rapid iteration, we built a safety layer that still protects millions of people each week. The harassment problem may never disappear entirely, but Divar is significantly safer for the users who need it most.",
    ],
  },
  {
    id: "acknowledgment",
    title: "Acknowledgments",
    body: [
      "Thanks to Omid Morousi, the product manager and the dev team.",
    ],
  },
];

