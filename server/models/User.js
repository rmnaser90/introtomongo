const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    isLoggedIn: Boolean,
    lastLogIn: Number,
    password: String,
    cart: [],
})

const User = mongoose.model('user', userSchema)
module.exports = User
