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
    var windowScrollTop = $window.scrollTop();

    if (windowScrollTop > navigationOffsetTop) {
      if (!isFixed) {
        $navigation.addClass('fixed');
      }
    } else if (isFixed) {
      $navigation.removeClass('fixed');
    }
    var positionMap = {};

    $('h3[id]').each(function(index, item) {
      var parentScreen = $(item).parents("div[class^='screen-']");
      if (!parentScreen.length) {
        return;
      }

      positionMap[item.id] = $(parentScreen).offset().top + $(parentScreen).height() - 64; // menu height
    });

    var currentActive = null;

    for (var hash in positionMap) {
      if (positionMap[hash] >= windowScrollTop) {
        $('.menu__item').removeClass('menu__item--current');
        $('a[href="#' + hash + '"]').parent('.menu__item').addClass('menu__item--current');
        currentActive = hash;
        break;
      }
    }

    if (currentActive === null) {
      $('.menu__item').removeClass('menu__item--current');
      $('a[href="#"]').parent('.menu__item').addClass('menu__item--current');
    }
  });

  $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var scrollTo = 0;

      if (target.length) {
        scrollTo = target.offset().top - 64 + 35; // header height + 35 margin top
      }

      $('html, body').animate({
        scrollTop: scrollTo
      }, 250);
      return false;
    }
  });

  $('.menu-toggle').click(function() {
    $('nav.menu').toggle();
  })

})
