<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/slick.css">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/hover.css">
  <link rel="stylesheet" href="css/wickedcss.min.css">
  <link rel="stylesheet" type="text/css" href="https://csshake.surge.sh/csshake.min.css">
  <link rel="stylesheet" href="css/style.css">
  <title>Домашняя работа № 23</title>
</head>

<body>
  <?php include('navbar.php') ?>;
  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-block">
          <div class="hero-text wow fadeInLeft" data-wow-delay=".5s">
            <h2 class="hero-text__title">Спасибо за заявку</h2>
            <span class="hero-text__subtitle">Мы свяжемся с вами в ближайшее время</span>
          </div>
          <!-- /.hero-text -->
          <div class="hero-image wow fadeInRight" data-wow-delay=".9s">
            <img class="hero-image__photo" src="img/hero/hero-image.png" alt="План комнаты">
          </div>
          <!-- /.hero-image -->
        </div>
        <!-- /.hero-block -->
      </div>
      <!-- /.container -->
    </section>
  </main>

  <form id="modal-form">
    <div class="modal">
      <div class="modal-dialog">
        <button class="modal-dialog__close">&times;</button>
        <h4 class="modal-dialog__title">Узнайте точную стоимость ремонта по телефону!</h4>
        <span class="modal-dialog__subtitle">Заполните поля ниже - мы свяжемся с Вами</span>
        <div class="input-box">
          <input autocomplete="off" type="text" name="username" class="modal-dialog__input input"
            placeholder="Ваше имя">
        </div>
        <div class="input-box">
          <input autocomplete="off" type="tel" name="phone" class="modal-dialog__input input phone"
            placeholder="Ваш телефон">
        </div>
        <button class="modal-dialog__button button">Узнать стоимость</button>
        <span class="modal-dialog__text-min">Или Вы можете перезвонить нам сами по телефону:</span>
        <span class="modal-dialog__text-max">+7 (8182) 42-51-31</span>
      </div>
    </div>
  </form>

  <div id="toTop" class="button">Наверх</div>

  <script src="https://api-maps.yandex.ru/2.1/?&lang=ru_RU" type="text/javascript"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="js/slick.min.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>


  <script>
    /* Инициализация карты по средством api*/

    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [59.960336564135, 30.30855599999996],
        zoom: 17
      });
      var myPlacemark = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: [59.960336564135, 30.30855599999996]
        }
      });
      var myPlacemark = new ymaps.Placemark([59.960336564135, 30.30855599999996], {
        hintContent: 'Ремонт Квартир',
        balloonContent: '<strong>Россия, Санкт-Петербург, улица Ленина, 10</strong>'
      });
      myMap.geoObjects.add(myPlacemark);

    }

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
          minlength: jQuery.validator.format("Введи еще {0} символа !"),
          maxlength: 'Вводите не более 15 символов'
        },
        phone: 'Введите телефон'
      },
      errorClass: "invalid-offer",
      errorElement: "div"
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
          email: 'Адрес должен быть вида name@domain.ru'
        },
        phone: 'Введите телефон'
      },
      errorClass: "invalid",
      errorElement: "div"
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
      errorElement: "div"
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
  </script>
</body>

</html>