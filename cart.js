// Function to load the cart from local storage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="5">Your cart is empty!</td></tr>';
        return;
    }

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>${item.quantity}</td>
            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });
}

// Function to remove a specific item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Function to clear the entire cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

// Function to proceed to checkout
function proceedToCheckout() {
    alert('Proceeding to checkout...');
    window.location.href = 'checkout.html'; // Replace with your checkout page URL
}

// Load the cart when the page loads
document.addEventListener('DOMContentLoaded', loadCart);
