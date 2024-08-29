document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const slides = document.querySelector('.carousel-wrapper');
    const slideCount = document.querySelectorAll('.carousel-slide').length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Optionally: Auto-slide functionality
    setInterval(() => {
        nextButton.click();
    }, 5000); // Change slide every 5 seconds
});
