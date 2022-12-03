var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,

    breakpoints: {
        320: {
            slidesPerView: 1.6,
        },

        768: {
            slidesPerView: 2.2,
        },

        900: {
            slidesPerView: 2.8,
        },

        1200: {
            slidesPerView: 3.5,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

AOS.init({
    duration: 1000,
    once: true,
})

function validar() {
    const box = document.querySelector(".warning");
    box.remove('show');
    const main = document.getElementsByTagName("main")[0];
    main.classList.remove('opacity');

    if (true) {
        document.body.style.overflow = 'visible'
    }
}