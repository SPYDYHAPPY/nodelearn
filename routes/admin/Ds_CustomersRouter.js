//use express module
const express = require("express");
const router = express.Router();



//Customers route
router.get('/customers', (req, res) => {
    res.render('admin/customers',{
      title: "Customers",
      desc: "Customers"
    });
  });
    
module.exports = router;