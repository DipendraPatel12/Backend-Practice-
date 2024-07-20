const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('welcome to the jungle')
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})
app.get('/about/:id', (req, res) => {
    res.send(`this is ${req.params.id} page`)
})

// Route with query parameter
app.get('/employees', (req, res) => {
    const { salary } = req.query;
    res.send(`this is the salary - ->  ${salary}`)
})

// 
http://localhost:4000/employees?salary=34000

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });