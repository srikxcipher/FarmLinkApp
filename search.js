document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    });
});
