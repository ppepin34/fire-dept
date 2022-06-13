async function deleteFormHandler(event) {
  console.log('this');  
  event.preventDefault();
    
  
    const id = parseInt(document.querySelector('#deleteEmployee').value);
    console.log(id);

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
