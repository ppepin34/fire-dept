async function addEmpFormHandler(event) {
    event.preventDefault();

    const last_name = document.querySelector('#modalLN').value.trim();
    const first_name = document.querySelector('#modalFN').value.trim();
    const username = document.querySelector('#modalUN').value.trim();
    const email = document.querySelector('#modalEmail').value.trim();
    const rank = document.querySelector('#modalRank').value.trim();
    // const station_id = document.querySelector('#modalSID').value.trim();
    const station_id = parseInt(document.querySelector('#modalSID').value);
    const password = document.querySelector('#modalPW').value.trim();
  
    if (username && email && password) {
      await fetch('/api/employee', {
        method: 'post',
        body: JSON.stringify({
          last_name,
          first_name,
          username,
          email,
          rank,
          station_id,
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
