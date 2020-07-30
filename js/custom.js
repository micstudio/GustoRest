(function ($) {
  'use strict';

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
  });


  // change main class in section subscribe
  $(window).bind('resize', function () {
    if ($(window).width() > 1024) {
      $('#dataDiv').removeClass('container-fluid');
      $('#dataDiv').addClass('container');
    } else {
      $('#dataDiv').removeClass('container');
      $('#dataDiv').addClass('container-fluid');
      $('#dataDiv').removeClass('my');
    }
  });

 


  // add class to menu when scroll down -
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
      // $('.arrowUp').css("display","block")
      $('.arrowUp').addClass('arrow-transfrom');
      $('.menu__area').addClass('menu-sticky');
    } else if ($(window).scrollTop() < 10) {
      $('.menu__area').removeClass('menu-sticky');
      $('.arrowUp').removeClass('arrow-transfrom');
      // $('.arrowUp').css("display","none")
    }
  });



  // hamburger menu
  let menuActive = false;
  $('.navbar__mobile').on('click', function () {
    if (!menuActive) {
      $('.navbar__mobile').addClass('change');

      $('.mobile').css('left', '0px');
      menuActive = true;
    } else {
      $('.navbar__mobile').removeClass('change');
      $('.mobile').css('left', '-500px');
      menuActive = false;
    }
  });

  
  $('body,html').click(function(e){
    $('.mobile').removeClass('change');
});

  // SLIDER
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  });

  // SMOOTHSCROLL
  $(function () {
    $('.custom-navbar a, #home a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // WOW ANIMATION
  new WOW({ mobile: false }).init();
})(jQuery);
