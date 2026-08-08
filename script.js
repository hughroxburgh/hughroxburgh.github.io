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

// Expandable research cards — accordion (only one open at a time)
const researchToggles = document.querySelectorAll('.research-toggle');

function closeCard(button) {
  const detail = button.nextElementSibling;
  detail.style.maxHeight = null;
  button.setAttribute('aria-expanded', 'false');
  button.querySelector('.expand-hint').textContent = '+ read more';
}

function openCard(button) {
  const detail = button.nextElementSibling;
  detail.style.maxHeight = detail.scrollHeight + 'px';
  button.setAttribute('aria-expanded', 'true');
  button.querySelector('.expand-hint').textContent = '– close';
}

researchToggles.forEach(button => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Close every card first
    researchToggles.forEach(closeCard);

    // Reopen this one only if it wasn't already open
    if (!isOpen) {
      openCard(button);
    }
  });
});
