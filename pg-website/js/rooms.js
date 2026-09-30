// rooms.js
document.addEventListener('DOMContentLoaded', () => {
    // Room Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const roomItems = document.querySelectorAll('.room-item');

    if (filterBtns.length > 0 && roomItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('btn-primary'));
                filterBtns.forEach(b => b.classList.add('btn-outline-primary'));
                
                // Add active class to clicked button
                btn.classList.remove('btn-outline-primary');
                btn.classList.add('btn-primary');

                const filterValue = btn.getAttribute('data-filter');

                roomItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Initialize Swiper for Rooms (Homepage featured rooms)
    if (document.querySelector('.rooms-swiper')) {
        const roomsSwiper = new Swiper('.rooms-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });
    }
});
