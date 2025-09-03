const swiper = new Swiper('.swiper', {
    slidesPerView: 2.5,
    centeredSlides: false,
    spaceBetween: 10,
    speed: 1000,
    loop: true,
    grabCursor: true,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
    delay: 3000,
    },
    breakpoints: {
    // when window width is >= 576px
    576: {
        slidesPerView: 1.5,
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
    },
    // when window width is >= 1200px
    1200: {
        slidesPerView: 2.5,
    }
    }
});