document.addEventListener('DOMContentLoaded', () => {
  // ——— Outline / Progress tracking ———
  const sections = document.querySelectorAll('.cs-section[id]');
  const outlineLinks = document.querySelectorAll('.cs-outline-link');

  if (!sections.length || !outlineLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        outlineLinks.forEach(link => {
          const href = link.getAttribute('href') || '';
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0,
  });

  sections.forEach(section => observer.observe(section));
});
