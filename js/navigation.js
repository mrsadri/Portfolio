// Mobile Navigation Toggle

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuToggle || !navLinks) {
        return;
    }

    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        
        // Toggle aria-expanded
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle active class on nav links
        navLinks.classList.toggle('active');
        
        // Update button text/icon if needed
        if (!isExpanded) {
            mobileMenuToggle.setAttribute('aria-label', 'Close navigation menu');
        } else {
            mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
        }
    });

    // Close menu when clicking on a link (mobile)
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            }
        }
    });
});

