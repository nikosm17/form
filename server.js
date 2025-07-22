const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const accounts = JSON.parse(fs.readFileSync('./accounts.json'));
const ticket_file = path.join(__dirname, 'tickets.json');

app.post('/login', (req, res) => {
  const { userinput, passinput } = req.body;

  const user = accounts.find(acc => acc.username === userinput && acc.password === passinput);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/tickets', (req, res)=>{
  const newticket = req.body;

  fs.readFile(ticket_file, (err,data)=>{
    const tickets = JSON.parse(data || '[]');
    tickets.push(newticket);

    fs.writeFile(ticket_file, JSON.stringify(tickets, null, 2), (err)=>{
      if (err) return res.status(500).send('Error saving ticket');
      res.status(200).send('Ticket added');
    });
  });
});

app.get('/tickets', (req, res) => {
  fs.readFile(ticket_file, (err, data) => {
    if (err) return res.status(500).send('Error reading tickets');
    const tickets = JSON.parse(data || '[]');
    res.json(tickets);
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});