import { refs } from './refs/refs';

const sections = refs.footerSections;

window.addEventListener('deviceorientation', checkInnerWidth);
window.addEventListener('resize', checkInnerWidth);

function checkInnerWidth() {
  if (document.documentElement.clientWidth > 767) {
    refs.catalogList.classList.remove('visually-hidden');
    refs.infoList.classList.remove('visually-hidden');
    refs.contactsList.classList.remove('visually-hidden');
    return;
  } else {
    refs.catalogList.classList.add('visually-hidden');
    refs.infoList.classList.add('visually-hidden');
    refs.contactsList.classList.add('visually-hidden');
  }
}

checkInnerWidth();

sections.forEach(section => {
  const info = section.querySelector('.js-footer-section-info');
  section.addEventListener('click', () => {
    section.classList.toggle('active');

    if (section.classList.contains('active')) {
      info.classList.remove('visually-hidden');
      section.style.pointerEvents = 'none';
      setTimeout(() => {
        section.style.pointerEvents = 'auto';
      }, 500);
    } else {
      section.style.pointerEvents = 'none';
      setTimeout(() => {
        section.removeAttribute('style');
        info.classList.toggle('visually-hidden');
      }, 500);
    }
  });
});
