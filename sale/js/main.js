/* Табы */

(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);


/* Ползунок возвращающий все наверх */
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

// Мелкие слайдеры
if ($(window).width() <= 1200) {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ['<img src="img/slide-left.png">','<img src="img/slide-right.png">' ],
      responsive:{
        0: {
          items: 1
        },
        600: {
          items: 2
        }
      }
    });
  });
}

// /* Маска для телефона*/
// $('.phone').mask('+7(999) 999-99-99');

/* Инициализация валидатора форм */
$('#modal-faq').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      required: true
    },
    useremail: {
      required: true,
      email: true
    }
  },
  messages: {
    username: {
      required: 'Введите вопрос',
      minlength: jQuery.validator.format("Еще {0} символа"),
      maxlength: 'Вводите не более 15 символов'
    },
    useremail: {
      required: 'Введите e-mail',
      email: 'Адрес должен быть вида name@domain.ru'
    },
    phone: 'Введите телефон'
  },
  errorElement: "div",
  submitHandler: function() {
    $('#modal-thanks').css({'display': 'block'});
    setTimeout(() => {
    $('#modal-thanks').css('display', 'none');
    $('.modal-product-add').css('display', 'none')
    }, 5000);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('#modal-faq').serialize(),
      success: function (responce) {
        $('#modal-faq')[0].reset();
        console.log('Данные успешно отправлены');
      },
      error: function(responce) {
        console.error('error');
      }
    })
  }
});

/* Добавление псевдоэлемента меню */
$('.topmenu li:first-child').on('mouseover', function() {
  $('.menu').addClass('menu_active')
});
$('.topmenu li').on('mouseout', function() {
  $('.menu').removeClass('menu_active')
});


/* Вызов модальных окон */
$(document).ready(function () {
  // Кнопки вызова модалок
  let addCart = $('#new_add');
  let infoFaq = $('.faq');
  let modalOneClick = $('#oneClick');
  let login = $('#login');
  let lk = $('#lk');
  let logout = $('#logout');
  let registr = $('#registr');
  let onClick = $('.sale-cards__oneclick')
  // Сами модалки куда добавляем новый атрибут
  let modalAdd = $('#modal-add');
  let modalFaq = $('#modal-faq');
  let modalClick = $('#modal-one-click');
  let modalAuthorization = $('#modal-authorization');
  let modalLk = $('#modal-login');
  let modalReg = $('#modal-registration');
  // Закрытие всех модалок
  let allModal = $('.modal-product-add');
  let closeModal = $('.modal-product-add__close');
  let closeModalBlack = $('.modal-product-add__close_black');
  //  События по модальным окнам
  addCart.on('click', function (e) {
    e.preventDefault();
    modalAdd.css({
      'display': 'block'
    })
  });
  infoFaq.on('click', function (e) {
    e.preventDefault();
    modalFaq.css({
      'display': 'block'
    })
  });
  modalOneClick.on('click', function (e) {
    e.preventDefault();
    modalClick.css({
      'display': 'block'
    })
  });
  login.on('click', function (e) {
    e.preventDefault();
    modalAuthorization.css({
      'display': 'block'
    })
  });
  lk.on('click', function (e) {
    e.preventDefault();
    modalLk.css({
      'display': 'block'
    })
  });
  registr.on('click', function (e) {
    e.preventDefault();
    modalReg.css({
      'display': 'block'
    })
  });
  onClick.on('click', function (e) {
    e.preventDefault();
    modalClick.css({
      'display': 'block'
    })
  });



  closeModal.on('click', function (e) {
    e.preventDefault();
    allModal.css({
      'display': 'none'
    })
  });
  closeModalBlack.on('click', function (e) {
    e.preventDefault();
    allModal.css({
      'display': 'none'
    })
  });
  logout.on('click', function (e) {
    e.preventDefault();
    allModal.css({
      'display': 'none'
    })
  });
})



