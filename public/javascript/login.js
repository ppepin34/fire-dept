async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/employee/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
    // check the response status
    if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert('Login attempt unsuccessful. Please check your email and password and try again.');
      }
    }
  }
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);