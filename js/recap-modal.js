// Recap Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('recap-modal');
    const modalBody = document.getElementById('recap-modal-body');
    const closeBtn = document.querySelector('.recap-modal-close');
    const overlay = document.querySelector('.recap-modal-overlay');
    const recapButtons = document.querySelectorAll('.case-study-recap-btn');

    // Recap content for each case study
    const recapContent = {
        divar: {
            title: 'Divar: Reducing Harassment by 60%',
            problem: 'Users posting clothing ads were being harassed through phone calls. Harassers were saving phone numbers, checking them on WhatsApp/social media, confirming sellers were female, and then proceeding with harassment.',
            solution: 'Implemented an intermediary number system that hides real phone numbers while maintaining call functionality. Added bidirectional mapping, extended mapping time, voice message introductions, and a 100-number pool for scalability.',
            impact: [
                '~60% reduction in harassment reports',
                '~2.1 million active users per week using secure call feature',
                'Significant increase in secure call adoption in clothing category',
                'Users felt safer posting clothing ads'
            ],
            link: 'case-studies/divar-secure-call.html'
        },
        'setare-aval': {
            title: 'Setare Aval: Increasing Retention by 45%',
            problem: 'Users were making one-time purchases and not returning. The platform had high churn rates with users not engaging with the product beyond initial transactions.',
            solution: 'Implemented progressive value discovery, engagement nudges & triggers, and community & social features. Redesigned onboarding to introduce core value gradually and added contextual notifications that add value.',
            impact: [
                '45% increase in 90-day retention',
                'Transformed short-term users into loyal customers',
                'Improved user engagement and long-term value',
                'Built a sustainable user base'
            ],
            link: 'case-studies/setare-aval-engagement.html'
        }
    };

    // Function to open modal with recap content
    function openRecap(studyKey) {
        const content = recapContent[studyKey];
        if (!content) return;

        modalBody.innerHTML = `
            <h2 class="recap-title" id="recap-modal-title">${content.title}</h2>
            <div class="recap-section">
                <h3 class="recap-section-title">Problem</h3>
                <p class="recap-text">${content.problem}</p>
            </div>
            <div class="recap-section">
                <h3 class="recap-section-title">Solution</h3>
                <p class="recap-text">${content.solution}</p>
            </div>
            <div class="recap-section">
                <h3 class="recap-section-title">Impact</h3>
                <ul class="recap-impact-list">
                    ${content.impact.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="recap-actions">
                <a href="${content.link}" class="recap-link">Read Full Case Study →</a>
            </div>
        `;

        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeRecap() {
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    recapButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const studyKey = this.getAttribute('data-recap');
            openRecap(studyKey);
        });
    });

    closeBtn.addEventListener('click', closeRecap);
    overlay.addEventListener('click', closeRecap);

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeRecap();
        }
    });
});

