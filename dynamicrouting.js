const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('welcome to the jungle')
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})
app.get('/about/:name', (req, res) => {
    res.send(`this is ${req.params.name} page`)
})

app.get('/about/:name/:age', (req, res) => {
    res.send(`this is ${req.params.name} page and age is ${req.params.age}`)
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});