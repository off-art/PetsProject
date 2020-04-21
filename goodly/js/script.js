let desc = document.querySelectorAll('.item-card__desc_text'); // Кнопка "Важная информация"
let close = document.querySelectorAll('.item-card-hide_close'); // Кнопка закрытия 

desc.forEach(function (element) {
  element.onclick = function(e) {
    e.preventDefault();
    let data = this.getAttribute('data-open');
    let hide = document.querySelector(`.item-card-hide[data-open = "${data}"]`);
    console.log(hide)
    hide.classList.toggle('show');
  }
});
close.forEach(function (el) {
  el.onclick = function (e) {
    e.preventDefault();
    console.log('work')
    let data = this.getAttribute('data-open');
    let hide = document.querySelector(`.item-card-hide[data-open = "${data}"]`);
    hide.classList.remove('show');
  }
});


// // Кнопка закрытия всех элементов сразу  
// close.forEach( function(el) {
//   el.onclick = function(e) {
//     hid.forEach(function(elem) {
//       e.preventDefault();
//       elem.classList.remove('show')
//     })
//   }
// })