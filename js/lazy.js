const slides = document.querySelectorAll('.banner-slide');

slides.forEach((slide, index) => {
    if (index !== 0) {
        const bg = slide.style.backgroundImage;
        slide.style.backgroundImage = 'none';

        setTimeout(() => {
            slide.style.backgroundImage = bg;
        }, 2000); // carrega depois
    }
});