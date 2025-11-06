// Smooth Scroll Animations - Inspired by pouria.design
// Handles fade-in, slide-up, and stagger animations on scroll

document.addEventListener('DOMContentLoaded', function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip animations if user prefers reduced motion
    }

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(`
        .section-title,
        .section-subtitle,
        .hero-content > *,
        .hero-story-content > *,
        .case-study-card,
        .experience-card,
        .story-content,
        .testimonial-card,
        .reference-card,
        .education-item,
        .certificate-item,
        .solution-card,
        .learning-card,
        .impact-stat,
        .stat-box-card-inline,
        .mentorship-card,
        .contact-method-card,
        .help-card,
        .photo-card,
        .attestation-item,
        .skill-card-story
    `);

    // Add animation classes and observe
    animateElements.forEach((element, index) => {
        element.classList.add('fade-in-up');
        element.style.setProperty('--animation-delay', `${index * 0.1}s`);
        observer.observe(element);
    });

    // Staggered animations for grid items
    const gridContainers = document.querySelectorAll(`
        .case-studies-grid,
        .experience-grid,
        .testimonial-grid,
        .references-grid,
        .learnings-grid,
        .contact-methods-grid,
        .help-grid,
        .photo-gallery,
        .skills-grid-story
    `);

    gridContainers.forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            child.style.setProperty('--stagger-delay', `${index * 0.1}s`);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero sections
    const heroSections = document.querySelectorAll('.hero, .hero-story');
    if (heroSections.length > 0 && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            heroSections.forEach(hero => {
                const heroContent = hero.querySelector('.hero-content, .hero-story-content');
                if (heroContent) {
                    const rate = scrolled * 0.3;
                    heroContent.style.transform = `translateY(${rate}px)`;
                    heroContent.style.opacity = Math.max(0, 1 - scrolled / 500);
                }
            });
        }, { passive: true });
    }

    // Text reveal animation for hero elements
    const heroNames = document.querySelectorAll('.hero-name, .hero-story-title, .hero-story-subtitle, .hero-story-description');
    heroNames.forEach((element, index) => {
        if (element.classList.contains('animate-text-reveal')) {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('text-reveal');
        }
    });

    // Card hover lift effect
    const cards = document.querySelectorAll('.case-study-card, .experience-card, .reference-card, .learning-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

