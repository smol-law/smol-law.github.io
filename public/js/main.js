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

  $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var scrollTo = 0;

      if (target.length) {
        scrollTo = target.offset().top;
      }

      console.log(scrollTo)

      $('html, body').animate({
        scrollTop: scrollTo
      }, 250);
      return false;
    }
  });

})
