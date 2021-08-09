$(function() {
    // モバイルメニュー開閉
    $('.menu-toggle').click(function() {
        $('#mobile-menu').fadeToggle(500);
    });

    // ページ内スクロール
    $('.link-items').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top-86;
        $('html, body').animate({'scrollTop': position}, 500);
    });

    // 要素をふわっと表示
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });

    // FAQアコーディオン
    $('.faq-list-item').click(function() {
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.slideUp();
            $answer.removeClass('open');
        } else {
            $answer.slideDown();
            $answer.addClass('open');
        }
    });
});

// Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 100,
    direction: 'horizontal',
    autoplay: {
      delay: 0,
    },
    speed: 5000,
    breakpoints: {
        1192: {
            centeredSlides: true,
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        850: {
            centeredSlides: true,
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        508: {
            centeredSlides: true,
            slidesPerView: 1.5,
            spaceBetween: 10,
        },

    }
  });
