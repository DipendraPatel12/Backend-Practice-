const express = require('express');
const middle = require('./RouterMiddle')
const route = express.Router();
route.use(middle);
const app = express();

const port = 4000;

// app.get('/', middle, (req, res) => {
//     res.send('welcome to the jungle')
// })

// app.get('/about', (req, res) => {
//     res.send('this is about page')
// })
// app.get('/about/:id',middle, (req, res) => {
//     res.send(`this is ${req.params.id} page`)
// })


route.get('/', (req, res) => {
    res.send('welcome to the jungle')
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})

route.get('/about/:name/:age', (req, res) => {
    res.send(`this is ${req.params.name} page and age is ${req.params.age}`)
})


app.use('/', route)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});