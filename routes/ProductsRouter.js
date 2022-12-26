//use express module
const express = require("express");
const router = express.Router();
let {productList, Singleproduct} = require("../Controllers/ProductController");



// Route for products Page
router.get("/all-products",productList)
router.get("/product/:productid", Singleproduct)


module.exports = router;
