document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.textContent = isOpen ? 'Close' : 'Menu';
});

// Close mobile menu after selecting a section
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      toggle.textContent = 'Menu';
    }
  });
});

// Research cards — buttons in a row, detail panels expand full-width below
const researchButtons = document.querySelectorAll('.research-card');

function closeDetail(button) {
  const detail = document.getElementById(button.dataset.target);
  if (!detail) return;
  detail.style.maxHeight = null;
  detail.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
}

function openDetail(button) {
  const detail = document.getElementById(button.dataset.target);
  if (!detail) return;
  detail.classList.add('open');
  detail.style.maxHeight = detail.scrollHeight + 'px';
  button.setAttribute('aria-expanded', 'true');

  // Images load asynchronously — recheck height once each one is ready
  // so the panel doesn't clip figures before they've loaded.
  detail.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', () => {
        if (button.getAttribute('aria-expanded') === 'true') {
          detail.style.maxHeight = detail.scrollHeight + 'px';
        }
      });
    }
  });
}

researchButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Close every button/panel first
    researchButtons.forEach(closeDetail);

    // Reopen this one only if it wasn't already open
    if (!isOpen) {
      openDetail(button);
    }
  });
});
