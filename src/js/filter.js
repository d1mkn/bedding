import { refs } from './refs/refs';

refs.categoryItems.forEach(item => {
  const dropdownMenu = item.querySelector('.visually-hidden');

  item.addEventListener('mouseenter', () => {
    dropdownMenu.classList.remove('visually-hidden');
  });

  item.addEventListener('mouseleave', () => {
    dropdownMenu.classList.add('visually-hidden');
  });
});
