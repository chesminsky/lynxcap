import './index.css';
import './scripts/charts.js';

const init = () => {
  const elements = {
    burger: document.querySelector('[data-id="open-nav"]'),
    closeNav: document.querySelector('[data-id="close-nav"]'),
    mobileNav: document.querySelector('[data-id="mobile-nav"]'),

    termsTrigger: document.querySelector('[data-id="terms-trigger"]'),
    termsOverlay: document.querySelector('[data-id="terms-overlay"]'),
    termsClose: document.querySelectorAll('[data-id="terms-close"]') || [],
    termsContent: document.querySelector('[data-id="terms"]'),

    bondsPaymentsModalTrigger: document.querySelector('[data-id="bonds-payments-modal-trigger"]'),
    bondsPaymentsModalOverlay: document.querySelector('[data-id="bonds-payments-modal-overlay"]'),
    bondsPaymentsModalClose: document.querySelector('[data-id="bonds-payments-modal-close"]'),
    bondsPaymentsScrollable: document.querySelector('[data-id="bonds-payments-modal-scrollable"]'),

    bondsTranchesModalTrigger: document.querySelector('[data-id="bonds-tranches-modal-trigger"]'),
    bondsTranchesModalOverlay: document.querySelector('[data-id="bonds-tranches-modal-overlay"]'),
    bondsTranchesModalClose: document.querySelector('[data-id="bonds-tranches-modal-close"]'),
    bondsTranchesScrollable: document.querySelector('[data-id="bonds-tranches-modal-scrollable"]'),

    accordionItems: document.querySelectorAll('[data-id="accordion-item') || [],

    requestOverlay: document.querySelector('[data-id="request-modal-overlay"]'),
    requestModalTrigger: document.querySelector('[data-id="request-modal-trigger"]'),
    requestModalClose: document.querySelectorAll('[data-id="request-modal-close"]') || [],

    teamModalTrigger: document.querySelectorAll('[data-id="team-trigger"]') || [],
    teamModalClose: document.querySelectorAll('[data-id="team-close"]') || [],
    teamModalOverlay: document.querySelector('[data-id="team-overlay"]'),
    teamContent: document.querySelector('[data-id="team"]'),

    cookiesModal: document.querySelector('[data-id="cookies-modal"]'),
    cookiesModalClose: document.querySelectorAll('[data-id="cookies-modal-close"]') || [],
  };

  const classes = {
    menuHidden: 'menu-hidden',
    sideModalHidden: 'sidemodal-hidden',
    hidden: 'hidden',
    noScroll: 'noscroll',
    expanded: 'is-expanded',
    tableShifted: 'table-shifted'
  };

  const app = {
    openSideModal(overlay, content) {
      overlay?.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
      setTimeout(() => {
        content?.classList.remove(classes.sideModalHidden);
      });
    },
    closeSideModal(overlay, content) {
      overlay?.classList.add(classes.hidden);
      content?.classList.add(classes.sideModalHidden);
      document.body.classList.remove(classes.noScroll);
    },
    openModal(overlay) {
      overlay?.classList.remove(classes.hidden);
      document.body.classList.add(classes.noScroll);
    },
    closeModal(overlay) {
      overlay?.classList.add(classes.hidden);
      document.body.classList.remove(classes.noScroll);
    },
    openCookiesModal() {
      elements.cookiesModal.classList.remove(classes.hidden);
    },
    closeCookiesModal() {
      elements.cookiesModal.classList.add(classes.hidden);
    }
  };

  // MOBILE NAV
  elements.burger?.addEventListener('click', () => {
    elements.mobileNav?.classList.remove(classes.menuHidden);
  });

  elements.closeNav?.addEventListener('click', () => {
    elements.mobileNav?.classList.add(classes.menuHidden);
  });

  // TEAMS MODAL
  [...elements.teamModalTrigger].forEach((item) => {
    item.addEventListener('click', () => {
      app.openSideModal(elements.teamModalOverlay, elements.teamContent);
    });
  });
  [...elements.teamModalClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeSideModal(elements.teamModalOverlay, elements.teamContent);
    });
  });

  // TERMS
  elements.termsTrigger?.addEventListener('click', () => {
    app.openSideModal(elements.termsOverlay, elements.termsContent);
  });

  [...elements.termsClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeSideModal(elements.termsOverlay, elements.termsContent);
    });
  });

  // REQUEST MODAL
  elements.requestModalTrigger?.addEventListener('click', () => {
    app.openModal(elements.requestOverlay);
  });

  [...elements.requestModalClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeModal(elements.requestOverlay);
    });
  });

  // BONDS PAYMENTS MODAL
  elements.bondsPaymentsModalTrigger?.addEventListener('click', () => {
    app.openModal(elements.bondsPaymentsModalOverlay);
    elements.bondsPaymentsScrollable.addEventListener('scroll', handleHorizontalScroll);
  });

  elements.bondsPaymentsModalClose.addEventListener('click', () => {
    elements.bondsPaymentsScrollable.removeEventListener('scroll', handleHorizontalScroll);
    app.closeModal(elements.bondsPaymentsModalOverlay);
  });

  // BONDS TRANCHES MODAL
  elements.bondsTranchesModalTrigger?.addEventListener('click', () => {
    app.openModal(elements.bondsTranchesModalOverlay);
    elements.bondsTranchesScrollable.addEventListener('scroll', handleHorizontalScroll);
  });

  elements.bondsTranchesModalClose.addEventListener('click', () => {
    elements.bondsTranchesScrollable.removeEventListener('scroll', handleHorizontalScroll);
    app.closeModal(elements.bondsTranchesModalOverlay);
  });

  // ACCORDION
  [...elements.accordionItems].forEach((item) => {
    item.addEventListener('click', ({ currentTarget }) => {
      currentTarget.classList.toggle(classes.expanded);
    });
  });

  // COOKIES
  [...elements.cookiesModalClose].forEach((item) => {
    item.addEventListener('click', () => {
      app.closeCookiesModal();
    });
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
