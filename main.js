/* Change navbar color */
const navBar = document.querySelector('nav')

window.addEventListener('scroll', () => {
    navBar.classList.toggle('window-scroll', window.scrollY > 0)
})


/* Show/hide FAQ answer */
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus'
        } else {
            icon.className = 'fa-solid fa-plus'
        }
    })
})

/* Swiper slider */
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})