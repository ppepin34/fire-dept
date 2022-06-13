async function deleteFormHandler(event) {
    event.preventDefault();
    console.log('this');
  
    const id = document.querySelector('#deleteEmployee').value.trim();

    const response = await fetch(`/api/employee/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/info/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.getElementById('deleteEmployee').addEventListener('submit', deleteFormHandler);
  

  //work in progress//