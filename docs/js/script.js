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
// var textWrapper = document.querySelector(".intro-title");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /([^\x00-\x80]|\w)/g,
//   "<span class='letter'>$&</span>"
// );
// anime
//   .timeline({
//     loop: false
//   })
//   .add({
//     targets: ".intro-title .letter",
//     translateX: [140, 0],
//     translateZ: 0,
//     opacity: [0, 1],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: function (el, i) {
//       return 500 + 50 * i;
//     }
//   })
//   .add({
//     targets: ".intro-title .letter",
//     translateX: [0, -140],
//     opacity: [1, 0],
//     easing: "easeInExpo",
//     duration: 1200,
//     delay: function (el, i) {
//       return 700 + 50 * i;
//     }
//   });
// gsap.to(".loader", {
//   duration: 2.,
//   delay: 5,
//   top: "-100%",
//   ease: "expo.inOut"
// });
let mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  speed: 1000,
  mousewheel: {

  }
})
mySwiper.on('slideChangeTransitionStart', function () {
  $('.swiper-slide').css('transform', "scale(.8)");
}).on("slideChangeTransitionEnd", function () {
  $('.swiper-slide').css('transform', "scale(1)");
});