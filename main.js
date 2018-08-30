const hamburger = document.querySelector('.hamburger-container');
  const focus = document.querySelector('.focus-content');

  function dropDownMenu() {
    focus.classList.toggle('open');
    hamburger.classList.toggle('open');
  }

  hamburger.addEventListener('click', dropDownMenu);