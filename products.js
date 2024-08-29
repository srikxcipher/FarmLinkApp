document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('article');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
                `;
                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
