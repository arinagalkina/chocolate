  new Swiper('.products__slider', { 
    pagination: { 
      el: '.swiper__pagination', 
      clickable: true, 
    }, 
    grabCursor: true, 
    // slideToClickedSlide: true, 
    keyboard: { 
      enabled: true, 
      onlyinViewport: true, 
    }, 
    // mousewheel: { 
    //   sensitivity: 2, 
    //   eventsTarget: '.reviews__slider', 
    // }, 
    freeMode: true, 
    simulateTouch: false, 
    autoplay: { 
      delay: 2000, 
      stopOnLastSlide: false, 
      disableonInteraction: true, 
    }, 
    speed: 750, 
    // effect: 'coverflow' 
    breakpoints: { 
      320: { 
        slidesPerView: 1, 
        spaceBetween: 0, 
      }, 
      768: { 
        slidesPerView: 3.8, 
        spaceBetween: 16, 
      }, 
      1200: { 
        slidesPerView: 4, 
        spaceBetween: 18, 
      }, 
    }, 
  });