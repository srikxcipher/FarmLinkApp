document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            ratingValue.textContent = rating;
            resetStars();
            highlightStars(rating);
        });

        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
            const selectedRating = ratingValue.textContent;
            resetStars();
            highlightStars(selectedRating);
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function highlightStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
    }
});

