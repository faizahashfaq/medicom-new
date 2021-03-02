const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.post("/add-to-cart", async (req, res) => {
  const order = new Order({});
});
