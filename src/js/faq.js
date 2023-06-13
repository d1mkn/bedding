import { refs } from './refs/refs';

refs.faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      answer.classList.toggle('visually-hidden');
      item.style.pointerEvents = 'none';
      setTimeout(() => {
        item.style.pointerEvents = 'auto';
      }, 1000);
    } else {
      item.style.pointerEvents = 'none';
      setTimeout(() => {
        item.removeAttribute('style');
        answer.classList.toggle('visually-hidden');
      }, 1000);
    }
  });
});
