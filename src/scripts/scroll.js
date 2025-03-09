const mapElement = document.querySelector('.portfolio-map-wrap');

function isFullyVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function onScroll() {
  if (mapElement && isFullyVisible(mapElement)) {
    scrollToEnd(mapElement);
    window.removeEventListener('scroll', onScroll);
  }
}

function scrollToEnd(element) {
  const start = element.scrollLeft;
  const end = element.scrollWidth - element.clientWidth;
  const duration = 2000; // Duration in milliseconds
  let startTime = null;

  function animateScroll(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      element.scrollLeft = start + (end - start) * progress;

      if (progress < 1) {
          requestAnimationFrame(animateScroll);
      }
  }

  requestAnimationFrame(animateScroll);
}

window.addEventListener('scroll', onScroll);
