async function stationClickHandler(event) {
    event.preventDefault();
  

    const response = await fetch('/api/station/employee', {
      method: 'post',
      body: JSON.stringify({
       post_id: id
     }),
      headers: {
        'Content-Type': 'application/json'
     }
   });
  
   if (response.ok) {
     document.location.reload();
   } else {
     alert(response.statusText);
   }
 }
  
 document.querySelector('.stationone-btn').addEventListener('click', stationClickHandler);