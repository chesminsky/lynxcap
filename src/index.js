import './index.css';

const init = () => {
  const el = {
    burger: document.querySelector('[data-id="open-nav"]'),
    close: document.querySelector('[data-id="close-nav"]'),
    mobileNav: document.querySelector('[data-id="mobile-nav"]'),
  };

  const classes = {
    menuHidden: 'menu-hidden',
  }

  el.burger.addEventListener('click', () => {
    el.mobileNav.classList.remove(classes.menuHidden);
  });

  el.close.addEventListener('click', () => {
    el.mobileNav.classList.add(classes.menuHidden);
  });

  console.log('app initialized...');
};

document.addEventListener('DOMContentLoaded', init);
