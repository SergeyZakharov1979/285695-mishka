// mobile menu
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

// popup cart
var btnProductOfTheWeek = document.querySelector('.product-of-the-week__btn');
var popupCart = document.querySelector('.modal-cart');
var popupBg = document.querySelector('.modal-cart--bg');

if (btnProductOfTheWeek) {
  btnProductOfTheWeek.addEventListener('click', function(event) {
    event.preventDefault();
    popupCart.classList.add('modal-cart--on');
    popupBg.classList.add('modal-cart--bg-on');
  });
}

popupBg.addEventListener('click', function(event) {
  event.preventDefault();
  popupCart.classList.remove('modal-cart--on');
  popupBg.classList.remove('modal-cart--bg-on');
});

window.addEventListener('keydown', function(event) {
  event.preventDefault();
  if (event.keyCode === 27) {
    popupCart.classList.remove('modal-cart--on');
    popupBg.classList.remove('modal-cart--bg-on');
  }
});

// popup cart-catalog
var btnCartCatalog = document.querySelectorAll('.catalog-item__cart');
var popupCart = document.querySelector('.modal-cart');
var popupBg = document.querySelector('.modal-cart--bg');

if (btnCartCatalog && popupCart) {
  btnCartCatalog.forEach(function(item, i) {
    item.addEventListener('click', function(event) {
    event.preventDefault();
      popupCart.classList.add('modal-cart--on');
      popupBg.classList.add('modal-cart--bg-on');
    });

    popupBg.addEventListener('click', function(event) {
    event.preventDefault();
      popupCart.classList.remove('modal-cart--on');
      popupBg.classList.remove('modal-cart--bg-on');
    });

  });
  
  window.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.keyCode === 27) {
      popupCart.classList.remove('modal-cart--on');
      popupBg.classList.remove('modal-cart--bg-on');
    }
  });
}