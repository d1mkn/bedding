import { refs } from './refs/refs';

refs.fabricsItems.forEach(item => {
  const question = item.querySelector('.fabrics__question');
  const answer = item.querySelector('.fabrics__answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
