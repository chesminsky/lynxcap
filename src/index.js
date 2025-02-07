import './index.css';

const init = () => {
  const el = {
    burger: document.querySelector('[data-id="open-nav"]'),
    close: document.querySelector('[data-id="close-nav"]'),
    mobileNav: document.querySelector('[data-id="mobile-nav"]'),
    termsTrigger: document.querySelector('[data-id="terms-trigger"]'),
    termsOverlay: document.querySelector('[data-id="terms-overlay"]'),
    termsClose: document.querySelectorAll('[data-id="terms-close"]'),
    termsContent: document.querySelector('[data-id="terms"]'),
    accordionItems: document.querySelectorAll('[data-id="accordion-item')
  };

  const classes = {
    menuHidden: 'menu-hidden',
    termsHidden: 'terms-hidden',
    hidden: 'hidden',
    noScroll: 'noscroll',
    expanded: 'is-expanded'
  };

  el.burger.addEventListener('click', () => {
    el.mobileNav.classList.remove(classes.menuHidden);
  });

  el.close.addEventListener('click', () => {
    el.mobileNav.classList.add(classes.menuHidden);
  });

  el.termsTrigger.addEventListener('click', () => {
    el.termsOverlay.classList.remove(classes.hidden);
    document.body.classList.add(classes.noScroll);
    setTimeout(() => {
      el.termsContent.classList.remove(classes.termsHidden);
    });
  });

  [...el.termsClose].forEach((item) => {
    item.addEventListener('click', () => {
      el.termsOverlay.classList.add(classes.hidden);
      el.termsContent.classList.add(classes.termsHidden);
      document.body.classList.remove(classes.noScroll);
    });
  });

  [...el.accordionItems].forEach((item) => {
    item.addEventListener('click', ({ currentTarget }) => {
      currentTarget.classList.toggle(classes.expanded);
    });
  });

  console.log('app initialized...');
};

document.addEventListener('DOMContentLoaded', init);
