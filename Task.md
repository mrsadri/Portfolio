## Task Tracker

### Task 1 — Document Task Tracking in Repo
- **Description:** Ensure there is a canonical task tracker file in the repository.
- **Outcome:** Converted `Task.md` into a structured tracker so future updates can be logged alongside status metadata.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ✅ Verified in repository (2025-11-11)

### Task 2 — Remove Hero Credential Stack
- **Description:** Remove the credential stack from the home hero that listed UX certifications and mentorship counts.
- **Outcome:** Purged credential copy from `hero.credentials` and the hero layout so the section can focus on primary messaging.
- **Production Acceptance:** Production hero renders without the legacy credential stack; the `.MuiStack-root.css-1snf90s` block and credential copy are absent.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Still visible on production hero (checked 2025-11-11)

### Task 3 — Update Primary Hero CTA
- **Description:** Make the “View case study” CTA smoothly scroll to the `#case-studies` section instead of navigating away.
- **Outcome:** Added scroll handling in `HeroSection` so the primary CTA animates to the case studies block on click.
- **Production Acceptance:** Clicking “View case study” on production smooth scrolls to `#case-studies` without reloading or changing routes.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Primary CTA still navigates away instead of smooth scroll (checked 2025-11-11)

### Task 4 — Update Secondary Hero CTA
- **Description:** Point the “Book a call” CTA at the mentorship section on the contact page and ensure smooth scrolling post-navigation.
- **Outcome:** Secondary CTA now links to `/contact#mentorship`, and the contact page scrolls to the section on load when a hash is present.
- **Production Acceptance:** “Book a call” navigates to `/contact#mentorship`, retains the hash, and the mentorship cards auto-scroll into view.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Secondary CTA missing on production hero (checked 2025-11-12)

### Task 5 — Remove Hero Availability Text Link
- **Description:** Remove the “Open to senior product designer roles” text button from the hero.
- **Outcome:** Deleted the tertiary availability button so the hero focuses on the two primary actions.
- **Production Acceptance:** Production hero shows only the two primary CTAs; the availability text link is absent from the DOM.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Availability text link still present (checked 2025-11-12)

### Task 6 — Update Footer Build Attribution
- **Description:** Replace the “Built with Bun + React + MUI.” footer note with the new copy specified by the stakeholder.
- **Outcome:** Footer now reads “Built from scratch by Masih with ❤️”.
- **Production Acceptance:** Production footer displays “Built from scratch by Masih with ❤️” exactly, including punctuation and emoji.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Footer copy still “Built with Bun + React + MUI.” (checked 2025-11-12)

### Task 7 — Rename Photo Gallery Heading
- **Description:** Update the My Story photo gallery heading to “My Life in Frames”.
- **Outcome:** Heading text updated in `PhotoGallerySection` to the new title.
- **Production Acceptance:** The My Story gallery heading reads “My Life in Frames” on production with no lingering “Layers of the everyday” references.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Heading still shows former text (checked 2025-11-12)

### Task 8 — Extend Emoji List
- **Description:** Add two additional emojis to the personal interests list.
- **Outcome:** Added `🎨` and `🪵` to the emoji array so the UI reflects a fuller personality snapshot.
- **Production Acceptance:** Personal interests emoji list on production includes `🎨` and `🪵` without layout regressions.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Emoji list unchanged on production (checked 2025-11-12)

### Task 9 — Adjust Mentorship Badge Placement
- **Description:** Move the mentorship duration chip to the end of the card header line.
- **Outcome:** Layout refined in `MentorshipSection` by aligning the chip to the right edge while keeping content responsive.
- **Production Acceptance:** Mentorship duration chip remains right-aligned across desktop and smaller breakpoints on production.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Mentorship badge not repositioned (checked 2025-11-12)

### Task 10 — Update Mentorship Booking Links
- **Description:** Replace email mailto links with Zeeg scheduling URLs for both mentorship offerings.
- **Outcome:** Both cards now link to the correct Zeeg booking pages with updated CTA labels.
- **Production Acceptance:** Mentorship CTAs open `https://zeeg.me/masihs/letstalk` and `https://zeeg.me/masihs/mentorship` in new tabs; no `mailto:` links remain.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Mentorship cards still use mailto links (checked 2025-11-12)

### Task 11 — Redesign Contact Footer Call-to-Actions
- **Description:** Rebuild the contact footer to match the new structure (headline, supporting copy, primary email CTA, LinkedIn, GitHub buttons).
- **Outcome:** Contact section now mirrors the requested design language, including iconography and spacing.
- **Production Acceptance:** Contact footer shows “Let’s Talk and Work Together” with supporting copy plus primary email button and LinkedIn/GitHub icon buttons in a centered row.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Contact footer remains in legacy layout (checked 2025-11-12)

### Task 12 — Normalize Contact Channel Handles
- **Description:** Align all email, Telegram, LinkedIn, and GitHub references across the site to the canonical handles provided by Masih.
- **Outcome:** All content and structured data now reference `sadrimasih@gmail.com`, `t.me/masihsadri`, `linkedin.com/in/msadri/`, and `github.com/mrsadri`; contact methods include Telegram and GitHub entries.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Production still references `sdarimasih@gmail.com` and lacks Telegram/GitHub entries (checked 2025-11-12)

### Task 13 — Expand Footer Contact CTAs
- **Description:** Revise the footer layout to surface quick actions for email, Telegram, LinkedIn, GitHub, and a “Book a session” link to `/contact#mentorship`.
- **Outcome:** Footer now displays a responsive action bar with icon buttons for each channel plus a secondary CTA that routes to the mentorship section.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Footer action bar absent on production (checked 2025-11-12)

### Task 14 — Reinstate Hero Certified Badge
- **Description:** Reintroduce the certified badge image overlay on the hero portrait while keeping the streamlined CTA layout.
- **Outcome:** Certified badge asset is restored atop the hero image with responsive positioning and without reintroducing the credential stack copy.
- Date of Done this task:
- **Local Verification:** ✅ Browser check on localhost (2025-11-12)
- **Production Status:** ❌ Hero still includes credential stack alongside badge (checked 2025-11-12)