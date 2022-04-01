const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const auth = require('./server/services/auth')
const app = express()
mongoose.connect(process.env.MONGODB_URI, function () {
    console.log('connected to database');
})

const ItemAPI = require('./server/routes/ItemAPI')
const UserApi = require('./server/routes/userApi')
app.use(express.json())

app.use('/user',UserApi)
app.use('/', auth)
app.use('/item', ItemAPI)

const PORT = process.env.PORT
app.listen(PORT, function () {
    console.log("up and running on port" + PORT);
})
// https://guessrami.herokuapp.com/
// https://goldrushrami.herokuapp.com/
// https://catcha-somthing.firebaseapp.com/