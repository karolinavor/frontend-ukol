document.addEventListener("DOMContentLoaded", function(event) { 
    
    const swiper = new Swiper('.swiper-gallery', {
        autoplay: true,
        loop: true,
        speed: 500,
        delay: 3000,
        slidesPerView: 1,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 1
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 1
            }
          }
    });

});