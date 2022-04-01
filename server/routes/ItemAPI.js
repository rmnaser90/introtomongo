const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

router.post('/', async function (req,res) {
    const item = req.body
    const itemDb = new Item(item)
    const dbRes = await itemDb.save()
    res.send(dbRes)
})

router.get('/', async function (req,res) {
    const items =await Item.find({})
    res.send(items)
})

module.exports = router