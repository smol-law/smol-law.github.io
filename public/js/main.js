$('.menu__link').click(function(e) {
  $('.menu__item').removeClass('menu__item--current');
  $(e.target).parent('.menu__item').addClass('menu__item--current');
});

ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
}
