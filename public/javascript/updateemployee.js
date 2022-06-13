async function updateFormHandler(event) {
    event.preventDefault();
    alert('success');

    const id = document.getElementById('updateId').value.trim();
    const rank = document.getElementById('updateRank');
    const station_id = document.getElementById('updateSID').value;
    const certIDs = document.getElementById('updateCerts').value;
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

document.getElementById('update-employeemodal').addEventListener('submit', updateFormHandler);