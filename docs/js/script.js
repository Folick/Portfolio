$(function () {
  $(".menu__btn").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".menu__list").toggleClass("is-active")
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  const myScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    class: 'is-inview',
    repeat: true,
  });

});