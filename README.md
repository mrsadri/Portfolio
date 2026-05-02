# Masih Sadri — Product Designer Portfolio

A designer's portfolio has one job: replace the question *"Can this person think?"* with evidence.

This site doesn't just show what I shipped — it shows how I framed the problem, what I investigated, what I was wrong about, and what changed because of the work. Every case study is written to give a hiring manager, founder, or collaborator enough signal to decide if we're a fit — before we've exchanged a single message.

**Live site:** [mrsadri.github.io/Portfolio](https://mrsadri.github.io/Portfolio)

---

## What's inside

| Page | What it answers |
|------|----------------|
| [index.html](index.html) | Who am I, what kind of work I do, and why it matters |
| [resume.html](resume.html) | Work history, skills, and certifications — also as a downloadable PDF |
| [my-story.html](my-story.html) | The non-resume version: how I think, what shaped me, what I care about |
| [contact.html](contact.html) | How to reach me |
| [case-studies/divar-secure-call.html](case-studies/divar-secure-call.html) | Privacy UX for a feature used by 40M+ users on Iran's largest marketplace |
| [case-studies/setare-aval-engagement.html](case-studies/setare-aval-engagement.html) | Engagement design for a content platform |
| [case-studies/setare-yek-bill-payment.html](case-studies/setare-yek-bill-payment.html) | Simplifying bill payment flow end-to-end |

---

## Why pure HTML/CSS/JS

No framework, no build tool, no dependencies. This was a deliberate choice:

- **The work loads instantly.** A recruiter shouldn't wait for a JS bundle to hydrate before they can read my case studies.
- **The code reflects design values.** Clean, purposeful, nothing unnecessary — the same standard I apply to product decisions.
- **It's fully mine.** Every layout decision, every spacing value, every interaction is something I chose and can explain.

---

## Technical details

**Stack:** HTML5 · CSS3 (custom properties, Flexbox, Grid) · Vanilla JS · Bootstrap Icons · Inter (Google Fonts)

**CSS architecture:**
```
css/
├── variables.css     # Design tokens — colors, spacing, radius, shadows
├── base.css          # Reset + typography defaults
├── layout.css        # Container, nav, shared grid patterns
├── components.css    # Buttons, badges, cards, tags
├── animations.css    # Scroll-triggered fade-up utilities
├── home.css          # Homepage
├── resume.css        # Resume/CV page
├── my-story.css      # My Story page
├── contact.css       # Contact page
└── case-study.css    # Shared case study styles
```

**Notable implementation details:**
- Dark mode default — `localStorage` persists user preference; dark on first visit
- Collapsible SQL blocks — real queries from the actual investigations, collapsed by default
- Fluid typography — `clamp()` on all headings, no breakpoint-based font sizes
- Design tokens — one file (`variables.css`) controls the full visual theme

**Run locally:**
```bash
open index.html
# or
python3 -m http.server 8000
```

---

[LinkedIn](https://www.linkedin.com/in/masihsadri/) · sadrimasih@gmail.com · Tehran, Iran
