async function updateFormHandler(event) {
    event.preventDefault();

    const id = document.getElementById(updateId);
    const rank = document.getElementById(updateRank);
    const station_id = document.getElementById(updateSID).ariaValueMax;
    const certs = document.getElementById(updateCerts)
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