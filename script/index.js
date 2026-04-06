const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

const featureViews = {
  userLogin: document.getElementById('user-login'),
  manager: document.getElementById('med-manager'),
  recorder: document.getElementById('med-recorder'),
  history: document.getElementById('med-history')
}

let initialize = () => {
  // Only show the manager section by default
  showFeatureView('userLogin');
}

let showFeatureView = (feature) => {
  for (const [key, value] of Object.entries(featureViews)) {
    if (key === feature) {
      value.style.display = 'block';
    } else {
      value.style.display = 'none';
    }
  }
}

initialize();