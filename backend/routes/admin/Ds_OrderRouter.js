//use express module
const express = require("express");
const router = express.Router();
let OrderPage = require("../../Controllers/admin/OrderController")

//Orders route
router.get('/orders', OrderPage);

    
module.exports = router;