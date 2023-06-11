import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper-container', {
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    1240: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});
