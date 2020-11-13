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
});
const t1 = gsap.timeline();
t1.from(".home__title", {
    duration: 1.1,
    opacity: 0,
    scale: .3,
    y: 50,
    ease: 'back',
    // markers: true,
  })
  .from(".home__text", {
    direction: 1.1,
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
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from(".about__box", {
    duration: 1.1,
    x: 150,
    opacity: 0,
    scale: .9,
  })
  .from(".about__photo", {
    duration: 1.1,
    x: -150,
    opacity: 0,
    scale: .9,
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
    duration: 1.1,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from('.skill__item', {
    duration: 1.1,
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
    duration: 1.1,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from('.list .list__item', {
    duration: 1.25,
    stagger: 0.25,
    y: 150,
    opacity: 0,
  })
const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact',
    start: "top bottom-=150",
    end: "bottom bottom-=50",
    // markers: true,
  }
});
t5.from(".contact__title", {
    duration: 1.1,
    x: -250,
    opacity: 0,
    scale: .8,
  })
  .from('.social__item', {
    duration: .9,
    // stagger: 0.25,
    y: 111,
    opacity: 0,
  })