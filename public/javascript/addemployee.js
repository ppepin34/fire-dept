// -------- ADD EMPLOYEE JAVASCRIPT (make adding an employee work) --------

async function addEmpFormHandler(event) {
  event.preventDefault();

  const last_name = document.querySelector('#modalLN').value.trim();
  const first_name = document.querySelector('#modalFN').value.trim();
  const username = document.querySelector('#modalUN').value.trim();
  const email = document.querySelector('#modalEmail').value.trim();
  const rank = document.querySelector('#modalRank').value.trim();
  const station_id = document.querySelector('#modalSID').value;
  const password = document.querySelector('#modalPW').value.trim();

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
}

document.querySelector('.add-employeemodal').addEventListener('submit', addEmpFormHandler);