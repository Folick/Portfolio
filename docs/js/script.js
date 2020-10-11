$(function () {
  $(".menu__btn").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".menu__list").toggleClass("is-active")
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $('.box__per').each(function () {
    let $this = $(this);
    let per = $this.attr('per');
    $this.css("width", per + '%');
    $({
      animatedValue: 0
    }).animate({
      animatedValue: per
    }, {
      duration: 1000,
      step: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
  $('#fullpage').fullpage({
    anchors: ['intro', 'about', 'skill', 'contact'],
    menu: '#header__nav',
    lazyLoading: true,
    verticalCentered: true,
    autoScrolling: true,
    scrollHorizontally: true,
    scrollingSpeed: 1111,
    scrollOverflow: true,
    sectionSelector: '.page-section',
  });
});
let typedLogo = new Typed('.logo__link', {
  strings: ["Hello", "Privet", "Alexander Cherkas", "FOLICK"],
  typeSpeed: 200,
});
let typedTitle = new Typed('.intro__title h1', {
  strings: ["1 0 1", "{hello?}", "This site portfolio", "{introTitle<?>}", "Это сайт портфолио Александра"],
  typeSpeed: 90,
});
// let mySwiper = new Swiper('.swiper-container', {
//   direction: 'horizontal',
//   loop: true,
//   autoplay: {
//     delay: 2000,
//   },
//   slidesPerView: 3,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });