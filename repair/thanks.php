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

</body>

</html>