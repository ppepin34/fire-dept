function addEmpFormHandler(event) {
    event.preventDefault();

    const lastname = document.querySelector('#modalLN').value.trim();
    const firstName = document.querySelector('#modalFN').value.trim();
    const username = document.querySelector('#modalUN').value.trim();
    const email = document.querySelector('#modalEmail').value.trim();
    const rank = document.querySelector('#modalRank').value.trim();
    const stationID = document.querySelector('#modalSID').value.trim();
    const password = document.querySelector('#modalPW').value.trim();
  
    if (username && email && password) {
      const response = fetch('/api/employee', {
        method: 'post',
        body: JSON.stringify({
          lastname,
          firstName,
          username,
          email,
          rank,
          stationID,
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
  };

document.querySelector('.add-employee').addEventListener('submit', addEmpFormHandler);