const logos = document.querySelectorAll('.services-showcase .swiper-slide');
const button = document.querySelector('#show_more_services');
let buttonActive = false;

let midscreen;

hideContent(false);
window.addEventListener('resize', () => hideContent(false));

button.addEventListener('click', () => {
  if (!buttonActive) {
    showAll(logos);
    button.classList.add('swiper__show-more-button--active');
    button.textContent = 'Скрыть';
    buttonActive = true;
  } else {
    hideContent(true);
    button.classList.remove('swiper__show-more-button--active');
    button.textContent = 'Показать все';
    buttonActive = false;
  }
});

function hideContent(isButton) {
  if ((!buttonActive || isButton) && window.innerWidth > 760) {
    midscreen = window.innerWidth > 760 && window.innerWidth <= 1440;

    if (window.innerWidth > 760 && window.innerWidth < 1440) {
      hideByNumber(3, logos);
    } else if (window.innerWidth >= 1440) {
      hideByNumber(4, logos);
    }
  } else {
    showAll(logos);
  }
}

function hideByNumber(number, array) {
  showAll(logos);

  for (let i = number; i < array.length; i++) {
    array[i].classList.add('hidden');
  }
}

function showAll(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove('hidden');
  }
}
