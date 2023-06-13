import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper-container', {
  loop: false,

  on: {
    init: function () {
      const nextEl = this.navigation.nextEl;
      const prevEl = this.navigation.prevEl;

      if (nextEl.classList.contains('swiper-button-disabled')) {
        nextEl.style.opacity = '0.5';
      } else {
        nextEl.removeAttribute('style');
      }

      if (prevEl.classList.contains('swiper-button-disabled')) {
        prevEl.style.opacity = '0.5';
      } else {
        prevEl.removeAttribute('style');
      }
    },

    slideChange: function () {
      const nextEl = this.navigation.nextEl;
      const prevEl = this.navigation.prevEl;

      if (nextEl.classList.contains('swiper-button-disabled')) {
        nextEl.style.opacity = '0.5';
      } else {
        nextEl.removeAttribute('style');
      }

      if (prevEl.classList.contains('swiper-button-disabled')) {
        prevEl.style.opacity = '0.5';
      } else {
        prevEl.removeAttribute('style');
      }
    },
  },

  breakpoints: {
    320: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },

    768: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
});

const nextIcons = document.querySelectorAll(
  '.single-category__navigation-icon-next'
);
const prevIcons = document.querySelectorAll(
  '.single-category__navigation-icon-prev'
);

nextIcons.forEach(icon => {
  const nextEl = icon.closest('.swiper-button-next');

  nextEl.addEventListener('click', () => {
    if (nextEl.classList.contains('swiper-button-disabled')) {
      return;
    }

    icon.classList.add('icow35');
    setTimeout(() => {
      icon.classList.remove('icow35');
    }, 200);
  });
});

prevIcons.forEach(icon => {
  const prevEl = icon.closest('.swiper-button-prev');

  prevEl.addEventListener('click', () => {
    if (prevEl.classList.contains('swiper-button-disabled')) {
      return;
    }

    icon.classList.add('icow35');
    setTimeout(() => {
      icon.classList.remove('icow35');
    }, 200);
  });
});
