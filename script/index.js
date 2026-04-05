const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

const featureViews = {
  manager: document.getElementById('med-manager'),
  recorder: document.getElementById('med-recorder'),
  history: document.getElementById('med-history')
}

let initialize = () => {
  // Only show the manager section by default
  for (const [key, value] of Object.entries(featureViews)) {
    if (key === 'manager') {
      value.style.display = 'block';
    } else {
      value.style.display = 'none';
    }
  }
}

initialize();