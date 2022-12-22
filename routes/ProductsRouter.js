//use express module
const express = require("express");
const router = express.Router();

// Route for products Page
router.get("/", (req, res) => {
  res.render('all_products', {
    title: "Product List",
    desc: "Products Section"
  });
});

module.exports = router;