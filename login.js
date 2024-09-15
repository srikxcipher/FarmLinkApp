document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Handle Signup Form Submission
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userType = document.querySelector('input[name="userType"]:checked')?.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/register', { // Adjust URL if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role: userType })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful');
        // Optionally handle successful registration here (e.g., redirect to login page)
        window.location.href = '/userProfile.html';
      } else {
        alert(`Error: ${data.errors.map(error => error.msg).join(', ')}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  });
  // Handle Login Form Submission
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      const email = document.getElementById('loginEmail').value;
      const user_password = document.getElementById('loginPassword').value;
    
  
      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, user_password }),
        });
        alert(response.ok);
        // Check if the response is successful
        
        if (response.ok) {
          
          const data = await response.json();
          localStorage.setItem('token', data.token);
          alert(response.ok);
          window.location.href = '/userProfile.html'; // Update this path to match your actual user profile page
        } else {
          // If the response is not OK, get the error message
          const errorData = await response.json();
          console.error('Error data:', errorData); // Log the error data to the console
          alert(errorData.msg || 'Login failed'); // Show error message
        }
      } catch (error) {
        console.error('Fetch error:', error); // Log the error to the console
        alert('An error occurred'); // Show general error message
      }
    });
  });
  