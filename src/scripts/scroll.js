const mapElement = document.querySelector('.portfolio-map-wrap');

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight;
}

function onScroll() {
  if (mapElement && isElementVisible(mapElement)) {
    setTimeout(() => {
      smoothScrollRight();
    }, 1000);
    window.removeEventListener('scroll', onScroll);
  }
}

function smoothScrollRight() {
  mapElement.scrollBy({ left: 1180, behavior: 'smooth' });
}

window.addEventListener('scroll', onScroll);
