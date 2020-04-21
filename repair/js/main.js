let call = document.querySelector('.navbar__button');
let modal = document.querySelector('.modal');
let modal_thanks = document.querySelector('.modal-thanks');
let close = document.querySelector('.modal-dialog__close');


/* Загрузка карты после наведения */
$('.map-wrap').mouseenter(function() {
  setTimeout(function() {
    if(!$('#map').children('ymaps').length > 0) {
    $('.map-wrap').html('<div class="map" id="map"><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acbe096abfea857f10b0a8d60fd79fdff8d3a0c4b5ecbfcc36ff2d3a0240c6279&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script></div>')
    }
  }, 500);
  }
  );
  // $('#map').on("load", function() {
  // });


/* Инициализация модального окна*/

function closeModal() {
  modal.classList.remove('modal_active');
};
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    return closeModal()
  }
});
close.addEventListener('click', closeModal);


/* Маска для телефона*/
$('.phone').mask('+7(999) 999-99-99');

/* Инициализация валидатора форм */

$('#offer-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      required: true
    }
  },
  messages: {
    username: {
      required: 'Введите имя',
      minlength: jQuery.validator.format("Еще {0} символа"),
      maxlength: 'Вводите не более 15 символов'
    },
    phone: 'Введите телефон'
  },
  errorClass: "invalid-offer",
  errorElement: "div",
  submitHandler: function (form) {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('#offer-form').serialize(),
      success: function (responce) {
        $('#offer-form')[0].reset();
        console.log('Данные успешно отправлены');
        modal_thanks.classList.add('modal-thanks_active');
      },
      error: function (responce) {
        console.error('error')
      }
    })

  }
});
$('#brif-form').validate({
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
      required: 'Введите имя',
      minlength: jQuery.validator.format("Введи еще {0} символа !"),
      maxlength: 'Вводите не более 15 символов'
    },
    useremail: {
      required: 'Введите e-mail',
      email: 'Формат name@domain.ru'
    },
    phone: 'Введите телефон'
  },
  errorClass: "invalid",
  errorElement: "div",
  submitHandler: function (form) {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('#brif-form').serialize(),
      success: function (responce) {
        $('#brif-form')[0].reset();
        console.log('Данные успешно отправлены');
        modal_thanks.classList.add('modal-thanks_active');
      },
      error: function (responce) {
        console.error('error')
      }
    })

  }
});
$('#modal-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      required: true
    }
  },
  messages: {
    username: {
      required: 'Введите имя',
      minlength: jQuery.validator.format("Введи еще {0} символа !"),
      maxlength: 'Вводите не более 15 символов'
    },
    phone: 'Введите телефон'
  },
  errorClass: "invalid-modal",
  errorElement: "div",
  submitHandler: function (form) {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('#modal-form').serialize(),
      success: function (responce) {
        $('#modal-form')[0].reset();
        console.log('Данные успешно отправлены');
        modal_thanks.classList.add('modal-thanks_active');
      },
      error: function (responce) {
        console.error('error')
      }
    })
  }
});

/* Инициализация анимации */
new WOW().init();

/*   Инициализация слайдера */
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    autoplay: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

