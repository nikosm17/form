const form = document.getElementById('ticketForm');
const client = document.getElementById('client');
const description = document.getElementById('description');
const status = document.getElementById('status');
const telephone = document.getElementById('telephone');
const tech = document.getElementById('tech');

form.addEventListener('submit', async(e)=>{
    const newTicket = {
        client: client.value,
        telephone: telephone.value,
        description: description.value,
        status: status.value,
        tech: tech.value
    };
    const res = await fetch('/tickets', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTicket)
    });

    if(res.ok){
        window.location.href = 'nextpage.html';
    }
})