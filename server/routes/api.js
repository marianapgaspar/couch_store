const express = require("express");
const {products} = require("../pages/products/bedroom");
const {authentication, getAuth} = require("../pages/users/login")
const router = express.Router();

router.get("/products", products);

module.exports = router; 