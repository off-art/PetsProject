$(document).ready(function () {
  let button = $('.navbar__button');
  let modal = $('.modal');
  let modal_thanks = $('.modal-thanks');
  let close = $('.modal-dialog__close');

  button.on('click', function () {
    modal.addClass('modal_active')
  });

  close.on('click', function () {
    modal.removeClass('modal_active');
    modal_thanks.removeClass('modal-thanks_active');
  })
});



$(function () {
  $(document).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }

  });

  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });
});