import { refs } from './refs/refs';
import mobileMenu from './mobileMenu';

function headerDropdown() {
  const dropdownItems = refs.dropdownItems;

  dropdownItems.forEach(item => {
    const dropdownMenu = item.querySelector('.visually-hidden');

    item.addEventListener('mouseenter', () => {
      dropdownMenu.classList.remove('visually-hidden');
    });

    item.addEventListener('mouseleave', () => {
      dropdownMenu.classList.add('visually-hidden');
    });
  });
}
headerDropdown();

function headerSearchForm() {
  const searchBtn = refs.searchBtn;
  const searchForm = refs.searchForm;

  searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('search__form--visible');
  });
}
headerSearchForm();
