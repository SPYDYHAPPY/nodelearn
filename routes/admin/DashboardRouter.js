//use express module
const express = require("express");
const router = express.Router();


//dashboard route
router.get("/", (req, res) => {
    res.render('admin/dashboard',{
      title: "User Dashboard",
      desc: "Dashboard"
    }); 
  });

  
module.exports = router;