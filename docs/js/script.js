window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
$(function () {
  $(".menu__btn").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".menu__list").toggleClass("is-active")
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
});
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.utils.toArray(".menu__list .menu__item .menu__link").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: e.target.getAttribute("href")
    });
  });
});

// function animateFrom(elem, direction) {
//   direction = direction | 1;

//   var x = 0,
//     y = direction * 100;
//   if (elem.classList.contains("left")) {
//     x = -100;
//     y = 0;
//   } else if (elem.classList.contains("right")) {
//     x = 100;
//     y = 0;
//   }
//   gsap.fromTo(elem, {
//     x: x,
//     y: y,
//     autoAlpha: 0,
//   }, {
//     duration: 1.5,
//     x: 0,
//     y: 0,
//     autoAlpha: 1,
//     ease: "ease-in",
//     overwrite: "auto"
//   });
// }

// function hide(elem) {
//   gsap.set(elem, {
//     autoAlpha: 0,
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray(".anim").forEach(function (elem) {
//     hide(elem);
//     ScrollTrigger.create({
//       start: 'top 99%',
//       trigger: elem,
//       markers: true,
//       onEnter: function () {
//         animateFrom(elem)
//       },
//       onEnterBack: function () {
//         animateFrom(elem, 1)
//       },
//       onLeave: function () {}
//     });
//   });
// });
// gsap.from('.menu__btn, .logo', {
//   y: -100,
//   duration: 1.25,
// });

let wow = new WOW({
  boxClass: 'anim',
  animateClass: 'anim',
  offset: 0,
  mobile: true,
  live: true,
});
wow.init();