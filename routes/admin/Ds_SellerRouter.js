
//use express module
const express = require("express");
const router = express.Router();



//Sellers route
router.get('/sellers', (req, res) => {
    res.render('admin/sellers',{
      title: "Sellers",
      desc: "Sellers"           
    }); 
  });

  module.exports = router;