import { refs } from './refs/refs';

function openModal() {
  refs.modal.style.display = 'block';
  refs.modalBackdrop.style.display = 'block';
  document.body.classList.add('modal-open');
}

function closeModal() {
  refs.modal.style.display = 'none';
  refs.modalBackdrop.style.display = 'none';
  document.body.classList.remove('modal-open');
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
