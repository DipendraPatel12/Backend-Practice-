const express = require('express');

const app = express();

const port = 4000;
app.use(function (req, res, next) {
    console.log('i am a middleware');
    next();

})

app.use(function (req, res, next) {
    console.log('i am 2nd middleware');
    next();

})

app.get('/', (req, res) => {
    res.send('welcome to the jungle')
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})
app.get('/about/:id', (req, res) => {
    res.send(`this is ${req.params.id} page`)
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});