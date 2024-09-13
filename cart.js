// cart.js

// Example data structure for cart items
let cartItems = [
    { name: 'Sample Product', price: 100, quantity: 2 },
    // Add more items as needed
];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeItem('${item.name}')">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });
}

function removeItem(itemName) {
    cartItems = cartItems.filter(item => item.name !== itemName);
    updateCart();
}

function clearCart() {
    cartItems = [];
    updateCart();
}

function proceedToCheckout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty. Add items to proceed.');
        return;
    }

    // Redirect to checkout page or handle checkout process
    window.location.href = 'checkout.html'; // Replace with actual checkout URL
}

// Initial cart update
updateCart();
