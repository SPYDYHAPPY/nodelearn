//use express module
const express = require("express");
const router = express.Router();
let ListofCustomer = require("../../Controllers/admin/CustomersController");


//Customers route
router.get('/customers', ListofCustomer);
    
module.exports = router;