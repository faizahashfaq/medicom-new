<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/userModel");
router.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});
router.get("/:id", async (req, res) => {
  const user =
    (await User.findOne({ _id: req.params.id })) ||
    (await User.findOne({ email: req.body.email }));
  res.json(user);
});

router.post("/signup", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });
  await user
    .save()
    .then(() => {
      const users = User.find({});
      res.json({
        message: "User Saved",
      });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
=======
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
>>>>>>> 2558a6177517bab4d85ad06ee451c75f6141e847
