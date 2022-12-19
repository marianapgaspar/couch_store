const express = require("express");
const {products,getById, getTotalById} = require("../pages/products/bedroom");
const {getProducts} = require("../pages/users/login")
const paymentsController = require('../pages/payment/payments');
const router = express.Router();

router.get("/products", products);
router.get("/get-product", getById);
router.get("/get-total", getTotalById);
router.get("/user-products", getProducts);
router.post('/payment/checkout', paymentsController.checkout)


module.exports = router; 