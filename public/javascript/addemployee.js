// -------- ADD EMPLOYEE JAVASCRIPT (make adding an employee work) --------

    // variables data compenents from the front end form
    const last_name = document.querySelector('#modalLN').value.trim();
    const first_name = document.querySelector('#modalFN').value.trim();
    const username = document.querySelector('#modalUN').value.trim();
    const email = document.querySelector('#modalEmail').value.trim();
    const rank = document.querySelector('#modalRank').value.trim();
    const station_id = parseInt(document.querySelector('#modalSID').value);
    const password = document.querySelector('#modalPW').value.trim();
  
    // conditional to make sure the three fields have values before making the POST request
    if (username && email && password) {
      const response = await fetch('/api/employee', {
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
        document.getElementById("success").style.display = 'block';
      } else {
        console.log('failure to add employee');
        alert(response.statusText);
      }
    }


document.querySelector('.add-employeemodal').addEventListener('submit', addEmpFormHandler);