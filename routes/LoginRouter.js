//use express module
const express = require("express");
const router = express.Router();
let loginPage = require("../Controllers/LoginController");


//login route
router.get('/user-login', loginPage);

module.exports = router;