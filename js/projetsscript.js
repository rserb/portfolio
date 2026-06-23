new Swiper('.swiper', {

  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,

  // Nombre de cartes visibles selon la largeur d'écran
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
