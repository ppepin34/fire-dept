async function addEmpFormHandler(event) {
    event.preventDefault();

    const last_name = document.querySelector('#signupLN').value.trim();
    const first_name = document.querySelector('#signupFN').value.trim();
    const username = document.querySelector('#signupUN').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const rank = document.querySelector('#signupRank').value.trim();
    const station_id = parseInt(document.querySelector('#signupSID').value);
    const password = document.querySelector('#signupPW').value.trim();

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
          alert(response.statusText);
        }
      }
};

document.getElementById('add-employeemodal').addEventListener('submit', addEmpFormHandler);
