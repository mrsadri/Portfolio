document.addEventListener('DOMContentLoaded', () => {
  // ——— Active nav link ———
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const hash = window.location.hash;

  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const [linkPath, linkHash] = href.split('#');
    const normLinkPath = linkPath.replace(/\/$/, '') || '/';

    let isActive = false;
    if (linkHash) {
      // Hash links (e.g. /#section-case-studies) – never active
      isActive = false;
    } else if (normLinkPath === '/index.html' || normLinkPath === '/') {
      isActive = path === '/' || path === '/index.html' || path === '';
    } else {
      isActive = path === normLinkPath || path.endsWith(normLinkPath);
    }

    if (isActive) link.classList.add('active');
  });

  // ——— Mobile drawer ———
  const overlay = document.getElementById('mobile-drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');
  const openBtn = document.getElementById('nav-mobile-open');
  const closeBtn = document.getElementById('nav-mobile-close');

  function openDrawer() {
    overlay?.classList.add('open');
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeDrawer() {
    overlay?.classList.remove('open');
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
    openBtn?.focus();
  }

  openBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Close on nav link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Escape key closes drawer
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ——— Smooth scroll for hash links ———
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href') || '';
      const [linkPath, anchorId] = href.split('#');
      const normLinkPath = linkPath.replace(/\/$/, '') || '/';
      const isSamePage = !linkPath || normLinkPath === path || linkPath === '/index.html';

      if (isSamePage && anchorId) {
        const target = document.getElementById(anchorId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeDrawer();
        }
      }
    });
  });
});
