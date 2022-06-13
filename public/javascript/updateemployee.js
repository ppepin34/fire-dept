async function updateFormHandler(event) {
    console.log('boop');
    event.preventDefault();

    const id = parseInt(document.getElementById('updateId').value.trim());
    const rank = document.getElementById('updateRank');
    const station_id = document.getElementById('updateSID').value;
    const certIDs = document.getElementById('updateCerts').value;

    const response = await fetch(`/api/employee/${id}`, {
        method: 'put',
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

document.getElementById('updateEmployee').addEventListener('submit', updateFormHandler);