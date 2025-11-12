# Mobile Design Issues Report

**Date:** January 2025  
**Viewport Size:** 375px × 812px (iPhone X/11/12 standard)  
**Browser:** Chrome (Mobile Emulation)

## Overview

This document outlines all mobile design issues found across all pages of the portfolio website. Each issue is categorized by severity and includes specific recommendations for improvement.

---

## Critical Issues

### None Found ✅

No critical issues that prevent core functionality were identified.

---

## High Priority Issues

### 1. Case Study Navigation Outline - Space Consumption
**Pages Affected:**
- `/case-studies/divar-secure-call`
- `/case-studies/setare-aval-engagement`

**Issue:**
The case study outline navigation takes up significant vertical space on mobile devices. The navigation includes multiple links (Context, The Crisis, Finding the Real Problem, etc.) that are stacked vertically, consuming valuable screen real estate before users reach the actual content.

**Impact:**
- Reduces visible content area
- May require excessive scrolling to reach main content
- Could be hidden/collapsible on mobile

**Recommendation:**
- Consider making the outline collapsible/expandable on mobile
- Use a sticky "Table of Contents" button that opens a modal/drawer
- Or hide the outline entirely on mobile and rely on scroll-based navigation

**Screenshot Reference:** Visible in case study pages

---

### 2. Horizontal Scrolling Cards - Touch Target Size
**Pages Affected:**
- `/` (Home page - "What I Bring" section)

**Issue:**
The horizontal scrolling cards section has scroll buttons (left/right arrows) that may not have optimal touch target sizes. While functional, the buttons could be larger for better mobile usability.

**Impact:**
- Smaller touch targets may be difficult to tap accurately
- Users might accidentally scroll the page instead of the card carousel

**Recommendation:**
- Ensure scroll buttons are at least 44×44px (Apple HIG recommendation)
- Add swipe gesture support for native mobile feel
- Consider adding visual indicators for scrollable content

---

## Medium Priority Issues

### 3. Testimonials Section - Spacing and Readability
**Pages Affected:**
- `/` (Home page)

**Issue:**
The testimonials section uses pagination dots and navigation buttons. On mobile, the spacing between elements could be optimized, and the testimonial text might benefit from better line-height for improved readability.

**Impact:**
- Text may feel cramped on smaller screens
- Pagination dots might be too small for easy tapping

**Recommendation:**
- Increase line-height for testimonial text (1.6-1.8)
- Ensure pagination dots are at least 12×12px with adequate spacing
- Consider larger touch targets for prev/next buttons

---

### 4. Resume Page - Contact Links Layout
**Pages Affected:**
- `/resume`

**Issue:**
The contact information section (LinkedIn, Portfolio, Email, Location) uses vertically stacked buttons. While functional, the layout could benefit from better visual hierarchy and spacing on mobile.

**Impact:**
- Takes up significant vertical space
- Could be optimized for quicker scanning

**Recommendation:**
- Consider a more compact layout (e.g., 2-column grid for icons)
- Ensure all links have adequate spacing (minimum 8px between touch targets)
- Verify email link doesn't wrap awkwardly on smaller devices

---

### 5. My Story Page - Photo Strip Section
**Pages Affected:**
- `/my-story`

**Issue:**
The photo strip section displays multiple images horizontally. On mobile, these images may be too small to appreciate detail, or the horizontal scroll might not be immediately obvious to users.

**Impact:**
- Users might not realize the section is scrollable
- Images may be too small to see details

**Recommendation:**
- Add visual indicators (fade edges, scroll hints) to indicate horizontal scroll
- Consider larger image sizes or a different layout for mobile
- Add swipe gesture support

---

### 6. Contact Page - Session Cards Spacing
**Pages Affected:**
- `/contact`

**Issue:**
The mentorship session cards ("Exclusive Talk" and "Design Mentorship with Masih") are well-designed but could benefit from slightly more spacing between elements on mobile for better visual separation.

**Impact:**
- Cards might feel cramped
- Text readability could be improved

**Recommendation:**
- Increase padding between session cards (minimum 16px)
- Ensure CTA buttons have adequate spacing from card content
- Verify time badges are clearly visible

---

## Low Priority Issues

### 7. Footer Text Size
**Pages Affected:**
- All pages

**Issue:**
The footer text ("© 2025 Masih Sadri. Crafted with empathy and care.") uses a smaller font size that might be difficult to read on some mobile devices.

**Impact:**
- Minor readability concern
- Not critical but affects polish

**Recommendation:**
- Ensure footer text meets WCAG AA contrast requirements
- Consider slightly larger font size (minimum 14px)
- Verify text is readable in both light and dark modes

---

### 8. Navigation Menu - Hamburger Icon
**Pages Affected:**
- All pages

**Issue:**
The hamburger menu icon appears functional, but the menu drawer behavior wasn't fully tested. Ensure the menu opens smoothly and doesn't cause layout shifts.

**Impact:**
- User experience during navigation
- Potential accessibility concerns

**Recommendation:**
- Test menu animation performance
- Ensure menu doesn't cause horizontal scroll
- Verify menu closes on outside click/tap
- Test keyboard navigation within menu

---

### 9. Case Study Pages - Long Text Blocks
**Pages Affected:**
- `/case-studies/divar-secure-call`
- `/case-studies/setare-aval-engagement`

**Issue:**
Some paragraphs in case studies are quite long. While readable, they could benefit from slightly increased line-height for better mobile reading experience.

**Impact:**
- Reading fatigue on mobile
- Slightly reduced readability

**Recommendation:**
- Increase line-height for body text to 1.6-1.7
- Consider breaking up very long paragraphs
- Ensure adequate paragraph spacing (minimum 16px)

---

### 10. Home Page - Hero Section CTA Buttons
**Pages Affected:**
- `/` (Home page)

**Issue:**
The hero section has two CTA buttons ("View case study" and "To be in touch"). Verify these buttons have adequate spacing and are easily tappable.

**Impact:**
- Button spacing might be tight on smaller devices
- Risk of accidental taps

**Recommendation:**
- Ensure buttons are at least 44×44px touch targets
- Add minimum 8px spacing between buttons
- Verify buttons don't overlap on very small screens (320px)

---

## Accessibility Considerations

### 11. Touch Target Sizes
**Pages Affected:**
- All pages

**Issue:**
While most interactive elements appear appropriately sized, verify all touch targets meet WCAG 2.1 Level AAA requirements (minimum 44×44px).

**Recommendation:**
- Audit all interactive elements (buttons, links, form inputs)
- Ensure minimum 44×44px touch target size
- Add adequate spacing between touch targets (minimum 8px)

---

### 12. Text Contrast
**Pages Affected:**
- All pages

**Issue:**
Verify all text meets WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text).

**Recommendation:**
- Test text contrast in both light and dark modes
- Use automated tools (e.g., axe DevTools) to verify compliance
- Pay special attention to gray text on light backgrounds

---

## Performance Considerations

### 13. Image Loading
**Pages Affected:**
- All pages with images

**Issue:**
Verify images are properly optimized for mobile devices (WebP/AVIF formats, appropriate sizes, lazy loading).

**Recommendation:**
- Ensure images use responsive srcset
- Verify lazy loading is implemented
- Test image loading performance on slow 3G connections

---

## Testing Recommendations

### Additional Testing Needed:
1. **Real Device Testing:** Test on actual iOS and Android devices
2. **Orientation Testing:** Verify layouts work in both portrait and landscape
3. **Keyboard Testing:** Test form inputs and search functionality
4. **Gesture Testing:** Verify swipe gestures work on carousels and photo strips
5. **Dark Mode Testing:** Ensure all pages work correctly in dark mode
6. **Smaller Screens:** Test on devices with 320px width (iPhone SE)

---

## Summary

**Total Issues Found:** 13  
**Critical:** 0  
**High Priority:** 2  
**Medium Priority:** 4  
**Low Priority:** 4  
**Accessibility:** 2  
**Performance:** 1  

### Overall Assessment

The portfolio website is generally well-designed for mobile devices. The layout is responsive, text is readable, and navigation is functional. The main areas for improvement are:

1. **Case study navigation** - Consider making it collapsible on mobile
2. **Touch target sizes** - Verify all interactive elements meet accessibility standards
3. **Spacing optimization** - Fine-tune spacing in several sections for better mobile UX

Most issues are minor and can be addressed through incremental improvements. The site provides a solid mobile experience overall.

---

## Next Steps

1. Prioritize high-priority issues (case study navigation, touch targets)
2. Test on real devices to validate findings
3. Implement improvements incrementally
4. Re-test after changes
5. Consider user testing for mobile-specific workflows

---

**Report Generated:** January 2025  
**Tested Viewport:** 375px × 812px  
**Pages Reviewed:** 7 (Home, My Story, Contact, Resume, 2 Case Studies, 404)

