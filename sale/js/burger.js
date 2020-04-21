$(function () {
   if ($(window).width() <= 1200) {
  $('.navbar__button').on('click', function () {
    $('.mobile-menu').toggle();
    $('.mobile-menu-level-2').slideUp();
    $('.mobile-menu__item_active').removeClass('mobile-menu__item_active');
    // $('.mobile-menu__item').removeClass('mobile-menu__item_active');
  });
  $('.mobile-menu-level-2').hide().prev().click(function () {
    $('.mobile-menu-level-2').prev().toggleClass('mobile-menu__item_active');
    $('.mobile-menu-level-2').not(this).slideUp();
    $(this).next().not(":visible").slideDown();
    $('.mobile-menu__item-2_active').click();
  });

  $('.mobile-menu-level-3').hide().prev().click(function () {
    $('.mobile-menu-level-3').prev().toggleClass('mobile-menu__item-2_active');
    $('.mobile-menu-level-3').not(this).slideUp();
    $(this).next().not(":visible").slideDown();
    $('.mobile-menu__item-3_active').click();
  });

  $('.mobile-menu-level-4').hide().prev().click(function () {
    $('.mobile-menu-level-4').prev().toggleClass('mobile-menu__item-3_active');
    $('.mobile-menu-level-4').not(this).slideUp();
    $(this).next().not(":visible").slideDown();
    $('.mobile-menu__item-4_active').click();
  });
}
});
