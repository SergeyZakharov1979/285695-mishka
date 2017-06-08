var navMain1 = document.querySelector('.main-nav__list1');
var navMain2 = document.querySelector('.main-nav__list2');
var navToggle = document.querySelector('.main-nav__toggle');

navMain1.classList.remove('main-nav--nojs');
navMain2.classList.remove('main-nav--nojs');
navToggle.classList.add('main-nav--open');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav--open')) {
    navToggle.classList.remove('main-nav--open');
    navToggle.classList.add('main-nav--close');

    navMain1.classList.add('main-nav__list--opened');
    navMain2.classList.add('main-nav__list--opened');
    navMain1.classList.remove('main-nav__list--closed');
    navMain2.classList.remove('main-nav__list--closed');
  }

  else {
    navToggle.classList.remove('main-nav--close');
    navToggle.classList.add('main-nav--open');

    navMain1.classList.remove('main-nav__list--opened');
    navMain2.classList.remove('main-nav__list--opened');
    navMain1.classList.add('main-nav__list--closed');
    navMain2.classList.add('main-nav__list--closed');
  }
});
