import { refs } from './refs/refs';

function headerDropdown() {
  const dropdownItems = refs.dropdownItems;

  dropdownItems.forEach(item => {
    const dropdownMenu = item.querySelector('.js-hide-dropdown');

    item.addEventListener('mouseenter', () => {
      dropdownMenu.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
      dropdownMenu.style.display = 'none';
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
