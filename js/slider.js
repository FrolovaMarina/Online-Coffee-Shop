const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); 

swiper.slideNext();

