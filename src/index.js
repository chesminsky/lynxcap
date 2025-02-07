import './index.css';

const init = () => {
  const elements = {
    burger: document.querySelector('[data-id="open-nav"]'),
    close: document.querySelector('[data-id="close-nav"]'),
    mobileNav: document.querySelector('[data-id="mobile-nav"]'),
    termsTrigger: document.querySelector('[data-id="terms-trigger"]'),
    termsOverlay: document.querySelector('[data-id="terms-overlay"]'),
    termsClose: document.querySelectorAll('[data-id="terms-close"]'),
    termsContent: document.querySelector('[data-id="terms"]'),
    accordionItems: document.querySelectorAll('[data-id="accordion-item'),
    requestOverlay: document.querySelector('[data-id="request-modal-overlay"]'),
    requestModalTrigger: document.querySelector('[data-id="request-modal-trigger"]'),
    requestModalClose: document.querySelectorAll('[data-id="request-modal-close"]'),
  };

  const classes = {
    menuHidden: 'menu-hidden',
    termsHidden: 'terms-hidden',
    hidden: 'hidden',
    noScroll: 'noscroll',
    expanded: 'is-expanded'
  };

  const app = {
    openTerms() {
      elements.termsOverlay.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
      setTimeout(() => {
        elements.termsContent.classList.remove(classes.termsHidden);
      });
    },
    closeTerms() {
      elements.termsOverlay.classList.add(classes.hidden);
      elements.termsContent.classList.add(classes.termsHidden);
      document.body.classList.remove(classes.noScroll);
    },
    openRequestModal() {
      elements.requestOverlay.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
    },
    closeRequestModal() {
      elements.requestOverlay.classList.add(classes.hidden);
      document.body.classList.remove(classes.noScroll);
    }
  }

  elements.burger.addEventListener('click', () => {
    elements.mobileNav.classList.remove(classes.menuHidden);
  });

  elements.close.addEventListener('click', () => {
    elements.mobileNav.classList.add(classes.menuHidden);
  });

  elements.termsTrigger.addEventListener('click', () => {
    app.openTerms();
  });

  [...elements.termsClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeTerms();
    });
  });

  [...elements.accordionItems].forEach((item) => {
    item.addEventListener('click', ({ currentTarget }) => {
      currentTarget.classList.toggle(classes.expanded);
    });
  });

  elements.requestModalTrigger.addEventListener('click', () => {
    app.openRequestModal();
  });

  [...elements.requestModalClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeRequestModal();
    });
  });

  console.log('app initialized...');

  window.app = app;
};

document.addEventListener('DOMContentLoaded', init);
