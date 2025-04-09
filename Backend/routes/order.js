const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { userAuth } = require('../middleware.js');

const orderController = require("../controllers/order.js");

router.route("/")
.post(userAuth, wrapAsync(orderController.createOrder)) // Create a new order
.get(userAuth, wrapAsync(orderController.getOrders)); // Get all orders for the authenticated user

module.exports = router;