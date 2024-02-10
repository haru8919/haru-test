jQuery(function ($) {
  $(".js-hamburger, .js-drawer").on("click", function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-open");
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

// const Swiper = new Swiper(".swiper2", {
//   loop: true,
//   slidesPerView: "auto",
//   spaceBetween: 18,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     1025: {
//       spaceBetween: 32,
//     },
//   },
// });

const swiper2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 18,
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1025: {
      spaceBetween: 32,
    },
  },
});
