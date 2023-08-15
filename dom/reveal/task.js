
const revealElements = document.querySelectorAll('.reveal');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function revealOnScroll() {
  revealElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();