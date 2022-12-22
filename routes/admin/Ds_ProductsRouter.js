//use express module
const express = require("express");
const router = express.Router();


//Products route
router.get("/", (req, res) => {
    res.render('admin/products',{
      title: "Products",
      desc: "Products"           
    }); 
  });

    
module.exports = router;