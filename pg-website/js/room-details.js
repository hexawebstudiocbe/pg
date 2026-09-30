// room-details.js
document.addEventListener('DOMContentLoaded', () => {
    // Room Details Swiper
    if (document.querySelector('.room-gallery-swiper')) {
        const gallerySwiper = new Swiper('.room-gallery-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }
});
