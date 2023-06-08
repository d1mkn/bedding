import { refs } from './refs/refs';

function openModal() {
  refs.modal.classList.remove('visually-hidden');
  refs.modalBackdrop.classList.remove('visually-hidden');
  refs.modalBackdrop.classList.add('animate__fadeIn');
  document.body.classList.add('modal-open');
}

function closeModal() {
  refs.modalBackdrop.classList.remove('animate__fadeIn');
  refs.modalBackdrop.classList.add('animate__fadeOut');
  setTimeout(() => {
    refs.modalBackdrop.classList.add('visually-hidden');
    refs.modal.classList.add('visually-hidden');
    refs.modalBackdrop.classList.remove('animate__fadeOut');
    document.body.classList.remove('modal-open');
  }, 500);
}

refs.modalTriggerList.forEach(item =>
  item.addEventListener('click', openModal)
);

refs.modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

refs.closeButton.addEventListener('click', closeModal);

refs.modal.addEventListener('click', e => {
  e.stopPropagation();
});

refs.addButton.addEventListener('click', () => {
  refs.toCardWrap.classList.add('show');
  closeModal();
  setTimeout(() => {
    refs.toCardWrap.classList.remove('show');
  }, 5500);
});
