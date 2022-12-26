//use express module
const express = require("express");
const router = express.Router();
let ProductPage = require("../../Controllers/admin/ProductController")


//Products route
router.get('/products', ProductPage);

    
module.exports = router;