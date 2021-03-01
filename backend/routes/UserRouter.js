const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../models/userModel')
router.get('/', async (req, res)=>{
    const users = await User.find({})
    res.send(users)
})


router.post('/signup',async (req,res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,  
    })
    await user.save()
    .then(()=>{
        const users = User.find({})
        res.json({
            message: "User Saved"
        })
    })
    .catch(err => res.json(err))
})


module.exports = router