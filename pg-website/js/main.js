// main.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Hero Slider
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            }
        });
    }

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const isTransparentNav = navbar.classList.contains('transparent');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                if (isTransparentNav) {
                    navbar.classList.remove('transparent');
                }
            } else {
                if (isTransparentNav) {
                    navbar.classList.remove('scrolled');
                    navbar.classList.add('transparent');
                }
            }
        });
        
        // trigger on load
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (isTransparentNav) {
                navbar.classList.remove('transparent');
            }
        }
    }

    // Back to top button
    const backToTop = document.querySelector('.btn-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Availability Search form validation
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Availability check submitted. We will contact you shortly.');
        });
    }

    // Animated Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Only animate if element is in view
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0 && counter.innerText === '0') {
                 updateCount();
            }
        });
    }
    
    if (counters.length > 0) {
        window.addEventListener('scroll', animateCounters);
        animateCounters(); // trigger on load
    }
    
    // Close mobile menu on click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if(menuToggle.classList.contains('show')){
                bsCollapse.toggle();
            }
        })
    });
});
