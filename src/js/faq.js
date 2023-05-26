import { refs } from './refs/refs';

refs.faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
