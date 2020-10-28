gsap.config({
  nullTargetWarn: false,
});
let slider = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 50,
  // centeredSlides: true,
  // loop: true,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// slider.on('slideChange', function () {
//   gsap.to('.swiper-slide-active', {
//     scale: .85,
//     duration: .5,
//   });
// });
// slider.on('slideChangeTransitionEnd', function () {
//   gsap.to('.swiper-slide-active', {
//     scale: 1,
//     ease: "power3.out",
//     duration: .5,
//   });
// });
// gsap.to('.swiper-slide', {
//   scale: .85,
//   duration: 0,
// });
// gsap.to('.swiper-slide-active', {
//   scale: 1,
//   duration: 0,
// });

$(function () {
  $(".menu__btn").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".menu__list").toggleClass("is-active")
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
});
// gsap
// gsap.utils.toArray(".menu__list .menu__item .menu__link").forEach(function (a) {
//   a.addEventListener("click", function (e) {
//     e.preventDefault();
//     gsap.to(window, {
//       duration: 1.5,
//       scrollTo: e.target.getAttribute("href")
//     });
//   });
// });
// gsap.from('.menu__btn, .logo', {
//   y: -100,
//   duration: 1.25,
// });
// wow
let wow = new WOW({
  boxClass: 'anim',
  animateClass: 'anim',
  // offset: 0,
  // mobile: true,
  // live: true,
});
wow.init();