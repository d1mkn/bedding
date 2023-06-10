import { refs } from './refs/refs';
import mobileMenu from './mobileMenu';

function headerSearchForm() {
  const searchBtn = refs.searchBtn;
  const searchForm = refs.searchForm;

  searchBtn.addEventListener('click', () => {
    if (searchForm.classList.contains('visually-hidden')) {
      searchForm.classList.toggle('animate__fadeIn');
      searchForm.classList.toggle('visually-hidden');
    } else {
      searchForm.classList.toggle('animate__fadeIn');
      searchForm.classList.toggle('animate__fadeOut');
      setTimeout(() => {
        searchForm.classList.toggle('visually-hidden');
        searchForm.classList.toggle('animate__fadeOut');
      }, 500);
    }
  });
}
headerSearchForm();
