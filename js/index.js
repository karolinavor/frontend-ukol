document.addEventListener("DOMContentLoaded", function(event) { 
    
    const swiper = new Swiper('.swiper-gallery', {
        autoplay: true,
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
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
                spaceBetween: 1
            }
          }
    });
  
  let toggleMobileMenu = () => {
    let nav = document.querySelector('nav');
    let body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
    nav.classList.toggle('mobile');
  }
  
  document.querySelector(".nav-mobile-button").addEventListener("click", toggleMobileMenu);
});