const {authentication, getAuth} = require("../pages/users/login")
const express = require("express");
const router = express.Router();

router.post("/authenticate", authentication);

module.exports = router; 
