//use express module
const express = require("express");
const router = express.Router();
let {productList, loadProduct} = require("../Controllers/ProductController");



// Route for products Page
router.get("/all-products",productList)
router.get("/product/:productid", loadProduct)


module.exports = router;
