gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

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

const t1 = gsap.timeline();
t1.from(".home__title", {
    duration: 1.5,
    opacity: 0,
    scale: .3,
    y: 50,
    ease: 'back',
    // markers: true,
  })
  .from(".home__text", {
    direction: 1.5,
    opacity: 0,
    scale: .6,
    y: 50,
    stagger: 0.25,
    // markers: true,
  });
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: "top bottom-=350",
    end: "bottom bottom-=100",
    // markers: true,
  }
});
t2.from(".about__title", {
    duration: 1.25,
    delay: .3,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from(".about__box", {
    duration: 1.25,
    x: 150,
    opacity: 0,
    scale: .8,
  })
  .from(".about__photo", {
    duration: 1.25,
    x: -150,
    opacity: 0,
    scale: .8,
  }, "-=1.25");
const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.skill',
    start: "top bottom-=350",
    end: "bottom bottom-=100",
    // markers: true,
  }
});
t3.from(".skill__title", {
    duration: 1.25,
    delay: .3,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from('.skill__item', {
    duration: 1.25,
    stagger: 0.10,
    y: 100,
    opacity: 0,
  });
const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.portfolio',
    start: "top bottom-=350",
    end: "bottom bottom-=100",
    // markers: true,
  }
});
t4.from(".portfolio__title", {
    duration: 1.25,
    delay: .3,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from('.list .list__item', {
    duration: 1.5,
    stagger: 0.5,
    y: 150,
    opacity: 0,
  })
const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact',
    start: "top bottom-=350",
    end: "bottom bottom-=100",
    // markers: true,
  }
});
t5.from(".contact__title", {
    duration: 1.5,
    delay: .3,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from('.social__item', {
    duration: 1.5,
    // stagger: 0.25,
    y: 111,
    opacity: 0,
  })