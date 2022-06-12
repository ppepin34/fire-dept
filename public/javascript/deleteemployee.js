async function deleteFormHandler(event) {
    event.preventDefault();
  
    const last_name = document.querySelector('#modaldeleteLN').value.trim();
    const first_name = document.querySelector('#modaldeleteFN').value.trim();
    const email = document.querySelector('#modaldeleteEmail').value.trim();

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-employeemodal').addEventListener('click', deleteFormHandler);
  

  //work in progress//