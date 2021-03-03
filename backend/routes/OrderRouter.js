const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.post("/add-to-cart", async (req, res) => {
  const order = new Order({
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    paymentResult: req.body.paymentResult,
    itemsPrice: req.body.itemsPrice,
    totalPrice: req.body.totalPrice,
    user: req.body.user,
    isPaid: req.body.isPaid,
  });
  await order.save().then(()=>{
    res.json({
      message: "Order Placed."
    })
  })
  .catch(()=>{
    res.json({
      message: "Error Placing Order!"
    })
  })

});
