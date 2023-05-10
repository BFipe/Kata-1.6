// core version + navigation, pagination modules:
import Swiper from "swiper/bundle";
// import Swiper and modules styles

let swiper;
let init = false;
const pagination = document.querySelector(".swiper-brands .swiper-pagination");
function swiperCard() {
  if (window.innerWidth <= 760) {
    if (!init) {
      pagination.classList.remove("hidden");

      init = true;

      swiper = new Swiper(".swiper-brands", {
        direction: "horizontal",
        slidesPerView: 2,
        initialSlide: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 0px
          0: {
            slidesPerView: 2,
            spaceBetween: 200,
            initialSlide: 0,
            centeredSlides: false,
          },
          // when window width is >= 320px
          370: {
            slidesPerView: 2,
            spaceBetween: 190,
            centeredSlides: true,
          },
          490: {
            slidesPerView: 2,
            spaceBetween: 100,
            centeredSlides: true,
          },
          610: {
            slidesPerView: 3,
            spaceBetween: 195,
            centeredSlides: true,
          },
        },
      });
    }
  } else if (init) {
    pagination.classList.add("hidden");
    if (swiper != "undefined") {
      swiper.destroy();
    }

    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);
