const mongoose = require('mongoose')

const Schema = mongoose.Schema
const itemSchema = new Schema({
    name: String,
    description: String,
    qty: Number,
    isAvailable: Boolean,
    price: Number,
    ownerId:String,
    otherSpecs: {}
})

const Item = mongoose.model('item', itemSchema)
module.exports = Item