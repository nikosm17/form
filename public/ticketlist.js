const ticketList = document.getElementById('ticketlist');

async function loadTickets(){
    const res = await fetch('/tickets');
    const tickets = await res.json();
    ticketList.innerHTML='';

    ticketList.forEach(ticket =>{
        const row = document.createElement('tr');
        row.innerHTML = `<td><input type="checkbox"/></td>,
        <td>${ticket.client}</td>,
        <td>${ticket.description}</td>,
        <td>${ticket.status}</td>`;
        ticketList.appendChild(row);
    });
}