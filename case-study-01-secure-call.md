# Solving Harassment at Scale: The Secure Call System
### How I reduced harassment reports 60% and protected 1.2M weekly users on Iran's largest marketplace

---

## Quick Context

- **Company:** Divar — Iran's largest classified ads platform, 53M+ annual users, 180M+ ads published annually
- **Category scope:** Fashion & Clothing — the platform's highest-volume listing category
- **My role:** Solo UX Designer (Senior UX Designer title), embedded in agile squad
- **Stakeholders:** Product Manager (Omid Morousi), engineering team, call centre operations, research team
- **Timeframe:** May–June 2023 (design and launch); full feature maturity after 5 iterations by Q1 2023
- **Note on data:** SQL queries and behavioural data analysis written and executed by me, with PM approval. 1,000-seller sample collected via Python script written by the research team at my request.

---

## Problem

Customer care centres were flooded with harassment reports concentrated in the Clothing & Apparel category. The pattern had three compounding effects:

- **Sellers were churning.** Harassment victims deleted listings or left the platform entirely, fearing repeat incidents.
- **Deleting didn't help.** Even after victims removed their ads, calls continued — their phone numbers had already been captured and were circulating in external Telegram groups.
- **The category was at risk.** Fashion & Clothing anchored daily engagement on the platform. Losing sellers here would damage the core business.

The business framing: this was not a safety problem that could be deprioritised. It was a retention and trust problem dressed up as safety.

**Baseline:** ~600 harassment-tagged calls per day, measured by the call centre supervisor.

---

## Success Metrics

- **North star:** Reduce harassment-tagged calls from the call centre
- **Guardrails:**
  - Must not reduce legitimate buyer-seller call volume
  - Must not harm seller trust or increase listing abandonment
  - Must work on older Android devices (47% of user base at the time)
  - Must not increase app size significantly
  - Must not expose real phone numbers at any point in the flow

---

## Constraints & Tradeoffs

1. **Older device compatibility.** VoIP (Voice over IP) was an obvious solution — but 47% of users were on older Android versions where VoIP quality was inconsistent and the implementation would significantly increase app size. Rejected early.

2. **Trust erosion risk from hiding numbers.** Research showed that sellers who hid phone numbers received fewer responses from legitimate buyers. Any solution that made sellers feel less reachable would backfire.

3. **The anonymity problem.** Hiding numbers entirely attracted a new problem: scammers could operate without accountability. The solution needed to protect sellers without enabling bad actors.

4. **No ground truth on how harassment was actually happening.** The call centre knew *that* harassment was occurring but not *how* phone numbers were being obtained. My first instinct (numbers exposed in listings) turned out to be only part of the story.

5. **56% pilot failure rate.** The first implementation failed hard — more on this below. The constraints I learned from that failure shaped every subsequent iteration.

6. **Timeline pressure.** The category was losing sellers in real time. Speed mattered, but a bad fast solution was worse than a slower right one.

---

## Discovery: Finding the Real Problem

My process: user quote → form an assumption → validate with data. I ran two parallel investigations.

### Investigation A: The Social Media Link

**User quote (Sara, 26, fashion retail worker):** *"One caller even knew my eye colour. They clearly found my WhatsApp through the phone number on Divar."*

**Assumption:** Harassers were cross-referencing Divar phone numbers with social media platforms (WhatsApp, Telegram) to build profiles on victims before contacting them.

**Validation:** I sampled 1,000 fashion sellers (Python script via research team) and classified them by WhatsApp account type: phone number with profile image, phone number without image, no WhatsApp account. I then compared the distribution between a random sample and known harassment victims.

**SQL query written and executed by me** against the internal database to identify harassment-tagged users and cross-reference with listing activity.

**Finding:** Harassment victims were significantly more likely to have a recognisable profile image linked to their phone number on social media. The attack vector was not just the phone number — it was the phone number as a key to unlock a social identity.

**Implication I rejected:** Recommending sellers hide their profile pictures. This would reduce trust with legitimate customers — a guardrail violation.

### Investigation B: User Defence Mechanisms

**User quote (Zahra, 28, freelance graphic designer):** *"I stopped publishing my phone number on my ads. It felt unprofessional, but it was the only way to avoid harassment."*

**Assumption:** Sellers were already self-protecting by hiding phone numbers — and this behaviour was concentrated in the Fashion category.

**Validation:**
- Cross-category comparison: I compared the percentage of ads with hidden phone numbers across Automotive, Real Estate, Services, and Fashion & Clothing.
- Experience-based behaviour: I examined posting patterns over two months, comparing first-time sellers (% showing numbers in initial ads) vs experienced sellers (% in 2nd, 3rd listings).

**Findings:**
- Fashion & Clothing had by far the highest rate of hidden phone numbers — more than any other category.
- Experienced sellers showed a sharp drop in number visibility between their 1st and 2nd listing — a learned behaviour.
- Data confirmed: fashion sellers have been forced to adopt systematic self-protection strategies.

**The insight this unlocked:** Users were already solving the problem themselves — by hiding numbers and using in-app messaging. The question wasn't *whether* to protect numbers; it was *how to do it without breaking legitimate communication*.

---

## Three Options Evaluated

| Option | Description | Why Rejected |
|--------|-------------|--------------|
| User Education on Harasser Tactics | Inform users how harassers identify them | Could damage Divar's reputation; sophisticated harassers would adapt; didn't solve the number exposure problem |
| In-App VoIP Calls | Voice calls within the app, hiding real numbers | Expensive to scale; inconsistent quality on older Android (47% of users); increased app size significantly |
| **Intermediary Numbers (Chosen)** | When a buyer clicks "view contact number," display a Divar proxy number instead of the seller's real number. Calls forwarded behind the scenes. | — |

**Why intermediary numbers:** It preserved the phone call as a communication channel (sellers remained reachable), hid the real number from the buyer entirely, and worked on all devices without infrastructure changes. The user experience change was minimal — buyers still saw a number to call.

---

## The First Attempt — and Why It Failed

We ran a 3-hour pilot in the clothing category. The change was invisible to users: instead of showing the seller's real number, we showed a Divar proxy number and forwarded calls.

**Result: 56% of calls failed to connect.**

This wasn't a small setback. More than half of attempted communications broke. Root cause analysis:

**User side issues:**
- Sellers couldn't see buyer numbers, so they couldn't call back for follow-up
- Users blocked the intermediary number thinking it was spam
- All callers saw the same number, causing confusion

**Technical side issues:**
- Call volume peaks were much higher than expected
- System bottlenecks under high traffic

**Business side issues:**
- Calls lasted longer than predicted, inflating infrastructure costs
- Anonymity attracted potential scammers (the opposite of the intent)

**What I chose NOT to do here:** Patch the failure and re-launch quickly. The 56% failure rate was giving me exactly the insight I needed about what the system had to handle. Each failure mode pointed to a specific design decision.

---

## Refined Solutions (Iterations 2–5)

Each subsequent iteration addressed specific failure modes from the pilot:

**Bidirectional mapping** — Sellers could now call buyers back, creating two-way communication. Eliminated the "can't follow up" problem.

**Extended mapping time** — Increased from 20 seconds to 15 minutes. Gave sellers and buyers flexibility to communicate without the connection expiring mid-conversation.

**Voice message introduction** — Added an explanation at call start: *"This is a secure call from Divar..."* This reduced scam perception, deterred bad actors, and guided confused users.

**Number pool solution** — Created 100 intermediary numbers. Each buyer-seller pair received a unique number, maintained across repeat contacts. Eliminated the "everyone sees the same number" problem that was causing blocking and confusion.

---

## Results

**Within 8 weeks of launch:**

- Harassment reports dropped ~60% — from ~600 to ~240 tagged calls per day
- 1.2 million distinct users per week now communicating through the secure call infrastructure
- Sellers who had previously churned returned to posting clothing listings
- Increased trust in platform protection, measurable through qualitative feedback and reduced listing abandonment in the category

**What changed structurally:**
The secure call system became persistent safety infrastructure — not a one-time fix. It continued operating as a category-wide protection layer after the project closed.

---

## What I'd Do Differently

**Run the pilot longer before drawing conclusions.** The 3-hour pilot gave us directional signal but limited confidence. A longer pilot with a holdout group would have given cleaner data on which failure modes were systemic vs. time-of-day artefacts.

**Instrument earlier.** I had to build the data queries reactively — after the pilot failed. Designing the measurement framework before launch would have let me catch failure modes faster in subsequent iterations.

---

## Senior Signals in This Project

- **Rejected two obvious solutions** (user education, VoIP) with data-backed rationale before committing to a direction
- **Treated a pilot failure as a feature, not a bug** — the 56% failure rate generated the most actionable design insights in the project
- **Used SQL and data analysis independently** — not as a research request, but as a core part of my own design validation process
- **Held a guardrail under pressure** — refused to recommend hiding profile pictures despite it being a simple intervention, because it would have harmed legitimate seller-buyer trust
- **Iterated to structural improvement**, not just surface fixes — the number pool solution required architectural thinking, not just UI changes

---

## Confidentiality Notes

- Company (Divar) is named with permission — this is a published portfolio case study
- Call centre volumes (600 → 240/day) confirmed by call centre supervisor
- 1.2M weekly users figure refers to the Fashion & Clothing category scope, not total platform
- SQL queries and database access were performed with explicit PM approval
- User quotes are real; names changed

---

## CV Bullets (derived from this case)

**Primary bullet:**
Designed Secure Call System for Iran's largest marketplace — reduced harassment 60% (600→240 calls/day) within 8 weeks, protecting 1.2M weekly users; validated design decisions via self-written SQL queries against 50M+ user dataset.

**Secondary bullet:**
Led 5-iteration research-to-launch design process from scratch: interviewed affected sellers, ran behavioural data analysis on 1,000-user sample, rejected two solutions with evidence, shipped proxy-call infrastructure now used by 1.2M users/week.

---

## LinkedIn Bullet (derived from this case)

Sole designer on Divar's Secure Call System (50M+ user platform). Ran two parallel data investigations — SQL query analysis + 1,000-seller behavioural sample — to find the real attack vector before designing anything. First pilot failed at 56%; used the failure data to redesign in 4 subsequent iterations. Result: 60% reduction in harassment reports, 1.2M weekly users protected by ongoing safety infrastructure.

---

## Outreach Yes Statements (under 140 chars each)

- "Reduced marketplace harassment 60% (600→240 calls/day) via proxy-call system. Solo designer, 5 iterations, 1.2M weekly users protected."
- "Validated design decisions with self-written SQL on 50M+ user dataset. Privacy-first design, fintech/marketplace context."
- "Ran pilot that failed at 56%. Used failure data to rebuild — shipped infrastructure protecting 1.2M users/week."

---

## STAR+ Interview Story (90–120 seconds spoken)

**S — Situation (context + stakes):**
Divar is Iran's largest marketplace, 53M annual users. The clothing category — the platform's highest-volume listing type — was haemorrhaging sellers because of a harassment problem. Sellers were being contacted via phone numbers exposed on their listings, then tracked across social media. ~600 harassment calls per day were tagged by the call centre. Sellers were deleting their accounts. The category was at risk.

**T — Task (my ownership):**
I was the sole designer. My job was to find the root cause, design a solution, and ship it without breaking legitimate buyer-seller communication — which was a hard constraint.

**A — Actions (decisions + tradeoffs):**
- First I had to find *how* the harassment was actually happening. I ran two data investigations: a 1,000-seller sample comparing harassment victims' social media profiles (SQL queries I wrote myself), and a cross-category analysis of phone number hiding behaviour.
- The data told me users were already self-protecting — hiding numbers — but paying a trust cost with legitimate buyers. My job was to solve it for them.
- I evaluated three approaches. Rejected user education (sophisticated harassers adapt) and VoIP (47% of users on unsupported Android versions). Chose proxy-call intermediary numbers.
- First pilot: 56% of calls failed to connect. I treated this as signal, not failure — and did root cause analysis on every failure mode.
- Over 4 more iterations: added bidirectional mapping, extended mapping time, voice message intro, and a 100-number pool to give unique numbers to each buyer-seller pair.

**R — Results:**
- 60% reduction in harassment reports within 8 weeks — 600 to 240 calls/day
- 1.2 million users per week now protected by the infrastructure
- Churned sellers returned; listing abandonment in the category reversed

**+ Reflection:**
I'd instrument the pilot measurement before launch next time, not reactively. And I'd run a longer pilot with a holdout group to separate systemic issues from timing artefacts. The 56% failure taught me more than any successful first launch would have.
