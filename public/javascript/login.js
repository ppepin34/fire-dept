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
  
async function addEmpFormHandler(event) {
    event.preventDefault();

    const lastName = document.querySelector('#modalLN').value.trim();
    const firstName = document.querySelector('#modalFN').value.trim();
    const username = document.querySelector('#modalUN').value.trim();
    const email = document.querySelector('#modalEmail').value.trim();
    const rank = document.querySelector('#modalRank').value.trim();
    const stationID = document.querySelector('#modalSID').value.trim();
    const password = document.querySelector('#modalPW').value.trim();
  
    if (lastName && firstName && email && rank && stationID && password) {
      const response = await fetch('/api/employee', {
        method: 'post',
        body: JSON.stringify({
          lastName,
          firstName,
          username,
          email,
          rank,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.add-employee').addEventListener('submit', addEmpFormHandler);