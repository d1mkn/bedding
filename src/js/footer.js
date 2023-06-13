import { refs } from './refs/refs';

const catalog = refs.catalogTitle;
const catalogList = refs.catalogList;
const info = refs.infoTitle;
const infoList = refs.infoList;
const contacts = refs.contactsTitle;
const contactsList = refs.contactsList;

window.addEventListener('deviceorientation', checkInnerWidth);
window.addEventListener('resize', checkInnerWidth);

function checkInnerWidth() {
  if (document.documentElement.clientWidth > 767) {
    catalogList.classList.remove('visually-hidden');
    infoList.classList.remove('visually-hidden');
    contactsList.classList.remove('visually-hidden');
    return;
  } else {
    catalogList.classList.add('visually-hidden');
    infoList.classList.add('visually-hidden');
    contactsList.classList.add('visually-hidden');

    catalog.addEventListener('click', toggleCatalog);
    info.addEventListener('click', toggleInfo);
    contacts.addEventListener('click', toggleContacts);
  }
}

function toggleCatalog() {
  catalog.classList.toggle('active');

  if (catalog.classList.contains('active')) {
    catalogList.classList.remove('visually-hidden');
    catalog.style.pointerEvents = 'none';
    setTimeout(() => {
      catalog.style.pointerEvents = 'auto';
    }, 500);
  } else {
    catalog.style.pointerEvents = 'none';
    setTimeout(() => {
      catalog.removeAttribute('style');
      catalogList.classList.toggle('visually-hidden');
    }, 500);
  }
}

function toggleInfo() {
  info.classList.toggle('active');

  if (info.classList.contains('active')) {
    infoList.classList.remove('visually-hidden');
    info.style.pointerEvents = 'none';
    setTimeout(() => {
      info.style.pointerEvents = 'auto';
    }, 500);
  } else {
    info.style.pointerEvents = 'none';
    setTimeout(() => {
      info.removeAttribute('style');
      infoList.classList.toggle('visually-hidden');
    }, 500);
  }
}

function toggleContacts() {
  contacts.classList.toggle('active');

  if (contacts.classList.contains('active')) {
    contactsList.classList.remove('visually-hidden');
    contacts.style.pointerEvents = 'none';
    setTimeout(() => {
      contacts.style.pointerEvents = 'auto';
    }, 500);
  } else {
    contacts.style.pointerEvents = 'none';
    setTimeout(() => {
      contacts.removeAttribute('style');
      contactsList.classList.toggle('visually-hidden');
    }, 500);
  }
}

checkInnerWidth();
