gsap.config({
  nullTargetWarn: false,
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
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    let menu = document.querySelector(".menu__list");
    menu.classList.toggle("sticky", window.scrollY > 100);
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