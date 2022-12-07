const express = require("express");
const {products,getById} = require("../pages/products/bedroom");
const {getProducts} = require("../pages/users/login")
const router = express.Router();

router.get("/products", products);
router.get("/get-product", getById);
router.get("/user-products", getProducts);

module.exports = router; 