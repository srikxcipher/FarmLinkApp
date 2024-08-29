document.addEventListener('DOMContentLoaded', () => {
    const productDetail = document.getElementById('product-detail');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            
            if (product) {
                productDetail.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                `;
            } else {
                productDetail.innerHTML = `<p>Product not found.</p>`;
            }
        })
        .catch(error => console.error('Error fetching product details:', error));
});
