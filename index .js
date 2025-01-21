document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.textContent = ''; // Clear previous errors
  
    if (!name || !email || !message) {
      errorMessage.textContent = 'All fields are required.';
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }
  
    errorMessage.textContent = 'Form submitted successfully!';
  });
  