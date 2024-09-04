document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const offerCheckboxes = document.querySelectorAll('.filter-offer');
    const discountCheckboxes = document.querySelectorAll('.filter-discount');
    const products = document.querySelectorAll('.product');

    // Update price value display
    priceRange.addEventListener('input', function() {
        priceValue.textContent = priceRange.value;
        filterProducts();
    });

    // Filter products
    function filterProducts() {
        const maxPrice = parseFloat(priceRange.value);
        const selectedOffers = Array.from(offerCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        const selectedDiscounts = Array.from(discountCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        products.forEach(product => {
            const productPrice = parseFloat(product.getAttribute('data-price'));
            const productOffers = product.getAttribute('data-offer').split(' | ');
            const productDiscount = product.getAttribute('data-discount');

            const priceMatch = productPrice <= maxPrice;
            const offerMatch = selectedOffers.length === 0 || selectedOffers.some(offer => productOffers.includes(offer));
            const discountMatch = selectedDiscounts.length === 0 || selectedDiscounts.includes(productDiscount);

            if (priceMatch && offerMatch && discountMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Add event listeners for checkboxes
    offerCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    discountCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Initial filter
    filterProducts();
});
