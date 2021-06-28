'use strict'

{
// スマートフォンメニュー
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const menu = document.getElementById('menu');
  const mask = document.getElementById('mask');
  const menuitems = document.querySelectorAll('.menuitem');

  open.addEventListener('click', () => {
    menu.classList.add('show');
    mask.classList.add('show');
    open.style.visibility = "hidden";
  });

  close.addEventListener('click', () => {
    menu.classList.remove('show');
    mask.classList.remove('show');
    open.style.visibility = "visible";
  });

  menuitems.forEach(menuitem => {
    menuitem.addEventListener('click', () => {
      menu.classList.remove('show');
      mask.classList.remove('show');
      open.style.visibility = "visible";
    });
  });

// FAQアコーディオン
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        };
      });
    });
  });

// 制作実績Swiper
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

// ページスクロール
  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
    const header = document.querySelector('header');

    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        const headerHeight = header.offsetHeight;
        const totalScrollAmount = targetOffsetTop - headerHeight;
        window.scrollTo({
          top: totalScrollAmount,
          behavior: "smooth"
        });
      });
    });
  });

}
