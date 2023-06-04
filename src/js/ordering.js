import { refs } from './refs/refs';

const checkbox1 = refs.orderingCheckbox1;
const checkbox2 = refs.orderingCheckbox2;
const orderingMethod1 = document.querySelector('.js-ordering-data1');
const orderingMethod2 = document.querySelector('.js-ordering-data2');
const orderingSummary = refs.orderingSummary;
const orderingDetails = refs.orderingDetails;

checkbox1.addEventListener('click', () => {
  orderingMethod1.classList.toggle('visually-hidden');
});

checkbox2.addEventListener('click', () => {
  orderingMethod2.classList.toggle('visually-hidden');
});

orderingSummary.addEventListener('click', () => {
  if (orderingDetails.hasAttribute('style')) {
    orderingDetails.removeAttribute('style');
    return;
  }
  orderingDetails.style.display = 'block';
});
