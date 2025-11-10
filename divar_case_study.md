# Solving Harassment at Scale: How I Protected 2.1M Users on Iran's Largest Marketplace

**Role:** Senior UX Designer  
**Timeline:** May - June 2023  
**Impact:** ~60% reduction in harassment reports

---

## The Platform

**Divar** is Iran's leading classified ads platform—think Craigslist meets eBay—with over **53 million active users**. Every week, millions of people buy and sell everything from cars to clothing, making it an essential part of Iran's digital economy.

But with this scale came a dark problem that was driving users away.

---

## The Crisis

Our customer care center was flooded with reports. Users posting clothing ads—predominantly women—were being harassed through phone calls. Some were so frightened they deleted their ads entirely. Others stopped using the platform altogether.

**The stakes were high:**
- Users' personal safety was at risk
- Trust in our platform was eroding
- A significant category (clothing) was becoming unsafe

As the Senior UX Designer assigned to this problem, I had one clear mandate: **Reduce harassment, not just reports.**

---

## Finding the Real Problem

### The Investigation

I began with user interviews, asking two critical questions:

1. **How are harassers finding and targeting our users?**
2. **What are users already doing to protect themselves?**

### Meet the Users Being Harassed

**Layla, 32** - Professional artist selling bespoke clothing
> "It was infuriating. I took down my Divar ad hoping to stop the calls, but they kept coming. One person even told me they found my number on a Telegram group that scrapes ads believed to be posted by women."

**Sara, 26** - Fashion retail worker
> "One person who called me somehow knew about my eye color. It makes me think they found my social media profile through my phone number linked on Divar. Not cool at all."

**Zahra, 28** - Freelance graphic designer
> "Honestly, I hated not including my phone number. It felt less professional. But after a few bad experiences, I just avoid it for clothing ads now."

### The Breakthrough Clue

Sara's comment about her eye color was the key. **Harassers were:**

1. Saving phone numbers from clothing ads
2. Checking those numbers on WhatsApp/social media
3. Confirming the seller was female from profile photos
4. Proceeding with harassment

### Data Validation

Our dev team validated this hypothesis by analyzing two user groups:

- **Users with phone numbers linked to social media:** Significantly higher harassment reports
- **Users without linked social media:** Lower harassment rates

We also found that experienced users (2+ clothing ads in 6 months):
- Used in-app chat **significantly more** than new users
- Were **far less likely** to publish phone numbers

**The problem was clear:** Public phone numbers were creating a direct path to harassment.

---

## The Solution Journey

### Three Options Considered

#### 1. User Education on Harasser Tactics ❌
**Rejected because:**
- Could damage Divar's reputation by highlighting vulnerabilities
- Might discourage users from posting ads
- Sophisticated harassers would adapt

#### 2. In-App VoIP Calls ❌
**Rejected because:**
- Expensive to scale infrastructure
- Inconsistent internet quality across Iran
- 47% of users on older Android versions couldn't use it
- Would increase app size significantly

#### 3. Intermediary Numbers for Secure Calls ✅
**Selected solution:**

When a buyer clicks "view contact number," display a Divar intermediary number instead of the seller's real number. Calls are forwarded behind the scenes.

---

## Testing & Learning from Failure

### The First Attempt

We ran a 3-day pilot in the clothing category. The results were... problematic.

**56% of calls failed to connect.**

### Root Cause Analysis

I developed assumptions for the 56% failure rate:

- **Unknown incoming calls:** Users blocking unfamiliar numbers
- **Caller confusion:** Users redialing from call logs instead of the app
- **Competitor scraping:** Ads reposted elsewhere without our system integration
- **Device inconsistency:** Users calling from different phones than they registered with
- **Callee confusion:** Users calling back unmapped numbers

and also we did deep interviews

### The Problems

**User Side:**
- Sellers couldn't see buyer numbers for follow-up contact
- Users blocked the intermediary number thinking it was spam
- All callers showed the same number, causing massive confusion

**Technical Side:**
- Call volume peaks were much higher than expected
- System bottlenecks during high traffic

**Business Side:**
- Calls lasted longer than predicted, inflating costs
- The anonymity attracted potential scammers



---

## The Refined Solution

### Immediate Fixes

**Bidirectional Mapping**
- Sellers could now call buyers back

**Extended Mapping Time**
- Increased from 20 seconds to 15 minutes for flexibility

**Voice Message Introduction**
- Added explanation at call start: "This is a secure call from Divar..."
- Guided users on how to reconnect via app
- Deterred scammers by signaling monitoring

### System Architecture Improvement

**Number Pool**
- Created 100 intermediary numbers
- Each buyer-seller pair got a unique number
- Maintained mapping for repeat contacts
- Prevented permanent blocking issues

### UI Design Solution

**Phase 1: Ad Posting**
- Made secure calls an opt-in feature when posting ads
- Actively promoted in-app chat as the safest option

**Phase 2: Transparency Features**
- Call logs displayed in chat with real numbers visible to sellers
- Enabled contact outside the secure system when appropriate
- Added secure call history in ad management

### Key Screens

**Ad Management Dashboard:**
- Secure call history with duration and timestamps
- Real caller numbers revealed to sellers post-call
- Integration with in-app chat
- Call statistics (answered, rejected, no answer)

**Call History Detail:**
- Complete call log with all interactions
- Contact information accessible after first secure connection
- Support access for issues

---

## The Impact

### Quantitative Results
- **~60% reduction** in harassment reports
- **~2.1 million active users per week** continuously protected by the secure call system
- Significant increase in secure call adoption in clothing category
- Ongoing safety infrastructure serving millions weekly

### Qualitative Results
- Users felt safer posting clothing ads
- Increased trust in platform protection
- Maintained communication efficiency without compromising privacy

---

## What I Learned

**1. The obvious problem isn't always the real problem**
Initial instinct was to hide numbers. The real issue was the connection between phone numbers and social media profiles.

**2. Users are already solving problems—listen to them**
The solution came from observing how experienced users adapted (avoiding phone numbers, using in-app chat).

**3. Failure is a feature, not a bug**
The 56% failure rate in our pilot gave us the insights we needed to build a robust solution.

**4. Iterate ruthlessly**
From immediate fixes (voice messages) to structural improvements (number pools), each iteration solved specific user pain points.

---

## Reflection

This project reinforced my belief that **solving real problems requires understanding behavior, not just building features**. By combining user research, data analysis, and rapid iteration, we created a solution that protected millions of users while maintaining the platform's core functionality.

The harassment problem isn't fully solved—it may never be—but we made Divar significantly safer for the users who needed it most.

---

*Designed by Masih Sadri @ Divar*  
*sadri.masih@gmail.com | [LinkedIn](#)*