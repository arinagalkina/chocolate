new Swiper('.review__slider', { 
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true, 
    }, 
    grabCursor: true, 
    slideToClickedSlide: true, 
    keyboard: { 
      enabled: true, 
      onlyinViewport: true, 
    }, 
   
    freeMode: true, 
    autoplay: { 
      delay: 2000, 
      stopOnLastSlide: false, 
      disableonInteraction: true, 
    }, 
    speed: 750, 
    breakpoints: { 
      320: { 
        slidesPerView: 1, 
      }, 
      768: { 
        slidesPerView: 2, 
        spaceBetween: 16, 
      }, 
      1200: { 
        slidesPerView: 3.3, 
        spaceBetween: 28, 
      }, 
    }, 
  });