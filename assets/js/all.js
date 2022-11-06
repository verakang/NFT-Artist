"use strict";

$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      992: {
        slidesPerView: 2.5,
        spaceBetween: 30
      }
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  var $grid = $('.grid').masonry({// options...
  }); // layout Masonry after each image loads

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
});
//# sourceMappingURL=all.js.map
