function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "deepika@gmail.com" || password === "123456") {
      displayErrorMessage('Please fill in all fields.');
      return;
    }
    displayErrorMessage(''); 
    alert('Login successful!');
    document.getElementById('signin-form').reset();
  }
  
  function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
  }

 
  