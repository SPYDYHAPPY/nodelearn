//use express module
const express = require("express");
const router = express.Router();


//Orders route
router.get("/", (req, res) => {
    res.render('admin/orders',{
      title: "Orders",
      desc: "Orders"           
    }); 
  });

    
module.exports = router;