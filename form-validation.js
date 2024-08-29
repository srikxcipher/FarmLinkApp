document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector('form');
    
    profileForm.addEventListener('submit', event => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (name === '' || email === '' || password === '') {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});
