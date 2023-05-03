  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles

let swiper;
let init = false;
const pagination = document.querySelector('.swiper-pagination');
function swiperCard() {
  if (window.innerWidth <= 575) {
    if (!init) {
      pagination.classList.remove('hidden');

      init = true;

      swiper = new Swiper('.swiper-brands', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        direction: 'horizontal',
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          370: {
            slidesPerView: 2,
            spaceBetween: 195,
          },
        },
      });
    }
  } else if (init) {
    pagination.classList.add('hidden');
    if  (swiper != 'undefined'){
      swiper.destroy();
    }

    init = false;
  }
}

swiperCard();
window.addEventListener('resize', swiperCard);
