async function updateFormHandler(event) {
    event.preventDefault();

   
 
    // const id = 
    // const rank =
    // const station_id =
    // const certs = 
    const response = await fetch(`/api/employee/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            rank,
            station_id,
            certIDs
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/info/');
    } else {
        alert(response.statusText);
    }
}