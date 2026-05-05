# From 6% to 47%: Turning a Failing Bill Payment Feature Into Core Value
### How I redesigned the IR-MCI bill payment flow to grow market share 6% → 47% in 4.5 months

---

## Quick Context

- **Company:** Setare Aval Co. — payment subsidiary of IR-MCI, Iran's largest mobile telecom
- **Product:** SetareYek — Setare Aval's main consumer fintech app (1M+ Google Play installs; additional Cafe Bazaar installs not publicly disclosed)
- **My role:** Sole designer — research, design, usability testing, all iterations
- **Stakeholder:** PM, Ali YaseriPour
- **Timeframe:** 2.5 months of design and development across 3 iterations + 2-week solo usability testing period; further 2 months for adoption ramp to peak
- **Strategic context:** A blue-ocean payment category turning red. Setare Aval wanted to be the pioneer before banks and standalone payment apps captured the space.

---

## Problem

Bill payment was underused inside the Setare Aval app. The feature existed, but users avoided it — they preferred paying bills through banks, ATMs, or external payment apps even though the in-app option was available.

**Baseline market share:** 6% of bill payment volume (measured internally against IR-MCI's other payment categories).

The strategic stakes: if IR-MCI didn't make in-app bill payment compelling soon, banks and dedicated fintech apps would lock in the habit and the category would close. The PM and business line wanted me to figure out *why* users weren't using it — and fix it.

---

## Discovery: 6 User Frustrations, Not 1

I started with research expecting to find one main blocker — probably "it's clunky." What I found was structural: bill payment isn't a transaction. It's a workflow that touches people's homes, their landlords, their administrative life. Six distinct frustrations were each contributing to abandonment.

| # | Frustration | What I learned |
|---|-------------|----------------|
| 1 | The flow was too difficult | Users had to enter a 13-digit bill code and a 16-digit payment code every time, then request the bill. Pure friction — and users had to do it from scratch each cycle. |
| 2 | Users wanted to share receipts with landlords | They preferred paper receipts because landlords asked for proof. Online payment broke this trust loop. |
| 3 | Physical bills got lost | Municipalities mailed bills, users misplaced them, and then couldn't pay because they had no codes. |
| 4 | Users forgot to pay on time | No reminder system. Late fees were a constant complaint. |
| 5 | Physical bills had administrative value | Users needed paper bills as proof for selling property or registering for ADSL internet. Going digital felt like losing leverage. |
| 6 | No payment history | Users wanted to see what they'd paid and when — both for memory and for documentation. |

**The strategic insight:** Bill payment couldn't be designed as a faster button. It had to be designed as an *inventory system* — a place where users' bills lived, updated themselves, and could be paid, shared, and referenced over time.

This single reframe changed every downstream decision.

---

## Success Metrics

- **North star:** % of total IR-MCI internal payment volume going through in-app bill payment (vs other payment categories)
- **Guardrails:**
  - Must not break the existing flow for power users
  - Must work on the spectrum of devices used across Iran (low-end Android included)
  - Must not introduce new friction in pursuit of new features
  - Receipt sharing must satisfy landlords (verifiable)

---

## Constraints & Tradeoffs

1. **Government-regulated payment codes.** I couldn't change the 29 digits users had to enter — that was set by national infrastructure. I had to design *around* the constraint, not eliminate it. (Solution: enter once, store, refresh automatically.)

2. **Trust gap with landlords.** Landlords are non-users of the app — but they're gatekeepers of whether users can use the feature. Any digital receipt had to be verifiable by someone who'd never installed Setare Aval.

3. **Loss of administrative paper.** Killing the paper bill created real-world problems for users (property sales, ADSL registration). The design had to make the digital version *more* useful than paper, not just equivalent.

4. **Iteration 1 latency cost.** This is the constraint I missed at first. More on this below.

5. **3 iterations only.** Each iteration cost roughly 2–3 weeks of dev queue time. I couldn't afford more than three swings before the strategic window closed.

---

## Iteration 1: The 14-Day Mistake

I designed iteration 1 in 5 days after 14 days of research. The core idea: a list of bill cards, each card showing the current bill price prominently with a "Pay Now" button. Click → pay. Minimal friction.

It went into the dev queue, launched 14 days later, and **broke in production within 24 hours.**

**What went wrong:** Building a list of bill cards with live price data required fetching the current price for every bill on every list render. At scale, this took noticeable time. The list either loaded slowly or partially. Users who'd previously used the old flow opened the new screen, saw nothing, and left.

**How I detected it:** The DevOps team identified the bill payment volume drop 24 hours after launch and flagged it to PM Ali. Not fast — by my standards now — but fast enough.

**The decision:** Rolled back the same day. No defending, no patching. The data was clear: my design assumption (instant card rendering) was wrong at production scale.

**What I should have caught earlier:** I designed for an idealised state where data was already available. I didn't model the network and rendering cost of fetching live bill prices for every card on first paint. A senior designer should think about latency as a UX dimension, not just a technical detail.

---

## Iteration 2: The Fix — 3 Days to Redesign

Three architectural changes:

**1. "Update Price" instead of "Pay Now" on cards.** The card no longer pretended to have live data. Each card showed the saved bill identifier; the price loaded only when the user explicitly tapped "Update Price." This pushed the cost from list-render time to user-initiated action — predictable, controllable, and feedback-clear.

**2. Loading states everywhere.** Both the list view and individual cards now had explicit loading states. No more empty screens that looked broken.

**3. Saved bill inventory as the core mental model.** Users entered the 29 digits *once*, named the bill (e.g. "Apartment electricity"), and from then on the bill lived in their inventory. Update price → pay → keep history.

This shipped 3 days after iteration 1 rolled back.

---

## Iteration 3: Solving the Other 5 Frustrations + Two Growth Features

With the inventory architecture working, I addressed the remaining frustrations:

**Receipt sharing for landlords.** Users could now share digital receipts directly. I wrote in-receipt verification instructions so landlords (non-app users) could verify the receipt's authenticity through Setare Aval's public verification page. This solved frustration #2 and #5 simultaneously — digital receipts now had administrative weight.

**Time-ordered bill list.** Bills sorted by time-to-pay, with the most urgent on top. Solved frustration #4 (forgetting to pay).

**Full payment history.** Every paid bill stayed in a history view, searchable. Solved frustration #6.

**Persistent bill identifiers.** Once entered, the 13- and 16-digit codes never had to be entered again — they were tied to that named bill in inventory. Solved frustration #1 at the structural level.

### Two Growth Features I Proposed (Not in PM Brief)

While running discovery, I noticed two patterns the PM hadn't asked about. I proposed both — they shipped as part of iteration 3.

**Feature A — Family package visibility.** Research showed that many bill-payers purchased internet packages and top-ups *on behalf of* family members (parents, kids, spouses). The pain: they didn't know when a family member's package would expire, so renewals were either late or guesswork. I designed a view showing how much of each purchased package remained — visible to the buyer, not just the recipient. This turned a one-off transaction into a recurring relationship.

**Feature B — Auto-referral via gift payment.** I extended Feature A: users could pay phone bills *on behalf of* parents, friends, or family. After a successful gift payment, the app auto-invited the recipient to download SetareYek with a referral code tied to the gift transaction.

**Result of Feature B:** Approximately 1 in 3 referrals converted. Roughly **20,000 new active users acquired in the first 2 months** of the auto-referral system going live.

Both features were my proposals — neither was in the PM's original brief. The growth impact was on top of the core 6% → 47% payment-share lift, not part of it.

---

## Solo Usability Testing (2 Weeks)

After iteration 3 design but before development, I ran 2 weeks of usability testing — solo, unmoderated and moderated mixed sessions. Tested the core inventory flow, bill update flow, receipt-sharing flow, and history search. Found small UX bugs (mostly around tap targets and the "share" affordance), fixed them before development started.

This testing window is the reason iteration 3 didn't break in production.

---

## Results

**Bill payment market share grew from 6% → 47% of IR-MCI internal payment volume**, measured against other payment categories within the same app.

- **Design + development:** ~2.5 months across 3 iterations
- **Adoption ramp:** Additional ~2 months for users to build the habit and share with peers
- **Total time to peak:** ~4.5 months
- **Scope:** Nationwide

The category went from being IR-MCI's smallest payment line to being the largest in volume.

---

## What I'd Do Differently

**Model latency as a design dimension in iteration 1.** I designed for the ideal data state, not the real one. I now treat "what does this look like at the slowest acceptable network speed?" as a required design exercise, not a technical handoff question.

**Run a smaller pilot before full rollout.** Iteration 1 went to 100% of users at launch. If I'd run it on a 5% cohort first, the price-fetch cost would have shown up the same way but with much less business damage and faster rollback.

---

## Senior Signals in This Project

- **Reframed the problem strategically.** I came in expecting "make payment faster" and left with "build an inventory system." That reframe is the reason for the 6%→47% lift, not the visual design.
- **Proposed two growth features that weren't in the brief.** Family package visibility and auto-referral were my ideas, not the PM's. Auto-referral acquired ~20,000 active users in 2 months — design influencing growth, not just experience.
- **Did my own SQL and data work.** Research wasn't a request handed off — I ran it.
- **Held a guardrail under business pressure.** I refused to remove the 29-digit entry as a quick fix, because it was a regulatory constraint. Designed around it instead.
- **Took ownership of an iteration 1 production failure.** No deflection, no defending. Rolled back same day, redesigned in 3 days. The fast rollback is the senior move.
- **Influenced product priorities through evidence.** The 6 frustrations weren't given to me — I found them, mapped them, and proposed which to tackle in which iteration.

---

## Confidentiality Notes

- Company (IR-MCI / Setare Aval) is named with permission; this is portfolio-public work
- Market share figures (6% → 47%) measured internally against other IR-MCI payment categories — not against external competitors or national bill payment volume
- PM Ali YaseriPour can verify scope and ownership
- Adoption timeframe of 4.5 months represents end-to-end project closure to peak adoption

---

## CV Bullets (derived from this case)

**Primary bullet:**
Redesigned in-app bill payment for SetareYek (1M+ Google Play installs, IR-MCI's payment subsidiary); grew payment share from 6% to 47% in 4.5 months as sole designer across 3 iterations and 2 weeks of solo usability testing.

**Secondary bullet:**
Proposed auto-referral growth feature outside the PM brief — users could pay phone bills on behalf of family/friends, who were then auto-invited to the app; 1 in 3 referrals converted, ~20,000 new active users acquired in 2 months.

**Tertiary bullet:**
Rolled back iteration 1 within 24 hours after production data showed list-render latency was breaking adoption; redesigned in 3 days and shipped the inventory architecture that drove the category lift.

---

## LinkedIn Bullet (derived from this case)

Solo designer on SetareYek's bill payment redesign (Iran's payment subsidiary of IR-MCI, 1M+ installs). Discovery surfaced 6 user frustrations — not 1. Reframed bill payment from "transaction" to "inventory system" to address the full workflow. Iteration 1 broke in production due to a latency assumption I missed; rolled back in 24 hours, redesigned in 3 days. Final design grew payment share 6% → 47% in 4.5 months, plus a self-proposed auto-referral feature acquired ~20,000 new active users in 2 months.

---

## Outreach Yes Statements (under 140 chars each)

- "Grew bill payment share from 6% to 47% in 4.5 months as sole designer at Iran's largest telecom payment app."
- "Proposed auto-referral feature outside the brief — 1 in 3 referrals converted, 20K active users in 2 months."
- "Rolled back my own production launch in 24 hours when latency broke adoption. Redesigned in 3 days. Shipped the lift."

---
Tips to Enhance Your Published Case Studies (Portfolio Site)
Looking at both your published case studies (Secure Call and Bill Payment) on mrsadri.github.io, here's what to fix — ranked by priority:
1. Fix the inflated numbers immediately. Highest priority.

Bill Payment case: replace "10.6M monthly active users" and "2.36M total installs" with "1M+ Google Play installs (Cafe Bazaar additional)." This is the most urgent fix — it's the kind of thing an EU recruiter spots in 30 seconds.
Secure Call case: replace "2.1M weekly sellers safeguarded" with "1.2M weekly sellers safeguarded." You corrected this with me but the portfolio still shows 2.1M.

2. Lead with the failure, not the success. Your Bill Payment case puts results at the bottom and the iteration-1 failure in the middle. Move the failure higher — ideally as a section called "What Broke First" right after Discovery. Hiring managers skim. The failure is your strongest senior signal; don't bury it.
3. Add an explicit "What I Owned" or "Role" subsection at the top of each case. Right now your role appears as a label ("Sole designer") but the scope of your ownership — solo SQL, solo research, solo iteration calls — gets diluted across the narrative. Make it a bullet list at the top: I did X. I did Y. I decided Z. This is what international hiring managers look for first because design culture varies wildly by country.
4. Add "Decisions I Rejected" as a recurring section. You already have this informally in both cases ("we rejected user education because..."). Promote it to a labelled section. EU senior interviews ask "what did you NOT do and why?" — this section is your answer, written in advance.
5. Add a one-line verifiable scope line under every metric. For Bill Payment: "Source: Internal application payment share, measured against other payment categories within SetareYek." For Secure Call: "Source: Divar call centre supervisor reports, measured at 8-week post-launch milestone." This pre-empts the "how do you know?" follow-up.
6. Add credit lines for non-design work. "Python sample script: research team. SQL queries and analysis: me. Production engineering: dev team led by [name]." This increases your credibility, not decreases it. Vague claims look inflated; specific credits look honest.
7. Drop the long persona section in the Bill Payment case if it doesn't add a metric or decision. Personas are commodity work; they're not differentiating you. Replace with the 6-frustration table from the deep case study I wrote — it's more specific and shows analytical thinking.
8. Add a confidentiality note at the bottom of each case. Something like: "All metrics shared with company permission. Sensitive details (specific user data, internal architecture) abstracted." This signals professional maturity to EU companies that care deeply about NDAs and information handling.