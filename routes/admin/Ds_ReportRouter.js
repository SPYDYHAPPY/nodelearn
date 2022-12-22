
//use express module
const express = require("express");
const router = express.Router();


//Reports route
router.get("/", (req, res) => {
    res.render('admin/reports',{
      title: "Reports",
      desc: "Reports"           
    }); 
  });
  
  module.exports = router;