//use express module
const express = require("express");
const router = express.Router();
let dashBoard = require("../../Controllers/admin/DashboardController")


//dashboard route
router.get('/user-dashboard',  dashBoard);

  
module.exports = router;