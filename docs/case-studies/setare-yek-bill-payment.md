# **From 4% to 47%: How I Turned a Failing Feature Into a Core Product Value**

**A Product Design Case Study by Masih Sadri**

---

## **The Challenge in One Sentence**

Despite having millions of active users, only 4% of payments in our app were bill payments—and session recordings showed users were *trying* but *failing* to complete the task.

---

## **About Setare-Yek**

Setare-Yek is one of Iran's largest fintech platforms, serving millions of users who rely on it for everyday financial transactions—from peer-to-peer payments to mobile top-ups and service bills.

**The opportunity:** Bill payment is a high-frequency, high-stress task that every household faces monthly. If we could solve it well, we'd become indispensable.

**The problem:** We had the feature, but almost nobody used it.

---

## **My Role**

**Senior Product Designer** — I led the complete redesign from research through launch:
- User research & synthesis
- UX/UI design
- Prototyping & testing
- Collaboration on implementation & rollout

**Constraint:** I was the sole designer on this project, requiring me to balance deep research with rapid execution.

---

## **The Mystery: Why Weren't Users Paying Bills?**

### **What the data showed:**
- 96% of payments were *not* bills
- High drop-off rates at specific steps
- Users spending unusually long on single screens
- Many abandoned attempts before reaching payment confirmation

### **The question that drove everything:**

> "People pay bills every month—it's not optional. So why are they avoiding our app?"

This wasn't about adding features. Something fundamental was broken.

---

## **Discovery: What Users Actually Needed**

I conducted multi-method research combining:
- **Qualitative:** In-depth interviews with building managers, heads of households, and everyday users
- **Contextual inquiry:** Observing bill payment in real contexts
- **Ethnographic details:** Studying a building manager's physical notebook
- **Digital behavior:** Session recordings, app store reviews, social media sentiment
- **Quantitative:** Drop-off analysis and behavior patterns

### **Two Core Personas Emerged**

#### 👨‍🔧 **The Building Manager (Age 55+)**
Manages utilities for an entire apartment building.

**Critical need:**
> "I make photocopies of every receipt and give them to residents. I need *proof* that it's paid."

**Pain points:**
- Needs official, shareable documentation
- Manages multiple bills simultaneously
- Zero tolerance for ambiguity

---

#### 👨‍👩‍👧 **The Head of Household**
Pays all family bills monthly.

**Critical need:**
> "Entering this 13-digit code every single month is torture."

**Pain points:**
- Constantly forgets due dates
- Re-enters same information every cycle
- No way to see all bills in one place

---

## **The Breakthrough Insights**

### **Insight #1: Users weren't confused about coverage—they were confused about us**

We assumed the issue was that we didn't support every bill type.

**Reality:** Users had no idea *which* bills we supported. They had to guess, fail, and try elsewhere. This destroyed trust before they even started.

---

### **Insight #2: The receipt was everything**

Users didn't just want confirmation—they needed an *official document* they could:
- Show to family members
- Share with building residents  
- Present to landlords

This wasn't a "nice-to-have." It was the *core* emotional need driving trust.

---

### **Insight #3: Bill payment isn't a one-time task—it's a recurring cycle**

Our flow treated every bill payment like a new transaction. Users had to re-enter everything every month.

**The real behavior:** People pay the same bills repeatedly. They need a system that *remembers*.

---

## **Design Philosophy**

> **Digitize what people already do in the physical world—then make it 10x better.**

People already:
- Keep notebooks of bill IDs → **We built a digital bill list**
- Set calendar reminders → **We built smart notifications**
- Make photocopies of receipts → **We created shareable official receipts**

The experience had to feel *natural* from day one, not like learning new software.

---

## **The Solutions**

### **1. Saved Bills & One-Tap Updates**
- Register a bill once, use it forever
- "Check for new amount" button fetches the latest bill instantly
- No more re-entering 13-digit codes

### **2. Digital Bill Management Hub**
- All bills in one organized list
- Status labels (Paid, Pending, Overdue)
- Backward-compatible: returning users saw their history immediately

### **3. Smart Reminders**
- Set custom reminders for each bill
- Push notifications before due dates
- Never miss a payment deadline

### **4. QR/Barcode Scanning**
- Instant bill entry via camera
- Critical for older users and busy personas

### **5. Immediate Transparency**
- Supported bill providers shown upfront with logos
- Clear guidance on what we can and can't process
- No more trial-and-error

### **6. Official, Shareable Receipts**
- PDF-quality receipts with all legal details
- One-tap sharing via any channel
- Built specifically for the "proof" requirement

---

## **The Failure That Made Everything Better**

### **Version 1: A Complete Disaster**

I was confident. The design tested beautifully. We launched.

**What happened:**
- Bills took 8-10 seconds to load (we were fetching everything automatically)
- No loading states, no skeleton UI, no progress indicators
- Users saw blank screens
- **Bill payments dropped 80% in 48 hours**

We rolled back immediately.

### **Why I'm Sharing This**

This failure became the most valuable part of the project. Here's what it taught us:

**What went wrong:**
- Great UX design can't save poor technical performance
- We skipped realistic latency testing
- We didn't simulate worst-case network conditions
- We prioritized automation over user control

**What changed:**
- Switched to manual "Check Amount" buttons (instant feedback)
- Added lazy loading + skeleton states everywhere
- Implemented comprehensive pre-launch technical testing
- Created new company-wide standards for performance testing

---

## **Version 2: The Launch That Worked**

Armed with lessons from the failure, we shipped a stable, fast, trustworthy experience:

✅ **Manual control** — Users trigger updates when ready  
✅ **Instant feedback** — Loading states for every action  
✅ **Backward compatibility** — Zero learning curve for returning users  
✅ **Official receipts** — Solved the core emotional need  
✅ **Smart reminders** — Addressed forgetfulness  
✅ **Clear communication** — Built confidence from screen one

---

## **The Result**

### **📊 4% → 47% Adoption Rate**

**That's 10x growth in bill payment share.**

### **What drove this:**
- **Trust:** Official receipts and clear communication
- **Ease:** One-time setup, recurring use
- **Reliability:** Fast, stable, predictable
- **Alignment:** Matched real-world behavior

Bill payment went from a neglected feature to one of the app's primary value propositions.

---

## **Key Takeaways**

**1. Design doesn't exist in isolation**  
Even perfect UX fails without technical performance.

**2. Emotional needs = Functional needs**  
The receipt wasn't decoration—it was the entire value proposition.

**3. Real behavior > Assumptions**  
Users showed us what they needed. We listened.

**4. Backward compatibility is trust**  
Especially in financial products, familiarity = confidence.

**5. Failed launches can be the best learning**  
Owning mistakes and iterating fast built a stronger product and process.

---

## **Organizational Impact**

Beyond the product, this project changed how we work:

- Mandatory pre-launch performance testing
- Staging environments with real-world data
- Required loading/skeleton states for all heavy operations
- Shared standards across design and engineering

These changes improved every feature that came after.

---

## **Want More?**

I can provide:
- 📊 **Figma prototypes** showing the full flow
- 📸 **Before/after UI comparisons**
- 📈 **Detailed analytics** breakdown
- 🎤 **Presentation version** for portfolio reviews

---

**Masih Sadri**  
Senior Product Designer  
[Your contact information]