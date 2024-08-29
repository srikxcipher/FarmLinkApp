document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector('#profile-form');
    
    profileForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (name && email && password) {
            alert('Profile updated successfully!');
            // Here you would typically send the data to the server
        } else {
            alert('Please fill out all fields.');
        }
    });
});
