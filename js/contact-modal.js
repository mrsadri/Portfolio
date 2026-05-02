(function () {
  var overlay = null;

  function buildModal() {
    var el = document.createElement('div');
    el.id = 'contact-modal-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'cm-title');
    el.innerHTML =
      '<div class="cm-card">' +
        '<button class="cm-close" id="cm-close" aria-label="Close">' +
          '<i class="bi bi-x-lg"></i>' +
        '</button>' +
        '<div class="cm-icon"><i class="bi bi-telegram"></i></div>' +
        '<h2 class="cm-title" id="cm-title">Let\'s connect</h2>' +
        '<p class="cm-desc">I respond fastest on Telegram — tap below and you\'ll land directly in our chat.</p>' +
        '<a href="https://t.me/masihsadri" target="_blank" rel="noopener noreferrer" class="cm-cta" id="cm-cta">' +
          '<i class="bi bi-telegram"></i> Message on Telegram' +
        '</a>' +
        '<a href="#" class="cm-alt" id="cm-alt">Prefer email? Visit the contact page →</a>' +
      '</div>';
    document.body.appendChild(el);

    el.addEventListener('click', function (e) {
      if (e.target === el) closeModal();
    });
    document.getElementById('cm-close').addEventListener('click', closeModal);
    document.getElementById('cm-cta').addEventListener('click', function () {
      setTimeout(closeModal, 200);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    return el;
  }

  function openModal(contactPageUrl) {
    if (!overlay) overlay = buildModal();
    var alt = document.getElementById('cm-alt');
    if (alt) alt.href = contactPageUrl || 'contact.html';
    overlay.classList.add('cm-open');
    document.body.classList.add('cm-no-scroll');
    setTimeout(function () {
      var close = document.getElementById('cm-close');
      if (close) close.focus();
    }, 60);
  }

  function closeModal() {
    if (overlay) overlay.classList.remove('cm-open');
    document.body.classList.remove('cm-no-scroll');
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-contact-modal]');
    if (!trigger) return;
    e.preventDefault();
    openModal(trigger.dataset.contactPage || 'contact.html');
  });
}());
