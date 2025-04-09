const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const { userAuth } = require('../middleware.js');

const orderController = require("../controllers/order.js");

router.route("/")
.get(userAuth, wrapAsync(orderController.getOrders)) // Get all orders for the authenticated user
.post(userAuth, wrapAsync(orderController.createOrder)); // Create a new order


module.exports = router;