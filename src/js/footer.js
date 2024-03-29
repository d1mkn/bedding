import { refs } from './refs/refs';

const sections = refs.footerSections;

window.addEventListener('resize', checkInnerWidth);

function checkInnerWidth() {
  if (document.documentElement.clientWidth < 767) {
    refs.catalogList.classList.add('visually-hidden');
    refs.infoList.classList.add('visually-hidden');
    refs.contactsList.classList.add('visually-hidden');
    return;
  } else {
    refs.catalogList.classList.remove('visually-hidden');
    refs.infoList.classList.remove('visually-hidden');
    refs.contactsList.classList.remove('visually-hidden');
  }
}

checkInnerWidth();

sections.forEach(section => {
  const info = section.querySelector('.js-footer-section-info');
  section.addEventListener('click', () => {
    section.classList.toggle('active');

    if (section.classList.contains('active')) {
      section.style.pointerEvents = 'none';
      info.classList.toggle('visually-hidden');
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
