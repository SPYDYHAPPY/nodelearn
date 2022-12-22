//use express module
const express = require("express");
const router = express.Router();

//local-store route
router.get("/cart", (req, res) => {
  res.render('cart_load',{
    title: "Purchase",
    desc: "Cart Section"           
  }); 
});


module.exports = router;