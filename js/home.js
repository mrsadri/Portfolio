document.addEventListener('DOMContentLoaded', () => {
  // ——— Case Study Recap Modals ———
  const recapData = {
    divar: {
      headline: "How cross-functional guardrails helped Divar reduce harassment incidents by 60%",
      bullets: [
        "Co-led a task force bridging Trust & Safety, Legal, and Engineering.",
        "Shipped dynamic voice-masking with abuse detection for 2.1M weekly callers.",
        "Stood up playbooks for moderation ops to monitor repeat offenders.",
      ],
    },
    'setare-aval': {
      headline: "How we re-architected Setare Aval's onboarding to double retained revenue",
      bullets: [
        "Mapped a new lifecycle model tied to data-backed experimentation.",
        "Refined activation flows to spotlight value props within first session.",
        "Co-created a learning agenda to measure loyalty program traction.",
      ],
    },
    'setare-yek': {
      headline: "How I redesigned SetareYek's bill payment to increase adoption from 4% to 47%",
      bullets: [
        "Led multi-method research uncovering trust, transparency, and workflow challenges at Setare Aval.",
        "Designed six interconnected solutions addressing core user needs and emotional drivers.",
        "Learned from failure: Version 1 taught us that great UX requires great technical performance.",
      ],
    },
    'physical-receipt': {
      headline: "How we discovered that physical receipts drive 6% higher user retention",
      bullets: [
        "Company wanted to reduce costs by motivating users to skip physical receipts.",
        "Data analysis revealed users who received physical receipts returned 6% more than digital-only users.",
        "The 6% retention improvement meant lower acquisition costs, changing our strategy to encourage physical receipts.",
      ],
    },
  };

  const modal = document.getElementById('recap-modal');
  const modalOverlay = document.getElementById('recap-modal-overlay');
  const modalHeadline = document.getElementById('recap-headline');
  const modalBullets = document.getElementById('recap-bullets');
  const modalClose = document.getElementById('recap-modal-close');

  function openModal(id) {
    const data = recapData[id];
    if (!data) return;

    modalHeadline.textContent = data.headline;
    modalBullets.innerHTML = data.bullets
      .map(b => `<li class="modal-bullet">${b}</li>`)
      .join('');

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalClose.focus(), 50);
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-recap]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.recap));
  });

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('open')) closeModal();
  });

  // ——— Testimonial Carousel ———
  const track = document.getElementById('testimonial-track');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  let currentIndex = 0;

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, totalCards - getVisibleCount());
  }

  function updateCarousel() {
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // Update buttons
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= getMaxIndex();
  }

  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; updateCarousel(); }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentIndex < getMaxIndex()) { currentIndex++; updateCarousel(); }
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { currentIndex = i; updateCarousel(); });
  });

  // Auto-play
  let autoplay = setInterval(() => {
    if (currentIndex >= getMaxIndex()) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  }, 5000);

  track.parentElement?.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.parentElement?.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => {
      if (currentIndex >= getMaxIndex()) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel();
    }, 5000);
  });

  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < getMaxIndex()) { currentIndex++; updateCarousel(); }
      if (diff < 0 && currentIndex > 0) { currentIndex--; updateCarousel(); }
    }
  });

  window.addEventListener('resize', () => updateCarousel());
  updateCarousel();
});
