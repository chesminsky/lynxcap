const init = () => {
  const elements = {
    // pie 1
    spain: document.querySelectorAll('[data-id="spain"]') || [],
    greece: document.querySelectorAll('[data-id="greece"]') || [],
    croatia: document.querySelectorAll('[data-id="croatia"]') || [],
    slovenia: document.querySelectorAll('[data-id="slovenia"]') || [],
    montenegro: document.querySelectorAll('[data-id="montenegro"]') || [],
    serbia: document.querySelectorAll('[data-id="serbia"]') || [],

    // pie 2
    land: document.querySelectorAll('[data-id="land"]') || [],
    commercial: document.querySelectorAll('[data-id="commercial"]') || [],
    residential: document.querySelectorAll('[data-id="residential"]') || []
  };

  const classes = {
    highlighted: 'pie-highlighted'
  };

  Object.values(elements).forEach((sliceElements) => {
    [...sliceElements].forEach((sliceElem) => {
      sliceElem.addEventListener('mouseenter', () => {
        [...sliceElements].forEach((el) => el.classList.add(classes.highlighted));
      });

      sliceElem.addEventListener('mouseleave', () => {
        [...sliceElements].forEach((el) => el.classList.remove(classes.highlighted));
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', init);
