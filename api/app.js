const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Executando...')
}).catch(err => {
    console.log(err)
})


app.get('/home', function (req, res) {
    res.send('API Online')
})

app.listen(3001, () => console.log("Servidor Executando... porta:3001"))