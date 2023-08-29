var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
  });

  