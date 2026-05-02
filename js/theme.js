(() => {
  const STORAGE_KEY = 'color-mode';

  function getInitialMode() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {}
    return 'light';
  }

  function applyMode(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    try { localStorage.setItem(STORAGE_KEY, mode); } catch {}

    // Update all toggle checkboxes
    document.querySelectorAll('.theme-checkbox').forEach(cb => {
      cb.checked = mode === 'dark';
    });

    // Update aria-labels
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${mode === 'light' ? 'dark' : 'light'} mode`);
    });
  }

  function toggleMode() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyMode(current === 'light' ? 'dark' : 'light');
  }

  // Apply immediately to avoid flash
  applyMode(getInitialMode());

  // Wire up after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-toggle]').forEach(el => {
      el.addEventListener('click', toggleMode);
    });

    document.querySelectorAll('.theme-checkbox').forEach(cb => {
      cb.checked = (document.documentElement.getAttribute('data-theme') === 'dark');
      cb.addEventListener('change', toggleMode);
    });
  });
})();
