import debounce from 'lodash.debounce';
const images = [...document.querySelectorAll('img')]; 
const progressMeter = document.querySelector('.progress-meter');

const hamburger = document.querySelector('.hamburger-container');
  const focus = document.querySelector('.focus-content');

  function dropDownMenu() {
    focus.classList.toggle('open');
    hamburger.classList.toggle('open');
  }

  function imageTransition(e) {
    images.map(img => {
      const scroll = window.scrollY + window.innerHeight;
      if (scroll >= img.offsetTop + img.height/4) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }

  function progressBar() {
    const scrollHeight = window.scrollY;
    const maxScroll = 1454;
    const scrollPercent = Math.round((scrollHeight / maxScroll) * 100);
    console.log(scrollPercent);
    progressMeter.style.width = `${scrollPercent}%`;
  }



  hamburger.addEventListener('click', dropDownMenu);
  window.addEventListener('scroll', debounce(imageTransition, 50));
  window.addEventListener('scroll', progressBar);