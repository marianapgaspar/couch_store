const {authentication, getAuth} = require("../pages/users/login")
const express = require("express");
const router = express.Router();

router.post("/authenticate", authentication);
router.get("/getAuth", getAuth);

module.exports = router; 
