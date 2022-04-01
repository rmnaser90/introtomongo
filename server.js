const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express()
mongoose.connect(process.env.MONGODB_URI, function () {
    console.log('connected to database');
})

const ItemAPI = require('./server/routes/ItemAPI')

app.use(express.json())
app.use('/', function (req, res, next) {
    const { user } = req.headers
    if (user == 'rami') {
        next()
    } else {
        res.send({ error: true, message: "you're not authenticated" })
    }

})
app.use('/item', ItemAPI)

const PORT = process.env.PORT
app.listen(PORT, function () {
    console.log("up and running on port" + PORT);
})
// https://guessrami.herokuapp.com/
// https://goldrushrami.herokuapp.com/
// https://catcha-somthing.firebaseapp.com/