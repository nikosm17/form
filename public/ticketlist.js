const ticketList = document.getElementById('ticketlist');

async function loadTickets(){
    const res = await fetch('/tickets');
    const tickets = await res.json();
    ticketList.innerHTML='';

    tickets.forEach(ticket =>{
        const row = document.createElement('tr');
        row.innerHTML = `<td>${ticket.client}</td>
        <td>${ticket.telephone}</td>
        <td>${ticket.description}</td>
        <td>${ticket.tech}</td>
        <td>
            <select>
                <option ${ticket.status === 'Ανοιχτό' ? 'selected' : ''}>Ανοιχτό</option>
                <option ${ticket.status === 'Σε εξέλιξη' ? 'selected' : ''}>Σε εξέλιξη</option>
                <option ${ticket.status === 'Λύθηκε' ? 'selected' : ''}>Λύθηκε</option>
            </select>
        </td>`;
        ticketList.appendChild(row);
    });
}
loadTickets()