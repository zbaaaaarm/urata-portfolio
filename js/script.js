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
    loop: true,
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
    },
    
    slideToClikedSlide: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      414: {
        slidesPerView: 1.
      },
      980: {
        slidesPerView: 2,
      },
    },
  });