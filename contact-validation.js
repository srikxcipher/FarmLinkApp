document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            alert('Message sent successfully!');
            // Here you would typically send the data to the server
        } else {
            alert('Please fill out all fields.');
        }
    });
});
