
//use express module
const express = require("express");
const router = express.Router();
let SellerPage = require("../../Controllers/admin/Sellercontroller")



//Sellers route
router.get('/sellers', SellerPage);

  module.exports = router;