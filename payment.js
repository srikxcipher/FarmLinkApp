// Payment Processing Function
function processPayment() {
    // Get UPI ID value
    const upiId = document.getElementById('upi-id').value;
    
    // Get selected bank from Net Banking
    const bankOption = document.getElementById('bank-options').value;
    
    // Determine which payment method was selected
    let selectedMethod = '';
    
    if (upiId) {
        selectedMethod = 'UPI';
        alert(`Processing UPI Payment with UPI ID: ${upiId}`);
    } else if (bankOption) {
        selectedMethod = 'Net Banking';
        alert(`Processing Net Banking Payment via ${bankOption}`);
    } else if (document.querySelector('.razorpay-button').clicked) {
        selectedMethod = 'Razorpay';
        alert('Processing Razorpay Payment');
    } else if (document.querySelector('.stripe-button').clicked) {
        selectedMethod = 'Stripe';
        alert('Processing Stripe Payment');
    } else {
        alert('Please select a valid payment method.');
    }
}

// Event Listeners for Payment Buttons
document.addEventListener('DOMContentLoaded', function () {
    // UPI Payment button
    document.querySelector('.upi-button').addEventListener('click', function () {
        processPayment();
    });

    // Razorpay Payment button
    document.querySelector('.razorpay-button').addEventListener('click', function () {
        alert('Redirecting to Razorpay...');
    });

    // Stripe Payment button
    document.querySelector('.stripe-button').addEventListener('click', function () {
        alert('Redirecting to Stripe...');
    });

    // Net Banking Payment button
    document.querySelector('.netbanking-button').addEventListener('click', function () {
        processPayment();
    });
});
