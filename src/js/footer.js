import { refs } from './refs/refs';

const catalog = refs.catalogTitle;
const catalogList = refs.catalogList;
const info = refs.infoTitle;
const infoList = refs.infoList;
const contacts = refs.contactsTitle;
const contactsList = refs.contactsList;

function checkInnerWidth() {
  if (document.documentElement.clientWidth > 767) {
    catalogList.classList.remove('visually-hidden');
    infoList.classList.remove('visually-hidden');
    contactsList.classList.remove('visually-hidden');
  } else {
    catalogList.classList.add('visually-hidden');
    infoList.classList.add('visually-hidden');
    contactsList.classList.add('visually-hidden');
  }
}
checkInnerWidth();

window.addEventListener('deviceorientation', checkInnerWidth);
window.addEventListener('resize', checkInnerWidth());
