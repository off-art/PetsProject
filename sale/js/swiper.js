/* Реализацию Большого слайдера */
var galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});