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


$(function() {
  var $window = $(window);
  var $navigation = $('.navigation');
  var $section = $('section', $navigation);
  var navigationOffsetTop = $navigation.offset().top;
  var $holder = $('.navigation ~ .holder');

  $holder.height($navigation.outerHeight());

  $window.on('scroll', function() {
    var isFixed = $navigation.hasClass('fixed');

    if ($window.scrollTop() > navigationOffsetTop) {
      if (!isFixed) {
        $navigation.addClass('fixed');
      }
    } else if (isFixed) {
      $navigation.removeClass('fixed');
    }
  });
})
