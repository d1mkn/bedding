import { refs } from './refs/refs';

refs.menuBtn.addEventListener('click', () => {
  refs.backdrop.classList.remove('visually-hidden');
  refs.menuContainer.classList.add('is-open');
  document.body.classList.add('modal-open');
});

refs.backdrop.addEventListener('click', () => {
  refs.backdrop.classList.add('visually-hidden');
  refs.menuContainer.classList.remove('is-open');
  document.body.classList.remove('modal-open');
});

refs.closeBtn.addEventListener('click', () => {
  refs.backdrop.classList.add('visually-hidden');
  refs.menuContainer.classList.remove('is-open');
  document.body.classList.remove('modal-open');
});
