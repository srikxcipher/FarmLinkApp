document.addEventListener("DOMContentLoaded", function () {
    // Star rating functionality
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", function () {
            // Set the selected rating value
            selectedRating = this.getAttribute("data-value");
            ratingValue.textContent = selectedRating;

            // Reset the star styles
            stars.forEach(s => s.classList.remove("active"));

            // Highlight the selected rating stars
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    // Handle the review form submission
    const reviewForm = document.querySelector(".review-form");
    const reviewList = document.getElementById("review-list");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the form data
        const reviewerName = document.getElementById("reviewer-name").value;
        const reviewerMessage = document.getElementById("reviewer-message").value;

        // Create a new review list item
        const newReview = document.createElement("li");
        newReview.classList.add("list-group-item");

        // Format the review content
        newReview.innerHTML = `
            <strong>${reviewerName}</strong> - "${reviewerMessage}" 
            <span class="badge badge-success">${selectedRating} Stars</span>
        `;

        // Add the new review to the list
        reviewList.appendChild(newReview);

        // Reset the form
        reviewForm.reset();
        ratingValue.textContent = "0";
        stars.forEach(s => s.classList.remove("active"));
    });
});
