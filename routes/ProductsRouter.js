//use express module
const express = require("express");
const router = express.Router();

const hbs = require("hbs");
const { products } = require("../products");

hbs.registerHelper("list", function loadProducts(item, options) {
  const itemsAsHtml = products.map(item => options.fn(item));
  return itemsAsHtml.join("\n");
});

// Route for products Page
router.get("/all-products", (req, res) => {
  res.render('all_products', {
    title: "Product List",
    desc: "Products Section"
  });
});

module.exports = router;