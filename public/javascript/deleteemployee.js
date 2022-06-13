async function deleteFormHandler(event) {
    event.preventDefault();
    console.log('this');
  
    const id = document.querySelector('#deleteEmployee').value;

    const response = await fetch(`/api/employee/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/info/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#deleteEmployee').addEventListener('submit', deleteFormHandler);
  

  //work in progress//