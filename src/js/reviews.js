import { refs } from './refs/refs';

const formShowBtn = refs.formShowBtn;
const form = refs.reviewForm;

formShowBtn.addEventListener('click', () => {
  if (form.classList.contains('visually-hidden')) {
    form.classList.toggle('visually-hidden');
    form.classList.toggle('h0');
    form.classList.toggle('h486');
    form.classList.toggle('animate__fadeInDown');
    setTimeout(() => {
      form.classList.toggle('animate__fadeInDown');
    }, 1000);
  } else {
    form.classList.add('animate__fadeOutUp');
    form.classList.toggle('h0');
    form.classList.toggle('h486');
    setTimeout(() => {
      form.classList.toggle('visually-hidden');
      form.classList.remove('animate__fadeOutUp');
    }, 1000);
  }
});
