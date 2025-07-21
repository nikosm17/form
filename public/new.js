const form = document.getElementById('ticketForm');

form.addEventListener('submit', async(e)=>{
    const newTicket = {
        client: form.client.value,
        description: form.description.value,
        status: form.status.value
    };
    const res = await fetch('/tickets', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTicket)
    });

    if(res.ok){
        window.location.href = 'new.html';
    }
})