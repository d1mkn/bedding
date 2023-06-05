const buttons = document.querySelectorAll('.cabinet-navigation__button');
const sections = document.querySelectorAll('.cabinet-section');

// Устанавливаем начальное состояние
buttons[0].classList.add('active');
sections[0].classList.add('cabinet-section-active');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    sections.forEach(section => {
      section.classList.remove('cabinet-section-active');
    });

    const selectedSection = document.getElementById(target);
    selectedSection.classList.add('cabinet-section-active');

    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});
