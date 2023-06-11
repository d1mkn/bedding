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

  on: {
    slideChange: function () {
      const nextEl = this.navigation.nextEl;
      const prevEl = this.navigation.prevEl;

      if (nextEl.classList.contains('swiper-button-disabled')) {
        nextEl.style.opacity = '0.7';
      } else {
        nextEl.removeAttribute('style');
      }

      if (prevEl.classList.contains('swiper-button-disabled')) {
        prevEl.style.opacity = '0.7';
      } else {
        prevEl.removeAttribute('style');
      }
    },

    init: function () {
      const nextEl = this.navigation.nextEl;
      const prevEl = this.navigation.prevEl;

      if (nextEl.classList.contains('swiper-button-disabled')) {
        nextEl.style.opacity = '0.7';
      } else {
        nextEl.removeAttribute('style');
      }

      if (prevEl.classList.contains('swiper-button-disabled')) {
        prevEl.style.opacity = '0.7';
      } else {
        prevEl.removeAttribute('style');
      }
    },
  },
});

const nextEl = document.querySelector('.swiper-button-next');
const prevEl = document.querySelector('.swiper-button-prev');
const nextIcon = document.querySelector(
  '.single-category__navigation-icon-next'
);
const prevIcon = document.querySelector(
  '.single-category__navigation-icon-prev'
);

nextEl.addEventListener('click', () => {
  if (nextEl.classList.contains('swiper-button-disabled')) {
    return;
  }

  nextIcon.classList.add('icow35');
  setTimeout(() => {
    nextIcon.classList.remove('icow35');
  }, 250);
});

prevEl.addEventListener('click', () => {
  if (prevEl.classList.contains('swiper-button-disabled')) {
    return;
  }

  prevIcon.classList.add('icow35');
  setTimeout(() => {
    prevIcon.classList.remove('icow35');
  }, 250);
});
