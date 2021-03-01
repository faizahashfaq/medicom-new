const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Category = require('../models/Category')
router.get('/', async (req, res)=>{
    const categories = await Category.find({})
    res.send(categories)
})
router.post('/add-category', async (req, res)=>{
    const category = new Category({
        name: req.body.name
    })
    await category.save()
    .then(()=>{
        res.json({
            message: "Category Created."
        })
    }).catch(()=>{
        res.json({message: "Error occured saving Category"})
    })
})


module.exports = router