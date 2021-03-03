const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Product = require('../models/productModel')
router.get('/',  async (req, res)=>{
    const products = await Product.find({})
    res.send(products)
})
router.get('/:id', (req,res)=>{
    const product = Product.findOne({_id: req.params.id})
    res.send(product)
})
router.post('/add-product', async (req,res)=>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.category,
        formulation: req.body.formulation,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        reviews: req.body.reviews
    })
})

module.exports = router