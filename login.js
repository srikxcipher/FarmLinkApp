document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
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
  