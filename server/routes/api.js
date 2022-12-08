const express = require("express");
const {products,getById} = require("../pages/products/bedroom");
const {getProducts} = require("../pages/users/login")
const paymentsController = require('../pages/payment/payments');
const router = express.Router();

router.get("/payment/products", products);
router.get("/payment/get-product", getById);
router.get("/payment/user-products", getProducts);
router.get('/payment/checkout', paymentsController.checkout)

router.get('/payment/success', (req, res) => {
    return res.render('success_screen')
})

router.get('/payment/pending', (req, res) => {
    return res.render('pending_screen')
})

router.get('/payment/failure', (req, res) => {
    return res.render('failure_screen')
})

module.exports = router; 