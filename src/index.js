import './index.css';

const init = () => {
  const elements = {
    burger: document.querySelector('[data-id="open-nav"]'),
    closeNav: document.querySelector('[data-id="close-nav"]'),
    mobileNav: document.querySelector('[data-id="mobile-nav"]'),

    termsTrigger: document.querySelector('[data-id="terms-trigger"]'),
    termsOverlay: document.querySelector('[data-id="terms-overlay"]'),
    termsClose: document.querySelectorAll('[data-id="terms-close"]') || [],
    termsContent: document.querySelector('[data-id="terms"]'),

    bondsModalTrigger: document.querySelector('[data-id="bonds-modal-trigger"]'),
    bondsModalOverlay: document.querySelector('[data-id="bonds-modal-overlay"]'),
    bondsModalClose: document.querySelector('[data-id="bonds-modal-close"]'),
    bondsScrollable: document.querySelector('[data-id="bonds-modal-scrollable"]'),
    
    accordionItems: document.querySelectorAll('[data-id="accordion-item') || [],

    requestOverlay: document.querySelector('[data-id="request-modal-overlay"]'),
    requestModalTrigger: document.querySelector('[data-id="request-modal-trigger"]'),
    requestModalClose: document.querySelectorAll('[data-id="request-modal-close"]') || [],
    
    teamModalTrigger: document.querySelectorAll('[data-id="team-trigger"]') || [],
    teamModalClose: document.querySelectorAll('[data-id="team-close"]') || [],
    teamModalOverlay: document.querySelector('[data-id="team-overlay"]'),
    teamContent: document.querySelector('[data-id="team"]')
  };

  const classes = {
    menuHidden: 'menu-hidden',
    termsHidden: 'terms-hidden',
    hidden: 'hidden',
    noScroll: 'noscroll',
    expanded: 'is-expanded',
    tableShifted: 'table-shifted'
  };

  const app = {
    openTerms() {
      elements.termsOverlay?.classList.remove(classes.hidden);
      document.body?.classList.add(classes.noScroll);
      setTimeout(() => {
        elements.termsContent?.classList.remove(classes.termsHidden);
      });
    },
    closeTerms() {
      elements.termsOverlay?.classList.add(classes.hidden);
      elements.termsContent?.classList.add(classes.termsHidden);
      document.body.classList.remove(classes.noScroll);
    },
    openRequestModal() {
      elements.requestOverlay?.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
    },
    closeRequestModal() {
      elements.requestOverlay?.classList.add(classes.hidden);
      document.body.classList.remove(classes.noScroll);
    },

    openTeamModal() {
      elements.teamModalOverlay?.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
      setTimeout(() => {
        elements.teamContent?.classList.remove(classes.termsHidden);
      });
    },
    closeTeamModal() {
      elements.teamModalOverlay?.classList.add(classes.hidden);
      elements.teamContent?.classList.add(classes.termsHidden);
      document.body.classList.remove(classes.noScroll);
    },

    openBondsModal() {
      elements.bondsModalOverlay?.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
    },
    closeBondsModal() {
      elements.bondsModalOverlay?.classList.add(classes.hidden);
      document.body.classList.remove(classes.noScroll);
    }
  };

  [...elements.teamModalTrigger].forEach((item) => {
    item.addEventListener('click', () => {
      app.openTeamModal();
    });
  });
  [...elements.teamModalClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeTeamModal();
    });
  });

  elements.burger?.addEventListener('click', () => {
    elements.mobileNav?.classList.remove(classes.menuHidden);
  });

  elements.closeNav?.addEventListener('click', () => {
    elements.mobileNav?.classList.add(classes.menuHidden);
  });

  elements.termsTrigger?.addEventListener('click', () => {
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

  elements.requestModalTrigger?.addEventListener('click', () => {
    app.openRequestModal();
  });

  [...elements.requestModalClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeRequestModal();
    });
  });

  elements.bondsModalTrigger?.addEventListener('click', () => {
    app.openBondsModal();
    elements.bondsScrollable.addEventListener('scroll', handleHorizontalScroll);
  });

  elements.bondsModalClose.addEventListener('click', () => {
    elements.bondsScrollable.removeEventListener('scroll', handleHorizontalScroll);
    app.closeBondsModal();
  });

  console.log('app initialized...');

  window.app = app;

  function handleHorizontalScroll({ target }) {
    if (target.scrollLeft > 0) {
      target.classList.add(classes.tableShifted);
    } else {
      target.classList.remove(classes.tableShifted);
    }
  }
};

document.addEventListener('DOMContentLoaded', init);
