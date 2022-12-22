//use express module
const express = require("express");
const router = express.Router();




//Track Orders route
router.get("/", (req, res) => {
    res.render('admin/track',{
      title: "Track Orders",
      desc: "Track Orders"           
    }); 
  });
  

  module.exports = router;