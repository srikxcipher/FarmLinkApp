// Function to load the cart items
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const cartMessage = document.getElementById('cart-message');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        // Show the empty cart message
        if (cartMessage) {
            cartMessage.innerHTML = '<td colspan="5" class="text-center">Your cart is empty.</td>';
        }
    } else {
        // Populate the cart table with items
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button></td>
            `;
            cartItems.appendChild(row);
        });

        // Hide the empty cart message if there are items
        if (cartMessage) {
            cartMessage.innerHTML = '';
        }
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Function to handle checkout and redirect to payment page
function proceedToCheckout() {
    window.location.href = 'payment.html';
}

// Load the cart when the page loads
document.addEventListener('DOMContentLoaded', loadCart);
